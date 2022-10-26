/*!
 * Consent and GDPR data for Snowplow events v3.4.0 (http://bit.ly/sp-js)
 * Copyright 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */

import { dispatchToTrackersInCollection } from '@snowplow/browser-tracker-core';
import { buildConsentGranted, buildConsentWithdrawn } from '@snowplow/tracker-core';

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
var gdprBasis;
(function (gdprBasis) {
    gdprBasis["consent"] = "consent";
    gdprBasis["contract"] = "contract";
    gdprBasis["legalObligation"] = "legal_obligation";
    gdprBasis["vitalInterests"] = "vital_interests";
    gdprBasis["publicTask"] = "public_task";
    gdprBasis["legitimateInterests"] = "legitimate_interests";
})(gdprBasis || (gdprBasis = {}));
var _trackers = {};
var _context = {};
var LOG;
/**
 * The Consent Plugin
 *
 * Adds Consent Granted and Withdrawn events
 * and the ability to add the GDPR context to events
 */
function ConsentPlugin() {
    var trackerId;
    return {
        activateBrowserPlugin: function (tracker) {
            trackerId = tracker.id;
            _trackers[tracker.id] = tracker;
        },
        contexts: function () {
            if (_context[trackerId]) {
                return [
                    {
                        schema: 'iglu:com.snowplowanalytics.snowplow/gdpr/jsonschema/1-0-0',
                        data: _context[trackerId]
                    },
                ];
            }
            return [];
        },
        logger: function (logger) {
            LOG = logger;
        }
    };
}
/**
 * Enable the GDPR context for each event
 * @param configuration - the configuration for the GDPR context
 * @param trackers - The tracker identifiers which should have the GDPR context enabled
 */
function enableGdprContext(configuration, trackers) {
    if (trackers === void 0) { trackers = Object.keys(_trackers); }
    var basisForProcessing = configuration.basisForProcessing, documentId = configuration.documentId, documentVersion = configuration.documentVersion, documentDescription = configuration.documentDescription;
    var basis = gdprBasis[basisForProcessing];
    if (!basis) {
        LOG.warn('enableGdprContext: basisForProcessing must be one of: consent, contract, legalObligation, vitalInterests, publicTask, legitimateInterests');
        return;
    }
    else {
        trackers.forEach(function (t) {
            if (_trackers[t]) {
                _context[t] = {
                    basisForProcessing: basis,
                    documentId: documentId !== null && documentId !== void 0 ? documentId : null,
                    documentVersion: documentVersion !== null && documentVersion !== void 0 ? documentVersion : null,
                    documentDescription: documentDescription !== null && documentDescription !== void 0 ? documentDescription : null
                };
            }
        });
    }
}
/**
 * Track a consent granted action
 *
 * @param event - The event information
 * @param trackers - The tracker identifiers which the event will be sent to
 */
function trackConsentGranted(event, trackers) {
    if (trackers === void 0) { trackers = Object.keys(_trackers); }
    dispatchToTrackersInCollection(trackers, _trackers, function (t) {
        var builtEvent = buildConsentGranted(event);
        t.core.track(builtEvent.event, event.context ? event.context.concat(builtEvent.context) : builtEvent.context, event.timestamp);
    });
}
/**
 * Track a consent withdrawn action
 *
 * @param event - The event information
 * @param trackers - The tracker identifiers which the event will be sent to
 */
function trackConsentWithdrawn(event, trackers) {
    if (trackers === void 0) { trackers = Object.keys(_trackers); }
    dispatchToTrackersInCollection(trackers, _trackers, function (t) {
        var builtEvent = buildConsentWithdrawn(event);
        t.core.track(builtEvent.event, event.context ? event.context.concat(builtEvent.context) : builtEvent.context, event.timestamp);
    });
}

export { ConsentPlugin, enableGdprContext, gdprBasis, trackConsentGranted, trackConsentWithdrawn };
//# sourceMappingURL=index.module.js.map
