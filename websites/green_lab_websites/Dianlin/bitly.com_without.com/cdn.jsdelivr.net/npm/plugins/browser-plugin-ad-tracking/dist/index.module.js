/*!
 * Ad tracking for Snowplow v3.4.0 (http://bit.ly/sp-js)
 * Copyright 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */

import { dispatchToTrackersInCollection } from '@snowplow/browser-tracker-core';
import { buildAdImpression, buildAdClick, buildAdConversion } from '@snowplow/tracker-core';

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
 * Adds advertisement tracking functions
 */
function AdTrackingPlugin() {
    return {
        activateBrowserPlugin: function (tracker) {
            _trackers[tracker.id] = tracker;
        }
    };
}
/**
 * Track an ad being served
 *
 * @param event - The event information
 * @param trackers - The tracker identifiers which the event will be sent to
 */
function trackAdImpression(event, trackers) {
    if (trackers === void 0) { trackers = Object.keys(_trackers); }
    dispatchToTrackersInCollection(trackers, _trackers, function (t) {
        t.core.track(buildAdImpression(event), event.context, event.timestamp);
    });
}
/**
 * Track an ad being clicked
 *
 * @param event - The event information
 * @param trackers - The tracker identifiers which the event will be sent to
 */
function trackAdClick(event, trackers) {
    if (trackers === void 0) { trackers = Object.keys(_trackers); }
    dispatchToTrackersInCollection(trackers, _trackers, function (t) {
        t.core.track(buildAdClick(event), event.context, event.timestamp);
    });
}
/**
 * Track an ad conversion event
 *
 * @param event - The event information
 * @param trackers - The tracker identifiers which the event will be sent to
 */
function trackAdConversion(event, trackers) {
    if (trackers === void 0) { trackers = Object.keys(_trackers); }
    dispatchToTrackersInCollection(trackers, _trackers, function (t) {
        t.core.track(buildAdConversion(event), event.context, event.timestamp);
    });
}

export { AdTrackingPlugin, trackAdClick, trackAdConversion, trackAdImpression };
//# sourceMappingURL=index.module.js.map
