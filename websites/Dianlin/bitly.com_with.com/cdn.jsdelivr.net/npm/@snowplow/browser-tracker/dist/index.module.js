/*!
 * Browser tracker for Snowplow v3.4.0 (http://bit.ly/sp-js)
 * Copyright 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */

import { dispatchToTrackers, createSharedState, addTracker } from '@snowplow/browser-tracker-core';
import { buildStructEvent, buildSelfDescribingEvent, version } from '@snowplow/tracker-core';
export { version } from '@snowplow/tracker-core';

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
/**
 * Expires current session and starts a new session.
 *
 * @param trackers - The tracker identifiers which will have their session refreshed
 */
function newSession(trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.newSession();
    });
}
/**
 * Override referrer
 *
 * @param url - Custom Referrer which will be used as override
 * @param trackers - The tracker identifiers which will be configured
 */
function setReferrerUrl(url, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.setReferrerUrl(url);
    });
}
/**
 * Override url
 *
 * @param url - Custom URL which will be used as override
 * @param trackers - The tracker identifiers which will be configured
 */
function setCustomUrl(url, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.setCustomUrl(url);
    });
}
/**
 * Override document.title
 *
 * @param title - Document title which will be used as override
 * @param trackers - The tracker identifiers which will be configured
 */
function setDocumentTitle(title, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.setDocumentTitle(title);
    });
}
/**
 * Strip hash tag (or anchor) from URL
 *
 * @param enable - Whether to enable stripping of hash
 * @param trackers - The tracker identifiers which will be configured
 */
function discardHashTag(enable, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.discardHashTag(enable);
    });
}
/**
 * Strip braces from URL
 *
 * @param enable - Whther to enable stripping of braces
 * @param trackers - The tracker identifiers which will be configured
 */
function discardBrace(enable, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.discardBrace(enable);
    });
}
/**
 * Set first-party cookie path
 *
 * @param path - The path which will be used when setting cookies
 * @param trackers - The tracker identifiers which will be configured
 */
function setCookiePath(path, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.setCookiePath(path);
    });
}
/**
 * Set visitor cookie timeout (in seconds)
 *
 * @param timeout - The timeout until cookies will expire
 * @param trackers - The tracker identifiers which will be configured
 */
function setVisitorCookieTimeout(timeout, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.setVisitorCookieTimeout(timeout);
    });
}
/**
 * Enable querystring decoration for links pasing a filter
 *
 * @param crossDomainLinker - Function used to determine which links to decorate
 * @param trackers - The tracker identifiers which will be configured
 */
function crossDomainLinker(crossDomainLinkerCriterion, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.crossDomainLinker(crossDomainLinkerCriterion);
    });
}
/**
 * Enables page activity tracking (sends page pings to the Collector regularly).
 *
 * @param configuration - The activity tracking configuration
 * @param trackers - The tracker identifiers which will be configured
 */
function enableActivityTracking(configuration, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.enableActivityTracking(configuration);
    });
}
/**
 * Enables page activity tracking (replaces collector ping with callback).
 *
 * @param configuration - The activity tracking callback configuration
 * @param trackers - The tracker identifiers which will be configured
 */
function enableActivityTrackingCallback(configuration, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.enableActivityTrackingCallback(configuration);
    });
}
/**
 * Triggers the activityHandler manually to allow external user defined activity. i.e. While watching a video
 *
 * @param trackers - The tracker identifiers which will be updated
 */
function updatePageActivity(trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.updatePageActivity();
    });
}
/**
 * Sets the opt out cookie.
 *
 * @param name - of the opt out cookie
 * @param trackers - The tracker identifiers which will be configured
 */
function setOptOutCookie(name, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.setOptOutCookie(name);
    });
}
/**
 * Set the business-defined user ID for this user.
 *
 * @param userId - The business-defined user ID
 * @param trackers - The tracker identifiers which will be configured
 */
function setUserId(userId, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.setUserId(userId);
    });
}
/**
 * Set the business-defined user ID for this user using the location querystring.
 *
 * @param querystringField - Name of a querystring name-value pair
 * @param trackers - The tracker identifiers which will be configured
 */
function setUserIdFromLocation(querystringField, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.setUserIdFromLocation(querystringField);
    });
}
/**
 * Set the business-defined user ID for this user using the referrer querystring.
 *
 * @param querystringField - Name of a querystring name-value pair
 * @param trackers - The tracker identifiers which will be configured
 */
function setUserIdFromReferrer(querystringField, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.setUserIdFromReferrer(querystringField);
    });
}
/**
 * Set the business-defined user ID for this user to the value of a cookie.
 *
 * @param cookieName - Name of the cookie whose value will be assigned to businessUserId
 * @param trackers - The tracker identifiers which will be configured
 */
function setUserIdFromCookie(cookieName, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.setUserIdFromCookie(cookieName);
    });
}
/**
 * Specify the Snowplow collector URL. Specific http or https to force it
 * or leave it off to match the website protocol.
 *
 * @param collectorUrl - The collector URL, with or without protocol
 * @param trackers - The tracker identifiers which will be configured
 */
function setCollectorUrl(collectorUrl, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.setCollectorUrl(collectorUrl);
    });
}
/**
 * Set the buffer size
 * Can be useful if you want to stop batching requests to ensure events start
 * sending closer to event creation
 *
 * @param newBufferSize - The value with which to update the bufferSize to
 * @param trackers - The tracker identifiers which will be flushed
 */
