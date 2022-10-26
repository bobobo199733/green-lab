import { fromArray, newSet } from '~/shims';

export function union<T>(a: Set<T>, b: Set<T>, ...extra: Set<T>[]): Set<T> {
	const _union = newSet<T>(a);

	for (const item of fromArray(b)) {
		_union.add(item);
	}

	for (const set of [...extra]) {
		for (const item of fromArray(set)) {
			_union.add(item);
		}
	}

	return _union;
}

export function intersection<T>(a: Set<T>, b: Set<T>): Set<T> {
	const _intersection = newSet<T>();
	const smaller = (a.size <= b.size) ? a : b;
	const larger = (a.size <= b.size) ? b : a;

	for (const item of fromArray(smaller)) {
		if (larger.has(item)) {
			_intersection.add(item);
		}
	}

	return _intersection;
}

export function difference<T>(a: Set<T>, b: Set<T>): Set<T> {
	const _difference = newSet<T>(a);

	for (const item of fromArray(b)) {
		if (a.has(item)) {
			_difference.delete(item);
		}
	}

	return _difference;
}

/**
 * Returns a subset of items from `set` that match the given `selector`.
 */
export function getSubset<T>(set: Set<T>, selector: (item: T) => boolean): Set<T> {
	const subset = newSet<T>();

	for (const item of fromArray(set)) {
		if (selector(item)) {
			subset.add(item);
		}
	}

	return subset;
}

/**
 * Removes items from `set` that either match `selector` or belong in `subset`.
 *
 * @description This operation will mutate the original set.
 */
export function subtract<T>(set: Set<T>, subsetOrSelector: Set<T> | ((item: T) => boolean)): Set<T> {
	const subset = (subsetOrSelector instanceof Set)
		? subsetOrSelector
		: getSubset(set, subsetOrSelector);

	for (const item of fromArray(set)) {
		if (subset.has(item)) {
			set.delete(item);
		}
	}

	return set;
}
