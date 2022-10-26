// © Microsoft Corporation. All rights reserved.
import { canUseDOM } from "@msnews/isomorphic-util";
/**
 * Check if widgets loading is supported by the host page
 * @returns true if widgets is supported for rendering else false.
 */
export function shouldRenderWidgets() {
  // Make sure that this script runs on proper environment
  // Example: IE11 doesn't support fetch: https://www.caniuse.com/?search=fetch
  if (
    !canUseDOM() ||
    typeof location === "undefined" ||
    typeof fetch === "undefined"
  ) {
    console.error("Missing required global features.");
    return false;
  }
  // Check if browser has following support in order to classify as a modern browser.
  // This will help render React or Web component based Widget(s) on modern browsers.
  // If host page accidentally calls widget-initializer script on unsupported browser,
  // this will protect host page, by not rendering widgets on unsupported browser.
  if (
    typeof customElements === "undefined" ||
    typeof ShadowRoot === "undefined" ||
    typeof HTMLTemplateElement === "undefined"
  ) {
    console.error("Not sure if this is modern browser to render widgets!");
    return false;
  }
  return true;
}
/**
 * Get random guid as RID/ActivityId since PCS call is not made yet
 * @returns GUID
 */
export function getRandomGuid() {
  return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
/**
 * Use pg.p as telemetry => pageProduct if provided by the host page.
 * For windows, use pg.p as entwindowsdash if query="enterprise" is found in pcsAdditionalQsp else use windowsdash.
 * By default use pg.p as appType
 * @param appType appType found in the data-widget json.
 * @param pageProduct pageProduct found in the telemetry object in data-widget json.
 * @param pcsAdditionalQsp pcsAdditionalQsp attribute in the data-widget json. Example: "locale=en-US&region=US&query=enterprise"
 * @returns pg.p (pageProduct) to be used by the widget initializer app errors.
 */
export function getTelemetryPageProduct(
  appType,
  pageProduct = null,
  pcsAdditionalQsp = null
) {
  // Use pageProduct as pg.p if specified by the host page. Example:
  // data-widget: { telemetry: { pageProduct: "bing"}} then we will return "bing" as pg.p
  if (pageProduct && pageProduct.length > 0) {
    return pageProduct;
  }
  // Applicable to AppTypes: winwidgets and windowsnewsplus
  // "query" in pcsAdditionalQsp is typically used by prong2 to distinguish pg.p
  // Based on this query prong2 differentiate enteprise and retail app errors.
  if (
    appType === "windowsNewsPlus" /* AppType.WindowsNewsPlus */ ||
    appType === "winWidgets" /* AppType.WindowsNewsWidgets */
  ) {
    return pcsAdditionalQsp && pcsAdditionalQsp.includes("query=enterprise")
      ? "entwindowsdash"
      : "windowsdash";
  }
  // Default pg.p as appType
  return appType;
}
//# sourceMappingURL=Utilities.js.map
