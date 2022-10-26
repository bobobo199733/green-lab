"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [17487], {
        618606: (t, e, r) => {
            r.d(e, {
                default: () => d
            });
            const n = function() {
                this.__data__ = [], this.size = 0
            };
            var a = r(872575);
            const o = function(t, e) {
                for (var r = t.length; r--;)
                    if ((0, a.default)(t[r][0], e)) return r;
                return -1
            };
            var u = Array.prototype.splice;
            const c = function(t) {
                var e = this.__data__,
                    r = o(e, t);
                return !(r < 0) && (r == e.length - 1 ? e.pop() : u.call(e, r, 1), --this.size, !0)
            };
            const f = function(t) {
                var e = this.__data__,
                    r = o(e, t);
                return r < 0 ? void 0 : e[r][1]
            };
            const s = function(t) {
                return o(this.__data__, t) > -1
            };
            const i = function(t, e) {
                var r = this.__data__,
                    n = o(r, t);
                return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
            };

            function l(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            l.prototype.clear = n, l.prototype.delete = c, l.prototype.get = f, l.prototype.has = s, l.prototype.set = i;
            const d = l
        },
        667027: (t, e, r) => {
            r.d(e, {
                default: () => o
            });
            var n = r(270830),
                a = r(178160);
            const o = (0, n.default)(a.default, "Map")
        },
        601141: (t, e, r) => {
            r.d(e, {
                default: () => m
            });
            const n = (0, r(270830).default)(Object, "create");
            const a = function() {
                this.__data__ = n ? n(null) : {}, this.size = 0
            };
            const o = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
            };
            var u = Object.prototype.hasOwnProperty;
            const c = function(t) {
                var e = this.__data__;
                if (n) {
                    var r = e[t];
                    return "__lodash_hash_undefined__" === r ? void 0 : r
                }
                return u.call(e, t) ? e[t] : void 0
            };
            var f = Object.prototype.hasOwnProperty;
            const s = function(t) {
                var e = this.__data__;
                return n ? void 0 !== e[t] : f.call(e, t)
            };
            const i = function(t, e) {
                var r = this.__data__;
                return this.size += this.has(t) ? 0 : 1, r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e, this
            };

            function l(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            l.prototype.clear = a, l.prototype.delete = o, l.prototype.get = c, l.prototype.has = s, l.prototype.set = i;
            const d = l;
            var p = r(618606),
                h = r(667027);
            const _ = function() {
                this.size = 0, this.__data__ = {
                    hash: new d,
                    map: new(h.default || p.default),
                    string: new d
                }
            };
            const v = function(t) {
                var e = typeof t;
                return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
            };
            const y = function(t, e) {
                var r = t.__data__;
                return v(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
            };
            const b = function(t) {
                var e = y(this, t).delete(t);
                return this.size -= e ? 1 : 0, e
            };
            const j = function(t) {
                return y(this, t).get(t)
            };
            const g = function(t) {
                return y(this, t).has(t)
            };
            const w = function(t, e) {
                var r = y(this, t),
                    n = r.size;
                return r.set(t, e), this.size += r.size == n ? 0 : 1, this
            };

            function O(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            O.prototype.clear = _, O.prototype.delete = b, O.prototype.get = j, O.prototype.has = g, O.prototype.set = w;
            const m = O
        },
        327415: (t, e, r) => {
            r.d(e, {
                default: () => o
            });
            var n = r(270830),
                a = r(178160);
            const o = (0, n.default)(a.default, "Set")
        },
        302399: (t, e, r) => {
            r.d(e, {
                default: () => c
            });
            var n = r(601141);
            const a = function(t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this
            };
            const o = function(t) {
                return this.__data__.has(t)
            };

            function u(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.__data__ = new n.default; ++e < r;) this.add(t[e])
            }
            u.prototype.add = u.prototype.push = a, u.prototype.has = o;
            const c = u
        },
        396335: (t, e, r) => {
            r.d(e, {
                default: () => d
            });
            var n = r(618606);
            const a = function() {
                this.__data__ = new n.default, this.size = 0
            };
            const o = function(t) {
                var e = this.__data__,
                    r = e.delete(t);
                return this.size = e.size, r
            };
            const u = function(t) {
                return this.__data__.get(t)
            };
            const c = function(t) {
                return this.__data__.has(t)
            };
            var f = r(667027),
                s = r(601141);
            const i = function(t, e) {
                var r = this.__data__;
                if (r instanceof n.default) {
                    var a = r.__data__;
                    if (!f.default || a.length < 199) return a.push([t, e]), this.size = ++r.size, this;
                    r = this.__data__ = new s.default(a)
                }
                return r.set(t, e), this.size = r.size, this
            };

            function l(t) {
                var e = this.__data__ = new n.default(t);
                this.size = e.size
            }
            l.prototype.clear = a, l.prototype.delete = o, l.prototype.get = u, l.prototype.has = c, l.prototype.set = i;
            const d = l
        },
        735246: (t, e, r) => {
            r.d(e, {
                default: () => n
            });
            const n = r(178160).default.Uint8Array
        },
        488164: (t, e, r) => {
            r.d(e, {
                default: () => i
            });
            var n = r(280292),
                a = r(553822),
                o = r(854814),
                u = r(925247),
                c = r(817104),
                f = r(54744),
                s = Object.prototype.hasOwnProperty;
            const i = function(t, e) {
                var r = (0, o.default)(t),
                    i = !r && (0, a.default)(t),
                    l = !r && !i && (0, u.default)(t),
                    d = !r && !i && !l && (0, f.default)(t),
                    p = r || i || l || d,
                    h = p ? (0, n.default)(t.length, String) : [],
                    _ = h.length;
                for (var v in t) !e && !s.call(t, v) || p && ("length" == v || l && ("offset" == v || "parent" == v) || d && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || (0, c.default)(v, _)) || h.push(v);
                return h
            }
        },
        920883: (t, e, r) => {
            r.d(e, {
                default: () => n
            });
            const n = function(t, e) {
                for (var r = -1, n = e.length, a = t.length; ++r < n;) t[a + r] = e[r];
                return t
            }
        },
        44631: (t, e, r) => {
            r.d(e, {
                default: () => o
            });
            var n = r(920883),
                a = r(854814);
            const o = function(t, e, r) {
                var o = e(t);
                return (0, a.default)(t) ? o : (0, n.default)(o, r(t))
            }
        },
        517487: (t, e, r) => {
            r.d(e, {
                default: () => S
            });
            var n = r(396335),
                a = r(302399);
            const o = function(t, e) {
                for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
                    if (e(t[r], r, t)) return !0;
                return !1
            };
            var u = r(817651);
            const c = function(t, e, r, n, c, f) {
                var s = 1 & r,
                    i = t.length,
                    l = e.length;
                if (i != l && !(s && l > i)) return !1;
                var d = f.get(t);
                if (d && f.get(e)) return d == e;
                var p = -1,
                    h = !0,
                    _ = 2 & r ? new a.default : void 0;
                for (f.set(t, e), f.set(e, t); ++p < i;) {
                    var v = t[p],
                        y = e[p];
                    if (n) var b = s ? n(y, v, p, e, t, f) : n(v, y, p, t, e, f);
                    if (void 0 !== b) {
                        if (b) continue;
                        h = !1;
                        break
                    }
                    if (_) {
                        if (!o(e, (function(t, e) {
                                if (!(0, u.default)(_, e) && (v === t || c(v, t, r, n, f))) return _.push(e)
                            }))) {
                            h = !1;
                            break
                        }
                    } else if (v !== y && !c(v, y, r, n, f)) {
                        h = !1;
                        break
                    }
                }
                return f.delete(t), f.delete(e), h
            };
            var f = r(503060),
                s = r(735246),
                i = r(872575);
            const l = function(t) {
                var e = -1,
                    r = Array(t.size);
                return t.forEach((function(t, n) {
                    r[++e] = [n, t]
                })), r
            };
            var d = r(870729),
                p = f.default ? f.default.prototype : void 0,
                h = p ? p.valueOf : void 0;
            const _ = function(t, e, r, n, a, o, u) {
                switch (r) {
                    case "[object DataView]":
                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                        t = t.buffer, e = e.buffer;
                    case "[object ArrayBuffer]":
                        return !(t.byteLength != e.byteLength || !o(new s.default(t), new s.default(e)));
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return (0, i.default)(+t, +e);
                    case "[object Error]":
                        return t.name == e.name && t.message == e.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return t == e + "";
                    case "[object Map]":
                        var f = l;
                    case "[object Set]":
                        var p = 1 & n;
                        if (f || (f = d.default), t.size != e.size && !p) return !1;
                        var _ = u.get(t);
                        if (_) return _ == e;
                        n |= 2, u.set(t, e);
                        var v = c(f(t), f(e), n, a, o, u);
                        return u.delete(t), v;
                    case "[object Symbol]":
                        if (h) return h.call(t) == h.call(e)
                }
                return !1
            };
            var v = r(885747),
                y = Object.prototype.hasOwnProperty;
            const b = function(t, e, r, n, a, o) {
                var u = 1 & r,
                    c = (0, v.default)(t),
                    f = c.length;
                if (f != (0, v.default)(e).length && !u) return !1;
                for (var s = f; s--;) {
                    var i = c[s];
                    if (!(u ? i in e : y.call(e, i))) return !1
                }
                var l = o.get(t);
                if (l && o.get(e)) return l == e;
                var d = !0;
                o.set(t, e), o.set(e, t);
                for (var p = u; ++s < f;) {
                    var h = t[i = c[s]],
                        _ = e[i];
                    if (n) var b = u ? n(_, h, i, e, t, o) : n(h, _, i, t, e, o);
                    if (!(void 0 === b ? h === _ || a(h, _, r, n, o) : b)) {
                        d = !1;
                        break
                    }
                    p || (p = "constructor" == i)
                }
                if (d && !p) {
                    var j = t.constructor,
                        g = e.constructor;
                    j == g || !("constructor" in t) || !("constructor" in e) || "function" == typeof j && j instanceof j && "function" == typeof g && g instanceof g || (d = !1)
                }
                return o.delete(t), o.delete(e), d
            };
            var j = r(903427),
                g = r(854814),
                w = r(925247),
                O = r(54744),
                m = "[object Arguments]",
                A = "[object Array]",
                z = "[object Object]",
                x = Object.prototype.hasOwnProperty;
            const k = function(t, e, r, a, o, u) {
                var f = (0, g.default)(t),
                    s = (0, g.default)(e),
                    i = f ? A : (0, j.default)(t),
                    l = s ? A : (0, j.default)(e),
                    d = (i = i == m ? z : i) == z,
                    p = (l = l == m ? z : l) == z,
                    h = i == l;
                if (h && (0, w.default)(t)) {
                    if (!(0, w.default)(e)) return !1;
                    f = !0, d = !1
                }
                if (h && !d) return u || (u = new n.default), f || (0, O.default)(t) ? c(t, e, r, a, o, u) : _(t, e, i, r, a, o, u);
                if (!(1 & r)) {
                    var v = d && x.call(t, "__wrapped__"),
                        y = p && x.call(e, "__wrapped__");
                    if (v || y) {
                        var k = v ? t.value() : t,
                            P = y ? e.value() : e;
                        return u || (u = new n.default), o(k, P, r, a, u)
                    }
                }
                return !!h && (u || (u = new n.default), b(t, e, r, a, o, u))
            };
            var P = r(383527);
            const S = function t(e, r, n, a, o) {
                return e === r || (null == e || null == r || !(0, P.default)(e) && !(0, P.default)(r) ? e != e && r != r : k(e, r, n, a, t, o))
            }
        },
        7492: (t, e, r) => {
            r.d(e, {
                default: () => u
            });
            var n = r(443744);
            const a = (0, r(22828).default)(Object.keys, Object);
            var o = Object.prototype.hasOwnProperty;
            const u = function(t) {
                if (!(0, n.default)(t)) return a(t);
                var e = [];
                for (var r in Object(t)) o.call(t, r) && "constructor" != r && e.push(r);
                return e
            }
        },
        280292: (t, e, r) => {
            r.d(e, {
                default: () => n
            });
            const n = function(t, e) {
                for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
                return n
            }
        },
        395256: (t, e, r) => {
            r.d(e, {
                default: () => n
            });
            const n = function(t) {
                return function(e) {
                    return t(e)
                }
            }
        },
        817651: (t, e, r) => {
            r.d(e, {
                default: () => n
            });
            const n = function(t, e) {
                return t.has(e)
            }
        },
        885747: (t, e, r) => {
            r.d(e, {
                default: () => u
            });
            var n = r(44631),
                a = r(112644),
                o = r(933358);
            const u = function(t) {
                return (0, n.default)(t, o.default, a.default)
            }
        },
        270830: (t, e, r) => {
            r.d(e, {
                default: () => b
            });
            var n = r(162942);
            const a = r(178160).default["__core-js_shared__"];
            var o, u = (o = /[^.]+$/.exec(a && a.keys && a.keys.IE_PROTO || "")) ? "Symbol(src)_1." + o : "";
            const c = function(t) {
                return !!u && u in t
            };
            var f = r(598279),
                s = r(359990),
                i = /^\[object .+?Constructor\]$/,
                l = Function.prototype,
                d = Object.prototype,
                p = l.toString,
                h = d.hasOwnProperty,
                _ = RegExp("^" + p.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            const v = function(t) {
                return !(!(0, f.default)(t) || c(t)) && ((0, n.default)(t) ? _ : i).test((0, s.default)(t))
            };
            const y = function(t, e) {
                return null == t ? void 0 : t[e]
            };
            const b = function(t, e) {
                var r = y(t, e);
                return v(r) ? r : void 0
            }
        },
        112644: (t, e, r) => {
            r.d(e, {
                default: () => c
            });
            const n = function(t, e) {
                for (var r = -1, n = null == t ? 0 : t.length, a = 0, o = []; ++r < n;) {
                    var u = t[r];
                    e(u, r, t) && (o[a++] = u)
                }
                return o
            };
            var a = r(335987),
                o = Object.prototype.propertyIsEnumerable,
                u = Object.getOwnPropertySymbols;
            const c = u ? function(t) {
                return null == t ? [] : (t = Object(t), n(u(t), (function(e) {
                    return o.call(t, e)
                })))
            } : a.default
        },
        903427: (t, e, r) => {
            r.d(e, {
                default: () => m
            });
            var n = r(270830),
                a = r(178160);
            const o = (0, n.default)(a.default, "DataView");
            var u = r(667027);
            const c = (0, n.default)(a.default, "Promise");
            var f = r(327415);
            const s = (0, n.default)(a.default, "WeakMap");
            var i = r(128177),
                l = r(359990),
                d = "[object Map]",
                p = "[object Promise]",
                h = "[object Set]",
                _ = "[object WeakMap]",
                v = "[object DataView]",
                y = (0, l.default)(o),
                b = (0, l.default)(u.default),
                j = (0, l.default)(c),
                g = (0, l.default)(f.default),
                w = (0, l.default)(s),
                O = i.default;
            (o && O(new o(new ArrayBuffer(1))) != v || u.default && O(new u.default) != d || c && O(c.resolve()) != p || f.default && O(new f.default) != h || s && O(new s) != _) && (O = function(t) {
                var e = (0, i.default)(t),
                    r = "[object Object]" == e ? t.constructor : void 0,
                    n = r ? (0, l.default)(r) : "";
                if (n) switch (n) {
                    case y:
                        return v;
                    case b:
                        return d;
                    case j:
                        return p;
                    case g:
                        return h;
                    case w:
                        return _
                }
                return e
            });
            const m = O
        },
        817104: (t, e, r) => {
            r.d(e, {
                default: () => a
            });
            var n = /^(?:0|[1-9]\d*)$/;
            const a = function(t, e) {
                var r = typeof t;
                return !!(e = null == e ? 9007199254740991 : e) && ("number" == r || "symbol" != r && n.test(t)) && t > -1 && t % 1 == 0 && t < e
            }
        },
        443744: (t, e, r) => {
            r.d(e, {
                default: () => a
            });
            var n = Object.prototype;
            const a = function(t) {
                var e = t && t.constructor;
                return t === ("function" == typeof e && e.prototype || n)
            }
        },
        159283: (t, e, r) => {
            r.d(e, {
                default: () => c
            });
            var n = r(489956);
            t = r.hmd(t);
            var a = "object" == typeof exports && exports && !exports.nodeType && exports,
                o = a && t && !t.nodeType && t,
                u = o && o.exports === a && n.default.process;
            const c = function() {
                try {
                    var t = o && o.require && o.require("util").types;
                    return t || u && u.binding && u.binding("util")
                } catch (t) {}
            }()
        },
        22828: (t, e, r) => {
            r.d(e, {
                default: () => n
            });
            const n = function(t, e) {
                return function(r) {
                    return t(e(r))
                }
            }
        },
        870729: (t, e, r) => {
            r.d(e, {
                default: () => n
            });
            const n = function(t) {
                var e = -1,
                    r = Array(t.size);
                return t.forEach((function(t) {
                    r[++e] = t
                })), r
            }
        },
        359990: (t, e, r) => {
            r.d(e, {
                default: () => a
            });
            var n = Function.prototype.toString;
            const a = function(t) {
                if (null != t) {
                    try {
                        return n.call(t)
                    } catch (t) {}
                    try {
                        return t + ""
                    } catch (t) {}
                }
                return ""
            }
        },
        872575: (t, e, r) => {
            r.d(e, {
                default: () => n
            });
            const n = function(t, e) {
                return t === e || t != t && e != e
            }
        },
        553822: (t, e, r) => {
            r.d(e, {
                default: () => s
            });
            var n = r(128177),
                a = r(383527);
            const o = function(t) {
                return (0, a.default)(t) && "[object Arguments]" == (0, n.default)(t)
            };
            var u = Object.prototype,
                c = u.hasOwnProperty,
                f = u.propertyIsEnumerable;
            const s = o(function() {
                return arguments
            }()) ? o : function(t) {
                return (0, a.default)(t) && c.call(t, "callee") && !f.call(t, "callee")
            }
        },
        854814: (t, e, r) => {
            r.d(e, {
                default: () => n
            });
            const n = Array.isArray
        },
        29419: (t, e, r) => {
            r.d(e, {
                default: () => o
            });
            var n = r(162942),
                a = r(667702);
            const o = function(t) {
                return null != t && (0, a.default)(t.length) && !(0, n.default)(t)
            }
        },
        925247: (t, e, r) => {
            r.d(e, {
                default: () => f
            });
            var n = r(178160);
            const a = function() {
                return !1
            };
            t = r.hmd(t);
            var o = "object" == typeof exports && exports && !exports.nodeType && exports,
                u = o && t && !t.nodeType && t,
                c = u && u.exports === o ? n.default.Buffer : void 0;
            const f = (c ? c.isBuffer : void 0) || a
        },
        162942: (t, e, r) => {
            r.d(e, {
                default: () => o
            });
            var n = r(128177),
                a = r(598279);
            const o = function(t) {
                if (!(0, a.default)(t)) return !1;
                var e = (0, n.default)(t);
                return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
            }
        },
        667702: (t, e, r) => {
            r.d(e, {
                default: () => n
            });
            const n = function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
            }
        },
        54744: (t, e, r) => {
            r.d(e, {
                default: () => l
            });
            var n = r(128177),
                a = r(667702),
                o = r(383527),
                u = {};
            u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1;
            const c = function(t) {
                return (0, o.default)(t) && (0, a.default)(t.length) && !!u[(0, n.default)(t)]
            };
            var f = r(395256),
                s = r(159283),
                i = s.default && s.default.isTypedArray;
            const l = i ? (0, f.default)(i) : c
        },
        933358: (t, e, r) => {
            r.d(e, {
                default: () => u
            });
            var n = r(488164),
                a = r(7492),
                o = r(29419);
            const u = function(t) {
                return (0, o.default)(t) ? (0, n.default)(t) : (0, a.default)(t)
            }
        },
        335987: (t, e, r) => {
            r.d(e, {
                default: () => n
            });
            const n = function() {
                return []
            }
        }
    }
]);