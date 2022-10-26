import { fromArray, newMap, newSet } from '~/shims';
import { compareSets, SetComparison } from './index';


export type PartitionFn<T, P> = (item: T) => P;

export interface PartitionSetComparison<T, P> {
	items: SetComparison<T>;
	partitions: SetComparison<P>;
}

/**
 * A `PartitionSet` is a `Set` that also partitions its items into disjoint sets.
 *
 * @description
 * A `PartitionSet` is useful for finding when items are added to or removed from a particular group.
 * The `compare()` method report what items have been added or removed from the set as well as what
 * groups have had items added or removed from them.
 */
export class PartitionSet<T, P> {
	public readonly partitions = newMap<P, Set<T>>();
	public readonly items: Set<T> = newSet<T>();

	constructor(public readonly relation: PartitionFn<T, P>, values?: Set<T>| T[] | IterableIterator<T>) {
		if (values) {
			for (const value of fromArray(values)) {
				this.add(value);
			}
		}
	}

	add(item: T): this {
		const key = this.relation(item);

		if (!this.partitions.has(key)) {
			this.partitions.set(key, newSet());
		}

		const partitionItems = this.partitions.get(key)!;
		partitionItems.add(item);

		this.items.add(item);

		return this;
	}

	delete(item: T): boolean {
		const key = this.relation(item);
		const partition = this.partitions.get(key);

		if (partition) {
			partition.delete(item);

			if (partition.size === 0) {
				this.partitions.delete(key);
			}
		}

		return this.items.delete(item);
	}

	/**
	 * Returns a comparison object that indicates what items have been added, removed, or unchanged
	 * between set `a` and set `b` and which partitions have had items added to or removed from them
	 * or have remained unchanged.
	 *
	 * @param a Base set
	 * @param b Set to compare against
	 * @param relation Function that defines how items are partitioned
	 */
	static compare<T, P>(
		a: IterableIterator<T> | T[],
		b: IterableIterator<T> | T[],
		relation: PartitionFn<T, P>
	): PartitionSetComparison<T, P> {
		const setA = (a instanceof PartitionSet) ? a : new PartitionSet(relation, a);
		const setB = (b instanceof PartitionSet) ? b : new PartitionSet(relation, b);

		return {
			items: compareSets(setA.items, setB.items),
			partitions: compareSets(setA.partitions.keys(), setB.partitions.keys())
		};
	}
}
