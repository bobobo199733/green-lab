// © Microsoft Corporation. All rights reserved.
/**
 * A functionally limited, but lite implementation of lodash memoize helper
 * to help memoize the value of an argumentless function.
 */
export function memoizeLite(fn) {
  let cachedValue;
  let invokedOnce = false;
  const memoizedFn = function () {
    if (!invokedOnce) {
      invokedOnce = true;
      cachedValue = fn();
    }
    return cachedValue;
  };
  // helper to clear memoization cache value
  memoizedFn.cache = {
    clear: () => {
      invokedOnce = false;
      cachedValue = undefined;
    },
  };
  return memoizedFn;
}
//# sourceMappingURL=LodashLiteInline.js.map
