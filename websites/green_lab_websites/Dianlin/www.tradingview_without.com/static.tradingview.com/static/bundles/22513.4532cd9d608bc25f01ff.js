(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [22513, 60521], {
        960521: function(e, r, n) {
            var t;
            ! function(o) {
                "use strict";
                var i, a = 1e6,
                    u = 1e6,
                    c = "[big.js] ",
                    f = c + "Invalid ",
                    s = f + "decimal places",
                    l = c + "Division by zero",
                    d = {},
                    v = void 0,
                    h = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

                function b(e, r, n, t) {
                    var o = e.c;
                    if (n === v && (n = e.constructor.RM), 0 !== n && 1 !== n && 2 !== n && 3 !== n) throw Error("[big.js] Invalid rounding mode");
                    if (r < 1) t = 3 === n && (t || !!o[0]) || 0 === r && (1 === n && o[0] >= 5 || 2 === n && (o[0] > 5 || 5 === o[0] && (t || o[1] !== v))), o.length = 1, t ? (e.e = e.e - r + 1, o[0] = 1) : o[0] = e.e = 0;
                    else if (r < o.length) {
                        if (t = 1 === n && o[r] >= 5 || 2 === n && (o[r] > 5 || 5 === o[r] && (t || o[r + 1] !== v || 1 & o[r - 1])) || 3 === n && (t || !!o[0]), o.length = r--, t)
                            for (; ++o[r] > 9;) o[r] = 0, r-- || (++e.e, o.unshift(1));
                        for (r = o.length; !o[--r];) o.pop()
                    }
                    return e
                }

                function p(e, r, n) {
                    var t = e.e,
                        o = e.c.join(""),
                        i = o.length;
                    if (r) o = o.charAt(0) + (i > 1 ? "." + o.slice(1) : "") + (t < 0 ? "e" : "e+") + t;
                    else if (t < 0) {
                        for (; ++t;) o = "0" + o;
                        o = "0." + o
                    } else if (t > 0)
                        if (++t > i)
                            for (t -= i; t--;) o += "0";
                        else t < i && (o = o.slice(0, t) + "." + o.slice(t));
                    else i > 1 && (o = o.charAt(0) + "." + o.slice(1));
                    return e.s < 0 && n ? "-" + o : o
                }
                d.abs = function() {
                    var e = new this.constructor(this);
                    return e.s = 1, e
                }, d.cmp = function(e) {
                    var r, n = this,
                        t = n.c,
                        o = (e = new n.constructor(e)).c,
                        i = n.s,
                        a = e.s,
                        u = n.e,
                        c = e.e;
                    if (!t[0] || !o[0]) return t[0] ? i : o[0] ? -a : 0;
                    if (i != a) return i;
                    if (r = i < 0, u != c) return u > c ^ r ? 1 : -1;
                    for (a = (u = t.length) < (c = o.length) ? u : c, i = -1; ++i < a;)
                        if (t[i] != o[i]) return t[i] > o[i] ^ r ? 1 : -1;
                    return u == c ? 0 : u > c ^ r ? 1 : -1
                }, d.div = function(e) {
                    var r = this,
                        n = r.constructor,
                        t = r.c,
                        o = (e = new n(e)).c,
                        i = r.s == e.s ? 1 : -1,
                        u = n.DP;
                    if (u !== ~~u || u < 0 || u > a) throw Error(s);
                    if (!o[0]) throw Error(l);
                    if (!t[0]) return e.s = i, e.c = [e.e = 0], e;
                    var c, f, d, h, p, y = o.slice(),
                        g = c = o.length,
                        m = t.length,
                        _ = t.slice(0, c),
                        w = _.length,
                        I = e,
                        S = I.c = [],
                        E = 0,
                        N = u + (I.e = r.e - e.e) + 1;
                    for (I.s = i, i = N < 0 ? 0 : N, y.unshift(0); w++ < c;) _.push(0);
                    do {
                        for (d = 0; d < 10; d++) {
                            if (c != (w = _.length)) h = c > w ? 1 : -1;
                            else
                                for (p = -1, h = 0; ++p < c;)
                                    if (o[p] != _[p]) {
                                        h = o[p] > _[p] ? 1 : -1;
                                        break
                                    } if (!(h < 0)) break;
                            for (f = w == c ? o : y; w;) {
                                if (_[--w] < f[w]) {
                                    for (p = w; p && !_[--p];) _[p] = 9;
                                    --_[p], _[w] += 10
                                }
                                _[w] -= f[w]
                            }
                            for (; !_[0];) _.shift()
                        }
                        S[E++] = h ? d : ++d, _[0] && h ? _[w] = t[g] || 0 : _ = [t[g]]
                    } while ((g++ < m || _[0] !== v) && i--);
                    return S[0] || 1 == E || (S.shift(), I.e--, N--), E > N && b(I, N, n.RM, _[0] !== v), I
                }, d.eq = function(e) {
                    return 0 === this.cmp(e)
                }, d.gt = function(e) {
                    return this.cmp(e) > 0
                }, d.gte = function(e) {
                    return this.cmp(e) > -1
                }, d.lt = function(e) {
                    return this.cmp(e) < 0
                }, d.lte = function(e) {
                    return this.cmp(e) < 1
                }, d.minus = d.sub = function(e) {
                    var r, n, t, o, i = this,
                        a = i.constructor,
                        u = i.s,
                        c = (e = new a(e)).s;
                    if (u != c) return e.s = -c, i.plus(e);
                    var f = i.c.slice(),
                        s = i.e,
                        l = e.c,
                        d = e.e;
                    if (!f[0] || !l[0]) return l[0] ? e.s = -c : f[0] ? e = new a(i) : e.s = 1, e;
                    if (u = s - d) {
                        for ((o = u < 0) ? (u = -u, t = f) : (d = s, t = l), t.reverse(), c = u; c--;) t.push(0);
                        t.reverse()
                    } else
                        for (n = ((o = f.length < l.length) ? f : l).length, u = c = 0; c < n; c++)
                            if (f[c] != l[c]) {
                                o = f[c] < l[c];
                                break
                            } if (o && (t = f, f = l, l = t, e.s = -e.s), (c = (n = l.length) - (r = f.length)) > 0)
                        for (; c--;) f[r++] = 0;
                    for (c = r; n > u;) {
                        if (f[--n] < l[n]) {
                            for (r = n; r && !f[--r];) f[r] = 9;
                            --f[r], f[n] += 10
                        }
                        f[n] -= l[n]
                    }
                    for (; 0 === f[--c];) f.pop();
                    for (; 0 === f[0];) f.shift(), --d;
                    return f[0] || (e.s = 1, f = [d = 0]), e.c = f, e.e = d, e
                }, d.mod = function(e) {
                    var r, n = this,
                        t = n.constructor,
                        o = n.s,
                        i = (e = new t(e)).s;
                    if (!e.c[0]) throw Error(l);
                    return n.s = e.s = 1, r = 1 == e.cmp(n), n.s = o, e.s = i, r ? new t(n) : (o = t.DP, i = t.RM, t.DP = t.RM = 0, n = n.div(e), t.DP = o, t.RM = i, this.minus(n.times(e)))
                }, d.plus = d.add = function(e) {
                    var r, n, t, o = this,
                        i = o.constructor;
                    if (e = new i(e), o.s != e.s) return e.s = -e.s, o.minus(e);
                    var a = o.e,
                        u = o.c,
                        c = e.e,
                        f = e.c;
                    if (!u[0] || !f[0]) return f[0] || (u[0] ? e = new i(o) : e.s = o.s), e;
                    if (u = u.slice(), r = a - c) {
                        for (r > 0 ? (c = a, t = f) : (r = -r, t = u), t.reverse(); r--;) t.push(0);
                        t.reverse()
                    }
                    for (u.length - f.length < 0 && (t = f, f = u, u = t), r = f.length, n = 0; r; u[r] %= 10) n = (u[--r] = u[r] + f[r] + n) / 10 | 0;
                    for (n && (u.unshift(n), ++c), r = u.length; 0 === u[--r];) u.pop();
                    return e.c = u, e.e = c, e
                }, d.pow = function(e) {
                    var r = this,
                        n = new r.constructor("1"),
                        t = n,
                        o = e < 0;
                    if (e !== ~~e || e < -1e6 || e > u) throw Error(f + "exponent");
                    for (o && (e = -e); 1 & e && (t = t.times(r)), e >>= 1;) r = r.times(r);
                    return o ? n.div(t) : t
                }, d.prec = function(e, r) {
                    if (e !== ~~e || e < 1 || e > a) throw Error(f + "precision");
                    return b(new this.constructor(this), e, r)
                }, d.round = function(e, r) {
                    if (e === v) e = 0;
                    else if (e !== ~~e || e < -a || e > a) throw Error(s);
                    return b(new this.constructor(this), e + this.e + 1, r)
                }, d.sqrt = function() {
                    var e, r, n, t = this,
                        o = t.constructor,
                        i = t.s,
                        a = t.e,
                        u = new o("0.5");
                    if (!t.c[0]) return new o(t);
                    if (i < 0) throw Error(c + "No square root");
                    0 === (i = Math.sqrt(t + "")) || i === 1 / 0 ? ((r = t.c.join("")).length + a & 1 || (r += "0"), a = ((a + 1) / 2 | 0) - (a < 0 || 1 & a), e = new o(((i = Math.sqrt(r)) == 1 / 0 ? "5e" : (i = i.toExponential()).slice(0, i.indexOf("e") + 1)) + a)) : e = new o(i + ""), a = e.e + (o.DP += 4);
                    do {
                        n = e, e = u.times(n.plus(t.div(n)))
                    } while (n.c.slice(0, a).join("") !== e.c.slice(0, a).join(""));
                    return b(e, (o.DP -= 4) + e.e + 1, o.RM)
                }, d.times = d.mul = function(e) {
                    var r, n = this,
                        t = n.constructor,
                        o = n.c,
                        i = (e = new t(e)).c,
                        a = o.length,
                        u = i.length,
                        c = n.e,
                        f = e.e;
                    if (e.s = n.s == e.s ? 1 : -1, !o[0] || !i[0]) return e.c = [e.e = 0], e;
                    for (e.e = c + f, a < u && (r = o, o = i, i = r, f = a, a = u, u = f), r = new Array(f = a + u); f--;) r[f] = 0;
                    for (c = u; c--;) {
                        for (u = 0, f = a + c; f > c;) u = r[f] + i[c] * o[f - c - 1] + u, r[f--] = u % 10, u = u / 10 | 0;
                        r[f] = u
                    }
                    for (u ? ++e.e : r.shift(), c = r.length; !r[--c];) r.pop();
                    return e.c = r, e
                }, d.toExponential = function(e, r) {
                    var n = this,
                        t = n.c[0];
                    if (e !== v) {
                        if (e !== ~~e || e < 0 || e > a) throw Error(s);
                        for (n = b(new n.constructor(n), ++e, r); n.c.length < e;) n.c.push(0)
                    }
                    return p(n, !0, !!t)
                }, d.toFixed = function(e, r) {
                    var n = this,
                        t = n.c[0];
                    if (e !== v) {
                        if (e !== ~~e || e < 0 || e > a) throw Error(s);
                        for (e = e + (n = b(new n.constructor(n), e + n.e + 1, r)).e + 1; n.c.length < e;) n.c.push(0)
                    }
                    return p(n, !1, !!t)
                }, d.toJSON = d.toString = function() {
                    var e = this,
                        r = e.constructor;
                    return p(e, e.e <= r.NE || e.e >= r.PE, !!e.c[0])
                }, d.toNumber = function() {
                    var e = Number(p(this, !0, !0));
                    if (!0 === this.constructor.strict && !this.eq(e.toString())) throw Error(c + "Imprecise conversion");
                    return e
                }, d.toPrecision = function(e, r) {
                    var n = this,
                        t = n.constructor,
                        o = n.c[0];
                    if (e !== v) {
                        if (e !== ~~e || e < 1 || e > a) throw Error(f + "precision");
                        for (n = b(new t(n), e, r); n.c.length < e;) n.c.push(0)
                    }
                    return p(n, e <= n.e || n.e <= t.NE || n.e >= t.PE, !!o)
                }, d.valueOf = function() {
                    var e = this,
                        r = e.constructor;
                    if (!0 === r.strict) throw Error(c + "valueOf disallowed");
                    return p(e, e.e <= r.NE || e.e >= r.PE, !0)
                }, i = function e() {
                    function r(n) {
                        var t = this;
                        if (!(t instanceof r)) return n === v ? e() : new r(n);
                        if (n instanceof r) t.s = n.s, t.e = n.e,
                            t.c = n.c.slice();
                        else {
                            if ("string" != typeof n) {
                                if (!0 === r.strict) throw TypeError(f + "number");
                                n = 0 === n && 1 / n < 0 ? "-0" : String(n)
                            }! function(e, r) {
                                var n, t, o;
                                if (!h.test(r)) throw Error(f + "number");
                                e.s = "-" == r.charAt(0) ? (r = r.slice(1), -1) : 1, (n = r.indexOf(".")) > -1 && (r = r.replace(".", ""));
                                (t = r.search(/e/i)) > 0 ? (n < 0 && (n = t), n += +r.slice(t + 1), r = r.substring(0, t)) : n < 0 && (n = r.length);
                                for (o = r.length, t = 0; t < o && "0" == r.charAt(t);) ++t;
                                if (t == o) e.c = [e.e = 0];
                                else {
                                    for (; o > 0 && "0" == r.charAt(--o););
                                    for (e.e = n - t - 1, e.c = [], n = 0; t <= o;) e.c[n++] = +r.charAt(t++)
                                }
                            }(t, n)
                        }
                        t.constructor = r
                    }
                    return r.prototype = d, r.DP = 20, r.RM = 1, r.NE = -7, r.PE = 21, r.strict = false, r.roundDown = 0, r.roundHalfUp = 1, r.roundHalfEven = 2, r.roundUp = 3, r
                }(), i.default = i.Big = i, void 0 === (t = function() {
                    return i
                }.call(r, n, r, e)) || (e.exports = t)
            }()
        },
        835664: function(e, r) {
            ! function(n) {
                if ("object" == typeof r && void 0 !== e) e.exports = n();
                else if ("function" == typeof define && define.amd) define([], n);
                else {
                    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).localforage = n()
                }
            }((function() {
                return function e(r, n, t) {
                    function o(a, u) {
                        if (!n[a]) {
                            if (!r[a]) {
                                var c = "function" == typeof require && require;
                                if (!u && c) return c(a, !0);
                                if (i) return i(a, !0);
                                var f = new Error("Cannot find module '" + a + "'");
                                throw f.code = "MODULE_NOT_FOUND", f
                            }
                            var s = n[a] = {
                                exports: {}
                            };
                            r[a][0].call(s.exports, (function(e) {
                                var n = r[a][1][e];
                                return o(n || e)
                            }), s, s.exports, e, r, n, t)
                        }
                        return n[a].exports
                    }
                    for (var i = "function" == typeof require && require, a = 0; a < t.length; a++) o(t[a]);
                    return o
                }({
                    1: [function(e, r, n) {
                        "use strict";
                        var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        };
                        var o = function() {
                            try {
                                if ("undefined" != typeof indexedDB) return indexedDB;
                                if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;
                                if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;
                                if ("undefined" != typeof OIndexedDB) return OIndexedDB;
                                if ("undefined" != typeof msIndexedDB) return msIndexedDB
                            } catch (e) {
                                return
                            }
                        }();

                        function i(e, r) {
                            e = e || [], r = r || {};
                            try {
                                return new Blob(e, r)
                            } catch (o) {
                                if ("TypeError" !== o.name) throw o;
                                for (var n = new("undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder), t = 0; t < e.length; t += 1) n.append(e[t]);
                                return n.getBlob(r.type)
                            }
                        }
                        "undefined" == typeof Promise && e("lie/polyfill");
                        var a = Promise;

                        function u(e, r) {
                            r && e.then((function(e) {
                                r(null, e)
                            }), (function(e) {
                                r(e)
                            }))
                        }

                        function c(e, r, n) {
                            "function" == typeof r && e.then(r), "function" == typeof n && e.catch(n)
                        }

                        function f(e) {
                            return "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), e = String(e)), e
                        }

                        function s() {
                            if (arguments.length && "function" == typeof arguments[arguments.length - 1]) return arguments[arguments.length - 1]
                        }
                        var l = "local-forage-detect-blob-support",
                            d = void 0,
                            v = {},
                            h = Object.prototype.toString,
                            b = "readonly",
                            p = "readwrite";

                        function y(e) {
                            return "boolean" == typeof d ? a.resolve(d) : function(e) {
                                return new a((function(r) {
                                    var n = e.transaction(l, p),
                                        t = i([""]);
                                    n.objectStore(l).put(t, "key"), n.onabort = function(e) {
                                        e.preventDefault(), e.stopPropagation(), r(!1)
                                    }, n.oncomplete = function() {
                                        var e = navigator.userAgent.match(/Chrome\/(\d+)/),
                                            n = navigator.userAgent.match(/Edge\//);
                                        r(n || !e || parseInt(e[1], 10) >= 43)
                                    }
                                })).catch((function() {
                                    return !1
                                }))
                            }(e).then((function(e) {
                                return d = e
                            }))
                        }

                        function g(e) {
                            var r = v[e.name],
                                n = {};
                            n.promise = new a((function(e, r) {
                                n.resolve = e, n.reject = r
                            })), r.deferredOperations.push(n), r.dbReady ? r.dbReady = r.dbReady.then((function() {
                                return n.promise
                            })) : r.dbReady = n.promise
                        }

                        function m(e) {
                            var r = v[e.name].deferredOperations.pop();
                            if (r) return r.resolve(), r.promise
                        }

                        function _(e, r) {
                            var n = v[e.name].deferredOperations.pop();
                            if (n) return n.reject(r), n.promise
                        }

                        function w(e, r) {
                            return new a((function(n, t) {
                                if (v[e.name] = v[e.name] || {
                                        forages: [],
                                        db: null,
                                        dbReady: null,
                                        deferredOperations: []
                                    }, e.db) {
                                    if (!r) return n(e.db);
                                    g(e), e.db.close()
                                }
                                var i = [e.name];
                                r && i.push(e.version);
                                var a = o.open.apply(o, i);
                                r && (a.onupgradeneeded = function(r) {
                                    var n = a.result;
                                    try {
                                        n.createObjectStore(e.storeName), r.oldVersion <= 1 && n.createObjectStore(l)
                                    } catch (n) {
                                        if ("ConstraintError" !== n.name) throw n;
                                        console.warn('The database "' + e.name + '" has been upgraded from version ' + r.oldVersion + " to version " + r.newVersion + ', but the storage "' + e.storeName + '" already exists.')
                                    }
                                }), a.onerror = function(e) {
                                    e.preventDefault(), t(a.error)
                                }, a.onsuccess = function() {
                                    var r = a.result;
                                    r.onversionchange = function(e) {
                                        e.target.close()
                                    }, n(r), m(e)
                                }
                            }))
                        }

                        function I(e) {
                            return w(e, !1)
                        }

                        function S(e) {
                            return w(e, !0)
                        }

                        function E(e, r) {
                            if (!e.db) return !0;
                            var n = !e.db.objectStoreNames.contains(e.storeName),
                                t = e.version < e.db.version,
                                o = e.version > e.db.version;
                            if (t && (e.version !== r && console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), o || n) {
                                if (n) {
                                    var i = e.db.version + 1;
                                    i > e.version && (e.version = i)
                                }
                                return !0
                            }
                            return !1
                        }

                        function N(e) {
                            var r = function(e) {
                                for (var r = e.length, n = new ArrayBuffer(r), t = new Uint8Array(n), o = 0; o < r; o++) t[o] = e.charCodeAt(o);
                                return n
                            }(atob(e.data));
                            return i([r], {
                                type: e.type
                            })
                        }

                        function O(e) {
                            return e && e.__local_forage_encoded_blob
                        }

                        function j(e) {
                            var r = this,
                                n = r._initReady().then((function() {
                                    var e = v[r._dbInfo.name];
                                    if (e && e.dbReady) return e.dbReady
                                }));
                            return c(n, e, e), n
                        }

                        function A(e, r, n, t) {
                            void 0 === t && (t = 1);
                            try {
                                var o = e.db.transaction(e.storeName, r);
                                n(null, o)
                            } catch (o) {
                                if (t > 0 && (!e.db || "InvalidStateError" === o.name || "NotFoundError" === o.name)) return a.resolve().then((function() {
                                    if (!e.db || "NotFoundError" === o.name && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version) return e.db && (e.version = e.db.version + 1), S(e)
                                })).then((function() {
                                    return function(e) {
                                        g(e);
                                        for (var r = v[e.name], n = r.forages, t = 0; t < n.length; t++) {
                                            var o = n[t];
                                            o._dbInfo.db && (o._dbInfo.db.close(), o._dbInfo.db = null)
                                        }
                                        return e.db = null, I(e).then((function(r) {
                                            return e.db = r, E(e) ? S(e) : r
                                        })).then((function(t) {
                                            e.db = r.db = t;
                                            for (var o = 0; o < n.length; o++) n[o]._dbInfo.db = t
                                        })).catch((function(r) {
                                            throw _(e, r), r
                                        }))
                                    }(e).then((function() {
                                        A(e, r, n, t - 1)
                                    }))
                                })).catch(n);
                                n(o)
                            }
                        }
                        var D = {
                            _driver: "asyncStorage",
                            _initStorage: function(e) {
                                var r = this,
                                    n = {
                                        db: null
                                    };
                                if (e)
                                    for (var t in e) n[t] = e[t];
                                var o = v[n.name];
                                o || (o = {
                                    forages: [],
                                    db: null,
                                    dbReady: null,
                                    deferredOperations: []
                                }, v[n.name] = o), o.forages.push(r), r._initReady || (r._initReady = r.ready, r.ready = j);
                                var i = [];

                                function u() {
                                    return a.resolve()
                                }
                                for (var c = 0; c < o.forages.length; c++) {
                                    var f = o.forages[c];
                                    f !== r && i.push(f._initReady().catch(u))
                                }
                                var s = o.forages.slice(0);
                                return a.all(i).then((function() {
                                    return n.db = o.db, I(n)
                                })).then((function(e) {
                                    return n.db = e, E(n, r._defaultConfig.version) ? S(n) : e
                                })).then((function(e) {
                                    n.db = o.db = e, r._dbInfo = n;
                                    for (var t = 0; t < s.length; t++) {
                                        var i = s[t];
                                        i !== r && (i._dbInfo.db = n.db, i._dbInfo.version = n.version)
                                    }
                                }))
                            },
                            _support: function() {
                                try {
                                    if (!o || !o.open) return !1;
                                    var e = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                                        r = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                                    return (!e || r) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
                                } catch (e) {
                                    return !1
                                }
                            }(),
                            iterate: function(e, r) {
                                var n = this,
                                    t = new a((function(r, t) {
                                        n.ready().then((function() {
                                            A(n._dbInfo, b, (function(o, i) {
                                                if (o) return t(o);
                                                try {
                                                    var a = i.objectStore(n._dbInfo.storeName).openCursor(),
                                                        u = 1;
                                                    a.onsuccess = function() {
                                                        var n = a.result;
                                                        if (n) {
                                                            var t = n.value;
                                                            O(t) && (t = N(t));
                                                            var o = e(t, n.key, u++);
                                                            void 0 !== o ? r(o) : n.continue()
                                                        } else r()
                                                    }, a.onerror = function() {
                                                        t(a.error)
                                                    }
                                                } catch (e) {
                                                    t(e)
                                                }
                                            }))
                                        })).catch(t)
                                    }));
                                return u(t, r), t
                            },
                            getItem: function(e, r) {
                                var n = this;
                                e = f(e);
                                var t = new a((function(r, t) {
                                    n.ready().then((function() {
                                        A(n._dbInfo, b, (function(o, i) {
                                            if (o) return t(o);
                                            try {
                                                var a = i.objectStore(n._dbInfo.storeName).get(e);
                                                a.onsuccess = function() {
                                                    var e = a.result;
                                                    void 0 === e && (e = null), O(e) && (e = N(e)), r(e)
                                                }, a.onerror = function() {
                                                    t(a.error)
                                                }
                                            } catch (e) {
                                                t(e)
                                            }
                                        }))
                                    })).catch(t)
                                }));
                                return u(t, r), t
                            },
                            setItem: function(e, r, n) {
                                var t = this;
                                e = f(e);
                                var o = new a((function(n, o) {
                                    var i;
                                    t.ready().then((function() {
                                        return i = t._dbInfo, "[object Blob]" === h.call(r) ? y(i.db).then((function(e) {
                                            return e ? r : (n = r, new a((function(e, r) {
                                                var t = new FileReader;
                                                t.onerror = r, t.onloadend = function(r) {
                                                    var t = btoa(r.target.result || "");
                                                    e({
                                                        __local_forage_encoded_blob: !0,
                                                        data: t,
                                                        type: n.type
                                                    })
                                                }, t.readAsBinaryString(n)
                                            })));
                                            var n
                                        })) : r
                                    })).then((function(r) {
                                        A(t._dbInfo, p, (function(i, a) {
                                            if (i) return o(i);
                                            try {
                                                var u = a.objectStore(t._dbInfo.storeName);
                                                null === r && (r = void 0);
                                                var c = u.put(r, e);
                                                a.oncomplete = function() {
                                                    void 0 === r && (r = null), n(r)
                                                }, a.onabort = a.onerror = function() {
                                                    var e = c.error ? c.error : c.transaction.error;
                                                    o(e)
                                                }
                                            } catch (e) {
                                                o(e)
                                            }
                                        }))
                                    })).catch(o)
                                }));
                                return u(o, n), o
                            },
                            removeItem: function(e, r) {
                                var n = this;
                                e = f(e);
                                var t = new a((function(r, t) {
                                    n.ready().then((function() {
                                        A(n._dbInfo, p, (function(o, i) {
                                            if (o) return t(o);
                                            try {
                                                var a = i.objectStore(n._dbInfo.storeName).delete(e);
                                                i.oncomplete = function() {
                                                    r()
                                                }, i.onerror = function() {
                                                    t(a.error)
                                                }, i.onabort = function() {
                                                    var e = a.error ? a.error : a.transaction.error;
                                                    t(e)
                                                }
                                            } catch (e) {
                                                t(e)
                                            }
                                        }))
                                    })).catch(t)
                                }));
                                return u(t, r), t
                            },
                            clear: function(e) {
                                var r = this,
                                    n = new a((function(e, n) {
                                        r.ready().then((function() {
                                            A(r._dbInfo, p, (function(t, o) {
                                                if (t) return n(t);
                                                try {
                                                    var i = o.objectStore(r._dbInfo.storeName).clear();
                                                    o.oncomplete = function() {
                                                        e()
                                                    }, o.onabort = o.onerror = function() {
                                                        var e = i.error ? i.error : i.transaction.error;
                                                        n(e)
                                                    }
                                                } catch (e) {
                                                    n(e)
                                                }
                                            }))
                                        })).catch(n)
                                    }));
                                return u(n, e), n
                            },
                            length: function(e) {
                                var r = this,
                                    n = new a((function(e, n) {
                                        r.ready().then((function() {
                                            A(r._dbInfo, b, (function(t, o) {
                                                if (t) return n(t);
                                                try {
                                                    var i = o.objectStore(r._dbInfo.storeName).count();
                                                    i.onsuccess = function() {
                                                        e(i.result)
                                                    }, i.onerror = function() {
                                                        n(i.error)
                                                    }
                                                } catch (e) {
                                                    n(e)
                                                }
                                            }))
                                        })).catch(n)
                                    }));
                                return u(n, e), n
                            },
                            key: function(e, r) {
                                var n = this,
                                    t = new a((function(r, t) {
                                        e < 0 ? r(null) : n.ready().then((function() {
                                            A(n._dbInfo, b, (function(o, i) {
                                                if (o) return t(o);
                                                try {
                                                    var a = i.objectStore(n._dbInfo.storeName),
                                                        u = !1,
                                                        c = a.openKeyCursor();
                                                    c.onsuccess = function() {
                                                        var n = c.result;
                                                        n ? 0 === e || u ? r(n.key) : (u = !0, n.advance(e)) : r(null)
                                                    }, c.onerror = function() {
                                                        t(c.error)
                                                    }
                                                } catch (e) {
                                                    t(e)
                                                }
                                            }))
                                        })).catch(t)
                                    }));
                                return u(t, r), t
                            },
                            keys: function(e) {
                                var r = this,
                                    n = new a((function(e, n) {
                                        r.ready().then((function() {
                                            A(r._dbInfo, b, (function(t, o) {
                                                if (t) return n(t);
                                                try {
                                                    var i = o.objectStore(r._dbInfo.storeName).openKeyCursor(),
                                                        a = [];
                                                    i.onsuccess = function() {
                                                        var r = i.result;
                                                        r ? (a.push(r.key), r.continue()) : e(a)
                                                    }, i.onerror = function() {
                                                        n(i.error)
                                                    }
                                                } catch (e) {
                                                    n(e)
                                                }
                                            }))
                                        })).catch(n)
                                    }));
                                return u(n, e), n
                            },
                            dropInstance: function(e, r) {
                                r = s.apply(this, arguments);
                                var n = this.config();
                                (e = "function" != typeof e && e || {}).name || (e.name = e.name || n.name, e.storeName = e.storeName || n.storeName);
                                var t, i = this;
                                if (e.name) {
                                    var c = e.name === n.name && i._dbInfo.db,
                                        f = c ? a.resolve(i._dbInfo.db) : I(e).then((function(r) {
                                            var n = v[e.name],
                                                t = n.forages;
                                            n.db = r;
                                            for (var o = 0; o < t.length; o++) t[o]._dbInfo.db = r;
                                            return r
                                        }));
                                    t = e.storeName ? f.then((function(r) {
                                        if (r.objectStoreNames.contains(e.storeName)) {
                                            var n = r.version + 1;
                                            g(e);
                                            var t = v[e.name],
                                                i = t.forages;
                                            r.close();
                                            for (var u = 0; u < i.length; u++) {
                                                var c = i[u];
                                                c._dbInfo.db = null, c._dbInfo.version = n
                                            }
                                            var f = new a((function(r, t) {
                                                var i = o.open(e.name, n);
                                                i.onerror = function(e) {
                                                    i.result.close(), t(e)
                                                }, i.onupgradeneeded = function() {
                                                    i.result.deleteObjectStore(e.storeName)
                                                }, i.onsuccess = function() {
                                                    var e = i.result;
                                                    e.close(), r(e)
                                                }
                                            }));
                                            return f.then((function(e) {
                                                t.db = e;
                                                for (var r = 0; r < i.length; r++) {
                                                    var n = i[r];
                                                    n._dbInfo.db = e, m(n._dbInfo)
                                                }
                                            })).catch((function(r) {
                                                throw (_(e, r) || a.resolve()).catch((function() {})), r
                                            }))
                                        }
                                    })) : f.then((function(r) {
                                        g(e);
                                        var n = v[e.name],
                                            t = n.forages;
                                        r.close();
                                        for (var i = 0; i < t.length; i++) {
                                            t[i]._dbInfo.db = null
                                        }
                                        var u = new a((function(r, n) {
                                            var t = o.deleteDatabase(e.name);
                                            t.onerror = function() {
                                                var e = t.result;
                                                e && e.close(), n(t.error)
                                            }, t.onblocked = function() {
                                                console.warn('dropInstance blocked for database "' + e.name + '" until all open connections are closed')
                                            }, t.onsuccess = function() {
                                                var e = t.result;
                                                e && e.close(), r(e)
                                            }
                                        }));
                                        return u.then((function(e) {
                                            n.db = e;
                                            for (var r = 0; r < t.length; r++) {
                                                m(t[r]._dbInfo)
                                            }
                                        })).catch((function(r) {
                                            throw (_(e, r) || a.resolve()).catch((function() {})), r
                                        }))
                                    }))
                                } else t = a.reject("Invalid arguments");
                                return u(t, r), t
                            }
                        };
                        var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                            R = /^~~local_forage_type~([^~]+)~/,
                            k = "__lfsc__:",
                            B = k.length,
                            T = "arbf",
                            C = "blob",
                            M = "si08",
                            P = "ui08",
                            L = "uic8",
                            z = "si16",
                            F = "si32",
                            U = "ur16",
                            q = "ui32",
                            W = "fl32",
                            H = "fl64",
                            K = B + T.length,
                            Q = Object.prototype.toString;

                        function X(e) {
                            var r, n, t, o, i, a = .75 * e.length,
                                u = e.length,
                                c = 0;
                            "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
                            var f = new ArrayBuffer(a),
                                s = new Uint8Array(f);
                            for (r = 0; r < u; r += 4) n = x.indexOf(e[r]), t = x.indexOf(e[r + 1]), o = x.indexOf(e[r + 2]), i = x.indexOf(e[r + 3]), s[c++] = n << 2 | t >> 4, s[c++] = (15 & t) << 4 | o >> 2, s[c++] = (3 & o) << 6 | 63 & i;
                            return f
                        }

                        function J(e) {
                            var r, n = new Uint8Array(e),
                                t = "";
                            for (r = 0; r < n.length; r += 3) t += x[n[r] >> 2], t += x[(3 & n[r]) << 4 | n[r + 1] >> 4], t += x[(15 & n[r + 1]) << 2 | n[r + 2] >> 6], t += x[63 & n[r + 2]];
                            return n.length % 3 == 2 ? t = t.substring(0, t.length - 1) + "=" : n.length % 3 == 1 && (t = t.substring(0, t.length - 2) + "=="), t
                        }
                        var V = {
                            serialize: function(e, r) {
                                var n = "";
                                if (e && (n = Q.call(e)), e && ("[object ArrayBuffer]" === n || e.buffer && "[object ArrayBuffer]" === Q.call(e.buffer))) {
                                    var t, o = k;
                                    e instanceof ArrayBuffer ? (t = e, o += T) : (t = e.buffer, "[object Int8Array]" === n ? o += M : "[object Uint8Array]" === n ? o += P : "[object Uint8ClampedArray]" === n ? o += L : "[object Int16Array]" === n ? o += z : "[object Uint16Array]" === n ? o += U : "[object Int32Array]" === n ? o += F : "[object Uint32Array]" === n ? o += q : "[object Float32Array]" === n ? o += W : "[object Float64Array]" === n ? o += H : r(new Error("Failed to get type for BinaryArray"))), r(o + J(t))
                                } else if ("[object Blob]" === n) {
                                    var i = new FileReader;
                                    i.onload = function() {
                                        var n = "~~local_forage_type~" + e.type + "~" + J(this.result);
                                        r("__lfsc__:blob" + n)
                                    }, i.readAsArrayBuffer(e)
                                } else try {
                                    r(JSON.stringify(e))
                                } catch (n) {
                                    console.error("Couldn't convert value into a JSON string: ", e), r(null, n)
                                }
                            },
                            deserialize: function(e) {
                                if (e.substring(0, B) !== k) return JSON.parse(e);
                                var r, n = e.substring(K),
                                    t = e.substring(B, K);
                                if (t === C && R.test(n)) {
                                    var o = n.match(R);
                                    r = o[1], n = n.substring(o[0].length)
                                }
                                var a = X(n);
                                switch (t) {
                                    case T:
                                        return a;
                                    case C:
                                        return i([a], {
                                            type: r
                                        });
                                    case M:
                                        return new Int8Array(a);
                                    case P:
                                        return new Uint8Array(a);
                                    case L:
                                        return new Uint8ClampedArray(a);
                                    case z:
                                        return new Int16Array(a);
                                    case U:
                                        return new Uint16Array(a);
                                    case F:
                                        return new Int32Array(a);
                                    case q:
                                        return new Uint32Array(a);
                                    case W:
                                        return new Float32Array(a);
                                    case H:
                                        return new Float64Array(a);
                                    default:
                                        throw new Error("Unkown type: " + t)
                                }
                            },
                            stringToBuffer: X,
                            bufferToString: J
                        };

                        function $(e, r, n, t) {
                            e.executeSql("CREATE TABLE IF NOT EXISTS " + r.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n, t)
                        }

                        function G(e, r, n, t, o, i) {
                            e.executeSql(n, t, o, (function(e, a) {
                                a.code === a.SYNTAX_ERR ? e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [r.storeName], (function(e, u) {
                                    u.rows.length ? i(e, a) : $(e, r, (function() {
                                        e.executeSql(n, t, o, i)
                                    }), i)
                                }), i) : i(e, a)
                            }), i)
                        }

                        function Y(e, r, n, t) {
                            var o = this;
                            e = f(e);
                            var i = new a((function(i, a) {
                                o.ready().then((function() {
                                    void 0 === r && (r = null);
                                    var u = r,
                                        c = o._dbInfo;
                                    c.serializer.serialize(r, (function(r, f) {
                                        f ? a(f) : c.db.transaction((function(n) {
                                            G(n, c, "INSERT OR REPLACE INTO " + c.storeName + " (key, value) VALUES (?, ?)", [e, r], (function() {
                                                i(u)
                                            }), (function(e, r) {
                                                a(r)
                                            }))
                                        }), (function(r) {
                                            if (r.code === r.QUOTA_ERR) {
                                                if (t > 0) return void i(Y.apply(o, [e, u, n, t - 1]));
                                                a(r)
                                            }
                                        }))
                                    }))
                                })).catch(a)
                            }));
                            return u(i, n), i
                        }

                        function Z(e) {
                            return new a((function(r, n) {
                                e.transaction((function(t) {
                                    t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], (function(n, t) {
                                        for (var o = [], i = 0; i < t.rows.length; i++) o.push(t.rows.item(i).name);
                                        r({
                                            db: e,
                                            storeNames: o
                                        })
                                    }), (function(e, r) {
                                        n(r)
                                    }))
                                }), (function(e) {
                                    n(e)
                                }))
                            }))
                        }
                        var ee = {
                            _driver: "webSQLStorage",
                            _initStorage: function(e) {
                                var r = this,
                                    n = {
                                        db: null
                                    };
                                if (e)
                                    for (var t in e) n[t] = "string" != typeof e[t] ? e[t].toString() : e[t];
                                var o = new a((function(e, t) {
                                    try {
                                        n.db = openDatabase(n.name, String(n.version), n.description, n.size)
                                    } catch (e) {
                                        return t(e)
                                    }
                                    n.db.transaction((function(o) {
                                        $(o, n, (function() {
                                            r._dbInfo = n, e()
                                        }), (function(e, r) {
                                            t(r)
                                        }))
                                    }), t)
                                }));
                                return n.serializer = V, o
                            },
                            _support: "function" == typeof openDatabase,
                            iterate: function(e, r) {
                                var n = this,
                                    t = new a((function(r, t) {
                                        n.ready().then((function() {
                                            var o = n._dbInfo;
                                            o.db.transaction((function(n) {
                                                G(n, o, "SELECT * FROM " + o.storeName, [], (function(n, t) {
                                                    for (var i = t.rows, a = i.length, u = 0; u < a; u++) {
                                                        var c = i.item(u),
                                                            f = c.value;
                                                        if (f && (f = o.serializer.deserialize(f)), void 0 !== (f = e(f, c.key, u + 1))) return void r(f)
                                                    }
                                                    r()
                                                }), (function(e, r) {
                                                    t(r)
                                                }))
                                            }))
                                        })).catch(t)
                                    }));
                                return u(t, r), t
                            },
                            getItem: function(e, r) {
                                var n = this;
                                e = f(e);
                                var t = new a((function(r, t) {
                                    n.ready().then((function() {
                                        var o = n._dbInfo;
                                        o.db.transaction((function(n) {
                                            G(n, o, "SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [e], (function(e, n) {
                                                var t = n.rows.length ? n.rows.item(0).value : null;
                                                t && (t = o.serializer.deserialize(t)), r(t)
                                            }), (function(e, r) {
                                                t(r)
                                            }))
                                        }))
                                    })).catch(t)
                                }));
                                return u(t, r), t
                            },
                            setItem: function(e, r, n) {
                                return Y.apply(this, [e, r, n, 1])
                            },
                            removeItem: function(e, r) {
                                var n = this;
                                e = f(e);
                                var t = new a((function(r, t) {
                                    n.ready().then((function() {
                                        var o = n._dbInfo;
                                        o.db.transaction((function(n) {
                                            G(n, o, "DELETE FROM " + o.storeName + " WHERE key = ?", [e], (function() {
                                                r()
                                            }), (function(e, r) {
                                                t(r)
                                            }))
                                        }))
                                    })).catch(t)
                                }));
                                return u(t, r), t
                            },
                            clear: function(e) {
                                var r = this,
                                    n = new a((function(e, n) {
                                        r.ready().then((function() {
                                            var t = r._dbInfo;
                                            t.db.transaction((function(r) {
                                                G(r, t, "DELETE FROM " + t.storeName, [], (function() {
                                                    e()
                                                }), (function(e, r) {
                                                    n(r)
                                                }))
                                            }))
                                        })).catch(n)
                                    }));
                                return u(n, e), n
                            },
                            length: function(e) {
                                var r = this,
                                    n = new a((function(e, n) {
                                        r.ready().then((function() {
                                            var t = r._dbInfo;
                                            t.db.transaction((function(r) {
                                                G(r, t, "SELECT COUNT(key) as c FROM " + t.storeName, [], (function(r, n) {
                                                    var t = n.rows.item(0).c;
                                                    e(t)
                                                }), (function(e, r) {
                                                    n(r)
                                                }))
                                            }))
                                        })).catch(n)
                                    }));
                                return u(n, e), n
                            },
                            key: function(e, r) {
                                var n = this,
                                    t = new a((function(r, t) {
                                        n.ready().then((function() {
                                            var o = n._dbInfo;
                                            o.db.transaction((function(n) {
                                                G(n, o, "SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [e + 1], (function(e, n) {
                                                    var t = n.rows.length ? n.rows.item(0).key : null;
                                                    r(t)
                                                }), (function(e, r) {
                                                    t(r)
                                                }))
                                            }))
                                        })).catch(t)
                                    }));
                                return u(t, r), t
                            },
                            keys: function(e) {
                                var r = this,
                                    n = new a((function(e, n) {
                                        r.ready().then((function() {
                                            var t = r._dbInfo;
                                            t.db.transaction((function(r) {
                                                G(r, t, "SELECT key FROM " + t.storeName, [], (function(r, n) {
                                                    for (var t = [], o = 0; o < n.rows.length; o++) t.push(n.rows.item(o).key);
                                                    e(t)
                                                }), (function(e, r) {
                                                    n(r)
                                                }))
                                            }))
                                        })).catch(n)
                                    }));
                                return u(n, e), n
                            },
                            dropInstance: function(e, r) {
                                r = s.apply(this, arguments);
                                var n = this.config();
                                (e = "function" != typeof e && e || {}).name || (e.name = e.name || n.name, e.storeName = e.storeName || n.storeName);
                                var t, o = this;
                                return u(t = e.name ? new a((function(r) {
                                    var t;
                                    t = e.name === n.name ? o._dbInfo.db : openDatabase(e.name, "", "", 0), e.storeName ? r({
                                        db: t,
                                        storeNames: [e.storeName]
                                    }) : r(Z(t))
                                })).then((function(e) {
                                    return new a((function(r, n) {
                                        e.db.transaction((function(t) {
                                            function o(e) {
                                                return new a((function(r, n) {
                                                    t.executeSql("DROP TABLE IF EXISTS " + e, [], (function() {
                                                        r()
                                                    }), (function(e, r) {
                                                        n(r)
                                                    }))
                                                }))
                                            }
                                            for (var i = [], u = 0, c = e.storeNames.length; u < c; u++) i.push(o(e.storeNames[u]));
                                            a.all(i).then((function() {
                                                r()
                                            })).catch((function(e) {
                                                n(e)
                                            }))
                                        }), (function(e) {
                                            n(e)
                                        }))
                                    }))
                                })) : a.reject("Invalid arguments"), r), t
                            }
                        };

                        function re(e, r) {
                            var n = e.name + "/";
                            return e.storeName !== r.storeName && (n += e.storeName + "/"), n
                        }

                        function ne() {
                            return ! function() {
                                var e = "_localforage_support_test";
                                try {
                                    return localStorage.setItem(e, !0), localStorage.removeItem(e), !1
                                } catch (e) {
                                    return !0
                                }
                            }() || localStorage.length > 0
                        }
                        var te = {
                                _driver: "localStorageWrapper",
                                _initStorage: function(e) {
                                    var r = {};
                                    if (e)
                                        for (var n in e) r[n] = e[n];
                                    return r.keyPrefix = re(e, this._defaultConfig), ne() ? (this._dbInfo = r, r.serializer = V, a.resolve()) : a.reject()
                                },
                                _support: function() {
                                    try {
                                        return "undefined" != typeof localStorage && "setItem" in localStorage && !!localStorage.setItem
                                    } catch (e) {
                                        return !1
                                    }
                                }(),
                                iterate: function(e, r) {
                                    var n = this,
                                        t = n.ready().then((function() {
                                            for (var r = n._dbInfo, t = r.keyPrefix, o = t.length, i = localStorage.length, a = 1, u = 0; u < i; u++) {
                                                var c = localStorage.key(u);
                                                if (0 === c.indexOf(t)) {
                                                    var f = localStorage.getItem(c);
                                                    if (f && (f = r.serializer.deserialize(f)), void 0 !== (f = e(f, c.substring(o), a++))) return f
                                                }
                                            }
                                        }));
                                    return u(t, r), t
                                },
                                getItem: function(e, r) {
                                    var n = this;
                                    e = f(e);
                                    var t = n.ready().then((function() {
                                        var r = n._dbInfo,
                                            t = localStorage.getItem(r.keyPrefix + e);
                                        return t && (t = r.serializer.deserialize(t)), t
                                    }));
                                    return u(t, r), t
                                },
                                setItem: function(e, r, n) {
                                    var t = this;
                                    e = f(e);
                                    var o = t.ready().then((function() {
                                        void 0 === r && (r = null);
                                        var n = r;
                                        return new a((function(o, i) {
                                            var a = t._dbInfo;
                                            a.serializer.serialize(r, (function(r, t) {
                                                if (t) i(t);
                                                else try {
                                                    localStorage.setItem(a.keyPrefix + e, r), o(n)
                                                } catch (e) {
                                                    "QuotaExceededError" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name || i(e), i(e)
                                                }
                                            }))
                                        }))
                                    }));
                                    return u(o, n), o
                                },
                                removeItem: function(e, r) {
                                    var n = this;
                                    e = f(e);
                                    var t = n.ready().then((function() {
                                        var r = n._dbInfo;
                                        localStorage.removeItem(r.keyPrefix + e)
                                    }));
                                    return u(t, r), t
                                },
                                clear: function(e) {
                                    var r = this,
                                        n = r.ready().then((function() {
                                            for (var e = r._dbInfo.keyPrefix, n = localStorage.length - 1; n >= 0; n--) {
                                                var t = localStorage.key(n);
                                                0 === t.indexOf(e) && localStorage.removeItem(t)
                                            }
                                        }));
                                    return u(n, e), n
                                },
                                length: function(e) {
                                    var r = this.keys().then((function(e) {
                                        return e.length
                                    }));
                                    return u(r, e), r
                                },
                                key: function(e, r) {
                                    var n = this,
                                        t = n.ready().then((function() {
                                            var r, t = n._dbInfo;
                                            try {
                                                r = localStorage.key(e)
                                            } catch (e) {
                                                r = null
                                            }
                                            return r && (r = r.substring(t.keyPrefix.length)), r
                                        }));
                                    return u(t, r), t
                                },
                                keys: function(e) {
                                    var r = this,
                                        n = r.ready().then((function() {
                                            for (var e = r._dbInfo, n = localStorage.length, t = [], o = 0; o < n; o++) {
                                                var i = localStorage.key(o);
                                                0 === i.indexOf(e.keyPrefix) && t.push(i.substring(e.keyPrefix.length))
                                            }
                                            return t
                                        }));
                                    return u(n, e), n
                                },
                                dropInstance: function(e, r) {
                                    if (r = s.apply(this, arguments), !(e = "function" != typeof e && e || {}).name) {
                                        var n = this.config();
                                        e.name = e.name || n.name, e.storeName = e.storeName || n.storeName
                                    }
                                    var t, o = this;
                                    return t = e.name ? new a((function(r) {
                                        e.storeName ? r(re(e, o._defaultConfig)) : r(e.name + "/")
                                    })).then((function(e) {
                                        for (var r = localStorage.length - 1; r >= 0; r--) {
                                            var n = localStorage.key(r);
                                            0 === n.indexOf(e) && localStorage.removeItem(n)
                                        }
                                    })) : a.reject("Invalid arguments"), u(t, r), t
                                }
                            },
                            oe = function(e, r) {
                                for (var n, t, o = e.length, i = 0; i < o;) {
                                    if ((n = e[i]) === (t = r) || "number" == typeof n && "number" == typeof t && isNaN(n) && isNaN(t)) return !0;
                                    i++
                                }
                                return !1
                            },
                            ie = Array.isArray || function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            },
                            ae = {},
                            ue = {},
                            ce = {
                                INDEXEDDB: D,
                                WEBSQL: ee,
                                LOCALSTORAGE: te
                            },
                            fe = [ce.INDEXEDDB._driver, ce.WEBSQL._driver, ce.LOCALSTORAGE._driver],
                            se = ["dropInstance"],
                            le = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(se),
                            de = {
                                description: "",
                                driver: fe.slice(),
                                name: "localforage",
                                size: 4980736,
                                storeName: "keyvaluepairs",
                                version: 1
                            };

                        function ve(e, r) {
                            e[r] = function() {
                                var n = arguments;
                                return e.ready().then((function() {
                                    return e[r].apply(e, n)
                                }))
                            }
                        }

                        function he() {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = arguments[e];
                                if (r)
                                    for (var n in r) r.hasOwnProperty(n) && (ie(r[n]) ? arguments[0][n] = r[n].slice() : arguments[0][n] = r[n])
                            }
                            return arguments[0]
                        }
                        var be = function() {
                                function e(r) {
                                    for (var n in function(e, r) {
                                            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
                                        }(this, e), ce)
                                        if (ce.hasOwnProperty(n)) {
                                            var t = ce[n],
                                                o = t._driver;
                                            this[n] = o, ae[o] || this.defineDriver(t)
                                        }
                                    this._defaultConfig = he({}, de), this._config = he({}, this._defaultConfig, r), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch((function() {}))
                                }
                                return e.prototype.config = function(e) {
                                    if ("object" === (void 0 === e ? "undefined" : t(e))) {
                                        if (this._ready) return new Error("Can't call config() after localforage has been used.");
                                        for (var r in e) {
                                            if ("storeName" === r && (e[r] = e[r].replace(/\W/g, "_")), "version" === r && "number" != typeof e[r]) return new Error("Database version must be a number.");
                                            this._config[r] = e[r]
                                        }
                                        return !("driver" in e) || !e.driver || this.setDriver(this._config.driver)
                                    }
                                    return "string" == typeof e ? this._config[e] : this._config
                                }, e.prototype.defineDriver = function(e, r, n) {
                                    var t = new a((function(r, n) {
                                        try {
                                            var t = e._driver,
                                                o = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                            if (!e._driver) return void n(o);
                                            for (var i = le.concat("_initStorage"), c = 0, f = i.length; c < f; c++) {
                                                var s = i[c];
                                                if ((!oe(se, s) || e[s]) && "function" != typeof e[s]) return void n(o)
                                            }! function() {
                                                for (var r = function(e) {
                                                        return function() {
                                                            var r = new Error("Method " + e + " is not implemented by the current driver"),
                                                                n = a.reject(r);
                                                            return u(n, arguments[arguments.length - 1]), n
                                                        }
                                                    }, n = 0, t = se.length; n < t; n++) {
                                                    var o = se[n];
                                                    e[o] || (e[o] = r(o))
                                                }
                                            }();
                                            var l = function(n) {
                                                ae[t] && console.info("Redefining LocalForage driver: " + t), ae[t] = e, ue[t] = n, r()
                                            };
                                            "_support" in e ? e._support && "function" == typeof e._support ? e._support().then(l, n) : l(!!e._support) : l(!0)
                                        } catch (e) {
                                            n(e)
                                        }
                                    }));
                                    return c(t, r, n), t
                                }, e.prototype.driver = function() {
                                    return this._driver || null
                                }, e.prototype.getDriver = function(e, r, n) {
                                    var t = ae[e] ? a.resolve(ae[e]) : a.reject(new Error("Driver not found."));
                                    return c(t, r, n), t
                                }, e.prototype.getSerializer = function(e) {
                                    var r = a.resolve(V);
                                    return c(r, e), r
                                }, e.prototype.ready = function(e) {
                                    var r = this,
                                        n = r._driverSet.then((function() {
                                            return null === r._ready && (r._ready = r._initDriver()), r._ready
                                        }));
                                    return c(n, e, e), n
                                }, e.prototype.setDriver = function(e, r, n) {
                                    var t = this;
                                    ie(e) || (e = [e]);
                                    var o = this._getSupportedDrivers(e);

                                    function i() {
                                        t._config.driver = t.driver()
                                    }

                                    function u(e) {
                                        return t._extend(e), i(), t._ready = t._initStorage(t._config), t._ready
                                    }
                                    var f = null !== this._driverSet ? this._driverSet.catch((function() {
                                        return a.resolve()
                                    })) : a.resolve();
                                    return this._driverSet = f.then((function() {
                                        var e = o[0];
                                        return t._dbInfo = null, t._ready = null, t.getDriver(e).then((function(e) {
                                            t._driver = e._driver, i(), t._wrapLibraryMethodsWithReady(), t._initDriver = function(e) {
                                                return function() {
                                                    var r = 0;
                                                    return function n() {
                                                        for (; r < e.length;) {
                                                            var o = e[r];
                                                            return r++, t._dbInfo = null, t._ready = null, t.getDriver(o).then(u).catch(n)
                                                        }
                                                        i();
                                                        var c = new Error("No available storage method found.");
                                                        return t._driverSet = a.reject(c), t._driverSet
                                                    }()
                                                }
                                            }(o)
                                        }))
                                    })).catch((function() {
                                        i();
                                        var e = new Error("No available storage method found.");
                                        return t._driverSet = a.reject(e), t._driverSet
                                    })), c(this._driverSet, r, n), this._driverSet
                                }, e.prototype.supports = function(e) {
                                    return !!ue[e]
                                }, e.prototype._extend = function(e) {
                                    he(this, e)
                                }, e.prototype._getSupportedDrivers = function(e) {
                                    for (var r = [], n = 0, t = e.length; n < t; n++) {
                                        var o = e[n];
                                        this.supports(o) && r.push(o)
                                    }
                                    return r
                                }, e.prototype._wrapLibraryMethodsWithReady = function() {
                                    for (var e = 0, r = le.length; e < r; e++) ve(this, le[e])
                                }, e.prototype.createInstance = function(r) {
                                    return new e(r)
                                }, e
                            }(),
                            pe = new be;
                        r.exports = pe
                    }, {
                        undefined: void 0
                    }]
                }, {}, [1])(1)
            }))
        },
        503060: (e, r, n) => {
            "use strict";
            n.d(r, {
                default: () => t
            });
            const t = n(178160).default.Symbol
        },
        128177: (e, r, n) => {
            "use strict";
            n.d(r, {
                default: () => d
            });
            var t = n(503060),
                o = Object.prototype,
                i = o.hasOwnProperty,
                a = o.toString,
                u = t.default ? t.default.toStringTag : void 0;
            const c = function(e) {
                var r = i.call(e, u),
                    n = e[u];
                try {
                    e[u] = void 0;
                    var t = !0
                } catch (e) {}
                var o = a.call(e);
                return t && (r ? e[u] = n : delete e[u]), o
            };
            var f = Object.prototype.toString;
            const s = function(e) {
                return f.call(e)
            };
            var l = t.default ? t.default.toStringTag : void 0;
            const d = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : l && l in Object(e) ? c(e) : s(e)
            }
        },
        489956: (e, r, n) => {
            "use strict";
            n.d(r, {
                default: () => t
            });
            const t = "object" == typeof n.g && n.g && n.g.Object === Object && n.g
        },
        178160: (e, r, n) => {
            "use strict";
            n.d(r, {
                default: () => i
            });
            var t = n(489956),
                o = "object" == typeof self && self && self.Object === Object && self;
            const i = t.default || o || Function("return this")()
        },
        12481: (e, r, n) => {
            "use strict";
            n.d(r, {
                default: () => f
            });
            var t = n(598279),
                o = n(178160);
            const i = function() {
                return o.default.Date.now()
            };
            var a = n(968877),
                u = Math.max,
                c = Math.min;
            const f = function(e, r, n) {
                var o, f, s, l, d, v, h = 0,
                    b = !1,
                    p = !1,
                    y = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");

                function g(r) {
                    var n = o,
                        t = f;
                    return o = f = void 0, h = r, l = e.apply(t, n)
                }

                function m(e) {
                    return h = e, d = setTimeout(w, r), b ? g(e) : l
                }

                function _(e) {
                    var n = e - v;
                    return void 0 === v || n >= r || n < 0 || p && e - h >= s
                }

                function w() {
                    var e = i();
                    if (_(e)) return I(e);
                    d = setTimeout(w, function(e) {
                        var n = r - (e - v);
                        return p ? c(n, s - (e - h)) : n
                    }(e))
                }

                function I(e) {
                    return d = void 0, y && o ? g(e) : (o = f = void 0, l)
                }

                function S() {
                    var e = i(),
                        n = _(e);
                    if (o = arguments, f = this, v = e, n) {
                        if (void 0 === d) return m(v);
                        if (p) return clearTimeout(d), d = setTimeout(w, r), g(v)
                    }
                    return void 0 === d && (d = setTimeout(w, r)), l
                }
                return r = (0, a.default)(r) || 0, (0, t.default)(n) && (b = !!n.leading, s = (p = "maxWait" in n) ? u((0, a.default)(n.maxWait) || 0, r) : s, y = "trailing" in n ? !!n.trailing : y), S.cancel = function() {
                    void 0 !== d && clearTimeout(d), h = 0, o = v = f = d = void 0
                }, S.flush = function() {
                    return void 0 === d ? l : I(i())
                }, S
            }
        },
        598279: (e, r, n) => {
            "use strict";
            n.d(r, {
                default: () => t
            });
            const t = function(e) {
                var r = typeof e;
                return null != e && ("object" == r || "function" == r)
            }
        },
        383527: (e, r, n) => {
            "use strict";
            n.d(r, {
                default: () => t
            });
            const t = function(e) {
                return null != e && "object" == typeof e
            }
        },
        708875: (e, r, n) => {
            "use strict";
            n.d(r, {
                default: () => i
            });
            var t = n(128177),
                o = n(383527);
            const i = function(e) {
                return "symbol" == typeof e || (0, o.default)(e) && "[object Symbol]" == (0, t.default)(e)
            }
        },
        343370: (e, r, n) => {
            "use strict";
            n.d(r, {
                default: () => i
            });
            var t = n(12481),
                o = n(598279);
            const i = function(e, r, n) {
                var i = !0,
                    a = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                return (0, o.default)(n) && (i = "leading" in n ? !!n.leading : i, a = "trailing" in n ? !!n.trailing : a), (0, t.default)(e, r, {
                    leading: i,
                    maxWait: r,
                    trailing: a
                })
            }
        },
        968877: (e, r, n) => {
            "use strict";
            n.d(r, {
                default: () => s
            });
            var t = n(598279),
                o = n(708875),
                i = /^\s+|\s+$/g,
                a = /^[-+]0x[0-9a-f]+$/i,
                u = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i,
                f = parseInt;
            const s = function(e) {
                if ("number" == typeof e) return e;
                if ((0, o.default)(e)) return NaN;
                if ((0, t.default)(e)) {
                    var r = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = (0, t.default)(r) ? r + "" : r
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(i, "");
                var n = u.test(e);
                return n || c.test(e) ? f(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e
            }
        }
    }
]);