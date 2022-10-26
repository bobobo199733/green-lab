import { fromArray } from '~/shims';

/**
 * Converts the given map to an object.
 */
export function toObject<K extends string, V>(map: Map<K, V>): Record<K, V> {
	return fromArray(map)
		.reduce((acc, [key, value]) => {
			acc[key] = value;
			return acc;
		}, {} as Record<K, V>);
}
