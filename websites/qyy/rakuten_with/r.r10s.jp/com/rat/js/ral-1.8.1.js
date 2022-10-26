(function(window, undefined) {
    /*
     ral v1.8.1
     Copyright (c) @2013-2022 Rakuten, Inc
     Date : 2022-06-16
     Env: prod
    */
    'use strict';
    window.RAL = window.RAL || {};
    RAL.live || function(e, h) {
        var l = e.JSON || {};
        "function" !== typeof l.stringify && (l.stringify = function(a, b, c) {
            function d(a, b) {
                var c, g, n, l, r = f,
                    m, k = b[a];
                k && "object" === typeof k && "function" === typeof k.toJSON && (k = k.toJSON(a));
                "function" === typeof p && (k = p.call(b, a, k));
                switch (typeof k) {
                    case "string":
                        return e(k);
                    case "number":
                        return isFinite(k) ? String(k) : "null";
                    case "boolean":
                    case "null":
                        return String(k);
                    case "object":
                        if (!k) return "null";
                        f += h;
                        m = [];
                        if ("[object Array]" === Object.prototype.toString.apply(k)) {
                            l = k.length;
                            for (c = 0; c < l; c += 1) m[c] = d(c, k) || "null";
                            n = 0 === m.length ? "[]" : f ? "[\n" + f + m.join(",\n" + f) + "\n" + r + "]" : "[" + m.join(",") + "]";
                            f = r;
                            return n
                        }
                        if (p && "object" === typeof p)
                            for (l = p.length, c = 0; c < l; c += 1) "string" === typeof p[c] && (g = p[c], (n = d(g, k)) && m.push(e(g) + (f ? ": " : ":") + n));
                        else
                            for (g in k) Object.prototype.hasOwnProperty.call(k, g) && (n = d(g, k)) && m.push(e(g) + (f ? ": " : ":") + n);
                        n = 0 === m.length ? "{}" : f ? "{\n" + f + m.join(",\n" + f) + "\n" + r + "}" : "{" + m.join(",") + "}";
                        f = r;
                        return n
                }
            }

            function e(a) {
                var b = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                b.lastIndex = 0;
                return b.test(a) ? '"' + a.replace(b, function(a) {
                    var b = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    }[a];
                    return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + a + '"'
            }
            var f = "",
                p, h = "",
                g;
            if ("number" === typeof c)
                for (g = 0; g < c; g += 1) h += " ";
            else "string" === typeof c && (h = c);
            if ((p = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length)) throw Error("JSON.stringify");
            return d("", {
                "": a
            })
        });
        "function" !== typeof l.parse &&
            (l.parse = function(a, b) {
                function c(a, d) {
                    var e, l, g = a[d];
                    if (g && "object" === typeof g)
                        for (e in g) Object.prototype.hasOwnProperty.call(g, e) && (l = c(g, e), l !== h ? g[e] = l : delete g[e]);
                    return b.call(a, d, g)
                }
                var d;
                d = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                a = String(a);
                d.lastIndex = 0;
                d.test(a) && (a = a.replace(d, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }));
                return /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                    "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ? (d = eval("(" + a + ")"), "function" === typeof b ? c({
                    "": d
                }, "") : d) : null
            });
        RAL.a = {
            s: "acc",
            gb: "accu",
            hb: "cka",
            ib: "afid",
            jb: "altitude",
            kb: "altaccu",
            lb: "_ra",
            mb: "astime",
            ya: "bln",
            nb: "cc",
            ob: "tis",
            pb: "chkout",
            qb: "chkpt",
            rb: "cntln",
            sb: "cycode",
            ca: "cp",
            za: "debug",
            T: "etype",
            ub: "flv",
            vb: "genre",
            wb: "gol",
            xb: "tms",
            yb: "head",
            Aa: "ifr",
            Ba: "jav",
            zb: "lat",
            Ab: "ldtime",
            da: "loc",
            Bb: "long",
            Ca: "navtype",
            Cb: "_merge_flags",
            Da: "online",
            Db: "pgid",
            Nc: "pgl",
            Eb: "pgn",
            Fb: "pgt",
            ea: "ckp",
            fa: "ref",
            URL: "url",
            Gb: "reqc",
            Hb: "rqtime",
            Ea: "res",
            Fa: "ltm",
            Ib: "sq",
            u: "aid",
            v: "cks",
            Ga: "cks2",
            Ha: "use_cks",
            Jb: "speed",
            Ja: "tzo",
            Kb: "tpgldtime",
            W: "ua",
            VERSION: "ver",
            Lb: "sresv",
            Ia: "tid",
            ha: "wv_fcp",
            ja: "wv_lcp",
            ia: "wv_fid",
            la: "wv_ttfb",
            ga: "wv_cls",
            ka: "wv_ver"
        };
        RAL.Tb = "1.8.1";
        RAL.Sb = "OO1OO";
        RAL.Mb = 500;
        RAL.X = "_ra";
        RAL.Nb = 730;
        RAL.w = "RAL";
        RAL.Ob = "ROFL";
        RAL.Ka = "RTID";
        RAL.Oc = "RFPR";
        RAL.na = "cpkg_none=";
        RAL.ma = "?" + RAL.na;
        RAL.Qb = 256;
        RAL.Rb = 262144;
        RAL.Pb =
            16;
        RAL.m = null;
        RAL.Ub = 4E3;
        RAL.Ma = "2.1.4";
        RAL.La = 0.1;
        RAL.Y = {
            appear: !0,
            async: !1,
            scroll: !0,
            click: !1,
            pv: !0,
            perf: !1
        };
        RAL.eventLog = [];
        RAL.Qc = function() {};
        RAL.Pc = function() {};
        RAL.o = function(a) {
            return "string" === typeof a || "[object String]" === Object.prototype.toString.call(a)
        };
        RAL.i = function(a) {
            return RAL.o(a) ? a.replace(/^\s+|\s+$/g, "") : null
        };
        RAL.C = function(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        };
        RAL.D = function(a) {
            return !!a && "[object Object]" === Object.prototype.toString.call(a)
        };
        RAL.sa =
            function(a, b) {
                if (a && "object" === typeof a && b && "object" === typeof b) {
                    for (var c in b) a[c] = b[c];
                    return !0
                }
                return !1
            };
        RAL.j = function(a, b) {
            var c = RAL.i(a);
            if (null === c) return null;
            b === h && (b = document.cookie);
            var d = b ? b.split(";") : "",
                e;
            for (e = d.length - 1; 0 <= e; e--) {
                var f = d[e].indexOf("=");
                if (0 < f && RAL.i(d[e].substr(0, f)) === c) return d[e].substr(f + 1)
            }
            return null
        };
        RAL.Q = function(a, b, c, d) {
            a = RAL.i(a);
            b = RAL.i(b);
            c = parseInt(c, 10);
            if (null !== a && null !== b && !isNaN(c)) {
                var e = new Date;
                0 >= c ? e.setTime(0) : e.setDate(e.getDate() + c);
                document.cookie =
                    a + "=" + b + "; Expires=" + e.toGMTString() + ";" + (d ? " Domain=." + d + ";" : "") + " Path=/;" + ("https:" === location.protocol ? " Secure;" : "")
            }
        };
        RAL.Bc = function(a) {
            RAL.Q(a, "", 0)
        };
        RAL.Wb = function() {
            var a, b;
            for (b = a = ""; 36 > a++; b += 51 * a & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : "-");
            return b
        };
        RAL.Xa = function(a) {
            var b = RAL.w + "TEST";
            RAL.Q(b, b, 1, a);
            var c = RAL.j(b);
            RAL.Q(b, "", 0, a);
            return c === b
        };
        RAL.fc = function() {
            var a, b = RAL.X,
                b = RAL.i(b),
                c = RegExp("^" + b + "=");
            if (a = a || document.location.search) {
                a = a.replace(/^\?/, "").split("&");
                for (var d = 0; d < a.length; d++)
                    if (c.test(a[d])) return decodeURIComponent(a[d].substring(b.length + 1))
            }
            return null
        };
        RAL.Z = function(a) {
            if (!RAL.o(a)) return "0000";
            var b, c = [0, 0, 0, 0];
            for (b = 0; b < a.length; ++b) c[b % 4] += a.charCodeAt(b);
            for (b = a = 0; 4 > b; ++b) a = (a << 4) + c[b] % 16;
            a ^= Math.floor(65536 * Math.random());
            return ("0000" + a.toString(16)).slice(-4)
        };
        RAL.Ya = function(a) {
            try {
                var b;
                if (e.tb && "function" === typeof e.tb) b = new CustomEvent(a, {
                    detail: null
                }), document.dispatchEvent(b);
                else if (document.createEvent) b = document.createEvent("CustomEvent"),
                    b.initCustomEvent(a, !0, !0, null), document.dispatchEvent(b);
                else if (document.createEventObject && document.fireEvent) b = document.createEventObject(), b.detail = null, document.fireEvent("onpropertychange", b);
                else throw Error("Cannot instantiate event for " + a);
            } catch (c) {}
        };
        RAL._loadWebVitals = function() {
            return /* v2.1.4 */ function(e) {
                "use strict";
                var t, n, i, r, a = function(e, t) {
                        return {
                            name: e,
                            value: void 0 === t ? -1 : t,
                            delta: 0,
                            entries: [],
                            id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
                        }
                    },
                    o = function(e, t) {
                        try {
                            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                                if ("first-input" === e && !("PerformanceEventTiming" in self)) return;
                                var n = new PerformanceObserver((function(e) {
                                    return e.getEntries().map(t)
                                }));
                                return n.observe({
                                    type: e,
                                    buffered: !0
                                }), n
                            }
                        } catch (e) {}
                    },
                    u = function(e, t) {
                        var n = function n(i) {
                            "pagehide" !== i.type && "hidden" !== document.visibilityState || (e(i), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
                        };
                        addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
                    },
                    c = function(e) {
                        addEventListener("pageshow", (function(t) {
                            t.persisted && e(t)
                        }), !0)
                    },
                    f = function(e, t, n) {
                        var i;
                        return function(r) {
                            t.value >= 0 && (r || n) && (t.delta = t.value - (i || 0), (t.delta || void 0 === i) && (i = t.value, e(t)))
                        }
                    },
                    s = -1,
                    m = function() {
                        return "hidden" === document.visibilityState ? 0 : 1 / 0
                    },
                    v = function() {
                        u((function(e) {
                            var t = e.timeStamp;
                            s = t
                        }), !0)
                    },
                    d = function() {
                        return s < 0 && (s = m(), v(), c((function() {
                            setTimeout((function() {
                                s = m(), v()
                            }), 0)
                        }))), {
                            get firstHiddenTime() {
                                return s
                            }
                        }
                    },
                    p = function(e, t) {
                        var n, i = d(),
                            r = a("FCP"),
                            u = function(e) {
                                "first-contentful-paint" === e.name && (m && m.disconnect(), e.startTime < i.firstHiddenTime && (r.value = e.startTime, r.entries.push(e), n(!0)))
                            },
                            s = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0],
                            m = s ? null : o("paint", u);
                        (s || m) && (n = f(e, r, t), s && u(s), c((function(i) {
                            r = a("FCP"), n = f(e, r, t), requestAnimationFrame((function() {
                                requestAnimationFrame((function() {
                                    r.value = performance.now() - i.timeStamp, n(!0)
                                }))
                            }))
                        })))
                    },
                    l = !1,
                    g = -1,
                    T = {
                        passive: !0,
                        capture: !0
                    },
                    h = new Date,
                    y = function(e, r) {
                        t || (t = r, n = e, i = new Date, S(removeEventListener), E())
                    },
                    E = function() {
                        if (n >= 0 && n < i - h) {
                            var e = {
                                entryType: "first-input",
                                name: t.type,
                                target: t.target,
                                cancelable: t.cancelable,
                                startTime: t.timeStamp,
                                processingStart: t.timeStamp + n
                            };
                            r.forEach((function(t) {
                                t(e)
                            })), r = []
                        }
                    },
                    L = function(e) {
                        if (e.cancelable) {
                            var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                            "pointerdown" == e.type ? function(e, t) {
                                var n = function() {
                                        y(e, t), r()
                                    },
                                    i = function() {
                                        r()
                                    },
                                    r = function() {
                                        removeEventListener("pointerup", n, T), removeEventListener("pointercancel", i, T)
                                    };
                                addEventListener("pointerup", n, T), addEventListener("pointercancel", i, T)
                            }(t, e) : y(t, e)
                        }
                    },
                    S = function(e) {
                        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
                            return e(t, L, T)
                        }))
                    },
                    w = {};
                return e.getCLS = function(e, t) {
                    l || (p((function(e) {
                        g = e.value
                    })), l = !0);
                    var n, i = function(t) {
                            g > -1 && e(t)
                        },
                        r = a("CLS", 0),
                        s = 0,
                        m = [],
                        v = function(e) {
                            if (!e.hadRecentInput) {
                                var t = m[0],
                                    i = m[m.length - 1];
                                s && e.startTime - i.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (s += e.value, m.push(e)) : (s = e.value, m = [e]), s > r.value && (r.value = s, r.entries = m, n())
                            }
                        },
                        d = o("layout-shift", v);
                    d && (n = f(i, r, t), u((function() {
                        d.takeRecords().map(v), n(!0)
                    })), c((function() {
                        s = 0, g = -1, r = a("CLS", 0), n = f(i, r, t)
                    })))
                }, e.getFCP = p, e.getFID = function(e, i) {
                    var s, m = d(),
                        v = a("FID"),
                        p = function(e) {
                            e.startTime < m.firstHiddenTime && (v.value = e.processingStart - e.startTime, v.entries.push(e), s(!0))
                        },
                        l = o("first-input", p);
                    s = f(e, v, i), l && u((function() {
                        l.takeRecords().map(p), l.disconnect()
                    }), !0), l && c((function() {
                        var o;
                        v = a("FID"), s = f(e, v, i), r = [], n = -1, t = null, S(addEventListener), o = p, r.push(o), E()
                    }))
                }, e.getLCP = function(e, t) {
                    var n, i = d(),
                        r = a("LCP"),
                        s = function(e) {
                            var t = e.startTime;
                            t < i.firstHiddenTime && (r.value = t, r.entries.push(e), n())
                        },
                        m = o("largest-contentful-paint", s);
                    if (m) {
                        n = f(e, r, t);
                        var v = function() {
                            w[r.id] || (m.takeRecords().map(s), m.disconnect(), w[r.id] = !0, n(!0))
                        };
                        ["keydown", "click"].forEach((function(e) {
                            addEventListener(e, v, {
                                once: !0,
                                capture: !0
                            })
                        })), u(v, !0), c((function(i) {
                            r = a("LCP"), n = f(e, r, t), requestAnimationFrame((function() {
                                requestAnimationFrame((function() {
                                    r.value = performance.now() - i.timeStamp, w[r.id] = !0, n(!0)
                                }))
                            }))
                        }))
                    }
                }, e.getTTFB = function(e) {
                    var t, n = a("TTFB");
                    t = function() {
                        try {
                            var t = performance.getEntriesByType("navigation")[0] || function() {
                                var e = performance.timing,
                                    t = {
                                        entryType: "navigation",
                                        startTime: 0
                                    };
                                for (var n in e) "navigationStart" !== n && "toJSON" !== n && (t[n] = Math.max(e[n] - e.navigationStart, 0));
                                return t
                            }();
                            if (n.value = n.delta = t.responseStart, n.value < 0 || n.value > performance.now()) return;
                            n.entries = [t], e(n)
                        } catch (e) {}
                    }, "complete" === document.readyState ? setTimeout(t, 0) : addEventListener("load", (function() {
                        return setTimeout(t, 0)
                    }))
                }, Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e
            }({});
        };
        RAL.g = function(a) {
            this.c = {};
            this.$ = {};
            a !== h && RAL.sa(this.c, a)
        };
        RAL.g.prototype.xc = function(a) {
            return null == a ? !1 : RAL.o(a) ? "" !== RAL.i(a) : "number" === typeof a ? !isNaN(a) && isFinite(a) : !0
        };
        RAL.g.prototype.d = function(a,
            b) {
            var c = RAL.i(a);
            null !== c && "" !== c && this.xc(b) && (this.c[c] = "string" === typeof b ? RAL.i(b) : b)
        };
        RAL.g.prototype.remove = function(a) {
            a = RAL.i(a);
            null === a || "" === a || a in this.c && delete this.c[a]
        };
        RAL.g.prototype.setParameters = function(a, b) {
            if (RAL.D(a))
                for (var c in a) this.d(c, a[c]), b && (this.$[c] = !0)
        };
        RAL.g.prototype.eb = function(a) {
            if (RAL.D(a))
                for (var b in a)
                    if (!this.e(b) || this.$[b]) this.d(b, a[b]);
                    else {
                        var c = this.get(b);
                        RAL.C(c) && RAL.C(a[b]) ? this.d(b, c.concat(a[b])) : RAL.D(c) && RAL.D(a[b]) ? RAL.sa(c, a[b]) : this.d(b,
                            a[b])
                    }
        };
        RAL.g.prototype.Lc = function() {
            return l.stringify(this.c)
        };
        RAL.g.prototype.get = function(a) {
            a = RAL.i(a);
            return null === a || "" === a ? null : a in this.c ? this.c[a] : null
        };
        RAL.g.prototype.e = function(a) {
            a = RAL.i(a);
            return null === a || "" === a ? !1 : a in this.c
        };
        RAL.g.prototype.Jc = function() {
            var a = {},
                b;
            for (b in this.c) a[b] = this.c[b];
            return a
        };
        RAL.g.prototype.Mc = function() {
            var a = !1,
                b = this.get(RAL.a.T);
            if ("scroll" == b) a = !0;
            else if ("appear" == b) a = RAL.Y.appear;
            else if ("pv" == b)
                for (var c in this.$)
                    if (this.$.hasOwnProperty(c)) {
                        a = !0;
                        break
                    }
            return a
        };
        RAL.U = function() {};
        RAL.U.prototype.H = function() {};
        RAL.U.prototype.q = function() {};
        RAL.U.prototype.R = function() {};
        RAL.U.prototype.e = function() {};
        RAL.S = function() {
            this.p = RAL.w
        };
        RAL.S.prototype.H = function(a, b) {
            if (1E3 < b.length) return !1;
            RAL.Q(this.p + a, encodeURIComponent(String(b)), 365);
            var c = RAL.j(this.p + a);
            return null !== c && decodeURIComponent(c) === b
        };
        RAL.S.prototype.q = function(a) {
            a = RAL.j(this.p + a);
            return null == a ? null : decodeURIComponent(a)
        };
        RAL.S.prototype.R = function(a) {
            RAL.Bc(this.p +
                a)
        };
        RAL.S.prototype.e = function(a) {
            return null !== this.q(a)
        };
        RAL.L = function() {
            this.p = RAL.w
        };
        RAL.L.prototype.H = function(a, b) {
            try {
                return e.localStorage.setItem(this.p + a, b), !0
            } catch (c) {}
            return !1
        };
        RAL.L.prototype.q = function(a) {
            return e.localStorage.getItem(this.p + a)
        };
        RAL.L.prototype.R = function(a) {
            e.localStorage.removeItem(this.p + a)
        };
        RAL.L.prototype.e = function(a) {
            return null !== this.q(a)
        };
        RAL.M = function() {};
        RAL.M.prototype.H = function() {
            return !0
        };
        RAL.M.prototype.q = function() {
            return null
        };
        RAL.M.prototype.R =
            function() {};
        RAL.M.prototype.e = function() {
            return !1
        };
        RAL.N = function() {
            this.B = {}
        };
        RAL.N.prototype.H = function(a, b) {
            this.B[a] = b;
            return !0
        };
        RAL.N.prototype.q = function(a) {
            return a in this.B ? this.B[a] : null
        };
        RAL.N.prototype.R = function(a) {
            a in this.B && delete this.B[a]
        };
        RAL.N.prototype.e = function(a) {
            return a in this.B
        };
        RAL.b = function(a, b, c) {
            this.Wa = new Date;
            a = RAL.i(a);
            if (!a) throw "Missing URL!";
            this.A = a;
            this.l = [a];
            this.Sa = this.ba = h;
            this.Ac = "pv";
            this.xa = "Rp";
            this.ta = "Rz";
            this.ra = navigator && "onLine" in navigator ?
                navigator.onLine : !0;
            this.c = new RAL.g;
            this.F = this.kc();
            this.h = null;
            this.Ta = RAL.Mb;
            this.G = b || RAL.Ob;
            this.ab = c || function() {
                return !0
            };
            this.oa = !0;
            this.n = [];
            this.pa = (b = this.Na()) ? 8 <= b : !0;
            this.va = 0;
            e.addEventListener ? (e.addEventListener("online", this.P(this.aa, this, [this]), !1), e.addEventListener("offline", this.P(this.aa, this, [this]), !1)) : document.body && (document.body.ononline = this.P(this.aa, this, [this]), document.body.onoffline = this.P(this.aa, this, [this]));
            b = RAL.fc() || RAL.j(RAL.X) || "";
            /^([0-9]+\|[0-9a-f-]+|amp\-[0-9a-zA-Z\_\-]+)+$/.test(b) ||
                (b = [(new Date).getTime(), RAL.Wb()].join("|"));
            var d;
            c = (document.location.hostname || "").split(".");
            for (a = 2; 3 >= a && !d; a++) {
                var q = c.slice(-a).join(".");
                RAL.Xa(q) && (d = q)
            }
            RAL.Q(RAL.X, b, RAL.Nb, d);
            RAL.Ya("RA_PUBLISH");
            "webVitals" in e && "function" == typeof e.webVitals.getFCP && "function" == typeof e.webVitals.getLCP && "function" == typeof e.webVitals.getFID && "function" == typeof e.webVitals.getCLS && "function" == typeof e.webVitals.getTTFB ? (RAL.m = e.webVitals, RAL.Ma = "*.*.*") : RAL.m = RAL._loadWebVitals();
            try {
                RAL.b.prototype.r.Kc()
            } catch (f) {}
        };
        RAL.b.prototype.$b = function() {
            return 2048 - (this.A.length + RAL.ma.length)
        };
        RAL.b.prototype.setMainReceiver = function(a) {
            if (!(0 < this.va) && RAL.o(a)) {
                a = this.Ra(a);
                this.l[0] = a;
                for (var b = this.l.length - 1; 0 < b; --b) this.l[b] === a && this.l.splice(b, 1)
            }
        };
        RAL.b.prototype.addReceiver = function(a) {
            if (!(0 < this.va) && RAL.o(a)) {
                a = this.Ra(a);
                for (var b = 0; b < this.l.length; ++b)
                    if (this.l[b] === a) return;
                this.l.push(a)
            }
        };
        RAL.b.prototype.Ra = function(a) {
            return "https://" + a.match(/^(?:https?:)?(?:\/\/)?(.*)$/)[1]
        };
        RAL.b.prototype.P =
            function(a, b, c) {
                return function() {
                    var d = c || arguments,
                        d = Array.prototype.slice.call(arguments[0] ? arguments : [e.event], 0),
                        d = d.concat(c);
                    return a.apply(b || e, d)
                }
            };
        RAL.b.prototype.$a = function(a) {
            if (!this.ab || !RAL.C(a) || 0 === a.length) return null;
            var b = [],
                c;
            for (c = 0; c < a.length; c++) {
                var d = a[c];
                this.ab(l.parse(d)) && b.push(d)
            }
            return b
        };
        RAL.b.prototype.qc = function() {
            try {
                return "localStorage" in e && null != e.localStorage
            } catch (a) {
                return !1
            }
        };
        RAL.b.prototype.kc = function() {
            return this.qc() ? new RAL.L : RAL.Xa() ? new RAL.N :
                new RAL.M
        };
        RAL.b.prototype.Oa = function() {
            if (e.XDomainRequest) return new XDomainRequest;
            if (e.XMLHttpRequest) return new XMLHttpRequest;
            if (e.ActiveXObject) try {
                return new ActiveXObject("MSXML2.XMLHTTP.3.0")
            } catch (a) {}
            return null
        };
        RAL.b.prototype.sc = function(a) {
            return "string" === typeof a && null !== a && /^[a-zA-Z]+$/.test(a)
        };
        RAL.b.prototype.tc = function(a) {
            return "string" === typeof a && null !== a && /^[0-9a-zA-Z]+$/.test(a)
        };
        RAL.b.prototype.Qa = function(a) {
            var b = parseInt(a, 10);
            return !isNaN(b) && 0 < b && b == a
        };
        RAL.b.prototype.k =
            function(a) {
                return "object" === typeof a
            };
        RAL.b.prototype.setAccountId = function(a) {
            this.Qa(a) && this.c.d(RAL.a.s, a)
        };
        RAL.b.prototype.setCharSet = function(a) {
            this.k(a) || this.c.d(RAL.a.ob, a)
        };
        RAL.b.prototype.gc = function() {
            var a = "";
            if (document.referrer !== h) {
                var a = document.referrer,
                    b = a.match(/^android-app:\/\/([^//]*)/);
                if (b) switch (b[1]) {
                    case "m.facebook.com":
                        a = "https://play.google.com/store/apps/details?id=com.facebook.katana";
                        break;
                    default:
                        a = "https://play.google.com/store/apps/details?id=" + b[1]
                }
            }
            return a
        };
        RAL.b.prototype.oc = function() {
            return document.location.href
        };
        RAL.b.prototype.setGoalId = function(a) {
            this.k(a) || this.c.d(RAL.a.wb, a)
        };
        RAL.b.prototype.setAffiliateId = function(a) {
            this.k(a) || this.c.d(RAL.a.ib, a)
        };
        RAL.b.prototype.vc = function() {
            if (!navigator.mimeTypes) return !1;
            var a, b = /^application\/x-java-applet;jpi-version=.*/;
            for (a = 0; a < navigator.mimeTypes.length; a++)
                if (b.test(navigator.mimeTypes[a].type)) return !0;
            return !1
        };
        RAL.b.prototype.setServiceId = function(a) {
            this.Qa(a) && this.c.d(RAL.a.u, a)
        };
        RAL.b.prototype.setVersion =
            function(a) {
                this.k(a) || this.c.d(RAL.a.VERSION, a)
            };
        RAL.b.prototype.setCurrencyCode = function(a) {
            "string" === typeof a && "" !== a && 3 <= a.length && this.sc(a) && this.c.d(RAL.a.sb, a.substr(0, 3))
        };
        RAL.b.prototype.setSearchQuery = function(a) {
            this.k(a) || this.c.d(RAL.a.Ib, a)
        };
        RAL.b.prototype.setContentLanguage = function(a) {
            this.k(a) || this.c.d(RAL.a.rb, a)
        };
        RAL.b.prototype.setCampaignCode = function(a) {
            this.tc(a) && this.c.d(RAL.a.nb, a)
        };
        RAL.b.prototype.setCheckPoints = function(a) {
            isNaN(parseInt(a, 10)) || this.c.d(RAL.a.qb, a)
        };
        RAL.b.prototype.setCheckout = function(a) {
            a = parseInt(a, 10);
            switch (a) {
                case 10:
                case 20:
                case 30:
                case 40:
                case 50:
                    this.c.d(RAL.a.pb, a)
            }
        };
        RAL.b.prototype.setRequestResult = function(a) {
            this.k(a) || this.c.d(RAL.a.Gb, a)
        };
        RAL.b.prototype.Xb = function(a) {
            var b = a.getMonth() + 1,
                c = a.getDate(),
                d = a.getHours(),
                e = a.getMinutes(),
                f = a.getSeconds();
            return a.getFullYear() + "-" + (10 > b ? "0" : "") + b + "-" + (10 > c ? "0" : "") + c + " " + (10 > d ? "0" : "") + d + ":" + (10 > e ? "0" : "") + e + ":" + (10 > f ? "0" : "") + f
        };
        RAL.b.prototype.setPageName = function(a) {
            this.k(a) || this.c.d(RAL.a.Eb,
                a)
        };
        RAL.b.prototype.setPageType = function(a) {
            this.k(a) || this.c.d(RAL.a.Fb, a)
        };
        RAL.b.prototype.setGenre = function(a) {
            this.k(a) || this.c.d(RAL.a.vb, a)
        };
        RAL.b.prototype.setCustomParameters = function(a) {
            if (a) {
                var b = a;
                if (this.c.e(RAL.a.ca)) {
                    var c = this.c.get(RAL.a.ca);
                    RAL.sa(c, a) && (b = c)
                }
                this.c.d(RAL.a.ca, b)
            }
        };
        RAL.b.prototype.setViewImpressions = function(a) {
            this.c.d(RAL.a.Lb, a)
        };
        RAL.b.prototype.setParameters = function(a) {
            this.c.setParameters(a)
        };
        RAL.b.prototype.appendParameters = function(a) {
            if (RAL.D(a))
                for (var b in a)
                    if (this.c.e(b)) {
                        var c =
                            this.c.get(b);
                        "object" !== typeof c && (c = []);
                        this.c.d(b, [].concat(c).concat(a[b]))
                    } else "object" === typeof a[b] ? this.c.d(b, a[b]) : this.c.d(b, [a[b]])
        };
        RAL.b.prototype.setOptions = function(a) {
            if (RAL.C(a)) {
                for (var b = {}, c = 0, d = a.length; c < d; ++c) b[a[c]] = !0;
                this.Va(b)
            }
        };
        RAL.b.prototype.wc = function() {
            return e.navigator.userAgent !== h && -1 !== e.navigator.userAgent.search(/RAL/i)
        };
        RAL.b.prototype.detectFlashVersion = function() {
            if (document.images) {
                var a = null,
                    b = !1;
                if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) {
                    var c =
                        navigator.mimeTypes["application/x-shockwave-flash"];
                    c.enabledPlugin && c.enabledPlugin.description && (a = c.enabledPlugin.description, b = !0)
                } else navigator.plugins && "Shockwave Flash" in navigator.plugins && (a = navigator.plugins["Shockwave Flash"].description.match(/[\d]+/g).join("."), b = !0);
                try {
                    b || (a = (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version"))
                } catch (d) {}
                this.c.d(RAL.a.ub, a)
            }
        };
        RAL.b.prototype.setCookieNames = function(a, b) {
            RAL.D(a) ? (RAL.a.v in a && (this.xa = a[RAL.a.v]), RAL.a.ea in
                a && (this.ta = a[RAL.a.ea])) : (b && RAL.o(b) && (this.xa = b), a && RAL.o(a) && (this.ta = a))
        };
        RAL.b.prototype.jc = function() {
            return RAL.j(this.xa)
        };
        RAL.b.prototype.ec = function() {
            return RAL.j(this.ta)
        };
        RAL.b.prototype.Yb = function() {
            return navigator.browserLanguage ? navigator.browserLanguage : navigator.language ? navigator.language : RAL.Sb
        };
        RAL.b.prototype.mc = function() {
            return -(this.Wa.getTimezoneOffset() / 60)
        };
        RAL.b.prototype.pc = function() {
            return navigator.userAgent
        };
        RAL.b.prototype.ic = function() {
            return e.screen.width +
                "x" + e.screen.height
        };
        RAL.b.prototype.Na = function() {
            if ("Microsoft Internet Explorer" === navigator.appName) {
                var a = navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
                if (null !== a && (a = parseFloat(a[1]), !isNaN(a))) return a
            }
            return h
        };
        RAL.b.prototype.lc = function() {
            var a;
            this.ba ? a = this.ba : e.sessionStorage && (a = e.sessionStorage.getItem(RAL.w + RAL.Ka));
            if (!a)
                if (a = Math.floor(65536 * Math.random()), a = a.toString(16) + (17 * a & 65535).toString(16), e.sessionStorage) try {
                    e.sessionStorage.setItem(RAL.w + RAL.Ka, a)
                } catch (b) {
                    this.ba =
                        a
                } else this.ba = a;
            return a
        };
        RAL.b.prototype.cc = function() {
            var a = this.Sa;
            a || (this.Sa = a = RAL.Z(document.location.href) + RAL.Z(document.referrer) + RAL.Z(navigator.userAgent) + RAL.Z((new Date).getTime().toString()));
            return a
        };
        RAL.b.prototype.hc = function(a) {
            if (0 < a.navigationStart && 0 < a.domLoading) {
                if (a.domLoading < a.navigationStart) throw "UnexpectedTimingException";
                return a.domLoading - a.navigationStart
            }
            return h
        };
        RAL.b.prototype.dc = function(a) {
            if (0 < a.domLoading && 0 < a.domContentLoadedEventStart) {
                if (a.domContentLoadedEventStart <
                    a.domLoading) throw "UnexpectedTimingException";
                return a.domContentLoadedEventStart - a.domLoading
            }
            return h
        };
        RAL.b.prototype.nc = function(a) {
            if (0 < a.loadEventEnd && 0 < a.navigationStart) {
                if (a.loadEventEnd < a.navigationStart) throw "UnexpectedTimingException";
                return a.loadEventEnd - a.navigationStart
            }
            return h
        };
        RAL.b.prototype.bc = function(a) {
            if (0 < a.domContentLoadedEventStart && 0 < a.domComplete) {
                if (a.domComplete < a.domContentLoadedEventStart) throw "UnexpectedTimingException";
                return a.domComplete - a.domContentLoadedEventStart
            }
            return h
        };
        RAL.b.prototype.Zb = function() {
            if ("performance" in e && e.performance.timing) {
                var a = e.performance.timing,
                    b = {},
                    c = !1;
                try {
                    b[RAL.a.Hb] = this.hc(a)
                } catch (d) {
                    c = !0
                }
                try {
                    b[RAL.a.Ab] = this.dc(a)
                } catch (q) {
                    c = !0
                }
                try {
                    b[RAL.a.Kb] = this.nc(a)
                } catch (f) {
                    c = !0
                }
                try {
                    b[RAL.a.mb] = this.bc(a)
                } catch (l) {
                    c = !0
                }
                c && (b[RAL.a.za] = {}, b[RAL.a.za].nav_timing = a);
                return b
            }
            return h
        };
        RAL.b.prototype.ac = function() {
            return "performance" in e && e.performance.navigation ? e.performance.navigation.type : h
        };
        RAL.b.prototype.uc = function() {
            return e === e.parent ||
                e.isAmp ? 0 : 1
        };
        RAL.b.prototype.setEvent = function(a, b) {
            RAL.o(a) && (this.c.d(RAL.a.T, a), a in RAL.Y && "boolean" == typeof b && (RAL.Y[a] = b), a == this.Ac ? this.pageViewEvent() : this.ua())
        };
        RAL.b.prototype.setXHRAllowed = function(a) {
            this.oa = !!a
        };
        RAL.b.prototype.pageViewEvent = function() {
            !this.wc() && (this.c.e(RAL.a.s) && this.c.e(RAL.a.u) || this.rc()) && (this.Va(), this.ua())
        };
        RAL.b.prototype.removeEventLogs = function() {
            RAL.eventLog = []
        };
        RAL.b.prototype.r = {
            Pa: !1,
            Za: !1,
            f: {},
            Kc: function() {
                if (RAL.m && !this.Pa) {
                    var a = null,
                        b = this,
                        c = b.f,
                        d = document.getElementById("ratAccountId"),
                        q = document.getElementById("ratServiceId");
                    d && (c.bb = d.getAttribute("value"));
                    q && (c.cb = q.getAttribute("value"));
                    c.V = RAL.Ma;
                    Object.defineProperties(b, {
                        I: {
                            get: function() {
                                return c.I
                            },
                            set: function(a) {
                                c.I = a
                            }
                        },
                        K: {
                            get: function() {
                                return c.K
                            },
                            set: function(a) {
                                c.K = a
                            }
                        },
                        t: {
                            get: function() {
                                return c.t
                            },
                            set: function(a) {
                                c.t = a
                            }
                        },
                        O: {
                            get: function() {
                                return c.O
                            },
                            set: function(a) {
                                c.O = a
                            }
                        },
                        J: {
                            get: function() {
                                return c.J
                            },
                            set: function(a) {
                                c.J = a
                            }
                        },
                        V: {
                            get: function() {
                                return c.V
                            },
                            set: function(a) {
                                c.V =
                                    a
                            }
                        }
                    });
                    (0, RAL.m.getFCP)(function(a) {
                        b.f.I = Math.round(a.value)
                    }, !0);
                    (0, RAL.m.getLCP)(function(a) {
                        b.f.K = Math.round(a.value)
                    }, !0);
                    (0, RAL.m.getCLS)(function(a) {
                        b.f.t = +a.value.toFixed(3)
                    }, !0);
                    (0, RAL.m.getTTFB)(function(a) {
                        b.f.O = Math.round(a.value)
                    }, !0);
                    (0, RAL.m.getFID)(function(c) {
                        b.f.J = Math.round(c.value);
                        !b.f.t || Math.random() > RAL.La || (clearTimeout(a), b.fb())
                    }, !0);
                    e.addEventListener("load", function() {
                        a = setTimeout(function() {
                            Math.random() > RAL.La || b.fb()
                        }, RAL.Ub)
                    });
                    b.Pa = !0
                }
            },
            fb: function() {
                this.Za || (this.Za = !0, this.f.bb && this.f.cb && (this.f.t || this.f.I || this.f.K || this.f.J || this.f.O) && (RAL.callQueue = RAL.callQueue || [], RAL.callQueue.push(["setOptions", [RAL.a.ha, RAL.a.ja, RAL.a.ga, RAL.a.la, RAL.a.ia, RAL.a.ka, RAL.a.W, RAL.a.URL, "perf"]]), RAL.callQueue.push(["setAccountId", this.f.bb]), RAL.callQueue.push(["setServiceId", this.f.cb]), RAL.callQueue.push(["setEvent", "perf"])))
            }
        };
        RAL.b.prototype.Va = function(a) {
            a && !a[RAL.a.Fa] || this.c.d(RAL.a.Fa, this.Xb(this.Wa));
            if (!a || a[RAL.a.URL]) this.c.e(RAL.a.URL) || this.c.d(RAL.a.URL,
                this.oc());
            if (!a || a[RAL.a.fa]) this.c.e(RAL.a.fa) || this.c.d(RAL.a.fa, this.gc());
            a && !a[RAL.a.Ia] || this.c.d(RAL.a.Ia, this.lc());
            a && !a[RAL.a.Ja] || this.c.d(RAL.a.Ja, this.mc());
            a && !a[RAL.a.Ea] || this.c.d(RAL.a.Ea, this.ic());
            a && !a[RAL.a.Ba] || this.c.d(RAL.a.Ba, this.vc());
            a && !a[RAL.a.ya] || this.c.d(RAL.a.ya, this.Yb());
            if (!a || a[RAL.a.W]) this.c.e(RAL.a.W) || this.c.d(RAL.a.W, this.pc());
            a && !a[RAL.a.Da] || this.c.d(RAL.a.Da, this.ra);
            a && !a[RAL.a.VERSION] || this.c.d(RAL.a.VERSION, RAL.Tb);
            if (!a || a[RAL.a.da]) null === this.h ?
                this.c.remove(RAL.a.da) : this.c.d(RAL.a.da, this.h);
            a && !a.perf || this.c.eb(this.Zb());
            a && !a[RAL.a.Ca] || this.c.d(RAL.a.Ca, this.ac());
            a && !a[RAL.a.Aa] || this.c.d(RAL.a.Aa, this.uc());
            a && !a[RAL.a.ja] || this.c.d(RAL.a.ja, this.r.K);
            a && !a[RAL.a.ha] || this.c.d(RAL.a.ha, this.r.I);
            a && !a[RAL.a.ga] || this.c.d(RAL.a.ga, this.r.t);
            a && !a[RAL.a.la] || this.c.d(RAL.a.la, this.r.O);
            a && !a[RAL.a.ia] || this.c.d(RAL.a.ia, this.r.J);
            a && !a[RAL.a.ka] || this.c.d(RAL.a.ka, this.r.V)
        };
        RAL.b.prototype.Dc = function(a) {
            if (!this.pa) return this.wa([a]) ?
                !0 : !1;
            try {
                var b = this.Oa();
                b && (b.open("GET", this.A + RAL.ma + encodeURIComponent(a), !0), b.withCredentials = !0, b.send(""))
            } catch (c) {
                return !1
            }
            return !0
        };
        RAL.b.prototype.Ec = function(a) {
            try {
                document.createElement("img").src = this.A + RAL.ma + encodeURIComponent(a) + "&t=" + (new Date).getTime()
            } catch (b) {
                return !1
            }
            return !0
        };
        RAL.b.prototype.Ua = function(a) {
            try {
                if (0 === a.length) return !0;
                var b = 1 === a.length ? a[0] : "[" + a.join(",") + "]",
                    c = this.Oa();
                c && (c.open("POST", this.A, !0), this.Na() || c.setRequestHeader("Content-type", "text/plain; charset=UTF-8"),
                    c.withCredentials = !0, c.send(RAL.na + b))
            } catch (d) {
                return !1
            }
            return !0
        };
        RAL.b.prototype.wa = function(a) {
            if (!document.body) return !1;
            if (0 === a.length) return !0;
            a = 1 === a.length ? a[0] : "[" + a.join(",") + "]";
            var b = document.createElement("iframe");
            b.name = RAL.w + String(Math.floor(2147483648 * Math.random()));
            b.style.display = "none";
            document.body.appendChild(b);
            if (b.contentWindow) {
                b.contentWindow.name = b.name;
                var c = document.createElement("form");
                c.target = b.name;
                c.action = this.A.replace("http:", "https:");
                c.method = "POST";
                c.encoding =
                    c.enctype = "text/plain";
                c.style.display = "none";
                var d = document.createElement("input");
                d.type = "hidden";
                d.name = RAL.na.replace("=", "");
                d.value = a;
                c.appendChild(d);
                document.body.appendChild(c);
                c.submit();
                document.body.removeChild(c);
                document.body.removeChild(b);
                return !0
            }
            return !1
        };
        RAL.b.prototype.Cc = function(a) {
            if (null === a || "object" !== typeof a || 0 === a.length) return !0;
            var b = !0;
            return b = 1 === a.length ? encodeURIComponent(a[0]).length < this.$b() ? e.XDomainRequest || !this.oa ? this.Ec(a[0]) : this.Dc(a[0]) : this.pa && !e.XDomainRequest ?
                this.Ua(a) : this.wa(a) : this.pa && !e.XDomainRequest && this.oa ? this.Ua(a) : this.wa(a)
        };
        RAL.b.prototype.Ic = function(a, b) {
            var c = null;
            if (a.e(RAL.a.s) && a.e(RAL.a.u)) {
                var d;
                d = /\bsplash\b/i.test(navigator.userAgent) ? "splash_agent" : this.jc();
                a.d(RAL.a.v, d);
                /\bra_uid\b/.test(document.cookie) && (d = RAL.j("ra_uid")) && (d = decodeURIComponent(d), (c = d.match(/^"(.*)"$/)) && (d = c[1]), (c = RAL.j("rat_uid", d)) && a.d(RAL.a.v, c), (d = RAL.j("a_uid", d)) && a.d(RAL.a.hb, d));
                d = RAL.j(RAL.X);
                a.d(RAL.a.lb, d);
                a.e(RAL.a.v) ? (a.d(RAL.a.Ha, !0), a.d(RAL.a.Ga,
                    a.get(RAL.a.v))) : (a.d(RAL.a.Ha, !1), a.d(RAL.a.Ga, d));
                a.d(RAL.a.ea, this.ec());
                this.Fc(a);
                c = a.Lc();
                d = this.qa();
                d.length >= RAL.Qb && (d = this.$a(d) || d);
                c.length + d.join().length > RAL.Rb && this.$a(d);
                if (this.Vb(c) && (c = null, b)) return
            }
            if (this.ra) {
                d = this.qa();
                c && d.push(c);
                for (var c = Math.min(d.length, RAL.Pb), c = d.splice(0, c), e = !1, f = 0; f < this.l.length; ++f) this.A = this.l[f], e = this.Cc(c) || e;
                if (e) {
                    this.va++;
                    for (e = 0; e < c.length; ++e) try {
                        RAL.eventLog.push(l.parse(c[e]))
                    } catch (h) {}
                    RAL.Ya("RAT_REQUEST_DONE");
                    this.Gc(d)
                }
            }
        };
        RAL.b.prototype.Fc =
            function(a) {
                var b = ["Rg", "Rt", "BTA001"];
                if (RAL.C(b))
                    for (var c, d, e = 0; e < b.length; e++) c = b[e], d = RAL.j(c), null !== d && a.d(c, decodeURIComponent(d))
            };
        RAL.b.prototype.aa = function(a) {
            a = a || e.event;
            this.ra = "online" === a.type
        };
        RAL.b.prototype.rc = function() {
            return this.F.e(this.G)
        };
        RAL.b.prototype.qa = function() {
            return this.F.e(this.G) ? this.F.q(this.G).split("\t") : []
        };
        RAL.b.prototype.Gc = function(a) {
            a && a instanceof Array && (0 === a.length ? this.F.R(this.G) : this.F.H(this.G, a.join("\t")))
        };
        RAL.b.prototype.Vb = function(a) {
            var b = !1;
            a && (b = this.qa(), b.push(a), b = this.F.H(this.G, b.join("\t")));
            return b
        };
        RAL.b.prototype.Hc = function(a) {
            this.h = {};
            this.h[RAL.a.zb] = a.coords.latitude;
            this.h[RAL.a.Bb] = a.coords.longitude;
            this.h[RAL.a.gb] = a.coords.accuracy;
            a.coords.speed && (this.h[RAL.a.Jb] = a.coords.speed);
            a.coords.altitude && (this.h[RAL.a.jb] = a.coords.altitude);
            a.coords.heading && (this.h[RAL.a.yb] = a.coords.heading);
            a.coords.altitudeAccuracy && (this.h[RAL.a.kb] = a.coords.altitudeAccuracy);
            this.h[RAL.a.xb] = a.timestamp
        };
        RAL.b.prototype.zc = function() {};
        RAL.b.prototype.getLocation = function() {
            navigator.geolocation && (this.h = null, navigator.geolocation.getCurrentPosition(this.P(this.Hc, this, [this]), this.zc))
        };
        RAL.b.prototype.setReportingInterval = function(a) {
            a = parseInt(a, 10);
            !isNaN(a) && 0 < a && (this.Ta = a)
        };
        RAL.b.prototype.ua = function() {
            this.c.e(RAL.a.s) && this.c.e(RAL.a.u) && (this.c.d(RAL.a.Db, this.cc()), this.c.d(RAL.a.Cb, RAL.Y), this.n.push(this.c), this.c = new RAL.g)
        };
        RAL.b.prototype.yc = function() {
            this.ua();
            for (var a = 0, b = 1, c, d; b < this.n.length;) c = this.n[a],
                d = this.n[b], c.get(RAL.a.s) === d.get(RAL.a.s) && c.get(RAL.a.u) === d.get(RAL.a.u) && c.get(RAL.a.T) === d.get(RAL.a.T) && c.Mc() ? (c.eb(d.Jc()), this.n.splice(b, 1)) : (a++, b++)
        };
        RAL.b.prototype.processQueue = function() {
            var a = this;
            if (RAL.C(RAL.callQueue)) try {
                for (var b; 0 < RAL.callQueue.length;) {
                    b = RAL.callQueue.shift();
                    var c = b[0];
                    c in this && this[c].apply(this, b.slice(1))
                }
                for (this.yc(); 0 < this.n.length;) {
                    var d = 1 == this.n.length;
                    this.Ic(this.n.shift(), !d)
                }
            } catch (h) {}
            e.setTimeout(function() {
                a.processQueue()
            }, this.Ta)
        };
        (new RAL.b("https://rat.rakuten.co.jp/")).processQueue();
        RAL.live = !0
    }(window);
})(window);