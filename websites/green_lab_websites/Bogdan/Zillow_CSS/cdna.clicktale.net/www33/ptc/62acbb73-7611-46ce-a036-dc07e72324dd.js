var CS_CONF = {
    "projectId": 3747,
    "status": 1,
    "hostnames": ["zillowgroup.com", "zillow.com", "accounts.skilljar.com", "premieragentforum2017.com", "premieragentforum2018.com", "skilljar.com", "skilljarapp.com", "eventcore.com", "zillowhomeloans.com", "zillowgroup.net", "qa.zillow.net"],
    "crossDomainTracking": 0,
    "crossDomainSingleIframeTracking": 0,
    "consentRequired": 0,
    "allowSubdomains": 1,
    "visitorCookieTimeout": 34164000000,
    "sampleRate": 100,
    "replayRecordingRate": 100,
    "validationRate": 10,
    "lastTrackingDraw": null,
    "trackerDomain": "c.clicktale.net",
    "recordingDomain": "r.clicktale.net",
    "useMalkaPipeline": 1,
    "ed": "l.clicktale.net/log/web",
    "eMerchandisingEnabled": 0,
    "mouseMoveHeatmapEnabled": 1,
    "autoInsightsEnabled": 0,
    "jsErrorsEnabled": 0,
    "customErrorsEnabled": 0,
    "jsCustomErrorsEnabled": 0,
    "apiErrorsEnabled": 0,
    "customHashIdEnabled": 0,
    "recordingEncryptionEnabled": 0,
    "recordingEncryptionPublicKey": null,
    "recordingEncryptionPublicKeyId": 0,
    "secureCookiesEnabled": 0,
    "triggerSessionReplayEnabled": 0,
    "triggerSessionReplayRegex": null,
    "dynamicIdRegex": null,
    "whitelistedAttributes": [],
    "replayRecordingUnmaskedUrlRegex": null,
    "replayRecordingMaskedUrlRegex": null,
    "tagDeploymentMode": "DUAL_COLLECTION",
    "experimental": null,
    "iframesTracking": 0,
    "textVisibilityEnabled": 0,
    "cookielessTrackingEnabled": 0,
    "malkaUrlEnabled": 0,
    "malkaEtrEnabled": 0,
    "pathComputationRules": {
        "reliableSelectors": []
    },
    "asyncSerializerEnabled": 0,
    "malkaQuotaServiceDomain": "q-aus1.clicktale.net",
    "malkaRecordingDomain": "k-aus1.clicktale.net",
    "dualCollectionTagDomain": "clicktale.net",
    "ptcDomain": "cdnssl.clicktale.net",
    "ptcPartition": "www33",
    "ptcGuid": "62acbb73-7611-46ce-a036-dc07e72324dd"
};
var CS_INTEGRATIONS_CONF = {
    "optimizely": {},
    "google-optimize": {}
};
/* integration-optimizely 2.6.3 */
! function(e) {
    var n = {};

    function t(i) {
        if (n[i]) return n[i].exports;
        var a = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, t), a.l = !0, a.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: i
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (t.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var a in e) t.d(i, a, function(n) {
                return e[n]
            }.bind(null, a));
        return i
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 1)
}([function(e) {
    e.exports = JSON.parse('{"name":"@contentsquare/integration-optimizely-cap","version":"2.6.3","scripts":{"build:snippet":"webpack"}}')
}, function(e, n, t) {
    "use strict";

    function i(e, n) {
        try {
            e()
        } catch (e) {
            window._uxa = window._uxa || [], _uxa.push(["logSnippetError", n, e.message])
        }
    }
    t.r(n);
    var a = t(0),
        r = a.name,
        o = a.version,
        u = function(e) {
            var n, t, a, r;
            if (i((function() {
                    var i = e.name;
                    a = e.version;
                    var o = i.replace("@contentsquare/integration-", "");
                    n = o + "-" + a;
                    var u = "-contentsquare";
                    r = new RegExp(u + "$").test(o), t = o.replace(/-contentsquare([^-contentsquare]*)$/, "$1"), r || (u = "-cap", r = new RegExp(u + "$").test(o), t = o.replace(/-cap([^-cap]*)$/, "$1"))
                }), "Shared-Function-readPackageJSON"), r) return {
                snippetBuildName: n,
                parameterName: t,
                snippetVersion: a
            }
        }(a);
    u && (u.parameterName, r = u.snippetBuildName, o = u.snippetVersion), i((function() {
        window._uxa = window._uxa || [], CS_CONF.integrations = CS_CONF.integrations || [], CS_CONF.integrations.push("Optimizely - v" + o);
        var e = !1;

        function n(n) {
            var t = [];
            ! function(e, n, t) {
                if ((t = t || window) && n && e) {
                    var i = !1,
                        a = t[e];
                    a ? n() : Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return a
                        },
                        set: function(e) {
                            a = e, i || (i = !0, n())
                        }
                    })
                }
            }("optimizely", (function() {
                setTimeout((function() {
                    i((function() {
                        function n() {
                            i((function() {
                                var e, n, i = optimizely.get && optimizely.get("state");
                                if (i && i.getCampaignStates && "function" == typeof i.getCampaignStates && "object" == typeof i.getCampaignStates())
                                    for (var a = i.getCampaignStates({
                                            isActive: !0
                                        }), r = Object.keys(a), o = 0; o < r.length; o++)
                                        if (-1 === t.indexOf(r[o])) {
                                            t.push(r[o]);
                                            var u = a[r[o]];
                                            if (u.experiment) {
                                                var p = "",
                                                    c = "";
                                                p = u.experiment.name ? u.campaignName : u.experiment.id, c = u.experiment.campaignName && u.experiment.name ? u.experiment.name + " - " + u.variation.name : u.variation.name ? u.variation.name : u.variation.id, u.isInCampaignHoldback && (c += " [Holdback]"), p && c && (n = c, e = "AB_OP_" + (e = p), _uxa.push(["trackDynamicVariable", {
                                                    key: e,
                                                    value: n
                                                }]))
                                            }
                                        }
                            }), r)
                        }
                        n(), e || (e = !0, window.optimizely = window.optimizely || [], "function" == typeof optimizely.push && optimizely.push({
                            type: "addListener",
                            filter: {
                                type: "lifecycle",
                                name: "campaignDecided"
                            },
                            handler: n
                        }))
                    }), r)
                }), 500)
            }))
        }
        _uxa.push(["afterPageView", function(e) {
            i((function() {
                n()
            }), r)
        }])
    }), r)
}]); /* integration-google-optimize 2.5.3 */
! function(e) {
    var n = {};

    function t(a) {
        if (n[a]) return n[a].exports;
        var r = n[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, a) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: a
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (t.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var r in e) t.d(a, r, function(n) {
                return e[n]
            }.bind(null, r));
        return a
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 1)
}([function(e) {
    e.exports = JSON.parse('{"name":"@contentsquare/integration-google-optimize-cap","version":"2.5.3","scripts":{"build:snippet":"webpack"}}')
}, function(e, n, t) {
    "use strict";

    function a(e, n) {
        try {
            e()
        } catch (e) {
            window._uxa = window._uxa || [], _uxa.push(["logSnippetError", n, e.message])
        }
    }
    t.r(n);
    var r = t(0),
        i = r.name,
        o = r.version,
        u = function(e) {
            var n, t, r, i;
            if (a((function() {
                    var a = e.name;
                    r = e.version;
                    var o = a.replace("@contentsquare/integration-", "");
                    n = o + "-" + r;
                    var u = "-contentsquare";
                    i = new RegExp(u + "$").test(o), t = o.replace(/-contentsquare([^-contentsquare]*)$/, "$1"), i || (u = "-cap", i = new RegExp(u + "$").test(o), t = o.replace(/-cap([^-cap]*)$/, "$1"))
                }), "Shared-Function-readPackageJSON"), i) return {
                snippetBuildName: n,
                parameterName: t,
                snippetVersion: r
            }
        }(r);
    u && (u.parameterName, i = u.snippetBuildName, o = u.snippetVersion), a((function() {
        window._uxa = window._uxa || [], CS_CONF.integrations = CS_CONF.integrations || [], CS_CONF.integrations.push("Google Optimize - v" + o);
        var e;
        var n = !1,
            t = "",
            r = "";

        function u(n, t) {
            var a, r;
            e.length && e.indexOf(n + "~~~~" + t) > -1 && (n = "", t = ""), n && t && (e.push(n + "~~~~" + t), r = t, a = "AB_GO_" + (a = n), _uxa.push(["trackDynamicVariable", {
                key: a,
                value: r
            }]))
        }

        function c(o) {
            if (e = [], window.dataLayer && !n) {
                n = !0, (window.gtag ? gtag : function() {
                    dataLayer.push(arguments)
                })("event", "optimize.callback", {
                    callback: function(e, n) {
                        a((function() {
                            n && e && u(t = n, r = e)
                        }), i)
                    }
                })
            }
            if (document.location.search.indexOf("utm_expid=.") > -1) {
                var c = function(e, n) {
                    n || (n = "="), e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                    var t = new RegExp("[\\?&=]" + e + n + "([^&#]*)").exec(location.search);
                    return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
                }("utm_expid");
                c && (t = c.split(".")[1], r = c.split(".")[2], u(t, r))
            }! function(e, n, t) {
                if ((t = t || window) && n && e) {
                    var a = !1,
                        r = t[e];
                    r ? n() : Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return r
                        },
                        set: function(e) {
                            r = e, a || (a = !0, n())
                        }
                    })
                }
            }("gaData", (function() {
                setTimeout((function() {
                    a((function() {
                        var e = !1;
                        for (var n in gaData) e || gaData.hasOwnProperty(n) && gaData[n].experiments && (e = !0);
                        if (e) {
                            var a = Object.keys(gaData);
                            for (n = 0; n < a.length; n++)
                                if (gaData[a[n]].experiments)
                                    for (var i = gaData[a[n]].experiments, o = Object.keys(i), c = 0; c < o.length; c++) {
                                        var p = o[c];
                                        t = p, r = gaData[a[n]].experiments[p], u(t, r)
                                    }
                        }
                    }), i)
                }), 500)
            }))
        }
        _uxa.push(["afterPageView", function(e) {
            a((function() {
                c()
            }), i)
        }])
    }), i)
}]);
! function(t) {
    var e = {};

    function i(r) {
        if (e[r]) return e[r].exports;
        var n = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, r) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) i.d(r, n, function(e) {
                return t[e]
            }.bind(null, n));
        return r
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 4)
}([, , function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.extractFrom = e.replaceIn = void 0;
    var r = i(3),
        n = /(@import\s*("([^"]+)"|'([^']+)'))|(url\s*\(\s*((("([^"\]]+)"|'([^'\]]+)')\s*)|([^)\]]+))\))/g;

    function o(t, e) {
        return t.replace(n, (function() {
            for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
            var n = t[3] || t[4],
                o = t[9] || t[10] || t[11],
                a = (0, r.unescapeCssString)((n || o).trim()),
                c = n ? "@import " : "",
                u = e(a) || a;
            return "".concat(c, "url(").concat(s(u), ")")
        }))
    }

    function s(t) {
        return -1 === t.indexOf('"') ? '"'.concat(t, '"') : -1 === t.indexOf("'") ? "'".concat(t, "'") : t
    }
    e.replaceIn = o, e.extractFrom = function(t) {
        var e = [];
        return o(t, (function(t) {
            return e.push(t), t
        })), e
    }
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.unescapeCssString = void 0, e.unescapeCssString = function(t) {
        return t.replace(/(\\)*\\(?:([a-fA-F0-9]{1,6})|(.))[\n\t\x20]?/g, (function(t, e, i, r) {
            if ("\\" === e) return t.slice(1);
            if (r) return r;
            var n = parseInt(i, 16);
            return 55296 <= n && n <= 57343 || 0 === n || n > 1114111 ? "�" : String.fromCodePoint(n)
        }))
    }
}, function(t, e, i) {
    "use strict";
    i.r(e);
    var r = {};
    i.r(r), i.d(r, "get", (function() {
        return st
    })), i.d(r, "getRequestParameters", (function() {
        return at
    }));
    var n = {};
    i.r(n), i.d(n, "getRequestParameters", (function() {
        return gn
    }));
    var o = ["childNodes", "parentNode", "nextSibling", "firstChild"],
        s = ["shadowRoot"],
        a = ["target"],
        c = {
            Date: "csDate",
            JSON: "csJSON",
            Array: "csArray",
            String: "csString",
            URL: "csURL",
            MutationObserver: "csMutationObserver",
            screen: "csScreen",
            performance: "csPerformance"
        };

    function u(t, e) {
        var i = function(t, e) {
            for (var i, r = t; r && !(i = Object.getOwnPropertyDescriptor(r, e));) r = Object.getPrototypeOf(r);
            return i
        }(t, e);
        return (null == i ? void 0 : i.get) ? i.get : (null == i ? void 0 : i.value) ? i.value : function() {
            return this[e]
        }
    }

    function p(t) {
        Object.keys(c).forEach((function(e) {
            window[c[e]] = t[e]
        })), "Prototype" in window && (window.csMutationObserver = window.MutationObserver), l("csNode", o, t.Node.prototype), l("csElement", s, t.Element.prototype), l("csEvent", a, t.Event.prototype)
    }

    function l(t, e, i) {
        e.forEach((function(e) {
            window["".concat(t + e)] = u(i, e)
        }))
    }

    function h(t, e) {
        window.CSProtectnativeFunctionsLogs = window.CSProtectnativeFunctionsLogs || {}, window.CSProtectnativeFunctionsLogs[t] = e
    }
    if (! function() {
            try {
                var t = function() {
                    var t = document.createElement("iframe");
                    t.id = "cs-native-frame", t.setAttribute("hidden", ""), t.setAttribute("title", "Intentionally blank");
                    var e = document.createElement("cs-native-frame-holder");
                    if (e.setAttribute("hidden", ""), document.body.appendChild(e), Element.prototype.attachShadow) {
                        var i = e.attachShadow({
                            mode: "closed"
                        });
                        return i.innerHTML = t.outerHTML, i.firstElementChild.contentWindow
                    }
                    return e.innerHTML = t.outerHTML, e.firstElementChild.contentWindow
                }();
                return !!t && (window.CSPureWindow = t, p(window.CSPureWindow), !0)
            } catch (t) {
                return h("Warning", "failed to copy references from pure iframe: ".concat(t.message)), !1
            }
        }()) try {
        p(window)
    } catch (t) {
        h("Critical", "failed to copy references from window: ".concat(t.message))
    }

    function d(t) {
        return csString.prototype.replace.call(t, /([#;&,.+*~':"!^$[\]()<=>|/%?@`{}\\ ])/g, "\\$1")
    }

    function f(t) {
        return t.nodeType === Node.ELEMENT_NODE
    }

    function y(t) {
        return t.nodeType === Node.TEXT_NODE
    }

    function v(t) {
        return f(t) && "a" === t.localName
    }

    function m(t) {
        return function(t) {
            return f(t) && "link" === t.localName
        }(t) && "stylesheet" === t.rel
    }

    function g(t) {
        return f(t) && "img" === t.localName
    }

    function S(t) {
        return f(t) && "style" === t.localName
    }

    function E(t) {
        return f(t) && "script" === t.localName
    }

    function C(t) {
        switch (t.nodeType) {
            case Node.DOCUMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
                return !0;
            default:
                return !1
        }
    }

    function T(t) {
        return C(t) && "host" in t && "mode" in t
    }
    var R = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"];

    function b(t) {
        for (var e = t, i = [e]; null !== csNodeparentNode.apply(e);) e = csNodeparentNode.apply(e), csArray.prototype.push.call(i, e);
        return w(e) && csArray.prototype.push.call(i, "detached"), {
            ancestors: i,
            selectionRoot: e
        }
    }

    function w(t) {
        return L.isValidElement(t)
    }
    var A = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

    function I(t, e) {
        return !!e && csArray.prototype.some.call(e, (function(e) {
            return A.call(t, e)
        }))
    }
    var k = [/\d{4}/, /^ember\d+$/];

    function P(t, e, i, r) {
        var n = r.dynamicIdRegex || null,
            o = function(t) {
                return d(csString.prototype.toLowerCase.call(t.localName))
            }(t);
        if (function(t, e) {
                var i = N(t);
                return i && csString.prototype.match.call(i, /^[\w-]+$/) && O("data-cs-override-id", i, e)
            }(t, i)) {
            var s = N(t);
            return {
                hasUniqueIdentifier: !0,
                elementSelector: "".concat(o, "[").concat("data-cs-override-id", '="').concat(s, '"]')
            }
        }
        var a = function(t, e, i) {
            if (!i.uniqueAttributes) return {
                success: !1
            };
            for (var r = 0, n = i.uniqueAttributes; r < n.length; r++) {
                var o = n[r],
                    s = t.getAttribute(o);
                if (null !== s)
                    if (O(o, s, e)) return {
                        attributeName: o,
                        attributeValue: s,
                        success: !0
                    }
            }
            return {
                success: !1
            }
        }(t, i, r);
        if (a.success) return {
            hasUniqueIdentifier: !0,
            elementSelector: "".concat(o, "#UA[").concat(a.attributeName, '="').concat(a.attributeValue, '"]')
        };
        var c = function(t, e, i) {
            if (!i.uniqueCssSelectors) return;
            for (var r = 0, n = i.uniqueCssSelectors; r < n.length; r++) {
                var o = n[r];
                if (A.call(t, o) && M(o, e)) return o
            }
            return
        }(t, i, r);
        if (c) return {
            hasUniqueIdentifier: !0,
            elementSelector: "".concat(o, "#UCS[").concat(c, "]")
        };
        var u = function(t) {
            var e = t.getAttribute("id");
            return e ? d(e) : e
        }(t);
        if (function(t, e, i, r) {
                return e && ! function(t) {
                    return null !== N(t)
                }(t) && ! function(t, e, i) {
                    return t.hasAttribute("data-cs-dynamic-id") || function(t, e) {
                        var i = !1;
                        t && e && (i = e.test(t));
                        return t && (csArray.prototype.some.call(k, (function(e) {
                            return e.test(t)
                        })) || i)
                    }(e, i)
                }(t, e, r) && function(t, e) {
                    return t && O("id", t, e)
                }(e, i)
            }(t, u, i, n)) return {
            hasUniqueIdentifier: !0,
            elementSelector: "".concat(o, "#").concat(u)
        };
        var p = function(t, e) {
            if (!e.reliableSelectors) return;
            for (var i = 0, r = e.reliableSelectors; i < r.length; i++) {
                var n = r[i];
                if (A.call(t, n)) return n
            }
            return
        }(t, r);
        if (p) {
            var l = function(t, e, i) {
                if ("detached" === t || 9 === t.nodeType) return 0;
                for (var r = 0, n = e.previousElementSibling; n;) A.call(n, i) && (r += 1), n = n.previousElementSibling;
                return r
            }(e, t, p);
            return {
                hasUniqueIdentifier: !1,
                elementSelector: "".concat(o, "[").concat(p, "](").concat(l, ")")
            }
        }
        var h = function(t, e, i) {
            if ("detached" === t || 9 === t.nodeType) return 0;
            for (var r = csString.prototype.toLowerCase.call(e.localName), n = 0, o = e.previousElementSibling; o;) o.localName !== r || I(o, i.reliableSelectors) || (n += 1), o = o.previousElementSibling;
            return n
        }(e, t, r);
        return {
            hasUniqueIdentifier: !1,
            elementSelector: "".concat(o, ":eq(").concat(h, ")")
        }
    }

    function N(t) {
        return t.getAttribute("data-cs-override-id")
    }

    function O(t, e, i) {
        try {
            return 1 === i.querySelectorAll("[".concat(t, '="').concat(e, '"]')).length
        } catch (t) {
            if ("SyntaxError" !== t.name) throw t
        }
        return !1
    }

    function M(t, e) {
        try {
            return 1 === e.querySelectorAll(t).length
        } catch (t) {
            if ("SyntaxError" !== t.name) throw t
        }
        return !1
    }
    var L;

    function D(t, e, i) {
        var r = csArray.prototype.shift.call(t);
        if (0 === t.length) return _(r, i);
        var n = P(r, t[0], e, i),
            o = n.elementSelector,
            s = n.hasUniqueIdentifier;
        if (!i.fullPath && s) {
            var a = t[t.length - 1];
            return "".concat(_(a, i)).concat(o)
        }
        var c = D(t, e, i);
        return "".concat(c ? "".concat(c, ">") : "").concat(o)
    }

    function _(t, e) {
        if ("detached" === t) return "|detached|";
        if (t.host) {
            var i = b(t.host),
                r = i.ancestors,
                n = i.selectionRoot;
            return "".concat(D(r, n, e), "|shadow-root|")
        }
        return 11 === t.nodeType ? "|fragment|" : ""
    }! function(t) {
        function e(t) {
            return !!t && "localName" in t && "getAttribute" in t && "hasAttribute" in t && "parentNode" in t
        }

        function i(t) {
            return t && "jquery" in t && 1 === t.length ? t[0] : t
        }
        t.INVALID_ELEMENT = "INVALID_ELEMENT", t.isValidElement = e, t.getElementPath = function(r, n) {
            void 0 === n && (n = {
                fullPath: !1,
                dynamicIdRegex: null
            });
            var o = i(r);
            if (o === document) return "";
            if (!e(o)) return t.INVALID_ELEMENT;
            var s = b(o);
            return D(s.ancestors, s.selectionRoot, n)
        }, t.getElementPathAndFirstAnchorParent = function(r, n) {
            void 0 === n && (n = {
                fullPath: !1,
                dynamicIdRegex: null
            });
            var o = i(r);
            if (o === document) return {
                path: "",
                firstAnchorParent: null
            };
            if (!e(o)) return {
                path: t.INVALID_ELEMENT,
                firstAnchorParent: null
            };
            var s = function(t) {
                    for (var e = t, i = [e], r = null; null !== csNodeparentNode.apply(e);) null === r && v(e) && (r = e), csArray.prototype.push.call(i, csNodeparentNode.apply(e)), e = csNodeparentNode.apply(e);
                    return w(e) && csArray.prototype.push.call(i, "detached"), {
                        firstAnchorParent: r,
                        ancestors: i,
                        selectionRoot: e
                    }
                }(o),
                a = s.firstAnchorParent;
            return {
                path: D(s.ancestors, s.selectionRoot, n),
                firstAnchorParent: a
            }
        }
    }(L || (L = {})), window.CSPathComputation = window.CSPathComputation || L;
    var x = function(t, e) {
        return (x = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            })(t, e)
    };

    function V(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function i() {
            this.constructor = t
        }
        x(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
    }
    var z = function() {
        return (z = Object.assign || function(t) {
            for (var e, i = 1, r = arguments.length; i < r; i++)
                for (var n in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }).apply(this, arguments)
    };

    function q(t, e, i, r) {
        var n, o = arguments.length,
            s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r);
        else
            for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
        return o > 3 && s && Object.defineProperty(e, i, s), s
    }

    function U(t, e, i, r) {
        return new(i || (i = Promise))((function(n, o) {
            function s(t) {
                try {
                    c(r.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    c(r.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                    t(e)
                }))).then(s, a)
            }
            c((r = r.apply(t, e || [])).next())
        }))
    }

    function B(t, e) {
        var i, r, n, o, s = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function a(o) {
            return function(a) {
                return function(o) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, o[1])).done) return n;
                        switch (r = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return s.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = s.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < n[1]) {
                                    s.label = n[1], n = o;
                                    break
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(o);
                                    break
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = e.call(t, s)
                    } catch (t) {
                        o = [6, t], r = 0
                    } finally {
                        i = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, a])
            }
        }
    }
    Object.create;

    function H(t, e, i) {
        if (i || 2 === arguments.length)
            for (var r, n = 0, o = e.length; n < o; n++) !r && n in e || (r || (r = Array.prototype.slice.call(e, 0, n)), r[n] = e[n]);
        return t.concat(r || Array.prototype.slice.call(e))
    }
    Object.create;
    var F = Number.MAX_SAFE_INTEGER || 9007199254740991;

    function G() {}

    function j(t, e) {
        return 0 === csString.prototype.lastIndexOf.call(t, e, 0)
    }

    function K(t, e) {
        return -1 !== csString.prototype.indexOf.call(t, e, t.length - e.length)
    }
    var W = {
            percentage: function() {
                return Math.floor(1e4 * Math.random()) / 100
            },
            boolean: function(t) {
                return this.percentage() < t
            },
            integer: function(t) {
                return void 0 === t && (t = F), Math.floor(Math.random() * t)
            }
        },
        Y = "function" == typeof Symbol ? Symbol("json") : null;
    var X, J, Q = Y ? function(t) {
            if (t[Y]) return t[Y];
            if (csArray.isArray(t)) {
                if (0 === t.length) return "[]";
                for (var e = "[" + Q(t[0]), i = 1; i < t.length; i++) e += "," + Q(t[i]);
                return e + "]"
            }
            return t[Y] = csJSON.stringify(t)
        } : csJSON.stringify,
        Z = function() {
            function t(t) {
                var e;
                this.trackerDomain = t.trackerDomain, this.loggerDomain = t.ed, this.minLogLevel = t.logLevel, this.projectId = t.projectId, this.status = t.status, this.hostnames = t.hostnames, this.iframesTracking = !!t.iframesTracking, this.crossDomainTracking = !!t.crossDomainTracking, this.crossDomainSingleIframeTracking = !!t.crossDomainSingleIframeTracking, this.consentRequired = !!t.consentRequired, this.allowSubdomains = !!t.allowSubdomains, this.visitorCookieTimeout = t.visitorCookieTimeout || 34164e6, this.sampleRate = t.sampleRate, this.replayRecordingRate = t.replayRecordingRate, this.validationRate = t.validationRate, this.lastTrackingDraw = t.lastTrackingDraw || 1, this.useHttps = !0, this.recordingDomain = t.recordingDomain, this.eMerchandisingEnabled = t.eMerchandisingEnabled, this.mouseMoveHeatmapEnabled = t.mouseMoveHeatmapEnabled, this.jsErrorsEnabled = t.jsErrorsEnabled, this.apiErrors = z({
                    enabled: null !== (e = t.apiErrorsEnabled) && void 0 !== e ? e : 0
                }, t.apiErrors), this.customErrorsEnabled = t.customErrorsEnabled, this.jsCustomErrorsEnabled = t.jsCustomErrorsEnabled, this.triggerSessionReplayEnabled = t.triggerSessionReplayEnabled, this.triggerSessionReplayRegex = this.buildRegexFromConfiguration(t.triggerSessionReplayRegex), this.metricRate = void 0 === t.metricRate ? 0 : t.metricRate, this.dynamicIdRegex = t.dynamicIdRegex ? new RegExp(t.dynamicIdRegex) : null, this.whitelistedAttributes = t.whitelistedAttributes || [], this.replayRecordingUnmaskedUrlRegex = this.buildRegexFromConfiguration(t.replayRecordingUnmaskedUrlRegex), this.replayRecordingMaskedUrlRegex = this.buildRegexFromConfiguration(t.replayRecordingMaskedUrlRegex), this.tagDeploymentMode = t.tagDeploymentMode, this.dualCollectionTagDomain = t.dualCollectionTagDomain || null, this.ptcDomain = t.ptcDomain || null, this.ptcGuid = t.ptcGuid || null, this.secureCookiesEnabled = !!t.secureCookiesEnabled, this.ptcSha512 = t.ptcSha512 || null, this.ptcSnapshotPath = t.ptcSnapshotPath || null, this.emitDebugEvents = !1, this.useMalkaPipeline = t.useMalkaPipeline, this.malkaQuotaServiceDomain = t.malkaQuotaServiceDomain || null, this.malkaRecordingDomain = t.malkaRecordingDomain || null, this.textVisibilityEnabled = t.textVisibilityEnabled, this.experimental = t.experimental || {}, this.malkaEtrEnabled = !!t.malkaEtrEnabled, this.malkaUrlEnabled = !!t.malkaUrlEnabled, this.cookielessTrackingEnabled = t.cookielessTrackingEnabled, this.customHashIdEnabled = !!t.customHashIdEnabled, this.encryptionEnabled = !!t.recordingEncryptionEnabled, this.encryptionPublicKey = t.recordingEncryptionPublicKey || null, this.pathComputationRules = t.pathComputationRules || {}, this.asyncSerializerEnabled = !!t.asyncSerializerEnabled, this.encryptionPublicKeyId = t.recordingEncryptionPublicKeyId
            }
            return t.prototype.getTrackerUri = function() {
                return "".concat(this.protocol(), "://").concat(this.trackerDomain)
            }, t.prototype.getRecordingUri = function() {
                return "".concat(this.protocol(), "://").concat(this.useMalkaPipeline && this.malkaRecordingDomain ? this.malkaRecordingDomain : this.recordingDomain)
            }, t.prototype.getQuotaServiceUri = function() {
                return "".concat(this.protocol(), "://").concat(this.malkaQuotaServiceDomain)
            }, t.prototype.getLoggerUri = function() {
                return "".concat(this.protocol(), "://").concat(this.loggerDomain)
            }, t.prototype.protocol = function() {
                return this.useHttps ? "https" : "http"
            }, t.prototype.isProjectActive = function() {
                return 1 === this.status
            }, t.prototype.processOptionOverrides = function(t) {
                var e = this;
                t && t.forEach && t.forEach((function(t) {
                    var i = t[0],
                        r = t.slice(1);
                    if ("setOption" === i) {
                        var n = r[0],
                            o = r[1];
                        e.setOverridableField(n, o)
                    }
                }))
            }, t.prototype.setOverridableField = function(t, e) {
                "trackerDomain" === t && (this.trackerDomain = e), "recordingDomain" === t && (this.recordingDomain = e), "loggerDomain" === t && (this.loggerDomain = e), "malkaRecordingDomain" === t && (this.malkaRecordingDomain = e), "malkaQuotaServiceDomain" === t && (this.malkaQuotaServiceDomain = e), "minLogLevel" === t && (this.minLogLevel = e), "useHttps" === t && (this.useHttps = !!e)
            }, t.prototype.buildRegexFromConfiguration = function(t) {
                return t ? this.createRegex(t) : null
            }, t.prototype.getRequestParameters = function() {
                return {
                    pid: "".concat(this.projectId)
                }
            }, t.prototype.updateDynamicFields = function(t, e) {
                "emitDebugEvents" === t && (this.emitDebugEvents = e), "minLogLevel" === t && (this.minLogLevel = e)
            }, t.prototype.createRegex = function(t) {
                try {
                    var e = /^\/(.*)\/([gim]*)$/.exec(t);
                    if (e) {
                        var i = e[1],
                            r = e[2];
                        return new RegExp("^".concat(i, "$"), r)
                    }
                    return new RegExp("^".concat(t, "$"))
                } catch (t) {
                    return null
                }
            }, t
        }(),
        $ = function() {
            function t(t, e) {
                this.window = t, this.conf = e
            }
            return t.prototype.init = function() {
                this.inIframeContext = this.window.self !== this.window.top, this.conf.iframesTracking && this.inIframeContext ? this.topWindowTracker = !1 : this.topWindowTracker = !0
            }, t.prototype.isInIframeContext = function() {
                return this.inIframeContext
            }, t.prototype.isTopWindowTracker = function() {
                return this.topWindowTracker
            }, t
        }();
    ! function(t) {
        t.debug = "debug", t.warn = "warn", t.error = "error", t.critical = "critical"
    }(X || (X = {})),
    function(t) {
        t.toQuery = function(t) {
            return csArray.prototype.join.call(csArray.prototype.map.call(Object.keys(t), (function(e) {
                return "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(t[e]))
            })), "&")
        }
    }(J || (J = {}));
    var tt = function() {
            function t(t, e) {
                this.domainUri = t, this.path = e, this.beforeRequestCallbacks = [], this.afterRequestCallbacks = []
            }
            return t.prototype.setRequestParametersProviders = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.requestParametersProviders = t
            }, t.prototype.before = function(t) {
                csArray.prototype.push.call(this.beforeRequestCallbacks, t)
            }, t.prototype.after = function(t) {
                csArray.prototype.push.call(this.afterRequestCallbacks, t)
            }, t.prototype.retrieveParameters = function() {
                return this.requestParametersProviders ? csArray.prototype.reduce.call(csArray.prototype.map.call(this.requestParametersProviders, (function(t) {
                    return t.getRequestParameters()
                })), (function(t, e) {
                    return z(z({}, t), e)
                })) : {}
            }, t
        }(),
        et = function(t) {
            function e(e, i) {
                return t.call(this, e, i) || this
            }
            return V(e, t), e.prototype.send = function() {
                csArray.prototype.forEach.call(this.beforeRequestCallbacks, (function(t) {
                    return t()
                }));
                var t = this.retrieveParameters();
                this.addCacheBusting(t);
                var e = J.toQuery(t);
                this.generatePixel(e), csArray.prototype.forEach.call(this.afterRequestCallbacks, (function(t) {
                    return t()
                }))
            }, e.prototype.generatePixel = function(t) {
                var e = new window.Image(1, 1);
                e.onload = G, e.onerror = G, e.src = "".concat(this.domainUri).concat(this.path ? "/".concat(this.path) : "", "?").concat(t)
            }, e.prototype.addCacheBusting = function(t) {
                t.r = csString.prototype.slice.call("".concat(Math.random()), 2, 8)
            }, e
        }(tt),
        it = function() {
            function t(t, e) {
                this.projectConfiguration = t, this.basicLogRequestParameter = e
            }
            return t.prototype.init = function() {
                this.request = new et(this.projectConfiguration.getLoggerUri()), this.request.setRequestParametersProviders(this, this.basicLogRequestParameter)
            }, t.prototype.send = function(t) {
                this.log = t, this.request.send()
            }, t.prototype.getRequestParameters = function() {
                return {
                    a: this.log.app,
                    l: this.log.level,
                    m: this.log.message,
                    s: this.log.stacktrace
                }
            }, t
        }(),
        rt = /[a-zA-Z0-9._%+-]+(?:@|%40)[a-zA-Z0-9.%-_]+((?:\.|%2[eE])[a-zA-Z0-9-]+)+/g,
        nt = /[a-zA-Z0-9+_-](?:@|%40)/,
        ot = function() {
            function t() {}
            return t.prototype.anonymize = function(t) {
                return "string" == typeof t && nt.test(t) ? csString.prototype.replace.call(t, rt, "CS_ANONYMIZED_EMAIL") : t
            }, t.prototype.anonymizeFields = function(t, e) {
                var i = this;
                return csArray.prototype.forEach.call(e, (function(e) {
                    t[e] = i.anonymize(t[e])
                })), t
            }, t
        }();

    function st() {
        return "11.49.1"
    }

    function at() {
        return {
            v: "11.49.1"
        }
    }
    var ct = function() {
        return void 0 !== window.csPerformance && window.csPerformance.now ? window.csPerformance.timing.navigationStart + Math.round(window.csPerformance.now()) : csDate.now()
    };

    function ut() {
        return Math.floor(ct() / 1e3)
    }
    var pt, lt, ht = function() {
        function t(t, e) {
            this.configuration = t, this.pii = e
        }
        return t.prototype.getRequestParameters = function() {
            return z(z({
                d: "".concat(ct()),
                p: this.pii.anonymize(window.location.href),
                u: navigator.userAgent
            }, this.configuration.getRequestParameters()), {
                v: "11.49.1"
            })
        }, t
    }();
    ! function(t) {
        t.IMPLEMENTATION = "implementation", t.DYNAMIC = "dynamic"
    }(pt || (pt = {})),
    function(t) {
        t[t.debug = 0] = "debug", t[t.warn = 1] = "warn", t[t.error = 2] = "error", t[t.critical = 3] = "critical"
    }(lt || (lt = {}));
    var dt = function() {
            function t(t, e, i) {
                var r;
                this.parentLogContext = e, this.pii = new ot, this.minLogLevel = lt[X.warn], this.isLoggingActive = !1, this.minLogLevel = lt[t.minLogLevel || X.warn];
                var n = t.validationRate >= 0 ? t.validationRate : 10;
                this.isLoggingActive = W.boolean(n), this.request = i || new it(t, new ht(t, this.pii)), this.logTrack = ((r = {})[X.debug] = [], r[X.warn] = [], r[X.error] = [], r[X.critical] = [], r), this.snippetLogCounter = {
                    implementation: {},
                    dynamic: {}
                }, this.request.init()
            }
            return t.prototype.send = function(t, e, i) {
                if (void 0 === e && (e = ""), void 0 === i && (i = X.warn), this.isLoggingAllowed(i, e)) {
                    csArray.prototype.push.call(this.logTrack[i], e || "");
                    var r = {
                        message: this.getMessage(t, e),
                        stacktrace: this.getStacktrace(t),
                        app: "uxa",
                        level: i
                    };
                    this.request.send(r)
                }
            }, t.prototype.getMessage = function(t, e) {
                var i = t instanceof Error ? this.pii.anonymize(t.message || t.toString()) : t;
                return e && (i += " ErrorCode: ".concat(e)), i
            }, t.prototype.getStacktrace = function(t) {
                return t instanceof Error ? "".concat(t.stack || "No stacktrace", " ").concat(this.getContext()) : this.getContext()
            }, t.prototype.getContext = function() {
                var t = this.parentLogContext.getVisitorService(),
                    e = null == t ? void 0 : t.getVisitor();
                if (!e) return "No context";
                var i = this.parentLogContext.getSessionService(),
                    r = i && i.getSession(),
                    n = {
                        userId: e.id,
                        sessionNumber: e.visitsCount,
                        pageNumber: r && r.pageNumber
                    };
                return csJSON.stringify(n)
            }, t.prototype.isLoggingAllowed = function(t, e) {
                if (!this.isLoggingActive || lt[t] < this.minLogLevel) return !1;
                if (0 === (null == e ? void 0 : e.indexOf("implementation-snippet-", 0))) return this.isLoggingAllowedForSnippets(e, pt.IMPLEMENTATION);
                if (0 === (null == e ? void 0 : e.indexOf("snippet-", 0))) return this.isLoggingAllowedForSnippets(e, pt.DYNAMIC);
                var i = this.logTrack[t];
                return !(i.length >= 5) && (!e || !csArray.prototype.some.call(i, (function(t) {
                    return t === e
                })))
            }, t.prototype.isLoggingAllowedForSnippets = function(t, e) {
                return t in this.snippetLogCounter[e] ? !(this.snippetLogCounter[e][t] >= 5) && (this.snippetLogCounter[e][t] += 1, !0) : (this.snippetLogCounter[e][t] = 1, !0)
            }, t
        }(),
        ft = document.createElement("a");

    function yt(t) {
        return ft.href = t, ft.href
    }

    function vt(t) {
        if (!j(t, "http://") && !j(t, "https://")) return "";
        var e = document.createElement("a");
        return e.href = t, decodeURIComponent(e.hostname)
    }

    function mt(t, e) {
        return csArray.prototype.some.call(e, (function(e) {
            return K(t, ".".concat(e)) || t === e || "" === e
        }))
    }
    var gt, St, Et, Ct, Tt;
    ! function(t) {
        t.AfterPageView = "afterPageView", t.GetSessionKey = "getSessionKey"
    }(gt || (gt = {})),
    function(t) {
        t.Parent = "parent", t.Child = "child"
    }(St || (St = {})),
    function(t) {
        t.Discovery = "discovery", t.Stop = "stop", t.ChildLogMessage = "childLogMessage", t.AnalysisEvent = "analysisEvent", t.JavascriptError = "javascriptError", t.ApiError = "apiError", t.EmerchandisingMessage = "emerchandisingMessage", t.Commands = "commands", t.IntegrationCallback = "integrationCallback"
    }(Et || (Et = {})), (Tt = Ct || (Ct = {})).buildBaseMessage = function(t, e, i, r) {
        var n = {
            type: t,
            from: e,
            pid: i,
            signature: "CS_IFRAME_MESSAGE"
        };
        return void 0 !== r && r >= 0 && (n.id = r), n
    }, Tt.isMessageValid = function(t, e, i, r) {
        var n = vt(t.origin);
        return !!t.data && !!t.data.type && "CS_IFRAME_MESSAGE" === t.data.signature && t.data.from === e && t.data.pid === i && mt(n, r)
    }, Tt.sendMessage = function(t, e, i) {
        t.postMessage(i, e)
    };
    var Rt = function() {
            function t(t) {
                this.configuration = t
            }
            return t.prototype.send = function(t, e, i) {
                void 0 === e && (e = ""), void 0 === i && (i = X.warn);
                var r = {
                        message: t,
                        errorCode: e,
                        level: i
                    },
                    n = Ct.buildBaseMessage(Et.ChildLogMessage, St.Child, this.configuration.projectId);
                n.content = r, Ct.sendMessage(window.parent, "*", n)
            }, t
        }(),
        bt = function() {
            function t() {}
            return t.prototype.setContext = function(t, e) {
                this.visitorService = t, this.sessionService = e
            }, t.prototype.getVisitorService = function() {
                return this.visitorService
            }, t.prototype.getSessionService = function() {
                return this.sessionService
            }, t
        }();

    function wt(t) {
        return Pt(t) && ("number" == typeof t || t instanceof Number) && !isNaN(t)
    }

    function At(t) {
        return t === parseInt(t, 10)
    }

    function It(t) {
        return Pt(t) && ("string" == typeof t || t instanceof csString)
    }

    function kt(t) {
        return "object" == typeof t
    }

    function Pt(t) {
        return void 0 !== t
    }

    function Nt(t) {
        return Pt(t) && null !== t
    }

    function Ot(t) {
        return "function" == typeof t
    }

    function Mt(t) {
        return t instanceof Element
    }
    var Lt, Dt, _t, xt, Vt = function() {
            function t() {}
            return t.setStrategy = function(e) {
                t.strategy = e
            }, t.getStrategy = function() {
                return t.strategy
            }, t.debug = function(t, e) {
                void 0 === e && (e = ""), this.strategy.send(t, e, X.debug)
            }, t.warn = function(t, e) {
                void 0 === e && (e = ""), this.strategy.send(t, e, X.warn)
            }, t.error = function(t, e) {
                void 0 === e && (e = ""), this.strategy.send(t, e, X.error)
            }, t.critical = function(t, e) {
                void 0 === e && (e = ""), this.strategy.send(t, e, X.critical)
            }, t.tryToExecute = function(t, e) {
                var i = this;
                return function() {
                    for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                    try {
                        var o = e.apply(void 0, r);
                        return Pt(window.Promise) && o instanceof window.Promise ? o.then((function(t) {
                            return t
                        }), (function(e) {
                            return i.error(e, t)
                        })) : o
                    } catch (e) {
                        try {
                            i.error(e, t)
                        } catch (t) {}
                    }
                }
            }, t
        }(),
        zt = function(t) {
            return function(e, i, r) {
                var n = i.toString(),
                    o = t || "".concat(e.constructor && e.constructor.name, ".").concat(n),
                    s = r.value;
                r.value = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return Vt.tryToExecute(o, s.bind(this)).apply(void 0, t)
                }
            }
        };
    ! function(t) {
        function e(t) {
            var e = new RegExp("(^|;)[ ]*".concat(t, "=([^;]*)")).exec(document.cookie);
            return e ? decodeURIComponent(e[2]) : null
        }

        function i(e, i, n, o, s, a) {
            var c = encodeURIComponent("".concat(i)),
                u = n === t.CURRENT_DOMAIN ? void 0 : n,
                p = r(o),
                l = p ? ";expires=".concat(p.toUTCString()) : "",
                h = Nt(u) ? ";domain=".concat(u) : "",
                d = "".concat(e, "=").concat(c).concat(l).concat(";path=/").concat(h);
            return Pt(s) && s !== _t.NotSet && (d = "".concat(d, ";SameSite=").concat(s)), Pt(a) && a === xt.Yes && (d = "".concat(d, ";Secure")), document.cookie = d, !0
        }

        function r(t) {
            return wt(t) ? new csDate(ct() + t) : t
        }

        function n(t, r) {
            e(t) && i(t, "", r, new csDate(0)), e(t) && i(t, "", r, new csDate(0), _t.None, xt.Yes)
        }
        t.CURRENT_DOMAIN = "CURRENT_DOMAIN", t.get = e, t.set = i, t.toExpireDate = r, t.remove = n, t.isCookiePresent = function() {
            return document.cookie.length > 0
        }, t.getRootDomain = function(t, r) {
            var o = e("_cs_root-domain");
            if (null !== o && "1" !== o) return o;
            for (var s = csString.prototype.split.call(window.location.hostname, "."), a = csArray.prototype.pop.call(s); s.length && (null === o || "1" === o);) i("_cs_root-domain", a = csArray.prototype.join.call([csArray.prototype.pop.call(s), a], "."), a, void 0, t, r), o = e("_cs_root-domain");
            return n("_cs_root-domain", a), a
        }
    }(Lt || (Lt = {})),
    function(t) {
        t.browserIsSafariV12 = function() {
            return window.navigator.vendor && csString.prototype.indexOf.call(window.navigator.vendor, "Apple") > -1 && window.navigator.appVersion && csString.prototype.indexOf.call(window.navigator.appVersion, "Version/12.") > -1
        }
    }(Dt || (Dt = {})),
    function(t) {
        t.None = "None", t.Lax = "Lax", t.NotSet = "X"
    }(_t || (_t = {})),
    function(t) {
        t[t.Yes = 1] = "Yes", t[t.No = 0] = "No"
    }(xt || (xt = {}));
    var qt = function() {
            function t(t, e, i) {
                this.configuration = t, this.urlService = e, this.cookieChecker = i, this.supportsSameSite = !1, this.sameSiteFlag = _t.NotSet, this.secureFlag = xt.No
            }
            return t.prototype.getSameSiteFlag = function() {
                return this.sameSiteFlag
            }, t.prototype.getSecureFlag = function() {
                return this.secureFlag
            }, t.prototype.getDomain = function() {
                return this.domain
            }, t.prototype.getRootDomain = function() {
                return this.rootDomain
            }, t.prototype.init = function() {
                if (!this.configuration.cookielessTrackingEnabled) {
                    var t = this.computeSameSiteFlag(),
                        e = this.computeSecureFlag();
                    this.supportsSameSite = this.checkSameSiteFromContext(t, e), this.supportsSameSite ? (this.sameSiteFlag = t, this.secureFlag = e) : this.configuration.secureCookiesEnabled && "https:" === this.urlService.getUrlProtocol() && (this.secureFlag = xt.Yes), this.rootDomain = this.computeRootDomain(), this.domain = this.computeDomain(this.rootDomain)
                }
            }, t.prototype.checkSameSiteFromContext = function(e, i) {
                return !Dt.browserIsSafariV12() && (Lt.set(t.COOKIE_TEST_FOR_SAME_SITE, "Test same site", t.CURRENT_DOMAIN, void 0, e, i), !!Lt.get(t.COOKIE_TEST_FOR_SAME_SITE) && (Lt.remove(t.COOKIE_TEST_FOR_SAME_SITE, t.CURRENT_DOMAIN), !0))
            }, t.prototype.computeSameSiteFlag = function() {
                return "http:" === this.urlService.getUrlProtocol() ? _t.Lax : this.cookieChecker.isSameSiteNoneSecureNeeded() || this.configuration.crossDomainTracking ? _t.None : _t.Lax
            }, t.prototype.computeSecureFlag = function() {
                return "http:" === this.urlService.getUrlProtocol() ? xt.No : this.configuration.secureCookiesEnabled || this.configuration.crossDomainTracking || this.cookieChecker.isSameSiteNoneSecureNeeded() ? xt.Yes : xt.No
            }, t.prototype.isSameSiteSupported = function() {
                return this.supportsSameSite
            }, t.prototype.set = function(t, e, i) {
                var r = Lt.toExpireDate(i);
                Lt.set(t, e, this.domain, r, this.getSameSiteFlag(), this.getSecureFlag())
            }, t.prototype.get = function(t) {
                var e = new RegExp("(^|;)[ ]*".concat(t, "=([^;]*)")).exec(document.cookie);
                return e ? decodeURIComponent(e[2]) : null
            }, t.prototype.delete = function(t, e) {
                var i = e || this.domain;
                Lt.remove(t, i)
            }, t.prototype.computeRootDomain = function() {
                var t = this.cookieChecker.isSameSiteNoneSecureNeeded() && this.isSameSiteSupported(),
                    e = t ? _t.None : void 0,
                    i = t ? xt.Yes : void 0;
                return Lt.getRootDomain(e, i)
            }, t.prototype.computeDomain = function(t) {
                return this.configuration.allowSubdomains ? t : Lt.CURRENT_DOMAIN
            }, t.CURRENT_DOMAIN = "CURRENT_DOMAIN", t.COOKIE_TEST_FOR_SAME_SITE = "_cs_same_site", t
        }(),
        Ut = function() {
            function t(t, e) {
                this.iframeContext = t, this.configuration = e, this.cookieEnabled = !1, this.useSameSiteNoneSecureCookie = !1
            }
            return t.prototype.init = function() {
                if (!this.configuration.cookielessTrackingEnabled && this.iframeContext.isTopWindowTracker() && "cookie" in document) {
                    if (!this.iframeContext.isInIframeContext() && Lt.isCookiePresent()) return this.cookieEnabled = !0, void(this.useSameSiteNoneSecureCookie = !1);
                    if (Lt.set("_cs_t", "1", Lt.CURRENT_DOMAIN), null !== Lt.get("_cs_t")) return this.cookieEnabled = !0, this.useSameSiteNoneSecureCookie = !1, void Lt.remove("_cs_t", Lt.CURRENT_DOMAIN);
                    Lt.set("_cs_t", "1", Lt.CURRENT_DOMAIN, void 0, _t.None, xt.Yes), null !== Lt.get("_cs_t") && (this.cookieEnabled = !0, this.useSameSiteNoneSecureCookie = !0, Lt.remove("_cs_t", Lt.CURRENT_DOMAIN))
                }
            }, t.prototype.areCookiesEnabled = function() {
                return this.cookieEnabled
            }, t.prototype.isSameSiteNoneSecureNeeded = function() {
                return this.useSameSiteNoneSecureCookie
            }, t
        }();

    function Bt() {
        var t = "CSLocalStorageTest";
        try {
            return localStorage.setItem(t, t), localStorage.getItem(t) !== t ? !1 : (localStorage.removeItem(t), !0)
        } catch (t) {
            return !1
        }
    }
    var Ht = function() {
        function t() {}
        return t.check = function() {
            return void 0 === Object.assign || this.tryObjectAssign()
        }, t.tryObjectAssign = function() {
            try {
                var t = {},
                    e = Object.assign(t, {
                        a: 1
                    }, {
                        b: 2,
                        c: {
                            d: 4
                        }
                    }),
                    i = {
                        a: 1,
                        b: 2,
                        c: {
                            d: 4
                        }
                    };
                return csJSON.stringify(e) === csJSON.stringify(i) && csJSON.stringify(t) === csJSON.stringify(i)
            } catch (t) {
                return !1
            }
        }, t
    }();
    var Ft, Gt, jt, Kt, Wt = function() {
            function t(t, e) {
                this.configuration = t, this.cookieChecker = e
            }
            return t.prototype.canTrack = function() {
                return this.isBrowsingContextSupported() && this.canTrackProject() && this.canUseStorage()
            }, t.prototype.canTrackInIframe = function() {
                return this.isBrowsingContextSupported() && this.canTrackProject()
            }, t.prototype.canUseStorage = function() {
                return this.configuration.cookielessTrackingEnabled ? function() {
                    var t = "CSSessionStorageTest";
                    try {
                        return sessionStorage.setItem(t, t), sessionStorage.getItem(t) !== t ? !1 : (sessionStorage.removeItem(t), !0)
                    } catch (t) {
                        return !1
                    }
                }() && Bt() : this.cookieChecker.areCookiesEnabled() && Bt()
            }, t.prototype.canTrackProject = function() {
                return this.configuration.isProjectActive() && mt(window.location.hostname, this.configuration.hostnames)
            }, t.prototype.isBrowsingContextSupported = function() {
                return !this.isDocPrerendered() && this.isBrowserSupported() && Ht.check()
            }, t.prototype.isDocPrerendered = function() {
                return "visibilityState" in document && "prerender" === document.visibilityState
            }, t.prototype.isBrowserSupported = function() {
                return "pageXOffset" in window && "pageYOffset" in window && "onpagehide" in window && "JSON" in window && "parse" in window.JSON && "stringify" in window.JSON && "addEventListener" in window && "removeEventListener" in window && "Node" in window && "filter" in csArray.prototype && "forEach" in csArray.prototype && "querySelectorAll" in document && "now" in Date && "keys" in Object && "performance" in window && "Map" in window && "Set" in window
            }, t
        }(),
        Yt = function() {
            function t(t, e, i, r, n) {
                this.visitorService = t, this.sessionService = e, this.exclusionService = i, this.customVariablesService = r, this.configuration = n
            }
            return t.prototype.get = function() {
                return {
                    exclusion: this.exclusionService.getAppliedTrackingDraw(),
                    visitor: this.visitorService.getVisitor(),
                    session: this.sessionService.getSession(),
                    cvars: this.customVariablesService.getCustomVariablesSession()
                }
            }, t.prototype.apply = function(t) {
                t && (t.exclusion ? this.exclude() : this.include(t))
            }, t.prototype.exclude = function() {
                this.exclusionService.exclude(this.configuration), this.visitorService.removeVisitor(), this.sessionService.removeSession(), this.customVariablesService.removeCustomVariablesSession()
            }, t.prototype.include = function(t) {
                this.exclusionService.removeExclusion(), this.visitorService.setVisitor(t.visitor), t.session ? this.sessionService.setSession(t.session) : this.sessionService.removeSession(), t.cvars ? this.customVariablesService.setCustomVariableSession(t.cvars) : this.customVariablesService.removeCustomVariablesSession()
            }, t
        }(),
        Xt = /^(([a-z0-9\-])+(\.[0-9]+){6})(\.(None|Lax|X)\.(0|1))?$/,
        Jt = function() {
            function t(t, e, i, r) {
                this.configuration = t, this.cookieService = e, this.crossDomainSingleIframeService = i, this.browserSessionStorage = r
            }
            return t.prototype.get = function() {
                var e;
                return (e = this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.getItem("_cs_id") : this.cookieService.get("_cs_id")) ? t.fromString(e) : null
            }, t.prototype.set = function(e) {
                var i = t.toString(e);
                if (this.configuration.cookielessTrackingEnabled) this.browserSessionStorage.setItem("_cs_id", i);
                else {
                    var r = new csDate(e.expires);
                    this.cookieService.set("_cs_id", i, r), this.crossDomainSingleIframeService.setCookie("_cs_id", i, r)
                }
            }, t.prototype.remove = function() {
                this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.removeItem("_cs_id") : (this.cookieService.delete("_cs_id"), this.crossDomainSingleIframeService.removeCookie("_cs_id"))
            }, t.prototype.handleSubdomainChange = function() {
                if (!this.configuration.cookielessTrackingEnabled) {
                    var t = this.get();
                    t && (this.configuration.allowSubdomains ? this.cookieService.delete("_cs_id", qt.CURRENT_DOMAIN) : this.cookieService.delete("_cs_id", this.cookieService.getRootDomain()), this.set(t))
                }
            }, t.fromString = function(t) {
                var e = csString.prototype.split.call(t, "."),
                    i = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[3],
                    s = e[4],
                    a = e[5],
                    c = e[6];
                return {
                    id: i,
                    creationTimestamp: Number(r),
                    visitsCount: Number(n),
                    hitTimestamp: Number(o),
                    lastVisitTimestamp: Number(s),
                    appliedTrackingDraw: Number(a),
                    expires: Number(c)
                }
            }, t.toString = function(t) {
                return csArray.prototype.join.call([t.id, t.creationTimestamp, t.visitsCount, t.hitTimestamp, t.lastVisitTimestamp, t.appliedTrackingDraw, t.expires], ".")
            }, t.isValidVisitorString = function(t) {
                return Xt.test(t)
            }, t
        }();
    ! function(t) {
        t.REPLAY_RECORDING_DISABLED = "1", t.REPLAY_RECORDING_ENABLED = "3", t.TRIGGER_REPLAY_RECORDING_ENABLED = "5"
    }(Ft || (Ft = {})),
    function(t) {
        t.NOT_RECORDED = "0", t.TEMPORARILY_RECORDED = "T", t.GLOBAL_SAMPLING = "5", t.URL_SAMPLING = "6", t.ETR_SAMPLING = "7"
    }(Gt || (Gt = {})),
    function(t) {
        t.ETR_OFF = "0", t.ETR_ON = "1"
    }(jt || (jt = {})),
    function(t) {
        t.ETR_LEGACY = "0", t.ETR_SESSION = "1", t.ETR_PAGE = "2"
    }(Kt || (Kt = {}));
    var Qt, Zt = /^\d+\.[013567T](\.[01])?(\.\d+)?$/;
    ! function(t) {
        t[t.NOT_FOUND = 0] = "NOT_FOUND", t[t.EXPIRED = 1] = "EXPIRED", t[t.FOUND = 2] = "FOUND"
    }(Qt || (Qt = {}));
    var $t, te = function() {
        function t(t, e, i, r) {
            this.configuration = t, this.cookieService = e, this.crossDomainSingleIframeService = i, this.browserSessionStorage = r, this.cache = null, this.cacheRefreshed = !1
        }
        return t.prototype.get = function(e) {
            var i = this.getRawSession(e);
            return this.isValid(i) ? t.fromString(i) : null
        }, t.prototype.getRawSession = function(e) {
            if (e) {
                var i = this.getRawValueFromStorage();
                return t.removeSessionTimestamp(i)
            }
            var r = this.getFromCache(),
                n = r.sessionString,
                o = r.status,
                s = t.removeSessionTimestamp(n);
            if (o !== Qt.EXPIRED) return s;
            if (this.configuration.cookielessTrackingEnabled) return null;
            var a = this.getRawValueFromStorage();
            if (!a) return null;
            var c = csString.prototype.split.call(a, ".");
            if (!t.isSessionWithTimestampValue(c)) return a;
            var u = c[c.length - 1],
                p = parseInt(u, 10);
            return isNaN(p) || this.refreshCache(p), s
        }, t.prototype.set = function(t, e) {
            void 0 === e && (e = 18e5);
            var i = ct() + e,
                r = this.toString(t);
            r += "".concat(".").concat(i), this.setInCache(r, i), this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.setItem("_cs_s", r) : (this.cookieService.set("_cs_s", r, e), this.crossDomainSingleIframeService.setCookie("_cs_s", r, e))
        }, t.prototype.remove = function() {
            this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.removeItem("_cs_s") : (this.cookieService.delete("_cs_s"), this.crossDomainSingleIframeService.removeCookie("_cs_s")), this.clearCache()
        }, t.prototype.handleSubdomainChange = function() {
            if (!this.configuration.cookielessTrackingEnabled) {
                var t = this.get(!0);
                t && (this.configuration.allowSubdomains ? this.cookieService.delete("_cs_s", qt.CURRENT_DOMAIN) : this.cookieService.delete("_cs_s", this.cookieService.getRootDomain()), this.set(t))
            }
        }, t.prototype.isValid = function(e) {
            return null !== e && t.isValidSessionString(e)
        }, t.prototype.toString = function(t) {
            return csArray.prototype.join.call([t.pageNumber, t.recordingState, t.etrState], ".")
        }, t.prototype.setInCache = function(t, e) {
            this.cache = {
                sessionString: t,
                expires: e
            }
        }, t.prototype.getFromCache = function() {
            return this.cache ? this.cache && ct() <= this.cache.expires ? {
                sessionString: this.cache.sessionString,
                status: Qt.FOUND
            } : {
                sessionString: this.cache.sessionString,
                status: Qt.EXPIRED
            } : {
                sessionString: this.getRawValueFromStorage(),
                status: Qt.NOT_FOUND
            }
        }, t.prototype.clearCache = function() {
            this.cache = null
        }, t.prototype.refreshCache = function(t) {
            this.cache && (this.cache.expires = t, this.cacheRefreshed = !0)
        }, t.prototype.isCacheRefreshed = function() {
            return this.cacheRefreshed
        }, t.prototype.resetCacheRefreshed = function() {
            this.cacheRefreshed = !1
        }, t.prototype.getRawValueFromStorage = function() {
            if (this.configuration.cookielessTrackingEnabled) {
                var t = this.browserSessionStorage.getItem("_cs_s");
                return !t || this.hasExpired(t) ? null : t
            }
            return this.cookieService.get("_cs_s")
        }, t.prototype.hasExpired = function(t) {
            var e = csString.prototype.split.call(t, "."),
                i = parseInt(e[e.length - 1], 10);
            return !isNaN(i) && ct() > i
        }, t.isSessionWithTimestampValue = function(t) {
            return 13 === t[t.length - 1].length
        }, t.removeSessionTimestamp = function(e) {
            if (!e) return null;
            var i = csString.prototype.split.call(e, ".");
            return t.isSessionWithTimestampValue(i) ? csArray.prototype.join.call(csArray.prototype.slice.call(i, 0, -1), ".") : e
        }, t.fromRawString = function(e) {
            var i = t.removeSessionTimestamp(e);
            return null !== i ? t.fromString(i) : null
        }, t.fromString = function(t) {
            var e = csString.prototype.split.call(t, "."),
                i = e[0],
                r = e[1],
                n = e[2];
            return {
                recordingState: r,
                etrState: null != n ? n : jt.ETR_OFF,
                pageNumber: parseInt(i, 10)
            }
        }, t.isValidSessionString = function(t) {
            return Zt.test(t)
        }, t
    }();
    ($t || ($t = {})).fromRaw = function(t) {
        return {
            exclusion: Number(t._cs_ex) || 0,
            visitor: t._cs_id ? Jt.fromString(t._cs_id) : null,
            session: t._cs_s ? te.fromRawString(t._cs_s) : null,
            cvars: t._cs_cvars ? window.JSON.parse(t._cs_cvars) : null
        }
    };
    var ee, ie = /^[0-9]+$/,
        re = function() {
            function t(t, e, i, r) {
                this.configuration = t, this.cookieService = e, this.crossDomainSingleIframeService = i, this.browserSessionStorage = r
            }
            return t.prototype.get = function() {
                return this.configuration.cookielessTrackingEnabled ? Number(this.browserSessionStorage.getItem("_cs_ex")) : Number(this.cookieService.get("_cs_ex"))
            }, t.prototype.set = function(t) {
                this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.setItem("_cs_ex", t) : (this.cookieService.set("_cs_ex", t, 2592e6), this.crossDomainSingleIframeService.setCookie("_cs_ex", t, 2592e6))
            }, t.prototype.remove = function() {
                this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.removeItem("_cs_ex") : (this.cookieService.delete("_cs_ex"), this.crossDomainSingleIframeService.removeCookie("_cs_ex"))
            }, t.isValidExclusionString = function(t) {
                return ie.test(t)
            }, t
        }(),
        ne = function() {
            function t(t, e, i, r) {
                this.configuration = t, this.cookieService = e, this.crossDomainSingleIframeService = i, this.browserSessionStorage = r
            }
            return t.prototype.get = function() {
                return this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.getItem("_cs_cvars") : this.cookieService.get("_cs_cvars")
            }, t.prototype.set = function(t) {
                this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.setItem("_cs_cvars", t) : (this.cookieService.set("_cs_cvars", t), this.crossDomainSingleIframeService.setCookie("_cs_cvars", t))
            }, t.prototype.remove = function() {
                this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.removeItem("_cs_cvars") : (this.cookieService.delete("_cs_cvars"), this.crossDomainSingleIframeService.removeCookie("_cs_cvars"))
            }, t.isValidCustomVarString = function(t) {
                return "string" == typeof t
            }, t
        }();
    ! function(t) {
        function e(t) {
            var e = ["_cs_ex", "_cs_id", "_cs_s", "_cs_cvars"];
            return csArray.prototype.every.call(Object.keys(t), (function(t) {
                return csArray.prototype.indexOf.call(e, t) >= 0
            }))
        }
        t.isRawDomainState = e, t.isValid = function(t) {
            return !!e(t) && ((!t._cs_id || Jt.isValidVisitorString(t._cs_id)) && (!t._cs_s || te.isValidSessionString(t._cs_s)) && (!t._cs_ex || re.isValidExclusionString(t._cs_ex)) && (!t._cs_cvars || ne.isValidCustomVarString(t._cs_cvars)))
        }
    }(ee || (ee = {}));
    var oe, se, ae = function() {
            function t(t, e) {
                this.xdframeOpener = t, this.location = e
            }
            return t.prototype.retrieve = function(e, i) {
                var r = this;
                this.callback = i, this.retrievedStates = [], this.xdframeOrigins = csArray.prototype.map.call(csArray.prototype.filter.call(e, (function(t) {
                    return r.isNotCurrentHostname(t)
                })), t.getXdframeOrigin), this.xdframeOpener.onMessage((function(t) {
                    r.handleXdframeMessage(t)
                })), this.xdframeOpener.onTimeout((function() {
                    r.handleTimeout()
                })), this.xdframeOpener.start(), csArray.prototype.forEach.call(csArray.prototype.map.call(this.xdframeOrigins, t.getXdframeUrl), (function(t) {
                    return r.xdframeOpener.open(t)
                }))
            }, t.prototype.handleXdframeMessage = function(t) {
                if (this.isXdframeMessage(t)) {
                    var e = t.data;
                    if (!ee.isValid(e)) throw this.xdframeOpener.stop(), "Invalid domain state: ".concat(csJSON.stringify(t.data), " from ").concat(t.origin);
                    csArray.prototype.push.call(this.retrievedStates, e)
                }
                this.allMessagesAreIn() && (this.xdframeOpener.stop(), this.callback(csArray.prototype.map.call(this.retrievedStates, $t.fromRaw)))
            }, t.prototype.handleTimeout = function() {
                Vt.warn("xdframe: all messages not received")
            }, t.prototype.isXdframeMessage = function(t) {
                return csArray.prototype.indexOf.call(this.xdframeOrigins, t.origin) > -1
            }, t.prototype.allMessagesAreIn = function() {
                return this.retrievedStates.length === this.xdframeOrigins.length
            }, t.prototype.isNotCurrentHostname = function(t) {
                return !K(this.location.hostname, t)
            }, t.getXdframeOrigin = function(t) {
                return "https://csxd.".concat(t)
            }, t.getXdframeUrl = function(t) {
                return "".concat(t, "/xdframe-").concat("1.0.0", ".html")
            }, t
        }(),
        ce = function() {
            function t() {
                var t = this;
                this.ALL_MESSAGES_RECEIVED_TIMEOUT = 3e3, this.scopedHandleMessage = function(e) {
                    t.handleMessage(e)
                }
            }
            return t.prototype.onMessage = function(t) {
                this.onMessageCallback = t
            }, t.prototype.onTimeout = function(t) {
                this.onTimeoutCallback = t
            }, t.prototype.start = function() {
                var t = this;
                window.addEventListener("message", this.scopedHandleMessage), this.timeoutId = window.setTimeout((function() {
                    t.onTimeoutCallback()
                }), this.ALL_MESSAGES_RECEIVED_TIMEOUT)
            }, t.prototype.open = function(t) {
                var e = document.createElement("iframe");
                return e.src = t, e.setAttribute("hidden", ""), e.setAttribute("title", "Intentionally blank"), document.body.appendChild(e), e
            }, t.prototype.stop = function() {
                window.removeEventListener("message", this.scopedHandleMessage), window.clearTimeout(this.timeoutId), this.onMessageCallback = G, this.onTimeoutCallback = G
            }, t.prototype.handleMessage = function(t) {
                this.onMessageCallback(t)
            }, q([zt("XdframeMessage")], t.prototype, "handleMessage", null), t
        }(),
        ue = function() {
            function t() {
                this.xhr = new XMLHttpRequest
            }
            return t.prototype.send = function(t) {
                var e = this,
                    i = t.path,
                    r = t.domainUri,
                    n = t.query,
                    o = t.headers,
                    s = t.method,
                    a = t.body,
                    c = t.onLoadCallback,
                    u = t.onErrorCallback,
                    p = t.timeout,
                    l = t.onTimeoutCallback,
                    h = r;
                if (i && (h = csString.prototype.concat.call(h, "/", i)), n && (h = csString.prototype.concat.call(h, "?", n)), this.xhr.open(s, h, !0), o)
                    for (var d = 0, f = o; d < f.length; d++) {
                        var y = f[d];
                        this.xhr.setRequestHeader(y.name, y.value)
                    }
                c && (this.xhr.onload = function() {
                    var t = {
                        responseText: e.xhr.responseText,
                        status: e.xhr.status
                    };
                    c(t)
                }), u && (this.xhr.onerror = function() {
                    u()
                }), p && l && (this.xhr.timeout = p, this.xhr.ontimeout = function() {
                    l()
                }), this.xhr.send(a)
            }, t.prototype.abort = function() {
                this.xhr.abort()
            }, t
        }(),
        pe = function() {
            function t() {}
            return t.prototype.send = function(t) {
                return U(this, void 0, void 0, (function() {
                    var e, i, r, n, o, s, a, c, u, p, l, h, d, f, y, v, m, g, S, E, C, T = this;
                    return B(this, (function(R) {
                        switch (R.label) {
                            case 0:
                                if (e = t.path, i = t.domainUri, r = t.query, n = t.headers, o = t.method, s = t.body, a = t.onLoadCallback, c = t.onErrorCallback, u = t.timeout, p = t.onTimeoutCallback, this.abortController = new AbortController, l = {
                                        method: o
                                    }, h = {
                                        hasTimedOut: !1
                                    }, u && (d = window.setTimeout((function() {
                                        T.abortRequestAfterTimeout(h)
                                    }), u), l.signal = this.abortController.signal), n) {
                                    for (f = {}, y = 0, v = n; y < v.length; y++) m = v[y], f[m.name] = m.value;
                                    l.headers = f
                                }
                                s && (l.body = s), g = i, e && (g = csString.prototype.concat.call(g, "/", e)), r && (g = csString.prototype.concat.call(g, "?", r)), R.label = 1;
                            case 1:
                                return R.trys.push([1, 5, , 6]), [4, fetch(g, l)];
                            case 2:
                                return S = R.sent(), d && window.clearTimeout(d), a ? [4, S.text()] : [3, 4];
                            case 3:
                                E = R.sent(), C = {
                                    responseText: E,
                                    status: S.status
                                }, a(C), R.label = 4;
                            case 4:
                                return [3, 6];
                            case 5:
                                return R.sent(), d && window.clearTimeout(d), h.hasTimedOut && p ? p() : !this.abortController.signal.aborted && c && c(), [3, 6];
                            case 6:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.abort = function() {
                this.abortController && this.abortController.abort()
            }, t.prototype.abortRequestAfterTimeout = function(t) {
                this.abortController.abort(), t.hasTimedOut = !0
            }, t
        }(),
        le = function() {
            function t() {
                this.isFetchSupported() ? this.httpSendStrategy = new pe : this.httpSendStrategy = new ue
            }
            return t.prototype.send = function(t) {
                this.httpSendStrategy.send(t)
            }, t.prototype.abort = function() {
                this.httpSendStrategy.abort()
            }, t.prototype.isFetchSupported = function() {
                return "function" == typeof window.fetch && !!window.AbortController
            }, t
        }(),
        he = function(t) {
            function e(e, i) {
                var r = t.call(this, e, i) || this;
                return r.afterRequestDataRetrievedCallbacks = [], r.requestHeaders = [], r.timeout = 0, r.httpSenderContext = new le, r
            }
            return V(e, t), e.prototype.setCompressionOptions = function(t, e) {
                this.compressor = t, this.compressionOutputType = e
            }, e.prototype.setRequestPayloadProvider = function(t) {
                this.requestPayloadProvider = t
            }, e.prototype.setRequestHeader = function(t) {
                csArray.prototype.push.call(this.requestHeaders, t)
            }, e.prototype.afterProvidersCalled = function(t) {
                csArray.prototype.push.call(this.afterRequestDataRetrievedCallbacks, t)
            }, e.prototype.onLoad = function(t) {
                this.onLoadCallback = t
            }, e.prototype.onError = function(t) {
                this.onErrorCallback = t
            }, e.prototype.onTimeout = function(t, e) {
                this.timeout = t, this.onTimeoutCallback = e
            }, e.prototype.send = function(t) {
                var e = this;
                void 0 === t && (t = !0), csArray.prototype.forEach.call(this.beforeRequestCallbacks, (function(t) {
                    return t()
                }));
                var i = this.retrieveParameters(),
                    r = this.retrievePayload();
                csArray.prototype.forEach.call(this.afterRequestDataRetrievedCallbacks, (function(t) {
                    return t()
                })), t && this.compressor && this.compressionOutputType && "string" == typeof r ? this.compressor.compress(this.compressionOutputType, r, (function(t) {
                    e.doSend(i, t)
                })) : this.doSend(i, r)
            }, e.prototype.abort = function() {
                this.httpSenderContext.abort()
            }, e.prototype.getCompressionOutputType = function() {
                return this.compressionOutputType
            }, e.prototype.retrievePayload = function() {
                return this.requestPayloadProvider ? this.requestPayloadProvider.getRequestPayload() : ""
            }, e.prototype.doSend = function(t, e) {
                var i, r, n = this,
                    o = null !== (i = t.enc) && void 0 !== i ? i : null === (r = this.compressor) || void 0 === r ? void 0 : r.algorithm;
                t = z(z({}, t), {
                    enc: null != o ? o : "raw"
                });
                var s = J.toQuery(t);
                this.httpSenderContext.send({
                    method: "POST",
                    domainUri: this.domainUri,
                    path: this.path,
                    headers: this.requestHeaders,
                    query: s,
                    body: e,
                    onLoadCallback: this.onLoadCallback,
                    onErrorCallback: function() {
                        n.onErrorCallback && n.onErrorCallback(t, e)
                    },
                    timeout: this.timeout,
                    onTimeoutCallback: this.onTimeoutCallback
                }), csArray.prototype.forEach.call(this.afterRequestCallbacks, (function(e) {
                    return e(t)
                }))
            }, q([zt("POST request")], e.prototype, "doSend", null), e
        }(tt);
    ! function(t) {
        t[t.MUTATION_INSERT = 1] = "MUTATION_INSERT", t[t.MUTATION_REMOVE = 2] = "MUTATION_REMOVE", t[t.MUTATION_ATTRIBUTE = 3] = "MUTATION_ATTRIBUTE", t[t.MUTATION_CHARACTER_DATA = 4] = "MUTATION_CHARACTER_DATA", t[t.INITIAL_DOM = 5] = "INITIAL_DOM", t[t.SCROLL = 6] = "SCROLL", t[t.CLICK = 8] = "CLICK", t[t.RESIZE = 9] = "RESIZE", t[t.INPUT_CHECKABLE = 10] = "INPUT_CHECKABLE", t[t.INPUT_SELECT = 11] = "INPUT_SELECT", t[t.INPUT_TEXT = 12] = "INPUT_TEXT", t[t.HASH_CHANGE = 13] = "HASH_CHANGE", t[t.CONSENT_GRANTED = 14] = "CONSENT_GRANTED", t[t.CONSENT_WITHDRAWN = 15] = "CONSENT_WITHDRAWN", t[t.MOUSE_OVER = 16] = "MOUSE_OVER", t[t.VISIBILITY_CHANGE = 17] = "VISIBILITY_CHANGE", t[t.STYLESHEET_RULE_INSERT = 18] = "STYLESHEET_RULE_INSERT", t[t.STATIC_RESOURCE_URL = 19] = "STATIC_RESOURCE_URL", t[t.PERFORMANCE_TIMINGS = 20] = "PERFORMANCE_TIMINGS", t[t.ATTACH_SHADOW = 22] = "ATTACH_SHADOW", t[t.STYLESHEET_CSS_TEXT_UPDATE = 23] = "STYLESHEET_CSS_TEXT_UPDATE", t[t.JAVASCRIPT_ERROR = 26] = "JAVASCRIPT_ERROR", t[t.PAGE_EVENT = 27] = "PAGE_EVENT", t[t.API_ERROR = 28] = "API_ERROR", t[t.TEXT_VISIBILITY = 29] = "TEXT_VISIBILITY", t[t.MUTATION_ENCRYPTED_CHARACTER_DATA = 30] = "MUTATION_ENCRYPTED_CHARACTER_DATA", t[t.INPUT_ENCRYPTED_TEXT = 31] = "INPUT_ENCRYPTED_TEXT", t[t.KEY_DOWN = 32] = "KEY_DOWN", t[t.KEY_UP = 33] = "KEY_UP", t[t.CLIPBOARD_COMMAND = 34] = "CLIPBOARD_COMMAND", t[t.STYLESHEET_RULE_DELETE = 37] = "STYLESHEET_RULE_DELETE", t[t.USER_IDENTIFIER = 38] = "USER_IDENTIFIER", t[t.TOUCH_START = 41] = "TOUCH_START", t[t.TOUCH_MOVE = 42] = "TOUCH_MOVE", t[t.TOUCH_END = 43] = "TOUCH_END", t[t.GESTURE_RECOGNITION = 44] = "GESTURE_RECOGNITION", t[t.POINTER_DOWN = 47] = "POINTER_DOWN", t[t.POINTER_MOVE = 48] = "POINTER_MOVE", t[t.POINTER_UP = 49] = "POINTER_UP", t[t.CUSTOM_ERROR = 50] = "CUSTOM_ERROR", t[t.CUSTOM_ELEMENT_REGISTRATION = 54] = "CUSTOM_ELEMENT_REGISTRATION"
    }(oe || (oe = {})),
    function(t) {
        t[t.SWIPE = 0] = "SWIPE", t[t.PINCH_IN = 1] = "PINCH_IN", t[t.PINCH_OUT = 2] = "PINCH_OUT", t[t.LONG_PRESS = 3] = "LONG_PRESS", t[t.TAP = 4] = "TAP", t[t.DOUBLE_TAP = 5] = "DOUBLE_TAP"
    }(se || (se = {}));

    function de(t, e) {
        void 0 === e && (e = !0), t.boundElement.addEventListener(t.type, t.listener, e)
    }

    function fe(t, e) {
        void 0 === e && (e = !0), t.boundElement.removeEventListener(t.type, t.listener, e)
    }
    var ye, ve, me = function() {
        function t(t, e, i, r, n, o, s, a, c, u) {
            this.nodeIdentifier = t, this.projectConfiguration = e, this.asymmetricEncryption = i, this.symmetricEncryption = r, this.textNodesBuffer = n, this.textNodesMutationsBuffer = o, this.inputNodesBuffer = s, this.userIdentifierBuffer = a, this.apiErrorsBuffer = c, this.compressor = u, this.headerMaxSize = 8e3, this.requestBodyMaxSize = 64e3, this.responseBodyMaxSize = 2e3, this.queryParamMaxSize = 2e3, this.suppressedMessageMarker = "…", this.publicKey = null, this.importKeyDone = !1
        }
        return t.prototype.onTextNodeToEncrypt = function(t) {
            this.onTextNodeToEncryptCallback = t
        }, t.prototype.onInputNodeToEncrypt = function(t) {
            this.onInputNodeToEncryptCallback = t
        }, t.prototype.onUserIdentifierToEncrypt = function(t) {
            this.onUserIdentifierToEncryptCallback = t
        }, t.prototype.onApiErrorToEncrypt = function(t) {
            this.onApiErrorToEncryptCallback = t
        }, t.prototype.init = function() {
            var t = this;
            this.isFeatureSupported() && (this.textEncoder = new TextEncoder, this.textNodesBuffer.onSerializeData((function(e) {
                return t.serializeTextNodeToEncrypt(e)
            })), this.textNodesMutationsBuffer.onSerializeData((function(e) {
                return t.serializeTextNodeMutationToEncrypt(e)
            })), this.inputNodesBuffer.onSerializeData((function(e) {
                return t.serializeInputNodeToEncrypt(e)
            })), this.userIdentifierBuffer.onSerializeData((function(e) {
                return t.serializeUserIdentifierToEncrypt(e)
            })), this.apiErrorsBuffer.onSerializeData((function(e) {
                return t.encryptAndProcessApiError(e)
            })), this.importPublicKey(this.projectConfiguration.encryptionPublicKey))
        }, t.prototype.importPublicKey = function(t) {
            return U(this, void 0, void 0, (function() {
                var e;
                return B(this, (function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, this.asymmetricEncryption.importKey(t)];
                        case 1:
                            return e = i.sent(), this.importKeyDone = !0, e ? (this.publicKey = e, this.textNodesBuffer.serializeDataFromBuffer(), this.userIdentifierBuffer.serializeDataFromBuffer()) : (this.textNodesBuffer.clear(), this.userIdentifierBuffer.clear(), Vt.warn("Fail to import public key '".concat(t, "'"))), this.textNodesMutationsBuffer.serializeDataFromBuffer(), this.inputNodesBuffer.serializeDataFromBuffer(), this.apiErrorsBuffer.serializeDataFromBuffer(), [2]
                    }
                }))
            }))
        }, t.prototype.registerTextNodeToEncrypt = function(t) {
            this.isFeatureSupported() && (this.importKeyDone ? this.serializeTextNodeToEncrypt(t) : this.textNodesBuffer.addData(t))
        }, t.prototype.registerTextNodeMutationToEncrypt = function(t) {
            this.isFeatureSupported() && (this.importKeyDone ? this.serializeTextNodeMutationToEncrypt(t) : this.textNodesMutationsBuffer.addData(t))
        }, t.prototype.registerInputNodeToEncrypt = function(t) {
            this.isFeatureSupported() && (this.importKeyDone ? this.serializeInputNodeToEncrypt(t) : this.inputNodesBuffer.addData(t))
        }, t.prototype.registerUserIdentifierToEncrypt = function(t) {
            this.isFeatureSupported() && (this.importKeyDone ? this.serializeUserIdentifierToEncrypt(t) : this.userIdentifierBuffer.addData(t))
        }, t.prototype.registerApiErrorToEncrypt = function(t) {
            this.isFeatureSupported() ? this.importKeyDone ? this.encryptAndProcessApiError(t) : this.apiErrorsBuffer.addData(t) : this.fallbackToApiError(t)
        }, t.prototype.isFeatureSupported = function() {
            return this.projectConfiguration.encryptionEnabled && !!this.projectConfiguration.encryptionPublicKey && this.projectConfiguration.encryptionPublicKeyId > 0 && this.asymmetricEncryption.isSupported() && this.symmetricEncryption.isSupported()
        }, t.prototype.serializeTextNodeToEncrypt = function(t) {
            var e = this,
                i = t.textNode,
                r = this.nodeIdentifier.getId(i);
            if (r) {
                if (this.publicKey) {
                    var n = z(z({}, t), {
                        targetId: r,
                        date: ct()
                    });
                    this.encryptAndProcessEvent(n, (function(t) {
                        return t.textNode.data
                    }), (function() {
                        return Vt.warn("Fail to encrypt text node data")
                    }), (function(t, i) {
                        return e.processEncryptedTextMutation(t, i)
                    }))
                }
            } else Vt.warn("serializeTextNodeToEncrypt: node without identifier")
        }, t.prototype.serializeTextNodeMutationToEncrypt = function(t) {
            var e = this;
            if (!this.publicKey) return this.fallbackToCharacterData(t);
            this.encryptAndProcessEvent(t, (function(t) {
                return t.textNode.data
            }), (function() {
                Vt.warn("Fail to encrypt text node data - Text node processed as MUTATION_CHARACTER_DATA"), e.fallbackToCharacterData(t)
            }), (function(t, i) {
                return e.processEncryptedTextMutation(t, i)
            }))
        }, t.prototype.serializeInputNodeToEncrypt = function(t) {
            var e = this;
            if (!this.publicKey) return this.fallbackToInputText(t);
            this.encryptAndProcessEvent(t, (function(t) {
                return t.targetValue
            }), (function() {
                Vt.warn("Fail to encrypt input data - Input node processed as INPUT_TEXT"), e.fallbackToInputText(t)
            }), (function(t, i) {
                return e.processEncryptedInputText(t, i)
            }))
        }, t.prototype.serializeUserIdentifierToEncrypt = function(t) {
            var e = this;
            this.publicKey && this.encryptAndProcessEvent(t, (function(t) {
                return t.userIdentifier
            }), (function() {
                Vt.warn("Fail to encrypt userIdentifier")
            }), (function(t, i) {
                return e.processEncryptedUserIdentifier(t, i)
            }))
        }, t.prototype.encryptAndProcessEvent = function(t, e, i, r) {
            return U(this, void 0, void 0, (function() {
                var n, o;
                return B(this, (function(s) {
                    switch (s.label) {
                        case 0:
                            return n = e(t), [4, this.asymmetricEncryption.encrypt({
                                publicKey: this.publicKey
                            }, n)];
                        case 1:
                            return (o = s.sent()) ? (r(t, o), [2]) : (i(t), [2])
                    }
                }))
            }))
        }, t.prototype.fallbackToCharacterData = function(t) {
            var e = t.targetId,
                i = t.serializedTextData,
                r = t.date;
            this.onTextNodeToEncryptCallback({
                date: r,
                args: [e, i],
                type: oe.MUTATION_CHARACTER_DATA
            })
        }, t.prototype.fallbackToInputText = function(t) {
            var e = t.targetId,
                i = t.targetValue,
                r = t.date;
            this.onInputNodeToEncryptCallback({
                date: r,
                args: [e, csString.prototype.replace.call(i, /\S/g, "•")],
                type: oe.INPUT_TEXT
            })
        }, t.prototype.processEncryptedTextMutation = function(t, e) {
            var i = t.targetId,
                r = t.serializedTextData,
                n = t.date;
            this.onTextNodeToEncryptCallback({
                date: n,
                args: [i, r, e, this.projectConfiguration.encryptionPublicKeyId],
                type: oe.MUTATION_ENCRYPTED_CHARACTER_DATA
            })
        }, t.prototype.processEncryptedInputText = function(t, e) {
            var i = t.targetId,
                r = t.targetValue,
                n = t.date;
            this.onInputNodeToEncryptCallback({
                date: n,
                args: [i, csString.prototype.replace.call(r, /\S/g, "•"), e, this.projectConfiguration.encryptionPublicKeyId],
                type: oe.INPUT_ENCRYPTED_TEXT
            })
        }, t.prototype.processEncryptedUserIdentifier = function(t, e) {
            var i = {
                type: oe.USER_IDENTIFIER,
                args: [e, t.keyId],
                date: t.date
            };
            this.onUserIdentifierToEncryptCallback(i)
        }, t.prototype.encryptAndProcessApiError = function(t) {
            return U(this, void 0, void 0, (function() {
                var e, i, r, n, o, s, a, c, u, p, l;
                return B(this, (function(h) {
                    switch (h.label) {
                        case 0:
                            return this.publicKey ? [4, this.symmetricEncryption.generateEncryptionKey()] : (this.fallbackToApiError(t), [2]);
                        case 1:
                            if (e = h.sent(), i = this.symmetricEncryption.generateInitializationVector(), null === e || null === i) return this.fallbackToApiError(t), [2];
                            h.label = 2;
                        case 2:
                            return h.trys.push([2, 19, , 20]), t.customRequestHeaders ? this.sizeWithinLimit(t.customRequestHeaders, this.headerMaxSize) ? [3, 3] : (t.customRequestHeaders = "", [3, 5]) : [3, 5];
                        case 3:
                            return r = t, [4, this.symmetricEncrypt(e, i, t.customRequestHeaders)];
                        case 4:
                            r.customRequestHeaders = h.sent(), h.label = 5;
                        case 5:
                            return t.customResponseHeaders ? this.sizeWithinLimit(t.customResponseHeaders, this.headerMaxSize) ? [3, 6] : (t.customResponseHeaders = "", [3, 8]) : [3, 8];
                        case 6:
                            return n = t, [4, this.symmetricEncrypt(e, i, t.customResponseHeaders)];
                        case 7:
                            n.customResponseHeaders = h.sent(), h.label = 8;
                        case 8:
                            return t.queryParameters ? this.sizeWithinLimit(t.queryParameters, this.queryParamMaxSize) ? [3, 9] : (t.queryParameters = this.suppressedMessageMarker, [3, 11]) : [3, 11];
                        case 9:
                            return o = this.compressor.compressSync(t.queryParameters), s = t, [4, this.symmetricEncrypt(e, i, o)];
                        case 10:
                            s.queryParameters = h.sent(), h.label = 11;
                        case 11:
                            return t.requestBody ? this.sizeWithinLimit(t.requestBody, this.requestBodyMaxSize) ? [3, 12] : (t.requestBody = this.suppressedMessageMarker, [3, 14]) : [3, 14];
                        case 12:
                            return a = this.compressor.compressSync(t.requestBody), c = t, [4, this.symmetricEncrypt(e, i, a)];
                        case 13:
                            c.requestBody = h.sent(), h.label = 14;
                        case 14:
                            return t.responseBody ? this.sizeWithinLimit(t.responseBody, this.responseBodyMaxSize) ? [3, 15] : (t.responseBody = this.suppressedMessageMarker, [3, 17]) : [3, 17];
                        case 15:
                            return u = this.compressor.compressSync(t.responseBody), p = t, [4, this.symmetricEncrypt(e, i, u)];
                        case 16:
                            p.responseBody = h.sent(), h.label = 17;
                        case 17:
                            return l = t, [4, this.encryptSecret(e, this.publicKey)];
                        case 18:
                            return l.secret = h.sent(), [3, 20];
                        case 19:
                            return h.sent(), this.fallbackToApiError(t), [2];
                        case 20:
                            return t.initializationVector = this.symmetricEncryption.exportInitializationVector(i), t.encryptionKeyId = this.projectConfiguration.encryptionPublicKeyId, this.onApiErrorToEncryptCallback(t), [2]
                    }
                }))
            }))
        }, t.prototype.sizeWithinLimit = function(t, e) {
            return this.textEncoder.encode(t).byteLength <= e
        }, t.prototype.fallbackToApiError = function(t) {
            t.customRequestHeaders = "", t.customResponseHeaders = "", t.queryParameters = "", t.requestBody = "", t.responseBody = "", this.onApiErrorToEncryptCallback(t)
        }, t.prototype.symmetricEncrypt = function(t, e, i) {
            return U(this, void 0, void 0, (function() {
                var r;
                return B(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, this.symmetricEncryption.encrypt({
                                encryptionKey: t,
                                initializationVector: e
                            }, i)];
                        case 1:
                            if (!(r = n.sent())) throw new Error("Encryption failed");
                            return [2, r]
                    }
                }))
            }))
        }, t.prototype.encryptSecret = function(t, e) {
            return U(this, void 0, void 0, (function() {
                var i, r;
                return B(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, this.symmetricEncryption.exportSecret(t)];
                        case 1:
                            if (!(i = n.sent())) throw new Error("Export secret failed");
                            return [4, this.asymmetricEncryption.encrypt({
                                publicKey: e
                            }, i)];
                        case 2:
                            if (!(r = n.sent())) throw new Error("Encrypt secret failed");
                            return [2, r]
                    }
                }))
            }))
        }, t
    }();

    function ge(t) {
        var e = csEventtarget.apply(t);
        return e && f(e) && csElementshadowRoot.apply(e) && t.composedPath ? t.__csOriginalTarget || t.composedPath()[0] : e
    }

    function Se() {
        return function(t, e, i) {
            var r = i.value;
            return r && (i.value = function(t) {
                if (ge(t) === csEventtarget.apply(t)) return r.call(this, t)
            }), i
        }
    }! function(t) {
        t[t.SPACE = 0] = "SPACE", t[t.ENTER = 1] = "ENTER", t[t.BACKSPACE = 2] = "BACKSPACE", t[t.DELETE = 3] = "DELETE", t[t.ARROWUP = 4] = "ARROWUP", t[t.ARROWDOWN = 5] = "ARROWDOWN", t[t.ARROWLEFT = 6] = "ARROWLEFT", t[t.ARROWRIGHT = 7] = "ARROWRIGHT", t[t.CAPSLOCK = 8] = "CAPSLOCK", t[t.SHIFT = 9] = "SHIFT", t[t.TAB = 10] = "TAB", t[t.ALPHANUMERICAL = 11] = "ALPHANUMERICAL", t[t.ESCAPE = 12] = "ESCAPE", t[t.END = 13] = "END", t[t.ALT = 14] = "ALT", t[t.CTRL = 15] = "CTRL", t[t.META = 16] = "META"
    }(ye || (ye = {})),
    function(t) {
        t[t.COPY = 0] = "COPY", t[t.CUT = 1] = "CUT", t[t.PASTE = 2] = "PASTE"
    }(ve || (ve = {}));
    var Ee = function() {
        function t(e, i, r, n) {
            var o = this;
            this.selector = e, this.nodeIdentifier = i, this.sensitiveContentService = r, this.encryptionService = n, this.documents = [], this.onEventCallbacks = [], this.eventHandlers = [{
                type: "change",
                listener: this.selector.on(t.whiteListedCheckableInputsSelector, (function(t) {
                    return o.inputCheckableListener(csEventtarget.apply(t))
                }))
            }, {
                type: "change",
                listener: this.selector.on("select", (function(t) {
                    return o.inputSelectListener(csEventtarget.apply(t))
                }))
            }, {
                type: "keyup",
                listener: this.selector.on(t.whiteListedTextInputSelector, (function(t) {
                    return o.inputTextListener(csEventtarget.apply(t))
                }))
            }, {
                type: "change",
                listener: this.selector.on(t.whiteListedNumberInputsSelector, (function(t) {
                    return o.inputTextListener(csEventtarget.apply(t))
                }))
            }, {
                type: "keyup",
                listener: this.selector.on(t.whiteListedNumberInputsSelector, (function(t) {
                    return o.inputTextListener(csEventtarget.apply(t))
                }))
            }, {
                type: "scroll",
                listener: function(t) {
                    return o.scrollListener(csEventtarget.apply(t))
                }
            }, {
                type: "mouseover",
                listener: function(t) {
                    return o.mouseOverListener(t)
                }
            }, {
                type: "click",
                listener: function(t) {
                    return o.clickListener(t)
                }
            }, {
                type: "keyup",
                listener: function(t) {
                    return o.keyUpListener(t)
                }
            }, {
                type: "keydown",
                listener: function(t) {
                    return o.keyDownListener(t)
                }
            }, {
                type: "paste",
                listener: function(t) {
                    return o.pasteListener(t)
                }
            }, {
                type: "cut",
                listener: function(t) {
                    return o.cutListener(t)
                }
            }, {
                type: "copy",
                listener: function(t) {
                    return o.copyListener(t)
                }
            }], this.pointerEventHandlers = [{
                type: "pointerup",
                listener: function(t) {
                    return o.pointerUpListener(t)
                }
            }, {
                type: "pointermove",
                listener: function(t) {
                    return o.pointerMoveListener(t)
                }
            }, {
                type: "pointerdown",
                listener: function(t) {
                    return o.pointerDownListener(t)
                }
            }], this.touchEventHandlers = [{
                type: "touchstart",
                listener: function(t) {
                    return o.touchStartListener(t)
                }
            }, {
                type: "touchmove",
                listener: function(t) {
                    return o.touchMoveListener(t)
                }
            }, {
                type: "touchend",
                listener: function(t) {
                    return o.touchEndListener(t)
                }
            }]
        }
        return t.prototype.init = function() {
            this.initTouchEventHandlers(), this.initPointerEventHandlers(), this.initKeyStrokesMap(), this.initSubscribers(), this.encryptionService.onInputNodeToEncrypt(this.triggerCallbacks.bind(this))
        }, t.prototype.initSubscribers = function() {
            var t = this;
            this.nodeIdentifier.onDocumentIdentified((function(e) {
                t.bindHandlers(e)
            }))
        }, t.prototype.onEvent = function(t) {
            csArray.prototype.push.call(this.onEventCallbacks, t)
        }, t.prototype.triggerCallbacks = function(t) {
            csArray.prototype.forEach.call(this.onEventCallbacks, (function(e) {
                return e(t)
            }))
        }, t.prototype.start = function() {
            this.triggerInitialEvents()
        }, t.prototype.stop = function() {
            this.unbindAllHandlers()
        }, t.prototype.initPointerEventHandlers = function() {
            var t;
            this.arePointerEventsSupported() && (t = csArray.prototype.push).call.apply(t, H([this.eventHandlers], this.pointerEventHandlers, !1))
        }, t.prototype.initTouchEventHandlers = function() {
            var t;
            this.areTouchEventsSupported() && (t = csArray.prototype.push).call.apply(t, H([this.eventHandlers], this.touchEventHandlers, !1))
        }, t.prototype.bindHandlers = function(t) {
            -1 === csArray.prototype.indexOf.call(this.documents, t) && (csArray.prototype.push.call(this.documents, t), csArray.prototype.forEach.call(this.eventHandlers, (function(e) {
                return de(z({
                    boundElement: t
                }, e))
            })))
        }, t.prototype.unbindHandlers = function(t) {
            this.documents = csArray.prototype.filter.call(this.documents, (function(e) {
                return e !== t
            })), csArray.prototype.forEach.call(this.eventHandlers, (function(e) {
                return fe(z({
                    boundElement: t
                }, e))
            }))
        }, t.prototype.arePointerEventsSupported = function() {
            return "PointerEvent" in window && "function" == typeof window.PointerEvent
        }, t.prototype.areTouchEventsSupported = function() {
            return "TouchEvent" in window && "function" == typeof window.TouchEvent
        }, t.prototype.unbindAllHandlers = function() {
            var t = this;
            csArray.prototype.forEach.call(this.documents, (function(e) {
                return t.unbindHandlers(e)
            }))
        }, t.prototype.triggerInitialEvents = function() {
            this.initialTextInputListener(t.whiteListedTextInputSelector), this.initialScrollListener(), this.initialSelectListener(), this.initialCheckableListener(), this.initialTextInputListener(t.whiteListedNumberInputsSelector)
        }, t.prototype.initialTextInputListener = function(t) {
            for (var e = document.querySelectorAll(t), i = 0; i < e.length; i += 1) {
                var r = e.item(i);
                r.value.length > 0 && this.inputTextListener(r)
            }
        }, t.prototype.initialScrollListener = function() {
            for (var t = document.getElementsByTagName("*"), e = 0; e < t.length; e += 1) {
                var i = t[e],
                    r = this.getScrollPosition(i),
                    n = r.top,
                    o = r.left;
                0 === n && 0 === o || this.scrollListener(i)
            }
        }, t.prototype.initialSelectListener = function() {
            for (var t = document.getElementsByTagName("select"), e = 0; e < t.length; e += 1) this.inputSelectListener(t[e])
        }, t.prototype.initialCheckableListener = function() {
            for (var e = document.querySelectorAll(t.whiteListedCheckableInputsSelector), i = 0; i < e.length; i += 1) this.inputCheckableListener(e[i])
        }, t.prototype.getScrollPosition = function(t) {
            return t === document ? {
                top: window.pageYOffset,
                left: window.pageXOffset
            } : {
                top: t.scrollTop,
                left: t.scrollLeft
            }
        }, t.prototype.scrollListener = function(t) {
            if (!f(t) || !this.sensitiveContentService.isSensitive(t) && !this.sensitiveContentService.isSensitiveChild(t)) {
                var e = this.nodeIdentifier.getId(t);
                if (e) {
                    var i = this.getScrollPosition(t);
                    this.triggerCallbacks({
                        type: oe.SCROLL,
                        args: [e, i.left, i.top],
                        date: ct()
                    })
                } else Vt.warn("scrollListener: node without identifier")
            }
        }, t.prototype.mouseOverListener = function(t) {
            if (!f(t.target) || !this.sensitiveContentService.isSensitiveChild(t.target)) {
                var e = this.nodeIdentifier.getId(t.target);
                e ? this.triggerCallbacks({
                    type: oe.MOUSE_OVER,
                    args: [e],
                    date: ct()
                }) : Vt.warn("mouseOverListener: node without identifier")
            }
        }, t.prototype.clickListener = function(t) {
            if (!f(t.target) || !this.sensitiveContentService.isSensitiveChild(t.target)) {
                var e = this.nodeIdentifier.getId(t.target);
                e ? this.triggerCallbacks({
                    type: oe.CLICK,
                    args: [e],
                    date: ct()
                }) : Vt.warn("clickListener: node without identifier")
            }
        }, t.prototype.inputCheckableListener = function(t) {
            if (!this.sensitiveContentService.isSensitive(t) && !this.sensitiveContentService.isSensitiveChild(t)) {
                var e = this.nodeIdentifier.getId(t);
                e ? this.triggerCallbacks({
                    type: oe.INPUT_CHECKABLE,
                    args: [e, t.checked],
                    date: ct()
                }) : Vt.warn("inputCheckableListener: node without identifier")
            }
        }, t.prototype.inputSelectListener = function(t) {
            if (!this.sensitiveContentService.isSensitive(t) && !this.sensitiveContentService.isSensitiveChild(t)) {
                var e = this.nodeIdentifier.getId(t);
                e ? this.triggerCallbacks({
                    type: oe.INPUT_SELECT,
                    args: [e, t.selectedIndex],
                    date: ct()
                }) : Vt.warn("inputSelectListener: node without identifier")
            }
        }, t.prototype.inputTextListener = function(t) {
            if (!this.sensitiveContentService.isSensitive(t) && !this.sensitiveContentService.isSensitiveChild(t)) {
                var e = this.nodeIdentifier.getId(t);
                if (e)
                    if (t.hasAttribute("data-cs-encrypt") && "password" !== t.type) this.encryptionService.registerInputNodeToEncrypt({
                        targetId: e,
                        targetValue: t.value,
                        date: ct()
                    });
                    else {
                        var i = "number" === t.type ? "0" : "•";
                        this.triggerCallbacks({
                            type: oe.INPUT_TEXT,
                            args: [e, csString.prototype.replace.call(t.value, /\S/g, i)],
                            date: ct()
                        })
                    }
                else Vt.warn("inputTextListener: node without identifier")
            }
        }, t.prototype.keyUpListener = function(t) {
            if (!f(csEventtarget.apply(t)) || !this.sensitiveContentService.isSensitiveChild(csEventtarget.apply(t))) {
                var e = this.nodeIdentifier.getId(csEventtarget.apply(t));
                if (e) {
                    var i = this.keyStrokeMap[t.key];
                    void 0 !== i && this.triggerCallbacks({
                        type: oe.KEY_UP,
                        args: [e, i],
                        date: ct()
                    })
                } else Vt.warn("keyUpListener: node without identifier")
            }
        }, t.prototype.keyDownListener = function(t) {
            if (!f(csEventtarget.apply(t)) || !this.sensitiveContentService.isSensitiveChild(csEventtarget.apply(t))) {
                var e = this.nodeIdentifier.getId(csEventtarget.apply(t));
                if (e) {
                    var i = this.keyStrokeMap[t.key];
                    void 0 !== i && this.triggerCallbacks({
                        type: oe.KEY_DOWN,
                        args: [e, i],
                        date: ct()
                    })
                } else Vt.warn("keyDownListener: node without identifier")
            }
        }, t.prototype.copyListener = function(t) {
            if (!f(csEventtarget.apply(t)) || !this.sensitiveContentService.isSensitiveChild(csEventtarget.apply(t))) {
                var e = this.nodeIdentifier.getId(csEventtarget.apply(t));
                e ? this.triggerCallbacks({
                    type: oe.CLIPBOARD_COMMAND,
                    args: [e, ve.COPY],
                    date: ct()
                }) : Vt.warn("copyListener: node without identifier")
            }
        }, t.prototype.cutListener = function(t) {
            if (!f(csEventtarget.apply(t)) || !this.sensitiveContentService.isSensitiveChild(csEventtarget.apply(t))) {
                var e = this.nodeIdentifier.getId(csEventtarget.apply(t));
                e ? this.triggerCallbacks({
                    type: oe.CLIPBOARD_COMMAND,
                    args: [e, ve.CUT],
                    date: ct()
                }) : Vt.warn("cutListener: node without identifier")
            }
        }, t.prototype.pasteListener = function(t) {
            if (!f(csEventtarget.apply(t)) || !this.sensitiveContentService.isSensitiveChild(csEventtarget.apply(t))) {
                var e = this.nodeIdentifier.getId(csEventtarget.apply(t));
                e ? this.triggerCallbacks({
                    type: oe.CLIPBOARD_COMMAND,
                    args: [e, ve.PASTE],
                    date: ct()
                }) : Vt.warn("pasteListener: node without identifier")
            }
        }, t.prototype.pointerUpListener = function(t) {
            if (!f(csEventtarget.apply(t)) || !this.sensitiveContentService.isSensitiveChild(csEventtarget.apply(t))) {
                var e = this.nodeIdentifier.getId(csEventtarget.apply(t));
                if (e) {
                    var i = {
                        type: oe.POINTER_UP,
                        args: [t.pointerId, t.pointerType, t.clientX, t.clientY, e, t.button],
                        date: ct()
                    };
                    this.triggerCallbacks(i)
                } else Vt.warn("pointerup: node without identifier")
            }
        }, t.prototype.pointerMoveListener = function(t) {
            var e = {
                type: oe.POINTER_MOVE,
                args: [t.pointerId, t.pointerType, t.clientX, t.clientY],
                date: ct()
            };
            this.triggerCallbacks(e)
        }, t.prototype.pointerDownListener = function(t) {
            if (!f(csEventtarget.apply(t)) || !this.sensitiveContentService.isSensitiveChild(csEventtarget.apply(t))) {
                var e = this.nodeIdentifier.getId(csEventtarget.apply(t));
                if (e) {
                    var i = {
                        type: oe.POINTER_DOWN,
                        args: [t.pointerId, t.pointerType, t.clientX, t.clientY, e, t.button, {
                            pageX: t.pageX,
                            pageY: t.pageY
                        }],
                        date: ct()
                    };
                    this.triggerCallbacks(i)
                } else Vt.warn("pointerdown: node without identifier")
            }
        }, t.prototype.touchStartListener = function(t) {
            if (t.changedTouches)
                for (var e = t.changedTouches, i = 0; i < e.length; i += 1) {
                    var r = e[i],
                        n = {
                            type: oe.TOUCH_START,
                            args: [r.identifier, r.clientX, r.clientY],
                            date: ct()
                        };
                    this.triggerCallbacks(n)
                }
        }, t.prototype.touchMoveListener = function(t) {
            if (t.changedTouches)
                for (var e = t.changedTouches, i = 0; i < e.length; i += 1) {
                    var r = e[i],
                        n = {
                            type: oe.TOUCH_MOVE,
                            args: [r.identifier, r.clientX, r.clientY],
                            date: ct()
                        };
                    this.triggerCallbacks(n)
                }
        }, t.prototype.touchEndListener = function(t) {
            if (t.changedTouches)
                for (var e = t.changedTouches, i = 0; i < e.length; i += 1) {
                    var r = e[i],
                        n = {
                            type: oe.TOUCH_END,
                            args: [r.identifier, r.clientX, r.clientY],
                            date: ct()
                        };
                    this.triggerCallbacks(n)
                }
        }, t.prototype.initKeyStrokesMap = function() {
            this.keyStrokeMap = {}, this.keyStrokeMap[" "] = ye.SPACE, this.keyStrokeMap.Spacebar = ye.SPACE, this.keyStrokeMap.Backspace = ye.BACKSPACE, this.keyStrokeMap.Enter = ye.ENTER, this.keyStrokeMap.Delete = ye.DELETE, this.keyStrokeMap.ArrowUp = ye.ARROWUP, this.keyStrokeMap.ArrowDown = ye.ARROWDOWN, this.keyStrokeMap.ArrowLeft = ye.ARROWLEFT, this.keyStrokeMap.ArrowRight = ye.ARROWRIGHT, this.keyStrokeMap.Up = ye.ARROWUP, this.keyStrokeMap.Down = ye.ARROWDOWN, this.keyStrokeMap.Left = ye.ARROWLEFT, this.keyStrokeMap.Right = ye.ARROWRIGHT, this.keyStrokeMap.CapsLock = ye.CAPSLOCK, this.keyStrokeMap.Shift = ye.SHIFT, this.keyStrokeMap.Tab = ye.TAB, this.keyStrokeMap.Escape = ye.ESCAPE, this.keyStrokeMap.Esc = ye.ESCAPE, this.keyStrokeMap.End = ye.END, this.keyStrokeMap.Alt = ye.ALT, this.keyStrokeMap.Control = ye.CTRL, this.keyStrokeMap.Meta = ye.META
        }, t.whiteListedTextInputSelector = csArray.prototype.join.call(["textarea", "input:not([type])", 'input[type="text"]', 'input[type="email"]', 'input[type="search"]', 'input[type="tel"]', 'input[type="url"]', 'input[type="password"]'], ","), t.whiteListedCheckableInputsSelector = csArray.prototype.join.call(['input[type="checkbox"]', 'input[type="radio"]'], ","), t.whiteListedNumberInputsSelector = 'input[type="number"]', q([zt("scroll")], t.prototype, "scrollListener", null), q([zt("mouseOver")], t.prototype, "mouseOverListener", null), q([zt("click"), Se()], t.prototype, "clickListener", null), q([zt("checkable")], t.prototype, "inputCheckableListener", null), q([zt("select")], t.prototype, "inputSelectListener", null), q([zt("text")], t.prototype, "inputTextListener", null), q([zt("Event handler type: keyup"), Se()], t.prototype, "keyUpListener", null), q([zt("Event handler type: keydown"), Se()], t.prototype, "keyDownListener", null), q([zt("Event handler type: copy"), Se()], t.prototype, "copyListener", null), q([zt("Event handler type: cut"), Se()], t.prototype, "cutListener", null), q([zt("Event handler type: paste"), Se()], t.prototype, "pasteListener", null), q([zt("Event handler type: pointerup"), Se()], t.prototype, "pointerUpListener", null), q([zt("Event handler type: pointermove"), Se()], t.prototype, "pointerMoveListener", null), q([zt("Event handler type: pointerdown"), Se()], t.prototype, "pointerDownListener", null), q([zt("Event handler type: touchstart"), Se()], t.prototype, "touchStartListener", null), q([zt("Event handler type: touchmove"), Se()], t.prototype, "touchMoveListener", null), q([zt("Event handler type: touchend"), Se()], t.prototype, "touchEndListener", null), t
    }();

    function Ce(t) {
        for (var e = t.length, i = new csArray(e), r = 0; r < e; r += 1) i[r] = t[r];
        return i
    }

    function Te(t, e) {
        for (var i = t.length, r = new csArray(i), n = 0; n < i; n += 1) r[n] = e(t[n]);
        return r
    }

    function Re(t, e) {
        for (var i = t.length, r = 0; r < i; r++) e(t[r], r)
    }
    var be, we = function() {
            function t(t, e, i, r, n, o, s) {
                void 0 === s && (s = document);
                var a = this;
                this.mutationSerializer = t, this.mutationObserver = e, this.staticResourceUrlTracker = i, this.lifeCycleEventsEmitter = r, this.nodeIdentifier = n, this.sensitiveContentService = o, this.refDocument = s, this.onSerializationInitialDomDone = function(t) {
                    a.lifeCycleEventsEmitter.emitInitialDomDone(t)
                }, this.mutationObserver.onCharacterDataMutation((function(t) {
                    a.characterDataMutation(t)
                })), this.mutationObserver.onAttributesMutation((function(t) {
                    g(t.target) && a.sensitiveContentService.isSensitive(t.target) && "src" === t.attributeName && (a.sensitiveContentService.unidentifySensitiveNodes(t.target), a.sensitiveContentService.identifySensitiveNodes(t.target)), a.attributesMutation(t)
                })), this.mutationObserver.onChildListMutation((function(t, e) {
                    Re(t.removedNodes, (function(t) {
                        a.sensitiveContentService.unidentifySensitiveNodes(t), a.nodeIdentifier.getIds(t).forEach((function(t) {
                            e.delete(t)
                        }))
                    }));
                    var i = csArray.prototype.filter.call(t.addedNodes, (function(t) {
                        var i = a.nodeIdentifier.getId(t);
                        return !(i && e.has(i))
                    }));
                    Object.defineProperty(i, "item", {
                        configurable: !1,
                        writable: !1,
                        value: function(t) {
                            var e;
                            return null !== (e = this[t]) && void 0 !== e ? e : null
                        }
                    }), csArray.prototype.forEach.call(i, (function(t) {
                        a.sensitiveContentService.identifySensitiveNodes(t), a.nodeIdentifier.identifyNodes(t).forEach((function(t) {
                            e.add(t)
                        }))
                    }));
                    var r = {
                        date: t.date,
                        addedNodes: i,
                        attributeName: t.attributeName,
                        attributeNamespace: t.attributeNamespace,
                        nextSibling: t.nextSibling,
                        oldValue: t.oldValue,
                        previousSibling: t.previousSibling,
                        removedNodes: t.removedNodes,
                        target: t.target,
                        type: t.type
                    };
                    a.childListMutation(r)
                })), this.mutationObserver.onAttachShadowMutation((function(t) {
                    t.target.isConnected && null !== csElementshadowRoot.apply(t.target) && (a.sensitiveContentService.identifySensitiveNodes(t.target), a.nodeIdentifier.identifyNodes(csElementshadowRoot.apply(t.target)), a.attachShadowEvent(t))
                }))
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.mutationObserver.start(), this.recordInitialDom()
            }, t.prototype.stop = function() {
                this.sensitiveContentService.unidentifySensitiveNodes(this.refDocument), this.mutationObserver.stop()
            }, t.prototype.flushEvents = function() {
                this.mutationObserver.flushPendingMutations()
            }, t.prototype.recordInitialDom = function() {
                this.lifeCycleEventsEmitter.emitInitialDomStart(), this.sensitiveContentService.identifySensitiveNodes(this.refDocument), this.nodeIdentifier.identifyNodes(this.refDocument), this.mutationSerializer.serializeInitialDom(this.refDocument, this.onSerializationInitialDomDone)
            }, t.prototype.attachShadowEvent = function(t) {
                if (!this.sensitiveContentService.isSensitive(t.target) && !this.sensitiveContentService.isSensitiveChild(t.target)) {
                    var e = this.mutationSerializer.serializeAttachShadowEvent(t);
                    e && this.onEventCallback({
                        args: e,
                        date: t.date,
                        type: oe.ATTACH_SHADOW
                    })
                }
            }, t.prototype.attributesMutation = function(t) {
                if (!f(t.target) || !this.sensitiveContentService.isSensitiveChild(t.target) && !this.sensitiveContentService.isSensitiveAttribute(t.target, t.attributeName)) {
                    var e = this.mutationSerializer.serializeMutationAttribute(t);
                    e && (this.onEventCallback({
                        args: e,
                        date: t.date,
                        type: oe.MUTATION_ATTRIBUTE
                    }), this.staticResourceUrlTracker.scanAttribute(t.target, t.attributeName))
                }
            }, t.prototype.characterDataMutation = function(t) {
                var e = t.target.parentElement;
                if (!e || !this.sensitiveContentService.isSensitive(e) && !this.sensitiveContentService.isSensitiveChild(e)) {
                    var i = this.mutationSerializer.serializeMutationCharacterData(t);
                    i && (this.onEventCallback({
                        args: i,
                        date: t.date,
                        type: oe.MUTATION_CHARACTER_DATA
                    }), this.staticResourceUrlTracker.scanText(t.target))
                }
            }, t.prototype.childListMutation = function(t) {
                var e = this;
                if (!f(t.target) && !C(t.target) || !this.sensitiveContentService.isSensitive(t.target) && !this.sensitiveContentService.isSensitiveChild(t.target)) {
                    var i = this.mutationSerializer.serializeMutationChildList(t);
                    if (i) {
                        var r = i.removedNodes,
                            n = i.addedNodes;
                        csArray.prototype.forEach.call(r, (function(i) {
                            e.onEventCallback({
                                args: i,
                                date: t.date,
                                type: oe.MUTATION_REMOVE
                            })
                        })), csArray.prototype.forEach.call(n, (function(i) {
                            e.onEventCallback({
                                args: i,
                                date: t.date,
                                type: oe.MUTATION_INSERT
                            })
                        }))
                    }
                }
            }, t
        }(),
        Ae = function() {
            function t(t) {
                this.maxStoredBytes = t, this.storageBytesUsed = 0
            }
            return t.prototype.addString = function(t) {
                this.storageBytesUsed += 2 * t.length
            }, t.prototype.addArrayBuffer = function(t) {
                this.storageBytesUsed += t.byteLength
            }, t.prototype.isThresholdReached = function() {
                return this.storageBytesUsed > this.maxStoredBytes
            }, t.prototype.reset = function() {
                this.storageBytesUsed = 0
            }, t
        }(),
        Ie = function() {
            function t(t, e, i) {
                void 0 === t && (t = []), void 0 === e && (e = {}), void 0 === i && (i = 512e3), this.events = t, this.requestParameters = e, this.sizeCounter = new Ae(i)
            }
            return t.prototype.addEvent = function(t) {
                this.sizeCounter.addString(Q(t)), csArray.prototype.push.call(this.events, t)
            }, t.prototype.addEventByTimestamp = function(t) {
                for (var e = 0; e < this.events.length; e += 1) {
                    if (this.events[e].date > t.date) return this.sizeCounter.addString(csJSON.stringify(t)), void csArray.prototype.splice.call(this.events, e, 0, t)
                }
                this.addEvent(t)
            }, t.prototype.eventsCount = function() {
                return this.events.length
            }, t.prototype.clearEvents = function() {
                this.sizeCounter.reset(), this.events = []
            }, t.prototype.isFull = function() {
                return this.eventsCount() >= 100
            }, t.prototype.isThresholdReached = function() {
                return this.sizeCounter.isThresholdReached()
            }, t.prototype.setRequestParametersFromProvider = function(t) {
                var e = t.getRequestParameters();
                for (var i in e) e.hasOwnProperty(i) && (this.requestParameters[i] = e[i])
            }, t.prototype.removeRequestParameter = function(t) {
                this.requestParameters.hasOwnProperty(t) && delete this.requestParameters[t]
            }, t.prototype.getEvents = function() {
                return this.events
            }, t.prototype.extractEvents = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var i = [],
                    r = [];
                return csArray.prototype.forEach.call(this.events, (function(e) {
                    -1 !== csArray.prototype.indexOf.call(t, e.type) ? csArray.prototype.push.call(i, e) : csArray.prototype.push.call(r, e)
                })), this.events = r, i
            }, t.prototype.getRequestPayload = function() {
                return Q(this.events)
            }, t.prototype.getRequestParameters = function() {
                var t = z({}, this.requestParameters);
                return this.events.length > 0 && (t.let = this.events[this.events.length - 1].date.toString()), t
            }, t
        }(),
        ke = function() {
            function t() {
                this.index = 1
            }
            return t.prototype.getCurrentIndex = function() {
                return this.index
            }, t.prototype.increment = function() {
                this.index += 1
            }, t.prototype.reset = function() {
                this.index = 1
            }, t.prototype.getRequestParameters = function() {
                return {
                    ri: "".concat(this.index)
                }
            }, t
        }();

    function Pe(t) {
        for (var e = new ArrayBuffer(t.length), i = new Uint8Array(e), r = 0, n = t.length; r < n; r += 1) i[r] = csString.prototype.charCodeAt.call(t, r);
        return e
    }

    function Ne(t) {
        for (var e = new Uint8Array(t), i = "", r = 0; r < e.byteLength; r += 1) i += csString.fromCodePoint(e[r]);
        return i
    }

    function Oe(t) {
        return Pe(self.atob(t))
    }! function(t) {
        t.UNCOMPRESSED = "0", t.BASE64 = "1"
    }(be || (be = {}));
    var Me = function(t) {
            this.onError = t
        },
        Le = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.algorithm = "raw", e
            }
            return V(e, t), e.prototype.isSupported = function() {
                return !0
            }, e.prototype.compress = function(t, e, i) {
                if ("base64" === t) return "string" != typeof e && (e = Ne(e)), i(e);
                i(e)
            }, e.prototype.compressSync = function(t) {
                return t
            }, e
        }(Me),
        De = function() {
            function t() {}
            return t.prototype.emit = function(e, i) {
                var r = "".concat(t.prefix, ".").concat(e),
                    n = t.createEvent(r, {
                        detail: i
                    });
                null !== n && document.dispatchEvent(n)
            }, t.createEvent = function(t, e) {
                if (void 0 === e && (e = {}), "function" == typeof CustomEvent) return new CustomEvent(t, e);
                var i = this.tryToCreateCustomEvent();
                if (null === i) return null;
                var r = e.bubbles,
                    n = void 0 !== r && r,
                    o = e.cancelable,
                    s = void 0 !== o && o,
                    a = e.detail;
                return i.initCustomEvent(t, n, s, a), i
            }, t.tryToCreateCustomEvent = function() {
                try {
                    return document.createEvent("CustomEvent")
                } catch (t) {
                    return null
                }
            }, t.prefix = "cs.tracking", t
        }(),
        _e = function() {
            function t() {
                this.isStarted = !1
            }
            return t.prototype.start = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.isStarted || (this.isStarted = !0, this.onStart.apply(this, t))
            }, t.prototype.stop = function() {
                this.isStarted && (this.isStarted = !1, this.onStop())
            }, t.prototype.restart = function() {
                this.stop(), this.start()
            }, t
        }();

    function xe(t, e) {
        var i, r = [],
            n = null,
            o = 0,
            s = function() {
                o = ct(), n = null, i = t.apply(void 0, r)
            },
            a = function() {
                for (var a = [], c = 0; c < arguments.length; c++) a[c] = arguments[c];
                var u = ct(),
                    p = e - (u - o);
                return r = H([], a, !0), p <= 0 || p > e ? (o = u, i = t.apply(void 0, r), n ? (window.clearTimeout(n), n = null) : r = []) : n || (n = window.setTimeout(s, p)), i
            };
        return a.cancel = function() {
            n && (window.clearTimeout(n), o = 0, n = null, r = [])
        }, a
    }
    var Ve, ze, qe, Ue, Be = function(t) {
            return void 0 === t && (t = 0),
                function(e, i, r) {
                    var n = r.value,
                        o = !1;
                    r.value = function() {
                        for (var e = this, i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r];
                        o || (o = !0, setTimeout((function() {
                            n.apply(e, i), o = !1
                        }), t))
                    }
                }
        },
        He = function(t) {
            function e(e, i, r, n, o, s, a, c, u, p, l, h, d, f, y, v, m, g, S, E, C) {
                var T = t.call(this) || this;
                return T.configuration = e, T.recordingRequest = i, T.recordingBatch = r, T.requestParameters = n, T.requestIndex = o, T.styleSheetRuleTracker = s, T.recordingMutationsTracker = a, T.recordingPageEventsTracker = c, T.recordingBrowserEventsTracker = u, T.recordingGesturesTracker = p, T.sessionRenewer = l, T.staticResourceUrlTracker = h, T.recordingPerformanceTimingsTracker = d, T.javaScriptErrorsTracker = f, T.javaScriptErrorsAnonymizer = y, T.apiErrorsTracker = v, T.textVisibilityTracker = m, T.apiErrorsAnonymizer = g, T.encryptionService = S, T.recoveryService = E, T.customElementRegistrationTracker = C, T.javaScriptErrorsCount = 0, T.apiErrorsCount = 0, T.customErrorsCount = 0, T.eventEmitter = new De, T.canSendEventsFlags = {
                    allowFromQuotaService: !0,
                    allowFromSerialization: !0
                }, T.throttledPushEvents = xe((function() {
                    T.pushEvents()
                }), 1e3), T.onEvent = function(t) {
                    return T.processEvent(t)
                }, T
            }
            return V(e, t), e.prototype.init = function() {
                this.bindRecordingRequest(), this.bindTrackers()
            }, e.prototype.bindRecordingRequest = function() {
                var t = this;
                this.recordingRequest.setRequestPayloadProvider(this.recordingBatch), this.recordingRequest.setRequestParametersProviders(this.recordingBatch), this.recordingRequest.afterProvidersCalled((function() {
                    t.recoveryService.addBatchInProgress("".concat(t.requestIndex.getCurrentIndex()), t.recordingBatch.getRequestParameters(), t.recordingBatch.getEvents()), t.recordingBatch.clearEvents(), t.requestIndex.increment(), t.recordingBatch.setRequestParametersFromProvider(t.requestParameters)
                })), this.recordingRequest.after((function(e) {
                    "ri" in e && t.recoveryService.removeBatchInProgress(e.ri)
                })), this.recordingRequest.onError((function(e, i) {
                    t.recoveryService.saveFailedRecordingEvents(e, i)
                })), this.recordingRequest.onLoad((function(e) {
                    e.status >= 200 && e.status <= 299 ? t.recoveryService.recover() : Vt.warn("recording request failed:".concat(e.status))
                }))
            }, e.prototype.bindTrackers = function() {
                var t = this;
                this.styleSheetRuleTracker.onEvent(this.onEvent), this.recordingMutationsTracker.onEvent(this.onEvent), this.recordingBrowserEventsTracker.onEvent(this.onEvent), this.recordingPageEventsTracker.onEvent(this.onEvent), this.staticResourceUrlTracker.onEvent(this.onEvent), this.recordingPerformanceTimingsTracker.onEvent(this.onEvent), this.textVisibilityTracker.onEvent(this.onEvent), this.recordingGesturesTracker.onEvent(this.onEvent), this.encryptionService.onTextNodeToEncrypt(this.onEvent), this.encryptionService.onApiErrorToEncrypt((function(e) {
                    t.processApiError(e)
                })), this.encryptionService.onUserIdentifierToEncrypt(this.onEvent), this.customElementRegistrationTracker.onEvent(this.onEvent)
            }, e.prototype.blockSendingEventsFromQuotaService = function() {
                this.canSendEventsFlags.allowFromQuotaService = !1
            }, e.prototype.allowSendingEventsFromQuotaService = function() {
                this.canSendEventsFlags.allowFromQuotaService = !0
            }, e.prototype.blockSendingEventsFromSerialization = function() {
                this.canSendEventsFlags.allowFromSerialization = !1
            }, e.prototype.allowSendingEventsFromSerialization = function() {
                this.canSendEventsFlags.allowFromSerialization = !0
            }, e.prototype.canSendEvents = function() {
                return this.canSendEventsFlags.allowFromQuotaService && this.canSendEventsFlags.allowFromSerialization
            }, e.prototype.processEvent = function(t) {
                this.sessionRenewer.isSessionValid() && (this.recordingBatch.addEvent(t), this.recordingBatch.isThresholdReached() ? this.pushEvents() : this.recordingBatch.isFull() && this.throttledPushEvents(), this.configuration.emitDebugEvents && this.eventEmitter.emit("recordingEvent", z(z({}, t), {
                    typeName: oe[t.type]
                })))
            }, e.prototype.onStart = function() {
                var t = this;
                this.recordingBatch.setRequestParametersFromProvider(this.requestParameters), this.recordingBatch.setRequestParametersFromProvider({
                    getRequestParameters: function() {
                        return {
                            rst: ct().toString()
                        }
                    }
                }), this.customElementRegistrationTracker.start(), this.recordingPerformanceTimingsTracker.start(), this.recordingMutationsTracker.start(), this.styleSheetRuleTracker.start(), this.textVisibilityTracker.start(), this.recordingBrowserEventsTracker.start(), this.recordingGesturesTracker.start(), this.configuration.jsErrorsEnabled && this.javaScriptErrorsTracker.subscribe(e.SERVICE_IDENTIFIER, (function(e) {
                    return t.processJavascriptError(e)
                })), this.configuration.apiErrors.enabled && this.apiErrorsTracker.subscribe(e.SERVICE_IDENTIFIER, (function(e) {
                    return t.encryptApiError(e)
                }), {
                    detailedEvent: !0
                }), this.configuration.emitDebugEvents && this.eventEmitter.emit("replayRecordingStarted")
            }, e.prototype.onStop = function() {
                this.styleSheetRuleTracker.stop(), this.recordingMutationsTracker.stop(), this.recordingBrowserEventsTracker.stop(), this.recordingPageEventsTracker.stop(), this.javaScriptErrorsTracker.unsubscribe(e.SERVICE_IDENTIFIER), this.apiErrorsTracker.unsubscribe(e.SERVICE_IDENTIFIER), this.textVisibilityTracker.stop(), this.recordingGesturesTracker.stop(), this.customElementRegistrationTracker.stop()
            }, e.prototype.clearStates = function() {
                this.recordingMutationsTracker.flushEvents(), this.throttledPushEvents.cancel(), this.pushEvents(), this.removeEtrRequestParameters()
            }, e.prototype.initStates = function() {
                this.requestIndex.reset(), this.recordingBatch.setRequestParametersFromProvider(this.requestParameters), this.javaScriptErrorsCount = 0, this.apiErrorsCount = 0, this.customErrorsCount = 0
            }, e.prototype.pushEvents = function() {
                this.textVisibilityTracker.flushEvents(), this.recordingBatch.eventsCount() > 0 && this.canSendEvents() && (this.isStarted ? this.recordingRequest.send() : this.recordingBatch.clearEvents())
            }, e.prototype.addInitialDom = function(t) {
                this.recordingBatch.addEventByTimestamp(t)
            }, e.prototype.encryptApiError = function(t) {
                t.customRequestHeaders || t.customResponseHeaders || t.queryParameters || t.requestBody || t.responseBody ? this.encryptionService.registerApiErrorToEncrypt(t) : this.processApiError(t)
            }, e.prototype.processApiError = function(t) {
                if (this.apiErrorsCount < e.MAX_API_ERROR_COUNT) {
                    var i = {
                        type: oe.API_ERROR,
                        date: ct(),
                        args: [this.apiErrorsAnonymizer.anonymize(t)]
                    };
                    this.onEvent(i), this.apiErrorsCount = this.apiErrorsCount + 1
                }
            }, e.prototype.processJavascriptError = function(t) {
                if (this.javaScriptErrorsCount < e.MAX_JAVASCRIPT_ERROR_COUNT) {
                    var i = {
                        type: oe.JAVASCRIPT_ERROR,
                        date: ct(),
                        args: [this.javaScriptErrorsAnonymizer.anonymize(t)]
                    };
                    this.onEvent(i), this.javaScriptErrorsCount = this.javaScriptErrorsCount + 1
                }
            }, e.prototype.processCustomError = function(t) {
                if (this.customErrorsCount < e.MAX_CUSTOM_ERROR_COUNT) {
                    var i = {
                        type: oe.CUSTOM_ERROR,
                        date: ct(),
                        args: [t]
                    };
                    this.onEvent(i), this.customErrorsCount = this.customErrorsCount + 1
                }
            }, e.prototype.setEtrRequestParameters = function(t) {
                this.isStarted && (t === Kt.ETR_SESSION ? this.recordingBatch.setRequestParametersFromProvider({
                    getRequestParameters: function() {
                        var t;
                        return (t = {})[e.ETRS_PARAMETER] = e.ETR_ACTIVE, t
                    }
                }) : t === Kt.ETR_PAGE && this.recordingBatch.setRequestParametersFromProvider({
                    getRequestParameters: function() {
                        var t;
                        return (t = {})[e.ETRP_PARAMETER] = e.ETR_ACTIVE, t
                    }
                }))
            }, e.prototype.removeEtrRequestParameters = function() {
                this.recordingBatch.removeRequestParameter(e.ETRP_PARAMETER), this.recordingBatch.removeRequestParameter(e.ETRS_PARAMETER)
            }, e.prototype.clearEvents = function() {
                this.recordingBatch.clearEvents()
            }, e.prototype.onCustomJavaScriptErrorEvent = function(t) {
                this.processJavascriptError(t)
            }, e.prototype.onCustomErrorEvent = function(t) {
                this.processCustomError(t)
            }, e.prototype.onPageEvent = function(t) {
                this.processPageEvent(t)
            }, e.prototype.onUserIdentifierEvent = function(t) {
                var e = {
                    userIdentifier: t,
                    date: ct(),
                    keyId: this.configuration.encryptionPublicKeyId
                };
                this.encryptionService.registerUserIdentifierToEncrypt(e)
            }, e.prototype.onEventTriggerRecording = function(t, e) {
                this.setEtrRequestParameters(e), this.processPageEvent(t), this.pushEvents()
            }, e.prototype.processPageEvent = function(t) {
                var i = {
                    type: oe.PAGE_EVENT,
                    date: ct(),
                    args: [{
                        eventName: csString.prototype.slice.call(t, 0, e.MAX_PAGE_EVENT_LENGTH)
                    }]
                };
                this.recordingBatch.addEvent(i)
            }, e.prototype.triggerConsentGranted = function() {
                var t = {
                    date: ct(),
                    type: oe.CONSENT_GRANTED
                };
                this.recordingBatch.addEvent(t)
            }, e.prototype.triggerConsentWithdrawn = function() {
                var t = {
                    date: ct(),
                    type: oe.CONSENT_WITHDRAWN
                };
                this.recordingBatch.addEvent(t)
            }, e.SERVICE_IDENTIFIER = "RecordingService", e.MAX_PAGE_EVENT_LENGTH = 255, e.MAX_JAVASCRIPT_ERROR_COUNT = 20, e.MAX_API_ERROR_COUNT = 20, e.MAX_CUSTOM_ERROR_COUNT = 20, e.ETRP_PARAMETER = "etrp", e.ETRS_PARAMETER = "etrs", e.ETR_ACTIVE = "1", e
        }(_e),
        Fe = function(t) {
            function e(e, i, r, n, o) {
                var s = t.call(this) || this;
                return s.recordingRecoveryRequest = e, s.recordingBatch = i, s.recoveryStorage = r, s.configuration = n, s.lastMessageBeaconRequest = o, s.batchesInProgress = {}, s.lastMessageAllowed = !1, s.handleRecoveredRecordings = function(t) {
                    if (0 !== t.length)
                        for (var e = function(t) {
                                var e = t.metadata,
                                    i = t.events,
                                    r = e.datatype;
                                if (!s.hasValidRecordingType(e.rt)) return "continue";
                                s.recordingRecoveryRequest.setRequestPayloadProvider({
                                    getRequestPayload: function() {
                                        return i
                                    }
                                }), delete e.datatype, s.recordingRecoveryRequest.setRequestParametersProviders({
                                    getRequestParameters: function() {
                                        return e
                                    }
                                });
                                var n = "json" === r;
                                s.recordingRecoveryRequest.send(n)
                            }, i = 0, r = t; i < r.length; i++) {
                            e(r[i])
                        }
                }, s.pageChangeHandler = function() {
                    try {
                        if (!s.lastMessageAllowed) return;
                        s.saveBatchesInProgress();
                        var t = s.recordingBatch.getRequestParameters();
                        if (!s.hasValidRecordingType(t.rt)) return;
                        if (s.sendLastMessageBeacon(), 0 === s.recordingBatch.eventsCount()) return;
                        s.configuration.useMalkaPipeline && (t.hlm = "true"), s.recoveryStorage.save({
                            key: "".concat(t.sn, ".").concat(t.pn, ".").concat(t.ri, ".last"),
                            metadata: z(z({}, t), {
                                datatype: "json"
                            }),
                            events: s.recordingBatch.getRequestPayload()
                        })
                    } catch (t) {}
                }, s.bindRecordingRequest(), s.datatype = s.recordingRecoveryRequest.getCompressionOutputType(), s
            }
            return V(e, t), e.prototype.bindRecordingRequest = function() {
                var t = this;
                this.recordingRecoveryRequest.onLoad((function(e) {
                    e.status >= 200 && e.status <= 299 ? t.recover() : Vt.warn("recording request failed:".concat(e.status))
                })), this.recordingRecoveryRequest.onError((function(e, i) {
                    t.saveFailedRecordingEvents(e, i)
                }))
            }, e.prototype.onStart = function() {
                this.batchesInProgress = {}, this.addPageChangeListener()
            }, e.prototype.onStop = function() {
                this.removePageChangeListener()
            }, e.prototype.recover = function() {
                this.recoveryStorage.recover(this.handleRecoveredRecordings)
            }, e.prototype.addBatchInProgress = function(t, e, i) {
                this.batchesInProgress[t] = {
                    metadata: e,
                    events: i
                }
            }, e.prototype.removeBatchInProgress = function(t) {
                delete this.batchesInProgress[t]
            }, e.prototype.blockSendingLastMessage = function() {
                this.lastMessageAllowed = !1
            }, e.prototype.allowSendingLastMessage = function() {
                this.lastMessageAllowed = !0
            }, e.prototype.sendLastMessageBeacon = function() {
                this.configuration.useMalkaPipeline && this.lastMessageAllowed && this.lastMessageBeaconRequest.send()
            }, e.prototype.addPageChangeListener = function() {
                window.addEventListener("pagehide", this.pageChangeHandler)
            }, e.prototype.removePageChangeListener = function() {
                window.removeEventListener("pagehide", this.pageChangeHandler)
            }, e.prototype.hasValidRecordingType = function(t) {
                return !this.configuration.useMalkaPipeline || !!t && -1 === csString.prototype.indexOf.call(t, Gt.TEMPORARILY_RECORDED)
            }, e.prototype.saveFailedRecordingEvents = function(t, e) {
                this.recoveryStorage.save({
                    key: "".concat(t.sn, ".").concat(t.pn, ".").concat(t.ri),
                    metadata: z(z({}, t), {
                        datatype: this.datatype
                    }),
                    events: e
                })
            }, e.prototype.saveBatchesInProgress = function() {
                var t = this;
                csArray.prototype.forEach.call(Object.keys(this.batchesInProgress), (function(e) {
                    var i = t.batchesInProgress[e],
                        r = i.metadata,
                        n = i.events;
                    t.recoveryStorage.save({
                        key: "".concat(r.sn, ".").concat(r.pn, ".").concat(r.ri),
                        metadata: z(z({}, r), {
                            datatype: "json"
                        }),
                        events: csJSON.stringify(n)
                    })
                }))
            }, q([zt("RecordingRecovery")], e.prototype, "recover", null), e
        }(_e),
        Ge = /[^\s]/g;

    function je(t) {
        return csString.prototype.replace.call(t, Ge, "a")
    }(ze = Ve || (Ve = {})).getShadowRoot = function(t) {
            return Mt(t) ? csElementshadowRoot.apply(t) : null
        }, ze.getAllShadowHosts = function t(e) {
            for (var i, r, n = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, null, !1), o = []; r = n.nextNode();) csElementshadowRoot.apply(r) && (i = csArray.prototype.push).call.apply(i, H([o, r], t(r.shadowRoot), !1));
            return o
        },
        function(t) {
            function e() {
                var t = [r()];
                return document.documentElement && csArray.prototype.push.call(t, document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight), document.body && csArray.prototype.push.call(t, document.body.scrollHeight, document.body.offsetHeight), Math.max.apply(Math, t)
            }

            function i() {
                return document.documentElement.scrollWidth
            }

            function r() {
                return window.innerHeight
            }

            function n() {
                return window.innerWidth
            }

            function o() {
                var t = window.csScreen.width;
                return At(t) && t > 0 ? t : window.screen.width
            }

            function s() {
                var t = window.csScreen.height;
                return At(t) && t > 0 ? t : window.screen.height
            }
            t.documentHeight = e, t.documentWidth = i, t.windowHeight = r, t.windowWidth = n, t.screenWidth = o, t.screenHeight = s, t.windowOffsetX = function() {
                return window.pageXOffset
            }, t.windowOffsetY = function() {
                return window.pageYOffset
            }, t.getRequestParameters = function() {
                return {
                    dw: "".concat(i()),
                    dh: "".concat(e()),
                    ww: "".concat(n()),
                    wh: "".concat(r()),
                    sw: "".concat(o()),
                    sh: "".concat(s())
                }
            }
        }(qe || (qe = {})),
        function(t) {
            function e(t) {
                var e = t.getBoundingClientRect(),
                    i = e.left + .5 * e.width,
                    r = e.top + .5 * e.height,
                    n = document.elementFromPoint(i, r);
                return Ve.getShadowRoot(n) ? t.getRootNode().elementFromPoint(i, r) : n
            }
            t.findAllElements = function(t, e) {
                var i;
                void 0 === e && (e = document);
                for (var r = Ce(e.querySelectorAll(t)), n = 0, o = Ve.getAllShadowHosts(e); n < o.length; n++) {
                    var s = Ce(o[n].shadowRoot.querySelectorAll(t));
                    (i = csArray.prototype.push).call.apply(i, H([r], s, !1))
                }
                return r
            }, t.getTopElement = e, t.isVisibleInDocument = function(t) {
                return ! function(t) {
                    var e = t.getBoundingClientRect();
                    return e.right + qe.windowOffsetX() < 0 || e.bottom + qe.windowOffsetY() < 0
                }(t) && ! function(t) {
                    var e, i = window.getComputedStyle(t);
                    return 0 === t.getClientRects().length || "hidden" === i.visibility || "collapse" === i.visibility || "0" === i.opacity || "opacity(0)" === i.filter || (e = i.color, /^rgba\(\d+, \d+, \d+, 0\)$/.test(e))
                }(t) && ! function(t) {
                    var i = e(t);
                    return !t.contains(i) && null !== i
                }(t)
            }, t.isInViewPort = function(t) {
                return null !== e(t)
            }, t.getAttributeNS = function(t, e, i) {
                var r = t.getAttributeNS(e, i);
                return "" === r ? t.hasAttributeNS(e, i) ? r : null : r
            }
        }(Ue || (Ue = {}));
    var Ke, We = function() {
            function t(t, e, i, r, n, o, s) {
                this.consentService = t, this.domSerializer = e, this.nodeIdentifier = i, this.anonymization = r, this.encryptionService = n, this.configuration = o, this.urlService = s, this.domSerializationInProgress = !1
            }
            return t.prototype.init = function() {
                this.resetAnonymization()
            }, t.prototype.isDOMSerializationInProgress = function() {
                return this.domSerializationInProgress
            }, t.prototype.serializeInitialDom = function(t, e) {
                if (this.domSerializer.isAsynchronous()) this.serializeDocumentAsync(t).then((function(t) {
                    t && e(t)
                })).catch((function(t) {
                    Vt.error(t)
                }));
                else {
                    var i = this.serializeDocumentSync(t);
                    e(i)
                }
            }, t.prototype.serializeDocumentSync = function(t) {
                return {
                    args: [this.domSerializer.serialize(t, {
                        withAnonymization: this.useAnonymization
                    })],
                    date: ct(),
                    type: oe.INITIAL_DOM
                }
            }, t.prototype.serializeDocumentAsync = function(t) {
                return U(this, void 0, void 0, (function() {
                    return B(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                this.domSerializationInProgress = !0, e.label = 1;
                            case 1:
                                return e.trys.push([1, , 3, 4]), [4, this.domSerializer.startSerializeAsync(t, {
                                    withAnonymization: this.useAnonymization
                                })];
                            case 2:
                                return [2, e.sent()];
                            case 3:
                                return this.domSerializationInProgress = !1, [7];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.serializeMutationCharacterData = function(t) {
                var e = this.nodeIdentifier.getId(t.target);
                if (!e) return Vt.warn("serializeMutationCharacterData: node without identifier"), null;
                var i = t.target;
                if (i.data === t.oldValue) return null;
                var r = t.target.parentElement;
                if (y(i) && (null == r ? void 0 : r.hasAttribute("data-cs-encrypt"))) return this.encryptionService.registerTextNodeMutationToEncrypt({
                    targetId: e,
                    textNode: i,
                    serializedTextData: je(i.data),
                    date: t.date
                }), null;
                var n = [e, this.anonymization.getAnonymizedText(this.useAnonymization, i, i.data)];
                return this.isAsyncSerialization(this.domSerializer) && this.isDOMSerializationInProgress() && this.domSerializer.handleMutationCharacterData(t, n), n
            }, t.prototype.serializeAttachShadowEvent = function(t) {
                var e = this.nodeIdentifier.getId(t.target);
                return e ? [e, this.domSerializer.serialize(t.shadowRoot)] : (Vt.warn("serializeAttachShadowEvent: node without identifier"), null)
            }, t.prototype.serializeMutationAttribute = function(t) {
                var e = this.nodeIdentifier.getId(t.target);
                if (!e) return Vt.warn("serializeMutationAttribute: node without identifier"), null;
                var i = t.target,
                    r = t.attributeName,
                    n = t.attributeNamespace,
                    o = Ue.getAttributeNS(t.target, n, r);
                o && (o = this.anonymization.getAnonymizedAttributeValue(i, this.useAnonymization, r, o));
                var s = [e, n, r, o];
                return this.isAsyncSerialization(this.domSerializer) && this.isDOMSerializationInProgress() && this.domSerializer.handleMutationAttribute(t.oldValue ? this.anonymization.getAnonymizedAttributeValue(i, this.useAnonymization, r, t.oldValue) : t.oldValue, s), s
            }, t.prototype.serializeMutationChildList = function(t) {
                var e = this.nodeIdentifier.getId(t.target);
                return e ? this.isAsyncSerialization(this.domSerializer) && this.isDOMSerializationInProgress() ? this.domSerializer.serializeMutationChildList(t, this.useAnonymization) : {
                    removedNodes: this.serializeRemovedNodes(t),
                    addedNodes: this.serializeAddedNodes(t, e)
                } : (Vt.warn("serializeMutationChildList: node without identifier"), null)
            }, t.prototype.isAsyncSerialization = function(t) {
                return t.isAsynchronous()
            }, t.prototype.serializeRemovedNodes = function(t) {
                for (var e = [], i = 0; i < t.removedNodes.length; i += 1) {
                    var r = this.nodeIdentifier.getId(t.removedNodes[i]);
                    r && csArray.prototype.push.call(e, [r])
                }
                return e
            }, t.prototype.serializeAddedNodes = function(t, e) {
                var i = [],
                    r = null;
                if (t.nextSibling) {
                    var n = this.nodeIdentifier.getId(t.nextSibling);
                    r = void 0 !== n ? n : null
                }
                for (var o = 0; o < t.addedNodes.length; o += 1) {
                    var s = t.addedNodes[o],
                        a = this.domSerializer.serialize(s, {
                            withAnonymization: this.useAnonymization
                        });
                    csArray.prototype.push.call(i, [e, r, a])
                }
                return i
            }, t.prototype.resetAnonymization = function() {
                this.useAnonymization = !this.consentService.isAllowedByConsent(), this.useAnonymization ? this.configuration.replayRecordingUnmaskedUrlRegex && this.configuration.replayRecordingUnmaskedUrlRegex.test(this.urlService.getUrl()) && (this.useAnonymization = !1) : this.configuration.replayRecordingMaskedUrlRegex && this.configuration.replayRecordingMaskedUrlRegex.test(this.urlService.getUrl()) && (this.useAnonymization = !0)
            }, t
        }(),
        Ye = function() {
            function t(t, e, i, r) {
                var n = this;
                this.monkeyPatcher = t, this.nodeIdentifier = e, this.sensitiveContentService = i, this.staticResourceUrlTracker = r, this.canTrackRuleInsertions() && (this.insertRuleInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: window.CSSStyleSheet.prototype,
                    methodName: "insertRule",
                    hook: function(t) {
                        var e = t.context,
                            i = t.args;
                        return n.sendInsertion(e, i)
                    }
                })), this.canTrackRuleDeletions() && (this.deleteRuleInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: window.CSSStyleSheet.prototype,
                    methodName: "deleteRule",
                    hook: function(t) {
                        var e = t.context,
                            i = t.args;
                        return n.sendDeletion(e, i)
                    }
                })), this.canTrackStyleDeclarationChanges() && (this.cssTextInterceptor = this.monkeyPatcher.createDescriptorInterceptor(window.CSSStyleDeclaration.prototype, "cssText", (function(t, e) {
                    return n.setStyleDeclarationCssText(t, e)
                })))
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.insertRuleInterceptor && this.insertRuleInterceptor.activate(), this.deleteRuleInterceptor && this.deleteRuleInterceptor.activate(), this.cssTextInterceptor && this.cssTextInterceptor.activate()
            }, t.prototype.stop = function() {
                this.insertRuleInterceptor && this.insertRuleInterceptor.deactivate(), this.deleteRuleInterceptor && this.deleteRuleInterceptor.deactivate(), this.cssTextInterceptor && this.cssTextInterceptor.deactivate()
            }, t.prototype.setStyleDeclarationCssText = function(t, e) {
                var i = this.getSyleSheet(t);
                if ((null == i ? void 0 : i.ownerNode) && (!Mt(i.ownerNode) || !this.sensitiveContentService.isSensitiveChild(i.ownerNode))) {
                    var r = this.nodeIdentifier.getId(i.ownerNode);
                    if (r) {
                        var n = this.indexOfRule(i.cssRules, t.parentRule);
                        this.onEventCallback({
                            date: ct(),
                            type: oe.STYLESHEET_CSS_TEXT_UPDATE,
                            args: [r, n, e]
                        }), this.staticResourceUrlTracker.scanCssString(e)
                    }
                }
            }, t.prototype.getSyleSheet = function(t) {
                var e = t.parentRule;
                return e && e.parentStyleSheet
            }, t.prototype.indexOfRule = function(t, e) {
                return csArray.prototype.indexOf.call(csArray.from(t), e)
            }, t.prototype.canTrackRuleInsertions = function() {
                var t, e;
                return "function" == typeof(null === (e = null === (t = window.CSSStyleSheet) || void 0 === t ? void 0 : t.prototype) || void 0 === e ? void 0 : e.insertRule)
            }, t.prototype.canTrackRuleDeletions = function() {
                var t, e;
                return "function" == typeof(null === (e = null === (t = window.CSSStyleSheet) || void 0 === t ? void 0 : t.prototype) || void 0 === e ? void 0 : e.deleteRule)
            }, t.prototype.canTrackStyleDeclarationChanges = function() {
                return window.CSSStyleDeclaration && window.CSSStyleDeclaration.prototype && Object.getOwnPropertyDescriptor(window.CSSStyleDeclaration.prototype, "cssText")
            }, t.prototype.sendInsertion = function(t, e) {
                var i = e[0],
                    r = e[1];
                if (t.ownerNode && (!Mt(t.ownerNode) || !this.sensitiveContentService.isSensitiveChild(t.ownerNode))) {
                    var n = this.nodeIdentifier.getId(t.ownerNode);
                    n && (this.onEventCallback({
                        date: ct(),
                        type: oe.STYLESHEET_RULE_INSERT,
                        args: Pt(r) ? [n, i, r] : [n, i]
                    }), this.staticResourceUrlTracker.scanCssString(i))
                }
            }, t.prototype.sendDeletion = function(t, e) {
                var i = e[0];
                if (t.ownerNode && (!Mt(t.ownerNode) || !this.sensitiveContentService.isSensitiveChild(t.ownerNode))) {
                    var r = this.nodeIdentifier.getId(t.ownerNode);
                    r && this.onEventCallback({
                        date: ct(),
                        type: oe.STYLESHEET_RULE_DELETE,
                        args: [r, i]
                    })
                }
            }, q([zt("styleSheetRuleTracker.setStyleDeclarationCssText")], t.prototype, "setStyleDeclarationCssText", null), q([zt("styleSheetRuleTracker.sendInsertion")], t.prototype, "sendInsertion", null), q([zt("styleSheetRuleTracker.sendDeletion")], t.prototype, "sendDeletion", null), t
        }(),
        Xe = function() {
            function t() {
                this.documentIdentifiedHandlers = [], this.currentCsId = 1
            }
            return t.prototype.identifyNodes = function(t) {
                for (var e, i = new Set, r = document.createNodeIterator(t, NodeFilter.SHOW_ALL, null, !1); e = r.nextNode();)
                    if (e.__contentsquare_identifier = this.currentCsId, i.add(this.currentCsId), this.currentCsId += 1, f(e) && csElementshadowRoot.apply(e)) {
                        var n = csElementshadowRoot.apply(e);
                        this.identifyNodes(n).forEach((function(t) {
                            return i.add(t)
                        }))
                    } else C(e) && this.notifySubscribers(e);
                return i
            }, t.prototype.getId = function(t) {
                return t.__contentsquare_identifier
            }, t.prototype.getIds = function(t) {
                for (var e, i = new Set, r = document.createNodeIterator(t, NodeFilter.SHOW_ALL, null, !1); e = r.nextNode();) {
                    var n = e.__contentsquare_identifier;
                    if (n && i.add(n), f(e) && csElementshadowRoot.apply(e)) {
                        var o = csElementshadowRoot.apply(e);
                        this.getIds(o).forEach((function(t) {
                            return i.add(t)
                        }))
                    }
                }
                return i
            }, t.prototype.onDocumentIdentified = function(t) {
                csArray.prototype.push.call(this.documentIdentifiedHandlers, t)
            }, t.prototype.notifySubscribers = function(t) {
                for (var e = 0, i = this.documentIdentifiedHandlers; e < i.length; e++) {
                    (0, i[e])(t)
                }
            }, t
        }(),
        Je = function() {
            function t() {}
            return t.prototype.beforeSerializeChildren = function(t, e, i) {
                return e
            }, t.prototype.beforeSerializeAttributes = function(t, e, i) {
                return e
            }, t.prototype.serializeNode = function(t, e, i) {
                return e
            }, t.prototype.afterSerialize = function(t, e, i) {
                return e
            }, t.prototype.afterSerializeShadowRoot = function(t, e, i) {
                return e
            }, t.prototype.serializeElementNode = function(t, e, i) {
                return e
            }, t.prototype.serializeAttribute = function(t, e, i, r) {
                return i
            }, t.prototype.serializeTextNode = function(t, e, i) {
                return e
            }, t.prototype.serializeCDATASectionNode = function(t, e, i) {
                return e
            }, t.prototype.serializeCommentNode = function(t, e, i) {
                return e
            }, t.prototype.serializeDoctypeNode = function(t, e, i) {
                return e
            }, t.prototype.serializeDocumentNode = function(t, e, i) {
                return e
            }, t.prototype.serializeShadowRootNode = function(t, e, i) {
                return e
            }, t
        }(),
        Qe = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.sensitiveContentService = e, i
            }
            return V(e, t), e.prototype.beforeSerializeChildren = function(t, e) {
                return this.isSensitiveElementNode(t) || this.hasSensitiveShadowHost(t) ? [] : e
            }, e.prototype.beforeSerializeAttributes = function(t, e) {
                var i = this;
                return this.isSensitiveElementNode(t) && !E(t) && (csArray.prototype.push.call(e, this.createSensitiveElementDimensionsAttribute(t)), t.hasAttribute("data-cs-mask") || csArray.prototype.push.call(e, document.createAttribute("data-cs-mask"))), csArray.prototype.filter.call(e, (function(e) {
                    return !i.sensitiveContentService.isSensitiveAttribute(t, e.name)
                }))
            }, e.prototype.isSensitiveElementNode = function(t) {
                return f(t) && this.sensitiveContentService.isSensitive(t)
            }, e.prototype.hasSensitiveShadowHost = function(t) {
                return T(t) && this.sensitiveContentService.isSensitive(t.host)
            }, e.prototype.createSensitiveElementDimensionsAttribute = function(t) {
                var e = t.getBoundingClientRect(),
                    i = document.createAttribute("style");
                return i.value = "width: ".concat(e.width, "px !important; height: ").concat(e.height, "px !important;"), i
            }, e
        }(Je),
        Ze = ["id", "class", "style", "src", "srcset", "sizes", "href", "rel", "type", "width", "height", "media", "align", "dir", "bgcolor", "color", "border", "colspan", "rowspan", "cols", "rows", "size", "start", "data-cs-override-id"],
        $e = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.pii = e, r.configuration = i, r.allWhitelistedAttributes = [], r
            }
            return V(e, t), e.prototype.init = function() {
                this.allWhitelistedAttributes = H(H([], Ze, !0), this.configuration.whitelistedAttributes, !0)
            }, e.prototype.beforeSerializeChildren = function(t, e, i) {
                return (S(t) || this.isWhitelistedElement(t)) && (i.withAnonymization = !1), e
            }, e.prototype.serializeNode = function(t, e, i) {
                return e.anonymized = i.withAnonymization, e
            }, e.prototype.serializeAttribute = function(t, e, i, r) {
                i.anonymized = r.withAnonymization;
                var n = this.getAnonymizedAttributeValue(t, r.withAnonymization, i.name, i.value);
                return i.value = n, i
            }, e.prototype.serializeTextNode = function(t, e, i) {
                return e.data = this.getAnonymizedText(i.withAnonymization, t, e.data), e
            }, e.prototype.serializeCDATASectionNode = function(t, e, i) {
                var r = t.data;
                return e.data = i.withAnonymization ? je(r) : this.pii.anonymize(r), e
            }, e.prototype.getAnonymizedText = function(t, e, i) {
                if (csNodeparentNode.apply(e)) {
                    if (S(csNodeparentNode.apply(e))) return i;
                    if (this.isWhitelistedElement(csNodeparentNode.apply(e))) return this.pii.anonymize(i)
                }
                return t ? je(i) : this.pii.anonymize(i)
            }, e.prototype.getAnonymizedAttributeValue = function(t, e, i, r) {
                return this.isWhitelistedAttribute(i) || f(n = t) && "ownerSVGElement" in n ? r : e ? "" : this.pii.anonymize(r);
                var n
            }, e.prototype.setWhitelistedElementsSelector = function(t) {
                this.whitelistedElementsSelector = t
            }, e.prototype.isWhitelistedAttribute = function(t) {
                return -1 !== csArray.prototype.indexOf.call(this.allWhitelistedAttributes, t)
            }, e.prototype.isWhitelistedElement = function(t) {
                return f(t) && (t.hasAttribute("data-cs-capture") || this.elementMatchesWhitelistedSelectors(t))
            }, e.prototype.elementMatchesWhitelistedSelectors = function(t) {
                return !!this.whitelistedElementsSelector && A.call(t, this.whitelistedElementsSelector)
            }, e
        }(Je),
        ti = function() {
            function t(t) {
                this.ramStorage = {}, this.byteSizeCounter = new Ae(t)
            }
            return t.prototype.save = function(t) {
                var e = t.key,
                    i = t.metadata,
                    r = t.events;
                this.byteSizeCounter.isThresholdReached() || (this.byteSizeCounter.addString(e), "string" == typeof r ? this.byteSizeCounter.addString(r) : this.byteSizeCounter.addArrayBuffer(r), this.byteSizeCounter.isThresholdReached() || (this.ramStorage[e] = {
                    metadata: i,
                    events: r
                }))
            }, t.prototype.recover = function(t) {
                var e = this,
                    i = [];
                csArray.prototype.forEach.call(this.getStorageKeys(), (function(t) {
                    var r = e.ramStorage[t];
                    void 0 !== r && (csArray.prototype.push.call(i, r), e.removeItem(t))
                })), 0 !== i.length && (t(i), this.byteSizeCounter.reset())
            }, t.prototype.getStorageKeys = function() {
                return Object.keys(this.ramStorage)
            }, t.prototype.removeItem = function(t) {
                delete this.ramStorage[t]
            }, t
        }();
    ! function(t) {
        t[t.NOT_STARTED = 0] = "NOT_STARTED", t[t.OPEN_IN_PROGRESS = 1] = "OPEN_IN_PROGRESS", t[t.OPEN_FAILED = 2] = "OPEN_FAILED", t[t.READY = 3] = "READY"
    }(Ke || (Ke = {}));
    var ei = function() {
            function t(t, e, i) {
                this.storageName = t, this.onOpenError = i, this.cacheState = Ke.NOT_STARTED, this.toBeSavedBuffer = [], this.recoveryInProgress = !1, this.byteSizeCounter = new Ae(e), this.init()
            }
            return t.prototype.init = function() {
                return U(this, void 0, void 0, (function() {
                    return B(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.openCache()];
                            case 1:
                                return t.sent(), this.cacheState === Ke.READY ? this.flushToBeSavedBuffer() : this.onOpenError(this.toBeSavedBuffer), [2]
                        }
                    }))
                }))
            }, t.prototype.flushToBeSavedBuffer = function() {
                var t = this;
                csArray.prototype.forEach.call(this.toBeSavedBuffer, (function(e) {
                    t.save(e)
                })), this.toBeSavedBuffer = []
            }, t.prototype.save = function(t) {
                return U(this, void 0, void 0, (function() {
                    var e, i, r;
                    return B(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), this.cacheState === Ke.OPEN_IN_PROGRESS ? (csArray.prototype.push.call(this.toBeSavedBuffer, t), [2]) : this.cacheState !== Ke.READY || this.byteSizeCounter.isThresholdReached() ? [2] : (e = t.key, i = t.metadata, r = t.events, this.byteSizeCounter.addString(e), "string" == typeof r ? this.byteSizeCounter.addString(r) : this.byteSizeCounter.addArrayBuffer(r), this.byteSizeCounter.isThresholdReached() ? [2] : [4, this.cache.put(e, new Response(r, {
                                    headers: i
                                }))]);
                            case 1:
                                return n.sent(), [3, 3];
                            case 2:
                                return n.sent(), [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.recover = function(t) {
                return U(this, void 0, void 0, (function() {
                    return B(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return this.cache ? [3, 2] : [4, this.openCache()];
                            case 1:
                                if (e.sent(), this.cacheState !== Ke.READY) return [2];
                                e.label = 2;
                            case 2:
                                return this.doRecover(t), [2]
                        }
                    }))
                }))
            }, t.prototype.openCache = function() {
                return U(this, void 0, void 0, (function() {
                    var t;
                    return B(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), this.cacheState = Ke.OPEN_IN_PROGRESS, t = this, [4, window.caches.open(this.storageName)];
                            case 1:
                                return t.cache = e.sent(), this.cacheState = Ke.READY, [3, 3];
                            case 2:
                                return e.sent(), this.cacheState = Ke.OPEN_FAILED, [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.doRecover = function(t) {
                return U(this, void 0, void 0, (function() {
                    var e, i, r, n, o = this;
                    return B(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                return s.trys.push([0, , 5, 6]), this.recoveryInProgress ? [2] : (this.recoveryInProgress = !0, [4, this.cache.keys()]);
                            case 1:
                                return 0 === (e = s.sent()).length ? [2] : [4, this.cache.matchAll()];
                            case 2:
                                return i = s.sent(), r = csArray.prototype.map.call(i, (function(t) {
                                    var e = {};
                                    t.headers.forEach((function(t, i) {
                                        e[i] = t
                                    })), delete e["content-type"];
                                    var i = e.datatype;
                                    return "json" === i || "base64" === i ? t.text().then((function(t) {
                                        return {
                                            metadata: e,
                                            events: t
                                        }
                                    })) : t.arrayBuffer().then((function(t) {
                                        return {
                                            metadata: e,
                                            events: t
                                        }
                                    }))
                                })), [4, Promise.all(r)];
                            case 3:
                                return n = s.sent(), [4, Promise.all(csArray.prototype.map.call(e, (function(t) {
                                    return o.cache.delete(t)
                                })))];
                            case 4:
                                return s.sent(), t(n), this.byteSizeCounter.reset(), [3, 6];
                            case 5:
                                return this.recoveryInProgress = !1, [7];
                            case 6:
                                return [2]
                        }
                    }))
                }))
            }, t
        }(),
        ii = function() {
            function t(t) {
                "caches" in window ? this.setCachesStrategy(t) : this.setRamStorageStrategy()
            }
            return t.prototype.save = function(t) {
                this.storageStrategy.save(t)
            }, t.prototype.recover = function(t) {
                this.storageStrategy.recover(t)
            }, t.prototype.setCachesStrategy = function(e) {
                var i = this;
                this.storageStrategy = new ei(e, t.MAX_SIZE, (function(t) {
                    i.setRamStorageStrategy(t)
                }))
            }, t.prototype.setRamStorageStrategy = function(e) {
                var i = this;
                this.storageStrategy = new ti(t.MAX_SIZE), e && csArray.prototype.forEach.call(e, (function(t) {
                    i.storageStrategy.save(t)
                }))
            }, t.MAX_SIZE = 16777216, t
        }(),
        ri = function() {
            function t() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.requestParametersProviders = t
            }
            return t.prototype.addProvider = function(t) {
                csArray.prototype.push.call(this.requestParametersProviders, t)
            }, t.prototype.getRequestParameters = function() {
                return csArray.prototype.reduce.call(this.requestParametersProviders, (function(t, e) {
                    return z(z({}, e.getRequestParameters()), t)
                }), {})
            }, t
        }(),
        ni = function() {
            function t(t) {
                this.asyncTaskFactory = t, this.userActive = !1, this.pendingInactivity = null
            }
            return t.prototype.start = function() {
                this.userActive = !0, this.createPendingInactivity()
            }, t.prototype.stop = function() {
                this.userActive = !1, this.clearPendingInactivity()
            }, t.prototype.trackActivity = function() {
                this.userActive || (this.userActive = !0, this.onActivityResumedCallback()), this.clearPendingInactivity(), this.createPendingInactivity()
            }, t.prototype.createPendingInactivity = function() {
                var t = this;
                this.pendingInactivity = this.asyncTaskFactory.create("recorded user inactive", (function() {
                    t.userActive = !1, t.clearPendingInactivity(), t.onActivityStoppedCallback()
                }), 5e3)
            }, t.prototype.clearPendingInactivity = function() {
                null !== this.pendingInactivity && (this.pendingInactivity.cancel(), this.pendingInactivity = null)
            }, t.prototype.isUserActive = function() {
                return this.userActive
            }, t.prototype.onActivityStopped = function(t) {
                this.onActivityStoppedCallback = t
            }, t.prototype.onActivityResumed = function(t) {
                this.onActivityResumedCallback = t
            }, t
        }(),
        oi = function() {
            function t(t, e, i) {
                var r = this;
                this.taskName = t, this.task = e, this.timeout = i, this.timeoutId = setTimeout((function() {
                    r.execute()
                }), this.timeout)
            }
            return t.prototype.execute = function() {
                var t = this;
                Vt.tryToExecute(this.taskName, (function() {
                    t.task()
                }))()
            }, t.prototype.cancel = function() {
                clearTimeout(this.timeoutId)
            }, t
        }(),
        si = function() {
            function t() {}
            return t.prototype.create = function(t, e, i) {
                return new oi(t, e, i)
            }, t
        }(),
        ai = function() {
            function t(t, e) {
                var i = this;
                this.location = t, this.pii = e, this.eventHandlers = [{
                    boundElement: window,
                    type: "resize",
                    listener: function() {
                        return i.resizeListener()
                    }
                }, {
                    boundElement: window,
                    type: "hashchange",
                    listener: function() {
                        return i.hashChangeListener()
                    }
                }, {
                    boundElement: document,
                    type: "visibilitychange",
                    listener: function() {
                        return i.visibilityChangeListener()
                    }
                }]
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = function(e) {
                    t(e)
                }
            }, t.prototype.start = function() {
                this.bindHandlers(), this.triggerInitialEvents()
            }, t.prototype.stop = function() {
                this.unbindHandlers()
            }, t.prototype.bindHandlers = function() {
                csArray.prototype.forEach.call(this.eventHandlers, (function(t) {
                    return de(t)
                }))
            }, t.prototype.unbindHandlers = function() {
                csArray.prototype.forEach.call(this.eventHandlers, (function(t) {
                    return fe(t)
                }))
            }, t.prototype.triggerInitialEvents = function() {
                this.resizeListener(), this.hashChangeListener()
            }, t.prototype.resizeListener = function() {
                this.onEventCallback({
                    type: oe.RESIZE,
                    args: [qe.windowWidth(), qe.windowHeight()],
                    date: ct()
                })
            }, t.prototype.hashChangeListener = function() {
                this.onEventCallback({
                    type: oe.HASH_CHANGE,
                    args: [this.pii.anonymize(this.location.href)],
                    date: ct()
                })
            }, t.prototype.visibilityChangeListener = function() {
                this.onEventCallback({
                    type: oe.VISIBILITY_CHANGE,
                    args: [document.visibilityState],
                    date: ct()
                })
            }, q([zt("resize")], t.prototype, "resizeListener", null), q([zt("hashChange")], t.prototype, "hashChangeListener", null), q([zt("visibilityChange")], t.prototype, "visibilityChangeListener", null), t
        }(),
        ci = function(t) {
            function e(e, i, r, n, o) {
                var s = t.call(this) || this;
                return s.recordingPageEventsTracker = e, s.recordingMutationsTracker = i, s.recordingActivityTracker = r, s.recordingRequest = n, s.mutationSerializer = o, s.recordingRequestDuringInactivityCount = 0, s.isMutationTrackerStopped = !1, s
            }
            return V(e, t), e.prototype.init = function() {
                var t = this;
                this.recordingPageEventsTracker.onEvent((function() {
                    t.recordingActivityTracker.trackActivity(), t.recordingRequestDuringInactivityCount = 0
                })), this.recordingRequest.after((function() {
                    t.recordingRequestDuringInactivityCount += 1, t.stopMutationTrackerIfNeeded()
                })), this.recordingActivityTracker.onActivityStopped((function() {
                    t.stopMutationTrackerIfNeeded()
                })), this.recordingActivityTracker.onActivityResumed((function() {
                    t.isMutationTrackerStopped && (t.recordingMutationsTracker.start(), t.isMutationTrackerStopped = !1)
                }))
            }, e.prototype.onStart = function() {
                this.recordingActivityTracker.start()
            }, e.prototype.onStop = function() {
                this.recordingActivityTracker.stop()
            }, e.prototype.stopMutationTrackerIfNeeded = function() {
                !this.isMutationTrackerStopped && !this.mutationSerializer.isDOMSerializationInProgress() && !this.recordingActivityTracker.isUserActive() && this.recordingRequestDuringInactivityCount >= 2 && (this.recordingMutationsTracker.stop(), this.isMutationTrackerStopped = !0)
            }, e
        }(_e),
        ui = i(2);

    function pi(t) {
        var e = csString.prototype.trim.call(t);
        if ("" === t) return [];
        var i, r = (i = e, csString.prototype.split.call(i, /\s(.+)/)),
            n = r[0],
            o = r[1];
        return o ? (K(n, ",") || (o = function(t) {
            return csString.prototype.split.call(t, /,(.+)/)[1] || ""
        }(o)), H([li(n)], pi(o), !0)) : [li(n)]
    }

    function li(t) {
        return csString.prototype.split.call(t, /,$/)[0]
    }
    var hi, di = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return V(e, t), e.prototype.onEvent = function(t) {
            this.onEventCallback = t
        }, e.prototype.serializeElementNode = function(t, e, i) {
            return this.scanElement(t), e
        }, e.prototype.beforeSerializeChildren = function(t, e, i) {
            return this.scanStyleElement(t, e), e
        }, e.prototype.scanElement = function(t) {
            this.scanElementAttributes(t)
        }, e.prototype.scanAttribute = function(t, e) {
            this.scanElementAttributes(t, e)
        }, e.prototype.scanText = function(t) {
            y(t) && csNodeparentNode.apply(t) && S(csNodeparentNode.apply(t)) && this.scanCssString(t.data)
        }, e.prototype.scanStyleElement = function(t, e) {
            if (S(t))
                for (var i = 0, r = e; i < r.length; i++) {
                    var n = r[i];
                    y(n) && this.scanCssString(n.data)
                }
        }, e.prototype.scanElementAttributes = function(t, e) {
            this.scanCssLink(t, e), this.scanImage(t, e), this.scanStyleAttribute(t, e)
        }, e.prototype.scanCssLink = function(t, e) {
            !m(t) || e && "href" !== e || !t.href || this.onStaticResourceUrl(t.href)
        }, e.prototype.scanImage = function(t, e) {
            g(t) && (e && "src" !== e || !t.src || this.isDataUrl(t.src) || null === t.getAttribute("src") || this.isHashStartUrl(t.getAttribute("src")) || this.onStaticResourceUrl(t.src), e && "srcset" !== e || !t.srcset || this.scanSrcset(t.srcset))
        }, e.prototype.scanStyleAttribute = function(t, e) {
            if ((!e || "style" === e) && t.hasAttribute("style")) {
                var i = t.getAttribute("style");
                if ("string" != typeof i) throw new Error("Unexpected style: " + t.outerHTML);
                this.scanCssString(i)
            }
        }, e.prototype.isHashStartUrl = function(t) {
            return j(t, "#")
        }, e.prototype.isDataUrl = function(t) {
            return j(t, "data:")
        }, e.prototype.scanCssString = function(t) {
            this.processRawUrls(Object(ui.extractFrom)(t))
        }, e.prototype.scanSrcset = function(t) {
            this.processRawUrls(pi(t))
        }, e.prototype.processRawUrls = function(t) {
            var e = this;
            return csArray.prototype.forEach.call(csArray.prototype.map.call(csArray.prototype.filter.call(csArray.prototype.filter.call(t, (function(t) {
                return !e.isDataUrl(t)
            })), (function(t) {
                return !e.isHashStartUrl(t)
            })), (function(t) {
                return yt(t)
            })), (function(t) {
                return e.onStaticResourceUrl(t)
            }))
        }, e.prototype.onStaticResourceUrl = function(t) {
            this.onEventCallback({
                date: ct(),
                type: oe.STATIC_RESOURCE_URL,
                args: [t]
            })
        }, e
    }(Je);
    ! function(t) {
        t.REQUEST_START = "requestStart", t.DOM_INTERACTIVE = "domInteractive"
    }(hi || (hi = {}));
    var fi = function() {
            function t(t) {
                this.windowPerformance = t.performance
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.areTimingsAvailable() && this.recordPerformanceTimings()
            }, t.prototype.recordPerformanceTimings = function() {
                var t = this.getPerformanceTimings();
                this.onEventCallback({
                    args: t,
                    date: ct(),
                    type: oe.PERFORMANCE_TIMINGS
                })
            }, t.prototype.areTimingsAvailable = function() {
                return !(!this.windowPerformance || !this.windowPerformance.timing)
            }, t.prototype.getPerformanceTimings = function() {
                return [{
                    performanceTiming: hi.REQUEST_START,
                    timestamp: this.windowPerformance.timing.requestStart
                }, {
                    performanceTiming: hi.DOM_INTERACTIVE,
                    timestamp: this.windowPerformance.timing.domInteractive
                }]
            }, t
        }(),
        yi = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.monkeyPatcher = e, i
            }
            return V(e, t), e.prototype.init = function() {
                this.initInterceptors(), this.initMutationObserver()
            }, e.prototype.initMutationObserver = function() {
                var t = this;
                this.observer = new csMutationObserver((function(e) {
                    t.handleMutations(e)
                }))
            }, e.prototype.initInterceptors = function() {
                var t = this;
                this.supportAttachShadow() && (this.attachShadowInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: Element.prototype,
                    methodName: "attachShadow",
                    hook: function(e) {
                        var i = e.context,
                            r = e.result;
                        return t.handleAttachShadow(i, r)
                    }
                })), this.supportCreateShadowRoot() && (this.createShadowRootInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: Element.prototype,
                    methodName: "createShadowRoot",
                    hook: function(e) {
                        var i = e.context,
                            r = e.result;
                        return t.handleAttachShadow(i, r)
                    }
                }))
            }, e.prototype.onChildListMutation = function(t) {
                this.childListMutationCallback = t
            }, e.prototype.onCharacterDataMutation = function(t) {
                this.characterDataMutationCallback = t
            }, e.prototype.onAttributesMutation = function(t) {
                this.attributesMutationCallback = t
            }, e.prototype.onAttachShadowMutation = function(t) {
                this.attachShadowMutationCallback = t
            }, e.prototype.observe = function(t, e) {
                this.isStarted && this.observer.observe(t, e)
            }, e.prototype.onStart = function() {
                this.attachShadowInterceptor && this.attachShadowInterceptor.activate(), this.createShadowRootInterceptor && this.createShadowRootInterceptor.activate()
            }, e.prototype.onStop = function() {
                this.attachShadowInterceptor && this.attachShadowInterceptor.deactivate(), this.createShadowRootInterceptor && this.createShadowRootInterceptor.deactivate(), this.observer.disconnect()
            }, e.prototype.flushPendingMutations = function() {
                if (this.isStarted) {
                    var t = this.observer.takeRecords();
                    this.handleMutations(t)
                }
            }, e.prototype.supportAttachShadow = function() {
                return window.Element && window.Element.prototype && "function" == typeof window.Element.prototype.attachShadow
            }, e.prototype.supportCreateShadowRoot = function() {
                return window.Element && window.Element.prototype && "function" == typeof window.Element.prototype.createShadowRoot
            }, e.prototype.handleMutations = function(t) {
                for (var e = ct(), i = new Set, r = t.length > 1 ? this.filterUselessAttributesMutations(t) : t, n = 0; n < r.length; n += 1) {
                    var o = r[n];
                    switch (o.date = e, o.type) {
                        case "attributes":
                            this.attributesMutationCallback(o);
                            break;
                        case "characterData":
                            this.characterDataMutationCallback(o);
                            break;
                        case "childList":
                            this.childListMutationCallback(o, i);
                            break;
                        default:
                            throw new Error("mutation type is not supported")
                    }
                }
            }, e.prototype.filterUselessAttributesMutations = function(t) {
                for (var e = new Map, i = 0; i < t.length; i += 1) {
                    if ("attributes" === (l = t[i]).type) {
                        var r = l.target,
                            n = l.attributeNamespace,
                            o = l.attributeName,
                            s = "".concat(n || "", " ").concat(o),
                            a = e.get(r),
                            c = Ue.getAttributeNS(r, n, o) === l.oldValue ? "none" : "last";
                        if (a) a.has(s) || a.set(s, c);
                        else {
                            var u = new Map;
                            u.set(s, c), e.set(r, u)
                        }
                    }
                }
                var p = [];
                for (i = t.length - 1; i >= 0; i -= 1) {
                    var l;
                    if ("attributes" === (l = t[i]).type) {
                        r = l.target, n = l.attributeNamespace, o = l.attributeName, s = "".concat(n || "", " ").concat(o);
                        "last" === (a = e.get(r)).get(s) && (csArray.prototype.push.call(p, l), a.set(s, "none"))
                    } else csArray.prototype.push.call(p, l)
                }
                return csArray.prototype.reverse.call(p)
            }, e.prototype.handleAttachShadow = function(t, e) {
                this.attachShadowMutationCallback({
                    shadowRoot: e,
                    date: ct(),
                    target: t
                })
            }, q([zt("mutations")], e.prototype, "handleMutations", null), e
        }(_e),
        vi = function(t) {
            function e(e, i) {
                var r = t.call(this, e) || this;
                return r.nodeIdentifier = i, r.recordingMutationObserverOptions = {
                    subtree: !0,
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    attributeOldValue: !0,
                    characterDataOldValue: !0
                }, r
            }
            return V(e, t), e.prototype.init = function() {
                t.prototype.init.call(this), this.initSubscribers()
            }, e.prototype.initSubscribers = function() {
                var t = this;
                this.nodeIdentifier.onDocumentIdentified((function(e) {
                    t.observe(e, t.recordingMutationObserverOptions)
                }))
            }, e
        }(yi);

    function mi() {
        var t, e = (t = new Error).stack ? csArray.prototype.filter.call(csString.prototype.split.call(t.stack, "\n"), (function(t) {
            return "Error" !== t && -1 === csString.prototype.indexOf.call(csString.prototype.toLowerCase.call(t), "promise ") && -1 === csString.prototype.indexOf.call(t, "[native code]")
        })) : [];
        if (0 === e.length) return "";
        var i = function(t) {
            return t.length > 0 ? gi(t[0]) : ""
        }(e);
        return "" === i || 0 === (e = function(t, e) {
            return csArray.prototype.filter.call(t, (function(t) {
                return -1 === csString.prototype.indexOf.call(t, e)
            }))
        }(e, i)).length ? "" : gi(e[0])
    }

    function gi(t) {
        var e, i = "";
        e = t;
        var r = (-1 !== csString.prototype.indexOf.call(e, "@") ? new RegExp("@(.+):(\\d+):(\\d+)$") : new RegExp("\\((.+):(\\d+):(\\d+)\\)")).exec(t);
        return r && (i = r[1]), i
    }
    var Si, Ei, Ci = function() {
            function t() {
                this.defaultHookPrepareArgs = function(t, e) {
                    return {
                        context: t,
                        args: e
                    }
                }
            }
            return t.prototype.copyFunctionSignature = function(t, e) {
                t.prototype = e.prototype, Object.defineProperty(t, "toString", {
                    value: function() {
                        return e.toString()
                    }
                })
            }, t.prototype.createSyncFunctionInterceptor = function(t) {
                var e, i = t.target,
                    r = t.methodName,
                    n = t.hook,
                    o = t.hookPrepareArgs,
                    s = void 0 === o ? this.defaultHookPrepareArgs : o,
                    a = t.options;
                if (!(null === (e = Object.getOwnPropertyDescriptor(i, r)) || void 0 === e ? void 0 : e.writable)) return Vt.warn("Cannot intercept read only function '".concat(csString(r), "' of object '").concat(i, "'")), null;
                var c = !1,
                    u = i[r];
                if ("function" == typeof u) {
                    var p = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        var i, r = s(this, t),
                            o = u.apply(this, t);
                        c && (a && a.withCallerName && (i = mi()), Vt.tryToExecute("SyncFunctionInterceptor", (function() {
                            n(z(z({
                                result: o
                            }, r), {
                                callerName: i
                            }))
                        }))());
                        return o
                    };
                    this.copyFunctionSignature(p, u), i[r] = p
                }
                return {
                    activate: function() {
                        return c = !0
                    },
                    deactivate: function() {
                        return c = !1
                    }
                }
            }, t.prototype.createAsyncFunctionInterceptor = function(t) {
                var e, i = t.target,
                    r = t.methodName,
                    n = t.hook,
                    o = t.hookPrepareArgs,
                    s = void 0 === o ? this.defaultHookPrepareArgs : o,
                    a = t.options;
                if (!(null === (e = Object.getOwnPropertyDescriptor(i, r)) || void 0 === e ? void 0 : e.writable)) return Vt.warn("Cannot intercept read only function '".concat(csString(r), "' of object '").concat(i, "'")), null;
                var c = !1,
                    u = i[r];
                if ("function" == typeof u) {
                    var p = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        return U(this, void 0, void 0, (function() {
                            var e, i, r;
                            return B(this, (function(o) {
                                return e = s(this, t), i = u.apply(this, t), c && (a && a.withCallerName && (r = mi()), Vt.tryToExecute("AsyncFunctionInterceptor", (function() {
                                    n(z(z({
                                        result: i
                                    }, e), {
                                        callerName: r
                                    }))
                                }))()), [2, i]
                            }))
                        }))
                    };
                    this.copyFunctionSignature(p, u), i[r] = p
                }
                return {
                    activate: function() {
                        return c = !0
                    },
                    deactivate: function() {
                        return c = !1
                    }
                }
            }, t.prototype.createDescriptorInterceptor = function(t, e, i) {
                var r = !1,
                    n = Object.getOwnPropertyDescriptor(t, e);
                if (n) {
                    if (!n.configurable) return Vt.warn("Cannot intercept read only property '".concat(csString(e), "' of object '").concat(t, "'")), null;
                    Object.defineProperty(t, e, z(z({}, n.get ? {
                        get: function() {
                            return n.get.apply(this, arguments)
                        }
                    } : {}), n.set ? {
                        set: function() {
                            var t = this,
                                e = arguments,
                                o = n.set.apply(this, e);
                            return r && Vt.tryToExecute("DescriptorInterceptor", (function() {
                                i(t, e[0])
                            }))(), o
                        }
                    } : {}))
                }
                return {
                    activate: function() {
                        return r = !0
                    },
                    deactivate: function() {
                        return r = !1
                    }
                }
            }, t
        }(),
        Ti = function(t) {
            function e(e, i, r, n, o) {
                var s = t.call(this) || this;
                return s.configuration = e, s.nodeIdentifier = i, s.sensitiveContentService = r, s.textVisibilityBatch = n, s.textVisibilityDelay = o, s.isStarted = !1, s.seenInViewPort = new Set, s.seenGlobally = new Set, s
            }
            return V(e, t), e.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, e.prototype.start = function() {
                var t = this;
                this.isStarted || this.configuration.textVisibilityEnabled && window.IntersectionObserver && (this.intersectionObserver = new IntersectionObserver((function(e, i) {
                    t.handleIntersection(e, i)
                }), e.INTERSECTION_OPTIONS), this.mutationObserver = new csMutationObserver((function(e) {
                    t.handleMutations(e)
                })), this.isStarted = !0)
            }, e.prototype.stop = function() {
                this.isStarted && (this.textVisibilityBatch.clear(), this.intersectionObserver.disconnect(), this.mutationObserver.disconnect(), this.seenInViewPort.clear(), this.seenGlobally.clear(), this.isStarted = !1)
            }, e.prototype.flushEvents = function() {
                this.isStarted && this.onTextVisibility()
            }, e.prototype.serializeTextNode = function(t, e, i) {
                if (!this.isStarted || i.withAnonymization) return e;
                var r = t.parentElement;
                if (r && (this.sensitiveContentService.isSensitive(r) || this.sensitiveContentService.isSensitiveChild(r))) return e;
                if ("" !== csString.prototype.trim.call(t.data) && r && !S(r) && !E(r)) {
                    if (!Ue.isVisibleInDocument(r)) return this.observeMutation(r), this.observeIntersection(r), e;
                    var n = Ue.isInViewPort(r);
                    n || this.observeIntersection(r), this.processTextVisibilityFromSerialization(r, n)
                }
                return e
            }, e.prototype.observeIntersection = function(t) {
                this.intersectionObserver.observe(t)
            }, e.prototype.observeMutation = function(t) {
                this.mutationObserver.observe(t, {
                    attributeFilter: e.MUTATION_ATTRIBUTE_FILTER
                })
            }, e.prototype.processTextVisibilityAfterDelay = function(t, e, i) {
                Ue.isVisibleInDocument(t) && (this.pushIdSeenGlobally(e), Ue.isInViewPort(t) && i && (this.pushIdSeenInViewPort(e), this.intersectionObserver.unobserve(t)), this.textVisibilityBatch.isFull() && this.onTextVisibility())
            }, e.prototype.processTextVisibilityFromSerialization = function(t, e) {
                var i = this,
                    r = this.nodeIdentifier.getId(t);
                r ? this.seenInViewPort.has(r) || setTimeout((function() {
                    i.processTextVisibilityAfterDelay(t, r, e), i.seenGlobally.has(r) || i.observeMutation(t), !i.seenInViewPort.has(r) && e && i.observeIntersection(t)
                }), this.textVisibilityDelay) : Vt.warn("processTextVisibilityFromSerialization: node without identifier")
            }, e.prototype.processTextVisibilityFromMutation = function(t) {
                var e = this.nodeIdentifier.getId(t);
                e ? this.seenInViewPort.has(e) || this.processTextVisibility(t, e) : Vt.warn("processTextVisibilityFromMutation: node without identifier")
            }, e.prototype.processTextVisibilityFromIntersection = function(t, e) {
                var i = this.nodeIdentifier.getId(t);
                i ? this.seenInViewPort.has(i) ? e.unobserve(t) : this.processTextVisibility(t, i) : Vt.warn("processTextVisibilityFromIntersection: node without identifier")
            }, e.prototype.processTextVisibility = function(t, e) {
                var i = this,
                    r = this.isVisibleInViewPort(t);
                setTimeout((function() {
                    return i.processTextVisibilityAfterDelay(t, e, r)
                }), this.textVisibilityDelay)
            }, e.prototype.handleMutations = function(t) {
                var i = this;
                csArray.prototype.forEach.call(t, (function(t) {
                    var r = t.attributeName;
                    Mt(t.target) && !i.sensitiveContentService.isSensitiveChild(t.target) && r && -1 !== csArray.prototype.indexOf.call(e.MUTATION_ATTRIBUTE_FILTER, r) && i.processTextVisibilityFromMutation(t.target)
                }))
            }, e.prototype.handleIntersection = function(t, e) {
                var i = this;
                csArray.prototype.forEach.call(t, (function(t) {
                    t.isIntersecting && !i.sensitiveContentService.isSensitiveChild(t.target) && i.processTextVisibilityFromIntersection(t.target, e)
                }))
            }, e.prototype.isVisibleInViewPort = function(t) {
                return Ue.isVisibleInDocument(t) && Ue.isInViewPort(t)
            }, e.prototype.pushIdSeenInViewPort = function(t) {
                this.seenInViewPort.has(t) || (this.seenInViewPort.add(t), this.textVisibilityBatch.addIdInViewPort(t))
            }, e.prototype.pushIdSeenGlobally = function(t) {
                this.seenGlobally.has(t) || (this.seenGlobally.add(t), this.textVisibilityBatch.addIdInGlobally(t))
            }, e.prototype.onTextVisibility = function() {
                if (!this.textVisibilityBatch.isEmpty()) {
                    var t = {
                        visibleGlobally: this.textVisibilityBatch.flushIdsSeenGlobally(),
                        visibleInViewPort: this.textVisibilityBatch.flushIdsSeenInViewport()
                    };
                    this.onEventCallback({
                        type: oe.TEXT_VISIBILITY,
                        date: ct(),
                        args: [t]
                    })
                }
            }, e.INTERSECTION_OPTIONS = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            }, e.MUTATION_ATTRIBUTE_FILTER = ["style", "class", "hidden"], q([zt("TextVisibilityTracker.processTextVisibilityAfterDelay")], e.prototype, "processTextVisibilityAfterDelay", null), q([zt("TextVisibilityTracker.processTextVisibilityFromSerialization")], e.prototype, "processTextVisibilityFromSerialization", null), q([zt("TextVisibilityTracker.processTextVisibilityFromMutation")], e.prototype, "processTextVisibilityFromMutation", null), q([zt("TextVisibilityTracker.processTextVisibilityFromIntersection")], e.prototype, "processTextVisibilityFromIntersection", null), q([zt("TextVisibilityTracker.handleMutations")], e.prototype, "handleMutations", null), q([zt("TextVisibilityTracker.handleIntersection")], e.prototype, "handleIntersection", null), e
        }(Je),
        Ri = function(t) {
            function e(e, i) {
                var r = t.call(this, e, i) || this;
                return r.onBeaconSuccessCallbacks = [], r.onBeaconFailureCallbacks = [], r
            }
            return V(e, t), e.prototype.setRequestPayloadProvider = function(t) {
                this.requestPayloadProvider = t
            }, e.prototype.onBeaconSuccess = function(t) {
                csArray.prototype.push.call(this.onBeaconSuccessCallbacks, t)
            }, e.prototype.onBeaconFailure = function(t) {
                csArray.prototype.push.call(this.onBeaconFailureCallbacks, t)
            }, e.prototype.send = function() {
                csArray.prototype.forEach.call(this.beforeRequestCallbacks, (function(t) {
                    return t()
                }));
                var t = z(z({}, this.retrieveParameters()), {
                        enc: "raw"
                    }),
                    e = J.toQuery(t),
                    i = this.retrievePayload();
                this.sendBeacon(e, i) ? csArray.prototype.forEach.call(this.onBeaconSuccessCallbacks, (function(t) {
                    return t()
                })) : csArray.prototype.forEach.call(this.onBeaconFailureCallbacks, (function(t) {
                    return t()
                })), csArray.prototype.forEach.call(this.afterRequestCallbacks, (function(t) {
                    return t()
                }))
            }, e.prototype.retrievePayload = function() {
                return this.requestPayloadProvider ? this.requestPayloadProvider.getRequestPayload() : ""
            }, e.prototype.sendBeacon = function(t, e) {
                return void 0 !== navigator.sendBeacon && navigator.sendBeacon("".concat(this.domainUri, "/").concat(this.path, "?").concat(t), e)
            }, e
        }(tt),
        bi = function() {
            function t() {
                this.seenGloballyBuffer = [], this.seenInViewPortBuffer = []
            }
            return t.prototype.isFull = function() {
                return this.seenGloballyBuffer.length >= t.BATCH_SIZE || this.seenInViewPortBuffer.length >= t.BATCH_SIZE
            }, t.prototype.isEmpty = function() {
                return 0 === this.seenGloballyBuffer.length && 0 === this.seenInViewPortBuffer.length
            }, t.prototype.addIdInGlobally = function(t) {
                csArray.prototype.push.call(this.seenGloballyBuffer, t)
            }, t.prototype.addIdInViewPort = function(t) {
                csArray.prototype.push.call(this.seenInViewPortBuffer, t)
            }, t.prototype.clear = function() {
                this.seenGloballyBuffer = [], this.seenInViewPortBuffer = []
            }, t.prototype.flushIdsSeenGlobally = function() {
                var t = H([], this.seenGloballyBuffer, !0);
                return this.seenGloballyBuffer = [], t
            }, t.prototype.flushIdsSeenInViewport = function() {
                var t = H([], this.seenInViewPortBuffer, !0);
                return this.seenInViewPortBuffer = [], t
            }, t.BATCH_SIZE = 20, t
        }(),
        wi = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.encryptionService = e, i
            }
            return V(e, t), e.prototype.serializeTextNode = function(t, e) {
                var i;
                return (null === (i = t.parentElement) || void 0 === i ? void 0 : i.hasAttribute("data-cs-encrypt")) && (e.data = je(t.data), this.encryptionService.registerTextNodeToEncrypt({
                    textNode: t,
                    serializedTextData: e.data
                })), e
            }, e
        }(Je),
        Ai = function() {
            function t() {
                this.dataToEncryptBuffer = []
            }
            return t.prototype.onSerializeData = function(t) {
                this.onSerializeDataCallback = t
            }, t.prototype.addData = function(t) {
                csArray.prototype.push.call(this.dataToEncryptBuffer, t)
            }, t.prototype.serializeDataFromBuffer = function() {
                for (; this.dataToEncryptBuffer.length > 0;) {
                    var t = csArray.prototype.shift.call(this.dataToEncryptBuffer);
                    this.onSerializeDataCallback(t)
                }
            }, t.prototype.clear = function() {
                this.dataToEncryptBuffer = []
            }, t
        }(),
        Ii = function() {
            function t(t) {
                this.crypto = t, this.isEncryptionSupported = !1
            }
            return t.prototype.init = function() {
                this.isEncryptionSupported = this.canSupportEncryption(), this.isEncryptionSupported && (this.textEncoder = new TextEncoder)
            }, t.prototype.isSupported = function() {
                return this.isEncryptionSupported
            }, t.prototype.canSupportEncryption = function() {
                return !!(this.crypto && this.crypto.subtle && this.crypto.subtle.encrypt && self.CryptoKey && self.TextEncoder && csString.fromCodePoint)
            }, t
        }(),
        ki = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return V(e, t), e.prototype.exportInitializationVector = function(t) {
                return Ne(t)
            }, e.prototype.exportSecret = function(t) {
                var e;
                return U(this, void 0, void 0, (function() {
                    var i;
                    return B(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, this.crypto.subtle.exportKey("jwk", t)];
                            case 2:
                                return i = r.sent(), [2, null !== (e = i.k) && void 0 !== e ? e : null];
                            case 3:
                                return r.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.generateEncryptionKey = function() {
                return U(this, void 0, void 0, (function() {
                    return B(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                t.label = 1;
                            case 1:
                                return t.trys.push([1, 3, , 4]), [4, this.crypto.subtle.generateKey({
                                    name: "AES-CTR",
                                    length: 128
                                }, !0, ["encrypt", "decrypt"])];
                            case 2:
                                return [2, t.sent()];
                            case 3:
                                return t.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.generateInitializationVector = function() {
                return this.isSupported() ? this.crypto.getRandomValues(new Uint8Array(16)) : null
            }, e.prototype.encrypt = function(t, e) {
                return U(this, void 0, void 0, (function() {
                    var i, r;
                    return B(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                i = {
                                    counter: t.initializationVector,
                                    name: "AES-CTR",
                                    length: 64
                                }, r = this.textEncoder.encode(e), n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, this.crypto.subtle.encrypt(i, t.encryptionKey, r)];
                            case 2:
                                return [2, Ne(n.sent())];
                            case 3:
                                return n.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.canSupportEncryption = function() {
                return t.prototype.canSupportEncryption.call(this) && !!this.crypto.getRandomValues && !!this.crypto.subtle.generateKey && !!this.crypto.subtle.exportKey
            }, e
        }(Ii),
        Pi = function() {
            function t(t) {
                this.crypto = t, this.isDecryptionSupported = !1
            }
            return t.prototype.init = function() {
                this.isDecryptionSupported = this.canSupportDecryption(), this.isDecryptionSupported && (this.textDecoder = new TextDecoder)
            }, t.prototype.isSupported = function() {
                return this.isDecryptionSupported
            }, t.prototype.canSupportDecryption = function() {
                return !!(this.crypto && this.crypto.subtle && this.crypto.subtle.importKey && this.crypto.subtle.decrypt && self.CryptoKey && self.TextDecoder)
            }, t
        }(),
        Ni = (function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            V(e, t), e.prototype.importInitializationVector = function(t) {
                return Pe(t)
            }, e.prototype.importSecret = function(t) {
                return U(this, void 0, void 0, (function() {
                    var e, i;
                    return B(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                e = {
                                    alg: "A128CTR",
                                    ext: !0,
                                    k: t,
                                    key_ops: ["encrypt", "decrypt"],
                                    kty: "oct"
                                }, i = {
                                    name: "AES-CTR"
                                }, r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, this.crypto.subtle.importKey("jwk", e, i, !1, ["encrypt", "decrypt"])];
                            case 2:
                                return [2, r.sent()];
                            case 3:
                                return r.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.decrypt = function(t, e) {
                return U(this, void 0, void 0, (function() {
                    var i, r;
                    return B(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                i = {
                                    name: "AES-CTR",
                                    counter: t.initializationVector,
                                    length: 64
                                }, n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, this.crypto.subtle.decrypt(i, t.encryptionKey, Pe(e))];
                            case 2:
                                return r = n.sent(), [2, this.textDecoder.decode(r)];
                            case 3:
                                return n.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }
        }(Pi), function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return V(e, t), e.prototype.importKey = function(t) {
                return U(this, void 0, void 0, (function() {
                    return B(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, this.crypto.subtle.importKey("spki", Oe(t), {
                                    name: "RSA-OAEP",
                                    hash: "SHA-256"
                                }, !1, ["encrypt"])];
                            case 2:
                                return [2, e.sent()];
                            case 3:
                                return e.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.encrypt = function(t, e) {
                return U(this, void 0, void 0, (function() {
                    var i;
                    return B(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                if (!(i = this.truncateAndEncode(e, 190))) return [2, null];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, this.crypto.subtle.encrypt({
                                    name: "RSA-OAEP"
                                }, t.publicKey, i)];
                            case 2:
                                return [2, Ne(r.sent())];
                            case 3:
                                return r.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.truncateAndEncode = function(t, e) {
                for (var i = 0, r = 0, n = 0; n < t.length; n++) {
                    var o = csString.prototype.codePointAt.call(t, n);
                    if (!o) return null;
                    var s = this.getByteSize(o);
                    if (s + i > e) break;
                    r++, i += s
                }
                var a = csString.prototype.slice.call(t, 0, r);
                return this.textEncoder.encode(a)
            }, e.prototype.getByteSize = function(t) {
                return t <= 127 ? 1 : t <= 2047 ? 2 : t <= 65535 ? 3 : 4
            }, e.prototype.canSupportEncryption = function() {
                return t.prototype.canSupportEncryption.call(this) && !!this.crypto.subtle.importKey
            }, e
        }(Ii)),
        Oi = (function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            V(e, t), e.prototype.importKey = function(t) {
                return U(this, void 0, void 0, (function() {
                    return B(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, this.crypto.subtle.importKey("pkcs8", Oe(t), {
                                    name: "RSA-OAEP",
                                    hash: "SHA-256"
                                }, !1, ["decrypt"])];
                            case 2:
                                return [2, e.sent()];
                            case 3:
                                return e.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.decrypt = function(t, e) {
                return U(this, void 0, void 0, (function() {
                    var i;
                    return B(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, this.crypto.subtle.decrypt({
                                    name: "RSA-OAEP"
                                }, t.privateKey, Pe(e))];
                            case 2:
                                return i = r.sent(), [2, this.textDecoder.decode(i)];
                            case 3:
                                return r.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }
        }(Pi), function() {
            function t(t) {
                this.crypto = t, this.isHashingSupported = !1
            }
            return t.prototype.init = function() {
                this.isHashingSupported = this.canSupportHashing(), this.isHashingSupported && (this.textEncoder = new TextEncoder)
            }, t.prototype.canSupportHashing = function() {
                return !!(this.crypto && this.crypto.subtle && this.crypto.subtle.digest && self.TextEncoder && csArray.from)
            }, t.prototype.isSupported = function() {
                return this.isHashingSupported
            }, t.prototype.isValidInput = function(t) {
                return !!t && t.length <= 100
            }, t.prototype.formatInput = function(t, e) {
                var i = csString.prototype.toLowerCase.call(csString.prototype.trim.call(t));
                return "".concat(i, ":").concat(e)
            }, t.prototype.digest = function(t, e) {
                return U(this, void 0, void 0, (function() {
                    var i, r, n;
                    return B(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if (!this.isHashingSupported) return [2, null];
                                i = this.formatInput(t, e), r = this.textEncoder.encode(i), o.label = 1;
                            case 1:
                                return o.trys.push([1, 3, , 4]), [4, crypto.subtle.digest("SHA-1", r)];
                            case 2:
                                return n = o.sent(), [2, (s = n, a = csArray.from(new Uint8Array(s)), csArray.prototype.join.call(csArray.prototype.map.call(a, (function(t) {
                                    return csString.prototype.padStart.call(t.toString(16), 2, "0")
                                })), ""))];
                            case 3:
                                return o.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                        var s, a
                    }))
                }))
            }, t
        }());
    ! function(t) {
        t[t.TAP = 0] = "TAP", t[t.LONG_PRESS = 1] = "LONG_PRESS", t[t.DRAG = 2] = "DRAG", t[t.FLICK = 3] = "FLICK", t[t.PINCH_IN = 4] = "PINCH_IN", t[t.PINCH_OUT = 5] = "PINCH_OUT"
    }(Si || (Si = {})),
    function(t) {
        t[t.UP = 1] = "UP", t[t.DOWN = 2] = "DOWN", t[t.LEFT = 3] = "LEFT", t[t.RIGHT = 4] = "RIGHT"
    }(Ei || (Ei = {}));
    var Mi, Li = function() {
        function t(t, e, i) {
            this.gestureTracker = t, this.nodeIdentifier = e, this.sensitiveContentService = i
        }
        return t.prototype.start = function() {
            var e = this;
            this.gestureTracker.subscribe(t.TRACKER_IDENTIFIER, (function(t) {
                return e.processGesture(t)
            }))
        }, t.prototype.stop = function() {
            this.gestureTracker.unsubscribe(t.TRACKER_IDENTIFIER)
        }, t.prototype.onEvent = function(t) {
            this.onEventCallback = t
        }, t.prototype.processGesture = function(t) {
            if (t.target && (!f(t.target) || !this.sensitiveContentService.isSensitiveChild(t.target))) {
                var e = this.nodeIdentifier.getId(t.target);
                if (e) switch (t.type) {
                    case Si.DRAG:
                    case Si.FLICK:
                        this.triggerGestureRecognitionEvent(se.SWIPE, t, e);
                        break;
                    case Si.LONG_PRESS:
                        this.triggerGestureRecognitionEvent(se.LONG_PRESS, t, e);
                        break;
                    case Si.TAP:
                        this.triggerGestureRecognitionEvent(se.TAP, t, e);
                        break;
                    case Si.PINCH_IN:
                        this.triggerGestureRecognitionEvent(se.PINCH_IN, t, e);
                        break;
                    case Si.PINCH_OUT:
                        this.triggerGestureRecognitionEvent(se.PINCH_OUT, t, e)
                } else Vt.warn("processGesture: node without identifier")
            }
        }, t.prototype.triggerGestureRecognitionEvent = function(t, e, i) {
            var r = this.buildGestureEvent(e, t),
                n = {
                    type: oe.GESTURE_RECOGNITION,
                    args: [i, r],
                    date: ct()
                };
            this.onEventCallback(n)
        }, t.prototype.buildGestureEvent = function(t, e) {
            var i = {
                type: e
            };
            return t.direction && (i.direction = t.direction), t.distance && (i.distance = t.distance), t.velocity && (i.velocity = t.velocity), i
        }, t.TRACKER_IDENTIFIER = "RecordingGesturesTracker", t
    }();
    ! function(t) {
        t[t.WebElement = 0] = "WebElement", t[t.MobileView = 1] = "MobileView", t[t.WebViewContainer = 2] = "WebViewContainer"
    }(Mi || (Mi = {}));
    var Di = function() {
            function t(t) {
                this.processors = t
            }
            return t.prototype.serialize = function(t, e) {
                void 0 === e && (e = {});
                var i, r = z({}, e),
                    n = t.nodeType;
                switch (n) {
                    case Node.ELEMENT_NODE:
                        i = this.serializeElementNode(t, r);
                        break;
                    case Node.TEXT_NODE:
                        i = this.serializeTextNode(t, r);
                        break;
                    case Node.CDATA_SECTION_NODE:
                        i = this.serializeCDATASectionNode(t, r);
                        break;
                    case Node.COMMENT_NODE:
                        i = this.serializeCommentNode(t, r);
                        break;
                    case Node.DOCUMENT_TYPE_NODE:
                        i = this.serializeDoctypeNode(t, r);
                        break;
                    case Node.DOCUMENT_NODE:
                        i = this.serializeDocumentNode(t, r);
                        break;
                    case Node.DOCUMENT_FRAGMENT_NODE:
                        i = this.serializeDocumentFragmentNode(t, r);
                        break;
                    default:
                        throw new Error("serialization is not supported (nodeType: ".concat(n, ")"))
                }
                return i = csArray.prototype.reduce.call(this.processors, (function(e, i) {
                    return i.afterSerialize(t, e, r)
                }), i)
            }, t.prototype.serializeElementNode = function(t, e) {
                var i, r = csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = r.serializeNode(t, i, e);
                    return r.serializeElementNode(t, n, e)
                }), {
                    attributes: []
                });
                (i = csArray.prototype.push).call.apply(i, H([r.attributes], this.serializeAttributes(t, e), !1));
                var n = csElementshadowRoot.apply(t);
                return n && (r.shadowRoot = this.serializeShadowRootNode(n, e)), r.children = this.serializeChildren(t, e), r
            }, t.prototype.serializeAttributes = function(t, e) {
                var i = this,
                    r = Ce(t.attributes);
                return csArray.prototype.map.call(csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    return r.beforeSerializeAttributes(t, i, e)
                }), r), (function(r) {
                    return i.serializeAttribute(t, r, e)
                }))
            }, t.prototype.serializeAttribute = function(t, e, i) {
                return csArray.prototype.reduce.call(this.processors, (function(r, n) {
                    return n.serializeAttribute(t, e, r, i)
                }), {})
            }, t.prototype.runBeforeSerializeChildrenHook = function(t, e) {
                var i = Ce(csNodechildNodes.apply(t));
                return csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    return r.beforeSerializeChildren(t, i, e)
                }), i)
            }, t.prototype.serializeChildren = function(t, e) {
                var i = this;
                if (e.skipChildrenSerialization) return [];
                var r = this.runBeforeSerializeChildrenHook(t, e);
                return csArray.prototype.map.call(r, (function(t) {
                    return i.serialize(t, e)
                }))
            }, t.prototype.serializeTextNode = function(t, e) {
                return csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = r.serializeNode(t, i, e);
                    return r.serializeTextNode(t, n, e)
                }), {})
            }, t.prototype.serializeCDATASectionNode = function(t, e) {
                return csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = r.serializeNode(t, i, e);
                    return r.serializeCDATASectionNode(t, n, e)
                }), {})
            }, t.prototype.serializeCommentNode = function(t, e) {
                return csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = r.serializeNode(t, i, e);
                    return r.serializeCommentNode(t, n, e)
                }), {})
            }, t.prototype.serializeDoctypeNode = function(t, e) {
                return csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = r.serializeNode(t, i, e);
                    return r.serializeDoctypeNode(t, n, e)
                }), {})
            }, t.prototype.serializeDocumentNode = function(t, e) {
                var i = csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = r.serializeNode(t, i, e);
                    return r.serializeDocumentNode(t, n, e)
                }), {});
                return i.children = this.serializeChildren(t, e), i
            }, t.prototype.serializeShadowRootNode = function(t, e) {
                var i = csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = r.serializeNode(t, i, e);
                    return r.serializeShadowRootNode(t, n, e)
                }), {});
                return i.children = this.serializeChildren(t, e), i = csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    return r.afterSerializeShadowRoot(t, i, e)
                }), i)
            }, t.prototype.serializeDocumentFragmentNode = function(t, e) {
                if (t.mode) return this.serializeShadowRootNode(t, e);
                throw new Error("Not implemented yet.")
            }, t
        }(),
        _i = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return V(e, t), e.prototype.beforeSerializeChildren = function(t, e) {
                if (S(t)) {
                    var i = this.getAllCssRules(t);
                    if (null === i || 0 === i.length) return e;
                    if (this.isEmptyStyleElement(t)) csArray.prototype.push.call(e, this.createTextNodeFromRules(i));
                    else {
                        var r = this.getInlineCssRules(t);
                        if (r.length === i.length) return e;
                        for (var n = [], o = r.length; o < i.length; o += 1) csArray.prototype.push.call(n, i[o]);
                        csArray.prototype.push.call(e, this.createTextNodeFromRules(n))
                    }
                }
                return e
            }, e.prototype.getAllCssRules = function(t) {
                try {
                    var e = t.sheet;
                    return e ? e.cssRules || e.rules : null
                } catch (t) {
                    if ("SecurityError" !== t.name && "InvalidAccessError" !== t.name) throw t;
                    return null
                }
            }, e.prototype.getInlineCssRules = function(t) {
                var e = document.implementation.createHTMLDocument(""),
                    i = t.cloneNode(!0);
                return i.textContent = t.textContent, e.head.appendChild(i), this.getAllCssRules(i)
            }, e.prototype.isEmptyStyleElement = function(t) {
                var e = t.textContent || "";
                return /^\s*$/.test(e)
            }, e.prototype.createTextNodeFromRules = function(t) {
                var e = "";
                Re(t, (function(t) {
                    return e += t.cssText
                }));
                var i = document.createTextNode(e);
                return i.__contentsquare_artificial = !0, i
            }, e.prototype.serializeNode = function(t, e) {
                return e.nodeType = t.nodeType, e.format = Mi.WebElement, t.__contentsquare_artificial && (e.artificial = t.__contentsquare_artificial), e
            }, e.prototype.serializeElementNode = function(t, e) {
                return e.localName = t.localName, e.namespaceURI = t.namespaceURI, e
            }, e.prototype.serializeAttribute = function(t, e, i) {
                return i.name = e.name, i.value = e.value, i.namespaceURI = null !== e.namespaceURI ? e.namespaceURI : "", i
            }, e.prototype.serializeTextNode = function(t, e) {
                return e.data = t.data, e
            }, e.prototype.serializeCDATASectionNode = function(t, e) {
                return e.data = t.data, e
            }, e.prototype.serializeCommentNode = function(t, e) {
                return e.data = t.data, e
            }, e.prototype.serializeDoctypeNode = function(t, e) {
                return e.name = t.name, e.publicId = t.publicId, e.systemId = t.systemId, e
            }, e.prototype.serializeDocumentNode = function(t, i) {
                return i.baseURI = e.getBaseURI(t), i
            }, e.prototype.serializeShadowRootNode = function(t, e) {
                return e.mode = t.mode, t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && (e.adoptedStyleSheets = this.serializeStyleSheets(t.adoptedStyleSheets)), e
            }, e.prototype.serializeStyleSheets = function(t) {
                var e = this;
                return csArray.prototype.map.call(t, (function(t) {
                    return e.serializeStyleSheet(t)
                }))
            }, e.prototype.serializeStyleSheet = function(t) {
                return {
                    cssRules: Te(t.cssRules, (function(t) {
                        return t.cssText
                    }))
                }
            }, e.getBaseURI = function(t) {
                var e = t.baseURI;
                if (null == e) {
                    var i = t.getElementsByTagName("base");
                    e = 0 !== i.length ? i[0].href : t.URL
                }
                return e
            }, e
        }(Je),
        xi = (function() {
            function t(t) {
                this.processors = t
            }
            t.prototype.unserialize = function(t) {
                if (void 0 !== t.format && t.format !== Mi.WebElement) throw new Error("unserialization is not supported (format: ".concat(t.format, ")"));
                var e = t.nodeType;
                switch (e) {
                    case Node.ELEMENT_NODE:
                        return this.unserializeElementNode(t);
                    case Node.TEXT_NODE:
                        return this.unserializeTextNode(t);
                    case Node.CDATA_SECTION_NODE:
                        return this.unserializeCDATASectionNode(t);
                    case Node.COMMENT_NODE:
                        return this.unserializeCommentNode(t);
                    case Node.DOCUMENT_TYPE_NODE:
                        return this.unserializeDoctypeNode(t);
                    case Node.DOCUMENT_NODE:
                        return this.unserializeDocumentNode(t);
                    default:
                        throw new Error("unserialization is not supported (nodeType: ".concat(e, ")"))
                }
            }, t.prototype.unserializeShadowRoot = function(t, e) {
                var i = csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = r.unserializeShadowRoot(t, e, i);
                    return r.unserializeNode(e, n)
                }), null);
                return this.unserializeChildren(i, e.children), i
            }, t.prototype.unserializeElementNode = function(t) {
                var e = csArray.prototype.reduce.call(this.processors, (function(e, i) {
                    var r = i.unserializeElementNode(t, e);
                    return i.unserializeNode(t, r)
                }), null);
                return this.unserializeAttributes(e, t.attributes), this.unserializeChildren(e, t.children), t.shadowRoot && this.unserializeShadowRoot(e, t.shadowRoot), e
            }, t.prototype.unserializeChildren = function(t, e) {
                var i = this;
                Re(e, (function(e) {
                    return t.appendChild(i.unserialize(e))
                }))
            }, t.prototype.unserializeAttributes = function(t, e) {
                var i = this;
                Re(e, (function(e) {
                    try {
                        i.unserializeAttribute(t, e)
                    } catch (t) {}
                }))
            }, t.prototype.unserializeAttribute = function(t, e) {
                csArray.prototype.reduce.call(this.processors, (function(t, i) {
                    return i.unserializeAttribute(e, t)
                }), t)
            }, t.prototype.unserializeTextNode = function(t) {
                return csArray.prototype.reduce.call(this.processors, (function(e, i) {
                    var r = i.unserializeTextNode(t, e);
                    return i.unserializeNode(t, r)
                }), null)
            }, t.prototype.unserializeCDATASectionNode = function(t) {
                return csArray.prototype.reduce.call(this.processors, (function(e, i) {
                    var r = i.unserializeCDATASectionNode(t, e);
                    return i.unserializeNode(t, r)
                }), null)
            }, t.prototype.unserializeCommentNode = function(t) {
                return csArray.prototype.reduce.call(this.processors, (function(e, i) {
                    var r = i.unserializeCommentNode(t, e);
                    return i.unserializeNode(t, r)
                }), null)
            }, t.prototype.unserializeDoctypeNode = function(t) {
                return csArray.prototype.reduce.call(this.processors, (function(e, i) {
                    var r = i.unserializeDoctypeNode(t, e);
                    return i.unserializeNode(t, r)
                }), null)
            }, t.prototype.unserializeDocumentNode = function(t) {
                var e = this,
                    i = csArray.prototype.reduce.call(this.processors, (function(e, i) {
                        var r = i.unserializeDocumentNode(t, e);
                        return i.unserializeNode(t, r)
                    }), null);
                return Re(t.children, (function(t) {
                    return i.appendChild(e.unserialize(t))
                })), i
            }
        }(), function() {
            function t() {}
            return t.prototype.unserializeShadowRoot = function(t, e, i) {
                return i
            }, t.prototype.unserializeNode = function(t, e) {
                return e
            }, t.prototype.unserializeElementNode = function(t, e) {
                return e
            }, t.prototype.unserializeCDATASectionNode = function(t, e) {
                return e
            }, t.prototype.unserializeAttribute = function(t, e) {
                return e
            }, t.prototype.unserializeTextNode = function(t, e) {
                return e
            }, t.prototype.unserializeCommentNode = function(t, e) {
                return e
            }, t.prototype.unserializeDoctypeNode = function(t, e) {
                return e
            }, t.prototype.unserializeDocumentNode = function(t, e) {
                return e
            }, t
        }()),
        Vi = function() {
            function t() {
                this.domParser = new DOMParser
            }
            return t.prototype.createElement = function(t) {
                var e = this.htmlSanitizer(t);
                return this.parseHtmlElement("<".concat(e, " />"))
            }, t.prototype.createAttribute = function(t, e) {
                var i = this.htmlSanitizer(t),
                    r = this.parseHtmlElement("<div ".concat(i, '=""></div>')),
                    n = r.getAttributeNode(i);
                return r.removeAttributeNode(n), n.value = e, n
            }, t.prototype.createDoctype = function(t, e, i) {
                var r = this.htmlSanitizer(t || ""),
                    n = this.htmlSanitizer(i || ""),
                    o = this.htmlSanitizer(e || "");
                return this.domParser.parseFromString("<!DOCTYPE".concat(r ? " ".concat(r) : "").concat(n ? ' PUBLIC "'.concat(n, '"') : "", " ").concat(o ? n ? ' "'.concat(o, '"') : ' SYSTEM "'.concat(o, '"') : "", ">"), "text/html").doctype
            }, t.prototype.parseHtmlElement = function(t) {
                return this.domParser.parseFromString(t, "text/html").body.children[0]
            }, t.prototype.htmlSanitizer = function(t) {
                return csString.prototype.replace.call(t, /[\s<>\/\0]/g, "")
            }, t
        }();
    ! function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.document = e, i.dirtyElementBuilder = new Vi, i.xmlDocument = (new DOMParser).parseFromString("<xml></xml>", "application/xml"), i
        }
        V(e, t), e.prototype.unserializeShadowRoot = function(t, e) {
            var i = t.attachShadow({
                mode: "open"
            });
            if (e.adoptedStyleSheets)
                for (var r = 0, n = this.unserializeStyleSheets(e.adoptedStyleSheets); r < n.length; r++) {
                    var o = n[r];
                    i.appendChild(this.createStyleElementFromStyleSheet(o))
                }
            return i
        }, e.prototype.unserializeElementNode = function(t) {
            var e = this.getTagName(t),
                i = t.namespaceURI;
            try {
                return this.isXhtmlNamespace(i) && e.indexOf(":") > -1 ? this.document.createElement(e) : this.document.createElementNS(i, e)
            } catch (t) {
                switch (t.name) {
                    case "InvalidCharacterError":
                        return this.dirtyElementBuilder.createElement(e);
                    default:
                        throw t
                }
            }
        }, e.prototype.unserializeAttribute = function(t, e) {
            try {
                e.setAttributeNS(t.namespaceURI, t.name, t.value)
            } catch (i) {
                switch (i.name) {
                    case "NamespaceError":
                        e.setAttribute(t.name, t.value);
                        break;
                    case "InvalidCharacterError":
                        e.setAttributeNode(this.dirtyElementBuilder.createAttribute(t.name, t.value));
                        break;
                    default:
                        throw i
                }
            }
            return e
        }, e.prototype.unserializeTextNode = function(t) {
            return this.document.createTextNode(t.data)
        }, e.prototype.unserializeCommentNode = function(t) {
            return this.document.createComment(t.data)
        }, e.prototype.unserializeCDATASectionNode = function(t) {
            return this.xmlDocument.createCDATASection(t.data)
        }, e.prototype.unserializeDoctypeNode = function(t) {
            var e = t.name,
                i = t.systemId,
                r = t.publicId;
            try {
                return this.document.implementation.createDocumentType(e, r, i)
            } catch (t) {
                if ("InvalidCharacterError" === t.name) return this.dirtyElementBuilder.createDoctype(e, i, r);
                throw t
            }
        }, e.prototype.unserializeDocumentNode = function() {
            return this.document.implementation.createDocument(null, null, null)
        }, e.prototype.isXhtmlNamespace = function(t) {
            return "http://www.w3.org/1999/xhtml" === t
        }, e.prototype.isSvgNamespace = function(t) {
            return "http://www.w3.org/2000/svg" === t
        }, e.prototype.getTagName = function(t) {
            var e = t,
                i = e.localName,
                r = e.tagName;
            return i || (this.isSvgNamespace(t.namespaceURI) ? r : r.toLowerCase())
        }, e.prototype.unserializeStyleSheets = function(t) {
            for (var e = [], i = 0, r = t; i < r.length; i++) {
                var n = r[i],
                    o = this.unserializeStyleSheet(n);
                csArray.prototype.push.call(e, o)
            }
            return e
        }, e.prototype.unserializeStyleSheet = function(t) {
            var e = new CSSStyleSheet;
            return csArray.prototype.forEach.call(t.cssRules, (function(t, i) {
                return e.insertRule(t, i)
            })), e
        }, e.prototype.createStyleElementFromStyleSheet = function(t) {
            var e = document.createElement("style"),
                i = "",
                r = t.cssRules.length - 1;
            Re(t.cssRules, (function(t, e) {
                i += t.cssText, e !== r && (i += "\n")
            }));
            var n = document.createTextNode(i);
            return e.appendChild(n), e
        }
    }(xi);

    function zi(t) {
        return "csId" in t
    }

    function qi(t) {
        return zi(t) && "children" in t
    }
    var Ui = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.nodeIdentifier = e, i.enabled = !1, i.serializationMap = new Map, i.defaultOptions = {}, i.initialCharacterDataRegistry = new Map, i.initialAttributesRegistry = new Map, i.addedNodesDuringSerialization = new Set, i.removedNodesDuringSerialization = new Map, i
        }
        return V(e, t), e.prototype.beforeSerializeChildren = function(t, e) {
            var i = this;
            return this.enabled ? csArray.prototype.filter.call(e, (function(t) {
                return !i.isAddedNodeDuringSerialization(t)
            })) : e
        }, e.prototype.beforeSerializeAttributes = function(t, e, i) {
            if (!this.enabled) return e;
            var r = this.nodeIdentifier.getId(t);
            if (!r) return e;
            var n = this.initialAttributesRegistry.get(r);
            return n ? csArray.prototype.filter.call(e, (function(t) {
                var e = "".concat(t.name).concat(t.namespaceURI || ""),
                    i = n.get(e);
                return !(i && null === i.value)
            })) : e
        }, e.prototype.serializeTextNode = function(t, e, i) {
            if (!this.enabled) return e;
            var r = this.initialCharacterDataRegistry.get(e.csId);
            return r && (e.data = r), e
        }, e.prototype.serializeCommentNode = function(t, e, i) {
            if (!this.enabled) return e;
            var r = this.initialCharacterDataRegistry.get(e.csId);
            return r && (e.data = r), e
        }, e.prototype.afterSerialize = function(t, e, i) {
            return this.enabled ? (csNodeparentNode.apply(t) && !this.getSerializedNodeByNode(csNodeparentNode.apply(t)) || i.skipRegisterNode || this.registerNode(e, i), e) : e
        }, e.prototype.afterSerializeShadowRoot = function(t, e, i) {
            return this.enabled ? (i.skipRegisterNode || this.registerNode(e, i), e) : e
        }, e.prototype.enable = function() {
            this.enabled = !0, this.clear()
        }, e.prototype.disable = function() {
            this.enabled = !1, this.clear()
        }, e.prototype.deleteNode = function(t) {
            this.serializationMap.delete(t)
        }, e.prototype.setDefaultSerializationOptions = function(t) {
            this.defaultOptions = t
        }, e.prototype.getSerializedNodeById = function(t) {
            var e;
            return null === (e = this.serializationMap.get(t)) || void 0 === e ? void 0 : e.serializedNode
        }, e.prototype.getSerializedNodeByNode = function(t) {
            var e, i = this.nodeIdentifier.getId(t);
            if (i) return null === (e = this.serializationMap.get(i)) || void 0 === e ? void 0 : e.serializedNode
        }, e.prototype.getOptions = function(t) {
            var e, i = this.nodeIdentifier.getId(t);
            return i && (null === (e = this.serializationMap.get(i)) || void 0 === e ? void 0 : e.options) || this.defaultOptions
        }, e.prototype.registerInitialCharacterData = function(t, e) {
            this.initialCharacterDataRegistry.get(t) || this.initialCharacterDataRegistry.set(t, e)
        }, e.prototype.registerInitialAttributes = function(t, e, i, r) {
            var n = this.initialAttributesRegistry.get(t),
                o = "".concat(i).concat(e || "");
            if (n) {
                if (n.has(o)) return
            } else n = new Map, this.initialAttributesRegistry.set(t, n);
            var s = {
                name: i,
                namespaceURI: e || "",
                value: r
            };
            n.set(o, s)
        }, e.prototype.markAddedTreeAsProcessed = function(t) {
            for (var e, i = document.createNodeIterator(t, NodeFilter.SHOW_ALL, null, !1); e = i.nextNode();) {
                var r = this.nodeIdentifier.getId(e);
                r && this.addedNodesDuringSerialization.add(r)
            }
        }, e.prototype.markRemovedNodeAsProcessed = function(t, e, i) {
            var r = this.nodeIdentifier.getId(i),
                n = this.nodeIdentifier.getId(t);
            if (r && n) {
                var o = this.removedNodesDuringSerialization.get(r);
                if (o) csArray.prototype.push.call(o.removedNodeIds, n);
                else {
                    for (var s = [], a = e ? this.nodeIdentifier.getId(e) : null, c = 0; c < csNodechildNodes.apply(i).length; c += 1) {
                        var u = this.nodeIdentifier.getId(csNodechildNodes.apply(i)[c]);
                        u && !this.addedNodesDuringSerialization.has(u) && (a && u === a && csArray.prototype.push.call(s, n), csArray.prototype.push.call(s, u))
                    }
                    null === a && csArray.prototype.push.call(s, n);
                    var p = [n];
                    this.removedNodesDuringSerialization.set(r, {
                        childNodeIds: s,
                        removedNodeIds: p
                    })
                }
            }
        }, e.prototype.addSerializedChildToParent = function(t, e, i) {
            var r = this.getSerializedNodeByNode(t);
            r && qi(r) && this.updateParentSerializedChildren(e, r, i)
        }, e.prototype.isAddedNodeDuringSerialization = function(t) {
            var e = this.nodeIdentifier.getId(t);
            return !!e && this.addedNodesDuringSerialization.has(e)
        }, e.prototype.getInitialIndexInParent = function(t, e) {
            var i = this.nodeIdentifier.getId(e),
                r = this.nodeIdentifier.getId(t);
            if (!i || !r) return -1;
            var n = this.removedNodesDuringSerialization.get(i);
            return n ? csArray.prototype.indexOf.call(n.childNodeIds, r) : -1
        }, e.prototype.clear = function() {
            this.serializationMap.clear(), this.initialCharacterDataRegistry.clear(), this.initialAttributesRegistry.clear(), this.addedNodesDuringSerialization.clear(), this.removedNodesDuringSerialization.clear()
        }, e.prototype.registerNode = function(t, e) {
            t.csId && (this.restoreInitialAttributes(t.csId, t, e), this.addRemovedChildrenToParent(t.csId, t), this.serializationMap.set(t.csId, {
                serializedNode: t,
                options: e
            }))
        }, e.prototype.restoreInitialAttributes = function(t, e, i) {
            if (function(t) {
                    return qi(t) && "attributes" in t && "localName" in t && "namespaceURI" in t
                }(e)) {
                var r = this.initialAttributesRegistry.get(t);
                if (r) {
                    for (var n = 0, o = e.attributes; n < o.length; n++) {
                        var s = o[n],
                            a = "".concat(s.name).concat(s.namespaceURI || ""),
                            c = r.get(a);
                        c && null !== c.value && (s.value = c.value, r.delete(a))
                    }
                    r.forEach((function(t) {
                        null !== t.value && csArray.prototype.push.call(e.attributes, {
                            name: t.name,
                            value: t.value,
                            namespaceURI: t.namespaceURI,
                            anonymized: i.withAnonymization || !1
                        })
                    }))
                }
            }
        }, e.prototype.updateParentSerializedChildren = function(t, e, i) {
            var r;
            t >= 0 && zi(i) ? csArray.prototype.splice.call(e.children, t, 0, i) : !("csId" in (r = i)) && "artificial" in r && csArray.prototype.push.call(e.children, i)
        }, e.prototype.addRemovedChildrenToParent = function(t, e) {
            var i;
            if (qi(e)) {
                var r = this.removedNodesDuringSerialization.get(t);
                if (r)
                    for (var n = 0, o = r.removedNodeIds; n < o.length; n++) {
                        var s = o[n],
                            a = csArray.prototype.indexOf.call(r.childNodeIds, s);
                        if (-1 !== a) {
                            var c = null === (i = this.serializationMap.get(s)) || void 0 === i ? void 0 : i.serializedNode;
                            void 0 !== c && this.updateParentSerializedChildren(a, e, c)
                        }
                    }
            }
        }, e
    }(Je);

    function Bi() {
        return U(this, void 0, void 0, (function() {
            return B(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return [4, new Promise((function(t) {
                            setTimeout((function() {
                                t()
                            }), 0)
                        }))];
                    case 1:
                        return t.sent(), [2]
                }
            }))
        }))
    }
    var Hi, Fi, Gi = function(t) {
            function e(e, i) {
                return t.call(this, H([new _i, e], i, !0)) || this
            }
            return V(e, t), e
        }(Di),
        ji = {
            taskTime: 25
        },
        Ki = function(t) {
            function e(e, i, r, n, o) {
                void 0 === o && (o = ji);
                var s = t.call(this, i, H([r], n, !0)) || this;
                return s.nodeIdentifierService = e, s.asyncSerializerMapProcessor = r, s.asyncSerializerOptions = o, s.lastSerializationId = 0, s.taskTime = s.asyncSerializerOptions.taskTime, s
            }
            return V(e, t), e.prototype.isAsynchronous = function() {
                return !0
            }, e.prototype.handleMutationAttribute = function(t, e) {
                var i = e[0],
                    r = e[1],
                    n = e[2];
                this.asyncSerializerMapProcessor.getSerializedNodeById(i) || this.asyncSerializerMapProcessor.registerInitialAttributes(i, r, n, t)
            }, e.prototype.handleMutationCharacterData = function(t, e) {
                var i = e[0];
                this.asyncSerializerMapProcessor.getSerializedNodeById(i) || this.asyncSerializerMapProcessor.registerInitialCharacterData(i, t.oldValue || "")
            }, e.prototype.serializeMutationChildList = function(t, e) {
                var i = this.serializeAddedNodes(t, e);
                return this.markAddedTreeAsProcessed(t), {
                    removedNodes: this.serializeRemovedNodes(t, e),
                    addedNodes: i
                }
            }, e.prototype.startSerializeAsync = function(t, e) {
                return void 0 === e && (e = {}), U(this, void 0, void 0, (function() {
                    return B(this, (function(i) {
                        return this.lastSerializationId += 1, this.asyncSerializerMapProcessor.setDefaultSerializationOptions(e), [2, this.traverseAndSerialize(t, e)]
                    }))
                }))
            }, e.prototype.serializeAddedNodes = function(t, e) {
                var i = [],
                    r = null;
                if (t.nextSibling) {
                    var n = this.nodeIdentifierService.getId(t.nextSibling);
                    r = void 0 !== n ? n : null
                }
                for (var o = this.nodeIdentifierService.getId(t.target), s = 0; s < t.addedNodes.length; s += 1) {
                    var a = t.addedNodes[s],
                        c = this.serialize(a, {
                            skipRegisterNode: !0,
                            withAnonymization: e
                        });
                    csArray.prototype.push.call(i, [o, r, c])
                }
                return i
            }, e.prototype.markAddedTreeAsProcessed = function(t) {
                for (var e = 0; e < t.addedNodes.length; e += 1) {
                    var i = t.addedNodes[e];
                    this.asyncSerializerMapProcessor.markAddedTreeAsProcessed(i)
                }
            }, e.prototype.indexInParent = function(t, e) {
                if (!e) return -1;
                var i = this.asyncSerializerMapProcessor.getInitialIndexInParent(t, e);
                return i >= 0 ? i : csArray.prototype.indexOf.call(csNodechildNodes.apply(e), t)
            }, e.prototype.serializeRemovedNodes = function(t, e) {
                for (var i = [], r = 0; r < t.removedNodes.length; r += 1) {
                    var n = t.removedNodes[r];
                    if (this.asyncSerializerMapProcessor.markRemovedNodeAsProcessed(n, t.nextSibling, t.target), this.isSerializedNodeProcessed(n)) this.isAlreadySerialized(n) && this.traverseAndSerializeUnprocessedNodes(n, e);
                    else {
                        var o = this.serialize(n, {
                            withAnonymization: e
                        });
                        if (this.isAlreadySerialized(t.target)) {
                            var s = this.indexInParent(n, t.target);
                            this.asyncSerializerMapProcessor.addSerializedChildToParent(t.target, s, o)
                        }
                    }
                    var a = this.nodeIdentifierService.getId(n);
                    a && csArray.prototype.push.call(i, [a])
                }
                return i
            }, e.prototype.traverseAndSerializeUnprocessedNodes = function(t, e) {
                for (var i = 0; i < csNodechildNodes.apply(t).length; i += 1) {
                    var r = csNodechildNodes.apply(t)[i];
                    if (this.isAlreadySerialized(r)) this.traverseAndSerializeUnprocessedNodes(r, e);
                    else if (!this.asyncSerializerMapProcessor.isAddedNodeDuringSerialization(r)) {
                        var n = this.serialize(r, {
                                withAnonymization: e
                            }),
                            o = this.indexInParent(r, t);
                        this.asyncSerializerMapProcessor.addSerializedChildToParent(t, o, n)
                    }
                }
            }, e.prototype.isAlreadySerialized = function(t) {
                return !!this.asyncSerializerMapProcessor.getSerializedNodeByNode(t)
            }, e.prototype.isSerializedNodeProcessed = function(t) {
                return this.isAlreadySerialized(t) || this.asyncSerializerMapProcessor.isAddedNodeDuringSerialization(t)
            }, e.prototype.traverseAndSerialize = function(t, e) {
                return void 0 === e && (e = {}), U(this, void 0, void 0, (function() {
                    var i, r, n, o, s, a, c, u, p, l, h;
                    return B(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                return i = this.lastSerializationId, r = ct(), this.asyncSerializerMapProcessor.enable(), e.skipChildrenSerialization = !0, n = [t], [4, Bi()];
                            case 1:
                                if (d.sent(), i !== this.lastSerializationId) return [2, null];
                                this.timer = csDate.now(), this.serialize(t, e), d.label = 2;
                            case 2:
                                if (!(n.length > 0)) return [3, 7];
                                o = csArray.prototype.pop.call(n), s = this.asyncSerializerMapProcessor.getOptions(o), a = this.runBeforeSerializeChildrenHook(o, s), c = csArray.prototype.shift.call(a), d.label = 3;
                            case 3:
                                return c ? csDate.now() - this.timer > this.taskTime ? [4, Bi()] : [3, 5] : [3, 6];
                            case 4:
                                if (d.sent(), i !== this.lastSerializationId) return [2, null];
                                this.timer = csDate.now(), d.label = 5;
                            case 5:
                                return this.isSerializedNodeProcessed(c) ? (c = csArray.prototype.shift.call(a), [3, 3]) : (csArray.prototype.push.call(n, c), u = this.serialize(c, s), p = this.indexInParent(c, o), this.asyncSerializerMapProcessor.addSerializedChildToParent(o, p, u), f(c) && csElementshadowRoot.apply(c) && (l = csElementshadowRoot.apply(c), csArray.prototype.push.call(n, l)), c = csArray.prototype.shift.call(a), [3, 3]);
                            case 6:
                                return [3, 2];
                            case 7:
                                if (!(h = this.asyncSerializerMapProcessor.getSerializedNodeByNode(t))) throw this.asyncSerializerMapProcessor.disable(), new Error("traverseAndSerialize : fail to serialize");
                                return this.asyncSerializerMapProcessor.disable(), [2, {
                                    args: [h],
                                    date: r,
                                    type: oe.INITIAL_DOM
                                }]
                        }
                    }))
                }))
            }, e
        }(Gi),
        Wi = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return V(e, t), e.prototype.isAsynchronous = function() {
                return !1
            }, e
        }(Gi),
        Yi = function() {
            function t() {
                this.isRunning = !1
            }
            return t.prototype.isSupported = function() {
                return "object" == typeof window.customElements && "function" == typeof window.customElements.whenDefined && "function" == typeof window.Promise
            }, t.prototype.start = function() {
                !this.isRunning && this.isSupported() && (this.elements ? this.elements.clear() : this.elements = new Set, this.isRunning = !0)
            }, t.prototype.stop = function() {
                this.isRunning && (this.isRunning = !1)
            }, t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.register = function(t) {
                return U(this, void 0, void 0, (function() {
                    return B(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return this.elements.has(t) ? [2] : (this.elements.add(t), [4, window.customElements.whenDefined(t)]);
                            case 1:
                                return e.sent(), this.onRegistration(t), [2]
                        }
                    }))
                }))
            }, t.prototype.onRegistration = function(t) {
                this.isRunning && this.onEventCallback({
                    type: oe.CUSTOM_ELEMENT_REGISTRATION,
                    date: ct(),
                    args: [t]
                })
            }, t.prototype.getProcessor = function() {
                return new(function(t) {
                    function e(e) {
                        var i = t.call(this) || this;
                        return i.tracker = e, i
                    }
                    return V(e, t), e.prototype.serializeElementNode = function(t, e) {
                        return function(t) {
                            return f(t) && csString.prototype.indexOf.call(t.tagName, "-") > 0 && csArray.prototype.indexOf.call(R, csString.prototype.toLocaleLowerCase.call(t.tagName)) < 0
                        }(t) && this.tracker.register(csString.prototype.toLowerCase.call(t.tagName)), e
                    }, e
                }(Je))(this)
            }, t
        }(),
        Xi = function() {
            function t(t) {
                this.recordingBatch = t
            }
            return t.prototype.getRequestPayload = function() {
                var t = this.recordingBatch.extractEvents(oe.JAVASCRIPT_ERROR, oe.API_ERROR, oe.CUSTOM_ERROR);
                return t.length ? csJSON.stringify(t) : ""
            }, t
        }(),
        Ji = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.nodeIdentifierService = e, i
            }
            return V(e, t), e.prototype.serializeNode = function(t, e, i) {
                var r = this.nodeIdentifierService.getId(t);
                return r && (e.csId = r), e
            }, e
        }(Je),
        Qi = function() {
            function t(t, e, i, r, n, o, s, a, c, u, p, l, h, d, f, y, v, m) {
                this.sessionService = t, this.configuration = e, this.compressor = i, this.selector = r, this.consentService = n, this.basicParameters = o, this.commandsService = s, this.pii = a, this.sessionRenewer = c, this.urlService = u, this.sensitiveContentService = p, this.javaScriptErrorsTracker = l, this.javaScriptErrorsAnonymizer = h, this.apiErrorsTracker = d, this.gestureTracker = f, this.apiErrorsAnonymizer = y, this.lifeCycleEventsEmitter = v, this.customEventEmitter = m
            }
            return t.prototype.init = function() {
                var t = this,
                    e = new Ci,
                    i = new Xe,
                    r = new Qe(this.sensitiveContentService);
                this.anonymizationService = new $e(this.pii, this.configuration), this.anonymizationService.init();
                var n = new di,
                    o = new vi(e, i),
                    s = new ki(window.crypto),
                    a = new Ni(window.crypto);
                a.init(), s.init();
                var c = new Ai,
                    u = new Ai,
                    p = new Ai,
                    l = new Ai,
                    h = new Ai,
                    d = new me(i, this.configuration, a, s, c, u, p, h, l, this.compressor);
                d.init();
                var f = new wi(d),
                    y = [r, this.anonymizationService, f, n],
                    v = new Ti(this.configuration, i, this.sensitiveContentService, new bi, 1e3);
                this.configuration.textVisibilityEnabled && csArray.prototype.push.call(y, v);
                var m, g = new Ji(i),
                    S = new Yi;
                if (S.isSupported() && csArray.prototype.push.call(y, S.getProcessor()), this.isAsynchronousSerialization()) {
                    var E = new Ui(i);
                    m = new Ki(i, g, E, y)
                } else m = new Wi(g, y);
                this.recordingBatch = new Ie;
                var C = new ke,
                    T = new ri(C, this.basicParameters),
                    R = new Ri(this.configuration.getRecordingUri(), "v2/recording");
                this.configuration.useMalkaPipeline && (T.addProvider({
                    getRequestParameters: function() {
                        return {
                            rt: csArray.prototype.join.call(t.sessionService.getRecordingStates())
                        }
                    }
                }), R.setRequestParametersProviders(this.basicParameters, {
                    getRequestParameters: function() {
                        return {
                            rt: csArray.prototype.join.call(t.sessionService.getRecordingStates()),
                            ct: be.UNCOMPRESSED,
                            hlm: "true"
                        }
                    }
                }), R.setRequestPayloadProvider(new Xi(this.recordingBatch)));
                var b = this.createRecordingPostRequest(this.compressor);
                this.mutationSerializer = new We(this.consentService, m, i, this.anonymizationService, d, this.configuration, this.urlService), this.mutationSerializer.init(), this.recordingPageEventsTracker = new Ee(this.selector, i, this.sensitiveContentService, d), this.recordingPageEventsTracker.init();
                var w = new we(this.mutationSerializer, o, n, this.lifeCycleEventsEmitter, i, this.sensitiveContentService),
                    A = new ii("csPersisted"),
                    I = this.createRecordingPostRequest(this.compressor);
                this.recordingRecoveryService = new Fe(I, this.recordingBatch, A, this.configuration, R), this.recordingService = new He(this.configuration, b, this.recordingBatch, T, C, new Ye(e, i, this.sensitiveContentService, n), w, this.recordingPageEventsTracker, new ai(window.location, this.pii), new Li(this.gestureTracker, i, this.sensitiveContentService), this.sessionRenewer, n, new fi(window), this.javaScriptErrorsTracker, this.javaScriptErrorsAnonymizer, this.apiErrorsTracker, v, this.apiErrorsAnonymizer, d, this.recordingRecoveryService, S), this.customEventEmitter.addListeners(this.recordingService), this.recordingInactivityService = new ci(this.recordingPageEventsTracker, w, new ni(new si), b, this.mutationSerializer), o.init(), this.recordingInactivityService.init(), this.recordingService.init(), this.commandsService.register(["isRecording"], (function() {
                    return t.sessionService.isReplayRecorded()
                })), this.commandsService.register(["setCapturedElementsSelector"], (function(e) {
                    t.anonymizationService.setWhitelistedElementsSelector(e)
                })), this.commandsService.register(["setPIISelectors"], (function(e) {
                    t.sensitiveContentService.setPIISelectors(e)
                }))
            }, t.prototype.onStartTracking = function() {
                this.recordingRecoveryService.recover(), this.sessionService.isReplayRecorded() && (this.configuration.useMalkaPipeline && this.sessionService.isTemporarilyRecorded() && this.recordingService.blockSendingEventsFromQuotaService(), this.recordingInactivityService.start(), this.recordingService.start(), this.recordingRecoveryService.start())
            }, t.prototype.onArtificialPageViewEnd = function() {
                this.recordingService.clearStates(), this.sessionService.isReplayRecorded() && !this.sessionService.isTemporarilyRecorded() && this.recordingRecoveryService.sendLastMessageBeacon()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.recordingService.initStates(), this.mutationSerializer.resetAnonymization(), this.sessionService.isReplayRecorded() ? (this.configuration.useMalkaPipeline && this.sessionService.isTemporarilyRecorded() && this.recordingService.blockSendingEventsFromQuotaService(), this.recordingInactivityService.restart(), this.recordingService.restart(), this.recordingRecoveryService.restart()) : (this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop())
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.recordingService.clearStates(), this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop()
            }, t.prototype.onOptout = function() {
                this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop()
            }, t.prototype.onConsentGranted = function() {
                this.mutationSerializer.resetAnonymization(), this.recordingService.triggerConsentGranted()
            }, t.prototype.onConsentWithdrawn = function() {
                this.mutationSerializer.resetAnonymization(), this.recordingService.triggerConsentWithdrawn()
            }, t.prototype.onRecordingStateChange = function(t, e) {
                var i = this;
                this.configuration.useMalkaPipeline && (t === Gt.NOT_RECORDED && e === jt.ETR_OFF ? (this.recordingService.clearEvents(), this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop()) : (this.recordingBatch.setRequestParametersFromProvider({
                    getRequestParameters: function() {
                        return {
                            rt: csArray.prototype.join.call(i.sessionService.getRecordingStates())
                        }
                    }
                }), this.recordingService.allowSendingEventsFromQuotaService(), this.mutationSerializer.isDOMSerializationInProgress() || this.recordingService.pushEvents()))
            }, t.prototype.onInitialDomStart = function() {
                this.recordingService.blockSendingEventsFromSerialization(), this.recordingRecoveryService.blockSendingLastMessage()
            }, t.prototype.onInitialDomDone = function(t) {
                this.recordingPageEventsTracker.start(), this.recordingService.addInitialDom(t), this.recordingService.allowSendingEventsFromSerialization(), this.recordingRecoveryService.allowSendingLastMessage()
            }, t.prototype.createRecordingPostRequest = function(t) {
                var e = this.configuration.useMalkaPipeline ? "v2/recording" : "recording",
                    i = this.configuration.useMalkaPipeline ? "byteArray" : "base64",
                    r = new he(this.configuration.getRecordingUri(), e);
                return r.setCompressionOptions(t, i), r
            }, t.prototype.isAsynchronousSerialization = function() {
                return "Promise" in window && "findIndex" in csArray.prototype && this.configuration.asyncSerializerEnabled
            }, t.isSupported = function() {
                return "MutationObserver" in window && "visibilityState" in document
            }, t
        }(),
        Zi = function() {
            function t(t, e, i) {
                this.visitorService = t, this.sessionService = e, this.configuration = i, this.naturalPageViewSent = !1
            }
            return t.prototype.isNaturalPageViewSent = function() {
                return this.naturalPageViewSent
            }, t.prototype.setNaturalPageViewSent = function(t) {
                this.naturalPageViewSent = t
            }, t.prototype.getTrackingContext = function() {
                var t = this.getSessionKey(),
                    e = this.getPageNumber(),
                    i = this.getProjectId();
                return t && e ? {
                    projectId: i,
                    sessionKey: t,
                    pageNumber: e
                } : null
            }, t.prototype.getSessionKey = function() {
                var t = this.visitorService.getVisitor();
                return t ? "".concat(t.id, ".").concat(t.visitsCount) : null
            }, t.prototype.getPageNumber = function() {
                return this.sessionService.doesSessionExist() ? this.sessionService.getSession().pageNumber : null
            }, t.prototype.getProjectId = function() {
                return this.configuration.projectId
            }, t
        }(),
        $i = function() {
            function t(t) {
                this.trackingContextService = t, this.registeredCallbacks = []
            }
            return t.prototype.handleCommand = function(t) {
                if (Ot(t) && (this.registerCallback(t), this.trackingContextService.isNaturalPageViewSent())) {
                    var e = this.trackingContextService.getTrackingContext();
                    null !== e && this.executeAsync(t, e)
                }
            }, t.prototype.registerCallback = function(t) {
                csArray.prototype.push.call(this.registeredCallbacks, t)
            }, t.prototype.executeRegisteredCallbacks = function() {
                var t = this,
                    e = this.trackingContextService.getTrackingContext();
                null !== e && csArray.prototype.map.call(this.registeredCallbacks, (function(i) {
                    return t.executeAsync(i, e)
                }))
            }, t.prototype.executeAsync = function(t, e) {
                setTimeout((function() {
                    t(e)
                }))
            }, t
        }(),
        tr = function() {
            function t(t) {
                this.trackingContextService = t, this.pendingCallbacks = []
            }
            return t.prototype.handleCommand = function(t) {
                return this.trackingContextService.isNaturalPageViewSent() ? this.applyGetSessionKey(t) : void this.addPendingCallback(t)
            }, t.prototype.applyGetSessionKey = function(t) {
                var e = this.trackingContextService.getSessionKey();
                return this.hasCallback(t) && null !== e && this.executeAsync(t.callback, e), e
            }, t.prototype.addPendingCallback = function(t) {
                this.hasCallback(t) && csArray.prototype.push.call(this.pendingCallbacks, t.callback)
            }, t.prototype.flushPendingCallbacks = function() {
                var t = this,
                    e = this.trackingContextService.getSessionKey();
                null !== e && csArray.prototype.forEach.call(this.pendingCallbacks, (function(i) {
                    t.executeAsync(i, e)
                })), this.pendingCallbacks = []
            }, t.prototype.hasCallback = function(t) {
                return t && "function" == typeof t.callback
            }, t.prototype.executeAsync = function(t, e) {
                setTimeout((function() {
                    t(e)
                }))
            }, t
        }(),
        er = function() {
            function t(t, e) {
                this.iframeParentToChildrenCommunicationService = t, this.trackingContextService = e
            }
            return t.prototype.onIframeIntegrationCallback = function(t) {
                if (this.trackingContextService.isNaturalPageViewSent()) {
                    var e = this.trackingContextService.getTrackingContext();
                    null !== e && (t.trackingContext = e, this.iframeParentToChildrenCommunicationService.sendToChildren(Et.IntegrationCallback, t))
                }
            }, t.prototype.sendAfterPageViewCallbackToChildren = function() {
                var t = this.trackingContextService.getTrackingContext();
                if (null !== t) {
                    var e = {
                        trackingContext: t,
                        initiator: gt.AfterPageView
                    };
                    this.iframeParentToChildrenCommunicationService.sendToChildren(Et.IntegrationCallback, e)
                }
            }, t
        }(),
        ir = ["afterPageView"],
        rr = ["getSessionKey"],
        nr = function() {
            function t(t, e, i, r, n, o) {
                this.visitorService = t, this.sessionService = e, this.commandsService = i, this.iframeEventsEmitter = r, this.iframeParentToChildrenCommunicationService = n, this.configuration = o
            }
            return t.prototype.init = function() {
                var t = this;
                this.trackingContextService = new Zi(this.visitorService, this.sessionService, this.configuration), this.afterPageViewService = new $i(this.trackingContextService), this.getSessionKeyService = new tr(this.trackingContextService), this.parentToChildrenIntegrationService = new er(this.iframeParentToChildrenCommunicationService, this.trackingContextService), this.iframeEventsEmitter.addListeners(this.parentToChildrenIntegrationService), this.commandsService.register(rr, (function(e) {
                    return t.getSessionKeyService.handleCommand(e)
                })), this.commandsService.register(ir, (function(e) {
                    t.afterPageViewService.handleCommand(e)
                }))
            }, t.prototype.onAfterNaturalPageView = function() {
                this.trackingContextService.setNaturalPageViewSent(!0), this.getSessionKeyService.flushPendingCallbacks(), this.afterPageViewService.executeRegisteredCallbacks(), this.parentToChildrenIntegrationService.sendAfterPageViewCallbackToChildren()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.afterPageViewService.executeRegisteredCallbacks(), this.parentToChildrenIntegrationService.sendAfterPageViewCallbackToChildren()
            }, t
        }(),
        or = function() {
            function t(t, e) {
                this.key = csString.prototype.slice.call(t, 0, 512), this.value = It(e) ? csString.prototype.slice.call(e, 0, 255) : e
            }
            return t.isValid = function(t, e) {
                return It(t) && (It(e) || At(e))
            }, t
        }(),
        sr = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.batch = e, r.pii = i, r.dynamicVariablesQueue = [], r
            }
            return V(e, t), e.prototype.onStart = function() {
                var t = this;
                csArray.prototype.forEach.call(this.dynamicVariablesQueue, (function(e) {
                    return t.trackDynamicVariable(e.key, e.value)
                })), this.dynamicVariablesQueue = []
            }, e.prototype.onStop = function() {}, e.prototype.trackDynamicVariable = function(t, e) {
                this.isStarted ? or.isValid(t, e) && this.batch.add(new or(this.pii.anonymize(t), this.pii.anonymize(e))) : csArray.prototype.push.call(this.dynamicVariablesQueue, {
                    key: t,
                    value: e
                })
            }, e
        }(_e),
        ar = function() {
            function t(t) {
                this.compressor = t, this.batch = []
            }
            return t.prototype.add = function(t) {
                csArray.prototype.push.call(this.batch, t), this.setBatchReadyCall()
            }, t.prototype.clear = function() {
                this.batch = []
            }, t.prototype.onBatchReady = function(t) {
                this.batchReadyCallback = t
            }, t.prototype.getRequestParameters = function() {
                for (var t = {}, e = 0, i = this.batch; e < i.length; e++) {
                    var r = i[e];
                    t[r.key] = r.value
                }
                return {
                    dv: this.compressor.compressSync(csJSON.stringify(t)),
                    enc: this.compressor.algorithm
                }
            }, t.prototype.setBatchReadyCall = function() {
                this.batchReadyCallback()
            }, q([Be(), zt("dynamicVariablesBatchReady")], t.prototype, "setBatchReadyCall", null), t
        }(),
        cr = ["trackDynamicVariable"],
        ur = function() {
            function t(t, e, i, r, n, o) {
                this.commandsService = t, this.sessionService = e, this.configuration = i, this.basicParameters = r, this.compressor = n, this.pii = o, this.request = new et(this.configuration.getTrackerUri(), "dvar"), this.batch = new ar(this.compressor), this.service = new sr(this.batch, this.pii)
            }
            return t.prototype.init = function() {
                var t = this;
                this.request.setRequestParametersProviders(this.basicParameters, this.batch), this.sessionService.setDynamicVariablesService(this.service), this.batch.onBatchReady((function() {
                    return t.request.send()
                })), this.request.after((function() {
                    return t.batch.clear()
                })), this.commandsService.register(cr, (function(e) {
                    var i = void 0 === e ? {} : e,
                        r = i.key,
                        n = i.value;
                    t.service.trackDynamicVariable(r, n)
                }))
            }, t.prototype.onStartTracking = function() {
                this.service.start()
            }, t
        }(),
        pr = function() {
            function t(t, e) {
                this.id = t, this.revenue = e
            }
            return t.from = function(e) {
                var i = new t(e.id, parseFloat(e.revenue));
                return isNaN(parseFloat(e.tax)) || (i.tax = parseFloat(e.tax)), isNaN(parseFloat(e.shipping)) || (i.shipping = parseFloat(e.shipping)), It(e.currency) && e.currency.length <= 10 && (i.currency = e.currency), i
            }, t.prototype.hasValidRevenue = function() {
                return !isNaN(this.revenue) && this.revenue >= 0
            }, t
        }(),
        lr = function() {
            function t(t, e, i, r) {
                this.id = t, this.name = e, this.price = i, this.quantity = r
            }
            return t.from = function(e) {
                if (!t.isValid(e)) return null;
                var i = new t(e.id, e.name, parseFloat(e.price), parseInt(e.quantity, 10));
                return Pt(e.sku) && (i.sku = e.sku), Pt(e.category) && (i.category = e.category), Pt(e.merchant) && e.merchant.length > 0 && (i.merchant = e.merchant.slice(0, 100)), i
            }, t.isValid = function(t) {
                return It(t.id) && It(t.name) && wt(parseFloat(t.price)) && At(parseInt(t.quantity, 10)) && (!Pt(t.sku) || It(t.sku)) && (!Pt(t.category) || It(t.category)) && (!Pt(t.merchant) || It(t.merchant))
            }, t
        }(),
        hr = function() {
            function t(t, e, i) {
                this.pii = t, this.transactionRequest = e, this.sessionRenewer = i, this.clear()
            }
            return t.prototype.addTransaction = function(t) {
                var e = this.pii.anonymizeFields(t, ["id"]);
                this.transaction = pr.from(e)
            }, t.prototype.getTransaction = function() {
                return this.transaction
            }, t.prototype.sendTransaction = function() {
                this.sessionRenewer.isSessionValid() && (this.transaction.hasValidRevenue() ? this.transactionRequest.send() : Vt.warn("Transaction Service: unable to send transaction with invalid parameters"))
            }, t.prototype.addItem = function(t) {
                if (!Ot(t)) {
                    var e = this.pii.anonymizeFields(t, ["id", "name", "sku", "category"]),
                        i = lr.from(e);
                    null !== i && csArray.prototype.push.call(this.transactionItems, i)
                }
            }, t.prototype.getItems = function() {
                return this.transactionItems
            }, t.prototype.clear = function() {
                this.transaction = pr.from({
                    revenue: NaN
                }), this.transactionItems = []
            }, t.prototype.getRequestParameters = function() {
                var t = {
                    id: this.transaction.id ? "".concat(this.transaction.id) : "",
                    revenue: "".concat(this.transaction.revenue)
                };
                return Pt(this.transaction.tax) && (t.tax = "".concat(this.transaction.tax)), Pt(this.transaction.shipping) && (t.shipping = "".concat(this.transaction.shipping)), Pt(this.transaction.currency) && (t.cu = "".concat(this.transaction.currency)), t.items = window.JSON.stringify(this.transactionItems), t
            }, t
        }(),
        dr = function() {
            function t(t, e) {
                this.skuItem = csString.prototype.slice.call(t, 0, 100), this.merchantItem = e && csString.prototype.slice.call(e, 0, 100)
            }
            return Object.defineProperty(t.prototype, "sku", {
                get: function() {
                    return this.skuItem
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "merchant", {
                get: function() {
                    return this.merchantItem
                },
                enumerable: !1,
                configurable: !0
            }), t
        }(),
        fr = function() {
            function t(t, e) {
                this.cartItemRequest = t, this.sessionRenewer = e, this.cartItem = null
            }
            return t.prototype.addToCart = function(t) {
                !this.isValidSku(t.sku) || Pt(t.merchant) && !It(t.merchant) || (this.cartItem = new dr(t.sku, t.merchant), this.sendCartItem())
            }, t.prototype.isValidSku = function(t) {
                return It(t) && t.length > 0
            }, t.prototype.getCartItem = function() {
                return this.cartItem
            }, t.prototype.sendCartItem = function() {
                this.sessionRenewer.isSessionValid() && this.cartItemRequest.send()
            }, t.prototype.clear = function() {
                this.cartItem = null
            }, t.prototype.getRequestParameters = function() {
                if (!this.cartItem) return {};
                var t = {
                    sku: "".concat(this.cartItem.sku)
                };
                return Pt(this.cartItem.merchant) && this.cartItem.merchant.length > 0 && (t.me = this.cartItem.merchant), t
            }, t
        }(),
        yr = ["ecommerce:addToCart", "ec:cart:add"],
        vr = ["ecommerce:addTransaction", "ec:transaction:create"],
        mr = ["ecommerce:addItem", "ec:transaction:items:add"],
        gr = ["ecommerce:send", "ec:transaction:send"],
        Sr = function() {
            function t(t, e, i, r, n, o, s) {
                this.configuration = t, this.visitorService = e, this.sessionService = i, this.commandsService = r, this.pii = n, this.sessionRenewer = o, this.urlService = s
            }
            return t.prototype.init = function() {
                var t = new et(this.configuration.getTrackerUri(), "transaction"),
                    e = new et(this.configuration.getTrackerUri(), "addtocart"),
                    i = new hr(this.pii, t, this.sessionRenewer),
                    n = new fr(e, this.sessionRenewer);
                t.setRequestParametersProviders(this.configuration, this.visitorService, this.sessionService, this.urlService, i, r), t.after((function() {
                    i.clear()
                })), e.setRequestParametersProviders(this.configuration, this.visitorService, this.sessionService, this.urlService, n, r), e.after((function() {
                    n.clear()
                })), this.commandsService.register(vr, (function(t) {
                    i.addTransaction(t)
                })), this.commandsService.register(mr, (function(t) {
                    return i.addItem(t)
                })), this.commandsService.register(gr, (function() {
                    return i.sendTransaction()
                })), this.commandsService.register(yr, (function(t) {
                    n.addToCart(t)
                }))
            }, t
        }(),
        Er = function() {
            function t(t) {
                this.windowPerformance = t.performance
            }
            return t.prototype.getRequestParameters = function() {
                if (this.areTimingsUnavailable()) return {};
                var t = this.compute();
                return {
                    str: t.startRender,
                    di: t.domInteractive,
                    dc: t.domComplete,
                    fl: t.fullyLoaded
                }
            }, t.prototype.compute = function() {
                var t = this.windowPerformance.timing;
                return {
                    startRender: "".concat(t.domLoading - t.requestStart),
                    domInteractive: "".concat(t.domInteractive - t.requestStart),
                    domComplete: "".concat(t.domComplete - t.requestStart),
                    fullyLoaded: "".concat(t.loadEventEnd - t.requestStart)
                }
            }, t.prototype.areTimingsUnavailable = function() {
                return !(this.windowPerformance && this.windowPerformance.timing && this.windowPerformance.timing.loadEventEnd > 0)
            }, t
        }();

    function Cr(t) {
        return void 0 !== t.tgt
    }! function(t) {
        t[t.RESIZE = 0] = "RESIZE", t[t.SCROLL = 1] = "SCROLL", t[t.MOUSEMOVE = 2] = "MOUSEMOVE", t[t.MOUSEDOWN = 3] = "MOUSEDOWN", t[t.MOUSEUP = 4] = "MOUSEUP", t[t.CLICK = 5] = "CLICK", t[t.MOUSEOVER = 6] = "MOUSEOVER", t[t.MOUSEOUT = 7] = "MOUSEOUT", t[t.CHANGE = 10] = "CHANGE", t[t.FOCUSIN = 11] = "FOCUSIN", t[t.FOCUSOUT = 12] = "FOCUSOUT", t[t.TAP = 14] = "TAP", t[t.KEYDOWN = 15] = "KEYDOWN", t[t.KEYUP = 16] = "KEYUP", t[t.COMMAND = 17] = "COMMAND", t[t.SUBMIT = 18] = "SUBMIT", t[t.PERFORMANCE = 19] = "PERFORMANCE", t[t.DRAG = 20] = "DRAG", t[t.FLICK = 21] = "FLICK"
    }(Hi || (Hi = {})),
    function(t) {
        t.SUCCESS = "success", t.FAILURE = "failure", t.ATTEMPT = "attempt"
    }(Fi || (Fi = {}));
    var Tr = function() {
            function t() {}
            return t.prototype.isEventTypeSupported = function(t) {
                return -1 !== csArray.prototype.indexOf.call(this.supportedEventTypes, t)
            }, t.prototype.enhanceAnalysisEvent = function(t, e) {
                return this.isEventTypeSupported(e.type) ? this.baseEnhanceAnalysisEvent(t, e) : e
            }, t
        }(),
        Rr = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.projectConfiguration = e, r.pathComputation = i, r.supportedEventTypes = [Hi.MOUSEDOWN, Hi.MOUSEUP, Hi.CLICK, Hi.MOUSEOVER, Hi.TAP], r
            }
            return V(e, t), e.prototype.baseEnhanceAnalysisEvent = function(t, e) {
                if (this.projectConfiguration.eMerchandisingEnabled) {
                    var i = this.pathComputation.getEventTargetPathAndTargetLink(t),
                        r = i.path,
                        n = i.targetLink;
                    e.tgt = r, e.tgtLk = n
                }
                return e
            }, e
        }(Tr),
        br = function() {
            function t() {}
            return t.build = function(t, e, i) {
                return csArray.prototype.reduce.call(i, (function(e, i) {
                    return i.enhanceAnalysisEvent(t, e)
                }), e)
            }, t
        }(),
        wr = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.pathComputation = e, i.supportedEventTypes = [Hi.MOUSEDOWN, Hi.MOUSEUP, Hi.CLICK, Hi.MOUSEOVER, Hi.TAP, Hi.DRAG, Hi.FLICK], i
            }
            return V(e, t), e.prototype.baseEnhanceAnalysisEvent = function(t, e) {
                return e.tgt || (e.tgt = this.pathComputation.getEventTargetPath(t)), e
            }, e
        }(Tr),
        Ar = function() {
            function t(t, e, i) {
                this.configuration = t, this.pathComputation = e, this.gestureTracker = i, this.analysisEventsEnhancers = [new Rr(this.configuration, this.pathComputation), new wr(this.pathComputation)]
            }
            return t.prototype.processGesture = function(t, e) {
                switch (t.type) {
                    case Si.TAP:
                        this.processTap(e);
                        break;
                    case Si.FLICK:
                        this.processFlick(t, e);
                        break;
                    case Si.DRAG:
                        this.processDrag(t, e)
                }
            }, t.prototype.processTap = function(t) {
                var e = {
                        type: Hi.TAP,
                        ts: 0,
                        x: 0,
                        y: 0,
                        tgt: ""
                    },
                    i = br.build(t, e, this.analysisEventsEnhancers);
                i.tgt !== L.INVALID_ELEMENT && this.onEventCallback(i)
            }, t.prototype.processDrag = function(t, e) {
                var i = {
                        type: Hi.DRAG,
                        ts: 0,
                        fd: t.direction,
                        tgt: ""
                    },
                    r = br.build(e, i, this.analysisEventsEnhancers);
                r.tgt !== L.INVALID_ELEMENT && this.onEventCallback(r)
            }, t.prototype.processFlick = function(t, e) {
                var i = {
                        type: Hi.FLICK,
                        ts: 0,
                        fd: t.direction,
                        tgt: ""
                    },
                    r = br.build(e, i, this.analysisEventsEnhancers);
                r.tgt !== L.INVALID_ELEMENT && this.onEventCallback(r)
            }, t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                var e = this;
                this.gestureTracker.subscribe(t.TRACKER_IDENTIFIER, (function(t, i) {
                    return e.processGesture(t, i)
                }))
            }, t.prototype.stop = function() {
                this.gestureTracker.unsubscribe(t.TRACKER_IDENTIFIER)
            }, t.TRACKER_IDENTIFIER = "AnalysisGestureTracker", t
        }();

    function Ir(t, e) {
        var i, r, n, o, s = function() {
                r = null;
                var e = ct() - n;
                o = t.apply(void 0, H([e], i, !1)), n = null
            },
            a = function() {
                for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                return n || (n = ct()), r && window.clearTimeout(r), i = H([], t, !0), r = window.setTimeout(s, e), o
            };
        return a.flushPending = function() {
            r && (window.clearTimeout(r), s())
        }, a
    }
    var kr, Pr;
    (Pr = kr || (kr = {})).isEventOnScrollContainer = function(t) {
        return !!(Nt(t) && function(t) {
            try {
                if (Nt(csEventtarget.apply(t))) return !0
            } catch (t) {}
            return !1
        }(t) && Mt(csEventtarget.apply(t)) && null !== csEventtarget.apply(t).getAttribute("data-cs-scroll-container"))
    }, Pr.getScrollContainer = function() {
        return document.querySelector("[".concat("data-cs-scroll-container", "]"))
    };
    var Nr;
    (Nr || (Nr = {})).getRelativePosition = function(t) {
        var e = ge(t);
        if (!(e && Mt(e) && Ot(e.getBoundingClientRect) && Nt(t.pageX) && Nt(t.pageY))) return {
            xRel: -1,
            yRel: -1,
            valid: !1
        };
        var i = e.getBoundingClientRect(),
            r = t.pageX - i.left - qe.windowOffsetX(),
            n = t.pageY - i.top - qe.windowOffsetY();
        e !== document.documentElement && (r += e.scrollLeft, n += e.scrollTop);
        var o = Math.max(e.scrollWidth, i.width),
            s = Math.max(e.scrollHeight, i.height);
        return {
            xRel: Math.round(r / o * 65535),
            yRel: Math.round(n / s * 65535),
            valid: !0
        }
    };
    var Or = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.projectConfiguration = e, r.pathComputation = i, r.supportedEventTypes = [Hi.MOUSEMOVE], r.currentMouseMovePath = "", r
            }
            return V(e, t), e.prototype.baseEnhanceAnalysisEvent = function(t, e) {
                if (!this.projectConfiguration.mouseMoveHeatmapEnabled) return e;
                var i = Nr.getRelativePosition(t),
                    r = i.valid,
                    n = i.xRel,
                    o = i.yRel;
                if (r) {
                    var s = this.pathComputation.getEventTargetPath(t);
                    s !== L.INVALID_ELEMENT && (e.xRel = n, e.yRel = o, s !== this.currentMouseMovePath || this.projectConfiguration.iframesTracking ? (this.currentMouseMovePath = s, e.tgtHM = s) : e.tgtHM = "")
                } else this.currentMouseMovePath = "";
                return e
            }, e
        }(Tr),
        Mr = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.supportedEventTypes = [Hi.CHANGE], e.validInputTypes = ["text", "email", "number", "search", "tel", "url", "password"], e
            }
            return V(e, t), e.prototype.baseEnhanceAnalysisEvent = function(t, e) {
                var i, r = ge(t);
                return f(i = r) && "input" === i.localName && csArray.prototype.indexOf.call(this.validInputTypes, r.type) >= 0 && (e.isBlank = "" === r.value), e
            }, e
        }(Tr),
        Lr = function() {
            function t(t, e, i) {
                var r = this;
                this.projectConfiguration = t, this.pathComputation = e, this.selector = i, this.FOCUSABLE_ELEMENTS_SELECTOR = "select, select *, input, textarea", this.CHANGEABLE_ELEMENTS_SELECTOR = "select, select *, input, textarea", this.HOVERABLE_ELEMENTS_SELECTOR = "a, a *, button, button *, select, select *, input, textarea", this.KEYSTROKE_ELEMENTS_SELECTOR = "input, select, textarea", this.DEBOUNCE_DURATION = 150, this.THROTTLE_DURATION = 400, this.scrollContainerDimensionSent = !1, this.debouncedScrollEventCallback = Ir((function(t, e) {
                    return r.scrollListener(t, e)
                }), this.DEBOUNCE_DURATION), this.debouncedResizeEventCallback = Ir((function(t) {
                    return r.resizeListener(t)
                }), this.DEBOUNCE_DURATION), this.throttledMouseMoveCallback = xe((function(t) {
                    return r.mouseMoveListener(t)
                }), this.THROTTLE_DURATION), this.globalHandlers = [{
                    boundElement: window,
                    type: "resize",
                    listener: function() {
                        return r.debouncedResizeEventCallback()
                    }
                }, {
                    boundElement: document,
                    type: "scroll",
                    listener: function(t) {
                        return r.debouncedScrollEventCallback(t)
                    }
                }, {
                    boundElement: window,
                    type: "mousemove",
                    listener: function(t) {
                        r.throttledMouseMoveCallback(r.preserveEventForAsyncUse(t))
                    }
                }, {
                    boundElement: document,
                    type: "mousedown",
                    listener: function(t) {
                        return r.mouseDownListener(t)
                    }
                }, {
                    boundElement: document,
                    type: "mouseup",
                    listener: function(t) {
                        return r.mouseUpListener(t)
                    }
                }, {
                    boundElement: document,
                    type: "click",
                    listener: function(t) {
                        return r.clickListener(t)
                    }
                }], this.onSelectorHandlers = [{
                    boundElement: document,
                    type: "mouseover",
                    listener: this.selector.on(this.HOVERABLE_ELEMENTS_SELECTOR, (function(t) {
                        return r.mouseOverListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "mouseout",
                    listener: this.selector.on(this.HOVERABLE_ELEMENTS_SELECTOR, (function(t) {
                        return r.mouseOutListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "focusin",
                    listener: this.selector.on(this.FOCUSABLE_ELEMENTS_SELECTOR, (function(t) {
                        return r.focusInListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "focusout",
                    listener: this.selector.on(this.FOCUSABLE_ELEMENTS_SELECTOR, (function(t) {
                        return r.focusOutListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "change",
                    listener: this.selector.on(this.CHANGEABLE_ELEMENTS_SELECTOR, (function(t) {
                        return r.changeListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "keyup",
                    listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function(t) {
                        return r.keyUpListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "keydown",
                    listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function(t) {
                        return r.keyDownListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "copy",
                    listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function(t) {
                        return r.copyListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "cut",
                    listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function(t) {
                        return r.cutListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "paste",
                    listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function(t) {
                        return r.pasteListener(t)
                    }))
                }], this.analysisEventsEnhancers = [new Rr(this.projectConfiguration, this.pathComputation), new Or(this.projectConfiguration, this.pathComputation), new Mr, new wr(this.pathComputation)], this.keyStrokeMap = {}, this.initKeyStrokesMap()
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                var t = this.getSupportedHandlers();
                csArray.prototype.forEach.call(t, (function(t) {
                    return de(t)
                })), this.resizeListener()
            }, t.prototype.stop = function() {
                var t = this.getSupportedHandlers();
                csArray.prototype.forEach.call(t, (function(t) {
                    return fe(t)
                }))
            }, t.prototype.flushPendingDebouncedListeners = function() {
                this.debouncedScrollEventCallback.flushPending(), this.debouncedResizeEventCallback.flushPending()
            }, t.prototype.getSupportedHandlers = function() {
                return this.selector.isMatchesSelectorSupported() ? H(H([], this.globalHandlers, !0), this.onSelectorHandlers, !0) : (Vt.warn("Element.matches is not implemented yet"), this.globalHandlers)
            }, t.prototype.resizeListener = function(t) {
                var e = kr.getScrollContainer(),
                    i = Mt(e);
                i && (this.scrollContainerDimensionSent = !0);
                var r = {
                    type: Hi.RESIZE,
                    ts: 0,
                    x: i ? e.clientWidth : qe.windowWidth(),
                    y: i ? e.clientHeight : qe.windowHeight()
                };
                void 0 !== t && (r.d = t), this.onEventCallback(r)
            }, t.prototype.scrollListener = function(t, e) {
                var i = kr.isEventOnScrollContainer(e);
                !this.scrollContainerDimensionSent && i && this.resizeListener();
                var r = {
                        type: Hi.SCROLL,
                        ts: 0,
                        x: i ? csEventtarget.apply(e).scrollLeft : qe.windowOffsetX(),
                        y: i ? csEventtarget.apply(e).scrollTop : qe.windowOffsetY(),
                        d: t
                    },
                    n = br.build(e, r, this.analysisEventsEnhancers);
                this.onEventCallback(n)
            }, t.prototype.mouseMoveListener = function(t) {
                var e = {
                        type: Hi.MOUSEMOVE,
                        ts: 0,
                        x: t.pageX,
                        y: t.pageY
                    },
                    i = br.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallback(i)
            }, t.prototype.mouseDownListener = function(t) {
                var e = {
                        type: Hi.MOUSEDOWN,
                        ts: 0,
                        x: t.pageX,
                        y: t.pageY,
                        tgt: ""
                    },
                    i = br.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.mouseUpListener = function(t) {
                var e = {
                        type: Hi.MOUSEUP,
                        ts: 0,
                        x: t.pageX,
                        y: t.pageY,
                        tgt: ""
                    },
                    i = br.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.clickListener = function(t) {
                var e = {
                        type: Hi.CLICK,
                        ts: 0,
                        x: t.pageX,
                        y: t.pageY,
                        tgt: ""
                    },
                    i = br.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.mouseOverListener = function(t) {
                var e = {
                        type: Hi.MOUSEOVER,
                        ts: 0,
                        x: t.pageX,
                        y: t.pageY,
                        tgt: ""
                    },
                    i = br.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.mouseOutListener = function(t) {
                var e = {
                        type: Hi.MOUSEOUT,
                        ts: 0,
                        x: t.pageX,
                        y: t.pageY,
                        tgt: this.pathComputation.getEventTargetPath(t)
                    },
                    i = br.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.focusInListener = function(t) {
                var e = {
                        type: Hi.FOCUSIN,
                        ts: 0,
                        tgt: this.pathComputation.getEventTargetPath(t)
                    },
                    i = br.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.focusOutListener = function(t) {
                var e = {
                        type: Hi.FOCUSOUT,
                        ts: 0,
                        tgt: this.pathComputation.getEventTargetPath(t)
                    },
                    i = br.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.changeListener = function(t) {
                var e = {
                        type: Hi.CHANGE,
                        ts: 0,
                        tgt: this.pathComputation.getEventTargetPath(t)
                    },
                    i = br.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.copyListener = function(t) {
                var e = {
                    type: Hi.COMMAND,
                    ts: 0,
                    tgt: this.pathComputation.getEventTargetPath(t),
                    key: ve.COPY
                };
                this.onEventCallbackIfValidTarget(e)
            }, t.prototype.cutListener = function(t) {
                var e = {
                    type: Hi.COMMAND,
                    ts: 0,
                    tgt: this.pathComputation.getEventTargetPath(t),
                    key: ve.CUT
                };
                this.onEventCallbackIfValidTarget(e)
            }, t.prototype.pasteListener = function(t) {
                var e = {
                    type: Hi.COMMAND,
                    ts: 0,
                    tgt: this.pathComputation.getEventTargetPath(t),
                    key: ve.PASTE
                };
                this.onEventCallbackIfValidTarget(e)
            }, t.prototype.keyUpListener = function(t) {
                var e = {
                    type: Hi.KEYUP,
                    ts: 0,
                    tgt: this.pathComputation.getEventTargetPath(t),
                    key: this.computeKeystrokeKey(t)
                };
                this.onEventCallbackIfValidTarget(e)
            }, t.prototype.keyDownListener = function(t) {
                var e = {
                    type: Hi.KEYDOWN,
                    ts: 0,
                    tgt: this.pathComputation.getEventTargetPath(t),
                    key: this.computeKeystrokeKey(t)
                };
                this.onEventCallbackIfValidTarget(e)
            }, t.prototype.computeKeystrokeKey = function(t) {
                var e = this.keyStrokeMap[t.key];
                return void 0 === e ? ye.ALPHANUMERICAL : e
            }, t.prototype.onEventCallbackIfValidTarget = function(t) {
                Cr(t) && t.tgt !== L.INVALID_ELEMENT && this.onEventCallback(t)
            }, t.prototype.preserveEventForAsyncUse = function(t) {
                return t.composedPath && Object.defineProperty(t, "__csOriginalTarget", {
                    value: t.composedPath()[0],
                    writable: !1,
                    enumerable: !1
                }), t
            }, t.prototype.initKeyStrokesMap = function() {
                this.keyStrokeMap[" "] = ye.SPACE, this.keyStrokeMap.Spacebar = ye.SPACE, this.keyStrokeMap.Enter = ye.ENTER, this.keyStrokeMap.Backspace = ye.BACKSPACE, this.keyStrokeMap.Delete = ye.DELETE, this.keyStrokeMap.ArrowUp = ye.ARROWUP, this.keyStrokeMap.ArrowDown = ye.ARROWDOWN, this.keyStrokeMap.ArrowLeft = ye.ARROWLEFT, this.keyStrokeMap.ArrowRight = ye.ARROWRIGHT, this.keyStrokeMap.Up = ye.ARROWUP, this.keyStrokeMap.Down = ye.ARROWDOWN, this.keyStrokeMap.Left = ye.ARROWLEFT, this.keyStrokeMap.Right = ye.ARROWRIGHT, this.keyStrokeMap.CapsLock = ye.CAPSLOCK, this.keyStrokeMap.Shift = ye.SHIFT, this.keyStrokeMap.Tab = ye.TAB
            }, q([zt("Event handler type: resize")], t.prototype, "resizeListener", null), q([zt("Event handler type: scroll")], t.prototype, "scrollListener", null), q([zt("Event handler type: mouseMove")], t.prototype, "mouseMoveListener", null), q([zt("Event handler type: mouseDown")], t.prototype, "mouseDownListener", null), q([zt("Event handler type: mouseUp")], t.prototype, "mouseUpListener", null), q([zt("Event handler type: click")], t.prototype, "clickListener", null), q([zt("Event handler type: mouseOver")], t.prototype, "mouseOverListener", null), q([zt("Event handler type: mouseOut")], t.prototype, "mouseOutListener", null), q([zt("Event handler type: focusIn")], t.prototype, "focusInListener", null), q([zt("Event handler type: focusOut")], t.prototype, "focusOutListener", null), q([zt("Event handler type: change")], t.prototype, "changeListener", null), q([zt("Event handler type: copy")], t.prototype, "copyListener", null), q([zt("Event handler type: cut")], t.prototype, "cutListener", null), q([zt("Event handler type: paste")], t.prototype, "pasteListener", null), q([zt("Event handler type: keyup")], t.prototype, "keyUpListener", null), q([zt("Event handler type: keydown")], t.prototype, "keyDownListener", null), t
        }(),
        Dr = function() {
            function t() {
                var t = this;
                this.MAX_SCROLL_RATE_THRESHOLD = 100, this.maxScrollRate = 0, this.maxDocumentHeight = qe.documentHeight(), this.maxScrollRateHandler = {
                    boundElement: document,
                    type: "scroll",
                    listener: function(e) {
                        return t.maxScrollRateListener(e)
                    }
                }
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                de(this.maxScrollRateHandler), this.reset()
            }, t.prototype.stop = function() {
                fe(this.maxScrollRateHandler)
            }, t.prototype.reset = function() {
                this.maxDocumentHeight = qe.documentHeight();
                var t = kr.getScrollContainer();
                if (null === t) this.maxScrollRate = this.currentScrollRate(qe.documentHeight());
                else {
                    var e = this.computePaddingTop(t);
                    this.maxScrollRate = this.currentScrollRateWithScrollContainer(t, e)
                }
                this.onEventCallback()
            }, t.prototype.maxScrollRateListener = function(t) {
                var e, i;
                if (kr.isEventOnScrollContainer(t)) {
                    var r = csEventtarget.apply(t),
                        n = this.computePaddingTop(r);
                    e = this.documentHeightWithScrollContainer(r, n), i = this.currentScrollRateWithScrollContainer(r, n)
                } else e = qe.documentHeight(), i = this.currentScrollRate(e);
                (i > this.maxScrollRate || e > this.maxDocumentHeight) && (this.maxScrollRate = i, e > this.maxDocumentHeight && (this.maxDocumentHeight = e), this.onEventCallback())
            }, t.prototype.currentScrollRate = function(t) {
                var e = Math.round(this.lastPixelLine() / t * 100);
                return Math.min(e, this.MAX_SCROLL_RATE_THRESHOLD)
            }, t.prototype.lastPixelLine = function() {
                var t = qe.windowHeight();
                return qe.windowOffsetY() + t
            }, t.prototype.currentScrollRateWithScrollContainer = function(t, e) {
                var i = t.scrollTop + t.clientHeight + t.getBoundingClientRect().top + e,
                    r = this.documentHeightWithScrollContainer(t, e),
                    n = Math.round(i / r * 100);
                return Math.min(n, this.MAX_SCROLL_RATE_THRESHOLD)
            }, t.prototype.computePaddingTop = function(t) {
                var e = window.getComputedStyle(t).paddingTop || "0px";
                return parseInt(e, 10)
            }, t.prototype.documentHeightWithScrollContainer = function(t, e) {
                return t.scrollHeight + t.getBoundingClientRect().top + e
            }, t.prototype.getRequestParameters = function() {
                return {
                    sr: "".concat(this.maxScrollRate),
                    mdh: "".concat(this.maxDocumentHeight)
                }
            }, q([zt("MaxScrollRate handler")], t.prototype, "maxScrollRateListener", null), t
        }(),
        _r = function() {
            function t(t, e, i, r, n, o, s, a, c, u, p, l, h, d) {
                this.configuration = t, this.analysisEventsTracker = e, this.gestureTracker = i, this.maxScrollRateTracker = r, this.performanceTimingMetrics = n, this.analysisEventsBatch = o, this.analysisEventsRequest = s, this.analysisLastEventsRequest = a, this.analysisEventRequestParameters = c, this.sessionRenewer = u, this.recoveryStorage = p, this.projectPathComputation = l, this.performanceTracker = h, this.lastEventsTracker = d, this.eventEmitter = new De
            }
            return t.prototype.init = function() {
                var t = this;
                this.analysisEventsTracker.onEvent((function(e) {
                    return t.processEvent(e)
                })), this.gestureTracker.onEvent((function(e) {
                    return t.processEvent(e)
                })), this.maxScrollRateTracker.onEvent((function() {
                    t.analysisEventsBatch.setRequestParametersFromProvider(t.maxScrollRateTracker)
                })), this.performanceTracker.onEvent((function(e) {
                    return t.processEvent(e)
                })), this.lastEventsTracker.onEvent((function() {
                    t.analysisEventsBatch.isEmpty() || t.analysisLastEventsRequest.send()
                })), this.bindRequests()
            }, t.prototype.bindRequests = function() {
                var t = this;
                this.analysisEventsRequest.setRequestParametersProviders(this.analysisEventsBatch), this.analysisEventsRequest.before((function() {
                    t.analysisEventsBatch.setRequestParametersFromProvider(t.performanceTimingMetrics), t.analysisEventsBatch.enableCompression()
                })), this.analysisEventsRequest.after((function() {
                    t.analysisEventsBatch.setRequestParametersFromProvider(t.analysisEventRequestParameters)
                })), this.analysisEventsRequest.setRequestPayloadProvider(this.analysisEventsBatch), this.analysisEventsRequest.afterProvidersCalled((function() {
                    return t.analysisEventsBatch.clearEvents()
                })), this.analysisLastEventsRequest.setRequestParametersProviders(this.analysisEventsBatch), this.analysisLastEventsRequest.setRequestPayloadProvider(this.analysisEventsBatch), this.analysisLastEventsRequest.before((function() {
                    t.analysisEventsBatch.setRequestParametersFromProvider(t.performanceTimingMetrics), t.analysisEventsBatch.disableCompression()
                })), this.analysisLastEventsRequest.onBeaconSuccess((function() {
                    t.analysisEventsBatch.clearEvents(), t.analysisEventsBatch.setRequestParametersFromProvider(t.analysisEventRequestParameters)
                })), this.analysisLastEventsRequest.onBeaconFailure((function() {
                    t.saveLastEvents()
                }))
            }, t.prototype.initStates = function() {
                this.analysisEventsBatch.setRequestParametersFromProvider(this.analysisEventRequestParameters), this.resetStartTime()
            }, t.prototype.start = function(t) {
                this.lastEventsTracker.start(), this.analysisEventsTracker.start(), this.maxScrollRateTracker.start(), this.gestureTracker.start(), t || this.performanceTracker.start()
            }, t.prototype.onIframeAnalysisEvent = function(t) {
                this.processEvent(t)
            }, t.prototype.processEvent = function(t) {
                this.sessionRenewer.isSessionValid() && (this.analysisEventsBatch.addEvent(this.addTimestamp(t)), this.analysisEventsBatch.isFull() && this.sendEvents(), this.configuration.emitDebugEvents && this.eventEmitter.emit("analysisEvent", z(z({}, t), {
                    typeName: Hi[t.type]
                })))
            }, t.prototype.addTimestamp = function(t) {
                return t.ts = this.getRelativeTime(), t
            }, t.prototype.sendEvents = function() {
                this.analysisEventsBatch.isEmpty() || this.analysisEventsRequest.send()
            }, t.prototype.stop = function() {
                this.lastEventsTracker.stop(), this.analysisEventsTracker.stop(), this.maxScrollRateTracker.stop(), this.gestureTracker.stop(), this.performanceTracker.stop(), this.analysisEventsBatch.empty()
            }, t.prototype.clearStates = function() {
                this.analysisEventsTracker.flushPendingDebouncedListeners(), this.sendEvents(), this.maxScrollRateTracker.reset(), this.performanceTracker.stop()
            }, t.prototype.resetStartTime = function() {
                this.startTime = ct()
            }, t.prototype.getRelativeTime = function() {
                return ct() - this.startTime
            }, t.prototype.saveLastEvents = function() {
                try {
                    this.analysisEventsBatch.isEmpty() || this.recoveryStorage.save({
                        events: this.analysisEventsBatch.getEvents(),
                        metadata: this.analysisEventsBatch.getMetadata()
                    })
                } catch (t) {}
            }, t.prototype.pushSubmitEvent = function(t, e) {
                if (function(t) {
                        return t === Fi.SUCCESS || t === Fi.FAILURE || t === Fi.ATTEMPT
                    }(t))
                    if (Mt(e)) {
                        var i = {
                            status: t,
                            type: Hi.SUBMIT,
                            ts: 0,
                            tgt: this.projectPathComputation.getElementPath(e)
                        };
                        i.tgt !== L.INVALID_ELEMENT && this.processEvent(i)
                    } else Vt.warn("AnalysisEvents Service: invalid element: ".concat(e));
                else Vt.warn("AnalysisEvents Service: invalid submit status: ".concat(t))
            }, t
        }(),
        xr = function() {
            function t(t) {
                var e = t.events,
                    i = void 0 === e ? [] : e,
                    r = t.requestParameters,
                    n = void 0 === r ? {} : r,
                    o = t.stringCompression;
                this.compressed = !0, this.events = [], this.requestParameters = {}, this.events = i, this.requestParameters = n, this.stringCompression = o
            }
            return t.prototype.getRequestPayload = function() {
                return this.isCompressed() ? this.stringCompression.compressSync(csJSON.stringify(this.events)) : csJSON.stringify(this.events)
            }, t.prototype.addEvent = function(t) {
                csArray.prototype.push.call(this.events, t)
            }, t.prototype.setRequestParametersFromProvider = function(t) {
                var e = t.getRequestParameters();
                for (var i in e) e.hasOwnProperty(i) && (this.requestParameters[i] = e[i])
            }, t.prototype.eventsCount = function() {
                return this.events.length
            }, t.prototype.clearEvents = function() {
                this.events = []
            }, t.prototype.empty = function() {
                this.clearEvents()
            }, t.prototype.isFull = function() {
                return this.eventsCount() >= 50
            }, t.prototype.isEmpty = function() {
                return 0 === this.events.length
            }, t.prototype.getEvents = function() {
                return this.events
            }, t.prototype.getMetadata = function() {
                return this.requestParameters
            }, t.prototype.getRequestParameters = function() {
                var t, e;
                return z(z({}, this.requestParameters), {
                    ct: this.isCompressed() ? be.BASE64 : be.UNCOMPRESSED,
                    enc: null !== (e = null === (t = this.stringCompression) || void 0 === t ? void 0 : t.algorithm) && void 0 !== e ? e : "raw"
                })
            }, t.prototype.enableCompression = function() {
                this.compressed = !0
            }, t.prototype.disableCompression = function() {
                this.compressed = !1
            }, t.prototype.isCompressed = function() {
                return this.compressed
            }, t
        }(),
        Vr = function() {
            function t(t, e, i) {
                var r = this;
                this.analysisEventsRecoveryRequest = t, this.recoveryStorage = e, this.stringCompression = i, this.visibilityChangeHandler = function() {
                    "visible" === document.visibilityState && r.sendPersistedRecordings()
                }
            }
            return t.prototype.start = function() {
                this.sendPersistedRecordings(), this.addVisibilityChangeListener()
            }, t.prototype.stop = function() {
                this.removeVisibilityChangeListener()
            }, t.prototype.getRecoveryStorage = function() {
                return this.recoveryStorage
            }, t.prototype.sendPersistedRecordings = function() {
                var t = this.recoveryStorage.recover();
                if (null !== t) {
                    var e = t,
                        i = e.metadata,
                        r = e.events,
                        n = new xr({
                            events: r,
                            requestParameters: i,
                            stringCompression: this.stringCompression
                        });
                    this.analysisEventsRecoveryRequest.setRequestParametersProviders(n), this.analysisEventsRecoveryRequest.before((function() {
                        n.enableCompression()
                    })), this.analysisEventsRecoveryRequest.setRequestPayloadProvider(n), this.analysisEventsRecoveryRequest.afterProvidersCalled((function() {
                        return n.clearEvents()
                    })), this.analysisEventsRecoveryRequest.send()
                }
            }, t.prototype.addVisibilityChangeListener = function() {
                document.addEventListener("visibilitychange", this.visibilityChangeHandler)
            }, t.prototype.removeVisibilityChangeListener = function() {
                document.removeEventListener("visibilitychange", this.visibilityChangeHandler)
            }, t
        }();
    var zr, qr, Ur, Br, Hr, Fr = function() {
            function t(t) {
                this.storageName = t
            }
            return t.prototype.save = function(t) {
                localStorage.setItem(this.storageName, csJSON.stringify(t))
            }, t.prototype.clear = function() {
                localStorage.removeItem(this.storageName)
            }, t.prototype.recover = function() {
                var t = localStorage.getItem(this.storageName);
                if (null === t) return null;
                var e = null;
                try {
                    e = csJSON.parse(t)
                } catch (e) {
                    Vt.error("Invalid item in localStorage.\n         (key:".concat(this.storageName, "; value:").concat(t, ")"))
                } finally {
                    this.clear()
                }
                return e
            }, t
        }(),
        Gr = function() {
            function t(t) {
                var e = this;
                this.webVitalsProvider = t, this.metricHandler = function(t) {
                    return e.processMetric(t)
                }, this.isStarted = !1
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.isStarted || (this.isStarted = !0, this.webVitalsProvider.onFCP(this.metricHandler), this.webVitalsProvider.onCLS(this.metricHandler), this.webVitalsProvider.onFID(this.metricHandler), this.webVitalsProvider.onLCP(this.metricHandler), this.webVitalsProvider.onTTFB(this.metricHandler))
            }, t.prototype.stop = function() {
                this.isStarted = !1
            }, t.prototype.processMetric = function(t) {
                if (this.isStarted) {
                    var e = {
                        type: Hi.PERFORMANCE,
                        name: t.name,
                        val: t.value,
                        ts: 0
                    };
                    this.onEventCallback(e)
                }
            }, q([zt("Performance metric handler")], t.prototype, "processMetric", null), t
        }(),
        jr = function(t, e) {
            return {
                name: t,
                value: void 0 === e ? -1 : e,
                delta: 0,
                entries: [],
                id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
            }
        },
        Kr = function(t, e) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                    if ("first-input" === t && !("PerformanceEventTiming" in self)) return;
                    var i = new PerformanceObserver((function(t) {
                        return t.getEntries().map(e)
                    }));
                    return i.observe({
                        type: t,
                        buffered: !0
                    }), i
                }
            } catch (t) {}
        },
        Wr = function(t, e) {
            var i = function i(r) {
                "pagehide" !== r.type && "hidden" !== document.visibilityState || (t(r), e && (removeEventListener("visibilitychange", i, !0), removeEventListener("pagehide", i, !0)))
            };
            addEventListener("visibilitychange", i, !0), addEventListener("pagehide", i, !0)
        },
        Yr = function(t) {
            addEventListener("pageshow", (function(e) {
                e.persisted && t(e)
            }), !0)
        },
        Xr = function(t, e, i) {
            var r;
            return function(n) {
                e.value >= 0 && (n || i) && (e.delta = e.value - (r || 0), (e.delta || void 0 === r) && (r = e.value, t(e)))
            }
        },
        Jr = -1,
        Qr = function() {
            return "hidden" === document.visibilityState ? 0 : 1 / 0
        },
        Zr = function() {
            Wr((function(t) {
                var e = t.timeStamp;
                Jr = e
            }), !0)
        },
        $r = function() {
            return Jr < 0 && (Jr = Qr(), Zr(), Yr((function() {
                setTimeout((function() {
                    Jr = Qr(), Zr()
                }), 0)
            }))), {
                get firstHiddenTime() {
                    return Jr
                }
            }
        },
        tn = function(t, e) {
            var i, r = $r(),
                n = jr("FCP"),
                o = function(t) {
                    "first-contentful-paint" === t.name && (a && a.disconnect(), t.startTime < r.firstHiddenTime && (n.value = t.startTime, n.entries.push(t), i(!0)))
                },
                s = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0],
                a = s ? null : Kr("paint", o);
            (s || a) && (i = Xr(t, n, e), s && o(s), Yr((function(r) {
                n = jr("FCP"), i = Xr(t, n, e), requestAnimationFrame((function() {
                    requestAnimationFrame((function() {
                        n.value = performance.now() - r.timeStamp, i(!0)
                    }))
                }))
            })))
        },
        en = !1,
        rn = -1,
        nn = {
            passive: !0,
            capture: !0
        },
        on = new Date,
        sn = function(t, e) {
            zr || (zr = e, qr = t, Ur = new Date, un(removeEventListener), an())
        },
        an = function() {
            if (qr >= 0 && qr < Ur - on) {
                var t = {
                    entryType: "first-input",
                    name: zr.type,
                    target: zr.target,
                    cancelable: zr.cancelable,
                    startTime: zr.timeStamp,
                    processingStart: zr.timeStamp + qr
                };
                Br.forEach((function(e) {
                    e(t)
                })), Br = []
            }
        },
        cn = function(t) {
            if (t.cancelable) {
                var e = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
                "pointerdown" == t.type ? function(t, e) {
                    var i = function() {
                            sn(t, e), n()
                        },
                        r = function() {
                            n()
                        },
                        n = function() {
                            removeEventListener("pointerup", i, nn), removeEventListener("pointercancel", r, nn)
                        };
                    addEventListener("pointerup", i, nn), addEventListener("pointercancel", r, nn)
                }(e, t) : sn(e, t)
            }
        },
        un = function(t) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(e) {
                return t(e, cn, nn)
            }))
        },
        pn = {},
        ln = function() {
            function t() {}
            return t.prototype.onFCP = function(t) {
                tn(t, !0)
            }, t.prototype.onCLS = function(t) {
                ! function(t, e) {
                    en || (tn((function(t) {
                        rn = t.value
                    })), en = !0);
                    var i, r = function(e) {
                            rn > -1 && t(e)
                        },
                        n = jr("CLS", 0),
                        o = 0,
                        s = [],
                        a = function(t) {
                            if (!t.hadRecentInput) {
                                var e = s[0],
                                    r = s[s.length - 1];
                                o && t.startTime - r.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (o += t.value, s.push(t)) : (o = t.value, s = [t]), o > n.value && (n.value = o, n.entries = s, i())
                            }
                        },
                        c = Kr("layout-shift", a);
                    c && (i = Xr(r, n, e), Wr((function() {
                        c.takeRecords().map(a), i(!0)
                    })), Yr((function() {
                        o = 0, rn = -1, n = jr("CLS", 0), i = Xr(r, n, e)
                    })))
                }(t, !0)
            }, t.prototype.onFID = function(t) {
                ! function(t, e) {
                    var i, r = $r(),
                        n = jr("FID"),
                        o = function(t) {
                            t.startTime < r.firstHiddenTime && (n.value = t.processingStart - t.startTime, n.entries.push(t), i(!0))
                        },
                        s = Kr("first-input", o);
                    i = Xr(t, n, e), s && Wr((function() {
                        s.takeRecords().map(o), s.disconnect()
                    }), !0), s && Yr((function() {
                        var r;
                        n = jr("FID"), i = Xr(t, n, e), Br = [], qr = -1, zr = null, un(addEventListener), r = o, Br.push(r), an()
                    }))
                }(t, !0)
            }, t.prototype.onLCP = function(t) {
                ! function(t, e) {
                    var i, r = $r(),
                        n = jr("LCP"),
                        o = function(t) {
                            var e = t.startTime;
                            e < r.firstHiddenTime && (n.value = e, n.entries.push(t), i())
                        },
                        s = Kr("largest-contentful-paint", o);
                    if (s) {
                        i = Xr(t, n, e);
                        var a = function() {
                            pn[n.id] || (s.takeRecords().map(o), s.disconnect(), pn[n.id] = !0, i(!0))
                        };
                        ["keydown", "click"].forEach((function(t) {
                            addEventListener(t, a, {
                                once: !0,
                                capture: !0
                            })
                        })), Wr(a, !0), Yr((function(r) {
                            n = jr("LCP"), i = Xr(t, n, e), requestAnimationFrame((function() {
                                requestAnimationFrame((function() {
                                    n.value = performance.now() - r.timeStamp, pn[n.id] = !0, i(!0)
                                }))
                            }))
                        }))
                    }
                }(t, !0)
            }, t.prototype.onTTFB = function(t) {
                ! function(t) {
                    var e, i = jr("TTFB");
                    e = function() {
                        try {
                            var e = performance.getEntriesByType("navigation")[0] || function() {
                                var t = performance.timing,
                                    e = {
                                        entryType: "navigation",
                                        startTime: 0
                                    };
                                for (var i in t) "navigationStart" !== i && "toJSON" !== i && (e[i] = Math.max(t[i] - t.navigationStart, 0));
                                return e
                            }();
                            if (i.value = i.delta = e.responseStart, i.value < 0 || i.value > performance.now()) return;
                            i.entries = [e], t(i)
                        } catch (t) {}
                    }, "complete" === document.readyState ? setTimeout(e, 0) : addEventListener("load", (function() {
                        return setTimeout(e, 0)
                    }))
                }(t)
            }, t
        }(),
        hn = function() {
            function t() {
                var t = this;
                this.isStarted = !1, this.sendLastEvents = function(e) {
                    try {
                        if (("pagehide" === e.type || "visibilitychange" === e.type) && "hidden" !== document.visibilityState) return;
                        t.eventCallback()
                    } catch (t) {}
                }
            }
            return t.prototype.start = function() {
                this.isStarted || (this.isStarted = !0, this.addVisibilityChangeListener(), this.addPageHideListener(), this.addBlurListener())
            }, t.prototype.stop = function() {
                this.isStarted && (this.isStarted = !1, this.removeVisibilityChangeListener(), this.removePageHideListener(), this.removeBlurListener())
            }, t.prototype.onEvent = function(t) {
                this.eventCallback = t
            }, t.prototype.addVisibilityChangeListener = function() {
                document.addEventListener("visibilitychange", this.sendLastEvents)
            }, t.prototype.removeVisibilityChangeListener = function() {
                document.removeEventListener("visibilitychange", this.sendLastEvents)
            }, t.prototype.addPageHideListener = function() {
                window.addEventListener("pagehide", this.sendLastEvents)
            }, t.prototype.removePageHideListener = function() {
                window.removeEventListener("pagehide", this.sendLastEvents)
            }, t.prototype.addBlurListener = function() {
                window.addEventListener("blur", this.sendLastEvents)
            }, t.prototype.removeBlurListener = function() {
                window.removeEventListener("blur", this.sendLastEvents)
            }, t
        }(),
        dn = ["submit"],
        fn = function() {
            function t(t, e, i, r, n, o, s, a, c, u) {
                this.configuration = t, this.visitorService = e, this.sessionService = i, this.projectPathComputation = r, this.selector = n, this.commandsService = o, this.sessionRenewer = s, this.gestureTracker = a, this.iframeEventsEmitter = c, this.stringCompression = u
            }
            return t.prototype.init = function() {
                var t = this;
                ! function() {
                    localStorage.removeItem("csLegacyRecovered");
                    for (var t = [], e = 0; e < localStorage.length; e += 1) {
                        var i = localStorage.key(e);
                        0 === csString.prototype.indexOf.call(i, "CSStorageData") && csArray.prototype.push.call(t, i)
                    }
                    csArray.prototype.forEach.call(t, (function(t) {
                        return localStorage.removeItem(t)
                    }))
                }();
                var e = new xr({
                    stringCompression: this.stringCompression
                });
                this.analysisEventsRecovery = this.createRecovery(), this.analysisEventsService = this.createService(e, this.analysisEventsRecovery.getRecoveryStorage()), this.analysisEventsService.init(), this.iframeEventsEmitter.addListeners(this.analysisEventsService), this.commandsService.register(dn, (function(e, i) {
                    t.analysisEventsService.pushSubmitEvent(e, i)
                }))
            }, t.prototype.onStartTracking = function(t) {
                this.analysisEventsRecovery.start(), this.analysisEventsService.start(t)
            }, t.prototype.onAfterNaturalPageView = function() {
                this.analysisEventsService.initStates()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.analysisEventsService.initStates()
            }, t.prototype.onBeforeArtificialPageView = function() {
                this.analysisEventsService.clearStates()
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.analysisEventsService.clearStates(), this.analysisEventsService.stop(), this.analysisEventsRecovery.stop()
            }, t.prototype.onOptout = function() {
                this.analysisEventsService.stop(), this.analysisEventsRecovery.stop()
            }, t.prototype.createService = function(t, e) {
                var i = new Er(window),
                    n = new Dr,
                    o = new Lr(this.configuration, this.projectPathComputation, this.selector),
                    s = new Ar(this.configuration, this.projectPathComputation, this.gestureTracker),
                    a = new Gr(new ln),
                    c = new hn,
                    u = new he(this.configuration.getTrackerUri(), "v2/events"),
                    p = new Ri(this.configuration.getTrackerUri(), "v2/events"),
                    l = new ri(this.configuration, this.visitorService, this.sessionService, n, i, r);
                return new _r(this.configuration, o, s, n, i, t, u, p, l, this.sessionRenewer, e, this.projectPathComputation, a, c)
            }, t.prototype.createRecovery = function() {
                var t = new he(this.configuration.getTrackerUri(), "v2/events");
                return new Vr(t, new Fr("csAnalysisEventsPersisted"), this.stringCompression)
            }, t
        }();
    ! function(t) {
        t.Artificial = "a", t.Renewal = "r", t.Natural = "n"
    }(Hr || (Hr = {}));
    var yn = function() {
            function t() {
                this.pageViewType = Hr.Natural
            }
            return t.prototype.setPageViewType = function(t) {
                this.pageViewType = t
            }, t.prototype.getRequestParameters = function() {
                return {
                    pvt: this.pageViewType
                }
            }, t
        }(),
        vn = function(t) {
            function e(e, i, r, n) {
                var o = t.call(this) || this;
                return o.lifeCycleEventsEmitter = e, o.pageViewRequest = i, o.urlService = r, o.pageViewTypeMarker = n, o
            }
            return V(e, t), e.prototype.init = function() {
                this.addPageShowListener()
            }, e.prototype.onStart = function(t) {
                t ? this.sendRenewalPageView() : this.sendNaturalPageView()
            }, e.prototype.onStop = function() {}, e.prototype.triggerArtificialPageView = function(t) {
                this.isStarted ? this.sendArtificialPageView(t) : this.urlService.overridePath(t)
            }, e.prototype.sendNaturalPageView = function() {
                this.pageViewTypeMarker.setPageViewType(Hr.Natural), this.lifeCycleEventsEmitter.emitBeforeNaturalPageView(), this.pageViewRequest.send(), this.lifeCycleEventsEmitter.emitAfterNaturalPageView()
            }, e.prototype.sendRenewalPageView = function() {
                this.pageViewTypeMarker.setPageViewType(Hr.Renewal), this.lifeCycleEventsEmitter.emitBeforeNaturalPageView(), this.pageViewRequest.send(), this.lifeCycleEventsEmitter.emitAfterNaturalPageView()
            }, e.prototype.sendArtificialPageView = function(t) {
                this.pageViewTypeMarker.setPageViewType(Hr.Artificial), this.lifeCycleEventsEmitter.emitArtificialPageViewEnd(), t && this.urlService.overridePath(t), this.lifeCycleEventsEmitter.emitBeforeArtificialPageView(), this.pageViewRequest.send(), this.lifeCycleEventsEmitter.emitAfterArtificialPageView()
            }, e.prototype.addPageShowListener = function() {
                var t = this;
                window.addEventListener("pageshow", (function(e) {
                    t.isStarted && e.persisted && t.sendArtificialPageView()
                }))
            }, e
        }(_e),
        mn = window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage || window.navigator.systemLanguage || "unknown";

    function gn() {
        return {
            la: mn
        }
    }
    var Sn, En = function() {
            function t(t) {
                this.pii = t
            }
            return t.prototype.getRequestParameters = function() {
                return {
                    dr: this.get()
                }
            }, t.prototype.get = function() {
                return this.pii.anonymize(this.getReferrer())
            }, t.prototype.getReferrer = function() {
                var t = "";
                try {
                    t = window.top.document.referrer
                } catch (e) {
                    if (window.parent) try {
                        t = window.parent.document.referrer
                    } catch (e) {
                        t = ""
                    }
                }
                return "" === t && (t = document.referrer), t
            }, t
        }(),
        Cn = ["trackPageview"],
        Tn = ["setPath"],
        Rn = ["setQuery"],
        bn = function() {
            function t(t, e, i, r, n, o, s, a, c) {
                this.configuration = t, this.commandsService = e, this.lifeCycleEventsEmitter = i, this.visitorService = r, this.sessionService = n, this.consentService = o, this.customVariablesService = s, this.pii = a, this.urlService = c
            }
            return t.prototype.init = function() {
                var t = this,
                    e = new et(this.configuration.getTrackerUri(), "pageview"),
                    i = new yn;
                this.pageViewService = new vn(this.lifeCycleEventsEmitter, e, this.urlService, i), this.pageViewService.init(), e.setRequestParametersProviders(this.configuration, this.visitorService, this.sessionService, qe, new En(this.pii), this.urlService, this.consentService, n, this.customVariablesService, r, i), this.commandsService.register(Cn, (function(e) {
                    return t.pageViewService.triggerArtificialPageView(e)
                })), this.commandsService.register(Tn, (function(e) {
                    return t.urlService.overridePath(e)
                })), this.commandsService.register(Rn, (function(e) {
                    return t.urlService.overrideQuery(e)
                }))
            }, t.prototype.start = function(t) {
                this.pageViewService.start(t)
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.pageViewService.stop()
            }, t
        }(),
        wn = function() {
            function t(t, e) {
                this.pathComputation = t, this.configuration = e
            }
            return t.prototype.getEventTargetPath = function(t) {
                var e = ge(t);
                return this.pathComputation.getElementPath(e, z({
                    dynamicIdRegex: this.configuration.dynamicIdRegex
                }, this.configuration.pathComputationRules))
            }, t.prototype.getEventTargetPathAndTargetLink = function(t) {
                var e = ge(t),
                    i = this.pathComputation.getElementPathAndFirstAnchorParent(e, z({
                        dynamicIdRegex: this.configuration.dynamicIdRegex
                    }, this.configuration.pathComputationRules)),
                    r = i.path,
                    n = i.firstAnchorParent;
                return {
                    path: r,
                    targetLink: this.hasValidTargetLink(n) ? n.href : ""
                }
            }, t.prototype.hasValidEventTarget = function(t) {
                var e = ge(t);
                return this.pathComputation.isValidElement(e)
            }, t.prototype.getElementPath = function(t) {
                return this.pathComputation.getElementPath(t, z({
                    dynamicIdRegex: this.configuration.dynamicIdRegex
                }, this.configuration.pathComputationRules))
            }, t.prototype.hasValidTargetLink = function(t) {
                return null !== t && t.hasAttribute("href") && !j(t.getAttribute("href"), "#")
            }, t
        }(),
        An = function() {
            function t(t) {
                this.pathComputation = t
            }
            return t.prototype.on = function(t, e) {
                var i = this;
                return function(r) {
                    i.pathComputation.hasValidEventTarget(r) && i.targetMatchesSelector(r, t) && e(r)
                }
            }, t.prototype.targetMatchesSelector = function(t, e) {
                var i = ge(t);
                return A.call(i, e)
            }, t.prototype.isMatchesSelectorSupported = function() {
                return !!A
            }, t
        }(),
        In = function() {
            function t() {}
            return t.prototype.onLoad = function(t) {
                this.onLoadCallback = t
            }, t.prototype.onLoadCallbackExecute = function() {
                this.onLoadCallback()
            }, t.prototype.start = function() {
                var t = this.onLoadCallbackExecute.bind(this);
                this.onDocumentLoaded(t)
            }, t.prototype.onDocumentLoaded = function(t) {
                function e() {
                    document.removeEventListener("DOMContentLoaded", e), window.removeEventListener("load", e), t()
                }
                "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? setTimeout(t) : (document.addEventListener("DOMContentLoaded", e), window.addEventListener("load", e))
            }, q([zt("onLoad")], t.prototype, "onLoadCallbackExecute", null), t
        }(),
        kn = ["clearSession"],
        Pn = ["extendSession"],
        Nn = function() {
            function t(t, e, i) {
                this.visitorService = t, this.sessionService = e, this.commandsService = i
            }
            return t.prototype.init = function() {
                var t = this;
                this.commandsService.register(kn, (function() {
                    return t.sessionService.removeSession()
                })), this.commandsService.register(Pn, (function() {
                    return t.sessionService.extendSessionPeriodically()
                }))
            }, t.prototype.onBeforeNaturalPageView = function() {
                this.visitorService.createOrUpdateVisitor(), this.sessionService.createOrUpdateSession()
            }, t.prototype.onBeforeArtificialPageView = function() {
                this.sessionService.abortQuotaServiceRequest(), this.visitorService.createOrUpdateVisitor(), this.sessionService.createOrUpdateSession()
            }, t.prototype.onOptout = function() {
                this.visitorService.removeVisitor(), this.sessionService.removeSession()
            }, t.prototype.onRecordingStateChange = function(t, e) {
                this.sessionService.updateRecordingState(t, e)
            }, t
        }(),
        On = function() {
            function t(t, e) {
                this.sessionService = t, this.visitorService = e
            }
            return t.prototype.onSessionExpired = function(t) {
                this.onSessionExpiredCallback = t
            }, t.prototype.isSessionValid = function() {
                var t = this.sessionService.hasValidSession(),
                    e = !1;
                return this.sessionService.pollCacheRefreshEvent() && (e = this.visitorService.isSessionRenewed()), t && !e || !this.canRenewSession() ? t : (this.lastSessionRenewalTime = ct(), this.onSessionExpiredCallback(), this.sessionService.hasValidSession())
            }, t.prototype.canRenewSession = function() {
                return !Pt(this.lastSessionRenewalTime) || ct() - this.lastSessionRenewalTime > 6e4
            }, t
        }(),
        Mn = function(t) {
            function e(e, i, r, n, o, s, a) {
                var c = t.call(this) || this;
                return c.urlService = e, c.eMerchandisingLazyLoadedProductsTracker = i, c.lastEventsTracker = r, c.eMerchandisingRequest = n, c.eMerchandisingLazyLoadingRequest = o, c.eMerchandisingBeaconRequest = s, c.eMerchandisingProductsBatch = a, c.requestPayload = {
                    targetUrl: "",
                    windowWidth: 0,
                    windowHeight: 0,
                    products: []
                }, c
            }
            return V(e, t), e.prototype.init = function() {
                this.initRequests(), this.initProductsTracker(), this.initLastEventsTracker()
            }, e.prototype.collectInitialProducts = function() {
                var t = this.eMerchandisingLazyLoadedProductsTracker.collectProducts();
                this.requestPayload = this.buildEmerchandisingData(t), this.eMerchandisingRequest.send()
            }, e.prototype.onIframeEmerchandisingMessage = function(t) {
                this.requestPayload = t, this.eMerchandisingRequest.send()
            }, e.prototype.clearState = function() {
                this.eMerchandisingLazyLoadedProductsTracker.flushEvents(), this.eMerchandisingProductsBatch.isEmpty() || this.eMerchandisingLazyLoadingRequest.send()
            }, e.prototype.onStart = function() {
                this.lastEventsTracker.start(), this.eMerchandisingLazyLoadedProductsTracker.start()
            }, e.prototype.onStop = function() {
                this.lastEventsTracker.stop(), this.eMerchandisingLazyLoadedProductsTracker.stop()
            }, e.prototype.initRequests = function() {
                this.initEmerchandisingPostRequest(), this.initEmerchandisingBeaconRequest(), this.initLazyLoadingPostRequest()
            }, e.prototype.initEmerchandisingPostRequest = function() {
                var t = this;
                this.eMerchandisingRequest.afterProvidersCalled((function() {
                    t.requestPayload.products = []
                })), this.eMerchandisingRequest.setRequestPayloadProvider({
                    getRequestPayload: function() {
                        return csJSON.stringify(t.requestPayload)
                    }
                })
            }, e.prototype.initEmerchandisingBeaconRequest = function() {
                var t = this;
                this.eMerchandisingBeaconRequest.setRequestPayloadProvider({
                    getRequestPayload: function() {
                        return t.getLazyLoadingRequestPayload()
                    }
                }), this.eMerchandisingBeaconRequest.after((function() {
                    t.eMerchandisingProductsBatch.reset()
                }))
            }, e.prototype.initLazyLoadingPostRequest = function() {
                var t = this;
                this.eMerchandisingLazyLoadingRequest.afterProvidersCalled((function() {
                    t.eMerchandisingProductsBatch.reset()
                })), this.eMerchandisingLazyLoadingRequest.setRequestPayloadProvider({
                    getRequestPayload: function() {
                        return t.getLazyLoadingRequestPayload()
                    }
                })
            }, e.prototype.getLazyLoadingRequestPayload = function() {
                var t = this.eMerchandisingProductsBatch.getProducts();
                return csJSON.stringify(this.buildEmerchandisingData(t))
            }, e.prototype.buildEmerchandisingData = function(t) {
                return {
                    products: t,
                    targetUrl: this.urlService.getUrl(),
                    windowWidth: qe.windowWidth(),
                    windowHeight: qe.windowHeight()
                }
            }, e.prototype.initProductsTracker = function() {
                var t = this;
                this.eMerchandisingLazyLoadedProductsTracker.init(), this.eMerchandisingLazyLoadedProductsTracker.onProductsDetection((function(e) {
                    t.eMerchandisingProductsBatch.addProducts(e), t.eMerchandisingProductsBatch.isFull() && t.eMerchandisingLazyLoadingRequest.send()
                }))
            }, e.prototype.initLastEventsTracker = function() {
                var t = this;
                this.lastEventsTracker.onEvent((function() {
                    t.sendLastProducts()
                }))
            }, e.prototype.sendLastProducts = function() {
                this.eMerchandisingProductsBatch.isEmpty() || this.eMerchandisingBeaconRequest.send()
            }, e
        }(_e),
        Ln = function() {
            function t(t) {
                this.configuration = t
            }
            return t.prototype.collectProducts = function(t) {
                void 0 === t && (t = document);
                for (var e = [], i = 0, r = this.getAllValidAnchors(this.configuration.hostnames, t); i < r.length; i++) {
                    var n = r[i];
                    csArray.prototype.push.call(e, this.buildProductFromAnchor(n))
                }
                return e
            }, t.prototype.getAllValidAnchors = function(t, e) {
                var i = this;
                return void 0 === e && (e = document), csArray.prototype.filter.call(Ue.findAllElements("a", e), (function(e) {
                    return i.isAnchorValid(e, t)
                }))
            }, t.prototype.isAnchorValid = function(t, e) {
                return ("https:" === t.protocol || "http:" === t.protocol) && t.offsetHeight > 0 && t.offsetWidth > 0 && "" !== t.hostname && mt(t.hostname, e)
            }, t.prototype.buildProductFromAnchor = function(t) {
                return {
                    targetPath: L.getElementPath(t, {
                        dynamicIdRegex: this.configuration.dynamicIdRegex
                    }),
                    href: t.href
                }
            }, t
        }(),
        Dn = function(t) {
            function e(e, i) {
                var r = t.call(this, e) || this;
                return r.mutationObserver = i, r.mutationObserverOptions = {
                    subtree: !0,
                    childList: !0
                }, r
            }
            return V(e, t), e.prototype.init = function() {
                this.initMutationObserver()
            }, e.prototype.start = function() {
                this.mutationObserver.start(), this.observeDom()
            }, e.prototype.stop = function() {
                this.mutationObserver.stop()
            }, e.prototype.flushEvents = function() {
                this.mutationObserver.flushPendingMutations()
            }, e.prototype.onProductsDetection = function(t) {
                this.productsDetectionCallback = t
            }, e.prototype.initMutationObserver = function() {
                this.mutationObserver.init(), this.initMutationCallbacks()
            }, e.prototype.initMutationCallbacks = function() {
                var t = this;
                this.mutationObserver.onChildListMutation((function(e) {
                    return t.handleChildListMutation(e)
                })), this.mutationObserver.onAttachShadowMutation((function(e) {
                    return t.handleAttachShadowMutation(e)
                }))
            }, e.prototype.handleChildListMutation = function(t) {
                for (var e = 0; e < t.addedNodes.length; e += 1) {
                    var i = t.addedNodes[e];
                    if (v(i) && this.isAnchorValid(i, this.configuration.hostnames)) {
                        var r = this.buildProductFromAnchor(i);
                        this.emitProductsEvent([r])
                    } else if (Mt(i)) {
                        var n = this.collectProducts(i);
                        this.emitProductsEvent(n)
                    }
                }
            }, e.prototype.handleAttachShadowMutation = function(t) {
                var e = t.shadowRoot;
                this.emitProductsEvent(this.collectProducts(e)), this.mutationObserver.observe(e, this.mutationObserverOptions)
            }, e.prototype.emitProductsEvent = function(t) {
                t.length > 0 && this.productsDetectionCallback(t)
            }, e.prototype.observeDom = function() {
                this.mutationObserver.observe(document, this.mutationObserverOptions), this.observeShadowRoots(document)
            }, e.prototype.observeShadowRoots = function(t) {
                var e = this,
                    i = Ve.getAllShadowHosts(t);
                csArray.prototype.forEach.call(i, (function(t) {
                    t.shadowRoot && e.mutationObserver.observe(t.shadowRoot, e.mutationObserverOptions)
                }))
            }, e
        }(Ln),
        _n = function() {
            function t(e) {
                void 0 === e && (e = t.DEFAULT_BATCH_SIZE), this.products = [], this.bytesCounter = new Ae(e)
            }
            return t.prototype.addProducts = function(t) {
                var e;
                this.bytesCounter.addString(csJSON.stringify(t)), (e = csArray.prototype.push).call.apply(e, H([this.products], t, !1))
            }, t.prototype.reset = function() {
                this.bytesCounter.reset(), this.products = []
            }, t.prototype.isEmpty = function() {
                return 0 === this.products.length
            }, t.prototype.isFull = function() {
                return this.bytesCounter.isThresholdReached()
            }, t.prototype.getProducts = function() {
                return this.products
            }, t.DEFAULT_BATCH_SIZE = 5120, t
        }(),
        xn = function() {
            function t(t, e, i, r, n, o, s) {
                this.configuration = t, this.compressor = e, this.basicRequestParameters = i, this.customVariablesService = r, this.urlService = n, this.iframeEventsEmitter = o, this.commandsService = s
            }
            return t.prototype.init = function() {
                var t = new yi(new Ci),
                    e = new Dn(this.configuration, t),
                    i = new hn,
                    r = this.createEMerchandisingPostRequest(this.compressor),
                    n = this.createEMerchandisingPostRequest(this.compressor),
                    o = this.createEMerchandisingBeaconRequest(),
                    s = new _n;
                this.eMerchandisingService = new Mn(this.urlService, e, i, r, n, o, s), this.eMerchandisingService.init(), this.iframeEventsEmitter.addListeners(this.eMerchandisingService)
            }, t.prototype.onStartTracking = function() {
                this.eMerchandisingService.collectInitialProducts(), this.eMerchandisingService.start()
            }, t.prototype.onArtificialPageViewEnd = function() {
                this.eMerchandisingService.clearState()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.eMerchandisingService.collectInitialProducts()
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.eMerchandisingService.clearState(), this.eMerchandisingService.stop()
            }, t.prototype.onOptout = function() {
                this.eMerchandisingService.stop()
            }, t.prototype.createEMerchandisingPostRequest = function(t) {
                var e = new he(this.configuration.getTrackerUri(), "display");
                return e.setCompressionOptions(t, "base64"), e.setRequestParametersProviders(this.basicRequestParameters, this.customVariablesService, {
                    getRequestParameters: function() {
                        return {
                            ct: be.BASE64
                        }
                    }
                }), e.setRequestHeader({
                    name: "Access-Control-Expose-Headers",
                    value: "Content-compression"
                }), e.setRequestHeader({
                    name: "Content-type",
                    value: "text/plain; charset=UTF-8"
                }), e.setRequestHeader({
                    name: "Content-compression",
                    value: "LZString"
                }), e
            }, t.prototype.createEMerchandisingBeaconRequest = function() {
                var t = new Ri(this.configuration.getTrackerUri(), "display");
                return t.setRequestParametersProviders(this.basicRequestParameters, this.customVariablesService, {
                    getRequestParameters: function() {
                        return {
                            ct: be.UNCOMPRESSED
                        }
                    }
                }), t
            }, t
        }();

    function Vn(t) {
        return t.tagDeploymentMode === Sn.DualCollectionReview || t.tagDeploymentMode === Sn.DualCollection
    }! function(t) {
        t.ContentSquare = "CONTENTSQUARE", t.LoadedByClicktale = "LOADED_BY_CLICKTALE", t.LoadClicktalePtc = "LOAD_CLICKTALE_PTC", t.DualCollectionReview = "DUAL_COLLECTION_REVIEW", t.DualCollection = "DUAL_COLLECTION"
    }(Sn || (Sn = {}));
    var zn, qn = function() {
        function t(t, e, i, r) {
            this.configuration = t, this.visitorService = e, this.sessionService = i, this.sensitiveContentService = r
        }
        return t.prototype.init = function() {
            this.isClicktalePtcLoaded = !1, this.isContentSquareDataCollectionStarted = !1
        }, t.prototype.loadClicktalePtc = function() {
            !this.isClicktalePtcLoaded && this.configuration.ptcDomain && this.configuration.ptcGuid && this.doLoadClicktalePtc()
        }, t.prototype.getSessionData = function() {
            var t = this.configuration.projectId,
                e = this.visitorService.getVisitor();
            return {
                projectId: t,
                userId: e.id,
                sessionNumber: e.visitsCount,
                pageNumber: this.sessionService.getSession().pageNumber
            }
        }, t.prototype.startDataCollection = function(t) {
            this.isContentSquareDataCollectionStarted || (this.configuration.tagDeploymentMode === Sn.LoadClicktalePtc && this.isReplayRecordedInMalka() && this.sensitiveContentService.initCTPII(), Vn(this.configuration) && (this.sensitiveContentService.initCTPII(), t(), this.isContentSquareDataCollectionStarted = !0))
        }, t.prototype.isReplayRecordedInMalka = function() {
            return this.configuration.useMalkaPipeline && this.sessionService.isReplayRecorded()
        }, t.prototype.doLoadClicktalePtc = function() {
            this.isClicktalePtcLoaded = !0;
            var t = this.buildScriptElement();
            document.getElementsByTagName("head")[0].appendChild(t)
        }, t.prototype.buildScriptElement = function() {
            var t = document.createElementNS("http://www.w3.org/1999/xhtml", "script");
            return t.async = !0, t.crossOrigin = "anonymous", t.type = "text/javascript", this.configuration.ptcSha512 && this.configuration.ptcSnapshotPath ? (t.integrity = "sha512-".concat(this.configuration.ptcSha512), t.src = "https://".concat(this.configuration.ptcDomain, "/").concat(this.configuration.ptcSnapshotPath, "/ptc.js")) : t.src = "https://".concat(this.configuration.ptcDomain, "/ptc/").concat(this.configuration.ptcGuid, ".js"), t
        }, t
    }();
    ! function(t) {
        t.isRecording = function() {
            return window.ClickTaleIsRecording && window.ClickTaleIsRecording()
        }, t.stopRecording = function() {
            window.ClickTaleStop && window.ClickTaleStop()
        }, t.triggerLogicalPageView = function(t) {
            window.ClickTaleLogicalWithUploadPage && window.ClickTaleLogicalWithUploadPage(t)
        }, t.sendPageEvent = function(t) {
            window.ClickTaleEvent && window.ClickTaleEvent(t)
        }, t.sendEventTriggerRecording = function(t) {
            window.ClickTaleEventTrigger && window.ClickTaleEventTrigger(t)
        }
    }(zn || (zn = {}));
    var Un, Bn = function() {
            function t(t, e, i, r, n, o, s) {
                this.configuration = t, this.visitorService = e, this.sessionService = i, this.urlService = r, this.commandsService = n, this.startDataCollectionCallback = o, this.sensitiveContentService = s
            }
            return t.prototype.init = function() {
                var t = this;
                this.clicktaleIntegrationService = new qn(this.configuration, this.visitorService, this.sessionService, this.sensitiveContentService), this.clicktaleIntegrationService.init(), this.loadPtcForDualCollection(), this.commandsService.register(["getSessionData"], (function() {
                    return t.clicktaleIntegrationService.getSessionData()
                })), this.commandsService.register(["startDataCollection"], (function() {
                    t.clicktaleIntegrationService.startDataCollection(t.startDataCollectionCallback)
                }))
            }, t.prototype.loadPtcForDualCollection = function() {
                Vn(this.configuration) && this.clicktaleIntegrationService.loadClicktalePtc()
            }, t.prototype.onAfterNaturalPageView = function() {
                this.configuration.tagDeploymentMode === Sn.LoadClicktalePtc && (!this.configuration.useMalkaPipeline && this.sessionService.isReplayRecorded() || this.clicktaleIntegrationService.loadClicktalePtc())
            }, t.prototype.onAfterArtificialPageView = function() {
                !this.sessionService.isReplayRecorded() && zn.isRecording() && this.configuration.tagDeploymentMode === Sn.LoadClicktalePtc && zn.triggerLogicalPageView(this.urlService.getUrl())
            }, t.prototype.onAfterSessionRenewal = function() {
                !this.sessionService.isReplayRecorded() && zn.isRecording() && zn.triggerLogicalPageView(this.urlService.getUrl())
            }, t.prototype.onOptout = function() {
                zn.isRecording() && zn.stopRecording()
            }, t
        }(),
        Hn = function(t) {
            function e(e, i, r, n, o) {
                var s = t.call(this) || this;
                return s.configuration = e, s.pageEventRequest = i, s.compressor = r, s.customEventsEmitter = n, s.hashHelper = o, s.pageEventsQueue = [], s.etrQueue = [], s
            }
            return V(e, t), e.prototype.onStart = function() {
                var t = this;
                csArray.prototype.forEach.call(this.pageEventsQueue, (function(e) {
                    return t.trackPageEvent(e)
                })), this.pageEventsQueue = [], csArray.prototype.forEach.call(this.etrQueue, (function(e) {
                    return t.trackEventTriggerRecording(e)
                })), this.etrQueue = []
            }, e.prototype.onStop = function() {}, e.prototype.trackPageEvent = function(t) {
                this.isStarted ? e.isValidEventName(t) && (this.isUserIdentifierEvent(t) ? this.hashHelper.isSupported() && this.trackEventWithUserIdentifier(t) : this.trackEvent(t)) : csArray.prototype.push.call(this.pageEventsQueue, t)
            }, e.prototype.isUserIdentifierEvent = function(t) {
                return j(t, "@user-identifier@")
            }, e.prototype.trackEventWithUserIdentifier = function(t) {
                return U(this, void 0, void 0, (function() {
                    var e, i;
                    return B(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return this.configuration.customHashIdEnabled ? (e = csString.prototype.slice.call(t, "@user-identifier@".length), this.hashHelper.isValidInput(e) ? [4, this.hashHelper.digest(e, this.configuration.projectId)] : (Vt.warn("UserIdentifier event: invalid user identifier"), [2])) : [2];
                            case 1:
                                return (i = r.sent()) ? (this.pageEventRequestParameter = {
                                    eventName: i,
                                    isETR: !1,
                                    isCustomHashId: !0
                                }, this.sendPageEvent()) : Vt.warn("Page event: unable to compute customHashId"), this.configuration.encryptionEnabled ? (this.customEventsEmitter.emitUserIdentifierEvent(e), [2]) : [2]
                        }
                    }))
                }))
            }, e.prototype.trackEvent = function(t) {
                this.customEventsEmitter.emitPageEvent(t), this.pageEventRequestParameter = {
                    eventName: t,
                    isETR: !1,
                    isCustomHashId: !1
                }, this.sendPageEvent(), this.configuration.tagDeploymentMode === Sn.LoadClicktalePtc && zn.sendPageEvent(t)
            }, e.prototype.trackEventTriggerRecording = function(t) {
                this.isStarted ? e.isValidEventName(t) && (this.configuration.useMalkaPipeline && this.configuration.malkaEtrEnabled ? this.trackMalkaEventTriggerRecording(t) : this.trackLegacyEventTriggerRecording(t)) : csArray.prototype.push.call(this.etrQueue, t)
            }, e.prototype.trackMalkaEventTriggerRecording = function(t) {
                j(t, "@ETP@") ? this.customEventsEmitter.emitEventTriggerRecording(t, Kt.ETR_PAGE) : this.customEventsEmitter.emitEventTriggerRecording(t, Kt.ETR_SESSION), this.pageEventRequestParameter = {
                    eventName: t,
                    isETR: !0,
                    isCustomHashId: !1
                }, this.sendPageEvent()
            }, e.prototype.trackLegacyEventTriggerRecording = function(t) {
                var e;
                (Vn(e = this.configuration) || e.tagDeploymentMode === Sn.LoadClicktalePtc) && (this.customEventsEmitter.emitEventTriggerRecording(t, Kt.ETR_LEGACY), this.pageEventRequestParameter = {
                    eventName: t,
                    isETR: !0,
                    isCustomHashId: !1
                }, this.sendPageEvent(), this.configuration.tagDeploymentMode === Sn.LoadClicktalePtc && zn.sendEventTriggerRecording(t))
            }, e.prototype.getRequestParameters = function() {
                return {
                    value: this.compressor.compressSync(this.pageEventRequestParameter.eventName),
                    enc: this.compressor.algorithm,
                    isETR: "".concat(this.pageEventRequestParameter.isETR),
                    isCustomHashId: "".concat(this.pageEventRequestParameter.isCustomHashId)
                }
            }, e.prototype.sendPageEvent = function() {
                this.pageEventRequest.send()
            }, e.isValidEventName = function(t) {
                return It(t) && !!csString.prototype.trim.call(t)
            }, e
        }(_e),
        Fn = ["trackPageEvent"],
        Gn = ["trackEventTriggerRecording"],
        jn = function() {
            function t(t, e, i, r, n) {
                this.configuration = t, this.commandsService = e, this.compressor = i, this.basicParameters = r, this.customEventsEmitter = n
            }
            return t.prototype.init = function() {
                var t = this,
                    e = new et(this.configuration.getTrackerUri(), "pageEvent"),
                    i = new Oi(window.crypto);
                i.init(), this.pageEventService = new Hn(this.configuration, e, this.compressor, this.customEventsEmitter, i), e.setRequestParametersProviders(this.pageEventService, this.basicParameters), this.commandsService.register(Fn, (function(e) {
                    t.pageEventService.trackPageEvent(e)
                })), this.commandsService.register(Gn, (function(e) {
                    t.pageEventService.trackEventTriggerRecording(e)
                }))
            }, t.prototype.onStartTracking = function() {
                this.pageEventService.start()
            }, t
        }();
    ! function(t) {
        t[t.Sensitive = 1] = "Sensitive", t[t.SensitiveChild = 2] = "SensitiveChild"
    }(Un || (Un = {}));
    var Kn, Wn = ["value", "checked", "src", "data", "alt"],
        Yn = ["[data-cs-mask]", "img[src^='data:']", "script"],
        Xn = [{
            selector: "input:not([type=button])",
            attrName: "value"
        }],
        Jn = [".ctHidden, textarea"],
        Qn = function() {
            function t(t) {
                var e;
                this.configuration = t, this.sensitiveAttributeSelector = [], this.sensitiveElementSelector = "", this.dummyElement = document.createElement("div"), Vn(this.configuration) || (this.sensitiveElementSelector = this.appendSelectors(this.sensitiveElementSelector, Yn), (e = csArray.prototype.push).call.apply(e, H([this.sensitiveAttributeSelector], Xn, !1)))
            }
            return t.prototype.setPIISelectors = function(t) {
                var e, i = this;
                if (!Vn(this.configuration) && t) {
                    if (null === (e = t.PIISelectors) || void 0 === e ? void 0 : e.length) {
                        var r = csArray.prototype.filter.call(t.PIISelectors, (function(t) {
                            return i.isValidSelector(t)
                        }));
                        this.sensitiveElementSelector = this.appendSelectors(this.sensitiveElementSelector, r)
                    }
                    t.Attributes instanceof Array && csArray.prototype.forEach.call(t.Attributes, (function(t) {
                        t && t.attrName && i.isValidSelector(t.selector) && csArray.prototype.push.call(i.sensitiveAttributeSelector, t)
                    }))
                }
            }, t.prototype.initCTPII = function() {
                var t, e, i = this;
                if (this.sensitiveElementSelector = this.appendSelectors(this.sensitiveElementSelector, Jn), null === (e = null === (t = null === window || void 0 === window ? void 0 : window.ClickTaleSettings) || void 0 === t ? void 0 : t.DOM) || void 0 === e ? void 0 : e.PII) {
                    var r = csArray.prototype.filter.call(window.ClickTaleSettings.DOM.PII.Text, (function(t) {
                        return i.isValidSelector(t)
                    }));
                    this.sensitiveElementSelector = this.appendSelectors(this.sensitiveElementSelector, r), csArray.prototype.forEach.call(window.ClickTaleSettings.DOM.PII.Attributes, (function(t) {
                        t.attr && i.isValidSelector(t.rule) && csArray.prototype.push.call(i.sensitiveAttributeSelector, {
                            selector: t.rule,
                            attrName: t.attr
                        })
                    }))
                }
            }, t.prototype.isSensitiveAttribute = function(t, e) {
                return this.isSensitive(t) && -1 !== csArray.prototype.indexOf.call(Wn, e) || this.isElementMatchingAttributes(t, e, this.sensitiveAttributeSelector)
            }, t.prototype.isSensitive = function(t) {
                return t.__contentsquare_sensitive === Un.Sensitive
            }, t.prototype.isSensitiveChild = function(t) {
                return t.__contentsquare_sensitive === Un.SensitiveChild
            }, t.prototype.identifySensitiveNodes = function(t) {
                var e = this;
                if (f(t) || C(t)) {
                    this.findAndMarkSensitiveNodes(t);
                    var i = Ve.getAllShadowHosts(t);
                    csArray.prototype.forEach.call(i, (function(t) {
                        return t.shadowRoot && e.findAndMarkSensitiveNodes(t.shadowRoot)
                    }))
                }
            }, t.prototype.unidentifySensitiveNodes = function(t) {
                var e = this;
                if (f(t) || C(t)) {
                    this.findAndUnmarkSensitiveNodes(t);
                    var i = Ve.getAllShadowHosts(t);
                    csArray.prototype.forEach.call(i, (function(t) {
                        return t.shadowRoot && e.findAndUnmarkSensitiveNodes(t.shadowRoot)
                    }))
                }
            }, t.prototype.findAndUnmarkSensitiveNodes = function(t) {
                for (var e, i = document.createNodeIterator(t, NodeFilter.SHOW_ELEMENT, null, !1); e = i.nextNode();) "__contentsquare_sensitive" in e && delete e.__contentsquare_sensitive
            }, t.prototype.findAndMarkSensitiveNodes = function(t) {
                var e = this;
                if (this.hasSensitiveParent(t)) return this.markAsSensitiveChild(t), void this.markSubtreeAsSensitiveChild(t);
                this.isMatchingSelectors(t, this.sensitiveElementSelector) ? (this.markAsSensitive(t), this.markSubtreeAsSensitiveChild(t)) : Re(t.querySelectorAll(this.sensitiveElementSelector), (function(t) {
                    e.isAllowedBase64Image(t) || (e.markAsSensitive(t), e.markSubtreeAsSensitiveChild(t))
                }))
            }, t.prototype.isAllowedBase64Image = function(t) {
                return g(t) && j(t.src, "data:image/svg+xml") && t.src.length <= 1024
            }, t.prototype.markAsSensitive = function(t) {
                t.__contentsquare_sensitive = Un.Sensitive
            }, t.prototype.markAsSensitiveChild = function(t) {
                t.__contentsquare_sensitive = Un.SensitiveChild
            }, t.prototype.markSubtreeAsSensitiveChild = function(t) {
                var e = document.createNodeIterator(t, NodeFilter.SHOW_ELEMENT, null, !1),
                    i = e.nextNode();
                for (t === i && (i = e.nextNode()); i;) this.markAsSensitiveChild(i), i = e.nextNode()
            }, t.prototype.hasSensitiveParent = function(t) {
                return !(!csNodeparentNode.apply(t) || !f(csNodeparentNode.apply(t)) && !C(csNodeparentNode.apply(t)) || !this.isSensitive(csNodeparentNode.apply(t)) && !this.isSensitiveChild(csNodeparentNode.apply(t))) || T(t) && (this.isSensitive(t.host) || this.isSensitiveChild(t.host))
            }, t.prototype.isMatchingSelectors = function(t, e) {
                return f(t) && A.call(t, e)
            }, t.prototype.isElementMatchingAttributes = function(t, e, i) {
                return csArray.prototype.some.call(i, (function(i) {
                    return t.hasAttribute(e) && csString.prototype.indexOf.call(i.attrName, e) > -1 && A.call(t, i.selector)
                }))
            }, t.prototype.isValidSelector = function(t) {
                if (!(!!t && It(t))) return Vt.warn("SensitiveContentService: invalid selector provided '".concat(t, "'")), !1;
                try {
                    return A.call(this.dummyElement, t), !0
                } catch (e) {
                    return Vt.warn("SensitiveContentService: invalid selector provided '".concat(t, "'")), !1
                }
            }, t.prototype.appendSelectors = function(t, e) {
                return 0 === e.length ? t : 0 === t.length ? csArray.prototype.join.call(e, ",") : "".concat(t, ",").concat(csArray.prototype.join.call(e, ","))
            }, t
        }(),
        Zn = function() {
            function t(t) {
                this.commandsService = t
            }
            return t.prototype.init = function() {
                this.registerSnippetErrorCommand(t.IMPLEMENTATION_SNIPPETS_LOG_COMMAND, "implementation-snippet-"), this.registerSnippetErrorCommand(t.DYNAMIC_SNIPPETS_LOG_COMMAND, "snippet-")
            }, t.prototype.registerSnippetErrorCommand = function(t, e) {
                this.commandsService.register([t], (function(t, i) {
                    It(t) && It(i) && Vt.error(i, "".concat(e).concat(t))
                }))
            }, t.DYNAMIC_SNIPPETS_LOG_COMMAND = "logSnippetError", t.IMPLEMENTATION_SNIPPETS_LOG_COMMAND = "logImplementationSnippetError", t
        }(),
        $n = function() {
            function t(t, e, i) {
                this.configuration = t, this.iframeParentToChildrenCommunicationService = e, this.iframeEventsEmitter = i
            }
            return t.prototype.init = function() {
                var t = this;
                this.iframeParentToChildrenCommunicationService.onChildMessage((function(e, i, r, n) {
                    return t.iframeEventsEmitter.emitIframeEvent(e, i, r, n)
                }))
            }, t.prototype.onStartTracking = function() {
                this.configuration.iframesTracking && this.iframeParentToChildrenCommunicationService.start()
            }, t.prototype.onOptout = function() {
                this.configuration.iframesTracking && this.iframeParentToChildrenCommunicationService.stop()
            }, t
        }(),
        to = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.configuration = e, i.iframes = [], i.messageHandler = {
                    boundElement: window,
                    type: "message",
                    listener: function(t) {
                        return i.messagesListener(t)
                    }
                }, i
            }
            return V(e, t), e.prototype.onChildMessage = function(t) {
                this.onChildMessageCallback = t
            }, e.prototype.sendToChildren = function(t, e) {
                var i = Ct.buildBaseMessage(t, St.Parent, this.configuration.projectId);
                i.content = e, this.sendMessageToChildren(i)
            }, e.prototype.onStart = function() {
                de(this.messageHandler, !1), this.discoverValidIframes()
            }, e.prototype.onStop = function() {
                this.sendStopMessages(), fe(this.messageHandler, !1)
            }, e.prototype.discoverValidIframes = function() {
                this.iframes = this.getAllValidIframes(), this.sendDiscoveryMessages()
            }, e.prototype.getAllValidIframes = function() {
                var t = this;
                return csArray.prototype.filter.call(Ue.findAllElements("iframe"), (function(e) {
                    return t.isIframeValid(e)
                }))
            }, e.prototype.isIframeValid = function(t) {
                return "cs-native-frame" !== t.id && (!t.src || mt(vt(t.src), this.configuration.hostnames))
            }, e.prototype.sendMessageToChildren = function(t) {
                csArray.prototype.forEach.call(this.iframes, (function(e) {
                    e.contentWindow && Ct.sendMessage(e.contentWindow, "*", t)
                }))
            }, e.prototype.sendDiscoveryMessages = function() {
                var t = this;
                csArray.prototype.forEach.call(this.iframes, (function(e, i) {
                    e.contentWindow && Ct.sendMessage(e.contentWindow, "*", t.buildDiscoveryMessage(i))
                }))
            }, e.prototype.sendStopMessages = function() {
                this.sendMessageToChildren(this.buildStopMessage())
            }, e.prototype.buildDiscoveryMessage = function(t) {
                return Ct.buildBaseMessage(Et.Discovery, St.Parent, this.configuration.projectId, t)
            }, e.prototype.buildStopMessage = function() {
                return Ct.buildBaseMessage(Et.Stop, St.Parent, this.configuration.projectId)
            }, e.prototype.messagesListener = function(t) {
                if (Ct.isMessageValid(t, St.Child, this.configuration.projectId, this.configuration.hostnames))
                    if (void 0 !== t.data.id || t.data.type !== Et.Discovery)
                        if (At(t.data.id) && void 0 !== this.iframes[t.data.id] || t.data.type === Et.ChildLogMessage) {
                            var e = this.iframes[t.data.id],
                                i = L.getElementPath(e, {
                                    dynamicIdRegex: this.configuration.dynamicIdRegex
                                }),
                                r = t.data.type,
                                n = t.data.content;
                            this.onChildMessageCallback(e, i, r, n)
                        } else Vt.error("Parent received data from unknown iframe : ".concat(csJSON.stringify(t.data)));
                else this.discoverValidIframes()
            }, e
        }(_e),
        eo = function() {
            function t() {}
            return t.prototype.compute = function(t, e) {
                var i = this.convertPixelsToDPs(e.x) - this.convertPixelsToDPs(t.x),
                    r = this.convertPixelsToDPs(e.y) - this.convertPixelsToDPs(t.y),
                    n = e.time - t.time;
                return {
                    duration: n,
                    distance: this.computeGestureDistance(i, r),
                    direction: this.computeGestureDirection(i, r),
                    velocity: this.computeGestureVelocity(i, r, n)
                }
            }, t.prototype.computePinchMetrics = function(t, e) {
                var i = this.convertPixelsToDPs(e.x) - this.convertPixelsToDPs(t.x),
                    r = this.convertPixelsToDPs(e.y) - this.convertPixelsToDPs(t.y);
                return {
                    duration: e.time - t.time,
                    distance: this.computeGestureDistance(i, r)
                }
            }, t.prototype.getScale = function(t, e) {
                return Math.abs(e / t - 1)
            }, t.prototype.convertPixelsToDPs = function(t) {
                return t / window.devicePixelRatio
            }, t.prototype.computeGestureDistance = function(t, e) {
                return Math.round(Math.sqrt(t * t + e * e))
            }, t.prototype.computeGestureVelocity = function(t, e, i) {
                var r = i / 1e3,
                    n = t / r,
                    o = e / r;
                return Math.round(Math.abs(n) + Math.abs(o))
            }, t.prototype.computeGestureDirection = function(t, e) {
                return Math.abs(t) > Math.abs(e) ? t > 0 ? Ei.RIGHT : Ei.LEFT : e > 0 ? Ei.DOWN : Ei.UP
            }, t
        }(),
        io = function() {
            function t() {
                this.pinchState = {}, this.metricsComputer = new eo, this.reset()
            }
            return t.prototype.onGesture = function(t) {
                this.onGestureCallback = t
            }, t.prototype.isValidTouchEvent = function(t) {
                return "touches" in t && "changedTouches" in t
            }, t.prototype.processActionDown = function(t) {
                if (this.isValidTouchStart(t)) {
                    this.isGestureStart(t) && this.reset();
                    var e = {
                        x: t.touches[0].pageX,
                        y: t.touches[0].pageY,
                        time: ct()
                    };
                    if (1 === t.touches.length) this.pinchState.startPinchTime = e.time, this.pinchState.firstTouch = e;
                    else if (2 === t.touches.length && (this.pinchState.secondTouch = {
                            x: t.touches[1].pageX,
                            y: t.touches[1].pageY,
                            time: ct()
                        }, this.pinchState.firstTouch && this.pinchState.secondTouch)) {
                        var i = this.metricsComputer.computePinchMetrics(this.pinchState.firstTouch, this.pinchState.secondTouch);
                        this.pinchInitialDistance = i.distance
                    }
                    csArray.prototype.push.call(this.pendingInputs, e), this.target = ge(t)
                }
            }, t.prototype.processActionMove = function() {
                this.hasMove = !0
            }, t.prototype.processActionUp = function(t) {
                if (this.isValidTouchEnd(t)) {
                    if (csArray.prototype.push.call(this.pendingInputs, {
                            x: t.changedTouches[0].pageX,
                            y: t.changedTouches[0].pageY,
                            time: ct()
                        }), this.isSecondFingerRaisedAfterPinch(t) && this.pinchState.startPinchTime) {
                        var e = {
                                x: t.touches[0].pageX,
                                y: t.touches[0].pageY,
                                time: this.pinchState.startPinchTime
                            },
                            i = {
                                x: t.changedTouches[0].pageX,
                                y: t.changedTouches[0].pageY,
                                time: ct()
                            };
                        this.pinchState.firstTouch && (this.pinchState.firstTouch = e, this.pinchState.secondTouch = i), this.triggerPinchGesture(t)
                    }
                    this.pinchInitialDistance || this.isValidSingleTouchGesture() && this.runDetection(t)
                }
            }, t.prototype.reset = function() {
                this.pendingInputs = [], this.target = null, this.hasMove = !1, this.pinchInitialDistance = null
            }, t.prototype.runDetection = function(t) {
                var e = this.metricsComputer.compute(this.pendingInputs[0], this.pendingInputs[1]),
                    i = this.hasMove ? this.computeSwipeGesture(e) : this.computePressGesture(e);
                this.onGestureCallback(i, t)
            }, t.prototype.triggerPinchGesture = function(t) {
                if (this.pinchState.firstTouch && this.pinchState.secondTouch) {
                    var e = this.metricsComputer.computePinchMetrics(this.pinchState.firstTouch, this.pinchState.secondTouch),
                        i = this.computePinchGesture(e);
                    i && this.onGestureCallback(i, t)
                }
            }, t.prototype.computePinchGesture = function(t) {
                if (this.pinchInitialDistance && !(this.metricsComputer.getScale(this.pinchInitialDistance, t.distance) < .1)) return {
                    type: this.pinchInitialDistance > t.distance ? Si.PINCH_IN : Si.PINCH_OUT,
                    target: this.target,
                    distance: t.distance
                }
            }, t.prototype.computeSwipeGesture = function(t) {
                return {
                    type: t.velocity < 100 ? Si.DRAG : Si.FLICK,
                    target: this.target,
                    velocity: t.velocity,
                    distance: t.distance,
                    direction: t.direction
                }
            }, t.prototype.computePressGesture = function(t) {
                return {
                    type: t.duration < 1e3 ? Si.TAP : Si.LONG_PRESS,
                    target: this.target
                }
            }, t.prototype.isGestureStart = function(t) {
                return 1 === t.touches.length
            }, t.prototype.isValidSingleTouchGesture = function() {
                return 2 === this.pendingInputs.length
            }, t.prototype.isValidTouchStart = function(t) {
                return t.touches.length > 0
            }, t.prototype.isValidTouchEnd = function(t) {
                return t.changedTouches.length > 0
            }, t.prototype.isSecondFingerRaisedAfterPinch = function(t) {
                return this.hasMove && !!this.pinchInitialDistance && 1 === t.changedTouches.length && 1 === t.touches.length
            }, t
        }(),
        ro = function() {
            function t() {
                this.subscriptions = {}
            }
            return t.prototype.subscribe = function(t, e) {
                this.subscriptions[t] = e, 1 === Object.keys(this.subscriptions).length && this.onStartTracking()
            }, t.prototype.unsubscribe = function(t) {
                delete this.subscriptions[t], 0 === Object.keys(this.subscriptions).length && this.onStopTracking()
            }, t
        }(),
        no = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.logger = e, i.eventHandlers = [{
                    boundElement: document,
                    type: "touchstart",
                    listener: function(t) {
                        return i.processEvent(t)
                    }
                }, {
                    boundElement: document,
                    type: "touchmove",
                    listener: function(t) {
                        return i.processEvent(t)
                    }
                }, {
                    boundElement: document,
                    type: "touchend",
                    listener: function(t) {
                        return i.processEvent(t)
                    }
                }], i.detector = new io, i.detector.onGesture((function(t, e) {
                    return i.processGesture(t, e)
                })), i
            }
            return V(e, t), e.prototype.processGesture = function(t, e) {
                for (var i in this.subscriptions) {
                    (0, this.subscriptions[i])(t, e)
                }
            }, e.prototype.onStartTracking = function() {
                this.canDetectGesture() && csArray.prototype.forEach.call(this.eventHandlers, (function(t) {
                    return de(t)
                }))
            }, e.prototype.onStopTracking = function() {
                this.canDetectGesture() && csArray.prototype.forEach.call(this.eventHandlers, (function(t) {
                    return fe(t)
                }))
            }, e.prototype.canDetectGesture = function() {
                return void 0 !== window.devicePixelRatio
            }, e.prototype.processEvent = function(t) {
                var e = this;
                this.logger.tryToExecute("process gesture event", (function() {
                    if (e.detector.isValidTouchEvent(t)) switch (t.type) {
                        case "touchstart":
                            e.detector.processActionDown(t);
                            break;
                        case "touchmove":
                            e.detector.processActionMove();
                            break;
                        case "touchend":
                            e.detector.processActionUp(t)
                    }
                }))()
            }, e.isSwipe = function(t) {
                return t.type === Si.FLICK || t.type === Si.DRAG
            }, e
        }(ro),
        oo = function() {
            function t(t, e, i, r, n, o, s, a, c, u, p, l, h, d, f, y, v, m, g, S, E, C, T) {
                var R = this;
                this.basicRequestParameters = t, this.compressor = e, this.visitorService = i, this.sessionService = r, this.lifeCycleEventsEmitter = n, this.commandsService = o, this.commandsModule = s, this.configuration = a, this.optoutModule = c, this.optoutService = u, this.consentModule = p, this.consentService = l, this.pii = h, this.urlService = d, this.projectConfigurationModule = f, this.customEventsEmitter = y, this.javaScriptErrorsTracker = v, this.javaScriptErrorsAnonymizer = m, this.apiErrorsTracker = g, this.apiErrorsAnonymizer = S, this.iframeEventsEmitter = E, this.customVariablesService = C, this.customVariablesModule = T, this.startDataCollection = function(t) {
                    void 0 === t && (t = !1), R.pageViewModule.start(t), R.loadTracker.start()
                }
            }
            return t.prototype.start = function() {
                var t = this;
                if (this.optoutModule.init(), this.optoutService.init(), !this.optoutService.isActive()) {
                    var e = new On(this.sessionService, this.visitorService),
                        i = new wn(L, this.configuration),
                        r = new An(i),
                        n = new no(Vt),
                        o = new fn(this.configuration, this.visitorService, this.sessionService, i, r, this.commandsService, e, n, this.iframeEventsEmitter, this.compressor),
                        s = new ur(this.commandsService, this.sessionService, this.configuration, this.basicRequestParameters, this.compressor, this.pii),
                        a = new to(this.configuration),
                        c = new $n(this.configuration, a, this.iframeEventsEmitter);
                    c.init();
                    var u = new nr(this.visitorService, this.sessionService, this.commandsService, this.iframeEventsEmitter, a, this.configuration),
                        p = new Sr(this.configuration, this.visitorService, this.sessionService, this.commandsService, this.pii, e, this.urlService);
                    this.pageViewModule = new bn(this.configuration, this.commandsService, this.lifeCycleEventsEmitter, this.visitorService, this.sessionService, this.consentService, this.customVariablesService, this.pii, this.urlService);
                    var l = new Nn(this.visitorService, this.sessionService, this.commandsService),
                        h = new Qn(this.configuration),
                        d = new Bn(this.configuration, this.visitorService, this.sessionService, this.urlService, this.commandsService, this.startDataCollection, h),
                        f = new jn(this.configuration, this.commandsService, this.compressor, this.basicRequestParameters, this.customEventsEmitter),
                        y = new Zn(this.commandsService);
                    if (this.loadTracker = new In, this.consentModule.init(), u.init(), s.init(), p.init(), this.customVariablesModule.init(), this.pageViewModule.init(), l.init(), d.init(), f.init(), this.projectConfigurationModule.init(), y.init(), this.lifeCycleEventsEmitter.addListeners(l, this.commandsModule, o, this.consentModule, u, this.customVariablesModule, this.pageViewModule, d, f, s, c), Qi.isSupported() && this.compressor.isSupported()) {
                        var v = new Qi(this.sessionService, this.configuration, this.compressor, r, this.consentService, this.basicRequestParameters, this.commandsService, this.pii, e, this.urlService, h, this.javaScriptErrorsTracker, this.javaScriptErrorsAnonymizer, this.apiErrorsTracker, n, this.apiErrorsAnonymizer, this.lifeCycleEventsEmitter, this.customEventsEmitter);
                        v.init(), this.lifeCycleEventsEmitter.addListeners(v)
                    }
                    if (this.configuration.eMerchandisingEnabled) {
                        var m = new xn(this.configuration, this.compressor, this.basicRequestParameters, this.customVariablesService, this.urlService, this.iframeEventsEmitter, this.commandsService);
                        m.init(), this.lifeCycleEventsEmitter.addListeners(m)
                    }
                    o.init(), e.onSessionExpired((function() {
                        t.lifeCycleEventsEmitter.emitBeforeSessionRenewal(), t.doStart(!0), t.lifeCycleEventsEmitter.emitAfterSessionRenewal()
                    })), this.doStart()
                }
            }, t.prototype.doStart = function(t) {
                var e = this;
                void 0 === t && (t = !1), this.commandsService.start(), this.loadTracker.onLoad((function() {
                    e.lifeCycleEventsEmitter.emitStartTracking(t)
                })), Vn(this.configuration) && !t || this.startDataCollection(t)
            }, t
        }(),
        so = function() {
            function t(t, e, i, r, n, o, s, a) {
                this.configuration = t, this.visitorService = e, this.exclusionService = i, this.outdatedState = r, this.allowSubdomainsChange = n, this.crossDomainService = o, this.crossDomainSingleIframeService = s, this.forceInclusionService = a
            }
            return t.prototype.compute = function(t) {
                var e = this;
                this.configuration.crossDomainTracking && !this.configuration.cookielessTrackingEnabled ? this.configuration.crossDomainSingleIframeTracking ? this.crossDomainSingleIframeService.start((function() {
                    return e.computeState(t)
                })) : this.crossDomainService.applyUpToDate((function() {
                    return e.computeState(t)
                })) : this.computeState(t)
            }, t.prototype.computeState = function(t) {
                this.allowSubdomainsChange.handle(), this.outdatedState.clear(), this.isIncluded() ? (this.outdatedState.restoreClearedVisitor(), t(!0)) : (this.exclusionService.exclude(this.configuration), t(!1))
            }, t.prototype.isIncluded = function() {
                var t = W.boolean(this.configuration.sampleRate);
                return this.forceInclusionService.isForceIncluded() || !this.exclusionService.isExcluded() && this.visitorService.doesVisitorExist() || !this.exclusionService.isExcluded() && t
            }, t
        }();
    ! function(t) {
        t.generate = function() {
            var t = navigator.userAgent + navigator.language + navigator.platform,
                e = csString.prototype.slice.call(function(t) {
                    for (var e = 0, i = 0; i < t.length; i += 1) e = csString.prototype.charCodeAt.call(t, i) + (e << 6) + (e << 16) - e;
                    return Math.abs(e)
                }(t).toString(16), -4),
                i = (new csDate).getTime(),
                r = csString.prototype.replace.call("xxxxxxxx-hhhh-axxx-yxxx-xxxxxxxxxxxx", /[xy]/g, (function(t) {
                    var e = (i + 16 * Math.random()) % 16 | 0;
                    return i = Math.floor(i / 16), ("x" === t ? e : 7 & e | 8).toString(16)
                }));
            return csString.prototype.replace.call(r, "hhhh", e)
        }
    }(Kn || (Kn = {}));
    var ao, co = function() {
            function t(t, e, i) {
                this.configuration = t, this.storage = e, this.sessionService = i
            }
            return t.prototype.createOrUpdateVisitor = function() {
                var t = this.getVisitor();
                null === t && (t = this.createVisitor(), this.sessionService.removeSession()), this.updateVisitor(t), this.setVisitor(t)
            }, t.prototype.createVisitor = function() {
                return {
                    id: Kn.generate(),
                    visitsCount: 0,
                    appliedTrackingDraw: this.configuration.lastTrackingDraw,
                    creationTimestamp: ut(),
                    lastVisitTimestamp: 0,
                    hitTimestamp: 0,
                    expires: ct() + this.configuration.visitorCookieTimeout
                }
            }, t.prototype.updateVisitor = function(t) {
                var e = ut();
                this.sessionService.doesSessionExist() || (t.visitsCount += 1, t.lastVisitTimestamp = e), t.hitTimestamp = e, t.appliedTrackingDraw = this.configuration.lastTrackingDraw, this.currentVisitsCount = t.visitsCount
            }, t.prototype.getRequestParameters = function() {
                var t = this.getVisitor();
                return t ? {
                    uu: t.id,
                    sn: "".concat(t.visitsCount),
                    lv: "".concat(t.lastVisitTimestamp),
                    lhd: "".concat(t.lastVisitTimestamp),
                    hd: "".concat(t.hitTimestamp)
                } : {}
            }, t.prototype.getVisitor = function() {
                return this.storage.get()
            }, t.prototype.setVisitor = function(t) {
                this.storage.set(t)
            }, t.prototype.doesVisitorExist = function() {
                return null !== this.storage.get()
            }, t.prototype.removeVisitor = function() {
                this.storage.remove()
            }, t.prototype.handleSubdomainChange = function() {
                this.storage.handleSubdomainChange()
            }, t.prototype.isSessionRenewed = function() {
                var t = this.getVisitor();
                return null !== t && void 0 !== this.currentVisitsCount && t.visitsCount !== this.currentVisitsCount
            }, t
        }(),
        uo = function() {
            function t(t, e) {
                this.configuration = t, this.compressor = e
            }
            return t.prototype.isCompressionSupported = function() {
                return this.compressor.isSupported()
            }, t
        }(),
        po = function(t) {
            function e(e, i, r, n) {
                var o = t.call(this, e, i) || this;
                return o.configuration = e, o.compressor = i, o.forceInclusionService = r, o.urlService = n, o
            }
            return V(e, t), e.prototype.sanitizeSessionRecordingState = function(t) {
                return t
            }, e.prototype.computeInitialRecordingState = function(t) {
                return this.isCompressionSupported() && (this.forceInclusionService.isForceLegacyReplayRecorded() || W.percentage() < this.configuration.replayRecordingRate && Qi.isSupported()) ? Ft.REPLAY_RECORDING_ENABLED : Ft.REPLAY_RECORDING_DISABLED
            }, e.prototype.updateRecordingState = function(t) {
                return t.recordingState
            }, e.prototype.isReplayRecorded = function(t) {
                return t.recordingState === Ft.REPLAY_RECORDING_ENABLED || this.computeTriggerSessionReplayStatus(t)
            }, e.prototype.computeTriggerSessionReplayStatus = function(t) {
                if (this.configuration.triggerSessionReplayEnabled && this.configuration.triggerSessionReplayRegex && t.recordingState !== Ft.REPLAY_RECORDING_ENABLED) {
                    var e = this.urlService.getUrl();
                    return this.configuration.triggerSessionReplayRegex.test(e)
                }
                return !1
            }, e.prototype.getDisabledRecordingState = function() {
                return Ft.REPLAY_RECORDING_DISABLED
            }, e.prototype.setVisitorService = function(t) {}, e
        }(uo),
        lo = function(t) {
            function e(e, i, r, n, o, s) {
                var a = t.call(this, e, i) || this;
                return a.configuration = e, a.compressor = i, a.quotaServiceRequest = r, a.lifeCycleEventsEmitter = n, a.forceInclusionService = o, a.urlService = s, a.requestedRecordingTypes = [], a
            }
            return V(e, t), e.prototype.init = function() {
                this.bindQuotaServiceRequest()
            }, e.prototype.sanitizeSessionRecordingState = function(t) {
                return t.recordingState === Gt.TEMPORARILY_RECORDED && (t.recordingState = Gt.NOT_RECORDED), t
            }, e.prototype.computeInitialRecordingState = function(t) {
                return this.isCompressionSupported() && Qi.isSupported() ? (this.requestedRecordingTypes = [], W.percentage() < this.configuration.replayRecordingRate || this.forceInclusionService.isForceMalkaReplayRecorded() ? csArray.prototype.push.call(this.requestedRecordingTypes, Gt.GLOBAL_SAMPLING) : this.configuration.malkaUrlEnabled && csArray.prototype.push.call(this.requestedRecordingTypes, Gt.URL_SAMPLING), this.configuration.malkaEtrEnabled && csArray.prototype.push.call(this.requestedRecordingTypes, Gt.ETR_SAMPLING), this.requestedRecordingTypes.length > 0 ? (this.sendSamplingRequest(t), Gt.TEMPORARILY_RECORDED) : Gt.NOT_RECORDED) : Gt.NOT_RECORDED
            }, e.prototype.updateRecordingState = function(t) {
                return this.isCompressionSupported() && Qi.isSupported() ? t.recordingState === Gt.GLOBAL_SAMPLING ? Gt.GLOBAL_SAMPLING : (this.requestedRecordingTypes = [], this.configuration.malkaUrlEnabled && (csArray.prototype.push.call(this.requestedRecordingTypes, Gt.URL_SAMPLING), this.configuration.malkaEtrEnabled && csArray.prototype.push.call(this.requestedRecordingTypes, Gt.ETR_SAMPLING)), this.requestedRecordingTypes.length > 0 ? (this.sendSamplingRequest(t), Gt.TEMPORARILY_RECORDED) : Gt.NOT_RECORDED) : Gt.NOT_RECORDED
            }, e.prototype.sendSamplingRequest = function(t) {
                var e, i = this,
                    r = null === (e = this.visitorService) || void 0 === e ? void 0 : e.getVisitor();
                this.quotaServiceRequest.setRequestPayloadProvider({
                    getRequestPayload: function() {
                        return csJSON.stringify({
                            recordingTypes: csArray.prototype.map.call(i.requestedRecordingTypes, Number),
                            url: i.urlService.getUrl(),
                            projectId: i.configuration.projectId,
                            uu: (null == r ? void 0 : r.id) || "",
                            sn: (null == r ? void 0 : r.visitsCount) || "",
                            pn: (null == t ? void 0 : t.pageNumber) || ""
                        })
                    }
                }), this.quotaServiceRequest.send()
            }, e.prototype.abortQuotaServiceRequest = function() {
                this.quotaServiceRequest.abort()
            }, e.prototype.isReplayRecorded = function(t) {
                return t.recordingState === Gt.TEMPORARILY_RECORDED || t.recordingState === Gt.GLOBAL_SAMPLING || t.recordingState === Gt.URL_SAMPLING || t.etrState === jt.ETR_ON
            }, e.prototype.bindQuotaServiceRequest = function() {
                var t = this;
                this.quotaServiceRequest.setRequestHeader({
                    name: "Content-Type",
                    value: "application/json"
                }), this.quotaServiceRequest.onError((function() {
                    return t.quotaServiceErrorHandler("NetworkError")
                })), this.quotaServiceRequest.onTimeout(3e3, (function() {
                    return t.quotaServiceTimeoutHandler()
                })), this.quotaServiceRequest.onLoad((function(e) {
                    return t.quotaServiceLoadHandler(e)
                }))
            }, e.prototype.quotaServiceErrorHandler = function(t) {
                this.emitRecordingStateOnError(), Vt.warn("Quota Service: request error - ".concat(t))
            }, e.prototype.quotaServiceTimeoutHandler = function() {
                this.emitRecordingStateOnError(), Vt.warn("Quota Service: request timeout")
            }, e.prototype.emitRecordingStateOnError = function() {
                var t = Gt.NOT_RECORDED;
                this.isGlobalSamplingAllowed(this.requestedRecordingTypes) && (t = Gt.GLOBAL_SAMPLING), this.lifeCycleEventsEmitter.emitRecordingStateChange(t, jt.ETR_OFF)
            }, e.prototype.quotaServiceLoadHandler = function(t) {
                if (200 === t.status) {
                    var e;
                    try {
                        e = csJSON.parse(t.responseText)
                    } catch (e) {
                        return void this.quotaServiceErrorHandler("Unable to parse the quota service response: ".concat(t.responseText))
                    }
                    var i = csArray.prototype.map.call(e.allowedRecordingTypes, csString);
                    if (i) {
                        var r = jt.ETR_OFF,
                            n = Gt.NOT_RECORDED;
                        this.isGlobalSamplingAllowed(i) ? n = Gt.GLOBAL_SAMPLING : this.isUrlSamplingAllowed(i) && (n = Gt.URL_SAMPLING), this.isEtrSamplingAllowed(i) && (r = jt.ETR_ON), this.lifeCycleEventsEmitter.emitRecordingStateChange(n, r)
                    } else this.quotaServiceErrorHandler("recording types missing from quota service response")
                } else this.quotaServiceErrorHandler("Status code: ".concat(t.status))
            }, e.prototype.isGlobalSamplingAllowed = function(t) {
                return csArray.prototype.some.call(t, (function(t) {
                    return t === Gt.GLOBAL_SAMPLING
                }))
            }, e.prototype.isUrlSamplingAllowed = function(t) {
                return csArray.prototype.some.call(t, (function(t) {
                    return t === Gt.URL_SAMPLING
                }))
            }, e.prototype.isEtrSamplingAllowed = function(t) {
                return csArray.prototype.some.call(t, (function(t) {
                    return t === Gt.ETR_SAMPLING
                }))
            }, e.prototype.setVisitorService = function(t) {
                this.visitorService = t
            }, e.prototype.getDisabledRecordingState = function() {
                return Gt.NOT_RECORDED
            }, q([zt("Quota Service: onerror")], e.prototype, "quotaServiceErrorHandler", null), q([zt("Quota Service: ontimeout")], e.prototype, "quotaServiceTimeoutHandler", null), q([zt("Quota Service: onload")], e.prototype, "quotaServiceLoadHandler", null), e
        }(uo),
        ho = function() {
            function t(t, e) {
                this.sessionStorage = t, this.recordingStateStrategy = e, this.triggerSessionReplayOngoing = !1, this.extendedSessionTimeoutId = null, this.sessionExtensionCount = 0
            }
            return t.prototype.setDynamicVariablesService = function(t) {
                this.dynamicVariablesService = t
            }, t.prototype.createOrUpdateSession = function() {
                this.stopSessionExtension(), this.beginSession = ct(), this.sessionExtensionCount = 0;
                var t = this.getSessionWithoutCache();
                null === t ? (t = this.buildSessionObject(), this.incrementSessionPageNumber(t), t.recordingState = this.recordingStateStrategy.computeInitialRecordingState(t)) : (t = this.recordingStateStrategy.sanitizeSessionRecordingState(t), this.incrementSessionPageNumber(t), t.recordingState = this.recordingStateStrategy.updateRecordingState(t)), this.setSession(t), this.setTriggerSessionReplayStatus(t)
            }, t.prototype.buildSessionObject = function() {
                return {
                    pageNumber: 0,
                    recordingState: this.recordingStateStrategy.getDisabledRecordingState(),
                    etrState: jt.ETR_OFF
                }
            }, t.prototype.setTriggerSessionReplayStatus = function(t) {
                this.recordingStateStrategy instanceof po ? this.triggerSessionReplayOngoing = this.recordingStateStrategy.computeTriggerSessionReplayStatus(t) : this.triggerSessionReplayOngoing = !1
            }, t.prototype.createExtendedSession = function() {
                var t = this.buildSessionObject();
                return this.incrementSessionPageNumber(t), t.recordingState = this.recordingStateStrategy.computeInitialRecordingState(t), this.setTriggerSessionReplayStatus(t), t
            }, t.prototype.incrementSessionPageNumber = function(t) {
                t.pageNumber += 1
            }, t.prototype.isReplayRecorded = function() {
                var t = this.getSession();
                return !!t && this.recordingStateStrategy.isReplayRecorded(t)
            }, t.prototype.isTemporarilyRecorded = function() {
                var t = this.getSession();
                return (null == t ? void 0 : t.recordingState) === Gt.TEMPORARILY_RECORDED
            }, t.prototype.abortQuotaServiceRequest = function() {
                this.recordingStateStrategy instanceof lo && this.recordingStateStrategy.abortQuotaServiceRequest()
            }, t.prototype.getRequestParameters = function() {
                var t = {},
                    e = this.getSession();
                return null !== e && (t.pn = "".concat(e.pageNumber), this.recordingStateStrategy instanceof po && (t.re = this.triggerSessionReplayOngoing ? Ft.TRIGGER_REPLAY_RECORDING_ENABLED : e.recordingState)), t
            }, t.prototype.getSession = function() {
                return this.sessionStorage.get()
            }, t.prototype.getSessionWithoutCache = function() {
                return this.sessionStorage.get(!0)
            }, t.prototype.doesSessionExist = function() {
                return null !== this.sessionStorage.get()
            }, t.prototype.setSession = function(t) {
                this.sessionStorage.set(t)
            }, t.prototype.removeSession = function() {
                this.sessionStorage.remove()
            }, t.prototype.getRecordingStates = function() {
                var t = this.getSession(),
                    e = [];
                return t && (t.recordingState !== Gt.NOT_RECORDED && csArray.prototype.push.call(e, t.recordingState), t.etrState === jt.ETR_ON && csArray.prototype.push.call(e, Gt.ETR_SAMPLING)), e
            }, t.prototype.updateRecordingState = function(t, e) {
                var i = this.getSession();
                null !== i && (i.recordingState = t, i.etrState = e, this.setSession(i))
            }, t.prototype.hasValidSession = function() {
                var t = this.sessionStorage.getRawSession();
                return this.sessionStorage.isValid(t)
            }, t.prototype.handleSubdomainChange = function() {
                this.sessionStorage.handleSubdomainChange()
            }, t.prototype.pollCacheRefreshEvent = function() {
                var t = this.sessionStorage.isCacheRefreshed();
                return t && this.sessionStorage.resetCacheRefreshed(), t
            }, t.prototype.extendSessionPeriodically = function() {
                this.extendedSessionTimeoutId || this.extendSession()
            }, t.prototype.extendSession = function() {
                if (this.hasReachedMaxDuration()) this.stopSessionExtension();
                else {
                    var t = this.getSession();
                    null === t && (t = this.createExtendedSession()), this.sessionStorage.set(t, 174e4), this.sendDynamicVar(), this.scheduleNextSessionUpdate()
                }
            }, t.prototype.scheduleNextSessionUpdate = function() {
                var t = this;
                this.extendedSessionTimeoutId = window.setTimeout((function() {
                    t.extendSession()
                }), 174e4)
            }, t.prototype.hasReachedMaxDuration = function() {
                return 1434e4 - (ct() + 18e5 - this.beginSession) < 0
            }, t.prototype.stopSessionExtension = function() {
                this.extendedSessionTimeoutId && (window.clearTimeout(this.extendedSessionTimeoutId), this.extendedSessionTimeoutId = null)
            }, t.prototype.sendDynamicVar = function() {
                this.sessionExtensionCount += 1, this.dynamicVariablesService.trackDynamicVariable("session_expiry_update", this.sessionExtensionCount)
            }, t
        }(),
        fo = function() {
            function t(t, e, i) {
                this.configuration = t, this.visitorService = e, this.exclusionService = i
            }
            return t.prototype.clear = function() {
                this.isVisitorOutdated() && (this.savedVisitor = this.visitorService.getVisitor(), this.visitorService.removeVisitor()), this.isExclusionOutdated() && this.exclusionService.removeExclusion()
            }, t.prototype.isVisitorOutdated = function() {
                return this.visitorService.doesVisitorExist() && this.visitorService.getVisitor().appliedTrackingDraw !== this.configuration.lastTrackingDraw
            }, t.prototype.isExclusionOutdated = function() {
                return this.exclusionService.getAppliedTrackingDraw() !== this.configuration.lastTrackingDraw
            }, t.prototype.restoreClearedVisitor = function() {
                this.savedVisitor && this.visitorService.setVisitor(this.savedVisitor)
            }, t
        }(),
        yo = function() {
            function t(t, e) {
                this.visitorService = t, this.sessionService = e
            }
            return t.prototype.handle = function() {
                this.handleVisitor(), this.handleSession()
            }, t.prototype.handleVisitor = function() {
                this.visitorService.handleSubdomainChange()
            }, t.prototype.handleSession = function() {
                this.sessionService.handleSubdomainChange()
            }, t
        }(),
        vo = function() {
            function t() {
                this.listeners = []
            }
            return t.prototype.addListeners = function() {
                for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                (t = csArray.prototype.push).call.apply(t, H([this.listeners], e, !1))
            }, t
        }(),
        mo = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return V(e, t), e.prototype.emitBeforeNaturalPageView = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onBeforeNaturalPageView && i.onBeforeNaturalPageView()
                }
            }, e.prototype.emitAfterNaturalPageView = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onAfterNaturalPageView && i.onAfterNaturalPageView()
                }
            }, e.prototype.emitInitTracking = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onInitTracking && i.onInitTracking()
                }
            }, e.prototype.emitStartTracking = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onStartTracking && r.onStartTracking(t)
                }
            }, e.prototype.emitArtificialPageViewEnd = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onArtificialPageViewEnd && i.onArtificialPageViewEnd()
                }
            }, e.prototype.emitBeforeArtificialPageView = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onBeforeArtificialPageView && i.onBeforeArtificialPageView()
                }
            }, e.prototype.emitAfterArtificialPageView = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onAfterArtificialPageView && i.onAfterArtificialPageView()
                }
            }, e.prototype.emitBeforeSessionRenewal = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onBeforeSessionRenewal && i.onBeforeSessionRenewal()
                }
            }, e.prototype.emitAfterSessionRenewal = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onAfterSessionRenewal && i.onAfterSessionRenewal()
                }
            }, e.prototype.emitOptout = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onOptout && i.onOptout()
                }
            }, e.prototype.emitConsentGranted = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onConsentGranted && i.onConsentGranted()
                }
            }, e.prototype.emitConsentWithdrawn = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onConsentWithdrawn && i.onConsentWithdrawn()
                }
            }, e.prototype.emitRecordingStateChange = function(t, e) {
                for (var i = 0, r = this.listeners; i < r.length; i++) {
                    var n = r[i];
                    n.onRecordingStateChange && n.onRecordingStateChange(t, e)
                }
            }, e.prototype.emitInitialDomStart = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onInitialDomStart && i.onInitialDomStart()
                }
            }, e.prototype.emitInitialDomDone = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onInitialDomDone && r.onInitialDomDone(t)
                }
            }, e
        }(vo);
    ! function(t) {
        t[t.NOT_REQUIRED = 0] = "NOT_REQUIRED", t[t.NOT_EXPRESSED = 1] = "NOT_EXPRESSED", t[t.GRANTED = 2] = "GRANTED", t[t.WITHDRAWN = 3] = "WITHDRAWN"
    }(ao || (ao = {}));
    var go, So = function() {
            function t(t, e, i) {
                this.configuration = t, this.cookieService = e, this.browserLocalStorage = i
            }
            return t.prototype.get = function() {
                var t;
                return null === (t = this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.getItem("_cs_c") : this.cookieService.get("_cs_c")) ? t : Number(t)
            }, t.prototype.set = function(t) {
                this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.setItem("_cs_c", csString(t)) : this.cookieService.set("_cs_c", csString(t), 34164e6)
            }, t.prototype.remove = function() {
                this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.removeItem("_cs_c") : this.cookieService.delete("_cs_c")
            }, t.prototype.handleSubdomainChange = function() {
                this.configuration.cookielessTrackingEnabled || (this.configuration.allowSubdomains ? this.cookieService.delete("_cs_c", qt.CURRENT_DOMAIN) : this.cookieService.delete("_cs_c", this.cookieService.getRootDomain()))
            }, t
        }(),
        Eo = ["trackConsentGranted"],
        Co = ["trackConsentWithdrawn"],
        To = function() {
            function t(t, e) {
                this.commandsService = t, this.service = e
            }
            return t.prototype.init = function() {
                this.service.handleSubdomainChange(), this.service.setInitialConsent(), this.registerCommands()
            }, t.prototype.registerCommands = function() {
                var t = this;
                this.commandsService.register(Eo, (function() {
                    t.service.grantConsent()
                })), this.commandsService.register(Co, (function() {
                    t.service.withdrawConsent()
                }))
            }, t.prototype.onOptout = function() {
                this.service.removeConsent()
            }, t
        }(),
        Ro = function() {
            function t(t, e, i) {
                this.configuration = t, this.storage = e, this.lifeCycleEventsEmitter = i
            }
            return t.prototype.setInitialConsent = function() {
                var t = this.storage.get();
                (null === t || this.hasConsentRequiredChanged(t)) && this.setDefault()
            }, t.prototype.hasConsentRequiredChanged = function(t) {
                var e = this.configuration.consentRequired;
                return e && t === ao.NOT_REQUIRED || !e && t !== ao.NOT_REQUIRED
            }, t.prototype.handleSubdomainChange = function() {
                this.storage.handleSubdomainChange()
            }, t.prototype.setDefault = function() {
                var t = this.configuration.consentRequired ? ao.NOT_EXPRESSED : ao.NOT_REQUIRED;
                this.storage.set(t)
            }, t.prototype.grantConsent = function() {
                this.configuration.consentRequired && (this.storage.set(ao.GRANTED), this.lifeCycleEventsEmitter.emitConsentGranted())
            }, t.prototype.withdrawConsent = function() {
                this.configuration.consentRequired && (this.storage.set(ao.WITHDRAWN), this.lifeCycleEventsEmitter.emitConsentWithdrawn())
            }, t.prototype.removeConsent = function() {
                this.storage.remove()
            }, t.prototype.isAllowedByConsent = function() {
                return !this.configuration.consentRequired || this.storage.get() === ao.GRANTED
            }, t.prototype.getRequestParameters = function() {
                return {
                    uc: "".concat(this.storage.get())
                }
            }, t
        }(),
        bo = function() {
            function t(t, e, i, r, n, o, s) {
                this.lifeCycleEventsEmitter = t, this.commandsService = e, this.commandsModule = i, this.optoutModule = r, this.optoutService = n, this.exclusionModule = o, this.consentModule = s
            }
            return t.prototype.start = function() {
                this.lifeCycleEventsEmitter.addListeners(this.exclusionModule, this.consentModule, this.commandsModule), this.consentModule.init(), this.optoutModule.init(), this.optoutService.init(), this.optoutService.isActive() || this.commandsService.start()
            }, t
        }(),
        wo = function() {
            function t(t, e) {
                this.location = t, this.storage = e
            }
            return t.prototype.exclude = function(t) {
                this.storage.set(csString(t.lastTrackingDraw))
            }, t.prototype.removeExclusion = function() {
                this.storage.remove()
            }, t.prototype.isExcluded = function() {
                return this.hasExclusionInStorage() || this.hasExclusionInURL()
            }, t.prototype.hasExclusionInStorage = function() {
                return 0 !== this.getAppliedTrackingDraw()
            }, t.prototype.getAppliedTrackingDraw = function() {
                return this.storage.get()
            }, t.prototype.hasExclusionInURL = function() {
                return csString.prototype.indexOf.call(this.location.href, "_cs_ex") > 0
            }, t
        }(),
        Ao = function() {
            function t(t) {
                this.service = t
            }
            return t.prototype.onOptout = function() {
                this.service.removeExclusion()
            }, t
        }(),
        Io = function() {
            function t(t, e) {
                this.location = t, this.cookieService = e
            }
            return t.prototype.isForceIncluded = function() {
                return this.hasForceInclusionCookie() || this.hasForceInclusionInURL()
            }, t.prototype.isForceLegacyReplayRecorded = function() {
                return this.hasForceInclusionCookieValue(Ft.REPLAY_RECORDING_ENABLED) || this.hasForceInclusionValueInURL(Ft.REPLAY_RECORDING_ENABLED)
            }, t.prototype.isForceMalkaReplayRecorded = function() {
                return this.hasForceInclusionCookieValue(Gt.GLOBAL_SAMPLING)
            }, t.prototype.hasForceInclusionCookie = function() {
                return null !== this.cookieService.get("_cs_inc")
            }, t.prototype.hasForceInclusionCookieValue = function(t) {
                return this.cookieService.get("_cs_inc") === t
            }, t.prototype.hasForceInclusionInURL = function() {
                return csString.prototype.indexOf.call(this.location.href, "_cs_inc") > 0
            }, t.prototype.hasForceInclusionValueInURL = function(t) {
                return csString.prototype.indexOf.call(this.location.href, "".concat("_cs_inc", "=").concat(t)) > 0
            }, t
        }(),
        ko = function() {
            function t() {
                this.metrics = {}
            }
            return t.prototype.start = function(t, e) {
                void 0 === e && (e = ct());
                var i = this.metrics[t];
                this.metrics[t] = i && i.startedAt ? i : z(z({}, i), {
                    startedAt: e
                })
            }, t.prototype.stop = function(t, e) {
                void 0 === e && (e = ct());
                var i = this.metrics[t];
                this.metrics[t] = i && i.stoppedAt ? i : z(z({}, i), {
                    stoppedAt: e
                }), this.onStopCallback(t, this.metrics[t])
            }, t.prototype.onStop = function(t) {
                this.onStopCallback = t
            }, t
        }(),
        Po = function() {
            function t() {}
            return t.prototype.getRequestParameters = function() {
                var t = window.location;
                return {
                    pr: t.protocol,
                    ho: t.hostname,
                    pa: t.pathname,
                    qu: t.search,
                    ha: t.hash
                }
            }, t
        }(),
        No = function() {
            function t(t, e) {
                this.configuration = t, this.request = e, this.isLoggingActive = !1
            }
            return t.prototype.init = function() {
                this.isLoggingActive = W.boolean(this.configuration.metricRate)
            }, t.prototype.getRequestParameters = function() {
                return {
                    a: "uxam",
                    mk: this.metricKey,
                    mv: "".concat(this.metricValue)
                }
            }, t.prototype.logMetric = function(t, e) {
                this.metricKey = t, this.metricValue = e.stoppedAt - e.startedAt, this.sendLog()
            }, t.prototype.sendLog = function() {
                this.isLoggingActive && this.request.send()
            }, t
        }();
    ! function(t) {
        t.TIME_BEFORE_EXECUTION = "TimeBeforeExecution", t.PAGE_LOAD = "PageLoad"
    }(go || (go = {}));
    var Oo, Mo = function() {
            function t(t, e, i) {
                this.service = e, this.pii = i, this.locationRequestParameters = new Po, this.basicLogRequestParameters = new ht(t, this.pii), this.request = new et(t.getLoggerUri()), this.logger = new No(t, this.request)
            }
            return t.prototype.init = function() {
                var t = this;
                this.request.setRequestParametersProviders(this.basicLogRequestParameters, this.locationRequestParameters), this.logger.init(), this.service.onStop((function(e, i) {
                    t.logger.logMetric(e, i)
                })), this.recordInitialMetrics()
            }, t.prototype.recordInitialMetrics = function() {
                this.isSupported() && (this.service.start(go.PAGE_LOAD, window.csPerformance.timing.navigationStart), this.service.stop(go.PAGE_LOAD, window.csPerformance.timing.domContentLoadedEventEnd), this.service.start(go.TIME_BEFORE_EXECUTION, window.csPerformance.timing.domContentLoadedEventEnd), this.service.stop(go.TIME_BEFORE_EXECUTION))
            }, t.prototype.isSupported = function() {
                return window.csPerformance && window.csPerformance.timing
            }, t
        }(),
        Lo = function() {
            function t(t, e, i) {
                this.configuration = t, this.cookieService = e, this.browserLocalStorage = i
            }
            return t.prototype.get = function() {
                return this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.getItem("_cs_optout") : this.cookieService.get("_cs_optout")
            }, t.prototype.set = function(t) {
                this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.setItem("_cs_optout", t) : this.cookieService.set("_cs_optout", t, 34164e6)
            }, t
        }(),
        Do = function() {
            function t(t, e, i) {
                this.lifeCycleEventsEmitter = t, this.location = e, this.storage = i
            }
            return t.prototype.init = function() {
                !this.isActive() && this.hasOptoutInURL() && this.activate()
            }, t.prototype.isActive = function() {
                return "1" === this.storage.get()
            }, t.prototype.activate = function() {
                this.lifeCycleEventsEmitter.emitOptout(), this.storage.set("1")
            }, t.prototype.hasOptoutInURL = function() {
                return csString.prototype.indexOf.call(this.location.href, "_cs_optout") > 0
            }, t
        }(),
        _o = ["optout"],
        xo = function() {
            function t(t, e) {
                this.commandsService = t, this.optoutService = e
            }
            return t.prototype.init = function() {
                var t = this;
                this.commandsService.register(_o, (function() {
                    t.optoutService.activate()
                }))
            }, t
        }();

    function Vo(t, e) {
        return e.visitor.visitsCount !== t.visitor.visitsCount ? e.visitor.visitsCount - t.visitor.visitsCount : t.session ? e.session ? e.session.pageNumber - t.session.pageNumber : -1 : 1
    }! function(t) {
        t.select = function(t, e) {
            var i = function(t, e) {
                    return csArray.prototype.filter.call(t, (function(t) {
                        return t.exclusion === e
                    }))[0]
                }(t, e),
                r = function(t, e) {
                    return csArray.prototype.sort.call(csArray.prototype.filter.call(t, (function(t) {
                        return function(t, e) {
                            return t.visitor && t.visitor.appliedTrackingDraw === e
                        }(t, e)
                    })), Vo)[0]
                }(t, e);
            return i || r
        }
    }(Oo || (Oo = {}));
    var zo = function() {
            function t(t, e, i) {
                this.configuration = t, this.currentDomainState = e, this.otherDomainStates = i
            }
            return t.prototype.applyUpToDate = function(t) {
                var e = this;
                this.otherDomainStates.retrieve(this.configuration.hostnames, (function(i) {
                    var r = H([e.currentDomainState.get()], i, !0),
                        n = Oo.select(r, e.configuration.lastTrackingDraw);
                    e.currentDomainState.apply(n), t()
                }))
            }, t
        }(),
        qo = function() {
            function t(t, e) {
                this.commandsService = t, this.iframeEventsEmitter = e
            }
            return t.prototype.init = function() {
                this.iframeEventsEmitter.addListeners(this.commandsService)
            }, t.prototype.onOptout = function() {
                this.commandsService.stop()
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.commandsService.stop()
            }, t
        }();
    var Uo, Bo = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.registry = {}, e
            }
            return V(e, t), e.prototype.register = function(t, e) {
                for (var i = 0, r = t; i < r.length; i++) {
                    var n = r[i];
                    this.registry[n] = e, this.registry
                }
            }, e.prototype.onStart = function() {
                this.applyPending(), this.enableImmediateApplication()
            }, e.prototype.onStop = function() {
                window._uxa = []
            }, e.prototype.onIframeCommands = function(t) {
                for (var e = 0, i = t.commands; e < i.length; e++) {
                    var r = i[e];
                    this.applyFromIframe(r.name, r.params, t.iframePath)
                }
            }, e.prototype.applyFromIframe = function(t, e, i) {
                var r = this;
                Vt.tryToExecute("Commands.apply.from.iframe: ".concat(i), (function() {
                    var i;
                    if (r.registry[t]) return (i = r.registry)[t].apply(i, e)
                }))()
            }, e.prototype.applyPending = function() {
                var t = this;
                window._uxa.forEach((function(e) {
                    var i = e[0],
                        r = e.slice(1);
                    return t.apply(i, r)
                }))
            }, e.prototype.enableImmediateApplication = function() {
                var t = this;
                window._uxa = {
                    push: function(e) {
                        var i = e[0],
                            r = e.slice(1);
                        return t.apply(i, r)
                    }
                }
            }, e.prototype.apply = function(t, e) {
                var i;
                if (this.registry[t]) return (i = this.registry)[t].apply(i, e)
            }, q([zt("Commands.apply")], e.prototype, "apply", null), e
        }(_e),
        Ho = function() {
            function t() {
                var t = this;
                this.eventHandler = {
                    boundElement: document,
                    type: "securitypolicyviolation",
                    listener: function(e) {
                        return t.securityPolicyViolationListener(e)
                    }
                }
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                de(this.eventHandler)
            }, t.prototype.stop = function() {
                fe(this.eventHandler)
            }, t.prototype.isSecurityErrorRelevant = function(e) {
                if (!e) return !1;
                var i = e.disposition;
                return It(e.sourceFile) && csArray.prototype.some.call(t.whilelistDomains, (function(t) {
                    return csString.prototype.indexOf.call(e.sourceFile, t) > 0
                })) && "report" !== i
            }, t.prototype.securityPolicyViolationListener = function(t) {
                this.isSecurityErrorRelevant(t) && this.onEventCallback({
                    violatedDirective: t.violatedDirective,
                    sourceFile: t.sourceFile
                })
            }, t.whilelistDomains = ["contentsquare", "cdnssl.clicktale.net", "localhost", "website.com/build/e2e"], q([zt("Event handler type: securitypolicyviolation")], t.prototype, "securityPolicyViolationListener", null), t
        }(),
        Fo = function() {
            function t(t) {
                this.contentSecurityPolicyErrorsTracker = t
            }
            return t.prototype.init = function() {
                var t = this;
                this.contentSecurityPolicyErrorsTracker.onEvent((function(e) {
                    return t.processEvent(e)
                }))
            }, t.prototype.start = function() {
                this.contentSecurityPolicyErrorsTracker.start()
            }, t.prototype.stop = function() {
                this.contentSecurityPolicyErrorsTracker.stop()
            }, t.prototype.processEvent = function(t) {
                var e = "Content Security Policy error. Violated directive: ".concat(t.violatedDirective, " - Source file: ").concat(t.sourceFile);
                Vt.warn(e)
            }, t
        }(),
        Go = function(t) {
            function e(e, i, r, n, o) {
                var s = t.call(this) || this;
                return s.javaScriptErrorsTracker = e, s.javaScriptErrorsRequest = i, s.basicRequestParameters = r, s.javaScriptErrorsAnonymizer = n, s.customEventEmitter = o, s.javaScriptErrorsBatch = [], s.javaScriptErrorsCount = 0, s.customErrorsBuffer = [], s
            }
            return V(e, t), e.prototype.init = function() {
                this.bindRequest()
            }, e.prototype.initStates = function() {
                this.startTime = ct(), this.javaScriptErrorsBatch = [], this.javaScriptErrorsCount = 0
            }, e.prototype.onStart = function() {
                var t = this;
                this.javaScriptErrorsTracker.subscribe(e.SERVICE_IDENTIFIER, (function(e) {
                    return t.processEvent(e)
                })), this.processCustomErrorsInBuffer()
            }, e.prototype.onStop = function() {
                this.javaScriptErrorsTracker.unsubscribe(e.SERVICE_IDENTIFIER)
            }, e.prototype.getRequestPayload = function() {
                return csJSON.stringify({
                    errors: this.javaScriptErrorsBatch
                })
            }, e.prototype.onIframeJavascriptError = function(t) {
                this.processEvent(t)
            }, e.prototype.trackCustomError = function(t) {
                var e = {
                    errorType: "jsError",
                    message: "".concat("Custom Error:", " ").concat(t),
                    lineno: 1,
                    colno: 1,
                    filename: "https://cserror.com/texterror.js"
                };
                this.processCustomErrorEvent(e)
            }, e.prototype.processCustomErrorEvent = function(t) {
                this.isStarted ? (this.processEvent(t), this.customEventEmitter.emitCustomJavaScriptErrorEvent(t)) : csArray.prototype.push.call(this.customErrorsBuffer, t)
            }, e.prototype.processCustomErrorsInBuffer = function() {
                var t = this;
                this.isStarted && (csArray.prototype.forEach.call(this.customErrorsBuffer, (function(e) {
                    return t.processCustomErrorEvent(e)
                })), this.customErrorsBuffer = [])
            }, e.prototype.processEvent = function(t) {
                this.isStarted && this.javaScriptErrorsCount < 20 && (this.javaScriptErrorsAnonymizer.anonymize(t), t.rt = this.getRelativeTime(), csArray.prototype.push.call(this.javaScriptErrorsBatch, t), this.sendErrors())
            }, e.prototype.bindRequest = function() {
                var t = this;
                this.javaScriptErrorsRequest.setRequestParametersProviders(this.basicRequestParameters), this.javaScriptErrorsRequest.setRequestPayloadProvider(this), this.javaScriptErrorsRequest.after((function() {
                    t.javaScriptErrorsBatch = [], t.javaScriptErrorsCount += 1
                }))
            }, e.prototype.getRelativeTime = function() {
                return ct() - this.startTime
            }, e.prototype.sendErrors = function() {
                this.javaScriptErrorsRequest.send()
            }, e.SERVICE_IDENTIFIER = "JavaScriptErrorsService", e
        }(_e),
        jo = function(t) {
            function e(e, i, r, n) {
                var o = t.call(this) || this;
                return o.apiErrorsTracker = e, o.apiErrorsRequest = i, o.basicRequestParameters = r, o.apiErrorsAnonymizer = n, o.apiErrorsBatch = [], o.apiErrorsCount = 0, o
            }
            return V(e, t), e.prototype.init = function() {
                this.apiErrorsTracker.init(), this.bindRequest()
            }, e.prototype.initStates = function() {
                this.apiErrorsBatch = [], this.apiErrorsCount = 0, this.resetStartTime()
            }, e.prototype.resetStartTime = function() {
                this.startTime = ct()
            }, e.prototype.getRelativeTime = function() {
                return ct() - this.startTime
            }, e.prototype.onStart = function() {
                var t = this;
                this.apiErrorsTracker.subscribe(e.SERVICE_IDENTIFIER, (function(e) {
                    return t.processEvent(e)
                }))
            }, e.prototype.onStop = function() {
                this.apiErrorsTracker.unsubscribe(e.SERVICE_IDENTIFIER)
            }, e.prototype.getRequestPayload = function() {
                return csJSON.stringify({
                    errors: this.apiErrorsBatch
                })
            }, e.prototype.onIframeApiError = function(t) {
                this.processEvent(t)
            }, e.prototype.processEvent = function(t) {
                this.isStarted && this.apiErrorsCount < e.MAX_ERRORS && (t.relativeTime = this.getRelativeTime(), csArray.prototype.push.call(this.apiErrorsBatch, this.apiErrorsAnonymizer.anonymize(t)), this.sendErrors())
            }, e.prototype.bindRequest = function() {
                var t = this;
                this.apiErrorsRequest.setRequestParametersProviders(this.basicRequestParameters), this.apiErrorsRequest.setRequestPayloadProvider(this), this.apiErrorsRequest.after((function() {
                    t.apiErrorsBatch = [], t.apiErrorsCount += 1
                }))
            }, e.prototype.sendErrors = function() {
                this.apiErrorsRequest.send()
            }, e.SERVICE_IDENTIFIER = "ApiErrorsService", e.MAX_ERRORS = 20, e
        }(_e),
        Ko = function(t) {
            function e(e, i, r, n) {
                var o = t.call(this) || this;
                return o.customErrorsRequest = e, o.basicRequestParameters = i, o.piiAnonymizer = r, o.customEventsEmitter = n, o.customErrorsBatch = [], o.customErrorsCount = 0, o.customErrorsBuffer = [], o
            }
            return V(e, t), e.prototype.init = function() {
                this.bindRequest()
            }, e.prototype.initStates = function() {
                this.startTime = ct(), this.customErrorsBatch = [], this.customErrorsCount = 0
            }, e.prototype.trackCustomError = function(t, e) {
                if (void 0 === e && (e = {}), It(t) && kt(e)) {
                    var i = {
                        message: csString.prototype.slice.call(t, 0, 300),
                        errorType: "customError"
                    };
                    this.isAttributesValid(e) && (i.attributes = e), this.processCustomErrorEvent(i)
                }
            }, e.prototype.isAttributesValid = function(t) {
                var e = Object.keys(t).length;
                if (0 === e || e > 5) return !1;
                for (var i in t)
                    if (i.length > 30 || t[i].length > 30) return !1;
                return !0
            }, e.prototype.onStart = function() {
                this.processCustomErrorsInBuffer()
            }, e.prototype.onStop = function() {}, e.prototype.processCustomErrorsInBuffer = function() {
                var t = this;
                this.isStarted && (csArray.prototype.forEach.call(this.customErrorsBuffer, (function(e) {
                    return t.processCustomErrorEvent(e)
                })), this.customErrorsBuffer = [])
            }, e.prototype.processCustomErrorEvent = function(t) {
                if (this.isStarted) {
                    var e = this.buildCustomError(t);
                    this.processEvent(e), this.customEventsEmitter.emitCustomErrorEvent(e)
                } else csArray.prototype.push.call(this.customErrorsBuffer, t)
            }, e.prototype.processEvent = function(t) {
                this.isStarted && this.customErrorsCount < 20 && (csArray.prototype.push.call(this.customErrorsBatch, t), this.sendErrors())
            }, e.prototype.buildCustomError = function(t) {
                var e = z(z({}, t), {
                    rt: this.getRelativeTime()
                });
                return e.message = this.piiAnonymizer.anonymize(t.message), e
            }, e.prototype.bindRequest = function() {
                var t = this;
                this.customErrorsRequest.setRequestParametersProviders(this.basicRequestParameters), this.customErrorsRequest.setRequestPayloadProvider(this), this.customErrorsRequest.after((function() {
                    t.customErrorsBatch = [], t.customErrorsCount += 1
                }))
            }, e.prototype.getRequestPayload = function() {
                return csJSON.stringify({
                    errors: this.customErrorsBatch
                })
            }, e.prototype.getRelativeTime = function() {
                return ct() - this.startTime
            }, e.prototype.sendErrors = function() {
                this.customErrorsRequest.send()
            }, e
        }(_e);
    ! function(t) {
        t.CONTENTSQUARE = "contentsquare.net", t.CLICKTALE = "clicktale.net", t.FAKE_TRACKER = "fake-tracker.content-square.fr"
    }(Uo || (Uo = {}));
    var Wo, Yo = ["trackError"],
        Xo = ["api-errors:maskUrl"],
        Jo = function() {
            function t(t, e, i, r, n, o, s, a, c, u) {
                this.javaScriptErrorsTracker = t, this.javaScriptErrorsAnonymizer = e, this.apiErrorsTracker = i, this.apiErrorsAnonymizer = r, this.piiAnonymizer = n, this.configuration = o, this.basicRequestParameters = s, this.iframeEventsEmitter = a, this.commandsService = c, this.customEventEmitter = u
            }
            return t.prototype.init = function() {
                this.contentSecurityPolicyErrorsService = new Fo(new Ho), this.contentSecurityPolicyErrorsService.init();
                var t = new he(this.configuration.getTrackerUri(), "errors");
                this.javaScriptErrorsService = new Go(this.javaScriptErrorsTracker, t, this.basicRequestParameters, this.javaScriptErrorsAnonymizer, this.customEventEmitter), this.javaScriptErrorsService.init(), this.iframeEventsEmitter.addListeners(this.javaScriptErrorsService);
                var e = new he(this.configuration.getTrackerUri(), "api-errors");
                this.apiErrorsTracker.excludeDomains([Uo.CONTENTSQUARE, Uo.CLICKTALE, Uo.FAKE_TRACKER]), this.apiErrorsService = new jo(this.apiErrorsTracker, e, this.basicRequestParameters, this.apiErrorsAnonymizer), this.apiErrorsService.init(), this.iframeEventsEmitter.addListeners(this.apiErrorsService);
                var i = new he(this.configuration.getTrackerUri(), "custom-errors");
                this.customErrorsService = new Ko(i, this.basicRequestParameters, this.piiAnonymizer, this.customEventEmitter), this.customErrorsService.init(), this.registerCommands()
            }, t.prototype.registerCommands = function() {
                var t = this;
                this.commandsService.register(Xo, (function(e) {
                    return t.apiErrorsAnonymizer.addUrlMaskingPattern(e)
                })), this.commandsService.register(Yo, (function(e, i) {
                    t.configuration.customErrorsEnabled ? t.customErrorsService.trackCustomError(e, i) : t.configuration.jsCustomErrorsEnabled && t.javaScriptErrorsService.trackCustomError(e)
                }))
            }, t.prototype.onInitTracking = function() {
                this.contentSecurityPolicyErrorsService.start()
            }, t.prototype.onStartTracking = function() {
                this.configuration.jsErrorsEnabled && this.javaScriptErrorsService.start(), this.configuration.apiErrors.enabled && this.apiErrorsService.start(), this.configuration.customErrorsEnabled && this.customErrorsService.start()
            }, t.prototype.onAfterNaturalPageView = function() {
                this.javaScriptErrorsService.initStates(), this.apiErrorsService.initStates(), this.customErrorsService.initStates()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.javaScriptErrorsService.initStates(), this.apiErrorsService.initStates(), this.customErrorsService.initStates()
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.javaScriptErrorsService.stop(), this.apiErrorsService.stop(), this.customErrorsService.stop()
            }, t.prototype.onOptout = function() {
                this.contentSecurityPolicyErrorsService.stop(), this.javaScriptErrorsService.stop(), this.apiErrorsService.stop(), this.customErrorsService.stop()
            }, t
        }();
    ! function(t) {
        t.Set = "set", t.Remove = "remove"
    }(Wo || (Wo = {}));
    var Qo = function() {
            function t(t, e) {
                this.configuration = t, this.cookieService = e, this.sameSite = _t.None, this.isActivated = !1, this.setCookieBatch = [], this.removeCookieBatch = []
            }
            return t.prototype.init = function() {
                this.sameSite = this.cookieService.isSameSiteSupported() ? _t.None : _t.NotSet
            }, t.prototype.setStates = function(t, e) {
                this.currentDomainState = t, this.iframeDomainState = e
            }, t.prototype.start = function(t) {
                var e = this;
                this.iframeDomainState.init(this.getIframeDomain(), (function(i, r) {
                    var n = [e.currentDomainState.get()];
                    r && csArray.prototype.push.call(n, i);
                    var o = Oo.select(n, e.configuration.lastTrackingDraw);
                    e.isActivated = !0, e.currentDomainState.apply(o), t()
                })), this.iframe = this.iframeDomainState.openIframe()
            }, t.prototype.setCookie = function(t, e, i) {
                if (this.isActivated) {
                    var r = {
                        name: t,
                        value: e,
                        samesite: this.sameSite,
                        secure: xt.Yes
                    };
                    i && (r.expires = Lt.toExpireDate(i).getTime()), this.addToSetCookieBatch(r)
                }
            }, t.prototype.removeCookie = function(t) {
                this.isActivated && this.addToRemoveCookieBatch(t)
            }, t.prototype.addToRemoveCookieBatch = function(t) {
                this.removeCookieBatch = csArray.prototype.filter.call(this.removeCookieBatch, (function(e) {
                    return e !== t
                })), this.setCookieBatch = csArray.prototype.filter.call(this.setCookieBatch, (function(e) {
                    return e.name !== t
                })), csArray.prototype.push.call(this.removeCookieBatch, t), this.setBatchReadyCall()
            }, t.prototype.addToSetCookieBatch = function(t) {
                this.removeCookieBatch = csArray.prototype.filter.call(this.removeCookieBatch, (function(e) {
                    return e !== t.name
                })), this.setCookieBatch = csArray.prototype.filter.call(this.setCookieBatch, (function(e) {
                    return e.name !== t.name
                })), csArray.prototype.push.call(this.setCookieBatch, t), this.setBatchReadyCall()
            }, t.prototype.setBatchReadyCall = function() {
                this.sendMessagesBatchs()
            }, t.prototype.sendMessagesBatchs = function() {
                if (this.setCookieBatch.length > 0) {
                    var t = this.buildMessage(Wo.Set, this.setCookieBatch);
                    this.sendMessage(t), this.setCookieBatch = []
                }
                if (this.removeCookieBatch.length > 0) {
                    var e = this.buildMessage(Wo.Remove, this.removeCookieBatch);
                    this.sendMessage(e), this.removeCookieBatch = []
                }
            }, t.prototype.buildMessage = function(t, e) {
                return {
                    command: t,
                    cookies: e,
                    domain: null,
                    pid: this.configuration.projectId
                }
            }, t.prototype.sendMessage = function(t) {
                var e = "https://".concat(this.getIframeDomain());
                this.iframe.contentWindow && this.iframe.contentWindow.postMessage(t, e)
            }, t.prototype.getIframeDomain = function() {
                return this.configuration.dualCollectionTagDomain && "contentsquare.net" !== this.configuration.dualCollectionTagDomain ? "cdnssl.".concat(this.configuration.dualCollectionTagDomain) : "csxd.".concat("contentsquare.net")
            }, q([Be(), zt("send xdframe-single-iframe batch")], t.prototype, "setBatchReadyCall", null), t
        }(),
        Zo = function() {
            function t(t, e) {
                this.configuration = t, this.xdframeOpener = e
            }
            return t.prototype.init = function(t, e) {
                this.xdframeOrigin = "https://".concat(t), this.callback = e
            }, t.prototype.openIframe = function() {
                var t = this;
                this.xdframeOpener.onMessage((function(e) {
                    t.handleXdframeMessage(e)
                })), this.xdframeOpener.onTimeout((function() {
                    t.handleTimeout()
                })), this.xdframeOpener.start();
                var e = this.getXdframeUrl(this.xdframeOrigin);
                return this.xdframeOpener.open(e)
            }, t.prototype.handleXdframeMessage = function(t) {
                if (this.isXdframeMessage(t)) {
                    var e = t.data,
                        i = !0;
                    if (this.isXdframeErrorMessage(t)) return void Vt.warn("Error xdframe single domain: ".concat(csJSON.stringify(t.data), " from ").concat(t.origin));
                    if (!ee.isRawDomainState(e)) return void Vt.warn("Unknown message format from xdframe single domain: ".concat(csJSON.stringify(t.data), " from ").concat(t.origin));
                    ee.isValid(e) || (Vt.warn("Invalid xdframe single domain state: ".concat(csJSON.stringify(t.data), " from ").concat(t.origin)), i = !1), this.xdframeOpener.stop(), this.callback(i ? $t.fromRaw(e) : {}, i)
                }
            }, t.prototype.handleTimeout = function() {
                Vt.warn("xdframe single domain: all messages not received")
            }, t.prototype.isXdframeMessage = function(t) {
                return t.origin === this.xdframeOrigin && kt(t.data)
            }, t.prototype.isXdframeErrorMessage = function(t) {
                return !!t.data.error
            }, t.prototype.getXdframeUrl = function(t) {
                var e = this.configuration.projectId;
                return "".concat(t, "/uxa/xdframe-single-domain-").concat("1.1.1", ".html?pid=").concat(e)
            }, t
        }(),
        $o = function() {
            function t(t, e, i) {
                this.configuration = t, this.visitorService = e, this.sessionService = i
            }
            return t.prototype.getRequestParameters = function() {
                if (!this.visitorService.doesVisitorExist() || !this.sessionService.doesSessionExist()) return {};
                var t = this.visitorService.getVisitor();
                return z(z(z({}, {
                    v: "11.49.1"
                }), this.configuration.getRequestParameters()), {
                    uu: t.id,
                    sn: "".concat(t.visitsCount),
                    pn: "".concat(this.sessionService.getSession().pageNumber)
                })
            }, t
        }(),
        ts = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.useCapture = !1, e.eventHandler = {
                    boundElement: window,
                    type: "error",
                    listener: function(t) {
                        return e.errorListener(t)
                    }
                }, e
            }
            return V(e, t), e.prototype.onStartTracking = function() {
                de(this.eventHandler, this.useCapture)
            }, e.prototype.onStopTracking = function() {
                fe(this.eventHandler, this.useCapture)
            }, e.prototype.errorListener = function(t) {
                var e = this.buildJavaScriptError(t);
                for (var i in this.subscriptions) {
                    (0, this.subscriptions[i])(e)
                }
            }, e.prototype.decorateErrorMessage = function(t) {
                return t.length <= e.MAX_ERROR_MESSAGE_LENGTH ? t : csString.prototype.slice.call(t, 0, e.MAX_ERROR_MESSAGE_LENGTH - e.truncatedErrorMessageMarker.length) + e.truncatedErrorMessageMarker
            }, e.prototype.buildJavaScriptError = function(t) {
                return {
                    errorType: "jsError",
                    message: this.decorateErrorMessage(t.message),
                    filename: t.filename,
                    lineno: t.lineno,
                    colno: t.colno
                }
            }, e.truncatedErrorMessageMarker = "…", e.MAX_ERROR_MESSAGE_LENGTH = 1024, q([zt("Event handler type: error")], e.prototype, "errorListener", null), e
        }(ro),
        es = function() {
            function t(t, e) {
                this.commandsService = t, this.projectConfiguration = e
            }
            return t.prototype.init = function() {
                var t = this;
                this.commandsService.register(["debugEvents"], (function(e) {
                    "boolean" == typeof e && t.projectConfiguration.updateDynamicFields("emitDebugEvents", e)
                }))
            }, t
        }();

    function is(t, e, i) {
        if (!Pt(e) && !Pt(i)) return t.href;
        var r = Pt(e) ? function(t) {
                return j(t, "/") ? t : "/".concat(t)
            }(e) : t.pathname,
            n = Pt(i) ? function(t) {
                return j(t, "?") || "" === t ? t : "?".concat(t)
            }(i) : t.search;
        return "".concat(t.protocol, "//").concat(t.host).concat(r).concat(n)
    }
    var rs, ns, os, ss = function() {
            function t(t, e) {
                this.location = t, this.pii = e
            }
            return t.prototype.overridePath = function(t) {
                Pt(t) && It(t) && (this.path = "" === t ? void 0 : t)
            }, t.prototype.overrideQuery = function(t) {
                Pt(t) && It(t) && (this.query = t)
            }, t.prototype.computeOverriddenUrl = function(t) {
                return this.isCurrentPageUrl(t) ? this.getUrl() : t
            }, t.prototype.isCurrentPageUrl = function(t) {
                var e = this.normalizeUrl(this.location.href);
                return this.normalizeUrl(t) === e
            }, t.prototype.normalizeUrl = function(t) {
                return K(t, "/") ? csString.prototype.slice.call(t, 0, -1) : t
            }, t.prototype.getUrl = function() {
                return is(this.location, this.path, this.query)
            }, t.prototype.getUrlProtocol = function() {
                return this.location.protocol
            }, t.prototype.getRequestParameters = function() {
                var t = this.getUrl();
                return {
                    url: this.pii.anonymize(t)
                }
            }, t
        }(),
        as = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return V(e, t), e.prototype.emitPageEvent = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onPageEvent && r.onPageEvent(t)
                }
            }, e.prototype.emitEventTriggerRecording = function(t, e) {
                for (var i = 0, r = this.listeners; i < r.length; i++) {
                    var n = r[i];
                    n.onEventTriggerRecording && n.onEventTriggerRecording(t, e)
                }
            }, e.prototype.emitCustomJavaScriptErrorEvent = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onCustomJavaScriptErrorEvent && r.onCustomJavaScriptErrorEvent(t)
                }
            }, e.prototype.emitCustomErrorEvent = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onCustomErrorEvent && r.onCustomErrorEvent(t)
                }
            }, e.prototype.emitUserIdentifierEvent = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onUserIdentifierEvent && r.onUserIdentifierEvent(t)
                }
            }, e
        }(vo),
        cs = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.xhrRequestTracker = e, r.fetchRequestTracker = i, r.excludedDomains = [], r
            }
            return V(e, t), e.prototype.subscribe = function(e, i, r) {
                (null == r ? void 0 : r.detailedEvent) && Object.defineProperty(i, "detailedEvent", {
                    value: r.detailedEvent
                }), t.prototype.subscribe.call(this, e, i)
            }, e.prototype.init = function() {
                var t = this;
                this.xhrRequestTracker.onEvent((function(e) {
                    return t.apiErrorListener(e)
                })), this.fetchRequestTracker.onEvent((function(e) {
                    return t.apiErrorListener(e)
                }))
            }, e.prototype.onStartTracking = function() {
                this.xhrRequestTracker.start(), this.fetchRequestTracker.start()
            }, e.prototype.onStopTracking = function() {
                this.xhrRequestTracker.stop(), this.fetchRequestTracker.stop()
            }, e.prototype.apiErrorListener = function(t) {
                if (t.url && t.statusCode) {
                    if (this.isExcludedDomain(t.url)) return;
                    if (t.statusCode >= 400)
                        for (var e in this.subscriptions) {
                            var i = this.subscriptions[e];
                            if (i.hasOwnProperty("detailedEvent")) i(this.buildDetailedApiError(t));
                            else i(this.buildApiError(t))
                        }
                }
            }, e.prototype.buildApiError = function(t) {
                return {
                    errorType: "apiError",
                    url: t.url,
                    method: t.method,
                    requestTime: t.requestTime,
                    responseTime: t.responseTime,
                    statusCode: t.statusCode,
                    library: t.library
                }
            }, e.prototype.buildDetailedApiError = function(t) {
                var e = this.buildApiError(t);
                return Object.keys(t.standardRequestHeaders).length > 0 && (e.standardRequestHeaders = t.standardRequestHeaders), Object.keys(t.standardResponseHeaders).length > 0 && (e.standardResponseHeaders = t.standardResponseHeaders), Object.keys(t.customRequestHeaders).length > 0 && (e.customRequestHeaders = csJSON.stringify(t.customRequestHeaders)), Object.keys(t.customResponseHeaders).length > 0 && (e.customResponseHeaders = csJSON.stringify(t.customResponseHeaders)), t.queryParameters && (e.queryParameters = t.queryParameters), t.requestBody && (e.requestBody = t.requestBody), t.responseBody && (e.responseBody = t.responseBody), e
            }, e.prototype.isExcludedDomain = function(t) {
                return csArray.prototype.some.call(this.excludedDomains, (function(e) {
                    return -1 !== csString.prototype.indexOf.call(t, e)
                }))
            }, e.prototype.excludeDomains = function(t) {
                var e;
                (e = csArray.prototype.push).call.apply(e, H([this.excludedDomains], t, !1))
            }, e.truncatedErrorMessageMarker = "…", e
        }(ro),
        us = function() {
            function t() {
                this.validContentTypes = ["application/json", "application/graphql", "application/xml", "text/plain", "text/csv", "text/html", "text/xml"]
            }
            return t.prototype.isValidUrl = function(t, e) {
                return !!e && csArray.prototype.some.call(e, (function(e) {
                    return -1 !== csString.prototype.indexOf.call(t, e)
                }))
            }, t.prototype.isValidBodyType = function(t) {
                var e = t["content-type"];
                if (!e) return !1;
                var i = csString.prototype.toLocaleLowerCase.call(e);
                return csArray.prototype.some.call(this.validContentTypes, (function(t) {
                    return j(i, t)
                }))
            }, t
        }(),
        ps = function(t) {
            function e(e, i, r) {
                var n = t.call(this) || this;
                return n.monkeyPatcher = e, n.validHeaders = i, n.configuration = r, n.isStarted = !1, n.openInterceptor = null, n.setRequestHeaderInterceptor = null, n.sendInterceptor = null, n.callbacks = [], n.openHook = function(t) {
                    var e = t.context,
                        i = t.args,
                        r = t.callerName;
                    return n.interceptOpen(e, i, r)
                }, n.setRequestHeaderHook = function(t) {
                    var e = t.context,
                        i = t.args;
                    return n.interceptSetRequestHeader(e, i)
                }, n.sendHook = function(t) {
                    var e = t.context,
                        i = t.args;
                    return n.interceptSend(e, i)
                }, n
            }
            return V(e, t), e.prototype.onEvent = function(t) {
                csArray.prototype.push.call(this.callbacks, t)
            }, e.prototype.start = function() {
                this.isStarted || (this.createInterceptors(), this.openInterceptor && this.openInterceptor.activate(), this.setRequestHeaderInterceptor && this.setRequestHeaderInterceptor.activate(), this.sendInterceptor && this.sendInterceptor.activate(), this.isStarted = !0)
            }, e.prototype.stop = function() {
                this.isStarted && (this.openInterceptor && this.openInterceptor.deactivate(), this.setRequestHeaderInterceptor && this.setRequestHeaderInterceptor.deactivate(), this.isStarted = !1)
            }, e.prototype.createInterceptors = function() {
                this.openInterceptor || (this.openInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: XMLHttpRequest.prototype,
                    methodName: "open",
                    hook: this.openHook,
                    options: {
                        withCallerName: !0
                    }
                })), this.setRequestHeaderInterceptor || (this.setRequestHeaderInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: XMLHttpRequest.prototype,
                    methodName: "setRequestHeader",
                    hook: this.setRequestHeaderHook
                })), this.sendInterceptor || (this.sendInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: XMLHttpRequest.prototype,
                    methodName: "send",
                    hook: this.sendHook
                }))
            }, e.prototype.interceptOpen = function(t, e, i) {
                var r = this;
                if (e[1] && It(e[1])) {
                    var n = csString.prototype.split.call(e[1], "?"),
                        o = n[0],
                        s = n[1],
                        a = yt(o);
                    t.apiCall = {
                        url: a,
                        method: e[0],
                        standardRequestHeaders: {},
                        standardResponseHeaders: {},
                        customRequestHeaders: {},
                        customResponseHeaders: {},
                        requestTime: ct(),
                        responseTime: 0,
                        statusCode: 0,
                        library: i
                    }, s && this.isValidUrl(a, this.configuration.apiErrors.validUrls) && this.configuration.apiErrors.collectQueryParam && (t.apiCall.queryParameters = s), t.addEventListener("readystatechange", (function() {
                        return r.readyStateChangeListener(t)
                    }))
                }
            }, e.prototype.readyStateChangeListener = function(t) {
                var e = this;
                t.readyState === XMLHttpRequest.DONE && (t.apiCall.responseTime = ct(), t.apiCall.statusCode = t.status, this.isHeaderCollectionActive() && csArray.prototype.forEach.call(csString.prototype.split.call(t.getAllResponseHeaders(), /[\r\n]+/), (function(i) {
                    var r = csString.prototype.split.call(i, /:(.*)/),
                        n = r[0],
                        o = r[1];
                    e.configuration.apiErrors.collectStandardHeaders && e.validHeaders.isValidStandardHeader(n) ? t.apiCall.standardResponseHeaders[n] = csString.prototype.trim.call(o) : e.validHeaders.isValidCustomHeader(n) && (t.apiCall.customResponseHeaders[n] = csString.prototype.trim.call(o))
                })), this.isValidUrl(t.apiCall.url, this.configuration.apiErrors.validUrls) && this.configuration.apiErrors.collectResponseBody && this.isValidBodyType(t.apiCall.standardResponseHeaders) && (t.apiCall.responseBody = t.responseText), csArray.prototype.forEach.call(this.callbacks, (function(e) {
                    return e(t.apiCall)
                })))
            }, e.prototype.interceptSetRequestHeader = function(t, e) {
                if (t.apiCall && this.isHeaderCollectionActive()) {
                    var i = e[0],
                        r = e[1];
                    this.configuration.apiErrors.collectStandardHeaders && this.validHeaders.isValidStandardHeader(i) && r ? t.apiCall.standardRequestHeaders[i] = r.trim() : this.validHeaders.isValidCustomHeader(i) && r && (t.apiCall.customRequestHeaders[i] = r.trim())
                }
            }, e.prototype.interceptSend = function(t, e) {
                var i = e[0];
                t.apiCall && this.isValidUrl(t.apiCall.url, this.configuration.apiErrors.validUrls) && this.configuration.apiErrors.collectRequestBody && this.isValidBodyType(t.apiCall.standardRequestHeaders) && "string" == typeof i && (t.apiCall.requestBody = i)
            }, e.prototype.isHeaderCollectionActive = function() {
                return this.configuration.apiErrors.collectStandardHeaders || this.configuration.apiErrors.validCustomHeaders && 0 !== this.configuration.apiErrors.validCustomHeaders.length
            }, q([zt("XhrRequestTracker.interceptOpen")], e.prototype, "interceptOpen", null), q([zt("XhrRequestTracker.readyStateChangeListener")], e.prototype, "readyStateChangeListener", null), q([zt("XhrRequestTracker.interceptSetRequestHeader")], e.prototype, "interceptSetRequestHeader", null), q([zt("XhrRequestTracker.interceptSend")], e.prototype, "interceptSend", null), e
        }(us),
        ls = function(t) {
            function e(e, i, r) {
                var n = t.call(this) || this;
                return n.monkeyPatcher = e, n.validHeaders = i, n.configuration = r, n.isStarted = !1, n.fetchInterceptor = null, n.callbacks = [], n.hook = function(t) {
                    var e = t.result,
                        i = t.args,
                        r = t.callerName;
                    n.interceptFetch(e, i, r)
                }, n
            }
            return V(e, t), e.prototype.onEvent = function(t) {
                csArray.prototype.push.call(this.callbacks, t)
            }, e.prototype.start = function() {
                this.isStarted || this.canTrackFetch() && (this.createFetchInterceptor(), this.fetchInterceptor && this.fetchInterceptor.activate(), this.isStarted = !0)
            }, e.prototype.stop = function() {
                this.isStarted && (this.fetchInterceptor && this.fetchInterceptor.deactivate(), this.isStarted = !1)
            }, e.prototype.canTrackFetch = function() {
                return !!window.fetch && "function" == typeof window.fetch
            }, e.prototype.prepareArgs = function(t, e) {
                var i = H([], e, !0);
                return i[0] && "function" == typeof i[0].clone && (i[0] = e[0].clone()), {
                    context: t,
                    args: i
                }
            }, e.prototype.createFetchInterceptor = function() {
                this.fetchInterceptor || (this.fetchInterceptor = this.monkeyPatcher.createAsyncFunctionInterceptor({
                    target: window,
                    methodName: "fetch",
                    hook: this.hook,
                    hookPrepareArgs: this.prepareArgs,
                    options: {
                        withCallerName: !0
                    }
                }))
            }, e.prototype.interceptFetch = function(t, e, i) {
                return U(this, void 0, void 0, (function() {
                    var r, n, o, s, a, c, u, p, l, h, d, f;
                    return B(this, (function(y) {
                        switch (y.label) {
                            case 0:
                                if (r = e[0], n = e[1], !(o = new Request(r, n)).url || !It(o.url)) return [2];
                                s = csString.prototype.split.call(o.url, "?"), a = s[0], c = s[1], u = yt(a), p = {
                                    url: u,
                                    method: o.method,
                                    requestTime: ct(),
                                    responseTime: 0,
                                    statusCode: 0,
                                    standardRequestHeaders: {},
                                    standardResponseHeaders: {},
                                    customRequestHeaders: {},
                                    customResponseHeaders: {},
                                    library: i
                                }, y.label = 1;
                            case 1:
                                return y.trys.push([1, 3, , 4]), [4, t];
                            case 2:
                                return l = y.sent(), [3, 4];
                            case 3:
                                if (h = y.sent(), this.isNetworkError(h) || this.isAbortedRequestError(h) || this.isTrustTokenOperationError(h)) return [2];
                                throw h;
                            case 4:
                                return p.responseTime = ct(), l.type.indexOf("opaque") > -1 ? p.statusCode = -1 : p.statusCode = l.status, this.configuration.apiErrors.collectStandardHeaders && (p.standardRequestHeaders = this.extractStandardHeaders(o.headers), p.standardResponseHeaders = this.extractStandardHeaders(l.headers)), this.configuration.apiErrors.validCustomHeaders && 0 !== this.configuration.apiErrors.validCustomHeaders.length && (p.customRequestHeaders = this.extractCustomHeaders(o.headers), p.customResponseHeaders = this.extractCustomHeaders(l.headers)), this.isValidUrl(a, this.configuration.apiErrors.validUrls) ? (this.configuration.apiErrors.collectQueryParam && c && (p.queryParameters = c), this.configuration.apiErrors.collectRequestBody && this.isValidBodyType(p.standardRequestHeaders) ? (d = p, [4, o.text()]) : [3, 6]) : [3, 8];
                            case 5:
                                d.requestBody = y.sent(), y.label = 6;
                            case 6:
                                return this.configuration.apiErrors.collectResponseBody && this.isValidBodyType(p.standardResponseHeaders) ? (f = p, [4, l.text()]) : [3, 8];
                            case 7:
                                f.responseBody = y.sent(), y.label = 8;
                            case 8:
                                return csArray.prototype.forEach.call(this.callbacks, (function(t) {
                                    return t(p)
                                })), [2]
                        }
                    }))
                }))
            }, e.prototype.extractStandardHeaders = function(t) {
                var e = this,
                    i = {};
                return t.forEach((function(t, r) {
                    e.validHeaders.isValidStandardHeader(r) && t && (i[r] = csString.prototype.trim.call(t))
                })), i
            }, e.prototype.extractCustomHeaders = function(t) {
                var e = this,
                    i = {};
                return t.forEach((function(t, r) {
                    e.validHeaders.isValidCustomHeader(r) && t && (i[r] = csString.prototype.trim.call(t))
                })), i
            }, e.prototype.isNetworkError = function(t) {
                return t instanceof TypeError
            }, e.prototype.isAbortedRequestError = function(t) {
                return t instanceof DOMException && "AbortError" === t.name
            }, e.prototype.isTrustTokenOperationError = function(t) {
                return t instanceof DOMException && csArray.prototype.some.call(e.TRUST_TOKEN_OPERATION_ERROR_NAMES, (function(e) {
                    return e === t.name
                }))
            }, e.TRUST_TOKEN_OPERATION_ERROR_NAMES = ["NoModificationAllowedError", "InvalidStateError", "OperationError"], q([zt("FetchRequestTracker.interceptFetch")], e.prototype, "interceptFetch", null), e
        }(us);
    (rs || (rs = {})).transformEvent = function(t, e, i) {
        return function(t, e) {
            return Cr(e) && (e.tgt = "".concat(t).concat(ds).concat(e.tgt)), void 0 !== e.tgtHM && (e.tgtHM = "".concat(t).concat(ds).concat(e.tgtHM)),
                function(t) {
                    return void 0 !== t.tgtLk
                }(e) && (e.tgtLk = "".concat(t).concat(ds).concat(e.tgtLk)), e
        }(e, function(t, e) {
            if (void 0 !== (r = e).x && void 0 !== r.y) {
                var i = t.getBoundingClientRect();
                e.x = Math.round(i.left + e.x + qe.windowOffsetX()), e.y = Math.round(i.top + e.y + qe.windowOffsetY())
            }
            var r;
            return e
        }(t, i))
    }, (ns || (ns = {})).transformCommandsBatch = function(t, e) {
        return {
            iframePath: e.iframePath ? "".concat(t).concat(ds).concat(e.iframePath) : t,
            commands: e.commands
        }
    }, (os || (os = {})).transformEmerchandisingMessage = function(t, e) {
        if (0 === e.products.length) return e;
        var i = csArray.prototype.map.call(e.products, (function(e) {
            return z(z({}, e), {
                targetPath: "".concat(t).concat(ds).concat(e.targetPath)
            })
        }));
        return z(z({}, e), {
            products: i
        })
    };
    var hs, ds = "|iframe|",
        fs = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return V(e, t), e.prototype.emitIframeEvent = function(t, e, i, r) {
                switch (i) {
                    case Et.ChildLogMessage:
                        this.logMessage(r);
                        break;
                    case Et.AnalysisEvent:
                        var n = rs.transformEvent(t, e, r);
                        this.emitIframeAnalysisEvent(n);
                        break;
                    case Et.JavascriptError:
                        this.emitIframeJavascriptError(r);
                        break;
                    case Et.ApiError:
                        this.emitIframeApiError(r);
                        break;
                    case Et.EmerchandisingMessage:
                        var o = os.transformEmerchandisingMessage(e, r);
                        this.emitIframeEmerchandisingMessage(o);
                        break;
                    case Et.Commands:
                        var s = ns.transformCommandsBatch(e, r);
                        this.emitIframeCommands(s);
                        break;
                    case Et.IntegrationCallback:
                        this.emitIframeIntegrationCallback(r);
                        break;
                    default:
                        Vt.error("Parent received unknown data type from iframe : ".concat(csJSON.stringify(r)))
                }
            }, e.prototype.logMessage = function(t) {
                var e = t.message,
                    i = t.errorCode;
                switch (t.level) {
                    case X.debug:
                        Vt.debug(e, i);
                        break;
                    case X.warn:
                        Vt.warn(e, i);
                        break;
                    case X.error:
                        Vt.error(e, i);
                        break;
                    case X.critical:
                        Vt.critical(e, i)
                }
            }, e.prototype.emitIframeAnalysisEvent = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIframeAnalysisEvent && r.onIframeAnalysisEvent(t)
                }
            }, e.prototype.emitIframeJavascriptError = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIframeJavascriptError && r.onIframeJavascriptError(t)
                }
            }, e.prototype.emitIframeApiError = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIframeApiError && r.onIframeApiError(t)
                }
            }, e.prototype.emitIframeEmerchandisingMessage = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIframeEmerchandisingMessage && r.onIframeEmerchandisingMessage(t)
                }
            }, e.prototype.emitIframeCommands = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIframeCommands && r.onIframeCommands(t)
                }
            }, e.prototype.emitIframeIntegrationCallback = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIframeIntegrationCallback && r.onIframeIntegrationCallback(t)
                }
            }, e
        }(vo);
    ! function(t) {
        t.COMPRESSION_DISABLED = "compressionDisabled"
    }(hs || (hs = {}));
    var ys = function() {
            function t() {}
            return t.init = function(e, i, r) {
                var n = e.cookielessTrackingEnabled ? r.getItem("_cs_debug") : i.get("_cs_debug");
                n && (t.debugFlags = csString.prototype.split.call(n, "."))
            }, t.isCompressionDisabled = function() {
                return -1 !== csArray.prototype.indexOf.call(t.debugFlags, hs.COMPRESSION_DISABLED)
            }, t.debugFlags = [], t
        }(),
        vs = function(t) {
            function e(e, i) {
                var r = t.call(this, i) || this;
                return r.compressionFactory = e, r.worker = r.tryCreateCompressionWorker(), r.callbacks = {}, r.callbackId = 0, r._compressSync = e(), r
            }
            return V(e, t), e.prototype.isSupported = function() {
                return !!this.worker
            }, e.prototype.compress = function(t, e, i) {
                if (this.isSupported()) {
                    var r = this.getNewCallbackId();
                    this.callbacks[r] = i, this.worker.postMessage(["CS_WORKER_SIGNATURE", t, e, r])
                }
            }, e.prototype.compressSync = function(t) {
                return this._compressSync("base64", t)
            }, e.prototype.handleWorkerMessage = function(t) {
                var e = t.data,
                    i = e[0],
                    r = e[1],
                    n = e[2];
                "CS_WORKER_SIGNATURE" === i && (this.callbacks[r](n), delete this.callbacks[r])
            }, e.prototype.getNewCallbackId = function() {
                return this.callbackId += 1
            }, e.prototype.tryCreateCompressionWorker = function() {
                try {
                    var t = csArray.prototype.join.call(["\nvar WORKER_SIGNATURE = ".concat(csJSON.stringify("CS_WORKER_SIGNATURE"), ";"), "var compress = (".concat(this.compressionFactory.toString(), ")();"), "(".concat(ms.toString(), ")()\n\n//compression algo")], "\n");
                    return this.createWorker(t)
                } catch (t) {
                    return null
                }
            }, e.prototype.createWorker = function(t) {
                var e = this,
                    i = window.csURL || window.webkitURL,
                    r = window.Blob,
                    n = window.Worker;
                if (!i || !r || !n) return null;
                var o = new r([t], {
                        type: "application/javascript"
                    }),
                    s = new n(i.createObjectURL(o));
                return s.onerror = function(t) {
                    return e.handleWorkerError(t)
                }, s.onmessage = function(t) {
                    return e.handleWorkerMessage(t)
                }, s
            }, e.prototype.handleWorkerError = function(t) {
                var e = "WorkerError: ".concat(t.message ? t.message : "No message");
                return this.onError(e)
            }, q([zt("Worker message handler")], e.prototype, "handleWorkerMessage", null), e
        }(Me),
        ms = function() {
            self.addEventListener("message", (function(t) {
                var e = t.data,
                    i = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[3];
                if ("CS_WORKER_SIGNATURE" === i) {
                    var s = compress(r, n);
                    self.postMessage(["CS_WORKER_SIGNATURE", o, s])
                }
            }))
        };

    function gs(t) {
        void 0 === t && (t = !1);
        var e = String.fromCharCode,
            i = {
                compressToBase64: function(t) {
                    if (null == t) return "";
                    return n(o(t))
                },
                toBase64: n,
                compressToUint8Array: function(t) {
                    for (var e = o(t), i = new Uint8Array(2 * e.length), r = 0, n = e.length; r < n; r++) {
                        var s = e.charCodeAt(r);
                        i[2 * r] = s >>> 8, i[2 * r + 1] = s % 256
                    }
                    return i
                },
                compress: o
            };
        if (t) return i;
        var r = "".charAt.bind("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");

        function n(t) {
            for (var e, i, n, o, s, a, c, u = "", p = t.charCodeAt.bind(t), l = 0, h = t.length; l < 2 * h;) l % 2 == 0 ? (e = p(l / 2) >> 8, i = 255 & p(l / 2), n = l / 2 + 1 < h ? p(l / 2 + 1) >> 8 : NaN) : (e = 255 & p((l - 1) / 2), (l + 1) / 2 < h ? (i = p((l + 1) / 2) >> 8, n = 255 & p((l + 1) / 2)) : i = n = NaN), l += 3, o = e >> 2, s = (3 & e) << 4 | i >> 4, a = (15 & i) << 2 | n >> 6, c = 63 & n, isNaN(i) ? a = c = 64 : isNaN(n) && (c = 64), u = u + r(o) + r(s) + r(a) + r(c);
            return u
        }

        function o(t) {
            if (null == t) return "";
            var i, r, n, o = {},
                s = {},
                a = "",
                c = "",
                u = "",
                p = 2,
                l = 3,
                h = 2,
                d = "",
                f = 0,
                y = 0,
                v = Object.prototype.hasOwnProperty,
                m = function() {
                    if (v.call(s, u)) {
                        if (u.charCodeAt(0) < 256) {
                            for (i = 0; i < h; i++) f <<= 1, 15 == y ? (y = 0, d += e(f), f = 0) : y++;
                            for (r = u.charCodeAt(0), i = 0; i < 8; i++) f = f << 1 | 1 & r, 15 == y ? (y = 0, d += e(f), f = 0) : y++, r >>= 1
                        } else {
                            for (r = 1, i = 0; i < h; i++) f = f << 1 | r, 15 == y ? (y = 0, d += e(f), f = 0) : y++, r = 0;
                            for (r = u.charCodeAt(0), i = 0; i < 16; i++) f = f << 1 | 1 & r, 15 == y ? (y = 0, d += e(f), f = 0) : y++, r >>= 1
                        }
                        0 == --p && (p = Math.pow(2, h), h++), delete s[u]
                    } else
                        for (r = o[u], i = 0; i < h; i++) f = f << 1 | 1 & r, 15 == y ? (y = 0, d += e(f), f = 0) : y++, r >>= 1;
                    0 == --p && (p = Math.pow(2, h), h++)
                };
            for (n = 0; n < t.length; n += 1) a = t.charAt(n), v.call(o, a) || (o[a] = l++, s[a] = !0), c = u + a, v.call(o, c) ? u = c : (m(), o[c] = l++, u = String(a));
            for ("" !== u && m(), r = 2, i = 0; i < h; i++) f = f << 1 | 1 & r, 15 == y ? (y = 0, d += e(f), f = 0) : y++, r >>= 1;
            for (;;) {
                if (f <<= 1, 15 == y) {
                    d += e(f);
                    break
                }
                y++
            }
            return d
        }
        return function(t, e) {
            return "base64" === t ? i.compressToBase64(e) : i.compressToUint8Array(e)
        }
    }
    var Ss, Es, Cs = function(t) {
            function e(e) {
                var i = t.call(this, gs, e) || this;
                return i.algorithm = "lzstring", i
            }
            return V(e, t), e
        }(vs),
        Ts = function() {
            function t() {}
            return t.create = function(t) {
                return this.instance ? this.instance : ys.isCompressionDisabled() ? new Le(t) : this.instance = new Cs(t)
            }, t
        }(),
        Rs = function() {
            function t(t) {
                this.pii = t, this.urlMaskingPatterns = []
            }
            return t.prototype.addUrlMaskingPattern = function(e) {
                for (var i = [], r = 0, n = csString.prototype.split.call(e, "/"); r < n.length; r++) {
                    var o = n[r];
                    j(o, t.ROUTE_PARAMETER_START) ? csArray.prototype.push.call(i, {
                        key: o,
                        value: "CS_ANONYMIZED_".concat(csString.prototype.toUpperCase.call(csString.prototype.slice.call(o, 1)))
                    }) : csArray.prototype.push.call(i, {
                        key: o,
                        value: null
                    })
                }
                csArray.prototype.push.call(this.urlMaskingPatterns, i)
            }, t.prototype.anonymize = function(t) {
                return z(z({}, t), {
                    url: this.anonymizeUrl(t.url)
                })
            }, t.prototype.anonymizeUrl = function(t) {
                return this.maskUrl(this.pii.anonymize(this.removeQueryString(t)))
            }, t.prototype.maskUrl = function(t) {
                for (var e = csString.prototype.split.call(t, "/"), i = 0, r = this.urlMaskingPatterns; i < r.length; i++) {
                    var n = r[i],
                        o = this.getAnonymizedUrl(e, n);
                    if (null !== o) return o
                }
                return t
            }, t.prototype.getAnonymizedUrl = function(e, i) {
                if (e.length < i.length) return null;
                for (var r = "", n = 0; n < e.length; n += 1)
                    if (n >= i.length) r += "".concat(e[n], "/");
                    else if (j(i[n].key, t.ROUTE_PARAMETER_START)) r += "".concat(i[n].value, "/");
                else {
                    if (e[n] !== i[n].key) return null;
                    r += "".concat(e[n], "/")
                }
                return csString.prototype.slice.call(r, 0, -1)
            }, t.prototype.removeQueryString = function(t) {
                var e = csString.prototype.indexOf.call(t, "?");
                return -1 !== e ? csString.prototype.slice.call(t, 0, e + 1) : t
            }, t.ROUTE_PARAMETER_START = ":", t
        }(),
        bs = function() {
            function t(t, e) {
                this.pii = t, this.urlService = e
            }
            return t.prototype.anonymize = function(t) {
                return It(t.message) && (t.message = this.anonymiseErrorValue(t.message), t.message = this.pii.anonymize(t.message)), It(t.filename) && (t.filename = this.pii.anonymize(this.urlService.computeOverriddenUrl(t.filename))), t
            }, t.prototype.anonymiseErrorValue = function(t) {
                return csString.prototype.replace.call(t, /(value\s*=\s*".*"|value\s*=\s*'.*')/, "value='".concat("CS_ANONYMIZED_VALUE", "'"))
            }, t
        }(),
        ws = function() {
            function t() {}
            return t.prototype.setItem = function(t, e) {
                window.sessionStorage.setItem(t, e)
            }, t.prototype.getItem = function(t) {
                return window.sessionStorage.getItem(t)
            }, t.prototype.removeItem = function(t) {
                window.sessionStorage.removeItem(t)
            }, t
        }(),
        As = function() {
            function t() {}
            return t.prototype.setItem = function(t, e) {
                window.localStorage.setItem(t, e)
            }, t.prototype.getItem = function(t) {
                return window.localStorage.getItem(t)
            }, t.prototype.removeItem = function(t) {
                window.localStorage.removeItem(t)
            }, t
        }(),
        Is = ["visit", 2],
        ks = ["page", 3],
        Ps = ["nextPageOnly", 4],
        Ns = function() {
            function t(t, e) {
                this.pii = t, this.storage = e, this.customVariablesPage = {}, this.customVariablesNextPageOnly = {}
            }
            return t.prototype.set = function(t, e, i, r) {
                var n, o;
                if (t > 0 && Nt(e) && Nt(i)) {
                    var s = this.pii.anonymize("".concat(It(e) ? e : csString(e))),
                        a = this.pii.anonymize("".concat(It(i) ? i : csString(i)));
                    if (n = [s.slice(0, 512), a.slice(0, 255)], o = "" !== i, !Pt(r) || csArray.prototype.indexOf.call(Is, r) >= 0) {
                        var c = this.getCustomVariablesSession();
                        o ? c[t] = n : delete c[t], this.setCustomVariableSession(c)
                    }(!Pt(r) || csArray.prototype.indexOf.call(ks, r) >= 0) && (o ? this.customVariablesPage[t] = n : delete this.customVariablesPage[t]), Pt(r) && csArray.prototype.indexOf.call(Ps, r) >= 0 && (o ? this.customVariablesNextPageOnly[t] = n : delete this.customVariablesNextPageOnly[t])
                }
            }, t.prototype.getCustomVariablesSession = function() {
                var t = this.storage.get();
                if (!t) return {};
                var e = window.JSON.parse(t);
                return null !== e && kt(e) ? e : {}
            }, t.prototype.setCustomVariableSession = function(t) {
                this.storage.set(window.JSON.stringify(t))
            }, t.prototype.removeCustomVariablesSession = function() {
                this.storage.remove()
            }, t.prototype.getRequestParameters = function() {
                var t = this.getCustomVariablesSession();
                for (var e in this.customVariablesNextPageOnly) this.customVariablesNextPageOnly.hasOwnProperty(e) && (this.customVariablesPage[e] = this.customVariablesNextPageOnly[e]);
                for (var e in this.customVariablesPage) this.customVariablesPage.hasOwnProperty(e) && (t[e] = this.customVariablesPage[e]);
                if (window.JSON.stringify(t).length <= 2) return {};
                var i = {
                    cvars: this.getValidCustomVars(t)
                };
                return this.customVariablesPage && window.JSON.stringify(this.customVariablesPage).length > 2 && (i.cvarp = this.getValidCustomVars(this.customVariablesPage)), i
            }, t.prototype.deleteNextPageOnlyCustomVariables = function() {
                if (Object.keys(this.customVariablesNextPageOnly).length > 0)
                    for (var t in this.customVariablesNextPageOnly) this.customVariablesNextPageOnly[t] === this.customVariablesPage[t] && (delete this.customVariablesPage[t], delete this.customVariablesNextPageOnly[t])
            }, t.prototype.getValidCustomVars = function(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e)) {
                        var i = parseInt(e, 10),
                            r = t[e],
                            n = r[0],
                            o = r[1];
                        a = 1, c = 20, (!(At(s = i) && s >= a && s <= c) || n.length > 512 || o.length > 255) && delete t[e]
                    }
                var s, a, c, u = function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                }(t) ? [] : t;
                return window.JSON.stringify(u)
            }, t
        }(),
        Os = ["setCustomVariable"],
        Ms = function() {
            function t(t, e) {
                this.commandsService = t, this.customVariablesService = e
            }
            return t.prototype.init = function() {
                var t = this;
                this.commandsService.register(Os, (function(e, i, r, n) {
                    t.customVariablesService.set(e, i, r, n)
                }))
            }, t.prototype.onAfterArtificialPageView = function() {
                this.customVariablesService.deleteNextPageOnlyCustomVariables()
            }, t.prototype.onAfterNaturalPageView = function() {
                this.customVariablesService.deleteNextPageOnlyCustomVariables()
            }, t.prototype.onOptout = function() {
                this.customVariablesService.removeCustomVariablesSession()
            }, t
        }(),
        Ls = function() {
            function t(t) {
                this.configuration = t, this.validStandardHeadersToLower = ["age", "cache-control", "clear-site-data", "expires", "pragma", "warning", "downlink", "ect", "rtt", "last-modified", "connection", "keep-alive", "accept", "accept-encoding", "accept-language", "expect", "access-control-allow-origin", "access-control-allow-credentials", "access-control-allow-headers", "access-control-allow-methods", "access-control-expose-headers", "access-control-max-age", "access-control-request-headers", "access-control-request-method", "origin", "timing-allow-origin", "content-length", "content-type", "content-encoding", "content-language", "via", "host", "referrer-policy", "user-agent", "allow", "server", "accept-ranges", "range", "if-range", "content-range", "cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection", "sec-fetch-site", "sec-fetch-mode", "sec-fetch-user", "sec-fetch-dest"]
            }
            return t.prototype.isValidStandardHeader = function(t) {
                return -1 !== csArray.prototype.indexOf.call(this.validStandardHeadersToLower, csString.prototype.toLowerCase.call(t))
            }, t.prototype.isValidCustomHeader = function(t) {
                if (!this.configuration.apiErrors.validCustomHeaders) return !1;
                var e = csString.prototype.toLowerCase.call(t);
                return csArray.prototype.some.call(this.configuration.apiErrors.validCustomHeaders, (function(t) {
                    return csString.prototype.toLowerCase.call(t) === e
                }))
            }, t
        }(),
        Ds = function() {
            function t(t, e, i) {
                this.configuration = t, this.cookieChecker = e, this.parentLogContext = i
            }
            return t.prototype.init = function() {
                var t = this;
                window.csPerformance.mark("cs-start-".concat("boot"));
                var e = new mo,
                    i = new ot,
                    r = new ko,
                    n = new Mo(this.configuration, r, i),
                    o = new ss(window.location, i),
                    s = new qt(this.configuration, o, this.cookieChecker);
                s.init();
                var a = new ws,
                    c = new As,
                    u = new Io(window.location, s);
                ys.init(this.configuration, s, a);
                var p = new Qo(this.configuration, s);
                p.init();
                var l, h = Ts.create(Vt.warn);
                if (this.configuration.useMalkaPipeline) {
                    var d = new he(this.configuration.getQuotaServiceUri(), "quota");
                    (l = new lo(this.configuration, h, d, e, u, o)).init()
                } else l = new po(this.configuration, h, u, o);
                var f = new te(this.configuration, s, p, a),
                    y = new ho(f, l),
                    v = new Jt(this.configuration, s, p, a),
                    m = new co(this.configuration, v, y);
                this.parentLogContext.setContext(m, y), l.setVisitorService(m);
                var g = new yo(m, y),
                    S = new re(this.configuration, s, p, a),
                    E = new wo(window.location, S),
                    C = new Ao(E),
                    T = new fo(this.configuration, m, E),
                    R = new fs,
                    b = new Bo,
                    w = new qo(b, R),
                    A = new ne(this.configuration, s, p, a),
                    I = new Ns(i, A),
                    k = new Ms(b, I),
                    P = new Yt(m, y, E, I, this.configuration),
                    N = new ce,
                    O = new ae(N, window.location),
                    M = new zo(this.configuration, P, O),
                    L = new Zo(this.configuration, N);
                p.setStates(P, L);
                var D = new so(this.configuration, m, E, T, g, M, p, u);
                n.init(), D.compute((function(r) {
                    w.init();
                    var n = new as,
                        a = new So(t.configuration, s, c),
                        u = new Ro(t.configuration, a, e),
                        p = new To(b, u),
                        l = new Lo(t.configuration, s, c),
                        d = new Do(e, window.location, l),
                        f = new xo(b, d),
                        v = new es(b, t.configuration),
                        g = new $o(t.configuration, m, y),
                        S = new ts,
                        E = new Ci,
                        T = new Ls(t.configuration),
                        A = new ps(E, T, t.configuration),
                        P = new ls(E, T, t.configuration),
                        N = new cs(A, P),
                        O = new Rs(i),
                        M = new bs(i, o),
                        L = new Jo(S, M, N, O, i, t.configuration, g, R, b, n);
                    (L.init(), window.csPerformance.mark("cs-step2-".concat("boot")), e.addListeners(L), r) ? (e.emitInitTracking(), new oo(g, h, m, y, e, b, w, t.configuration, f, d, p, u, i, o, v, n, S, M, N, O, R, I, k).start()) : new bo(e, b, w, f, d, C, p).start()
                })), window.csPerformance.mark("cs-end-".concat("boot")), window.csPerformance.measure("cs-measure-".concat("boot"), "cs-start-".concat("boot"), "cs-end-".concat("boot"))
            }, t
        }();
    ! function(t) {
        var e, i = {
            loadBundle: function(t) {
                var s = t.source,
                    a = t.data;
                if (n(a)) {
                    var p = function() {
                        var e, i, n, o = r("{domain}/tag/tag.bundle.js?v={version}", a);
                        e = o, i = function() {
                            return s.postMessage("csBundleLoaded", t.origin)
                        }, (n = document.createElement("script")).type = "text/javascript", n.async = !0, n.src = e, n.onload = i, n.charset = "utf-8", document.head.appendChild(n)
                    };
                    e = a.token, u(i.loadBundle), o(t.origin) ? p() : function(t, e) {
                        var i = function(t) {
                                var e = document.createElement("iframe");
                                return e.src = t, e.id = "content-square-bridge", e.setAttribute("style", "display: none !important; visibility: hidden !important;"), e
                            }(r("{domain}/tag/bridge.html?v={version}#{token}", t)),
                            n = function(t) {
                                t.source === i.contentWindow && "TOKEN_VALID" === t.data && (u(n), i.remove(), e())
                            };
                        c(n), document.head.appendChild(i)
                    }(a, p)
                }
            }
        };

        function r(t, e) {
            return csString.prototype.replace.call(csString.prototype.replace.call(csString.prototype.replace.call(t, "{version}", e.version), "{token}", e.token), "{domain}", e.domain)
        }

        function n(t) {
            return t && "csBundleInjection" === t.type && o(t.domain) && a(t.version) && s(t.token)
        }

        function o(t) {
            return /^https?:\/\/[a-zA-Z0-9\.\-]+\.(content-square\.fr|contentsquare\.com)$/.test(t)
        }

        function s(t) {
            return /^[a-zA-Z0-9]+$/.test(t)
        }

        function a(t) {
            return /^[a-zA-Z0-9\.]+$/.test(t)
        }

        function c(t) {
            window.addEventListener("message", t, !1)
        }

        function u(t) {
            window.removeEventListener("message", t, !1)
        }
        t.getToken = function() {
            return e
        }, t.isAuthorizedIncomingMessage = n, t.isAuthorizedDomain = o, t.isAuthorizedToken = s, t.isAuthorizedTagVersion = a, t.isActivable = function() {
            var t = window.opener || window.parent;
            return window !== t && window.addEventListener
        }, t.waitForBundleInjection = function() {
            c(i.loadBundle)
        }, t.listen = c, t.removeListener = u
    }(Ss || (Ss = {})),
    function(t) {
        var e, i = window.opener || window.parent,
            r = [/^https:\/\/app\.contentsquare\.com$/, /^https:\/\/dev-app\.contentsquare\.com$/, /^https:\/\/staging-app\.contentsquare\.com$/, /^https:\/\/.*\.test\.contentsquare\.com$/],
            n = {
                ping: function(t) {
                    "ping" === t.data && o(t.origin) && (e = t.origin, c(n.ping), a(n.insertMessageScript), s("".concat("utils.js", "?cb=").concat((new csDate).getTime())))
                },
                insertMessageScript: u((function(t) {
                    var e = t.data;
                    "string" == typeof e && "ping" !== e && (c(n.insertMessageScript), s(e))
                }))
            };

        function o(t) {
            return csArray.prototype.some.call(r, (function(e) {
                return e.test(t)
            }))
        }

        function s(t, i) {
            var r = document.createElement("script");
            r.type = "text/javascript", r.async = !0;
            var n = csString.prototype.replace.call(e, /^https?:/, "");
            r.src = "".concat(n, "/").concat("tag", "/").concat(t), r.onload = i, r.charset = "utf-8", document.getElementsByTagName("head")[0].appendChild(r)
        }

        function a(t) {
            window.addEventListener("message", t, !1)
        }

        function c(t) {
            window.removeEventListener("message", t, !1)
        }

        function u(t) {
            return function(i) {
                i.origin === e && t(i)
            }
        }
        t.getToken = function() {
            return Ss.getToken()
        }, t.isActivable = function() {
            return window !== i && window.addEventListener
        }, t.isAuthorizedDomain = o, t.waitForConnection = function() {
            a(n.ping), Ss.waitForBundleInjection()
        }, t.listen = a, t.removeListener = c, t.secureListener = u, t.post = function(t) {
            e && i.postMessage(t, e)
        }
    }(Es || (Es = {}));
    var _s = window.CSFrameCommunication || Es,
        xs = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return V(e, t), e.prototype.emitAfterPageViewCallback = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onAfterPageViewCallback && r.onAfterPageViewCallback(t)
                }
            }, e.prototype.emitIntegrationSessionKeyCallback = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIntegrationSessionKeyCallback && r.onIntegrationSessionKeyCallback(t)
                }
            }, e
        }(vo),
        Vs = function() {
            function t(t) {
                this.iframeCommandsSenderService = t
            }
            return t.prototype.init = function() {
                this.iframeCommandsSenderService.register(cr), this.iframeCommandsSenderService.register(Os), this.iframeCommandsSenderService.register(Tn), this.iframeCommandsSenderService.register(Rn), this.iframeCommandsSenderService.register(Cn), this.iframeCommandsSenderService.register(yr), this.iframeCommandsSenderService.register(vr), this.iframeCommandsSenderService.register(mr), this.iframeCommandsSenderService.register(gr), this.iframeCommandsSenderService.register(kn), this.iframeCommandsSenderService.register(Pn), this.iframeCommandsSenderService.register(_o), this.iframeCommandsSenderService.register(Fn), this.iframeCommandsSenderService.register(Gn), this.iframeCommandsSenderService.register(Eo), this.iframeCommandsSenderService.register(Co), this.iframeCommandsSenderService.register(Xo), this.iframeCommandsSenderService.register(Yo)
            }, t.prototype.onStartTracking = function() {
                this.iframeCommandsSenderService.start()
            }, t.prototype.onOptout = function() {
                this.iframeCommandsSenderService.stop()
            }, t
        }(),
        zs = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.commandsService = e, r.iframeChildToParentCommunicationService = i, r.batch = [], r
            }
            return V(e, t), e.prototype.onStart = function() {
                this.commandsBatchReady()
            }, e.prototype.onStop = function() {
                this.batch = []
            }, e.prototype.register = function(t) {
                for (var e = this, i = function(t) {
                        r.commandsService.register([t], (function() {
                            for (var i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r];
                            return e.send(t, i)
                        }))
                    }, r = this, n = 0, o = t; n < o.length; n++) {
                    i(o[n])
                }
            }, e.prototype.send = function(t, e) {
                csArray.prototype.push.call(this.batch, {
                    name: t,
                    params: e
                }), this.isStarted && this.commandsBatchReady()
            }, e.prototype.commandsBatchReady = function() {
                if (0 !== this.batch.length) {
                    var t = {
                        commands: this.batch
                    };
                    this.iframeChildToParentCommunicationService.sendToParent(Et.Commands, t), this.batch = []
                }
            }, q([zt("Commands.iframe.commandsBatch.send")], e.prototype, "send", null), q([Be(), zt("send iframe commands batch")], e.prototype, "commandsBatchReady", null), e
        }(_e),
        qs = function(t) {
            function e(e, i, r) {
                var n = t.call(this) || this;
                return n.configuration = e, n.lifeCycleEventsEmitter = i, n.childLifeCycleEventEmitter = r, n.id = -1, n.parentOrigin = "", n.maxMessagesBuffer = 25, n.messageBuffer = [], n.messageHandler = {
                    boundElement: window,
                    type: "message",
                    listener: function(t) {
                        return n.messagesListener(t)
                    }
                }, n
            }
            return V(e, t), e.prototype.onStart = function() {
                de(this.messageHandler, !1), this.sendDiscovery()
            }, e.prototype.onStop = function() {
                fe(this.messageHandler, !1)
            }, e.prototype.sendToParent = function(t, e) {
                var i = this.buildChildBaseMessage(t, e);
                this.sendMessage(i)
            }, e.prototype.sendDiscovery = function() {
                var t = this.buildChildBaseMessage(Et.Discovery);
                Ct.sendMessage(window.parent, "*", t)
            }, e.prototype.buildChildBaseMessage = function(t, e) {
                var i = Ct.buildBaseMessage(t, St.Child, this.configuration.projectId, this.id);
                return e && (i.content = e), i
            }, e.prototype.sendMessage = function(t) {
                void 0 !== t.id ? Ct.sendMessage(window.parent, this.parentOrigin, t) : this.addMessageToBuffer(t)
            }, e.prototype.messagesListener = function(t) {
                if (Ct.isMessageValid(t, St.Parent, this.configuration.projectId, this.configuration.hostnames)) switch (t.data.type) {
                    case Et.IntegrationCallback:
                        var e = t.data.content;
                        e.initiator === gt.AfterPageView ? this.childLifeCycleEventEmitter.emitAfterPageViewCallback(e) : e.initiator === gt.GetSessionKey ? this.childLifeCycleEventEmitter.emitIntegrationSessionKeyCallback(e) : Vt.warn("Iframe child (".concat(this.id, ") received unknown IntegrationCallback type from parent (").concat(t.origin, ") : ").concat(csJSON.stringify(t.data)));
                        break;
                    case Et.Stop:
                        this.lifeCycleEventsEmitter.emitOptout();
                        break;
                    case Et.Discovery:
                        if (!At(t.data.id) || t.data.id < 0) return void Vt.warn("Iframe child (".concat(this.id, ") received discovery without valid id from parent (").concat(t.origin, ") : ").concat(csJSON.stringify(t.data)));
                        this.id = t.data.id, this.parentOrigin = t.origin, this.sendAllBufferedMessages();
                        break;
                    default:
                        Vt.warn("Iframe child (".concat(this.id, ") received unknown data type from parent (").concat(t.origin, ") : ").concat(csJSON.stringify(t.data)))
                }
            }, e.prototype.addMessageToBuffer = function(t) {
                this.messageBuffer.length < this.maxMessagesBuffer && csArray.prototype.push.call(this.messageBuffer, t)
            }, e.prototype.sendAllBufferedMessages = function() {
                for (var t = 0, e = this.messageBuffer; t < e.length; t++) {
                    var i = e[t];
                    i.id = this.id, Ct.sendMessage(window.parent, this.parentOrigin, i)
                }
                this.messageBuffer = []
            }, e
        }(_e),
        Us = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.apiErrorsTracker = e, r.iframeChildToParentCommunicationService = i, r
            }
            return V(e, t), e.prototype.init = function() {
                this.apiErrorsTracker.init()
            }, e.prototype.onStart = function() {
                var t = this;
                this.apiErrorsTracker.subscribe(e.SERVICE_IDENTIFIER, (function(e) {
                    return t.processEvent(e)
                }))
            }, e.prototype.onStop = function() {
                this.apiErrorsTracker.unsubscribe(e.SERVICE_IDENTIFIER)
            }, e.prototype.processEvent = function(t) {
                this.isStarted && this.iframeChildToParentCommunicationService.sendToParent(Et.ApiError, t)
            }, e.SERVICE_IDENTIFIER = "IframeApiErrorsService", e
        }(_e),
        Bs = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.javaScriptErrorsTracker = e, r.iframeChildToParentCommunicationService = i, r
            }
            return V(e, t), e.prototype.onStart = function() {
                var t = this;
                this.javaScriptErrorsTracker.subscribe(e.SERVICE_IDENTIFIER, (function(e) {
                    return t.processEvent(e)
                }))
            }, e.prototype.onStop = function() {
                this.javaScriptErrorsTracker.unsubscribe(e.SERVICE_IDENTIFIER)
            }, e.prototype.processEvent = function(t) {
                this.isStarted && this.iframeChildToParentCommunicationService.sendToParent(Et.JavascriptError, t)
            }, e.SERVICE_IDENTIFIER = "IframeJavaScriptErrorsService", e
        }(_e),
        Hs = function() {
            function t(t, e, i, r) {
                this.javaScriptErrorsTracker = t, this.apiErrorsTracker = e, this.configuration = i, this.iframeChildToParentCommunicationService = r
            }
            return t.prototype.init = function() {
                this.iframeJavaScriptErrorsService = new Bs(this.javaScriptErrorsTracker, this.iframeChildToParentCommunicationService), this.apiErrorsTracker.excludeDomains([Uo.CONTENTSQUARE, Uo.CLICKTALE, Uo.FAKE_TRACKER]), this.iframeApiErrorsService = new Us(this.apiErrorsTracker, this.iframeChildToParentCommunicationService), this.iframeApiErrorsService.init()
            }, t.prototype.onStartTracking = function() {
                this.configuration.jsErrorsEnabled && this.iframeJavaScriptErrorsService.start(), this.configuration.apiErrors.enabled && this.iframeApiErrorsService.start()
            }, t.prototype.onOptout = function() {
                this.iframeJavaScriptErrorsService.stop(), this.iframeApiErrorsService.stop()
            }, t
        }(),
        Fs = function() {
            function t(t) {
                this.iframeChildToParentCommunicationService = t
            }
            return t.prototype.onStartTracking = function() {
                this.iframeChildToParentCommunicationService.start()
            }, t.prototype.onOptout = function() {
                this.iframeChildToParentCommunicationService.stop()
            }, t
        }(),
        Gs = function() {
            function t(t, e, i) {
                this.iframeParentToChildrenCommunicationService = t, this.iframeEventsEmitter = e, this.iframeChildToParentCommunicationService = i
            }
            return t.prototype.init = function() {
                var t = this;
                this.iframeParentToChildrenCommunicationService.onChildMessage((function(e, i, r, n) {
                    return t.iframeEventsEmitter.emitIframeEvent(e, i, r, n)
                }))
            }, t.prototype.onStartTracking = function() {
                this.iframeParentToChildrenCommunicationService.start()
            }, t.prototype.onOptout = function() {
                this.iframeParentToChildrenCommunicationService.stop()
            }, t.prototype.onIframeAnalysisEvent = function(t) {
                this.iframeChildToParentCommunicationService.sendToParent(Et.AnalysisEvent, t)
            }, t.prototype.onIframeJavascriptError = function(t) {
                this.iframeChildToParentCommunicationService.sendToParent(Et.JavascriptError, t)
            }, t.prototype.onIframeApiError = function(t) {
                this.iframeChildToParentCommunicationService.sendToParent(Et.ApiError, t)
            }, t.prototype.onIframeEmerchandisingMessage = function(t) {
                this.iframeChildToParentCommunicationService.sendToParent(Et.EmerchandisingMessage, t)
            }, t.prototype.onIframeCommands = function(t) {
                this.iframeChildToParentCommunicationService.sendToParent(Et.Commands, t)
            }, t.prototype.onIframeIntegrationCallback = function(t) {
                this.iframeChildToParentCommunicationService.sendToParent(Et.IntegrationCallback, t)
            }, t.prototype.onAfterPageViewCallback = function(t) {
                this.iframeParentToChildrenCommunicationService.sendToChildren(Et.IntegrationCallback, t)
            }, t.prototype.onIntegrationSessionKeyCallback = function(t) {
                this.iframeParentToChildrenCommunicationService.sendToChildren(Et.IntegrationCallback, t)
            }, t
        }(),
        js = function(t) {
            function e(e, i, r) {
                var n = t.call(this) || this;
                return n.analysisEventsTracker = e, n.gestureTracker = i, n.iframeChildToParentCommunicationService = r, n
            }
            return V(e, t), e.prototype.init = function() {
                var t = this;
                this.analysisEventsTracker.onEvent((function(e) {
                    return t.processEvent(e)
                })), this.gestureTracker.onEvent((function(e) {
                    return t.processEvent(e)
                }))
            }, e.prototype.onStart = function() {
                this.analysisEventsTracker.start(), this.gestureTracker.start()
            }, e.prototype.onStop = function() {
                this.analysisEventsTracker.stop(), this.gestureTracker.stop()
            }, e.prototype.processEvent = function(t) {
                this.isStarted && t.type !== Hi.RESIZE && this.iframeChildToParentCommunicationService.sendToParent(Et.AnalysisEvent, t)
            }, e
        }(_e),
        Ks = function() {
            function t(t, e, i, r) {
                this.configuration = t, this.projectPathComputation = e, this.selector = i, this.iframeChildToParentCommunicationService = r
            }
            return t.prototype.init = function() {
                var t = new Lr(this.configuration, this.projectPathComputation, this.selector),
                    e = new Ar(this.configuration, this.projectPathComputation, new no(Vt));
                this.iframeAnalysisEventsService = new js(t, e, this.iframeChildToParentCommunicationService), this.iframeAnalysisEventsService.init()
            }, t.prototype.onStartTracking = function() {
                this.iframeAnalysisEventsService.start()
            }, t.prototype.onOptout = function() {
                this.iframeAnalysisEventsService.stop()
            }, t
        }(),
        Ws = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return V(e, t), e
        }(Ln),
        Ys = function() {
            function t(t, e, i) {
                this.urlService = t, this.eMerchandisingTracker = e, this.iframeChildToParentCommunicationService = i, this.products = []
            }
            return t.prototype.collect = function() {
                this.products = this.eMerchandisingTracker.collectProducts(), this.targetUrl = this.urlService.getUrl(), this.sendEMerchandisingData()
            }, t.prototype.clearProducts = function() {
                this.products = []
            }, t.prototype.sendEMerchandisingData = function() {
                var t = {
                    targetUrl: this.targetUrl,
                    windowWidth: qe.windowWidth(),
                    windowHeight: qe.windowHeight(),
                    products: this.products
                };
                this.iframeChildToParentCommunicationService.sendToParent(Et.EmerchandisingMessage, t)
            }, t
        }(),
        Xs = function() {
            function t(t, e, i) {
                this.configuration = t, this.urlService = e, this.iframeChildToParentCommunicationService = i
            }
            return t.prototype.init = function() {
                var t = new Ws(this.configuration);
                this.iframeEmerchandisingService = new Ys(this.urlService, t, this.iframeChildToParentCommunicationService)
            }, t.prototype.onStartTracking = function() {
                this.iframeEmerchandisingService.clearProducts(), this.iframeEmerchandisingService.collect()
            }, t
        }(),
        Js = function() {
            function t(t) {
                this.iframeChildToParentCommunicationService = t, this.registeredCallbacks = {}
            }
            return t.prototype.handleCommand = function(t) {
                Ot(t) && this.registerCallback(t)
            }, t.prototype.executeRegisteredCallbacks = function(t) {
                var e = t.trackingContext;
                if (e)
                    if (t.callbackId) {
                        var i = this.registeredCallbacks[t.callbackId];
                        i && this.executeAsync(i, e)
                    } else
                        for (var r in this.registeredCallbacks) this.executeAsync(this.registeredCallbacks[r], e)
            }, t.prototype.registerCallback = function(t) {
                var e = W.integer(),
                    i = {
                        callbackId: e,
                        initiator: gt.AfterPageView
                    };
                this.registeredCallbacks[e] = t, this.iframeChildToParentCommunicationService.sendToParent(Et.IntegrationCallback, i)
            }, t.prototype.executeAsync = function(t, e) {
                setTimeout((function() {
                    t(e)
                }))
            }, t
        }(),
        Qs = function() {
            function t(t) {
                this.iframeChildToParentCommunicationService = t, this.pendingCallbacks = {}
            }
            return t.prototype.handleCommand = function(t) {
                kt(t) && Ot(t.callback) && this.addPendingCallback(t.callback)
            }, t.prototype.executePendingCallbacks = function(t) {
                var e = t.trackingContext,
                    i = t.callbackId;
                if (i && e) {
                    var r = this.pendingCallbacks[i];
                    r && (delete this.pendingCallbacks[i], this.executeAsync(r, e.sessionKey))
                }
            }, t.prototype.addPendingCallback = function(t) {
                var e = W.integer(),
                    i = {
                        callbackId: e,
                        initiator: gt.GetSessionKey
                    };
                this.pendingCallbacks[e] = t, this.iframeChildToParentCommunicationService.sendToParent(Et.IntegrationCallback, i)
            }, t.prototype.executeAsync = function(t, e) {
                setTimeout((function() {
                    t(e)
                }))
            }, t
        }(),
        Zs = function() {
            function t(t, e) {
                this.commandsService = t, this.iframeChildToParentCommunicationService = e
            }
            return t.prototype.init = function() {
                var t = this;
                this.iframeAfterPageViewService = new Js(this.iframeChildToParentCommunicationService), this.iframeGetSessionKeyService = new Qs(this.iframeChildToParentCommunicationService), this.commandsService.register(ir, (function(e) {
                    t.iframeAfterPageViewService.handleCommand(e)
                })), this.commandsService.register(rr, (function(e) {
                    return t.iframeGetSessionKeyService.handleCommand(e)
                }))
            }, t.prototype.onAfterPageViewCallback = function(t) {
                this.iframeAfterPageViewService.executeRegisteredCallbacks(t)
            }, t.prototype.onIntegrationSessionKeyCallback = function(t) {
                this.iframeGetSessionKeyService.executePendingCallbacks(t)
            }, t
        }(),
        $s = function() {
            function t(t, e, i, r, n) {
                var o = this;
                this.childLifeCycleEventsEmitter = t, this.lifeCycleEventsEmitter = e, this.configuration = i, this.iframeChildToParentCommunicationService = r, this.commandsService = n, this.startDataCollection = function() {
                    o.commandsService.start(), o.loadTracker.start()
                }
            }
            return t.prototype.start = function() {
                var t = this,
                    e = new wn(L, this.configuration),
                    i = new An(e),
                    r = new Ks(this.configuration, e, i, this.iframeChildToParentCommunicationService),
                    n = new Fs(this.iframeChildToParentCommunicationService);
                if (this.configuration.eMerchandisingEnabled) {
                    var o = new ot,
                        s = new ss(window.location, o),
                        a = new Xs(this.configuration, s, this.iframeChildToParentCommunicationService);
                    this.lifeCycleEventsEmitter.addListeners(a), a.init()
                }
                var c = new Zs(this.commandsService, this.iframeChildToParentCommunicationService);
                this.childLifeCycleEventsEmitter.addListeners(c), c.init();
                var u = new to(this.configuration),
                    p = new fs,
                    l = new Gs(u, p, this.iframeChildToParentCommunicationService);
                p.addListeners(l), this.childLifeCycleEventsEmitter.addListeners(l), this.lifeCycleEventsEmitter.addListeners(n, l, r), l.init(), r.init(), this.loadTracker = new In, this.loadTracker.onLoad((function() {
                    t.lifeCycleEventsEmitter.emitStartTracking()
                })), this.startDataCollection()
            }, t
        }(),
        ta = function() {
            function t(t) {
                this.configuration = t
            }
            return t.prototype.init = function() {
                var t = new mo,
                    e = new xs,
                    i = new qs(this.configuration, t, e),
                    r = new Bo,
                    n = new zs(r, i),
                    o = new Vs(n);
                o.init();
                var s = new ts,
                    a = new Ls(this.configuration),
                    c = new Ci,
                    u = new ps(c, a, this.configuration),
                    p = new ls(c, a, this.configuration),
                    l = new cs(u, p),
                    h = new Hs(s, l, this.configuration, i);
                h.init(), t.addListeners(o, h), t.emitInitTracking(), new $s(e, t, this.configuration, i, r).start()
            }, t
        }(),
        ea = function() {
            function t(t, e, i) {
                this.configuration = t, this.iframeContext = e, this.parentLogContext = i
            }
            return t.prototype.start = function() {
                var t, e;
                if (!window.UXAnalytics) {
                    var i = new Ut(this.iframeContext, this.configuration);
                    i.init();
                    var r = new Wt(this.configuration, i);
                    if (this.iframeContext.isTopWindowTracker() && r.canTrack()) {
                        if ((null === (t = window.CSProtectnativeFunctionsLogs) || void 0 === t ? void 0 : t.Warning) && Vt.warn("protectNativeFunctions failed: ".concat(window.CSProtectnativeFunctionsLogs.Warning)), null === (e = window.CSProtectnativeFunctionsLogs) || void 0 === e ? void 0 : e.Critical) return void Vt.error("protectNativeFunctions failed: ".concat(window.CSProtectnativeFunctionsLogs.Critical));
                        new Ds(this.configuration, i, this.parentLogContext).init()
                    } else if (!this.iframeContext.isTopWindowTracker() && r.canTrackInIframe()) {
                        new ta(this.configuration).init()
                    }
                    window.UXAnalytics = {}, !window.CSFrameCommunication && _s.isActivable() && (window.CSFrameCommunication = _s, _s.waitForConnection())
                }
            }, q([zt("main.start")], t.prototype, "start", null), t
        }();
    try {
        window.csPerformance.mark("cs-start-tag");
        var ia = new Z(window.CS_CONF);
        window._uxa = window._uxa || [], ia.processOptionOverrides(window._uxa);
        var ra = new $(window, ia);
        ra.init();
        var na = new bt;
        if (ra.isTopWindowTracker()) {
            var oa = new dt(ia, na);
            Vt.setStrategy(oa)
        } else {
            var sa = new Rt(ia);
            Vt.setStrategy(sa)
        }
        new ea(ia, ra, na).start()
    } catch (t) {}
}]);