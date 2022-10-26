/** @internal */

/*
 * Re-exports native browser objects and functions as constants
 * so that names can be minified by mangling.
 */

/* Objects */
export const document = window.document;
export const localStorage = window.localStorage;
export const location = window.location;
export const sessionStorage = window.sessionStorage;

/* Functions */
export const addEventListener = window.addEventListener.bind(window);
export const removeEventListener = window.removeEventListener.bind(window);

export const clearTimeout = window.clearTimeout.bind(window);
export const setTimeout = window.setTimeout.bind(window);

export const createElement = document.createElement.bind(document);
export const querySelector = document.querySelector.bind(document);
export const querySelectorAll = document.querySelectorAll.bind(document);

/* Superglobals (do not technically exist on window) */
// @ts-ignore
export const decodeURI = window.decodeURI;
// @ts-ignore
export const decodeURIComponent = window.decodeURIComponent;
// @ts-ignore
export const encodeURI = window.encodeURI;
// @ts-ignore
export const encodeURIComponent = window.encodeURIComponent;
