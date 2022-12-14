(function(_) {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var r, ba, ca, da, ha, ja, la, oa, ia, na, pa, qa, ra, ta, ua, Aa, Ba, Ca, Ea, Fa, Ha, Ga, Ia, Ja, Oa, Pa, Ra, Ta, Va, Xa, Za, eb, ib, mb, pb, nb, tb, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Jb, Kb, Ob, Pb, Qb, Sb, Tb, Vb, Wb, Xb, Yb, $b, ac, cc, ec, Zb, bc, jc, kc, mc, lc, pc, nc, rc, qc, oc, vc, wc, xc, zc, Dc, Ec, Gc, Jc, Kc, Ic, Lc, Nc, Pc, Uc, Wc, Rc, $c, cd, Xc, Yc, gd, hd, id, jd, ed, fd, kd, ld, nd, od, pd, qd, sd, xd, yd, B, Bd, Dd, Fd, Gd, Id, Jd, Kd, Ld, Nd, Pd, Rd, Td, ie, $d, ke, le, ne, te, Ae, xe, Fe, Ge, Je, Ke, Me, Ye, df, bf, cf, jf, nf, of , pf, Hf, Nf, Of, Qf, Rf, Vf, Wf, Xf, Tf, Uf, Yf, Zf, ag, $f, eg, gg, jg, kg, tg, yg, J, Eg, Sg, Wg, Yg, ah, ch, dh, eh, gh, jh, mh, oh, qh, ph, xh, yh, zh, Ah, rh, Bh, sh, Dh, Fh, Gh, Ih, Hh, Nh, Lh, Oh, Xh, $h, Sh, Th, ai, bi, di, ei, fi, gi, ki, qi, mi, ii, Ci, Ai, Bi, Di, Fi, Ii, Ki, L, Mi, Ni, Oi, Qi, Si, Ti, Ui, Wi, bj, Yi, Xi, Zi, $i, aj, tj, uj, wj, xj, Bj, Ej, Jj, Pj, Rj, Tj, Uj, Vj, Yj, bk, dk, fk, gk, ik, kk, lk, mk, jk, ka, ok, qk, rk, tk, yk, Gk, Hk, Jk, zk, Uk, Vk, Xk, Zk, fl, jl, kl, sl, tl, ul, vl, wl, Al, Bl, Cl, Dl, Fl, El, Gl, Hl, Il, Jl, Kl, Ll, Ol, Ql, Sl, Tl, Ul, Vl, Wl, Xl, Yl, ym, Fm, Km, Nm, Lm, Mm, Tm, Ym, $m, cn, gn, dn, jn, kn, ln, mn, pn, rn, yn, sn, tn, on, Bn, Dn, En, Hn, Mn, Zn, $n, bo, mo, po, qo, ro, xo, yo, Bo, Do, Eo, Jo, Ko, Po, Ro, So, To, $o, ep, gp, Vp, Xp, Yp, Zp, gq, iq, lq, oq, E, pq, qq, rq, sq, tq, w, uq, vq, wq, P, xq, yq, zq, Gq, Hq, Iq, ab, cb, db, Kq, Nq, Lq, Mq, Oq, Pq, zd, Qc, ma, fa, Tq, Uq, Vq, Wq, Lf;
    ba = function(a, b) {
        b = _.aa(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    ca = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    da = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    ha = function(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = _.ea(e) ? "o" + fa(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    };
    ja = function(a, b) {
        a.sort(b || ia)
    };
    la = function(a) {
        for (var b = ka, c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || ia;
        ja(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (b = 0; b < a.length; b++) a[b] = c[b].value
    };
    oa = function(a, b) {
        if (!ma(a) || !ma(b) || a.length != b.length) return !1;
        for (var c = a.length, d = na, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    ia = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    na = function(a, b) {
        return a === b
    };
    pa = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    qa = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = qa.apply(null, da(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    };
    ra = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    ta = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    ua = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    Aa = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < wa.length; f++) c = wa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    Ba = function() {
        var a = _.t.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    Ca = function(a) {
        return -1 != Ba().indexOf(a)
    };
    Ea = function(a) {
        for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };
    Fa = function() {
        return Ca("Firefox") || Ca("FxiOS")
    };
    Ha = function() {
        return Ca("Safari") && !(Ga() || Ca("Coast") || Ca("Opera") || Ca("Edge") || Ca("Edg/") || Ca("OPR") || Fa() || Ca("Silk") || Ca("Android"))
    };
    Ga = function() {
        return (Ca("Chrome") || Ca("CriOS")) && !Ca("Edge") || Ca("Silk")
    };
    Ia = function(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[_.v(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    };
    Ja = function() {
        var a = Ba();
        if (Ca("Trident") || Ca("MSIE")) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        a = Ea(a);
        b = Ia(a);
        return Ca("Opera") ? b(["Version", "Opera"]) : Ca("Edge") ? b(["Edge"]) : Ca("Edg/") ? b(["Edg"]) : Ca("Silk") ? b(["Silk"]) : Ga() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (a = a[2]) && a[1] || ""
    };
    _.Na = function(a) {
        if (a instanceof Ka) a = La(a);
        else {
            b: if (Ma) {
                try {
                    var b = new URL(a)
                } catch (c) {
                    b = "https:";
                    break b
                }
                b = b.protocol
            } else c: {
                b = document.createElement("a");
                try {
                    b.href = a
                } catch (c) {
                    b = void 0;
                    break c
                }
                b = b.protocol;b = ":" === b || "" === b ? "https:" : b
            }
            a = "javascript:" !== b ? a : void 0
        }
        return a
    };
    Oa = function(a) {
        throw Error("unexpected value " + a + "!");
    };
    Pa = function(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    Ra = function(a, b) {
        a.textContent = b instanceof Qa && b.constructor === Qa ? b.j : "type_error:SafeScript";
        Pa(a)
    };
    Ta = function(a, b) {
        a.src = Sa(b);
        Pa(a)
    };
    Va = function(a, b) {
        a.write(Ua(b))
    };
    Xa = function(a) {
        return a ? a.passive && Wa() ? a : a.capture || !1 : !1
    };
    Za = function(a) {
        var b = window,
            c = !0;
        c = void 0 === c ? !1 : c;
        new w.Promise(function(d, e) {
            function f() {
                g.onload = null;
                g.onerror = null;
                var h;
                null == (h = g.parentElement) || h.removeChild(g)
            }
            var g = b.document.createElement("script");
            g.onload = function() {
                f();
                d()
            };
            g.onerror = function() {
                f();
                e(void 0)
            };
            g.type = "text/javascript";
            Ta(g, a);
            c && "complete" !== b.document.readyState ? _.Ya(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    eb = function(a) {
        var b, c, d, e, f, g;
        return _.$a(function(h) {
            switch (h.j) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.m + "&st=") + a.xb, c = void 0, h.D = 2, ab(h, bb(b), 4);
                case 4:
                    c = h.m;
                    cb(h, 3);
                    break;
                case 2:
                    db(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.Pb || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.D ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.I,
                        qe: c.bg_hash_basename,
                        pe: c.bg_binary,
                        Ye: a.j + "_" + a.m,
                        Pb: d,
                        xb: a.xb,
                        vc: e,
                        Hc: f,
                        uc: g
                    }) : h.return(void 0)
            }
        })
    };
    ib = function(a) {
        var b;
        return _.$a(function(c) {
            if (1 == c.j) return ab(c, eb(a), 2);
            if (b = c.m) {
                var d = "sodar2";
                d = void 0 === d ? "sodar2" : d;
                var e = window,
                    f = e.GoogleGcLKhOms;
                f && "function" === typeof f.push || (f = e.GoogleGcLKhOms = []);
                var g = {};
                f.push((g._ctx_ = b.context, g._bgv_ = b.qe, g._bgp_ = b.pe, g._li_ = b.Ye, g._jk_ = b.Pb, g._st_ = b.xb, g._rc_ = b.vc, g._dl_ = b.Hc, g._g2_ = b.uc, g));
                if (f = e.GoogleDX5YKUSk) e.GoogleDX5YKUSk = void 0, f[1]();
                d = gb(hb, {
                    basename: d
                });
                Za(d)
            }
            return c.return(b)
        })
    };
    mb = function(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (jb) {
            if (b && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)) throw Error("Found an unpaired surrogate");
            a = (kb || (kb = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f) d[c++] = f;
                else {
                    if (2048 > f) d[c++] = f >> 6 | 192;
                    else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    };
    pb = function(a) {
        return null == a || nb(a) ? a : "string" === typeof a ? ob(a) : null
    };
    nb = function(a) {
        return rb && null != a && a instanceof Uint8Array
    };
    tb = function(a) {
        if (a !== sb) throw Error("illegal external caller");
    };
    vb = function(a, b) {
        Object.isFrozen(a) || (ub ? a[ub] |= b : void 0 !== a.Na ? a.Na |= b : Object.defineProperties(a, {
            Na: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    };
    wb = function(a, b) {
        Object.isExtensible(a) && (ub ? a[ub] && (a[ub] &= ~b) : void 0 !== a.Na && (a.Na &= ~b))
    };
    xb = function(a) {
        var b;
        ub ? b = a[ub] : b = a.Na;
        return null == b ? 0 : b
    };
    yb = function(a, b) {
        ub ? a[ub] = b : void 0 !== a.Na ? a.Na = b : Object.defineProperties(a, {
            Na: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };
    zb = function(a) {
        vb(a, 1);
        return a
    };
    Ab = function(a) {
        vb(a, 17);
        return a
    };
    Bb = function(a) {
        return a ? !!(xb(a) & 2) : !1
    };
    Cb = function(a) {
        vb(a, 2);
        return a
    };
    Db = function(a) {
        vb(a, 16);
        return a
    };
    Eb = function(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
        wb(a, 16)
    };
    Fb = function(a, b) {
        yb(b, (xb(a) | 0) & -51)
    };
    Gb = function(a, b) {
        yb(b, (xb(a) | 18) & -33)
    };
    Hb = function(a) {
        return Bb(a.da)
    };
    Jb = function(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    };
    Kb = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    Ob = function(a, b) {
        if (null != a)
            if ("string" === typeof a) a = a ? new Lb(a, sb) : Mb();
            else if (a.constructor !== Lb)
            if (nb(a)) a = Nb(a);
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    };
    Pb = function(a) {
        a instanceof Lb && (tb(sb), a = a.zb || "");
        return a
    };
    Qb = function(a) {
        return a
    };
    Sb = function(a, b, c) {
        var d = !1;
        if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.yc === Rb) return a;
        if (d) return new b(a);
        if (c) return new b
    };
    Tb = function(a, b) {
        a = "" + a;
        b = "" + b;
        return a > b ? 1 : a < b ? -1 : 0
    };
    Vb = function(a, b, c, d) {
        a = Sb(a, b, !0);
        c ? Cb(a.da) : d && (a = Ub(a));
        return a
    };
    Wb = function(a) {
        return a
    };
    Xb = function(a) {
        return a
    };
    Yb = function(a) {
        return a
    };
    $b = function(a, b) {
        a = a || {};
        b = b || {};
        var c = {},
            d;
        for (d in a) Kb(a, d) && (c[d] = 0);
        for (var e in b) Kb(b, e) && (c[e] = 0);
        for (var f in c)
            if (Kb(c, f) && !Zb(a, f, a[f], b, f, b[f])) return !1;
        return !0
    };
    ac = function(a) {
        return a && "object" === typeof a ? a.da || a : a
    };
    cc = function(a, b) {
        if (null == b) return !1;
        a = a.j;
        b = b.j;
        if (a.size != b.size) return !1;
        a = _.v(a, "entries").call(a);
        for (var c; !(c = a.next()).done;)
            if (c = c.value, !bc(c[1], b.get(c[0]))) return !1;
        return !0
    };
    ec = function(a, b, c, d) {
        if (null == d) d = [];
        else if (!Array.isArray(d)) return null;
        return b[c] = dc(a, d)
    };
    Zb = function(a, b, c, d, e, f) {
        c = Pb(c);
        f = Pb(f);
        c = ac(c);
        f = ac(f);
        if (c == f) return !0;
        if (rb) {
            var g = nb(c),
                h = nb(f);
            if (g || h) {
                if (g) a = c;
                else if ("string" === typeof c) a = pb(c);
                else return !1;
                if (!h)
                    if ("string" === typeof f) f = pb(f);
                    else return !1;
                if (a.length !== f.length) return !1;
                for (h = 0; h < a.length; h++)
                    if (a[h] !== f[h]) return !1;
                return !0
            }
        }
        if (c instanceof fc) return cc(c, f instanceof fc ? f : ec(c, d, e, f));
        if (f instanceof fc) return cc(f, ec(f, a, b, c));
        if (null == c && Array.isArray(f) && f && xb(f) & 1 && !f.length || null == f && Array.isArray(c) && c && xb(c) & 1 && !c.length) return !0;
        if (!_.ea(c) || !_.ea(f)) return "number" === typeof c && isNaN(c) || "number" === typeof f && isNaN(f) ? String(c) == String(f) : !1;
        if (c.constructor != f.constructor) return !1;
        if (c.constructor === Array) {
            h = c;
            b = a = void 0;
            c = Math.max(h.length, f.length);
            for (d = 0; d < c; d++)
                if (e = h[d], g = f[d], e && e.constructor == Object && (a = e, e = void 0), g && g.constructor == Object && (b = g, g = void 0), !Zb(h, d, e, f, d, g)) return !1;
            return a || b ? (a = a || {}, b = b || {}, $b(a, b)) : !0
        }
        if (c.constructor === Object) return $b(c, f);
        throw Error("Invalid type in JSPB array");
    };
    bc = function(a, b) {
        return Zb(void 0, void 0, a, void 0, void 0, b)
    };
    jc = function(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (nb(a)) return gc(a);
                    if (a instanceof Lb) return hc(a);
                    if (a instanceof fc) return ic(a)
                }
        }
        return a
    };
    kc = function(a, b) {
        b.D && (a.D = b.D.slice())
    };
    mc = function(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = lc(a, b, c, void 0 !== d);
            else if (Jb(a)) {
                var e = {},
                    f;
                for (f in a) Kb(a, f) && (e[f] = mc(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    };
    lc = function(a, b, c, d) {
        d = d ? !!(xb(a) & 16) : void 0;
        var e = Array.prototype.slice.call(a);
        c(a, e);
        for (a = 0; a < e.length; a++) e[a] = mc(e[a], b, c, d);
        return e
    };
    pc = function(a) {
        return mc(a, nc, oc)
    };
    nc = function(a) {
        return a.yc === Rb ? a.toJSON() : a instanceof fc ? ic(a, pc) : jc(a)
    };
    rc = function(a) {
        return mc(a, qc, oc)
    };
    qc = function(a) {
        if (!a) return a;
        if ("object" === typeof a) {
            if (nb(a)) return new Uint8Array(a);
            if (a instanceof fc) return a.size ? dc(a, Db(sc(a, rc))) : [];
            if (a.yc === Rb) return tc(a)
        }
        return a
    };
    oc = function() {};
    vc = function(a, b, c, d) {
        var e = x(a, b, d);
        Array.isArray(e) || (e = uc);
        var f = xb(e);
        f & 1 || zb(e);
        Hb(a) ? (f & 2 || Cb(e), c & 1 || Object.freeze(e)) : e === uc || !(c & 1 && c & 2) && f & 2 ? (e = zb(Array.prototype.slice.call(e)), _.y(a, b, e, d)) : !(c & 2) && f & 16 && Eb(e);
        return e
    };
    wc = function(a, b, c, d) {
        var e = vc(a, b, 1, d);
        if (e.length && !(xb(e) & 4)) {
            Object.isFrozen(e) && (e = zb(e.slice()), _.y(a, b, e, d, !0));
            for (d = b = 0; b < e.length; b++) {
                var f = c(e[b]);
                null != f && (e[d++] = f)
            }
            d < b && (e.length = d);
            vb(e, 5)
        }
        Hb(a) && !Object.isFrozen(e) && (Cb(e), Object.freeze(e));
        return e
    };
    xc = function(a) {
        return Ob(a, !0)
    };
    zc = function(a, b) {
        var c = Hb(a),
            d = !1;
        if (null == b) {
            if (c) return yc || (yc = new fc(Cb([])));
            b = []
        } else if (b.constructor === fc) {
            if (0 == (b.m & 2) || c) return b;
            b = sc(b)
        } else Array.isArray(b) ? d = Bb(b) : b = [];
        if (c) {
            if (!b.length) return yc || (yc = new fc(Cb([])));
            d || (d = !0, Cb(b))
        } else if (d)
            for (d = !1, b = Array.prototype.slice.call(b), c = 0; c < b.length; c++) {
                var e = b[c] = Array.prototype.slice.call(b[c]);
                Array.isArray(e[1]) && (e[1] = Cb(e[1]))
            }
        d || (xb(b) & 32 ? Eb(b) : xb(a.da) & 16 && Db(b));
        d = new fc(b, void 0);
        _.y(a, 26, d, !1, !0);
        return d
    };
    _.Cc = function(a, b, c, d) {
        Ac(a);
        c !== d ? _.y(a, b, c) : Bc(a, b);
        return a
    };
    Dc = function(a, b) {
        return null == a ? b : a
    };
    Ec = function(a) {
        Array.isArray(a) && Cb(a);
        return a
    };
    Gc = function(a, b, c, d, e, f) {
        (a = a.qa && a.qa[c]) ? (e = f.Vc ? zb(a.slice()) : a, Fc(b, c, e)) : (rb && d instanceof Uint8Array ? e = Nb(d) : d instanceof fc ? e = d.j.size ? dc(d, sc(d, (e || d instanceof fc && d.m & 2) && d.D ? Ec : void 0)) : [] : (Array.isArray(d) && (e ? Cb(d) : d && xb(d) & 1 && f.Vc ? (e = Array.prototype.slice.call(d), Fb(d, e), d = e) : Eb(d)), e = d), _.y(b, c, e))
    };
    Jc = function(a) {
        if (Bb(a) && Object.isFrozen(a)) return a;
        var b = Hc(a, Ic);
        Gb(a, b);
        Object.freeze(b);
        return b
    };
    Kc = function(a, b) {
        if (!a) return a;
        if (rb && a instanceof Uint8Array) return Nb(a);
        if (Array.isArray(a)) {
            if (Bb(a)) return a;
            b && (b = xb(a), b = !(b & 32) && (!!(b & 16) || 0 === b));
            return b ? (Cb(a), a) : lc(a, Kc, Gb)
        }
        return a.yc === Rb ? Ic(a) : a instanceof fc ? dc(a, Cb(sc(a, Kc))) : a
    };
    Ic = function(a) {
        if (Hb(a)) return a;
        a = Lc(a);
        Cb(a.da);
        return a
    };
    Lc = function(a) {
        var b = new a.constructor;
        kc(b, a);
        for (var c = a.da, d = !!(xb(c) & 16), e = 0; e < c.length; e++) {
            var f = c[e];
            if (e === c.length - 1 && Jb(f))
                for (var g in f) {
                    var h = +g;
                    if (_.v(Number, "isNaN").call(Number, h)) Mc(b)[h] = f[h];
                    else {
                        var k = f[g],
                            l = a.qa && a.qa[h];
                        l ? Fc(b, h, Jc(l), !0) : _.y(b, h, Kc(k, d), !0)
                    }
                } else h = e - a.Ua, (k = a.qa && a.qa[h]) ? Fc(b, h, Jc(k), !1) : _.y(b, h, Kc(f, d), !1)
        }
        return b
    };
    Nc = function(a, b) {
        return jc(b)
    };
    Pc = function(a, b) {
        kc(a, b);
        var c = b.qa;
        if (c) {
            b = b.j;
            for (var d in c)
                if (Kb(c, d)) {
                    var e = c[d];
                    if (e) {
                        var f = !(!b || !b[d]),
                            g = +d;
                        if (Array.isArray(e)) {
                            if (e.length)
                                for (f = Oc(a, e[0].constructor, g, f), g = 0; g < Math.min(f.length, e.length); g++) Pc(f[g], e[g])
                        } else throw Error("unexpected object: type: " + Qc(e) + ": " + e);
                    }
                }
        }
    };
    Uc = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = _.z(Rc(c, a)), b = c.next().value, a = c.next().value, c = b);
        Sc = c >>> 0;
        Tc = a >>> 0
    };
    Wc = function(a) {
        if (16 > a.length) Uc(Number(a));
        else if (Vc) a = BigInt(a), Sc = Number(a & BigInt(4294967295)) >>> 0, Tc = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            Tc = Sc = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Tc *= 1E6, Sc = 1E6 * Sc + d, 4294967296 <= Sc && (Tc += Sc / 4294967296 | 0, Sc %= 4294967296);
            b && (b = _.z(Rc(Sc, Tc)), a = b.next().value, b = b.next().value, Sc = a, Tc = b)
        }
    };
    Rc = function(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    $c = function(a, b, c) {
        if (c) {
            var d = {},
                e;
            for (e in c) {
                if (Kb(c, e)) {
                    var f = c[e],
                        g = f.Mf;
                    g || (d.Eb = f.lh || f.uh.Kc, f.oe ? (d.Pc = Xc(f.oe), g = function(h) {
                        return function(k, l, m) {
                            return h.Eb(k, l, m, h.Pc)
                        }
                    }(d)) : f.Ze ? (d.Oc = Yc(f.Ae.Dd, f.Ze), g = function(h) {
                        return function(k, l, m) {
                            return h.Eb(k, l, m, h.Oc)
                        }
                    }(d)) : g = d.Eb, f.Mf = g);
                    g(b, a, f.Ae)
                }
                d = {
                    Eb: d.Eb,
                    Pc: d.Pc,
                    Oc: d.Oc
                }
            }
        }
        Zc(b, a)
    };
    cd = function(a, b) {
        var c = a[b];
        "function" == typeof c && 0 === c.length && (c = c(), a[b] = c);
        return Array.isArray(c) && (ad in c || bd in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0
    };
    Xc = function(a) {
        var b = a[dd];
        if (!b) {
            var c = ed(a);
            b = function(d, e) {
                return fd(d, e, c)
            };
            a[dd] = b
        }
        return b
    };
    Yc = function(a, b) {
        var c = a[dd];
        c || (c = function(d, e) {
            return $c(d, e, b)
        }, a[dd] = c);
        return c
    };
    gd = function(a, b) {
        a.push(b)
    };
    hd = function(a, b, c) {
        a.push(b, c.Kc)
    };
    id = function(a, b, c, d) {
        var e = Xc(d),
            f = ed(d).Dd,
            g = c.Kc;
        a.push(b, function(h, k, l) {
            return g(h, k, l, f, e)
        })
    };
    jd = function(a, b, c, d, e, f) {
        var g = Yc(d, f),
            h = c.Kc;
        a.push(b, function(k, l, m) {
            return h(k, l, m, d, g)
        })
    };
    ed = function(a) {
        var b = a[bd];
        if (b) return b;
        b = a[bd] = [];
        var c = gd,
            d = hd,
            e = id,
            f = jd;
        b.Dd = a[0];
        var g = 1;
        if (a.length > g && "number" !== typeof a[g]) {
            var h = a[g++];
            c(b, h)
        }
        for (; g < a.length;) {
            c = a[g++];
            for (var k = g + 1; k < a.length && "number" !== typeof a[k];) k++;
            h = a[g++];
            k -= g;
            switch (k) {
                case 0:
                    d(b, c, h);
                    break;
                case 1:
                    (k = cd(a, g)) ? (g++, e(b, c, h, k)) : d(b, c, h, a[g++]);
                    break;
                case 2:
                    k = b;
                    var l = g++;
                    l = cd(a, l);
                    e(k, c, h, l, a[g++]);
                    break;
                case 3:
                    f(b, c, h, a[g++], a[g++], a[g++]);
                    break;
                case 4:
                    f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
                    break;
                default:
                    throw Error("unexpected number of binary field arguments: " + k);
            }
        }
        ad in a && bd in a && (a.length = 0);
        return b
    };
    fd = function(a, b, c) {
        for (var d = c.length, e = 1 == d % 2, f = e ? 1 : 0; f < d; f += 2)(0, c[f + 1])(b, a, c[f]);
        $c(a, b, e ? c[0] : void 0)
    };
    kd = function(a, b) {
        return {
            th: a,
            Kc: b
        }
    };
    ld = function(a) {
        return a
    };
    nd = function(a, b) {
        var c = md;
        md = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };
    od = function(a, b, c) {
        nd(a, b, c);
        return a
    };
    pd = function(a, b, c) {
        b = md;
        md = void 0;
        if (!a) {
            if (b) throw Error(b());
            if (c && 0 < c.length) throw Error("[" + c.map(String).join(",") + "]");
            throw Error(String(a));
        }
    };
    qd = function(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    };
    sd = function(a) {
        var b = document;
        if (a.length && b.head) {
            a = _.z(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = _.rd("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    };
    xd = function(a, b, c, d) {
        d = void 0 === d ? [] : d;
        var e = new a.MutationObserver(function(f) {
            f = _.z(f);
            for (var g = f.next(); !g.done; g = f.next()) {
                g = _.z(g.value.removedNodes);
                for (var h = g.next(); !h.done; h = g.next())
                    if (h = h.value, d && (h === b || td(h, b))) {
                        f = _.z(d);
                        for (g = f.next(); !g.done; g = f.next()) g.value.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
            }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        ud(function(f) {
            if (!f.parent || !vd(f.parent)) return !1;
            for (var g = f.parent.document.getElementsByTagName("iframe"), h = 0; h < g.length; h++) try {
                if (wd(g[h]) == f) {
                    xd(f.parent, g[h], c, d);
                    break
                }
            } catch (k) {}
            return !1
        }, !1, !1, a)
    };
    yd = function(a) {
        a = void 0 === a ? _.t : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    };
    B = function(a) {
        var b = zd.apply(1, arguments);
        if (0 === b.length) return Ad(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Ad(c.join(""))
    };
    Bd = function(a, b) {
        var c = Sa(a).toString();
        if (/#/.test(c)) throw Error("");
        var d = /\?/.test(c) ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Ad(c)
    };
    Dd = function(a) {
        return new _.Cd(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    Fd = function(a) {
        for (var b = zd.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return _.Ed(c.join(""))
    };
    Gd = function(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.ud] = b.message.toJSON(), c)]
        })])
    };
    Id = function(a) {
        a.qd.apply(a, _.Hd(zd.apply(1, arguments).map(function(b) {
            return {
                ud: 2,
                message: b
            }
        })))
    };
    Jd = function(a) {
        a.qd.apply(a, _.Hd(zd.apply(1, arguments).map(function(b) {
            return {
                ud: 5,
                message: b
            }
        })))
    };
    Kd = function(a) {
        a.qd.apply(a, _.Hd(zd.apply(1, arguments).map(function(b) {
            return {
                ud: 8,
                message: b
            }
        })))
    };
    Ld = function(a) {
        a && "function" == typeof a.Ea && a.Ea()
    };
    Nd = function() {
        var a = Md;
        return (0, D.dd)(function(b) {
            return b instanceof a
        }, function() {
            return (0, D.functionName)(a)
        })
    };
    Pd = function() {
        var a = Od;
        return (0, D.dd)(function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }, function() {
            return "unknown enum"
        })
    };
    Rd = function() {
        for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = Qd[19 == d ? c & 3 | 8 : c]);
        return Ad("uuid-in-package:" + a.join("").toLowerCase())
    };
    Td = function(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        var e = _.rd("IMG", a.document);
        if (c || d) {
            var f = function(g) {
                c && c(g);
                d && ba(a.google_image_requests, e);
                _.Sd(e, "load", f);
                _.Sd(e, "error", f)
            };
            _.Ya(e, "load", f);
            _.Ya(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };
    ie = function(a, b) {
        var c;
        a: {
            try {
                if (a) {
                    var d = a.getItem("google_experiment_mod");
                    break a
                }
            } catch (g) {}
            d = null
        }
        d = null != (c = d) ? c : "";
        try {
            var e = Ud(Vd, d);
            if (d) {
                var f = Ud(Vd, d);
                Wd(f, Xd(Yd(1), -1));
                Zd(f)
            }
        } catch (g) {
            $d(d), e = new Vd
        }
        if (c = (E = Oc(e, ae, 1), _.v(E, "find")).call(E, function(g) {
                return be(g, 1, 0) === b
            }))
            if (f = ce(c, 2), null === f || isNaN(f)) $d(d);
            else return f;
        d = de() ? null : Math.floor(1E3 * ee());
        if (null === d) return null;
        c ? Xd(c, d) : Wd(e, Xd(Yd(b), d));
        return fe(a, Zd(e)) ? d : null
    };
    $d = function(a) {
        .01 > Math.random() && je({
            data: a
        }, "ls_tamp")
    };
    ke = function(a, b) {
        b = void 0 === b ? window : b;
        if (F(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    le = function(a) {
        return "null" !== a.origin
    };
    ne = function(a, b, c) {
        b = F(b, 5) && le(c) ? c.document.cookie : null;
        return null === b ? null : (new me({
            cookie: b
        })).get(a) || ""
    };
    te = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = oe.j();
        0 === e.j && (e.j = Math.random() < _.pe(qe) ? 2 : 1);
        2 === e.j && (e = {}, je(_.v(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(re(window)), e.em = c, e.lid = b, e.eids = se().join(), e), d), "esp"))
    };
    Ae = function(a, b, c, d) {
        te(18, a);
        try {
            var e = _.ue();
            _.pe(ve) && (_.y(b, 8, Number(((0, D.K)(we(b, 8)) - 1).toFixed(3))), _.y(b, 7, Math.round(e / 1E3 / 60)));
            return c().then(function(f) {
                te(29, a, null, {
                    delta: String(_.ue() - e)
                });
                if (null == f) return te(41, a), xe(b, 111, d), b;
                null != f && ("string" !== typeof f ? te(21, a) : f.length || te(20, a));
                Bc(_.y(b, 2, f), 10);
                ye().set(b, d) && te(27, a);
                return b
            }).catch(function(f) {
                xe(b, 106, d);
                te(28, a, ze(f));
                return b
            })
        } catch (f) {
            return xe(b, 107, d), te(1, a, ze(f)), w.Promise.resolve(b)
        }
    };
    xe = function(a, b, c) {
        var d;
        Be(a, Ce(null != (d = De(a, Ee, 10)) ? d : new Ee, b));
        ye().set(a, c)
    };
    Fe = function() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new w.Promise(function(c) {
            var d = function() {
                c(b());
                _.Sd(a, "load", d)
            };
            _.Ya(a, "load", d)
        })
    };
    Ge = function(a) {
        var b = [],
            c = RegExp("^_GESPSK-(.+)$");
        try {
            for (var d = 0; d < a.length; d++) {
                var e = (c.exec(a.key(d)) || [])[1];
                e && b.push(e)
            }
        } catch (f) {}
        return b
    };
    Je = function(a, b) {
        return Oc(a, He, 2).some(function(c) {
            return c.ta() === b && Ie(c, 2)
        })
    };
    Ke = function(a, b) {
        var c, d, e;
        return _.$a(function(f) {
            if (1 == f.j) return c = 0 < b ? a.filter(function(g) {
                return !g.vd
            }) : a, ab(f, w.Promise.all(c.map(function(g) {
                return g.Ed.promise
            })), 2);
            if (3 != f.j) {
                if (a.length === c.length) return f.return(0);
                d = a.filter(function(g) {
                    return g.vd
                });
                e = _.ue();
                return ab(f, w.Promise.race([w.Promise.all(d.map(function(g) {
                    return g.Ed.promise
                })), new w.Promise(function(g) {
                    return void setTimeout(g, b)
                })]), 3)
            }
            return f.return(_.ue() - e)
        })
    };
    Me = function(a) {
        var b = function(c) {
            var d = {};
            te(c, (0, D.K)(a.ta()), null, (d.tic = String(Math.round((Date.now() - (0, D.K)(x(a, 3))) / 6E4)), d))
        };
        switch (Le(a)) {
            case 0:
                b(24);
                break;
            case 1:
                b(25);
                break;
            case 2:
                b(26);
                break;
            case 3:
                te(9, (0, D.K)(a.ta()));
                break;
            case 4:
                b(23)
        }
    };
    Ye = function(a, b, c, d) {
        var e, f, g, h, k, l, m, n, p, q;
        return _.$a(function(u) {
            if (1 == u.j) return e = new Ne, f = _.pe(ve), g = new Oe(a, c, d), h = new Pe(g.l, f, d), k = new Qe(h.l, f, d), l = new Re(k.o, f, d), m = new Te(l.o, c, d), n = new Ue(b, l.l, c, d), p = new Ve(b, n.F, c, d), We(e, [g, h, k, l, m, n, p]), Xe(e), ab(u, n.l.promise, 2);
            q = u.m;
            return u.return(q ? q : {
                id: a,
                collectorGeneratedData: null
            })
        })
    };
    df = function(a, b, c) {
        b ? Ze() === $e(window) || _.G(af) ? bf(a, "encryptedSignalProviders", c) && bf(a, "secureSignalProviders", c) || (te(38, ""), cf(a, "encryptedSignalProviders", b, c), cf(a, "secureSignalProviders", b, c)) : te(16, "") : te(15, "")
    };
    bf = function(a, b, c) {
        return a[b] instanceof ef ? (a[b].addErrorHandler(c), !0) : !1
    };
    cf = function(a, b, c, d) {
        var e, f = new ff(null != (e = a[b]) ? e : [], c);
        a[b] = new ef(f);
        f.addErrorHandler(d)
    };
    jf = function(a, b) {
        var c = new Ne,
            d = new gf(b);
        a = new hf(d.A, a, b);
        We(c, [d, a]);
        Xe(c)
    };
    nf = function(a, b, c, d) {
        if (!c) return null;
        var e = b.toString();
        if (kf.has(e)) return null;
        kf.add(e);
        var f = _.pe(ve);
        a = new Oe(a, c, d);
        e = new lf(a.l, d);
        var g = new Pe(e.l, f, d);
        f = new Re(g.l, f, d);
        var h = new Te(f.o, c, d);
        b = new mf(f.l, b, d);
        c = new Te(b.l, c, d);
        d = new Ne;
        We(d, [a, e, g, f, h, b, c]);
        Xe(d);
        return d
    }; of = function(a) {
        a = void 0 === a ? window : a;
        a = a.googletag;
        return (null == a ? 0 : a.apiReady) ? a : void 0
    };
    pf = function(a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(E = c.allowedFeatures(), _.v(E, "includes")).call(E, a))
    };
    Hf = function(a) {
        var b = void 0 === b ? qf : b;
        var c = _.v(Object, "assign").call(Object, {}, a),
            d = a.id,
            e = a.style;
        a = a.data;
        c = (delete c.id, delete c.style, delete c.data, c);
        if (_.v(Object, "keys").call(Object, c).length) throw Error("Invalid attribute(s): " + _.v(Object, "keys").call(Object, c));
        d = {
            id: d,
            style: e ? new rf(e instanceof rf && e.constructor === rf ? e.nd : "type_error:SafeStyle", sf) : void 0
        };
        if (a)
            for (e = _.z(_.v(a, "entries").call(a)), a = e.next(); !a.done; a = e.next()) c = _.z(a.value), a = c.next().value, c = c.next().value, (0, D.Td)(tf.test(a)), d[a] = c;
        b = uf(Ua(b).toString());
        if (!vf.test("div")) throw Error("");
        if ("DIV" in wf) throw Error("");
        e = "";
        if (d)
            for (f in d)
                if (Object.prototype.hasOwnProperty.call(d, f)) {
                    if (!vf.test(f)) throw Error("");
                    c = d[f];
                    if (null != c) {
                        a = f;
                        if (c instanceof xf) c = yf(c);
                        else {
                            if ("style" == a.toLowerCase()) throw Error("");
                            if (/^on/i.test(a)) throw Error("");
                            if (a.toLowerCase() in zf)
                                if (c instanceof Af) c = Sa(c).toString();
                                else if (c instanceof Ka) c = La(c);
                            else if ("string" === typeof c) c instanceof Ka || (c = "object" == typeof c && c.Ma ? c.Ga() : String(c), Bf.test(c) ? c = _.Ed(c) : (c = String(c), c = c.replace(/(%0A|%0D)/g, ""), c = c.match(Cf) ? _.Ed(c) : null)), c = (c || _.Df).Ga();
                            else throw Error("");
                        }
                        c.Ma && (c = c.Ga());
                        a = a + '="' + Ef(String(c)) + '"';
                        e += " " + a
                    }
                }
        var f = "<div" + e;
        null == b ? b = [] : Array.isArray(b) || (b = [b]);
        !0 === Ff.div ? f += ">" : (d = Gf(b), f += ">" + Ua(d).toString() + "</div>");
        f = uf(f);
        return uf(Ua(f).toString())
    };
    Nf = function(a) {
        If();
        var b = Jf.googleToken[5] || 0;
        a && (0 != b || Kf[3] >= Lf() ? Mf.xd(a) : (Mf.nc().push(a), Mf.Vd()));
        Kf[3] >= Lf() && Kf[2] >= Lf() || Mf.Vd()
    };
    Of = function(a) {
        a = Hc(a.split(/\s+/), function(b) {
            return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {
                value: parseFloat(b[1]),
                type: b[2]
            } : {
                value: 0,
                type: "px"
            }
        });
        a[1] = a[1] || a[0];
        a[2] = a[2] || a[0];
        a[3] = a[3] || a[1];
        return a
    };
    Qf = function(a) {
        if (!a) return [0];
        a = "number" === typeof a ? [a] : a;
        a = _.Pf(a, function(b) {
            return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
        });
        ha(a);
        ja(a, function(b, c) {
            return b - c
        });
        return a
    };
    Rf = function(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {}
        return b ? {
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left,
            width: b.width || b.right - b.left,
            height: b.height || b.bottom - b.top
        } : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
        }
    };
    Vf = function(a, b, c, d) {
        var e = new _.Sf,
            f = "",
            g = function(k) {
                try {
                    var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                    f === l.paw_id && (_.Sd(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
                } catch (m) {}
            },
            h = Tf(a);
        return h ? (_.Ya(a, "message", g), f = c(h), e.promise) : (c = Uf(a)) ? (f = String(Math.floor(2147483647 * ee())), _.Ya(a, "message", g), b(c, f), e.promise) : null
    };
    Wf = function(a) {
        return Vf(a, function(b, c) {
            var d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };
    Xf = function(a) {
        return !!Tf(a) || !!Uf(a)
    };
    Tf = function(a) {
        var b;
        if ("function" === typeof(null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk
    };
    Uf = function(a) {
        var b, c, d, e, f, g;
        if ("function" === typeof(null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof(null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers
    };
    Yf = function(a) {
        var b, c;
        return null != (c = (E = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }), _.v(E, "find")).call(E, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    Zf = function(a, b, c, d) {
        try {
            if (a.setAttribute("data-google-query-id", c), !d) {
                null != b.googletag || (b.googletag = {
                    cmd: []
                });
                var e, f = null != (e = b.googletag.queryIds) ? e : [];
                f.push(c);
                500 < f.length && f.shift();
                b.googletag.queryIds = f
            }
        } catch (g) {}
    };
    ag = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = _.z(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            var e = a,
                f = d.value;
            d = c;
            d = void 0 === d ? null : d;
            var g = e.document;
            var h = f.x,
                k = f.y;
            g.hasOwnProperty("_goog_efp_called_") || (g._goog_efp_called_ = g.elementFromPoint(h, k));
            if (g = g.elementFromPoint(h, k)) {
                if (!(h = $f(g, e, f, d))) a: {
                    d = void 0 === d ? null : d;h = e.document;
                    for (g = g.offsetParent; g && g != h.body; g = g.offsetParent)
                        if (k = $f(g, e, f, d)) {
                            h = k;
                            break a
                        }
                    h = null
                }
                d = h || null
            } else d = null;
            if (d) return d
        }
        return null
    };
    $f = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("fixed" !== bg(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= _.cg(_.dg, a).width && 1 >= _.cg(_.dg, a).height ? !0 : !1;
        d && d.j("ach_evt", {
            url: b.location.href,
            tn: a.tagName,
            id: a.getAttribute("id"),
            cls: a.getAttribute("class"),
            ign: e,
            pw: b.innerWidth,
            ph: b.innerHeight,
            x: c.x,
            y: c.y
        }, !0, 1);
        return e ? null : a
    };
    eg = function(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.Pf(b, function(d) {
            return c - d < 1E3 * a
        })
    };
    gg = function(a, b) {
        try {
            var c = a.getItem("__lsv__");
            if (!c) return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || _.fg(d, function(e) {
                    return !_.v(Number, "isInteger").call(Number, e)
                })) return a.removeItem("__lsv__"), [];
            d = eg(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    };
    jg = function(a, b) {
        .001 > ee() && je({
            c: a,
            s: b
        }, "gpt_whirs")
    };
    kg = function(a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    _.og = function(a) {
        _.lg(mg).j = !0;
        return ng[a]
    };
    tg = function(a) {
        var b = new pg;
        b = _.Cc(b, 1, Date.now(), 0);
        b = _.Cc(b, 2, a.pvsid, 0);
        b = _.Cc(b, 3, a.Ha, "");
        var c = se();
        b = qg(b, 4, c);
        b = _.Cc(b, 5, a.Xe, 0);
        a = _.Cc(b, 12, a.we, "");
        var d;
        if (b = null == (d = w.globalThis.performance) ? void 0 : d.memory) {
            d = new rg;
            try {
                _.Cc(d, 1, b.jsHeapSizeLimit, 0)
            } catch (e) {}
            try {
                _.Cc(d, 2, b.totalJSHeapSize, 0)
            } catch (e) {}
            try {
                _.Cc(d, 3, b.usedJSHeapSize, 0)
            } catch (e) {}
        } else d = void 0;
        d && _.sg(a, 10, d);
        return a
    };
    yg = function(a) {
        var b = ug();
        if (a.Sb) {
            var c = a.eb;
            a = tg(a);
            var d = new vg;
            b = _.Cc(d, 2, b, 0);
            b = wg(a, 6, xg, b);
            Jd(c, b)
        }
    };
    J = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = zd.apply(0, arguments),
                f = _.zg(a, b, c, d).apply(this, e);
            try {
                var g = e.length;
                if (a.Sb && a.vf) {
                    var h = a.eb,
                        k = tg(a);
                    var l = _.Cc(k, 5, a.We, 0);
                    var m = new Ag;
                    var n = _.Bg(m, 1, b);
                    var p = _.Cc(n, 2, g, 0);
                    var q = wg(l, 9, xg, p);
                    Jd(h, q)
                }
            } catch (u) {}
            return f
        }
    };
    _.zg = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = zd.apply(0, arguments),
                f = void 0,
                g = !1,
                h = null,
                k = _.lg(Cg);
            try {
                var l = _.G(Dg);
                l && k && (h = k.start(b.toString(), 3));
                f = c.apply(this, e);
                g = !0;
                l && k && k.end(h)
            } catch (m) {
                try {
                    if (g) Eg.call(this, a, 110, m);
                    else if (Eg.call(this, a, b, m), !d) throw m;
                } catch (n) {
                    if ((e = h) && Fg && Gg() && (Fg.clearMarks("goog_" + e.label + "_" + e.uniqueId + "_start"), Fg.clearMarks("goog_" + e.label + "_" + e.uniqueId + "_end")), !g && !d) throw m;
                }
            }
            return f
        }
    };
    _.Hg = function(a, b, c, d) {
        return _.zg(a, b, c, void 0 === d ? !1 : d)()
    };
    Eg = function(a, b, c) {
        if (a.ae) {
            c = c.error && c.meta && c.id ? c.error : c;
            var d = new Ig,
                e = new Jg;
            try {
                var f = re(window);
                _.Cc(e, 1, f, 0)
            } catch (p) {}
            try {
                var g = se();
                qg(e, 2, g)
            } catch (p) {}
            try {
                _.Cc(e, 3, window.document.URL, "")
            } catch (p) {}
            f = _.sg(d, 2, e);
            g = new Kg;
            b = _.Bg(g, 1, b);
            try {
                var h = Lg(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                _.Cc(b, 2, h, "")
            } catch (p) {}
            try {
                var k = Lg(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                _.Cc(b, 3, k, "")
            } catch (p) {}
            try {
                var l = Lg(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && _.Mg(b, 4, l.split(/\n\s*/))
            } catch (p) {}
            h = _.sg(f, 1, b);
            k = new Ng;
            try {
                _.Cc(k, 1, a.Za || a.Ha, "")
            } catch (p) {}
            try {
                var m = Og();
                _.Cc(k, 2, m, 0)
            } catch (p) {}
            try {
                var n = [].concat(_.Hd(_.v(Pg, "keys").call(Pg)));
                _.Mg(k, 3, n)
            } catch (p) {}
            wg(h, 4, Qg, k);
            _.Cc(h, 5, a.Fd, 0);
            Id(a.eb, h)
        }
    };
    Sg = function(a, b) {
        var c, d;
        return null != (d = null == (c = _.v(a, "find").call(a, function(e) {
            e = (0, D.K)(De(e, Rg, 1));
            return e.getWidth() <= b.getWidth() && e.getHeight() <= b.getHeight()
        })) ? void 0 : Oc(c, Rg, 2)) ? d : null
    };
    Wg = function(a, b, c) {
        return "number" === typeof b && "number" === typeof c && Oc(a, Tg, 6).length ? Sg(Oc(a, Tg, 6), Ug(Vg(new Rg, b), c)) : Oc(a, Rg, 5)
    };
    Yg = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = Xg(!1, b), c = Wg(a, b.width, b.height));
        null != c || (c = Wg(a));
        return null == c ? [] : c.map(function(d) {
            return F(d, 3) ? "fluid" : [(0, D.ra)(d.getWidth()), (0, D.ra)(d.getHeight())]
        })
    };
    ah = function(a) {
        if (!Yg(a).length && Zg(a, $g, 16)) return "1x1";
        var b = [],
            c = !1;
        a = _.z(Yg(a));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    };
    ch = function(a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(a.getAdUnitPath()), c.push(ah(a)), c.push(a.getDomId()));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode, ++d) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? bh(c.join(":")).toString() : "0"
    };
    dh = function(a) {
        return 0 !== a && 1 !== a
    };
    eh = function(a, b) {
        var c;
        return !(null != (c = F(b, 22)) ? !c : !F(a, 15))
    };
    gh = function(a) {
        var b = a.document;
        return fh(a) ? b.URL : b.referrer
    };
    jh = function(a) {
        try {
            return hh(a, window.top)
        } catch (b) {
            return new _.ih(-12245933, -12245933)
        }
    };
    mh = function(a) {
        if (!a) return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.cg(kh, a), a = new _.lh(a.right - a.left, a.bottom - a.top)) : a = null;
        return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    };
    oh = function(a, b) {
        for (var c = {}, d = _.z(_.v(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = tc(b[e]),
                g = _.lg(nh),
                h = g.j.get(e);
            null == h ? h = ++_.lg(Cg).D : g.j.delete(e);
            _.y(f, 20, h);
            c[e] = f
        }
        return {
            U: tc(a),
            P: c
        }
    };
    qh = function() {
        for (var a = "", b = _.z(ph()), c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
        return a
    };
    ph = function() {
        var a;
        if ("function" === typeof(null == (a = window.crypto) ? void 0 : a.getRandomValues)) return a = new Uint8Array(16), window.crypto.getRandomValues(a), a;
        a = window;
        var b;
        if ("function" === typeof(null == (b = a.msCrypto) ? void 0 : b.getRandomValues)) return b = new Uint8Array(16), a.msCrypto.getRandomValues(b), b;
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(255 * Math.random());
        return a
    };
    xh = function(a, b, c, d) {
        var e = rh(b, a) || sh(b, a);
        if (!e) return null;
        var f = jh(e),
            g = e === sh(b, a),
            h = th(function() {
                var p = g ? sh(b, a) : e;
                return p && uh(p, window)
            }),
            k = function(p) {
                var q;
                return null == (q = h()) ? void 0 : q.getPropertyValue(p)
            };
        c = Yg(c)[0];
        var l = !1;
        Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
        l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (g) {
            var m;
            f.y += Math.round(Math.min(null != (m = vh(k("padding-top"))) ? m : 0, e.clientHeight));
            if (!l) {
                d = e.clientWidth;
                var n;
                f.x += Math.round(Math.min(null != (n = vh(k("padding-left"))) ? n : 0, d))
            }
        }
        return f && wh(e) ? f : new _.ih(-12245933, -12245933)
    };
    yh = function(a, b, c, d) {
        var e = sh(a, c),
            f = "none" === (null == e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = xh(c, a, b, d);
        f && (e.style.display = "none");
        return a
    };
    zh = function(a) {
        return "google_ads_iframe_" + a.toString()
    };
    Ah = function(a) {
        return zh(a) + "__container__"
    };
    rh = function(a, b) {
        var c;
        return (null == (c = sh(a, b)) ? void 0 : c.querySelector('[id="' + Ah(a) + '"]')) || null
    };
    Bh = function(a, b) {
        var c, d;
        return null != (d = null == (c = rh(a, b)) ? void 0 : c.querySelector('iframe[id="' + zh(a) + '"]')) ? d : null
    };
    sh = function(a, b) {
        b = void 0 === b ? document : b;
        return Ch().D.get(a) || b.getElementById(a.getDomId())
    };
    Dh = function(a) {
        return Math.round(Number(vh(a)))
    };
    Fh = function(a, b, c) {
        for (var d = 100; a && a !== b && --d;) _.Eh(a, c), a = a.parentElement
    };
    Gh = function(a, b, c, d, e) {
        _.Eh(a, {
            "margin-left": "0px",
            "margin-right": "0px"
        });
        var f = {},
            g = "rtl" === d.direction,
            h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
        d = function() {
            var k = a.getBoundingClientRect().left;
            return g ? h - k : k - h
        };
        b = d();
        return 0 !== b ? (c = function(k) {
            g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
        }, c(-b), _.Eh(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.Eh(a, f)), !0) : !1
    };
    Ih = function(a, b, c, d, e, f, g, h, k) {
        var l = ah(d);
        _.t.setTimeout(_.zg(a, 459, function() {
            return void Hh(a, b, c, e, f, g, l, h, k)
        }), 500)
    };
    Hh = function(a, b, c, d, e, f, g, h, k) {
        if (_.t.IntersectionObserver) {
            var l = null,
                m, n = null != (m = Bh(c, b)) ? m : sh(c, b);
            m = _.zg(a, 459, function(p) {
                if (p = p && p[0]) {
                    var q = p.boundingClientRect,
                        u = window.innerWidth,
                        A = Math.round(q.left),
                        H = Math.round(q.right),
                        C = 0 > A + 2,
                        I = 0 < H - (u + 2);
                    if (p.intersectionRatio >= 1 - ((0 <= Math.round(q.left) ? 0 : 2) + (Math.round(q.right) <= window.innerWidth ? 0 : 2)) / e || C || I) Jh(h, function(R) {
                        if (C || I) {
                            var S = new Kh;
                            S.set(8);
                            Lh(n) && S.set(10);
                            S = Mh(S)
                        } else S = Nh(b, c);
                        var U = Oh(c, n, f),
                            Y = U.Qe;
                        U = U.Re;
                        Ph(R, a);
                        K(R, "qid", k);
                        K(R, "iu", c.getAdUnitPath());
                        K(R, "e", String(S));
                        C && K(R, "ofl", String(A));
                        I && K(R, "ofr", String(H - u));
                        K(R, "ret", e + "x" + f);
                        K(R, "req", g);
                        K(R, "bm", String(d));
                        K(R, "efh", Number(Y));
                        K(R, "stk", Number(U));
                        K(R, "ifi", Qh(window))
                    }, _.pe(Rh)), l && l.unobserve((0, D.K)(n))
                }
            });
            n && (l = new _.t.IntersectionObserver(m, {
                threshold: [1]
            }), (0, D.K)(l).observe(n))
        }
    };
    Nh = function(a, b) {
        var c = Bh(b, a) || sh(b, a),
            d = new Kh;
        try {
            var e = c.getBoundingClientRect(),
                f = e.left,
                g = e.top,
                h = e.width,
                k = e.height,
                l = sh(b, a),
                m = (0, D.K)(uh(l, window));
            if ("hidden" === m.visibility || "none" === m.display) return Mh(d);
            var n = Dh(m.getPropertyValue("border-top-width") || 0) + 1;
            b = f + h;
            k = g + k;
            var p = a.elementsFromPoint(f + n + 2, g + n);
            var q = a.elementsFromPoint(b - n - 2, g + n);
            var u = a.elementsFromPoint(b - n - 2, k - n);
            var A = a.elementsFromPoint(f + n + 2, k - n);
            var H = a.elementsFromPoint(b / 2, k - n)
        } catch (I) {
            return d.set(1), Mh(d)
        }
        if (!(p && p.length && q && q.length && u && u.length && A && A.length && H && H.length)) return d.set(7), Mh(d);
        a = function(I, R) {
            for (var S = !1, U = 0; U < I.length; U++) {
                var Y = I[U];
                if (S) {
                    var sa = uh(Y, window);
                    if ("hidden" !== sa.visibility && !Sh(Y) && !C(c, Y)) {
                        d.set(R);
                        "absolute" === sa.position && d.set(11);
                        break
                    }
                } else c === Y && (S = !0)
            }
        };
        Th(c) && d.set(9);
        var C = function(I, R) {
            return Uh(I, R) || Uh(R, I)
        };
        f = p[0];
        c === f || C(c, f) || Sh(f) || d.set(2);
        f = q[0];
        c === f || C(c, f) || Sh(f) || d.set(3);
        f = u[0];
        c === f || C(c, f) || Sh(f) || d.set(4);
        f = A[0];
        c === f || C(c, f) || Sh(f) || d.set(5);
        if (Sh(c)) return Mh(d);
        a(p, 12);
        a(q, 13);
        a(u, 14);
        a(A, 15);
        a(H, 6);
        return Mh(d)
    };
    Lh = function(a) {
        var b = !1,
            c = !1;
        return Vh(a, function(d) {
            c = c || "scroll" === d.overflowX || "auto" === d.overflowX;
            return (b = b || "flex" === d.display) && c
        })
    };
    Oh = function(a, b, c) {
        var d = (a = sh(a)) && uh(a, window),
            e = d ? "absolute" !== d.position : !0,
            f = !1,
            g = a && a.parentElement,
            h = !1;
        Wh(b, function(k) {
            var l = k.style;
            if (e)
                if (h || (h = k === g)) e = Xh(k, _.t, -1, -1);
                else {
                    l = l && l.height;
                    var m = (l && _.v(l, "endsWith").call(l, "px") ? Dh(l) : 0) >= c;
                    !l || m || "string" === typeof l && _.v(Yh, "includes").call(Yh, l) || (e = !1)
                }
            f || (k = uh(k, _.t), "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            Qe: e,
            Re: f
        }
    };
    Xh = function(a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.v(Yh, "includes").call(Yh, e.height) || (null == e ? 0 : e.maxHeight) && !_.v(Zh, "includes").call(Zh, e.maxHeight) || $h(a, b.document, function(f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.v(Yh, "includes").call(Yh, g) || !!f && !_.v(Zh, "includes").call(Zh, f)
        }, c, d) ? !1 : !0
    };
    $h = function(a, b, c, d, e) {
        b = b.styleSheets;
        if (!b) return !1;
        var f = a.matches || a.msMatchesSelector;
        d = -1 === d ? Infinity : d;
        e = -1 === e ? Infinity : e;
        for (var g = 0; g < Math.min(b.length, d); ++g) {
            var h = null;
            try {
                var k = b[g],
                    l = null;
                try {
                    l = k.cssRules || k.rules
                } catch (R) {
                    if (15 == R.code) throw R.styleSheet = k, R;
                }
                h = l
            } catch (R) {
                continue
            }
            l = void 0;
            if (null != (l = h) && l.length)
                for (l = 0; l < Math.min(h.length, e); ++l) try {
                    var m = h[l],
                        n, p = c;
                    if (!(n = f.call(a, m.selectorText) && p(m))) a: {
                        var q = void 0;p = a;
                        var u = c,
                            A = e,
                            H = null != (q = m.cssRules) ? q : [];
                        for (q = 0; q < Math.min(H.length, A); q++) {
                            var C = H[q],
                                I = u;
                            if (f.call(p, C.selectorText) && I(C)) {
                                n = !0;
                                break a
                            }
                        }
                        n = !1
                    }
                    if (n) return !0
                } catch (R) {}
        }
        return !1
    };
    Sh = function(a) {
        return Vh(a, function(b) {
            return "fixed" === b.position || "sticky" === b.position
        })
    };
    Th = function(a) {
        return Vh(a, function(b) {
            var c;
            return (E = ["left", "right"], _.v(E, "includes")).call(E, null != (c = b["float"]) ? c : b.cssFloat)
        })
    };
    ai = function(a) {
        return "number" === typeof a || "string" === typeof a
    };
    bi = function(a, b) {
        /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = Ad(b), a.src = Sa(b).toString())
    };
    di = function(a, b, c) {
        c = void 0 === c ? ci : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : _.Ya(a, "load", function() {
            return void c(a, b)
        }))
    };
    ei = function(a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    };
    fi = function(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    };
    gi = function(a) {
        if (a === a.top || vd(a.top)) return w.Promise.resolve({
            status: 4
        });
        var b = ei(a);
        if (!b) return w.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && fi(a.document.referrer)) return w.Promise.resolve({
            status: 3
        });
        var c = new _.Sf;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                ic: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    ki = function(a) {
        var b = void 0 === b ? hi : b;
        var c = ii(a);
        return c.messageChannelSendRequestFn ? w.Promise.resolve(c.messageChannelSendRequestFn) : new w.Promise(function(d) {
            function e(k) {
                return h.j(k).then(function(l) {
                    return l.data
                })
            }
            var f = _.rd("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            f.src = Sa(b).toString();
            var g = (new URL(b.toString())).origin,
                h = ji({
                    destination: a,
                    rc: f,
                    origin: g,
                    Ka: "goog:gRpYw:doubleclick"
                });
            h.j("goog:topics:frame:handshake:ack").then(function(k) {
                "goog:topics:frame:handshake:ack" === k.data && d(e)
            });
            c.messageChannelSendRequestFn = e;
            a.document.documentElement.appendChild(f)
        })
    };
    qi = function(a, b, c, d, e, f) {
        var g = _.G(li);
        g = void 0 === g ? !1 : g;
        var h = function(p, q) {
                g && je({
                    timeMs: String((b.performance.now() - p).toFixed(2)),
                    useCache: q ? "1" : "0"
                }, "topics_stats")
            },
            k = g ? b.performance.now() : 0,
            l = mi(f),
            m = l.cc,
            n = l.bc;
        l = ii(b);
        l.getTopicsPromise || (c = {
            message: "goog:topics:frame:get:topics",
            callApi: c,
            sendGen204: d
        }, d && (c.pvsid = re(window)), a = a(c).then(function(p) {
            var q = n;
            if (p instanceof Uint8Array) q || (q = !(m instanceof Uint8Array && oa(p, m)));
            else if (Pd()(p)) q || (q = p !== m);
            else return p = Error(JSON.stringify(p)), Eg(e.context, 989, p), 7;
            if (q && f) try {
                var u = new ni;
                var A = _.y(u, 2, _.ue());
                p instanceof Uint8Array ? oi(A, 1, pi, Ob(p, !1)) : oi(A, 3, pi, p);
                f.setItem("goog:cached:topics", Zd(A))
            } catch (H) {}
            return p
        }), l.getTopicsPromise = (0, D.ra)(a));
        return m && !n ? (h(k, !0), w.Promise.resolve(m)) : l.getTopicsPromise.then(function(p) {
            h(k, !1);
            return p
        })
    };
    mi = function(a) {
        if (!a) return {
            cc: null,
            bc: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                cc: null,
                bc: !0
            };
            var c = Ud(ni, b),
                d = ri(c, pi);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    var f = si(c, pi, 1),
                        g = ti(c, f);
                    var h = null == g ? Mb() : g;
                    var k = xi(h);
                    e = k ? new Uint8Array(k) : yi || (yi = new Uint8Array(0));
                    break;
                case 3:
                    e = be(c, si(c, pi, 3), 0);
                    break;
                default:
                    Oa(d)
            }
            return {
                cc: e,
                bc: zi(c, 2) + 6048E5 < _.ue()
            }
        } catch (l) {
            return {
                cc: null,
                bc: !0
            }
        }
    };
    ii = function(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };
    Ci = function(a) {
        if (Ga()) {
            var b = a.document.documentElement.lang;
            Ai(a) ? Bi(re(a), !0, "", b) : (new MutationObserver(function(c, d) {
                Ai(a) && (Bi(re(a), !1, b, a.document.documentElement.lang), d.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    };
    Ai = function(a) {
        return a.document.documentElement.classList.contains("translated-rtl") || a.document.documentElement.classList.contains("translated-ltr")
    };
    Bi = function(a, b, c, d) {
        je({
            ptt: "17",
            pvsid: "" + a,
            ibatl: String(b),
            pl: c,
            nl: d
        }, "translate-event")
    };
    Di = function(a) {
        var b = "";
        ud(function(c) {
            if (c === c.top) return !0;
            var d;
            if (null == (d = c.document) ? 0 : d.referrer) b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    };
    Fi = function(a) {
        a = (vd(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!Ei(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    };
    Ii = function(a, b) {
        var c = Gi.get(a);
        c || (b = c = b(), Hi.set(b, a), Gi.set(a, b));
        return c
    };
    Ki = function(a, b) {
        return (0, D.ra)(Ii(b, function() {
            return new Ji(a, b)
        }))
    };
    L = function(a) {
        return function() {
            return new Li(a, [].concat(_.Hd(zd.apply(0, arguments))))
        }
    };
    Mi = function(a) {
        return "[" + a.map(function(b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? Mi(b) : String(b)
        }).join(", ") + "]"
    };
    Ni = function(a, b) {
        b = Mi(b);
        b = b.substring(1, b.length - 1);
        return new Li(96, [a, b])
    };
    Oi = function(a) {
        return (E = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable".split(" "), _.v(E, "includes")).call(E, a) ? a : null
    };
    Qi = function(a, b, c) {
        return Ii(c, function() {
            return new Pi(a, b, c)
        })
    };
    Si = function(a, b, c) {
        return Ii(c, function() {
            return new Ri(a, b, c)
        })
    };
    Ti = function() {
        var a;
        return null != (a = _.t.googletag) ? a : _.t.googletag = {
            cmd: []
        }
    };
    Ui = function(a, b) {
        var c = Ti();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    Wi = function(a) {
        if (a = Vi[a]) {
            var b, c, d;
            return null != (d = null == (c = (b = Ti())[a]) ? void 0 : c.call(b)) ? d : null
        }
        return null
    };
    bj = function(a) {
        var b = window;
        "complete" === _.t.document.readyState ? _.Hg(a, 94, function() {
            Ti()._pubconsole_disable_ || null !== Xi(b) && Yi(a, b)
        }) : _.Ya(_.t, "load", _.zg(a, 94, function() {
            Ti()._pubconsole_disable_ || null !== Xi(b) && Yi(a, b)
        }));
        Ui("disablePublisherConsole", J(a, 93, Zi));
        Ui("onPubConsoleJsLoad", J(a, 731, $i));
        Ui("openConsole", J(a, 732, function(c) {
            aj(a, void 0 === c ? "" : c)
        }))
    };
    Yi = function(a, b) {
        b = void 0 === b ? _.t : b;
        if (!cj) {
            var c = new dj("gpt_pubconsole_loaded");
            Ph(c, a);
            K(c, "param", String(Xi(b)));
            K(c, "api", String(ej));
            fj(c, 1);
            gj(b.document, Ad(Sa(hj).toString()));
            cj = !0
        }
    };
    Xi = function(a) {
        var b = gh(a),
            c;
        return null != (c = (E = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.v(E, "find")).call(E, function(d) {
            return null !== ij(b, d)
        })) ? c : null
    };
    Zi = function() {
        Ti()._pubconsole_disable_ = !0
    };
    $i = function() {
        jj && ((0, D.K)(Ti().console).openConsole(kj), kj = void 0, jj = !1)
    };
    aj = function(a, b) {
        b = void 0 === b ? "" : b;
        ej = !0;
        var c;
        (null == (c = Ti()) ? 0 : c.console) ? (0, D.K)(Ti().console).openConsole(b): (b && (kj = b), jj = !0, Yi(a))
    };
    tj = function(a, b, c, d, e) {
        if ("string" !== typeof c || lj(c)) M(e, Ni("Slot.setTargeting", [c, d]), a);
        else {
            var f = [];
            Array.isArray(d) ? f = d : ma(d) ? f = _.v(Array, "from").call(Array, d) : d && (f = [d]);
            f = f.map(String);
            (d = (E = mj(b), _.v(E, "find")).call(E, function(g) {
                return nj(g) === c
            })) ? oj(d, f): (d = oj(pj(new qj, c), f), rj(b, 9, qj, d));
            e.info(sj(c, f.join(), (0, D.K)(b.getAdUnitPath())), a)
        }
    };
    uj = function(a, b, c, d) {
        if (null != c && "object" === typeof c)
            for (var e = _.z(_.v(Object, "keys").call(Object, c)), f = e.next(); !f.done; f = e.next()) f = f.value, tj(a, b, f, c[f], d);
        else d.error(Ni("Slot.updateTargetingFromMap", [c]), a)
    };
    wj = function(a, b, c) {
        return Ii(c, function() {
            return new vj(a, b, c, c.j)
        })
    };
    xj = function(a) {
        return _.v(Object, "assign").call(Object, {}, a, _.v(Object, "fromEntries").call(Object, _.v(Object, "entries").call(Object, a).map(function(b) {
            b = _.z(b);
            var c = b.next().value;
            return [b.next().value, c]
        })))
    };
    Bj = function() {
        var a = {},
            b = xj(yj);
        a.OutOfPageFormat = b;
        b = xj(zj);
        a.TrafficSource = b;
        b = xj(Aj);
        a.Taxonomy = b;
        return a
    };
    Ej = function() {
        for (var a = Cj(Dj) || "0-0-0", b = a.split("-").map(function(e) {
                return Number(e)
            }), c = ["1", "0", "38"].map(function(e) {
                return Number(e)
            }), d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "1-0-38"
    };
    Jj = function() {
        if (Fj) return Fj;
        for (var a = Gj(Hj), b = [], c = 0; c < a.length; c += 2) Ij(a[c], a[c + 1], b);
        return Fj = b.join("&")
    };
    Pj = function(a, b) {
        if (!b || !_.ea(b)) return null;
        var c = !1,
            d = new Kj;
        _.Lj(b, function(e, f) {
            var g = !1;
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? _.y(d, 1, b.allowOverlayExpansion) : c = g = !0;
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? _.y(d, 2, b.allowPushExpansion) : c = g = !0;
                    break;
                case "sandbox":
                    !0 === e ? _.y(d, 3, b.sandbox) : c = g = !0;
                    break;
                case "useUniqueDomain":
                    Mj();
                    return;
                default:
                    g = !0
            }
            g && a.error(Nj("setSafeFrameConfig", Oj(b), f, Oj(e)))
        });
        return c ? null : d
    };
    Rj = function(a) {
        var b = new Kj;
        a = _.z(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value) Qj(c, 1) && _.y(b, 1, F(c, 1)), Qj(c, 2) && _.y(b, 2, F(c, 2)), Qj(c, 3) && _.y(b, 3, F(c, 3)), Qj(c, 4) && _.y(b, 4, F(c, 4));
        return b
    };
    Tj = function() {
        var a, b, c;
        return "pagead2.googlesyndication.com" === (null != (c = Sj.exec(null != (b = null == (a = _.og(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    };
    Uj = function(a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    };
    Vj = function(a, b) {
        var c = b.j;
        return a.map(function(d) {
            return _.v(c, "find").call(c, function(e) {
                return e.j === d
            })
        }).filter(Nd())
    };
    Yj = function(a) {
        var b = _.lg(Wj),
            c = [];
        a = _.z(a);
        for (var d = a.next(); !d.done; d = a.next()) {
            d = d.value;
            b.C = d;
            var e = Xj(9);
            1 === e.length && (c.push(d), c.push(d + "-" + e[0]))
        }
        return c
    };
    bk = function(a, b, c, d, e, f) {
        var g = Zj(f, a, b, d, e, void 0, !0);
        f = g.slotId;
        g = g.Ta;
        if (!f || !g) return M(b, Ni("PubAdsService.definePassback", [d, e])), null;
        _.y(g, 17, !0);
        c.slotAdded(f, g);
        return {
            Sd: wj(a, b, new ak(a, f, c)),
            Ta: g
        }
    };
    dk = function(a, b, c, d) {
        return Ii(c, function() {
            return new ck(a, b, c, d)
        })
    };
    fk = function(a) {
        return Array.isArray(a) && 2 === a.length ? a.every(ek) : "fluid" === a
    };
    gk = function(a) {
        return Array.isArray(a) && 2 === a.length && ek(a[0]) && ek(a[1])
    };
    ik = function(a) {
        return Array.isArray(a) ? Ug(Vg(new Rg, (0, D.ra)(a[0])), (0, D.ra)(a[1])) : hk()
    };
    kk = function(a) {
        var b = [];
        if (jk(a)) b.push(ik((0, D.K)(a)));
        else if (Array.isArray(a)) {
            a = _.z(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, jk(c) ? b.push(ik((0, D.K)(c))) : oa(c, ["fluid"]) && b.push(hk())
        }
        return b
    };
    lk = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) return null;
        var b = a[0];
        a = a[1];
        if ("number" === typeof b && 0 <= b) b = Math.floor(b);
        else if (null !== b) return null;
        if ("number" === typeof a && 0 <= a) a = Math.floor(a);
        else if (null !== a) return null;
        return Ug(Vg(new Rg, b), a)
    };
    mk = function(a) {
        var b = void 0 === b ? window : b;
        if (!a) return {
            bd: [],
            Pa: null
        };
        if (Array.isArray(a) ? 0 : Array.isArray(a.fixed) || "fluid" === a.fixed || Array.isArray(a.max)) {
            var c = kk(a.fixed),
                d;
            if (d = lk(a.max)) {
                var e = a.min ? lk(a.min) : new Rg;
                null != (null == e ? void 0 : e.getWidth()) || null != e && Vg(e, 0);
                null != (null == e ? void 0 : e.getHeight()) || null != e && Ug(e, 0);
                d = {
                    max: d,
                    min: e
                }
            } else d = {
                max: null,
                min: null
            };
            e = d;
            d = e.max;
            e = e.min;
            if (a.max && !d) throw Error("Invalid GPT maximum size: " + JSON.stringify(a));
            if (a.min && !e) throw Error("Invalid GPT minimum size: " + JSON.stringify(a));
            var f;
            if (null != (f = a.fixed) && f.length || d) {
                b = (0, D.K)(d);
                if (0 === b.getWidth() || 0 === b.getHeight()) throw Error("Invalid GPT size: maximums cannot be zero: " + JSON.stringify(a));
                if (e) {
                    f = (0, D.K)(e);
                    var g = f.getWidth(),
                        h = b.getWidth();
                    if (null != g && null != h && g > h) throw Error("Invalid GPT size: minimum width larger than maximum width: " + JSON.stringify(a));
                    f = f.getHeight();
                    b = b.getHeight();
                    if (null != f && null != b && f > b) throw Error("Invalid GPT size: minimum height larger than maximum height: " + JSON.stringify(a));
                }
            } else null == (g = b.console) || null == (h = g.warn) || h.call(g, "Invalid GPT fixed size specification: " + JSON.stringify(a));
            d && e ? (a = new $g, a = _.sg(a, 1, d), a = _.sg(a, 2, e)) : a = null;
            return {
                bd: c,
                Pa: a
            }
        }
        a.length || null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a));
        return {
            bd: kk(a),
            Pa: null
        }
    };
    jk = function(a) {
        return Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    };
    ka = function(a, b) {
        a: {
            b = (0, D.ra)(b[0]);a = (0, D.ra)(a[0]);
            for (var c = ia, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = ia(b.length, a.length)
        }
        return b
    };
    ok = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) throw new nk("Each mapping entry must be an array of size 2");
        var b = a[0];
        if (!gk(b)) throw new nk("Size must be an array of two non-negative integers");
        b = Ug(Vg(new Rg, b[0]), b[1]);
        if (Array.isArray(a[1]) && 0 === a[1].length) a = [];
        else if (a = kk(a[1]), 0 === a.length) throw new nk("At least one slot size must be present");
        var c = new Tg;
        b = _.sg(c, 1, b);
        return Fc(b, 2, a)
    };
    qk = function(a, b, c) {
        return Ii(c, function() {
            return new pk(a, b, c)
        })
    };
    rk = function(a, b) {
        return null == a ? void 0 : a.replace(/\$\{AUCTION_PRICE\}/g, String(b))
    };
    tk = function(a, b) {
        var c, d;
        if (null == b) var e = void 0;
        else {
            e = b.get;
            if (_.G(sk)) {
                var f = a.match(/\/?([0-9]+)(?:,[0-9]+)?((?:\/.+?)+?)(?:\/*)$/);
                f = 3 !== (null == f ? void 0 : f.length) ? a : "/" + f[1] + f[2]
            } else f = a;
            e = e.call(b, f)
        }
        return null != (d = null != (c = e) ? c : null == b ? void 0 : b.get(bh(a))) ? d : 0
    };
    yk = function(a, b, c, d, e, f) {
        if (null != c && c.size) {
            var g, h;
            f = null != (h = null != (g = null == f ? void 0 : f.adUnits) ? g : null == b ? void 0 : b.adUnits) ? h : [];
            b = {};
            g = _.z(f);
            for (h = g.next(); !h.done; b = {
                    Yb: b.Yb
                }, h = g.next()) {
                f = h.value;
                h = f.code;
                var k = f.bids;
                f = void 0;
                if (h && null != (f = k) && f.length && (h = tk(h, c), b.Yb = h / 1E6, !(0 >= h))) {
                    var l = void 0;
                    f = {};
                    k = _.z(null != (l = k) ? l : []);
                    for (l = k.next(); !l.done; f = {
                            Qa: f.Qa,
                            Mc: f.Mc
                        }, l = k.next()) {
                        l = l.value;
                        f.Mc = "function" === typeof l.getFloor ? l.getFloor : void 0;
                        f.Qa = uk(vk(wk(new xk, 4), h), d);
                        l.getFloor = function(n, p) {
                            return function(q) {
                                4 === be(n.Qa, 1, 0) && wk(n.Qa, 1);
                                var u, A = null == (u = n.Mc) ? void 0 : u.apply(a, [q]);
                                q = d ? A || {} : {
                                    currency: "USD",
                                    floor: p.Yb
                                };
                                return null != A && A.floor ? (null == A ? 0 : A.currency) && "USD" !== A.currency ? (1 === be(n.Qa, 1, 0) && (q = vk(wk(n.Qa, 6), 1E6 * A.floor), _.y(q, 3, A.currency)), A) : (A.floor || 0) > p.Yb ? (1 === be(n.Qa, 1, 0) && vk(wk(n.Qa, 5), 1E6 * A.floor), A) : q : q
                            }
                        }(f, b);
                        var m = void 0;
                        null == (m = e) || m.set(l.getFloor, f.Qa)
                    }
                }
            }
        }
    };
    Gk = function(a, b, c, d, e, f) {
        var g, h, k = null == (g = f.getBidResponsesForAdUnitCode) ? void 0 : null == (h = g.call(f, b.getDomId())) ? void 0 : h.bids,
            l;
        if (null == (l = k) || !l.length) {
            var m;
            k = (null == (m = (0, D.K)(f.getBidResponsesForAdUnitCode)(b.getAdUnitPath())) ? void 0 : m.bids) || []
        }
        g = k.filter(function(n) {
            return n.auctionId !== c && d.some(function(p) {
                return (E = p.xa(), _.v(E, "includes")).call(E, n.adId)
            })
        });
        g = _.z(g);
        for (h = g.next(); !h.done; h = g.next()) h = h.value, l = k = void 0, m = zk(h, e, d, null == (k = f.adUnits) ? void 0 : null == (l = _.v(k, "find").call(k, function(n) {
            n = n.code;
            return n === b.getAdUnitPath() || n === b.getDomId()
        })) ? void 0 : l.mediaTypes), k = Ak(a, Bk(_.y(Ck(Dk(new Ek, h.bidder), 1), 6, !0), m)), "number" === typeof h.timeToRespond && Fk(k, h.timeToRespond)
    };
    Hk = function(a, b, c) {
        Qj(a, 3) || (c === b.getAdUnitPath() ? _.y(a, 3, 1) : c === b.getDomId() && _.y(a, 3, 2))
    };
    Jk = function(a, b, c, d, e, f, g) {
        f = null == f ? void 0 : f.get(null != g ? g : function() {
            return null
        });
        1 !== (null == f ? void 0 : be(f, 1, 0)) && _.sg(b, 5, f);
        Zg(a, xk, 5) || (f ? 1 === be(f, 1, 0) ? Ik(a, f) : Ik(a, vk(wk(uk(new xk, e), 1), tk(c, d))) : Ik(a, wk(uk(new xk, e), tk(c, d) ? 2 : 3)))
    };
    zk = function(a, b, c, d) {
        var e = a.cpm,
            f = a.originalCpm,
            g = a.currency,
            h = a.originalCurrency,
            k = a.dealId,
            l = a.adserverTargeting,
            m = a.bidder,
            n = a.adUnitCode,
            p = a.adId,
            q = a.mediaType,
            u = a.height,
            A = a.width,
            H = a.adUrl;
        a = a.ad;
        var C = new Kk;
        "number" === typeof e && (_.y(C, 2, Math.round(1E6 * e)), h && h !== g || (e = Math.round(1E6 * Number(f)), isNaN(e) || e === zi(C, 2) || _.y(C, 8, e)));
        "string" === typeof g && _.y(C, 3, g);
        "string" === typeof k && Lk(C, Mk(k));
        if ("object" === typeof l)
            for (c = _.v(Object, "fromEntries").call(Object, c.map(function(U) {
                    return [x(U, 1), U.xa()]
                })), g = _.z(["", "_" + m]), k = g.next(); !k.done; k = g.next())
                if (k = k.value, _.G(Nk)) {
                    e = [];
                    f = !1;
                    h = _.v(Object, "keys").call(Object, l);
                    h = _.z(h);
                    for (var I = h.next(); !I.done; I = h.next()) {
                        I = (I.value + k).slice(0, 20);
                        var R = void 0,
                            S = null == (R = c[I]) ? void 0 : R[0];
                        void 0 !== S && (e.push(I), f || (f = S === p))
                    }
                    f && Ok(C, Pk(C, 4).concat(e))
                } else {
                    e = [];
                    f = _.z(_.v(Object, "entries").call(Object, l));
                    for (h = f.next(); !h.done; h = f.next())
                        if (h = _.z(h.value), I = h.next().value, h = h.next().value, I = (I + k).slice(0, 20), R = void 0, null != (R = c[I]) && R.length)
                            if (c[I][0] === String(h)) e.push(I);
                            else {
                                e = [];
                                break
                            }
                    Ok(C, Pk(C, 4).concat(e))
                }
        switch (q || "banner") {
            case "banner":
                _.y(C, 5, 1);
                break;
            case "native":
                _.y(C, 5, 2);
                Jh("hbyg_nat", function(U) {
                    K(U, "pub_url", document.URL);
                    K(U, "b", m);
                    K(U, "auc", null != n ? n : "");
                    K(U, "hmt", Number(!!d));
                    var Y;
                    K(U, "hat", Number(!!(null == d ? 0 : null == (Y = d.native) ? 0 : Y.adTemplate)))
                }, _.pe(Qk));
                break;
            case "video":
                _.y(C, 5, 3)
        }
        "number" === typeof u && "number" === typeof A && Rk(C, Sk(Tk(A), u));
        "string" === typeof p && (_.y(C, 1, p), b.set(p, {
            height: u,
            width: A,
            adUrl: "string" === typeof H ? H : void 0,
            he: "string" === typeof a ? a : void 0,
            format: be(C, 5, 0),
            cpm: Qj(C, 2) ? zi(C, 2) : void 0
        }));
        return C
    };
    Uk = function(a, b) {
        var c = new w.Map,
            d = function(n) {
                var p = c.get(n);
                p || (p = {}, c.set(n, p));
                return p
            },
            e = [];
        a = _.z(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args,
                h = f.eventType;
            f = f.elapsedTime;
            var k = g,
                l = k.auctionId,
                m = k.bidId;
            k = k.bids;
            "bidTimeout" === h && e.push.apply(e, _.Hd(g));
            if (l === b) switch (h) {
                case "bidRequested":
                    if (!Array.isArray(k)) continue;
                    g = _.z(k);
                    for (h = g.next(); !h.done; h = g.next())
                        if (h = h.value.bidId) d(h).requestTime = f;
                    break;
                case "noBid":
                    m && (d(m).pf = f)
            }
        }
        d = new w.Map;
        a = _.z(_.v(c, "entries").call(c));
        for (f = a.next(); !f.done; f = a.next()) g = _.z(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.pf, g && h && d.set(f, {
            latency: h - g,
            Ld: !1
        });
        e = _.z(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.Ld = !0;
        return d
    };
    Vk = function(a, b) {
        var c = a.que,
            d = function() {
                var e;
                null == a || null == (e = a.requestBids) || e.before.call(b, function(f, g) {
                    return Ti().pbjs_hooks.push({
                        context: b,
                        nextFunction: f,
                        requestBidsConfig: g
                    })
                }, 0)
            };
        (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d): null == c || c.unshift(d)
    };
    Xk = function(a, b) {
        return (0, D.ra)(Ii(b, function() {
            return new Wk(a, b)
        }))
    };
    Zk = function(a, b, c, d) {
        for (var e = _.z(_.v(Object, "entries").call(Object, Yk)), f = e.next(); !f.done; f = e.next()) {
            var g = _.z(f.value);
            f = g.next().value;
            g = g.next().value;
            b & f && M(a, g(c, d))
        }
    };
    fl = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = (void 0 === b ? 0 : b) ? 604800 : -1;
        if (!(0 < b) || c && F(c, 5)) {
            var d = 0;
            try {
                d |= a != a.top ? 512 : 0, d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (g) {
                d |= 32
            }
            c = c ? ke(c) : null;
            var e = 0;
            try {
                e |= $k(a, 2500);
                if (_.G(al)) {
                    var f = _.bl(a).clientHeight;
                    e |= f ? 320 > f ? 2097152 : 0 : 1073741824
                }
                e |= cl(a);
                0 < b && !_.dl(_.el(c, b)) && (e |= 134217728)
            } catch (g) {
                e |= 32
            }
            a = d | e
        } else a = 4194304;
        return a
    };
    jl = function(a, b, c, d, e, f) {
        d = gl(d);
        if (5 !== d) return !1;
        var g = fl(e, !hl(c), f);
        if (g &= -134217729) Jh("gpt_int_ns", function(h) {
            K(h, "nsr", g);
            Ph(h, a)
        }, _.pe(il)), Zk(b, g, d, c.getAdUnitPath());
        return !!g
    };
    kl = function(a) {
        switch (a) {
            case 4:
                return 11;
            case 2:
                return 2;
            case 3:
                return 1;
            case 5:
                return 8;
            default:
                return null
        }
    };
    sl = function(a) {
        a = kl(a);
        if (!a) return null;
        var b = 0;
        if (11 !== a) {
            b |= _.t != _.t.top ? 512 : 0;
            var c = _.ll(_.t);
            c = 26 !== a && 27 !== a && 40 !== a && 10 !== a && c.adCount ? 1 == a || 2 == a ? !(!c.adCount[1] && !c.adCount[2]) : (c = c.adCount[a]) ? 1 <= c : !1 : !1;
            c && (b |= 64);
            if (b) return b
        }
        if (2 === a || 1 === a) {
            var d = {
                la: _.t,
                Nd: ml
            };
            0 === (0, _.nl)() && (d.Nd = 3E3, d.Od = 650);
            c = 0;
            try {
                var e = d.la;
                c |= e != e.top ? 512 : 0;
                var f = d.la;
                var g = Math.min(f.screen.width || 0, f.screen.height || 0);
                c |= g ? 320 > g ? 8192 : 0 : 2048;
                var h = d.la,
                    k;
                if (k = h.navigator) {
                    var l = h.navigator.userAgent;
                    k = /Android 2/.test(l) || /iPhone OS [34]_/.test(l) || /Windows Phone (?:OS )?[67]/.test(l) || /MSIE.*Windows NT/.test(l) || /Windows NT.*Trident/.test(l)
                }
                c |= k ? 1048576 : 0;
                c = d.Od ? c | (d.la.innerHeight >= d.Od ? 0 : 1024) : c | (_.ol(d.la) ? 0 : 8);
                c |= $k(d.la, d.Nd);
                c |= cl(d.la)
            } catch (m) {
                c |= 32
            }
            switch (d.Wg) {
                case 2:
                    e = d.la;
                    g = d.Ja;
                    g = void 0 === g ? null : g;
                    f = pl(e.innerWidth, 3, 0, Math.min(Math.round(e.innerWidth / 320 * 50), ql) + 15, 3);
                    null != ag(e, f, void 0 === g ? null : g) && (c |= 16777216);
                    break;
                case 1:
                    e = d.la, g = d.Ja, g = void 0 === g ? null : g, f = e.innerWidth, h = e.innerHeight, k = Math.min(Math.round(e.innerWidth / 320 * 50), ql) + 15, l = pl(f, 3, h - k, h, 3), 25 < k && l.push({
                        x: f - 25,
                        y: h - 25
                    }), null != ag(e, l, void 0 === g ? null : g) && (c |= 16777216)
            }
            if (e = d.Xg) e = d.la, d = d.Ja, d = void 0 === d ? null : d, d = void 0 === d ? null : d, g = e.innerWidth, f = e.innerHeight, h = _.pe(rl), g = pl(g, 10, f - h, f, 10), e = null != ag(e, g, d);
            e && (c |= 16777216);
            b |= c
        } else 8 === a ? b |= fl(_.t) : 11 !== a && (b |= 32);
        b || (c = _.ll(_.t), c.adCount = c.adCount || {}, c.adCount[a] = c.adCount[a] + 1 || 1);
        return b
    };
    tl = function(a, b) {
        for (var c = new Kh, d = 0; d < a.length; d++) c.set(a.length - d - 1, b(a[d]));
        return Mh(c)
    };
    ul = function(a, b, c) {
        var d = void 0 === c.Jb ? "" : c.Jb;
        c = void 0 === c.ka ? "," : c.ka;
        var e = !1;
        a = a.map(function(f) {
            f = b(f);
            e || (e = !!f);
            return String(f || d)
        });
        return e ? a.join(c) : null
    };
    vl = function(a, b, c, d) {
        var e = _.rd("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto", b.textAlign = "center");
        d && (c = Array.isArray(d), b.width = c ? d[0] + "px" : "100%", b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    };
    wl = function(a) {
        return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    };
    Al = function(a, b, c, d) {
        try {
            var e;
            if (!(e = !b)) {
                var f;
                if (!(f = !zl(b, c, d))) {
                    a: {
                        do {
                            var g = uh(b, c);
                            if (g && "fixed" == g.position) {
                                var h = !1;
                                break a
                            }
                        } while (b = b.parentElement);h = !0
                    }
                    f = !h
                }
                e = f
            }
            e && (a.height = -1)
        } catch (k) {
            a.width = -1, a.height = -1
        }
    };
    Bl = function(a) {
        if (61440 >= a.length) return {
            url: a,
            yd: 0
        };
        var b = a;
        61440 < b.length && (b = b.substring(0, 61432), b = b.replace(/%\w?$/, ""), b = b.replace(/&[^=]*=?$/, ""), b += "&trunc=1");
        return {
            url: b,
            yd: a.length - b.length + 8
        }
    };
    Cl = function(a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a), (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    Dl = function(a, b) {
        b = void 0 === b ? window : b;
        return !!Cl(a, b)
    };
    Fl = function(a, b) {
        var c = b.P;
        return ul(a, function(d) {
            return El(c[d.getDomId()]).join("&")
        }, {
            ka: "|"
        })
    };
    El = function(a) {
        a = Gl(a);
        var b = [];
        _.Lj(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    Gl = function(a) {
        for (var b = {}, c = _.z(mj(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b[(0, D.K)(nj(d))] = d.xa();
        a = Pk(a, 8);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    };
    Hl = function(a) {
        var b = !1,
            c = Oc(a, qj, 2).map(function(d) {
                var e = (0, D.K)(nj(d));
                b = "excl_cat" === e;
                d = d.xa();
                return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
            });
        a = Pk(a, 3);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    Il = function(a) {
        var b, c;
        return null != (c = null == (b = _.v(a, "find").call(a, function(d) {
            return "page_url" === x(d, 1)
        })) ? void 0 : b.xa()[0]) ? c : null
    };
    Jl = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")),
            c = a.indexOf("&", b); - 1 === c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    Kl = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        ud(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    Ll = function(a, b) {
        var c = b.P;
        return !!Il(b.U.sa()) || a.some(function(d) {
            return null !== Il(c[d.getDomId()].sa())
        })
    };
    Ol = function(a, b, c) {
        var d = null;
        try {
            var e = Ml(b.top.document, b.top).y;
            d = a.map(function(f) {
                var g = c.U,
                    h = c.P[f.getDomId()],
                    k;
                f = null == (k = yh(f, h, b.document, eh(g, h))) ? void 0 : k.y;
                k = Xg(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++Nl
            })
        } catch (f) {}
        return d
    };
    Ql = function(a, b, c, d) {
        return a.map(function(e) {
            if (c) {
                var f = d.P[e.getDomId()];
                f = ch(f);
                if (e = b.j.get(e)) e.rb = f;
                return f
            }
            f = d.U;
            var g = d.P[e.getDomId()],
                h;
            if (!(h = Pl(b, e))) {
                f = ch(g, F(f, 6) || F(g, 17) ? null : sh(e));
                if (e = b.j.get(e)) e.rb = f;
                h = f
            }
            return h
        }).join()
    };
    Sl = function() {
        var a = void 0 === a ? window : a;
        Rl = _.ue(a)
    };
    Tl = function(a, b) {
        return a && (a = De(a, Rg, 1)) ? a.getWidth() || b.innerWidth : 0
    };
    Ul = function(a, b) {
        return a && (a = De(a, Rg, 1)) ? a.getHeight() || b.innerHeight : 0
    };
    Vl = function(a) {
        return a && (a = De(a, Rg, 2)) ? a.getWidth() || 0 : 0
    };
    Wl = function(a) {
        return a && (a = De(a, Rg, 2)) ? a.getHeight() || 0 : 0
    };
    Xl = function(a, b) {
        var c;
        return !(null != (c = F(a, 11)) ? !c : !F(b, 10))
    };
    Yl = function(a, b, c, d) {
        if (a = sh(a, b)) {
            var e;
            if (c = null != (e = F(c, 24)) ? e : F(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, 0 === c.height ? c = !1 : (c = _.t.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
            c || (a.style.display = "none")
        }
    };
    ym = function(a, b, c, d, e, f, g, h, k) {
        if (a.uf) {
            var l = Zl($l(new am, bm(cm(new dm, b), c)), bm(cm(new dm, b), c));
            d = em(new fm, gm(hm(im(jm(km(new lm, f), g), Math.round(g / e * 100)), h), Math.round(h / (e * d) * 100)));
            b = mm(new nm, gm(hm(im(jm(km(new lm, f), g), Math.round(g / e * 100)), h), Math.round(h / (c * b) * 100)));
            k = om(pm(new qm, [].concat(_.Hd(_.v(Pg, "keys").call(Pg))).map(function(m) {
                return Number(m)
            })), k);
            l = rm(sm(tm(um(vm(wm(xm(l), d), b)), k), a.ie), 5, document.URL);
            Kd(a.eb, l)
        }
    };
    Fm = function(a, b, c, d, e, f, g) {
        var h = new Ne,
            k = new zm(a, d);
        N(h, k);
        f = new Am(a, e, f);
        N(h, f);
        f = new Bm(a, b, e, g, k.Wa);
        N(h, f);
        b = new Cm(a, b, _.G(Dm) ? c : void 0, e, d, g, k.Wa);
        N(h, b);
        a = new Em(a, k.Wa, b.l, f.l);
        N(h, a);
        Xe(h);
        return {
            Wa: a.A,
            ua: h
        }
    };
    Km = function(a, b) {
        var c = window,
            d = new Ne;
        c = new Gm(c);
        _.Hm(d, c);
        b = new Im(a, c, b);
        N(d, b);
        a = new Jm(a, c, b.vb);
        N(d, a);
        Xe(d);
        return {
            vb: b.vb,
            Id: a.l,
            ua: d
        }
    };
    Nm = function(a, b, c, d, e) {
        return "string" === typeof d && d.length && (null == e || "string" === typeof e || "number" === typeof e && Lm(e)) ? Mm(a, b, d, "number" === typeof e ? e : 1, c, "string" === typeof e ? e : void 0) : (b.error(Ni("googletag.defineOutOfPageSlot", [d, e])), null)
    };
    Lm = function(a) {
        return !!Ei(yj, function(b) {
            return b === a
        })
    };
    Mm = function(a, b, c, d, e, f) {
        b = e.add(a, b, c, [1, 1], {
            tb: f,
            format: d
        });
        a = b.slotId;
        b = b.Ta;
        a && b && (_.y(b, 15, d), _.Om(a, function() {
            var g = window,
                h = kl(d);
            if (null != h) {
                g = _.ll(g);
                var k = g.adCount && g.adCount[h];
                k && (g.adCount[h] = k - 1)
            }
        }));
        return null != a ? a : null
    };
    Tm = function(a, b, c, d, e, f, g) {
        var h = document,
            k = c.getAdUnitPath();
        c = Pm.get(be(c, 2, 0));
        if (k && c) {
            var l, m = _.G(Qm) ? null == (l = Nm(a, g, f, k, c)) ? void 0 : l.j : b.defineOutOfPageSlot(k, c);
            m && (a = Rm(Ch(), m.getSlotElementId()), _.sg((0, D.K)(a), 25, d), m.addService(b.pubads()), Sm(h, function() {
                b.display(m);
                F(e, 4) && b.pubads().refresh([m])
            }))
        }
    };
    Ym = function(a) {
        var b, c = null == (b = window.top) ? void 0 : b.location.href;
        if (!c) return !1;
        var d = bh(c),
            e;
        return null == (e = Oc(a, Um, 1)) ? void 0 : e.some(function(f) {
            switch (ri(f, Vm)) {
                case 1:
                    f = (0, D.K)(Wm(f, Xm, 1, Vm));
                    if (Qj(f, 1) && Qj(f, 2)) {
                        var g = (0, D.K)(ce(f, 1));
                        f = 0 >= g || g > c.length ? !1 : (0, D.K)(ce(f, 2)) === bh(c.substring(0, g))
                    } else f = !1;
                    return f;
                case 2:
                    return (0, D.K)(ce(f, si(f, Vm, 2))) === d;
                default:
                    return !1
            }
        })
    };
    $m = function(a) {
        var b;
        return null == (b = Zm(a, 2)) ? void 0 : b.some(function(c) {
            switch (c) {
                case 0:
                    return !1;
                case 1:
                    return !0;
                case 2:
                    return 0 === (0, _.nl)();
                case 4:
                    return 2 === (0, _.nl)();
                case 3:
                    return 1 === (0, _.nl)();
                default:
                    return !1
            }
        })
    };
    cn = function(a, b, c, d) {
        for (var e = document, f = [], g = [], h = _.z(Oc(b, an, 3)), k = h.next(); !k.done; k = h.next())
            if (k = k.value, Ie(k, 1) && Ie(k, 2) && Qj(k, 3) && Qj(k, 4)) {
                var l = (0, D.K)(k.getAdUnitPath()),
                    m = e.querySelector(bn(k, 1));
                if (m && m.parentElement && (l = "gpt_opp_" + l, !e.getElementById(l))) {
                    var n = e.createElement("div");
                    n.id = l;
                    m.insertAdjacentElement("beforebegin", n);
                    if (k = a.defineSlot((0, D.K)(k.getAdUnitPath()), [k.getWidth(), k.getHeight()], l)) k.addService(a.pubads()), m = void 0, null != (m = Rm(Ch(), k.getSlotElementId())) && _.sg(m, 25, c), g.push(k)
                }
            }
        Qj(b, 1) && f.push((0, D.K)(ce(b, 1)));
        0 < g.length && Sm(e, function() {
            for (var p = _.z(g), q = p.next(); !q.done; q = p.next()) a.display(q.value);
            F(d, 4) && a.pubads().refresh(g)
        });
        return f
    };
    gn = function(a, b, c) {
        var d = dn(b, c);
        c = d.slotId;
        var e = d.ue;
        d = d.ve;
        if (c) {
            if (d = Ch(), (b = Rm(d, c.getDomId())) && !F(b, 19))
                if (e && d.D.set(c, e), sh(c) || dh(gl(b)))
                    for (_.y(b, 19, !0), a = oh(d.j, d.m), e = _.z(Pk(b, 4)), b = e.next(); !b.done; b = e.next()) b = Wi(b.value), b = (0, D.K)(Hi.get((0, D.K)(b))), b.m && b.T(a, c);
                else M(a, en(String(b.getAdUnitPath()), String(b.getDomId())), c)
        } else d ? a.error(fn(d)) : a.error(Ni("googletag.display", [String(b)]))
    };
    dn = function(a, b) {
        var c = "";
        if ("string" === typeof a) c = a, b = hn(b, c);
        else if (_.ea(a) && 1 == a.nodeType) {
            var d = a;
            c = d.id;
            b = hn(b, c)
        } else b = (E = [].concat(_.Hd(b.X)), _.v(E, "find")).call(E, function(e) {
            return e.j === a
        });
        return {
            slotId: b,
            ue: d,
            ve: c
        }
    };
    jn = function(a) {
        switch (Number(a)) {
            case 2:
            case 3:
                return "Anchor";
            case 5:
                return "Interstitial";
            default:
                return "Out-of-page creative"
        }
    };
    kn = function(a, b, c, d) {
        M(a, Nj("googletag.setConfig.commerce", Oj(b), c, Oj(d)))
    };
    ln = function(a) {
        return "string" === typeof a && 0 < a.length && 5E3 > a.length
    };
    mn = function(a) {
        if (!Array.isArray(a) || 0 === a.length) return !1;
        var b = a.length - 1;
        return a.every(function(c) {
            if ("string" !== typeof c || 0 === c.length) return !1;
            b += c.length;
            return 5E3 < b ? !1 : !0
        })
    };
    pn = function(a, b, c) {
        if ("object" === typeof a && null !== a && _.v(Object, "keys").call(Object, (0, D.K)(a)).some(function(d) {
                return (E = _.v(Object, "values").call(Object, nn), _.v(E, "includes")).call(E, Number(d))
            })) return !0;
        on("taxonomies", a, b, c);
        return !1
    };
    rn = function(a, b) {
        var c = Oc(b, qn, 1).filter(function(d) {
            return be(d, 1, 0) !== a
        });
        Fc(b, 1, c)
    };
    yn = function(a, b, c, d) {
        if (void 0 !== _.v(b, "values"))
            if (null === _.v(b, "values")) rn(a, c);
            else if (sn(_.v(b, "values"), d, b) && (b = tn(a, _.v(b, "values"), d, b), b.length)) {
            var e = (E = Oc(c, qn, 1), _.v(E, "find")).call(E, function(f) {
                return be(f, 1, 0) === a
            });
            e ? un(e, b) : vn(c, un(wn(new qn, a), b));
            d.info(xn(Oj(b), Oj(a)))
        }
    };
    sn = function(a, b, c) {
        if (Array.isArray(a)) return !0;
        on("taxonomyData.values", a, b, c);
        return !1
    };
    tn = function(a, b, c, d) {
        var e = [],
            f = [],
            g = !1;
        b = _.z(b);
        for (var h = b.next(); !h.done; h = b.next()) h = h.value, 5 <= e.length && (g = !0), "string" !== typeof h ? f.push(h) : g || h in e || e.push(h);
        0 < f.length && on("taxonomyData.values", f, c, d);
        g && M(c, zn(Oj(a), Oj(5)));
        return e
    };
    on = function(a, b, c, d) {
        M(c, Nj("googletag.setConfig.pps", Oj(d), a, Oj(b)))
    };
    Bn = function(a) {
        An = a
    };
    Dn = function() {
        for (var a = _.z(_.v(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value,
                d = b.src;
            !d || -1 == d.indexOf("/tag/js/gpt.js") && -1 == d.indexOf("/tag/js/gpt_mobile.js") || c.googletag_executed || !b.textContent || (c.googletag_executed = !0, c = document.createElement("script"), Ra(c, new Qa(b.textContent, Cn)), document.head.appendChild(c), document.head.removeChild(c))
        }
    };
    En = function(a, b) {
        b = _.z(_.v(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.z(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    };
    Hn = function(a, b, c) {
        var d = [];
        c = [].concat(_.Hd(c.X)).slice();
        if (b) {
            if (!Array.isArray(b)) return M(a, Ni("googletag.destroySlots", [b])), !1;
            ha(b);
            d = c.filter(function(e) {
                return _.v(b, "includes").call(b, e.j)
            })
        } else d = c;
        if (!d.length) return !1;
        Fn(d);
        Gn(d);
        return !0
    };
    Mn = function(a, b, c) {
        var d;
        if (Dl("google_content_service_disabled", c)) Jh("gpt_scdvqp", function(e) {
            Ph(e, a)
        }, 1);
        else if (!_.G(In)) return J(a, 817, function() {
            _.G(Jn) && b.error(Kn(), null, !0);
            null != d || (d = new Ln(a, b));
            return Si(a, b, d)
        })
    };
    Zn = function(a, b, c, d, e, f) {
        var g = Ti(),
            h;
        d = Mn(a, b, d);
        var k = J(a, 74, function(m, n, p) {
                return f.defineSlot(a, b, m, n, p)
            }),
            l = {};
        k = (l._loaded_ = !0, l.cmd = [], l._vars_ = g._vars_, l.evalScripts = g.evalScripts, l.display = J(a, 95, function(m) {
            void gn(b, m, f)
        }), l.defineOutOfPageSlot = J(a, 73, function(m, n) {
            return (m = Nm(a, b, f, m, n)) ? m.j : null
        }), l.getVersion = J(a, 946, function() {
            return a.lb ? String(a.lb) : a.Ha
        }), l.pubads = J(a, 947, function() {
            return dk(a, b, c, f)
        }), l.companionAds = J(a, 816, function() {
            null != h || (h = new Nn(a, b, c));
            return Qi(a, b, h)
        }), l.setAdIframeTitle = J(a, 729, Bn), l.getEventLog = J(a, 945, function() {
            return new On(a, b)
        }), l.sizeMapping = J(a, 90, function() {
            return new Pn(a, b)
        }), l.enableServices = J(a, 91, function() {
            for (var m = _.z(Qn), n = m.next(); !n.done; n = m.next()) n = n.value, n.m && b.info(Rn()), n.enable()
        }), l.destroySlots = J(a, 75, function(m) {
            return Hn(b, m, f)
        }), l.enums = Bj(), l.defineSlot = k, l.defineUnit = k, l.getWindowsThatCanCommunicateWithHostpageLibrary = J(a, 955, function(m) {
            return Sn(m)
        }), l.disablePublisherConsole = J(a, 93, Zi), l.onPubConsoleJsLoad = J(a, 731, $i), l.openConsole = J(a, 732, function(m) {
            aj(a, void 0 === m ? "" : m)
        }), l.setConfig = J(a, 1034, function(m) {
            if (_.ea(m)) {
                var n = m.commerce,
                    p = m.pps;
                if (null === n) Bc(Tn(e, Un, 33), 1);
                else if (void 0 !== n)
                    if (m = Tn(e, Un, 33), _.ea(n)) {
                        var q = n.query,
                            u = n.categories,
                            A = n.productIds,
                            H = n.filter,
                            C = tc(Vn(m, Wn, 1));
                        null === q ? Bc(C, 1) : ln(q) ? _.y(C, 1, q) : void 0 !== q && kn(b, n, "query", q);
                        null === u ? _.y(C, 2, uc) : mn(u) ? _.Mg(C, 2, u) : void 0 !== u && kn(b, n, "categories", u);
                        null === A ? _.y(C, 3, uc) : mn(A) ? _.Mg(C, 3, A) : void 0 !== A && kn(b, n, "productIds", A);
                        null === H ? Bc(C, 4) : ln(H) ? _.y(C, 4, H) : void 0 !== H && kn(b, n, "filter", H);
                        Ie(C, 1) || Pk(C, 2).length ? _.sg(m, 1, C) : M(b, Xn())
                    } else M(b, Ni("googletag.setConfig.commerce", [n]));
                if (null === p) Bc(Tn(e, Un, 33), 2);
                else if (void 0 !== p && (n = Tn(Tn(e, Un, 33), Yn, 2), "object" === typeof p && (0, D.K)(p).hasOwnProperty("taxonomies") ? m = !0 : (M(b, Ni("googletag.setConfig.pps", [p])), m = !1), m))
                    if (m = p.taxonomies, void 0 === m) on("taxonomies", m, b, p);
                    else if (null === m) Fc(n, 1);
                else if (pn(m, b, p))
                    for (p = _.z(_.v(Object, "entries").call(Object, m)), q = p.next(); !q.done; q = p.next()) {
                        q = _.z(q.value);
                        var I = q.next().value;
                        q = q.next().value;
                        u = n;
                        A = b;
                        C = m;
                        if (void 0 === I || null === I) on("taxonomy", I, A, C);
                        else {
                            H = Number(I);
                            var R = H,
                                S = A,
                                U = C;
                            (E = _.v(Object, "values").call(Object, Aj), _.v(E, "includes")).call(E, Number(R)) ? I = !0 : (on("taxonomy", I, S, U), I = !1);
                            I && void 0 !== q && (null === q ? rn(H, u) : (I = A, "object" === typeof q && (0, D.K)(q).hasOwnProperty("values") ? C = !0 : (on("taxonomyData", q, I, C), C = !1), C && yn(H, q, u, A)))
                        }
                    }
            } else M(b, Ni("googletag.setConfig", [m]))
        }), l.apiReady = !0, l);
        d && (k.content = d);
        En(g, k)
    };
    $n = function(a) {
        var b = function() {
            return a.Reflect.construct(a.HTMLElement, [], this.constructor)
        };
        b.prototype = a.HTMLElement.prototype;
        b.prototype.constructor = b;
        _.v(Object, "setPrototypeOf").call(Object, b, a.HTMLElement);
        return b
    };
    bo = function(a, b) {
        var c = _.pe(ao);
        Math.random() <= c && je(b, a)
    };
    mo = function(a, b, c) {
        var d = {};
        if (!c) return b.error(co("missing data-rendering attribute")), d;
        try {
            var e = Ud(eo, fo(c))
        } catch (k) {}
        var f;
        (null == (f = e) ? 0 : Zg(f, go, 1)) ? d.xf = ho(io(jo(ko(_.Bg(new lo, 4, 1), 7), a.Za || a.Ha), De(e, go, 1)), !0): b.error(co("invalid data-rendering attribute"));
        var g;
        d.nf = null == (g = e) ? void 0 : bn(g, 2);
        var h;
        d.Tc = null == (h = e) ? void 0 : bn(h, 3);
        return d
    };
    po = function(a, b) {
        var c, d, e, f, g, h, k, l, m, n;
        return _.$a(function(p) {
            c = ij(b, "ai");
            if (!c || 0 === c.length) return p.return(w.Promise.resolve(b));
            d = no();
            if (null == (e = d) ? 0 : e.gmaSdk) {
                if (f = d.gmaSdk.getClickSignalsWithTimeout ? d.gmaSdk.getClickSignalsWithTimeout(c, 200) : d.gmaSdk.getClickSignals(c)) return p.return(w.Promise.resolve(b.replace("?", "?ms=" + encodeURIComponent(f) + "&")))
            } else if (null == (g = d) ? 0 : null == (h = g.webkit) ? 0 : null == (k = h.messageHandlers) ? 0 : k.getGmaClickSignals) return l = new _.Sf, m = l.resolve, n = l.promise, oo(d.webkit.messageHandlers.getGmaClickSignals, {
                click_string: c
            }, function(q) {
                m(b.replace("?", "?" + q + "&"))
            }, function() {
                m(b)
            }, function(q, u) {
                return _.zg(a, q, u)
            }), p.return(n);
            return p.return(w.Promise.resolve(b))
        })
    };
    qo = function(a, b, c, d) {
        var e, f, g;
        return _.$a(function(h) {
            e = b.getBoundingClientRect();
            f = {};
            var k = d.replace;
            var l = (f.nx = Math.floor(c.clientX - e.x), f.ny = Math.floor(c.clientY - e.y), f.dim = Math.floor(e.width) + "x" + Math.floor(e.height), f);
            var m = [];
            for (n in l) Ij(n, l[n], m);
            l = m.join("&");
            if (l) {
                m = -1;
                0 > m && (m = 0);
                var n = -1;
                if (0 > n || n > m) {
                    n = m;
                    var p = ""
                } else p = "".substring(n + 1, m);
                m = ["".slice(0, n), p, "".slice(m)];
                n = m[1];
                m[1] = l ? n ? n + "&" + l : l : n;
                l = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
            } else l = "";
            g = k.call(d, "?", l + "&");
            return h.return(po(a, g))
        })
    };
    ro = function(a, b, c) {
        var d, e, f, g, h, k, l, m, n, p;
        return _.$a(function(q) {
            if (null == (d = c) ? 0 : null == (e = d.gmaSdk) ? 0 : e.getViewSignals) {
                if (f = c.gmaSdk.getViewSignals()) return g = b.replace(/^(.*?)(&adurl=)?$/, "$1&ms=" + f + "$2"), q.return(w.Promise.resolve(g))
            } else if (null == (h = c) ? 0 : null == (k = h.webkit) ? 0 : null == (l = k.messageHandlers) ? 0 : l.getGmaViewSignals) return m = new _.Sf, n = m.resolve, p = m.promise, oo(c.webkit.messageHandlers.getGmaViewSignals, {}, function(u) {
                n(b.replace(/^(.*?)(&adurl=)?$/, "$1&" + u + "$2"))
            }, function() {
                n(b)
            }, function(u, A) {
                return _.zg(a, u, A)
            }), q.return(p);
            return q.return(w.Promise.resolve(b))
        })
    };
    xo = function(a, b) {
        var c = window;
        var d = void 0 === d ? ib : d;
        var e;
        if (c.customElements && null != (e = c.Reflect) && e.construct && !c.customElements.get("google-product-ad")) {
            var f = no(),
                g;
            null == (g = f ? new so(function(k, l) {
                return _.zg(a, k, l)
            }, function() {}) : void 0) || to(g);
            var h = $n(c);
            e = function() {
                return h.apply(this, arguments) || this
            };
            _.O(e, h);
            e.prototype.connectedCallback = function() {
                var k = mo(a, b, this.dataset.rendering),
                    l = k.xf,
                    m = k.nf;
                k = k.Tc;
                l && d(uo(window, l));
                m && ro(a, m, f).then(function(n) {
                    return void vo(n)
                });
                k && ("true" === this.getAttribute("data-enable-click") || this.querySelector('[data-enable-click="true"]') ? (this.Tc = k, this.addEventListener("click", this.j)) : M(b, wo(k)))
            };
            e.prototype.j = function(k) {
                var l = k.target instanceof c.HTMLElement ? k.target.closest("[data-enable-click]") : void 0;
                l instanceof c.HTMLElement && "true" === l.getAttribute("data-enable-click") && qo(a, this, k, this.Tc).then(function(m) {
                    return void vo(m)
                })
            };
            c.customElements.define("google-product-ad", e)
        }
    };
    yo = function(a) {
        var b = {};
        a = _.z(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[x(c, 1)] = x(c, 2);
        return b
    };
    Bo = function(a, b) {
        var c;
        return zo(a, Ao, function(d) {
            d = d.detail.data;
            try {
                return c = JSON.parse(d), "rewarded" === c.type && c.message === b
            } catch (e) {
                return !1
            }
        }).then(function() {
            return c
        })
    };
    Do = function(a, b, c) {
        return new Co(c, a, Ao, function(d) {
            d = d.detail.data;
            try {
                var e = JSON.parse(d);
                return "rewarded" === e.type && e.message === b ? e : null
            } catch (f) {
                return null
            }
        })
    };
    Eo = function(a) {
        .001 > ee() && je({
            c: "sd",
            s: String(a)
        }, "gpt_whirs")
    };
    Jo = function(a, b, c, d) {
        d = d.Df;
        var e = b.kind;
        switch (e) {
            case 0:
                return new(d ? Fo : Go)(a, b, c);
            case 1:
                return new Ho(a, b, c);
            case 2:
                return new Io(a, b, c);
            default:
                Oa(e)
        }
    };
    Ko = function(a) {
        if (!vd(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    Po = function(a, b, c, d) {
        var e = sh(a, document);
        e && Zf(e, window, d, !0);
        Lo(_.lg(Cg), "5", (0, D.K)(x(c.P[a.getDomId()], 20)));
        a.dispatchEvent(Mo, 801, {
            Bd: null,
            isBackfill: !1
        });
        if (_.No(b, a) && !Bh(a, document)) {
            b = c.U;
            c = c.P[a.getDomId()];
            var f;
            (null != (f = F(c, 10)) ? f : F(b, 11)) && Yl(a, document, c, b)
        }
        a.dispatchEvent(Oo, 825, {
            isEmpty: !0
        })
    };
    Ro = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver ? new IntersectionObserver(a, b) : new Qo(a, b)
    };
    So = function(a) {
        return Qj(a, 1) ? Qj(a, 3) && 0 !== (0, _.nl)() ? (0, D.ra)(x(a, 1)) * (0, D.ra)(we(a, 3)) : x(a, 1) : null
    };
    To = function(a, b) {
        return "undefined" === typeof IntersectionObserver ? new Qo(b, {
            rootMargin: a + "%"
        }) : new IntersectionObserver(b, {
            rootMargin: a + "%"
        })
    };
    $o = function(a, b) {
        for (var c = {}, d = _.z(Oc(a, Uo, 7)), e = d.next(); !e.done; e = d.next()) e = e.value, c[bn(e, 1)] = JSON.parse(bn(e, 2));
        (d = De(a, Vo, 6)) && (c["https://googleads.g.doubleclick.net"] = d.toJSON());
        d = {};
        e = _.z(Oc(a, Wo, 11));
        for (var f = e.next(); !f.done; f = e.next()) f = f.value, d[bn(f, 1)] = ce(f, 2);
        f = {};
        Xo(a, 18) && (f["https://googleads.g.doubleclick.net"] = Xo(a, 18));
        var g;
        e = {
            seller: "https://pubads.g.doubleclick.net",
            decisionLogicUrl: bn(a, 1),
            trustedScoringSignalsUrl: bn(a, 2),
            interestGroupBuyers: Pk(a, 3),
            sellerExperimentGroupId: Xo(a, 17),
            auctionSignals: JSON.parse(bn(a, 4) || "{}"),
            sellerSignals: (null == (g = De(a, Yo, 5)) ? void 0 : g.toJSON()) || [],
            sellerTimeout: ce(a, 15) || 50,
            perBuyerExperimentGroupIds: f,
            perBuyerSignals: c,
            perBuyerTimeouts: d
        };
        c = new Yo;
        "0" !== Dc(x(Vn(Vn(a, Yo, 5), Zo, 5), 2), "0") && (g = new Zo, d = Dc(x(Vn(Vn(a, Yo, 5), Zo, 5), 2), "0"), Ac(g), null != d && 0 !== +d ? _.y(g, 2, d) : Bc(g, 2), _.sg(c, 5, g));
        return {
            seller: "https://pubads.g.doubleclick.net",
            decisionLogicUrl: bn(a, 1),
            sellerExperimentGroupId: Xo(a, 17),
            sellerSignals: c.toJSON(),
            sellerTimeout: ce(a, 15) || 50,
            interestGroupBuyers: [],
            auctionSignals: {},
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            componentAuctions: [e].concat(_.Hd(null != b ? b : []))
        }
    };
    ep = function(a, b) {
        var c, d, e, f, g, h, k, l;
        return _.$a(function(m) {
            if (1 == m.j) return _.v(a, "startsWith").call(a, "urn:") && ap.deprecatedURNToURL && ap.deprecatedReplaceInURN ? ab(m, ap.deprecatedURNToURL(a), 2) : m.return();
            c = m.m;
            d = {};
            e = b.gdprApplies || "";
            (null != (f = c.match(bp)) ? f : []).forEach(function(n) {
                d[n] = e
            });
            g = b.Ge || "";
            (null != (h = c.match(cp)) ? h : []).forEach(function(n) {
                d[n] = g
            });
            k = b.ke || "";
            (null != (l = c.match(dp)) ? l : []).forEach(function(n) {
                d[n] = k
            });
            return ab(m, ap.deprecatedReplaceInURN(a, d), 0)
        })
    };
    gp = function(a, b, c) {
        var d = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner",
            e = fp(c, 18),
            f = fp(c, 7);
        if (f || e) d += "&isContextualWinner=1";
        f && (d += "&hasXfpAds=1");
        e = c.getEscapedQemQueryId();
        f = bn(c, 6);
        e && (d += "&winner_qid=" + encodeURIComponent(e));
        f && (d += "&xfpQid=" + encodeURIComponent(f));
        fp(c, 4) && (d += "&is_plog=1");
        (e = bn(c, 11)) && (d += "&ecrs=" + e);
        (null == c ? 0 : fp(c, 21)) || (d += "&turtlexTest=1");
        d += "&applied_timeout_ms=" + (b + "&duration_ms=" + Math.round(a));
        vo(d)
    };
    Vp = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, u, A, H) {
        var C = new Ne,
            I = Xg(!0, window),
            R = h.U,
            S = h.P[d.getDomId()],
            U = new hp(a, window);
        N(C, U);
        var Y = k.Lb,
            sa = k.Vb,
            xa = k.Ee,
            ya = k.Gd,
            va = k.ne,
            qb = k.Ne,
            Da = k.Ef,
            za = k.Fe,
            fb = k.Be,
            lb = k.ac,
            ge = k.Ff,
            ui = k.Me,
            Se = k.Ve,
            rt = k.Af,
            hg = k.If,
            vi = k.Jf,
            xl = k.Je,
            wi = k.jc,
            he = k.wa,
            yl = k.be,
            ig = k.Lf;
        k = k.hf;
        if (.01 > Math.random()) {
            u = new ip(a, ig, u.M, Da, ya);
            N(C, u);
            var DC = u.A
        }
        sa = new jp(a, A, Y, sa, he, ig, DC);
        N(C, sa);
        Y = new kp;
        Y.j(n);
        A = new lp(a, window.top, Y);
        N(C, A);
        l = new mp(a, kg(d.getAdUnitPath()), console, l, A.A);
        N(C, l);
        he = new np(a, gl(S), I.height, fb, sa.Lb);
        N(C, he);
        l = new op(a, d, sh(d, m), d.getDomId(), Ah(d), m, gl(S), g);
        N(C, l);
        ig = new pp(a, sa.wa, va, qb, Da);
        N(C, ig);
        Da = new qp(a, R, S, window, va, Da);
        N(C, Da);
        hg = new rp(a, De(R, sp, 5), hg);
        N(C, hg);
        lb = new tp(a, d.getAdUnitPath(), S, I.width, window, lb, sa.Vb, he.A, ig.A, l.A);
        N(C, lb);
        he = new up(a, S, yl);
        N(C, he);
        e = new vp(a, g, n, e, yl, he.A, lb.wa, lb.o);
        N(C, e);
        if (f) {
            var Ib = new wp(a, d, h, g, ya, e.o);
            N(C, Ib);
            H = new xp(a, H, e.o);
            N(C, H);
            Ib = new yp(a, Ib.l, H.A);
            N(C, Ib);
            Ib = Ib.A
        }
        H = new zp(a, d, R, S, gl(S), m, g, l.A, Da.A, lb.o, xa, Ib);
        N(C, H);
        f = new Ap(a, H.A);
        N(C, f);
        n = new Bp(a, d, I, g, f.A, hg.l, Ib);
        N(C, n);
        f = new Cp(a, window, l.A);
        N(C, f);
        vi = new Dp(a, n.A, H.A, vi, hg.l, void 0, Ib);
        N(C, vi);
        I = new Ep(a, m, d, S, I, xa, l.A, H.A, lb.o, lb.ac, f.A, ya, Ib);
        N(C, I);
        ge = new Fp(a, R, S, e.wa, Da.A, va, ge);
        N(C, ge);
        wi = new Gp(a, window, wi, U.A, Ib);
        N(C, wi);
        f = new Hp(a, gl(S), m);
        N(C, f);
        n = new Ip(a, window);
        N(C, n);
        q = new Jp(a, q, gl(S), fb, za, Ib);
        N(C, q);
        Se = new Kp(a, Se, Ib);
        N(C, Se);
        ya = new Lp(a, d, g, h, p, window, e.wa, Da.A, vi.A, l.A, H.A, e.J, ya, xa, ge.A, qb, ui, rt, I.A, wi.A, f.A, q.A, sa.l, yl, n.A, Ib);
        N(C, ya);
        qb = new Mp(a, window, d, ya.o, Y);
        N(C, qb);
        fb = new Np(a, g, gl(S), d, window, fb, ya.l, l.A, q.A);
        N(C, fb);
        h = new Op(a, d, gl(S), (0, D.K)(h.Cb), za, ya.l, l.A, A.A, q.A);
        N(C, h);
        S = new Pp(a, d, gl(S), p, window, ya.l, l.A);
        N(C, S);
        m = new Qp(a, d, ya.l, m, p);
        N(C, m);
        g = new Rp(a, Pl(g, d), window.top, ya.l, U.A);
        N(C, g);
        d = new Sp(a, d, xa, va, rt, ya.l, H.A, ya.B);
        N(C, d);
        xl = new Tp(a, window, xl, ya.l, H.A, l.A);
        N(C, xl);
        N(C, new Up(a, k, Ti(), R, b, c));
        return C
    };
    Xp = function() {
        if (Ha()) var a = 0 <= Wp(Ja(), 11);
        else a = Ea(Ba()), Ia(a), a = Fa() ? (a = a[2]) && a[1] || "" : "", "" === a ? a = NaN : (a = a.split("."), a = 0 === a.length ? NaN : Number(a[0])), a = 65 <= a;
        return a
    };
    Yp = function(a, b) {
        return window.IntersectionObserver ? new IntersectionObserver(a, {
            rootMargin: b
        }) : new Qo(a, {
            rootMargin: b
        })
    };
    Zp = function(a) {
        function b(f) {
            var g = f;
            return function() {
                var h = zd.apply(0, arguments);
                if (g) {
                    var k = g;
                    g = null;
                    k.apply(null, _.Hd(h))
                }
            }
        }
        var c = null,
            d = 0,
            e = 0;
        return function() {
            var f, g, h, k;
            return _.$a(function(l) {
                if (1 == l.j) return d && clearTimeout(d), d = 0, f = new _.Sf, g = b(f.resolve), h = ++e, ab(l, 0, 2);
                if (e !== h) return g(!1), l.return(f.promise);
                c ? c(!1) : g(!0);
                k = b(function() {
                    c = null;
                    d = 0;
                    g(!0)
                });
                d = setTimeout(k, 1E3);
                _.Om(a, function() {
                    return void g(!1)
                });
                c = g;
                return l.return(f.promise)
            })
        }
    };
    gq = function() {
        var a = new $p;
        var b = (new aq).setCorrelator(re(_.t));
        var c = se().join();
        b = _.Cc(b, 5, c, "");
        b = _.Bg(b, 2, 1);
        a = _.sg(a, 1, b);
        b = new bq;
        c = _.G(cq);
        b = _.Cc(b, 7, c, !1);
        c = _.G(dq);
        b = _.Cc(b, 8, c, !1);
        c = _.G(eq);
        b = _.Cc(b, 9, c, !1);
        b = _.Cc(b, 10, !0, !1);
        c = _.G(fq);
        b = _.Cc(b, 13, c, !1);
        b = _.Cc(b, 16, !0, !1);
        a = _.sg(a, 2, b);
        window.google_rum_config = a.toJSON()
    };
    iq = function() {
        var a = hq,
            b = Number(a);
        return 1 > b || Math.floor(b) !== b ? (je({
            v: a
        }, "gpt_inv_ver"), "1") : a
    };
    lq = function() {
        var a = jq() || de() ? 1 : ee(),
            b = .001 > a,
            c = .001 > a;
        b ? (_.lg(Wj).H = !0, kq(31067358)) : .002 > a && kq(31067357);
        Xj(23);
        return {
            Sb: b,
            Xe: 1E3,
            vf: 1E-4 > a,
            We: 1E4,
            ae: b,
            Fd: 1E3,
            uf: c,
            ie: 1E3
        }
    };
    oq = function(a) {
        var b = iq();
        var c = /m\d+/.test("") ? Number("".substring(1)) : void 0;
        var d = re(window),
            e = window.document.URL,
            f = _.pe(mq);
        return _.v(Object, "assign").call(Object, {}, a, {
            Ha: b,
            Za: "",
            lb: c,
            pvsid: d,
            eb: new nq(f),
            we: e
        })
    };
    pq = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    qq = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    rq = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    sq = rq(this);
    tq = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    w = {};
    uq = {};
    _.v = function(a, b) {
        var c = uq[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    };
    vq = function(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in w ? f = w : f = sq;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = tq && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? qq(w, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === uq[d] && (a = 1E9 * Math.random() >>> 0, uq[d] = tq ? sq.Symbol(d) : "$jscp$" + a + "$" + d), qq(f, uq[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    vq("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.j = f;
            qq(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.j
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    vq("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, w.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = sq[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && qq(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return wq(pq(this))
                }
            })
        }
        return a
    }, "es6");
    wq = function(a) {
        a = {
            next: a
        };
        a[_.v(w.Symbol, "iterator")] = function() {
            return this
        };
        return a
    };
    P = function(a) {
        return a.raw = a
    };
    _.z = function(a) {
        var b = "undefined" != typeof w.Symbol && _.v(w.Symbol, "iterator") && a[_.v(w.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: pq(a)
        }
    };
    xq = function(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    };
    _.Hd = function(a) {
        return a instanceof Array ? a : xq(_.z(a))
    };
    yq = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    zq = tq && "function" == typeof _.v(Object, "assign") ? _.v(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) yq(d, e) && (a[e] = d[e])
        }
        return a
    };
    vq("Object.assign", function(a) {
        return a || zq
    }, "es6");
    var Aq = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        Bq = function() {
            function a() {
                function c() {}
                new c;
                _.v(w.Reflect, "construct").call(w.Reflect, c, [], function() {});
                return new c instanceof c
            }
            if (tq && "undefined" != typeof w.Reflect && _.v(w.Reflect, "construct")) {
                if (a()) return _.v(w.Reflect, "construct");
                var b = _.v(w.Reflect, "construct");
                return function(c, d, e) {
                    c = b(c, d);
                    e && _.v(w.Reflect, "setPrototypeOf").call(w.Reflect, c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                void 0 === e && (e = c);
                e = Aq(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        Cq;
    if (tq && "function" == typeof _.v(Object, "setPrototypeOf")) Cq = _.v(Object, "setPrototypeOf");
    else {
        var Dq;
        a: {
            var Eq = {
                    a: !0
                },
                Fq = {};
            try {
                Fq.__proto__ = Eq;
                Dq = Fq.a;
                break a
            } catch (a) {}
            Dq = !1
        }
        Cq = Dq ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    Gq = Cq;
    _.O = function(a, b) {
        a.prototype = Aq(b.prototype);
        a.prototype.constructor = a;
        if (Gq) Gq(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.yh = b.prototype
    };
    Hq = function() {
        this.l = !1;
        this.I = null;
        this.m = void 0;
        this.j = 1;
        this.o = this.D = 0;
        this.C = null
    };
    Iq = function(a) {
        if (a.l) throw new TypeError("Generator is already running");
        a.l = !0
    };
    Hq.prototype.H = function(a) {
        this.m = a
    };
    var Jq = function(a, b) {
        a.C = {
            Hd: b,
            Pe: !0
        };
        a.j = a.D || a.o
    };
    Hq.prototype.return = function(a) {
        this.C = {
            return: a
        };
        this.j = this.o
    };
    ab = function(a, b, c) {
        a.j = c;
        return {
            value: b
        }
    };
    cb = function(a, b) {
        a.j = b;
        a.D = 0
    };
    db = function(a) {
        a.D = 0;
        var b = a.C.Hd;
        a.C = null;
        return b
    };
    Kq = function(a) {
        this.j = new Hq;
        this.m = a
    };
    Nq = function(a, b) {
        Iq(a.j);
        var c = a.j.I;
        if (c) return Lq(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.j.return);
        a.j.return(b);
        return Mq(a)
    };
    Lq = function(a, b, c, d) {
        try {
            var e = b.call(a.j.I, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.j.l = !1, e;
            var f = e.value
        } catch (g) {
            return a.j.I = null, Jq(a.j, g), Mq(a)
        }
        a.j.I = null;
        d.call(a.j, f);
        return Mq(a)
    };
    Mq = function(a) {
        for (; a.j.j;) try {
            var b = a.m(a.j);
            if (b) return a.j.l = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.j.m = void 0, Jq(a.j, c)
        }
        a.j.l = !1;
        if (a.j.C) {
            b = a.j.C;
            a.j.C = null;
            if (b.Pe) throw b.Hd;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    };
    Oq = function(a) {
        this.next = function(b) {
            Iq(a.j);
            a.j.I ? b = Lq(a, a.j.I.next, b, a.j.H) : (a.j.H(b), b = Mq(a));
            return b
        };
        this.throw = function(b) {
            Iq(a.j);
            a.j.I ? b = Lq(a, a.j.I["throw"], b, a.j.H) : (Jq(a.j, b), b = Mq(a));
            return b
        };
        this.return = function(b) {
            return Nq(a, b)
        };
        this[_.v(w.Symbol, "iterator")] = function() {
            return this
        }
    };
    Pq = function(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new w.Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : w.Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    };
    _.$a = function(a) {
        return Pq(new Oq(new Kq(a)))
    };
    zd = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    vq("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    vq("Reflect.construct", function() {
        return Bq
    }, "es6");
    vq("Reflect.setPrototypeOf", function(a) {
        return a ? a : Gq ? function(b, c) {
            try {
                return Gq(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    vq("Promise", function(a) {
        function b() {
            this.j = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.m = function(g) {
            if (null == this.j) {
                this.j = [];
                var h = this;
                this.D(function() {
                    h.C()
                })
            }
            this.j.push(g)
        };
        var d = sq.setTimeout;
        b.prototype.D = function(g) {
            d(g, 0)
        };
        b.prototype.C = function() {
            for (; this.j && this.j.length;) {
                var g = this.j;
                this.j = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.I(l)
                    }
                }
            }
            this.j = null
        };
        b.prototype.I = function(g) {
            this.D(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.m = 0;
            this.D = void 0;
            this.j = [];
            this.H = !1;
            var h = this.I();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.I = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.J),
                reject: g(this.C)
            }
        };
        e.prototype.J = function(g) {
            if (g === this) this.C(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.V(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.va(g) : this.l(g)
            }
        };
        e.prototype.va = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.C(k);
                return
            }
            "function" == typeof h ? this.M(h, g) : this.l(g)
        };
        e.prototype.C = function(g) {
            this.o(2, g)
        };
        e.prototype.l = function(g) {
            this.o(1, g)
        };
        e.prototype.o = function(g, h) {
            if (0 != this.m) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.m);
            this.m = g;
            this.D = h;
            2 === this.m && this.T();
            this.B()
        };
        e.prototype.T = function() {
            var g = this;
            d(function() {
                if (g.F()) {
                    var h = sq.console;
                    "undefined" !== typeof h && h.error(g.D)
                }
            }, 1)
        };
        e.prototype.F = function() {
            if (this.H) return !1;
            var g = sq.CustomEvent,
                h = sq.Event,
                k = sq.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = sq.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.D;
            return k(g)
        };
        e.prototype.B = function() {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g) f.m(this.j[g]);
                this.j = null
            }
        };
        var f = new b;
        e.prototype.V = function(g) {
            var h = this.I();
            g.ec(h.resolve, h.reject)
        };
        e.prototype.M = function(g, h) {
            var k = this.I();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(p, q) {
                return "function" == typeof p ? function(u) {
                    try {
                        l(p(u))
                    } catch (A) {
                        m(A)
                    }
                } : q
            }
            var l, m, n = new e(function(p, q) {
                l = p;
                m = q
            });
            this.ec(k(g, l), k(h, m));
            return n
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.ec = function(g, h) {
            function k() {
                switch (l.m) {
                    case 1:
                        g(l.D);
                        break;
                    case 2:
                        h(l.D);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.m);
                }
            }
            var l = this;
            null == this.j ? f.m(k) : this.j.push(k);
            this.H = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = _.z(g), m = l.next(); !m.done; m = l.next()) c(m.value).ec(h, k)
            })
        };
        e.all = function(g) {
            var h = _.z(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, m) {
                function n(u) {
                    return function(A) {
                        p[u] = A;
                        q--;
                        0 == q && l(p)
                    }
                }
                var p = [],
                    q = 0;
                do p.push(void 0), q++, c(k.value).ec(n(p.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    }, "es6");
    vq("Object.setPrototypeOf", function(a) {
        return a || Gq
    }, "es6");
    vq("WeakMap", function(a) {
        function b() {}

        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random(),
            e = 0,
            f = function(g) {
                this.j = (e += Math.random() + 1).toString();
                if (g) {
                    g = _.z(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!yq(g, d)) {
                var k = new b;
                qq(g, d, {
                    value: k
                })
            }
            if (!yq(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.j] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && yq(g, d) ? g[d][this.j] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && yq(g, d) && yq(g[d], this.j)
        };
        f.prototype.delete = function(g) {
            return c(g) && yq(g, d) && yq(g[d], this.j) ? delete g[d][this.j] : !1
        };
        return f
    }, "es6");
    vq("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.v(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(_.z([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = _.v(k, "entries").call(k),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        var b = new w.WeakMap,
            c = function(h) {
                this.m = {};
                this.j = f();
                this.size = 0;
                if (h) {
                    h = _.z(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.m[l.id] = []);
            l.pa ? l.pa.value = k : (l.pa = {
                next: this.j,
                Sa: this.j.Sa,
                head: this.j,
                key: h,
                value: k
            }, l.list.push(l.pa), this.j.Sa.next = l.pa, this.j.Sa = l.pa, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.pa && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.m[h.id], h.pa.Sa.next = h.pa.next, h.pa.next.Sa = h.pa.Sa, h.pa.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.m = {};
            this.j = this.j.Sa = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).pa
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).pa) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = _.v(this, "entries").call(this), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[_.v(w.Symbol, "iterator")] = _.v(c.prototype, "entries");
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var m = h.m[l];
                if (m && yq(h.m, l))
                    for (h = 0; h < m.length; h++) {
                        var n = m[h];
                        if (k !== k && n.key !== n.key || k === n.key) return {
                            id: l,
                            list: m,
                            index: h,
                            pa: n
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    pa: void 0
                }
            },
            e = function(h, k) {
                var l = h.j;
                return wq(function() {
                    if (l) {
                        for (; l.head != h.j;) l = l.Sa;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Sa = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var Qq = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[_.v(w.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    vq("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Qq(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    vq("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Qq(this, function(b) {
                return b
            })
        }
    }, "es6");
    var Rq = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    vq("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Rq(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    var Sq = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                i: e,
                ce: f
            }
        }
        return {
            i: -1,
            ce: void 0
        }
    };
    vq("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return Sq(this, b, c).ce
        }
    }, "es6");
    vq("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    vq("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.v(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    vq("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof w.Symbol && _.v(w.Symbol, "iterator") && b[_.v(w.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    vq("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    vq("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.v(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.z([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = _.v(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.j = new w.Map;
            if (c) {
                c = _.z(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.j.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.j.delete(c);
            this.size = this.j.size;
            return c
        };
        b.prototype.clear = function() {
            this.j.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.j.has(c)
        };
        b.prototype.entries = function() {
            return _.v(this.j, "entries").call(this.j)
        };
        b.prototype.values = function() {
            return _.v(this.j, "values").call(this.j)
        };
        b.prototype.keys = _.v(b.prototype, "values");
        b.prototype[_.v(w.Symbol, "iterator")] = _.v(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.j.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    vq("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) yq(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    vq("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Rq(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    vq("globalThis", function(a) {
        return a || sq
    }, "es_2020");
    vq("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Qq(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    vq("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    vq("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || _.v(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    vq("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Rq(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    vq("AggregateError", function(a) {
        if (a) return a;
        a = function(b, c) {
            c = Error(c);
            "stack" in c && (this.stack = c.stack);
            this.errors = b;
            this.message = c.message
        };
        _.O(a, Error);
        a.prototype.name = "AggregateError";
        return a
    }, "es_2021");
    vq("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : _.v(Array, "from").call(Array, b);
            return w.Promise.all(b.map(function(c) {
                return w.Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new w.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    vq("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) yq(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    vq("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(_.v(w.Symbol, "iterator") in b)) throw new TypeError("" + b + " is not iterable");
            b = b[_.v(w.Symbol, "iterator")].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    }, "es_2019");
    vq("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return Sq(this, b, c).i
        }
    }, "es6");
    vq("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return w.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return w.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    _.t = this || self;
    Qc = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    ma = function(a) {
        var b = Qc(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.ea = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    fa = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Tq) && a[Tq] || (a[Tq] = ++Uq)
    };
    Tq = "closure_uid_" + (1E9 * Math.random() >>> 0);
    Uq = 0;
    Vq = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    Wq = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    _.Xq = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.Xq = Vq : _.Xq = Wq;
        return _.Xq.apply(null, arguments)
    };
    _.Yq = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    Lf = function() {
        return Date.now()
    };
    var Zq;
    var xf = function(a, b) {
        this.j = a === $q && b || "";
        this.m = ar
    };
    xf.prototype.Ma = !0;
    xf.prototype.Ga = function() {
        return this.j
    };
    var yf = function(a) {
            return a instanceof xf && a.constructor === xf && a.m === ar ? a.j : "type_error:Const"
        },
        ar = {},
        $q = {};
    var hb = new xf($q, "https://tpc.googlesyndication.com/sodar/%{basename}.js");
    var Hc, cr;
    _.aa = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.br = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.Pf = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    Hc = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    cr = function(a, b) {
        return Array.prototype.reduce.call(a, b, 0)
    };
    _.fg = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var wa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var Ff = {
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
    var Cn = {},
        Qa = function(a, b) {
            this.j = b === Cn ? a : "";
            this.Ma = !0
        };
    Qa.prototype.toString = function() {
        return this.j.toString()
    };
    Qa.prototype.Ga = function() {
        return this.j.toString()
    };
    var Af = function(a, b) {
        this.j = b === dr ? a : ""
    };
    Af.prototype.toString = function() {
        return this.j + ""
    };
    Af.prototype.Ma = !0;
    Af.prototype.Ga = function() {
        return this.j.toString()
    };
    var Sa = function(a) {
            return a instanceof Af && a.constructor === Af ? a.j : "type_error:TrustedResourceUrl"
        },
        gb = function(a, b) {
            var c = yf(a);
            if (!er.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(fr, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof xf ? yf(d) : encodeURIComponent(String(d))
            });
            return Ad(a)
        },
        fr = /%{(\w+)}/g,
        er = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        gr = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        dr = {},
        Ad = function(a) {
            return new Af(a, dr)
        },
        hr = function(a, b, c) {
            if (null == c) return b;
            if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                    }
                }
            return b
        };
    var ir = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        lj = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        jr = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Ef = function(a) {
            if (!kr.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(lr, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(mr, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(nr, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(or, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(pr, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(qr, "&#0;"));
            return a
        },
        lr = /&/g,
        mr = /</g,
        nr = />/g,
        or = /"/g,
        pr = /'/g,
        qr = /\x00/g,
        kr = /[\x00&<>"']/,
        Wp = function(a, b) {
            var c = 0;
            a = jr(String(a)).split(".");
            b = jr(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = rr(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || rr(0 == f[2].length, 0 == g[2].length) || rr(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        rr = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Ka = function(a, b) {
            this.j = b === sr ? a : ""
        },
        La, Cf, Bf, sr;
    Ka.prototype.toString = function() {
        return this.j.toString()
    };
    Ka.prototype.Ma = !0;
    Ka.prototype.Ga = function() {
        return this.j.toString()
    };
    La = function(a) {
        return a instanceof Ka && a.constructor === Ka ? a.j : "type_error:SafeUrl"
    };
    Cf = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    Bf = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    sr = {};
    _.Ed = function(a) {
        return new Ka(a, sr)
    };
    _.Df = _.Ed("about:invalid#zClosurez");
    var sf = {},
        rf = function(a, b) {
            this.nd = b === sf ? a : "";
            this.Ma = !0
        };
    rf.prototype.Ga = function() {
        return this.nd
    };
    rf.prototype.toString = function() {
        return this.nd.toString()
    };
    var tr = {},
        ur = function(a, b) {
            this.j = b === tr ? a : "";
            this.Ma = !0
        };
    ur.prototype.Ga = function() {
        return this.j.toString()
    };
    ur.prototype.toString = function() {
        return this.j.toString()
    };
    var Ua = function(a) {
            return a instanceof ur && a.constructor === ur ? a.j : "type_error:SafeHtml"
        },
        vr = function(a) {
            return a instanceof ur ? a : uf(Ef("object" == typeof a && a.Ma ? a.Ga() : String(a)))
        },
        wr = function(a) {
            var b = vr(qf),
                c = [],
                d = function(e) {
                    Array.isArray(e) ? e.forEach(d) : (e = vr(e), c.push(Ua(e).toString()))
                };
            a.forEach(d);
            return uf(c.join(Ua(b).toString()))
        },
        Gf = function(a) {
            return wr(Array.prototype.slice.call(arguments))
        },
        uf = function(a) {
            return new ur(a, tr)
        },
        vf = /^[a-zA-Z0-9-]+$/,
        zf = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        wf = {
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
        },
        qf = new ur(_.t.trustedTypes && _.t.trustedTypes.emptyHTML || "", tr);
    var xr;
    try {
        new URL("s://g"), xr = !0
    } catch (a) {
        xr = !1
    }
    var Ma = xr;
    var yr = {
            ng: 0,
            ig: 1,
            jg: 2,
            0: "HTML_FORMATTED_CONTENT",
            1: "EMBEDDED_INTERNAL_CONTENT",
            2: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
        },
        zr = function(a, b) {
            b = Error.call(this, a + " cannot be used with intent " + yr[b]);
            this.message = b.message;
            "stack" in b && (this.stack = b.stack);
            this.type = a;
            this.name = "TypeCannotBeUsedWithIntentError"
        };
    _.O(zr, Error);
    var Ar, Br, th, Dr;
    Ar = function() {
        return !0
    };
    Br = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    th = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.Cr = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    Dr = function(a, b, c) {
        var d = 0,
            e = !1,
            f = [],
            g = function() {
                d = 0;
                e && (e = !1, h())
            },
            h = function() {
                d = _.t.setTimeout(g, b);
                var k = f;
                f = [];
                a.apply(c, k)
            };
        return function(k) {
            f = arguments;
            d ? e = !0 : h()
        }
    };
    var Er, Wa;
    Er = {
        passive: !0
    };
    Wa = th(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.t.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    _.Ya = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Xa(d)), !0) : !1
    };
    _.Sd = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Xa(d)), !0) : !1
    };
    var bb = function(a) {
        return new w.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var Fr = {};
    var kb, jb = "undefined" !== typeof TextEncoder;
    var Gr = function(a) {
        Gr[" "](a);
        return a
    };
    Gr[" "] = function() {};
    var Hr = function(a, b) {
            try {
                return Gr(a[b]), !0
            } catch (c) {}
            return !1
        },
        Ir = function(a, b, c, d) {
            d = d ? d(b) : b;
            return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
        };
    var Jr, Lr, Mr, Nr, Or, Pr;
    Jr = Ca("Opera");
    _.Kr = Ca("Trident") || Ca("MSIE");
    Lr = Ca("Edge");
    Mr = Ca("Gecko") && !(-1 != Ba().toLowerCase().indexOf("webkit") && !Ca("Edge")) && !(Ca("Trident") || Ca("MSIE")) && !Ca("Edge");
    Nr = -1 != Ba().toLowerCase().indexOf("webkit") && !Ca("Edge");
    Or = function() {
        var a = _.t.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var Qr = "",
            Rr = function() {
                var a = Ba();
                if (Mr) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Lr) return /Edge\/([\d\.]+)/.exec(a);
                if (_.Kr) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Nr) return /WebKit\/(\S+)/.exec(a);
                if (Jr) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Rr && (Qr = Rr ? Rr[1] : "");
        if (_.Kr) {
            var Sr = Or();
            if (null != Sr && Sr > parseFloat(Qr)) {
                Pr = String(Sr);
                break a
            }
        }
        Pr = Qr
    }
    var Tr = Pr,
        Ur = {},
        Vr = function(a) {
            return Ir(Ur, a, function() {
                return 0 <= Wp(Tr, a)
            })
        },
        Wr;
    if (_.t.document && _.Kr) {
        var Xr = Or();
        Wr = Xr ? Xr : parseInt(Tr, 10) || void 0
    } else Wr = void 0;
    var Yr = Wr;
    !Ca("Android") || Ga();
    Ga();
    Ha();
    var Zr = {},
        $r = null,
        as = Mr || Nr || "function" == typeof _.t.btoa,
        gc = function(a, b) {
            void 0 === b && (b = 0);
            bs();
            b = Zr[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    l = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = l + g + h + k
            }
            l = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    l = a[e + 1], k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
            }
            return c.join("")
        },
        cs = function(a, b) {
            if (as && !b) a = _.t.btoa(a);
            else {
                for (var c = [], d = 0, e = 0; e < a.length; e++) {
                    var f = a.charCodeAt(e);
                    255 < f && (c[d++] = f & 255, f >>= 8);
                    c[d++] = f
                }
                a = gc(c, b)
            }
            return a
        },
        fo = function(a) {
            var b = "";
            ds(a, function(c) {
                b += String.fromCharCode(c)
            });
            return b
        },
        ob = function(a) {
            var b = a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            ds(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        ds = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = $r[l];
                    if (null != m) return m;
                    if (!lj(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            bs();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        bs = function() {
            if (!$r) {
                $r = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Zr[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === $r[f] && ($r[f] = e)
                    }
                }
            }
        };
    var rb = "undefined" !== typeof Uint8Array,
        yi, sb = {};
    var es, Lb = function(a, b) {
            tb(b);
            this.zb = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        },
        Nb = function(a) {
            return a.length ? new Lb(new Uint8Array(a), sb) : Mb()
        },
        Mb = function() {
            return es || (es = new Lb(null, sb))
        },
        hc = function(a) {
            var b = a.zb;
            return null == b ? "" : "string" === typeof b ? b : a.zb = gc(b)
        };
    Lb.prototype.isEmpty = function() {
        return null == this.zb
    };
    var xi = function(a) {
        tb(sb);
        var b = pb(a.zb);
        return null == b ? b : a.zb = b
    };
    var ub = "function" === typeof w.Symbol && "symbol" === typeof(0, w.Symbol)() ? (0, w.Symbol)(void 0) : void 0;
    var Rb = {},
        fs, gs = Object,
        hs = gs.freeze,
        is = [];
    vb(is, 3);
    var uc = hs.call(gs, is),
        Ac = function(a) {
            if (Hb(a)) throw Error("Cannot mutate an immutable Message");
        },
        js = function(a) {
            this.m = 0;
            this.j = a
        };
    js.prototype.next = function() {
        return this.m < this.j.length ? {
            done: !1,
            value: this.j[this.m++]
        } : {
            done: !0,
            value: void 0
        }
    };
    js.prototype[_.v(w.Symbol, "iterator")] = function() {
        return this
    };
    var fc = function(a, b, c, d) {
            d = void 0 === d ? Xb : d;
            c = xb(a);
            c |= 32;
            yb(a, c);
            this.m = c;
            this.I = (this.D = b) ? Vb : Wb;
            this.l = d;
            this.j = b = new w.Map;
            for (d = 0; d < a.length; d++) c = a[d], b.set(c[0], c[1]);
            this.size = b.size
        },
        ks = function(a) {
            if (a.m & 2) throw Error("Cannot mutate an immutable Map");
        },
        dc = function(a, b) {
            return new fc(b, a.D, a.I, a.l)
        },
        ic = function(a, b) {
            b = void 0 === b ? Yb : b;
            for (var c = ls(a), d = 0; d < c.length; d++) {
                var e = c[d],
                    f = a.j.get(c[d]);
                c[d] = [b(e), b(f)]
            }
            return c
        },
        sc = function(a, b) {
            b = void 0 === b ? Yb : b;
            var c = [];
            a = _.v(a.j, "entries").call(a.j);
            for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
            return c
        };
    r = fc.prototype;
    r.clear = function() {
        ks(this);
        this.j.clear();
        this.size = 0
    };
    r.delete = function(a) {
        ks(this);
        return this.j.delete(a) ? (this.size = this.j.size, !0) : !1
    };
    r.entries = function() {
        for (var a = ls(this), b = 0; b < a.length; b++) {
            var c = a[b];
            a[b] = [c, this.get(c)]
        }
        return new js(a)
    };
    r.keys = function() {
        var a = ls(this);
        return new js(a)
    };
    r.values = function() {
        for (var a = ls(this), b = 0; b < a.length; b++) a[b] = this.get(a[b]);
        return new js(a)
    };
    r.forEach = function(a, b) {
        for (var c = ls(this), d = 0; d < c.length; d++) {
            var e = c[d];
            a.call(b, this.get(e), e, this)
        }
    };
    r.set = function(a, b) {
        ks(this);
        var c = this.j;
        if (null == b) return c.delete(a), this;
        c.set(a, this.I(b, this.D, !1, this.C));
        this.size = c.size;
        return this
    };
    r.get = function(a) {
        var b = this.j;
        if (b.has(a)) {
            var c = b.get(a),
                d = this.m,
                e = this.D;
            e && Array.isArray(c) && d & 16 && Db(c);
            d = this.I(c, e, !!(d & 2), this.C);
            d !== c && b.set(a, d);
            return d
        }
    };
    r.has = function(a) {
        return this.j.has(a)
    };
    var ls = function(a) {
        return _.v(Array, "from").call(Array, _.v(a.j, "keys").call(a.j)).sort(Tb)
    };
    fc.prototype[_.v(w.Symbol, "iterator")] = function() {
        return _.v(this, "entries").call(this)
    };
    var Mc, x, Qj, Zg, Zm, we, F, ti, be, yc, qg, Bc, ns, oi, si, ri, Tn, os, ms, Vn, De, ps, Oc, wg, Fc, qs, rj, Pk, rm, bn, fp, ce, Xo, zi, rs, ts, Wm, us, vs, ws, Ie;
    Mc = function(a) {
        return a.j || (a.j = a.da[a.m + a.Ua] = {})
    };
    x = function(a, b, c) {
        return -1 === b ? null : b >= a.m ? a.j ? a.j[b] : void 0 : (void 0 === c ? 0 : c) && a.j && (c = a.j[b], null != c) ? c : a.da[b + a.Ua]
    };
    _.y = function(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        (void 0 === e ? 0 : e) || Ac(a);
        a.tc && (a.tc = void 0);
        if (b >= a.m || d) return Mc(a)[b] = c, a;
        void 0 !== a.j && a.m >= a.da.length ? (d = a.da.length - 1, e = b + a.Ua, e >= d ? (a.da[d] = void 0, a.da[e] = c, a.da.push(a.j)) : a.da[e] = c) : a.da[b + a.Ua] = c;
        void 0 !== a.j && b in a.j && delete a.j[b];
        return a
    };
    Qj = function(a, b) {
        return null != x(a, b, !1)
    };
    Zg = function(a, b, c) {
        return void 0 !== ms(a, b, c, !1)
    };
    Zm = function(a, b) {
        return vc(a, b, 0, !1)
    };
    we = function(a, b) {
        a = x(a, b);
        return null == a ? a : +a
    };
    F = function(a, b) {
        a = x(a, b);
        return null == a ? a : !!a
    };
    ti = function(a, b) {
        var c = x(a, b),
            d = Ob(c, !0);
        null != d && d !== c && _.y(a, b, d, void 0, !0);
        return d
    };
    be = function(a, b, c) {
        a = x(a, b);
        return null == a ? c : a
    };
    qg = function(a, b, c) {
        null == c ? c = uc : zb(c);
        return _.y(a, b, c)
    };
    _.Mg = function(a, b, c) {
        if (null == c) c = uc;
        else {
            for (var d = 0; d < c.length; d++);
            vb(c, 5)
        }
        return _.y(a, b, c)
    };
    Bc = function(a, b, c) {
        return _.y(a, b, void 0, !1, c)
    };
    ns = function(a, b, c) {
        Ac(a);
        vc(a, b, 2, !1).push(c)
    };
    oi = function(a, b, c, d) {
        Ac(a);
        (c = ri(a, c)) && c !== b && null != d && Bc(a, c);
        return _.y(a, b, d)
    };
    si = function(a, b, c) {
        return ri(a, b) === c ? c : -1
    };
    ri = function(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != x(a, e) && (0 !== c && Bc(a, c, !0), c = e)
        }
        return c
    };
    Tn = function(a, b, c) {
        Ac(a);
        var d = x(a, c);
        b = Ub(Sb(d, b, !0));
        d !== b && _.y(a, c, b);
        return b
    };
    os = (0, w.Symbol)(void 0);
    ms = function(a, b, c, d) {
        var e = x(a, c, d);
        b = Sb(e, b);
        b !== e && null != b && (_.y(a, c, b, d, !0), vb(b.da, xb(a.da) & -33));
        return b
    };
    Vn = function(a, b, c) {
        if (a = ms(a, b, c, !1)) b = a;
        else if (a = b[os]) b = a;
        else {
            a = new b;
            if (Fr !== Fr) throw Error("requires a valid immutable API token");
            Hb(a) || ((c = a.tc) && bc(c.da, a.da) ? a = c : (c = Lc(a), Cb(c.da), a = a.tc = c));
            b = b[os] = a
        }
        return b
    };
    De = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = ms(a, b, c, d);
        if (null == b) return b;
        Hb(b) && !Hb(a) && (b = Ub(b), _.y(a, c, b, d));
        return b
    };
    ps = function(a, b, c, d, e) {
        e = void 0 === e ? !0 : e;
        a.qa || (a.qa = {});
        var f = a.qa[c],
            g = vc(a, c, 3, d),
            h = Hb(a),
            k = !!(xb(a.da) & 16),
            l = Bb(g),
            m = h || l;
        !e && l && (g = zb(Array.prototype.slice.call(g)), _.y(a, c, g, d));
        if (!f) {
            f = [];
            d = m;
            for (l = 0; l < g.length; l++) {
                var n = g[l];
                d = d || Bb(n);
                var p = b,
                    q = k,
                    u = !1;
                u = void 0 === u ? !1 : u;
                q = void 0 === q ? !1 : q;
                n = Array.isArray(n) ? new p(q ? Db(n) : n) : u ? new p : void 0;
                void 0 !== n && (f.push(n), m && Cb(n.da))
            }
            a.qa[c] = f;
            b = g;
            Object.isFrozen(b) || (g = xb(b) | 33, yb(b, d ? g & -9 : g | 8))
        }
        e = h || e;
        h = Bb(f);
        e && !h && (Object.isFrozen(f) && (a.qa[c] = f = f.slice()), Cb(f), Object.freeze(f));
        !e && h && (a.qa[c] = f = f.slice());
        return f
    };
    Oc = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        var e = Hb(a);
        b = ps(a, b, c, d, e);
        a = vc(a, c, 3, d);
        if (e = !e && a) {
            if (!a) throw Error("cannot check mutability state of non-array");
            e = !(xb(a) & 8)
        }
        if (e) {
            for (e = 0; e < b.length; e++)(c = b[e]) && Hb(c) && (b[e] = Ub(b[e]), a[e] = b[e].da);
            vb(a, 8)
        }
        return b
    };
    _.sg = function(a, b, c) {
        Ac(a);
        null == c && (c = void 0);
        return _.y(a, b, c)
    };
    wg = function(a, b, c, d) {
        Ac(a);
        null == d && (d = void 0);
        return oi(a, b, c, d)
    };
    Fc = function(a, b, c, d) {
        Ac(a);
        if (null != c) {
            var e = zb([]);
            for (var f = !1, g = 0; g < c.length; g++) e[g] = c[g].da, f = f || Bb(e[g]);
            a.qa || (a.qa = {});
            a.qa[b] = c;
            c = e;
            f ? wb(c, 8) : vb(c, 8)
        } else a.qa && (a.qa[b] = void 0), e = uc;
        return _.y(a, b, e, d)
    };
    qs = function(a, b, c, d) {
        Ac(a);
        var e = ps(a, c, b, void 0, !1);
        c = null != d ? d : new c;
        a = vc(a, b, 2);
        e.push(c);
        a.push(c.da);
        Hb(c) && wb(a, 8);
        return c
    };
    rj = function(a, b, c, d) {
        qs(a, b, c, d);
        return a
    };
    Pk = function(a, b) {
        return wc(a, b, Qb, !1)
    };
    rm = function(a, b, c) {
        return _.y(a, b, c)
    };
    bn = function(a, b) {
        return Dc(x(a, b), "")
    };
    fp = function(a, b, c) {
        return Dc(F(a, b), void 0 === c ? !1 : c)
    };
    ce = function(a, b) {
        return Dc(x(a, b), 0)
    };
    Xo = function(a, b) {
        return Dc(x(a, b), 0)
    };
    zi = function(a, b) {
        return Dc(x(a, b), 0)
    };
    rs = function(a, b) {
        return bn(a, si(a, b, 2))
    };
    ts = function(a) {
        return zi(a, si(a, ss, 3))
    };
    Wm = function(a, b, c, d) {
        return De(a, b, si(a, d, c))
    };
    us = function(a, b) {
        a = x(a, b);
        return null == a ? void 0 : a
    };
    vs = function(a, b) {
        a = F(a, b);
        return null == a ? void 0 : a
    };
    ws = function(a, b) {
        a = x(a, b);
        return null == a ? void 0 : a
    };
    _.Bg = function(a, b, c) {
        return _.Cc(a, b, c, 0)
    };
    Ie = function(a, b) {
        return null != x(a, b)
    };
    _.Q = function(a, b, c) {
        null == a && (a = xs);
        xs = null;
        var d = this.constructor.j || 0,
            e = 0 < d,
            f = this.constructor.messageId,
            g, h = !1;
        if (a) {
            if (g = !!(xb(a) & 16)) h = xb(a), yb(a, h | 32), h = !!(h & 32)
        } else g = f ? [f] : [], vb(g, 48), a = g, g = !0;
        e && 0 < a.length && Jb(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
        this.Ua = (f ? 0 : -1) - d;
        this.qa = void 0;
        this.da = a;
        a: {
            f = this.da.length;d = f - 1;
            if (f && (f = this.da[d], Jb(f))) {
                this.j = f;
                b = _.v(Object, "keys").call(Object, f);
                0 < b.length && Array.prototype.every.call(b, isNaN, void 0) ? this.m = Number.MAX_VALUE : this.m = d - this.Ua;
                break a
            }
            void 0 !== b && -1 < b ? (this.m = Math.max(b, d + 1 - this.Ua), this.j = void 0) : this.m = Number.MAX_VALUE
        }
        if (!e && this.j && "g" in this.j) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c)
            for (e = g && !h ? Ab : zb, b = 0; b < c.length; b++) g = c[b], (h = x(this, g)) ? Array.isArray(h) && e(h) : _.y(this, g, uc, !1, !0)
    };
    _.Q.prototype.toJSON = function() {
        var a = this.da;
        return fs ? a : lc(a, nc, oc)
    };
    var Zd = function(a) {
            fs = !0;
            try {
                return JSON.stringify(a.toJSON(), Nc)
            } finally {
                fs = !1
            }
        },
        Ud = function(a, b) {
            if (null == b || "" == b) return new a;
            b = JSON.parse(b);
            if (!Array.isArray(b)) throw Error(void 0);
            xs = b = Db(b);
            a = new a(b);
            xs = null;
            return a
        },
        tc = function(a) {
            var b = lc(a.da, qc, Fb);
            Db(b);
            xs = b;
            b = new a.constructor(b);
            xs = null;
            Pc(b, a);
            return b
        },
        Ub = function(a) {
            if (Hb(a)) {
                var b = {
                        Vc: !0
                    },
                    c = Hb(a);
                if (c && !b.Vc) throw Error("copyRepeatedFields must be true for frozen messages");
                c || Eb(a.da);
                var d = new a.constructor;
                kc(d, a);
                for (var e = a.da, f = 0; f < e.length; f++) {
                    var g = e[f];
                    if (f === e.length - 1 && Jb(g))
                        for (var h in g) {
                            if (Kb(g, h)) {
                                var k = +h;
                                _.v(Number, "isNaN").call(Number, k) ? Mc(d)[h] = g[h] : Gc(a, d, k, g[h], c, b)
                            }
                        } else Gc(a, d, f - a.Ua, g, c, b)
                }
                d.tc = a;
                a = d
            }
            return a
        };
    _.Q.prototype.yc = Rb;
    var xs;
    var Sc = 0,
        Tc = 0,
        Vc = "function" === typeof BigInt;
    var ys = function(a, b) {
            this.m = a >>> 0;
            this.j = b >>> 0
        },
        As = function(a) {
            if (!a) return zs || (zs = new ys(0, 0));
            if (!/^\d+$/.test(a)) return null;
            Wc(a);
            return new ys(Sc, Tc)
        },
        zs, Bs = function(a, b) {
            this.m = a >>> 0;
            this.j = b >>> 0
        },
        Ds = function(a) {
            if (!a) return Cs || (Cs = new Bs(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            Wc(a);
            return new Bs(Sc, Tc)
        },
        Cs;
    var Es = function() {
        this.j = []
    };
    Es.prototype.length = function() {
        return this.j.length
    };
    Es.prototype.end = function() {
        var a = this.j;
        this.j = [];
        return a
    };
    var Fs = function(a, b, c) {
            for (; 0 < c || 127 < b;) a.j.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.j.push(b)
        },
        Gs = function(a, b) {
            for (; 127 < b;) a.j.push(b & 127 | 128), b >>>= 7;
            a.j.push(b)
        },
        Hs = function(a, b) {
            if (0 <= b) Gs(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.j.push(b & 127 | 128), b >>= 7;
                a.j.push(1)
            }
        };
    var Is = function() {
            this.D = [];
            this.m = 0;
            this.j = new Es
        },
        Js = function(a, b) {
            0 !== b.length && (a.D.push(b), a.m += b.length)
        },
        Ks = function(a, b) {
            Gs(a.j, 8 * b + 2);
            b = a.j.end();
            Js(a, b);
            b.push(a.m);
            return b
        },
        Ls = function(a, b) {
            var c = b.pop();
            for (c = a.m + a.j.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.m++;
            b.push(c);
            a.m++
        },
        Zc = function(a, b) {
            if (b = b.D) {
                Js(a, a.j.end());
                for (var c = 0; c < b.length; c++) Js(a, xi(b[c]) || yi || (yi = new Uint8Array(0)))
            }
        },
        Ms = function(a, b, c) {
            Gs(a.j, 8 * b + 2);
            Gs(a.j, c.length);
            Js(a, a.j.end());
            Js(a, c)
        };
    var dd = (0, w.Symbol)(),
        bd = (0, w.Symbol)(),
        ad = (0, w.Symbol)(),
        Ns = function(a, b) {
            var c = new Is;
            fd(a, c, ed(b));
            Js(c, c.j.end());
            a = new Uint8Array(c.m);
            b = c.D;
            for (var d = b.length, e = 0, f = 0; f < d; f++) {
                var g = b[f];
                a.set(g, e);
                e += g.length
            }
            c.D = [a];
            return a
        },
        Os = kd(function(a, b, c) {
            if (5 !== a.j()) return !1;
            _.y(b, c, a.l());
            return !0
        }, function(a, b, c) {
            b = we(b, c);
            if (null != b) {
                Gs(a.j, 8 * c + 5);
                a = a.j;
                var d = +b;
                0 === d ? 0 < 1 / d ? Sc = Tc = 0 : (Tc = 0, Sc = 2147483648) : isNaN(d) ? (Tc = 0, Sc = 2147483647) : (d = (c = 0 > d ? -2147483648 : 0) ? -d : d, 3.4028234663852886E38 < d ? (Tc = 0, Sc = (c | 2139095040) >>> 0) : 1.1754943508222875E-38 > d ? (d = Math.round(d / Math.pow(2, -149)), Tc = 0, Sc = (c | d) >>> 0) : (b = Math.floor(Math.log(d) / Math.LN2), d *= Math.pow(2, -b), d = Math.round(8388608 * d), 16777216 <= d && ++b, Tc = 0, Sc = (c | b + 127 << 23 | d & 8388607) >>> 0));
                c = Sc;
                a.j.push(c >>> 0 & 255);
                a.j.push(c >>> 8 & 255);
                a.j.push(c >>> 16 & 255);
                a.j.push(c >>> 24 & 255)
            }
        }),
        Ps = kd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.y(b, c, a.o());
            return !0
        }, function(a, b, c) {
            b = x(b, c);
            null != b && ("string" === typeof b && Ds(b), null != b && (Gs(a.j, 8 * c), "number" === typeof b ? (a = a.j, Uc(b), Fs(a, Sc, Tc)) : (c = Ds(b), Fs(a.j, c.m, c.j))))
        }),
        Qs = kd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.y(b, c, a.B());
            return !0
        }, function(a, b, c) {
            b = x(b, c);
            null != b && ("string" === typeof b && As(b), null != b && (Gs(a.j, 8 * c), "number" === typeof b ? (a = a.j, Uc(b), Fs(a, Sc, Tc)) : (c = As(b), Fs(a.j, c.m, c.j))))
        }),
        Rs = kd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.y(b, c, a.H());
            return !0
        }, function(a, b, c) {
            b = x(b, c);
            null != b && null != b && (Gs(a.j, 8 * c), Hs(a.j, b))
        }),
        Ss = kd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.y(b, c, a.I());
            return !0
        }, function(a, b, c) {
            b = F(b, c);
            null != b && (Gs(a.j, 8 * c), a.j.j.push(b ? 1 : 0))
        }),
        Ts = kd(function(a, b, c) {
            if (2 !== a.j()) return !1;
            _.y(b, c, a.D());
            return !0
        }, function(a, b, c) {
            b = x(b, c);
            null != b && Ms(a, c, mb(b))
        }),
        Us = kd(function(a, b, c) {
            if (2 !== a.j()) return !1;
            ns(b, c, a.D());
            return !0
        }, function(a, b, c) {
            b = Pk(b, c);
            if (null != b)
                for (var d = 0; d < b.length; d++) {
                    var e = b[d];
                    null != e && Ms(a, c, mb(e))
                }
        }),
        Vs = kd(function(a, b, c, d, e) {
            if (2 !== a.j()) return !1;
            a.m(Tn(b, d, c), e);
            return !0
        }, function(a, b, c, d, e) {
            b = De(b, d, c);
            null != b && (c = Ks(a, c), e(b, a), Ls(a, c))
        }),
        Ws = kd(function(a, b, c, d, e) {
            if (2 !== a.j()) return !1;
            a.m(qs(b, c, d), e);
            return !0
        }, function(a, b, c, d, e) {
            b = Oc(b, d, c);
            if (null != b)
                for (d = 0; d < b.length; d++) {
                    var f = Ks(a, c);
                    e(b[d], a);
                    Ls(a, f)
                }
        }),
        Xs = kd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.y(b, c, a.C());
            return !0
        }, function(a, b, c) {
            b = x(b, c);
            null != b && (b = parseInt(b, 10), Gs(a.j, 8 * c), Hs(a.j, b))
        });
    var D = {
        mg: function() {},
        Zg: function() {
            return ""
        },
        gg: function() {}
    };
    D.dd = ld;
    var Ys = ld(function(a) {
        return null !== a && void 0 !== a
    }, "exists");
    D.assert = function() {};
    D.ra = function(a) {
        return a
    };
    var md = void 0;
    D.nh = nd;
    D.qh = od;
    D.Ug = function() {};
    D.Vg = function(a) {
        return a
    };
    D.Td = pd;
    D.sh = function(a, b) {
        pd(a, b);
        return a
    };
    D.Tg = function() {};
    D.K = function(a) {
        return a
    };
    D.oh = function(a, b) {
        nd(a, Ys, b)
    };
    D.rh = function(a, b) {
        return od(a, Ys, b)
    };
    D.Yg = function(a, b) {
        return a(b)
    };
    D.functionName = function(a) {
        var b = a.name;
        b || (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)");
        return b
    };
    D.jh = function(a) {
        pd(!md);
        md = function() {
            var b = "function" === typeof a ? a() : a;
            md = void 0;
            return b
        }
    };
    var lo = function(a) {
        _.Q.call(this, a)
    };
    _.O(lo, _.Q);
    var io = function(a, b) {
            return _.sg(a, 5, b)
        },
        ko = function(a, b) {
            return _.Bg(a, 2, b)
        },
        jo = function(a, b) {
            return _.Cc(a, 3, b, "")
        },
        ho = function(a, b) {
            return _.Cc(a, 6, b, !1)
        },
        go = function(a) {
            _.Q.call(this, a)
        };
    _.O(go, _.Q);
    var Zs = function(a, b) {
        return _.Cc(a, 1, b, "")
    };
    var $s = function(a) {
            this.j = a.m;
            this.m = a.D;
            this.I = a.I;
            this.Pb = a.Pb;
            this.G = a.G;
            this.xb = a.xb;
            this.vc = a.vc;
            this.Hc = a.Hc;
            this.uc = a.uc;
            this.D = a.j
        },
        at = function(a, b, c) {
            this.m = a;
            this.D = b;
            this.I = c;
            this.G = window;
            this.xb = "env";
            this.vc = "n";
            this.Hc = "0";
            this.uc = "1";
            this.j = !0
        };
    at.prototype.build = function() {
        return new $s(this)
    };
    var uo = function(a, b) {
        var c = void 0 === fp(b, 6) ? !0 : fp(b, 6),
            d, e;
        a: switch (be(b, 4, 0)) {
            case 1:
                var f = "pt";
                break a;
            case 2:
                f = "cr";
                break a;
            default:
                f = ""
        }
        f = new at(qd(be(b, 2, 0)), bn(b, 3), f);
        b = null != (e = null == (d = De(b, go, 5)) ? void 0 : bn(d, 1)) ? e : "";
        f.Pb = b;
        f.j = c;
        f.G = a;
        return f.build()
    };
    var xk = function(a) {
        _.Q.call(this, a)
    };
    _.O(xk, _.Q);
    var wk = function(a, b) {
            return _.y(a, 1, b)
        },
        uk = function(a, b) {
            return _.y(a, 4, b)
        },
        vk = function(a, b) {
            return _.y(a, 2, b)
        },
        bt = [xk, 1, Xs, 4, Ss, 2, Rs, 3, Ts];
    var Ek = function(a) {
        _.Q.call(this, a, -1, ct)
    };
    _.O(Ek, _.Q);
    var Dk = function(a, b) {
            return _.y(a, 1, b)
        },
        Fk = function(a, b) {
            _.y(a, 2, b)
        },
        Bk = function(a, b) {
            return rj(a, 3, Kk, b)
        },
        Ck = function(a, b) {
            return _.y(a, 4, b)
        };
    Ek.prototype.Jd = function() {
        return be(this, 7, 0)
    };
    var Kk = function(a) {
        _.Q.call(this, a, -1, dt)
    };
    _.O(Kk, _.Q);
    var Ok = function(a, b) {
            _.Mg(a, 4, b)
        },
        Lk = function(a, b) {
            _.sg(a, 6, b)
        },
        Rk = function(a, b) {
            _.sg(a, 7, b)
        },
        et = function(a) {
            _.Q.call(this, a)
        };
    _.O(et, _.Q);
    et.prototype.getId = function() {
        return bn(this, 1)
    };
    var Mk = function(a) {
            var b = new et;
            return _.y(b, 1, a)
        },
        ft = function(a) {
            _.Q.call(this, a)
        };
    _.O(ft, _.Q);
    ft.prototype.getWidth = function() {
        return ce(this, 1)
    };
    var Tk = function(a) {
        var b = new ft;
        return _.y(b, 1, a)
    };
    ft.prototype.getHeight = function() {
        return ce(this, 2)
    };
    var Sk = function(a, b) {
            return _.y(a, 2, b)
        },
        ct = [3],
        dt = [4],
        gt = [Ek, 1, Ts, 2, Ps, 3, Ws, [Kk, 1, Ts, 2, Ps, 8, Ps, 3, Ts, 4, Us, 5, Xs, 6, Vs, [et, 1, Ts], 7, Vs, [ft, 1, Rs, 2, Rs]], 4, Xs, 5, Vs, bt, 6, Ss, 7, Xs];
    var ht = function(a) {
        _.Q.call(this, a)
    };
    _.O(ht, _.Q);
    var it = [ht, 1, Xs];
    var kt = function(a) {
        _.Q.call(this, a, -1, jt)
    };
    _.O(kt, _.Q);
    var Ak = function(a, b) {
            return qs(a, 2, Ek, b)
        },
        Ik = function(a, b) {
            _.sg(a, 5, b)
        },
        jt = [2],
        lt = [kt, 1, Xs, 6, Ts, 2, Ws, gt, 3, Xs, 4, Ts, 5, Vs, bt, 9, Vs, it, 7, Ss, 8, Rs];
    var nt = function(a) {
        _.Q.call(this, a, -1, mt)
    };
    _.O(nt, _.Q);
    var ot = function(a) {
            var b = new kt;
            b = _.y(b, 1, 1);
            return qs(a, 1, kt, b)
        },
        mt = [1],
        pt = [nt, 1, Ws, lt];
    var st = function(a) {
        _.Q.call(this, a, -1, qt)
    };
    _.O(st, _.Q);
    var ut = function(a) {
        _.Q.call(this, a, -1, tt)
    };
    _.O(ut, _.Q);
    var vt = function(a) {
        _.Q.call(this, a)
    };
    _.O(vt, _.Q);
    var qt = [1],
        tt = [1],
        ss = [2, 3];
    var wt = function(a) {
        _.Q.call(this, a)
    };
    _.O(wt, _.Q);
    wt.prototype.ta = function() {
        return bn(this, 1)
    };
    wt.prototype.I = function() {
        return rs(this, xt)
    };
    var xt = [2, 3];
    var zt = function(a) {
        _.Q.call(this, a, -1, yt)
    };
    _.O(zt, _.Q);
    zt.prototype.La = function() {
        return bn(this, 1)
    };
    zt.prototype.Kb = function() {
        return Ie(this, 1)
    };
    zt.prototype.oc = function() {
        return Oc(this, wt, 2)
    };
    var yt = [2];
    var Bt = function(a) {
        _.Q.call(this, a, -1, At)
    };
    _.O(Bt, _.Q);
    Bt.prototype.La = function() {
        return bn(this, 1)
    };
    Bt.prototype.Kb = function() {
        return Ie(this, 1)
    };
    var At = [4];
    var Ct = function(a) {
        _.Q.call(this, a)
    };
    _.O(Ct, _.Q);
    var Et = function(a) {
        _.Q.call(this, a, -1, Dt)
    };
    _.O(Et, _.Q);
    Et.prototype.qc = function() {
        return Vn(this, Ct, 2)
    };
    var Dt = [1];
    var Gt = function(a) {
        _.Q.call(this, a, -1, Ft)
    };
    _.O(Gt, _.Q);
    var Ht = function(a) {
        _.Q.call(this, a)
    };
    _.O(Ht, _.Q);
    Ht.prototype.La = function() {
        return bn(this, 1)
    };
    Ht.prototype.Kb = function() {
        return Ie(this, 1)
    };
    var Ft = [1];
    var It = function(a) {
        _.Q.call(this, a)
    };
    _.O(It, _.Q);
    It.prototype.getAdUnitPath = function() {
        return bn(this, 1)
    };
    var Jt = function(a) {
        _.Q.call(this, a)
    };
    _.O(Jt, _.Q);
    var Kt = [Jt, 1, Ps];
    var Lt = function(a) {
        _.Q.call(this, a)
    };
    _.O(Lt, _.Q);
    Lt.prototype.getEscapedQemQueryId = function() {
        return bn(this, 1)
    };
    var Mt = function(a) {
        _.Q.call(this, a)
    };
    _.O(Mt, _.Q);
    var Nt = [Lt, 1, Ts, 2, Vs, Kt, 3, Vs, [Mt, 1, Xs, 2, Ps]];
    var Pt = function(a) {
        _.Q.call(this, a, -1, Ot)
    };
    _.O(Pt, _.Q);
    var Um = function(a) {
        _.Q.call(this, a)
    };
    _.O(Um, _.Q);
    var Xm = function(a) {
        _.Q.call(this, a)
    };
    _.O(Xm, _.Q);
    var Ot = [1, 2],
        Vm = [1, 2];
    var an = function(a) {
        _.Q.call(this, a)
    };
    _.O(an, _.Q);
    an.prototype.getAdUnitPath = function() {
        return bn(this, 2)
    };
    an.prototype.getWidth = function() {
        return ce(this, 3)
    };
    an.prototype.getHeight = function() {
        return ce(this, 4)
    };
    var Rt = function(a) {
        _.Q.call(this, a, -1, Qt)
    };
    _.O(Rt, _.Q);
    var Qt = [3];
    var St = function(a) {
        _.Q.call(this, a)
    };
    _.O(St, _.Q);
    var Tt = [5, 6, 7];
    var Vt = function(a) {
        _.Q.call(this, a, -1, Ut)
    };
    _.O(Vt, _.Q);
    var Ut = [4, 5, 6];
    var Wt = function(a) {
        _.Q.call(this, a)
    };
    _.O(Wt, _.Q);
    Wt.prototype.ub = function() {
        return Ie(this, 2)
    };
    var Yt = function(a) {
        _.Q.call(this, a, -1, Xt)
    };
    _.O(Yt, _.Q);
    var Xt = [13];
    var $t = function(a) {
        _.Q.call(this, a, -1, Zt)
    };
    _.O($t, _.Q);
    var Zt = [13];
    var bu = function(a) {
        _.Q.call(this, a, -1, au)
    };
    _.O(bu, _.Q);
    var cu = function(a) {
        _.Q.call(this, a)
    };
    _.O(cu, _.Q);
    var du = function(a) {
        _.Q.call(this, a)
    };
    _.O(du, _.Q);
    var eu = function(a) {
        _.Q.call(this, a)
    };
    _.O(eu, _.Q);
    var He = function(a) {
        _.Q.call(this, a)
    };
    _.O(He, _.Q);
    He.prototype.ta = function() {
        return x(this, 1)
    };
    var fu = function(a) {
            var b = new He;
            return _.y(b, 1, a)
        },
        Be = function(a, b) {
            return _.sg(a, 10, b)
        },
        Ee = function(a) {
            _.Q.call(this, a)
        };
    _.O(Ee, _.Q);
    var Ce = function(a, b) {
            return _.y(a, 1, b)
        },
        au = [1, 2],
        gu = [du, 1, Qs, 2, Qs, 3, Qs],
        hu = [bu, 1, Ws, [cu, 5, Ts, 4, Ts, 2, Vs, gu, 3, Vs, gu, 6, Ss, 7, Vs, [eu, 4, Xs, 5, Ts], 8, Ps], 2, Ws, [He, 1, Ts, 2, Ts, 3, Ps, 7, Ps, 8, Os, 4, Rs, 5, Rs, 6, Rs, 9, Ss, 11, Ss, 10, Vs, [Ee, 1, Xs]]];
    var iu = function(a) {
        _.Q.call(this, a)
    };
    _.O(iu, _.Q);
    iu.prototype.ta = function() {
        return bn(this, 1)
    };
    iu.prototype.I = function() {
        return rs(this, ju)
    };
    var ju = [2, 3];
    var lu = function(a) {
        _.Q.call(this, a, -1, ku)
    };
    _.O(lu, _.Q);
    lu.prototype.oc = function() {
        return Oc(this, iu, 1)
    };
    var ku = [1];
    var mu = function(a) {
        _.Q.call(this, a)
    };
    _.O(mu, _.Q);
    var nu = function(a) {
        _.Q.call(this, a)
    };
    _.O(nu, _.Q);
    nu.prototype.ub = function() {
        return Ie(this, 1)
    };
    nu.prototype.getVersion = function() {
        return x(this, 5)
    };
    var ou = function(a) {
        _.Q.call(this, a)
    };
    _.O(ou, _.Q);
    var pu = function(a) {
        _.Q.call(this, a)
    };
    _.O(pu, _.Q);
    var Vo = function(a) {
        _.Q.call(this, a, -1, qu)
    };
    _.O(Vo, _.Q);
    Vo.prototype.getEscapedQemQueryId = function() {
        return bn(this, 4)
    };
    var qu = [2];
    var Uo = function(a) {
        _.Q.call(this, a)
    };
    _.O(Uo, _.Q);
    var Wo = function(a) {
        _.Q.call(this, a)
    };
    _.O(Wo, _.Q);
    var Yo = function(a) {
        _.Q.call(this, a)
    };
    _.O(Yo, _.Q);
    Yo.prototype.getEscapedQemQueryId = function() {
        return bn(this, 2)
    };
    var Zo = function(a) {
        _.Q.call(this, a)
    };
    _.O(Zo, _.Q);
    var su = function(a) {
        _.Q.call(this, a, -1, ru)
    };
    _.O(su, _.Q);
    su.prototype.getWidth = function() {
        return ce(this, 9)
    };
    su.prototype.getHeight = function() {
        return ce(this, 10)
    };
    var ru = [3, 7, 11];
    var uu = function(a) {
        _.Q.call(this, a, -1, tu)
    };
    _.O(uu, _.Q);
    uu.prototype.getHeight = function() {
        return x(this, 6)
    };
    uu.prototype.getWidth = function() {
        return x(this, 7)
    };
    uu.prototype.getEscapedQemQueryId = function() {
        return x(this, 34)
    };
    var vu = function(a) {
        _.Q.call(this, a)
    };
    _.O(vu, _.Q);
    vu.prototype.getHtml = function() {
        return ti(this, 1)
    };
    var tu = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63],
        wu = [4, 41],
        xu = [39, 48];
    var eo = function(a) {
        _.Q.call(this, a)
    };
    _.O(eo, _.Q);
    var yu = window;
    var bq = function(a) {
        _.Q.call(this, a, -1, zu)
    };
    _.O(bq, _.Q);
    var zu = [15];
    var aq = function(a) {
        _.Q.call(this, a)
    };
    _.O(aq, _.Q);
    aq.prototype.getCorrelator = function() {
        return zi(this, 1)
    };
    aq.prototype.setCorrelator = function(a) {
        return _.Cc(this, 1, a, 0)
    };
    var $p = function(a) {
        _.Q.call(this, a)
    };
    _.O($p, _.Q);
    var Au = _.Kr || Nr;
    var Bu = /^[\w+/_-]+[=]{0,2}$/,
        Cu = function() {
            var a = _.t.document;
            return a.querySelector ? (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Bu.test(a) ? a : "" : ""
        };
    _.ih = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.ih.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.ih.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.ih.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.lh = function(a, b) {
        this.width = a;
        this.height = b
    };
    r = _.lh.prototype;
    r.aspectRatio = function() {
        return this.width / this.height
    };
    r.isEmpty = function() {
        return !(this.width * this.height)
    };
    r.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    r.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    r.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Du, Eu, Fu, Hu;
    Du = function(a) {
        return a = Ef(a)
    };
    Eu = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Lf()).toString(36)
    };
    Fu = 2147483648 * Math.random() | 0;
    _.Gu = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    Hu = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var Ku, Mu, Lu, Pu, Ru, td, wd, Iu;
    Ku = function(a) {
        return a ? new Iu(_.Ju(a)) : Zq || (Zq = new Iu)
    };
    Mu = function(a, b) {
        ra(b, function(c, d) {
            c && "object" == typeof c && c.Ma && (c = c.Ga());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Lu.hasOwnProperty(d) ? a.setAttribute(Lu[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    Lu = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.Ou = function(a) {
        a = a.document;
        a = _.Nu(a) ? a.documentElement : a.body;
        return new _.lh(a.clientWidth, a.clientHeight)
    };
    Pu = function(a) {
        return a.scrollingElement ? a.scrollingElement : !Nr && _.Nu(a) ? a.documentElement : a.body || a.documentElement
    };
    _.Qu = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    Ru = function(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!ma(f) || _.ea(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.ea(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                _.br(g ? ca(f) : f, d)
            }
        }
    };
    _.Nu = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.Su = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.Tu = function(a) {
        var b;
        if (Au && !(_.Kr && Vr("9") && !Vr("10") && _.t.SVGElement && a instanceof _.t.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.ea(b) && 1 == b.nodeType ? b : null
    };
    _.Uu = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    td = function(a) {
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
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    };
    _.Ju = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    wd = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.Qu(a.contentDocument) : null)
        } catch (b) {}
        return null
    };
    Iu = function(a) {
        this.j = a || _.t.document || document
    };
    r = Iu.prototype;
    r.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    r.createElement = function(a) {
        var b = this.j;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    r.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };
    r.append = function(a, b) {
        Ru(_.Ju(a), a, arguments)
    };
    r.fe = _.Su;
    r.contains = _.Uu;
    var Vu = function() {
        return Ca("iPad") || Ca("Android") && !Ca("Mobile") || Ca("Silk")
    };
    var Xu, Ij, Yu, ij;
    _.Wu = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    Xu = function(a) {
        return a ? decodeURI(a) : a
    };
    Ij = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Ij(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    Yu = /#|$/;
    ij = function(a, b) {
        var c = a.search(Yu);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };
    var vd, ud, Ze, Zu, $e, gj, uh, ee, Ei, bh, de, fe, jq, av, bv, vh, cv, dv, ev, fv, gv, hv, iv, jv, kv, Uh, Wh, Vh, lv, mv, ov, pv, qv, rv, sv, re, tv, Sm, ek, uv, vv, Oj, wv;
    vd = function(a) {
        try {
            return !!a && null != a.location.href && Hr(a, "foo")
        } catch (b) {
            return !1
        }
    };
    ud = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.t : d;
        c = (void 0 === c ? 0 : c) ? Zu(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !vd(c) || !a(c));) c = Zu(c)
    };
    Ze = function() {
        var a = window;
        ud(function(b) {
            a = b;
            return !1
        });
        return a
    };
    Zu = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    $e = function(a) {
        return vd(a.top) ? a.top : null
    };
    gj = function(a, b) {
        var c = _.rd("SCRIPT", a);
        Ta(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    uh = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    ee = function() {
        if (!w.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            w.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.Lj = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    _.$u = function(a) {
        var b = [];
        _.Lj(a, function(c) {
            b.push(c)
        });
        return b
    };
    Ei = function(a, b) {
        return ua(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    bh = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    de = th(function() {
        return _.fg(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], av) || 1E-4 > Math.random()
    });
    fe = function(a, b) {
        try {
            if (a) return a.setItem("google_experiment_mod", b), b
        } catch (c) {}
        return null
    };
    jq = th(function() {
        return av("MSIE")
    });
    av = function(a) {
        return -1 != Ba().indexOf(a)
    };
    bv = /^([0-9.]+)px$/;
    vh = function(a) {
        return (a = bv.exec(a)) ? +a[1] : null
    };
    cv = function() {
        var a = window;
        try {
            for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return !0;
                case "http:":
                    return !1
            }
        } catch (c) {}
        return !0
    };
    dv = function(a) {
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    ev = {
        Sf: "allow-forms",
        Tf: "allow-modals",
        Uf: "allow-orientation-lock",
        Vf: "allow-pointer-lock",
        Wf: "allow-popups",
        Xf: "allow-popups-to-escape-sandbox",
        Yf: "allow-presentation",
        Zf: "allow-same-origin",
        bg: "allow-scripts",
        cg: "allow-top-navigation",
        dg: "allow-top-navigation-by-user-activation"
    };
    fv = th(function() {
        return _.$u(ev)
    });
    gv = function(a) {
        var b = fv();
        return a.length ? _.Pf(b, function(c) {
            return !(0 <= _.aa(a, c))
        }) : b
    };
    hv = function() {
        var a = _.rd("IFRAME"),
            b = {};
        _.br(fv(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    iv = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && -1 != a.indexOf("[native code]")
    };
    jv = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d) return a;
            if (!(a = Zu(a))) break
        }
        return null
    };
    kv = function(a) {
        if (!a || !a.frames) return null;
        if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document,
                c = b.head,
                d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
            if (e) {
                var f = _.rd("IFRAME");
                f.name = "google_ads_top_frame";
                f.id = "google_ads_top_frame";
                f.style.display = "none";
                f.style.position = "fixed";
                f.style.left = "-999px";
                f.style.top = "-999px";
                f.style.width = "0px";
                f.style.height = "0px";
                e.appendChild(f);
                return f
            }
        } catch (g) {}
        return null
    };
    _.nl = th(function() {
        return !Vu() && (Ca("iPod") || Ca("iPhone") || Ca("Android") || Ca("IEMobile")) ? 2 : Vu() ? 1 : 0
    });
    Uh = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.Eh = function(a, b) {
        _.Lj(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    };
    Wh = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    Vh = function(a, b) {
        for (var c = 100; a && c--;) {
            var d = uh(a, window);
            if (d) {
                if (b(d)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    lv = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : Hc(a, parseFloat)
    };
    mv = {};
    _.nv = (mv["http://googleads.g.doubleclick.net"] = !0, mv["http://pagead2.googlesyndication.com"] = !0, mv["https://googleads.g.doubleclick.net"] = !0, mv["https://pagead2.googlesyndication.com"] = !0, mv);
    ov = function(a) {
        _.t.console && _.t.console.warn && _.t.console.warn(a)
    };
    pv = [];
    qv = function() {
        var a = pv;
        pv = [];
        a = _.z(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    rv = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    sv = function() {
        return Math.floor(Math.random() * Math.pow(2, 52))
    };
    re = function(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: sv(),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    tv = function(a, b) {
        xd(_.Qu(_.Ju(a)), a, b)
    };
    Sm = function(a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (pv.push(b), 1 == pv.length && (w.Promise ? w.Promise.resolve().then(qv) : window.setImmediate ? setImmediate(qv) : setTimeout(qv, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    ek = function(a) {
        return 0 === a || "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    uv = function(a, b) {
        var c = _.rd("DIV");
        c.id = a;
        c.textContent = b;
        _.Eh(c, {
            height: "24px",
            "line-height": "24px",
            "text-align": "center",
            "vertical-align": "middle",
            color: "white",
            "background-color": "black",
            margin: "0",
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": "500",
            "font-size": "11px",
            "letter-spacing": "0.08em"
        });
        return c
    };
    vv = function(a) {
        return new w.Promise(function(b) {
            setTimeout(function() {
                return void b(2)
            }, a)
        })
    };
    Oj = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    };
    _.rd = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    wv = function(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, vd(a) && (b = a);
        return b
    };
    _.xv = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.xv.prototype.getWidth = function() {
        return this.right - this.left
    };
    _.xv.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    _.yv = function(a) {
        return new _.xv(a.top, a.right, a.bottom, a.left)
    };
    _.xv.prototype.contains = function(a) {
        return this && a ? a instanceof _.xv ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    _.xv.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.xv.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.xv.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var zv = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        Av = function(a) {
            return new _.xv(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        Bv = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new zv(c, e, d - c, a - e)
            }
            return null
        };
    zv.prototype.contains = function(a) {
        return a instanceof _.ih ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    zv.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    zv.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    zv.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Cv = function(a) {
        return (a = void 0 === a ? yd() : a) ? vd(a.master) ? a.master : null : null
    };
    _.Cd = function(a) {
        this.Se = a
    };
    _.Dv = [Dd("data"), Dd("http"), Dd("https"), Dd("mailto"), Dd("ftp"), new _.Cd(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];
    var Gv, bg, kh, Iv, Jv, hh;
    _.Fv = function(a, b, c) {
        if ("string" === typeof b)(b = _.Ev(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.Ev(c, d);
                f && (c.style[f] = e)
            }
    };
    Gv = {};
    _.Ev = function(a, b) {
        var c = Gv[b];
        if (!c) {
            var d = _.Gu(b);
            c = d;
            void 0 === a.style[d] && (d = (Nr ? "Webkit" : Mr ? "Moz" : _.Kr ? "ms" : null) + Hu(d), void 0 !== a.style[d] && (c = d));
            Gv[b] = c
        }
        return c
    };
    _.Hv = function(a, b) {
        var c = _.Ju(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    bg = function(a, b) {
        return _.Hv(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    kh = function(a) {
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
    Iv = function(a) {
        if (_.Kr && !(8 <= Number(Yr))) return a.offsetParent;
        var b = _.Ju(a),
            c = bg(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = bg(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    Jv = function(a) {
        var b = _.Ju(a),
            c = new _.ih(0, 0);
        var d = b ? _.Ju(b) : document;
        d = !_.Kr || 9 <= Number(Yr) || _.Nu(Ku(d).j) ? d.documentElement : d.body;
        if (a == d) return c;
        a = kh(a);
        d = Ku(b).j;
        b = Pu(d);
        d = d.parentWindow || d.defaultView;
        b = _.Kr && Vr("10") && d.pageYOffset != b.scrollTop ? new _.ih(b.scrollLeft, b.scrollTop) : new _.ih(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    hh = function(a, b) {
        var c = new _.ih(0, 0),
            d = _.Qu(_.Ju(a));
        if (!Hr(d, "parent")) return c;
        do {
            var e = d == b ? Jv(a) : _.Kv(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.Kv = function(a) {
        a = kh(a);
        return new _.ih(a.left, a.top)
    };
    _.Lv = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.cg = function(a, b) {
        if ("none" != bg(b, "display")) return a(b);
        var c = b.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.dg = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Nr && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = kh(a), new _.lh(a.right - a.left, a.bottom - a.top)) : new _.lh(b, c)
    };
    var Qh = function(a) {
        a = Cv(yd(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    };
    var Mv = function(a, b) {
        if (w.globalThis.fetch) w.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var qm = function(a) {
        _.Q.call(this, a, -1, Nv)
    };
    _.O(qm, _.Q);
    var pm = function(a, b) {
            return qg(a, 1, b)
        },
        om = function(a, b) {
            return _.y(a, 2, b)
        },
        Nv = [1];
    var lm = function(a) {
        _.Q.call(this, a)
    };
    _.O(lm, _.Q);
    var km = function(a, b) {
            return _.y(a, 1, b)
        },
        jm = function(a, b) {
            return _.y(a, 2, b)
        },
        im = function(a, b) {
            return _.y(a, 3, b)
        },
        hm = function(a, b) {
            return _.y(a, 5, b)
        },
        gm = function(a, b) {
            return _.y(a, 6, b)
        };
    var fm = function(a) {
        _.Q.call(this, a)
    };
    _.O(fm, _.Q);
    var em = function(a, b) {
        return _.sg(a, 1, b)
    };
    var am = function(a) {
        _.Q.call(this, a)
    };
    _.O(am, _.Q);
    var $l = function(a, b) {
            return _.sg(a, 1, b)
        },
        Zl = function(a, b) {
            return _.sg(a, 2, b)
        },
        dm = function(a) {
            _.Q.call(this, a)
        };
    _.O(dm, _.Q);
    dm.prototype.getWidth = function() {
        return zi(this, 1)
    };
    var cm = function(a, b) {
        return _.y(a, 1, b)
    };
    dm.prototype.getHeight = function() {
        return zi(this, 2)
    };
    var bm = function(a, b) {
        return _.y(a, 2, b)
    };
    var nm = function(a) {
        _.Q.call(this, a)
    };
    _.O(nm, _.Q);
    var mm = function(a, b) {
        return _.sg(a, 1, b)
    };
    var Pv = function(a) {
        _.Q.call(this, a, -1, Ov)
    };
    _.O(Pv, _.Q);
    var xm = function(a) {
            var b = new Pv;
            return _.sg(b, 1, a)
        },
        wm = function(a, b) {
            return _.sg(a, 2, b)
        },
        vm = function(a, b) {
            return _.sg(a, 3, b)
        },
        um = function(a) {
            var b = se();
            return qg(a, 4, b)
        },
        tm = function(a, b) {
            return _.sg(a, 6, b)
        },
        sm = function(a, b) {
            return _.Cc(a, 7, b, 0)
        },
        Ov = [4];
    var Qv = function(a) {
        _.Q.call(this, a)
    };
    _.O(Qv, _.Q);
    var Rv = function(a) {
        _.Q.call(this, a)
    };
    _.O(Rv, _.Q);
    var Ag = function(a) {
        _.Q.call(this, a)
    };
    _.O(Ag, _.Q);
    var vg = function(a) {
        _.Q.call(this, a)
    };
    _.O(vg, _.Q);
    var rg = function(a) {
        _.Q.call(this, a)
    };
    _.O(rg, _.Q);
    var Sv = function(a) {
        _.Q.call(this, a)
    };
    _.O(Sv, _.Q);
    var pg = function(a) {
        _.Q.call(this, a, -1, Tv)
    };
    _.O(pg, _.Q);
    pg.prototype.getTagSessionCorrelator = function() {
        return zi(this, 2)
    };
    var Tv = [4],
        xg = [6, 7, 8, 9, 11];
    var Ng = function(a) {
        _.Q.call(this, a, -1, Uv)
    };
    _.O(Ng, _.Q);
    var Uv = [3];
    var Kg = function(a) {
        _.Q.call(this, a, -1, Vv)
    };
    _.O(Kg, _.Q);
    var Vv = [4];
    var Jg = function(a) {
        _.Q.call(this, a, -1, Wv)
    };
    _.O(Jg, _.Q);
    Jg.prototype.getTagSessionCorrelator = function() {
        return zi(this, 1)
    };
    var Wv = [2];
    var Ig = function(a) {
        _.Q.call(this, a)
    };
    _.O(Ig, _.Q);
    var Qg = [4];
    var Xv = function(a, b, c, d) {
            this.C = a;
            this.I = b;
            this.l = c;
            this.D = d;
            this.j = [];
            this.m = null
        },
        Yv = function(a) {
            if (a.j.length) {
                var b = Gd(a.j);
                a.I(a.C + "?e=1", b);
                a.j = [];
                a.m = null
            }
        };
    Xv.prototype.qd = function() {
        var a = this;
        this.j.push.apply(this.j, _.Hd(zd.apply(0, arguments)));
        this.j.length >= this.D ? (null !== this.m && clearTimeout(this.m), Yv(this)) : null === this.m && (this.m = setTimeout(function() {
            Yv(a)
        }, this.l))
    };
    var nq = function(a, b) {
        Xv.call(this, "https://pagead2.googlesyndication.com/pagead/ping", Mv, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b)
    };
    _.O(nq, Xv);
    var T = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? !1 : b
        },
        Zv = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? 0 : b
        },
        $v = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? "" : b
        },
        aw = function(a) {
            var b = void 0 === b ? [] : b;
            this.j = a;
            this.defaultValue = b
        };
    var bw, cw, dw, ew, Rh, fw, gw, Qk, hw, iw, sk, jw, kw, lw, mw, nw, Nk, ow, pw, qw, rw, sw, tw, uw, vw, ww, ao, xw, yw, zw, Aw, Bw, Cw, Dw, Ew, Fw, Gw, Hw, il, Jw, Kw, Dg, Lw, Mw, Nw, Ow, Pw, Qw, Rw, Sw, Tw, Uw, Vw, Ww, Xw, Qm, Yw, Hj, Dj, In, Jn, Zw, $w, ax, bx, cx, dx, ex, Dm, fx, mq, gx, hx, ix, jx, kx, lx, mx, nx, ox, px, qx, rx, af, sx, tx, ve, ux, vx, wx, xx, qe, yx, zx, Ax, Bx, Cx, dq, eq, Dx, al, fq, cq, Fx, Gx, Hx, Ix, Jx, rl, Lx, li;
    bw = new T(1122, !0);
    cw = new T(1208);
    dw = new $v(3);
    ew = new aw(481);
    Rh = new Zv(7, .1);
    fw = new T(212);
    gw = new T(476168471);
    Qk = new Zv(474069761);
    hw = new Zv(455645877);
    iw = new Zv(462420536);
    sk = new T(476475256);
    jw = new T(359351145);
    kw = new T(456267131);
    lw = new Zv(448338836, .01);
    mw = new Zv(427198696);
    nw = new Zv(438663674);
    Nk = new T(447038262);
    ow = new T(23);
    pw = new T(369430);
    qw = new T(477812799);
    rw = new Zv(408380992, .01);
    sw = new Zv(377289019, 1E4);
    tw = new Zv(488);
    uw = new Zv(529, 20);
    vw = new $v(10);
    ww = new Zv(428094087);
    ao = new Zv(447000223, .01);
    xw = new Zv(430268223);
    yw = new Zv(434620574);
    zw = new T(474159377);
    Aw = new T(360245597, !0);
    Bw = new T(462165369);
    Cw = new Zv(461613513);
    Dw = new Zv(494, 1E4);
    Ew = new Zv(471890184, .01);
    Fw = new Zv(517, .01);
    Gw = new T(220);
    Hw = new T(200);
    il = new Zv(492, .01);
    _.Iw = new T(430565960);
    Jw = new Zv(363650251);
    Kw = new T(83);
    Dg = new T(85);
    Lw = new T(437061931);
    Mw = new aw(466086960);
    Nw = new T(464128744);
    Ow = new T(45374286);
    Pw = new T(449296995, !0);
    Qw = new Zv(398776877, 6E4);
    Rw = new T(437292966);
    Sw = new Zv(374201269, 6E4);
    Tw = new Zv(371364213, 6E4);
    Uw = new Zv(376149757, .0025);
    Vw = new T(453275889);
    Ww = new T(422917270);
    Xw = new T(377936516, !0);
    Qm = new T(476984599);
    Yw = new Zv(24);
    Hj = new aw(1);
    Dj = new $v(2, "1-0-38");
    In = new T(427203966);
    Jn = new T(442109935);
    Zw = new T(441529989);
    $w = new T(428624799);
    ax = new T(437308144);
    bx = new aw(489);
    cx = new T(392065905);
    dx = new Zv(360245595, 500);
    ex = new Zv(432023148);
    Dm = new T(467673112);
    fx = new T(424117738);
    mq = new Zv(397316938, 1E3);
    gx = new T(444587044);
    hx = new T(440148284, !0);
    ix = new T(444587045);
    jx = new T(440148282);
    kx = new T(399705355);
    lx = new T(475870279);
    mx = new T(472976668);
    nx = new T(371390390);
    ox = new T(465091316);
    px = new T(501);
    qx = new aw(472572701);
    rx = new T(439828594);
    af = new T(1930);
    sx = new T(453);
    tx = new T(454);
    ve = new Zv(360261971);
    ux = new Zv(1921, 72);
    vx = new Zv(1920, 24);
    wx = new Zv(426169222, 1E3);
    xx = new Zv(1917, 300);
    qe = new Zv(1916, .001);
    yx = new aw(471270390);
    zx = new T(467295690);
    Ax = new T(473858892);
    Bx = new T(476437529);
    Cx = new T(469586196);
    dq = new T(77);
    eq = new T(78);
    Dx = new T(1961);
    al = new T(309);
    fq = new T(80);
    cq = new T(76);
    _.Ex = new T(1947, !0);
    Fx = new T(84);
    Gx = new T(1958);
    Hx = new T(1973);
    Ix = new T(188);
    Jx = new T(1971);
    _.Kx = new Zv(1972);
    rl = new Zv(1158);
    Lx = new T(471682731);
    li = new T(477209535);
    var Mx = function(a, b, c, d, e, f) {
            try {
                var g = a.j,
                    h = _.rd("SCRIPT", g);
                h.async = !0;
                Ta(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", function() {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", function() {
                    0 < c ? Mx(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (k) {
                f()
            }
        },
        Nx = function(a, b, c, d) {
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            Mx(Ku(a), b, 0, !1, c, d)
        };
    ta({
        yg: 0,
        xg: 1,
        ug: 2,
        pg: 3,
        vg: 4,
        qg: 5,
        wg: 6,
        sg: 7,
        tg: 8,
        og: 9,
        rg: 10
    }).map(function(a) {
        return Number(a)
    });
    ta({
        Ag: 0,
        Bg: 1,
        zg: 2
    }).map(function(a) {
        return Number(a)
    });
    var Ox = function(a) {
        var b = a.document,
            c = function() {
                if (!a.frames.googlefcPresent)
                    if (b.body) {
                        var d = _.rd("IFRAME", b);
                        d.style.display = "none";
                        d.style.width = "0px";
                        d.style.height = "0px";
                        d.style.border = "none";
                        d.style.zIndex = "-1000";
                        d.style.left = "-1000px";
                        d.style.top = "-1000px";
                        d.name = "googlefcPresent";
                        b.body.appendChild(d)
                    } else a.setTimeout(c, 5)
            };
        c()
    };
    _.Px = function() {
        this.D = this.D;
        this.va = this.va
    };
    _.Px.prototype.D = !1;
    _.Px.prototype.Ea = function() {
        this.D || (this.D = !0, this.I())
    };
    _.Hm = function(a, b) {
        _.Om(a, _.Yq(Ld, b))
    };
    _.Om = function(a, b) {
        a.D ? b() : (a.va || (a.va = []), a.va.push(b))
    };
    _.Px.prototype.I = function() {
        if (this.va)
            for (; this.va.length;) this.va.shift()()
    };
    var Qx = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Rx = function(a, b, c) {
            b = void 0 === b ? 500 : b;
            c = void 0 === c ? !1 : c;
            _.Px.call(this);
            this.j = a;
            this.m = null;
            this.H = {};
            this.B = 0;
            this.o = b;
            this.l = c;
            this.C = null
        };
    _.O(Rx, _.Px);
    Rx.prototype.I = function() {
        this.H = {};
        this.C && (_.Sd(this.j, "message", this.C), delete this.C);
        delete this.H;
        delete this.j;
        delete this.m;
        _.Px.prototype.I.call(this)
    };
    var Tx = function(a) {
        return "function" === typeof a.j.__tcfapi || null != Sx(a)
    };
    Rx.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.l
            },
            d = _.Cr(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.o && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.o));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Qx(c), c.internalBlockOnErrors = b.l, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Ux(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Rx.prototype.removeEventListener = function(a) {
        a && a.listenerId && Ux(this, "removeEventListener", null, a.listenerId)
    };
    var Wx = function(a, b) {
            var c = {
                    internalErrorState: 0,
                    internalBlockOnErrors: a.l
                },
                d = _.Cr(function() {
                    return b(c)
                }),
                e = 0; - 1 !== a.o && (e = setTimeout(function() {
                c.tcString = "tcunavailable";
                c.internalErrorState = 1;
                d()
            }, a.o));
            Ux(a, "addEventListener", function(f, g) {
                var h = e;
                h && clearTimeout(h);
                g && (c = f);
                c.internalErrorState = Qx(c);
                c.internalBlockOnErrors = a.l;
                0 != c.internalErrorState && (c.tcString = "tcunavailable");
                if (a.l) Vx(c) && (Ux(a, "removeEventListener", null, c.listenerId), d());
                else if (0 != c.internalErrorState || Vx(c)) Ux(a, "removeEventListener", null, c.listenerId), d()
            })
        },
        Xx = function(a, b) {
            var c = void 0 === c ? "755" : c;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var d = a.publisher.restrictions[b];
                    if (void 0 !== d) {
                        d = d[void 0 === c ? "755" : c];
                        break a
                    }
                }
                d = void 0
            }
            if (0 === d) return !1;
            a.purpose && a.vendor ? (d = a.vendor.consents, (c = !(!d || !d[void 0 === c ? "755" : c])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
            return b
        },
        Ux = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
            else if (Sx(a)) {
                Yx(a);
                var e = ++a.B;
                a.H[e] = c;
                a.m && (c = {}, a.m.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        Sx = function(a) {
            if (a.m) return a.m;
            a.m = jv(a.j, "__tcfapiLocator");
            return a.m
        },
        Yx = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.H[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, _.Ya(a.j, "message", a.C))
        },
        Vx = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Qx(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? !a.internalBlockOnErrors : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        },
        Zx = function(a, b) {
            return !1 === a.gdprApplies ? !0 : b.every(function(c) {
                return Xx(a, c)
            })
        };
    var $x = function(a, b, c) {
            this.j = a;
            this.D = b;
            this.m = void 0 === c ? function() {} : c
        },
        ay = function(a, b, c) {
            return new $x(a, b, c)
        };
    $x.prototype.start = function() {
        if (this.j === this.j.top) try {
            Ox(this.j), by(this)
        } catch (a) {}
    };
    var by = function(a) {
        var b = gb(new xf($q, "https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.D,
            ers: 3
        });
        Nx(a.j, b, function() {
            a.m(!0)
        }, function() {
            a.m(!1)
        })
    };
    var cy = w.Promise;
    var dy = function(a) {
        this.D = a
    };
    dy.prototype.m = function(a, b, c) {
        this.D.then(function(d) {
            d.m(a, b, c)
        })
    };
    dy.prototype.j = function(a, b) {
        return this.D.then(function(c) {
            return c.j(a, b)
        })
    };
    var ey = function(a) {
        this.data = a
    };
    var fy = function(a) {
        this.D = a
    };
    fy.prototype.m = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        gy(d.port1, b);
        this.D.postMessage(a, [d.port2].concat(c))
    };
    fy.prototype.j = function(a, b) {
        var c = this;
        return new cy(function(d) {
            c.m(a, d, b)
        })
    };
    var hy = function(a, b) {
            gy(a, b);
            return new fy(a)
        },
        gy = function(a, b) {
            b && (a.onmessage = function(c) {
                b(new ey(c.data, hy(c.ports[0])))
            })
        };
    var ji = function(a) {
            var b = a.rc,
                c = void 0 === a.Ka ? "ZNWN1d" : a.Ka,
                d = void 0 === a.onMessage ? void 0 : a.onMessage,
                e = void 0 === a.Cc ? void 0 : a.Cc;
            return iy({
                destination: a.destination,
                Jd: function() {
                    return b.contentWindow
                },
                df: jy(a.origin),
                Ka: c,
                onMessage: d,
                Cc: e
            })
        },
        iy = function(a) {
            var b = a.destination,
                c = a.Jd,
                d = a.df,
                e = void 0 === a.td ? void 0 : a.td,
                f = a.Ka,
                g = void 0 === a.onMessage ? void 0 : a.onMessage,
                h = void 0 === a.Cc ? void 0 : a.Cc,
                k = Object.create(null);
            d.forEach(function(l) {
                k[l] = !0
            });
            return new dy(new cy(function(l, m) {
                var n = function(p) {
                    if (p.source && p.source === c())
                        if (!0 !== k[p.origin]) {
                            b.removeEventListener("message", n, !1);
                            var q = d.join(", ");
                            m(Error('Origin mismatch while establishing channel "' + f + '". Expected ' + (1 === d.length ? q : "one of [" + q + "]") + ", but received " + p.origin + "."))
                        } else(p.data.n || p.data) === f && (b.removeEventListener("message", n, !1), e && p.data.t !== e ? m(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(hy(p.ports[0], g)), h && h(p)))
                };
                b.addEventListener("message", n, !1)
            }))
        },
        jy = function(a) {
            a = "string" === typeof a ? [a] : a;
            var b = Object.create(null);
            a.forEach(function(c) {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var Lg = (0, D.dd)(function(a) {
        return "string" === typeof a
    }, "string");
    _.lg = function(a) {
        var b = "jb";
        if (a.jb && a.hasOwnProperty(b)) return a.jb;
        b = new a;
        return a.jb = b
    };
    var ky, Cj, Gj;
    ky = function() {
        var a = {};
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.D = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.I = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.C = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function() {}
    };
    _.G = function(a) {
        return _.lg(ky).m(a.j, a.defaultValue)
    };
    _.pe = function(a) {
        return _.lg(ky).D(a.j, a.defaultValue)
    };
    Cj = function(a) {
        return _.lg(ky).I(a.j, a.defaultValue)
    };
    Gj = function(a) {
        return _.lg(ky).C(a.j, a.defaultValue)
    };
    var ly = navigator,
        my = function(a) {
            var b = 1,
                c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        ny = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return my(a.toLowerCase())
        },
        oy = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        py = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        qy = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var fh = function(a) {
            return !!a && a.top == a
        },
        ry = function(a, b, c) {
            b = b || a.google_ad_width;
            c = c || a.google_ad_height;
            if (fh(a)) return !1;
            var d = a.document,
                e = d.documentElement;
            if (b && c) {
                var f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
                if (g > 2 * c || f > 2 * b) return !1
            }
            return !0
        };
    var sy = function(a) {
        a = void 0 === a ? window : a;
        return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null
    };
    var Kh = function() {
        this.j = [];
        this.m = -1
    };
    Kh.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && _.v(Number, "isInteger").call(Number, a) && this.j[a] !== b && (this.j[a] = b, this.m = -1)
    };
    Kh.prototype.get = function(a) {
        return !!this.j[a]
    };
    var Mh = function(a) {
        -1 === a.m && (a.m = cr(a.j, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }));
        return a.m
    };
    var Vd = function(a) {
        _.Q.call(this, a, -1, ty)
    };
    _.O(Vd, _.Q);
    var Wd = function(a, b) {
            rj(a, 1, ae, b)
        },
        ae = function(a) {
            _.Q.call(this, a)
        };
    _.O(ae, _.Q);
    var Yd = function(a) {
            var b = new ae;
            return _.Bg(b, 1, a)
        },
        Xd = function(a, b) {
            return _.Cc(a, 2, b, 0)
        },
        ty = [1];
    var je, vo;
    _.uy = function(a, b, c, d) {
        Td(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d)
    };
    je = function(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        _.Lj(a, function(e, f) {
            e && (d += "&" + f + "=" + encodeURIComponent(e))
        });
        vo(d, c)
    };
    vo = function(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        c.fetch ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : _.uy(c, a, void 0, b)
    };
    var me = function(a) {
            this.j = a || {
                cookie: ""
            }
        },
        xy = function() {
            var a = vy;
            if (!_.t.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                gd: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
            wy(a, "TESTCOOKIESENABLED");
            return !0
        };
    me.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.vh;
            d = c.sf || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.gd
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    me.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = jr(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    var wy = function(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            gd: 0,
            path: c,
            domain: d
        })
    };
    me.prototype.isEmpty = function() {
        return !this.j.cookie
    };
    me.prototype.clear = function() {
        for (var a = (this.j.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = jr(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) wy(this, b[a])
    };
    var vy = new me("undefined" == typeof document ? null : document);
    var yy = null,
        zy = function() {
            if (null === yy) {
                yy = "";
                try {
                    var a = "";
                    try {
                        a = _.t.top.location.hash
                    } catch (c) {
                        a = _.t.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        yy = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return yy
        };
    var By, ug;
    _.ue = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Lf()
    };
    _.Ay = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    By = function(a, b) {
        b = void 0 === b ? _.t : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    ug = function(a) {
        a = void 0 === a ? _.t : a;
        var b = Math.min(By("domLoading", a) || Infinity, By("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(By("responseEnd", a), By("navigationStart", a)) : b
    };
    var Cy = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e;
        this.taskId = void 0
    };
    var Fg = _.t.performance,
        Dy = !!(Fg && Fg.mark && Fg.measure && Fg.clearMarks),
        Gg = th(function() {
            var a;
            if (a = Dy) a = zy(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        }),
        Ey = function(a, b) {
            this.m = [];
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.m = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.j = Gg() || (null != c ? c : Math.random() < a)
        },
        Fy = function(a, b, c, d, e, f) {
            a.j && (b = new Cy(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.m.length || a.m.push(b))
        };
    Ey.prototype.start = function(a, b) {
        if (!this.j) return null;
        a = new Cy(a, b, _.Ay() || _.ue());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Fg && Gg() && Fg.mark(b);
        return a
    };
    Ey.prototype.end = function(a) {
        if (this.j && "number" === typeof a.value) {
            a.duration = (_.Ay() || _.ue()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            Fg && Gg() && Fg.mark(b);
            !this.j || 2048 < this.m.length || this.m.push(a)
        }
    };
    var Lo = function(a, b, c) {
        var d = _.Ay();
        d && Fy(a, b, 9, d, 0, c)
    };
    var nk = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.v(Object, "setPrototypeOf").call(Object, this, nk.prototype)
    };
    _.O(nk, Error);
    nk.prototype.name = "PublisherInputError";
    var Gy = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.v(Object, "setPrototypeOf").call(Object, this, Gy.prototype)
    };
    _.O(Gy, Error);
    Gy.prototype.name = "ServerError";
    var Hy = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.v(Object, "setPrototypeOf").call(Object, this, Hy.prototype)
    };
    _.O(Hy, Error);
    Hy.prototype.name = "NetworkError";
    var Iy;
    Iy = {
        Eg: 0,
        ee: 3,
        ge: 4,
        Fg: 5
    };
    var Jy = Iy.ee,
        Ky = Iy.ge;
    var Ly = function(a) {
            this.methodName = a
        },
        My = new Ly(1),
        Ny = new Ly(16),
        Oy = new Ly(15),
        Py = new Ly(2),
        Qy = new Ly(3),
        Ry = new Ly(5),
        Sy = new Ly(6),
        Ty = new Ly(7),
        Uy = new Ly(8),
        Vy = new Ly(14),
        Wy = function(a, b, c) {
            return b[a.methodName] || c || function() {}
        };
    var Xy = function() {
            this.j = function() {};
            this.D = function() {};
            this.m = function() {
                return []
            };
            this.I = function() {
                return []
            }
        },
        Yy = function(a, b) {
            a.j = Wy(My, b, function() {});
            a.m = function(c) {
                return Wy(Py, b, function() {
                    return []
                })(c, 2)
            };
            a.I = function() {
                return Wy(Qy, b, function() {
                    return []
                })(2)
            };
            a.D = function(c) {
                Wy(Ny, b, function() {})(c, 2)
            }
        },
        kq = function(a) {
            _.lg(Xy).D(a)
        },
        Xj = function(a) {
            return _.lg(Xy).m(a)
        },
        se = function() {
            return _.lg(Xy).I()
        };
    var Zy = function() {};
    Zy.j = function() {
        throw Error("Must be overridden");
    };
    var oe = function() {
        this.j = 0
    };
    _.O(oe, Zy);
    oe.jb = void 0;
    oe.j = function() {
        return oe.jb ? oe.jb : oe.jb = new oe
    };
    var $y = function() {
            this.cache = {}
        },
        ye = function() {
            az || (bz = _.pe(vx), cz = _.pe(ux), az = new $y);
            return az
        },
        Le = function(a) {
            var b = x(a, 3);
            if (!b) return 3;
            if (void 0 === x(a, 2)) return 4;
            a = Date.now();
            return a > b + 36E5 * cz ? 2 : a > b + 36E5 * bz ? 1 : 0
        };
    $y.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            pb: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            te(6, a, null == (d = g) ? void 0 : d.message);
            return {
                pb: null,
                success: !1
            }
        }
        if (!c) return {
            pb: null,
            success: !0
        };
        try {
            var e = Ud(He, c);
            this.cache[a] = e;
            return {
                pb: e,
                success: !0
            }
        } catch (g) {
            var f;
            te(5, a, null == (f = g) ? void 0 : f.message);
            return {
                pb: null,
                success: !1
            }
        }
    };
    $y.prototype.set = function(a, b) {
        var c = (0, D.K)(a.ta()),
            d = "_GESPSK-" + c;
        _.y(a, 3, Date.now());
        try {
            b.setItem(d, Zd(a))
        } catch (f) {
            var e;
            te(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    var az = null,
        bz = 24,
        cz = 72;
    var ze = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    var dz = function() {
        _.Px.apply(this, arguments);
        this.j = [];
        this.C = [];
        this.m = []
    };
    _.O(dz, _.Px);
    var ez = function(a, b, c) {
        a.C.push({
            vd: void 0 === c ? !1 : c,
            Ed: b
        })
    };
    dz.prototype.I = function() {
        this.j.length = 0;
        this.m.length = 0;
        this.C.length = 0;
        _.Px.prototype.I.call(this)
    };
    _.Sf = function() {
        var a = this;
        this.promise = new w.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var fz = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.v(Object, "setPrototypeOf").call(Object, this, fz.prototype);
        this.name = "InputError"
    };
    _.O(fz, Error);
    var gz = function() {
            var a = this;
            this.o = this.ab = null;
            this.C = -1;
            this.D = new _.Sf;
            this.m = !1;
            this.D.promise.then(function() {
                -1 !== a.C && (a.o = _.ue() - a.C)
            }, function() {})
        },
        hz = function() {
            gz.apply(this, arguments)
        };
    _.O(hz, gz);
    var iz = function(a, b) {
        a.m || (a.m = !0, a.ab = b, a.D.resolve(b))
    };
    sq.Object.defineProperties(hz.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.D.promise
            }
        },
        I: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.m
            }
        },
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.o
            }
        }
    });
    var kp = function() {
        hz.apply(this, arguments)
    };
    _.O(kp, hz);
    kp.prototype.j = function(a) {
        iz(this, a)
    };
    var jz = function(a, b) {
            iz(a, null != b ? b : null)
        },
        kz = function(a) {
            iz(a, null)
        },
        lz = function(a, b) {
            a.m || (a.m = !0, a.ab = null, a.H = b, a.D.reject(b))
        },
        mz = function(a) {
            gz.call(this);
            this.mb = a
        };
    _.O(mz, gz);
    mz.prototype.ub = function() {
        return null !== this.mb.ab
    };
    sq.Object.defineProperties(mz.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.mb.H
            }
        }
    });
    var nz = function(a) {
        mz.call(this, a);
        this.mb = a
    };
    _.O(nz, mz);
    sq.Object.defineProperties(nz.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.mb.ab
            }
        }
    });
    var oz = function() {
        mz.apply(this, arguments)
    };
    _.O(oz, mz);
    sq.Object.defineProperties(oz.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.mb.ab
            }
        }
    });
    var pz = function() {
        mz.apply(this, arguments)
    };
    _.O(pz, mz);
    sq.Object.defineProperties(pz.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.mb.ab
            }
        }
    });
    var qz = function() {
        hz.apply(this, arguments)
    };
    _.O(qz, hz);
    qz.prototype.notify = function() {
        iz(this, null)
    };
    var rz = function(a, b) {
        b = void 0 === b ? !1 : b;
        hz.call(this);
        var c = this;
        _.v(w.Promise, "any").call(w.Promise, a.map(function(d) {
            return d.promise.then(function(e) {
                if (b || null != e) return e;
                throw e;
            })
        })).then(function(d) {
            c.m = !0;
            c.ab = d;
            c.D.resolve(d)
        }, function() {
            c.m = !0;
            c.ab = null;
            c.D.resolve(null)
        })
    };
    _.O(rz, hz);
    var sz = function(a, b) {
        b = void 0 === b ? 0 : b;
        _.Px.call(this);
        this.id = a;
        this.za = b;
        this.ha = !1;
        this.T = -1;
        this.C = new dz;
        _.Hm(this, this.C)
    };
    _.O(sz, _.Px);
    sz.prototype.start = function() {
        var a = this,
            b, c, d, e, f;
        return _.$a(function(g) {
            switch (g.j) {
                case 1:
                    if (a.ha) return g.return();
                    a.ha = !0;
                    g.D = 2;
                    b = a;
                    return ab(g, Ke(a.C.C, a.za), 4);
                case 4:
                    b.T = g.m;
                    if (a.D) {
                        g.j = 5;
                        break
                    }
                    for (var h = 0, k = _.z(a.C.m), l = k.next(); !l.done; l = k.next()) {
                        if (!l.value.ub()) throw Error("missing input: " + a.id + "/" + h);
                        ++h
                    }
                    c = _.z(a.C.j);
                    for (d = c.next(); !d.done; d = c.next()) e = d.value, e.C = _.ue();
                    return ab(g, a.j(), 5);
                case 5:
                    cb(g, 0);
                    break;
                case 2:
                    f = db(g);
                    if (a.D) return g.return();
                    f instanceof fz ? a.H(f) : f instanceof Error && (a.V(f), a.m(f));
                    g.j = 0
            }
        })
    };
    var V = function(a) {
            var b = new kp;
            a.C.j.push(b);
            return b
        },
        tz = function(a) {
            var b = new qz;
            a.C.j.push(b);
            return b
        },
        W = function(a, b) {
            ez(a.C, b);
            b = new oz(b);
            a.C.m.push(b);
            return b
        },
        X = function(a, b) {
            ez(a.C, b);
            return new nz(b)
        },
        uz = function(a, b) {
            ez(a.C, b, !0);
            return new nz(b)
        },
        vz = function(a, b) {
            ez(a.C, b)
        },
        wz = function(a, b) {
            b = new rz(b);
            ez(a.C, b);
            b = new oz(b);
            a.C.m.push(b);
            return b
        };
    sz.prototype.H = function() {};
    sz.prototype.m = function(a) {
        if (this.C.j.length) {
            a = new fz(a.message);
            for (var b = _.z(this.C.j), c = b.next(); !c.done; c = b.next())
                if (c = c.value, !c.I) {
                    var d = a;
                    c.m = !0;
                    c.H = d;
                    c.D.reject(d)
                }
        }
    };
    var xz = function(a, b) {
        sz.call(this, a);
        this.id = a;
        this.B = b
    };
    _.O(xz, sz);
    xz.prototype.V = function(a) {
        this.B(this.id, a)
    };
    var Te = function(a, b, c) {
        xz.call(this, 1041, c);
        this.l = b;
        this.o = W(this, a)
    };
    _.O(Te, xz);
    Te.prototype.j = function() {
        var a = this.o.value;
        ye().set(a, this.l) && Ie(a, 2) && te(27, (0, D.K)(a.ta()))
    };
    var hf = function(a, b, c) {
        xz.call(this, 1049, c);
        this.l = b;
        vz(this, a)
    };
    _.O(hf, xz);
    hf.prototype.j = function() {
        for (var a = _.z(Ge(this.l)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = ye().get(b, this.l).pb;
            if (c) {
                var d = Le(c);
                if (2 === d || 3 === d) {
                    d = void 0;
                    var e = ye();
                    c = (0, D.K)(c.ta());
                    try {
                        this.l.removeItem("_GESPSK-" + c), delete e.cache[c]
                    } catch (f) {
                        te(8, c, null == (d = f) ? void 0 : d.message)
                    }
                    te(40, b)
                }
            }
        }
    };
    var Ue = function(a, b, c, d) {
        xz.call(this, 658, d);
        this.collectorFunction = a;
        this.J = c;
        this.l = V(this);
        this.F = V(this);
        this.o = X(this, b)
    };
    _.O(Ue, xz);
    Ue.prototype.j = function() {
        var a = this;
        if (this.o.value) {
            var b = function(f) {
                    a.l.j({
                        id: (0, D.K)(f.ta()),
                        collectorGeneratedData: x(f, 2)
                    })
                },
                c = this.o.value,
                d = (0, D.K)(c.ta()),
                e = Le(c);
            Me(c);
            switch (e) {
                case 0:
                    b(c);
                    break;
                case 1:
                    b(c);
                    this.F.j(c);
                    break;
                case 3:
                case 2:
                case 4:
                    _.y(c, 2, null), Ae(d, c, this.collectorFunction, this.J).then(b)
            }
        } else kz(this.l)
    };
    var Oe = function(a, b, c) {
        xz.call(this, 1027, c);
        this.hc = a;
        this.o = b;
        this.l = V(this)
    };
    _.O(Oe, xz);
    Oe.prototype.j = function() {
        var a = ye().get(this.hc, this.o).pb;
        if (!a) {
            a = fu(this.hc);
            var b = _.pe(ve) || null;
            a = _.y(a, 8, b);
            a = _.y(a, 3, Date.now());
            xe(a, 100, this.o)
        }
        this.l.j(a)
    };
    var Qe = function(a, b, c) {
        xz.call(this, 1029, c);
        this.l = b;
        this.o = V(this);
        this.F = W(this, a)
    };
    _.O(Qe, xz);
    Qe.prototype.j = function() {
        var a = this.F.value,
            b = Date.now();
        if (this.l) {
            var c = (0, D.K)(we(a, 8)),
                d, e = null != (d = x(a, 7)) ? d : b;
            c < this.l && _.y(a, 8, Math.min(c + Number((this.l * (b / 1E3 / 60 - e) / 60).toFixed(3)), this.l))
        }
        this.o.j(a)
    };
    var Re = function(a, b, c) {
        xz.call(this, 1030, c);
        this.F = b;
        this.l = V(this);
        this.o = V(this);
        this.J = W(this, a)
    };
    _.O(Re, xz);
    Re.prototype.j = function() {
        var a = this.J.value,
            b, c = null != (b = we(a, 8)) ? b : 0,
            d;
        b = null != (d = x(a, 7)) ? d : Date.now();
        1 > c && this.F ? (d = {}, te(22, (0, D.K)(a.ta()), null, (d.t = String(b), d.cr = String(c), d.cs = String(Le(a)), d)), this.o.j(Be(a, Ce(new Ee, 104)))) : this.l.j(a)
    };
    var Ve = function(a, b, c, d) {
        xz.call(this, 662, d);
        this.o = a;
        this.l = c;
        this.F = W(this, b)
    };
    _.O(Ve, xz);
    Ve.prototype.j = function() {
        var a = this;
        Fe().then(function() {
            var b = (0, D.K)(a.F.value);
            Ae((0, D.K)(b.ta()), b, a.o, a.l)
        })
    };
    var Pe = function(a, b, c) {
        xz.call(this, 1028, c);
        this.o = b;
        this.l = V(this);
        this.F = W(this, a)
    };
    _.O(Pe, xz);
    Pe.prototype.j = function() {
        var a = this.F.value,
            b = (0, D.K)(a.ta());
        this.o && (Qj(a, 8) || (te(33, b), _.y(a, 8, this.o)), Qj(a, 7) || (te(34, b), _.y(a, 7, Math.round(Date.now() / 1E3 / 60))));
        Qj(a, 3) || te(35, b);
        this.l.j(a)
    };
    var Ne = function() {
        _.Px.apply(this, arguments);
        this.j = []
    };
    _.O(Ne, _.Px);
    var N = function(a, b) {
            _.Hm(a, b);
            a.j.push(b)
        },
        We = function(a, b) {
            b = _.z(b);
            for (var c = b.next(); !c.done; c = b.next()) N(a, c.value)
        },
        Xe = function(a) {
            a = _.z(a.j);
            for (var b = a.next(); !b.done; b = a.next()) b.value.start()
        };
    Ne.prototype.I = function() {
        _.Px.prototype.I.call(this);
        this.j.length = 0
    };
    var yz = function(a, b, c, d) {
        xz.call(this, 1059, d);
        this.F = b;
        this.o = c;
        this.l = V(this);
        this.J = W(this, a)
    };
    _.O(yz, xz);
    yz.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l;
        return _.$a(function(m) {
            if (1 == m.j) return b = a.J.value, c = b.id, d = b.networkCode, e = b.collectorFunction, g = (0, D.K)(null != (f = d) ? f : c), h = {}, te(42, g, null, (h.ea = String(Number(a.F)), h)), k = a.l, l = k.j, ab(m, Ye(g, e, a.o, a.B), 2);
            l.call(k, m.m);
            m.j = 0
        })
    };
    var zz = function(a, b) {
        xz.call(this, 1057, b);
        this.l = a;
        this.o = V(this);
        this.F = V(this)
    };
    _.O(zz, xz);
    zz.prototype.j = function() {
        if (this.l)
            if ("object" !== typeof this.l) te(46, "UNKNOWN_COLLECTOR_ID"), Az(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.l.id,
                    b = this.l.networkCode;
                a && b && (delete this.l.id, te(47, a + ";" + b));
                a = null != b ? b : a;
                "string" !== typeof a ? (b = {}, te(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), Az(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.l.collectorFunction ? (te(14, a), Az(this, a, 105)) : this.F.j(this.l)
            }
        else te(39, "UNKNOWN_COLLECTOR_ID"), Az(this, "UNKNOWN_COLLECTOR_ID", 110)
    };
    var Az = function(a, b, c) {
        a.o.j(Be(fu(b), Ce(new Ee, c)))
    };
    var ff = function(a, b) {
        this.j = b;
        this.D = [];
        this.m = [];
        this.I = [];
        a = _.z(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    r = ff.prototype;
    r.push = function(a) {
        if (_.G(Cx)) {
            var b = new zz(a, this.Zb);
            a = new Te(b.o, this.j, this.Zb);
            var c = new yz(b.F, !1, this.j, this.Zb),
                d = new Ne;
            We(d, [b, a, c]);
            Xe(d);
            a = c.l.promise;
            this.D.push(a);
            c = _.z(this.m);
            for (b = c.next(); !b.done; b = c.next()) a.then(b.value)
        } else if (a)
            if (b = a.id, a = a.collectorFunction, "string" !== typeof b) te(37, "invalid-id"), xe(fu(b), 102, this.j);
            else if ("function" !== typeof a) te(14, b), xe(fu(b), 105, this.j);
        else
            for (c = {}, te(42, b, null, (c.ea = String(Number(!1)), c)), a = Ye(b, a, this.j, this.Zb), this.D.push(a), c = _.z(this.m), b = c.next(); !b.done; b = c.next()) a.then(b.value);
        else te(39, ""), xe(fu("UNKNOWN_COLLECTOR_ID"), 110, this.j)
    };
    r.addOnSignalResolveCallback = function(a) {
        this.m.push(a);
        for (var b = _.z(this.D), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    r.addErrorHandler = function(a) {
        this.I.push(a)
    };
    r.clearAllCache = function() {
        var a = this.j;
        if (void 0 !== a)
            for (var b = _.z(_.v(Object, "keys").call(Object, a)), c = b.next(); !c.done; c = b.next())
                if (c = c.value, _.v(c, "startsWith").call(c, "_GESPSK")) try {
                    a.removeItem(c)
                } catch (d) {}
        az = new $y;
        te(43, "")
    };
    r.Zb = function(a, b) {
        for (var c = _.z(this.I), d = c.next(); !d.done; d = c.next()) d = d.value, d(a, b)
    };
    var ef = function(a) {
        this.push = function(b) {
            a.push(b)
        };
        this.addOnSignalResolveCallback = function(b) {
            a.addOnSignalResolveCallback(b)
        };
        this.addErrorHandler = function(b) {
            a.addErrorHandler(b)
        };
        this.clearAllCache = function() {
            a.clearAllCache()
        }
    };
    var lf = function(a, b) {
        xz.call(this, 1036, b);
        this.l = V(this);
        this.o = W(this, a)
    };
    _.O(lf, xz);
    lf.prototype.j = function() {
        var a = this.o.value;
        0 !== Le(a) && this.l.j(a)
    };
    var mf = function(a, b, c) {
        xz.call(this, 1035, c);
        this.o = b;
        this.l = V(this);
        this.F = W(this, a)
    };
    _.O(mf, xz);
    mf.prototype.j = function() {
        var a = this,
            b = this.F.value,
            c = (0, D.K)(b.ta()),
            d = this.o.toString(),
            e = {};
        te(30, c, null, (e.url = d, e));
        var f = document.createElement("script");
        f.setAttribute("esp-signal", "true");
        Ta(f, this.o);
        var g = function() {
            var h = {};
            te(31, (0, D.K)(c), null, (h.url = d, h));
            a.l.j(Be(b, Ce(new Ee, 109)));
            _.Sd(f, "error", g)
        };
        document.head.appendChild(f);
        _.Ya(f, "error", g)
    };
    var gf = function(a) {
        xz.call(this, 1046, a);
        this.A = tz(this)
    };
    _.O(gf, xz);
    gf.prototype.j = function() {
        var a = this;
        Fe().then(function() {
            return a.A.notify()
        })
    };
    var kf = new w.Set;
    var Ez, Bz, Dz;
    Ez = function(a) {
        var b = {
                Ie: !1
            },
            c = Bz(a, ".google-auto-placed"),
            d = Bz(a, "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]"),
            e = Bz(a, "ins.adsbygoogle[data-ad-format=autorelaxed]");
        var f = (_.Cz(a) || Bz(a, "div[id^=div-gpt-ad]")).concat(Bz(a, "iframe[id^=google_ads_iframe]"));
        var g = Bz(a, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"),
            h = Bz(a, "ins.adsbygoogle-ablated-ad-slot"),
            k = Bz(a, "div.googlepublisherpluginad"),
            l = Bz(a, "html > ins.adsbygoogle"),
            m = [].concat(Bz(a, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), Bz(a, "body ins.adsbygoogle"));
        a = [];
        b = _.z([
            [b.bh, c],
            [b.Ie, d],
            [b.gh, e],
            [b.eh, f],
            [b.hh, g],
            [b.ah, h],
            [b.fh, k],
            [b.ih, l]
        ]);
        for (c = b.next(); !c.done; c = b.next()) d = _.z(c.value), c = d.next().value, d = d.next().value, !1 === c ? a = a.concat(d) : m = m.concat(d);
        m = Dz(m);
        b = Dz(a);
        a = m.slice(0);
        m = _.z(b);
        for (b = m.next(); !b.done; b = m.next())
            for (b = b.value, c = 0; c < a.length; c++)(b.contains(a[c]) || a[c].contains(b)) && a.splice(c, 1);
        return a
    };
    _.Cz = function(a) {
        var b = of (a);
        return b ? _.Pf(Hc(b.pubads().getSlots(), function(c) {
            return a.document.getElementById(c.getSlotElementId())
        }), function(c) {
            return null != c
        }) : null
    };
    Bz = function(a, b) {
        return ca(a.document.querySelectorAll(b))
    };
    Dz = function(a) {
        var b = [];
        a = _.z(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            for (var d = !0, e = 0; e < b.length; e++) {
                var f = b[e];
                if (f.contains(c)) {
                    d = !1;
                    break
                }
                if (c.contains(f)) {
                    d = !1;
                    b[e] = c;
                    break
                }
            }
            d && b.push(c)
        }
        return b
    };
    var Fz = 0,
        Gz = Ad(yf(new xf($q, "https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var Hz = function() {
            this.j = function() {}
        },
        Iz = function() {
            var a = _.lg(Wj).o;
            _.lg(Hz).j(a)
        };
    var Kz = function() {
            if (void 0 === b) {
                var a = void 0 === a ? _.t : a;
                var b = a.ggeac || (a.ggeac = {})
            }
            a = b;
            Yy(_.lg(Xy), a);
            Jz(b);
            _.lg(Hz).j = Wy(Vy, b);
            _.lg(ky).j()
        },
        Jz = function(a) {
            var b = _.lg(ky);
            b.m = function(c, d) {
                return Wy(Ry, a, function() {
                    return !1
                })(c, d, 2)
            };
            b.D = function(c, d) {
                return Wy(Sy, a, function() {
                    return 0
                })(c, d, 2)
            };
            b.I = function(c, d) {
                return Wy(Ty, a, function() {
                    return ""
                })(c, d, 2)
            };
            b.C = function(c, d) {
                return Wy(Uy, a, function() {
                    return []
                })(c, d, 2)
            };
            b.j = function() {
                Wy(Oy, a)(2)
            }
        };
    var Xg = function(a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
                return (void 0 === c ? 0 : c) ? (new _.lh(b.innerWidth, b.innerHeight)).round() : _.Ou(b || window).round()
            } catch (d) {
                return new _.lh(-12245933, -12245933)
            }
        },
        Lz = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        },
        Ml = function(a, b) {
            b = void 0 === b ? _.t : b;
            a = a.scrollingElement || Lz(a);
            return new _.ih(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        wh = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var Mz = function(a) {
        _.Q.call(this, a)
    };
    _.O(Mz, _.Q);
    var Nz = function(a) {
            this.j = a;
            this.m = 0
        },
        Pz = function(a, b) {
            if (0 === a.m) {
                if (Oz(a, "__gads", b)) b = !0;
                else {
                    var c = a.j;
                    F(b, 5) && le(c) && (new me(c.document)).set("GoogleAdServingTest", "Good", void 0);
                    if (c = "Good" === ne("GoogleAdServingTest", b, a.j)) {
                        var d = a.j;
                        F(b, 5) && le(d) && wy(new me(d.document), "GoogleAdServingTest")
                    }
                    b = c
                }
                a.m = b ? 2 : 1
            }
            return 2 === a.m
        },
        Oz = function(a, b, c) {
            return c ? ne(b, c, a.j) : null
        },
        Qz = function(a, b, c, d) {
            if (d) {
                var e = {
                    gd: x(c, 2) - Date.now() / 1E3,
                    path: x(c, 3),
                    domain: x(c, 4),
                    sf: !1
                };
                a = a.j;
                F(d, 5) && le(a) && (new me(a.document)).set(b, x(c, 1), e)
            }
        },
        Rz = function(a, b, c) {
            if (c && ne(b, c, a.j)) {
                var d = a.j.location.hostname;
                if ("localhost" === d) d = ["localhost"];
                else if (d = d.split("."), 2 > d.length) d = [];
                else {
                    for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                    d = e
                }
                d = _.z(d);
                for (e = d.next(); !e.done; e = d.next()) f = a.j, F(c, 5) && le(f) && wy(new me(f.document), b, "/", e.value)
            }
        };
    var Sz = {},
        Tz = (Sz[3] = Ad(yf(new xf($q, "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), Sz);
    ({})[3] = Ad(yf(new xf($q, "https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js")));
    var Uz = function(a) {
            this.j = a;
            this.m = Eu()
        },
        Vz = function(a) {
            var b = {};
            _.br(a, function(c) {
                b[c.j] = c.m
            });
            return b
        };
    var Wz = P(["https://adservice.google.com/adsid/integrator.", ""]),
        Xz = P(["https://adservice.google.ad/adsid/integrator.", ""]),
        Yz = P(["https://adservice.google.ae/adsid/integrator.", ""]),
        Zz = P(["https://adservice.google.com.af/adsid/integrator.", ""]),
        $z = P(["https://adservice.google.com.ag/adsid/integrator.", ""]),
        aA = P(["https://adservice.google.com.ai/adsid/integrator.", ""]),
        bA = P(["https://adservice.google.al/adsid/integrator.", ""]),
        cA = P(["https://adservice.google.co.ao/adsid/integrator.", ""]),
        dA = P(["https://adservice.google.com.ar/adsid/integrator.", ""]),
        eA = P(["https://adservice.google.as/adsid/integrator.", ""]),
        fA = P(["https://adservice.google.at/adsid/integrator.", ""]),
        gA = P(["https://adservice.google.com.au/adsid/integrator.", ""]),
        hA = P(["https://adservice.google.az/adsid/integrator.", ""]),
        iA = P(["https://adservice.google.com.bd/adsid/integrator.", ""]),
        jA = P(["https://adservice.google.be/adsid/integrator.", ""]),
        kA = P(["https://adservice.google.bf/adsid/integrator.", ""]),
        lA = P(["https://adservice.google.bg/adsid/integrator.", ""]),
        mA = P(["https://adservice.google.com.bh/adsid/integrator.", ""]),
        nA = P(["https://adservice.google.bi/adsid/integrator.", ""]),
        oA = P(["https://adservice.google.bj/adsid/integrator.", ""]),
        pA = P(["https://adservice.google.com.bn/adsid/integrator.", ""]),
        qA = P(["https://adservice.google.com.bo/adsid/integrator.", ""]),
        rA = P(["https://adservice.google.com.br/adsid/integrator.", ""]),
        sA = P(["https://adservice.google.bs/adsid/integrator.", ""]),
        tA = P(["https://adservice.google.bt/adsid/integrator.", ""]),
        uA = P(["https://adservice.google.co.bw/adsid/integrator.", ""]),
        vA = P(["https://adservice.google.com.bz/adsid/integrator.", ""]),
        wA = P(["https://adservice.google.ca/adsid/integrator.", ""]),
        xA = P(["https://adservice.google.cd/adsid/integrator.", ""]),
        yA = P(["https://adservice.google.cf/adsid/integrator.", ""]),
        zA = P(["https://adservice.google.cg/adsid/integrator.", ""]),
        AA = P(["https://adservice.google.ch/adsid/integrator.", ""]),
        BA = P(["https://adservice.google.ci/adsid/integrator.", ""]),
        CA = P(["https://adservice.google.co.ck/adsid/integrator.", ""]),
        DA = P(["https://adservice.google.cl/adsid/integrator.", ""]),
        EA = P(["https://adservice.google.cm/adsid/integrator.", ""]),
        FA = P(["https://adservice.google.com.co/adsid/integrator.", ""]),
        GA = P(["https://adservice.google.co.cr/adsid/integrator.", ""]),
        HA = P(["https://adservice.google.com.cu/adsid/integrator.", ""]),
        IA = P(["https://adservice.google.cv/adsid/integrator.", ""]),
        JA = P(["https://adservice.google.com.cy/adsid/integrator.", ""]),
        KA = P(["https://adservice.google.cz/adsid/integrator.", ""]),
        LA = P(["https://adservice.google.de/adsid/integrator.", ""]),
        MA = P(["https://adservice.google.dj/adsid/integrator.", ""]),
        NA = P(["https://adservice.google.dk/adsid/integrator.", ""]),
        OA = P(["https://adservice.google.dm/adsid/integrator.", ""]),
        PA = P(["https://adservice.google.dz/adsid/integrator.", ""]),
        QA = P(["https://adservice.google.com.ec/adsid/integrator.", ""]),
        RA = P(["https://adservice.google.ee/adsid/integrator.", ""]),
        SA = P(["https://adservice.google.com.eg/adsid/integrator.", ""]),
        TA = P(["https://adservice.google.es/adsid/integrator.", ""]),
        UA = P(["https://adservice.google.com.et/adsid/integrator.", ""]),
        VA = P(["https://adservice.google.fi/adsid/integrator.", ""]),
        WA = P(["https://adservice.google.com.fj/adsid/integrator.", ""]),
        XA = P(["https://adservice.google.fm/adsid/integrator.", ""]),
        YA = P(["https://adservice.google.fr/adsid/integrator.", ""]),
        ZA = P(["https://adservice.google.ga/adsid/integrator.", ""]),
        $A = P(["https://adservice.google.ge/adsid/integrator.", ""]),
        aB = P(["https://adservice.google.gg/adsid/integrator.", ""]),
        bB = P(["https://adservice.google.com.gh/adsid/integrator.", ""]),
        cB = P(["https://adservice.google.com.gi/adsid/integrator.", ""]),
        dB = P(["https://adservice.google.gl/adsid/integrator.", ""]),
        eB = P(["https://adservice.google.gm/adsid/integrator.", ""]),
        fB = P(["https://adservice.google.gr/adsid/integrator.", ""]),
        gB = P(["https://adservice.google.com.gt/adsid/integrator.", ""]),
        hB = P(["https://adservice.google.gy/adsid/integrator.", ""]),
        iB = P(["https://adservice.google.com.hk/adsid/integrator.", ""]),
        jB = P(["https://adservice.google.hn/adsid/integrator.", ""]),
        kB = P(["https://adservice.google.hr/adsid/integrator.", ""]),
        lB = P(["https://adservice.google.ht/adsid/integrator.", ""]),
        mB = P(["https://adservice.google.hu/adsid/integrator.", ""]),
        nB = P(["https://adservice.google.co.id/adsid/integrator.", ""]),
        oB = P(["https://adservice.google.ie/adsid/integrator.", ""]),
        pB = P(["https://adservice.google.co.il/adsid/integrator.", ""]),
        qB = P(["https://adservice.google.im/adsid/integrator.", ""]),
        rB = P(["https://adservice.google.co.in/adsid/integrator.", ""]),
        sB = P(["https://adservice.google.iq/adsid/integrator.", ""]),
        tB = P(["https://adservice.google.is/adsid/integrator.", ""]),
        uB = P(["https://adservice.google.it/adsid/integrator.", ""]),
        vB = P(["https://adservice.google.je/adsid/integrator.", ""]),
        wB = P(["https://adservice.google.com.jm/adsid/integrator.", ""]),
        xB = P(["https://adservice.google.jo/adsid/integrator.", ""]),
        yB = P(["https://adservice.google.co.jp/adsid/integrator.", ""]),
        zB = P(["https://adservice.google.co.ke/adsid/integrator.", ""]),
        AB = P(["https://adservice.google.com.kh/adsid/integrator.", ""]),
        BB = P(["https://adservice.google.ki/adsid/integrator.", ""]),
        CB = P(["https://adservice.google.kg/adsid/integrator.", ""]),
        DB = P(["https://adservice.google.co.kr/adsid/integrator.", ""]),
        EB = P(["https://adservice.google.com.kw/adsid/integrator.", ""]),
        FB = P(["https://adservice.google.kz/adsid/integrator.", ""]),
        GB = P(["https://adservice.google.la/adsid/integrator.", ""]),
        HB = P(["https://adservice.google.com.lb/adsid/integrator.", ""]),
        IB = P(["https://adservice.google.li/adsid/integrator.", ""]),
        JB = P(["https://adservice.google.lk/adsid/integrator.", ""]),
        KB = P(["https://adservice.google.co.ls/adsid/integrator.", ""]),
        LB = P(["https://adservice.google.lt/adsid/integrator.", ""]),
        MB = P(["https://adservice.google.lu/adsid/integrator.", ""]),
        NB = P(["https://adservice.google.lv/adsid/integrator.", ""]),
        OB = P(["https://adservice.google.com.ly/adsid/integrator.", ""]),
        PB = P(["https://adservice.google.md/adsid/integrator.", ""]),
        QB = P(["https://adservice.google.me/adsid/integrator.", ""]),
        RB = P(["https://adservice.google.mg/adsid/integrator.", ""]),
        SB = P(["https://adservice.google.mk/adsid/integrator.", ""]),
        TB = P(["https://adservice.google.ml/adsid/integrator.", ""]),
        UB = P(["https://adservice.google.com.mm/adsid/integrator.", ""]),
        VB = P(["https://adservice.google.mn/adsid/integrator.", ""]),
        WB = P(["https://adservice.google.ms/adsid/integrator.", ""]),
        XB = P(["https://adservice.google.com.mt/adsid/integrator.", ""]),
        YB = P(["https://adservice.google.mu/adsid/integrator.", ""]),
        ZB = P(["https://adservice.google.mv/adsid/integrator.", ""]),
        $B = P(["https://adservice.google.mw/adsid/integrator.", ""]),
        aC = P(["https://adservice.google.com.mx/adsid/integrator.", ""]),
        bC = P(["https://adservice.google.com.my/adsid/integrator.", ""]),
        cC = P(["https://adservice.google.co.mz/adsid/integrator.", ""]),
        dC = P(["https://adservice.google.com.na/adsid/integrator.", ""]),
        eC = P(["https://adservice.google.com.ng/adsid/integrator.", ""]),
        fC = P(["https://adservice.google.com.ni/adsid/integrator.", ""]),
        gC = P(["https://adservice.google.ne/adsid/integrator.", ""]),
        hC = P(["https://adservice.google.nl/adsid/integrator.", ""]),
        iC = P(["https://adservice.google.no/adsid/integrator.", ""]),
        jC = P(["https://adservice.google.com.np/adsid/integrator.", ""]),
        kC = P(["https://adservice.google.nr/adsid/integrator.", ""]),
        lC = P(["https://adservice.google.nu/adsid/integrator.", ""]),
        mC = P(["https://adservice.google.co.nz/adsid/integrator.", ""]),
        nC = P(["https://adservice.google.com.om/adsid/integrator.", ""]),
        oC = P(["https://adservice.google.com.pa/adsid/integrator.", ""]),
        pC = P(["https://adservice.google.com.pe/adsid/integrator.", ""]),
        qC = P(["https://adservice.google.com.pg/adsid/integrator.", ""]),
        rC = P(["https://adservice.google.com.ph/adsid/integrator.", ""]),
        sC = P(["https://adservice.google.com.pk/adsid/integrator.", ""]),
        tC = P(["https://adservice.google.pl/adsid/integrator.", ""]),
        uC = P(["https://adservice.google.pn/adsid/integrator.", ""]),
        vC = P(["https://adservice.google.com.pr/adsid/integrator.", ""]),
        wC = P(["https://adservice.google.ps/adsid/integrator.", ""]),
        xC = P(["https://adservice.google.pt/adsid/integrator.", ""]),
        yC = P(["https://adservice.google.com.py/adsid/integrator.", ""]),
        zC = P(["https://adservice.google.com.qa/adsid/integrator.", ""]),
        AC = P(["https://adservice.google.ro/adsid/integrator.", ""]),
        BC = P(["https://adservice.google.ru/adsid/integrator.", ""]),
        CC = P(["https://adservice.google.rw/adsid/integrator.", ""]),
        EC = P(["https://adservice.google.com.sa/adsid/integrator.", ""]),
        FC = P(["https://adservice.google.com.sb/adsid/integrator.", ""]),
        GC = P(["https://adservice.google.sc/adsid/integrator.", ""]),
        HC = P(["https://adservice.google.se/adsid/integrator.", ""]),
        IC = P(["https://adservice.google.com.sg/adsid/integrator.", ""]),
        JC = P(["https://adservice.google.sh/adsid/integrator.", ""]),
        KC = P(["https://adservice.google.si/adsid/integrator.", ""]),
        LC = P(["https://adservice.google.sk/adsid/integrator.", ""]),
        MC = P(["https://adservice.google.sn/adsid/integrator.", ""]),
        NC = P(["https://adservice.google.so/adsid/integrator.", ""]),
        OC = P(["https://adservice.google.sm/adsid/integrator.", ""]),
        PC = P(["https://adservice.google.sr/adsid/integrator.", ""]),
        QC = P(["https://adservice.google.st/adsid/integrator.", ""]),
        RC = P(["https://adservice.google.com.sv/adsid/integrator.", ""]),
        SC = P(["https://adservice.google.td/adsid/integrator.", ""]),
        TC = P(["https://adservice.google.tg/adsid/integrator.", ""]),
        UC = P(["https://adservice.google.co.th/adsid/integrator.", ""]),
        VC = P(["https://adservice.google.com.tj/adsid/integrator.", ""]),
        WC = P(["https://adservice.google.tl/adsid/integrator.", ""]),
        XC = P(["https://adservice.google.tm/adsid/integrator.", ""]),
        YC = P(["https://adservice.google.tn/adsid/integrator.", ""]),
        ZC = P(["https://adservice.google.to/adsid/integrator.", ""]),
        $C = P(["https://adservice.google.com.tr/adsid/integrator.", ""]),
        aD = P(["https://adservice.google.tt/adsid/integrator.", ""]),
        bD = P(["https://adservice.google.com.tw/adsid/integrator.", ""]),
        cD = P(["https://adservice.google.co.tz/adsid/integrator.", ""]),
        dD = P(["https://adservice.google.com.ua/adsid/integrator.", ""]),
        eD = P(["https://adservice.google.co.ug/adsid/integrator.", ""]),
        fD = P(["https://adservice.google.co.uk/adsid/integrator.", ""]),
        gD = P(["https://adservice.google.com.uy/adsid/integrator.", ""]),
        hD = P(["https://adservice.google.co.uz/adsid/integrator.", ""]),
        iD = P(["https://adservice.google.com.vc/adsid/integrator.", ""]),
        jD = P(["https://adservice.google.co.ve/adsid/integrator.", ""]),
        kD = P(["https://adservice.google.vg/adsid/integrator.", ""]),
        lD = P(["https://adservice.google.co.vi/adsid/integrator.", ""]),
        mD = P(["https://adservice.google.com.vn/adsid/integrator.", ""]),
        nD = P(["https://adservice.google.vu/adsid/integrator.", ""]),
        oD = P(["https://adservice.google.ws/adsid/integrator.", ""]),
        pD = P(["https://adservice.google.rs/adsid/integrator.", ""]),
        qD = P(["https://adservice.google.co.za/adsid/integrator.", ""]),
        rD = P(["https://adservice.google.co.zm/adsid/integrator.", ""]),
        sD = P(["https://adservice.google.co.zw/adsid/integrator.", ""]),
        tD = P(["https://adservice.google.cat/adsid/integrator.", ""]),
        uD = new w.Map([
            [".google.com", function(a) {
                return B(Wz, a)
            }],
            [".google.ad", function(a) {
                return B(Xz, a)
            }],
            [".google.ae", function(a) {
                return B(Yz, a)
            }],
            [".google.com.af", function(a) {
                return B(Zz, a)
            }],
            [".google.com.ag", function(a) {
                return B($z, a)
            }],
            [".google.com.ai", function(a) {
                return B(aA, a)
            }],
            [".google.al", function(a) {
                return B(bA, a)
            }],
            [".google.co.ao", function(a) {
                return B(cA, a)
            }],
            [".google.com.ar", function(a) {
                return B(dA, a)
            }],
            [".google.as", function(a) {
                return B(eA, a)
            }],
            [".google.at", function(a) {
                return B(fA, a)
            }],
            [".google.com.au", function(a) {
                return B(gA, a)
            }],
            [".google.az", function(a) {
                return B(hA, a)
            }],
            [".google.com.bd", function(a) {
                return B(iA, a)
            }],
            [".google.be", function(a) {
                return B(jA, a)
            }],
            [".google.bf", function(a) {
                return B(kA, a)
            }],
            [".google.bg", function(a) {
                return B(lA, a)
            }],
            [".google.com.bh", function(a) {
                return B(mA, a)
            }],
            [".google.bi", function(a) {
                return B(nA, a)
            }],
            [".google.bj", function(a) {
                return B(oA, a)
            }],
            [".google.com.bn", function(a) {
                return B(pA, a)
            }],
            [".google.com.bo", function(a) {
                return B(qA, a)
            }],
            [".google.com.br", function(a) {
                return B(rA, a)
            }],
            [".google.bs", function(a) {
                return B(sA, a)
            }],
            [".google.bt", function(a) {
                return B(tA, a)
            }],
            [".google.co.bw", function(a) {
                return B(uA, a)
            }],
            [".google.com.bz", function(a) {
                return B(vA, a)
            }],
            [".google.ca", function(a) {
                return B(wA, a)
            }],
            [".google.cd", function(a) {
                return B(xA, a)
            }],
            [".google.cf", function(a) {
                return B(yA, a)
            }],
            [".google.cg", function(a) {
                return B(zA, a)
            }],
            [".google.ch", function(a) {
                return B(AA, a)
            }],
            [".google.ci", function(a) {
                return B(BA, a)
            }],
            [".google.co.ck", function(a) {
                return B(CA, a)
            }],
            [".google.cl", function(a) {
                return B(DA, a)
            }],
            [".google.cm", function(a) {
                return B(EA, a)
            }],
            [".google.com.co", function(a) {
                return B(FA, a)
            }],
            [".google.co.cr", function(a) {
                return B(GA, a)
            }],
            [".google.com.cu", function(a) {
                return B(HA, a)
            }],
            [".google.cv", function(a) {
                return B(IA, a)
            }],
            [".google.com.cy", function(a) {
                return B(JA, a)
            }],
            [".google.cz", function(a) {
                return B(KA, a)
            }],
            [".google.de", function(a) {
                return B(LA, a)
            }],
            [".google.dj", function(a) {
                return B(MA, a)
            }],
            [".google.dk", function(a) {
                return B(NA, a)
            }],
            [".google.dm", function(a) {
                return B(OA, a)
            }],
            [".google.dz", function(a) {
                return B(PA, a)
            }],
            [".google.com.ec", function(a) {
                return B(QA, a)
            }],
            [".google.ee", function(a) {
                return B(RA, a)
            }],
            [".google.com.eg", function(a) {
                return B(SA, a)
            }],
            [".google.es", function(a) {
                return B(TA, a)
            }],
            [".google.com.et", function(a) {
                return B(UA, a)
            }],
            [".google.fi", function(a) {
                return B(VA, a)
            }],
            [".google.com.fj", function(a) {
                return B(WA, a)
            }],
            [".google.fm", function(a) {
                return B(XA, a)
            }],
            [".google.fr", function(a) {
                return B(YA, a)
            }],
            [".google.ga", function(a) {
                return B(ZA, a)
            }],
            [".google.ge", function(a) {
                return B($A, a)
            }],
            [".google.gg", function(a) {
                return B(aB, a)
            }],
            [".google.com.gh", function(a) {
                return B(bB, a)
            }],
            [".google.com.gi", function(a) {
                return B(cB, a)
            }],
            [".google.gl", function(a) {
                return B(dB, a)
            }],
            [".google.gm", function(a) {
                return B(eB, a)
            }],
            [".google.gr", function(a) {
                return B(fB, a)
            }],
            [".google.com.gt", function(a) {
                return B(gB, a)
            }],
            [".google.gy", function(a) {
                return B(hB, a)
            }],
            [".google.com.hk", function(a) {
                return B(iB, a)
            }],
            [".google.hn", function(a) {
                return B(jB, a)
            }],
            [".google.hr", function(a) {
                return B(kB, a)
            }],
            [".google.ht", function(a) {
                return B(lB, a)
            }],
            [".google.hu", function(a) {
                return B(mB, a)
            }],
            [".google.co.id", function(a) {
                return B(nB, a)
            }],
            [".google.ie", function(a) {
                return B(oB, a)
            }],
            [".google.co.il", function(a) {
                return B(pB, a)
            }],
            [".google.im", function(a) {
                return B(qB, a)
            }],
            [".google.co.in", function(a) {
                return B(rB, a)
            }],
            [".google.iq", function(a) {
                return B(sB, a)
            }],
            [".google.is", function(a) {
                return B(tB, a)
            }],
            [".google.it", function(a) {
                return B(uB, a)
            }],
            [".google.je", function(a) {
                return B(vB, a)
            }],
            [".google.com.jm", function(a) {
                return B(wB, a)
            }],
            [".google.jo", function(a) {
                return B(xB, a)
            }],
            [".google.co.jp", function(a) {
                return B(yB, a)
            }],
            [".google.co.ke", function(a) {
                return B(zB, a)
            }],
            [".google.com.kh", function(a) {
                return B(AB, a)
            }],
            [".google.ki", function(a) {
                return B(BB, a)
            }],
            [".google.kg", function(a) {
                return B(CB, a)
            }],
            [".google.co.kr", function(a) {
                return B(DB, a)
            }],
            [".google.com.kw", function(a) {
                return B(EB, a)
            }],
            [".google.kz", function(a) {
                return B(FB, a)
            }],
            [".google.la", function(a) {
                return B(GB, a)
            }],
            [".google.com.lb", function(a) {
                return B(HB, a)
            }],
            [".google.li", function(a) {
                return B(IB, a)
            }],
            [".google.lk", function(a) {
                return B(JB, a)
            }],
            [".google.co.ls", function(a) {
                return B(KB, a)
            }],
            [".google.lt", function(a) {
                return B(LB, a)
            }],
            [".google.lu", function(a) {
                return B(MB, a)
            }],
            [".google.lv", function(a) {
                return B(NB, a)
            }],
            [".google.com.ly", function(a) {
                return B(OB, a)
            }],
            [".google.md", function(a) {
                return B(PB, a)
            }],
            [".google.me", function(a) {
                return B(QB, a)
            }],
            [".google.mg", function(a) {
                return B(RB, a)
            }],
            [".google.mk", function(a) {
                return B(SB, a)
            }],
            [".google.ml", function(a) {
                return B(TB, a)
            }],
            [".google.com.mm", function(a) {
                return B(UB, a)
            }],
            [".google.mn", function(a) {
                return B(VB, a)
            }],
            [".google.ms", function(a) {
                return B(WB, a)
            }],
            [".google.com.mt", function(a) {
                return B(XB, a)
            }],
            [".google.mu", function(a) {
                return B(YB, a)
            }],
            [".google.mv", function(a) {
                return B(ZB, a)
            }],
            [".google.mw", function(a) {
                return B($B, a)
            }],
            [".google.com.mx", function(a) {
                return B(aC, a)
            }],
            [".google.com.my", function(a) {
                return B(bC, a)
            }],
            [".google.co.mz", function(a) {
                return B(cC, a)
            }],
            [".google.com.na", function(a) {
                return B(dC, a)
            }],
            [".google.com.ng", function(a) {
                return B(eC, a)
            }],
            [".google.com.ni", function(a) {
                return B(fC, a)
            }],
            [".google.ne", function(a) {
                return B(gC, a)
            }],
            [".google.nl", function(a) {
                return B(hC, a)
            }],
            [".google.no", function(a) {
                return B(iC, a)
            }],
            [".google.com.np", function(a) {
                return B(jC, a)
            }],
            [".google.nr", function(a) {
                return B(kC, a)
            }],
            [".google.nu", function(a) {
                return B(lC, a)
            }],
            [".google.co.nz", function(a) {
                return B(mC, a)
            }],
            [".google.com.om", function(a) {
                return B(nC, a)
            }],
            [".google.com.pa", function(a) {
                return B(oC, a)
            }],
            [".google.com.pe", function(a) {
                return B(pC, a)
            }],
            [".google.com.pg", function(a) {
                return B(qC, a)
            }],
            [".google.com.ph", function(a) {
                return B(rC, a)
            }],
            [".google.com.pk", function(a) {
                return B(sC, a)
            }],
            [".google.pl", function(a) {
                return B(tC, a)
            }],
            [".google.pn", function(a) {
                return B(uC, a)
            }],
            [".google.com.pr", function(a) {
                return B(vC, a)
            }],
            [".google.ps", function(a) {
                return B(wC, a)
            }],
            [".google.pt", function(a) {
                return B(xC, a)
            }],
            [".google.com.py", function(a) {
                return B(yC, a)
            }],
            [".google.com.qa", function(a) {
                return B(zC, a)
            }],
            [".google.ro", function(a) {
                return B(AC, a)
            }],
            [".google.ru", function(a) {
                return B(BC, a)
            }],
            [".google.rw", function(a) {
                return B(CC, a)
            }],
            [".google.com.sa", function(a) {
                return B(EC, a)
            }],
            [".google.com.sb", function(a) {
                return B(FC, a)
            }],
            [".google.sc", function(a) {
                return B(GC, a)
            }],
            [".google.se", function(a) {
                return B(HC, a)
            }],
            [".google.com.sg", function(a) {
                return B(IC, a)
            }],
            [".google.sh", function(a) {
                return B(JC, a)
            }],
            [".google.si", function(a) {
                return B(KC, a)
            }],
            [".google.sk", function(a) {
                return B(LC, a)
            }],
            [".google.sn", function(a) {
                return B(MC, a)
            }],
            [".google.so", function(a) {
                return B(NC, a)
            }],
            [".google.sm", function(a) {
                return B(OC, a)
            }],
            [".google.sr", function(a) {
                return B(PC, a)
            }],
            [".google.st", function(a) {
                return B(QC, a)
            }],
            [".google.com.sv", function(a) {
                return B(RC, a)
            }],
            [".google.td", function(a) {
                return B(SC, a)
            }],
            [".google.tg", function(a) {
                return B(TC, a)
            }],
            [".google.co.th", function(a) {
                return B(UC, a)
            }],
            [".google.com.tj", function(a) {
                return B(VC, a)
            }],
            [".google.tl", function(a) {
                return B(WC, a)
            }],
            [".google.tm", function(a) {
                return B(XC, a)
            }],
            [".google.tn", function(a) {
                return B(YC, a)
            }],
            [".google.to", function(a) {
                return B(ZC, a)
            }],
            [".google.com.tr", function(a) {
                return B($C, a)
            }],
            [".google.tt", function(a) {
                return B(aD, a)
            }],
            [".google.com.tw", function(a) {
                return B(bD, a)
            }],
            [".google.co.tz", function(a) {
                return B(cD, a)
            }],
            [".google.com.ua", function(a) {
                return B(dD, a)
            }],
            [".google.co.ug", function(a) {
                return B(eD, a)
            }],
            [".google.co.uk", function(a) {
                return B(fD, a)
            }],
            [".google.com.uy", function(a) {
                return B(gD, a)
            }],
            [".google.co.uz", function(a) {
                return B(hD, a)
            }],
            [".google.com.vc", function(a) {
                return B(iD, a)
            }],
            [".google.co.ve", function(a) {
                return B(jD, a)
            }],
            [".google.vg", function(a) {
                return B(kD, a)
            }],
            [".google.co.vi", function(a) {
                return B(lD, a)
            }],
            [".google.com.vn", function(a) {
                return B(mD, a)
            }],
            [".google.vu", function(a) {
                return B(nD, a)
            }],
            [".google.ws", function(a) {
                return B(oD, a)
            }],
            [".google.rs", function(a) {
                return B(pD, a)
            }],
            [".google.co.za", function(a) {
                return B(qD, a)
            }],
            [".google.co.zm", function(a) {
                return B(rD, a)
            }],
            [".google.co.zw", function(a) {
                return B(sD, a)
            }],
            [".google.cat", function(a) {
                return B(tD, a)
            }]
        ].map(function(a) {
            var b = _.z(a);
            a = b.next().value;
            b = b.next().value;
            var c = {};
            return [a, (c.json = b("json"), c.js = b("js"), c["sync.js"] = b("sync.js"), c)]
        }));
    var vD = function(a, b, c) {
        var d = _.rd("LINK", a);
        try {
            d.rel = "preload";
            if (b instanceof Af) var e = Sa(b).toString();
            else {
                if (b instanceof Ka) var f = La(b);
                else {
                    if (b instanceof Ka) var g = b;
                    else b = "object" == typeof b && b.Ma ? b.Ga() : String(b), Bf.test(b) || (b = "about:invalid#zClosurez"), g = _.Ed(b);
                    f = La(g)
                }
                e = f
            }
            d.href = e
        } catch (h) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (h) {}
    };
    var tf = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var Jf = _.t,
        wD = function(a) {
            var b = new w.Map([
                ["domain", _.t.location.hostname]
            ]);
            Kf[3] >= Lf() && b.set("adsid", Kf[1]);
            return Bd(uD.get(a).js, b)
        },
        Kf, xD, If = function() {
            Jf = _.t;
            Kf = Jf.googleToken = Jf.googleToken || {};
            var a = Lf();
            Kf[1] && Kf[3] > a && 0 < Kf[2] || (Kf[1] = "", Kf[2] = -1, Kf[3] = -1, Kf[4] = "", Kf[6] = "");
            xD = Jf.googleIMState = Jf.googleIMState || {};
            uD.has(xD[1]) || (xD[1] = ".google.com");
            Array.isArray(xD[5]) || (xD[5] = []);
            "boolean" !== typeof xD[6] && (xD[6] = !1);
            Array.isArray(xD[7]) || (xD[7] = []);
            "number" !== typeof xD[8] && (xD[8] = 0)
        },
        yD = function(a) {
            If();
            uD.has(a) && (xD[1] = a)
        },
        Mf = {
            cd: function() {
                return 0 < xD[8]
            },
            kf: function() {
                xD[8]++
            },
            lf: function() {
                0 < xD[8] && xD[8]--
            },
            mf: function() {
                xD[8] = 0
            },
            xh: function() {
                return !1
            },
            nc: function() {
                return xD[5]
            },
            xd: function(a) {
                try {
                    a()
                } catch (b) {
                    _.t.setTimeout(function() {
                        throw b;
                    }, 0)
                }
            },
            Vd: function() {
                if (!Mf.cd()) {
                    var a = _.t.document,
                        b = function(e) {
                            e = wD(e);
                            a: {
                                try {
                                    var f = Cu();
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            vD(a, e.toString(), f);
                            f = _.rd("SCRIPT", a);
                            f.type = "text/javascript";
                            f.onerror = function() {
                                return _.t.processGoogleToken({}, 2)
                            };
                            Ta(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), Mf.kf()
                            } catch (g) {}
                        },
                        c = xD[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT", b);
                    _.t.setTimeout(function() {
                        return _.t.processGoogleToken(d, 1)
                    }, 1E3)
                }
            }
        },
        zD = function(a) {
            _.t.processGoogleToken = _.t.processGoogleToken || function(b, c) {
                var d = b;
                d = void 0 === d ? {} : d;
                c = void 0 === c ? 0 : c;
                b = d.newToken || "";
                var e = "NT" == b,
                    f = parseInt(d.freshLifetimeSecs || "", 10),
                    g = parseInt(d.validLifetimeSecs || "", 10),
                    h = d["1p_jar"] || "";
                d = d.pucrd || "";
                If();
                1 == c ? Mf.mf() : Mf.lf();
                var k = Jf.googleToken = Jf.googleToken || {},
                    l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                e = e && !Mf.cd() && (!(Kf[3] >= Lf()) || "NT" == Kf[1]);
                var m = !(Kf[3] >= Lf()) && 0 != c;
                if (l || e || m) e = Lf(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && _.uy(_.t, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, If();
                if (l || !Mf.cd()) {
                    c = Mf.nc();
                    for (b = 0; b < c.length; b++) Mf.xd(c[b]);
                    c.length = 0
                }
            };
            Nf(a)
        };
    var Qo = function(a, b) {
            b = void 0 === b ? {} : b;
            this.root = b.root ? b.root : null;
            this.H = b.rootMargin ? Of(b.rootMargin) : [{
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }];
            this.rootMargin = Hc(this.H, function(c) {
                return "" + c.value + c.type
            }).join(" ");
            this.B = Qf(b.threshold);
            this.o = a;
            this.j = [];
            this.I = [];
            this.C = !1;
            this.m = null;
            this.D = Dr(this.l, 100, this)
        },
        AD = function(a) {
            if (a.root) var b = Rf(a.root);
            else {
                var c = _.Ou(window);
                b = {
                    top: 0,
                    right: c.width,
                    bottom: c.height,
                    left: 0,
                    width: c.width,
                    height: c.height
                }
            }
            a = Hc(a.H, function(d, e) {
                return "px" == d.type ? d.value : d.value * (e % 2 ? b.width : b.height) / 100
            });
            return {
                top: b.top - a[0],
                right: b.right + a[1],
                bottom: b.bottom + a[2],
                left: b.left - a[3],
                width: b.width + a[1] + a[3],
                height: b.height + a[0] + a[2]
            }
        },
        BD = function(a, b, c) {
            if (!b || b.isIntersecting != c.isIntersecting) return !0;
            var d = b.intersectionRatio,
                e = c.intersectionRatio;
            return d == e ? !1 : _.fg(a.B, function(f) {
                return f < d != f < e
            })
        };
    Qo.prototype.l = function() {
        var a = this,
            b = AD(this);
        _.br(this.j, function(c) {
            var d = c.target,
                e = Rf(d),
                f = e.width * e.height;
            var g = Math.max(b.top, e.top);
            var h = Math.min(b.right, e.right),
                k = Math.min(b.bottom, e.bottom),
                l = Math.max(b.left, e.left),
                m = h - l,
                n = k - g;
            g = 0 <= m && 0 <= n ? {
                top: g,
                right: h,
                bottom: k,
                left: l,
                width: m,
                height: n
            } : null;
            h = !!g;
            k = g ? g.width * g.height : 0;
            l = window.performance;
            d = {
                boundingClientRect: e,
                intersectionRatio: f ? k / f : h ? 1 : 0,
                intersectionRect: g || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                },
                isIntersecting: h,
                rootBounds: b,
                target: d,
                time: l && l.now ? l.now() : 0
            };
            BD(a, c.pa, d) && a.I.push(d);
            c.pa = d
        });
        this.I.length && this.o(CD(this), this)
    };
    Qo.prototype.observe = function(a) {
        _.fg(this.j, function(b) {
            return b.target == a
        }) || (this.j.push({
            target: a,
            pa: null
        }), this.l(), this.C || (this.C = !0, _.Ya(_.t, "scroll", this.D), _.Ya(_.t, "resize", this.D), _.t.MutationObserver && !this.m && (this.m = new MutationObserver(this.D), this.m.observe(_.t.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    };
    Qo.prototype.unobserve = function(a) {
        this.j = _.Pf(this.j, function(b) {
            return b.target != a
        });
        0 == this.j.length && this.disconnect()
    };
    Qo.prototype.disconnect = function() {
        this.C = !1;
        this.j.length = 0;
        _.Sd(_.t, "scroll", this.D);
        _.Sd(_.t, "resize", this.D);
        this.m && (this.m.disconnect(), this.m = null)
    };
    var CD = function(a) {
        var b = [].concat(_.Hd(a.I));
        a.I.length = 0;
        return b
    };
    var DD = function(a, b, c, d, e, f) {
        _.Px.call(this);
        this.Ka = a;
        this.status = 1;
        this.C = b;
        this.m = c;
        this.T = d;
        this.Ob = !!e;
        this.l = Math.random();
        this.H = {};
        this.j = null;
        this.B = (0, _.Xq)(this.J, this);
        this.o = f
    };
    _.O(DD, _.Px);
    DD.prototype.J = function(a) {
        if (!("*" !== this.m && a.origin !== this.m || !this.Ob && a.source != this.C)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.ea(b) && (a = b.i, b.c === this.Ka && a != this.l)) {
                if (2 !== this.status) try {
                    this.status = 2, ED(this), this.j && (this.j(), this.j = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.ea(b)) && this.H.hasOwnProperty(a)) this.H[a](b)
            }
        }
    };
    var ED = function(a) {
        var b = {};
        b.c = a.Ka;
        b.i = a.l;
        a.o && (b.e = a.o);
        a.C.postMessage(JSON.stringify(b), a.m)
    };
    DD.prototype.F = function() {
        if (1 === this.status) {
            try {
                this.C.postMessage && ED(this)
            } catch (a) {}
            window.setTimeout((0, _.Xq)(this.F, this), 50)
        }
    };
    DD.prototype.connect = function(a) {
        a && (this.j = a);
        _.Ya(window, "message", this.B);
        this.T && this.F()
    };
    var FD = function(a, b, c) {
            a.H[b] = c
        },
        GD = function(a, b, c) {
            var d = {};
            d.c = a.Ka;
            d.i = a.l;
            d.s = b;
            d.p = c;
            try {
                a.C.postMessage(JSON.stringify(d), a.m)
            } catch (e) {}
        };
    DD.prototype.I = function() {
        this.status = 3;
        _.Sd(window, "message", this.B);
        _.Px.prototype.I.call(this)
    };
    var HD = new w.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        ID = new w.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);
    var JD = function(a) {
        _.Q.call(this, a)
    };
    _.O(JD, _.Q);
    var KD = function(a) {
        _.Q.call(this, a)
    };
    _.O(KD, _.Q);
    var LD = function(a) {
        _.Q.call(this, a)
    };
    _.O(LD, _.Q);
    var MD = function(a) {
            return a.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        ND = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        },
        OD = function(a) {
            return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
        },
        PD = function(a, b) {
            if (3 == MD(b)) return !1;
            a();
            return !0
        },
        QD = function(a, b) {
            if (!PD(a, b)) {
                var c = !1,
                    d = ND(b),
                    e = function() {
                        !c && PD(a, b) && (c = !0, _.Sd(b, d, e))
                    };
                d && _.Ya(b, d, e)
            }
        };
    var so = function(a, b) {
            this.j = a;
            this.D = b;
            this.m = {}
        },
        to = function(a) {
            no() && (document.addEventListener("touchstart", function(b) {
                a.j(902, function() {
                    a.m[b.touches[0].identifier] = Date.now()
                })()
            }, Er), document.addEventListener("touchend", function(b) {
                a.j(902, function() {
                    var c = b.changedTouches[0],
                        d = c.clientX,
                        e = c.clientY,
                        f = c.force;
                    c = a.m[c.identifier];
                    if (void 0 !== c) try {
                        var g = no(),
                            h = {
                                x: d,
                                y: e,
                                duration_ms: Date.now() - c
                            };
                        if (null == g ? 0 : g.gmaSdk) g.gmaSdk.reportTouchEvent(JSON.stringify(_.v(Object, "assign").call(Object, {}, h, {
                            type: 1,
                            force: f
                        })));
                        else {
                            var k, l, m;
                            null == g || null == (k = g.webkit) || null == (l = k.messageHandlers) || null == (m = l.reportGmaTouchEvent) || m.postMessage(h)
                        }
                    } catch (n) {
                        a.D("paw_sigs", {
                            msg: "reportTouchError",
                            err: n instanceof Error ? n.message : "nonError"
                        })
                    }
                })()
            }, Er))
        },
        oo = function(a, b, c, d, e) {
            var f = 200,
                g = bo;
            b = void 0 === b ? {} : b;
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            f = void 0 === f ? 200 : f;
            var h = String(Math.floor(2147483647 * ee())),
                k = 0,
                l = function(m) {
                    try {
                        var n = "object" === typeof m.data ? m.data : JSON.parse(m.data);
                        h === n.paw_id && (window.clearTimeout(k), window.removeEventListener("message", l), n.signal ? c(n.signal) : n.error && d(n.error))
                    } catch (p) {
                        g("paw_sigs", {
                            msg: "postmessageError",
                            err: p instanceof Error ? p.message : "nonError",
                            data: null == m.data ? "null" : 500 < m.data.length ? m.data.substring(0, 500) : m.data
                        })
                    }
                };
            window.addEventListener("message", function(m) {
                e(903, function() {
                    l(m)
                })()
            });
            a.postMessage(_.v(Object, "assign").call(Object, {}, {
                paw_id: h
            }, b));
            k = window.setTimeout(function() {
                window.removeEventListener("message", l);
                d("PAW GMA postmessage timed out.")
            }, f)
        },
        no = function() {
            var a = window,
                b, c;
            if (a.gmaSdk || (null == (b = a.webkit) ? 0 : null == (c = b.messageHandlers) ? 0 : c.getGmaViewSignals)) return a;
            try {
                var d = window.parent,
                    e, f;
                if (d.gmaSdk || (null == (e = d.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals)) return d
            } catch (g) {}
            return null
        };
    var SD, RD;
    SD = function() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new RD;
        this.sideRailProcessedFixedElements = new w.Set;
        this.sideRailAvailableSpace = new w.Map
    };
    _.ll = function(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new w.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new w.Map)) : a.google_reactive_ads_global_state = new SD;
        return a.google_reactive_ads_global_state
    };
    RD = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var VD;
    _.TD = function(a) {
        this.j = _.ll(a).floatingAdsStacking
    };
    _.UD = function(a) {
        a = _.$u(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    VD = function(a) {
        var b = _.UD(a);
        _.br(a.j.maxZIndexListeners, function(c) {
            return c(b)
        })
    };
    _.WD = function(a) {
        this.m = a;
        this.j = null
    };
    _.XD = function(a) {
        if (null == a.j) {
            var b = a.m,
                c = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[c] = 2147483646;
            VD(b);
            a.j = c
        }
    };
    _.YD = function(a) {
        if (null != a.j) {
            var b = a.m;
            delete b.j.maxZIndexRestrictions[a.j];
            VD(b);
            a.j = null
        }
    };
    var ml, $k, cl;
    ml = 728 * 1.38;
    _.ol = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.ZD = function(a) {
        var b = _.bl(a).clientWidth;
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    $k = function(a, b) {
        return (a = _.bl(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    cl = function(a) {
        return (a = _.ZD(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.bl = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.$D = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    var pl = function(a, b, c, d, e) {
            for (var f = [], g = 0; g < e; g++)
                for (var h = 0; h < b; h++) {
                    var k = f,
                        l = b - 1,
                        m = e - 1;
                    k.push.call(k, {
                        x: (0 == l ? 0 : h / l) * a,
                        y: c + (0 == m ? 0 : g / m) * (d - c)
                    })
                }
            return f
        },
        ql = 90 * 1.38;
    var aE;
    _.bE = function(a, b) {
        if (!a.body) return null;
        var c = new aE;
        c.apply(a, b);
        return function() {
            _.Fv(a.body, {
                filter: c.j,
                webkitFilter: c.j,
                overflow: c.D,
                position: c.I,
                top: c.C
            });
            b.scrollTo(0, c.m)
        }
    };
    aE = function() {
        this.j = this.C = this.I = this.D = null;
        this.m = 0
    };
    aE.prototype.apply = function(a, b) {
        this.D = a.body.style.overflow;
        this.I = a.body.style.position;
        this.C = a.body.style.top;
        this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.m = _.$D(b);
        _.Fv(a.body, "top", -this.m + "px")
    };
    _.el = function(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                var d = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var e = "__storage_test__" === d
            } catch (f) {
                e = !1
            }
            c = !e
        }
        return c ? null : gg(a, b)
    };
    _.dl = function(a) {
        return !!a && 1 > a.length
    };
    var cE = function(a) {
        _.Px.call(this);
        this.m = a;
        this.j = null;
        this.l = {};
        this.H = 0;
        this.C = null
    };
    _.O(cE, _.Px);
    cE.prototype.I = function() {
        this.C && _.Sd(this.m, "message", this.C);
        _.Px.prototype.I.call(this)
    };
    var eE = function(a) {
            var b;
            return "function" === typeof(null == (b = a.m) ? void 0 : b.__uspapi) || null != dE(a)
        },
        gE = function(a, b) {
            var c = {};
            if (eE(a)) {
                var d = _.Cr(function() {
                    return b(c)
                });
                fE(a, function(e, f) {
                    f && (c = e);
                    d()
                });
                setTimeout(d, 500)
            } else b(c)
        },
        fE = function(a, b) {
            var c;
            "function" === typeof(null == (c = a.m) ? void 0 : c.__uspapi) ? (a = a.m.__uspapi, a("getUSPData", 1, b)) : dE(a) && (hE(a), c = ++a.H, a.l[c] = b, a.j && (b = {}, a.j.postMessage((b.__uspapiCall = {
                command: "getUSPData",
                version: 1,
                callId: c
            }, b), "*")))
        },
        dE = function(a) {
            if (a.j) return a.j;
            a.j = jv(a.m, "__uspapiLocator");
            return a.j
        },
        hE = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = {};
                    "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                    var d = c.__uspapiReturn;
                    var e;
                    null == (e = a.l) || e[d.callId](d.returnValue, d.success)
                } catch (f) {}
            }, _.Ya(a.m, "message", a.C))
        };
    var jE = function(a) {
        _.Q.call(this, a, -1, iE)
    };
    _.O(jE, _.Q);
    var iE = [1, 2];
    var kE = function(a) {
        _.Q.call(this, a)
    };
    _.O(kE, _.Q);
    var Gm = function(a) {
        _.Px.call(this);
        this.C = a;
        this.m = this.j = null;
        this.l = {};
        this.o = 0;
        this.H = !1
    };
    _.O(Gm, _.Px);
    var lE = function(a) {
            a.H || (a.j || (a.j = jv(a.C, "googlefcPresent")), a.H = !0);
            return !!a.j
        },
        nE = function(a) {
            return new w.Promise(function(b) {
                if (lE(a))
                    if (a.j === a.C) {
                        var c = a.j.googlefc || (a.j.googlefc = {});
                        c.__fci = c.__fci || [];
                        c.__fci.push("loaded", function(e) {
                            b(Ud(kE, e))
                        })
                    } else {
                        mE(a);
                        c = a.o++;
                        a.l[c] = b;
                        var d = {};
                        a.j.postMessage((d.__fciCall = {
                            command: "loaded",
                            callId: c
                        }, d), "*")
                    }
            })
        },
        mE = function(a) {
            a.m || (a.m = function(b) {
                try {
                    var c = Ud(kE, b.data.__fciReturn);
                    (0, a.l[x(c, 1)])(c)
                } catch (d) {}
            }, _.Ya(a.C, "message", a.m))
        };
    var oE = {},
        ng = (oE[23] = .001, oE[211] = !1, oE[253] = !1, oE[246] = [], oE[226] = [], oE[150] = "", oE[221] = /^true$/.test("false"), oE[36] = /^true$/.test("false"), oE[172] = null, oE[260] = void 0, oE[251] = null, oE),
        mg = function() {
            this.j = !1
        };
    var dj = function(a) {
            var b = void 0 === b ? re(_.t) : b;
            this.id = a;
            this.m = Math.random() < _.og(23);
            this.j = {
                pvsid: String(b)
            }
        },
        pE = function(a) {
            a = kg(a);
            var b;
            Pg.set(a, (null != (b = Pg.get(a)) ? b : 0) + 1)
        },
        Og = function() {
            return [].concat(_.Hd(_.v(Pg, "values").call(Pg))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        K = function(a, b, c) {
            "string" !== typeof c && (c = String(c));
            /^\w+$/.test(b) && (c ? a.j[b] = c : delete a.j[b])
        },
        fj = function(a, b) {
            b = void 0 === b ? null : b;
            b = void 0 === b ? null : b;
            if (qE()) b = !0;
            else {
                var c = a.m;
                b && 0 <= b && (c = Math.random() < b);
                b = c && !!a.id
            }
            b && _.uy(window, rE(a) || "", void 0, _.G(Lw))
        },
        rE = function(a) {
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.Lj(a.j, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        },
        sE = function(a) {
            var b = [].concat(_.Hd(_.v(Pg, "keys").call(Pg)));
            b = b.map(function(c) {
                return c.replace(/,/g, "\\,")
            });
            3 >= b.length ? K(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), K(a, "nw_id", b.join()))
        },
        Ph = function(a, b) {
            K(a, "vrg", String(b.lb || b.Ha));
            sE(a);
            K(a, "nslots", Og().toString());
            b = se();
            b.length && K(a, "eid", b.join());
            K(a, "pub_url", document.URL)
        },
        Jh = function(a, b, c) {
            c = void 0 === c ? _.og(23) : c;
            if (void 0 === c || 0 > c || 1 < c) c = _.og(23);
            Math.random() < c && (a = new dj(a), b(a), fj(a, 1))
        },
        Pg = new w.Map,
        qE = th(function() {
            return !!dv(_.t.location.href)
        });
    var Cg = function() {
        Ey.call(this, _.G(Dg) || _.G(Fx) ? 1 : 0, _.t);
        this.D = 0;
        var a = _.G(Dg) || _.G(Fx);
        _.t.google_measure_js_timing = a || _.t.google_measure_js_timing
    };
    _.O(Cg, Ey);
    _.tE = function(a) {
        this.context = a
    };
    var uE = {},
        Vi = (uE.companion_ads = "companionAds", uE.content = "content", uE.publisher_ads = "pubads", uE);
    var Rg = function(a) {
        _.Q.call(this, a)
    };
    _.O(Rg, _.Q);
    Rg.prototype.getWidth = function() {
        return x(this, 1)
    };
    var Vg = function(a, b) {
        return _.y(a, 1, b)
    };
    Rg.prototype.getHeight = function() {
        return x(this, 2)
    };
    var Ug = function(a, b) {
            return _.y(a, 2, b)
        },
        hk = function() {
            var a = new Rg;
            return _.y(a, 3, !0)
        };
    var qj = function(a) {
        _.Q.call(this, a, -1, vE)
    };
    _.O(qj, _.Q);
    var nj = function(a) {
            return x(a, 1)
        },
        pj = function(a, b) {
            return _.y(a, 1, b)
        };
    qj.prototype.xa = function() {
        return Pk(this, 2)
    };
    var oj = function(a, b) {
            return _.Mg(a, 2, b)
        },
        vE = [2];
    var sp = function(a) {
        _.Q.call(this, a)
    };
    _.O(sp, _.Q);
    var qn = function(a) {
        _.Q.call(this, a, -1, wE)
    };
    _.O(qn, _.Q);
    var wn = function(a, b) {
        return _.y(a, 1, b)
    };
    qn.prototype.xa = function() {
        return Pk(this, 2)
    };
    var un = function(a, b) {
            return _.Mg(a, 2, b)
        },
        wE = [2];
    var Yn = function(a) {
        _.Q.call(this, a, -1, xE)
    };
    _.O(Yn, _.Q);
    var vn = function(a, b) {
            rj(a, 1, qn, b)
        },
        xE = [1];
    var Wn = function(a) {
        _.Q.call(this, a, -1, yE)
    };
    _.O(Wn, _.Q);
    var yE = [2, 3];
    var Un = function(a) {
        _.Q.call(this, a)
    };
    _.O(Un, _.Q);
    var zE = function(a) {
        _.Q.call(this, a)
    };
    _.O(zE, _.Q);
    zE.prototype.setTagForChildDirectedTreatment = function(a) {
        return _.y(this, 5, a)
    };
    zE.prototype.clearTagForChildDirectedTreatment = function() {
        return Bc(this, 5)
    };
    zE.prototype.setTagForUnderAgeOfConsent = function(a) {
        return _.y(this, 6, a)
    };
    var Kj = function(a) {
        _.Q.call(this, a)
    };
    _.O(Kj, _.Q);
    var BE = function(a) {
        _.Q.call(this, a, -1, AE)
    };
    _.O(BE, _.Q);
    BE.prototype.sa = function() {
        return Oc(this, qj, 14)
    };
    BE.prototype.Ra = function() {
        return De(this, Kj, 18)
    };
    var CE = function(a) {
        return De(a, zE, 25)
    };
    BE.prototype.getCorrelator = function() {
        return x(this, 26)
    };
    BE.prototype.setCorrelator = function(a) {
        return _.y(this, 26, a)
    };
    BE.prototype.qc = function() {
        return Vn(this, Un, 33)
    };
    var AE = [2, 3, 14];
    var nh = function() {
        this.j = new w.Map
    };
    var DE = function() {
            this.m = {};
            this.j = new BE;
            this.D = new w.Map;
            this.j.setCorrelator(sv());
            _.og(36) && _.y(this.j, 15, !0)
        },
        EE = function(a) {
            var b = Ch(),
                c = a.getDomId();
            if (c && !b.m.hasOwnProperty(c)) {
                var d = _.lg(nh),
                    e = ++_.lg(Cg).D;
                d.j.set(c, e);
                _.y(a, 20, e);
                b.m[c] = a
            }
        },
        Rm = function(a, b) {
            var c;
            return null != (c = a.m[b]) ? c : null
        },
        Ch = function() {
            return _.lg(DE)
        };
    var FE = th(qh);
    var Yh = ["auto", "inherit", "100%"],
        Zh = Yh.concat(["none"]);
    var zl = function(a, b, c) {
        if (!a) return !0;
        var d = !0;
        Wh(a, function(e) {
            return d = Xh(e, b, 10, 10)
        }, c);
        return d
    };
    var GE = function(a, b, c, d, e, f) {
            this.D = _.yv(a);
            this.m = _.yv(b);
            this.I = c;
            this.j = _.yv(d);
            this.C = e;
            this.l = f
        },
        HE = function(a) {
            return JSON.stringify({
                windowCoords_t: a.D.top,
                windowCoords_r: a.D.right,
                windowCoords_b: a.D.bottom,
                windowCoords_l: a.D.left,
                frameCoords_t: a.m.top,
                frameCoords_r: a.m.right,
                frameCoords_b: a.m.bottom,
                frameCoords_l: a.m.left,
                styleZIndex: a.I,
                allowedExpansion_t: a.j.top,
                allowedExpansion_r: a.j.right,
                allowedExpansion_b: a.j.bottom,
                allowedExpansion_l: a.j.left,
                xInView: a.C,
                yInView: a.l
            })
        },
        IE = function(a) {
            var b = window,
                c = b.screenX || b.screenLeft || 0,
                d = b.screenY || b.screenTop || 0;
            b = new _.xv(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
            c = Jv(a);
            d = _.cg(_.dg, a);
            var e = new zv(c.x, c.y, d.width, d.height);
            c = Av(e);
            d = String(bg(a, "zIndex"));
            var f = new _.xv(0, Infinity, Infinity, 0);
            for (var g = Ku(a), h = g.j.body, k = g.j.documentElement, l = Pu(g.j); a = Iv(a);)
                if (!(_.Kr && 0 == a.clientWidth || Nr && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != bg(a, "overflow")) {
                    var m = Jv(a),
                        n = new _.ih(a.clientLeft, a.clientTop);
                    m.x += n.x;
                    m.y += n.y;
                    f.top = Math.max(f.top, m.y);
                    f.right = Math.min(f.right, m.x + a.clientWidth);
                    f.bottom = Math.min(f.bottom, m.y + a.clientHeight);
                    f.left = Math.max(f.left, m.x)
                }
            a = l.scrollLeft;
            l = l.scrollTop;
            f.left = Math.max(f.left, a);
            f.top = Math.max(f.top, l);
            g = g.j;
            g = _.Ou(g.parentWindow || g.defaultView || window);
            f.right = Math.min(f.right, a + g.width);
            f.bottom = Math.min(f.bottom, l + g.height);
            l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new zv(f.left, f.top, f.right - f.left, f.bottom - f.top) : null) ? Bv(e, f) : null;
            g = a = 0;
            l && !(new _.lh(l.width, l.height)).isEmpty() && (a = l.width / e.width, g = l.height / e.height);
            l = new _.xv(0, 0, 0, 0);
            if (h = f)(e = Bv(e, f)) ? (k = Av(f), m = Av(e), h = m.right != k.left && k.right != m.left, k = m.bottom != k.top && k.bottom != m.top, h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
            h && (l = new _.xv(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
            return new GE(b, c, d, l, a, g)
        };
    var JE = function(a) {
        this.I = a;
        this.C = null;
        this.F = this.status = 0;
        this.m = null;
        this.Ka = "sfchannel" + a
    };
    var KE = function(a) {
        this.j = a
    };
    var LE = function(a, b) {
        this.kc = a;
        this.lc = b;
        this.m = this.j = !1
    };
    var ME = function(a, b, c, d, e, f, g, h, k) {
        h = void 0 === h ? [] : h;
        this.m = a;
        this.D = b;
        this.I = c;
        this.permissions = d;
        this.metadata = e;
        this.C = f;
        this.Ob = g;
        this.hostpageLibraryTokens = h;
        this.j = "";
        this.wb = void 0 === k ? "" : k
    };
    var NE = function(a, b) {
        this.m = a;
        this.I = b
    };
    NE.prototype.j = function(a) {
        this.I && a && (a.sentinel = this.I);
        return JSON.stringify(a)
    };
    var OE = function(a, b, c) {
        NE.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.O(OE, NE);
    OE.prototype.j = function() {
        return NE.prototype.j.call(this, {
            uid: this.m,
            version: this.version
        })
    };
    var PE = function(a, b, c, d) {
        NE.call(this, a, void 0 === d ? "" : d);
        this.C = b;
        this.D = c
    };
    _.O(PE, NE);
    PE.prototype.j = function() {
        return NE.prototype.j.call(this, {
            uid: this.m,
            initialWidth: this.C,
            initialHeight: this.D
        })
    };
    var QE = function(a, b, c) {
        NE.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.O(QE, NE);
    QE.prototype.j = function() {
        return NE.prototype.j.call(this, {
            uid: this.m,
            description: this.description
        })
    };
    var RE = function(a, b, c, d) {
        NE.call(this, a, void 0 === d ? "" : d);
        this.D = b;
        this.push = c
    };
    _.O(RE, NE);
    RE.prototype.j = function() {
        return NE.prototype.j.call(this, {
            uid: this.m,
            expand_t: this.D.top,
            expand_r: this.D.right,
            expand_b: this.D.bottom,
            expand_l: this.D.left,
            push: this.push
        })
    };
    var SE = function(a, b) {
        NE.call(this, a, void 0 === b ? "" : b)
    };
    _.O(SE, NE);
    SE.prototype.j = function() {
        return NE.prototype.j.call(this, {
            uid: this.m
        })
    };
    var TE = function(a, b, c) {
        NE.call(this, a, void 0 === c ? "" : c);
        this.C = b
    };
    _.O(TE, NE);
    TE.prototype.j = function() {
        var a = {
            uid: this.m,
            newGeometry: HE(this.C)
        };
        return NE.prototype.j.call(this, a)
    };
    var UE = function(a, b, c, d, e, f) {
        TE.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.D = d;
        this.push = e
    };
    _.O(UE, TE);
    UE.prototype.j = function() {
        var a = {
            uid: this.m,
            success: this.success,
            newGeometry: HE(this.C),
            expand_t: this.D.top,
            expand_r: this.D.right,
            expand_b: this.D.bottom,
            expand_l: this.D.left,
            push: this.push
        };
        this.I && (a.sentinel = this.I);
        return JSON.stringify(a)
    };
    var VE = function(a, b, c, d) {
        NE.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.O(VE, NE);
    VE.prototype.j = function() {
        return NE.prototype.j.call(this, {
            uid: this.m,
            width: this.width,
            height: this.height
        })
    };
    var WE = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        ud(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var XE = function() {
            this.j = []
        },
        ZE = function(a, b, c, d, e) {
            a.j.push(new YE(b, c, d, e))
        },
        $E = function(a) {
            for (var b = a.j.length - 1; 0 <= b; b--) {
                var c = a.j[b];
                c.m ? (c.D.style.removeProperty(c.j), c.D.style.setProperty(c.j, String(c.I), c.C)) : c.D.style[c.j] = c.I
            }
            a.j.length = 0
        },
        YE = function(a, b, c, d) {
            this.D = a;
            this.j = (this.m = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
            this.I = this.m ? a.style.getPropertyValue(this.j) : a.style[this.j];
            this.C = this.m ? a.style.getPropertyPriority(this.j) : void 0;
            this.m ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
        };
    var aF = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        bF = function() {
            var a = window,
                b = _.Ay(a);
            b && aF({
                label: "2",
                type: 9,
                value: b
            }, a)
        },
        cF = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            var e = window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var g = _.Ay(),
                    h = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && aF(_.v(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: g,
                        duration: (_.Ay() || 0) - g,
                        type: h
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        };
    var hF = function(a) {
        JE.call(this, a.uniqueId);
        var b = this;
        this.H = a.kh;
        this.B = 1 === a.size;
        this.O = new LE(a.permissions.kc && !this.B, a.permissions.lc && !this.B);
        this.l = a.md;
        var c;
        this.ja = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.ia = "file:" == c ? "*" : c + "//" + d;
        this.ma = !!a.Ob;
        c = "//" + a.Xd + (_.G(ax) ? ".safeframe.usercontent.goog" : ".safeframe.googlesyndication.com");
        this.V = a.Xd ? c : "//tpc.googlesyndication.com";
        this.fa = a.rc ? "*" : "https:" + this.V;
        this.R = !!a.xe;
        this.aa = dF(a);
        this.D = new XE;
        eF(this, a.md, a.size);
        this.C = this.Y = IE(a.md);
        this.T = a.rf || "1-0-38";
        var e;
        this.ca = null != (e = a.re) ? e : "";
        this.na = a.wb;
        fF(this, a);
        this.va = cF(412, function() {
            return gF(b)
        }, a.Fa);
        this.J = -1;
        this.o = 0;
        var f = cF(415, function() {
            b.j && (b.j.name = "", a.Pd && a.Pd(), _.Sd(b.j, "load", f))
        }, a.Fa);
        _.Ya(this.j, "load", f);
        this.ed = cF(413, this.ed, a.Fa);
        this.od = cF(417, this.od, a.Fa);
        this.pd = cF(419, this.pd, a.Fa);
        this.Xc = cF(411, this.Xc, a.Fa);
        this.Uc = cF(409, this.Uc, a.Fa);
        this.M = cF(410, this.M, a.Fa);
        this.hd = cF(416, this.hd, a.Fa);
        this.m = new DD(this.Ka, this.j.contentWindow, this.fa, !1);
        FD(this.m, "init_done", (0, _.Xq)(this.ed, this));
        FD(this.m, "register_done", (0, _.Xq)(this.od, this));
        FD(this.m, "report_error", (0, _.Xq)(this.pd, this));
        FD(this.m, "expand_request", (0, _.Xq)(this.Xc, this));
        FD(this.m, "collapse_request", (0, _.Xq)(this.Uc, this));
        FD(this.m, "creative_geometry_update", (0, _.Xq)(this.M, this));
        this.m.connect((0, _.Xq)(this.hd, this))
    };
    _.O(hF, JE);
    var eF = function(a, b, c) {
            a.B ? (b.style.width = _.Lv("100%", !0), b.style.height = _.Lv("auto", !0)) : (b.style.width = _.Lv(c.width, !0), b.style.height = _.Lv(c.height, !0))
        },
        fF = function(a, b) {
            var c = b.rc,
                d = b.content,
                e = b.Mb,
                f = b.size,
                g = void 0 === b.Nb ? "3rd party ad content" : b.Nb,
                h = b.mc;
            b = b.Qc;
            var k = {
                shared: {
                    sf_ver: a.T,
                    ck_on: xy() ? 1 : 0,
                    flash_ver: "0"
                }
            };
            d = c ? "" : null != d ? d : "";
            d = a.T + ";" + d.length + ";" + d;
            k = new ME(a.I, a.ia, a.Y, a.O, new KE(k), a.B, a.ma, a.ja, a.na);
            var l = {};
            l.uid = k.m;
            l.hostPeerName = k.D;
            l.initialGeometry = HE(k.I);
            var m = k.permissions;
            m = JSON.stringify({
                expandByOverlay: m.kc,
                expandByPush: m.lc,
                readCookie: m.j,
                writeCookie: m.m
            });
            l = (l.permissions = m, l.metadata = JSON.stringify(k.metadata.j), l.reportCreativeGeometry = k.C, l.isDifferentSourceWindow = k.Ob, l.goog_safeframe_hlt = Vz(k.hostpageLibraryTokens), l);
            k.j && (l.sentinel = k.j);
            k.wb && (l.pbjsAdConfig = k.wb);
            k = JSON.stringify(l);
            d += k;
            a.R && f instanceof _.lh && (k = _.Qu(_.Ju(a.l)), l = _.Qu(_.Ju(a.l)).location.protocol + a.V, Fz || gj(k.document, Gz), Fz++, k.google_eas_queue = k.google_eas_queue || [], k.google_eas_queue.push({
                a: e,
                b: l,
                c: f.width,
                d: f.height,
                e: "sf-gdn-exp-" + Fz,
                f: void 0,
                g: void 0,
                h: void 0,
                i: void 0
            }));
            k = f.width;
            f = f.height;
            a.B && (f = k = 0);
            l = {};
            e = (l.id = e, l.title = g, l.name = d, l.scrolling = "no", l.marginWidth = "0", l.marginHeight = "0", l.width = String(k), l.height = String(f), l["data-is-safeframe"] = "true", l);
            void 0 === c && (g = _.Qu(_.Ju(a.l)), f = a.ca, d = a.V, (k = f) && (k = "?" + k), d = (void 0 === d ? "//tpc.googlesyndication.com" : d) + ("/safeframe/" + a.T + "/html/container.html" + k), (k = WE(g)) && (d += (f ? "&" : "?") + "n=" + k), f = "https:" + d, d = [], a.R && (k = dv(g.location.href), g = d.push, k = [0 < k.length ? "google_debug" + (k ? "=" + k : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.I, "&p=", encodeURIComponent(_.t.document.location.protocol), "//", encodeURIComponent(_.t.document.location.host)].join(""), g.call(d, k)), d.length && (f += "#" + d.join("&")), e.src = f);
            null !== a.aa && (e.sandbox = a.aa);
            h && (e.allow = h);
            b && (e.anonymous = "true");
            e.role = "region";
            e["aria-label"] = "Advertisement";
            e.tabIndex = "0";
            c ? (a.j = c, Mu(a.j, e)) : (c = {}, c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c), e && Aa(c, e), h = _.rd("IFRAME"), Mu(h, c), a.j = h);
            a.B && (a.j.style.minWidth = "100%");
            a.l.appendChild(a.j)
        };
    r = hF.prototype;
    r.hd = function() {
        _.Ya(window, "resize", this.va);
        _.Ya(window, "scroll", this.va)
    };
    r.ed = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ea(b) || !ai(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new OE(b.uid, b.version, b.sentinel);
            if (this.I !== c.m || this.T !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.H) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    r.od = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ea(b) || !ai(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.I !== (new PE(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).m) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.H) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    r.pd = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ea(b) || !ai(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new QE(b.uid, b.description, b.sentinel);
            if (this.I !== c.m) throw Error("Wrong source container");
            var d;
            null == (d = this.H) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.H) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    };
    r.Xc = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.F) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ea(b) || !ai(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new RE(b.uid, new _.xv(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.I !== c.m) throw Error("Wrong source container");
            if (!(0 <= c.D.top && 0 <= c.D.left && 0 <= c.D.bottom && 0 <= c.D.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.O.lc || !c.push && this.O.kc) {
                var e = c.D,
                    f = c.push,
                    g = this.C = IE(this.j);
                if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                    if (!f)
                        for (var h = this.j.parentNode; h && h.style; h = h.parentNode) ZE(this.D, h, "overflowX", "visible", "important"), ZE(this.D, h, "overflowY", "visible", "important");
                    var k = Av(new zv(0, 0, this.C.m.getWidth(), this.C.m.getHeight()));
                    _.ea(e) ? (k.top -= e.top, k.right += e.right, k.bottom += e.bottom, k.left -= e.left) : (k.top -= e, k.right += Number(void 0), k.bottom += Number(void 0), k.left -= Number(void 0));
                    ZE(this.D, this.l, "position", "relative");
                    ZE(this.D, this.j, "position", "absolute");
                    if (f) {
                        var l = k.getWidth();
                        ZE(this.D, this.l, "width", l + "px");
                        var m = k.getHeight();
                        ZE(this.D, this.l, "height", m + "px")
                    } else ZE(this.D, this.j, "zIndex", "10000");
                    var n = k.getWidth();
                    ZE(this.D, this.j, "width", n + "px");
                    var p = k.getHeight();
                    ZE(this.D, this.j, "height", p + "px");
                    ZE(this.D, this.j, "left", k.left + "px");
                    ZE(this.D, this.j, "top", k.top + "px");
                    this.F = 2;
                    this.C = IE(this.j);
                    d = !0
                } else d = !1
            }
            a = d;
            GD(this.m, "expand_response", (new UE(this.I, a, this.C, c.D, c.push)).j());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (u) {
            var q;
            null == (q = this.H) || q.error("Invalid EXPAND_REQUEST message. Reason: " + u.message)
        }
    };
    r.Uc = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (2 != this.F) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ea(b) || !ai(b.uid)) throw Error("Cannot parse JSON message");
            if (this.I !== (new SE(b.uid, b.sentinel)).m) throw Error("Wrong source container");
            $E(this.D);
            this.F = 0;
            this.j && (this.C = IE(this.j));
            GD(this.m, "collapse_response", (new TE(this.I, this.C)).j())
        } catch (d) {
            var c;
            null == (c = this.H) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var gF = function(a) {
        if (1 == a.status || 2 == a.status) switch (a.o) {
            case 0:
                iF(a);
                a.J = window.setTimeout((0, _.Xq)(a.ha, a), 1E3);
                a.o = 1;
                break;
            case 1:
                a.o = 2;
                break;
            case 2:
                a.o = 2
        }
    };
    hF.prototype.M = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ea(b) || !ai(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new VE(b.uid, b.width, b.height, b.sentinel);
            if (this.I !== c.m) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.B) d !== this.j.height && (this.j.height = d, gF(this));
            else {
                var e;
                null == (e = this.H) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.H) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    };
    hF.prototype.ha = function() {
        if (1 == this.status || 2 == this.status) switch (this.o) {
            case 1:
                this.o = 0;
                break;
            case 2:
                iF(this), this.J = window.setTimeout((0, _.Xq)(this.ha, this), 1E3), this.o = 1
        }
    };
    var iF = function(a) {
            a.C = IE(a.j);
            GD(a.m, "geometry_update", (new TE(a.I, a.C)).j())
        },
        dF = function(a) {
            var b = null;
            a.Zd && (b = a.Zd);
            return null == b ? null : b.join(" ")
        },
        jF = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        kF = ["allow-top-navigation"],
        lF = ["allow-same-origin"],
        mF = gv([].concat(_.Hd(jF), _.Hd(kF)));
    gv([].concat(_.Hd(jF), _.Hd(lF)));
    gv([].concat(_.Hd(jF), _.Hd(kF), _.Hd(lF)));
    var nF = P(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]),
        oF = {
            Te: function(a) {
                if ("string" !== typeof a.version) throw new TypeError("version is not a string");
                if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
                if ("string" !== typeof a.Tb) throw new TypeError("subdomain is not a string");
                if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.Tb)) throw new RangeError("Invalid subdomain: " + a.Tb);
                return a.Cf ? Ad("https://" + a.Tb + ".safeframe.usercontent.goog/safeframe/" + a.version + "/html/container.html") : Ad("https://" + a.Tb + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
            },
            wh: function(a) {
                return B(nF, a)
            }
        };
    /*

    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var Qd = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    var ci = function(a, b) {
        try {
            ib(uo(a, b))
        } catch (c) {}
    };
    var pF = function(a) {
        _.Q.call(this, a)
    };
    _.O(pF, _.Q);
    var qF = [pF, 4, Ps, 2, Ps, 1, Ps, 3, Ps, 5, Ss];
    var rF = [.05, .1, .2, .5],
        sF = [0, .5, 1],
        tF = function(a) {
            a = $e(a);
            if (!a) return -1;
            try {
                var b = Lz(a.document);
                var c = new _.lh(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.lh(-12245933, -12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        },
        uF = function(a, b) {
            return 0 >= a || 0 >= b ? [] : Hc(rF, function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        wF = function(a) {
            this.C = a.G;
            this.D = a.tb;
            this.H = a.qb;
            this.m = null;
            this.I = a.Fa;
            this.j = vF(this);
            this.l = a.wf || !1
        };
    wF.prototype.getSlotId = function() {
        return this.m
    };
    var yF = function(a, b) {
            if (a.j) {
                if (null != a.m) {
                    try {
                        xF(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.I && a.I(c)
                    }
                    a.j && a.j.unobserve(a.D)
                }
                a.m = b;
                a.j.observe(a.D)
            }
        },
        vF = function(a) {
            var b = a.D.offsetWidth * a.D.offsetHeight,
                c = tF(a.C);
            b = [].concat(_.Hd(sF), _.Hd(uF(c, b)));
            ha(b);
            return _.t.IntersectionObserver ? new _.t.IntersectionObserver(function(d) {
                return zF(a, d)
            }, {
                threshold: b
            }) : new Qo(function(d) {
                return zF(a, d)
            }, {
                threshold: b
            })
        },
        zF = function(a, b) {
            try {
                var c = tF(a.C);
                _.br(b, function(d) {
                    a.l && xF(a, Math.round(d.time), d.boundingClientRect.width * d.boundingClientRect.height, d.intersectionRect.width * d.intersectionRect.height, c, d.isIntersecting)
                })
            } catch (d) {
                a.I && a.I(d)
            }
        },
        xF = function(a, b, c, d, e, f) {
            if (null == a.m) throw Error("Not Attached.");
            var g = new pF;
            c = _.y(g, 1, c);
            d = _.y(c, 2, d);
            e = _.y(d, 3, e);
            b = _.y(e, 4, b);
            f = _.y(b, 5, f);
            f = gc(Ns(f, qF), 4);
            Fy(a.H, "1", 10, f, void 0, a.m)
        };
    var AF = function(a, b) {
            this.j = a;
            this.m = b
        },
        BF = function(a) {
            if (a.j.frames.google_ads_top_frame) return !0;
            var b = kv(a.j);
            b = b && b.contentWindow;
            if (!b) return !1;
            b.addEventListener("message", function(c) {
                var d = c.ports;
                "__goog_top_url_req" === c.data.msgType && d.length && d[0].postMessage({
                    msgType: "__goog_top_url_resp",
                    topUrl: a.m
                })
            }, !1);
            return !0
        };
    var ni = function(a) {
        _.Q.call(this, a)
    };
    _.O(ni, _.Q);
    var pi = [1, 3];
    var Od = {
        Qg: 0,
        Mg: 1,
        Kg: 2,
        Lg: 3,
        Og: 5,
        Pg: 6,
        Ng: 7
    };
    var CF = P(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        hi = B(CF);
    var DF = function() {
            this.id = "goog_" + Fu++
        },
        EF = function(a) {
            _.Px.call(this);
            this.context = a;
            this.H = new w.Map
        };
    _.O(EF, _.Px);
    EF.prototype.I = function() {
        _.Px.prototype.I.call(this);
        this.H.clear()
    };
    var GF = function(a, b, c) {
            if (a.D) return function() {};
            var d = "string" === typeof b ? b : b.id,
                e, f, g = null != (f = null == (e = a.H.get(d)) ? void 0 : e.add(c)) ? f : new w.Set([c]);
            a.H.set(d, g);
            return function() {
                return void FF(a, b, c)
            }
        },
        zo = function(a, b, c) {
            c = void 0 === c ? function() {
                return !0
            } : c;
            return new w.Promise(function(d) {
                var e = GF(a, b, function(f) {
                    c(f) && (e(), d(f))
                })
            })
        },
        FF = function(a, b, c) {
            var d;
            return !(null == (d = a.H.get("string" === typeof b ? b : b.id)) || !d.delete(c))
        };
    EF.prototype.dispatchEvent = function(a, b, c) {
        var d = this,
            e, f, g, h, k, l, m;
        return _.$a(function(n) {
            if (1 == n.j) {
                e = "string" === typeof a ? a : a.id;
                f = d.H.get(e);
                if (null == (g = f) || !g.size) return n.return();
                h = "function" === typeof window.CustomEvent ? new CustomEvent(e, {
                    detail: c,
                    bubbles: !0,
                    cancelable: !0
                }) : function() {
                    var p = document.createEvent("CustomEvent");
                    p.initCustomEvent(e, !0, !0, c);
                    return p
                }();
                k = {};
                l = _.z(f);
                m = l.next()
            }
            if (5 != n.j) {
                if (m.done) {
                    n.j = 0;
                    return
                }
                k.Wb = m.value;
                return ab(n, 0, 5)
            }
            _.Hg(d.context, b, function(p) {
                return function() {
                    d.H.has(e) && f.has(p.Wb) && p.Wb(h)
                }
            }(k), !0);
            k = {
                Wb: k.Wb
            };
            m = l.next();
            n.j = 2
        })
    };
    var HF = new DF,
        IF = new DF,
        Mo = new DF,
        JF = new DF,
        Oo = new DF,
        KF = new DF,
        LF = new DF,
        Ao = new DF,
        MF = new DF,
        NF = new DF;
    var OF = function() {
        this.data = void 0;
        this.status = 0;
        this.j = []
    };
    OF.prototype.nc = function() {
        return this.j
    };
    var PF, TF, WF, Pl, XF, SF, RF, QF, YF;
    PF = function() {
        this.j = new w.Map;
        this.l = 0;
        this.m = new w.Map;
        this.ic = null;
        this.C = this.I = this.o = this.D = 0;
        this.H = new OF
    };
    TF = function(a, b) {
        a.j.get(b) || (a.j.set(b, {
            ob: !0,
            ld: "",
            rb: "",
            Wd: 0,
            Md: 0,
            jd: [],
            kd: [],
            hb: !1
        }), _.Om(b, function() {
            a.j.delete(b);
            QF(a, b)
        }), GF(b, IF, function(c) {
            c = c.detail;
            var d = (0, D.K)(a.j.get(b));
            d.ld = x(c, 33) || "";
            d.hb = !0;
            RF(a, b, function() {
                return void(d.ld = "")
            });
            SF(a, b, function() {
                return void(d.hb = !1)
            })
        }))
    };
    _.No = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.ob) ? d : !1
    };
    _.UF = function(a, b) {
        if (a = a.j.get(b)) a.ob = !1
    };
    _.VF = function(a, b) {
        if (a = a.j.get(b)) a.ob = !0
    };
    WF = function(a, b) {
        if (!b.length) return [];
        var c = kg(b[0].getAdUnitPath());
        b.every(function(g) {
            return kg(g.getAdUnitPath()) === c
        });
        var d = [];
        a = _.z(a.j);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.z(e.value);
            e = f.next().value;
            (f = f.next().value.ld) && kg(e.getAdUnitPath()) === c && !_.v(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    Pl = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.rb) ? d : ""
    };
    XF = function(a, b) {
        return (a = a.j.get(b)) ? a.Wd - 1 : 0
    };
    SF = function(a, b, c) {
        (a = a.j.get(b)) && a.jd.push(c)
    };
    RF = function(a, b, c) {
        (a = a.j.get(b)) && a.kd.push(c)
    };
    QF = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.kd.slice(), a.kd.length = 0, a = _.z(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    YF = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.jd.slice(), a.jd.length = 0, a = _.z(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    PF.prototype.hb = function(a) {
        var b, c;
        return null != (c = null == (b = this.j.get(a)) ? void 0 : b.hb) ? c : !1
    };
    var ZF = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_allow_expandable_ads = "ea", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a
    };
    var Z = function(a, b, c) {
        sz.call(this, b, void 0 === c ? 0 : c);
        this.context = a
    };
    _.O(Z, sz);
    Z.prototype.V = function(a) {
        Eg(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    };
    var $F = function(a, b, c, d, e) {
        var f = null,
            g = _.zg(a.context, b, e);
        _.Ya(c, d, g) && (f = function() {
            return _.Sd(c, d, g)
        }, _.Om(a, f));
        return f
    };
    var aG = /(<head(\s+[^>]*)?>)/i,
        pp = function(a, b, c, d, e) {
            Z.call(this, a, 665);
            this.A = V(this);
            this.l = W(this, b);
            this.B = X(this, c);
            this.F = W(this, d);
            this.o = W(this, e)
        };
    _.O(pp, Z);
    pp.prototype.j = function() {
        var a;
        0 === this.l.value.kind && null != (a = this.B.value) && x(a, 1) ? (a = this.l.value.Ca, this.o.value || Fa() || (a = a.replace(aG, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")), this.F.value && !this.o.value && (a = a.replace(aG, '$1<meta name="referrer" content="origin">')), this.A.j({
            kind: 0,
            Ca: a
        })) : this.A.j(this.l.value)
    };
    var Sp = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 718);
        this.B = X(this, c);
        this.l = X(this, d);
        vz(this, e);
        this.F = W(this, f);
        this.o = W(this, g);
        this.M = W(this, h);
        this.J = zo(b, MF)
    };
    _.O(Sp, Z);
    Sp.prototype.j = function() {
        var a = this,
            b, c, d;
        return _.$a(function(e) {
            if (1 == e.j) {
                var f = !a.M.value;
                if (null == a.l.value || "height" !== a.B.value || f) return e.return();
                b = a.F.value;
                c = a.o.value;
                bG(c, !1);
                _.Fv(c, "min-width", "100%");
                _.Fv(b, "min-width", "100%");
                return ab(e, a.J, 2)
            }
            if (a.D) return e.return();
            d = b.contentDocument;
            if (!d) return e.return();
            f = d.body.offsetWidth;
            b.setAttribute("height", String(d.body.offsetHeight));
            b.setAttribute("width", String(f));
            bG(c, !0);
            e.j = 0
        })
    };
    var bG = function(a, b) {
        _.Fv(a, "visibility", b ? "visible" : "hidden")
    };
    var Hi = new w.Map,
        Gi = new w.Map;
    var Ji = function(a, b) {
        this.push = J(a, 76, b.push.bind(b))
    };
    var Li = function(a, b) {
        this.messageId = a;
        this.messageArgs = b
    };
    Li.prototype.getMessageId = function() {
        return this.messageId
    };
    Li.prototype.getMessageArgs = function() {
        return this.messageArgs
    };
    var cG = L(2),
        dG = L(3),
        eG = L(4),
        fG = L(5),
        gG = L(6),
        hG = L(12),
        iG = L(14),
        jG = L(16),
        kG = L(19),
        lG = L(20),
        en = L(23),
        fn = L(26),
        mG = L(28),
        nG = L(30),
        oG = L(31),
        pG = L(34),
        qG = L(35),
        rG = L(36),
        Rn = L(38),
        sG = L(40),
        tG = L(48),
        uG = L(50),
        vG = L(60),
        wG = L(63),
        xG = L(64),
        yG = L(66),
        zG = L(68),
        AG = L(69),
        BG = L(70),
        CG = L(71),
        DG = L(78),
        EG = L(80),
        FG = L(82),
        GG = L(84),
        HG = L(85),
        IG = L(87),
        sj = L(88),
        JG = L(92),
        KG = L(93),
        LG = L(99),
        MG = L(103),
        NG = L(104),
        OG = L(105),
        PG = L(106),
        QG = L(107),
        RG = L(108),
        SG = L(113),
        TG = L(114),
        UG = L(115),
        VG = L(117),
        WG = L(118),
        XG = L(119),
        Nj = L(121),
        YG = L(122),
        ZG = L(123),
        co = L(125),
        $G = L(126),
        aH = L(127),
        Kn = L(144),
        xn = L(129),
        zn = L(132),
        bH = L(134),
        cH = L(135),
        dH = L(136),
        eH = L(137),
        fH = L(138),
        gH = L(139),
        hH = L(140),
        wo = L(142),
        iH = L(143),
        jH = L(145),
        kH = L(147),
        Xn = L(148);
    var lH = function(a, b, c) {
        var d = this;
        this.addEventListener = J(a, 86, function(e, f) {
            if ("function" !== typeof f) return M(b, Ni("Service.addEventListener", [e, f])), d;
            var g = Oi(e);
            if (!g) return M(b, KG(e)), d;
            c.addEventListener(g, f);
            return d
        });
        this.removeEventListener = J(a, 904, function(e, f) {
            var g = Oi(e);
            "function" === typeof f && g ? c.removeEventListener(g, f) : M(b, Ni("Service.removeEventListener", [e, f]))
        });
        this.getSlots = J(a, 573, function() {
            return c.j.map(function(e) {
                return (0, D.K)(e.j)
            })
        });
        this.getSlotIdMap = J(a, 574, function() {
            for (var e = {}, f = _.z(c.j), g = f.next(); !g.done; g = f.next()) g = g.value, e[g.toString()] = g.j;
            return e
        });
        this.enable = J(a, 87, function() {
            return void c.enable()
        }, !0);
        this.getName = J(a, 575, function() {
            return c.getName()
        })
    };
    var Pi = function(a, b, c) {
        lH.call(this, a, b, c);
        this.notifyUnfilledSlots = J(a, 69, function(d) {
            c.ob && mH(c, nH(c, d))
        });
        this.refreshAllSlots = J(a, 60, function() {
            c.ob && mH(c)
        });
        this.setVideoSession = J(a, 61, function(d, e, f) {
            c.V = e;
            c.M = f;
            "number" === typeof d && (e = Ch().j, _.y(e, 29, d))
        });
        this.getDisplayAdsCorrelator = J(a, 62, function(d) {
            return oH(c, void 0 === d ? "" : d)
        });
        this.getVideoStreamCorrelator = J(a, 63, function() {
            var d = Ch().j;
            d = x(d, 29);
            return null != d ? d : 0
        });
        this.isSlotAPersistentRoadblock = J(a, 64, function(d) {
            var e = _.v(c.j, "find").call(c.j, function(f) {
                return f.j === d
            });
            return !!e && pH(c, e)
        });
        this.onImplementationLoaded = J(a, 65, function() {
            c.C.info(tG("GPT CompanionAds"))
        });
        this.slotRenderEnded = J(a, 67, function(d, e, f) {
            var g = _.v(c.j, "find").call(c.j, function(h) {
                return h.j === d
            });
            return g && qH(c, g, e, f)
        });
        this.setRefreshUnfilledSlots = J(a, 59, function(d) {
            return c.setRefreshUnfilledSlots(d)
        })
    };
    _.O(Pi, lH);
    var Ri = function(a, b, c) {
        lH.call(this, a, b, c);
        this.setContent = J(a, 72, function(d) {
            var e = _.v(c.j, "find").call(c.j, function(f) {
                return f.j === d
            });
            M(b, Kn(), e)
        })
    };
    _.O(Ri, lH);
    var rH = P(["https://console.googletagservices.com/pubconsole/loader.js"]),
        hj = B(rH),
        kj, jj = !1,
        cj = !1,
        ej = !1;
    var On = function(a, b) {
        this.getAllEvents = J(a, 563, function() {
            return cj ? sH(b).slice() : []
        });
        this.getEventsBySlot = J(a, 565, function(c) {
            return cj ? tH(b, c).slice() : []
        });
        this.getEventsByLevel = J(a, 566, function(c) {
            return cj ? uH(b, c).slice() : []
        })
    };
    var vj = function(a, b, c, d) {
        var e = this,
            f = c.getSlotId(),
            g = Ch().j,
            h = (0, D.K)(Rm(Ch(), f.getDomId()));
        this.set = J(a, 83, function(k, l) {
            "page_url" === k && l && (k = [oj(pj(new qj, k), [String(l)])], Fc(h, 3, k));
            return e
        });
        this.get = J(a, 84, function(k) {
            if ("page_url" !== k) return null;
            var l, m;
            return null != (m = null == (l = (E = (0, D.K)(h.sa()), _.v(E, "find")).call(E, function(n) {
                return nj(n) === k
            })) ? void 0 : l.xa()[0]) ? m : null
        });
        this.setClickUrl = J(a, 79, function(k) {
            "string" === typeof k ? h.setClickUrl(k) : M(b, Ni("Slot.setClickUrl", [k]), f);
            return e
        });
        this.setTargeting = J(a, 81, function(k, l) {
            tj(f, h, k, l, b);
            return e
        });
        this.updateTargetingFromMap = J(a, 85, function(k) {
            uj(f, h, k, b);
            return e
        });
        this.display = J(a, 78, function() {
            vH(d, f, oh(g, Ch().m))
        });
        this.setTagForChildDirectedTreatment = J(a, 80, function(k) {
            if (0 === k || 1 === k) {
                var l = CE(g) || new zE;
                l.setTagForChildDirectedTreatment(k);
                _.sg(g, 25, l)
            }
            return e
        });
        this.setForceSafeFrame = J(a, 567, function(k) {
            "boolean" === typeof k ? _.y(h, 12, k) : M(b, Ni("PassbackSlot.setForceSafeFrame", [String(k)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = J(a, 448, function(k) {
            if (0 === k || 1 === k) {
                var l = CE(g) || new zE;
                l.setTagForUnderAgeOfConsent(k);
                _.sg(g, 25, l)
            }
            return e
        })
    };
    var Wk = function(a, b) {
        this.push = J(a, 932, function(c) {
            b.push(c)
        })
    };
    var nn = {
        Jg: 0,
        Gg: 1,
        Hg: 2,
        Ig: 3
    };
    var yj = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5
        },
        Aj = {
            IAB_AUDIENCE_1_1: 1,
            IAB_CONTENT_2_1: 2,
            IAB_CONTENT_2_2: 3
        },
        zj = {
            PURCHASED: 1,
            ORGANIC: 2
        };
    var Wj = function(a) {
            var b = this;
            a = void 0 === a ? Ch().j : a;
            this.C = "";
            this.j = this.m = null;
            this.l = this.H = this.I = !1;
            this.D = function() {
                return !1
            };
            var c = {},
                d = {},
                e = {};
            this.o = (e[Jy] = (c[13] = function() {
                return zd.apply(0, arguments).some(function(f) {
                    return 0 == b.C.lastIndexOf(f, 0)
                })
            }, c[12] = function() {
                return !!F(a, 6)
            }, c[15] = function(f) {
                return b.D(f)
            }, c[48] = function() {
                return !!b.m
            }, c[51] = function() {
                return b.I
            }, c[66] = function() {
                try {
                    return !!HTMLScriptElement.supports("webbundle")
                } catch (f) {
                    return !1
                }
            }, c[67] = function() {
                return b.H
            }, c[68] = function() {
                return b.l
            }, c), e[Ky] = (d[8] = function(f) {
                var g;
                return null != (g = ie(b.m, Number(f))) ? g : void 0
            }, d[10] = function(f) {
                return b.j ? bh(f + b.j) % 1E3 : void 0
            }, d), e)
        },
        wH = function(a, b) {
            b && !a.j && (a.j = _.v(b.split(":"), "find").call(b.split(":"), function(c) {
                return 0 === c.indexOf("ID=")
            }) || null)
        };
    var ak = function(a, b, c) {
        EF.call(this, a);
        this.slotId = b;
        this.j = c
    };
    _.O(ak, EF);
    ak.prototype.getSlotId = function() {
        return this.slotId
    };
    var xH = "",
        Fj = null,
        Mj = _.Cr(function() {
            var a, b;
            null == (a = window.console) || null == (b = a.warn) || b.call(a, "googletag.pubads().setSafeFrameConfig({useUniqueDomain: ...}) has been removed, and no longer has any effect.")
        });
    var Md = function(a, b, c, d) {
        EF.call(this, a);
        this.adUnitPath = b;
        this.tb = d;
        this.j = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.O(Md, EF);
    r = Md.prototype;
    r.getId = function() {
        return this.id
    };
    r.getAdUnitPath = function() {
        return this.adUnitPath
    };
    r.getName = function() {
        return this.adUnitPath
    };
    r.toString = function() {
        return this.getId()
    };
    r.getDomId = function() {
        return this.tb
    };
    var yH = function(a, b) {
        a.j = b
    };
    var zH = new w.WeakMap,
        AH = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\v")
        };
    var Sj = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))\/tag\/js\/gpt(?:_[a-z]+)*\.js/;
    (function(a, b) {
        b = void 0 === b ? AH : b;
        var c = fa(a),
            d = function(f) {
                f = _.z(f);
                f.next();
                f = xq(f);
                return b(c, f)
            },
            e = function(f) {
                var g = _.z(f);
                f = g.next().value;
                g = xq(g);
                return a.apply(f, g)
            };
        return function() {
            var f = zd.apply(0, arguments),
                g = this || _.t,
                h = zH.get(g);
            h || (h = {}, zH.set(g, h));
            return Ir(h, [this].concat(_.Hd(f)), e, d)
        }
    })(function(a) {
        return (null == a ? 0 : a.src) ? Sj.test(a.src) ? 0 : 1 : 2
    }, function(a, b) {
        var c;
        return a + "\v" + (null == (c = b[0]) ? void 0 : c.src)
    });
    var BH = _.Cr(function() {
            return void ov("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        CH = _.Cr(function() {
            return void ov("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
        }),
        DH = _.Cr(function() {
            return void ov("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
        }),
        EH = function() {
            Object.defineProperty(window, "google_DisableInitialLoad", {
                get: function() {
                    BH();
                    return !0
                },
                set: function() {
                    BH()
                },
                configurable: !0
            })
        },
        ck = function(a, b, c, d) {
            lH.call(this, a, b, c);
            var e = this,
                f = Ch().j,
                g = Ch().m,
                h = !1;
            this.setTargeting = J(a, 1, function(k, l) {
                var m = null;
                "string" === typeof l ? m = [l] : Array.isArray(l) ? m = l : ma(l) && (m = _.v(Array, "from").call(Array, l));
                var n = "string" === typeof k && !lj(k);
                m = m && qa(m);
                var p, q = null != (p = null == m ? void 0 : m.every(function(u) {
                    return "string" === typeof u
                })) ? p : !1;
                if (!n || !q) return M(b, Ni("PubAdsService.setTargeting", [k, l])), e;
                l = m;
                n = (E = Oc(f, qj, 2), _.v(E, "find")).call(E, function(u) {
                    return nj(u) === k
                });
                if ("gpt-beta" === k) {
                    if (c.m) return M(b, PG(l.join())), e;
                    if (n) return M(b, QG(l.join())), e;
                    l = Yj(l)
                }
                n ? oj(n, l) : (n = oj(pj(new qj, k), l), rj(f, 2, qj, n));
                b.info(sj(k, l.join(), c.getName()));
                return e
            });
            this.clearTargeting = J(a, 2, function(k) {
                if (void 0 === k) return Fc(f, 2), b.info(NG(c.getName())), e;
                if ("gpt-beta" === k) return M(b, RG(k)), e;
                var l = Oc(f, qj, 2),
                    m = _.v(l, "findIndex").call(l, function(n) {
                        return nj(n) === k
                    });
                if (0 > m) return M(b, GG(k, c.getName())), e;
                l.splice(m, 1);
                Fc(f, 2, l);
                b.info(FG(k, c.getName()));
                return e
            });
            this.getTargeting = J(a, 38, function(k) {
                if ("string" !== typeof k) return M(b, Ni("PubAdsService.getTargeting", [k])), [];
                var l = (E = Oc(f, qj, 2), _.v(E, "find")).call(E, function(m) {
                    return nj(m) === k
                });
                return l ? l.xa().slice() : []
            });
            this.getTargetingKeys = J(a, 39, function() {
                return Oc(f, qj, 2).map(function(k) {
                    return (0, D.K)(nj(k))
                })
            });
            this.setCategoryExclusion = J(a, 3, function(k) {
                if ("string" !== typeof k || lj(k)) return M(b, Ni("PubAdsService.setCategoryExclusion", [k])), e;
                (E = Pk(f, 3), _.v(E, "includes")).call(E, k) || ns(f, 3, k);
                b.info(HG(k));
                return e
            });
            this.clearCategoryExclusions = J(a, 4, function() {
                _.y(f, 3, uc);
                b.info(IG());
                return e
            });
            this.disableInitialLoad = J(a, 5, function() {
                _.y(f, 4, !0);
                h || (h = !0, EH())
            });
            this.enableSingleRequest = J(a, 6, function() {
                if (c.m && !F(f, 6)) return M(b, vG("PubAdsService.enableSingleRequest")), !1;
                b.info(wG("single request"));
                _.y(f, 6, !0);
                return !0
            });
            this.enableAsyncRendering = J(a, 7, function() {
                return !0
            });
            this.enableSyncRendering = J(a, 8, function() {
                ov("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = J(a, 485, function(k) {
                var l = new sp;
                _.y(l, 1, 800);
                _.y(l, 2, 400);
                _.y(l, 3, 3);
                if (_.ea(k)) {
                    var m = k.fetchMarginPercent;
                    "number" === typeof m && (0 <= m ? _.y(l, 1, m) : -1 === m && Bc(l, 1));
                    m = k.renderMarginPercent;
                    "number" === typeof m && (0 <= m ? _.y(l, 2, m) : -1 === m && Bc(l, 2));
                    k = k.mobileScaling;
                    "number" === typeof k && (0 < k ? _.y(l, 3, k) : -1 === k && _.y(l, 3, 1))
                }
                _.sg(f, 5, l)
            });
            this.setCentering = J(a, 9, function(k) {
                k = !!k;
                b.info(xG("centering", String(k)));
                _.y(f, 15, k)
            });
            this.definePassback = J(a, 10, function(k, l) {
                return (k = bk(a, b, c, k, l, d)) && k.Sd
            });
            this.refresh = J(a, 11, function() {
                var k = zd.apply(0, arguments),
                    l = _.z(k),
                    m = l.next().value;
                l = l.next().value;
                l = void 0 === l ? {} : l;
                m && !Array.isArray(m) || !_.ea(l) || l.changeCorrelator && "boolean" !== typeof l.changeCorrelator ? M(b, Ni("PubAdsService.refresh", k)) : (l && !1 === l.changeCorrelator || f.setCorrelator(sv()), m = m ? Vj(m, c) : c.j, c.refresh(oh(f, g), m) || M(b, Ni("PubAdsService.refresh", k)))
            });
            this.enableVideoAds = J(a, 12, function() {
                _.y(f, 21, !0);
                FH(c, f)
            });
            this.setVideoContent = J(a, 13, function(k, l) {
                GH(c, k, l, f)
            });
            this.collapseEmptyDivs = J(a, 14, function(k) {
                k = void 0 === k ? !1 : k;
                _.y(f, 11, !0);
                var l = !!k;
                _.y(f, 10, l);
                Jh("gpt_ced", function(m) {
                    K(m, "sc", l ? "t" : "f");
                    K(m, "level", "page");
                    Ph(m, a)
                });
                b.info(DG(String(l)));
                return !!F(f, 11)
            });
            this.clear = J(a, 15, function(k) {
                if (Array.isArray(k)) return HH(c, f, g, Vj(k, c));
                if (void 0 === k) return HH(c, f, g, c.j);
                M(b, Ni("PubAdsService.clear", [k]));
                return !1
            });
            this.setLocation = J(a, 16, function(k) {
                if ("string" !== typeof k) return M(b, Ni("PubAdsService.setLocation", [k])), e;
                _.y(f, 8, k);
                return e
            });
            this.setCookieOptions = J(a, 17, function() {
                CH();
                return e
            });
            this.setTagForChildDirectedTreatment = J(a, 18, function(k) {
                DH();
                if (1 !== k && 0 !== k) return M(b, YG("PubadsService.setTagForChildDirectedTreatment", Oj(k), "0,1")), e;
                var l = CE(f) || new zE;
                l.setTagForChildDirectedTreatment(k);
                _.sg(f, 25, l);
                return e
            });
            this.clearTagForChildDirectedTreatment = J(a, 19, function() {
                DH();
                var k = CE(f);
                if (!k) return e;
                k.clearTagForChildDirectedTreatment();
                _.sg(f, 25, k);
                return e
            });
            this.setPublisherProvidedId = J(a, 20, function(k) {
                k = String(k);
                b.info(xG("PPID", k));
                _.y(f, 16, k);
                return e
            });
            this.set = J(a, 21, function(k, l) {
                if ("string" !== typeof k || !k.length || void 0 === ZF()[k] || "string" !== typeof l) return M(b, Ni("PubAdsService.set", [k, l])), e;
                var m = (E = f.sa(), _.v(E, "find")).call(E, function(n) {
                    return nj(n) === k
                });
                m ? oj(m, [l]) : (m = pj(new qj, k), ns(m, 2, l), rj(f, 14, qj, m));
                b.info(rG(k, String(l), c.getName()));
                return e
            });
            this.get = J(a, 22, function(k) {
                if ("string" !== typeof k) return M(b, Ni("PubAdsService.get", [k])), null;
                var l = (E = f.sa(), _.v(E, "find")).call(E, function(m) {
                    return nj(m) === k
                });
                return (l = l && l.xa()) ? l[0] : null
            });
            this.getAttributeKeys = J(a, 23, function() {
                return f.sa().map(function(k) {
                    return (0, D.K)(nj(k))
                })
            });
            this.display = J(a, 24, function(k, l, m, n) {
                return void c.display(k, l, d, m, n)
            });
            this.updateCorrelator = J(a, 25, function() {
                ov(Uj("update"));
                M(b, UG());
                f.setCorrelator(sv());
                return e
            });
            this.defineOutOfPagePassback = J(a, 35, function(k) {
                k = bk(a, b, c, k, [1, 1], d);
                if (!k) return null;
                _.y(k.Ta, 15, 1);
                return k.Sd
            });
            this.setForceSafeFrame = J(a, 36, function(k) {
                if ("boolean" !== typeof k) return M(b, Ni("PubAdsService.setForceSafeFrame", [Oj(k)])), e;
                _.y(f, 13, k);
                return e
            });
            this.setSafeFrameConfig = J(a, 37, function(k) {
                var l = Pj(b, k);
                if (!l) return M(b, Ni("PubAdsService.setSafeFrameConfig", [k])), e;
                _.sg(f, 18, l);
                return e
            });
            this.setRequestNonPersonalizedAds = J(a, 445, function(k) {
                DH();
                if (0 !== k && 1 !== k) return M(b, YG("PubAdsService.setRequestNonPersonalizedAds", Oj(k), "0,1")), e;
                var l = CE(f) || new zE;
                _.y(l, 8, !!k);
                _.sg(f, 25, l);
                return e
            });
            this.setTagForUnderAgeOfConsent = J(a, 447, function(k) {
                k = void 0 === k ? 2 : k;
                DH();
                if (2 !== k && 0 !== k && 1 !== k) return M(b, YG("PubadsService.setTagForUnderAgeOfConsent", Oj(k), "2,0,1")), e;
                var l = CE(f) || new zE;
                l.setTagForUnderAgeOfConsent(k);
                _.sg(f, 25, l);
                return e
            });
            this.getCorrelator = J(a, 27, function() {
                return String(f.getCorrelator())
            });
            this.getTagSessionCorrelator = J(a, 631, function() {
                return re(_.t)
            });
            this.getVideoContent = J(a, 30, function() {
                return IH(c, f)
            });
            this.getVersion = J(a, 568, function() {
                return a.lb ? String(a.lb) : a.Ha
            });
            this.forceExperiment = J(a, 569, function(k) {
                return void c.forceExperiment(k)
            });
            this.setCorrelator = J(a, 28, function(k) {
                ov(Uj("set"));
                M(b, TG());
                if (fh(window)) return e;
                if (!("number" === typeof k && isFinite(k) && 0 == k % 1 && 0 < k)) return M(b, Ni("PubadsService.setCorrelator", [Oj(k)])), e;
                f.setCorrelator(k);
                _.y(f, 27, !0);
                return e
            });
            this.markAsAmp = J(a, 570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = J(a, 571, function() {
                return !!F(f, 6)
            });
            this.setImaContent = J(a, 328, function(k, l) {
                Ie(f, 22) ? GH(c, k, l, f) : (_.y(f, 21, !0), FH(c, f), "string" === typeof k && _.y(f, 19, k), "string" === typeof l && _.y(f, 20, l))
            });
            this.getImaContent = J(a, 329, function() {
                return Ie(f, 22) ? IH(c, f) : c.m ? {
                    vid: x(f, 19) || "",
                    cmsid: x(f, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = J(a, 572, function() {
                return !!F(f, 4)
            });
            this.setPrivacySettings = J(a, 648, function(k) {
                if (!_.ea(k)) return M(b, Ni("PubAdsService.setPrivacySettings", [k])), e;
                var l = k.restrictDataProcessing,
                    m = k.childDirectedTreatment,
                    n = k.underAgeOfConsent,
                    p = k.limitedAds,
                    q = k.nonPersonalizedAds,
                    u = k.userOptedOutOfPersonalization,
                    A = k.trafficSource,
                    H, C = null != (H = CE(f)) ? H : new zE;
                "boolean" === typeof q ? _.y(C, 8, q) : void 0 !== q && M(b, Nj("PubAdsService.setPrivacySettings", Oj(k), "nonPersonalizedAds", Oj(q)));
                "boolean" === typeof u ? _.y(C, 13, u) : void 0 !== u && M(b, Nj("PubAdsService.setPrivacySettings", Oj(k), "userOptedOutOfPersonalization", Oj(u)));
                "boolean" === typeof l ? _.y(C, 1, l) : void 0 !== l && M(b, Nj("PubAdsService.setPrivacySettings", Oj(k), "restrictDataProcessing", Oj(l)));
                "boolean" === typeof p ? (l = Tj(), p && !F(C, 9) && a.Sb && (q = a.eb, u = tg(a), H = new Sv, H = _.Cc(H, 1, !0, !1), H = _.Cc(H, 2, l, !1), u = wg(u, 11, xg, H), Jd(q, u)), l ? _.y(C, 9, p) : M(b, kH())) : void 0 !== p && M(b, Nj("PubAdsService.setPrivacySettings", Oj(k), "limitedAds", Oj(p)));
                void 0 !== n && (null === n ? C.setTagForUnderAgeOfConsent(2) : !1 === n ? C.setTagForUnderAgeOfConsent(0) : !0 === n ? C.setTagForUnderAgeOfConsent(1) : M(b, Nj("PubAdsService.setPrivacySettings", Oj(k), "underAgeOfConsent", Oj(n))));
                void 0 !== m && (null === m ? C.clearTagForChildDirectedTreatment() : !1 === m ? C.setTagForChildDirectedTreatment(0) : !0 === m ? C.setTagForChildDirectedTreatment(1) : M(b, Nj("PubAdsService.setPrivacySettings", Oj(k), "childDirectedTreatment", Oj(m))));
                void 0 !== A && (null === A ? Bc(C, 10) : (E = _.v(Object, "values").call(Object, zj), _.v(E, "includes")).call(E, A) ? _.y(C, 10, A) : M(b, Nj("PubAdsService.setPrivacySettings", Oj(k), "trafficSource", Oj(A))));
                _.sg(f, 25, C);
                return e
            })
        };
    _.O(ck, lH);
    var $g = function(a) {
        _.Q.call(this, a)
    };
    _.O($g, _.Q);
    var Pn = function(a, b) {
        var c = this,
            d = [],
            e = [];
        this.addSize = _.zg(a, 88, function(f, g) {
            var h;
            if (h = gk(f)) h = fk(g) || Array.isArray(g) && g.every(fk);
            h ? d.push([f, g]) : (e.push([f, g]), M(b, Ni("SizeMappingBuilder.addSize", [f, g])));
            return c
        });
        this.build = _.zg(a, 89, function() {
            if (e.length) return M(b, pG(Oj(e))), null;
            la(d);
            return d
        })
    };
    var JH = function(a, b) {
        this.getId = J(a, 593, function() {
            return b.getId()
        });
        this.getAdUnitPath = J(a, 594, function() {
            return b.getAdUnitPath()
        });
        this.getName = J(a, 595, function() {
            return b.getName()
        });
        this.toString = J(a, 596, function() {
            return b.toString()
        });
        this.getDomId = J(a, 597, function() {
            return b.getDomId()
        })
    };
    var Tg = function(a) {
        _.Q.call(this, a, -1, KH)
    };
    _.O(Tg, _.Q);
    var KH = [2];
    var MH = function(a) {
        _.Q.call(this, a, -1, LH)
    };
    _.O(MH, _.Q);
    MH.prototype.getAdUnitPath = function() {
        return x(this, 1)
    };
    MH.prototype.getDomId = function() {
        return x(this, 2)
    };
    var NH = function(a, b) {
        _.y(a, 2, b)
    };
    MH.prototype.sa = function() {
        return Oc(this, qj, 3)
    };
    MH.prototype.getClickUrl = function() {
        return x(this, 7)
    };
    MH.prototype.setClickUrl = function(a) {
        return _.y(this, 7, a)
    };
    var mj = function(a) {
        return Oc(a, qj, 9)
    };
    MH.prototype.Ra = function() {
        return De(this, Kj, 13)
    };
    var gl = function(a) {
            return be(a, 15, 0)
        },
        OH = function(a) {
            a = zc(a, x(a, 26));
            return null == a ? a : a
        },
        LH = [3, 4, 5, 6, 8, 9];
    var PH = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        QH = function(a, b) {
            a.advertiserId = b
        },
        RH = function(a, b) {
            a.campaignId = b
        },
        SH = function(a, b) {
            a.yieldGroupIds = b
        },
        TH = function(a, b) {
            a.companyIds = b
        };
    var UH = function(a, b) {
        this.width = a;
        this.height = b
    };
    UH.prototype.getWidth = function() {
        return this.width
    };
    UH.prototype.getHeight = function() {
        return this.height
    };
    var pk = function(a, b, c) {
        var d = this,
            e = (0, D.K)(Rm(Ch(), c.getDomId())),
            f = "",
            g = null,
            h = function() {
                return ""
            },
            k = "",
            l = !1;
        _.Om(c, function() {
            e = new MH;
            f = "";
            g = null;
            h = function() {
                return ""
            };
            k = ""
        });
        GF(c, Mo, function(n) {
            var p = n.detail;
            n = p.Bd;
            p = p.isBackfill;
            n && (f = n, l = p)
        });
        this.set = J(a, 40, function(n, p) {
            if ("string" !== typeof n || "string" !== typeof p || void 0 === ZF()[n]) return M(b, Ni("Slot.set", [n, p]), c), d;
            var q = (E = e.sa(), _.v(E, "find")).call(E, function(u) {
                return nj(u) === n
            });
            q ? oj(q, [p]) : (q = pj(new qj, n), ns(q, 2, p), rj(e, 3, qj, q));
            return d
        });
        this.get = J(a, 41, function(n) {
            if ("string" !== typeof n) return M(b, Ni("Slot.get", [n]), c), null;
            var p = (E = e.sa(), _.v(E, "find")).call(E, function(q) {
                return nj(q) === n
            });
            return (p = p && p.xa()) ? p[0] : null
        });
        this.getAttributeKeys = J(a, 42, function() {
            return e.sa().map(function(n) {
                return (0, D.K)(nj(n))
            })
        });
        this.addService = J(a, 43, function(n) {
            n = Hi.get(n);
            if (!n) return M(b, Ni("Slot.addService", [n]), c), d;
            var p = n.getName();
            if ((E = Pk(e, 4), _.v(E, "includes")).call(E, p)) return b.info(hG(p, c.toString()), c), d;
            n.slotAdded(c, e);
            return d
        });
        this.defineSizeMapping = J(a, 44, function(n) {
            try {
                var p = e;
                if (!Array.isArray(n)) throw new nk("Size mapping must be an array");
                var q = n.map(ok);
                Fc(p, 6, q)
            } catch (u) {
                n = u, Eg(a, 44, n), ov("Incorrect usage of googletag.Slot defineSizeMapping: " + n.message)
            }
            return d
        });
        this.setClickUrl = J(a, 45, function(n) {
            if ("string" !== typeof n) return M(b, Ni("Slot.setClickUrl", [n]), c), d;
            e.setClickUrl(n);
            return d
        });
        this.setCategoryExclusion = J(a, 46, function(n) {
            "string" !== typeof n || lj(n) ? M(b, Ni("Slot.setCategoryExclusion", [n]), c) : ((E = Pk(e, 8), _.v(E, "includes")).call(E, n) || ns(e, 8, n), b.info(iG(n), c));
            return d
        });
        this.clearCategoryExclusions = J(a, 47, function() {
            _.y(e, 8, uc);
            b.info(jG(), c);
            return d
        });
        this.getCategoryExclusions = J(a, 48, function() {
            return Pk(e, 8).slice()
        });
        this.setTargeting = J(a, 49, function(n, p) {
            tj(c, e, n, p, b);
            return d
        });
        this.updateTargetingFromMap = J(a, 649, function(n) {
            uj(c, e, n, b);
            return d
        });
        this.clearTargeting = J(a, 50, function(n) {
            if (void 0 === n) return Fc(e, 9), b.info(kG(c.getAdUnitPath()), c), d;
            var p = mj(e),
                q = _.v(p, "findIndex").call(p, function(u) {
                    return nj(u) === n
                });
            if (0 > q) return M(b, GG(n, c.getAdUnitPath()), c), d;
            p.splice(q, 1);
            Fc(e, 9, p);
            b.info(MG(n, c.getAdUnitPath()), c);
            return d
        });
        this.getTargeting = J(a, 51, function(n) {
            if ("string" !== typeof n) return M(b, Ni("Slot.getTargeting", [n]), c), [];
            var p = (E = mj(e), _.v(E, "find")).call(E, function(q) {
                return nj(q) === n
            });
            return p ? p.xa().slice() : []
        });
        this.getTargetingKeys = J(a, 52, function() {
            return mj(e).map(function(n) {
                return (0, D.K)(nj(n))
            })
        });
        this.setCollapseEmptyDiv = J(a, 53, function(n, p) {
            p = void 0 === p ? !1 : p;
            if ("boolean" !== typeof n || "boolean" !== typeof p) return M(b, Ni("Slot.setCollapseEmptyDiv", [n, p]), c), d;
            _.y(e, 10, n);
            _.y(e, 11, n && p);
            Jh("gpt_ced", function(q) {
                K(q, "sc", F(e, 11) ? "t" : "f");
                K(q, "level", "slot");
                Ph(q, a)
            });
            p && !n && M(b, lG(c.toString()), c);
            return d
        });
        this.getAdUnitPath = J(a, 54, function() {
            return c.getAdUnitPath()
        });
        this.getSlotElementId = J(a, 598, function() {
            return c.getDomId()
        });
        this.setForceSafeFrame = J(a, 55, function(n) {
            if ("boolean" !== typeof n) return M(b, Ni("Slot.setForceSafeFrame", [String(n)]), c), d;
            _.y(e, 12, n);
            return d
        });
        this.setSafeFrameConfig = J(a, 56, function(n) {
            var p = Pj(b, n);
            if (!p) return b.error(Ni("Slot.setSafeFrameConfig", [n]), c), d;
            _.sg(e, 13, p);
            return d
        });
        GF(c, IF, function(n) {
            n = n.detail;
            if (F(n, 8)) g = null;
            else {
                g = new PH;
                var p = !!F(n, 9);
                g.isBackfill = p;
                var q = Zm(n, 15),
                    u = Zm(n, 16);
                q.length && u.length && (g.sourceAgnosticCreativeId = q[0], g.sourceAgnosticLineItemId = u[0], p || (g.creativeId = q[0], g.lineItemId = u[0], (p = Zm(n, 22)) && p.length && (g.creativeTemplateId = p[0])));
                Zm(n, 17).length && QH(g, Zm(n, 17)[0]);
                Zm(n, 18).length && RH(g, Zm(n, 18)[0]);
                Zm(n, 19).length && SH(g, Zm(n, 19));
                Zm(n, 20).length && TH(g, Zm(n, 20));
                n = wc(n, 45, xc).map(function(A) {
                    return hc(A)
                });
                n.length && (g.encryptedTroubleshootingInfo = n[0])
            }
        });
        this.getResponseInformation = J(a, 355, function() {
            return g
        });
        this.getName = J(a, 170, function() {
            b.error(iH());
            var n = new dj("slot_get_name");
            Ph(n, a);
            fj(n);
            return c.getAdUnitPath()
        });
        var m = new JH(a, c);
        this.getSlotId = J(a, 579, function() {
            return m
        });
        this.getServices = J(a, 580, function() {
            return Pk(e, 4).map(function(n) {
                return Wi(n)
            })
        });
        this.getSizes = J(a, 581, function(n, p) {
            var q, u;
            return null != (u = null == (q = Wg(e, n, p)) ? void 0 : q.map(function(A) {
                return F(A, 3) ? "fluid" : new UH(A.getWidth(), A.getHeight())
            })) ? u : null
        });
        this.getClickUrl = J(a, 582, function() {
            var n;
            return null != (n = e.getClickUrl()) ? n : ""
        });
        this.getTargetingMap = J(a, 583, function() {
            for (var n = {}, p = _.z(mj(e)), q = p.next(); !q.done; q = p.next()) q = q.value, nj(q) && (n[nj(q)] = q.xa());
            return n
        });
        this.getOutOfPage = J(a, 584, function(n) {
            return "number" === typeof n ? gl(e) === n : 0 !== gl(e)
        });
        this.getCollapseEmptyDiv = J(a, 585, function() {
            return Qj(e, 10) ? F(e, 10) : null
        });
        this.getDivStartsCollapsed = J(a, 586, function() {
            return Qj(e, 11) ? F(e, 11) : null
        });
        GF(c, JF, function(n) {
            h = n.detail.se
        });
        this.getContentUrl = J(a, 587, function() {
            return h()
        });
        this.getFirstLook = J(a, 588, function() {
            ov("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        GF(c, IF, function(n) {
            var p;
            k = null != (p = n.detail.getEscapedQemQueryId()) ? p : ""
        });
        this.getEscapedQemQueryId = J(a, 591, function() {
            return k
        });
        this.getHtml = J(a, 592, function() {
            return l ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : f
        });
        this.setConfig = J(a, 1022, function(n) {
            var p = OH(e);
            if (void 0 !== n.componentAuction) {
                n = _.z(n.componentAuction);
                for (var q = n.next(); !q.done; q = n.next()) {
                    var u = q.value;
                    q = u.configKey;
                    u = u.auctionConfig;
                    "string" !== typeof q || lj(q) || (null === u ? p.delete(q) : u && p.set(q, JSON.stringify(u)))
                }
            }
        })
    };
    var jp = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 856);
        this.O = b;
        this.Lb = V(this);
        this.Vb = V(this);
        this.wa = V(this);
        this.J = V(this);
        this.l = V(this);
        this.B = X(this, c);
        this.F = X(this, d);
        this.o = X(this, e);
        this.M = X(this, f);
        g && vz(this, g)
    };
    _.O(jp, Z);
    var VH = function(a) {
        jz(a.Lb, a.B.value);
        jz(a.Vb, a.F.value);
        jz(a.wa, a.o.value);
        kz(a.J);
        kz(a.l)
    };
    jp.prototype.j = function() {
        var a = this.M.value;
        if (_.G(jw) && a) {
            var b = this.o.value;
            if (0 !== (null == b ? void 0 : b.kind) || b.Ca.length) {
                var c = this.O.get(a);
                if (!c) throw new nk("Could not find bid with id: " + a);
                var d = void 0 === c.height ? this.B.value : c.height,
                    e = void 0 === c.width ? this.F.value : c.width,
                    f = c.adUrl,
                    g = c.he,
                    h = void 0 === c.cpm ? 0 : c.cpm;
                if (1 !== c.format) VH(this);
                else {
                    this.J.j(c);
                    if (!g && !f) throw new nk("Could not find ad to render for bid id: " + a);
                    c = {
                        ad: rk(g, h),
                        adUrl: rk(f, h),
                        adId: a,
                        width: e,
                        height: d
                    };
                    g = btoa(JSON.stringify(c));
                    0 === (null == b ? void 0 : b.kind) ? (c = this.wa, f = c.j, b = b.Ca.replace(new RegExp("{{GOOGLE_PBJS_AD_CONFIG}}".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), g.replace(/\$/g, "$$$$")), f.call(c, {
                        kind: 0,
                        Ca: b
                    }), kz(this.l)) : (jz(this.wa, b), jz(this.l, g));
                    jz(this.Lb, d);
                    jz(this.Vb, e);
                    window.postMessage(JSON.stringify({
                        message: "Prebid Request",
                        adId: a
                    }), "*")
                }
            } else VH(this)
        } else VH(this)
    };
    var WH = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 975);
        this.o = b;
        this.l = c;
        this.B = d;
        this.pbjs = e;
        this.F = f;
        this.requestBidsConfig = g;
        this.A = new qz
    };
    _.O(WH, Z);
    WH.prototype.j = function() {
        yk(this.F, this.pbjs, this.o, this.l, this.B, this.requestBidsConfig);
        this.A.notify()
    };
    var XH = function(a, b, c) {
        Z.call(this, a, 937, _.pe(Qw));
        this.window = c;
        this.o = V(this);
        this.l = V(this);
        this.J = V(this);
        this.F = V(this);
        this.B = V(this);
        this.M = uz(this, b)
    };
    _.O(XH, Z);
    XH.prototype.j = function() {
        if (_.G(Pw) && this.window.top !== this.window) YH(this);
        else {
            var a = this.M.value;
            if (a) {
                var b = {},
                    c;
                if (null == (c = De(a, Ct, 2)) ? 0 : fp(c, 2)) b["*"] = {
                    zc: !0
                };
                c = new w.Set;
                for (var d = _.z(Oc(a, Bt, 1)), e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    for (var f = _.z([bn(e, 2), e.La()].filter(function(p) {
                            return !!p
                        })), g = f.next(); !g.done; g = f.next()) b[g.value] = {
                        zc: fp(e, 3)
                    };
                    e = _.z(Zm(e, 4));
                    for (f = e.next(); !f.done; f = e.next()) c.add(f.value)
                }
                jz(this.o, b);
                this.l.j([].concat(_.Hd(c)));
                var h, k;
                b = null == (h = De(a, Ct, 2)) ? void 0 : null == (k = De(h, st, 1)) ? void 0 : Oc(k, ut, 1);
                jz(this.J, (null == b ? 0 : b.length) ? b : null);
                var l;
                this.B.j(!(null == (l = De(a, Ct, 2)) || !fp(l, 4)));
                var m, n;
                a = null == (m = De(a, Ct, 2)) ? void 0 : null == (n = De(m, st, 3)) ? void 0 : Oc(n, ut, 1);
                jz(this.F, (null == a ? 0 : a.length) ? a : null)
            } else YH(this)
        }
    };
    var YH = function(a) {
        kz(a.o);
        a.l.j([]);
        kz(a.J);
        a.B.j(!1);
        kz(a.F)
    };
    XH.prototype.H = function(a) {
        this.m(a)
    };
    XH.prototype.m = function() {
        YH(this)
    };
    var ZH = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        $H = function(a, b, c, d, e, f, g, h, k, l, m) {
            Z.call(this, a, 920);
            this.M = b;
            this.P = e;
            this.Oa = m;
            this.F = V(this);
            this.J = V(this);
            this.l = V(this);
            this.R = [];
            this.B = new w.Map;
            this.o = new w.Map;
            this.fa = W(this, c);
            this.ca = new pz(d);
            this.O = X(this, f);
            this.aa = X(this, g);
            this.Y = W(this, h);
            this.ja = X(this, k);
            this.ia = X(this, l)
        };
    _.O($H, Z);
    $H.prototype.j = function() {
        if (aI(this)) {
            var a = this.ca.value;
            a && a.libLoaded ? "function" !== typeof a.getEvents ? (this.M.error($G()), bI(this)) : (a = cI(this, a)) ? (this.l.j(a), this.F.j(this.B), this.J.j(this.R)) : bI(this) : bI(this)
        } else bI(this)
    };
    $H.prototype.H = function(a) {
        this.m(a)
    };
    $H.prototype.m = function(a) {
        this.M.error(aH(a.message));
        bI(this)
    };
    var bI = function(a) {
            a.l.j([]);
            kz(a.F);
            kz(a.J)
        },
        cI = function(a, b) {
            var c = (0, D.K)(b.getEvents)(),
                d = c.filter(function(g) {
                    var h = g.args;
                    return "auctionEnd" === g.eventType && h.auctionId
                }),
                e = !1,
                f = a.fa.value.map(function(g) {
                    var h = new nt,
                        k = function(Da) {
                            return Da === g.getDomId() || Da === g.getAdUnitPath()
                        },
                        l, m = null != (l = dI.get(g)) ? l : 0,
                        n;
                    l = null != (n = d.filter(function(Da) {
                        var za, fb, lb;
                        return Number(null == (za = Da.args) ? void 0 : za.timestamp) > m && (null == (fb = Da.args) ? void 0 : null == (lb = fb.adUnitCodes) ? void 0 : _.v(lb, "find").call(lb, k))
                    })) ? n : [];
                    if (!l.length) return a.R.push(g), h;
                    var p;
                    n = null == (p = l.reduce(function(Da, za) {
                        return Number(za.args.timestamp) > Number(Da.args.timestamp) ? za : Da
                    })) ? void 0 : p.args;
                    if (!n) return h;
                    var q = void 0 === n.bidderRequests ? [] : n.bidderRequests;
                    p = void 0 === n.bidsReceived ? [] : n.bidsReceived;
                    var u = n.auctionId;
                    n = n.timestamp;
                    if (!u || null == n || !q.length) return h;
                    dI.has(g) || _.Om(g, function() {
                        return dI.delete(g)
                    });
                    dI.set(g, n);
                    n = ot(h);
                    Math.random() < _.pe(mw) && b.version && ZH.test(b.version) && _.y(n, 6, b.version);
                    _.sg(n, 9, a.ia.value);
                    l = new w.Map;
                    var A = th(function() {
                            return Uk(c, u)
                        }),
                        H = mj(a.P[g.getDomId()]),
                        C = {};
                    q = _.z(q);
                    for (var I = q.next(); !I.done; C = {
                            Lc: C.Lc,
                            Nc: C.Nc
                        }, I = q.next()) {
                        var R = I.value;
                        C.Lc = R.bidderCode;
                        var S = R.bids;
                        I = R.timeout;
                        C.Nc = R.src;
                        R = R.auctionStart;
                        var U = {};
                        S = _.z(S);
                        for (var Y = S.next(); !Y.done; U = {
                                Fb: U.Fb
                            }, Y = S.next()) {
                            var sa = Y.value;
                            U.Fb = sa.bidId;
                            var xa = sa.transactionId;
                            Y = sa.adUnitCode;
                            var ya = sa.getFloor;
                            sa = sa.mediaTypes;
                            if (U.Fb && k(Y)) {
                                e = !0;
                                Hk(n, g, Y);
                                xa && (Ie(n, 4) || _.y(n, 4, xa), a.B.has(xa) || a.B.set(xa, R));
                                Qj(n, 8) || _.y(n, 8, I);
                                var va = _.v(p, "find").call(p, function(Da) {
                                    return function(za) {
                                        return za.requestId === Da.Fb
                                    }
                                }(U));
                                xa = Ak(n, function(Da) {
                                    return function() {
                                        var za = Dk(new Ek, Da.Lc);
                                        switch (Da.Nc) {
                                            case "client":
                                                _.y(za, 7, 1);
                                                break;
                                            case "s2s":
                                                _.y(za, 7, 2)
                                        }
                                        return za
                                    }
                                }(C)());
                                Jk(n, xa, Y, a.aa.value, a.Y.value, a.ja.value, ya);
                                va ? (Ck(xa, 1), "number" === typeof va.timeToRespond && Fk(xa, va.timeToRespond), Y = zk(va, l, H, sa), Bk(xa, Y)) : (Y = A().get(U.Fb)) && !Y.Ld ? Fk(Ck(xa, 2), Math.round(Y.latency)) : Fk(Ck(xa, 3), I)
                            }
                        }
                    }
                    var qb;
                    (null == (qb = b.getConfig) ? 0 : qb.call(b).useBidCache) && Gk(n, g, u, H, l, b);
                    a.o.set(g, l);
                    return h
                });
            return e ? f : []
        },
        aI = function(a) {
            var b, c;
            return !!(null == (b = a.O.value) ? 0 : null == (c = b["*"]) ? 0 : c.zc) || a.Oa.split(",").some(function(d) {
                var e, f;
                return !!(null == (e = a.O.value) ? 0 : null == (f = e[d]) ? 0 : f.zc)
            })
        },
        dI = new w.Map;
    var eI, fI = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1019);
        this.P = g;
        this.l = new pz(b);
        this.B = new pz(c);
        this.F = new pz(d);
        this.o = X(this, e);
        this.J = X(this, f)
    };
    _.O(fI, Z);
    fI.prototype.j = function() {
        gI(this);
        hI(this)
    };
    var hI = function(a) {
            if (!(Math.random() >= _.pe(iw))) {
                var b = (a.J.value || []).filter(function(k) {
                    return mj(a.P[k.getDomId()]).some(function(l) {
                        return "hb_pb" === x(l, 1)
                    })
                });
                if (b.length) {
                    var c, d, e, f, g, h = (null == (c = a.l.value) ? 0 : null == (d = c.adUnits) ? 0 : d.length) ? [].concat(_.Hd(new w.Set(null == (e = a.l.value) ? void 0 : e.adUnits.map(function(k) {
                        return k.code
                    })))) : _.v(Object, "keys").call(Object, (null == (f = a.l.value) ? void 0 : null == (g = f.getAdserverTargeting) ? void 0 : g.call(f)) || {});
                    c = new dj("haux");
                    K(c, "ius", b.map(function(k) {
                        return k.getAdUnitPath()
                    }).join("~"));
                    K(c, "dids", b.map(function(k) {
                        return k.getDomId()
                    }).join("~"));
                    K(c, "paucs", h.join("~"));
                    Ph(c, a.context);
                    fj(c, 1)
                }
            }
        },
        gI = function(a) {
            Jh("ppc_hrc", function(b) {
                var c;
                null != eI || (eI = (0, D.ra)(null == (c = (E = window.google_js_reporting_queue = window.google_js_reporting_queue || [], _.v(E, "find")).call(E, function(g) {
                    return "1" === g.label
                })) ? void 0 : c.value));
                var d = By("navigationStart", window);
                eI && K(b, "lt", eI);
                var e;
                K(b, "tids", [].concat(_.Hd((null == (e = a.o.value) ? void 0 : _.v(e, "keys").call(e)) || [])).join());
                var f;
                K(b, "asts", [].concat(_.Hd((null == (f = a.o.value) ? void 0 : _.v(f, "values").call(f)) || [])).map(function(g) {
                    return g - d
                }).join());
                a.B.value ? K(b, "ht", a.B.value - d) : a.F.value && K(b, "ht", _.G(kw) ? eI : 0);
                Ph(b, a.context)
            }, a.o.value ? _.pe(hw) : 0)
        };
    var ip = function(a, b, c, d, e) {
        Z.call(this, a, 982);
        this.A = tz(this);
        this.o = X(this, b);
        this.l = new pz(c);
        this.F = W(this, d);
        this.B = W(this, e)
    };
    _.O(ip, Z);
    ip.prototype.j = function() {
        var a = this,
            b;
        if (this.o.value && (null == (b = this.l.value) ? 0 : b.onEvent)) {
            b = {};
            for (var c = _.z(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), d = c.next(); !d.done; b = {
                    Gb: b.Gb,
                    Xb: b.Xb
                }, d = c.next()) b.Gb = d.value, b.Xb = function(e) {
                return function(f) {
                    if (a.o.value === f.adId) {
                        var g = new dj("hbm_brt");
                        Ph(g, a.context);
                        K(g, "et", e.Gb);
                        K(g, "sf", a.F.value);
                        K(g, "qqid", a.B.value);
                        var h, k, l;
                        K(g, "bc", String(null != (l = null != (k = f.bidderCode) ? k : null == (h = f.bid) ? void 0 : h.bidder) ? l : ""));
                        fj(g, 1)
                    }
                }
            }(b), this.l.value.onEvent(b.Gb, b.Xb), _.Om(this, function(e) {
                return function() {
                    return void _.Hg(a.context, a.id, function() {
                        var f, g;
                        return void(null == (f = a.l.value) ? void 0 : null == (g = f.offEvent) ? void 0 : g.call(f, e.Gb, e.Xb))
                    }, !0)
                }
            }(b))
        }
        this.A.notify()
    };
    ip.prototype.m = function() {
        this.A.notify()
    };
    var iI = function(a, b, c, d, e, f) {
        Z.call(this, a, 976);
        this.nextFunction = d;
        this.l = e;
        this.requestBidsConfig = f;
        vz(this, b);
        vz(this, c)
    };
    _.O(iI, Z);
    iI.prototype.j = function() {
        var a;
        null == (a = this.nextFunction) || a.apply(this.l, [this.requestBidsConfig])
    };
    var jI = function(a, b, c, d, e) {
        Z.call(this, a, 981);
        this.pbjs = b;
        this.o = c;
        this.l = d;
        this.requestBidsConfig = e;
        this.A = new qz
    };
    _.O(jI, Z);
    jI.prototype.j = function() {
        var a, b, c = null != (b = null == (a = this.o) ? void 0 : a.get("*")) ? b : _.pe(nw);
        if (c) {
            var d;
            null != (d = this.l) && _.y(d, 1, 1);
            this.requestBidsConfig.timeout = c;
            var e, f, g;
            a = _.z(null != (g = null == (f = (e = this.pbjs).getConfig) ? void 0 : f.call(e).s2sConfig) ? g : []);
            for (e = a.next(); !e.done; e = a.next()) e.value.timeout = c;
            var h, k;
            null == (k = (h = this.pbjs).setConfig) || k.call(h, {
                bidderTimeout: c
            })
        }
        this.A.notify()
    };
    var kI = function(a, b, c, d, e, f, g) {
        _.Px.call(this);
        this.j = a;
        this.C = b;
        this.m = c;
        this.l = d;
        this.o = e;
        this.H = f;
        this.pbjs = g
    };
    _.O(kI, _.Px);
    kI.prototype.push = function(a) {
        var b = a.context,
            c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            var d = new Ne;
            _.Hm(this, d);
            var e = new jI(this.j, this.pbjs, this.o, this.H, a),
                f = new WH(this.j, this.C, this.m, this.l, this.pbjs, b, a);
            N(d, e);
            N(d, f);
            N(d, new iI(this.j, f.A, e.A, c, b, a));
            Xe(d)
        }
    };
    var lI = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 951);
        this.G = window;
        this.l = V(this);
        this.o = V(this);
        this.M = W(this, b);
        this.F = X(this, d);
        this.J = W(this, e);
        this.R = X(this, f);
        this.B = X(this, g);
        this.O = X(this, h);
        vz(this, c)
    };
    _.O(lI, Z);
    lI.prototype.j = function() {
        var a = !!Ti().pbjs_hooks;
        this.o.j(a);
        jz(this.l, a ? null : _.ue());
        var b, c = null == (b = this.F.value) ? void 0 : b.size,
            d;
        b = (null == (d = this.B.value) ? void 0 : d.size) || _.pe(nw);
        d = this.M.value;
        var e, f = null != (e = Ti().pbjs_hooks) ? e : [];
        e = new kI(this.context, this.F.value, this.J.value, this.R.value, this.B.value, this.O.value, d);
        _.Hm(this, e);
        f = _.z(f);
        for (var g = f.next(); !g.done; g = f.next()) e.push(g.value);
        if (c || b || a) Ti().pbjs_hooks = Xk(this.context, e);
        !c && !b || a || Vk(d, this.G)
    };
    var mI = {},
        Yk = (mI[64] = bH, mI[134217728] = cH, mI[32768] = dH, mI[536870912] = eH, mI[8] = fH, mI[512] = gH, mI[1048576] = hH, mI[4194304] = jH, mI);
    var hl = function(a) {
        return "22639388115" === kg(a.getAdUnitPath())
    };
    var nI = null;
    var Nl = 0,
        oI = new _.ih(-9, -9);
    var Rl = 0;
    var pI = new w.Set([function(a, b) {
            var c = a.ga.context.pvsid;
            a = a.ba.N.U;
            b = void 0 === b ? new w.Map : b;
            return b.set("pvsid", {
                value: c
            }).set("correlator", {
                value: x(a, 26)
            })
        }, function(a, b) {
            var c = a.de;
            a = c.nb;
            var d = c.Db;
            c = c.sb;
            b = void 0 === b ? new w.Map : b;
            "wbn" === a && b.set("wbsu", {
                value: (0, D.K)(d).toString().replace(/^uuid-in-package:/, "")
            }).set("callback", {
                value: c
            });
            return b
        }, function(a, b) {
            var c = a.ba.N.U,
                d = a.cf;
            a = d.me;
            var e = d.jf;
            d = d.Ue;
            b = void 0 === b ? new w.Map : b;
            if (_.G(Hw)) return b;
            c = 0 === be(c, 24, 0);
            return b.set("adsid", {
                value: c ? a : null
            }).set("pucrd", {
                value: c ? e : null
            }).set("jar", {
                value: d
            })
        }, function(a, b) {
            var c = a.ba.N.U,
                d = a.Hf;
            a = d.Bb;
            d = d.Ab;
            b = void 0 === b ? new w.Map : b;
            var e = F(c, 21);
            return b.set("hxva", {
                value: e ? 1 : null
            }).set("cmsid", {
                value: e ? x(c, 23) : null
            }).set("vid", {
                value: e ? x(c, 22) : null
            }).set("pod", {
                value: d
            }).set("ppos", {
                value: a
            }).set("scor", {
                value: us(c, 29)
            })
        }, function(a, b) {
            var c = a.ga.Zc;
            a = a.ba;
            var d = a.X,
                e = a.N.P;
            b = void 0 === b ? new w.Map : b;
            return b.set("eid", {
                value: c
            }).set("debug_experiment_id", {
                value: zy().split(",")
            }).set("expflags", {
                value: _.og(253) ? Cj(vw) || null : null
            }).set("pied", {
                value: _.G(Ww) ? ul(d, function(f) {
                    var g;
                    return (f = null == (g = e[f.getDomId()]) ? void 0 : De(g, Lt, 25)) ? gc(Ns(f, Nt), 3) : ""
                }, {
                    ka: "~"
                }) : null
            })
        }, function(a, b) {
            var c = a.ga.context,
                d = a.de.nb;
            a = a.ba.N.U;
            b = void 0 === b ? new w.Map : b;
            return b.set("output", {
                value: d
            }).set("gdfp_req", {
                value: 1
            }).set("vrg", {
                value: c.lb ? String(c.lb) : c.Ha
            }).set("ptt", {
                value: 17
            }).set("impl", {
                value: F(a, 6) ? "fifs" : "fif"
            })
        }, function(a, b) {
            a = a.ba.N.U;
            b = void 0 === b ? new w.Map : b;
            return b.set("co", {
                value: 0 !== be(a, 24, 0) ? be(a, 24, 0) : null,
                options: {
                    Da: !0
                }
            })
        }, function(a, b) {
            var c = a.ba.N.U;
            a = a.ga.Z;
            b = void 0 === b ? new w.Map : b;
            c = CE(c) || new zE;
            var d = be(c, 6, 2),
                e, f, g, h;
            return b.set("rdp", {
                value: F(c, 1) ? "1" : null
            }).set("ltd", {
                value: F(c, 9) ? "1" : null
            }).set("gdpr_consent", {
                value: null != (e = ws(a, 2)) ? e : null
            }).set("gdpr", {
                value: Qj(a, 3) ? F(a, 3) ? "1" : "0" : null,
                options: {
                    Da: !0
                }
            }).set("addtl_consent", {
                value: null != (f = ws(a, 4)) ? f : null
            }).set("tcfe", {
                value: null != (g = us(a, 7)) ? g : null
            }).set("us_privacy", {
                value: null != (h = ws(a, 1)) ? h : null
            }).set("npa", {
                value: F(a, 6) || F(c, 8) ? 1 : null
            }).set("puo", {
                value: _.G(Vw) && F(c, 13) ? 1 : null
            }).set("tfua", {
                value: 2 !== d ? d : null,
                options: {
                    Da: !0
                }
            }).set("tfcd", {
                value: Qj(c, 5) ? x(c, 5) : null,
                options: {
                    Da: !0
                }
            }).set("trt", {
                value: Qj(c, 10) ? x(c, 10) : null,
                options: {
                    Da: !0
                }
            }).set("tad", {
                value: Qj(a, 8) ? F(a, 8) ? "1" : "0" : null,
                options: {
                    Da: !0
                }
            })
        }, function(a, b) {
            var c = a.ba,
                d = c.N,
                e = c.X,
                f = c.fd;
            c = a.ga;
            var g = c.G;
            a = c.L;
            c = c.Ia;
            b = void 0 === b ? new w.Map : b;
            var h = e.map(function(m) {
                    return d.P[m.getDomId()]
                }),
                k = [],
                l = e.map(function(m) {
                    return m.getAdUnitPath().replace(/,/g, ":").split("/").map(function(n) {
                        if (!n) return "";
                        var p = _.v(k, "findIndex").call(k, function(q) {
                            return q === n
                        });
                        return 0 <= p ? p : k.push(n) - 1
                    }).join("/")
                });
            return b.set("iu_parts", {
                value: k
            }).set("enc_prev_ius", {
                value: l
            }).set("prev_iu_szs", {
                value: h.map(function(m) {
                    return ah(m)
                })
            }).set("fluid", {
                value: function() {
                    var m = !1,
                        n = h.map(function(p) {
                            p = (E = Yg(p), _.v(E, "includes")).call(E, "fluid");
                            m || (m = p);
                            return p ? "height" : "0"
                        });
                    return m ? n : null
                }()
            }).set("ifi", {
                value: function() {
                    var m = Qh(g);
                    if (!f) {
                        m += 1;
                        var n = g,
                            p = e.length;
                        p = void 0 === p ? 1 : p;
                        n = Cv(yd(n)) || n;
                        n.google_unique_id = (n.google_unique_id || 0) + p
                    }
                    return m
                }()
            }).set("adks", {
                value: Ql(e, a, c, d)
            }).set("didk", {
                value: _.G(cx) ? ul(e, function(m) {
                    return bh(m.getDomId())
                }, {
                    ka: "~"
                }) : null
            })
        }, function(a, b) {
            var c = a.ga.G,
                d = a.ba;
            a = d.X;
            d = d.N;
            var e = d.U,
                f = d.P;
            b = void 0 === b ? new w.Map : b;
            return b.set("sfv", {
                value: (null != c ? c : window).postMessage ? xH ? xH : xH = Ej() : null
            }).set("fsfs", {
                value: ul(a, function(g) {
                    g = f[g.getDomId()];
                    var h;
                    return Number(null != (h = null == g ? void 0 : vs(g, 12)) ? h : F(e, 13))
                }, {
                    Jb: 0
                })
            }).set("fsbs", {
                value: ul(a, function(g) {
                    g = f[g.getDomId()].Ra();
                    var h = e.Ra(),
                        k;
                    return (null != (k = null == g ? void 0 : vs(g, 3)) ? k : null == h ? 0 : F(h, 3)) ? 1 : 0
                }, {
                    Jb: 0
                })
            })
        }, function(a, b) {
            var c = a.ga,
                d = c.L,
                e = c.G;
            a = a.ba;
            c = a.X;
            var f = a.fd;
            b = void 0 === b ? new w.Map : b;
            return b.set("ris", {
                value: ul(c, function(g) {
                    var h, k;
                    g = null != (k = null == (h = d.j.get(g)) ? void 0 : h.Md) ? k : 0;
                    h = _.Ay(e);
                    return g && h ? Math.round(Math.min((h - g) / 1E3, 1800)) : null
                }, {
                    ka: "~"
                })
            }).set("rcs", {
                value: ul(c, function(g) {
                    if (!f) {
                        var h = void 0 === h ? _.t : h;
                        var k = d.j.get(g);
                        k && (k.Md = _.Ay(h) || 0, k.Wd++)
                    }
                    return XF(d, g)
                }, {
                    Jb: 0
                })
            })
        }, function(a, b) {
            var c = a.ba,
                d = c.N.P;
            c = c.X;
            a = a.ga.Ia;
            b = void 0 === b ? new w.Map : b;
            d = d[c[0].getDomId()];
            return b.set("click", {
                value: !a && d.getClickUrl() ? x(d, 7) : null
            })
        }, function(a, b, c) {
            var d = a.ba,
                e = d.X,
                f = d.N.P;
            a = a.ga;
            var g = a.Z,
                h = a.G;
            b = void 0 === b ? new w.Map : b;
            c = void 0 === c ? function(k, l) {
                return ke(k, l)
            } : c;
            a = e.map(function(k) {
                return f[k.getDomId()]
            });
            return b.set("ists", {
                value: tl(a, function(k) {
                    return 0 !== gl(k)
                }) || null
            }).set("fas", {
                value: ul(a, function(k) {
                    return kl(gl(k))
                }, {
                    Jb: 0
                })
            }).set("itsi", {
                value: e.some(function(k) {
                    var l;
                    return !hl(k) && 5 === (null == (l = f[k.getDomId()]) ? void 0 : gl(l))
                }) ? function() {
                    var k = c(g, h);
                    if (!k) return 1;
                    var l;
                    k = Math.max.apply(Math, _.Hd(null != (l = _.el((0, D.K)(k), 604800)) ? l : []));
                    return isFinite(k) ? Math.floor(Math.max((Date.now() - k) / 6E4, 1)) : null
                }() : null
            }).set("fsapi", {
                value: _.G(_.Iw)
            })
        }, function(a, b) {
            a = a.ba;
            var c = a.X,
                d = a.N.P;
            b = void 0 === b ? new w.Map : b;
            a = c.map(function(e) {
                return d[e.getDomId()]
            });
            return b.set("rbvs", {
                value: tl(a, function(e) {
                    return 4 === gl(e)
                }) || null
            })
        }, function(a, b) {
            var c = a.ba,
                d = c.N,
                e = c.N.U,
                f = c.X;
            c = c.bb;
            var g = a.ga;
            a = g.isSecureContext;
            g = g.G;
            b = void 0 === b ? new w.Map : b;
            b = b.set("prev_scp", {
                value: Fl(f, d)
            });
            var h = b.set,
                k = d.U,
                l = d.P,
                m = new Kh;
            m.set(0, 1 !== c);
            l = l[f[0].getDomId()];
            m.set(1, !!F(l, 17));
            m.set(2, Ll(f, d));
            m.set(3, F(k, 27) || !1);
            m.set(4, 3 === c);
            d = Mh(m);
            return h.call(b, "eri", {
                value: d
            }).set("cust_params", {
                value: Hl(e),
                options: {
                    ka: "&"
                }
            }).set("ppid", {
                value: 1 !== be(e, 24, 0) && Ie(e, 16) ? x(e, 16) : null,
                options: {
                    Da: !0
                }
            }).set("gct", {
                value: Cl("google_preview", g)
            }).set("sc", {
                value: a ? 1 : 0,
                options: {
                    Da: !0
                }
            })
        }, function(a, b) {
            var c = a.ga,
                d = c.G,
                e = c.Z;
            c = c.Ba;
            a = a.ba.N.U;
            b = void 0 === b ? new w.Map : b;
            var f = Il(a.sa());
            if (0 !== be(a, 24, 0)) return b;
            var g = Oz(c, "__gads", e);
            a = "1" === Oz(c, "__gpi_opt_out", e) ? "1" : null;
            b = b.set("cookie", {
                value: g,
                options: {
                    Da: !0
                }
            }).set("cookie_enabled", {
                value: !g && Pz(c, e) ? "1" : null
            });
            g = d.document;
            var h = g.domain;
            d = b.set.call(b, "cdm", {
                value: (f || gh(d)) === g.URL ? "" : h
            });
            f = d.set;
            e = (e = Oz(c, "__gpi", e)) && !_.v(e, "includes").call(e, "&") ? e : null;
            return f.call(d, "gpic", {
                value: e
            }).set("gpico", {
                value: a
            }).set("pdopt", {
                value: a
            })
        }, function(a, b) {
            a = a.ga.G;
            b = void 0 === b ? new w.Map : b;
            return b.set("arp", {
                value: Fi(a) ? 1 : null
            }).set("abxe", {
                value: vd(a.top) || iv(a.IntersectionObserver) ? 1 : null
            })
        }, function(a, b) {
            var c = a.ba.N.U;
            a = a.ga.G;
            b = void 0 === b ? new w.Map : b;
            c = Il(c.sa());
            b.set("dt", {
                value: (new Date).getTime()
            });
            if (!c) {
                try {
                    var d = Math.round(Date.parse(a.document.lastModified) / 1E3) || null
                } catch (e) {
                    d = null
                }
                b.set("lmt", {
                    value: d
                })
            }
            d = Rl;
            a = ug(a);
            0 < a && d >= a && b.set("dlt", {
                value: a
            }).set("idt", {
                value: d - a
            });
            return b
        }, function(a, b) {
            var c = a.ba,
                d = c.N,
                e = c.X,
                f = c.N;
            c = f.U;
            f = f.P;
            var g = a.ga;
            a = g.G;
            var h = g.Ia;
            b = void 0 === b ? new w.Map : b;
            g = Xg(!0, a);
            for (var k = a.document, l = [], m = [], n = _.z(e), p = n.next(); !p.done; p = n.next()) {
                p = p.value;
                var q = f[p.getDomId()];
                p = yh(p, q, k, eh(c, q));
                q = void 0;
                var u = h ? null != (q = p) ? q : oI : p;
                u && (l.push(Math.round(u.x)), m.push(Math.round(u.y)))
            }
            g && (d.Cb = g);
            c = fh(a) ? null : Xg(!1, a);
            try {
                var A = a.top;
                var H = Ml(A.document, A)
            } catch (C) {
                H = new _.ih(-12245933, -12245933)
            }
            return b.set("adxs", {
                value: l
            }).set("adys", {
                value: m
            }).set("biw", {
                value: g ? g.width : null
            }).set("bih", {
                value: g ? g.height : null
            }).set("isw", {
                value: g ? null == c ? void 0 : c.width : null
            }).set("ish", {
                value: g ? null == c ? void 0 : c.height : null
            }).set("scr_x", {
                value: Math.round(H.x),
                options: {
                    Da: !0
                }
            }).set("scr_y", {
                value: Math.round(H.y),
                options: {
                    Da: !0
                }
            }).set("btvi", {
                value: Ol(e, a, d),
                options: {
                    Da: !0,
                    ka: "|"
                }
            })
        }, function(a, b) {
            var c = a.ba.X,
                d = a.ga.L;
            b = void 0 === b ? new w.Map : b;
            return b.set("ucis", {
                value: c.map(function(e) {
                    e = (0, D.K)(d.j.get(e));
                    null != e.Ub || (e.Ub = window === window.top ? (++d.o).toString(36) : Eu());
                    return e.Ub
                }),
                options: {
                    ka: "|"
                }
            }).set("oid", {
                value: 2
            })
        }, function(a, b) {
            a = a.ba;
            var c = a.X;
            a = a.N;
            var d = a.U,
                e = a.P;
            b = void 0 === b ? new w.Map : b;
            a = new w.Map;
            d = _.z(d.sa());
            for (var f = d.next(); !f.done; f = d.next()) {
                var g = f.value;
                a.set((0, D.K)(nj(g)), [g.xa()[0]])
            }
            for (d = 0; d < c.length; d++)
                if (g = e[c[d].getDomId()])
                    for (g = _.z(g.sa()), f = g.next(); !f.done; f = g.next()) {
                        var h = f.value;
                        f = (0, D.K)(nj(h));
                        var k = a.get(f) || [];
                        h = h.xa()[0];
                        1 === c.length ? k[0] = h : h !== k[0] && (k[d + 1] = h);
                        a.set(f, k)
                    }
            c = [];
            e = _.z(_.v(a, "keys").call(a));
            for (d = e.next(); !d.done; d = e.next()) g = d.value, d = ZF()[g], g = a.get(g), d && g && (1 < g.length ? (g = g.map(function(l) {
                return encodeURIComponent(l || "")
            }).join(), c.push(d + "," + g)) : 1 === g.length && "url" !== d && b.set(d, {
                value: g[0]
            }));
            c.length && b.set("sps", {
                value: c.join("|")
            });
            return b
        }, function(a, b) {
            var c = a.ba.N.U;
            a = a.ga.G;
            b = void 0 === b ? new w.Map : b;
            var d = _.og(251),
                e, f, g, h, k, l, m;
            var n = a;
            n = void 0 === n ? yu : n;
            try {
                var p = n.history.length
            } catch (fb) {
                p = 0
            }
            b = b.set("u_his", {
                value: p
            }).set("u_h", {
                value: null == (e = a.screen) ? void 0 : e.height
            }).set("u_w", {
                value: null == (f = a.screen) ? void 0 : f.width
            }).set("u_ah", {
                value: null == (g = a.screen) ? void 0 : g.availHeight
            }).set("u_aw", {
                value: null == (h = a.screen) ? void 0 : h.availWidth
            }).set("u_cd", {
                value: null == (k = a.screen) ? void 0 : k.colorDepth
            });
            e = b.set;
            f = a;
            f = void 0 === f ? _.t : f;
            f = f.devicePixelRatio;
            e = e.call(b, "u_sd", {
                value: "number" === typeof f ? +f.toFixed(3) : null
            }).set("u_tz", {
                value: -(new Date).getTimezoneOffset()
            });
            f = e.set;
            try {
                var q, u, A, H, C = null != (H = null == (q = a.external) ? void 0 : null == (u = q.getHostEnvironmentValue) ? void 0 : null == (A = u.bind(a.external)) ? void 0 : A("os-mode")) ? H : "",
                    I, R = Number(null == (I = JSON.parse(C)) ? void 0 : I["os-mode"]);
                var S = 0 <= R ? R + 1 : null
            } catch (fb) {
                S = null
            }
            S = f.call(e, "wsm", {
                value: S
            }).set("dmc", {
                value: null != (m = null == (l = a.navigator) ? void 0 : l.deviceMemory) ? m : null
            });
            l = S.set;
            (c = x(c, 8)) ? (50 < c.length && (c = c.substring(0, 50)), c = "a " + cs('role:1 producer:12 loc:"' + c + '"')) : c = "";
            c = l.call(S, "uule", {
                value: c
            });
            l = c.set;
            m = a;
            m = void 0 === m ? _.t : m;
            S = new Kh;
            m.SVGElement && m.document.createElementNS && S.set(0);
            q = hv();
            q["allow-top-navigation-by-user-activation"] && S.set(1);
            q["allow-popups-to-escape-sandbox"] && S.set(2);
            m.crypto && m.crypto.subtle && S.set(3);
            m.TextDecoder && m.TextEncoder && S.set(4);
            m = Mh(S);
            d = l.call(c, "bc", {
                value: m
            }).set("uach", {
                value: d ? cs(d, 3) : null
            });
            c = d.set;
            if (_.og(221)) var U = null;
            else if (l = null == (U = a.navigator) ? void 0 : U.userActivation) {
                U = 0;
                if (null == l ? 0 : l.hasBeenActive) U |= 1;
                if (null == l ? 0 : l.isActive) U |= 2
            } else U = void 0;
            U = c.call(d, "uas", {
                value: U
            });
            d = U.set;
            a: {
                try {
                    var Y, sa, xa = null == (Y = a.performance) ? void 0 : null == (sa = Y.getEntriesByType("navigation")) ? void 0 : sa[0];
                    if (null == xa ? 0 : xa.type) {
                        var ya;
                        var va = null != (ya = HD.get(xa.type)) ? ya : null;
                        break a
                    }
                } catch (fb) {}
                var qb, Da, za;va = null != (za = ID.get(null == (qb = a.performance) ? void 0 : null == (Da = qb.navigation) ? void 0 : Da.type)) ? za : null
            }
            return d.call(U, "nvt", {
                value: va
            })
        }, function(a, b) {
            var c = a.ga,
                d = c.G,
                e = c.L,
                f = c.Ia;
            c = a.ba;
            var g = c.X;
            c = c.N;
            var h = c.U,
                k = c.P;
            a = a.ef.He;
            b = void 0 === b ? new w.Map : b;
            c = Dl("google_preview", d);
            var l = d.document,
                m = c ? Jl(l.URL) : l.URL;
            l = c ? Jl(l.referrer) : l.referrer;
            c = !1;
            if (f) f = Il(h.sa());
            else {
                var n;
                f = null != (n = Il(k[g[0].getDomId()].sa())) ? n : Il(h.sa())
            }
            if (null != f) {
                var p = m;
                fh(d) || (l = "", c = !0)
            } else f = m;
            n = Kl(d);
            b.set("nhd", {
                value: n || null
            }).set("url", {
                value: f
            }).set("loc", {
                value: null !== p && p !== f ? p : null
            }).set("ref", {
                value: l
            });
            if (n) {
                p = b;
                n = p.set;
                var q;
                var u, A;
                f = vd(d.top) && (null == (u = d.top) ? void 0 : null == (A = u.location) ? void 0 : A.href);
                var H;
                u = null == (H = d.location) ? void 0 : H.ancestorOrigins;
                d = Di(d) || "";
                H = (null == u ? void 0 : u[u.length - 1]) || "";
                _.G(Dx) ? (g = (A = H && Xu(H.match(_.Wu)[3] || null) && Xu(H.match(_.Wu)[3] || null) !== Xu(d.match(_.Wu)[3] || null)) ? H : d || H, u = null != (q = null == u ? void 0 : u.length) ? q : 0, .001 > ee() && je({
                    uaoo: A ? "1" : "0",
                    ltw: f || "",
                    rtw: d,
                    aotw: H,
                    aol: String(u)
                }, "tpurl"), q = f || g || "") : q = f || d || H;
                q = q ? c ? Xu(q.match(_.Wu)[3] || null) : q : null;
                n.call(p, "top", {
                    value: q
                }).set("etu", {
                    value: e.ic
                })
            }
            return b.set("scar", {
                value: a
            })
        }, function(a, b) {
            a = a.ga.context.pvsid;
            b = void 0 === b ? new w.Map : b;
            return b.set("rumc", {
                value: _.G(Fx) || _.lg(Cg).j ? a : null
            }).set("rume", {
                value: _.G(Kw) ? 1 : null
            })
        }, function(a, b) {
            a = a.ga.G;
            b = void 0 === b ? new w.Map : b;
            var c = b.set;
            var d = wv(a);
            var e = ry(a, a.google_ad_width, a.google_ad_height);
            var f = d.location.href;
            if (d == d.top) f = !0;
            else {
                var g = !1,
                    h = d.document;
                h && h.referrer && (f = h.referrer, d.parent == d.top && (g = !0));
                (d = d.location.ancestorOrigins) && (d = d[d.length - 1]) && -1 == f.indexOf(d) && (g = !1, f = d);
                f = g
            }
            g = a.top == a ? 0 : vd(a.top) ? 1 : 2;
            d = 4;
            e || 1 != g ? e || 2 != g ? e && 1 == g ? d = 7 : e && 2 == g && (d = 8) : d = 6 : d = 5;
            f && (d |= 16);
            e = "" + d;
            if (a != a.top)
                for (f = a; f && f != f.top && vd(f) && !f.sf_ && !f.$sf && !f.inGptIF && !f.inDapIF; f = f.parent);
            return c.call(b, "frm", {
                value: e || null
            }).set("vis", {
                value: MD(a.document)
            })
        }, function(a, b) {
            var c = a.ba.X;
            a = a.ga.G;
            b = void 0 === b ? new w.Map : b;
            for (var d = [], e = [], f = _.z(c), g = f.next(); !g.done; g = f.next()) {
                var h = void 0,
                    k = void 0,
                    l = void 0;
                var m = a;
                g = sh(g.value);
                var n = lv((null == g ? void 0 : g.parentElement) && uh(g.parentElement, m) || null);
                !n || 1 === n[0] && 1 === n[3] ? (n = null != (l = null == g ? void 0 : g.parentElement) ? l : null, l = null != (k = mh(n)) ? k : new _.lh(0, 0), Al(l, n, m, 100), k = null != (h = mh(g)) ? h : new _.lh(0, 0), Al(k, g, m, 1), -1 === l.height && (k.height = -1), m = l, k = h = k, h = m.width + "x" + m.height, m = k.width + "x" + k.height) : m = h = "-1x-1";
                d.push(h);
                e.push(m)
            }
            null == nI && (f = ry(a, 500, 300), m = a.navigator, h = m.userAgent, k = m.platform, m = m.product, !/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && /^Opera/.test(h) ? h = !1 : /Win/.test(k) && /Trident/.test(h) && 11 <= a.document.documentMode ? h = !0 : (k = (/WebKit\/(\d+)/.exec(h) || [0, 0])[1], g = (/rv:(\d+\.\d+)/.exec(h) || [0, 0])[1], h = !k && "Gecko" === m && 27 <= g && !/ rv: 1\.8([^.] |\.0) /.test(h) || 536 <= k ? !0 : !1), nI = h && !f);
            g = 0 !== (0, _.nl)();
            f = Xg(!0, a, g).width;
            h = [];
            m = [];
            k = [];
            null !== a && a != a.top && (l = Xg(!1, a).width, (-12245933 === f || -12245933 === l || l < f) && k.push(8)); - 12245933 !== f && (1.5 * f < a.document.documentElement.scrollWidth ? k.push(10) : g && 1.5 * a.outerWidth < f && k.push(10));
            c = _.z(c);
            for (l = c.next(); !l.done; l = c.next()) {
                g = new Kh;
                n = sh(l.value);
                l = 0;
                var p = !1,
                    q = !1;
                if (n) {
                    for (var u = 0, A = n; A && 100 > u; u++, A = A.parentElement) {
                        var H = uh(A, a);
                        if (H) {
                            var C = H,
                                I = C.display,
                                R = C.overflowX;
                            if ("visible" !== C.overflowY && (g.set(2), (C = mh(A)) && (l = l ? Math.min(l, C.width) : C.width), g.get(9))) break;
                            wl(H) && g.set(9);
                            "none" === I && g.set(7);
                            "IFRAME" === A.nodeName && (H = parseInt(H.width, 10), H < f && (g.set(8), l = l ? Math.min(H, l) : H));
                            q || (q = "scroll" === R || "auto" === R);
                            p || (p = "flex" === I)
                        } else g.set(3)
                    }
                    q && p && (n = n.getBoundingClientRect().left, (n > f || 0 > n) && g.set(11))
                } else g.set(1);
                n = _.z(k);
                for (p = n.next(); !p.done; p = n.next()) g.set(p.value);
                h.push(Mh(g));
                m.push(l)
            }
            return b.set("psz", {
                value: d,
                options: {
                    ka: "|"
                }
            }).set("msz", {
                value: e,
                options: {
                    ka: "|"
                }
            }).set("fws", {
                value: h
            }).set("ohw", {
                value: m
            }).set("ea", {
                value: nI ? null : "0",
                options: {
                    Da: !0
                }
            })
        }, function(a, b) {
            var c = a.ba,
                d = c.X,
                e = c.N.P,
                f = a.ga.G;
            b = void 0 === b ? new w.Map : b;
            a = d.map(function(g) {
                return e[g.getDomId()]
            });
            c = a.some(function(g) {
                return Zg(g, $g, 16)
            });
            return b.set("rtgs", {
                value: c ? a.map(function(g) {
                    return Zg(g, $g, 16) ? Yg(g).length ? "1" : "2" : "0"
                }) : null,
                options: {
                    ka: "!"
                }
            }).set("max_w", {
                value: c ? a.map(function(g) {
                    return Tl(De(g, $g, 16), f)
                }) : null,
                options: {
                    ka: "!"
                }
            }).set("max_h", {
                value: c ? a.map(function(g) {
                    return Ul(De(g, $g, 16), f)
                }) : null,
                options: {
                    ka: "!"
                }
            }).set("min_w", {
                value: c ? a.map(function(g) {
                    return Vl(De(g, $g, 16))
                }) : null,
                options: {
                    ka: "!"
                }
            }).set("min_h", {
                value: c ? a.map(function(g) {
                    return Wl(De(g, $g, 16))
                }) : null,
                options: {
                    ka: "!"
                }
            })
        }, function(a, b) {
            var c = a.ga.L;
            a = a.ba.X;
            b = void 0 === b ? new w.Map : b;
            return b.set("psts", {
                value: WF(c, a)
            })
        }, function(a, b) {
            var c = a.ga;
            a = c.Z;
            c = c.G;
            b = void 0 === b ? new w.Map : b;
            var d;
            var e = c.document.domain,
                f = null != (d = F(a, 5) && le(c) ? c.document.cookie : null) ? d : "",
                g = c.history.length,
                h = c.screen,
                k = c.document.referrer;
            if (yd()) var l = window.gaGlobal || {};
            else {
                var m = Math.round((new Date).getTime() / 1E3),
                    n = c.google_analytics_domain_name;
                e = "undefined" == typeof n ? ny("auto", e) : ny(n, e);
                var p = -1 < f.indexOf("__utma=" + e + "."),
                    q = -1 < f.indexOf("__utmb=" + e);
                (d = (Cv() || (_.G(cw) ? wv(window) : window)).gaGlobal) || (d = {}, (Cv() || (_.G(cw) ? wv(window) : window)).gaGlobal = d);
                var u = !1;
                if (p) {
                    var A = f.split("__utma=" + e + ".")[1].split(";")[0].split(".");
                    q ? d.sid = A[3] : d.sid || (d.sid = m + "");
                    d.vid = A[0] + "." + A[1];
                    d.from_cookie = !0
                } else {
                    d.sid || (d.sid = m + "");
                    if (!d.vid) {
                        u = !0;
                        q = Math.round(2147483647 * Math.random());
                        p = ly.appName;
                        var H = ly.version,
                            C = ly.language ? ly.language : ly.browserLanguage,
                            I = ly.platform,
                            R = ly.userAgent;
                        try {
                            A = ly.javaEnabled()
                        } catch (S) {
                            A = !1
                        }
                        A = [p, H, C, I, R, A ? 1 : 0].join("");
                        h ? A += h.width + "x" + h.height + h.colorDepth : _.t.java && _.t.java.awt && (h = _.t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), A += h.screen.width + "x" + h.screen.height);
                        A = A + f + (k || "");
                        for (k = A.length; 0 < g;) A += g-- ^ k++;
                        d.vid = (q ^ my(A) & 2147483647) + "." + m
                    }
                    d.from_cookie || (d.from_cookie = !1)
                }
                if (!d.cid) {
                    b: for (m = 999, n && (n = 0 == n.indexOf(".") ? n.substr(1) : n, m = n.split(".").length), n = 999, f = f.split(";"), A = 0; A < f.length; A++)
                        if (k = oy.exec(f[A]) || py.exec(f[A]) || qy.exec(f[A])) {
                            h = k[1] || 0;
                            if (h == m) {
                                l = k[2];
                                break b
                            }
                            h < n && (n = h, l = k[2])
                        }u && l && -1 != l.search(/^\d+\.\d+$/) ? (d.vid = l, d.from_cookie = !0) : l != d.vid && (d.cid = l)
                }
                d.dh = e;
                d.hid || (d.hid = Math.round(2147483647 * Math.random()));
                l = d
            }
            e = l.sid;
            d = l.hid;
            u = l.from_cookie;
            f = l.cid;
            return u && !F(a, 5) ? b : b.set("ga_vid", {
                value: l.vid
            }).set("ga_sid", {
                value: e
            }).set("ga_hid", {
                value: d
            }).set("ga_fc", {
                value: u
            }).set("ga_cid", {
                value: f
            }).set("ga_wpids", {
                value: c.google_analytics_uacct
            })
        }, function(a, b) {
            a = a.ga;
            var c = a.G;
            a = a.context.pvsid;
            b = void 0 === b ? new w.Map : b;
            b = b.set("js", {
                value: _.G(ow) ? sy(c) : null
            });
            var d = b.set;
            if (_.G(ow)) a: {
                var e = c;e = void 0 === e ? window : e;
                if (c = sy(e)) {
                    var f = null;
                    try {
                        "afma-gpt-sdk-a" == c ? f = e._gmptnl.pm("GAM=", a.toString()) || "5" : (f = e.__gmptnl_n || "5", e.webkit.messageHandlers._gmptnl.postMessage("GAM="))
                    } catch (g) {
                        a = "3";
                        break a
                    }
                    a = "string" === typeof f ? f : "3"
                } else a = null
            }
            else a = null;
            return d.call(b, "ms", {
                value: a
            })
        }, function(a, b) {
            var c = a.ga.G;
            a = c.navigator;
            c = c.document;
            b = void 0 === b ? new w.Map : b;
            "runAdAuction" in a && "joinAdInterestGroup" in a && pf("run-ad-auction", c) && b.set("td", {
                value: 1
            });
            return b
        }, function(a, b, c) {
            a = a.yf.zf;
            b = void 0 === b ? new w.Map : b;
            c = void 0 === c ? document : c;
            pf("browsing-topics", c) && b.set("topics", {
                value: a instanceof Uint8Array ? gc(a, 3) : a
            });
            return b
        }, function(a, b) {
            var c = a.ga,
                d = c.G,
                e = c.Z;
            c = a.ba.X;
            a = a.tf.gf;
            b = void 0 === b ? new w.Map : b;
            e = ke(e, d);
            if (!_.G(tx)) {
                d = b.set;
                var f = kg(c[0].getAdUnitPath()),
                    g = a;
                f = void 0 === f ? null : f;
                g = void 0 === g ? null : g;
                c = _.pe(xx);
                a = new bu;
                var h = f;
                if (e)
                    for (var k = _.pe(wx), l = _.z(Ge(e)), m = l.next(); !m.done; m = l.next()) {
                        m = m.value;
                        var n = ye().get(m, e).pb;
                        if (n) {
                            var p = Le(n);
                            if (2 !== p && 3 !== p) {
                                var q = !1;
                                if (h && (p = /^(\d+)$/.exec(m)) && !(q = _.v(h.split(","), "includes").call(h.split(","), p[1]))) continue;
                                _.y(n, 9, q);
                                p = x(n, 2);
                                q = q ? k : c;
                                0 <= q && p && p.length > q && (q = {}, te(12, m, null, (q.sl = String(p.length), q)), xe(n, 108, e), Bc(n, 2));
                                rj(a, 2, He, n);
                                te(19, m)
                            }
                        }
                    }
                e = g;
                if (f && e && "function" === typeof e.getUserIdsAsEidBySource)
                    for (g = _.z(Gj(yx)), h = g.next(); !h.done; h = g.next()) {
                        h = h.value;
                        k = null;
                        try {
                            k = Ud(zt, h)
                        } catch (u) {
                            h = void 0;
                            te(44, "UNKNOWN_ID", null == (h = u) ? void 0 : h.message);
                            continue
                        }
                        if (String(k.La()) === f)
                            for (h = _.z(k.oc()), k = h.next(); !k.done; k = h.next())
                                if (k = k.value.ta(), !Je(a, k)) {
                                    l = null;
                                    try {
                                        p = n = m = void 0, l = null == (m = e.getUserIdsAsEidBySource(k)) ? void 0 : null == (n = m.uids) ? void 0 : null == (p = n[0]) ? void 0 : p.id
                                    } catch (u) {
                                        m = void 0, te(45, k, null == (m = u) ? void 0 : m.message)
                                    }
                                    l && (l.length > c ? (m = {}, te(12, k, null, (m.sl = String(l.length), m.fp = "1", m))) : (m = fu(k), l = _.y(m, 2, l), l = _.y(l, 11, !0), rj(a, 2, He, l), l = {}, te(19, k, null, (l.fp = "1", l))))
                                }
                    }
                c = Oc(a, He, 2).length ? gc(Ns(a, hu), 3) : null;
                b = d.call(b, "a3p", {
                    value: c
                })
            }
            return b
        }, function(a, b) {
            a = a.Rc.Sc;
            b = void 0 === b ? new w.Map : b;
            return b.set("cbidsp", {
                value: ul(a, function(c) {
                    return gc(Ns(c, pt), 3)
                }, {
                    ka: "~"
                })
            })
        }, function(a, b) {
            a = a.ba.N.U;
            b = void 0 === b ? new w.Map : b;
            if (!Zg(a.qc(), Wn, 1)) return b;
            a = Vn(a.qc(), Wn, 1);
            return b.set("cmrv", {
                value: 1
            }).set("cmrq", {
                value: x(a, 1)
            }).set("cmrc", {
                value: Pk(a, 2),
                options: {
                    ka: ">"
                }
            }).set("cmrids", {
                value: Pk(a, 3),
                options: {
                    ka: "!"
                }
            }).set("cmrf", {
                value: x(a, 4)
            })
        }, function(a) {
            var b = [];
            a = _.z(Oc(Vn(a.ba.N.U.qc(), Yn, 2), qn, 1));
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, c.xa().length && b.push(be(c, 1, 0) + "=" + c.xa().join("|"));
            return new w.Map([
                ["pps", {
                    value: b,
                    options: {
                        ka: "~"
                    }
                }]
            ])
        }]),
        qI = function(a) {
            this.m = a;
            this.D = [];
            this.j = "";
            this.I = new w.Set(Gj(bx));
            a = _.z(F(this.m.ga.Z, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id adsid".split(" ") : []);
            for (var b = a.next(); !b.done; b = a.next()) this.I.add(b.value)
        },
        sI = function(a) {
            if (0 === a.m.ba.X.length) return "";
            for (var b = _.z(pI), c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                c = a;
                d = d(a.m);
                d = _.z(_.v(d, "entries").call(d));
                for (var e = d.next(); !e.done; e = d.next()) {
                    var f = _.z(e.value);
                    e = f.next().value;
                    f = f.next().value;
                    rI(c, e, f.value, f.options)
                }
            }
            c = a.m;
            b = c.ga.Z;
            var g, h;
            c = null != (h = null == (g = CE(c.ba.N.U)) ? void 0 : F(g, 9)) ? h : !1;
            g = F(b, 8);
            a.j = "https://" + (c || g || !F(b, 5) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
            g = a.D;
            if (_.G(nx))
                for (h = Math.random, b = g.length - 1; 0 < b; b--) c = Math.floor(h() * (b + 1)), d = g[b], g[b] = g[c], g[c] = d;
            g = _.z(g);
            for (b = g.next(); !b.done; b = g.next())
                if (h = a, b = b.value, c = b.value, e = b.options, d = void 0 === e.ka ? "," : e.ka, e = void 0 === e.Da ? !1 : e.Da, c = "object" !== typeof c ? null == c || !e && 0 === c ? null : encodeURIComponent(c) : Array.isArray(c) && c.length ? encodeURIComponent(c.join(d)) : null) "?" !== h.j[h.j.length - 1] && (h.j += "&"), h.j += b.Qd + "=" + c;
            return a.j
        },
        rI = function(a, b, c, d) {
            d = void 0 === d ? {} : d;
            a.D.some(function(e) {
                return b === e.Qd
            });
            a.I.has(b) || null == c || a.D.push({
                Qd: b,
                value: c,
                options: d
            })
        };
    var vI = function(a, b, c, d) {
            var e = this;
            this.context = a;
            this.L = c;
            this.j = new w.Map;
            this.m = new w.Map;
            this.qb = _.lg(Cg);
            window.performance && iv(window.performance.now) && (_.Ya(window, "DOMContentLoaded", _.zg(a, 334, function() {
                for (var f = _.z(e.j), g = f.next(); !g.done; g = f.next()) {
                    var h = _.z(g.value);
                    g = h.next().value;
                    h = h.next().value;
                    tI(e, g, h) && e.j.delete(g)
                }
            })), GF(b, KF, function(f) {
                f = f.detail;
                var g = f.P;
                return void uI(e, (0, D.K)(hn(d, f.rd)), (0, D.K)(x(g, 20)))
            }), GF(b, LF, function(f) {
                f = f.detail;
                var g = f.P;
                f = (0, D.K)(hn(d, f.rd));
                g = (0, D.K)(x(g, 20));
                var h = e.m.get(f);
                null != h ? yF(h, g) : uI(e, f, g)
            }))
        },
        uI = function(a, b, c) {
            tI(a, b, c) ? a.j.delete(b) : (a.j.set(b, c), _.Om(b, function() {
                return a.j.delete(b)
            }))
        },
        tI = function(a, b, c) {
            var d = sh(b);
            if ("DIV" !== (null == d ? void 0 : d.nodeName)) return !1;
            d = new wF({
                G: window,
                qb: a.qb,
                tb: (0, D.ra)(d),
                Fa: function(e) {
                    return void Eg(a.context, 336, e)
                },
                wf: _.G(Fx)
            });
            if (!d.j) return !1;
            yF(d, c);
            a.m.set(b, d);
            SF(a.L, b, function() {
                return void a.m.delete(b)
            });
            return !0
        };
    var wI = function(a) {
        this.m = a;
        this.D = this.j = 0
    };
    wI.prototype.push = function() {
        for (var a = _.z(zd.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(w.globalThis), this.j++)
            } catch (c) {
                this.D++, b = void 0, null == (b = window.console) || b.error("Exception in queued GPT command", c), this.m.error(nG(String(c)))
            }
        }
        this.m.info(oG(String(this.j), String(this.D)));
        return this.j
    };
    var xI = function(a, b) {
        Z.call(this, a, 931);
        this.B = V(this);
        this.l = V(this);
        this.o = X(this, b)
    };
    _.O(xI, Z);
    xI.prototype.j = function() {
        var a = this.o.value,
            b = new w.Map;
        this.B.j(new w.Map);
        if (a) {
            var c;
            a = _.z(null != (c = this.o.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = Oc(d, vt, 1);
                c = 1 === be(c[0], 1, 0) ? ts(c[0]) : rs(c[0], ss);
                d = zi(d, 2);
                var e = void 0;
                b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
            }
        }
        this.l.j(b)
    };
    var yI = function(a, b) {
        Z.call(this, a, 981);
        this.o = V(this);
        this.l = V(this);
        this.B = X(this, b)
    };
    _.O(yI, Z);
    yI.prototype.j = function() {
        var a = new w.Map,
            b, c = _.z(null != (b = this.B.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = Oc(b, vt, 1);
            d = 1 === be(d[0], 1, 0) ? ts(d[0]) : rs(d[0], ss);
            a.set(d, zi(b, 2))
        }
        this.o.j(a);
        this.l.j(new ht)
    };
    var zI = function(a, b, c, d, e) {
        Z.call(this, a, 980);
        this.A = new qz;
        this.F = X(this, b);
        this.B = W(this, c);
        this.l = W(this, d);
        this.o = W(this, e)
    };
    _.O(zI, Z);
    zI.prototype.j = function() {
        var a;
        (E = _.v(Object, "entries").call(Object, null != (a = this.F.value) ? a : {}), _.v(E, "find")).call(E, function(c) {
            var d = _.z(c);
            c = d.next().value;
            d = d.next().value;
            return "*" !== c && (null == d ? void 0 : d.zc)
        }) && (_.lg(Wj).l = !0);
        Xj(25);
        a = _.z([].concat(_.Hd(this.B.value), _.Hd(this.l.value), _.Hd(this.o.value)));
        for (var b = a.next(); !b.done; b = a.next()) kq(b.value);
        this.A.notify()
    };
    var AI = function(a, b) {
        Z.call(this, a, 892, _.pe(Tw));
        this.o = V(this);
        this.F = V(this);
        this.l = V(this);
        this.B = V(this);
        this.J = uz(this, b)
    };
    _.O(AI, Z);
    AI.prototype.j = function() {
        var a = this.J.value;
        if (!a) throw Error("config timeout");
        jz(this.o, De(a, Et, 3));
        jz(this.F, De(a, Gt, 2));
        this.l.j(Zm(a, 4));
        jz(this.B, Oc(a, zt, 6))
    };
    AI.prototype.H = function(a) {
        this.m(a)
    };
    AI.prototype.m = function(a) {
        lz(this.o, a);
        lz(this.F, a);
        this.l.j([]);
        this.B.j([])
    };
    var BI = [{
            name: "Interstitial",
            Yc: 1
        }, {
            name: "TopAnchor",
            Yc: 2
        }, {
            name: "BottomAnchor",
            Yc: 3
        }],
        CI = function(a, b) {
            Z.call(this, a, 789);
            this.l = b;
            this.A = V(this)
        };
    _.O(CI, Z);
    CI.prototype.j = function() {
        var a = this;
        this.A.j(BI.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.l)
        }).map(function(b) {
            var c = b.name;
            b = b.Yc;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            d = new St;
            e = new It;
            b = _.y(e, 2, b);
            c = _.y(b, 1, "/22639388115/example/" + c.toLowerCase());
            return wg(d, 5, Tt, c)
        }))
    };
    var DI = function(a, b) {
            this.D = b;
            this.j = this.m = a
        },
        EI = function(a) {
            a.j = Math.min(a.D, 2 * a.j);
            a.m = Math.min(a.D, a.j)
        };
    var FI = function(a, b, c) {
        Z.call(this, a, 969);
        this.G = b;
        this.L = c;
        this.o = V(this);
        this.l = V(this)
    };
    _.O(FI, Z);
    FI.prototype.j = function() {
        var a = this;
        if (_.G(Aw)) {
            var b = performance.now(),
                c = "",
                d, e = 1E3 * _.pe(yw),
                f = _.pe(Dw),
                g = 1E3 * _.pe(Cw),
                h = function() {
                    return void a.G.clearInterval(l)
                };
            _.Om(this, h);
            var k = _.zg(this.context, this.id, function() {
                var m, n, p, q, u;
                return _.$a(function(A) {
                    switch (A.j) {
                        case 1:
                            m = Wf(a.G);
                            a.l.j(!!m);
                            if (!m) {
                                h();
                                A.j = 2;
                                break
                            }
                            A.D = 3;
                            n = performance.now();
                            return ab(A, m, 5);
                        case 5:
                            c = null != (p = A.m) ? p : "0";
                            _.pe(Ew) && (q = performance.now(), GI(a, q - n, q - b), b = n);
                            d && (d = void 0, l = a.G.setInterval(k, e));
                            c.length > f && (Eg(a.context, a.id, new nk("ML:" + c.length)), c = "0", h());
                            cb(A, 2);
                            break;
                        case 3:
                            u = db(A), Eg(a.context, a.id, u), c = "0", g ? (d ? EI(d) : (h(), d = new DI(g, e)), a.G.setTimeout(k, d.m)) : _.G(Bw) || h();
                        case 2:
                            a.o.j(function() {
                                return c
                            }), A.j = 0
                    }
                })
            });
            var l = this.G.setInterval(k, e);
            k()
        } else this.l.j(!1), this.o.j(function() {
            return ""
        })
    };
    FI.prototype.m = function() {
        this.l.j(!1);
        this.o.j(function() {
            return ""
        })
    };
    var GI = function(a, b, c) {
        Jh("gpt_paw_refresh", function(d) {
            Ph(d, a.context);
            K(d, "prc", a.L.D);
            K(d, "sbms", b);
            K(d, "lams", c)
        }, _.pe(Ew))
    };
    var HI = function(a, b) {
        Z.call(this, a, 1063);
        this.G = b;
        this.o = V(this);
        this.l = V(this)
    };
    _.O(HI, Z);
    HI.prototype.j = function() {
        var a = this;
        if (_.G(Aw) && Xf(this.G)) {
            var b = null,
                c = 0,
                d = 1E3 * _.pe(yw),
                e = _.pe(Dw),
                f = _.zg(this.context, this.id, function() {
                    var h, k, l, m;
                    return _.$a(function(n) {
                        switch (n.j) {
                            case 1:
                                return h = Wf(a.G), a.l.j(!!h), k = "0", n.D = 2, ab(n, h, 4);
                            case 4:
                                k = null != (l = n.m) ? l : "0";
                                k.length > e && (Eg(a.context, a.id, new nk("ML:" + k.length)), k = "0");
                                cb(n, 3);
                                break;
                            case 2:
                                m = db(n), Eg(a.context, a.id, m);
                            case 3:
                                b = k, c = _.ue(a.G) + d, n.j = 0
                        }
                    })
                });
            var g = (E = f(), _.v(E, "finally")).call(E, function() {
                g = void 0
            });
            this.o.j(function() {
                var h, k;
                return _.$a(function(l) {
                    if (1 == l.j) {
                        h = _.ue(a.G) >= c;
                        k = null === b || "0" === b;
                        if (!h && !k) {
                            l.j = 2;
                            return
                        }
                        g || (g = (E = f(), _.v(E, "finally")).call(E, function() {
                            g = void 0
                        }));
                        return ab(l, g, 2)
                    }
                    return l.return((0, D.K)(b))
                })
            })
        } else this.l.j(!1), this.o.j(function() {
            return w.Promise.resolve("")
        })
    };
    HI.prototype.m = function() {
        this.l.j(!1);
        this.o.j(function() {
            return w.Promise.resolve("")
        })
    };
    var II = function(a, b, c, d) {
        Z.call(this, a, 1016);
        this.A = V(this);
        this.o = X(this, b);
        this.l = X(this, c);
        this.B = wz(this, [b, d])
    };
    _.O(II, Z);
    II.prototype.j = function() {
        if (this.l.value) {
            var a = this.o.value || this.B.value;
            a && JI(this, a) ? this.A.j(a) : (kz(this.A), KI(this, a))
        } else kz(this.A)
    };
    II.prototype.H = function(a) {
        this.m(a)
    };
    II.prototype.m = function() {
        kz(this.A)
    };
    var JI = function(a, b) {
            return Oc((0, D.K)(a.l.value), Ht, 1).some(function(c) {
                return c.La() === b
            })
        },
        KI = function(a, b) {
            Jh("pp_iris_failure", function(c) {
                K(c, "fnc", b);
                Ph(c, a.context)
            }, _.pe(Uw))
        };
    var LI = function(a, b) {
        Z.call(this, a, 1015);
        this.l = V(this);
        this.o = X(this, b)
    };
    _.O(LI, Z);
    LI.prototype.j = function() {
        if (this.o.value) {
            var a = Oc(this.o.value, Ht, 1);
            (null == a ? 0 : a.length) ? (a = Oc(this.o.value, Ht, 1)[0], (E = [2, 3], _.v(E, "includes")).call(E, be(a, 3, 0)) ? this.l.j(a.La()) : kz(this.l)) : kz(this.l)
        } else kz(this.l)
    };
    LI.prototype.H = function(a) {
        this.m(a)
    };
    LI.prototype.m = function() {
        kz(this.l)
    };
    var MI = function(a, b, c) {
        Z.call(this, a, 1017);
        this.G = c;
        this.A = tz(this);
        this.l = X(this, b)
    };
    _.O(MI, Z);
    MI.prototype.j = function() {
        var a = this;
        if (this.l.value) {
            var b = ay(this.G, this.l.value, function(c) {
                if (!c) {
                    c = Ku(b.j);
                    for (var d = _.z(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next()) c.fe(e.value)
                }
                a.A.notify()
            });
            b.start()
        } else this.A.notify()
    };
    MI.prototype.H = function(a) {
        this.m(a)
    };
    MI.prototype.m = function() {
        this.A.notify()
    };
    var NI = function(a, b) {
        Z.call(this, a, 1056);
        this.A = V(this);
        this.l = zo(b, KF)
    };
    _.O(NI, Z);
    NI.prototype.j = function() {
        var a = this;
        this.l.then(function(b) {
            b = kg((0, D.K)(b.detail.P.getAdUnitPath()));
            a.A.j(b)
        })
    };
    NI.prototype.H = function(a) {
        this.m(a)
    };
    NI.prototype.m = function() {
        kz(this.A)
    };
    var OI = function(a, b, c, d) {
        Z.call(this, a, 906, _.pe(Sw));
        this.l = tz(this);
        if (b === b.top) {
            var e = new Ne;
            _.Hm(this, e);
            var f = new LI(a, c);
            N(e, f);
            d = new NI(a, d);
            N(e, d);
            a = new II(a, f.l, c, d.A);
            N(e, a);
            b = new MI(this.context, a.A, b);
            N(e, b);
            ez(this.C, b.A, !0);
            Xe(e)
        } else this.l.notify()
    };
    _.O(OI, Z);
    OI.prototype.j = function() {
        this.l.notify()
    };
    OI.prototype.H = function(a) {
        this.m(a)
    };
    OI.prototype.m = function() {
        this.l.notify()
    };
    var PI = function(a, b, c) {
        Z.call(this, a, 964);
        var d = this;
        this.googletag = b;
        this.G = c;
        this.l = new qz;
        this.G === this.G.top && (vz(this, this.l), (a = By("loadEventStart", this.G)) ? (a = _.ue(this.G) - a, 1E3 <= a ? this.l.notify() : setTimeout(_.zg(this.context, this.id, function() {
            return void d.l.notify()
        }), 1E3 - a)) : (a = function() {
            return void setTimeout(_.zg(d.context, d.id, function() {
                return void d.l.notify()
            }), 1E3)
        }, "complete" === this.G.document.readyState ? a() : $F(this, this.id, this.G, "load", a)))
    };
    _.O(PI, Z);
    PI.prototype.j = function() {
        var a = this;
        if (this.G === this.G.top) {
            var b = Xg(!1, this.G),
                c = b.width,
                d = b.height;
            b = "CSS1Compat" === this.G.document.compatMode ? this.G.document.documentElement : this.G.document.body;
            var e = b.scrollHeight,
                f = b.scrollWidth,
                g = 0,
                h = 0,
                k = 0;
            b = _.z(Ez(this.G));
            for (var l = b.next(); !l.done; l = b.next()) {
                var m = l.value.getBoundingClientRect();
                l = m.width;
                m = m.height;
                g += m;
                h += m * l;
                k++
            }
            _.G(Ow) ? ym(this.context, c, d, f, e, k, g, h, this.googletag.pubads().getSlots().length) : Jh("gpt_dens", function(n) {
                Ph(n, a.context);
                K(n, "vw", c);
                K(n, "vh", d);
                K(n, "ph", e);
                K(n, "pw", f);
                K(n, "act", k);
                K(n, "aht", g);
                K(n, "ahd", Math.round(g / e * 100));
                K(n, "aa", h);
                K(n, "aad", Math.round(h / (e * f) * 100))
            }, _.pe(ex))
        }
    };
    var QI = function(a, b) {
        Z.call(this, a, 1031);
        this.G = b
    };
    _.O(QI, Z);
    QI.prototype.j = function() {
        this.G === this.G.top && Ci(this.G)
    };
    var RI = function(a) {
        Z.call(this, a, 891);
        this.l = V(this);
        var b = new kp;
        this.o = W(this, b);
        (a = _.og(260)) ? a(function(c, d) {
            if (d) lz(b, d);
            else try {
                if ("string" === typeof c) {
                    var e = JSON.parse(c || "[]");
                    Array.isArray(e) && b.j(e)
                }
            } catch (f) {} finally {
                b.I || lz(b, Error("malformed response"))
            }
        }): lz(b, Error("missing input"))
    };
    _.O(RI, Z);
    RI.prototype.j = function() {
        this.l.j(new Vt(this.o.value))
    };
    var SI = function(a, b) {
        Z.call(this, a, 966);
        this.G = b;
        this.l = V(this)
    };
    _.O(SI, Z);
    SI.prototype.j = function() {
        var a = this,
            b = Yf(this.G);
        if (b) this.l.j(b);
        else if ((b = Object.getOwnPropertyDescriptor(this.G, "_pbjsGlobals")) && !b.configurable) Jh("pdpg_error", function(d) {
            Ph(d, a.context)
        }, _.pe(lw));
        else {
            var c = null;
            Object.defineProperty(this.G, "_pbjsGlobals", {
                set: function(d) {
                    c = d;
                    (d = Yf(a.G)) && a.l.j(d)
                },
                get: function() {
                    return c
                }
            })
        }
    };
    SI.prototype.m = function() {};
    var TI = function(a, b) {
        Z.call(this, a, 979);
        this.G = b;
        this.A = V(this)
    };
    _.O(TI, Z);
    TI.prototype.j = function() {
        var a = this,
            b = "function" !== typeof this.G.document.browsingTopics,
            c = !pf("browsing-topics", this.G.document);
        b = b || c;
        !_.G(hx) || !_.G(qw) && b ? kz(this.A) : ki(this.G).then(function(d) {
            a.A.j(d)
        })
    };
    TI.prototype.m = function() {
        kz(this.A)
    };
    var Em = function(a, b, c, d) {
        Z.call(this, a, 959);
        this.Wa = b;
        this.A = V(this);
        this.l = W(this, b);
        vz(this, c);
        vz(this, d)
    };
    _.O(Em, Z);
    Em.prototype.j = function() {
        this.A.j(this.l.value)
    };
    var Cm = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 874);
        this.o = b;
        this.L = c;
        this.G = d;
        this.F = e;
        this.l = tz(this);
        vz(this, f);
        this.B = W(this, g)
    };
    _.O(Cm, Z);
    Cm.prototype.j = function() {
        var a = this,
            b = new Rx(this.G, -1, _.G(Jx));
        _.Hm(this, b);
        if (Tx(b))
            if (_.G(Dm)) {
                var c = this.L.H,
                    d = c.status,
                    e = function(f) {
                        UI(a, f);
                        a.l.notify()
                    };
                switch (d) {
                    case 2:
                        e(c.data);
                        break;
                    case 1:
                        c.j.push(e);
                        break;
                    case 0:
                        c.data = void 0;
                        c.status = 1;
                        c.j.push(e);
                        this.o.info(WG());
                        b.addEventListener(function(f) {
                            Vx(f) ? (VI(a, f), c.data = f, c.status = 2, c.nc().forEach(function(g) {
                                g(f)
                            }), c.j = []) : (c.data = void 0, c.status = 1)
                        });
                        break;
                    default:
                        throw Error("Impossible TCDataCacheStatus: " + d);
                }
            } else this.o.info(WG()), Wx(b, _.zg(this.context, 661, function(f) {
                VI(a, f);
                UI(a, f);
                a.l.notify()
            }));
        else this.l.notify()
    };
    var UI = function(a, b) {
            var c = a.B.value,
                d, e;
            if (a = !(null == (d = a.F) ? 0 : F(d, 9))) {
                var f = void 0 === f ? !1 : f;
                a = Vx(b) ? !1 === b.gdprApplies || "tcunavailable" === b.tcString || void 0 === b.gdprApplies && !f || "string" !== typeof b.tcString || !b.tcString.length ? !0 : Xx(b, "1") : !1
            }
            d = _.y(c, 5, a);
            f = !Zx(b, ["3", "4"]);
            d = _.y(d, 9, f);
            d = _.y(d, 2, b.tcString);
            f = null != (e = b.addtlConsent) ? e : "";
            e = _.y(d, 4, f);
            _.y(e, 7, b.internalErrorState);
            null != b.gdprApplies && _.y(c, 3, b.gdprApplies);
            _.G(fx) && !Zx(b, ["2", "7", "9", "10"]) && _.y(c, 8, !0)
        },
        VI = function(a, b) {
            "tcunavailable" === b.tcString ? a.o.info(XG("failed")) : a.o.info(XG("succeeded"))
        };
    var Bm = function(a, b, c, d, e) {
        Z.call(this, a, 875);
        this.B = b;
        this.G = c;
        this.l = tz(this);
        vz(this, d);
        this.o = W(this, (0, D.K)(e))
    };
    _.O(Bm, Z);
    Bm.prototype.j = function() {
        var a = this,
            b = new cE(this.G);
        _.Hm(this, b);
        if (eE(b)) {
            var c = _.zg(this.context, 660, function(d) {
                d && "string" === typeof d.uspString && _.y((0, D.K)(a.o).value, 1, d.uspString);
                a.l.notify()
            });
            this.B.info(VG());
            gE(b, c)
        } else this.l.notify()
    };
    var zm = function(a, b) {
        Z.call(this, a, 958);
        this.l = b;
        this.Wa = V(this)
    };
    _.O(zm, Z);
    zm.prototype.j = function() {
        var a = new Mz,
            b, c = null == (b = this.l) ? void 0 : F(b, 9);
        _.y(a, 5, !c);
        this.Wa.j(a)
    };
    var Am = function(a, b, c, d) {
        d = void 0 === d ? .001 : d;
        Z.call(this, a, 960);
        this.G = b;
        this.o = d;
        this.l = W(this, c)
    };
    _.O(Am, Z);
    Am.prototype.j = function() {
        var a = this;
        _.Hg(this.context, 894, function() {
            return void Jh("cmpMet", function(b) {
                Ph(b, a.context);
                var c = new Rx(a.G);
                _.Hm(a, c);
                var d = new cE(a.G);
                _.Hm(a, d);
                K(b, "fc", Number(a.l.value));
                K(b, "tcfv1", Number(!!a.G.Sg));
                K(b, "tcfv2", Number(Tx(c)));
                K(b, "usp", Number(eE(d)));
                K(b, "ptt", 17)
            }, a.o)
        })
    };
    var WI = function(a, b) {
        Z.call(this, a, 1052);
        this.o = V(this);
        this.l = V(this);
        this.B = X(this, b)
    };
    _.O(WI, Z);
    WI.prototype.j = function() {
        var a = this.B.value,
            b = new zt,
            c = new w.Map,
            d = new w.Set;
        a = _.z(null != a ? a : []);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = e.value;
            if (f.Kb()) {
                b.Kb() || _.y(b, 1, f.La());
                e = new w.Set;
                c.set(f.La().toString(), e);
                f = _.z((0, D.K)(f.oc()));
                for (var g = f.next(); !g.done; g = f.next()) {
                    g = g.value;
                    var h = (0, D.K)(g.ta());
                    e.add(h);
                    d.has(h) || rj(b, 2, wt, g);
                    d.add(h)
                }
            }
        }
        this.o.j(c);
        this.l.j(b)
    };
    var XI = function(a, b) {
        Z.call(this, a, 1040);
        this.l = V(this);
        this.o = V(this);
        this.B = X(this, b)
    };
    _.O(XI, Z);
    XI.prototype.j = function() {
        var a = this.B.value;
        a ? (jz(this.o, a instanceof zt ? a.La() : null), a = a.oc(), this.l.j(a.map(function(b) {
            var c = b.I();
            return {
                hc: b.ta(),
                url: c && (_.v(c, "startsWith").call(c, location.protocol) || _.v(c, "startsWith").call(c, "data:") && 40 >= c.length) ? Ad(c) : void 0
            }
        }))) : (kz(this.o), this.l.j([]))
    };
    var mp = function(a, b, c, d, e) {
        Z.call(this, a, 813);
        this.Oa = b;
        this.B = c;
        this.l = V(this);
        this.F = X(this, d);
        this.o = X(this, e)
    };
    _.O(mp, Z);
    mp.prototype.j = function() {
        var a = this,
            b = this.F.value;
        if (!b || _.G(sx)) this.l.j(!1);
        else if (_.G(Ax) || !YI.has(this.Oa) || _.G(Rw)) {
            YI.add(this.Oa);
            b = _.z(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                c = d.hc;
                (d = d.url) && _.Hm(this, nf(c, d, this.o.value, function(e, f) {
                    Eg(a.context, e, f);
                    var g, h;
                    null == (g = a.B) || null == (h = g.error) || h.call(g, f)
                }))
            }
            this.l.j(!0)
        } else this.l.j(!1)
    };
    var YI = new w.Set;
    var ZI = function(a, b, c) {
        Z.call(this, a, 1045);
        this.l = c;
        this.o = W(this, b)
    };
    _.O(ZI, Z);
    ZI.prototype.j = function() {
        var a = this.o.value;
        if (a) {
            var b = this.context,
                c = this.l;
            if (a.Kb()) {
                var d = new Ne,
                    e = new kp;
                e.j(a);
                e = new XI(b, e);
                N(d, e);
                a = new mp(b, a.La().toString(), console, e.l, c);
                N(d, a);
                Xe(d)
            }
        }
    };
    var Jm = function(a, b, c) {
        Z.call(this, a, 879);
        this.o = b;
        this.l = V(this);
        _.og(260) && (this.B = W(this, c))
    };
    _.O(Jm, Z);
    Jm.prototype.j = function() {
        var a = this,
            b, c, d;
        return _.$a(function(e) {
            if (1 == e.j) {
                if (null != (c = null == (b = a.B) ? void 0 : b.value) ? !c : !lE(a.o)) {
                    kz(a.l);
                    e.j = 0;
                    return
                }
                return ab(e, nE(a.o), 3)
            }
            d = e.m;
            a.l.j(d);
            e.j = 0
        })
    };
    var Im = function(a, b, c) {
        Z.call(this, a, 896);
        this.l = b;
        this.vb = V(this);
        c && vz(this, c)
    };
    _.O(Im, Z);
    Im.prototype.j = function() {
        this.vb.j(lE(this.l))
    };
    var $I = function(a, b) {
        Z.call(this, a, 1018);
        this.l = X(this, b)
    };
    _.O($I, Z);
    $I.prototype.j = function() {
        var a, b, c, d = _.z(null != (c = null == (a = this.l.value) ? void 0 : null == (b = De(a, jE, 5)) ? void 0 : Zm(b, 1)) ? c : []);
        for (a = d.next(); !a.done; a = d.next()) kq(a.value)
    };
    var lp = function(a, b, c) {
        Z.call(this, a, 706);
        this.G = b;
        this.A = V(this);
        this.l = W(this, c)
    };
    _.O(lp, Z);
    lp.prototype.j = function() {
        jz(this.A, ke(this.l.value, this.G))
    };
    var Pm = new w.Map([
        [1, 5],
        [2, 2],
        [3, 3]
    ]);
    var Up = function(a, b, c, d, e, f) {
        Z.call(this, a, 912);
        this.googletag = c;
        this.U = d;
        this.B = e;
        this.o = f;
        this.l = V(this);
        this.F = W(this, b)
    };
    _.O(Up, Z);
    Up.prototype.j = function() {
        if (_.G(Xw)) {
            for (var a = [], b = _.z(this.F.value), c = b.next(); !c.done; c = b.next()) switch (c = c.value, ri(c, Tt)) {
                case 5:
                    var d = void 0;
                    Tm(this.context, this.googletag, (0, D.K)(Wm(c, It, 5, Tt)), De(c, Lt, 4), null != (d = this.U) ? d : Ch().j, this.B, this.o);
                    break;
                case 6:
                    d = (0, D.K)(Wm(c, Rt, 6, Tt));
                    var e;
                    if (e = Zg(d, Pt, 2)) d = (0, D.K)(De(d, Pt, 2)), e = Ym(d) && $m(d);
                    e && (d = void 0, (c = cn(this.googletag, (0, D.K)(Wm(c, Rt, 6, Tt)), De(c, Lt, 4), null != (d = this.U) ? d : Ch().j)) && a.push.apply(a, _.Hd(c)))
            }
            this.l.j(a)
        } else this.l.j([])
    };
    Up.prototype.H = function(a) {
        this.m(a)
    };
    Up.prototype.m = function() {
        this.l.j([])
    };
    var aJ = function(a, b, c, d) {
        Z.call(this, a, 890);
        this.B = b;
        this.o = c;
        this.l = X(this, d)
    };
    _.O(aJ, Z);
    aJ.prototype.j = function() {
        var a = this;
        df(this.B, this.l.value, function(b, c) {
            Eg(a.context, b, c);
            var d, e;
            null == (d = a.o) || null == (e = d.error) || e.call(d, c)
        })
    };
    var bJ = function(a, b, c, d) {
        _.Px.call(this);
        this.context = a;
        this.ib = b;
        this.na = c;
        this.L = d;
        this.aa = new RI(this.context);
        this.m = new AI(this.context, this.aa.l);
        this.oa = this.m.l;
        this.j = new XH(this.context, this.m.o, window);
        this.H = new xI(this.context, this.j.J);
        this.o = new yI(this.context, this.j.F);
        var e;
        this.Y = new CI(this.context, null != (e = window.location.hash) ? e : "");
        this.F = new Up(this.context, this.Y.A, Ti(), null, this.ib, this.na);
        this.ca = new SI(this.context, window);
        this.ia = new TI(this.context, window);
        this.ha = new zI(this.context, this.j.o, this.oa, this.j.l, this.F.l);
        this.T = this.H.l;
        this.J = this.j.B;
        this.ja = this.j.o;
        this.Va = this.j.l;
        this.V = this.H.B;
        this.Ya = this.F.l;
        this.M = this.ca.l;
        this.ma = this.o.o;
        this.O = this.o.l;
        this.fa = this.ia.A;
        this.R = this.ha.A;
        this.B = new lI(this.context, this.M, this.R, this.T, this.J, this.V, this.ma, this.O);
        this.fb = this.B.l;
        this.gb = this.B.o;
        _.Hm(this, this.ca);
        _.Hm(this, this.aa);
        _.Hm(this, this.m);
        _.Hm(this, this.H);
        _.Hm(this, this.o);
        _.Hm(this, this.j);
        _.Hm(this, this.Y);
        _.Hm(this, this.F);
        _.Hm(this, this.ia);
        _.Hm(this, this.B);
        _.Hm(this, this.ha);
        _.og(260) || (this.oa.j([]), kz(this.ja), this.Va.j([]), kz(this.T), this.J.j(!1), kz(this.V), kz(this.ma), this.R.notify(), kz(this.Ya), kz(this.O));
        _.og(260) && _.G(hx) || kz(this.fa);
        _.G(zw) ? (this.l = new HI(this.context, window), _.Hm(this, this.l), this.kb = this.l.o, this.za = this.l.l) : 0 < _.pe(yw) && (this.C = new FI(this.context, window, this.L), _.Hm(this, this.C), this.Xa = this.C.o, this.za = this.C.l)
    };
    _.O(bJ, _.Px);
    var cJ = function(a, b) {
        var c = new Ne;
        _.Hm(a, c);
        N(c, a.ca);
        N(c, a.aa);
        N(c, a.m);
        N(c, a.j);
        N(c, a.H);
        N(c, a.ha);
        N(c, a.o);
        b = new OI(a.context, window, a.m.F, b);
        a.Aa = b.l;
        N(c, b);
        N(c, a.Y);
        N(c, a.F);
        _.pe(ex) && N(c, new PI(a.context, Ti(), window));
        _.G(Hx) && N(c, new QI(a.context, window));
        a.C && N(c, a.C);
        a.l && N(c, a.l);
        _.G(hx) && N(c, a.ia);
        N(c, a.B);
        var d = Km(a.context, a.Aa);
        b = d.vb;
        var e = d.Id;
        _.Hm(c, d.ua);
        d = new $I(a.context, e);
        N(c, d);
        _.G(sx) || !_.G(Rw) || Tj() || (b = Fm(a.context, a.na, _.G(Dm) ? a.L : void 0, null, window, b, e).Wa, b = new lp(a.context, window, b), N(c, b), e = new aJ(a.context, Ti(), console, b.A), N(c, e), e = new WI(a.context, a.m.B), N(c, e), _.G(Bx) && (a = new ZI(a.context, e.l, b.A), N(c, a)));
        Xe(c)
    };
    var dJ = ["Debug", "Info", "Warning", "Error", "Fatal"],
        eJ = function(a, b, c) {
            this.level = a;
            this.message = b;
            this.j = c;
            this.timestamp = new Date
        };
    r = eJ.prototype;
    r.getSlot = function() {
        return this.j
    };
    r.getLevel = function() {
        return this.level
    };
    r.getTimestamp = function() {
        return this.timestamp
    };
    r.getMessage = function() {
        return this.message
    };
    r.toString = function() {
        return this.timestamp.toTimeString() + ": " + dJ[this.level] + ": " + this.message
    };
    var fJ = {
            20: function(a) {
                return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
            },
            23: function(a) {
                return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
            },
            34: function(a) {
                return "Size mapping is null because invalid mappings were added: " + a[0] + "."
            },
            60: function(a) {
                return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
            },
            66: function(a) {
                return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
            },
            68: function() {
                return "Slots cannot be cleared until service is enabled."
            },
            80: function(a) {
                return "Slot object at position " + a[0] + " is of incorrect type."
            },
            84: function(a) {
                return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
            },
            93: function(a) {
                return "Failed to register listener. Unknown event type: " + a[0] + "."
            },
            96: function(a) {
                return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
            },
            122: function(a) {
                return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
            },
            121: function(a) {
                return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
            },
            105: function(a) {
                return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
            },
            106: function(a) {
                return "Publisher betas " + a[0] + " were declared after enableServices() was called."
            },
            107: function(a) {
                return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
            },
            108: function(a) {
                return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
            },
            123: function(a) {
                return "Refresh was throttled for slot: " + a[0] + "."
            },
            113: function(a) {
                return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
            },
            116: function(a) {
                return 'The unique SafeFrame domain setting in Google Ad Manager conflicts with the "useUniqueDomain" setting passed to the setSafeFrameConfig API method. GPT will use useUniqueDomain=' + a[0] + " based on the API call."
            },
            114: function() {
                return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            115: function() {
                return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            132: function(a) {
                return "Taxonomy with id " + a[0] + " has reached the limit of " + a[1] + " values."
            },
            133: function() {
                return "No taxonomy values were cleared, either due to an invalid taxonomy or no values present."
            },
            134: function(a) {
                return jn(a[0]) + " " + a[1] + " not requested: Format already created on the page."
            },
            135: function(a) {
                return jn(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
            },
            136: function(a) {
                return jn(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
            },
            137: function(a) {
                return jn(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
            },
            138: function(a) {
                return jn(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
            },
            139: function(a) {
                return jn(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
            },
            140: function(a) {
                return jn(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
            },
            142: function(a) {
                return "A google product ad tag with click url " + a[0] + " does not contain any elements enabled for clicking."
            },
            145: function(a) {
                return jn(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
            },
            143: function() {
                return "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
            },
            147: function() {
                return "GPT must be loaded from the limited ads URL to enable limited ads functionality."
            },
            148: function() {
                return "CommerceAdsConfig must contain a valid value for either categories or queries."
            }
        },
        gJ = {
            26: function(a) {
                return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
            },
            28: function(a) {
                return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
            },
            92: function(a) {
                return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
            },
            30: function(a) {
                return "Exception in googletag.cmd function: " + a[0] + "."
            },
            125: function(a) {
                return "google-product-ad element is invalid: " + a[0] + "."
            },
            126: function() {
                return "Attempted to collect prebid data but window.pbjs is undefined."
            },
            127: function(a) {
                return "Encountered the following error while attempting to collect prebid metadata: " + a[0] + "."
            },
            144: function() {
                return "ContentService is no longer available. Use the browser's built-in DOM APIs to directly add content to div elements instead."
            }
        };
    var hJ = function(a) {
            this.context = a;
            this.m = _.v(Array, "from").call(Array, {
                length: 1E3
            });
            this.D = this.I = this.j = 0;
            this.C = window
        },
        sH = function(a) {
            return [].concat(_.Hd(a.m.slice(a.j)), _.Hd(a.m.slice(0, a.j))).filter(function(b) {
                return !!b
            })
        },
        tH = function(a, b) {
            return sH(a).filter(function(c) {
                return c.getSlot() === b
            })
        },
        uH = function(a, b) {
            return sH(a).filter(function(c) {
                return c.getLevel() >= b
            })
        };
    hJ.prototype.log = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !1 : d;
        var f, g;
        c = new eJ(a, b, null != (g = null == (f = void 0 === c ? null : c) ? void 0 : f.j) ? g : null);
        this.m[this.j] = c;
        this.j = (this.j + 1) % 1E3;
        g = _.pe(tw) && 100 > this.I;
        f = 2 === a || 3 === a;
        var h = b.getMessageArgs(),
            k = b.getMessageId(),
            l = fJ[k] || gJ[k];
        g && f && (b = _.pe(tw), Jh("gpt_eventlog_messages", function(m) {
            ++e.I;
            Ph(m, e.context);
            K(m, "level", a);
            K(m, "messageId", k);
            K(m, "args", h.join("|"));
            l || K(m, "noMsg", !0);
            var n = Error(),
                p;
            var q = null != (p = n.stack) ? p : "";
            n = n.message;
            try {
                -1 == q.indexOf(n) && (q = n + "\n" + q);
                for (var u; q != u;) u = q, q = q.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                var A = q.replace(RegExp("\n *", "g"), "\n")
            } catch (H) {
                A = n
            }
            K(m, "stack", A)
        }, b));
        if (l) {
            b = "[GPT] " + l(h);
            if (d) throw new nk(b);
            d = this.D < _.pe(uw) && f && _.t.console;
            if (this.C === top && d || _.v(_.t.navigator.userAgent, "includes").call(_.t.navigator.userAgent, "Lighthouse"))(function(m) {
                var n, p, q, u;
                return void(2 === a ? null == (p = (n = _.t.console).warn) ? void 0 : p.call(n, m) : null == (u = (q = _.t.console).error) ? void 0 : u.call(q, m))
            })(b), this.D++
        }
        return c
    };
    hJ.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    var M = function(a, b, c) {
        a.log(2, b, c, !1)
    };
    hJ.prototype.error = function(a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var An = "3rd party ad content";
    var iJ = function(a, b) {
            this.serviceName = b;
            this.slot = (0, D.K)(a.j)
        },
        jJ = function(a, b) {
            iJ.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.companyIds = this.yieldGroupIds = null
        };
    _.O(jJ, iJ);
    var kJ = function() {
        iJ.apply(this, arguments)
    };
    _.O(kJ, iJ);
    var lJ = function(a, b, c) {
        iJ.call(this, a, b);
        this.inViewPercentage = c
    };
    _.O(lJ, iJ);
    var mJ = function() {
        iJ.apply(this, arguments)
    };
    _.O(mJ, iJ);
    var nJ = function() {
        iJ.apply(this, arguments)
    };
    _.O(nJ, iJ);
    var oJ = function() {
        iJ.apply(this, arguments)
    };
    _.O(oJ, iJ);
    var pJ = function() {
        iJ.apply(this, arguments)
    };
    _.O(pJ, iJ);
    var qJ = function(a, b, c, d) {
        iJ.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.O(qJ, iJ);
    var rJ = function(a, b, c) {
        iJ.call(this, a, b);
        this.payload = c
    };
    _.O(rJ, iJ);
    var sJ = function() {
        iJ.apply(this, arguments)
    };
    _.O(sJ, iJ);
    var Qn = new w.Set,
        tJ = function(a, b, c) {
            var d = 0,
                e = function() {
                    d = 0
                };
            return function(f) {
                d || (d = _.t.setTimeout(e, b), a.apply(c, arguments))
            }
        }(function() {
            throw new nk("Reached Limit for addEventListener");
        }, 3E5),
        uJ = function(a, b) {
            EF.call(this, a);
            this.C = b;
            this.j = [];
            this.m = !1;
            this.F = 0;
            this.o = new w.Map;
            Qn.add(this);
            this.C.info(qG(this.getName()))
        };
    _.O(uJ, EF);
    r = uJ.prototype;
    r.enable = function() {
        this.m || (this.m = !0, Xj(6), this.J())
    };
    r.slotAdded = function(a, b) {
        this.j.push(a);
        var c = new nJ(a, this.getName());
        this.dispatchEvent("slotAdded", 818, c);
        this.C.info(sG(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        ns(b, 4, a)
    };
    r.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return ba(b.j, c)
        })
    };
    r.addEventListener = function(a, b) {
        var c = this;
        if (this.F >= _.pe(sw) && 0 < _.pe(sw)) tJ();
        else {
            var d;
            null != (d = this.o.get(a)) && d.has(b) || (this.o.has(a) || this.o.set(a, new w.Map), d = function(e) {
                e = e.detail;
                try {
                    b(e)
                } catch (h) {
                    c.C.error(JG(String(h), a));
                    var f, g;
                    null == (f = window.console) || null == (g = f.error) || g.call(f, h)
                }
            }, (0, D.K)(this.o.get(a)).set(b, d), GF(this, a, d), this.F++)
        }
    };
    r.removeEventListener = function(a, b) {
        var c, d = null == (c = this.o.get(a)) ? void 0 : c.get(b);
        if (!d || !FF(this, a, d)) return !1;
        this.F--;
        return (0, D.K)(this.o.get(a)).delete(b)
    };
    var Fn = function(a) {
        for (var b = _.z(Qn), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
    };
    var Nn = function(a, b, c) {
        uJ.call(this, a, b);
        this.l = c;
        this.ads = new w.Map;
        this.B = this.ob = !1;
        _.lg(Wj).I = !0
    };
    _.O(Nn, uJ);
    Nn.prototype.slotAdded = function(a, b) {
        var c = this;
        GF(a, IF, function(d) {
            F(d.detail, 11) && (vJ(c, a).ff = !0)
        });
        uJ.prototype.slotAdded.call(this, a, b)
    };
    Nn.prototype.J = function() {};
    Nn.prototype.setRefreshUnfilledSlots = function(a) {
        "boolean" === typeof a && (this.ob = a)
    };
    var oH = function(a, b) {
            (b = void 0 === b ? "" : b) && !a.B && Jh("ima_sdk_v", function(c) {
                a.B = !0;
                K(c, "v", b)
            });
            return String(x(Ch().j, 26))
        },
        mH = function(a, b) {
            var c = Ch().j,
                d = Ch().m;
            if (a.l.m) {
                var e = {
                    bb: 3
                };
                a.V && (e.Ab = a.V);
                a.M && (e.Bb = a.M);
                b = null != b ? b : a.j;
                c = oh(c, d);
                d = e.Ab;
                var f = e.Bb;
                d && "number" !== typeof d || f && "number" !== typeof f || a.l.refresh(c, b, e)
            } else(null == b ? 0 : b[0]) && a.C.error(yG(b[0].getDomId()))
        },
        pH = function(a, b) {
            var c;
            return a.l.m && !(null == (c = a.ads.get(b)) || !c.ff)
        },
        nH = function(a, b) {
            return a.j.filter(function(c) {
                return _.v(b, "includes").call(b, c.toString())
            })
        };
    Nn.prototype.getName = function() {
        return "companion_ads"
    };
    Nn.prototype.T = function() {};
    var qH = function(a, b, c, d) {
            b = new jJ(b, a.getName());
            null != c && null != d && (b.size = [c, d]);
            a.dispatchEvent("slotRenderEnded", 67, b)
        },
        vJ = function(a, b) {
            var c = a.ads.get(b);
            c || (c = {}, a.ads.set(b, c), _.Om(b, function() {
                return a.ads.delete(b)
            }));
            return c
        };
    var Ln = function(a, b) {
        uJ.call(this, a, b)
    };
    _.O(Ln, uJ);
    Ln.prototype.getName = function() {
        return "content"
    };
    Ln.prototype.J = function() {};
    Ln.prototype.T = function() {};
    var wJ = function() {
            this.m = [];
            this.hostpageLibraryTokens = [];
            this.j = {}
        },
        xJ = function(a, b) {
            if (!_.v(a.m, "includes").call(a.m, b) && (E = [1, 2, 3], _.v(E, "includes")).call(E, b)) {
                var c = Tz[b];
                if (c) {
                    var d = b + "_hostpage_library";
                    if (c = gj(document, c)) c.id = d
                }
                a.m.push(b);
                b = new Uz(b);
                a.hostpageLibraryTokens.push(b);
                a = Ti();
                a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
                a.hostpageLibraryTokens[b.j] = b.m
            }
        },
        yJ = function(a, b, c) {
            var d;
            a.j[b] = null != (d = a.j[b]) ? d : new w.Set;
            a.j[b].add(c)
        },
        zJ = function(a, b) {
            var c, d;
            a = null != (d = null == (c = a.j[b]) ? void 0 : _.v(c, "values").call(c)) ? d : [];
            return [].concat(_.Hd(a))
        };
    var AJ = _.Cr(function() {
            ov("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        }),
        CJ = function(a) {
            var b = this;
            this.L = a;
            this.j = new w.Map;
            this.X = new w.Set;
            _.lg(Wj).D = function(c) {
                return BJ(b, c)
            }
        };
    CJ.prototype.defineSlot = function(a, b, c, d, e) {
        a = Zj(this, a, b, c, d, e);
        var f = a.slotId;
        if (f) return f.j;
        a.Wc || b.error(Ni("googletag.defineSlot", [c, d, e]));
        return null
    };
    var Zj = function(a, b, c, d, e, f, g) {
        return "string" === typeof d && 0 < d.length && e && (void 0 === f || "string" === typeof f) ? a.add(b, c, d, e, {
            tb: f,
            Rd: void 0 === g ? !1 : g
        }) : {}
    };
    CJ.prototype.add = function(a, b, c, d, e) {
        var f = this;
        e = void 0 === e ? {} : e;
        var g = e.tb,
            h = void 0 === e.format ? 0 : e.format;
        e = void 0 === e.Rd ? !1 : e.Rd;
        var k = sl(h);
        if (k) return Jh("gpt_pla_ns", function(m) {
            K(m, "iu", c);
            K(m, "f", null != h ? h : "");
            K(m, "nsr", k);
            Ph(m, a)
        }), Zk(b, k, h, c), {};
        e && AJ();
        e = this.j.get(c) || Number(e);
        d = DJ(this, a, b, c, e, d, g || "gpt_unit_" + c + "_" + e);
        b = d.Ta;
        var l = d.slotId;
        d = d.Wc;
        if (!l) return {
            Wc: d
        };
        this.j.set(c, e + 1);
        this.X.add(l);
        _.Om(l, function() {
            return void f.X.delete(l)
        });
        pE(c);
        return {
            slotId: l,
            Ta: b
        }
    };
    var hn = function(a, b) {
            a = _.z(a.X);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.getDomId() === b) return c
        },
        Gn = function(a) {
            a = _.z(a);
            for (var b = a.next(); !b.done; b = a.next()) b.value.Ea()
        },
        DJ = function(a, b, c, d, e, f, g) {
            var h = hn(a, g);
            if (h) return c.error(mG(g, d, h.getAdUnitPath())), {
                Wc: !0
            };
            var k = new MH;
            NH(_.y(k, 1, d), g);
            f = mk(f);
            h = f.Pa;
            Fc(k, 5, f.bd);
            null !== h && _.sg(k, 16, h);
            EE(k);
            var l = new Md(b, d, e, g);
            yH(l, qk(b, c, l));
            _.Om(l, function() {
                var m = Ch(),
                    n = l.getDomId();
                delete m.m[n];
                m.D.delete(l);
                m = l.getAdUnitPath();
                m = kg(m);
                var p;
                n = (null != (p = Pg.get(m)) ? p : 0) - 1;
                0 >= n ? Pg.delete(m) : Pg.set(m, n);
                c.info(LG(l.toString()), l);
                (p = Gi.get(l)) && Hi.delete(p);
                Gi.delete(l)
            });
            c.info(cG(l.toString()), l);
            GF(l, JF, function(m) {
                m = m.detail.qf;
                c.info(dG(l.getAdUnitPath()), l);
                Fy(_.lg(Cg), "7", 9, XF(a.L, l), 0, m)
            });
            GF(l, IF, function(m) {
                var n = m.detail;
                c.info(eG(l.getAdUnitPath()), l);
                var p;
                m = _.lg(Cg);
                var q = x(k, 20);
                n = null != (p = n.getEscapedQemQueryId()) ? p : "";
                m.j && (_.t.google_timing_params = _.t.google_timing_params || {}, _.t.google_timing_params["qqid." + q] = n)
            });
            GF(l, Mo, function() {
                return void c.info(fG(l.getAdUnitPath()), l)
            });
            GF(l, Oo, function() {
                return void c.info(gG(l.getAdUnitPath()), l)
            });
            return {
                Ta: k,
                slotId: l
            }
        },
        BJ = function(a, b) {
            var c = new RegExp("(^|,|/)" + b + "($|,|/)");
            return [].concat(_.Hd(a.X)).some(function(d) {
                return c.test(kg(d.getAdUnitPath()))
            })
        },
        Sn = function(a) {
            return zJ(_.lg(wJ), a).map(function(b) {
                var c;
                return null == (c = Bh(b, document)) ? void 0 : c.contentWindow
            }).filter(function(b) {
                return !!b
            })
        };
    var EJ = P(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        FJ = P(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", "_", ".js"]),
        GJ = P(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        HJ = P(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", "_", ".js"]),
        IJ = new w.Map([
            [2, {
                bf: "page_level_ads"
            }]
        ]),
        JJ = function(a) {
            var b = void 0 === b ? IJ : b;
            this.context = a;
            this.j = b;
            this.m = new w.Map;
            this.loaded = new w.Set
        },
        LJ;
    JJ.prototype.load = function(a) {
        var b = _.KJ(this, a),
            c, d = (null != (c = this.j.get(a.module)) ? c : {}).bf;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            c = (c = _.og(172)) && "pagead2.googlesyndication.com" === Xu((c.src || "").match(_.Wu)[3] || null);
            c = Ad(Sa(c ? this.context.Za ? B(GJ, this.context.Za, d) : B(HJ, d, this.context.Ha) : this.context.Za ? B(EJ, this.context.Za, d) : B(FJ, d, this.context.Ha)).toString());
            d = {};
            var e = _.pe(Yw),
                f = _.pe(ww);
            e && (d.cb = e);
            f && (d.mcb = f);
            _.v(Object, "keys").call(Object, d).length ? (c = gr.exec(Sa(c).toString()), e = c[3] || "", d = Ad(c[1] + hr("?", c[2] || "", d) + hr("#", e))) : d = c;
            LJ(this, a);
            gj(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    _.KJ = function(a, b) {
        b = b.module;
        a.m.has(b) || a.m.set(b, new _.Sf);
        return (0, D.K)(a.m.get(b))
    };
    LJ = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = _.zg(a.context, 340, function(e) {
            if (a.j.has(c) && "function" === typeof e) {
                var f = (0, D.K)(a.j.get(c));
                f = (void 0 === f.te ? [] : f.te).map(function(g) {
                    return _.KJ(a, g).promise
                });
                w.Promise.all(f).then(function() {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(Ti(), b, {
            value: function(e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            },
            writable: !1,
            enumerable: !1
        })
    };
    var MJ = function() {
        this.resources = {}
    };
    var Np = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 682);
        this.L = b;
        this.format = c;
        this.slotId = d;
        this.G = e;
        this.A = tz(this);
        this.l = X(this, f);
        this.o = W(this, g);
        this.F = W(this, h);
        this.B = X(this, k)
    };
    _.O(Np, Z);
    Np.prototype.j = function() {
        var a = this;
        if ((2 === this.format || 3 === this.format) && this.l.ub() && fp(this.l.value, 12, !1)) {
            var b = (0, D.K)(this.B.value).Ce,
                c = _.No(this.L, this.slotId),
                d = this.F.value,
                e = this.o.value;
            _.Eh(e, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (NJ) NJ.Nf(e);
            else {
                NJ = new b(this.context, this.format, e, this.G, d, this.L, this.slotId);
                b = {};
                d = _.z(Oc(this.l.value, Wt, 13));
                for (var f = d.next(); !f.done; f = d.next()) f = f.value, b[x(f, 1)] = x(f, 2);
                NJ.Of(b);
                NJ.fb();
                RF(this.L, this.slotId, function() {
                    NJ && (NJ.Ea(), NJ = null);
                    c && _.VF(a.L, a.slotId)
                })
            }
            _.Om(this, function() {
                return _.Su(e)
            })
        }
        this.A.notify()
    };
    var NJ = null;
    var Op = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 683);
        this.slotId = b;
        this.format = c;
        this.O = d;
        this.l = X(this, e);
        this.o = W(this, f);
        this.J = W(this, g);
        this.B = X(this, h);
        this.F = X(this, k);
        this.M = zo(b, Ao, function(l) {
            l = l.detail;
            try {
                var m = JSON.parse(l.data);
                return "sth" === m.googMsgType && "i-adframe-load" === m.msg_type
            } catch (n) {
                return !1
            }
        })
    };
    _.O(Op, Z);
    Op.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n;
        return _.$a(function(p) {
            if (1 == p.j) {
                b = a.l.value;
                if (!b || 5 !== a.format) return p.return();
                c = a.J.value;
                d = a.o.value;
                e = (0, D.K)(a.F.value);
                f = e.Ke;
                g = new _.tE(a.context);
                l = (null == (h = a.l.value) ? 0 : Qj(h, 14)) ? 60 * (0, D.K)(null == (k = a.l.value) ? void 0 : x(k, 14)) : 604800;
                m = new f(window, d, c, g, a.O, yo(Oc(b, Wt, 13)), hl(a.slotId), function() {
                    return void a.Ea()
                }, l, a.B.value);
                _.Hm(a, m);
                n = _.pe(Jw);
                switch (n) {
                    case 0:
                        m.R();
                        break;
                    case 1:
                        p.j = 2;
                        return
                }
            } else {
                if (4 != p.j) return ab(p, a.M, 4);
                if (a.D) return p.return();
                m.R(!0)
            }
            p.j = 0
        })
    };
    var OJ = function() {
        this.module = 2
    };
    OJ.prototype.toString = function() {
        return String(this.module)
    };
    _.PJ = new OJ;
    var Jp = function(a, b, c, d, e, f) {
        Z.call(this, a, 846);
        this.B = b;
        this.format = c;
        this.A = V(this);
        this.l = X(this, d);
        this.o = X(this, e);
        f && vz(this, f)
    };
    _.O(Jp, Z);
    Jp.prototype.j = function() {
        var a = this,
            b, c, d, e, f;
        return _.$a(function(g) {
            if (1 == g.j) {
                c = (2 === a.format || 3 === a.format) && !(null == (b = a.l.value) || !fp(b, 12, !1));
                d = 5 === a.format && a.o.value;
                if (!c && !d) {
                    kz(a.A);
                    g.j = 0;
                    return
                }
                e = a.A;
                f = e.j;
                return ab(g, a.B.load(_.PJ), 3)
            }
            f.call(e, g.m);
            g.j = 0
        })
    };
    var QJ = function() {
        Z.apply(this, arguments);
        this.value = this.promise = null;
        this.A = V(this)
    };
    _.O(QJ, Z);
    QJ.prototype.j = function() {
        var a = this;
        this.promise.then(function() {
            return void jz(a.A, a.value)
        })
    };
    var Co = function(a, b, c, d) {
        QJ.call(this, a, 1061);
        var e = this;
        this.promise = zo(b, c, function(f) {
            return null !== (e.value = d(f))
        })
    };
    _.O(Co, QJ);
    var RJ = function(a, b, c, d, e, f) {
        Z.call(this, a, 696);
        this.slotId = b;
        this.ya = c;
        vz(this, d);
        _.G(Nw) ? wz(this, [(0, D.K)(e), (0, D.K)(f)]) : this.l = new w.Promise(function(g) {
            for (var h = _.z(["closed", "ha_before_make_visible"]), k = h.next(); !k.done; k = h.next()) Bo(b, k.value).then(g)
        })
    };
    _.O(RJ, Z);
    RJ.prototype.j = function() {
        var a = this;
        return _.$a(function(b) {
            switch (b.j) {
                case 1:
                    if (!a.l) {
                        b.j = 2;
                        break
                    }
                    return ab(b, a.l, 3);
                case 3:
                    if (a.D) return b.return();
                case 2:
                    return ab(b, a.ya.dispatchEvent("rewardedSlotClosed", 703, new sJ(a.slotId, "publisher_ads")), 4);
                case 4:
                    a.Ea(), b.j = 0
            }
        })
    };
    var SJ = function(a, b, c, d, e) {
        Z.call(this, a, 694);
        this.slotId = b;
        this.ya = c;
        vz(this, d);
        if (_.G(Nw)) this.o = X(this, (0, D.K)(e));
        else {
            var f = new kp;
            this.l = X(this, f);
            Bo(b, "granted").then(function(g) {
                var h;
                return void jz(f, null != (h = g.payload) ? h : null)
            })
        }
    };
    _.O(SJ, Z);
    SJ.prototype.j = function() {
        var a, b, c, d, e = null != (d = null == (a = this.l) ? void 0 : a.value) ? d : null == (b = this.o) ? void 0 : null == (c = b.value) ? void 0 : c.payload;
        this.ya.dispatchEvent("rewardedSlotGranted", 702, new rJ(this.slotId, "publisher_ads", null != e ? e : null))
    };
    var TJ = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        UJ = function(a, b, c, d, e, f) {
            Z.call(this, a, 693);
            this.G = b;
            this.F = f;
            this.A = tz(this);
            this.l = W(this, c);
            this.o = W(this, d);
            vz(this, e);
            this.B = new _.TD(this.G)
        };
    _.O(UJ, Z);
    UJ.prototype.j = function() {
        var a = this;
        if (!this.F.I) {
            var b = 0 === (0, _.nl)() ? "rgba(1,1,1,0.5)" : "white";
            _.Eh(this.o.value, _.v(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, TJ));
            _.Om(this, _.bE(this.G.document, this.G));
            wd(this.l.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.G === this.G.top) {
                this.G.location.hash = "goog_rewarded";
                var c = new _.WD(this.B);
                _.XD(c);
                _.Om(this, function() {
                    _.YD(c);
                    "goog_rewarded" === a.G.location.hash && (a.G.location.hash = "")
                })
            }
            this.A.notify()
        }
    };
    var VJ = function(a, b, c, d) {
        Z.call(this, a, 695);
        this.G = b;
        this.l = W(this, c);
        vz(this, d)
    };
    _.O(VJ, Z);
    VJ.prototype.j = function() {
        if (this.G === this.G.top) var a = (0, D.K)(wd(this.l.value)),
            b = $F(this, 503, this.G, "hashchange", function(c) {
                ir(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var WJ = function(a, b, c, d) {
        Z.call(this, a, 692);
        this.slotId = b;
        this.ya = c;
        this.A = tz(this);
        this.l = W(this, d)
    };
    _.O(WJ, Z);
    WJ.prototype.j = function() {
        var a = this,
            b, c, d, e, f;
        return _.$a(function(g) {
            if (1 == g.j) return b = a.l.value, c = new _.Sf, d = c.promise, e = c.resolve, a.ya.dispatchEvent("rewardedSlotReady", 701, new qJ(a.slotId, "publisher_ads", e, null != (f = b.payload) ? f : null)), ab(g, d, 2);
            if (a.D) return g.return();
            a.A.notify();
            a.Ea();
            g.j = 0
        })
    };
    var XJ = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        YJ = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        ZJ = function(a, b, c, d, e) {
            Z.call(this, a, 691);
            var f = this;
            this.B = V(this);
            this.o = tz(this);
            this.F = W(this, c);
            _.G(Nw) ? this.l = wz(this, [(0, D.K)(d), (0, D.K)(e)]) : (this.J = Bo(b, "prefetched"), Bo(b, "ha_before_make_visible").then(function() {
                return void f.o.notify()
            }))
        };
    _.O(ZJ, Z);
    ZJ.prototype.j = function() {
        var a = this,
            b, c, d;
        return _.$a(function(e) {
            if (1 == e.j) {
                if (a.l) {
                    if (b = a.l.value, "ha_before_make_visible" === b.message) return a.o.notify(), e.return()
                } else if (a.o.I) return e.return();
                _.Eh(a.F.value, _.v(Object, "assign").call(Object, {
                    position: "absolute"
                }, 0 === (0, _.nl)() ? YJ : XJ));
                if (a.l) {
                    c = a.l.value;
                    e.j = 2;
                    return
                }
                return ab(e, (0, D.K)(a.J), 3)
            }
            2 != e.j && (c = e.m);
            d = c;
            if (a.D) return e.return();
            a.B.j(d);
            e.j = 0
        })
    };
    var Pp = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 688);
        if (4 === c) {
            this.ua = new Ne;
            _.Hm(this, this.ua);
            var h = c = null,
                k = null,
                l = null;
            _.G(Nw) && (c = Do(b, "granted", a), N(this.ua, c), h = Do(b, "prefetched", a), N(this.ua, h), k = Do(b, "closed", a), N(this.ua, k), l = Do(b, "ha_before_make_visible", a), N(this.ua, l));
            var m, n;
            a = new ZJ(this.context, b, f, null == (m = h) ? void 0 : m.A, null == (n = l) ? void 0 : n.A);
            N(this.ua, a);
            m = new WJ(this.context, b, d, a.B);
            N(this.ua, m);
            g = new UJ(this.context, e, f, g, m.A, a.o);
            N(this.ua, g);
            N(this.ua, new VJ(this.context, e, f, g.A));
            var p;
            N(this.ua, new SJ(this.context, b, d, m.A, null == (p = c) ? void 0 : p.A));
            var q, u;
            N(this.ua, new RJ(this.context, b, d, m.A, null == (q = k) ? void 0 : q.A, null == (u = l) ? void 0 : u.A))
        }
    };
    _.O(Pp, Z);
    Pp.prototype.j = function() {
        var a;
        null == (a = this.ua) || Xe(a)
    };
    var $J = function(a, b, c) {
        _.Px.call(this);
        this.context = a;
        this.C = b;
        this.m = c;
        a = c.slotId;
        b = c.size;
        this.j = "height" === c.De ? "fluid" : [b.width, b.height];
        this.Mb = zh(a);
        this.Nb = An
    };
    _.O($J, _.Px);
    $J.prototype.render = function() {
        var a = this.C,
            b = this.m,
            c = b.slotId,
            d = b.N.P,
            e = b.W,
            f = b.size,
            g = b.yb,
            h = b.ye,
            k = b.isBackfill;
        b = b.Ub;
        g && Zf(g, _.Qu(e), null != h ? h : "", !1);
        Lo(_.lg(Cg), "5", (0, D.K)(x(d[c.getDomId()], 20)));
        c.dispatchEvent(Mo, 801, {
            Bd: 0 === a.kind ? a.Ca : "",
            isBackfill: k
        });
        a = this.H();
        b && a && a.setAttribute("data-google-container-id", b);
        c.dispatchEvent(Oo, 825, {
            size: f,
            isEmpty: !1
        });
        return a
    };
    $J.prototype.loaded = function(a) {
        var b = this.m,
            c = b.slotId,
            d = b.ya;
        b = b.N.P;
        c.dispatchEvent(MF, 844, void 0);
        a && a.setAttribute("data-load-complete", !0);
        d.dispatchEvent("slotOnload", 710, new mJ(c, "publisher_ads"));
        Lo(_.lg(Cg), "6", (0, D.K)(x(b[c.getDomId()], 20)))
    };
    var aK = function(a, b) {
        if (b) return null;
        a = a.C;
        a = 0 === a.kind ? a.Ca : "";
        b = "";
        var c = !0,
            d = "sf";
        b = void 0 === b ? "" : b;
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? "" : d;
        if (a) {
            var e = a.toLowerCase(); - 1 < e.indexOf("<!doctype") || -1 < e.indexOf("<html") ? c && jg(d, 2) : (c && jg(d, 3), a = _.G(Gx) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>")
        } else c && jg(d, 1);
        return a
    };
    $J.prototype.I = function() {
        _.Px.prototype.I.call(this);
        var a;
        null == (a = this.m.yb) || a.removeAttribute("data-google-query-id")
    };
    $J.prototype.o = function(a, b) {
        var c = this,
            d = bK(this, function() {
                return void c.loaded((0, D.K)(d.j))
            }, a, b);
        _.Om(this, function() {
            100 != d.status && (2 == d.F && ($E(d.D), d.F = 0), window.clearTimeout(d.J), d.J = -1, d.o = 3, d.m && (d.m.Ea(), d.m = null), _.Sd(window, "resize", d.va), _.Sd(window, "scroll", d.va), d.l && d.j && d.l == _.Tu(d.j) && d.l.removeChild(d.j), d.j = null, d.l = null, d.status = 100)
        });
        return d
    };
    var bK = function(a, b, c, d) {
        var e = a.m,
            f = e.Yd,
            g = e.isBackfill,
            h = e.Le,
            k = e.Ub,
            l = e.mc,
            m = e.wb,
            n = e.Qc,
            p = Array.isArray(a.j) ? new _.lh(Number(a.j[0]), Number(a.j[1])) : 1;
        return new hF({
            md: e.zd,
            Mb: a.Mb,
            Nb: a.Nb,
            content: aK(a, d),
            size: p,
            xe: !!h,
            Pd: b,
            Zd: null != f ? f : void 0,
            permissions: {
                kc: Qj(c, 1) ? !!F(c, 1) : !g,
                lc: Qj(c, 2) ? !!F(c, 2) : !1
            },
            Ob: !!Ti().fifWin,
            rf: xH ? xH : xH = Ej(),
            re: Jj(),
            hostpageLibraryTokens: _.lg(wJ).hostpageLibraryTokens,
            Fa: function(q, u) {
                return void Eg(a.context, q, u)
            },
            uniqueId: (0, D.K)(k),
            Xd: _.G($w) ? qh() : FE(),
            mc: null != l ? l : void 0,
            rc: null != d ? d : void 0,
            wb: null != m ? m : void 0,
            Qc: null != n ? n : void 0
        })
    };
    var Fo = function() {
        $J.apply(this, arguments)
    };
    _.O(Fo, $J);
    Fo.prototype.H = function() {
        var a = this.m,
            b = a.N,
            c = b.U;
        a = b.P[a.slotId.getDomId()];
        b = new Kj;
        c = Rj([b, c.Ra(), null == a ? void 0 : a.Ra()]);
        c = $J.prototype.o.call(this, c);
        return (0, D.K)(c.j)
    };
    Fo.prototype.l = function() {
        return !1
    };
    var cK = function() {
        $J.apply(this, arguments)
    };
    _.O(cK, $J);
    var dK = function(a, b) {
            var c = _.rd(b ? "fencedframe" : "IFRAME");
            b && (c.mode = "opaque-ads");
            c.id = a.Mb;
            c.name = a.Mb;
            c.title = a.Nb;
            Array.isArray(a.j) ? null != a.j[0] && null != a.j[1] && (c.width = String(a.j[0]), c.height = String(a.j[1])) : (c.width = "100%", c.height = "0");
            c.allowTransparency = "true";
            c.scrolling = "no";
            c.marginWidth = "0";
            c.marginHeight = "0";
            c.frameBorder = "0";
            c.style.border = "0";
            c.style.verticalAlign = "bottom";
            c.setAttribute("role", "region");
            c.setAttribute("aria-label", "Advertisement");
            c.tabIndex = 0;
            return c
        },
        eK = function(a, b) {
            "string" !== typeof a.j && (b.width = String(a.j[0]), b.height = String(a.j[1]));
            var c = _.zg(a.context, 774, function() {
                a.loaded(b);
                _.Sd(b, "load", c)
            });
            _.Ya(b, "load", c);
            _.Om(a, function() {
                return _.Sd(b, "load", c)
            });
            a.m.zd.appendChild(b)
        };
    var Go = function() {
        cK.apply(this, arguments)
    };
    _.O(Go, cK);
    Go.prototype.H = function() {
        var a = this,
            b = this.m,
            c = b.Yd;
        b = b.mc;
        var d = dK(this);
        if (null == c ? 0 : c.length)
            if (_.Kr) {
                c = _.z(c);
                for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value)
            } else d.sandbox.add.apply(d.sandbox, _.Hd(c));
        b && (d.allow = b);
        eK(this, d);
        _.Hg(this.context, 653, function() {
            var f;
            if (f = uf(Ua(uf(a.C.Ca)).toString())) {
                var g = f.toString().toLowerCase(); - 1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") ? Eo(2) : (Eo(3), f = _.G(Gx) ? f : uf("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>"))
            } else Eo(1);
            var h, k;
            g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
            Fa() && g.open("text/html", "replace");
            Va(g, f);
            var l, m, n;
            if (ir(null != (n = null == (l = d.contentWindow) ? void 0 : null == (m = l.location) ? void 0 : m.href) ? n : "", "#")) {
                var p, q;
                null == (p = d.contentWindow) || null == (q = p.history) || q.replaceState(null, "", "#" + Math.random())
            }
            g.close()
        }, !0);
        return d
    };
    Go.prototype.l = function() {
        return !0
    };
    var Io = function() {
        cK.apply(this, arguments)
    };
    _.O(Io, cK);
    Io.prototype.H = function() {
        var a = dK(this, !this.m.Bf);
        bi(a, this.C.td);
        eK(this, a);
        return a
    };
    Io.prototype.l = function() {
        return !1
    };
    var Ho = function() {
        cK.apply(this, arguments)
    };
    _.O(Ho, cK);
    Ho.prototype.H = function() {
        var a = this.C.url,
            b = this.m,
            c = b.N,
            d = c.U;
        b = c.P[b.slotId.getDomId()];
        d = Rj([d.Ra(), null == b ? void 0 : b.Ra()]);
        var e = dK(this);
        bi(e, a);
        cK.prototype.o.call(this, d, e);
        var f = function() {
            e.removeEventListener("load", f);
            fK(a)
        };
        e.addEventListener("load", f);
        tv(e, function() {
            return void fK(a)
        });
        return e
    };
    var fK = function(a) {
        var b = document.querySelectorAll("script[type=webbundle]");
        if (b.length) {
            a: {
                for (var c = 0; c < b.length; c++) {
                    var d = void 0;
                    if (null == (d = b[c].textContent) ? 0 : d.match(a)) {
                        b = b[c];
                        break a
                    }
                }
                b = null
            }
            b && b.textContent && (c = JSON.parse(b.textContent)) && "object" === typeof c && (d = c.resources, a = d.indexOf(a, 0), -1 < a && d.splice(a, 1), 0 === d.length ? document.head.removeChild(b) : (a = _.rd("SCRIPT"), a.setAttribute("type", "webbundle"), a.textContent = JSON.stringify(c), document.head.removeChild(b), document.head.appendChild(a)))
        }
    };
    Ho.prototype.l = function() {
        return !1
    };
    var Lp = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, u, A, H, C, I, R, S, U, Y, sa, xa, ya) {
        Z.call(this, a, 680);
        this.slotId = b;
        this.L = c;
        this.N = d;
        this.ya = e;
        this.G = f;
        this.l = V(this);
        this.B = V(this);
        this.o = tz(this);
        this.J = W(this, g);
        this.ma = W(this, h);
        vz(this, k);
        this.aa = W(this, l);
        this.F = W(this, m);
        this.Y = W(this, n);
        vz(this, I);
        this.M = W(this, p);
        this.O = X(this, q);
        this.na = X(this, u);
        this.R = W(this, A);
        this.ja = X(this, H);
        this.Aa = X(this, C);
        vz(this, R);
        this.ia = W(this, S);
        vz(this, U);
        ya && vz(this, ya);
        this.oa = X(this, Y);
        this.ca = X(this, sa);
        this.fa = X(this, xa)
    };
    _.O(Lp, Z);
    Lp.prototype.j = function() {
        var a = this,
            b = this.J.value;
        if (0 === b.kind && null == b.Ca) throw new Gy("invalid html");
        var c;
        b = Jo(this.context, b, {
            W: document,
            slotId: this.slotId,
            L: this.L,
            N: this.N,
            ya: this.ya,
            size: this.Y.value,
            yb: this.aa.value,
            zd: this.F.value,
            ye: this.M.value,
            De: this.O.value,
            Yd: this.na.value,
            isBackfill: this.R.value,
            Le: this.ja.value,
            Ub: this.Aa.value,
            mc: this.ia.value,
            wb: this.oa.value,
            Bf: null == (c = this.ca.value) ? void 0 : fp(c, 14),
            Qc: this.fa.value
        }, {
            Df: this.ma.value
        });
        _.Hm(this, b);
        var d = b.render();
        $F(this, this.id, this.G, "message", function(e) {
            d.contentWindow === e.source && a.slotId.dispatchEvent(Ao, 824, e)
        });
        this.o.notify();
        this.l.j(d);
        this.B.j(b.l())
    };
    var Rp = function(a, b, c, d, e) {
        Z.call(this, a, 863);
        this.l = c;
        this.rb = Number(b);
        this.o = W(this, d);
        this.B = W(this, e);
        this.F = gK(this)
    };
    _.O(Rp, Z);
    var gK = function(a) {
        return _.$a(function(b) {
            return b.return(new w.Promise(function(c) {
                try {
                    $F(a, a.id, a.l, "message", function(d) {
                        var e;
                        "asmreq" === (null == (e = d.data) ? void 0 : e.type) && Xo(Ud(JD, d.data.payload), 1) === a.rb && c(d)
                    })
                } catch (d) {}
            }))
        })
    };
    Rp.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g;
        return _.$a(function(h) {
            if (1 == h.j) return b = Ko(a.l), c = a.o.value, d = a.B.value, ab(h, a.F, 2);
            e = h.m;
            var k = a.l,
                l = Ko(k);
            var m = c.getBoundingClientRect();
            var n = vd(k) ? hh(c, k) : {
                x: 0,
                y: 0
            };
            k = n.x;
            n = n.y;
            m = new _.xv(n, k + m.right, n + m.bottom, k);
            k = new LD;
            k = _.y(k, 1, m.top);
            k = _.y(k, 3, m.bottom);
            k = _.y(k, 2, m.left);
            m = _.y(k, 4, m.right);
            k = new KD;
            k = _.y(k, 1, a.rb);
            k = _.y(k, 2, !d);
            m = _.sg(k, 3, m);
            m = _.y(m, 4, b);
            f = _.y(m, 5, l);
            g = {
                type: "asmres",
                payload: Zd(f)
            };
            e.ports[0].postMessage(g);
            h.j = 0
        })
    };
    var Ep = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        Z.call(this, a, 699);
        this.W = b;
        this.slotId = c;
        this.l = d;
        this.Cb = e;
        this.A = tz(this);
        this.J = X(this, f);
        this.O = W(this, g);
        this.B = W(this, h);
        this.M = W(this, k);
        this.o = X(this, l);
        this.R = W(this, m);
        this.F = W(this, n);
        p && vz(this, p)
    };
    _.O(Ep, Z);
    Ep.prototype.j = function() {
        var a = this.O.value,
            b = this.B.value;
        b.style.width = "";
        b.style.height = "";
        if ("height" !== this.J.value) {
            var c, d = null != (c = this.o.value) ? c : 0;
            c = this.M.value;
            var e = this.R.value,
                f = this.F.value,
                g = !1;
            switch (d) {
                case 1:
                case 2:
                    g = this.context;
                    var h = this.W,
                        k = this.slotId,
                        l = this.l,
                        m = this.Cb;
                    var n = c.width,
                        p = c.height,
                        q = 0;
                    var u = 0;
                    var A = Yg(l);
                    A = _.z(A);
                    for (var H = A.next(); !H.done; H = A.next()) {
                        var C = H.value;
                        Array.isArray(C) && (H = (0, D.ra)(C[0]), C = (0, D.ra)(C[1]), q < H && (q = H), u < C && (u = C))
                    }
                    u = [q, u];
                    q = u[0] < n;
                    p = u[1] < p;
                    if (q || p) {
                        u = n + "px";
                        A = {
                            "max-height": "none",
                            "max-width": u,
                            padding: "0px",
                            width: u
                        };
                        p && (A.height = "auto");
                        Fh(b, a, A);
                        b = {};
                        q && (q = Dh(e.width), n > q && (b.width = u, b["max-width"] = u));
                        p && (b.height = "auto", b["max-height"] = "none");
                        c: {
                            for (I in b)
                                if (Object.prototype.hasOwnProperty.call(b, I)) {
                                    var I = !1;
                                    break c
                                }
                            I = !0
                        }
                        I ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px", _.Eh(a, b), b = !0)
                    } else b = !1;
                    b: switch (u = c.width, I = h.defaultView || h.parentWindow || _.t, d) {
                        case 2:
                            a = Gh(a, I, u, e, m);
                            break b;
                        case 1:
                            if (e = a.parentElement)
                                if (m = mh(e)) {
                                    H = m.width;
                                    m = sh(k, I.document);
                                    n = (0, D.K)(uh(m, I));
                                    p = n.position;
                                    C = Dh(n.width) || 0;
                                    q = uh(e, I);
                                    A = "rtl" === q.direction ? "Right" : "Left";
                                    m = A.toLowerCase();
                                    I = "absolute" === p ? 0 : Dh(q["padding" + A]);
                                    q = Dh(q["border" + A + "Width"]);
                                    u = Math.max(Math.round((H - Math.max(C, u)) / 2), 0);
                                    H = {};
                                    C = 0;
                                    var R = lv(n);
                                    R && (C = R[4] * ("Right" === A ? -1 : 1), A = R[3] || 1, 1 !== (R[0] || 1) || 1 !== A) && (R[0] = 1, R[3] = 1, H.transform = "matrix(" + R.join(",") + ")");
                                    A = 0;
                                    switch (p) {
                                        case "fixed":
                                            var S, U = null != (S = Number(vh(n.getPropertyValue(m)))) ? S : 0,
                                                Y;
                                            S = null != (Y = e.getBoundingClientRect().left) ? Y : 0;
                                            A = U - S;
                                            break;
                                        case "relative":
                                            A = null != (U = Number(vh(n.getPropertyValue(m)))) ? U : 0;
                                            break;
                                        case "absolute":
                                            H[m] = "0"
                                    }
                                    H["margin-" + m] = u - I - q - A - C + "px";
                                    _.Eh(a, H);
                                    a = !0
                                } else a = !1;
                            else a = !1;
                            break b;
                        default:
                            a = !1
                    }
                    b || a ? (Ih(g, h, k, l, d, c.width, c.height, "gpt_slotexp", f), g = !0) : g = !1;
                    break;
                case 3:
                    d = this.context, g = this.W, h = this.slotId, k = this.l, S = this.Cb, l = c.width, Y = c.height, U = Dh(e.height) || 0, Y >= U || "none" === e.display || "hidden" === e.visibility || !S || -12245933 === S.width || a.getBoundingClientRect().bottom <= S.height ? g = !1 : (S = {
                        height: Y + "px"
                    }, Fh(b, a, S), _.Eh(a, S), Ih(d, g, h, k, 3, l, Y, "gpt_slotred", f), g = !0)
            }!g && _.G(fw) && Ih(this.context, this.W, this.slotId, this.l, 0, c.width, c.height, "gpt_pgbrk", f)
        }
        this.A.notify()
    };
    var Ip = function(a, b) {
        Z.call(this, a, 1020);
        this.G = b;
        this.A = V(this)
    };
    _.O(Ip, Z);
    Ip.prototype.j = function() {
        var a = this.G;
        a = _.G(rx) && void 0 !== a.anonymouslyFramed && a.crossOriginIsolated;
        this.A.j(a)
    };
    var np = function(a, b, c, d, e) {
        Z.call(this, a, 720);
        this.format = b;
        this.B = c;
        this.A = V(this);
        this.l = X(this, d);
        this.o = X(this, e)
    };
    _.O(np, Z);
    np.prototype.j = function() {
        var a = this.o.value;
        if (null == a) kz(this.A);
        else {
            var b = Math.round(.3 * this.B);
            2 !== this.format && 3 !== this.format || !this.l.ub() || !fp(this.l.value, 12, !1) || 0 >= b || a <= b ? this.A.j(a) : this.A.j(b)
        }
    };
    var xp = function(a, b, c) {
        Z.call(this, a, 1054);
        this.l = b;
        this.A = tz(this);
        this.o = W(this, c)
    };
    _.O(xp, Z);
    xp.prototype.j = function() {
        this.o.value || this.l();
        this.A.notify()
    };
    var zp = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Z.call(this, a, 674);
        this.slotId = b;
        this.U = c;
        this.o = d;
        this.W = f;
        this.L = g;
        this.A = V(this);
        this.F = 2 === e || 3 === e;
        this.l = W(this, h);
        this.M = W(this, k);
        this.J = X(this, l);
        this.B = X(this, m);
        n && vz(this, n)
    };
    _.O(zp, Z);
    zp.prototype.j = function() {
        var a = eh(this.U, this.o),
            b = rh(this.slotId, this.W) || vl(this.l.value, Ah(this.slotId), a);
        this.M.value && !a && (b.style.display = "inline-block");
        this.F ? RF(this.L, this.slotId, function() {
            return void _.Su(b)
        }) : _.Om(this, function() {
            return void _.Su(b)
        });
        a = hK(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.A.j(b)
    };
    var hK = function(a) {
        var b = a.l.value,
            c, d = null == (c = a.J.value) ? void 0 : c.height;
        if (b && !a.B.value && d) {
            var e;
            c = (null != (e = F(a.o, 23)) ? e : F(a.U, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
        } else c = 0;
        return c
    };
    var hp = function(a, b) {
        Z.call(this, a, 859);
        this.G = b;
        this.A = V(this)
    };
    _.O(hp, Z);
    hp.prototype.j = function() {
        this.A.j(!vd(this.G.top))
    };
    var Cp = function(a, b, c) {
        Z.call(this, a, 698);
        this.G = b;
        this.A = V(this);
        this.l = W(this, c)
    };
    _.O(Cp, Z);
    Cp.prototype.j = function() {
        jz(this.A, uh(this.l.value, this.G))
    };
    var Hp = function(a, b, c) {
        Z.call(this, a, 840);
        this.format = b;
        this.W = c;
        this.A = V(this)
    };
    _.O(Hp, Z);
    Hp.prototype.j = function() {
        var a = [],
            b = this.W;
        b = void 0 === b ? document : b;
        var c;
        null != (c = b.featurePolicy) && (E = c.features(), _.v(E, "includes")).call(E, "attribution-reporting") && a.push("attribution-reporting");
        5 !== this.format && 4 !== this.format || !_.G(bw) || a.push("autoplay");
        a.length ? this.A.j(a.join(";")) : this.A.j("")
    };
    var Mp = function(a, b, c, d, e) {
        Z.call(this, a, 934);
        this.G = b;
        this.slotId = c;
        vz(this, d);
        this.l = W(this, e)
    };
    _.O(Mp, Z);
    Mp.prototype.j = function() {
        var a = this;
        GF(this.slotId, Ao, function(b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if ("gpi-uoo" === c.googMsgType) {
                    var d = c.userOptOut,
                        e = c.clearAdsData,
                        f = a.l.value,
                        g = new nu;
                    var h = _.y(g, 1, d ? "1" : "0");
                    var k = rm(_.y(h, 2, 2147483647), 3, "/");
                    var l = _.y(k, 4, a.G.location.hostname);
                    var m = new Nz(a.G);
                    Qz(m, "__gpi_opt_out", l, f);
                    if (d || e) Rz(m, "__gads", f), Rz(m, "__gpi", f)
                }
            } catch (n) {}
        })
    };
    var wp = function(a, b, c, d, e, f) {
        Z.call(this, a, 1053);
        this.slotId = b;
        this.N = c;
        this.L = d;
        this.l = V(this);
        this.o = W(this, e);
        this.B = W(this, f)
    };
    _.O(wp, Z);
    wp.prototype.j = function() {
        this.B.value ? (Po(this.slotId, this.L, this.N, this.o.value), this.l.j(!1)) : this.l.j(!0)
    };
    var Tp = function(a, b, c, d, e, f) {
        Z.call(this, a, 721);
        this.G = b;
        this.F = X(this, c);
        this.o = W(this, d);
        this.l = W(this, e);
        this.B = W(this, f)
    };
    _.O(Tp, Z);
    Tp.prototype.j = function() {
        var a = this,
            b = this.F.value,
            c, d = null == b ? void 0 : null == (c = x(b, 1)) ? void 0 : c.toUpperCase(),
            e;
        b = null == b ? void 0 : null == (e = x(b, 2)) ? void 0 : e.toUpperCase();
        if (d && b) {
            e = this.o.value;
            c = this.l.value;
            var f = this.B.value,
                g = f.style.height,
                h = f.style.width,
                k = f.style.display,
                l = f.style.position,
                m = uv(e.id + "_top", d),
                n = uv(e.id + "_bottom", b);
            _.Eh(n, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            f.appendChild(m);
            f.appendChild(n);
            _.Eh(c, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.Eh(e, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            var p;
            _.Eh(f, {
                position: "relative",
                display: (null == (p = this.G.screen.orientation) ? 0 : p.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            $F(this, 722, this.G, "orientationchange", function() {
                var q;
                (null == (q = a.G.screen.orientation) ? 0 : q.angle) ? _.Eh(f, {
                    display: "none"
                }): _.Eh(f, {
                    display: "block"
                })
            });
            _.Om(this, function() {
                _.Su(m);
                _.Su(n);
                f.style.position = l;
                f.style.height = g;
                f.style.width = h;
                f.style.display = k
            })
        }
    };
    var Qp = function(a, b, c, d, e, f) {
        f = void 0 === f ? Ro : f;
        Z.call(this, a, 783);
        var g = this;
        this.slotId = b;
        this.W = d;
        this.ya = e;
        this.J = f;
        this.F = !1;
        this.l = null;
        this.B = this.o = -1;
        this.O = _.Cr(function() {
            g.ya.dispatchEvent("impressionViewable", 715, new kJ(g.slotId, "publisher_ads"))
        });
        this.R = Dr(function() {
            g.ya.dispatchEvent("slotVisibilityChanged", 716, new lJ(g.slotId, "publisher_ads", g.B))
        }, 200);
        this.M = W(this, c);
        var h = new qz;
        zo(this.slotId, MF).then(function() {
            return void h.notify()
        });
        vz(this, h)
    };
    _.O(Qp, Z);
    Qp.prototype.j = function() {
        var a = this,
            b = this.J(_.zg(this.context, this.id, function(c) {
                c = _.z(c);
                for (var d = c.next(); !d.done; d = c.next()) a.o = 100 * d.value.intersectionRatio, _.v(Number, "isFinite").call(Number, a.o) && iK(a)
            }));
        b.observe(this.M.value);
        $F(this, this.id, this.W, "visibilitychange", function() {
            iK(a)
        });
        _.Om(this, function() {
            b.disconnect()
        })
    };
    var iK = function(a) {
            var b = !OD(a.W);
            jK(a, 50 <= a.o && b);
            b = Math.floor(b ? a.o : 0);
            if (0 > b || 100 < b || b === a.B ? 0 : -1 !== a.B || 0 !== b) a.B = b, a.R()
        },
        jK = function(a, b) {
            a.F || (b ? null === a.l && (a.l = setTimeout(function() {
                OD(a.W) || (a.O(), a.F = !0);
                a.l = null
            }, 1E3)) : null !== a.l && (clearTimeout(a.l), a.l = null))
        };
    var kK = P(["https://googleads.g.doubleclick.net/td/kb?kbli=", ""]),
        Kp = function(a, b, c) {
            Z.call(this, a, 1007);
            this.l = X(this, b);
            c && vz(this, c)
        };
    _.O(Kp, Z);
    Kp.prototype.j = function() {
        var a = this.l.value;
        if (null != a && a.length && null === document.getElementById("koelBirdIGRegisterIframe")) {
            var b = document.createElement("iframe");
            a = Fd(kK, encodeURIComponent(a.join()));
            b.removeAttribute("srcdoc");
            if (a instanceof Af) throw new zr("TrustedResourceUrl", 2);
            a = _.Na(a);
            void 0 !== a && (b.src = a);
            for (a = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" "); 0 < b.sandbox.length;) b.sandbox.remove(b.sandbox.item(0));
            for (var c = 0; c < a.length; c++) b.sandbox.supports && !b.sandbox.supports(a[c]) || b.sandbox.add(a[c]);
            b.id = "koelBirdIGRegisterIframe";
            document.head.appendChild(b)
        }
    };
    var rp = function(a, b, c) {
        Z.call(this, a, 666);
        this.o = b;
        this.l = V(this);
        this.B = X(this, c)
    };
    _.O(rp, Z);
    rp.prototype.j = function() {
        var a = new sp;
        if (this.B.ub()) {
            var b = _.y(a, 2, this.B.value);
            _.y(b, 3, 1)
        }
        if (this.o) {
            a = [this.o, a];
            b = new sp;
            a = _.z(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, Qj(c, 1) && _.y(b, 1, x(c, 1)), Qj(c, 2) && _.y(b, 2, x(c, 2)), Qj(c, 3) && _.y(b, 3, we(c, 3));
            a = b
        }
        b = this.l;
        a = Qj(a, 2) ? Qj(a, 3) && 0 !== (0, _.nl)() ? (0, D.ra)(x(a, 2)) * (0, D.ra)(we(a, 3)) : x(a, 2) : null;
        jz(b, a)
    };
    var Dp = function(a, b, c, d, e, f, g) {
        f = void 0 === f ? To : f;
        Z.call(this, a, 666);
        this.o = f;
        this.A = tz(this);
        vz(this, b);
        g && vz(this, g);
        this.l = W(this, c);
        this.F = X(this, d);
        this.B = X(this, e)
    };
    _.O(Dp, Z);
    Dp.prototype.j = function() {
        var a = this.B.value,
            b = this.F.value,
            c = this.l.value;
        null == a || 0 > a || 0 === b || !wh(c) ? this.A.notify() : lK(this, a, b, c)
    };
    var lK = function(a, b, c, d) {
        var e = a.o(b, _.zg(a.context, 291, function(f, g) {
            f = _.z(f);
            for (var h = f.next(); !h.done; h = f.next())
                if (h = h.value, !(0 >= h.intersectionRatio)) {
                    g.unobserve(h.target);
                    a.A.notify();
                    break
                }
        }));
        null != c && setTimeout(function() {
            a.A.notify();
            e.disconnect()
        }, c);
        e.observe(d);
        _.Om(a, function() {
            e.disconnect()
        })
    };
    var Bp = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 664);
        this.slotId = b;
        this.Cb = c;
        this.L = d;
        this.A = tz(this);
        this.o = W(this, e);
        this.l = X(this, f);
        g && vz(this, g)
    };
    _.O(Bp, Z);
    Bp.prototype.j = function() {
        var a = this,
            b, c = null != (b = this.l.value) ? b : 0;
        if (0 !== (0, _.nl)() || 0 < c) {
            var d = document;
            b = ND(d);
            if (OD(d) && b && (0 < XF(this.L, this.slotId) || !mK(this)) && b) {
                var e = $F(this, 324, d, b, function() {
                    OD(d) || (e && e(), a.A.notify())
                });
                if (e) return
            }
        }
        this.A.notify()
    };
    var mK = function(a) {
        var b = a.o.value;
        try {
            var c, d = null != (c = top) ? c : void 0;
            if (void 0 === d) return !0;
            var e = Ml(null == d ? void 0 : d.document, d).y,
                f = e + a.Cb.height;
            return b.y >= e && b.y <= f
        } catch (g) {
            return !0
        }
    };
    var yp = function(a, b, c) {
        Z.call(this, a, 1055);
        this.A = tz(this);
        vz(this, c);
        this.l = W(this, b)
    };
    _.O(yp, Z);
    yp.prototype.j = function() {
        this.l.value && this.A.notify()
    };
    var qp = function(a, b, c, d, e, f) {
        Z.call(this, a, 669);
        this.U = b;
        this.P = c;
        this.G = d;
        this.A = V(this);
        this.o = X(this, e);
        this.l = W(this, f)
    };
    _.O(qp, Z);
    qp.prototype.j = function() {
        if (Cj(dw) || Zg(this.P, $g, 16) && Dl("google_range_debug", this.G)) this.A.j(!0);
        else {
            var a, b = !(null == (a = this.o.value) || !x(a, 1)) && (F(this.P, 12) || F(this.U, 13)) || this.l.value;
            this.A.j(!!b)
        }
    };
    var Fp = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 719);
        this.U = b;
        this.B = c;
        this.A = V(this);
        this.l = W(this, d);
        this.F = W(this, e);
        this.o = X(this, f);
        this.J = X(this, g)
    };
    _.O(Fp, Z);
    Fp.prototype.j = function() {
        var a = this.l.value.kind;
        switch (a) {
            case 0:
                if (this.l.value.Ca)
                    if (this.F.value) nK(this);
                    else {
                        if (a = this.o.value) a = hv(), a = !(!a["allow-top-navigation-by-user-activation"] || !a["allow-popups-to-escape-sandbox"]);
                        a ? this.A.j(mF) : kz(this.A)
                    }
                else kz(this.A);
                break;
            case 1:
                nK(this);
                break;
            case 2:
                kz(this.A);
                break;
            default:
                Oa(a)
        }
    };
    var nK = function(a) {
        var b = a.J.value,
            c = new Kj;
        b = _.y(c, 3, b);
        F(Rj([b, a.U.Ra(), a.B.Ra()]), 3) ? a.A.j(mF) : kz(a.A)
    };
    var tp = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 681);
        this.adUnitPath = b;
        this.aa = c;
        this.M = d;
        this.window = e;
        this.wa = V(this);
        this.o = V(this);
        this.ac = V(this);
        this.l = Cj(dw).split(",");
        this.F = Gj(ew);
        this.Pa = Zg(c, $g, 16) ? De(c, $g, 16) : null;
        this.J = Cl("google_range_debug", this.window);
        this.O = X(this, f);
        this.ca = X(this, g);
        this.R = X(this, h);
        this.B = W(this, k);
        this.Y = W(this, l)
    };
    _.O(tp, Z);
    tp.prototype.j = function() {
        if (0 !== this.B.value.kind || this.B.value.Ca.length) {
            var a;
            if (a = !!(this.l.length || this.Pa && this.J)) {
                b: if (this.l.length) {
                    if (this.F.length && (a = this.adUnitPath.split("/"), !_.v(this.F, "includes").call(this.F, a[a.length - 1]))) {
                        a = !1;
                        break b
                    }
                    a = !0
                } else a = !1;
                var b = a;a = b ? oK(this) : null;
                if (b && a) {
                    b = this.Y.value;
                    var c, d, e = null != (d = null == (c = mh(b.parentElement)) ? void 0 : c.width) ? d : 0;
                    c = "p" === this.l[0];
                    d = Number(this.l[0]);
                    if (c = "f" === this.l[0] ? this.M : d && 0 < d ? d : c ? Math.min(e, this.M) : null) {
                        d = c <= e ? 1 : 2;
                        e = a.width;
                        var f = a.height,
                            g = this.l[1],
                            h = Number(g);
                        e = "ratio" === g && e ? Math.floor(f / e * c) : h && 0 < h ? f * h : f;
                        a = pK(c, e, "<p>Requested size:" + a.width + "x" + a.height + "</p>");
                        qK(this, c, e, {
                            kind: 0,
                            Ca: a
                        }, d, b);
                        a = !0
                    } else a = !1
                } else a = !1;
                if (!a) a: if (this.Pa && this.J) {
                    c = Tl(this.Pa, this.window);
                    d = Ul(this.Pa, this.window);
                    e = Vl(this.Pa);
                    f = Wl(this.Pa);
                    switch (this.J) {
                        case "max":
                            a = c;
                            b = d;
                            break;
                        case "min":
                            a = e;
                            b = f;
                            break;
                        case "banner":
                            a = c;
                            b = 90 > d ? d : 90 < f ? f : 90;
                            break;
                        case "skyscraper":
                            a = 90 > c ? c : 90 < e ? e : 90;
                            b = d;
                            break;
                        default:
                            a = !1;
                            break a
                    }
                    c = pK(a, b, "<p>Minimum size:" + e + "x" + f + "</p><p>Maximum size:" + (c + "x" + d + "</p><div id=toowide style=\"display:none; background:#faa\">Slot does not fit horizontally<script>new IntersectionObserver((e) => {toowide.style.display =   (e[e.length-1].boundingClientRect.width >    e[e.length-1].intersectionRect.width) ? 'block' : 'none';},{threshold:1}).observe(document.body);\x3c/script></div>"));
                    qK(this, a, b, {
                        kind: 0,
                        Ca: c
                    });
                    a = !0
                } else a = !1
            }
            a || rK(this)
        } else rK(this)
    };
    var oK = function(a) {
            a = Yg(a.aa)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.lh(a[0], a[1]) : null
        },
        pK = function(a, b, c) {
            return '<html><body style="height:' + (b - 2 + "px;width:" + (a - 2 + "px;background-color:#ddd;color:#000;border:1px solid #f00;") + (_.G(gw) ? "margin:0;" : "") + '">') + c + ("<p>Rendered size:" + a + "x" + b + "</p></body></html>")
        },
        qK = function(a, b, c, d, e, f) {
            e = void 0 === e ? a.O.value : e;
            a.o.j(new _.lh(b, c));
            a.wa.j(d);
            jz(a.ac, e);
            f && _.Fv(f, "opacity", .5)
        },
        rK = function(a) {
            var b = a.ca.value;
            if (null == b) throw new nk("Missing 'width'.");
            var c = a.R.value;
            if (null == c) throw new nk("Missing 'height'.");
            qK(a, b, c, a.B.value)
        };
    var op = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 673);
        this.slotId = b;
        this.yb = c;
        this.B = d;
        this.o = e;
        this.W = f;
        this.l = g;
        this.L = h;
        this.A = V(this)
    };
    _.O(op, Z);
    op.prototype.j = function() {
        var a = this,
            b, c;
        return _.$a(function(d) {
            if (1 == d.j) {
                if (a.yb) {
                    sK(a, a.yb);
                    a.A.j(a.yb);
                    d.j = 0;
                    return
                }
                if (dh(a.l)) {
                    a.A.j(tK(a));
                    d.j = 0;
                    return
                }
                return ab(d, zo(a.slotId, HF), 4)
            }
            b = d.m;
            c = b.detail;
            if (a.D) return d.return();
            sK(a, c);
            a.A.j(c);
            d.j = 0
        })
    };
    var tK = function(a) {
            var b = _.rd("INS");
            b.id = a.B;
            _.Eh(b, {
                display: "none"
            });
            a.W.documentElement.appendChild(b);
            var c = function() {
                return void _.Su(b)
            };
            2 === a.l || 3 === a.l ? RF(a.L, a.slotId, c) : _.Om(a, c);
            return b
        },
        sK = function(a, b) {
            if (2 !== a.l && 3 !== a.l) {
                for (var c = _.z(_.v(Array, "from").call(Array, b.childNodes)), d = c.next(); !d.done; d = c.next()) d = d.value, 1 === d.nodeType && d.id !== a.o && _.Su(d);
                b.style.display = ""
            }
        };
    var Ap = function(a, b) {
        Z.call(this, a, 676);
        this.A = V(this);
        this.l = W(this, b)
    };
    _.O(Ap, Z);
    Ap.prototype.j = function() {
        var a = jh(this.l.value);
        this.A.j(a)
    };
    var Gp = function(a, b, c, d, e) {
        Z.call(this, a, 807);
        this.G = b;
        this.A = tz(this);
        this.l = X(this, c);
        this.o = W(this, d);
        e && vz(this, e)
    };
    _.O(Gp, Z);
    Gp.prototype.j = function() {
        var a = this.l.value;
        if (a && !this.o.value) {
            var b = wv(this.G);
            BF(new AF(b, a)) || this.V(new nk("Cannot create top window frame"))
        }
        this.A.notify()
    };
    var up = function(a, b, c) {
        Z.call(this, a, 881);
        this.Ta = b;
        this.A = V(this);
        this.l = X(this, c)
    };
    _.O(up, Z);
    up.prototype.j = function() {
        if (_.G(kx) || !this.l.value) kz(this.A);
        else {
            for (var a = this.l.value, b = [], c = _.z((E = OH(this.Ta), _.v(E, "values")).call(E)), d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                try {
                    b.push(JSON.parse(d))
                } catch (e) {
                    Eg(this.context, 1023, e)
                }
            }
            0 === b.length ? this.A.j($o(a)) : this.A.j($o(a, b))
        }
    };
    up.prototype.m = function() {
        kz(this.A)
    };
    var ap = navigator,
        bp = /(\$\{GDPR})/gi,
        cp = /(\$\{GDPR_CONSENT_[0-9]+\})/gi,
        dp = /(\$\{ADDTL_CONSENT})/gi;
    var uK = navigator,
        vp = function(a, b, c, d, e, f, g, h) {
            Z.call(this, a, 882);
            this.L = b;
            this.Z = c;
            this.Y = d;
            this.wa = V(this);
            this.J = V(this);
            this.o = V(this);
            this.l = X(this, e);
            this.M = X(this, f);
            this.O = W(this, g);
            this.R = X(this, h)
        };
    _.O(vp, Z);
    var vK = function(a) {
        jz(a.o, a.Y);
        a.wa.j(a.O.value);
        jz(a.J, a.R.value)
    };
    vp.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n, p;
        return _.$a(function(q) {
            if (1 == q.j) {
                if (_.G(kx) || !a.l.value || !a.M.value) return vK(a), q.return();
                b = a.l.value.getWidth();
                c = a.l.value.getHeight();
                if (!b || !c) return vK(a), q.return();
                d = Vn(a.l.value, Yo, 5);
                a.B = d.getEscapedQemQueryId();
                a.F = bn(d, 6);
                e = fp(d, 9);
                if (f = fp(d, 10))
                    if (vK(a), fp(d, 17)) return gp(0, 0, d), q.return();
                Jh("pre_run_ad_auction_ping", function(u) {
                    Ph(u, a.context);
                    var A;
                    K(u, "winner_qid", null != (A = a.B) ? A : "");
                    var H;
                    K(u, "xfpQid", null != (H = a.F) ? H : "");
                    K(u, "publisher_tag", "gpt")
                }, 1);
                g = performance.now();
                h = ce(a.l.value, 8) || 1E3;
                return ab(q, wK(a, a.M.value, d, h, g), 2)
            }
            if (3 != q.j) return k = q.m, l = Math.round(performance.now() - g), m = 2 === k, n = 1 === k, p = k && !m && !n, Jh("run_ad_auction_stats", function(u) {
                Ph(u, a.context);
                K(u, "duration_ms", l);
                K(u, "applied_timeout_ms", h);
                K(u, "timed_out", m);
                K(u, "auction_skipped", n);
                K(u, "auction_winner", p ? 1 : 0);
                K(u, "thread_release_only", fp(d, 15) ? 1 : 0);
                var A;
                K(u, "winner_qid", null != (A = a.B) ? A : "");
                var H;
                K(u, "xfpQid", null != (H = a.F) ? H : "");
                K(u, "publisher_tag", "gpt")
            }, 1), !k || n || m ? (gp(l, m ? h : 0, d), f || vK(a), q.return()) : f ? q.return() : e ? (vK(a), q.return()) : ab(q, ep(k, {
                gdprApplies: Qj(a.Z, 3) ? F(a.Z, 3) ? "1" : "0" : null,
                Ge: x(a.Z, 2),
                ke: x(a.Z, 4)
            }), 3);
            a.wa.j({
                kind: 2,
                td: k
            });
            a.J.j(new _.lh(b, c));
            a.o.j(!1);
            q.j = 0
        })
    };
    vp.prototype.m = function() {
        vK(this)
    };
    var wK = function(a, b, c, d, e) {
        var f, g, h, k, l, m, n, p;
        return _.$a(function(q) {
            if (1 == q.j) {
                f = ce(c, 14) || -1;
                if (0 < f && a.L.I >= f) return q.return(1);
                g = ce(c, 13) || -1;
                if (0 < g && a.L.C >= g) return q.return(1);
                ++a.L.I;
                ++a.L.C;
                h = function(u) {
                    Jh("run_ad_auction_complete", function(A) {
                        Ph(A, a.context);
                        K(A, "duration_ms", Math.round(performance.now() - e));
                        K(A, "applied_timeout_ms", d);
                        K(A, "auction_has_winner", !!u);
                        a.B && K(A, "winner_qid", a.B);
                        a.F && K(A, "xfpQid", a.F)
                    }, 1)
                };
                if (k = _.G(lx) && "AbortSignal" in window && AbortSignal.timeout) b.signal = AbortSignal.timeout(d);
                n = fp(c, 15) ? new w.Promise(function(u) {
                    setTimeout(function() {
                        u(null)
                    }, 0)
                }) : null == (m = (l = uK).runAdAuction) ? void 0 : m.call(l, b).then(function(u) {
                    h(u);
                    return u
                }).catch(function(u) {
                    if (u instanceof DOMException && "TimeoutError" === u.name) return 2;
                    throw u;
                });
                return ab(q, k, 2)
            }
            p = q.m ? n : w.Promise.race([n, vv(d)]);
            --a.L.I;
            return q.return(p)
        })
    };
    var xK = function(a) {
            this.context = a;
            this.j = new w.Map
        },
        yK = function(a, b) {
            if (b) {
                var c;
                null == (c = a.j.get(b)) || c.Ea();
                a.j.delete(b)
            }
        },
        zK = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, u, A) {
            var H = document;
            e || f || yK(a, d);
            var C = Vp(a.context, b, c, d, e, f, g, h, k, l, H, n, p, q, u, A, function() {
                if (d) {
                    var I;
                    null == (I = a.j.get(d)) || I.Ea();
                    a.j.set(d, C)
                }
            });
            f || a.j.set(d, C);
            _.Om(d, function() {
                return void yK(a, d)
            });
            m.top !== m && m.addEventListener("pagehide", function(I) {
                I.persisted || yK(a, d)
            });
            Xe(C)
        };
    var AK = function(a, b, c, d) {
        Z.call(this, a, 1058);
        this.G = b;
        this.o = tz(this);
        this.B = W(this, c);
        this.l = X(this, d)
    };
    _.O(AK, Z);
    AK.prototype.j = function() {
        if (this.l.value && F(this.B.value, 5)) {
            var a = {
                    message: "goog:spam:client_age",
                    pvsid: re(this.G)
                },
                b = this.l.value;
            b(a)
        }
        this.o.notify()
    };
    var BK = function(a, b) {
        Z.call(this, a, 802);
        this.G = b;
        this.l = V(this);
        this.o = V(this)
    };
    _.O(BK, Z);
    BK.prototype.j = function() {
        var a = this,
            b, c, d, e;
        return _.$a(function(f) {
            if (1 == f.j) {
                if (!_.G(Aw)) return a.o.j(!1), a.l.j(""), f.return();
                b = Wf(a.G);
                if (!b) {
                    a.o.j(!1);
                    a.l.j("");
                    f.j = 0;
                    return
                }
                a.o.j(!0);
                f.D = 3;
                return ab(f, b, 5)
            }
            if (3 != f.j) return d = null != (c = f.m) ? c : "0", d.length > _.pe(Dw) && (Eg(a.context, a.id, new nk("ML:" + d.length)), d = "0"), a.l.j(d), cb(f, 0);
            e = db(f);
            Eg(a.context, a.id, e);
            a.l.j("0");
            f.j = 0
        })
    };
    BK.prototype.m = function() {
        this.o.j(!1);
        this.l.j("")
    };
    var CK = function(a, b, c) {
        Z.call(this, a, 944);
        this.G = b;
        this.l = new Nz(this.G);
        this.o = W(this, c)
    };
    _.O(CK, Z);
    CK.prototype.j = function() {
        var a = this.o.value;
        if (Pz(this.l, a)) {
            var b = Oz(this.l, "__gpi_opt_out", a);
            if (b) {
                var c = new nu;
                b = _.y(c, 1, b);
                b = rm(_.y(b, 2, 2147483647), 3, "/");
                b = _.y(b, 4, this.G.location.hostname);
                Qz(this.l, "__gpi_opt_out", b, a)
            }
        }
    };
    var DK = function(a, b, c, d) {
        d = void 0 === d ? Xp : d;
        Z.call(this, a, 883);
        this.B = b;
        this.F = d;
        this.l = tz(this);
        this.o = W(this, c)
    };
    _.O(DK, Z);
    DK.prototype.j = function() {
        var a = this;
        return _.$a(function(b) {
            if (1 == b.j) {
                if (!F(a.o.value, 5) || _.G(Hw)) return a.l.notify(), b.return();
                _.G(Gw) || yD(a.B);
                if (!a.F()) {
                    zD(null);
                    b.j = 2;
                    return
                }
                return ab(b, new w.Promise(function(c) {
                    return void zD(c)
                }), 2)
            }
            a.l.notify();
            b.j = 0
        })
    };
    var EK = function(a, b, c, d, e) {
        Z.call(this, a, 884);
        this.Ba = b;
        this.l = c;
        this.o = V(this);
        this.F = X(this, d);
        this.B = W(this, e)
    };
    _.O(EK, Z);
    EK.prototype.j = function() {
        this.l.m = this.F.value;
        wH(this.l, Oz(this.Ba, "__gads", this.B.value));
        Xj(20);
        Xj(2);
        this.o.j(se())
    };
    var FK = function(a, b, c) {
        Z.call(this, a, 873);
        this.G = b;
        this.l = W(this, c)
    };
    _.O(FK, Z);
    FK.prototype.j = function() {
        var a = this.context,
            b = this.l.value,
            c = this.G;
        !Ti()._pubconsole_disable_ && (b = ne("google_pubconsole", b, c)) && (b = b.split("|"), "1" !== b[0] && "0" !== b[0] || Yi(a, c))
    };
    var GK = function(a, b, c) {
        Z.call(this, a, 798);
        this.A = V(this);
        this.l = X(this, b);
        this.o = W(this, c)
    };
    _.O(GK, Z);
    GK.prototype.j = function() {
        var a = this,
            b = new w.Map;
        if (this.l.value) {
            var c = this.l.value,
                d = c.ga.Ia,
                e = c.Rc.Sc;
            c = _.z(_.v(c.ba.X, "entries").call(c.ba.X));
            for (var f = c.next(); !f.done; f = c.next()) {
                var g = _.z(f.value);
                f = g.next().value;
                g = g.next().value;
                b.set(g, d ? HK(this, g, e[f]) : function() {
                    return a.o.value
                })
            }
        }
        this.A.j(b)
    };
    var HK = function(a, b, c) {
        return th(function() {
            var d = _.v(Object, "assign").call(Object, {}, a.l.value);
            d.ba.fd = !0;
            d.ba.X = [b];
            d.Rc.Sc = c ? [c] : [];
            return Bl(sI(new qI(d))).url
        })
    };
    var IK = function(a, b, c, d, e, f) {
        f = void 0 === f ? Yp : f;
        Z.call(this, a, 886);
        this.X = b;
        this.L = c;
        this.l = d;
        this.W = e;
        this.o = f;
        this.A = tz(this)
    };
    _.O(IK, Z);
    IK.prototype.j = function() {
        var a = this,
            b, c;
        return _.$a(function(d) {
            if (1 == d.j) return 3 !== MD(a.W) ? (d.j = 2, d = void 0) : d = ab(d, new w.Promise(function(e) {
                return void QD(e, a.W)
            }), 2), d;
            if (4 != d.j) return b = a.l ? So(a.l) : null, null == b || (c = a.X.some(function(e) {
                return !wh(sh(e))
            })) ? (a.A.notify(), d.return()) : ab(d, JK(a, b), 4);
            a.A.notify();
            d.j = 0
        })
    };
    var JK = function(a, b) {
        return new w.Promise(function(c) {
            var d = a.o(function(h, k) {
                h.some(function(l) {
                    return 0 < l.intersectionRatio
                }) && (k.disconnect(), c())
            }, b + "%");
            _.Om(a, function() {
                return void d.disconnect()
            });
            for (var e = {}, f = _.z(a.X), g = f.next(); !g.done; e = {
                    Hb: e.Hb
                }, g = f.next()) {
                g = g.value;
                e.Hb = sh(g);
                if (!e.Hb) break;
                d.observe(e.Hb);
                SF(a.L, g, function(h) {
                    return function() {
                        return void d.unobserve(h.Hb)
                    }
                }(e))
            }
        })
    };
    var KK = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        Z.call(this, a, 866);
        this.F = b;
        this.l = c;
        this.B = d;
        this.nb = e;
        this.sb = f;
        this.Db = g;
        this.Z = h;
        this.W = k;
        this.A = tz(this);
        this.o = W(this, l);
        this.M = W(this, m);
        vz(this, n);
        this.J = W(this, p)
    };
    _.O(KK, Z);
    KK.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n;
        return _.$a(function(p) {
            if (1 == p.j) {
                b = a.M.value;
                if (!b) return a.A.notify(), p.return();
                c = document.createElement("script");
                d = {
                    source: b,
                    credentials: a.J.value ? "include" : "omit",
                    resources: [a.Db.toString()]
                };
                c.setAttribute("type", "webbundle");
                Ra(c, new Qa(JSON.stringify(d).replace(/</g, "\\x3c"), Cn));
                e = _.rd("SCRIPT");
                Ta(e, a.Db);
                a.W.head.appendChild(c);
                _.G(ox) && c.addEventListener("error", function(q) {
                    q = new Hy("string" === typeof q ? q : "Failed to load web bundle.");
                    a.l(q)
                });
                a.W.head.appendChild(e);
                a.A.notify();
                return ab(p, LK(a), 2)
            }
            f = p.m;
            g = f.je;
            h = f.af;
            delete Ti()[a.sb.replace("googletag.", "")];
            if (g.length !== h.length) return a.l(new Gy("Received " + g.length + " ad URLs but " + h.length + " metadatas")), p.return();
            d.resources = g.filter(function(q) {
                return q
            });
            d.resources.length ? (k = _.rd("SCRIPT"), k.setAttribute("type", "webbundle"), Ra(k, new Qa(JSON.stringify(d).replace(/</g, "\\x3c"), Cn)), a.W.head.removeChild(c), a.W.head.appendChild(k)) : a.W.head.removeChild(c);
            for (l = 0; l < g.length; l++) m = g[l], n = h[l], a.F(l, n, {
                kind: 1,
                url: m
            }, a.o.value, a.Z);
            a.B(g.length - 1, a.o.value, a.Z);
            p.j = 0
        })
    };
    var LK = function(a) {
        var b = Ti(),
            c = a.sb.replace("googletag.", "");
        return new w.Promise(function(d) {
            var e = !1;
            Object.defineProperty(b, c, {
                value: function(f, g) {
                    e || d({
                        je: f,
                        af: g
                    });
                    e = !0
                },
                writable: !1,
                enumerable: !1,
                configurable: !0
            })
        })
    };
    var MK = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 810);
        this.B = b;
        this.Ia = c;
        this.N = d;
        this.o = e;
        this.G = f;
        this.Z = g;
        this.l = V(this)
    };
    _.O(MK, Z);
    MK.prototype.j = function() {
        var a = this,
            b = this.B;
        !this.Ia && 1 < this.B.length && (b = [b[0]]);
        b = b.filter(function(c) {
            if (c.D) return !1;
            var d = a.N.P[c.getDomId()],
                e;
            if (e = !(Lm(gl(d)) && (E = Gj(Mw), _.v(E, "includes")).call(E, String(gl(d))))) cl(a.G) && 4 === gl(d) ? (M(a.o, SG("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath()))), e = !0) : e = !1, e = !e;
            return e && !jl(a.context, a.o, c, d, a.G, a.Z)
        });
        30 < b.length && (M(this.o, OG("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        this.l.j(b)
    };
    var NK = function(a, b, c, d, e, f) {
        Z.call(this, a, 957);
        this.Z = b;
        this.o = c;
        this.B = e;
        this.l = f;
        this.A = V(this);
        d && (this.F = W(this, d))
    };
    _.O(NK, Z);
    NK.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n, p;
        return _.$a(function(q) {
            switch (q.j) {
                case 1:
                    b = _.pe(xw);
                    if (2 === b && !F(a.Z, 5)) {
                        a.A.j((null == (c = a.F) ? 0 : c.value) ? "0" : "");
                        q.j = 0;
                        break
                    }
                    if (a.l) return ab(q, a.l.promise, 6);
                    h = a.A;
                    k = h.j;
                    return ab(q, null != (f = null == (d = a.o) ? void 0 : d.promise) ? f : null == (e = a.B) ? void 0 : e.promise.then(function(u) {
                        return u ? u() : ""
                    }), 5);
                case 5:
                    k.call(h, null != (g = q.m) ? g : "");
                    q.j = 0;
                    break;
                case 6:
                    l = q.m;
                    m = a.A;
                    n = m.j;
                    if (!l) {
                        p = "";
                        q.j = 7;
                        break
                    }
                    return ab(q, l(), 8);
                case 8:
                    p = q.m;
                case 7:
                    n.call(m, p), q.j = 0
            }
        })
    };
    NK.prototype.m = function() {
        this.A.j("")
    };
    var OK = function(a, b, c) {
        Z.call(this, a, 919);
        this.l = b;
        this.Z = c;
        this.A = V(this)
    };
    _.O(OK, Z);
    OK.prototype.j = function() {
        var a, b = !(null == (a = this.l) ? 0 : F(a, 9)) && !!F(this.Z, 5);
        this.A.j(b)
    };
    var PK = function(a, b, c, d, e, f) {
        Z.call(this, a, 935);
        this.L = b;
        this.N = c;
        this.W = d;
        this.A = tz(this);
        this.l = W(this, e);
        vz(this, f)
    };
    _.O(PK, Z);
    PK.prototype.j = function() {
        var a = this.N,
            b = a.U;
        a = a.P;
        for (var c = _.z(this.l.value), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a[d.getDomId()],
                f = this.W;
            Xl(e, b) && !this.L.hb(d) && Yl(d, f, e, b)
        }
        this.A.notify()
    };
    var QK = function(a, b, c, d, e, f) {
        f = void 0 === f ? di : f;
        Z.call(this, a, 939);
        this.o = b;
        this.G = c;
        this.Z = d;
        this.l = f;
        vz(this, e)
    };
    _.O(QK, Z);
    QK.prototype.j = function() {
        this.l(this.G, ho(jo(ko(_.Bg(io(new lo, Zs(new go, String(this.o))), 4, 1), 2), this.context.Za || this.context.Ha), F(this.Z, 5)), _.G(Lx) ? function() {} : void 0)
    };
    var RK = function(a, b, c, d, e) {
        Z.call(this, a, 905);
        this.N = b;
        this.l = c;
        this.A = tz(this);
        this.o = W(this, d);
        vz(this, e)
    };
    _.O(RK, Z);
    RK.prototype.j = function() {
        for (var a = _.z(this.o.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            switch (null == (c = this.N.P[b.value.getDomId()]) ? void 0 : gl(c)) {
                case 2:
                case 3:
                case 5:
                    this.l.load(_.PJ);
                    return
            }
        }
        this.A.notify()
    };
    var SK = function(a, b, c, d, e) {
        Z.call(this, a, 833);
        this.nb = b;
        this.l = c;
        this.G = d;
        this.A = tz(this);
        vz(this, e)
    };
    _.O(SK, Z);
    SK.prototype.j = function() {
        if ("wbn" !== this.nb) {
            var a = this.l,
                b = this.G,
                c = _.G($w) ? qh() : FE();
            c = {
                version: xH ? xH : xH = Ej(),
                Tb: c,
                Cf: _.G(ax)
            };
            c = oF.Te(c);
            var d = WE(b);
            c = d ? Bd(c, new w.Map([
                ["n", String(d)]
            ])) : c;
            d = Gj(Hj);
            for (var e = new w.Map, f = 0; f < d.length; f += 2) e.set(d[f], d[f + 1]);
            c = Bd(c, e);
            d = a.resources[c.toString()];
            var g;
            _.G($w) || _.G(Zw) || d || (null == (g = Ti()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1, b = b.document, a = _.rd("IFRAME"), a.src = Sa(c).toString(), a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)))
        }
        this.A.notify()
    };
    var TK = function(a, b, c, d) {
        Z.call(this, a, 928);
        this.requestId = b;
        this.A = tz(this);
        this.l = W(this, c);
        vz(this, d)
    };
    _.O(TK, Z);
    TK.prototype.j = function() {
        var a = this.context,
            b = this.requestId,
            c = this.l.value.length;
        if (a.Sb) {
            var d = a.eb;
            a = tg(a);
            var e = new Qv;
            b = _.Cc(e, 2, b, 0);
            c = _.Cc(b, 1, c, 0);
            c = wg(a, 7, xg, c);
            Jd(d, c)
        }
        this.A.notify()
    };
    var UK = function(a, b, c, d) {
        Z.call(this, a, 867);
        this.ya = b;
        this.N = c;
        this.A = tz(this);
        this.l = W(this, d)
    };
    _.O(UK, Z);
    UK.prototype.j = function() {
        for (var a = _.z(this.l.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.z(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = x(this.N.P[b.getDomId()], 20);
            b.dispatchEvent(JF, 808, {
                se: c,
                qf: d
            });
            this.ya.dispatchEvent("slotRequested", 705, new oJ(b, "publisher_ads"))
        }
        this.A.notify()
    };
    var VK = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, u, A, H, C, I, R, S, U, Y, sa, xa) {
        Z.call(this, a, 785, _.pe(dx));
        this.Ia = b;
        this.L = c;
        this.Ba = d;
        this.N = e;
        this.nb = f;
        this.bb = g;
        this.Bb = h;
        this.Ab = k;
        this.Zc = l;
        this.Db = m;
        this.sb = n;
        this.qb = p;
        this.Z = q;
        this.isSecureContext = u;
        this.G = A;
        this.J = H;
        this.jc = C;
        this.ja = S;
        this.l = V(this);
        this.B = V(this);
        this.R = V(this);
        this.ca = V(this);
        this.ia = V(this);
        vz(this, U);
        this.aa = uz(this, H);
        this.o = uz(this, C);
        this.M = W(this, I);
        this.Y = W(this, R);
        this.F = uz(this, this.ja);
        vz(this, U);
        vz(this, Y);
        sa && (this.fa = W(this, sa));
        this.O = new pz(xa)
    };
    _.O(VK, Z);
    VK.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n, p, q, u, A, H;
        return _.$a(function(C) {
            if (1 == C.j) {
                if (!a.M.value.length) return a.l.j(""), kz(a.B), C.return();
                b = !_.G(Hw);
                if (b) {
                    If();
                    var I = Kf[1]
                } else I = "";
                c = I;
                b ? (If(), I = Kf[4]) : I = "";
                d = I;
                b ? (If(), I = Kf[6]) : I = "";
                e = I;
                k = null != (h = null == (f = a.F) ? void 0 : f.value) ? h : null !== (null == (g = a.F) ? void 0 : g.value) || a.F.mb.m ? null : 1;
                a.o.value && (a.L.ic = a.o.value);
                p = {
                    ga: {
                        G: a.G,
                        context: a.context,
                        L: a.L,
                        Ba: a.Ba,
                        Z: a.Z,
                        Ia: a.Ia,
                        Zc: a.Zc,
                        isSecureContext: a.isSecureContext
                    },
                    ba: {
                        X: a.M.value,
                        N: a.N,
                        bb: a.bb,
                        fd: !1
                    },
                    Hf: {
                        Bb: a.Bb,
                        Ab: a.Ab
                    },
                    cf: {
                        me: c,
                        Ue: d,
                        jf: e
                    },
                    ef: {
                        He: null != (m = a.aa.value) ? m : "0"
                    },
                    de: {
                        nb: a.nb,
                        Db: a.Db,
                        sb: a.sb
                    },
                    Rc: {
                        Sc: a.Y.value
                    },
                    yf: {
                        zf: k
                    },
                    tf: {
                        mh: null != (n = null == (l = a.fa) ? void 0 : l.value) ? n : null,
                        gf: a.O.value
                    }
                };
                a.B.j(p);
                q = new qI(p);
                u = Bl(sI(q));
                A = u.url;
                H = u.yd;
                Fy(a.qb, (9).toString(), 9, H);
                a.l.j(A);
                a.R.j(c);
                a.ca.j(d);
                a.ia.j(e);
                return ab(C, a.J.promise, 2)
            }
            if (4 != C.j) {
                if (a.D) return C.return();
                Jh("gpt_paw", function(R) {
                    Ph(R, a.context);
                    var S;
                    K(R, "sig", null != (S = a.J.l) ? S : -1);
                    K(R, "req", a.T);
                    K(R, "req_cnt", a.L.D);
                    var U;
                    K(R, "dm", null != (U = window.navigator.deviceMemory) ? U : -1)
                }, _.pe(Fw));
                a.o.value ? C = ab(C, a.jc.promise, 4) : (C.j = 0, C = void 0);
                return C
            }
            Jh("gpt_etu", function(R) {
                Ph(R, a.context);
                var S;
                K(R, "sig", null != (S = a.jc.l) ? S : -1);
                K(R, "req", a.T)
            });
            C.j = 0
        })
    };
    var WK = function(a, b, c, d, e, f) {
        Z.call(this, a, 878);
        this.l = b;
        this.W = c;
        this.N = d;
        this.G = e;
        this.A = tz(this);
        vz(this, f)
    };
    _.O(WK, Z);
    WK.prototype.j = function() {
        for (var a = _.z(this.l), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = sh(b, this.W);
            if (!rh(b, this.W) && c) {
                a: {
                    var d = c;
                    var e = this.N.P[b.getDomId()],
                        f = 0,
                        g = 0;e = _.z(Yg(e));
                    for (var h = e.next(); !h.done; h = e.next())
                        if (h = h.value, Array.isArray(h)) {
                            var k = _.z(h);
                            h = k.next().value;
                            k = k.next().value;
                            if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h, g = Math.min(g || Infinity, k), wl(uh(d, this.G)) || !d.parentElement || wl(uh(d.parentElement, this.G))))) {
                                d = [f, 0];
                                break a
                            }
                        }
                    d = f || g ? [f, g] : null
                }
                g = this.N;f = g.U;g = g.P[b.getDomId()];vl(c, Ah(b), eh(f, g), d)
            }
        }
        this.A.notify()
    };
    var XK = function(a, b, c) {
        Z.call(this, a, 1051);
        this.o = b;
        this.l = X(this, c)
    };
    _.O(XK, Z);
    XK.prototype.j = function() {
        var a = this;
        this.l.value && jf(this.l.value, function(b, c) {
            Eg(a.context, b, c);
            var d, e;
            null == (d = a.o) || null == (e = d.error) || e.call(d, c)
        })
    };
    var YK = function(a, b, c, d, e) {
            this.C = a;
            this.l = b;
            this.I = c;
            this.X = d;
            this.Z = e;
            this.D = "";
            this.m = -1;
            this.state = 1;
            this.j = ""
        },
        ZK = function(a, b) {
            a.state = 4;
            try {
                a.l(b)
            } catch (c) {}
        };
    var $K = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 788);
        this.J = b;
        this.M = c;
        this.F = d;
        this.Z = e;
        this.A = tz(this);
        this.B = 0;
        this.o = !1;
        this.l = null != l ? l : new XMLHttpRequest;
        this.R = W(this, f);
        this.Y = W(this, g);
        vz(this, h);
        this.O = W(this, k)
    };
    _.O($K, Z);
    $K.prototype.j = function() {
        var a = this,
            b = this.Y.value;
        if (b) {
            var c = new YK(this.J, this.M, this.F, this.R.value, this.Z);
            this.l.open("GET", b);
            this.l.withCredentials = this.O.value;
            this.l.onreadystatechange = function() {
                aL(a, c, !1)
            };
            this.l.onload = function() {
                aL(a, c, !0)
            };
            this.l.onerror = function() {
                ZK(c, new Hy("XHR error"))
            };
            this.l.send()
        }
        this.A.notify()
    };
    var aL = function(a, b, c) {
        try {
            if (3 === a.l.readyState || 4 === a.l.readyState)
                if (300 <= a.l.status) a.o || (ZK(b, new Hy("xhr_err-" + a.l.status)), a.o = !0);
                else {
                    var d = a.l.responseText.substr(a.B);
                    if (d && d)
                        if (1 !== b.state && 2 !== b.state) ZK(b, new Gy("state err: (" + ([b.state, b.j.length].join() + ")")));
                        else {
                            b.j && (d = b.j + d);
                            var e = 0,
                                f = !1;
                            do {
                                var g = d.indexOf("\n", e);
                                f = -1 !== g;
                                if (!f) break;
                                var h = b,
                                    k = d.substr(e, g - e);
                                if (1 === h.state) h.D = k, ++h.m, h.state = 2;
                                else {
                                    try {
                                        h.C(h.m, h.D, {
                                            kind: 0,
                                            Ca: rv(k)
                                        }, h.X, h.Z), h.D = ""
                                    } catch (l) {}
                                    h.state = 1
                                }
                                e = g + 1
                            } while (f && e < d.length);
                            b.j = d.substr(e)
                        }
                    a.B = a.l.responseText.length;
                    c && 4 === a.l.readyState && (1 !== b.state || b.j ? ZK(b, new Gy("state err (" + ([b.state, b.j.length].join() + ")"))) : (b.state = 3, b.I(b.m, b.X, b.Z)))
                }
        } catch (l) {
            ZK(b, l)
        }
    };
    var bL = function(a, b, c, d, e) {
        Z.call(this, a, 918);
        this.N = b;
        this.qb = c;
        this.A = tz(this);
        this.l = W(this, e);
        vz(this, d)
    };
    _.O(bL, Z);
    bL.prototype.j = function() {
        var a = this.l.value;
        a.length && Lo(this.qb, "3", (0, D.K)(x(this.N.P[a[0].getDomId()], 20)));
        this.A.notify()
    };
    var cL = function(a, b) {
        Z.call(this, a, 820);
        this.G = b;
        this.A = V(this)
    };
    _.O(cL, Z);
    cL.prototype.j = function() {
        var a = this,
            b, c, d, e;
        return _.$a(function(f) {
            if (1 == f.j) return ab(f, gi(a.G), 2);
            b = f.m;
            c = b.ic;
            d = b.status;
            c || Jh("gpt_etu", function(g) {
                Ph(g, a.context);
                K(g, "rsn", d)
            });
            a.A.j(null != (e = c) ? e : "");
            f.j = 0
        })
    };
    var dL = function(a, b, c, d, e, f) {
        Z.call(this, a, 978);
        this.l = b;
        this.Z = c;
        this.G = e;
        this.localStorage = f;
        this.A = V(this);
        this.o = X(this, d)
    };
    _.O(dL, Z);
    dL.prototype.j = function() {
        var a = this,
            b, c;
        return _.$a(function(d) {
            if (1 == d.j) {
                if (!_.G(jx) || !a.o.value) return kz(a.A), d.return();
                var e, f, g, h, k, l;
                if ((null == (e = a.l) ? 0 : F(e, 8)) || _.G(Vw) && (null == (f = a.l) ? 0 : F(f, 13)) || (null == (g = a.l) ? 0 : F(g, 1)) || 1 === (null == (h = a.l) ? void 0 : be(h, 6, 2)) || 1 === (null == (k = a.l) ? void 0 : x(k, 5)) || (null == (l = a.l) ? 0 : F(l, 9)) || !F(a.Z, 5) || F(a.Z, 9)) {
                    a.A.j(5);
                    d.j = 0;
                    return
                }
                b = a.A;
                c = b.j;
                return ab(d, qi(a.o.value, a.G, _.G(gx), _.G(ix), new _.tE(a.context), a.localStorage), 3)
            }
            c.call(b, d.m);
            d.j = 0
        })
    };
    dL.prototype.m = function() {
        kz(this.A)
    };
    var fL = function(a, b, c) {
        Z.call(this, a, 804);
        this.l = c;
        this.F = [];
        this.B = {
            Lb: eL(this, function(d) {
                return d.getHeight()
            }),
            Vb: eL(this, function(d) {
                return d.getWidth()
            }),
            Oe: eL(this, function(d) {
                return !!F(d, 8)
            }),
            Ee: eL(this, function(d) {
                return x(d, 10)
            }),
            Gd: eL(this, function(d) {
                var e;
                return null != (e = d.getEscapedQemQueryId()) ? e : ""
            }),
            ne: eL(this, function(d) {
                return De(d, mu, 43)
            }),
            Ne: eL(this, function(d) {
                return !!F(d, 9)
            }),
            Ef: eL(this, function(d) {
                return !!F(d, 12)
            }),
            Fe: eL(this, function(d) {
                return Wm(d, $t, 48, xu)
            }),
            Be: eL(this, function(d) {
                return Wm(d, Yt, 39, xu)
            }),
            ac: eL(this, function(d) {
                return x(d, 36)
            }),
            Ff: eL(this, function(d) {
                return F(d, 13)
            }),
            Me: eL(this, function(d) {
                return F(d, 3)
            }),
            Af: eL(this, function(d) {
                return x(d, 49)
            }),
            If: eL(this, function(d) {
                return x(d, 29)
            }),
            Jf: eL(this, function(d) {
                return x(d, 30)
            }),
            Je: eL(this, function(d) {
                return De(d, pu, 51)
            }),
            jc: eL(this, function(d) {
                return x(d, 61)
            }),
            wa: V(this),
            be: eL(this, function(d) {
                return De(d, su, 58)
            }),
            Lf: eL(this, function(d) {
                var e, f;
                return null != (f = null == (e = De(d, ou, 56)) ? void 0 : x(e, 1)) ? f : null
            }),
            hf: eL(this, function(d) {
                return Oc(d, St, 62)
            }),
            Ve: eL(this, function(d) {
                return Zm(d, 63)
            })
        };
        this.o = W(this, b)
    };
    _.O(fL, Z);
    var eL = function(a, b) {
        var c = V(a);
        a.F.push({
            A: c,
            ze: b
        });
        return c
    };
    fL.prototype.j = function() {
        for (var a = _.z(this.F), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = b.ze;
            jz(b.A, c(this.o.value))
        }
        if (Wm(this.o.value, vu, 41, wu)) throw new Gy("SecureFrame");
        if (0 === this.l.kind || 1 === this.l.kind && this.l.url) this.B.wa.j(this.l);
        else {
            a = this.B.wa;
            b = a.j;
            c = this.o.value;
            var d = si(c, wu, 4);
            b.call(a, {
                kind: 0,
                Ca: x(c, d) || ""
            })
        }
    };
    var gL = function(a, b, c) {
        Z.call(this, a, 822);
        this.slotId = b;
        this.l = tz(this);
        this.o = W(this, c)
    };
    _.O(gL, Z);
    gL.prototype.j = function() {
        for (var a = this, b = Zm(this.o.value, 23), c = _.lg(wJ), d = _.z(b), e = d.next(); !e.done; e = d.next()) e = e.value, xJ(c, e), yJ(c, e, this.slotId);
        this.l.notify();
        b.length && Jh("gpt_hp", function(f) {
            Ph(f, a.context);
            K(f, "ls", b.join())
        }, _.pe(rw))
    };
    var hL = function(a, b, c) {
        Z.call(this, a, 803);
        this.l = b;
        this.slotId = c;
        this.A = V(this);
        this.o = V(this)
    };
    _.O(hL, Z);
    hL.prototype.j = function() {
        var a = JSON.parse(this.l),
            b = Ei(a, Ar);
        if (!b) throw Error("missing ad unit path");
        if (null == a || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.l);
        a = new uu(a.slice());
        var c;
        b = _.z(null != (c = Zm(a, 27)) ? c : []);
        for (c = b.next(); !c.done; c = b.next()) c = c.value, _.lg(Xy).j(c);
        Xj(4);
        this.slotId.dispatchEvent(IF, 800, a);
        this.A.j(a);
        var d;
        jz(this.o, null != (d = De(a, lu, 54)) ? d : null)
    };
    var iL = function(a, b, c, d) {
        Z.call(this, a, 823);
        this.slotId = b;
        this.L = c;
        this.l = tz(this);
        this.o = W(this, d)
    };
    _.O(iL, Z);
    iL.prototype.j = function() {
        var a = this;
        F(this.o.value, 11) && (_.UF(this.L, this.slotId), RF(this.L, this.slotId, function() {
            _.VF(a.L, a.slotId)
        }));
        this.l.notify()
    };
    var jL = function(a, b, c, d) {
        Z.call(this, a, 821);
        this.Z = b;
        this.Ba = c;
        this.l = tz(this);
        this.o = W(this, d)
    };
    _.O(jL, Z);
    jL.prototype.j = function() {
        if (F(this.Z, 5))
            for (var a = new w.Set, b = _.z(Oc(this.o.value, nu, 14)), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0,
                    e = null != (d = us(c, 5)) ? d : 1;
                a.has(e) || (Qz(this.Ba, 2 === e ? "__gpi" : "__gads", c, this.Z), a.add(e))
            }
        this.l.notify()
    };
    var kL = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, u, A, H, C, I, R, S, U, Y, sa) {
        Z.call(this, a, 973);
        this.ja = b;
        this.l = c;
        this.B = d;
        this.O = e;
        this.N = f;
        this.L = g;
        this.Ba = h;
        this.fa = k;
        this.M = l;
        this.o = m;
        this.Rb = n;
        this.F = p;
        this.ia = q;
        this.Oa = u;
        this.isSecureContext = A;
        this.G = H;
        this.W = C;
        this.J = I;
        this.na = U;
        this.aa = Y;
        this.ma = sa;
        this.R = new _.Sf;
        this.ca = X(this, I);
        this.Y = W(this, R);
        this.oa = W(this, S);
        vz(this, p.R)
    };
    _.O(kL, Z);
    kL.prototype.j = function() {
        var a = this,
            b = new Ne;
        _.Hm(this, b);
        var c = this.Y.value,
            d = CE(this.N.U);
        if (!_.G(sx)) {
            var e = new aJ(this.context, Ti(), console, this.J);
            N(b, e)
        }
        _.G(zx) && N(b, new XK(this.context, console, this.J));
        e = new IK(this.context, this.B, this.L, De(this.N.U, sp, 5), this.W);
        N(b, e);
        var f = new WK(this.context, this.B, this.W, this.N, this.G, e.A);
        N(b, f);
        var g = !!F(this.N.U, 6);
        e = new MK(this.context, this.B, g, this.N, this.l, this.G, c);
        N(b, e);
        var h = new cL(this.context, this.G);
        N(b, h);
        var k = this.F,
            l = k.M,
            m = k.ja,
            n = k.T,
            p = k.J,
            q = k.V,
            u = k.fb,
            A = k.gb,
            H = k.Xa,
            C = k.za,
            I = k.kb,
            R = k.fa,
            S = k.O;
        k = k.Qb;
        var U = this.aa;
        if (0 !== _.pe(xw) || !U) {
            U || _.pe(yw);
            var Y;
            U = new NK(this.context, c, U, null != (Y = this.ma) ? Y : C, H, I);
            N(b, U);
            U = U.A
        }
        var sa = new $H(this.context, this.l, e.l, l, this.N.P, m, n, p, q, S, this.Oa);
        N(b, sa);
        N(b, new fI(this.context, l, u, A, sa.F, sa.J, this.N.P));
        _.G(jx) ? (Y = new dL(this.context, d, c, R, this.G, this.ca.value), N(b, Y), p = Y.A) : (p = new kp, kz(p));
        Y = window.isSecureContext && _.G(px) ? "wbn" : "ldjh";
        var xa = ++this.L.D;
        n = m = null;
        "wbn" === Y && (m = Rd(), n = "googletag.wbn" + xa);
        q = this.Rb;
        f = new VK(this.context, g, this.L, this.Ba, this.N, Y, q.bb, q.Bb, q.Ab, this.oa.value, m, n, _.lg(Cg), c, this.isSecureContext, this.G, U, h.A, e.l, sa.l, p, f.A, this.na, k, l);
        N(b, f);
        g = new bL(this.context, this.N, _.lg(Cg), f.l, e.l);
        N(b, g);
        d = new OK(this.context, d, c);
        N(b, d);
        h = _.zg(this.context, 646, function(va, qb, Da, za, fb) {
            var lb = function() {
                return void lL(a, fb, va, qb, Da, za, sa.o)
            };
            va && _.G(pw) ? setTimeout(_.zg(a.context, 646, lb), 0) : lb()
        });
        l = _.zg(this.context, 647, function(va, qb, Da) {
            a.R.resolve();
            var za = function() {
                return void mL(a, xa, Da, qb, va, sa.o)
            };
            _.G(pw) ? setTimeout(_.zg(a.context, 646, za), 0) : za()
        });
        k = _.zg(this.context, 289, function(va) {
            va = va instanceof Error ? va : Error();
            va.message = va.message || "strm_err";
            Eg(a.context, 289, va)
        });
        U = _.zg(this.context, 1042, function(va) {
            va = va instanceof Error ? va : Error();
            va.message = va.message || "Unknown web bundle error.";
            Eg(a.context, 1042, va)
        });
        var ya;
        "ldjh" === Y ? ya = new $K(this.context, h, k, l, c, e.l, f.l, g.A, d.A) : ya = new KK(this.context, h, _.G(ox) ? U : k, l, Y, (0, D.K)(n), (0, D.K)(m), c, this.W, e.l, f.l, g.A, d.A);
        N(b, ya);
        d = new TK(this.context, xa, e.l, ya.A);
        N(b, d);
        d = new GK(this.context, f.B, f.l);
        N(b, d);
        d = new UK(this.context, this.o.Ud, this.N, d.A);
        N(b, d);
        d = new SK(this.context, Y, this.fa, this.G, d.A);
        N(b, d);
        d = new RK(this.context, this.N, this.M, e.l, d.A);
        N(b, d);
        e = new PK(this.context, this.L, this.N, this.W, e.l, d.A);
        N(b, e);
        c = new QK(this.context, re(this.G), this.G, c, ya.A);
        N(b, c);
        Xe(b)
    };
    var lL = function(a, b, c, d, e, f, g) {
            var h, k;
            return _.$a(function(l) {
                if (1 == l.j) {
                    h = f[c];
                    if (!h) return Eg(a.context, 646, Error("missing slot")), l.return();
                    0 === c && (k = (0, D.K)(x(a.N.P[h.getDomId()], 20)), Lo(_.lg(Cg), "4", k));
                    _.G(mx) ? l = ab(l, a.R.promise, 2) : (l.j = 2, l = void 0);
                    return l
                }
                return ab(l, nL(a, h, d, e, b, g), 0)
            })
        },
        mL = function(a, b, c, d, e, f) {
            var g, h, k;
            return _.$a(function(l) {
                switch (l.j) {
                    case 1:
                        var m = a.context,
                            n = e + 1,
                            p = d.length;
                        if (m.Sb) {
                            var q = m.eb;
                            m = tg(m);
                            var u = new Rv;
                            u = _.Cc(u, 3, b, 0);
                            n = _.Cc(u, 1, n, 0);
                            p = _.Cc(n, 2, p, 0);
                            p = wg(m, 8, xg, p);
                            Jd(q, p)
                        }
                        g = e + 1;
                    case 2:
                        if (!(g < d.length)) {
                            l.j = 4;
                            break
                        }
                        if (!d[g]) {
                            l.j = 3;
                            break
                        }
                        q = new uu;
                        q = _.y(q, 8, !0);
                        h = Zd(q);
                        k = '{"empty":' + h + "}";
                        return ab(l, lL(a, c, g, k, {
                            kind: 0,
                            Ca: ""
                        }, d, f), 3);
                    case 3:
                        ++g;
                        l.j = 2;
                        break;
                    case 4:
                        q = a.L, p = a.O, m = (0, D.K)(q.m.get(p)) - 1, 0 === m ? q.m.delete(p) : q.m.set(p, m), 0 === m && a.o.Kd.dispatchEvent(NF, 965, a.O), l.j = 0
                }
            })
        },
        nL = function(a, b, c, d, e, f) {
            var g, h, k, l, m, n, p, q, u, A, H, C, I, R, S, U, Y, sa, xa, ya, va, qb, Da;
            return _.$a(function(za) {
                switch (za.j) {
                    case 1:
                        return g = new Ne, h = new hL(a.context, c, b), N(g, h), k = new XI(a.context, h.o), N(g, k), l = new jL(a.context, e, a.Ba, h.A), N(g, l), m = new gL(a.context, b, h.A), N(g, m), n = new iL(a.context, b, a.L, h.A), N(g, n), p = new fL(a.context, h.A, d), N(g, p), q = [l.l.promise, m.l.promise, n.l.promise], Xe(g), ab(za, w.Promise.all(q), 2);
                    case 2:
                        if (b.D) return za.return();
                        u = p;
                        H = A = u.B;
                        C = H.be;
                        I = H.Oe;
                        R = H.Gd;
                        return ab(za, C.promise, 3);
                    case 3:
                        return S = za.m, U = !!S, sa = null == (Y = S) ? void 0 : De(Y, Yo, 5), ab(za, I.promise, 4);
                    case 4:
                        return xa = !za.m, U && Jh("gpt_td_init", function(fb) {
                            Ph(fb, a.context);
                            var lb, ge;
                            K(fb, "winner_qid", null != (ge = null == (lb = sa) ? void 0 : lb.getEscapedQemQueryId()) ? ge : "");
                            var ui, Se;
                            K(fb, "xfpQid", null != (Se = null == (ui = sa) ? void 0 : bn(ui, 6)) ? Se : "");
                            K(fb, "noFill", xa ? "0" : "1");
                            K(fb, "publisher_tag", "gpt")
                        }, 1), ya = D, va = ya.K, ab(za, R.promise, 5);
                    case 5:
                        qb = va.call(ya, za.m), (Da = Dl("google_norender")) || !xa && !U ? Po(b, a.L, a.N, qb) : zK(a.ia, a.ja, a.l, b, !xa, U, a.L, a.N, A, k.l, window, e, a.o.Ud, a.M, a.F, (0, D.K)(f.get(b))), g.Ea(), za.j = 0
                }
            })
        };
    var oL = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q, u, A, H, C, I) {
        Z.call(this, a, 885);
        this.Y = b;
        this.B = c;
        this.N = d;
        this.L = e;
        this.Ba = f;
        this.Rb = g;
        this.O = h;
        this.M = k;
        this.o = l;
        this.F = m;
        this.l = n;
        this.R = p;
        this.isSecureContext = q;
        this.J = u;
        this.G = A;
        this.W = H;
        this.aa = W(this, C);
        vz(this, I)
    };
    _.O(oL, Z);
    oL.prototype.j = function() {
        var a = this.aa.value;
        if (a.length) {
            var b = this.L,
                c = this.o,
                d = a.length;
            b.m.has(c);
            b.m.set(c, d);
            a = _.z(a);
            for (b = a.next(); !b.done; b = a.next()) {
                d = b.value;
                c = b = void 0;
                var e = d.Oa,
                    f = d.X;
                d = new Ne;
                _.Hm(this, d);
                var g = void 0;
                0 >= _.pe(yw) && (g = new BK(this.context, this.G), N(d, g));
                var h = Km(this.context, this.l.Aa),
                    k = h.vb,
                    l = h.Id;
                _.Hm(d, h.ua);
                k = Fm(this.context, this.B, _.G(Dm) ? this.L : void 0, CE(this.N.U), this.G, k, l);
                h = k.Wa;
                _.Hm(d, k.ua);
                k = new FK(this.context, this.G, h);
                N(d, k);
                k = new CK(this.context, this.G, h);
                N(d, k);
                k = new DK(this.context, _.og(150), h);
                N(d, k);
                l = new lp(this.context, this.G, h);
                N(d, l);
                var m = new EK(this.context, this.Ba, this.J, l.A, h);
                N(d, m);
                e = new kL(this.context, this.Y, this.B, f, this.o, this.N, this.L, this.Ba, this.O, this.M, this.F, this.Rb, this.l, this.R, e, this.isSecureContext, this.G, this.W, l.A, h, m.o, k.l, null == (c = g) ? void 0 : c.l, null == (b = g) ? void 0 : b.o);
                N(d, e);
                _.G(qw) && (b = new AK(this.context, this.G, h, this.l.fa), N(d, b));
                Xe(d)
            }
        } else this.F.Kd.dispatchEvent(NF, 965, this.o)
    };
    var pL = new w.Map,
        qL = function(a, b, c, d) {
            d = void 0 === d ? pL : d;
            Z.call(this, a, 834);
            this.B = b;
            this.X = c;
            this.l = d;
            this.o = V(this);
            this.F = w.Promise.all(this.X.map(this.J, this))
        };
    _.O(qL, Z);
    qL.prototype.j = function() {
        var a = this,
            b;
        return _.$a(function(c) {
            if (1 == c.j) return ab(c, a.F, 2);
            b = c.m;
            a.o.j(b.filter(function(d) {
                return null != d && !d.D
            }));
            c.j = 0
        })
    };
    qL.prototype.J = function(a) {
        var b = this,
            c, d;
        return _.$a(function(e) {
            if (1 == e.j) {
                if (a.D) return e.return(null);
                b.l.has(a) || (b.l.set(a, Zp(a)), _.Om(a, function() {
                    return void b.l.delete(a)
                }));
                c = (0, D.K)(b.l.get(a));
                return ab(e, c(), 2)
            }
            d = e.m;
            if (b.D) return e.return(null);
            if (d) return e.return(a);
            M(b.B, ZG(a.getAdUnitPath()));
            return e.return(null)
        })
    };
    var rL = function(a, b, c, d, e) {
        Z.call(this, a, 847);
        this.L = b;
        this.Ia = c;
        this.o = d;
        this.l = V(this);
        this.B = W(this, e)
    };
    _.O(rL, Z);
    rL.prototype.j = function() {
        var a = this.B.value;
        if (a.length) {
            for (var b = _.z(a), c = b.next(); !c.done; c = b.next()) YF(this.L, c.value);
            this.o ? this.l.j([]) : this.Ia ? (b = kg(a[0].getAdUnitPath()), a = sL(a, b), this.l.j(a)) : (a = a.map(function(d) {
                return {
                    Oa: kg(d.getAdUnitPath()),
                    X: [d]
                }
            }), this.l.j(a))
        } else this.l.j([])
    };
    var sL = function(a, b) {
        var c = [];
        a = pa(a, function(f) {
            return kg(f.getAdUnitPath())
        });
        a = _.z(_.v(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.z(d.value);
            d = e.next().value;
            e = e.next().value;
            d === b ? c.unshift({
                Oa: d,
                X: e
            }) : c.push({
                Oa: d,
                X: e
            })
        }
        return c
    };
    var tL = function(a, b, c) {
        Z.call(this, a, 845);
        this.P = b;
        this.l = V(this);
        this.o = V(this);
        this.B = W(this, c)
    };
    _.O(tL, Z);
    tL.prototype.j = function() {
        var a = this,
            b = function(d) {
                d = a.P[d.getDomId()];
                return !!Yg(d).length || Zg(d, $g, 16)
            },
            c = this.B.value;
        this.l.j(c.filter(b));
        this.o.j(c.filter(Br(b)))
    };
    var uL = function(a, b, c, d, e) {
        Z.call(this, a, 864);
        this.L = b;
        this.N = c;
        this.W = d;
        this.l = tz(this);
        this.o = W(this, e)
    };
    _.O(uL, Z);
    uL.prototype.j = function() {
        for (var a = _.z(this.o.value), b = a.next(); !b.done; b = a.next())
            if (b = b.value, _.No(this.L, b)) {
                var c = this.N,
                    d = c.U;
                c = c.P[b.getDomId()];
                Xl(c, d) && Yl(b, this.W, c, d);
                YF(this.L, b);
                var e = void 0,
                    f = void 0;
                null != (e = null != (f = F(c, 10)) ? f : F(d, 11)) && e && Yl(b, this.W, c, d)
            }
        this.l.notify()
    };
    var vL = function(a, b, c, d, e, f, g, h, k, l, m, n, p, q) {
        _.Px.call(this);
        var u = this;
        this.context = a;
        this.J = b;
        this.C = c;
        this.L = d;
        this.Ba = e;
        this.ya = f;
        this.B = g;
        this.o = h;
        this.F = k;
        this.l = l;
        this.isSecureContext = m;
        this.H = n;
        this.W = p;
        this.G = q;
        this.j = new w.Map;
        this.m = new EF(a);
        _.Hm(this, this.m);
        GF(this.m, NF, function(A) {
            A = A.detail;
            var H = u.j.get(A);
            H && (u.j.delete(A), H.Ea())
        })
    };
    _.O(vL, _.Px);
    var wL = function(a, b, c, d) {
        var e = ++a.L.l;
        a.j.has(e);
        var f = new Ne;
        a.j.set(e, f);
        b = new qL(a.context, a.C, b);
        N(f, b);
        var g = new tL(a.context, d.P, b.o);
        N(f, g);
        b = new rL(a.context, a.L, !!F(d.U, 6), Dl("google_nofetch"), g.l);
        N(f, b);
        g = new uL(a.context, a.L, d, document, g.o);
        N(f, g);
        a = new oL(a.context, a.J, a.C, d, a.L, a.Ba, c, a.B, a.o, e, {
            Kd: a.m,
            Ud: a.ya
        }, a.l, a.F, a.isSecureContext, a.H, a.G, a.W, b.l, g.l);
        N(f, a);
        Xe(f)
    };
    var xL = function(a, b, c, d, e, f, g, h) {
        uJ.call(this, a, c);
        this.L = d;
        this.l = new w.Set;
        this.B = {};
        this.V = new xK(a);
        this.M = new vL(a, b, c, d, new Nz(window), this, _.lg(MJ), e, this.V, f, g, h, document, window);
        _.Hm(this, this.M)
    };
    _.O(xL, uJ);
    xL.prototype.getName = function() {
        return "publisher_ads"
    };
    xL.prototype.display = function(a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        e = void 0 === e ? "" : e;
        var f = "";
        if (d)
            if (_.ea(d) && 1 == d.nodeType) {
                var g = d;
                f = g.id
            } else f = d;
        this.enable();
        var h = Zj(c, this.context, this.C, a, b, f),
            k = h.slotId;
        h = h.Ta;
        if (k && h) {
            g && !f && (g.id = k.getDomId());
            this.slotAdded(k, h);
            h.setClickUrl(e);
            var l;
            gn(this.C, null != (l = g) ? l : k.getDomId(), c)
        } else M(this.C, Ni("PubAdsService.display", [a, b, d]))
    };
    var vH = function(a, b, c) {
        var d = void 0 === d ? document : d;
        var e;
        null != (e = c.P[b.getDomId()]) && _.y(e, 19, !0);
        e = {
            id: Du(b.getDomId())
        };
        Va(d, Hf(e));
        sh(b, d) ? (a.enable(), TF(a.L, b), yL(a, c, b)) : Jh("gpt_pb_write", function(f) {
            Ph(f, a.context)
        })
    };
    xL.prototype.slotAdded = function(a, b) {
        var c = this;
        F(b, 17) || this.m && TF(this.L, a);
        this.dispatchEvent(KF, 724, {
            rd: a.getDomId(),
            P: b
        });
        GF(a, Oo, function(d) {
            var e = d.detail;
            d = e.size;
            var f = new jJ(a, "publisher_ads");
            e.isEmpty && (f.isEmpty = !0);
            e = a.j.getResponseInformation();
            d && e && (f.size = [d.width, d.height], f.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId, f.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId, f.isBackfill = e.isBackfill, f.creativeId = e.creativeId, f.lineItemId = e.lineItemId, f.creativeTemplateId = e.creativeTemplateId, f.advertiserId = e.advertiserId, f.campaignId = e.campaignId, f.yieldGroupIds = e.yieldGroupIds, f.companyIds = e.companyIds);
            c.dispatchEvent("slotRenderEnded", 708, f)
        });
        GF(a, IF, function() {
            return void c.dispatchEvent("slotResponseReceived", 709, new pJ(a, c.getName()))
        });
        uJ.prototype.slotAdded.call(this, a, b)
    };
    xL.prototype.T = function(a, b) {
        this.enable();
        this.m && TF(this.L, b);
        this.C.info(uG());
        var c = a.U,
            d = a.P,
            e = F(c, 6);
        if (e || !this.L.hb(b)) e && (e = sh(b)) && b.dispatchEvent(HF, 778, e), F(c, 4) && (d = d[b.getDomId()], Xl(d, c) && !this.L.hb(b) && Yl(b, document, d, c)), yL(this, a, b)
    };
    var yL = function(a, b, c) {
            var d = zL(a, b, c);
            AL(a, d, b, {
                bb: 1
            });
            b = c.getAdUnitPath();
            if (c = a.B[b]) {
                c = _.z(c);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, AL(a, d.X, d.N, d.Rb);
                delete a.B[b]
            }
        },
        zL = function(a, b, c) {
            var d = b.U;
            b = b.P;
            if (F(d, 4)) return [];
            var e;
            return !F(d, 6) || (null == (e = b[c.getDomId()]) ? 0 : F(e, 17)) ? (a.l.add(c), _.Om(c, function() {
                return void a.l.delete(c)
            }), [c]) : a.j.filter(function(f) {
                if (a.l.has(f)) return !1;
                a.l.add(f);
                _.Om(f, function() {
                    return void a.l.delete(f)
                });
                return !0
            })
        },
        AL = function(a, b, c, d) {
            a.C.info(BG());
            if (BL(a, b, d, c) && 1 !== d.bb)
                for (b = _.z(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), a.dispatchEvent(LF, 725, {
                    rd: d,
                    P: c.P[d]
                })
        },
        BL = function(a, b, c, d) {
            b = b.filter(function(e) {
                if (!_.No(a.L, e)) return !1;
                var f = d.P[e.getDomId()];
                5 !== gl(f) && 4 !== gl(f) || _.UF(a.L, e);
                return !0
            });
            if (!b.length) return null;
            wL(a.M, b, c, d);
            return b
        };
    xL.prototype.refresh = function(a, b, c) {
        b = CL(this, b);
        if (!b.length) return !1;
        DL(this, a, b, null != c ? c : {
            bb: 2
        });
        return !0
    };
    var CL = function(a, b) {
            return b.filter(function(c, d) {
                if (!c.D) return !0;
                M(a.C, EG(String(d)));
                return !1
            })
        },
        DL = function(a, b, c, d) {
            var e = c[0],
                f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
            if (a.m) {
                var h = {};
                e = _.z(c);
                for (f = e.next(); !f.done; h = {
                        Ib: h.Ib
                    }, f = e.next()) h.Ib = f.value, a.l.add(h.Ib), _.Om(h.Ib, function(k) {
                    return function() {
                        return void a.l.delete(k.Ib)
                    }
                }(h));
                AL(a, c, b, d)
            } else c.length && F(b.U, 6) ? (M(a.C, AG(g), e), e = e.getAdUnitPath(), f = null != (h = a.B[e]) ? h : [], f.push({
                X: c,
                N: b,
                Rb: d
            }), a.B[e] = f) : M(a.C, yG(g), e)
        };
    xL.prototype.J = function() {
        var a = this,
            b = Ch().j;
        if (F(b, 6))
            for (var c = _.z(this.j), d = c.next(); !d.done; d = c.next()) this.m && TF(this.L, d.value);
        FH(this, b);
        GF(this, "rewardedSlotClosed", function(e) {
            var f = e.detail.slot;
            e = _.v(a.j, "find").call(a.j, function(g) {
                return f === g.j
            });
            EL(a, [e], Ch().j, Ch().m, a.L)
        });
        Ui("pubadsReady", !0)
    };
    xL.prototype.destroySlots = function(a) {
        a = uJ.prototype.destroySlots.call(this, a);
        if (a.length && this.m) {
            var b = Ch();
            FL(this, a, b.j, b.m)
        }
        return a
    };
    var HH = function(a, b, c, d) {
            if (!a.m) return M(a.C, zG(), d[0]), !1;
            var e = CL(a, d);
            if (!e.length) return M(a.C, Ni("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))), !1;
            a.C.info(CG());
            FL(a, e, b, c);
            return !0
        },
        FL = function(a, b, c, d) {
            for (var e = _.z(b), f = e.next(); !f.done; f = e.next()) QF(a.L, f.value);
            EL(a, b, c, d, a.L)
        };
    xL.prototype.forceExperiment = function(a) {
        a = Number(a);
        0 < a && _.lg(Xy).j(a)
    };
    var EL = function(a, b, c, d, e) {
            var f = void 0 === f ? window : f;
            b = _.z(b);
            for (var g = b.next(); !g.done; g = b.next()) {
                g = g.value;
                yK(a.V, g);
                var h = d[g.getDomId()];
                Xl(h, c) && Yl(g, f.document, h, c);
                YF(e, g)
            }
        },
        GH = function(a, b, c, d) {
            _.y(d, 21, !0);
            _.y(d, 22, String(null != b ? b : ""));
            _.y(d, 23, String(null != c ? c : ""));
            FH(a, d)
        },
        IH = function(a, b) {
            if (!a.m) return null;
            var c, d;
            return {
                vid: null != (c = x(b, 22)) ? c : "",
                cmsid: null != (d = x(b, 23)) ? d : ""
            }
        },
        FH = function(a, b) {
            F(b, 21) && a.m && _.y(b, 29, sv())
        };
    var GL = P(["https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js"]),
        HL = P(["https://securepubads.g.doubleclick.net/pagead/js/rum.js"]);
    var hq = "2022100401";
    (function(a, b, c) {
        var d = null != b ? b : {
            Ha: iq(),
            Za: "",
            eb: new nq(0),
            ae: !0,
            Fd: 1
        };
        try {
            var e = Ti();
            (0, D.Td)(!_.lg(mg).j);
            _.v(Object, "assign").call(Object, ng, e._vars_);
            e._vars_ = ng;
            if (e.evalScripts) e.evalScripts();
            else {
                bF();
                Ui("evalScripts", function() {
                    try {
                        Dn()
                    } catch (S) {
                        Eg(d, 297, S);
                        var I, R;
                        null == (I = window.console) || null == (R = I.error) || R.call(I, S)
                    }
                });
                try {
                    Kz()
                } catch (I) {
                    Eg(d, 408, I)
                }
                Sl();
                try {
                    Iz(), Xj(13), Xj(3)
                } catch (I) {
                    Eg(d, 408, I)
                }
                var f = Gj(qx);
                f.length && sd(f);
                var g = lq(),
                    h = null != b ? b : oq(g),
                    k = null != c ? c : new hJ(h);
                yg(h);
                var l = new PF,
                    m = new CJ(l),
                    n = new JJ(h),
                    p = new bJ(h, m, k, l),
                    q = cv(),
                    u = _.lg(Wj),
                    A = new xL(h, m, k, l, n, p, q, u);
                _.G(Fx) && new vI(h, A, l, m);
                _.og(260) && cJ(p, A);
                var H = Ch().j;
                Zn(h, k, A, a, H, m);
                var C = _.zg(h, 77, function() {
                    var I = e.cmd;
                    if (!I || Array.isArray(I)) {
                        var R = new wI(k);
                        e.cmd = Ki(h, R);
                        null != I && I.length && R.push.apply(R, I)
                    }
                });
                e.fifWin && "complete" !== document.readyState ? _.Ya(window, "load", function() {
                    return window.setTimeout(C, 0)
                }) : C();
                Dn();
                if (_.G(Fx) || _.lg(Cg).j) gq(), gj(document, Ad(Sa(_.G(Ix) ? B(GL) : B(HL)).toString()));
                xo(h, k);
                bj(h)
            }
        } catch (I) {
            Eg(d, 106, I)
        }
    })(window);
}).call(this, {});