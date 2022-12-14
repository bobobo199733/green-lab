/*!
 * Core functionality for Snowplow JavaScript trackers v3.4.0 (http://bit.ly/sp-js)
 * Copyright 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */

import { __spreadArray, __assign } from 'tslib';
import { v4 } from 'uuid';

var version$1 = "3.4.0";

/*
 * Copyright (c) 2013 Kevin van Zonneveld (http://kvz.io)
 * and Contributors (http://phpjs.org/authors)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * Encodes a string into a url safe Base 64 encoded string
 * @remarks See: {@link http://tools.ietf.org/html/rfc4648#page-7}
 * @param data - String to encode
 * @returns The url safe Base 64 string
 */
function base64urlencode(data) {
    if (!data) {
        return data;
    }
    var enc = base64encode(data);
    return enc.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
/**
 * Encode string as base64.
 * Any type can be passed, but will be stringified
 *
 * @param data - string to encode
 * @returns base64-encoded string
 */
function base64encode(data) {
    // discuss at: http://phpjs.org/functions/base64_encode/
    // original by: Tyler Akins (http://rumkin.com)
    // improved by: Bayron Guevara
    // improved by: Thunder.m
    // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // improved by: Rafa?? Kukawski (http://kukawski.pl)
    // bugfixed by: Pellentesque Malesuada
    // example 1: base64_encode('Kevin van Zonneveld');
    // returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
    // example 2: base64_encode('a');
    // returns 2: 'YQ=='
    // example 3: base64_encode('??? ?? la mode');
    // returns 3: '4pyTIMOgIGxhIG1vZGU='
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0;
    var tmp_arr = [];
    if (!data) {
        return data;
    }
    data = unescape(encodeURIComponent(data));
    do {
        // pack three octets into four hexets
        o1 = data.charCodeAt(i++);
        o2 = data.charCodeAt(i++);
        o3 = data.charCodeAt(i++);
        bits = (o1 << 16) | (o2 << 8) | o3;
        h1 = (bits >> 18) & 0x3f;
        h2 = (bits >> 12) & 0x3f;
        h3 = (bits >> 6) & 0x3f;
        h4 = bits & 0x3f;
        // use hexets to index into b64, and append result to encoded string
        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);
    var enc = tmp_arr.join('');
    var r = data.length % 3;
    return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
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
function payloadBuilder() {
    var dict = {}, allJson = [], jsonForProcessing = [];
    var processor;
    var add = function (key, value) {
        if (value != null && value !== '') {
            // null also checks undefined
            dict[key] = value;
        }
    };
    var addDict = function (dict) {
        for (var key in dict) {
            if (Object.prototype.hasOwnProperty.call(dict, key)) {
                add(key, dict[key]);
            }
        }
    };
    var addJson = function (keyIfEncoded, keyIfNotEncoded, json) {
        if (json && isNonEmptyJson(json)) {
            var jsonWithKeys = { keyIfEncoded: keyIfEncoded, keyIfNotEncoded: keyIfNotEncoded, json: json };
            jsonForProcessing.push(jsonWithKeys);
            allJson.push(jsonWithKeys);
        }
    };
    return {
        add: add,
        addDict: addDict,
        addJson: addJson,
        getPayload: function () { return dict; },
        getJson: function () { return allJson; },
        withJsonProcessor: function (jsonProcessor) {
            processor = jsonProcessor;
        },
        build: function () {
            processor === null || processor === void 0 ? void 0 : processor(this, jsonForProcessing);
            return dict;
        }
    };
}
/**
 * A helper to build a Snowplow request from a set of name-value pairs, provided using the add methods.
 * Will base64 encode JSON, if desired, on build
 *
 * @returns The request builder, with add and build methods
 */
function payloadJsonProcessor(encodeBase64) {
    return function (payloadBuilder, jsonForProcessing) {
        for (var _i = 0, jsonForProcessing_1 = jsonForProcessing; _i < jsonForProcessing_1.length; _i++) {
            var json = jsonForProcessing_1[_i];
            var str = JSON.stringify(json.json);
            if (encodeBase64) {
                payloadBuilder.add(json.keyIfEncoded, base64urlencode(str));
            }
            else {
                payloadBuilder.add(json.keyIfNotEncoded, str);
            }
        }
        jsonForProcessing.length = 0;
    };
}
/**
 * Is property a non-empty JSON?
 * @param property - Checks if object is non-empty json
 */
function isNonEmptyJson(property) {
    if (!isJson(property)) {
        return false;
    }
    for (var key in property) {
        if (Object.prototype.hasOwnProperty.call(property, key)) {
            return true;
        }
    }
    return false;
}
/**
 * Is property a JSON?
 * @param property - Checks if object is json
 */
function isJson(property) {
    return (typeof property !== 'undefined' &&
        property !== null &&
        (property.constructor === {}.constructor || property.constructor === [].constructor));
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
var label = 'Snowplow: ';
var LOG_LEVEL;
(function (LOG_LEVEL) {
    LOG_LEVEL[LOG_LEVEL["none"] = 0] = "none";
    LOG_LEVEL[LOG_LEVEL["error"] = 1] = "error";
    LOG_LEVEL[LOG_LEVEL["warn"] = 2] = "warn";
    LOG_LEVEL[LOG_LEVEL["debug"] = 3] = "debug";
    LOG_LEVEL[LOG_LEVEL["info"] = 4] = "info";
})(LOG_LEVEL || (LOG_LEVEL = {}));
var LOG = logger();
function logger(logLevel) {
    if (logLevel === void 0) { logLevel = LOG_LEVEL.warn; }
    function setLogLevel(level) {
        if (LOG_LEVEL[level]) {
            logLevel = level;
        }
        else {
            logLevel = LOG_LEVEL.warn;
        }
    }
    /**
     * Log errors, with or without error object
     */
    function error(message, error) {
        var extraParams = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            extraParams[_i - 2] = arguments[_i];
        }
        if (logLevel >= LOG_LEVEL.error && typeof console !== 'undefined') {
            var logMsg = label + message + '\n';
            if (error) {
                console.error.apply(console, __spreadArray([logMsg + '\n', error], extraParams, false));
            }
            else {
                console.error.apply(console, __spreadArray([logMsg], extraParams, false));
            }
        }
    }
    /**
     * Log warnings, with or without error object
     */
    function warn(message, error) {
        var extraParams = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            extraParams[_i - 2] = arguments[_i];
        }
        if (logLevel >= LOG_LEVEL.warn && typeof console !== 'undefined') {
            var logMsg = label + message;
            if (error) {
                console.warn.apply(console, __spreadArray([logMsg + '\n', error], extraParams, false));
            }
            else {
                console.warn.apply(console, __spreadArray([logMsg], extraParams, false));
            }
        }
    }
    /**
     * Log debug messages
     */
    function debug(message) {
        var extraParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            extraParams[_i - 1] = arguments[_i];
        }
        if (logLevel >= LOG_LEVEL.debug && typeof console !== 'undefined') {
            console.debug.apply(console, __spreadArray([label + message], extraParams, false));
        }
    }
    /**
     * Log info messages
     */
    function info(message) {
        var extraParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            extraParams[_i - 1] = arguments[_i];
        }
        if (logLevel >= LOG_LEVEL.info && typeof console !== 'undefined') {
            console.info.apply(console, __spreadArray([label + message], extraParams, false));
        }
    }
    return { setLogLevel: setLogLevel, warn: warn, error: error, debug: debug, info: info };
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
/**
 * Contains helper functions to aid in the addition and removal of Global Contexts
 */
