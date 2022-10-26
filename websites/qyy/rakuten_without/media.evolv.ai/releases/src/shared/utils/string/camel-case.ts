/**
 * Converts snake case value to camel case.
 *
 * @param value
 */
export function camelCase(value: any): string {
	if (typeof value !== 'string') {
		throw new TypeError('Argument should be of type string');
	}

	if (value === '_') {
		return '_';
	}

	return value
		.replace(/([^^])_([^$])/g, (match: string, left: string, right: string) => {
			return `${left}${right.toUpperCase()}`;
		})
		.replace(/(^_|_$)/g, '');
}
