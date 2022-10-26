// © Microsoft Corporation. All rights reserved.
import { __awaiter } from "tslib";
import {
  addAppTraceMarker,
  addMarkerToPageTimings,
} from "./AddMarkerToPageTimings";
import { isProng2AppType, logError } from "./ErrorLogging";
import { memoizeLite, stringifyError } from "@msnews/core-helper";
import {
  pwPcsResponseCacheDuration,
  pwPcsResponseCacheKey,
  staticServerEndpoint,
  staticServerEndpointCnDomain,
} from "@msnews/experiences-constants";
/**
 * Timeout in miliseconds to terminate PCS or Statics network call.
 */
const timeoutInMs = 15000;
/**
 * Data Widget Attributes specified by the host page in the Div and override QSPs
 */
let dataWidgetAttributes;
/**
 * This is used to delay writing response to local storage later.
 */
let pcsNetworkResponse;
/**
 * This function calls and gets PCS response for client-setting, user data-info, and core-bundle scripts to render widgets.
 * @param hostPageAttributes contains the specific appType, pageType, cm and pcsAdditionalQsp information.
 * @returns an async response that contains the needed information above.
 */
export function getPcsResponse(hostPageAttributes) {
  return __awaiter(this, void 0, void 0, function* () {
    if (!hostPageAttributes) {
      return null;
    }
    // Add perf marker and app trace marker on global timings objects
    addMarkerToPageTimings("WidgetsPcsCallStart");
    addAppTraceMarker("WidgetsPcsCall-start");
    // Set dataWidgetAttributes for global function
    dataWidgetAttributes = hostPageAttributes;
    let pcsCachedResponse = null;
    // Get PCS response from cache if specified by the host page by setting "shouldPreFetchPcsResponse" to be true
    const { appType, clientPerf } = dataWidgetAttributes;
    if (
      (clientPerf && clientPerf.shouldPreFetchPcsResponse) ||
      (appType && appType === "distribution")
    ) {
      // Set handler on global object so this can be called at a later point in time
      setHandlerToWritePcsResponseToCache();
      // Get PCS response from cache.
      pcsCachedResponse = getPcsResponseFromCache();
    }
    // If "shouldPreFetchPcsResponse" was not specified by the host page or cached response was not valid,
    // proceed making live call to PCS
    if (!pcsCachedResponse) {
      pcsNetworkResponse = yield tryGetPcsResponseFromNetwork();
    }
    // Add perf marker and app trace marker on global timings objects
    addMarkerToPageTimings("WidgetsPcsCallEnd");
    addAppTraceMarker("WidgetsPcsCall-end");
    return pcsNetworkResponse || pcsCachedResponse;
  });
}
/**
 * This function calls and gets PCS response from PCS API and gets client-setting, user data-info, and core-bundle scripts to render widgets.
 * This is global promise since we want the ability to call from widget initializer as well as from Peregrine bundles (later in page cycle).
 * @returns an async response that contains the needed information above.
 */