function globalContexts() {
    var globalPrimitives = [];
    var conditionalProviders = [];
    /**
     * Returns all applicable global contexts for a specified event
     * @param event - The event to check for applicable global contexts for
     * @returns An array of contexts
     */
    var assembleAllContexts = function (event) {
        var eventSchema = getUsefulSchema(event);
        var eventType = getEventType(event);
        var contexts = [];
        var generatedPrimitives = generatePrimitives(globalPrimitives, event, eventType, eventSchema);
        contexts.push.apply(contexts, generatedPrimitives);
        var generatedConditionals = generateConditionals(conditionalProviders, event, eventType, eventSchema);
        contexts.push.apply(contexts, generatedConditionals);
        return contexts;
    };
    return {
        getGlobalPrimitives: function () {
            return globalPrimitives;
        },
        getConditionalProviders: function () {
            return conditionalProviders;
        },
        addGlobalContexts: function (contexts) {
            var acceptedConditionalContexts = [];
            var acceptedContextPrimitives = [];
            for (var _i = 0, contexts_1 = contexts; _i < contexts_1.length; _i++) {
                var context = contexts_1[_i];
                if (isConditionalContextProvider(context)) {
                    acceptedConditionalContexts.push(context);
                }
                else if (isContextPrimitive(context)) {
                    acceptedContextPrimitives.push(context);
                }
            }
            globalPrimitives = globalPrimitives.concat(acceptedContextPrimitives);
            conditionalProviders = conditionalProviders.concat(acceptedConditionalContexts);
        },
        clearGlobalContexts: function () {
            conditionalProviders = [];
            globalPrimitives = [];
        },
        removeGlobalContexts: function (contexts) {
            var _loop_1 = function (context) {
                if (isConditionalContextProvider(context)) {
                    conditionalProviders = conditionalProviders.filter(function (item) { return JSON.stringify(item) !== JSON.stringify(context); });
                }
                else if (isContextPrimitive(context)) {
                    globalPrimitives = globalPrimitives.filter(function (item) { return JSON.stringify(item) !== JSON.stringify(context); });
                }
            };
            for (var _i = 0, contexts_2 = contexts; _i < contexts_2.length; _i++) {
                var context = contexts_2[_i];
                _loop_1(context);
            }
        },
        getApplicableContexts: function (event) {
            return assembleAllContexts(event);
        }
    };
}
function pluginContexts(plugins) {
    /**
     * Add common contexts to every event
     *
     * @param array - additionalContexts List of user-defined contexts
     * @returns userContexts combined with commonContexts
     */
    return {
        addPluginContexts: function (additionalContexts) {
            var combinedContexts = additionalContexts ? __spreadArray([], additionalContexts, true) : [];
            plugins.forEach(function (plugin) {
                try {
                    if (plugin.contexts) {
                        combinedContexts.push.apply(combinedContexts, plugin.contexts());
                    }
                }
                catch (ex) {
                    LOG.error('Error adding plugin contexts', ex);
                }
            });
            return combinedContexts;
        }
    };
}
/**
 * Find dynamic context generating functions and return their results to be merged into the static contexts
 * Combine an array of unchanging contexts with the result of a context-creating function
 *
 * @param dynamicOrStaticContexts - Array of custom context Objects or custom context generating functions
 * @param Parameters - to pass to dynamic context callbacks
 * @returns An array of Self Describing JSON context
 */
function resolveDynamicContext(dynamicOrStaticContexts) {
    var _a;
    var extraParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        extraParams[_i - 1] = arguments[_i];
    }
    return ((_a = dynamicOrStaticContexts === null || dynamicOrStaticContexts === void 0 ? void 0 : dynamicOrStaticContexts.map(function (context) {
        if (typeof context === 'function') {
            try {
                return context.apply(void 0, extraParams);
            }
            catch (e) {
                //TODO: provide warning
                return undefined;
            }
        }
        else {
            return context;
        }
    }).filter(Boolean)) !== null && _a !== void 0 ? _a : []);
}
/**
 * Slices a schema into its composite parts. Useful for ruleset filtering.
 * @param input - A schema string
 * @returns The vendor, schema name, major, minor and patch information of a schema string
 */
function getSchemaParts(input) {
    var re = new RegExp('^iglu:([a-zA-Z0-9-_.]+)/([a-zA-Z0-9-_]+)/jsonschema/([1-9][0-9]*)-(0|[1-9][0-9]*)-(0|[1-9][0-9]*)$');
    var matches = re.exec(input);
    if (matches !== null)
        return matches.slice(1, 6);
    return undefined;
}
/**
 * Validates the vendor section of a schema string contains allowed wildcard values
 * @param parts - Array of parts from a schema string
 * @returns Whether the vendor validation parts are a valid combination
 */
