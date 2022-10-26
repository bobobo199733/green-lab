! function() {
    var r = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        e = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, n) {
            t != Array.prototype && t != Object.prototype && (t[e] = n.value)
        };

    function n() {
        n = function() {}, r.Symbol || (r.Symbol = t)
    }
    var i = 0;

    function t(t) {
        return "jscomp_symbol_" + (t || "") + i++
    }

    function o() {
        n();
        var t = r.Symbol.iterator;
        t || (t = r.Symbol.iterator = r.Symbol("iterator")), "function" != typeof Array.prototype[t] && e(Array.prototype, t, {
            configurable: !0,
            writable: !0,
            value: function() {
                return a(this)
            }
        }), o = function() {}
    }

    function a(t) {
        var e, n = 0;
        return e = function() {
            return n < t.length ? {
                done: !1,
                value: t[n++]
            } : {
                done: !0
            }
        }, o(), (e = {
            next: e
        })[r.Symbol.iterator] = function() {
            return this
        }, e
    }

    function d(t) {
        o();
        var e = t[Symbol.iterator];
        return e ? e.call(t) : a(t)
    }

    function p(t) {
        if (!(t instanceof Array)) {
            t = d(t);
            for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
            t = n
        }
        return t
    }
    var h = 0;
    var m = "img script iframe link audio video source".split(" ");

    function v(t, e) {
        for (var n = (t = d(t)).next(); !n.done; n = t.next())
            if (n = n.value, e.includes(n.nodeName.toLowerCase()) || v(n.children, e)) return !0;
        return !1
    }

    function y(t, e) {
        if (2 < t.length) return performance.now();
        for (var n = [], r = (e = d(e)).next(); !r.done; r = e.next()) r = r.value, n.push({
            timestamp: r.start,
            type: "requestStart"
        }), n.push({
            timestamp: r.end,
            type: "requestEnd"
        });
        for (r = (e = d(t)).next(); !r.done; r = e.next()) n.push({
            timestamp: r.value,
            type: "requestStart"
        });
        for (n.sort(function(t, e) {
                return t.timestamp - e.timestamp
            }), t = t.length, e = n.length - 1; 0 <= e; e--) switch (r = n[e], r.type) {
            case "requestStart":
                t--;
                break;
            case "requestEnd":
                if (2 < ++t) return r.timestamp;
                break;
            default:
                throw Error("Internal Error: This should never happen")
        }
        return 0
    }

    function s(t) {
        t = t || {}, this.w = !!t.useMutationObserver, this.u = t.minValue || null, t = window.__tti && window.__tti.e;
        var i, o, a, s, u, c, l, r, n, e, f = window.__tti && window.__tti.o;
        this.a = t ? t.map(function(t) {
            return {
                start: t.startTime,
                end: t.startTime + t.duration
            }
        }) : [], f && f.disconnect(), this.b = [], this.f = new Map, this.j = null, this.v = -1 / 0, this.i = !1, this.h = this.c = this.s = null, i = this.m.bind(this), o = this.l.bind(this), a = XMLHttpRequest.prototype.send, s = h++, XMLHttpRequest.prototype.send = function(t) {
            for (var e = [], n = 0; n < arguments.length; ++n) e[n - 0] = arguments[n];
            var r = this;
            return i(s), this.addEventListener("readystatechange", function() {
                4 === r.readyState && o(s)
            }), a.apply(this, e)
        }, u = this.m.bind(this), c = this.l.bind(this), l = fetch, fetch = function(t) {
            for (var i = [], e = 0; e < arguments.length; ++e) i[e - 0] = arguments[e];
            return new Promise(function(e, n) {
                var r = h++;
                u(r), l.apply(null, [].concat(p(i))).then(function(t) {
                    c(r), e(t)
                }, function(t) {
                    c(t), n(t)
                })
            })
        }, (r = this).c = new PerformanceObserver(function(t) {
            for (var e = (t = d(t.getEntries())).next(); !e.done; e = t.next())
                if ("resource" === (e = e.value).entryType && (r.b.push({
                        start: e.fetchStart,
                        end: e.responseEnd
                    }), w(r, y(r.g, r.b) + 5e3)), "longtask" === e.entryType) {
                    var n = e.startTime + e.duration;
                    r.a.push({
                        start: e.startTime,
                        end: n
                    }), w(r, n + 5e3)
                }
        }), r.c.observe({
            entryTypes: ["longtask", "resource"]
        }), this.w && (this.h = (n = this.B.bind(this), (e = new MutationObserver(function(t) {
            for (var e = (t = d(t)).next(); !e.done; e = t.next()) "childList" == (e = e.value).type && v(e.addedNodes, m) ? n(e) : "attributes" == e.type && m.includes(e.target.tagName.toLowerCase()) && n(e)
        })).observe(document, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            attributeFilter: ["href", "src"]
        }), e))
    }

    function u(t) {
        t.i = !0;
        var e = 0 < t.a.length ? t.a[t.a.length - 1].end : 0,
            n = y(t.g, t.b);
        w(t, Math.max(n + 5e3, e))
    }

    function w(o, t) {
        !o.i || o.v > t || (clearTimeout(o.j), o.j = setTimeout(function() {
            var t = performance.timing.navigationStart,
                e = y(o.g, o.b);
            t = (window.a && window.a.A ? 1e3 * window.a.A().C - t : 0) || performance.timing.domContentLoadedEventEnd - t;
            if (o.u) var n = o.u;
            else n = performance.timing.domContentLoadedEventEnd ? (n = performance.timing).domContentLoadedEventEnd - n.navigationStart : null;
            var r = performance.now();
            null === n && w(o, Math.max(e + 5e3, r + 1e3));
            var i = o.a;
            (e = r - e < 5e3 ? null : r - (e = i.length ? i[i.length - 1].end : t) < 5e3 ? null : Math.max(e, n)) && (o.s(e), clearTimeout(o.j), o.i = !1, o.c && o.c.disconnect(), o.h && o.h.disconnect()), w(o, performance.now() + 1e3)
        }, t - performance.now()), o.v = t)
    }
    s.prototype.getFirstConsistentlyInteractive = function() {
        var e = this;
        return new Promise(function(t) {
            e.s = t, "complete" == document.readyState ? u(e) : window.addEventListener("load", function() {
                u(e)
            })
        })
    }, s.prototype.m = function(t) {
        this.f.set(t, performance.now())
    }, s.prototype.l = function(t) {
        this.f.delete(t)
    }, s.prototype.B = function() {
        w(this, performance.now() + 5e3)
    }, r.Object.defineProperties(s.prototype, {
        g: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return [].concat(p(this.f.values()))
            }
        }
    });
    var c = {
        getFirstConsistentlyInteractive: function(t) {
            return t = t || {}, "PerformanceLongTaskTiming" in window ? new s(t).getFirstConsistentlyInteractive() : Promise.resolve(null)
        }
    };
    window.ttiPolyfill = c
}();