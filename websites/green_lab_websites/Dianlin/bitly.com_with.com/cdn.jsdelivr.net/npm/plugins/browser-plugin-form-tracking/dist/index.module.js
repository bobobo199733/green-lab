/*!
 * Form tracking for Snowplow v3.4.0 (http://bit.ly/sp-js)
 * Copyright 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */

import { addEventListener, getCssClasses, getFilterByClass, getFilterByName } from '@snowplow/browser-tracker-core';
import { buildFormFocusOrChange, resolveDynamicContext, buildFormSubmission } from '@snowplow/tracker-core';

/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
/** Events to capture in form tracking */
var FormTrackingEvent;
(function (FormTrackingEvent) {
    /** Form field changed event */
    FormTrackingEvent["CHANGE_FORM"] = "change_form";
    /** Form field focused event */
    FormTrackingEvent["FOCUS_FORM"] = "focus_form";
    /** Form submitted event */
    FormTrackingEvent["SUBMIT_FORM"] = "submit_form";
})(FormTrackingEvent || (FormTrackingEvent = {}));
var defaultFormTrackingEvents = [
    FormTrackingEvent.CHANGE_FORM,
    FormTrackingEvent.FOCUS_FORM,
    FormTrackingEvent.SUBMIT_FORM,
];
var innerElementTags = ['textarea', 'input', 'select'];
var defaultTransformFn = function (x) { return x; };
/*
 * Add submission event listeners to all form elements
 * Add value change event listeners to all mutable inner form elements
 */
function addFormListeners(tracker, configuration) {
    var _a;
    var options = configuration.options, context = configuration.context, trackingMarker = tracker.id + 'form', config = getConfigurationForOptions(options);
    var forms = (_a = config.forms) !== null && _a !== void 0 ? _a : document.getElementsByTagName('form');
    Array.prototype.slice.call(forms).forEach(function (form) {
        if (config.formFilter(form)) {
            Array.prototype.slice.call(innerElementTags).forEach(function (tagname) {
                Array.prototype.slice
                    .call(form.getElementsByTagName(tagname))
                    .forEach(function (innerElement) {
                    if (config.fieldFilter(innerElement) &&
                        !innerElement[trackingMarker] &&
                        innerElement.type.toLowerCase() !== 'password') {
                        if (config.eventFilter(FormTrackingEvent.FOCUS_FORM)) {
                            addEventListener(innerElement, 'focus', getFormChangeListener(tracker, config, 'focus_form', context), false);
                        }
                        if (config.eventFilter(FormTrackingEvent.CHANGE_FORM)) {
                            addEventListener(innerElement, 'change', getFormChangeListener(tracker, config, 'change_form', context), false);
                        }
                        innerElement[trackingMarker] = true;
                    }
                });
            });
            if (!form[trackingMarker]) {
                if (config.eventFilter(FormTrackingEvent.SUBMIT_FORM)) {
                    addEventListener(form, 'submit', getFormSubmissionListener(tracker, config, trackingMarker, context));
                }
                form[trackingMarker] = true;
            }
        }
    });
}
/**
 * Check if forms array is a collection of HTML form elements or a filter or undefined
 */
function isCollectionOfHTMLFormElements(forms) {
    return forms != null && Array.prototype.slice.call(forms).length > 0;
}
/*
 * Configures form tracking: which forms and fields will be tracked, and the context to attach
 */
function getConfigurationForOptions(options) {
    if (options) {
        var formFilter = function (_) { return true; };
        var forms = null;
        if (isCollectionOfHTMLFormElements(options.forms)) {
            // options.forms is a collection of HTML form elements
            forms = options.forms;
        }
        else {
            // options.forms is null or a filter
            formFilter = getFilterByClass(options.forms);
        }
        return {
            forms: forms,
            formFilter: formFilter,
            fieldFilter: getFilterByName(options.fields),
            fieldTransform: getTransform(options.fields),
            eventFilter: function (event) { var _a; return ((_a = options.events) !== null && _a !== void 0 ? _a : defaultFormTrackingEvents).indexOf(event) > -1; }
        };
    }
    else {
        return {
            forms: null,
            formFilter: function () { return true; },
            fieldFilter: function () { return true; },
            fieldTransform: defaultTransformFn,
            eventFilter: function () { return true; }
        };
    }
}
/**
 * Convert a criterion object to a transform function
 *
 * @param object - criterion {transform: function (elt) {return the result of transform function applied to element}
 */
function getTransform(criterion) {
    if (criterion && Object.prototype.hasOwnProperty.call(criterion, 'transform')) {
        return criterion.transform;
    }
    return defaultTransformFn;
}
/*
 * Get an identifier for a form, input, textarea, or select element
 */
