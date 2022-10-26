/**
 * Parses string to RegExp object
 *
 * @param regexString
 */
export function parseRegex(regexString: string = ''): RegExp {
	const matches = regexString.match(/^\s*\/(.*)\/([gmiyus]*)\s*$/);

	if (matches) {
		regexString = matches[1];
		const flags = matches[2];
		return new RegExp(regexString, flags);
	} else {
		return new RegExp(regexString);
	}
}