let tryGetPcsResponseFromNetwork = memoizeLite(() =>
  __awaiter(void 0, void 0, void 0, function* () {
    if (!dataWidgetAttributes) {
      logError(
        "dataWidgetAttributes is null in getPcsResponseFromNetwork",
        43715,
        {}
      );
      return null;
    }
    const fetchUrl = buildPcsFetchUrl();
    try {
      // Set a 15-second timeout for PCS API call
      let timer;
      let responseData;
      const timeoutPromise = new Promise((resolve) => {
        timer = setTimeout(
          () =>
            __awaiter(void 0, void 0, void 0, function* () {
              // Log an app error if PCS API call timed out
              logError(
                "PCS Widgets API call timed out. Trying to get response from statics",
                43713,
                { url: fetchUrl }
              );
              try {
                //  Get static fall back page if PCS API call timed out
                responseData = yield getStaticFallbackPage(fetchUrl);
              } catch (e) {
                logError(
                  "Exception while loading static page from widget",
                  52005,
                  { originalUrl: fetchUrl, error: stringifyError(e, true) }
                );
                resolve(null);
              }
              if (
                tryUpdatePcsResponse(
                  responseData,
                  dataWidgetAttributes.useCnDomain
                )
              ) {
                // Add perf marker on global pageTimings
                addMarkerToPageTimings("WidgetsStaticFallbackCallEnd");
                resolve(responseData);
              } else {
                logError(
                  "Verify Static response for pcsData and bundleData for request url",
                  43716,
                  fetchUrl
                );
                resolve(null);
              }
            }),
          timeoutInMs
        );
      });
      const pcsFetchPromise = fetch(fetchUrl, { credentials: "include" }).then(
        (pcsResponse) =>
          __awaiter(void 0, void 0, void 0, function* () {
            if (timer) {
              clearTimeout(timer);
            }
            if (!pcsResponse.ok) {
              const afdAId = tryGetAfdActivityIdFromHeaders(pcsResponse);
              logError(
                `Response not-ok from PCS. Status code: ${pcsResponse.status}`,
                43714,
                { afdAId }
              );
              try {
                // Get static fall back page if PCS call is not successful
                responseData = yield getStaticFallbackPage(fetchUrl);
              } catch (e) {
                logError(
                  "Exception while loading static page from widget",
                  52005,
                  {
                    originalUrl: fetchUrl,
                    error: stringifyError(e, true),
                    afdAId,
                  }
                );
                return null;
              }
            } else {
              responseData = yield pcsResponse.json();
            }
            if (
              tryUpdatePcsResponse(
                responseData,
                dataWidgetAttributes.useCnDomain
              )
            ) {
              return responseData;
            } else {
              const afdAId = tryGetAfdActivityIdFromHeaders(pcsResponse);
              logError(
                "Verify PCS response for pcsData and bundleData for request url",
                43716,
                { fetchUrl, afdAId }
              );
              return null;
            }
          })
      );
      // Race between PCS and a timeout based promise
      return yield Promise.race([pcsFetchPromise, timeoutPromise]);
    } catch (e) {
      const { appType, isCallFromWidgetsChanged } = dataWidgetAttributes || {};
      // This line of code sends app error only if prong2 page is visible when app type is prong2 app type.
      // If page is not visible in prong2 app type, don't send app error as that is a background refresh.
      if (isProng2AppType(appType) && isCallFromWidgetsChanged) {
        return null;
      }
      // If this is not prong2 app type, send this app error anyways.
      logError("Fetch failed for PCS url", 43715, {
        originalUrl: fetchUrl,
        error: stringifyError(e, true),
      });
      return null;
    }
  })
);
/**
 * Get static fall back page if PCS call is not successful
 * @param url - Widget Url
 * @returns StaticResponse
 */
export function getStaticFallbackPage(url) {
  return __awaiter(this, void 0, void 0, function* () {
    const originalUrl = new URL(url);
    let staticUrl = url.replace(originalUrl.hostname, staticServerEndpoint);
    if (originalUrl.hostname.includes(".cn")) {
      staticUrl = url.replace(
        originalUrl.hostname,
        staticServerEndpointCnDomain
      );
    }
    try {
      // Set a 15-second timeout for Static call
      let timer;
      const timeoutPromise = new Promise(() => {
        timer = setTimeout(() => {
          // Log an app error if Static Response timed out
          logError("Static Response for Widgets timed out", 52006, {
            originalUrl: url,
          });
          return null;
        }, timeoutInMs);
      });
      const staticFetchPromise = fetch(staticUrl, {
        credentials: "include",
      }).then((staticResponse) =>
        __awaiter(this, void 0, void 0, function* () {
          if (timer) {
            clearTimeout(timer);
          }
          const afdAId = tryGetAfdActivityIdFromHeaders(staticResponse);
          if (staticResponse.ok) {
            // log message for static page loading
            logError("Rendered static page from widget", 52003, {
              originalUrl: url,
              staticUrl: staticUrl,
              afdAId,
            });
            return yield staticResponse.json();
          } else {
            // log error for not loading static page
            logError("Response not-ok from static page", 52004, {
              originalUrl: url,
              staticUrl: staticUrl,
              afdAId,
            });
            return null;
          }
        })
      );
      // Race between PCS and a timeout based promise
      return yield Promise.race([staticFetchPromise, timeoutPromise]);
    } catch (e) {
      // log exception while loading static page
      logError("Exception while loading static page from widget", 52005, {
        originalUrl: url,
        staticUrl: staticUrl,
        error: stringifyError(e, true),
      });
      return null;
    }
  });
}
/**
 * Get PCS response from storage if it was stored in last 24 hours and if it is valid.
 * @returns PCS response from browser storage
 */
