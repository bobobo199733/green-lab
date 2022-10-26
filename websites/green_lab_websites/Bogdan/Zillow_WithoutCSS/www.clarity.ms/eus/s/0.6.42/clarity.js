/* clarity-js v0.6.42: https://github.com/microsoft/clarity (License: MIT) */ ! function() {
    "use strict";
    var t = Object.freeze({
            __proto__: null,
            get start() {
                return En
            },
            get stop() {
                return On
            },
            get parse() {
                return Sn
            },
            get getId() {
                return Nn
            },
            get add() {
                return xn
            },
            get update() {
                return _n
            },
            get sameorigin() {
                return Tn
            },
            get iframe() {
                return Dn
            },
            get getNode() {
                return zn
            },
            get getValue() {
                return Ln
            },
            get get() {
                return An
            },
            get lookup() {
                return Rn
            },
            get has() {
                return Hn
            },
            get updates() {
                return Yn
            }
        }),
        e = Object.freeze({
            __proto__: null,
            get track() {
                return fr
            },
            get start() {
                return mr
            },
            get queue() {
                return br
            },
            get stop() {
                return yr
            }
        }),
        n = Object.freeze({
            __proto__: null,
            get data() {
                return Cr
            },
            get keys() {
                return jr
            },
            get fragments() {
                return Ar
            },
            get start() {
                return Rr
            },
            get clone() {
                return Hr
            },
            get compute() {
                return Yr
            },
            get reset() {
                return Wr
            },
            get update() {
                return Xr
            },
            get stop() {
                return qr
            }
        }),
        r = Object.freeze({
            __proto__: null,
            get data() {
                return Ir
            },
            get start() {
                return Fr
            },
            get check() {
                return Jr
            },
            get trigger() {
                return Gr
            },
            get compute() {
                return Zr
            },
            get stop() {
                return Kr
            }
        }),
        a = Object.freeze({
            __proto__: null,
            get data() {
                return Qr
            },
            get updates() {
                return $r
            },
            get start() {
                return ta
            },
            get stop() {
                return ea
            },
            get log() {
                return na
            },
            get compute() {
                return ra
            },
            get reset() {
                return aa
            }
        }),
        i = Object.freeze({
            __proto__: null,
            get data() {
                return ia
            },
            get callbacks() {
                return oa
            },
            get start() {
                return sa
            },
            get stop() {
                return ca
            },
            get metadata() {
                return la
            },
            get id() {
                return da
            },
            get consent() {
                return fa
            },
            get clear() {
                return ha
            },
            get save() {
                return pa
            }
        }),
        o = Object.freeze({
            __proto__: null,
            get data() {
                return Oa
            },
            get start() {
                return Ma
            },
            get stop() {
                return Sa
            },
            get envelope() {
                return Na
            }
        }),
        u = {
            projectId: null,
            delay: 1e3,
            lean: !1,
            track: !0,
            content: !0,
            mask: [],
            unmask: [],
            regions: [],
            extract: [],
            cookies: [],
            fraud: [],
            report: null,
            upload: null,
            fallback: null,
            upgrade: null,
            action: null
        };

    function s(t) {
        return window.Zone && "__symbol__" in window.Zone ? window.Zone.__symbol__(t) : t
    }
    var c = 0;

    function l(t) {
        return void 0 === t && (t = null), t = t || performance.now(), Math.max(Math.round(t - c), 0)
    }

    function d(t) {
        for (var e = 5381, n = e, r = 0; r < t.length; r += 2) {
            if (e = (e << 5) + e ^ t.charCodeAt(r), r + 1 < t.length) n = (n << 5) + n ^ t.charCodeAt(r + 1)
        }
        return Math.abs(e + 11579 * n).toString(36)
    }
    var f = null,
        h = null,
        p = !1;

    function v() {
        p && (f = {
            time: l(),
            event: 4,
            data: {
                visible: h.visible,
                docWidth: h.docWidth,
                docHeight: h.docHeight,
                screenWidth: h.screenWidth,
                screenHeight: h.screenHeight,
                scrollX: h.scrollX,
                scrollY: h.scrollY,
                pointerX: h.pointerX,
                pointerY: h.pointerY,
                activityTime: h.activityTime
            }
        }), h = h || {
            visible: 1,
            docWidth: 0,
            docHeight: 0,
            screenWidth: 0,
            screenHeight: 0,
            scrollX: 0,
            scrollY: 0,
            pointerX: 0,
            pointerY: 0,
            activityTime: 0
        }
    }

    function g(t, e, n) {
        switch (t) {
            case 8:
                h.docWidth = e, h.docHeight = n;
                break;
            case 11:
                h.screenWidth = e, h.screenHeight = n;
                break;
            case 10:
                h.scrollX = e, h.scrollY = n;
                break;
            default:
                h.pointerX = e, h.pointerY = n
        }
        p = !0
    }

    function m(t) {
        h.activityTime = t
    }

    function b(t, e) {
        h.visible = "visible" === e ? 1 : 0, h.visible || m(t), p = !0
    }

    function y() {
        p && Vr(4)
    }
    var w = Object.freeze({
            __proto__: null,
            get state() {
                return f
            },
            start: function() {
                p = !1, v()
            },
            reset: v,
            track: g,
            activity: m,
            visibility: b,
            compute: y,
            stop: function() {
                v()
            }
        }),
        k = null;

    function E(t, e) {
        Ua() && t && e && "string" == typeof t && "string" == typeof e && t.length < 255 && e.length < 255 && (k = {
            key: t,
            value: e
        }, Vr(24))
    }
    var O, M = null,
        S = null;

    function N(t) {
        t in M || (M[t] = 0), t in S || (S[t] = 0), M[t]++, S[t]++
    }

    function x(t, e) {
        null !== e && (t in M || (M[t] = 0), t in S || (S[t] = 0), M[t] += e, S[t] += e)
    }

    function _(t, e) {
        null !== e && !1 === isNaN(e) && (t in M || (M[t] = 0), (e > M[t] || 0 === M[t]) && (S[t] = e, M[t] = e))
    }

    function T(t, e, n) {
        return window.setTimeout(Ta(t), e, n)
    }

    function D(t) {
        return window.clearTimeout(t)
    }
    var I = 0,
        C = 0,
        j = null;

    function z() {
        j && D(j), j = T(L, C), I = l()
    }

    function L() {
        var t = l();
        O = {
            gap: t - I
        }, Vr(25), O.gap < 3e5 ? j = T(L, C) : Xa && (E("clarity", "suspend"), ai(), ["mousemove", "touchstart"].forEach((function(t) {
            return Ia(document, t, Va)
        })), ["resize", "scroll", "pageshow"].forEach((function(t) {
            return Ia(window, t, Va)
        })))
    }
    var A = Object.freeze({
            __proto__: null,
            get data() {
                return O
            },
            start: function() {
                C = 6e4, I = 0
            },
            reset: z,
            stop: function() {
                D(j), I = 0, C = 0
            }
        }),
        R = null;

    function H(t, e) {
        if (t in R) {
            var n = R[t],
                r = n[n.length - 1];
            e - r[0] > 100 ? R[t].push([e, 0]) : r[1] = e - r[0]
        } else R[t] = [
            [e, 0]
        ]
    }

    function Y() {
        Vr(36)
    }

    function W() {
        R = {}
    }
    var X = Object.freeze({
            __proto__: null,
            get data() {
                return R
            },
            start: function() {
                R = {}
            },
            stop: function() {
                R = {}
            },
            track: H,
            compute: Y,
            reset: W
        }),
        q = null;

    function P(t) {
        Ua() && u.lean && (u.lean = !1, q = {
            key: t
        }, pa(), u.upgrade && u.upgrade(t), Vr(3))
    }
    var U = Object.freeze({
            __proto__: null,
            get data() {
                return q
            },
            start: function() {
                !u.lean && u.upgrade && u.upgrade("Config"), q = null
            },
            upgrade: P,
            stop: function() {
                q = null
            }
        }),
        B = null;

    function V(t, e) {
        J(t, "string" == typeof e ? [e] : e)
    }

    function F(t, e, n) {
        void 0 === e && (e = null), void 0 === n && (n = null), J("userId", [t]), J("sessionId", [e]), J("pageId", [n])
    }

    function J(t, e) {
        if (Ua() && t && e && "string" == typeof t && t.length < 255) {
            for (var n = (t in B ? B[t] : []), r = 0; r < e.length; r++) "string" == typeof e[r] && e[r].length < 255 && n.push(e[r]);
            B[t] = n
        }
    }

    function G() {
        Vr(34)
    }

    function Z() {
        B = {}
    }

    function K(t, e, n, r) {
        return new(n || (n = Promise))((function(a, i) {
            function o(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function s(t) {
                var e;
                t.done ? a(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(o, u)
            }
            s((r = r.apply(t, e || [])).next())
        }))
    }

    function Q(t, e) {
        var n, r, a, i, o = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (n = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                        switch (r = 0, a && (i = [2 & i[0], a.value]), i[0]) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return o.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(a = o.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                    o.label = i[1];
                                    break
                                }
                                if (6 === i[0] && o.label < a[1]) {
                                    o.label = a[1], a = i;
                                    break
                                }
                                if (a && o.label < a[2]) {
                                    o.label = a[2], o.ops.push(i);
                                    break
                                }
                                a[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        i = e.call(t, o)
                    } catch (t) {
                        i = [6, t], r = 0
                    } finally {
                        n = a = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    var $ = "CompressionStream" in window;

    function tt(t) {
        return K(this, void 0, void 0, (function() {
            var e, n;
            return Q(this, (function(r) {
                switch (r.label) {
                    case 0:
                        return r.trys.push([0, 3, , 4]), $ ? (e = new ReadableStream({
                            start: function(e) {
                                return K(this, void 0, void 0, (function() {
                                    return Q(this, (function(n) {
                                        return e.enqueue(t), e.close(), [2]
                                    }))
                                }))
                            }
                        }).pipeThrough(new TextEncoderStream).pipeThrough(new window.CompressionStream("gzip")), n = Uint8Array.bind, [4, et(e)]) : [3, 2];
                    case 1:
                        return [2, new(n.apply(Uint8Array, [void 0, r.sent()]))];
                    case 2:
                        return [3, 4];
                    case 3:
                        return r.sent(), [3, 4];
                    case 4:
                        return [2, null]
                }
            }))
        }))
    }

    function et(t) {
        return K(this, void 0, void 0, (function() {
            var e, n, r, a, i;
            return Q(this, (function(o) {
                switch (o.label) {
                    case 0:
                        e = t.getReader(), n = [], r = !1, a = [], o.label = 1;
                    case 1:
                        return r ? [3, 3] : [4, e.read()];
                    case 2:
                        return i = o.sent(), r = i.done, a = i.value, r ? [2, n] : (n.push.apply(n, a), [3, 1]);
                    case 3:
                        return [2, n]
                }
            }))
        }))
    }
    var nt = [w, a, Object.freeze({
        __proto__: null,
        get data() {
            return B
        },
        start: function() {
            Z()
        },
        set: V,
        identify: F,
        compute: G,
        reset: Z,
        stop: function() {
            Z()
        }
    }), r, X, i, o, e, A, U, n];

    function rt() {
        M = {}, S = {}, N(5), nt.forEach((function(t) {
            return Ta(t.start)()
        }))
    }

    function at() {
        nt.slice().reverse().forEach((function(t) {
            return Ta(t.stop)()
        })), M = {}, S = {}
    }

    function it() {
        G(), y(), ra(), Vr(0), Y(), Zr(), Yr()
    }
    var ot = /\S/gi,
        ut = !0,
        st = null,
        ct = null,
        lt = null;

    function dt(t, e, n, r) {
        if (void 0 === r && (r = !1), t) switch (n) {
            case 0:
                return t;
            case 1:
                switch (e) {
                    case "*T":
                    case "value":
                    case "placeholder":
                    case "click":
                    case "input":
                        return function(t) {
                            var e = -1,
                                n = 0,
                                r = !1,
                                a = !1,
                                i = !1,
                                o = null;
                            if (ut && null === st) try {
                                st = new RegExp("\\p{N}", "gu"), ct = new RegExp("\\p{L}", "gu"), lt = new RegExp("\\p{Sc}", "gu")
                            } catch (t) {
                                ut = !1
                            }
                            for (var u = 0; u < t.length; u++) {
                                var s = t.charCodeAt(u);
                                if (r = r || s >= 48 && s <= 57, a = a || 64 === s, i = 9 === s || 10 === s || 13 === s || 32 === s, 0 === u || u === t.length - 1 || i) {
                                    if (r || a) {
                                        null === o && (o = t.split(""));
                                        var c = t.substring(e + 1, i ? u : u + 1);
                                        c = ut && null !== lt ? c.match(lt) ? c : c.replace(ct, "▪").replace(st, "▫") : ft(c), o.splice(e + 1 - n, c.length, c), n += c.length - 1
                                    }
                                    i && (r = !1, a = !1, e = u)
                                }
                            }
                            return o ? o.join("") : t
                        }(t)
                }
                return t;
            case 2:
            case 3:
                switch (e) {
                    case "*T":
                        return r ? function(t) {
                            var e = t.trim();
                            if (e.length > 0) {
                                var n = e[0],
                                    r = t.indexOf(n),
                                    a = t.substr(0, r),
                                    i = t.substr(r + e.length);
                                return "" + a + e.length.toString(36) + i
                            }
                            return t
                        }(t) : ft(t);
                    case "src":
                    case "srcset":
                    case "title":
                    case "alt":
                        return 3 === n ? "" : t;
                    case "value":
                    case "click":
                    case "input":
                        return function(t) {
                            for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", r = 0; r < e; r++) n += r > 0 && r % 5 == 0 ? " " : "•";
                            return n
                        }(t);
                    case "placeholder":
                        return ft(t)
                }
        }
        return t
    }

    function ft(t) {
        return t.replace(ot, "•")
    }
    var ht, pt = [];

    function vt(t, e, n) {
        null !== t && n && n.length >= 5 && (ht = {
            id: t,
            target: e,
            hash: d(n)
        }, pt.indexOf(ht.hash) < 0 && (pt.push(ht.hash), xr(41)))
    }
    var gt = "load,active,fixed,visible,focus,show,collaps,animat".split(","),
        mt = {};

    function bt(t, e) {
        var n = t.attributes,
            r = t.prefix ? t.prefix[e] : null,
            a = 0 === e ? "~" + (t.position - 1) : ":nth-of-type(" + t.position + ")";
        switch (t.tag) {
            case "STYLE":
            case "TITLE":
            case "LINK":
            case "META":
            case "*T":
            case "*D":
                return "";
            case "HTML":
                return "HTML";
            default:
                if (null === r) return "";
                r += ">", t.tag = 0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag;
                var i = "" + r + t.tag + a,
                    o = "id" in n && n.id.length > 0 ? n.id : null,
                    u = "BODY" !== t.tag && "class" in n && n.class.length > 0 ? n.class.trim().split(/\s+/).filter((function(t) {
                        return yt(t)
                    })).join(".") : null;
                if (u && u.length > 0)
                    if (0 === e) {
                        var s = "" + function(t) {
                            for (var e = t.split(">"), n = 0; n < e.length; n++) {
                                var r = e[n].indexOf("~"),
                                    a = e[n].indexOf(".");
                                e[n] = e[n].substring(0, a > 0 ? a : r > 0 ? r : e[n].length)
                            }
                            return e.join(">")
                        }(r) + t.tag + "." + u;
                        s in mt || (mt[s] = []), mt[s].indexOf(t.id) < 0 && mt[s].push(t.id), i = s + "~" + mt[s].indexOf(t.id)
                    } else i = "" + r + t.tag + "." + u + a;
                return i = o && yt(o) ? function(t) {
                    var e = t.lastIndexOf("*S"),
                        n = t.lastIndexOf("iframe:HTML"),
                        r = Math.max(e, n);
                    if (r < 0) return "";
                    return t.substring(0, t.indexOf(">", r) + 1)
                }(r) + "#" + o : i
        }
    }

    function yt(t) {
        if (!t) return !1;
        if (gt.some((function(e) {
                return t.toLowerCase().indexOf(e) >= 0
            }))) return !1;
        for (var e = 0; e < t.length; e++) {
            var n = t.charCodeAt(e);
            if (n >= 48 && n <= 57) return !1
        }
        return !0
    }
    var wt = {},
        kt = [],
        Et = null,
        Ot = null,
        Mt = null;

    function St() {
        wt = {}, kt = [], Et = null, Ot = null
    }

    function Nt(t, e) {
        return void 0 === e && (e = 0), K(this, void 0, void 0, (function() {
            var n, r, a;
            return Q(this, (function(i) {
                for (n = 0, r = kt; n < r.length; n++)
                    if (r[n].task === t) return [2];
                return a = new Promise((function(n) {
                    kt[1 === e ? "unshift" : "push"]({
                        task: t,
                        resolve: n,
                        id: da()
                    })
                })), null === Et && null === Ot && xt(), [2, a]
            }))
        }))
    }

    function xt() {
        var t = kt.shift();
        t && (Et = t, t.task().then((function() {
            t.id === da() && (t.resolve(), Et = null, xt())
        })).catch((function(e) {
            t.id === da() && (e && Dr(0, 1, e.name, e.message, e.stack), Et = null, xt())
        })))
    }

    function _t(t) {
        var e = Ct(t);
        return e in wt ? performance.now() - wt[e].start > wt[e].yield ? 0 : 1 : 2
    }

    function Tt(t) {
        wt[Ct(t)] = {
            start: performance.now(),
            calls: 0,
            yield: 30
        }
    }

    function Dt(t) {
        var e = performance.now(),
            n = Ct(t),
            r = e - wt[n].start;
        x(t.cost, r), N(5), wt[n].calls > 0 && x(4, r)
    }

    function It(t) {
        return K(this, void 0, void 0, (function() {
            var e, n;
            return Q(this, (function(r) {
                switch (r.label) {
                    case 0:
                        return (e = Ct(t)) in wt ? (Dt(t), n = wt[e], [4, jt()]) : [3, 2];
                    case 1:
                        n.yield = r.sent().timeRemaining(),
                            function(t) {
                                var e = Ct(t);
                                if (wt && wt[e]) {
                                    var n = wt[e].calls,
                                        r = wt[e].yield;
                                    Tt(t), wt[e].calls = n + 1, wt[e].yield = r
                                }
                            }(t), r.label = 2;
                    case 2:
                        return [2, e in wt ? 1 : 2]
                }
            }))
        }))
    }

    function Ct(t) {
        return t.id + "." + t.cost
    }

    function jt() {
        return K(this, void 0, void 0, (function() {
            return Q(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return Ot ? [4, Ot] : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2, new Promise((function(t) {
                            Lt(t, {
                                timeout: 5e3
                            })
                        }))]
                }
            }))
        }))
    }
    var zt, Lt = window.requestIdleCallback || function(t, e) {
        var n = performance.now(),
            r = new MessageChannel,
            a = r.port1,
            i = r.port2;
        a.onmessage = function(r) {
            var a = performance.now(),
                o = a - n,
                u = a - r.data;
            if (u > 30 && o < e.timeout) requestAnimationFrame((function() {
                i.postMessage(a)
            }));
            else {
                var s = o > e.timeout;
                t({
                    didTimeout: s,
                    timeRemaining: function() {
                        return s ? 30 : Math.max(0, 30 - u)
                    }
                })
            }
        }, requestAnimationFrame((function() {
            i.postMessage(performance.now())
        }))
    };

    function At(t, e, n) {
        return void 0 === e && (e = null), void 0 === n && (n = null), K(this, void 0, void 0, (function() {
            var r, a, i, o, s, c, d, f, h, p, v, b, y, w, k, E, O, M, S, N, x, _;
            return Q(this, (function(T) {
                switch (T.label) {
                    case 0:
                        switch (r = n || l(), a = [r, t], t) {
                            case 8:
                                return [3, 1];
                            case 7:
                                return [3, 2];
                            case 5:
                            case 6:
                                return [3, 3]
                        }
                        return [3, 10];
                    case 1:
                        return i = zt, a.push(i.width), a.push(i.height), g(t, i.width, i.height), br(a), [3, 10];
                    case 2:
                        for (o = 0, s = qn; o < s.length; o++) c = s[o], (a = [c.time, 7]).push(c.data.id), a.push(c.data.interaction), a.push(c.data.visibility), a.push(c.data.name), br(a);
                        return tr(), [3, 10];
                    case 3:
                        if (2 === _t(e)) return [3, 10];
                        if (!((d = Yn()).length > 0)) return [3, 9];
                        f = 0, h = d, T.label = 4;
                    case 4:
                        return f < h.length ? (p = h[f], 0 !== (v = _t(e)) ? [3, 6] : [4, It(e)]) : [3, 8];
                    case 5:
                        v = T.sent(), T.label = 6;
                    case 6:
                        if (2 === v) return [3, 8];
                        for (b = p.data, y = p.metadata.active, w = p.metadata.suspend, k = p.metadata.privacy, E = function(t) {
                                var e = t.metadata.privacy;
                                return "*T" === t.data.tag && !(0 === e || 1 === e)
                            }(p), O = 0, M = y ? ["tag", "attributes", "value"] : ["tag"]; O < M.length; O++)
                            if (b[S = M[O]]) switch (S) {
                                case "tag":
                                    N = Rt(p), x = E ? -1 : 1, a.push(p.id * x), p.parent && y && a.push(p.parent), p.previous && y && a.push(p.previous), a.push(w ? "*M" : b[S]), N && 2 === N.length && a.push("#" + Ht(N[0]) + "." + Ht(N[1]));
                                    break;
                                case "attributes":
                                    for (_ in b[S]) void 0 !== b[S][_] && a.push(Yt(_, b[S][_], k));
                                    break;
                                case "value":
                                    vt(p.metadata.fraud, p.id, b[S]), a.push(dt(b[S], b.tag, k, E))
                            }
                        T.label = 7;
                    case 7:
                        return f++, [3, 4];
                    case 8:
                        6 === t && m(r), br(function(t) {
                            for (var e = [], n = {}, r = 0, a = null, i = 0; i < t.length; i++)
                                if ("string" == typeof t[i]) {
                                    var o = t[i],
                                        u = n[o] || -1;
                                    u >= 0 ? a ? a.push(u) : (a = [u], e.push(a), r++) : (a = null, e.push(o), n[o] = r++)
                                } else a = null, e.push(t[i]), r++;
                            return e
                        }(a), !u.lean), T.label = 9;
                    case 9:
                        return [3, 10];
                    case 10:
                        return [2]
                }
            }))
        }))
    }

    function Rt(t) {
        if (null !== t.metadata.size && 0 === t.metadata.size.length) {
            var e = zn(t.id);
            if (e) return [Math.floor(100 * e.offsetWidth), Math.floor(100 * e.offsetHeight)]
        }
        return t.metadata.size
    }

    function Ht(t) {
        return t.toString(36)
    }

    function Yt(t, e, n) {
        return t + "=" + dt(e, t, n)
    }

    function Wt() {
        zt = null
    }

    function Xt() {
        var t = document.body,
            e = document.documentElement,
            n = t ? t.clientWidth : null,
            r = t ? t.scrollWidth : null,
            a = t ? t.offsetWidth : null,
            i = e ? e.clientWidth : null,
            o = e ? e.scrollWidth : null,
            u = e ? e.offsetWidth : null,
            s = Math.max(n, r, a, i, o, u),
            c = t ? t.clientHeight : null,
            l = t ? t.scrollHeight : null,
            d = t ? t.offsetHeight : null,
            f = e ? e.clientHeight : null,
            h = e ? e.scrollHeight : null,
            p = e ? e.offsetHeight : null,
            v = Math.max(c, l, d, f, h, p);
        null !== zt && s === zt.width && v === zt.height || null === s || null === v || (zt = {
            width: s,
            height: v
        }, At(8))
    }

    function qt(t) {
        var e = {
            x: 0,
            y: 0
        };
        if (t && t.offsetParent)
            do {
                var n = t.offsetParent,
                    r = null === n ? Dn(t.ownerDocument) : null;
                e.x += t.offsetLeft, e.y += t.offsetTop, t = r || n
            } while (t);
        return e
    }
    var Pt = ["input", "textarea", "radio", "button", "canvas"],
        Ut = [];

    function Bt(t) {
        Ia(t, "click", Vt.bind(this, 9, t), !0)
    }

    function Vt(t, e, n) {
        var r = Dn(e),
            a = r ? r.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + a.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + a.scrollTop) : null;
        if (r) {
            var u = qt(r);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        var s = er(n),
            c = function(t) {
                for (; t && t !== document;) {
                    if (t.nodeType === Node.ELEMENT_NODE) {
                        var e = t;
                        if ("A" === e.tagName) return e
                    }
                    t = t.parentNode
                }
                return null
            }(s),
            d = function(t) {
                var e = null,
                    n = document.documentElement;
                if ("function" == typeof t.getBoundingClientRect) {
                    var r = t.getBoundingClientRect();
                    r && r.width > 0 && r.height > 0 && (e = {
                        x: Math.floor(r.left + ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)),
                        y: Math.floor(r.top + ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)),
                        w: Math.floor(r.width),
                        h: Math.floor(r.height)
                    })
                }
                return e
            }(s);
        0 === n.detail && d && (i = Math.round(d.x + d.w / 2), o = Math.round(d.y + d.h / 2));
        var f = d ? Math.max(Math.floor((i - d.x) / d.w * 32767), 0) : 0,
            h = d ? Math.max(Math.floor((o - d.y) / d.h * 32767), 0) : 0;
        null !== i && null !== o && (Ut.push({
            time: l(),
            event: t,
            data: {
                target: s,
                x: i,
                y: o,
                eX: f,
                eY: h,
                button: n.button,
                reaction: Jt(s),
                context: Gt(c),
                text: Ft(s),
                link: c ? c.href : null,
                hash: null,
                trust: n.isTrusted ? 1 : 0
            }
        }), Nt(rr.bind(this, t)))
    }

    function Ft(t) {
        var e = null;
        if (t) {
            var n = t.textContent || t.value || t.alt;
            n && (e = n.trim().replace(/\s+/g, " ").substr(0, 25))
        }
        return e
    }

    function Jt(t) {
        if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t.tagName.toLowerCase();
            if (Pt.indexOf(e) >= 0) return 0
        }
        return 1
    }

    function Gt(t) {
        if (t && t.hasAttribute("target")) switch (t.getAttribute("target")) {
            case "_blank":
                return 1;
            case "_parent":
                return 2;
            case "_top":
                return 3
        }
        return 0
    }

    function Zt() {
        Ut = []
    }
    var Kt = [];

    function Qt(t, e) {
        Kt.push({
            time: l(),
            event: 38,
            data: {
                target: er(e),
                action: t
            }
        }), Nt(rr.bind(this, 38))
    }

    function $t() {
        Kt = []
    }
    var te = null,
        ee = [];

    function ne(t) {
        var e = er(t),
            n = An(e);
        if (e && e.type && n) {
            var r = e.value;
            switch (e.type) {
                case "radio":
                case "checkbox":
                    r = e.checked ? "true" : "false"
            }
            var a = {
                target: e,
                value: r
            };
            ee.length > 0 && ee[ee.length - 1].data.target === a.target && ee.pop(), ee.push({
                time: l(),
                event: 27,
                data: a
            }), D(te), te = T(re, 500, 27)
        }
    }

    function re(t) {
        Nt(rr.bind(this, t))
    }

    function ae() {
        ee = []
    }
    var ie, oe = [],
        ue = null;

    function se(t, e, n) {
        var r = Dn(e),
            a = r ? r.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + a.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + a.scrollTop) : null;
        if (r) {
            var u = qt(r);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        null !== i && null !== o && le({
            time: l(),
            event: t,
            data: {
                target: er(n),
                x: i,
                y: o
            }
        })
    }

    function ce(t, e, n) {
        var r = Dn(e),
            a = r ? r.contentDocument.documentElement : document.documentElement,
            i = n.changedTouches,
            o = l();
        if (i)
            for (var u = 0; u < i.length; u++) {
                var s = i[u],
                    c = "clientX" in s ? Math.round(s.clientX + a.scrollLeft) : null,
                    d = "clientY" in s ? Math.round(s.clientY + a.scrollTop) : null;
                c = c && r ? c + Math.round(r.offsetLeft) : c, d = d && r ? d + Math.round(r.offsetTop) : d, null !== c && null !== d && le({
                    time: o,
                    event: t,
                    data: {
                        target: er(n),
                        x: c,
                        y: d
                    }
                })
            }
    }

    function le(t) {
        switch (t.event) {
            case 12:
            case 15:
            case 19:
                var e = oe.length,
                    n = e > 1 ? oe[e - 2] : null;
                n && function(t, e) {
                    var n = t.data.x - e.data.x,
                        r = t.data.y - e.data.y,
                        a = Math.sqrt(n * n + r * r),
                        i = e.time - t.time,
                        o = e.data.target === t.data.target;
                    return e.event === t.event && o && a < 20 && i < 25
                }(n, t) && oe.pop(), oe.push(t), D(ue), ue = T(de, 500, t.event);
                break;
            default:
                oe.push(t), de(t.event)
        }
    }

    function de(t) {
        Nt(rr.bind(this, t))
    }

    function fe() {
        oe = []
    }

    function he() {
        var t = document.documentElement;
        ie = {
            width: t && "clientWidth" in t ? Math.min(t.clientWidth, window.innerWidth) : window.innerWidth,
            height: t && "clientHeight" in t ? Math.min(t.clientHeight, window.innerHeight) : window.innerHeight
        }, rr(11)
    }

    function pe() {
        ie = null
    }
    var ve = [],
        ge = null;

    function me(t) {
        void 0 === t && (t = null);
        var e = window,
            n = document.documentElement,
            r = t ? er(t) : n;
        if (r && r.nodeType === Node.DOCUMENT_NODE) {
            var a = Dn(r);
            e = a ? a.contentWindow : e, r = n = r.documentElement
        }
        var i = r === n && "pageXOffset" in e ? Math.round(e.pageXOffset) : Math.round(r.scrollLeft),
            o = r === n && "pageYOffset" in e ? Math.round(e.pageYOffset) : Math.round(r.scrollTop),
            u = {
                time: l(),
                event: 10,
                data: {
                    target: r,
                    x: i,
                    y: o
                }
            };
        if ((null !== t || 0 !== i || 0 !== o) && null !== i && null !== o) {
            var s = ve.length,
                c = s > 1 ? ve[s - 2] : null;
            c && function(t, e) {
                var n = t.data.x - e.data.x,
                    r = t.data.y - e.data.y;
                return n * n + r * r < 400 && e.time - t.time < 25
            }(c, u) && ve.pop(), ve.push(u), D(ge), ge = T(be, 500, 10)
        }
    }

    function be(t) {
        Nt(rr.bind(this, t))
    }
    var ye = null,
        we = null,
        ke = null;

    function Ee(t) {
        var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
        if (null !== e && !(null === e.anchorNode && null === e.focusNode || e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)) {
            var n = ye.start ? ye.start : null;
            null !== we && null !== ye.start && n !== e.anchorNode && (D(ke), Oe(21)), ye = {
                start: e.anchorNode,
                startOffset: e.anchorOffset,
                end: e.focusNode,
                endOffset: e.focusOffset
            }, we = e, D(ke), ke = T(Oe, 500, 21)
        }
    }

    function Oe(t) {
        Nt(rr.bind(this, t))
    }

    function Me() {
        we = null, ye = {
            start: 0,
            startOffset: 0,
            end: 0,
            endOffset: 0
        }
    }
    var Se, Ne, xe = [];

    function _e(t) {
        xe.push({
            time: l(),
            event: 39,
            data: {
                target: er(t)
            }
        }), Nt(rr.bind(this, 39))
    }

    function Te() {
        xe = []
    }

    function De(t) {
        Se = {
            name: t.type
        }, rr(26), ai()
    }

    function Ie() {
        Se = null
    }

    function Ce() {
        Ne = {
            visible: "visibilityState" in document ? document.visibilityState : "default"
        }, rr(28)
    }

    function je() {
        Ne = null
    }

    function ze(t) {
        ! function(t) {
            var e = Dn(t);
            Ia(e ? e.contentWindow : t === document ? window : t, "scroll", me, !0)
        }(t), t.nodeType === Node.DOCUMENT_NODE && (Bt(t), function(t) {
            Ia(t, "cut", Qt.bind(this, 0), !0), Ia(t, "copy", Qt.bind(this, 1), !0), Ia(t, "paste", Qt.bind(this, 2), !0)
        }(t), function(t) {
            Ia(t, "mousedown", se.bind(this, 13, t), !0), Ia(t, "mouseup", se.bind(this, 14, t), !0), Ia(t, "mousemove", se.bind(this, 12, t), !0), Ia(t, "wheel", se.bind(this, 15, t), !0), Ia(t, "dblclick", se.bind(this, 16, t), !0), Ia(t, "touchstart", ce.bind(this, 17, t), !0), Ia(t, "touchend", ce.bind(this, 18, t), !0), Ia(t, "touchmove", ce.bind(this, 19, t), !0), Ia(t, "touchcancel", ce.bind(this, 20, t), !0)
        }(t), function(t) {
            Ia(t, "input", ne, !0)
        }(t), function(t) {
            Ia(t, "selectstart", Ee.bind(this, t), !0), Ia(t, "selectionchange", Ee.bind(this, t), !0)
        }(t), function(t) {
            Ia(t, "submit", _e, !0)
        }(t))
    }
    var Le = Object.freeze({
            __proto__: null,
            start: function() {
                ar = [], or(), Zt(), $t(), fe(), ae(), Ia(window, "resize", he), he(), Ia(document, "visibilitychange", Ce), Ce(), ve = [], me(), Me(), Te(), Ia(window, "pagehide", De)
            },
            stop: function() {
                ar = [], or(), Zt(), $t(), D(ue), oe.length > 0 && de(oe[oe.length - 1].event), D(te), ae(), pe(), je(), D(ge), ve = [], Me(), D(ke), Te(), Ie()
            },
            observe: ze
        }),
        Ae = /[^0-9\.]/g;

    function Re(t, e) {
        if (void 0 === e && (e = 1), null !== t) switch (typeof t) {
            case "number":
                return Math.round(t * e);
            case "string":
                return Math.round(parseFloat(t.replace(Ae, "")) * e)
        }
        return null
    }
    var He = ["title", "alt", "onload", "onfocus", "onerror", "data-drupal-form-submit-last"],
        Ye = /[\r\n]+/g;

    function We(e, n) {
        var r = null;
        if (2 === n && !1 === Hn(e)) return r;
        0 !== n && e.nodeType === Node.TEXT_NODE && e.parentElement && "STYLE" === e.parentElement.tagName && (e = e.parentNode);
        var a = !1 === Hn(e) ? "add" : "update",
            i = e.parentElement ? e.parentElement : null,
            o = e.ownerDocument !== document;
        switch (e.nodeType) {
            case Node.DOCUMENT_TYPE_NODE:
                i = o && e.parentNode ? Dn(e.parentNode) : i;
                var u = e,
                    s = {
                        tag: (o ? "iframe:" : "") + "*D",
                        attributes: {
                            name: u.name,
                            publicId: u.publicId,
                            systemId: u.systemId
                        }
                    };
                t[a](e, i, s, n);
                break;
            case Node.DOCUMENT_NODE:
                e === document && Sn(document), Xe(e);
                break;
            case Node.DOCUMENT_FRAGMENT_NODE:
                var c = e;
                if (c.host)
                    if (Sn(c), "function" === typeof c.constructor && c.constructor.toString().indexOf("[native code]") >= 0) {
                        Xe(c);
                        for (var l = "", d = 0, f = ("adoptedStyleSheets" in c ? c.adoptedStyleSheets : []); d < f.length; d++) {
                            l += Pe(f[d])
                        }
                        var h = {
                            tag: "*S",
                            attributes: {
                                style: l
                            }
                        };
                        t[a](e, c.host, h, n)
                    } else t[a](e, c.host, {
                        tag: "*P",
                        attributes: {}
                    }, n);
                break;
            case Node.TEXT_NODE:
                if (i = i || e.parentNode, "update" === a || i && Hn(i) && "STYLE" !== i.tagName) {
                    var p = {
                        tag: "*T",
                        value: e.nodeValue
                    };
                    t[a](e, i, p, n)
                }
                break;
            case Node.ELEMENT_NODE:
                var v = e,
                    g = v.tagName,
                    m = function(t) {
                        var e = {},
                            n = t.attributes;
                        if (n && n.length > 0)
                            for (var r = 0; r < n.length; r++) {
                                var a = n[r].name;
                                He.indexOf(a) < 0 && (e[a] = n[r].value)
                            }
                        "INPUT" === t.tagName && !("value" in e) && t.value && (e.value = t.value);
                        return e
                    }(v);
                switch (i = e.parentElement ? e.parentElement : e.parentNode ? e.parentNode : null, "http://www.w3.org/2000/svg" === v.namespaceURI && (g = "svg:" + g), g) {
                    case "HTML":
                        i = o && i ? Dn(i) : null;
                        var b = {
                            tag: (o ? "iframe:" : "") + g,
                            attributes: m
                        };
                        t[a](e, i, b, n);
                        break;
                    case "SCRIPT":
                        if ("type" in m && "application/ld+json" === m.type) try {
                            ! function t(e) {
                                for (var n = 0, r = Object.keys(e); n < r.length; n++) {
                                    var a = r[n],
                                        i = e[a];
                                    if ("@type" === a && "string" == typeof i) switch (i = (i = i.toLowerCase()).indexOf("article") >= 0 || i.indexOf("posting") >= 0 ? "article" : i) {
                                        case "article":
                                        case "recipe":
                                            na(5, e[a]), na(8, e.creator), na(18, e.headline);
                                            break;
                                        case "product":
                                            na(5, e[a]), na(10, e.name), na(12, e.sku), e.brand && na(6, e.brand.name);
                                            break;
                                        case "aggregaterating":
                                            e.ratingValue && (_(11, Re(e.ratingValue, 100)), _(18, Re(e.bestRating)), _(19, Re(e.worstRating))), _(12, Re(e.ratingCount)), _(17, Re(e.reviewCount));
                                            break;
                                        case "person":
                                            na(8, e.name);
                                            break;
                                        case "offer":
                                            na(7, e.availability), na(14, e.itemCondition), na(13, e.priceCurrency), na(12, e.sku), _(13, Re(e.price));
                                            break;
                                        case "brand":
                                            na(6, e.name)
                                    }
                                    null !== i && "object" == typeof i && t(i)
                                }
                            }(JSON.parse(v.text.replace(Ye, "")))
                        } catch (t) {}
                        break;
                    case "NOSCRIPT":
                        break;
                    case "META":
                        var y = "property" in m ? "property" : "name" in m ? "name" : null;
                        if (y && "content" in m) {
                            var w = m.content;
                            switch (m[y]) {
                                case "og:title":
                                    na(20, w);
                                    break;
                                case "og:type":
                                    na(19, w);
                                    break;
                                case "generator":
                                    na(21, w)
                            }
                        }
                        break;
                    case "HEAD":
                        var k = {
                            tag: g,
                            attributes: m
                        };
                        location && (k.attributes["*B"] = location.protocol + "//" + location.hostname), t[a](e, i, k, n);
                        break;
                    case "STYLE":
                        var E = {
                            tag: g,
                            attributes: m,
                            value: qe(v)
                        };
                        t[a](e, i, E, n);
                        break;
                    case "IFRAME":
                        var O = e,
                            M = {
                                tag: g,
                                attributes: m
                            };
                        Tn(O) && (! function(t) {
                            !1 === Hn(t) && Ia(t, "load", on.bind(this, t, "childList"), !0)
                        }(O), M.attributes["*O"] = "true", O.contentDocument && O.contentWindow && "loading" !== O.contentDocument.readyState && (r = O.contentDocument)), t[a](e, i, M, n);
                        break;
                    default:
                        var S = {
                            tag: g,
                            attributes: m
                        };
                        v.shadowRoot && (r = v.shadowRoot), t[a](e, i, S, n)
                }
        }
        return r
    }

    function Xe(t) {
        Hn(t) || (! function(t) {
            try {
                var e = s("MutationObserver"),
                    n = e in window ? new window[e](Ta(tn)) : null;
                n && (n.observe(t, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }), Be.push(n))
            } catch (t) {
                Dr(2, 0, t ? t.name : null)
            }
        }(t), ze(t))
    }

    function qe(t) {
        var e = t.textContent ? t.textContent.trim() : "",
            n = t.dataset ? Object.keys(t.dataset).length : 0;
        return (0 === e.length || n > 0) && (e = Pe(t.sheet)), e
    }

    function Pe(t) {
        var e = "",
            n = null;
        try {
            n = t ? t.cssRules : []
        } catch (t) {
            if (Dr(1, 1, t ? t.name : null), t && "SecurityError" !== t.name) throw t
        }
        if (null !== n)
            for (var r = 0; r < n.length; r++) e += n[r].cssText;
        return e
    }

    function Ue(t, e, n) {
        return K(this, void 0, void 0, (function() {
            var r, a, i, o, u;
            return Q(this, (function(s) {
                switch (s.label) {
                    case 0:
                        r = [t], s.label = 1;
                    case 1:
                        if (!(r.length > 0)) return [3, 4];
                        for (a = r.shift(), i = a.firstChild; i;) r.push(i), i = i.nextSibling;
                        return 0 !== (o = _t(e)) ? [3, 3] : [4, It(e)];
                    case 2:
                        o = s.sent(), s.label = 3;
                    case 3:
                        return 2 === o ? [3, 4] : ((u = We(a, n)) && r.push(u), [3, 1]);
                    case 4:
                        return [2]
                }
            }))
        }))
    }
    var Be = [],
        Ve = [],
        Fe = null,
        Je = null,
        Ge = null,
        Ze = [],
        Ke = null,
        Qe = null,
        $e = {};

    function tn(t) {
        var e = l();
        H(6, e), Ve.push({
            time: e,
            mutations: t
        }), Nt(en, 1).then((function() {
            T(Xt), Ta(Zn)()
        }))
    }

    function en() {
        return K(this, void 0, void 0, (function() {
            var t, e, n, r, a, i, o, u, s;
            return Q(this, (function(c) {
                switch (c.label) {
                    case 0:
                        Tt(t = {
                            id: da(),
                            cost: 3
                        }), c.label = 1;
                    case 1:
                        if (!(Ve.length > 0)) return [3, 8];
                        e = Ve.shift(), n = 0, r = e.mutations, c.label = 2;
                    case 2:
                        return n < r.length ? (a = r[n], 0 !== (i = _t(t)) ? [3, 4] : [4, It(t)]) : [3, 6];
                    case 3:
                        i = c.sent(), c.label = 4;
                    case 4:
                        if (2 === i) return [3, 6];
                        switch (o = a.target, (u = function(t, e) {
                            var n = t.target ? An(t.target.parentNode) : null;
                            if (n && "HTML" !== n.data.tag) {
                                var r = l() > Qe,
                                    a = An(t.target),
                                    i = a && a.selector ? a.selector.join() : t.target.nodeName,
                                    o = [n.selector ? n.selector.join() : "", i, t.attributeName, nn(t.addedNodes), nn(t.removedNodes)].join();
                                $e[o] = o in $e ? $e[o] : [0];
                                var u = $e[o];
                                if (!1 === r && u[0] >= 10 && rn(u[1], 2, e), u[0] = r ? u[0] + 1 : 1, 10 === u[0]) return u[1] = t.removedNodes, "suspend";
                                if (u[0] > 10) return ""
                            }
                            return t.type
                        }(a, t)) && o && o.ownerDocument && Sn(o.ownerDocument), u && o && o.nodeType == Node.DOCUMENT_FRAGMENT_NODE && o.host && Sn(o), u) {
                            case "attributes":
                                We(o, 3);
                                break;
                            case "characterData":
                                We(o, 4);
                                break;
                            case "childList":
                                rn(a.addedNodes, 1, t), rn(a.removedNodes, 2, t);
                                break;
                            case "suspend":
                                (s = An(o)) && (s.metadata.suspend = !0)
                        }
                        c.label = 5;
                    case 5:
                        return n++, [3, 2];
                    case 6:
                        return [4, At(6, t, e.time)];
                    case 7:
                        return c.sent(), [3, 1];
                    case 8:
                        return Dt(t), [2]
                }
            }))
        }))
    }

    function nn(t) {
        for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
        return e.join()
    }

    function rn(t, e, n) {
        return K(this, void 0, void 0, (function() {
            var r, a, i;
            return Q(this, (function(o) {
                switch (o.label) {
                    case 0:
                        r = t ? t.length : 0, a = 0, o.label = 1;
                    case 1:
                        return a < r ? 1 !== e ? [3, 2] : (Ue(t[a], n, e), [3, 5]) : [3, 6];
                    case 2:
                        return 0 !== (i = _t(n)) ? [3, 4] : [4, It(n)];
                    case 3:
                        i = o.sent(), o.label = 4;
                    case 4:
                        if (2 === i) return [3, 6];
                        We(t[a], e), o.label = 5;
                    case 5:
                        return a++, [3, 1];
                    case 6:
                        return [2]
                }
            }))
        }))
    }

    function an(t, e) {
        return void 0 === e && (e = !1), Ze.indexOf(t) < 0 && Ze.push(t), Ke && D(Ke), Ke = T((function() {
            ! function(t) {
                for (var e = 0, n = Ze; e < n.length; e++) {
                    var r = n[e];
                    if (r) {
                        var a = r.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
                        if (a && Hn(r)) continue;
                        on(r, a || t ? "childList" : "characterData")
                    }
                }
                Ze = []
            }(e)
        }), 33), t
    }

    function on(t, e) {
        Ta(tn)([{
            addedNodes: [t],
            attributeName: null,
            attributeNamespace: null,
            nextSibling: null,
            oldValue: null,
            previousSibling: null,
            removedNodes: [],
            target: t,
            type: e
        }])
    }
    var un = 1,
        sn = [],
        cn = [],
        ln = [],
        dn = {},
        fn = [],
        hn = [],
        pn = {},
        vn = [],
        gn = [],
        mn = [],
        bn = null,
        yn = null,
        wn = null,
        kn = null;

    function En() {
        Mn(), Sn(document, !0)
    }

    function On() {
        Mn()
    }

    function Mn() {
        un = 1, sn = [], cn = [], ln = [], dn = {}, fn = [], hn = [], vn = "address,password,contact".split(","), gn = "password,secret,pass,social,ssn,name,code,dob,cell,mob,contact,hidden,account,cvv,ccv,email,tel,phone,address,addr,card,zip".split(","), mn = "radio,checkbox,range,button,reset,submit".split(","), bn = new WeakMap, yn = new WeakMap, wn = new WeakMap, kn = new WeakMap, mt = {}
    }

    function Sn(t, e) {
        void 0 === e && (e = !1);
        try {
            e && u.unmask.forEach((function(t) {
                return t.indexOf("!") < 0 ? hn.push(t) : fn.push(t.substr(1))
            })), "querySelectorAll" in t && (u.regions.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return Jn(t, "" + e[0])
                }))
            })), u.mask.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return wn.set(t, 3)
                }))
            })), u.fraud.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return kn.set(t, e[0])
                }))
            })), hn.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return wn.set(t, 0)
                }))
            })))
        } catch (t) {
            Dr(5, 1, t ? t.name : null)
        }
    }

    function Nn(t, e) {
        if (void 0 === e && (e = !1), null === t) return null;
        var n = bn.get(t);
        return !n && e && (n = un++, bn.set(t, n)), n || null
    }

    function xn(t, e, n, r) {
        var a, i = Nn(t, !0),
            o = e ? Nn(e) : null,
            s = Wn(t),
            c = null,
            l = Gn(t) ? i : null,
            d = null,
            f = kn.has(t) ? kn.get(t) : null,
            h = u.content ? 1 : 3;
        o >= 0 && cn[o] && ((c = cn[o]).children.push(i), l = null === l ? c.region : l, d = c.fragment, f = null === f ? c.metadata.fraud : f, h = c.metadata.privacy), n.attributes && "data-clarity-region" in n.attributes && (Jn(t, n.attributes["data-clarity-region"]), l = i), sn[i] = t, cn[i] = {
                id: i,
                parent: o,
                previous: s,
                children: [],
                data: n,
                selector: null,
                hash: null,
                region: l,
                metadata: {
                    active: !0,
                    suspend: !1,
                    privacy: h,
                    position: null,
                    fraud: f,
                    size: null
                },
                fragment: d
            },
            function(t, e, n) {
                var r = e.data,
                    a = e.metadata,
                    i = a.privacy,
                    o = r.attributes || {},
                    u = r.tag.toUpperCase();
                switch (!0) {
                    case "data-clarity-mask" in o:
                        a.privacy = 3;
                        break;
                    case "data-clarity-unmask" in o:
                        a.privacy = 0;
                        break;
                    case wn.has(t):
                        a.privacy = wn.get(t);
                        break;
                    case kn.has(t):
                        a.privacy = 2;
                        break;
                    case "*T" === u:
                        var s = n && n.data ? n.data.tag : "",
                            c = n && n.selector ? n.selector[1] : "";
                        a.privacy = ["STYLE", "TITLE", "svg:style"].includes(s) || fn.some((function(t) {
                            return c.indexOf(t) >= 0
                        })) ? 0 : i;
                        break;
                    case "INPUT" === u && 0 === i:
                        var l = "";
                        Object.keys(o).forEach((function(t) {
                            return l += o[t].toLowerCase()
                        })), a.privacy = In(l, gn, a);
                        break;
                    case "INPUT" === u && 1 === i:
                        a.privacy = In(o.class, vn, a), a.privacy = In(o.type, gn, a), a.privacy = mn.indexOf(o.type) >= 0 ? 0 : a.privacy;
                        break;
                    case 1 === i:
                        a.privacy = In(o.class, vn, a)
                }
            }(t, cn[i], c), jn(cn[i]), "IMG" === (a = cn[i]).data.tag && 3 === a.metadata.privacy && (a.metadata.size = []), Xn(i, r, cn[i].fragment)
    }

    function _n(t, e, n, r) {
        var a = Nn(t),
            i = e ? Nn(e) : null,
            o = Wn(t),
            u = !1,
            s = !1;
        if (a in cn) {
            var c = cn[a];
            if (c.metadata.active = !0, c.previous !== o && (u = !0, c.previous = o), c.parent !== i) {
                u = !0;
                var l = c.parent;
                if (c.parent = i, null !== i && i >= 0) {
                    var d = null === o ? 0 : cn[i].children.indexOf(o) + 1;
                    cn[i].children.splice(d, 0, a), c.region = Gn(t) ? a : cn[i].region
                } else ! function(t, e) {
                    if (t in cn) {
                        var n = cn[t];
                        n.metadata.active = !1, n.parent = null, Xn(t, e)
                    }
                }(a, r);
                if (null !== l && l >= 0) {
                    var f = cn[l].children.indexOf(a);
                    f >= 0 && cn[l].children.splice(f, 1)
                }
                s = !0
            }
            for (var h in n) Cn(c.data, n, h) && (u = !0, c.data[h] = n[h]);
            c.fragment && pn[c.fragment] && (u = !0), jn(c), Xn(a, r, cn[a].fragment, u, s)
        }
    }

    function Tn(t) {
        var e = !1;
        if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
            var n = t;
            try {
                n.contentDocument && (yn.set(n.contentDocument, n), e = !0)
            } catch (t) {}
        }
        return e
    }

    function Dn(t) {
        var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
        return e && yn.has(e) ? yn.get(e) : null
    }

    function In(t, e, n) {
        return t && e.some((function(e) {
            return t.indexOf(e) >= 0
        })) ? 2 : n.privacy
    }

    function Cn(t, e, n) {
        if ("object" == typeof t[n] && "object" == typeof e[n]) {
            for (var r in t[n])
                if (t[n][r] !== e[n][r]) return !0;
            for (var r in e[n])
                if (e[n][r] !== t[n][r]) return !0;
            return !1
        }
        return t[n] !== e[n]
    }

    function jn(t) {
        var e = t.parent && t.parent in cn ? cn[t.parent] : null,
            n = e ? e.selector : null,
            r = t.data,
            a = function(t, e) {
                e.metadata.position = 1;
                for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0;) {
                    var r = cn[t.children[n]];
                    if (e.data.tag === r.data.tag) {
                        e.metadata.position = r.metadata.position + 1;
                        break
                    }
                }
                return e.metadata.position
            }(e, t),
            i = {
                id: t.id,
                tag: r.tag,
                prefix: n,
                position: a,
                attributes: r.attributes
            };
        t.selector = [bt(i, 0), bt(i, 1)], t.hash = t.selector.map((function(t) {
            return t ? d(t) : null
        })), t.hash.forEach((function(e) {
            return dn[e] = t.id
        })), t.hash.some((function(t) {
            return -1 !== Ar.indexOf(t)
        })) && (t.fragment = t.id)
    }

    function zn(t) {
        return t in sn ? sn[t] : null
    }

    function Ln(t) {
        return t in cn ? cn[t] : null
    }

    function An(t) {
        var e = Nn(t);
        return e in cn ? cn[e] : null
    }

    function Rn(t) {
        return t in dn ? dn[t] : null
    }

    function Hn(t) {
        return Nn(t) in sn
    }

    function Yn() {
        for (var t = [], e = 0, n = ln; e < n.length; e++) {
            (r = n[e]) in cn && t.push(cn[r])
        }
        for (var r in ln = [], pn) Xr(pn[r], r, !0);
        return pn = {}, t
    }

    function Wn(t) {
        for (var e = null; null === e && t.previousSibling;) e = Nn(t.previousSibling), t = t.previousSibling;
        return e
    }

    function Xn(t, e, n, r, a) {
        if (void 0 === n && (n = null), void 0 === r && (r = !0), void 0 === a && (a = !1), n && !pn[n]) {
            var i = zn(n),
                o = Ln(n);
            i && o && (an(i, !0), o.hash.forEach((function(t) {
                -1 !== Ar.indexOf(t) && (pn[n] = t)
            })))
        }
        var u = ln.indexOf(t);
        u >= 0 && 1 === e && a ? (ln.splice(u, 1), ln.push(t)) : -1 === u && r && ln.push(t)
    }
    var qn = [],
        Pn = null,
        Un = {},
        Bn = [],
        Vn = !1,
        Fn = null;

    function Jn(t, e) {
        !1 === Pn.has(t) && (Pn.set(t, e), (Fn = null === Fn && Vn ? new IntersectionObserver(Kn, {
            threshold: [0, .2, .4, .6, .8, 1]
        }) : Fn) && t && t.nodeType === Node.ELEMENT_NODE && Fn.observe(t))
    }

    function Gn(t) {
        return Pn && Pn.has(t)
    }

    function Zn() {
        for (var t = [], e = 0, n = Bn; e < n.length; e++) {
            var r = n[e],
                a = Nn(r.node);
            a in Un || (a ? (r.data.id = a, Un[a] = r.data, qn.push($n(r.data))) : t.push(r))
        }
        Bn = t, qn.length > 0 && At(7)
    }

    function Kn(t) {
        for (var e = 0, n = t; e < n.length; e++) {
            var r = n[e],
                a = r.target,
                i = r.boundingClientRect,
                o = r.intersectionRect,
                u = r.rootBounds;
            if (Pn.has(a) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
                var s = a ? Nn(a) : null,
                    c = s in Un ? Un[s] : {
                        id: s,
                        name: Pn.get(a),
                        interaction: 16,
                        visibility: 0
                    },
                    l = (o ? o.width * o.height * 1 / (u.width * u.height) : 0) > .05 || r.intersectionRatio > .8,
                    d = (l || 10 == c.visibility) && Math.abs(i.top) + u.height > i.height;
                Qn(a, c, c.interaction, d ? 13 : l ? 10 : 0), c.visibility >= 13 && Fn && Fn.unobserve(a)
            }
        }
        qn.length > 0 && At(7)
    }

    function Qn(t, e, n, r) {
        var a = n > e.interaction || r > e.visibility;
        e.interaction = n > e.interaction ? n : e.interaction, e.visibility = r > e.visibility ? r : e.visibility, e.id ? (e.id in Un && a || !(e.id in Un)) && (Un[e.id] = e, qn.push($n(e))) : Bn.push({
            node: t,
            data: e
        })
    }

    function $n(t) {
        return {
            time: l(),
            data: {
                id: t.id,
                interaction: t.interaction,
                visibility: t.visibility,
                name: t.name
            }
        }
    }

    function tr() {
        qn = []
    }

    function er(t) {
        var e = t.composed && t.composedPath ? t.composedPath() : null,
            n = e && e.length > 0 ? e[0] : t.target;
        return Qe = l() + 3e3, n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    }

    function nr(t, e, n) {
        void 0 === n && (n = null);
        var r = {
            id: 0,
            hash: null,
            privacy: 2,
            node: t
        };
        if (t) {
            var a = An(t);
            if (null !== a) {
                var i = a.metadata;
                r.id = a.id, r.hash = a.hash, r.privacy = i.privacy, a.region && function(t, e) {
                    var n = zn(t),
                        r = t in Un ? Un[t] : {
                            id: t,
                            visibility: 0,
                            interaction: 16,
                            name: Pn.get(n)
                        },
                        a = 16;
                    switch (e) {
                        case 9:
                            a = 20;
                            break;
                        case 27:
                            a = 30
                    }
                    Qn(n, r, a, r.visibility)
                }(a.region, e), i.fraud && vt(i.fraud, a.id, n || a.data.value)
            }
        }
        return r
    }

    function rr(t) {
        return K(this, void 0, void 0, (function() {
            var e, n, r, a, i, o, u, s, c, d, f, h, p, v, m, y, w, k, E, O, M, S, N, x, _, T, D, I, C;
            return Q(this, (function(j) {
                switch (e = l(), n = [e, t], t) {
                    case 13:
                    case 14:
                    case 12:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                        for (r = 0, a = oe; r < a.length; r++) I = a[r], (i = nr(I.data.target, I.event)).id > 0 && ((n = [I.time, I.event]).push(i.id), n.push(I.data.x), n.push(I.data.y), br(n), g(I.event, I.data.x, I.data.y));
                        fe();
                        break;
                    case 9:
                        for (o = 0, u = Ut; o < u.length; o++) I = u[o], s = nr(I.data.target, I.event, I.data.text), n = [I.time, I.event], c = s.hash.join("."), n.push(s.id), n.push(I.data.x), n.push(I.data.y), n.push(I.data.eX), n.push(I.data.eY), n.push(I.data.button), n.push(I.data.reaction), n.push(I.data.context), n.push(dt(I.data.text, "click", s.privacy)), n.push(I.data.link), n.push(c), n.push(I.data.trust), br(n), ur(I.time, I.event, c, I.data.x, I.data.y, I.data.reaction, I.data.context);
                        Zt();
                        break;
                    case 38:
                        for (d = 0, f = Kt; d < f.length; d++) I = f[d], n = [I.time, I.event], (_ = nr(I.data.target, I.event)).id > 0 && (n.push(_.id), n.push(I.data.action), br(n));
                        $t();
                        break;
                    case 11:
                        h = ie, n.push(h.width), n.push(h.height), g(t, h.width, h.height), pe(), br(n);
                        break;
                    case 26:
                        p = Se, n.push(p.name), Ie(), br(n);
                        break;
                    case 27:
                        for (v = 0, m = ee; v < m.length; v++) I = m[v], y = nr(I.data.target, I.event, I.data.value), (n = [I.time, I.event]).push(y.id), n.push(dt(I.data.value, "input", y.privacy)), br(n);
                        ae();
                        break;
                    case 21:
                        (w = ye) && (k = nr(w.start, t), E = nr(w.end, t), n.push(k.id), n.push(w.startOffset), n.push(E.id), n.push(w.endOffset), Me(), br(n));
                        break;
                    case 10:
                        for (O = 0, M = ve; O < M.length; O++) I = M[O], (S = nr(I.data.target, I.event)).id > 0 && ((n = [I.time, I.event]).push(S.id), n.push(I.data.x), n.push(I.data.y), br(n), g(I.event, I.data.x, I.data.y));
                        ve = [];
                        break;
                    case 39:
                        for (N = 0, x = xe; N < x.length; N++) I = x[N], n = [I.time, I.event], (_ = nr(I.data.target, I.event)).id > 0 && (n.push(_.id), br(n));
                        Te();
                        break;
                    case 22:
                        for (T = 0, D = ir; T < D.length; T++) I = D[T], (n = [I.time, I.event]).push(I.data.type), n.push(I.data.hash), n.push(I.data.x), n.push(I.data.y), n.push(I.data.reaction), n.push(I.data.context), br(n, !1);
                        or();
                        break;
                    case 28:
                        C = Ne, n.push(C.visible), br(n), b(e, C.visible), je()
                }
                return [2]
            }))
        }))
    }
    var ar = [],
        ir = [];

    function or() {
        ir = []
    }

    function ur(t, e, n, r, a, i, o) {
        void 0 === i && (i = 1), void 0 === o && (o = 0), ar.push({
            time: t,
            event: 22,
            data: {
                type: e,
                hash: n,
                x: r,
                y: a,
                reaction: i,
                context: o
            }
        }), g(e, r, a)
    }
    var sr, cr, lr, dr, fr, hr = 0,
        pr = 0,
        vr = null,
        gr = 0;

    function mr() {
        dr = !0, hr = 0, pr = 0, gr = 0, sr = [], cr = [], lr = {}, fr = null
    }

    function br(t, e) {
        if (void 0 === e && (e = !0), dr) {
            var n = l(),
                r = t.length > 1 ? t[1] : null,
                a = JSON.stringify(t);
            switch (r) {
                case 5:
                    hr += a.length;
                case 37:
                case 6:
                    pr += a.length, sr.push(a);
                    break;
                default:
                    cr.push(a)
            }
            N(25);
            var i = function() {
                var t = !1 === u.lean && hr > 0 ? 100 : Oa.sequence * u.delay;
                return "string" == typeof u.upload ? Math.max(Math.min(t, 3e4), 100) : u.delay
            }();
            n - gr > 2 * i && (D(vr), vr = null), e && null === vr && (25 !== r && z(), vr = T(wr, i), gr = n, Jr(pr))
        }
    }

    function yr() {
        D(vr), wr(!0), hr = 0, pr = 0, gr = 0, sr = [], cr = [], lr = {}, fr = null, dr = !1
    }

    function wr(t) {
        return void 0 === t && (t = !1), K(this, void 0, void 0, (function() {
            var e, n, r, a, i, o, s, c;
            return Q(this, (function(l) {
                switch (l.label) {
                    case 0:
                        return vr = null, (e = !1 === u.lean && pr > 0 && (pr < 1048576 || Oa.sequence > 0)) && _(1, 1), Zn(),
                            function() {
                                var t = [];
                                ir = [];
                                for (var e = Oa.start + Oa.duration, n = Math.max(e - 2e3, 0), r = 0, a = ar; r < a.length; r++) {
                                    var i = a[r];
                                    i.time >= n && (i.time <= e && ir.push(i), t.push(i))
                                }
                                ar = t, rr(22)
                            }(), it(), n = !0 === t, r = JSON.stringify(Na(n)), a = "[" + cr.join() + "]", i = e ? "[" + sr.join() + "]" : "", o = function(t) {
                                return t.p.length > 0 ? '{"e":' + t.e + ',"a":' + t.a + ',"p":' + t.p + "}" : '{"e":' + t.e + ',"a":' + t.a + "}"
                            }({
                                e: r,
                                a: a,
                                p: i
                            }), n ? (c = null, [3, 3]) : [3, 1];
                    case 1:
                        return [4, tt(o)];
                    case 2:
                        c = l.sent(), l.label = 3;
                    case 3:
                        return x(2, (s = c) ? s.length : o.length), kr(o, s, Oa.sequence, n), cr = [], e && (sr = [], pr = 0, hr = 0), [2]
                }
            }))
        }))
    }

    function kr(t, e, n, r) {
        if (void 0 === r && (r = !1), "string" == typeof u.upload) {
            var a = u.upload,
                i = !1;
            if (r && "sendBeacon" in navigator) try {
                (i = navigator.sendBeacon.bind(navigator)(a, t)) && Or(n)
            } catch (t) {}
            if (!1 === i) {
                n in lr ? lr[n].attempts++ : lr[n] = {
                    data: t,
                    attempts: 1
                };
                var o = new XMLHttpRequest;
                o.open("POST", a), null !== n && (o.onreadystatechange = function() {
                    Ta(Er)(o, n)
                }), o.withCredentials = !0, e ? (o.setRequestHeader("Accept", "application/x-clarity-gzip"), o.send(e)) : o.send(t)
            }
        } else if (u.upload) {
            (0, u.upload)(t), Or(n)
        }
    }

    function Er(t, e) {
        var n = lr[e];
        t && 4 === t.readyState && n && ((t.status < 200 || t.status > 208) && n.attempts <= 1 ? t.status >= 400 && t.status < 500 ? Gr(6) : (0 === t.status && (u.upload = u.fallback ? u.fallback : u.upload), kr(n.data, null, e)) : (fr = {
            sequence: e,
            attempts: n.attempts,
            status: t.status
        }, n.attempts > 1 && Vr(2), 200 === t.status && t.responseText && function(t) {
            var e = t && t.length > 0 ? t.split(" ") : [""];
            switch (e[0]) {
                case "END":
                    Gr(6);
                    break;
                case "UPGRADE":
                    P("Auto");
                    break;
                case "ACTION":
                    u.action && e.length > 1 && u.action(e[1])
            }
        }(t.responseText), 0 === t.status && (kr(n.data, null, e, !0), Gr(3)), t.status >= 200 && t.status <= 208 && Or(e), delete lr[e]))
    }

    function Or(t) {
        1 === t && pa()
    }
    var Mr, Sr = {};

    function Nr(t) {
        var e = t.error || t;
        return e.message in Sr || (Sr[e.message] = 0), Sr[e.message]++ >= 5 || e && e.message && (Mr = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename
        }, xr(31)), !0
    }

    function xr(t) {
        return K(this, void 0, void 0, (function() {
            var e;
            return Q(this, (function(n) {
                switch (e = [l(), t], t) {
                    case 31:
                        e.push(Mr.message), e.push(Mr.line), e.push(Mr.column), e.push(Mr.stack), e.push(Mr.source), br(e);
                        break;
                    case 33:
                        _r && (e.push(_r.code), e.push(_r.name), e.push(_r.message), e.push(_r.stack), e.push(_r.severity), br(e, !1));
                        break;
                    case 41:
                        ht && (e.push(ht.id), e.push(ht.target), e.push(ht.hash), br(e, !1))
                }
                return [2]
            }))
        }))
    }
    var _r, Tr = {};

    function Dr(t, e, n, r, a) {
        void 0 === n && (n = null), void 0 === r && (r = null), void 0 === a && (a = null);
        var i = n ? n + "|" + r : "";
        t in Tr && Tr[t].indexOf(i) >= 0 || (_r = {
            code: t,
            name: n,
            message: r,
            stack: a,
            severity: e
        }, t in Tr ? Tr[t].push(i) : Tr[t] = [i], xr(33))
    }
    var Ir, Cr = {},
        jr = [],
        zr = {},
        Lr = {},
        Ar = [];

    function Rr() {
        try {
            var t = u.extract;
            if (!t) return;
            for (var e = 0; e < t.length; e += 3) {
                var n = t[e],
                    r = t[e + 1];
                switch (n) {
                    case 0:
                        var a = t[e + 2];
                        zr[r] = Pr(a);
                        break;
                    case 1:
                        break;
                    case 2:
                        var i = t[e + 2];
                        Lr[r] = i;
                        break;
                    case 3:
                        Ar = t[e + 2]
                }
            }
        } catch (t) {
            Dr(8, 1, t ? t.name : null)
        }
    }

    function Hr(t) {
        return JSON.parse(JSON.stringify(t))
    }

    function Yr() {
        try {
            for (var t in zr) {
                var e = (a = Ur(Hr(zr[t]))) ? JSON.stringify(a).substring(0, 1e4) : a;
                e && Xr(t, e)
            }
            for (var n in Lr) {
                var r = document.querySelector(Lr[n]);
                r && Xr(n, r.innerText)
            }
        } catch (t) {
            Dr(5, 1, t ? t.name : null)
        }
        var a;
        Vr(40)
    }

    function Wr() {
        jr = []
    }

    function Xr(t, e, n) {
        void 0 === n && (n = !1), (!(t in Cr) || t in Cr && Cr[t] !== e || n) && (Cr[t] = e, jr.push(t))
    }

    function qr() {
        Cr = {}, jr = [], zr = {}, Lr = {}
    }

    function Pr(t) {
        for (var e = [], n = t.split("."); n.length > 0;) {
            var r = n.shift(),
                a = r.indexOf("["),
                i = r.indexOf("{"),
                o = r.indexOf("}");
            e.push({
                name: a > 0 ? r.substring(0, a) : i > 0 ? r.substring(0, i) : r,
                type: a > 0 ? 1 : i > 0 ? 2 : 3,
                condition: i > 0 ? r.substring(i + 1, o) : null
            })
        }
        return e
    }

    function Ur(t, e) {
        if (void 0 === e && (e = window), 0 == t.length) return e;
        var n, r = t.shift();
        if (e && e[r.name]) {
            var a = e[r.name];
            if (1 !== r.type && Br(a, r.condition)) n = Ur(t, a);
            else if (Array.isArray(a)) {
                for (var i = [], o = 0, u = a; o < u.length; o++) {
                    var s = u[o];
                    if (Br(s, r.condition)) {
                        var c = Ur(t, s);
                        c && i.push(c)
                    }
                }
                n = i
            }
            return n
        }
        return null
    }

    function Br(t, e) {
        if (e) {
            var n = e.split(":");
            return n.length > 1 ? t[n[0]] == n[1] : t[n[0]]
        }
        return !0
    }

    function Vr(t) {
        var e = [l(), t];
        switch (t) {
            case 4:
                var n = f;
                n && ((e = [n.time, n.event]).push(n.data.visible), e.push(n.data.docWidth), e.push(n.data.docHeight), e.push(n.data.screenWidth), e.push(n.data.screenHeight), e.push(n.data.scrollX), e.push(n.data.scrollY), e.push(n.data.pointerX), e.push(n.data.pointerY), e.push(n.data.activityTime), br(e, !1)), v();
                break;
            case 25:
                e.push(O.gap), br(e);
                break;
            case 35:
                e.push(Ir.check), br(e, !1);
                break;
            case 3:
                e.push(q.key), br(e);
                break;
            case 2:
                e.push(fr.sequence), e.push(fr.attempts), e.push(fr.status), br(e, !1);
                break;
            case 24:
                e.push(k.key), e.push(k.value), br(e);
                break;
            case 34:
                var r = Object.keys(B);
                if (r.length > 0) {
                    for (var a = 0, i = r; a < i.length; a++) {
                        var o = i[a];
                        e.push(o), e.push(B[o])
                    }
                    Z(), br(e, !1)
                }
                break;
            case 0:
                var u = Object.keys(S);
                if (u.length > 0) {
                    for (var s = 0, c = u; s < c.length; s++) {
                        var d = c[s],
                            h = parseInt(d, 10);
                        e.push(h), e.push(Math.round(S[d]))
                    }
                    S = {}, br(e, !1)
                }
                break;
            case 1:
                var p = Object.keys($r);
                if (p.length > 0) {
                    for (var g = 0, m = p; g < m.length; g++) {
                        var b = m[g];
                        h = parseInt(b, 10);
                        e.push(h), e.push($r[b])
                    }
                    aa(), br(e, !1)
                }
                break;
            case 36:
                var y = Object.keys(R);
                if (y.length > 0) {
                    for (var w = 0, E = y; w < E.length; w++) {
                        var M = E[w];
                        h = parseInt(M, 10);
                        e.push(h), e.push([].concat.apply([], R[M]))
                    }
                    W(), br(e, !1)
                }
                break;
            case 40:
                for (var N = 0, x = jr; N < x.length; N++) {
                    M = x[N];
                    e.push(M), e.push(Cr[M])
                }
                Wr(), br(e, !1)
        }
    }

    function Fr() {
        Ir = {
            check: 0
        }
    }

    function Jr(t) {
        if (0 === Ir.check) {
            var e = Ir.check;
            e = Oa.sequence >= 128 ? 1 : e, e = l() > 72e5 ? 2 : e, (e = t > 10485760 ? 2 : e) !== Ir.check && Gr(e)
        }
    }

    function Gr(t) {
        Ir.check = t, ha(), ai()
    }

    function Zr() {
        0 !== Ir.check && Vr(35)
    }

    function Kr() {
        Ir = null
    }
    var Qr = null,
        $r = null;

    function ta() {
        Qr = {}, $r = {}
    }

    function ea() {
        Qr = {}, $r = {}
    }

    function na(t, e) {
        e && (e = "" + e, t in Qr || (Qr[t] = []), Qr[t].indexOf(e) < 0 && (Qr[t].push(e), t in $r || ($r[t] = []), $r[t].push(e), Qr[t].length > 128 && Gr(5)))
    }

    function ra() {
        Vr(1)
    }

    function aa() {
        $r = {}
    }
    var ia = null,
        oa = [],
        ua = null;

    function sa() {
        ua = null;
        var t = navigator && "userAgent" in navigator ? navigator.userAgent : "",
            e = document && document.title ? document.title : "",
            n = function() {
                var t = {
                        session: ma(),
                        ts: Math.round(Date.now()),
                        count: 1,
                        upgrade: null,
                        upload: ""
                    },
                    e = wa("_clsk");
                if (e) {
                    var n = e.split("|");
                    n.length >= 5 && t.ts - ba(n[1]) < 18e5 && (t.session = n[0], t.count = ba(n[2]) + 1, t.upgrade = ba(n[3]), t.upload = n.length >= 6 ? "https://" + n[5] + "/" + n[4] : "https://" + n[4])
                }
                return t
            }(),
            r = ya();
        ia = {
            projectId: u.projectId || d(location.host),
            userId: r.id,
            sessionId: n.session,
            pageNum: n.count
        }, u.lean = u.track && null !== n.upgrade ? 0 === n.upgrade : u.lean, u.upload = u.track && "string" == typeof u.upload && n.upload && n.upload.length > "https://".length ? n.upload : u.upload, na(0, t), na(3, e), na(1, location.href), na(2, document.referrer), na(15, function() {
            var t = ma();
            if (u.track && va(window, "sessionStorage")) {
                var e = sessionStorage.getItem("_cltk");
                t = e || t, sessionStorage.setItem("_cltk", t)
            }
            return t
        }()), na(16, document.documentElement.lang), na(17, document.dir), navigator && (na(9, navigator.userLanguage || navigator.language), navigator.userAgentData && navigator.userAgentData.getHighEntropyValues && navigator.userAgentData.getHighEntropyValues(["model", "platform", "platformVersion", "uaFullVersion"]).then((function(t) {
            var e;
            na(22, t.platform), na(23, t.platformVersion), null === (e = t.brands) || void 0 === e || e.forEach((function(t) {
                na(24, t.name + "~" + t.version)
            })), na(25, t.model), _(27, t.mobile ? 1 : 0)
        }))), _(0, n.ts), _(1, 0), screen && (_(14, Math.round(screen.width)), _(15, Math.round(screen.height)), _(16, Math.round(screen.colorDepth)));
        for (var a = 0, i = u.cookies; a < i.length; a++) {
            var o = i[a],
                s = wa(o);
            s && V(o, s)
        }
        ga(r)
    }

    function ca() {
        ua = null, ia = null
    }

    function la(t, e) {
        void 0 === e && (e = !0), ia && !1 === e && t(ia, !u.lean), oa.push({
            callback: t,
            wait: e
        })
    }

    function da() {
        return ia ? [ia.userId, ia.sessionId, ia.pageNum].join(".") : ""
    }

    function fa() {
        Ua() && (u.track = !0, ga(ya(), 1))
    }

    function ha() {
        ka("_clsk", "", 0)
    }

    function pa() {
        var t = Math.round(Date.now()),
            e = u.upload && "string" == typeof u.upload ? u.upload.replace("https://", "") : "",
            n = u.lean ? 0 : 1;
        ! function(t) {
            oa.length > 0 && oa.forEach((function(e) {
                !e.callback || e.wait && !t || e.callback(ia, !u.lean)
            }))
        }(n), ka("_clsk", [ia.sessionId, t, ia.pageNum, n, e].join("|"), 1)
    }

    function va(t, e) {
        try {
            return !!t[e]
        } catch (t) {
            return !1
        }
    }

    function ga(t, e) {
        void 0 === e && (e = null), e = null === e ? t.consent : e;
        var n = Math.ceil((Date.now() + 31536e6) / 864e5);
        (null === t.expiry || Math.abs(n - t.expiry) >= 1 || t.consent !== e) && ka("_clck", [ia.userId, 1, n.toString(36), e].join("|"), 365)
    }

    function ma() {
        var t = Math.floor(Math.random() * Math.pow(2, 32));
        return window && window.crypto && window.crypto.getRandomValues && Uint32Array && (t = window.crypto.getRandomValues(new Uint32Array(1))[0]), t.toString(36)
    }

    function ba(t, e) {
        return void 0 === e && (e = 10), parseInt(t, e)
    }

    function ya() {
        var t = {
                id: ma(),
                expiry: null,
                consent: 0
            },
            e = wa("_clck");
        if (e && e.length > 0) {
            for (var n = e.split("|"), r = 0, a = 0, i = document.cookie.split(";"); a < i.length; a++) {
                r += "_clck" === i[a].split("=")[0].trim() ? 1 : 0
            }
            if (1 === n.length || r > 1) {
                var o = ";expires=" + new Date(0).toUTCString() + ";path=/";
                document.cookie = "_clck=" + o, document.cookie = "_clsk=" + o
            }
            n.length > 2 && (t.expiry = ba(n[2], 36)), n.length > 3 && 1 === ba(n[3]) && (t.consent = 1), u.track = u.track || 1 === t.consent, t.id = u.track ? n[0] : t.id
        }
        return t
    }

    function wa(t) {
        if (va(document, "cookie")) {
            var e = document.cookie.split(";");
            if (e)
                for (var n = 0; n < e.length; n++) {
                    var r = e[n].split("=");
                    if (r.length > 1 && r[0] && r[0].trim() === t) return r[1]
                }
        }
        return null
    }

    function ka(t, e, n) {
        if (u.track && (navigator && navigator.cookieEnabled || va(document, "cookie"))) {
            var r = new Date;
            r.setDate(r.getDate() + n);
            var a = t + "=" + e + ";" + (r ? "expires=" + r.toUTCString() : "") + ";path=/";
            try {
                if (null === ua) {
                    for (var i = location.hostname ? location.hostname.split(".") : [], o = i.length - 1; o >= 0; o--)
                        if (ua = "." + i[o] + (ua || ""), o < i.length - 1 && (document.cookie = a + ";domain=" + ua, wa(t) === e)) return;
                    ua = ""
                }
            } catch (t) {
                ua = ""
            }
            document.cookie = ua ? a + ";domain=" + ua : a
        }
    }
    var Ea, Oa = null;

    function Ma() {
        var t = ia;
        Oa = {
            version: "0.6.42",
            sequence: 0,
            start: 0,
            duration: 0,
            projectId: t.projectId,
            userId: t.userId,
            sessionId: t.sessionId,
            pageNum: t.pageNum,
            upload: 0,
            end: 0
        }
    }

    function Sa() {
        Oa = null
    }

    function Na(t) {
        return Oa.start = Oa.start + Oa.duration, Oa.duration = l() - Oa.start, Oa.sequence++, Oa.upload = t && "sendBeacon" in navigator ? 1 : 0, Oa.end = t ? 1 : 0, [Oa.version, Oa.sequence, Oa.start, Oa.duration, Oa.projectId, Oa.userId, Oa.sessionId, Oa.pageNum, Oa.upload, Oa.end]
    }

    function xa() {
        Ea = []
    }

    function _a(t) {
        if (Ea && -1 === Ea.indexOf(t.message)) {
            var e = u.report;
            if (e && e.length > 0) {
                var n = {
                    v: Oa.version,
                    p: Oa.projectId,
                    u: Oa.userId,
                    s: Oa.sessionId,
                    n: Oa.pageNum
                };
                t.message && (n.m = t.message), t.stack && (n.e = t.stack);
                var r = new XMLHttpRequest;
                r.open("POST", e), r.send(JSON.stringify(n)), Ea.push(t.message)
            }
        }
        return t
    }

    function Ta(t) {
        return function() {
            var e = performance.now();
            try {
                t.apply(this, arguments)
            } catch (t) {
                throw _a(t)
            }
            var n = performance.now() - e;
            x(4, n), n > 30 && (N(7), _(6, n))
        }
    }
    var Da = [];

    function Ia(t, e, n, r) {
        void 0 === r && (r = !1), n = Ta(n);
        try {
            t[s("addEventListener")](e, n, r), Da.push({
                event: e,
                target: t,
                listener: n,
                capture: r
            })
        } catch (t) {}
    }

    function Ca() {
        for (var t = 0, e = Da; t < e.length; t++) {
            var n = e[t];
            try {
                n.target[s("removeEventListener")](n.event, n.listener, n.capture)
            } catch (t) {}
        }
        Da = []
    }
    var ja = null,
        za = null,
        La = null,
        Aa = 0;

    function Ra() {
        return !(Aa++ > 20) || (Dr(4, 0), !1)
    }

    function Ha() {
        Aa = 0, La !== Wa() && (ai(), window.setTimeout(Ya, 250))
    }

    function Ya() {
        ri(), _(29, 1)
    }

    function Wa() {
        return location.href ? location.href.replace(location.hash, "") : location.href
    }
    var Xa = !1;

    function qa() {
        Xa = !0, c = performance.now(), St(), Ca(), xa(), La = Wa(), Aa = 0, Ia(window, "popstate", Ha), null === ja && (ja = history.pushState, history.pushState = function() {
            ja.apply(this, arguments), Ua() && Ra() && Ha()
        }), null === za && (za = history.replaceState, history.replaceState = function() {
            za.apply(this, arguments), Ua() && Ra() && Ha()
        })
    }

    function Pa() {
        La = null, Aa = 0, xa(), Ca(), St(), c = 0, Xa = !1
    }

    function Ua() {
        return Xa
    }

    function Ba(t) {
        if (null === t || Xa) return !1;
        for (var e in t) e in u && (u[e] = t[e]);
        return !0
    }

    function Va() {
        ri(), E("clarity", "restart")
    }

    function Fa() {
        return K(this, void 0, void 0, (function() {
            var t, e;
            return Q(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return t = l(), Tt(e = {
                            id: da(),
                            cost: 3
                        }), [4, Ue(document, e, 0)];
                    case 1:
                        return n.sent(), [4, At(5, e, t)];
                    case 2:
                        return n.sent(), Dt(e), [2]
                }
            }))
        }))
    }
    var Ja, Ga = null;

    function Za() {
        Ga = null
    }

    function Ka(t) {
        Ga = {
                fetchStart: Math.round(t.fetchStart),
                connectStart: Math.round(t.connectStart),
                connectEnd: Math.round(t.connectEnd),
                requestStart: Math.round(t.requestStart),
                responseStart: Math.round(t.responseStart),
                responseEnd: Math.round(t.responseEnd),
                domInteractive: Math.round(t.domInteractive),
                domComplete: Math.round(t.domComplete),
                loadEventStart: Math.round(t.loadEventStart),
                loadEventEnd: Math.round(t.loadEventEnd),
                redirectCount: Math.round(t.redirectCount),
                size: t.transferSize ? t.transferSize : 0,
                type: t.type,
                protocol: t.nextHopProtocol,
                encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
                decodedSize: t.decodedBodySize ? t.decodedBodySize : 0
            },
            function(t) {
                K(this, void 0, void 0, (function() {
                    var e, n;
                    return Q(this, (function(r) {
                        switch (e = l(), n = [e, t], t) {
                            case 29:
                                n.push(Ga.fetchStart), n.push(Ga.connectStart), n.push(Ga.connectEnd), n.push(Ga.requestStart), n.push(Ga.responseStart), n.push(Ga.responseEnd), n.push(Ga.domInteractive), n.push(Ga.domComplete), n.push(Ga.loadEventStart), n.push(Ga.loadEventEnd), n.push(Ga.redirectCount), n.push(Ga.size), n.push(Ga.type), n.push(Ga.protocol), n.push(Ga.encodedSize), n.push(Ga.decodedSize), Za(), br(n, !1)
                        }
                        return [2]
                    }))
                }))
            }(29)
    }
    var Qa = ["navigation", "resource", "longtask", "first-input", "layout-shift", "largest-contentful-paint"];

    function $a() {
        try {
            Ja && Ja.disconnect(), Ja = new PerformanceObserver(Ta(ti));
            for (var t = 0, e = Qa; t < e.length; t++) {
                var n = e[t];
                PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 && ("layout-shift" === n && x(9, 0), Ja.observe({
                    type: n,
                    buffered: !0
                }))
            }
        } catch (t) {
            Dr(3, 1)
        }
    }

    function ti(t) {
        ! function(t) {
            for (var e = (!("visibilityState" in document) || "visible" === document.visibilityState), n = 0; n < t.length; n++) {
                var r = t[n];
                switch (r.entryType) {
                    case "navigation":
                        Ka(r);
                        break;
                    case "resource":
                        var a = r.name;
                        na(4, ei(a)), a !== u.upload && a !== u.fallback || _(28, r.duration);
                        break;
                    case "longtask":
                        N(7);
                        break;
                    case "first-input":
                        e && _(10, r.processingStart - r.startTime);
                        break;
                    case "layout-shift":
                        e && !r.hadRecentInput && x(9, 1e3 * r.value);
                        break;
                    case "largest-contentful-paint":
                        e && _(8, r.startTime)
                }
            }
            performance && "memory" in performance && performance.memory.usedJSHeapSize && _(30, Math.abs(performance.memory.usedJSHeapSize / 1048576))
        }(t.getEntries())
    }

    function ei(t) {
        var e = document.createElement("a");
        return e.href = t, e.hostname
    }
    var ni = [Object.freeze({
        __proto__: null,
        start: function() {
            pt = [], _(26, navigator.webdriver ? 1 : 0), Ia(window, "error", Nr), Sr = {}, Tr = {}
        },
        stop: function() {
            Tr = {}
        }
    }), Object.freeze({
        __proto__: null,
        start: function() {
            Wt(), Xt(), tr(), Fn = null, Pn = new WeakMap, Un = {}, Bn = [], Vn = !!window.IntersectionObserver, En(),
                function() {
                    if (Be = [], Ze = [], Ke = null, Qe = 0, $e = {}, null === Fe && (Fe = CSSStyleSheet.prototype.insertRule, CSSStyleSheet.prototype.insertRule = function() {
                            return Ua() && an(this.ownerNode), Fe.apply(this, arguments)
                        }), null === Je && (Je = CSSStyleSheet.prototype.deleteRule, CSSStyleSheet.prototype.deleteRule = function() {
                            return Ua() && an(this.ownerNode), Je.apply(this, arguments)
                        }), null === Ge) {
                        Ge = Element.prototype.attachShadow;
                        try {
                            Element.prototype.attachShadow = function() {
                                return Ua() ? an(Ge.apply(this, arguments)) : Ge.apply(this, arguments)
                            }
                        } catch (t) {
                            Ge = null
                        }
                    }
                }(), Nt(Fa, 1).then((function() {
                    Ta(Xt)(), Ta(Zn)()
                }))
        },
        stop: function() {
            tr(), Pn = null, Un = {}, Bn = [], Fn && (Fn.disconnect(), Fn = null), Vn = !1, On(),
                function() {
                    for (var t = 0, e = Be; t < e.length; t++) {
                        var n = e[t];
                        n && n.disconnect()
                    }
                    Be = [], $e = {}, Ve = [], Ze = [], Qe = 0, Ke = null
                }(), Wt()
        }
    }), Le, Object.freeze({
        __proto__: null,
        start: function() {
            Za(),
                function() {
                    window.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? "complete" !== document.readyState ? Ia(window, "load", T.bind(this, $a, 0)) : $a() : Dr(3, 0)
                }()
        },
        stop: function() {
            Ja && Ja.disconnect(), Ja = null, Za()
        }
    })];

    function ri(t) {
        void 0 === t && (t = null),
            function() {
                try {
                    return !1 === Xa && "undefined" != typeof Promise && window.MutationObserver && document.createTreeWalker && "now" in Date && "now" in performance && "undefined" != typeof WeakMap
                } catch (t) {
                    return !1
                }
            }() && (Ba(t), qa(), rt(), ni.forEach((function(t) {
                return Ta(t.start)()
            })))
    }

    function ai() {
        Ua() && (ni.slice().reverse().forEach((function(t) {
            return Ta(t.stop)()
        })), at(), Pa())
    }
    var ii = Object.freeze({
        __proto__: null,
        version: "0.6.42",
        start: ri,
        pause: function() {
            Ua() && (E("clarity", "pause"), null === Ot && (Ot = new Promise((function(t) {
                Mt = t
            }))))
        },
        resume: function() {
            Ua() && (Ot && (Mt(), Ot = null, null === Et && xt()), E("clarity", "resume"))
        },
        stop: ai,
        consent: fa,
        event: E,
        identify: F,
        set: V,
        upgrade: P,
        metadata: la
    });
    ! function() {
        if ("undefined" != typeof window) {
            var t = window,
                e = "clarity";
            if (t[e] && t[e].v) return console.warn("Error CL001: Multiple Clarity tags detected.");
            var n = t[e] && t[e].q || [];
            for (t[e] = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    return ii[t].apply(ii, e)
                }, t[e].v = "0.6.42"; n.length > 0;) t[e].apply(t, n.shift())
        }
    }()
}();