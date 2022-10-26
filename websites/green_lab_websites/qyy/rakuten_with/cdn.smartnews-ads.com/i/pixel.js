! function() {
    "use strict";

    function e(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    function n(e, n) {
        for (var o = 0; o < n.length; o++) {
            var t = n[o];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
        }
    }
    var o = function() {
        function o(n) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "App";
            e(this, o), this.os = n, this.bridge = t, this.windowAsAny = window
        }
        var t, r, i;
        return t = o, r = [{
            key: "resolveMethod",
            value: function(e) {
                var n, o, t, r, i = this;
                if ("android" === this.os) {
                    if (void 0 === (null === (n = this.windowAsAny[this.bridge]) || void 0 === n ? void 0 : n[e])) throw new Error("window[".concat(this.bridge, "][").concat(e, "] does not exist"));
                    return function(n, o) {
                        var t = JSON.stringify({
                            callback: n,
                            parameter: o[0]
                        });
                        i.windowAsAny[i.bridge][e](t)
                    }
                }
                if (void 0 === (null === (r = null === (t = null === (o = this.windowAsAny.webkit) || void 0 === o ? void 0 : o.messageHandlers) || void 0 === t ? void 0 : t[e]) || void 0 === r ? void 0 : r.postMessage)) throw new Error("window.webkit.messageHandlers[".concat(e, "].postMessage does not exist"));
                return function(n, o) {
                    var t = JSON.stringify({
                        callback: n,
                        parameter: o[0]
                    });
                    i.windowAsAny.webkit.messageHandlers[e].postMessage(t)
                }
            }
        }, {
            key: "invoke",
            value: function(e) {
                for (var n = this, t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                return new Promise((function(t, i) {
                    var a = "".concat(e, "-").concat(o.callbackIdentifier++);
                    n.windowAsAny[a] = function(e) {
                        var o = void 0 !== e ? JSON.parse(e) : void 0;
                        void 0 !== (null == o ? void 0 : o["error-".concat(a)]) ? i(new Error(o["error-".concat(a)])) : t(o), delete n.windowAsAny[a]
                    }, n.resolveMethod(e)(a, r)
                }))
            }
        }], r && n(t.prototype, r), i && n(t, i), Object.defineProperty(t, "prototype", {
            writable: !1
        }), o
    }();

    function t(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function r(e) {
        var n = [];
        for (var o in e) {
            var r = e[o];
            if (e.hasOwnProperty(o) && void 0 !== r) {
                var i = encodeURIComponent(o);
                if (t(r))
                    for (var a = 0; a < r.length; a++) n.push("".concat(i, "=").concat(encodeURIComponent(String(r[a]))));
                else n.push("".concat(i, "=").concat(encodeURIComponent(String(r))))
            }
        }
        return n.join("&")
    }

    function i(e) {
        try {
            var n = window[e],
                o = "__storage_test__";
            return n.setItem(o, o), n.removeItem(o), !0
        } catch (e) {
            return !1
        }
    }

    function a(e) {
        for (var n = document.cookie.split(";"), o = 0; o < n.length; o++) {
            var t = n[o].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "").split("=");
            if (t[0] === e) return decodeURIComponent(t[1])
        }
        if (i("localStorage")) return window.localStorage.getItem(e) || void 0
    }

    function s(e, n) {
        document.cookie = "".concat(e, "=").concat(encodeURIComponent(n), "; path=/; max-age=").concat(63072e3), i("localStorage") && window.localStorage.setItem(e, n)
    }

    function c(e) {
        var n = {
            name: e.name,
            message: e.message,
            fileName: e.fileName,
            stack: e.stack
        };
        (new Image).src = "https://i.smartnews-ads.com/pe?b=".concat(encodeURIComponent(JSON.stringify(n)))
    }
    o.callbackIdentifier = 0;
    var d = 0;

    function l() {
        return new o("ios", "SmartNewsAds").invoke("retrieveUUID").catch((function() {
            return new o("android", "SmartNewsAds").invoke("retrieveUUID")
        })).catch((function() {
            return o = window.parent === window.self, null !== (e = window.webkit) && void 0 !== e && null !== (n = e.messageHandlers) && void 0 !== n && n.UUIDResolver && o ? new Promise((function(e) {
                var n, o, t, r = "_smartnews_ads_legacy_callback_".concat(d++);
                window[r] = function(n) {
                    delete window[r], e(n)
                }, null === (n = window.webkit) || void 0 === n || null === (o = n.messageHandlers) || void 0 === o || null === (t = o.UUIDResolver) || void 0 === t || t.postMessage(r)
            })) : Promise.reject(new Error("UUIDResolver does not exist"));
            var e, n, o
        })).catch((function() {
            return Promise.resolve(null)
        }))
    }
    var u = "snexid",
        w = "snuuid";

    function v(e, n, o) {
        var t, i, d, v = {
            id: e,
            t: Math.floor((new Date).valueOf() / 1e3),
            url: location.href,
            referrer: document.referrer,
            e: n,
            v: this.version
        };
        for (var f in o) o.hasOwnProperty(f) && (v["d[".concat(f, "]")] = o[f]);
        var m = null !== (t = a(u)) && void 0 !== t ? t : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
            var n = 16 * Math.random() | 0;
            return ("x" === e ? n : 3 & n | 8).toString(16)
        }));
        s(u, m), v.exid = m;
        var p = null !== (i = null === (d = /[&?]snuuid=([^&]+)/.exec(location.search)) || void 0 === d ? void 0 : d[1]) && void 0 !== i ? i : a(w);
        if (void 0 !== p && (s(w, p), v.uuid = p), !("Promise" in window)) {
            var h = r(v);
            return (new Image).src = "https://i.smartnews-ads.com/p?".concat(h), (new Image).src = "https://i6.smartnews-ads.com/smallest.png?".concat(h), v
        }
        return Promise.race([l(), new Promise((function(e) {
            window.setTimeout((function() {
                return e(null)
            }), 1e3)
        }))]).then((function(e) {
            null !== e && (s(w, e), v.uuid = e);
            var n = r(v);
            return (new Image).src = "https://i.smartnews-ads.com/p?".concat(n), (new Image).src = "https://i6.smartnews-ads.com/smallest.png?".concat(n), v
        })).catch((function(e) {
            return c(e), v
        }))
    }
    try {
        ! function() {
            if (void 0 === window.SmartnewsAds || void 0 === window.SmartnewsAds.p) throw new Error("SmartnewsAds does not defined.");
            var e = window.SmartnewsAds.p;
            if (e.callMethod = v, e.queue) {
                for (var n in e.queue) e.queue.hasOwnProperty(n) && e.callMethod.apply(e, e.queue[n]);
                e.queue.length = 0
            }
        }()
    } catch (e) {
        c(e)
    }
}();