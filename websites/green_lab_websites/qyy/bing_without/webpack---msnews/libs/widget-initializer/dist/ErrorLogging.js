// © Microsoft Corporation. All rights reserved.
import {
  CustomEventPayloadStage,
  CustomWidgetErrorEvent,
  dispatchCustomEvent,
} from "./ErrorDispatcher";
import { getRandomGuid, getTelemetryPageProduct } from "./Utilities";
let loggingEndpoint;
export let dataWidgetAttributes;
export let clientSettings;
/**
 * Set logging metadata like appType, pageType and market
 * @param dataWidgetAttr
 */
export function setLoggingMetadata(dataWidgetAttr, clientSettingsParam) {
  if (dataWidgetAttr) {
    dataWidgetAttributes = dataWidgetAttr;
  }
  if (clientSettingsParam) {
    clientSettings = clientSettingsParam;
  }
}
/**
 * Logs error to the given endpoint (e.g. otf). ONLY USE FROM INLINE SCRIPTS.
 * @param message - The error message
 * @param appErrorId - The app error id to be logged
 * @param propertyBag - The blob to store additional error information
 */
export function logError(message, appErrorId, propertyBag) {
  try {
    const settingsObject = {};
    const params = getLoggingParameters(settingsObject);
    let iKey = "";
    if (params && params["apikey"]) {
      iKey = getIKeyValue(params["apikey"]);
    }
    const payload = getLoggingPayload(appErrorId, message, iKey, propertyBag);
    dispatchError(message, params, payload);
    if (params && payload) {
      // Print app error on console
      console.error(payload);
      // fire and forget
      navigator.sendBeacon(
        "https://" +
          loggingEndpoint +
          "/OneCollector/1.0" +
          formatParams(params),
        payload
      );
    } else {
      console.log("missing required params. " + message);
    }
  } catch (error) {
    console.log(`Error ${error} logging the app error. ${message}`);
    dispatchError(message, {}, "");
  }
}
/**
 * Verify if the core JS files loaded.
 * NOTE: We cannot verify the experience bundle directly as Experiences does not show up in webpackJsonp.
 * !IMPORTANT!:
 * The same function exists mostly the same in libs\page-error-handling\src\CommonErrorHandlers.ts. Update that function with any changes.
 * @param bundlesToVerify - Use to customize the names of the bundles to verify. Default is ["vendors", "common", "microsoft"]
 * @param errorMessage - Use to customize the logged error message. Default is"Error when loading bundle(s): ".
 * @param timeout - Use to customize the timeout. Default is 10 seconds.
 * @param callback - on failure call the specified function
 */
export function verifyJSLoading(
  bundlesToVerify = ["vendors", "common", "microsoft"],
  errorMessage = "Error when loading bundle(s): ",
  timeout = 15000,
  callback
) {
  setTimeout(() => {
    const webpackJsonp = window.webpackJsonp;
    if (webpackJsonp) {
      const webpackLength = webpackJsonp.length;
      // The upperbound should always be 1 more than the bundle count.
      const expectedBundlesLength = bundlesToVerify.length + 1;
      if (webpackLength < expectedBundlesLength) {
        if (webpackLength === expectedBundlesLength - 1) {
          // experience failed to load so reset array to the generic name and do not cycle thru list.
          bundlesToVerify = ["experience"];
        } else {
          // An error occured loading our JS files. See which one failed to load.
          const slicedArray = webpackJsonp.slice(0, expectedBundlesLength);
          slicedArray.forEach((bundle) => {
            if (bundle.length && bundle[0][0]) {
              bundlesToVerify = bundlesToVerify.splice(
                bundlesToVerify.indexOf(bundle[0][0]),
                1
              );
            }
          });
        }
        try {
          logError(errorMessage + bundlesToVerify.toString(), 20202, {});
        } finally {
          if (callback) {
            callback();
          }
        }
      }
    }
  }, timeout);
}
/**
 * Dispatch common error to host page
 * @param message - The error message
 * @param params - The logging parameters
 * @param payload - The logging payload
 */
function dispatchError(message, params, payload) {
  dispatchCustomEvent(CustomWidgetErrorEvent, {
    stage: CustomEventPayloadStage.ALL,
    message,
    extra: {
      payload,
      params,
    },
  });
}
/**
 * Gets data to set the logging parameters
 * @param settingsObject - The object containing client settings
 */