export function getPcsResponseFromCache() {
  try {
    const pcsResponse = JSON.parse(
      localStorage.getItem(getPcsResponseCacheKey())
    );
    const storageTimestamp = pcsResponse && pcsResponse.storageTimestamp;
    const pcsUrlCached = pcsResponse && pcsResponse.pcsUrl;
    // Check storageTimestamp exist in the response
    if (
      storageTimestamp &&
      // Check if response is not stale
      new Date().getTime() - storageTimestamp < pwPcsResponseCacheDuration &&
      // Check if pcs cached url matches current pcs url
      pcsUrlCached === buildPcsFetchUrl() &&
      // Validate cached response
      validatePcsResponse(pcsResponse)
    ) {
      return pcsResponse;
    }
  } catch (e) {
    logError("Error reading PCS response from local storage", 52007, {
      error: stringifyError(e, true),
    });
  }
  return null;
}
/**
 * This handler will enable us to call PCS API later point in time and write response to local storage.
 */
function setHandlerToWritePcsResponseToCache() {
  window._pw_cachePcsResponse = () =>
    __awaiter(this, void 0, void 0, function* () {
      try {
        const pcsResponse = yield tryGetPcsResponseFromNetwork();
        if (pcsResponse) {
          pcsResponse.storageTimestamp = new Date().getTime();
          pcsResponse.pcsUrl = buildPcsFetchUrl();
          localStorage.setItem(
            getPcsResponseCacheKey(),
            JSON.stringify(pcsResponse)
          );
        } else {
          logError("PCS response was null", 52008, {});
        }
      } catch (e) {
        logError("Error writing PCS response to local storage", 52008, {
          error: stringifyError(e, true),
        });
      }
    });
}
/**
 * Check if PCS response is valid
 * @param PCS response
 * @returns true if response is valid, false otherwise
 */
function validatePcsResponse(response) {
  return (
    response &&
    response.pcsData &&
    response.pcsData.info &&
    response.pcsData.clientSettings &&
    response.bundleData &&
    response.bundleData.bootstrappingRefs
  );
}
/**
 * Update response per business logic
 */
function tryUpdatePcsResponse(response, useCnDomain) {
  if (!validatePcsResponse(response)) {
    return null;
  }
  // PCS currently does not send this property, so we need to use the host page provided value to set it
  // Add useCnDomain in client settings so all subsequent endpoints will be switched to use .cn instead of .com
  response.pcsData.clientSettings.useCnDomain = useCnDomain;
  // Add widget attribute on client settings so bundles can read required properties
  response.pcsData.clientSettings.widgetAttributes = dataWidgetAttributes;
  return response;
}
/**
 * Get PCS response cache key from Constant, AppType and PageType
 * @returns Cache Key
 */
function getPcsResponseCacheKey() {
  if (!dataWidgetAttributes) {
    return "";
  }
  const { appType, cm, pageType } = dataWidgetAttributes;
  return `${pwPcsResponseCacheKey}_${appType}_${pageType}_${cm}`;
}
/**
 * Build PCS fetch url from DataWidgetAttributes
 * @returns PCS fetch url
 */
function buildPcsFetchUrl() {
  if (!dataWidgetAttributes) {
    return "";
  }
  const {
    appType,
    useCnDomain,
    pageType,
    pcsEnvironment = "www",
    pcsAdditionalQsp,
  } = dataWidgetAttributes;
  return `https://${pcsEnvironment}.msn.${
    useCnDomain ? "cn" : "com"
  }/pcs/api/widget/${appType}/${pageType || ""}${
    pcsAdditionalQsp ? `?${pcsAdditionalQsp}` : ""
  }`;
}
/**
 * Return AFD provided activity id from response header.
 * @param response from server
 * @returns AFD activity id
 */
function tryGetAfdActivityIdFromHeaders(response) {
  if (!response || !response.headers) {
    return "";
  }
  // Return string sequence representing the values of the retrieved header or null if this header is not set.
  // This doesn't throw error if not found.
  return response.headers.get("x-msedge-ref") || "";
}
/**
 * TO BE USED FOR UNIT TESTING ONLY
 */
export function setLocalVariables(attributes) {
  if (attributes) {
    dataWidgetAttributes = attributes;
  }
  tryGetPcsResponseFromNetwork.cache.clear();
}
/**
 * Clear memoize cache.
 */
export function clearNetworkCachedResponse() {
  if (tryGetPcsResponseFromNetwork) {
    tryGetPcsResponseFromNetwork.cache.clear();
  }
}
//# sourceMappingURL=GetPcsResponse.js.map
