/*!
 * Link Click tracking for Snowplow v3.4.0 (http://bit.ly/sp-js)
 * Copyright 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */

import { dispatchToTrackersInCollection, getFilterByClass, addEventListener, getHostName, getCssClasses } from '@snowplow/browser-tracker-core';
import { buildLinkClick, resolveDynamicContext } from '@snowplow/tracker-core';

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
var _configuration = {};
/**
 * Link click tracking
 *
 * Will automatically tracking link clicks once enabled with 'enableLinkClickTracking'
 * or you can manually track link clicks with 'trackLinkClick'
 */
function LinkClickTrackingPlugin() {
    return {
        activateBrowserPlugin: function (tracker) {
            _trackers[tracker.id] = tracker;
        }
    };
}
/**
 * Enable link click tracking
 *
 * @remarks
 * The default behaviour is to use actual click events. However, some browsers
 * (e.g., Firefox, Opera, and Konqueror) don't generate click events for the middle mouse button.
 *
 * To capture more "clicks", the pseudo click-handler uses mousedown + mouseup events.
 * This is not industry standard and is vulnerable to false positives (e.g., drag events).
 */
function enableLinkClickTracking(configuration, trackers) {
    if (configuration === void 0) { configuration = {}; }
    if (trackers === void 0) { trackers = Object.keys(_trackers); }
    trackers.forEach(function (id) {
        if (_trackers[id]) {
            if (_trackers[id].sharedState.hasLoaded) {
                // the load event has already fired, add the click listeners now
                configureLinkClickTracking(configuration, id);
                addClickListeners(id);
            }
            else {
                // defer until page has loaded
                _trackers[id].sharedState.registeredOnLoadHandlers.push(function () {
                    configureLinkClickTracking(configuration, id);
                    addClickListeners(id);
                });
            }
        }
    });
}
/**
 * Add click event listeners to links which have been added to the page since the
 * last time enableLinkClickTracking or refreshLinkClickTracking was used
 *
 * @param trackers - The tracker identifiers which the have their link click state refreshed
 */
function refreshLinkClickTracking(trackers) {
    if (trackers === void 0) { trackers = Object.keys(_trackers); }
    trackers.forEach(function (id) {
        if (_trackers[id]) {
            if (_trackers[id].sharedState.hasLoaded) {
                addClickListeners(id);
            }
            else {
                _trackers[id].sharedState.registeredOnLoadHandlers.push(function () {
                    addClickListeners(id);
                });
            }
        }
    });
}
/**
 * Manually log a click
 *
 * @param event - The event information
 * @param trackers - The tracker identifiers which the event will be sent to
 */
function trackLinkClick(event, trackers) {
    if (trackers === void 0) { trackers = Object.keys(_trackers); }
    dispatchToTrackersInCollection(trackers, _trackers, function (t) {
        t.core.track(buildLinkClick(event), event.context, event.timestamp);
    });
}
/*
 * Process clicks
 */
function processClick(tracker, sourceElement, context) {
    var parentElement, tag, elementId, elementClasses, elementTarget, elementContent;
    while ((parentElement = sourceElement.parentElement) !== null &&
        parentElement != null &&
        (tag = sourceElement.tagName.toUpperCase()) !== 'A' &&
        tag !== 'AREA') {
        sourceElement = parentElement;
    }
    var anchorElement = sourceElement;
    if (anchorElement.href != null) {
        // browsers, such as Safari, don't downcase hostname and href
        var originalSourceHostName = anchorElement.hostname || getHostName(anchorElement.href), sourceHostName = originalSourceHostName.toLowerCase(), sourceHref = anchorElement.href.replace(originalSourceHostName, sourceHostName), scriptProtocol = new RegExp('^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):', 'i');
        // Ignore script pseudo-protocol links
        if (!scriptProtocol.test(sourceHref)) {
            elementId = anchorElement.id;
            elementClasses = getCssClasses(anchorElement);
            elementTarget = anchorElement.target;
            elementContent = _configuration[tracker.id].linkTrackingContent ? anchorElement.innerHTML : undefined;
            // decodeUrl %xx
            sourceHref = unescape(sourceHref);
            tracker.core.track(buildLinkClick({
                targetUrl: sourceHref,
                elementId: elementId,
                elementClasses: elementClasses,
                elementTarget: elementTarget,
                elementContent: elementContent
            }), resolveDynamicContext(context, sourceElement));
        }
    }
}
/*
 * Return function to handle click event
 */
function getClickHandler(tracker, context) {
    return function (evt) {
        var button, target;
        evt = evt || window.event;
        button = evt.which || evt.button;
        target = evt.target || evt.srcElement;
        // Using evt.type (added in IE4), we avoid defining separate handlers for mouseup and mousedown.
        if (evt.type === 'click') {
            if (target) {
                processClick(_trackers[tracker], target, context);
            }
        }
        else if (evt.type === 'mousedown') {
            if ((button === 1 || button === 2) && target) {
                _configuration[tracker].lastButton = button;
                _configuration[tracker].lastTarget = target;
            }
            else {
                _configuration[tracker].lastButton = _configuration[tracker].lastTarget = null;
            }
        }
        else if (evt.type === 'mouseup') {
            if (button === _configuration[tracker].lastButton && target === _configuration[tracker].lastTarget) {
                processClick(_trackers[tracker], target, context);
            }
            _configuration[tracker].lastButton = _configuration[tracker].lastTarget = null;
        }
    };
}
/*
 * Add click listener to a DOM element
 */
function addClickListener(tracker, element) {
    if (_configuration[tracker].linkTrackingPseudoClicks) {
        // for simplicity and performance, we ignore drag events
        addEventListener(element, 'mouseup', getClickHandler(tracker, _configuration[tracker].linkTrackingContext), false);
        addEventListener(element, 'mousedown', getClickHandler(tracker, _configuration[tracker].linkTrackingContext), false);
    }
    else {
        addEventListener(element, 'click', getClickHandler(tracker, _configuration[tracker].linkTrackingContext), false);
    }
}
/*
 * Configures link click tracking: how to filter which links will be tracked,
 * whether to use pseudo click tracking, and what context to attach to link_click events
 */
function configureLinkClickTracking(_a, tracker) {
    var _b = _a === void 0 ? {} : _a, options = _b.options, pseudoClicks = _b.pseudoClicks, trackContent = _b.trackContent, context = _b.context;
    _configuration[tracker] = {
        linkTrackingContent: trackContent,
        linkTrackingContext: context,
        linkTrackingPseudoClicks: pseudoClicks,
        linkTrackingFilter: getFilterByClass(options)
    };
}
/*
 * Add click handlers to anchor and AREA elements, except those to be ignored
 */
function addClickListeners(trackerId) {
    var _a, _b;
    var linkElements = document.links, i;
    for (i = 0; i < linkElements.length; i++) {
        // Add a listener to link elements which pass the filter and aren't already tracked
        if (((_b = (_a = _configuration[trackerId]).linkTrackingFilter) === null || _b === void 0 ? void 0 : _b.call(_a, linkElements[i])) && !linkElements[i][trackerId]) {
            addClickListener(trackerId, linkElements[i]);
            linkElements[i][trackerId] = true;
        }
    }
}

export { LinkClickTrackingPlugin, enableLinkClickTracking, refreshLinkClickTracking, trackLinkClick };
//# sourceMappingURL=index.module.js.map
