var ttd_dom_ready = function() {
    var t, n, o = {
            "[object Boolean]": "boolean",
            "[object Number]": "number",
            "[object String]": "string",
            "[object Function]": "function",
            "[object Array]": "array",
            "[object Date]": "date",
            "[object RegExp]": "regexp",
            "[object Object]": "object"
        },
        l = {
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? l.readyWait++ : l.ready(!0)
            },
            ready: function(e) {
                if (!0 === e && !--l.readyWait || !0 !== e && !l.isReady) {
                    if (!document.body) return setTimeout(l.ready, 1);
                    if ((l.isReady = !0) !== e && 0 < --l.readyWait) return;
                    t.resolveWith(document, [l])
                }
            },
            bindReady: function() {
                if (!t) {
                    if (t = l._Deferred(), "complete" === document.readyState) return setTimeout(l.ready, 1);
                    if (document.addEventListener) document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", l.ready, !1);
                    else if (document.attachEvent) {
                        document.attachEvent("onreadystatechange", n), window.attachEvent("onload", l.ready);
                        var e = !1;
                        try {
                            e = null == window.frameElement
                        } catch (e) {}
                        document.documentElement.doScroll && e && r()
                    }
                }
            },
            _Deferred: function() {
                var a, n, d, c = [],
                    u = {
                        done: function() {
                            if (!d) {
                                var e, t, n, o, r, i = arguments;
                                for (a && (r = a, a = 0), e = 0, t = i.length; e < t; e++) n = i[e], "array" === (o = l.type(n)) ? u.done.apply(u, n) : "function" === o && c.push(n);
                                r && u.resolveWith(r[0], r[1])
                            }
                            return this
                        },
                        resolveWith: function(e, t) {
                            if (!d && !a && !n) {
                                t = t || [], n = 1;
                                try {
                                    for (; c[0];) c.shift().apply(e, t)
                                } finally {
                                    a = [e, t], n = 0
                                }
                            }
                            return this
                        },
                        resolve: function() {
                            return u.resolveWith(this, arguments), this
                        },
                        isResolved: function() {
                            return !(!n && !a)
                        },
                        cancel: function() {
                            return d = 1, c = [], this
                        }
                    };
                return u
            },
            type: function(e) {
                return null == e ? String(e) : o[Object.prototype.toString.call(e)] || "object"
            }
        };

    function r() {
        if (!l.isReady) {
            try {
                document.documentElement.doScroll("left")
            } catch (e) {
                return void setTimeout(r, 1)
            }
            l.ready()
        }
    }
    return document.addEventListener ? n = function() {
            document.removeEventListener("DOMContentLoaded", n, !1), l.ready()
        } : document.attachEvent && (n = function() {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", n), l.ready())
        }),
        function(e) {
            l.bindReady(), l.type(e), t.done(e)
        }
}();

function TTDUniversalPixelApi(L) {
    this.getVersion = function() {
        return "1.1.0"
    }, this.init = function(e, r, t, n) {
        if ("string" == typeof n && (n = null, 4 < arguments.length))
            for (var o = 4; o < arguments.length; o++) arguments[o - 1] = arguments[o];
        if (e && "" != e && r && !(r.length <= 0)) {
            var i = document.getElementsByTagName("body")[0];
            if (i) {
                var a = "",
                    d = {
                        MonetaryValue: "v",
                        MonetaryValueFormat: "vf"
                    },
                    c = [];
                if ("undefined" != typeof _pixelParams)
                    for (var o in _pixelParams) {
                        var u = _pixelParams[o],
                            l = d[o];
                        l && u && !/%%.*%%/i.test(u) && c.push(l + "=" + encodeURIComponent(u))
                    }
                var f = "adv=" + e,
                    s = "upid=" + r.join(","),
                    p = L || function() {
                        var e = window,
                            t = "",
                            n = !1;
                        try {
                            top.location.href && (t = top.location.href)
                        } catch (e) {
                            n = !0
                        }
                        if (n)
                            for (;;) try {
                                if (t = e.document.referrer, window.parent == e) break;
                                e = window.parent
                            } catch (e) {
                                break
                            } - 1 < t.indexOf("cloudfront.net") && (t = function(e, t) {
                                t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                                var n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
                                return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
                            }(t, "url") || t);
                        return t
                    }();
                if (a = t + "?" + f + "&ref=" + encodeURIComponent(p) + "&" + s + "&upv=" + this.getVersion(), n)
                    for (var m in n) a = a + "&" + m + "=" + n[m];
                0 < c.length && (a = a + "&" + c.join("&"));
                var v = null,
                    y = !1,
                    h = null;
                "function" == typeof __tcfapi ? (g = setTimeout(T, 1e3), __tcfapi("addEventListener", 2, D)) : "function" == typeof __cmp ? (v = setTimeout(_, 1e3), __cmp("ping", null, E)) : w();
                var g = null,
                    b = !1
            }
        }

        function _() {
            y = !0, w()
        }

        function E(e) {
            y || (e.cmpLoaded || e.gdprAppliesGlobally ? (clearTimeout(v), h = new Date, __cmp("getConsentData", null, w)) : setTimeout(function() {
                __cmp("ping", null, E)
            }, 200))
        }

        function w(e) {
            null != h && (a = a + "&ret=" + (new Date - h)), y && (a += "&pto=1"), null != e && (a = a + "&gdpr=" + (e.gdprApplies ? "1" : "0") + "&gdpr_consent=" + e.consentData), j()
        }

        function j() {
            for (var e = "universal_pixel_" + r.join("_"), t = document.getElementById(e); t && t.parentElement.removeChild(t), t = document.getElementById(e););
            var n = document.createElement("iframe");

            function o() {
                i.appendChild(n)
            }
            n.setAttribute("id", e), n.setAttribute("height", 0), n.setAttribute("width", 0), n.setAttribute("style", "display:none;"), n.setAttribute("src", a), n.setAttribute("title", "TTD Universal Pixel"), "complete" === document.readyState ? setTimeout(o, 0) : window.addEventListener ? window.addEventListener("load", o) : window.attachEvent ? window.attachEvent("onload", o) : o()
        }

        function T() {
            b = !0, w()
        }

        function D(e, t) {
            if (!b) return t ? (clearTimeout(g), function(e) {
                null != h && (a = a + "&ret=" + (new Date - h));
                b && (a += "&pto=1");
                null != e && (a = a + "&gdpr=" + function(e) {
                    return e ? "1" : "0"
                }(e.gdprApplies) + "&gdpr_consent=" + e.tcString);
                j()
            }(e), h = new Date, void __tcfapi("removeEventListener", 2, function(e) {}, e.listenerId)) : void 0;
            __tcfapi("removeEventListener", 2, function(e) {}, e.listenerId)
        }
    }
}