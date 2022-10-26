// © Microsoft Corporation. All rights reserved.
/**
 * Get override params for appType, pageType and cm.
 */
export function getOverrideParams() {
  const queryParams =
    location.search && location.search.replace("?", "").split("&");
  // This ensures that overrideParams will be always defined so no need to check undefined or null in the caller.
  const overrideParams = {};
  if (!queryParams) {
    return overrideParams;
  }
  // Loop through query params and set appType, pageType and cm in overrideParams.
  // Example:
  // QSP item=appType:windowsShell.
  // This will set overrideParams.appType to be windowsShell
  // overrideParams.pageType and overrideParams.cm will be null.
  for (let i = 0; i < queryParams.length; i++) {
    const itemQsp = queryParams[i];
    const pair = itemQsp.split("=");
    if (
      pair.length === 2 &&
      // decodeURIComponent exist in all browsers. https://www.caniuse.com/?search=decodeURIComponent
      decodeURIComponent(pair[0]) === "item" &&
      decodeURIComponent(pair[1])
    ) {
      const itemPair = decodeURIComponent(pair[1]).split(":");
      if (itemPair && itemPair.length === 2 && itemPair[0] && itemPair[1]) {
        const value = itemPair[1];
        // Add instance=intpr or instance=intperf QSP if item=pcsenv:intpr or item=pcsenv:intperf
        const pcsEnvQsp =
          itemPair[0] === "pcsenv" &&
          (value === "intpr" || value === "intperf") &&
          `instance=${value}`;
        overrideParams.pcsAdditionalQsp = `${
          overrideParams.pcsAdditionalQsp
            ? `${overrideParams.pcsAdditionalQsp}&`
            : ""
        }${pcsEnvQsp || itemQsp}`;
        switch (itemPair[0]) {
          case "appType":
            overrideParams.appType = value;
            break;
          case "pageType":
            overrideParams.pageType = value;
            break;
          case "cm":
            overrideParams.cm = value;
            break;
          case "dl":
            overrideParams.dl = value;
            break;
          case "useCnDomain":
            overrideParams.useCnDomain = value === "true";
            break;
          case "reportingOcid":
            overrideParams.telemetry = Object.assign(
              Object.assign({}, overrideParams.telemetry),
              { ocid: value }
            );
            break;
          case "tmpl":
            overrideParams.telemetry = Object.assign(
              Object.assign({}, overrideParams.telemetry),
              { tmpl: value }
            );
            break;
          case "feedOcid":
            overrideParams.feed = Object.assign(
              Object.assign({}, overrideParams.feed),
              { ocid: value }
            );
            break;
          case "feedApiKey":
            overrideParams.feed = Object.assign(
              Object.assign({}, overrideParams.feed),
              { apiKey: value }
            );
            break;
          case "shouldPreFetchPcsResponse":
            overrideParams.clientPerf = Object.assign(
              Object.assign({}, overrideParams.clientPerf),
              { shouldPreFetchPcsResponse: value === "true" }
            );
            break;
          case "shouldUsePWOnlyFlights":
            overrideParams.clientPerf = Object.assign(
              Object.assign({}, overrideParams.clientPerf),
              { shouldUsePWOnlyFlights: value === "true" }
            );
            break;
          case "shouldShowLoadingIcon":
            overrideParams.clientPerf = Object.assign(
              Object.assign({}, overrideParams.clientPerf),
              { shouldShowLoadingIcon: value === "true" }
            );
            break;
        }
      }
    }
  }
  return overrideParams;
}
export const PcsMicrosoftStartEnvironment = "microsoftstart";
export const PcsMicrosoftStartQueryParam = "item=pcsenv:microsoftstart";
/**
 * For debugging purpose: get pcs env from query string param
 * @param appType
 * @returns string (www, int, int1 or microsoftstart)
 */
export function getPcsEnvironment(appType = "", pcsAdditionalQsp = "") {
  var _a;
  const queryParams =
    (_a = location.search) === null || _a === void 0
      ? void 0
      : _a.replace("?", "").split("&");
  if (queryParams) {
    // indexOf exist in IE9 and above. https://www.caniuse.com/?search=indexof
    if (queryParams.indexOf("item=pcsenv:int1") > -1) {
      return "int1";
    }
    if (
      queryParams.indexOf("item=pcsenv:int") > -1 ||
      queryParams.indexOf("item=pcsenv:intpr") > -1 ||
      queryParams.indexOf("item=pcsenv:intperf") > -1
    ) {
      return "int";
    }
    if (
      appType === "distribution" /* AppType.Distribution */ ||
      queryParams.indexOf(PcsMicrosoftStartQueryParam) > -1
    ) {
      return PcsMicrosoftStartEnvironment;
    }
  }
  const inlineQueryParams =
    pcsAdditionalQsp && pcsAdditionalQsp.replace("?", "").split("&");
  if (inlineQueryParams) {
    if (inlineQueryParams.indexOf(PcsMicrosoftStartQueryParam) > -1) {
      return PcsMicrosoftStartEnvironment;
    }
  }
  // Default behavior
  return "www";
}
//# sourceMappingURL=GetOverrideParams.js.map
