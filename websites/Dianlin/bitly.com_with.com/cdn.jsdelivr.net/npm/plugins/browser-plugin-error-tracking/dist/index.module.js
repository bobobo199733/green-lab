/*!
 * Error tracking for Snowplow v3.4.0 (http://bit.ly/sp-js)
 * Copyright 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */

import { dispatchToTrackersInCollection, addEventListener, isFunction } from '@snowplow/browser-tracker-core';
import { buildSelfDescribingEvent } from '@snowplow/tracker-core';

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
function ErrorTrackingPlugin() {
    return {
        activateBrowserPlugin: function (tracker) {
            _trackers[tracker.id] = tracker;
        }
    };
}
/**
 * Send error as self-describing event
 *
 * @param event - The event information
 * @param trackers - The tracker identifiers which the event will be sent to
 */
function trackError(event, trackers) {
    if (trackers === void 0) { trackers = Object.keys(_trackers); }
    var message = event.message, filename = event.filename, lineno = event.lineno, colno = event.colno, error = event.error, context = event.context, timestamp = event.timestamp, stack = error && error.stack ? error.stack : null;
    dispatchToTrackersInCollection(trackers, _trackers, function (t) {
        t.core.track(buildSelfDescribingEvent({
            event: {
                schema: 'iglu:com.snowplowanalytics.snowplow/application_error/jsonschema/1-0-1',
                data: {
                    programmingLanguage: 'JAVASCRIPT',
                    message: message !== null && message !== void 0 ? message : "JS Exception. Browser doesn't support ErrorEvent API",
                    stackTrace: stack,
                    lineNumber: lineno,
                    lineColumn: colno,
                    fileName: filename
                }
            }
        }), context, timestamp);
    });
}
/**
 * Enable automatic error tracking, added event handler for 'error' event on window
 * @param configuration - The error tracking configuration
 * @param trackers - The tracker identifiers which the event will be sent to
 */
function enableErrorTracking(configuration, trackers) {
    if (configuration === void 0) { configuration = {}; }
    if (trackers === void 0) { trackers = Object.keys(_trackers); }
    var filter = configuration.filter, contextAdder = configuration.contextAdder, context = configuration.context, captureError = function (errorEvent) {
        if ((filter && isFunction(filter) && filter(errorEvent)) || filter == null) {
            sendError({ errorEvent: errorEvent, commonContext: context, contextAdder: contextAdder }, trackers);
        }
    };
    addEventListener(window, 'error', captureError, true);
}
function sendError(_a, trackers) {
    var errorEvent = _a.errorEvent, commonContext = _a.commonContext, contextAdder = _a.contextAdder;
    var context = commonContext || [];
    if (contextAdder && isFunction(contextAdder)) {
        context = context.concat(contextAdder(errorEvent));
    }
    trackError({
        message: errorEvent.message,
        filename: errorEvent.filename,
        lineno: errorEvent.lineno,
        colno: errorEvent.colno,
        error: errorEvent.error,
        context: context
    }, trackers);
}

export { ErrorTrackingPlugin, enableErrorTracking, trackError };
//# sourceMappingURL=index.module.js.map
