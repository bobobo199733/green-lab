// © Microsoft Corporation. All rights reserved.
import {
  BreakpointTracker,
  identifyBreakpoint,
} from "@microsoft/fast-layouts-react";
import { canUseDOM } from "./DOMHelpersCore";
import { getRequestData } from "./requestData";
/**
 * Checks if a given JS media query matches in an isomorphic manner
 * NOTE: Only supports min/max-width queries outside of the web client
 * @param query The media query
 * @param breakpoint The current breakpoint, needed if SSR
 */
export function canMatchMedia(query, breakpoint) {
  if (canUseDOM()) {
    return window.matchMedia(query).matches;
  }
  if (breakpoint === undefined) {
    throw Error("Breakpoint must be supplied when server side rendering");
  }
  const maxWidthValues = /max-width:\s?(\d+)/.exec(query);
  const minWidthValues = /min-width:\s?(\d+)/.exec(query);
  const minWidth =
    minWidthValues && minWidthValues.length ? minWidthValues[1] : 0;
  const maxWidth =
    maxWidthValues && maxWidthValues.length ? maxWidthValues[1] : Infinity;
  const minBreakpoint = identifyBreakpoint(
    parseInt(minWidth.toString()),
    BreakpointTracker.breakpoints
  );
  const maxBreakpoint =
    maxWidth === Infinity
      ? BreakpointTracker.breakpoints.length - 1
      : identifyBreakpoint(
          parseInt(maxWidth.toString()),
          BreakpointTracker.breakpoints
        );
  return breakpoint >= minBreakpoint && breakpoint <= maxBreakpoint;
}
/**
 * Get window.navigator.userAgent in an isomorphic manner.
 */
export function getUserAgent() {
  return canUseDOM() ? window.navigator.userAgent : getRequestData().userAgent;
}
/**
 * Get window.location.href in an isomorphic manner.
 */
export function getLocationHref() {
  return canUseDOM() ? window.location.href : getRequestData().url.href;
}
/**
 * Get window.location.hostname in an isomorphic manner.
 */
export function getLocationHostname() {
  return canUseDOM() ? window.location.hostname : getRequestData().url.hostname;
}
/**
 * Get window.location.host in an isomorphic manner.
 */
export function getLocationHost() {
  return canUseDOM() ? window.location.host : getRequestData().url.host;
}
/**
 * Get window.location.origin in an isomorphic manner.
 */
export function getLocationOrigin() {
  return canUseDOM() ? window.location.origin : getRequestData().url.origin;
}
/**
 * Get window.location.search in an isomorphic manner.
 */
export function getLocationSearch() {
  return canUseDOM() ? window.location.search : getRequestData().url.search;
}
/**
 * Get window.location.pathname in an isomorphic manner.
 */
export function getLocationPathname() {
  return canUseDOM() ? window.location.pathname : getRequestData().url.pathname;
}
/**
 * Get window.location.protocol in an isomorphic manner.
 */
export function getLocationProtocol() {
  return canUseDOM() ? window.location.protocol : getRequestData().url.protocol;
}
/**
 * Get window.location.hash in an isomorphic manner.
 */
export function getLocationHash() {
  return canUseDOM() ? window.location.hash : getRequestData().url.hash;
}
/**
 * Get document.cookie in an isomorphic manner.
 */
export function getCookieString() {
  return canUseDOM() ? window.document.cookie : getRequestData().cookie;
}
/**
 * Get window.document.getElementById(elementId).
 */
export function getDocumentElementById(elementId) {
  if (!canUseDOM()) {
    throw new Error(
      "getDocumentElementById is unsupported server side. This call should be wrapped in canUseDOM()."
    );
  }
  return window.document.getElementById(elementId);
}
/**
 * Get window.document.getDocumentElementsByTagName(tagName).
 */
export function getDocumentElementsByTagName(tagName) {
  if (!canUseDOM()) {
    throw new Error(
      "getDocumentElementsByTagName is unsupported server side. This call should be wrapped in canUseDOM()."
    );
  }
  return window.document.getElementsByTagName(tagName);
}
/**
 * Get window.document.getDocumentElementsByClassName(className).
 */
export function getDocumentElementsByClassName(className) {
  if (!canUseDOM()) {
    throw new Error(
      "getDocumentElementsByClassName is unsupported server side. This call should be wrapped in canUseDOM()."
    );
  }
  return window.document.getElementsByClassName(className);
}
/**
 * Get indexedDB in an isomorphic manner.
 * Todo (http://osgvsowi/23753462), provide actual functionality for indexedDB on the server side.
 */
export function getIndexedDB() {
  return canUseDOM() ? window.indexedDB : null;
}
/**
 * Get window.innerHeight in an isomorphic manner.
 * Todo (http://osgvsowi/23876778), remove the need for server to know about innerWidth by limiting layout options or use CSS based solution.
 */
export function getInnerHeight() {
  return canUseDOM() ? window.innerHeight : getRequestData().innerHeight;
}
/**
 * Get window.devicePixelRatio in an isomorphic manner.
 */
export function getDevicePixelRatio() {
  return canUseDOM()
    ? window.devicePixelRatio
    : getRequestData().devicePixelRatio;
}
/**
 * Get CSS Grid support in an isomorphic manner
 */
export function getCssGridSupport() {
  return !!(canUseDOM()
    ? window.CSS && window.CSS.supports && CSS.supports("display", "grid")
    : getRequestData().canUseCssGrid);
}
/**
 * Get variable font support in an isomorphic manner
 * TODO: SSR currently does not support custom fonts.
 */
export function getVariableFontSupport() {
  if (!canUseDOM()) {
    throw new Error("SSR currently does not support custom fonts.");
  }
  return !!(
    window.CSS &&
    window.CSS.supports &&
    CSS.supports("(font-variation-settings: normal)")
  );
}
/**
 * Returns a script element using several default values.
 * Not supported server side.
 * @param src The absolute URL for the script src. Default is undefined, blank is okay.
 * @param id The id to assign the script element. default is "" so no id.
 * @param loadAsync Should the script load asynchronously. Default is true.
 * @param crossOrigin Set the script crossorigin attribute. Default is anonymous.
 * @param className The optional className to assign the script element.
 * @returns {HTMLScriptElement} the script element. not using const so it can be overridden by caller.
 */
export function createScriptTag(
  src = undefined,
  id = undefined,
  loadAsync = true,
  crossOrigin = "anonymous",
  className
) {
  if (!canUseDOM()) {
    throw new Error(
      "createScriptTag is unsupported server side. This call should be wrapped in canUseDOM()."
    );
  }
  const scriptElement = document.createElement("script");
  if (id) {
    scriptElement.id = id;
  }
  if (className) {
    scriptElement.setAttribute("class", className);
  }
  scriptElement.type = "text/javascript";
  if (src) {
    scriptElement.src = src;
    scriptElement.async = loadAsync;
    scriptElement.crossOrigin = crossOrigin;
  }
  // @ts-ignore
  if (window && window.NONCE_ID) {
    // @ts-ignore
    scriptElement.nonce = window.NONCE_ID;
  }
  return scriptElement;
}
//# sourceMappingURL=DOMHelpers.js.map
