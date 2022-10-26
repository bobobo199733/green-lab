"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [49680], {
        706617: (t, e) => {
            e.hasProperty = e.isObject = void 0, e.isObject = function(t) {
                var e = typeof t;
                return null !== t && ("object" === e || "function" === e)
            }, e.hasProperty = function(t, e) {
                return e in t
            }
        },
        144315: (t, e, r) => {
            r.d(e, {
                default: () => Q
            });
            var n = r(396335);
            const a = function(t, e) {
                for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t););
                return t
            };
            var u = r(866934),
                o = r(175969),
                c = r(933358);
            const f = function(t, e) {
                return t && (0, o.default)(e, (0, c.default)(e), t)
            };
            var l = r(364162);
            const d = function(t, e) {
                return t && (0, o.default)(e, (0, l.default)(e), t)
            };
            var i = r(157508),
                s = r(458555),
                b = r(112644);
            const v = function(t, e) {
                return (0, o.default)(t, (0, b.default)(t), e)
            };
            var j = r(749605);
            const y = function(t, e) {
                return (0, o.default)(t, (0, j.default)(t), e)
            };
            var p = r(885747),
                A = r(847651),
                h = r(903427),
                w = Object.prototype.hasOwnProperty;
            const g = function(t) {
                var e = t.length,
                    r = new t.constructor(e);
                return e && "string" == typeof t[0] && w.call(t, "index") && (r.index = t.index, r.input = t.input), r
            };
            var O = r(544702);
            const x = function(t, e) {
                var r = e ? (0, O.default)(t.buffer) : t.buffer;
                return new t.constructor(r, t.byteOffset, t.byteLength)
            };
            var I = /\w*$/;
            const S = function(t) {
                var e = new t.constructor(t.source, I.exec(t));
                return e.lastIndex = t.lastIndex, e
            };
            var m = r(503060),
                U = m.default ? m.default.prototype : void 0,
                E = U ? U.valueOf : void 0;
            const k = function(t) {
                return E ? Object(E.call(t)) : {}
            };
            var F = r(839895);
            const M = function(t, e, r) {
                var n = t.constructor;
                switch (e) {
                    case "[object ArrayBuffer]":
                        return (0, O.default)(t);
                    case "[object Boolean]":
                    case "[object Date]":
                        return new n(+t);
                    case "[object DataView]":
                        return x(t, r);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return (0, F.default)(t, r);
                    case "[object Map]":
                    case "[object Set]":
                        return new n;
                    case "[object Number]":
                    case "[object String]":
                        return new n(t);
                    case "[object RegExp]":
                        return S(t);
                    case "[object Symbol]":
                        return k(t)
                }
            };
            var B = r(852222),
                C = r(854814),
                D = r(925247),
                P = r(383527);
            const N = function(t) {
                return (0, P.default)(t) && "[object Map]" == (0, h.default)(t)
            };
            var R = r(395256),
                V = r(159283),
                G = V.default && V.default.isMap;
            const L = G ? (0, R.default)(G) : N;
            var T = r(598279);
            const W = function(t) {
                return (0, P.default)(t) && "[object Set]" == (0, h.default)(t)
            };
            var $ = V.default && V.default.isSet;
            const q = $ ? (0, R.default)($) : W;
            var z = "[object Arguments]",
                H = "[object Function]",
                J = "[object Object]",
                K = {};
            K[z] = K["[object Array]"] = K["[object ArrayBuffer]"] = K["[object DataView]"] = K["[object Boolean]"] = K["[object Date]"] = K["[object Float32Array]"] = K["[object Float64Array]"] = K["[object Int8Array]"] = K["[object Int16Array]"] = K["[object Int32Array]"] = K["[object Map]"] = K["[object Number]"] = K[J] = K["[object RegExp]"] = K["[object Set]"] = K["[object String]"] = K["[object Symbol]"] = K["[object Uint8Array]"] = K["[object Uint8ClampedArray]"] = K["[object Uint16Array]"] = K["[object Uint32Array]"] = !0, K["[object Error]"] = K[H] = K["[object WeakMap]"] = !1;
            const Q = function t(e, r, o, l, b, j) {
                var w, O = 1 & r,
                    x = 2 & r,
                    I = 4 & r;
                if (o && (w = b ? o(e, l, b, j) : o(e)), void 0 !== w) return w;
                if (!(0, T.default)(e)) return e;
                var S = (0, C.default)(e);
                if (S) {
                    if (w = g(e), !O) return (0, s.default)(e, w)
                } else {
                    var m = (0, h.default)(e),
                        U = m == H || "[object GeneratorFunction]" == m;
                    if ((0, D.default)(e)) return (0, i.default)(e, O);
                    if (m == J || m == z || U && !b) {
                        if (w = x || U ? {} : (0, B.default)(e), !O) return x ? y(e, d(w, e)) : v(e, f(w, e))
                    } else {
                        if (!K[m]) return b ? e : {};
                        w = M(e, m, O)
                    }
                }
                j || (j = new n.default);
                var E = j.get(e);
                if (E) return E;
                j.set(e, w), q(e) ? e.forEach((function(n) {
                    w.add(t(n, r, o, n, e, j))
                })) : L(e) && e.forEach((function(n, a) {
                    w.set(a, t(n, r, o, a, e, j))
                }));
                var k = I ? x ? A.default : p.default : x ? keysIn : c.default,
                    F = S ? void 0 : k(e);
                return a(F || e, (function(n, a) {
                    F && (n = e[a = n]), (0, u.default)(w, a, t(n, r, o, a, e, j))
                })), w
            }
        },
        43688: (t, e, r) => {
            r.d(e, {
                default: () => n
            });
            const n = function(t, e, r) {
                var n = -1,
                    a = t.length;
                e < 0 && (e = -e > a ? 0 : a + e), (r = r > a ? a : r) < 0 && (r += a), a = e > r ? 0 : r - e >>> 0, e >>>= 0;
                for (var u = Array(a); ++n < a;) u[n] = t[n + e];
                return u
            }
        },
        677013: (t, e, r) => {
            r.d(e, {
                default: () => l
            });
            var n = r(383821);
            const a = function(t) {
                var e = null == t ? 0 : t.length;
                return e ? t[e - 1] : void 0
            };
            var u = r(580838),
                o = r(43688);
            const c = function(t, e) {
                return e.length < 2 ? t : (0, u.default)(t, (0, o.default)(e, 0, -1))
            };
            var f = r(887844);
            const l = function(t, e) {
                return e = (0, n.default)(e, t), null == (t = c(t, e)) || delete t[(0, f.default)(a(e))]
            }
        },
        847651: (t, e, r) => {
            r.d(e, {
                default: () => o
            });
            var n = r(44631),
                a = r(749605),
                u = r(364162);
            const o = function(t) {
                return (0, n.default)(t, u.default, a.default)
            }
        },
        749605: (t, e, r) => {
            r.d(e, {
                default: () => c
            });
            var n = r(920883),
                a = r(156838),
                u = r(112644),
                o = r(335987);
            const c = Object.getOwnPropertySymbols ? function(t) {
                for (var e = []; t;)(0, n.default)(e, (0, u.default)(t)), t = (0, a.default)(t);
                return e
            } : o.default
        },
        484156: (t, e, r) => {
            r.d(e, {
                default: () => s
            });
            var n = r(292893),
                a = r(144315),
                u = r(677013),
                o = r(383821),
                c = r(175969),
                f = r(56736);
            const l = function(t) {
                return (0, f.default)(t) ? void 0 : t
            };
            var d = r(892821),
                i = r(847651);
            const s = (0, d.default)((function(t, e) {
                var r = {};
                if (null == t) return r;
                var f = !1;
                e = (0, n.default)(e, (function(e) {
                    return e = (0, o.default)(e, t), f || (f = e.length > 1), e
                })), (0, c.default)(t, (0, i.default)(t), r), f && (r = (0, a.default)(r, 7, l));
                for (var d = e.length; d--;)(0, u.default)(r, e[d]);
                return r
            }))
        },
        895171: (t, e, r) => {
            r.d(e, {
                default: () => u
            });
            var n = r(745582);
            const a = function(t, e) {
                var r;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                return t = (0, n.default)(t),
                    function() {
                        return --t > 0 && (r = e.apply(this, arguments)), t <= 1 && (e = void 0), r
                    }
            };
            const u = function(t) {
                return a(2, t)
            }
        },
        745582: (t, e, r) => {
            r.d(e, {
                default: () => o
            });
            var n = r(968877),
                a = 1 / 0;
            const u = function(t) {
                return t ? (t = (0, n.default)(t)) === a || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
            };
            const o = function(t) {
                var e = u(t),
                    r = e % 1;
                return e == e ? r ? e - r : e : 0
            }
        }
    }
]);