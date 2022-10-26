// © Microsoft Corporation. All rights reserved.
import {
  widgetGroupClassName,
  widgetLoadingIconClassName,
} from "@msnews/experiences-constants";
/**
 * Local variable to store the state of loading icon in widget initializer
 */
let loadingIconRemoved = false;
/**
 * Once this timeout is hit, loading icon will be removed on the host page
 */
const LOADING_ICON_REMOVAL_TIMEOUT = 5000;
/**
 * Add loading icon under peregrine widget group div
 * @param renderWidgetsIcon This boolean value is provided by the host page
 * @param peregrineWidgetGroupDiv
 */
export function addLoadingIcon(dataWidgetAttributes) {
  if (
    !dataWidgetAttributes ||
    !dataWidgetAttributes.clientPerf ||
    !dataWidgetAttributes.clientPerf.shouldShowLoadingIcon
  ) {
    return;
  }
  const peregrineWidgetGroupDiv = getWidgetGroupDiv();
  if (!peregrineWidgetGroupDiv) {
    return;
  }
  const widgetLoadingIconImg = document.createElement("img");
  widgetLoadingIconImg.setAttribute("class", widgetLoadingIconClassName);
  widgetLoadingIconImg.setAttribute(
    "src",
    getLoadingImageUrl(dataWidgetAttributes.useCnDomain)
  );
  widgetLoadingIconImg.setAttribute("alt", "Loading");
  widgetLoadingIconImg.setAttribute("style", "display:block;margin:auto;");
  peregrineWidgetGroupDiv.appendChild(widgetLoadingIconImg);
  // This handler will enable us to remove "loading" icon later in the core bundles.
  window._pw_removeLoadingIcon = removeLoadingIcon;
  // After a given timeout, remove the loading icon
  setTimeout(removeLoadingIcon, LOADING_ICON_REMOVAL_TIMEOUT);
}
/**
 * Removes loading icon element from the host page under peregrine-widgetgroup div
 */
function removeLoadingIcon() {
  if (loadingIconRemoved) {
    return;
  }
  const peregrineWidgetGroupDiv = getWidgetGroupDiv();
  if (!peregrineWidgetGroupDiv) {
    return;
  }
  const widgetLoadingIconElement =
    peregrineWidgetGroupDiv.getElementsByClassName(
      widgetLoadingIconClassName
    )[0];
  if (widgetLoadingIconElement) {
    peregrineWidgetGroupDiv.removeChild(widgetLoadingIconElement);
    loadingIconRemoved = true;
  }
}
/**
 * Get loading image asset url
 * @param useCnDomain
 * @returns Loading asset url
 */
function getLoadingImageUrl(useCnDomain) {
  return `https://assets.msn.${
    useCnDomain ? "cn" : "com"
  }/staticsb/statics/latest/widget/LoadingImg.gif`;
}
/**
 * Get div with class name "peregrine-widgetgroup"
 * @returns specific div
 */
function getWidgetGroupDiv() {
  return document.body.getElementsByClassName(widgetGroupClassName)[0];
}
/**
 * TO BE USED ONLY FOR UNIT TEST CONTEXT
 */
export function resetLocalVariables() {
  loadingIconRemoved = false;
}
//# sourceMappingURL=LoadingIcon.js.map