function validateVendorParts(parts) {
    if (parts[0] === '*' || parts[1] === '*') {
        return false; // no wildcard in first or second part
    }
    if (parts.slice(2).length > 0) {
        var asterisk = false;
        for (var _i = 0, _a = parts.slice(2); _i < _a.length; _i++) {
            var part = _a[_i];
            if (part === '*')
                // mark when we've found a wildcard
                asterisk = true;
            else if (asterisk)
                // invalid if alpha parts come after wildcard
                return false;
        }
        return true;
    }
    else if (parts.length == 2)
        return true;
    return false;
}
/**
 * Validates the vendor part of a schema string is valid for a rule set
 * @param input - Vendor part of a schema string
 * @returns Whether the vendor validation string is valid
 */
function validateVendor(input) {
    var parts = input.split('.');
    if (parts && parts.length > 1)
        return validateVendorParts(parts);
    return false;
}
/**
 * Checks for validity of input and returns all the sections of a schema string that are used to match rules in a ruleset
 * @param input - A Schema string
 * @returns The sections of a schema string that are used to match rules in a ruleset
 */
function getRuleParts(input) {
    var re = new RegExp('^iglu:((?:(?:[a-zA-Z0-9-_]+|\\*).)+(?:[a-zA-Z0-9-_]+|\\*))/([a-zA-Z0-9-_.]+|\\*)/jsonschema/([1-9][0-9]*|\\*)-(0|[1-9][0-9]*|\\*)-(0|[1-9][0-9]*|\\*)$');
    var matches = re.exec(input);
    if (matches !== null && validateVendor(matches[1]))
        return matches.slice(1, 6);
    return undefined;
}
/**
 * Ensures the rules specified in a schema string of a ruleset are valid
 * @param input - A Schema string
 * @returns if there rule is valid
 */
function isValidRule(input) {
    var ruleParts = getRuleParts(input);
    if (ruleParts) {
        var vendor = ruleParts[0];
        return ruleParts.length === 5 && validateVendor(vendor);
    }
    return false;
}
/**
 * Check if a variable is an Array containing only strings
 * @param input - The variable to validate
 * @returns True if the input is an array containing only strings
 */
function isStringArray(input) {
    return (Array.isArray(input) &&
        input.every(function (x) {
            return typeof x === 'string';
        }));
}
/**
 * Validates whether a rule set is an array of valid ruleset strings
 * @param input - The Array of rule set arguments
 * @returns True is the input is an array of valid rules
 */
function isValidRuleSetArg(input) {
    if (isStringArray(input))
        return input.every(function (x) {
            return isValidRule(x);
        });
    else if (typeof input === 'string')
        return isValidRule(input);
    return false;
}
/**
 * Check if a variable is a valid, non-empty Self Describing JSON
 * @param input - The variable to validate
 * @returns True if a valid Self Describing JSON
 */
function isSelfDescribingJson(input) {
    var sdj = input;
    if (isNonEmptyJson(sdj))
        if ('schema' in sdj && 'data' in sdj)
            return typeof sdj.schema === 'string' && typeof sdj.data === 'object';
    return false;
}
/**
 * Validates if the input object contains the expected properties of a ruleset
 * @param input - The object containing a rule set
 * @returns True if a valid rule set
 */
function isRuleSet(input) {
    var ruleSet = input;
    var ruleCount = 0;
    if (input != null && typeof input === 'object' && !Array.isArray(input)) {
        if (Object.prototype.hasOwnProperty.call(ruleSet, 'accept')) {
            if (isValidRuleSetArg(ruleSet['accept'])) {
                ruleCount += 1;
            }
            else {
                return false;
            }
        }
        if (Object.prototype.hasOwnProperty.call(ruleSet, 'reject')) {
            if (isValidRuleSetArg(ruleSet['reject'])) {
                ruleCount += 1;
            }
            else {
                return false;
            }
        }
        // if either 'reject' or 'accept' or both exists,
        // we have a valid ruleset
        return ruleCount > 0 && ruleCount <= 2;
    }
    return false;
}
/**
 * Validates if the function can be a valid context generator function
 * @param input - The function to be validated
 */
function isContextCallbackFunction(input) {
    return typeof input === 'function' && input.length <= 1;
}
/**
 * Validates if the function can be a valid context primitive function or self describing json
 * @param input - The function or orbject to be validated
 * @returns True if either a Context Generator or Self Describing JSON
 */
function isContextPrimitive(input) {
    return isContextCallbackFunction(input) || isSelfDescribingJson(input);
}
/**
 * Validates if an array is a valid shape to be a Filter Provider
 * @param input - The Array of Context filter callbacks
 */
function isFilterProvider(input) {
    if (Array.isArray(input)) {
        if (input.length === 2) {
            if (Array.isArray(input[1])) {
                return isContextCallbackFunction(input[0]) && input[1].every(isContextPrimitive);
            }
            return isContextCallbackFunction(input[0]) && isContextPrimitive(input[1]);
        }
    }
    return false;
}
/**
 * Validates if an array is a valid shape to be an array of rule sets
 * @param input - The Array of Rule Sets
 */
function isRuleSetProvider(input) {
    if (Array.isArray(input) && input.length === 2) {
        if (!isRuleSet(input[0]))
            return false;
        if (Array.isArray(input[1]))
            return input[1].every(isContextPrimitive);
        return isContextPrimitive(input[1]);
    }
    return false;
}
/**
 * Checks if an input array is either a filter provider or a rule set provider
 * @param input - An array of filter providers or rule set providers
 * @returns Whether the array is a valid {@link ConditionalContextProvider}
 */
function isConditionalContextProvider(input) {
    return isFilterProvider(input) || isRuleSetProvider(input);
}
/**
 * Checks if a given schema matches any rules within the provided rule set
 * @param ruleSet - The rule set containing rules to match schema against
 * @param schema - The schema to be matched against the rule set
 */