function getElementIdentifier(elt) {
    var properties = ['name', 'id', 'type', 'nodeName'];
    for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
        var propName = properties_1[_i];
        if (elt[propName] != false && typeof elt[propName] === 'string') {
            return elt[propName];
        }
    }
    return null;
}
/*
 * Identifies the parent form in which an element is contained
 */
function getParentFormIdentifier(elt) {
    while (elt && elt.nodeName && elt.nodeName.toUpperCase() !== 'HTML' && elt.nodeName.toUpperCase() !== 'FORM') {
        elt = elt.parentNode;
    }
    if (elt && elt.nodeName && elt.nodeName.toUpperCase() === 'FORM') {
        return getElementIdentifier(elt);
    }
    return null;
}
/*
 * Returns a list of the input, textarea, and select elements inside a form along with their values
 */
function getInnerFormElements(trackingMarker, elt) {
    var innerElements = [];
    Array.prototype.slice.call(innerElementTags).forEach(function (tagname) {
        var trackedChildren = Array.prototype.slice.call(elt.getElementsByTagName(tagname)).filter(function (child) {
            return child.hasOwnProperty(trackingMarker);
        });
        Array.prototype.slice.call(trackedChildren).forEach(function (child) {
            if (child.type === 'submit') {
                return;
            }
            var elementJson = {
                name: getElementIdentifier(child),
                value: child.value,
                nodeName: child.nodeName
            };
            if (child.type && child.nodeName.toUpperCase() === 'INPUT') {
                elementJson.type = child.type;
            }
            if ((child.type === 'checkbox' || child.type === 'radio') && !child.checked) {
                elementJson.value = null;
            }
            innerElements.push(elementJson);
        });
    });
    return innerElements;
}
/*
 * Return function to handle form field change event
 */
function getFormChangeListener(tracker, config, event_type, context) {
    return function (e) {
        var _a, _b;
        var elt = e.target;
        if (elt) {
            var type = elt.nodeName && elt.nodeName.toUpperCase() === 'INPUT' ? elt.type : null;
            var value = elt.type === 'checkbox' && !elt.checked ? null : config.fieldTransform(elt.value, elt);
            if (event_type === 'change_form' || (type !== 'checkbox' && type !== 'radio')) {
                tracker.core.track(buildFormFocusOrChange({
                    schema: event_type,
                    formId: (_a = getParentFormIdentifier(elt)) !== null && _a !== void 0 ? _a : '',
                    elementId: (_b = getElementIdentifier(elt)) !== null && _b !== void 0 ? _b : '',
                    nodeName: elt.nodeName,
                    type: type,
                    elementClasses: getCssClasses(elt),
                    value: value !== null && value !== void 0 ? value : null
                }), resolveDynamicContext(context, elt, type, value));
            }
        }
    };
}
/*
 * Return function to handle form submission event
 */
function getFormSubmissionListener(tracker, config, trackingMarker, context) {
    return function (e) {
        var _a;
        var elt = e.target;
        var innerElements = getInnerFormElements(trackingMarker, elt);
        innerElements.forEach(function (innerElement) {
            var _a;
            innerElement.value = (_a = config.fieldTransform(innerElement.value, innerElement)) !== null && _a !== void 0 ? _a : innerElement.value;
        });
        tracker.core.track(buildFormSubmission({
            formId: (_a = getElementIdentifier(elt)) !== null && _a !== void 0 ? _a : '',
            formClasses: getCssClasses(elt),
            elements: innerElements
        }), resolveDynamicContext(context, elt, innerElements));
    };
}

/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var _trackers = {};
/**
 * A plugin which enabled automatic form tracking
 */
function FormTrackingPlugin() {
    return {
        activateBrowserPlugin: function (tracker) {
            _trackers[tracker.id] = tracker;
        }
    };
}
/**
 * Enables automatic form tracking
 * An event will be fired when a form field is changed or a form submitted.
 * This can be called multiple times: only forms not already tracked will be tracked.
 *
 * @param configuration - The form tracking configuration
 * @param trackers - The tracker identifiers which the events will be sent to
 */
function enableFormTracking(configuration, trackers) {
    if (configuration === void 0) { configuration = {}; }
    if (trackers === void 0) { trackers = Object.keys(_trackers); }
    trackers.forEach(function (t) {
        if (_trackers[t]) {
            if (_trackers[t].sharedState.hasLoaded) {
                addFormListeners(_trackers[t], configuration);
            }
            else {
                _trackers[t].sharedState.registeredOnLoadHandlers.push(function () {
                    addFormListeners(_trackers[t], configuration);
                });
            }
        }
    });
}

export { FormTrackingPlugin, enableFormTracking };
//# sourceMappingURL=index.module.js.map