function getLoggingParameters(settingsObject) {
  if (settingsObject) {
    const { pcsInfo, pageGenTime } = settingsObject;
    const uploadTime = new Date(pageGenTime).getTime();
    const isProd = !pcsInfo || pcsInfo.env === "prod";
    // JSLL endpoints
    loggingEndpoint = isProd
      ? `browser.events.data.msn.${
          dataWidgetAttributes.useCnDomain ? "cn" : "com"
        }`
      : `events-sandbox.data.msn.${
          dataWidgetAttributes.useCnDomain ? "cn" : "com"
        }`;
    const apikey = isProd
      ? "0ded60c75e44443aa3484c42c1c43fe8-9fc57d3f-fdac-4bcf-b927-75eafe60192e-7279"
      : "f8857dedc6f54ca8962cfb713e01e7d7-e9250191-fe0b-446f-95ae-07516262f98c-7028";
    return {
      cors: "true",
      "content-type": "application/x-json-stream",
      "client-id": "NO_AUTH",
      "client-version": "1DS-Web-JS-2.2.2",
      apikey: apikey,
      "upload-time": uploadTime,
      w: "0",
      anoncknm: "app_anon",
    };
  }
  return null;
}
/**
 * Gets data to set the logging payload
 * @param appErrorId - The app error id to be logged
 * @param message - The error message
 * @param iKey - The key for authenticating on 1DS endpoint
 * @param propertyBag - The blob to store additional error information
 * @param flightIds - The flight ids
 */
function getLoggingPayload(appErrorId, message, iKey, propertyBag) {
  if (!dataWidgetAttributes) {
    return;
  }
  const {
    appType,
    pageType,
    cm,
    telemetry = {},
    pcsAdditionalQsp = "",
  } = dataWidgetAttributes;
  const { pageProduct } = telemetry;
  // Add all data widget attributes (ex: apptype, pagetype, cm, cookie info, etc.) into property bag.
  propertyBag = propertyBag || {};
  propertyBag.dataWidgetAttributes = dataWidgetAttributes;
  // Instrument PCS and client's build number and environment.
  if (clientSettings) {
    const { bundleInfo, pcsInfo } = clientSettings;
    if (pcsInfo) {
      propertyBag.pcsVersion = pcsInfo.v;
      propertyBag.pcsEnv = pcsInfo.env;
    }
    const { alias, v } = bundleInfo || {};
    // Capture build version info
    propertyBag.build = v;
    propertyBag.buildAlias = alias;
  }
  // NOTE: since the PCS API call is not made by the host page yet, we do not know rid/aid.
  // Hence we need to generate RID at client
  const rid = getRandomGuid();
  // Setting RID=AID might not be correct. The more complex logic in the bundles may determine that we have already burned this as a RID
  // and generate a new one different from AID. But it's better than nothing and we cannot see AID on app error reports right now.
  // Most of the time when we are not using app cache these two will be the same.
  const payload = {
    name: "MS.News.Web.AppError",
    time: new Date().toISOString(),
    ver: "4.0",
    iKey: `o:${iKey}`,
    data: {
      baseData: {},
      baseType: "MS.News.Web.Base",
      page: {
        name: "default",
        product: getTelemetryPageProduct(
          appType,
          pageProduct,
          pcsAdditionalQsp
        ),
        type: isProng2AppType(appType) ? "dhp" : pageType,
        content: {
          category: "standaloneError",
        },
      },
      browser: {
        // Assume that cookie consent is not provided so muid is not being sent from cookie
        clientId: "",
      },
      flight: {
        id: "",
      },
      request: {
        activityId: rid,
        requestId: rid,
      },
      locale: {
        mkt: cm,
      },
      extSchema: {
        id: appErrorId,
        severity: 0,
        pb: propertyBag,
        message: message,
      },
    },
  };
  return payload ? JSON.stringify(payload) : null;
}
/**
 * Format query string parameters
 * @param params - The logging params
 */
function formatParams(params) {
  return (
    "?" +
    Object.keys(params)
      .map(function (key) {
        return key + "=" + encodeURIComponent(params[key]);
      })
      .join("&")
  );
}
/**
 * Extracts the value of iKey from apikey
 * @param apikey - The value of apikey for 1DS authentication
 */
function getIKeyValue(apikey) {
  if (apikey) {
    const iKeyIndex = apikey.indexOf("-");
    if (iKeyIndex > 0) {
      return apikey.substring(0, iKeyIndex);
    }
  }
  return "";
}
/**
 * Helper to tell if app is prong2
 * @param appType The type to evaluate
 * @returns True if appType corresponds to a vesion of prong2, False otherwise
 */
export function isProng2AppType(appType) {
  return (
    appType === "windowsNewsPlus" /* AppType.WindowsNewsPlus */ ||
    appType === "winWidgets" /* AppType.WindowsNewsWidgets */
  );
}
//# sourceMappingURL=ErrorLogging.js.map
