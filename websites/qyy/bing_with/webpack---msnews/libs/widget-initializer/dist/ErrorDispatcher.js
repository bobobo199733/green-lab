// © Microsoft Corporation. All rights reserved.
export var CustomEventPayloadStage;
(function (CustomEventPayloadStage) {
  CustomEventPayloadStage["INITIALIZE"] = "initialize";
  CustomEventPayloadStage["CHANGE"] = "change";
  CustomEventPayloadStage["ALL"] = "all";
})(CustomEventPayloadStage || (CustomEventPayloadStage = {}));
export const CustomWidgetErrorEvent = "CustomWidgetErrorEvent";
/**
 * Dispatch custom event when some errors arised.
 * @param name - Event name
 * @param payload - Payload for event message
 */
export function dispatchCustomEvent(name, payload) {
  window.dispatchEvent(
    new CustomEvent(name, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        type: "AppError",
        payload,
      },
    })
  );
}
/**
 * Get data for custom widget event
 * @param event - CustomWidgetErrorEvent
 */
export function getDispatchedCustomEventPayload(event) {
  var _a;
  if (event.type !== CustomWidgetErrorEvent) {
    return null;
  }
  const payload =
    ((_a = event.detail) === null || _a === void 0 ? void 0 : _a.payload) || {};
  return {
    stage: payload.stage,
    message: payload.message,
    extra: payload.extra,
  };
}
//# sourceMappingURL=ErrorDispatcher.js.map
