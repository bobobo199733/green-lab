/*!
 * Attaches Geolocation data to Snowplow events v3.4.0 (http://bit.ly/sp-js)
 * Copyright 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */

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
var geolocation, geolocationContextAdded = false;
/**
 * Captures the geolocation information from the users browser
 * The geolocation will be cached and will be only be requested once
 * @param enableAtLoad - Should the geolocation context be populated immediately
 *
 * @remarks
 * Enabling this will produce a popup for the user asking for permission to read their location information
 */
function GeolocationPlugin(enableAtLoad) {
    if (enableAtLoad === void 0) { enableAtLoad = false; }
    var trackerId;
    return {
        activateBrowserPlugin: function (tracker) {
            trackerId = tracker.id;
            _trackers[tracker.id] = [false, undefined];
            if (enableAtLoad) {
                enableGeolocationContext([trackerId]);
            }
        },
        contexts: function () {
            var _a;
            var context = (_a = _trackers[trackerId]) === null || _a === void 0 ? void 0 : _a[1];
            if (context) {
                return [context];
            }
            return [];
        }
    };
}
/**
 * Attempts to create a context using the geolocation API
 *
 * @param trackers - The tracker identifiers which the context will be sent to
 */
function enableGeolocationContext(trackers) {
    if (trackers === void 0) { trackers = Object.keys(_trackers); }
    var navigatorAlias = navigator;
    trackers.forEach(function (t) {
        //Mark as enabled
        _trackers[t] = [true, geolocation]; // Geolocation might still be undefined but it could also be set already
    });
    if (!geolocationContextAdded && navigatorAlias.geolocation && navigatorAlias.geolocation.getCurrentPosition) {
        geolocationContextAdded = true;
        navigatorAlias.geolocation.getCurrentPosition(function (position) {
            var coords = position.coords;
            geolocation = {
                schema: 'iglu:com.snowplowanalytics.snowplow/geolocation_context/jsonschema/1-1-0',
                data: {
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    latitudeLongitudeAccuracy: coords.accuracy,
                    altitude: coords.altitude,
                    altitudeAccuracy: coords.altitudeAccuracy,
                    bearing: coords.heading,
                    speed: coords.speed,
                    timestamp: Math.round(position.timestamp)
                }
            };
            // Ensure all trackers with geolocation enabled have the context set
            for (var key in _trackers) {
                if (Object.prototype.hasOwnProperty.call(_trackers, key) && _trackers[key][0]) {
                    _trackers[key] = [true, geolocation];
                }
            }
        });
    }
}

export { GeolocationPlugin, enableGeolocationContext };
//# sourceMappingURL=index.module.js.map
