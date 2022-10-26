import { findIndex, fromArray, newSet } from '~/shims';
import { union } from '../set-utils';


export type Deflated<T, K extends string> = Record<keyof T, number[]> & { [P in K]: string[] };

/**
 * Returns a deflated object where the property `lookupName` contains the list of unique values from the other properties
 * and each list property is remapped to indexes in the lookup list.
 *
 * @description
 * The purpose of deflation is to condense the size of an object whose properties are lists of large values. Deflation
 * will collect the unique values from every property of `lists` (each property is assumed to be an array) and will then
 * insert a new property `lookupName` that contains the consolidated list. It will then replace the values in each list
 * with indexes into the lookup list.
 *
 * @param lists
 * @param lookupName
 */
export function deflate<T extends Record<string, string[]>, K extends string>(lists: T, lookupName: K): Deflated<T, K> {
	const keys = Object.keys(lists);
	const sets = keys.reduce((acc, key) => union(acc, newSet(lists[key])), newSet<string>());
	const deflated = {} as Record<keyof T, number[]>;

	const lookup = fromArray(sets);

	for (const key of keys as (keyof T)[]) {
		deflated[key] = lists[key].map(item => findIndex(lookup, id => item === id));
	}

	return {
		[lookupName]: lookup,
		...deflated
	};
}

export type Inflated<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] extends number[] ? string[] : never[] };

/**
 * Returns an inflated object where list properties have been mapped back to values in the lookup list. The reverse operation
 * of deflate().
 *
 * @description
 * The lookup property is not included in the return value.
 *
 * @param lists
 * @param lookupName
 */
export function inflate<T extends Record<string, any>, K extends keyof T>(lists: T, lookupName: K): Inflated<T, K> {
	const {
		[lookupName]: lookup,
		...inflated
	} = lists;

	if (!lists) {
		return inflated;
	}

	for (const key of Object.keys(inflated) as Exclude<keyof T, K>[]) {
		inflated[key] = (inflated[key] as number[]).map(index =>
			lookup[index]
		) as any;
	}

	return inflated;
}
