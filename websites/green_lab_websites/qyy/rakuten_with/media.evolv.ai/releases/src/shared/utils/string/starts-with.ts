export function startsWith(value: string, prefix: string): boolean {
	if (prefix.length > value.length) {
		return false;
	}

	return value.substr(0, prefix.length) === prefix;
}
