/**
 * Returns whether browser is IE or Edge.
 */
export function detectIE() {
	const ua = window.navigator.userAgent;

	// IE < 11
	if (ua.indexOf('MSIE ') > 0) {
		return true;
	}

	// IE 11
	if (ua.indexOf('Trident/') > 0) {
		return true;
	}

	if (ua.indexOf('Edge/') > 0) {
		return true;
	}

	return false;
}
