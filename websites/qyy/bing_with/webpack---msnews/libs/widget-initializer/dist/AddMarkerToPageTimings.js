// © Microsoft Corporation. All rights reserved.
const appTimingsWindowPropertyName = "_appTimings";
/**
 * Add given perf marker to pageTimings global object
 * TODO: We could use this function from diagnostic package but importing that is adding lot of unnecessary code
 * and that is bloating size of widgetInitializer.js from 7 kb to few mb.
 * @param marker name
 */
export function addMarkerToPageTimings(marker) {
  if (!performance || !performance.now) {
    return;
  }
  const pageTimings = window._pageTimings || (window._pageTimings = {});
  pageTimings[marker] = Math.round(performance.now());
}
/**
 * Add given perf marker to appTimings object
 * @param marker name
 */
export function addAppTraceMarker(marker) {
  if (!performance || !performance.now) {
    return;
  }
  const appTimings =
    window[appTimingsWindowPropertyName] ||
    (window[appTimingsWindowPropertyName] = {});
  appTimings[marker] = performance.now();
}
//# sourceMappingURL=AddMarkerToPageTimings.js.map
