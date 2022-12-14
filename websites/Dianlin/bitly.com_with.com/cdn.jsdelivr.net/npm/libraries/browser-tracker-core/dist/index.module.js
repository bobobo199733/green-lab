/*!
 * Core functionality for Snowplow Browser trackers v3.4.0 (http://bit.ly/sp-js)
 * Copyright 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */

import { LOG, trackerCore, buildPageView, buildPagePing } from '@snowplow/tracker-core';
import { __assign } from 'tslib';
import hash from 'sha1';
import { v4 } from 'uuid';

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
/*
 * Checks whether sessionStorage is available, in a way that
 * does not throw a SecurityError in Firefox if "always ask"
 * is enabled for cookies (https://github.com/snowplow/snowplow/issues/163).
 */
function hasSessionStorage() {
    try {
        return !!window.sessionStorage;
    }
    catch (e) {
        return true; // SecurityError when referencing it means it exists
    }
}
/*
 * Checks whether localStorage is available, in a way that
 * does not throw a SecurityError in Firefox if "always ask"
 * is enabled for cookies (https://github.com/snowplow/snowplow/issues/163).
 */
function hasLocalStorage() {
    try {
        return !!window.localStorage;
    }
    catch (e) {
        return true; // SecurityError when referencing it means it exists
    }
}
/*
 * Checks whether localStorage is accessible
 * sets and removes an item to handle private IOS5 browsing
 * (http://git.io/jFB2Xw)
 */
