/**
 * Ponyfill for Object.fromEntries()
 *
 * @param entries
 */
export function fromEntries<T>(entries: [string, T][]): Record<string, T> {
	const obj: Record<string, T> = {};

	for (const [key, value] of entries) {
		obj[key] = value;
	}

	return obj;
}
