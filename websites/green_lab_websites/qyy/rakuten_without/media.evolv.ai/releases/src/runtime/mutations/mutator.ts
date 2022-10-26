import { Logger } from '../../shared';
import { NullRecorder, Recorder, Treatment } from '../recorders';
import { ElementMutation } from './mutation';


export type TypeGuard<T> = (value: any) => value is T;


export interface MutatorArgs {
	logger: Logger;
}

export interface Mutator {
	mutate(args: MutatorArgs): void;
	revert(args: MutatorArgs): void;
}

/**
 * Returns a factory for creating mutators for element-based mutations.
 *
 * @remarks
 * This mechanism encapsulates the functionality for reverting and reapplying mutations. When
 * invoking the factory, the callee must provide a generator function that iterates over a list of
 * elements. This iterator should return a 2-tuple when yielding that includes the current element
 * and the original, unmutated value of the element associated with the mutation. These values will
 * be stored in a weak map that maps element => originalValue. When reverting, the original value
 * will be restored from this map.
 *
 * The iterator may optionally accept an `isReverting` argument which indicates whether the current
 * operation is a reversion or not. In most cases the mutate and revert operations are symmetric
 * so it is not necessary to know which is occurring. ClassNamesMutations, when the additive flag
 * is set to true, is one notable exception.
 *
 * @param guard Guard function that checks if mutation is the expected subtype.
 * @param iterator Generator function that iterates over the list of selected elements.
 * @param recorder Type of recorder to use
 */
export function elementMutatorFactory<M extends ElementMutation, K extends Element, V>(
	guard: TypeGuard<M>,
	iterator: (mutation: M, isReverting?: boolean) => IterableIterator<[K, V]>,
	recorder: Recorder<K, V> = NullRecorder
) {
	return (mutation: M) => {
		if (!guard(mutation)) {
			throw new TypeError('The mutation object is not valid for this mutator.');
		}

		const initialValues = new WeakMap<K, V>();

		return {
			mutate() {
				const items = iterator(mutation, false);
				let next = items.next();

				while (!next.done) {
					const [key, value] = next.value;

					if (!initialValues.has(key)) {
						initialValues.set(key, value);
					}

					recorder.record(key, value, Treatment.Mutated);

					next = items.next(mutation.value);
				}
			},
			revert() {
				const items = iterator(mutation, true);
				let next = items.next();

				while (!next.done) {
					const [key, value] = next.value;

					recorder.record(key, value, Treatment.Reverted);

					next = (initialValues.has(key))
						? items.next(initialValues.get(key))
						: items.next(value);
				}
			}
		} as Mutator;
	};
}
