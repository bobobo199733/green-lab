/*!
 * Enhanced Ecommerce tracking for Snowplow v3.4.0 (http://bit.ly/sp-js)
 * Copyright 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */

import { dispatchToTrackersInCollection, parseAndValidateFloat, parseAndValidateInt } from '@snowplow/browser-tracker-core';
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
var _context = {};
/**
 * For tracking GA Enhanced Ecommerce events and contexts
 * {@link https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce}
 */
function EnhancedEcommercePlugin() {
    return {
        activateBrowserPlugin: function (tracker) {
            _trackers[tracker.id] = tracker;
            _context[tracker.id] = [];
        }
    };
}
/**
 * Track a GA Enhanced Ecommerce Action with all stored
 * Enhanced Ecommerce contexts
 *
 * @param event
 * @param trackers
 */
function trackEnhancedEcommerceAction(event, trackers) {
    if (event === void 0) { event = {}; }
    if (trackers === void 0) { trackers = Object.keys(_trackers); }
    dispatchToTrackersInCollection(trackers, _trackers, function (t) {
        var combinedContexts = _context[t.id].concat(event.context || []);
        _context[t.id].length = 0;
        t.core.track(buildSelfDescribingEvent({
            event: {
                schema: 'iglu:com.google.analytics.enhanced-ecommerce/action/jsonschema/1-0-0',
                data: {
                    action: event.action
                }
            }
        }), combinedContexts, event.timestamp);
    });
}
/**
 * Adds a GA Enhanced Ecommerce Action Context
 *
 * @param context - The context to be stored
 * @param trackers - The tracker identifiers which the context will be stored against
 */
function addEnhancedEcommerceActionContext(context, trackers) {
    if (context === void 0) { context = {}; }
    if (trackers === void 0) { trackers = Object.keys(_trackers); }
    var id = context.id, affiliation = context.affiliation, revenue = context.revenue, tax = context.tax, shipping = context.shipping, coupon = context.coupon, list = context.list, step = context.step, option = context.option, currency = context.currency;
    trackers.forEach(function (trackerId) {
        if (_context[trackerId]) {
            _context[trackerId].push({
                schema: 'iglu:com.google.analytics.enhanced-ecommerce/actionFieldObject/jsonschema/1-0-0',
                data: {
                    id: id,
                    affiliation: affiliation,
                    revenue: parseAndValidateFloat(revenue),
                    tax: parseAndValidateFloat(tax),
                    shipping: parseAndValidateFloat(shipping),
                    coupon: coupon,
                    list: list,
                    step: parseAndValidateInt(step),
                    option: option,
                    currency: currency
                }
            });
        }
    });
}
/**
 * Adds a GA Enhanced Ecommerce Impression Context
 *
 * @param context - The context to be stored
 * @param trackers - The tracker identifiers which the context will be stored against
 */
function addEnhancedEcommerceImpressionContext(context, trackers) {
    if (context === void 0) { context = {}; }
    if (trackers === void 0) { trackers = Object.keys(_trackers); }
    var id = context.id, name = context.name, list = context.list, brand = context.brand, category = context.category, variant = context.variant, position = context.position, price = context.price, currency = context.currency;
    trackers.forEach(function (trackerId) {
        if (_context[trackerId]) {
            _context[trackerId].push({
                schema: 'iglu:com.google.analytics.enhanced-ecommerce/impressionFieldObject/jsonschema/1-0-0',
                data: {
                    id: id,
                    name: name,
                    list: list,
                    brand: brand,
                    category: category,
                    variant: variant,
                    position: parseAndValidateInt(position),
                    price: parseAndValidateFloat(price),
                    currency: currency
                }
            });
        }
    });
}
/**
 * Adds a GA Enhanced Ecommerce Product Context
 *
 * @param context - The context to be stored
 * @param trackers - The tracker identifiers which the context will be stored against
 */
function addEnhancedEcommerceProductContext(context, trackers) {
    if (context === void 0) { context = {}; }
    if (trackers === void 0) { trackers = Object.keys(_trackers); }
    var id = context.id, name = context.name, list = context.list, brand = context.brand, category = context.category, variant = context.variant, price = context.price, quantity = context.quantity, coupon = context.coupon, position = context.position, currency = context.currency;
    trackers.forEach(function (trackerId) {
        if (_context[trackerId]) {
            _context[trackerId].push({
                schema: 'iglu:com.google.analytics.enhanced-ecommerce/productFieldObject/jsonschema/1-0-0',
                data: {
                    id: id,
                    name: name,
                    list: list,
                    brand: brand,
                    category: category,
                    variant: variant,
                    price: parseAndValidateFloat(price),
                    quantity: parseAndValidateInt(quantity),
                    coupon: coupon,
                    position: parseAndValidateInt(position),
                    currency: currency
                }
            });
        }
    });
}
/**
 * Adds a GA Enhanced Ecommerce Promo Context
 *
 * @param context - The context to be stored
 * @param trackers - The tracker identifiers which the context will be stored against
 */
function addEnhancedEcommercePromoContext(context, trackers) {
    if (context === void 0) { context = {}; }
    if (trackers === void 0) { trackers = Object.keys(_trackers); }
    var id = context.id, name = context.name, creative = context.creative, position = context.position, currency = context.currency;
    trackers.forEach(function (trackerId) {
        if (_context[trackerId]) {
            _context[trackerId].push({
                schema: 'iglu:com.google.analytics.enhanced-ecommerce/promoFieldObject/jsonschema/1-0-0',
                data: {
                    id: id,
                    name: name,
                    creative: creative,
                    position: position,
                    currency: currency
                }
            });
        }
    });
}

export { EnhancedEcommercePlugin, addEnhancedEcommerceActionContext, addEnhancedEcommerceImpressionContext, addEnhancedEcommerceProductContext, addEnhancedEcommercePromoContext, trackEnhancedEcommerceAction };
//# sourceMappingURL=index.module.js.map
