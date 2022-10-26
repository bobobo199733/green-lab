/**
 * Simple object check.
 * @param value
 * @returns {boolean}
 */
export function isObject(value: any): value is { [key: string]: any } {
	return (value && typeof value === 'object' && !Array.isArray(value));
}
