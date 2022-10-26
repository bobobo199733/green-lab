/**
 * Retrofits an object by filling in properties that are undefined in `original` with values from `defaultValue`.
 *
 * @description
 * This function is useful for dealing with values stored in cookies or local storage that have an incompatible shape
 * for a newer version of the code.
 */
export function retrofit<T extends Record<string, any>>(defaultValue: T, current: Partial<T> | null): T {
	current = current || {} as Partial<T>;

	return Object.keys(defaultValue)
		.reduce((acc, key) => {
			acc[key] = (current![key] === undefined)
				? defaultValue[key]
				: current![key];

			return acc;
		}, {} as T);
}
