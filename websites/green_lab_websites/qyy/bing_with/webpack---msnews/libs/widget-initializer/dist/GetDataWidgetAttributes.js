// © Microsoft Corporation. All rights reserved.
import { getOverrideParams, getPcsEnvironment } from "./GetOverrideParams";
import { logError, setLoggingMetadata } from "./ErrorLogging";
import {
  widgetGroupClassName,
  widgetInfoAttribute,
} from "@msnews/experiences-constants";
/**
 * Gets the attribute data for widget.
 * These attributes include appType, pageType, cm, pcs-environment and pcs-additional-qsp
 * @returns DataWidgetAttributes with the above data.
 */
export function getDataWidgetAttributes() {
  var _a;
  // Parse appropriate div and get data-widget attribute.
  const peregrineGroupDiv =
    document.body.getElementsByClassName(widgetGroupClassName);
  // getAttribute exist in all browsers. https://www.caniuse.com/?search=element.getAttribute
  const dataWidget =
    peregrineGroupDiv &&
    ((_a = peregrineGroupDiv[0]) === null || _a === void 0
      ? void 0
      : _a.getAttribute(widgetInfoAttribute));
  if (!dataWidget) {
    // Cannot log app error here since we need appType, page type and market from DataWidgetAttributes as mandatory params to log app error.
    console.error(
      "Missing getElementsByClassName, peregrine-widgetgroup or data-widget"
    );
    return;
  }
  let dataWidgetInlineParams = {};
  try {
    // Get appType and pageType from data-widget attribute.
    // JSON.parse exist in IE8 and above and in most other browsers: https://www.caniuse.com/?search=JSON.parse
    // JSON.parse Throws a SyntaxError exception so wrapping in try-catch.
    dataWidgetInlineParams = JSON.parse(dataWidget);
  } catch (e) {
    // Cannot log app error here since we need appType, page type and market from DataWidgetAttributes as mandatory params to log app error.
    console.error("dataWidget to parse is not valid JSON");
    return;
  }
  // Debug only: set override params if exist.
  // location.search exist in all browsers: https://www.caniuse.com/?search=location.search
  const overrideParams = getOverrideParams();
  const appType = overrideParams.appType || dataWidgetInlineParams.appType;
  const dataWidgetAttributes = {
    appType,
    cm: overrideParams.cm || dataWidgetInlineParams.cm,
    dl: overrideParams.dl || dataWidgetInlineParams.dl,
    clientPerf: overrideParams.clientPerf || dataWidgetInlineParams.clientPerf,
    feed: overrideParams.feed || dataWidgetInlineParams.feed,
    pageType: overrideParams.pageType || dataWidgetInlineParams.pageType,
    pcsEnvironment: getPcsEnvironment(
      appType,
      dataWidgetInlineParams.pcsAdditionalQsp
    ),
    telemetry: overrideParams.telemetry || dataWidgetInlineParams.telemetry,
    // useCnDomain will be always set to true or false.
    // This will not be undefined
    useCnDomain:
      overrideParams.useCnDomain || dataWidgetInlineParams.useCnDomain || false,
    // This property bag is typically used by the host page to pass run time properties to Peregrine widgets.
    // Overriding of propertyBag using QSP against propertyBag in div, is not supported.
    // To test propertyBag, please add propertyBag to host page div directly in data-widget json.
    propertyBag: dataWidgetInlineParams.propertyBag,
  };
  // Set app error meta data attributes
  setLoggingMetadata(dataWidgetAttributes);
  if (
    !dataWidgetAttributes.appType ||
    !dataWidgetAttributes.pageType ||
    !dataWidgetAttributes.pcsEnvironment
  ) {
    let missingProp = "Missing required params in " + widgetInfoAttribute;
    missingProp +=
      "\n\tappType: " +
      dataWidgetAttributes.appType +
      "\n\tpageType: " +
      dataWidgetAttributes.pageType +
      "\n\tpcsEnvironment: " +
      dataWidgetAttributes.pcsEnvironment;
    logError(missingProp, 43711, {});
    return;
  }
  const queryStringParams = [];
  // Get query params from overrides: typically page QSPs
  if (overrideParams.pcsAdditionalQsp) {
    queryStringParams.push(overrideParams.pcsAdditionalQsp);
  }
  // Get query params from div pcsAdditionalQsp inline
  if (dataWidgetInlineParams.pcsAdditionalQsp) {
    queryStringParams.push(dataWidgetInlineParams.pcsAdditionalQsp);
  }
  // Get cm query param from div inline
  if (dataWidgetAttributes.cm) {
    queryStringParams.push(`cm=${dataWidgetAttributes.cm}`);
  }
  // Get dl query param from div inline
  if (dataWidgetAttributes.dl) {
    queryStringParams.push(`dl=${dataWidgetAttributes.dl}`);
  }
  // Merge query params that are present
  if (queryStringParams && queryStringParams.length > 0) {
    dataWidgetAttributes.pcsAdditionalQsp = queryStringParams.join("&");
  }
  return dataWidgetAttributes;
}
//# sourceMappingURL=GetDataWidgetAttributes.js.map