function localStorageAccessible() {
    var mod = 'modernizr';
    if (!hasLocalStorage()) {
        return false;
    }
    try {
        var ls = window.localStorage;
        ls.setItem(mod, mod);
        ls.removeItem(mod);
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Gets the current viewport.
 *
 * Code based on:
 * - http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
 * - http://responsejs.com/labs/dimensions/
 */
function detectViewport() {
    var width, height;
    if ('innerWidth' in window) {
        width = window['innerWidth'];
        height = window['innerHeight'];
    }
    else {
        var e = document.documentElement || document.body;
        width = e['clientWidth'];
        height = e['clientHeight'];
    }
    if (width >= 0 && height >= 0) {
        return width + 'x' + height;
    }
    else {
        return null;
    }
}
/**
 * Gets the dimensions of the current
 * document.
 *
 * Code based on:
 * - http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
 */
function detectDocumentSize() {
    var de = document.documentElement, // Alias
    be = document.body, 
    // document.body may not have rendered, so check whether be.offsetHeight is null
    bodyHeight = be ? Math.max(be.offsetHeight, be.scrollHeight) : 0;
    var w = Math.max(de.clientWidth, de.offsetWidth, de.scrollWidth);
    var h = Math.max(de.clientHeight, de.offsetHeight, de.scrollHeight, bodyHeight);
    return isNaN(w) || isNaN(h) ? '' : w + 'x' + h;
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
 * Checks if an object is a string
 * @param str - The object to check
 */
function isString(str) {
    if (str && typeof str.valueOf() === 'string') {
        return true;
    }
    return false;
}
/**
 * Checks if an object is an integer
 * @param int - The object to check
 */
function isInteger(int) {
    return ((Number.isInteger && Number.isInteger(int)) || (typeof int === 'number' && isFinite(int) && Math.floor(int) === int));
}
/**
 * Checks if the input parameter is a function
 * @param func - The object to check
 */
function isFunction(func) {
    if (func && typeof func === 'function') {
        return true;
    }
    return false;
}
/**
 * Cleans up the page title
 */
function fixupTitle(title) {
    if (!isString(title)) {
        title = title.text || '';
        var tmp = document.getElementsByTagName('title');
        if (tmp && tmp[0] != null) {
            title = tmp[0].text;
        }
    }
    return title;
}
/**
 * Extract hostname from URL
 */
function getHostName(url) {
    // scheme : // [username [: password] @] hostname [: port] [/ [path] [? query] [# fragment]]
    var e = new RegExp('^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)'), matches = e.exec(url);
    return matches ? matches[1] : url;
}
/**
 * Fix-up domain
 */
function fixupDomain(domain) {
    var dl = domain.length;
    // remove trailing '.'
    if (domain.charAt(--dl) === '.') {
        domain = domain.slice(0, dl);
    }
    // remove leading '*'
    if (domain.slice(0, 2) === '*.') {
        domain = domain.slice(1);
    }
    return domain;
}
/**
 * Get page referrer. In the case of a single-page app,
 * if the URL changes without the page reloading, pass
 * in the old URL. It will be returned unless overriden
 * by a "refer(r)er" parameter in the querystring.
 *
 * @param string - oldLocation Optional.
 * @returns string The referrer
 */
function getReferrer(oldLocation) {
    var windowAlias = window, fromQs = fromQuerystring('referrer', windowAlias.location.href) || fromQuerystring('referer', windowAlias.location.href);
    // Short-circuit
    if (fromQs) {
        return fromQs;
    }
    // In the case of a single-page app, return the old URL
    if (oldLocation) {
        return oldLocation;
    }
    try {
        if (windowAlias.top) {
            return windowAlias.top.document.referrer;
        }
        else if (windowAlias.parent) {
            return windowAlias.parent.document.referrer;
        }
    }
    catch (_a) { }
    return document.referrer;
}
/**
 * Cross-browser helper function to add event handler
 */
function addEventListener(element, eventType, eventHandler, options) {
    if (element.addEventListener) {
        element.addEventListener(eventType, eventHandler, options);
        return true;
    }
    // IE Support
    if (element.attachEvent) {
        return element.attachEvent('on' + eventType, eventHandler);
    }
    element['on' + eventType] = eventHandler;
}
/**
 * Return value from name-value pair in querystring
 */
function fromQuerystring(field, url) {
    var match = new RegExp('^[^#]*[?&]' + field + '=([^&#]*)').exec(url);
    if (!match) {
        return null;
    }
    return decodeURIComponent(match[1].replace(/\+/g, ' '));
}
/**
 * Add a name-value pair to the querystring of a URL
 *
 * @param string - url URL to decorate
 * @param string - name Name of the querystring pair
 * @param string - value Value of the querystring pair
 */
function decorateQuerystring(url, name, value) {
    var initialQsParams = name + '=' + value;
    var hashSplit = url.split('#');
    var qsSplit = hashSplit[0].split('?');
    var beforeQuerystring = qsSplit.shift();
    // Necessary because a querystring may contain multiple question marks
    var querystring = qsSplit.join('?');
    if (!querystring) {
        querystring = initialQsParams;
    }
    else {
        // Whether this is the first time the link has been decorated
        var initialDecoration = true;
        var qsFields = querystring.split('&');
        for (var i = 0; i < qsFields.length; i++) {
            if (qsFields[i].substr(0, name.length + 1) === name + '=') {
                initialDecoration = false;
                qsFields[i] = initialQsParams;
                querystring = qsFields.join('&');
                break;
            }
        }
        if (initialDecoration) {
            querystring = initialQsParams + '&' + querystring;
        }
    }
    hashSplit[0] = beforeQuerystring + '?' + querystring;
    return hashSplit.join('#');
}
/**
 * Attempt to get a value from localStorage
 *
 * @param string - key
 * @returns string The value obtained from localStorage, or
 *                undefined if localStorage is inaccessible
 */
function attemptGetLocalStorage(key) {
    try {
        var localStorageAlias = window.localStorage, exp = localStorageAlias.getItem(key + '.expires');
        if (exp === null || +exp > Date.now()) {
            return localStorageAlias.getItem(key);
        }
        else {
            localStorageAlias.removeItem(key);
            localStorageAlias.removeItem(key + '.expires');
        }
        return undefined;
    }
    catch (e) {
        return undefined;
    }
}
/**
 * Attempt to write a value to localStorage
 *
 * @param string - key
 * @param string - value
 * @param number - ttl Time to live in seconds, defaults to 2 years from Date.now()
 * @returns boolean Whether the operation succeeded
 */
function attemptWriteLocalStorage(key, value, ttl) {
    if (ttl === void 0) { ttl = 63072000; }
    try {
        var localStorageAlias = window.localStorage, t = Date.now() + ttl * 1000;
        localStorageAlias.setItem("".concat(key, ".expires"), t.toString());
        localStorageAlias.setItem(key, value);
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Attempt to delete a value from localStorage
 *
 * @param string - key
 * @returns boolean Whether the operation succeeded
 */
function attemptDeleteLocalStorage(key) {
    try {
        var localStorageAlias = window.localStorage;
        localStorageAlias.removeItem(key);
        localStorageAlias.removeItem(key + '.expires');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Attempt to get a value from sessionStorage
 *
 * @param string - key
 * @returns string The value obtained from sessionStorage, or
 *                undefined if sessionStorage is inaccessible
 */
function attemptGetSessionStorage(key) {
    try {
        return window.sessionStorage.getItem(key);
    }
    catch (e) {
        return undefined;
    }
}
/**
 * Attempt to write a value to sessionStorage
 *
 * @param string - key
 * @param string - value
 * @returns boolean Whether the operation succeeded
 */
function attemptWriteSessionStorage(key, value) {
    try {
        window.sessionStorage.setItem(key, value);
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Finds the root domain
 */
function findRootDomain(sameSite, secure) {
    var windowLocationHostnameAlias = window.location.hostname, cookiePrefix = '_sp_root_domain_test_', cookieName = cookiePrefix + new Date().getTime(), cookieValue = '_test_value_' + new Date().getTime();
    var split = windowLocationHostnameAlias.split('.');
    var position = split.length - 1;
    while (position >= 0) {
        var currentDomain = split.slice(position, split.length).join('.');
        cookie(cookieName, cookieValue, 0, '/', currentDomain, sameSite, secure);
        if (cookie(cookieName) === cookieValue) {
            // Clean up created cookie(s)
            deleteCookie(cookieName, currentDomain, sameSite, secure);
            var cookieNames = getCookiesWithPrefix(cookiePrefix);
            for (var i = 0; i < cookieNames.length; i++) {
                deleteCookie(cookieNames[i], currentDomain, sameSite, secure);
            }
            return currentDomain;
        }
        position -= 1;
    }
    // Cookies cannot be read
    return windowLocationHostnameAlias;
}
/**
 * Checks whether a value is present within an array
 *
 * @param val - The value to check for
 * @param array - The array to check within
 * @returns boolean Whether it exists
 */
function isValueInArray(val, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === val) {
            return true;
        }
    }
    return false;
}
/**
 * Deletes an arbitrary cookie by setting the expiration date to the past
 *
 * @param cookieName - The name of the cookie to delete
 * @param domainName - The domain the cookie is in
 */
function deleteCookie(cookieName, domainName, sameSite, secure) {
    cookie(cookieName, '', -1, '/', domainName, sameSite, secure);
}
/**
 * Fetches the name of all cookies beginning with a certain prefix
 *
 * @param cookiePrefix - The prefix to check for
 * @returns array The cookies that begin with the prefix
 */
function getCookiesWithPrefix(cookiePrefix) {
    var cookies = document.cookie.split('; ');
    var cookieNames = [];
    for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].substring(0, cookiePrefix.length) === cookiePrefix) {
            cookieNames.push(cookies[i]);
        }
    }
    return cookieNames;
}
/**
 * Get and set the cookies associated with the current document in browser
 * This implementation always returns a string, returns the cookie value if only name is specified
 *
 * @param name - The cookie name (required)
 * @param value - The cookie value
 * @param ttl - The cookie Time To Live (seconds)
 * @param path - The cookies path
 * @param domain - The cookies domain
 * @param samesite - The cookies samesite attribute
 * @param secure - Boolean to specify if cookie should be secure
 * @returns string The cookies value
 */
function cookie(name, value, ttl, path, domain, samesite, secure) {
    if (arguments.length > 1) {
        return (document.cookie =
            name +
                '=' +
                encodeURIComponent(value !== null && value !== void 0 ? value : '') +
                (ttl ? '; Expires=' + new Date(+new Date() + ttl * 1000).toUTCString() : '') +
                (path ? '; Path=' + path : '') +
                (domain ? '; Domain=' + domain : '') +
                (samesite ? '; SameSite=' + samesite : '') +
                (secure ? '; Secure' : ''));
    }
    return decodeURIComponent((('; ' + document.cookie).split('; ' + name + '=')[1] || '').split(';')[0]);
}
/**
 * Parses an object and returns either the
 * integer or undefined.
 *
 * @param obj - The object to parse
 * @returns the result of the parse operation
 */
function parseAndValidateInt(obj) {
    var result = parseInt(obj);
    return isNaN(result) ? undefined : result;
}
/**
 * Parses an object and returns either the
 * number or undefined.
 *
 * @param obj - The object to parse
 * @returns the result of the parse operation
 */
function parseAndValidateFloat(obj) {
    var result = parseFloat(obj);
    return isNaN(result) ? undefined : result;
}
/**
 * Convert a criterion object to a filter function
 *
 * @param object - criterion Either {allowlist: [array of allowable strings]}
 *                             or {denylist: [array of allowable strings]}
 *                             or {filter: function (elt) {return whether to track the element}
 * @param boolean - byClass Whether to allowlist/denylist based on an element's classes (for forms)
 *                        or name attribute (for fields)
 */
function getFilterByClass(criterion) {
    // If the criterion argument is not an object, add listeners to all elements
    if (criterion == null || typeof criterion !== 'object' || Array.isArray(criterion)) {
        return function () {
            return true;
        };
    }
    var inclusive = Object.prototype.hasOwnProperty.call(criterion, 'allowlist');
    var specifiedClassesSet = getSpecifiedClassesSet(criterion);
    return getFilter(criterion, function (elt) {
        return checkClass(elt, specifiedClassesSet) === inclusive;
    });
}
/**
 * Convert a criterion object to a filter function
 *
 * @param object - criterion Either {allowlist: [array of allowable strings]}
 *                             or {denylist: [array of allowable strings]}
 *                             or {filter: function (elt) {return whether to track the element}
 */
function getFilterByName(criterion) {
    // If the criterion argument is not an object, add listeners to all elements
    if (criterion == null || typeof criterion !== 'object' || Array.isArray(criterion)) {
        return function () {
            return true;
        };
    }
    var inclusive = criterion.hasOwnProperty('allowlist');
    var specifiedClassesSet = getSpecifiedClassesSet(criterion);
    return getFilter(criterion, function (elt) {
        return elt.name in specifiedClassesSet === inclusive;
    });
}
/**
 * List the classes of a DOM element without using elt.classList (for compatibility with IE 9)
 */
function getCssClasses(elt) {
    return elt.className.match(/\S+/g) || [];
}
/**
 * Check whether an element has at least one class from a given list
 */
function checkClass(elt, classList) {
    var classes = getCssClasses(elt);
    for (var _i = 0, classes_1 = classes; _i < classes_1.length; _i++) {
        var className = classes_1[_i];
        if (classList[className]) {
            return true;
        }
    }
    return false;
}
function getFilter(criterion, fallbackFilter) {
    if (criterion.hasOwnProperty('filter') && criterion.filter) {
        return criterion.filter;
    }
    return fallbackFilter;
}
function getSpecifiedClassesSet(criterion) {
    // Convert the array of classes to an object of the form {class1: true, class2: true, ...}
    var specifiedClassesSet = {};
    var specifiedClasses = criterion.allowlist || criterion.denylist;
    if (specifiedClasses) {
        if (!Array.isArray(specifiedClasses)) {
            specifiedClasses = [specifiedClasses];
        }
        for (var i = 0; i < specifiedClasses.length; i++) {
            specifiedClassesSet[specifiedClasses[i]] = true;
        }
    }
    return specifiedClassesSet;
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
 * Object handling sending events to a collector.
 * Instantiated once per tracker instance.
 *
 * @param id - The Snowplow function name (used to generate the localStorage key)
 * @param sharedSate - Stores reference to the outbound queue so it can unload the page when all queues are empty
 * @param useLocalStorage - Whether to use localStorage at all
 * @param eventMethod - if null will use 'beacon' otherwise can be set to 'post', 'get', or 'beacon' to force.
 * @param postPath - The path where events are to be posted
 * @param bufferSize - How many events to batch in localStorage before sending them all
 * @param maxPostBytes - Maximum combined size in bytes of the event JSONs in a POST request
 * @param maxGetBytes - Maximum size in bytes of the complete event URL string in a GET request. 0 for no limit.
 * @param useStm - Whether to add timestamp to events
 * @param maxLocalStorageQueueSize - Maximum number of queued events we will attempt to store in local storage
 * @param connectionTimeout - Defines how long to wait before aborting the request
 * @param anonymousTracking - Defines whether to set the SP-Anonymous header for anonymous tracking on GET and POST
 * @param customHeaders - Allows custom headers to be defined and passed on XMLHttpRequest requests
 * @param withCredentials - Sets the value of the withCredentials flag on XMLHttpRequest (GET and POST) requests
 * @returns object OutQueueManager instance
 */
function OutQueueManager(id, sharedSate, useLocalStorage, eventMethod, postPath, bufferSize, maxPostBytes, maxGetBytes, useStm, maxLocalStorageQueueSize, connectionTimeout, anonymousTracking, customHeaders, withCredentials) {
    var executingQueue = false, configCollectorUrl, outQueue = [];
    //Force to lower case if its a string
    eventMethod = typeof eventMethod === 'string' ? eventMethod.toLowerCase() : eventMethod;
    // Use the Beacon API if eventMethod is set true, 'true', or 'beacon'.
    var isBeaconRequested = eventMethod === true || eventMethod === 'beacon' || eventMethod === 'true', 
    // Fall back to POST or GET for browsers which don't support Beacon API
    isBeaconAvailable = Boolean(isBeaconRequested &&
        window.navigator &&
        window.navigator.sendBeacon &&
        !hasWebKitBeaconBug(window.navigator.userAgent)), useBeacon = isBeaconAvailable && isBeaconRequested, 
    // Use GET if specified
    isGetRequested = eventMethod === 'get', 
    // Don't use XhrHttpRequest for browsers which don't support CORS XMLHttpRequests (e.g. IE <= 9)
    useXhr = Boolean(window.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()), 
    // Use POST if specified
    usePost = !isGetRequested && useXhr && (eventMethod === 'post' || isBeaconRequested), 
    // Resolve all options and capabilities and decide path
    path = usePost ? postPath : '/i', 
    // Different queue names for GET and POST since they are stored differently
    queueName = "snowplowOutQueue_".concat(id, "_").concat(usePost ? 'post2' : 'get');
    // Ensure we don't set headers when beacon is the requested eventMethod as we might fallback to POST
    // and end up sending them in older browsers which don't support beacon leading to inconsistencies
    if (isBeaconRequested)
        customHeaders = {};
    // Get buffer size or set 1 if unable to buffer
    bufferSize = (useLocalStorage && localStorageAccessible() && usePost && bufferSize) || 1;
    if (useLocalStorage) {
        // Catch any JSON parse errors or localStorage that might be thrown
        try {
            var localStorageQueue = window.localStorage.getItem(queueName);
            outQueue = localStorageQueue ? JSON.parse(localStorageQueue) : [];
        }
        catch (e) { }
    }
    // Initialize to and empty array if we didn't get anything out of localStorage
    if (!Array.isArray(outQueue)) {
        outQueue = [];
    }
    // Used by pageUnloadGuard
    sharedSate.outQueues.push(outQueue);
    if (useXhr && bufferSize > 1) {
        sharedSate.bufferFlushers.push(function (sync) {
            if (!executingQueue) {
                executeQueue(sync);
            }
        });
    }
    /*
     * Convert a dictionary to a querystring
     * The context field is the last in the querystring
     */
    function getQuerystring(request) {
        var querystring = '?', lowPriorityKeys = { co: true, cx: true }, firstPair = true;
        for (var key in request) {
            if (request.hasOwnProperty(key) && !lowPriorityKeys.hasOwnProperty(key)) {
                if (!firstPair) {
                    querystring += '&';
                }
                else {
                    firstPair = false;
                }
                querystring += encodeURIComponent(key) + '=' + encodeURIComponent(request[key]);
            }
        }
        for (var contextKey in lowPriorityKeys) {
            if (request.hasOwnProperty(contextKey) && lowPriorityKeys.hasOwnProperty(contextKey)) {
                querystring += '&' + contextKey + '=' + encodeURIComponent(request[contextKey]);
            }
        }
        return querystring;
    }
    /*
     * Convert numeric fields to strings to match payload_data schema
     */
    function getBody(request) {
        var cleanedRequest = Object.keys(request)
            .map(function (k) { return [k, request[k]]; })
            .reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            acc[key] = value.toString();
            return acc;
        }, {});
        return {
            evt: cleanedRequest,
            bytes: getUTF8Length(JSON.stringify(cleanedRequest))
        };
    }
    /**
     * Count the number of bytes a string will occupy when UTF-8 encoded
     * Taken from http://stackoverflow.com/questions/2848462/count-bytes-in-textarea-using-javascript/
     *
     * @param string - s
     * @returns number Length of s in bytes when UTF-8 encoded
     */
    function getUTF8Length(s) {
        var len = 0;
        for (var i = 0; i < s.length; i++) {
            var code = s.charCodeAt(i);
            if (code <= 0x7f) {
                len += 1;
            }
            else if (code <= 0x7ff) {
                len += 2;
            }
            else if (code >= 0xd800 && code <= 0xdfff) {
                // Surrogate pair: These take 4 bytes in UTF-8 and 2 chars in UCS-2
                // (Assume next char is the other [valid] half and just skip it)
                len += 4;
                i++;
            }
            else if (code < 0xffff) {
                len += 3;
            }
            else {
                len += 4;
            }
        }
        return len;
    }
    var postable = function (queue) {
        return typeof queue[0] === 'object';
    };
    /**
     * Send event as POST request right away without going to queue. Used when the request surpasses maxGetBytes or maxPostBytes
     * @param body POST request body
     * @param configCollectorUrl full collector URL with path
     */
    function sendPostRequestWithoutQueueing(body, configCollectorUrl) {
        var xhr = initializeXMLHttpRequest(configCollectorUrl, true, false);
        xhr.send(encloseInPayloadDataEnvelope(attachStmToEvent([body.evt])));
    }
    /*
     * Queue for submission to the collector and start processing queue
     */
    function enqueueRequest(request, url) {
        configCollectorUrl = url + path;
        var eventTooBigWarning = function (bytes, maxBytes) {
            return LOG.warn('Event (' + bytes + 'B) too big, max is ' + maxBytes);
        };
        if (usePost) {
            var body = getBody(request);
            if (body.bytes >= maxPostBytes) {
                eventTooBigWarning(body.bytes, maxPostBytes);
                sendPostRequestWithoutQueueing(body, configCollectorUrl);
                return;
            }
            else {
                outQueue.push(body);
            }
        }
        else {
            var querystring = getQuerystring(request);
            if (maxGetBytes > 0) {
                var requestUrl = createGetUrl(querystring);
                var bytes = getUTF8Length(requestUrl);
                if (bytes >= maxGetBytes) {
                    eventTooBigWarning(bytes, maxGetBytes);
                    if (useXhr) {
                        var body = getBody(request);
                        var postUrl = url + postPath;
                        sendPostRequestWithoutQueueing(body, postUrl);
                    }
                    return;
                }
            }
            outQueue.push(querystring);
        }
        var savedToLocalStorage = false;
        if (useLocalStorage) {
            savedToLocalStorage = attemptWriteLocalStorage(queueName, JSON.stringify(outQueue.slice(0, maxLocalStorageQueueSize)));
        }
        // If we're not processing the queue, we'll start.
        if (!executingQueue && (!savedToLocalStorage || outQueue.length >= bufferSize)) {
            executeQueue();
        }
    }
    /*
     * Run through the queue of requests, sending them one at a time.
     * Stops processing when we run out of queued requests, or we get an error.
     */
    function executeQueue(sync) {
        if (sync === void 0) { sync = false; }
        // Failsafe in case there is some way for a bad value like "null" to end up in the outQueue
        while (outQueue.length && typeof outQueue[0] !== 'string' && typeof outQueue[0] !== 'object') {
            outQueue.shift();
        }
        if (outQueue.length < 1) {
            executingQueue = false;
            return;
        }
        // Let's check that we have a URL
        if (!isString(configCollectorUrl)) {
            throw 'No collector configured';
        }
        executingQueue = true;
        if (useXhr) {
            // Keep track of number of events to delete from queue
            var chooseHowManyToSend = function (queue) {
                var numberToSend = 0, byteCount = 0;
                while (numberToSend < queue.length) {
                    byteCount += queue[numberToSend].bytes;
                    if (byteCount >= maxPostBytes) {
                        break;
                    }
                    else {
                        numberToSend += 1;
                    }
                }
                return numberToSend;
            };
            var url = void 0, xhr_1, numberToSend_1;
            if (postable(outQueue)) {
                url = configCollectorUrl;
                xhr_1 = initializeXMLHttpRequest(url, true, sync);
                numberToSend_1 = chooseHowManyToSend(outQueue);
            }
            else {
                url = createGetUrl(outQueue[0]);
                xhr_1 = initializeXMLHttpRequest(url, false, sync);
                numberToSend_1 = 1;
            }
            // Time out POST requests after connectionTimeout
            var xhrTimeout_1 = setTimeout(function () {
                xhr_1.abort();
                executingQueue = false;
            }, connectionTimeout);
            // The events (`numberToSend` of them), have been sent, so we remove them from the outQueue
            // We also call executeQueue() again, to let executeQueue() check if we should keep running through the queue
            var onPostSuccess_1 = function (numberToSend) {
                for (var deleteCount = 0; deleteCount < numberToSend; deleteCount++) {
                    outQueue.shift();
                }
                if (useLocalStorage) {
                    attemptWriteLocalStorage(queueName, JSON.stringify(outQueue.slice(0, maxLocalStorageQueueSize)));
                }
                executeQueue();
            };
            xhr_1.onreadystatechange = function () {
                if (xhr_1.readyState === 4 && xhr_1.status >= 200 && xhr_1.status < 400) {
                    clearTimeout(xhrTimeout_1);
                    onPostSuccess_1(numberToSend_1);
                }
                else if (xhr_1.readyState === 4 && xhr_1.status >= 400) {
                    clearTimeout(xhrTimeout_1);
                    executingQueue = false;
                }
            };
            if (!postable(outQueue)) {
                // If not postable then it's a GET so just send it
                xhr_1.send();
            }
            else {
                var batch = outQueue.slice(0, numberToSend_1);
                if (batch.length > 0) {
                    var beaconStatus = false;
                    var eventBatch = batch.map(function (x) {
                        return x.evt;
                    });
                    if (useBeacon) {
                        var blob = new Blob([encloseInPayloadDataEnvelope(attachStmToEvent(eventBatch))], {
                            type: 'application/json'
                        });
                        try {
                            beaconStatus = navigator.sendBeacon(url, blob);
                        }
                        catch (error) {
                            beaconStatus = false;
                        }
                    }
                    // When beaconStatus is true, we can't _guarantee_ that it was successful (beacon queues asynchronously)
                    // but the browser has taken it out of our hands, so we want to flush the queue assuming it will do its job
                    if (beaconStatus === true) {
                        onPostSuccess_1(numberToSend_1);
                    }
                    else {
                        xhr_1.send(encloseInPayloadDataEnvelope(attachStmToEvent(eventBatch)));
                    }
                }
            }
        }
        else if (!anonymousTracking && !postable(outQueue)) {
            // We can't send with this technique if anonymous tracking is on as we can't attach the header
            var image = new Image(1, 1), loading_1 = true;
            image.onload = function () {
                if (!loading_1)
                    return;
                loading_1 = false;
                outQueue.shift();
                if (useLocalStorage) {
                    attemptWriteLocalStorage(queueName, JSON.stringify(outQueue.slice(0, maxLocalStorageQueueSize)));
                }
                executeQueue();
            };
            image.onerror = function () {
                if (!loading_1)
                    return;
                loading_1 = false;
                executingQueue = false;
            };
            image.src = createGetUrl(outQueue[0]);
            setTimeout(function () {
                if (loading_1 && executingQueue) {
                    loading_1 = false;
                    executeQueue();
                }
            }, connectionTimeout);
        }
        else {
            executingQueue = false;
        }
    }
    /**
     * Open an XMLHttpRequest for a given endpoint with the correct credentials and header
     *
     * @param string - url The destination URL
     * @returns object The XMLHttpRequest
     */
    function initializeXMLHttpRequest(url, post, sync) {
        var xhr = new XMLHttpRequest();
        if (post) {
            xhr.open('POST', url, !sync);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        }
        else {
            xhr.open('GET', url, !sync);
        }
        xhr.withCredentials = withCredentials;
        if (anonymousTracking) {
            xhr.setRequestHeader('SP-Anonymous', '*');
        }
        for (var header in customHeaders) {
            if (Object.prototype.hasOwnProperty.call(customHeaders, header)) {
                xhr.setRequestHeader(header, customHeaders[header]);
            }
        }
        return xhr;
    }
    /**
     * Enclose an array of events in a self-describing payload_data JSON string
     *
     * @param array - events Batch of events
     * @returns string payload_data self-describing JSON
     */
    function encloseInPayloadDataEnvelope(events) {
        return JSON.stringify({
            schema: 'iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4',
            data: events
        });
    }
    /**
     * Attaches the STM field to outbound POST events.
     *
     * @param events - the events to attach the STM to
     */
    function attachStmToEvent(events) {
        var stm = new Date().getTime().toString();
        for (var i = 0; i < events.length; i++) {
            events[i]['stm'] = stm;
        }
        return events;
    }
    /**
     * Creates the full URL for sending the GET request. Will append `stm` if enabled
     *
     * @param nextRequest - the query string of the next request
     */
    function createGetUrl(nextRequest) {
        if (useStm) {
            return configCollectorUrl + nextRequest.replace('?', '?stm=' + new Date().getTime() + '&');
        }
        return configCollectorUrl + nextRequest;
    }
    return {
        enqueueRequest: enqueueRequest,
        executeQueue: function () {
            if (!executingQueue) {
                executeQueue();
            }
        },
        setUseLocalStorage: function (localStorage) {
            useLocalStorage = localStorage;
        },
        setAnonymousTracking: function (anonymous) {
            anonymousTracking = anonymous;
        },
        setCollectorUrl: function (url) {
            configCollectorUrl = url + path;
        },
        setBufferSize: function (newBufferSize) {
            bufferSize = newBufferSize;
        }
    };
    function hasWebKitBeaconBug(useragent) {
        return (isIosVersionLessThanOrEqualTo(13, useragent) ||
            (isMacosxVersionLessThanOrEqualTo(10, 15, useragent) && isSafari(useragent)));
        function isIosVersionLessThanOrEqualTo(major, useragent) {
            var match = useragent.match('(iP.+; CPU .*OS (d+)[_d]*.*) AppleWebKit/');
            if (match && match.length) {
                return parseInt(match[0]) <= major;
            }
            return false;
        }
        function isMacosxVersionLessThanOrEqualTo(major, minor, useragent) {
            var match = useragent.match('(Macintosh;.*Mac OS X (d+)_(d+)[_d]*.*) AppleWebKit/');
            if (match && match.length) {
                return parseInt(match[0]) <= major || (parseInt(match[0]) === major && parseInt(match[1]) <= minor);
            }
            return false;
        }
        function isSafari(useragent) {
            return useragent.match('Version/.* Safari/') && !isChromiumBased(useragent);
        }
        function isChromiumBased(useragent) {
            return useragent.match('Chrom(e|ium)');
        }
    }
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
/*
 * Extract parameter from URL
 */
function getParameter(url, name) {
    // scheme : // [username [: password] @] hostname [: port] [/ [path] [? query] [# fragment]]
    var e = new RegExp('^(?:https?|ftp)(?::/*(?:[^?]+))([?][^#]+)'), matches = e.exec(url);
    if (matches && (matches === null || matches === void 0 ? void 0 : matches.length) > 1) {
        return fromQuerystring(name, matches[1]);
    }
    return null;
}
/*
 * Fix-up URL when page rendered from search engine cache or translated page.
 */
function fixupUrl(hostName, href, referrer) {
    var _a;
    if (hostName === 'translate.googleusercontent.com') {
        // Google
        if (referrer === '') {
            referrer = href;
        }
        href = (_a = getParameter(href, 'u')) !== null && _a !== void 0 ? _a : '';
        hostName = getHostName(href);
    }
    else if (hostName === 'cc.bingj.com' || // Bing & Yahoo
        hostName === 'webcache.googleusercontent.com' // Google
    ) {
        href = document.links[0].href;
        hostName = getHostName(href);
    }
    return [hostName, href, referrer];
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
 * The Snowplow Tracker
 *
 * @param trackerId - The unique identifier of the tracker
 * @param namespace - The namespace of the tracker object
 * @param version - The current version of the JavaScript Tracker
 * @param endpoint - The collector endpoint to send events to, with or without protocol
 * @param sharedState - An object containing state which is shared across tracker instances
 * @param trackerConfiguration - Dictionary of configuration options
 */
function Tracker(trackerId, namespace, version, endpoint, sharedState, trackerConfiguration) {
    if (trackerConfiguration === void 0) { trackerConfiguration = {}; }
    var browserPlugins = [];
    var newTracker = function (trackerId, namespace, version, endpoint, state, trackerConfiguration) {
        /************************************************************
         * Private members
         ************************************************************/
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
        //use POST if eventMethod isn't present on the newTrackerConfiguration
        trackerConfiguration.eventMethod = (_a = trackerConfiguration.eventMethod) !== null && _a !== void 0 ? _a : 'post';
        var getStateStorageStrategy = function (config) { var _a; return (_a = config.stateStorageStrategy) !== null && _a !== void 0 ? _a : 'cookieAndLocalStorage'; }, getAnonymousSessionTracking = function (config) {
            var _a, _b;
            if (typeof config.anonymousTracking === 'boolean') {
                return false;
            }
            return (_b = ((_a = config.anonymousTracking) === null || _a === void 0 ? void 0 : _a.withSessionTracking) === true) !== null && _b !== void 0 ? _b : false;
        }, getAnonymousServerTracking = function (config) {
            var _a, _b;
            if (typeof config.anonymousTracking === 'boolean') {
                return false;
            }
            return (_b = ((_a = config.anonymousTracking) === null || _a === void 0 ? void 0 : _a.withServerAnonymisation) === true) !== null && _b !== void 0 ? _b : false;
        }, getAnonymousTracking = function (config) { return !!config.anonymousTracking; };
        // Get all injected plugins
        browserPlugins.push(getBrowserDataPlugin());
        if ((_c = (_b = trackerConfiguration === null || trackerConfiguration === void 0 ? void 0 : trackerConfiguration.contexts) === null || _b === void 0 ? void 0 : _b.webPage) !== null && _c !== void 0 ? _c : true) {
            browserPlugins.push(getWebPagePlugin()); // Defaults to including the Web Page context
        }
        browserPlugins.push.apply(browserPlugins, ((_d = trackerConfiguration.plugins) !== null && _d !== void 0 ? _d : []));
        var // Tracker core
        core = trackerCore({
            base64: trackerConfiguration.encodeBase64,
            corePlugins: browserPlugins,
            callback: sendRequest
        }), 
        // Aliases
        browserLanguage = navigator.userLanguage || navigator.language, documentCharset = document.characterSet || document.charset, 
        // Current URL and Referrer URL
        locationArray = fixupUrl(window.location.hostname, window.location.href, getReferrer()), domainAlias = fixupDomain(locationArray[0]), locationHrefAlias = locationArray[1], configReferrerUrl = locationArray[2], customReferrer, 
        // Platform defaults to web for this tracker
        configPlatform = (_e = trackerConfiguration.platform) !== null && _e !== void 0 ? _e : 'web', 
        // Snowplow collector URL
        configCollectorUrl = asCollectorUrl(endpoint), 
        // Custom path for post requests (to get around adblockers)
        configPostPath = (_f = trackerConfiguration.postPath) !== null && _f !== void 0 ? _f : '/com.snowplowanalytics.snowplow/tp2', 
        // Site ID
        configTrackerSiteId = (_g = trackerConfiguration.appId) !== null && _g !== void 0 ? _g : '', 
        // Document URL
        configCustomUrl, 
        // Document title
        lastDocumentTitle = document.title, 
        // Custom title
        lastConfigTitle, 
        // Controls whether activity tracking page ping event timers are reset on page view events
        resetActivityTrackingOnPageView = (_h = trackerConfiguration.resetActivityTrackingOnPageView) !== null && _h !== void 0 ? _h : true, 
        // Disallow hash tags in URL. TODO: Should this be set to true by default?
        configDiscardHashTag, 
        // Disallow brace in URL.
        configDiscardBrace, 
        // First-party cookie name prefix
        configCookieNamePrefix = (_j = trackerConfiguration.cookieName) !== null && _j !== void 0 ? _j : '_sp_', 
        // First-party cookie domain
        // User agent defaults to origin hostname
        configCookieDomain = (_k = trackerConfiguration.cookieDomain) !== null && _k !== void 0 ? _k : undefined, 
        // First-party cookie path
        // Default is user agent defined.
        configCookiePath = '/', 
        // First-party cookie samesite attribute
        configCookieSameSite = (_l = trackerConfiguration.cookieSameSite) !== null && _l !== void 0 ? _l : 'None', 
        // First-party cookie secure attribute
        configCookieSecure = (_m = trackerConfiguration.cookieSecure) !== null && _m !== void 0 ? _m : true, 
        // Do Not Track browser feature
        dnt = navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack, 
        // Do Not Track
        configDoNotTrack = typeof trackerConfiguration.respectDoNotTrack !== 'undefined'
            ? trackerConfiguration.respectDoNotTrack && (dnt === 'yes' || dnt === '1')
            : false, 
        // Opt out of cookie tracking
        configOptOutCookie, 
        // Life of the visitor cookie (in seconds)
        configVisitorCookieTimeout = (_o = trackerConfiguration.cookieLifetime) !== null && _o !== void 0 ? _o : 63072000, // 2 years
        // Life of the session cookie (in seconds)
        configSessionCookieTimeout = (_p = trackerConfiguration.sessionCookieTimeout) !== null && _p !== void 0 ? _p : 1800, // 30 minutes
        // Allows tracking user session (using cookies or local storage), can only be used with anonymousTracking
        configAnonymousSessionTracking = getAnonymousSessionTracking(trackerConfiguration), 
        // Will send a header to server to prevent returning cookie and capturing IP
        configAnonymousServerTracking = getAnonymousServerTracking(trackerConfiguration), 
        // Sets tracker to work in anonymous mode without accessing client storage
        configAnonymousTracking = getAnonymousTracking(trackerConfiguration), 
        // Strategy defining how to store the state: cookie, localStorage, cookieAndLocalStorage or none
        configStateStorageStrategy = getStateStorageStrategy(trackerConfiguration), 
        // Last activity timestamp
        lastActivityTime, 
        // The last time an event was fired on the page - used to invalidate session if cookies are disabled
        lastEventTime = new Date().getTime(), 
        // How are we scrolling?
        minXOffset, maxXOffset, minYOffset, maxYOffset, 
        // Domain hash value
        domainHash, 
        // Domain unique user ID
        domainUserId, 
        // ID for the current session
        memorizedSessionId, 
        // Index for the current session - kept in memory in case cookies are disabled
        memorizedVisitCount = 1, 
        // Business-defined unique user ID
        businessUserId, 
        // Manager for local storage queue
        outQueue = OutQueueManager(trackerId, state, configStateStorageStrategy == 'localStorage' || configStateStorageStrategy == 'cookieAndLocalStorage', trackerConfiguration.eventMethod, configPostPath, (_q = trackerConfiguration.bufferSize) !== null && _q !== void 0 ? _q : 1, (_r = trackerConfiguration.maxPostBytes) !== null && _r !== void 0 ? _r : 40000, (_s = trackerConfiguration.maxGetBytes) !== null && _s !== void 0 ? _s : 0, (_t = trackerConfiguration.useStm) !== null && _t !== void 0 ? _t : true, (_u = trackerConfiguration.maxLocalStorageQueueSize) !== null && _u !== void 0 ? _u : 1000, (_v = trackerConfiguration.connectionTimeout) !== null && _v !== void 0 ? _v : 5000, configAnonymousServerTracking, (_w = trackerConfiguration.customHeaders) !== null && _w !== void 0 ? _w : {}, (_x = trackerConfiguration.withCredentials) !== null && _x !== void 0 ? _x : true), 
        // Whether pageViewId should be regenerated after each trackPageView. Affect web_page context
        preservePageViewId = false, 
        // Whether first trackPageView was fired and pageViewId should not be changed anymore until reload
        pageViewSent = false, 
        // Activity tracking config for callback and pacge ping variants
        activityTrackingConfig = {
            enabled: false,
            installed: false,
            configurations: {}
        };
        if (trackerConfiguration.hasOwnProperty('discoverRootDomain') && trackerConfiguration.discoverRootDomain) {
            configCookieDomain = findRootDomain(configCookieSameSite, configCookieSecure);
        }
        // Set up unchanging name-value pairs
        core.setTrackerVersion(version);
        core.setTrackerNamespace(namespace);
        core.setAppId(configTrackerSiteId);
        core.setPlatform(configPlatform);
        core.addPayloadPair('cookie', navigator.cookieEnabled ? '1' : '0');
        core.addPayloadPair('cs', documentCharset);
        core.addPayloadPair('lang', browserLanguage);
        core.addPayloadPair('res', screen.width + 'x' + screen.height);
        core.addPayloadPair('cd', screen.colorDepth);
        /*
         * Initialize tracker
         */
        updateDomainHash();
        initializeIdsAndCookies();
        if (trackerConfiguration.crossDomainLinker) {
            decorateLinks(trackerConfiguration.crossDomainLinker);
        }
        /**
         * Recalculate the domain, URL, and referrer
         */
        function refreshUrl() {
            locationArray = fixupUrl(window.location.hostname, window.location.href, getReferrer());
            // If this is a single-page app and the page URL has changed, then:
            //   - if the new URL's querystring contains a "refer(r)er" parameter, use it as the referrer
            //   - otherwise use the old URL as the referer
            if (locationArray[1] !== locationHrefAlias) {
                configReferrerUrl = getReferrer(locationHrefAlias);
            }
            domainAlias = fixupDomain(locationArray[0]);
            locationHrefAlias = locationArray[1];
        }
        /**
         * Decorate the querystring of a single link
         *
         * @param event - e The event targeting the link
         */
        function linkDecorationHandler(evt) {
            var timestamp = new Date().getTime();
            var elt = evt.currentTarget;
            if (elt === null || elt === void 0 ? void 0 : elt.href) {
                elt.href = decorateQuerystring(elt.href, '_sp', domainUserId + '.' + timestamp);
            }
        }
        /**
         * Enable querystring decoration for links pasing a filter
         * Whenever such a link is clicked on or navigated to via the keyboard,
         * add "_sp={{duid}}.{{timestamp}}" to its querystring
         *
         * @param crossDomainLinker - Function used to determine which links to decorate
         */
        function decorateLinks(crossDomainLinker) {
            for (var i = 0; i < document.links.length; i++) {
                var elt = document.links[i];
                if (!elt.spDecorationEnabled && crossDomainLinker(elt)) {
                    addEventListener(elt, 'click', linkDecorationHandler, true);
                    addEventListener(elt, 'mousedown', linkDecorationHandler, true);
                    // Don't add event listeners more than once
                    elt.spDecorationEnabled = true;
                }
            }
        }
        /*
         * Removes hash tag from the URL
         *
         * URLs are purified before being recorded in the cookie,
         * or before being sent as GET parameters
         */
        function purify(url) {
            var targetPattern;
            if (configDiscardHashTag) {
                targetPattern = new RegExp('#.*');
                url = url.replace(targetPattern, '');
            }
            if (configDiscardBrace) {
                targetPattern = new RegExp('[{}]', 'g');
                url = url.replace(targetPattern, '');
            }
            return url;
        }
        /*
         * Extract scheme/protocol from URL
         */
        function getProtocolScheme(url) {
            var e = new RegExp('^([a-z]+):'), matches = e.exec(url);
            return matches ? matches[1] : null;
        }
        /*
         * Resolve relative reference
         *
         * Note: not as described in rfc3986 section 5.2
         */
        function resolveRelativeReference(baseUrl, url) {
            var protocol = getProtocolScheme(url), i;
            if (protocol) {
                return url;
            }
            if (url.slice(0, 1) === '/') {
                return getProtocolScheme(baseUrl) + '://' + getHostName(baseUrl) + url;
            }
            baseUrl = purify(baseUrl);
            if ((i = baseUrl.indexOf('?')) >= 0) {
                baseUrl = baseUrl.slice(0, i);
            }
            if ((i = baseUrl.lastIndexOf('/')) !== baseUrl.length - 1) {
                baseUrl = baseUrl.slice(0, i + 1);
            }
            return baseUrl + url;
        }
        /*
         * Send request
         */
        function sendRequest(request) {
            // Set to true if Opt-out cookie is defined
            var toOptoutByCookie;
            if (configOptOutCookie) {
                toOptoutByCookie = !!cookie(configOptOutCookie);
            }
            else {
                toOptoutByCookie = false;
            }
            if (!(configDoNotTrack || toOptoutByCookie)) {
                outQueue.enqueueRequest(request.build(), configCollectorUrl);
            }
        }
        /*
         * Get cookie name with prefix and domain hash
         */
        function getSnowplowCookieName(baseName) {
            return configCookieNamePrefix + baseName + '.' + domainHash;
        }
        /*
         * Cookie getter.
         */
        function getSnowplowCookieValue(cookieName) {
            var fullName = getSnowplowCookieName(cookieName);
            if (configStateStorageStrategy == 'localStorage') {
                return attemptGetLocalStorage(fullName);
            }
            else if (configStateStorageStrategy == 'cookie' || configStateStorageStrategy == 'cookieAndLocalStorage') {
                return cookie(fullName);
            }
            return undefined;
        }
        /*
         * Update domain hash
         */
        function updateDomainHash() {
            refreshUrl();
            domainHash = hash((configCookieDomain || domainAlias) + (configCookiePath || '/')).slice(0, 4); // 4 hexits = 16 bits
        }
        /*
         * Process all "activity" events.
         * For performance, this function must have low overhead.
         */
        function activityHandler() {
            var now = new Date();
            lastActivityTime = now.getTime();
        }
        /*
         * Process all "scroll" events.
         */
        function scrollHandler() {
            updateMaxScrolls();
            activityHandler();
        }
        /*
         * Returns [pageXOffset, pageYOffset]
         */
        function getPageOffsets() {
            var documentElement = document.documentElement;
            if (documentElement) {
                return [documentElement.scrollLeft || window.pageXOffset, documentElement.scrollTop || window.pageYOffset];
            }
            return [0, 0];
        }
        /*
         * Quick initialization/reset of max scroll levels
         */
        function resetMaxScrolls() {
            var offsets = getPageOffsets();
            var x = offsets[0];
            minXOffset = x;
            maxXOffset = x;
            var y = offsets[1];
            minYOffset = y;
            maxYOffset = y;
        }
        /*
         * Check the max scroll levels, updating as necessary
         */
        function updateMaxScrolls() {
            var offsets = getPageOffsets();
            var x = offsets[0];
            if (x < minXOffset) {
                minXOffset = x;
            }
            else if (x > maxXOffset) {
                maxXOffset = x;
            }
            var y = offsets[1];
            if (y < minYOffset) {
                minYOffset = y;
            }
            else if (y > maxYOffset) {
                maxYOffset = y;
            }
        }
        /*
         * Prevents offsets from being decimal or NaN
         * See https://github.com/snowplow/snowplow-javascript-tracker/issues/324
         */
        function cleanOffset(offset) {
            return Math.round(offset);
        }
        /*
         * Sets or renews the session cookie
         */
        function setSessionCookie() {
            var cookieName = getSnowplowCookieName('ses');
            var cookieValue = '*';
            setCookie(cookieName, cookieValue, configSessionCookieTimeout);
        }
        /*
         * Sets the Visitor ID cookie: either the first time loadDomainUserIdCookie is called
         * or when there is a new visit or a new page view
         */
        function setDomainUserIdCookie(domainUserId, createTs, visitCount, nowTs, lastVisitTs, sessionId) {
            var cookieName = getSnowplowCookieName('id');
            var cookieValue = domainUserId + '.' + createTs + '.' + visitCount + '.' + nowTs + '.' + lastVisitTs + '.' + sessionId;
            setCookie(cookieName, cookieValue, configVisitorCookieTimeout);
        }
        /*
         * no-op if anonymousTracking enabled, will still set cookies if anonymousSessionTracking is enabled
         * Sets a cookie based on the storage strategy:
         * - if 'localStorage': attemps to write to local storage
         * - if 'cookie' or 'cookieAndLocalStorage': writes to cookies
         * - otherwise: no-op
         */
        function setCookie(name, value, timeout) {
            if (configAnonymousTracking && !configAnonymousSessionTracking) {
                return;
            }
            if (configStateStorageStrategy == 'localStorage') {
                attemptWriteLocalStorage(name, value, timeout);
            }
            else if (configStateStorageStrategy == 'cookie' || configStateStorageStrategy == 'cookieAndLocalStorage') {
                cookie(name, value, timeout, configCookiePath, configCookieDomain, configCookieSameSite, configCookieSecure);
            }
        }
        /**
         * Clears all cookie and local storage for id and ses values
         */
        function clearUserDataAndCookies(configuration) {
            var idname = getSnowplowCookieName('id');
            var sesname = getSnowplowCookieName('ses');
            attemptDeleteLocalStorage(idname);
            attemptDeleteLocalStorage(sesname);
            deleteCookie(idname, configCookieDomain, configCookieSameSite, configCookieSecure);
            deleteCookie(sesname, configCookieDomain, configCookieSameSite, configCookieSecure);
            if (!(configuration === null || configuration === void 0 ? void 0 : configuration.preserveSession)) {
                memorizedSessionId = v4();
                memorizedVisitCount = 0;
            }
            if (!(configuration === null || configuration === void 0 ? void 0 : configuration.preserveUser)) {
                domainUserId = v4();
                businessUserId = null;
            }
        }
        /**
         * Toggle Anaonymous Tracking
         */
        function toggleAnonymousTracking(configuration) {
            if (configuration && configuration.stateStorageStrategy) {
                trackerConfiguration.stateStorageStrategy = configuration.stateStorageStrategy;
                configStateStorageStrategy = getStateStorageStrategy(trackerConfiguration);
            }
            configAnonymousTracking = getAnonymousTracking(trackerConfiguration);
            configAnonymousSessionTracking = getAnonymousSessionTracking(trackerConfiguration);
            configAnonymousServerTracking = getAnonymousServerTracking(trackerConfiguration);
            outQueue.setUseLocalStorage(configStateStorageStrategy == 'localStorage' || configStateStorageStrategy == 'cookieAndLocalStorage');
            outQueue.setAnonymousTracking(configAnonymousServerTracking);
        }
        /*
         * Load the domain user ID and the session ID
         * Set the cookies (if cookies are enabled)
         */
        function initializeIdsAndCookies() {
            if (configAnonymousTracking && !configAnonymousSessionTracking) {
                return;
            }
            var sesCookieSet = configStateStorageStrategy != 'none' && !!getSnowplowCookieValue('ses');
            var idCookieComponents = loadDomainUserIdCookie();
            if (idCookieComponents[1]) {
                domainUserId = idCookieComponents[1];
            }
            else if (!configAnonymousTracking) {
                domainUserId = v4();
                idCookieComponents[1] = domainUserId;
            }
            else {
                domainUserId = '';
                idCookieComponents[1] = domainUserId;
            }
            memorizedSessionId = idCookieComponents[6];
            if (!sesCookieSet) {
                // Increment the session ID
                idCookieComponents[3]++;
                // Create a new sessionId
                memorizedSessionId = v4();
                idCookieComponents[6] = memorizedSessionId;
                // Set lastVisitTs to currentVisitTs
                idCookieComponents[5] = idCookieComponents[4];
            }
            if (configStateStorageStrategy != 'none') {
                setSessionCookie();
                // Update currentVisitTs
                idCookieComponents[4] = Math.round(new Date().getTime() / 1000);
                idCookieComponents.shift();
                setDomainUserIdCookie.apply(null, idCookieComponents); // TODO: Remove any
            }
        }
        /*
         * Load visitor ID cookie
         */
        function loadDomainUserIdCookie() {
            if (configStateStorageStrategy == 'none') {
                return [];
            }
            var now = new Date(), nowTs = Math.round(now.getTime() / 1000), id = getSnowplowCookieValue('id'), tmpContainer;
            if (id) {
                tmpContainer = id.split('.');
                // cookies enabled
                tmpContainer.unshift('0');
            }
            else {
                tmpContainer = [
                    // cookies disabled
                    '1',
                    // Domain user ID
                    domainUserId,
                    // Creation timestamp - seconds since Unix epoch
                    nowTs,
                    // visitCount - 0 = no previous visit
                    0,
                    // Current visit timestamp
                    nowTs,
                    // Last visit timestamp - blank meaning no previous visit
                    '',
                ];
            }
            if (!tmpContainer[6] || tmpContainer[6] === 'undefined') {
                // session id
                tmpContainer[6] = v4();
            }
            return tmpContainer;
        }
        /**
         * Adds the protocol in front of our collector URL
         *
         * @param string - collectorUrl The collector URL with or without protocol
         * @returns string collectorUrl The tracker URL with protocol
         */
        function asCollectorUrl(collectorUrl) {
            if (collectorUrl.indexOf('http') === 0) {
                return collectorUrl;
            }
            return ('https:' === document.location.protocol ? 'https' : 'http') + '://' + collectorUrl;
        }
        /**
         * Initialize new `pageViewId` if it shouldn't be preserved.
         * Should be called when `trackPageView` is invoked
         */
        function resetPageView() {
            if (!preservePageViewId || state.pageViewId == null) {
                state.pageViewId = v4();
            }
        }
        /**
         * Safe function to get `pageViewId`.
         * Generates it if it wasn't initialized by other tracker
         */
        function getPageViewId() {
            if (state.pageViewId == null) {
                state.pageViewId = v4();
            }
            return state.pageViewId;
        }
        /**
         * Put together a web page context with a unique UUID for the page view
         *
         * @returns web_page context
         */
        function getWebPagePlugin() {
            return {
                contexts: function () {
                    return [
                        {
                            schema: 'iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0',
                            data: {
                                id: getPageViewId()
                            }
                        },
                    ];
                }
            };
        }
        /*
         * Attaches common web fields to every request (resolution, url, referrer, etc.)
         * Also sets the required cookies.
         */
        function getBrowserDataPlugin() {
            return {
                beforeTrack: function (payloadBuilder) {
                    var anonymizeOr = function (value) { return (configAnonymousTracking ? null : value); };
                    var anonymizeSessionOr = function (value) {
                        return configAnonymousSessionTracking ? value : anonymizeOr(value);
                    };
                    var nowTs = Math.round(new Date().getTime() / 1000), ses = getSnowplowCookieValue('ses'), id = loadDomainUserIdCookie(), cookiesDisabled = id[0], _domainUserId = id[1], // We could use the global (domainUserId) but this is better etiquette
                    createTs = id[2], visitCount = id[3], currentVisitTs = id[4], lastVisitTs = id[5], sessionIdFromCookie = id[6];
                    var toOptoutByCookie;
                    if (configOptOutCookie) {
                        toOptoutByCookie = !!cookie(configOptOutCookie);
                    }
                    else {
                        toOptoutByCookie = false;
                    }
                    if (configDoNotTrack || toOptoutByCookie) {
                        clearUserDataAndCookies();
                        return;
                    }
                    // If cookies are enabled, base visit count and session ID on the cookies
                    if (cookiesDisabled === '0') {
                        memorizedSessionId = sessionIdFromCookie;
                        // New session?
                        if (!ses && configStateStorageStrategy != 'none') {
                            // New session (aka new visit)
                            visitCount++;
                            // Update the last visit timestamp
                            lastVisitTs = currentVisitTs;
                            // Regenerate the session ID
                            memorizedSessionId = v4();
                        }
                        memorizedVisitCount = visitCount;
                    }
                    else if (new Date().getTime() - lastEventTime > configSessionCookieTimeout * 1000) {
                        memorizedSessionId = v4();
                        memorizedVisitCount++;
                    }
                    payloadBuilder.add('vp', detectViewport());
                    payloadBuilder.add('ds', detectDocumentSize());
                    payloadBuilder.add('vid', anonymizeSessionOr(memorizedVisitCount));
                    payloadBuilder.add('sid', anonymizeSessionOr(memorizedSessionId));
                    payloadBuilder.add('duid', anonymizeOr(_domainUserId)); // Set to our local variable
                    payloadBuilder.add('uid', anonymizeOr(businessUserId));
                    refreshUrl();
                    payloadBuilder.add('refr', purify(customReferrer || configReferrerUrl));
                    // Add the page URL last as it may take us over the IE limit (and we don't always need it)
                    payloadBuilder.add('url', purify(configCustomUrl || locationHrefAlias));
                    // Update cookies
                    if (configStateStorageStrategy != 'none') {
                        setDomainUserIdCookie(_domainUserId, createTs, memorizedVisitCount, nowTs, lastVisitTs, memorizedSessionId);
                        setSessionCookie();
                    }
                    lastEventTime = new Date().getTime();
                }
            };
        }
        /**
         * Expires current session and starts a new session.
         */
        function newSession() {
            // If cookies are enabled, base visit count and session ID on the cookies
            var nowTs = Math.round(new Date().getTime() / 1000), id = loadDomainUserIdCookie(), cookiesDisabled = id[0], _domainUserId = id[1], // We could use the global (domainUserId) but this is better etiquette
            createTs = id[2], visitCount = id[3], currentVisitTs = id[4], lastVisitTs = id[5], sessionIdFromCookie = id[6];
            // When cookies are enabled
            if (cookiesDisabled === '0') {
                memorizedSessionId = sessionIdFromCookie;
                // When cookie/local storage is enabled - make a new session
                if (configStateStorageStrategy != 'none') {
                    // New session (aka new visit)
                    visitCount++;
                    // Update the last visit timestamp
                    lastVisitTs = currentVisitTs;
                    // Regenerate the session ID
                    memorizedSessionId = v4();
                }
                memorizedVisitCount = visitCount;
                // Create a new session cookie
                setSessionCookie();
            }
            else {
                memorizedSessionId = v4();
                memorizedVisitCount++;
            }
            // Update cookies
            if (configStateStorageStrategy != 'none') {
                setDomainUserIdCookie(_domainUserId, createTs, memorizedVisitCount, nowTs, lastVisitTs, memorizedSessionId);
                setSessionCookie();
            }
            lastEventTime = new Date().getTime();
        }
        /**
         * Combine an array of unchanging contexts with the result of a context-creating function
         *
         * @param staticContexts - Array of custom contexts
         * @param contextCallback - Function returning an array of contexts
         */
        function finalizeContexts(staticContexts, contextCallback) {
            return (staticContexts || []).concat(contextCallback ? contextCallback() : []);
        }
        function logPageView(_a) {
            var title = _a.title, context = _a.context, timestamp = _a.timestamp, contextCallback = _a.contextCallback;
            refreshUrl();
            if (pageViewSent) {
                // Do not reset pageViewId if previous events were not page_view
                resetPageView();
            }
            pageViewSent = true;
            // So we know what document.title was at the time of trackPageView
            lastDocumentTitle = document.title;
            lastConfigTitle = title;
            // Fixup page title
            var pageTitle = fixupTitle(lastConfigTitle || lastDocumentTitle);
            // Log page view
            core.track(buildPageView({
                pageUrl: purify(configCustomUrl || locationHrefAlias),
                pageTitle: pageTitle,
                referrer: purify(customReferrer || configReferrerUrl)
            }), finalizeContexts(context, contextCallback), timestamp);
            // Send ping (to log that user has stayed on page)
            var now = new Date();
            var installingActivityTracking = false;
            if (activityTrackingConfig.enabled && !activityTrackingConfig.installed) {
                activityTrackingConfig.installed = true;
                installingActivityTracking = true;
                // Add mousewheel event handler, detect passive event listeners for performance
                var detectPassiveEvents_1 = {
                    update: function update() {
                        if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
                            var passive_1 = false;
                            var options = Object.defineProperty({}, 'passive', {
                                get: function get() {
                                    passive_1 = true;
                                },
                                set: function set() { }
                            });
                            // note: have to set and remove a no-op listener instead of null
                            // (which was used previously), becasue Edge v15 throws an error
                            // when providing a null callback.
                            // https://github.com/rafrex/detect-passive-events/pull/3
                            var noop = function noop() { };
                            window.addEventListener('testPassiveEventSupport', noop, options);
                            window.removeEventListener('testPassiveEventSupport', noop, options);
                            detectPassiveEvents_1.hasSupport = passive_1;
                        }
                    }
                };
                detectPassiveEvents_1.update();
                // Detect available wheel event
                var wheelEvent = 'onwheel' in document.createElement('div')
                    ? 'wheel' // Modern browsers support "wheel"
                    : document.onmousewheel !== undefined
                        ? 'mousewheel' // Webkit and IE support at least "mousewheel"
                        : 'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox
                if (Object.prototype.hasOwnProperty.call(detectPassiveEvents_1, 'hasSupport')) {
                    addEventListener(document, wheelEvent, activityHandler, { passive: true });
                }
                else {
                    addEventListener(document, wheelEvent, activityHandler);
                }
                // Capture our initial scroll points
                resetMaxScrolls();
                // Add event handlers; cross-browser compatibility here varies significantly
                // @see http://quirksmode.org/dom/events
                var documentHandlers = ['click', 'mouseup', 'mousedown', 'mousemove', 'keypress', 'keydown', 'keyup'];
                var windowHandlers = ['resize', 'focus', 'blur'];
                var listener = function (_, handler) {
                    if (handler === void 0) { handler = activityHandler; }
                    return function (ev) {
                        return addEventListener(document, ev, handler);
                    };
                };
                documentHandlers.forEach(listener(document));
                windowHandlers.forEach(listener(window));
                listener(window, scrollHandler)('scroll');
            }
            if (activityTrackingConfig.enabled && (resetActivityTrackingOnPageView || installingActivityTracking)) {
                // Periodic check for activity.
                lastActivityTime = now.getTime();
                var key = void 0;
                for (key in activityTrackingConfig.configurations) {
                    var config = activityTrackingConfig.configurations[key];
                    if (config) {
                        //Clear page ping heartbeat on new page view
                        window.clearInterval(config.activityInterval);
                        activityInterval(config, context, contextCallback);
                    }
                }
            }
        }
        function activityInterval(config, context, contextCallback) {
            var executePagePing = function (cb, c) {
                refreshUrl();
                cb({ context: c, pageViewId: getPageViewId(), minXOffset: minXOffset, minYOffset: minYOffset, maxXOffset: maxXOffset, maxYOffset: maxYOffset });
                resetMaxScrolls();
            };
            var timeout = function () {
                var now = new Date();
                // There was activity during the heart beat period;
                // on average, this is going to overstate the visitDuration by configHeartBeatTimer/2
                if (lastActivityTime + config.configMinimumVisitLength > now.getTime()) {
                    executePagePing(config.callback, finalizeContexts(context, contextCallback));
                }
                config.activityInterval = window.setInterval(heartbeat, config.configHeartBeatTimer);
            };
            var heartbeat = function () {
                var now = new Date();
                // There was activity during the heart beat period;
                // on average, this is going to overstate the visitDuration by configHeartBeatTimer/2
                if (lastActivityTime + config.configHeartBeatTimer > now.getTime()) {
                    executePagePing(config.callback, finalizeContexts(context, contextCallback));
                }
            };
            if (config.configMinimumVisitLength != 0) {
                config.activityInterval = window.setTimeout(timeout, config.configMinimumVisitLength);
            }
            else {
                config.activityInterval = window.setInterval(heartbeat, config.configHeartBeatTimer);
            }
        }
        /**
         * Configure the activity tracking and ensures integer values for min visit and heartbeat
         */
        function configureActivityTracking(configuration) {
            var minimumVisitLength = configuration.minimumVisitLength, heartbeatDelay = configuration.heartbeatDelay, callback = configuration.callback;
            if (isInteger(minimumVisitLength) && isInteger(heartbeatDelay)) {
                return {
                    configMinimumVisitLength: minimumVisitLength * 1000,
                    configHeartBeatTimer: heartbeatDelay * 1000,
                    callback: callback
                };
            }
            LOG.error('Activity tracking minimumVisitLength & heartbeatDelay must be integers');
            return undefined;
        }
        /**
         * Log that a user is still viewing a given page by sending a page ping.
         * Not part of the public API - only called from logPageView() above.
         */
        function logPagePing(_a) {
            var context = _a.context, minXOffset = _a.minXOffset, minYOffset = _a.minYOffset, maxXOffset = _a.maxXOffset, maxYOffset = _a.maxYOffset;
            var newDocumentTitle = document.title;
            if (newDocumentTitle !== lastDocumentTitle) {
                lastDocumentTitle = newDocumentTitle;
                lastConfigTitle = undefined;
            }
            core.track(buildPagePing({
                pageUrl: purify(configCustomUrl || locationHrefAlias),
                pageTitle: fixupTitle(lastConfigTitle || lastDocumentTitle),
                referrer: purify(customReferrer || configReferrerUrl),
                minXOffset: cleanOffset(minXOffset),
                maxXOffset: cleanOffset(maxXOffset),
                minYOffset: cleanOffset(minYOffset),
                maxYOffset: cleanOffset(maxYOffset)
            }), context);
        }
        var apiMethods = {
            getDomainSessionIndex: function () {
                return memorizedVisitCount;
            },
            getPageViewId: function () {
                return getPageViewId();
            },
            newSession: newSession,
            getCookieName: function (basename) {
                return getSnowplowCookieName(basename);
            },
            getUserId: function () {
                return businessUserId;
            },
            getDomainUserId: function () {
                return loadDomainUserIdCookie()[1];
            },
            getDomainUserInfo: function () {
                return loadDomainUserIdCookie();
            },
            setReferrerUrl: function (url) {
                customReferrer = url;
            },
            setCustomUrl: function (url) {
                refreshUrl();
                configCustomUrl = resolveRelativeReference(locationHrefAlias, url);
            },
            setDocumentTitle: function (title) {
                // So we know what document.title was at the time of trackPageView
                lastDocumentTitle = document.title;
                lastConfigTitle = title;
            },
            discardHashTag: function (enableFilter) {
                configDiscardHashTag = enableFilter;
            },
            discardBrace: function (enableFilter) {
                configDiscardBrace = enableFilter;
            },
            setCookiePath: function (path) {
                configCookiePath = path;
                updateDomainHash();
            },
            setVisitorCookieTimeout: function (timeout) {
                configVisitorCookieTimeout = timeout;
            },
            crossDomainLinker: function (crossDomainLinkerCriterion) {
                decorateLinks(crossDomainLinkerCriterion);
            },
            enableActivityTracking: function (configuration) {
                if (!activityTrackingConfig.configurations.pagePing) {
                    activityTrackingConfig.enabled = true;
                    activityTrackingConfig.configurations.pagePing = configureActivityTracking(__assign(__assign({}, configuration), { callback: logPagePing }));
                }
            },
            enableActivityTrackingCallback: function (configuration) {
                if (!activityTrackingConfig.configurations.callback) {
                    activityTrackingConfig.enabled = true;
                    activityTrackingConfig.configurations.callback = configureActivityTracking(configuration);
                }
            },
            updatePageActivity: function () {
                activityHandler();
            },
            setOptOutCookie: function (name) {
                configOptOutCookie = name;
            },
            setUserId: function (userId) {
                businessUserId = userId;
            },
            setUserIdFromLocation: function (querystringField) {
                refreshUrl();
                businessUserId = fromQuerystring(querystringField, locationHrefAlias);
            },
            setUserIdFromReferrer: function (querystringField) {
                refreshUrl();
                businessUserId = fromQuerystring(querystringField, configReferrerUrl);
            },
            setUserIdFromCookie: function (cookieName) {
                businessUserId = cookie(cookieName);
            },
            setCollectorUrl: function (collectorUrl) {
                configCollectorUrl = asCollectorUrl(collectorUrl);
                outQueue.setCollectorUrl(configCollectorUrl);
            },
            setBufferSize: function (newBufferSize) {
                outQueue.setBufferSize(newBufferSize);
            },
            flushBuffer: function (configuration) {
                if (configuration === void 0) { configuration = {}; }
                outQueue.executeQueue();
                if (configuration.newBufferSize) {
                    outQueue.setBufferSize(configuration.newBufferSize);
                }
            },
            trackPageView: function (event) {
                if (event === void 0) { event = {}; }
                logPageView(event);
            },
            preservePageViewId: function () {
                preservePageViewId = true;
            },
            disableAnonymousTracking: function (configuration) {
                trackerConfiguration.anonymousTracking = false;
                toggleAnonymousTracking(configuration);
                initializeIdsAndCookies();
                outQueue.executeQueue(); // There might be some events in the queue we've been unable to send in anonymous mode
            },
            enableAnonymousTracking: function (configuration) {
                var _a;
                trackerConfiguration.anonymousTracking = (_a = (configuration && (configuration === null || configuration === void 0 ? void 0 : configuration.options))) !== null && _a !== void 0 ? _a : true;
                toggleAnonymousTracking(configuration);
                // Reset the page view, if not tracking the session, so can't stitch user into new events on the page view id
                if (!configAnonymousSessionTracking) {
                    resetPageView();
                }
            },
            clearUserData: clearUserDataAndCookies
        };
        return __assign(__assign({}, apiMethods), { id: trackerId, namespace: namespace, core: core, sharedState: state });
    };
    // Initialise the tracker
    var partialTracker = newTracker(trackerId, namespace, version, endpoint, sharedState, trackerConfiguration), tracker = __assign(__assign({}, partialTracker), { addPlugin: function (configuration) {
            var _a, _b;
            tracker.core.addPlugin(configuration);
            (_b = (_a = configuration.plugin).activateBrowserPlugin) === null || _b === void 0 ? void 0 : _b.call(_a, tracker);
        } });
    // Initialise each plugin with the tracker
    browserPlugins.forEach(function (p) {
        var _a;
        (_a = p.activateBrowserPlugin) === null || _a === void 0 ? void 0 : _a.call(p, tracker);
    });
    return tracker;
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
var namedTrackers = {};
/**
 * Dispatch function to all specified trackers
 *
 * @param trackers - An optional list of trackers to send the event to, or will send to all trackers
 * @param fn - The function which will run against each tracker
 */
function dispatchToTrackers(trackers, fn) {
    try {
        getTrackers(trackers !== null && trackers !== void 0 ? trackers : allTrackerNames()).forEach(fn);
    }
    catch (ex) {
        LOG.error('Function failed', ex);
    }
}
/**
 * Dispatch function to all specified trackers from the supplied collection
 *
 * @param trackers - An optional list of trackers to send the event to, or will send to all trackers
 * @param trackerCollection - The collection which the trackers will be selected from
 * @param fn - The function which will run against each tracker
 */
function dispatchToTrackersInCollection(trackers, trackerCollection, fn) {
    try {
        getTrackersFromCollection(trackers !== null && trackers !== void 0 ? trackers : Object.keys(trackerCollection), trackerCollection).forEach(fn);
    }
    catch (ex) {
        LOG.error('Function failed', ex);
    }
}
/**
 * Checks if a tracker has been created for a particular identifier
 * @param trackerId - The unique identifier of the tracker
 */
function trackerExists(trackerId) {
    return namedTrackers.hasOwnProperty(trackerId);
}
/**
 * Creates a Tracker and adds it to the internal collection
 * @param trackerId - The unique identifier of the tracker
 * @param namespace - The namespace of the tracker, tracked with each event as `tna`
 * @param version - The current version of the tracker library
 * @param endpoint - The endpoint to send events to
 * @param sharedState - The instance of shared state to use for this tracker
 * @param configuration - The configuration to use for this tracker instance
 */
function addTracker(trackerId, namespace, version, endpoint, sharedState, configuration) {
    if (!namedTrackers.hasOwnProperty(trackerId)) {
        namedTrackers[trackerId] = Tracker(trackerId, namespace, version, endpoint, sharedState, configuration);
        return namedTrackers[trackerId];
    }
    return null;
}
/**
 * Gets a single instance of the internal tracker object
 * @param trackerId - The unique identifier of the tracker
 * @returns The tracker instance, or null if not found
 */
function getTracker(trackerId) {
    if (namedTrackers.hasOwnProperty(trackerId)) {
        return namedTrackers[trackerId];
    }
    LOG.warn(trackerId + ' not configured');
    return null;
}
/**
 * Gets an array of tracker instances based on the list of identifiers
 * @param trackerIds - An array of unique identifiers of the trackers
 * @returns The tracker instances, or empty list if none found
 */
function getTrackers(trackerIds) {
    return getTrackersFromCollection(trackerIds, namedTrackers);
}
/**
 * Gets all the trackers as a object, keyed by their unique identifiers
 */
function allTrackers() {
    return namedTrackers;
}
/**
 * Returns all the unique tracker identifiers
 */
function allTrackerNames() {
    return Object.keys(namedTrackers);
}
function getTrackersFromCollection(trackerIds, trackerCollection) {
    var trackers = [];
    for (var _i = 0, trackerIds_1 = trackerIds; _i < trackerIds_1.length; _i++) {
        var id = trackerIds_1[_i];
        if (trackerCollection.hasOwnProperty(id)) {
            trackers.push(trackerCollection[id]);
        }
        else {
            LOG.warn(id + ' not configured');
        }
    }
    return trackers;
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
 * A set of variables which are shared among all initialised trackers
 */
var SharedState = /** @class */ (function () {
    function SharedState() {
        /* List of request queues - one per Tracker instance */
        this.outQueues = [];
        this.bufferFlushers = [];
        /* DOM Ready */
        this.hasLoaded = false;
        this.registeredOnLoadHandlers = [];
    }
    return SharedState;
}());
function createSharedState() {
    var sharedState = new SharedState(), documentAlias = document, windowAlias = window;
    /*
     * Handle page visibility event
     * Works everywhere except IE9
     */
    function visibilityChangeHandler() {
        if (documentAlias.visibilityState == 'hidden') {
            // Flush all POST queues
            sharedState.bufferFlushers.forEach(function (flusher) {
                flusher(false);
            });
        }
    }
    function flushBuffers() {
        // Flush all POST queues
        sharedState.bufferFlushers.forEach(function (flusher) {
            flusher(false);
        });
    }
    /*
     * Handler for onload event
     */
    function loadHandler() {
        var i;
        if (!sharedState.hasLoaded) {
            sharedState.hasLoaded = true;
            for (i = 0; i < sharedState.registeredOnLoadHandlers.length; i++) {
                sharedState.registeredOnLoadHandlers[i]();
            }
        }
        return true;
    }
    /*
     * Add onload or DOM ready handler
     */
    function addReadyListener() {
        if (documentAlias.addEventListener) {
            documentAlias.addEventListener('DOMContentLoaded', function ready() {
                documentAlias.removeEventListener('DOMContentLoaded', ready, false);
                loadHandler();
            });
        }
        else if (documentAlias.attachEvent) {
            documentAlias.attachEvent('onreadystatechange', function ready() {
                if (documentAlias.readyState === 'complete') {
                    documentAlias.detachEvent('onreadystatechange', ready);
                    loadHandler();
                }
            });
        }
        // fallback
        addEventListener(windowAlias, 'load', loadHandler, false);
    }
    /************************************************************
     * Constructor
     ************************************************************/
    // initialize the Snowplow singleton
    if (documentAlias.visibilityState) {
        // Flush for mobile and modern browsers
        addEventListener(documentAlias, 'visibilitychange', visibilityChangeHandler, false);
    }
    // Last attempt at flushing in beforeunload
    addEventListener(windowAlias, 'beforeunload', flushBuffers, false);
    if (document.readyState === 'loading') {
        addReadyListener();
    }
    else {
        loadHandler();
    }
    return sharedState;
}

export { SharedState, addEventListener, addTracker, allTrackerNames, allTrackers, attemptDeleteLocalStorage, attemptGetLocalStorage, attemptGetSessionStorage, attemptWriteLocalStorage, attemptWriteSessionStorage, cookie, createSharedState, decorateQuerystring, deleteCookie, detectDocumentSize, detectViewport, dispatchToTrackers, dispatchToTrackersInCollection, findRootDomain, fixupDomain, fixupTitle, fixupUrl, fromQuerystring, getCookiesWithPrefix, getCssClasses, getFilterByClass, getFilterByName, getHostName, getReferrer, getTracker, getTrackers, hasLocalStorage, hasSessionStorage, isFunction, isInteger, isString, isValueInArray, localStorageAccessible, parseAndValidateFloat, parseAndValidateInt, trackerExists };
//# sourceMappingURL=index.module.js.map