function matchSchemaAgainstRuleSet(ruleSet, schema) {
    var rejectCount = 0;
    var acceptCount = 0;
    var acceptRules = ruleSet['accept'];
    if (Array.isArray(acceptRules)) {
        if (ruleSet.accept.some(function (rule) { return matchSchemaAgainstRule(rule, schema); })) {
            acceptCount++;
        }
    }
    else if (typeof acceptRules === 'string') {
        if (matchSchemaAgainstRule(acceptRules, schema)) {
            acceptCount++;
        }
    }
    var rejectRules = ruleSet['reject'];
    if (Array.isArray(rejectRules)) {
        if (ruleSet.reject.some(function (rule) { return matchSchemaAgainstRule(rule, schema); })) {
            rejectCount++;
        }
    }
    else if (typeof rejectRules === 'string') {
        if (matchSchemaAgainstRule(rejectRules, schema)) {
            rejectCount++;
        }
    }
    if (acceptCount > 0 && rejectCount === 0) {
        return true;
    }
    else if (acceptCount === 0 && rejectCount > 0) {
        return false;
    }
    return false;
}
/**
 * Checks if a given schema matches a specific rule from a rule set
 * @param rule - The rule to match schema against
 * @param schema - The schema to be matched against the rule
 */
function matchSchemaAgainstRule(rule, schema) {
    if (!isValidRule(rule))
        return false;
    var ruleParts = getRuleParts(rule);
    var schemaParts = getSchemaParts(schema);
    if (ruleParts && schemaParts) {
        if (!matchVendor(ruleParts[0], schemaParts[0]))
            return false;
        for (var i = 1; i < 5; i++) {
            if (!matchPart(ruleParts[i], schemaParts[i]))
                return false;
        }
        return true; // if it hasn't failed, it passes
    }
    return false;
}
function matchVendor(rule, vendor) {
    // rule and vendor must have same number of elements
    var vendorParts = vendor.split('.');
    var ruleParts = rule.split('.');
    if (vendorParts && ruleParts) {
        if (vendorParts.length !== ruleParts.length)
            return false;
        for (var i = 0; i < ruleParts.length; i++) {
            if (!matchPart(vendorParts[i], ruleParts[i]))
                return false;
        }
        return true;
    }
    return false;
}
function matchPart(rule, schema) {
    // parts should be the string nested between slashes in the URI: /example/
    return (rule && schema && rule === '*') || rule === schema;
}
// Returns the "useful" schema, i.e. what would someone want to use to identify events.
// For some events this is the 'e' property but for unstructured events, this is the
// 'schema' from the 'ue_px' field.
function getUsefulSchema(sb) {
    var eventJson = sb.getJson();
    for (var _i = 0, eventJson_1 = eventJson; _i < eventJson_1.length; _i++) {
        var json = eventJson_1[_i];
        if (json.keyIfEncoded === 'ue_px' && typeof json.json['data'] === 'object') {
            var schema = json.json['data']['schema'];
            if (typeof schema == 'string') {
                return schema;
            }
        }
    }
    return '';
}
function getEventType(payloadBuilder) {
    var eventType = payloadBuilder.getPayload()['e'];
    return typeof eventType === 'string' ? eventType : '';
}
function buildGenerator(generator, event, eventType, eventSchema) {
    var contextGeneratorResult = undefined;
    try {
        // try to evaluate context generator
        var args = {
            event: event.getPayload(),
            eventType: eventType,
            eventSchema: eventSchema
        };
        contextGeneratorResult = generator(args);
        // determine if the produced result is a valid SDJ
        if (Array.isArray(contextGeneratorResult) && contextGeneratorResult.every(isSelfDescribingJson)) {
            return contextGeneratorResult;
        }
        else if (isSelfDescribingJson(contextGeneratorResult)) {
            return contextGeneratorResult;
        }
        else {
            return undefined;
        }
    }
    catch (error) {
        contextGeneratorResult = undefined;
    }
    return contextGeneratorResult;
}
function normalizeToArray(input) {
    if (Array.isArray(input)) {
        return input;
    }
    return Array.of(input);
}
function generatePrimitives(contextPrimitives, event, eventType, eventSchema) {
    var _a;
    var normalizedInputs = normalizeToArray(contextPrimitives);
    var partialEvaluate = function (primitive) {
        var result = evaluatePrimitive(primitive, event, eventType, eventSchema);
        if (result && result.length !== 0) {
            return result;
        }
        return undefined;
    };
    var generatedContexts = normalizedInputs.map(partialEvaluate);
    return (_a = []).concat.apply(_a, generatedContexts.filter(function (c) { return c != null && c.filter(Boolean); }));
}
function evaluatePrimitive(contextPrimitive, event, eventType, eventSchema) {
    if (isSelfDescribingJson(contextPrimitive)) {
        return [contextPrimitive];
    }
    else if (isContextCallbackFunction(contextPrimitive)) {
        var generatorOutput = buildGenerator(contextPrimitive, event, eventType, eventSchema);
        if (isSelfDescribingJson(generatorOutput)) {
            return [generatorOutput];
        }
        else if (Array.isArray(generatorOutput)) {
            return generatorOutput;
        }
    }
    return undefined;
}
function evaluateProvider(provider, event, eventType, eventSchema) {
    if (isFilterProvider(provider)) {
        var filter = provider[0];
        var filterResult = false;
        try {
            var args = {
                event: event.getPayload(),
                eventType: eventType,
                eventSchema: eventSchema
            };
            filterResult = filter(args);
        }
        catch (error) {
            filterResult = false;
        }
        if (filterResult === true) {
            return generatePrimitives(provider[1], event, eventType, eventSchema);
        }
    }
    else if (isRuleSetProvider(provider)) {
        if (matchSchemaAgainstRuleSet(provider[0], eventSchema)) {
            return generatePrimitives(provider[1], event, eventType, eventSchema);
        }
    }
    return [];
}
function generateConditionals(providers, event, eventType, eventSchema) {
    var _a;
    var normalizedInput = normalizeToArray(providers);
    var partialEvaluate = function (provider) {
        var result = evaluateProvider(provider, event, eventType, eventSchema);
        if (result && result.length !== 0) {
            return result;
        }
        return undefined;
    };
    var generatedContexts = normalizedInput.map(partialEvaluate);
    return (_a = []).concat.apply(_a, generatedContexts.filter(function (c) { return c != null && c.filter(Boolean); }));
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
/**
 * Transform optional/old-behavior number timestamp into`Timestamp` ADT
 *
 * @param timestamp - optional number or timestamp object
 * @returns correct timestamp object
 */
function getTimestamp(timestamp) {
    if (timestamp == null) {
        return { type: 'dtm', value: new Date().getTime() };
    }
    else if (typeof timestamp === 'number') {
        return { type: 'dtm', value: timestamp };
    }
    else if (timestamp.type === 'ttm') {
        // We can return timestamp here, but this is safer fallback
        return { type: 'ttm', value: timestamp.value };
    }
    else {
        return { type: 'dtm', value: timestamp.value || new Date().getTime() };
    }
}
/**
 * Create a tracker core object
 *
 * @param base64 - Whether to base 64 encode contexts and self describing event JSONs
 * @param corePlugins - The core plugins to be processed with each event
 * @param callback - Function applied to every payload dictionary object
 * @returns Tracker core
 */
function trackerCore(configuration) {
    if (configuration === void 0) { configuration = {}; }
    function newCore(base64, corePlugins, callback) {
        var pluginContextsHelper = pluginContexts(corePlugins), globalContextsHelper = globalContexts();
        var encodeBase64 = base64, payloadPairs = {}; // Dictionary of key-value pairs which get added to every payload, e.g. tracker version
        /**
         * Wraps an array of custom contexts in a self-describing JSON
         *
         * @param contexts - Array of custom context self-describing JSONs
         * @returns Outer JSON
         */
        function completeContexts(contexts) {
            if (contexts && contexts.length) {
                return {
                    schema: 'iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0',
                    data: contexts
                };
            }
            return undefined;
        }
        /**
         * Adds all global contexts to a contexts array
         *
         * @param pb - PayloadData
         * @param contexts - Custom contexts relating to the event
         */
        function attachGlobalContexts(pb, contexts) {
            var applicableContexts = globalContextsHelper.getApplicableContexts(pb);
            var returnedContexts = [];
            if (contexts && contexts.length) {
                returnedContexts.push.apply(returnedContexts, contexts);
            }
            if (applicableContexts && applicableContexts.length) {
                returnedContexts.push.apply(returnedContexts, applicableContexts);
            }
            return returnedContexts;
        }
        /**
         * Gets called by every trackXXX method
         * Adds context and payloadPairs name-value pairs to the payload
         * Applies the callback to the built payload
         *
         * @param pb - Payload
         * @param context - Custom contexts relating to the event
         * @param timestamp - Timestamp of the event
         * @returns Payload after the callback is applied
         */
        function track(pb, context, timestamp) {
            pb.withJsonProcessor(payloadJsonProcessor(encodeBase64));
            pb.add('eid', v4());
            pb.addDict(payloadPairs);
            var tstamp = getTimestamp(timestamp);
            pb.add(tstamp.type, tstamp.value.toString());
            var allContexts = attachGlobalContexts(pb, pluginContextsHelper.addPluginContexts(context));
            var wrappedContexts = completeContexts(allContexts);
            if (wrappedContexts !== undefined) {
                pb.addJson('cx', 'co', wrappedContexts);
            }
            corePlugins.forEach(function (plugin) {
                try {
                    if (plugin.beforeTrack) {
                        plugin.beforeTrack(pb);
                    }
                }
                catch (ex) {
                    LOG.error('Plugin beforeTrack', ex);
                }
            });
            if (typeof callback === 'function') {
                callback(pb);
            }
            var finalPayload = pb.build();
            corePlugins.forEach(function (plugin) {
                try {
                    if (plugin.afterTrack) {
                        plugin.afterTrack(finalPayload);
                    }
                }
                catch (ex) {
                    LOG.error('Plugin afterTrack', ex);
                }
            });
            return finalPayload;
        }
        /**
         * Set a persistent key-value pair to be added to every payload
         *
         * @param key - Field name
         * @param value - Field value
         */
        function addPayloadPair(key, value) {
            payloadPairs[key] = value;
        }
        var core = {
            track: track,
            addPayloadPair: addPayloadPair,
            getBase64Encoding: function () {
                return encodeBase64;
            },
            setBase64Encoding: function (encode) {
                encodeBase64 = encode;
            },
            addPayloadDict: function (dict) {
                for (var key in dict) {
                    if (Object.prototype.hasOwnProperty.call(dict, key)) {
                        payloadPairs[key] = dict[key];
                    }
                }
            },
            resetPayloadPairs: function (dict) {
                payloadPairs = isJson(dict) ? dict : {};
            },
            setTrackerVersion: function (version) {
                addPayloadPair('tv', version);
            },
            setTrackerNamespace: function (name) {
                addPayloadPair('tna', name);
            },
            setAppId: function (appId) {
                addPayloadPair('aid', appId);
            },
            setPlatform: function (value) {
                addPayloadPair('p', value);
            },
            setUserId: function (userId) {
                addPayloadPair('uid', userId);
            },
            setScreenResolution: function (width, height) {
                addPayloadPair('res', width + 'x' + height);
            },
            setViewport: function (width, height) {
                addPayloadPair('vp', width + 'x' + height);
            },
            setColorDepth: function (depth) {
                addPayloadPair('cd', depth);
            },
            setTimezone: function (timezone) {
                addPayloadPair('tz', timezone);
            },
            setLang: function (lang) {
                addPayloadPair('lang', lang);
            },
            setIpAddress: function (ip) {
                addPayloadPair('ip', ip);
            },
            setUseragent: function (useragent) {
                addPayloadPair('ua', useragent);
            },
            addGlobalContexts: function (contexts) {
                globalContextsHelper.addGlobalContexts(contexts);
            },
            clearGlobalContexts: function () {
                globalContextsHelper.clearGlobalContexts();
            },
            removeGlobalContexts: function (contexts) {
                globalContextsHelper.removeGlobalContexts(contexts);
            }
        };
        return core;
    }
    var base64 = configuration.base64, corePlugins = configuration.corePlugins, callback = configuration.callback, plugins = corePlugins !== null && corePlugins !== void 0 ? corePlugins : [], partialCore = newCore(base64 !== null && base64 !== void 0 ? base64 : true, plugins, callback), core = __assign(__assign({}, partialCore), { addPlugin: function (configuration) {
            var _a, _b;
            var plugin = configuration.plugin;
            plugins.push(plugin);
            (_a = plugin.logger) === null || _a === void 0 ? void 0 : _a.call(plugin, LOG);
            (_b = plugin.activateCorePlugin) === null || _b === void 0 ? void 0 : _b.call(plugin, core);
        } });
    plugins === null || plugins === void 0 ? void 0 : plugins.forEach(function (plugin) {
        var _a, _b;
        (_a = plugin.logger) === null || _a === void 0 ? void 0 : _a.call(plugin, LOG);
        (_b = plugin.activateCorePlugin) === null || _b === void 0 ? void 0 : _b.call(plugin, core);
    });
    return core;
}
/**
 * Build a self-describing event
 * A custom event type, allowing for an event to be tracked using your own custom schema
 * and a data object which conforms to the supplied schema
 *
 * @param event - Contains the properties and schema location for the event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */
function buildSelfDescribingEvent(event) {
    var _a = event.event, schema = _a.schema, data = _a.data, pb = payloadBuilder();
    var ueJson = {
        schema: 'iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0',
        data: { schema: schema, data: data }
    };
    pb.add('e', 'ue');
    pb.addJson('ue_px', 'ue_pr', ueJson);
    return pb;
}
/**
 * Build a Page View Event
 * Represents a Page View, which is typically fired as soon as possible when a web page
 * is loaded within the users browser. Often also fired on "virtual page views" within
 * Single Page Applications (SPA).
 *
 * @param event - Contains the properties for the Page View event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */
function buildPageView(event) {
    var pageUrl = event.pageUrl, pageTitle = event.pageTitle, referrer = event.referrer, pb = payloadBuilder();
    pb.add('e', 'pv'); // 'pv' for Page View
    pb.add('url', pageUrl);
    pb.add('page', pageTitle);
    pb.add('refr', referrer);
    return pb;
}
/**
 * Build a Page Ping Event
 * Fires when activity tracking is enabled in the browser.
 * Tracks same information as the last tracked Page View and includes scroll
 * information from the current page view
 *
 * @param event - Contains the properties for the Page Ping event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */
function buildPagePing(event) {
    var pageUrl = event.pageUrl, pageTitle = event.pageTitle, referrer = event.referrer, minXOffset = event.minXOffset, maxXOffset = event.maxXOffset, minYOffset = event.minYOffset, maxYOffset = event.maxYOffset, pb = payloadBuilder();
    pb.add('e', 'pp'); // 'pp' for Page Ping
    pb.add('url', pageUrl);
    pb.add('page', pageTitle);
    pb.add('refr', referrer);
    if (minXOffset && !isNaN(Number(minXOffset)))
        pb.add('pp_mix', minXOffset.toString());
    if (maxXOffset && !isNaN(Number(maxXOffset)))
        pb.add('pp_max', maxXOffset.toString());
    if (minYOffset && !isNaN(Number(minYOffset)))
        pb.add('pp_miy', minYOffset.toString());
    if (maxYOffset && !isNaN(Number(maxYOffset)))
        pb.add('pp_may', maxYOffset.toString());
    return pb;
}
/**
 * Build a Structured Event
 * A classic style of event tracking, allows for easier movement between analytics
 * systems. A loosely typed event, creating a Self Describing event is preferred, but
 * useful for interoperability.
 *
 * @param event - Contains the properties for the Structured event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */
function buildStructEvent(event) {
    var category = event.category, action = event.action, label = event.label, property = event.property, value = event.value, pb = payloadBuilder();
    pb.add('e', 'se'); // 'se' for Structured Event
    pb.add('se_ca', category);
    pb.add('se_ac', action);
    pb.add('se_la', label);
    pb.add('se_pr', property);
    pb.add('se_va', value == null ? undefined : value.toString());
    return pb;
}
/**
 * Build an Ecommerce Transaction Event
 * Allows for tracking common ecommerce events, this event is usually used when
 * a consumer completes a transaction.
 *
 * @param event - Contains the properties for the Ecommerce Transactoion event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */
function buildEcommerceTransaction(event) {
    var orderId = event.orderId, total = event.total, affiliation = event.affiliation, tax = event.tax, shipping = event.shipping, city = event.city, state = event.state, country = event.country, currency = event.currency, pb = payloadBuilder();
    pb.add('e', 'tr'); // 'tr' for Transaction
    pb.add('tr_id', orderId);
    pb.add('tr_af', affiliation);
    pb.add('tr_tt', total);
    pb.add('tr_tx', tax);
    pb.add('tr_sh', shipping);
    pb.add('tr_ci', city);
    pb.add('tr_st', state);
    pb.add('tr_co', country);
    pb.add('tr_cu', currency);
    return pb;
}
/**
 * Build an Ecommerce Transaction Item Event
 * Related to the {@link buildEcommerceTransaction}
 * Each Ecommerce Transaction may contain one or more EcommerceTransactionItem events
 *
 * @param event - Contains the properties for the Ecommerce Transaction Item event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */
function buildEcommerceTransactionItem(event) {
    var orderId = event.orderId, sku = event.sku, price = event.price, name = event.name, category = event.category, quantity = event.quantity, currency = event.currency, pb = payloadBuilder();
    pb.add('e', 'ti'); // 'tr' for Transaction Item
    pb.add('ti_id', orderId);
    pb.add('ti_sk', sku);
    pb.add('ti_nm', name);
    pb.add('ti_ca', category);
    pb.add('ti_pr', price);
    pb.add('ti_qu', quantity);
    pb.add('ti_cu', currency);
    return pb;
}
/**
 * Build a Scren View Event
 * Similar to a Page View but less focused on typical web properties
 * Often used for mobile applications as the user is presented with
 * new views as they performance navigation events
 *
 * @param event - Contains the properties for the Screen View event. One or more properties must be included.
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */
function buildScreenView(event) {
    var name = event.name, id = event.id;
    return buildSelfDescribingEvent({
        event: {
            schema: 'iglu:com.snowplowanalytics.snowplow/screen_view/jsonschema/1-0-0',
            data: removeEmptyProperties({ name: name, id: id })
        }
    });
}
/**
 * Build a Link Click Event
 * Used when a user clicks on a link on a webpage, typically an anchor tag <a>
 *
 * @param event - Contains the properties for the Link Click event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */
function buildLinkClick(event) {
    var targetUrl = event.targetUrl, elementId = event.elementId, elementClasses = event.elementClasses, elementTarget = event.elementTarget, elementContent = event.elementContent;
    var eventJson = {
        schema: 'iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1',
        data: removeEmptyProperties({ targetUrl: targetUrl, elementId: elementId, elementClasses: elementClasses, elementTarget: elementTarget, elementContent: elementContent })
    };
    return buildSelfDescribingEvent({ event: eventJson });
}
/**
 * Build a Ad Impression Event
 * Used to track an advertisement impression
 *
 * @remarks
 * If you provide the cost field, you must also provide one of 'cpa', 'cpc', and 'cpm' for the costModel field.
 *
 * @param event - Contains the properties for the Ad Impression event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */
function buildAdImpression(event) {
    var impressionId = event.impressionId, costModel = event.costModel, cost = event.cost, targetUrl = event.targetUrl, bannerId = event.bannerId, zoneId = event.zoneId, advertiserId = event.advertiserId, campaignId = event.campaignId;
    var eventJson = {
        schema: 'iglu:com.snowplowanalytics.snowplow/ad_impression/jsonschema/1-0-0',
        data: removeEmptyProperties({
            impressionId: impressionId,
            costModel: costModel,
            cost: cost,
            targetUrl: targetUrl,
            bannerId: bannerId,
            zoneId: zoneId,
            advertiserId: advertiserId,
            campaignId: campaignId
        })
    };
    return buildSelfDescribingEvent({ event: eventJson });
}
/**
 * Build a Ad Click Event
 * Used to track an advertisement click
 *
 * @remarks
 * If you provide the cost field, you must also provide one of 'cpa', 'cpc', and 'cpm' for the costModel field.
 *
 * @param event - Contains the properties for the Ad Click event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */
function buildAdClick(event) {
    var targetUrl = event.targetUrl, clickId = event.clickId, costModel = event.costModel, cost = event.cost, bannerId = event.bannerId, zoneId = event.zoneId, impressionId = event.impressionId, advertiserId = event.advertiserId, campaignId = event.campaignId;
    var eventJson = {
        schema: 'iglu:com.snowplowanalytics.snowplow/ad_click/jsonschema/1-0-0',
        data: removeEmptyProperties({
            targetUrl: targetUrl,
            clickId: clickId,
            costModel: costModel,
            cost: cost,
            bannerId: bannerId,
            zoneId: zoneId,
            impressionId: impressionId,
            advertiserId: advertiserId,
            campaignId: campaignId
        })
    };
    return buildSelfDescribingEvent({ event: eventJson });
}
/**
 * Build a Ad Conversion Event
 * Used to track an advertisement click
 *
 * @remarks
 * If you provide the cost field, you must also provide one of 'cpa', 'cpc', and 'cpm' for the costModel field.
 *
 * @param event - Contains the properties for the Ad Conversion event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */
function buildAdConversion(event) {
    var conversionId = event.conversionId, costModel = event.costModel, cost = event.cost, category = event.category, action = event.action, property = event.property, initialValue = event.initialValue, advertiserId = event.advertiserId, campaignId = event.campaignId;
    var eventJson = {
        schema: 'iglu:com.snowplowanalytics.snowplow/ad_conversion/jsonschema/1-0-0',
        data: removeEmptyProperties({
            conversionId: conversionId,
            costModel: costModel,
            cost: cost,
            category: category,
            action: action,
            property: property,
            initialValue: initialValue,
            advertiserId: advertiserId,
            campaignId: campaignId
        })
    };
    return buildSelfDescribingEvent({ event: eventJson });
}
/**
 * Build a Social Interaction Event
 * Social tracking will be used to track the way users interact
 * with Facebook, Twitter and Google + widgets
 * e.g. to capture ???like this??? or ???tweet this??? events.
 *
 * @param event - Contains the properties for the Social Interaction event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */
function buildSocialInteraction(event) {
    var action = event.action, network = event.network, target = event.target;
    var eventJson = {
        schema: 'iglu:com.snowplowanalytics.snowplow/social_interaction/jsonschema/1-0-0',
        data: removeEmptyProperties({ action: action, network: network, target: target })
    };
    return buildSelfDescribingEvent({ event: eventJson });
}
/**
 * Build a Add To Cart Event
 * For tracking users adding items from a cart
 * on an ecommerce site.
 *
 * @param event - Contains the properties for the Add To Cart event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */
function buildAddToCart(event) {
    var sku = event.sku, quantity = event.quantity, name = event.name, category = event.category, unitPrice = event.unitPrice, currency = event.currency;
    return buildSelfDescribingEvent({
        event: {
            schema: 'iglu:com.snowplowanalytics.snowplow/add_to_cart/jsonschema/1-0-0',
            data: removeEmptyProperties({
                sku: sku,
                quantity: quantity,
                name: name,
                category: category,
                unitPrice: unitPrice,
                currency: currency
            })
        }
    });
}
/**
 * Build a Remove From Cart Event
 * For tracking users removing items from a cart
 * on an ecommerce site.
 *
 * @param event - Contains the properties for the Remove From Cart event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */
function buildRemoveFromCart(event) {
    var sku = event.sku, quantity = event.quantity, name = event.name, category = event.category, unitPrice = event.unitPrice, currency = event.currency;
    return buildSelfDescribingEvent({
        event: {
            schema: 'iglu:com.snowplowanalytics.snowplow/remove_from_cart/jsonschema/1-0-0',
            data: removeEmptyProperties({
                sku: sku,
                quantity: quantity,
                name: name,
                category: category,
                unitPrice: unitPrice,
                currency: currency
            })
        }
    });
}
/**
 * Build a Form Focus or Change Form Event based on schema property
 * When a user focuses on a form element or when a user makes a
 * change to a form element.
 *
 * @param event - Contains the properties for the Form Focus or Change Form event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */
function buildFormFocusOrChange(event) {
    var event_schema = '';
    var schema = event.schema, formId = event.formId, elementId = event.elementId, nodeName = event.nodeName, elementClasses = event.elementClasses, value = event.value, type = event.type;
    var event_data = { formId: formId, elementId: elementId, nodeName: nodeName, elementClasses: elementClasses, value: value };
    if (schema === 'change_form') {
        event_schema = 'iglu:com.snowplowanalytics.snowplow/change_form/jsonschema/1-0-0';
        event_data.type = type;
    }
    else if (schema === 'focus_form') {
        event_schema = 'iglu:com.snowplowanalytics.snowplow/focus_form/jsonschema/1-0-0';
        event_data.elementType = type;
    }
    return buildSelfDescribingEvent({
        event: {
            schema: event_schema,
            data: removeEmptyProperties(event_data, { value: true })
        }
    });
}
/**
 * Build a Form Submission Event
 * Used to track when a user submits a form
 *
 * @param event - Contains the properties for the Form Submission event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */
function buildFormSubmission(event) {
    var formId = event.formId, formClasses = event.formClasses, elements = event.elements;
    return buildSelfDescribingEvent({
        event: {
            schema: 'iglu:com.snowplowanalytics.snowplow/submit_form/jsonschema/1-0-0',
            data: removeEmptyProperties({ formId: formId, formClasses: formClasses, elements: elements })
        }
    });
}
/**
 * Build a Site Search Event
 * Used when a user performs a search action on a page
 *
 * @param event - Contains the properties for the Site Search event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */
function buildSiteSearch(event) {
    var terms = event.terms, filters = event.filters, totalResults = event.totalResults, pageResults = event.pageResults;
    return buildSelfDescribingEvent({
        event: {
            schema: 'iglu:com.snowplowanalytics.snowplow/site_search/jsonschema/1-0-0',
            data: removeEmptyProperties({ terms: terms, filters: filters, totalResults: totalResults, pageResults: pageResults })
        }
    });
}
/**
 * Build a Consent Withdrawn Event
 * Used for tracking when a user withdraws their consent
 *
 * @param event - Contains the properties for the Consent Withdrawn event
 * @returns An object containing the PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track} and a 'consent_document' context
 */
function buildConsentWithdrawn(event) {
    var all = event.all, id = event.id, version = event.version, name = event.name, description = event.description;
    var documentJson = {
        schema: 'iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0',
        data: removeEmptyProperties({ id: id, version: version, name: name, description: description })
    };
    return {
        event: buildSelfDescribingEvent({
            event: {
                schema: 'iglu:com.snowplowanalytics.snowplow/consent_withdrawn/jsonschema/1-0-0',
                data: removeEmptyProperties({
                    all: all
                })
            }
        }),
        context: [documentJson]
    };
}
/**
 * Build a Consent Granted Event
 * Used for tracking when a user grants their consent
 *
 * @param event - Contains the properties for the Consent Granted event
 * @returns An object containing the PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track} and a 'consent_document' context
 */
function buildConsentGranted(event) {
    var expiry = event.expiry, id = event.id, version = event.version, name = event.name, description = event.description;
    var documentJson = {
        schema: 'iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0',
        data: removeEmptyProperties({ id: id, version: version, name: name, description: description })
    };
    return {
        event: buildSelfDescribingEvent({
            event: {
                schema: 'iglu:com.snowplowanalytics.snowplow/consent_granted/jsonschema/1-0-0',
                data: removeEmptyProperties({
                    expiry: expiry
                })
            }
        }),
        context: [documentJson]
    };
}
/**
 * Returns a copy of a JSON with undefined and null properties removed
 *
 * @param event - JSON object to clean
 * @param exemptFields - Set of fields which should not be removed even if empty
 * @returns A cleaned copy of eventJson
 */
function removeEmptyProperties(event, exemptFields) {
    if (exemptFields === void 0) { exemptFields = {}; }
    var ret = {};
    for (var k in event) {
        if (exemptFields[k] || (event[k] !== null && typeof event[k] !== 'undefined')) {
            ret[k] = event[k];
        }
    }
    return ret;
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
var version = version$1;

export { LOG, LOG_LEVEL, buildAdClick, buildAdConversion, buildAdImpression, buildAddToCart, buildConsentGranted, buildConsentWithdrawn, buildEcommerceTransaction, buildEcommerceTransactionItem, buildFormFocusOrChange, buildFormSubmission, buildLinkClick, buildPagePing, buildPageView, buildRemoveFromCart, buildScreenView, buildSelfDescribingEvent, buildSiteSearch, buildSocialInteraction, buildStructEvent, getRuleParts, getSchemaParts, globalContexts, isConditionalContextProvider, isContextCallbackFunction, isContextPrimitive, isFilterProvider, isJson, isNonEmptyJson, isRuleSet, isRuleSetProvider, isSelfDescribingJson, isStringArray, isValidRule, isValidRuleSetArg, matchSchemaAgainstRule, matchSchemaAgainstRuleSet, payloadBuilder, payloadJsonProcessor, pluginContexts, resolveDynamicContext, trackerCore, validateVendor, validateVendorParts, version };
//# sourceMappingURL=index.module.js.map
