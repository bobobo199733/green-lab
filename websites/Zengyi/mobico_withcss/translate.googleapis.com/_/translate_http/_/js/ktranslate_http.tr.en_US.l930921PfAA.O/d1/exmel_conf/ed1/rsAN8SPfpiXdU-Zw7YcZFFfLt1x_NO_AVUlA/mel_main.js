"use strict";
this.default_tr = this.default_tr || {};
(function(_) {
    var window = this;
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        _.Mg = function() {
            return _.u("Firefox") || _.u("FxiOS")
        };
        _.Ng = function() {
            return (_.u("Chrome") || _.u("CriOS")) && !_.u("Edge") || _.u("Silk")
        };
        _.Og = function() {
            return _.u("Safari") && !(_.Ng() || _.u("Coast") || _.u("Opera") || _.u("Edge") || _.u("Edg/") || _.u("OPR") || _.Mg() || _.u("Silk") || _.u("Android"))
        };
        _.Pg = function() {
            return _.u("Android") && !(_.Ng() || _.Mg() || _.u("Opera") || _.u("Silk"))
        };
        _.Qg = _.Mg();
        _.Rg = _.Ea() || _.u("iPod");
        _.Sg = _.u("iPad");
        _.Tg = _.Pg();
        _.Ug = _.Ng();
        _.Vg = _.Og() && !_.Fa();

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Yg, bh, eh, fh, lh, nh, oh, sh, uh, vh, Ah, Eh;
        _.Xg = function(a, b) {
            Object.isFrozen(a) || (Wg ? a[Wg] |= b : void 0 !== a.dc ? a.dc |= b : Object.defineProperties(a, {
                dc: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            }))
        };
        Yg = function(a, b) {
            Object.isExtensible(a) && (Wg ? a[Wg] && (a[Wg] &= ~b) : void 0 !== a.dc && (a.dc &= ~b))
        };
        _.Zg = function(a) {
            var b;
            Wg ? b = a[Wg] : b = a.dc;
            return null == b ? 0 : b
        };
        _.$g = function(a, b) {
            Wg ? a[Wg] = b : void 0 !== a.dc ? a.dc = b : Object.defineProperties(a, {
                dc: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        };
        _.ah = function(a) {
            _.Xg(a, 1);
            return a
        };
        bh = function(a) {
            _.Xg(a, 17);
            return a
        };
        _.ch = function(a) {
            return a ? !!(_.Zg(a) & 2) : !1
        };
        _.dh = function(a) {
            _.Xg(a, 16);
            return a
        };
        eh = function(a) {
            if (!Array.isArray(a)) throw Error("ha");
            Yg(a, 16)
        };
        fh = function(a) {
            return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
        };
        _.jh = function(a) {
            switch (typeof a) {
                case "number":
                    return isFinite(a) ? a : String(a);
                case "object":
                    if (a && !Array.isArray(a)) {
                        if (_.gh && null != a && a instanceof Uint8Array) return hh(a);
                        if (a instanceof ih) {
                            var b = a.qb;
                            return null == b ? "" : "string" === typeof b ? b : a.qb = hh(b)
                        }
                    }
            }
            return a
        };
        lh = function(a, b, c, d) {
            if (null != a) {
                if (Array.isArray(a)) a = _.kh(a, b, c, void 0 !== d);
                else if (fh(a)) {
                    var e = {},
                        f;
                    for (f in a) e[f] = lh(a[f], b, c, d);
                    a = e
                } else a = b(a, d);
                return a
            }
        };
        _.kh = function(a, b, c, d) {
            d = d ? !!(_.Zg(a) & 16) : void 0;
            var e = Array.prototype.slice.call(a);
            c(a, e);
            for (a = 0; a < e.length; a++) e[a] = lh(e[a], b, c, d);
            return e
        };
        nh = function(a) {
            return a.ph === _.mh ? a.toJSON() : _.jh(a)
        };
        oh = function() {};
        _.ph = function(a, b) {
            return null == a ? b : a
        };
        sh = function(a, b, c, d, e, f) {
            (a = a.g && a.g[c]) ? (e = f.yg ? _.ah(a.slice()) : a, _.qh(b, c, e)) : (_.gh && d instanceof Uint8Array ? e = d.length ? new ih(new Uint8Array(d)) : rh || (rh = new ih(null)) : (Array.isArray(d) && (e ? _.Xg(d, 2) : d && _.Zg(d) & 1 && f.yg ? (e = Array.prototype.slice.call(d), _.$g(e, (_.Zg(d) | 0) & -51), d = e) : eh(d)), e = d), _.I(b, c, e))
        };
        _.th = function(a) {
            if (!_.ch(a.ha)) return a;
            var b = {
                    yg: !0
                },
                c = _.ch(a.ha);
            if (c && !b.yg) throw Error("la");
            c || eh(a.ha);
            var d = new a.constructor;
            a.ze && (d.ze = a.ze.slice());
            for (var e = a.ha, f = 0; f < e.length; f++) {
                var g = e[f];
                if (f === e.length - 1 && fh(g))
                    for (var k in g) {
                        var l = +k;
                        Number.isNaN(l) ? (d.ab || (d.ab = d.ha[d.Sc + d.Kc] = {}))[k] = g[k] : sh(a, d, l, g[k], c, b)
                    } else sh(a, d, f - a.Kc, g, c, b)
            }
            d.fj = a;
            return d
        };
        uh = {};
        vh = {};
        _.wh = function(a, b) {
            this.g = a === uh && b || "";
            this.h = vh
        };
        _.wh.prototype.Ub = !0;
        _.wh.prototype.ub = function() {
            return this.g
        };
        _.xh = function(a) {
            return new _.wh(uh, a)
        };
        _.yh = function(a, b) {
            return _.fd(a.X, b)
        };
        _.zh = function(a) {
            return a instanceof _.wh && a.constructor === _.wh && a.h === vh ? a.g : "type_error:Const"
        };
        Ah = /^[\w+/_-]+[=]{0,2}$/;
        _.Bh = function(a, b) {
            b = (b || _.q).document;
            return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && Ah.test(a) ? a : "" : ""
        };
        _.Ch = function(a) {
            return _.Bh("script[nonce]", a)
        };
        _.Dh = function(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        };
        Eh = function(a) {
            return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
                return c + d.toUpperCase()
            })
        };
        _.Fh = function(a) {
            if (a instanceof _.ne) return a;
            var b = new _.ne(_.wb);
            _.me(b, 2, a);
            return b
        };
        _.Gh = function(a, b, c, d, e, f, g) {
            var k = new _.kg;
            _.ng.push(k);
            b && k.D("complete", b);
            k.Pc("ready", k.da);
            f && (k.s = Math.max(0, f));
            g && (k.Y = g);
            k.send(a, c, d, e)
        };
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var Hh, hh;
        Hh = {};
        _.Ih = null;
        _.Jh = _.ec || _.fc || !_.Vg && !_.B && "function" == typeof _.q.atob;
        hh = function(a) {
            var b;
            void 0 === b && (b = 0);
            _.Kh();
            b = Hh[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    k = a[e + 1],
                    l = a[e + 2],
                    m = b[g >> 2];
                g = b[(g & 3) << 4 | k >> 4];
                k = b[(k & 15) << 2 | l >> 6];
                l = b[l & 63];
                c[f++] = m + g + k + l
            }
            m = 0;
            l = d;
            switch (a.length - e) {
                case 2:
                    m = a[e + 1], l = b[(m & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | m >> 4] + l + d
            }
            return c.join("")
        };
        _.Kh = function() {
            if (!_.Ih) {
                _.Ih = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Hh[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === _.Ih[f] && (_.Ih[f] = e)
                    }
                }
            }
        };
        var Lh;
        _.gh = "undefined" !== typeof Uint8Array;
        Lh = {};
        var rh, ih = function(a) {
            if (Lh !== Lh) throw Error("fa");
            this.qb = a;
            if (null != a && 0 === a.length) throw Error("ga");
        };
        ih.prototype.yc = function() {
            return null == this.qb
        };
        var Wg = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;
        var Nh, Oh, Ph;
        _.mh = {};
        Nh = Object;
        Oh = Nh.freeze;
        Ph = [];
        _.Xg(Ph, 3);
        _.Qh = Oh.call(Nh, Ph);
        _.Rh = function(a) {
            if (_.ch(a.ha)) throw Error("ja");
        };
        _.Sh = function(a, b, c) {
            return -1 === b ? null : b >= a.Sc ? a.ab ? a.ab[b] : void 0 : (void 0 === c ? 0 : c) && a.ab && (c = a.ab[b], null != c) ? c : a.ha[b + a.Kc]
        };
        _.I = function(a, b, c, d, e) {
            d = void 0 === d ? !1 : d;
            (void 0 === e ? 0 : e) || _.Rh(a);
            a.fj && (a.fj = void 0);
            if (b >= a.Sc || d) return (a.ab || (a.ab = a.ha[a.Sc + a.Kc] = {}))[b] = c, a;
            void 0 !== a.ab && a.Sc >= a.ha.length ? (d = a.ha.length - 1, e = b + a.Kc, e >= d ? (a.ha[d] = void 0, a.ha[e] = c, a.ha.push(a.ab)) : a.ha[e] = c) : a.ha[b + a.Kc] = c;
            void 0 !== a.ab && b in a.ab && delete a.ab[b];
            return a
        };
        _.Th = function(a, b, c, d) {
            var e = d = void 0 === d ? !1 : d,
                f = _.Sh(a, c, e);
            var g = !1;
            var k = null == f || "object" !== typeof f || (g = Array.isArray(f)) || f.ph !== _.mh ? g ? new b(f) : void 0 : f;
            k !== f && null != k && (_.I(a, c, k, e, !0), _.Xg(k.ha, _.Zg(a.ha) & -33));
            b = k;
            if (null == b) return b;
            _.ch(b.ha) && !_.ch(a.ha) && (b = _.th(b), _.I(a, c, b, d));
            return b
        };
        _.Uh = function(a, b, c) {
            _.Rh(a);
            null == c && (c = void 0);
            return _.I(a, b, c)
        };
        _.qh = function(a, b, c) {
            _.Rh(a);
            if (null != c) {
                var d = _.ah([]);
                for (var e = !1, f = 0; f < c.length; f++) d[f] = c[f].ha, e = e || _.ch(d[f]);
                a.g || (a.g = {});
                a.g[b] = c;
                c = d;
                e ? Yg(c, 8) : _.Xg(c, 8)
            } else a.g && (a.g[b] = void 0), d = _.Qh;
            return _.I(a, b, d)
        };
        _.J = function(a, b, c) {
            null == a && (a = _.Vh);
            _.Vh = null;
            var d = this.constructor.g || 0,
                e = 0 < d,
                f = this.constructor.h,
                g, k = !1;
            if (a) {
                if (g = !!(_.Zg(a) & 16)) k = _.Zg(a), _.$g(a, k | 32), k = !!(k & 32)
            } else g = f ? [f] : [], _.Xg(g, 48), a = g, g = !0;
            e && 0 < a.length && fh(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
            this.Kc = (f ? 0 : -1) - d;
            this.g = void 0;
            this.ha = a;
            a: {
                f = this.ha.length;d = f - 1;
                if (f && (f = this.ha[d], fh(f))) {
                    this.ab = f;
                    b = Object.keys(f);
                    0 < b.length && _.Ub(b, isNaN) ? this.Sc = Number.MAX_VALUE : this.Sc = d - this.Kc;
                    break a
                }
                void 0 !== b && -1 < b ? (this.Sc = Math.max(b,
                    d + 1 - this.Kc), this.ab = void 0) : this.Sc = Number.MAX_VALUE
            }
            if (!e && this.ab && "g" in this.ab) throw Error("na");
            if (c)
                for (e = g && !k ? bh : _.ah, b = 0; b < c.length; b++) g = c[b], (k = _.Sh(this, g)) ? Array.isArray(k) && e(k) : _.I(this, g, _.Qh, !1, !0)
        };
        _.J.prototype.toJSON = function() {
            var a = this.ha;
            return _.Mh ? a : _.kh(a, nh, oh)
        };
        _.Wh = function(a, b) {
            if (null == b || "" == b) return new a;
            b = JSON.parse(b);
            if (!Array.isArray(b)) throw Error(void 0);
            _.Vh = b = _.dh(b);
            a = new a(b);
            _.Vh = null;
            return a
        };
        _.J.prototype.ph = _.mh;
        _.J.prototype.toString = function() {
            return this.ha.toString()
        };
        var Yh;
        _.K = function(a, b, c) {
            if ("string" === typeof b)(b = _.Xh(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d],
                        f = _.Xh(c, d);
                    f && (c.style[f] = e)
                }
        };
        Yh = {};
        _.Xh = function(a, b) {
            var c = Yh[b];
            if (!c) {
                var d = _.Dh(b);
                c = d;
                void 0 === a.style[d] && (d = (_.fc ? "Webkit" : _.ec ? "Moz" : _.B ? "ms" : null) + Eh(d), void 0 !== a.style[d] && (c = d));
                Yh[b] = c
            }
            return c
        };
        _.Zh = _.ec ? "MozUserSelect" : _.fc || _.cc ? "WebkitUserSelect" : null;

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var di;
        _.$h = {};
        _.ai = function(a) {
            return a instanceof _.Cc && a.constructor === _.Cc ? a.g : "type_error:SafeUrl"
        };
        _.bi = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
        _.ci = function(a) {
            if (a instanceof _.Cc) return a;
            a = "object" == typeof a && a.Ub ? a.ub() : String(a);
            _.bi.test(a) || (a = "about:invalid#zClosurez");
            return _.Dc(a)
        };
        di = {};
        _.ei = function(a, b) {
            this.g = b === di ? a : "";
            this.Ub = !0
        };
        _.ei.prototype.toString = function() {
            return this.g.toString()
        };
        _.ei.prototype.ub = function() {
            return this.g
        };
        _.fi = {};
        _.Kf = function() {
            throw Error("Q");
        };
        _.Kf.prototype.xg = null;
        _.Kf.prototype.za = function() {
            return this.g
        };
        _.Kf.prototype.toString = function() {
            return this.g
        };
        var gi = function() {
            _.Kf.call(this)
        };
        _.y(gi, _.Kf);
        gi.prototype.pc = _.fi;
        var hi = function() {
            _.Kf.call(this)
        };
        _.y(hi, _.Kf);
        hi.prototype.pc = _.$h;
        hi.prototype.xg = 1;
        hi.prototype.h = function() {
            return new _.ei(this.toString(), di)
        };
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        _.L = function(a) {
            function b(c) {
                this.g = c
            }
            b.prototype = a.prototype;
            return function(c, d) {
                c = new b(String(c));
                void 0 !== d && (c.xg = d);
                return c
            }
        }(gi);
        _.ii = function(a) {
            function b(c) {
                this.g = c
            }
            b.prototype = a.prototype;
            return function(c) {
                return new b(String(c))
            }
        }(hi);

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var ji, ki, li, mi, oi, qi, si, ui, vi, wi, Ei, Fi, Gi, Hi, Ii, Ji, Li, Ki, Ni, Oi, Pi, Qi, Ri, Si, Ui, Vi, Xi, Wi, $i, bj, dj, fj, N, lj, nj, oj, qj, rj, sj, tj, uj, vj, wj, xj, yj, zj, Aj, Bj, Cj, Dj, ri, ti, zi, Fj, Gj, Ij, Kj, Mj, Nj, Oj, Qj, Rj, Sj, Uj, Vj, Wj, Xj, Zj, ak, ck, dk, ek, fk, gk, ik, jk, kk, lk, mk, ok, pk, qk, rk, sk, tk, uk, vk, wk, xk, yk, zk, Ak, Pk, Qk, Rk, Sk, Tk, Bi, Wk, Yk, Zk, $k, bl, cl, dl, el, fl, gl, il, jl, kl, ml, nl, ol, pl, ql, rl, sl, vl, xl, yl, Al, Bl, Cl, Dl, El, Fl, Hl, Il, Jl, Ll, Nl, Pl, Rl;
        ji = function(a, b) {
            a = a.split("%s");
            for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
            _.aa.call(this, c + a[d])
        };
        ki = function(a, b, c) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        };
        li = function(a, b, c, d) {
            Array.prototype.splice.apply(a, ki(arguments, 1))
        };
        mi = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        };
        oi = function() {
            var a = ni,
                b;
            for (b in a) return !1;
            return !0
        };
        _.pi = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        };
        qi = function(a) {
            for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if ("]" == e) {
                    if (b) return !1;
                    b = !0
                } else if ("[" == e) {
                    if (!b) return !1;
                    b = !1
                } else if (!b && !c.test(e)) return !1
            }
            return b
        };
        si = function(a) {
            return a.replace(_.Jc, function(b, c, d, e) {
                var f = "";
                d = d.replace(/^(['"])(.*)\1$/, function(g, k, l) {
                    f = k;
                    return l
                });
                b = (ri(d) || _.Ec).ub();
                return c + f + b + f + e
            })
        };
        ui = function(a) {
            if (a instanceof _.Cc) return 'url("' + _.ai(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            if (a instanceof _.wh) a = _.zh(a);
            else {
                a = String(a);
                var b = a.replace(_.Kc, "$1").replace(_.Kc, "$1").replace(_.Jc, "url");
                if (_.Ic.test(b)) {
                    if (b = !ti.test(a)) {
                        for (var c = b = !0, d = 0; d < a.length; d++) {
                            var e = a.charAt(d);
                            "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                        }
                        b = b && c && qi(a)
                    }
                    a = b ? si(a) : "zClosurez"
                } else a = "zClosurez"
            }
            if (/[{;}]/.test(a)) throw new ji("Value does not allow [{;}], got: %s.", [a]);
            return a
        };
        vi = function(a) {
            return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
        };
        wi = function(a) {
            var b = {
                nonce: _.Ch()
            };
            b = void 0 === b ? {} : b;
            a = _.Db(a).toString();
            var c = "<script";
            b.id && (c += ' id="' + vi(b.id) + '"');
            b.nonce && (c += ' nonce="' + vi(b.nonce) + '"');
            b.type && (c += ' type="' + vi(b.type) + '"');
            return _.Oc(c + (">" + a + "\x3c/script>"))
        };
        _.xi = function(a) {
            if ("script" === a.tagName.toLowerCase()) throw Error("L");
            if ("style" === a.tagName.toLowerCase()) throw Error("M");
        };
        _.Ai = function(a) {
            return _.za(a) ? a instanceof _.Kf ? _.yi(a) : zi("zSoyz") : zi(String(a))
        };
        _.Di = function(a, b) {
            b = a(b || Bi, void 0);
            a = _.yh(_.Zc(), "DIV");
            b = _.Ai(b);
            _.Ci(a, b);
            1 == a.childNodes.length && (b = a.firstChild, 1 == b.nodeType && (a = b));
            return a
        };
        Ei = function(a, b, c) {
            Object.defineProperties(a, {
                ah: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                },
                gj: {
                    value: c,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        };
        Fi = function(a) {
            return null != a.ah
        };
        Gi = function(a) {
            return a.ah
        };
        Hi = function(a, b) {
            a.ah = b
        };
        Ii = function(a) {
            return a.gj
        };
        Ji = function(a, b) {
            return a.gj = b
        };
        Li = function(a, b) {
            var c = a[b - 1];
            if (null == c || Ki(c)) a = a[a.length - 1], Ki(a) && (c = a[b]);
            return c
        };
        Ki = function(a) {
            return null != a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
        };
        Ni = function(a) {
            var b = Mi(a);
            return b > a.length ? null : a[b - 1]
        };
        Oi = function(a, b) {
            var c = Mi(a);
            if (b < c) return a[b - 1];
            var d;
            return null == (d = Ni(a)) ? void 0 : d[b]
        };
        Pi = function(a, b, c) {
            a = Oi(a, b);
            return null == a ? c : a
        };
        Qi = function(a, b) {
            a = Oi(a, b);
            return Array.isArray(a) ? a.length : 0
        };
        Ri = function(a, b) {
            return !!Pi(a, b, !1)
        };
        Si = function(a, b) {
            return Pi(a, b, 0)
        };
        Ui = function(a, b, c, d) {
            var e;
            (a = null == (e = Oi(a, b)) ? void 0 : e[d]) ? (d = Ti(a), c = null == d ? new c(a) : d) : c = new c;
            return c
        };
        Vi = function(a, b) {
            return Pi(a, b, "")
        };
        Xi = function(a, b) {
            return a === b ? !0 : _.Ub(a, function(c, d) {
                if (Ki(c)) {
                    d = c;
                    for (var e in d)
                        if (c = d[e], !Wi(c, Li(b, +e))) return !1;
                    return !0
                }
                return Wi(c, Li(b, d + 1))
            }) && _.Ub(b, function(c, d) {
                if (Ki(c)) {
                    for (var e in c)
                        if (null == Li(a, +e)) return !1;
                    return !0
                }
                return null == c === (null == Li(a, d + 1))
            })
        };
        Wi = function(a, b) {
            return a === b || null == a && null == b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b) ? !0 : Array.isArray(a) && Array.isArray(b) ? Xi(a, b) : !1
        };
        $i = function(a, b, c) {
            var d = Array.prototype.slice.call(arguments);
            d.splice(0, 2);
            d = "l" + a.toString(16) + "i" + b.toString(16) + (d.length ? "-" + d.join("_") : "");
            _.Yi ? _.Yi.push(d) : _.Zi(d)
        };
        bj = function() {
            var a = _.Wh(aj, '[null,null,null,null,null,"(function(){/*\\n\\n Copyright The Closure Library Authors.\\n SPDX-License-Identifier: Apache-2.0\\n*/\\n\'use strict\';var e\\u003dthis||self;function f(a){return a};/*\\n\\n SPDX-License-Identifier: Apache-2.0\\n*/\\nvar h;function k(a,c){this.g\\u003dc\\u003d\\u003d\\u003dl?a:\\"\\"}k.prototype.toString\\u003dfunction(){return this.g+\\"\\"};var l\\u003d{};function m(a){if(void 0\\u003d\\u003d\\u003dh){var c\\u003dnull;var b\\u003de.trustedTypes;if(b\\u0026\\u0026b.createPolicy){try{c\\u003db.createPolicy(\\"goog#html\\",{createHTML:f,createScript:f,createScriptURL:f})}catch(d){e.console\\u0026\\u0026e.console.error(d.message)}h\\u003dc}else h\\u003dc}a\\u003d(c\\u003dh)?c.createScriptURL(a):a;return new k(a,l)};if(!function(){if(self.origin)return\\"null\\"\\u003d\\u003d\\u003dself.origin;if(\\"\\"!\\u003d\\u003dlocation.host)return!1;try{return window.parent.escape(\\"\\"),!1}catch(a){return!0}}())throw Error(\\"sandboxing error\\");\\nwindow.addEventListener(\\"message\\",function(a){var c\\u003da.ports[0];a\\u003da.data;var b\\u003da.callbackName.split(\\".\\"),d\\u003dwindow;\\"window\\"\\u003d\\u003d\\u003db[0]\\u0026\\u0026b.shift();for(var g\\u003d0;g\\u003cb.length-1;g++)d[b[g]]\\u003d{},d\\u003dd[b[g]];d[b[b.length-1]]\\u003dfunction(n){c.postMessage(JSON.stringify(n))};b\\u003ddocument.createElement(\\"script\\");a\\u003dm(a.url);b.src\\u003da instanceof k\\u0026\\u0026a.constructor\\u003d\\u003d\\u003dk?a.g:\\"type_error:TrustedResourceUrl\\";document.body.appendChild(b)},!0);}).call(this);\\n"]');
            if (!a) return null;
            a = _.Sh(a, 6);
            var b;
            null === a || void 0 === a ? b = null : b = _.Eb(a);
            return b
        };
        _.cj = function(a) {
            return {
                display_language: a,
                key: "AIzaSyBWDj0QJvVIx8XOhRegXX5_SrRWxhT5Hs4"
            }
        };
        _.ej = function(a) {
            var b = a.targetLanguages || [];
            return {
                sl: dj(a.sourceLanguages || []),
                tl: dj(b)
            }
        };
        dj = function(a) {
            var b = {};
            a = _.Ua(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[c.language] = c.name;
            return b
        };
        fj = function(a) {
            _.M.call(this);
            a = a || {};
            this.id = a.id || this.Lb();
            this.hh = a.hh || "";
            this.Gf = a.Gf || null;
            this.Hf = a.Hf || null;
            this.ef = a.ef || !1;
            this.className = a.className || null;
            this.C = null
        };
        _.jj = function() {
            for (var a in Object.prototype) {
                _.Ac = function(d, e, f) {
                    for (var g in d) d[g] !== Object.prototype[g] && e.call(f, d[g], g, d)
                };
                break
            }
            var b = _.sb(),
                c = gj(hj);
            c && "function" == typeof c && (1 == _.ij ? c() : function e() {
                var f = document.readyState;
                "undefined" == _.mb(f) || "complete" == f || "interactive" == f || 2E4 <= _.sb() - b ? c() : window.setTimeout(e, 500)
            }())
        };
        _.kj = function(a, b) {
            a.bb ? b() : (a.wa || (a.wa = []), a.wa.push(b))
        };
        N = function(a, b) {
            this.x = void 0 !== a ? a : 0;
            this.y = void 0 !== b ? b : 0
        };
        N.prototype.ceil = function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this
        };
        N.prototype.floor = function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this
        };
        N.prototype.round = function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this
        };
        N.prototype.translate = function(a, b) {
            a instanceof N ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
            return this
        };
        lj = function(a) {
            return new N(a.x, a.y)
        };
        _.mj = function(a, b, c, d) {
            a = d || a;
            b = b && "*" != b ? String(b).toUpperCase() : "";
            if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
            if (c && a.getElementsByClassName) {
                a = a.getElementsByClassName(c);
                if (b) {
                    d = {};
                    for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                    d.length = e;
                    return d
                }
                return a
            }
            a = a.getElementsByTagName(b || "*");
            if (c) {
                d = {};
                for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && _.ua(b.split(/\s+/), c) && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        };
        nj = function(a, b) {
            var c = b || document;
            if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
            else {
                c = document;
                var d = b || c;
                a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : _.mj(c, "*", a, b)[0] || null
            }
            return a || null
        };
        oj = function(a) {
            return a.scrollingElement ? a.scrollingElement : !_.fc && _.cd(a) ? a.documentElement : a.body || a.documentElement
        };
        _.pj = function(a) {
            var b = oj(a);
            a = a.parentWindow || a.defaultView;
            return _.B && _.vc("10") && a.pageYOffset != b.scrollTop ? new N(b.scrollLeft, b.scrollTop) : new N(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        };
        qj = function(a) {
            a.h = {};
            a.g.length = 0;
            a.size = 0;
            a.j = 0
        };
        rj = function(a) {
            if (a.Cb && "function" == typeof a.Cb) return a.Cb();
            if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
            if ("string" === typeof a) return a.split("");
            if (_.da(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return _.Ha(a)
        };
        sj = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
        _.yi = function(a) {
            if (a.pc !== _.fi) throw Error("R");
            return _.Oc(a.toString())
        };
        tj = function(a) {
            a.nd = void 0;
            a.Ia = function() {
                return a.nd ? a.nd : a.nd = new a
            }
        };
        uj = {};
        _.y(ji, _.aa);
        ji.prototype.name = "AssertionError";
        vj = /&/g;
        wj = /</g;
        xj = />/g;
        yj = /"/g;
        zj = /'/g;
        Aj = /\x00/g;
        Bj = /[\x00&<>"']/;
        Cj = function(a) {
            if (!Bj.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(vj, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(wj, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(xj, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(yj, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(zj, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Aj, "&#0;"));
            return a
        };
        Dj = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            command: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        };
        ri = function(a) {
            if (a instanceof _.Cc) return a;
            a = "object" == typeof a && a.Ub ? a.ub() : String(a);
            _.bi.test(a) ? a = _.Dc(a) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(sj) ? _.Dc(a) : null);
            return a
        };
        _.Ej = function(a) {
            return a instanceof _.Gc && a.constructor === _.Gc ? a.g : "type_error:SafeStyle"
        };
        ti = /\/\*/;
        zi = function(a) {
            return a instanceof _.Mc ? a : _.Oc(Cj("object" == typeof a && a.Ub ? a.ub() : String(a)))
        };
        Fj = /^[a-zA-Z0-9-]+$/;
        Gj = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
        _.Hj = function(a) {
            if (!Fj.test(a)) throw Error("A");
            if (a.toUpperCase() in Gj) throw Error("A");
        };
        Ij = function(a) {
            var b = zi(_.Qc),
                c = [],
                d = function(e) {
                    Array.isArray(e) ? e.forEach(d) : (e = zi(e), c.push(_.Nc(e).toString()))
                };
            a.forEach(d);
            return _.Oc(c.join(_.Nc(b).toString()))
        };
        _.Jj = function(a) {
            return Ij(Array.prototype.slice.call(arguments))
        };
        Kj = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        };
        _.Lj = function(a) {
            var b = "";
            if (a)
                for (var c in a)
                    if (Object.prototype.hasOwnProperty.call(a, c)) {
                        if (!Fj.test(c)) throw Error("A");
                        var d = a[c];
                        if (null != d) {
                            var e = c;
                            if (d instanceof _.wh) d = _.zh(d);
                            else if ("style" == e.toLowerCase()) {
                                var f = d;
                                if (!_.za(f)) throw Error("A");
                                if (!(f instanceof _.Gc)) {
                                    d = void 0;
                                    var g = "";
                                    for (d in f)
                                        if (Object.prototype.hasOwnProperty.call(f, d)) {
                                            if (!/^[-_a-zA-Z0-9]+$/.test(d)) throw Error("z`" + d);
                                            var k = f[d];
                                            null != k && (k = Array.isArray(k) ? k.map(ui).join(" ") : ui(k), g += d + ":" + k + ";")
                                        }
                                    f = g ? new _.Gc(g,
                                        _.Fc) : _.Hc
                                }
                                d = _.Ej(f)
                            } else {
                                if (/^on/i.test(e)) throw Error("A");
                                if (e.toLowerCase() in Kj)
                                    if (d instanceof _.Gb) d = _.Ma(d).toString();
                                    else if (d instanceof _.Cc) d = _.ai(d);
                                else if ("string" === typeof d) d = (ri(d) || _.Ec).ub();
                                else throw Error("A");
                            }
                            d.Ub && (d = d.ub());
                            e = e + '="' + Cj(String(d)) + '"';
                            b += " " + e
                        }
                    }
            return b
        };
        Mj = function(a, b, c) {
            _.Hj(String(a));
            a = String(a);
            b = "<" + a + _.Lj(b);
            null == c ? c = [] : Array.isArray(c) || (c = [c]);
            !0 === Dj[a.toLowerCase()] ? b += ">" : (c = _.Jj(c), b += ">" + _.Nc(c).toString() + "</" + a + ">");
            return _.Oc(b)
        };
        _.Ci = function(a, b) {
            if ((0, _.Sc)())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = _.Nc(b)
        };
        Nj = function(a, b) {
            b = b instanceof _.Cc ? b : _.ci(b);
            a.action = _.ai(b)
        };
        Oj = function(a, b) {
            return new N(a.x - b.x, a.y - b.y)
        };
        _.Pj = function(a) {
            return a.replace(/\xa0|[ \t]+/g, " ")
        };
        Qj = function(a) {
            return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
        };
        Rj = function(a) {
            return a.replace(/^[\s\xa0]+/, "")
        };
        Sj = function(a) {
            return a.replace(/[\s\xa0]+$/, "")
        };
        _.Tj = function(a) {
            return a = Cj(a)
        };
        Uj = function(a) {
            return a.replace(/&([^;]+);/g, function(b, c) {
                switch (c) {
                    case "amp":
                        return "&";
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return '"';
                    default:
                        return "#" != c.charAt(0) || (c = Number("0" + c.slice(1)), isNaN(c)) ? b : String.fromCharCode(c)
                }
            })
        };
        Vj = /&([^;\s<&]+);?/g;
        Wj = function(a) {
            var b = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"'
            };
            var c = _.q.document.createElement("div");
            return a.replace(Vj, function(d, e) {
                var f = b[d];
                if (f) return f;
                "#" == e.charAt(0) && (e = Number("0" + e.slice(1)), isNaN(e) || (f = String.fromCharCode(e)));
                f || (f = _.Oc(d + " "), _.Ci(c, f), f = c.firstChild.nodeValue.slice(0, -1));
                return b[d] = f
            })
        };
        Xj = function(a) {
            return -1 != a.indexOf("&") ? "document" in _.q ? Wj(a) : Uj(a) : a
        };
        _.Yj = function(a) {
            return _.$c(document, a)
        };
        Zj = function(a, b) {
            return (b || document).getElementsByTagName(String(a))
        };
        ak = function() {
            var a = document;
            return a.querySelectorAll && a.querySelector ? a.querySelectorAll(".alt-edited") : _.mj(document, "*", "alt-edited")
        };
        _.bk = function(a, b, c) {
            return _.hd(document, arguments)
        };
        ck = function() {
            var a = Mj("WBR"),
                b = document;
            var c = _.fd(b, "DIV");
            _.B ? (a = _.Jj(_.Rc, a), _.Ci(c, a), c.removeChild(c.firstChild)) : _.Ci(c, a);
            if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
            else {
                for (b = b.createDocumentFragment(); c.firstChild;) b.appendChild(c.firstChild);
                c = b
            }
            return c
        };
        dk = function(a) {
            if (1 != a.nodeType) return !1;
            switch (a.tagName) {
                case "APPLET":
                case "AREA":
                case "BASE":
                case "BR":
                case "COL":
                case "COMMAND":
                case "EMBED":
                case "FRAME":
                case "HR":
                case "IMG":
                case "INPUT":
                case "IFRAME":
                case "ISINDEX":
                case "KEYGEN":
                case "LINK":
                case "NOFRAMES":
                case "NOSCRIPT":
                case "META":
                case "OBJECT":
                case "PARAM":
                case "SCRIPT":
                case "SOURCE":
                case "STYLE":
                case "TRACK":
                case "WBR":
                    return !1
            }
            return !0
        };
        ek = function(a, b) {
            _.gd(_.C(a), a, arguments, 1)
        };
        fk = function(a, b) {
            b.parentNode && b.parentNode.insertBefore(a, b)
        };
        gk = function(a, b) {
            b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
        };
        _.hk = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        };
        ik = function(a) {
            return _.za(a) && 1 == a.nodeType
        };
        jk = function(a, b) {
            for (; b = b.previousSibling;)
                if (b == a) return -1;
            return 1
        };
        kk = function(a, b) {
            var c = a.parentNode;
            if (c == b) return -1;
            for (; b.parentNode != c;) b = b.parentNode;
            return jk(b, a)
        };
        lk = function(a, b) {
            if (a == b) return 0;
            if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
            if (_.B && !(9 <= Number(_.yc))) {
                if (9 == a.nodeType) return -1;
                if (9 == b.nodeType) return 1
            }
            if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
                var c = 1 == a.nodeType,
                    d = 1 == b.nodeType;
                if (c && d) return a.sourceIndex - b.sourceIndex;
                var e = a.parentNode,
                    f = b.parentNode;
                return e == f ? jk(a, b) : !c && _.md(e, b) ? -1 * kk(a, b) : !d && _.md(f, a) ? kk(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
            }
            d = _.C(a);
            c = d.createRange();
            c.selectNode(a);
            c.collapse(!0);
            a = d.createRange();
            a.selectNode(b);
            a.collapse(!0);
            return c.compareBoundaryPoints(_.q.Range.START_TO_END, a)
        };
        mk = function(a) {
            var b, c = arguments.length;
            if (!c) return null;
            if (1 == c) return arguments[0];
            var d = [],
                e = Infinity;
            for (b = 0; b < c; b++) {
                for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
                d.push(f);
                e = Math.min(e, f.length)
            }
            f = null;
            for (b = 0; b < e; b++) {
                g = d[0][b];
                for (var k = 1; k < c; k++)
                    if (g != d[k][b]) return f;
                f = g
            }
            return f
        };
        _.nk = function(a) {
            return a.contentDocument || a.contentWindow.document
        };
        ok = function(a) {
            return a.hasAttribute("tabindex")
        };
        pk = function(a) {
            a = a.tabIndex;
            return "number" === typeof a && 0 <= a && 32768 > a
        };
        qk = function(a, b) {
            b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
        };
        rk = function(a) {
            var b = [];
            _.qd(a, b, !1);
            return b.join("")
        };
        sk = function(a, b) {
            if (!a) return 0;
            if (_.zd(a)) return a.Kb ? _.Gd(a.Kb, b) : 0;
            a = _.Nd(a);
            if (!a) return 0;
            var c = 0;
            b = b && b.toString();
            for (var d in a.g)
                if (!b || d == b)
                    for (var e = a.g[d].concat(), f = 0; f < e.length; ++f) _.Sd(e[f]) && ++c;
            return c
        };
        tk = function(a, b, c) {
            this.promise = a;
            this.resolve = b;
            this.reject = c
        };
        uk = function() {
            var a, b, c = new _.ne(function(d, e) {
                a = d;
                b = e
            });
            return new tk(c, a, b)
        };
        vk = function(a) {
            if (a instanceof _.hf) return a;
            if ("function" == typeof a.Xa) return a.Xa(!1);
            if (_.da(a)) {
                var b = 0,
                    c = new _.hf;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return _.jf;
                        if (b in a) return {
                            value: a[b++],
                            done: !1
                        };
                        b++
                    }
                };
                return c
            }
            throw Error("I");
        };
        wk = function(a, b, c) {
            for (a = vk(a);;) {
                var d = a.next();
                if (d.done) break;
                if (!b.call(c, d.value, void 0, a)) break
            }
        };
        xk = function(a) {
            if (a.rc && "function" == typeof a.rc) return a.rc();
            if (!a.Cb || "function" != typeof a.Cb) {
                if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
                if (!("undefined" !== typeof Set && a instanceof Set)) {
                    if (_.da(a) || "string" === typeof a) {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return mi(a)
                }
            }
        };
        yk = function(a, b, c) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
            else if (_.da(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
            else
                for (var d = xk(a), e = rj(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
        };
        zk = function(a, b) {
            this.h = this.g = null;
            this.j = a || null;
            this.l = !!b
        };
        Ak = function(a) {
            a.g || (a.g = new Map, a.h = 0, a.j && _.Hf(a.j, function(b, c) {
                a.add(_.Wc(b), c)
            }))
        };
        zk.prototype.add = function(a, b) {
            Ak(this);
            this.j = null;
            a = Bk(this, a);
            var c = this.g.get(a);
            c || this.g.set(a, c = []);
            c.push(b);
            this.h += 1;
            return this
        };
        zk.prototype.remove = function(a) {
            Ak(this);
            a = Bk(this, a);
            return this.g.has(a) ? (this.j = null, this.h -= this.g.get(a).length, this.g.delete(a)) : !1
        };
        zk.prototype.yc = function() {
            Ak(this);
            return 0 == this.h
        };
        var Ck = function(a, b) {
            Ak(a);
            b = Bk(a, b);
            return a.g.has(b)
        };
        _.h = zk.prototype;
        _.h.forEach = function(a, b) {
            Ak(this);
            this.g.forEach(function(c, d) {
                c.forEach(function(e) {
                    a.call(b, e, d, this)
                }, this)
            }, this)
        };
        _.h.rc = function() {
            Ak(this);
            for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
                for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
            return c
        };
        _.h.Cb = function(a) {
            Ak(this);
            var b = [];
            if ("string" === typeof a) Ck(this, a) && (b = b.concat(this.g.get(Bk(this, a))));
            else {
                a = Array.from(this.g.values());
                for (var c = 0; c < a.length; c++) b = b.concat(a[c])
            }
            return b
        };
        _.h.set = function(a, b) {
            Ak(this);
            this.j = null;
            a = Bk(this, a);
            Ck(this, a) && (this.h -= this.g.get(a).length);
            this.g.set(a, [b]);
            this.h += 1;
            return this
        };
        _.h.get = function(a, b) {
            if (!a) return b;
            a = this.Cb(a);
            return 0 < a.length ? String(a[0]) : b
        };
        var Dk = function(a, b, c) {
            a.remove(b);
            0 < c.length && (a.j = null, a.g.set(Bk(a, b), _.xa(c)), a.h += c.length)
        };
        zk.prototype.toString = function() {
            if (this.j) return this.j;
            if (!this.g) return "";
            for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
                var d = b[c],
                    e = _.Vc(d);
                d = this.Cb(d);
                for (var f = 0; f < d.length; f++) {
                    var g = e;
                    "" !== d[f] && (g += "=" + _.Vc(d[f]));
                    a.push(g)
                }
            }
            return this.j = a.join("&")
        };
        var Ek = function(a) {
                var b = new zk;
                b.j = a.j;
                a.g && (b.g = new Map(a.g), b.h = a.h);
                return b
            },
            Bk = function(a, b) {
                b = String(b);
                a.l && (b = b.toLowerCase());
                return b
            },
            Fk = function(a, b) {
                b && !a.l && (Ak(a), a.j = null, a.g.forEach(function(c, d) {
                    var e = d.toLowerCase();
                    d != e && (this.remove(d), Dk(this, e, c))
                }, a));
                a.l = b
            };
        zk.prototype.o = function(a) {
            for (var b = 0; b < arguments.length; b++) yk(arguments[b], function(c, d) {
                this.add(d, c)
            }, this)
        };
        var Gk = /[#\/\?@]/g,
            Hk = /[#\?]/g,
            Ik = /[#\?:]/g,
            Jk = /#/g,
            Kk = function(a, b) {
                return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
            },
            Lk = /[#\?@]/g,
            Mk = function(a) {
                a = a.charCodeAt(0);
                return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
            },
            Nk = function(a, b, c) {
                return "string" === typeof a ? (a = encodeURI(a).replace(b, Mk), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
            },
            Ok = function(a) {
                this.j = this.B = this.l = "";
                this.C = null;
                this.s = this.h = "";
                this.o = !1;
                var b;
                a instanceof Ok ? (this.o = a.o, Pk(this, a.l), this.B =
                    a.B, this.j = a.j, Qk(this, a.C), this.h = a.h, Rk(this, Ek(a.g)), this.s = a.s) : a && (b = String(a).match(_.Ff)) ? (this.o = !1, Pk(this, b[1] || "", !0), this.B = Kk(b[2] || ""), this.j = Kk(b[3] || "", !0), Qk(this, b[4]), this.h = Kk(b[5] || "", !0), Rk(this, b[6] || "", !0), this.s = Kk(b[7] || "")) : (this.o = !1, this.g = new zk(null, this.o))
            };
        Ok.prototype.toString = function() {
            var a = [],
                b = this.l;
            b && a.push(Nk(b, Gk, !0), ":");
            var c = this.j;
            if (c || "file" == b) a.push("//"), (b = this.B) && a.push(Nk(b, Gk, !0), "@"), a.push(_.Vc(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.C, null != c && a.push(":", String(c));
            if (c = this.h) this.j && "/" != c.charAt(0) && a.push("/"), a.push(Nk(c, "/" == c.charAt(0) ? Hk : Ik, !0));
            (c = this.g.toString()) && a.push("?", c);
            (c = this.s) && a.push("#", Nk(c, Jk));
            return a.join("")
        };
        Ok.prototype.resolve = function(a) {
            var b = new Ok(this),
                c = !!a.l;
            c ? Pk(b, a.l) : c = !!a.B;
            c ? b.B = a.B : c = !!a.j;
            c ? b.j = a.j : c = null != a.C;
            var d = a.h;
            if (c) Qk(b, a.C);
            else if (c = !!a.h) {
                if ("/" != d.charAt(0))
                    if (this.j && !this.h) d = "/" + d;
                    else {
                        var e = b.h.lastIndexOf("/"); - 1 != e && (d = b.h.slice(0, e + 1) + d)
                    }
                e = d;
                if (".." == e || "." == e) d = "";
                else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                    d = 0 == e.lastIndexOf("/", 0);
                    e = e.split("/");
                    for (var f = [], g = 0; g < e.length;) {
                        var k = e[g++];
                        "." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length &&
                            "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = !0)
                    }
                    d = f.join("/")
                } else d = e
            }
            c ? b.h = d : c = "" !== a.g.toString();
            c ? Rk(b, Ek(a.g)) : c = !!a.s;
            c && (b.s = a.s);
            return b
        };
        Pk = function(a, b, c) {
            a.l = c ? Kk(b, !0) : b;
            a.l && (a.l = a.l.replace(/:$/, ""))
        };
        Qk = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("N`" + b);
                a.C = b
            } else a.C = null
        };
        Rk = function(a, b, c) {
            b instanceof zk ? (a.g = b, Fk(a.g, a.o)) : (c || (b = Nk(b, Lk)), a.g = new zk(b, a.o))
        };
        Sk = function(a) {
            var b = xk(a);
            if ("undefined" == typeof b) throw Error("P");
            var c = new zk(null);
            a = rj(a);
            for (var d = 0; d < b.length; d++) {
                var e = b[d],
                    f = a[d];
                Array.isArray(f) ? Dk(c, e, f) : c.add(e, f)
            }
            return c
        };
        Tk = {};
        _.Uk = {};
        Bi = {};
        _.Vk = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
            }
            return b
        };
        Wk = function(a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        };
        _.h = Wk.prototype;
        _.h.contains = function(a) {
            return this && a ? a instanceof Wk ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
        };
        _.h.ceil = function() {
            this.top = Math.ceil(this.top);
            this.right = Math.ceil(this.right);
            this.bottom = Math.ceil(this.bottom);
            this.left = Math.ceil(this.left);
            return this
        };
        _.h.floor = function() {
            this.top = Math.floor(this.top);
            this.right = Math.floor(this.right);
            this.bottom = Math.floor(this.bottom);
            this.left = Math.floor(this.left);
            return this
        };
        _.h.round = function() {
            this.top = Math.round(this.top);
            this.right = Math.round(this.right);
            this.bottom = Math.round(this.bottom);
            this.left = Math.round(this.left);
            return this
        };
        _.h.translate = function(a, b) {
            a instanceof N ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
            return this
        };
        var Xk = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        };
        _.h = Xk.prototype;
        _.h.contains = function(a) {
            return a instanceof N ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
        };
        _.h.ceil = function() {
            this.left = Math.ceil(this.left);
            this.top = Math.ceil(this.top);
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        };
        _.h.floor = function() {
            this.left = Math.floor(this.left);
            this.top = Math.floor(this.top);
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        };
        _.h.round = function() {
            this.left = Math.round(this.left);
            this.top = Math.round(this.top);
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        };
        _.h.translate = function(a, b) {
            a instanceof N ? (this.left += a.x, this.top += a.y) : (this.left += a, "number" === typeof b && (this.top += b));
            return this
        };
        Yk = function(a, b) {
            var c = _.C(a);
            return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
        };
        Zk = function(a, b) {
            return Yk(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        };
        $k = function(a) {
            "number" == typeof a && (a += "px");
            return a
        };
        _.al = function(a, b, c) {
            if (b instanceof N) {
                var d = b.x;
                b = b.y
            } else d = b, b = c;
            a.style.left = $k(d);
            a.style.top = $k(b)
        };
        bl = function(a) {
            a = a ? _.C(a) : document;
            return !_.B || 9 <= Number(_.yc) || _.cd(_.Zc(a).X) ? a.documentElement : a.body
        };
        cl = function(a) {
            try {
                return a.getBoundingClientRect()
            } catch (b) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
        };
        dl = function(a) {
            if (_.B && !(8 <= Number(_.yc))) return a.offsetParent;
            var b = _.C(a),
                c = Zk(a, "position"),
                d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (11 == a.nodeType && a.host && (a = a.host), c = Zk(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
            return null
        };
        el = function(a) {
            var b = _.C(a),
                c = new N(0, 0),
                d = bl(b);
            if (a == d) return c;
            a = cl(a);
            b = _.pj(_.Zc(b).X);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        };
        fl = function(a) {
            for (var b = new Wk(0, Infinity, Infinity, 0), c = _.Zc(a), d = c.X.body, e = c.X.documentElement, f = oj(c.X); a = dl(a);)
                if (!(_.B && 0 == a.clientWidth || _.fc && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != Zk(a, "overflow")) {
                    var g = el(a),
                        k = new N(a.clientLeft, a.clientTop);
                    g.x += k.x;
                    g.y += k.y;
                    b.top = Math.max(b.top, g.y);
                    b.right = Math.min(b.right, g.x + a.clientWidth);
                    b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
                    b.left = Math.max(b.left, g.x)
                }
            d = f.scrollLeft;
            f = f.scrollTop;
            b.left = Math.max(b.left, d);
            b.top = Math.max(b.top,
                f);
            c = _.dd(_.sd(c) || window);
            b.right = Math.min(b.right, d + c.width);
            b.bottom = Math.min(b.bottom, f + c.height);
            return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
        };
        gl = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = _.fc && !b && !c;
            return (void 0 === b || d) && a.getBoundingClientRect ? (a = cl(a), new _.Tc(a.right - a.left, a.bottom - a.top)) : new _.Tc(b, c)
        };
        _.hl = function(a, b) {
            var c = new N(0, 0),
                d = _.ed(_.C(a));
            if (!_.$b(d, "parent")) return c;
            do {
                if (d == b) var e = el(a);
                else e = cl(a), e = new N(e.left, e.top);
                c.x += e.x;
                c.y += e.y
            } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
            return c
        };
        il = function(a) {
            if ("none" != Zk(a, "display")) return gl(a);
            var b = a.style,
                c = b.display,
                d = b.visibility,
                e = b.position;
            b.visibility = "hidden";
            b.position = "absolute";
            b.display = "inline";
            a = gl(a);
            b.display = c;
            b.position = e;
            b.visibility = d;
            return a
        };
        _.O = function(a, b) {
            a.style.display = b ? "" : "none"
        };
        jl = function(a) {
            return "rtl" == Zk(a, "direction")
        };
        kl = function(a, b, c) {
            c = c ? null : a.getElementsByTagName("*");
            if (_.Zh) {
                if (b = b ? "none" : "", a.style && (a.style[_.Zh] = b), c) {
                    a = 0;
                    for (var d; d = c[a]; a++) d.style && (d.style[_.Zh] = b)
                }
            } else if (_.B && (b = b ? "on" : "", a.setAttribute("unselectable", b), c))
                for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
        };
        _.ll = function(a) {
            return new _.Tc(a.offsetWidth, a.offsetHeight)
        };
        ml = function(a, b, c) {
            a = a.style;
            _.ec ? a.MozBoxSizing = c : _.fc ? a.WebkitBoxSizing = c : a.boxSizing = c;
            a.width = Math.max(b.width, 0) + "px";
            a.height = Math.max(b.height, 0) + "px"
        };
        nl = function(a, b, c, d) {
            if (/^\d+px?$/.test(b)) return parseInt(b, 10);
            var e = a.style[c],
                f = a.runtimeStyle[c];
            a.runtimeStyle[c] = a.currentStyle[c];
            a.style[c] = b;
            b = a.style[d];
            a.style[c] = e;
            a.runtimeStyle[c] = f;
            return +b
        };
        ol = function(a, b) {
            return (b = a.currentStyle ? a.currentStyle[b] : null) ? nl(a, b, "left", "pixelLeft") : 0
        };
        pl = function(a) {
            if (_.B) {
                var b = ol(a, "paddingLeft"),
                    c = ol(a, "paddingRight"),
                    d = ol(a, "paddingTop");
                a = ol(a, "paddingBottom");
                return new Wk(d, c, a, b)
            }
            b = Yk(a, "paddingLeft");
            c = Yk(a, "paddingRight");
            d = Yk(a, "paddingTop");
            a = Yk(a, "paddingBottom");
            return new Wk(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
        };
        ql = {
            thin: 2,
            medium: 4,
            thick: 6
        };
        rl = function(a, b) {
            if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
            b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
            return b in ql ? ql[b] : nl(a, b, "left", "pixelLeft")
        };
        sl = function(a) {
            if (_.B && !(9 <= Number(_.yc))) {
                var b = rl(a, "borderLeft"),
                    c = rl(a, "borderRight"),
                    d = rl(a, "borderTop");
                a = rl(a, "borderBottom");
                return new Wk(d, c, a, b)
            }
            b = Yk(a, "borderLeftWidth");
            c = Yk(a, "borderRightWidth");
            d = Yk(a, "borderTopWidth");
            a = Yk(a, "borderBottomWidth");
            return new Wk(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
        };
        _.tl = function(a, b) {
            var c = _.cd(_.Zc(_.C(a)).X);
            if (!_.B || _.vc("10") || c) ml(a, b, "content-box");
            else {
                var d = a.style;
                c ? (d.pixelWidth = b.width, d.pixelHeight = b.height) : (c = pl(a), a = sl(a), d.pixelWidth = b.width + a.left + c.left + c.right + a.right, d.pixelHeight = b.height + a.top + c.top + c.bottom + a.bottom)
            }
        };
        _.ul = function(a, b) {
            return null != a && a.pc === b
        };
        vl = function(a) {
            if (null != a) switch (a.xg) {
                case 1:
                    return 1;
                case -1:
                    return -1;
                case 0:
                    return 0
            }
            return null
        };
        _.wl = function(a, b) {
            return a && b && a.Ol && b.Ol ? a.pc !== b.pc ? !1 : a.toString() === b.toString() : a instanceof _.Kf && b instanceof _.Kf ? a.pc != b.pc ? !1 : a.toString() == b.toString() : a == b
        };
        xl = {};
        yl = {};
        _.zl = function(a, b) {
            var c = xl["key_a:"];
            if (void 0 === c || a > c) xl["key_a:"] = a, yl["key_a:"] = b;
            else if (a == c) throw Error("pa`a`");
        };
        Al = function() {
            return ""
        };
        Bl = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
        Cl = /</g;
        Dl = {
            "\x00": "&#0;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\v": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "-": "&#45;",
            "/": "&#47;",
            "<": "&lt;",
            "=": "&#61;",
            ">": "&gt;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        };
        El = function(a) {
            return Dl[a]
        };
        Fl = {
            "\x00": "\\0 ",
            "\b": "\\8 ",
            "\t": "\\9 ",
            "\n": "\\a ",
            "\v": "\\b ",
            "\f": "\\c ",
            "\r": "\\d ",
            '"': "\\22 ",
            "&": "\\26 ",
            "'": "\\27 ",
            "(": "\\28 ",
            ")": "\\29 ",
            "*": "\\2a ",
            "/": "\\2f ",
            ":": "\\3a ",
            ";": "\\3b ",
            "<": "\\3c ",
            "=": "\\3d ",
            ">": "\\3e ",
            "@": "\\40 ",
            "\\": "\\5c ",
            "{": "\\7b ",
            "}": "\\7d ",
            "\u0085": "\\85 ",
            "\u00a0": "\\a0 ",
            "\u2028": "\\2028 ",
            "\u2029": "\\2029 "
        };
        _.Gl = function(a) {
            return Fl[a]
        };
        Hl = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\v": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        };
        Il = function(a) {
            return Hl[a]
        };
        Jl = /[\x00\x22\x26\x27\x3c\x3e]/g;
        _.Kl = function(a) {
            return _.ul(a, _.fi) ? a : a instanceof _.Mc ? (0, _.L)(_.Nc(a).toString()) : a instanceof _.Mc ? (0, _.L)(_.Nc(a).toString()) : (0, _.L)(String(String(a)).replace(Jl, El), vl(a))
        };
        Ll = /[\x00\x22\x27\x3c\x3e]/g;
        _.P = function(a) {
            if (_.ul(a, _.fi)) {
                var b = String;
                a = String(a.za()).replace(Bl, "").replace(Cl, "&lt;");
                b = b(a).replace(Ll, El)
            } else b = String(a).replace(Jl, El);
            return b
        };
        _.Ml = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g;
        Nl = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;
        _.Ol = function(a) {
            return String(a).replace(Nl, Il)
        };
        Pl = /^(?:(?:https?|mailto|ftp):|[^&:\/?#]*(?:[\/?#]|$))/i;
        _.Ql = function(a) {
            _.ul(a, Tk) || _.ul(a, _.Uk) ? a = _.Ol(a) : a instanceof _.Cc ? a = _.Ol(_.ai(a)) : a instanceof _.Cc ? a = _.Ol(_.ai(a)) : a instanceof _.Gb ? a = _.Ol(_.Ma(a).toString()) : a instanceof _.Gb ? a = _.Ol(_.Ma(a).toString()) : (a = String(a), a = Pl.test(a) ? a.replace(Nl, Il) : "about:invalid#zSoyz");
            return a
        };
        Rl = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;
        _.Sl = function(a) {
            _.ul(a, Tk) || _.ul(a, _.Uk) ? a = _.Ol(a) : a instanceof _.Cc ? a = _.Ol(_.ai(a)) : a instanceof _.Cc ? a = _.Ol(_.ai(a)) : a instanceof _.Gb ? a = _.Ol(_.Ma(a).toString()) : a instanceof _.Gb ? a = _.Ol(_.Ma(a).toString()) : (a = String(a), a = Rl.test(a) ? a.replace(Nl, Il) : "about:invalid#zSoyz");
            return a
        };
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var Tl, Ul, Vl, Wl, Xl, Zl;
        Tl = function(a) {
            return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
        };
        Ul = function(a) {
            return a.classList ? a.classList : Tl(a).match(/\S+/g) || []
        };
        Vl = function(a, b) {
            "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
        };
        Wl = function(a, b) {
            return a.classList ? a.classList.contains(b) : _.ua(Ul(a), b)
        };
        _.R = function(a, b) {
            if (a.classList) a.classList.add(b);
            else if (!Wl(a, b)) {
                var c = Tl(a);
                Vl(a, c + (0 < c.length ? " " + b : b))
            }
        };
        Xl = function(a, b) {
            if (a.classList) Array.prototype.forEach.call(b, function(e) {
                _.R(a, e)
            });
            else {
                var c = {};
                Array.prototype.forEach.call(Ul(a), function(e) {
                    c[e] = !0
                });
                Array.prototype.forEach.call(b, function(e) {
                    c[e] = !0
                });
                b = "";
                for (var d in c) b += 0 < b.length ? " " + d : d;
                Vl(a, b)
            }
        };
        _.Yl = function(a, b) {
            a.classList ? a.classList.remove(b) : Wl(a, b) && Vl(a, Array.prototype.filter.call(Ul(a), function(c) {
                return c != b
            }).join(" "))
        };
        Zl = function(a, b) {
            a.classList ? Array.prototype.forEach.call(b, function(c) {
                _.Yl(a, c)
            }) : Vl(a, Array.prototype.filter.call(Ul(a), function(c) {
                return !_.ua(b, c)
            }).join(" "))
        };
        var $l = function() {};
        $l.prototype.h = function() {};
        var am = function() {
            if (_.ic) {
                var a = /Windows NT ([0-9.]+)/;
                return (a = a.exec(_.Ca())) ? a[1] : "0"
            }
            return _.hc ? (a = /1[0|1][_.][0-9_.]+/, (a = a.exec(_.Ca())) ? a[0].replace(/_/g, ".") : "10") : _.jc ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(_.Ca())) ? a[1] : "") : _.kc || _.lc || _.mc ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(_.Ca())) ? a[1].replace(/_/g, ".") : "") : ""
        }();
        var bm = function(a) {
                return (a = a.exec(_.Ca())) ? a[1] : ""
            },
            cm = function() {
                if (_.Qg) return bm(/Firefox\/([0-9.]+)/);
                if (_.B || _.cc || _.bc) return _.tc;
                if (_.Ug) {
                    if (_.Fa() || _.u("Macintosh")) {
                        var a = bm(/CriOS\/([0-9.]+)/);
                        if (a) return a
                    }
                    return bm(/Chrome\/([0-9.]+)/)
                }
                if (_.Vg && !_.Fa()) return bm(/Version\/([0-9.]+)/);
                if (_.Rg || _.Sg) {
                    if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(_.Ca())) return a[1] + "." + a[2]
                } else if (_.Tg) return (a = bm(/Android\s+([0-9.]+)/)) ? a : bm(/Version\/([0-9.]+)/);
                return ""
            }();
        var gm = function(a, b, c, d, e, f, g, k, l) {
                var m = dm(c);
                var n = el(a);
                var p = il(a);
                n = new Xk(n.x, n.y, p.width, p.height);
                if (p = fl(a)) {
                    var t = new Xk(p.left, p.top, p.right - p.left, p.bottom - p.top);
                    p = Math.max(n.left, t.left);
                    var r = Math.min(n.left + n.width, t.left + t.width);
                    if (p <= r) {
                        var v = Math.max(n.top, t.top);
                        t = Math.min(n.top + n.height, t.top + t.height);
                        v <= t && (n.left = p, n.top = v, n.width = r - p, n.height = t - v)
                    }
                }
                p = _.Zc(a);
                v = _.Zc(c);
                p.X != v.X && (r = p.X.body, v = _.hl(r, _.sd(v)), v = Oj(v, el(r)), !_.B || 9 <= Number(_.yc) || _.cd(p.X) || (v = Oj(v, _.pj(p.X))),
                    n.left += v.x, n.top += v.y);
                a = em(a, b);
                b = n.left;
                a & 4 ? b += n.width : a & 2 && (b += n.width / 2);
                b = new N(b, n.top + (a & 1 ? n.height : 0));
                b = Oj(b, m);
                e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
                if (g)
                    if (l) var H = l;
                    else if (H = fl(c)) H.top -= m.y, H.right -= m.x, H.bottom -= m.y, H.left -= m.x;
                return fm(b, c, d, f, H, g, k)
            },
            dm = function(a) {
                if (a = a.offsetParent) {
                    var b = "HTML" == a.tagName || "BODY" == a.tagName;
                    if (!b || "static" != Zk(a, "position")) {
                        var c = el(a);
                        if (!b) {
                            b = jl(a);
                            var d;
                            if (d = b) {
                                d = _.Vg && 0 <= _.Yb(cm, 10);
                                var e;
                                if (e = _.nc) e = 0 <= _.Yb(am, 10);
                                var f = _.Ug && 0 <=
                                    _.Yb(cm, 85);
                                d = _.ec || d || e || f
                            }
                            b = d ? -a.scrollLeft : b && !_.dc && "visible" != Zk(a, "overflowX") ? a.scrollWidth - a.clientWidth - a.scrollLeft : a.scrollLeft;
                            c = Oj(c, new N(b, a.scrollTop))
                        }
                    }
                }
                return c || new N
            },
            fm = function(a, b, c, d, e, f, g) {
                a = lj(a);
                var k = em(b, c);
                c = il(b);
                g = g ? new _.Tc(g.width, g.height) : new _.Tc(c.width, c.height);
                a = lj(a);
                g = new _.Tc(g.width, g.height);
                var l = 0;
                if (d || 0 != k) k & 4 ? a.x -= g.width + (d ? d.right : 0) : k & 2 ? a.x -= g.width / 2 : d && (a.x += d.left), k & 1 ? a.y -= g.height + (d ? d.bottom : 0) : d && (a.y += d.top);
                f && (e ? (d = g, k = 0, 65 == (f & 65) &&
                    (a.x < e.left || a.x >= e.right) && (f &= -2), 132 == (f & 132) && (a.y < e.top || a.y >= e.bottom) && (f &= -5), a.x < e.left && f & 1 && (a.x = e.left, k |= 1), f & 16 && (l = a.x, a.x < e.left && (a.x = e.left, k |= 4), a.x + d.width > e.right && (d.width = Math.min(e.right - a.x, l + d.width - e.left), d.width = Math.max(d.width, 0), k |= 4)), a.x + d.width > e.right && f & 1 && (a.x = Math.max(e.right - d.width, e.left), k |= 1), f & 2 && (k |= (a.x < e.left ? 16 : 0) | (a.x + d.width > e.right ? 32 : 0)), a.y < e.top && f & 4 && (a.y = e.top, k |= 2), f & 32 && (l = a.y, a.y < e.top && (a.y = e.top, k |= 8), a.y + d.height > e.bottom && (d.height = Math.min(e.bottom -
                        a.y, l + d.height - e.top), d.height = Math.max(d.height, 0), k |= 8)), a.y + d.height > e.bottom && f & 4 && (a.y = Math.max(e.bottom - d.height, e.top), k |= 2), f & 8 && (k |= (a.y < e.top ? 64 : 0) | (a.y + d.height > e.bottom ? 128 : 0)), e = k) : e = 256, l = e);
                f = new Xk(0, 0, 0, 0);
                f.left = a.x;
                f.top = a.y;
                f.width = g.width;
                f.height = g.height;
                e = l;
                if (e & 496) return e;
                _.al(b, new N(f.left, f.top));
                g = new _.Tc(f.width, f.height);
                _.Uc(c, g) || (c = g, a = _.cd(_.Zc(_.C(b)).X), !_.B || _.vc("10") || a ? ml(b, c, "border-box") : (g = b.style, a ? (a = pl(b), b = sl(b), g.pixelWidth = c.width - b.left - a.left -
                    a.right - b.right, g.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (g.pixelWidth = c.width, g.pixelHeight = c.height)));
                return e
            },
            em = function(a, b) {
                return (b & 8 && jl(a) ? b ^ 4 : b) & -9
            };
        var hm;
        var im = function(a, b) {
                b ? a.setAttribute("role", b) : a.removeAttribute("role")
            },
            jm = function(a, b, c) {
                Array.isArray(c) && (c = c.join(" "));
                var d = "aria-" + b;
                "" === c || void 0 == c ? (hm || (c = {}, hm = (c.atomic = !1, c.autocomplete = "none", c.dropeffect = "none", c.haspopup = !1, c.live = "off", c.multiline = !1, c.multiselectable = !1, c.orientation = "vertical", c.readonly = !1, c.relevant = "additions text", c.required = !1, c.sort = "none", c.busy = !1, c.disabled = !1, c.hidden = !1, c.invalid = "false", c)), c = hm, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) :
                    a.setAttribute(d, c)
            };
        var km = function(a, b, c) {
            _.z.call(this);
            this.h = a;
            this.l = b || 0;
            this.j = c;
            this.g = (0, _.x)(this.ak, this)
        };
        _.y(km, _.z);
        _.h = km.prototype;
        _.h.ae = 0;
        _.h.L = function() {
            km.G.L.call(this);
            this.stop();
            delete this.h;
            delete this.j
        };
        _.h.start = function(a) {
            this.stop();
            this.ae = _.ig(this.g, void 0 !== a ? a : this.l)
        };
        _.h.stop = function() {
            this.isActive() && _.jg(this.ae);
            this.ae = 0
        };
        _.h.isActive = function() {
            return 0 != this.ae
        };
        _.h.ak = function() {
            this.ae = 0;
            this.h && this.h.call(this.j)
        };
        _.lm = function(a) {
            var b = "nd";
            if (a.nd && a.hasOwnProperty(b)) return a.nd;
            b = new a;
            return a.nd = b
        };
        var nm = function(a) {
                if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
                if (mm(a.keyCode)) return !0;
                switch (a.keyCode) {
                    case 18:
                    case 20:
                    case 93:
                    case 17:
                    case 40:
                    case 35:
                    case 27:
                    case 36:
                    case 45:
                    case 37:
                    case 224:
                    case 91:
                    case 144:
                    case 12:
                    case 34:
                    case 33:
                    case 19:
                    case 255:
                    case 44:
                    case 39:
                    case 145:
                    case 16:
                    case 38:
                    case 252:
                    case 224:
                    case 92:
                        return !1;
                    case 0:
                        return !_.ec;
                    default:
                        return 166 > a.keyCode || 183 < a.keyCode
                }
            },
            pm = function(a, b, c, d, e, f) {
                if (_.hc && e) return mm(a);
                if (e && !d) return !1;
                if (!_.ec) {
                    "number" ===
                    typeof b && (b = om(b));
                    var g = 17 == b || 18 == b || _.hc && 91 == b;
                    if ((!c || _.hc) && g || _.hc && 16 == b && (d || f)) return !1
                }
                if ((_.fc || _.cc) && d && c) switch (a) {
                    case 220:
                    case 219:
                    case 221:
                    case 192:
                    case 186:
                    case 189:
                    case 187:
                    case 188:
                    case 190:
                    case 191:
                    case 192:
                    case 222:
                        return !1
                }
                if (_.B && d && b == a) return !1;
                switch (a) {
                    case 13:
                        return _.ec ? f || e ? !1 : !(c && d) : !0;
                    case 27:
                        return !(_.fc || _.cc || _.ec)
                }
                return _.ec && (d || e || f) ? !1 : mm(a)
            },
            mm = function(a) {
                if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (_.fc || _.cc) && 0 == a) return !0;
                switch (a) {
                    case 32:
                    case 43:
                    case 63:
                    case 64:
                    case 107:
                    case 109:
                    case 110:
                    case 111:
                    case 186:
                    case 59:
                    case 189:
                    case 187:
                    case 61:
                    case 188:
                    case 190:
                    case 191:
                    case 192:
                    case 222:
                    case 219:
                    case 220:
                    case 221:
                    case 163:
                    case 58:
                        return !0;
                    case 173:
                        return _.ec;
                    default:
                        return !1
                }
            },
            om = function(a) {
                if (_.ec) a = qm(a);
                else if (_.hc && _.fc) switch (a) {
                    case 93:
                        a = 91
                }
                return a
            },
            qm = function(a) {
                switch (a) {
                    case 61:
                        return 187;
                    case 59:
                        return 186;
                    case 173:
                        return 189;
                    case 224:
                        return 91;
                    case 0:
                        return 224;
                    default:
                        return a
                }
            };
        var rm = function(a, b, c, d) {
            _.xd.call(this, d);
            this.type = "key";
            this.keyCode = a;
            this.charCode = b;
            this.repeat = c
        };
        _.y(rm, _.xd);
        var sm = function(a, b) {
            _.E.call(this);
            a && this.attach(a, b)
        };
        _.y(sm, _.E);
        _.h = sm.prototype;
        _.h.J = null;
        _.h.Df = null;
        _.h.dh = null;
        _.h.Ef = null;
        _.h.xb = -1;
        _.h.zc = -1;
        _.h.qg = !1;
        var tm = {
                3: 13,
                12: 144,
                63232: 38,
                63233: 40,
                63234: 37,
                63235: 39,
                63236: 112,
                63237: 113,
                63238: 114,
                63239: 115,
                63240: 116,
                63241: 117,
                63242: 118,
                63243: 119,
                63244: 120,
                63245: 121,
                63246: 122,
                63247: 123,
                63248: 44,
                63272: 46,
                63273: 36,
                63275: 35,
                63276: 33,
                63277: 34,
                63289: 144,
                63302: 45
            },
            um = {
                Up: 38,
                Down: 40,
                Left: 37,
                Right: 39,
                Enter: 13,
                F1: 112,
                F2: 113,
                F3: 114,
                F4: 115,
                F5: 116,
                F6: 117,
                F7: 118,
                F8: 119,
                F9: 120,
                F10: 121,
                F11: 122,
                F12: 123,
                "U+007F": 46,
                Home: 36,
                End: 35,
                PageUp: 33,
                PageDown: 34,
                Insert: 45
            },
            vm = _.hc && _.ec;
        _.h = sm.prototype;
        _.h.nl = function(a) {
            if (_.fc || _.cc)
                if (17 == this.xb && !a.ctrlKey || 18 == this.xb && !a.altKey || _.hc && 91 == this.xb && !a.metaKey) this.zc = this.xb = -1; - 1 == this.xb && (a.ctrlKey && 17 != a.keyCode ? this.xb = 17 : a.altKey && 18 != a.keyCode ? this.xb = 18 : a.metaKey && 91 != a.keyCode && (this.xb = 91));
            pm(a.keyCode, this.xb, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? (this.zc = om(a.keyCode), vm && (this.qg = a.altKey)) : this.handleEvent(a)
        };
        _.h.ol = function(a) {
            this.zc = this.xb = -1;
            this.qg = a.altKey
        };
        _.h.handleEvent = function(a) {
            var b = a.g,
                c = b.altKey;
            if (_.B && "keypress" == a.type) {
                var d = this.zc;
                var e = 13 != d && 27 != d ? b.keyCode : 0
            } else(_.fc || _.cc) && "keypress" == a.type ? (d = this.zc, e = 0 <= b.charCode && 63232 > b.charCode && mm(d) ? b.charCode : 0) : ("keypress" == a.type ? (vm && (c = this.qg), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.zc, e = b.charCode) : (d = b.keyCode || this.zc, e = b.charCode || 0)) : (d = b.keyCode || this.zc, e = b.charCode || 0), _.hc && 63 == e && 224 == d && (d = 191));
            var f = d = om(d);
            d ? 63232 <= d && d in tm ? f = tm[d] : 25 == d && a.shiftKey &&
                (f = 9) : b.keyIdentifier && b.keyIdentifier in um && (f = um[b.keyIdentifier]);
            if (!_.ec || "keypress" != a.type || pm(f, this.xb, a.shiftKey, a.ctrlKey, c, a.metaKey)) a = f == this.xb, this.xb = f, b = new rm(f, e, a, b), b.altKey = c, this.dispatchEvent(b)
        };
        _.h.A = function() {
            return this.J
        };
        _.h.attach = function(a, b) {
            this.Ef && wm(this);
            this.J = a;
            this.Df = _.D(this.J, "keypress", this, b);
            this.dh = _.D(this.J, "keydown", this.nl, b, this);
            this.Ef = _.D(this.J, "keyup", this.ol, b, this)
        };
        var wm = function(a) {
            a.Df && (_.Sd(a.Df), _.Sd(a.dh), _.Sd(a.Ef), a.Df = null, a.dh = null, a.Ef = null);
            a.J = null;
            a.xb = -1;
            a.zc = -1
        };
        sm.prototype.L = function() {
            sm.G.L.call(this);
            wm(this)
        };
        var xm = function() {};
        tj(xm);
        xm.prototype.g = 0;
        var Fm;
        _.M = function(a) {
            _.E.call(this);
            this.g = a || _.Zc();
            this.Ra = ym;
            this.Y = null;
            this.sa = !1;
            this.J = null;
            this.T = void 0;
            this.M = this.B = this.K = this.Ab = null;
            this.Jc = !1
        };
        _.y(_.M, _.E);
        _.M.prototype.dd = xm.Ia();
        var ym = null,
            zm = function(a, b) {
                switch (a) {
                    case 1:
                        return b ? "disable" : "enable";
                    case 2:
                        return b ? "highlight" : "unhighlight";
                    case 4:
                        return b ? "activate" : "deactivate";
                    case 8:
                        return b ? "select" : "unselect";
                    case 16:
                        return b ? "check" : "uncheck";
                    case 32:
                        return b ? "focus" : "blur";
                    case 64:
                        return b ? "open" : "close"
                }
                throw Error("qa");
            };
        _.M.prototype.Lb = function() {
            return this.Y || (this.Y = ":" + (this.dd.g++).toString(36))
        };
        var Am = function(a, b) {
            if (a.K && a.K.M) {
                var c = a.K.M,
                    d = a.Y;
                d in c && delete c[d];
                c = a.K.M;
                if (null !== c && b in c) throw Error("x`" + b);
                c[b] = a
            }
            a.Y = b
        };
        _.M.prototype.A = function() {
            return this.J
        };
        var Bm = function(a, b) {
                return a.J ? nj(b, a.J || a.g.X) : null
            },
            S = function(a) {
                a.T || (a.T = new _.F(a));
                return a.T
            },
            Dm = function(a, b) {
                if (a == b) throw Error("ra");
                if (b && a.K && a.Y && Cm(a.K, a.Y) && a.K != b) throw Error("ra");
                a.K = b;
                _.M.G.Nf.call(a, b)
            };
        _.M.prototype.P = function() {
            return this.K
        };
        _.M.prototype.Nf = function(a) {
            if (this.K && this.K != a) throw Error("sa");
            _.M.G.Nf.call(this, a)
        };
        _.M.prototype.N = function() {
            this.J = _.yh(this.g, "DIV")
        };
        _.M.prototype.ta = function(a) {
            _.Em(this, a)
        };
        _.Em = function(a, b, c) {
            if (a.sa) throw Error("ta");
            a.J || a.N();
            b ? b.insertBefore(a.J, c || null) : a.g.X.body.appendChild(a.J);
            a.K && !a.K.sa || a.ba()
        };
        Fm = function(a, b) {
            if (a.sa) throw Error("ta");
            if (b && a.Yf(b)) {
                a.Jc = !0;
                var c = _.C(b);
                a.g && a.g.X == c || (a.g = _.Zc(b));
                a.na(b);
                a.ba()
            } else throw Error("ua");
        };
        _.h = _.M.prototype;
        _.h.Yf = function() {
            return !0
        };
        _.h.na = function(a) {
            this.J = a
        };
        _.h.ba = function() {
            this.sa = !0;
            Gm(this, function(a) {
                !a.sa && a.A() && a.ba()
            })
        };
        _.h.ja = function() {
            Gm(this, function(a) {
                a.sa && a.ja()
            });
            this.T && _.$f(this.T);
            this.sa = !1
        };
        _.h.L = function() {
            this.sa && this.ja();
            this.T && (this.T.S(), delete this.T);
            Gm(this, function(a) {
                a.S()
            });
            !this.Jc && this.J && _.hk(this.J);
            this.K = this.Ab = this.J = this.M = this.B = null;
            _.M.G.L.call(this)
        };
        _.T = function(a, b) {
            return a.Lb() + "." + b
        };
        _.M.prototype.he = function(a, b) {
            this.ng(a, Hm(this), b)
        };
        _.M.prototype.ng = function(a, b, c) {
            if (a.sa && (c || !this.sa)) throw Error("ta");
            if (0 > b || b > Hm(this)) throw Error("va");
            this.M && this.B || (this.M = {}, this.B = []);
            if (a.P() == this) {
                var d = a.Lb();
                this.M[d] = a;
                _.wa(this.B, a)
            } else {
                d = this.M;
                var e = a.Lb();
                if (null !== d && e in d) throw Error("x`" + e);
                d[e] = a
            }
            Dm(a, this);
            li(this.B, b, 0, a);
            a.sa && this.sa && a.P() == this ? (c = this.Me(), (c.childNodes[b] || null) != a.A() && (a.A().parentElement == c && c.removeChild(a.A()), b = c.childNodes[b] || null, c.insertBefore(a.A(), b))) : c ? (this.J || this.N(), b = Im(this,
                b + 1), _.Em(a, this.Me(), b ? b.J : null)) : this.sa && !a.sa && a.J && a.J.parentNode && 1 == a.J.parentNode.nodeType && a.ba()
        };
        _.M.prototype.Me = function() {
            return this.J
        };
        var Jm = function(a) {
                null == a.Ra && (a.Ra = jl(a.sa ? a.J : a.g.X.body));
                return a.Ra
            },
            Hm = function(a) {
                return a.B ? a.B.length : 0
            },
            Cm = function(a, b) {
                a.M && b ? (a = a.M, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
                return b
            },
            Im = function(a, b) {
                return a.B ? a.B[b] || null : null
            },
            Gm = function(a, b, c) {
                a.B && a.B.forEach(b, c)
            },
            Km = function(a, b) {
                return a.B && b ? a.B.indexOf(b) : -1
            };
        _.M.prototype.Zf = function(a, b) {
            if (a) {
                var c = "string" === typeof a ? a : a.Lb();
                a = Cm(this, c);
                if (c && a) {
                    var d = this.M;
                    c in d && delete d[c];
                    _.wa(this.B, a);
                    b && (a.ja(), a.J && _.hk(a.J));
                    Dm(a, null)
                }
            }
            if (!a) throw Error("wa");
            return a
        };
        _.M.prototype.Ee = function(a) {
            for (var b = []; this.B && 0 != this.B.length;) {
                var c = b,
                    d = c.push;
                var e = this.Zf(Im(this, 0), a);
                d.call(c, e)
            }
            return b
        };
        var Lm = function() {},
            Mm;
        tj(Lm);
        var Nm = {
            button: "pressed",
            checkbox: "checked",
            menuitem: "selected",
            menuitemcheckbox: "checked",
            menuitemradio: "checked",
            radio: "checked",
            tab: "selected",
            treeitem: "selected"
        };
        _.h = Lm.prototype;
        _.h.td = function() {};
        _.h.N = function(a) {
            return a.g.N("DIV", Om(this, a).join(" "), a.za())
        };
        _.h.Fc = function(a) {
            return a
        };
        _.h.Ne = function() {
            return !0
        };
        _.h.Hb = function(a, b) {
            b.id && Am(a, b.id);
            var c = this.Fc(b);
            c && c.firstChild ? Pm(a, c.firstChild.nextSibling ? _.xa(c.childNodes) : c.firstChild) : a.ad = null;
            var d = 0,
                e = this.Ga(),
                f = this.Ga(),
                g = !1,
                k = !1,
                l = _.xa(Ul(b));
            l.forEach(function(m) {
                g || m != e ? k || m != f ? d |= this.j(m) : k = !0 : (g = !0, f == e && (k = !0));
                1 == this.j(m) && ok(c) && pk(c) && qk(c, !1)
            }, this);
            a.ua = d;
            g || (l.push(e), f == e && (k = !0));
            k || l.push(f);
            (a = a.Jg) && l.push.apply(l, a);
            g && k && !a || Vl(b, l.join(" "));
            return b
        };
        _.h.ci = function(a) {
            Jm(a) && this.bg(a.A(), !0);
            a.isEnabled() && this.ud(a, a.isVisible())
        };
        var Qm = function(a, b, c) {
                if (a = c || a.td()) c = b.getAttribute("role") || null, a != c && im(b, a)
            },
            Rm = function(a, b, c) {
                b.isVisible() || jm(c, "hidden", !b.isVisible());
                b.isEnabled() || a.Wb(c, 1, !b.isEnabled());
                b.Ea & 8 && a.Wb(c, 8, !!(b.ua & 8));
                b.Ea & 16 && a.Wb(c, 16, !!(b.ua & 16));
                b.Ea & 64 && a.Wb(c, 64, !!(b.ua & 64))
            };
        _.h = Lm.prototype;
        _.h.Oe = function(a, b) {
            kl(a, !b, !_.B)
        };
        _.h.bg = function(a, b) {
            var c = this.Ga() + "-SIsrTd";
            (a = a.A ? a.A() : a) && (b ? Xl : Zl)(a, [c])
        };
        _.h.ag = function(a) {
            var b;
            return a.Ea & 32 && (b = a.A()) ? ok(b) && pk(b) : !1
        };
        _.h.ud = function(a, b) {
            var c;
            if (a.Ea & 32 && (c = a.A())) {
                if (!b && a.ua & 32) {
                    try {
                        c.blur()
                    } catch (d) {}
                    a.ua & 32 && a.di(null)
                }(ok(c) && pk(c)) != b && qk(c, b)
            }
        };
        _.h.U = function(a, b) {
            _.O(a, b);
            a && jm(a, "hidden", !b)
        };
        _.h.ce = function(a, b, c) {
            var d = a.A();
            if (d) {
                var e = this.g(b);
                e && (a = a.A ? a.A() : a) && (c ? Xl : Zl)(a, [e]);
                this.Wb(d, b, c)
            }
        };
        _.h.Wb = function(a, b, c) {
            Mm || (Mm = {
                1: "disabled",
                8: "selected",
                16: "checked",
                64: "expanded"
            });
            b = Mm[b];
            var d = a.getAttribute("role") || null;
            d && (d = Nm[d] || b, b = "checked" == b || "selected" == b ? d : b);
            b && jm(a, b, c)
        };
        _.h.be = function(a, b) {
            var c = this.Fc(a);
            c && (_.id(c), b && ("string" === typeof b ? _.nd(c, b) : (a = function(d) {
                if (d) {
                    var e = _.C(c);
                    c.appendChild("string" === typeof d ? e.createTextNode(d) : d)
                }
            }, Array.isArray(b) ? b.forEach(a) : !_.da(b) || "nodeType" in b ? a(b) : _.xa(b).forEach(a))))
        };
        _.h.Ga = function() {
            return "VIpgJd-bMcfAe"
        };
        var Om = function(a, b) {
            var c = a.Ga(),
                d = [c],
                e = a.Ga();
            e != c && d.push(e);
            c = b.ua;
            for (e = []; c;) {
                var f = c & -c;
                e.push(a.g(f));
                c &= ~f
            }
            d.push.apply(d, e);
            (a = b.Jg) && d.push.apply(d, a);
            return d
        };
        Lm.prototype.g = function(a) {
            this.h || Sm(this);
            return this.h[a]
        };
        Lm.prototype.j = function(a) {
            if (!this.o) {
                this.h || Sm(this);
                var b = this.h,
                    c = {},
                    d;
                for (d in b) c[b[d]] = d;
                this.o = c
            }
            a = parseInt(this.o[a], 10);
            return isNaN(a) ? 0 : a
        };
        var Sm = function(a) {
            var b = a.Ga();
            a.h = {
                1: b + "-OWB6Me",
                2: b + "-ZmdkE",
                4: b + "-auswjd",
                8: b + "-gk6SMd",
                16: b + "-barxie",
                32: b + "-XpnDCe",
                64: b + "-FNFY6c"
            }
        };
        var Tm = function() {};
        _.y(Tm, Lm);
        tj(Tm);
        _.h = Tm.prototype;
        _.h.td = function() {
            return "button"
        };
        _.h.Wb = function(a, b, c) {
            switch (b) {
                case 8:
                case 16:
                    jm(a, "pressed", c);
                    break;
                default:
                case 64:
                case 1:
                    Tm.G.Wb.call(this, a, b, c)
            }
        };
        _.h.N = function(a) {
            var b = Tm.G.N.call(this, a);
            this.Of(b, a.va());
            var c = a.Na();
            c && this.hb(b, c);
            a.Ea & 16 && this.Wb(b, 16, !!(a.ua & 16));
            return b
        };
        _.h.Hb = function(a, b) {
            b = Tm.G.Hb.call(this, a, b);
            var c = this.Na(b);
            a.qb = c;
            a.Z = this.va(b);
            a.Ea & 16 && this.Wb(b, 16, !!(a.ua & 16));
            return b
        };
        _.h.Na = function() {};
        _.h.hb = function() {};
        _.h.va = function(a) {
            return a.title
        };
        _.h.Of = function(a, b) {
            a && (b ? a.title = b : a.removeAttribute("title"))
        };
        _.h.Ga = function() {
            return "VIpgJd-LgbsSe"
        };
        var Um = {
            xd: "mousedown",
            yd: "mouseup",
            ge: "mousecancel",
            Dn: "mousemove",
            Fn: "mouseover",
            En: "mouseout",
            Bn: "mouseenter",
            Cn: "mouseleave"
        };
        var Wm = function(a, b) {
                if (!a) throw Error("xa`" + a);
                if ("function" !== typeof b) throw Error("ya`" + b);
                Vm[a] = b
            },
            Xm = {},
            Vm = {};
        var U = function(a, b, c) {
            _.M.call(this, c);
            if (!b) {
                for (b = this.constructor; b;) {
                    var d = _.Aa(b);
                    if (d = Xm[d]) break;
                    b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor
                }
                b = d ? "function" === typeof d.Ia ? d.Ia() : new d : null
            }
            this.h = b;
            this.ad = void 0 !== a ? a : null
        };
        _.y(U, _.M);
        _.h = U.prototype;
        _.h.ad = null;
        _.h.ua = 0;
        _.h.Ea = 39;
        _.h.tg = 255;
        _.h.Ke = 0;
        _.h.Ma = !0;
        _.h.Jg = null;
        _.h.Ug = !0;
        _.h.af = !1;
        var Zm = function(a, b) {
            a.sa && b != a.Ug && Ym(a, b);
            a.Ug = b
        };
        _.h = U.prototype;
        _.h.N = function() {
            var a = this.h.N(this);
            this.J = a;
            Qm(this.h, a, this.we());
            this.af || this.h.Oe(a, !1);
            this.isVisible() || this.h.U(a, !1)
        };
        _.h.we = function() {
            return null
        };
        _.h.Me = function() {
            return this.h.Fc(this.A())
        };
        _.h.Yf = function(a) {
            return this.h.Ne(a)
        };
        _.h.na = function(a) {
            this.J = a = this.h.Hb(this, a);
            Qm(this.h, a, this.we());
            this.af || this.h.Oe(a, !1);
            this.Ma = "none" != a.style.display
        };
        _.h.ba = function() {
            U.G.ba.call(this);
            Rm(this.h, this, this.J);
            this.h.ci(this);
            if (this.Ea & -2 && (this.Ug && Ym(this, !0), this.Ea & 32)) {
                var a = this.A();
                if (a) {
                    var b = this.o || (this.o = new sm);
                    b.attach(a);
                    S(this).D(b, "key", this.Db).D(a, "focus", this.bk).D(a, "blur", this.di)
                }
            }
        };
        var Ym = function(a, b) {
            var c = S(a),
                d = a.A();
            b ? (c.D(d, Um.xd, a.ee).D(d, [Um.yd, Um.ge], a.Id).D(d, "mouseover", a.R).D(d, "mouseout", a.da), a.s != _.wb && c.D(d, "contextmenu", a.s), _.B && (_.vc(9) || c.D(d, "dblclick", a.Pi), a.C || (a.C = new $m(a), _.kj(a, _.rb(_.ca, a.C))))) : (c.Fa(d, Um.xd, a.ee).Fa(d, [Um.yd, Um.ge], a.Id).Fa(d, "mouseover", a.R).Fa(d, "mouseout", a.da), a.s != _.wb && c.Fa(d, "contextmenu", a.s), _.B && (_.vc(9) || c.Fa(d, "dblclick", a.Pi), _.ca(a.C), a.C = null))
        };
        U.prototype.ja = function() {
            U.G.ja.call(this);
            this.o && wm(this.o);
            this.isVisible() && this.isEnabled() && this.h.ud(this, !1)
        };
        U.prototype.L = function() {
            U.G.L.call(this);
            this.o && (this.o.S(), delete this.o);
            delete this.h;
            this.C = this.Jg = this.ad = null
        };
        U.prototype.za = function() {
            return this.ad
        };
        U.prototype.j = function(a) {
            this.h.be(this.A(), a);
            this.ad = a
        };
        var Pm = function(a, b) {
            a.ad = b
        };
        _.h = U.prototype;
        _.h.cc = function() {
            var a = this.za();
            if (!a) return "";
            a = "string" === typeof a ? a : Array.isArray(a) ? a.map(rk).join("") : _.rd(a);
            return Qj(a)
        };
        _.h.Hj = function(a) {
            this.j(a)
        };
        _.h.isVisible = function() {
            return this.Ma
        };
        _.h.U = function(a, b) {
            return b || this.Ma != a && this.dispatchEvent(a ? "show" : "hide") ? ((b = this.A()) && this.h.U(b, a), this.isEnabled() && this.h.ud(this, a), this.Ma = a, !0) : !1
        };
        _.h.isEnabled = function() {
            return !(this.ua & 1)
        };
        _.h.Ca = function(a) {
            var b = this.P();
            b && "function" == typeof b.isEnabled && !b.isEnabled() || !an(this, 1, !a) || (a || (bn(this, !1), cn(this, !1)), this.isVisible() && this.h.ud(this, a), dn(this, 1, !a, !0))
        };
        var cn = function(a, b) {
            an(a, 2, b) && dn(a, 2, b)
        };
        U.prototype.isActive = function() {
            return !!(this.ua & 4)
        };
        var bn = function(a, b) {
                an(a, 4, b) && dn(a, 4, b)
            },
            en = function(a, b) {
                an(a, 64, b) && dn(a, 64, b)
            },
            dn = function(a, b, c, d) {
                d || 1 != b ? a.Ea & b && c != !!(a.ua & b) && (a.h.ce(a, b, c), a.ua = c ? a.ua | b : a.ua & ~b) : a.Ca(!c)
            };
        U.prototype.Va = function(a, b) {
            if (this.sa && this.ua & a && !b) throw Error("ta");
            !b && this.ua & a && dn(this, a, !1);
            this.Ea = b ? this.Ea | a : this.Ea & ~a
        };
        var fn = function(a, b) {
                return !!(a.tg & b) && !!(a.Ea & b)
            },
            gn = function(a) {
                a.tg &= -256
            },
            an = function(a, b, c) {
                return !!(a.Ea & b) && !!(a.ua & b) != c && (!(a.Ke & b) || a.dispatchEvent(zm(b, c))) && !a.bc()
            };
        U.prototype.R = function(a) {
            !hn(a, this.A()) && this.dispatchEvent("enter") && this.isEnabled() && fn(this, 2) && cn(this, !0)
        };
        U.prototype.da = function(a) {
            !hn(a, this.A()) && this.dispatchEvent("leave") && (fn(this, 4) && bn(this, !1), fn(this, 2) && cn(this, !1))
        };
        U.prototype.s = _.wb;
        var hn = function(a, b) {
            return !!a.relatedTarget && _.md(b, a.relatedTarget)
        };
        _.h = U.prototype;
        _.h.ee = function(a) {
            this.isEnabled() && (fn(this, 2) && cn(this, !0), 0 != a.g.button || _.hc && a.ctrlKey || (fn(this, 4) && bn(this, !0), this.h && this.h.ag(this) && this.A().focus()));
            this.af || 0 != a.g.button || _.hc && a.ctrlKey || a.preventDefault()
        };
        _.h.Id = function(a) {
            this.isEnabled() && (fn(this, 2) && cn(this, !0), this.isActive() && this.Vd(a) && fn(this, 4) && bn(this, !1))
        };
        _.h.Pi = function(a) {
            this.isEnabled() && this.Vd(a)
        };
        _.h.Vd = function(a) {
            if (fn(this, 16)) {
                var b = !(this.ua & 16);
                an(this, 16, b) && dn(this, 16, b)
            }
            fn(this, 8) && an(this, 8, !0) && dn(this, 8, !0);
            fn(this, 64) && en(this, !(this.ua & 64));
            b = new _.ud("action", this);
            a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.j = a.j);
            return this.dispatchEvent(b)
        };
        _.h.bk = function() {
            fn(this, 32) && an(this, 32, !0) && dn(this, 32, !0)
        };
        _.h.di = function() {
            fn(this, 4) && bn(this, !1);
            fn(this, 32) && an(this, 32, !1) && dn(this, 32, !1)
        };
        _.h.Db = function(a) {
            return this.isVisible() && this.isEnabled() && this.de(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
        };
        _.h.de = function(a) {
            return 13 == a.keyCode && this.Vd(a)
        };
        if ("function" !== typeof U) throw Error("za`" + U);
        if ("function" !== typeof Lm) throw Error("Aa`" + Lm);
        var jn = _.Aa(U);
        Xm[jn] = Lm;
        Wm("VIpgJd-bMcfAe", function() {
            return new U(null)
        });
        var $m = function(a) {
            _.z.call(this);
            this.h = a;
            this.g = !1;
            this.j = new _.F(this);
            _.kj(this, _.rb(_.ca, this.j));
            a = this.h.J;
            this.j.D(a, Um.xd, this.o).D(a, Um.yd, this.s).D(a, "click", this.l)
        };
        _.y($m, _.z);
        var kn = !_.B || 9 <= Number(_.yc);
        $m.prototype.o = function() {
            this.g = !1
        };
        $m.prototype.s = function() {
            this.g = !0
        };
        var ln = function(a, b) {
            if (!kn) return a.button = 0, a.type = b, a;
            var c = document.createEvent("MouseEvents");
            c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
            return c
        };
        $m.prototype.l = function(a) {
            if (this.g) this.g = !1;
            else {
                var b = a.g,
                    c = b.button,
                    d = b.type,
                    e = ln(b, "mousedown");
                this.h.ee(new _.xd(e, a.currentTarget));
                e = ln(b, "mouseup");
                this.h.Id(new _.xd(e, a.currentTarget));
                kn || (b.button = c, b.type = d)
            }
        };
        $m.prototype.L = function() {
            this.h = null;
            $m.G.L.call(this)
        };
        var mn = function() {};
        _.y(mn, Tm);
        tj(mn);
        _.h = mn.prototype;
        _.h.td = function() {};
        _.h.N = function(a) {
            Zm(a, !1);
            gn(a);
            a.Va(32, !1);
            return a.g.N("BUTTON", {
                "class": Om(this, a).join(" "),
                disabled: !a.isEnabled(),
                title: a.va() || "",
                value: a.Na() || ""
            }, a.cc() || "")
        };
        _.h.Ne = function(a) {
            return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
        };
        _.h.Hb = function(a, b) {
            Zm(a, !1);
            gn(a);
            a.Va(32, !1);
            if (b.disabled) {
                var c = this.g(1);
                _.R(b, c)
            }
            return mn.G.Hb.call(this, a, b)
        };
        _.h.ci = function(a) {
            S(a).D(a.A(), "click", a.Vd)
        };
        _.h.Oe = function() {};
        _.h.bg = function() {};
        _.h.ag = function(a) {
            return a.isEnabled()
        };
        _.h.ud = function() {};
        _.h.ce = function(a, b, c) {
            mn.G.ce.call(this, a, b, c);
            (a = a.A()) && 1 == b && (a.disabled = c)
        };
        _.h.Na = function(a) {
            return a.value
        };
        _.h.hb = function(a, b) {
            a && (a.value = b)
        };
        _.h.Wb = function() {};
        var nn = function(a, b, c) {
            U.call(this, a, b || mn.Ia(), c)
        };
        _.y(nn, U);
        _.h = nn.prototype;
        _.h.Na = function() {
            return this.qb
        };
        _.h.hb = function(a) {
            this.qb = a;
            this.h.hb(this.A(), a)
        };
        _.h.va = function() {
            return this.Z
        };
        _.h.Of = function(a) {
            this.Z = a;
            this.h.Of(this.A(), a)
        };
        _.h.L = function() {
            nn.G.L.call(this);
            delete this.qb;
            delete this.Z
        };
        _.h.ba = function() {
            nn.G.ba.call(this);
            if (this.Ea & 32) {
                var a = this.A();
                a && S(this).D(a, "keyup", this.de)
            }
        };
        _.h.de = function(a) {
            return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Vd(a) : 32 == a.keyCode
        };
        Wm("VIpgJd-LgbsSe", function() {
            return new nn(null)
        });
        var on = function() {};
        _.y(on, Tm);
        tj(on);
        on.prototype.N = function(a) {
            var b = Om(this, a);
            b = a.g.N("DIV", "VIpgJd-TzA9Ye-eEGnhe " + b.join(" "), pn(this, a.za(), a.g));
            this.Of(b, a.va());
            return b
        };
        on.prototype.td = function() {
            return "button"
        };
        on.prototype.Fc = function(a) {
            return a && a.firstChild && a.firstChild.firstChild
        };
        var pn = function(a, b, c) {
            return c.N("DIV", "VIpgJd-TzA9Ye-eEGnhe " + (a.Ga() + "-n0tgWb-Q4BLdf"), c.N("DIV", "VIpgJd-TzA9Ye-eEGnhe " + (a.Ga() + "-SmKAyb-Q4BLdf"), b))
        };
        on.prototype.Ne = function(a) {
            return "DIV" == a.tagName
        };
        on.prototype.Hb = function(a, b) {
            qn(b, !0);
            qn(b, !1);
            a: {
                var c = a.g.Ji(b);
                var d = this.Ga() + "-n0tgWb-Q4BLdf";
                if (c && Wl(c, d) && (c = a.g.Ji(c), d = this.Ga() + "-SmKAyb-Q4BLdf", c && Wl(c, d))) {
                    c = !0;
                    break a
                }
                c = !1
            }
            c || b.appendChild(pn(this, b.childNodes, a.g));
            Xl(b, ["VIpgJd-TzA9Ye-eEGnhe", this.Ga()]);
            return on.G.Hb.call(this, a, b)
        };
        on.prototype.Ga = function() {
            return "goog-custom-button"
        };
        var qn = function(a, b) {
            if (a)
                for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
                    d = b ? c.nextSibling : c.previousSibling;
                    if (3 == c.nodeType) {
                        var e = c.nodeValue;
                        if ("" == (0, _.Wb)(e)) a.removeChild(c);
                        else {
                            c.nodeValue = b ? Rj(e) : Sj(e);
                            break
                        }
                    } else break;
                    c = d
                }
        };
        var rn = function(a, b, c) {
            nn.call(this, a, b || on.Ia(), c);
            this.Va(16, !0)
        };
        _.y(rn, nn);
        Wm("VIpgJd-ornU0b-LgbsSe", function() {
            return new rn(null)
        });
        var sn = function() {
                this.h = [];
                this.g = {};
                this.l = !1;
                this.K = 1;
                this.o = {};
                this.j = null;
                _.D(window, "beforeunload", this.C, !1, this)
            },
            tn = function(a, b, c) {
                if (null == b) return "1";
                switch (_.mb(b)) {
                    case "string":
                        return a = b, 64 < a.length && (null == c || !c) && (a = a.substr(0, 64)), _.Vc(a);
                    case "number":
                        return "" + b;
                    case "boolean":
                        return b ? "1" : "0";
                    case "array":
                        var d = [];
                        for (var e in b) d.push(tn(a, b[e], c));
                        return d.join(",");
                    case "object":
                        d = [];
                        for (var f in b) d.push(un(a, f, b[f], c));
                        return d.join(",");
                    default:
                        return ""
                }
            },
            un = function(a,
                b, c, d) {
                return [_.Vc(b), tn(a, c, d || "smtalt" == b)].join("=")
            };
        sn.prototype.log = function(a, b) {
            this.h.push([a, b]);
            this.l || (this.l = !0, _.ig(this.s, 0, this))
        };
        sn.prototype.s = function() {
            for (var a = 0; a < this.h.length; a++) {
                var b = this.h[a];
                vn(this, b[0], b[1])
            }
            this.h = [];
            this.l = !1
        };
        var vn = function(a, b, c) {
                wn(a, "/gen204?" + (a.j ? ["client=", a.j, "&"].join("") : "") + un(a, b, c))
            },
            wn = function(a, b) {
                var c = new Image,
                    d = a.K++;
                a.o[d] = c;
                c.onload = c.onerror = function() {
                    delete sn.Ia().o[d]
                };
                c.src = b;
                c = null
            },
            yn = function(a, b) {
                var c = 0,
                    d = null;
                b in a.g && (d = a.g[b], c = d[0], d = d[1]);
                if ("object" == _.mb(1)) {
                    "object" != _.mb(d) && (d = {});
                    for (var e in 1) d[e] = xn(e in d ? d[e] : null, 1[e])
                } else d = xn(d, 1);
                a.g[b] = [c, d];
                _.jg(a.g[b][0]);
                c = _.ig((0, _.x)(a.B, a, b), 2E3);
                a.g[b][0] = c
            };
        sn.prototype.B = function(a) {
            vn(this, a, this.g[a][1]);
            a in this.g && (_.jg(this.g[a][0]), delete this.g[a])
        };
        var xn = function(a, b) {
            null == b && (b = 1);
            isNaN(a) && (a = parseInt(a, 10));
            isNaN(b) && (b = parseInt(b, 10));
            return a + b
        };
        sn.prototype.C = function() {
            this.s();
            for (var a in this.g) 0 != this.g[a] && this.B(a)
        };
        sn.Ia = function() {
            return _.lm(sn)
        };
        _.An = function(a, b, c, d, e) {
            this.l = !!b;
            this.node = null;
            this.g = 0;
            this.Tf = !1;
            this.C = !c;
            a && zn(this, a, d);
            this.depth = void 0 != e ? e : this.g || 0;
            this.l && (this.depth *= -1)
        };
        _.y(_.An, _.hf);
        var zn = function(a, b, c, d) {
            if (a.node = b) a.g = "number" === typeof c ? c : 1 != a.node.nodeType ? 0 : a.l ? -1 : 1;
            "number" === typeof d && (a.depth = d)
        };
        _.An.prototype.Dc = function() {
            var a = this.l ? -1 : 1;
            this.g == a && (this.g = -1 * a, this.depth += this.g * (this.l ? -1 : 1))
        };
        _.An.prototype.next = function() {
            if (this.Tf) {
                if (!this.node || this.C && 0 == this.depth) return _.jf;
                var a = this.node;
                var b = this.l ? -1 : 1;
                if (this.g == b) {
                    var c = this.l ? a.lastChild : a.firstChild;
                    c ? zn(this, c) : zn(this, a, -1 * b)
                } else(c = this.l ? a.previousSibling : a.nextSibling) ? zn(this, c) : zn(this, a.parentNode, -1 * b);
                this.depth += this.g * (this.l ? -1 : 1)
            } else this.Tf = !0;
            return (a = this.node) ? {
                value: a,
                done: !1
            } : _.jf
        };
        _.An.prototype.splice = function(a) {
            var b = this.node,
                c = this.l ? 1 : -1;
            this.g == c && (this.g = -1 * c, this.depth += this.g * (this.l ? -1 : 1));
            this.l = !this.l;
            _.An.prototype.next.call(this);
            this.l = !this.l;
            c = _.da(arguments[0]) ? arguments[0] : arguments;
            for (var d = c.length - 1; 0 <= d; d--) gk(c[d], b);
            _.hk(b)
        };
        var Bn = function() {},
            Cn = function(a) {
                for (var b = [], c = 0, d = a.xe(); c < d; c++) b.push(a.Gd(c));
                return b
            },
            Dn = function(a) {
                return a.bh() ? a.Ib() : a.Yb()
            };
        Bn.prototype.bh = function() {
            return !1
        };
        var En = function(a, b) {
            _.An.call(this, a, b, !0)
        };
        _.y(En, _.An);
        var Fn = function(a, b, c, d, e) {
            this.j = this.h = null;
            this.s = this.B = 0;
            this.o = !!e;
            if (a) {
                this.h = a;
                this.B = b;
                this.j = c;
                this.s = d;
                if (1 == a.nodeType && "BR" != a.tagName)
                    if (a = a.childNodes, b = a[b]) this.h = b, this.B = 0;
                    else {
                        a.length && (this.h = _.sa(a));
                        var f = !0
                    }
                1 == c.nodeType && ((this.j = c.childNodes[d]) ? this.s = 0 : this.j = c)
            }
            _.An.call(this, this.o ? this.j : this.h, this.o, !0);
            f && this.next()
        };
        _.y(Fn, En);
        _.h = Fn.prototype;
        _.h.Zi = !1;
        _.h.Se = function() {
            return this.h
        };
        _.h.Ae = function() {
            return this.Tf && (this.node != (this.o ? this.h : this.j) ? !1 : this.o ? this.B ? -1 != this.g : 1 == this.g : !this.s || 1 != this.g)
        };
        _.h.next = function() {
            return this.Ae() || this.Zi ? _.jf : Fn.G.next.call(this)
        };
        _.h.Dc = function() {
            Fn.G.Dc.apply(this);
            _.md(this.node, this.o ? this.h : this.j) && (this.Zi = !0)
        };
        var Gn = function() {};
        Gn.prototype.Xa = function() {
            return new Fn(this.g.startContainer, this.g.startOffset, this.g.endContainer, this.g.endOffset)
        };
        var Hn = function(a) {
            this.g = a
        };
        _.y(Hn, Gn);
        var In = function(a) {
                var b = _.C(a).createRange();
                if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
                else if (dk(a) || 3 == a.nodeType) {
                    for (var c, d = a;
                        (c = d.firstChild) && (dk(c) || 3 == c.nodeType);) d = c;
                    b.setStart(d, 0);
                    for (d = a;
                        (c = d.lastChild) && (dk(c) || 3 == c.nodeType);) d = c;
                    b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
                } else c = a.parentNode, a = Array.prototype.indexOf.call(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
                return b
            },
            Jn = function(a, b, c, d) {
                var e = _.C(a).createRange();
                e.setStart(a, b);
                e.setEnd(c, d);
                return e
            };
        Hn.prototype.select = function(a) {
            this.h(_.ed(_.C(this.g.startContainer)).getSelection(), a)
        };
        Hn.prototype.h = function(a) {
            a.removeAllRanges();
            a.addRange(this.g)
        };
        var Kn = function(a) {
            this.g = a
        };
        _.y(Kn, Hn);
        Kn.prototype.h = function(a, b) {
            !b || this.g.collapsed ? Kn.G.h.call(this, a, b) : (a.collapse(this.g.endContainer, this.g.endOffset), a.extend(this.g.startContainer, this.g.startOffset))
        };
        var Ln = function(a) {
            this.g = a
        };
        _.y(Ln, Hn);
        Ln.prototype.h = function(a, b) {
            b ? a.setBaseAndExtent(this.g.endContainer, this.g.endOffset, this.g.startContainer, this.g.startOffset) : a.setBaseAndExtent(this.g.startContainer, this.g.startOffset, this.g.endContainer, this.g.endOffset)
        };
        var Mn = function(a) {
                return _.fc ? new Ln(a) : _.ec ? new Kn(a) : new Hn(a)
            },
            Nn = function(a) {
                return _.fc ? new Ln(In(a)) : _.ec ? new Kn(In(a)) : new Hn(In(a))
            };
        var On = function() {
            this.s = this.j = this.B = this.h = this.g = null;
            this.o = !1
        };
        _.y(On, Bn);
        var Pn = function(a, b) {
            var c = new On;
            c.g = a;
            c.o = !!b;
            return c
        };
        On.prototype.Lg = function() {
            return Qn(this).g
        };
        On.prototype.xe = function() {
            return 1
        };
        On.prototype.Gd = function() {
            return this
        };
        var Qn = function(a) {
            var b;
            if (!(b = a.g)) {
                b = a.Ib();
                var c = a.Jb(),
                    d = a.Yb(),
                    e = a.Zb();
                b = _.fc ? new Ln(Jn(b, c, d, e)) : _.ec ? new Kn(Jn(b, c, d, e)) : new Hn(Jn(b, c, d, e));
                b = a.g = b
            }
            return b
        };
        _.h = On.prototype;
        _.h.Pe = function() {
            return Qn(this).g.commonAncestorContainer
        };
        _.h.Ib = function() {
            return this.h || (this.h = Qn(this).g.startContainer)
        };
        _.h.Jb = function() {
            return null != this.B ? this.B : this.B = Qn(this).g.startOffset
        };
        _.h.Yb = function() {
            return this.j || (this.j = Qn(this).g.endContainer)
        };
        _.h.Zb = function() {
            return null != this.s ? this.s : this.s = Qn(this).g.endOffset
        };
        _.h.bh = function() {
            return this.o
        };
        _.h.Re = function() {
            return Qn(this).g.collapsed
        };
        _.h.Qe = function() {
            return Qn(this).g.toString()
        };
        _.h.Xa = function() {
            return new Fn(this.Ib(), this.Jb(), this.Yb(), this.Zb())
        };
        _.h.select = function() {
            Qn(this).select(this.o)
        };
        var Rn = function() {};
        _.y(Rn, Bn);
        var Sn = function() {
            this.j = this.h = this.g = null
        };
        _.y(Sn, Rn);
        _.h = Sn.prototype;
        _.h.Lg = function() {
            return this.g || document.body.createControlRange()
        };
        _.h.xe = function() {
            return this.g ? this.g.length : 0
        };
        _.h.Gd = function(a) {
            a = this.g.item(a);
            return Pn(Nn(a))
        };
        _.h.Pe = function() {
            return mk.apply(null, this.Ng())
        };
        _.h.Ib = function() {
            return Tn(this)[0]
        };
        _.h.Jb = function() {
            return 0
        };
        _.h.Yb = function() {
            var a = Tn(this),
                b = _.sa(a);
            return a.find(function(c) {
                return _.md(c, b)
            })
        };
        _.h.Zb = function() {
            return this.Yb().childNodes.length
        };
        _.h.Ng = function() {
            if (!this.h && (this.h = [], this.g))
                for (var a = 0; a < this.g.length; a++) this.h.push(this.g.item(a));
            return this.h
        };
        var Tn = function(a) {
            a.j || (a.j = a.Ng().concat(), a.j.sort(function(b, c) {
                return b.sourceIndex - c.sourceIndex
            }));
            return a.j
        };
        Sn.prototype.Re = function() {
            return !this.g || !this.g.length
        };
        Sn.prototype.Qe = function() {
            return ""
        };
        Sn.prototype.Xa = function() {
            return new Un(this)
        };
        Sn.prototype.select = function() {
            this.g && this.g.select()
        };
        var Un = function(a) {
            this.o = this.j = this.h = null;
            a && (this.o = Tn(a), this.h = this.o.shift(), this.j = _.sa(this.o) || this.h);
            _.An.call(this, this.h, !1, !0)
        };
        _.y(Un, En);
        Un.prototype.Se = function() {
            return this.h
        };
        Un.prototype.Ae = function() {
            return !this.depth && !this.o.length
        };
        Un.prototype.next = function() {
            if (this.Ae()) return _.jf;
            if (!this.depth) {
                var a = this.o.shift();
                zn(this, a, 1, 1);
                return {
                    value: a,
                    done: !1
                }
            }
            return Un.G.next.call(this)
        };
        var Vn = function() {
            this.g = [];
            this.l = [];
            this.j = this.h = null
        };
        _.y(Vn, Rn);
        Vn.prototype.Lg = function() {
            return this.g[0]
        };
        Vn.prototype.xe = function() {
            return this.g.length
        };
        Vn.prototype.Gd = function(a) {
            this.l[a] || (this.l[a] = Pn(Mn(this.g[a])));
            return this.l[a]
        };
        Vn.prototype.Pe = function() {
            if (!this.j) {
                for (var a = [], b = 0, c = this.xe(); b < c; b++) a.push(this.Gd(b).Pe());
                this.j = mk.apply(null, a)
            }
            return this.j
        };
        var Xn = function(a) {
            a.h || (a.h = Cn(a), a.h.sort(function(b, c) {
                var d = b.Ib();
                b = b.Jb();
                var e = c.Ib();
                c = c.Jb();
                return d == e && b == c ? 0 : Wn(d, b, e, c) ? 1 : -1
            }));
            return a.h
        };
        _.h = Vn.prototype;
        _.h.Ib = function() {
            return Xn(this)[0].Ib()
        };
        _.h.Jb = function() {
            return Xn(this)[0].Jb()
        };
        _.h.Yb = function() {
            return _.sa(Xn(this)).Yb()
        };
        _.h.Zb = function() {
            return _.sa(Xn(this)).Zb()
        };
        _.h.Re = function() {
            return 0 == this.g.length || 1 == this.g.length && this.Gd(0).Re()
        };
        _.h.Qe = function() {
            return Cn(this).map(function(a) {
                return a.Qe()
            }).join("")
        };
        _.h.Xa = function() {
            return new Yn(this)
        };
        _.h.select = function() {
            var a = _.ed(_.C(_.B ? this.Pe() : this.Ib())).getSelection();
            a.removeAllRanges();
            for (var b = 0, c = this.xe(); b < c; b++) a.addRange(this.Gd(b).Lg())
        };
        var Yn = function(a) {
            this.h = null;
            this.j = 0;
            a && (this.h = Xn(a).map(function(b) {
                return vk(b)
            }));
            _.An.call(this, a ? this.Se() : null, !1, !0)
        };
        _.y(Yn, En);
        Yn.prototype.Se = function() {
            return this.h[0].Se()
        };
        Yn.prototype.Ae = function() {
            return this.h[this.j].Ae()
        };
        Yn.prototype.next = function() {
            for (; this.j < this.h.length;) {
                var a = this.h[this.j],
                    b = a.next();
                if (b.done) this.j++;
                else return zn(this, a.node, a.g, a.depth), b
            }
            return _.jf
        };
        var $n = function() {
                var a = window.getSelection();
                return a && Zn(a)
            },
            Zn = function(a) {
                var b = !1;
                if (a.createRange) try {
                    var c = a.createRange()
                } catch (e) {
                    return null
                } else if (a.rangeCount) {
                    if (1 < a.rangeCount) {
                        b = new Vn;
                        c = 0;
                        for (var d = a.rangeCount; c < d; c++) b.g.push(a.getRangeAt(c));
                        return b
                    }
                    c = a.getRangeAt(0);
                    b = Wn(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
                } else return null;
                (a = c) && a.addElement ? (b = new Sn, b.g = a, a = b) : a = Pn(Mn(a), b);
                return a
            },
            Wn = function(a, b, c, d) {
                if (a == c) return d < b;
                var e;
                if (1 == a.nodeType && b)
                    if (e =
                        a.childNodes[b]) a = e, b = 0;
                    else if (_.md(a, c)) return !0;
                if (1 == c.nodeType && d)
                    if (e = c.childNodes[d]) c = e, d = 0;
                    else if (_.md(c, a)) return !1;
                return 0 < (lk(a, c) || b - d)
            };
        var ao = function() {
            var a = $n();
            return null != a && !a.Re() && 0 < a.Qe().length
        };
        var bo = function(a) {
                return function() {
                    return a
                }
            },
            co = function(a, b) {
                for (var c = 0; c < b.length - 2; c += 3) {
                    var d = b.charAt(c + 2);
                    d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
                    d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
                    a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
                }
                return a
            },
            eo = function(a, b) {
                var c = b.split(".");
                b = Number(c[0]) || 0;
                a = _.Vk(a);
                for (var d = b, e = 0; e < a.length; e++) d += a[e], d = co(d, "+-a^+6");
                d = co(d, "+-3^+b+-f");
                d ^= Number(c[1]) || 0;
                0 > d && (d = (d & 2147483647) + 2147483648);
                c = d % 1E6;
                return c.toString() + "." + (c ^ b)
            },
            fo = null,
            go = function() {
                var a = bo(String.fromCharCode(116)),
                    b = bo(String.fromCharCode(107));
                a = [a(), a()];
                a[1] = b();
                return a.join("")
            };
        var ho, io, Mi, jo, Ti, ko;
        if ("function" === typeof Symbol && "symbol" === typeof Symbol()) {
            var lo = Symbol(void 0),
                mo = Symbol(void 0),
                no = Symbol(void 0),
                oo = Symbol(void 0);
            io = function(a, b, c, d) {
                a[lo] = b;
                a[oo] = c;
                a[mo] = d;
                a[no] = void 0
            };
            ho = function(a) {
                return null != a[lo]
            };
            Mi = function(a) {
                return a[lo]
            };
            jo = function(a, b) {
                a[lo] = b
            };
            Ti = function(a) {
                return a[oo]
            };
            ko = function(a, b) {
                return a[oo] = b
            }
        } else io = Ei, ho = Fi, Mi = Gi, jo = Hi, Ti = Ii, ko = Ji;
        Object.freeze([]);
        Object.create(null);
        var po = function(a, b) {
            a = a || [];
            if (ho(a)) b && b > a.length && !Ni(a) && jo(a, b), ko(a, this);
            else {
                b = Math.max(b || 2147483647, a.length + 1);
                var c = a.length;
                c = c && a[c - 1];
                if (Ki(c)) {
                    b = a.length;
                    for (var d in c) {
                        var e = Number(d);
                        e < b && (a[e - 1] = c[d], delete c[e])
                    }
                }
                io(a, b, this, void 0)
            }
            this.aa = a
        };
        var qo = function(a) {
            po.call(this, a)
        };
        _.w(qo, po);
        var ro = function(a) {
            po.call(this, a)
        };
        _.w(ro, po);
        var so = function(a) {
            po.call(this, a)
        };
        _.w(so, po);
        var to = function(a) {
                return Vi(a.aa, 1)
            },
            uo = function(a) {
                return Qi(a.aa, 3)
            },
            vo = function(a, b) {
                return Ui(a.aa, 3, qo, b)
            },
            wo = function(a) {
                return Vi(a.aa, 5)
            };
        var xo = function(a) {
            po.call(this, a)
        };
        _.w(xo, po);
        var yo = function(a) {
            po.call(this, a)
        };
        _.w(yo, po);
        var zo = function(a) {
                return Qi(a.aa, 6)
            },
            Ao = function(a, b) {
                return Ui(a.aa, 6, so, b)
            };
        var Bo = function() {
                this.g = 0
            },
            Co = function(a) {
                a = a.Cb("q").join("");
                if (null !== fo) var b = fo;
                else {
                    var c = bo(String.fromCharCode(84));
                    b = bo(String.fromCharCode(75));
                    c = [c(), c()];
                    c[1] = b();
                    b = (fo = window[c.join(b())] || "") || ""
                }
                return "&" + go() + "=" + eo(a, b)
            },
            Do = function(a, b, c, d, e) {
                c = c.toString();
                c += Co(d);
                d = d.toString();
                var f = "POST";
                b += "?" + c;
                2E3 > b.length + d.length && (f = "GET", b += "&" + d, d = "");
                ++a.g;
                _.Gh(b, function(g) {
                    --a.g;
                    e(g)
                }, f, d)
            };
        Bo.prototype.h = function(a, b, c) {
            c = c.target;
            !c.Md() || "[" != c.sc()[0] && "{" != c.sc()[0] ? (Eo(c), b && b(c.Nc())) : (b = Fo(c, "handleSingleResult_"), Array.isArray(b) && (b = new yo(b)), a(b))
        };
        Bo.prototype.j = function(a, b, c) {
            c = c.target;
            if (c.Md()) {
                c = Fo(c, "handleTextResult_");
                var d = [];
                if (a) d.push(Array.isArray(c) ? c[0] : c);
                else if (Array.isArray(c))
                    for (a = 0; a < c.length; ++a) d.push(Array.isArray(c[a]) ? c[a][0] : c[a]);
                b(d)
            } else Eo(c), b(null, c.l)
        };
        var Fo = function(a, b) {
                var c = a.sc();
                a = {
                    "class": "trans.common.TranslationAPI",
                    func: b,
                    url: String(a.o)
                };
                try {
                    var d = JSON.parse(c)
                } catch (e) {
                    throw d = sn.Ia(), a.js = c, a.error = e.message, d.log("jsonParseErr", a), e;
                }
                return d
            },
            Eo = function(a) {
                var b = sn.Ia(),
                    c = String(a.o);
                a = a.sc();
                b.log("invalidResponse", {
                    q: c.substring(0, 500),
                    ql: c.length,
                    r: a.substring(0, 500),
                    rl: a.length
                })
            };
        var Go = function(a) {
            switch (a) {
                case 0:
                    return 1;
                case 1:
                    return 2;
                case 2:
                    return 3;
                case 10:
                    return 4;
                case 3:
                    return 5;
                case 4:
                    return 6;
                case 11:
                    return 7;
                case 5:
                    return 8;
                case 6:
                    return 9;
                case 7:
                    return 10;
                case 8:
                    return 11;
                default:
                    return 0
            }
        };
        var Ho = window.google && google.translate && google.translate._const,
            hj, Oo, Po, To, Xo, Zo;
        Ho || (Ho = {
            _cac: "",
            _cam: "",
            _cest: new Date,
            _cjlc: "",
            _cl: "",
            _cuc: "",
            _cnad: !1,
            _cnal: {},
            bo: "",
            _pah: "",
            _pas: "",
            _pbi: "",
            _pci: "",
            _phf: "",
            _pli: "",
            _plla: "",
            _pmi: "",
            _ps: "",
            _pta: "",
            _puh: ""
        });
        _.Io = window.google && window.google.translate && window.google.translate.v || "";
        _.Jo = Ho._cl || "en";
        hj = Ho._cuc;
        _.Ko = Ho._cnad;
        _.Lo = Ho._cest;
        _.Mo = Ho._cnal || {};
        _.ij = "lib" == Ho._cam ? 1 : 0;
        _.No = (Ho._cac || "te") + (1 == _.ij ? "_lib" : "");
        Oo = function() {
            function a(d) {
                return function() {
                    return d
                }
            }
            var b = String.fromCharCode(107),
                c = a(String.fromCharCode(116));
            b = a(b);
            c = [c(), c()];
            c[1] = b();
            return Ho["_c" + c.join(b())] || ""
        }();
        Po = Ho._pah || "";
        _.Qo = Ho._pas || "https://";
        _.Ro = Ho._pbi || "";
        _.So = Ho._pci || "";
        To = Ho._plla || "";
        _.Uo = Ho._pli || "";
        _.Vo = Ho._pmi || "";
        _.Wo = Ho._ps || "";
        Xo = Ho._puh || "";
        _.Yo = "//" + Xo + "/translate_suggestion?client=" + _.No;
        Zo = "//" + Po + "/translate_voting?client=" + _.No;
        _.$o = "https://www.google.com/support/translate" + ("en" == _.Jo ? "" : "#googtrans/en/" + _.Jo);
        /*

        Math.uuid.js (v1.4)
        http://www.broofa.com
        mailto:robert@broofa.com
        Copyright (c) 2010 Robert Kieffer
        Dual licensed under the MIT and GPL licenses.
        */
        _.ap = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
        var dp, kp, lp, mp, np;
        _.bp = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) b[a[c]] = !0;
            return b
        };
        _.cp = function(a) {
            this.h = a ? [a] : [];
            this.g = [0];
            this.j = !1
        };
        _.cp.prototype.register = function(a) {
            if (this.j) return a || function() {};
            this.g.push(0);
            var b = this.g.length - 1;
            return (0, _.x)(function() {
                this.g[b]++;
                a && a.apply(null, arguments);
                dp(this)
            }, this)
        };
        _.cp.prototype.delay = function(a) {
            return this.j ? a : (0, _.x)(function() {
                if (this.j) a.apply(null, arguments);
                else {
                    var b = arguments;
                    this.h.push(function() {
                        a.apply(null, b)
                    })
                }
            }, this)
        };
        _.cp.prototype.finish = function() {
            this.g[0] = 1;
            dp(this)
        };
        dp = function(a) {
            for (var b = 0; b < a.g.length; ++b)
                if (0 == a.g[b]) return;
            a.j = !0;
            for (b = 0; b < a.h.length; ++b) {
                var c = a.h[b];
                a.h[b] = null;
                c.call()
            }
            a.h = [];
            a.g = []
        };
        _.ep = function(a) {
            this.j = a;
            this.h = this.g = !1
        };
        _.fp = function(a, b) {
            return (0, _.x)(function() {
                b && b.apply(null, arguments);
                this.h ? this.g || (this.j.call(), this.g = !0) : this.g = !0
            }, a)
        };
        _.ep.prototype.finish = function() {
            this.h || (this.h = !0, this.g && this.j.call())
        };
        var gp = function(a, b, c) {
                this.g = b;
                this.B = a;
                this.s = c || 0;
                this.j = this.h = !1
            },
            hp = function(a) {
                a.h || a.o()
            };
        gp.prototype.o = function() {
            (this.h = (this.j = !!this.B.call()) || 0 >= --this.s) ? (this.g.call(null, this.j), this.l = 0) : this.l = window.setTimeout((0, _.x)(this.o, this), 30)
        };
        gp.prototype.cancel = function() {
            this.l && window.clearTimeout(this.l);
            this.h = !0;
            this.g.call(null, this.j)
        };
        _.ip = function(a, b) {
            return function() {
                a.dispatchEvent(b)
            }
        };
        _.jp = function(a) {
            a = (0, _.Wb)(a).toLowerCase().replace("_", "-");
            if ("zh-cn" == a) return "zh-CN";
            if ("zh-tw" == a) return "zh-TW";
            var b = a.indexOf("-");
            a = 0 <= b ? a.substring(0, b) : a;
            return "zh" == a ? "zh-CN" : a
        };
        kp = function(a) {
            var b = [],
                c;
            for (c in a)
                if (a[c] !== Object.prototype[c]) {
                    var d = _.Vc(c);
                    if ("array" == _.mb(a[c]))
                        for (var e = 0; e < a[c].length; ++e) b.push(d + "=" + _.Vc(a[c][e]));
                    else b.push(d + "=" + _.Vc(a[c]))
                }
            return b.join("&")
        };
        _.Zi = function(a, b) {
            b = b || {};
            b.nca = a;
            b.client = _.No;
            _.Io && (b.logld = "v" + _.Io);
            var c = new Image;
            c.src = "//" + Xo + "/gen204?" + kp(b);
            c.onload = function() {
                c.onload = null
            }
        };
        lp = function() {
            var a = {};
            try {
                for (var b in Object.prototype) {
                    var c = Object.prototype[b];
                    delete Object.prototype[b];
                    a[b] = c
                }
            } catch (d) {
                return {}
            }
            return a
        };
        mp = function(a) {
            for (var b in a) Object.prototype[b] = a[b]
        };
        np = function(a) {
            for (var b in a)
                if (a[b] !== Object.prototype[b]) return !1;
            return !0
        };
        var op;
        _.Yi = null;
        op = function() {};
        op.prototype.attach = function(a, b, c) {
            for (var d in c) c[d] !== Object.prototype[d] && (b[d] = "function" === typeof c[d] ? c[d] : _.rb($i, a, Number(c[d])))
        };
        _.pp = new op;
        var aj = function(a) {
            _.J.call(this, a)
        };
        _.w(aj, _.J);
        /*

         SPDX-License-Identifier: Apache-2.0
        */
        var qp = function(a) {
                this.url = a;
                this.timeout = -1;
                this.j = this.h = "callback";
                this.g = this.jd = null
            },
            up = function(a, b) {
                b = void 0 === b ? {} : b;
                a.g = uk();
                var c = new Ok(a.url),
                    d = new Map;
                a.j && d.set(a.j, a.h);
                c.g.o(Sk(b), d);
                rp(a).then(function() {
                    sp(a, c.toString())
                }).then(function() {
                    return a.g.promise
                }).then(function() {
                    tp(a)
                }, function() {
                    tp(a)
                });
                0 < a.timeout && (a.l = setTimeout(function() {
                    a.g.reject("Timeout!")
                }, a.timeout));
                return a.g.promise
            },
            sp = function(a, b) {
                var c = new MessageChannel;
                a.jd.contentWindow.postMessage({
                        url: b,
                        callbackName: a.h
                    },
                    "*", [c.port2]);
                c.port1.onmessage = function(d) {
                    var e = {};
                    void 0 !== a.l && (clearTimeout(a.l), a.l = void 0);
                    void 0 === d.data && a.g.reject("Callback called, but no data received");
                    "string" !== typeof d.data && a.g.reject("Exploitation attempt! Data is not a string!");
                    try {
                        e = JSON.parse(d.data)
                    } catch (f) {
                        a.g.reject("Invalid Data received: " + f.message)
                    }
                    a.g.resolve(e)
                }
            },
            rp = function(a) {
                var b = uk(),
                    c = _.fd(document, "IFRAME");
                if (!c.sandbox) throw Error("Ba");
                c.sandbox.value = "allow-scripts";
                c.style.display = "none";
                a.jd = c;
                a = bj();
                a = _.Jj(_.Pc, Mj("body", {}, _.Oc(_.Nc(wi(a)).toString())));
                c.srcdoc = _.Nc(a);
                a = _.Ib("data:text/html;charset=UTF-8;base64," + btoa(_.Nc(a).toString()));
                c.src = _.Ma(a).toString();
                c.addEventListener("load", function() {
                    return b.resolve(c)
                }, !1);
                c.addEventListener("error", function(d) {
                    b.reject(d)
                }, !1);
                document.documentElement.appendChild(c);
                return b.promise
            },
            tp = function(a) {
                null !== a.jd && (document.documentElement.removeChild(a.jd), a.jd = null)
            };
        var vp = function(a, b) {
            _.z.call(this);
            this.g = new Ok(a);
            if (b)
                for (var c in b) b[c] !== Object.prototype[c] && this.g.g.set(c, b[c])
        };
        _.w(vp, _.z);
        vp.prototype.Mb = function() {
            return !0
        };
        vp.prototype.fb = function() {
            return this.Mb()
        };
        vp.prototype.send = function() {
            return null
        };
        vp.prototype.cancel = function() {};
        var wp = function(a, b, c, d) {
            vp.call(this, a, b);
            this.j = null == d || !!d;
            a = this.h = new qp(this.g);
            a.h = "callback";
            a.j = void 0 === c ? "callback" : c
        };
        _.w(wp, vp);
        wp.prototype.Mb = function() {
            return this.j
        };
        wp.prototype.send = function(a, b) {
            a = up(this.h, a);
            a.then(b);
            return a
        };
        wp.prototype.cancel = function(a) {
            a.cancel()
        };
        var xp = function(a, b) {
            vp.call(this, a, b);
            this.j = {};
            this.h = this.l = 0;
            window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest && (this.h = 1);
            !this.h && window.XDomainRequest && "file:" != window.location.protocol && (this.h = 2, this.g.g.set("u", window.location.href))
        };
        _.w(xp, vp);
        xp.prototype.Mb = function() {
            return !!this.h
        };
        xp.prototype.send = function(a, b) {
            var c = lp(),
                d = ++this.l,
                e = {},
                f = {};
            "q" in a && (f.q = a.q, delete a.q);
            a.mode = this.h;
            1 == this.h ? (e.Ec = new _.kg, _.D(e.Ec, "complete", (0, _.x)(function() {
                e.je || (e.Ec.Md() ? b(e.Ec.sc()) : (this.kj(), b(null, e.Ec.sc() || null)), yp(this, d))
            }, this)), _.D(e.Ec, "timeout", (0, _.x)(function() {
                e.je || (this.lj(), yp(this, d))
            }, this)), e.Ec.send(this.g.toString() + "&" + kp(a), "POST", kp(f), {
                "Content-Type": "application/x-www-form-urlencoded"
            })) : (e.Xb = new XDomainRequest, e.Xb.timeout = 2E4, e.Xb.onload = (0, _.x)(function() {
                e.je ||
                    (b(e.Xb.responseText), yp(this, d))
            }, this), e.Xb.onerror = (0, _.x)(function() {
                e.je || (this.kj(), b(null), yp(this, d))
            }, this), e.Xb.ontimeout = (0, _.x)(function() {
                e.je || (this.lj(), b(null), yp(this, d))
            }, this), e.Xb.open("POST", this.g.toString() + "&" + kp(a)), e.Xb.send(kp(f)));
            this.j[d] = e;
            mp(c);
            return d
        };
        xp.prototype.cancel = function(a) {
            var b = this.j[a];
            b && (b.je = !0, b.Xb && b.Xb.abort(), yp(this, a))
        };
        var yp = function(a, b) {
            var c = a.j[b];
            c && (c.Ec ? (c.Ec.S(), c.Ec = null) : c.Xb && (c.Xb = null), delete a.j[b])
        };
        xp.prototype.L = function() {
            vp.prototype.L.call(this);
            for (var a in this.j) this.cancel(a)
        };
        _.pp.attach(17170, xp.prototype, {
            lj: 1,
            kj: 2
        });
        var zp = function(a, b, c) {
            vp.call(this, a, c);
            this.j = b.proxyIsSupported;
            this.l = b.proxySend;
            this.h = b.proxyCancel
        };
        _.w(zp, vp);
        zp.prototype.Mb = function() {
            return this.j()
        };
        zp.prototype.send = function(a, b) {
            return this.l(this.g.toString(), a, b)
        };
        zp.prototype.cancel = function(a) {
            this.h(a)
        };
        var Ap = function(a, b) {
            _.z.call(this);
            this.j = !0;
            this.h = a;
            this.g = b ? b : null
        };
        _.w(Ap, _.z);
        var Bp = function(a, b) {
            if (!a.j) return b;
            if ("array" != _.mb(b)) a = [
                [b, 200]
            ];
            else if (2 == b.length && "array" != _.mb(b[0]) && "array" != _.mb(b[1])) a = [
                [b[0], 200, b[1]],
                [b[1], 200, b[1]]
            ];
            else {
                a = [];
                for (var c = 0; c < b.length; ++c) a[c] = "array" != _.mb(b[c]) ? [b[c], 200] : [b[c][0], 200, b[c][1]]
            }
            return a
        };
        Ap.prototype.o = function(a) {
            var b = this;
            return function(c) {
                if (c) try {
                    var d = c.indexOf("\x00");
                    0 <= d && (c = c.substr(0, d));
                    var e = JSON.parse(c)
                } catch (f) {
                    e = null, b.Tl()
                }
                e ? a(Bp(b, e), 200) : a([], 500)
            }
        };
        Ap.prototype.l = function(a) {
            var b = this;
            return function(c) {
                c ? a(Bp(b, c), 200) : a([], 500)
            }
        };
        Ap.prototype.L = function() {
            _.z.prototype.L.call(this)
        };
        _.pp.attach(47504, Ap.prototype, {
            Tl: function() {
                _.Zi("te_afbr")
            }
        });
        _.Cp = function(a) {
            return a
        };
        _.Dp = {
            0: "NO_ERROR",
            1: "UNKNOWN_ERROR",
            2: "JWT_TOKEN_CANNOT_PARSE",
            3: "JWT_TOKEN_MISS_PARAM",
            4: "JWT_TOKEN_INVALID_ISS",
            5: "JWT_TOKEN_INVALID",
            6: "INTERNAL_SERVER_ERROR",
            7: "OUT_OF_QUOTA",
            8: "INTERNAL_SERVER_ERROR"
        };
        _.Fp = function(a, b, c, d, e, f) {
            _.z.call(this);
            var g;
            b ? g = {
                client: b
            } : g = {
                anno: 3,
                client: _.No,
                format: "html",
                v: "1.0"
            };
            c && (g.sp = c);
            g.key = a;
            _.Io && (g.logld = "v" + _.Io);
            this.s = d || null;
            this.sd = e || null;
            this.g = null;
            this.h = {
                ke: (0, _.x)(this.K, this),
                lh: 300
            };
            a = this.o = new Ap(g, f);
            b = _.Qo + To;
            this.l = a.g ? new zp(b, a.g, {
                client: _.No
            }) : new wp(b, {
                client: _.No
            });
            a = this.o;
            if (a.g) {
                if (!a.g) throw Error("Ca");
                a = [{
                    Sa: new zp(_.Qo + Po + "/translate_a/t", a.g, a.h),
                    ke: (0, _.x)(a.l, a),
                    If: 1900,
                    mh: 4294967295,
                    kh: -1,
                    Gh: 0,
                    pf: !1
                }]
            } else b = _.Qo + Po, a = [{
                Sa: new xp(b +
                    "/translate_a/t", a.h),
                ke: (0, _.x)(a.o, a),
                If: 30720,
                mh: 4294967295,
                kh: -1,
                Gh: 0,
                pf: !1
            }, {
                Sa: new wp(b + "/translate_a/t", a.h, "cb", _.B && 7 >= _.tc),
                ke: (0, _.x)(a.l, a),
                If: 1900,
                mh: 4294967295,
                kh: -1,
                Gh: 3,
                pf: !0
            }];
            this.B = new Ep(a);
            this.j = !1;
            for (b = 0; b < a.length; ++b) this.j = this.j || a[b].Sa.Mb();
            this.j || this.Ul()
        };
        _.w(_.Fp, _.z);
        _.Fp.prototype.K = function(a) {
            return function(b) {
                if (b) try {
                    var c = JSON.parse(b)
                } catch (d) {
                    c = null
                }
                a(c && c[1] || void 0)
            }
        };
        _.Fp.prototype.initialize = function(a) {
            this.C || (this.C = !0, this.B.start((0, _.x)(function(b) {
                b && (this.g = b, this.h.Sa = b.Sa);
                a()
            }, this)))
        };
        _.Fp.prototype.Mb = function() {
            return this.j
        };
        _.Fp.prototype.fb = function() {
            return null !== this.g && null !== this.g.Sa && this.g.Sa.fb()
        };
        _.Gp = function(a, b, c) {
            b = a.h.ke(b);
            a.h.Sa.send({
                q: c.substring(0, a.h.lh),
                sl: "auto",
                tl: "en"
            }, b)
        };
        _.Fp.prototype.translate = function(a, b, c, d, e, f, g, k) {
            var l = this,
                m = this.g.ke(a),
                n = {
                    q: b,
                    sl: c,
                    tl: d
                };
            n = _.Cp(n);
            n.tc = e;
            f && (n.ctt = 1);
            g && (n.dom = 1);
            k && (n.sr = 1);
            n[go()] = eo(b.join(""), Oo);
            return this.s ? this.s.h().then(function(p) {
                null != p && (n.jwtt = p, n.rurl = location.hostname);
                return l.g.Sa.send(n, (0, _.x)(Hp(m), l))
            }, function(p) {
                p && l.sd && l.sd(p)
            }) : this.g.Sa.send(n, m)
        };
        var Hp = function(a) {
                return function(b, c) {
                    if (c && this.sd) {
                        try {
                            var d = JSON.parse(c).error_code
                        } catch (e) {
                            d = null
                        }
                        c = _.Dp[1];
                        this.sd(null == d ? c : _.Dp[d] || c)
                    }
                    a(b)
                }
            },
            Ip = function(a, b) {
                b instanceof _.ne ? b.then(function(c) {
                    a.g.Sa.cancel(c)
                }) : a.g.Sa.cancel(b)
            },
            Jp = function(a) {
                return a.g.pf ? a.g.If - (new Ok(a.g.Sa.g)).toString().length : a.g.If
            };
        _.Fp.prototype.L = function() {
            _.z.prototype.L.call(this);
            this.g && (this.g.Sa.S(), this.g.Sa = null);
            this.h.Sa = null;
            this.l.S();
            this.l = null
        };
        _.pp.attach(7361, _.Fp.prototype, {
            Ul: function() {
                _.Zi("te_au")
            }
        });
        var Ep = function(a) {
            this.h = a
        };
        Ep.prototype.start = function(a) {
            this.g = a;
            this.j = 0;
            Kp(this)
        };
        var Kp = function(a) {
            if (a.j >= a.h.length) a.g(null);
            else {
                var b = a.h[a.j++];
                b.ym ? hp(new gp((0, _.x)(b.Sa.fb, b.Sa), (0, _.x)(function(c) {
                    c ? this.g(b) : Kp(this)
                }, a), b.ym)) : b.Sa.fb() ? a.g(b) : Kp(a)
            }
        };
        var Lp = function() {
            this.g = []
        };
        Lp.prototype.add = function(a) {
            this.g.push(a)
        };
        var Mp = function() {
            this.g = []
        };
        _.w(Mp, Lp);
        Mp.prototype.add = function(a) {
            if (a)
                for (; a(););
        };
        Mp.Ia = function() {
            return _.lm(Mp)
        };
        _.Op = function(a) {
            this.g = [];
            this.h = .5;
            Np(this, a);
            this.l = 0;
            this.j = !0;
            this.o = (0, _.x)(this.s, this)
        };
        _.w(_.Op, Lp);
        var Np = function(a, b) {
            1 < b ? a.h = 1 : .001 > b ? a.h = .001 : b && (a.h = b)
        };
        _.Op.prototype.add = function(a) {
            Lp.prototype.add.call(this, a);
            this.j && Pp(this)
        };
        var Pp = function(a) {
            a.j = !1;
            window.setTimeout(a.o, Math.min(a.l, 5E3))
        };
        _.Op.prototype.s = function() {
            var a = (new Date).getTime();
            do {
                this.g.length && (this.g[0] && this.g[0]() || this.g.shift());
                var b = !!this.g.length;
                var c = 95 * this.h + 5;
                var d = (new Date).getTime() - a
            } while (b && d < c);
            this.l = Math.ceil(d * (1 / this.h - 1)) + 1;
            b ? Pp(this) : this.j = !0
        };
        var Qp = _.bp("A ABBR ACRONYM B BASEFONT BDO BIG CITE DFN EM FONT I INPUT NOBR LABEL Q S SMALL SPAN STRIKE STRONG SUB SUP TEXTAREA TT U VAR".split(" ")),
            Rp = _.bp("APPLET AREA BASE FRAME FRAMESET HR LINK META NOFRAMES NOSCRIPT INPUT TEXTAREA TITLE".split(" ")),
            Sp = _.bp("BR CODE IMG KBD MAP OBJECT PARAM SCRIPT STYLE WBR svg".split(" ")),
            Tp = _.bp(["submit", "button"]);
        var Vp = function(a, b) {
                this.j = _.B ? [] : null;
                this.h = [];
                this.done = !1;
                for (this.g = new _.An(a, !1, b, 3 === a.nodeType ? 0 : 1, 1); a = a.parentNode;) Up(this, a, !0);
                this.h.push(!1);
                this.h.reverse();
                for (a = 1; a < this.h.length; ++a) null == this.h[a] && (this.h[a] = this.h[a - 1])
            },
            Up = function(a, b, c) {
                c = void 0 === c ? !1 : c;
                var d = (b.style && b.style.whiteSpace || "").substring(0, 3);
                "pre" === d || !d && "PRE" === b.tagName ? a.h.push(!0) : d && "pre" !== d ? a.h.push(!1) : c ? a.h.push(null) : a.h.push(a.h[a.h.length - 1])
            },
            Wp = function(a) {
                return !!a.h[a.h.length - 1]
            };
        Vp.prototype.node = function() {
            return this.g.node
        };
        Vp.prototype.depth = function() {
            return this.g.depth
        };
        Vp.prototype.next = function() {
            try {
                this.j && 0 < this.j.length && -1 === this.g.g && this.j.length--; - 1 === this.g.g && this.h.length--;
                if (this.j && 0 < this.j.length && 1 !== this.g.g && !this.g.node.nextSibling) zn(this.g, this.j[this.j.length - 1], -1, this.g.depth - 1);
                else {
                    if (this.g.next().done) {
                        this.done = !0;
                        return
                    }
                    this.j && 1 === this.g.g && this.j.push(this.g.node)
                }
                1 === this.g.g && this.g.Tf && Up(this, this.g.node)
            } catch (a) {
                this.am(a), this.done = !0
            }
        };
        _.pp.attach(52754, Vp.prototype, {
            am: 1
        });
        var Xp;
        Xp = function() {
            return "[msg_undefined]"
        };
        _.V = {};
        (function() {
            var a = function(b) {
                return function() {
                    return b
                }
            };
            _.V = {
                lg: a(0),
                Wf: a(1),
                Xh: a(2),
                Hn: a(3),
                vk: a(4),
                Zh: a(5),
                mk: a(45),
                nk: a(6),
                ki: a(7),
                zd: a(8),
                xk: a(9),
                Wn: a(10),
                Bk: a(11),
                li: a(12),
                Tn: a(13),
                tk: a(14),
                Sn: a(15),
                mi: a(16),
                Yn: a(17),
                yk: a(18),
                bn: a(19),
                Gn: a(20),
                Yj: a(21),
                uk: a(22),
                Nn: a(23),
                Mn: a(24),
                rk: a(25),
                Xn: a(26),
                wk: a(27),
                sk: a(28),
                pk: a(29),
                zk: a(30),
                an: a(32),
                Zm: a(33),
                Ak: a(34),
                on: a(35),
                hn: a(36),
                nn: a(37),
                ni: a(38),
                yn: a(39),
                Wh: a(40),
                ji: a(41),
                hi: a(46),
                qk: a(47),
                Xj: a(48)
            }
        })();
        _.Yp = function() {
            var a = gj("google.translate.m");
            if (a)
                for (var b in _.V)
                    if (_.V[b] !== Object.prototype[_.V[b]] && _.V[b]) {
                        var c = _.V[b]();
                        _.V[b] = a[c] ? a[c] : Xp
                    }
        };
        var Zp = function() {
            _.E.call(this);
            this.g = 0;
            this.endTime = this.startTime = null
        };
        _.y(Zp, _.E);
        Zp.prototype.j = function() {
            this.h("begin")
        };
        Zp.prototype.Eb = function() {
            this.h("end")
        };
        Zp.prototype.Qc = function() {
            this.h("stop")
        };
        Zp.prototype.h = function(a) {
            this.dispatchEvent(a)
        };
        var $p = function(a, b) {
                Array.isArray(b) || (b = [b]);
                b = b.map(function(c) {
                    return "string" === typeof c ? c : c.no + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
                });
                _.K(a, "transition", b.join(","))
            },
            aq = _.yb(function() {
                if (_.B) return _.vc("10.0");
                var a = _.fd(document, "DIV"),
                    b = _.fc ? "-webkit" : _.ec ? "-moz" : _.B ? "-ms" : null,
                    c = {
                        transition: "opacity 1s linear"
                    };
                b && (c[b + "-transition"] = "opacity 1s linear");
                b = Mj("div", {
                    style: c
                });
                _.Ci(a, b);
                a = a.firstChild;
                b = a.style[_.Dh("transition")];
                return "" != ("undefined" !== typeof b ? b : a.style[_.Xh(a,
                    "transition")] || "")
            });
        var bq = function(a, b, c, d, e) {
            Zp.call(this);
            this.J = a;
            this.s = b;
            this.B = c;
            this.l = d;
            this.C = Array.isArray(e) ? e : [e]
        };
        _.y(bq, Zp);
        _.h = bq.prototype;
        _.h.play = function() {
            if (1 == this.g) return !1;
            this.j();
            this.h("play");
            this.startTime = _.sb();
            this.g = 1;
            if (aq()) return _.K(this.J, this.B), this.o = _.ig(this.xm, void 0, this), !0;
            this.cg(!1);
            return !1
        };
        _.h.xm = function() {
            il(this.J);
            $p(this.J, this.C);
            _.K(this.J, this.l);
            this.o = _.ig((0, _.x)(this.cg, this, !1), 1E3 * this.s)
        };
        _.h.stop = function() {
            1 == this.g && this.cg(!0)
        };
        _.h.cg = function(a) {
            _.K(this.J, "transition", "");
            _.jg(this.o);
            _.K(this.J, this.l);
            this.endTime = _.sb();
            this.g = 0;
            a ? this.Qc() : this.h("finish");
            this.Eb()
        };
        _.h.L = function() {
            this.stop();
            bq.G.L.call(this)
        };
        var cq = function(a, b) {
            _.E.call(this);
            this.o = new _.F(this);
            this.vd(a || null);
            b && (this.Zd = b)
        };
        _.y(cq, _.E);
        _.h = cq.prototype;
        _.h.J = null;
        _.h.ie = !0;
        _.h.si = null;
        _.h.bd = !1;
        _.h.gh = -1;
        _.h.Zd = "toggle_display";
        _.h.A = function() {
            return this.J
        };
        _.h.vd = function(a) {
            if (this.bd) throw Error("Da");
            this.J = a
        };
        _.h.Ge = function(a) {
            if (this.bd) throw Error("Da");
            this.ie = a
        };
        _.h.isVisible = function() {
            return this.bd
        };
        _.h.U = function(a) {
            this.Ka && this.Ka.stop();
            this.Ra && this.Ra.stop();
            if (a) {
                if (!this.bd && this.dg()) {
                    if (!this.J) throw Error("Ea");
                    this.lc();
                    a = _.C(this.J);
                    if (this.ie)
                        if (this.o.D(a, "mousedown", this.sh, !0), _.B) {
                            try {
                                var b = a.activeElement
                            } catch (d) {}
                            for (; b && "IFRAME" == b.nodeName;) {
                                try {
                                    var c = _.nk(b)
                                } catch (d) {
                                    break
                                }
                                a = c;
                                b = a.activeElement
                            }
                            this.o.D(a, "mousedown", this.sh, !0);
                            this.o.D(a, "deactivate", this.uj)
                        } else this.o.D(a, "blur", this.uj);
                    "toggle_display" == this.Zd ? (this.J.style.visibility = "visible", _.O(this.J, !0)) :
                        "move_offscreen" == this.Zd && this.lc();
                    this.bd = !0;
                    this.gh = Date.now();
                    this.Ka ? (_.Kd(this.Ka, "end", this.vj, !1, this), this.Ka.play()) : this.vj()
                }
            } else dq(this)
        };
        _.h.lc = function() {};
        var dq = function(a, b) {
            a.bd && a.dispatchEvent({
                type: "beforehide",
                target: b
            }) && (a.o && _.$f(a.o), a.bd = !1, a.Ra ? (_.Kd(a.Ra, "end", _.rb(a.wi, b), !1, a), a.Ra.play()) : a.wi(b))
        };
        _.h = cq.prototype;
        _.h.wi = function(a) {
            "toggle_display" == this.Zd ? this.Ll() : "move_offscreen" == this.Zd && (this.J.style.top = "-10000px");
            this.uh(a)
        };
        _.h.Ll = function() {
            this.J.style.visibility = "hidden";
            _.O(this.J, !1)
        };
        _.h.dg = function() {
            return this.dispatchEvent("beforeshow")
        };
        _.h.vj = function() {
            this.dispatchEvent("show")
        };
        _.h.uh = function(a) {
            this.dispatchEvent({
                type: "hide",
                target: a
            })
        };
        _.h.sh = function(a) {
            a = a.target;
            _.md(this.J, a) || eq(this, a) || 150 > Date.now() - this.gh || dq(this, a)
        };
        _.h.uj = function(a) {
            var b = _.C(this.J);
            if ("undefined" != typeof document.activeElement) {
                if (a = b.activeElement, !a || _.md(this.J, a) || "BODY" == a.tagName || eq(this, a)) return
            } else if (a.target != b) return;
            150 > Date.now() - this.gh || dq(this)
        };
        var eq = function(a, b) {
            return _.Tb(a.si || [], function(c) {
                return b === c || _.md(c, b)
            })
        };
        cq.prototype.L = function() {
            cq.G.L.call(this);
            this.o.S();
            _.ca(this.Ka);
            _.ca(this.Ra);
            delete this.J;
            delete this.o;
            delete this.si
        };
        var fq = function(a, b) {
            this.s = b || void 0;
            cq.call(this, a)
        };
        _.y(fq, cq);
        fq.prototype.lc = function() {
            if (this.s) {
                var a = !this.isVisible() && "move_offscreen" != this.Zd,
                    b = this.A();
                a && (b.style.visibility = "hidden", _.O(b, !0));
                this.s.h(b, 8, this.jh);
                a && _.O(b, !1)
            }
        };
        var gq = function(a, b) {
            fq.call(this, a);
            this.j = b;
            this.g = 0;
            this.h = null;
            this.l = 0;
            this.U(!0);
            this.U(!1);
            _.R(this.A(), "round-trip-popup");
            _.R(this.j, "round-trip-content")
        };
        _.w(gq, fq);
        gq.prototype.K = function() {
            _.jg(this.l);
            1 == this.g ? _.Kd(this.h, "finish", (0, _.x)(this.K, this)) : 0 == this.g && (this.l = _.ig((0, _.x)(this.C, this, -1), 200))
        };
        gq.prototype.C = function(a) {
            if (this.g != a && (0 != this.g || !(this.isVisible() && 1 == a || !this.isVisible() && -1 == a))) {
                var b = this.isVisible();
                this.U(!0);
                var c = -Math.ceil(il(this.j).width);
                jl(this.A()) && (c = -c);
                var d = 1 == a ? c : 0;
                c = 1 == a ? 0 : c;
                this.U(b);
                if (aq()) {
                    b = .2;
                    if (0 != this.g) {
                        var e = parseInt(Yk(this.j, "left"), 10);
                        this.B();
                        b *= (c - e) / (c - d);
                        d = e
                    }
                    this.g = a;
                    this.h = new bq(this.j, b, {
                        left: d + "px"
                    }, {
                        left: c + "px"
                    }, "left " + b + "s");
                    this.h.play();
                    _.Kd(this.h, "finish", (0, _.x)(this.B, this)); - 1 == a ? _.Kd(this.h, "finish", (0, _.x)(this.U, this, !1)) : this.U(!0)
                } else _.K(this.j, "left", c + "px"), this.U(1 == a ? !0 : !1)
            }
        };
        gq.prototype.B = function() {
            0 != this.g && (this.h.stop(), _.ig((0, _.x)(sk, this, this.h)), this.g = 0, this.h = null)
        };
        var iq = function() {
            this.J = null;
            this.g = _.bk("DIV", "gt-hl-layer", document.createTextNode(""));
            this.h = null;
            this.J && (fk(this.g, this.J), hq(this))
        };
        iq.prototype.attach = function(a) {
            this.h = a
        };
        var kq = function(a, b, c, d, e) {
                var f = d || "gt-hl-text";
                d = a.J && (a.J.value || _.rd(a.J));
                hq(a);
                _.id(a.g);
                if (b != c || e) {
                    if (0 < b) {
                        var g = d.substring(0, b);
                        jq(a.g, g, 0, e)
                    }
                    b < c && (g = d.substring(b, c), f = _.bk("SPAN", f), jq(f, g, b, e), a.g.appendChild(f));
                    c < d.length && (g = d.substring(c), jq(a.g, g, c, e))
                }
            },
            hq = function(a) {
                var b = a.J;
                var c = _.C(b),
                    d = _.B && b.currentStyle;
                d && _.cd(_.Zc(c).X) && "auto" != d.width && "auto" != d.height && !d.boxSizing ? (c = nl(b, d.width, "width", "pixelWidth"), b = nl(b, d.height, "height", "pixelHeight"), b = new _.Tc(c, b)) : (d = _.ll(b),
                    c = pl(b), b = sl(b), b = new _.Tc(d.width - b.left - c.left - c.right - b.right, d.height - b.top - c.top - c.bottom - b.bottom));
                _.tl(a.g, b);
                c = el(a.J);
                b = a.g;
                d = c.x;
                c = c.y;
                var e = el(b);
                d instanceof N && (c = d.y, d = d.x);
                _.al(b, b.offsetLeft + (d - e.x), b.offsetTop + (Number(c) - e.y));
                b = pl(a.J);
                _.K(a.g, "paddingLeft", b.left + "px");
                _.K(a.g, "paddingRight", b.right + "px");
                a.g.dir = a.J.dir
            },
            jq = function(a, b, c, d) {
                d = d || [];
                for (var e = 0, f; f = d[e]; e++)
                    if (!(0 > f.te - c)) {
                        if (f.te - c >= b.length) break;
                        if (0 < f.te - c) {
                            var g = b.substring(0, f.te - c);
                            lq(a, g)
                        }
                        var k = f.className ||
                            "gt-hl-text";
                        g = b.substring(f.te - c, f.Qh - c);
                        var l = _.bk("SPAN");
                        Vl(l, k);
                        lq(l, g);
                        a.appendChild(l);
                        b = b.substring(f.Qh - c);
                        c = f.Qh
                    }
                b && lq(a, b)
            },
            lq = function(a, b) {
                b = b.replace(/(\r\n|\r|\n)/g, "\n").split("\n");
                for (var c = 0, d = b.length; c < d; c++) {
                    if (0 < c) {
                        var e = _.bk("BR");
                        a.appendChild(e)
                    }
                    a.appendChild(document.createTextNode(String(b[c])))
                }
            };
        var mq = function(a) {
            _.E.call(this);
            this.J = a;
            a = _.B ? "focusout" : "blur";
            this.g = _.D(this.J, _.B ? "focusin" : "focus", this, !_.B);
            this.h = _.D(this.J, a, this, !_.B)
        };
        _.y(mq, _.E);
        mq.prototype.handleEvent = function(a) {
            var b = new _.xd(a.g);
            b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
            this.dispatchEvent(b)
        };
        mq.prototype.L = function() {
            mq.G.L.call(this);
            _.Sd(this.g);
            _.Sd(this.h);
            delete this.J
        };
        var nq = function(a, b, c) {
            this.element = a;
            this.j = b;
            this.B = c
        };
        _.y(nq, $l);
        nq.prototype.h = function(a, b, c) {
            gm(this.element, this.j, a, b, void 0, c, this.B)
        };
        var oq = function(a, b) {
            this.g = a instanceof N ? a : new N(a, b)
        };
        _.y(oq, $l);
        oq.prototype.h = function(a, b, c) {
            gm(bl(a), 0, a, b, this.g, c, null)
        };
        var W = function(a, b, c) {
            this.Z = c || (a ? _.Zc(_.Yj(a)) : _.Zc());
            fq.call(this, this.Z.N("DIV", {
                style: "position:absolute;display:none;"
            }));
            this.dd = new N(1, 1);
            this.B = new _.sf;
            this.K = null;
            a && this.attach(a);
            null != b && this.Qb(b)
        };
        _.y(W, fq);
        var pq = [];
        _.h = W.prototype;
        _.h.kb = null;
        _.h.className = "VIpgJd-suEOdc";
        _.h.Kj = 500;
        _.h.bj = 0;
        _.h.attach = function(a) {
            a = _.Yj(a);
            this.B.add(a);
            _.D(a, "mouseover", this.eg, !1, this);
            _.D(a, "mouseout", this.Hd, !1, this);
            _.D(a, "mousemove", this.Ci, !1, this);
            _.D(a, "focus", this.Cd, !1, this);
            _.D(a, "blur", this.Hd, !1, this)
        };
        var rq = function(a, b) {
                if (b) b = _.Yj(b), qq(a, b), a.B.remove(b);
                else {
                    for (var c = a.B.Cb(), d = 0; b = c[d]; d++) qq(a, b);
                    a = a.B;
                    qj(a.g);
                    a.size = 0
                }
            },
            qq = function(a, b) {
                _.Rd(b, "mouseover", a.eg, !1, a);
                _.Rd(b, "mouseout", a.Hd, !1, a);
                _.Rd(b, "mousemove", a.Ci, !1, a);
                _.Rd(b, "focus", a.Cd, !1, a);
                _.Rd(b, "blur", a.Hd, !1, a)
            };
        W.prototype.Qb = function(a) {
            _.nd(this.A(), a)
        };
        W.prototype.vd = function(a) {
            var b = this.A();
            b && _.hk(b);
            W.G.vd.call(this, a);
            a ? (b = this.Z.X.body, b.insertBefore(a, b.lastChild), _.ca(this.K), this.K = new mq(this.A()), _.kj(this, _.rb(_.ca, this.K)), _.D(this.K, "focusin", this.Y, void 0, this), _.D(this.K, "focusout", this.Ab, void 0, this)) : (_.ca(this.K), this.K = null)
        };
        W.prototype.wd = function() {
            return _.rd(this.A())
        };
        var sq = function(a) {
            return a.R ? a.isVisible() ? 4 : 1 : a.la ? 3 : a.isVisible() ? 2 : 0
        };
        _.h = W.prototype;
        _.h.dg = function() {
            if (!cq.prototype.dg.call(this)) return !1;
            if (this.g)
                for (var a, b = 0; a = pq[b]; b++) _.md(a.A(), this.g) || a.U(!1);
            _.va(pq, this);
            a = this.A();
            a.className = this.className;
            this.Y();
            _.D(a, "mouseover", this.yf, !1, this);
            _.D(a, "mouseout", this.xf, !1, this);
            tq(this);
            return !0
        };
        _.h.uh = function() {
            _.wa(pq, this);
            for (var a = this.A(), b, c = 0; b = pq[c]; c++) b.g && _.md(a, b.g) && b.U(!1);
            this.Fi && this.Fi.Ab();
            _.Rd(a, "mouseover", this.yf, !1, this);
            _.Rd(a, "mouseout", this.xf, !1, this);
            this.g = void 0;
            0 == sq(this) && (this.cb = !1);
            cq.prototype.uh.call(this)
        };
        _.h.oh = function(a, b) {
            this.g == a && this.B.contains(this.g) && (this.cb || !this.jo ? (this.U(!1), this.isVisible() || (this.g = a, this.s = b || new uq(lj(this.dd)), this.isVisible() && this.lc(), this.U(!0))) : this.g = void 0);
            this.R = void 0
        };
        _.h.Ng = function() {
            return this.B
        };
        _.h.gm = function(a) {
            this.la = void 0;
            if (a == this.g) {
                a = this.Z;
                var b = a.X;
                try {
                    var c = b && b.activeElement;
                    var d = c && c.nodeName ? c : null
                } catch (e) {
                    d = null
                }
                d = d && this.A() && a.contains(this.A(), d);
                null != this.kb && (this.kb == this.A() || this.B.contains(this.kb)) || d || this.nf && this.nf.kb || this.U(!1)
            }
        };
        var vq = function(a, b) {
            var c = _.pj(a.Z.X);
            a.dd.x = b.clientX + c.x;
            a.dd.y = b.clientY + c.y
        };
        W.prototype.eg = function(a) {
            var b = wq(this, a.target);
            this.kb = b;
            this.Y();
            b != this.g && (this.g = b, xq(this, b), yq(this), vq(this, a))
        };
        var wq = function(a, b) {
            try {
                for (; b && !a.B.contains(b);) b = b.parentNode;
                return b
            } catch (c) {
                return null
            }
        };
        W.prototype.Ci = function(a) {
            vq(this, a);
            this.cb = !0
        };
        W.prototype.Cd = function(a) {
            this.kb = a = wq(this, a.target);
            this.cb = !0;
            if (this.g != a) {
                this.g = a;
                var b = new zq(this.kb);
                this.Y();
                xq(this, a, b);
                yq(this)
            }
        };
        var yq = function(a) {
            if (a.g)
                for (var b, c = 0; b = pq[c]; c++) _.md(b.A(), a.g) && (b.nf = a, a.Fi = b)
        };
        W.prototype.Hd = function(a) {
            var b = wq(this, a.target),
                c = wq(this, a.relatedTarget);
            b != c && (b == this.kb && (this.kb = null), tq(this), this.cb = !1, !this.isVisible() || a.relatedTarget && _.md(this.A(), a.relatedTarget) ? this.g = void 0 : this.Ab())
        };
        W.prototype.yf = function() {
            var a = this.A();
            this.kb != a && (this.Y(), this.kb = a)
        };
        W.prototype.xf = function(a) {
            var b = this.A();
            this.kb != b || a.relatedTarget && _.md(b, a.relatedTarget) || (this.kb = null, this.Ab())
        };
        var xq = function(a, b, c) {
                a.R || (a.R = _.ig((0, _.x)(a.oh, a, b, c), a.Kj))
            },
            tq = function(a) {
                a.R && (_.jg(a.R), a.R = void 0)
            };
        W.prototype.Ab = function() {
            2 == sq(this) && (this.la = _.ig((0, _.x)(this.gm, this, this.g), this.bj))
        };
        W.prototype.Y = function() {
            this.la && (_.jg(this.la), this.la = void 0)
        };
        W.prototype.L = function() {
            this.U(!1);
            tq(this);
            rq(this);
            this.A() && _.hk(this.A());
            this.kb = null;
            delete this.Z;
            W.G.L.call(this)
        };
        var uq = function(a, b) {
            oq.call(this, a, b)
        };
        _.y(uq, oq);
        uq.prototype.h = function(a, b, c) {
            b = bl(a);
            b = fl(b);
            c = c ? new Wk(c.top + 10, c.right, c.bottom, c.left + 10) : new Wk(10, 0, 0, 10);
            fm(this.g, a, 8, c, b, 9) & 496 && fm(this.g, a, 8, c, b, 5)
        };
        var zq = function(a) {
            nq.call(this, a, 5)
        };
        _.y(zq, nq);
        zq.prototype.h = function(a, b, c) {
            var d = new N(10, 0);
            gm(this.element, this.j, a, b, d, c, 9) & 496 && gm(this.element, 4, a, 1, d, c, 5)
        };
        var Aq = function() {
            this.l = []
        };
        _.y(Aq, Lm);
        tj(Aq);
        var Bq = function(a, b) {
            var c = a.l[b];
            if (!c) {
                switch (b) {
                    case 0:
                        c = a.Ga() + "-sn54Q";
                        break;
                    case 1:
                        c = a.Ga() + "-MPu53c";
                        break;
                    case 2:
                        c = a.Ga() + "-bN97Pc"
                }
                a.l[b] = c
            }
            return c
        };
        _.h = Aq.prototype;
        _.h.td = function() {
            return "menuitem"
        };
        _.h.N = function(a) {
            var b = a.g.N("DIV", Om(this, a).join(" "), Cq(this, a.za(), a.g));
            Dq(this, a, b, !!(a.Ea & 8) || !!(a.Ea & 16));
            return b
        };
        _.h.Fc = function(a) {
            return a && a.firstChild
        };
        _.h.Hb = function(a, b) {
            var c = _.ld(b),
                d = Bq(this, 2);
            c && Wl(c, d) || b.appendChild(Cq(this, b.childNodes, a.g));
            Wl(b, "VIpgJd-wQNmvb") && (a.Mf(!0), this.Mf(a, b, !0));
            return Aq.G.Hb.call(this, a, b)
        };
        _.h.be = function(a, b) {
            var c = this.Fc(a),
                d = Eq(this, a) ? c.firstChild : null;
            Aq.G.be.call(this, a, b);
            d && !Eq(this, a) && c.insertBefore(d, c.firstChild || null)
        };
        var Cq = function(a, b, c) {
            a = Bq(a, 2);
            return c.N("DIV", a, b)
        };
        Aq.prototype.Jj = function(a, b, c) {
            a && b && Dq(this, a, b, c)
        };
        Aq.prototype.Mf = function(a, b, c) {
            a && b && Dq(this, a, b, c)
        };
        var Eq = function(a, b) {
                return (b = a.Fc(b)) ? (b = b.firstChild, a = Bq(a, 1), !!b && ik(b) && Wl(b, a)) : !1
            },
            Dq = function(a, b, c, d) {
                Qm(a, c, b.we());
                Rm(a, b, c);
                d != Eq(a, c) && (d ? _.R(c, "VIpgJd-wQNmvb") : _.Yl(c, "VIpgJd-wQNmvb"), c = a.Fc(c), d ? (a = Bq(a, 1), c.insertBefore(b.g.N("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
            };
        Aq.prototype.g = function(a) {
            switch (a) {
                case 2:
                    return Bq(this, 0);
                case 16:
                case 8:
                    return "VIpgJd-wQNmvb-gk6SMd";
                default:
                    return Aq.G.g.call(this, a)
            }
        };
        Aq.prototype.j = function(a) {
            var b = Bq(this, 0);
            switch (a) {
                case "VIpgJd-wQNmvb-gk6SMd":
                    return 16;
                case b:
                    return 2;
                default:
                    return Aq.G.j.call(this, a)
            }
        };
        Aq.prototype.Ga = function() {
            return "VIpgJd-j7LFlb"
        };
        var Fq = function(a, b, c, d) {
            U.call(this, a, d || Aq.Ia(), c);
            this.hb(b)
        };
        _.y(Fq, U);
        _.h = Fq.prototype;
        _.h.Na = function() {
            var a = this.Ab;
            return null != a ? a : this.cc()
        };
        _.h.hb = function(a) {
            this.Ab = a
        };
        _.h.Va = function(a, b) {
            Fq.G.Va.call(this, a, b);
            switch (a) {
                case 8:
                    this.ua & 16 && !b && an(this, 16, !1) && dn(this, 16, !1);
                    (a = this.A()) && this.h.Jj(this, a, b);
                    break;
                case 16:
                    (a = this.A()) && this.h.Mf(this, a, b)
            }
        };
        _.h.Jj = function(a) {
            this.Va(8, a)
        };
        _.h.Mf = function(a) {
            this.Va(16, a)
        };
        _.h.cc = function() {
            var a = this.za();
            return Array.isArray(a) ? (a = _.Rb(a, function(b) {
                return ik(b) && (Wl(b, "VIpgJd-j7LFlb-x29Bmf") || Wl(b, "VIpgJd-j7LFlb-PQTlnb-hgDUwe")) ? "" : rk(b)
            }).join(""), Qj(a)) : Fq.G.cc.call(this)
        };
        _.h.Id = function(a) {
            var b = this.P();
            if (b) {
                var c = b.la;
                b.la = null;
                if (b = c && "number" === typeof a.clientX) b = new N(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
                if (b) return
            }
            Fq.G.Id.call(this, a)
        };
        _.h.de = function(a) {
            return a.keyCode == this.qj && this.Vd(a) ? !0 : Fq.G.de.call(this, a)
        };
        _.h.Xk = function() {
            return this.qj
        };
        Wm("VIpgJd-j7LFlb", function() {
            return new Fq(null)
        });
        Fq.prototype.we = function() {
            return this.Ea & 16 ? "menuitemcheckbox" : this.Ea & 8 ? "menuitemradio" : Fq.G.we.call(this)
        };
        Fq.prototype.P = function() {
            return U.prototype.P.call(this)
        };
        Fq.prototype.rf = function() {
            return U.prototype.rf.call(this)
        };
        var Gq = function(a) {
            this.g = a
        };
        tj(Gq);
        var Hq = function(a, b) {
            a && (a.tabIndex = b ? 0 : -1)
        };
        Gq.prototype.N = function(a) {
            var b = a.g,
                c = b.N,
                d = this.Te(),
                e = [d, "horizontal" == a.Rc ? d + "-DKlKme" : d + "-BvBYQ"];
            a.isEnabled() || e.push(d + "-OWB6Me");
            return c.call(b, "DIV", e.join(" "))
        };
        Gq.prototype.fg = function(a) {
            return "DIV" == a.tagName
        };
        var Jq = function(a, b, c) {
                c.id && Am(b, c.id);
                var d = a.Te(),
                    e = !1,
                    f = Ul(c);
                f && Array.prototype.forEach.call(f, function(g) {
                    if (g == d) e = !0;
                    else if (g)
                        if (g == d + "-OWB6Me") b.Ca(!1);
                        else if (g == d + "-DKlKme") {
                        if (b.A()) throw Error("ta");
                        b.Rc = "horizontal"
                    } else if (g == d + "-BvBYQ") {
                        if (b.A()) throw Error("ta");
                        b.Rc = "vertical"
                    }
                }, a);
                e || _.R(c, d);
                Iq(a, b, c);
                return c
            },
            Iq = function(a, b, c) {
                if (c)
                    for (var d = c.firstChild, e; d && d.parentNode == c;) {
                        e = d.nextSibling;
                        if (1 == d.nodeType) {
                            var f = a.Mg(d);
                            f && (f.J = d, b.isEnabled() || f.Ca(!1), b.he(f), Fm(f, d))
                        } else d.nodeValue &&
                            "" != (0, _.Wb)(d.nodeValue) || c.removeChild(d);
                        d = e
                    }
            };
        Gq.prototype.Mg = function(a) {
            a: {
                a = Ul(a);
                for (var b = 0, c = a.length; b < c; b++) {
                    var d = a[b];
                    if (d = d in Vm ? Vm[d]() : null) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
            return a
        };
        Gq.prototype.gg = function(a) {
            a = a.A();
            kl(a, !0, _.ec);
            _.B && (a.hideFocus = !0);
            var b = this.g;
            b && im(a, b)
        };
        Gq.prototype.Te = function() {
            return "VIpgJd-haAclf"
        };
        var Kq = function() {};
        _.y(Kq, Lm);
        tj(Kq);
        Kq.prototype.N = function(a) {
            return a.g.N("DIV", this.Ga())
        };
        Kq.prototype.Hb = function(a, b) {
            b.id && Am(a, b.id);
            if ("HR" == b.tagName) {
                var c = b;
                b = this.N(a);
                fk(b, c);
                _.hk(c)
            } else _.R(b, this.Ga());
            return b
        };
        Kq.prototype.be = function() {};
        Kq.prototype.Ga = function() {
            return "VIpgJd-gqMrKb"
        };
        var Lq = function(a, b) {
            U.call(this, null, a || Kq.Ia(), b);
            this.Va(1, !1);
            this.Va(2, !1);
            this.Va(4, !1);
            this.Va(32, !1);
            this.ua = 1
        };
        _.y(Lq, U);
        Lq.prototype.ba = function() {
            Lq.G.ba.call(this);
            var a = this.A();
            im(a, "separator")
        };
        Wm("VIpgJd-gqMrKb", function() {
            return new Lq
        });
        var Mq = function(a) {
            this.g = a || "menu"
        };
        _.y(Mq, Gq);
        tj(Mq);
        _.h = Mq.prototype;
        _.h.fg = function(a) {
            return "UL" == a.tagName || Mq.G.fg.call(this, a)
        };
        _.h.Mg = function(a) {
            return "HR" == a.tagName ? new Lq : Mq.G.Mg.call(this, a)
        };
        _.h.me = function(a, b) {
            return _.md(a.A(), b)
        };
        _.h.Te = function() {
            return "VIpgJd-xl07Ob"
        };
        _.h.gg = function(a) {
            Mq.G.gg.call(this, a);
            a = a.A();
            jm(a, "haspopup", "true")
        };
        var Nq = function(a, b, c, d) {
            nq.call(this, a, b);
            this.s = c ? 5 : 0;
            this.l = d || void 0
        };
        _.y(Nq, nq);
        Nq.prototype.o = function(a) {
            this.s = a
        };
        Nq.prototype.h = function(a, b, c) {
            var d = gm(this.element, this.j, a, b, null, c, 10, void 0, this.l);
            if (d & 496) {
                var e = Oq(d, this.j);
                b = Oq(d, b);
                d = gm(this.element, e, a, b, null, c, 10, void 0, this.l);
                d & 496 && (e = Oq(d, e), b = Oq(d, b), gm(this.element, e, a, b, null, c, this.s, void 0, this.l))
            }
        };
        var Oq = function(a, b) {
            a & 48 && (b ^= 4);
            a & 192 && (b ^= 1);
            return b
        };
        var Pq = function(a, b) {
            this.g = a instanceof N ? a : new N(a, b)
        };
        _.y(Pq, $l);
        Pq.prototype.h = function(a, b, c) {
            var d = _.C(a);
            var e = d.body;
            d = d.documentElement;
            d = new N(e.scrollLeft || d.scrollLeft, e.scrollTop || d.scrollTop);
            e = this.g.x + d.x;
            d = this.g.y + d.y;
            var f = dm(a);
            e -= f.x;
            d -= f.y;
            fm(new N(e, d), a, b, c, null, null)
        };
        var Qq = function(a, b) {
            Pq.call(this, a, b)
        };
        _.y(Qq, Pq);
        Qq.prototype.j = 0;
        Qq.prototype.o = function(a) {
            this.j = a
        };
        Qq.prototype.h = function(a, b, c) {
            var d = bl(a);
            d = fl(d);
            var e = oj(_.Zc(a).X);
            e = new N(this.g.x + e.scrollLeft, this.g.y + e.scrollTop);
            var f = b,
                g = fm(e, a, f, c, d, 10);
            if (0 != (g & 496)) {
                if (g & 16 || g & 32) f ^= 4;
                if (g & 64 || g & 128) f ^= 1;
                g = fm(e, a, f, c, d, 10);
                0 != (g & 496) && fm(e, a, b, c, d, this.j)
            }
        };
        var Rq = function(a, b, c) {
            _.M.call(this, c);
            this.Hc = b || Gq.Ia();
            this.Rc = a || "vertical"
        };
        _.y(Rq, _.M);
        _.h = Rq.prototype;
        _.h.Nd = null;
        _.h.fe = null;
        _.h.Hc = null;
        _.h.Rc = null;
        _.h.Ma = !0;
        _.h.Gc = !0;
        _.h.hd = !0;
        _.h.Oa = -1;
        _.h.Ua = null;
        _.h.Sd = !1;
        _.h.oc = null;
        var Sq = function(a) {
                return a.Nd || a.A()
            },
            Vq = function(a, b) {
                if (a.hd) {
                    var c = Sq(a),
                        d = a.sa;
                    a.Nd = b;
                    var e = Sq(a);
                    d && (a.Nd = c, Tq(a, !1), a.Nd = b, Uq(a).attach(e), Tq(a, !0))
                } else throw Error("Fa");
            },
            Uq = function(a) {
                return a.fe || (a.fe = new sm(Sq(a)))
            };
        _.h = Rq.prototype;
        _.h.N = function() {
            this.J = this.Hc.N(this)
        };
        _.h.Me = function() {
            return this.A()
        };
        _.h.Yf = function(a) {
            return this.Hc.fg(a)
        };
        _.h.na = function(a) {
            this.J = Jq(this.Hc, this, a);
            "none" == a.style.display && (this.Ma = !1)
        };
        _.h.ba = function() {
            Rq.G.ba.call(this);
            Gm(this, function(b) {
                b.sa && Wq(this, b)
            }, this);
            var a = this.A();
            this.Hc.gg(this);
            this.U(this.Ma, !0);
            S(this).D(this, "enter", this.Qg).D(this, "highlight", this.ye).D(this, "unhighlight", this.Vg).D(this, "open", this.vl).D(this, "close", this.il).D(a, Um.xd, this.ck).D(_.C(a), [Um.yd, Um.ge], this.jl).D(a, [Um.xd, Um.yd, Um.ge, "mouseover", "mouseout", "contextmenu"], this.fl);
            this.hd && Tq(this, !0)
        };
        var Tq = function(a, b) {
            var c = S(a),
                d = Sq(a);
            b ? c.D(d, "focus", a.ei).D(d, "blur", a.Ue).D(Uq(a), "key", a.Db) : c.Fa(d, "focus", a.ei).Fa(d, "blur", a.Ue).Fa(Uq(a), "key", a.Db)
        };
        _.h = Rq.prototype;
        _.h.ja = function() {
            this.Tc(-1);
            this.Ua && en(this.Ua, !1);
            this.Sd = !1;
            Rq.G.ja.call(this)
        };
        _.h.L = function() {
            Rq.G.L.call(this);
            this.fe && (this.fe.S(), this.fe = null);
            this.Hc = this.Ua = this.oc = this.Nd = null
        };
        _.h.Qg = function() {
            return !0
        };
        _.h.ye = function(a) {
            var b = Km(this, a.target);
            if (-1 < b && b != this.Oa) {
                var c = Xq(this);
                c && cn(c, !1);
                this.Oa = b;
                c = Xq(this);
                this.Sd && bn(c, !0);
                this.Ua && c != this.Ua && (c.Ea & 64 ? en(c, !0) : en(this.Ua, !1))
            }
            b = this.A();
            null != a.target.A() && jm(b, "activedescendant", a.target.A().id)
        };
        _.h.Vg = function(a) {
            a.target == Xq(this) && (this.Oa = -1);
            this.A().removeAttribute("aria-activedescendant")
        };
        _.h.vl = function(a) {
            (a = a.target) && a != this.Ua && a.P() == this && (this.Ua && en(this.Ua, !1), this.Ua = a)
        };
        _.h.il = function(a) {
            a.target == this.Ua && (this.Ua = null);
            var b = this.A(),
                c = a.target.A();
            b && a.target.ua & 2 && c && (a = "", c && (a = c.id), jm(b, "activedescendant", a))
        };
        _.h.ck = function(a) {
            this.Gc && (this.Sd = !0);
            var b = Sq(this);
            b && ok(b) && pk(b) ? b.focus() : a.preventDefault()
        };
        _.h.jl = function() {
            this.Sd = !1
        };
        _.h.fl = function(a) {
            a: {
                var b = a.target;
                if (this.oc)
                    for (var c = this.A(); b && b !== c;) {
                        var d = b.id;
                        if (d in this.oc) {
                            b = this.oc[d];
                            break a
                        }
                        b = b.parentNode
                    }
                b = null
            }
            if (b) switch (a.type) {
                case Um.xd:
                    b.ee(a);
                    break;
                case Um.yd:
                case Um.ge:
                    b.Id(a);
                    break;
                case "mouseover":
                    b.R(a);
                    break;
                case "mouseout":
                    b.da(a);
                    break;
                case "contextmenu":
                    b.s(a)
            }
        };
        _.h.ei = function() {};
        _.h.Ue = function() {
            this.Tc(-1);
            this.Sd = !1;
            this.Ua && en(this.Ua, !1)
        };
        _.h.Db = function(a) {
            return this.isEnabled() && this.isVisible() && (0 != Hm(this) || this.Nd) && this.hg(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
        };
        _.h.hg = function(a) {
            var b = Xq(this);
            if (b && "function" == typeof b.Db && b.Db(a) || this.Ua && this.Ua != b && "function" == typeof this.Ua.Db && this.Ua.Db(a)) return !0;
            if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
            switch (a.keyCode) {
                case 27:
                    if (this.hd) Sq(this).blur();
                    else return !1;
                    break;
                case 36:
                    Yq(this);
                    break;
                case 35:
                    Zq(this);
                    break;
                case 38:
                    if ("vertical" == this.Rc) $q(this);
                    else return !1;
                    break;
                case 37:
                    if ("horizontal" == this.Rc) Jm(this) ? ar(this) : $q(this);
                    else return !1;
                    break;
                case 40:
                    if ("vertical" == this.Rc) ar(this);
                    else return !1;
                    break;
                case 39:
                    if ("horizontal" == this.Rc) Jm(this) ? $q(this) : ar(this);
                    else return !1;
                    break;
                default:
                    return !1
            }
            return !0
        };
        var Wq = function(a, b) {
            var c = b.A();
            c = c.id || (c.id = b.Lb());
            a.oc || (a.oc = {});
            a.oc[c] = b
        };
        _.h = Rq.prototype;
        _.h.he = function(a, b) {
            Rq.G.he.call(this, a, b)
        };
        _.h.ng = function(a, b, c) {
            a.Ke |= 2;
            a.Ke |= 64;
            a.Va(32, !1);
            Zm(a, !1);
            var d = a.P() == this ? Km(this, a) : -1;
            Rq.G.ng.call(this, a, b, c);
            a.sa && this.sa && Wq(this, a);
            a = d; - 1 == a && (a = Hm(this));
            a == this.Oa ? this.Oa = Math.min(Hm(this) - 1, b) : a > this.Oa && b <= this.Oa ? this.Oa++ : a < this.Oa && b > this.Oa && this.Oa--
        };
        _.h.Zf = function(a, b) {
            if (a = "string" === typeof a ? Cm(this, a) : a) {
                var c = Km(this, a); - 1 != c && (c == this.Oa ? (cn(a, !1), this.Oa = -1) : c < this.Oa && this.Oa--);
                var d = a.A();
                d && d.id && this.oc && (c = this.oc, d = d.id, d in c && delete c[d])
            }
            a = Rq.G.Zf.call(this, a, b);
            Zm(a, !0);
            return a
        };
        _.h.isVisible = function() {
            return this.Ma
        };
        _.h.U = function(a, b) {
            if (b || this.Ma != a && this.dispatchEvent(a ? "show" : "hide")) {
                this.Ma = a;
                var c = this.A();
                c && (_.O(c, a), this.hd && Hq(Sq(this), this.Gc && this.Ma), b || this.dispatchEvent(this.Ma ? "aftershow" : "afterhide"));
                return !0
            }
            return !1
        };
        _.h.isEnabled = function() {
            return this.Gc
        };
        _.h.Ca = function(a) {
            this.Gc != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Gc = !0, Gm(this, function(b) {
                b.Uj ? delete b.Uj : b.Ca(!0)
            })) : (Gm(this, function(b) {
                b.isEnabled() ? b.Ca(!1) : b.Uj = !0
            }), this.Sd = this.Gc = !1), this.hd && Hq(Sq(this), a && this.Ma))
        };
        var br = function(a, b) {
            b != a.hd && a.sa && Tq(a, b);
            a.hd = b;
            a.Gc && a.Ma && Hq(Sq(a), b)
        };
        Rq.prototype.Tc = function(a) {
            (a = Im(this, a)) ? cn(a, !0): -1 < this.Oa && cn(Xq(this), !1)
        };
        var Xq = function(a) {
                return Im(a, a.Oa)
            },
            Yq = function(a) {
                cr(a, function(b, c) {
                    return (b + 1) % c
                }, Hm(a) - 1)
            },
            Zq = function(a) {
                cr(a, function(b, c) {
                    b--;
                    return 0 > b ? c - 1 : b
                }, 0)
            },
            ar = function(a) {
                cr(a, function(b, c) {
                    return (b + 1) % c
                }, a.Oa)
            },
            $q = function(a) {
                cr(a, function(b, c) {
                    b--;
                    return 0 > b ? c - 1 : b
                }, a.Oa)
            },
            cr = function(a, b, c) {
                c = 0 > c ? Km(a, a.Ua) : c;
                var d = Hm(a);
                c = b.call(a, c, d);
                for (var e = 0; e <= d;) {
                    var f = Im(a, c);
                    if (f && a.ui(f)) {
                        a.Tc(c);
                        break
                    }
                    e++;
                    c = b.call(a, c, d)
                }
            };
        Rq.prototype.ui = function(a) {
            return a.isVisible() && a.isEnabled() && !!(a.Ea & 2)
        };
        var dr = function() {};
        _.y(dr, Lm);
        tj(dr);
        dr.prototype.Ga = function() {
            return "VIpgJd-wckcKc"
        };
        var er = function(a, b, c) {
            U.call(this, a, c || dr.Ia(), b);
            this.Va(1, !1);
            this.Va(2, !1);
            this.Va(4, !1);
            this.Va(32, !1);
            this.ua = 1
        };
        _.y(er, U);
        Wm("VIpgJd-wckcKc", function() {
            return new er(null)
        });
        Wm("VIpgJd-gqMrKb", function() {
            return new Lq
        });
        var fr = function(a, b) {
            Rq.call(this, "vertical", b || Mq.Ia(), a);
            br(this, !1)
        };
        _.y(fr, Rq);
        _.h = fr.prototype;
        _.h.og = !0;
        _.h.me = function(a) {
            if (this.Hc.me(this, a)) return !0;
            for (var b = 0, c = Hm(this); b < c; b++) {
                var d = Im(this, b);
                if ("function" == typeof d.me && d.me(a)) return !0
            }
            return !1
        };
        _.h.U = function(a, b, c) {
            (b = fr.G.U.call(this, a, b)) && a && this.sa && this.og && Sq(this).focus();
            a && c && "number" === typeof c.clientX ? this.la = new N(c.clientX, c.clientY) : this.la = null;
            return b
        };
        _.h.Qg = function(a) {
            this.og && Sq(this).focus();
            return fr.G.Qg.call(this, a)
        };
        _.h.ui = function(a) {
            return a.isEnabled() && a.isVisible() && !!(a.Ea & 2)
        };
        _.h.na = function(a) {
            for (var b = this.Hc, c = _.mj(this.g.X, "DIV", b.Te() + "-bN97Pc", a), d = c.length, e = 0; e < d; e++) Iq(b, this, c[e]);
            fr.G.na.call(this, a)
        };
        _.h.hg = function(a) {
            var b = fr.G.hg.call(this, a);
            b || Gm(this, function(c) {
                !b && c.Xk && c.qj == a.keyCode && (this.isEnabled() && this.Tc(Km(this, c)), b = c.Db(a))
            }, this);
            return b
        };
        _.h.Tc = function(a) {
            fr.G.Tc.call(this, a);
            if (a = Im(this, a)) {
                var b = a.A();
                a = this.A() || oj(document);
                var c = a || oj(document);
                var d = el(b),
                    e = el(c),
                    f = sl(c);
                if (c == oj(document)) {
                    var g = d.x - c.scrollLeft;
                    d = d.y - c.scrollTop;
                    !_.B || 10 <= Number(_.yc) || (g += f.left, d += f.top)
                } else g = d.x - e.x - f.left, d = d.y - e.y - f.top;
                b = gl(b);
                f = c.clientHeight - b.height;
                e = c.scrollLeft;
                var k = c.scrollTop;
                e += Math.min(g, Math.max(g - (c.clientWidth - b.width), 0));
                k += Math.min(d, Math.max(d - f, 0));
                c = new N(e, k);
                a.scrollLeft = c.x;
                a.scrollTop = c.y
            }
        };
        var gr = function(a, b) {
            fr.call(this, a, b);
            this.og = !0;
            br(this, !0);
            this.U(!1, !0);
            this.h = new _.of
        };
        _.y(gr, fr);
        _.h = gr.prototype;
        _.h.Sj = !1;
        _.h.ij = 0;
        _.h.sb = null;
        _.h.na = function(a) {
            gr.G.na.call(this, a);
            (a = a.getAttribute("for") || a.htmlFor) && this.attach(this.g.A(a), 1)
        };
        _.h.ba = function() {
            gr.G.ba.call(this);
            this.h.forEach(this.bf, this);
            var a = S(this);
            a.D(this, "action", this.rh);
            a.D(this.g.X, "mousedown", this.rb, !0)
        };
        _.h.attach = function(a, b, c, d, e) {
            a && _.qf(this.h, _.Aa(a)) || (b = this.zg(a, b, c, d, e), this.sa && this.bf(b), a = _.rb(this.nm, a), this.A() && S(this).D(this.A(), "keydown", a))
        };
        _.h.nm = function(a, b) {
            if (27 == b.keyCode) a.focus();
            else if (a = Im(this, this.Oa)) {
                var c = a.A();
                a = new _.xd(b.g, c);
                a.target = c;
                if (32 == b.keyCode || 13 == b.keyCode)
                    if (_.zd(c)) _.Vd(c, "keydown", !1, a);
                    else if (c = _.Nd(c))
                    if (c = c.g["keydown".toString()]) {
                        c = c.concat();
                        for (var d = 0; d < c.length; d++) {
                            var e = c[d];
                            e && 0 == e.capture && !e.Xd && _.Td(e, a)
                        }
                    }
                32 == b.keyCode && this.mc()
            }
        };
        _.h.zg = function(a, b, c, d, e) {
            if (!a) return null;
            b = {
                J: a,
                Pj: b,
                im: c,
                se: d ? "contextmenu" : "mousedown",
                jh: e
            };
            this.h.set(_.Aa(a), b);
            return b
        };
        _.h.bf = function(a) {
            S(this).D(a.J, a.se, this.Lf);
            "contextmenu" != a.se && S(this).D(a.J, "keydown", this.pm)
        };
        _.h.mf = function() {
            if (this.sa)
                for (var a = this.h.rc(), b = 0; b < a.length; b++) this.Eg(this.h.get(a[b]));
            qj(this.h)
        };
        _.h.Eg = function(a) {
            S(this).Fa(a.J, a.se, this.Lf)
        };
        _.h.Ve = function(a, b, c) {
            b = void 0 !== a.Pj ? new Nq(a.J, a.Pj, !0) : new Qq(b, c);
            b.o && b.o(5);
            var d = a.im;
            c = a.jh;
            var e = a.J;
            a = this.isVisible();
            (this.isVisible() || 150 > Date.now() - this.ij) && this.Sj ? this.mc() : (this.sb = e || null, this.dispatchEvent("beforeshow") && (d = "undefined" != typeof d ? d : 8, a || (this.A().style.visibility = "hidden"), _.O(this.A(), !0), b.h(this.A(), d, c), a || (this.A().style.visibility = "visible"), this.Tc(-1), this.U(!0)))
        };
        _.h.mc = function() {
            this.isVisible() && (this.U(!1), this.isVisible() || (this.ij = Date.now(), this.sb = null))
        };
        _.h.rh = function() {
            this.mc()
        };
        _.h.Lf = function(a) {
            hr(this, a)
        };
        _.h.pm = function(a) {
            32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || hr(this, a);
            40 == a.keyCode && Yq(this)
        };
        var hr = function(a, b) {
            for (var c = a.h.rc(), d = 0; d < c.length; d++) {
                var e = a.h.get(c[d]);
                if (e.J == b.currentTarget) {
                    a.Ve(e, b.clientX, b.clientY);
                    b.preventDefault();
                    b.stopPropagation();
                    break
                }
            }
        };
        gr.prototype.rb = function(a) {
            this.isVisible() && !this.me(a.target) && this.mc()
        };
        gr.prototype.Ue = function(a) {
            gr.G.Ue.call(this, a);
            this.mc()
        };
        gr.prototype.L = function() {
            gr.G.L.call(this);
            this.h && (qj(this.h), delete this.h)
        };
        var X = function(a, b, c) {
            gr.call(this, b, c);
            this.s = new _.of;
            this.l = a || 5;
            this.C = null;
            this.I = !1;
            this.o = Array(this.l);
            this.ca = Array(this.l);
            this.R = sn.Ia();
            this.da = this.jc = null;
            this.Sj = !0
        };
        _.y(X, gr);
        var ir = "";
        X.prototype.N = function() {
            X.G.N.call(this);
            for (var a = 0; a < this.l; ++a) this.he(new Fq(""), !0)
        };
        X.prototype.ta = function(a) {
            X.G.ta.call(this, a);
            _.R(this.A(), "alt-menu")
        };
        X.prototype.Kh = function(a) {
            a = this.s.get(_.Aa(a));
            for (var b = 0; b < uo(a) && b < this.l; ++b) {
                var c = Im(this, b);
                c.j(Vi(vo(a, b).aa, 1));
                c.hb(b);
                c.U(!0, !0)
            }
            for (; b < this.l; ++b) Im(this, b).U(!1)
        };
        var jr = function(a, b, c) {
            a.s.set(_.Aa(b), c);
            a.attach(b, 9, 8, !1, new Wk(-2, 1, -2, 1))
        };
        _.h = X.prototype;
        _.h.mf = function() {
            X.G.mf.call(this);
            null != this.jc && rq(this.jc);
            qj(this.s)
        };
        _.h.U = function(a, b) {
            var c = this.sb;
            this.da = c;
            a && null != c ? (kr(this, c), yn(this.R, "altshow")) : null != this.C && kq(this.C, 0, 0);
            null != c && (a ? this.Cg(c) : this.ug(c));
            b = X.G.U.call(this, a, b);
            a && null != this.A() && kl(this.A(), !1);
            return b
        };
        _.h.cc = function() {
            if (null != this.da) {
                var a = _.rd(this.da);
                if (null != a) return a
            }
            return ""
        };
        _.h.mc = function() {
            X.G.mc.call(this);
            if (this.I)
                for (var a = 0; a < this.o.length; a++) {
                    var b = this.o[a];
                    _.jg(b.l);
                    b.B();
                    b.C(-1);
                    b.B();
                    b.U(!1)
                }
        };
        _.h.Cg = function(a) {
            _.R(a, "trans-target");
            null !== this.jc ? rq(this.jc, a) : a.title = ""
        };
        _.h.ug = function(a) {
            _.Yl(a, "trans-target");
            null !== this.jc ? this.jc.attach(a) : a.title = ir
        };
        _.h.Db = function(a) {
            if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode) return !1;
            var b = X.G.Db.call(this, a);
            if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
                var c = jl(this.sb.parentNode.parentNode),
                    d = null;
                if (!c && 37 == a.keyCode || c && 39 == a.keyCode) d = !1;
                if (!c && 39 == a.keyCode || c && 37 == a.keyCode) d = !0;
                if (this.pg(d) && (c = this.sb, (c = d ? void 0 !== c.nextElementSibling ? c.nextElementSibling : _.kd(c.nextSibling, !0) : void 0 !== c.previousElementSibling ? c.previousElementSibling : _.kd(c.previousSibling, !1)) && c != this.sb)) return this.mc(),
                    this.Ij(d), this.Ve(c ? this.h.get(_.Aa(c)) : null, 0, 0), lr(this), a.preventDefault(), a.stopPropagation(), !0
            }
            return b
        };
        _.h.Ve = function(a, b, c) {
            jl((a.J || this.sb).parentNode.parentNode) ? _.K(this.A(), "direction", "rtl") : _.K(this.A(), "direction", "");
            if (this.I)
                for (var d = 0; d < this.o.length; d++) mr(this, d), _.nd(this.o[d].j, "...");
            this.Kh(a.J);
            X.G.Ve.call(this, a, b, c)
        };
        var nr = function(a, b, c) {
                !a.I || b >= a.l || "" == c || (_.nd(a.o[b].j, c), mr(a, b))
            },
            mr = function(a, b) {
                var c = a.o[b];
                gm(Im(a, b).A(), 12, c.A(), 8, new N(1, 0))
            };
        _.h = X.prototype;
        _.h.ye = function(a) {
            X.G.ye.call(this, a);
            var b = this.sb;
            null != b && (yn(this.R, "altmenuhl"), kr(this, b), a = this.sf(a.target), -1 != a && a != this.l && (_.jg(this.ca[a]), this.ca[a] = _.ig(this.cm, 300, this), this.I && (b = this.o[a], jl(this.sb.parentNode.parentNode) ? (_.R(b.A(), "rtl"), _.K(b.A(), "direction", "rtl")) : (_.Yl(b.A(), "rtl"), _.K(b.A(), "direction", "")), mr(this, a), _.jg(b.l), 0 == b.g ? b.l = _.ig((0, _.x)(b.C, b, 1), 300) : b.C(1))))
        };
        _.h.cm = function() {
            yn(this.R, "altmenuhold")
        };
        _.h.Vg = function(a) {
            X.G.Vg.call(this, a);
            a = this.sf(a.target); - 1 != a && a != this.l && (_.jg(this.ca[a]), this.I && this.o[a].K())
        };
        _.h.sf = function(a) {
            return Km(this, a)
        };
        _.h.pg = function() {
            return !0
        };
        _.h.Ij = function() {};
        _.h.zg = function(a, b, c, d, e) {
            (a = X.G.zg.call(this, a, b, c, d, e)) && "mousedown" == a.se && (a.se = "click");
            return a
        };
        _.h.bf = function(a) {
            X.G.bf.call(this, a);
            S(this).D(a.J, "mouseover", this.jb);
            S(this).D(a.J, "mouseout", this.Z);
            S(this).D(a.J, "contextmenu", this.Ka);
            S(this).D(a.J, "mousemove", this.cb)
        };
        _.h.Eg = function(a) {
            X.G.Eg.call(this, a);
            S(this).Fa(a.J, "mouseover", this.jb);
            S(this).Fa(a.J, "mouseout", this.Z);
            S(this).Fa(a.J, "contextmenu", this.Ka);
            S(this).Fa(a.J, "mousemove", this.cb)
        };
        var kr = function(a, b) {
                if (null != a.C && (b = a.s.get(_.Aa(b))) && (a = a.C, a.h))
                    for (var c = a.J && (a.J.value || _.rd(a.J)), d = -1, e = -1, f = !1, g = 0; g < zo(a.h); g++) {
                        var k = Ao(a.h, g);
                        if (0 != uo(k) && (0 == Si(k.aa, 6) && (f = c.indexOf(wo(k), e + 1), 0 <= f ? (d = f, e = d + wo(k).length, f = !0) : f = !1), Ao(a.h, g).aa == b.aa)) {
                            if (f) {
                                c = [];
                                for (e = 0; e < Qi(b.aa, 4); ++e) c.push({
                                    te: d + Si(Ui(b.aa, 4, ro, e).aa, 1),
                                    Qh: d + Si(Ui(b.aa, 4, ro, e).aa, 2)
                                });
                                kq(a, 0, 0, void 0, c)
                            } else d = c.indexOf(to(b)), 0 <= d && kq(a, d, d + to(b).length);
                            break
                        }
                    }
            },
            or = function(a, b) {
                b ? wk(a.h.Xa(!1), function(c) {
                    "" ==
                    this.g.ai(c.J) && (_.R(c.J, "trans-target-empty"), this.g.Rb(c.J, "_"));
                    return !0
                }, a) : wk(a.h.Xa(!1), function(c) {
                    Wl(c.J, "trans-target-empty") && (_.Yl(c.J, "trans-target-empty"), this.g.Rb(c.J, ""));
                    return !0
                }, a)
            };
        X.prototype.jb = function(a) {
            !ao() && this.isEnabled() && (_.R(a.target, "trans-target-highlight"), kr(this, a.target), or(this, !0), yn(this.R, "althighlight"))
        };
        X.prototype.Z = function(a) {
            _.Yl(a.target, "trans-target-highlight");
            null == this.C || this.isVisible() || kq(this.C, 0, 0);
            or(this, !1)
        };
        X.prototype.cb = function(a) {
            ao() && this.Z(a)
        };
        X.prototype.Ka = function(a) {
            ao() || (this.Z(a), Pn(Nn(a.target)).select())
        };
        var lr = function(a) {
            wk(a.h.Xa(!1), function(b) {
                _.Yl(b.J, "trans-target-highlight");
                return !0
            }, a)
        };
        X.prototype.rh = function(a) {
            a && a.currentTarget && a.currentTarget.sb && (a.l = a.currentTarget.sb);
            X.G.rh.call(this, a)
        };
        X.prototype.Lf = function(a) {
            ao() ? lr(this) : this.Gc && X.G.Lf.call(this, a)
        };
        var pr = function(a, b, c) {
            this.ya = this.j = null;
            X.call(this, a, b, c)
        };
        _.y(pr, X);
        _.h = pr.prototype;
        _.h.Ij = function(a) {
            this.j = a
        };
        _.h.U = function(a, b) {
            b = pr.G.U.call(this, a, b);
            this.j = null;
            a ? this.ya = this.cc() : null != this.ya && this.ya != this.cc() && this.dispatchEvent(new _.ud("action", this));
            return b
        };
        _.h.Cg = function(a) {
            pr.G.Cg.call(this, a);
            _.R(a, "trans-edit");
            a.contentEditable = !0;
            Vq(this, a);
            Sq(this).focus();
            qk(Sq(this), !0);
            S(this).D(a, "keydown", this.Qi);
            S(this).D(a, "mouseout", this.wf);
            S(this).D(a, "mouseover", this.wf);
            if (null != this.j) {
                a = Pn(Nn(a));
                var b = this.j ? a.Jb() : a.Zb(),
                    c = Dn(a);
                a = c;
                var d = b,
                    e = new On;
                e.o = Wn(a, d, c, b);
                if (ik(a) && !dk(a)) {
                    var f = a.parentNode;
                    d = Array.prototype.indexOf.call(f.childNodes, a);
                    a = f
                }
                ik(c) && !dk(c) && (f = c.parentNode, b = Array.prototype.indexOf.call(f.childNodes, c), c = f);
                e.o ? (e.h =
                    c, e.B = b, e.j = a, e.s = d) : (e.h = a, e.B = d, e.j = c, e.s = b);
                e.select()
            }
        };
        _.h.ug = function(a) {
            pr.G.ug.call(this, a);
            _.Yl(a, "trans-edit");
            a.contentEditable = !1;
            Sq(this) && qk(Sq(this), !1);
            S(this).Fa(a, "keydown", this.Qi);
            S(this).Fa(a, "mouseout", this.wf);
            S(this).Fa(a, "mouseover", this.wf)
        };
        _.h.wf = function() {
            var a = $n();
            null == a || a.Ib() == a.Yb() && a.Jb() == a.Zb() || this.U(a.Ib() == a.Yb())
        };
        _.h.Qi = function(a) {
            for (var b = 0; b < this.l; ++b) Im(this, b).U(!1);
            if (13 == a.keyCode || 3 == a.keyCode) return null === Xq(this) ? (this.mc(), a.stopPropagation(), a.preventDefault(), !0) : !1;
            null === Xq(this) || !nm(a) && 37 != a.keyCode && 39 != a.keyCode || (this.sb.focus(), this.Tc(Km(this, null)));
            return !1
        };
        _.h.pg = function(a) {
            var b = $n();
            if (b.Ib() == b.Yb() && b.Jb() == b.Zb()) {
                var c = b.bh() ? b.Jb() : b.Zb();
                b = Pn(Nn(Dn(b)));
                if (!a && c == b.Jb() || a && c == b.Zb()) return !0
            }
            return !1
        };
        var qr = function(a, b, c) {
            X.call(this, a, b, c);
            this.j = null
        };
        _.w(qr, X);
        _.h = qr.prototype;
        _.h.ta = function(a) {
            X.prototype.ta.call(this, a);
            this.j = new rr("");
            this.he(this.j, !0)
        };
        _.h.Kh = function(a) {
            X.prototype.Kh.call(this, a);
            this.j.qc().value = this.g.ai(a)
        };
        _.h.U = function(a, b) {
            b = X.prototype.U.call(this, a, b);
            a && null != this.A() && (Sq(this) == this.j.qc() || Sq(this) == this.j.ue()) && cn(this.j, !0);
            return b
        };
        _.h.ye = function(a) {
            X.prototype.ye.call(this, a);
            a.target == this.j ? Vq(this, this.j.qc()) : Vq(this, this.A());
            Sq(this).focus();
            Sq(this).tabIndex = 0
        };
        _.h.sf = function(a) {
            return a == this.j ? -1 : X.prototype.sf.call(this, a)
        };
        _.h.Db = function(a) {
            return 9 == a.keyCode ? (this.j.ua & 2 ? (Sq(this) == this.j.qc() ? Vq(this, this.j.ue()) : Vq(this, this.j.qc()), Sq(this).focus(), Sq(this).tabIndex = 0) : cn(this.j, !0), a.preventDefault(), a.stopPropagation(), !0) : X.prototype.Db.call(this, a)
        };
        _.h.pg = function() {
            return null === Xq(this) || !(Xq(this) instanceof rr)
        };
        var rr = function(a, b, c) {
            U.call(this, a, c || sr.Ia(), b);
            this.Va(4, !1)
        };
        _.w(rr, U);
        _.h = rr.prototype;
        _.h.ee = function(a) {
            a.target == this.ue() && this.dispatchEvent("action")
        };
        _.h.ba = function() {
            U.prototype.ba.call(this);
            S(this).D(this.qc(), "keydown", function(a) {
                32 == a.keyCode && a.stopPropagation()
            })
        };
        _.h.qc = function() {
            return this.h.qc(this.A())
        };
        _.h.ue = function() {
            return this.h.ue(this.A())
        };
        _.h.cc = function() {
            return this.qc().value
        };
        var sr = function() {};
        _.w(sr, Lm);
        sr.prototype.N = function(a) {
            var b = a.g.N("INPUT", {
                    value: a.za(),
                    id: "alt-input-text",
                    type: "text"
                }),
                c = a.g.N("INPUT", {
                    value: tr,
                    id: "alt-input-submit",
                    "class": ur,
                    type: "button"
                });
            return a.g.N("DIV", {
                id: "alt-input"
            }, b, c)
        };
        sr.prototype.qc = function(a) {
            return a.firstChild
        };
        sr.prototype.ue = function(a) {
            return a.firstChild.nextSibling
        };
        sr.Ia = function() {
            return _.lm(sr)
        };
        var tr = "",
            ur = "";
        var vr = function() {};
        _.y(vr, Lm);
        tj(vr);
        _.h = vr.prototype;
        _.h.td = function() {};
        _.h.Hb = function(a, b) {
            Zm(a, !1);
            gn(a);
            a.Va(32, !1);
            vr.G.Hb.call(this, a, b);
            a.j(b.value);
            return b
        };
        _.h.N = function(a) {
            Zm(a, !1);
            gn(a);
            a.Va(32, !1);
            return a.g.N("TEXTAREA", {
                "class": Om(this, a).join(" "),
                disabled: !a.isEnabled()
            }, a.za() || "")
        };
        _.h.Ne = function(a) {
            return "TEXTAREA" == a.tagName
        };
        _.h.bg = function() {};
        _.h.ag = function(a) {
            return a.isEnabled()
        };
        _.h.ud = function() {};
        _.h.ce = function(a, b, c) {
            vr.G.ce.call(this, a, b, c);
            (a = a.A()) && 1 == b && (a.disabled = c)
        };
        _.h.Wb = function() {};
        _.h.be = function(a, b) {
            a && (a.value = b)
        };
        _.h.Ga = function() {
            return "VIpgJd-B7I4Od"
        };
        var wr = function(a, b, c) {
            U.call(this, a, b || vr.Ia(), c);
            Zm(this, !1);
            this.af = !0;
            (b = this.A()) && this.h.Oe(b, !0);
            this.Jd = "" != a;
            a || (this.ad = "")
        };
        _.y(wr, U);
        var xr = !(_.B && !(11 <= Number(_.yc)));
        _.h = wr.prototype;
        _.h.Ld = !1;
        _.h.Af = !1;
        _.h.Jd = !1;
        _.h.xc = 0;
        _.h.oj = 0;
        _.h.qh = 0;
        _.h.Yi = !1;
        _.h.Jf = !1;
        _.h.Fh = !1;
        _.h.Eh = !1;
        _.h.Wd = "";
        var yr = function(a) {
                return a.l.top + a.l.bottom + a.ca.top + a.ca.bottom
            },
            zr = function(a) {
                var b = a.qh,
                    c = a.A();
                b && c && a.Jf && (b -= yr(a));
                return b
            },
            Br = function(a) {
                a.qh = 50;
                Ar(a)
            },
            Cr = function(a) {
                a.oj = 50;
                Ar(a)
            };
        wr.prototype.hb = function(a) {
            this.j(String(a))
        };
        wr.prototype.Na = function() {
            return this.A().value != this.Wd || Dr(this) || this.Jd ? this.A().value : ""
        };
        wr.prototype.j = function(a) {
            wr.G.j.call(this, a);
            this.Jd = "" != a;
            Ar(this)
        };
        wr.prototype.Ca = function(a) {
            wr.G.Ca.call(this, a);
            this.A().disabled = !a
        };
        var Ar = function(a) {
                a.A() && a.I()
            },
            Dr = function(a) {
                return "placeholder" in a.A()
            },
            Er = function(a) {
                a.Wd && (Dr(a) ? a.A().placeholder = a.Wd : !a.A() || a.Jd || a.Af || (_.R(a.A(), "B7I4Od-LwH6nd-YPqjbf"), a.A().value = a.Wd))
            };
        wr.prototype.ba = function() {
            wr.G.ba.call(this);
            var a = this.A();
            _.K(a, {
                overflowY: "hidden",
                overflowX: "auto",
                boxSizing: "border-box",
                MsBoxSizing: "border-box",
                WebkitBoxSizing: "border-box",
                MozBoxSizing: "border-box"
            });
            this.l = pl(a);
            this.ca = sl(a);
            S(this).D(a, "scroll", this.I).D(a, "focus", this.I).D(a, "keyup", this.I).D(a, "mouseup", this.ya).D(a, "blur", this.la);
            Er(this);
            Ar(this)
        };
        var Fr = function(a) {
                if (!a.Yi) {
                    var b = a.A().cloneNode(!1);
                    _.K(b, {
                        position: "absolute",
                        height: "auto",
                        top: "-9999px",
                        margin: "0",
                        padding: "1px",
                        border: "1px solid #000",
                        overflow: "hidden"
                    });
                    a.g.X.body.appendChild(b);
                    var c = b.scrollHeight;
                    b.style.padding = "10px";
                    var d = b.scrollHeight;
                    a.Fh = d > c;
                    b.style.borderWidth = "10px";
                    a.Eh = b.scrollHeight > d;
                    b.style.height = "100px";
                    100 != b.offsetHeight && (a.Jf = !0);
                    _.hk(b);
                    a.Yi = !0
                }
                b = a.A();
                isNaN(a.l.top) && (a.l = pl(b), a.ca = sl(b));
                c = a.A().scrollHeight;
                var e = a.A();
                d = e.offsetHeight - e.clientHeight;
                if (!a.Fh) {
                    var f = a.l;
                    d -= f.top + f.bottom
                }
                a.Eh || (e = sl(e), d -= e.top + e.bottom);
                c += 0 < d ? d : 0;
                a.Jf ? c -= yr(a) : (a.Fh || (d = a.l, c += d.top + d.bottom), a.Eh || (a = sl(b), c += a.top + a.bottom));
                return c
            },
            Gr = function(a, b) {
                a.xc != b && (a.xc = b, a.A().style.height = b + "px")
            },
            Hr = function(a) {
                var b = a.A();
                b.style.height = "auto";
                var c = b.value.match(/\n/g) || [];
                b.rows = c.length + 1;
                a.xc = 0
            };
        wr.prototype.la = function() {
            Dr(this) || (this.Af = !1, "" == this.A().value && (this.Jd = !1, Er(this)))
        };
        wr.prototype.I = function(a) {
            if (!this.Ld) {
                var b = this.A();
                !Dr(this) && a && "focus" == a.type && (b.value == this.Wd && this.Wd && !this.Af && (_.Yl(b, "B7I4Od-LwH6nd-YPqjbf"), b.value = ""), this.Af = !0, this.Jd = "" != b.value);
                var c = !1;
                this.Ld = !0;
                a = this.xc;
                if (b.scrollHeight) {
                    var d = !1,
                        e = !1,
                        f = Fr(this),
                        g = b.offsetHeight,
                        k = zr(this);
                    var l = this.oj;
                    var m = this.A();
                    l && m && this.Jf && (l -= yr(this));
                    k && f < k ? (Gr(this, k), d = !0) : l && f > l ? (Gr(this, l), b.style.overflowY = "", e = !0) : g != f ? Gr(this, f) : this.xc || (this.xc = f);
                    d || e || !xr || (c = !0)
                } else Hr(this);
                this.Ld = !1;
                c && (b = this.A(), this.Ld || (this.Ld = !0, (e = b.scrollHeight) ? (f = Fr(this), c = zr(this), c && f <= c || (d = this.l, b.style.paddingTop = d.top + 1 + "px", Fr(this) == f && (b.style.paddingTop = d.top + e + "px", b.scrollTop = 0, e = Fr(this) - e, e >= c ? Gr(this, e) : Gr(this, c)), b.style.paddingTop = d.top + "px")) : Hr(this), this.Ld = !1));
                a != this.xc && this.dispatchEvent("resize")
            }
        };
        wr.prototype.ya = function() {
            var a = this.A(),
                b = a.offsetHeight;
            a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
            b != this.xc && (this.xc = this.qh = b)
        };
        var Ir = function(a, b) {
                this.h = b;
                for (var c = [], d = !0, e = a.length - 1; 0 <= e; e--) {
                    var f = a[e] | 0;
                    d && f == b || (c[e] = f, d = !1)
                }
                this.g = c
            },
            Jr = {},
            Kr = function(a) {
                return -128 <= a && 128 > a ? _.ac(Jr, a, function(b) {
                    return new Ir([b | 0], 0 > b ? -1 : 0)
                }) : new Ir([a | 0], 0 > a ? -1 : 0)
            },
            Nr = function(a) {
                if (isNaN(a) || !isFinite(a)) return Lr;
                if (0 > a) return Mr(Nr(-a));
                for (var b = [], c = 1, d = 0; a >= c; d++) b[d] = a / c | 0, c *= 4294967296;
                return new Ir(b, 0)
            },
            Lr = Kr(0),
            Or = Kr(1),
            Pr = Kr(16777216),
            Rr = function(a) {
                if (Qr(a)) return -Rr(Mr(a));
                for (var b = 0, c = 1, d = 0; d < a.g.length; d++) {
                    var e =
                        Sr(a, d);
                    b += (0 <= e ? e : 4294967296 + e) * c;
                    c *= 4294967296
                }
                return b
            };
        Ir.prototype.toString = function(a) {
            a = a || 10;
            if (2 > a || 36 < a) throw Error("Ga`" + a);
            if (Tr(this)) return "0";
            if (Qr(this)) return "-" + Mr(this).toString(a);
            for (var b = Nr(Math.pow(a, 6)), c = this, d = "";;) {
                var e = Ur(c, b).g;
                c = Vr(c, Wr(e, b));
                var f = ((0 < c.g.length ? c.g[0] : c.h) >>> 0).toString(a);
                c = e;
                if (Tr(c)) return f + d;
                for (; 6 > f.length;) f = "0" + f;
                d = f + d
            }
        };
        var Sr = function(a, b) {
                return 0 > b ? 0 : b < a.g.length ? a.g[b] : a.h
            },
            Tr = function(a) {
                if (0 != a.h) return !1;
                for (var b = 0; b < a.g.length; b++)
                    if (0 != a.g[b]) return !1;
                return !0
            },
            Qr = function(a) {
                return -1 == a.h
            },
            Xr = function(a, b) {
                a = Vr(a, b);
                return Qr(a) ? -1 : Tr(a) ? 0 : 1
            },
            Mr = function(a) {
                for (var b = a.g.length, c = [], d = 0; d < b; d++) c[d] = ~a.g[d];
                return (new Ir(c, ~a.h)).add(Or)
            };
        Ir.prototype.abs = function() {
            return Qr(this) ? Mr(this) : this
        };
        Ir.prototype.add = function(a) {
            for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0, e = 0; e <= b; e++) {
                var f = d + (Sr(this, e) & 65535) + (Sr(a, e) & 65535),
                    g = (f >>> 16) + (Sr(this, e) >>> 16) + (Sr(a, e) >>> 16);
                d = g >>> 16;
                f &= 65535;
                g &= 65535;
                c[e] = g << 16 | f
            }
            return new Ir(c, c[c.length - 1] & -2147483648 ? -1 : 0)
        };
        var Vr = function(a, b) {
                return a.add(Mr(b))
            },
            Wr = function(a, b) {
                if (Tr(a) || Tr(b)) return Lr;
                if (Qr(a)) return Qr(b) ? Wr(Mr(a), Mr(b)) : Mr(Wr(Mr(a), b));
                if (Qr(b)) return Mr(Wr(a, Mr(b)));
                if (0 > Xr(a, Pr) && 0 > Xr(b, Pr)) return Nr(Rr(a) * Rr(b));
                for (var c = a.g.length + b.g.length, d = [], e = 0; e < 2 * c; e++) d[e] = 0;
                for (e = 0; e < a.g.length; e++)
                    for (var f = 0; f < b.g.length; f++) {
                        var g = Sr(a, e) >>> 16,
                            k = Sr(a, e) & 65535,
                            l = Sr(b, f) >>> 16,
                            m = Sr(b, f) & 65535;
                        d[2 * e + 2 * f] += k * m;
                        Yr(d, 2 * e + 2 * f);
                        d[2 * e + 2 * f + 1] += g * m;
                        Yr(d, 2 * e + 2 * f + 1);
                        d[2 * e + 2 * f + 1] += k * l;
                        Yr(d, 2 * e + 2 * f + 1);
                        d[2 *
                            e + 2 * f + 2] += g * l;
                        Yr(d, 2 * e + 2 * f + 2)
                    }
                for (e = 0; e < c; e++) d[e] = d[2 * e + 1] << 16 | d[2 * e];
                for (e = c; e < 2 * c; e++) d[e] = 0;
                return new Ir(d, 0)
            },
            Yr = function(a, b) {
                for (;
                    (a[b] & 65535) != a[b];) a[b + 1] += a[b] >>> 16, a[b] &= 65535, b++
            },
            Zr = function(a, b) {
                this.g = a;
                this.h = b
            },
            Ur = function(a, b) {
                if (Tr(b)) throw Error("Ia");
                if (Tr(a)) return new Zr(Lr, Lr);
                if (Qr(a)) return b = Ur(Mr(a), b), new Zr(Mr(b.g), Mr(b.h));
                if (Qr(b)) return b = Ur(a, Mr(b)), new Zr(Mr(b.g), b.h);
                if (30 < a.g.length) {
                    if (Qr(a) || Qr(b)) throw Error("Ha");
                    for (var c = Or, d = b; 0 >= Xr(d, a);) c = c.shiftLeft(1),
                        d = d.shiftLeft(1);
                    var e = $r(c, 1),
                        f = $r(d, 1);
                    d = $r(d, 2);
                    for (c = $r(c, 2); !Tr(d);) {
                        var g = f.add(d);
                        0 >= Xr(g, a) && (e = e.add(c), f = g);
                        d = $r(d, 1);
                        c = $r(c, 1)
                    }
                    b = Vr(a, Wr(e, b));
                    return new Zr(e, b)
                }
                for (e = Lr; 0 <= Xr(a, b);) {
                    c = Math.max(1, Math.floor(Rr(a) / Rr(b)));
                    d = Math.ceil(Math.log(c) / Math.LN2);
                    d = 48 >= d ? 1 : Math.pow(2, d - 48);
                    f = Nr(c);
                    for (g = Wr(f, b); Qr(g) || 0 < Xr(g, a);) c -= d, f = Nr(c), g = Wr(f, b);
                    Tr(f) && (f = Or);
                    e = e.add(f);
                    a = Vr(a, g)
                }
                return new Zr(e, a)
            };
        Ir.prototype.and = function(a) {
            for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = Sr(this, d) & Sr(a, d);
            return new Ir(c, this.h & a.h)
        };
        Ir.prototype.or = function(a) {
            for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = Sr(this, d) | Sr(a, d);
            return new Ir(c, this.h | a.h)
        };
        Ir.prototype.xor = function(a) {
            for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = Sr(this, d) ^ Sr(a, d);
            return new Ir(c, this.h ^ a.h)
        };
        Ir.prototype.shiftLeft = function(a) {
            var b = a >> 5;
            a %= 32;
            for (var c = this.g.length + b + (0 < a ? 1 : 0), d = [], e = 0; e < c; e++) d[e] = 0 < a ? Sr(this, e - b) << a | Sr(this, e - b - 1) >>> 32 - a : Sr(this, e - b);
            return new Ir(d, this.h)
        };
        var $r = function(a, b) {
            var c = b >> 5;
            b %= 32;
            for (var d = a.g.length - c, e = [], f = 0; f < d; f++) e[f] = 0 < b ? Sr(a, f + c) >>> b | Sr(a, f + c + 1) << 32 - b : Sr(a, f + c);
            return new Ir(e, a.h)
        };
        Vr(Or.shiftLeft(32), Or);
        Vr(Or.shiftLeft(128), Or);
        var as = _.B || _.fc || _.cc || !1;
        var bs = function(a, b, c, d, e, f, g, k, l) {
            _.M.call(this, a);
            this.l = g || null;
            null != this.l && this.l.B((0, _.x)(this.kl, this));
            this.o = null;
            this.h = "auto";
            this.Ka = this.V = "";
            this.Ic = new Bo;
            this.Dd = !!b && as && !_.B;
            this.ca = null != e ? e : 0;
            this.j = this.Dd ? new pr : new qr;
            l && this.j.Ca(!1);
            if (0 < this.ca)
                for (a = this.j, a.I = !0, b = 0; b < a.l; b++) g = _.bk("DIV", "goog-menu", ""), e = _.bk("DIV", null, g), g = new gq(e, g), a.o[b] = g, document.body.appendChild(e);
            this.j.ta(c);
            this.s = k || null;
            this.rb = null != d ? d : -1;
            this.R = sn.Ia();
            this.I = new _.of;
            this.Z = null;
            this.jb = "t";
            this.da = this.la = null;
            this.C = f || null;
            this.cb = !1;
            null != this.C && (this.C.l((0, _.x)(this.Cd, this)), this.C.j((0, _.x)(this.gl, this)));
            this.ya = null
        };
        _.w(bs, _.M);
        var cs = function(a, b) {
                a.ya = b;
                a.j.C = b
            },
            es = function(a) {
                var b = ds;
                a.R.j = b;
                a.jb = b
            },
            ns = function(a, b) {
                null != a.C && a.C.h();
                b && (a.o = new yo(b), a.da = null);
                fs(a) && (a.l.h(), null != a.s && a.s.g(!1));
                if (a.o) {
                    b = 0 != ak().length;
                    a.g.Ee(a.A());
                    a.j.mf();
                    a.ya && a.ya.attach(a.o);
                    for (var c = "", d = 0, e = 0; e < zo(a.o); e++) gs(a.o, e) && (c += " "), c += hs(a.o, e), d += uo(Ao(a.o, e));
                    if (0 != d) {
                        c = [];
                        d = !1;
                        e = a.o;
                        for (var f = "", g = 0; g < zo(e); g++) {
                            var k = Ao(e, g);
                            if (null != Oi(k.aa, 5) && 0 < wo(k).length) f = wo(k);
                            else {
                                k = (new so(k.aa)).aa;
                                var l = f,
                                    m = Mi(k);
                                if (5 < m) k[4] =
                                    l;
                                else {
                                    var n = Ni(k);
                                    n ? n[5] = l : (n = {}, k[m - 1] = (n[5] = l, n))
                                }
                            }
                        }
                        for (e = 0; e < zo(a.o); e++) {
                            f = Ao(a.o, e);
                            g = vo(f, 0);
                            if (gs(a.o, e)) a.g.appendChild(a.A(), a.g.X.createTextNode(" "));
                            else if ("km" == a.V || "lo" == a.V) k = a.g, l = k.appendChild, m = a.A(), n = _.fc ? ck() : _.bc ? document.createTextNode("&shy;") : _.B ? document.createTextNode("&#8203;") : ck(), l.call(k, m, n);
                            null != Oi(f.aa, 5) && 0 < wo(f).length && 0 == Si(f.aa, 6) && c.push(wo(f));
                            var p;
                            k = hs(a.o, e);
                            /^[\s\xa0]*$/.test(k) ? 0 == k.length || (p = is(k)) : (p = a.g.N("SPAN", null, k), g = Si(g.aa, 2), 0 <= a.rb &&
                                g < a.rb && _.R(p, "alt-low-conf"), a.I.has(a.h + "." + a.V + "." + to(f)) && (g = a.I.get(a.h + "." + a.V + "." + to(f)), g != js(f, 0) && (a.g.Rb(p, g), _.R(p, "alt-edited"), d = !0, ks(a, !0))), null != a.j.jc ? a.j.jc.attach(p) : p.title = ir, jr(a.j, p, f));
                            p && a.g.appendChild(a.A(), p)
                        }
                        if (null != a.l) {
                            p = a.h + "." + a.V;
                            for (e = 0; e < c.length; ++e) p += "." + c[e];
                            a.I.has(p) && (ls(a, !1), d = !0, ms(a, a.I.get(p)), null != a.s && a.s.g(!1), ks(a, !0))
                        }
                        d || (ks(a, !1), ls(a, !1));
                        (d || b) && a.dispatchEvent("action");
                        zo(a.o)
                    }
                } else ks(a, !1), ls(a, !1)
            },
            is = function(a) {
                a = _.Tj(a).replace(/(\r\n|\r|\n)/g,
                    "<br>").split("<br>");
                var b = document.createDocumentFragment(),
                    c = 0;
                _.Qb(a, function(d) {
                    0 != c && b.appendChild(_.bk("BR"));
                    c++;
                    "" != d && b.appendChild(document.createTextNode(String(Xj(d))))
                });
                return b
            },
            os = function(a, b) {
                if (fs(a)) return a.l.g();
                var c = [];
                if (a.A() && a.A().childNodes)
                    for (var d = 0; d < a.A().childNodes.length; ++d) {
                        var e = a.A().childNodes[d];
                        c[d] = b && "BR" == e.tagName ? "\n" : _.rd(e)
                    }
                return c.join("")
            },
            qs = function(a, b, c) {
                if (a)
                    for (var d = 0; d < zo(a); d++) {
                        var e = Ao(a, d);
                        var f = e && e.aa;
                        e = f ? b === e ? !0 : Xi(b.aa, f) : !1;
                        if (e) {
                            e = -1;
                            b = zo(a);
                            for (f = d; 0 <= f; f--)
                                if (0 == Si(Ao(a, f).aa, 6)) {
                                    e = f;
                                    break
                                }
                            for (f = d + 1; f <= zo(a); f++)
                                if (0 == Si(Ao(a, f).aa, 6)) {
                                    b = f;
                                    break
                                }
                            if (c) d = ps(a, e, b);
                            else if (c = a, a = e, c) {
                                e = d + 1;
                                f = d;
                                for (d = hs(c, d).length; 64 > d && (e != b || f != a);) e < b && (d += hs(c, e++).length + 1), 64 > d && f > a && (d += hs(c, --f).length + 1);
                                d = ps(c, f, e)
                            } else d = "";
                            return d
                        }
                    }
                return ""
            },
            ps = function(a, b, c) {
                var d = [];
                d.push(hs(a, b));
                for (b += 1; b < c; b++) gs(a, b) && d.push(" "), d.push(hs(a, b));
                return d.join("")
            },
            gs = function(a, b) {
                if (0 == b) return !1;
                var c = Ao(a, b),
                    d = Ao(a, b - 1);
                return Ri(vo(c,
                    0).aa, 3) && !Ri(vo(d, 0).aa, 4) && !_.Vb(hs(a, b - 1), "\n")
            };
        _.h = bs.prototype;
        _.h.ob = function() {
            return this.h
        };
        _.h.qa = function() {
            return this.V
        };
        _.h.N = function() {
            this.na(_.yh(this.g, "span"))
        };
        _.h.na = function(a) {
            _.M.prototype.na.call(this, a);
            ns(this)
        };
        _.h.ba = function() {
            _.M.prototype.ba.call(this);
            S(this).D(this.j, "action", this.yl);
            null != this.s && null != this.s.h && S(this).D(this.s.h, "click", this.Fl);
            S(this).D(this.j, "show", this.xl);
            this.A() && S(this).D(this.A(), "keydown", function(a) {
                32 == a.keyCode && a.stopPropagation()
            }, !0)
        };
        _.h.L = function() {
            _.M.prototype.L.call(this);
            this.j.S()
        };
        _.h.kl = function() {
            this.C.Ca(this.l.j());
            ks(this, this.l.j())
        };
        _.h.yl = function(a) {
            if ("hide" != a.type || a.target == this.j)
                if (null == a.target && null != this.l) this.R.log("editpopupclk"), null != this.s && this.s.g(!0), this.l.l(os(this)), this.cb = "none" != this.C.A().style.display, this.C.reset(), null != this.s ? this.C.Ca("none" != this.s.h.style.display) : this.C.Ca(!1), ks(this, !1);
                else {
                    var b = a.l;
                    null == b && null != a.currentTarget && (b = a.currentTarget.sb);
                    var c = a.target.cc();
                    if (null != b && null != a.target) {
                        var d = b,
                            e = this.j.s.get(_.Aa(d));
                        this.g.Rb(d, c);
                        c == js(e, 0) ? (_.Yl(d, "alt-edited"), 0 == ak().length &&
                            (ks(this, !1), ls(this, !1))) : (_.R(d, "alt-edited"), ks(this, !0), ls(this, !0));
                        null != this.I && (d = this.h + "." + this.V + "." + to(e), this.I.set(d, c));
                        b = this.j.s.get(_.Aa(b));
                        null != this.I && (d = this.h + "." + this.V + "." + to(b), this.I.set(d, c));
                        e = js(b, 0);
                        d = Km(this.j, a.target);
                        e = {
                            sl: this.h,
                            tl: this.V,
                            utrans: c,
                            gtrans: e,
                            index: d,
                            ophrase: to(b),
                            osentence: wo(b),
                            tsentence: qs(this.o, b)
                        };
                        0 < uo(b) && (e.confidence = Si(vo(b, 0).aa, 2));
                        if (a.target instanceof rr || -1 == d) e.manual = 1;
                        for (var f in e) "string" === typeof e[f] && 64 < e[f].length && (e.tr =
                            1, e[f] = e[f].substr(0, 64));
                        this.R.log("usealt", e, this.Z);
                        a = new _.ud("usealt");
                        a.text = c;
                        this.dispatchEvent(a);
                        this.dispatchEvent("action")
                    }
                }
        };
        var ms = function(a, b) {
            if (a.A()) {
                null == a.la && (a.da = _.xa(a.g.Wk(a.A())));
                a.la = b;
                var c;
                if (c = a.A().childNodes && 0 < a.A().childNodes.length) c = (c = a.A().childNodes[0]) ? _.qf(a.j.h, _.Aa(c)) : !1;
                if (c) a.g.Ee(a.A()), a.j.mf(), b = a.g.N("SPAN", "alt-edited", a.la), a.g.appendChild(a.A(), b), jr(a.j, b, new so);
                else {
                    _.id(a.A());
                    a = a.A();
                    c = _.Tj(b);
                    b = _.bk("DIV");
                    c = c.replace(/(\r\n|\r|\n)/g, "<br>").split("<br>");
                    for (var d = 0; d < c.length; ++d) {
                        var e = c[d];
                        e.length && (e = _.bk("SPAN", "alt-edited", e), b.appendChild(e));
                        d != c.length - 1 && (e = _.bk("BR"),
                            b.appendChild(e))
                    }
                    a.appendChild(b)
                }
            }
        };
        _.h = bs.prototype;
        _.h.Fl = function() {
            null != this.l && fs(this) ? this.l.s() : rs(this);
            this.R.log("clkundo", void 0, this.Z)
        };
        _.h.gl = function() {
            fs(this) && (this.l.j() && (ms(this, this.l.g()), this.cb = !0), this.l.h(), null != this.s && this.s.g(!1), this.l.j() && ks(this, !0), this.C.Ca(!0), _.O(this.C.A(), this.cb), this.dispatchEvent("action"));
            this.R.log("clkcancel", void 0, this.Z)
        };
        _.h.xl = function() {
            var a = this.j.s.get(_.Aa(this.j.sb));
            if (a) {
                if (0 < this.ca) {
                    var b = new zk("source=baf");
                    if (1 == this.ca) {
                        for (var c = [], d = 0, e = uo(a); d < e; d++) c.push(js(a, d));
                        d = this.Ic;
                        var f = this.V,
                            g = this.h,
                            k = ss(this),
                            l = (0, _.x)(this.Im, this);
                        e = new zk;
                        var m = new zk;
                        e.set("client", "mt");
                        e.set("sl", f);
                        e.set("tl", g);
                        e.set("hl", k);
                        e.set("v", "1.0");
                        b && e.o(b);
                        (b = !Array.isArray(c) || Array.isArray(c) && 1 == c.length) ? m.set("q", c): Dk(m, "q", c);
                        b = (0, _.x)(d.j, d, b, l);
                        Do(d, "/translate_a/t", e, m, b)
                    } else
                        for (d = 0, e = uo(a); d < e; d++) {
                            g =
                                js(a, d);
                            c = this.Ic;
                            m = this.V;
                            l = this.h;
                            f = ss(this);
                            k = (0, _.x)(this.Jm, this, d);
                            var n = b,
                                p = new zk,
                                t = new zk;
                            p.set("client", "mt");
                            p.set("sl", m);
                            p.set("tl", l);
                            p.set("hl", f);
                            Dk(p, "dt", ["at", "t"]);
                            n && p.o(n);
                            t.set("q", g);
                            Do(c, "/translate_a/single", p, t, (0, _.x)(c.h, c, k, void 0))
                        }
                }
                b = new _.ud("click");
                b.text = this.j.cc();
                b.o = zo(this.o);
                this.dispatchEvent(b);
                b = {};
                a = vo(a, 0);
                b.confidence = Si(a.aa, 2);
                this.h && this.V && this.Ka && (b.segments = zo(this.o), b.sl = this.h, b.tl = this.V, b.hl = this.Ka);
                this.R.log("phrsclk", b, this.Z)
            }
        };
        _.h.Jm = function(a, b) {
            if (1 == this.ca || 1 < zo(b)) {
                var c = Vi(Ui(b.aa, 1, xo, 0).aa, 1);
                var d = 1;
                for (var e = Qi(b.aa, 1); d < e; d++) c += " " + Vi(Ui(b.aa, 1, xo, d).aa, 1);
                d = c
            } else if (1 == zo(b)) {
                c = [];
                b = Ao(b, 0);
                d = 0;
                for (e = Math.min(this.ca, uo(b)); d < e; d++) c.push(js(b, d));
                d = c.join(", ")
            } else d = "...";
            nr(this.j, a, d)
        };
        _.h.Im = function(a) {
            for (var b = 0; b < a.length; b++) nr(this.j, b, a[b])
        };
        var rs = function(a) {
                fs(a) && (null != a.s && a.s.g(!1), a.l.h());
                qj(a.I);
                a.la = null;
                ns(a);
                a.dispatchEvent("action")
            },
            ks = function(a, b) {
                null != a.s && null != a.s.h && _.O(a.s.h, b)
            },
            ls = function(a, b) {
                null != a.C && (b && a.C.reset(), _.O(a.C.A(), b))
            };
        bs.prototype.Cd = function() {
            var a = [],
                b;
            null != this.da ? b = this.da : b = _.jd(this.A());
            for (var c = {
                    segment: []
                }, d = null, e = 0, f = 0; f < b.length; f++) {
                var g = Ao(this.o, f);
                if (null != g) {
                    var k = _.rd(b[f]);
                    a: {
                        var l = k;
                        var m = g;
                        if (0 == uo(m)) l = 0;
                        else {
                            for (var n = 0; n < uo(m); ++n)
                                if (l == js(m, n)) {
                                    l = n;
                                    break a
                                }
                            l = -1
                        }
                    }
                    m = (0, _.Wb)(wo(g));
                    n = qs(this.o, g, !0);
                    if (0 != m.length) {
                        if (0 == a.length || m != a[a.length - 1]) a.push(m), e = a.length - 1, d = null, e < Qi(this.o.aa, 1) && (d = Si(Ui(this.o.aa, 1, xo, e).aa, 5)), d = Go(d), e = 0, d = {
                            source: m,
                            original_target: n,
                            segment_source: d,
                            phrase_correction: []
                        }, c.segment.push(d);
                        if (0 != l)
                            for (m = js(g, 0).length, l = {
                                    alternative_index: l,
                                    edited_phrase: k,
                                    source_span: [],
                                    target_span: [{
                                        start: e,
                                        end: e + m
                                    }]
                                }, d.phrase_correction.push(l), m = 0; m < Qi(g.aa, 4); ++m) n = Ui(g.aa, 4, ro, m), l.source_span.push({
                                start: Si(n.aa, 1),
                                end: Si(n.aa, 2)
                            });
                        e += k.length;
                        Ri(vo(g, 0).aa, 3) && e++
                    }
                }
            }
            if (fs(this)) {
                this.dispatchEvent("action");
                this.l.h();
                null != this.s && this.s.g(!1);
                ks(this, !0);
                this.l.g() != os(this) && ms(this, this.l.g());
                b = this.h + "." + this.V;
                for (f = 0; f < a.length; ++f) b += "." + a[f];
                a = this.l.g();
                this.I.set(b, a);
                c.contains_full_edit = !0
            }
            c.edited_target = os(this, !0);
            a = new zk;
            a.set("ue", JSON.stringify(c));
            a.set("sl", this.h);
            a.set("tl", this.V);
            _.Gh("/translate_suggestion?client=" + this.jb, void 0, "POST", a.toString(), void 0, 1E4)
        };
        var fs = function(a) {
                return null != a.l && a.l.o()
            },
            hs = function(a, b) {
                a = Ao(a, b);
                return 0 == uo(a) ? to(a) : js(a, 0)
            },
            js = function(a, b) {
                return Vi(vo(a, b).aa, 1)
            },
            ss = function(a) {
                a = a.Ka;
                0 === a.length && null != _.Yj("hl") && (a = _.Yj("hl").value);
                return a
            };
        var us;
        _.ts = function(a) {
            var b = a.Pd,
                c = a.mj;
            a.dj ? b = "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" + String(b).replace(_.Ml, _.Gl) + "',sizingMethod='scale');\"></span>" : (a = _.V.zd, b = '<img src="' + _.P(_.Sl(b)) + '" width="37px" height="14px" style="padding-right: 3px" alt="Google ' + _.P(a) + '">');
            a = _.V.zd;
            return (0, _.L)('<span style="white-space:nowrap"><a class="goog-logo-link" href="' + _.P(_.Ql(c)) + '" target="_blank">' + b +
                _.Kl(a) + "</a></span>")
        };
        us = function(a, b) {
            a = {
                Pd: a.Pd,
                dir: a.dir,
                Th: a.Th
            };
            var c = yl["key_a:"];
            c || (c = yl["key_a:"]);
            b = (c ? c : Al)(a, b);
            return (0, _.L)(b)
        };
        _.zl(0, function(a) {
            var b = a.Pd,
                c = _.V.zd,
                d = _.V.ji;
            return (0, _.L)('<div id="goog-gt-tt" class="skiptranslate" dir="' + _.P(a.dir) + '"><div style="padding: 8px;"><div><div class="logo"><img src="' + _.P(_.Sl(b)) + '" width="20" height="20" alt="Google ' + _.P(c) + '"/></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">' + _.Kl(d) + '</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"/><div class="activity-root"></div></div></div><div class="status-message"></div></div>')
        });
        var vs = function(a) {
                var b = a.method,
                    c = a.Rk,
                    d = a.dir,
                    e = _.V.uk,
                    f = _.V.Wf;
                a = '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="' + _.P(_.Ql(a.Ck)) + '" method="' + _.P(b) + '"><div class="form-buttons" style="text-align:' + (_.wl(d, "rtl") ? "right" : "left") + '"><input class="activity-submit" type="button" value="' + _.P(e) + '"><input class="activity-cancel" type="button" value="' + _.P(f) + '"></div><div class="parameters"><input type="hidden" name="gtrans"/><input type="hidden" name="utrans"/><input type="hidden" name="hl"/><input type="hidden" name="text"/><input type="hidden" name="langpair"/><input type="hidden" name="oe" value="UTF-8"/>';
                b = c.length;
                for (d = 0; d < b; d++) a += '<input type="hidden" name="' + _.P(c[d]) + '"/>';
                return (0, _.L)(a + "</div></form></div>")
            },
            ws = function() {
                return (0, _.L)('<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>')
            },
            xs = function(a) {
                return (0, _.L)('<div><span class="alt-translated-text"></span><div class="alt-helper-text">' + _.Kl(a.Kl) + '</div><div class="activity-form-container"></div></div>')
            };
        _.y(fj, _.M);
        _.h = fj.prototype;
        _.h.Ud = function(a) {
            this.C = a
        };
        _.h.cd = function() {
            if (!this.sa) throw Error("Ja");
            if (!this.C) throw Error("Ka");
        };
        _.h.Qc = function() {};
        _.h.S = function() {
            this.bc() || (fj.G.S.call(this), delete this.Hf)
        };
        _.h.va = function() {
            return this.C
        };
        var As = function() {
                _.E.call(this);
                this.l = "closure_frame" + ys++;
                this.j = [];
                zs[this.l] = this
            },
            Bs;
        _.y(As, _.E);
        var zs = {},
            ys = 0,
            Cs = function(a, b) {
                var c = _.Zc(a);
                yk(b, function(d, e) {
                    Array.isArray(d) || (d = [d]);
                    _.Qb(d, function(f) {
                        f = c.N("INPUT", {
                            type: "hidden",
                            name: e,
                            value: f
                        });
                        a.appendChild(f)
                    })
                })
            };
        _.h = As.prototype;
        _.h.xa = null;
        _.h.Ta = null;
        _.h.ld = null;
        _.h.lm = 0;
        _.h.ac = !1;
        _.h.Uf = !1;
        _.h.fh = null;
        _.h.kd = null;
        _.h.send = function(a, b, c, d) {
            if (this.ac) throw Error("La");
            a = new Ok(a);
            b = b ? b.toUpperCase() : "GET";
            c && (c = _.Xc(), a.g.set("zx", c));
            Bs || (Bs = _.bk("FORM"), Bs.acceptCharset = "utf-8", c = Bs.style, c.position = "absolute", c.visibility = "hidden", c.top = c.left = "-10px", c.width = c.height = "10px", c.overflow = "hidden", document.body.appendChild(Bs));
            this.xa = Bs;
            "GET" == b && Cs(this.xa, a.g);
            d && Cs(this.xa, d);
            Nj(this.xa, _.Dc(a.toString()));
            this.xa.method = b;
            Ds(this);
            Es(this)
        };
        var Fs = function(a, b) {
            if (a.ac) throw Error("La");
            var c = new Ok(b.action);
            a.xa = b;
            Nj(a.xa, c.toString());
            Ds(a)
        };
        _.h = As.prototype;
        _.h.abort = function() {
            if (this.ac) {
                var a = Gs(this);
                sk(a);
                this.Uf = this.ac = !1;
                this.dispatchEvent("abort");
                Hs(this)
            }
        };
        _.h.L = function() {
            this.ac && this.abort();
            As.G.L.call(this);
            this.Ta && Is(this);
            Es(this);
            delete this.B;
            this.fh = this.xa = null;
            delete zs[this.l]
        };
        _.h.Md = function() {
            return this.Uf
        };
        _.h.isActive = function() {
            return this.ac
        };
        _.h.sc = function() {
            return this.fh
        };
        var Ds = function(a) {
            a.ac = !0;
            a.ld = a.l + "_" + (a.lm++).toString(36);
            a.Ta = _.Zc(a.xa).N("IFRAME", {
                name: a.ld,
                id: a.ld
            });
            _.B && 7 > Number(_.tc) && Nj(a.Ta, _.Dc(_.zh(_.xh('javascript:""'))));
            var b = a.Ta.style;
            b.visibility = "hidden";
            b.width = b.height = "10px";
            b.display = "none";
            _.fc ? b.marginTop = b.marginLeft = "-10px" : (b.position = "absolute", b.top = b.left = "-10px");
            if (_.B && !_.vc("11")) {
                a.xa.target = a.ld || "";
                _.Zc(a.xa).X.body.appendChild(a.Ta);
                _.D(a.Ta, "readystatechange", a.o, !1, a);
                try {
                    a.h = !1, a.xa.submit()
                } catch (t) {
                    _.Rd(a.Ta, "readystatechange",
                        a.o, !1, a), Js(a)
                }
            } else {
                _.Zc(a.xa).X.body.appendChild(a.Ta);
                b = a.ld + "_inner";
                var c = _.nk(a.Ta);
                if (document.baseURI) {
                    var d = _.Tj(b);
                    d = _.Oc('<head><base href="' + _.Tj(document.baseURI) + '"></head><body><iframe id="' + d + '" name="' + d + '"></iframe>')
                } else d = _.Tj(b), d = _.Oc('<body><iframe id="' + d + '" name="' + d + '"></iframe>');
                c.write(_.Nc(d));
                _.D(c.getElementById(b), "load", a.g, !1, a);
                d = Zj("TEXTAREA", a.xa);
                for (var e = 0, f = d.length; e < f; e++) {
                    var g = d[e].value;
                    rk(d[e]) != g && (_.nd(d[e], g), d[e].value = g)
                }
                d = c.importNode(a.xa, !0);
                d.target = b;
                d.action = a.xa.action;
                c.body.appendChild(d);
                e = Zj("SELECT", a.xa);
                f = Zj("SELECT", d);
                g = 0;
                for (var k = e.length; g < k; g++)
                    for (var l = Zj("OPTION", e[g]), m = Zj("OPTION", f[g]), n = 0, p = l.length; n < p; n++) m[n].selected = l[n].selected;
                e = Zj("INPUT", a.xa);
                f = Zj("INPUT", d);
                g = 0;
                for (k = e.length; g < k; g++)
                    if ("file" == e[g].type && e[g].value != f[g].value) {
                        a.xa.target = b;
                        d = a.xa;
                        break
                    }
                try {
                    a.h = !1, d.submit(), c.close(), _.ec && _.ig(a.C, 250, a)
                } catch (t) {
                    _.Rd(c.getElementById(b), "load", a.g, !1, a), c.close(), Js(a)
                }
            }
        };
        As.prototype.o = function() {
            if ("complete" == this.Ta.readyState) {
                _.Rd(this.Ta, "readystatechange", this.o, !1, this);
                try {
                    var a = _.nk(this.Ta);
                    if (_.B && "about:blank" == a.location && !navigator.onLine) {
                        Js(this);
                        return
                    }
                } catch (b) {
                    Js(this);
                    return
                }
                Ks(this, a)
            }
        };
        As.prototype.g = function() {
            _.Rd(Gs(this), "load", this.g, !1, this);
            try {
                Ks(this, this.Ta ? _.nk(Gs(this)) : null)
            } catch (a) {
                Js(this)
            }
        };
        var Ks = function(a, b) {
                a.ac = !1;
                try {
                    var c = b.body;
                    a.fh = c.textContent || c.innerText
                } catch (e) {
                    var d = 1
                }
                d || "function" != typeof a.B || (b = a.B(b)) && (d = 4);
                d ? Js(a) : (a.Uf = !0, a.dispatchEvent("complete"), a.dispatchEvent("success"), Hs(a))
            },
            Js = function(a) {
                a.h || (a.Uf = !1, a.ac = !1, a.dispatchEvent("complete"), a.dispatchEvent("error"), Hs(a), a.h = !0)
            },
            Hs = function(a) {
                Is(a);
                Es(a);
                a.xa = null;
                a.dispatchEvent("ready")
            },
            Is = function(a) {
                var b = a.Ta;
                b && (b.onreadystatechange = null, b.onload = null, b.onerror = null, a.j.push(b));
                a.kd && (_.jg(a.kd),
                    a.kd = null);
                _.ec ? a.kd = _.ig(a.s, 2E3, a) : a.s();
                a.Ta = null;
                a.ld = null
            };
        As.prototype.s = function() {
            this.kd && (_.jg(this.kd), this.kd = null);
            for (; 0 != this.j.length;) {
                var a = this.j.pop();
                _.hk(a)
            }
        };
        var Es = function(a) {
                a.xa && a.xa == Bs && _.id(a.xa)
            },
            Gs = function(a) {
                return a.Ta ? _.B && !_.vc("11") ? a.Ta : _.nk(a.Ta).getElementById(a.ld + "_inner") : null
            };
        As.prototype.C = function() {
            if (this.ac) {
                var a = this.Ta ? _.nk(Gs(this)) : null;
                a && !_.$b(a, "documentUri") ? (_.Rd(Gs(this), "load", this.g, !1, this), Js(this)) : _.ig(this.C, 250, this)
            }
        };
        var Ls = function(a, b) {
            _.M.call(this);
            this.C = a || "";
            this.j = null;
            this.o = [];
            this.h = null;
            this.I = b || "GET";
            this.l = this.s = null
        };
        _.w(Ls, _.M);
        Ls.prototype.N = function() {
            var a = {
                Ck: this.C,
                method: this.I,
                Rk: this.o,
                dir: _.Df.test(_.Jo) ? "rtl" : "ltr"
            };
            this.na(_.Di(vs, a))
        };
        Ls.prototype.na = function(a) {
            this.J = a;
            this.h = Bm(this, "activity-form");
            a = Bm(this, "activity-submit");
            this.l = new nn("");
            Fm(this.l, a);
            a = Bm(this, "activity-cancel");
            this.j = new nn("");
            Fm(this.j, a)
        };
        Ls.prototype.ba = function() {
            var a = S(this);
            a.D(this.l, "action", (0, _.x)(this.R, this));
            a.D(this.j, "action", this.dispatchEvent.bind(this, "cancelled"))
        };
        Ls.prototype.R = function() {
            var a = !0;
            this.s && (a = this.s());
            a && (a = new As, _.D(a, "success", function() {
                this.dispatchEvent("successful")
            }), _.D(a, "error", function() {
                this.dispatchEvent("failed")
            }), Fs(a, this.h));
            this.dispatchEvent("submitted")
        };
        var Ms = function(a, b) {
                for (var c in b) a.h[c] && (a.h[c].value = b[c])
            },
            Ns = function(a, b) {
                return a.h[b] ? a.h[b].value : ""
            };
        Ls.prototype.L = function() {
            this.l = this.h = this.j = null;
            _.M.prototype.L.call(this)
        };
        var Os = function(a, b) {
            a.s = b
        };
        var Ps = function(a, b) {
            fj.call(this, a);
            this.j = null;
            this.I = b || {};
            this.o = new iq;
            this.s = this.h = null;
            this.l = new _.Fp((a || {}).apiKey || "", ds);
            this.l.o.j = !1
        };
        _.w(Ps, fj);
        _.h = Ps.prototype;
        _.h.Ud = function(a) {
            fj.prototype.Ud.call(this, a);
            this.l.initialize((0, _.x)(this.cd, this))
        };
        _.h.cd = function() {
            fj.prototype.cd.call(this);
            var a = this.va().I,
                b = this.va().C;
            if (a && b) {
                _.nd(this.s, a);
                var c = this.o;
                c.J = b;
                fk(c.g, c.J);
                hq(c);
                _.O(this.o.g, !0);
                b = this.va().ob();
                c = this.va().qa();
                if (this.l.fb() && b && c) {
                    var d = this.va().wd(),
                        e = (0, _.x)(this.om, this);
                    this.l && this.l.translate(e, [d], b, c, 0, !1);
                    Ms(this.h, {
                        gtrans: a,
                        text: this.va().wd(),
                        hl: _.Jo,
                        langpair: b + "|" + c
                    });
                    Ms(this.h, this.I);
                    Ms(this.h, {
                        client: ds
                    })
                }
                this.dispatchEvent("ready")
            }
        };
        _.h.N = function() {
            this.na(_.Di(xs, {
                Kl: _.V.Wh
            }))
        };
        _.h.na = function(a) {
            this.J = a;
            this.s = Bm(this, "alt-translated-text");
            var b = Bm(this, "activity-form-container");
            this.h = new Ls(_.Yo, "POST");
            this.h.o = mi(this.I);
            Os(this.h, (0, _.x)(function() {
                Ms(this.h, {
                    utrans: os(this.j)
                });
                return Ns(this.h, "utrans") != Ns(this.h, "gtrans")
            }, this));
            this.h.ta(b);
            tr = _.V.Ak;
            ir = _.V.Wh;
            this.j = new bs(void 0, !0, a);
            cs(this.j, this.o);
            this.j.Z = "https://translate.google.com";
            es(this.j);
            Fm(this.j, this.s)
        };
        _.h.ba = function() {
            fj.prototype.ba.call(this);
            var a = S(this);
            a.D(this.h, "cancelled", (0, _.x)(function() {
                rs(this.j);
                this.dispatchEvent("cancelled")
            }, this));
            a.D(this.h, "submitted", (0, _.x)(function() {
                var b = os(this.j);
                this.va().I = b && (0, _.Wb)(b);
                this.dispatchEvent("submitted");
                b = _.V.ni;
                _.nd(this.va().Nc().A(), b)
            }, this))
        };
        _.h.om = function(a) {
            a && ns(this.j, a)
        };
        _.h.Qc = function() {
            _.O(this.o.g, !1)
        };
        _.h.L = function() {
            this.j && this.j.S();
            this.s = this.o = this.j = null;
            this.l && this.l.S();
            this.l = null;
            this.h && this.h.S();
            this.h = null;
            fj.prototype.L.call(this)
        };
        var ds = _.No.replace("_", "-") + "-alt";
        var Qs = function(a, b) {
            fj.call(this, a);
            this.o = !1;
            this.l = b || {};
            this.j = null
        };
        _.w(Qs, fj);
        _.h = Qs.prototype;
        _.h.Ud = function(a) {
            fj.prototype.Ud.call(this, a);
            S(this).D(this.j.A(), "keydown", (0, _.x)(this.va().Ge, this.va(), !1));
            this.o = this.va().ie;
            this.cd()
        };
        _.h.cd = function() {
            fj.prototype.cd.call(this);
            this.j.j(this.va().I);
            var a = this.va().ob(),
                b = this.va().qa();
            a && b && (Ms(this.h, {
                gtrans: this.va().I,
                text: this.va().wd(),
                hl: _.Jo,
                langpair: a + "|" + b
            }), Ms(this.h, this.l));
            this.dispatchEvent("ready");
            this.j.A().focus()
        };
        _.h.Qc = function() {
            this.va().Ge(this.o)
        };
        _.h.N = function() {
            this.na(_.Di(ws))
        };
        _.h.na = function(a) {
            this.J = a;
            a = Bm(this, "contribute-original-text");
            this.j = new wr("");
            Fm(this.j, a);
            Cr(this.j);
            Br(this.j);
            a = Bm(this, "activity-form-container");
            this.h = new Ls(_.Yo, "POST");
            this.h.o = mi(this.l);
            Os(this.h, (0, _.x)(function() {
                Ms(this.h, {
                    utrans: (0, _.Wb)(this.j.Na())
                });
                return Ns(this.h, "utrans") != Ns(this.h, "gtrans")
            }, this));
            this.h.ta(a)
        };
        _.h.ba = function() {
            fj.prototype.ba.call(this);
            var a = S(this);
            a.D(this.h, "cancelled", (0, _.x)(function() {
                this.dispatchEvent("cancelled")
            }, this));
            a.D(this.h, "submitted", (0, _.x)(function() {
                var b = this.j.Na();
                this.va().I = b && (0, _.Wb)(b);
                this.dispatchEvent("submitted");
                b = _.V.ni;
                _.nd(this.va().Nc().A(), b)
            }, this))
        };
        _.h.L = function() {
            this.j && this.j.S();
            this.j = null;
            this.h && this.h.S();
            this.h = null;
            fj.prototype.L.call(this)
        };
        var Rs = function(a) {
            _.E.call(this);
            this.La = a;
            this.j = {};
            this.H = new _.F(this);
            this.h = null
        };
        _.w(Rs, _.E);
        Rs.prototype.attach = function() {};
        Rs.prototype.fi = function() {};
        Rs.prototype.L = function() {
            this.H.S();
            this.H = null
        };
        var Ss = function(a, b, c) {
            if (b = a.La.h[b]) {
                c = c || "undefined" == typeof c;
                for (var d = 0; d < b.pb.length; ++d) b.pb[d] && a.cj(b.pb[d], c)
            }
        };
        Rs.prototype.cj = function(a, b) {
            _.K(a, "backgroundColor", b ? "#E6ECF9" : "");
            _.K(a, "color", b ? "#000" : "")
        };
        var ni = {},
            Ts = null,
            Us = function(a) {
                a = _.Aa(a);
                delete ni[a];
                oi() && Ts && Ts.stop()
            },
            Ws = function() {
                Ts || (Ts = new km(function() {
                    Vs()
                }, 20));
                var a = Ts;
                a.isActive() || a.start()
            },
            Vs = function() {
                var a = _.sb();
                _.Ac(ni, function(b) {
                    Xs(b, a)
                });
                oi() || Ws()
            };
        var Ys = function(a, b, c, d) {
            Zp.call(this);
            if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Ma");
            if (a.length != b.length) throw Error("Na");
            this.l = a;
            this.K = b;
            this.duration = c;
            this.C = d;
            this.coords = [];
            this.progress = 0
        };
        _.y(Ys, Zp);
        Ys.prototype.play = function(a) {
            if (a || 0 == this.g) this.progress = 0, this.coords = this.l;
            else if (1 == this.g) return !1;
            Us(this);
            this.startTime = a = _.sb(); - 1 == this.g && (this.startTime -= this.duration * this.progress);
            this.endTime = this.startTime + this.duration;
            this.progress || this.j();
            this.h("play"); - 1 == this.g && this.h("resume");
            this.g = 1;
            var b = _.Aa(this);
            b in ni || (ni[b] = this);
            Ws();
            Xs(this, a);
            return !0
        };
        Ys.prototype.stop = function(a) {
            Us(this);
            this.g = 0;
            a && (this.progress = 1);
            Zs(this, this.progress);
            this.Qc();
            this.Eb()
        };
        Ys.prototype.Jh = function(a) {
            this.progress = a;
            1 == this.g && (this.startTime = _.sb() - this.duration * this.progress, this.endTime = this.startTime + this.duration)
        };
        Ys.prototype.L = function() {
            0 == this.g || this.stop(!1);
            this.h("destroy");
            Ys.G.L.call(this)
        };
        var Xs = function(a, b) {
                b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
                a.progress = (b - a.startTime) / (a.endTime - a.startTime);
                1 < a.progress && (a.progress = 1);
                Zs(a, a.progress);
                1 == a.progress ? (a.g = 0, Us(a), a.h("finish"), a.Eb()) : 1 == a.g && a.B()
            },
            Zs = function(a, b) {
                "function" === typeof a.C && (b = a.C(b));
                a.coords = Array(a.l.length);
                for (var c = 0; c < a.l.length; c++) a.coords[c] = (a.K[c] - a.l[c]) * b + a.l[c]
            };
        Ys.prototype.B = function() {
            this.h("animate")
        };
        Ys.prototype.h = function(a) {
            this.dispatchEvent(new $s(a, this))
        };
        var $s = function(a, b) {
            _.ud.call(this, a);
            this.coords = b.coords;
            this.x = b.coords[0];
            this.y = b.coords[1];
            this.z = b.coords[2];
            this.duration = b.duration;
            this.progress = b.progress;
            this.state = b.g
        };
        _.y($s, _.ud);
        var at = function(a, b, c, d, e) {
            Ys.call(this, b, c, d, e);
            this.element = a
        };
        _.y(at, Ys);
        at.prototype.s = function() {};
        at.prototype.B = function() {
            this.s();
            at.G.B.call(this)
        };
        at.prototype.Eb = function() {
            this.s();
            at.G.Eb.call(this)
        };
        at.prototype.j = function() {
            this.s();
            at.G.j.call(this)
        };
        var bt = function(a, b, c, d, e) {
            "number" === typeof b && (b = [b]);
            "number" === typeof c && (c = [c]);
            at.call(this, a, b, c, d, e);
            if (1 != b.length || 1 != c.length) throw Error("Oa");
            this.o = -1
        };
        _.y(bt, at);
        var ct = 1 / 1024;
        bt.prototype.s = function() {
            var a = this.coords[0];
            if (Math.abs(a - this.o) >= ct) {
                var b = this.element.style;
                "opacity" in b ? b.opacity = a : "MozOpacity" in b ? b.MozOpacity = a : "filter" in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * Number(a) + ")");
                this.o = a
            }
        };
        bt.prototype.j = function() {
            this.o = -1;
            bt.G.j.call(this)
        };
        bt.prototype.Eb = function() {
            this.o = -1;
            bt.G.Eb.call(this)
        };
        var dt = function(a, b, c) {
            bt.call(this, a, 1, 0, b, c)
        };
        _.y(dt, bt);
        dt.prototype.j = function() {
            this.element.style.display = "";
            dt.G.j.call(this)
        };
        dt.prototype.Eb = function() {
            this.element.style.display = "none";
            dt.G.Eb.call(this)
        };
        var et = function(a, b, c) {
            bt.call(this, a, 0, 1, b, c)
        };
        _.y(et, bt);
        et.prototype.j = function() {
            this.element.style.display = "";
            et.G.j.call(this)
        };
        var ft = function() {
            _.M.call(this);
            this.h = null
        };
        _.w(ft, _.M);
        ft.prototype.N = function() {
            this.na(this.g.N("DIV", {
                "class": "status-message"
            }))
        };
        ft.prototype.na = function(a) {
            this.J = a;
            a.style.display = "none"
        };
        var ht = function(a) {
                var b = c;
                var c = (0, _.x)(function() {
                    _.nd(this.A(), "");
                    b && b()
                }, a);
                c = (0, _.x)(a.j, a, 750, c);
                gt(a, c)
            },
            it = function(a) {
                a.h && (a.h.stop(!0), a.h = null);
                _.nd(a.A(), "");
                a.U(!1)
            },
            gt = function(a, b) {
                a.h = new et(a.A(), 750);
                S(a).Pc(a.h, "begin", (0, _.x)(function() {
                    this.A().style.display = "block"
                }, a));
                S(a).Pc(a.h, "finish", (0, _.x)(function() {
                    this.h = null;
                    window.setTimeout(b, 2E3)
                }, a));
                a.h.play()
            };
        ft.prototype.j = function(a, b) {
            this.isVisible() && (this.h = new dt(this.A(), a), S(this).Pc(this.h, "finish", (0, _.x)(function() {
                b && b()
            }, this)), this.h.play())
        };
        ft.prototype.U = function(a) {
            this.A().style.display = a ? "block" : "none";
            this.A().style.opacity = a ? "1" : "0"
        };
        ft.prototype.isVisible = function() {
            return "none" !== this.A().style.display && "0" !== this.A().style.opacity
        };
        var jt = function() {
            W.call(this);
            this.ca = {};
            this.Ic = {};
            this.P = null;
            this.Dd = !1;
            this.Jc = this.j = this.T = null;
            this.da = {};
            this.H = new _.F(this);
            this.C = this.V = this.l = this.jb = this.h = this.I = this.ya = null;
            this.M = !0;
            this.rb = []
        };
        _.w(jt, W);
        _.h = jt.prototype;
        _.h.ta = function() {
            this.M = !1;
            var a = _.Df.test(_.Jo) ? "rtl" : "ltr";
            this.vd(_.Di(us, {
                Pd: "https://www.gstatic.com/images/branding/product/1x/translate_24dp.png",
                ho: "https://www.google.com/images/cleardot.gif",
                ko: _.So,
                dir: a,
                Th: Zo
            }));
            this.className += " skiptranslate";
            this.A() && this.P && this.jb && this.l.A() && this.T && this.C && (this.H.D(window, "resize", (0, _.x)(this.lc, this)), this.H.D(this, "hide", (0, _.x)(this.rm, this)), this.rb.length && (this.mg.apply(this, this.rb), this.rb = []))
        };
        _.h.mg = function(a) {
            for (var b = [], c = 0; c < arguments.length; ++c) {
                var d = arguments[c];
                if (d)
                    if (this.P || d.Hf) {
                        var e = _.bk("SPAN", {
                            "class": d.className || "activity-link"
                        });
                        _.nd(e, d.hh || "");
                        b.push(e);
                        ek(d.Hf || this.P, e);
                        if (d.Ud && d.Qc) {
                            var f = (0, _.x)(this.al, this, d);
                            this.H.D(e, "click", f);
                            d.Gf && this.H.D(this.T, d.Gf, f)
                        }
                        d.id = d.id || d.Lb();
                        this.ca[d.id] && this.Dj(d);
                        this.ca[d.id] = d;
                        this.Ic[d.id] = e
                    } else this.rb.push(d)
            }
            return b
        };
        _.h.Dj = function(a) {
            for (var b = 0; b < arguments.length; ++b) {
                var c = "string" === typeof arguments[b] || arguments[b] instanceof String ? arguments[b] : arguments[b].id,
                    d = this.ca[c],
                    e = this.Ic[c];
                d && e && (this.j && this.j.id === c && this.vg(), this.H.Fa(d, ["submitted", "cancelled"]), d.S(), this.da[c] && delete this.da[c], delete this.ca[c], delete this.Ic[c], _.hk(e))
            }
        };
        _.h.al = function(a) {
            if (this.T) {
                a != this.j && this.j && (it(this.l), this.j.Qc.call(this.j), this.j.A() && (this.j.A().style.display = "none"), kt(this, !1), this.j = null);
                kt(this, !0);
                it(this.l);
                this.j = a;
                if (this.da[a.id]) {
                    var b = this.da[a.id];
                    var c = a.cd
                } else a.ta(), b = a.A(), c = a.Ud, this.H.D(a, ["submitted", "cancelled"], (0, _.x)(this.vg, this)), a.ef && (this.da[a.id] = b);
                ek(this.T, b);
                c.call(a, this);
                a = new et(b, 100);
                this.H.Pc(a, "finish", (0, _.x)(this.lc, this, !0, !0));
                a.play()
            }
        };
        _.h.vg = function() {
            if (this.j)
                if (it(this.l), this.j.Qc.call(this.j), this.j.A()) {
                    var a = new dt(this.j.A(), 100);
                    this.H.Pc(a, "finish", (0, _.x)(function() {
                        _.hk(this.j.A());
                        this.j = null;
                        kt(this, !1);
                        _.rd(this.l.A()) && (ht(this.l), this.lc(!0, !0))
                    }, this));
                    a.play()
                } else kt(this, !1), this.j = null
        };
        _.h.oh = function(a, b) {
            this.Jc = a;
            W.prototype.oh.call(this, a, b);
            this.A().style.display = "block"
        };
        _.h.eg = function(a) {
            if (!this.M) {
                var b = wq(this, a.target);
                this.kb = b;
                this.Y();
                b != this.g ? (this.g = b, xq(this, b), yq(this), vq(this, a)) : xq(this, b)
            }
        };
        _.h.rm = function() {
            it(this.l);
            this.Dd && this.vg()
        };
        _.h.L = function() {
            for (var a in this.ca) this.Dj(a);
            this.H && this.H.S();
            this.H = null;
            this.l && this.l.S();
            this.C = this.jb = this.Jc = this.T = this.P = this.l = null;
            W.prototype.L.call(this)
        };
        var kt = function(a, b) {
            a.Dd = b;
            a.M = b;
            if (a.M) {
                var c = a.A();
                a.ya = new N(c.offsetLeft, c.offsetTop)
            } else a.ya && (null != (a.s || null) && ((a.s || null).g = a.ya), _.al(a.A(), a.ya), a.ya = null);
            a.P.style.display = b ? "none" : "inline-block";
            a.jb.style.display = b ? "inline-block" : "none"
        };
        _.h = jt.prototype;
        _.h.Ge = function(a) {
            if (this.isVisible()) {
                a = (this.ie = a) ? this.o.D : this.o.Fa;
                var b = _.C(this.A());
                a.call(this.o, b, "mousedown", this.sh, !0)
            } else W.prototype.Ge.call(this, a)
        };
        _.h.vd = function(a) {
            W.prototype.vd.call(this, a);
            if (a) {
                this.P = nj("activity-links", a);
                var b = nj("status-message", a);
                b && (this.l = new ft, Fm(this.l, b));
                this.jb = nj("started-activity-container", a);
                this.T = nj("activity-root", a);
                this.C = nj("original-text", a)
            }
        };
        _.h.lc = function(a, b) {
            var c = el(document.body).y;
            if (this.s) {
                (this.s || null).g.y += c;
                W.prototype.lc.call(this);
                var d = parseInt(this.A().style.left, 10);
                a = parseInt(this.A().style.top, 10) - (a ? 0 : c);
                b && (b = this.jh || {}, a -= b.top || 10, d -= b.left || 10);
                a -= c;
                (this.s || null).g.y = a;
                (this.s || null).g.x = d;
                c = new N(d, a);
                _.al(this.A(), c)
            }
        };
        _.h.U = function(a) {
            W.prototype.U.call(this, a)
        };
        _.h.Uc = function(a) {
            this.h = a
        };
        _.h.Da = function(a) {
            this.V = a
        };
        _.h.Qb = function(a) {
            a = a ? (0, _.Wb)(a) : "";
            this.C ? _.nd(this.C, a) : W.prototype.Qb.call(this, a)
        };
        _.h.ob = function() {
            return this.h
        };
        _.h.Nc = function() {
            return this.l
        };
        _.h.qa = function() {
            return this.V
        };
        _.h.wd = function() {
            return this.C ? _.rd(this.C) : W.prototype.wd.call(this)
        };
        _.h.Hd = function(a) {
            this.M || W.prototype.Hd.call(this, a)
        };
        _.h.yf = function(a) {
            this.M || W.prototype.yf.call(this, a)
        };
        _.h.xf = function(a) {
            this.M || W.prototype.xf.call(this, a)
        };
        var lt = {
            set: function(a, b) {
                a.className = b
            },
            get: function(a) {
                a = a.className;
                return "string" === typeof a && a.match(/\S+/g) || []
            },
            add: function(a, b) {
                var c = lt.get(a),
                    d = Array.prototype.slice.call(arguments, 1),
                    e = c.length + d.length;
                lt.pi(c, d);
                lt.set(a, c.join(" "));
                return c.length == e
            },
            remove: function(a, b) {
                var c = lt.get(a),
                    d = Array.prototype.slice.call(arguments, 1),
                    e = lt.Ii(c, d);
                lt.set(a, e.join(" "));
                return e.length == c.length - d.length
            },
            pi: function(a, b) {
                for (var c = 0; c < b.length; c++) _.ua(a, b[c]) || a.push(b[c])
            },
            Ii: function(a,
                b) {
                return a.filter(function(c) {
                    return !_.ua(b, c)
                })
            },
            so: function(a, b, c) {
                for (var d = lt.get(a), e = !1, f = 0; f < d.length; f++) d[f] == b && (d.splice(f--, 1), e = !0);
                e && (d.push(c), lt.set(a, d.join(" ")));
                return e
            },
            eo: function(a, b, c) {
                var d = lt.get(a);
                "string" === typeof b ? _.wa(d, b) : Array.isArray(b) && (d = lt.Ii(d, b));
                "string" !== typeof c || _.ua(d, c) ? Array.isArray(c) && lt.pi(d, c) : d.push(c);
                lt.set(a, d.join(" "))
            },
            has: function(a, b) {
                return _.ua(lt.get(a), b)
            },
            enable: function(a, b, c) {
                c ? lt.add(a, b) : lt.remove(a, b)
            },
            toggle: function(a, b) {
                var c = !lt.has(a, b);
                lt.enable(a, b, c);
                return c
            }
        };
        var mt = function(a, b) {
            Rs.call(this, a);
            b = b || {};
            this.F = {
                apiKey: b.apiKey || "",
                Mc: b.Mc || 1
            };
            this.g = null
        };
        _.w(mt, Rs);
        _.h = mt.prototype;
        _.h.attach = function(a, b) {
            b && (b.df = a, this.g.attach(b))
        };
        _.h.fi = function(a) {
            a && rq(this.g, a)
        };
        _.h.ek = function() {
            var a = this.g.Jc;
            if (a && void 0 !== a.df) {
                var b = a.df;
                a = this.La.h[b];
                Ss(this, this.h, !1);
                this.h = b;
                Ss(this, b);
                this.g.Uc(a.Pm);
                this.g.Da(a.Sm);
                var c = a.ra;
                this.g.I = c && (0, _.Wb)(c);
                this.g.Qb(a.text)
            }
            b = new CustomEvent("goog-gt-popupShown", {
                detail: {
                    df: b,
                    jc: this.g
                }
            });
            window.document.body.dispatchEvent(b)
        };
        _.h.dk = function() {
            Ss(this, this.h, !1)
        };
        _.h.wj = function() {
            this.La.h[this.h].Ok.dispatchEvent("updating")
        };
        _.h.L = function() {
            this.g.S();
            this.g = null;
            Rs.prototype.L.call(this)
        };
        _.h.cj = function(a, b) {
            lt[b ? "add" : "remove"](a, "goog-text-highlight")
        };
        var nt = function(a) {
            this.s = a;
            this.l = this.h = this.o = this.j = -1;
            this.g = !1;
            this.C = 0;
            this.K = "";
            this.M = 0
        };
        nt.prototype.start = function() {
            if (!this.g) {
                this.g = !0;
                var a = [],
                    b;
                for (b = 0; 15 > b; b++) a[b] = _.ap[0 | 62 * Math.random()];
                this.K = a.join("");
                this.C = 0;
                this.l = this.h = this.o = this.j = -1;
                this.M = _.sb();
                _.ig(this.B, 1E4, this)
            }
        };
        nt.prototype.stop = function() {
            this.g && (this.g = !1, ot(this))
        };
        nt.prototype.B = function() {
            this.g && (ot(this), _.ig(this.B, 1E3, this))
        };
        var ot = function(a) {
            var b = a.s.l,
                c = a.s.s,
                d = a.s.j,
                e = a.s.o;
            if (a.j != b || a.o != c || a.h != d || a.l != e) {
                var f = {};
                f.ct = b;
                f.cv = c;
                f.cts = d;
                f.cvs = e;
                f.sid = a.K;
                f.seq = a.C++;
                f.tat = _.sb() - a.M;
                if (0 <= a.j || 0 <= a.o || 0 <= a.h || 0 <= a.l) f.pt = a.j, f.pv = a.o, f.pts = a.h, f.pvs = a.l;
                _.Zi("te_v", f);
                a.j = b;
                a.o = c;
                a.h = d;
                a.l = e
            }
        };
        var pt = function() {
            this.o = this.j = this.s = this.l = 0;
            this.g = [];
            this.h = null != _.q.IntersectionObserver ? new IntersectionObserver((0, _.x)(this.B, this)) : null
        };
        pt.prototype.attach = function(a, b) {
            this.j += b;
            var c = this.g.length;
            this.g.push(b);
            for (b = 0; b < a.length; ++b) {
                var d = a[b];
                ik(d) ? (d[qt] = c, this.l += _.rd(d).length, this.h && this.h.observe(d)) : this.jj(d.nodeType)
            }
        };
        pt.prototype.reset = function() {
            this.o = this.j = this.s = this.l = 0;
            this.g = []
        };
        pt.prototype.B = function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (0 < c.intersectionRatio && null != c.target[qt]) {
                    this.s += _.rd(c.target).length;
                    var d = c.target[qt];
                    this.o += this.g[d];
                    this.g[d] = 0;
                    c.target[qt] = void 0
                }
            }
        };
        _.pp.attach(36546, pt.prototype, {
            jj: 1
        });
        var qt = "_gt_" + Math.random().toString(36).substr(2);
        _.rt = function(a, b) {
            _.z.call(this);
            a = a || {};
            this.F = _.pi(a);
            this.F.Mc = a.Mc;
            this.F.Qf = !!a.Qf;
            this.F.Hk = parseInt(a.Hk, 10) || 300;
            this.F.zm = a.zm;
            this.F.trackVisibility = a.trackVisibility || !1;
            this.o = 0;
            this.h = {};
            this.H = new _.F(this);
            this.j = new mt(this, this.F);
            b && (this.j.j = b || {});
            a = this.j;
            a.g = new jt({
                Nm: a.F.Nm
            });
            a.g.bj = 300;
            a.g.Kj = 1E3;
            a.g.Ge(!0);
            a.H.D(a.g, "show", (0, _.x)(a.ek, a));
            a.H.D(a.g, "hide", (0, _.x)(a.dk, a));
            b = new Ps({
                apiKey: a.F.apiKey,
                id: "alternate",
                hh: _.V.Yj,
                ef: !0
            }, a.j);
            a.g.mg(b);
            a.H.D(b, "submitted", (0, _.x)(a.wj,
                a));
            a.F.Mc && (b = new Qs({
                id: "contribute",
                Gf: "dblclick",
                ef: !0
            }, a.j), a.g.mg(b), a.H.D(b, "submitted", (0, _.x)(a.wj, a)));
            a.g.ta();
            this.l = this.g = null;
            this.F.trackVisibility && null != _.q.IntersectionObserver && (this.g = new pt, this.l = new nt(this.g))
        };
        _.w(_.rt, _.z);
        var st = function(a) {
            a.l && a.l.stop();
            for (var b in a.h) {
                var c = a,
                    d = b,
                    e = c.h[d];
                if (e) {
                    if (c.g)
                        for (var f = c.g, g = e.pb, k = 0; k < g.length; ++k) {
                            var l = f,
                                m = g[k];
                            ik(m) ? (m[qt] = void 0, l.h && l.h.unobserve(m)) : l.jj(m.nodeType)
                        }
                    for (f = 0; f < e.pb.length; ++f) e.pb[f] && c.j.fi(e.pb[f]);
                    delete c.h[d]
                }
            }
            a.g && a.g.reset()
        };
        _.rt.prototype.L = function() {
            st(this);
            this.H.S();
            this.H = null;
            this.j.S();
            this.j = null
        };
        var tt = function(a) {
                for (var b = 0; b < a.length; ++b)
                    if (a[b] && a[b].node) return a[b].node;
                return null
            },
            xt = function(a) {
                var b = tt(a);
                if (!b) return null;
                var c = [],
                    d = [],
                    e = [];
                b = new Vp(b, !0);
                var f = a[a.length - 1].node,
                    g = 0,
                    k = !1;
                do {
                    b.next();
                    var l = b.node();
                    if (!l) break;
                    var m = b.g.g,
                        n = b.depth();
                    for (1 == m && --n; g < a.length && !a[g].node;) ++g;
                    l == a[g].node || !k && 1 == m && (null != l && null == l.previousSibling ? 0 : !ut(vt(l))) ? (m = wt(l), d.push({
                        node: m,
                        Qb: function() {}
                    }), e[d.length - 1] = n, fk(m, l), l == a[g].node && (c[g++] = d.length - 1, k = !0)) : k = !1
                } while (l !=
                    f);
                return {
                    Vh: e,
                    vm: c,
                    Ml: d
                }
            },
            ut = function(a) {
                return null != a && Sp[a.tagName]
            },
            vt = function(a) {
                if (null == a) return null;
                for (a = a.previousSibling; null != a && null != a && 3 == a.nodeType && "" == (0, _.Wb)(_.rd(a));) a = a.previousSibling;
                return a
            },
            At = function(a, b, c, d, e, f, g) {
                _.E.call(this);
                this.g = [];
                for (var k = 0; k < a.length; ++k) this.g.push("nodeType" in a[k] ? yt(a[k]) : a[k]), zt(a[k].node);
                this.j = b;
                this.M = d || 0;
                this.R = e || 0;
                this.B = c;
                this.La = f || null;
                this.Bd = g || "transparent";
                this.P = this.K = this.T = !1;
                this.o = [];
                this.s = [];
                this.h = [];
                this.Y = [];
                this.H = new _.F(this);
                this.l = this.I = !1
            },
            yt, zt, It, Gt, wt;
        _.w(At, _.E);
        var Dt = function(a) {
                if (!a) return !1;
                if (3 != a.nodeType || !_.B) return Bt in a && !!a[Bt];
                if (!a.parentNode) return !0;
                if (!(Ct in a.parentNode)) return !1;
                var b = a.parentNode[Ct];
                if (!b || !b[a.nodeValue]) return !1;
                b = b[a.nodeValue];
                for (var c = 0; c < b.length; ++c)
                    if (b[c] == a) return !0;
                return !1
            },
            Et = function(a, b) {
                if (!a) return "";
                if ("TITLE" == a.tagName) return String(document.title);
                3 == a.nodeType ? b = "nodeValue" : b || (b = "value");
                return a.getAttribute && a.getAttribute(b) ? String(a.getAttribute(b)) : "string" === typeof a[b] ? String(a[b]) : ""
            };
        At.prototype.za = function() {
            return this.j
        };
        var Ft = function(a, b, c) {
                b = {
                    xj: b,
                    vh: c,
                    Aa: []
                };
                a.h.push(b);
                return b
            },
            Ht = function(a) {
                if (!a.l && a.T && !a.K && !a.P) {
                    a.K = !0;
                    var b;
                    if (b = Gt(a.g)) {
                        b = a.g;
                        var c = a.h;
                        if (1 == b.length && b[0] && b[0].Sh) {
                            for (var d = [], e = 0; e < c.length; ++e)
                                for (var f = 0; f < c[e].Aa.length; ++f) d.push(c[e].Aa[f].ra);
                            b[0].Qb(d.join(" "), b[0].node);
                            b = !0
                        } else b = !1;
                        b = !b
                    }
                    if (b && (b = xt(a.g))) {
                        a.s = b.vm;
                        a.o = b.Ml;
                        d = a.g;
                        e = a.s;
                        f = a.o;
                        var g = b.Vh;
                        c = [];
                        for (var k = 0; k < d.length; ++k)
                            if (c[k] = [], d[k].node && void 0 !== e[k])
                                for (var l = 0; l < f.length; ++l)
                                    if (!(g[l] > g[e[k]])) {
                                        if (g[l] ==
                                            g[e[k]]) {
                                            if (f[l].node.parentNode != f[e[k]].node.parentNode) continue
                                        } else {
                                            for (var m = g[e[k]] - g[l], n = f[e[k]].node.parentNode; m-- && n && n != f[l].node.parentNode;) n = n.parentNode;
                                            if (n != f[l].node.parentNode) continue
                                        }
                                        c[k].push(l)
                                    }
                        d = a.g;
                        e = a.h;
                        f = -1;
                        for (g = e.length - 1; 0 <= g; --g)
                            for (k = e[g], l = k.Aa.length - 1; 0 <= l; --l)
                                if (m = k.Aa[l], !(0 > m.oa) && d[m.oa] && d[m.oa].node)
                                    if (0 > f) m.Cf = _.bp(c[m.oa]), f = c[m.oa][c[m.oa].length - 1];
                                    else
                                        for (n = c[m.oa].length - 1; 0 <= n; --n)
                                            if (c[m.oa][n] <= f) {
                                                m.Cf = _.bp(c[m.oa].slice(0, n + 1));
                                                f = c[m.oa][n];
                                                break
                                            }
                        for (c =
                            e = 0; c < a.h.length; ++c) {
                            d = a.h[c];
                            f = a.g;
                            g = b.Vh;
                            k = a.s;
                            l = "";
                            for (m = 0; m < d.Aa.length; ++m)
                                if (n = d.Aa[m], l += n.ra, 0 > n.oa) {
                                    var p = -1,
                                        t = -1,
                                        r = k[d.Aa[m - 1].oa];
                                    void 0 !== r && (p = g[r]);
                                    m < d.Aa.length - 1 && (r = k[d.Aa[m + 1].oa], void 0 !== r && (t = g[r]));
                                    if (0 <= p || 0 <= t) a: if (t = (0 > p || t < p) && m < d.Aa.length - 1, p = d.Aa[t ? m + 1 : m - 1], !(p.oa >= f.length || null == f[p.oa].node)) {
                                        r = n.ra;
                                        n.ra = "";
                                        if (/^ +$/.test(r) && (n = t ? p.ra.charCodeAt(0) : p.ra.charCodeAt(p.ra.length - 1), 3584 <= n && 3711 >= n || 12288 <= n && 12351 >= n || 12352 <= n && 12543 >= n || 12784 <= n && 12799 >= n || 19968 <=
                                                n && 40959 >= n || 65280 <= n && 65519 >= n)) break a;
                                        p.ra = t ? r + p.ra : p.ra + r
                                    }
                                }
                            f = l;
                            g = a.g;
                            k = a.o;
                            l = b.Vh;
                            m = a.s;
                            n = [];
                            for (p = 0; p < d.Aa.length && !(e >= k.length); ++p)
                                if (t = d.Aa[p], t.Cf && !(0 > t.oa) && g[t.oa].node && t.ra)
                                    if (e == m[t.oa] || e in t.Cf && (!(e + 1 in t.Cf) || e + 1 != m[t.oa])) {
                                        if (k[e] && k[e].node) {
                                            r = wt(k[e].node);
                                            n.push(r);
                                            for (var v = k[e].node, H = l[m[t.oa]] - l[e], Q = r, Xa = g[t.oa].node.parentNode, qa = Q; Xa && H--;) qa = Xa.cloneNode(!1), qa.appendChild(Q), Xa = Xa.parentNode, Q = qa;
                                            v.appendChild(qa);
                                            v = g[t.oa].node;
                                            g[t.oa].Vf ? g[t.oa].ej || r.appendChild(v) :
                                                (v = g[t.oa].node.cloneNode(!1), v.id && (v.id = ""), r.appendChild(v));
                                            g[t.oa].Qb(t.ra, v)
                                        }
                                    } else ++e, --p;
                            g = n;
                            n = a.g;
                            k = a.B;
                            if (d.xj) k = d.xj;
                            else {
                                m = n.length;
                                l = -1;
                                for (p = 0; p < d.Aa.length; ++p) t = d.Aa[p].oa, 0 <= t && n[t] && n[t].node && (l = Math.max(l, t), m = Math.min(m, t));
                                for (n = ""; m <= l; ++m) k[m] && (n += k[m]);
                                k = n
                            }
                            m = g;
                            n = k;
                            if (a.La) {
                                if (3 != a.La.F.Mc) {
                                    g = a.Y;
                                    k = g.push;
                                    l = a.La;
                                    d = d.vh;
                                    p = a;
                                    d = l.h[++l.o] = {
                                        id: l.o.toString(),
                                        Ok: p,
                                        text: n,
                                        ro: d || n,
                                        ra: f,
                                        Pm: l.s,
                                        Sm: l.B,
                                        pb: m
                                    };
                                    for (f = 0; f < m.length; ++f) m[f] && l.j.attach(d.id, m[f]);
                                    l.g && l.g.attach(m, n.length);
                                    l.l && l.l.start();
                                    k.call(g, d.id)
                                }
                            } else
                                for (d = 0; d < m.length; ++d) m[d].title = n
                        }
                        b = a.g;
                        for (c = 0; c < b.length; ++c) b[c].node && !b[c].Vf && _.hk(b[c].node);
                        b = a.g;
                        c = a.o;
                        a = a.s;
                        for (e = d = 0; e < c.length; ++e)
                            if (f = c[e].node) {
                                for (; d < b.length && e > a[d];) d++;
                                (d >= b.length || e != a[d]) && !f.firstChild && (_.hk(f), c[e].node = null)
                            }
                    }
                }
            };
        At.prototype.restore = function() {
            if (this.K)
                if (this.K = !1, this.La && st(this.La), this.Y = [], Gt(this.o), 1 == this.g.length && this.g[0].Sh) this.g[0].Qb(this.B[0], this.g[0].node);
                else {
                    for (var a = 0, b = 0; b < this.o.length; ++b) {
                        var c = this.o[b].node;
                        if (c) {
                            for (; a < this.g.length && b > this.s[a];) {
                                var d = a++;
                                this.g[d].node && (It(this.g[d].node), this.g[d].node = null)
                            }
                            if (a < this.g.length && b == this.s[a] && this.g[a].node) {
                                this.g[a].ej || (_.id(c), c.appendChild(this.g[a].node));
                                this.g[a].Qb(this.B[a], this.g[a].node);
                                a++;
                                var e = c.parentNode;
                                if (e && 11 != e.nodeType)
                                    if (c.removeNode) c.removeNode(!1);
                                    else {
                                        for (; d = c.firstChild;) e.insertBefore(d, c);
                                        _.hk(c)
                                    }
                            } else _.hk(c)
                        }
                    }
                    this.o = []
                }
        };
        At.prototype.L = function() {
            _.E.prototype.L.call(this);
            this.restore();
            for (var a = 0; a < this.g.length; ++a) this.g[a].node && It(this.g[a].node);
            this.g = null
        };
        zt = function(a) {
            if (a)
                if (3 == a.nodeType && _.B) {
                    Ct in a.parentNode && a.parentNode[Ct] || (a.parentNode[Ct] = {});
                    var b = a.parentNode[Ct];
                    b[a.nodeValue] || (b[a.nodeValue] = []);
                    b = b[a.nodeValue];
                    for (var c = 0; c < b.length; ++c)
                        if (b[c] == a) return;
                    b.push(a)
                } else a[Bt] = 1
        };
        It = function(a) {
            if (!a || 3 == a.nodeType && _.B) {
                var b = a.parentNode;
                if (b && Ct in b) {
                    var c = b[Ct];
                    if (c && a && c[a.nodeValue]) {
                        var d = c[a.nodeValue];
                        if (d)
                            for (var e = 0; e < d.length; ++e)
                                if (d[e] == a) {
                                    d.splice(e, 1);
                                    break
                                }
                        0 == d.length && delete c[a.nodeValue]
                    }
                    if (c && np(c)) try {
                        delete b[Ct]
                    } catch (f) {
                        b[Ct] = ""
                    }
                }
            } else if (Bt in a) try {
                delete a[Bt]
            } catch (f) {
                a[Bt] = ""
            }
        };
        Gt = function(a) {
            for (var b = 0; b < a.length; ++b) try {
                a[b].node && !a[b].node.parentNode && (a[b].node = null)
            } catch (c) {
                a[b].node = null
            }
            for (b = a.length - 1; 0 <= b && !a[b].node; --b);
            a.length = b + 1;
            return a.length
        };
        wt = function(a) {
            a = a.ownerDocument ? a.ownerDocument.createElement("font") : _.fd(document, "font");
            zt(a);
            a.style.verticalAlign = "inherit";
            return a
        };
        _.Jt = function() {
            this.h = {};
            this.g = {}
        };
        _.Jt.prototype.has = function(a, b) {
            return null != this.h[a] || null != this.g[a] || b && (a in this.h || a in this.g)
        };
        _.Jt.prototype.write = function(a, b) {
            this.g[a] = b
        };
        _.Jt.prototype.remove = function(a) {
            delete this.g[a];
            delete this.h[a]
        };
        _.Jt.prototype.yc = function() {
            return np(this.h)
        };
        var Bt = "_gt_" + Math.random().toString(36).substr(2),
            Ct = "_gtn_" + Math.random().toString(36).substr(2);
        (function() {
            function a(c) {
                document.title = c
            }
            var b = {};
            yt = function(c, d) {
                if ("TITLE" == c.tagName) return {
                    node: c,
                    Qb: a,
                    Vf: !0,
                    ej: !0,
                    Sh: !0
                };
                if (3 == c.nodeType) return {
                    node: c,
                    Qb: function(e, f) {
                        _.nd(f, e)
                    }
                };
                d || (d = "value");
                b[d] || (b[d] = function(e, f) {
                    f.setAttribute && f.setAttribute(d, e);
                    "string" === typeof e && (f[d] = e)
                });
                c = {
                    node: c,
                    Qb: b[d],
                    Vf: !0
                };
                "value" != d && (c.Sh = !0);
                return c
            }
        })();
        var Kt = function(a, b, c, d) {
                d = d.firstChild && 3 == d.firstChild.nodeType ? d.firstChild.nodeValue : _.rd(d);
                d = {
                    oa: c,
                    ra: Xj(d)
                };
                a.push(d);
                b[c] ? b[c].end = d : b[c] = {
                    start: d,
                    end: d
                };
                return d
            },
            Lt = function(a) {
                for (var b, c = a.firstChild; c; c = b) b = c.nextSibling, 3 != c.nodeType && (c == a.firstChild ? fk(c, a) : gk(c, a), Lt(c))
            };
        var Mt = function(a, b) {
                this.K = a || null;
                this.P = b || Mp.Ia();
                this.B = this.s = this.I = null;
                this.l = this.j = !1;
                this.o = null;
                this.g = [];
                this.h = 0
            },
            Nt = function(a, b) {
                a.j || (a.I = b)
            },
            Ot = function(a, b, c) {
                a.s = c ? (0, _.x)(b, c) : b
            },
            Pt = function(a, b, c) {
                a.B = c ? (0, _.x)(b, c) : b
            },
            Qt = function(a, b) {
                a.j || (a.j = !0, a.M = b, a.h++, a.o = a.I, a.C())
            };
        Mt.prototype.stop = function() {
            this.h++;
            this.j = !1;
            this.g = []
        };
        var Rt = function(a) {
                if (!a.j) return null;
                for (var b = !1, c = 0; c < a.g.length; ++c)
                    if (a.g[c].target === a) {
                        a.g[c].ready = !1;
                        a.g[c].Tj = a.h + 1;
                        b = !0;
                        break
                    }
                b || a.g.push({
                    target: a,
                    ready: !1,
                    Tj: a.h + 1
                });
                return (0, _.x)(a.C, a, a, a.h + 1)
            },
            St = function(a) {
                if (!a.j) return !0;
                for (var b = 0; b < a.g.length; ++b)
                    if (a.g[b].target === a && a.g[b].Tj == a.h) return a.g[b].ready;
                return !0
            };
        Mt.prototype.C = function(a, b) {
            if (this.j) {
                if (a)
                    for (var c = 0; c < this.g.length; ++c)
                        if (this.g[c].target === a) {
                            this.g[c].ready = !0;
                            break
                        }
                this.l || this.P.add((0, _.x)(this.T, this, b || this.h))
            }
        };
        Mt.prototype.T = function(a) {
            if (this.h != a) return !1;
            a = this.o;
            if (a == Tt) return this.stop(), this.s && this.s.call(this.K, this, this.M), !1;
            this.l = !0;
            try {
                var b = a.call(this.K, this, this.M);
                if (!b) throw Error();
            } catch (c) {
                this.stop();
                a = c;
                if (this.B) this.B.call(this.K, a, this, this.M);
                else throw a;
                return !1
            } finally {
                this.l = !1
            }
            b != Ut && (this.o = b, this.h++, this.C());
            return !1
        };
        var Ut = function() {},
            Tt = function() {};
        var Wt = function(a, b, c, d, e) {
                b = b || {};
                this.T = e || [];
                this.s = [];
                this.M = [];
                Vt(this, a || document.documentElement, void 0 === b.Fj || !!b.Fj);
                this.C = c || At;
                this.K = b.Sl;
                this.j = this.g = this.o = this.re = null;
                this.B = !!b.Wm;
                this.Y = !!b.Vm;
                this.wa = this.B ? 27 : 13;
                this.P = !0;
                this.I = [];
                this.l = new Mt(this, d)
            },
            Xt = function(a, b, c, d) {
                a.l.j || (b = {
                    Qj: b,
                    Lj: c,
                    pb: [],
                    yj: [],
                    fd: [],
                    textLength: 0,
                    size: 0,
                    continuous: !0
                }, a.re = null, Nt(a.l, a.h), Ot(a.l, d), Pt(a.l, (0, _.x)(function(e) {
                    this.Zl(e);
                    d()
                }, a)), Qt(a.l, b))
            },
            Yt = function(a, b) {
                return 0 < a.pb.length ?
                    new b(a.pb, a.fd.join(""), a.yj, a.textLength, a.size) : null
            },
            Zt = function(a, b) {
                if (!a.j) return a.re = Yt(b, a.C), !0;
                if (!b.continuous && 0 < b.pb.length) return a.re = Yt(b, a.C), !0;
                b.continuous = a.j.sj;
                a: {
                    var c = a.j;
                    var d = a.wa;
                    if (b.size > b.Lj || b.textLength > b.Qj) c = !1;
                    else {
                        var e = c.size,
                            f = c.text.length;
                        if (0 != b.pb.length && (e += 1 == b.pb.length ? b.size + d + d : b.size + d, f += b.textLength, e > b.Lj || f > b.Qj)) {
                            c = !1;
                            break a
                        }
                        b.size = e;
                        b.textLength = f;
                        b.pb.push(c.node);
                        b.yj.push(c.text);
                        d = b.pb.length - 1;
                        0 == d ? b.fd.push(c.Ig) : (1 == d && (b.fd[0] = "<a i=0>" +
                            b.fd[0] + "</a>"), b.fd.push("<a i=" + d + ">"), b.fd.push(c.Ig), b.fd.push("</a>"));
                        c = !0
                    }
                }
                if (c) return a.j = null, !1;
                a.re = Yt(b, a.C);
                return !0
            },
            $t = function(a, b, c) {
                var d = Et(b, c);
                d && (0, _.Wb)(_.Pj(d)) && a.I.push({
                    node: b,
                    Ek: c,
                    text: d
                })
            },
            hu, eu, bu, du, Vt, fu, cu, au;
        Wt.prototype.h = function(a, b) {
            var c = this;
            if (this.j && Zt(this, b)) return Tt;
            if (!this.g) {
                this.P = !!this.s.length;
                if (!this.s.length && (a = this.I.shift())) return this.j = {
                    sj: !1,
                    node: yt(a.node, a.Ek),
                    text: a.text,
                    Ig: _.Tj(a.text),
                    size: this.B ? _.Vc(a.text).length : a.text.length
                }, b.continuous = !1, Zt(this, b), Tt;
                a = this.s.shift() || this.M.shift();
                if (!a) return this.j = null, Zt(this, b), Tt;
                this.o = [a.Um];
                this.g = new Vp(a.root)
            }
            this.g.next();
            if (this.g.done) return this.g = null, b.continuous = !1, this.h;
            a = this.g.node();
            var d = this.g.g.g;
            if (-1 == d) return au(this), bu(a) || (b.continuous = !1), this.h;
            cu(this, a);
            d = 1 == d;
            var e = du(a);
            if ((e || d) && this.P && !eu(a)) return Vt(this, a, fu(this), !0), this.g.g.Dc(), au(this), this.h;
            if (d && fu(this) && (this.Y && $t(this, a, "title"), $t(this, a, "alt"), $t(this, a, "placeholder"), $t(this, a, "aria-label"), $t(this, a, "aria-placeholder"), $t(this, a, "aria-roledescription"), $t(this, a, "aria-valuetext"), Wp(this.g)))
                for (var f = a.firstChild; f;) {
                    if (3 == f.nodeType) {
                        var g = f.nodeValue.split("\n");
                        if (2 < g.length || 2 == g.length && "" != (0, _.Wb)(g[0]) &&
                            "" != (0, _.Wb)(g[1])) {
                            f.nodeValue = g[0];
                            for (var k = 1; k < g.length; ++k) {
                                var l = _.C(a).createElement("font");
                                this.T.push(l);
                                gk(l, f);
                                f = l;
                                gk(_.C(a).createTextNode("\n" + g[k]), f);
                                f = f.nextSibling
                            }
                        }
                    }
                    f = f.nextSibling
                }
            a.shadowRoot && Array.from(a.shadowRoot.childNodes).forEach(function(n) {
                Vt(c, n, fu(c))
            });
            if (e) {
                this.g.g.Dc();
                if (fu(this)) {
                    var m = Et(a);
                    if ((0, _.Wb)(_.Pj(m)) && (this.j = {
                            sj: !0,
                            node: yt(a),
                            text: m,
                            Ig: _.Tj(m),
                            size: this.B ? _.Vc(m).length : m.length
                        }, Zt(this, b))) return au(this), Tt
                }
                au(this);
                return this.h
            }
            if (d) {
                if (_.gu(a) ||
                    !a.firstChild && "IFRAME" != a.tagName) return b.continuous = b.continuous && !!Sp[a.tagName], this.g.g.Dc(), au(this), this.h;
                if ("IFRAME" == a.tagName) {
                    try {
                        a.src.match(/https?:\/\//) && _.Gf(a.src.match(_.Ff)[3] || null) != window.location.hostname || (m = _.nk(a).documentElement) && Vt(this, m, fu(this))
                    } catch (n) {}
                    b.continuous = !1;
                    this.g.g.Dc();
                    au(this);
                    return this.h
                }
                fu(this) && bu(a) ? this.K && "A" == a.tagName && a.href && this.K(a) : b.continuous = !1;
                return this.h
            }
            this.g.g.Dc();
            au(this);
            return this.h
        };
        _.gu = function(a) {
            return Dt(a) || 3 != a.nodeType && (!a.tagName || Rp[a.tagName] || Sp[a.tagName] || Wl(a, "skiptranslate"))
        };
        hu = function(a) {
            var b = _.C(a);
            return b.defaultView && b.defaultView.getComputedStyle ? b.defaultView.getComputedStyle(a, null) : a.currentStyle
        };
        eu = function(a) {
            return 3 == a.nodeType ? !0 : 1 != a.nodeType ? !1 : a.offsetWidth && a.offsetHeight ? !0 : (a = hu(a), !!a && "none" != a.display && "hidden" != a.visibility)
        };
        bu = function(a) {
            if (3 == a.nodeType) return !0;
            if (1 != a.nodeType) return !1;
            var b = hu(a);
            return !!Qp[a.tagName] && (!b || !b.display || "inline" == b.display)
        };
        du = function(a) {
            return !!a && (3 == a.nodeType && "string" === typeof a.nodeValue || "TITLE" == a.tagName && "string" === typeof a.value || "TEXTAREA" == a.tagName && Wl(a, "translate") || "INPUT" == a.tagName && (Tp[a.type] || Wl(a, "translate")))
        };
        Vt = function(a, b, c, d) {
            (d ? a.M : a.s).push({
                root: b,
                Um: void 0 === c || c
            })
        };
        fu = function(a) {
            return a.o[a.o.length - 1]
        };
        cu = function(a, b) {
            b = !Dt(b) && (b.nodeType == uj && fu(a) || !(Wl(b, "notranslate") || b.attributes && b.attributes.translate && "no" == b.attributes.translate.value) && (Wl(b, "translate") || !!b.attributes && !!b.attributes.translate && "yes" == b.attributes.translate.value || fu(a)));
            a.o.push(b)
        };
        au = function(a) {
            a.o.pop()
        };
        _.pp.attach(5762, Wt.prototype, {
            Zl: 1
        });
        var iu = function() {
            _.z.call(this);
            this.g = []
        };
        _.w(iu, _.z);
        iu.prototype.restore = function() {
            _.ig(this.h, 0, this)
        };
        iu.prototype.h = function() {
            for (var a = 0; a < this.g.length; ++a) _.hk(this.g[a]);
            this.g = []
        };
        iu.prototype.L = function() {
            _.z.prototype.L.call(this);
            this.restore()
        };
        var ju = function(a) {
            var b = new _.sf;
            yk(a, function(c) {
                if (ik(c)) b.add(c);
                else {
                    a: {
                        var d;
                        if (_.zc && !(_.B && _.vc("9") && !_.vc("10") && _.q.SVGElement && c instanceof _.q.SVGElement) && (d = c.parentElement)) {
                            c = d;
                            break a
                        }
                        d = c.parentNode;c = ik(d) ? d : null
                    }
                    null != c && b.add(c)
                }
            });
            return b
        };
        var ku = function(a) {
            this.h = !0;
            this.l = a;
            this.j = !1;
            this.g = []
        };
        ku.prototype.za = function() {
            return this.g.join("")
        };
        var lu = function(a, b) {
                this.o = a;
                this.l = !0;
                this.j = b;
                this.g = null;
                this.h = 0
            },
            mu = function(a, b) {
                return a.l ? (b((0, _.x)(a.s, a), a.o, a.j ? "en" : ""), !0) : !1
            };
        lu.prototype.s = function(a, b, c) {
            this.g = b;
            this.h = c;
            a()
        };
        var nu = function(a, b) {
                this.l = a;
                this.K = !!b;
                this.g = this.C = 0;
                this.o = this.j = -1;
                this.s = this.B = this.h = 0
            },
            qu = function(a, b, c) {
                a.K && (b -= 9);
                for (var d = "", e = 0, f = a.C; f < a.l.length; ++f) {
                    var g = a.l.charAt(f),
                        k = g.charCodeAt(0);
                    e++;
                    a.h += a.K ? 127 >= k ? 32 >= k || ou[k] ? 3 : 1 : 2047 >= k || 55296 <= k && 56319 >= k || 56320 <= k && 57343 >= k ? 6 : 9 : 1;
                    k = a.h >= b;
                    pu[g] ? (a.o = f, a.B = a.h, k = k || e > c) : " " == g && (a.j = f, a.s = a.h, k = k || e > c);
                    if (k) return 0 <= a.o ? (d = a.l.substring(a.g, a.o + 1), a.h -= a.B, a.g = a.o + 1, a.o >= a.j ? (a.j = -1, a.s = 0) : a.s -= a.B, a.o = -1, a.B = 0) : 0 <= a.j ? (d = a.l.substring(a.g,
                        a.j + 1), a.h -= a.s, a.g = a.j + 1, a.j = -1, a.s = 0) : (d = a.l.substring(a.g, f + 1), a.h = 0, a.g = f + 1, a.o = a.j = -1, a.s = a.B = 0), a.C = f + 1, d
                }
                a.g < a.l.length && (d = a.l.substring(a.g), a.g = a.l.length);
                return d
            },
            pu = _.bp(". , ; : \\? !".split(" ")),
            ou = _.bp([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);
        var ru = function(a, b, c, d, e, f) {
                this.B = d || function() {};
                this.ca = f || function() {};
                this.wa = !!e;
                this.j = a.g.mh;
                this.l = 0;
                this.P = function() {};
                this.K = c;
                this.M = this.h = this.o = 0;
                this.g = null;
                this.T = 0;
                this.la = !1;
                this.da = a.g.kh;
                this.Y = [];
                this.bc = 0;
                this.R = a.g.pf;
                this.s = Jp(a);
                this.ya = this.wa ? 1 : 6;
                this.Ka = a.g.Gh;
                this.bb = b;
                this.C = [];
                this.Z = a
            },
            su = function(a, b) {
                var c = 0;
                a.P = (0, _.x)(function() {
                    ++c == this.C.length && b()
                }, a)
            },
            tu = function(a, b, c) {
                a.B = function() {};
                a.bb = b;
                a.g = null;
                a.bc = 0;
                a.C = [];
                a.P = function() {};
                a.K = c
            },
            uu = function(a,
                b, c) {
                if (0 == a.h && (a.h = b ? 860 : a.s, !c || c <= a.s)) {
                    a.o = a.h;
                    return
                }
                do b = a.h, a.h < a.s && (a.h *= a.ya, a.h > a.s && (a.h = a.s)); while (b != a.h && c && a.h < c);
                a.o = a.h
            },
            vu = function(a, b) {
                var c = null != b,
                    d = !c && !a.la;
                (d || c) && a.B(100, d, b)
            },
            wu = function(a) {
                return a.R ? a.g.R : a.g.za().length
            },
            xu = function(a, b, c, d, e) {
                return new Wt(a.bb.shift(), {
                    Wm: a.R,
                    Sl: b,
                    Fj: !0,
                    Vm: !!c
                }, function() {
                    var f = Array.prototype.slice.call(arguments);
                    return new At(f.shift(), f.shift(), f.shift(), f.shift(), f.shift(), c, d)
                }, a.K, e)
            },
            Au = function(a, b, c) {
                if (0 < a.da && yu(b) >=
                    a.da) return !0;
                if (wu(a) > a.h) {
                    if (0 < yu(b)) return !0;
                    uu(a, c, wu(a));
                    for (var d = a.g.za(), e = new nu(d, a.R), f; f = qu(e, a.h, a.j);)
                        if (b.l.push(new lu([f], !1)), a.l += f.length, a.j -= f.length, 0 >= a.j) {
                            b.K = d.substring(e.g);
                            break
                        } else uu(a, c);
                    zu(b, a.g, !0);
                    a.g = null;
                    return !0
                }
                if (wu(a) > a.o) return !0;
                zu(b, a.g, !0);
                a.o -= wu(a) + a.Ka;
                a.l += a.g.M;
                a.j -= a.g.M;
                a.g = null;
                return !1
            };
        var Bu = function(a, b) {
            _.z.call(this);
            this.l = b;
            this.j = {
                rootMargin: a
            };
            this.g = new IntersectionObserver((0, _.x)(this.h, this), this.j)
        };
        _.w(Bu, _.z);
        Bu.prototype.L = function() {
            _.z.prototype.L.call(this);
            this.g = null
        };
        Bu.prototype.h = function(a) {
            for (var b = 0; b < a.length; b++)
                if (0 < a[b].intersectionRatio) {
                    this.l();
                    break
                }
        };
        var Cu = function(a, b, c, d, e, f, g, k) {
                this.l = a;
                this.g = b;
                this.B = [];
                this.K = null;
                this.j = c;
                this.h = d;
                this.V = e;
                this.T = f;
                this.wa = g;
                this.C = this.o = null;
                this.s = k || null;
                this.P = this.I = !1;
                this.M = {}
            },
            Du = function(a) {
                for (var b = new _.sf, c = 0; c < a.length; c++) {
                    for (var d = a[c], e = new _.sf, f = 0; f < d.g.length; f++) {
                        var g = d.g[f].node;
                        null != g && e.add(g)
                    }
                    d = rj(e);
                    e = d.length;
                    for (f = 0; f < e; f++) b.add(d[f]);
                    b.size = b.g.size
                }
                return b
            };
        Cu.prototype.trackVisibility = function(a) {
            a = this.o = new Bu("200px", (0, _.x)(this.R, this, a));
            var b = ju(Du([].concat(this.g, this.B)));
            yk(b, (0, _.x)(a.g.observe, a.g));
            a = this.C = new Bu("0px", (0, _.x)(this.bb, this));
            b = ju(Du([].concat(this.g, this.B)));
            yk(b, (0, _.x)(a.g.observe, a.g))
        };
        Cu.prototype.R = function(a) {
            this.o && (this.o.g.disconnect(), this.o = null);
            a()
        };
        Cu.prototype.bb = function() {
            this.I = !0;
            Eu(this);
            !this.P && this.s && this.s.l()
        };
        var Eu = function(a) {
            a.C && (a.C.g.disconnect(), a.C = null)
        };
        Cu.prototype.Y = function() {
            this.I && !this.P && this.s && this.s.j();
            this.o && (this.o.g.disconnect(), this.o = null);
            Eu(this)
        };
        var zu = function(a, b, c) {
                c ? (a.g.push(b), a.M[b.za()] = !0) : a.B.push(b)
            },
            yu = function(a) {
                return a.g.length + a.B.length
            },
            Fu = function(a) {
                if (0 == a.l.length) {
                    for (var b = [], c = 0; c < a.g.length; ++c) b.push(a.g[c].za());
                    a.l.push(new lu(b, !1))
                }
            };
        Cu.prototype.translate = function(a) {
            function b() {
                d++;
                d == c && e()
            }
            Fu(this);
            for (var c = 0, d = 0, e = function() {}, f = this.j, g = this.h, k = this.V, l = this.T, m = this.wa, n = 0; n < this.l.length; ++n) mu(this.l[n], function(p, t, r) {
                p = f.Z.translate(_.rb(p, b), t, r || g, k, ++f.bc, l, m, f.wa);
                f.Y.push(p);
                return p
            }) && c++;
            0 != c && (e = Rt(a));
            return c
        };
        var Gu = function(a, b) {
            _.z.call(this);
            this.g = [];
            this.j = [];
            this.h = a;
            this.V = b
        };
        _.w(Gu, _.z);
        Gu.prototype.l = function(a) {
            var b = (0, _.Wb)(a.href);
            0 == b.indexOf("javascript:") || 0 <= b.indexOf("#") || (this.j.push(a.href), this.g.push(a), a.href = b + "#googtrans/" + this.h + "/" + this.V)
        };
        Gu.prototype.L = function() {
            _.z.prototype.L.call(this);
            this.restore()
        };
        Gu.prototype.restore = function() {
            if (this.g.length) {
                for (var a = 0; a < this.g.length; ++a) this.g[a].href = this.j[a];
                this.g = [];
                this.j = []
            }
        };
        var Hu = function(a, b) {
            _.z.call(this);
            this.g = a;
            this.h = _.Df.test(b) ? "translated-rtl" : "translated-ltr";
            a = [].concat(this.g);
            for (b = 0; b < a.length; ++b) ik(a[b]) && _.R(a[b], this.h)
        };
        _.w(Hu, _.z);
        Hu.prototype.L = function() {
            _.z.prototype.L.call(this);
            this.restore()
        };
        Hu.prototype.restore = function() {
            for (var a = [].concat(this.g), b = 0; b < a.length; ++b) ik(a[b]) && _.Yl(a[b], this.h)
        };
        _.Iu = function(a, b, c, d, e, f, g, k, l, m) {
            _.z.call(this);
            this.B = a;
            this.Ic = b;
            this.La = c || null;
            this.da = m || null;
            this.I = null;
            this.cb = !!d;
            this.dd = e || "transparent";
            this.Jc = !!f;
            this.K = [];
            this.la = this.M = this.g = !1;
            this.j = k || new _.Jt;
            this.nf = !k;
            this.ca = g || Mp.Ia();
            this.Ab = new iu;
            this.ya = this.Ra = this.P = !1;
            this.jb = this.l = .5;
            this.rb = .01;
            this.C = new _.Op(this.l);
            this.R = (this.s = this.Z = !!l) ? new MutationObserver((0, _.x)(this.ul, this)) : null;
            this.V = this.h = null;
            _.D(window, "blur", this.Wi, !0, this);
            _.D(window, "focus", this.Xi, !0,
                this)
        };
        _.w(_.Iu, _.z);
        _.h = _.Iu.prototype;
        _.h.ob = function() {
            return this.h ? this.h : ""
        };
        _.h.qa = function() {
            return this.V ? this.V : ""
        };
        _.h.Lk = function(a) {
            this.Vl.apply(this, arguments);
            this.o && this.o(0, !1, 1)
        };
        _.h.Bi = function(a) {
            this.Wl.apply(this, arguments);
            this.o && this.o(0, !1, 1)
        };
        _.h.Mk = function(a) {
            this.Xl.apply(this, arguments);
            this.o && this.o(0, !1, 1)
        };
        _.h.Nk = function(a) {
            this.Yl.apply(this, arguments);
            this.o && this.o(0, !1, 1)
        };
        _.h.translate = function(a, b, c, d, e) {
            if (d || a != this.h || b != this.V) Ju(this), this.nf && (this.j = new _.Jt);
            else if (this.g) return;
            this.o = c;
            this.Cd = e;
            this.s = this.Z;
            this.R && this.R.observe(document.body, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            });
            this.g = !0;
            this.h = a;
            this.V = b;
            this.cb && (this.I = new Gu(a, b));
            this.ya = "auto" == this.h;
            this.La && (c = this.La, a && (c.s = a), b && (c.B = b));
            this.Ka = new Hu(this.B, this.V);
            this.T = Ku(this);
            (a = this.B instanceof Node ? this.B : null) && Lu(a, this.V)
        };
        var Ku = function(a) {
            var b = new Mt(a, a.ca);
            Nt(b, a.Vi);
            Pt(b, (0, _.x)(a.Lk, a));
            Qt(b, new ru(a.Ic, [].concat(a.B), a.ca, a.o, a.s, a.Cd));
            return b
        };
        _.Iu.prototype.restore = function() {
            Ju(this);
            this.Ab.restore();
            var a = this.B instanceof Node ? this.B : null;
            a && Lu(a, this.ob())
        };
        _.Iu.prototype.L = function() {
            _.z.prototype.L.call(this);
            this.restore();
            _.Rd(window, "blur", this.Wi, !0, this);
            _.Rd(window, "focus", this.Xi, !0, this)
        };
        var Mu = function(a, b, c, d) {
            var e = a.j.yc(),
                f = new Mt(a, b.K);
            b.C.push(f);
            Ot(f, b.P);
            uu(b, e);
            Nt(f, d || a.Ri);
            b = c || new Cu([], [], b, a.ob(), a.qa(), a.la, a.M, a.da);
            Pt(f, a.Dl, a);
            a.s && Ot(f, b.Y, b);
            Qt(f, b)
        };
        _.h = _.Iu.prototype;
        _.h.Dl = function(a, b, c) {
            c.Y();
            this.M ? this.Nk(a) : this.Mk(a);
            c.j.P()
        };
        _.h.Xi = function() {
            this.P = !1;
            this.Y = 0;
            Np(this.C, this.l)
        };
        _.h.Wi = function(a) {
            a.target == window && (this.P = !0, this.Y = 0, Np(this.C, .01))
        };
        _.h.ul = function(a) {
            if (this.g && this.s) {
                for (var b = 0; b < a.length; b++)
                    if (a[b].target && a[b].target.className && "string" === typeof a[b].target.className && (0 <= a[b].target.className.indexOf("translate") || 0 == a[b].target.className.indexOf("goog-"))) return;
                this.ca.add((0, _.x)(this.Dm, this))
            }
        };
        _.h.Dm = function() {
            this.M = !0;
            this.T.stop();
            this.T = Ku(this);
            return !1
        };
        _.h.Vi = function(a, b) {
            su(b, Rt(a));
            Mu(this, b);
            return this.Hl
        };
        _.h.Hl = function(a, b) {
            if (!this.g) return Tt;
            if (!St(a)) return Ut;
            if (!this.s)
                for (a = 0; a < this.K.length; ++a) {
                    var c = (0, _.x)(this.ri, this, b, this.K[a]);
                    b.K.add(c)
                }
            return this.Gl
        };
        _.h.Oi = function(a, b) {
            if (this.Y && !this.P) {
                a = (new Date).getTime() - this.Y;
                var c = this.l;
                900 > a && .01 < c ? c = Math.max(.9 * c, .01) : 1100 < a && .5 > c && (c = Math.min(1.5 * c, .5));
                this.l = c;
                this.Ra ? this.rb = .01 : this.jb = this.l
            }
            this.M = this.g = !0;
            this.Y = (new Date).getTime();
            this.Dd != (a = document.body.innerText || document.body.textContent || document.body.innerHTML) ? (this.Dd = a, a = !0) : a = !1;
            a ? (this.Ra = !1, this.l = this.jb, this.P || Np(this.C, this.l), tu(b, [].concat(this.B), this.C), a = new Mt(this, this.C), Nt(a, this.Vi), Pt(a, (0, _.x)(this.Bi, this)),
                Qt(a, b), this.T = a) : (this.Ra = !0, this.l = this.rb, this.P || Np(this.C, this.l), a = new Mt(this, this.C), Nt(a, this.Oi), Pt(a, (0, _.x)(this.Bi, this)), Qt(a, b), this.T = a);
            return Tt
        };
        _.h.Gl = function(a, b) {
            if (!this.g) return Tt;
            this.M = this.g = !1;
            this.ya ? vu(b, !0) : (vu(b), b.ca(b.l));
            if (this.Jc) return this.Oi;
            for (a = 0; a < b.C.length; ++a) b.C[a].stop();
            for (a = 0; a < b.Y.length; ++a) Ip(b.Z, b.Y[a]);
            return Tt
        };
        var Ou = function(a, b, c) {
                a: {
                    var d = Nu(a),
                        e = a.La,
                        f = a.dd,
                        g = a.Ab.g;b = Rt(b);
                    if (!c.I) {
                        if (0 == c.bb.length) {
                            0 == c.l && 0 == c.bc && c.B(0, !0);
                            c = !1;
                            break a
                        }
                        c.I = xu(c, d, e, f, g)
                    }
                    c.Ra = !0;Xt(c.I, c.j, c.h, b);c = !0
                }
                return c ? a.Ri : a.vf
            },
            Nu = function(a) {
                return a.cb ? (0, _.x)(a.I.l, a.I) : function() {}
            };
        _.h = _.Iu.prototype;
        _.h.Ri = function(a, b) {
            if (!this.g) return Tt;
            var c = b.j;
            if (null == c.g) {
                if (!c.Ra) return Ou(this, a, b.j);
                if (!St(a)) return Ut;
                c.Ra = !1;
                c.g = c.I.re || null;
                var d = c.g ? c.g : c.I = null;
                if (!d) return Ou(this, a, b.j);
                this.K.push(d);
                var e = d.za();
                if (this.j.has(e, !this.s) || null != b.M[e] && b.M[e]) return e = c.g.M, c.l += e, c.j -= e, c.g = null, this.s && zu(b, d, !1), Ou(this, a, b.j);
                this.j.g[d.za()] = null
            }
            0 < yu(b) && Np(this.C, .5);
            d = this.j.yc();
            return Au(c, b, d) ? this.vf : Ou(this, a, b.j)
        };
        _.h.vf = function(a, b) {
            if (!this.g || 0 == yu(b)) return Tt;
            Mu(this, b.j);
            return this.s ? (b.trackVisibility(Rt(a)), this.Il) : 0 == b.translate(a) ? Tt : this.Ti
        };
        _.h.Il = function(a, b) {
            return this.g ? St(a) ? 0 == b.translate(a) ? Tt : this.Ti : Ut : Tt
        };
        _.h.ri = function(a, b) {
            b.l && this.j.remove(b.j);
            if (!this.g) return !1;
            if (this.j.has(b.za(), !1)) {
                var c = this.j;
                if (c.has(b.j, !1)) {
                    var d = b.j,
                        e = c.g[d];
                    e || (e = c.h[d], c.g[d] = e);
                    b.h = e;
                    b.T = !0
                } else c.remove(b.j), b.l = !0;
                Ht(b)
            } else if (c = this.j, b.l) c.remove(b.j);
            else if (b.C) {
                d = b.C.replace(/<a /g, "<span ").replace(/\/a>/g, "/span>");
                b.T = !0;
                delete b.C;
                b.C = null;
                b.h = [];
                e = _.fd(document, "div");
                _.O(e, !1);
                d = _.Oc(0 <= d.indexOf("<i>") ? d : "<b>" + d + "</b>");
                void 0 !== e.tagName && _.xi(e);
                e.innerHTML = _.Nc(d);
                document.body.appendChild(e);
                d = [];
                var f;
                for (f = e.firstChild; f; f = f.nextSibling)
                    if ("I" == f.tagName) var g = Ft(b, _.rd(f), f.innerHTML);
                    else if ("B" == f.tagName) {
                    g || (g = Ft(b, "", ""));
                    if (1 == b.g.length) Kt(g.Aa, d, 0, f);
                    else {
                        var k = f;
                        var l = b.g;
                        g = g.Aa;
                        for (var m = [], n = k.firstChild; n; n = p) {
                            var p = n.nextSibling;
                            Lt(n)
                        }
                        for (p = k.firstChild; p; p = p.nextSibling) p.attributes && p.attributes.i ? (k = parseInt(p.attributes.i.nodeValue, 10), !isNaN(k) && 0 <= k && k < l.length && (l[k].Vf && m[k] ? m[k].ra += p.firstChild && 3 == p.firstChild.nodeType ? p.firstChild.nodeValue : _.rd(p) : m[k] = Kt(g,
                            d, k, p))) : 3 == p.nodeType && g.push({
                            oa: -1,
                            ra: Xj(p.nodeValue)
                        });
                        null != g && 0 < g.length && -1 == g[0].oa && (1 == g.length ? g[0].oa = 0 : (g[1].ra = g[0].ra + g[1].ra, g.shift()))
                    }
                    g = void 0
                }
                f = b.h;
                for (l = 0; l < f.length - 1; ++l) g = f[l], m = Sj(g.Aa[g.Aa.length - 1].ra), m = m.charCodeAt(m.length - 1), 12288 <= m && 12351 >= m || 65280 <= m && 65519 >= m || (g.Aa[g.Aa.length - 1].ra += " ");
                _.hk(e);
                for (e = 0; e < b.g.length; ++e) e < d.length && e < b.B.length && null != d[e] && (f = b.B[e], l = d[e].start, null != l && (g = f.substring(0, f.length - Rj(f).length), " " == g && (g = ""), g && (l.ra = g + Rj(l.ra))),
                    l = d[e].end, null != l && (f = f.substring(Sj(f).length), " " == f && (f = ""), f && (l.ra = Sj(l.ra) + f)));
                1 != b.h.length || b.h[0].vh || (b.h[0].vh = b.j);
                c.write(b.j, b.h);
                Ht(b)
            }
            b.I || (this.ya = !1);
            c = b.l ? !0 : void 0;
            a.T += b.M;
            null != c && (a.la = !0);
            b = Math.min(Math.floor(100 * a.T / a.l), 100);
            if (a.M != b || c) a.M = b, a.wa ? (a.B(a.M, !0, c), a.ca(a.T)) : a.B(a.M, !1, c);
            return !1
        };
        _.h.Ti = function(a, b) {
            if (!this.g) return Tt;
            if (!St(a)) return Ut;
            if (1 < yu(b)) {
                a = b.l[0];
                var c = b.g;
                if (a.j || 0 == c.length || null == a.g || 0 == a.g.length) a = null;
                else {
                    for (var d = [], e = [], f = 0; f < a.g.length && f < c.length; ++f) {
                        var g = a.g[f];
                        g && g[0] && 200 == g[1] || (e.push(c[f]), d.push(a.o[f]))
                    }
                    a = 0 < e.length ? {
                        Em: new lu(d, !0),
                        Fm: e
                    } : null
                }
                a = a ? new Cu([a.Em], a.Fm, b.j, b.h, b.V, b.T, b.wa, b.s) : null;
                null != a && Mu(this, b.j, a, this.vf)
            } else {
                a = !1;
                for (c = 0; c < b.l.length; ++c) d = b.l[c], d.j || 200 == d.h && d.g && d.g[0] ? d = d.l = !1 : (d.j = !0, d = d.l = !0), a = d || a;
                if (a) return this.vf
            }
            d =
                this.ob();
            a = this.qa();
            if (1 < b.g.length)
                if (c = b.l[0], e = "auto" == d, d = b.g, 200 == c.h)
                    for (f = 0; f < c.g.length && f < d.length; ++f)
                        if ((g = c.g[f]) && 200 == g[1]) {
                            var k = g[2],
                                l = d[f],
                                m = l,
                                n = null != k && k == a;
                            m.C = g[0];
                            void 0 !== n && (m.P = n);
                            l.I = e && null == k
                        } else d[f].l = !0;
            else
                for (a = 0; a < d.length; ++a) d[a].l = !0;
            else {
                c = new ku("auto" == d);
                for (d = 0; d < b.l.length; ++d) f = b.l[d], e = a, 200 == f.h && f.g && f.g[0] ? (f = f.g[0], c.g.push(f[0]), f = f[2], c.h = c.h && null != f && f == e, null != f && (c.l = !1)) : 500 != f.h && (c.j = !0);
                null != b.K && (c.g.push(b.K), b.K = null);
                if (a = b.g[0]) d =
                    c.h, a.C = c.za(), void 0 !== d && (a.P = d), a.I = c.l, a.l = c.j
            }
            if (this.s) {
                a = (0, _.x)(this.ri, this);
                for (c = 0; c < b.g.length; c++) a(b.j, b.g[c]);
                for (c = 0; c < b.B.length; c++) a(b.j, b.B[c]);
                Eu(b);
                b.P = !0;
                b.I && b.s && b.s.j()
            }
            return Tt
        };
        var Ju = function(a) {
                a.R && a.R.disconnect();
                a.da && a.da.reset();
                a.g && (a.T.stop(), a.g = !1, a.M = !1);
                if (a.K.length) {
                    for (var b = 0; b < a.K.length; ++b) a.K[b].S();
                    a.K = []
                }
                null != a.I && (a.I.restore(), a.I = null);
                null != a.Ka && (a.Ka.restore(), a.Ka = null)
            },
            Lu = function(a, b) {
                a.getAttribute("xml:lang") && a.setAttribute("xml:lang", b);
                a.getAttribute("lang") && a.setAttribute("lang", b)
            };
        _.pp.attach(3046, _.Iu.prototype, {
            Vl: 1,
            Xl: 2,
            Wl: 3,
            Yl: 4
        });
        var gj = function(a) {
            if (a && (a = String(a), a = a.split("."), a.length)) {
                for (var b = window, c = 0; c < a.length; ++c) {
                    var d = a[c];
                    if (!(d && d in b)) return;
                    b = b[d]
                }
                return b
            }
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ma("el_main");

        var Su = function(a, b) {
                _.$g(b, (_.Zg(a) | 0) & -51)
            },
            Tu = function(a, b, c) {
                var d = _.Sh(a, b, c);
                Array.isArray(d) || (d = _.Qh);
                var e = _.Zg(d);
                e & 1 || _.ah(d);
                _.ch(a.ha) ? e & 2 || _.Xg(d, 2) : d === _.Qh && (d = _.ah(Array.prototype.slice.call(d)), _.I(a, b, d, c));
                return d
            },
            Uu = function(a, b) {
                return _.jh(b)
            },
            Wu = function(a, b) {
                b.ze && (a.ze = b.ze.slice());
                var c = b.g;
                if (c) {
                    b = b.ab;
                    for (var d in c) {
                        var e = c[d];
                        if (e) {
                            var f = !(!b || !b[d]),
                                g = +d;
                            if (Array.isArray(e)) {
                                if (e.length)
                                    for (f = Vu(a, e[0].constructor, g, f), g = 0; g < Math.min(f.length, e.length); g++) Wu(f[g],
                                        e[g])
                            } else throw Error("oa`" + _.mb(e) + "`" + e);
                        }
                    }
                }
            },
            Yu = function(a) {
                if (!a) return a;
                if ("object" === typeof a) {
                    if (_.gh && null != a && a instanceof Uint8Array) return new Uint8Array(a);
                    if (a.ph === _.mh) return Xu(a)
                }
                return a
            },
            Zu = function(a) {
                var b = {};
                a.forEach(function(c) {
                    b[c[0]] = c[1]
                });
                return function(c) {
                    return b[c.find(function(d) {
                        return d in b
                    })] || ""
                }
            },
            $u = function(a) {
                var b = _.Ca();
                if ("Internet Explorer" === a) {
                    if (_.Da())
                        if ((a = /rv: *([\d\.]*)/.exec(b)) && a[1]) b = a[1];
                        else {
                            a = "";
                            var c = /MSIE +([\d\.]+)/.exec(b);
                            if (c && c[1])
                                if (b =
                                    /Trident\/(\d.\d)/.exec(b), "7.0" == c[1])
                                    if (b && b[1]) switch (b[1]) {
                                        case "4.0":
                                            a = "8.0";
                                            break;
                                        case "5.0":
                                            a = "9.0";
                                            break;
                                        case "6.0":
                                            a = "10.0";
                                            break;
                                        case "7.0":
                                            a = "11.0"
                                    } else a = "7.0";
                                    else a = c[1];
                            b = a
                        }
                    else b = "";
                    return b
                }
                var d = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
                c = [];
                for (var e; e = d.exec(b);) c.push([e[1], e[2], e[3] || void 0]);
                b = Zu(c);
                switch (a) {
                    case "Opera":
                        if (_.u("Opera")) return b(["Version", "Opera"]);
                        if (_.u("OPR")) return b(["OPR"]);
                        break;
                    case "Microsoft Edge":
                        if (_.u("Edge")) return b(["Edge"]);
                        if (_.u("Edg/")) return b(["Edg"]);
                        break;
                    case "Chromium":
                        if (_.Ng()) return b(["Chrome", "CriOS", "HeadlessChrome"])
                }
                return "Firefox" === a && _.Mg() || "Safari" === a && _.Og() || "Android Browser" === a && _.Pg() || "Silk" === a && _.u("Silk") ? (b = c[2]) && b[1] || "" : ""
            },
            av = function(a) {
                a = $u(a);
                if ("" === a) return NaN;
                a = a.split(".");
                return 0 === a.length ? NaN : Number(a[0])
            },
            bv = function() {
                var a = _.Ca(),
                    b = "";
                _.u("Windows") ? (b = /Windows (?:NT|Phone) ([0-9.]+)/, b = (a = b.exec(a)) ? a[1] : "0.0") : _.Fa() ? (b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, b = (a =
                    b.exec(a)) && a[1].replace(/_/g, ".")) : _.u("Macintosh") ? (b = /Mac OS X ([0-9_.]+)/, b = (a = b.exec(a)) ? a[1].replace(/_/g, ".") : "10") : -1 != _.Ca().toLowerCase().indexOf("kaios") ? (b = /(?:KaiOS)\/(\S+)/i, b = (a = b.exec(a)) && a[1]) : _.u("Android") ? (b = /Android\s+([^\);]+)(\)|;)/, b = (a = b.exec(a)) && a[1]) : _.u("CrOS") && (b = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, b = (a = b.exec(a)) && a[1]);
                return 0 <= _.Yb(b || "", 12)
            },
            cv = function(a) {
                return _.Th(a, this.Ag, this.g, !0)
            },
            dv = function() {
                function a() {
                    e[0] = 1732584193;
                    e[1] = 4023233417;
                    e[2] = 2562383102;
                    e[3] = 271733878;
                    e[4] = 3285377520;
                    n = m = 0
                }

                function b(p) {
                    for (var t = g, r = 0; 64 > r; r += 4) t[r / 4] = p[r] << 24 | p[r + 1] << 16 | p[r + 2] << 8 | p[r + 3];
                    for (r = 16; 80 > r; r++) p = t[r - 3] ^ t[r - 8] ^ t[r - 14] ^ t[r - 16], t[r] = (p << 1 | p >>> 31) & 4294967295;
                    p = e[0];
                    var v = e[1],
                        H = e[2],
                        Q = e[3],
                        Xa = e[4];
                    for (r = 0; 80 > r; r++) {
                        if (40 > r)
                            if (20 > r) {
                                var qa = Q ^ v & (H ^ Q);
                                var Ef = 1518500249
                            } else qa = v ^ H ^ Q, Ef = 1859775393;
                        else 60 > r ? (qa = v & H | Q & (v | H), Ef = 2400959708) : (qa = v ^ H ^ Q, Ef = 3395469782);
                        qa = ((p << 5 | p >>> 27) & 4294967295) + qa + Xa + Ef + t[r] & 4294967295;
                        Xa = Q;
                        Q = H;
                        H = (v << 30 | v >>> 2) & 4294967295;
                        v = p;
                        p =
                            qa
                    }
                    e[0] = e[0] + p & 4294967295;
                    e[1] = e[1] + v & 4294967295;
                    e[2] = e[2] + H & 4294967295;
                    e[3] = e[3] + Q & 4294967295;
                    e[4] = e[4] + Xa & 4294967295
                }

                function c(p, t) {
                    if ("string" === typeof p) {
                        p = unescape(encodeURIComponent(p));
                        for (var r = [], v = 0, H = p.length; v < H; ++v) r.push(p.charCodeAt(v));
                        p = r
                    }
                    t || (t = p.length);
                    r = 0;
                    if (0 == m)
                        for (; r + 64 < t;) b(p.slice(r, r + 64)), r += 64, n += 64;
                    for (; r < t;)
                        if (f[m++] = p[r++], n++, 64 == m)
                            for (m = 0, b(f); r + 64 < t;) b(p.slice(r, r + 64)), r += 64, n += 64
                }

                function d() {
                    var p = [],
                        t = 8 * n;
                    56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
                    for (var r = 63; 56 <= r; r--) f[r] =
                        t & 255, t >>>= 8;
                    b(f);
                    for (r = t = 0; 5 > r; r++)
                        for (var v = 24; 0 <= v; v -= 8) p[t++] = e[r] >> v & 255;
                    return p
                }
                for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0;
                var m, n;
                a();
                return {
                    reset: a,
                    update: c,
                    digest: d,
                    Jk: function() {
                        for (var p = d(), t = "", r = 0; r < p.length; r++) t += "0123456789ABCDEF".charAt(Math.floor(p[r] / 16)) + "0123456789ABCDEF".charAt(p[r] % 16);
                        return t
                    }
                }
            },
            ev = function(a, b, c) {
                _.Gh(a.url, function(d) {
                    d = d.target;
                    d.Md() ? b(d.sc()) : c(d.Nc())
                }, a.Cm, a.body, a.Ch, a.Ph, a.withCredentials)
            },
            fv = function() {
                this.l = "https://play.google.com/log?format=json&hasfast=true";
                this.s = ev;
                this.g = !1
            },
            gv = function(a) {
                for (var b = a.length; 0 <= --b;) a[b] = 0
            },
            hv = function(a, b, c, d, e) {
                this.Oj = a;
                this.Tk = b;
                this.Sk = c;
                this.Kk = d;
                this.fm = e;
                this.aj = a && a.length
            },
            iv = function(a, b) {
                this.zi = a;
                this.Rd = 0;
                this.Wc = b
            },
            jv = function(a, b) {
                a.Ba[a.pending++] = b & 255;
                a.Ba[a.pending++] = b >>> 8 & 255
            },
            kv = function(a, b, c) {
                a.Ya > 16 - c ? (a.mb |= b << a.Ya & 65535, jv(a, a.mb), a.mb = b >> 16 - a.Ya, a.Ya += c - 16) : (a.mb |= b << a.Ya & 65535, a.Ya += c)
            },
            lv = function(a, b, c) {
                kv(a, c[2 * b], c[2 * b + 1])
            },
            mv = function(a, b) {
                var c = 0;
                do c |= a & 1, a >>>= 1, c <<= 1; while (0 <
                    --b);
                return c >>> 1
            },
            nv = function(a, b, c) {
                var d = Array(16),
                    e = 0,
                    f;
                for (f = 1; 15 >= f; f++) d[f] = e = e + c[f - 1] << 1;
                for (c = 0; c <= b; c++) e = a[2 * c + 1], 0 !== e && (a[2 * c] = mv(d[e]++, e))
            },
            ov = function(a) {
                var b;
                for (b = 0; 286 > b; b++) a.tb[2 * b] = 0;
                for (b = 0; 30 > b; b++) a.gd[2 * b] = 0;
                for (b = 0; 19 > b; b++) a.eb[2 * b] = 0;
                a.tb[512] = 1;
                a.Bc = a.Yd = 0;
                a.Ob = a.matches = 0
            },
            pv = function(a) {
                8 < a.Ya ? jv(a, a.mb) : 0 < a.Ya && (a.Ba[a.pending++] = a.mb);
                a.mb = 0;
                a.Ya = 0
            },
            qv = function(a, b, c) {
                pv(a);
                jv(a, c);
                jv(a, ~c);
                Y.Ad(a.Ba, a.window, b, c, a.pending);
                a.pending += c
            },
            rv = function(a, b, c, d) {
                var e =
                    2 * b,
                    f = 2 * c;
                return a[e] < a[f] || a[e] === a[f] && d[b] <= d[c]
            },
            sv = function(a, b, c) {
                for (var d = a.Ja[c], e = c << 1; e <= a.wc;) {
                    e < a.wc && rv(b, a.Ja[e + 1], a.Ja[e], a.depth) && e++;
                    if (rv(b, d, a.Ja[e], a.depth)) break;
                    a.Ja[c] = a.Ja[e];
                    c = e;
                    e <<= 1
                }
                a.Ja[c] = d
            },
            zv = function(a, b, c) {
                var d = 0;
                if (0 !== a.Ob) {
                    do {
                        var e = a.Ba[a.pe + 2 * d] << 8 | a.Ba[a.pe + 2 * d + 1];
                        var f = a.Ba[a.eh + d];
                        d++;
                        if (0 === e) lv(a, f, b);
                        else {
                            var g = tv[f];
                            lv(a, g + 256 + 1, b);
                            var k = uv[g];
                            0 !== k && (f -= vv[g], kv(a, f, k));
                            e--;
                            g = 256 > e ? wv[e] : wv[256 + (e >>> 7)];
                            lv(a, g, c);
                            k = xv[g];
                            0 !== k && (e -= yv[g], kv(a, e, k))
                        }
                    } while (d <
                        a.Ob)
                }
                lv(a, 256, b)
            },
            Av = function(a, b) {
                var c = b.zi,
                    d = b.Wc.Oj,
                    e = b.Wc.aj,
                    f = b.Wc.Kk,
                    g, k = -1;
                a.wc = 0;
                a.Kd = 573;
                for (g = 0; g < f; g++) 0 !== c[2 * g] ? (a.Ja[++a.wc] = k = g, a.depth[g] = 0) : c[2 * g + 1] = 0;
                for (; 2 > a.wc;) {
                    var l = a.Ja[++a.wc] = 2 > k ? ++k : 0;
                    c[2 * l] = 1;
                    a.depth[l] = 0;
                    a.Bc--;
                    e && (a.Yd -= d[2 * l + 1])
                }
                b.Rd = k;
                for (g = a.wc >> 1; 1 <= g; g--) sv(a, c, g);
                l = f;
                do g = a.Ja[1], a.Ja[1] = a.Ja[a.wc--], sv(a, c, 1), d = a.Ja[1], a.Ja[--a.Kd] = g, a.Ja[--a.Kd] = d, c[2 * l] = c[2 * g] + c[2 * d], a.depth[l] = (a.depth[g] >= a.depth[d] ? a.depth[g] : a.depth[d]) + 1, c[2 * g + 1] = c[2 * d + 1] = l, a.Ja[1] = l++,
                    sv(a, c, 1); while (2 <= a.wc);
                a.Ja[--a.Kd] = a.Ja[1];
                g = b.zi;
                l = b.Rd;
                d = b.Wc.Oj;
                e = b.Wc.aj;
                f = b.Wc.Tk;
                var m = b.Wc.Sk,
                    n = b.Wc.fm,
                    p, t = 0;
                for (p = 0; 15 >= p; p++) a.nc[p] = 0;
                g[2 * a.Ja[a.Kd] + 1] = 0;
                for (b = a.Kd + 1; 573 > b; b++) {
                    var r = a.Ja[b];
                    p = g[2 * g[2 * r + 1] + 1] + 1;
                    p > n && (p = n, t++);
                    g[2 * r + 1] = p;
                    if (!(r > l)) {
                        a.nc[p]++;
                        var v = 0;
                        r >= m && (v = f[r - m]);
                        var H = g[2 * r];
                        a.Bc += H * (p + v);
                        e && (a.Yd += H * (d[2 * r + 1] + v))
                    }
                }
                if (0 !== t) {
                    do {
                        for (p = n - 1; 0 === a.nc[p];) p--;
                        a.nc[p]--;
                        a.nc[p + 1] += 2;
                        a.nc[n]--;
                        t -= 2
                    } while (0 < t);
                    for (p = n; 0 !== p; p--)
                        for (r = a.nc[p]; 0 !== r;) d = a.Ja[--b], d > l || (g[2 *
                            d + 1] !== p && (a.Bc += (p - g[2 * d + 1]) * g[2 * d], g[2 * d + 1] = p), r--)
                }
                nv(c, k, a.nc)
            },
            Bv = function(a, b, c) {
                var d, e = -1,
                    f = b[1],
                    g = 0,
                    k = 7,
                    l = 4;
                0 === f && (k = 138, l = 3);
                b[2 * (c + 1) + 1] = 65535;
                for (d = 0; d <= c; d++) {
                    var m = f;
                    f = b[2 * (d + 1) + 1];
                    ++g < k && m === f || (g < l ? a.eb[2 * m] += g : 0 !== m ? (m !== e && a.eb[2 * m]++, a.eb[32]++) : 10 >= g ? a.eb[34]++ : a.eb[36]++, g = 0, e = m, 0 === f ? (k = 138, l = 3) : m === f ? (k = 6, l = 3) : (k = 7, l = 4))
                }
            },
            Cv = function(a, b, c) {
                var d, e = -1,
                    f = b[1],
                    g = 0,
                    k = 7,
                    l = 4;
                0 === f && (k = 138, l = 3);
                for (d = 0; d <= c; d++) {
                    var m = f;
                    f = b[2 * (d + 1) + 1];
                    if (!(++g < k && m === f)) {
                        if (g < l) {
                            do lv(a, m, a.eb);
                            while (0 !== --g)
                        } else 0 !== m ? (m !== e && (lv(a, m, a.eb), g--), lv(a, 16, a.eb), kv(a, g - 3, 2)) : 10 >= g ? (lv(a, 17, a.eb), kv(a, g - 3, 3)) : (lv(a, 18, a.eb), kv(a, g - 11, 7));
                        g = 0;
                        e = m;
                        0 === f ? (k = 138, l = 3) : m === f ? (k = 6, l = 3) : (k = 7, l = 4)
                    }
                }
            },
            Dv = function(a) {
                var b = 4093624447,
                    c;
                for (c = 0; 31 >= c; c++, b >>>= 1)
                    if (b & 1 && 0 !== a.tb[2 * c]) return 0;
                if (0 !== a.tb[18] || 0 !== a.tb[20] || 0 !== a.tb[26]) return 1;
                for (c = 32; 256 > c; c++)
                    if (0 !== a.tb[2 * c]) return 1;
                return 0
            },
            Ev = function(a, b, c) {
                a.Ba[a.pe + 2 * a.Ob] = b >>> 8 & 255;
                a.Ba[a.pe + 2 * a.Ob + 1] = b & 255;
                a.Ba[a.eh + a.Ob] = c & 255;
                a.Ob++;
                0 ===
                    b ? a.tb[2 * c]++ : (a.matches++, b--, a.tb[2 * (tv[c] + 256 + 1)]++, a.gd[2 * (256 > b ? wv[b] : wv[256 + (b >>> 7)])]++);
                return a.Ob === a.Be - 1
            },
            Gv = function(a, b) {
                a.msg = Fv[b];
                return b
            },
            Hv = function(a) {
                for (var b = a.length; 0 <= --b;) a[b] = 0
            },
            Iv = function(a) {
                var b = a.state,
                    c = b.pending;
                c > a.ma && (c = a.ma);
                0 !== c && (Y.Ad(a.Ce, b.Ba, b.De, c, a.Td), a.Td += c, b.De += c, a.Rh += c, a.ma -= c, b.pending -= c, 0 === b.pending && (b.De = 0))
            },
            Mv = function(a, b) {
                var c = 0 <= a.Bb ? a.Bb : -1,
                    d = a.O - a.Bb,
                    e = 0;
                if (0 < a.level) {
                    2 === a.ia.Bg && (a.ia.Bg = Dv(a));
                    Av(a, a.Ff);
                    Av(a, a.lf);
                    Bv(a, a.tb,
                        a.Ff.Rd);
                    Bv(a, a.gd, a.lf.Rd);
                    Av(a, a.ti);
                    for (e = 18; 3 <= e && 0 === a.eb[2 * Jv[e] + 1]; e--);
                    a.Bc += 3 * (e + 1) + 14;
                    var f = a.Bc + 3 + 7 >>> 3;
                    var g = a.Yd + 3 + 7 >>> 3;
                    g <= f && (f = g)
                } else f = g = d + 5;
                if (d + 4 <= f && -1 !== c) kv(a, b ? 1 : 0, 3), qv(a, c, d);
                else if (4 === a.ic || g === f) kv(a, 2 + (b ? 1 : 0), 3), zv(a, Kv, Lv);
                else {
                    kv(a, 4 + (b ? 1 : 0), 3);
                    c = a.Ff.Rd + 1;
                    d = a.lf.Rd + 1;
                    e += 1;
                    kv(a, c - 257, 5);
                    kv(a, d - 1, 5);
                    kv(a, e - 4, 4);
                    for (f = 0; f < e; f++) kv(a, a.eb[2 * Jv[f] + 1], 3);
                    Cv(a, a.tb, c - 1);
                    Cv(a, a.gd, d - 1);
                    zv(a, a.tb, a.gd)
                }
                ov(a);
                b && pv(a);
                a.Bb = a.O;
                Iv(a.ia)
            },
            Z = function(a, b) {
                a.Ba[a.pending++] = b
            },
            Nv = function(a, b) {
                a.Ba[a.pending++] = b >>> 8 & 255;
                a.Ba[a.pending++] = b & 255
            },
            Ov = function(a, b) {
                var c = a.pj,
                    d = a.O,
                    e = a.Fb,
                    f = a.tj,
                    g = a.O > a.ib - 262 ? a.O - (a.ib - 262) : 0,
                    k = a.window,
                    l = a.Xc,
                    m = a.fc,
                    n = a.O + 258,
                    p = k[d + e - 1],
                    t = k[d + e];
                a.Fb >= a.Mi && (c >>= 2);
                f > a.W && (f = a.W);
                do {
                    var r = b;
                    if (k[r + e] === t && k[r + e - 1] === p && k[r] === k[d] && k[++r] === k[d + 1]) {
                        d += 2;
                        for (r++; k[++d] === k[++r] && k[++d] === k[++r] && k[++d] === k[++r] && k[++d] === k[++r] && k[++d] === k[++r] && k[++d] === k[++r] && k[++d] === k[++r] && k[++d] === k[++r] && d < n;);
                        r = 258 - (n - d);
                        d = n - 258;
                        if (r > e) {
                            a.Qd = b;
                            e =
                                r;
                            if (r >= f) break;
                            p = k[d + e - 1];
                            t = k[d + e]
                        }
                    }
                } while ((b = m[b & l]) > g && 0 !== --c);
                return e <= a.W ? e : a.W
            },
            Rv = function(a) {
                var b = a.ib,
                    c;
                do {
                    var d = a.Vj - a.W - a.O;
                    if (a.O >= b + (b - 262)) {
                        Y.Ad(a.window, a.window, b, b, 0);
                        a.Qd -= b;
                        a.O -= b;
                        a.Bb -= b;
                        var e = c = a.Bf;
                        do {
                            var f = a.head[--e];
                            a.head[e] = f >= b ? f - b : 0
                        } while (--c);
                        e = c = b;
                        do f = a.fc[--e], a.fc[e] = f >= b ? f - b : 0; while (--c);
                        d += b
                    }
                    if (0 === a.ia.lb) break;
                    e = a.ia;
                    c = a.window;
                    f = a.O + a.W;
                    var g = e.lb;
                    g > d && (g = d);
                    0 === g ? c = 0 : (e.lb -= g, Y.Ad(c, e.input, e.qd, g, f), 1 === e.state.Wa ? e.ga = Pv(e.ga, c, g, f) : 2 === e.state.Wa && (e.ga =
                        Qv(e.ga, c, g, f)), e.qd += g, e.rd += g, c = g);
                    a.W += c;
                    if (3 <= a.W + a.wb)
                        for (d = a.O - a.wb, a.ka = a.window[d], a.ka = (a.ka << a.vc ^ a.window[d + 1]) & a.uc; a.wb && !(a.ka = (a.ka << a.vc ^ a.window[d + 3 - 1]) & a.uc, a.fc[d & a.Xc] = a.head[a.ka], a.head[a.ka] = d, d++, a.wb--, 3 > a.W + a.wb););
                } while (262 > a.W && 0 !== a.ia.lb)
            },
            Sv = function(a, b) {
                for (var c;;) {
                    if (262 > a.W) {
                        Rv(a);
                        if (262 > a.W && 0 === b) return 1;
                        if (0 === a.W) break
                    }
                    c = 0;
                    3 <= a.W && (a.ka = (a.ka << a.vc ^ a.window[a.O + 3 - 1]) & a.uc, c = a.fc[a.O & a.Xc] = a.head[a.ka], a.head[a.ka] = a.O);
                    0 !== c && a.O - c <= a.ib - 262 && (a.pa = Ov(a, c));
                    if (3 <= a.pa)
                        if (c = Ev(a, a.O - a.Qd, a.pa - 3), a.W -= a.pa, a.pa <= a.nh && 3 <= a.W) {
                            a.pa--;
                            do a.O++, a.ka = (a.ka << a.vc ^ a.window[a.O + 3 - 1]) & a.uc, a.fc[a.O & a.Xc] = a.head[a.ka], a.head[a.ka] = a.O; while (0 !== --a.pa);
                            a.O++
                        } else a.O += a.pa, a.pa = 0, a.ka = a.window[a.O], a.ka = (a.ka << a.vc ^ a.window[a.O + 1]) & a.uc;
                    else c = Ev(a, 0, a.window[a.O]), a.W--, a.O++;
                    if (c && (Mv(a, !1), 0 === a.ia.ma)) return 1
                }
                a.wb = 2 > a.O ? a.O : 2;
                return 4 === b ? (Mv(a, !0), 0 === a.ia.ma ? 3 : 4) : a.Ob && (Mv(a, !1), 0 === a.ia.ma) ? 1 : 2
            },
            Tv = function(a, b) {
                for (var c, d;;) {
                    if (262 > a.W) {
                        Rv(a);
                        if (262 >
                            a.W && 0 === b) return 1;
                        if (0 === a.W) break
                    }
                    c = 0;
                    3 <= a.W && (a.ka = (a.ka << a.vc ^ a.window[a.O + 3 - 1]) & a.uc, c = a.fc[a.O & a.Xc] = a.head[a.ka], a.head[a.ka] = a.O);
                    a.Fb = a.pa;
                    a.Bj = a.Qd;
                    a.pa = 2;
                    0 !== c && a.Fb < a.nh && a.O - c <= a.ib - 262 && (a.pa = Ov(a, c), 5 >= a.pa && (1 === a.ic || 3 === a.pa && 4096 < a.O - a.Qd) && (a.pa = 2));
                    if (3 <= a.Fb && a.pa <= a.Fb) {
                        d = a.O + a.W - 3;
                        c = Ev(a, a.O - 1 - a.Bj, a.Fb - 3);
                        a.W -= a.Fb - 1;
                        a.Fb -= 2;
                        do ++a.O <= d && (a.ka = (a.ka << a.vc ^ a.window[a.O + 3 - 1]) & a.uc, a.fc[a.O & a.Xc] = a.head[a.ka], a.head[a.ka] = a.O); while (0 !== --a.Fb);
                        a.pd = 0;
                        a.pa = 2;
                        a.O++;
                        if (c && (Mv(a, !1), 0 === a.ia.ma)) return 1
                    } else if (a.pd) {
                        if ((c = Ev(a, 0, a.window[a.O - 1])) && Mv(a, !1), a.O++, a.W--, 0 === a.ia.ma) return 1
                    } else a.pd = 1, a.O++, a.W--
                }
                a.pd && (Ev(a, 0, a.window[a.O - 1]), a.pd = 0);
                a.wb = 2 > a.O ? a.O : 2;
                return 4 === b ? (Mv(a, !0), 0 === a.ia.ma ? 3 : 4) : a.Ob && (Mv(a, !1), 0 === a.ia.ma) ? 1 : 2
            },
            Uv = function(a, b) {
                for (var c, d, e, f = a.window;;) {
                    if (258 >= a.W) {
                        Rv(a);
                        if (258 >= a.W && 0 === b) return 1;
                        if (0 === a.W) break
                    }
                    a.pa = 0;
                    if (3 <= a.W && 0 < a.O && (d = a.O - 1, c = f[d], c === f[++d] && c === f[++d] && c === f[++d])) {
                        for (e = a.O + 258; c === f[++d] && c === f[++d] && c === f[++d] &&
                            c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && d < e;);
                        a.pa = 258 - (e - d);
                        a.pa > a.W && (a.pa = a.W)
                    }
                    3 <= a.pa ? (c = Ev(a, 1, a.pa - 3), a.W -= a.pa, a.O += a.pa, a.pa = 0) : (c = Ev(a, 0, a.window[a.O]), a.W--, a.O++);
                    if (c && (Mv(a, !1), 0 === a.ia.ma)) return 1
                }
                a.wb = 0;
                return 4 === b ? (Mv(a, !0), 0 === a.ia.ma ? 3 : 4) : a.Ob && (Mv(a, !1), 0 === a.ia.ma) ? 1 : 2
            },
            Vv = function(a, b) {
                for (var c;;) {
                    if (0 === a.W && (Rv(a), 0 === a.W)) {
                        if (0 === b) return 1;
                        break
                    }
                    a.pa = 0;
                    c = Ev(a, 0, a.window[a.O]);
                    a.W--;
                    a.O++;
                    if (c && (Mv(a, !1), 0 === a.ia.ma)) return 1
                }
                a.wb = 0;
                return 4 === b ? (Mv(a, !0), 0 === a.ia.ma ? 3 : 4) : a.Ob && (Mv(a, !1), 0 === a.ia.ma) ? 1 : 2
            },
            Wv = function(a, b, c, d, e) {
                this.Yk = a;
                this.em = b;
                this.mm = c;
                this.dm = d;
                this.Vk = e
            },
            Xv = function() {
                this.ia = null;
                this.status = 0;
                this.Ba = null;
                this.Wa = this.pending = this.De = this.Pb = 0;
                this.ea = null;
                this.Tb = 0;
                this.method = 8;
                this.Od = -1;
                this.Xc = this.Uh = this.ib = 0;
                this.window = null;
                this.Vj = 0;
                this.head = this.fc = null;
                this.tj = this.Mi = this.ic = this.level = this.nh = this.pj = this.Fb = this.W = this.Qd = this.O = this.pd = this.Bj = this.pa = this.Bb = this.vc = this.uc = this.Wg = this.Bf = this.ka = 0;
                this.tb = new Y.kc(1146);
                this.gd = new Y.kc(122);
                this.eb = new Y.kc(78);
                Hv(this.tb);
                Hv(this.gd);
                Hv(this.eb);
                this.ti = this.lf = this.Ff = null;
                this.nc = new Y.kc(16);
                this.Ja = new Y.kc(573);
                Hv(this.Ja);
                this.Kd = this.wc = 0;
                this.depth = new Y.kc(573);
                Hv(this.depth);
                this.Ya = this.mb = this.wb = this.matches = this.Yd = this.Bc = this.pe = this.Ob = this.Be = this.eh = 0
            },
            Zv = function(a, b) {
                if (!a || !a.state || 5 < b || 0 > b) return a ? Gv(a, -2) : -2;
                var c = a.state;
                if (!a.Ce || !a.input && 0 !== a.lb || 666 === c.status && 4 !== b) return Gv(a, 0 === a.ma ? -5 : -2);
                c.ia = a;
                var d =
                    c.Od;
                c.Od = b;
                if (42 === c.status)
                    if (2 === c.Wa) a.ga = 0, Z(c, 31), Z(c, 139), Z(c, 8), c.ea ? (Z(c, (c.ea.text ? 1 : 0) + (c.ea.Oc ? 2 : 0) + (c.ea.Lc ? 4 : 0) + (c.ea.name ? 8 : 0) + (c.ea.wg ? 16 : 0)), Z(c, c.ea.time & 255), Z(c, c.ea.time >> 8 & 255), Z(c, c.ea.time >> 16 & 255), Z(c, c.ea.time >> 24 & 255), Z(c, 9 === c.level ? 2 : 2 <= c.ic || 2 > c.level ? 4 : 0), Z(c, c.ea.mo & 255), c.ea.Lc && c.ea.Lc.length && (Z(c, c.ea.Lc.length & 255), Z(c, c.ea.Lc.length >> 8 & 255)), c.ea.Oc && (a.ga = Qv(a.ga, c.Ba, c.pending, 0)), c.Tb = 0, c.status = 69) : (Z(c, 0), Z(c, 0), Z(c, 0), Z(c, 0), Z(c, 0), Z(c, 9 === c.level ? 2 : 2 <=
                        c.ic || 2 > c.level ? 4 : 0), Z(c, 3), c.status = 113);
                    else {
                        var e = 8 + (c.Uh - 8 << 4) << 8;
                        e |= (2 <= c.ic || 2 > c.level ? 0 : 6 > c.level ? 1 : 6 === c.level ? 2 : 3) << 6;
                        0 !== c.O && (e |= 32);
                        c.status = 113;
                        Nv(c, e + (31 - e % 31));
                        0 !== c.O && (Nv(c, a.ga >>> 16), Nv(c, a.ga & 65535));
                        a.ga = 1
                    }
                if (69 === c.status)
                    if (c.ea.Lc) {
                        for (e = c.pending; c.Tb < (c.ea.Lc.length & 65535) && (c.pending !== c.Pb || (c.ea.Oc && c.pending > e && (a.ga = Qv(a.ga, c.Ba, c.pending - e, e)), Iv(a), e = c.pending, c.pending !== c.Pb));) Z(c, c.ea.Lc[c.Tb] & 255), c.Tb++;
                        c.ea.Oc && c.pending > e && (a.ga = Qv(a.ga, c.Ba, c.pending - e, e));
                        c.Tb === c.ea.Lc.length && (c.Tb = 0, c.status = 73)
                    } else c.status = 73;
                if (73 === c.status)
                    if (c.ea.name) {
                        e = c.pending;
                        do {
                            if (c.pending === c.Pb && (c.ea.Oc && c.pending > e && (a.ga = Qv(a.ga, c.Ba, c.pending - e, e)), Iv(a), e = c.pending, c.pending === c.Pb)) {
                                var f = 1;
                                break
                            }
                            f = c.Tb < c.ea.name.length ? c.ea.name.charCodeAt(c.Tb++) & 255 : 0;
                            Z(c, f)
                        } while (0 !== f);
                        c.ea.Oc && c.pending > e && (a.ga = Qv(a.ga, c.Ba, c.pending - e, e));
                        0 === f && (c.Tb = 0, c.status = 91)
                    } else c.status = 91;
                if (91 === c.status)
                    if (c.ea.wg) {
                        e = c.pending;
                        do {
                            if (c.pending === c.Pb && (c.ea.Oc && c.pending >
                                    e && (a.ga = Qv(a.ga, c.Ba, c.pending - e, e)), Iv(a), e = c.pending, c.pending === c.Pb)) {
                                f = 1;
                                break
                            }
                            f = c.Tb < c.ea.wg.length ? c.ea.wg.charCodeAt(c.Tb++) & 255 : 0;
                            Z(c, f)
                        } while (0 !== f);
                        c.ea.Oc && c.pending > e && (a.ga = Qv(a.ga, c.Ba, c.pending - e, e));
                        0 === f && (c.status = 103)
                    } else c.status = 103;
                103 === c.status && (c.ea.Oc ? (c.pending + 2 > c.Pb && Iv(a), c.pending + 2 <= c.Pb && (Z(c, a.ga & 255), Z(c, a.ga >> 8 & 255), a.ga = 0, c.status = 113)) : c.status = 113);
                if (0 !== c.pending) {
                    if (Iv(a), 0 === a.ma) return c.Od = -1, 0
                } else if (0 === a.lb && (b << 1) - (4 < b ? 9 : 0) <= (d << 1) - (4 < d ? 9 : 0) &&
                    4 !== b) return Gv(a, -5);
                if (666 === c.status && 0 !== a.lb) return Gv(a, -5);
                if (0 !== a.lb || 0 !== c.W || 0 !== b && 666 !== c.status) {
                    d = 2 === c.ic ? Vv(c, b) : 3 === c.ic ? Uv(c, b) : Yv[c.level].Vk(c, b);
                    if (3 === d || 4 === d) c.status = 666;
                    if (1 === d || 3 === d) return 0 === a.ma && (c.Od = -1), 0;
                    if (2 === d && (1 === b ? (kv(c, 2, 3), lv(c, 256, Kv), 16 === c.Ya ? (jv(c, c.mb), c.mb = 0, c.Ya = 0) : 8 <= c.Ya && (c.Ba[c.pending++] = c.mb & 255, c.mb >>= 8, c.Ya -= 8)) : 5 !== b && (kv(c, 0, 3), qv(c, 0, 0), 3 === b && (Hv(c.head), 0 === c.W && (c.O = 0, c.Bb = 0, c.wb = 0))), Iv(a), 0 === a.ma)) return c.Od = -1, 0
                }
                if (4 !== b) return 0;
                if (0 >= c.Wa) return 1;
                2 === c.Wa ? (Z(c, a.ga & 255), Z(c, a.ga >> 8 & 255), Z(c, a.ga >> 16 & 255), Z(c, a.ga >> 24 & 255), Z(c, a.rd & 255), Z(c, a.rd >> 8 & 255), Z(c, a.rd >> 16 & 255), Z(c, a.rd >> 24 & 255)) : (Nv(c, a.ga >>> 16), Nv(c, a.ga & 65535));
                Iv(a);
                0 < c.Wa && (c.Wa = -c.Wa);
                return 0 !== c.pending ? 0 : 1
            },
            $v = function(a) {
                if (!(this instanceof $v)) return new $v(a);
                a = this.options = Y.assign({
                    level: -1,
                    method: 8,
                    Gk: 16384,
                    Yc: 15,
                    hm: 8,
                    ic: 0,
                    Rj: ""
                }, a || {});
                a.raw && 0 < a.Yc ? a.Yc = -a.Yc : a.Zk && 0 < a.Yc && 16 > a.Yc && (a.Yc += 16);
                this.Hg = 0;
                this.msg = "";
                this.ended = !1;
                this.le = [];
                this.ia =
                    new aw;
                this.ia.ma = 0;
                var b = this.ia;
                var c = a.level,
                    d = a.method,
                    e = a.Yc,
                    f = a.hm,
                    g = a.ic;
                if (b) {
                    var k = 1; - 1 === c && (c = 6);
                    0 > e ? (k = 0, e = -e) : 15 < e && (k = 2, e -= 16);
                    if (1 > f || 9 < f || 8 !== d || 8 > e || 15 < e || 0 > c || 9 < c || 0 > g || 4 < g) b = Gv(b, -2);
                    else {
                        8 === e && (e = 9);
                        var l = new Xv;
                        b.state = l;
                        l.ia = b;
                        l.Wa = k;
                        l.ea = null;
                        l.Uh = e;
                        l.ib = 1 << l.Uh;
                        l.Xc = l.ib - 1;
                        l.Wg = f + 7;
                        l.Bf = 1 << l.Wg;
                        l.uc = l.Bf - 1;
                        l.vc = ~~((l.Wg + 3 - 1) / 3);
                        l.window = new Y.Zc(2 * l.ib);
                        l.head = new Y.kc(l.Bf);
                        l.fc = new Y.kc(l.ib);
                        l.Be = 1 << f + 6;
                        l.Pb = 4 * l.Be;
                        l.Ba = new Y.Zc(l.Pb);
                        l.pe = l.Be;
                        l.eh = 3 * l.Be;
                        l.level = c;
                        l.ic =
                            g;
                        l.method = d;
                        if (b && b.state) {
                            b.rd = b.Rh = 0;
                            b.Bg = 2;
                            c = b.state;
                            c.pending = 0;
                            c.De = 0;
                            0 > c.Wa && (c.Wa = -c.Wa);
                            c.status = c.Wa ? 42 : 113;
                            b.ga = 2 === c.Wa ? 0 : 1;
                            c.Od = 0;
                            if (!bw) {
                                d = Array(16);
                                for (f = g = 0; 28 > f; f++)
                                    for (vv[f] = g, e = 0; e < 1 << uv[f]; e++) tv[g++] = f;
                                tv[g - 1] = f;
                                for (f = g = 0; 16 > f; f++)
                                    for (yv[f] = g, e = 0; e < 1 << xv[f]; e++) wv[g++] = f;
                                for (g >>= 7; 30 > f; f++)
                                    for (yv[f] = g << 7, e = 0; e < 1 << xv[f] - 7; e++) wv[256 + g++] = f;
                                for (e = 0; 15 >= e; e++) d[e] = 0;
                                for (e = 0; 143 >= e;) Kv[2 * e + 1] = 8, e++, d[8]++;
                                for (; 255 >= e;) Kv[2 * e + 1] = 9, e++, d[9]++;
                                for (; 279 >= e;) Kv[2 * e + 1] = 7, e++, d[7]++;
                                for (; 287 >=
                                    e;) Kv[2 * e + 1] = 8, e++, d[8]++;
                                nv(Kv, 287, d);
                                for (e = 0; 30 > e; e++) Lv[2 * e + 1] = 5, Lv[2 * e] = mv(e, 5);
                                cw = new hv(Kv, uv, 257, 286, 15);
                                dw = new hv(Lv, xv, 0, 30, 15);
                                ew = new hv([], fw, 0, 19, 7);
                                bw = !0
                            }
                            c.Ff = new iv(c.tb, cw);
                            c.lf = new iv(c.gd, dw);
                            c.ti = new iv(c.eb, ew);
                            c.mb = 0;
                            c.Ya = 0;
                            ov(c);
                            c = 0
                        } else c = Gv(b, -2);
                        0 === c && (b = b.state, b.Vj = 2 * b.ib, Hv(b.head), b.nh = Yv[b.level].em, b.Mi = Yv[b.level].Yk, b.tj = Yv[b.level].mm, b.pj = Yv[b.level].dm, b.O = 0, b.Bb = 0, b.W = 0, b.wb = 0, b.pa = b.Fb = 2, b.pd = 0, b.ka = 0);
                        b = c
                    }
                } else b = -2;
                if (0 !== b) throw Error(Fv[b]);
                a.Jl && (b = this.ia) &&
                    b.state && 2 === b.state.Wa && (b.state.ea = a.Jl);
                if (a.qe) {
                    var m;
                    "string" === typeof a.qe ? m = gw(a.qe) : "[object ArrayBuffer]" === hw.call(a.qe) ? m = new Uint8Array(a.qe) : m = a.qe;
                    a = this.ia;
                    f = m;
                    g = f.length;
                    if (a && a.state)
                        if (m = a.state, b = m.Wa, 2 === b || 1 === b && 42 !== m.status || m.W) b = -2;
                        else {
                            1 === b && (a.ga = Pv(a.ga, f, g, 0));
                            m.Wa = 0;
                            g >= m.ib && (0 === b && (Hv(m.head), m.O = 0, m.Bb = 0, m.wb = 0), c = new Y.Zc(m.ib), Y.Ad(c, f, g - m.ib, m.ib, 0), f = c, g = m.ib);
                            c = a.lb;
                            d = a.qd;
                            e = a.input;
                            a.lb = g;
                            a.qd = 0;
                            a.input = f;
                            for (Rv(m); 3 <= m.W;) {
                                f = m.O;
                                g = m.W - 2;
                                do m.ka = (m.ka << m.vc ^
                                    m.window[f + 3 - 1]) & m.uc, m.fc[f & m.Xc] = m.head[m.ka], m.head[m.ka] = f, f++; while (--g);
                                m.O = f;
                                m.W = 2;
                                Rv(m)
                            }
                            m.O += m.W;
                            m.Bb = m.O;
                            m.wb = m.W;
                            m.W = 0;
                            m.pa = m.Fb = 2;
                            m.pd = 0;
                            a.qd = d;
                            a.input = e;
                            a.lb = c;
                            m.Wa = b;
                            b = 0
                        }
                    else b = -2;
                    if (0 !== b) throw Error(Fv[b]);
                    this.co = !0
                }
            },
            iw = function(a) {
                var b = {};
                b = b || {};
                b.Zk = !0;
                b = new $v(b);
                b.push(a, !0);
                if (b.Hg) throw b.msg || Fv[b.Hg];
                return b.result
            },
            jw = function(a) {
                var b = _.Yj("goog-gt-thumbUpIcon"),
                    c = _.Yj("goog-gt-thumbUpIconFilled"),
                    d = _.Yj("goog-gt-thumbDownIcon"),
                    e = _.Yj("goog-gt-thumbDownIconFilled");
                b.style.display = "";
                c.style.display = "none";
                d.style.display = "";
                e.style.display = "none";
                switch (a) {
                    case "up":
                        b.style.display = "none";
                        c.style.display = "";
                        break;
                    case "down":
                        d.style.display = "none", e.style.display = ""
                }
                _.Yj("goog-gt-votingInputVote").value = a
            },
            kw = function(a, b) {
                var c = _.Yj("goog-gt-tt").dataset;
                a.get(c.id) === b && (b = "");
                jw(b);
                a.set(c.id, b);
                _.Yj("goog-gt-votingForm").submit()
            },
            Vu = function(a, b, c, d) {
                d = void 0 === d ? !1 : d;
                var e = _.ch(a.ha),
                    f = d,
                    g = e;
                g = void 0 === g ? !0 : g;
                a.g || (a.g = {});
                var k = a.g[c];
                var l = Tu(a, c, f),
                    m = _.ch(a.ha),
                    n = !!(_.Zg(a.ha) & 16),
                    p = _.ch(l),
                    t = m || p;
                !g && p && (l = _.ah(Array.prototype.slice.call(l)), _.I(a, c, l, f));
                if (!k) {
                    k = [];
                    f = t;
                    for (p = 0; p < l.length; p++) {
                        var r = l[p];
                        f = f || _.ch(r);
                        var v = b,
                            H = n,
                            Q = !1;
                        Q = void 0 === Q ? !1 : Q;
                        H = void 0 === H ? !1 : H;
                        r = Array.isArray(r) ? new v(H ? _.dh(r) : r) : Q ? new v : void 0;
                        void 0 !== r && (k.push(r), t && _.Xg(r.ha, 2))
                    }
                    a.g[c] = k;
                    Object.isFrozen(l) || (b = _.Zg(l) | 33, _.$g(l, f ? b & -9 : b | 8))
                }
                g = m || g;
                l = _.ch(k);
                g && !l && (Object.isFrozen(k) && (a.g[c] = k = k.slice()), _.Xg(k, 2), Object.freeze(k));
                !g && l && (a.g[c] = k = k.slice());
                a = Tu(a, c, d);
                if (e = !e && a) {
                    if (!a) throw Error("ia");
                    e = !(_.Zg(a) & 8)
                }
                if (e) {
                    for (e = 0; e < k.length; e++)(c = k[e]) && _.ch(c.ha) && (c = e, d = _.th(k[e]), k[c] = d, a[e] = k[e].ha);
                    _.Xg(a, 8)
                }
                return k
            },
            lw = function(a) {
                _.Mh = !0;
                try {
                    return JSON.stringify(a.toJSON(), Uu)
                } finally {
                    _.Mh = !1
                }
            },
            Xu = function(a) {
                var b = _.kh(a.ha, Yu, Su);
                _.dh(b);
                _.Vh = b;
                b = new a.constructor(b);
                _.Vh = null;
                Wu(b, a);
                return b
            },
            mw = null,
            nw = function() {
                mw && (_.Sd(mw), mw = null);
                _.Yi && _.Yi.length && _.Zi(_.Yi.join(""));
                _.Yi = null
            },
            ow = function() {
                _.Yi && nw();
                _.Yi = [];
                mw = _.D(window,
                    "pagehide",
                    function() {
                        nw()
                    })
            },
            qw = function(a, b) {
                b = pw(b || {}, a.j ? a.j.g() : {});
                a.h(null, b.pc);
                return b.h()
            },
            rw = function(a) {
                return a instanceof _.ei && a.constructor === _.ei ? a.g : "type_error:SafeStyleSheet"
            },
            sw = function(a, b) {
                return a + Math.random() * (b - a)
            },
            tw = function(a) {
                try {
                    return a.contentWindow || (a.contentDocument ? _.ed(a.contentDocument) : null)
                } catch (b) {}
                return null
            },
            uw = function() {
                var a = _.Dp[5];
                return new _.ne(function(b, c) {
                    c(a)
                })
            },
            vw = function(a, b) {
                if (!b) return a;
                var c = a.indexOf("#");
                0 > c && (c = a.length);
                var d =
                    a.indexOf("?");
                if (0 > d || d > c) {
                    d = c;
                    var e = ""
                } else e = a.substring(d + 1, c);
                a = [a.slice(0, d), e, a.slice(c)];
                c = a[1];
                a[1] = b ? c ? c + "&" + b : b : c;
                return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
            },
            ww = function(a, b) {
                var c = [];
                for (b = b || 0; b < a.length; b += 2) _.If(a[b], a[b + 1], c);
                return c.join("&")
            },
            xw = function(a, b) {
                var c = 2 == arguments.length ? ww(arguments[1], 0) : ww(arguments, 1);
                return vw(a, c)
            },
            yw = function(a, b, c) {
                c = null != c ? "=" + _.Vc(c) : "";
                return vw(a, b + c)
            },
            zw = function(a, b, c) {
                for (; 0 <= (b = a.indexOf("format", b)) && b < c;) {
                    var d = a.charCodeAt(b - 1);
                    if (38 ==
                        d || 63 == d)
                        if (d = a.charCodeAt(b + 6), !d || 61 == d || 38 == d || 35 == d) return b;
                    b += 7
                }
                return -1
            },
            Aw = /#|$/,
            Bw = /[?&]($|#)/,
            Cw = function(a, b) {
                _.E.call(this);
                this.l = a || 1;
                this.j = b || _.q;
                this.o = (0, _.x)(this.B, this);
                this.s = _.sb()
            };
        _.y(Cw, _.E);
        Cw.prototype.h = !1;
        Cw.prototype.g = null;
        var Dw = function(a, b) {
            a.l = b;
            a.g && a.h ? (a.stop(), a.start()) : a.g && a.stop()
        };
        Cw.prototype.B = function() {
            if (this.h) {
                var a = _.sb() - this.s;
                0 < a && a < .8 * this.l ? this.g = this.j.setTimeout(this.o, this.l - a) : (this.g && (this.j.clearTimeout(this.g), this.g = null), this.dispatchEvent("tick"), this.h && (this.stop(), this.start()))
            }
        };
        Cw.prototype.start = function() {
            this.h = !0;
            this.g || (this.g = this.j.setTimeout(this.o, this.l), this.s = _.sb())
        };
        Cw.prototype.stop = function() {
            this.h = !1;
            this.g && (this.j.clearTimeout(this.g), this.g = null)
        };
        Cw.prototype.L = function() {
            Cw.G.L.call(this);
            this.stop();
            delete this.j
        };
        var Ew = function(a, b) {
                function c(l) {
                    for (; d < a.length;) {
                        var m = a.charAt(d++),
                            n = _.Ih[m];
                        if (null != n) return n;
                        if (!/^[\s\xa0]*$/.test(m)) throw Error("ea`" + m);
                    }
                    return l
                }
                _.Kh();
                for (var d = 0;;) {
                    var e = c(-1),
                        f = c(0),
                        g = c(64),
                        k = c(64);
                    if (64 === k && -1 === e) break;
                    b(e << 2 | f >> 4);
                    64 != g && (b(f << 4 & 240 | g >> 2), 64 != k && b(g << 6 & 192 | k))
                }
            },
            Fw = function(a) {
                if (_.Jh) return _.q.atob(a);
                var b = "";
                Ew(a, function(c) {
                    b += String.fromCharCode(c)
                });
                return b
            },
            Gw = function(a, b) {
                b = rw(b);
                _.B && void 0 !== a.cssText ? a.cssText = b : _.q.trustedTypes ? _.nd(a, b) : a.innerHTML =
                    b
            },
            Hw = function(a, b) {
                b = _.Zc(b);
                var c = b.X;
                if (_.B && c.createStyleSheet) b = c.createStyleSheet(), Gw(b, a);
                else {
                    c = _.mj(b.X, "HEAD")[0];
                    if (!c) {
                        var d = _.mj(b.X, "BODY")[0];
                        c = b.N("HEAD");
                        d.parentNode.insertBefore(c, d)
                    }
                    d = b.N("STYLE");
                    var e;
                    (e = _.Bh('style[nonce],link[rel="stylesheet"][nonce]')) && d.setAttribute("nonce", e);
                    Gw(d, a);
                    b.appendChild(c, d)
                }
            },
            Iw = function(a) {
                return a instanceof _.Kf ? !!a.za() : !!a
            },
            Jw = function(a) {
                return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
            },
            Kw = function(a) {
                return _.ul(a, _.Uk) ? a.za() :
                    a instanceof _.Gb ? _.Ma(a).toString() : a instanceof _.Gb ? _.Ol(_.Ma(a).toString()) : "about:invalid#zSoyz"
            },
            Lw = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
            Mw = function(a) {
                _.ul(a, _.$h) ? a = Jw(a.za()) : null == a ? a = "" : a instanceof _.Gc ? a = Jw(_.Ej(a)) : a instanceof _.Gc ? a = Jw(_.Ej(a)) : a instanceof
                _.ei ? a = Jw(rw(a)) : a instanceof _.ei ? a = Jw(rw(a)) : (a = String(a), a = Lw.test(a) ? a : "zSoyz");
                return a
            },
            Nw, Ow = function(a, b) {
                if ((_.B || _.bc) && window.location.hostname != document.domain) {
                    Nw = Nw ? Nw + 1 : 1;
                    var c = "f" + Nw + "_" + _.sb().toString(36);
                    window[c] = function() {
                        window[c] = void 0;
                        a.src = "javascript:void(0)";
                        b && window.setTimeout(function() {
                            b()
                        }, 0)
                    };
                    a.src = "javascript:void(document.write(\"<script>document.domain='" + document.domain + "';parent['" + c + "']();\x3c/script>\"))"
                } else b && b()
            },
            Pw = function(a, b) {
                return "auto" != a && "zh-CN" !=
                    a && a == b
            },
            Qw = function() {
                var a = window.location.hash.match(/google\.translate\.element\.sp=([^&]+)/);
                return a && a[1] ? a[1] : null
            },
            Rw = function() {};
        Rw.prototype.h = function() {};
        var Sw = function(a) {
                a = a.split(".");
                if (3 !== a.length) return !1;
                a = JSON.parse(Fw(a[1]));
                return null == a || !a.exp || 1E3 * a.exp < _.sb() ? !1 : !0
            },
            Tw = function(a) {
                this.g = a
            };
        _.w(Tw, Rw);
        Tw.prototype.h = function() {
            return Sw(this.g) ? _.Fh(this.g) : uw()
        };
        var Uw = function(a) {
            this.g = null;
            this.j = a
        };
        _.w(Uw, Rw);
        Uw.prototype.h = function() {
            if (null != this.g && Sw(this.g)) return _.Fh(this.g);
            this.g = null;
            return new _.ne(function(a, b) {
                var c = this;
                this.j(function(d) {
                    c.g = d;
                    Sw(c.g) ? a(d) : b(_.Dp[5])
                }, b)
            }, this)
        };
        var Vw = function(a) {
                return (0, _.L)('<span id="' + _.P(a.id) + '"></span>')
            },
            Ww = function(a) {
                var b = a.id,
                    c = a.zj;
                return (0, _.L)(_.Kl(a.Aj) + '<div id="' + _.P(b) + '"></div>' + _.Kl(c))
            },
            pw = function(a) {
                var b = a.id,
                    c = a.top,
                    d = a.left,
                    e = a.bottom,
                    f = a.right;
                return (0, _.ii)("." + Mw(a.className) + " {z-index:9999999; overflow:visible; position:fixed; _position:absolute;" + (Iw(c) || _.wl(c, 0) ? "top:" + Mw(c) + "px; _top:expression((" + Mw(c) + "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "top:auto;") + (Iw(d) ||
                    _.wl(d, 0) ? "left:" + Mw(d) + "px; _left:expression((" + Mw(d) + "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "left:auto;") + (Iw(e) || _.wl(e, 0) ? "bottom:" + Mw(e) + "px; _top:expression((-" + Mw(e) + "-document.getElementById('" + String(b).replace(_.Ml, _.Gl) + "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "bottom:auto;") + (Iw(f) || _.wl(f, 0) ? "right:" + Mw(f) + "px; _left:expression((-" +
                    Mw(f) + "-document.getElementById('" + String(b).replace(_.Ml, _.Gl) + "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "right:auto;") + "}")
            },
            Xw = function() {
                return (0, _.L)('<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"/></svg></div></div>')
            },
            Yw = function() {
                _.M.call(this)
            };
        _.w(Yw, _.M);
        Yw.prototype.N = function() {
            this.na(_.Di(Xw))
        };
        Yw.prototype.na = function(a) {
            this.J = a
        };
        var Zw = function(a) {
                _.Yl(a.A(), "goog-te-spinner-pos-show");
                _.Yl(a.A().firstChild, "goog-te-spinner-animation-show")
            },
            $w = function() {
                this.g = new Yw;
                this.g.N();
                this.g.ta();
                this.h = 0
            };
        $w.prototype.reset = function() {
            this.h = 0;
            Zw(this.g)
        };
        $w.prototype.l = function() {
            if (0 == this.h++) {
                var a = this.g;
                _.R(a.A(), "goog-te-spinner-pos-show");
                _.R(a.A().firstChild, "goog-te-spinner-animation-show")
            }
        };
        $w.prototype.j = function() {
            0 == --this.h && Zw(this.g)
        };
        var bx = function(a) {
            _.J.call(this, a, -1, ax)
        };
        _.w(bx, _.J);
        var ax = [2];
        var cx = function(a) {
            if (!a) return "";
            if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
            a = a.split("#")[0].split("?")[0];
            a = a.toLowerCase();
            0 == a.indexOf("//") && (a = window.location.protocol + a);
            /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
            var b = a.substring(a.indexOf("://") + 3),
                c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
            c = a.substring(0, a.indexOf("://"));
            if (!c) throw Error("Pa`" + a);
            if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !==
                c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Qa`" + c);
            a = "";
            var d = b.indexOf(":");
            if (-1 != d) {
                var e = b.substring(d + 1);
                b = b.substring(0, d);
                if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
            }
            return c + "://" + b + a
        };
        var ex = function(a, b, c) {
                var d = String(_.q.location.href);
                return d && a && b ? [b, dx(cx(d), a, c || null)].join(" ") : null
            },
            dx = function(a, b, c) {
                var d = [],
                    e = [];
                if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], _.Qb(d, function(k) {
                    e.push(k)
                }), fx(e.join(" "));
                var f = [],
                    g = [];
                _.Qb(c, function(k) {
                    g.push(k.key);
                    f.push(k.value)
                });
                c = Math.floor((new Date).getTime() / 1E3);
                e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
                _.Qb(d, function(k) {
                    e.push(k)
                });
                a = fx(e.join(" "));
                a = [c, a];
                0 == g.length || a.push(g.join(""));
                return a.join("_")
            },
            fx = function(a) {
                var b =
                    dv();
                b.update(a);
                return b.Jk().toLowerCase()
            };
        var gx = {};
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var hx = function() {
            this.g = document || {
                cookie: ""
            }
        };
        _.h = hx.prototype;
        _.h.isEnabled = function() {
            if (!_.q.navigator.cookieEnabled) return !1;
            if (!this.yc()) return !0;
            this.set("TESTCOOKIESENABLED", "1", {
                nj: 60
            });
            if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
            this.remove("TESTCOOKIESENABLED");
            return !0
        };
        _.h.set = function(a, b, c) {
            var d = !1;
            if ("object" === typeof c) {
                var e = c.po;
                d = c.qo || !1;
                var f = c.domain || void 0;
                var g = c.path || void 0;
                var k = c.nj
            }
            if (/[;=\s]/.test(a)) throw Error("Ra`" + a);
            if (/[;\r\n]/.test(b)) throw Error("Sa`" + b);
            void 0 === k && (k = -1);
            this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > k ? "" : 0 == k ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * k)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
        };
        _.h.get = function(a, b) {
            for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
                f = (0, _.Wb)(d[e]);
                if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
                if (f == a) return ""
            }
            return b
        };
        _.h.remove = function(a, b, c) {
            var d = void 0 !== this.get(a);
            this.set(a, "", {
                nj: 0,
                path: b,
                domain: c
            });
            return d
        };
        _.h.rc = function() {
            return ix(this).keys
        };
        _.h.Cb = function() {
            return ix(this).values
        };
        _.h.yc = function() {
            return !this.g.cookie
        };
        var ix = function(a) {
            a = (a.g.cookie || "").split(";");
            for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = (0, _.Wb)(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
            return {
                keys: b,
                values: c
            }
        };
        var jx = function(a) {
                return !!gx.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a)
            },
            kx = function(a, b, c, d) {
                (a = _.q[a]) || (a = (new hx).get(b));
                return a ? ex(a, c, d) : null
            },
            lx = function(a, b) {
                b = void 0 === b ? !1 : b;
                var c = cx(String(_.q.location.href)),
                    d = [];
                var e = b;
                e = void 0 === e ? !1 : e;
                var f = _.q.__SAPISID || _.q.__APISID || _.q.__3PSAPISID || _.q.__OVERRIDE_SID;
                jx(e) && (f = f || _.q.__1PSAPISID);
                if (f) e = !0;
                else {
                    var g = new hx;
                    f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID") || g.get("SID");
                    jx(e) && (f = f || g.get("__Secure-1PAPISID"));
                    e = !!f
                }
                e && (e = (c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:")) ? _.q.__SAPISID : _.q.__APISID, e || (e = new hx, e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID")), (e = e ? ex(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e), c && jx(b) && ((b = kx("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b), (a = kx("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && d.push(a)));
                return 0 == d.length ? null : d.join(" ")
            };
        var mx = function(a) {
            this.g = this.h = this.j = a
        };
        mx.prototype.reset = function() {
            this.g = this.h = this.j
        };
        mx.prototype.Na = function() {
            return this.h
        };
        var nx = function(a) {
            _.J.call(this, a)
        };
        _.w(nx, _.J);
        var px = function(a) {
            _.J.call(this, a, -1, ox)
        };
        _.w(px, _.J);
        var ox = [1];
        var qx = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"];
        new px;
        var rx = function(a) {
            _.J.call(this, a)
        };
        _.w(rx, _.J);
        var tx = function(a) {
            _.J.call(this, a, 31, sx)
        };
        _.w(tx, _.J);
        var sx = [3, 20, 27];
        var vx = function(a) {
            _.J.call(this, a, 17, ux)
        };
        _.w(vx, _.J);
        var ux = [3, 5];
        var xx = function(a) {
            _.J.call(this, a, 6, wx)
        };
        _.w(xx, _.J);
        var wx = [5];
        var yx = function(a) {
            _.J.call(this, a)
        };
        _.w(yx, _.J);
        var zx = new function(a, b) {
            this.g = a;
            this.Ag = b;
            this.h = cv
        }(175237375, yx);
        var Dx = function(a, b, c, d, e, f, g, k, l, m, n) {
            _.E.call(this);
            var p = this;
            this.h = [];
            this.ya = "";
            this.da = !1;
            this.Ka = this.R = -1;
            this.la = !1;
            this.C = this.j = null;
            this.s = 0;
            this.jb = 1;
            this.Ph = 0;
            this.Y = !1;
            _.E.call(this);
            this.Ra = b || function() {};
            this.o = new Ax(a, f);
            this.cb = d;
            this.ca = n;
            this.rb = _.rb(sw, 0, 1);
            this.M = e || null;
            this.B = c || null;
            this.I = g || !1;
            this.T = l || null;
            this.withCredentials = !k;
            this.Z = f || !1;
            this.Ab = !this.Z && (65 <= av("Chromium") || 45 <= av("Firefox") || 12 <= av("Safari") || _.Fa() && bv()) && !!_.ed() && !!_.ed().navigator && !!_.ed().navigator.sendBeacon;
            a = _.I(new rx, 1, 1);
            Bx(this.o, a);
            this.l = new mx(1E4);
            this.g = new Cw(this.l.Na());
            _.kj(this, _.rb(_.ca, this.g));
            m = Cx(this, m);
            _.D(this.g, "tick", m, !1, this);
            this.K = new Cw(6E5);
            _.kj(this, _.rb(_.ca, this.K));
            _.D(this.K, "tick", m, !1, this);
            this.I || this.K.start();
            this.Z || (_.D(document, "visibilitychange", function() {
                "hidden" === document.visibilityState && p.P()
            }), _.D(document, "pagehide", this.P, !1, this))
        };
        _.w(Dx, _.E);
        var Cx = function(a, b) {
            return b ? function() {
                b().then(function() {
                    a.flush()
                })
            } : function() {
                a.flush()
            }
        };
        Dx.prototype.L = function() {
            this.P();
            _.E.prototype.L.call(this)
        };
        var Ex = function(a) {
                a.M || (a.M = .01 > a.rb() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
                return a.M
            },
            Fx = function(a, b) {
                a.l = new mx(1 > b ? 1 : b);
                Dw(a.g, a.l.Na())
            };
        Dx.prototype.log = function(a) {
            a = Xu(a);
            var b = this.jb++;
            _.I(a, 21, b);
            _.Sh(a, 1) || _.I(a, 1, Date.now().toString());
            null != _.Sh(a, 15, !1) || _.I(a, 15, 60 * (new Date).getTimezoneOffset());
            this.j && (b = Xu(this.j), _.Uh(a, 16, b));
            for (; 1E3 <= this.h.length;) this.h.shift(), ++this.s;
            this.h.push(a);
            this.dispatchEvent(new Gx(a));
            this.I || this.g.h || this.g.start()
        };
        Dx.prototype.flush = function(a, b) {
            var c = this;
            if (0 === this.h.length) a && a();
            else if (this.Y) Hx(this);
            else {
                var d = Date.now();
                if (this.Ka > d && this.R < d) b && b("throttled");
                else {
                    var e = Ix(this.o, this.h, this.s);
                    d = {};
                    var f = this.Ra();
                    f && (d.Authorization = f);
                    var g = Ex(this);
                    this.B && (d["X-Goog-AuthUser"] = this.B, g = yw(g, "authuser", this.B));
                    this.T && (d["X-Goog-PageId"] = this.T, g = yw(g, "pageId", this.T));
                    if (f && this.ya === f) b && b("stale-auth-token");
                    else {
                        this.h = [];
                        this.g.h && this.g.stop();
                        this.s = 0;
                        var k = lw(e),
                            l;
                        this.C && this.C.Mb() &&
                            (l = Promise.resolve(iw(Uint8Array.from(_.Vk(k)))));
                        var m = {
                                url: g,
                                body: k,
                                Fk: 1,
                                Ch: d,
                                Cm: "POST",
                                withCredentials: this.withCredentials,
                                Ph: this.Ph
                            },
                            n = function(r) {
                                c.l.reset();
                                Dw(c.g, c.l.Na());
                                if (r) {
                                    var v = null;
                                    try {
                                        var H = JSON.parse(r.replace(")]}'\n", ""));
                                        v = new xx(H)
                                    } catch (Q) {}
                                    v && (r = Number(_.ph(_.Sh(v, 1), "-1")), 0 < r && (c.R = Date.now(), c.Ka = c.R + r), v = zx.h(v)) && (v = _.ph(_.Sh(v, 1), -1), -1 != v && (c.la || Fx(c, v)))
                                }
                                a && a()
                            },
                            p = function(r, v) {
                                var H = Vu(e, tx, 3),
                                    Q = c.l;
                                Q.g = Math.min(3E5, 2 * Q.g);
                                Q.h = Math.min(3E5, Q.g + Math.round(.2 * (Math.random() -
                                    .5) * Q.g));
                                Dw(c.g, c.l.Na());
                                401 === r && f && (c.ya = f);
                                void 0 === v && (v = 500 <= r && 600 > r || 401 === r || 0 === r);
                                v && (c.h = H.concat(c.h), c.I || c.g.h || c.g.start());
                                b && b("net-send-failed", r)
                            },
                            t = function() {
                                c.ca ? c.ca.send(m, n, p) : c.cb(m, n, p)
                            };
                        l ? l.then(function(r) {
                            m.Ch["Content-Encoding"] = "gzip";
                            m.Ch["Content-Type"] = "application/binary";
                            m.body = r;
                            m.Fk = 2;
                            t()
                        }, function() {
                            t()
                        }) : t()
                    }
                }
            }
        };
        Dx.prototype.P = function() {
            this.da && Hx(this);
            this.flush()
        };
        var Hx = function(a) {
                Jx(a, function(b, c) {
                    b = yw(b, "format", "json");
                    b = _.ed().navigator.sendBeacon(b, lw(c));
                    a.Y && !b && (a.Y = !1);
                    return b
                })
            },
            Jx = function(a, b) {
                if (0 !== a.h.length) {
                    var c = Ex(a);
                    for (var d = c.search(Aw), e = 0, f, g = []; 0 <= (f = zw(c, e, d));) g.push(c.substring(e, f)), e = Math.min(c.indexOf("&", f) + 1 || d, d);
                    g.push(c.slice(e));
                    c = g.join("").replace(Bw, "$1");
                    c = xw(c, "auth", a.Ra(), "authuser", a.B || "0");
                    for (d = 0; 10 > d && a.h.length; ++d) {
                        e = a.h.slice(0, 32);
                        f = Ix(a.o, e, a.s);
                        if (!b(c, f)) break;
                        a.s = 0;
                        a.h = a.h.slice(e.length)
                    }
                    a.g.h &&
                        a.g.stop()
                }
            },
            Gx = function() {
                _.ud.call(this, "event-logged", void 0)
            };
        _.w(Gx, _.ud);
        var Ax = function(a, b) {
                this.j = b = void 0 === b ? !1 : b;
                this.h = this.locale = null;
                this.g = new vx;
                _.I(this.g, 2, a);
                b || (this.locale = document.documentElement.getAttribute("lang"));
                Bx(this, new rx)
            },
            Bx = function(a, b) {
                _.Uh(a.g, 1, b);
                _.Sh(b, 1) || _.I(b, 1, 1);
                a.j || (b = Kx(a), _.Sh(b, 5) || _.I(b, 5, a.locale));
                a.h && (b = Kx(a), _.Th(b, px, 9) || _.Uh(b, 9, a.h))
            },
            Lx = function(a, b) {
                var c = void 0 === c ? qx : c;
                b(_.ed(), c).then(function(d) {
                    a.h = d;
                    d = Kx(a);
                    _.Uh(d, 9, a.h);
                    return !0
                }).catch(function() {
                    return !1
                })
            },
            Kx = function(a) {
                a = _.Th(a.g, rx, 1);
                var b = _.Th(a,
                    nx, 11);
                b || (b = new nx, _.Uh(a, 11, b));
                return b
            },
            Ix = function(a, b, c) {
                c = void 0 === c ? 0 : c;
                a = Xu(a.g);
                a = _.I(a, 4, Date.now().toString());
                b = _.qh(a, 3, b);
                c && _.I(b, 14, c);
                return b
            };
        var Mx = function(a) {
                a.j = _.Io;
                return a
            },
            Ox = function(a) {
                a.h = new Nx;
                return a
            },
            Px = function(a) {
                var b = new fv;
                b.l = "https://translate.googleapis.com/element/log?format=json&hasfast=true";
                b.o = a;
                return b
            },
            Qx = function(a) {
                a.g = !0;
                return a
            },
            Rx = function(a) {
                a.M = !0;
                return a
            },
            Sx = function(a) {
                var b = new Dx(1871, a.o ? a.o : lx, "0", a.s, a.l, !1, !1, a.M, void 0, void 0, a.B ? a.B : void 0);
                a.K && Bx(b.o, a.K);
                if (a.j) {
                    var c = a.j,
                        d = Kx(b.o);
                    _.I(d, 7, c)
                }
                a.h && (b.C = a.h);
                a.C && ((c = a.C) ? (b.j || (b.j = new bx), c = lw(c), _.I(b.j, 4, c)) : b.j && _.I(b.j, 4, void 0, !1));
                a.P && (d = a.P, b.j || (b.j = new bx), c = b.j, null == d ? d = _.Qh : _.ah(d), _.I(c, 2, d));
                a.g && (b.da = a.g && b.Ab);
                a.I && (c = a.I, b.la = !0, Fx(b, c));
                a.T && Lx(b.o, a.T);
                return b
            };
        /*

         (The MIT License)

         Copyright (C) 2014 by Vitaly Puzrin

         Permission is hereby granted, free of charge, to any person obtaining a copy
         of this software and associated documentation files (the "Software"), to deal
         in the Software without restriction, including without limitation the rights
         to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         copies of the Software, and to permit persons to whom the Software is
         furnished to do so, subject to the following conditions:

         The above copyright notice and this permission notice shall be included in
         all copies or substantial portions of the Software.

         THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         THE SOFTWARE.

         -----------------------------------------------------------------------------
         Ported from zlib, which is under the following license
         https://github.com/madler/zlib/blob/master/zlib.h

         zlib.h -- interface of the 'zlib' general purpose compression library
           version 1.2.8, April 28th, 2013
           Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
           This software is provided 'as-is', without any express or implied
           warranty.  In no event will the authors be held liable for any damages
           arising from the use of this software.
           Permission is granted to anyone to use this software for any purpose,
           including commercial applications, and to alter it and redistribute it
           freely, subject to the following restrictions:
           1. The origin of this software must not be misrepresented; you must not
              claim that you wrote the original software. If you use this software
              in a product, an acknowledgment in the product documentation would be
              appreciated but is not required.
           2. Altered source versions must be plainly marked as such, and must not be
              misrepresented as being the original software.
           3. This notice may not be removed or altered from any source distribution.
           Jean-loup Gailly        Mark Adler
           jloup@gzip.org          madler@alumni.caltech.edu
           The data format used by the zlib library is described by RFCs (Request for
           Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
           (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
        */
        var Y = {},
            Tx = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;
        Y.assign = function(a) {
            for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
                var c = b.shift();
                if (c) {
                    if ("object" !== typeof c) throw new TypeError("Ta`" + c);
                    for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
                }
            }
            return a
        };
        Y.Nh = function(a, b) {
            if (a.length === b) return a;
            if (a.subarray) return a.subarray(0, b);
            a.length = b;
            return a
        };
        var Ux = {
                Ad: function(a, b, c, d, e) {
                    if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
                    else
                        for (var f = 0; f < d; f++) a[e + f] = b[c + f]
                },
                Di: function(a) {
                    var b, c;
                    var d = c = 0;
                    for (b = a.length; d < b; d++) c += a[d].length;
                    var e = new Uint8Array(c);
                    d = c = 0;
                    for (b = a.length; d < b; d++) {
                        var f = a[d];
                        e.set(f, c);
                        c += f.length
                    }
                    return e
                }
            },
            Vx = {
                Ad: function(a, b, c, d, e) {
                    for (var f = 0; f < d; f++) a[e + f] = b[c + f]
                },
                Di: function(a) {
                    return [].concat.apply([], a)
                }
            };
        Y.Km = function() {
            Tx ? (Y.Zc = Uint8Array, Y.kc = Uint16Array, Y.Wj = Int32Array, Y.assign(Y, Ux)) : (Y.Zc = Array, Y.kc = Array, Y.Wj = Array, Y.assign(Y, Vx))
        };
        Y.Km();
        var Wx = !0;
        try {
            new Uint8Array(1)
        } catch (a) {
            Wx = !1
        }
        for (var Xx = new Y.Zc(256), Yx = 0; 256 > Yx; Yx++) Xx[Yx] = 252 <= Yx ? 6 : 248 <= Yx ? 5 : 240 <= Yx ? 4 : 224 <= Yx ? 3 : 192 <= Yx ? 2 : 1;
        Xx[254] = Xx[254] = 1;
        var gw = function(a) {
            var b, c, d = a.length,
                e = 0;
            for (b = 0; b < d; b++) {
                var f = a.charCodeAt(b);
                if (55296 === (f & 64512) && b + 1 < d) {
                    var g = a.charCodeAt(b + 1);
                    56320 === (g & 64512) && (f = 65536 + (f - 55296 << 10) + (g - 56320), b++)
                }
                e += 128 > f ? 1 : 2048 > f ? 2 : 65536 > f ? 3 : 4
            }
            var k = new Y.Zc(e);
            for (b = c = 0; c < e; b++) f = a.charCodeAt(b), 55296 === (f & 64512) && b + 1 < d && (g = a.charCodeAt(b + 1), 56320 === (g & 64512) && (f = 65536 + (f - 55296 << 10) + (g - 56320), b++)), 128 > f ? k[c++] = f : (2048 > f ? k[c++] = 192 | f >>> 6 : (65536 > f ? k[c++] = 224 | f >>> 12 : (k[c++] = 240 | f >>> 18, k[c++] = 128 | f >>> 12 & 63), k[c++] = 128 |
                f >>> 6 & 63), k[c++] = 128 | f & 63);
            return k
        };
        var Pv = {};
        Pv = function(a, b, c, d) {
            var e = a & 65535 | 0;
            a = a >>> 16 & 65535 | 0;
            for (var f; 0 !== c;) {
                f = 2E3 < c ? 2E3 : c;
                c -= f;
                do e = e + b[d++] | 0, a = a + e | 0; while (--f);
                e %= 65521;
                a %= 65521
            }
            return e | a << 16 | 0
        };
        for (var Qv = {}, Zx, $x = [], ay = 0; 256 > ay; ay++) {
            Zx = ay;
            for (var by = 0; 8 > by; by++) Zx = Zx & 1 ? 3988292384 ^ Zx >>> 1 : Zx >>> 1;
            $x[ay] = Zx
        }
        Qv = function(a, b, c, d) {
            c = d + c;
            for (a ^= -1; d < c; d++) a = a >>> 8 ^ $x[(a ^ b[d]) & 255];
            return a ^ -1
        };
        var Fv = {};
        Fv = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version"
        };
        var uv = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
            xv = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
            fw = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
            Jv = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
            Kv = Array(576);
        gv(Kv);
        var Lv = Array(60);
        gv(Lv);
        var wv = Array(512);
        gv(wv);
        var tv = Array(256);
        gv(tv);
        var vv = Array(29);
        gv(vv);
        var yv = Array(30);
        gv(yv);
        var cw, dw, ew, bw = !1;
        var Yv;
        Yv = [new Wv(0, 0, 0, 0, function(a, b) {
            var c = 65535;
            for (c > a.Pb - 5 && (c = a.Pb - 5);;) {
                if (1 >= a.W) {
                    Rv(a);
                    if (0 === a.W && 0 === b) return 1;
                    if (0 === a.W) break
                }
                a.O += a.W;
                a.W = 0;
                var d = a.Bb + c;
                if (0 === a.O || a.O >= d)
                    if (a.W = a.O - d, a.O = d, Mv(a, !1), 0 === a.ia.ma) return 1;
                if (a.O - a.Bb >= a.ib - 262 && (Mv(a, !1), 0 === a.ia.ma)) return 1
            }
            a.wb = 0;
            if (4 === b) return Mv(a, !0), 0 === a.ia.ma ? 3 : 4;
            a.O > a.Bb && Mv(a, !1);
            return 1
        }), new Wv(4, 4, 8, 4, Sv), new Wv(4, 5, 16, 8, Sv), new Wv(4, 6, 32, 32, Sv), new Wv(4, 4, 16, 16, Tv), new Wv(8, 16, 32, 32, Tv), new Wv(8, 16, 128, 128, Tv), new Wv(8, 32,
            128, 256, Tv), new Wv(32, 128, 258, 1024, Tv), new Wv(32, 258, 258, 4096, Tv)];
        var aw = {};
        aw = function() {
            this.input = null;
            this.rd = this.lb = this.qd = 0;
            this.Ce = null;
            this.Rh = this.ma = this.Td = 0;
            this.msg = "";
            this.state = null;
            this.Bg = 2;
            this.ga = 0
        };
        var hw = Object.prototype.toString;
        $v.prototype.push = function(a, b) {
            var c = this.ia,
                d = this.options.Gk;
            if (this.ended) return !1;
            var e = b === ~~b ? b : !0 === b ? 4 : 0;
            "string" === typeof a ? c.input = gw(a) : "[object ArrayBuffer]" === hw.call(a) ? c.input = new Uint8Array(a) : c.input = a;
            c.qd = 0;
            c.lb = c.input.length;
            do {
                0 === c.ma && (c.Ce = new Y.Zc(d), c.Td = 0, c.ma = d);
                a = Zv(c, e);
                if (1 !== a && 0 !== a) return this.Eb(a), this.ended = !0, !1;
                if (0 === c.ma || 0 === c.lb && (4 === e || 2 === e))
                    if ("string" === this.options.Rj) {
                        var f = Y.Nh(c.Ce, c.Td);
                        b = f;
                        f = f.length;
                        if (65537 > f && (b.subarray && Wx || !b.subarray)) b =
                            String.fromCharCode.apply(null, Y.Nh(b, f));
                        else {
                            for (var g = "", k = 0; k < f; k++) g += String.fromCharCode(b[k]);
                            b = g
                        }
                        this.le.push(b)
                    } else b = Y.Nh(c.Ce, c.Td), this.le.push(b)
            } while ((0 < c.lb || 0 === c.ma) && 1 !== a);
            if (4 === e) return (c = this.ia) && c.state ? (d = c.state.status, 42 !== d && 69 !== d && 73 !== d && 91 !== d && 103 !== d && 113 !== d && 666 !== d ? a = Gv(c, -2) : (c.state = null, a = 113 === d ? Gv(c, -3) : 0)) : a = -2, this.Eb(a), this.ended = !0, 0 === a;
            2 === e && (this.Eb(0), c.ma = 0);
            return !0
        };
        $v.prototype.Eb = function(a) {
            0 === a && (this.result = "string" === this.options.Rj ? this.le.join("") : Y.Di(this.le));
            this.le = [];
            this.Hg = a;
            this.msg = this.ia.msg
        };
        var Nx = function() {};
        Nx.prototype.Mb = function() {
            try {
                return !!Uint8Array.from
            } catch (a) {
                return !1
            }
        };
        var dy = function() {
                this.g = cy()
            },
            cy = function() {
                return Sx(Mx(Ox(Qx(Rx(Px(function() {
                    return null
                }))))))
            };
        dy.prototype.log = function(a) {
            var b = this.g;
            if (a instanceof tx) b.log(a);
            else {
                var c = new tx;
                a = lw(a);
                c = _.I(c, 8, a);
                b.log(c)
            }
        };
        var ey = new dy;
        var fy = function(a) {
            _.J.call(this, a)
        };
        _.w(fy, _.J);
        var hy = function(a) {
            _.J.call(this, a, -1, gy)
        };
        _.w(hy, _.J);
        _.h = hy.prototype;
        _.h.ob = function() {
            return _.Sh(this, 16)
        };
        _.h.Uc = function(a) {
            _.I(this, 16, a)
        };
        _.h.qa = function() {
            return _.Sh(this, 1)
        };
        _.h.Da = function(a) {
            _.I(this, 1, a)
        };
        _.h.Li = function() {
            return _.Sh(this, 53)
        };
        var gy = [26, 80];
        for (var iy, jy = Array(36), ky = 0, ly, my = 0; 36 > my; my++) 8 == my || 13 == my || 18 == my || 23 == my ? jy[my] = "-" : 14 == my ? jy[my] = "4" : (2 >= ky && (ky = 33554432 + 16777216 * Math.random() | 0), ly = ky & 15, ky >>= 4, jy[my] = _.ap[19 == my ? ly & 3 | 8 : ly]);
        iy = jy.join("");
        var oy = function(a) {
                var b = ny;
                var c = new hy;
                c = _.I(c, 50, _.Jo);
                var d = new fy;
                a = _.I(d, 1, a);
                a = _.I(a, 2, _.No);
                b = _.I(a, 3, b.Zg);
                return _.Uh(c, 112, b)
            },
            py = function(a) {
                var b = new tx;
                a = lw(a);
                b = _.I(b, 8, a);
                ey.log(b)
            },
            qy = function(a) {
                var b = ny;
                a.Uc(b.Je);
                a.Da(b.Le)
            };
        var ny = _.lm(function(a) {
                a = void 0 === a ? {} : a;
                this.Zg = void 0 === a.Zg ? iy : a.Zg;
                this.Le = this.Je = null
            }),
            ry = function(a, b, c, d, e, f, g, k, l, m, n) {
                _.z.call(this);
                this.La = b || null;
                this.P = !!c;
                this.Bd = d || "transparent";
                this.K = f || "";
                b = g || {
                    fetchStart: 0,
                    io: 0
                };
                a = b.fetchStart || 0;
                b = b.fetchEnd || 0;
                this.M = a && b ? b - a : 0;
                this.T = Date.now() - _.Lo;
                this.o = !1;
                this.g = new _.Fp(e || "", void 0, f, l, m, n);
                this.I = new _.Op(1);
                this.s = new _.Jt;
                this.j = null;
                this.B = !0;
                this.l = null != _.q.IntersectionObserver;
                this.C = k || null;
                this.H = new _.F(this);
                e = new _.cp;
                f =
                    new _.ep((0, _.x)(this.g.initialize, this.g, e.register()));
                this.Xe = _.fp(f, e.delay((0, _.x)(this.Xe, this)));
                this.We = _.fp(f, e.delay((0, _.x)(this.We, this)));
                this.Ye = _.fp(f, e.delay((0, _.x)(this.Ye, this)));
                this.restore = _.fp(f, e.delay((0, _.x)(this.restore, this)));
                f.finish();
                e.finish();
                py(oy(1));
                performance && performance.mark && performance.mark("translate:initialized", void 0)
            };
        _.y(ry, _.z);
        _.pp.attach(14097, ry.prototype, {
            ih: function() {
                _.Zi(this.g.Mb() ? "te_afas" : "te_afau")
            }
        });
        _.h = ry.prototype;
        _.h.Hm = function(a) {
            this.l = a
        };
        _.h.fb = function() {
            return this.g.Mb()
        };
        _.h.Xe = function(a, b) {
            this.g.fb() ? this.g.l.send(_.cj(b), a) : (this.ih(), a(null))
        };
        _.h.We = function(a) {
            var b = document.documentElement.lang;
            if (b) a(b);
            else if (this.g.fb()) {
                b = new _.An(document.body, !1, !1, 1, 1);
                for (var c = [], d = 0, e = this.g.h.lh; c.length + d < e;) {
                    var f = b.next();
                    if (f.done) break;
                    f = f.value;
                    1 == b.g && _.gu(f) ? b.Dc() : 3 == f.nodeType && (f = (0, _.Wb)(_.Pj(f.nodeValue))) && (c.push(f), d += f.length)
                }
                _.Gp(this.g, a, c.join(" "))
            } else this.ih(), a(null, !0)
        };
        _.h.Ye = function(a, b, c, d, e) {
            ny.Je = a;
            ny.Le = b;
            var f = oy(2);
            qy(f);
            py(f);
            f = {
                detail: {
                    sourceLanguage: a,
                    targetLanguage: b
                }
            };
            performance && performance.mark && performance.mark("translate:initiated", f);
            f = Date.now();
            ow();
            if (!a || Pw(a, b)) a = "auto";
            if (e || a != this.h || b != this.V) this.s = new _.Jt;
            this.h = a;
            this.V = b;
            this.g.fb() ? (d = d || document.documentElement, this.j && this.j.S(), this.C.reset(), this.j = new _.Iu(d, this.g, this.La, this.P, this.Bd, !0, this.I, this.s, this.l, this.C), this.j.la = this.o, this.B = !0, this.j.translate(a, b, c, e, (0, _.x)(this.bm,
                this, f, a, b))) : (this.ih(), c(0, !1, !0))
        };
        _.h.fk = function() {
            return !!this.j && this.j.g
        };
        _.h.gi = function(a) {
            this.o = a
        };
        _.h.restore = function() {
            var a = oy(3);
            qy(a);
            py(a);
            performance && performance.mark && performance.mark("translate:restored", void 0);
            ow();
            this.g.fb() && this.j && this.j.restore()
        };
        _.h.L = function() {
            nw();
            ry.G.L.call(this);
            this.g.S();
            this.j = this.g = null;
            this.s = new _.Jt
        };
        _.h.bm = function(a, b, c, d) {
            this.B && (this.B = !1, b = {
                sl: b,
                tl: c,
                textlen: d
            }, this.o && (b.ctt = "1"), "" != this.K && (b.sp = this.K), b.ttt = Date.now() - a, b.ttl = this.T, this.M && (b.ttf = this.M), this.l && (b.sr = 1), _.Zi("te_time", b))
        };
        var sy = function(a) {
            _.M.call(this, a);
            this.H = new _.F(this)
        };
        _.w(sy, _.M);
        sy.prototype.N = function() {
            var a = _.yh(this.g, "select");
            a.className = "goog-te-combo";
            a.setAttribute("aria-label", _.V.hi);
            this.na(a)
        };
        sy.prototype.ba = function() {
            _.M.prototype.ba.call(this);
            this.Ai()
        };
        sy.prototype.Ai = function() {
            _.D(this.A(), "change", _.ip(this, "change"));
            this.dispatchEvent("load")
        };
        sy.prototype.ja = function() {
            _.M.prototype.ja.call(this);
            this.H.S();
            this.H = null
        };
        var ty = function(a, b) {
            a.A().parentNode != b && (a.A().parentNode.removeChild(a.A()), b.appendChild(a.A()))
        };
        _.h = sy.prototype;
        _.h.He = function(a) {
            this.g.Ee(this.A());
            for (var b in a)
                if (a[b] !== Object.prototype[b]) {
                    var c = this.g.N("OPTION", {
                        value: b
                    });
                    this.g.Rb(c, a[b]);
                    this.A().appendChild(c)
                }
            this.A().selectedIndex = 0
        };
        _.h.Na = function() {
            return this.A().value
        };
        _.h.hb = function(a) {
            if (this.A().value != a)
                for (var b = 0, c; c = this.A().options.item(b); ++b)
                    if (c.value == a) {
                        this.A().selectedIndex = b;
                        break
                    }
        };
        _.h.Ze = function(a) {
            if ("undefined" == _.mb(a)) return this.A().options.item(this.A().selectedIndex).text;
            for (var b = 0, c; c = this.A().options.item(b); ++b)
                if (c.value == a) return c.text
        };
        _.h.Ca = function(a) {
            this.A().disabled = !a
        };
        var uy = function(a) {
            sy.call(this, a)
        };
        _.w(uy, sy);
        uy.prototype.Ie = function(a) {
            this.He.call(this, a)
        };
        var vy = function(a, b) {
            sy.call(this, b);
            this.F = a && _.pi(a) || {};
            this.F.Dh = this.F.Dh || 11;
            this.F.Rf = 0 != this.F.Rf;
            this.F.Vb || (this.F.Vb = _.Wo)
        };
        _.w(vy, sy);
        _.h = vy.prototype;
        _.h.kf = function() {
            throw Error("Ua");
        };
        _.h.N = function() {
            this.kf();
            this.o = this.A();
            this.j = _.bk("IFRAME", {
                frameBorder: 0,
                "class": "goog-te-menu-frame skiptranslate",
                title: _.V.hi
            });
            this.j.style.visibility = "visible";
            _.O(this.j, !1);
            document.body.appendChild(this.j)
        };
        _.h.Ai = function() {
            var a = _.Df.test(_.Jo) ? "rtl" : "ltr",
                b = _.Ib(this.F.Vb),
                c = _.T(this, "menuBody");
            this.H.D(this.j, "load", this.gk);
            Ow(this.j, (0, _.x)(function() {
                var d = _.nk(this.j);
                var e = (0, _.L)('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' + _.P(Kw(b)) + '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' + _.P(a) + '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' + _.P(c) + '" class="goog-te-menu"></div></body>');
                e = _.yi(e);
                d.write(_.Nc(e));
                d.close()
            }, this))
        };
        _.h.gk = function() {
            this.h = new _.Yc(_.nk(this.j));
            this.I = this.h.A(_.T(this, "menuBody"));
            this.H.D(this.o, "click", this.Rg);
            _.B ? this.H.D(this.j, "blur", this.uf) : this.H.D(tw(this.j), "blur", this.uf);
            this.dispatchEvent("load")
        };
        _.h.ja = function() {
            sy.prototype.ja.call(this);
            _.hk(this.j);
            this.o = this.Z = this.l = this.I = this.h = this.j = null
        };
        _.h.Si = function(a) {
            this.qb != a.currentTarget.value && (this.hb(a.currentTarget.value), this.dispatchEvent("change"));
            this.uf()
        };
        _.h.Rg = function() {
            wy(this);
            tw(this.j).focus();
            this.ca = !0
        };
        _.h.uf = function() {
            this.ca && (this.ca = !1, wy(this, !1), _.ed(_.C(this.o)).focus())
        };
        _.h.zh = function() {};
        _.h.Ah = function() {};
        var wy = function(a, b) {
            if ("undefined" == typeof b || b) {
                a.Ah();
                b = _.hl(a.o, window);
                var c = b.y + a.o.offsetHeight,
                    d = b.y - a.s.height,
                    e = b.x,
                    f = b.x + a.o.offsetWidth - a.s.width;
                if (_.B && !_.vc("7.0")) {
                    var g = document.body;
                    c -= g.offsetTop;
                    d -= g.offsetTop;
                    e -= g.offsetLeft;
                    f -= g.offsetLeft
                } else g = _.pj(document), c -= g.y, d -= g.y, e -= g.x, f -= g.x;
                g = _.dd(window);
                b.y = b.y <= g.height - a.s.height ? c : d;
                b.y > g.height - a.s.height && (b.y = g.height - a.s.height);
                0 > b.y && (b.y = 0);
                _.Df.test(_.Jo) ? b.x = 0 <= f ? f : e : b.x = e <= g.width - a.s.width ? e : f;
                b.x > g.width - a.s.width &&
                    (b.x = g.width - a.s.width);
                0 > b.x && (b.x = 0);
                _.al(a.j, b);
                _.O(a.j, !0);
                xy(a)
            } else a.zh(), _.O(a.j, !1)
        };
        _.h = vy.prototype;
        _.h.Na = function() {
            return this.qb
        };
        _.h.He = function(a) {
            this.h.Ee(this.I);
            _.O(this.j, !0);
            this.da = a;
            this.l = [];
            for (var b in a)
                if (a[b] !== Object.prototype[b])
                    if ("---" == a[b]) {
                        var c = {
                            link: this.h.N("DIV", {
                                className: "goog-te-menu2-separator",
                                value: b
                            }),
                            Pl: !0
                        };
                        this.l.push(c)
                    } else {
                        c = {
                            link: this.h.N("A", {
                                className: "goog-te-menu2-item-selected",
                                href: "javascript:void(0)",
                                value: b
                            })
                        };
                        this.l.push(c);
                        var d = this.h.N("DIV", {
                            style: "white-space:nowrap"
                        });
                        this.h.appendChild(c.link, d);
                        this.F.Rf && this.h.appendChild(d, this.h.N("SPAN", {
                            className: "indicator"
                        }, "\u203a"));
                        this.h.appendChild(d, this.h.N("SPAN", {
                            className: "text"
                        }, a[b]));
                        this.H.D(c.link, "click", this.Si)
                    }
            a = this.l.length - 1;
            a = Math.round((a - a % this.F.Dh) / this.F.Dh) + 1;
            this.Z = this.h.N("TABLE", {
                cellspacing: 0,
                cellpadding: 0,
                border: 0
            });
            c = this.h.N("TBODY");
            b = this.h.N("TR", {
                valign: "top"
            });
            this.I.className = "goog-te-menu2";
            this.h.appendChild(this.I, this.Z);
            this.h.appendChild(this.Z, c);
            this.h.appendChild(c, b);
            for (d = c = 0; c < a; ++c) {
                var e = this.h.N("TD");
                this.h.appendChild(b, e);
                for (var f = 0; 11 > f && d < this.l.length; ++f, ++d) this.h.appendChild(e,
                    this.l[d].link);
                c != a - 1 && (e = this.h.N("TD", {
                    "class": "goog-te-menu2-colpad"
                }, "\u00a0"), this.h.appendChild(b, e))
            }
            this.qb = null;
            this.hb(this.l[0].link.value);
            xy(this);
            _.O(this.j, !1)
        };
        _.h.Ze = function(a) {
            return this.da["undefined" == _.mb(a) ? this.qb : a]
        };
        _.h.Bh = function() {};
        _.h.hb = function(a) {
            if (this.qb != a) {
                this.Ze(a) && (this.qb = a, this.Bh());
                for (var b = 0; b < this.l.length; ++b) {
                    var c = this.l[b];
                    c.Pl || (c.link.className = c.link.value == a && this.F.Rf ? "goog-te-menu2-item-selected" : "goog-te-menu2-item")
                }
            }
        };
        var xy = function(a) {
                _.tl(a.I, _.ll(a.Z));
                _.tl(a.j, _.ll(a.I));
                a.s = _.ll(a.j)
            },
            yy = function(a, b) {
                vy.call(this, a, b)
            };
        _.w(yy, vy);
        _.h = yy.prototype;
        _.h.kf = function() {
            var a = this.g.N("a", {
                "aria-haspopup": "true"
            });
            a.className = "goog-te-menu-value";
            a.href = "javascript:void(0)";
            this.C = this.g.N("SPAN");
            a.appendChild(this.C);
            this.R = this.g.N("IMG", {
                src: "https://www.google.com/images/cleardot.gif",
                alt: "",
                style: "background-image:url(" + _.So + ");background-position:-14px 0px;border:none",
                width: 14,
                height: 14
            });
            a.appendChild(this.R);
            this.na(a)
        };
        _.h.zh = function() {
            _.K(this.R, "backgroundPosition", "-14px 0px")
        };
        _.h.Ah = function() {
            _.K(this.R, "backgroundPosition", "0px 0px")
        };
        _.h.ja = function() {
            vy.prototype.ja.call(this);
            this.R = this.C = null
        };
        _.h.Bh = function() {
            this.g.Rb(this.C, this.Ze(this.qb) || "")
        };
        _.h.Ie = function(a) {
            this.He.call(this, a)
        };
        var zy = function(a, b) {
            vy.call(this, a, b)
        };
        _.w(zy, vy);
        _.h = zy.prototype;
        _.h.kf = function() {
            var a = this.g.N("a", {
                "aria-haspopup": "true"
            });
            a.className = "goog-te-menu-value";
            a.href = "javascript:void(0)";
            this.C = this.g.N("SPAN");
            a.appendChild(this.C);
            a.appendChild(this.g.N("IMG", {
                src: "https://www.google.com/images/cleardot.gif",
                alt: "",
                width: 1,
                height: 1
            }));
            a.appendChild(this.g.N("SPAN", {
                style: "border-left:1px solid #bbb"
            }, "\u200b"));
            a.appendChild(this.g.N("IMG", {
                src: "https://www.google.com/images/cleardot.gif",
                alt: "",
                width: 1,
                height: 1
            }));
            this.R = this.g.N("span", {
                style: "color:#767676",
                "aria-hidden": "true"
            }, "\u25bc");
            a.appendChild(this.R);
            this.na(a)
        };
        _.h.zh = function() {
            _.K(this.R, "color", "#9b9b9b")
        };
        _.h.Ah = function() {
            _.K(this.R, "color", "#d5d5d5")
        };
        _.h.ja = function() {
            vy.prototype.ja.call(this);
            this.R = this.C = null
        };
        _.h.Bh = function() {
            this.g.Rb(this.C, this.Ze(this.qb) || "")
        };
        _.h.Ie = function(a) {
            this.He.call(this, a)
        };
        var Ay = function(a, b) {
            vy.call(this, a, b);
            this.F.Rf = !1
        };
        _.w(Ay, vy);
        Ay.prototype.kf = function() {
            var a = _.yh(this.g, "div");
            a.className = "goog-te-button";
            var b = this.g.N("DIV", {
                style: "background: url(" + _.Ro + ") repeat-x 0 -39px"
            });
            a.appendChild(b);
            this.C = _.yh(this.g, "button");
            b.appendChild(this.C);
            this.na(a)
        };
        Ay.prototype.Hj = function(a) {
            _.id(this.C);
            this.C.appendChild(this.g.X.createTextNode(String(a + "\u00a0\u25bc")))
        };
        Ay.prototype.ja = function() {
            vy.prototype.ja.call(this);
            this.C = null
        };
        Ay.prototype.Si = function(a) {
            this.hb(a.currentTarget.value);
            this.dispatchEvent("change");
            this.uf()
        };
        var By = function() {
            this.h = {};
            this.g = 0
        };
        By.prototype.j = function(a, b) {
            a = this.h[b];
            if (!a) return b;
            b = "";
            a.Oh && (b += "<" + a.Oh + a.attributes + ">");
            a.Xg && (b += a.Xg);
            a.Gg && (b += "</" + a.Gg + ">");
            return b
        };
        By.prototype.Oh = function(a, b) {
            _.Hj(a);
            return Cy(this, {
                Oh: a,
                attributes: _.Lj(b)
            })
        };
        By.prototype.Gg = function(a) {
            _.Hj(a);
            return Cy(this, {
                Gg: a
            })
        };
        By.prototype.text = function(a) {
            return Cy(this, {
                Xg: _.Tj(a)
            })
        };
        var Cy = function(a, b) {
            a.g++;
            var c = "{SafeHtmlFormatter:" + a.g + "_" + _.Xc() + "}";
            a.h[_.Tj(c)] = b;
            return c
        };
        var Dy = function(a, b) {
            _.M.call(this, b);
            this.F = a && _.pi(a) || {};
            this.H = new _.F(this)
        };
        _.y(Dy, _.M);
        var Ey = {
            Zn: 0,
            vn: 1,
            Pn: 2
        };
        _.h = Dy.prototype;
        _.h.N = function() {
            var a = _.yh(this.g, "div");
            _.R(a, "skiptranslate");
            _.R(a, "goog-te-gadget");
            a.dir = _.Df.test(_.Jo) ? "rtl" : "ltr";
            _.O(a, !1);
            if (2 == this.F.od) {
                var b = Ww({
                    id: _.T(this, "targetLanguage"),
                    Aj: "",
                    zj: ""
                });
                _.Ci(a, _.Ai(b))
            } else {
                b = new By;
                var c = _.ts({
                        dj: _.B && !_.vc("7.0"),
                        Pd: "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png",
                        mj: "https://translate.google.com"
                    }),
                    d = _.V,
                    e = d.ki;
                c = _.yi(c);
                c = Cy(b, {
                    Xg: _.Nc(c).toString()
                });
                d = e.call(d, c);
                e = _.Tj("SafeHtmlFormatter:");
                b = _.Tj(d).replace(new RegExp("\\{" +
                    e + "[\\w&#;]+\\}", "g"), (0, _.x)(b.j, b, []));
                b = _.Oc(b);
                b = Ww({
                    id: _.T(this, "targetLanguage"),
                    Aj: "",
                    zj: 1 == this.F.od ? _.Jj("\u00a0", "\u00a0", b) : b
                });
                _.Ci(a, _.Ai(b))
            }
            this.na(a)
        };
        _.h.ba = function() {
            Dy.G.ba.call(this);
            this.j = 2 == this.F.od ? new zy(null, this.g) : new uy(this.g);
            this.H.D(this.j, "change", _.ip(this, "chg_tgt_lang"));
            this.H.D(this.j, "load", this.hk);
            var a = this.g.A(_.T(this, "targetLanguage"));
            if (2 == this.F.od) {
                var b = this.g.N("IMG", {
                    src: "https://www.google.com/images/cleardot.gif",
                    "class": "goog-te-gadget-icon",
                    alt: ""
                });
                b.style.backgroundImage = "url(" + _.So + ")";
                b.style.backgroundPosition = "-65px 0px";
                var c = this.g.N("SPAN", {
                    style: "vertical-align: middle"
                });
                a.appendChild(b);
                a.appendChild(c);
                this.j.ta(c);
                a.style.whiteSpace = "nowrap";
                a.className = "goog-te-gadget-simple"
            } else this.j.ta(a), 1 == this.F.od && (a.style.display = "inline")
        };
        _.h.hk = function() {
            if (2 == this.F.od) {
                var a = this.j,
                    b = this.g.A(_.T(this, "targetLanguage"));
                a.H.Fa(a.o, "click", a.Rg);
                a.o = b;
                a.H.D(a.o, "click", a.Rg)
            }
            this.dispatchEvent("load")
        };
        _.h.ja = function() {
            Dy.G.ja.call(this);
            this.H.S();
            this.H = null;
            this.j.S();
            this.j = null
        };
        _.h.qa = function() {
            return this.j.Na()
        };
        _.h.hc = function(a) {
            this.j.Ie(a)
        };
        _.h.Da = function(a) {
            "" == a ? this.I && this.hc(this.I) : this.C && this.hc(this.C);
            this.j.hb(a)
        };
        _.h.U = function(a) {
            _.O(this.A(), a)
        };
        _.h.Ca = function(a) {
            this.j.Ca(a)
        };
        _.h.Lh = function(a, b) {
            this.I = a;
            this.C = b
        };
        var Fy = function(a, b) {
            _.M.call(this, b);
            this.F = a && _.pi(a) || {};
            this.F.Vb || (this.F.Vb = _.Wo);
            this.H = new _.F(this)
        };
        _.y(Fy, _.M);
        var Gy = {
            Un: 1,
            Vn: 2,
            fn: 3,
            dn: 4
        };
        _.h = Fy.prototype;
        _.h.N = function() {
            var a = _.yh(this.g, "div");
            this.Ma = !1;
            _.O(a, !1);
            var b = _.T(this, "container");
            b = (0, _.L)('<iframe id="' + _.P(b) + '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>');
            _.Ci(a, _.Ai(b));
            this.na(a)
        };
        _.h.ba = function() {
            Fy.G.ba.call(this);
            var a = _.Df.test(_.Jo) ? "rtl" : "ltr",
                b = _.Ib(this.F.Vb),
                c = _.T(this, "translate");
            this.A().id = _.T(this, "floatContainer");
            var d = {
                id: this.A().id,
                className: "goog-te-ftab-float"
            };
            this.A().className += " goog-te-ftab-float";
            switch (this.F.qf) {
                case 2:
                    var e = "goog-float-top";
                    d.top = 0;
                    d.right = 20;
                    break;
                case 3:
                    e = "goog-float-bottom";
                    d.bottom = 0;
                    d.right = 20;
                    break;
                case 4:
                    e = "goog-float-bottom";
                    d.bottom = 0;
                    d.left = 20;
                    break;
                default:
                    e = "goog-float-top", d.top = 0, d.left = 20
            }
            Hw(qw(new _.Jf, d), this.A());
            this.o = this.g.A(_.T(this, "container"));
            this.H.D(this.o, "load", this.ik);
            Ow(this.o, (0, _.x)(function() {
                var f = _.nk(this.o);
                var g = e;
                var k = _.V.lg;
                g = (0, _.L)('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' + _.P(Kw(b)) + '"></head><body class="goog-te-ftab ' + _.P(g) + '" scroll="no" style="overflow:hidden" dir="' + _.P(a) + '"><a id="' + _.P(c) + '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="' + _.P(_.Sl("https://www.google.com/images/cleardot.gif")) +
                    '" style="background-image:url(' + _.P(_.Sl(_.So)) + ');background-position:-65px 0px"><span>' + _.Kl(k) + "</span></a></body>");
                g = _.yi(g);
                f.write(_.Nc(g));
                f.close()
            }, this))
        };
        _.h.ik = function() {
            this.h = (new _.Yc(_.nk(this.o))).A(_.T(this, "translate"));
            this.H.D(this.h, "click", _.ip(this, "clk_trans"));
            _.O(this.A(), !0);
            var a = _.ll(this.h);
            _.O(this.A(), !1);
            _.tl(this.o, a);
            _.tl(this.A(), a);
            this.dispatchEvent("load")
        };
        _.h.ja = function() {
            Fy.G.ja.call(this);
            this.H.S();
            this.H = null;
            _.hk(this.o);
            this.h = this.o = null
        };
        _.h.isVisible = function() {
            return this.Ma
        };
        _.h.U = function(a) {
            this.Ma = a;
            _.O(this.A(), a)
        };
        var Hy = function(a, b) {
            _.M.call(this, b);
            this.H = new _.F(this);
            this.F = a && _.pi(a) || {};
            this.F.Vb || (this.F.Vb = _.Wo);
            this.F.Mh = !1;
            _.K(this.g.X.body, "position", "relative");
            _.Tg || _.K(this.g.X.body, "minHeight", "100%");
            _.K(this.g.X.documentElement, "height", "100%");
            _.K(this.g.X.body, "top", "0px");
            _.B && (window._bannerquirkfixleft = -parseInt("0" + this.g.X.body.leftMargin, 10), window._bannerquirkfixtop = -parseInt("0" + this.g.X.body.topMargin, 10) - 40)
        };
        _.y(Hy, _.M);
        _.h = Hy.prototype;
        _.h.ta = function() {
            var a = this.g.X.body.firstChild;
            _.Em(this, a.parentNode, a)
        };
        _.h.N = function() {
            var a = _.yh(this.g, "div");
            this.Ma = !1;
            _.O(a, !1);
            _.R(a, "skiptranslate");
            var b = _.T(this, "container");
            b = (0, _.L)('<iframe id="' + _.P(b) + '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>');
            _.Ci(a, _.Ai(b));
            this.na(a)
        };
        _.h.ba = function() {
            Hy.G.ba.call(this);
            var a = _.Df.test(_.Jo) ? "rtl" : "ltr",
                b = _.Ib(this.F.Vb),
                c = _.T(this, "promptSection"),
                d = _.T(this, "confirm"),
                e = _.T(this, "progressSection"),
                f = _.T(this, "progressValue"),
                g = _.T(this, "cancel"),
                k = _.T(this, "finishSection"),
                l = _.T(this, "restore"),
                m = _.T(this, "errorSection"),
                n = _.T(this, "errorContent"),
                p = _.T(this, "close"),
                t = _.T(this, "noAutoPopup"),
                r, v = [];
            this.F.Mh && v.push(Vw({
                id: _.T(this, "promptSourceLang")
            }));
            v.push(Vw({
                id: _.T(this, "promptTargetLang")
            }));
            var H = _.Oc(_.V.Bk.apply(null,
                v));
            v = [];
            this.F.Mh && v.push(Vw({
                id: _.T(this, "finishSourceLang")
            }));
            v.push(Vw({
                id: _.T(this, "finishTargetLang")
            }));
            var Q = _.Oc(_.V.vk.apply(null, v));
            this.F.Nj && (r = this.F.Nj);
            this.o = this.g.A(_.T(this, "container"));
            this.H.D(this.o, "load", this.jk);
            Ow(this.o, (0, _.x)(function() {
                var Xa = _.nk(this.o);
                var qa = r;
                var Ef = _.V.zd,
                    bA = _.V.lg,
                    cA = _.V.xk,
                    dA = _.V.Wf,
                    eA = _.V.li,
                    fA = _.V.Xh,
                    gA = _.V.Xh;
                qa = (0, _.L)('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' +
                    _.P(Kw(b)) + '"></head><body class="goog-te-banner" scroll="no" border=0 dir="' + _.P(a) + '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="' + _.P(_.Ql("https://translate.google.com")) + '" class="goog-logo-link" target="_blank"><img src="' + _.P(_.Sl("https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_68x28dp.png")) + '" alt="Google ' + _.P(Ef) + '"></a></td>' + (qa ? '<td width=1><img src="' + _.P(_.Sl("https://www.google.com/images/cleardot.gif")) +
                        '" width="9" height="15" title="' + _.P(qa) + '" alt="' + _.P(qa) + '" style="background-image:url(' + _.P(_.Sl(_.So)) + ');background-position:-56px 0px;margin:0 4px"></td>' : "") + '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' + _.P(c) + '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">' + _.Kl(H) + '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + _.P(d) + '"><b>' +
                    _.Kl(bA) + '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + _.P(t) + '"></button></div></div></td></tr><tr id="' + _.P(e) + '" style="display:none" valign=middle><td><span class="goog-te-banner-content">' + _.Kl(cA) + '&nbsp;<span dir="ltr">(<b id="' + _.P(f) + '"></b>%)</span>&nbsp;<img src="' + _.P(_.Sl(_.Uo)) + '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + _.P(g) + '">' + _.Kl(dA) +
                    '</button></div></div></td></tr><tr id="' + _.P(k) + '" style="display:none"><td><span class="goog-te-banner-content">' + _.Kl(Q) + '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + _.P(l) + '">' + _.Kl(eA) + '</button></div></div></td></tr><tr id="' + _.P(m) + '" style="display:none" valign=middle><td><span id="' + _.P(n) + '" class="goog-te-banner-content"></span></td></tr></table></td><td class="goog-te-banner-margin"></td><td width=1 id="options"></td><td width=1><a id="' +
                    _.P(p) + '" class="goog-close-link" href="javascript:void(0)" title="' + _.P(fA) + '"><img src="' + _.P(_.Sl("https://www.google.com/images/cleardot.gif")) + '" width="15" height="15" alt="' + _.P(gA) + '" style="background-image:url(' + _.P(_.Sl(_.So)) + ');background-position:-28px 0px"></a></td></tr></table></body>');
                qa = _.yi(qa);
                Xa.write(_.Nc(qa));
                Xa.close()
            }, this))
        };
        _.h.jk = function() {
            this.h = new _.Yc(_.nk(this.o));
            Iy(this, _.V.Zh);
            if (this.F.Vb == _.Wo) {
                var a = "url(" + _.Ro + ")";
                _.K(this.h.X.body, "backgroundImage", a);
                for (var b = this.h.X.getElementsByTagName("button"), c = 0; c < b.length; ++c) {
                    var d = b[c].parentNode;
                    _.K(d, "backgroundImage", a);
                    _.K(d, "backgroundRepeat", "repeat-x");
                    _.K(d, "backgroundPosition", "0 -39px")
                }
            }
            this.F.Mh && (this.l = new yy(this.F, this.h));
            this.j = new yy(this.F, this.h);
            this.s = new Ay(this.F, this.h);
            this.H.D(this.h.A(_.T(this, "confirm")), "click", _.ip(this, "clk_confirm"));
            this.H.D(this.h.A(_.T(this, "cancel")), "click", _.ip(this, "clk_cancel"));
            this.H.D(this.h.A(_.T(this, "restore")), "click", _.ip(this, "clk_restore"));
            this.H.D(this.h.A(_.T(this, "close")), "click", _.ip(this, "clk_close"));
            this.R = this.h.A(_.T(this, "noAutoPopup"));
            this.H.D(this.R, "click", _.ip(this, "clk_no_ap"));
            this.l && this.H.D(this.l, "change", _.ip(this, "chg_src_lang"));
            this.H.D(this.j, "change", _.ip(this, "chg_tgt_lang"));
            this.H.D(this.s, "change", this.wl);
            a = new _.cp((0, _.x)(this.kk, this));
            this.l && this.H.D(this.l,
                "load", a.register());
            this.H.D(this.j, "load", a.register());
            this.H.D(this.s, "load", a.register());
            a.finish();
            this.l && this.l.ta(this.h.A(_.T(this, "promptSourceLang")));
            this.j.ta(this.h.A(_.T(this, "promptTargetLang")));
            this.s.ta(this.h.A("options"))
        };
        _.h.kk = function() {
            this.s.Hj(_.V.pk);
            this.s.He({
                turn_off_site: _.V.zk,
                s1: "---",
                learn_more: _.V.nk
            });
            this.dispatchEvent("load")
        };
        _.h.wl = function() {
            switch (this.s.Na()) {
                case "learn_more":
                    window.open(_.$o, "_blank");
                    break;
                case "turn_off_site":
                    this.dispatchEvent("clk_no_ap_site")
            }
        };
        _.h.ja = function() {
            this.U(!1);
            Hy.G.ja.call(this);
            this.H.S();
            this.H = null;
            this.l && (this.l.S(), this.l = null);
            this.j.S();
            this.j = null;
            this.s.S();
            this.s = null;
            _.hk(this.o);
            this.oe = this.h = null
        };
        _.h.ob = function() {
            return this.l ? this.l.Na() : ""
        };
        _.h.qa = function() {
            return this.j.Na()
        };
        _.h.hc = function(a) {
            this.j.Ie(a)
        };
        _.h.Uc = function(a) {
            this.l && this.l.hb(a);
            this.Z && this.Z[a] && this.h.Rb(this.R, _.V.yk(this.Z[a]))
        };
        _.h.Da = function(a) {
            this.j.hb(a)
        };
        var Jy = function(a, b, c, d) {
            if (a.oe != b) {
                a.oe = b;
                if (0 == b) {
                    a.l && ty(a.l, a.h.A(_.T(a, "promptSourceLang")));
                    if (a.I) {
                        var e = a.qa();
                        a.hc(a.I);
                        a.Da(e)
                    }
                    ty(a.j, a.h.A(_.T(a, "promptTargetLang")))
                } else 2 == b && (a.l && ty(a.l, a.h.A(_.T(a, "finishSourceLang"))), a.C && (e = a.qa(), a.hc(a.C), a.Da(e)), ty(a.j, a.h.A(_.T(a, "finishTargetLang"))));
                e = {};
                e[-1] = a.h.A(_.T(a, "errorSection"));
                e[0] = a.h.A(_.T(a, "promptSection"));
                e[1] = a.h.A(_.T(a, "progressSection"));
                e[2] = a.h.A(_.T(a, "finishSection"));
                for (var f in e) e[f] !== Object.prototype[f] &&
                    _.O(e[f], f == b)
            }
            c && a.U(!0);
            a.R.parentNode.parentNode.style.display = d ? "block" : "none"
        };
        Hy.prototype.isVisible = function() {
            return this.Ma
        };
        Hy.prototype.U = function(a) {
            if (this.Ma != a) {
                this.Ma = a;
                if (_.B) var b = parseInt("0" + this.g.X.body.leftMargin, 10),
                    c = parseInt("0" + this.g.X.body.topMargin, 10);
                var d = "BackCompat" == this.g.X.compatMode;
                a ? (_.K(this.g.X.body, "top", "40px"), _.O(this.A(), !0), _.B && (_.vc("7.0") ? (window._bannerquirkfixleft = window._bannerquirkfixtop = 0, d && (this.g.X.body.topMargin = c + 40)) : d ? (this.g.X.body.topMargin = c + 40, window._bannerquirkfixleft = window._bannerquirkfixtop = 0) : (window._bannerquirkfixleft = -b, window._bannerquirkfixtop = -c - 40))) :
                    (_.K(this.g.X.body, "top", "0px"), _.O(this.A(), !1), d && 40 <= c && (this.g.X.body.topMargin = c - 40))
            }
        };
        Hy.prototype.Jh = function(a) {
            this.h.Rb(this.h.A(_.T(this, "progressValue")), a)
        };
        var Iy = function(a, b) {
            a.h.Rb(a.h.A(_.T(a, "errorContent")), b)
        };
        Hy.prototype.Lh = function(a, b) {
            this.I = a;
            this.C = b;
            this.hc(a)
        };
        var Ky = function(a, b) {
            _.z.call(this);
            "string" == _.mb(a) && (b = a, a = {});
            "string" == _.mb(b) && (b = _.Yj(String(b)));
            this.M = b;
            this.H = new _.F(this);
            this.T = this.sd = this.I = void 0;
            this.P = new Map;
            this.xh(Object(a));
            this.La = new _.rt({
                apiKey: this.F.apiKey,
                Mc: 1,
                Qf: !0,
                Rm: _.Yo
            }, {
                client: _.No,
                u: window.location.href
            });
            this.Qa = new ry(void 0, this.La, void 0, void 0, this.F.apiKey, void 0, void 0, new $w, this.I, this.sd, this.T);
            this.o = !1;
            this.H.D(window, "pagehide", this.S);
            this.Yg()
        };
        _.w(Ky, _.z);
        Ky.prototype.xh = function(a) {
            this.fa = "auto";
            var b;
            !(b = window.parent != window) && (b = (!window.external || !window.external.googleToolbarVersion || 6.2 > parseFloat(window.external.googleToolbarVersion)) && (!window.gtbExternal || !window.gtbExternal.isTranslateEnabled || !window.gtbExternal.isTranslateEnabled())) && (b = navigator.appVersion && navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/), b = !(b && b[2] && b[3] && 4001 <= 1E3 * Number(b[2]) + Number(b[3])));
            this.F = {
                rg: b,
                Ei: !1,
                sg: null,
                cf: null,
                md: [],
                Ed: [],
                Fg: !1,
                Ac: !1,
                apiKey: "",
                Gi: !1,
                Kg: "",
                od: 0,
                xi: !1
            };
            this.Y = {
                Vb: _.Wo,
                Nj: "https://" == _.Qo ? _.V.tk : null
            };
            this.K = {
                Vb: _.Wo,
                qf: null
            };
            a && ("autoDisplay" in a && (this.F.rg = this.F.rg && !!a.autoDisplay), "multilanguagePage" in a && (this.F.Ac = !!a.multilanguagePage), "gaTrack" in a && (this.F.Gi = !!a.gaTrack), "layout" in a && (this.F.od = a.layout), a.pageLanguage && (this.F.ec = _.jp(a.pageLanguage)), a.includedLanguages && (this.F.md = a.includedLanguages.split(",")), a.excludedLanguages && (this.F.Ed = a.excludedLanguages.split(",")), this.F.ec && (this.fa = this.F.ec),
                a.key && (this.F.apiKey = a.key), a.gaId && (this.F.Kg = a.gaId), this.K.qf = Number(a.floatPosition) || this.K.qf, "disableAutoTranslation" in a && (this.F.xi = !!a.disableAutoTranslation), a.jwtToken && (this.I = new Tw(a.jwtToken)), a.jwtTokenProvider && (this.I = new Uw(a.jwtTokenProvider)), a.translateErrorHandler && (this.sd = a.translateErrorHandler), a.remoteApiProxyHandlers && (this.T = a.remoteApiProxyHandlers));
            !this.F.xi && Ly(this) && (this.F.Ei = !0);
            this.l = {};
            if ((a = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) && a[2])
                for (this.l = {}, a = _.Wc(a[2]).split("|"), b = 0; b < a.length; ++b) {
                    var c = a[b].split("=");
                    c[0] && (this.l[c[0]] = c[1])
                }
        };
        var Ly = function(a) {
                function b(f, g) {
                    if (f = _.Wc(f).match("^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)")) {
                        if (f[3]) return g.F.sg = f[2], g.F.cf = f[3], !0;
                        if (f[6]) return g.F.sg = f[5], g.F.cf = f[6], !0
                    }
                    return !1
                }
                var c = {
                        url: function() {
                            var f = window.location.href.match(/#.*googtrans(.*)/);
                            return f && f[1]
                        },
                        cookie: function() {
                            var f = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/);
                            return f && f[2]
                        }
                    },
                    d;
                for (d in c)
                    if (c[d] !== Object.prototype[d]) {
                        var e = c[d]();
                        if (e && b(e, a)) return d
                    }
                return ""
            },
            My = function(a, b) {
                for (var c = window.location.hostname.split("."); 2 < c.length;) c.shift();
                c = ";domain=" + c.join(".");
                null != b ? a = a + "=" + b : (b = new Date, b.setTime(b.getTime() - 1), a = a + "=none;expires=" + b.toGMTString());
                a += ";path=/";
                document.cookie = a;
                try {
                    document.cookie = a + c
                } catch (d) {}
            },
            Ny = function(a, b) {
                var c = null;
                void 0 !== b && (c = void 0 !== a ? "/" + a + "/" + b : "/" + b);
                My("googtrans", c)
            };
        Ky.prototype.Sg = function(a) {
            this.V = _.jp(_.Jo);
            this.Nb = _.ej(a || {});
            this.Pa = {};
            this.C = {};
            a = !this.F.md.length;
            var b = _.bp(this.F.md),
                c = _.bp(this.F.Ed);
            this.Pa[_.Jo] = "";
            this.C[_.Jo] = "";
            for (var d in this.Nb.tl) this.Nb.tl[d] === Object.prototype[d] || !(a || d in b) || d in c || (this.C[d] = this.Nb.tl[d], d == this.F.ec && !this.F.Ac) || (this.Pa[d] = this.Nb.tl[d]);
            this.Pa[_.Jo] || delete this.Pa[_.Jo];
            this.C[_.Jo] || delete this.C[_.Jo];
            this.Sf = _.pi(this.Nb.sl)
        };
        Ky.prototype.Pg = function(a) {
            a && (this.fa = _.jp(a))
        };
        Ky.prototype.Tg = function() {
            delete this.vb;
            if (this.Nb) {
                this.fa = this.fa || this.F.sg;
                this.V = this.F.cf || this.V;
                var a = this.F.Ei || this.F.rg && this.fa != this.V && !(this.fa in _.Mo) && "1" != this.l.os && "1" != this.l["o" + this.fa];
                "zh-TW" == this.fa && (this.fa = "zh-CN");
                this.Sf[this.fa] || (a = !1, this.fa = "auto");
                if (!this.Pa[this.V])
                    if (a = !1, this.Pa.en) this.V = "en";
                    else
                        for (var b in this.Pa)
                            if (this.Pa[b] !== Object.prototype[b]) {
                                this.V = b;
                                break
                            }
                if (this.h) {
                    b = this.Pa;
                    var c = {
                            "": _.V.mi
                        },
                        d;
                    for (d in b) b[d] !== Object.prototype[d] && (c[d] =
                        b[d]);
                    this.h.Lh(c, this.C);
                    this.h.Da("")
                }!_.Ko && a ? this.F.cf ? _.fp(this.B, this.s.delay((0, _.x)(this.Pf, this, !0, !0))).call() : (this.o = !0, _.fp(this.B, this.s.delay((0, _.x)(this.Pf, this))).call(), _.Zi("te_ap", {
                    sl: this.fa
                })) : (this.j && this.j.U(!0), this.h && this.h.U(!0));
                window.google.translate.TranslateService && this.Ca(!1);
                this.B.finish()
            }
        };
        Ky.prototype.Yg = function() {
            this.vb = new _.cp((0, _.x)(this.Tg, this));
            this.s = new _.cp((0, _.x)(this.pl, this));
            this.B = new _.ep((0, _.x)(this.Rl, this));
            this.g = new Hy(this.Y);
            this.Qa.Xe(this.vb.register((0, _.x)(this.Sg, this)), _.Jo);
            this.M ? (this.h = new Dy(this.F), this.H.D(this.h, "load", this.vb.register()), this.H.D(this.h, "chg_tgt_lang", _.fp(this.B, this.s.delay((0, _.x)(this.ml, this)))), this.h.ta(this.M)) : this.K.qf && (this.j = new Fy(this.K), this.H.D(this.j, "load", this.vb.register()), this.H.D(this.j, "clk_trans",
                _.fp(this.B, this.s.delay((0, _.x)(this.ll, this)))), this.j.ta());
            !this.F.ec && this.F.Fg && this.Qa.We(this.vb.register((0, _.x)(this.Pg, this)));
            this.vb.finish();
            _.Yj("goog-gt-thumbUpButton") && (Oy(this), Py(this), Qy(this))
        };
        var Oy = function(a) {
                var b = _.Yj("goog-gt-thumbUpButton"),
                    c = a.P;
                b.addEventListener("click", function() {
                    kw(c, "up")
                }, !1)
            },
            Py = function(a) {
                var b = _.Yj("goog-gt-thumbDownButton"),
                    c = a.P;
                b.addEventListener("click", function() {
                    kw(c, "down")
                }, !1)
            },
            Qy = function(a) {
                var b = _.Yj("goog-gt-tt").dataset,
                    c = _.Yj("goog-gt-votingInputSrcLang"),
                    d = _.Yj("goog-gt-votingInputTrgLang"),
                    e = _.Yj("goog-gt-votingInputSrcText"),
                    f = _.Yj("goog-gt-votingInputTrgText"),
                    g = a.P;
                window.document.body.addEventListener("goog-gt-popupShown", function(k) {
                    var l =
                        k.detail;
                    k = String(l.df);
                    l = l.jc;
                    b.id = k;
                    k = g.get(k) || "";
                    jw(k);
                    c.value = l.ob();
                    d.value = l.qa();
                    e.value = l.wd();
                    f.value = l.I
                }, !1)
            };
        _.h = Ky.prototype;
        _.h.pl = function() {
            var a = this.g,
                b = this.Sf;
            a.l && a.l.Ie(b);
            a.Z = b;
            this.g.Lh(this.Pa, this.C);
            this.g.Uc(this.fa);
            this.g.Da(this.V);
            this.H.D(this.g, "clk_confirm", this.cl);
            this.H.D(this.g, "clk_cancel", this.bl);
            this.H.D(this.g, "clk_restore", this.Og);
            this.H.D(this.g, "clk_close", this.tf);
            this.H.D(this.g, "clk_no_ap", this.dl);
            this.H.D(this.g, "clk_no_ap_site", this.el);
            this.H.D(this.g, "chg_src_lang", this.Ni);
            this.H.D(this.g, "chg_tgt_lang", this.Ni);
            this.h && this.h.U(!0)
        };
        _.h.Rl = function() {
            this.H.D(this.g, "load", this.s.register());
            this.g.ta();
            this.s.finish()
        };
        _.h.L = function() {
            this.Qa.restore();
            _.z.prototype.L.call(this);
            this.Qa.S();
            this.H.S();
            this.H = null;
            this.g && this.g.S();
            this.g = null;
            this.j && this.j.S();
            this.j = null;
            this.h && this.h.S();
            this.M = this.h = null
        };
        _.h.cl = function() {
            !this.g.isVisible() || !this.F.Ac && Pw(this.fa, this.g.qa()) || (this.o && _.Zi("te_apt", {
                sl: this.fa
            }), Ry(this, !1), this.h && this.h.Da(this.g.qa()))
        };
        _.h.bl = function() {
            this.g.isVisible() && (Sy(this), Jy(this.g, 0), this.h && this.h.Da(""))
        };
        _.h.Og = function() {
            this.g.isVisible() && (Sy(this), Jy(this.g, 0));
            this.h && this.h.Da("")
        };
        _.h.tf = function() {
            this.g.isVisible() && (this.o && (this.o = !1, _.Zi("te_apc", {
                sl: this.fa
            })), Sy(this), this.g.U(!1), this.h && this.h.Da(""), this.j && this.j.U(!0))
        };
        _.h.dl = function() {
            this.g.isVisible() && (this.l["o" + this.fa] = "1", _.Zi("te_apr", {
                sl: this.fa
            }), this.o = !1, this.tf())
        };
        _.h.el = function() {
            if (this.g.isVisible()) {
                this.o = !1;
                this.l.os = "1";
                var a = null;
                if (this.l) {
                    a = [];
                    for (var b in this.l) this.l[b] !== Object.prototype[b] && a.push(b + "=" + this.l[b]);
                    a = a.join("|")
                }
                My("googtransopt", a);
                this.tf()
            }
        };
        _.h.Ni = function() {
            this.g.isVisible() && (!this.F.Ac && Pw(this.fa, this.g.qa()) ? this.Og() : (this.fa = this.g.ob() || this.fa, this.V = this.g.qa(), 2 == this.g.oe && (this.h && this.h.Da(this.g.qa()), Ry(this))))
        };
        _.h.Pf = function(a, b) {
            this.g.isVisible() || (this.j && this.j.U(!1), a ? Ry(this, b) : Jy(this.g, 0, !0, this.o))
        };
        _.h.Lm = function(a, b) {
            _.fp(this.B, this.s.delay((0, _.x)(this.Pf, this, a, b))).call()
        };
        _.h.ll = function() {
            this.Pf(2 == this.g.oe)
        };
        _.h.ml = function() {
            this.h.qa() ? !this.F.Ac && Pw(this.fa, this.g.qa()) ? this.Og() : (this.V = this.h.qa(), this.g.Da(this.V), Ry(this)) : this.h.Da(this.V)
        };
        var Ry = function(a, b) {
            if (window.google.translate.TranslateService) try {
                window.google.translate.TranslateService.getInstance().restore()
            } catch (c) {}
            Ny(a.fa, a.V);
            a.o = !1;
            !b && a.fa in _.Mo && _.Zi("te_ape", {
                sl: a.fa
            });
            a.g.Jh(0);
            Jy(a.g, 1, !0);
            a.Qa.gi(!!b);
            window.setTimeout((0, _.x)(a.Qa.Ye, a.Qa, a.F.Ac ? "auto" : a.fa, a.V, (0, _.x)(a.R, a), void 0, void 0), 0);
            if (a.F.Gi && window._gaq && window._gat) try {
                a.F.Kg ? window._gat._getTracker(a.F.Kg)._trackEvent("Google Website Translator", "Translate", a.V) : window._gat._getTrackerByName()._trackEvent("Google Website Translator",
                    "Translate", a.V)
            } catch (c) {}
        };
        Ky.prototype.R = function(a, b, c) {
            "function" == typeof this.Z && this.Z();
            this.g.isVisible() && 1 == this.g.oe && (c ? (Sy(this), Jy(this.g, -1, !0), 2 == c ? Iy(this.g, _.V.mk) : Iy(this.g, _.V.Zh)) : (this.g.Jh(a), b && (this.h && this.h.Da(this.V), this.g.Uc(this.fa), Jy(this.g, 2))))
        };
        var Sy = function(a) {
            Ny();
            window.setTimeout((0, _.x)(a.Qa.restore, a.Qa, null), 0)
        };
        Ky.prototype.Ca = function(a) {
            a || this.tf();
            this.h && this.h.Ca(a);
            this.j && this.j.U(a)
        };
        _.Yp();
        if (1 == _.ij) {
            var Ty = null,
                Uy = function(a) {
                    if (!Ty) {
                        var b, c, d, e;
                        a && ("key" in a && (b = a.key), "serverParams" in a && (c = a.serverParams), "timeInfo" in a && (d = a.timeInfo), "remoteApiProxyHandlers" in a && (e = a.remoteApiProxyHandlers), (a = Qw()) && (c = a));
                        a = 0;
                        if ("te_lib" == _.No || _.gc) a = 3;
                        Ty = new ry(void 0, new _.rt({
                            apiKey: b,
                            Mc: a,
                            Qf: !0,
                            trackVisibility: "tvis" == c
                        }), void 0, void 0, b, c, d, new $w, void 0, void 0, e);
                        Ty.constructor = function() {};
                        Ty.isAvailable = Ty.fb;
                        Ty.getSupportedLanguages = Ty.Xe;
                        Ty.getPageLanguage = Ty.We;
                        Ty.setClickThrough = Ty.gi;
                        Ty.translatePage = Ty.Ye;
                        Ty.restore = Ty.restore;
                        Ty.isTranslating = Ty.fk;
                        Ty.setCheckVisibility = Ty.Hm
                    }
                    return Ty
                };
            Uy.getInstance = function() {
                return Ty
            };
            _.tb("google.translate.TranslateService", Uy);
            _.Zi("te_li")
        } else {
            var Vy = null,
                Wy = function(a, b) {
                    Vy || (Vy = new Ky(a, b), Vy.constructor = function() {});
                    return Vy
                };
            Wy.getInstance = function() {
                return Vy
            };
            _.tb("google.translate.TranslateElement", Wy);
            Ky.prototype.dispose = Ky.prototype.S;
            Ky.prototype.showBanner = Ky.prototype.Lm;
            Ky.prototype.setEnabled = Ky.prototype.Ca;
            _.tb("google.translate.TranslateElement.FloatPosition",
                Gy);
            Gy.TOP_LEFT = 1;
            Gy.TOP_RIGHT = 2;
            Gy.BOTTOM_RIGHT = 3;
            Gy.BOTTOM_LEFT = 4;
            _.tb("google.translate.TranslateElement.InlineLayout", Ey);
            Ey.VERTICAL = 0;
            Ey.HORIZONTAL = 1;
            Ey.SIMPLE = 2
        }
        _.jj();

        _.oa();

    } catch (e) {
        _._DumpException(e)
    }
}).call(this, this.default_tr);
// Google Inc.