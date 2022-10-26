// © Microsoft Corporation. All rights reserved.
// Split from DOMHelper to aid treeshaking
// which currently adds class definition dependency (eg. RequestData)
// even if they aren't used by code that only uses canUseDOM
//
// This being used in PCS inline scripts so only add to here
// if critically important and do not have any other dependencies;
// otherwise add to DOMHelpers
/**
 * Checks if the DOM is available to access and use.
 * @returns {boolean} - true if DOM is available, or false if it is not. This is typically true for
 * client side rendering and false for server side rendering.
 */
export function canUseDOM() {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
}
//# sourceMappingURL=DOMHelpersCore.js.map
