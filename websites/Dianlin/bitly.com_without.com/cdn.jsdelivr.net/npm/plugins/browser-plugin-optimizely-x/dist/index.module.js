/*!
 * Attaches OptimizelyX data to Snowplow events v3.4.0 (http://bit.ly/sp-js)
 * Copyright 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */

import { parseAndValidateInt } from '@snowplow/browser-tracker-core';

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
 * Adds Opimizely X context to events
 */
function OptimizelyXPlugin() {
    /**
     * Check that *both* optimizely and optimizely.get exist
     *
     * @param property - optimizely data property
     * @param snd - optional nested property
     */
    function getOptimizelyXData(property, snd) {
        var windowOptimizelyAlias = window.optimizely;
        var data;
        if (windowOptimizelyAlias && typeof windowOptimizelyAlias.get === 'function') {
            data = windowOptimizelyAlias.get(property);
            if (typeof snd !== 'undefined' && data !== undefined) {
                data = data[snd];
            }
        }
        return data;
    }
    /**
     * Get data for OptimizelyX contexts - active experiments on current page
     *
     * @returns Array content of lite optimizely lite context
     */
    function getOptimizelyXSummary() {
        var state = getOptimizelyXData('state');
        var experiment_ids = state && state.getActiveExperimentIds();
        var variationMap = state && state.getVariationMap();
        var visitor = getOptimizelyXData('visitor');
        return experiment_ids.map(function (activeExperiment) {
            var variation = variationMap[activeExperiment];
            var variationName = (variation && variation.name && variation.name.toString()) || null;
            var variationId = variation && variation.id;
            var visitorId = (visitor && visitor.visitorId && visitor.visitorId.toString()) || null;
            return {
                experimentId: parseAndValidateInt(activeExperiment) || null,
                variationName: variationName,
                variation: parseAndValidateInt(variationId) || null,
                visitorId: visitorId
            };
        });
    }
    /**
     * Creates an OptimizelyX context containing only data required to join
     * event to experiment data
     *
     * @returns Array of custom contexts
     */
    function getOptimizelyXSummaryContexts() {
        return getOptimizelyXSummary().map(function (experiment) {
            return {
                schema: 'iglu:com.optimizely.optimizelyx/summary/jsonschema/1-0-0',
                data: experiment
            };
        });
    }
    return {
        contexts: function () {
            // Add Optimizely Contexts
            if (window.optimizely) {
                return getOptimizelyXSummaryContexts();
            }
            return [];
        }
    };
}

export { OptimizelyXPlugin };
//# sourceMappingURL=index.module.js.map
