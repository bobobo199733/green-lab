// © Microsoft Corporation. All rights reserved.
/**
 * Converts the given error object to its string representation based on
 * the type of the input object.
 * @param error - the error object to convert to a string.
 * @param tryIncludeErrorStack - If true, will try to get the stack of the error
 *  if the error is an actual Error object that has a stack.
 * @returns {string} - The string representation of the error.
 */
export function stringifyError(error, tryIncludeErrorStack) {
  if (error instanceof Error) {
    const message = error.toString();
    return tryIncludeErrorStack && error.stack
      ? `${message}, Stack: ${error.stack}`
      : message;
  } else if (typeof error === "string") {
    return error;
  } else {
    return tryStringifyJson(error);
  }
}
/**
 * Attempts to stringify json. Empty string in case of error
 * @param error - the error object to convert to a string.
 * @returns {string} - Stringify'ed object
 */
function tryStringifyJson(error) {
  try {
    return JSON.stringify(error);
  } catch (_a) {
    return "";
  }
}
//# sourceMappingURL=ErrorHelper.js.map
