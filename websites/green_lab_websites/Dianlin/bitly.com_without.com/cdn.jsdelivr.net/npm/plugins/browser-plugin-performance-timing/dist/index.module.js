/*!
 * Attaches Performance Timing data to Snowplow events v3.4.0 (http://bit.ly/sp-js)
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
/**
 * Adds Performance Timing context to events
 *
 * @remarks
 * May not be fully populated when inital Page View fires
 * Often a good idea to take the latest performance timing context
 * for a given page view id when analysing in the warehouse
 */
function PerformanceTimingPlugin() {
    /**
     * Creates a context from the window.performance.timing object
     *
     * @returns object PerformanceTiming context
     */
    function getPerformanceTimingContext() {
        var windowAlias = window, performanceAlias = windowAlias.performance ||
            windowAlias.mozPerformance ||
            windowAlias.msPerformance ||
            windowAlias.webkitPerformance, performanceTimingAlias = performanceAlias.timing;
        if (performanceAlias) {
            var performanceTiming = {
                navigationStart: performanceTimingAlias.navigationStart,
                redirectStart: performanceTimingAlias.redirectStart,
                redirectEnd: performanceTimingAlias.redirectEnd,
                fetchStart: performanceTimingAlias.fetchStart,
                domainLookupStart: performanceTimingAlias.domainLookupStart,
                domainLookupEnd: performanceTimingAlias.domainLookupEnd,
                connectStart: performanceTimingAlias.connectStart,
                secureConnectionStart: performanceTimingAlias.secureConnectionStart,
                connectEnd: performanceTimingAlias.connectEnd,
                requestStart: performanceTimingAlias.requestStart,
                responseStart: performanceTimingAlias.responseStart,
                responseEnd: performanceTimingAlias.responseEnd,
                unloadEventStart: performanceTimingAlias.unloadEventStart,
                unloadEventEnd: performanceTimingAlias.unloadEventEnd,
                domLoading: performanceTimingAlias.domLoading,
                domInteractive: performanceTimingAlias.domInteractive,
                domContentLoadedEventStart: performanceTimingAlias.domContentLoadedEventStart,
                domContentLoadedEventEnd: performanceTimingAlias.domContentLoadedEventEnd,
                domComplete: performanceTimingAlias.domComplete,
                loadEventStart: performanceTimingAlias.loadEventStart,
                loadEventEnd: performanceTimingAlias.loadEventEnd,
                msFirstPaint: performanceTimingAlias.msFirstPaint,
                chromeFirstPaint: performanceTimingAlias.chromeFirstPaint,
                requestEnd: performanceTimingAlias.requestEnd,
                proxyStart: performanceTimingAlias.proxyStart,
                proxyEnd: performanceTimingAlias.proxyEnd
            };
            return [
                {
                    schema: 'iglu:org.w3/PerformanceTiming/jsonschema/1-0-0',
                    data: performanceTiming
                },
            ];
        }
        return [];
    }
    return {
        contexts: function () { return getPerformanceTimingContext(); }
    };
}

export { PerformanceTimingPlugin };
//# sourceMappingURL=index.module.js.map
