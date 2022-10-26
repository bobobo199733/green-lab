import { newSet } from '~/shims';
import { difference, intersection } from '../utils';


export interface SetComparison<T> {
	added: Set<T>;
	removed: Set<T>;
	unchanged: Set<T>;
}

export function compareSets<T>(a: Set<T>| T[] | IterableIterator<T>, b: Set<T> | T[] | IterableIterator<T>): SetComparison<T> {
	const setA = (a instanceof Set) ? a : newSet(a as T[]);
	const setB = (b instanceof Set) ? b : newSet(b as T[]);

	return {
		added: difference(setB, setA),
		removed: difference(setA, setB),
		unchanged: intersection(setA, setB)
	};
}
