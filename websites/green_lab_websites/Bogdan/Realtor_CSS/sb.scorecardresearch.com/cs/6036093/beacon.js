var COMSCORE = function(n) {
    function e(n, e, r) {
        -1 == n.indexOf("?") && (n += "?");
        var o = !1;
        (-1 != n.indexOf("&") || n.length - 1 > n.indexOf("?")) && (o = !0);
        for (var a = 0; a < e.length; ++a) {
            var t = e[a];
            for (var i in t) o && (n += "&"), o = !0, n += i + "=" + c(t[i] + "")
        }
        return n = function(n, e) {
            if (n.length > e) {
                var r = n.substring(0, e - 8).lastIndexOf("&");
                n = (n = n.substring(0, r) + "&ns_cut=" + c(n.substring(r + 1))).substring(0, e)
            }
            return n
        }(n, r)
    }

    function r(n) {
        for (var e = {}, r = n.split("&"), o = 0; o < r.length; ++o) {
            var a = r[o].split("=");
            2 == a.length && (e[a[0]] = t(a[1]))
        }
        return e
    }

    function o(n, e) {
        for (var r in e) n[r] = e[r]
    }

    function a(n, e) {
        o(n[0], e[0]), o(n[1], e[1]), o(n[2], e[2])
    }
    var c = "undefined" != typeof encodeURIComponent ? encodeURIComponent : escape,
        t = "undefined" != typeof decodeURIComponent ? decodeURIComponent : unescape,
        i = document;
    var f, u, p = (function(n, e) {
        Object.defineProperty(e, "o", {
            value: !0
        }), e.t = e.i = void 0;
        var r, o = [1, 7, 8, 9, 10],
            a = -1,
            c = !1,
            t = !1,
            i = [];

        function f() {
            for (var n = 0, e = i; n < e.length; n++)(0, e[n])()
        }

        function u() {
            var n;
            return function() {
                if (!t) {
                    t = !0;
                    var n = +new Date;
                    "function" == typeof __tcfapi && __tcfapi("addEventListener", 2, (function(e, o) {
                        o && (-1 == a && (a = +new Date - n), r = e, f())
                    }))
                }
            }(), "function" == typeof __tcfapi && (__tcfapi("getTCData", 2, (function(e) {
                c || (-1 == a && (a = 0), n = e, r = e, f())
            })), n || (c = !0), !0)
        }

        function p(n) {
            var e = {};
            if (!n) return e;
            for (var r = 0, a = o; r < a.length; r++) {
                var c = a[r];
                e[c] = n["purpose"]["consents"][c]
            }
            return e
        }
        e.i = function() {
            try {
                if (!u()) return !1;
                if (r) return r["gdprApplies"] ? {
                    u: r["cmpId"],
                    p: r["cmpVersion"],
                    v: c,
                    l: a,
                    s: !0,
                    m: !0,
                    _: !0,
                    C: r["isServiceSpecific"],
                    h: r["purposeOneTreatment"],
                    g: r["vendor"]["legitimateInterests"][77],
                    A: r["vendor"]["consents"][77],
                    I: p(r),
                    R: r["publisherCC"] || ""
                } : {
                    u: r["cmpId"],
                    p: r["cmpVersion"],
                    v: c,
                    l: a,
                    s: !0,
                    m: !1
                }
            } catch (n) {}
            return {
                s: !1,
                v: !0
            }
        }, e.t = function(n) {
            i.indexOf(n) > -1 || i.push(n)
        }
    }(f = {
        O: {}
    }, f.O), f.O);
    (u = p) && u.o && Object.prototype.hasOwnProperty.call(u, "default") && u["default"];
    p.t;
    var v = p.i;

    function l() {
        var n = v();
        if (!n) return !1;
        var e, r = {
            gdpr: 0,
            gdpr_p1t: "",
            gdpr_li: "",
            gdpr_purps: "",
            gdpr_pcc: ""
        };
        if (!n.s) return {
            s: !1,
            k: !0,
            labels: {
                cs_cmp_nc: 1
            }
        };
        if (r["cs_cmp_nc"] = n.v ? 1 : 0, r["cs_cmp_id"] = n.u, r["cs_cmp_sv"] = n.p, r["cs_cmp_rt"] = n.l, !n.m) return {
            s: !0,
            k: !0,
            labels: r
        };
        if (r["gdpr"] = "1", !n._) return {
            s: !0,
            k: !1,
            labels: r
        };
        r["gdpr_li"] = n.g ? "1" : "0", r["gdpr_pcc"] = n.R, n.C && n.h ? (r["gdpr_p1t"] = "1", e = !0) : (r["gdpr_p1t"] = "0", e = n.I[1]);
        var o = !1;
        if (n.A) {
            o = e;
            var a = [];
            e && a.push(1), n.I[7] && a.push(7), n.I[8] && a.push(8), n.I[9] && a.push(9), n.I[10] && a.push(10), r["gdpr_purps"] = a.join(",")
        }
        return {
            s: !0,
            k: o,
            labels: r
        }
    }

    function s(n, e) {
        if (e.images) {
            var r = new Image;
            window.ns_p || (window.ns_p = r), r.src = n
        }
    }

    function d(n, e) {
        var a = [{}, {
            cs_it: n,
            cv: "3.8.0.210223",
            ns__t: +new Date,
            ns_c: e ? e.characterSet : ""
        }, {}];
        e && (a[2] = {
            c7: e.URL,
            c8: e.title,
            c9: e.referrer
        });
        var c = "comScore=";
        if (e)
            for (var t = 0, i = e.cookie.split(";"); t < i.length; ++t) - 1 != i[t].indexOf(c) && o(a[1], r(unescape(i[t].substring(t + c.length))));
        return a
    }

    function m(n) {
        if (n) {
            var c = n.options || {},
                t = function(n, e) {
                    var a = [{}, {}, {}];
                    for (var c in n) {
                        var t = n[c],
                            i = typeof t;
                        "string" != i && "number" != i || ("c1" == c || "c2" == c ? a[0][c] = t : a[1][c] = t)
                    }
                    if (!a[0]["c2"]) return !1;
                    if (a[0]["c1"] || (a[0]["c1"] = 2), e.url_append) {
                        var f = r(e.url_append.replace(/&amp;/, "&"));
                        o(a[1], f)
                    }
                    return a
                }(n, c);
            if (t) {
                var f = !0;
                if (!c.disableTcfIntegration) {
                    var u = l();
                    u && (f = u.k, o(t[1], u.labels))
                }
                a(t, d("b2", i)), window != window.top && (t[1]["ns_if"] = 1), s(e(f ? "https://sb.scorecardresearch.com/b?" : "https://sb.scorecardresearch.com/b2?", t, 2048), i)
            }
        }
    }

    function w(n) {
        n = n || _comscore;
        for (var e = 0; e < n.length; ++e) m(n[e]);
        _comscore = []
    }
    return window.udm_ = function(n) {
        var r = [{}, {}, {}];
        a(r, d("b2", i)), window != window.top && (r[1]["ns_if"] = 1);
        var c = l();
        c && o(r[1], c.labels), s(e(n, r, 2048), i)
    }, "undefined" == typeof _comscore && (window._comscore = []), w(), n.beacon = m, n.purge = w, n
}({});