function setBufferSize(newBufferSize, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.setBufferSize(newBufferSize);
    });
}
/**
 * Send all events in the outQueue
 * Only need to use this when sending events with a bufferSize of at least 2
 *
 * @param configuration - The configuration to use following flushing the buffer
 * @param trackers - The tracker identifiers which will be flushed
 */
function flushBuffer(configuration, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.flushBuffer(configuration);
    });
}
/**
 * Track a visit to a web page
 *
 * @param event - The Page View Event properties
 * @param trackers - The tracker identifiers which the event will be sent to
 */
function trackPageView(event, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.trackPageView(event);
    });
}
/**
 * Track a structured event
 * A classic style of event tracking, allows for easier movement between analytics
 * systems. A loosely typed event, creating a Self Describing event is preferred, but
 * useful for interoperability.
 *
 * @param event - The Structured Event properties
 * @param trackers - The tracker identifiers which the event will be sent to
 */
function trackStructEvent(event, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.core.track(buildStructEvent(event), event.context, event.timestamp);
    });
}
/**
 * Track a self-describing event happening on this page.
 * A custom event type, allowing for an event to be tracked using your own custom schema
 * and a data object which conforms to the supplied schema
 *
 * @param event - The event information
 * @param trackers - The tracker identifiers which the event will be sent to
 */
function trackSelfDescribingEvent(event, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.core.track(buildSelfDescribingEvent({ event: event.event }), event.context, event.timestamp);
    });
}
/**
 * All provided contexts will be sent with every event
 *
 * @param contexts - An array of contexts or conditional contexts
 * @param trackers - The tracker identifiers which the global contexts will be added to
 */
function addGlobalContexts(contexts, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.core.addGlobalContexts(contexts);
    });
}
/**
 * All provided contexts will no longer be sent with every event
 *
 * @param contexts - An array of contexts or conditional contexts
 * @param trackers - The tracker identifiers which the global contexts will be remove from
 */
function removeGlobalContexts(contexts, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.core.removeGlobalContexts(contexts);
    });
}
/**
 * Clear all global contexts that are sent with events
 *
 * @param trackers - The tracker identifiers which the global contexts will be cleared from
 */
function clearGlobalContexts(trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.core.clearGlobalContexts();
    });
}
/**
 * Stop regenerating `pageViewId` (available from `web_page` context)
 *
 * @param trackers - The tracker identifiers which the event will preserve their Page View Ids
 */
function preservePageViewId(trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.preservePageViewId();
    });
}
/**
 * Disables anonymous tracking if active (ie. tracker initialized with `anonymousTracking`)
 * For stateStorageStrategy override, uses supplied value first,
 * falls back to one defined in initial config, otherwise uses cookieAndLocalStorage.
 *
 * @param configuration - The configuration for disabling anonymous tracking
 * @param trackers - The tracker identifiers which the event will be sent to
 */
function disableAnonymousTracking(configuration, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.disableAnonymousTracking(configuration);
    });
}
/**
 * Enables anonymous tracking (ie. tracker initialized without `anonymousTracking`)
 *
 * @param configuration - The configuration for enabling anonymous tracking
 * @param trackers - The tracker identifiers which the event will be sent to
 */
function enableAnonymousTracking(configuration, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.enableAnonymousTracking(configuration);
    });
}
/**
 * Clears all cookies and local storage containing user and session identifiers
 *
 * @param trackers - The tracker identifiers which the event will be sent to
 */
function clearUserData(configuration, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.clearUserData(configuration);
    });
}
/**
 * Add a plugin into the plugin collection after trackers have already been initialised
 *
 * @param configuration - The plugin to add
 * @param trackers - The tracker identifiers which the plugin will be added to
 */
function addPlugin(configuration, trackers) {
    dispatchToTrackers(trackers, function (t) {
        t.addPlugin(configuration);
    });
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
var state = typeof window !== 'undefined' ? createSharedState() : undefined;
/**
 * Initialise a new tracker
 *
 * @param trackerId - The tracker id - also known as tracker namespace
 * @param endpoint - Collector endpoint in the form collector.mysite.com
 * @param configuration - The initialisation options of the tracker
 */
function newTracker(trackerId, endpoint, configuration) {
    if (configuration === void 0) { configuration = {}; }
    if (state) {
        return addTracker(trackerId, trackerId, "js-".concat(version), endpoint, state, configuration);
    }
    else {
        return undefined;
    }
}

export { addGlobalContexts, addPlugin, clearGlobalContexts, clearUserData, crossDomainLinker, disableAnonymousTracking, discardBrace, discardHashTag, enableActivityTracking, enableActivityTrackingCallback, enableAnonymousTracking, flushBuffer, newSession, newTracker, preservePageViewId, removeGlobalContexts, setBufferSize, setCollectorUrl, setCookiePath, setCustomUrl, setDocumentTitle, setOptOutCookie, setReferrerUrl, setUserId, setUserIdFromCookie, setUserIdFromLocation, setUserIdFromReferrer, setVisitorCookieTimeout, trackPageView, trackSelfDescribingEvent, trackStructEvent, updatePageActivity };
//# sourceMappingURL=index.module.js.map
