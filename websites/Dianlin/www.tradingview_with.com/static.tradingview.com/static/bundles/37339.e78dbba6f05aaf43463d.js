(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [37339], {
        77034: function(e, t, r) {
            var n;
            n = function() {
                var e = !0;

                function t(t) {
                    function r(e) {
                        var r = t.match(e);
                        return r && r.length > 1 && r[1] || ""
                    }

                    function n(e) {
                        var r = t.match(e);
                        return r && r.length > 1 && r[2] || ""
                    }
                    var i, s = r(/(ipod|iphone|ipad)/i).toLowerCase(),
                        a = !/like android/i.test(t) && /android/i.test(t),
                        u = /nexus\s*[0-6]\s*/i.test(t),
                        c = !u && /nexus\s*[0-9]+/i.test(t),
                        f = /CrOS/.test(t),
                        l = /silk/i.test(t),
                        d = /sailfish/i.test(t),
                        p = /tizen/i.test(t),
                        v = /(web|hpw)(o|0)s/i.test(t),
                        m = /windows phone/i.test(t),
                        h = (/SamsungBrowser/i.test(t), !m && /windows/i.test(t)),
                        y = !s && !l && /macintosh/i.test(t),
                        b = !a && !d && !p && !v && /linux/i.test(t),
                        w = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
                        g = r(/version\/(\d+(\.\d+)?)/i),
                        k = /tablet/i.test(t) && !/tablet pc/i.test(t),
                        _ = !k && /[^-]mobi/i.test(t),
                        O = /xbox/i.test(t);
                    /opera/i.test(t) ? i = {
                        name: "Opera",
                        opera: e,
                        version: g || r(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
                    } : /opr\/|opios/i.test(t) ? i = {
                        name: "Opera",
                        opera: e,
                        version: r(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || g
                    } : /SamsungBrowser/i.test(t) ? i = {
                        name: "Samsung Internet for Android",
                        samsungBrowser: e,
                        version: g || r(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
                    } : /Whale/i.test(t) ? i = {
                        name: "NAVER Whale browser",
                        whale: e,
                        version: r(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /MZBrowser/i.test(t) ? i = {
                        name: "MZ Browser",
                        mzbrowser: e,
                        version: r(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /coast/i.test(t) ? i = {
                        name: "Opera Coast",
                        coast: e,
                        version: g || r(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
                    } : /focus/i.test(t) ? i = {
                        name: "Focus",
                        focus: e,
                        version: r(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /yabrowser/i.test(t) ? i = {
                        name: "Yandex Browser",
                        yandexbrowser: e,
                        version: g || r(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
                    } : /ucbrowser/i.test(t) ? i = {
                        name: "UC Browser",
                        ucbrowser: e,
                        version: r(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /mxios/i.test(t) ? i = {
                        name: "Maxthon",
                        maxthon: e,
                        version: r(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /epiphany/i.test(t) ? i = {
                        name: "Epiphany",
                        epiphany: e,
                        version: r(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /puffin/i.test(t) ? i = {
                        name: "Puffin",
                        puffin: e,
                        version: r(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
                    } : /sleipnir/i.test(t) ? i = {
                        name: "Sleipnir",
                        sleipnir: e,
                        version: r(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /k-meleon/i.test(t) ? i = {
                        name: "K-Meleon",
                        kMeleon: e,
                        version: r(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
                    } : m ? (i = {
                        name: "Windows Phone",
                        osname: "Windows Phone",
                        windowsphone: e
                    }, w ? (i.msedge = e, i.version = w) : (i.msie = e, i.version = r(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? i = {
                        name: "Internet Explorer",
                        msie: e,
                        version: r(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                    } : f ? i = {
                        name: "Chrome",
                        osname: "Chrome OS",
                        chromeos: e,
                        chromeBook: e,
                        chrome: e,
                        version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                    } : /edg([ea]|ios)/i.test(t) ? i = {
                        name: "Microsoft Edge",
                        msedge: e,
                        version: w
                    } : /vivaldi/i.test(t) ? i = {
                        name: "Vivaldi",
                        vivaldi: e,
                        version: r(/vivaldi\/(\d+(\.\d+)?)/i) || g
                    } : d ? i = {
                        name: "Sailfish",
                        osname: "Sailfish OS",
                        sailfish: e,
                        version: r(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                    } : /seamonkey\//i.test(t) ? i = {
                        name: "SeaMonkey",
                        seamonkey: e,
                        version: r(/seamonkey\/(\d+(\.\d+)?)/i)
                    } : /firefox|iceweasel|fxios/i.test(t) ? (i = {
                        name: "Firefox",
                        firefox: e,
                        version: r(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
                    }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (i.firefoxos = e, i.osname = "Firefox OS")) : l ? i = {
                        name: "Amazon Silk",
                        silk: e,
                        version: r(/silk\/(\d+(\.\d+)?)/i)
                    } : /phantom/i.test(t) ? i = {
                        name: "PhantomJS",
                        phantom: e,
                        version: r(/phantomjs\/(\d+(\.\d+)?)/i)
                    } : /slimerjs/i.test(t) ? i = {
                        name: "SlimerJS",
                        slimer: e,
                        version: r(/slimerjs\/(\d+(\.\d+)?)/i)
                    } : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? i = {
                        name: "BlackBerry",
                        osname: "BlackBerry OS",
                        blackberry: e,
                        version: g || r(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                    } : v ? (i = {
                        name: "WebOS",
                        osname: "WebOS",
                        webos: e,
                        version: g || r(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                    }, /touchpad\//i.test(t) && (i.touchpad = e)) : /bada/i.test(t) ? i = {
                        name: "Bada",
                        osname: "Bada",
                        bada: e,
                        version: r(/dolfin\/(\d+(\.\d+)?)/i)
                    } : p ? i = {
                        name: "Tizen",
                        osname: "Tizen",
                        tizen: e,
                        version: r(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || g
                    } : /qupzilla/i.test(t) ? i = {
                        name: "QupZilla",
                        qupzilla: e,
                        version: r(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || g
                    } : /chromium/i.test(t) ? i = {
                        name: "Chromium",
                        chromium: e,
                        version: r(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || g
                    } : /chrome|crios|crmo/i.test(t) ? i = {
                        name: "Chrome",
                        chrome: e,
                        version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                    } : a ? i = {
                        name: "Android",
                        version: g
                    } : /safari|applewebkit/i.test(t) ? (i = {
                        name: "Safari",
                        safari: e
                    }, g && (i.version = g)) : s ? (i = {
                        name: "iphone" == s ? "iPhone" : "ipad" == s ? "iPad" : "iPod"
                    }, g && (i.version = g)) : i = /googlebot/i.test(t) ? {
                        name: "Googlebot",
                        googlebot: e,
                        version: r(/googlebot\/(\d+(\.\d+))/i) || g
                    } : {
                        name: r(/^(.*)\/(.*) /),
                        version: n(/^(.*)\/(.*) /)
                    }, !i.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (i.name = i.name || "Blink", i.blink = e) : (i.name = i.name || "Webkit", i.webkit = e), !i.version && g && (i.version = g)) : !i.opera && /gecko\//i.test(t) && (i.name = i.name || "Gecko", i.gecko = e, i.version = i.version || r(/gecko\/(\d+(\.\d+)?)/i)), i.windowsphone || !a && !i.silk ? !i.windowsphone && s ? (i[s] = e, i.ios = e, i.osname = "iOS") : y ? (i.mac = e, i.osname = "macOS") : O ? (i.xbox = e, i.osname = "Xbox") : h ? (i.windows = e, i.osname = "Windows") : b && (i.linux = e, i.osname = "Linux") : (i.android = e, i.osname = "Android");
                    var x = "";
                    i.windows ? x = function(e) {
                        switch (e) {
                            case "NT":
                                return "NT";
                            case "XP":
                            case "NT 5.1":
                                return "XP";
                            case "NT 5.0":
                                return "2000";
                            case "NT 5.2":
                                return "2003";
                            case "NT 6.0":
                                return "Vista";
                            case "NT 6.1":
                                return "7";
                            case "NT 6.2":
                                return "8";
                            case "NT 6.3":
                                return "8.1";
                            case "NT 10.0":
                                return "10";
                            default:
                                return
                        }
                    }(r(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : i.windowsphone ? x = r(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : i.mac ? x = (x = r(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : s ? x = (x = r(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? x = r(/android[ \/-](\d+(\.\d+)*)/i) : i.webos ? x = r(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : i.blackberry ? x = r(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : i.bada ? x = r(/bada\/(\d+(\.\d+)*)/i) : i.tizen && (x = r(/tizen[\/\s](\d+(\.\d+)*)/i)), x && (i.osversion = x);
                    var S = !i.windows && x.split(".")[0];
                    return k || c || "ipad" == s || a && (3 == S || S >= 4 && !_) || i.silk ? i.tablet = e : (_ || "iphone" == s || "ipod" == s || a || u || i.blackberry || i.webos || i.bada) && (i.mobile = e),
                        i.msedge || i.msie && i.version >= 10 || i.yandexbrowser && i.version >= 15 || i.vivaldi && i.version >= 1 || i.chrome && i.version >= 20 || i.samsungBrowser && i.version >= 4 || i.whale && 1 === o([i.version, "1.0"]) || i.mzbrowser && 1 === o([i.version, "6.0"]) || i.focus && 1 === o([i.version, "1.0"]) || i.firefox && i.version >= 20 || i.safari && i.version >= 6 || i.opera && i.version >= 10 || i.ios && i.osversion && i.osversion.split(".")[0] >= 6 || i.blackberry && i.version >= 10.1 || i.chromium && i.version >= 20 ? i.a = e : i.msie && i.version < 10 || i.chrome && i.version < 20 || i.firefox && i.version < 20 || i.safari && i.version < 6 || i.opera && i.version < 10 || i.ios && i.osversion && i.osversion.split(".")[0] < 6 || i.chromium && i.version < 20 ? i.c = e : i.x = e, i
                }
                var r = t("undefined" != typeof navigator && navigator.userAgent || "");

                function n(e) {
                    return e.split(".").length
                }

                function i(e, t) {
                    var r, n = [];
                    if (Array.prototype.map) return Array.prototype.map.call(e, t);
                    for (r = 0; r < e.length; r++) n.push(t(e[r]));
                    return n
                }

                function o(e) {
                    for (var t = Math.max(n(e[0]), n(e[1])), r = i(e, (function(e) {
                            var r = t - n(e);
                            return i((e += new Array(r + 1).join(".0")).split("."), (function(e) {
                                return new Array(20 - e.length).join("0") + e
                            })).reverse()
                        })); --t >= 0;) {
                        if (r[0][t] > r[1][t]) return 1;
                        if (r[0][t] !== r[1][t]) return -1;
                        if (0 === t) return 0
                    }
                }

                function s(e, n, i) {
                    var s = r;
                    "string" == typeof n && (i = n, n = void 0), void 0 === n && (n = !1), i && (s = t(i));
                    var a = "" + s.version;
                    for (var u in e)
                        if (e.hasOwnProperty(u) && s[u]) {
                            if ("string" != typeof e[u]) throw new Error("Browser version in the minVersion map should be a string: " + u + ": " + String(e));
                            return o([a, e[u]]) < 0
                        }
                    return n
                }
                return r.test = function(e) {
                    for (var t = 0; t < e.length; ++t) {
                        var n = e[t];
                        if ("string" == typeof n && n in r) return !0
                    }
                    return !1
                }, r.isUnsupportedBrowser = s, r.compareVersions = o, r.check = function(e, t, r) {
                    return !s(e, t, r)
                }, r._detect = t, r.detect = t, r
            }, e.exports ? e.exports = n() : r.amdD("bowser", n)
        },
        497754: (e, t) => {
            var r;
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function i() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        if (r) {
                            var o = typeof r;
                            if ("string" === o || "number" === o) e.push(r);
                            else if (Array.isArray(r) && r.length) {
                                var s = i.apply(null, r);
                                s && e.push(s)
                            } else if ("object" === o)
                                for (var a in r) n.call(r, a) && r[a] && e.push(a)
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (i.default = i, e.exports = i) : void 0 === (r = function() {
                    return i
                }.apply(t, [])) || (e.exports = r)
            }()
        },
        407193: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => c
            });
            var n = r(920883),
                i = r(503060),
                o = r(553822),
                s = r(854814),
                a = i.default ? i.default.isConcatSpreadable : void 0;
            const u = function(e) {
                return (0, s.default)(e) || (0, o.default)(e) || !!(a && e && e[a])
            };
            const c = function e(t, r, i, o, s) {
                var a = -1,
                    c = t.length;
                for (i || (i = u), s || (s = []); ++a < c;) {
                    var f = t[a];
                    r > 0 && i(f) ? r > 1 ? e(f, r - 1, i, o, s) : (0, n.default)(s, f) : o || (s[s.length] = f)
                }
                return s
            }
        },
        833713: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => i
            });
            var n = r(407193);
            const i = function(e) {
                return (null == e ? 0 : e.length) ? (0, n.default)(e, 1) : []
            }
        },
        422767: e => {
            "use strict";
            var t = Object.getOwnPropertySymbols,
                r = Object.prototype.hasOwnProperty,
                n = Object.prototype.propertyIsEnumerable;

            function i(e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                            return t[e]
                        })).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        n[e] = e
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function(e, o) {
                for (var s, a, u = i(e), c = 1; c < arguments.length; c++) {
                    for (var f in s = Object(arguments[c])) r.call(s, f) && (u[f] = s[f]);
                    if (t) {
                        a = t(s);
                        for (var l = 0; l < a.length; l++) n.call(s, a[l]) && (u[a[l]] = s[a[l]])
                    }
                }
                return u
            }
        },
        551288: (e, t, r) => {
            "use strict";
            var n = r(422767),
                i = 60103,
                o = 60106;
            t.Fragment = 60107, t.StrictMode = 60108, t.Profiler = 60114;
            var s = 60109,
                a = 60110,
                u = 60112;
            t.Suspense = 60113;
            var c = 60115,
                f = 60116;
            if ("function" == typeof Symbol && Symbol.for) {
                var l = Symbol.for;
                i = l("react.element"), o = l("react.portal"), t.Fragment = l("react.fragment"), t.StrictMode = l("react.strict_mode"), t.Profiler = l("react.profiler"), s = l("react.provider"), a = l("react.context"), u = l("react.forward_ref"), t.Suspense = l("react.suspense"), c = l("react.memo"), f = l("react.lazy")
            }
            var d = "function" == typeof Symbol && Symbol.iterator;

            function p(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var v = {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                },
                m = {};

            function h(e, t, r) {
                this.props = e, this.context = t, this.refs = m, this.updater = r || v
            }

            function y() {}

            function b(e, t, r) {
                this.props = e, this.context = t, this.refs = m, this.updater = r || v
            }
            h.prototype.isReactComponent = {}, h.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error(p(85));
                this.updater.enqueueSetState(this, e, t, "setState")
            }, h.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, y.prototype = h.prototype;
            var w = b.prototype = new y;
            w.constructor = b, n(w, h.prototype), w.isPureReactComponent = !0;
            var g = {
                    current: null
                },
                k = Object.prototype.hasOwnProperty,
                _ = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function O(e, t, r) {
                var n, o = {},
                    s = null,
                    a = null;
                if (null != t)
                    for (n in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (s = "" + t.key), t) k.call(t, n) && !_.hasOwnProperty(n) && (o[n] = t[n]);
                var u = arguments.length - 2;
                if (1 === u) o.children = r;
                else if (1 < u) {
                    for (var c = Array(u), f = 0; f < u; f++) c[f] = arguments[f + 2];
                    o.children = c
                }
                if (e && e.defaultProps)
                    for (n in u = e.defaultProps) void 0 === o[n] && (o[n] = u[n]);
                return {
                    $$typeof: i,
                    type: e,
                    key: s,
                    ref: a,
                    props: o,
                    _owner: g.current
                }
            }

            function x(e) {
                return "object" == typeof e && null !== e && e.$$typeof === i
            }
            var S = /\/+/g;

            function E(e, t) {
                return "object" == typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }))
                }("" + e.key) : t.toString(36)
            }

            function j(e, t, r, n, s) {
                var a = typeof e;
                "undefined" !== a && "boolean" !== a || (e = null);
                var u = !1;
                if (null === e) u = !0;
                else switch (a) {
                    case "string":
                    case "number":
                        u = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case i:
                            case o:
                                u = !0
                        }
                }
                if (u) return s = s(u = e), e = "" === n ? "." + E(u, 0) : n, Array.isArray(s) ? (r = "", null != e && (r = e.replace(S, "$&/") + "/"), j(s, t, r, "", (function(e) {
                    return e
                }))) : null != s && (x(s) && (s = function(e, t) {
                    return {
                        $$typeof: i,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }(s, r + (!s.key || u && u.key === s.key ? "" : ("" + s.key).replace(S, "$&/") + "/") + e)), t.push(s)), 1;
                if (u = 0, n = "" === n ? "." : n + ":", Array.isArray(e))
                    for (var c = 0; c < e.length; c++) {
                        var f = n + E(a = e[c], c);
                        u += j(a, t, r, f, s)
                    } else if (f = function(e) {
                            return null === e || "object" != typeof e ? null : "function" == typeof(e = d && e[d] || e["@@iterator"]) ? e : null
                        }(e), "function" == typeof f)
                        for (e = f.call(e), c = 0; !(a = e.next()).done;) u += j(a = a.value, t, r, f = n + E(a, c++), s);
                    else if ("object" === a) throw t = "" + e, Error(p(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
                return u
            }

            function P(e, t, r) {
                if (null == e) return e;
                var n = [],
                    i = 0;
                return j(e, n, "", "", (function(e) {
                    return t.call(r, e, i++)
                })), n
            }

            function C(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    t = t(), e._status = 0, e._result = t, t.then((function(t) {
                        0 === e._status && (t = t.default, e._status = 1, e._result = t)
                    }), (function(t) {
                        0 === e._status && (e._status = 2, e._result = t)
                    }))
                }
                if (1 === e._status) return e._result;
                throw e._result
            }
            var L = {
                current: null
            };

            function R() {
                var e = L.current;
                if (null === e) throw Error(p(321));
                return e
            }
            var A = {
                ReactCurrentDispatcher: L,
                ReactCurrentBatchConfig: {
                    transition: 0
                },
                ReactCurrentOwner: g,
                IsSomeRendererActing: {
                    current: !1
                },
                assign: n
            };
            t.Children = {
                map: P,
                forEach: function(e, t, r) {
                    P(e, (function() {
                        t.apply(this, arguments)
                    }), r)
                },
                count: function(e) {
                    var t = 0;
                    return P(e, (function() {
                        t++
                    })), t
                },
                toArray: function(e) {
                    return P(e, (function(e) {
                        return e
                    })) || []
                },
                only: function(e) {
                    if (!x(e)) throw Error(p(143));
                    return e
                }
            }, t.Component = h, t.PureComponent = b, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A, t.cloneElement = function(e, t, r) {
                if (null == e) throw Error(p(267, e));
                var o = n({}, e.props),
                    s = e.key,
                    a = e.ref,
                    u = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (a = t.ref, u = g.current), void 0 !== t.key && (s = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
                    for (f in t) k.call(t, f) && !_.hasOwnProperty(f) && (o[f] = void 0 === t[f] && void 0 !== c ? c[f] : t[f])
                }
                var f = arguments.length - 2;
                if (1 === f) o.children = r;
                else if (1 < f) {
                    c = Array(f);
                    for (var l = 0; l < f; l++) c[l] = arguments[l + 2];
                    o.children = c
                }
                return {
                    $$typeof: i,
                    type: e.type,
                    key: s,
                    ref: a,
                    props: o,
                    _owner: u
                }
            }, t.createContext = function(e, t) {
                return void 0 === t && (t = null), (e = {
                    $$typeof: a,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: s,
                    _context: e
                }, e.Consumer = e
            }, t.createElement = O, t.createFactory = function(e) {
                var t = O.bind(null, e);
                return t.type = e, t
            }, t.createRef = function() {
                return {
                    current: null
                }
            }, t.forwardRef = function(e) {
                return {
                    $$typeof: u,
                    render: e
                }
            }, t.isValidElement = x, t.lazy = function(e) {
                return {
                    $$typeof: f,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: C
                }
            }, t.memo = function(e, t) {
                return {
                    $$typeof: c,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }, t.useCallback = function(e, t) {
                return R().useCallback(e, t)
            }, t.useContext = function(e, t) {
                return R().useContext(e, t)
            }, t.useDebugValue = function() {}, t.useEffect = function(e, t) {
                return R().useEffect(e, t)
            }, t.useImperativeHandle = function(e, t, r) {
                return R().useImperativeHandle(e, t, r)
            }, t.useLayoutEffect = function(e, t) {
                return R().useLayoutEffect(e, t)
            }, t.useMemo = function(e, t) {
                return R().useMemo(e, t)
            }, t.useReducer = function(e, t, r) {
                return R().useReducer(e, t, r)
            }, t.useRef = function(e) {
                return R().useRef(e)
            }, t.useState = function(e) {
                return R().useState(e)
            }, t.version = "17.0.2"
        },
        559496: (e, t, r) => {
            "use strict";
            e.exports = r(551288)
        },
        685459: function(e, t, r) {
            var n;
            ! function(t) {
                "use strict";

                function i() {}
                var o = i.prototype,
                    s = t.EventEmitter;

                function a(e, t) {
                    for (var r = e.length; r--;)
                        if (e[r].listener === t) return r;
                    return -1
                }

                function u(e) {
                    return function() {
                        return this[e].apply(this, arguments)
                    }
                }

                function c(e) {
                    return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && c(e.listener)
                }
                o.getListeners = function(e) {
                    var t, r, n = this._getEvents();
                    if (e instanceof RegExp)
                        for (r in t = {}, n) n.hasOwnProperty(r) && e.test(r) && (t[r] = n[r]);
                    else t = n[e] || (n[e] = []);
                    return t
                }, o.flattenListeners = function(e) {
                    var t, r = [];
                    for (t = 0; t < e.length; t += 1) r.push(e[t].listener);
                    return r
                }, o.getListenersAsObject = function(e) {
                    var t, r = this.getListeners(e);
                    return r instanceof Array && ((t = {})[e] = r), t || r
                }, o.addListener = function(e, t) {
                    if (!c(t)) throw new TypeError("listener must be a function");
                    var r, n = this.getListenersAsObject(e),
                        i = "object" == typeof t;
                    for (r in n) n.hasOwnProperty(r) && -1 === a(n[r], t) && n[r].push(i ? t : {
                        listener: t,
                        once: !1
                    });
                    return this
                }, o.on = u("addListener"), o.addOnceListener = function(e, t) {
                    return this.addListener(e, {
                        listener: t,
                        once: !0
                    })
                }, o.once = u("addOnceListener"), o.defineEvent = function(e) {
                    return this.getListeners(e), this
                }, o.defineEvents = function(e) {
                    for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
                    return this
                }, o.removeListener = function(e, t) {
                    var r, n, i = this.getListenersAsObject(e);
                    for (n in i) i.hasOwnProperty(n) && -1 !== (r = a(i[n], t)) && i[n].splice(r, 1);
                    return this
                }, o.off = u("removeListener"), o.addListeners = function(e, t) {
                    return this.manipulateListeners(!1, e, t)
                }, o.removeListeners = function(e, t) {
                    return this.manipulateListeners(!0, e, t)
                }, o.manipulateListeners = function(e, t, r) {
                    var n, i, o = e ? this.removeListener : this.addListener,
                        s = e ? this.removeListeners : this.addListeners;
                    if ("object" != typeof t || t instanceof RegExp)
                        for (n = r.length; n--;) o.call(this, t, r[n]);
                    else
                        for (n in t) t.hasOwnProperty(n) && (i = t[n]) && ("function" == typeof i ? o.call(this, n, i) : s.call(this, n, i));
                    return this
                }, o.removeEvent = function(e) {
                    var t, r = typeof e,
                        n = this._getEvents();
                    if ("string" === r) delete n[e];
                    else if (e instanceof RegExp)
                        for (t in n) n.hasOwnProperty(t) && e.test(t) && delete n[t];
                    else delete this._events;
                    return this
                }, o.removeAllListeners = u("removeEvent"), o.emitEvent = function(e, t) {
                    var r, n, i, o, s = this.getListenersAsObject(e);
                    for (o in s)
                        if (s.hasOwnProperty(o))
                            for (r = s[o].slice(0), i = 0; i < r.length; i++) !0 === (n = r[i]).once && this.removeListener(e, n.listener), n.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, n.listener);
                    return this
                }, o.trigger = u("emitEvent"), o.emit = function(e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    return this.emitEvent(e, t)
                }, o.setOnceReturnValue = function(e) {
                    return this._onceReturnValue = e, this
                }, o._getOnceReturnValue = function() {
                    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
                }, o._getEvents = function() {
                    return this._events || (this._events = {})
                }, i.noConflict = function() {
                    return t.EventEmitter = s, i
                }, void 0 === (n = function() {
                    return i
                }.call(t, r, t, e)) || (e.exports = n)
            }(this || {})
        }
    }
]);