/*! permutive-javascript-sdk v19.30.0 (web) (built 2022-10-05T11:55:53.945Z) */
(() => {
    "use strict";
    var __webpack_modules__ = {
            2688: (e, r, t) => {
                function n(e) {
                    return e instanceof Error ? e : new Error("string" == typeof e ? e : JSON.stringify(e))
                }
                t.d(r, {
                    w: () => n
                })
            },
            787: (e, r, t) => {
                t.d(r, {
                    A: () => o
                });
                var n = t(3735),
                    i = t(6567);

                function o(e) {
                    return (0, n.zG)((0, i.Y3)((() => JSON.parse(e))), (0, i.fS)(n.gn))
                }
            },
            7183: (e, r, t) => {
                t.d(r, {
                    h: () => n
                });
                const n = e => new i(e);
                class i {
                    constructor(e) {
                        const r = this;
                        this._worker = e, this._callbacks = {}, this._id = 0, e.addEventListener("message", (function(e) {
                            i.onMessage(r, e)
                        }))
                    }
                    set id(e) {
                        this._id = e
                    }
                    get id() {
                        return this._id
                    }
                    newId() {
                        const e = this.id;
                        return this.id = this.id + 1, e
                    }
                    static onMessage(e, r) {
                        if (t = r.data, !(Array.isArray(t) && t.length >= 2)) return;
                        var t;
                        const [n, i, o] = r.data, a = e._callbacks[n];
                        a && (delete e._callbacks[n], a(i, o))
                    }
                    static isServiceWorker(e) {
                        return void 0 !== e.controller
                    }
                    postMessage(e) {
                        const r = this,
                            t = this.newId(),
                            n = [t, e];
                        return new Promise((function(e, o) {
                            var a;
                            if (r._callbacks[t] = function(r, t) {
                                    if (r) return o(new Error(r.message));
                                    e(t)
                                }, i.isServiceWorker(r._worker)) {
                                const e = new MessageChannel;
                                e.port1.onmessage = function(e) {
                                    i.onMessage(r, e)
                                }, null === (a = r._worker.controller) || void 0 === a || a.postMessage(n, [e.port2])
                            } else r._worker.postMessage(n)
                        }))
                    }
                }
            },
            1828: (e, r, t) => {
                t.d(r, {
                    ap: () => o,
                    gz: () => u
                });
                var n = t(3735),
                    i = t(9384);

                function o(e, r) {
                    return function(t) {
                        return function(n) {
                            return e.ap(e.map(n, (function(e) {
                                return function(t) {
                                    return r.ap(e, t)
                                }
                            })), t)
                        }
                    }
                }

                function a(e, r, t) {
                    return function(n) {
                        for (var i = Array(t.length + 1), o = 0; o < t.length; o++) i[o] = t[o];
                        return i[t.length] = n, 0 === r ? e.apply(null, i) : a(e, r - 1, i)
                    }
                }
                var s = {
                    1: function(e) {
                        return [e]
                    },
                    2: function(e) {
                        return function(r) {
                            return [e, r]
                        }
                    },
                    3: function(e) {
                        return function(r) {
                            return function(t) {
                                return [e, r, t]
                            }
                        }
                    },
                    4: function(e) {
                        return function(r) {
                            return function(t) {
                                return function(n) {
                                    return [e, r, t, n]
                                }
                            }
                        }
                    },
                    5: function(e) {
                        return function(r) {
                            return function(t) {
                                return function(n) {
                                    return function(i) {
                                        return [e, r, t, n, i]
                                    }
                                }
                            }
                        }
                    }
                };

                function c(e) {
                    return i.e$.call(s, e) || (s[e] = a(n.bc, e - 1, [])), s[e]
                }

                function u(e) {
                    return function() {
                        for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
                        for (var n = r.length, i = c(n), o = e.map(r[0], i), a = 1; a < n; a++) o = e.ap(o, r[a]);
                        return o
                    }
                }
            },
            9320: (e, r, t) => {
                t.d(r, {
                    oA: () => Q,
                    e5: () => U,
                    t9: () => T,
                    hX: () => F,
                    DZ: () => z,
                    Ew: () => O,
                    xH: () => K,
                    jV: () => j,
                    xb: () => P,
                    UI: () => B,
                    uK: () => X,
                    u4: () => Y,
                    vP: () => H,
                    DY: () => C,
                    G0: () => R,
                    jj: () => L
                });
                var n, i = t(3735),
                    o = t(9384);
                t(4268), t(7209), n = void 0;
                o.Xl, o.Od;
                var a = o.ri,
                    s = o.YM,
                    c = (o.F4, s);
                o.Gb;
                var u = function(e, r, t) {
                        if (t || 2 === arguments.length)
                            for (var n, i = 0, o = r.length; i < o; i++) !n && i in r || (n || (n = Array.prototype.slice.call(r, 0, i)), n[i] = r[i]);
                        return e.concat(n || Array.prototype.slice.call(r))
                    },
                    l = function(e) {
                        return e.length > 0
                    },
                    p = function(e) {
                        return function(r) {
                            return u(u([], r, !0), [e], !1)
                        }
                    },
                    d = p,
                    m = function(e) {
                        return function(r) {
                            if (1 === r.length) return h(r);
                            for (var t = [w(r)], n = function(r) {
                                    t.every((function(t) {
                                        return !e.equals(t, r)
                                    })) && t.push(r)
                                }, i = 0, o = q(r); i < o.length; i++) {
                                n(o[i])
                            }
                            return t
                        }
                    },
                    g = function(e) {
                        var r = m(e);
                        return function(e) {
                            return function(t) {
                                return r((0, i.zG)(t, f(e)))
                            }
                        }
                    },
                    _ = o.r1;

                function f(e, r) {
                    return r ? e.concat(r) : function(r) {
                        return r.concat(e)
                    }
                }
                var h = _,
                    v = function(e) {
                        return [e]
                    };
                o.F4;
                var w = c,
                    q = function(e) {
                        return e.slice(1)
                    };
                t(4011);
                var b = t(4870);
                t(5605);

                function y(e) {
                    return function(r, t) {
                        if (void 0 === t) {
                            var n = y(e);
                            return function(e) {
                                return n(r, e)
                            }
                        }
                        for (var i, o = 0; o < t.length; o++)
                            if (i = t[o], e.equals(i, r)) return !0;
                        return !1
                    }
                }
                var E = a,
                    k = function(e) {
                        return function(r) {
                            for (var t = [], n = 0; n < r.length; n++) {
                                var i = e(n, r[n]);
                                o.pC(i) && t.push(i.value)
                            }
                            return t
                        }
                    },
                    I = function(e) {
                        return k((function(r, t) {
                            return e(t)
                        }))
                    },
                    A = (i.yR, function(e, r) {
                        return D(e, (function(e, t, n) {
                            return r(t, n)
                        }))
                    }),
                    D = function(e, r) {
                        return function(t) {
                            for (var n = t.length, i = e, o = 0; o < n; o++) i = r(o, i, t[o]);
                            return i
                        }
                    };
                o.F4;
                var P = function(e) {
                        return 0 === e.length
                    },
                    S = l,
                    x = d;

                function O(e) {
                    return function(e) {
                        return function(r) {
                            for (var t = 0; t < r.length; t++)
                                if (e(r[t])) return o.G(r[t]);
                            return o.YP
                        }
                    }(e)
                }
                var M = function(e) {
                        return e.slice()
                    },
                    C = function(e) {
                        return function(r) {
                            return r.length <= 1 ? M(r) : r.slice().sort(e.compare)
                        }
                    };
                var T = y,
                    L = function(e) {
                        var r = m(e);
                        return function(e) {
                            return S(e) ? r(e) : M(e)
                        }
                    };

                function R(e) {
                    var r = g(e);
                    return function(t, n) {
                        if (void 0 === n) {
                            var i = R(e);
                            return function(e) {
                                return i(e, t)
                            }
                        }
                        return S(t) && S(n) ? r(n)(t) : S(t) ? M(t) : M(n)
                    }
                }

                function j(e) {
                    var r = T(e);
                    return function(t, n) {
                        if (void 0 === n) {
                            var i = j(e);
                            return function(e) {
                                return i(e, t)
                            }
                        }
                        return t.filter((function(e) {
                            return r(e, n)
                        }))
                    }
                }

                function U(e) {
                    var r = T(e);
                    return function(t, n) {
                        if (void 0 === n) {
                            var i = U(e);
                            return function(e) {
                                return i(e, t)
                            }
                        }
                        return t.filter((function(e) {
                            return !r(e, n)
                        }))
                    }
                }
                var N = function(e, r, t) {
                        return (0, i.zG)(e, Y(r, t))
                    },
                    G = v,
                    B = function(e) {
                        return function(r) {
                            return r.map((function(r) {
                                return e(r)
                            }))
                        }
                    },
                    W = function(e) {
                        return function(r) {
                            return (0, i.zG)(r, function(e) {
                                return function(r) {
                                    for (var t = [], n = 0; n < r.length; n++) t.push.apply(t, e(n, r[n]));
                                    return t
                                }
                            }((function(r, t) {
                                return e(t)
                            })))
                        }
                    },
                    K = W(i.yR),
                    $ = function(e) {
                        return function(r) {
                            for (var t = [], n = 0; n < r.length; n++) {
                                var i = e(n, r[n]);
                                o.pC(i) && t.push(i.value)
                            }
                            return t
                        }
                    },
                    z = function(e) {
                        return $((function(r, t) {
                            return e(t)
                        }))
                    },
                    Q = z(i.yR),
                    F = function(e) {
                        return function(r) {
                            return r.filter(e)
                        }
                    },
                    X = function(e) {
                        return V((function(r, t) {
                            return e(t)
                        }))
                    },
                    V = function(e) {
                        return function(r) {
                            for (var t = [], n = [], i = 0; i < r.length; i++) {
                                var o = r[i];
                                e(i, o) ? n.push(o) : t.push(o)
                            }
                            return (0, b.s4)(t, n)
                        }
                    },
                    Y = A,
                    H = function(e) {
                        return function(r) {
                            return N(r, e.of([]), (function(r, t) {
                                return e.ap(e.map(r, (function(e) {
                                    return function(r) {
                                        return (0, i.zG)(e, x(r))
                                    }
                                })), t)
                            }))
                        }
                    };
                o.F4
            },
            8198: (e, r, t) => {
                t.d(r, {
                    G5: () => f,
                    dO: () => m,
                    Pd: () => w,
                    tS: () => v,
                    g_: () => P,
                    ij: () => O,
                    Yo: () => E,
                    DT: () => y,
                    fS: () => S,
                    nM: () => k,
                    tO: () => I,
                    t$: () => s,
                    UI: () => d,
                    Vn: () => q,
                    EQ: () => D,
                    F2: () => c,
                    LF: () => x,
                    i$: () => C,
                    Y3: () => M
                });
                var n = t(9384);

                function i(e) {
                    return function(r) {
                        return function(t) {
                            return e.fromEither(n.Wi(t) ? n.t$(r()) : n.F2(t.value))
                        }
                    }
                }

                function o(e) {
                    return function(r, t) {
                        return function(i) {
                            return e.fromEither(r(i) ? n.F2(i) : n.t$(t(i)))
                        }
                    }
                }
                var a = t(3735),
                    s = n.t$,
                    c = n.F2,
                    u = function(e, r) {
                        return (0, a.zG)(e, d(r))
                    },
                    l = function(e, r) {
                        return (0, a.zG)(e, _(r))
                    },
                    p = "Either",
                    d = function(e) {
                        return function(r) {
                            return k(r) ? r : c(e(r.right))
                        }
                    },
                    m = {
                        URI: p,
                        map: u
                    },
                    g = c,
                    _ = function(e) {
                        return function(r) {
                            return k(r) ? r : k(e) ? e : c(r.right(e.right))
                        }
                    },
                    f = {
                        URI: p,
                        map: u,
                        ap: l
                    },
                    h = function(e) {
                        return function(r) {
                            return k(r) ? r : e(r.right)
                        }
                    },
                    v = h,
                    w = function(e, r) {
                        return function(t) {
                            return k(t) ? s(e(t.left)) : c(r(t.right))
                        }
                    },
                    q = function(e) {
                        return function(r) {
                            return k(r) ? s(e(r.left)) : r
                        }
                    },
                    b = {
                        URI: p,
                        fromEither: a.yR
                    },
                    y = o(b),
                    E = i(b),
                    k = n.nM,
                    I = n.tO,
                    A = function(e, r) {
                        return function(t) {
                            return k(t) ? e(t.left) : r(t.right)
                        }
                    },
                    D = A,
                    P = D,
                    S = function(e) {
                        return function(r) {
                            return k(r) ? e(r.left) : r.right
                        }
                    },
                    x = function(e) {
                        return k(e) ? c(e.left) : s(e.right)
                    },
                    O = function(e) {
                        return function(r) {
                            return null == r ? s(e) : c(r)
                        }
                    },
                    M = function(e, r) {
                        try {
                            return c(e())
                        } catch (e) {
                            return s(r(e))
                        }
                    },
                    C = A(a.yR, a.yR);
                n.F4, n.Xl
            },
            4268: (e, r, t) => {
                t.d(r, {
                    Uz: () => i,
                    f7: () => n,
                    w4: () => o
                });
                t(3735);
                var n = function(e) {
                        return {
                            equals: function(r, t) {
                                return r === t || e(r, t)
                            }
                        }
                    },
                    i = function(e) {
                        return function(r) {
                            return n((function(t, n) {
                                return r.equals(e(t), e(n))
                            }))
                        }
                    },
                    o = {
                        equals: function(e, r) {
                            return e === r
                        }
                    };
                o.equals
            },
            6567: (e, r, t) => {
                t.d(r, {
                    DT: () => s,
                    EQ: () => f,
                    G: () => a,
                    UI: () => u,
                    Uo: () => d,
                    Wi: () => g,
                    Y3: () => q,
                    YP: () => o,
                    fS: () => v,
                    g_: () => h,
                    ij: () => w,
                    pC: () => m,
                    tS: () => p
                });
                var n = t(3735),
                    i = t(9384),
                    o = (t(6017), t(4870), t(5605), i.YP),
                    a = i.G;

                function s(e) {
                    return function(r) {
                        return e(r) ? a(r) : o
                    }
                }
                var c = function(e) {
                        return "Left" === e._tag ? o : a(e.right)
                    },
                    u = function(e) {
                        return function(r) {
                            return g(r) ? o : a(e(r.value))
                        }
                    },
                    l = a,
                    p = function(e) {
                        return function(r) {
                            return g(r) ? o : e(r.value)
                        }
                    },
                    d = (n.yR, c),
                    m = i.pC,
                    g = function(e) {
                        return "None" === e._tag
                    },
                    _ = function(e, r) {
                        return function(t) {
                            return g(t) ? e() : r(t.value)
                        }
                    },
                    f = _,
                    h = f,
                    v = function(e) {
                        return function(r) {
                            return g(r) ? e() : r.value
                        }
                    },
                    w = function(e) {
                        return null == e ? o : a(e)
                    },
                    q = function(e) {
                        try {
                            return a(e())
                        } catch (e) {
                            return o
                        }
                    };
                i.F4, i.Xl
            },
            7209: (e, r, t) => {
                t.d(r, {
                    Fp: () => c,
                    VV: () => s,
                    Zt: () => a,
                    uZ: () => u
                });
                var n = t(4268),
                    i = t(3735),
                    o = function(e) {
                        return function(r, t) {
                            return r === t || 0 === e(r, t)
                        }
                    },
                    a = function(e) {
                        return {
                            equals: o(e),
                            compare: function(r, t) {
                                return r === t ? 0 : e(r, t)
                            }
                        }
                    },
                    s = (i.W8, function(e) {
                        return function(r, t) {
                            return r === t || e.compare(r, t) < 1 ? r : t
                        }
                    }),
                    c = function(e) {
                        return function(r, t) {
                            return r === t || e.compare(r, t) > -1 ? r : t
                        }
                    },
                    u = function(e) {
                        var r = s(e),
                            t = c(e);
                        return function(e, n) {
                            return function(i) {
                                return t(r(i, n), e)
                            }
                        }
                    };
                n.w4.equals
            },
            6017: (e, r, t) => {
                t.d(r, {
                    ff: () => n
                });
                t(3735);
                var n = function(e) {
                    return function(r) {
                        return !e(r)
                    }
                }
            },
            356: (e, r, t) => {
                t.d(r, {
                    hX: () => V,
                    jV: () => N,
                    xb: () => T,
                    XP: () => R,
                    dx: () => j
                });
                t(4268);
                var n = t(3735),
                    i = t(9384),
                    o = (t(4870), t(2751)),
                    a = (t(5605), function(e) {
                        for (var r in e)
                            if (i.e$.call(e, r)) return !1;
                        return !0
                    }),
                    s = function(e) {
                        return function(r) {
                            return Object.keys(r).sort(e.compare)
                        }
                    };
                o.Df;
                var c = function(e, r) {
                        return function(t) {
                            if (i.e$.call(t, e) && t[e] === r) return t;
                            var n = Object.assign({}, t);
                            return n[e] = r, n
                        }
                    },
                    u = function(e, r) {
                        return i.e$.call(r, e)
                    };
                var l = {};

                function p(e) {
                    return function(r) {
                        var t = {};
                        for (var n in r) i.e$.call(r, n) && (t[n] = e(n, r[n]));
                        return t
                    }
                }

                function d(e) {
                    return p((function(r, t) {
                        return e(t)
                    }))
                }

                function m() {
                    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                    if (2 === e.length) return m(o.Df).apply(void 0, e);
                    var t = s(e[0]);
                    return function(e, r) {
                        return function(n) {
                            for (var i = e, o = t(n), a = o.length, s = 0; s < a; s++) {
                                var c = o[s];
                                i = r(c, i, n[c])
                            }
                            return i
                        }
                    }
                }

                function g(e) {
                    if ("compare" in e) {
                        var r = s(e);
                        return function(e) {
                            return function(t) {
                                return function(n) {
                                    for (var i = e.empty, o = r(n), a = o.length, s = 0; s < a; s++) {
                                        var c = o[s];
                                        i = e.concat(i, t(c, n[c]))
                                    }
                                    return i
                                }
                            }
                        }
                    }
                    return g(o.Df)(e)
                }

                function _() {
                    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                    if (2 === e.length) return _(o.Df).apply(void 0, e);
                    var t = s(e[0]);
                    return function(e, r) {
                        return function(n) {
                            for (var i = e, o = t(n), a = o.length - 1; a >= 0; a--) {
                                var s = o[a];
                                i = r(s, n[s], i)
                            }
                            return i
                        }
                    }
                }

                function f(e) {
                    return D(o.Df)(e)
                }

                function h(e) {
                    return function(r) {
                        var t = {},
                            n = !1;
                        for (var o in r)
                            if (i.e$.call(r, o)) {
                                var a = r[o];
                                e(o, a) ? t[o] = a : n = !0
                            }
                        return n ? t : r
                    }
                }
                var v = function(e) {
                        return function(r) {
                            return function(t) {
                                if (a(t) || a(r)) return l;
                                var n = {};
                                for (var i in t) u(i, r) && (n[i] = e.concat(t[i], r[i]));
                                return n
                            }
                        }
                    },
                    w = function(e, r) {
                        return (0, n.zG)(e, d(r))
                    },
                    q = function(e) {
                        var r = x(e);
                        return function(e, t, i) {
                            return (0, n.zG)(e, r(t, i))
                        }
                    },
                    b = function(e) {
                        return function(r) {
                            var t = O(e)(r);
                            return function(e, r) {
                                return (0, n.zG)(e, t(r))
                            }
                        }
                    },
                    y = function(e) {
                        var r = M(e);
                        return function(e, t, i) {
                            return (0, n.zG)(e, r(t, i))
                        }
                    },
                    E = function(e) {
                        var r = m(e);
                        return function(e, t, i) {
                            return (0, n.zG)(e, r(t, i))
                        }
                    },
                    k = function(e) {
                        var r = g(e);
                        return function(e) {
                            var t = r(e);
                            return function(e, r) {
                                return (0, n.zG)(e, t(r))
                            }
                        }
                    },
                    I = function(e) {
                        var r = _(e);
                        return function(e, t, i) {
                            return (0, n.zG)(e, r(t, i))
                        }
                    },
                    A = function(e) {
                        var r = P(e);
                        return function(e) {
                            var t = r(e);
                            return function(e, r) {
                                return t(e, (0, n.ls)(n.SK, r))
                            }
                        }
                    },
                    D = function(e) {
                        var r = A(e);
                        return function(e) {
                            var t = r(e);
                            return function(e) {
                                return t(e, n.yR)
                            }
                        }
                    },
                    P = function(e) {
                        return function(r) {
                            var t = s(e);
                            return function(e, n) {
                                var i = t(e);
                                if (0 === i.length) return r.of(l);
                                for (var o = r.of({}), a = function(t) {
                                        o = r.ap(r.map(o, (function(e) {
                                            return function(r) {
                                                var n;
                                                return Object.assign({}, e, ((n = {})[t] = r, n))
                                            }
                                        })), n(t, e[t]))
                                    }, s = 0, c = i; s < c.length; s++) {
                                    a(c[s])
                                }
                                return o
                            }
                        }
                    },
                    S = function(e) {
                        return h((function(r, t) {
                            return e(t)
                        }))
                    };

                function x() {
                    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                    if (1 === e.length) {
                        var t = m(e[0]);
                        return function(e, r) {
                            return t(e, (function(e, t, n) {
                                return r(t, n)
                            }))
                        }
                    }
                    return x(o.Df).apply(void 0, e)
                }

                function O(e) {
                    if ("compare" in e) {
                        var r = g(e);
                        return function(e) {
                            var t = r(e);
                            return function(e) {
                                return t((function(r, t) {
                                    return e(t)
                                }))
                            }
                        }
                    }
                    return O(o.Df)(e)
                }

                function M() {
                    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                    if (1 === e.length) {
                        var t = _(e[0]);
                        return function(e, r) {
                            return t(e, (function(e, t, n) {
                                return r(t, n)
                            }))
                        }
                    }
                    return M(o.Df).apply(void 0, e)
                }
                var C = "ReadonlyRecord";
                o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df;
                o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df;
                var T = a,
                    L = function(e) {
                        return function(r) {
                            return Object.keys(r).sort(e.compare)
                        }
                    },
                    R = L(o.Df);
                var j = c;

                function U(e) {
                    return f(e)
                }
                var N = function(e) {
                        return function(r) {
                            return function(t) {
                                return T(t) || T(r) ? {} : v(e)(r)(t)
                            }
                        }
                    },
                    G = w,
                    B = q,
                    W = b,
                    K = y,
                    $ = E,
                    z = k,
                    Q = I,
                    F = A,
                    X = function(e) {
                        return function(r) {
                            var t = L(e);
                            return function(e, n) {
                                var i = t(e);
                                if (0 === i.length) return r.of({});
                                for (var o = r.of({}), a = function(t) {
                                        o = r.ap(r.map(o, (function(e) {
                                            return function(r) {
                                                return e[t] = r, e
                                            }
                                        })), n(t, e[t]))
                                    }, s = 0, c = i; s < c.length; s++) {
                                    a(c[s])
                                }
                                return o
                            }
                        }
                    },
                    V = S;
                var Y = "Record";
                o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df, o.Df
            },
            4870: (e, r, t) => {
                t.d(r, {
                    s4: () => n
                });
                t(3735);
                var n = function(e, r) {
                    return {
                        left: e,
                        right: r
                    }
                }
            },
            5857: (e, r, t) => {
                t.d(r, {
                    e5: () => d,
                    Eh: () => u,
                    G0: () => p
                });
                var n = t(4268),
                    i = t(6017);
                new Set;
                var o = function(e) {
                    return function(r) {
                        for (var t, n = r.values(), i = !1; !i && !(t = n.next()).done;) i = e(t.value);
                        return i
                    }
                };

                function a(e) {
                    return (0, i.ff)(o((0, i.ff)(e)))
                }

                function s(e) {
                    var r = c(e);
                    return function(t, n) {
                        if (void 0 === n) {
                            var i = s(e);
                            return function(e) {
                                return i(e, t)
                            }
                        }
                        return a((function(e) {
                            return r(e, n)
                        }))(t)
                    }
                }

                function c(e) {
                    return function(r, t) {
                        if (void 0 === t) {
                            var n = c(e);
                            return function(e) {
                                return n(r, e)
                            }
                        }
                        for (var i, o = t.values(), a = !1; !a && !(i = o.next()).done;) a = e.equals(r, i.value);
                        return a
                    }
                }
                var u = function(e) {
                    var r = s(e);
                    return (0, n.f7)((function(e, t) {
                        return r(e, t) && r(t, e)
                    }))
                };

                function l(e) {
                    return function(r) {
                        for (var t, n = r.values(), i = new Set; !(t = n.next()).done;) {
                            var o = t.value;
                            e(o) && i.add(o)
                        }
                        return i
                    }
                }

                function p(e) {
                    var r = g(e);
                    return function(t, n) {
                        if (void 0 === n) {
                            var i = p(e);
                            return function(e) {
                                return i(t, e)
                            }
                        }
                        if (m(t)) return n;
                        if (m(n)) return t;
                        var o = new Set(t);
                        return n.forEach((function(e) {
                            r(e, o) || o.add(e)
                        })), o
                    }
                }

                function d(e) {
                    var r = g(e);
                    return function(t, n) {
                        if (void 0 === n) {
                            var i = d(e);
                            return function(e) {
                                return i(e, t)
                            }
                        }
                        return l((function(e) {
                            return !r(e, n)
                        }))(t)
                    }
                }
                new Set;
                var m = function(e) {
                        return 0 === e.size
                    },
                    g = c
            },
            5151: (e, r, t) => {
                t.d(r, {
                    Hi: () => f,
                    PM: () => _,
                    RD: () => y,
                    UA: () => h,
                    UI: () => u,
                    dO: () => g,
                    oE: () => k,
                    of: () => p,
                    pE: () => E,
                    tD: () => o,
                    tS: () => d
                });
                var n = t(3735),
                    i = t(9384),
                    o = function(e) {
                        return function() {
                            return Promise.resolve().then(e)
                        }
                    };
                var a = function(e, r) {
                        return (0, n.zG)(e, u(r))
                    },
                    s = function(e, r) {
                        return (0, n.zG)(e, l(r))
                    },
                    c = function(e, r) {
                        return (0, n.zG)(e, d(r))
                    },
                    u = function(e) {
                        return function(r) {
                            return function() {
                                return Promise.resolve().then(r).then(e)
                            }
                        }
                    },
                    l = function(e) {
                        return function(r) {
                            return function() {
                                return Promise.all([Promise.resolve().then(r), Promise.resolve().then(e)]).then((function(e) {
                                    return (0, e[0])(e[1])
                                }))
                            }
                        }
                    },
                    p = function(e) {
                        return function() {
                            return Promise.resolve(e)
                        }
                    },
                    d = function(e) {
                        return function(r) {
                            return function() {
                                return Promise.resolve().then(r).then((function(r) {
                                    return e(r)()
                                }))
                            }
                        }
                    },
                    m = "Task";
                var g = {
                        URI: m,
                        map: a
                    },
                    _ = {
                        URI: m,
                        of: p
                    },
                    f = {
                        URI: m,
                        map: a,
                        ap: s
                    },
                    h = {
                        URI: m,
                        map: a,
                        of: p,
                        ap: s,
                        chain: c
                    },
                    v = n.yR,
                    w = (i.F4, p(i.Xl)),
                    q = function(e) {
                        var r = function(e) {
                            return function(r) {
                                return function() {
                                    return Promise.all(r.map((function(r, t) {
                                        return Promise.resolve().then((function() {
                                            return e(t, r)()
                                        }))
                                    })))
                                }
                            }
                        }(e);
                        return function(e) {
                            return i.Od(e) ? r(e) : w
                        }
                    },
                    b = function(e) {
                        var r = function(e) {
                            return function(r) {
                                return function() {
                                    return i.Gb(r).reduce((function(r, t, n) {
                                        return r.then((function(r) {
                                            return Promise.resolve().then(e(n + 1, t)).then((function(e) {
                                                return r.push(e), r
                                            }))
                                        }))
                                    }), Promise.resolve().then(e(0, i.YM(r))).then(i.ri))
                                }
                            }
                        }(e);
                        return function(e) {
                            return i.Od(e) ? r(e) : w
                        }
                    },
                    y = function(e) {
                        return q((function(r, t) {
                            return e(t)
                        }))
                    }(n.yR),
                    E = function(e) {
                        return b((function(r, t) {
                            return e(t)
                        }))
                    },
                    k = {
                        URI: m,
                        map: a,
                        of: p,
                        ap: s,
                        chain: c,
                        fromIO: o,
                        fromTask: v
                    }
            },
            7112: (e, r, t) => {
                function n(e) {
                    return function(r, t) {
                        return function(n) {
                            return e.chain(n, (function(n) {
                                return e.map(t(n), (function(e) {
                                    var t;
                                    return Object.assign({}, n, ((t = {})[r] = e, t))
                                }))
                            }))
                        }
                    }
                }
                t.d(r, {
                    Do: () => H,
                    ak: () => J,
                    tS: () => F,
                    g_: () => G,
                    Uo: () => U,
                    fF: () => j,
                    t$: () => C,
                    UI: () => z,
                    F2: () => T,
                    Y3: () => B
                });
                var i = t(1828),
                    o = t(8198),
                    a = t(3735);

                function s(e, r) {
                    return function(t) {
                        return function(n) {
                            return e.map(n, (function(e) {
                                return r.map(e, t)
                            }))
                        }
                    }
                }

                function c(e) {
                    return (0, a.ls)(o.F2, e.of)
                }

                function u(e) {
                    return (0, a.ls)(o.t$, e.of)
                }

                function l(e) {
                    return function(r) {
                        return e.map(r, o.F2)
                    }
                }

                function p(e) {
                    return function(r) {
                        return e.map(r, o.t$)
                    }
                }

                function d(e) {
                    return function(r) {
                        return (0, a.ls)(o.ij(r), e.of)
                    }
                }

                function m(e) {
                    var r = d(e);
                    return function(e) {
                        var t = r(e);
                        return function(e) {
                            return (0, a.ls)(e, t)
                        }
                    }
                }

                function g(e) {
                    var r = h(e),
                        t = m(e);
                    return function(e) {
                        var n = t(e);
                        return function(e) {
                            return r(n(e))
                        }
                    }
                }

                function _(e) {
                    return s(e, o.dO)
                }

                function f(e) {
                    return (0, i.ap)(e, o.G5)
                }

                function h(e) {
                    return function(r) {
                        return function(t) {
                            return e.chain(t, (function(t) {
                                return o.nM(t) ? e.of(t) : r(t.right)
                            }))
                        }
                    }
                }

                function v(e) {
                    return function(r) {
                        return function(t) {
                            return e.chain(t, (function(t) {
                                return o.nM(t) ? r() : e.of(t)
                            }))
                        }
                    }
                }

                function w(e) {
                    return function(r, t) {
                        return function(n) {
                            return e.map(n, o.Pd(r, t))
                        }
                    }
                }

                function q(e) {
                    return function(r) {
                        return function(t) {
                            return e.map(t, o.Vn(r))
                        }
                    }
                }

                function b(e) {
                    return function(r, t) {
                        return function(n) {
                            return e.map(n, o.EQ(r, t))
                        }
                    }
                }

                function y(e) {
                    return function(r, t) {
                        return function(n) {
                            return e.chain(n, o.EQ(r, t))
                        }
                    }
                }

                function E(e) {
                    return function(r) {
                        return function(t) {
                            return e.chain(t, o.EQ(r, e.of))
                        }
                    }
                }

                function k(e) {
                    return function(r) {
                        return function(t) {
                            return e.chain(t, (function(t) {
                                return o.nM(t) ? r(t.left) : e.of(t)
                            }))
                        }
                    }
                }

                function I(e) {
                    var r = k(e);
                    return function(t) {
                        return r((function(r) {
                            return e.map(t(r), (function(e) {
                                return o.nM(e) ? e : o.t$(r)
                            }))
                        }))
                    }
                }

                function A(e) {
                    return function(r) {
                        return function(t) {
                            return e.chain(t, o.EQ((function(t) {
                                return e.map(r(t), o.t$)
                            }), (function(r) {
                                return e.of(o.F2(r))
                            })))
                        }
                    }
                }

                function D(e) {
                    return function(r) {
                        return e.map(r, o.LF)
                    }
                }

                function P(e) {
                    return function(r) {
                        return e.map(r, o.i$)
                    }
                }
                var S = t(9384),
                    x = t(5151),
                    O = function(e, r, t, n) {
                        return new(t || (t = Promise))((function(i, o) {
                            function a(e) {
                                try {
                                    c(n.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(n.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function c(e) {
                                var r;
                                e.done ? i(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
                                    e(r)
                                }))).then(a, s)
                            }
                            c((n = n.apply(e, r || [])).next())
                        }))
                    },
                    M = function(e, r) {
                        var t, n, i, o, a = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return o = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                            return this
                        }), o;

                        function s(o) {
                            return function(s) {
                                return function(o) {
                                    if (t) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (t = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                        switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                            case 0:
                                            case 1:
                                                i = o;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: o[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, n = o[1], o = [0];
                                                continue;
                                            case 7:
                                                o = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                    a.label = o[1];
                                                    break
                                                }
                                                if (6 === o[0] && a.label < i[1]) {
                                                    a.label = i[1], i = o;
                                                    break
                                                }
                                                if (i && a.label < i[2]) {
                                                    a.label = i[2], a.ops.push(o);
                                                    break
                                                }
                                                i[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        o = r.call(e, a)
                                    } catch (e) {
                                        o = [6, e], n = 0
                                    } finally {
                                        t = i = 0
                                    }
                                    if (5 & o[0]) throw o[1];
                                    return {
                                        value: o[0] ? o[1] : void 0,
                                        done: !0
                                    }
                                }([o, s])
                            }
                        }
                    },
                    C = u(x.PM),
                    T = c(x.PM),
                    L = l(x.dO),
                    R = p(x.dO),
                    j = (x.tD, x.tD, L),
                    U = x.of,
                    N = (x.tD, x.dO, y(x.UA)),
                    G = N,
                    B = (x.UA, function(e, r) {
                        return function() {
                            return O(void 0, void 0, void 0, (function() {
                                var t;
                                return M(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, e().then(S.F2)];
                                        case 1:
                                            return [2, n.sent()];
                                        case 2:
                                            return t = n.sent(), [2, S.t$(r(t))];
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }))
                        }
                    }),
                    W = (x.dO, x.PM, x.PM, x.UA, x.UA, x.UA, x.UA, x.dO, function(e, r) {
                        return (0, a.zG)(e, z(r))
                    }),
                    K = function(e, r) {
                        return (0, a.zG)(e, Q(r))
                    },
                    $ = function(e, r) {
                        return (0, a.zG)(e, F(r))
                    },
                    z = _(x.dO),
                    Q = (x.dO, x.dO, f(x.Hi)),
                    F = h(x.UA),
                    X = (x.UA, T),
                    V = "TaskEither";
                var Y = {
                    URI: V,
                    map: W,
                    ap: K,
                    chain: $
                };
                var H = X(S.F4),
                    J = n(Y);
                S.Xl
            },
            5605: (e, r, t) => {
                function n(e, r) {
                    return function(t) {
                        var n = e.traverse(t);
                        return function(e, i) {
                            return t.map(n(e, i), r.separate)
                        }
                    }
                }

                function i(e, r) {
                    return function(t) {
                        var n = e.traverse(t);
                        return function(e, i) {
                            return t.map(n(e, i), r.compact)
                        }
                    }
                }
                t.d(r, {
                    BL: () => i,
                    Fj: () => n
                })
            },
            3735: (e, r, t) => {
                t.d(r, {
                    MZ: () => i,
                    Q1: () => c,
                    SK: () => d,
                    W8: () => a,
                    a9: () => o,
                    bc: () => l,
                    gn: () => s,
                    ls: () => u,
                    yR: () => n,
                    zG: () => p
                });

                function n(e) {
                    return e
                }
                var i = n;

                function o(e) {
                    return function() {
                        return e
                    }
                }
                var a = o(!0),
                    s = o(null),
                    c = o(void 0);

                function u(e, r, t, n, i, o, a, s, c) {
                    switch (arguments.length) {
                        case 1:
                            return e;
                        case 2:
                            return function() {
                                return r(e.apply(this, arguments))
                            };
                        case 3:
                            return function() {
                                return t(r(e.apply(this, arguments)))
                            };
                        case 4:
                            return function() {
                                return n(t(r(e.apply(this, arguments))))
                            };
                        case 5:
                            return function() {
                                return i(n(t(r(e.apply(this, arguments)))))
                            };
                        case 6:
                            return function() {
                                return o(i(n(t(r(e.apply(this, arguments))))))
                            };
                        case 7:
                            return function() {
                                return a(o(i(n(t(r(e.apply(this, arguments)))))))
                            };
                        case 8:
                            return function() {
                                return s(a(o(i(n(t(r(e.apply(this, arguments))))))))
                            };
                        case 9:
                            return function() {
                                return c(s(a(o(i(n(t(r(e.apply(this, arguments)))))))))
                            }
                    }
                }

                function l() {
                    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                    return e
                }

                function p(e, r, t, n, i, o, a, s, c) {
                    switch (arguments.length) {
                        case 1:
                            return e;
                        case 2:
                            return r(e);
                        case 3:
                            return t(r(e));
                        case 4:
                            return n(t(r(e)));
                        case 5:
                            return i(n(t(r(e))));
                        case 6:
                            return o(i(n(t(r(e)))));
                        case 7:
                            return a(o(i(n(t(r(e))))));
                        case 8:
                            return s(a(o(i(n(t(r(e)))))));
                        case 9:
                            return c(s(a(o(i(n(t(r(e))))))));
                        default:
                            for (var u = arguments[0], l = 1; l < arguments.length; l++) u = arguments[l](u);
                            return u
                    }
                }
                var d = function(e, r) {
                    return r
                }
            },
            9384: (e, r, t) => {
                t.d(r, {
                    F2: () => p,
                    F4: () => h,
                    G: () => s,
                    Gb: () => _,
                    Od: () => m,
                    Wi: () => i,
                    Xl: () => f,
                    YM: () => g,
                    YP: () => a,
                    e$: () => v,
                    nM: () => c,
                    pC: () => o,
                    r1: () => w,
                    ri: () => d,
                    t$: () => l,
                    tO: () => u
                });
                var n = function(e, r, t) {
                        if (t || 2 === arguments.length)
                            for (var n, i = 0, o = r.length; i < o; i++) !n && i in r || (n || (n = Array.prototype.slice.call(r, 0, i)), n[i] = r[i]);
                        return e.concat(n || Array.prototype.slice.call(r))
                    },
                    i = function(e) {
                        return "None" === e._tag
                    },
                    o = function(e) {
                        return "Some" === e._tag
                    },
                    a = {
                        _tag: "None"
                    },
                    s = function(e) {
                        return {
                            _tag: "Some",
                            value: e
                        }
                    },
                    c = function(e) {
                        return "Left" === e._tag
                    },
                    u = function(e) {
                        return "Right" === e._tag
                    },
                    l = function(e) {
                        return {
                            _tag: "Left",
                            left: e
                        }
                    },
                    p = function(e) {
                        return {
                            _tag: "Right",
                            right: e
                        }
                    },
                    d = function(e) {
                        return [e]
                    },
                    m = function(e) {
                        return e.length > 0
                    },
                    g = function(e) {
                        return e[0]
                    },
                    _ = function(e) {
                        return e.slice(1)
                    },
                    f = [],
                    h = {},
                    v = Object.prototype.hasOwnProperty,
                    w = function(e) {
                        return n([e[0]], e.slice(1), !0)
                    }
            },
            4011: (e, r, t) => {
                t.d(r, {
                    Df: () => i,
                    Eq: () => n
                });
                var n = {
                        equals: function(e, r) {
                            return e === r
                        }
                    },
                    i = {
                        equals: n.equals,
                        compare: function(e, r) {
                            return e < r ? -1 : e > r ? 1 : 0
                        }
                    };
                n.equals, i.compare
            },
            2751: (e, r, t) => {
                t.d(r, {
                    Df: () => i,
                    Eq: () => n,
                    pn: () => a,
                    xb: () => o
                });
                var n = {
                        equals: function(e, r) {
                            return e === r
                        }
                    },
                    i = {
                        equals: n.equals,
                        compare: function(e, r) {
                            return e < r ? -1 : e > r ? 1 : 0
                        }
                    },
                    o = function(e) {
                        return 0 === e.length
                    },
                    a = function(e, r) {
                        return function(t) {
                            return t.endsWith(e, r)
                        }
                    }
            },
            655: (e, r, t) => {
                t.d(r, {
                    _T: () => n,
                    mG: () => i
                });

                function n(e, r) {
                    var t = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) r.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (t[n[i]] = e[n[i]])
                    }
                    return t
                }

                function i(e, r, t, n) {
                    return new(t || (t = Promise))((function(i, o) {
                        function a(e) {
                            try {
                                c(n.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                c(n.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(e) {
                            var r;
                            e.done ? i(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
                                e(r)
                            }))).then(a, s)
                        }
                        c((n = n.apply(e, r || [])).next())
                    }))
                }
                Object.create;
                Object.create
            },
            477: e => {
                e.exports = function(e, r, t, n) {
                    var i = self || window;
                    try {
                        try {
                            var o;
                            try {
                                o = new i.Blob([e])
                            } catch (r) {
                                (o = new(i.BlobBuilder || i.WebKitBlobBuilder || i.MozBlobBuilder || i.MSBlobBuilder)).append(e), o = o.getBlob()
                            }
                            var a = i.URL || i.webkitURL,
                                s = a.createObjectURL(o),
                                c = new i[r](s, t);
                            return a.revokeObjectURL(s), c
                        } catch (n) {
                            return new i[r]("data:application/javascript,".concat(encodeURIComponent(e)), t)
                        }
                    } catch (e) {
                        if (!n) throw Error("Inline worker is not supported");
                        return new i[r](n, t)
                    }
                }
            },
            5607: (e, r, t) => {
                t.r(r), t.d(r, {
                    CleanRoomAddon: () => w,
                    load: () => f
                });
                var n = t(655),
                    i = t(2688),
                    o = t(9320),
                    a = t(8198),
                    s = t(3735),
                    c = t(4011),
                    u = t(6567),
                    l = t(356),
                    p = t(2751),
                    d = (t(64), t(6013));
                const m = () => {
                        const e = {
                            maxAttempts: 200,
                            waitTimeInMs: 50
                        };
                        let r;
                        return (0, d.a4)((() => r), (() => (r = (() => {
                            var e;
                            const r = null === (e = window._pbjsGlobals) || void 0 === e ? void 0 : e[0];
                            return window.pbjs || window.vmpbjs || (r ? window[r] : null)
                        })(), !!(null == r ? void 0 : r.que) && "function" == typeof(null == r ? void 0 : r.getEvents))), e)
                    },
                    g = e => "function" == typeof e.readConfig ? e.readConfig() : e.getConfig();
                var _ = t(8863);
                const f = (e, r, t) => {
                        e.push({
                            functionName: "addon",
                            arguments: ["clean_room", {}]
                        })
                    },
                    h = (e, r) => ({
                        direct_buy: (0, o.G0)(p.Eq)(e.direct_buy, r.direct_buy),
                        programmatic: (0, o.G0)(p.Eq)(e.programmatic, r.programmatic)
                    }),
                    v = (0, l.hX)((e => null != e));
                class w {
                    constructor(e) {
                        this.prefix = "[clean_room]", this.stagedAuctions = {}, this.trackableAuctions = {}, this.trackAuctionsInterval = null, this.options = e, this.permutive = e.permutive, this.api = e.api, this.logger = e.logger, this.namespace = e.namespace, this.queryManager = e.queryManager, this.messages = e.messages, this.network = e.network, this.userId = e.userId, this.sessionManager = e.sessionManager;
                        const r = this.sessionManager.sessionHasChanged();
                        this.makeRequest(r), this.startPrebidAuctions()
                    }
                    makeRequest(e) {
                        this.getQueries(e).then((r => {
                            if (e) {
                                const e = this.getOrEmpty(r.queries);
                                this.cacheLocally(e), this.emitUpdated(e)
                            } else {
                                const e = this.getOrEmpty(r.queries),
                                    t = this.getCache(),
                                    n = h(e, t);
                                this.cacheLocally(n), this.emitUpdated(n)
                            }
                        }))
                    }
                    getQueries(e) {
                        const r = this.queryManager.userSegments.getStdAsList(),
                            t = this.queryManager.userSegments.getAllAsList(),
                            n = (0, o.e5)(c.Eq)(t, r);
                        return this.api.cleanRoom(e, {
                            stds: r,
                            fps: n,
                            userId: this.userId.get()
                        })
                    }
                    getCache() {
                        return {
                            direct_buy: this.options.externalData.getExternalJsonData(_.P) || [],
                            programmatic: this.options.externalData.getExternalJsonData(_.l) || []
                        }
                    }
                    cacheLocally(e) {
                        this.options.externalData.setExternalJsonData(_.P, e.direct_buy), this.options.externalData.setExternalJsonData(_.l, e.programmatic)
                    }
                    emitUpdated(e) {
                        this.messages.emit("permutive:cleanroom:db:updated", (0, o.G0)(p.Eq)(e.programmatic, e.direct_buy))
                    }
                    getOrEmpty(e) {
                        var r, t;
                        return {
                            direct_buy: null !== (r = e.direct_buy) && void 0 !== r ? r : [],
                            programmatic: null !== (t = e.programmatic) && void 0 !== t ? t : []
                        }
                    }
                    startPrebidAuctions() {
                        return (0, n.mG)(this, void 0, void 0, (function*() {
                            const e = yield m();
                            if ((0, u.Wi)(e)) return void this.logInfo("Tracking Prebid Auctions did not start. Missing pbjs.");
                            const {
                                value: r
                            } = e;
                            this.logDebug("Got prebid", r), r.onEvent("auctionEnd", (e => this.mapToStagedAuctions(r, e))), r.onEvent("bidWon", (e => this.setBidToWon(r, e)));
                            const t = (e, t) => {
                                this.logDebug("Processing render event", {
                                    isRendered: e,
                                    props: t
                                }), t.bid && (e && this.setBidToRendered(r, t.bid), this.promoteAuctionToTrackable(t.bid), this.trackEligibleAuctions())
                            };
                            r.onEvent("adRenderSucceeded", (e => {
                                t(!0, e)
                            })), r.onEvent("adRenderFailed", (e => {
                                t(!1, e)
                            })), r.getEvents().forEach((e => "auctionEnd" === e.eventType ? this.mapToStagedAuctions(r, e.args) : "adRenderSucceeded" === e.eventType ? t(!0, e.args) : "adRenderFailed" === e.eventType ? t(!1, e.args) : void 0)), (0, d.aq)((() => {
                                this.trackAuctionsInterval = null;
                                const e = Object.assign(Object.assign({}, this.stagedAuctions), this.trackableAuctions);
                                this.stagedAuctions = {}, this.trackableAuctions = {}, this.trackPrebidAuctions(e, {
                                    useBeacon: !0
                                })
                            }), navigator.userAgent)
                        }))
                    }
                    mapBidsReceived(e, {
                        bidsReceived: r
                    }) {
                        const t = e => {
                                var r, t, n;
                                const i = (null === (r = e.rubicon) || void 0 === r ? void 0 : r.advertiserId) || (null === (t = e.meta) || void 0 === t ? void 0 : t.buyerId) || (null === (n = e.meta) || void 0 === n ? void 0 : n.advertiserId);
                                return i ? `${i}` : null
                            },
                            n = e => {
                                var r, t, n;
                                const i = (null === (r = e.meta) || void 0 === r ? void 0 : r.clickUrl) || (null === (t = e.adomain) || void 0 === t ? void 0 : t[0]) || (null === (n = e.meta) || void 0 === n ? void 0 : n.advertiserName);
                                return i ? `${i}` : null
                            },
                            i = e => {
                                var r;
                                const t = null === (r = e.meta) || void 0 === r ? void 0 : r.advertiserDomains;
                                if ("string" == typeof t) return [t];
                                if (Array.isArray(t)) {
                                    const e = t.filter((e => "string" == typeof e));
                                    return e.length > 0 ? e : null
                                }
                                return null
                            },
                            o = e => {
                                var r;
                                const t = null === (r = e.meta) || void 0 === r ? void 0 : r.brandId;
                                return t ? `${t}` : null
                            },
                            a = e => {
                                var r;
                                return null === (r = e.meta) || void 0 === r ? void 0 : r.brandName
                            },
                            s = e => {
                                var r, t, n;
                                const i = (null === (r = e.appnexus) || void 0 === r ? void 0 : r.buyerMemberId) || (null === (t = e.rubicon) || void 0 === t ? void 0 : t.networkId) || (null === (n = e.meta) || void 0 === n ? void 0 : n.networkId);
                                return i ? `${i}` : null
                            },
                            c = e => "rendered" === e.status || "targetingSet" === e.status;
                        return r.map((r => {
                            var u;
                            const l = {
                                    advertiser_id: t(r),
                                    advertiser_name: n(r),
                                    advertiser_domains: i(r),
                                    brand_id: o(r),
                                    brand_name: a(r),
                                    deal_id: r.dealId,
                                    dsp_id: s(r),
                                    hb_pb: null === (u = r.adserverTargeting) || void 0 === u ? void 0 : u.hb_pb,
                                    request_timestamp: r.requestTimestamp,
                                    response_timestamp: r.responseTimestamp
                                },
                                p = {
                                    ad_id: r.adId,
                                    ad_unit_code: r.adUnitCode,
                                    bid_available: r.statusMessage && r.statusMessage.indexOf("empty") < 0,
                                    bidder: r.bidder,
                                    bidder_timeout: e.bidderTimeout,
                                    cpm: r.cpm,
                                    creative_id: `${r.creativeId}`,
                                    height: r.height,
                                    time_to_respond: r.timeToRespond,
                                    width: r.width,
                                    winning_bid: c(r)
                                };
                            return Object.assign(Object.assign({}, v(l)), p)
                        }))
                    }
                    mapToStagedAuctions(e, r) {
                        return a.Y3((() => {
                            const {
                                auctionId: t
                            } = r, n = g(e);
                            return this.stagedAuctions[t] = {
                                bids: this.mapBidsReceived(n, r)
                            }, this.logDebug("Added auction", this.stagedAuctions[t]), this.stagedAuctions[t]
                        }), (e => {
                            const r = (0, i.w)(`${this.prefix} Failed to map auction. Got ${(0,i.w)(e)}`);
                            return this.network.error(r), r
                        }))
                    }
                    setBidByOperation(e, r, t) {
                        const n = r => {
                            const t = this.getStagedAuction(r.auctionId);
                            if ((0, a.tO)(t)) return t;
                            const n = this.getTrackableAuction(r.auctionId);
                            return (0, a.tO)(n) ? n : this.mapToStagedAuctions(e, {
                                auctionId: r.auctionId,
                                bidderRequests: [],
                                bidsReceived: [r],
                                noBids: []
                            })
                        };
                        return (0, s.ls)((e => (0, s.zG)(n(e), a.UI((n => (0, s.zG)(n.bids, (0, o.Ew)((r => e.adUnitCode === r.ad_unit_code && e.adId === r.ad_id)), a.Yo((() => new Error("Bid does not exist"))), a.UI(t), a.UI((e => (this.logDebug(`Bid operation ${r} successful`, e), e)))))))), a.Vn((e => {
                            const t = (0, i.w)(`${this.prefix} Failed bid operation ${r}. Got ${e}`);
                            return this.network.error(t), t
                        })))
                    }
                    setBidToWon(e, r) {
                        return this.setBidByOperation(e, "setWon", (e => (e.winning_bid = !0, e)))(r)
                    }
                    setBidToRendered(e, r) {
                        return this.setBidByOperation(e, "setRendered", (e => (e.is_rendered = !0, e.rendered_timestamp = (new Date).getTime(), e)))(r)
                    }
                    promoteAuctionToTrackable({
                        auctionId: e
                    }) {
                        const r = this.stagedAuctions[e];
                        if (r) {
                            if (this.trackableAuctions[e]) return this.logError("Auction is already promoted to trackable", {
                                auction: this.trackableAuctions[e]
                            });
                            this.trackableAuctions[e] = r, delete this.stagedAuctions[e], this.logDebug("Auction promoted to trackable", {
                                auctionId: e,
                                trackableAuctions: this.trackableAuctions
                            })
                        }
                    }
                    trackEligibleAuctions() {
                        if (this.trackAuctionsInterval) return;
                        this.trackAuctionsInterval = (0, d.PQ)((() => {
                            if (!this.trackAuctionsInterval) return;
                            this.trackAuctionsInterval = null;
                            const e = this.trackableAuctions;
                            this.trackableAuctions = {}, this.trackPrebidAuctions(e)
                        }), {
                            timeout: 5e3
                        })
                    }
                    trackPrebidAuctions(e, r) {
                        const t = (0, d.qh)(e).map((([e, r]) => Object.assign(Object.assign({}, r), {
                            auction_id: e
                        })));
                        t.length && (this.permutive.track("PrebidAuctions", {
                            isp_info: "$ip_isp_info",
                            geo_info: "$ip_geo_info",
                            aggregations: {
                                auctions: t
                            }
                        }, r), this.logDebug("Tracked auctions", {
                            auctions: t
                        }))
                    }
                    getStagedAuction(e) {
                        return (0, s.zG)(this.stagedAuctions[e], a.DT(Boolean, (() => new Error("Staged auction not found"))), a.Vn((r => (this.logError(r, {
                            auctionId: e
                        }), r))))
                    }
                    getTrackableAuction(e) {
                        return (0, s.zG)(this.trackableAuctions[e], a.DT(Boolean, (() => new Error("Trackable auction not found"))), a.Vn((r => (this.logError(r, {
                            auctionId: e
                        }), r))))
                    }
                    logInfo(...e) {
                        this.logger.log(this.prefix, ...e)
                    }
                    logDebug(...e) {
                        this.logger.debug(this.prefix, ...e)
                    }
                    logError(...e) {
                        this.logger.error(this.prefix, ...e)
                    }
                }
            },
            8863: (e, r, t) => {
                t.d(r, {
                    P: () => n,
                    l: () => i
                });
                const n = "_pcrdbs",
                    i = "_pcrprs"
            },
            9417: (e, r, t) => {
                t(1057), t(3351)
            },
            8206: (e, r, t) => {
                t.d(r, {
                    lg: () => g,
                    Bt: () => _
                });
                var n = t(9320),
                    i = t(3735),
                    o = t(6567),
                    a = t(6017),
                    s = t(356),
                    c = t(2751),
                    u = t(6013);
                class l {
                    constructor(e, r, t, n) {
                        this.userId = e, this.network = r, this.api = t, this.logger = n, this.tag = "appnexus", this.ttlInSeconds = 86400, this.usedForThirdPartyData = !0, this.url = "https://ib.adnxs.com/getuidj", this.invalidAliases = ["", "0", "-1"]
                    }
                    getId() {
                        return this.logger.debug("identities[appnexus]: start HTTP request"), (0, u.G6)(navigator.userAgent) ? Promise.resolve({
                            type: "skipped"
                        }) : this.api.appnexus(this.url).then((e => (this.logger.debug("identities[appnexus]: end HTTP request"), {
                            type: "attempted",
                            result: (0, i.zG)((0, o.DT)((e => this.isValidAlias(e.uid)))(e), (0, o.UI)((e => e.uid)))
                        })), (e => ({
                            type: "attempted",
                            result: o.YP
                        })))
                    }
                    reset() {
                        return Promise.resolve()
                    }
                    isValidAlias(e) {
                        return !!e && -1 === this.invalidAliases.indexOf(e)
                    }
                }
                class p {
                    constructor(e, r, t, n, i) {
                        this.config = e, this.network = r, this.api = t, this.userId = n, this.logger = i, this.tag = "pxid", this.ttlInSeconds = 86400, this.usedForThirdPartyData = !1, this.url = `https://0cf17917-395b-4f25-91cc-db3bdd6044b0.${this.config.pxidHost}/${this.config.apiVersion}/pxid`, this.resetUrl = this.url + "/reset"
                    }
                    getId() {
                        return this.logger.debug("identities[pxid]: start HTTP request"), (0, u.G6)(navigator.userAgent) ? Promise.resolve({
                            type: "skipped"
                        }) : this.api.pxid(this.url).then((e => (this.logger.debug("identities[pxid]: end HTTP request"), {
                            type: "attempted",
                            result: (0, o.ij)(e.uid)
                        })), (e => ({
                            type: "attempted",
                            result: o.YP
                        })))
                    }
                    reset() {
                        return (0, u.G6)(navigator.userAgent) ? Promise.resolve() : this.api.pxidReset(this.resetUrl)
                    }
                }
                const d = new Set(["public", "email", "email_md5", "email_sha256"]),
                    m = (e, r) => !!e.id && !(0, n.t9)(c.Eq)(e.tag, r);
                class g {
                    constructor(e, r, t, n, i) {
                        this.metrics = e, this.trace = r, this.permutiveData = t, this.identityProviderEnv = n, this.logger = i, this.identities = {}, this.providers = {}, this.identitiesLastModified = new Date, this.identities = this.getCachedIdentitiesAndMigrateIfRequired()
                    }
                    get getIdentitiesLastModified() {
                        return this.identitiesLastModified
                    }
                    prepareThirdPartyIdentities() {
                        this.logger.debug("Identities: starting to load identities");
                        const e = this.metrics.startTimer("sdk_get_third_party_identities_task_duration_seconds", {}),
                            r = this.trace.startSpan("load_tpd_ids"),
                            t = [{
                                load: e => {
                                    return r = e.config, t = e.network, n = e.api, i = e.userId, a = e.logger, (0, o.G)(new p(r, t, n, i, a));
                                    var r, t, n, i, a
                                }
                            }, {
                                load: e => {
                                    return r = e.userId, t = e.network, n = e.api, i = e.logger, (0, o.G)(new l(r, t, n, i));
                                    var r, t, n, i
                                }
                            }, {
                                load: e => (e.cookies, o.YP)
                            }, {
                                load: e => (e.cookies, o.YP)
                            }, {
                                load: e => (e.metrics, e.permutiveData, e.permutive, e.messages, o.YP)
                            }],
                            a = (0, n.oA)(t.map((e => e.load(this.identityProviderEnv)))).map((e => this.shouldAskForNewIdentity(e) ? this.retrieveIdentity(e) : Promise.resolve((0, i.bc)(e, this.getCachedTPDIdentity(e.tag)))));
                        return Promise.all(a).then((e => e.map((([e, r]) => (this.providers[e.tag] = e, this.setTPDIdentityIfPresent(e.tag, r, e.ttlInSeconds)))))).then((() => {
                            this.metrics.stopTimer("sdk_get_third_party_identities_task_duration_seconds", e), r.finish()
                        }))
                    }
                    getPrioritizedIdentities(e) {
                        const r = {
                                default: 0,
                                appnexus: 1,
                                pxid: 1
                            },
                            t = Object.entries(e).map((([e, {
                                id: r,
                                expiry: t,
                                priority: n
                            }]) => Object.assign(Object.assign(Object.assign({
                                tag: e
                            }, r ? {
                                id: r
                            } : {}), t ? {
                                expiry: t
                            } : {}), void 0 !== n ? {
                                priority: n
                            } : {}))),
                            i = t.filter((e => m(e, Object.values(this.providers).map((e => e.tag))))),
                            a = t.filter((e => ((e, r) => !!e.id && !!(0, n.t9)(c.Eq)(e.tag, r))(e, Object.values(this.providers).map((e => e.tag))))),
                            s = (0, n.DZ)((e => (0, o.ij)(e.priority)))(i),
                            u = s.length > 0 ? Math.max(...s) : 0,
                            l = i.map((e => void 0 !== e.priority ? Object.assign(Object.assign({}, e), {
                                priority: e.priority
                            }) : Object.assign(Object.assign({}, e), {
                                priority: u + 1
                            }))),
                            p = a.map((e => void 0 === r[e.tag] ? {
                                tag: e.tag,
                                id: e.id,
                                priority: u + f
                            } : {
                                tag: e.tag,
                                id: e.id,
                                priority: u + h
                            }));
                        return l.concat(p)
                    }
                    getIdentitiesMap() {
                        return this.getFilteredIdentities(((e, r) => !!r.value))
                    }
                    getCustomerDefinedIdentitiesMap() {
                        return this.getFilteredIdentities(((e, r) => m({
                            tag: e,
                            id: r.value,
                            expiry: r.expiry,
                            priority: r.priority
                        }, Object.values(this.providers).map((e => e.tag)))))
                    }
                    getTPDIdentitiesMap() {
                        return this.getFilteredIdentities(((e, r) => {
                            var t, n;
                            return !!r.value && !!(null === (n = null === (t = this.providers) || void 0 === t ? void 0 : t[e]) || void 0 === n ? void 0 : n.usedForThirdPartyData)
                        }))
                    }
                    parseCustomerDefinedIdentities(e) {
                        const r = `Identify must be passed a non-empty string or list of { tag, id, priority? } tuples, value passed was '${JSON.stringify(e)}'`,
                            t = e => {
                                throw new Error(e)
                            },
                            n = e => (e.forEach((e => {
                                (e => "string" == typeof e.id && "string" == typeof e.tag)(e) || t(r), (e => "email_sha256" !== e.tag || g.emailSHA256Regex.test(e.id))(e) || t("Identify called with unsupported format of email_sha256 ID. The support format is hex-encoded 64 character long lowercase string.")
                            })), e);
                        return "string" == typeof e ? (i = e).length > 0 ? [{
                            id: i,
                            tag: "default"
                        }] : t(r) : Array.isArray(e) ? n(e) : t(r);
                        var i
                    }
                    extractIdentifyFromQueue({
                        global: e
                    }, r = []) {
                        const t = () => e.q.findIndex((e => "identify" === e.functionName)),
                            n = (r, i) => {
                                if (r < 0) return i;
                                const o = e.q.splice(r, 1)[0],
                                    a = this.parseCustomerDefinedIdentities(o.arguments[0]);
                                return n(t(), i.concat(a))
                            };
                        return n(t(), r)
                    }
                    checkIdentitiesHaveBeenModified(e) {
                        const r = {
                            concat: (e, r) => c.Eq.equals(e.value, r.value) ? {} : (0, i.bc)(e, r)
                        };
                        return (0, i.zG)((0, s.jV)(r)(this.identities)(e), u.hk, (e => {
                            const r = (0, a.ff)(s.xb)(e);
                            return this.logger.debug("[identities] is modified", r, e), r
                        }))
                    }
                    setIdentities(e) {
                        let r = !1;
                        const t = e.filter((e => !d.has(e.tag))).reduce(((e, {
                            tag: t,
                            id: n,
                            expiry: i,
                            priority: o
                        }) => (void 0 === this.identities[t] && (r = !0, this.logger.debug(`identities[${t}]: added`)), e[t] = Object.assign(Object.assign(Object.assign({}, n ? {
                            value: n
                        } : {}), i ? {
                            expiry: i
                        } : {}), void 0 !== o ? {
                            priority: o
                        } : {}), e)), {});
                        (r || this.checkIdentitiesHaveBeenModified(t)) && (this.identitiesLastModified = new Date), this.identities = Object.assign(Object.assign({}, this.identities), t), this.logger.debug("[identities] Updating to", this.identities), this.permutiveData.setData("identities", this.identities)
                    }
                    reset() {
                        return (0, i.zG)(this.identities = {}, (e => Promise.all(Object.values(this.providers).map((e => e.reset()))).then(i.Q1)))
                    }
                    getFilteredIdentities(e) {
                        return (0, u.m8)(...Object.entries(this.identities).filter((([r, t]) => e(r, t))).map((([e, {
                            value: r,
                            expiry: t,
                            priority: n
                        }]) => (0, i.bc)(e, Object.assign(Object.assign({
                            id: r
                        }, t ? {
                            expiry: t
                        } : {}), void 0 !== n ? {
                            priority: n
                        } : {})))))
                    }
                    shouldAskForNewIdentity(e) {
                        var r;
                        const t = (0, o.ij)(null === (r = this.identities) || void 0 === r ? void 0 : r[e.tag]);
                        return (0, o.g_)((() => !0), this.isIdentityExpired)(t)
                    }
                    getCachedTPDIdentity(e) {
                        return this.identities[e] ? (0, o.ij)(this.identities[e].value) : o.YP
                    }
                    setTPDIdentityIfPresent(e, r, t = 86400) {
                        const n = () => Date.now() + Math.floor(1e3 * t);
                        return (0, o.g_)((() => this.setIdentities([{
                            tag: e,
                            expiry: n()
                        }])), (r => this.setIdentities([{
                            tag: e,
                            id: r,
                            expiry: n()
                        }])))(r)
                    }
                    retrieveIdentity(e) {
                        return e.getId().then((r => "skipped" === r.type ? (0, i.bc)(e, o.YP) : (0, i.zG)(r.result, (r => this.metrics.track({
                            name: (0, o.pC)(r) ? "sdk_third_party_identity_present_count" : "sdk_third_party_identity_missing_count",
                            value: 1,
                            labels: {
                                identity_tag: e.tag
                            }
                        })), (t => (0, i.bc)(e, r.result)))))
                    }
                    isIdentityExpired(e) {
                        return e.expiry && Date.now() >= e.expiry
                    }
                    getCachedIdentitiesAndMigrateIfRequired() {
                        return (e => (0, u.m8)(...Object.entries(e).filter((([e, r]) => !this.isIdentityExpired(r) && !d.has(e)))))(this.permutiveData.getData("identities") || {})
                    }
                }
                g.emailSHA256Regex = /^[a-f0-9]{64}$/;
                const _ = (e, r, t, i, o) => {
                        const a = (e, r) => {
                                const t = ["(null)"];
                                return t.indexOf(e) > -1 || !!w[e] || (0, n.jV)(c.Eq)(r, t).length > 0
                            },
                            s = e => "721d6d85-35f0-4e35-bb38-13eb0d465158" === e,
                            u = {
                                "be668577-07f5-444d-98e0-222b990951b1": a,
                                "e43c8a90-d17b-4790-bfda-81b069b3b8c2": (e, r, t) => ["thestudentroom.co.uk"].some((e => t.indexOf(e) > -1)) && (0, n.jV)(c.Eq)(r, ["tsr-"]).length > 0,
                                "5d79bce7-5d2b-427e-a6c4-b89b6c7bf048": a,
                                "366ab8da-5efa-4355-ab00-84db3b68ded2": e => "96539955-4d7e-40df-882b-7e2fbacedb1c" === e || "345600e7-fb5f-48b1-9aa6-cde5396419b0" === e,
                                "f3a06674-ebb9-4b9d-ba8f-0052018c0687": s,
                                "38dadd0d-257a-4641-b332-b8b0fd20a6cb": s,
                                "10453011-272d-49cd-9043-1964fdb36fd8": e => "936ba6ac-9a8b-454d-ba98-facebd7553fe" === e
                            },
                            l = {
                                "fe68d1f7-c9f4-45b3-8905-7cda73d3fd74": e => !!v[e]
                            },
                            p = u[e] || l[r];
                        return !!p && p(o, t, i)
                    },
                    f = 2,
                    h = 3,
                    v = {},
                    w = {}
            },
            6815: (e, r, t) => {
                t.d(r, {
                    z: () => n
                });
                class n {
                    ingestIfEligible(e) {
                        return Promise.resolve()
                    }
                }
            },
            64: (e, r, t) => {
                t.d(r, {
                    CL: () => p,
                    D0: () => i,
                    ED: () => o,
                    EW: () => d,
                    MU: () => f,
                    PH: () => l,
                    UW: () => _,
                    Uy: () => c,
                    eV: () => a,
                    jH: () => m,
                    mL: () => g,
                    qr: () => s,
                    t2: () => u
                });
                var n = t(5506);
                const i = (0, n.MU)("engagement_edge_only", !0),
                    o = (0, n.MU)("segment_transition_edge_only", !0),
                    a = (0, n.MU)("track_form_submission", !0),
                    s = (0, n.MU)("track_link_click", !0),
                    c = (0, n.MU)("track_pageview_complete", !0),
                    u = (0, n.MU)("track_pageview_engagement", !0),
                    l = ((0, n.$S)("sync_segments_cookie", !1), (0, n.$S)("track_slot_clicked", !0)),
                    p = (0, n.$S)("track_slot_rendered", !0),
                    d = (0, n.$S)("track_slot_viewable", !1),
                    m = (0, n.$S)("track_targeting_keys", !1),
                    g = ((0, n.p1)("revenue_insights_enabled", !1), (0, n.p1)("data_provider_config", {
                        ac_bidders: []
                    }), "_psegs"),
                    _ = !0,
                    f = 6e5
            },
            274: (e, r, t) => {
                t.d(r, {
                    U: () => n
                });
                const n = {
                    $ip_address: "$ip_address",
                    $ip_address_hash: "$ip_address_hash",
                    $ip_geo_info_city: "$ip_geo_info_city",
                    $ip_geo_info_continent: "$ip_geo_info_continent",
                    $ip_geo_info_country: "$ip_geo_info_country",
                    $ip_geo_info_postal_code: "$ip_geo_info_postal_code",
                    $ip_geo_info_province: "$ip_geo_info_province",
                    $ip_isp_info_autonomous_system_organization: "$ip_isp_info_autonomous_system_organization",
                    $ip_isp_info_isp: "$ip_isp_info_isp",
                    $ip_isp_info_organization: "$ip_isp_info_organization"
                }
            },
            8764: (e, r, t) => {
                t.d(r, {
                    v: () => o
                });
                class n {
                    constructor(e, r, t, n, i, o, a) {
                        this.logger = e, this.permutive = r, this.id = t, this.segmentCode = n, this.triggerType = i, this.config = o, this.workspaceLevelConfig = a
                    }
                    getSegmentCode() {
                        return this.segmentCode
                    }
                    getTriggerType() {
                        return this.triggerType
                    }
                    getConfig() {
                        return this.config
                    }
                    getWorkspaceLevelConfig() {
                        return this.workspaceLevelConfig
                    }
                    trackImpression(e) {
                        return this.trackActivation("impression", e)
                    }
                    trackConversion(e) {
                        return this.trackActivation("conversion", e)
                    }
                    trackActivation(e, r) {
                        const t = {
                            reaction_id: this.id,
                            type: e
                        };
                        this.permutive.track("Reaction", t, r), this.logger.log(t.type, t)
                    }
                }
                var i = t(5506);
                class o {
                    constructor(e, r, t) {
                        this.logger = e, this.permutive = r, this.clientContext = t, this.optimisedActivationsConfig = {
                            dfp: {
                                dfp: [91179, 72374, 84677, 88973, 88974, 88975, 89152, 92377, 92380, 92383, 92385, 92388, 92384, 92386, 92387, 92389, 89855, 89856, 89857, 89858, 89859, 89860, 89861, 89862, 89863, 89864, 89865, 89866, 98423, 90029, 90030, 100800, 90419, 90420, 90421, 90424, 90422, 90423, 90427, 90584, 90583, 103324, 103313, 103327, 87524, 90678, 90679, 90680, 90681, 90682, 90683, 98842, 98843, 93351, 102174, 98954, 90740, 90749, 90741, 90742, 90745, 90752, 90753, 90754, 90755, 90756, 90757, 90758, 90759, 90760, 83650, 83654, 83657, 83658, 83659, 83722, 84413, 84732, 84733, 84734, 84735, 84736, 84737, 84738, 84739, 84741, 84742, 84743, 84744, 84745, 84746, 84747, 84748, 84749, 84750, 84751, 84752, 84753, 84754, 85007, 85008, 85009, 85010, 85011, 85012, 85014, 85015, 85016, 84740, 95572, 95573, 95574, 95575, 85302, 85403, 85593, 85653, 87312, 87313, 87314, 87421, 87422, 87317, 87488, 87490, 87491, 87492, 87487, 87493, 87495, 87497, 87500, 87501, 87502, 87503, 87504, 87505, 87506, 87507, 87508, 87509, 87510, 87511, 87513, 87514, 87515, 87517, 87518, 87519, 87520, 87521, 87494, 87522, 85017, 87523, 87588, 87591, 87592, 87594, 87595, 87601, 87602, 87603, 87604, 87605, 87608, 87606, 87610, 87611, 87612, 87613, 87614, 87615, 87616, 87617, 87618, 87619, 87806, 99352, 99355, 99357, 99356, 99358, 99359, 99360, 88152, 88153, 114090, 89867, 114959, 114960, 114961, 115031, 115032, 115033, 115305, 115304, 115303, 114092, 114091, 118635, 118636, 118637, 118638, 118639, 118640, 118641, 118642, 118643, 118644, 118645, 118646, 118647, 118648, 118649, 118650, 118651, 118653, 118654, 118655, 118662, 118663, 118656, 118657, 118658, 118659, 118660, 118661, 118664, 118665, 118666, 118667, 118668, 118669, 118670, 118671, 118672, 118673, 118674, 118675, 118676, 118677, 118678, 118679, 118680, 118681, 118682, 118683, 118684, 118685, 118686, 118687, 118688, 118689, 118690, 118691, 118692, 118693, 118694, 118695, 118696, 118697, 118698, 118699, 118700, 118701, 118702, 118703, 118704, 121451, 121975, 121974, 121973, 121971, 121970, 121969, 121968, 121967, 121966, 121965, 121964, 121962, 121960, 121959, 121958, 121957, 121956, 121944, 121943, 121941, 121938, 121936, 121934, 121930, 121929, 121928, 121963, 121961, 121972, 121942, 121940, 121939, 121937, 121935, 121933, 121932, 121931, 121927, 121926],
                                dfp_legacy: {}
                            },
                            eyeota_pixel: [],
                            dbm: {
                                omitted: 0
                            },
                            appnexus: {},
                            appnexus_adserver: [83650],
                            nativo: [],
                            rubicon_ssp: [83650, 83654],
                            smart: []
                        }
                    }
                    getSpecializedActivations(e) {
                        return this.optimisedActivationsConfig[e]
                    }
                    getActivations(e) {
                        return (0, i.Hn)(e)("activationConfigs", []).filter((e => this.areContextCriteriaSatisfied(e))).map((e => new n(this.logger, this.permutive, e.id, e.sc, e.tt, e.c, e.wc)))
                    }
                    areContextCriteriaSatisfied(e) {
                        const r = e.cc,
                            t = e => {
                                const r = this.clientContext.getContext()[e.key];
                                switch (e.comparison) {
                                    case "EQUALS":
                                        return r === e.value;
                                    case "NOT_EQUALS":
                                        return r !== e.value;
                                    case "CONTAINS":
                                        return "string" == typeof r && r.indexOf(e.value) >= 0;
                                    case "NOT_CONTAINS":
                                        return "string" == typeof r && r.indexOf(e.value) < 0
                                }
                            };
                        return !r || ("AND" === (n = r).operator ? n.criteria.every(t) : n.criteria.some(t));
                        var n
                    }
                }
            },
            5506: (e, r, t) => {
                t.d(r, {
                    $S: () => a,
                    Hn: () => i,
                    MU: () => o,
                    p1: () => s
                });
                const n = {
                        standard_cohorts: {
                            auto_init: !0,
                            activationConfigs: []
                        },
                        web: {
                            auto_init: !1,
                            track_pageview_engagement: !0,
                            track_form_submission: !0,
                            track_link_click: !0,
                            track_pageview_complete: !0,
                            add_alchemy_taxonomy: !1,
                            add_alchemy_entities: !1,
                            engagement_edge_only: !0,
                            segment_transition_edge_only: !0,
                            activationConfigs: []
                        },
                        rubicon_ssp: {
                            auto_init: !0,
                            publisher_id: "11492",
                            activationConfigs: []
                        },
                        brightcove: {
                            auto_init: !1,
                            activationConfigs: []
                        },
                        local_storage: {
                            auto_init: !0,
                            activationConfigs: [{
                                id: "de35a6b1-cb36-444c-9f94-2874c6459720",
                                tt: "EveryTime",
                                sc: 84750,
                                c: {
                                    storage_key: "_pnewscorp"
                                },
                                wc: {}
                            }, {
                                id: "c490d78c-f46a-4f34-be6e-8a50202fa507",
                                tt: "EveryTime",
                                sc: 84751,
                                c: {
                                    storage_key: "_pnewscorp"
                                },
                                wc: {}
                            }]
                        },
                        clean_room: {
                            auto_init: !0,
                            publisher_permissions: {
                                "066ba0fe-5ecc-43f9-bddf-b7e36881a3b0": ["allow_targeting_known_audiences", "allow_targeting_modelled_audiences", "allow_insights", "allow_targeting_core_audiences"]
                            },
                            activationConfigs: []
                        },
                        dfp: {
                            auto_init: !0,
                            networks: [{
                                network_code: "8058",
                                name: "RealtorGAM"
                            }],
                            track_slot_rendered: !1,
                            track_slot_viewable: !0,
                            track_slot_clicked: !0,
                            activationConfigs: []
                        },
                        appnexus: {
                            auto_init: !0,
                            member_id: 7228,
                            activationConfigs: []
                        },
                        appnexus_adserver: {
                            auto_init: !0,
                            member_id: 7228,
                            targeting_key_id: 22494,
                            segment_name_prefix: "Permutive: ",
                            segment_code_prefix: "permutive_",
                            activationConfigs: []
                        }
                    },
                    i = e => {
                        const r = n[e];
                        return (e, t) => {
                            var n;
                            return null !== (n = null == r ? void 0 : r[e]) && void 0 !== n ? n : t
                        }
                    },
                    o = i("web"),
                    a = i("dfp"),
                    s = i("prebid");
                i("facebook_pixel_v2"), i("socio_demo_cohorts"), i("ctv")
            },
            427: (e, r, t) => {
                t.d(r, {
                    z: () => i
                });
                var n = t(3629);
                class i extends class {
                    constructor(e) {
                        this.context = e
                    }
                    getContext() {
                        return this.context
                    }
                    updateContext(...e) {
                        e.forEach((([e, r]) => {
                            this.context[e] = r
                        }))
                    }
                } {
                    constructor(e) {
                        super(e)
                    }
                    getClient() {
                        var e;
                        const r = null !== (e = document.title) && void 0 !== e ? e : "";
                        return Promise.resolve({
                            type: "web",
                            user_agent: navigator.userAgent || "",
                            url: (0, n.bk)(window.location.href),
                            domain: window.location.hostname || "",
                            title: r,
                            referrer: (0, n.bk)(document.referrer)
                        })
                    }
                }
            },
            4572: (e, r, t) => {
                t(6013)
            },
            449: (e, r, t) => {
                t.d(r, {
                    M: () => h,
                    m: () => f
                });
                var n = t(655),
                    i = t(2688),
                    o = t(9320),
                    a = t(8198),
                    s = t(3735),
                    c = t(6567),
                    u = t(5151),
                    l = t(7112),
                    p = t(550),
                    d = t(6013),
                    m = t(5595);
                const g = "permutive-events-cache",
                    _ = "permutive-events-for-page",
                    f = "historical";
                class h {
                    constructor(e, r, t, n, i, o, a) {
                        this.config = e, this.namespace = r, this.logger = t, this.network = n, this.trace = i, this.metrics = o, this.makeEventsStore = a, this.eventPutQueue = Promise.resolve(), this.eventsCache = this.makeEventsRepository(g), this.eventsForPage = this.makeEventsRepository(_), this.eventStore = a(), this.eventsTTLInMilliseconds = (0, s.zG)((0, c.ij)(this.config.eventsTTLInDays), (0, c.tS)((e => "number" == typeof e && e > 0 ? (0, c.G)(24 * e * 3600) : c.YP))), this.eventsCache.events = (0, d.PQ)((() => {
                            const e = this.trace.startSpan("load_event_cache");
                            return this.loadFromDisk().then((r => (e.finish(), this.logger.debug("Event cache loaded, #e", r.length), r)))
                        })), this.readiness = this.eventsCache.events.then((() => this.migratePreviousPagesEvents()))
                    }
                    migratePreviousPagesEvents() {
                        return (0, n.mG)(this, void 0, void 0, (function*() {
                            const e = this.trace.startSpan("migrate_previous_for_page_events"),
                                r = (0, u.pE)((e => (0, l.Y3)((() => e.flush()), i.w)));
                            return (0, s.zG)([this.eventsForPage, this.eventsCache], r, (0, u.UI)((r => {
                                const t = r.reduce(((e, r) => (0, a.g_)((r => [...e, r]), (() => e))(r)), []);
                                return t.length > 0 && this.network.error(`Migrate previous events failed. Got:\n${t.join("\n ")}`), e.finish()
                            })), (e => e()))
                        }))
                    }
                    get eventsForCurrentPage() {
                        return this.eventsForPage.events
                    }
                    all() {
                        return Promise.all([this.eventsCache.events, this.eventsForPage.events]).then(o.xH)
                    }
                    resetIfNeeded() {
                        return Promise.resolve(!1)
                    }
                    add(e, {
                        persistOnDisk: r
                    }) {
                        return (0, n.mG)(this, void 0, void 0, (function*() {
                            this.logger.debug("Adding to cache", e);
                            return (yield this.eventsForPage.events).push(e), r && this.readiness.then((() => this.eventsForPage.flush())), e
                        }))
                    }
                    filterEventsByWorkspace(e) {
                        return e
                    }
                    pruneEventsToSizeLimit(e) {
                        const r = this.config.eventsCacheLimitBytes;
                        let t = 2 * JSON.stringify(e).length,
                            n = 1;
                        for (; t > r;) e.splice(0, n), n *= 2, t = 2 * JSON.stringify(e).length;
                        return {
                            events: e,
                            sizeInBytes: t
                        }
                    }
                    loadFromDisk() {
                        this.logger.log("Loading event cache...");
                        const e = this.metrics.startTimer("sdk_load_events_cache_task_duration_seconds", {}),
                            r = e => {
                                this.metrics.track({
                                    name: "sdk_events_cache_byte_total",
                                    value: e.sizeInBytes,
                                    labels: {}
                                }), this.metrics.track({
                                    name: "sdk_events_cache_size_total",
                                    value: e.events.length,
                                    labels: {}
                                })
                            },
                            t = (0, s.zG)(this.eventsTTLInMilliseconds, (0, c.g_)((0, s.a9)(s.yR), (e => (0, o.hX)((r => e > Date.now() - r.time.getTime()))))),
                            i = (0, s.ls)((0, c.fS)((() => [])), u.of),
                            a = (0, l.g_)((e => {
                                const r = (0, u.of)([]);
                                return e instanceof m.m ? r : (this.network.error(`Error fetching data from store. Got ${e}`), () => (0, n.mG)(this, void 0, void 0, (function*() {
                                    return yield this.reset("historical"), r()
                                })))
                            }), i);
                        return (0, s.zG)([this.eventStore.get(g), this.eventStore.get(_)], (0, o.UI)(a), (0, o.vP)(u.oE), (0, u.UI)((r => (this.logger.debug("Read events from store", r), this.metrics.stopTimer("sdk_load_events_cache_task_duration_seconds", e), r))), (0, u.UI)((0, s.ls)(o.xH, this.filterEventsByWorkspace, this.pruneEventsToSizeLimit.bind(this), (e => (this.eventsCache.sizeInBytes = e.sizeInBytes, e.events.length > 0 && r(e), e.events)), (0, o.UI)(p.kJ), t)), (e => e()))
                    }
                    reset(e) {
                        return (0, n.mG)(this, void 0, void 0, (function*() {
                            return this.logger.debug("Resetting Events Cache"), (0, s.zG)(this.eventStore.deleteStore(), (0, l.UI)((() => (this.eventStore = this.makeEventsStore(), e === f ? Promise.all([this.eventsCache.reset(), this.eventsForPage.flush()]) : Promise.all([this.eventsCache.reset(), this.eventsForPage.reset()])))), (0, l.UI)((() => this.all())), (0, l.g_)((() => (0, u.of)([])), (e => (0, s.a9)(e))), (e => e()))
                        }))
                    }
                    getStateSizeInBytes() {
                        return this.eventsForPage.sizeInBytes + this.eventsCache.sizeInBytes
                    }
                    makeEventsRepository(e) {
                        const r = {
                            key: e,
                            events: Promise.resolve([]),
                            sizeInBytes: 0,
                            flush: () => (0, n.mG)(this, void 0, void 0, (function*() {
                                const e = yield r.events;
                                this.logger.debug("Writing", e.length, "events to", r.key);
                                const t = this.trace.startSpan(`write_${r.key}`),
                                    n = JSON.stringify(e);
                                return r.sizeInBytes = 2 * n.length, this.eventPutQueue = this.eventPutQueue.then((n => this.eventStore.put(e.map(p.XO), r.key)().then((e => {
                                    if ((0, a.nM)(e)) {
                                        (e => {
                                            const t = `Events cache failed to put ${r.key}. Got ${e}`;
                                            return e instanceof m.m ? this.logger.error(t) : this.network.error(t)
                                        })(e.left)
                                    }
                                    t.finish()
                                }))))
                            })),
                            reset: () => (r.events = Promise.resolve([]), r.sizeInBytes = 0, r.flush())
                        };
                        return r
                    }
                }
            },
            8231: (e, r, t) => {
                t.d(r, {
                    K: () => j
                });
                class n {
                    constructor() {
                        this.crypto = window.crypto || window.msCrypto, this.ALG_NAME = "AES-GCM"
                    }
                    isAvailable() {
                        var e;
                        return !!(null === (e = this.crypto) || void 0 === e ? void 0 : e.subtle)
                    }
                    generateKey(e = !1) {
                        return this.crypto.subtle.generateKey({
                            name: this.ALG_NAME,
                            length: 256
                        }, e, ["encrypt", "decrypt"])
                    }
                    encrypt(e, r) {
                        const [t, n] = this._encrypt(e, this.str2bytes(r));
                        return t.then((e => {
                            const r = new Uint8Array(16 + e.byteLength);
                            return r.set(n, 0), r.set(new Uint8Array(Uint32Array.of(e.byteLength).buffer), 12), r.set(new Uint8Array(e), 16), r.buffer
                        }))
                    }
                    decrypt(e, r) {
                        const t = new Uint8Array(r, 0, 12),
                            n = new Uint32Array(r, 12, 1)[0],
                            i = r.slice(16, 16 + n);
                        return this._decrypt(e, t, i).then(this.bytes2str)
                    }
                    _encrypt(e, r) {
                        const t = this.crypto.getRandomValues(new Uint8Array(12));
                        return [this.crypto.subtle.encrypt({
                            name: this.ALG_NAME,
                            iv: t
                        }, e, r), t]
                    }
                    _decrypt(e, r, t) {
                        return this.crypto.subtle.decrypt({
                            name: this.ALG_NAME,
                            iv: r
                        }, e, t)
                    }
                    str2bytes(e) {
                        return (new TextEncoder).encode(e).buffer
                    }
                    bytes2str(e) {
                        return (new TextDecoder).decode(e)
                    }
                }
                var i = t(2688),
                    o = t(8198),
                    a = t(6567),
                    s = t(7112);
                var c = t(3735),
                    u = t(2485),
                    l = t(655);
                let p, d;
                const m = new WeakMap,
                    g = new WeakMap,
                    _ = new WeakMap,
                    f = new WeakMap,
                    h = new WeakMap;
                let v = {
                    get(e, r, t) {
                        if (e instanceof IDBTransaction) {
                            if ("done" === r) return g.get(e);
                            if ("objectStoreNames" === r) return e.objectStoreNames || _.get(e);
                            if ("store" === r) return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0])
                        }
                        return b(e[r])
                    },
                    set: (e, r, t) => (e[r] = t, !0),
                    has: (e, r) => e instanceof IDBTransaction && ("done" === r || "store" === r) || r in e
                };

                function w(e) {
                    return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (d || (d = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function(...r) {
                        return e.apply(y(this), r), b(m.get(this))
                    } : function(...r) {
                        return b(e.apply(y(this), r))
                    } : function(r, ...t) {
                        const n = e.call(y(this), r, ...t);
                        return _.set(n, r.sort ? r.sort() : [r]), b(n)
                    }
                }

                function q(e) {
                    return "function" == typeof e ? w(e) : (e instanceof IDBTransaction && function(e) {
                        if (g.has(e)) return;
                        const r = new Promise(((r, t) => {
                            const n = () => {
                                    e.removeEventListener("complete", i), e.removeEventListener("error", o), e.removeEventListener("abort", o)
                                },
                                i = () => {
                                    r(), n()
                                },
                                o = () => {
                                    t(e.error || new DOMException("AbortError", "AbortError")), n()
                                };
                            e.addEventListener("complete", i), e.addEventListener("error", o), e.addEventListener("abort", o)
                        }));
                        g.set(e, r)
                    }(e), r = e, (p || (p = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e => r instanceof e)) ? new Proxy(e, v) : e);
                    var r
                }

                function b(e) {
                    if (e instanceof IDBRequest) return function(e) {
                        const r = new Promise(((r, t) => {
                            const n = () => {
                                    e.removeEventListener("success", i), e.removeEventListener("error", o)
                                },
                                i = () => {
                                    r(b(e.result)), n()
                                },
                                o = () => {
                                    t(e.error), n()
                                };
                            e.addEventListener("success", i), e.addEventListener("error", o)
                        }));
                        return r.then((r => {
                            r instanceof IDBCursor && m.set(r, e)
                        })).catch((() => {})), h.set(r, e), r
                    }(e);
                    if (f.has(e)) return f.get(e);
                    const r = q(e);
                    return r !== e && (f.set(e, r), h.set(r, e)), r
                }
                const y = e => h.get(e);

                function E(e, r, {
                    blocked: t,
                    upgrade: n,
                    blocking: i,
                    terminated: o
                } = {}) {
                    const a = indexedDB.open(e, r),
                        s = b(a);
                    return n && a.addEventListener("upgradeneeded", (e => {
                        n(b(a.result), e.oldVersion, e.newVersion, b(a.transaction))
                    })), t && a.addEventListener("blocked", (() => t())), s.then((e => {
                        o && e.addEventListener("close", (() => o())), i && e.addEventListener("versionchange", (() => i()))
                    })).catch((() => {})), s
                }

                function k(e, {
                    blocked: r
                } = {}) {
                    const t = indexedDB.deleteDatabase(e);
                    return r && t.addEventListener("blocked", (() => r())), b(t).then((() => {}))
                }
                const I = ["get", "getKey", "getAll", "getAllKeys", "count"],
                    A = ["put", "add", "delete", "clear"],
                    D = new Map;

                function P(e, r) {
                    if (!(e instanceof IDBDatabase) || r in e || "string" != typeof r) return;
                    if (D.get(r)) return D.get(r);
                    const t = r.replace(/FromIndex$/, ""),
                        n = r !== t,
                        i = A.includes(t);
                    if (!(t in (n ? IDBIndex : IDBObjectStore).prototype) || !i && !I.includes(t)) return;
                    const o = async function(e, ...r) {
                        const o = this.transaction(e, i ? "readwrite" : "readonly");
                        let a = o.store;
                        return n && (a = a.index(r.shift())), (await Promise.all([a[t](...r), i && o.done]))[0]
                    };
                    return D.set(r, o), o
                }
                v = (e => ({ ...e,
                    get: (r, t, n) => P(r, t) || e.get(r, t, n),
                    has: (r, t) => !!P(r, t) || e.has(r, t)
                }))(v);
                var S = t(5151),
                    x = t(6013);

                function O(e) {
                    return "development" === e.environment ? window.isSecureContext : "https:" === window.location.protocol
                }
                class M {
                    constructor(e, r, t, n, i, o, a) {
                        this.namespace = e, this.logger = r, this.cryptoAlg = t, this.idb = n, this.mainObjectStore = i, this.keyObjectStore = o, this.keyObjectKey = a, this.MAX_CONSECUTIVE_PUTS = 30, this.puts = 1, this.hasForcedCompaction = !1, this.logger.debug("IDB: Created", this.idb), this.cryptoKey = this.getOrGenerateKey()
                    }
                    static initialise(e, r, t, n, i, a, u, l, p, d) {
                        const m = (0, x.G6)(navigator.userAgent) && !1,
                            g = [O(e), i.isAvailable(), !m].every((e => !0 === e)),
                            _ = (e, r, t) => r.includes(t) ? (0, c.Q1)() : e.createObjectStore(t),
                            f = g ? (0, o.Y3)((() => function(e) {
                                if (!(0, x.G6)(navigator.userAgent) || !indexedDB.databases) return Promise.resolve();
                                let r, t = 0;
                                return new Promise((e => {
                                    const n = () => (t++, indexedDB.databases().finally(e));
                                    r = window.setInterval(n, 100), n()
                                })).finally((() => {
                                    clearInterval(r), e.track({
                                        name: "sdk_idb_conn_attempt_safari_count",
                                        value: t,
                                        labels: {}
                                    })
                                }))
                            }(t).then((() => E(a, d, {
                                upgrade: e => {
                                    const r = [...e.objectStoreNames];
                                    _(e, r, u), _(e, r, l)
                                }
                            })))), (e => String(e))) : (0, o.t$)("Connection not attempted. Default to localStorage");
                        return (0, o.g_)((e => (0, s.t$)(e)), (e => (0, s.Y3)((() => e.then((e => new M(r, n, i, e, u, l, p)))), (e => String(e)))))(f)
                    }
                    put(e, r) {
                        return (0, l.mG)(this, void 0, void 0, (function*() {
                            return (0, c.zG)((() => (0, l.mG)(this, void 0, void 0, (function*() {
                                return (0, c.bc)(JSON.stringify(e), yield this.cryptoKey)
                            }))), (0, S.tS)((([e, r]) => (0, S.of)(this.cryptoAlg.encrypt(r, e)))), (0, S.tS)((e => () => (0, l.mG)(this, void 0, void 0, (function*() {
                                return yield this.resetIfRequired(this.puts++), e
                            })))), (0, S.tS)((e => (0, s.Y3)((() => this.idb.put(this.mainObjectStore, e, this.namespace.getNamespacedStorageKey(String(r)))), i.w))), (0, S.UI)((0, o.g_)((t => {
                                throw this.logger.error(`IDB: Failed to put "${r.toString()}" value`, e, ". Got \n", t), "QuotaExceededError" === t.name && this.forceCompaction(), t
                            }), (() => r))), (e => e()))
                        }))
                    }
                    get(e) {
                        return this.cryptoKey.then((r => (0, c.zG)(this.namespace.getNamespacedStorageKey(String(e)), (t => this.idb.get(this.mainObjectStore, t).then((e => e ? this.cryptoAlg.decrypt(r, e) : null)).then(JSON.parse).catch((r => {
                            const t = (0, i.w)(r);
                            throw this.logger.error(`IDB: Get ${e.toString()} failed. Got`, t), t
                        }))))))
                    }
                    delete(e) {
                        return (0, c.zG)(this.namespace.getNamespacedStorageKey(String(e)), (e => this.idb.delete(this.mainObjectStore, e)))
                    }
                    deleteStore() {
                        return this.logger.debug("IDB: Deleting", this.idb), this.idb.close(), k(this.idb.name)
                    }
                    getOrGenerateKey() {
                        return (0, c.zG)(this.namespace.getNamespacedStorageKey(this.keyObjectKey), (e => this.idb.get(this.keyObjectStore, e).then((e => e || this.storeGivenOrGeneratedKey())).catch((e => {
                            const r = (0, i.w)(e);
                            return this.logger.error("IDB: Get or generate key failed. Got\n", r), this.cryptoAlg.generateKey(!1)
                        }))))
                    }
                    storeGivenOrGeneratedKey(e = this.cryptoAlg.generateKey(!1)) {
                        return (0, c.zG)((0, S.of)(this.namespace.getNamespacedStorageKey(this.keyObjectKey)), (0, S.tS)((r => (0, s.Y3)((() => (0, l.mG)(this, void 0, void 0, (function*() {
                            return this.idb.put(this.keyObjectStore, yield e, r)
                        }))), i.w))), (0, S.UI)((0, o.g_)((e => {
                            throw this.logger.error(`IDB: Failed to store crypto key to ${this.keyObjectStore} due to unexpected error,\n`, e), e
                        }), (() => e))), (e => e()))
                    }
                    forceCompaction() {
                        if (this.hasForcedCompaction) return null;
                        this.hasForcedCompaction = !0, this.logger.debug("Attempting to force compaction");
                        const e = `__${this.mainObjectStore}`;
                        return E(e).then((r => (r.close(), k(e))))
                    }
                    resetIfRequired(e) {
                        return (0, x.G6)(navigator.userAgent) && e % this.MAX_CONSECUTIVE_PUTS == 0 ? this.reset() : Promise.resolve()
                    }
                    reset() {
                        return (0, l.mG)(this, void 0, void 0, (function*() {
                            const e = this.idb.name,
                                r = this.idb.version;
                            yield this.deleteStore(), this.idb = yield E(e, r), this.idb.createObjectStore(this.mainObjectStore), this.idb.createObjectStore(this.keyObjectStore), yield this.storeGivenOrGeneratedKey(this.cryptoKey), this.logger.debug("IDB: Reset to", this.idb)
                        }))
                    }
                }
                var C = t(3195),
                    T = t(5595);
                class L {
                    constructor(e, r, t, n, i, a, s, l, p, d) {
                        this.version = 3, this.db = ((e, r, t, n, i, o, a, s, l, p, d) => (0, c.zG)(M, (0, u._)({
                            logger: p,
                            consentTracking: d
                        })).initialise(e, r, t, p, n, i, o, a, s, l))(e, r, t, n, i, a, s, l, this.version, p, d)().then((0, o.fS)((e => (0, C.S)(r, p, d))))
                    }
                    shouldThrowStoreClosingError(e) {
                        return "NotFoundError" === e.name || "InvalidStateError" === e.name
                    }
                    makeStoreClosingDuringOpertationError(e) {
                        return new T.m(`Attempted ${e} when the current store is closing.`)
                    }
                    put(e, r) {
                        return (0, s.Y3)((() => this.db.then((t => t.put(e, r)))), (e => {
                            const r = (0, i.w)(e);
                            return this.shouldThrowStoreClosingError(r) ? this.makeStoreClosingDuringOpertationError("put") : r
                        }))
                    }
                    get(e) {
                        return (0, s.Y3)((() => this.db.then((r => r.get(e))).then(a.ij)), (e => {
                            const r = (0, i.w)(e);
                            return this.shouldThrowStoreClosingError(r) ? this.makeStoreClosingDuringOpertationError("get") : r
                        }))
                    }
                    delete(e) {
                        return (0, s.Y3)((() => this.db.then((r => r.delete(e)))), (e => String(e)))
                    }
                    deleteStore() {
                        return (0, s.Y3)((() => this.db.then((e => e.deleteStore()))), (e => String(e)))
                    }
                }
                var R = t(449);
                class j extends R.M {
                    constructor(e, r, t, i, o, a, s, c) {
                        super(e, r, t, i, o, a, (() => new L(e, r, a, new n, "0cf17917-395b-4f25-91cc-db3bdd6044b0", `events_${s.get()}`, `keys_${s.get()}`, "events", t, c)))
                    }
                }
            },
            2923: (e, r, t) => {
                t.d(r, {
                    X: () => n
                });
                class n {
                    constructor() {
                        this.properties = {}
                    }
                    overrideCustomProps(e) {
                        this.properties = e
                    }
                    getCustomProps() {
                        return this.properties
                    }
                }
            },
            4314: (e, r, t) => {
                t.d(r, {
                    c: () => s
                });
                var n = t(2688),
                    i = t(3735),
                    o = t(550),
                    a = t(7545);
                class s {
                    constructor(e, r, t, n, i, o) {
                        this.eventHandler = e, this.api = r, this.metrics = t, this.userId = n, this.network = i, this.eventsCache = o, this.DEBOUNCE_TIME = 500, this.MAX_DEBOUNCE_TIME = 5e3, this.batch = {
                            requestData: [],
                            requestOptions: [],
                            processingStrategies: []
                        }, this.scheduler = new a.b(this.DEBOUNCE_TIME, this.MAX_DEBOUNCE_TIME), this.debouncedFlushIfNotEmpty = this.scheduler.schedule(this.flush.bind(this)), this.scheduler.scheduleForPageUnload((() => this.flushWithBeacon.bind(this)(this.batch)))
                    }
                    add(e, r, t) {
                        return this.batch.requestData.push(e), this.batch.requestOptions.push(r), this.batch.processingStrategies.push(t), this.debouncedFlushIfNotEmpty(this.batch), Promise.resolve()
                    }
                    flush(e) {
                        return this.flushIfNotEmpty(e, !1)
                    }
                    flushWithBeacon(e) {
                        return this.flushIfNotEmpty(e, !0)
                    }
                    flushIfNotEmpty(e, r) {
                        const {
                            requestData: t,
                            requestOptions: o,
                            processingStrategies: a
                        } = e, s = e => this.network.error(`Error sending events batch. Got ${(0,n.w)(e)}`, this.userId.get()), c = r ? (0, i.ls)((e => this.api.trackBatchBeacon(e)), (e => Promise.resolve())) : e => this.api.trackBatch(this.metrics, e);
                        return t.length > 0 ? (0, i.zG)(this.resetBatch(), (e => this.trackMetrics(t)), (e => c(t).then((e => this.isBatchResponse(e) ? this.onBatchResponseSuccess(e, t, o, a) : (0, i.Q1)())).catch(s))) : Promise.resolve()
                    }
                    onBatchResponseSuccess(e, r, t, n) {
                        const a = (e, r) => "never" !== r ? (0, i.ls)((() => this.eventHandler.newEvent((0, o.XO)(e), null)), (() => this.eventsCache.add(e, {
                                persistOnDisk: !0
                            }))) : i.Q1,
                            s = (e, r, t) => {
                                const n = {
                                    name: r.name,
                                    session_id: r.session_id,
                                    view_id: r.view_id,
                                    properties: r.properties,
                                    id: null,
                                    time: (new Date).toISOString()
                                };
                                return (0, i.zG)(t(e.error.message), (r => console.error(e)), (r => this.eventHandler.newEvent(n, e)))
                            };
                        return e.forEach((({
                            body: e
                        }, c) => {
                            const u = r[c],
                                l = t[c],
                                p = n[c];
                            return (0, o.bk)(e) ? s(e, u, l.error) : ((e, r, t, n) => {
                                const s = (0, o.mh)(e, r);
                                return (0, i.zG)(t(s), a(s, n))
                            })(e, u, l.success, p)
                        }))
                    }
                    resetBatch() {
                        this.batch = {
                            requestData: [],
                            requestOptions: [],
                            processingStrategies: []
                        }
                    }
                    trackMetrics(e) {
                        this.metrics.track({
                            name: "sdk_events_batch_size_total",
                            value: e.length,
                            labels: {}
                        }), this.metrics.track({
                            name: "sdk_events_batch_size_bytes",
                            value: 2 * JSON.stringify(e).length,
                            labels: {}
                        })
                    }
                    isBatchResponse(e) {
                        return !!e
                    }
                }
            },
            824: (e, r, t) => {
                t.d(r, {
                    p: () => u
                });
                var n = t(3735),
                    i = t(6567),
                    o = t(3195);
                const a = e => r => class extends r {
                        constructor() {
                            super(...arguments), this.key = e
                        }
                        put(e) {
                            return this.db.then((r => r.put(e, this.key))).then(n.Q1)
                        }
                        getIfPresent() {
                            return this.db.then((e => e.get(this.key))).then(i.ij)
                        }
                        reset() {
                            return this.db.then((e => e.delete(this.key)))
                        }
                    },
                    s = e => (0, n.zG)(class {
                        constructor(e) {
                            this.db = Promise.resolve((0, o.S)(e.namespace, e.logger, e.consentTracking))
                        }
                    }, a(e)),
                    c = "permutive-pvc";
                class u extends(s(c)) {
                    constructor(e) {
                        super(e)
                    }
                }
            },
            9678: (e, r, t) => {
                t.d(r, {
                    LP: () => o,
                    dG: () => n,
                    eP: () => i
                });
                const n = 4096,
                    i = `Cookie exceeds maximum supported size of ${n} bytes for most browsers.`,
                    o = "Cookie is missing required parameters."
            },
            9175: (e, r, t) => {
                t.d(r, {
                    S: () => c
                });
                var n = t(3735),
                    i = t(9678);
                class o {
                    constructor(e, r, t) {
                        this.namespace = e, this.config = r, this.logger = t
                    }
                    setCookie(e, r, t = !1) {
                        var n;
                        if (!(r && e && this.config.cookieExpiry && this.config.cookieDomain)) {
                            const {
                                cookieExpiry: t,
                                cookieDomain: o
                            } = null !== (n = this.config) && void 0 !== n ? n : {};
                            throw this.logger.warn(`Unable to set cookie. ${i.LP}`, {
                                value: r,
                                cookieName: e,
                                cookieExpiry: t,
                                cookieDomain: o
                            }), new Error(i.LP)
                        }
                        const o = this.namespace.getNamespacedStorageKey(e),
                            a = [encodeURIComponent(o), "=", encodeURIComponent(r), "; expires=", this.config.cookieExpiry, "; domain=", this.config.cookieDomain, "; path=/", t ? "; samesite=none; secure" : ""].join("");
                        if (a.length > i.dG) throw this.logger.warn(`Unable to set cookie ${o}. ${i.eP}`), new Error(i.eP);
                        return this.logger.debug(`Setting cookie ${a}`), document.cookie = a, !0
                    }
                    getCookie(e, r = !1) {
                        const t = r ? e : this.namespace.getNamespacedStorageKey(e),
                            n = new RegExp("\\b" + encodeURIComponent(t) + "=([^;]+)").exec(document.cookie);
                        return null !== n ? decodeURIComponent(n[1]) : null
                    }
                    deleteCookie(e) {
                        if (!e || !this.config.cookieDomain) return !1;
                        const r = this.namespace.getNamespacedStorageKey(e);
                        return document.cookie = encodeURIComponent(r) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=" + this.config.cookieDomain + "; path=/", !0
                    }
                }
                var a = t(590);
                const s = e => {
                        const {
                            logger: r,
                            consentTracking: t
                        } = e, n = e => (r.debug(`Cookie: Failed to set cookie ${e} as consent is revoked`), !1);
                        return e => class extends e {
                            constructor() {
                                super(...arguments), this.setCookie = (0, a.vX)(super.setCookie.bind(this), n, t.isRevoked)
                            }
                        }
                    },
                    c = (e, r, t, i) => new((0, n.zG)(o, s({
                        consentTracking: i,
                        logger: t
                    })))(e, r, t)
            },
            3319: (e, r, t) => {
                t.d(r, {
                    S: () => l
                });
                var n = t(3735),
                    i = t(2688),
                    o = t(787),
                    a = t(8198);
                class s {
                    constructor(e) {
                        this.namespace = e
                    }
                    getExternalData(e) {
                        const r = this.namespace.getNamespacedStorageKey(e);
                        return window.localStorage.getItem(r)
                    }
                    getExternalJsonData(e) {
                        return (0, n.zG)(this.getExternalData(e), o.A)
                    }
                    setExternalData(e, r) {
                        const t = this.namespace.getNamespacedStorageKey(e);
                        try {
                            window.localStorage.setItem(t, r)
                        } catch (e) {}
                    }
                    setExternalJsonData(e, r) {
                        return (0, n.zG)((t = r, (0, a.Y3)((function() {
                            var e = JSON.stringify(t);
                            if ("string" != typeof e) throw new Error("Converting unsupported structure to JSON");
                            return e
                        }), n.yR)), (0, a.UI)((r => this.setExternalData(e, r))), (0, a.g_)((e => {
                            throw (0, i.w)(e)
                        }), n.Q1));
                        var t
                    }
                    removeExternalData(e) {
                        const r = this.namespace.getNamespacedStorageKey(e);
                        window.localStorage.removeItem(r)
                    }
                }
                var c = t(590);
                const u = e => {
                        const {
                            logger: r,
                            consentTracking: t
                        } = e, n = e => {
                            r.debug(`External Data: Failed to set key ${e} as consent is revoked`)
                        }, i = n, o = n;
                        return e => class extends e {
                            constructor() {
                                super(...arguments), this.setExternalData = (0, c.vX)(super.setExternalData.bind(this), i, t.isRevoked), this.setExternalJsonData = (0, c.vX)(super.setExternalJsonData.bind(this), o, t.isRevoked)
                            }
                        }
                    },
                    l = (e, r, t) => new((0, n.zG)(s, u({
                        consentTracking: t,
                        logger: r
                    })))(e)
            },
            6715: (e, r, t) => {
                t.d(r, {
                    P: () => n
                });
                class n {
                    constructor(e, r, n, i, o, a, s, c, u = [], l = {}) {
                        this.logger = e, this.network = r, this.userId = n, this.viewId = i, this.messages = o, this.sessionManager = a, this.cookies = s, this.externalData = c, this.blockers = u, this.addons = l, this.listenForBlockers = !0, Promise.resolve().then(t.bind(t, 6546)).then((e => {
                            this.extMessages = new e.PermutiveMessages(this), this.messages.emit("permutive:internals:extMessages:ready")
                        }))
                    }
                    makeSafe(e) {
                        return (...r) => {
                            try {
                                return e(...r)
                            } catch (e) {
                                this.network.error(e, this.userId.get())
                            }
                        }
                    }
                    utcNow() {
                        const e = new Date;
                        return new Date(e.toUTCString())
                    }
                    addBlocker(e) {
                        this.blockers.push(e), this.logger.log("<blockers> added blocker " + e), this.messages.on(e, (() => {
                            if (this.listenForBlockers) {
                                const r = this.blockers.indexOf(e);
                                r >= 0 && (this.blockers.splice(r, 1), this.logger.log("<blockers> removed blocker " + e)), 0 === this.blockers.length && (this.listenForBlockers = !1, this.messages.emit("permutive:blockers:empty"), this.logger.log("<blockers> complete"))
                            }
                        }))
                    }
                }
            },
            4828: (e, r, t) => {
                t.d(r, {
                    SX: () => o
                });
                class n {
                    constructor() {
                        this.prefix = "[Permutive]", this.debugStyle = ["color: blue"].join(";")
                    }
                    log(...e) {
                        return console.log.bind(window.console, this.prefix)(...e)
                    }
                    debug(...e) {
                        return console.debug.bind(window.console, "%c%s", this.debugStyle, this.prefix)(...e)
                    }
                    warn(...e) {
                        return console.warn.bind(window.console, this.prefix)(...e)
                    }
                    error(...e) {
                        return console.error.bind(window.console, this.prefix)(...e)
                    }
                }
                class i {
                    log() {}
                    debug() {}
                    warn() {}
                    error() {}
                }
                const o = e => {
                    var r;
                    return e.loggingEnabled && void 0 !== (null === (r = window.console) || void 0 === r ? void 0 : r.log) ? new n : new i
                }
            },
            8167: (e, r, t) => {
                t.d(r, {
                    Q: () => n
                });
                class n {
                    constructor() {
                        this.messageListenerMap = {}, this.replayQueue = {}
                    }
                    on(e, r, t = {
                        withReplay: !1
                    }) {
                        var n, i;
                        null !== (n = (i = this.messageListenerMap)[e]) && void 0 !== n || (i[e] = []), t.withReplay && this.processReplayQueue(e, r), this.messageListenerMap[e].push(r)
                    }
                    once(e, r) {
                        const t = n => {
                            r(n), this.off(e, t)
                        };
                        this.on(e, t)
                    }
                    off(e, r) {
                        var t;
                        if (!r) return this.messageListenerMap[e] = [], void(this.replayQueue[e] = []);
                        const n = (null !== (t = this.messageListenerMap[e]) && void 0 !== t ? t : []).indexOf(r);
                        n >= 0 && this.messageListenerMap[e].splice(n, 1)
                    }
                    emit(e, r, t = {
                        withReplay: !1
                    }) {
                        var n;
                        (null === (n = this.messageListenerMap[e]) || void 0 === n ? void 0 : n.length) > 0 ? this.emitMessageWithPayload(e, r) : t.withReplay && this.addToReplayQueue(e, r)
                    }
                    addToReplayQueue(e, r) {
                        var t, n;
                        null !== (t = (n = this.replayQueue)[e]) && void 0 !== t || (n[e] = []), this.replayQueue[e].push(r)
                    }
                    processReplayQueue(e, r) {
                        var t;
                        null === (t = this.replayQueue[e]) || void 0 === t || t.forEach((e => r(e)))
                    }
                    emitMessageWithPayload(e, r) {
                        var t;
                        null === (t = this.messageListenerMap[e]) || void 0 === t || t.forEach((e => e(r)))
                    }
                }
            },
            7121: (e, r, t) => {
                t.d(r, {
                    AG: () => s,
                    UC: () => o,
                    Yh: () => a
                });
                var n = t(6567),
                    i = t(6013);
                const o = (e, r, t) => e in r || (() => {
                        const r = "number" == typeof e ? e : parseInt(e);
                        return !1 === isNaN(r) && t.has(r)
                    })(),
                    a = e => (0, i.b0)(e, ((e, r) => r.state ? (0, n.G)({
                        [r.checksum]: r.state
                    }) : n.YP));

                function s(e) {
                    var r;
                    return ["SegmentEntry", "SegmentExit"].includes(e.name) && void 0 !== (null === (r = e.properties) || void 0 === r ? void 0 : r.segment_number)
                }
            },
            4938: (e, r, t) => {
                t.d(r, {
                    c: () => ut,
                    e: () => st
                });
                var n = t(7183),
                    i = t(3735),
                    o = t(477),
                    a = t.n(o);

                function s() {
                    return a()('/*! permutive-javascript-sdk v19.30.0 (web) (built 2022-10-05T11:55:53.945Z) */(()=>{"use strict";const e=()=>({kind:"null",value:null}),i=e=>({kind:"string",value:e}),t=e=>({kind:"number",value:e}),n=e=>({kind:"array",value:e}),r=e=>({kind:"object",value:e}),c=e=>e,o=()=>({kind:"bottom"}),a=e=>({kind:"inner",a:e}),p=e=>({kind:"top",error:e}),l=e=>({kind:"unbounded",group:e}),s=(e,i)=>({kind:"windowed",key:i,group:e}),m=(e,i,t)=>({kind:"countLimit",n:t,limit:i,group:e}),u=(e,i,t)=>({kind:"uniqueLimit",n:t,limit:i,group:e}),q=e=>({kind:"numberGroup",group:e}),_=e=>({kind:"stringGroup",group:e}),v=e=>({kind:"tuple",tuple:e}),g=e=>({state:e}),w=(e,i)=>({commands:e,payload:i});function d(e){return e}function f(e,i,t,n,r,c,o,a,p){switch(arguments.length){case 1:return e;case 2:return i(e);case 3:return t(i(e));case 4:return n(t(i(e)));case 5:return r(n(t(i(e))));case 6:return c(r(n(t(i(e)))));case 7:return o(c(r(n(t(i(e))))));case 8:return a(o(c(r(n(t(i(e)))))));case 9:return p(a(o(c(r(n(t(i(e))))))));default:for(var l=arguments[0],s=1;s<arguments.length;s++)l=arguments[s](l);return l}}var A=function(e){return{equals:function(i,t){return i===t||e(i,t)}}},h=function(e){return A((function(i,t){for(var n in e)if(!e[n].equals(i[n],t[n]))return!1;return!0}))},E=function(e){return function(i,t){return i===t||0===e(i,t)}},y=function(e){return{equals:E(e),compare:function(i,t){return i===t?0:e(i,t)}}},x=function(e){return function(i){return y((function(t,n){return i.compare(e(t),e(n))}))}},I=function(e){return function(i,t){return-1===e.compare(i,t)}},b=function(e){return function(i,t){return 1===e.compare(i,t)}},k=function(e){return function(i,t){return i===t||e.compare(i,t)>-1?i:t}};var S={equals:function(e,i){return e===i}},P={equals:S.equals,compare:function(e,i){return e<i?-1:e>i?1:0}};const O=(e,i)=>{switch(e.kind){case"bottom":return{kind:"bottom"};case"inner":return a(i(e.a));case"top":return p(e.error)}},D=e=>y(((i,t)=>{if("bottom"===i.kind&&"bottom"===t.kind)return 0;if("bottom"===i.kind)return-1;if("bottom"===t.kind)return 1;if("top"===i.kind&&"top"===t.kind)return P.compare(i.error,t.error);if("top"===i.kind)return 1;if("top"===t.kind)return-1;if("inner"===i.kind&&"inner"===t.kind)return e.compare(i.a,t.a);throw new Error("Non exhaustive match in extendedAlgebraOrd")}));var L=function(e,i){for(var t=0,n=i.length,r=e.length;t<n;t++,r++)e[r]=i[t];return e},C=function(e){return"Some"===e._tag},R={_tag:"None"},T=function(e){return{_tag:"Some",value:e}},N=function(e){return"Left"===e._tag},M=(Object.prototype.hasOwnProperty,function(e){return L([e[0]],e.slice(1))});var X=R,Q=T;function j(e){return function(i){return e(i)?Q(i):X}}var z=function(e){return"Left"===e._tag?X:Q(e.right)},F=function(e){return{equals:function(i,t){return i===t||(W(i)?W(t):!W(t)&&e.equals(i.value,t.value))}}},U=function(e){return{equals:F(e).equals,compare:function(i,t){return i===t?0:Y(i)?Y(t)?e.compare(i.value,t.value):1:-1}}},V=function(e){return function(i){return W(i)?X:Q(e(i.value))}},B=z,Y=C,W=function(e){return"None"===e._tag},G=function(e){return function(i){return W(i)?e():i.value}};var H;H=void 0;var K=function(e){return e[0]},$=K;var J=function(e,i){for(var t=0,n=i.length,r=e.length;t<n;t++,r++)e[r]=i[t];return e},Z=function(e){return e.length>0},ee=function(e,i){return e<0||e>=i.length},ie=function(e){return function(i){return J([e],i)}},te=ie,ne=function(e){return function(i){return J(J([],i),[e])}},re=ne,ce=M,oe=function(e){return Z(e)?T(e):R},ae=function(e){return function(i){for(var t=Math.max(0,Math.floor(i)),n=[e(0)],r=1;r<t;r++)n.push(e(r));return n}};var pe=ce;var le=function(e){return function(i){var t=Math.max(1,e);return t>=i.length?[pe(i),[]]:[f(i.slice(1,t),te(me(i))),i.slice(t)]}},se=function(e){return A((function(i,t){return i.length===t.length&&i.every((function(i,n){return e.equals(i,t[n])}))}))},me=$;var ue={equals:function(e,i){return e===i}},qe={equals:ue.equals,compare:function(e,i){return e<i?-1:e>i?1:0}};var _e=function(e,i){return function(t){for(var n=t.length,r=e,c=0;c<n;c++)r=i(c,r,t[c]);return r}};var ve=function(e){return 0===e.length},ge=Z,we=te,de=re,fe=function(e,i){return e<=0?[]:ae(i)(e)};var Ae=ee,he=function(e){return function(i){return Ae(e,i)?xe(i):i.slice(0,e)}};var Ee=function(e,i){for(var t=e.length,n=0;n<t&&i(e[n]);n++);return n};var ye=function(e){return function(i){return e<=0||ve(i)?xe(i):e>=i.length?[]:i.slice(e,i.length)}};var xe=function(e){return e.slice()},Ie=function(e){return ve(e)?[]:e.slice().reverse()},be=function(e){return function(i){return i.length<=1?xe(i):i.slice().sort(e.compare)}},ke=function(e,i,t){for(var n=[],r=Math.min(e.length,i.length),c=0;c<r;c++)n[c]=t(e[c],i[c]);return n};var Se=function(e){return function(i){return e>=1&&ge(i)?le(e)(i):ve(i)?[xe(i),[]]:[[],xe(i)]}};var Pe=function(e){return function(i){return f(i,function(e){return function(i){for(var t=[],n=0;n<i.length;n++)t.push.apply(t,e(n,i[n]));return t}}((function(i,t){return e(t)})))}},Oe=function(e){return function(i){for(var t=[],n=0;n<i.length;n++){var r=e(n,i[n]);C(r)&&t.push(r.value)}return t}},De=function(e){return Oe((function(i,t){return e(t)}))},Le=De(d),Ce=_e,Re=function(e){var i=Te(e);return function(e){return i((function(i,t){return e(t)}))}},Te=function(e){return function(i){return Ce(e.of([]),(function(t,n,r){return e.ap(e.map(n,(function(e){return function(i){return f(e,de(i))}})),i(t,r))}))}},Ne=function(e){return y((function(i,t){for(var n=i.length,r=t.length,c=Math.min(n,r),o=0;o<c;o++){var a=e.compare(i[o],t[o]);if(0!==a)return a}return qe.compare(n,r)}))},Me=function(e){return{_tag:"Left",left:e}},Xe=function(e){return{_tag:"Right",right:e}},Qe=function(e,i){return f(e,Fe(i))},je=function(e,i){return f(e,Ve(i))},ze="Either",Fe=function(e){return function(i){return Ye(i)?i:Xe(e(i.right))}},Ue=Xe,Ve=function(e){return function(i){return Ye(i)?i:Ye(e)?e:Xe(i.right(e.right))}},Be={URI:ze,map:Qe,ap:je,of:Ue},Ye=N;var We=function(e){return-1===e?1:1===e?-1:0};function Ge(e,i){return Le(e.map(i))}function He(e,i,t,n){const r=(e,i)=>{if(0===e.length)return Le(i.map((e=>Q({1:e[1],2:t(X,Q(e[2]))}))));if(0===i.length)return Le(e.map((e=>Q({1:e[1],2:t(Q(e[2]),X)}))));if(e.length>0&&i.length>0&&I(n)(e[0][1],i[0][1])){const[n,...c]=e,o=n[1],a=n[2];return we({1:o,2:t(Q(a),X)})(r(c,i))}if(e.length>0&&i.length>0&&b(n)(e[0][1],i[0][1])){const[n,...c]=i,o=n[1],a=n[2];return we({1:o,2:t(X,Q(a))})(r(e,c))}if(e.length>0&&i.length>0){const[n,...c]=e,[o,...a]=i,p=n[1],l=n[2],s=o[2];return we({1:p,2:t(Q(l),Q(s))})(r(c,a))}throw new Error("Non exhaustive match in mapOption2")},c=x((e=>e[1]))(n),o=(e=>{const i=Ge(e,(e=>Y(e[2])?Q({1:e[1],2:e[2].value}):X));return 0===i.length?X:Q(i)})(r(be(c)([...e].map((e=>({1:e[0],2:e[1]})))),be(c)([...i].map((e=>({1:e[0],2:e[1]}))))));return V((e=>new Map(e.map((e=>[e[1],e[2]])))))(o)}function Ke(e,i,t,n){const r=x((e=>e[0]))(n),c=be(r)([...i]).reduceRight(((e,i)=>{if(Ye(e)){const n=t(i[1],e.left);return Y(n)?Me(n.value):Xe(i[0])}return e}),Me(e));return B(c)}function $e(e,i){return new Map([...e].map(i))}function Je(e,i){return new Map([...e].filter(i))}function Ze(e){return JSON.stringify(ei(e))}function ei(e){switch(e.kind){case"null":return ni.encode(e);case"string":return ri.encode(e);case"number":return ci.encode(e);case"array":return oi.encode(e);case"object":return ai.encode(e)}}function ii(e){return null===e?ni.decode(e):"number"==typeof e?ci.decode(e):"string"==typeof e?ri.decode(e):Array.isArray(e)?oi.decode(e):ai.decode(e)}const ti=(e,i)=>Me(`Failed to decode. Input was ${JSON.stringify(e)}. Codec type was ${i}`),ni={encode:e=>null,decode:e=>null===e?Xe({kind:"null",value:null}):ti(e,"SimpleNull")},ri={encode:e=>e.value,decode:e=>"string"==typeof e?Xe(i(e)):ti(e,"SimpleString")},ci={encode:e=>e.value,decode:e=>"number"==typeof e?Xe(t(e)):ti(e,"SimpleNumber")},oi={encode:e=>e.value.map(ei),decode:e=>{if(Array.isArray(e)){const i=Re(Be)(ii)(e);return Fe(n)(i)}return ti(e,"SimpleArray")}},ai={encode:e=>{const i=[...e.value.entries()];return Object.assign({},...Array.from(i,(([e,i])=>({[e]:ei(i)}))))},decode:e=>{if(e&&e.constructor===Object){const i=Re(Be)((([e,i])=>f(ii(i),Fe((i=>function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return e}(e,i))))))(Object.entries(e));return Fe((e=>r(new Map([...e]))))(i)}return ti(e,"SimpleObject")}};function pi(e){return f(e,si,V(Ze),G((()=>"<encode error>")))}function li(e){return V(gi)(function(e){switch(e.state.kind){case"top":return Q(i(e.state.error));case"bottom":return X;case"inner":return si(e.state.a)}}(e))}function si(e){return function(e){switch(e.kind){case"numberGroup":case"stringGroup":return mi(e.group);case"tuple":return e.tuple.length>0}}(e.payload)?Q(n(function(e,i){const t=V((e=>we(e)(i)))(e);return G((()=>i))(t)}(V((e=>i(function(e){const i=e=>{switch(e){case"add":return"p";case"mul":return"m";case"max":return"v";case"min":return"n"}},t=e=>1===e[2]?i(e[1]):i(e[1])+JSON.stringify(e[2]);return e.map(t).join("")}(e))))(e.commands),function(e){const n=e=>{switch(e.kind){case"bottom":return{kind:"null",value:null};case"top":return i(e.error);case"inner":return t(e.a)}},c=e=>Ge([ui,qi,e=>f(e,vi,r,Q)],(i=>i(e))),o=e=>Ge([ui,_i,e=>f(e,vi,(e=>$e(e,(([e,i])=>[JSON.stringify(e),i]))),r,Q)],(i=>i(e)));switch(e.kind){case"tuple":return e.tuple.map(n);case"stringGroup":return c(e.group);case"numberGroup":return o(e.group)}}(e.payload)))):X}function mi(e){switch(e.kind){case"unbounded":return e.group.size>0;case"windowed":return e.group.size>0||Y(e.key);case"countLimit":case"uniqueLimit":return e.group.size>0||Y(e.limit)}}function ui(e){switch(e.kind){case"unbounded":return X;case"windowed":return Q(i("w"));case"countLimit":return Q(i(1===e.n?"x":`x${e.n}`));case"uniqueLimit":return Q(i(1===e.n?"u":`u${e.n}`))}}function qi(e){switch(e.kind){case"unbounded":return X;case"windowed":return Q(i(Y(e.key)?e.key.value:""));case"countLimit":case"uniqueLimit":return Q(i(Y(e.limit)?e.limit.value:""))}}function _i(e){switch(e.kind){case"unbounded":return X;case"windowed":return Y(e.key)?Q(t(e.key.value)):Q({kind:"null",value:null});case"countLimit":case"uniqueLimit":return Y(e.limit)?Q(t(e.limit.value)):Q({kind:"null",value:null})}}function vi(e){switch(e.kind){case"unbounded":case"windowed":case"countLimit":case"uniqueLimit":return e.group}}function gi(e){switch(e.kind){case"array":return 0===e.value.length?{kind:"null",value:null}:1===e.value.length?gi(e.value[0]):n(e.value.map(gi));case"object":return f(Je(e.value,(([e,i])=>"null"!==i.kind)),(e=>$e(e,(e=>[e[0],gi(e[1])]))),r);default:return e}}function wi(e){const i=e=>{if(0===e.length)return{kind:"bottom"};const i=(e=>{if(4!==e.length)return X;const[i,t,n,r]=e;if("string"===i.kind&&"string"===t.kind&&"object"===r.kind){const e=j((e=>di(e[1].value)&&fi(e[2].value)))({1:i,2:t});return V((e=>({prim:e[1].value,grp:e[2].value,cutoff:n,m:r.value})))(e)}return X})(e);if(Y(i)){const{prim:e,grp:t,cutoff:n,m:r}=i.value,c=Ai(n,r,hi(t));return"string"==typeof c?p(c):a(w(Ei(e),c))}const t=(e=>{if(3!==e.length)return X;const[i,t,n]=e;if("string"===i.kind&&"object"===n.kind){const e=j((e=>fi(e.value)))(i);return V((e=>({grp:e.value,cutoff:t,m:n.value})))(e)}return X})(e);if(Y(t)){const{grp:e,cutoff:i,m:n}=t.value,r=Ai(i,n,hi(e));return"string"==typeof r?p(r):a(w(X,r))}const n=(e=>{if(2!==e.length)return X;const[i,t]=e;if("string"===i.kind&&"object"===t.kind){const e=j((e=>di(e.value)))(i);return V((e=>({prim:e.value,m:t.value})))(e)}return X})(e);if(Y(n)){const{prim:e,m:i}=n.value;return a(w(Ei(e),_(l(i))))}const r=(e=>{if(1!==e.length)return X;const[i]=e;return"object"===i.kind?Q({m:i.value}):X})(e);if(Y(r)){const{m:e}=r.value;return a(w(X,_(l(e))))}const c=(e=>{if(e.length<1)return X;const[i,...t]=e;if("string"===i.kind){const e=j((e=>di(e.value)))(i);return V((e=>({prim:e.value,rest:t})))(e)}return X})(e);if(Y(c)){const{prim:e,rest:i}=c.value;return a(w(Ei(e),xi(i)))}return a(w(X,xi(e)))},t=e=>"array"===e.kind?Pe(t)(e.value):[e];return"null"===e.kind?g({kind:"bottom"}):g(i(t(e)))}function di(e){const i=e.split("");if(!0==(0===i.length))return!1;{const[e,...t]=i;return-1!=="pmvn".indexOf(e)&&t.every((e=>-1!=="pmvn0123456789".indexOf(e)))}}function fi(e){const i=e.split("");switch(!0){case 0===i.length:return!1;case"w"===i[0]&&void 0===i[1]:return!0;default:{const[e,...t]=i;return-1!=="ux".indexOf(e)&&-1===t.map((e=>!isNaN(parseInt(e)))).indexOf(!1)}}}function Ai(e,i,t){switch(e.kind){case"string":return _(t({1:Q(e.value),2:i}));case"number":case"null":return q(t({1:"null"===e.kind?X:Q(e.value),2:Je($e(i,(([e,i])=>[Number(e),i])),(e=>!isNaN(e[0])))}));default:return"{bad cutoff}"}}function hi(e){const i=e=>i=>u(i[2],i[1],e),t=e=>i=>m(i[2],i[1],e),n=e.split("");switch(!0){case"w"===n[0]&&void 0===n[1]:return e=>s(e[2],e[1]);case"u"===n[0]&&void 0===n[1]:return i(1);case"u"===n[0]&&void 0!==n[1]:return i(parseInt(n.slice(1).join("")));case"x"===n[0]&&void 0===n[1]:return t(1);case"x"===n[0]&&void 0!==n[1]:return t(parseInt(n.slice(1).join("")));default:throw new Error("This should never happen if you use isGroupCommand")}}function Ei(e){return V(c)(oe(yi(e,(e=>{const i=e.split("");if(0===i.length)return X;const[t,...n]=i,r=(e=>{switch(e){case"p":return Q("add");case"m":return Q("mul");case"v":return Q("max");case"n":return Q("min");default:return X}})(t);return V((e=>{const{init:i,rest:t}=(r=e=>{return"number"==typeof(i=parseInt(e))&&isFinite(i)&&Math.floor(i)===i;var i},function(e){var i=Se(Ee(e,r))(e);return{init:i[0],rest:i[1]}})(n);var r;return{1:{1:e,2:0===i.length?1:parseInt(i.join(""))},2:t.join("")}}))(r)}))))}function yi(e,i){const t=i(e);return G((()=>[]))(V((e=>[e[1]].concat(yi(e[2],i))))(t))}function xi(e){return v(e.map(Ii))}function Ii(e){switch(e.kind){case"number":return a(e.value);case"string":return p(e.value);case"null":return{kind:"bottom"};case"object":return p("{object}");case"array":return p("{array}")}}const bi={strategy:(e,i,t)=>n=>{if(W(t))return i;if("delta"===e&&W(i))return X;if(W(i))return t;if(Y(i)&&Y(t))return n(i.value,t.value);throw new Error("Non exhaustive match in combineCommand.strategy")},operation:(e,i,t,n,r,c)=>{const a=Ne(D(c));if("append"===e&&"add"===i)return ke(t,n,Ri("append",r.plus));if("append"===e&&"mul"===i)return ke(t,n,Ri("append",r.times));if("append"===e&&"max"===i)return k(a)(t,n);if("join"===e&&"add"===i)return ke(t,n,Ri("join",k(c)));if("join"===e&&"mul"===i)return ke(t,n,Ri("join",k(c)));if("join"===e&&"max"===i)return k(a)(t,n);if("min"===i)return bi.operation(e,"max",t,n,r,function(e){return y(((i,t)=>We(e.compare(i,t))))}(c));if("delta"===e&&"max"===i)return b(a)(t,n)?t:n.map(o);if("delta"===e)return ke(t,n,((e,i)=>b(D(c))(e,i)?e:{kind:"bottom"}));throw new Error("Non exhaustive match in combineCommand.operation")},extend:(e,i,t,n)=>{if("delta"===e&&"top"===t.kind&&"top"===n.kind)return b(P)(t.error,n.error)?p(t.error):{kind:"bottom"};if("delta"===e&&"bottom"===n.kind)return t;if("delta"===e&&"bottom"===t.kind)return{kind:"bottom"};if("top"===t.kind&&"top"===n.kind)return p(k(P)(t.error,n.error));if("top"===t.kind)return t;if("top"===n.kind)return n;if("inner"===t.kind&&"inner"===n.kind)return i(t.a,n.a);if("bottom"===t.kind)return n;if("bottom"===n.kind)return t;throw new Error("Non exhaustive match in extend")}},ki={plus:(e,i)=>e+i,times:(e,i)=>e*i};function Si(e,i,t,n){if("unbounded"===e.kind&&"unbounded"===i.kind){const r=e.group,c=i.group;return G(o)(V((e=>a(l(e))))(He(r,c,t,n)))}if("windowed"===e.kind&&"windowed"===i.kind){const r=e.key,c=e.group,p=i.key,l=i.group,m=k(U(n))(r,p);return G(o)(V((e=>a(s(e,m))))(He(c,l,t,n)))}if("countLimit"===e.kind&&"countLimit"===i.kind){const r=e.n,c=i.n;if(r===c){const c=e.limit,p=e.group,l=i.limit,s=i.group,u=k(U(n))(c,l);return G(o)(V((e=>a(m(e,u,r))))(He(p,s,t,n)))}return p("Non matching counts")}if("uniqueLimit"===e.kind&&"uniqueLimit"===i.kind){const r=e.n,c=i.n;if(r===c){const c=e.limit,p=e.group,l=i.limit,s=i.group,m=k(U(n))(c,l);return G(o)(V((e=>a(u(e,m,r))))(He(p,s,t,n)))}return p("Non matching counts")}return p("Non matching group types")}function Pi(e,i,t,n,r,c){const a=(e,i)=>({1:he(e)(i).concat(fe(Math.max(0,e-i.length),o)),2:ye(e)(i)}),p=(i,t,n)=>{if(0===i.length)return bi.operation(e,"max",t,n,r,c);if(i.length>0){const[o,...l]=i,s=a(o[2],t),m=s[1],u=s[2],q=a(o[2],n),_=q[1],v=q[2];return bi.operation(e,o[1],m,_,r,c).concat(p(l,u,v))}throw new Error("Non exhaustive match in recurse")};return Ie((l=e=>"bottom"===e.kind,function(e){return e.slice(Ee(e,l))})(Ie(p(i,t,n))));var l}function Oi(i,t,n){return G(e)(Di(i,X)(t,n))}function Di(e,i){const t=i=>(t,n)=>bi.strategy(e,t,n)(Di(e,i)),n=(n,r)=>{if(F(se(h({1:S,2:ue}))).equals(n.commands,r.commands)){const c=((i,n,r)=>{if("stringGroup"===n.kind&&"stringGroup"===r.kind){const e=Si(n.group,r.group,t(i),P);return O(e,(e=>_(Ci(e,P))))}if("numberGroup"===n.kind&&"numberGroup"===r.kind){const e=Si(n.group,r.group,t(i),qe);return O(e,(e=>q(Ci(e,qe))))}if("tuple"===n.kind&&"tuple"===r.kind){const t=Y(i)?i.value:[];return a(v(Pi(e,t,n.tuple,r.tuple,ki,qe)))}throw new Error(`Non matching payload. Got ${n.kind} and ${r.kind}`)})(W(n.commands)?i:n.commands,n.payload,r.payload);return O(c,(e=>w(n.commands,e)))}throw new Error(`Non matching primitive strings. Got ${pi(n)} and ${pi(r)}`)};return(i,t)=>li(g(bi.extend(e,n,wi(i).state,wi(t).state)))}function Li(e,i,t){const n=V((i=>Je(e,(([e,n])=>{return(r=t,function(e,i){return-1!==r.compare(e,i)})(e,i);var r}))))(i);return G((()=>e))(n)}function Ci(e,i){switch(e.kind){case"unbounded":return e;case"windowed":return W(e.key)?e:s(Li(e.group,e.key,i),e.key);case"countLimit":{const t=e.limit,n=e.n,r=e.group,c=(e,i)=>i<=1?X:Q(i-1),o=Ke(n,r,c,i),a=k(U(i))(t,o);return m(Li(r,a,i),a,n)}case"uniqueLimit":{const t=e.limit,n=e.n,r=e.group,c=(e,i)=>{if("object"===e.kind){const t=[...e.value.keys(),...i.keys()],r=new Set(t);return r.size>=n?X:Q(r)}return X},o=Ke(new Set,r,c,i),a=k(U(i))(t,o);return u(Li(r,a,i),a,n)}}}function Ri(e,i){return(t,n)=>bi.extend(e,((e,t)=>a(i(e,t))),t,n)}function Ti(e,i){return Oi("append",e,i)}function Ni(e,i,t,n,r,c,o,a,p){switch(arguments.length){case 1:return e;case 2:return i(e);case 3:return t(i(e));case 4:return n(t(i(e)));case 5:return r(n(t(i(e))));case 6:return c(r(n(t(i(e)))));case 7:return o(c(r(n(t(i(e))))));case 8:return a(o(c(r(n(t(i(e)))))));case 9:return p(a(o(c(r(n(t(i(e))))))));default:for(var l=arguments[0],s=1;s<arguments.length;s++)l=arguments[s](l);return l}}var Mi=function(e){return"Some"===e._tag},Xi={_tag:"None"},Qi=function(e){return{_tag:"Some",value:e}},ji=function(e){return"Left"===e._tag},zi=Object.prototype.hasOwnProperty;function Fi(e){return function(i,t){if(void 0===t){var n=Fi(e);return function(e){return n(i,e)}}for(var r,c=0;c<t.length;c++)if(r=t[c],e.equals(r,i))return!0;return!1}}var Ui=Fi;function Vi(e){var i=Ui(e);return function(t,n){if(void 0===n){var r=Vi(e);return function(e){return r(e,t)}}return t.filter((function(e){return!i(e,n)}))}}var Bi=ji,Yi=function(e){return function(i){return Bi(i)?e(i.left):i.right}};var Wi=function(e){return function(i){return!e(i)}},Gi=Xi,Hi=Qi;var Ki=Mi;var $i={equals:function(e,i){return e===i}},Ji=function(e){for(var i in e)if(zi.call(e,i))return!1;return!0};function Zi(e){return function(i){var t={},n=!1;for(var r in i)if(zi.call(i,r)){var c=i[r];e(r,c)?t[r]=c:n=!0}return n?t:i}}var et=function(e){return Zi((function(i,t){return e(t)}))};var it=Ji;var tt=et;tt(Wi(it));function nt(...e){return e.reduce(((e,i)=>Object.assign(Object.assign({},e),i)),{})}Wi((function(e){return 0===e.length}));function rt(e,i){const t=Object.keys(e),n=t.length,r={};for(let c=0;c<n;c++){const n=t[c],o=i(n,e[n]);Ki(o)&&(r[n]=o.value)}return r}function ct(e){var i;return["SegmentEntry","SegmentExit"].includes(e.name)&&void 0!==(null===(i=e.properties)||void 0===i?void 0:i.segment_number)}const ot="process";let at=!1,pt=[],lt=!1;const st={};let mt={getCurrentTime:()=>new Date,getCurrentSession:()=>"",getCurrentView:()=>"",getSegments:()=>({}),get1PSegments:()=>({}),get3PSegments:()=>({}),getSegmentsArray:()=>({}),getLookalikeModels:()=>({}),setSegmentActivation:()=>{}};const ut=e=>{const i=mt.get1PSegments(),t={"1p":Object.assign(Object.assign({},i["1p"]),e["1p"])};mt.get1PSegments=()=>t},qt=e=>{const i=Object.assign({},e);delete i["1p"],mt.get3PSegments=()=>i},_t=()=>{const e=At.concat(mt.get1PSegments(),mt.get3PSegments()),i=ft(e);mt.getSegments=()=>e,mt.getSegmentsArray=()=>i};function vt(e,i,t,n,r,c,o){at=!1,pt=[],lt=!1;const a=ft(n.segments);mt={getCurrentTime:()=>new Date,getCurrentSession:()=>n.sessionId,getCurrentView:()=>n.viewId,get1PSegments:()=>n.segments,get3PSegments:()=>({}),getSegments:()=>At.concat(mt.get1PSegments(),mt.get3PSegments()),getSegmentsArray:()=>a,getLookalikeModels:()=>n.lookalikeModels,setSegmentActivation:(e,i)=>{}};const p=rt(i,((i,t)=>{var n;return(null===(n=e[i])||void 0===n?void 0:n.checksum)===t?Gi:Hi(((e,i)=>{const t=c[e].interpret(null,mt);return Object.assign({checksum:i},!1===t.result?{}:{result:t})})(i,t))}));if(0===r.length)return{diff:Object.assign(Object.assign({},e),p),errors:[]};if(0===Object.keys(p).length)return{diff:e,errors:[]};{const n=gt(p,i,t,r,"bootstrap",c,o);return{diff:Object.assign(Object.assign({},e),n.diff),errors:n.errors}}}function gt(e,i,t,n,r,c,o){let a={diff:{},errors:[]};const p=n.length,l=()=>n.filter((e=>{return i=o["!UpdateLookalikeModels"]||[],ct(t=e)&&i.includes(t.properties.segment_number.toString());var i,t})).length===n.length?"lookalikeTransition":"transition",s=(e,i,t)=>"transition"===e?t===i-1?l():"event":e;for(let l=0;l<p;l++){const m=n[l],u=s(r,p,l),q=wt(Object.assign(Object.assign({},e),a.diff),i,t,m,u,c,o);a={diff:Object.assign(Object.assign({},a.diff),q.diff),errors:a.errors.concat(q.errors)}}return a}function wt(i,t,n,r,c,o,a){"bootstrap"!==c&&(mt.setSegmentActivation=dt(i,t));const p=e,l=(e,i)=>{const t=o[e],c=t.lift(r,mt),a=Ni(ii(i.state||null),Yi(p)),l=Ni(ii(c),Yi(p),(e=>Ti(a,e))),s=n[e],m=s?Ni(ii(s),Yi(p),(e=>Ti(l,e))):l,u=ei(l),q=t.interpret(ei(m),mt),_=i.activations||{};return Object.assign(Object.assign(Object.assign({checksum:i.checksum},null===u?{}:{state:u}),!1===q.result?{}:{result:q}),0===Object.keys(_).length?{}:{activations:_})},s=[],m={},u=function(e,i,t,n,r){switch(e){case"event":const e=(null==r?void 0:r[n.name])||[];if(at)return e;{pt.push(n);const i=[...r["!UpdateSecondPartyData"]||[],...r["!UpdateThirdPartyData"]||[]];return Vi($i)(e,i)}case"lookalikeTransition":return(null==r?void 0:r[n.name])||[];case"transition":const c=(null==r?void 0:r[n.name])||[];if(lt){const e=r["!UpdateLookalikeModels"]||[];return c.concat(e)}return c;case"bootstrap":const o=((null==r?void 0:r[n.name])||[]).filter((e=>void 0!==i[e]));return Vi($i)(o,[...at?[]:(r["!UpdateSecondPartyData"]||[]).concat(r["!UpdateThirdPartyData"]||[]),...lt?[]:r["!UpdateLookalikeModels"]||[]]);case"updateExternalState":return Object.keys(t);case"updateEnvironment":return[...r["!UpdateLookalikeModels"]||[],...r["!UpdateSecondPartyData"]||[],...r["!UpdateThirdPartyData"]||[]];case"updateLAL":return r["!UpdateLookalikeModels"]||[];case"updateTPD":return[...r["!UpdateSecondPartyData"]||[],...r["!UpdateThirdPartyData"]||[]]}}(c,i,n,r,a),q=u.length;!function(e){ct(e)&&(ut({"1p":{[e.properties.segment_number]:"SegmentEntry"===e.name}}),_t())}(r);for(let e=0;e<q;e++){const n=u[e],r=i[n]||{checksum:t[n]};let c=r;try{c=l(n,r)}catch(e){s.push(`Failed to interpret query ${n}. Got ${e}`)}m[n]=c}return{diff:m,errors:s}}function dt(e,i){return(t,n,r)=>{if(!(r in e)){const t=i[r];if(void 0===t)throw new Error("Checksum not in internalStateMap");e[r]={checksum:t}}"activations"in e[r]||(e[r].activations={});t in e[r].activations||(e[r].activations[t]=[]),e[r].activations[t]=[...e[r].activations[t],n]}}function ft(e){return Object.keys(e).reduce(((i,t)=>{const n=Object.keys(e[t]),r=[];return n.forEach((i=>{!0===e[t][i]&&r.push(i)})),i[t]=r,i}),{})}const At={empty:{},concat:(e,i)=>{const t=Object.assign({},e);for(const[e,n]of Object.entries(i))t[e]?t[e]=nt(t[e],n):t[e]=n;return t}};const ht=(e,i)=>{if("noop"===e.type)return{diff:{},errors:[]};const t=(e,...t)=>[e.stateMap,...e.payload,...t,i.rawQueries,i.queriesByEvent];return"bootstrap"===e.type?vt(...t(e)):"updateEnvironment"===e.type?function(e,i,t,n,r,c){return n.segments&&(ut(n.segments),qt(n.segments),_t(),mt.setSegmentActivation=dt(e,i)),n.lookalikeModels&&(lt=!0),n.segments&&(e=>{const i=Object.keys(e).length,t="1p"in e;return t&&i>1||!t&&i>0})(n.segments)&&(at=!0),mt=Object.assign(Object.assign(Object.assign(Object.assign({},mt),n.viewId?{getCurrentView:()=>n.viewId}:{}),n.sessionId?{getCurrentSession:()=>n.sessionId}:{}),n.lookalikeModels?{getLookalikeModels:()=>n.lookalikeModels}:{}),gt(e,i,t,pt.length>0?pt:[st],"updateEnvironment",r,c)}(...t(e)):"updateLAL"===e.type?function(e,i,t,n,r,c){return mt.getLookalikeModels=()=>n,lt=!0,wt(e,i,t,st,"updateLAL",r,c)}(...t(e)):"updateTPD"===e.type?function(e,i,t,n,r,c){qt(n),_t(),mt.setSegmentActivation=dt(e,i),at=!0;const o=gt(e,i,t,pt.length>0?pt:[st],"updateTPD",r,c);return pt=[],o}(...t(e)):"updateExternalState"===e.type?function(e,i,t,n,r){return wt(e,i,t,st,"updateExternalState",n,r)}(...t(e)):e.type===ot?gt(...t(e,"event")):"processTransitions"===e.type?function(e,i,t,n,r,c){return gt(e,i,t,n,"transition",r,c)}(...t(e)):void 0};const Et=function(){var e=this&&this.__assign||function(){return e=Object.assign||function(e){for(var i,t=1,n=arguments.length;t<n;t++)for(var r in i=arguments[t])Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);return e},e.apply(this,arguments)},i=this&&this.__values||function(e){var i="function"==typeof Symbol&&Symbol.iterator,t=i&&e[i],n=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")},t=this&&this.__read||function(e,i){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,r,c=t.call(e),o=[];try{for(;(void 0===i||i-- >0)&&!(n=c.next()).done;)o.push(n.value)}catch(e){r={error:e}}finally{try{n&&!n.done&&(t=c.return)&&t.call(c)}finally{if(r)throw r.error}}return o},n=this&&this.__spreadArray||function(e,i,t){if(t||2===arguments.length)for(var n,r=0,c=i.length;r<c;r++)!n&&r in i||(n||(n=Array.prototype.slice.call(i,0,r)),n[r]=i[r]);return e.concat(n||Array.prototype.slice.call(i))},r=function(){function r(e){return"number"==typeof e?c[e]:e}function s(e){return"number"==typeof e?o[e]:e}function m(e){return"number"==typeof e?a[e]:e}function u(e){switch(e.length){case 0:return null;case 1:return e[0];default:return e}}function q(e,i,t){void 0===t&&(t=g);var n=m(i).reduce((function(e,i){return e&&null!=e[i]?e[i]:null}),e);return null===n?null:t(n)}function _(e,i){var t=m(i).slice();return t.unshift(e),t}function v(e,i,t){return void 0===t&&(t=g),q(e,_("properties",i),t)}var g=function(e){return e},w=function(e){return!0};function d(e,i){return function(t){for(var n=0;n<e.length;n++){if((e[n](t)||!1)===i)return i}return!i}}var f=function(e){return function(i){return!e(i)}},A=function(e,i){return function(t){return t>=e&&t<=i}},h=function(e){return new Date(e).getTime()},E=function(e){return q(e,["time"],h)},y=function(e,i){return q(i,e,h)},x=function(e,i,t,n,r,c){return function(o){var a=q(o,e,(function(e){return e.filter(n).map((function(e){return q(e,i)})).reduce(r,c)}));return t(null===a?c:a)}};function I(e,t,n,r){var c,o;try{for(var a=i(e),p=a.next();!p.done;p=a.next()){var l=p.value;if(n(l)&&t(l)===r)return r}}catch(e){c={error:e}}finally{try{p&&!p.done&&(o=a.return)&&o.call(a)}finally{if(c)throw c.error}}return!r}var b=function(e){return function(i){return("string"==typeof e||"number"==typeof e)&&"string"==typeof i&&i.toLowerCase().indexOf(s(e).toLowerCase())>-1}},k=function(e){return function(i){return null!=i&&Array.isArray(i)&&i.indexOf(e)>=0}};function S(e,i,t,n,r){var c=q(e.getSegments(),[i,t])||!1;return r&&(n||c)&&e.setSegmentActivation(i,t,r),c}function P(e,i,t){return q(e.getSegments(),[i,t])||!1}function O(e,i,n){return void 0===n&&(n=18e5),function(r){return{a:{m:function(e,i){return[i[0],r.a.m(null!=e[0]&&e[0][0]===i[0][0]?e[1]:r.a.z,i[1])]},z:[[],r.a.z]},p:function(t,n){return[[e(t)],q(n,i)===e(t)?r.p(t,n):r.a.z]},r:function(i,t){return r.r(i,t[0]!=[]&&t[0][0]===e(i)?t[1]:r.a.z)},d:r.d.sq||{l:function(c,o){var a=q(c,i),p=e(o);if(a!==p)return null;var l=r.d.l(c,o);if(!(Array.isArray(l)&&l.length>1))return null;var s=t(l),m=s[0],u=s.slice(1),_=+(E(c)||o.getCurrentTime()),v=Math.floor(_/n),g={};return g[v]={},g[v][p]=1===u.length?u[0]:u,[m,"u",null,g]},i:function(i,t){if(!Array.isArray(i)||"object"!=typeof i[3])return[[],r.a.z];var n=e(t),c=i[3];return[[n],Object.keys(c).map((function(e){return c[e][n]})).filter((function(e){return e})).map((function(e){return r.d.i([i[0]].concat(e))})).reduce(r.a.m,r.a.z)]}}}}}var D=O((function(e){return e.getCurrentSession()}),["session_id"],18e5),L=O((function(e){return e.getCurrentView()}),["view_id"],3e5);function C(e,i,c,o){return void 0===o&&(o=1),{a:{m:function(e,i){return e.concat(i).slice(-c)},z:[]},p:function(t,n){return q(n,["name"])===r(i)?[e.p(t,n)]:[]},r:function(i,t){return e.r(i,t.reduce((function(i,t){return e.a.m(i,t)}),e.a.z))},d:e.d.ftn||{l:function(i,t){var n,r=e.d.l(i,t),a=q(i,["time"],h)*o;return r&&[r[0],"x"+c,null,(n={},n[a]=2==r.length?r[1]:r.slice(1),n)]},i:function(i,r){return i?Object.keys(i[3]||{}).sort().reverse().map((function(e){return Array.isArray(e)?n([i[0]],t(i[3][e]),!1):[i[0],i[3][e]]})).map((function(i){return e.d.i(i,r)})):[]}}}}var R=function(e,i){return null===e?null==i?null:{b:i}:null==i?{a:e}:{a:e,b:i}},T=function(e,i){return e&&i?e(i):null},N=function(e,i,t){if(t&&t.result&&Array.isArray(t.result)){var n=T(e.d&&e.d.m,{result:t.result[0]}),r=T(i.d&&i.d.m,{result:t.result[1]});return R(n,r)}return null};function M(e,i){var t=p[e];if(!i||!t)return!1;if(!t.length)return!0;for(var n=0,r=!1,c=function(e){for(var i=[],t=0;t<e.length;++t){var n=e.charCodeAt(t);if(n>=55296&&n<=56319){var r=e.charCodeAt(t+1);if(r>=56320&&r<=57343){i.push(e.slice(t,t+2)),++t;continue}}i.push(e.charAt(t))}return i}(i.toLowerCase()),o=0;o<c.length;o++){for(var a=c[o];n>0&&!t[n][a];)n=t[n].su?t[n].su:0;if(t[n][a]&&(r=!!t[n=t[n][a]].te))break}return r}return{q:function(e){return{lift:function(i,t){return e.d.l(i,t)},interpret:function(i,t){return function(i,t){return{result:e.r(i,t)}}(t,e.d.i(i,t))},migrate:function(i){return i&&e.d.m?e.d.m(i):null},m:e.a.m,z:e.a.z,p:e.p,r:e.r,i:e.d.i}},a:function(e){return d(e,!1)},acq:function(e,i){return{p:function(t,n){return[e.p(t,n),i.p(t,n)]},r:function(t,n){return e.r(t,n[0])&&i.r(t,n[1])},a:{z:[e.a.z,i.a.z],m:function(t,n){return[e.a.m(t[0],n[0]),i.a.m(t[1],n[1])]}},d:{l:function(t,n){return R(e.d.l(t,n),i.d.l(t,n))},i:function(t,n){return t?[e.d.i(t.a||null,n),i.d.i(t.b||null,n)]:[e.a.z,i.a.z]},m:function(t){return N(e,i,t)}}}},acs:M,acs_:function(e,i){return function(t){return M(i,q(t,e))}},af_i:function(e,i,t){return void 0===t&&(t=w),function(n){return q(n,e,(function(e){return I(e,i,t,!1)}))&&!0}},af_l:function(e,i,t){return void 0===t&&(t=w),function(n){var r=q(n,e,(function(e){return e.filter(t).length}));return i(null===r?0:r)}},af_m:function(e,i,t,n){return void 0===n&&(n=w),function(r){var c=q(r,e,(function(e){return e.filter(n)}));return null===c||0===c.length?t(0):t(c.map((function(e){return q(e,i)})).reduce((function(e,i){return e+i}),0)/c.length)}},af_n:function(e,i,t,n){return void 0===n&&(n=w),x(e,i,t,n,(function(e,i){return Math.min(e,i)}),Number.POSITIVE_INFINITY)},af_p:function(e,i,t,n){return void 0===n&&(n=w),x(e,i,t,n,(function(e,i){return e*i}),1)},af_s:function(e,i,t,n){return void 0===n&&(n=w),x(e,i,t,n,(function(e,i){return e+i}),0)},af_u:function(e,i,t){return void 0===t&&(t=w),function(n){return q(n,e,(function(e){return I(e,i,t,!0)}))||!1}},af_x:function(e,i,t,n){return void 0===n&&(n=w),x(e,i,t,n,(function(e,i){return Math.max(e,i)}),Number.NEGATIVE_INFINITY)},as:function(e,i,t){var n=_("properties",i);return function(i){for(var r=q(i,n),c=t.length,o=!0,a=0;a<c;a++){var p=t[a];if(!(o=e(p)(r)))break}return o}},c:k,c_:function(e,i){return function(t){return k(i)(q(t,e))}},cl_:function(e,i){return function(t){return k(s(i))(q(t,e))}},cx:function(e){return function(i){return k(s(e))(i)}},ctu:function(e,i,t,n){return{a:n?{m:function(e,i){return e.filter((function(e){return-1===i.indexOf(e)})).concat(i).slice(-n)},z:[]}:{m:function(e,i){return e.filter((function(e){return-1===i.indexOf(e)})).concat(i)},z:[]},p:function(n,c){return q(c,["name"])===r(e)&&i(c)?q(c,t):[]},r:function(e,i){return i},d:{l:function(){return null},i:function(){return[]}}}},ctv:function(i,t,n,c){function o(e,i){var t,n=function(e){return{k:e.k,c:1+e.c}},r={arr:[],add:{k:i,c:1}};return i?(t=e.reduce((function(e,i){return e.add.k===i.k?{arr:e.arr,add:n(i)}:{arr:e.arr.concat(i),add:e.add}}),r)).arr.concat(t.add):e}return{a:c?{m:function(e,i){return o(e,i).slice(-c)},z:[]}:{m:function(e,i){return o(e,i)},z:[]},p:function(e,c){return q(c,["name"])===r(i)&&t(c)?q(c,n):null},r:function(i,t){return t.reduce((function(i,t){var n;return e(e({},i),((n={})[t.k]=t.c,n))}),{})},d:{l:function(e){return null},i:function(e){return[]}}}},ctw:function(e,i,t,n){return{a:n?{m:function(e,i){return e.concat(i).slice(-n)},z:[]}:{m:function(e,i){return e.concat(i)},z:[]},p:function(n,c){return q(c,["name"])===r(e)&&i(c)?q(c,t):[]},r:function(e,i){return i},d:{l:function(){return null},i:function(){return[]}}}},cw:function(e,i,t){return void 0===t&&(t=g),{a:{m:function(e,i){return e+i},z:0},p:function(t,n){return q(n,["name"])===r(e)&&i(n)?1:0},r:function(e,i){return t(i)},d:{l:function(t){return q(t,["name"])===r(e)&&i(t)?["p",1]:null},i:function(e){return e?Array.isArray(e)?e.slice(-1)[0]:e:0},m:function(e){return e&&e.result?["p",e.result]:null}}}},e:function(e){return function(i){return i===e}},e_:function(e,i){return function(t){return q(t,e)===i}},fm:function(e,i){return{p:i.p,r:function(t,n){return e(i.r(t,n))},a:i.a,d:i.d}},ftn:function(e,i,t){return{a:{m:function(e,i){return e.concat(i.slice(0,t-e.length))},z:[]},p:function(t,n){return q(n,["name"])===r(i)?[e.p(t,n)]:[]},r:function(i,t){return e.r(i,t.reduce((function(i,t){return e.a.m(i,t)}),e.a.z))},d:C(e,i,t,-1).d}},fw:function(e,i,t,n){return void 0===n&&(n=g),{a:{m:function(e,i){return null===e?i:e},z:null},p:function(n,c){return q(c,["name"])===r(e)&&i(c)?q(c,t):null},r:function(e,i){return i},d:{l:function(t){return q(t,["name"])===r(e)&&i(t)?["p",1]:null},i:function(e){return e?Array.isArray(e)?e.slice(-1)[0]:e:0},m:function(e){return e&&e.result?["p",e.result]:null}}}},g:function(e){return function(i){return i>e}},g_:function(e,i){return function(t){return q(t,e)>i}},gb:function(e,i,t){return{a:{m:function(t,n){var r=Object.keys(t).concat(Object.keys(n)).filter((function(e,i,t){return t.indexOf(e)===i})).sort((function(e,i){return Math.max(q(t,[i,1]),q(n,[i,1]))-Math.max(q(t,[e,1]),q(n,[e,1]))})).slice(0,i).reduce((function(i,r){var c=e.a.m(q(t,[r,0])||e.a.z,q(n,[r,0])||e.a.z);return i[r]=[c,Math.max(q(t,[r,1]),q(n,[r,1]))],i}),{});return r},z:{}},p:function(i,n){var r,c,o=q(n,_("properties",t)),a=e.p(i,n);return null==o||(null==(c=a)||"object"==typeof c&&0===Object.keys(c).length||c===e.a.z)?{}:((r={})[o]=[a,q(n,["time"],h)],r)},r:function(i,t){var n={};return Object.keys(t).forEach((function(r){return n[r]=e.r(i,t[r][0])})),n},d:{l:function(){return null},i:function(){return{}}}}},ge:function(e){return function(i){return i>=e}},ge_:function(e,i){return function(t){return q(t,e)>=i}},i_:g,ifp:function(e){return{a:{m:function(e,i){return i},z:null},p:function(e){return null},r:function(i,t){return function(i){return P(i,"1p",e)}(i)},d:{l:function(e,i){return null},i:function(e){return null}}}},isp:function(e,i,t,n){return{a:{m:function(e,i){return i},z:!1},p:function(t,n){return P(t,e,i)},r:function(r,c){return S(r,e,i,t,n)},d:{l:function(e,i){return null},i:function(e){return Array.isArray(e)&&(!!+e[2]||!1)}}}},itp:function(e,i,t,n){return{a:{m:function(e,i){return i},z:!1},p:function(t,n){return P(t,e,i)},r:function(r,c){return S(r,e,i,t,n)},d:{l:function(e,i){return null},i:function(e){return Array.isArray(e)&&(!!+e[2]||!1)}}}},k:q,l:function(e){return function(i){return i<e}},l_:function(e,i){return function(t){var n=q(t,e);return null!==n&&n<i}},le:function(e){return function(i){return i<=e}},le_:function(e,i){return function(t){var n=q(t,e);return null!==n&&n<=i}},lm:function(e,i){var t=function(i){return function(e,i,t){var n,r=e||{},c=i[t]||{},o=(c["1p"]||{}).const||0;return Object.keys(r).forEach((function(e){r[e].forEach((function(i){var t=(c[e]||{})[i]||0;o+=t}))})),n=o,1/(1+Math.pow(Math.E,-n))}(i.getSegmentsArray(),i.getLookalikeModels(),e)};return{a:{m:function(e,i){return i},z:null},p:function(e){return null},r:function(e,n){return i(t(e))},d:{l:function(e,i){return null},i:function(e){return null}}}},ltn:C,mnw:function(e,i,t,n){void 0===n&&(n=g);var c=Number.POSITIVE_INFINITY;return{a:{m:function(e,i){return e<i?e:i},z:c},p:function(n,o){return q(o,["name"])===r(e)&&i(o)?q(o,t):c},r:function(e,i){return n(i)},d:{l:function(n){return q(n,["name"])===r(e)&&i(n)?["n",q(n,t)]:null},i:function(e){return e?Array.isArray(e)?e.slice(-1)[0]:e:c}}}},mxw:function(e,i,t,n){void 0===n&&(n=g);var c=Number.NEGATIVE_INFINITY;return{a:{m:function(e,i){return e>i?e:i},z:c},p:function(n,o){return q(o,["name"])===r(e)&&i(o)?q(o,t):c},r:function(e,i){return n(i)},d:{l:function(n){return q(n,["name"])===r(e)&&i(n)?["v",q(n,t)]:null},i:function(e){return e?Array.isArray(e)?e.slice(-1)[0]:e:c}}}},n0:f(g),n:function(e){return function(i){return i!==e}},nt:f,n_:function(e,i){return function(t){return q(t,e)!==i}},o:function(e){return d(e,!0)},ocq:function(e,i){return{p:function(t,n){return[e.p(t,n),i.p(t,n)]},r:function(t,n){return e.r(t,n[0])||i.r(t,n[1])},a:{z:[e.a.z,i.a.z],m:function(t,n){return[e.a.m(t[0],n[0]),i.a.m(t[1],n[1])]}},d:{l:function(t,n){return R(e.d.l(t,n),i.d.l(t,n))},i:function(t,n){return t?[e.d.i(t.a||null,n),i.d.i(t.b||null,n)]:[e.a.z,i.a.z]},m:function(t){return N(e,i,t)}}}},oe:function(e){for(var i=Object.keys(e),t=i.length,n=new Array(t);t--;)n[t]=[i[t],e[i[t]]];return n},os:function(e,i,t){var n=_("properties",i);return function(i){for(var r=q(i,n),c=t.length,o=!1,a=0;a<c;a++){var p=t[a];if(o=e(p)(r))break}return o}},pacs:function(e,i){return function(t){return M(i,v(t,e))}},pb:function(e,i,t){return function(n){return A(i,t)(v(n,e))}},pc:function(e,i){return function(t){var n=v(t,e);return null!=n&&Array.isArray(n)&&n.indexOf(i)>=0}},pc_:function(e,i){return function(t){var n=v(t,e),r=s(i);return null!=n&&Array.isArray(n)&&n.indexOf(r)>=0}},pe:function(e,i){return function(t){return v(t,e)===i}},pg:function(e,i){return function(t){return v(t,e)>i}},pge:function(e,i){return function(t){return v(t,e)>=i}},pl:function(e,i){return function(t){var n=v(t,e);return null!==n&&n<i}},ple:function(e,i){return function(t){var n=v(t,e);return null!==n&&n<=i}},pn:function(e,i){return function(t){return v(t,e)!==i}},ps:function(e,i){return function(t){return b(i)(v(t,e))}},pw:function(e,i,t,n){return void 0===n&&(n=g),{a:{m:function(e,i){return e*i},z:1},p:function(n,c){return q(c,["name"])===r(e)&&i(c)?q(c,t):1},r:function(e,i){return n(i)},d:{l:function(n){return q(n,["name"])===r(e)&&i(n)?(c=q(n,t))>=1?["m2p",c]:c>0?["m2p",null,1/c]:0==c?["m2p",0]:c>-1?["m2p",null,1/c,1]:["m2p",c,null,1]:null;var c},i:function(e){return e?Array.isArray(e)?0===(i=e.slice(1))[0]?0:Math.pow(-1,i[2]||0)*(i[0]||1)/(i[1]||1):e:1;var i}}}},ref:function(e){return function(i){return l[e](i)}},s:b,s_:function(e,i){return function(t){return b(i)(q(t,e))}},scq:function(e,i,t){return void 0===t&&(t=g),{p:function(t,n){return[e.p(t,n),i.p(t,n)]},r:function(n,r){return t(e.r(n,r[0])+i.r(n,r[1]))},a:{z:[e.a.z,i.a.z],m:function(t,n){return[e.a.m(t[0],n[0]),i.a.m(t[1],n[1])]}},d:{l:function(t,n){return R(e.d.l(t,n),i.d.l(t,n))},i:function(t,n){return t?[e.d.i(t.a||null,n),i.d.i(t.b||null,n)]:[e.a.z,i.a.z]},m:function(t){return N(e,i,t)}}}},sq:D,sw:function(e,i,t,n){return void 0===n&&(n=g),{a:{m:function(e,i){return e+i},z:0},p:function(n,c){return q(c,["name"])===r(e)&&i(c)?q(c,t):0},r:function(e,i){return n(i)},d:{l:function(n){return function(t){return q(t,["name"])===r(e)&&i(t)}(n)?(c=q(n,t))<0?["p2",null,-c]:["p2",c]:null;var c},i:function(e){return e?Array.isArray(e)?((i="p2"===e[0]?e.slice(1):e)[0]||0)-(i[1]||0):e:0;var i}}}},t:w,tb:function(e,i){return function(t){return A(e,i)(E(t))}},te:function(e){return function(i){return E(i)===e}},te_:function(e,i){return function(t){return y(e,t)===i}},tg:function(e){return function(i){return E(i)>e}},tg_:function(e,i){return function(t){return y(e,t)>i}},tge:function(e){return function(i){return E(i)>=e}},tge_:function(e,i){return function(t){return y(e,t)>=i}},ti:h,tl:function(e){return function(i){return E(i)<e}},tl_:function(e,i){return function(t){return y(e,t)<i}},tle:function(e){return function(i){return E(i)<e}},tle_:function(e,i){return function(t){return y(e,t)<i}},tn:function(e){return function(i){return E(i)!==e}},tn_:function(e,i){return function(t){return y(e,t)!==i}},tw:function(e,i,r){var c=r||100,o=Math.ceil(i/c),a=function(e){return Math.floor(e/o)},p=function(e,t,n){var r;return[a(e-i),(r={},r[a(t)]=n,r)]},l=function(i,t){var n=Math.max(i[0],t[0]),r=Object.keys(i[1]).filter((function(e){return e>=n})).concat(Object.keys(t[1]).filter((function(e){return e>=n}))).filter((function(e,i,t){return t.indexOf(e)===i})).reduce((function(n,r){var c=e.a.m(i[1][r]||e.a.z,t[1][r]||e.a.z);return c!==e.a.z&&(n[r]=c),n}),{});return[n,r]},s=[Number.NEGATIVE_INFINITY,{}],m=function(e){var i=function(i){return i.map((function(i){var n=t(i,3),r=n[0],c=(n[1],n[2]);return p(e.t,c,r)})).reduce(l,s)};return l(i(e.in),i(e.out))},_=function(i){if(void 0!==i.result)return _(i.result);if(void 0!==i.w)return _(m(i));var n=t(i,2),r=(n[0],n[1]),c=null,o={};for(var a in r){var p=e.d.m({result:r[a]});p&&Array.isArray(p)&&(c=p[0],o[a]=u(p.slice(1)))}return c&&[c,"w",i[0],o]};return{a:{m:function(e,i){var t=e.w?m(e):e;return l(t,i)},z:s},p:function(i,t){return p(i.getCurrentTime(),q(t,["time"],h),e.p(i,t))},r:function(i,t){var n=(t.w?m(t):t)[1];return e.r(i,Object.keys(n).reduce((function(i,t){return e.a.m(i,n[t])}),e.a.z))},d:e.d.tw||{l:function(i,r){var c=e.d.l(i,r);return c&&n([c[0],"w"],t(p(r.getCurrentTime(),q(i,["time"],h),c.slice(1))),!1)},i:function(t,n){var r=Array.isArray(t)?t:[],c=n.getCurrentTime(),o=a(c-i);return[r[2]||null,Object.keys(r[3]||{}).map((function(i){var t;return(t={})[i]=e.d.i(r[3][i],n),t})).reduce((function(e,i){return Object.keys(i).filter((function(e){return parseInt(e)>=o})).forEach((function(t){return e[t]=i[t]})),e}),{})]},m:e.d.m&&_}}},vgw:function(e,i,t,n){void 0===n&&(n=g);var c={v:0,k:0};return{a:{m:function(e,i){var t=e.k+i.k;return{v:t?e.v+i.k*(i.v-e.v)/t:0,k:t}},z:c},p:function(n,o){return q(o,["name"])===r(e)&&i(o)?{v:q(o,t),k:1}:c},r:function(e,i){return n(i.v)},d:{l:function(n){return q(n,["name"])===r(e)&&i(n)?0==(c=q(n,t))?["p3",1]:c<0?["p3",1,null,-c]:["p3",1,c]:null;var c},i:function(e){return e?Array.isArray(e)?{v:(((i=e.slice(1))[1]||0)-(i[2]||0))/(i[0]||1),k:i[0]||0}:void 0:c;var i}}}},vq:L,w:function(e){return function(i){return i===s(e)}},x:function(e){return function(i){return i!==s(e)}},y:function(e,i){return function(t){return v(t,e)===o[i]}},y_:function(e,i){return function(t){return q(t,e)===o[i]}},z:function(e,i){return function(t){return v(t,e)!==o[i]}},z_:function(e,i){return function(t){return q(t,e)!==o[i]}}}}(),c=["Pageview","PageviewComplete","SegmentEntry","PixelTracking","SlotClicked"],o=["/technology and computing/consumer electronics/tv and video equipment","blog","rent","/hp/rent","/hp/sale","/ldp/sale","/ldpqv/rent","/ldpqv/sale","/srplist/rent","/srplist/sale","/srpmap/rent","/srpmap/sale","FIN/CALC/RENTBUY","blog2/advice/rent","blog2/video/rent","https://www.realtor.com/mortgage/tools/rent-or-buy-calculator","rdc2/ldp/rent","rdc3/hp/rent","rdc3/ldpqv/rent","rdc3/srplist/rent","rdc3/srpmap/rent","/art and entertainment/movies and tv/comedies","/art and entertainment/movies and tv/romantic comedies","/art and entertainment/music/music genres/classical music","/art and entertainment/music/music genres/opera","/art and entertainment/music/music genres/pop music","/food and drink/healthy eating","/food and drink/vegetarian","LDP (Submitted lead)","MYHOME","fore","ldp","srp","/art and entertainment/books and literature","/art and entertainment/books and literature/poetry","/art and entertainment/comics and animation","/art and entertainment/dance","/art and entertainment/movies and tv","/art and entertainment/movies and tv/animated","/art and entertainment/movies and tv/children\'s","/art and entertainment/movies and tv/documentaries","/art and entertainment/movies and tv/reality","/art and entertainment/movies and tv/television","/art and entertainment/music/music genres/soundtracks","/art and entertainment/shows and events/classical concert","/art and entertainment/theatre","/automotive and vehicles/cars/luxury","/automotive and vehicles/motorcycles","/business and industrial","/business and industrial/fashion industry","/education/adult education","/education/language learning","/family and parenting","/finance/accounting and auditing/tax preparation and planning","/finance/financial news","/food and drink/dining out","/food and drink/food/fruits and vegetables","/food and drink/food/salads","/food and drink/vegan","/health and fitness","/hobbies and interests/arts and crafts/photography","/hobbies and interests/birdwatching","/home and garden/gardening and landscaping","/home and garden/home improvement and repair","/pets/birds","/pets/large animals","/society/crime","/society/dating","/sports/diving","/sports/horse racing","/sports/horses","/sports/olympics/paralympic games","/sports/skiing","/sports/volleyball/beach volleyball","/style and fashion/beauty/cosmetics","55PLUS","BOATRV","California","FIXER","GOLF","LDP Lead Form (Clicked CSMA checkbox)","North Carolina","POOL","SPA","SRP Moving Cost Calc (Submitted moving lead)",\'Sellers Marketplace (Clicked "Find an agent" button)\',"TLC","TXTLDP1","WATER","const","fin","hp","imprv","nh","rdc","sale","sell"],a=[["classifications_watson","taxonomy_labels"],["geo_info","province"],["realtor","st"],["trackingEventName"],["realtor","unitName"],["segment_number"],["client","url"],["realtor","pageType"],["realtor","searchedMaxPrice"],["realtor","searchedMinPrice"],["creditScore"],["realtor","postmove"],["realtor","premove"],["client","domain"],["geo_info","city"],["realtor","propertyType"],["realtor","searchedPropertyFeaturesList"],["realtor","WordpressTag"],["realtor","bedrooms"],["realtor","propertyFeatures"],["section"],["slot","ad_unit_path"]],p=[],l=[r.os(r.s,4,[3,6,8,10]),r.as(r.s,4,[1,96]),r.os(r.s,4,[13,14,16,17,18,19,20]),r.os(r.s,4,[89,93]),r.os(r.s,4,[4,5,7,9,11])];return{rawQueries:{1e7:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/education/graduate school"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/science"),r.ge(3)),2592e6))),10000001:r.q(r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles"),r.ge(3)),2592e6)),10000002:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,33),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,35),r.ge(3)),2592e6))),10000003:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,48),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/finance"),r.ge(3)),2592e6))),10000004:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/careers"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,50),r.ge(3)),2592e6))),10000005:r.q(r.tw(r.cw(0,r.pc_(0,"/education"),r.ge(3)),2592e6)),10000006:r.q(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,52),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,67),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/society/social institution/marriage"),r.ge(3)),2592e6))),10000007:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,34),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,36),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,23),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,24),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,44),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,45),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/art and entertainment/visual art and design/art museums and galleries"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/art and entertainment/visual art and design/arts education"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/art and entertainment/visual art and design/performance art"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/art and entertainment/visual art and design/restoration"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/art and entertainment/visual art and design/sculpture"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/education/art history"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,60),r.ge(3)),2592e6))),10000008:r.q(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/business and industrial/food industry"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/food and drink"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/food and drink/food and grocery retailers"),r.ge(3)),2592e6))),10000010:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,26),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,59),r.ge(3)),2592e6))),10000011:r.q(r.tw(r.cw(0,r.pc_(0,"/hobbies and interests"),r.ge(3)),2592e6)),10000012:r.q(r.tw(r.cw(0,r.pc_(0,"/home and garden"),r.ge(3)),2592e6)),10000013:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/movies"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,37),r.ge(3)),2592e6))),10000014:r.q(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/music"),r.ge(3)),2592e6)),10000015:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/business and industrial/business news"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,54),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/law, govt and politics"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/news"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,66),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/sports/sports news"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/technology and computing/tech news"),r.ge(3)),2592e6))),10000016:r.q(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/finance/bank"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,54),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/finance/personal finance"),r.ge(3)),2592e6))),10000017:r.q(r.tw(r.cw(0,r.pc_(0,"/pets"),r.ge(3)),2592e6)),10000018:r.q(r.ocq(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/celebrity fan and gossip"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,41),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,42),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,25),r.ge(3)),2592e6))),10000019:r.q(r.tw(r.cw(0,r.pc_(0,"/real estate"),r.ge(3)),2592e6)),10000020:r.q(r.tw(r.cw(0,r.pc_(0,"/shopping"),r.ge(3)),2592e6)),10000021:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,59),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/sports"),r.ge(3)),2592e6))),10000022:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,49),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/style and fashion"),r.ge(3)),2592e6))),10000023:r.q(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/business and industrial/automation"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/science/computer science"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/technology and computing"),r.ge(3)),2592e6))),10000024:r.q(r.ocq(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/movies and tv/movies/reviews"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,42),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/art and entertainment/tv"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,0),r.ge(3)),2592e6))),10000025:r.q(r.tw(r.cw(0,r.pc_(0,"/travel"),r.ge(3)),2592e6)),10000026:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/hobbies and interests/games/video and computer games"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/technology and computing/consumer electronics/game systems and consoles"),r.ge(3)),2592e6))),10000035:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/science/engineering"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/science/physics"),r.ge(3)),2592e6))),10000036:r.q(r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/buying and selling cars"),r.ge(3)),2592e6)),10000037:r.q(r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/motor shows"),r.ge(3)),2592e6)),10000038:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/cars/hybrid"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/electric vehicles"),r.ge(3)),2592e6))),10000039:r.q(r.tw(r.cw(0,r.pc_(0,47),r.ge(3)),2592e6)),10000040:r.q(r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/cars/performance vehicles"),r.ge(3)),2592e6)),10000041:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,35),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/art and entertainment/comics and animation/comics"),r.ge(3)),2592e6))),10000042:r.q(r.tw(r.cw(0,r.pc_(0,"/business and industrial/business operations"),r.ge(3)),2592e6)),10000043:r.q(r.tw(r.cw(0,r.pc_(0,67),r.ge(3)),2592e6)),10000044:r.q(r.tw(r.cw(0,r.pc_(0,52),r.ge(3)),2592e6)),10000045:r.q(r.tw(r.cw(0,r.pc_(0,36),r.ge(3)),2592e6)),10000046:r.q(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/visual art and design"),r.ge(3)),2592e6)),10000047:r.q(r.tw(r.cw(0,r.pc_(0,"/food and drink/beverages/alcoholic beverages"),r.ge(3)),2592e6)),10000048:r.q(r.tw(r.cw(0,r.pc_(0,"/food and drink/barbecues and grilling"),r.ge(3)),2592e6)),10000049:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/food and drink/desserts and baking"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/food and drink/food and grocery retailers/bakeries"),r.ge(3)),2592e6))),10000050:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,55),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/food and drink/food/fast food"),r.ge(3)),2592e6))),10000051:r.q(r.tw(r.cw(0,r.pc_(0,"/food and drink/food allergies"),r.ge(3)),2592e6)),10000052:r.q(r.ocq(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,56),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,57),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/food and drink/health and lowfat cooking"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,26),r.ge(3)),2592e6))),10000053:r.q(r.tw(r.cw(0,r.pc_(0,27),r.ge(3)),2592e6)),10000054:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/health and fitness/exercise"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/health and fitness/sports medicine"),r.ge(3)),2592e6))),10000055:r.q(r.tw(r.cw(0,r.pc_(0,"/health and fitness/men\'s health"),r.ge(3)),2592e6)),10000056:r.q(r.tw(r.cw(0,r.pc_(0,"/health and fitness/nutrition"),r.ge(3)),2592e6)),10000057:r.q(r.tw(r.cw(0,r.pc_(0,"/health and fitness/women\'s health"),r.ge(3)),2592e6)),10000058:r.q(r.tw(r.cw(0,r.pc_(0,62),r.ge(3)),2592e6)),10000059:r.q(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/movies and tv/action"),r.ge(3)),2592e6)),10000060:r.q(r.tw(r.cw(0,r.pc_(0,38),r.ge(3)),2592e6)),10000061:r.q(r.tw(r.cw(0,r.pc_(0,39),r.ge(3)),2592e6)),10000062:r.q(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/movies and tv/horror"),r.ge(3)),2592e6)),10000063:r.q(r.tw(r.cw(0,r.pc_(0,66),r.ge(3)),2592e6)),10000064:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/law, govt and politics/law enforcement"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/law, govt and politics/legal issues"),r.ge(3)),2592e6))),10000065:r.q(r.tw(r.cw(0,r.pc_(0,"/news/national news"),r.ge(3)),2592e6)),10000066:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/law, govt and politics/government"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/law, govt and politics/politics"),r.ge(3)),2592e6))),10000067:r.q(r.tw(r.cw(0,r.pc_(0,"/science/weather"),r.ge(3)),2592e6)),10000068:r.q(r.tw(r.cw(0,r.pc_(0,64),r.ge(3)),2592e6)),10000069:r.q(r.tw(r.cw(0,r.pc_(0,"/pets/cats"),r.ge(3)),2592e6)),10000070:r.q(r.tw(r.cw(0,r.pc_(0,"/pets/dogs"),r.ge(3)),2592e6)),10000071:r.q(r.tw(r.cw(0,r.pc_(0,65),r.ge(3)),2592e6)),10000072:r.q(r.tw(r.cw(0,r.pc_(0,"/pets/reptiles"),r.ge(3)),2592e6)),10000073:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/football"),r.ge(3)),2592e6)),10000074:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/baseball"),r.ge(3)),2592e6)),10000075:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/basketball"),r.ge(3)),2592e6)),10000076:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/bodybuilding"),r.ge(3)),2592e6)),10000077:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/bowling"),r.ge(3)),2592e6)),10000078:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/boxing"),r.ge(3)),2592e6)),10000079:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/bicycling"),r.ge(3)),2592e6)),10000080:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/fishing"),r.ge(3)),2592e6)),10000081:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/golf"),r.ge(3)),2592e6)),10000082:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/hunting and shooting"),r.ge(3)),2592e6)),10000083:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/rugby"),r.ge(3)),2592e6)),10000084:r.q(r.tw(r.cw(0,r.pc_(0,72),r.ge(3)),2592e6)),10000085:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/tennis"),r.ge(3)),2592e6)),10000086:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/walking"),r.ge(3)),2592e6)),10000087:r.q(r.ocq(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/business and industrial/tanning"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/style and fashion/beauty"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,74),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/style and fashion/beauty/cosmetology and beauty professionals"),r.ge(3)),2592e6))),10000088:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/style and fashion/beauty/tattoos"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/style and fashion/body art"),r.ge(3)),2592e6))),10000089:r.q(r.tw(r.cw(0,r.pc_(0,"/style and fashion/men \'s fashion"),r.ge(3)),2592e6)),10000090:r.q(r.tw(r.cw(0,r.pc_(0,"/technology and computing/consumer electronics"),r.ge(3)),2592e6)),10000324:r.q(r.tw(r.cw(0,r.pc_(0,48),r.ge(3)),2592e6)),10000325:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/business and industrial/company/annual report"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/business and industrial/company/bankruptcy"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/business and industrial/company/earnings"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/business and industrial/company/joint venture"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/business and industrial/company/merger and acquisition"),r.ge(3)),2592e6))),10000327:r.q(r.tw(r.cw(0,r.pc_(0,"/finance/personal finance/debt management"),r.ge(3)),2592e6)),10000328:r.q(r.tw(r.cw(0,r.pc_(0,"/finance/personal finance/insurance"),r.ge(3)),2592e6)),10000329:r.q(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/finance/accounting and auditing/billing and invoicing"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/finance/accounting and auditing/bookkeeping"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,53),r.ge(3)),2592e6))),10000330:r.q(r.tw(r.cw(0,r.pc_(0,"/finance/investing"),r.ge(3)),2592e6)),10000687:r.q(r.tw(r.cw(0,r.pc_(0,"/science/social science"),r.ge(3)),2592e6)),10000688:r.q(r.tw(r.cw(0,r.pc_(0,51),r.ge(3)),2592e6)),10000689:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,47),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/scooters and mopeds"),r.ge(3)),2592e6))),10000690:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/fiat"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/ford"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/honda"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/hyundai"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/nissan"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/peugeot"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/subaru"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/suzuki"),r.ge(3)),2592e6))),10000691:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,46),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/audi"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/bentley"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/ferrari"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/lamborghini"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/land rover"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/maserati"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/mercedes-benz"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/porsche"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/rolls-royce"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/toyota"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/volkswagen"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/vehicle brands/volvo"),r.ge(3)),2592e6))),10000692:r.q(r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/cars/coupe"),r.ge(3)),2592e6)),10000693:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/auto parts"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/auto repair"),r.ge(3)),2592e6))),10000694:r.q(r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/cars"),r.ge(3)),2592e6)),10000695:r.q(r.tw(r.cw(0,r.pc_(0,"/automotive and vehicles/cars/sedan"),r.ge(3)),2592e6)),10000696:r.q(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/books and literature/children\'s books"),r.ge(3)),2592e6)),10000697:r.q(r.tw(r.cw(0,r.pc_(0,34),r.ge(3)),2592e6)),10000698:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/careers/career advice"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/careers/resume writing and advice"),r.ge(3)),2592e6))),10000699:r.q(r.tw(r.cw(0,r.pc_(0,"/careers/telecommuting"),r.ge(3)),2592e6)),10000700:r.q(r.tw(r.cw(0,r.pc_(0,"/careers/career planning"),r.ge(3)),2592e6)),10000701:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/careers/job fairs"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/careers/job search"),r.ge(3)),2592e6))),10000702:r.q(r.tw(r.cw(0,r.pc_(0,50),r.ge(3)),2592e6)),10000703:r.q(r.tw(r.cw(0,r.pc_(0,"/education/distance learning"),r.ge(3)),2592e6)),10000704:r.q(r.tw(r.cw(0,r.pc_(0,"/education/special education"),r.ge(3)),2592e6)),10000705:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,33),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,51),r.ge(3)),2592e6))),10000706:r.q(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/education/homework and study tips"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/education/teaching and classroom resources/lesson plans"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/education/teaching and classroom resources/school supplies"),r.ge(3)),2592e6))),10000707:r.q(r.tw(r.cw(0,r.pc_(0,60),r.ge(3)),2592e6)),10000708:r.q(r.tw(r.cw(0,r.pc_(0,45),r.ge(3)),2592e6)),10000709:r.q(r.tw(r.cw(0,r.pc_(0,24),r.ge(3)),2592e6)),10000710:r.q(r.ocq(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,26),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,58),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,27),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/pets/animal welfare"),r.ge(3)),2592e6))),10000711:r.q(r.tw(r.cw(0,r.pc_(0,"/food and drink/beverages/non alcoholic beverages"),r.ge(3)),2592e6)),10000712:r.q(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/food and drink/kosher food"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,58),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,27),r.ge(3)),2592e6))),10000713:r.q(r.tw(r.cw(0,r.pc_(0,"/food and drink/cuisines"),r.ge(3)),2592e6)),10000714:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/food and drink/food/condiments and dressings"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/food and drink/food/frozen food"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,56),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/food and drink/food/grains and pasta"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/food and drink/food/herbs and spices"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,57),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/food and drink/food/snack foods"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/food and drink/gastronomy/slow food"),r.ge(3)),2592e6))),10000715:r.q(r.tw(r.cw(0,r.pc_(0,"/health and fitness/aging"),r.ge(3)),2592e6)),10000716:r.q(r.tw(r.cw(0,r.pc_(0,"/health and fitness/weight loss"),r.ge(3)),2592e6)),10000717:r.q(r.tw(r.cw(0,r.pc_(0,"/hobbies and interests/arts and crafts"),r.ge(3)),2592e6)),10000718:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/hobbies and interests/collecting"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/hobbies and interests/collecting/stamps and coins"),r.ge(3)),2592e6))),10000719:r.q(r.tw(r.cw(0,r.pc_(0,"/hobbies and interests/games/board games and puzzles"),r.ge(3)),2592e6)),10000720:r.q(r.tw(r.cw(0,r.pc_(0,"/hobbies and interests/magic and illusion"),r.ge(3)),2592e6)),10000721:r.q(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/music/musical instruments"),r.ge(3)),2592e6)),10000722:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,61),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,64),r.ge(3)),2592e6))),10000723:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/radio"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/technology and computing/consumer electronics/radios"),r.ge(3)),2592e6))),10000724:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/books and literature/fan fiction"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/art and entertainment/books and literature/science fiction"),r.ge(3)),2592e6))),10000725:r.q(r.tw(r.cw(0,r.pc_(0,"/home and garden/appliances"),r.ge(3)),2592e6)),10000726:r.q(r.tw(r.cw(0,r.pc_(0,63),r.ge(3)),2592e6)),10000727:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/visual art and design/design/interior design"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/art and entertainment/visual art and design/drawing"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/art and entertainment/visual art and design/painting"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/hobbies and interests/arts and crafts/woodworking"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,63),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/home and garden/remodeling and construction"),r.ge(3)),2592e6))),10000728:r.q(r.tw(r.cw(0,r.pc_(0,62),r.ge(3)),2592e6)),10000729:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/home and garden/bed and bath/bathroom"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/home and garden/bed and bath/bedroom"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/home and garden/home furnishings"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/home and garden/home furnishings/lamps and lighting"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/home and garden/interior decorating"),r.ge(3)),2592e6))),10000730:r.q(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/movies and tv/independent"),r.ge(3)),2592e6)),10000731:r.q(r.tw(r.cw(0,r.pc_(0,40),r.ge(3)),2592e6)),10000732:r.q(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/movies and tv/dramas"),r.ge(3)),2592e6)),10000733:r.q(r.tw(r.cw(0,r.pc_(0,22),r.ge(3)),2592e6)),10000734:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,21),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,22),r.ge(3)),2592e6))),10000735:r.q(r.tw(r.cw(0,r.pc_(0,43),r.ge(3)),2592e6)),10000736:r.q(r.tw(r.cw(0,r.pc_(0,43),r.ge(3)),2592e6)),10000737:r.q(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/music/music genres/jazz"),r.ge(3)),2592e6)),10000738:r.q(r.tw(r.cw(0,r.pc_(0,23),r.ge(3)),2592e6)),10000739:r.q(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/music/music genres/blues"),r.ge(3)),2592e6)),10000740:r.q(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/music/music genres/country music"),r.ge(3)),2592e6)),10000741:r.q(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/music/music genres/hip hop"),r.ge(3)),2592e6)),10000742:r.q(r.tw(r.cw(0,r.pc_(0,25),r.ge(3)),2592e6)),10000743:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/music/music genres/electronic music"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,25),r.ge(3)),2592e6))),10000744:r.q(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,23),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,24),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,44),r.ge(3)),2592e6))),10000745:r.q(r.tw(r.cw(0,r.pc_(0,"/news/local news"),r.ge(3)),2592e6)),10000746:r.q(r.tw(r.cw(0,r.pc_(0,"/news/international news"),r.ge(3)),2592e6)),10000747:r.q(r.tw(r.cw(0,r.pc_(0,"/finance/personal finance/financial planning/retirement and pension"),r.ge(3)),2592e6)),10000748:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,53),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/finance/personal finance/financial planning"),r.ge(3)),2592e6))),10000749:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,69),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,70),r.ge(3)),2592e6))),10000750:r.q(r.tw(r.cw(0,r.pc_(0,"/pets/aquariums"),r.ge(3)),2592e6)),10000751:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,21),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,22),r.ge(3)),2592e6))),10000752:r.q(r.tw(r.cw(0,r.pc_(0,"/real estate/architects"),r.ge(3)),2592e6)),10000753:r.q(r.tw(r.cw(0,r.pc_(0,"/real estate/apartments"),r.ge(3)),2592e6)),10000754:r.q(r.ocq(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/business and industrial/agriculture and forestry"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/business and industrial/agriculture and forestry/organic farming"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,61),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,65),r.ge(3)),2592e6))),10000755:r.q(r.tw(r.cw(0,r.pc_(0,"/real estate/buying and selling homes"),r.ge(3)),2592e6)),10000756:r.q(r.tw(r.cw(0,r.pc_(0,73),r.ge(3)),2592e6)),10000757:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/water polo"),r.ge(3)),2592e6)),10000758:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/table tennis and ping-pong"),r.ge(3)),2592e6)),10000759:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/softball"),r.ge(3)),2592e6)),10000760:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/sports/volleyball"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,73),r.ge(3)),2592e6))),10000761:r.q(r.tw(r.cw(0,r.pc_(0,71),r.ge(3)),2592e6)),10000762:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/rowing"),r.ge(3)),2592e6)),10000763:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/badminton"),r.ge(3)),2592e6)),10000764:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/sailing"),r.ge(3)),2592e6)),10000765:r.q(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,69),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,70),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/sports/polo"),r.ge(3)),2592e6))),10000766:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/skating/figure skating"),r.ge(3)),2592e6)),10000767:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/cheerleading"),r.ge(3)),2592e6)),10000768:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/auto racing"),r.ge(3)),2592e6)),10000769:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/weightlifting"),r.ge(3)),2592e6)),10000770:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/gymnastics"),r.ge(3)),2592e6)),10000771:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/swimming"),r.ge(3)),2592e6)),10000772:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/running and jogging"),r.ge(3)),2592e6)),10000773:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/sports/hockey"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/sports/hockey/field hockey"),r.ge(3)),2592e6))),10000774:r.q(r.tw(r.cw(0,r.pc_(0,68),r.ge(3)),2592e6)),10000775:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/sports/bicycling/mountain biking"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/sports/canoeing and kayaking"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/sports/climbing"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,68),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/sports/go kart"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/sports/parachuting"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/sports/scuba diving"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/sports/skating"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,72),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/sports/skiing/waterskiing"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/sports/snowboarding"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/sports/surfing and bodyboarding"),r.ge(3)),2592e6))),10000776:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/wrestling"),r.ge(3)),2592e6)),10000777:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,"/sports/olympics"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,71),r.ge(3)),2592e6))),10000778:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/martial arts"),r.ge(3)),2592e6)),10000779:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/cricket"),r.ge(3)),2592e6)),10000780:r.q(r.tw(r.cw(0,r.pc_(0,"/sports/soccer"),r.ge(3)),2592e6)),10000781:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/art and entertainment/shows and events"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,46),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,49),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,55),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/home and garden/luxury homes"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/style and fashion/fashion designers"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/style and fashion/luxury goods"),r.ge(3)),2592e6))),10000782:r.q(r.tw(r.cw(0,r.pc_(0,"/style and fashion/beauty/hair care"),r.ge(3)),2592e6)),10000783:r.q(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/style and fashion/accessories"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,74),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/style and fashion/jewelry"),r.ge(3)),2592e6))),10000784:r.q(r.tw(r.cw(0,r.pc_(0,"/style and fashion/clothing"),r.ge(3)),2592e6)),10000785:r.q(r.tw(r.cw(0,r.pc_(0,"/business and industrial/automation/robotics"),r.ge(3)),2592e6)),10000786:r.q(r.tw(r.cw(0,r.pc_(0,"/science/computer science/artificial intelligence"),r.ge(3)),2592e6)),10000787:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,40),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,0),r.ge(3)),2592e6))),10000788:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,41),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,0),r.ge(3)),2592e6))),10000789:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,21),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,0),r.ge(3)),2592e6))),10000790:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,37),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,0),r.ge(3)),2592e6))),10000791:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,38),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,0),r.ge(3)),2592e6))),10000792:r.q(r.ocq(r.tw(r.cw(0,r.pc_(0,39),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,0),r.ge(3)),2592e6))),10000793:r.q(r.tw(r.cw(0,r.pc_(0,"/travel/tourist destinations/seaside resort"),r.ge(3)),2592e6)),10000794:r.q(r.tw(r.cw(0,r.pc_(0,"/travel/tourist destinations/africa"),r.ge(3)),2592e6)),10000795:r.q(r.tw(r.cw(0,r.pc_(0,"/travel/tourist facilities/camping"),r.ge(3)),2592e6)),10000796:r.q(r.tw(r.cw(0,r.pc_(0,"/travel/tourist destinations/south america"),r.ge(3)),2592e6)),10000797:r.q(r.tw(r.cw(0,r.pc_(0,"/travel/transports/road travel/road accident"),r.ge(3)),2592e6)),10000798:r.q(r.tw(r.cw(0,r.pc_(0,"/travel/tourist destinations/japan"),r.ge(3)),2592e6)),10000799:r.q(r.tw(r.cw(0,r.pc_(0,"/travel/tourist destinations/australia and new zealand"),r.ge(3)),2592e6)),10000800:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.tw(r.cw(0,r.pc_(0,"/travel/tourist destinations/eastern europe"),r.ge(3)),2592e6),r.tw(r.cw(0,r.pc_(0,"/travel/tourist destinations/europe"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/travel/tourist destinations/france"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/travel/tourist destinations/greece"),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pc_(0,"/travel/tourist destinations/italy"),r.ge(3)),2592e6))),10000801:r.q(r.tw(r.cw(0,r.pc_(0,"/travel/specialty travel/adventure travel"),r.ge(3)),2592e6)),10000802:r.q(r.tw(r.cw(0,r.pc_(0,"/travel/business travel"),r.ge(3)),2592e6)),10000803:r.q(r.tw(r.cw(0,r.pc_(0,"/travel/traveling with kids"),r.ge(3)),2592e6)),100800:r.q(r.ocq(r.ocq(r.itp("eyeota","6692",!1,"100800"),r.itp("eyeota","35556",!1,"100800")),r.itp("liveramp_Experian","1004259159",!1,"100800"))),102174:r.q(r.tw(r.cw(3,r.pe(3,"FTHB_eBook_English"),r.ge(1)),7776e6)),102196:r.q(r.tw(r.cw(3,r.pe(3,"FTHB_eBook_Espanol"),r.ge(1)),7776e6)),103313:r.q(r.tw(r.cw(0,r.pe(7,"REALTOR.COM/ESPANOL"),r.ge(1)),7776e6)),103324:r.q(r.isp("2p_Realtor_Transact_Model","0",!1,"103324")),103327:r.q(r.isp("2p_Realtor_Transact_Model","1",!1,"103327")),106853:r.q(r.cw(0,r.a([r.z(1,77),r.ps(["realtor","searchedCityState"],"_CA")]),r.ge(1))),108459:r.q(r.cw(0,r.pe(14,"Atlanta"),r.ge(1))),108461:r.q(r.cw(0,r.a([r.pe(14,"Wilmington"),r.y(1,81)]),r.ge(1))),109017:r.q(r.cw(0,r.ps(13,"realtor"),r.ge(1))),109039:r.q(r.ocq(r.itp("liveramp_Acxiom","300304299",!1,"109039"),r.itp("liveramp_Acxiom","300300099",!1,"109039"))),109042:r.q(r.ocq(r.ocq(r.itp("liveramp_Acxiom","300728699",!1,"109042"),r.itp("liveramp_Acxiom","300615699",!1,"109042")),r.itp("liveramp_Acxiom","300617499",!1,"109042"))),109043:r.q(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Acxiom","300343499",!1,"109043"),r.itp("liveramp_Acxiom","1212",!1,"109043")),r.itp("liveramp_Acxiom","1211",!1,"109043")),r.itp("liveramp_Acxiom","300343399",!1,"109043"))),109045:r.q(r.itp("liveramp_PlaceIQ","1002443896",!1,"109045")),109046:r.q(r.ocq(r.itp("liveramp_Acxiom","300257199",!1,"109046"),r.itp("liveramp_Acxiom","300336299",!1,"109046"))),109047:r.q(r.ocq(r.ocq(r.itp("liveramp_Acxiom","300350399",!1,"109047"),r.itp("liveramp_Acxiom","300396199",!1,"109047")),r.itp("liveramp_Acxiom","1278",!1,"109047"))),109048:r.q(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Acxiom","300392699",!1,"109048"),r.itp("liveramp_Acxiom","300350499",!1,"109048")),r.itp("liveramp_Acxiom","300350399",!1,"109048")),r.itp("liveramp_Acxiom","300574199",!1,"109048"))),109049:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Acxiom","10412",!1,"109049"),r.itp("liveramp_Acxiom","300072599",!1,"109049")),r.itp("liveramp_Acxiom","300324399",!1,"109049")),r.itp("liveramp_Acxiom","300526799",!1,"109049")),r.itp("liveramp_Acxiom","300072499",!1,"109049")),r.itp("liveramp_Acxiom","300309599",!1,"109049")),r.itp("liveramp_Acxiom","300321399",!1,"109049")),r.itp("liveramp_Acxiom","300321499",!1,"109049")),r.itp("liveramp_Acxiom","300322699",!1,"109049")),r.itp("liveramp_Acxiom","300611599",!1,"109049")),r.itp("liveramp_Acxiom","300309199",!1,"109049")),r.itp("liveramp_Acxiom","300309099",!1,"109049")),r.itp("liveramp_Acxiom","300309399",!1,"109049")),r.itp("liveramp_Acxiom","300309499",!1,"109049"))),109050:r.q(r.itp("liveramp_Epsilon","1000462956",!1,"109050")),109051:r.q(r.itp("liveramp_Epsilon","1000462026",!1,"109051")),109052:r.q(r.itp("liveramp_Epsilon","1000462016",!1,"109052")),109053:r.q(r.itp("liveramp_PlaceIQ","1002443656",!1,"109053")),109054:r.q(r.itp("liveramp_PlaceIQ","1002443666",!1,"109054")),109055:r.q(r.ocq(r.itp("liveramp_Epsilon","1000987329",!1,"109055"),r.itp("liveramp_Epsilon","1000987319",!1,"109055"))),109060:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Acxiom","300303099",!1,"109060"),r.itp("liveramp_Acxiom","1292",!1,"109060")),r.itp("liveramp_Acxiom","300302799",!1,"109060")),r.itp("liveramp_Acxiom","300178799",!1,"109060")),r.itp("liveramp_Acxiom","300341399",!1,"109060")),r.itp("liveramp_Acxiom","300301199",!1,"109060")),r.itp("liveramp_Acxiom","10408",!1,"109060")),r.itp("liveramp_Acxiom","300340799",!1,"109060"))),109130:r.q(r.itp("liveramp_PlaceIQ","1002441156",!1,"109130")),109131:r.q(r.itp("liveramp_PlaceIQ","1002442936",!1,"109131")),109133:r.q(r.itp("liveramp_PlaceIQ","1002442946",!1,"109133")),109145:r.q(r.ocq(r.itp("liveramp_Epsilon","1000993939",!1,"109145"),r.itp("liveramp_Epsilon","1000994269",!1,"109145"))),109160:r.q(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1000995319",!1,"109160"),r.itp("liveramp_Epsilon","1000987269",!1,"109160")),r.itp("liveramp_Epsilon","1000987279",!1,"109160")),r.itp("liveramp_Epsilon","1000993479",!1,"109160"))),109177:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1000993239",!1,"109177"),r.itp("liveramp_Epsilon","1000997889",!1,"109177")),r.itp("liveramp_Epsilon","1000996929",!1,"109177")),r.itp("liveramp_Epsilon","1000997879",!1,"109177")),r.itp("liveramp_Epsilon","1000994029",!1,"109177")),r.itp("liveramp_Epsilon","1000994359",!1,"109177"))),109190:r.q(r.itp("liveramp_PlaceIQ","1002441126",!1,"109190")),109350:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1000997889",!1,"109350"),r.itp("liveramp_Epsilon","1000992969",!1,"109350")),r.itp("liveramp_Epsilon","1000992999",!1,"109350")),r.itp("liveramp_Epsilon","1000992989",!1,"109350")),r.itp("liveramp_Epsilon","1000992959",!1,"109350"))),109352:r.q(r.ocq(r.itp("liveramp_Epsilon","1000992969",!1,"109352"),r.itp("liveramp_Epsilon","1000992959",!1,"109352"))),109500:r.q(r.cw(0,r.os(r.s,13,["bigcharts.marketwatch.com","fncs.fnlondon.com","jp.wsj.com","partners.barrons.com","partners.inspiredbypenta.com","partners.newscorpsolutions.com","partners.wsj.com","partnerswsj.com","sponsor.marketwatch.com","www.barrons.com","www.fnlondon.com","www.mansionglobal.com","www.marketwatch.com","www.penews.com","www.wsj.com"]),r.ge(1))),109501:r.q(r.cw(0,r.os(r.s,13,["decider.com","nypost.com","pagesix.com"]),r.ge(1))),110753:r.q(r.itp("liveramp_Epsilon","1003067436",!1,"110753")),110756:r.q(r.ocq(r.itp("liveramp_Epsilon","1000997319",!1,"110756"),r.itp("liveramp_Epsilon","1000999189",!1,"110756"))),110763:r.q(r.ocq(r.itp("liveramp_Epsilon","1000463996",!1,"110763"),r.itp("liveramp_Epsilon","1000464146",!1,"110763"))),110778:r.q(r.itp("liveramp_Epsilon","1003067476",!1,"110778")),110779:r.q(r.itp("liveramp_Epsilon","1000996259",!1,"110779")),110780:r.q(r.itp("liveramp_Acxiom","300324899",!1,"110780")),110782:r.q(r.ocq(r.itp("liveramp_Acxiom","300618599",!1,"110782"),r.itp("liveramp_Acxiom","300618399",!1,"110782"))),110783:r.q(r.ocq(r.itp("liveramp_Epsilon","1000465886",!1,"110783"),r.itp("liveramp_Epsilon","1000465896",!1,"110783"))),110786:r.q(r.ocq(r.itp("liveramp_Epsilon","1005045319",!1,"110786"),r.itp("liveramp_Epsilon","1005045329",!1,"110786"))),110788:r.q(r.ocq(r.itp("liveramp_Epsilon","1000995319",!1,"110788"),r.itp("liveramp_Epsilon","1000987269",!1,"110788"))),110789:r.q(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1005361539",!1,"110789"),r.itp("liveramp_Epsilon","1000992609",!1,"110789")),r.itp("liveramp_Epsilon","1003067546",!1,"110789"))),110792:r.q(r.itp("eyeota","35356",!1,"110792")),110795:r.q(r.itp("eyeota","35355",!1,"110795")),110798:r.q(r.ocq(r.itp("liveramp_Acxiom","300183399",!1,"110798"),r.itp("liveramp_Acxiom","300183299",!1,"110798"))),110799:r.q(r.itp("liveramp_Acxiom","10591",!1,"110799")),111594:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1000464276",!1,"111594"),r.itp("liveramp_Epsilon","1000990849",!1,"111594")),r.itp("liveramp_Epsilon","1000985799",!1,"111594")),r.itp("liveramp_Epsilon","1000985319",!1,"111594")),r.itp("liveramp_Epsilon","1000985349",!1,"111594")),r.itp("liveramp_Epsilon","1000991149",!1,"111594")),r.itp("liveramp_Epsilon","1000991089",!1,"111594")),r.itp("liveramp_Epsilon","1000985409",!1,"111594"))),111596:r.q(r.ocq(r.itp("liveramp_Epsilon","1000991149",!1,"111596"),r.itp("liveramp_Epsilon","1000991139",!1,"111596"))),111597:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1003067486",!1,"111597"),r.itp("liveramp_Epsilon","1003069586",!1,"111597")),r.itp("liveramp_Epsilon","1003069576",!1,"111597")),r.itp("liveramp_Epsilon","1003067396",!1,"111597")),r.itp("liveramp_Epsilon","1003069136",!1,"111597")),r.itp("liveramp_Epsilon","1003069596",!1,"111597")),r.itp("liveramp_Epsilon","1003067576",!1,"111597")),r.itp("liveramp_Epsilon","1003069616",!1,"111597")),r.itp("liveramp_Epsilon","1000991239",!1,"111597")),r.itp("liveramp_Epsilon","1003068426",!1,"111597")),r.itp("liveramp_Epsilon","1003068456",!1,"111597")),r.itp("liveramp_Epsilon","1003069116",!1,"111597")),r.itp("liveramp_Epsilon","1003069356",!1,"111597")),r.itp("liveramp_Epsilon","1003024916",!1,"111597")),r.itp("liveramp_Epsilon","1003069126",!1,"111597")),r.itp("liveramp_Epsilon","1000985469",!1,"111597")),r.itp("liveramp_Epsilon","1003069416",!1,"111597")),r.itp("liveramp_Epsilon","1003069386",!1,"111597")),r.itp("liveramp_Epsilon","1003024916",!1,"111597")),r.itp("liveramp_Epsilon","1003069416",!1,"111597"))),111757:r.q(r.itp("liveramp_Epsilon","1000997039",!1,"111757")),111760:r.q(r.itp("liveramp_Experian","1004267799",!1,"111760")),111764:r.q(r.ocq(r.itp("liveramp_Acxiom","1295",!1,"111764"),r.itp("liveramp_Acxiom","300728399",!1,"111764"))),111766:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1004805159",!1,"111766"),r.itp("liveramp_Epsilon","1000993349",!1,"111766")),r.itp("liveramp_Epsilon","1000997689",!1,"111766")),r.itp("liveramp_Epsilon","1000999659",!1,"111766")),r.itp("liveramp_Epsilon","1000999669",!1,"111766"))),111780:r.q(r.ocq(r.ocq(r.itp("liveramp_Acxiom","300479799",!1,"111780"),r.itp("liveramp_Acxiom","300150099",!1,"111780")),r.itp("liveramp_Acxiom","300151199",!1,"111780"))),111783:r.q(r.itp("liveramp_Acxiom","300479399",!1,"111783")),111960:r.q(r.ocq(r.itp("liveramp_Epsilon","1000456786",!1,"111960"),r.itp("liveramp_Epsilon","1000456796",!1,"111960"))),111961:r.q(r.ocq(r.itp("liveramp_Epsilon","1003026036",!1,"111961"),r.itp("liveramp_Epsilon","1003026026",!1,"111961"))),111962:r.q(r.itp("liveramp_Acxiom","1817",!1,"111962")),111963:r.q(r.itp("liveramp_Acxiom","1815",!1,"111963")),111966:r.q(r.itp("liveramp_Acxiom","300529799",!1,"111966")),111967:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Acxiom","300531099",!1,"111967"),r.itp("liveramp_Acxiom","300530999",!1,"111967")),r.itp("liveramp_Acxiom","300035099",!1,"111967")),r.itp("liveramp_Acxiom","300036099",!1,"111967")),r.itp("liveramp_Acxiom","300035499",!1,"111967")),r.itp("liveramp_Acxiom","300036299",!1,"111967"))),111968:r.q(r.itp("liveramp_Acxiom","300530299",!1,"111968")),111969:r.q(r.itp("liveramp_Acxiom","300049099",!1,"111969")),111970:r.q(r.itp("liveramp_Acxiom","1229",!1,"111970")),111980:r.q(r.itp("liveramp_Acxiom","300044299",!1,"111980")),111981:r.q(r.itp("liveramp_Acxiom","1285",!1,"111981")),111982:r.q(r.itp("liveramp_Acxiom","300478799",!1,"111982")),111984:r.q(r.ocq(r.itp("liveramp_Experian","1004258419",!1,"111984"),r.itp("liveramp_Experian","1004258679",!1,"111984"))),111985:r.q(r.itp("liveramp_Acxiom","1286",!1,"111985")),111986:r.q(r.itp("liveramp_Acxiom","15616",!1,"111986")),112842:r.q(r.ocq(r.itp("liveramp_IXIDigital","1001357459",!1,"112842"),r.itp("liveramp_IXIDigital","1001357469",!1,"112842"))),112844:r.q(r.cw(0,r.ps(6,"https://www.realtor.com/sponsored/home-renovation-peace-of-mind"),r.ge(1))),112853:r.q(r.ocq(r.itp("liveramp_IXIDigital","1001357489",!1,"112853"),r.itp("liveramp_IXIDigital","1001357499",!1,"112853"))),112856:r.q(r.ocq(r.itp("liveramp_IXIDigital","1001357389",!1,"112856"),r.itp("liveramp_IXIDigital","1001357399",!1,"112856"))),112858:r.q(r.itp("liveramp_Acxiom","10868",!1,"112858")),112860:r.q(r.itp("liveramp_Acxiom","10869",!1,"112860")),112861:r.q(r.itp("liveramp_Acxiom","10870",!1,"112861")),112862:r.q(r.itp("liveramp_Acxiom","10871",!1,"112862")),112863:r.q(r.itp("liveramp_Acxiom","10872",!1,"112863")),112865:r.q(r.itp("liveramp_Acxiom","10873",!1,"112865")),112870:r.q(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1000990729",!1,"112870"),r.itp("liveramp_Epsilon","1000985829",!1,"112870")),r.itp("liveramp_Epsilon","1000985819",!1,"112870")),r.itp("liveramp_Epsilon","1000990719",!1,"112870"))),112871:r.q(r.ocq(r.itp("liveramp_Epsilon","1000990329",!1,"112871"),r.itp("liveramp_Epsilon","1000463436",!1,"112871"))),112872:r.q(r.ocq(r.itp("liveramp_Epsilon","1000463766",!1,"112872"),r.itp("liveramp_Epsilon","1000463776",!1,"112872"))),112903:r.q(r.acq(r.itp("liveramp_IXIDigital","1000090024",!1,"112903"),r.ocq(r.itp("liveramp_IXIDigital","1000090164",!1,"112903"),r.itp("liveramp_IXIDigital","1000090154",!1,"112903")))),112904:r.q(r.acq(r.itp("liveramp_IXIDigital","1000090024",!1,"112904"),r.itp("liveramp_IXIDigital","1000090134",!1,"112904"))),112961:r.q(r.itp("liveramp_IXIDigital","1000091664",!1,"112961")),112962:r.q(r.itp("liveramp_IXIDigital","1000091654",!1,"112962")),112963:r.q(r.itp("liveramp_Acxiom","300527799",!1,"112963")),112964:r.q(r.itp("liveramp_Acxiom","300527499",!1,"112964")),112965:r.q(r.itp("liveramp_Acxiom","300355099",!1,"112965")),112966:r.q(r.ocq(r.itp("liveramp_Acxiom","300390099",!1,"112966"),r.itp("liveramp_Acxiom","300350999",!1,"112966"))),112967:r.q(r.itp("liveramp_Acxiom","300392199",!1,"112967")),112968:r.q(r.itp("liveramp_Acxiom","300528399",!1,"112968")),112969:r.q(r.ocq(r.itp("liveramp_Acxiom","300352699",!1,"112969"),r.itp("liveramp_Acxiom","300371599",!1,"112969"))),112970:r.q(r.ocq(r.itp("liveramp_IXIDigital","1000089024",!1,"112970"),r.itp("liveramp_IXIDigital","1000089014",!1,"112970"))),112972:r.q(r.ocq(r.itp("liveramp_IXIDigital","1000089004",!1,"112972"),r.itp("liveramp_IXIDigital","1000088994",!1,"112972"))),112973:r.q(r.ocq(r.itp("liveramp_IXIDigital","1000088984",!1,"112973"),r.itp("liveramp_IXIDigital","1000088974",!1,"112973"))),112974:r.q(r.itp("liveramp_IXIDigital","1000088964",!1,"112974")),112976:r.q(r.itp("liveramp_IXIDigital","1000088954",!1,"112976")),112979:r.q(r.itp("liveramp_IXIDigital","1000088934",!1,"112979")),112980:r.q(r.ocq(r.ocq(r.ocq(r.itp("liveramp_IXIDigital","1000088924",!1,"112980"),r.itp("liveramp_IXIDigital","1000088914",!1,"112980")),r.itp("liveramp_IXIDigital","1000088904",!1,"112980")),r.itp("liveramp_IXIDigital","1000088894",!1,"112980"))),112981:r.q(r.itp("liveramp_IXIDigital","1000088944",!1,"112981")),112995:r.q(r.itp("liveramp_Experian","1004577759",!1,"112995")),112996:r.q(r.ocq(r.ocq(r.itp("liveramp_Experian","1004577739",!1,"112996"),r.itp("liveramp_Experian","1004577749",!1,"112996")),r.itp("liveramp_Experian","1004577729",!1,"112996"))),112997:r.q(r.itp("liveramp_Experian","1007226721",!1,"112997")),112998:r.q(r.itp("liveramp_Experian","1007226771",!1,"112998")),112999:r.q(r.itp("liveramp_Experian","1004580679",!1,"112999")),113002:r.q(r.itp("liveramp_Experian","1004580629",!1,"113002")),113003:r.q(r.itp("liveramp_Experian","1007227411",!1,"113003")),113007:r.q(r.itp("liveramp_Experian","1004578089",!1,"113007")),113009:r.q(r.itp("liveramp_Experian","1004578079",!1,"113009")),113012:r.q(r.itp("liveramp_Experian","1004577959",!1,"113012")),113013:r.q(r.itp("liveramp_Experian","1004577939",!1,"113013")),113015:r.q(r.itp("liveramp_Experian","1004577879",!1,"113015")),113018:r.q(r.itp("liveramp_Experian","1007227231",!1,"113018")),113020:r.q(r.itp("liveramp_Experian","1004577899",!1,"113020")),113022:r.q(r.itp("liveramp_Experian","1004577989",!1,"113022")),113023:r.q(r.itp("liveramp_Experian","1007227351",!1,"113023")),113024:r.q(r.itp("liveramp_Experian","1004577999",!1,"113024")),113025:r.q(r.ocq(r.itp("liveramp_Experian","1007226711",!1,"113025"),r.itp("liveramp_Experian","1007226761",!1,"113025"))),113026:r.q(r.itp("liveramp_Experian","1004576229",!1,"113026")),113027:r.q(r.itp("liveramp_Experian","1004576049",!1,"113027")),113028:r.q(r.itp("liveramp_Experian","1004575999",!1,"113028")),113029:r.q(r.itp("liveramp_Experian","1004576029",!1,"113029")),113032:r.q(r.itp("liveramp_Experian","1004576149",!1,"113032")),113034:r.q(r.itp("liveramp_Experian","1004576089",!1,"113034")),113036:r.q(r.itp("liveramp_Experian","1004575969",!1,"113036")),113039:r.q(r.itp("liveramp_Experian","1004576189",!1,"113039")),113042:r.q(r.itp("liveramp_Experian","1004576209",!1,"113042")),113045:r.q(r.itp("liveramp_Experian","1004576179",!1,"113045")),113047:r.q(r.itp("liveramp_Experian","1004575989",!1,"113047")),113051:r.q(r.itp("liveramp_Experian","1004576239",!1,"113051")),113054:r.q(r.itp("liveramp_Experian","1004576119",!1,"113054")),113056:r.q(r.itp("liveramp_Experian","1004575959",!1,"113056")),113057:r.q(r.itp("liveramp_Experian","1004576249",!1,"113057")),113061:r.q(r.itp("liveramp_Experian","1004576139",!1,"113061")),113062:r.q(r.itp("liveramp_Experian","1004576059",!1,"113062")),113063:r.q(r.itp("liveramp_Experian","1004576219",!1,"113063")),113064:r.q(r.itp("liveramp_Experian","1004576099",!1,"113064")),113065:r.q(r.itp("liveramp_Experian","1004576039",!1,"113065")),113078:r.q(r.cw(0,r.ps(6,"https://www.realtor.com/sponsored/home-search-peace-of-mind"),r.ge(1))),113080:r.q(r.cw(0,r.ps(6,"https://www.realtor.com/sponsored/diy-moving-questions-homesteading-family"),r.ge(1))),113083:r.q(r.cw(0,r.ps(6,"https://www.realtor.com/sponsored/expert-diy-moving-tips"),r.ge(1))),113102:r.q(r.itp("liveramp_Alliant","1002760926",!1,"113102")),113106:r.q(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1000993309",!1,"113106"),r.itp("liveramp_Epsilon","1000997229",!1,"113106")),r.itp("liveramp_Epsilon","1000993879",!1,"113106")),r.itp("liveramp_Epsilon","1000994209",!1,"113106"))),113109:r.q(r.itp("liveramp_Alliant","1002761776",!1,"113109")),113110:r.q(r.itp("liveramp_Alliant","1001431469",!1,"113110")),113111:r.q(r.itp("liveramp_Alliant","1002760786",!1,"113111")),113171:r.q(r.itp("liveramp_IXIDigital","1000091374",!1,"113171")),113172:r.q(r.itp("liveramp_Acxiom","300113799",!1,"113172")),113174:r.q(r.itp("liveramp_Acxiom","300538899",!1,"113174")),113175:r.q(r.itp("liveramp_Alliant","1000845826",!1,"113175")),113176:r.q(r.itp("liveramp_Acxiom","300618899",!1,"113176")),113177:r.q(r.ocq(r.itp("liveramp_Epsilon","1000467056",!1,"113177"),r.itp("liveramp_Epsilon","1000467046",!1,"113177"))),113180:r.q(r.itp("liveramp_AnalyticsIQ","1004097629",!1,"113180")),113181:r.q(r.itp("liveramp_Alliant","1001431179",!1,"113181")),113183:r.q(r.itp("liveramp_Alliant","1002764196",!1,"113183")),113185:r.q(r.itp("eyeota","35354",!1,"113185")),113211:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Experian","1004260969",!1,"113211"),r.itp("liveramp_Epsilon","1000999579",!1,"113211")),r.itp("liveramp_Epsilon","1000999579",!1,"113211")),r.itp("liveramp_Experian","1004260989",!1,"113211")),r.itp("liveramp_Experian","1004260929",!1,"113211")),r.itp("liveramp_Experian","1004260819",!1,"113211")),r.itp("liveramp_Experian","1004260879",!1,"113211")),r.itp("liveramp_Experian","1004261269",!1,"113211"))),113213:r.q(r.itp("liveramp_Experian","1004601749",!1,"113213")),113214:r.q(r.itp("liveramp_PlaceIQ","1002442186",!1,"113214")),113215:r.q(r.itp("liveramp_PlaceIQ","1002443016",!1,"113215")),113232:r.q(r.ocq(r.ocq(r.itp("liveramp_AnalyticsIQ","1003048939",!1,"113232"),r.itp("liveramp_AnalyticsIQ","1003048949",!1,"113232")),r.itp("liveramp_AnalyticsIQ","1003048929",!1,"113232"))),113233:r.q(r.ocq(r.itp("liveramp_AnalyticsIQ","1003809659",!1,"113233"),r.itp("liveramp_AnalyticsIQ","1001373039",!1,"113233"))),113234:r.q(r.ocq(r.ocq(r.ocq(r.itp("liveramp_AnalyticsIQ","1001025269",!1,"113234"),r.itp("liveramp_AnalyticsIQ","1003514889",!1,"113234")),r.itp("liveramp_AnalyticsIQ","1001606126",!1,"113234")),r.itp("liveramp_AnalyticsIQ","1001605976",!1,"113234"))),113237:r.q(r.acq(r.ocq(r.itp("liveramp_Experian","1004581069",!1,"113237"),r.itp("liveramp_Experian","1004257589",!1,"113237")),r.itp("liveramp_Experian","1007229021",!1,"113237"))),113238:r.q(r.itp("liveramp_Experian","1004269059",!1,"113238")),113239:r.q(r.itp("liveramp_Epsilon","1002890016",!1,"113239")),113240:r.q(r.itp("liveramp_Epsilon","1000985059",!1,"113240")),113241:r.q(r.itp("liveramp_Epsilon","1000991509",!1,"113241")),113242:r.q(r.itp("liveramp_Acxiom","10841",!1,"113242")),113244:r.q(r.itp("liveramp_Acxiom","1199",!1,"113244")),114090:r.q(r.tw(r.cw(0,r.t,r.e(1)),7776e6)),114091:r.q(r.acq(r.tw(r.cw(0,r.t,r.ge(2)),7776e6),r.tw(r.cw(0,r.t,r.le(29)),7776e6))),114092:r.q(r.tw(r.cw(0,r.t,r.ge(30)),7776e6)),114959:r.q(r.tw(r.cw(0,r.ref(4),r.e(1)),2592e6)),114960:r.q(r.acq(r.tw(r.cw(0,r.ref(4),r.ge(2)),2592e6),r.tw(r.cw(0,r.ref(4),r.le(29)),2592e6))),114961:r.q(r.tw(r.cw(0,r.ref(4),r.ge(30)),2592e6)),115031:r.q(r.tw(r.cw(0,r.ref(0),r.e(1)),2592e6)),115032:r.q(r.acq(r.tw(r.cw(0,r.ref(0),r.ge(2)),2592e6),r.tw(r.cw(0,r.ref(0),r.le(29)),2592e6))),115033:r.q(r.tw(r.cw(0,r.ref(0),r.ge(30)),2592e6)),115303:r.q(r.tw(r.cw(0,r.t,r.ge(30)),2592e6)),115304:r.q(r.acq(r.tw(r.cw(0,r.t,r.ge(2)),2592e6),r.tw(r.cw(0,r.t,r.le(29)),2592e6))),115305:r.q(r.tw(r.cw(0,r.t,r.e(1)),2592e6)),115627:r.q(r.itp("liveramp_Acxiom","10892",!1,"115627")),115639:r.q(r.itp("liveramp_Experian","1004268459",!1,"115639")),115640:r.q(r.itp("liveramp_Acxiom","300325699",!1,"115640")),115827:r.q(r.itp("liveramp_Epsilon","1000997699",!1,"115827")),115828:r.q(r.itp("liveramp_Epsilon","1000464346",!1,"115828")),115829:r.q(r.itp("liveramp_Epsilon","1000464366",!1,"115829")),115830:r.q(r.itp("liveramp_Epsilon","1000464396",!1,"115830")),115831:r.q(r.itp("liveramp_Epsilon","1000464386",!1,"115831")),115832:r.q(r.itp("liveramp_Epsilon","1000464376",!1,"115832")),115834:r.q(r.itp("liveramp_Epsilon","1000464356",!1,"115834")),115835:r.q(r.ocq(r.itp("liveramp_Epsilon","1000462176",!1,"115835"),r.itp("liveramp_Epsilon","1000462186",!1,"115835"))),115836:r.q(r.itp("liveramp_Epsilon","1002890146",!1,"115836")),115837:r.q(r.ocq(r.itp("liveramp_Epsilon","1000997029",!1,"115837"),r.itp("liveramp_Mastercard","1006793521",!1,"115837"))),115839:r.q(r.itp("liveramp_Epsilon","1002890016",!1,"115839")),115842:r.q(r.ocq(r.itp("liveramp_Experian","1005797871",!1,"115842"),r.itp("liveramp_Experian","1005797791",!1,"115842"))),115959:r.q(r.ocq(r.itp("liveramp_AnalyticsIQ","1004330519",!1,"115959"),r.itp("liveramp_StatSocial","1006916641",!1,"115959"))),118635:r.q(r.isp("2P_realtor_consumer_classification_model_AFFORDABILITY-CALC","0",!1,"118635")),118636:r.q(r.isp("2P_realtor_consumer_classification_model_AFFORDABILITY-CALC","1",!1,"118636")),118637:r.q(r.isp("2P_realtor_consumer_classification_model_AFFORDABILITY-CALC","2",!1,"118637")),118638:r.q(r.isp("2P_realtor_consumer_classification_model_AFFORDABILITY-CALC","3",!1,"118638")),118639:r.q(r.isp("2P_realtor_consumer_classification_model_AFFORDABILITY-CALC","4",!1,"118639")),118640:r.q(r.isp("2P_realtor_consumer_classification_model_AFFORDABILITY-CALC","5",!1,"118640")),118641:r.q(r.isp("2P_realtor_consumer_classification_model_AFFORDABILITY-CALC","6",!1,"118641")),118642:r.q(r.isp("2P_realtor_consumer_classification_model_AFFORDABILITY-CALC","7",!1,"118642")),118643:r.q(r.isp("2P_realtor_consumer_classification_model_AFFORDABILITY-CALC","8",!1,"118643")),118644:r.q(r.isp("2P_realtor_consumer_classification_model_AFFORDABILITY-CALC","9",!1,"118644")),118645:r.q(r.isp("2P_realtor_consumer_classification_model_DOWNLOAD-APP","0",!1,"118645")),118646:r.q(r.isp("2P_realtor_consumer_classification_model_DOWNLOAD-APP","1",!1,"118646")),118647:r.q(r.isp("2P_realtor_consumer_classification_model_DOWNLOAD-APP","2",!1,"118647")),118648:r.q(r.isp("2P_realtor_consumer_classification_model_DOWNLOAD-APP","3",!1,"118648")),118649:r.q(r.isp("2P_realtor_consumer_classification_model_DOWNLOAD-APP","4",!1,"118649")),118650:r.q(r.isp("2P_realtor_consumer_classification_model_DOWNLOAD-APP","5",!1,"118650")),118651:r.q(r.isp("2P_realtor_consumer_classification_model_DOWNLOAD-APP","6",!1,"118651")),118652:r.q(r.isp("2P_realtor_consumer_classification_model_DOWNLOAD-APP","7",!1,"118652")),118653:r.q(r.isp("2P_realtor_consumer_classification_model_DOWNLOAD-APP","8",!1,"118653")),118654:r.q(r.isp("2P_realtor_consumer_classification_model_DOWNLOAD-APP","9",!1,"118654")),118655:r.q(r.isp("2P_realtor_consumer_classification_model_HOMEBUYER","0",!1,"118655")),118656:r.q(r.isp("2P_realtor_consumer_classification_model_HOMEBUYER","1",!1,"118656")),118657:r.q(r.isp("2P_realtor_consumer_classification_model_HOMEBUYER","2",!1,"118657")),118658:r.q(r.isp("2P_realtor_consumer_classification_model_HOMEBUYER","3",!1,"118658")),118659:r.q(r.isp("2P_realtor_consumer_classification_model_HOMEBUYER","4",!1,"118659")),118660:r.q(r.isp("2P_realtor_consumer_classification_model_HOMEBUYER","5",!1,"118660")),118661:r.q(r.isp("2P_realtor_consumer_classification_model_HOMEBUYER","6",!1,"118661")),118662:r.q(r.isp("2P_realtor_consumer_classification_model_HOMEBUYER","7",!1,"118662")),118663:r.q(r.isp("2P_realtor_consumer_classification_model_HOMEBUYER","8",!1,"118663")),118664:r.q(r.isp("2P_realtor_consumer_classification_model_HOMEBUYER","9",!1,"118664")),118665:r.q(r.isp("2P_realtor_consumer_classification_model_NEW-CONSTRUCTION","0",!1,"118665")),118666:r.q(r.isp("2P_realtor_consumer_classification_model_NEW-CONSTRUCTION","1",!1,"118666")),118667:r.q(r.isp("2P_realtor_consumer_classification_model_NEW-CONSTRUCTION","2",!1,"118667")),118668:r.q(r.isp("2P_realtor_consumer_classification_model_NEW-CONSTRUCTION","3",!1,"118668")),118669:r.q(r.isp("2P_realtor_consumer_classification_model_NEW-CONSTRUCTION","4",!1,"118669")),118670:r.q(r.isp("2P_realtor_consumer_classification_model_NEW-CONSTRUCTION","5",!1,"118670")),118671:r.q(r.isp("2P_realtor_consumer_classification_model_NEW-CONSTRUCTION","6",!1,"118671")),118672:r.q(r.isp("2P_realtor_consumer_classification_model_NEW-CONSTRUCTION","7",!1,"118672")),118673:r.q(r.isp("2P_realtor_consumer_classification_model_NEW-CONSTRUCTION","8",!1,"118673")),118674:r.q(r.isp("2P_realtor_consumer_classification_model_NEW-CONSTRUCTION","9",!1,"118674")),118675:r.q(r.isp("2P_realtor_consumer_classification_model_PREAPPROVAL","0",!1,"118675")),118676:r.q(r.isp("2P_realtor_consumer_classification_model_PREAPPROVAL","1",!1,"118676")),118677:r.q(r.isp("2P_realtor_consumer_classification_model_PREAPPROVAL","2",!1,"118677")),118678:r.q(r.isp("2P_realtor_consumer_classification_model_PREAPPROVAL","3",!1,"118678")),118679:r.q(r.isp("2P_realtor_consumer_classification_model_PREAPPROVAL","4",!1,"118679")),118680:r.q(r.isp("2P_realtor_consumer_classification_model_PREAPPROVAL","5",!1,"118680")),118681:r.q(r.isp("2P_realtor_consumer_classification_model_PREAPPROVAL","6",!1,"118681")),118682:r.q(r.isp("2P_realtor_consumer_classification_model_PREAPPROVAL","7",!1,"118682")),118683:r.q(r.isp("2P_realtor_consumer_classification_model_PREAPPROVAL","8",!1,"118683")),118684:r.q(r.isp("2P_realtor_consumer_classification_model_PREAPPROVAL","9",!1,"118684")),118685:r.q(r.isp("2P_realtor_consumer_classification_model_RENTER","0",!1,"118685")),118686:r.q(r.isp("2P_realtor_consumer_classification_model_RENTER","1",!1,"118686")),118687:r.q(r.isp("2P_realtor_consumer_classification_model_RENTER","2",!1,"118687")),118688:r.q(r.isp("2P_realtor_consumer_classification_model_RENTER","3",!1,"118688")),118689:r.q(r.isp("2P_realtor_consumer_classification_model_RENTER","4",!1,"118689")),118690:r.q(r.isp("2P_realtor_consumer_classification_model_RENTER","5",!1,"118690")),118691:r.q(r.isp("2P_realtor_consumer_classification_model_RENTER","6",!1,"118691")),118692:r.q(r.isp("2P_realtor_consumer_classification_model_RENTER","7",!1,"118692")),118693:r.q(r.isp("2P_realtor_consumer_classification_model_RENTER","8",!1,"118693")),118694:r.q(r.isp("2P_realtor_consumer_classification_model_RENTER","9",!1,"118694")),118695:r.q(r.isp("2P_realtor_consumer_classification_model_SELLER","0",!1,"118695")),118696:r.q(r.isp("2P_realtor_consumer_classification_model_SELLER","1",!1,"118696")),118697:r.q(r.isp("2P_realtor_consumer_classification_model_SELLER","2",!1,"118697")),118698:r.q(r.isp("2P_realtor_consumer_classification_model_SELLER","3",!1,"118698")),118699:r.q(r.isp("2P_realtor_consumer_classification_model_SELLER","4",!1,"118699")),118700:r.q(r.isp("2P_realtor_consumer_classification_model_SELLER","5",!1,"118700")),118701:r.q(r.isp("2P_realtor_consumer_classification_model_SELLER","6",!1,"118701")),118702:r.q(r.isp("2P_realtor_consumer_classification_model_SELLER","7",!1,"118702")),118703:r.q(r.isp("2P_realtor_consumer_classification_model_SELLER","8",!1,"118703")),118704:r.q(r.isp("2P_realtor_consumer_classification_model_SELLER","9",!1,"118704")),121451:r.q(r.cw(0,r.a([r.pe(2,"CA"),r.z(1,77)]),r.ge(1))),121924:r.q(r.cw(0,r.a([r.pe(2,"AL"),r.pn(1,"Alabama")]),r.ge(1))),121926:r.q(r.cw(0,r.a([r.pe(2,"AK"),r.pn(1,"Alaska")]),r.ge(1))),121927:r.q(r.cw(0,r.a([r.pe(2,"AZ"),r.pn(1,"Arizona")]),r.ge(1))),121928:r.q(r.cw(0,r.a([r.pe(2,"AR"),r.pn(1,"Arkansas")]),r.ge(1))),121929:r.q(r.cw(0,r.a([r.pe(2,"CO"),r.pn(1,"Colorado")]),r.ge(1))),121930:r.q(r.cw(0,r.a([r.pe(2,"CT"),r.pn(1,"Connecticut")]),r.ge(1))),121931:r.q(r.cw(0,r.a([r.pe(2,"DE"),r.pn(1,"Delaware")]),r.ge(1))),121932:r.q(r.cw(0,r.a([r.pe(2,"DC"),r.pn(1,"District of Columbia")]),r.ge(1))),121933:r.q(r.cw(0,r.a([r.pe(2,"FL"),r.pn(1,"Florida")]),r.ge(1))),121934:r.q(r.cw(0,r.a([r.pe(2,"GA"),r.pn(1,"Georgia")]),r.ge(1))),121935:r.q(r.cw(0,r.a([r.pe(2,"HI"),r.pn(1,"Hawaii")]),r.ge(1))),121936:r.q(r.cw(0,r.a([r.pe(2,"ID"),r.pn(1,"Idaho")]),r.ge(1))),121937:r.q(r.cw(0,r.a([r.pe(2,"IL"),r.pn(1,"Illinois")]),r.ge(1))),121938:r.q(r.cw(0,r.a([r.pe(2,"IN"),r.pn(1,"Indiana")]),r.ge(1))),121939:r.q(r.cw(0,r.a([r.pe(2,"IA"),r.pn(1,"Iowa")]),r.ge(1))),121940:r.q(r.cw(0,r.a([r.pe(2,"KS"),r.pn(1,"Kansas")]),r.ge(1))),121941:r.q(r.cw(0,r.a([r.pe(2,"KY"),r.pn(1,"Kentucky")]),r.ge(1))),121942:r.q(r.cw(0,r.a([r.pe(2,"LA"),r.pn(1,"Louisiana")]),r.ge(1))),121943:r.q(r.cw(0,r.a([r.pe(2,"ME"),r.pn(1,"Maine")]),r.ge(1))),121944:r.q(r.cw(0,r.a([r.pe(2,"MD"),r.pn(1,"Maryland")]),r.ge(1))),121945:r.q(r.cw(0,r.a([r.pe(2,"MA"),r.pn(1,"Massachusetts")]),r.ge(1))),121946:r.q(r.cw(0,r.a([r.pe(2,"MI"),r.pn(1,"Michigan")]),r.ge(1))),121947:r.q(r.cw(0,r.a([r.pe(2,"MN"),r.pn(1,"Minnesota")]),r.ge(1))),121948:r.q(r.cw(0,r.a([r.pe(2,"MS"),r.pn(1,"Mississippi")]),r.ge(1))),121949:r.q(r.cw(0,r.a([r.pe(2,"MO"),r.pn(1,"Missouri")]),r.ge(1))),121950:r.q(r.cw(0,r.a([r.pe(2,"MT"),r.pn(1,"Montana")]),r.ge(1))),121951:r.q(r.cw(0,r.a([r.pe(2,"NE"),r.pn(1,"Nebraska")]),r.ge(1))),121952:r.q(r.cw(0,r.a([r.pe(2,"NV"),r.pn(1,"Nevada")]),r.ge(1))),121953:r.q(r.cw(0,r.a([r.pe(2,"NH"),r.pn(1,"New Hampshire")]),r.ge(1))),121954:r.q(r.cw(0,r.a([r.pe(2,"NJ"),r.pn(1,"New Jersey")]),r.ge(1))),121955:r.q(r.cw(0,r.a([r.pe(2,"NM"),r.pn(1,"New Mexico")]),r.ge(1))),121956:r.q(r.cw(0,r.a([r.pe(2,"NY"),r.pn(1,"New York")]),r.ge(1))),121957:r.q(r.cw(0,r.a([r.pe(2,"NC"),r.z(1,81)]),r.ge(1))),121958:r.q(r.cw(0,r.a([r.pe(2,"ND"),r.pn(1,"North Dakota")]),r.ge(1))),121959:r.q(r.cw(0,r.a([r.pe(2,"OH"),r.pn(1,"Ohio")]),r.ge(1))),121960:r.q(r.cw(0,r.a([r.pe(2,"OK"),r.pn(1,"Oklahoma")]),r.ge(1))),121961:r.q(r.cw(0,r.a([r.pe(2,"OR"),r.pn(1,"Oregon")]),r.ge(1))),121962:r.q(r.cw(0,r.a([r.pe(2,"PA"),r.pn(1,"Pennsylvania")]),r.ge(1))),121963:r.q(r.cw(0,r.a([r.pe(2,"RI"),r.pn(1,"Rhode Island")]),r.ge(1))),121964:r.q(r.cw(0,r.a([r.pe(2,"SC"),r.pn(1,"South Carolina")]),r.ge(1))),121965:r.q(r.cw(0,r.a([r.pe(2,"SD"),r.pn(1,"South Dakota")]),r.ge(1))),121966:r.q(r.cw(0,r.a([r.pe(2,"TN"),r.pn(1,"Tennessee")]),r.ge(1))),121967:r.q(r.cw(0,r.a([r.pe(2,"TX"),r.pn(1,"Texas")]),r.ge(1))),121968:r.q(r.cw(0,r.a([r.pe(2,"UT"),r.pn(1,"Utah")]),r.ge(1))),121969:r.q(r.cw(0,r.a([r.pe(2,"VT"),r.pn(1,"Vermont")]),r.ge(1))),121970:r.q(r.cw(0,r.a([r.pe(2,"VI"),r.pn(1,"Virgin Islands")]),r.ge(1))),121971:r.q(r.cw(0,r.a([r.pe(2,"VA"),r.pn(1,"Virginia")]),r.ge(1))),121972:r.q(r.cw(0,r.a([r.pe(2,"WA"),r.pn(1,"Washington")]),r.ge(1))),121973:r.q(r.cw(0,r.a([r.pe(2,"WV"),r.pn(1,"West Virginia")]),r.ge(1))),121974:r.q(r.cw(0,r.a([r.pe(2,"WI"),r.pn(1,"Wisconsin")]),r.ge(1))),121975:r.q(r.cw(0,r.a([r.pe(2,"WY"),r.pn(1,"Wyoming")]),r.ge(1))),122461:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Acxiom","10797",!1,"122461"),r.itp("liveramp_Acxiom","10901",!1,"122461")),r.itp("eyeota","35436",!1,"122461")),r.itp("eyeota","35435",!1,"122461")),r.itp("liveramp_Epsilon","1003069936",!1,"122461")),r.itp("liveramp_Epsilon","1003069926",!1,"122461")),r.itp("liveramp_PlaceIQ","1002615766",!1,"122461")),r.itp("liveramp_PlaceIQ","1002615756",!1,"122461")),r.itp("liveramp_Experian","1004256489",!1,"122461")),r.itp("liveramp_Experian","1004256479",!1,"122461")),r.itp("liveramp_Alliant","1000849646",!1,"122461")),r.itp("liveramp_Alliant","1000852686",!1,"122461")),r.itp("liveramp_AnalyticsIQ","1000690996",!1,"122461")),r.itp("liveramp_AnalyticsIQ","1000691006",!1,"122461"))),123554:r.q(r.acq(r.cw(0,r.pe(13,"www.realtor.com"),r.ge(1)),r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Acxiom","10797",!1,"123554"),r.itp("liveramp_Acxiom","10901",!1,"123554")),r.itp("eyeota","35436",!1,"123554")),r.itp("eyeota","35435",!1,"123554")),r.itp("liveramp_Epsilon","1003069936",!1,"123554")),r.itp("liveramp_Epsilon","1003069926",!1,"123554")),r.itp("liveramp_PlaceIQ","1002615766",!1,"123554")),r.itp("liveramp_PlaceIQ","1002615756",!1,"123554")),r.itp("liveramp_Experian","1004256489",!1,"123554")),r.itp("liveramp_Experian","1004256479",!1,"123554")),r.itp("liveramp_Alliant","1000849646",!1,"123554")),r.itp("liveramp_Alliant","1000852686",!1,"123554")),r.itp("liveramp_AnalyticsIQ","1000691006",!1,"123554")),r.itp("liveramp_AnalyticsIQ","1000690996",!1,"123554")))),123555:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Acxiom","10797",!1,"123555"),r.itp("liveramp_Acxiom","10901",!1,"123555")),r.itp("eyeota","35435",!1,"123555")),r.itp("eyeota","35436",!1,"123555")),r.itp("liveramp_Epsilon","1003069936",!1,"123555")),r.itp("liveramp_Epsilon","1003069926",!1,"123555")),r.itp("liveramp_PlaceIQ","1002615766",!1,"123555")),r.itp("liveramp_PlaceIQ","1002615756",!1,"123555")),r.itp("liveramp_Experian","1004256489",!1,"123555")),r.itp("liveramp_Experian","1004256479",!1,"123555")),r.itp("liveramp_Alliant","1000849646",!1,"123555")),r.itp("liveramp_Alliant","1000852686",!1,"123555")),r.itp("liveramp_AnalyticsIQ","1000690996",!1,"123555")),r.itp("liveramp_AnalyticsIQ","1000691006",!1,"123555"))),72374:r.q(r.cw(0,r.t,r.ge(1))),79514:r.q(r.tw(r.cw(0,r.pe(20,"sports"),r.ge(3)),6048e5)),83650:r.q(r.ocq(r.tw(r.cw(0,r.y(4,12),r.ge(1)),7776e6),r.tw(r.cw(0,r.ps(6,15),r.ge(1)),7776e6))),83654:r.q(r.tw(r.cw(0,r.os(r.s,6,["https://www.realtor.com/mortgage/rates"]),r.ge(1)),7776e6)),83657:r.q(r.tw(r.cw(0,r.os(r.w,6,["https://www.realtor.com/advice/buy/home-buying-guide-move","https://www.realtor.com/advice/buy/final-walkthrough-advice","https://www.realtor.com/advice/buy/negotiate-closing-costs","https://www.realtor.com/advice/buy/hire-home-inspector","https://www.realtor.com/advice/buy/how-choose-home-loan","https://www.realtor.com/advice/buy/appraisals-buy-home","https://www.realtor.com/advice/buy/making-an-offer","https://www.realtor.com/advice/buy/how-find-realtor","https://www.realtor.com/advice/buy/home-buying-age-coronavirus-how-to-conduct-a-virtual-house-hunt","https://www.realtor.com/advice/buy/house-you-can-afford","https://www.realtor.com/advice/buy/save-down-payment","https://www.realtor.com/advice/buy/clean-up-credit-score"]),r.ge(1)),7776e6)),83658:r.q(r.tw(r.cw(3,r.ps(6,"https://www.realtor.com/advice/guides/first-time-home-buyer"),r.ge(1)),7776e6)),83659:r.q(r.tw(r.cw(3,r.y(3,28),r.ge(1)),7776e6)),83722:r.q(r.tw(r.cw(0,r.ps(6,"https://www.realtor.com/welcome/first-time-buyer"),r.ge(1)),7776e6)),84413:r.q(r.tw(r.cw(0,r.pc_(16,75),r.ge(1)),7776e6)),84677:r.q(r.tw(r.cw(0,r.os(r.s,4,["hp-new/buy","hp-new/rent","hp-return/buy","hp-return/rent","hp/buy","hp/rent","ldp/const","ldp/fore","ldp/nh","ldp/rent","ldp/sale","ldpqv/const","ldpqv/fore","ldpqv/nh","ldpqv/rent","ldpqv/sale","srplist/const","srplist/fore","srplist/nh","srplist/sale","srpmap/const","srpmap/fore","srpmap/nh","srpmap/sale"]),r.ge(10)),864e5)),84732:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],83650)),r.cw(2,r.pe(5,83650)),r.ge(1)),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],83657)),r.cw(2,r.pe(5,83657)),r.ge(1))),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],83658)),r.cw(2,r.pe(5,83658)),r.ge(1))),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],83722)),r.cw(2,r.pe(5,83722)),r.ge(1))),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],102174)),r.cw(2,r.pe(5,102174)),r.ge(1)))),84733:r.q(r.tw(r.cw(0,r.as(r.s,4,[1,92]),r.ge(1)),7776e6)),84734:r.q(r.tw(r.cw(0,r.ref(1),r.ge(1)),7776e6)),84735:r.q(r.tw(r.cw(3,r.pe(10,"poor"),r.ge(1)),7776e6)),84736:r.q(r.tw(r.cw(3,r.pe(10,"fair"),r.ge(1)),7776e6)),84737:r.q(r.tw(r.cw(3,r.pe(10,"good"),r.ge(1)),7776e6)),84738:r.q(r.tw(r.cw(3,r.pe(10,"excellent"),r.ge(1)),7776e6)),84739:r.q(r.tw(r.cw(0,r.os(r.cx,16,[78,86]),r.ge(1)),7776e6)),84740:r.q(r.tw(r.cw(0,r.os(r.cx,19,[78,86]),r.ge(1)),7776e6)),84741:r.q(r.tw(r.cw(3,r.pe(3,"Home Affordability Calc (Clicked Vet checkbox)"),r.ge(1)),7776e6)),84742:r.q(r.tw(r.cw(3,r.pe(3,"LDP Lead Form (Clicked Vet checkbox)"),r.ge(1)),7776e6)),84743:r.q(r.tw(r.cw(3,r.pe(3,"LDP Monthly Payment (Clicked Vet checkbox)"),r.ge(1)),7776e6)),84744:r.q(r.tw(r.cw(3,r.pe(3,"LDP Payment Estimate Overlay (Clicked Vet checkbox)"),r.ge(1)),7776e6)),84745:r.q(r.tw(r.cw(3,r.pe(3,"Mortgage Calc (Clicked Vet checkbox)"),r.ge(1)),7776e6)),84746:r.q(r.tw(r.cw(3,r.pe(3,"LDP Payment Estimate Overlay (Visit)"),r.ge(1)),7776e6)),84747:r.q(r.tw(r.cw(0,r.as(r.s,4,[1,90]),r.ge(1)),7776e6)),84748:r.q(r.tw(r.cw(0,r.ps(6,"https://www.realtor.com/mortgage"),r.ge(1)),7776e6)),84749:r.q(r.ocq(r.tw(r.cw(0,r.ps(6,"https://www.realtor.com/mortgage/tools/refinance-calculator"),r.ge(1)),7776e6),r.tw(r.cw(0,r.ps(4,"FIN/CALC/REFI"),r.ge(1)),7776e6))),84750:r.q(r.ocq(r.tw(r.cw(0,r.ps(6,"https://www.realtor.com/mortgage/tools/mortgage-calculator"),r.ge(1)),7776e6),r.tw(r.cw(0,r.ps(4,"FIN/CALC/MORT"),r.ge(1)),7776e6))),84751:r.q(r.tw(r.cw(0,r.ps(6,"https://www.realtor.com/mortgage/tools/affordability-calculator"),r.ge(1)),7776e6)),84752:r.q(r.tw(r.cw(3,r.pe(3,\'SRP Moving Cost Calc (Clicked "Get Estimates")\'),r.ge(1)),7776e6)),84753:r.q(r.tw(r.cw(3,r.y(3,84),r.ge(1)),7776e6)),84754:r.q(r.ocq(r.tw(r.cw(0,r.ps(6,"https://www.realtor.com/landlords"),r.ge(1)),7776e6),r.tw(r.cw(0,r.pe(7,"REALTOR.COM/LANDLORDS + CHILD PAGES, AKA AVAIL LANDING PAGES"),r.ge(1)),7776e6))),85007:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],84741)),r.cw(2,r.pe(5,84741)),r.ge(1)),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],84742)),r.cw(2,r.pe(5,84742)),r.ge(1))),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],84745)),r.cw(2,r.pe(5,84745)),r.ge(1))),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],84743)),r.cw(2,r.pe(5,84743)),r.ge(1))),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],84744)),r.cw(2,r.pe(5,84744)),r.ge(1)))),85008:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1000459266",!1,"85008"),r.itp("liveramp_AnalyticsIQ","1005883351",!1,"85008")),r.itp("liveramp_Experian","1004269579",!1,"85008")),r.itp("liveramp_Experian","1004269599",!1,"85008")),r.itp("liveramp_Epsilon","1000459276",!1,"85008")),r.itp("liveramp_AnalyticsIQ","1000691206",!1,"85008")),r.itp("liveramp_Epsilon","1000462846",!1,"85008"))),85009:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Acxiom","1285",!1,"85009"),r.itp("liveramp_Acxiom","4117",!1,"85009")),r.itp("liveramp_Acxiom","300325399",!1,"85009")),r.itp("liveramp_Acxiom","300324999",!1,"85009")),r.itp("liveramp_Acxiom","300325599",!1,"85009")),r.itp("liveramp_Acxiom","300180499",!1,"85009")),r.itp("liveramp_Acxiom","300325999",!1,"85009")),r.itp("liveramp_Acxiom","300326699",!1,"85009")),r.itp("liveramp_Acxiom","1295",!1,"85009")),r.itp("liveramp_Acxiom","300325199",!1,"85009")),r.itp("liveramp_Acxiom","300325499",!1,"85009")),r.itp("liveramp_Acxiom","300325699",!1,"85009")),r.itp("liveramp_Acxiom","300326299",!1,"85009"))),85010:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Acxiom","1948",!1,"85010"),r.itp("liveramp_Acxiom","1244",!1,"85010")),r.itp("liveramp_Acxiom","1248",!1,"85010")),r.itp("liveramp_Acxiom","10506",!1,"85010")),r.itp("liveramp_Acxiom","300437699",!1,"85010")),r.itp("liveramp_Acxiom","1241",!1,"85010")),r.itp("liveramp_Acxiom","1242",!1,"85010")),r.itp("liveramp_Acxiom","1243",!1,"85010")),r.itp("liveramp_Acxiom","1249",!1,"85010")),r.itp("liveramp_Acxiom","300438199",!1,"85010")),r.itp("liveramp_Acxiom","300437699",!1,"85010")),r.itp("liveramp_Acxiom","300437799",!1,"85010"))),85011:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_IXIDigital","1000091534",!1,"85011"),r.itp("liveramp_IXIDigital","1001357449",!1,"85011")),r.itp("liveramp_Acxiom","300493899",!1,"85011")),r.itp("liveramp_Acxiom","300046699",!1,"85011")),r.itp("liveramp_Acxiom","300534499",!1,"85011")),r.itp("liveramp_Acxiom","300046599",!1,"85011")),r.itp("liveramp_Acxiom","300534099",!1,"85011")),r.itp("liveramp_Acxiom","300493799",!1,"85011")),r.itp("liveramp_IXIDigital","1001357439",!1,"85011")),r.itp("liveramp_IXIDigital","1001357459",!1,"85011")),r.itp("liveramp_IXIDigital","1001357479",!1,"85011")),r.itp("liveramp_IXIDigital","1001357499",!1,"85011")),r.itp("liveramp_IXIDigital","1001357449",!1,"85011")),r.itp("liveramp_IXIDigital","1001357469",!1,"85011")),r.itp("liveramp_IXIDigital","1001357489",!1,"85011")),r.itp("liveramp_IXIDigital","1001357509",!1,"85011"))),85012:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1002890016",!1,"85012"),r.itp("liveramp_AnalyticsIQ","1002176636",!1,"85012")),r.itp("liveramp_Experian","1007229001",!1,"85012")),r.itp("eyeota","287",!1,"85012")),r.itp("liveramp_Epsilon","1003070176",!1,"85012")),r.itp("liveramp_Epsilon","1003070146",!1,"85012")),r.itp("liveramp_Epsilon","1003070156",!1,"85012")),r.itp("liveramp_Epsilon","1003070206",!1,"85012")),r.itp("liveramp_Epsilon","1003070216",!1,"85012")),r.itp("liveramp_Epsilon","1003070186",!1,"85012")),r.itp("liveramp_Epsilon","1003070196",!1,"85012")),r.itp("liveramp_Epsilon","1003070226",!1,"85012")),r.itp("liveramp_Epsilon","1003070236",!1,"85012")),r.itp("liveramp_Epsilon","1003070136",!1,"85012")),r.itp("liveramp_Epsilon","1003070306",!1,"85012")),r.itp("liveramp_Epsilon","1003070316",!1,"85012")),r.itp("liveramp_Epsilon","1003070326",!1,"85012")),r.itp("liveramp_StatSocial","1006916281",!1,"85012")),r.itp("liveramp_Epsilon","1003070286",!1,"85012")),r.itp("liveramp_Epsilon","1003070296",!1,"85012")),r.itp("liveramp_Epsilon","1003070856",!1,"85012")),r.itp("liveramp_Epsilon","1003070866",!1,"85012")),r.itp("liveramp_Epsilon","1003200259",!1,"85012")),r.itp("liveramp_Epsilon","1433414455",!1,"85012")),r.itp("liveramp_killi","1006862371",!1,"85012")),r.itp("liveramp_killi","1006862361",!1,"85012")),r.itp("liveramp_killi","1006862351",!1,"85012")),r.itp("liveramp_killi","1006862341",!1,"85012")),r.itp("liveramp_killi","1006862331",!1,"85012")),r.itp("liveramp_killi","1006862321",!1,"85012")),r.itp("liveramp_killi","1006862311",!1,"85012")),r.itp("liveramp_killi","1006862401",!1,"85012")),r.itp("liveramp_killi","1006862391",!1,"85012")),r.itp("liveramp_killi","1006862301",!1,"85012")),r.itp("liveramp_killi","1006862491",!1,"85012")),r.itp("liveramp_killi","1006862481",!1,"85012")),r.itp("liveramp_killi","1006862471",!1,"85012")),r.itp("liveramp_killi","1006862461",!1,"85012")),r.itp("liveramp_killi","1006862451",!1,"85012")),r.itp("liveramp_killi","1006862441",!1,"85012")),r.itp("liveramp_killi","1006862431",!1,"85012")),r.itp("liveramp_killi","1006862421",!1,"85012")),r.itp("liveramp_killi","1006862511",!1,"85012")),r.itp("liveramp_killi","1006862731",!1,"85012"))),85013:r.q(r.ocq(r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],84732)),r.cw(2,r.pe(5,84732)),r.ge(1)),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],85012)),r.cw(2,r.pe(5,85012)),r.ge(1)))),85014:r.q(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Acxiom","1824",!1,"85014"),r.itp("liveramp_Acxiom","1825",!1,"85014")),r.itp("liveramp_Acxiom","4132",!1,"85014")),r.itp("liveramp_Acxiom","4133",!1,"85014"))),85015:r.q(r.ocq(r.itp("liveramp_IXIDigital","1000724556",!1,"85015"),r.itp("liveramp_IXIDigital","1000724566",!1,"85015"))),85016:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_IXIDigital","1000724526",!1,"85016"),r.itp("liveramp_IXIDigital","1000724546",!1,"85016")),r.itp("liveramp_IXIDigital","1000724536",!1,"85016")),r.itp("liveramp_IXIDigital","1000724496",!1,"85016")),r.itp("liveramp_IXIDigital","1000724506",!1,"85016")),r.itp("liveramp_IXIDigital","1000724516",!1,"85016"))),85017:r.q(r.itp("liveramp_Acxiom","300407799",!1,"85017")),85302:r.q(r.tw(r.cw(0,r.ps(6,"moving.com"),r.ge(1)),7776e6)),85403:r.q(r.isp("liveramp_CitiMortgage_news_corp_43fc302bcef24e3f9e6adcfabf7f17ba","1393668231",!1,"85403")),85593:r.q(r.tw(r.cw(0,r.os(r.w,["realtor","searchedCounty"],["06095","06061","06115","06017","06077","06067","06113","06101"]),r.ge(1)),15552e6)),85653:r.q(r.cw(3,r.os(r.w,3,["Advertiser | Citigroup Mortgage | Tier 1 Lead Confirmation Page | Case #30647","Advertiser | Citigroup Mortgage | Tier 1 Lead Confirmation Page | Case 30647"]),r.ge(1))),87312:r.q(r.tw(r.cw(3,r.pe(3,"LDP Monthly Payment (Clicked \'Get Pre-Approved\' button)"),r.ge(1)),7776e6)),87313:r.q(r.tw(r.cw(3,r.pe(3,"LDP Monthly Payment (Clicked \'Veterans\' button)"),r.ge(1)),7776e6)),87314:r.q(r.tw(r.cw(0,r.os(r.s,6,["realtor.com/marketing"]),r.ge(1)),7776e6)),87317:r.q(r.ocq(r.tw(r.cw(0,r.ps(6,"https://www.realtor.com/advice/guides/home-insurance"),r.ge(1)),7776e6),r.tw(r.cw(0,r.pe(7,"INSURGUIDE"),r.ge(1)),7776e6))),87421:r.q(r.tw(r.cw(0,r.ref(2),r.ge(1)),7776e6)),87422:r.q(r.tw(r.cw(0,r.os(r.cx,17,["private mortgage insurance","earthquake insurance","homeowners insurance","liability insurance","umbrella insurance","mortgage insurance","renters insurance","moving insurance","hazard insurance","title insurance","Flood Insurance","life insurance","fire insurance","insurance discounts","Home Insurance Guide","home insurance","insurance"]),r.ge(1)),7776e6)),87487:r.q(r.ocq(r.tw(r.cw(0,r.os(r.cx,17,["Millennial homebuyers","millennials"]),r.ge(3)),3456e7),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],85012)),r.cw(2,r.pe(5,85012)),r.ge(1)))),87488:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],84677)),r.cw(2,r.pe(5,84677)),r.ge(1)),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87490)),r.cw(2,r.pe(5,87490)),r.ge(1))),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87505)),r.cw(2,r.pe(5,87505)),r.ge(1))),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],85302)),r.cw(2,r.pe(5,85302)),r.ge(1))),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87618)),r.cw(2,r.pe(5,87618)),r.ge(1))),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87619)),r.cw(2,r.pe(5,87619)),r.ge(1))),r.tw(r.cw(0,r.a([r.pge(18,0),r.ple(18,6)]),r.ge(30)),2592e6)),r.tw(r.cw(0,r.pge(8,1),r.ge(3)),2592e6)),r.tw(r.cw(0,r.pge(9,1),r.ge(3)),2592e6))),87490:r.q(r.tw(r.cw(3,r.y(3,84),r.ge(1)),2592e6)),87491:r.q(r.tw(r.cw(3,r.y(3,28),r.ge(1)),2592e6)),87492:r.q(r.acq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87491)),r.cw(2,r.pe(5,87491)),r.ge(1)),r.tw(r.cw(0,r.os(r.s,4,["blog2/advice/fin","blog2/video/fin","fin/calc/mort","fin/calc/refi","fin/calc/rentbuy","fin/mort/rates"]),r.ge(3)),7776e6)),r.tw(r.cw(3,r.y(3,80),r.ge(1)),2592e6)),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87505)),r.cw(2,r.pe(5,87505)),r.ge(1))),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87506)),r.cw(2,r.pe(5,87506)),r.ge(1))),r.isp("2P_realtor_consumer_classification_model_PREAPPROVAL","9",!1,"87492")),r.isp("2P_realtor_consumer_classification_model_PREAPPROVAL","8",!1,"87492")),r.tw(r.cw(4,r.ps(21,87),r.ge(1)),7776e6))),87493:r.q(r.tw(r.cw(0,r.os(r.s,4,["nfs","sold"]),r.ge(5)),7776e6)),87494:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87493)),r.cw(2,r.pe(5,87493)),r.ge(1)),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87520)),r.cw(2,r.pe(5,87520)),r.ge(1))),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87521)),r.cw(2,r.pe(5,87521)),r.ge(1))),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87519)),r.cw(2,r.pe(5,87519)),r.ge(1))),r.isp("2P_realtor_consumer_classification_model_SELLER","9",!1,"87494")),r.isp("2P_realtor_consumer_classification_model_SELLER","8",!1,"87494"))),87495:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],83654)),r.cw(2,r.pe(5,83654)),r.ge(1)),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],84750)),r.cw(2,r.pe(5,84750)),r.ge(1))),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],84746)),r.cw(2,r.pe(5,84746)),r.ge(1))),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],84747)),r.cw(2,r.pe(5,84747)),r.ge(1))),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87312)),r.cw(2,r.pe(5,87312)),r.ge(1)))),87496:r.q(r.ocq(r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],83659)),r.cw(2,r.pe(5,83659)),r.ge(1)),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87505)),r.cw(2,r.pe(5,87505)),r.ge(1)))),87497:r.q(r.tw(r.cw(0,r.as(r.s,4,[30,94]),r.ge(1)),7776e6)),87498:r.q(r.ocq(r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87317)),r.cw(2,r.pe(5,87317)),r.ge(1)),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87422)),r.cw(2,r.pe(5,87422)),r.ge(1)))),87500:r.q(r.acq(r.cw(0,r.pe(7,"REALTOR-DASHBOARD"),r.ge(1)),r.cw(0,r.os(r.w,["realtor","dashboardUserType"],["broker","agent"]),r.ge(1)))),87501:r.q(r.cw(3,r.os(r.w,3,[\'Realtor.com/MyHome (Clicked "Search")\',\'Realtor.com/MyHome (Clicked "Claim home")\',\'Realtor.com/MyHome (Clicked "Claim your home")\',\'Realtor.com/MyHome (Clicked "Claim my home")\']),r.ge(1))),87502:r.q(r.cw(0,r.os(r.w,7,["REALTOR.COM/SELL","SELLERS-MARKETPLACE"]),r.ge(1))),87503:r.q(r.tw(r.cw(0,r.y(7,29),r.ge(1)),7776e6)),87504:r.q(r.tw(r.cw(0,r.y(7,29),r.ge(2)),7776e6)),87505:r.q(r.acq(r.tw(r.cw(0,r.pe(7,"FAR"),r.ge(1)),7776e6),r.tw(r.cw(3,r.pe(3,"FAR Realtor.com/RealEstateAgents (Submitted lead/email)"),r.ge(1)),7776e6))),87506:r.q(r.cw(3,r.y(3,85),r.ge(1))),87507:r.q(r.tw(r.cw(4,r.ps(21,87),r.ge(1)),7776e6)),87508:r.q(r.ocq(r.ocq(r.itp("liveramp_IXIDigital","1000724596",!1,"87508"),r.itp("liveramp_IXIDigital","1000724586",!1,"87508")),r.itp("liveramp_IXIDigital","1000724576",!1,"87508"))),87509:r.q(r.ocq(r.itp("liveramp_IXIDigital","1000724616",!1,"87509"),r.itp("liveramp_IXIDigital","1000724606",!1,"87509"))),87510:r.q(r.tw(r.cw(0,r.pe(15,"LAND"),r.ge(1)),7776e6)),87511:r.q(r.tw(r.cw(0,r.pe(15,"MFD/MOBILE_HOME"),r.ge(1)),7776e6)),87512:r.q(r.acq(r.ocq(r.ocq(r.tw(r.cw(0,r.os(r.cx,16,[83,79,88,82,76]),r.ge(1)),7776e6),r.tw(r.cw(0,r.os(r.cx,19,[76,79,88,"LUXKITCH",82,83]),r.ge(2)),7776e6)),r.tw(r.cw(0,r.pge(["realtor","sqft"],2500),r.ge(2)),7776e6)),r.ocq(r.ocq(r.tw(r.cw(0,r.pge(9,75e4),r.ge(1)),7776e6),r.tw(r.cw(0,r.pge(8,75e4),r.ge(1)),7776e6)),r.tw(r.cw(0,r.pge(["realtor","listingPrice"],15e5),r.ge(3)),7776e6)))),87513:r.q(r.ocq(r.ocq(r.tw(r.cw(0,r.as(r.s,4,["buy",91]),r.ge(10)),864e5),r.tw(r.cw(0,r.as(r.s,4,[31,95]),r.ge(10)),864e5)),r.tw(r.cw(0,r.as(r.s,4,[95,32]),r.ge(10)),864e5))),87514:r.q(r.ocq(r.ocq(r.tw(r.cw(0,r.as(r.s,4,[91,2]),r.ge(10)),864e5),r.tw(r.cw(0,r.as(r.s,4,[31,2]),r.ge(10)),864e5)),r.tw(r.cw(0,r.as(r.s,4,[2,32]),r.ge(10)),864e5))),87515:r.q(r.ocq(r.tw(r.cw(0,r.as(r.s,4,[30,31]),r.ge(10)),864e5),r.tw(r.cw(0,r.as(r.s,4,[30,32]),r.ge(10)),864e5))),87516:r.q(r.ocq(r.tw(r.cw(0,r.a([r.ps(4,"LDP"),r.ref(3)]),r.ge(10)),864e5),r.tw(r.cw(0,r.a([r.ps(4,"SRP"),r.ref(3)]),r.ge(10)),864e5))),87517:r.q(r.itp("liveramp_Acxiom","1249",!1,"87517")),87518:r.q(r.acq(r.ocq(r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87517)),r.cw(2,r.pe(5,87517)),r.ge(1)),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],84677)),r.cw(2,r.pe(5,84677)),r.ge(1))),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87496)),r.cw(2,r.pe(5,87496)),r.e(0)))),87519:r.q(r.tw(r.cw(0,r.y(7,29),r.ge(3)),15552e6)),87520:r.q(r.tw(r.cw(0,r.ref(1),r.ge(2)),7776e6)),87521:r.q(r.tw(r.cw(3,r.y(3,85),r.ge(1)),15552e6)),87522:r.q(r.itp("liveramp_Acxiom","300408299",!1,"87522")),87523:r.q(r.itp("liveramp_Acxiom","300409099",!1,"87523")),87524:r.q(r.itp("liveramp_Acxiom","300408399",!1,"87524")),87587:r.q(r.ocq(r.lm("b5d081b2-c589-4ba9-945c-a0da6335910c",r.ge(.9026623)),r.ifp("87512"))),87588:r.q(r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87587)),r.cw(2,r.pe(5,87587)),r.ge(1))),87591:r.q(r.ocq(r.tw(r.cw(0,r.pge(8,2e6),r.ge(1)),2592e6),r.tw(r.cw(0,r.pge(9,2e6),r.ge(1)),2592e6))),87592:r.q(r.ocq(r.tw(r.cw(0,r.pge(8,1e6),r.ge(1)),2592e6),r.tw(r.cw(0,r.pge(9,1e6),r.ge(1)),2592e6))),87594:r.q(r.ocq(r.tw(r.cw(0,r.a([r.pge(8,75e4),r.ple(8,1e6)]),r.ge(1)),2592e6),r.tw(r.cw(0,r.a([r.pge(9,75e4),r.ple(8,1e6)]),r.ge(1)),2592e6))),87595:r.q(r.ocq(r.tw(r.cw(0,r.a([r.pge(8,5e5),r.ple(8,75e4)]),r.ge(1)),2592e6),r.tw(r.cw(0,r.a([r.pge(9,5e5),r.ple(9,75e4)]),r.ge(1)),2592e6))),87596:r.q(r.ocq(r.tw(r.cw(0,r.a([r.pge(8,5e5),r.ple(8,1e6)]),r.ge(1)),2592e6),r.tw(r.cw(0,r.a([r.pge(9,5e5),r.ple(9,1e6)]),r.ge(1)),2592e6))),87597:r.q(r.ocq(r.tw(r.cw(0,r.a([r.pge(8,25e4),r.ple(8,5e5)]),r.ge(1)),2592e6),r.tw(r.cw(0,r.a([r.pge(9,25e4),r.ple(9,5e5)]),r.ge(1)),2592e6))),87598:r.q(r.ocq(r.tw(r.cw(0,r.ple(8,25e4),r.ge(1)),2592e6),r.tw(r.cw(0,r.ple(9,25e4),r.ge(1)),2592e6))),87599:r.q(r.ocq(r.tw(r.cw(0,r.ple(8,75e3),r.ge(1)),2592e6),r.tw(r.cw(0,r.ple(9,75e3),r.ge(1)),2592e6))),87600:r.q(r.ocq(r.tw(r.cw(0,r.as(r.s,4,[94,2]),r.ge(1)),7776e6),r.tw(r.cw(0,r.as(r.s,4,[1,2]),r.ge(1)),7776e6))),87601:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_IXIDigital","1001357549",!1,"87601"),r.itp("liveramp_IXIDigital","1001357559",!1,"87601")),r.itp("liveramp_RoyMorgan","1003202189",!1,"87601")),r.itp("liveramp_Alliant","1000846336",!1,"87601")),r.itp("liveramp_Experian","1004577759",!1,"87601")),r.itp("liveramp_Acxiom","1948",!1,"87601")),r.itp("liveramp_Acxiom","1247",!1,"87601")),r.itp("liveramp_Acxiom","300448899",!1,"87601")),r.itp("liveramp_Yougov","1006309681",!1,"87601")),r.itp("liveramp_Kantar","1004779909",!1,"87601")),r.itp("liveramp_IXIDigital","1001357519",!1,"87601")),r.itp("liveramp_IXIDigital","1001357569",!1,"87601")),r.itp("liveramp_Epsilon","1000454986",!1,"87601")),r.itp("liveramp_IXIDigital","1001357539",!1,"87601")),r.itp("liveramp_IXIDigital","1001357599",!1,"87601")),r.itp("liveramp_IXIDigital","1001357589",!1,"87601")),r.itp("liveramp_IXIDigital","1001357549",!1,"87601")),r.itp("eyeota","1407",!1,"87601")),r.itp("liveramp_IXIDigital","1001357529",!1,"87601")),r.itp("liveramp_Epsilon","1000454986",!1,"87601")),r.itp("liveramp_Epsilon","1000454996",!1,"87601")),r.itp("liveramp_RoyMorgan","1003202309",!1,"87601")),r.itp("liveramp_Epsilon","1003004956",!1,"87601")),r.itp("liveramp_Epsilon","1003004946",!1,"87601"))),87602:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Acxiom","1948",!1,"87602"),r.itp("liveramp_Alliant","1000847486",!1,"87602")),r.itp("liveramp_Alliant","1000847516",!1,"87602")),r.itp("liveramp_Alliant","1000846316",!1,"87602")),r.itp("liveramp_Alliant","1000847496",!1,"87602")),r.itp("liveramp_RoyMorgan","1003202189",!1,"87602")),r.itp("liveramp_Alliant","1000846336",!1,"87602")),r.itp("liveramp_Epsilon","1003004796",!1,"87602")),r.itp("liveramp_Epsilon","1003004806",!1,"87602")),r.itp("liveramp_Epsilon","1003005026",!1,"87602")),r.itp("liveramp_Epsilon","1003022136",!1,"87602")),r.itp("liveramp_Epsilon","1003022116",!1,"87602")),r.itp("liveramp_Epsilon","1003022146",!1,"87602"))),87603:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Stirista","1004818349",!1,"87603"),r.itp("liveramp_ShareThis","1005134289",!1,"87603")),r.itp("eyeota","1419",!1,"87603")),r.itp("liveramp_Alliant","1000847476",!1,"87603")),r.itp("liveramp_RoyMorgan","1003202209",!1,"87603")),r.itp("liveramp_Acxiom","300614099",!1,"87603")),r.itp("liveramp_Epsilon","1003004826",!1,"87603")),r.itp("liveramp_Epsilon","1003004836",!1,"87603"))),87604:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Acxiom","32003",!1,"87604"),r.itp("eyeota","230",!1,"87604")),r.itp("liveramp_Epsilon","1003071356",!1,"87604")),r.itp("liveramp_ShareThis","1003555999",!1,"87604")),r.itp("eyeota","6676",!1,"87604"))),87605:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_ShareThis","1003555809",!1,"87605"),r.itp("liveramp_Acxiom","32004",!1,"87605")),r.itp("eyeota","232",!1,"87605")),r.itp("eyeota","6677",!1,"87605")),r.itp("liveramp_Epsilon","1003071416",!1,"87605"))),87606:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_ShareThis","1003556099",!1,"87606"),r.itp("liveramp_Acxiom","32005",!1,"87606")),r.itp("eyeota","234",!1,"87606")),r.itp("eyeota","6678",!1,"87606")),r.itp("liveramp_Epsilon","1003071406",!1,"87606"))),87608:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_ShareThis","1003555819",!1,"87608"),r.itp("liveramp_Acxiom","32006",!1,"87608")),r.itp("eyeota","235",!1,"87608")),r.itp("eyeota","6679",!1,"87608")),r.itp("liveramp_Epsilon","1003071396",!1,"87608"))),87610:r.q(r.tw(r.cw(3,r.os(r.w,3,["Visited Organized-Home.com","Visited Gardenista.com","Visited Remodelista.com"]),r.ge(1)),7776e6)),87611:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Acxiom","300728799",!1,"87611"),r.itp("liveramp_Acxiom","300424706",!1,"87611")),r.itp("liveramp_Experian","1004258429",!1,"87611")),r.itp("liveramp_Experian","1004258689",!1,"87611")),r.itp("liveramp_Experian","1004261369",!1,"87611")),r.itp("liveramp_Experian","1004269059",!1,"87611")),r.itp("liveramp_AnalyticsIQ","1001373109",!1,"87611")),r.itp("liveramp_Acxiom","300324899",!1,"87611")),r.itp("liveramp_IPSOS","1002977076",!1,"87611"))),87612:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1000458646",!1,"87612"),r.itp("liveramp_Epsilon","1000458636",!1,"87612")),r.itp("liveramp_Epsilon","1000458656",!1,"87612")),r.itp("liveramp_Bombora","1005405039",!1,"87612")),r.itp("liveramp_killi","1006833241",!1,"87612")),r.itp("liveramp_AnalyticsIQ","1003081666",!1,"87612")),r.itp("liveramp_AnalyticsIQ","1003519939",!1,"87612")),r.itp("liveramp_AnalyticsIQ","1003519949",!1,"87612")),r.itp("liveramp_AnalyticsIQ","1000689766",!1,"87612")),r.itp("liveramp_AnalyticsIQ","1003519959",!1,"87612")),r.itp("liveramp_AnalyticsIQ","1000689776",!1,"87612")),r.itp("liveramp_Alliant","1004570889",!1,"87612")),r.itp("liveramp_IXIDigital","1000090114",!1,"87612")),r.itp("liveramp_IXIDigital","1000090104",!1,"87612")),r.itp("liveramp_IXIDigital","1003150479",!1,"87612")),r.itp("liveramp_IXIDigital","1003150469",!1,"87612")),r.itp("liveramp_IXIDigital","1003590449",!1,"87612")),r.itp("liveramp_IXIDigital","1003590459",!1,"87612")),r.itp("liveramp_Experian","1005797961",!1,"87612")),r.itp("liveramp_Experian","1005797981",!1,"87612")),r.itp("liveramp_Illion","1005258349",!1,"87612"))),87613:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1000458816",!1,"87613"),r.itp("liveramp_Epsilon","1000458836",!1,"87613")),r.itp("liveramp_Epsilon","1000458826",!1,"87613")),r.itp("liveramp_Epsilon","1000458666",!1,"87613")),r.itp("liveramp_Epsilon","1000458806",!1,"87613")),r.itp("liveramp_Epsilon","1000458676",!1,"87613")),r.itp("liveramp_Experian","1005798001",!1,"87613")),r.itp("liveramp_IXIDigital","1003590439",!1,"87613")),r.itp("liveramp_IXIDigital","1003590429",!1,"87613")),r.itp("liveramp_Alliant","1004570899",!1,"87613")),r.itp("liveramp_Alliant","1004570909",!1,"87613")),r.itp("liveramp_AnalyticsIQ","1003519969",!1,"87613")),r.itp("liveramp_AnalyticsIQ","1003519979",!1,"87613")),r.itp("liveramp_AnalyticsIQ","1000689786",!1,"87613")),r.itp("liveramp_AnalyticsIQ","1000689796",!1,"87613")),r.itp("liveramp_IXIDigital","1003150459",!1,"87613")),r.itp("liveramp_IXIDigital","1003150449",!1,"87613")),r.itp("liveramp_IXIDigital","1000090094",!1,"87613")),r.itp("liveramp_IXIDigital","1000090084",!1,"87613"))),87614:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1000458846",!1,"87614"),r.itp("liveramp_Epsilon","1000458856",!1,"87614")),r.itp("liveramp_Epsilon","1000458866",!1,"87614")),r.itp("liveramp_Epsilon","1000458886",!1,"87614")),r.itp("liveramp_Epsilon","1000458876",!1,"87614")),r.itp("liveramp_Epsilon","1000458686",!1,"87614")),r.itp("liveramp_Experian","1004602239",!1,"87614")),r.itp("liveramp_IXIDigital","1003590419",!1,"87614")),r.itp("liveramp_IXIDigital","1003590409",!1,"87614")),r.itp("liveramp_Alliant","1004570919",!1,"87614")),r.itp("liveramp_Alliant","1004570929",!1,"87614")),r.itp("liveramp_AnalyticsIQ","1003519989",!1,"87614")),r.itp("liveramp_AnalyticsIQ","1003519999",!1,"87614")),r.itp("liveramp_AnalyticsIQ","1000689806",!1,"87614")),r.itp("liveramp_AnalyticsIQ","1000689816",!1,"87614")),r.itp("liveramp_IXIDigital","1003150439",!1,"87614")),r.itp("liveramp_IXIDigital","1003150429",!1,"87614")),r.itp("liveramp_IXIDigital","1000090064",!1,"87614")),r.itp("liveramp_IXIDigital","1000090074",!1,"87614"))),87615:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Bombora","1005405069",!1,"87615"),r.itp("liveramp_Experian","1004602249",!1,"87615")),r.itp("liveramp_Acxiom","1932",!1,"87615")),r.itp("eyeota","240",!1,"87615")),r.itp("liveramp_Epsilon","1000458896",!1,"87615")),r.itp("liveramp_Epsilon","1000458696",!1,"87615")),r.itp("liveramp_IXIDigital","1003590399",!1,"87615")),r.itp("liveramp_IXIDigital","1000090054",!1,"87615")),r.itp("liveramp_Alliant","1004570949",!1,"87615")),r.itp("liveramp_Alliant","1004570959",!1,"87615")),r.itp("liveramp_AnalyticsIQ","1003520009",!1,"87615")),r.itp("liveramp_AnalyticsIQ","1000689826",!1,"87615")),r.itp("liveramp_IXIDigital","1003150419",!1,"87615")),r.itp("liveramp_IXIDigital","1000090054",!1,"87615"))),87616:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Experian","1004602259",!1,"87616"),r.itp("liveramp_Experian","1004602269",!1,"87616")),r.itp("liveramp_Experian","1004602279",!1,"87616")),r.itp("liveramp_Experian","1004602289",!1,"87616")),r.itp("liveramp_Experian","1004602299",!1,"87616")),r.itp("liveramp_Experian","1004602309",!1,"87616")),r.itp("liveramp_Bombora","1005405079",!1,"87616")),r.itp("liveramp_Bombora","1005405089",!1,"87616")),r.itp("liveramp_Bombora","1005405099",!1,"87616")),r.itp("liveramp_AnalyticsIQ","1003520019",!1,"87616")),r.itp("liveramp_AnalyticsIQ","1000689836",!1,"87616")),r.itp("liveramp_AnalyticsIQ","1003520029",!1,"87616")),r.itp("liveramp_AnalyticsIQ","1003520039",!1,"87616")),r.itp("liveramp_AnalyticsIQ","1003520049",!1,"87616")),r.itp("liveramp_AnalyticsIQ","1003520059",!1,"87616")),r.itp("liveramp_AnalyticsIQ","1000689846",!1,"87616")),r.itp("liveramp_AnalyticsIQ","1000689856",!1,"87616")),r.itp("liveramp_AnalyticsIQ","1000689866",!1,"87616")),r.itp("liveramp_AnalyticsIQ","1000689876",!1,"87616")),r.itp("liveramp_IXIDigital","1000090044",!1,"87616")),r.itp("liveramp_IXIDigital","1000090034",!1,"87616")),r.itp("liveramp_IXIDigital","1000090024",!1,"87616")),r.itp("liveramp_IXIDigital","1000090014",!1,"87616")),r.itp("liveramp_IXIDigital","1003590389",!1,"87616")),r.itp("liveramp_IXIDigital","1003590379",!1,"87616")),r.itp("liveramp_IXIDigital","1003590369",!1,"87616")),r.itp("liveramp_IXIDigital","1003590359",!1,"87616")),r.itp("liveramp_Alliant","1004570969",!1,"87616")),r.itp("liveramp_Alliant","1004570979",!1,"87616")),r.itp("liveramp_Alliant","1004570989",!1,"87616")),r.itp("liveramp_Alliant","1004570999",!1,"87616")),r.itp("liveramp_Alliant","1004571009",!1,"87616")),r.itp("liveramp_IXIDigital","1003150409",!1,"87616")),r.itp("liveramp_IXIDigital","1003150399",!1,"87616")),r.itp("liveramp_IXIDigital","1003150389",!1,"87616")),r.itp("liveramp_IXIDigital","1003150379",!1,"87616"))),87617:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Experian","1004602299",!1,"87617"),r.itp("liveramp_Experian","1004602309",!1,"87617")),r.itp("liveramp_Bombora","1005405099",!1,"87617")),r.itp("liveramp_AnalyticsIQ","1003520049",!1,"87617")),r.itp("liveramp_AnalyticsIQ","1003520059",!1,"87617")),r.itp("liveramp_AnalyticsIQ","1000689866",!1,"87617")),r.itp("liveramp_AnalyticsIQ","1000689876",!1,"87617")),r.itp("liveramp_IXIDigital","1000090014",!1,"87617")),r.itp("liveramp_IXIDigital","1003590359",!1,"87617")),r.itp("liveramp_IXIDigital","1003150379",!1,"87617")),r.itp("liveramp_Acxiom","10809",!1,"87617")),r.itp("liveramp_Stirista","1000044974",!1,"87617")),r.itp("liveramp_Epsilon","1000459116",!1,"87617")),r.itp("liveramp_Bombora","1005405099",!1,"87617"))),87618:r.q(r.tw(r.cw(3,r.y(3,80),r.ge(2)),7776e6)),87619:r.q(r.tw(r.cw(3,r.y(3,28),r.ge(2)),2592e6)),87806:r.q(r.tw(r.cw(3,r.pe(3,"AVAIL: signed up as Tenant"),r.ge(1)),7776e6)),88152:r.q(r.isp("liveramp_TXU_Energy_news_corp_43fc302bcef24e3f9e6adcfabf7f17ba","376095076",!1,"88152")),88153:r.q(r.isp("liveramp_TXU_Energy_news_corp_43fc302bcef24e3f9e6adcfabf7f17ba","1663327893",!1,"88153")),88973:r.q(r.itp("liveramp_Acxiom","1266",!1,"88973")),88974:r.q(r.ocq(r.ocq(r.ocq(r.tw(r.cw(0,r.os(r.cx,17,["home equity line of credit","home equity loan","home equity","Dream Bathroom Remodeling Guide","Dream Kitchen Remodeling Guide","historical remodel","Bathroom Remodel","kitchen remodel","remodeling costs","planning remodeling","kitchen remodeling","remodeling","home remodeling","home projects","DIY home improvement","how to plan home improvements","home improvement loan","Home Improvements","home improvement","refinancing","refinance","HELOC"]),r.ge(1)),7776e6),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],84749)),r.cw(2,r.pe(5,84749)),r.ge(1))),r.tw(r.cw(0,r.a([r.ps(4,"BLOG"),r.os(r.s,4,[90,92])]),r.ge(1)),7776e6)),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],83654)),r.cw(2,r.pe(5,83654)),r.ge(1)))),88975:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Acxiom","32001",!1,"88975"),r.itp("eyeota","225",!1,"88975")),r.itp("eyeota","6672",!1,"88975")),r.itp("liveramp_Epsilon","1003071376",!1,"88975")),r.itp("liveramp_Alliant","1000848126",!1,"88975")),r.itp("liveramp_Alliant","1000848906",!1,"88975"))),89152:r.q(r.tw(r.cw(0,r.pe(7,"SUPPORT.REALTOR.COM/S/ aka Support for Real Estate Professionals"),r.ge(1)),7776e6)),89855:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_ShareThis","1001785066",!1,"89855"),r.itp("liveramp_Experian","1004266459",!1,"89855")),r.itp("liveramp_Acxiom","10500",!1,"89855")),r.itp("liveramp_Epsilon","1002890146",!1,"89855")),r.itp("eyeota","35480",!1,"89855")),r.itp("liveramp_Epsilon","1002889896",!1,"89855"))),89856:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Experian","1004266409",!1,"89856"),r.itp("liveramp_Acxiom","1200",!1,"89856")),r.itp("eyeota","35478",!1,"89856")),r.itp("liveramp_Epsilon","1002890066",!1,"89856")),r.itp("liveramp_AnalyticsIQ","1001528856",!1,"89856")),r.itp("liveramp_Epsilon","1002889546",!1,"89856")),r.itp("liveramp_PlaceIQ","1002437676",!1,"89856"))),89857:r.q(r.itp("liveramp_Alliant","1001431359",!1,"89857")),89858:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_ShareThis","1005134259",!1,"89858"),r.itp("liveramp_IXIDigital","1000091374",!1,"89858")),r.itp("liveramp_Acxiom","300175599",!1,"89858")),r.itp("liveramp_ShareThis","1005134159",!1,"89858")),r.itp("liveramp_OnAudience","1002862206",!1,"89858")),r.itp("liveramp_OnAudience","1002860726",!1,"89858")),r.itp("liveramp_ShareThis","1001011089",!1,"89858")),r.itp("eyeota","35696",!1,"89858")),r.itp("liveramp_ShareThis","1001601026",!1,"89858"))),89859:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_CoreLogic","1005092719",!1,"89859"),r.itp("liveramp_IXIDigital","1001357359",!1,"89859")),r.itp("liveramp_IXIDigital","1001357369",!1,"89859")),r.itp("liveramp_CoreLogic","1000868806",!1,"89859")),r.itp("liveramp_Acxiom","300047599",!1,"89859")),r.itp("liveramp_CoreLogic","1000868966",!1,"89859")),r.itp("liveramp_Acxiom","300047499",!1,"89859")),r.itp("liveramp_Acxiom","300494699",!1,"89859")),r.itp("liveramp_Experian","1004266879",!1,"89859")),r.itp("liveramp_Acxiom","300533099",!1,"89859")),r.itp("liveramp_Acxiom","300533999",!1,"89859")),r.itp("liveramp_Experian","1004266889",!1,"89859")),r.itp("liveramp_Acxiom","300493999",!1,"89859")),r.itp("liveramp_Epsilon","1000462086",!1,"89859"))),89860:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("eyeota","35713",!1,"89860"),r.itp("eyeota","6702",!1,"89860")),r.itp("liveramp_Kantar","1004780049",!1,"89860")),r.itp("liveramp_OnAudience","1002860736",!1,"89860")),r.itp("liveramp_Acxiom","4118",!1,"89860")),r.itp("liveramp_OnAudience","1002860686",!1,"89860")),r.itp("liveramp_Acxiom","1276",!1,"89860")),r.itp("liveramp_Acxiom","1275",!1,"89860")),r.itp("eyeota","1466",!1,"89860")),r.itp("liveramp_ShareThis","1001011119",!1,"89860")),r.itp("liveramp_AnalyticsIQ","1003048729",!1,"89860")),r.itp("liveramp_OnAudience","1002860716",!1,"89860")),r.itp("liveramp_Alliant","1000847456",!1,"89860"))),89861:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Mastercard","1005907141",!1,"89861"),r.itp("liveramp_Kantar","1004779829",!1,"89861")),r.itp("liveramp_IRI","1003675099",!1,"89861")),r.itp("liveramp_Acxiom","1211",!1,"89861")),r.itp("liveramp_Acxiom","1212",!1,"89861")),r.itp("liveramp_ShareThis","1006582341",!1,"89861")),r.itp("liveramp_Acxiom","4110",!1,"89861")),r.itp("eyeota","35787",!1,"89861")),r.itp("eyeota","1661",!1,"89861")),r.itp("liveramp_OnAudience","1002860026",!1,"89861")),r.itp("liveramp_OnAudience","1002859996",!1,"89861")),r.itp("liveramp_Alliant","1000850586",!1,"89861"))),89862:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("eyeota","6688",!1,"89862"),r.itp("liveramp_Alliant","1000847586",!1,"89862")),r.itp("liveramp_Alliant","1000846236",!1,"89862")),r.itp("liveramp_Alliant","1000846226",!1,"89862")),r.itp("liveramp_Alliant","1000847576",!1,"89862")),r.itp("liveramp_Epsilon","1003200289",!1,"89862")),r.itp("liveramp_Epsilon","1003200299",!1,"89862")),r.itp("liveramp_Epsilon","1003200269",!1,"89862")),r.itp("liveramp_Epsilon","1003200279",!1,"89862")),r.itp("liveramp_Epsilon","1003200309",!1,"89862")),r.itp("liveramp_Epsilon","1000462906",!1,"89862")),r.itp("liveramp_Epsilon","1000462886",!1,"89862")),r.itp("liveramp_AnalyticsIQ","1000691456",!1,"89862")),r.itp("liveramp_AnalyticsIQ","1000691156",!1,"89862")),r.itp("liveramp_AnalyticsIQ","1000691166",!1,"89862")),r.itp("liveramp_AnalyticsIQ","1000691176",!1,"89862")),r.itp("liveramp_AnalyticsIQ","1000691186",!1,"89862")),r.itp("liveramp_AnalyticsIQ","1000691196",!1,"89862")),r.itp("liveramp_Epsilon","1000991509",!1,"89862")),r.itp("liveramp_killi","1006832841",!1,"89862")),r.itp("liveramp_Experian","1007228971",!1,"89862")),r.itp("liveramp_Experian","1007228971",!1,"89862")),r.itp("liveramp_Acxiom","1821",!1,"89862")),r.itp("liveramp_Epsilon","1000462976",!1,"89862")),r.itp("liveramp_Experian","1004256609",!1,"89862")),r.itp("liveramp_Experian","1004256539",!1,"89862")),r.itp("liveramp_Experian","1004256579",!1,"89862")),r.itp("liveramp_Experian","1004256559",!1,"89862")),r.itp("liveramp_Experian","1004256569",!1,"89862")),r.itp("liveramp_Experian","1004256589",!1,"89862")),r.itp("liveramp_Experian","1004256549",!1,"89862")),r.itp("liveramp_Experian","1004256599",!1,"89862")),r.itp("liveramp_Epsilon","1000461096",!1,"89862"))),89863:r.q(r.acq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1000461006",!1,"89863"),r.itp("liveramp_Epsilon","1000461016",!1,"89863")),r.itp("liveramp_Epsilon","1000461046",!1,"89863")),r.itp("liveramp_Epsilon","1000461126",!1,"89863")),r.itp("liveramp_killi","1007022141",!1,"89863")),r.itp("liveramp_AnalyticsIQ","1000692626",!1,"89863")),r.itp("liveramp_Experian","1004601729",!1,"89863")),r.itp("liveramp_Acxiom","1284",!1,"89863")),r.itp("liveramp_OnAudience","1002860576",!1,"89863")),r.itp("liveramp_StatSocial","1006914121",!1,"89863")),r.itp("liveramp_Alliant","1000851556",!1,"89863")),r.itp("liveramp_OnAudience","1002861716",!1,"89863")),r.itp("liveramp_Experian","1004261319",!1,"89863")),r.itp("liveramp_Experian","1004261329",!1,"89863")),r.itp("liveramp_Experian","1004261339",!1,"89863")),r.itp("liveramp_Alliant","1000851416",!1,"89863")),r.itp("liveramp_StatSocial","1006918741",!1,"89863")),r.itp("eyeota","35842",!1,"89863")),r.itp("eyeota","1530",!1,"89863")),r.itp("liveramp_ShareThis","1001601426",!1,"89863")),r.itp("liveramp_Alliant","1000851066",!1,"89863")),r.itp("liveramp_Alliant","1000846946",!1,"89863")),r.itp("liveramp_Alliant","1000851226",!1,"89863")),r.itp("liveramp_Alliant","1000846946",!1,"89863")),r.itp("liveramp_Epsilon","1000464236",!1,"89863")),r.itp("liveramp_Alliant","1000851226",!1,"89863")),r.itp("eyeota","1637",!1,"89863")),r.itp("eyeota","1639",!1,"89863")),r.itp("eyeota","1645",!1,"89863")),r.itp("liveramp_AnalyticsIQ","1001926246",!1,"89863")),r.itp("liveramp_Epsilon","1000464306",!1,"89863")),r.itp("liveramp_Kantar","1004780219",!1,"89863")),r.itp("liveramp_Epsilon","1000464526",!1,"89863")),r.itp("liveramp_Alliant","1000846976",!1,"89863")),r.itp("liveramp_Experian","1004263259",!1,"89863")),r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Acxiom","300729399",!1,"89863"),r.itp("liveramp_Acxiom","300729299",!1,"89863")),r.itp("liveramp_Acxiom","300730399",!1,"89863")),r.itp("liveramp_Acxiom","300727599",!1,"89863")),r.itp("liveramp_Acxiom","300728099",!1,"89863")),r.itp("liveramp_Acxiom","300729599",!1,"89863")),r.itp("liveramp_Acxiom","300729499",!1,"89863")),r.itp("liveramp_AnalyticsIQ","1002176656",!1,"89863")),r.itp("liveramp_StatSocial","1006911331",!1,"89863")),r.itp("liveramp_AnalyticsIQ","1000691006",!1,"89863")),r.itp("eyeota","300",!1,"89863")),r.itp("liveramp_ShareThis","1003555829",!1,"89863")),r.itp("liveramp_Experian","1004256479",!1,"89863")),r.itp("liveramp_Illion","1005350369",!1,"89863")),r.itp("liveramp_Acxiom","1957",!1,"89863")),r.itp("eyeota","6680",!1,"89863")),r.itp("eyeota","35435",!1,"89863")))),89864:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_killi","1006992091",!1,"89864"),r.itp("liveramp_Stirista","1003716309",!1,"89864")),r.itp("eyeota","322",!1,"89864")),r.itp("liveramp_Epsilon","1000462956",!1,"89864")),r.itp("liveramp_AnalyticsIQ","1000692946",!1,"89864")),r.itp("liveramp_Acxiom","1272",!1,"89864")),r.itp("liveramp_AnalyticsIQ","1000692946",!1,"89864")),r.itp("eyeota","13038",!1,"89864")),r.itp("liveramp_Epsilon","1000983559",!1,"89864")),r.itp("liveramp_Epsilon","1000983549",!1,"89864")),r.itp("liveramp_AudienceElements","1001850966",!1,"89864")),r.itp("liveramp_Acxiom","1271",!1,"89864")),r.itp("liveramp_Acxiom","1270",!1,"89864")),r.itp("eyeota","323",!1,"89864")),r.itp("eyeota","35804",!1,"89864")),r.itp("eyeota","35801",!1,"89864")),r.itp("eyeota","323",!1,"89864")),r.itp("eyeota","324",!1,"89864")),r.itp("eyeota","35802",!1,"89864"))),89865:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_AnalyticsIQ","1000692006",!1,"89865"),r.itp("liveramp_Acxiom","1270",!1,"89865")),r.itp("liveramp_Stirista","1000046814",!1,"89865")),r.itp("liveramp_Experian","1004268079",!1,"89865")),r.itp("liveramp_Stirista","1003716329",!1,"89865")),r.itp("liveramp_Epsilon","1000462016",!1,"89865")),r.itp("eyeota","323",!1,"89865"))),89866:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_AnalyticsIQ","1000692336",!1,"89866"),r.itp("liveramp_Acxiom","1271",!1,"89866")),r.itp("liveramp_Stirista","1000046824",!1,"89866")),r.itp("liveramp_Experian","1004268119",!1,"89866")),r.itp("liveramp_Stirista","1003716319",!1,"89866")),r.itp("liveramp_Epsilon","1000462026",!1,"89866")),r.itp("liveramp_Epsilon","1003067876",!1,"89866")),r.itp("liveramp_Epsilon","1003067866",!1,"89866")),r.itp("eyeota","324",!1,"89866"))),89867:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_ShareThis","1006582371",!1,"89867"),r.itp("eyeota","6682",!1,"89867")),r.itp("eyeota","35500",!1,"89867")),r.itp("liveramp_Alliant","1000846216",!1,"89867")),r.itp("liveramp_AnalyticsIQ","1000691486",!1,"89867")),r.itp("liveramp_CoreLogic","1000868836",!1,"89867")),r.itp("liveramp_Experian","1004256519",!1,"89867")),r.itp("liveramp_PlaceIQ","1002437216",!1,"89867")),r.itp("liveramp_Epsilon","1000462106",!1,"89867")),r.itp("liveramp_Acxiom","1964",!1,"89867"))),90029:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_ShareThis","1001009459",!1,"90029"),r.itp("liveramp_killi","1006892721",!1,"90029")),r.itp("liveramp_Experian","1004265459",!1,"90029")),r.itp("liveramp_Experian","1004263299",!1,"90029")),r.itp("liveramp_Stirista","1003671679",!1,"90029")),r.itp("eyeota","35407",!1,"90029")),r.itp("eyeota","6713",!1,"90029")),r.itp("liveramp_Alliant","1000847876",!1,"90029")),r.itp("liveramp_Epsilon","1003067326",!1,"90029")),r.itp("liveramp_AnalyticsIQ","1001372989",!1,"90029")),r.itp("liveramp_AnalyticsIQ","1001372999",!1,"90029")),r.itp("liveramp_OnAudience","1002863426",!1,"90029")),r.itp("liveramp_Acxiom","301127740",!1,"90029")),r.itp("liveramp_Alliant","1000852156",!1,"90029")),r.itp("liveramp_Epsilon","1003068126",!1,"90029")),r.itp("liveramp_Epsilon","1003068696",!1,"90029")),r.itp("liveramp_Epsilon","1003068686",!1,"90029")),r.itp("liveramp_Kantar","1004779419",!1,"90029")),r.itp("liveramp_Epsilon","1003068676",!1,"90029")),r.itp("liveramp_Epsilon","1000990429",!1,"90029")),r.itp("liveramp_Epsilon","1000990419",!1,"90029")),r.itp("liveramp_Mastercard","1005907081",!1,"90029")),r.itp("liveramp_Stirista","1003671439",!1,"90029")),r.itp("liveramp_Epsilon","1000985909",!1,"90029")),r.itp("liveramp_Epsilon","1000985919",!1,"90029"))),90030:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_ShareThis","1001013749",!1,"90030"),r.itp("liveramp_Alliant","1000851266",!1,"90030")),r.itp("liveramp_Alliant","1000846976",!1,"90030")),r.itp("liveramp_Bombora","1000883819",!1,"90030")),r.itp("liveramp_Stirista","1003668839",!1,"90030")),r.itp("liveramp_Bombora","1005416649",!1,"90030")),r.itp("liveramp_Experian","1004265449",!1,"90030")),r.itp("liveramp_Acxiom","1286",!1,"90030")),r.itp("eyeota","1647",!1,"90030")),r.itp("liveramp_Experian","1004601719",!1,"90030")),r.itp("eyeota","35756",!1,"90030")),r.itp("liveramp_Experian","1004268499",!1,"90030")),r.itp("liveramp_Epsilon","1000464226",!1,"90030")),r.itp("liveramp_OnAudience","1002860546",!1,"90030")),r.itp("liveramp_Alliant","1000847186",!1,"90030")),r.itp("liveramp_Alliant","1000851556",!1,"90030")),r.itp("liveramp_ShareThis","1005134149",!1,"90030")),r.itp("liveramp_ShareThis","1005133639",!1,"90030")),r.itp("liveramp_Experian","1004601749",!1,"90030")),r.itp("liveramp_StatSocial","1006918741",!1,"90030")),r.itp("eyeota","13214",!1,"90030")),r.itp("eyeota","1526",!1,"90030")),r.itp("liveramp_Alliant","1000847186",!1,"90030")),r.itp("liveramp_Alliant","1000851556",!1,"90030"))),90419:r.q(r.isp("2P_Advertiser_Altice","21710477",!1,"90419")),90420:r.q(r.isp("2P_Advertiser_Altice","15153561",!1,"90420")),90421:r.q(r.isp("2P_Advertiser_Altice","15153586",!1,"90421")),90422:r.q(r.isp("2P_Advertiser_Altice","17355442",!1,"90422")),90423:r.q(r.isp("2P_Advertiser_Altice","18951877",!1,"90423")),90424:r.q(r.isp("2P_Advertiser_Altice","18952807",!1,"90424")),90427:r.q(r.isp("liveramp_VeteransUnited-MorgtageResearchCenter_news_corp_43fc302bcef24e3f9e6adcfabf7f17ba","2138307596",!1,"90427")),90583:r.q(r.tw(r.cw(0,r.ps(6,"https://www.realtor.com/advice/guides/va-loan"),r.ge(1)),7776e6)),90584:r.q(r.tw(r.cw(0,r.ps(6,"https://www.realtor.com/mortgage/va-home-loan-center"),r.ge(1)),7776e6)),90678:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1000993829",!1,"90678"),r.itp("liveramp_Epsilon","1000455166",!1,"90678")),r.itp("liveramp_Epsilon","1000455176",!1,"90678")),r.itp("liveramp_Acxiom","300544610",!1,"90678")),r.itp("liveramp_Acxiom","300544605",!1,"90678")),r.itp("liveramp_Acxiom","300544601",!1,"90678")),r.itp("liveramp_IPSOS","1002976916",!1,"90678"))),90679:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_StatSocial","1006912441",!1,"90679"),r.itp("liveramp_Acxiom","1507",!1,"90679")),r.itp("liveramp_OnAudience","1002859866",!1,"90679")),r.itp("liveramp_OnAudience","1002860596",!1,"90679")),r.itp("liveramp_Mastercard","1005907711",!1,"90679"))),90680:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_ShareThis","1001290139",!1,"90680"),r.itp("liveramp_Acxiom","300454199",!1,"90680")),r.itp("liveramp_Acxiom","300454899",!1,"90680")),r.itp("liveramp_Alliant","1000847516",!1,"90680")),r.itp("liveramp_OnAudience","1002863596",!1,"90680"))),90681:r.q(r.ocq(r.ocq(r.itp("liveramp_IPSOS","1004367399",!1,"90681"),r.itp("liveramp_ShareThis","1005134329",!1,"90681")),r.itp("eyeota","1412",!1,"90681"))),90682:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Acxiom","300125104",!1,"90682"),r.itp("liveramp_Acxiom","300125102",!1,"90682")),r.itp("liveramp_Acxiom","300125103",!1,"90682")),r.itp("liveramp_Acxiom","300125101",!1,"90682")),r.itp("liveramp_Acxiom","2098",!1,"90682")),r.itp("liveramp_Acxiom","10820",!1,"90682")),r.itp("liveramp_Acxiom","2097",!1,"90682")),r.itp("liveramp_Stirista","1000045064",!1,"90682")),r.itp("liveramp_CoreLogic","1000868746",!1,"90682")),r.itp("liveramp_CoreLogic","1000868756",!1,"90682")),r.itp("liveramp_CoreLogic","1000868736",!1,"90682")),r.itp("liveramp_CoreLogic","1000868726",!1,"90682")),r.itp("liveramp_CoreLogic","1000868606",!1,"90682")),r.itp("liveramp_Epsilon","1000461566",!1,"90682")),r.itp("liveramp_Epsilon","1000461576",!1,"90682")),r.itp("liveramp_Epsilon","1000461556",!1,"90682")),r.itp("eyeota","35580",!1,"90682")),r.itp("liveramp_AnalyticsIQ","1000690626",!1,"90682")),r.itp("liveramp_AnalyticsIQ","1000690606",!1,"90682")),r.itp("liveramp_AnalyticsIQ","1000690616",!1,"90682")),r.itp("liveramp_AnalyticsIQ","1000690586",!1,"90682")),r.itp("liveramp_AnalyticsIQ","1000690596",!1,"90682"))),90683:r.q(r.acq(r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87617)),r.cw(2,r.pe(5,87617)),r.ge(1)),r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("eyeota","6730",!1,"90683"),r.itp("liveramp_Mastercard","1005906931",!1,"90683")),r.itp("liveramp_Mastercard","1005908091",!1,"90683")),r.itp("liveramp_OnAudience","1002861966",!1,"90683")),r.itp("eyeota","35313",!1,"90683")),r.itp("liveramp_ShareThis","1005134019",!1,"90683")),r.itp("eyeota","1492",!1,"90683")),r.scq(r.cw(1,r.pc(["aggregations","SegmentEntry"],87611)),r.cw(2,r.pe(5,87611)),r.ge(1))))),90740:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Alliant","1000846536",!1,"90740"),r.itp("liveramp_Mastercard","1005908001",!1,"90740")),r.itp("liveramp_Alliant","1000850566",!1,"90740")),r.itp("liveramp_Alliant","1000851796",!1,"90740")),r.itp("liveramp_Alliant","1000850546",!1,"90740"))),90741:r.q(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1000985009",!1,"90741"),r.itp("eyeota","13253",!1,"90741")),r.itp("eyeota","1718",!1,"90741"))),90742:r.q(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Stirista","1003670399",!1,"90742"),r.itp("liveramp_Kantar","1004779149",!1,"90742")),r.itp("eyeota","13443",!1,"90742")),r.itp("eyeota","36020",!1,"90742"))),90745:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_IXIDigital","1000091954",!1,"90745"),r.itp("liveramp_Stirista","1003672989",!1,"90745")),r.itp("liveramp_Mastercard","1005907021",!1,"90745")),r.itp("liveramp_Mastercard","1005907021",!1,"90745")),r.itp("liveramp_PlaceIQ","1002445206",!1,"90745")),r.itp("eyeota","1574",!1,"90745")),r.itp("eyeota","35944",!1,"90745")),r.itp("liveramp_AnalyticsIQ","1004391769",!1,"90745"))),90749:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Acxiom","300730199",!1,"90749"),r.itp("liveramp_Experian","1004269159",!1,"90749")),r.itp("liveramp_Alliant","1000846236",!1,"90749")),r.itp("liveramp_Stirista","1004424909",!1,"90749")),r.itp("liveramp_Experian","1004256559",!1,"90749"))),90752:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Stirista","1003670779",!1,"90752"),r.itp("liveramp_Acxiom","300727499",!1,"90752")),r.itp("liveramp_Alliant","1000847586",!1,"90752")),r.itp("liveramp_Epsilon","1003200309",!1,"90752")),r.itp("liveramp_AnalyticsIQ","1000691196",!1,"90752")),r.itp("liveramp_Epsilon","1003200299",!1,"90752")),r.itp("liveramp_AnalyticsIQ","1000691186",!1,"90752"))),90753:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Alliant","1000847576",!1,"90753"),r.itp("liveramp_Alliant","1000846226",!1,"90753")),r.itp("liveramp_Epsilon","1003200289",!1,"90753")),r.itp("liveramp_AnalyticsIQ","1000691176",!1,"90753")),r.itp("liveramp_Stirista","1004424939",!1,"90753")),r.itp("liveramp_Stirista","1004424969",!1,"90753"))),90754:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1000462446",!1,"90754"),r.itp("liveramp_Epsilon","1000462456",!1,"90754")),r.itp("liveramp_Epsilon","1000462466",!1,"90754")),r.itp("liveramp_Acxiom","1891",!1,"90754")),r.itp("liveramp_Acxiom","1892",!1,"90754")),r.itp("liveramp_Acxiom","1893",!1,"90754")),r.itp("liveramp_Acxiom","1894",!1,"90754")),r.itp("liveramp_Acxiom","1895",!1,"90754")),r.itp("liveramp_Acxiom","1896",!1,"90754")),r.itp("liveramp_Acxiom","1897",!1,"90754")),r.itp("liveramp_Acxiom","10802",!1,"90754"))),90755:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Stirista","1003671439",!1,"90755"),r.itp("liveramp_Mastercard","1005907081",!1,"90755")),r.itp("liveramp_IXIDigital","1000091604",!1,"90755")),r.itp("liveramp_Epsilon","1000997709",!1,"90755")),r.itp("liveramp_Epsilon","1000993139",!1,"90755"))),90756:r.q(r.ocq(r.ocq(r.ocq(r.itp("liveramp_ShareThis","1005133809",!1,"90756"),r.itp("liveramp_Epsilon","1000985649",!1,"90756")),r.itp("liveramp_Epsilon","1000993419",!1,"90756")),r.itp("liveramp_PlaceIQ","1002442576",!1,"90756"))),90757:r.q(r.ocq(r.ocq(r.itp("eyeota","3972",!1,"90757"),r.itp("liveramp_Epsilon","1005238209",!1,"90757")),r.itp("liveramp_ShareThis","1001374569",!1,"90757"))),90758:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1000462116",!1,"90758"),r.itp("liveramp_Alliant","1000847596",!1,"90758")),r.itp("liveramp_ShareThis","1006582381",!1,"90758")),r.itp("liveramp_Experian","1004256529",!1,"90758")),r.itp("liveramp_Acxiom","1701",!1,"90758")),r.itp("eyeota","35598",!1,"90758")),r.itp("eyeota","6698",!1,"90758"))),90759:r.q(r.ocq(r.itp("liveramp_Alliant","1000853286",!1,"90759"),r.itp("liveramp_PlaceIQ","1002437766",!1,"90759"))),90760:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("eyeota","6697",!1,"90760"),r.itp("liveramp_Epsilon","1000459316",!1,"90760")),r.itp("liveramp_Stirista","1000306006",!1,"90760")),r.itp("liveramp_Experian","1004263699",!1,"90760")),r.itp("liveramp_Acxiom","10835",!1,"90760"))),91179:r.q(r.isp("News_Corp_Vidora","s003",!1,"91179")),92377:r.q(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.ocq(r.itp("liveramp_Epsilon","1003071366",!1,"92377"),r.itp("liveramp_Epsilon","1003071356",!1,"92377")),r.itp("liveramp_Epsilon","1005785781",!1,"92377")),r.itp("liveramp_Epsilon","1000458696",!1,"92377")),r.itp("liveramp_Epsilon","1000458706",!1,"92377")),r.itp("liveramp_Epsilon","1000458716",!1,"92377")),r.itp("liveramp_Epsilon","1000458726",!1,"92377")),r.itp("liveramp_Epsilon","1000458736",!1,"92377")),r.itp("liveramp_Epsilon","1000458746",!1,"92377"))),92380:r.q(r.ocq(r.ocq(r.itp("liveramp_Acxiom","802360119",!1,"92380"),r.itp("liveramp_AnalyticsIQ","1000899369",!1,"92380")),r.itp("eyeota","35156",!1,"92380"))),92383:r.q(r.cw(0,r.pge(12,180),r.ge(1))),92384:r.q(r.cw(0,r.ple(12,14),r.ge(1))),92385:r.q(r.cw(0,r.a([r.pge(12,14),r.ple(12,60)]),r.ge(1))),92386:r.q(r.cw(0,r.a([r.pge(12,60),r.ple(12,180)]),r.ge(1))),92387:r.q(r.cw(0,r.ple(11,14),r.ge(1))),92388:r.q(r.cw(0,r.a([r.pge(11,14),r.ple(11,60)]),r.ge(1))),92389:r.q(r.cw(0,r.a([r.pge(11,30),r.ple(11,180)]),r.ge(1))),92390:r.q(r.cw(0,r.a([r.pge(11,180),r.ple(11,365)]),r.ge(1))),92391:r.q(r.cw(0,r.pg(11,365),r.ge(1))),93351:r.q(r.cw(0,r.t,r.ge(1))),95572:r.q(r.cw(3,r.pe(3,"Altice SDL | RDC user clicked Altice ad and visited Altice site) | SFDC Case 33455"),r.ge(1))),95573:r.q(r.cw(3,r.pe(3,"Altice SDL | RDC user converted | SFDC Case 33455"),r.ge(1))),95574:r.q(r.cw(3,r.pe(3,"Altice OPT | RDC user clicked Altice ad and visited Altice site) | SFDC Case 33454"),r.ge(1))),95575:r.q(r.cw(3,r.pe(3,"Altice OPT | RDC user converted | SFDC Case 33454"),r.ge(1))),98032:r.q(r.isp("news_corp_newsiq_segments","8694774110460230088",!1,"98032")),98423:r.q(r.tw(r.cw(0,r.pc_(16,75),r.ge(1)),31536e6)),98499:r.q(r.isp("news_corp_dow_jones_segments","P0022",!1,"98499")),98500:r.q(r.isp("news_corp_dow_jones_segments","P0043",!1,"98500")),98508:r.q(r.cw(0,r.t,r.e(0))),98842:r.q(r.ocq(r.itp("liveramp_Acxiom","300128610",!1,"98842"),r.itp("liveramp_IXIDigital","1002824236",!1,"98842"))),98843:r.q(r.itp("liveramp_Acxiom","300125104",!1,"98843")),98954:r.q(r.itp("liveramp_Experian","1004257069",!1,"98954")),99352:r.q(r.ocq(r.itp("eyeota","35816",!1,"99352"),r.itp("eyeota","1480",!1,"99352"))),99355:r.q(r.ocq(r.tw(r.cw(0,r.y(4,12),r.ge(1)),48384e5),r.tw(r.cw(0,r.ps(6,15),r.ge(1)),48384e5))),99356:r.q(r.ocq(r.tw(r.cw(0,r.y(4,12),r.ge(1)),24192e5),r.tw(r.cw(0,r.ps(6,15),r.ge(1)),24192e5))),99357:r.q(r.ocq(r.cw(0,r.y(4,12),r.ge(1)),r.cw(0,r.ps(6,15),r.ge(1)))),99358:r.q(r.tw(r.cw(0,r.ref(2),r.ge(1)),24192e5)),99359:r.q(r.tw(r.cw(0,r.ref(2),r.ge(1)),48384e5)),99360:r.q(r.cw(0,r.ref(2),r.ge(1)))}||{},queriesByEvent:{"!UpdateLookalikeModels":["87587"],"!UpdateSecondPartyData":["103324","103327","118635","118636","118637","118638","118639","118640","118641","118642","118643","118644","118645","118646","118647","118648","118649","118650","118651","118652","118653","118654","118655","118656","118657","118658","118659","118660","118661","118662","118663","118664","118665","118666","118667","118668","118669","118670","118671","118672","118673","118674","118675","118676","118677","118678","118679","118680","118681","118682","118683","118684","118685","118686","118687","118688","118689","118690","118691","118692","118693","118694","118695","118696","118697","118698","118699","118700","118701","118702","118703","118704","85403","87492","87494","88152","88153","90419","90420","90421","90422","90423","90424","90427","91179","98032","98499","98500"],"!UpdateThirdPartyData":["100800","109039","109042","109043","109045","109046","109047","109048","109049","109050","109051","109052","109053","109054","109055","109060","109130","109131","109133","109145","109160","109177","109190","109350","109352","110753","110756","110763","110778","110779","110780","110782","110783","110786","110788","110789","110792","110795","110798","110799","111594","111596","111597","111757","111760","111764","111766","111780","111783","111960","111961","111962","111963","111966","111967","111968","111969","111970","111980","111981","111982","111984","111985","111986","112842","112853","112856","112858","112860","112861","112862","112863","112865","112870","112871","112872","112903","112904","112961","112962","112963","112964","112965","112966","112967","112968","112969","112970","112972","112973","112974","112976","112979","112980","112981","112995","112996","112997","112998","112999","113002","113003","113007","113009","113012","113013","113015","113018","113020","113022","113023","113024","113025","113026","113027","113028","113029","113032","113034","113036","113039","113042","113045","113047","113051","113054","113056","113057","113061","113062","113063","113064","113065","113102","113106","113109","113110","113111","113171","113172","113174","113175","113176","113177","113180","113181","113183","113185","113211","113213","113214","113215","113232","113233","113234","113237","113238","113239","113240","113241","113242","113244","115627","115639","115640","115827","115828","115829","115830","115831","115832","115834","115835","115836","115837","115839","115842","115959","122461","123554","123555","85008","85009","85010","85011","85012","85014","85015","85016","85017","87508","87509","87517","87522","87523","87524","87601","87602","87603","87604","87605","87606","87608","87611","87612","87613","87614","87615","87616","87617","88973","88975","89855","89856","89857","89858","89859","89860","89861","89862","89863","89864","89865","89866","89867","90029","90030","90678","90679","90680","90681","90682","90683","90740","90741","90742","90745","90749","90752","90753","90754","90755","90756","90757","90758","90759","90760","92377","92380","98842","98843","98954","99352"],Pageview:["10000000","10000001","10000002","10000003","10000004","10000005","10000006","10000007","10000008","10000010","10000011","10000012","10000013","10000014","10000015","10000016","10000017","10000018","10000019","10000020","10000021","10000022","10000023","10000024","10000025","10000026","10000035","10000036","10000037","10000038","10000039","10000040","10000041","10000042","10000043","10000044","10000045","10000046","10000047","10000048","10000049","10000050","10000051","10000052","10000053","10000054","10000055","10000056","10000057","10000058","10000059","10000060","10000061","10000062","10000063","10000064","10000065","10000066","10000067","10000068","10000069","10000070","10000071","10000072","10000073","10000074","10000075","10000076","10000077","10000078","10000079","10000080","10000081","10000082","10000083","10000084","10000085","10000086","10000087","10000088","10000089","10000090","10000324","10000325","10000327","10000328","10000329","10000330","10000687","10000688","10000689","10000690","10000691","10000692","10000693","10000694","10000695","10000696","10000697","10000698","10000699","10000700","10000701","10000702","10000703","10000704","10000705","10000706","10000707","10000708","10000709","10000710","10000711","10000712","10000713","10000714","10000715","10000716","10000717","10000718","10000719","10000720","10000721","10000722","10000723","10000724","10000725","10000726","10000727","10000728","10000729","10000730","10000731","10000732","10000733","10000734","10000735","10000736","10000737","10000738","10000739","10000740","10000741","10000742","10000743","10000744","10000745","10000746","10000747","10000748","10000749","10000750","10000751","10000752","10000753","10000754","10000755","10000756","10000757","10000758","10000759","10000760","10000761","10000762","10000763","10000764","10000765","10000766","10000767","10000768","10000769","10000770","10000771","10000772","10000773","10000774","10000775","10000776","10000777","10000778","10000779","10000780","10000781","10000782","10000783","10000784","10000785","10000786","10000787","10000788","10000789","10000790","10000791","10000792","10000793","10000794","10000795","10000796","10000797","10000798","10000799","10000800","10000801","10000802","10000803","103313","106853","108459","108461","109017","109500","109501","112844","113078","113080","113083","114090","114091","114092","114959","114960","114961","115031","115032","115033","115303","115304","115305","121451","121924","121926","121927","121928","121929","121930","121931","121932","121933","121934","121935","121936","121937","121938","121939","121940","121941","121942","121943","121944","121945","121946","121947","121948","121949","121950","121951","121952","121953","121954","121955","121956","121957","121958","121959","121960","121961","121962","121963","121964","121965","121966","121967","121968","121969","121970","121971","121972","121973","121974","121975","123554","72374","79514","83650","83654","83657","83722","84413","84677","84733","84734","84739","84740","84747","84748","84749","84750","84751","84754","85302","85593","87314","87317","87421","87422","87487","87488","87492","87493","87497","87500","87502","87503","87504","87505","87510","87511","87512","87513","87514","87515","87516","87519","87520","87591","87592","87594","87595","87596","87597","87598","87599","87600","88974","89152","90583","90584","92383","92384","92385","92386","92387","92388","92389","92390","92391","93351","98423","98508","99355","99356","99357","99358","99359","99360"],PageviewComplete:["84732","85007","85013","87487","87488","87492","87494","87495","87496","87498","87518","87588","88974","90683"],PixelTracking:["102174","102196","83658","83659","84735","84736","84737","84738","84741","84742","84743","84744","84745","84746","84752","84753","85653","87312","87313","87490","87491","87492","87501","87505","87506","87521","87610","87618","87619","87806","95572","95573","95574","95575"],SegmentEntry:["84732","85007","85013","87487","87488","87492","87494","87495","87496","87498","87518","87588","88974","90683"],SegmentExit:[],SlotClicked:["87492","87507"]}||{}}}();!function(e){const i=self;function t(e,t,n,r){function c(t){if("function"!=typeof i.postMessage)return e.ports[0].postMessage(t);i.postMessage(t)}if(!n)return c([t,null,r]);"undefined"!=typeof console&&"error"in console&&console.error("Worker caught an error:",n),c([t,n])}i.addEventListener("message",(function(i){if(n=i,!Array.isArray(n.data)||2!==n.data.length)return;var n;const r=i.data,[c,o]=r;if("function"==typeof e)return function(e,i,n,r){const c=function(e,i){try{return{res:e(i)}}catch(e){return{err:e}}}(i,r);return Boolean(null===(o=c)||void 0===o?void 0:o.err)?t(e,n,c.err):!(a=c.res)||"object"!=typeof a&&"function"!=typeof a||"function"!=typeof a.then?t(e,n,null,c.res):void c.res.then((function(i){t(e,n,null,i)}),(function(i){t(e,n,i)}));var o,a}(i,e,c,o);t(i,c,new Error("Please pass a function into register()."))}))}((function(e){return((e,i)=>Ni(ht(e,i),(i=>Object.assign(Object.assign({},i),{userId:e.userId}))))(e,Et)}))})();', "Worker", void 0, void 0)
                }
                var c = t(655);
                const u = () => ({
                        kind: "null",
                        value: null
                    }),
                    l = e => ({
                        kind: "string",
                        value: e
                    }),
                    p = e => ({
                        kind: "number",
                        value: e
                    }),
                    d = e => ({
                        kind: "array",
                        value: e
                    }),
                    m = e => ({
                        kind: "object",
                        value: e
                    }),
                    g = e => e,
                    _ = () => ({
                        kind: "bottom"
                    }),
                    f = e => ({
                        kind: "inner",
                        a: e
                    }),
                    h = e => ({
                        kind: "top",
                        error: e
                    }),
                    v = e => ({
                        kind: "unbounded",
                        group: e
                    }),
                    w = (e, r) => ({
                        kind: "windowed",
                        key: r,
                        group: e
                    }),
                    q = (e, r, t) => ({
                        kind: "countLimit",
                        n: t,
                        limit: r,
                        group: e
                    }),
                    b = (e, r, t) => ({
                        kind: "uniqueLimit",
                        n: t,
                        limit: r,
                        group: e
                    }),
                    y = e => ({
                        kind: "numberGroup",
                        group: e
                    }),
                    E = e => ({
                        kind: "stringGroup",
                        group: e
                    }),
                    k = e => ({
                        kind: "tuple",
                        tuple: e
                    }),
                    I = e => ({
                        state: e
                    }),
                    A = (e, r) => ({
                        commands: e,
                        payload: r
                    });

                function D(e) {
                    return e
                }

                function P(e, r, t, n, i, o, a, s, c) {
                    switch (arguments.length) {
                        case 1:
                            return e;
                        case 2:
                            return r(e);
                        case 3:
                            return t(r(e));
                        case 4:
                            return n(t(r(e)));
                        case 5:
                            return i(n(t(r(e))));
                        case 6:
                            return o(i(n(t(r(e)))));
                        case 7:
                            return a(o(i(n(t(r(e))))));
                        case 8:
                            return s(a(o(i(n(t(r(e)))))));
                        case 9:
                            return c(s(a(o(i(n(t(r(e))))))));
                        default:
                            for (var u = arguments[0], l = 1; l < arguments.length; l++) u = arguments[l](u);
                            return u
                    }
                }
                var S = function(e) {
                        return {
                            equals: function(r, t) {
                                return r === t || e(r, t)
                            }
                        }
                    },
                    x = function(e) {
                        return S((function(r, t) {
                            for (var n in e)
                                if (!e[n].equals(r[n], t[n])) return !1;
                            return !0
                        }))
                    },
                    O = function(e) {
                        return function(r, t) {
                            return r === t || 0 === e(r, t)
                        }
                    },
                    M = function(e) {
                        return {
                            equals: O(e),
                            compare: function(r, t) {
                                return r === t ? 0 : e(r, t)
                            }
                        }
                    },
                    C = function(e) {
                        return function(r) {
                            return M((function(t, n) {
                                return r.compare(e(t), e(n))
                            }))
                        }
                    },
                    T = function(e) {
                        return function(r, t) {
                            return -1 === e.compare(r, t)
                        }
                    },
                    L = function(e) {
                        return function(r, t) {
                            return 1 === e.compare(r, t)
                        }
                    },
                    R = function(e) {
                        return function(r, t) {
                            return r === t || e.compare(r, t) > -1 ? r : t
                        }
                    };
                var j = {
                        equals: function(e, r) {
                            return e === r
                        }
                    },
                    U = {
                        equals: j.equals,
                        compare: function(e, r) {
                            return e < r ? -1 : e > r ? 1 : 0
                        }
                    };
                const N = (e, r) => {
                        switch (e.kind) {
                            case "bottom":
                                return {
                                    kind: "bottom"
                                };
                            case "inner":
                                return f(r(e.a));
                            case "top":
                                return h(e.error)
                        }
                    },
                    G = e => M(((r, t) => {
                        if ("bottom" === r.kind && "bottom" === t.kind) return 0;
                        if ("bottom" === r.kind) return -1;
                        if ("bottom" === t.kind) return 1;
                        if ("top" === r.kind && "top" === t.kind) return U.compare(r.error, t.error);
                        if ("top" === r.kind) return 1;
                        if ("top" === t.kind) return -1;
                        if ("inner" === r.kind && "inner" === t.kind) return e.compare(r.a, t.a);
                        throw new Error("Non exhaustive match in extendedAlgebraOrd")
                    }));
                var B = function(e, r) {
                        for (var t = 0, n = r.length, i = e.length; t < n; t++, i++) e[i] = r[t];
                        return e
                    },
                    W = function(e) {
                        return "Some" === e._tag
                    },
                    K = {
                        _tag: "None"
                    },
                    $ = function(e) {
                        return {
                            _tag: "Some",
                            value: e
                        }
                    },
                    z = function(e) {
                        return "Left" === e._tag
                    },
                    Q = (Object.prototype.hasOwnProperty, function(e) {
                        return B([e[0]], e.slice(1))
                    });
                var F = K,
                    X = $;

                function V(e) {
                    return function(r) {
                        return e(r) ? X(r) : F
                    }
                }
                var Y = function(e) {
                        return "Left" === e._tag ? F : X(e.right)
                    },
                    H = function(e) {
                        return {
                            equals: function(r, t) {
                                return r === t || (te(r) ? te(t) : !te(t) && e.equals(r.value, t.value))
                            }
                        }
                    },
                    J = function(e) {
                        return {
                            equals: H(e).equals,
                            compare: function(r, t) {
                                return r === t ? 0 : re(r) ? re(t) ? e.compare(r.value, t.value) : 1 : -1
                            }
                        }
                    },
                    Z = function(e) {
                        return function(r) {
                            return te(r) ? F : X(e(r.value))
                        }
                    },
                    ee = Y,
                    re = W,
                    te = function(e) {
                        return "None" === e._tag
                    },
                    ne = function(e) {
                        return function(r) {
                            return te(r) ? e() : r.value
                        }
                    };
                var ie;
                ie = void 0;
                var oe = function(e) {
                        return e[0]
                    },
                    ae = oe;
                var se = function(e, r) {
                        for (var t = 0, n = r.length, i = e.length; t < n; t++, i++) e[i] = r[t];
                        return e
                    },
                    ce = function(e) {
                        return e.length > 0
                    },
                    ue = function(e, r) {
                        return e < 0 || e >= r.length
                    },
                    le = function(e) {
                        return function(r) {
                            return se([e], r)
                        }
                    },
                    pe = le,
                    de = function(e) {
                        return function(r) {
                            return se(se([], r), [e])
                        }
                    },
                    me = de,
                    ge = Q,
                    _e = function(e) {
                        return ce(e) ? $(e) : K
                    },
                    fe = function(e) {
                        return function(r) {
                            for (var t = Math.max(0, Math.floor(r)), n = [e(0)], i = 1; i < t; i++) n.push(e(i));
                            return n
                        }
                    };
                var he = ge;
                var ve = function(e) {
                        return function(r) {
                            var t = Math.max(1, e);
                            return t >= r.length ? [he(r), []] : [P(r.slice(1, t), pe(qe(r))), r.slice(t)]
                        }
                    },
                    we = function(e) {
                        return S((function(r, t) {
                            return r.length === t.length && r.every((function(r, n) {
                                return e.equals(r, t[n])
                            }))
                        }))
                    },
                    qe = ae;
                var be = {
                        equals: function(e, r) {
                            return e === r
                        }
                    },
                    ye = {
                        equals: be.equals,
                        compare: function(e, r) {
                            return e < r ? -1 : e > r ? 1 : 0
                        }
                    };
                var Ee = function(e, r) {
                    return function(t) {
                        for (var n = t.length, i = e, o = 0; o < n; o++) i = r(o, i, t[o]);
                        return i
                    }
                };
                var ke = function(e) {
                        return 0 === e.length
                    },
                    Ie = ce,
                    Ae = pe,
                    De = me,
                    Pe = function(e, r) {
                        return e <= 0 ? [] : fe(r)(e)
                    };
                var Se = ue,
                    xe = function(e) {
                        return function(r) {
                            return Se(e, r) ? Ce(r) : r.slice(0, e)
                        }
                    };
                var Oe = function(e, r) {
                    for (var t = e.length, n = 0; n < t && r(e[n]); n++);
                    return n
                };
                var Me = function(e) {
                    return function(r) {
                        return e <= 0 || ke(r) ? Ce(r) : e >= r.length ? [] : r.slice(e, r.length)
                    }
                };
                var Ce = function(e) {
                        return e.slice()
                    },
                    Te = function(e) {
                        return ke(e) ? [] : e.slice().reverse()
                    },
                    Le = function(e) {
                        return function(r) {
                            return r.length <= 1 ? Ce(r) : r.slice().sort(e.compare)
                        }
                    },
                    Re = function(e, r, t) {
                        for (var n = [], i = Math.min(e.length, r.length), o = 0; o < i; o++) n[o] = t(e[o], r[o]);
                        return n
                    };
                var je = function(e) {
                    return function(r) {
                        return e >= 1 && Ie(r) ? ve(e)(r) : ke(r) ? [Ce(r), []] : [
                            [], Ce(r)
                        ]
                    }
                };
                var Ue = function(e) {
                        return function(r) {
                            return P(r, function(e) {
                                return function(r) {
                                    for (var t = [], n = 0; n < r.length; n++) t.push.apply(t, e(n, r[n]));
                                    return t
                                }
                            }((function(r, t) {
                                return e(t)
                            })))
                        }
                    },
                    Ne = function(e) {
                        return function(r) {
                            for (var t = [], n = 0; n < r.length; n++) {
                                var i = e(n, r[n]);
                                W(i) && t.push(i.value)
                            }
                            return t
                        }
                    },
                    Ge = function(e) {
                        return Ne((function(r, t) {
                            return e(t)
                        }))
                    },
                    Be = Ge(D),
                    We = Ee,
                    Ke = function(e) {
                        var r = $e(e);
                        return function(e) {
                            return r((function(r, t) {
                                return e(t)
                            }))
                        }
                    },
                    $e = function(e) {
                        return function(r) {
                            return We(e.of([]), (function(t, n, i) {
                                return e.ap(e.map(n, (function(e) {
                                    return function(r) {
                                        return P(e, De(r))
                                    }
                                })), r(t, i))
                            }))
                        }
                    },
                    ze = function(e) {
                        return M((function(r, t) {
                            for (var n = r.length, i = t.length, o = Math.min(n, i), a = 0; a < o; a++) {
                                var s = e.compare(r[a], t[a]);
                                if (0 !== s) return s
                            }
                            return ye.compare(n, i)
                        }))
                    },
                    Qe = function(e) {
                        return {
                            _tag: "Left",
                            left: e
                        }
                    },
                    Fe = function(e) {
                        return {
                            _tag: "Right",
                            right: e
                        }
                    },
                    Xe = function(e, r) {
                        return P(e, He(r))
                    },
                    Ve = function(e, r) {
                        return P(e, Ze(r))
                    },
                    Ye = "Either",
                    He = function(e) {
                        return function(r) {
                            return rr(r) ? r : Fe(e(r.right))
                        }
                    },
                    Je = Fe,
                    Ze = function(e) {
                        return function(r) {
                            return rr(r) ? r : rr(e) ? e : Fe(r.right(e.right))
                        }
                    },
                    er = {
                        URI: Ye,
                        map: Xe,
                        ap: Ve,
                        of: Je
                    },
                    rr = z;
                var tr = function(e) {
                    return -1 === e ? 1 : 1 === e ? -1 : 0
                };

                function nr(e, r) {
                    return Be(e.map(r))
                }

                function ir(e, r, t, n) {
                    const i = (e, r) => {
                            if (0 === e.length) return Be(r.map((e => X({
                                1: e[1],
                                2: t(F, X(e[2]))
                            }))));
                            if (0 === r.length) return Be(e.map((e => X({
                                1: e[1],
                                2: t(X(e[2]), F)
                            }))));
                            if (e.length > 0 && r.length > 0 && T(n)(e[0][1], r[0][1])) {
                                const [n, ...o] = e, a = n[1], s = n[2];
                                return Ae({
                                    1: a,
                                    2: t(X(s), F)
                                })(i(o, r))
                            }
                            if (e.length > 0 && r.length > 0 && L(n)(e[0][1], r[0][1])) {
                                const [n, ...o] = r, a = n[1], s = n[2];
                                return Ae({
                                    1: a,
                                    2: t(F, X(s))
                                })(i(e, o))
                            }
                            if (e.length > 0 && r.length > 0) {
                                const [n, ...o] = e, [a, ...s] = r, c = n[1], u = n[2], l = a[2];
                                return Ae({
                                    1: c,
                                    2: t(X(u), X(l))
                                })(i(o, s))
                            }
                            throw new Error("Non exhaustive match in mapOption2")
                        },
                        o = C((e => e[1]))(n),
                        a = (e => {
                            const r = nr(e, (e => re(e[2]) ? X({
                                1: e[1],
                                2: e[2].value
                            }) : F));
                            return 0 === r.length ? F : X(r)
                        })(i(Le(o)([...e].map((e => ({
                            1: e[0],
                            2: e[1]
                        })))), Le(o)([...r].map((e => ({
                            1: e[0],
                            2: e[1]
                        }))))));
                    return Z((e => new Map(e.map((e => [e[1], e[2]])))))(a)
                }

                function or(e, r, t, n) {
                    const i = C((e => e[0]))(n),
                        o = Le(i)([...r]).reduceRight(((e, r) => {
                            if (rr(e)) {
                                const n = t(r[1], e.left);
                                return re(n) ? Qe(n.value) : Fe(r[0])
                            }
                            return e
                        }), Qe(e));
                    return ee(o)
                }

                function ar(e, r) {
                    return new Map([...e].map(r))
                }

                function sr(e, r) {
                    return new Map([...e].filter(r))
                }

                function cr(e) {
                    return JSON.stringify(ur(e))
                }

                function ur(e) {
                    switch (e.kind) {
                        case "null":
                            return dr.encode(e);
                        case "string":
                            return mr.encode(e);
                        case "number":
                            return gr.encode(e);
                        case "array":
                            return _r.encode(e);
                        case "object":
                            return fr.encode(e)
                    }
                }

                function lr(e) {
                    return null === e ? dr.decode(e) : "number" == typeof e ? gr.decode(e) : "string" == typeof e ? mr.decode(e) : Array.isArray(e) ? _r.decode(e) : fr.decode(e)
                }
                const pr = (e, r) => Qe(`Failed to decode. Input was ${JSON.stringify(e)}. Codec type was ${r}`),
                    dr = {
                        encode: e => null,
                        decode: e => null === e ? Fe({
                            kind: "null",
                            value: null
                        }) : pr(e, "SimpleNull")
                    },
                    mr = {
                        encode: e => e.value,
                        decode: e => "string" == typeof e ? Fe(l(e)) : pr(e, "SimpleString")
                    },
                    gr = {
                        encode: e => e.value,
                        decode: e => "number" == typeof e ? Fe(p(e)) : pr(e, "SimpleNumber")
                    },
                    _r = {
                        encode: e => e.value.map(ur),
                        decode: e => {
                            if (Array.isArray(e)) {
                                const r = Ke(er)(lr)(e);
                                return He(d)(r)
                            }
                            return pr(e, "SimpleArray")
                        }
                    },
                    fr = {
                        encode: e => {
                            const r = [...e.value.entries()];
                            return Object.assign({}, ...Array.from(r, (([e, r]) => ({
                                [e]: ur(r)
                            }))))
                        },
                        decode: e => {
                            if (e && e.constructor === Object) {
                                const r = Ke(er)((([e, r]) => P(lr(r), He((r => function() {
                                    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                                    return e
                                }(e, r))))))(Object.entries(e));
                                return He((e => m(new Map([...e]))))(r)
                            }
                            return pr(e, "SimpleObject")
                        }
                    };

                function hr(e) {
                    return P(e, wr, Z(cr), ne((() => "<encode error>")))
                }

                function vr(e) {
                    return Z(Ir)(function(e) {
                        switch (e.state.kind) {
                            case "top":
                                return X(l(e.state.error));
                            case "bottom":
                                return F;
                            case "inner":
                                return wr(e.state.a)
                        }
                    }(e))
                }

                function wr(e) {
                    return function(e) {
                        switch (e.kind) {
                            case "numberGroup":
                            case "stringGroup":
                                return qr(e.group);
                            case "tuple":
                                return e.tuple.length > 0
                        }
                    }(e.payload) ? X(d(function(e, r) {
                        const t = Z((e => Ae(e)(r)))(e);
                        return ne((() => r))(t)
                    }(Z((e => l(function(e) {
                        const r = e => {
                                switch (e) {
                                    case "add":
                                        return "p";
                                    case "mul":
                                        return "m";
                                    case "max":
                                        return "v";
                                    case "min":
                                        return "n"
                                }
                            },
                            t = e => 1 === e[2] ? r(e[1]) : r(e[1]) + JSON.stringify(e[2]);
                        return e.map(t).join("")
                    }(e))))(e.commands), function(e) {
                        const r = e => {
                                switch (e.kind) {
                                    case "bottom":
                                        return {
                                            kind: "null",
                                            value: null
                                        };
                                    case "top":
                                        return l(e.error);
                                    case "inner":
                                        return p(e.a)
                                }
                            },
                            t = e => nr([br, yr, e => P(e, kr, m, X)], (r => r(e))),
                            n = e => nr([br, Er, e => P(e, kr, (e => ar(e, (([e, r]) => [JSON.stringify(e), r]))), m, X)], (r => r(e)));
                        switch (e.kind) {
                            case "tuple":
                                return e.tuple.map(r);
                            case "stringGroup":
                                return t(e.group);
                            case "numberGroup":
                                return n(e.group)
                        }
                    }(e.payload)))) : F
                }

                function qr(e) {
                    switch (e.kind) {
                        case "unbounded":
                            return e.group.size > 0;
                        case "windowed":
                            return e.group.size > 0 || re(e.key);
                        case "countLimit":
                        case "uniqueLimit":
                            return e.group.size > 0 || re(e.limit)
                    }
                }

                function br(e) {
                    switch (e.kind) {
                        case "unbounded":
                            return F;
                        case "windowed":
                            return X(l("w"));
                        case "countLimit":
                            return X(l(1 === e.n ? "x" : `x${e.n}`));
                        case "uniqueLimit":
                            return X(l(1 === e.n ? "u" : `u${e.n}`))
                    }
                }

                function yr(e) {
                    switch (e.kind) {
                        case "unbounded":
                            return F;
                        case "windowed":
                            return X(l(re(e.key) ? e.key.value : ""));
                        case "countLimit":
                        case "uniqueLimit":
                            return X(l(re(e.limit) ? e.limit.value : ""))
                    }
                }

                function Er(e) {
                    switch (e.kind) {
                        case "unbounded":
                            return F;
                        case "windowed":
                            return re(e.key) ? X(p(e.key.value)) : X({
                                kind: "null",
                                value: null
                            });
                        case "countLimit":
                        case "uniqueLimit":
                            return re(e.limit) ? X(p(e.limit.value)) : X({
                                kind: "null",
                                value: null
                            })
                    }
                }

                function kr(e) {
                    switch (e.kind) {
                        case "unbounded":
                        case "windowed":
                        case "countLimit":
                        case "uniqueLimit":
                            return e.group
                    }
                }

                function Ir(e) {
                    switch (e.kind) {
                        case "array":
                            return 0 === e.value.length ? {
                                kind: "null",
                                value: null
                            } : 1 === e.value.length ? Ir(e.value[0]) : d(e.value.map(Ir));
                        case "object":
                            return P(sr(e.value, (([e, r]) => "null" !== r.kind)), (e => ar(e, (e => [e[0], Ir(e[1])]))), m);
                        default:
                            return e
                    }
                }

                function Ar(e) {
                    const r = e => {
                            if (0 === e.length) return {
                                kind: "bottom"
                            };
                            const r = (e => {
                                if (4 !== e.length) return F;
                                const [r, t, n, i] = e;
                                if ("string" === r.kind && "string" === t.kind && "object" === i.kind) {
                                    const e = V((e => Dr(e[1].value) && Pr(e[2].value)))({
                                        1: r,
                                        2: t
                                    });
                                    return Z((e => ({
                                        prim: e[1].value,
                                        grp: e[2].value,
                                        cutoff: n,
                                        m: i.value
                                    })))(e)
                                }
                                return F
                            })(e);
                            if (re(r)) {
                                const {
                                    prim: e,
                                    grp: t,
                                    cutoff: n,
                                    m: i
                                } = r.value, o = Sr(n, i, xr(t));
                                return "string" == typeof o ? h(o) : f(A(Or(e), o))
                            }
                            const t = (e => {
                                if (3 !== e.length) return F;
                                const [r, t, n] = e;
                                if ("string" === r.kind && "object" === n.kind) {
                                    const e = V((e => Pr(e.value)))(r);
                                    return Z((e => ({
                                        grp: e.value,
                                        cutoff: t,
                                        m: n.value
                                    })))(e)
                                }
                                return F
                            })(e);
                            if (re(t)) {
                                const {
                                    grp: e,
                                    cutoff: r,
                                    m: n
                                } = t.value, i = Sr(r, n, xr(e));
                                return "string" == typeof i ? h(i) : f(A(F, i))
                            }
                            const n = (e => {
                                if (2 !== e.length) return F;
                                const [r, t] = e;
                                if ("string" === r.kind && "object" === t.kind) {
                                    const e = V((e => Dr(e.value)))(r);
                                    return Z((e => ({
                                        prim: e.value,
                                        m: t.value
                                    })))(e)
                                }
                                return F
                            })(e);
                            if (re(n)) {
                                const {
                                    prim: e,
                                    m: r
                                } = n.value;
                                return f(A(Or(e), E(v(r))))
                            }
                            const i = (e => {
                                if (1 !== e.length) return F;
                                const [r] = e;
                                return "object" === r.kind ? X({
                                    m: r.value
                                }) : F
                            })(e);
                            if (re(i)) {
                                const {
                                    m: e
                                } = i.value;
                                return f(A(F, E(v(e))))
                            }
                            const o = (e => {
                                if (e.length < 1) return F;
                                const [r, ...t] = e;
                                if ("string" === r.kind) {
                                    const e = V((e => Dr(e.value)))(r);
                                    return Z((e => ({
                                        prim: e.value,
                                        rest: t
                                    })))(e)
                                }
                                return F
                            })(e);
                            if (re(o)) {
                                const {
                                    prim: e,
                                    rest: r
                                } = o.value;
                                return f(A(Or(e), Cr(r)))
                            }
                            return f(A(F, Cr(e)))
                        },
                        t = e => "array" === e.kind ? Ue(t)(e.value) : [e];
                    return "null" === e.kind ? I({
                        kind: "bottom"
                    }) : I(r(t(e)))
                }

                function Dr(e) {
                    const r = e.split("");
                    if (!0 == (0 === r.length)) return !1; {
                        const [e, ...t] = r;
                        return -1 !== "pmvn".indexOf(e) && t.every((e => -1 !== "pmvn0123456789".indexOf(e)))
                    }
                }

                function Pr(e) {
                    const r = e.split("");
                    switch (!0) {
                        case 0 === r.length:
                            return !1;
                        case "w" === r[0] && void 0 === r[1]:
                            return !0;
                        default:
                            {
                                const [e, ...t] = r;
                                return -1 !== "ux".indexOf(e) && -1 === t.map((e => !isNaN(parseInt(e)))).indexOf(!1)
                            }
                    }
                }

                function Sr(e, r, t) {
                    switch (e.kind) {
                        case "string":
                            return E(t({
                                1: X(e.value),
                                2: r
                            }));
                        case "number":
                        case "null":
                            return y(t({
                                1: "null" === e.kind ? F : X(e.value),
                                2: sr(ar(r, (([e, r]) => [Number(e), r])), (e => !isNaN(e[0])))
                            }));
                        default:
                            return "{bad cutoff}"
                    }
                }

                function xr(e) {
                    const r = e => r => b(r[2], r[1], e),
                        t = e => r => q(r[2], r[1], e),
                        n = e.split("");
                    switch (!0) {
                        case "w" === n[0] && void 0 === n[1]:
                            return e => w(e[2], e[1]);
                        case "u" === n[0] && void 0 === n[1]:
                            return r(1);
                        case "u" === n[0] && void 0 !== n[1]:
                            return r(parseInt(n.slice(1).join("")));
                        case "x" === n[0] && void 0 === n[1]:
                            return t(1);
                        case "x" === n[0] && void 0 !== n[1]:
                            return t(parseInt(n.slice(1).join("")));
                        default:
                            throw new Error("This should never happen if you use isGroupCommand")
                    }
                }

                function Or(e) {
                    return Z(g)(_e(Mr(e, (e => {
                        const r = e.split("");
                        if (0 === r.length) return F;
                        const [t, ...n] = r, i = (e => {
                            switch (e) {
                                case "p":
                                    return X("add");
                                case "m":
                                    return X("mul");
                                case "v":
                                    return X("max");
                                case "n":
                                    return X("min");
                                default:
                                    return F
                            }
                        })(t);
                        return Z((e => {
                            const {
                                init: r,
                                rest: t
                            } = (i = e => {
                                return "number" == typeof(r = parseInt(e)) && isFinite(r) && Math.floor(r) === r;
                                var r
                            }, function(e) {
                                var r = je(Oe(e, i))(e);
                                return {
                                    init: r[0],
                                    rest: r[1]
                                }
                            })(n);
                            var i;
                            return {
                                1: {
                                    1: e,
                                    2: 0 === r.length ? 1 : parseInt(r.join(""))
                                },
                                2: t.join("")
                            }
                        }))(i)
                    }))))
                }

                function Mr(e, r) {
                    const t = r(e);
                    return ne((() => []))(Z((e => [e[1]].concat(Mr(e[2], r))))(t))
                }

                function Cr(e) {
                    return k(e.map(Tr))
                }

                function Tr(e) {
                    switch (e.kind) {
                        case "number":
                            return f(e.value);
                        case "string":
                            return h(e.value);
                        case "null":
                            return {
                                kind: "bottom"
                            };
                        case "object":
                            return h("{object}");
                        case "array":
                            return h("{array}")
                    }
                }
                const Lr = {
                        strategy: (e, r, t) => n => {
                            if (te(t)) return r;
                            if ("delta" === e && te(r)) return F;
                            if (te(r)) return t;
                            if (re(r) && re(t)) return n(r.value, t.value);
                            throw new Error("Non exhaustive match in combineCommand.strategy")
                        },
                        operation: (e, r, t, n, i, o) => {
                            const a = ze(G(o));
                            if ("append" === e && "add" === r) return Re(t, n, Kr("append", i.plus));
                            if ("append" === e && "mul" === r) return Re(t, n, Kr("append", i.times));
                            if ("append" === e && "max" === r) return R(a)(t, n);
                            if ("join" === e && "add" === r) return Re(t, n, Kr("join", R(o)));
                            if ("join" === e && "mul" === r) return Re(t, n, Kr("join", R(o)));
                            if ("join" === e && "max" === r) return R(a)(t, n);
                            if ("min" === r) return Lr.operation(e, "max", t, n, i, function(e) {
                                return M(((r, t) => tr(e.compare(r, t))))
                            }(o));
                            if ("delta" === e && "max" === r) return L(a)(t, n) ? t : n.map(_);
                            if ("delta" === e) return Re(t, n, ((e, r) => L(G(o))(e, r) ? e : {
                                kind: "bottom"
                            }));
                            throw new Error("Non exhaustive match in combineCommand.operation")
                        },
                        extend: (e, r, t, n) => {
                            if ("delta" === e && "top" === t.kind && "top" === n.kind) return L(U)(t.error, n.error) ? h(t.error) : {
                                kind: "bottom"
                            };
                            if ("delta" === e && "bottom" === n.kind) return t;
                            if ("delta" === e && "bottom" === t.kind) return {
                                kind: "bottom"
                            };
                            if ("top" === t.kind && "top" === n.kind) return h(R(U)(t.error, n.error));
                            if ("top" === t.kind) return t;
                            if ("top" === n.kind) return n;
                            if ("inner" === t.kind && "inner" === n.kind) return r(t.a, n.a);
                            if ("bottom" === t.kind) return n;
                            if ("bottom" === n.kind) return t;
                            throw new Error("Non exhaustive match in extend")
                        }
                    },
                    Rr = {
                        plus: (e, r) => e + r,
                        times: (e, r) => e * r
                    };

                function jr(e, r, t, n) {
                    if ("unbounded" === e.kind && "unbounded" === r.kind) {
                        const i = e.group,
                            o = r.group;
                        return ne(_)(Z((e => f(v(e))))(ir(i, o, t, n)))
                    }
                    if ("windowed" === e.kind && "windowed" === r.kind) {
                        const i = e.key,
                            o = e.group,
                            a = r.key,
                            s = r.group,
                            c = R(J(n))(i, a);
                        return ne(_)(Z((e => f(w(e, c))))(ir(o, s, t, n)))
                    }
                    if ("countLimit" === e.kind && "countLimit" === r.kind) {
                        const i = e.n,
                            o = r.n;
                        if (i === o) {
                            const o = e.limit,
                                a = e.group,
                                s = r.limit,
                                c = r.group,
                                u = R(J(n))(o, s);
                            return ne(_)(Z((e => f(q(e, u, i))))(ir(a, c, t, n)))
                        }
                        return h("Non matching counts")
                    }
                    if ("uniqueLimit" === e.kind && "uniqueLimit" === r.kind) {
                        const i = e.n,
                            o = r.n;
                        if (i === o) {
                            const o = e.limit,
                                a = e.group,
                                s = r.limit,
                                c = r.group,
                                u = R(J(n))(o, s);
                            return ne(_)(Z((e => f(b(e, u, i))))(ir(a, c, t, n)))
                        }
                        return h("Non matching counts")
                    }
                    return h("Non matching group types")
                }

                function Ur(e, r, t, n, i, o) {
                    const a = (e, r) => ({
                            1: xe(e)(r).concat(Pe(Math.max(0, e - r.length), _)),
                            2: Me(e)(r)
                        }),
                        s = (r, t, n) => {
                            if (0 === r.length) return Lr.operation(e, "max", t, n, i, o);
                            if (r.length > 0) {
                                const [c, ...u] = r, l = a(c[2], t), p = l[1], d = l[2], m = a(c[2], n), g = m[1], _ = m[2];
                                return Lr.operation(e, c[1], p, g, i, o).concat(s(u, d, _))
                            }
                            throw new Error("Non exhaustive match in recurse")
                        };
                    return Te((c = e => "bottom" === e.kind, function(e) {
                        return e.slice(Oe(e, c))
                    })(Te(s(r, t, n))));
                    var c
                }

                function Nr(e, r, t) {
                    return ne(u)(Gr(e, F)(r, t))
                }

                function Gr(e, r) {
                    const t = r => (t, n) => Lr.strategy(e, t, n)(Gr(e, r)),
                        n = (n, i) => {
                            if (H(we(x({
                                    1: j,
                                    2: be
                                }))).equals(n.commands, i.commands)) {
                                const o = ((r, n, i) => {
                                    if ("stringGroup" === n.kind && "stringGroup" === i.kind) {
                                        const e = jr(n.group, i.group, t(r), U);
                                        return N(e, (e => E(Wr(e, U))))
                                    }
                                    if ("numberGroup" === n.kind && "numberGroup" === i.kind) {
                                        const e = jr(n.group, i.group, t(r), ye);
                                        return N(e, (e => y(Wr(e, ye))))
                                    }
                                    if ("tuple" === n.kind && "tuple" === i.kind) {
                                        const t = re(r) ? r.value : [];
                                        return f(k(Ur(e, t, n.tuple, i.tuple, Rr, ye)))
                                    }
                                    throw new Error(`Non matching payload. Got ${n.kind} and ${i.kind}`)
                                })(te(n.commands) ? r : n.commands, n.payload, i.payload);
                                return N(o, (e => A(n.commands, e)))
                            }
                            throw new Error(`Non matching primitive strings. Got ${hr(n)} and ${hr(i)}`)
                        };
                    return (r, t) => vr(I(Lr.extend(e, n, Ar(r).state, Ar(t).state)))
                }

                function Br(e, r, t) {
                    const n = Z((r => sr(e, (([e, n]) => function(e) {
                        return function(r, t) {
                            return -1 !== e.compare(r, t)
                        }
                    }(t)(e, r)))))(r);
                    return ne((() => e))(n)
                }

                function Wr(e, r) {
                    switch (e.kind) {
                        case "unbounded":
                            return e;
                        case "windowed":
                            return te(e.key) ? e : w(Br(e.group, e.key, r), e.key);
                        case "countLimit":
                            {
                                const t = e.limit,
                                    n = e.n,
                                    i = e.group,
                                    o = (e, r) => r <= 1 ? F : X(r - 1),
                                    a = or(n, i, o, r),
                                    s = R(J(r))(t, a);
                                return q(Br(i, s, r), s, n)
                            }
                        case "uniqueLimit":
                            {
                                const t = e.limit,
                                    n = e.n,
                                    i = e.group,
                                    o = (e, r) => {
                                        if ("object" === e.kind) {
                                            const t = [...e.value.keys(), ...r.keys()],
                                                i = new Set(t);
                                            return i.size >= n ? F : X(i)
                                        }
                                        return F
                                    },
                                    a = or(new Set, i, o, r),
                                    s = R(J(r))(t, a);
                                return b(Br(i, s, r), s, n)
                            }
                    }
                }

                function Kr(e, r) {
                    return (t, n) => Lr.extend(e, ((e, t) => f(r(e, t))), t, n)
                }
                var $r = t(6567),
                    zr = t(64),
                    Qr = t(6013),
                    Fr = t(7545),
                    Xr = t(7121);
                class Vr {
                    constructor(e, r, t) {
                        this.externalData = e, this.localQueries = r, this.externalQueries = t, this.queryCodesAsList = [], this.queryCodesAsMap = {};
                        const n = this.externalData.getExternalJsonData(zr.mL) || [],
                            i = (0, $r.fS)((() => []))((0, $r.Y3)((() => n.filter((e => (0, Xr.UC)(e, this.localQueries, this.externalQueries))))));
                        this.add(i)
                    }
                    has(e) {
                        return e in this.queryCodesAsMap
                    }
                    add(e) {
                        return (0, i.zG)(e.forEach((e => this.queryCodesAsMap[e] = !0)), (e => this.updateSegmentsList()))
                    }
                    remove(e) {
                        return (0, i.zG)(e.forEach((e => delete this.queryCodesAsMap[e])), (e => this.updateSegmentsList()))
                    }
                    getAllAsList() {
                        return this.queryCodesAsList
                    }
                    getStdAsList() {
                        return this.queryCodesAsList.filter((e => e >= 1e7))
                    }
                    getAllAsMap() {
                        return this.queryCodesAsMap
                    }
                    getUpdates(e) {
                        const r = [],
                            t = [];
                        return Object.entries(e).forEach((([e, n]) => {
                            const i = parseInt(e),
                                o = (null == n ? void 0 : n.result) || {
                                    result: !1
                                },
                                a = !0 === (null == o ? void 0 : o.result) && !(i in this.queryCodesAsMap),
                                s = !1 === (null == o ? void 0 : o.result) && i in this.queryCodesAsMap;
                            a ? r.push(i) : s && t.push(i)
                        })), {
                            entered: r,
                            exited: t
                        }
                    }
                    flush() {
                        this.externalData.setExternalJsonData(zr.mL, this.getAllAsList())
                    }
                    reset() {
                        this.externalData.removeExternalData(zr.mL), this.queryCodesAsList = [], this.queryCodesAsMap = {}
                    }
                    updateSegmentsList() {
                        this.queryCodesAsList = Object.keys(this.queryCodesAsMap).map((e => parseInt(e)))
                    }
                }
                const Yr = "bootstrap",
                    Hr = "process",
                    Jr = "processTransitions",
                    Zr = "updateEnvironment",
                    et = "updateExternalState",
                    rt = "updateLAL",
                    tt = "updateTPD";
                const nt = "permutive:query:changed",
                    it = "internal_query_states",
                    ot = "external_query_states",
                    at = e => class extends e {
                        constructor(...e) {
                            super(...e), this.isWorkerReady = !1, this.stateMap = {
                                value: {},
                                promise: Promise.resolve({})
                            }, this.extStateMap = {}, this.userSegments = new Vr(this.externalData, this.queryMetadata, this.externalQueries), this.segmentEntryQueryCodes = new Set, this.segmentExitQueryCodes = new Set, this.hasNewOrModifiedQueries = !1, this.makeDebouncedProcessTransitions()
                        }
                        makeStateMaps() {
                            const e = this.permutiveData.getData(it) || {},
                                r = this.permutiveData.getData(ot) || {},
                                t = Object.keys(this.queryMetadata),
                                n = Object.keys(e);
                            this.hasNewOrModifiedQueries = t.length !== n.length || t.filter((r => {
                                var t;
                                return this.queryMetadata[r] !== (null === (t = e[r]) || void 0 === t ? void 0 : t.checksum)
                            })).length > 0, this.logger.debug("QueryManager has new or modified queries", this.hasNewOrModifiedQueries);
                            const o = this.hasNewOrModifiedQueries ? (0, Qr.fl)(e, (r => {
                                var t;
                                return (null === (t = e[r]) || void 0 === t ? void 0 : t.checksum) === this.queryMetadata[r]
                            })) : e;
                            this.extStateMap = this.hasNewOrModifiedQueries ? (0, i.zG)((0, Qr.fl)(r, (e => e in o)), (e => (this.permutiveData.setData(ot, e), e))) : r, this.stateMap = {
                                value: o,
                                promise: Promise.resolve(o)
                            };
                            this.permutiveData.getData("query_states") && this.permutiveData.setData("query_states", null)
                        }
                        makeDebouncedProcessTransitions() {
                            this.scheduler = new Fr.b(this.transitionDebounceTime, this.transitionDebounceMaxTime);
                            this.debouncedProcessTransitions = this.scheduler.scheduleAccumulated((e => this.processTransitions(e)), {
                                concat: (e, r) => e.concat(r),
                                empty: []
                            })
                        }
                        makeMessage(e, r, t) {
                            return {
                                type: e,
                                payload: (0, i.bc)(this.queryMetadata, this.extStateMap, ...r),
                                stateMap: t,
                                userId: this.userId.get()
                            }
                        }
                        trackTransition(e, r) {
                            const t = zr.ED ? this.customProperties.getCustomProps() : {},
                                n = Object.assign(Object.assign(Object.assign({}, t), {
                                    segment_number: r
                                }), {});
                            e ? this.segmentEntryQueryCodes.add(r) : this.segmentExitQueryCodes.add(r), this.permutive.track(e ? "SegmentEntry" : "SegmentExit", n)
                        }
                        trackSegmentsTransition(e, r) {
                            e.forEach((e => {
                                this.trackTransition(!0, e), this.messages.emit(nt, {
                                    queryCode: e,
                                    result: {
                                        result: !0
                                    }
                                })
                            })), r.forEach((e => {
                                this.trackTransition(!1, e), this.messages.emit(nt, {
                                    queryCode: e,
                                    result: {
                                        result: !1
                                    }
                                })
                            }))
                        }
                        updateUserSegments(e, r) {
                            this.userSegments.add(e), this.userSegments.remove(r), this.userSegments.flush()
                        }
                        onStateChangeReady(e) {
                            const {
                                entered: r,
                                exited: t
                            } = this.userSegments.getUpdates(e);
                            this.trackSegmentsTransition(r, t), this.updateUserSegments(r, t), this.logger.debug("QM: Updating cohort and query state cache", e), this.permutiveData.setData(it, e);
                            const n = r.length > 0 || t.length > 0;
                            return (0, i.zG)(n, (e => e ? this.messages.emit("permutive:segments:updated") : {}), (e => ({
                                segmentsEntered: new Set(r),
                                segmentsExited: new Set(t)
                            })))
                        }
                        onStateChange(e, r) {
                            return (0, i.zG)(r.length > 0 ? this.network.error(`QL error(s). Got ${r.join("; ")}`, this.userId.get()) : {}, (r => this.stateMap.value = Object.assign(Object.assign({}, this.stateMap.value), e)), (e => this.isWorkerReady ? [e, this.onStateChangeReady(e)] : [e, {
                                segmentsEntered: new Set,
                                segmentsExited: new Set
                            }]))
                        }
                        postMessage(e, r) {
                            const t = e => this.userId.get() === e.userId ? e : {
                                diff: {},
                                errors: []
                            };
                            return new Promise((n => {
                                this.stateMap.promise = this.stateMap.promise.then((0, i.ls)((t => this.makeMessage(e, r, t)), (e => this.processMessage(e)))).then((0, i.ls)(t, (({
                                    diff: e,
                                    errors: r
                                }) => {
                                    const [t, i] = this.onStateChange(e, r);
                                    return n([e, i]), t
                                }))).catch((e => (0, i.zG)(this.network.error(`Error during query execution. Got ${e}`, this.userId.get()), (e => n([{}, {
                                    segmentsEntered: new Set,
                                    segmentsExited: new Set
                                }])), (e => this.stateMap.value))))
                            }))
                        }
                        processTransitions(e) {
                            return this.postMessage(Jr, [e])
                        }
                        bootstrap(e) {
                            return this.postMessage(Yr, [{
                                segments: {
                                    "1p": this.userSegments.getAllAsMap()
                                },
                                sessionId: this.sessionManager.getSessionId(),
                                viewId: this.viewId.get(),
                                lookalikeModels: {}
                            }, e])
                        }
                        updateEnvironment(e) {
                            return this.postMessage(Zr, [e])
                        }
                        updateLAL(e) {
                            return this.postMessage(rt, [e])
                        }
                        updateTPD(e) {
                            return this.postMessage(tt, [e])
                        }
                        process(e, r) {
                            return (0, Xr.AG)(e) ? this.debouncedProcessTransitions([e]) : this.processStandard([e], r)
                        }
                        processStandard(e, r) {
                            return (0, c.mG)(this, void 0, void 0, (function*() {
                                const t = yield this.postMessage(Hr, [e]);
                                return r && this.setAsRealTimeifNeeded(e), t
                            }))
                        }
                        updateExternalState(e) {
                            const r = (0, Qr.b0)(e, ((e, r) => {
                                    const t = this.queryMetadata[e];
                                    return t && r[t] ? (0, $r.Uo)(lr(r[t])) : $r.YP
                                })),
                                t = (0, Qr.b0)(this.extStateMap, ((e, r) => (0, $r.Uo)(lr(r)))),
                                n = (e, r, t) => (0, i.zG)((0, $r.Y3)((() => function(e, r) {
                                    return Nr("join", e, r)
                                }(e, r))), (0, $r.fS)((() => (this.network.error(`Failed to join external state for query: ${t}. Had ${cr(r)}, received ${cr(e)}}`, this.userId.get()), r)))),
                                o = (0, Qr.b0)(Object.assign(Object.assign({}, t), r), ((e, r) => t[e] ? (0, $r.G)(ur(n(r, t[e], e))) : (0, $r.G)(ur(r))));
                            return this.permutiveData.setData(ot, o), this.extStateMap = o, this.postMessage(et, [])
                        }
                        reset() {
                            this.userSegments.reset(), this.permutiveData.setData(it, {}), this.permutiveData.setData(ot, {}), this.stateMap = {
                                value: {},
                                promise: Promise.resolve({})
                            }, this.extStateMap = {}
                        }
                        setAsReady() {
                            this.isWorkerReady = !0, this.onStateChangeReady(this.stateMap.value), this.messages.emit("permutive:queries:initialised")
                        }
                        getStateSizeInBytes() {
                            return 2 * JSON.stringify(this.stateMap.value).length
                        }
                        updateExternalSegments(e) {
                            const r = {};
                            for (const t of Object.keys(e)) {
                                const n = parseInt(t);
                                !isNaN(n) && this.externalQueries.has(n) && (r[n] = {
                                    result: {
                                        result: e[n]
                                    }
                                })
                            }
                            const {
                                entered: t,
                                exited: n
                            } = this.userSegments.getUpdates(r);
                            this.trackSegmentsTransition(t, n), this.updateUserSegments(t, n);
                            (t.length > 0 || n.length > 0) && this.messages.emit("permutive:segments:updated")
                        }
                        setAsRealTimeifNeeded(e) {
                            return !this.realtime.isRealtime() && e.filter((e => "Pageview" === e.name)).length > 0 ? this.realtime.setAsRealtime(this.userSegments.getAllAsList().length) : void 0
                        }
                    };

                function st() {
                    return (0, n.h)(new s)
                }
                class ct {
                    constructor(e) {
                        this.queryMetadata = {
                            72374: "0c8b70cdb7",
                            79514: "5f4d7d4367",
                            83650: "b1836aadd2",
                            83654: "1814c2be9e",
                            83657: "4dd418aa54",
                            83658: "7ea0e15bef",
                            83659: "b879efc85e",
                            83722: "e1ede4ee16",
                            84413: "bc82a00983",
                            84677: "3999909105",
                            84732: "1bdb71f75b",
                            84733: "107daca502",
                            84734: "d4bf05e8b7",
                            84735: "a29e171e56",
                            84736: "87ad3efb30",
                            84737: "911d1906f2",
                            84738: "1e0507ceb2",
                            84739: "3b82416770",
                            84740: "dc5201e465",
                            84741: "844f059ac4",
                            84742: "7eb0c5ff09",
                            84743: "b4123ede2e",
                            84744: "a5bc586068",
                            84745: "1f245ad87e",
                            84746: "823ba87382",
                            84747: "092372e8cf",
                            84748: "ca3b404651",
                            84749: "95e84348cc",
                            84750: "25338f353d",
                            84751: "860b1f8029",
                            84752: "233f826b7c",
                            84753: "19654117d8",
                            84754: "9b43ca2008",
                            85007: "101d63dacd",
                            85008: "8e118fa16b",
                            85009: "3e6505a949",
                            85010: "e4f481c732",
                            85011: "32a5af4faf",
                            85012: "f84aa2f3ee",
                            85013: "064360e954",
                            85014: "6f5e2b2aa7",
                            85015: "78191616e5",
                            85016: "8ff02e5e13",
                            85017: "9f7056ee82",
                            85302: "055b0598b0",
                            85403: "4100d85a9a",
                            85593: "f204fa7425",
                            85653: "b85bb89520",
                            87312: "140a5e0115",
                            87313: "af916c946f",
                            87314: "bafbe48d6e",
                            87317: "1578439845",
                            87421: "9014c8b003",
                            87422: "cb58816f2c",
                            87487: "c369422d59",
                            87488: "46b1fa3428",
                            87490: "6f25a028f0",
                            87491: "b29d87016a",
                            87492: "b3480067fb",
                            87493: "d88c40d1bd",
                            87494: "ad28288a39",
                            87495: "b1690f69fc",
                            87496: "509f5b23a9",
                            87497: "484a5cfa6c",
                            87498: "624c844299",
                            87500: "04de45ab9d",
                            87501: "ae1be859af",
                            87502: "4c07d45220",
                            87503: "8364ba18c0",
                            87504: "3c296d99c9",
                            87505: "579940af57",
                            87506: "afe61ea85c",
                            87507: "640e20dafe",
                            87508: "271d18c88e",
                            87509: "186745a5ca",
                            87510: "28aecf3716",
                            87511: "d7fe6723c8",
                            87512: "3b87ec4ef4",
                            87513: "ed111ccda2",
                            87514: "f5a71cd40c",
                            87515: "c03fdf490c",
                            87516: "172cb89704",
                            87517: "e41271011e",
                            87518: "146bdbae31",
                            87519: "f710df8e9b",
                            87520: "f79128addb",
                            87521: "087fa32d00",
                            87522: "6d8fdde78d",
                            87523: "1729f01821",
                            87524: "922d40c981",
                            87587: "f72b8cb0f4",
                            87588: "881da4410a",
                            87591: "44a26bd89d",
                            87592: "e6d9e797e2",
                            87594: "3438ac2d92",
                            87595: "bfb8b90691",
                            87596: "93cf120177",
                            87597: "a1c6e7f882",
                            87598: "e77966ef25",
                            87599: "85ca5e2395",
                            87600: "131ec84f46",
                            87601: "bed7bd3fda",
                            87602: "8d07732ae6",
                            87603: "6fec0064eb",
                            87604: "1e5093d4ed",
                            87605: "4a620946d7",
                            87606: "52296c1d5d",
                            87608: "ca3909bf5a",
                            87610: "e5b2f1a94d",
                            87611: "ac6f4bea6c",
                            87612: "a9d9f1763b",
                            87613: "027a72d9d4",
                            87614: "91f4c88f28",
                            87615: "844aee5992",
                            87616: "4112caacf5",
                            87617: "672df7bc22",
                            87618: "99813753de",
                            87619: "03b944974e",
                            87806: "58dc60f541",
                            88152: "e77a6da0d6",
                            88153: "028e8972ea",
                            88973: "10ddbf215d",
                            88974: "809cca0266",
                            88975: "04036136b3",
                            89152: "3d46da6e92",
                            89855: "e1a2dd2f65",
                            89856: "f7fd95cca6",
                            89857: "6325957083",
                            89858: "b17c7e5d5e",
                            89859: "31092d33a0",
                            89860: "26ef1645da",
                            89861: "9896b887a1",
                            89862: "a56815dec0",
                            89863: "f70a2f8eb4",
                            89864: "d629a217d9",
                            89865: "588f37082d",
                            89866: "a0cbb3bba5",
                            89867: "1a926f9c72",
                            90029: "6fb211940b",
                            90030: "6bc9f4aa2e",
                            90419: "8c2137c917",
                            90420: "18d8265c57",
                            90421: "109a6bfa81",
                            90422: "c38d49eec1",
                            90423: "6fb2bdd628",
                            90424: "d15ebfd30e",
                            90427: "83a6d9ea9b",
                            90583: "e8f0b4a2e5",
                            90584: "1da75a49c7",
                            90678: "ece6717aa0",
                            90679: "e0f4c68156",
                            90680: "7dc4076eea",
                            90681: "375c1a31d0",
                            90682: "26aa31ae18",
                            90683: "a8b2f4f61f",
                            90740: "15915398f3",
                            90741: "c56ea5b514",
                            90742: "1bba77ee7f",
                            90745: "e96a62e9d6",
                            90749: "f397d6b64e",
                            90752: "580d5e298f",
                            90753: "d677430d5d",
                            90754: "2cacbc9c58",
                            90755: "a81db208dd",
                            90756: "dba52d2640",
                            90757: "fb8f246a6b",
                            90758: "83a84f468e",
                            90759: "72ac115418",
                            90760: "12a5268acf",
                            91179: "851934c496",
                            92377: "02497431cb",
                            92380: "26b86279b2",
                            92383: "31ca8663c2",
                            92384: "c78147890e",
                            92385: "284579fe2a",
                            92386: "bd614fd493",
                            92387: "4b02f0de86",
                            92388: "588a1d8cbf",
                            92389: "55b9e0edae",
                            92390: "35023e88b6",
                            92391: "b8c58f4d79",
                            93351: "0c8b70cdb7",
                            95572: "c53adf447b",
                            95573: "2f83a0cec2",
                            95574: "bb7cd75e57",
                            95575: "3fc917d3c9",
                            98032: "44269648a2",
                            98423: "22a4ebc59d",
                            98499: "090cc01e7c",
                            98500: "fc0d9ce60b",
                            98508: "261967f3c1",
                            98842: "1871d02c99",
                            98843: "9538b17e67",
                            98954: "e9b49feeee",
                            99352: "6694d6e5e1",
                            99355: "97d7985257",
                            99356: "83a8ca37c5",
                            99357: "0b0126f0be",
                            99358: "b6ed6943cf",
                            99359: "243633338d",
                            99360: "0ba7011362",
                            100800: "f613fcb26d",
                            102174: "be500263c9",
                            102196: "26efd4b1d7",
                            103313: "f122b71fe7",
                            103324: "9ac015e43a",
                            103327: "d0f4c05f72",
                            106853: "ef4cfacc82",
                            108459: "ad25e89aa3",
                            108461: "1ac9413df5",
                            109017: "6876b34eb0",
                            109039: "b611deccfa",
                            109042: "c5cca42471",
                            109043: "9de9a36044",
                            109045: "c544db9d6b",
                            109046: "682f3460b8",
                            109047: "ec48760e88",
                            109048: "775e221eab",
                            109049: "ba17ad5518",
                            109050: "e1d1a5db94",
                            109051: "dfd010b5e9",
                            109052: "3983ce9071",
                            109053: "1e572ba510",
                            109054: "7932e58e57",
                            109055: "18e8a10ca4",
                            109060: "5b12a5cc87",
                            109130: "815ff29b87",
                            109131: "6d602ceb34",
                            109133: "aec2304096",
                            109145: "4e49b371d9",
                            109160: "f0f178736a",
                            109177: "1702a2d8de",
                            109190: "aa0af1803f",
                            109350: "73f50cfaa5",
                            109352: "15c734f59f",
                            109500: "78571d4c20",
                            109501: "6a0cd339b9",
                            110753: "7ff080562c",
                            110756: "daa7e4fbc5",
                            110763: "a000553f01",
                            110778: "946159f2d5",
                            110779: "c6ffa5a9f4",
                            110780: "ed0f111dc1",
                            110782: "793d6d8ed0",
                            110783: "1ea7642bb4",
                            110786: "273da946b8",
                            110788: "3ebfe6bb1d",
                            110789: "09695f63b7",
                            110792: "a5b7a77a33",
                            110795: "ee5d28962e",
                            110798: "3fc353071a",
                            110799: "1984ea3112",
                            111594: "7fa37fe11f",
                            111596: "860bd783bc",
                            111597: "c8a393d7df",
                            111757: "8c842a5e37",
                            111760: "2fe0c0ca1b",
                            111764: "73a6ca364c",
                            111766: "b0001bcb66",
                            111780: "5fa1ea06b8",
                            111783: "72b2c8d342",
                            111960: "a3f8d17487",
                            111961: "27a64a0047",
                            111962: "8da0445c9a",
                            111963: "f6bc875e3b",
                            111966: "a5957e76a3",
                            111967: "f2fd9207ef",
                            111968: "6f0bc5ae78",
                            111969: "7357e90b22",
                            111970: "8555dcc3e4",
                            111980: "21d5cdf4c1",
                            111981: "b84f5ab3fc",
                            111982: "5b8e844470",
                            111984: "e50903c912",
                            111985: "fc25b7016a",
                            111986: "c8cf9118e8",
                            112842: "3ed8a7f23e",
                            112844: "ffbc1b560c",
                            112853: "879267ec31",
                            112856: "23aee9957d",
                            112858: "2d36b9fab5",
                            112860: "f4c96caa3c",
                            112861: "0806b933a1",
                            112862: "3c08b74838",
                            112863: "b945b6df66",
                            112865: "d4ca9a448d",
                            112870: "f784228d8d",
                            112871: "53ed52f312",
                            112872: "15d13c7e3c",
                            112903: "5c93294ed5",
                            112904: "bb3f5a6509",
                            112961: "fe19248e47",
                            112962: "590b3c1b47",
                            112963: "59ecedd9aa",
                            112964: "0dec4eba87",
                            112965: "e4088d8128",
                            112966: "1dac2f6ac2",
                            112967: "72b468607a",
                            112968: "2f4ed7bd7b",
                            112969: "906849a493",
                            112970: "ca67a6350c",
                            112972: "83fa4b7a6f",
                            112973: "0cb41cc36d",
                            112974: "5bce3acf56",
                            112976: "2a460dc231",
                            112979: "abd1fbdb3b",
                            112980: "3dbce59df3",
                            112981: "bf90815809",
                            112995: "9410ab12c0",
                            112996: "1c8ef5bada",
                            112997: "325c7a32bc",
                            112998: "2e45cdbca4",
                            112999: "58ef8d1b8f",
                            113002: "b2164a0377",
                            113003: "460d4398fd",
                            113007: "b1b6756e5b",
                            113009: "ff6db8f0c1",
                            113012: "1f60773b20",
                            113013: "6f8cf79c1e",
                            113015: "74fa21c0e7",
                            113018: "a3643ef6fe",
                            113020: "5766bc52b7",
                            113022: "0951556719",
                            113023: "b1fa99bc2c",
                            113024: "49f48e3dff",
                            113025: "f716ac4e73",
                            113026: "fccf8f30b9",
                            113027: "b4be3ef9e2",
                            113028: "4bc4f814d9",
                            113029: "538bad62fa",
                            113032: "e922d50b57",
                            113034: "769edefed2",
                            113036: "8e8afc9863",
                            113039: "d4c7da976c",
                            113042: "b236d77622",
                            113045: "56b31c00ae",
                            113047: "b5a1e60cd3",
                            113051: "9a05bd6dd4",
                            113054: "05cbd33c84",
                            113056: "568c03d797",
                            113057: "acc9f2aae8",
                            113061: "dfbe8c9936",
                            113062: "7e18735b66",
                            113063: "a3306a1f51",
                            113064: "7cc6823673",
                            113065: "da56189c2f",
                            113078: "84e594e6cd",
                            113080: "e9eb15a250",
                            113083: "520428be96",
                            113102: "224f07702a",
                            113106: "7385063c52",
                            113109: "90f233f795",
                            113110: "51d2763873",
                            113111: "f0a4b5cb15",
                            113171: "5ceaa82c7a",
                            113172: "8ec3e45cd7",
                            113174: "9a08c97ce4",
                            113175: "6f67c5f034",
                            113176: "103a8ce359",
                            113177: "6b031c9629",
                            113180: "655a04b8b8",
                            113181: "6ffbbb9b2b",
                            113183: "caa4f980d0",
                            113185: "82b51186df",
                            113211: "543acba7a6",
                            113213: "fb4dd2475d",
                            113214: "e5f3a21d2c",
                            113215: "bfbb2353ea",
                            113232: "91e4b8a3c9",
                            113233: "f4b0d850ab",
                            113234: "e8b5f31442",
                            113237: "874dff78fc",
                            113238: "2d64a59b03",
                            113239: "5debc25528",
                            113240: "ac0375d934",
                            113241: "58f811ce64",
                            113242: "79041ad135",
                            113244: "c63a61db6a",
                            114090: "3daf20030a",
                            114091: "2064ec18f1",
                            114092: "e1c5a80e2e",
                            114959: "ecc4a3d1cb",
                            114960: "0450a8e358",
                            114961: "b74ebaef3c",
                            115031: "fc2bb50d26",
                            115032: "d2a97c3ff3",
                            115033: "a4fb38c546",
                            115303: "c201295af4",
                            115304: "d3818d9084",
                            115305: "02af1698b2",
                            115627: "d691b00157",
                            115639: "324cbfe440",
                            115640: "48ed9647b5",
                            115827: "35fd6f73f0",
                            115828: "7c99da2359",
                            115829: "645ffe41a6",
                            115830: "7053f78853",
                            115831: "be236c0c66",
                            115832: "abd6d55d78",
                            115834: "a750be1010",
                            115835: "5dc0bd5e92",
                            115836: "a4584cd0b6",
                            115837: "dd773dace9",
                            115839: "5debc25528",
                            115842: "e9c31fd9aa",
                            115959: "9a31c82b9a",
                            118635: "60216482a3",
                            118636: "3feaa2a9a4",
                            118637: "f5e6b50b91",
                            118638: "71cd084183",
                            118639: "19cee914f8",
                            118640: "85d6b4a7fa",
                            118641: "68eec807d5",
                            118642: "2876cb4b57",
                            118643: "4d4740776c",
                            118644: "c15a902cf2",
                            118645: "7846af305a",
                            118646: "c6fd975d0b",
                            118647: "ab5453b7e0",
                            118648: "4e6becd116",
                            118649: "66168a1f10",
                            118650: "7eae360268",
                            118651: "444e1b47b0",
                            118652: "0b5dd6a0f0",
                            118653: "79eae8b74a",
                            118654: "53c8a4479e",
                            118655: "40ce5697ec",
                            118656: "5dd88dfa79",
                            118657: "1413d0ea87",
                            118658: "93e97eb917",
                            118659: "b915c83fe0",
                            118660: "eb1b1d6acd",
                            118661: "acf1aaec20",
                            118662: "c93887ea9f",
                            118663: "cece6fb974",
                            118664: "4a4f5765ed",
                            118665: "00d835fe0f",
                            118666: "27f6221a58",
                            118667: "8c9a91e469",
                            118668: "933b5cad9c",
                            118669: "2464a9e5c8",
                            118670: "0d612e3abf",
                            118671: "be4e1c4d1c",
                            118672: "6a3111abba",
                            118673: "ceb3f938d8",
                            118674: "e9b9ccf525",
                            118675: "89f9b972da",
                            118676: "a7901be06b",
                            118677: "8eae84129a",
                            118678: "292dfc4738",
                            118679: "14ef0ed8db",
                            118680: "18507c1441",
                            118681: "a3e15039f3",
                            118682: "36658c0401",
                            118683: "8b4fa1ff96",
                            118684: "8176e87112",
                            118685: "5802993c63",
                            118686: "8d22e566b4",
                            118687: "a9c28e9aee",
                            118688: "e9a9335cfc",
                            118689: "bdbf991f7a",
                            118690: "40585bac66",
                            118691: "9d326b3b8c",
                            118692: "6efdb3d6e3",
                            118693: "92c4160a76",
                            118694: "2659428d02",
                            118695: "cedce14737",
                            118696: "f281828d6f",
                            118697: "061e4f97a8",
                            118698: "1644c97d3d",
                            118699: "62074f1824",
                            118700: "2f96026b08",
                            118701: "3f9fda2f3f",
                            118702: "be4e786ec3",
                            118703: "f1fbd6c953",
                            118704: "a372ed2d8a",
                            121451: "bd7b05a900",
                            121924: "9efbc8e812",
                            121926: "62538a02d2",
                            121927: "6572a3038a",
                            121928: "5c22d2f5e8",
                            121929: "feca8ac472",
                            121930: "d906a77d8e",
                            121931: "909d0298a6",
                            121932: "9611224769",
                            121933: "96da90f578",
                            121934: "0b2bbaeff2",
                            121935: "bebc5f9bde",
                            121936: "dd46d3486c",
                            121937: "f831c15c03",
                            121938: "7b071be099",
                            121939: "fd2eeb325b",
                            121940: "115e121421",
                            121941: "ebf4778ac7",
                            121942: "5f93cfb28c",
                            121943: "e5aa6382fa",
                            121944: "4f8d7ae9ea",
                            121945: "1cfdc52f63",
                            121946: "aec57153f6",
                            121947: "d13cb46c8a",
                            121948: "2f0c17afc6",
                            121949: "db13aba62e",
                            121950: "5cbdb2885a",
                            121951: "850f1631e5",
                            121952: "37491e25fc",
                            121953: "9cf1360422",
                            121954: "eedffcc206",
                            121955: "3867086e85",
                            121956: "792bc2b62b",
                            121957: "004f1a1f44",
                            121958: "c45c6b01d0",
                            121959: "9a216d3db4",
                            121960: "eeeb0c9853",
                            121961: "d7a787aa39",
                            121962: "c9d24adcf2",
                            121963: "8f0233188e",
                            121964: "db6e6de94c",
                            121965: "81a5f95df6",
                            121966: "db3ee5bfe9",
                            121967: "e6d739ce69",
                            121968: "2f237880ce",
                            121969: "680320e83c",
                            121970: "96972d9a48",
                            121971: "3d11d0b140",
                            121972: "3f8ce52c33",
                            121973: "565e53a03f",
                            121974: "0e5a1828cd",
                            121975: "bd2fbaa264",
                            122461: "f0b6a9feda",
                            123554: "2530827a34",
                            123555: "f72dcc9121",
                            1e7: "ab2a79b4e1",
                            10000001: "ea7eca3b49",
                            10000002: "7a0b76bb2f",
                            10000003: "49e502122c",
                            10000004: "f1c67fac3c",
                            10000005: "377db020e8",
                            10000006: "547879da4e",
                            10000007: "ca176545c8",
                            10000008: "1a9d700b97",
                            10000010: "a4cefa7f58",
                            10000011: "aa7075e35b",
                            10000012: "1ae8bddb93",
                            10000013: "1e8886ad72",
                            10000014: "f516ad362e",
                            10000015: "787c19bee4",
                            10000016: "d6475b75d5",
                            10000017: "38ea08fad7",
                            10000018: "5fab00fa2c",
                            10000019: "e109f9b360",
                            10000020: "90a178ea71",
                            10000021: "bd128fcfed",
                            10000022: "cd3face523",
                            10000023: "c2f26784d1",
                            10000024: "eb85193dfd",
                            10000025: "9674e8f207",
                            10000026: "6d37ba6b9a",
                            10000035: "b0aca14cab",
                            10000036: "d36ef645a5",
                            10000037: "adf0bd9d7d",
                            10000038: "0a8427037a",
                            10000039: "9b0eb48861",
                            10000040: "de880ed625",
                            10000041: "82f6856d68",
                            10000042: "98ff38947b",
                            10000043: "3cde49fc7f",
                            10000044: "204ea1bd83",
                            10000045: "87b257dec6",
                            10000046: "5579a14726",
                            10000047: "aca78f9e2e",
                            10000048: "fa2ea1e2fa",
                            10000049: "673bfae6e5",
                            10000050: "6f4e13e789",
                            10000051: "d7f4837226",
                            10000052: "53669c17cf",
                            10000053: "cd9d4baf1b",
                            10000054: "36a6a1b8ac",
                            10000055: "61fbd3f45d",
                            10000056: "36169adc34",
                            10000057: "4dcf4dc5ea",
                            10000058: "91ed3d5df9",
                            10000059: "9975f2d18a",
                            10000060: "291bb4c201",
                            10000061: "835df65992",
                            10000062: "8af22f787c",
                            10000063: "13625d9512",
                            10000064: "865b534730",
                            10000065: "711a803835",
                            10000066: "3f5a01518e",
                            10000067: "a90790be86",
                            10000068: "840b4c697a",
                            10000069: "5b811cacf3",
                            10000070: "26f90895bf",
                            10000071: "ecfb5c1cab",
                            10000072: "49ab120d1d",
                            10000073: "8816deadae",
                            10000074: "5c7a1ac24a",
                            10000075: "0dc58fe713",
                            10000076: "c791f64ecd",
                            10000077: "fb2601505c",
                            10000078: "ec0d63e687",
                            10000079: "9f1a1f7510",
                            10000080: "e51622030c",
                            10000081: "c7a8cae6d0",
                            10000082: "8ce761d02d",
                            10000083: "7b6a42ef76",
                            10000084: "479977505c",
                            10000085: "930fdc5c22",
                            10000086: "39e47fa144",
                            10000087: "08cf53e104",
                            10000088: "a2e20ffb1f",
                            10000089: "68f37c2880",
                            10000090: "be04a0b54e",
                            10000324: "1ccab119ee",
                            10000325: "1f783b581b",
                            10000327: "21c25a4900",
                            10000328: "482cefaa5d",
                            10000329: "8ea8e0687e",
                            10000330: "7f88a52c7e",
                            10000687: "8cfe8cac9d",
                            10000688: "6e4f7fa14e",
                            10000689: "52ef8e630f",
                            10000690: "e072687254",
                            10000691: "3fe53e0c18",
                            10000692: "9d30d89615",
                            10000693: "d7956f1d3d",
                            10000694: "05129d3c08",
                            10000695: "74ef454681",
                            10000696: "7ae9936d9c",
                            10000697: "26fc0f70c4",
                            10000698: "ae27296fe1",
                            10000699: "d5f5b0f0cd",
                            10000700: "eb8125a768",
                            10000701: "3bea66735c",
                            10000702: "16ae6df770",
                            10000703: "761e431f4d",
                            10000704: "063893f005",
                            10000705: "55d48462e7",
                            10000706: "5c3875edd3",
                            10000707: "8968e719ff",
                            10000708: "c517d35d9c",
                            10000709: "5a2afc0cd9",
                            10000710: "3e7a4e35f2",
                            10000711: "44912da274",
                            10000712: "e4ce60c3dd",
                            10000713: "f18696c094",
                            10000714: "017f28f8bb",
                            10000715: "55116c14c3",
                            10000716: "0f4395c2c4",
                            10000717: "f3450f1ac2",
                            10000718: "d1bc7ccfce",
                            10000719: "88d3e1a480",
                            10000720: "8eda205ac0",
                            10000721: "f384ae2fa0",
                            10000722: "4a3d1ff840",
                            10000723: "68fd2589c4",
                            10000724: "bae84a23bd",
                            10000725: "d0f5458a4e",
                            10000726: "6676d3d9a9",
                            10000727: "aae1e1dcd7",
                            10000728: "91ed3d5df9",
                            10000729: "8f0eb3e289",
                            10000730: "f1cea45a0b",
                            10000731: "9351a7c7b0",
                            10000732: "8ff05a8c34",
                            10000733: "03f2821968",
                            10000734: "7e89a633cb",
                            10000735: "5f368efb3a",
                            10000736: "5f368efb3a",
                            10000737: "5bb87220bd",
                            10000738: "6254881159",
                            10000739: "1e02537eb0",
                            10000740: "39270e0a06",
                            10000741: "012978eb27",
                            10000742: "d04b907379",
                            10000743: "7070b1a14e",
                            10000744: "6fc892f976",
                            10000745: "8669619b19",
                            10000746: "8b94534036",
                            10000747: "7a40512ab1",
                            10000748: "38d2e91fcf",
                            10000749: "257cd6d50c",
                            10000750: "3aa7ebea4f",
                            10000751: "7e89a633cb",
                            10000752: "a5abec86a6",
                            10000753: "abafd1fcfc",
                            10000754: "26fe7dbd61",
                            10000755: "66d80d09bc",
                            10000756: "08faf112c3",
                            10000757: "05fedf88fd",
                            10000758: "7680d4aba9",
                            10000759: "f634153f8a",
                            10000760: "46657a12ff",
                            10000761: "64531a69c2",
                            10000762: "904c2afaa9",
                            10000763: "a3a3991956",
                            10000764: "603cbf8d13",
                            10000765: "78b12b1080",
                            10000766: "211483a594",
                            10000767: "07a0d69300",
                            10000768: "183297f1ac",
                            10000769: "e1c66b1569",
                            10000770: "66b9851322",
                            10000771: "fea86fbb59",
                            10000772: "79a6fb7d55",
                            10000773: "17f646de43",
                            10000774: "468b27f1e6",
                            10000775: "dab0ea43a2",
                            10000776: "c3dc556a6d",
                            10000777: "5b4df291a5",
                            10000778: "17f4fcfd36",
                            10000779: "47f71b40c3",
                            10000780: "5c22398d33",
                            10000781: "be5e562f33",
                            10000782: "8b1de71fa0",
                            10000783: "fdad521149",
                            10000784: "d9dd4fd30f",
                            10000785: "78e513e696",
                            10000786: "5d44629314",
                            10000787: "a5ab24f97d",
                            10000788: "fb921aed0e",
                            10000789: "d7f4f9500b",
                            10000790: "8e63833564",
                            10000791: "e3f4d88317",
                            10000792: "533d5822ba",
                            10000793: "4b226ceeb1",
                            10000794: "a479c5c4c7",
                            10000795: "df7301c3d9",
                            10000796: "54fc95930e",
                            10000797: "0c10dbde30",
                            10000798: "b91b525b50",
                            10000799: "6a4d2d099e",
                            10000800: "0adbbddcf3",
                            10000801: "38c747aefd",
                            10000802: "f33b4f3f34",
                            10000803: "a2d275785b"
                        }, this.externalQueries = new Set([]), this.customProperties = e.customProperties, this.externalData = e.externalData, this.logger = e.logger, this.messages = e.messages, this.network = e.network, this.permutive = e.permutive, this.permutiveData = e.permutiveData, this.queryWorker = e.queryWorker, this.realtime = e.realtime, this.sessionManager = e.sessionManager, this.transitionDebounceMaxTime = e.transitionDebounceMaxTime, this.transitionDebounceTime = e.transitionDebounceTime, this.userId = e.userId, this.viewId = e.viewId
                    }
                    processMessage(e) {
                        return this.queryWorker.postMessage(e)
                    }
                }
                class ut extends((() => (0, i.zG)(ct, at))()) {
                    constructor(e) {
                        super(e), this.makeStateMaps()
                    }
                }
            },
            3253: (e, r, t) => {
                t.d(r, {
                    S: () => a
                });
                var n = t(655),
                    i = t(3735),
                    o = t(6013);
                class a {
                    constructor(e, r) {
                        var t;
                        this.db = e, this.options = r, this.hasChanged = !1, this.options = null !== (t = this.options) && void 0 !== t ? t : {}, this.options.timeout_seconds = this.options.timeout_seconds || 1800, this.options.session_data_key = this.options.session_data_key || "permutive-session", this.session_id = null
                    }
                    getSessionId() {
                        return this.session_id
                    }
                    sessionHasChanged() {
                        return this.hasChanged
                    }
                    decodeSessionData(e) {
                        return null === e ? null : "object" == typeof e && e.hasOwnProperty("session_id") && e.hasOwnProperty("last_updated") ? Object.assign(Object.assign({}, e), {
                            last_updated: new Date(e.last_updated)
                        }) : null
                    }
                    reset() {
                        return this.db.delete(this.options.session_data_key)
                    }
                    persistSessionData(e) {
                        return (0, n.mG)(this, void 0, void 0, (function*() {
                            const r = e.last_updated.toISOString();
                            yield this.db.put(Object.assign(Object.assign({}, e), {
                                last_updated: r
                            }), this.options.session_data_key)
                        }))
                    }
                    newSession(e) {
                        return this.hasChanged = !0, {
                            session_id: (0, o.k$)(),
                            last_updated: e
                        }
                    }
                    hasExpired(e, r) {
                        if (isNaN(r.getTime())) return !0;
                        return e > new Date(r.getTime() + 1e3 * this.options.timeout_seconds)
                    }
                    static initialise(e, r, t) {
                        return (0, n.mG)(this, void 0, void 0, (function*() {
                            const n = new a(r, t);
                            e.deleteCookie(n.options.session_data_key);
                            const o = new Date,
                                s = yield n.db.get(n.options.session_data_key).catch(i.gn), c = n.decodeSessionData(s), u = null === c || n.hasExpired(o, c.last_updated) ? n.newSession(o) : Object.assign(Object.assign({}, c), {
                                    last_updated: o
                                });
                            return yield n.persistSessionData(u), n.session_id = u.session_id, n
                        }))
                    }
                }
            },
            2747: (e, r, t) => {
                t.d(r, {
                    S: () => _
                });
                var n = t(3735),
                    i = t(787),
                    o = t(6013),
                    a = t(7545);
                class s {
                    constructor(e, r, t, n, i) {
                        this.config = e, this.namespace = r, this.logger = t, this.network = n, this.userId = i, this.permutiveData = {}, this.permutiveDataSize = 0, this.localStorageQueue = new Set, this.localStorageScheduler = new a.b(e.localStorageWriteDelay, e.localStorageWriteMaxDelay), this.debouncedFlush = this.localStorageScheduler.schedule(this.flushLocalStorageQueue.bind(this)), this.debouncedStorageKeys = new Set(e.localStorageDebouncedKeys), this.localStorageScheduler.scheduleForPageUnload(this.flushLocalStorageQueue.bind(this)), this.permutiveData = this.buildData()
                    }
                    reset() {
                        this.permutiveData = {}
                    }
                    getDataSize() {
                        return this.permutiveDataSize
                    }
                    getData(e) {
                        return this.permutiveData[e]
                    }
                    setData(e, r) {
                        this.permutiveData[e] = r, this.debouncedStorageKeys.has(e) ? (this.localStorageQueue.add(e), this.debouncedFlush()) : this.writeData(e)
                    }
                    flushLocalStorageQueue() {
                        for (let e of this.localStorageQueue) this.writeData(e);
                        this.localStorageQueue.clear()
                    }
                    buildData() {
                        return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.getDataChunk("misc")), this.getDataChunk("models")), this.getDataChunk("queries")), this.getDataChunk("tpd")), this.getDataChunk("enrichers"))
                    }
                    getDataChunk(e) {
                        const r = this.namespace.getNamespacedStorageKey(this.chunkKeyToStorageKey(e)),
                            t = window.localStorage.getItem(r),
                            n = (0, i.A)(t);
                        return null === n ? {} : (this.permutiveDataSize += 2 * t.length, n)
                    }
                    chunkKeyToStorageKey(e) {
                        switch (e) {
                            case "models":
                                return this.config.permutiveDataModelsKey;
                            case "queries":
                                return this.config.permutiveDataQueriesKey;
                            case "tpd":
                                return this.config.permutiveDataTPDKey;
                            case "enrichers":
                                return this.config.permutiveDataEnrichersKey;
                            case "misc":
                                return this.config.permutiveDataMiscKey;
                            default:
                                return (0, o.Fi)(e)
                        }
                    }
                    writeData(e) {
                        this.logger.debug(`Data Store: Writing ${e} to localStorage`);
                        const [r, t] = this.dataKeyToChunkInfo(e);
                        return (0, o.Z_)(this.network, this.userId, (() => window.localStorage.setItem(this.namespace.getNamespacedStorageKey(r), JSON.stringify(t))))()
                    }
                    dataKeyToChunkInfo(e) {
                        const r = e => (0, o.eu)(this.permutiveData, e);
                        switch (e) {
                            case "models_data":
                            case "models_last_updated":
                                return [this.chunkKeyToStorageKey("models"), r(c)];
                            case "query_states":
                            case "internal_query_states":
                            case "external_query_states":
                            case "state_offset":
                            case "event-source-id":
                                return [this.chunkKeyToStorageKey("queries"), r(u)];
                            case "third-party-data":
                            case "third-party-data-session-id":
                            case "third-party-data-usage":
                                return [this.chunkKeyToStorageKey("tpd"), r(l)];
                            case "enricher:geoip":
                                return [this.chunkKeyToStorageKey("enrichers"), r(p)];
                            case "identities":
                            case "amp_ready":
                            case "metricsEnabled":
                            case "addon:tradedesk":
                            case "addon:tracking_pixel":
                            case "addon:eyeota_pixel":
                            case "addon:twitter_pixel":
                            case "addon:pinterest_pixel":
                            case "addon:facebook_pixel_v2":
                            case "addon:appnexus":
                            case "addon:ddp":
                            case "addon:gigya":
                            case "addon:neustar_fabrick":
                            case "pubmatic":
                            case "lotame":
                                return [this.chunkKeyToStorageKey("misc"), r(d)];
                            default:
                                return (0, o.Fi)(e)
                        }
                    }
                }
                const c = ["models_data", "models_last_updated"],
                    u = ["query_states", "internal_query_states", "external_query_states", "state_offset", "event-source-id"],
                    l = ["third-party-data", "third-party-data-session-id", "third-party-data-usage"],
                    p = ["enricher:geoip"],
                    d = ["identities", "amp_ready", "metricsEnabled", "addon:tradedesk", "addon:tracking_pixel", "addon:eyeota_pixel", "addon:twitter_pixel", "addon:pinterest_pixel", "addon:facebook_pixel_v2", "addon:appnexus", "addon:ddp", "addon:gigya", "addon:neustar_fabrick", "pubmatic", "lotame"];
                var m = t(590);
                const g = e => {
                        const {
                            logger: r,
                            consentTracking: t
                        } = e, n = e => {
                            r.debug(`Data Store: Failed to write ${e} as consent is revoked`)
                        };
                        return e => class extends e {
                            constructor() {
                                super(...arguments), this.writeData = (0, m.vX)(super.writeData.bind(this), n, t.isRevoked)
                            }
                        }
                    },
                    _ = (e, r, t, i, o, a) => new((0, n.zG)(s, g({
                        consentTracking: a,
                        logger: t
                    })))(e, r, t, i, o)
            },
            1823: (e, r, t) => {
                t.d(r, {
                    $: () => i
                });
                var n = t(6013);
                class i {
                    constructor(e) {
                        this.permutiveData = e, this.eventSourceId = e.getData("event-source-id") || this.generateAndStoreEventSourceId()
                    }
                    get() {
                        return this.eventSourceId
                    }
                    generateAndSet() {
                        this.eventSourceId = this.generateAndStoreEventSourceId()
                    }
                    generateAndStoreEventSourceId() {
                        const e = (0, n.k$)();
                        return this.permutiveData.setData("event-source-id", e), e
                    }
                }
            },
            7738: (e, r, t) => {
                t.d(r, {
                    L: () => n
                });
                class n {
                    constructor(e) {
                        this.config = e
                    }
                    getNamespacedStorageKey(e) {
                        return `${this.config.stateNamespace}${e}`
                    }
                }
            },
            1728: (e, r, t) => {
                t.d(r, {
                    u: () => n
                });
                class n {
                    constructor(e, r) {
                        this.metrics = e, this.messages = r
                    }
                    isRealtime() {
                        return this._isRealtime
                    }
                    isReady() {
                        return this._isReady
                    }
                    setAsRealtime(e) {
                        this._isRealtime = !0, this.messages.emit("permutive:realtime"), this.metrics.trackTimeSinceInit("sdk_realtime_targeting_set_task_duration_seconds", {}), this.metrics.track({
                            name: "sdk_user_segments_count",
                            value: e,
                            labels: {}
                        })
                    }
                    setAsReady() {
                        this._isReady = !0, this.messages.emit("permutive:ready"), this.metrics.trackTimeSinceInit("sdk_initialisation_task_duration_seconds", {
                            sdk_version: "v19.30.0"
                        }), window.performance && window.performance.memory && (this.metrics.track({
                            name: "sdk_heap_memory_bytes_used",
                            value: window.performance.memory.usedJSHeapSize,
                            labels: {}
                        }), this.metrics.track({
                            name: "sdk_heap_memory_limit_fraction_used",
                            value: window.performance.memory.usedJSHeapSize / window.performance.memory.jsHeapSizeLimit,
                            labels: {}
                        }))
                    }
                }
            },
            2472: (e, r, t) => {
                t.d(r, {
                    a: () => a
                });
                var n = t(655),
                    i = t(3735),
                    o = t(356);
                class a {
                    constructor(e, r, t, n, i, o, a, s) {
                        this.config = e, this.localStorage = r, this.logger = t, this.queryManager = n, this.permutiveData = i, this.eventSourceId = o, this.cookies = a, this.externalData = s
                    }
                    reset() {
                        return (0, n.mG)(this, void 0, void 0, (function*() {
                            return this.logger.log("Resetting State"), (0, i.zG)(this.cookies.deleteCookie(this.config.cookieName), (e => this.externalData.removeExternalData(this.config.cookieName)), (e => (0, o.XP)({
                                _paols: !0,
                                _papns: !0,
                                _pcrdbs: !0,
                                _pcrprs: !0,
                                _pdfps: !0,
                                _pfwqp: !0,
                                _pnativo: !0,
                                _prps: !0,
                                _prubicons: !0,
                                _psegs: !0,
                                _psmart: !0,
                                "permutive-id": !0,
                                "permutive-loaded": !0,
                                _pclmc: !0,
                                "permutive-prebid-rtd": !0,
                                "permutive-events-cache": !0
                            }).forEach((e => this.externalData.removeExternalData(e)))), (e => this.queryManager.reset()), (e => this.permutiveData.reset()), (e => this.eventSourceId.generateAndSet()), (e => Promise.all([this.localStorage.delete(this.config.permutiveDataModelsKey), this.localStorage.delete(this.config.permutiveDataQueriesKey), this.localStorage.delete(this.config.permutiveDataTPDKey), this.localStorage.delete(this.config.permutiveDataEnrichersKey), this.localStorage.delete(this.config.permutiveDataMiscKey)])), i.Q1)
                        }))
                    }
                }
            },
            1714: (e, r, t) => {
                t.d(r, {
                    N: () => _,
                    e: () => m
                });
                var n = t(655),
                    i = t(2688),
                    o = t(7183),
                    a = t(8198),
                    s = t(3735),
                    c = t(477),
                    u = t.n(c);

                function l() {
                    return u()('/*! permutive-javascript-sdk v19.30.0 (web) (built 2022-10-05T11:55:53.945Z) */(()=>{"use strict";const n=()=>({kind:"null",value:null}),r=n=>({kind:"string",value:n}),t=n=>({kind:"number",value:n}),e=n=>({kind:"array",value:n}),u=n=>({kind:"object",value:n}),i=n=>n,o=()=>({kind:"bottom"}),c=n=>({kind:"inner",a:n}),a=n=>({kind:"top",error:n}),s=n=>({kind:"unbounded",group:n}),f=(n,r)=>({kind:"windowed",key:r,group:n}),l=(n,r,t)=>({kind:"countLimit",n:t,limit:r,group:n}),d=(n,r,t)=>({kind:"uniqueLimit",n:t,limit:r,group:n}),p=n=>({kind:"numberGroup",group:n}),m=n=>({kind:"stringGroup",group:n}),g=n=>({kind:"tuple",tuple:n}),v=n=>({state:n}),h=(n,r)=>({commands:n,payload:r});function k(n){return n}function w(n,r,t,e,u,i,o,c,a){switch(arguments.length){case 1:return n;case 2:return r(n);case 3:return t(r(n));case 4:return e(t(r(n)));case 5:return u(e(t(r(n))));case 6:return i(u(e(t(r(n)))));case 7:return o(i(u(e(t(r(n))))));case 8:return c(o(i(u(e(t(r(n)))))));case 9:return a(c(o(i(u(e(t(r(n))))))));default:for(var s=arguments[0],f=1;f<arguments.length;f++)s=arguments[f](s);return s}}var y=function(n){return{equals:function(r,t){return r===t||n(r,t)}}},b=function(n){return y((function(r,t){for(var e in n)if(!n[e].equals(r[e],t[e]))return!1;return!0}))},x=function(n){return function(r,t){return r===t||0===n(r,t)}},j=function(n){return{equals:x(n),compare:function(r,t){return r===t?0:n(r,t)}}},N=function(n){return function(r){return j((function(t,e){return r.compare(n(t),n(e))}))}},q=function(n){return function(r,t){return-1===n.compare(r,t)}},L=function(n){return function(r,t){return 1===n.compare(r,t)}},O=function(n){return function(r,t){return r===t||n.compare(r,t)>-1?r:t}};var M={equals:function(n,r){return n===r}},S={equals:M.equals,compare:function(n,r){return n<r?-1:n>r?1:0}};const G=(n,r)=>{switch(n.kind){case"bottom":return{kind:"bottom"};case"inner":return c(r(n.a));case"top":return a(n.error)}},E=n=>j(((r,t)=>{if("bottom"===r.kind&&"bottom"===t.kind)return 0;if("bottom"===r.kind)return-1;if("bottom"===t.kind)return 1;if("top"===r.kind&&"top"===t.kind)return S.compare(r.error,t.error);if("top"===r.kind)return 1;if("top"===t.kind)return-1;if("inner"===r.kind&&"inner"===t.kind)return n.compare(r.a,t.a);throw new Error("Non exhaustive match in extendedAlgebraOrd")}));var _=function(n,r){for(var t=0,e=r.length,u=n.length;t<e;t++,u++)n[u]=r[t];return n},A=function(n){return"Some"===n._tag},$={_tag:"None"},I=function(n){return{_tag:"Some",value:n}},C=function(n){return"Left"===n._tag},z=(Object.prototype.hasOwnProperty,function(n){return _([n[0]],n.slice(1))});var J=$,P=I;function R(n){return function(r){return n(r)?P(r):J}}var F=function(n){return"Left"===n._tag?J:P(n.right)},W=function(n){return{equals:function(r,t){return r===t||(H(r)?H(t):!H(t)&&n.equals(r.value,t.value))}}},B=function(n){return{equals:W(n).equals,compare:function(r,t){return r===t?0:D(r)?D(t)?n.compare(r.value,t.value):1:-1}}},T=function(n){return function(r){return H(r)?J:P(n(r.value))}},U=F,D=A,H=function(n){return"None"===n._tag},K=function(n){return function(r){return H(r)?n():r.value}};var Q;Q=void 0;var V=function(n){return n[0]},X=V;var Y=function(n,r){for(var t=0,e=r.length,u=n.length;t<e;t++,u++)n[u]=r[t];return n},Z=function(n){return n.length>0},nn=function(n,r){return n<0||n>=r.length},rn=function(n){return function(r){return Y([n],r)}},tn=rn,en=function(n){return function(r){return Y(Y([],r),[n])}},un=en,on=z,cn=function(n){return Z(n)?I(n):$},an=function(n){return function(r){for(var t=Math.max(0,Math.floor(r)),e=[n(0)],u=1;u<t;u++)e.push(n(u));return e}};var sn=on;var fn=function(n){return function(r){var t=Math.max(1,n);return t>=r.length?[sn(r),[]]:[w(r.slice(1,t),tn(dn(r))),r.slice(t)]}},ln=function(n){return y((function(r,t){return r.length===t.length&&r.every((function(r,e){return n.equals(r,t[e])}))}))},dn=X;var pn={equals:function(n,r){return n===r}},mn={equals:pn.equals,compare:function(n,r){return n<r?-1:n>r?1:0}};var gn=function(n,r){return function(t){for(var e=t.length,u=n,i=0;i<e;i++)u=r(i,u,t[i]);return u}};var vn=function(n){return 0===n.length},hn=Z,kn=tn,wn=un,yn=function(n,r){return n<=0?[]:an(r)(n)};var bn=nn,xn=function(n){return function(r){return bn(n,r)?qn(r):r.slice(0,n)}};var jn=function(n,r){for(var t=n.length,e=0;e<t&&r(n[e]);e++);return e};var Nn=function(n){return function(r){return n<=0||vn(r)?qn(r):n>=r.length?[]:r.slice(n,r.length)}};var qn=function(n){return n.slice()},Ln=function(n){return vn(n)?[]:n.slice().reverse()},On=function(n){return function(r){return r.length<=1?qn(r):r.slice().sort(n.compare)}},Mn=function(n,r,t){for(var e=[],u=Math.min(n.length,r.length),i=0;i<u;i++)e[i]=t(n[i],r[i]);return e};var Sn=function(n){return function(r){return n>=1&&hn(r)?fn(n)(r):vn(r)?[qn(r),[]]:[[],qn(r)]}};var Gn=function(n){return function(r){return w(r,function(n){return function(r){for(var t=[],e=0;e<r.length;e++)t.push.apply(t,n(e,r[e]));return t}}((function(r,t){return n(t)})))}},En=function(n){return function(r){for(var t=[],e=0;e<r.length;e++){var u=n(e,r[e]);A(u)&&t.push(u.value)}return t}},_n=function(n){return En((function(r,t){return n(t)}))},An=_n(k),$n=gn,In=function(n){var r=Cn(n);return function(n){return r((function(r,t){return n(t)}))}},Cn=function(n){return function(r){return $n(n.of([]),(function(t,e,u){return n.ap(n.map(e,(function(n){return function(r){return w(n,wn(r))}})),r(t,u))}))}},zn=function(n){return j((function(r,t){for(var e=r.length,u=t.length,i=Math.min(e,u),o=0;o<i;o++){var c=n.compare(r[o],t[o]);if(0!==c)return c}return mn.compare(e,u)}))},Jn=function(n){return{_tag:"Left",left:n}},Pn=function(n){return{_tag:"Right",right:n}},Rn=function(n,r){return w(n,Bn(r))},Fn=function(n,r){return w(n,Un(r))},Wn="Either",Bn=function(n){return function(r){return Hn(r)?r:Pn(n(r.right))}},Tn=Pn,Un=function(n){return function(r){return Hn(r)?r:Hn(n)?n:Pn(r.right(n.right))}},Dn={URI:Wn,map:Rn,ap:Fn,of:Tn},Hn=C;var Kn=function(n){return-1===n?1:1===n?-1:0};function Qn(n,r){return An(n.map(r))}function Vn(n,r,t,e){const u=(n,r)=>{if(0===n.length)return An(r.map((n=>P({1:n[1],2:t(J,P(n[2]))}))));if(0===r.length)return An(n.map((n=>P({1:n[1],2:t(P(n[2]),J)}))));if(n.length>0&&r.length>0&&q(e)(n[0][1],r[0][1])){const[e,...i]=n,o=e[1],c=e[2];return kn({1:o,2:t(P(c),J)})(u(i,r))}if(n.length>0&&r.length>0&&L(e)(n[0][1],r[0][1])){const[e,...i]=r,o=e[1],c=e[2];return kn({1:o,2:t(J,P(c))})(u(n,i))}if(n.length>0&&r.length>0){const[e,...i]=n,[o,...c]=r,a=e[1],s=e[2],f=o[2];return kn({1:a,2:t(P(s),P(f))})(u(i,c))}throw new Error("Non exhaustive match in mapOption2")},i=N((n=>n[1]))(e),o=(n=>{const r=Qn(n,(n=>D(n[2])?P({1:n[1],2:n[2].value}):J));return 0===r.length?J:P(r)})(u(On(i)([...n].map((n=>({1:n[0],2:n[1]})))),On(i)([...r].map((n=>({1:n[0],2:n[1]}))))));return T((n=>new Map(n.map((n=>[n[1],n[2]])))))(o)}function Xn(n,r,t,e){const u=N((n=>n[0]))(e),i=On(u)([...r]).reduceRight(((n,r)=>{if(Hn(n)){const e=t(r[1],n.left);return D(e)?Jn(e.value):Pn(r[0])}return n}),Jn(n));return U(i)}function Yn(n,r){return new Map([...n].map(r))}function Zn(n,r){return new Map([...n].filter(r))}function nr(n){return JSON.stringify(rr(n))}function rr(n){switch(n.kind){case"null":return ur.encode(n);case"string":return ir.encode(n);case"number":return or.encode(n);case"array":return cr.encode(n);case"object":return ar.encode(n)}}function tr(n){return null===n?ur.decode(n):"number"==typeof n?or.decode(n):"string"==typeof n?ir.decode(n):Array.isArray(n)?cr.decode(n):ar.decode(n)}const er=(n,r)=>Jn(`Failed to decode. Input was ${JSON.stringify(n)}. Codec type was ${r}`),ur={encode:n=>null,decode:n=>null===n?Pn({kind:"null",value:null}):er(n,"SimpleNull")},ir={encode:n=>n.value,decode:n=>"string"==typeof n?Pn(r(n)):er(n,"SimpleString")},or={encode:n=>n.value,decode:n=>"number"==typeof n?Pn(t(n)):er(n,"SimpleNumber")},cr={encode:n=>n.value.map(rr),decode:n=>{if(Array.isArray(n)){const r=In(Dn)(tr)(n);return Bn(e)(r)}return er(n,"SimpleArray")}},ar={encode:n=>{const r=[...n.value.entries()];return Object.assign({},...Array.from(r,(([n,r])=>({[n]:rr(r)}))))},decode:n=>{if(n&&n.constructor===Object){const r=In(Dn)((([n,r])=>w(tr(r),Bn((r=>function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n}(n,r))))))(Object.entries(n));return Bn((n=>u(new Map([...n]))))(r)}return er(n,"SimpleObject")}};function sr(n){return w(n,lr,T(nr),K((()=>"<encode error>")))}function fr(n){return T(hr)(function(n){switch(n.state.kind){case"top":return P(r(n.state.error));case"bottom":return J;case"inner":return lr(n.state.a)}}(n))}function lr(n){return function(n){switch(n.kind){case"numberGroup":case"stringGroup":return dr(n.group);case"tuple":return n.tuple.length>0}}(n.payload)?P(e(function(n,r){const t=T((n=>kn(n)(r)))(n);return K((()=>r))(t)}(T((n=>r(function(n){const r=n=>{switch(n){case"add":return"p";case"mul":return"m";case"max":return"v";case"min":return"n"}},t=n=>1===n[2]?r(n[1]):r(n[1])+JSON.stringify(n[2]);return n.map(t).join("")}(n))))(n.commands),function(n){const e=n=>{switch(n.kind){case"bottom":return{kind:"null",value:null};case"top":return r(n.error);case"inner":return t(n.a)}},i=n=>Qn([pr,mr,n=>w(n,vr,u,P)],(r=>r(n))),o=n=>Qn([pr,gr,n=>w(n,vr,(n=>Yn(n,(([n,r])=>[JSON.stringify(n),r]))),u,P)],(r=>r(n)));switch(n.kind){case"tuple":return n.tuple.map(e);case"stringGroup":return i(n.group);case"numberGroup":return o(n.group)}}(n.payload)))):J}function dr(n){switch(n.kind){case"unbounded":return n.group.size>0;case"windowed":return n.group.size>0||D(n.key);case"countLimit":case"uniqueLimit":return n.group.size>0||D(n.limit)}}function pr(n){switch(n.kind){case"unbounded":return J;case"windowed":return P(r("w"));case"countLimit":return P(r(1===n.n?"x":`x${n.n}`));case"uniqueLimit":return P(r(1===n.n?"u":`u${n.n}`))}}function mr(n){switch(n.kind){case"unbounded":return J;case"windowed":return P(r(D(n.key)?n.key.value:""));case"countLimit":case"uniqueLimit":return P(r(D(n.limit)?n.limit.value:""))}}function gr(n){switch(n.kind){case"unbounded":return J;case"windowed":return D(n.key)?P(t(n.key.value)):P({kind:"null",value:null});case"countLimit":case"uniqueLimit":return D(n.limit)?P(t(n.limit.value)):P({kind:"null",value:null})}}function vr(n){switch(n.kind){case"unbounded":case"windowed":case"countLimit":case"uniqueLimit":return n.group}}function hr(n){switch(n.kind){case"array":return 0===n.value.length?{kind:"null",value:null}:1===n.value.length?hr(n.value[0]):e(n.value.map(hr));case"object":return w(Zn(n.value,(([n,r])=>"null"!==r.kind)),(n=>Yn(n,(n=>[n[0],hr(n[1])]))),u);default:return n}}function kr(n){const r=n=>{if(0===n.length)return{kind:"bottom"};const r=(n=>{if(4!==n.length)return J;const[r,t,e,u]=n;if("string"===r.kind&&"string"===t.kind&&"object"===u.kind){const n=R((n=>wr(n[1].value)&&yr(n[2].value)))({1:r,2:t});return T((n=>({prim:n[1].value,grp:n[2].value,cutoff:e,m:u.value})))(n)}return J})(n);if(D(r)){const{prim:n,grp:t,cutoff:e,m:u}=r.value,i=br(e,u,xr(t));return"string"==typeof i?a(i):c(h(jr(n),i))}const t=(n=>{if(3!==n.length)return J;const[r,t,e]=n;if("string"===r.kind&&"object"===e.kind){const n=R((n=>yr(n.value)))(r);return T((n=>({grp:n.value,cutoff:t,m:e.value})))(n)}return J})(n);if(D(t)){const{grp:n,cutoff:r,m:e}=t.value,u=br(r,e,xr(n));return"string"==typeof u?a(u):c(h(J,u))}const e=(n=>{if(2!==n.length)return J;const[r,t]=n;if("string"===r.kind&&"object"===t.kind){const n=R((n=>wr(n.value)))(r);return T((n=>({prim:n.value,m:t.value})))(n)}return J})(n);if(D(e)){const{prim:n,m:r}=e.value;return c(h(jr(n),m(s(r))))}const u=(n=>{if(1!==n.length)return J;const[r]=n;return"object"===r.kind?P({m:r.value}):J})(n);if(D(u)){const{m:n}=u.value;return c(h(J,m(s(n))))}const i=(n=>{if(n.length<1)return J;const[r,...t]=n;if("string"===r.kind){const n=R((n=>wr(n.value)))(r);return T((n=>({prim:n.value,rest:t})))(n)}return J})(n);if(D(i)){const{prim:n,rest:r}=i.value;return c(h(jr(n),qr(r)))}return c(h(J,qr(n)))},t=n=>"array"===n.kind?Gn(t)(n.value):[n];return"null"===n.kind?v({kind:"bottom"}):v(r(t(n)))}function wr(n){const r=n.split("");if(!0==(0===r.length))return!1;{const[n,...t]=r;return-1!=="pmvn".indexOf(n)&&t.every((n=>-1!=="pmvn0123456789".indexOf(n)))}}function yr(n){const r=n.split("");switch(!0){case 0===r.length:return!1;case"w"===r[0]&&void 0===r[1]:return!0;default:{const[n,...t]=r;return-1!=="ux".indexOf(n)&&-1===t.map((n=>!isNaN(parseInt(n)))).indexOf(!1)}}}function br(n,r,t){switch(n.kind){case"string":return m(t({1:P(n.value),2:r}));case"number":case"null":return p(t({1:"null"===n.kind?J:P(n.value),2:Zn(Yn(r,(([n,r])=>[Number(n),r])),(n=>!isNaN(n[0])))}));default:return"{bad cutoff}"}}function xr(n){const r=n=>r=>d(r[2],r[1],n),t=n=>r=>l(r[2],r[1],n),e=n.split("");switch(!0){case"w"===e[0]&&void 0===e[1]:return n=>f(n[2],n[1]);case"u"===e[0]&&void 0===e[1]:return r(1);case"u"===e[0]&&void 0!==e[1]:return r(parseInt(e.slice(1).join("")));case"x"===e[0]&&void 0===e[1]:return t(1);case"x"===e[0]&&void 0!==e[1]:return t(parseInt(e.slice(1).join("")));default:throw new Error("This should never happen if you use isGroupCommand")}}function jr(n){return T(i)(cn(Nr(n,(n=>{const r=n.split("");if(0===r.length)return J;const[t,...e]=r,u=(n=>{switch(n){case"p":return P("add");case"m":return P("mul");case"v":return P("max");case"n":return P("min");default:return J}})(t);return T((n=>{const{init:r,rest:t}=(u=n=>{return"number"==typeof(r=parseInt(n))&&isFinite(r)&&Math.floor(r)===r;var r},function(n){var r=Sn(jn(n,u))(n);return{init:r[0],rest:r[1]}})(e);var u;return{1:{1:n,2:0===r.length?1:parseInt(r.join(""))},2:t.join("")}}))(u)}))))}function Nr(n,r){const t=r(n);return K((()=>[]))(T((n=>[n[1]].concat(Nr(n[2],r))))(t))}function qr(n){return g(n.map(Lr))}function Lr(n){switch(n.kind){case"number":return c(n.value);case"string":return a(n.value);case"null":return{kind:"bottom"};case"object":return a("{object}");case"array":return a("{array}")}}const Or={strategy:(n,r,t)=>e=>{if(H(t))return r;if("delta"===n&&H(r))return J;if(H(r))return t;if(D(r)&&D(t))return e(r.value,t.value);throw new Error("Non exhaustive match in combineCommand.strategy")},operation:(n,r,t,e,u,i)=>{const c=zn(E(i));if("append"===n&&"add"===r)return Mn(t,e,Ir("append",u.plus));if("append"===n&&"mul"===r)return Mn(t,e,Ir("append",u.times));if("append"===n&&"max"===r)return O(c)(t,e);if("join"===n&&"add"===r)return Mn(t,e,Ir("join",O(i)));if("join"===n&&"mul"===r)return Mn(t,e,Ir("join",O(i)));if("join"===n&&"max"===r)return O(c)(t,e);if("min"===r)return Or.operation(n,"max",t,e,u,function(n){return j(((r,t)=>Kn(n.compare(r,t))))}(i));if("delta"===n&&"max"===r)return L(c)(t,e)?t:e.map(o);if("delta"===n)return Mn(t,e,((n,r)=>L(E(i))(n,r)?n:{kind:"bottom"}));throw new Error("Non exhaustive match in combineCommand.operation")},extend:(n,r,t,e)=>{if("delta"===n&&"top"===t.kind&&"top"===e.kind)return L(S)(t.error,e.error)?a(t.error):{kind:"bottom"};if("delta"===n&&"bottom"===e.kind)return t;if("delta"===n&&"bottom"===t.kind)return{kind:"bottom"};if("top"===t.kind&&"top"===e.kind)return a(O(S)(t.error,e.error));if("top"===t.kind)return t;if("top"===e.kind)return e;if("inner"===t.kind&&"inner"===e.kind)return r(t.a,e.a);if("bottom"===t.kind)return e;if("bottom"===e.kind)return t;throw new Error("Non exhaustive match in extend")}},Mr={plus:(n,r)=>n+r,times:(n,r)=>n*r};function Sr(n,r,t,e){if("unbounded"===n.kind&&"unbounded"===r.kind){const u=n.group,i=r.group;return K(o)(T((n=>c(s(n))))(Vn(u,i,t,e)))}if("windowed"===n.kind&&"windowed"===r.kind){const u=n.key,i=n.group,a=r.key,s=r.group,l=O(B(e))(u,a);return K(o)(T((n=>c(f(n,l))))(Vn(i,s,t,e)))}if("countLimit"===n.kind&&"countLimit"===r.kind){const u=n.n,i=r.n;if(u===i){const i=n.limit,a=n.group,s=r.limit,f=r.group,d=O(B(e))(i,s);return K(o)(T((n=>c(l(n,d,u))))(Vn(a,f,t,e)))}return a("Non matching counts")}if("uniqueLimit"===n.kind&&"uniqueLimit"===r.kind){const u=n.n,i=r.n;if(u===i){const i=n.limit,a=n.group,s=r.limit,f=r.group,l=O(B(e))(i,s);return K(o)(T((n=>c(d(n,l,u))))(Vn(a,f,t,e)))}return a("Non matching counts")}return a("Non matching group types")}function Gr(n,r,t,e,u,i){const c=(n,r)=>({1:xn(n)(r).concat(yn(Math.max(0,n-r.length),o)),2:Nn(n)(r)}),a=(r,t,e)=>{if(0===r.length)return Or.operation(n,"max",t,e,u,i);if(r.length>0){const[o,...s]=r,f=c(o[2],t),l=f[1],d=f[2],p=c(o[2],e),m=p[1],g=p[2];return Or.operation(n,o[1],l,m,u,i).concat(a(s,d,g))}throw new Error("Non exhaustive match in recurse")};return Ln((s=n=>"bottom"===n.kind,function(n){return n.slice(jn(n,s))})(Ln(a(r,t,e))));var s}function Er(r,t,e){return K(n)(_r(r,J)(t,e))}function _r(n,r){const t=r=>(t,e)=>Or.strategy(n,t,e)(_r(n,r)),e=(e,u)=>{if(W(ln(b({1:M,2:pn}))).equals(e.commands,u.commands)){const i=((r,e,u)=>{if("stringGroup"===e.kind&&"stringGroup"===u.kind){const n=Sr(e.group,u.group,t(r),S);return G(n,(n=>m($r(n,S))))}if("numberGroup"===e.kind&&"numberGroup"===u.kind){const n=Sr(e.group,u.group,t(r),mn);return G(n,(n=>p($r(n,mn))))}if("tuple"===e.kind&&"tuple"===u.kind){const t=D(r)?r.value:[];return c(g(Gr(n,t,e.tuple,u.tuple,Mr,mn)))}throw new Error(`Non matching payload. Got ${e.kind} and ${u.kind}`)})(H(e.commands)?r:e.commands,e.payload,u.payload);return G(i,(n=>h(e.commands,n)))}throw new Error(`Non matching primitive strings. Got ${sr(e)} and ${sr(u)}`)};return(r,t)=>fr(v(Or.extend(n,e,kr(r).state,kr(t).state)))}function Ar(n,r,t){const e=T((r=>Zn(n,(([n,e])=>{return(u=t,function(n,r){return-1!==u.compare(n,r)})(n,r);var u}))))(r);return K((()=>n))(e)}function $r(n,r){switch(n.kind){case"unbounded":return n;case"windowed":return H(n.key)?n:f(Ar(n.group,n.key,r),n.key);case"countLimit":{const t=n.limit,e=n.n,u=n.group,i=(n,r)=>r<=1?J:P(r-1),o=Xn(e,u,i,r),c=O(B(r))(t,o);return l(Ar(u,c,r),c,e)}case"uniqueLimit":{const t=n.limit,e=n.n,u=n.group,i=(n,r)=>{if("object"===n.kind){const t=[...n.value.keys(),...r.keys()],u=new Set(t);return u.size>=e?J:P(u)}return J},o=Xn(new Set,u,i,r),c=O(B(r))(t,o);return d(Ar(u,c,r),c,e)}}}function Ir(n,r){return(t,e)=>Or.extend(n,((n,t)=>c(r(n,t))),t,e)}function Cr(n,r,t,e,u,i,o,c,a){switch(arguments.length){case 1:return n;case 2:return r(n);case 3:return t(r(n));case 4:return e(t(r(n)));case 5:return u(e(t(r(n))));case 6:return i(u(e(t(r(n)))));case 7:return o(i(u(e(t(r(n))))));case 8:return c(o(i(u(e(t(r(n)))))));case 9:return a(c(o(i(u(e(t(r(n))))))));default:for(var s=arguments[0],f=1;f<arguments.length;f++)s=arguments[f](s);return s}}var zr=function(n){return"Some"===n._tag},Jr={_tag:"None"},Pr=function(n){return{_tag:"Some",value:n}},Rr=function(n){return"Left"===n._tag},Fr=Object.prototype.hasOwnProperty,Wr=Rr,Br=function(n){return function(r){return Wr(r)?n(r.left):r.right}};var Tr=function(n){return function(r){return!n(r)}};var Ur=Jr,Dr=Pr;var Hr=zr;var Kr=function(n){for(var r in n)if(Fr.call(n,r))return!1;return!0};function Qr(n){return function(r){var t={},e=!1;for(var u in r)if(Fr.call(r,u)){var i=r[u];n(u,i)?t[u]=i:e=!0}return e?t:r}}var Vr=function(n){return Qr((function(r,t){return n(t)}))};var Xr=Kr;var Yr=Vr;Yr(Tr(Xr));Tr((function(n){return 0===n.length}));function Zr(n,r){const t=Object.keys(n),e=t.length,u={};for(let i=0;i<e;i++){const e=t[i],o=r(e,n[e]);Hr(o)&&(u[e]=o.value)}return u}function nt(n,r){const t=Cr((n=>Zr(n,((n,r)=>r.state?Dr({[r.checksum]:r.state}):Ur)))(n),tr,Br((n=>u(new Map)))),e=Cr(tr(r),Br((n=>u(new Map))));return Cr(function(n,r){return Er("delta",n,r)}(t,e),(n=>rr(n)))||{}}!function(n){const r=self;function t(n,t,e,u){function i(t){if("function"!=typeof r.postMessage)return n.ports[0].postMessage(t);r.postMessage(t)}if(!e)return i([t,null,u]);"undefined"!=typeof console&&"error"in console&&console.error("Worker caught an error:",e),i([t,e])}r.addEventListener("message",(function(r){if(e=r,!Array.isArray(e.data)||2!==e.data.length)return;var e;const u=r.data,[i,o]=u;if("function"==typeof n)return function(n,r,e,u){const i=function(n,r){try{return{res:n(r)}}catch(n){return{err:n}}}(r,u);return Boolean(null===(o=i)||void 0===o?void 0:o.err)?t(n,e,i.err):!(c=i.res)||"object"!=typeof c&&"function"!=typeof c||"function"!=typeof c.then?t(n,e,null,i.res):void i.res.then((function(r){t(n,e,null,r)}),(function(r){t(n,e,r)}));var o,c}(r,n,i,o);t(r,i,new Error("Please pass a function into register()."))}))}((function(n){switch(n.type){case"delta":return nt(n.stateMap,n.lastSentStateMapWithChecksum);case"noop":return{}}}))})();', "Worker", void 0, void 0)
                }
                var p = t(7545),
                    d = t(7121);

                function m() {
                    return (0, o.h)(new l)
                }
                const g = {
                    concat: (e, r) => Object.assign(Object.assign({}, e), r),
                    empty: {}
                };
                class _ {
                    constructor(e, r, t, n, i, o, a, s, c) {
                        this.api = e, this.network = r, this.sessionManager = t, this.permutiveData = n, this.queryManager = i, this.metrics = o, this.userId = a, this.eventSourceId = s, this.stateWorker = c, this.DEBOUNCE_TIME = 1e3, this.MAX_DEBOUNCE_TIME = 5e3, this.fetchUnseenState = !0, this.scheduler = new p.b(this.DEBOUNCE_TIME, this.MAX_DEBOUNCE_TIME), this.debouncedSyncIfNotEmpty = this.scheduler.scheduleAccumulated((e => this.syncIfNotEmpty.bind(this)("standard", e)), g), this.fetchUnseenState = !!f.includes("0cf17917-395b-4f25-91cc-db3bdd6044b0") || this.sessionManager.sessionHasChanged(), this.stateOffset = this.permutiveData.getData("state_offset") || 0, this.lastSentStateMapWithChecksum = (0, d.Yh)(this.permutiveData.getData("internal_query_states") || {}), this.stateWorker.postMessage({
                            type: "noop"
                        })
                    }
                    sync(e) {
                        return (0, s.zG)(this.debouncedSyncIfNotEmpty(e), (e => Promise.resolve()))
                    }
                    syncWithUnseen() {
                        return this.syncIfNotEmpty("unseen", {}).then(s.Q1)
                    }
                    syncIfNotEmpty(e, r) {
                        const [t, n, o] = "standard" === e ? [this.stateOffset, r, this.fetchUnseenState] : "unseen" === e ? [this.stateOffset, this.queryManager.stateMap.value, !0] : [0, {}, !0], a = this.metrics.startTimer("sdk_compute_delta_seconds", {}), c = {
                            type: "delta",
                            stateMap: n,
                            lastSentStateMapWithChecksum: this.lastSentStateMapWithChecksum
                        }, u = this.stateWorker.postMessage(c).then((e => (this.metrics.stopTimer("sdk_compute_delta_seconds", a), e))), l = e => {
                            this.fetchUnseenState = !1;
                            const r = (0, s.ls)((e => this.network.error(`Error sending state delta. Got ${(0,i.w)(e)}`, this.userId.get())), (e => ({})));
                            return this.api.state(this.metrics, this.userId.get(), this.eventSourceId.get(), e, t, o).then((e => function(e) {
                                return !!e
                            }(e) ? this.onStateResponse(e) : {})).then((r => (this.lastSentStateMapWithChecksum = e, r))).catch(r)
                        };
                        return u.then((e => o || Object.keys(e).length > 0 ? l(e) : Promise.resolve({})))
                    }
                    resetSync() {
                        return (0, n.mG)(this, void 0, void 0, (function*() {
                            this.reset(), yield this.syncIfNotEmpty("reset", {})
                        }))
                    }
                    reset() {
                        this.lastSentStateMapWithChecksum = {}
                    }
                    onStateResponse(e) {
                        const r = (0, a.Y3)((() => JSON.parse(e.state)), (e => this.network.error(`Failed to parse State API response, got ${e}`, this.userId.get()))),
                            t = e => e ? this.queryManager.updateExternalState(e) : (0, s.Q1)();
                        return (0, a.tO)(r) ? (0, s.zG)(e.state_offset, (e => this.stateOffset = e), (e => this.permutiveData.setData("state_offset", e)), (e => t(r.right)), (e => r.right)) : {}
                    }
                }
                const f = ["fe68d1f7-c9f4-45b3-8905-7cda73d3fd74"]
            },
            7258: (e, r, t) => {
                t.d(r, {
                    u: () => n
                });
                class n {
                    constructor(e, r, t, n, i) {
                        this.permutiveData = e, this.permutiveReset = r, this.userId = t, this.viewId = n, this.eventsCache = i
                    }
                    getPermutiveData(e) {
                        return this.permutiveData.getData(e)
                    }
                    setPermutiveData(e, r) {
                        return this.permutiveData.setData(e, r)
                    }
                    getStateSizeInBytes() {
                        return this.permutiveData.getDataSize() + this.eventsCache.getStateSizeInBytes()
                    }
                    reset() {
                        return this.permutiveReset.reset()
                    }
                }
            },
            7846: (e, r, t) => {
                t.d(r, {
                    M: () => a
                });
                var n = t(3735),
                    i = t(6567),
                    o = t(6013);
                class a {
                    constructor(e, r, t, n) {
                        this.config = e, this.clientContext = r, this.cookies = t, this.externalData = n, this.userId = this.getOrGenerateUserId(), this.set(this.userId)
                    }
                    isEqual(e) {
                        return this.userId === e
                    }
                    get() {
                        return this.userId
                    }
                    set(e) {
                        this.cookies.setCookie(this.config.cookieName, e, !0), this.externalData.setExternalData(this.config.cookieName, e), this.clientContext.updateContext(["user_id", e]), this.userId = e
                    }
                    getOrGenerateUserId() {
                        return (0, i.fS)((() => (0, i.fS)(o.k$)(this.getUserIdFromLocalStorage())))(this.getUserIdFromCookie())
                    }
                    getUserIdFromCookie() {
                        return this.getUserIdFromStorageIfValid("cookie")
                    }
                    getUserIdFromLocalStorage() {
                        return this.getUserIdFromStorageIfValid("localStorage")
                    }
                    getUserIdFromStorageIfValid(e) {
                        const r = (0, i.DT)(o.Gz);
                        return (0, n.zG)("cookie" === e ? this.cookies.getCookie(this.config.cookieName) : this.externalData.getExternalData(this.config.cookieName), i.ij, (0, i.tS)(r))
                    }
                }
            },
            6919: (e, r, t) => {
                t.d(r, {
                    W: () => i
                });
                var n = t(6013);
                class i {
                    constructor(e, r) {
                        this.clientContext = e, this.config = r, r.viewId && (0, n.Gz)(r.viewId) ? this.set(r.viewId) : this.generateAndSet()
                    }
                    get() {
                        return this.viewId
                    }
                    generateAndSet() {
                        return this.set((0, n.k$)())
                    }
                    set(e) {
                        return this.viewId = e, this.clientContext.updateContext(["view_id", this.viewId]), this.viewId
                    }
                }
            },
            2485: (e, r, t) => {
                t.d(r, {
                    _: () => i
                });
                var n = t(590);
                const i = e => {
                    const {
                        logger: r,
                        consentTracking: t
                    } = e, i = (e, t) => (r.debug(`DB: Failed to write ${String(t)} as consent is revoked`), Promise.resolve(t));
                    return e => class extends e {
                        constructor() {
                            super(...arguments), this.put = (0, n.vX)(super.put.bind(this), i, t.isRevoked)
                        }
                    }
                }
            },
            3195: (e, r, t) => {
                t.d(r, {
                    S: () => s
                });
                var n = t(3735),
                    i = t(2485),
                    o = t(787);
                class a {
                    constructor(e) {
                        this.namespace = e
                    }
                    put(e, r) {
                        return (0, n.zG)(this.namespace.getNamespacedStorageKey(String(r)), (r => window.localStorage.setItem(r, JSON.stringify(e))), (e => Promise.resolve(r)))
                    }
                    get(e) {
                        return (0, n.zG)(this.namespace.getNamespacedStorageKey(String(e)), (e => window.localStorage.getItem(e)), o.A, (e => Promise.resolve(e)))
                    }
                    delete(e) {
                        return (0, n.zG)(this.namespace.getNamespacedStorageKey(String(e)), (e => Promise.resolve(window.localStorage.removeItem(e))))
                    }
                    deleteStore() {
                        return Promise.resolve()
                    }
                }
                const s = (e, r, t) => new((0, n.zG)(a, (0, i._)({
                    logger: r,
                    consentTracking: t
                })))(e)
            },
            5595: (e, r, t) => {
                t.d(r, {
                    m: () => n
                });
                class n extends Error {
                    constructor(e) {
                        super(e), this.name = "StoreClosingError"
                    }
                }
            },
            1057: (e, r, t) => {
                t.d(r, {
                    Ec: () => a,
                    _8: () => o
                });
                var n = t(6567),
                    i = t(6013);
                const o = e => {
                        const r = e.__tcfapi,
                            t = {
                                type: "aborted"
                            },
                            o = ["tcloaded", "useractioncomplete"];
                        return r ? (0, i.a4)((() => s(r, "getTCData")), (() => s(r, "getTCData").then((e => "loaded" === (null == e ? void 0 : e.cmpStatus) && o.includes(null == e ? void 0 : e.eventStatus))))).then((0, n.g_)((() => t), (e => ({
                            type: "loaded",
                            data: e
                        })))) : Promise.resolve({
                            type: "missing"
                        })
                    },
                    a = e => e.gdprApplies ? (0, n.G)(e.vendor.consents) : n.YP,
                    s = (e, r) => new Promise((t => {
                        e(r, 2, (e => {
                            t(e)
                        }))
                    }))
            },
            3351: (e, r, t) => {
                t.d(r, {
                    D: () => n
                });
                const n = {
                    tradedesk: 21,
                    ddp: 755,
                    appnexus: 32,
                    pubmatic: 76,
                    neustar_fabrick: 468
                }
            },
            2520: (e, r, t) => {
                t.d(r, {
                    U: () => a
                });
                var n = t(655),
                    i = {
                        equals: function(e, r) {
                            return e === r
                        }
                    },
                    o = t(6013);
                class a {
                    constructor(e, r, t, n, i, o, a, s, c, u, l) {
                        this.network = e, this.logger = r, this.api = t, this.permutiveData = n, this.messages = i, this.sessionManager = o, this.metrics = a, this.permutiveIdentity = s, this.queryManager = c, this.permutive = u, this.userId = l, this.lastUserIdentitiesChecked = new Date, this.logger.log("Enabling tpd reporting"), this.messages.on("permutive:segments:updated", (() => {
                            this.reportUsage()
                        })), this.readThirdPartyCohorts(), this.lastCheckedSession = this.permutiveData.getData("third-party-data-session-id") || ""
                    }
                    readThirdPartyCohorts() {
                        this.userSegments = this.permutiveData.getData("third-party-data") || {}, this.segmentsPromise = Promise.resolve(this.userSegments)
                    }
                    shouldUseSegmentsInMemory() {
                        const e = this.lastUserIdentitiesChecked >= this.permutiveIdentity.getIdentitiesLastModified;
                        return this.lastUserIdentitiesChecked = new Date, e && this.lastCheckedSession === this.sessionManager.getSessionId() && !!this.segmentsPromise
                    }
                    segments() {
                        if (this.shouldUseSegmentsInMemory()) return this.segmentsPromise;
                        const e = this.sessionManager.getSessionId(),
                            r = (0, o.b2)();
                        this.lastCheckedSession = e;
                        const t = this.metrics.startTimer("sdk_get_third_party_data_task_duration_seconds", {}),
                            n = Object.assign(Object.assign({}, this.permutiveIdentity.getCustomerDefinedIdentitiesMap()), this.permutiveIdentity.getTPDIdentitiesMap());
                        if (Object.keys(n).length > 0) {
                            const e = this.permutiveIdentity.getPrioritizedIdentities(n),
                                t = s(e);
                            this.api.tpd(this.metrics, t).then((e => {
                                this.userSegments = c(e), r.resolve(this.userSegments)
                            })).catch((e => {
                                this.network.error(`Third Party Data segments retrieval failed with reason: ${e}`, this.userId.get()), r.resolve({})
                            }))
                        } else r.resolve({});
                        const a = r.promise.then((e => this.userSegments));
                        return a.then((r => {
                            this.permutiveData.setData("third-party-data-session-id", e), this.metrics.stopTimer("sdk_get_third_party_data_task_duration_seconds", t);
                            const n = this.permutiveData.getData("third-party-data") || {},
                                a = (0, o.rB)((0, o.rB)(i)),
                                s = (0, o.rB)(i);
                            if (0 === Object.keys(n).length || !a.equals(n, r)) {
                                this.permutiveData.setData("third-party-data", this.userSegments);
                                const e = Object.entries(r || {});
                                (n ? e.filter((([e, r]) => !s.equals(n[e] || {}, r))) : e).forEach((([e, r]) => this.fireSegments(e, Object.keys(r))))
                            }
                        })), this.segmentsPromise = a
                    }
                    reset() {
                        this.segmentsPromise = null, this.userSegments = {}
                    }
                    fireSegments(e, r) {
                        this.permutive.track("ThirdPartySegments", {
                            data_provider: e,
                            segments: r
                        })
                    }
                    reportUsage() {
                        const e = u(this.queryManager.stateMap.value),
                            r = (0, o.vp)(JSON.stringify(e));
                        if (this.permutiveData.getData("third-party-data-usage") !== r && Object.keys(e).length > 0) {
                            this.permutiveData.setData("third-party-data-usage", r);
                            const t = {
                                user_id: this.userId.get(),
                                time: new Date,
                                tpd_segments: e
                            };
                            this.api.tpdUsage(this.metrics, t)
                        }
                    }
                }
                const s = e => (null == e ? void 0 : e.reduce(((e, r) => (e[r.tag] = r.id, e)), {})) || {},
                    c = e => Object.entries(e).reduce(((e, [r, t]) => Object.assign(Object.assign({}, e), {
                        [r]: (0, o.j5)(t)
                    })), {}),
                    u = e => {
                        const r = {},
                            t = Object.keys(e),
                            i = t.length;
                        for (let o = 0; o < i; o++) {
                            const i = t[o],
                                a = e[i],
                                {
                                    activations: s
                                } = a;
                            (0, n._T)(a, ["activations"]);
                            s && Object.keys(s).length > 0 && (r[i] = s)
                        }
                        return r
                    }
            },
            2223: (e, r, t) => {
                t.d(r, {
                    C: () => c
                });
                var n = t(655),
                    i = t(9320),
                    o = t(3735);
                const a = (s = [
                    [{
                        name: "dfp",
                        import: Promise.resolve().then(t.bind(t, 242))
                    }],
                    [{
                        name: "appnexus_adserver",
                        import: Promise.resolve().then(t.bind(t, 6226))
                    }],
                    [],
                    [],
                    [],
                    [{
                        name: "appnexus",
                        import: Promise.resolve().then(t.bind(t, 5542))
                    }],
                    [{
                        name: "brightcove",
                        import: Promise.resolve().then(t.bind(t, 1306))
                    }],
                    [{
                        name: "clean_room",
                        import: Promise.resolve().then(t.bind(t, 5607))
                    }],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [{
                        name: "local_storage",
                        import: Promise.resolve().then(t.bind(t, 1059))
                    }],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [{
                        name: "rubicon_ssp",
                        import: Promise.resolve().then(t.bind(t, 2404))
                    }],
                    [],
                    [],
                    [],
                    [],
                    [{
                        name: "web",
                        import: Promise.resolve().then(t.bind(t, 8482))
                    }],
                    [],
                    []
                ], (0, o.zG)((0, i.xH)(s), (0, i.u4)({}, ((e, r) => Object.assign(Object.assign({}, e), {
                    [r.name]: r.import
                })))));
                var s;
                const c = ({
                    _internals: e,
                    logger: r,
                    network: t,
                    permutiveMethods: i,
                    q: o,
                    clientContext: s
                }) => {
                    const c = Object.entries(a).map((([a, c]) => (0, n.mG)(void 0, void 0, void 0, (function*() {
                        return r.log(`Loading addon ${a}`), (yield c).load(o, i, e, t, s)
                    }))));
                    return Promise.all(c)
                }
            },
            6226: (e, r, t) => {
                t.r(r), t.d(r, {
                    APPNEXUS_SEGMENTS_STORAGE_KEY: () => u,
                    AppNexusAdServerAddon: () => m,
                    load: () => d
                });
                var n = t(6013),
                    i = t(3735),
                    o = t(6323),
                    a = t(2514),
                    s = t(6567),
                    c = t(787);
                const u = "_papns",
                    l = function() {
                        try {
                            return window.apntag.getTag()
                        } catch (e) {
                            return {}
                        }
                    },
                    p = function(e) {
                        try {
                            return window.apntag.getTag(e)
                        } catch (e) {
                            return
                        }
                    },
                    d = (e, r, t) => {
                        if (e.push({
                                functionName: "addon",
                                arguments: ["appnexus_adserver", {}]
                            }), void 0 !== window.apntag && window.apntag.anq && window.apntag.anq.push) {
                            r.ready(t.makeSafe((() => {
                                let e = !1;
                                const r = l();
                                Object.keys(r).forEach((t => {
                                    r[t].displayed && (e = !0)
                                }));
                                const n = e ? "sdk_targeting_realtime_fail_count" : "sdk_targeting_realtime_success_count";
                                t.metrics.track({
                                    name: n,
                                    value: 1,
                                    labels: {
                                        target: "appnexus"
                                    }
                                })
                            })), "realtime");
                            const e = function(e) {
                                    return (Array.isArray(e) ? e : [e]).map((e => e.toString()))
                                },
                                n = function(r, t) {
                                    const n = [];
                                    return (null == t ? void 0 : t.keywords) && Object.keys(t.keywords).forEach((r => {
                                        n.push({
                                            key: r,
                                            value: e(t.keywords[r])
                                        })
                                    })), {
                                        slot: {
                                            target_id: r.targetId,
                                            tag_id: r.tagId,
                                            height: r.height,
                                            width: r.width,
                                            targeting: n
                                        },
                                        ad: {
                                            type: r.adType,
                                            source: r.source,
                                            creative_id: r.creativeId,
                                            auction_id: r.auctionId,
                                            buyer_member_id: r.buyerMemberId,
                                            brand_category_id: r.brandCategoryId,
                                            media_type_id: r.mediaTypeId,
                                            media_sub_type_id: r.mediaSubType
                                        }
                                    }
                                },
                                i = function(e, t) {
                                    const n = (null == e ? void 0 : e.utiframeId) || (null == e ? void 0 : e.targetId);
                                    if (n) {
                                        let e = !1;
                                        window.addEventListener("blur", (function() {
                                            e && r.track("AppNexusAdClick", t)
                                        })), document.getElementById(n).addEventListener("mouseover", (function() {
                                            e = !0
                                        })), document.getElementById(n).addEventListener("mouseout", (function() {
                                            e = !1
                                        }))
                                    }
                                };
                            window.__permutive = window.__permutive || {}, window.__permutive.appnexusEvents = window.__permutive.appnexusEvents || [], window.__permutive.appnexusEvents.forEach((function(e) {
                                if ("adLoaded" == e.eventType) {
                                    const t = e.arg,
                                        o = p(t.targetId),
                                        a = n(t, o);
                                    r.track("AppNexusAdImpression", a), i(o, a)
                                }
                            })), window.apntag.anq.push((function() {
                                window.apntag.onEvent("adLoaded", (e => {
                                    const t = p(e.targetId),
                                        o = n(e, t);
                                    r.track("AppNexusAdImpression", o), i(t, o)
                                }))
                            }))
                        }
                    };
                class m {
                    constructor(e) {
                        this.options = e, this.logger = e.logger, this.queryManager = e.queryManager, this.messages = e.messages, this.userId = e.userId, this.network = e.network, this.activationManager = e.activationManager, this.externalData = e.externalData, this.segments = this.initSegments(e.externalData), this.eligibleSegments = {};
                        const r = this.activationManager.getSpecializedActivations("appnexus_adserver");
                        for (let e = 0; e < r.length; e++) {
                            const t = r[e];
                            this.eligibleSegments[t] = 1
                        }
                        const t = this.queryManager.userSegments.getAllAsList();
                        if (this.updateSegments(this.filterSegments(t)), window.apntag && window.apntag.anq && window.apntag.anq.push) {
                            const e = this;
                            window.apntag.anq.push((function() {
                                const r = window.apntag.defineTag;
                                window.apntag.defineTag = function(t) {
                                    r(t), (0, n.Z_)(e.network, e.userId, (function() {
                                        if (t.targetId) {
                                            const r = e.queryManager.userSegments.getAllAsList();
                                            e.updateSegments(e.filterSegments(r), t.targetId)
                                        }
                                    }))()
                                }
                            }))
                        }
                        this.messages.on("permutive:segments:updated", (0, n.Z_)(this.network, this.userId, (() => {
                            const e = this.queryManager.userSegments.getAllAsList();
                            this.updateIfNecessary(e)
                        }))), this.messages.on("permutive:reset", (0, n.Z_)(this.network, this.userId, (() => {
                            this.logger.debug("[appnexus] received 'permutive:segments:reset' event"), e.externalData.removeExternalData(u), e.cookies.deleteCookie(u), this.segments.live = []
                        }))), this.messages.on("permutive:classificationmodels:db:updated", (0, n.Z_)(this.network, this.userId, (e => {
                            this.logger.debug("[appnexus] received 'permutive:classificationmodels:db:updated' event"), this.segments.classification = e.xandrSsp, this.updateSegments(this.segments.live)
                        })))
                    }
                    get liveSegments() {
                        return this.segments.live
                    }
                    getCachedSegments(e, r) {
                        return (0, i.zG)(e.getExternalData(r), c.A, s.ij)
                    }
                    getCachedClmSegments(e) {
                        const r = s.fS((() => ({
                            gam: [],
                            xandrSsp: []
                        })));
                        return (0, i.zG)(this.getCachedSegments(e, o.R), (0, s.UI)(a.V), r)
                    }
                    getCachedAppnexusSegments(e) {
                        return (0, i.zG)(this.getCachedSegments(e, u), s.fS((() => [])))
                    }
                    initSegments(e) {
                        return {
                            classification: this.getCachedClmSegments(e).xandrSsp,
                            live: this.getCachedAppnexusSegments(e)
                        }
                    }
                    cacheAppnexusSegments(e) {
                        const r = JSON.stringify(e);
                        this.externalData.setExternalData(u, r)
                    }
                    updateIfNecessary(e) {
                        const r = this.filterSegments(e);
                        (0, n.cO)(r, this.segments.live) || this.updateSegments(r)
                    }
                    updateSegments(e, r) {
                        window.apntag && window.apntag.anq && window.apntag.anq.push && window.apntag.anq.push((() => {
                            const t = {
                                permutive: [...e, ...this.segments.classification, "rts"]
                            };
                            r ? window.apntag.setKeywords(r, t, {
                                overrideKeyValue: !0
                            }) : Object.keys(l()).forEach((e => window.apntag.setKeywords(e, t, {
                                overrideKeyValue: !0
                            })))
                        })), this.cacheAppnexusSegments(e), this.segments.live = e, this.logger.debug("Appnexus live segments updated to", this.segments.live)
                    }
                    filterSegments(e) {
                        return e.filter((e => e in this.eligibleSegments))
                    }
                }
            },
            1306: (e, r, t) => {
                t.r(r), t.d(r, {
                    load: () => o
                });
                var n = t(655),
                    i = t(2236);
                const o = (e, r, t, o, a) => {
                    (function() {
                        function e(e, r, t) {
                            let n = 0;
                            const i = setInterval((function() {
                                (e() || n === t) && clearInterval(i), n++
                            }), r)
                        }

                        function r() {
                            return (0, n.mG)(this, void 0, void 0, (function*() {
                                return {
                                    userId: t.state.userId.get(),
                                    visitId: t.state.viewId.get(),
                                    sessionId: t.sessionManager.getSessionId(),
                                    client: yield a.getClient(), segments: t.queryManager.userSegments.getAllAsList()
                                }
                            }))
                        }

                        function o(e) {
                            return (0, n.mG)(this, void 0, void 0, (function*() {
                                const i = yield r();
                                e.postMessage({
                                    type: "Init",
                                    data: i
                                }, "*"), e.postMessage({
                                    type: "permutive:init",
                                    data: i
                                }, "*"), t.messages.on("permutive:segments:updated", t.makeSafe((function() {
                                    return (0, n.mG)(this, void 0, void 0, (function*() {
                                        e.postMessage({
                                            type: "permutive:update",
                                            data: yield r()
                                        }, "*")
                                    }))
                                })))
                            }))
                        }
                        const s = function() {
                                return "undefined" != typeof videojs && (Object.values(videojs.players).filter((e => !!e)).forEach((e => e.on("loadedmetadata", (() => o(window))))), o(window), !0)
                            },
                            c = function() {
                                ! function() {
                                    const e = document.getElementsByTagName("iframe");
                                    if (0 === e.length) return;
                                    [].slice.call(e).forEach((e => {
                                        "amp-brightcove" !== e.parentNode.nodeName.toLowerCase() && -1 !== e.src.indexOf("brightcove") && (o(e.contentWindow), e.addEventListener("load", (() => {
                                            o(e.contentWindow)
                                        })))
                                    }))
                                }(),
                                function() {
                                    const r = document.getElementsByTagName("amp-brightcove");
                                    if (0 === r.length) return;
                                    [].slice.call(r).forEach((r => {
                                        e((function() {
                                            const e = r.getElementsByTagName("iframe");
                                            return e.length > 0 && (o(e[0].contentWindow), !0)
                                        }), 500, 10)
                                    }))
                                }(), "complete" === document.readyState ? s() : window.addEventListener("load", (function() {
                                    e(s, 500, 10)
                                }), !1)
                            },
                            u = function() {
                                var e, r;
                                (null === (r = null === (e = t.state) || void 0 === e ? void 0 : e.userId) || void 0 === r ? void 0 : r.get()) ? c(): t.messages.on("permutive:user:ready", c)
                            };
                        (0, i.p)((() => t.extMessages.listen("brightcove-init", u)), "permutive:internals:extMessages:ready", t.messages).catch((e => t.network.error(`Error on brightcove-init. Got ${e.message}`))), u()
                    })()
                }
            },
            957: (e, r, t) => {
                t.r(r), t.d(r, {
                    createAddon: () => I,
                    getCachedClassificationModelSegments: () => w,
                    getCachedCleanRoomSegments: () => q,
                    getCachedDFPSegments: () => b
                });
                var n = t(2688),
                    i = t(9320),
                    o = t(3735),
                    a = t(6567),
                    s = t(2751),
                    c = t(6323),
                    u = t(8863),
                    l = t(5506),
                    p = t(6013),
                    d = t(2514);
                const m = "_pdfps";
                t(9678);
                let g = !1;
                let _;
                const f = e => {
                        const {
                            logger: r
                        } = e;
                        !0 !== g && googletag.pubadsReady && (null != _ || (_ = ({
                            slot: t
                        }) => {
                            const {
                                getContentUrl: n
                            } = t;
                            if (!n || "function" != typeof n) return;
                            (0, o.zG)(n(), (0, s.pn)("&trunc=1")) && (r.debug("DFP content URL has been truncated!"), (({
                                metrics: e,
                                logger: r
                            }) => {
                                g || (e.track({
                                    name: "sdk_targeting_size_limit_exceeded_count",
                                    value: 1,
                                    labels: {
                                        target: "dfp"
                                    }
                                }), g = !0, r.debug("DFP has exceeded targeting limit"))
                            })(e), googletag.pubads().removeEventListener("slotRenderEnded", _), _ = null)
                        }), googletag.pubads().addEventListener("slotRenderEnded", _))
                    },
                    h = {
                        liveSegments: [],
                        classificationModelSegments: [],
                        cleanRoomSegments: [],
                        eligibleSegments: {}
                    },
                    v = {
                        segments: h,
                        getGAMKeyValues: () => ({
                            permutive: v.segments.liveSegments.join(",")
                        })
                    },
                    w = e => {
                        const r = a.fS((() => ({
                            gam: [],
                            xandrSsp: []
                        })));
                        return (0, o.zG)(e.getExternalJsonData(c.R), a.ij, (0, a.UI)(d.V), r)
                    },
                    q = e => {
                        const r = e.getExternalJsonData(u.P) || [],
                            t = e.getExternalJsonData(u.l) || [];
                        return (0, i.G0)(s.Eq)(r)(t)
                    },
                    b = e => e.getExternalJsonData(m) || [],
                    y = (e, r) => e.filter((e => e in r)).map((e => r[e])),
                    E = (e, r) => {
                        const {
                            logger: t,
                            externalData: o,
                            network: a
                        } = e;
                        let s = r.map(String).concat(h.classificationModelSegments).concat(h.cleanRoomSegments);
                        if (0 === s.length) return t.debug("DFP has no targeting values, skipping update"), h.liveSegments;
                        t.debug("DFP is updating with targeting values", s), ((e, r, t) => {
                            const {
                                logger: n
                            } = e;
                            window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], f(e), window.googletag.cmd.push((() => {
                                const {
                                    getTargeting: e,
                                    setTargeting: o
                                } = googletag.pubads(), a = e("permutive") || [], s = Object.values(r.eligibleSegments).map(String).concat(r.classificationModelSegments).concat(r.cleanRoomSegments).concat("rts"), c = (0, i.uK)((e => s.includes(e))), {
                                    left: u
                                } = c(a), l = t.concat(u).concat("rts");
                                n.debug("DFP setting GPT targeting to", l), o("permutive", l)
                            }))
                        })(e, h, s);
                        try {
                            o.setExternalJsonData(m, s)
                        } catch (e) {
                            const r = (0, n.w)(e),
                                i = "DFP failed to set data. Got:";
                            t.error(i, r), a.error(`${i} ${r.message}`)
                        }
                        return (({
                            api: e,
                            logger: r
                        }, t) => {
                            (0, l.$S)("sync_segments_cookie", !1) ? (r.debug("DFP syncing segment cookie _pdfps"), e.segmentSync({
                                key: m,
                                value: t
                            })) : r.debug("DFP sync segments cookie not enabled, skipping sync")
                        })(e, JSON.stringify(s)), t.debug("DFP live segments updated to", r), r
                    },
                    k = e => {
                        const {
                            logger: r,
                            messages: t,
                            queryManager: n,
                            externalData: i,
                            cookies: o,
                            network: a,
                            userId: s
                        } = e;
                        t.on("permutive:segments:updated", (0, p.Z_)(a, s, (() => {
                            r.debug("DFP received 'permutive:segments:updated' event");
                            const t = n.userSegments.getAllAsList();
                            h.liveSegments = ((e, r) => {
                                const {
                                    logger: t
                                } = e, n = y(r, h.eligibleSegments);
                                return (0, p.cO)(n, h.liveSegments) ? (t.debug("DFP new segments are equal to live segments, skipping update"), h.liveSegments) : E(e, n)
                            })(e, t)
                        }))), t.on("permutive:classificationmodels:db:updated", (0, p.Z_)(a, s, (t => {
                            r.debug("DFP received 'permutive:classificationmodels:db:updated' event"), h.classificationModelSegments = t.gam, h.liveSegments = E(e, h.liveSegments)
                        }))), t.on("permutive:cleanroom:db:updated", (0, p.Z_)(a, s, (t => {
                            r.debug("DFP received 'permutive:cleanroom:db:updated' event"), h.cleanRoomSegments = t, h.liveSegments = E(e, h.liveSegments)
                        }))), t.on("permutive:reset", (0, p.Z_)(a, s, (() => {
                            r.debug("DFP received 'permutive:reset' event"), i.removeExternalData(m), o.deleteCookie(m), h.liveSegments = []
                        })))
                    },
                    I = e => {
                        const {
                            logger: r,
                            activationManager: t,
                            queryManager: n,
                            messages: i,
                            externalData: o
                        } = e;
                        h.classificationModelSegments = w(o).gam, h.cleanRoomSegments = q(o), h.eligibleSegments = (e => {
                            const r = e.getSpecializedActivations("dfp"),
                                t = {};
                            for (const e of r.dfp) t[e] = e;
                            for (const e of Object.keys(r.dfp_legacy)) {
                                const n = Number(e);
                                t[n] = r.dfp_legacy[n]
                            }
                            return t
                        })(t), h.liveSegments = b(o), r.debug("DFP initialised with segments", h);
                        const a = n.userSegments.getAllAsList(),
                            s = y(a, h.eligibleSegments);
                        return h.liveSegments = E(e, s), k(e), i.emit("permutive:dfp:ready"), v
                    }
            },
            242: (e, r, t) => {
                t.r(r), t.d(r, {
                    load: () => s
                });
                var n = t(64),
                    i = t(6013),
                    o = t(957);
                const a = {},
                    s = (e, r, t) => {
                        e.push({
                            functionName: "addon",
                            arguments: ["dfp", {}]
                        });
                        window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push((() => c(r, t)))
                    },
                    c = (e, r) => {
                        e.ready(r.makeSafe((() => h(r.metrics))), "realtime"), v(r.externalData), b(r.userId, r.viewId), m(e), googletag.cmd.push((() => {
                            g(e), _(e)
                        })), window.addEventListener("message", l(e), !1)
                    },
                    u = ({
                        advertiserId: e,
                        campaignId: r,
                        lineItemId: t,
                        creativeId: n
                    }) => ({
                        advertiser_id: (0, i.ke)(e),
                        campaign_id: (0, i.ke)(r),
                        line_item_id: (0, i.ke)(t),
                        creative_id: (0, i.ke)(n)
                    }),
                    l = e => r => {
                        var t;
                        try {
                            const n = JSON.parse(r.data);
                            if (!n.permutive_type || "google_ad_click" !== n.permutive_type) return;
                            const {
                                ad_unit_path: i,
                                creative_id: o,
                                advertiser_id: s,
                                order_id: c,
                                line_item_id: l
                            } = null !== (t = null == n ? void 0 : n.data) && void 0 !== t ? t : {}, d = u({
                                lineItemId: l,
                                advertiserId: s,
                                campaignId: c,
                                creativeId: o
                            });
                            let m;
                            Object.keys(a).some((e => {
                                const {
                                    slot: r,
                                    creative_id: t
                                } = a[e];
                                if ((null == r ? void 0 : r.ad_unit_path) === i && t === d.creative_id) return m = a[e], !0
                            })), m = null != m ? m : Object.assign(Object.assign({}, d), {
                                is_empty: !1
                            }), p(e, m)
                        } catch (e) {}
                    },
                    p = (e, r) => {
                        n.PH && r && e.track("SlotClicked", r)
                    },
                    d = (e, r, t) => {
                        a[r] = t, f(e, t), q(e, r)
                    },
                    m = e => {
                        const r = googletag.pubadsReady && googletag.pubads().getSlots();
                        r && r.forEach((r => {
                            const t = r.getResponseInformation();
                            if (!t) return;
                            const n = Object.assign(Object.assign({}, u(t)), {
                                    is_empty: !1,
                                    service_name: "publisher_ads",
                                    slot: w(r)
                                }),
                                i = r.getSlotElementId();
                            d(e, i, n)
                        }))
                    },
                    g = e => {
                        googletag.pubads().addEventListener("slotRenderEnded", (r => {
                            const t = Object.assign(Object.assign({}, u(r)), {
                                is_empty: r.isEmpty,
                                service_name: r.serviceName,
                                slot: w(r.slot)
                            });
                            if (r.size) {
                                const [e, n] = r.size;
                                "number" == typeof e && "number" == typeof n && (t.width = e, t.height = n)
                            }
                            const n = r.slot.getSlotElementId();
                            d(e, n, t)
                        }))
                    },
                    _ = e => {
                        n.EW && googletag.pubads().addEventListener("impressionViewable", (({
                            slot: r,
                            serviceName: t
                        }) => {
                            const n = r.getResponseInformation();
                            if (!n) return;
                            const i = Object.assign(Object.assign({}, u(n)), {
                                service_name: t,
                                slot: w(r)
                            });
                            e.track("SlotViewable", i)
                        }))
                    },
                    f = (e, r) => {
                        if (!n.CL) return;
                        var t;
                        t = Object.assign(Object.assign({}, r), {
                            rendered_timestamp: Date.now()
                        }), e.track("SlotRendered", t)
                    },
                    h = e => {
                        let r = 0;
                        const t = googletag.pubadsReady && googletag.pubads().getSlots();
                        t && t.forEach((e => e.getResponseInformation() && r++));
                        const n = 0 === r ? "sdk_targeting_realtime_success_count" : "sdk_targeting_realtime_fail_count";
                        e.track({
                            name: n,
                            value: 1,
                            labels: {
                                target: "dfp"
                            }
                        })
                    },
                    v = e => {
                        const r = (0, o.getCachedDFPSegments)(e);
                        googletag.cmd.push((() => {
                            const {
                                getTargeting: e,
                                setTargeting: t
                            } = googletag.pubads(), n = e("permutive") || [];
                            t("permutive", [...new Set([...r.map(String), ...n])])
                        }))
                    },
                    w = e => {
                        const r = {
                            ad_unit_path: e.getAdUnitPath(),
                            slot_element_id: e.getSlotElementId()
                        };
                        return n.jH ? Object.assign(Object.assign({}, r), (() => {
                            const r = {},
                                t = [];
                            let n = [];
                            const i = (e, i) => {
                                const o = "slot" === e ? e => r[e] = 1 : () => {},
                                    a = i.getTargetingKeys();
                                n = a;
                                for (let a = 0; a < n.length; a++) {
                                    const s = n[a];
                                    if (void 0 !== r[s] && "service" === e) continue;
                                    const c = [],
                                        u = i.getTargeting(s);
                                    for (let e = 0; e < u.length; e++) c.push(u[e].toString());
                                    c.length > 0 && (o(s), t.push({
                                        key: s,
                                        value: c
                                    }))
                                }
                            };
                            return i("slot", e), i("service", googletag.pubads()), {
                                targeting_keys: t
                            }
                        })()) : r
                    },
                    q = (e, r) => {
                        let t = !1;
                        const n = () => {
                                t && p(e, a[r])
                            },
                            i = () => {
                                t = !0
                            },
                            o = () => {
                                t = !1
                            };
                        try {
                            window.addEventListener("blur", n);
                            const e = document.getElementById(r);
                            e.addEventListener("mouseover", i), e.addEventListener("mouseout", o)
                        } catch (e) {}
                    },
                    b = (e, r) => {
                        const {
                            setTargeting: t
                        } = googletag.pubads()
                    }
            },
            1059: (e, r, t) => {
                t.r(r), t.d(r, {
                    LocalStorageAddon: () => o,
                    load: () => i
                });
                var n = t(6013);
                const i = (e, r, t) => {
                    e.push({
                        functionName: "addon",
                        arguments: ["local_storage", {}]
                    })
                };
                class o {
                    constructor(e) {
                        this.options = e;
                        const r = this;
                        this.activations = this.options.activationManager.getActivations("local_storage"), this.storageKeyToSegments = {};
                        for (let e = 0; e < this.activations.length; e++) {
                            const r = this.activations[e],
                                t = r.getSegmentCode(),
                                n = r.getConfig().storage_key;
                            n in this.storageKeyToSegments || (this.storageKeyToSegments[n] = {}), this.storageKeyToSegments[n][t] = !0
                        }
                        this.exportSegments(), this.options.messages.on("permutive:segments:updated", (0, n.Z_)(this.options.network, this.options.userId, (function() {
                            r.exportSegments()
                        })))
                    }
                    exportSegments() {
                        const e = this,
                            r = this.options.userSegments.getAllAsList();
                        Object.keys(this.storageKeyToSegments).forEach((t => {
                            const n = [],
                                i = e.storageKeyToSegments[t];
                            r.forEach((e => {
                                e in i && n.push(e.toString())
                            })), n.length > 0 && this.options.externalData.setExternalData(t, JSON.stringify(n))
                        }))
                    }
                }
            },
            5542: (e, r, t) => {
                t.r(r), t.d(r, {
                    AppnexusPixel: () => n,
                    load: () => i
                });
                class n extends class extends class {
                    constructor(e, r) {
                        this.isFirstRun = void 0 === e.permutiveData.getData(r), this.cachedSegmentsMembership = e.userSegments.getAllAsMap(), this.isFirstRun && e.permutiveData.setData(r, !0), e.messages.on("permutive:reset", (() => e.permutiveData.setData(r, !1)))
                    }
                } {
                    constructor(e, r, t) {
                        super(e, t);
                        const n = e.activationManager.getSpecializedActivations(r);
                        this.processSpecialisedActivations(e.permutive, n)
                    }
                } {
                    constructor(e) {
                        super(e, "appnexus", "addon:appnexus")
                    }
                    processSpecialisedActivations(e, r) {
                        Object.entries(r).forEach((([r, t]) => {
                            const n = parseInt(r),
                                i = n in this.cachedSegmentsMembership;
                            this.isFirstRun && i ? this.firePixel(t) : e.trigger(n, "", (e => {
                                e.result && this.firePixel(t)
                            }))
                        }))
                    }
                    firePixel(e) {
                        (new Image).src = `https://secure.adnxs.com/seg?add=${e}&t=1`
                    }
                }
                const i = e => {
                    e.push({
                        functionName: "addon",
                        arguments: ["appnexus", {}]
                    })
                }
            },
            2404: (e, r, t) => {
                t.r(r), t.d(r, {
                    RubiconSspAddon: () => a,
                    load: () => o
                });
                var n = t(6013);
                const i = "_prubicons",
                    o = e => {
                        e.push({
                            functionName: "addon",
                            arguments: ["rubicon_ssp", {}]
                        })
                    };
                class a {
                    constructor(e) {
                        this.options = e, this.liveSegments = e.externalData.getExternalJsonData(i) || [], this.eligibleSegments = {};
                        const r = this.options.activationManager.getSpecializedActivations("rubicon_ssp");
                        for (let e = 0; e < r.length; e++) this.eligibleSegments[r[e]] = !0;
                        const t = this.options.userSegments.getAllAsList();
                        this.updateIfNecessary(t), this.options.messages.on("permutive:segments:updated", (() => {
                            const e = this.options.userSegments.getAllAsList();
                            this.updateIfNecessary(e)
                        })), this.options.messages.on("permutive:reset", (0, n.Z_)(e.network, e.userId, (() => {
                            localStorage.removeItem(i), this.liveSegments = []
                        })))
                    }
                    updateIfNecessary(e) {
                        const r = this.filterSegments(e);
                        (0, n.cO)(r, this.liveSegments) || this.options.externalData.setExternalJsonData(i, r), this.liveSegments = r
                    }
                    filterSegments(e) {
                        return e.filter((e => e in this.eligibleSegments))
                    }
                }
            },
            8482: (e, r, t) => {
                t.r(r), t.d(r, {
                    WebAddon: () => k,
                    load: () => E
                });
                var n = t(655),
                    i = t(2688),
                    o = t(8198),
                    a = t(3735),
                    s = t(4011),
                    c = t(6567),
                    u = t(7209),
                    l = t(64),
                    p = t(6013),
                    d = t(3760),
                    m = t(5506);
                const g = (0, m.MU)("add_alchemy_entities", !1),
                    _ = (0, m.MU)("add_alchemy_taxonomy", !1);

                function f(e) {
                    return Object.assign(Object.assign(Object.assign({}, e && _ ? {
                        taxonomy_labels: "$alchemy_taxonomy_labels"
                    } : {}), e && g ? {
                        entity_names: "$alchemy_entity_names"
                    } : {}), {
                        classifications_watson: {
                            taxonomy_labels: "$taxonomy_labels"
                        }
                    })
                }

                function h(e, r, t, n) {
                    const i = Object.assign(Object.assign(Object.assign({
                        isp_info: "$ip_isp_info",
                        geo_info: "$ip_geo_info"
                    }, {}), e), r);
                    t.track("Pageview", i).then((e => {
                        n.emit("permutive:event:pageview", e)
                    }))
                }

                function v(e, r, t, n, i, o) {
                    return Object.assign(Object.assign(Object.assign({
                        isp_info: "$ip_isp_info",
                        geo_info: "$ip_geo_info"
                    }, n), t), {
                        aggregations: Object.assign({
                            PageviewEngagement: Object.assign({
                                engaged_time: e
                            }, l.UW ? {
                                completion: r
                            } : {})
                        }, l.ED ? {
                            SegmentEntry: Array.from(i),
                            SegmentExit: Array.from(o)
                        } : {})
                    })
                }

                function w(e, r, t, n, i, o, a, s = !0, u = c.YP) {
                    const l = v(e, r, t, n, i, o),
                        p = (0, c.fS)((() => null))(u);
                    let d = {
                        useBeacon: s
                    };
                    null !== p && (d = Object.assign(Object.assign({}, d), {
                        unprocessedData: p
                    })), a.track("PageviewComplete", l, d)
                }
                const q = ["mousemove", "click", "scroll"],
                    b = ["email", "tel", "submit", "reset", "button", "file", "password", "radio", "checkbox"],
                    y = ["email", "e-mail", "password", "tel", "telephone", "phone", "name_first", "name_last", "sa_zip"],
                    E = (e, r) => {
                        0
                    };
                class k {
                    constructor(e) {
                        this.dirtyState = !1, this.totalCompletion = 0, this.totalEngagedTime = 0, this.hasPageviewCompleteFired = !1, this.cleanupPageEngagementDetection = a.Q1, this.permutive = e.permutive, this.options = e, this.api = e.api, this.clientContext = e.clientContext, this.logger = e.logger, this.unprocessedPVC = e.unprocessedPVC, this.options.customProperties.overrideCustomProps(e.page || {});
                        this.pageEngagementDetected = (() => {
                            this.dirtyState = !0, l.Uy && this.resetTimeout()
                        }).bind(this), h(f(this.clientContext.getContext().isArticle), this.options.customProperties.getCustomProps(), this.permutive, this.options.messages), this.enablePageEngagementDetection(), "loading" !== document.readyState ? this.attachListeners() : window.addEventListener("DOMContentLoaded", this.attachListeners.bind(this), !1), l.t2 && (this.timerHandle = this.registerEngagementInterval(this.getEventInterval())), l.Uy && (this.setPageviewCompleteTimeout(l.MU), (0, p.aq)((() => {
                            this.hasPageviewCompleteFired || w(this.totalEngagedTime, this.totalCompletion, f(this.clientContext.getContext().isArticle), this.options.customProperties.getCustomProps(), this.options.queryManager.segmentEntryQueryCodes, this.options.queryManager.segmentExitQueryCodes, this.permutive)
                        }), navigator.userAgent))
                    }
                    sendLinkClickEvent(e, r) {
                        if (window.location.href && e.href) {
                            const t = 0 === e.href.indexOf("data:") ? "NOT_URL" : e.href;
                            this.permutive.track("LinkClick", {
                                dest_url: t
                            }, {
                                useBeacon: r
                            })
                        }
                    }
                    sendFormSubmissionEvent(e) {
                        {
                            const r = e.currentTarget,
                                t = {
                                    form: Object.assign(Object.assign(Object.assign({
                                        method: r.method || "GET",
                                        properties: this.serializeForm(r)
                                    }, "string" == typeof r.id ? {
                                        id: r.id
                                    } : {}), r.name && "string" == typeof r.name ? {
                                        name: r.name
                                    } : {}), r.action && "string" == typeof r.action ? {
                                        action: r.action
                                    } : {})
                                };
                            this.permutive.track("FormSubmission", t)
                        }
                    }
                    trackEngagementInterval(e) {
                        return (0, a.zG)(this.updateState(e), (({
                            engaged_time: e,
                            total_engaged_time: r,
                            completion: t,
                            total_completion: n
                        }) => function(e, r, t, n, i, o) {
                            const a = Object.assign(Object.assign({
                                isp_info: "$ip_isp_info",
                                geo_info: "$ip_geo_info",
                                engaged_time: e,
                                total_engaged_time: r
                            }, i), {
                                completion: t,
                                total_completion: n
                            });
                            o.track("PageviewEngagement", a)
                        }(e, r, t, n, this.options.customProperties.getCustomProps(), this.permutive)), (e => {
                            if (!this.hasPageviewCompleteFired) return function(e, r, t, n, i, o, a, s, c, u) {
                                const l = v(e, r, a, s, c, u);
                                return i.then((e => {
                                    const r = {
                                        props: l,
                                        sessionId: t,
                                        viewId: n,
                                        client: e
                                    };
                                    o.put(r)
                                }))
                            }(this.totalEngagedTime, this.totalCompletion, this.options.sessionManager.getSessionId(), this.options.viewId.get(), this.clientContext.getClient(), this.unprocessedPVC, f(this.clientContext.getContext().isArticle), this.options.customProperties.getCustomProps(), this.options.queryManager.segmentEntryQueryCodes, this.options.queryManager.segmentExitQueryCodes)
                        }))
                    }
                    reset(e) {
                        return (0, n.mG)(this, void 0, void 0, (function*() {
                            if (this.disablePageEngagementDetection(), l.Uy) {
                                const e = yield this.unprocessedPVC.getIfPresent();
                                this.hasPageviewCompleteFired = !1, w(this.totalEngagedTime, this.totalCompletion, f(this.clientContext.getContext().isArticle), this.options.customProperties.getCustomProps(), this.options.queryManager.segmentEntryQueryCodes, this.options.queryManager.segmentExitQueryCodes, this.permutive, !1, e)
                            }
                            this.dirtyState = !1, this.options.state.viewId.generateAndSet(), this.totalCompletion = 0, this.totalEngagedTime = 0, this.options.customProperties.overrideCustomProps(e.page || {}), this.updateWebOptions(e), this.enablePageEngagementDetection();
                            const r = {
                                logger: this.logger,
                                config: Object.assign(Object.assign({}, this.options.config), {
                                    watson: e.watson
                                }),
                                clientContext: this.clientContext,
                                api: this.api,
                                permutiveData: this.options.permutiveData,
                                metrics: this.options.metrics,
                                sessionManager: this.options.sessionManager,
                                enrichers: this.options.enrichers,
                                network: this.options.network
                            };
                            (0, d.H)(r)().then((() => {
                                h(f(this.clientContext.getContext().isArticle), this.options.customProperties.getCustomProps(), this.permutive, this.options.messages), l.t2 && (clearInterval(this.timerHandle), this.timerHandle = this.registerEngagementInterval(this.getEventInterval()))
                            }))
                        }))
                    }
                    serializeForm(e) {
                        return [...e.getElementsByTagName("input")].filter((e => !(!e.type || !e.id || e.disabled || e.checked || "fieldset" === e.nodeName.toLowerCase() || -1 !== b.indexOf(e.type.toLowerCase()) || -1 !== y.indexOf(e.name.toLowerCase())))).map((e => ({
                            name: e.name || e.id,
                            value: e.value
                        }))).filter((e => e.value.length < 120))
                    }
                    registerEngagementInterval(e) {
                        return setInterval((() => {
                            this.dirtyState && this.trackEngagementInterval(e)
                        }), 1e3 * e)
                    }
                    attachListeners() {
                        const e = e => "a" === e.tagName.toLowerCase(),
                            r = t => e(t) ? (0, c.G)(t) : t.parentElement ? e(t.parentElement) ? (0, c.G)(t.parentElement) : r(t.parentElement) : c.YP;
                        l.eV && [].slice.call(document.getElementsByTagName("form"), 0).forEach((e => {
                            e.addEventListener("submit", (0, p.Z_)(this.options.network, this.options.userId, this.sendFormSubmissionEvent.bind(this)))
                        })), l.qr && document.body.addEventListener("click", (e => {
                            if (e.target instanceof Element) {
                                const t = r(e.target);
                                return (0, c.g_)((() => {}), (r => this.sendLinkClickEvent(r, ((e, r) => !("_blank" === r.target || e.metaKey || e.ctrlKey || e.shiftKey || 2 === e.which || 3 === e.which))(e, r))))(t)
                            }
                        }), {
                            capture: !0
                        })
                    }
                    updateState(e) {
                        const r = Math.max(this.totalCompletion, this.getCurrentCompletion()),
                            t = r - this.totalCompletion;
                        return this.totalEngagedTime += e, this.totalCompletion = r, this.dirtyState = !1, {
                            engaged_time: e,
                            total_engaged_time: this.totalEngagedTime,
                            completion: t,
                            total_completion: this.totalCompletion
                        }
                    }
                    getCurrentCompletion() {
                        if ("function" == typeof this.options.getPageCompletion) return (0, a.zG)((0, o.Y3)((0, a.ls)(this.options.getPageCompletion, Number, (e => isNaN(e) ? 0 : e), (0, u.uZ)(s.Df)(0, 1)), i.w), (0, o.EQ)((e => (this.logger.warn("Web: invoking getPageCompletion threw an error. Got", e), 0)), (e => (this.logger.debug("Web: invoking getPageCompletion returned", e), e))));
                        return (() => {
                            const e = document.documentElement.scrollHeight,
                                r = window.pageYOffset + window.innerHeight;
                            return r <= 0 ? 0 : r >= e ? 1 : r / e
                        })()
                    }
                    setPageviewCompleteTimeout(e) {
                        return window.setTimeout((() => {
                            this.hasPageviewCompleteFired || (w(this.totalEngagedTime, this.totalCompletion, f(this.clientContext.getContext().isArticle), this.options.customProperties.getCustomProps(), this.options.queryManager.segmentEntryQueryCodes, this.options.queryManager.segmentExitQueryCodes, this.permutive, !1), this.hasPageviewCompleteFired = !0)
                        }), e)
                    }
                    resetTimeout() {
                        clearTimeout(this.pageviewCompleteTimeoutHandle), this.pageviewCompleteTimeoutHandle = this.setPageviewCompleteTimeout(l.MU)
                    }
                    registerPageEngagementCleanup(e) {
                        if ("function" != typeof e) return this.logger.warn("No page detection cleanup was registered"), null;
                        this.cleanupPageEngagementDetection = () => (0, o.Y3)((() => {
                            e(), this.cleanupPageEngagementDetection = a.Q1
                        }), (e => this.logger.warn("Page detection cleanup threw an error", (0, i.w)(e))))
                    }
                    enablePageEngagementDetection() {
                        this.options.addPageEngagementDetection && (0, a.zG)(this.options.addPageEngagementDetection(this.pageEngagementDetected), (e => this.registerPageEngagementCleanup(e))), this.setDirtyEventListenersTo(!0, this.getDirtyEvents())
                    }
                    disablePageEngagementDetection() {
                        this.cleanupPageEngagementDetection(), this.setDirtyEventListenersTo(!1, this.getDirtyEvents())
                    }
                    setDirtyEventListenersTo(e, r) {
                        const t = e ? window.addEventListener : window.removeEventListener;
                        return r.forEach((e => t(e, this.pageEngagementDetected))), null
                    }
                    getDirtyEvents() {
                        return this.options.dirtyEvents || q
                    }
                    getEventInterval() {
                        return this.options.eventInterval || 5
                    }
                    updateWebOptions(e) {
                        var r;
                        e.watson = {
                            enabled: "boolean" == typeof(null === (r = e.watson) || void 0 === r ? void 0 : r.enabled) ? e.watson.enabled : this.options.config.watson.enabled
                        };
                        const t = {
                            addPageEngagementDetection: void 0,
                            dirtyEvents: void 0,
                            eventInterval: void 0,
                            getPageCompletion: void 0,
                            page: void 0,
                            watson: void 0
                        };
                        return this.options = Object.assign(Object.assign(Object.assign({}, this.options), t), e)
                    }
                }
            },
            7735: (e, r, t) => {
                t.d(r, {
                    J: () => i
                });
                var n = t(416);
                class i {
                    constructor() {
                        this.replacementMap = {}
                    }
                    register(e) {
                        this.replacementMap = Object.assign(Object.assign({}, this.replacementMap), e.getReplacementMap)
                    }
                    enrich(e, r) {
                        return this.enrichRecursive(e, r)
                    }
                    enrichRecursive(e, r) {
                        const t = {
                                output: {},
                                isFullyEnriched: !0
                            },
                            i = Object.keys(e);
                        for (let o = 0; o < i.length; o++) {
                            const a = i[o],
                                s = e[a];
                            switch (!0) {
                                case (0, n.t)(s):
                                    const [e, i] = this.isPropertyReplaceable(s);
                                    t.output[a] = e ? i : s, this.replacementMap.hasOwnProperty(s) && i === s && r && delete t.output[a], t.isFullyEnriched = !!e && t.isFullyEnriched;
                                    break;
                                case null !== s && "object" == typeof s && s.constructor === Object:
                                    const o = this.enrichRecursive(s, r);
                                    t.output[a] = o.output, t.isFullyEnriched = t.isFullyEnriched && o.isFullyEnriched;
                                    break;
                                default:
                                    t.output[a] = s
                            }
                        }
                        return t
                    }
                    isPropertyReplaceable(e) {
                        const r = this.replacementMap[e];
                        return [this.replacementMap.hasOwnProperty(e) && r !== e, r]
                    }
                }
            },
            3760: (e, r, t) => {
                t.d(r, {
                    B: () => s,
                    H: () => c
                });
                var n = t(3735),
                    i = t(5151),
                    o = t(7112);
                const a = [],
                    s = e => {
                        a.push(e)
                    },
                    c = e => {
                        const r = a.map((r => (0, o.Y3)((() => r.load(e)), (r => {
                            e.network.error(r)
                        }))));
                        return (0, n.zG)((0, i.RD)(r), (0, i.UI)(n.Q1))
                    }
            },
            416: (e, r, t) => {
                t.d(r, {
                    t: () => n
                });
                const n = e => "string" == typeof e && "$" === e[0]
            },
            6546: (e, r, t) => {
                t.r(r), t.d(r, {
                    PermutiveMessages: () => n
                });
                class n {
                    constructor(e) {
                        this._internals = e, this.handlers = {}, this.messageQueue = {};
                        window.addEventListener("message", (e => {
                            var r;
                            "permutive" === (null === (r = null == e ? void 0 : e.data) || void 0 === r ? void 0 : r.origin) && this.handle(e)
                        }), !1), this._internals.messages.once("permutive:api:ready", (function() {
                            window.postMessage({
                                origin: "permutive",
                                type: "sdk-init"
                            }, "*")
                        }))
                    }
                    listen(e, r) {
                        if (e in this.handlers || (this.handlers[e] = []), this.handlers[e].push(r), e in this.messageQueue)
                            for (let r = 0; r < this.messageQueue[e].length; r++) {
                                const t = this.messageQueue[e][r];
                                this.handle(t)
                            }
                    }
                    handle(e) {
                        e.data.type in this.handlers ? this.handlers[e.data.type].forEach((r => {
                            r(e)
                        })) : (e.data.type in this.messageQueue || (this.messageQueue[e.data.type] = []), this.messageQueue[e.data.type].push(e))
                    }
                }
            },
            4762: (e, r, t) => {
                t.d(r, {
                    F: () => o
                });
                var n = t(3735),
                    i = t(6567);
                class o {
                    constructor(e, r, t) {
                        this.urls = e, this.config = r, this.network = t
                    }
                    identify(e, r, t) {
                        const n = () => this.reqWithMetrics(e, "sdk_http_identify_seconds", {
                            url: this.urls.getEndpointUrl("/identify", (0, i.G)(this.config.apiVersion)),
                            method: "POST",
                            payload: {
                                user_id: r.get(),
                                aliases: t
                            },
                            contentType: "text/plain",
                            dataType: "json",
                            withCredentials: !0
                        });
                        return this.identifyPromise ? this.identifyPromise = this.identifyPromise.then(n) : this.identifyPromise = n()
                    }
                    metrics(e) {
                        return this.network.req({
                            url: this.urls.getEndpointUrl("/internal/metrics", (0, i.G)(this.config.apiVersion)),
                            method: "POST",
                            payload: e,
                            contentType: "text/plain",
                            dataType: "text",
                            withCredentials: !1
                        })
                    }
                    track(e, r, t) {
                        const n = this.getTrackUrl(r, {
                            isFullyEnriched: t,
                            useBeacon: !1
                        });
                        return this.reqWithMetrics(e, "sdk_http_events_seconds", {
                            url: n,
                            method: "POST",
                            payload: r,
                            contentType: "text/plain",
                            dataType: "json",
                            withCredentials: !1
                        })
                    }
                    trackBatch(e, r) {
                        const t = this.getTrackUrl(r, {
                            isFullyEnriched: !0,
                            useBeacon: !1
                        });
                        return this.reqWithMetrics(e, "sdk_http_events_seconds", {
                            url: t,
                            method: "POST",
                            payload: r,
                            contentType: "text/plain",
                            dataType: "json",
                            withCredentials: !1
                        })
                    }
                    trackBeacon(e, r) {
                        const t = this.getTrackUrl(e, {
                            isFullyEnriched: r,
                            useBeacon: !0
                        });
                        return this.network.reqWithBeacon({
                            url: t,
                            payload: e
                        })
                    }
                    trackBatchBeacon(e) {
                        const r = this.getTrackUrl(e, {
                            isFullyEnriched: !0,
                            useBeacon: !0
                        });
                        return this.network.reqWithBeacon({
                            url: r,
                            payload: e
                        })
                    }
                    tpd(e, r) {
                        return this.reqWithMetrics(e, "sdk_http_tpd_seconds", {
                            url: this.urls.getEndpointUrl("/tpd", (0, i.G)(this.config.apiVersion)),
                            method: "POST",
                            payload: {
                                user_id: r
                            },
                            contentType: "text/plain",
                            dataType: "json",
                            withCredentials: !1
                        })
                    }
                    tpdUsage(e, r) {
                        return this.reqWithMetrics(e, "sdk_http_tpd_usage_seconds", {
                            url: this.urls.getEndpointUrl("/tpd/usage", (0, i.G)(this.config.apiVersion)),
                            method: "POST",
                            payload: r,
                            contentType: "text/plain",
                            dataType: "json",
                            withCredentials: !1
                        })
                    }
                    reset(e) {
                        return this.reqWithMetrics(e, "sdk_http_reset_seconds", {
                            url: this.urls.getEndpointUrl("/reset", (0, i.G)(this.config.apiVersion)),
                            method: "POST",
                            payload: null,
                            contentType: "text/plain",
                            dataType: "json",
                            withCredentials: !0
                        })
                    }
                    segmentSync(e) {
                        return this.network.req({
                            url: `https://${this.config.segmentSyncApiHost}/sync/${e.key}`,
                            method: "POST",
                            payload: `value=${encodeURIComponent(e.value)}`,
                            contentType: "application/x-www-form-urlencoded",
                            dataType: "json",
                            withCredentials: !0
                        })
                    }
                    modelsBinary(e) {
                        return this.reqWithMetrics(e, "sdk_http_models_seconds", {
                            url: this.getModelsUrl("binary"),
                            method: "GET",
                            contentType: "text/plain",
                            dataType: "binary",
                            withCredentials: !1
                        })
                    }
                    modelsJson(e) {
                        return this.reqWithMetrics(e, "sdk_http_models_seconds", {
                            url: this.getModelsUrl("json"),
                            method: "GET",
                            contentType: "text/plain",
                            dataType: "json",
                            withCredentials: !1
                        })
                    }
                    state(e, r, t, n, o, a) {
                        return this.reqWithMetrics(e, "sdk_http_reset_seconds", {
                            url: this.urls.getEndpointUrl("/state", (0, i.G)("v1.0"), [
                                ["fetch_unseen", JSON.stringify(a)]
                            ]),
                            method: "POST",
                            payload: {
                                group_id: r,
                                event_source_id: t,
                                state: JSON.stringify(n),
                                last_seen_offset: o
                            },
                            contentType: "text/plain",
                            dataType: "json",
                            withCredentials: !1
                        })
                    }
                    cleanRoom(e, r) {
                        return this.network.req({
                            url: this.urls.getAdvertiserEndpointUrl("/segment", (0, i.G)(this.config.advertiserApiVersion), [
                                ["new-session", e.toString()]
                            ]),
                            method: "POST",
                            payload: r,
                            contentType: "text/plain",
                            dataType: "json",
                            withCredentials: !1
                        })
                    }
                    classificationModels(e) {
                        return this.network.req({
                            url: this.urls.getClassificationModelsEndpointUrl("/segment", (0, i.G)(this.config.classificationModelsApiVersion)),
                            method: "POST",
                            payload: e,
                            contentType: "text/plain",
                            dataType: "json",
                            withCredentials: !1
                        })
                    }
                    appnexus(e) {
                        return this.network.req({
                            url: e,
                            method: "GET",
                            contentType: "text/plain",
                            dataType: "json",
                            withCredentials: !0,
                            timeout: 2e3
                        })
                    }
                    pxid(e) {
                        return this.network.req({
                            url: this.urls.makeAuthenticatedUrl(e),
                            method: "GET",
                            contentType: "text/plain",
                            dataType: "json",
                            withCredentials: !0,
                            timeout: 2e3
                        })
                    }
                    queries() {
                        const e = {
                                addons: {
                                    dfp: {
                                        activations: {
                                            dfp: [],
                                            dfp_legacy: {}
                                        },
                                        auto_init: !0,
                                        track_slot_rendered: !1,
                                        track_slot_viewable: !1,
                                        track_slot_clicked: !1,
                                        track_targeting_keys: !1,
                                        sync_segments_cookie: !1
                                    },
                                    web: {
                                        auto_init: !1,
                                        track_pageview_engagement: !0,
                                        track_pageview_complete: !0,
                                        track_form_submission: !1,
                                        track_link_click: !1,
                                        engagement_edge_only: !0,
                                        segment_transition_edge_only: !1
                                    }
                                },
                                queries: {
                                    queries: {},
                                    eventSegments: {},
                                    eventsLookup: [],
                                    literalsLookup: [],
                                    subexpressionsLookup: [],
                                    stateSyncReplays: [],
                                    propertiesLookup: []
                                },
                                queries_metadata: {}
                            },
                            r = `${this.config.cdnBaseUrl.startsWith("dev.local:")?"http":"https"}://${this.config.cdnBaseUrl}/queries/5dc35e4e-c442-405b-bf5f-5c2b8824b0cf-amp.json`;
                        return this.network.req({
                            url: r,
                            withCredentials: !1,
                            dataType: "json",
                            method: "GET"
                        }).catch((() => e))
                    }
                    pxidReset(e) {
                        return this.network.req({
                            url: this.urls.makeAuthenticatedUrl(e),
                            method: "POST",
                            payload: null,
                            contentType: "text/plain",
                            dataType: "json",
                            withCredentials: !0
                        })
                    }
                    getSocioDemoPredictions(e) {
                        return this.network.req({
                            method: "POST",
                            url: this.urls.getEndpointUrl("/demographic/infer/v3", (0, i.G)(this.config.apiVersion)),
                            dataType: "json",
                            payload: e,
                            withCredentials: !1
                        })
                    }
                    reqWithMetrics(e, r, t) {
                        const i = e.startTimer(r, {});
                        return this.network.req(t).then((t => (0, n.zG)(e.stopTimer(r, i), (e => t))))
                    }
                    getTrackUrl(e, r) {
                        const {
                            isFullyEnriched: t,
                            useBeacon: n
                        } = r, o = Array.isArray(e), a = !t;
                        return this.urls.getEndpointUrl(o ? "/batch/events" : "/events", (0, i.G)(this.config.apiVersion), [
                            ["enrich", JSON.stringify(a)],
                            ["sdkp", JSON.stringify(!n)]
                        ])
                    }
                    getModelsUrl(e) {
                        const r = `https://${this.config.cdnBaseUrl}`;
                        switch (e) {
                            case "binary":
                                return `${r}/models/v2/5dc35e4e-c442-405b-bf5f-5c2b8824b0cf-models.bin`;
                            case "json":
                                return `${r}/models/5dc35e4e-c442-405b-bf5f-5c2b8824b0cf-models.json`
                        }
                    }
                }
            },
            550: (e, r, t) => {
                t.d(r, {
                    XO: () => i,
                    bk: () => a,
                    kJ: () => n,
                    mh: () => o,
                    sv: () => s
                });
                const n = e => Object.assign({
                        id: e.id,
                        name: e.name,
                        time: new Date(e.time),
                        properties: e.properties || {}
                    }, c(e)),
                    i = e => Object.assign({
                        id: e.id || null,
                        name: e.name,
                        time: (u(e.time) ? e.time : new Date).toISOString(),
                        properties: e.properties || {}
                    }, c(e)),
                    o = (e, r) => Object.assign({
                        id: e.id,
                        time: new Date(e.time),
                        name: r.name,
                        properties: r.properties
                    }, c(r)),
                    a = e => void 0 !== e.request_id,
                    s = e => void 0 !== e.properties,
                    c = e => Object.assign(Object.assign({}, e.session_id ? {
                        session_id: e.session_id
                    } : {}), e.view_id ? {
                        view_id: e.view_id
                    } : {}),
                    u = e => isFinite(e) && e instanceof Date
            },
            8110: (e, r, t) => {
                t.d(r, {
                    s: () => i
                });
                var n = t(6567);
                class i {
                    constructor(e) {
                        this.config = e, this.PATH_JOINER_Q = "?", this.PATH_JOINER_A = "&"
                    }
                    getEndpointUrl(e, r, t = []) {
                        return this.getUrl("base", e, r, t)
                    }
                    getSdkErrorsUrl(e, r) {
                        return this.getUrl("sdk-errors", e, r, [])
                    }
                    getAdvertiserEndpointUrl(e, r, t = []) {
                        return this.getUrl("adv", e, r, t)
                    }
                    getClassificationModelsEndpointUrl(e, r, t = []) {
                        return this.getUrl("clm", e, r, t)
                    }
                    makeAuthenticatedUrl(e) {
                        return this.makeUrlWithQueryParams(e, [
                            ["k", this.config.apiKey]
                        ])
                    }
                    getUrlPrefix(e) {
                        switch (e) {
                            case "base":
                                return "";
                            case "adv":
                                return "/adv";
                            case "sdk-errors":
                                return "/sdk-errors";
                            case "clm":
                                return "/clm"
                        }
                    }
                    getUrl(e, r, t, i) {
                        const o = this.getUrlPrefix(e),
                            a = (0, n.g_)((() => ""), (e => `/${e}`))(t),
                            s = `${this.config.apiProtocol}://${this.config.apiHost}${o}${a}${r}`;
                        return this.makeUrlWithQueryParams(s, i.concat([
                            ["k", this.config.apiKey]
                        ]))
                    }
                    makeUrlWithQueryParams(e, r) {
                        const t = r.map((([e, r]) => `${e}=${r}`)).join(this.PATH_JOINER_A),
                            n = e.includes(this.PATH_JOINER_Q) ? this.PATH_JOINER_A : this.PATH_JOINER_Q;
                        return `${e}${n}${t}`
                    }
                }
            },
            590: (e, r, t) => {
                t.d(r, {
                    NY: () => m,
                    vX: () => w,
                    D1: () => v
                });
                var n = t(655),
                    i = t(3735),
                    o = t(3195);
                const a = "permutive-consent";
                var s = t(6567);
                const c = (e, r) => (0, i.zG)((0, s.ij)(r), (r => !1 === e && (0, s.Wi)(r) ? {
                        isValid: !0,
                        consentData: u()
                    } : (e => (0, s.pC)(e) && (e => null !== e && "object" == typeof e)(e.value) && (e => {
                        var r;
                        return !0 === e.opt_in && "string" == typeof e.token && (null === (r = e.token) || void 0 === r ? void 0 : r.length) > 0
                    })(e.value))(r) ? {
                        isValid: !0,
                        consentData: r.value
                    } : {
                        isValid: !1,
                        consentData: l()
                    })),
                    u = () => ({
                        opt_in: !0,
                        token: a
                    }),
                    l = () => ({
                        opt_in: !1,
                        token: ""
                    }),
                    p = e => {
                        return (0, i.ls)((r = e, e => (0, i.zG)(c(r.consentRequired, e), (({
                            consentData: e,
                            isValid: t
                        }) => (r.consentDatabase.put(e, a), t)))), (({
                            logger: e,
                            messages: r
                        }) => t => {
                            const n = t ? "given" : "revoked";
                            return e.log("Consent has been", n), r.emit(`permutive:consent:${n}`), t
                        })(e));
                        var r
                    },
                    d = e => (r, t) => {
                        e.on("permutive:consent:revoked", r), e.on("permutive:consent:given", t)
                    },
                    m = (e, r, t, {
                        consentRequired: s
                    }) => (0, n.mG)(void 0, void 0, void 0, (function*() {
                        const n = {
                                isRevoked: () => !1,
                                listenForConsent: i.Q1
                            },
                            u = (0, o.S)(t, r, n),
                            {
                                giveConsent: l,
                                revokeConsent: m,
                                isRevoked: g
                            } = (() => {
                                let e = !0;
                                return {
                                    revokeConsent: () => e = !1,
                                    giveConsent: () => e = !0,
                                    isRevoked: () => !1 === e
                                }
                            })(),
                            _ = yield u.get(a);
                        c(s, _).isValid ? l() : m();
                        const f = {
                            isRevoked: g,
                            listenForConsent: d(e)
                        };
                        f.listenForConsent(m, l);
                        return {
                            consentTracking: f,
                            consentValidation: p({
                                consentDatabase: u,
                                consentRequired: s,
                                logger: r,
                                messages: e
                            }),
                            consentDatabase: u
                        }
                    }));
                var g = t(9320),
                    _ = t(8198),
                    f = t(5151),
                    h = t(6992);
                const v = e => {
                        const {
                            partialTagWithKey: r
                        } = e, t = r.key;
                        var n;
                        window[t].consent = (n = e, (0, i.ls)(n.consentModule.consentValidation, (e => e ? (0, h.H)(n)() : null)));
                        const o = (0, s.EQ)((() => {
                            return r = {
                                consentDatabase: e.consentModule.consentDatabase,
                                consentRequired: e.tag.config.consentRequired
                            }, (0, i.zG)((0, i.a9)(r.consentDatabase.get(a)), (0, f.UI)((e => c(r.consentRequired, e).isValid)));
                            var r
                        }), f.of);
                        return (0, i.zG)((0, i.zG)((({
                            consentModule: e,
                            tag: r
                        }) => {
                            const t = (0, g.Ew)((function(e) {
                                return "consent" === e.functionName
                            }))(r.q);
                            return (0, s.UI)((r => e.consentValidation(r.arguments[0])))(t)
                        })(e), o), (0, f.UI)((e => e ? (0, _.F2)(!0) : (0, _.t$)("No consent to run on the page"))))
                    },
                    w = (e, r, t) => (...n) => (t() ? r : e)(...n)
            },
            5303: (e, r, t) => {
                t.d(r, {
                    S: () => j
                });
                var n = t(3735),
                    i = t(655),
                    o = t(6567),
                    a = t(8206),
                    s = t(4011),
                    c = t(5857),
                    u = t(64),
                    l = t(550);
                const p = (e, r) => {
                        switch (d(e.event, e.isEventFullyEnriched, r)) {
                            case "immediate":
                                return g(e);
                            case "memoryOnly":
                                return _(e);
                            case "response":
                                return f(e);
                            case "deferred":
                                return h(e);
                            case "never":
                                return v(e)
                        }
                    },
                    d = (e, r, t) => t ? "deferred" : m(e.name, r),
                    m = (e, r) => I.has(e) ? "memoryOnly" : k.has(e) ? "never" : r ? "immediate" : "response",
                    g = ({
                        event: e,
                        requestData: r,
                        requestOptions: t,
                        queryManager: o,
                        eventsBatch: a,
                        stateSync: u,
                        metrics: l,
                        logger: p
                    }) => (0, i.mG)(void 0, void 0, void 0, (function*() {
                        const [i, {
                            segmentsEntered: d,
                            segmentsExited: m
                        }] = yield y(e, l, o, p), g = (0, c.e5)(s.Eq)((0, c.G0)(s.Eq)(new Set(r.segments), d), m);
                        return p.log(`Adding ${e.name} to batch, with segments`, g), Promise.all([a.add(Object.assign(Object.assign({}, r), {
                            segments: [...g]
                        }), t, "immediate"), u.sync(i)]).then(n.Q1)
                    })),
                    _ = ({
                        event: e,
                        metrics: r,
                        queryManager: t,
                        logger: i
                    }) => y(e, r, t, i).then(n.Q1),
                    f = ({
                        requestData: e,
                        requestOptions: r,
                        queryManager: t,
                        eventsCache: n,
                        eventHandler: i,
                        api: o,
                        metrics: a,
                        logger: s
                    }) => o.track(a, e, !1).then((i => w(i, e, r, n, a, t, s))).then((({
                        event: e,
                        error: r
                    }) => E(i, e, r))),
                    h = ({
                        event: e,
                        isEventFullyEnriched: r,
                        requestData: t,
                        api: i,
                        eventHandler: a
                    }) => Promise.all([i.trackBeacon(t, r), E(a, e, o.YP)]).then(n.Q1),
                    v = ({
                        requestData: e,
                        requestOptions: r,
                        eventsBatch: t
                    }) => t.add(e, r, "never"),
                    w = (e, r, t, n, i, o, a) => (0, l.bk)(e) ? q(e, r, t) : b(e, r, t, n, i, o, a),
                    q = (e, r, t) => {
                        const i = {
                            name: r.name,
                            session_id: r.session_id,
                            view_id: r.view_id,
                            properties: r.properties,
                            id: null,
                            time: new Date
                        };
                        return (0, n.zG)(t.error(e.error.message), (r => Promise.resolve({
                            event: i,
                            error: (0, o.G)(e)
                        })))
                    },
                    b = (e, r, t, i, a, s, c) => {
                        const u = (0, l.sv)(e) ? (0, l.kJ)(Object.assign(Object.assign({}, e), {
                            session_id: r.session_id,
                            view_id: r.view_id
                        })) : (0, l.mh)(e, r);
                        return y(u, a, s, c).then((e => (0, n.zG)(t.success(u), (e => i.add(u, {
                            persistOnDisk: !0
                        })), (e => ({
                            event: u,
                            error: o.YP
                        })))))
                    },
                    y = (e, r, t, i) => D.has(e.name) ? (0, n.zG)(r.startTimer("sdk_events_querylanguage_seconds", {}), (o => t.process(e, !0).then((t => (0, n.zG)(r.stopTimer("sdk_events_querylanguage_seconds", o), (r => i.log("Processing event", e, "caused the following update", t)), (e => t)))))) : Promise.resolve([{}, {
                        segmentsEntered: new Set,
                        segmentsExited: new Set
                    }]),
                    E = (e, r, t) => {
                        e.newEvent((0, l.XO)(r), (0, o.fS)((() => null))(t))
                    },
                    k = new Set(["ThirdPartySegments", "SlotRendered"]),
                    I = new Set([...u.D0 ? ["PageviewEngagement"] : [], ...u.ED ? ["SegmentEntry", "SegmentExit"] : []]),
                    A = new Set(["PageviewComplete"]),
                    D = new Set(["!UpdateLookalikeModels", "!UpdateSecondPartyData", "!UpdateThirdPartyData", "Pageview", "PageviewComplete", "PixelTracking", "SegmentEntry", "SlotClicked"]);
                var P = t(1057),
                    S = t(3351),
                    x = t(2236),
                    O = t(6013);
                class M {
                    constructor(e, r = {}) {
                        this.wait_prev = r.wait_prev || !1, this.block_next = r.block_next || !1, this.started = !1, this.complete = !1, this.task = e
                    }
                    waits() {
                        return this.wait_prev
                    }
                    blocks() {
                        return this.block_next
                    }
                    execute(e) {
                        this.started = !0, this.task((() => {
                            this.complete = !0, e()
                        }))
                    }
                }
                var C = t(8941);
                class T {
                    constructor(e, r, t, n, i, o, a, s, c, u, l, p, d, m, g, _, f, h, v, w, q, b, y, E, k, I, A, D, P, S, x, O, M, C) {
                        this.namespace = e, this.logger = r, this.api = t, this.eventHandler = n, this.activationManager = i, this.sessionManager = o, this.metrics = a, this.viewId = s, this.userId = c, this.network = u, this.enrichers = l, this.clientContext = p, this.unprocessedPVC = d, this.eventsBatch = m, this.queryManager = g, this.stateSync = _, this.eventsCache = f, this.taskQueue = h, this.identities = v, this.permutiveReset = w, this.messages = q, this.addons = b, this.trace = y, this.permutiveRealtime = E, this.state = k, this.customProperties = I, this.config = A, this.permutiveData = D, this.externalData = P, this.cookies = S, this.thirdParty = x, this.models = O, this.identitiesIngestor = M, this.global = C, this.initialisedAddons = [], this.triggerListeners = []
                    }
                    identify(e) {
                        this.logger.debug("<call> identify", e);
                        const r = (0, O.b2)(),
                            t = this.identities.parseCustomerDefinedIdentities(e),
                            n = Object.assign(Object.assign({}, this.identities.getIdentitiesMap()), t.reduce(((e, {
                                tag: r,
                                id: t,
                                priority: n,
                                expiry: i
                            }) => Object.assign(Object.assign({}, e), {
                                [r]: Object.assign(Object.assign({
                                    id: t
                                }, void 0 !== n ? {
                                    priority: n
                                } : {}), void 0 !== i ? {
                                    expiry: i
                                } : {})
                            })), {})),
                            o = Object.values(n).map((e => e.id)),
                            s = this.identities.getPrioritizedIdentities(n);
                        if ("string" == typeof e && (0, a.Bt)("5dc35e4e-c442-405b-bf5f-5c2b8824b0cf", "0cf17917-395b-4f25-91cc-db3bdd6044b0", o, window.location.hostname, this.userId.get())) return r.resolve(), r.promise;
                        const c = () => (0, i.mG)(this, void 0, void 0, (function*() {
                                yield(0, C.WI)({
                                    logger: this.logger,
                                    queryManager: this.queryManager,
                                    thirdParty: this.thirdParty,
                                    trace: this.trace
                                })
                            })),
                            u = e => (0, i.mG)(this, void 0, void 0, (function*() {
                                yield(0, C.Yj)({
                                    clientContext: this.clientContext,
                                    eventsCache: this.eventsCache,
                                    global: this.global,
                                    identities: this.identities,
                                    logger: this.logger,
                                    metrics: this.metrics,
                                    models: this.models,
                                    queryManager: this.queryManager,
                                    reset: this.permutiveReset,
                                    stateSync: this.stateSync,
                                    thirdParty: this.thirdParty,
                                    trace: this.trace,
                                    userId: this.userId
                                }, e.user_id)
                            }));
                        return this.taskQueue.add(new M((e => (0, i.mG)(this, void 0, void 0, (function*() {
                            this.logger.debug("<task> identify ", t);
                            const n = yield this.api.identify(this.metrics, this.userId, s);
                            this.identities.setIdentities(t), this.userId.isEqual(n.user_id) ? yield c(): yield u(n), this.logger.debug("<done> identify", t), e(), r.resolve(), yield this.identitiesIngestor.ingestIfEligible(t).catch((e => this.network.error(`Couldn't ingest identities, got ${e}`, this.userId.get())))
                        }))), {
                            wait_prev: !0,
                            block_next: !0
                        })), r.promise
                    }
                    on(e, r) {
                        return this.eventHandler.addListener({
                            name: e,
                            callback: r,
                            once: !1
                        })
                    }
                    once(e, r) {
                        return this.eventHandler.addListener({
                            name: e,
                            callback: r,
                            once: !0
                        })
                    }
                    track(...e) {
                        var r, t, i;
                        const [o, a, s] = [e[0], e[1] || {}, e[2] || {}], c = this.trace.startSpan("track_event");
                        this.logger.log("<call> track", o);
                        const u = (0, O.b2)();
                        if (!this.api) return this.network.error("The API hasn't been loaded."), u.reject(), u.promise;
                        const l = null !== (r = s.unprocessedData) && void 0 !== r ? r : {},
                            d = null !== (t = l.sessionId) && void 0 !== t ? t : this.sessionManager.getSessionId(),
                            m = null !== (i = l.viewId) && void 0 !== i ? i : this.viewId.get(),
                            g = {
                                success: s.success || (e => {}),
                                error: s.error || ((e, r) => {})
                            };
                        return this.taskQueue.add(new M((e => {
                            this.logger.log("<task> track", o);
                            const {
                                output: r,
                                isFullyEnriched: t
                            } = this.enrichers.enrich(a, I.has(o));
                            this.metrics.track({
                                name: t ? "sdk_event_enrichment_success_count" : "sdk_event_enrichment_fail_count",
                                value: 1,
                                labels: {}
                            });
                            return (l.client ? Promise.resolve(l.client) : this.clientContext.getClient()).then((i => {
                                var l;
                                const _ = Object.assign(Object.assign({}, r), {
                                        client: a.client ? (0, O.PM)(i, a.client) : i
                                    }),
                                    f = {
                                        user_id: this.userId.get(),
                                        name: o,
                                        segments: this.queryManager.userSegments.getAllAsList(),
                                        properties: _,
                                        session_id: d,
                                        view_id: m
                                    },
                                    h = {
                                        name: o,
                                        properties: _,
                                        session_id: d,
                                        view_id: m,
                                        time: new Date
                                    };
                                return ((e, r) => p(e, r).then((r => A.has(e.event.name) ? e.unprocessedPVC.reset() : (0, n.Q1)())))({
                                    event: h,
                                    requestData: f,
                                    isEventFullyEnriched: t,
                                    requestOptions: g,
                                    logger: this.logger,
                                    queryManager: this.queryManager,
                                    stateSync: this.stateSync,
                                    eventsCache: this.eventsCache,
                                    eventHandler: this.eventHandler,
                                    metrics: this.metrics,
                                    eventsBatch: this.eventsBatch,
                                    api: this.api,
                                    unprocessedPVC: this.unprocessedPVC
                                }, null !== (l = s.useBeacon) && void 0 !== l && l).then((r => {
                                    this.logger.log("<done> track", h.name), u.resolve(h), e(), c.finish()
                                })).catch((e => {
                                    g.error(e), this.network.error(e, this.userId.get())
                                }))
                            }))
                        }))), u.promise
                    }
                    trigger(e, r, t) {
                        const n = (0, O.b2)();
                        this.logger.log("<call> trigger", e), this.triggerListeners = this.triggerListeners || [];
                        return this.taskQueue.add(new M((r => {
                            this.logger.log("<task> trigger", e);
                            const i = this.messages.on("permutive:query:changed", (function(r) {
                                r.queryCode === e && (t(r.result), n.resolve(r.result))
                            }));
                            this.triggerListeners.push(i), this.logger.log("<done> trigger", e), r()
                        }))), n.promise
                    }
                    query() {
                        return Promise.resolve({
                            result: !1
                        })
                    }
                    segment(e, r) {
                        const t = (0, O.b2)();
                        this.logger.log("<call> segment", e);
                        return this.taskQueue.add(new M((n => {
                            var i;
                            this.logger.log("<task> segment", e);
                            const o = this.queryManager.stateMap.value[e];
                            o && (r((null === (i = null == o ? void 0 : o.result) || void 0 === i ? void 0 : i.result) || !1), t.resolve()), this.logger.log("<done> segment", e), n()
                        }))), t.promise
                    }
                    segments(e, r = "all") {
                        const t = (0, O.b2)();
                        this.logger.log("<call> segments");
                        return this.taskQueue.add(new M((n => {
                            this.logger.log("<task> segments (" + r + ")");
                            const i = i => {
                                e(i), t.resolve(i), this.logger.log("<done> segments (" + r + ")"), n()
                            };
                            "dfp" === r ? this.messages.once("permutive:dfp:ready", (() => {
                                i(this.addons.dfp.segments.liveSegments)
                            })) : i(this.queryManager.userSegments.getAllAsList())
                        }))), t.promise
                    }
                    reset() {
                        return Promise.all([this.api.reset(this.metrics), this.identities.reset(), this.permutiveReset.reset(), this.stateSync.reset(), this.unprocessedPVC.reset(), this.queryManager.bootstrap([])]).then((([e]) => (this.userId.set(e.id), this.eventsCache.reset()))).then((() => {
                            this.messages.emit("permutive:reset")
                        })).catch((e => {
                            this.network.error(`Error resetting internals. Got ${e}`)
                        }))
                    }
                    addon(e, r) {
                        const n = Object.assign(Object.assign({}, r), {
                            permutive: this,
                            api: this.api,
                            activationManager: this.activationManager,
                            network: this.network,
                            clientContext: this.clientContext,
                            logger: this.logger,
                            unprocessedPVC: this.unprocessedPVC,
                            metrics: this.metrics,
                            namespace: this.namespace,
                            state: this.state,
                            queryManager: this.queryManager,
                            messages: this.messages,
                            userId: this.userId,
                            viewId: this.viewId,
                            customProperties: this.customProperties,
                            config: this.config,
                            permutiveData: this.permutiveData,
                            sessionManager: this.sessionManager,
                            userSegments: this.queryManager.userSegments,
                            addons: this.addons,
                            enrichers: this.enrichers,
                            externalData: this.externalData,
                            cookies: this.cookies
                        });
                        if (-1 === this.initialisedAddons.indexOf(e)) switch (this.initialisedAddons.push(e), e) {
                            case "web":
                                Promise.resolve().then(t.bind(t, 8482)).then((e => this.addons.web = new e.WebAddon(n))).then((() => this.messages.emit("permutive:web:ready")));
                                break;
                            case "publishers":
                            case "overlays":
                            case "scriptrunner":
                            case "nativo":
                            case "freewheel":
                            case "facebook_pixel_v2":
                            case "eyeota_pixel":
                            case "rubicon":
                            case "tracking_pixel":
                            case "twitter_pixel":
                            case "pinterest_pixel":
                            case "prebid":
                            case "classification_models":
                            case "gam_log":
                            case "socio_demo_cohorts":
                            case "smart":
                            case "tradedesk":
                            case "ddp":
                            case "dbm":
                            case "pubmatic":
                            case "ctv":
                                0;
                                break;
                            case "dfp":
                                Promise.resolve().then(t.bind(t, 957)).then((e => this.addons.dfp = e.createAddon(n)));
                                break;
                            case "rubicon_ssp":
                                Promise.resolve().then(t.bind(t, 2404)).then((e => this.addons.rubicon_ssp = new e.RubiconSspAddon(n)));
                                break;
                            case "local_storage":
                                Promise.resolve().then(t.bind(t, 1059)).then((e => this.addons.local_storage = new e.LocalStorageAddon(n)));
                                break;
                            case "appnexus_adserver":
                                Promise.resolve().then(t.bind(t, 6226)).then((e => this.addons.appnexus_adserver = new e.AppNexusAdServerAddon(n)));
                                break;
                            case "clean_room":
                                Promise.resolve().then(t.bind(t, 5607)).then((e => this.addons.clean_room = new e.CleanRoomAddon(n)));
                                break;
                            case "appnexus":
                                Promise.resolve().then(t.bind(t, 5542)).then((e => this.addonIfTCFConsent({
                                    Addon: e.AppnexusPixel,
                                    key: "appnexus"
                                }, n)))
                        } else "web" === e && !0 !== r.auto_init ? (0, x.p)((() => this.addons.web.reset(r)), "permutive:web:ready", this.messages).catch((e => {
                            this.network.error(`Got error while trying to reset web. Got ${e.message}`, this.state.userId.get())
                        })) : "ctv" === e && (null == r || r.auto_init)
                    }
                    addonIfTCFConsent(e, r) {
                        const t = () => {
                                switch (e.key) {
                                    case "tradedesk":
                                        this.addons.tradedesk = new e.Addon(r);
                                        break;
                                    case "ddp":
                                        this.addons.ddp = new e.Addon(r);
                                        break;
                                    case "appnexus":
                                        this.addons.appnexus = new e.Addon(r);
                                        break;
                                    case "pubmatic":
                                        this.addons.pubmatic = new e.Addon(r)
                                }
                            },
                            i = r => r[S.D[e.key]] ? t() : (0, n.Q1)();
                        return (0, P._8)(window).then((e => {
                            switch (e.type) {
                                case "missing":
                                    return t();
                                case "aborted":
                                    return (0, n.Q1)();
                                case "loaded":
                                    return (0, n.zG)((0, P.Ec)(e.data), (0, o.g_)(t, i))
                            }
                        }))
                    }
                    ready(e, r = "initialised") {
                        const t = (0, O.b2)(),
                            n = () => {
                                e(), t.resolve()
                            };
                        switch (r) {
                            case "initialised":
                                this.permutiveRealtime.isReady() ? n() : this.messages.on("permutive:ready", n);
                                break;
                            case "realtime":
                                this.permutiveRealtime.isRealtime() ? n() : this.messages.once("permutive:realtime", n)
                        }
                        return t.promise
                    }
                }
                var L = t(590);
                const R = e => {
                        const {
                            logger: r,
                            consentTracking: t
                        } = e, o = (...e) => (r.debug("Methods[track]: Cannot track as consent is revoked"), Promise.resolve(null));
                        return e => class extends e {
                            constructor(...e) {
                                super(...e), this.track = (0, L.vX)(super.track.bind(this), o, t.isRevoked), t.listenForConsent((() => this.consentRevoked()), n.Q1)
                            }
                            consentRevoked() {
                                return (0, i.mG)(this, void 0, void 0, (function*() {
                                    return yield this.sessionManager.reset(), this.reset()
                                }))
                            }
                        }
                    },
                    j = (e, r, t, i, o, a, s, c, u, l, p, d, m, g, _, f, h, v, w, q, b, y, E, k, I, A, D, P, S, x, O, M, C, L, j) => new((0, n.zG)(T, R({
                        consentTracking: j,
                        logger: r
                    })))(e, r, t, i, o, a, s, c, u, l, p, d, m, g, _, f, h, v, w, q, b, y, E, k, I, A, D, P, S, x, O, M, C, L)
            },
            7281: (e, r, t) => {
                t.d(r, {
                    Oc: () => l,
                    l9: () => p
                });
                var n = t(1828),
                    i = t(8198),
                    o = t(3735);
                class a {
                    constructor() {}
                    setItem(e, r) {
                        return (0, o.zG)(JSON.stringify(r), (r => window.sessionStorage.setItem(e, r)))
                    }
                    getItem(e) {
                        return (0, o.zG)(window.sessionStorage.getItem(e), JSON.parse)
                    }
                }
                class s {
                    constructor() {}
                    setItem() {}
                    getItem() {
                        return null
                    }
                }
                const c = e => (0, i.tS)((e => 1 === e.size ? (0, i.F2)(null) : (0, i.t$)("Iterable Maps not supported")))((e => "function" == typeof e.Map ? (0, i.F2)(new e.Map([
                        ["a", 1]
                    ])) : (0, i.t$)("Maps not supported"))(e)),
                    u = e => (0, i.tS)((e => 2 === e.size ? (0, i.F2)(null) : (0, i.t$)("Iterable Sets not supported")))((e => "function" == typeof e.Set ? (0, i.F2)(new e.Set([1, 2])) : (0, i.t$)("Sets not supported"))(e)),
                    l = e => (0, o.zG)((0, n.gz)(i.G5)(c(e), u(e), (e => {
                        const r = ["QuotaExceededError", "QUOTA_EXCEEDED_ERR", "NS_ERROR_DOM_QUOTA_REACHED"];
                        return (0, i.Y3)((() => {
                            const r = "_permutive_ls_test";
                            e.localStorage.setItem(r, r), e.localStorage.removeItem(r)
                        }), (t => e.localStorage && 0 === e.localStorage.remainingSpace || r.some((e => -1 !== String(t).indexOf(e))) ? "localStorage quota exceeded" : "localStorage not supported"))
                    })(e), (e => e.Worker && e.Blob ? (0, i.F2)(null) : (0, i.t$)("WebWorkers not supported"))(e)), (e => (0, i.UI)(o.Q1)(e))),
                    p = e => {
                        const r = (0, i.Y3)((() => {
                            const r = "_permutive_ls_test";
                            e.sessionStorage.setItem(r, r), e.sessionStorage.getItem(r), e.sessionStorage.removeItem(r)
                        }), (e => "sessionStorage not supported"));
                        return (0, o.zG)(r, (0, i.g_)((() => new s), (() => new a)))
                    }
            },
            8941: (e, r, t) => {
                t.d(r, {
                    Yj: () => p,
                    TZ: () => l,
                    MA: () => m,
                    WI: () => g
                });
                var n = t(655),
                    i = t(2688),
                    o = t(3735),
                    a = t(6567);
                var s = t(8206),
                    c = t(449);
                const u = e => (0, n.mG)(void 0, void 0, void 0, (function*() {
                        yield e.identityPromise, yield function(e, r) {
                            return (0, s.Bt)("5dc35e4e-c442-405b-bf5f-5c2b8824b0cf", "0cf17917-395b-4f25-91cc-db3bdd6044b0", e.identities.getPrioritizedIdentities(e.identities.getIdentitiesMap()).map((e => e.id)), window.location.hostname, e.userId.get()) ? r.reset() : Promise.resolve()
                        }(e, e.permutiveMethods);
                        const r = yield function(e) {
                            const r = e.trace.startSpan("identify");
                            0;
                            return (e => (0, n.mG)(void 0, void 0, void 0, (function*() {
                                const {
                                    logger: r,
                                    network: t,
                                    api: i,
                                    userId: o,
                                    identities: a,
                                    metrics: s,
                                    identitiesIngestor: c,
                                    messages: u
                                } = e, l = a.extractIdentifyFromQueue(e), p = a.getIdentitiesMap(), d = l.reduce(((e, {
                                    tag: r,
                                    id: t,
                                    priority: n,
                                    expiry: i
                                }) => Object.assign(Object.assign({}, e), {
                                    [r]: Object.assign(Object.assign({
                                        id: t
                                    }, i ? {
                                        expiry: i
                                    } : {}), void 0 !== n ? {
                                        priority: n
                                    } : {})
                                })), {}), m = Object.assign(Object.assign({}, p), d);
                                r.log("Starting identification... Identities are:", m);
                                const g = a.getPrioritizedIdentities(m),
                                    _ = yield i.identify(s, o, g).then((e => (0, n.mG)(void 0, void 0, void 0, (function*() {
                                        const t = e.user_id;
                                        return o.isEqual(t) ? {
                                            identityChanged: !1
                                        } : (r.log(`Got different user id from API: ${t}`), {
                                            identityChanged: !0,
                                            userId: t
                                        })
                                    })))).catch((e => (0, n.mG)(void 0, void 0, void 0, (function*() {
                                        const r = o.get();
                                        return t.error(`Couldn't set identity for user ${r}. Got ${e}`, r), {
                                            identityChanged: !1
                                        }
                                    }))));
                                return a.setIdentities(Object.entries(m).map((([e, {
                                    id: r,
                                    priority: t,
                                    expiry: n
                                }]) => Object.assign(Object.assign({
                                    tag: e,
                                    id: r
                                }, n ? {
                                    expiry: n
                                } : {}), void 0 !== t ? {
                                    priority: t
                                } : {})))), c.ingestIfEligible(g).catch((e => t.error(`Couldn't ingest identities, got ${e}`, _.identityChanged ? _.userId : o.get()))), u.emit("permutive:user:ready"), r.debug("<done> init identity ", _), _
                            })))(e).catch((r => (e.network.error(`Failed to identify. Got ${(0,i.w)(r)}`), {
                                identityChanged: !1
                            }))).then((e => (r.finish(), e)))
                        }(e);
                        return r.identityChanged ? (e.metrics.track({
                            name: "sdk_identity_changed_total",
                            value: 1,
                            labels: {}
                        }), yield p(e, r.userId)) : (e.metrics.track({
                            name: "sdk_identity_remained_total",
                            value: 1,
                            labels: {}
                        }), e.logger.log("Identity has not changed"), yield g(e)), r
                    })),
                    l = e => (0, n.mG)(void 0, void 0, void 0, (function*() {
                        u(e), yield function(e, r, t, i, s, c, u) {
                            e.log("Assuming identity hasn't changed");
                            const l = s.hasNewOrModifiedQueries,
                                p = r.startSpan(`qm_bootstrap_${l}`),
                                d = () => l ? c.all().then((e => s.bootstrap(e))) : s.bootstrap([]);
                            return c.resetIfNeeded().then((e => e ? (u.track({
                                name: "sdk_reset_hearst_count",
                                value: 1,
                                labels: {}
                            }), t.reset()) : Promise.resolve())).then(d).then((() => i.getIfPresent())).then((0, a.g_)((() => e.log("No unprocessed PVC data detected")), (r => (0, o.zG)(e.log("Unprocessed PVC data detected", r), (e => {
                                const {
                                    props: t
                                } = r;
                                return {
                                    props: t,
                                    unprocessedData: (0, n._T)(r, ["props"])
                                }
                            }), (({
                                props: e,
                                unprocessedData: r
                            }) => t.track("PageviewComplete", e, {
                                unprocessedData: r
                            }).finally((() => i.reset()))))))).then((() => p.finish()))
                        }(e.logger, e.trace, e.permutiveMethods, e.unprocessedPVC, e.queryManager, e.eventsCache, e.metrics), d(e.global, e.clientContext)
                    }));

                function p(e, r) {
                    return (0, n.mG)(this, void 0, void 0, (function*() {
                        e.logger.log("Identity has changed"), yield e.reset.reset(), e.userId.set(r), d(e.global, e.clientContext), e.identities.setIdentities([]);
                        const t = yield e.eventsCache.reset(c.m), n = e.trace.startSpan("ss_reset_sync");
                        e.thirdParty.reset(), yield f(e, t), n.finish()
                    }))
                }

                function d(e, r) {
                    return e.context = r.getContext()
                }

                function m({
                    logger: e,
                    queryManager: r,
                    models: t,
                    trace: i
                }) {
                    return (0, n.mG)(this, void 0, void 0, (function*() {
                        const n = i.startSpan("lal_http"),
                            o = yield t.getModels();
                        n.finish(), e.debug("Updating lookalike models");
                        const a = i.startSpan("update_env_lal");
                        return yield r.updateLAL(o), a.finish(), o
                    }))
                }

                function g({
                    logger: e,
                    queryManager: r,
                    thirdParty: t,
                    trace: i
                }) {
                    return (0, n.mG)(this, void 0, void 0, (function*() {
                        const n = i.startSpan("tpd_http"),
                            o = yield t.segments();
                        n.finish(), e.log("Updating TPD segments");
                        const a = i.startSpan("update_env_tpd");
                        return yield r.updateTPD(o), a.finish(), o
                    }))
                }

                function _(e) {
                    const r = e.trace.startSpan("tpd_models");
                    return Promise.all([g(e), m(e)]).then((([t, n]) => {
                        e.logger.debug("Loaded TPD segments and lookalike models", t, n), r.finish()
                    }))
                }
                const f = (e, r) => (0, n.mG)(void 0, void 0, void 0, (function*() {
                    yield Promise.all([_(e), e.stateSync.resetSync(), e.queryManager.bootstrap(r)])
                }))
            },
            6785: (e, r, t) => {
                function n(e, r, t, n, i) {
                    i.debug("set SDK as ready"), e.setAsReady(), r.emit("permutive:api:ready"), t.track({
                        name: "sdk_local_storage_byte_total",
                        value: n.getStateSizeInBytes(),
                        labels: {}
                    }), t.track({
                        name: "sdk_query_states_byte_total",
                        value: e.getStateSizeInBytes(),
                        labels: {}
                    })
                }
                t.d(r, {
                    R: () => n
                })
            },
            3368: (e, r, t) => {
                t.d(r, {
                    $o: () => h,
                    uU: () => w,
                    je: () => v
                });
                var n = t(8198),
                    i = t(3735),
                    o = t(655),
                    a = t(2688),
                    s = t(6567),
                    c = t(3629);
                class u {
                    constructor(e, r, t) {
                        this.urls = e, this.config = r, this.logger = t
                    }
                    req(e) {
                        return this.reqImpl(e).then((e => (0, i.MZ)(e)))
                    }
                    reqWithBeacon({
                        url: e,
                        payload: r
                    }) {
                        return null === navigator || void 0 === navigator ? void 0 : navigator.sendBeacon(e, JSON.stringify(r))
                    }
                    error(e, r, t) {
                        return (0, o.mG)(this, void 0, void 0, (function*() {
                            this.logger.error((0, a.w)(e)), this.config.sendClientErrors && (yield this.errorNetwork(e, r, t).catch((0, i.ls)(a.w, (e => this.logger.error(e)))))
                        }))
                    }
                    errorNetwork(e, r, t) {
                        var n, i, o, a, u, l, p, d;
                        const m = e instanceof Error ? e : new Error(JSON.stringify(e)),
                            g = {
                                error_message: null !== (i = null === (n = null == m ? void 0 : m.message) || void 0 === n ? void 0 : n.toString()) && void 0 !== i ? i : "",
                                stack_trace: null === (o = null == m ? void 0 : m.stack) || void 0 === o ? void 0 : o.split("\n")
                            },
                            _ = r ? {
                                user_id: r
                            } : {},
                            f = Object.assign({
                                platform: "web",
                                sdk_version: "v19.30.0",
                                ql_runtime_version: "v5.1.1",
                                timestamp: null != t ? t : new Date,
                                domain: null !== (u = null === (a = null === window || void 0 === window ? void 0 : window.location) || void 0 === a ? void 0 : a.hostname) && void 0 !== u ? u : "",
                                url: (0, c.bk)(null === (l = null === window || void 0 === window ? void 0 : window.location) || void 0 === l ? void 0 : l.href),
                                referrer: (0, c.bk)(null === document || void 0 === document ? void 0 : document.referrer),
                                user_agent: null !== (p = null === navigator || void 0 === navigator ? void 0 : navigator.userAgent) && void 0 !== p ? p : "",
                                error_message: null !== (d = g.error_message) && void 0 !== d ? d : String(e),
                                stack_trace: g.stack_trace
                            }, _);
                        return this.req({
                            url: this.urls.getSdkErrorsUrl("/errors", (0, s.G)(this.config.sdkErrorsApiVersion)),
                            method: "POST",
                            payload: [f],
                            contentType: "text/plain",
                            dataType: "text",
                            withCredentials: !1
                        })
                    }
                    reqImpl(e) {
                        const {
                            url: r,
                            dataType: t,
                            contentType: i,
                            method: o,
                            withCredentials: a,
                            timeout: s
                        } = e;
                        return new Promise(((c, u) => {
                            const l = new XMLHttpRequest,
                                p = "POST" === e.method ? "string" == typeof(d = e.payload) ? d : JSON.stringify(d) : null;
                            var d;
                            l.onload = function() {
                                if (this.status >= 400) {
                                    const e = "text" === this.responseType || "" === this.responseType ? this.responseText : "Couldn't access response text";
                                    u(`Failed ajax request. Status code was ${this.status}. ${e}`)
                                } else if ("json" === t) {
                                    const e = this.responseText ? (0, n.Y3)((() => JSON.parse(this.responseText)), (e => `Failed to parse response as JSON. Response was ${JSON.stringify(this.responseText)}. Got ${e}`)) : (0, n.F2)(null);
                                    (0, n.g_)(u, c)(e)
                                } else c("text" === t ? this.responseText : this.response)
                            }, l.onerror = () => u(new Error("Network request failed")), l.ontimeout = () => u(new Error("Network request timed out")), l.open(o, r, !0), i && l.setRequestHeader("content-type", i), l.timeout = s || l.timeout, l.withCredentials = a || l.withCredentials, l.responseType = "binary" === t ? "arraybuffer" : l.responseType, l.send(p)
                        }))
                    }
                }
                var l = t(6013);
                const p = "__permutive.",
                    d = "__permutiveConfigQueryParams";
                const m = {
                        default: {
                            windowKey: "permutive",
                            environment: "default",
                            apiHost: "api.permutive.com",
                            apiKey: "",
                            cdnBaseUrl: "cdn.permutive.com",
                            pxidHost: "prmutv.co",
                            apiVersion: "v2.0",
                            sdkErrorsApiVersion: "v2",
                            advertiserApiVersion: "v2",
                            classificationModelsApiVersion: "v1",
                            apiProtocol: "https",
                            loggingEnabled: !1,
                            tracingEnabled: !1,
                            requestTimeout: 5e3,
                            cookieDomain: "." + (0, c._Y)(window.location.hostname),
                            cookieName: "permutive-id",
                            cookieExpiry: function() {
                                const e = new Date;
                                return e.setMonth(e.getMonth() + 6), e.toUTCString()
                            }(),
                            eventsTTLInDays: null,
                            permutiveDataMiscKey: "permutive-data-misc",
                            permutiveDataModelsKey: "permutive-data-models",
                            permutiveDataQueriesKey: "permutive-data-queries",
                            permutiveDataTPDKey: "permutive-data-tpd",
                            permutiveDataEnrichersKey: "permutive-data-enrichers",
                            stateNamespace: "",
                            sendClientErrors: !0,
                            metricsSamplingPercentage: 20,
                            eventsCacheLimitBytes: 25e5,
                            segmentSyncApiHost: "0cf17917-395b-4f25-91cc-db3bdd6044b0.partner.permutive.app",
                            consentRequired: !1,
                            sdkType: "stable",
                            viewId: null,
                            localStorageDebouncedKeys: ["internal_query_states"],
                            localStorageWriteDelay: 1e3,
                            localStorageWriteMaxDelay: 1500,
                            watson: {
                                enabled: !0
                            }
                        },
                        production: {},
                        development: {
                            apiProtocol: "http",
                            loggingEnabled: !0,
                            tracingEnabled: !0,
                            sendClientErrors: !1
                        }
                    },
                    g = e => {
                        const r = {
                                consentRequired: !0,
                                loggingEnabled: !0,
                                sendClientErrors: !0,
                                tracingEnabled: !0
                            },
                            t = {
                                eventsTTLInDays: !0,
                                eventsCacheLimitBytes: !0,
                                metricsSamplingPercentage: !0,
                                requestTimeout: !0,
                                localStorageWriteDelay: !0,
                                localStorageWriteMaxDelay: !0
                            };
                        return Object.keys(e).reduce(((n, i) => {
                            if (r.hasOwnProperty(i)) {
                                const r = "true" === e[i];
                                return Object.assign(Object.assign({}, n), {
                                    [i]: r
                                })
                            }
                            if (t.hasOwnProperty(i)) {
                                const r = Number(e[i]);
                                return isNaN(r) ? n : Object.assign(Object.assign({}, n), {
                                    [i]: r
                                })
                            }
                            return Object.assign(Object.assign({}, n), {
                                [i]: e[i]
                            })
                        }), {})
                    },
                    _ = e => Object.entries(e).reduce(((e, [r, t]) => {
                        if (!(0 === r.indexOf(p))) return e;
                        const n = r.replace(p, "");
                        return [...e, [n, t]]
                    }), []),
                    f = (e, r, t) => {
                        var n;
                        const o = (0, i.zG)(r, _, (e => (0, l.m8)(...e)), g),
                            a = null !== (n = m[e.environment]) && void 0 !== n ? n : {};
                        return (0, l.PM)(m.default, a, e, ((e, r) => {
                            const t = r.getItem(d),
                                n = (0, l.PM)(t, e);
                            return r.setItem(d, n), n
                        })(o, t))
                    },
                    h = e => {
                        var r, t;
                        const o = "0cf17917-395b-4f25-91cc-db3bdd6044b0",
                            a = void 0 !== (null === (r = e[o]) || void 0 === r ? void 0 : r.q) && void 0 !== (null === (t = e[o]) || void 0 === t ? void 0 : t.config) ? o : "permutive";
                        return (0, i.zG)(e[a], (0, n.ij)("Can't find permutive tag on the page"), (0, n.UI)((e => ({
                            tag: e,
                            key: a
                        }))))
                    },
                    v = ({
                        tag: e,
                        key: r
                    }, t, n) => Object.assign(Object.assign({}, e), {
                        config: f(Object.assign(Object.assign({}, e.config), {
                            windowKey: r
                        }), t, n)
                    }),
                    w = (e, r, t) => new u(e, r, t)
            },
            6112: (e, r, t) => {
                t.d(r, {
                    F: () => o
                });
                var n = t(7112),
                    i = t(4938);
                const o = (0, n.Y3)((() => {
                    const e = (0, i.e)();
                    return e.postMessage({
                        type: "noop",
                        userId: null
                    }), Promise.resolve(e)
                }), (e => `Failed to start QueryWorker. Got ${e}`))
            },
            9848: (e, r, t) => {
                t.d(r, {
                    LA: () => s
                });
                var n = t(9320),
                    i = t(7209),
                    o = t(6013);
                const a = (e, r, {
                    network: t,
                    state: n
                }) => {
                    t.error(`Function "permutive.${r.functionName}" caused an error: ${e.message}`, n.userId.get())
                };

                function s(e, r, t, s, d, m, g = l) {
                    const _ = function(e) {
                            const r = (0, n.uK)((e => -1 !== u.indexOf(e.functionName)))(e),
                                t = r.right,
                                a = r.left.filter((e => "consent" !== e.functionName)),
                                s = (0, i.Zt)(((e, r) => c(e) && c(r) ? (0, o.lW)(p).compare(e.arguments[0], r.arguments[0]) : (0, o.lW)(u).compare(e.functionName, r.functionName))),
                                l = (0, n.DY)(s)(t);
                            return l.concat(a)
                        }(e),
                        f = m.startSpan("queued_methods"),
                        h = {
                            network: d,
                            state: r.state
                        };
                    _.forEach((e => {
                        try {
                            r = e.functionName, g.includes(r) || (e => {
                                e.functionName in t ? t[e.functionName].apply(s, e.arguments) : a(new Error("Does not exist."), e, h)
                            })(e)
                        } catch (r) {
                            const t = r instanceof Error ? r : new Error("Unknown error.");
                            a(t, e, h)
                        }
                        var r
                    })), f.finish()
                }
                const c = e => "addon" === e.functionName,
                    u = ["identify", "trigger", "addon", "track"],
                    l = ["identify"],
                    p = ["dfp", "appnexus_adserver", "web"]
            },
            5791: (e, r, t) => {
                t.d(r, {
                    y: () => v
                });
                var n = t(655),
                    i = t(2688),
                    o = t(9320),
                    a = t(3735),
                    s = t(9384),
                    c = function(e, r) {
                        return function() {
                            return r(e())
                        }
                    },
                    u = function(e) {
                        return function(r) {
                            return c(r, e)
                        }
                    },
                    l = a.a9,
                    p = (a.yR, a.yR, s.F4, s.Xl, function() {
                        return Math.random()
                    });

                function d(e, r) {
                    return (0, a.zG)(p, u((function(t) {
                        return Math.floor((r - e + 1) * t + e)
                    })))
                }
                u((function(e) {
                    return e < .5
                }));
                var m = t(356),
                    g = t(274),
                    _ = t(6013);
                class f {
                    constructor(e, r, t, i, o) {
                        this.sdkInitTimestamp = e, this.api = r, this.messages = t, this.logger = i, this.enrichers = o, this.environment = "web", this.pendingMetrics = [], this.pendingTimers = {}, this.messages.on("permutive:ready", (() => {
                            const e = d(3e4, 9e4),
                                r = t => window.setTimeout((() => (0, n.mG)(this, void 0, void 0, (function*() {
                                    const t = (yield this.processPending()) ? 5e3 : e();
                                    r(t)
                                }))), t);
                            r(5e3), (0, _.aq)((() => {
                                this.processPending.bind(this)
                            }), navigator.userAgent)
                        })), this.track({
                            name: "sdk_initialisation_start_time_seconds",
                            value: e / 1e3,
                            labels: {}
                        })
                    }
                    track(e) {
                        this.pendingMetrics.push(e)
                    }
                    trackTimeSinceInit(e, r) {
                        const t = (performance.now() - this.sdkInitTimestamp) / 1e3;
                        this.logger.debug("metrics: timer stopped", e, t), this.track({
                            name: e,
                            value: t,
                            labels: r
                        })
                    }
                    startTimer(e, r) {
                        const t = performance.now(),
                            n = this.generateRandomKey(e);
                        return this.pendingTimers[n] = {
                            startTime: t,
                            labels: r
                        }, n
                    }
                    stopTimer(e, r) {
                        const t = this.pendingTimers[r];
                        if (t) {
                            const n = (performance.now() - t.startTime) / 1e3;
                            this.logger.debug("metrics: timer stopped", e, n), this.track({
                                name: e,
                                value: n,
                                labels: t.labels
                            }), delete this.pendingTimers[r]
                        }
                    }
                    processPending() {
                        return (0, n.mG)(this, void 0, void 0, (function*() {
                            if ((0, o.xb)(this.pendingMetrics)) return !0;
                            const e = this.pendingMetrics;
                            this.pendingMetrics = [];
                            const r = () => (0, a.zG)({}, (e => (0, m.dx)("continent", g.U.$ip_geo_info_continent)(e)), (e => this.enrichers.enrich(e, !0).output));
                            try {
                                return yield this.api.metrics({
                                    context: Object.assign(Object.assign({}, r()), {
                                        environment: this.environment,
                                        events_count: 0,
                                        segments_count: 0
                                    }),
                                    items: e
                                }), !0
                            } catch (r) {
                                return this.logger.error(`Metrics: Request failed from error ${(0,i.w)(r).message}`, e), this.pendingMetrics = [...this.pendingMetrics, ...e], !1
                            }
                        }))
                    }
                    generateRandomKey(e) {
                        return `${e}-${[...Array(24)].map((()=>Math.random().toString(36)[2])).join("")}`
                    }
                }
                class h {
                    track(e) {}
                    trackTimeSinceInit(e, r) {}
                    startTimer(e, r) {
                        return ""
                    }
                    stopTimer(e, r) {}
                }

                function v(e, r, t, n, i, o, a) {
                    return (null !== (s = n.getData("metricsEnabled")) && void 0 !== s ? s : (() => {
                        const e = Math.random() <= t.metricsSamplingPercentage / 100;
                        return n.setData("metricsEnabled", e), e
                    })()) ? new f(e, r, i, o, a) : new h;
                    var s
                }
            },
            6992: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, {
                    H: () => initialiseWebSDK,
                    f: () => initialisationSequence
                });
                var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(655),
                    fp_ts_Either__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(8198),
                    fp_ts_function__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(3735),
                    fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(7112),
                    _identity_legacy_NeustarFabrickIdentitiesIngestor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9417),
                    _identity_legacy_PermutiveIdentities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8206),
                    _identity_legacy_PermutiveIdentitiesIngestorNoOp__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(6815),
                    _publisher_cohorts_legacy_models_PermutiveModelsWeb__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(8306),
                    _core_activations_PermutiveActivationManagerWeb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8764),
                    _core_activations_PermutiveAddons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5506),
                    _core_context_PermutiveClientContextWeb__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(427),
                    _core_crypto_HashcodeDigest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4572),
                    _core_events_EventsCacheWeb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8231),
                    _core_events_PermutiveEventCustomProps__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(2923),
                    _core_events_PermutiveEventsBatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4314),
                    _core_events_unprocessed_UnprocessedPageviewComplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(824),
                    _core_internals_CookiesWeb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9175),
                    _core_internals_ExternalDataWeb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3319),
                    _core_internals_PermutiveInternals__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(6715),
                    _core_internals_PermutiveLogger__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(4828),
                    _core_internals_SDKMessages__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(8167),
                    _core_queries_query_manager_QueryManagerWeb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4938),
                    _core_session_SessionManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3253),
                    _core_state_PermutiveDataStoreWeb__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2747),
                    _core_state_PermutiveEventSourceId__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1823),
                    _core_state_PermutiveNamespace__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(7738),
                    _core_state_PermutiveRealtime__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(1728),
                    _core_state_PermutiveReset__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(2472),
                    _core_state_PermutiveStateSyncWeb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1714),
                    _core_state_PermutiveStateWeb__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(7258),
                    _core_state_PermutiveUserId__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7846),
                    _core_state_PermutiveViewId__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6919),
                    _core_store_LocalStorageWeb__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3195),
                    _core_tcf_TCF__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1057),
                    _core_third_party_ThirdPartyBase__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2520),
                    _dynamic_addons_LoadAddons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2223),
                    _dynamic_enrichment_Enrichers_GlobalEnricher__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(7735),
                    _dynamic_enrichment_RegisterEnrichers__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(3760),
                    _http_PermutiveApi__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(4762),
                    _http_PermutiveUrls__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(8110),
                    _utils_event_handler_PermutiveEventHandler__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(9409),
                    _utils_PermutiveUtils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6013),
                    _utils_task_queue_PermutiveTaskQueue__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(7749),
                    _utils_Trace__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(998),
                    _utils_urls_UrlHelpers__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(3629),
                    _Consent__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(590),
                    _initialisation_browserFeatures__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(7281),
                    _initialisation_identity__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8941),
                    _initialisation_initialisationLifecycle__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(6785),
                    _initialisation_permutiveTag__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(3368),
                    _initialisation_queryWorkerInit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(6112),
                    _initialisation_queuedMethods__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(9848),
                    _initialisation_setupMetrics__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(5791),
                    _PermutiveMethodsWeb__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(5303);
                const sdkInitTimestamp = window.performance.now(),
                    initialiseWebSDK = ({
                        queryWorker,
                        tag,
                        partialTagWithKey,
                        urls,
                        network,
                        namespace,
                        messages,
                        logger,
                        consentModule
                    }) => (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.Y3)((() => (0, tslib__WEBPACK_IMPORTED_MODULE_30__.mG)(void 0, void 0, void 0, (function*() {
                        const windowKey = partialTagWithKey.key,
                            permutiveGlobal = window[windowKey],
                            config = tag.config,
                            trace = new _utils_Trace__WEBPACK_IMPORTED_MODULE_31__.l(config),
                            sdkReadySpan = trace.startSpan("sdk_ready"),
                            {
                                consentTracking,
                                consentValidation
                            } = consentModule;
                        window[windowKey].consent = consentValidation;
                        const context = (0, _utils_PermutiveUtils__WEBPACK_IMPORTED_MODULE_21__.PM)(tag.context || {}, {
                                path: window.location.pathname,
                                url: (0, _utils_urls_UrlHelpers__WEBPACK_IMPORTED_MODULE_32__.bk)(window.location.href),
                                referrer: (0, _utils_urls_UrlHelpers__WEBPACK_IMPORTED_MODULE_32__.bk)(document.referrer)
                            }),
                            createInternalsSpan = trace.startSpan("internals"),
                            eventHandler = new _utils_event_handler_PermutiveEventHandler__WEBPACK_IMPORTED_MODULE_33__.b,
                            cookieStore = (0, _core_internals_CookiesWeb__WEBPACK_IMPORTED_MODULE_8__.S)(namespace, config, logger, consentTracking),
                            localStorage = (0, _core_store_LocalStorageWeb__WEBPACK_IMPORTED_MODULE_17__.S)(namespace, logger, consentTracking),
                            externalData = (0, _core_internals_ExternalDataWeb__WEBPACK_IMPORTED_MODULE_9__.S)(namespace, logger, consentTracking),
                            clientContext = new _core_context_PermutiveClientContextWeb__WEBPACK_IMPORTED_MODULE_34__.z(context),
                            viewId = new _core_state_PermutiveViewId__WEBPACK_IMPORTED_MODULE_16__.W(clientContext, config),
                            userId = new _core_state_PermutiveUserId__WEBPACK_IMPORTED_MODULE_15__.M(config, clientContext, cookieStore, externalData),
                            permutiveData = (0, _core_state_PermutiveDataStoreWeb__WEBPACK_IMPORTED_MODULE_12__.S)(config, namespace, logger, network, userId, consentTracking),
                            eventSourceId = new _core_state_PermutiveEventSourceId__WEBPACK_IMPORTED_MODULE_13__.$(permutiveData),
                            enrichers = new _dynamic_enrichment_Enrichers_GlobalEnricher__WEBPACK_IMPORTED_MODULE_35__.J,
                            api = new _http_PermutiveApi__WEBPACK_IMPORTED_MODULE_36__.F(urls, config, network),
                            metrics = (0, _initialisation_setupMetrics__WEBPACK_IMPORTED_MODULE_27__.y)(sdkInitTimestamp, api, config, permutiveData, messages, logger, enrichers),
                            identityProviderEnv = {
                                permutive: permutiveGlobal,
                                network,
                                api,
                                userId,
                                metrics,
                                permutiveData,
                                messages,
                                config,
                                cookies: cookieStore,
                                logger
                            },
                            identities = new _identity_legacy_PermutiveIdentities__WEBPACK_IMPORTED_MODULE_1__.lg(metrics, trace, permutiveData, identityProviderEnv, logger),
                            identityPromise = identities.prepareThirdPartyIdentities(),
                            models = new _publisher_cohorts_legacy_models_PermutiveModelsWeb__WEBPACK_IMPORTED_MODULE_37__.e(network, logger, api, metrics, permutiveData),
                            identitiesIngestor = new _identity_legacy_PermutiveIdentitiesIngestorNoOp__WEBPACK_IMPORTED_MODULE_38__.z,
                            permutiveRealtime = new _core_state_PermutiveRealtime__WEBPACK_IMPORTED_MODULE_39__.u(metrics, messages),
                            sessionManager = yield _core_session_SessionManager__WEBPACK_IMPORTED_MODULE_11__.S.initialise(cookieStore, localStorage), _internals = new _core_internals_PermutiveInternals__WEBPACK_IMPORTED_MODULE_40__.P(logger, network, userId, viewId, messages, sessionManager, cookieStore, externalData);
                        _internals.metrics = metrics, _internals.identities = identities;
                        const eventsCache = new _core_events_EventsCacheWeb__WEBPACK_IMPORTED_MODULE_5__.K(config, namespace, logger, network, trace, metrics, userId, consentTracking),
                            eventsBatch = new _core_events_PermutiveEventsBatch__WEBPACK_IMPORTED_MODULE_6__.c(eventHandler, api, metrics, userId, network, eventsCache),
                            unprocessedPVC = new _core_events_unprocessed_UnprocessedPageviewComplete__WEBPACK_IMPORTED_MODULE_7__.p({
                                consentTracking,
                                logger,
                                namespace
                            }),
                            customProperties = new _core_events_PermutiveEventCustomProps__WEBPACK_IMPORTED_MODULE_41__.X,
                            queryManagerTransitionDebounceTime = 1e3,
                            queryManagerTransitionMaxDebounceTime = 1e4,
                            queryManager = new _core_queries_query_manager_QueryManagerWeb__WEBPACK_IMPORTED_MODULE_10__.c({
                                customProperties,
                                externalData,
                                logger,
                                messages,
                                network,
                                permutive: permutiveGlobal,
                                permutiveData,
                                queryWorker,
                                realtime: permutiveRealtime,
                                sessionManager,
                                transitionDebounceMaxTime: queryManagerTransitionMaxDebounceTime,
                                transitionDebounceTime: queryManagerTransitionDebounceTime,
                                userId,
                                viewId
                            });
                        _internals.queryManager = queryManager;
                        const permutiveReset = new _core_state_PermutiveReset__WEBPACK_IMPORTED_MODULE_42__.a(config, localStorage, logger, queryManager, permutiveData, eventSourceId, cookieStore, externalData),
                            taskQueue = new _utils_task_queue_PermutiveTaskQueue__WEBPACK_IMPORTED_MODULE_43__.i(messages),
                            stateSync = new _core_state_PermutiveStateSyncWeb__WEBPACK_IMPORTED_MODULE_14__.N(api, network, sessionManager, permutiveData, queryManager, metrics, userId, eventSourceId, (0, _core_state_PermutiveStateSyncWeb__WEBPACK_IMPORTED_MODULE_14__.e)()),
                            thirdParty = new _core_third_party_ThirdPartyBase__WEBPACK_IMPORTED_MODULE_19__.U(network, logger, api, permutiveData, messages, sessionManager, metrics, identities, queryManager, permutiveGlobal, userId),
                            activationManager = new _core_activations_PermutiveActivationManagerWeb__WEBPACK_IMPORTED_MODULE_2__.v(logger, permutiveGlobal, clientContext),
                            state = new _core_state_PermutiveStateWeb__WEBPACK_IMPORTED_MODULE_44__.u(permutiveData, permutiveReset, userId, viewId, eventsCache);
                        _internals.state = state;
                        const permutiveMethods = (0, _PermutiveMethodsWeb__WEBPACK_IMPORTED_MODULE_28__.S)(namespace, logger, api, eventHandler, activationManager, sessionManager, metrics, viewId, userId, network, enrichers, clientContext, unprocessedPVC, eventsBatch, queryManager, stateSync, eventsCache, taskQueue, identities, permutiveReset, messages, _internals.addons, trace, permutiveRealtime, state, customProperties, config, permutiveData, externalData, cookieStore, thirdParty, models, identitiesIngestor, permutiveGlobal, consentTracking);
                        createInternalsSpan.finish(), [].forEach((s => {
                            (0, fp_ts_Either__WEBPACK_IMPORTED_MODULE_45__.Y3)((() => eval(s)), (e => {
                                network.error(Object.assign(Object.assign({}, e), {
                                    message: `Error running custom script ${s}`
                                }), userId.get())
                            }))
                        })), _internals.addBlocker("permutive:queries:initialised"), messages.on("permutive:user:ready", (() => {
                            permutiveGlobal.identify = permutiveMethods.identify.bind(permutiveMethods);
                            const e = identities.extractIdentifyFromQueue({
                                global: permutiveGlobal
                            });
                            e.length > 0 && permutiveGlobal.identify(e)
                        })), _internals.messages.on("permutive:blockers:empty", (() => {
                            permutiveGlobal.on = permutiveMethods.on.bind(permutiveMethods), permutiveGlobal.once = permutiveMethods.once.bind(permutiveMethods), permutiveGlobal.track = permutiveMethods.track.bind(permutiveMethods), permutiveGlobal.trigger = permutiveMethods.trigger.bind(permutiveMethods), permutiveGlobal.query = permutiveMethods.query.bind(permutiveMethods), permutiveGlobal.segment = permutiveMethods.segment.bind(permutiveMethods), permutiveGlobal.segments = permutiveMethods.segments.bind(permutiveMethods), permutiveGlobal.reset = permutiveMethods.reset.bind(permutiveMethods), permutiveGlobal.ready = permutiveMethods.ready.bind(permutiveMethods), permutiveGlobal.addon = permutiveMethods.addon.bind(permutiveMethods), permutiveGlobal.context = clientContext.getContext(), permutiveGlobal.addons = _internals.addons, permutiveGlobal.config = config, permutiveRealtime.setAsReady(), (0, _initialisation_queuedMethods__WEBPACK_IMPORTED_MODULE_26__.LA)(permutiveGlobal.q, _internals, permutiveGlobal, permutiveMethods, network, trace)
                        }));
                        const loadAddonsSpan = trace.startSpan("load_addons");
                        (0, _dynamic_addons_LoadAddons__WEBPACK_IMPORTED_MODULE_20__.C)({
                            _internals,
                            logger,
                            network,
                            permutiveMethods,
                            q: permutiveGlobal.q,
                            clientContext
                        }), loadAddonsSpan.finish();
                        const loadEnrichersSpan = trace.startSpan("load_enrichers"),
                            enricherEnv = {
                                api,
                                config,
                                clientContext,
                                logger,
                                permutiveData,
                                metrics,
                                sessionManager: _internals.sessionManager,
                                enrichers,
                                network
                            },
                            loadEnrichersPromise = (0, _dynamic_enrichment_RegisterEnrichers__WEBPACK_IMPORTED_MODULE_46__.H)(enricherEnv)();
                        loadEnrichersPromise.then((() => {
                            loadEnrichersSpan.finish()
                        })), yield(0, _initialisation_identity__WEBPACK_IMPORTED_MODULE_23__.TZ)({
                            api,
                            clientContext,
                            eventsCache,
                            externalData,
                            global: permutiveGlobal,
                            identities,
                            identitiesIngestor,
                            identityPromise,
                            logger,
                            messages,
                            metrics,
                            models,
                            network,
                            permutiveMethods,
                            queryManager,
                            reset: permutiveReset,
                            stateSync,
                            thirdParty,
                            trace,
                            unprocessedPVC,
                            userId
                        }), (0, _initialisation_identity__WEBPACK_IMPORTED_MODULE_23__.MA)({
                            logger,
                            queryManager,
                            models,
                            trace
                        }), yield loadEnrichersPromise, (0, _initialisation_initialisationLifecycle__WEBPACK_IMPORTED_MODULE_47__.R)(queryManager, messages, metrics, state, logger), sdkReadySpan.finish()
                    }))), (e => `Exception during initialisation. Got ${e}`)),
                    initialisationSequence = (0, fp_ts_function__WEBPACK_IMPORTED_MODULE_48__.zG)(fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.Do, (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.ak)("support", (() => (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.Uo)((0, _initialisation_browserFeatures__WEBPACK_IMPORTED_MODULE_49__.Oc)(window)))), (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.ak)("queryWorker", (() => _initialisation_queryWorkerInit__WEBPACK_IMPORTED_MODULE_25__.F)), (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.ak)("sessionStorage", (() => (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.F2)((0, _initialisation_browserFeatures__WEBPACK_IMPORTED_MODULE_49__.l9)(window)))), (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.ak)("partialTagWithKey", (() => (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.Uo)((0, _initialisation_permutiveTag__WEBPACK_IMPORTED_MODULE_24__.$o)(window)))), (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.ak)("queryParams", (() => (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.F2)((0, _utils_urls_UrlHelpers__WEBPACK_IMPORTED_MODULE_32__.zM)()))), (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.ak)("tag", (({
                        partialTagWithKey: e,
                        queryParams: r,
                        sessionStorage: t
                    }) => (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.F2)((0, _initialisation_permutiveTag__WEBPACK_IMPORTED_MODULE_24__.je)(e, r, t)))), (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.ak)("logger", (({
                        tag: e
                    }) => (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.F2)((0, _core_internals_PermutiveLogger__WEBPACK_IMPORTED_MODULE_50__.SX)(e.config)))), (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.ak)("urls", (({
                        tag: e
                    }) => (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.F2)(new _http_PermutiveUrls__WEBPACK_IMPORTED_MODULE_51__.s(e.config)))), (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.ak)("network", (({
                        tag: e,
                        urls: r,
                        logger: t
                    }) => (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.F2)((0, _initialisation_permutiveTag__WEBPACK_IMPORTED_MODULE_24__.uU)(r, e.config, t)))), (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.ak)("namespace", (({
                        tag: e
                    }) => (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.F2)(new _core_state_PermutiveNamespace__WEBPACK_IMPORTED_MODULE_52__.L(e.config)))), (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.ak)("messages", (() => (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.F2)(new _core_internals_SDKMessages__WEBPACK_IMPORTED_MODULE_53__.Q))), (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.ak)("consentModule", (({
                        tag: e,
                        namespace: r,
                        logger: t,
                        messages: n
                    }) => (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.fF)((() => (0, _Consent__WEBPACK_IMPORTED_MODULE_22__.NY)(n, t, r, e.config))))), (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.ak)("consent", (e => (0, _Consent__WEBPACK_IMPORTED_MODULE_22__.D1)(e))), (0, fp_ts_TaskEither__WEBPACK_IMPORTED_MODULE_29__.tS)((e => initialiseWebSDK(e))))
            },
            6013: (e, r, t) => {
                t.d(r, {
                    Fi: () => D,
                    G6: () => A,
                    Gz: () => y,
                    PM: () => m,
                    PQ: () => P,
                    Z_: () => M,
                    a4: () => f,
                    aq: () => q,
                    b0: () => E,
                    b2: () => _,
                    cO: () => S,
                    eu: () => v,
                    fl: () => I,
                    hk: () => p,
                    j5: () => O,
                    k$: () => b,
                    ke: () => w,
                    lW: () => x,
                    m8: () => k,
                    qh: () => d,
                    rB: () => h,
                    vp: () => g
                });
                var n = t(4268),
                    i = t(3735),
                    o = t(6567),
                    a = t(7209),
                    s = t(6017),
                    c = t(356),
                    u = t(5857),
                    l = t(2751);
                const p = (0, c.hX)((0, s.ff)(c.xb)),
                    d = e => Object.entries(e);

                function m(...e) {
                    return e.reduce(((e, r) => Object.assign(Object.assign({}, e), r)), {})
                }

                function g(e) {
                    let r = 0;
                    for (let t = 0; t < e.length; t++) r = (r << 5) - r + e.charCodeAt(t), r &= r;
                    return r
                }(0, s.ff)(l.xb);

                function _() {
                    let e, r;
                    return {
                        promise: new Promise(((t, n) => {
                            e = t, r = n
                        })),
                        reject: r,
                        resolve: e
                    }
                }

                function f(e, r, t = {}) {
                    const {
                        waitTimeInMs: n,
                        exponentialBackOff: a,
                        maxAttempts: s
                    } = m({
                        waitTimeInMs: 50,
                        exponentialBackOff: !1,
                        maxAttempts: 20
                    }, t);
                    let c = 0;
                    const u = t => new Promise((n => Promise.resolve(r()).then((r => r ? Promise.resolve(e()).then((e => n((0, o.G)(e)))) : (0, i.zG)(c++, (e => e < s ? setTimeout((() => n(u(t * (a ? 2 : 1)))), t) : n(o.YP)))))));
                    return u(n)
                }

                function h(e) {
                    const r = {
                            equals: (r, t) => r[0] === t[0] && e.equals(r[1], t[1])
                        },
                        t = (0, u.Eh)(r);
                    return (0, n.Uz)((e => new Set(Object.entries(e))))(t)
                }

                function v(e, r) {
                    const t = Object.create(null);
                    for (const n of r) t[n] = e[n];
                    return t
                }

                function w(e) {
                    if ("string" == typeof e) {
                        const r = +e;
                        if (!isNaN(r)) return r
                    }
                    return e
                }

                function q(e, r) {
                    const t = r => {
                        if (!n && r) return n = !0, e()
                    };
                    let n = !1;
                    ["blur", "visibilitychange"].forEach((e => {
                        window.addEventListener(e, (() => t(document.hidden && function(e) {
                            return /Mobi|Android/i.test(e)
                        }(r))))
                    })), ["beforeunload", "pagehide"].forEach((e => {
                        window.addEventListener(e, (() => t(!0)))
                    }))
                }

                function b() {
                    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e => (e ^ (window.crypto || window.msCrypto).getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)))
                }

                function y(e) {
                    return 36 === e.length && /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(e)
                }

                function E(e, r) {
                    const t = Object.keys(e),
                        n = t.length,
                        i = {};
                    for (let a = 0; a < n; a++) {
                        const n = t[a],
                            s = r(n, e[n]);
                        (0, o.pC)(s) && (i[n] = s.value)
                    }
                    return i
                }

                function k(...e) {
                    const r = {},
                        t = e.length;
                    for (let n = 0; n < t; n++) {
                        const [t, i] = e[n];
                        r[t] = i
                    }
                    return r
                }

                function I(e, r) {
                    return E(e, ((e, t) => r(e) ? (0, o.G)(t) : o.YP))
                }

                function A(e) {
                    return /^((?!chrome|android).)*safari/i.test(e)
                }

                function D(e) {}

                function P(e, r) {
                    return new Promise((t => {
                        var n;
                        setTimeout((() => {
                            Promise.resolve(e()).then(t)
                        }), null !== (n = null == r ? void 0 : r.timeout) && void 0 !== n ? n : 0)
                    }))
                }

                function S(e, r) {
                    if (e === r) return !0;
                    if (null == e || null == r) return !1;
                    if (e.length !== r.length) return !1;
                    for (let t = 0; t < e.length; ++t)
                        if (e[t] !== r[t]) return !1;
                    return !0
                }

                function x(e) {
                    return (0, a.Zt)(((r, t) => {
                        const n = e.indexOf(r),
                            i = e.indexOf(t);
                        switch (!0) {
                            case -1 === n && -1 === i:
                                return 0;
                            case -1 !== n && -1 === i:
                                return -1;
                            case -1 === n && -1 !== i:
                                return 1;
                            default:
                                return n <= i ? -1 : 1
                        }
                    }))
                }

                function O(e) {
                    return e.reduce(((e, r) => (e[r] = !0, e)), {})
                }

                function M(e, r, t) {
                    return (...n) => {
                        try {
                            return t(...n)
                        } catch (t) {
                            e.error(t, r.get())
                        }
                    }
                }
            },
            998: (e, r, t) => {
                t.d(r, {
                    l: () => n
                });
                class n {
                    constructor(e) {
                        var r;
                        this.config = e, this.shouldUsePerformanceMark = !1, this.placeholderSpan = {
                            spanId: null,
                            finish: () => ({})
                        }, this.shouldUsePerformanceMark = (null === (r = null === window || void 0 === window ? void 0 : window.performance) || void 0 === r ? void 0 : r.mark) && this.config.tracingEnabled
                    }
                    startSpan(e) {
                        var r;
                        if (this.shouldUsePerformanceMark) {
                            const t = this.generateId(),
                                n = `permutive_${e}`,
                                i = `${n}${t}_start`;
                            return null === (r = null === window || void 0 === window ? void 0 : window.performance) || void 0 === r || r.mark(i), {
                                spanId: i,
                                finish: () => {
                                    var e, r;
                                    null === (r = null === (e = null === window || void 0 === window ? void 0 : window.performance) || void 0 === e ? void 0 : e.measure) || void 0 === r || r.call(e, n, i)
                                }
                            }
                        }
                        return this.placeholderSpan
                    }
                    generateId() {
                        return "_" + Math.random().toString(36).substr(2, 9)
                    }
                }
            },
            2236: (e, r, t) => {
                t.d(r, {
                    p: () => i
                });
                var n = t(6567);
                const i = (e, r, t, i) => new Promise(((o, a) => {
                    var s;
                    const c = (0, n.Y3)(e);
                    if ((0, n.pC)(c)) return o(c.value);
                    t.once(r, (() => (0, n.g_)((() => a(new Error(`Error after waiting for event ${r}`))), o)((0, n.Y3)(e))));
                    const u = null !== (s = null == i ? void 0 : i.timeout) && void 0 !== s ? s : 1e4;
                    setTimeout((() => a(new Error(`Event ${r} was not received within the timeout period ${u}ms`))), u)
                }))
            },
            9409: (e, r, t) => {
                t.d(r, {
                    b: () => n
                });
                class n {
                    constructor() {
                        this.events = [], this.listeners = []
                    }
                    newEvent(e, r) {
                        this.events.push([e, r]), [...this.listeners].forEach((t => {
                            this.handle(e, r, t)
                        }))
                    }
                    addListener(e) {
                        this.listeners.push(e);
                        const r = {
                            replay: () => (this.replay(e), r),
                            remove: () => (this.remove(e), r)
                        };
                        return r
                    }
                    handle(e, r, t) {
                        const n = "string" == typeof t.name && e.name === t.name,
                            i = t.name.test && t.name.test(e.name),
                            o = n || i;
                        if (o) try {
                            t.callback(e, r)
                        } catch (e) {
                            window.console && window.console.error && window.console.error("callback error: ", e)
                        }
                        o && t.once && this.remove(t)
                    }
                    replay(e) {
                        let r = -1 !== this.listeners.indexOf(e);
                        for (let t = 0; t < this.events.length && r; t++) this.handle(this.events[t][0], this.events[t][1], e), r = -1 !== this.listeners.indexOf(e)
                    }
                    remove(e) {
                        const r = this.listeners.indexOf(e); - 1 !== r && this.listeners.splice(r, 1)
                    }
                }
            },
            7545: (e, r, t) => {
                t.d(r, {
                    b: () => i
                });
                var n = t(6013);
                class i {
                    constructor(e, r) {
                        this.timeoutDurationInMilliseconds = e, this.maxTimeOutDurationInMilliseconds = r
                    }
                    schedule(e, r = this.timeoutDurationInMilliseconds, t = this.maxTimeOutDurationInMilliseconds) {
                        return this.debounce(e, r, t)
                    }
                    scheduleAccumulated(e, r, t = this.timeoutDurationInMilliseconds, n = this.maxTimeOutDurationInMilliseconds) {
                        return this.debounce(e, t, n, r)
                    }
                    scheduleForPageUnload(e) {
                        return (0, n.aq)(e, navigator.userAgent)
                    }
                    debounce(e, r, t, i) {
                        let o, a, s = null == i ? void 0 : i.empty,
                            c = [];
                        return u => {
                            i && (s = i.concat(s, u));
                            const l = (0, n.b2)();
                            c.push(l);
                            return o && window.clearTimeout(o), o = window.setTimeout((() => {
                                window.clearTimeout(a), a = null;
                                const r = e(i ? s : u);
                                c.forEach((e => e.resolve(r))), s = null == i ? void 0 : i.empty, c = []
                            }), r), a || (a = window.setTimeout((() => {
                                window.clearTimeout(o), a = null;
                                const r = e(i ? s : u);
                                c.forEach((e => e.resolve(r))), s = null == i ? void 0 : i.empty, c = []
                            }), t)), l.promise
                        }
                    }
                }
            },
            7749: (e, r, t) => {
                t.d(r, {
                    i: () => n
                });
                class n {
                    constructor(e) {
                        this.messages = e, this.queue = [], this.nextNotify = null, e.on("permutive:taskQueue:update", (() => {
                            this.execute()
                        }))
                    }
                    add(e) {
                        this.queue.push(e), this.notify()
                    }
                    notify() {
                        const e = () => {
                                this.messages.emit("permutive:taskQueue:update")
                            },
                            r = (new Date).getTime();
                        null === this.nextNotify || this.nextNotify < r - 50 ? (this.nextNotify = r, e()) : this.nextNotify <= r && (this.nextNotify = r + 50, window.setTimeout(e, 50))
                    }
                    execute() {
                        if (0 === this.queue.length) return;
                        let e = !1,
                            r = !1,
                            t = 0;
                        for (let n = 0; n < this.queue.length; n++) {
                            const i = this.queue[n];
                            if (i.complete) t += 1;
                            else if (i.started) r = !0, e = e || i.blocks();
                            else {
                                if (i.waits() && r) break;
                                e || (r = !0, e = e || i.blocks(), i.execute((() => {
                                    this.notify()
                                })))
                            }
                        }
                        this.queue.splice(0, t)
                    }
                    size() {
                        return this.queue.length
                    }
                }
            },
            3629: (e, r, t) => {
                t.d(r, {
                    _Y: () => a,
                    bk: () => o,
                    zM: () => i
                });
                var n = t(3735);
                const i = () => {
                        var e, r;
                        const t = null === (r = null === (e = window.location.href.split("?")[1]) || void 0 === e ? void 0 : e.split("#")[0]) || void 0 === r ? void 0 : r.split("&");
                        return void 0 === t ? {} : t.reduce(((e, r) => {
                            const [t, n] = r.split("=");
                            return Object.assign(Object.assign({}, e), {
                                [t]: n
                            })
                        }), {})
                    },
                    o = e => {
                        if (!e) return "";
                        return (0, n.zG)(e, (e => {
                            const r = e.length - 1;
                            return "/" === e[r] ? e.slice(0, r) : e
                        }))
                    };

                function a(e) {
                    const r = e.match(/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/),
                        t = e.match(/[a-z0-9][a-z0-9-]+\.[a-z.]{2,24}$/i),
                        n = e.match(/localhost/);
                    if ((null == t ? void 0 : t.length) > 0) {
                        const r = e.split(".").reverse();
                        return r.length >= 3 && r[1].match(/^(com|edu|gov|net|mil|org|nom|co|ac|name|info|biz)$/i) ? r[2] + "." + r[1] + "." + r[0] : r[1] + "." + r[0]
                    }
                    return (null == r ? void 0 : r.length) > 0 ? r[0] : (null == n ? void 0 : n.length) > 0 ? "localhost" : ""
                }
            },
            2514: (e, r, t) => {
                t.d(r, {
                    V: () => n
                });
                const n = e => Array.isArray(e) ? {
                    gam: e,
                    xandrSsp: []
                } : e
            },
            6323: (e, r, t) => {
                t.d(r, {
                    R: () => n
                });
                const n = "_pclmc"
            },
            8306: (e, r, t) => {
                t.d(r, {
                    e: () => p
                });
                var n = t(655),
                    i = t(6567);
                const o = (e, r, t, n) => r + (t - r) * n / (Math.pow(2, e) - 1),
                    a = (e, r) => {
                        const t = (e, r) => {
                            const t = e.toString(16);
                            return ("0".repeat(r) + t).slice(Math.min(-r, -t.length))
                        };
                        return `${t(e.getUint32(r),8)}-${t(e.getUint16(r+4),4)}-${t(e.getUint16(r+6),4)}-${t(e.getUint16(r+8),4)}-${t(e.getUint32(r+10),8)}${t(e.getUint16(r+14),4)}`
                    },
                    s = e => {
                        const r = [1, 2],
                            t = e.getInt8(0);
                        if (1 === t) return c(e);
                        if (2 === t) return u(e); {
                            const n = (0, i.Y3)((() => a(e, 1))),
                                o = (0, i.g_)((() => "Couldn't decode model id"), (e => `Model id was ${e}`))(n);
                            throw new Error(`Decoding only supported for version(s): ${r}; Supplied version was ${t}; ${o}`)
                        }
                    },
                    c = e => l(e, 1),
                    u = e => l(e, 2),
                    l = (e, r) => {
                        const t = a(e, 1),
                            n = ((e, r) => {
                                switch (String.fromCharCode(e.getInt8(r))) {
                                    case "1":
                                        return "1p";
                                    case "3":
                                        return "3p"
                                }
                            })(e, 17),
                            i = e.getInt8(18),
                            o = e.getFloat32(19),
                            s = e.getFloat32(23),
                            [c, u] = ((e, r, t, n, i, o) => {
                                const a = {};
                                let s = 0;
                                do {
                                    let t = null;
                                    1 === o ? (s = e.getUint16(r), t = e.getUint16(r + 2), r += 4) : (s = e.getUint32(r), t = e.getUint16(r + 4), r += 6), a[0 === s ? "const" : s] = t.toString(36)
                                } while (0 !== s);
                                return [a, r]
                            })(e, 27, 0, 0, 0, r);
                        return [{
                            version: r,
                            id: t,
                            data_preference: n,
                            weights: c,
                            precision: i,
                            min: o,
                            max: s
                        }, u]
                    };
                class p {
                    constructor(e, r, t, i, a) {
                        this.network = e, this.logger = r, this.api = t, this.metrics = i, this.permutiveData = a, this.MODELS_LAST_UPDATED_KEY = "models_last_updated", this.MODELS_DATA_KEY = "models_data", this.MODELS_SYNC_TIMEOUT_IN_SECONDS = 86400;
                        const s = a.getData(this.MODELS_LAST_UPDATED_KEY),
                            c = i.startTimer("sdk_load_lookalike_models_task_duration_seconds", {}),
                            u = () => this.fetchModels().then((e => (this.permutiveData.setData(this.MODELS_DATA_KEY, e), this.permutiveData.setData(this.MODELS_LAST_UPDATED_KEY, (new Date).getTime()), e))).catch((e => (this.network.error("Failed decoding binary models.\nError: " + e), {}))),
                            l = () => (0, n.mG)(this, void 0, void 0, (function*() {
                                return this.permutiveData.getData(this.MODELS_DATA_KEY)
                            }));
                        this.models = (() => (isNaN(s) || (new Date).getTime() > s + 1e3 * this.MODELS_SYNC_TIMEOUT_IN_SECONDS ? u() : l()).then((e => (e => {
                            const r = Object.keys(e);
                            return r.length > 0 && e[r[0]].hasOwnProperty("precision")
                        })(e) ? (e => {
                            const r = {},
                                t = Object.keys(e),
                                n = e => {
                                    const r = {
                                            "1p": {}
                                        },
                                        {
                                            precision: t,
                                            min: n,
                                            max: i
                                        } = e,
                                        a = e["1p"],
                                        s = Object.keys(a);
                                    for (let e = 0; e < s.length; e++) {
                                        const c = s[e],
                                            u = parseInt(a[c], 36);
                                        r["1p"][c] = o(t, n, i, u)
                                    }
                                    return r
                                };
                            for (let i = 0; i < t.length; i++) {
                                const o = t[i],
                                    a = e[o];
                                r[o] = n(a)
                            }
                            return r
                        })(e) : e)))().then((e => (this.metrics.stopTimer("sdk_load_lookalike_models_task_duration_seconds", c), e)))
                    }
                    getModels() {
                        return this.models
                    }
                    extractModelsFromJsonArray(e, r) {
                        const t = {};
                        for (let n = 0; n < e.length; n++) {
                            const i = e[n],
                                {
                                    id: o,
                                    weights: a
                                } = i;
                            if (void 0 === o || void 0 === a) continue;
                            const s = r(i);
                            Object.keys(a).forEach((e => {
                                s["1p"][e] = a[e]
                            })), t[o] = s
                        }
                        return t
                    }
                    fetchModels() {
                        const e = () => this.api.modelsJson(this.metrics).then((e => this.extractModelsFromJsonArray(e.models, (() => ({
                            "1p": {}
                        }))))).catch((e => (this.network.error("Failed fetching json models.\nError: " + e), {})));
                        return (() => this.api.modelsBinary(this.metrics).then((e => this.extractModelsFromJsonArray(function(e) {
                            const r = [];
                            let t = 0;
                            for (; t < e.byteLength;) {
                                const [n, i] = s(new DataView(e, t));
                                r.push(n), t += i
                            }
                            return r
                        }(e), (({
                            precision: e,
                            max: r,
                            min: t
                        }) => ({
                            "1p": {},
                            precision: e,
                            min: t,
                            max: r
                        }))))).catch((r => (this.logger.log("Failed fetching binary models, reverting to JSON.\nError: " + r), this.metrics.track({
                            name: "sdk_binary_models_missing_count",
                            value: 1,
                            labels: {}
                        }), e()))))()
                    }
                }
            }
        },
        __webpack_module_cache__ = {};

    function __webpack_require__(e) {
        var r = __webpack_module_cache__[e];
        if (void 0 !== r) return r.exports;
        var t = __webpack_module_cache__[e] = {
            exports: {}
        };
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports
    }
    __webpack_require__.n = e => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return __webpack_require__.d(r, {
            a: r
        }), r
    }, __webpack_require__.d = (e, r) => {
        for (var t in r) __webpack_require__.o(r, t) && !__webpack_require__.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
        })
    }, __webpack_require__.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), __webpack_require__.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    var __webpack_exports__ = {};
    (() => {
        var e = __webpack_require__(8198),
            r = __webpack_require__(3735),
            t = __webpack_require__(3760),
            n = __webpack_require__(6567),
            i = __webpack_require__(274),
            o = __webpack_require__(9320),
            a = __webpack_require__(6013),
            s = __webpack_require__(416);
        class c {
            constructor(e, r) {
                this.config = e, this.logger = r, this.defaultReplacementMap = this.filterReplacementMap(this.config.defaultMap), this.replacementMap = this.setReplacementMap(this.config.replacementMap)
            }
            get getReplacementMap() {
                return this.replacementMap
            }
            setReplacementMap(e) {
                return this.replacementMap = Object.assign(Object.assign({}, this.defaultReplacementMap), this.filterReplacementMap(e)), this.logger.debug(`enrichers[${this.config.name}]: replacement map updated`, this.getReplacementMap), this.getReplacementMap
            }
        }
        class u extends c {
            filterReplacementMap(e) {
                return (0, r.zG)(e, a.qh, (0, o.DZ)((e => {
                    const [, r] = e;
                    return (0, s.t)(r) ? n.YP : (0, n.G)(e)
                })), (0, o.u4)({}, ((e, [r, t]) => (void 0 === t || (e[r] = t), e))))
            }
        }
        class l extends c {
            filterReplacementMap(e) {
                return e
            }
        }
        const p = "geoip",
            d = "enricher:geoip",
            m = {},
            g = {
                include_geo: (null == m ? void 0 : m.include_geo) || !0,
                include_isp: (null == m ? void 0 : m.include_isp) || !0,
                include_ip_hash: (null == m ? void 0 : m.include_ip_hash) || !0,
                include_ip: (null == m ? void 0 : m.include_ip) || !1
            },
            _ = (e, t) => {
                const {
                    $ip_geo_info_continent: o,
                    $ip_address: a,
                    $ip_address_hash: s
                } = i.U, c = {
                    $ip_geo_info_continent: o,
                    $ip_address: a,
                    $ip_geo_info: {
                        city: i.U.$ip_geo_info_city,
                        continent: i.U.$ip_geo_info_continent,
                        country: i.U.$ip_geo_info_country,
                        postal_code: i.U.$ip_geo_info_postal_code,
                        province: i.U.$ip_geo_info_province
                    },
                    $ip_address_hash: s,
                    $ip_isp_info: {
                        autonomous_system_number: 0,
                        isp: i.U.$ip_isp_info_isp,
                        autonomous_system_organization: i.U.$ip_isp_info_autonomous_system_organization,
                        organization: i.U.$ip_isp_info_organization
                    }
                }, u = (0, r.zG)((0, n.Y3)((() => ({
                    $ip_geo_info: e.geo_info,
                    $ip_geo_info_continent: e.geo_info.continent,
                    $ip_isp_info: e.isp_info,
                    $ip_address: e.ip,
                    $ip_address_hash: e.ip_hash
                }))), (0, n.fS)((() => ({}))));
                return new l({
                    name: p,
                    defaultMap: c,
                    replacementMap: u
                }, t)
            },
            f = ({
                clientContext: e,
                api: r,
                permutiveData: t,
                metrics: n,
                sessionManager: i,
                enrichers: o,
                network: a,
                logger: s,
                config: c
            }) => {
                const u = r => {
                        r.isp_info && e.updateContext(["isp", r.isp_info.isp], ["organization", r.isp_info.organization], ["autonomous_system_number", r.isp_info.autonomous_system_number], ["autonomous_system_organization", r.isp_info.autonomous_system_organization]), r.geo_info && e.updateContext(["continent", r.geo_info.continent], ["country", r.geo_info.country], ["city", r.geo_info.city], ["province", r.geo_info.province], ["postal_code", r.geo_info.postal_code])
                    },
                    l = t.getData(d);
                return l && l.session_id === i.getSessionId() ? (u(l.data), o.register(_(l.data, s)), Promise.resolve()) : (s.debug("enrichers[geoip]: start HTTP request"), h(r, n, c, g).then((e => (s.debug("enrichers[geoip]: end HTTP request"), u(e), t.setData(d, {
                    session_id: i.getSessionId(),
                    data: e
                }), e))).catch((e => (a.error(`Error while registering the geoip enricher: got ${e}`), null))).then((e => {
                    o.register(_(e, s))
                })))
            },
            h = (e, r, t, i) => {
                const o = [];
                return i.include_geo && o.push(["include", "geo"]), i.include_isp && o.push(["include", "isp"]), i.include_ip && o.push(["include", "ip"]), i.include_ip_hash && o.push(["include", "ip_hash"]), e.reqWithMetrics(r, "sdk_http_geoip_seconds", {
                    url: e.urls.getEndpointUrl("/geoip", (0, n.G)(t.apiVersion), o),
                    method: "GET",
                    contentType: "text/plain",
                    dataType: "json",
                    withCredentials: !1
                })
            },
            v = () => (0, t.B)({
                load: f
            });
        var w = __webpack_require__(655),
            q = __webpack_require__(2751);
        const b = "watson";

        function y(e) {
            if (!e) return [];
            const r = (0, o.xH)(e.filter(Boolean).map((e => (e => {
                const r = e.split("/").filter((e => e));
                return r.map(((e, t) => "/" + r.slice(0, t + 1).join("/")))
            })(e.label))));
            return (0, o.jj)(q.Eq)(r)
        }
        const E = ({
                api: e,
                clientContext: r,
                config: t,
                enrichers: n,
                logger: i,
                metrics: o
            }) => {
                i.debug("enrichers[watson]: is enabled", t.watson.enabled);
                const a = t.watson.enabled ? () => (0, w.mG)(void 0, void 0, void 0, (function*() {
                        const n = yield r.getClient();
                        i.debug("enrichers[watson]: start HTTP request");
                        const a = yield k(e, o, t, n.url);
                        return i.debug("enrichers[watson]: end HTTP request", a), a
                    })) : () => (0, w.mG)(void 0, void 0, void 0, (function*() {
                        return i.debug("enrichers[watson]: stubbing response"), null
                    })),
                    s = a().then((e => {
                        r.updateContext([b, e]), n.register(((e, r) => {
                            var t, n, i, o;
                            const a = {
                                $alchemy_concepts: null == e ? void 0 : e.concepts,
                                $alchemy_document_emotion: null === (n = null === (t = null == e ? void 0 : e.emotion) || void 0 === t ? void 0 : t.document) || void 0 === n ? void 0 : n.emotion,
                                $alchemy_document_sentiment: null === (i = null == e ? void 0 : e.sentiment) || void 0 === i ? void 0 : i.document,
                                $alchemy_entities: null == e ? void 0 : e.entities,
                                $alchemy_entity_names: null === (o = null == e ? void 0 : e.entities) || void 0 === o ? void 0 : o.map((e => e.text)),
                                $alchemy_keywords: null == e ? void 0 : e.keywords,
                                $alchemy_taxonomy: null == e ? void 0 : e.taxonomy,
                                $alchemy_taxonomy_labels: y(null == e ? void 0 : e.taxonomy),
                                $taxonomy_labels: y(null == e ? void 0 : e.taxonomy)
                            };
                            return new u({
                                name: b,
                                defaultMap: {
                                    $alchemy_concepts: [],
                                    $alchemy_document_emotion: null,
                                    $alchemy_document_sentiment: null,
                                    $alchemy_entities: [],
                                    $alchemy_entity_names: [],
                                    $alchemy_keywords: [],
                                    $alchemy_taxonomy: [],
                                    $alchemy_taxonomy_labels: [],
                                    $taxonomy_labels: []
                                },
                                replacementMap: a
                            }, r)
                        })(e, i))
                    }));
                return s.catch((e => {
                    i.error(`Error while registering the watson enricher: got ${e}`), o.track({
                        name: "sdk_watson_classification_fail_count",
                        value: 1,
                        labels: {}
                    })
                })), s
            },
            k = (e, r, t, i) => e.reqWithMetrics(r, "sdk_http_watson_seconds", {
                url: e.urls.getEndpointUrl("/watson", (0, n.G)(t.apiVersion)),
                method: "POST",
                contentType: "text/plain",
                dataType: "json",
                withCredentials: !1,
                payload: {
                    url: i,
                    classify: !0
                }
            }),
            I = () => (0, t.B)({
                load: E
            });
        var A, D = __webpack_require__(6992);
        A = D.f, v(), I(), A().then((0, e.g_)((e => console.warn(`Permutive was not initialized. ${e}`)), r.Q1))
    })()
})();