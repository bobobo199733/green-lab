import { PromiseShim } from '~/external-shims';
import { detectIE } from '../../shared/utils';

/**
 * Detects whether browser supports modern features in an alternative manner
 * to using the type=module/nomodule approach. (Proxy is a fairly good
 * approximation for ES module support.)
 *
 * navigator.sendBeacon is also included because Safari (OSX <=11.1, iOS <=11.2),
 * despite supporting Proxy, does not support the Beacon API.
 */
export function isEvergreen() {
	return ('Proxy' in window) && navigator.sendBeacon;
}

/**
 * Loads a script strictly by appending a <script> element to the head.
 * @param url
 * @param module
 */
export function loadScriptWithTag(url: string, module: boolean = false): PromiseShim<Event> {
	return new PromiseShim<Event>((resolve, reject) => {
		const scriptTag = document.createElement('script');
		scriptTag.defer = true;
		scriptTag.src = url;

		scriptTag.onload = resolve;
		scriptTag.onerror = reject as any;

		(document.head as HTMLHeadElement).appendChild(scriptTag);
	});
}

/**
 * Load a script by first attempting to document.write() a script element
 * and then fallback to loadScriptWithTag().
 * @param url
 * @param moduleUrl
 */
export function loadScript(url: string, moduleUrl?: string): PromiseShim<any> {
	moduleUrl = moduleUrl || url;
	url = isEvergreen() ? moduleUrl : url;

	// document.write() will overwrite the body, so check that it hasn't been created already.
	if (!document.body && !detectIE()) {
		// TODO: The following code results in a race condition causing the page to stop rendering.
		// document.write(`<script defer src="${url}"></script>`);

		/* Using the $= operator because Testcafe will prepend its proxy URL during
		 * end-to-end testing causing this conditional block to be passed over and
		 * thus the runtime is loaded twice. */
		if (document.querySelector(`[src $= '${url}']`)) {
			return PromiseShim.resolve();
		}
	}

	return loadScriptWithTag(url);
}
