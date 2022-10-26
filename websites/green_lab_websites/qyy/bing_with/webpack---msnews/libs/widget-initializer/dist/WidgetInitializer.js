// © Microsoft Corporation. All rights reserved.
import { __awaiter } from "tslib";
import {
  CustomEventPayloadStage,
  CustomWidgetErrorEvent,
  dispatchCustomEvent,
} from "./ErrorDispatcher";
import {
  coreBundleClassName,
  headTagDataInfoAttribute,
  headTagtClientSettingAttribute,
  widgetGroupClassName,
  widgetSettingsClassName,
} from "@msnews/experiences-constants";
import { setLoggingMetadata, verifyJSLoading } from "./ErrorLogging";
import { addLoadingIcon } from "./LoadingIcon";
import { createScriptTag } from "@msnews/isomorphic-util";
import { getDataWidgetAttributes } from "./GetDataWidgetAttributes";
import { getPcsResponse } from "./GetPcsResponse";
import { shouldRenderWidgets } from "./Utilities";
/**
 * Widget Initializer routine.
 * This file is not used by any code in the msnews-experinces repo.
 * This script is expected to run on non-Peregrine pages as a standalone script and help include Peregrine experiences.
 * 1. This script expects following div in the DOM.
 <div class="peregrine-widgetgroup" data-widget="{"appType":"<appType>","pageType":"<pageType>","cm":"<Market>","pcsAdditionalQsp":"<qsp>"}"></div>
 * 2. This script should read the div and call PCS with above appType, pageType, cm (optional) and pcsAdditionalQsp (optional)
 * 3. Add info and clientSettings obtained from PCS response to the DOM.
 * 4. Start downloading Peregrine core bundles.
 * @param options - "string" for backwards compatibility to support logging telemetry join id.
 * WidgetInitializerOptions should be used going forward with a predefined contract.
 * This options are added to global object __pw_options for Peregrine bundles to consume.
 */
export function startWidgetInitializer(options) {
  return __awaiter(this, void 0, void 0, function* () {
    // Return if host page browser isn't supported.
    if (!shouldRenderWidgets()) {
      return;
    }
    // wait until network is online before trying to make network calls
    if (navigator && navigator.onLine === false) {
      const waitForNetwork = new Promise((resolve) => {
        window.addEventListener("online", () => resolve());
      });
      yield waitForNetwork;
    }
    // Only call PCS if the bundle <script> are not in the DOM.
    // If startWidgetInitializer function gets called more than once by the host page,
    // this will protect from adding same script tags multiple times in the body.
    const peregrineWidgetGroupDiv =
      document.body.getElementsByClassName(widgetGroupClassName)[0];
    const coreBundleScripts =
      document.body.getElementsByClassName(coreBundleClassName);
    if (peregrineWidgetGroupDiv && coreBundleScripts.length == 0) {
      // Get widget attributes from query params and/or inline specified in the div.
      const dataWidgetAttributes = getDataWidgetAttributes();
      // Call PCS API with data widget attributes
      getPcsResponse(dataWidgetAttributes).then((responseData) => {
        if (responseData && responseData.bundleData) {
          // Add loading icon until widget is being rendered, if enabled by the host page.
          // This will be removed later by the widgets loader.
          addLoadingIcon(dataWidgetAttributes);
          const clientSettings = responseData.pcsData.clientSettings;
          setLoggingMetadata(undefined, clientSettings);
          // Get or create widget settings div
          const widgetSettingsDiv = getWidgetSettingsDiv(
            peregrineWidgetGroupDiv
          );
          // Attach pcsData.info to the DOM element => .
          // If data-info or data-client-settings are already present, override these attributes with updated data from PCS
          // setAttribute() function exists in most browsers starting IE6: https://www.caniuse.com/?search=setAttribute
          widgetSettingsDiv.setAttribute(
            headTagDataInfoAttribute,
            responseData.pcsData.info
          );
          // Attach pcsData.clientSettings to the DOM element => .
          widgetSettingsDiv.setAttribute(
            headTagtClientSettingAttribute,
            JSON.stringify(clientSettings)
          );
          // Add script tags in the DOM once flights and client settings are added to DOM above.
          // There is no await so all scripts (microsoft, vendor, commons and experiences) will be downloaded asynchronously by the browser.
          // document.createElement() function exists in most browsers starting IE6: https://www.caniuse.com/?search=document.createElement
          for (const scriptName in responseData.bundleData.bootstrappingRefs) {
            const scriptUrl =
              scriptName &&
              responseData.bundleData.bootstrappingRefs[scriptName];
            if (scriptUrl) {
              const scriptElement = createScriptTag(
                scriptUrl,
                null,
                true,
                "anonymous",
                coreBundleClassName
              );
              peregrineWidgetGroupDiv.appendChild(scriptElement);
            }
          }
          // Add options to window object so it will be available to core bundles for consumption.
          // If options is a string, add widgetTrackingJoinId to window object.
          if (typeof options === "string") {
            window.__widgetTrackingJoinId = options;
          } else if (typeof options === "object") {
            window.__pw_options = options;
          }
          // Verify the bundles were added to the page.
          // Pass in custom error message AND timeout of 15 seconds
          verifyJSLoading(
            ["vendors", "common", "microsoft"],
            "WidgetInitializer - Error loading bundle(s): ",
            15000
          );
        } else {
          // Dispatch Error Events when get the wrong pcs response to notify external environment what happened.
          dispatchCustomEvent(CustomWidgetErrorEvent, {
            stage: CustomEventPayloadStage.INITIALIZE,
            message:
              "Call to PCS API did not return data when widget initialized!",
            extra: {
              attributes: dataWidgetAttributes,
              response: responseData,
            },
          });
        }
      });
    }
  });
}
function getWidgetSettingsDiv(peregrineWidgetGroupDiv) {
  // Return existing settings div if already present
  const widgetSettingsExistingDiv =
    peregrineWidgetGroupDiv.getElementsByClassName(widgetSettingsClassName)[0];
  if (widgetSettingsExistingDiv) {
    return widgetSettingsExistingDiv;
  }
  // Create widget settings div
  const widgetSettingsDiv = document.createElement("div");
  widgetSettingsDiv.setAttribute("class", widgetSettingsClassName);
  peregrineWidgetGroupDiv.appendChild(widgetSettingsDiv);
  return widgetSettingsDiv;
}
//# sourceMappingURL=WidgetInitializer.js.map
