(function(E) {
    var window = this;
    if (window.googletag && googletag.evalScripts) {
        googletag.evalScripts();
    }
    if (window.googletag && googletag._loaded_) return;
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var m, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        ea = ca(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        p = {},
        ha = {},
        q = function(a, b) {
            var c = ha[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        },
        r = function(a, b, c) {
            if (b) a: {
                var d = a.split(".");a = 1 === d.length;
                var e = d[0],
                    f;!a && e in p ? f = p : f = ea;
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f)) break a;
                    f = f[g]
                }
                d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ba(p, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ba(f, ha[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
        };
    r("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.g
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    r("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, p.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(aa(this))
                }
            })
        }
        return a
    }, "es6");
    var ia = function(a) {
            a = {
                next: a
            };
            a[q(p.Symbol, "iterator")] = function() {
                return this
            };
            return a
        },
        ja = function(a) {
            return a.raw = a
        },
        t = function(a) {
            var b = "undefined" != typeof p.Symbol && q(p.Symbol, "iterator") && a[q(p.Symbol, "iterator")];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ka = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        u = function(a) {
            return a instanceof Array ? a : ka(t(a))
        },
        la = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        ma = fa && "function" == typeof q(Object, "assign") ? q(Object, "assign") : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) la(d, e) && (a[e] = d[e])
            }
            return a
        };
    r("Object.assign", function(a) {
        return a || ma
    }, "es6");
    var oa = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        pa;
    if (fa && "function" == typeof Object.setPrototypeOf) pa = Object.setPrototypeOf;
    else {
        var ra;
        a: {
            var sa = {
                    a: !0
                },
                ta = {};
            try {
                ta.__proto__ = sa;
                ra = ta.a;
                break a
            } catch (a) {}
            ra = !1
        }
        pa = ra ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ua = pa,
        v = function(a, b) {
            a.prototype = oa(b.prototype);
            a.prototype.constructor = a;
            if (ua) ua(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Ta = b.prototype
        },
        va = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    r("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    r("WeakMap", function(a) {
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
                this.g = (e += Math.random() + 1).toString();
                if (g) {
                    g = t(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!la(g, d)) {
                var k = new b;
                ba(g, d, {
                    value: k
                })
            }
            if (!la(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.g] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && la(g, d) ? g[d][this.g] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && la(g, d) && la(g[d], this.g)
        };
        f.prototype.delete = function(g) {
            return c(g) && la(g, d) && la(g[d], this.g) ? delete g[d][this.g] : !1
        };
        return f
    }, "es6");
    r("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(t([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        n = l.next();
                    if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                    n = l.next();
                    return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0
                } catch (w) {
                    return !1
                }
            }()) return a;
        var b = new p.WeakMap,
            c = function(h) {
                this.h = {};
                this.g = f();
                this.size = 0;
                if (h) {
                    h = t(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.h[l.id] = []);
            l.s ? l.s.value = k : (l.s = {
                next: this.g,
                B: this.g.B,
                head: this.g,
                key: h,
                value: k
            }, l.list.push(l.s), this.g.B.next = l.s, this.g.B = l.s, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.s && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.s.B.next = h.s.next, h.s.next.B = h.s.B, h.s.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.h = {};
            this.g = this.g.B = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).s
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).s) && h.value
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
            for (var l = this.entries(), n; !(n = l.next()).done;) n = n.value, h.call(k, n[1], n[0], this)
        };
        c.prototype[q(p.Symbol, "iterator")] = c.prototype.entries;
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var n = h.h[l];
                if (n && la(h.h, l))
                    for (h = 0; h < n.length; h++) {
                        var w = n[h];
                        if (k !== k && w.key !== w.key || k === w.key) return {
                            id: l,
                            list: n,
                            index: h,
                            s: w
                        }
                    }
                return {
                    id: l,
                    list: n,
                    index: -1,
                    s: void 0
                }
            },
            e = function(h, k) {
                var l = h.g;
                return ia(function() {
                    if (l) {
                        for (; l.head != h.g;) l = l.B;
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
                return h.B = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var wa = function(a, b) {
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
        e[q(p.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    r("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return wa(this, function(b) {
                return b
            })
        }
    }, "es6");
    r("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    r("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(t([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.g = new p.Map;
            if (c) {
                c = t(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return this.g.entries()
        };
        b.prototype.values = function() {
            return q(this.g, "values").call(this.g)
        };
        b.prototype.keys = q(b.prototype, "values");
        b.prototype[q(p.Symbol, "iterator")] = q(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    var xa = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    r("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = xa(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    r("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = xa(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    r("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    r("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = xa(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? q(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    r("Array.prototype.values", function(a) {
        return a ? a : function() {
            return wa(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    r("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    r("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || q(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    r("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== xa(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    var x = this || self,
        ya = function(a) {
            a = a.split(".");
            for (var b = x, c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        Ba = function(a) {
            return Object.prototype.hasOwnProperty.call(a, za) && a[za] || (a[za] = ++Aa)
        },
        za = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Aa = 0,
        Ca = function(a, b) {
            a = a.split(".");
            var c = x;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        };
    var Da = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        La = function(a) {
            if (!Ea.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Fa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ga, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ha, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ia, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ja, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ka, "&#0;"));
            return a
        },
        Fa = /&/g,
        Ga = /</g,
        Ha = />/g,
        Ia = /"/g,
        Ja = /'/g,
        Ka = /\x00/g,
        Ea = /[\x00&<>"']/,
        Na = function(a, b) {
            var c = 0;
            a = Da(String(a)).split(".");
            b = Da(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = Ma(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ma(0 == f[2].length, 0 == g[2].length) || Ma(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        Ma = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };

    function Oa() {
        var a = x.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function Pa(a) {
        return -1 != Oa().indexOf(a)
    };
    var Qa = function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        },
        Ra = function(a, b) {
            return Array.prototype.filter.call(a, b, void 0)
        },
        Sa = function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        };

    function Ta(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ua(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Va(a, b) {
        return 0 <= Array.prototype.indexOf.call(a, b, void 0)
    };
    var Wa = function(a) {
        Wa[" "](a);
        return a
    };
    Wa[" "] = function() {};
    var Xa = {},
        Ya = null,
        $a = function(a) {
            var b;
            void 0 === b && (b = 0);
            Za();
            b = Xa[b];
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
        bb = function(a) {
            var b = [];
            ab(a, function(c) {
                b.push(c)
            });
            return b
        },
        ab = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        n = Ya[l];
                    if (null != n) return n;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            Za();
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
        Za = function() {
            if (!Ya) {
                Ya = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Xa[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === Ya[f] && (Ya[f] = e)
                    }
                }
            }
        };
    var cb = "undefined" !== typeof Uint8Array,
        db = {};
    var eb, fb = function(a) {
        if (db !== db) throw Error("illegal external caller");
        this.T = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    };
    fb.prototype.isEmpty = function() {
        return null == this.T
    };
    var y = "function" === typeof p.Symbol && "symbol" === typeof(0, p.Symbol)() ? (0, p.Symbol)(void 0) : void 0;

    function z(a, b) {
        Object.isFrozen(a) || (y ? a[y] |= b : void 0 !== a.u ? a.u |= b : Object.defineProperties(a, {
            u: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function gb(a, b) {
        Object.isExtensible(a) && (y ? a[y] && (a[y] &= ~b) : void 0 !== a.u && (a.u &= ~b))
    }

    function A(a) {
        var b;
        y ? b = a[y] : b = a.u;
        return null == b ? 0 : b
    }

    function hb(a, b) {
        y ? a[y] = b : void 0 !== a.u ? a.u = b : Object.defineProperties(a, {
            u: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function ib(a) {
        z(a, 1);
        return a
    }

    function jb(a) {
        z(a, 17);
        return a
    }

    function B(a) {
        return a ? !!(A(a) & 2) : !1
    }

    function kb(a) {
        z(a, 16);
        return a
    }

    function lb(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
        gb(a, 16)
    };
    var mb = {};

    function nb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var ob, pb = Object,
        qb = pb.freeze,
        rb = [];
    z(rb, 3);
    var sb = qb.call(pb, rb),
        tb = function(a) {
            if (B(a.i)) throw Error("Cannot mutate an immutable Message");
        };

    function ub(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (cb && null != a && a instanceof Uint8Array) return $a(a);
                    if (a instanceof fb) {
                        var b = a.T;
                        return null == b ? "" : "string" === typeof b ? b : a.T = $a(b)
                    }
                }
        }
        return a
    };

    function vb(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = wb(a, b, c, void 0 !== d);
            else if (nb(a)) {
                var e = {},
                    f;
                for (f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = vb(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function wb(a, b, c, d) {
        d = d ? !!(A(a) & 16) : void 0;
        var e = Array.prototype.slice.call(a);
        c(a, e);
        for (a = 0; a < e.length; a++) e[a] = vb(e[a], b, c, d);
        return e
    }

    function xb(a) {
        return a.la === mb ? a.toJSON() : ub(a)
    }

    function yb() {};
    var D = function(a, b, c) {
            return -1 === b ? null : b >= a.D ? a.m ? a.m[b] : void 0 : (void 0 === c ? 0 : c) && a.m && (c = a.m[b], null != c) ? c : a.i[b + a.C]
        },
        F = function(a, b, c, d, e) {
            d = void 0 === d ? !1 : d;
            (void 0 === e ? 0 : e) || tb(a);
            a.ja && (a.ja = void 0);
            if (b >= a.D || d) return (a.m || (a.m = a.i[a.D + a.C] = {}))[b] = c, a;
            void 0 !== a.m && a.D >= a.i.length ? (d = a.i.length - 1, e = b + a.C, e >= d ? (a.i[d] = void 0, a.i[e] = c, a.i.push(a.m)) : a.i[e] = c) : a.i[b + a.C] = c;
            void 0 !== a.m && b in a.m && delete a.m[b];
            return a
        };

    function zb(a, b, c, d) {
        var e = D(a, b, d);
        Array.isArray(e) || (e = sb);
        var f = A(e);
        f & 1 || ib(e);
        B(a.i) ? (f & 2 || z(e, 2), c & 1 || Object.freeze(e)) : e === sb || !(c & 1 && c & 2) && f & 2 ? (e = ib(Array.prototype.slice.call(e)), F(a, b, e, d)) : !(c & 2) && f & 16 && lb(e);
        return e
    }

    function Ab(a, b) {
        var c = zb(a, b, 1, !1);
        if (c.length && !(A(c) & 4)) {
            Object.isFrozen(c) && (c = ib(c.slice()), F(a, b, c, !1, !0));
            for (var d = b = 0; b < c.length; b++) {
                var e = c[b];
                null != e && (c[d++] = e)
            }
            d < b && (c.length = d);
            z(c, 5)
        }
        B(a.i) && !Object.isFrozen(c) && (z(c, 2), Object.freeze(c));
        return c
    }
    var G = function(a, b) {
            a = D(a, b);
            return null == a ? 0 : a
        },
        Bb = function(a, b, c) {
            null == c ? c = sb : ib(c);
            return F(a, b, c)
        },
        Cb = function(a, b, c) {
            if (null == c) c = sb;
            else {
                for (var d = 0; d < c.length; d++);
                z(c, 5)
            }
            F(a, b, c)
        };

    function H(a, b, c, d) {
        tb(a);
        c !== d ? F(a, b, c) : F(a, b, void 0, !1);
        return a
    }
    var Eb = function(a, b, c, d) {
            tb(a);
            (c = Db(a, c)) && c !== b && null != d && F(a, c, void 0, !1);
            return F(a, b, d)
        },
        I = function(a, b, c) {
            return Db(a, b) === c ? c : -1
        },
        Db = function(a, b) {
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                null != D(a, e) && (0 !== c && F(a, c, void 0, !1, !0), c = e)
            }
            return c
        },
        Fb = function(a, b, c, d) {
            var e = D(a, c, d);
            var f = !1;
            var g = null == e || "object" !== typeof e || (f = Array.isArray(e)) || e.la !== mb ? f ? new b(e) : void 0 : e;
            g !== e && null != g && (F(a, c, g, d, !0), z(g.i, A(a.i) & -33));
            return g
        },
        J = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            b = Fb(a, b, c, d);
            if (null == b) return b;
            B(b.i) && !B(a.i) && (b = Gb(b), F(a, c, b, d));
            return b
        },
        K = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            var e = B(a.i),
                f = e;
            f = void 0 === f ? !0 : f;
            a.g || (a.g = {});
            var g = a.g[c];
            var h = zb(a, c, 3, d),
                k = B(a.i),
                l = !!(A(a.i) & 16),
                n = B(h),
                w = k || n;
            !f && n && (h = ib(Array.prototype.slice.call(h)), F(a, c, h, d));
            if (!g) {
                g = [];
                n = w;
                for (var C = 0; C < h.length; C++) {
                    var L = h[C];
                    n = n || B(L);
                    var qa = b,
                        da = l,
                        Y = !1;
                    Y = void 0 === Y ? !1 : Y;
                    da = void 0 === da ? !1 : da;
                    L = Array.isArray(L) ? new qa(da ? kb(L) : L) : Y ? new qa : void 0;
                    void 0 !== L && (g.push(L), w && z(L.i, 2))
                }
                a.g[c] = g;
                Object.isFrozen(h) || (b = A(h) | 33, hb(h, n ? b & -9 : b | 8))
            }
            f = k || f;
            h = B(g);
            f && !h && (Object.isFrozen(g) && (a.g[c] = g = g.slice()), z(g, 2), Object.freeze(g));
            !f && h && (a.g[c] = g = g.slice());
            a = zb(a, c, 3, d);
            if (e = !e && a) {
                if (!a) throw Error("cannot check mutability state of non-array");
                e = !(A(a) & 8)
            }
            if (e) {
                for (e = 0; e < g.length; e++)(c = g[e]) && B(c.i) && (c = e, d = Gb(g[e]), g[c] = d, a[e] = g[e].i);
                z(a, 8)
            }
            return g
        },
        Hb = function(a, b, c) {
            tb(a);
            null == c && (c = void 0);
            return F(a, b, c)
        },
        Ib = function(a, b, c, d) {
            tb(a);
            null == d && (d = void 0);
            return Eb(a, b, c, d)
        },
        Jb = function(a, b, c) {
            tb(a);
            if (null != c) {
                var d = ib([]);
                for (var e = !1, f = 0; f < c.length; f++) d[f] = c[f].i, e = e || B(d[f]);
                a.g || (a.g = {});
                a.g[b] = c;
                c = d;
                e ? gb(c, 8) : z(c, 8)
            } else a.g && (a.g[b] = void 0), d = sb;
            return F(a, b, d)
        };

    function M(a, b) {
        return null == a ? b : a
    }
    var Kb = function(a, b) {
            return M(D(a, b), "")
        },
        Lb = function(a, b) {
            a = D(a, b);
            return M(null == a ? a : !!a, !1)
        },
        Mb = function(a, b) {
            a = D(a, b);
            return M(null == a ? a : +a, 0)
        };

    function Nb(a, b, c, d, e, f) {
        (a = a.g && a.g[c]) ? (e = f.N ? ib(a.slice()) : a, Jb(b, c, e)) : (cb && d instanceof Uint8Array ? e = d.length ? new fb(new Uint8Array(d)) : eb || (eb = new fb(null)) : (Array.isArray(d) && (e ? z(d, 2) : d && A(d) & 1 && f.N ? (e = Array.prototype.slice.call(d), hb(e, (A(d) | 0) & -51), d = e) : lb(d)), e = d), F(b, c, e))
    };

    function Gb(a) {
        if (!B(a.i)) return a;
        var b = {
                N: !0
            },
            c = B(a.i);
        if (c && !b.N) throw Error("copyRepeatedFields must be true for frozen messages");
        c || lb(a.i);
        var d = new a.constructor;
        a.ka && (d.ka = a.ka.slice());
        for (var e = a.i, f = 0; f < e.length; f++) {
            var g = e[f];
            if (f === e.length - 1 && nb(g))
                for (var h in g) {
                    if (Object.prototype.hasOwnProperty.call(g, h)) {
                        var k = +h;
                        q(Number, "isNaN").call(Number, k) ? (d.m || (d.m = d.i[d.D + d.C] = {}))[h] = g[h] : Nb(a, d, k, g[h], c, b)
                    }
                } else Nb(a, d, f - a.C, g, c, b)
        }
        d.ja = a;
        return d
    };
    var N = function(a, b, c) {
        null == a && (a = Ob);
        Ob = null;
        var d = this.constructor.g || 0,
            e = 0 < d,
            f = this.constructor.messageId,
            g, h = !1;
        if (a) {
            if (g = !!(A(a) & 16)) h = A(a), hb(a, h | 32), h = !!(h & 32)
        } else g = f ? [f] : [], z(g, 48), a = g, g = !0;
        e && 0 < a.length && nb(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
        this.C = (f ? 0 : -1) - d;
        this.g = void 0;
        this.i = a;
        a: {
            f = this.i.length;d = f - 1;
            if (f && (f = this.i[d], nb(f))) {
                this.m = f;
                b = q(Object, "keys").call(Object, f);
                0 < b.length && Array.prototype.every.call(b, isNaN, void 0) ? this.D = Number.MAX_VALUE : this.D = d - this.C;
                break a
            }
            void 0 !== b && -1 < b ? (this.D = Math.max(b, d + 1 - this.C), this.m = void 0) : this.D = Number.MAX_VALUE
        }
        if (!e && this.m && "g" in this.m) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c)
            for (e = g && !h ? jb : ib, b = 0; b < c.length; b++) g = c[b], (h = D(this, g)) ? Array.isArray(h) && e(h) : F(this, g, sb, !1, !0)
    };
    N.prototype.toJSON = function() {
        var a = this.i;
        return ob ? a : wb(a, xb, yb)
    };
    N.prototype.la = mb;

    function Pb(a, b) {
        return ub(b)
    }
    var Ob;
    var Qb = void 0;

    function Rb() {
        var a = !O(Sb).g,
            b = Qb;
        Qb = void 0;
        if (!a) {
            if (b) throw Error(b());
            throw Error(String(a));
        }
    };
    var Vb = function(a, b) {
        this.h = a === Tb && b || "";
        this.j = Ub
    };
    Vb.prototype.H = !0;
    Vb.prototype.g = function() {
        return this.h
    };
    var Wb = function(a) {
            return a instanceof Vb && a.constructor === Vb && a.j === Ub ? a.h : "type_error:Const"
        },
        P = function(a) {
            return new Vb(Tb, a)
        },
        Ub = {},
        Tb = {};
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function Xb(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    var Yb = {
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
    var Q = function(a, b) {
        this.h = b === Zb ? a : ""
    };
    Q.prototype.toString = function() {
        return this.h + ""
    };
    Q.prototype.H = !0;
    Q.prototype.g = function() {
        return this.h.toString()
    };
    var cc = function(a, b) {
            a = $b.exec(ac(a).toString());
            var c = a[3] || "";
            return new Q(a[1] + bc("?", a[2] || "", b) + bc("#", c), Zb)
        },
        ac = function(a) {
            return a instanceof Q && a.constructor === Q ? a.h : "type_error:TrustedResourceUrl"
        },
        $b = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        dc = function(a) {
            for (var b = "", c = 0; c < a.length; c++) b += Wb(a[c]);
            return new Q(b, Zb)
        },
        Zb = {},
        bc = function(a, b, c) {
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
    var R = function(a, b) {
        this.h = b === ec ? a : ""
    };
    R.prototype.toString = function() {
        return this.h.toString()
    };
    R.prototype.H = !0;
    R.prototype.g = function() {
        return this.h.toString()
    };
    var fc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        gc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        ec = {},
        hc = new R("about:invalid#zClosurez", ec);
    var ic = {},
        jc = function(a, b) {
            this.h = b === ic ? a : "";
            this.H = !0
        };
    jc.prototype.g = function() {
        return this.h.toString()
    };
    jc.prototype.toString = function() {
        return this.h.toString()
    };
    var kc = function(a) {
            return a instanceof jc && a.constructor === jc ? a.h : "type_error:SafeHtml"
        },
        lc = function(a) {
            return a instanceof jc ? a : new jc(La("object" == typeof a && a.H ? a.g() : String(a)), ic)
        },
        pc = function(a, b) {
            var c = {
                    src: a
                },
                d = {};
            a = {};
            for (var e in c) Object.prototype.hasOwnProperty.call(c, e) && (a[e] = c[e]);
            for (var f in d) Object.prototype.hasOwnProperty.call(d, f) && (a[f] = d[f]);
            if (b)
                for (var g in b)
                    if (Object.prototype.hasOwnProperty.call(b, g)) {
                        e = g.toLowerCase();
                        if (e in c) throw Error("");
                        e in d && delete a[e];
                        a[g] = b[g]
                    }
            var h;
            b = "";
            if (a)
                for (k in a)
                    if (Object.prototype.hasOwnProperty.call(a, k)) {
                        if (!mc.test(k)) throw Error("");
                        c = a[k];
                        if (null != c) {
                            g = k;
                            if (c instanceof Vb) c = Wb(c);
                            else {
                                if ("style" == g.toLowerCase()) throw Error("");
                                if (/^on/i.test(g)) throw Error("");
                                if (g.toLowerCase() in nc)
                                    if (c instanceof Q) c = ac(c).toString();
                                    else if (c instanceof R) c = c instanceof R && c.constructor === R ? c.h : "type_error:SafeUrl";
                                else if ("string" === typeof c) c instanceof R || (c = "object" == typeof c && c.H ? c.g() : String(c), gc.test(c) ? c = new R(c, ec) : (c = String(c), c = c.replace(/(%0A|%0D)/g, ""), c = c.match(fc) ? new R(c, ec) : null)), c = (c || hc).g();
                                else throw Error("");
                            }
                            c.H && (c = c.g());
                            g = g + '="' + La(String(c)) + '"';
                            b += " " + g
                        }
                    }
            var k = "<script" + b;
            null == h ? h = [] : Array.isArray(h) || (h = [h]);
            !0 === Yb.script ? k += ">" : (h = oc(h), k += ">" + kc(h).toString() + "\x3c/script>");
            return new jc(k, ic)
        },
        rc = function(a) {
            var b = lc(qc),
                c = [],
                d = function(e) {
                    Array.isArray(e) ? e.forEach(d) : (e = lc(e), c.push(kc(e).toString()))
                };
            a.forEach(d);
            return new jc(c.join(kc(b).toString()), ic)
        },
        oc = function(a) {
            return rc(Array.prototype.slice.call(arguments))
        },
        mc = /^[a-zA-Z0-9-]+$/,
        nc = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        qc = new jc(x.trustedTypes && x.trustedTypes.emptyHTML || "", ic);

    function sc(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function tc(a, b) {
        a.write(kc(b))
    };
    var uc = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var vc = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    var xc = function() {
            a: {
                var a = x.document;
                if (a.querySelector && (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && wc.test(a)) break a;a = ""
            }
            return a
        },
        wc = /^[\w+/_-]+[=]{0,2}$/;
    var yc = function() {
        return Pa("iPad") || Pa("Android") && !Pa("Mobile") || Pa("Silk")
    };
    var zc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Ac = function(a) {
            return a ? decodeURI(a) : a
        },
        Bc = /#|$/,
        Cc = function(a, b) {
            var c = a.search(Bc);
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
    var Dc = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        Wa(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        Ec = function(a) {
            var b = void 0 === b ? !1 : b;
            var c = void 0 === c ? x : c;
            for (var d = 0; c && 40 > d++ && (!b && !Dc(c) || !a(c));) a: {
                try {
                    var e = c.parent;
                    if (e && e != c) {
                        c = e;
                        break a
                    }
                } catch (f) {}
                c = null
            }
        },
        Fc = function(a) {
            var b = a;
            Ec(function(c) {
                b = c;
                return !1
            });
            return b
        },
        Jc = function(a, b) {
            if (!Gc() && !Hc()) {
                var c = Math.random();
                if (c < b) return c = Ic(), a[Math.floor(c * a.length)]
            }
            return null
        },
        Ic = function() {
            if (!p.globalThis.crypto) return Math.random();
            try {
                var a = new Uint32Array(1);
                p.globalThis.crypto.getRandomValues(a);
                return a[0] / 65536 / 65536
            } catch (b) {
                return Math.random()
            }
        },
        Kc = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        Lc = function(a) {
            var b = a.length;
            if (0 == b) return 0;
            for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return 0 < c ? c : 4294967296 + c
        },
        Hc = uc(function() {
            return Array.prototype.some.call(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Mc, void 0) || 1E-4 > Math.random()
        }),
        Gc = uc(function() {
            return Mc("MSIE")
        }),
        Mc = function(a) {
            return -1 != Oa().indexOf(a)
        },
        Nc = /^(-?[0-9.]{1,30})$/;

    function Oc(a) {
        if (!Nc.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }
    var Pc = uc(function() {
            return !yc() && (Pa("iPod") || Pa("iPhone") || Pa("Android") || Pa("IEMobile")) ? 2 : yc() ? 1 : 0
        }),
        Qc = function(a) {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * Math.pow(2, 52)),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        Rc = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function Sc(a) {
        var b = va.apply(1, arguments);
        if (0 === b.length) return new Q(a[0], Zb);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return new Q(c.join(""), Zb)
    };
    var Tc = {
        Ja: 0,
        Ia: 1,
        Fa: 2,
        Aa: 3,
        Ga: 4,
        Ba: 5,
        Ha: 6,
        Da: 7,
        Ea: 8,
        za: 9,
        Ca: 10
    };
    var Uc = {
        La: 0,
        Ma: 1,
        Ka: 2
    };
    var Vc = "a".charCodeAt(),
        Wc = Xb(Tc),
        Xc = Xb(Uc);
    var Yc = function(a) {
            if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.h = a;
            this.g = 0
        },
        ad = function(a) {
            var b = S(a, 16);
            return !0 === !!S(a, 1) ? (a = Zc(a), a.forEach(function(c) {
                if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
            }), a) : $c(a, b)
        },
        Zc = function(a) {
            for (var b = S(a, 12), c = []; b--;) {
                var d = !0 === !!S(a, 1),
                    e = S(a, 16);
                if (d)
                    for (d = S(a, 16); e <= d; e++) c.push(e);
                else c.push(e)
            }
            c.sort(function(f, g) {
                return f - g
            });
            return c
        },
        $c = function(a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (S(a, 1)) {
                    var f = e + 1;
                    if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f)
                }
            return d
        },
        S = function(a, b) {
            if (a.g + b > a.h.length) throw Error("Requested length " + b + " is past end of string.");
            var c = a.h.substring(a.g, a.g + b);
            a.g += b;
            return parseInt(c, 2)
        };
    var cd = function(a, b) {
            try {
                var c = bb(a.split(".")[0]).map(function(e) {
                        return (m = e.toString(2), q(m, "padStart")).call(m, 8, "0")
                    }).join(""),
                    d = new Yc(c);
                c = {};
                c.tcString = a;
                c.gdprApplies = !0;
                d.g += 78;
                c.cmpId = S(d, 12);
                c.cmpVersion = S(d, 12);
                d.g += 30;
                c.tcfPolicyVersion = S(d, 6);
                c.isServiceSpecific = !!S(d, 1);
                c.useNonStandardStacks = !!S(d, 1);
                c.specialFeatureOptins = bd($c(d, 12, Xc), Xc);
                c.purpose = {
                    consents: bd($c(d, 24, Wc), Wc),
                    legitimateInterests: bd($c(d, 24, Wc), Wc)
                };
                c.purposeOneTreatment = !!S(d, 1);
                c.publisherCC = String.fromCharCode(Vc + S(d, 6)) + String.fromCharCode(Vc + S(d, 6));
                c.vendor = {
                    consents: bd(ad(d), b),
                    legitimateInterests: bd(ad(d), b)
                };
                return c
            } catch (e) {
                return null
            }
        },
        bd = function(a, b) {
            var c = {};
            if (Array.isArray(b) && 0 !== b.length) {
                b = t(b);
                for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
            } else
                for (a = t(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
            delete c[0];
            return c
        };

    function dd(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.oa] = b.message.toJSON(), c)]
        })])
    };
    var ed = function(a, b) {
        if (p.globalThis.fetch) p.globalThis.fetch(a, {
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
    var gd = function(a) {
        N.call(this, a, -1, fd)
    };
    v(gd, N);
    var hd = function(a, b) {
            return Hb(a, 1, b)
        },
        id = function(a, b) {
            return Jb(a, 2, b)
        },
        jd = function(a, b) {
            return Bb(a, 4, b)
        },
        kd = function(a, b) {
            return Jb(a, 5, b)
        },
        ld = function(a, b) {
            return H(a, 6, b, 0)
        },
        md = function(a) {
            N.call(this, a)
        };
    v(md, N);
    md.prototype.F = function() {
        return G(this, 1)
    };
    var nd = function(a, b) {
            return H(a, 1, b, 0)
        },
        od = function(a, b) {
            return H(a, 2, b, 0)
        },
        pd = function(a) {
            N.call(this, a)
        };
    v(pd, N);
    var fd = [2, 4, 5],
        qd = [1, 2];
    var sd = function(a) {
        N.call(this, a, -1, rd)
    };
    v(sd, N);
    var ud = function(a) {
        N.call(this, a, -1, td)
    };
    v(ud, N);
    var rd = [2, 3],
        td = [5],
        vd = [1, 2, 3, 4];
    var wd = function(a) {
        N.call(this, a)
    };
    v(wd, N);
    wd.prototype.getTagSessionCorrelator = function() {
        return M(D(this, 2), 0)
    };
    var yd = function(a) {
            var b = new wd;
            return Ib(b, 4, xd, a)
        },
        xd = [4, 5, 7];
    var Ad = function(a) {
        N.call(this, a, -1, zd)
    };
    v(Ad, N);
    var zd = [3];
    var Cd = function(a) {
        N.call(this, a, -1, Bd)
    };
    v(Cd, N);
    var Bd = [4];
    var Ed = function(a) {
        N.call(this, a, -1, Dd)
    };
    v(Ed, N);
    Ed.prototype.getTagSessionCorrelator = function() {
        return M(D(this, 1), 0)
    };
    var Dd = [2];
    var Fd = function(a) {
        N.call(this, a)
    };
    v(Fd, N);
    var Gd = [4];

    function Hd(a) {
        a.na.apply(a, u(va.apply(1, arguments).map(function(b) {
            return {
                oa: 2,
                message: b
            }
        })))
    }

    function Id(a) {
        a.na.apply(a, u(va.apply(1, arguments).map(function(b) {
            return {
                oa: 4,
                message: b
            }
        })))
    };
    var Jd = function(a, b, c, d) {
            this.o = a;
            this.l = b;
            this.A = c;
            this.j = d;
            this.g = [];
            this.h = null
        },
        Kd = function(a) {
            if (a.g.length) {
                var b = dd(a.g);
                a.l(a.o + "?e=1", b);
                a.g = [];
                a.h = null
            }
        };
    Jd.prototype.na = function() {
        var a = this;
        this.g.push.apply(this.g, u(va.apply(0, arguments)));
        this.g.length >= this.j ? (null !== this.h && clearTimeout(this.h), Kd(this)) : null === this.h && (this.h = setTimeout(function() {
            Kd(a)
        }, this.A))
    };
    var Ld = function(a, b) {
        Jd.call(this, "https://pagead2.googlesyndication.com/pagead/ping", ed, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b)
    };
    v(Ld, Jd);
    var Md = function(a, b) {
            this.g = a;
            this.defaultValue = void 0 === b ? !1 : b
        },
        Nd = function(a) {
            this.g = a;
            this.defaultValue = 0
        };
    var Od = new Md(456267131),
        Pd = new Md(427549339),
        Qd = new Nd(428094087),
        Rd = new Md(449296995, !0),
        Sd = new Nd(24),
        Td = new function(a, b) {
            b = void 0 === b ? [] : b;
            this.g = a;
            this.defaultValue = b
        }(1934, ["A+cA2PUOfIOKAdSDJOW5CP9ZlxONy1yu+hqAq72zUtKw4rLdihqRp6Nui/jUyCyegr+BUtH+C+Elv0ufn05yBQEAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A+zsdH3aNZT/bkjT8U/o5ACzyaeNYzTvtoVmwf/KOilfv39pxY2AIsOwhQJv+YnXp98i3TqrQibIVtMWs5UHjgoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "AxceVEhIegcDEHqLXFQ2+vPKqzCppoJYsRCZ/BdfVnbM/sUUF2BXV8lwNosyYjvoxnTh2FC8cOlAnA5uULr/zAUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]),
        Ud = new Md(203);
    var Vd = function(a) {
        this.key = a;
        this.defaultValue = !1;
        this.valueType = "boolean"
    };
    var Wd = function() {
            this.g = {}
        },
        Zd = function(a) {
            Xd || (Xd = new Yd);
            var b = Xd.g[a.key];
            if ("proto" === a.valueType) {
                try {
                    var c = JSON.parse(b);
                    if (Array.isArray(c)) return c
                } catch (d) {}
                return a.defaultValue
            }
            return typeof b === typeof a.defaultValue ? b : a.defaultValue
        };
    var $d = function(a) {
        N.call(this, a)
    };
    v($d, N);
    var ae = function(a) {
        N.call(this, a)
    };
    v(ae, N);
    var be = function(a) {
        N.call(this, a)
    };
    v(be, N);
    var ce = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 24, 25, 26];
    var de = function() {
        this.j = this.j;
        this.l = this.l
    };
    de.prototype.j = !1;
    de.prototype.S = function() {
        if (this.l)
            for (; this.l.length;) this.l.shift()()
    };
    var ee = function() {};
    var ge = function(a) {
        N.call(this, a, -1, fe)
    };
    v(ge, N);
    var he = function(a) {
        N.call(this, a)
    };
    v(he, N);
    var ie = function(a) {
        N.call(this, a)
    };
    v(ie, N);
    var fe = [7];
    var je = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    je.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Qa;
            d = c.Ra || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.va
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    je.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Da(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    je.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    je.prototype.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Da(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            va: 0,
            path: void 0,
            domain: void 0
        })
    };
    var ke = new Vd("45368529"),
        le = new Vd("45369554");
    var Yd = function() {
            this.g = {};
            var a = x.__fcexpdef || "";
            try {
                var b = JSON.parse(a)[0];
                a = "";
                for (var c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                this.g = JSON.parse(a)
            } catch (d) {}
        },
        Xd;
    v(Yd, Wd);

    function me(a) {
        return (a = ne(a)) ? J(a, he, 4) : null
    }

    function ne(a) {
        if (a = (new je(a)).get("FCCDCF", ""))
            if (Zd(ke))
                if (q(a, "startsWith").call(a, "%")) try {
                    var b = decodeURIComponent(a)
                } catch (g) {
                    oe(1), b = null
                } else b = a;
                else b = a;
        else b = null;
        try {
            if (b)
                if (null == b || "" == b) var c = new ge;
                else {
                    var d = JSON.parse(b);
                    if (!Array.isArray(d)) throw Error(void 0);
                    var e = kb(d);
                    Ob = e;
                    var f = new ge(e);
                    Ob = null;
                    c = f
                }
            else c = null;
            return c
        } catch (g) {
            return oe(2), null
        }
    }

    function oe(a) {
        new ee;
        var b = new ae;
        a = F(b, 7, a);
        b = new $d;
        a = Hb(b, 1, a);
        b = new be;
        Ib(b, 22, ce, a);
        Zd(le)
    };
    Xb(Tc).map(function(a) {
        return Number(a)
    });
    Xb(Uc).map(function(a) {
        return Number(a)
    });
    var pe = function(a) {
            this.g = a;
            this.h = null
        },
        re = function(a) {
            a.__tcfapiPostMessageReady || qe(new pe(a))
        },
        qe = function(a) {
            a.h = function(b) {
                var c = "string" == typeof b.data;
                try {
                    var d = c ? JSON.parse(b.data) : b.data
                } catch (f) {
                    return
                }
                var e = d.__tcfapiCall;
                !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, function(f, g) {
                    var h = {};
                    h.__tcfapiReturn = "removeEventListener" === e.command ? {
                        success: f,
                        callId: e.callId
                    } : {
                        returnValue: f,
                        success: g,
                        callId: e.callId
                    };
                    f = c ? JSON.stringify(h) : h;
                    b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                    return f
                }, e.parameter)
            };
            a.g.addEventListener("message", a.h);
            a.g.__tcfapiPostMessageReady = !0
        };
    var se = function(a, b) {
        var c = a.document,
            d = function() {
                if (!a.frames[b])
                    if (c.body) {
                        var e = Rc("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var te = function(a) {
            this.g = a;
            this.h = a.document;
            this.o = (a = (a = ne(this.h)) ? J(a, ie, 5) || null : null) ? D(a, 2) : null;
            this.j = (a = me(this.h)) && null != D(a, 1) ? D(a, 1) : null;
            this.l = (a = me(this.h)) && null != D(a, 2) ? D(a, 2) : null
        },
        we = function(a) {
            a.__uspapi || a.frames.__uspapiLocator || (a = new te(a), ue(a), ve(a))
        },
        ue = function(a) {
            !a.o || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", se(a.g, "__uspapiLocator"), Ca("__uspapi", function() {
                return a.G.apply(a, u(va.apply(0, arguments)))
            }))
        };
    te.prototype.G = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.o
        }, !0)
    };
    var ve = function(a) {
        !a.j || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc", se(a.g, "__tcfapiLocator"), a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [], Ca("__tcfapi", function() {
            return a.A.apply(a, u(va.apply(0, arguments)))
        }), re(a.g))
    };
    te.prototype.A = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && 2 !== b) c(null, !1);
            else switch (b = this.g.__tcfapiEventListeners, a) {
                case "getTCData":
                    !d || Array.isArray(d) && d.every(function(e) {
                        return "number" === typeof e
                    }) ? c(xe(this, d, null), !0) : c(null, !1);
                    break;
                case "ping":
                    c({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    a = b.push(c);
                    c(xe(this, null, a - 1), !0);
                    break;
                case "removeEventListener":
                    b[d] ? (b[d] = null, c(!0)) : c(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    c(null, !1)
            }
    };
    var xe = function(a, b, c) {
        if (!a.j) return null;
        b = cd(a.j, b);
        b.addtlConsent = null != a.l ? a.l : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    };
    var ye = function(a) {
        return "string" === typeof a
    };
    var ze = function(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Ae = null,
        Be = function() {
            if (null === Ae) {
                Ae = "";
                try {
                    var a = "";
                    try {
                        a = x.top.location.hash
                    } catch (c) {
                        a = x.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        Ae = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return Ae
        };
    var De = function(a) {
        N.call(this, a, -1, Ce)
    };
    v(De, N);
    var Ce = [2, 8],
        Ee = [3, 4, 5],
        Fe = [6, 7];
    var Ge;
    Ge = {
        Na: 0,
        pa: 3,
        qa: 4,
        ra: 5
    };
    var He = Ge.pa,
        T = Ge.qa,
        Ie = Ge.ra,
        Je = function(a) {
            return null != a ? !a : a
        },
        Ke = function(a, b) {
            for (var c = !1, d = 0; d < a.length; d++) {
                var e = a[d]();
                if (e === b) return e;
                null == e && (c = !0)
            }
            if (!c) return !b
        },
        Me = function(a, b) {
            var c = K(a, De, 2);
            if (!c.length) return Le(a, b);
            a = G(a, 1);
            if (1 === a) return Je(Me(c[0], b));
            c = Sa(c, function(d) {
                return function() {
                    return Me(d, b)
                }
            });
            switch (a) {
                case 2:
                    return Ke(c, !1);
                case 3:
                    return Ke(c, !0)
            }
        },
        Le = function(a, b) {
            var c = Db(a, Ee);
            a: {
                switch (c) {
                    case He:
                        var d = G(a, I(a, Ee, 3));
                        break a;
                    case T:
                        d = G(a, I(a, Ee, 4));
                        break a;
                    case Ie:
                        d = G(a, I(a, Ee, 5));
                        break a
                }
                d = void 0
            }
            if (d && (b = (b = b[c]) && b[d])) {
                try {
                    var e = b.apply(null, u(Ab(a, 8)))
                } catch (f) {
                    return
                }
                b = G(a, 1);
                if (4 === b) return !!e;
                d = null != e;
                if (5 === b) return d;
                if (12 === b) a = Kb(a, I(a, Fe, 7));
                else a: {
                    switch (c) {
                        case T:
                            a = Mb(a, I(a, Fe, 6));
                            break a;
                        case Ie:
                            a = Kb(a, I(a, Fe, 7));
                            break a
                    }
                    a = void 0
                }
                if (null != a) {
                    if (6 === b) return e === a;
                    if (9 === b) return null != e && 0 === Na(String(e), a);
                    if (d) switch (b) {
                        case 7:
                            return e < a;
                        case 8:
                            return e > a;
                        case 12:
                            return ye(a) && ye(e) && (new RegExp(a)).test(e);
                        case 10:
                            return null != e && -1 === Na(String(e), a);
                        case 11:
                            return null != e && 1 === Na(String(e), a)
                    }
                }
            }
        },
        Ne = function(a, b) {
            return !a || !(!b || !Me(a, b))
        };
    var Pe = function(a) {
        N.call(this, a, -1, Oe)
    };
    v(Pe, N);
    var Oe = [4];
    var Qe = function(a) {
        N.call(this, a)
    };
    v(Qe, N);
    var Se = function(a) {
        N.call(this, a, -1, Re)
    };
    v(Se, N);
    var Re = [5],
        Te = [1, 2, 3, 6, 7];
    var Ue = function(a, b, c) {
            var d = void 0 === d ? new Ld(b) : d;
            this.h = a;
            this.o = c;
            this.j = d;
            this.g = [];
            this.l = 0 < this.h && Ic() < 1 / this.h
        },
        We = function(a, b, c, d, e, f) {
            var g = od(nd(new md, b), c);
            b = ld(id(hd(kd(jd(new gd, d), e), g), a.g), f);
            b = yd(b);
            a.l && Id(a.j, Ve(a, b));
            if (1 === f || 3 === f || 4 === f && !a.g.some(function(h) {
                    return h.F() === g.F() && G(h, 2) === c
                })) a.g.push(g), 100 < a.g.length && a.g.shift()
        },
        Xe = function(a, b, c, d) {
            if (a.o) {
                var e = new sd;
                b = Jb(e, 2, b);
                c = Jb(b, 3, c);
                d && H(c, 1, d, 0);
                d = new wd;
                d = Ib(d, 7, xd, c);
                a.l && Id(a.j, Ve(a, d))
            }
        },
        Ve = function(a, b) {
            b = H(b, 1, Date.now(), 0);
            var c = Qc(window);
            b = H(b, 2, c, 0);
            return H(b, 6, a.h, 0)
        };
    var O = function(a) {
        var b = "O";
        if (a.O && a.hasOwnProperty(b)) return a.O;
        b = new a;
        return a.O = b
    };
    var Ye = function() {
        var a = {};
        this.g = (a[He] = {}, a[T] = {}, a[Ie] = {}, a)
    };
    var Ze = /^true$/.test("false"),
        $e = function(a, b) {
            switch (b) {
                case 1:
                    return G(a, I(a, Te, 1));
                case 2:
                    return G(a, I(a, Te, 2));
                case 3:
                    return G(a, I(a, Te, 3));
                case 6:
                    return G(a, I(a, Te, 6));
                default:
                    return null
            }
        },
        af = function(a, b) {
            if (!a) return null;
            switch (b) {
                case 1:
                    return Lb(a, 1);
                case 7:
                    return Kb(a, 3);
                case 2:
                    return Mb(a, 2);
                case 3:
                    return Kb(a, 3);
                case 6:
                    return Ab(a, 4);
                default:
                    return null
            }
        },
        bf = uc(function() {
            if (!Ze) return {};
            try {
                var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
                if (a) return JSON.parse(a)
            } catch (b) {}
            return {}
        }),
        ff = function(a, b, c, d) {
            var e = d = void 0 === d ? 0 : d,
                f, g;
            O(cf).j[e] = null != (g = null == (f = O(cf).j[e]) ? void 0 : f.add(b)) ? g : (new p.Set).add(b);
            e = bf();
            if (null != e[b]) return e[b];
            b = df(d)[b];
            if (!b) return c;
            b = new Se(b);
            b = ef(b);
            a = af(b, a);
            return null != a ? a : c
        },
        ef = function(a) {
            var b = O(Ye).g;
            if (b) {
                var c = Ua(K(a, Qe, 5), function(d) {
                    return Ne(J(d, De, 1), b)
                });
                if (c) return J(c, Pe, 2)
            }
            return J(a, Pe, 4)
        },
        cf = function() {
            this.h = {};
            this.l = [];
            this.j = {};
            this.g = new p.Map
        },
        gf = function(a, b, c) {
            return !!ff(1, a, void 0 === b ? !1 : b, c)
        },
        hf = function(a, b, c) {
            b = void 0 === b ? 0 : b;
            a = Number(ff(2, a, b, c));
            return isNaN(a) ? b : a
        },
        jf = function(a, b, c) {
            return ff(3, a, void 0 === b ? "" : b, c)
        },
        kf = function(a, b, c) {
            b = void 0 === b ? [] : b;
            return ff(6, a, b, c)
        },
        df = function(a) {
            return O(cf).h[a] || (O(cf).h[a] = {})
        },
        lf = function(a, b) {
            var c = df(b);
            Kc(a, function(d, e) {
                return c[e] = d
            })
        },
        mf = function(a, b, c, d, e) {
            e = void 0 === e ? !1 : e;
            var f = [],
                g = [];
            Qa(b, function(h) {
                var k = df(h);
                Qa(a, function(l) {
                    var n = Db(l, Te),
                        w = $e(l, n);
                    if (w) {
                        var C, L, qa;
                        var da = null != (qa = null == (C = O(cf).g.get(h)) ? void 0 : null == (L = C.get(w)) ? void 0 : L.slice(0)) ? qa : [];
                        a: {
                            C = new ud;
                            switch (n) {
                                case 1:
                                    Eb(C, 1, vd, w);
                                    break;
                                case 2:
                                    Eb(C, 2, vd, w);
                                    break;
                                case 3:
                                    Eb(C, 3, vd, w);
                                    break;
                                case 6:
                                    Eb(C, 4, vd, w);
                                    break;
                                default:
                                    n = void 0;
                                    break a
                            }
                            Bb(C, 5, da);n = C
                        }
                        if (da = n) {
                            var Y;
                            da = !(null == (Y = O(cf).j[h]) || !Y.has(w))
                        }
                        da && f.push(n);
                        if (Y = n) {
                            var na;
                            Y = !(null == (na = O(cf).g.get(h)) || !na.has(w))
                        }
                        Y && g.push(n);
                        e || (na = O(cf), na.g.has(h) || na.g.set(h, new p.Map), na.g.get(h).has(w) || na.g.get(h).set(w, []), d && na.g.get(h).get(w).push(d));
                        k[w] = l.toJSON()
                    }
                })
            });
            (f.length || g.length) && Xe(c, f, g, null != d ? d : void 0)
        },
        nf = function(a, b) {
            var c = df(b);
            Qa(a, function(d) {
                var e = new Se(d),
                    f = Db(e, Te);
                (e = $e(e, f)) && (c[e] || (c[e] = d))
            })
        },
        of = function() {
            return Sa(q(Object, "keys").call(Object, O(cf).h), function(a) {
                return Number(a)
            })
        },
        pf = function(a) {
            Va(O(cf).l, a) || lf(df(4), a)
        };
    var U = function(a) {
            this.methodName = a
        },
        qf = new U(1),
        rf = new U(16),
        sf = new U(15),
        tf = new U(2),
        uf = new U(3),
        vf = new U(4),
        wf = new U(5),
        xf = new U(6),
        yf = new U(7),
        zf = new U(8),
        Af = new U(9),
        Bf = new U(10),
        Cf = new U(11),
        Df = new U(12),
        Ef = new U(13),
        Ff = new U(14),
        V = function(a, b, c) {
            c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
                value: b
            })
        },
        W = function(a, b, c) {
            return b[a.methodName] || c || function() {}
        },
        Gf = function(a) {
            V(wf, gf, a);
            V(xf, hf, a);
            V(yf, jf, a);
            V(zf, kf, a);
            V(Ef, nf, a);
            V(sf, pf, a)
        },
        Hf = function(a) {
            V(vf, function(b) {
                O(Ye).g = b
            }, a);
            V(Af, function(b, c) {
                var d = O(Ye);
                d.g[He][b] || (d.g[He][b] = c)
            }, a);
            V(Bf, function(b, c) {
                var d = O(Ye);
                d.g[T][b] || (d.g[T][b] = c)
            }, a);
            V(Cf, function(b, c) {
                var d = O(Ye);
                d.g[Ie][b] || (d.g[Ie][b] = c)
            }, a);
            V(Ff, function(b) {
                for (var c = O(Ye), d = t([He, T, Ie]), e = d.next(); !e.done; e = d.next()) e = e.value, q(Object, "assign").call(Object, c.g[e], b[e])
            }, a)
        },
        If = function(a) {
            a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
                value: !0
            })
        };
    var Jf = function() {
            this.h = function() {};
            this.g = function() {
                return []
            }
        },
        Kf = function(a, b, c) {
            a.h = function(d) {
                W(tf, b, function() {
                    return []
                })(d, c)
            };
            a.g = function() {
                return W(uf, b, function() {
                    return []
                })(c)
            }
        };

    function Lf(a, b) {
        b = void 0 === b ? window.document : b;
        if (a.length && b.head) {
            a = t(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = Rc("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    };
    var Mf = function(a, b) {
            try {
                var c = a.split(".");
                a = x;
                for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
                var f = a;
                if (typeof f === b) return f
            } catch (g) {}
        },
        Nf = function() {
            var a = {};
            this[He] = (a[8] = function(b) {
                try {
                    return null != ya(b)
                } catch (c) {}
            }, a[9] = function(b) {
                try {
                    var c = ya(b)
                } catch (d) {
                    return
                }
                if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
                return b
            }, a[10] = function() {
                return window == window.top
            }, a[6] = function(b) {
                return Va(O(Jf).g(), parseInt(b, 10))
            }, a[27] = function(b) {
                b = Mf(b, "boolean");
                return void 0 !== b ? b : void 0
            }, a[60] = function(b) {
                try {
                    return !!x.document.querySelector(b)
                } catch (c) {}
            }, a[69] = function(b) {
                var c = x.document;
                c = void 0 === c ? document : c;
                var d;
                return !(null == (d = c.featurePolicy) || !(m = d.features(), q(m, "includes")).call(m, b))
            }, a[70] = function(b) {
                var c = x.document;
                c = void 0 === c ? document : c;
                var d;
                return !(null == (d = c.featurePolicy) || !(m = d.allowedFeatures(), q(m, "includes")).call(m, b))
            }, a);
            a = {};
            this[T] = (a[3] = function() {
                return Pc()
            }, a[6] = function(b) {
                b = Mf(b, "number");
                return void 0 !== b ? b : void 0
            }, a[11] = function(b) {
                b = void 0 === b ? "" : b;
                var c = x;
                b = void 0 === b ? "" : b;
                c = void 0 === c ? window : c;
                b = (c = Ac(c.location.href.match(zc)[3] || null)) ? Lc(c + b) : null;
                return null == b ? void 0 : b % 1E3
            }, a);
            a = {};
            this[Ie] = (a[2] = function() {
                return window.location.href
            }, a[3] = function() {
                try {
                    return window.top.location.hash
                } catch (b) {
                    return ""
                }
            }, a[4] = function(b) {
                b = Mf(b, "string");
                return void 0 !== b ? b : void 0
            }, a[10] = function() {
                try {
                    var b = x.document;
                    return b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""
                } catch (c) {
                    return ""
                }
            }, a[11] = function() {
                try {
                    var b, c, d, e, f;
                    return null != (f = null == (d = null == (b = ya("google_tag_data")) ? void 0 : null == (c = b.uach) ? void 0 : c.fullVersionList) ? void 0 : null == (e = q(d, "find").call(d, function(g) {
                        return "Google Chrome" === g.brand
                    })) ? void 0 : e.version) ? f : ""
                } catch (g) {
                    return ""
                }
            }, a)
        };
    var Of = function() {
        var a = void 0 === a ? x : a;
        return a.ggeac || (a.ggeac = {})
    };
    var Qf = function(a) {
        N.call(this, a, -1, Pf)
    };
    v(Qf, N);
    Qf.prototype.getId = function() {
        return M(D(this, 1), 0)
    };
    Qf.prototype.F = function() {
        return G(this, 7)
    };
    var Pf = [2];
    var Sf = function(a) {
        N.call(this, a, -1, Rf)
    };
    v(Sf, N);
    Sf.prototype.F = function() {
        return G(this, 5)
    };
    var Rf = [2];
    var Uf = function(a) {
        N.call(this, a, -1, Tf)
    };
    v(Uf, N);
    var Wf = function(a) {
        N.call(this, a, -1, Vf)
    };
    v(Wf, N);
    Wf.prototype.F = function() {
        return G(this, 1)
    };
    var Xf = function(a) {
        N.call(this, a)
    };
    v(Xf, N);
    var Tf = [1, 4, 2, 3],
        Vf = [2];
    var Yf = [12, 13, 20],
        Zf = function() {},
        $f = function(a, b, c, d, e) {
            e = void 0 === e ? {} : e;
            var f = void 0 === e.ga ? !1 : e.ga,
                g = void 0 === e.wa ? {} : e.wa;
            e = void 0 === e.ma ? [] : e.ma;
            a.l = b;
            a.A = {};
            a.G = f;
            a.o = g;
            b = {};
            a.h = (b[c] = [], b[4] = [], b);
            a.j = {};
            (c = Be()) && Qa(c.split(",") || [], function(h) {
                (h = parseInt(h, 10)) && (a.j[h] = !0)
            });
            Qa(e, function(h) {
                a.j[h] = !0
            });
            a.g = d;
            return a
        },
        dg = function(a, b, c) {
            var d = [],
                e = ag(a.l, b),
                f;
            if (f = 9 !== b) a.A[b] ? f = !0 : (a.A[b] = !0, f = !1);
            if (f) return We(a.g, b, c, d, [], 4), d;
            if (!e.length) return We(a.g, b, c, d, [], 3), d;
            var g = Va(Yf, b),
                h = [];
            Qa(e, function(k) {
                var l = new pd;
                if (k = bg(a, k, c, l)) 0 !== Db(l, qd) && h.push(l), l = k.getId(), d.push(l), cg(a, l, g ? 4 : c), (k = K(k, Se, 2)) && (g ? mf(k, of (), a.g, l) : mf(k, [c], a.g, l))
            });
            We(a.g, b, c, d, h, 1);
            return d
        },
        cg = function(a, b, c) {
            a.h[c] || (a.h[c] = []);
            a = a.h[c];
            Va(a, b) || a.push(b)
        },
        eg = function(a, b) {
            a.l.push.apply(a.l, u(Ra(Sa(b, function(c) {
                return new Wf(c)
            }), function(c) {
                return !Va(Yf, c.F())
            })))
        },
        bg = function(a, b, c, d) {
            var e = O(Ye).g;
            if (!Ne(J(b, De, 3), e)) return null;
            var f = K(b, Qf, 2),
                g = G(b, 6);
            if (g) {
                Eb(d, 1, qd, g);
                f = e[T];
                switch (c) {
                    case 2:
                        var h = f[8];
                        break;
                    case 1:
                        h = f[7]
                }
                c = void 0;
                if (h) try {
                    c = h(g), H(d, 3, c, 0)
                } catch (k) {}
                return (b = fg(b, c)) ? gg(a, [b], 1) : null
            }
            if (g = G(b, 10)) {
                Eb(d, 2, qd, g);
                h = null;
                switch (c) {
                    case 1:
                        h = e[T][9];
                        break;
                    case 2:
                        h = e[T][10];
                        break;
                    default:
                        return null
                }
                c = h ? h(String(g)) : void 0;
                if (void 0 === c && 1 === G(b, 11)) return null;
                void 0 !== c && H(d, 3, c, 0);
                return (b = fg(b, c)) ? gg(a, [b], 1) : null
            }
            d = e ? Ra(f, function(k) {
                return Ne(J(k, De, 3), e)
            }) : f;
            if (!d.length) return null;
            c = d.length * M(D(b, 1), 0);
            return (b = G(b, 4)) ? hg(a, b, c, d) : gg(a, d, c / 1E3)
        },
        hg = function(a, b, c, d) {
            var e = null != a.o[b] ? a.o[b] : 1E3;
            if (0 >= e) return null;
            d = gg(a, d, c / e);
            a.o[b] = d ? 0 : e - c;
            return d
        },
        gg = function(a, b, c) {
            var d = a.j,
                e = Ta(b, function(f) {
                    return !!d[f.getId()]
                });
            return e ? e : a.G ? null : Jc(b, c)
        },
        ig = function(a, b) {
            V(qf, function(c) {
                a.j[c] = !0
            }, b);
            V(tf, function(c, d) {
                return dg(a, c, d)
            }, b);
            V(uf, function(c) {
                return (a.h[c] || []).concat(a.h[4])
            }, b);
            V(Df, function(c) {
                return void eg(a, c)
            }, b);
            V(rf, function(c, d) {
                return void cg(a, c, d)
            }, b)
        },
        ag = function(a, b) {
            return (a = Ta(a, function(c) {
                return c.F() == b
            })) && K(a, Sf, 2) || []
        },
        fg = function(a, b) {
            var c = K(a, Qf, 2),
                d = c.length,
                e = M(D(a, 8), 0);
            a = d * M(D(a, 1), 0) - 1;
            b = void 0 !== b ? b : Math.floor(1E3 * Ic());
            d = (b - e) % d;
            if (b < e || b - e - d >= a) return null;
            c = c[d];
            e = O(Ye).g;
            return !c || e && !Ne(J(c, De, 3), e) ? null : c
        };
    var jg = function() {
            var a = {};
            this.h = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.g = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.o = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.j = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.l = function() {}
        },
        kg = function(a) {
            return O(jg).h(a.g, a.defaultValue)
        };
    var lg = function() {
            this.g = function() {}
        },
        mg = function(a) {
            O(lg).g(a)
        };
    var ng, og, pg, qg, rg, sg, vg = function(a, b) {
            var c = {
                    ga: tg(211),
                    ma: tg(226)
                },
                d = void 0,
                e = 2;
            d = void 0 === d ? Of() : d;
            e = void 0 === e ? 0 : e;
            var f = void 0 === f ? new Ue(null != (qg = null == (ng = J(a, Xf, 5)) ? void 0 : M(D(ng, 2), 0)) ? qg : 0, null != (rg = null == (og = J(a, Xf, 5)) ? void 0 : M(D(og, 4), 0)) ? rg : 0, null != (sg = null == (pg = J(a, Xf, 5)) ? void 0 : Lb(pg, 3)) ? sg : !1) : f;
            d.hasOwnProperty("init-done") ? (W(Df, d)(Sa(K(a, Wf, 2), function(g) {
                return g.toJSON()
            })), W(Ef, d)(Sa(K(a, Se, 1), function(g) {
                return g.toJSON()
            }), e), b && W(Ff, d)(b), ug(e, d)) : (ig($f(O(Zf), K(a, Wf, 2), e, f, c), d), Gf(d), Hf(d), If(d), ug(e, d), mf(K(a, Se, 1), [e], f, void 0, !0), Ze = Ze || !(!c || !c.Oa), mg(O(Nf)), b && mg(b))
        },
        ug = function(a, b) {
            var c = b = void 0 === b ? Of() : b;
            Kf(O(Jf), c, a);
            wg(b, a);
            a = b;
            O(lg).g = W(Ff, a);
            O(jg).l()
        },
        wg = function(a, b) {
            var c = O(jg);
            c.h = function(d, e) {
                return W(wf, a, function() {
                    return !1
                })(d, e, b)
            };
            c.g = function(d, e) {
                return W(xf, a, function() {
                    return 0
                })(d, e, b)
            };
            c.o = function(d, e) {
                return W(yf, a, function() {
                    return ""
                })(d, e, b)
            };
            c.j = function(d, e) {
                return W(zf, a, function() {
                    return []
                })(d, e, b)
            };
            c.l = function() {
                W(sf, a)(b)
            }
        };
    var xg = ja(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
        yg = function() {
            var a = void 0 === a ? "jserror" : a;
            var b = void 0 === b ? .01 : b;
            var c = void 0 === c ? Sc(xg) : c;
            this.j = a;
            this.h = b;
            this.g = c
        };

    function zg(a) {
        var b, c;
        return null != (c = (m = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }), q(m, "find")).call(m, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    var Ag = function(a) {
        a = void 0 === a ? x : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Bg(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = Rc("IMG", a.document);
        if (c) {
            var e = function() {
                if (c) {
                    var f = a.google_image_requests,
                        g = Array.prototype.indexOf.call(f, d, void 0);
                    0 <= g && Array.prototype.splice.call(f, g, 1)
                }
                d.removeEventListener && d.removeEventListener("load", e, !1);
                d.removeEventListener && d.removeEventListener("error", e, !1)
            };
            vc(d, "load", e);
            vc(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }
    var Dg = function(a) {
            var b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=gpt_inv_ver";
            Kc(a, function(d, e) {
                d && (c += "&" + e + "=" + encodeURIComponent(d))
            });
            Cg(c, b)
        },
        Cg = function(a, b) {
            var c = window;
            b = void 0 === b ? !1 : b;
            c.fetch ? c.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Bg(c, a, void 0 === b ? !1 : b)
        };
    var Eg = P("gpt/pubads_impl_"),
        Fg = P("pagead/managed/js/gpt/");
    var Gg = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        Hg = function(a, b) {
            var c = Ag(b);
            c && Gg({
                label: a,
                type: 9,
                value: c
            }, b)
        },
        Ig = function(a, b, c) {
            var d = !1;
            d = void 0 === d ? !1 : d;
            var e = window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var g = Ag(),
                    h = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && Gg(q(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: g,
                        duration: (Ag() || 0) - g,
                        type: h
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        },
        Jg = function(a, b) {
            return Ig(a, b, function(c, d) {
                var e = new yg;
                var f = void 0 === f ? e.h : f;
                var g = void 0 === g ? e.j : g;
                Math.random() > f || (d.error && d.meta && d.id || (d = new ze(d, {
                    context: c,
                    id: g
                })), x.google_js_errors = x.google_js_errors || [], x.google_js_errors.push(d), x.error_rep_loaded || (f = x.document, c = Rc("SCRIPT", f), c.src = ac(new Q(ac(e.g).toString(), Zb)), sc(c), (e = f.getElementsByTagName("script")[0]) && e.parentNode && e.parentNode.insertBefore(c, e), x.error_rep_loaded = !0))
            })
        };

    function X(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function Kg(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function Lg() {
        var a = new p.Set;
        var b = void 0 === b ? window : b;
        b = b.googletag;
        b = (null == b ? 0 : b.apiReady) ? b : void 0;
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = t(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function Mg(a) {
        a = a.id;
        return null != a && (Lg().has(a) || q(a, "startsWith").call(a, "google_ads_iframe_") || q(a, "startsWith").call(a, "aswift"))
    }

    function Ng(a, b, c) {
        if (!a.sources) return !1;
        switch (Og(a)) {
            case 2:
                var d = Pg(a);
                if (d) return c.some(function(f) {
                    return Qg(d, f)
                });
            case 1:
                var e = Rg(a);
                if (e) return b.some(function(f) {
                    return Qg(e, f)
                })
        }
        return !1
    }

    function Og(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Rg(a) {
        return Sg(a, function(b) {
            return b.currentRect
        })
    }

    function Pg(a) {
        return Sg(a, function(b) {
            return b.previousRect
        })
    }

    function Sg(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }
    var Tg = function() {
        de.call(this);
        this.h = this.g = this.K = this.J = this.R = 0;
        this.ca = this.Z = Number.NEGATIVE_INFINITY;
        this.V = this.X = this.Y = this.aa = this.fa = this.A = this.ea = this.M = 0;
        this.W = !1;
        this.L = this.I = this.G = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.da = a ? a.getAttribute("data-google-query-id") : null;
        this.o = null;
        this.ba = !1;
        this.U = function() {}
    };
    v(Tg, de);
    var Wg = function() {
            var a = new Tg;
            if (kg(Ud)) {
                var b = window;
                if (!b.google_plmetrics && window.PerformanceObserver) {
                    b.google_plmetrics = !0;
                    b = t(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
                    for (var c = b.next(); !c.done; c = b.next()) c = c.value, Ug(a).observe({
                        type: c,
                        buffered: !0
                    });
                    Vg(a)
                }
            }
        },
        Ug = function(a) {
            a.o || (a.o = new PerformanceObserver(Jg(640, function(b) {
                var c = Xg !== window.scrollX || Yg !== window.scrollY ? [] : Zg,
                    d = $g();
                b = t(b.getEntries());
                for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                    case "layout-shift":
                        var f = a;
                        if (!e.hadRecentInput) {
                            f.R += Number(e.value);
                            Number(e.value) > f.J && (f.J = Number(e.value));
                            f.K += 1;
                            var g = Ng(e, c, d);
                            g && (f.A += e.value, f.aa++);
                            if (5E3 < e.startTime - f.Z || 1E3 < e.startTime - f.ca) f.Z = e.startTime, f.g = 0, f.h = 0;
                            f.ca = e.startTime;
                            f.g += e.value;
                            g && (f.h += e.value);
                            f.g > f.M && (f.M = f.g, f.fa = f.h, f.ea = e.startTime + e.duration)
                        }
                        break;
                    case "largest-contentful-paint":
                        a.Y = Math.floor(e.renderTime || e.loadTime);
                        a.X = e.size;
                        break;
                    case "first-input":
                        a.V = Number((e.processingStart - e.startTime).toFixed(3));
                        a.W = !0;
                        break;
                    case "longtask":
                        e = Math.max(0, e.duration - 50), a.G += e, a.I = Math.max(a.I, e), a.L += 1
                }
            })));
            return a.o
        },
        Vg = function(a) {
            var b = Jg(641, function() {
                    var d = document;
                    2 == (d.prerendering ? 3 : {
                        visible: 1,
                        hidden: 2,
                        prerender: 3,
                        preview: 4,
                        unloaded: 5
                    }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && ah(a)
                }),
                c = Jg(641, function() {
                    return void ah(a)
                });
            document.addEventListener("visibilitychange", b);
            document.addEventListener("unload", c);
            a.U = function() {
                document.removeEventListener("visibilitychange", b);
                document.removeEventListener("unload", c);
                Ug(a).disconnect()
            }
        };
    Tg.prototype.S = function() {
        de.prototype.S.call(this);
        this.U()
    };
    var ah = function(a) {
            if (!a.ba) {
                a.ba = !0;
                Ug(a).takeRecords();
                var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
                window.LayoutShift && (b += Kg("cls", a.R), b += Kg("mls", a.J), b += X("nls", a.K), window.LayoutShiftAttribution && (b += Kg("cas", a.A), b += X("nas", a.aa)), b += Kg("wls", a.M), b += Kg("tls", a.ea), window.LayoutShiftAttribution && (b += Kg("was", a.fa)));
                window.LargestContentfulPaint && (b += X("lcp", a.Y), b += X("lcps", a.X));
                window.PerformanceEventTiming && a.W && (b += X("fid", a.V));
                window.PerformanceLongTaskTiming && (b += X("cbt", a.G), b += X("mbt", a.I), b += X("nlt", a.L));
                for (var c = 0, d = t(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Mg(e.value) && c++;
                b += X("nif", c);
                c = window.google_unique_id;
                b += X("ifi", "number" === typeof c ? c : 0);
                c = O(Jf).g();
                b += "&eid=" + encodeURIComponent(c.join());
                b += "&top=" + (x === x.top ? 1 : 0);
                b += a.da ? "&qqid=" + encodeURIComponent(a.da) : X("pvsid", Qc(x));
                window.googletag && (b += "&gpt=1");
                window.fetch(b, {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                });
                a.j || (a.j = !0, a.S())
            }
        },
        Qg = function(a, b) {
            var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
            a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
            return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
        },
        $g = function() {
            var a = [].concat(u(document.getElementsByTagName("iframe"))).filter(Mg),
                b = [].concat(u(Lg())).map(function(c) {
                    return document.getElementById(c)
                }).filter(function(c) {
                    return null !== c
                });
            Xg = window.scrollX;
            Yg = window.scrollY;
            return Zg = [].concat(u(a), u(b)).map(function(c) {
                return c.getBoundingClientRect()
            })
        },
        Xg = void 0,
        Yg = void 0,
        Zg = [];
    var ch = function(a) {
        N.call(this, a, -1, bh)
    };
    v(ch, N);
    var dh = function(a, b) {
            return F(a, 2, b)
        },
        eh = function(a, b) {
            return F(a, 3, b)
        },
        fh = function(a, b) {
            return F(a, 4, b)
        },
        gh = function(a, b) {
            return F(a, 5, b)
        },
        hh = function(a, b) {
            return F(a, 9, b)
        },
        ih = function(a, b) {
            return Jb(a, 10, b)
        },
        jh = function(a, b) {
            return F(a, 11, b)
        },
        kh = function(a, b) {
            return F(a, 1, b)
        },
        lh = function(a, b) {
            return F(a, 7, b)
        },
        mh = function(a) {
            N.call(this, a)
        };
    v(mh, N);
    mh.prototype.getVersion = function() {
        return Kb(this, 2)
    };
    var bh = [10, 6];
    var nh = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function oh(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function ph(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function qh(a) {
        if (!ph(a)) return null;
        var b = oh(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(nh).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function rh(a) {
        var b;
        return jh(ih(gh(dh(kh(fh(lh(hh(eh(new ch, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new mh;
            d = F(d, 1, c.brand);
            return F(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function sh(a) {
        var b, c;
        return null != (c = null == (b = qh(a)) ? void 0 : b.then(function(d) {
            return rh(d)
        })) ? c : null
    };
    var Z = {},
        th = (Z[23] = .001, Z[211] = !1, Z[253] = !1, Z[246] = [], Z[226] = [], Z[150] = ".google.nl", Z[221] = /^true$/.test("true"), Z[36] = /^true$/.test("false"), Z[172] = null, Z[260] = void 0, Z[251] = null, Z),
        Sb = function() {
            this.g = !1
        };

    function tg(a) {
        O(Sb).g = !0;
        return th[a]
    }

    function uh(a, b) {
        O(Sb).g = !0;
        th[a] = b
    };
    var wh = function() {
            return [].concat(u(q(vh, "values").call(vh))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        vh = new p.Map;

    function xh() {
        var a;
        return null != (a = x.googletag) ? a : x.googletag = {
            cmd: []
        }
    }

    function yh(a, b) {
        var c = xh();
        c.hasOwnProperty(a) || (c[a] = b)
    };

    function zh(a, b) {
        var c = a.que,
            d = function() {
                var e;
                null == a || null == (e = a.requestBids) || e.before.call(b, function(f, g) {
                    return xh().pbjs_hooks.push({
                        context: b,
                        nextFunction: f,
                        requestBidsConfig: g
                    })
                }, 0)
            };
        (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d): null == c || c.unshift(d)
    };
    var Ah = new p.WeakMap,
        Bh = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\v")
        };
    var Ch = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))\/tag\/js\/gpt(?:_[a-z]+)*\.js/,
        Dh = function(a, b) {
            b = void 0 === b ? Bh : b;
            var c = Ba(a),
                d = function(e) {
                    e = t(e);
                    e.next();
                    e = ka(e);
                    return b(c, e)
                };
            return function() {
                var e = va.apply(0, arguments),
                    f = this || x,
                    g = Ah.get(f);
                g || (g = {}, Ah.set(f, g));
                f = g;
                g = [this].concat(u(e));
                e = d ? d(g) : g;
                if (Object.prototype.hasOwnProperty.call(f, e)) f = f[e];
                else {
                    var h = t(g);
                    g = h.next().value;
                    h = ka(h);
                    g = a.apply(g, h);
                    f = f[e] = g
                }
                return f
            }
        }(function(a) {
            return (null == a ? 0 : a.src) ? Ch.test(a.src) ? 0 : 1 : 2
        }, function(a, b) {
            var c;
            return a + "\v" + (null == (c = b[0]) ? void 0 : c.src)
        });

    function Eh() {
        return 0 === Dh(tg(172))
    };

    function Fh(a, b) {
        var c = {},
            d = {},
            e = {};
        return e[He] = (c[3] = Eh, c[59] = function() {
            var f = va.apply(0, arguments),
                g = q(f, "includes"),
                h = String,
                k;
            var l = void 0 === l ? window : l;
            var n;
            l = null != (n = null == (k = Ac(l.location.href.match(zc)[3] || null)) ? void 0 : k.split(".")) ? n : [];
            k = 2 > l.length ? null : "uk" === l[l.length - 1] ? 3 > l.length ? null : Lc(l.splice(l.length - 3).join(".")) : Lc(l.splice(l.length - 2).join("."));
            return g.call(f, h(k))
        }, c[61] = function() {
            return tg(221)
        }, c[63] = function() {
            return tg(221) || ".google.ch" === tg(150)
        }, c[50] = function() {
            return 1 === Math.floor((new Date).getTime() / 24 / 60 / 60 / 1E3) % 2
        }, c), e[T] = (d[1] = function() {
            var f;
            return null != (f = Oc("{{MOD}}")) ? f : -1
        }, d[4] = function() {
            return Oc("9") || 0
        }, d[12] = function() {
            if (a) {
                var f = RegExp("[?&]gmeid=([^&]*)").exec(a.src);
                var g;
                f = f ? null != (g = Oc(f[1])) ? g : -1 : -1
            } else f = -1;
            return f
        }, d[13] = function() {
            return b
        }, d), e
    };

    function Gh(a, b, c) {
        var d = new Uf(tg(246));
        if (!K(d, Se, 1).length && K(a, Se, 1).length) {
            var e = K(a, Se, 1);
            Jb(d, 1, e)
        }!K(d, Wf, 2).length && K(a, Wf, 2).length && (e = K(a, Wf, 2), Jb(d, 2, e));
        void 0 === Fb(d, Xf, 5, !1) && void 0 !== Fb(a, Xf, 5, !1) && (a = J(a, Xf, 5), Hb(d, 5, a));
        vg(d, Fh(b, c))
    };
    var Hh = function(a) {
        N.call(this, a)
    };
    v(Hh, N);

    function Ih() {
        var a = Jh,
            b = xh(),
            c, d = null != (c = b.fifWin) ? c : window,
            e = d.document;
        c = b.fifWin ? window : d;
        var f = Kh(),
            g = new Hh;
        Rb();
        q(Object, "assign").call(Object, th, b._vars_);
        b._vars_ = th;
        g && (Lb(g, 3) && uh(36, !0), Lb(g, 5) && uh(221, !0), Kb(g, 6) && uh(150, Kb(g, 6)));
        tg(221);
        tg(150);
        yh("_loaded_", !0);
        var h = Lh(f, g);
        yh("getVersion", function() {
            return String(h.ta || h.ha)
        });
        yh("cmd", []);
        var k = Mh(e),
            l;
        f = null != (l = Nh(e)) ? l : Oh(e);
        Ph(void 0 !== Fb(g, Uf, 1, !1) ? J(g, Uf, 1) : new Uf(a), d, f, M(D(g, 2), 0));
        Qh(d);
        try {
            Wg()
        } catch (qa) {}
        Hg("1", d);
        a = Rh(h, f);
        if (!k) {
            d = "gpt-impl-" + Math.random();
            try {
                tc(e, pc(a, {
                    id: d,
                    nonce: xc()
                }))
            } catch (qa) {}
            e.getElementById(d) && (b._loadStarted_ = !0)
        }
        if (!b._loadStarted_) {
            var n = Rc("SCRIPT");
            n.src = ac(a);
            sc(n);
            n.async = !0;
            e = b.fifWin ? c.document : e;
            a = e.body;
            d = e.documentElement;
            var w, C, L = null != (C = null != (w = e.head) ? w : a) ? C : d;
            "complete" !== c.document.readyState && b.fifWin ? vc(c, "load", function() {
                return void L.appendChild(n)
            }) : L.appendChild(n);
            b._loadStarted_ = !0
        }(b = c === c.top) && we(c);
        (kg(Rd) ? Fc(c) === (Dc(c.top) ? c.top : null) : b) && Sh(c.top, f)
    }

    function Kh() {
        var a = Number("2022100401");
        1 > a || Math.floor(a) !== a ? (Dg({
            v: "2022100401"
        }), a = "1") : a = "2022100401";
        return {
            ha: a,
            P: "",
            xa: new Ld,
            ya: .01 > Ic(),
            sa: 100
        }
    }

    function Lh(a, b) {
        var c = P("2022100401");
        var d = a.P;
        /m\d+/.test(d) ? d = Number(d.substring(1)) : "dev" === d ? d = 1 : (d && Dg({
            mjsv: d
        }), d = void 0);
        return q(Object, "assign").call(Object, {}, a, {
            ia: c,
            ta: d,
            ua: P(""),
            Pa: Qc(window),
            Sa: b
        })
    }

    function Nh(a) {
        return (a = a.currentScript) ? a : null
    }

    function Oh(a) {
        var b;
        a = t(null != (b = a.scripts) ? b : []);
        for (b = a.next(); !b.done; b = a.next())
            if (b = b.value, q(b.src, "includes").call(b.src, "/tag/js/gpt")) return b;
        return null
    }

    function Rh(a, b) {
        b = Th(b) ? P("https://pagead2.googlesyndication.com/") : P("https://securepubads.g.doubleclick.net/");
        a = a.P ? dc([b, Fg, a.ua, P("/pubads_impl.js")]) : kg(Pd) ? dc([b, Fg, P("m"), a.ia, P("/pubads_impl.js")]) : dc([b, Eg, a.ia, P(".js")]);
        b = {};
        var c = O(jg).g(Sd.g, Sd.defaultValue),
            d = O(jg).g(Qd.g, Qd.defaultValue);
        c && (b.cb = c);
        d && (b.mcb = d);
        return q(Object, "keys").call(Object, b).length ? cc(a, b) : a
    }

    function Ph(a, b, c, d) {
        uh(172, c);
        Gh(a, c, d);
        O(Jf).h(12);
        O(Jf).h(5);
        (a = sh(b)) && a.then(function(e) {
            a: {
                ob = !0;
                try {
                    var f = JSON.stringify(e.toJSON(), Pb);
                    break a
                } finally {
                    ob = !1
                }
                f = void 0
            }
            return void uh(251, f)
        });
        Lf(O(jg).j(Td.g, Td.defaultValue), b.document)
    }

    function Mh(a) {
        var b = Nh(a);
        return "complete" === a.readyState || "loaded" === a.readyState || !(null == b || !b.async)
    }

    function Qh(a) {
        var b;
        if (kg(Od)) {
            var c = zg(a);
            c && (null != (b = xh()).pbjs_hooks || (b.pbjs_hooks = []), zh(c, a))
        }
    }
    var Uh = function() {
        this.g = []
    };
    Uh.prototype.addListener = function(a) {
        void 0 !== this.h || this.error ? a(this.h, this.error) : this.g.push(a)
    };
    var Vh = function(a, b, c) {
        a.h = b;
        a.error = c;
        for (var d = t(a.g), e = d.next(); !e.done; e = d.next()) e = e.value, e(b, c);
        a.g.length = 0
    };

    function Sh(a, b) {
        var c = new Uh;
        uh(260, function(e) {
            return void c.addListener(e)
        });
        if (a = Wh(a, b)) {
            var d = new p.globalThis.XMLHttpRequest;
            d.open("GET", a.toString(), !0);
            d.withCredentials = !1;
            d.onload = function() {
                300 > d.status ? (Hg("13", window), Vh(c, 204 === d.status ? "" : d.responseText)) : Vh(c, void 0, new p.globalThis.Error("resp:" + d.status))
            };
            d.onerror = function() {
                return void Vh(c, void 0, new p.globalThis.Error("s:" + d.status + " rs:" + d.readyState))
            };
            d.send()
        } else Vh(c, void 0, new p.globalThis.Error("no provided or inferred data"))
    }

    function Wh(a, b) {
        if (!b) return null;
        a = a.location.host;
        var c = Cc(b.src, "domain"),
            d = Cc(b.src, "network-code");
        if (!a && !c && !d) return null;
        b = Th(b) ? P("https://pagead2.googlesyndication.com") : P("https://securepubads.g.doubleclick.net");
        return cc(dc([b, P("/pagead/ppub_config")]), {
            ippd: a,
            pppd: c,
            pppnc: d
        })
    }

    function Th(a) {
        return !(null == a || !a.src) && "pagead2.googlesyndication.com" === Ac(a.src.match(zc)[3] || null)
    };
    var Jh;
    a: {
        try {
            if (Array.isArray(E)) {
                Jh = E;
                break a
            }
        } catch (a) {}
        Jh = []
    }
    try {
        Ih()
    } catch (a) {
        try {
            var Xh = Kh();
            if (Xh.ya) {
                var Yh, Zh = a.error && a.meta && a.id ? a.error : a,
                    $h, ai = new Fd,
                    bi = new Ed;
                try {
                    var ci = Qc(window);
                    H(bi, 1, ci, 0)
                } catch (b) {}
                try {
                    var di = O(Jf).g();
                    Bb(bi, 2, di)
                } catch (b) {}
                try {
                    H(bi, 3, window.document.URL, "")
                } catch (b) {}
                $h = Hb(ai, 2, bi);
                var ei, fi = new Cd;
                ei = H(fi, 1, 420, 0);
                try {
                    var gi = ye(null == Zh ? void 0 : Zh.name) ? Zh.name : "Unknown error";
                    H(ei, 2, gi, "")
                } catch (b) {}
                try {
                    var hi = ye(null == Zh ? void 0 : Zh.message) ? Zh.message : "Caught " + Zh;
                    H(ei, 3, hi, "")
                } catch (b) {}
                try {
                    var ii = ye(null == Zh ? void 0 : Zh.stack) ? Zh.stack : Error().stack;
                    ii && Cb(ei, 4, ii.split(/\n\s*/))
                } catch (b) {}
                Yh = Hb($h, 1, ei);
                var ji = new Ad;
                try {
                    H(ji, 1, Xh.P || Xh.ha, "")
                } catch (b) {}
                try {
                    var ki = wh();
                    H(ji, 2, ki, 0)
                } catch (b) {}
                try {
                    var li = [].concat(u(q(vh, "keys").call(vh)));
                    Cb(ji, 3, li)
                } catch (b) {}
                Ib(Yh, 4, Gd, ji);
                H(Yh, 5, Xh.sa, 0);
                Hd(Xh.xa, Yh)
            }
        } catch (b) {}
    };
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
    [
        [null, 472785970, null, [null, 500]],
        [447540098, null, null, [1]],
        [447540095, null, null, [1]],
        [447540096, null, null, [1]],
        [null, 7, null, [null, 0.1]],
        [451141465, null, null, [1]],
        [null, 448338836, null, [null, 0.01]],
        [null, 408380992, null, [null, 0.01]],
        [null, 377289019, null, [null, 10000]],
        [null, 529, null, [null, 20]],
        [null, 447000223, null, [null, 0.01]],
        [360245597, null, null, [1]],
        [null, 494, null, [null, 10000]],
        [null, 471890184, null, [null, 0.01]],
        [null, 517, null, [null, 0.01]],
        [null, 492, null, [null, 0.01]],
        [null, 45374287, null, [null, 1000]],
        [449296995, null, null, [1]],
        [null, 398776877, null, [null, 60000]],
        [null, 374201269, null, [null, 60000]],
        [null, 371364213, null, [null, 60000]],
        [null, 376149757, null, [null, 0.0025]],
        [463371906, null, null, [1]],
        [377936516, null, null, [1]],
        [null, null, 2, [null, null, "1-0-38"]],
        [null, null, null, [], null, 489],
        [392065905, null, null, null, [
            [
                [3, [
                    [4, null, 15, null, null, null, null, ["18190176,155953048"]],
                    [4, null, 15, null, null, null, null, ["49944529"]],
                    [4, null, 15, null, null, null, null, ["5441"]],
                    [4, null, 15, null, null, null, null, ["6177"]],
                    [4, null, 15, null, null, null, null, ["6782"]],
                    [4, null, 15, null, null, null, null, ["6581"]]
                ]],
                [1]
            ]
        ]],
        [null, 360245595, null, [null, 500]],
        [null, 397316938, null, [null, 1000]],
        [444587044, null, null, null, [
            [
                [4, null, 9, null, null, null, null, ["document.browsingTopics"]],
                [1]
            ]
        ]],
        [440148284, null, null, [1]],
        [440148282, null, null, null, [
            [
                [4, null, 9, null, null, null, null, ["document.browsingTopics"]],
                [1]
            ]
        ]],
        [null, 1921, null, [null, 72]],
        [null, 1920, null, [null, 24]],
        [null, 426169222, null, [null, 1000]],
        [null, 1917, null, [null, 300]],
        [null, 1916, null, [null, 0.001]],
        [473858892, null, null, [1]],
        [462694162, null, null, [1]],
        [null, null, null, [null, null, null, ["A+cA2PUOfIOKAdSDJOW5CP9ZlxONy1yu+hqAq72zUtKw4rLdihqRp6Nui/jUyCyegr+BUtH+C+Elv0ufn05yBQEAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A+zsdH3aNZT/bkjT8U/o5ACzyaeNYzTvtoVmwf/KOilfv39pxY2AIsOwhQJv+YnXp98i3TqrQibIVtMWs5UHjgoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "AxceVEhIegcDEHqLXFQ2+vPKqzCppoJYsRCZ/BdfVnbM/sUUF2BXV8lwNosyYjvoxnTh2FC8cOlAnA5uULr/zAUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]], null, 1934],
        [1947, null, null, [1]],
        [null, 1972, null, []],
        [null, 1142, null, [null, 8]],
        [null, 1165, null, [null, 1000]],
        [null, 1195, null, [null, 1]],
        [null, 1119, null, [null, 300]],
        [null, 1193, null, [null, 100]],
        [null, 1114, null, [null, 1]],
        [null, 1116, null, [null, 300]],
        [null, 1117, null, [null, 100]],
        [null, 1110, null, [null, 5]],
        [null, 1111, null, [null, 5]],
        [null, 1112, null, [null, 5]],
        [null, 1113, null, [null, 5]],
        [null, 1115, null, [null, -1]],
        [null, 1194, null, [null, 1]],
        [null, 469675170, null, [null, 30000]],
        [1186, null, null, [1]],
        [392736476, null, null, []],
        [null, null, null, [], null, 1932],
        [432938498, null, null, []]
    ],
    [
        [20, [
            [50, [
                [31062930],
                [31062931, [
                    [380025941, null, null, [1]]
                ]]
            ], null, null, null, null, null, 101, null, 102],
            [50, [
                [31068919],
                [31068920],
                [31068921]
            ], null, null, null, null, null, 401, null, 102]
        ]],
        [2, [
            [null, [
                [31070083],
                [31070084, [
                    [null, null, null, [null, null, null, ["5"]], null, 466086960]
                ]]
            ], null, null, null, null, null, 301, null, 102],
            [30, [
                [44772496],
                [44775318, [
                    [1122, null, null, [1]]
                ]],
                [44775319, [
                    [1122, null, null, [1]]
                ]]
            ], null, null, null, null, null, 601, null, 102],
            [10, [
                [31061165],
                [31061166, [
                    [null, 363650251, null, [null, 2]]
                ]],
                [31061167, [
                    [null, 363650251, null, [null, 1]]
                ]]
            ], null, null, null, null, null, 1, null, 102],
            [10, [
                [31069101]
            ]],
            [10, [
                [31069102],
                [31069103]
            ], null, null, null, null, null, null, null, 104],
            [10, [
                    [31069950],
                    [31069951, [
                        [501, null, null, [1]]
                    ]],
                    [31069952, [
                        [465091316, null, null, [1]],
                        [501, null, null, [1]]
                    ]],
                    [31069953, [
                        [501, null, null, [1]]
                    ]]
                ],
                [2, [
                    [4, null, 66],
                    [12, null, null, null, 4, null, "Chrome\\/((?!100|101|102|103|104|105)\\d{3,})", ["navigator.userAgent"]],
                    [1, [
                        [4, null, 8, null, null, null, null, ["navigator.serviceWorker.controller"]]
                    ]],
                    [4, null, 9, null, null, null, null, ["document.head.appendChild"]]
                ]], null, null, null, null, null, null, 114
            ],
            [1000, [
                [31069999, null, [2, [
                    [6, null, null, null, 11, null, "105.0.5195.128"],
                    [12, null, null, null, 4, null, "Windows", ["navigator.userAgent"]]
                ]]],
                [31070000, null, [2, [
                    [6, null, null, null, 11, null, "106.0.5249.61"],
                    [12, null, null, null, 4, null, "Windows", ["navigator.userAgent"]]
                ]]]
            ]],
            [10, [
                [44742767],
                [44742768]
            ]],
            [10, [
                [44752585],
                [44752586, [
                    [392065905, null, null, [1]]
                ]]
            ], null, 41],
            [50, [
                    [44753506],
                    [44753507, [
                        [392065905, null, null, []]
                    ]]
                ],
                [3, [
                    [4, null, 15, null, null, null, null, ["18190176,155953048"]],
                    [4, null, 15, null, null, null, null, ["49944529"]],
                    [4, null, 15, null, null, null, null, ["5441"]],
                    [4, null, 15, null, null, null, null, ["6177"]],
                    [4, null, 15, null, null, null, null, ["6782"]],
                    [4, null, 15, null, null, null, null, ["6581"]]
                ]], 41
            ],
            [1, [
                    [44763398],
                    [44763399, [
                        [392065905, null, null, [1]]
                    ]]
                ],
                [4, null, 68], 41
            ]
        ]],
        [4, [
            [null, [
                [44714449, [
                    [null, 7, null, [null, 1]]
                ]],
                [676982961, [
                    [null, 7, null, [null, 0.4]],
                    [212, null, null, [1]]
                ]],
                [676982996, [
                    [null, 7, null, [null, 1]]
                ]]
            ]]
        ]],
        [3, [
            [null, [
                [676982960],
                [676982994],
                [676982998]
            ]],
            [null, [
                [1337, [
                    [77, null, null, [1]],
                    [78, null, null, [1]],
                    [85, null, null, [1]],
                    [80, null, null, [1]],
                    [76, null, null, [1]],
                    [84, null, null, [1]],
                    [188, null, null, [1]]
                ]]
            ]],
            [10, [
                [21068766],
                [21068767, [
                    [null, 488, null, [null, 0.1]]
                ]]
            ], null, 42],
            [null, [
                [31068028, [
                        [null, 1921, null, [null, 24]],
                        [null, 1920, null, [null, 8]]
                    ],
                    [2, [
                        [2, [
                            [8, null, null, 1, null, 39],
                            [7, null, null, 1, null, 45]
                        ]],
                        [4, null, 3]
                    ]]
                ],
                [31068029, [
                        [null, 360261971, null, [null, 3]],
                        [null, 1921, null, [null, 24]],
                        [null, 1920, null, [null, 8]]
                    ],
                    [2, [
                        [2, [
                            [8, null, null, 1, null, 44],
                            [7, null, null, 1, null, 50]
                        ]],
                        [4, null, 3]
                    ]]
                ]
            ]],
            [10, [
                [31068356],
                [31068357, [
                    [444587044, null, null, [1]],
                    [440148282, null, null, [1]]
                ]]
            ], null, 55],
            [null, [
                [31069125, [
                        [null, 1921, null, [null, 24]],
                        [null, 1920, null, [null, 8]]
                    ],
                    [3, [
                        [2, [
                            [2, [
                                [8, null, null, 1, null, -1],
                                [7, null, null, 1, null, 5]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 9],
                                [7, null, null, 1, null, 20]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 29],
                                [7, null, null, 1, null, 35]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 39],
                                [7, null, null, 1, null, 45]
                            ]],
                            [4, null, 3]
                        ]]
                    ]]
                ],
                [31069126, [
                        [null, 1921, null, [null, 24]],
                        [null, 1920, null, [null, 8]],
                        [437292966, null, null, [1]]
                    ],
                    [3, [
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 4],
                                [7, null, null, 1, null, 10]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 19],
                                [7, null, null, 1, null, 30]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 34],
                                [7, null, null, 1, null, 40]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 44],
                                [7, null, null, 1, null, 50]
                            ]],
                            [4, null, 3]
                        ]]
                    ]]
                ]
            ]],
            [50, [
                [31069353],
                [31069354, [
                    [467673112, null, null, [1]]
                ]]
            ]],
            [10, [
                [31069595],
                [31069596, [
                    [472976668, null, null, [1]]
                ]]
            ]],
            [1000, [
                [31069682, null, [3, [
                    [2, [
                        [2, [
                            [8, null, null, 1, null, 9],
                            [7, null, null, 1, null, 20]
                        ]],
                        [4, null, 3]
                    ]]
                ]]],
                [31069683, [
                        [null, 1920, null, [null, 12]]
                    ],
                    [3, [
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 19],
                                [7, null, null, 1, null, 30]
                            ]],
                            [4, null, 3]
                        ]]
                    ]]
                ]
            ]],
            [10, [
                [31069924],
                [31069925, [
                    [null, 474069761, null, [null, 1]]
                ]]
            ]],
            [10, [
                [31070109],
                [31070110, [
                    [441529989, null, null, [1]]
                ]],
                [31070111, [
                    [428624799, null, null, [1]]
                ]],
                [31070112, [
                    [437308144, null, null, [1]]
                ]],
                [31070113, [
                    [428624799, null, null, [1]],
                    [437308144, null, null, [1]]
                ]]
            ]],
            [10, [
                [31070116],
                [31070117]
            ]]
        ]],
        [5, [
            [50, [
                    [21062785, null, [4, null, 8, null, null, null, null, ["_gmptnl"]]],
                    [21062786, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["_gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 43
            ],
            [900, [
                    [21062812, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["_gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 43
            ],
            [50, [
                    [21063916, null, [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]],
                    [21063917, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 44
            ],
            [900, [
                    [21064113, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 44
            ],
            [10, [
                [31060437],
                [31060438, [
                    [200, null, null, [1]]
                ]],
                [31060439, [
                    [220, null, null, [1]]
                ]]
            ], null, 24],
            [50, [
                    [31061483],
                    [31067420],
                    [31067421, [
                        [360245597, null, null, []]
                    ]],
                    [31067690, [
                        [null, 434620574, null, [null, 300]]
                    ]],
                    [31067691, [
                        [null, 434620574, null, [null, 180]]
                    ]],
                    [31068454],
                    [31069005, [
                        [null, 434620574, null, [null, 300]],
                        [null, 461613513, null, [null, 0.25]]
                    ]],
                    [31069133],
                    [31069134],
                    [44765593],
                    [44775080],
                    [44775081]
                ],
                [3, [
                    [4, null, 8, null, null, null, null, ["gmaSdk.getQueryInfo"]],
                    [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],
                    [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaSig.postMessage"]]
                ]]
            ],
            [100, [
                [31068457],
                [31068458, [
                    [453275889, null, null, [1]]
                ]]
            ]],
            [50, [
                [31068498],
                [31068500, [
                    [427203966, null, null, [1]]
                ]],
                [31068501, [
                    [442109935, null, null, [1]]
                ]]
            ]],
            [1000, [
                [31068986, null, [6, null, null, 12, null, 31068986]],
                [31068987, null, [6, null, null, 12, null, 31068987]]
            ]],
            [10, [
                [31069181],
                [31069182, [
                    [371390390, null, null, [1]]
                ]]
            ]],
            [1000, [
                    [31069294, [
                            [null, 24, null, [null, 31069294]]
                        ],
                        [6, null, null, 13, null, 31069294]
                    ],
                    [31069295, [
                            [null, 24, null, [null, 31069295]]
                        ],
                        [6, null, null, 13, null, 31069295]
                    ]
                ],
                [4, null, 3], 1
            ],
            [1000, [
                    [31069391, [
                            [null, 24, null, [null, 31069391]]
                        ],
                        [6, null, null, 13, null, 31069391]
                    ],
                    [31069392, [
                            [null, 24, null, [null, 31069392]]
                        ],
                        [6, null, null, 13, null, 31069392]
                    ]
                ],
                [4, null, 3], 1
            ],
            [1000, [
                    [31069429, [
                            [null, 24, null, [null, 31069429]]
                        ],
                        [6, null, null, 13, null, 31069429]
                    ],
                    [31069430, [
                            [null, 24, null, [null, 31069430]]
                        ],
                        [6, null, null, 13, null, 31069430]
                    ]
                ],
                [4, null, 3], 1
            ],
            [1000, [
                    [31069463, [
                            [null, 24, null, [null, 31069463]]
                        ],
                        [6, null, null, 13, null, 31069463]
                    ],
                    [31069464, [
                            [null, 24, null, [null, 31069464]]
                        ],
                        [6, null, null, 13, null, 31069464]
                    ]
                ],
                [4, null, 3], 1
            ],
            [100, [
                [31069634],
                [31069635, [
                    [467295690, null, null, [1]]
                ]]
            ]],
            [1000, [
                    [31069664, [
                            [null, 24, null, [null, 31069664]]
                        ],
                        [6, null, null, 13, null, 31069664]
                    ],
                    [31069665, [
                            [null, 24, null, [null, 31069665]]
                        ],
                        [6, null, null, 13, null, 31069665]
                    ]
                ],
                [4, null, 3], 1
            ],
            [10, [
                [31070043],
                [31070044, [
                    [469586196, null, null, [1]]
                ]]
            ]],
            [100, [
                [31070045],
                [31070046, [
                    [476168471, null, null, [1]]
                ]]
            ]],
            [100, [
                [31070085],
                [31070086, [
                    [462694162, null, null, [1]]
                ]]
            ]],
            [1000, [
                    [31070138, [
                            [null, 24, null, [null, 31070138]]
                        ],
                        [6, null, null, 4, null, 8]
                    ],
                    [31070139, [
                            [null, 24, null, [null, 31070139]]
                        ],
                        [6, null, null, 4, null, 9]
                    ]
                ],
                [4, null, 3], 1
            ],
            [1000, [
                    [31070165, [
                            [null, 24, null, [null, 31070165]]
                        ],
                        [6, null, null, 4, null, 2]
                    ],
                    [31070166, [
                            [null, 24, null, [null, 31070166]]
                        ],
                        [6, null, null, 4, null, 3]
                    ]
                ],
                [4, null, 3], 1
            ],
            [10, [
                [31070191],
                [31070192, [
                    [464128744, null, null, [1]]
                ]]
            ]],
            [10, [
                [31070193],
                [31070194, [
                    [476984599, null, null, [1]]
                ]]
            ]],
            [1000, [
                    [31070223, [
                            [null, 24, null, [null, 31070223]]
                        ],
                        [6, null, null, 4, null, 4]
                    ],
                    [31070224, [
                            [null, 24, null, [null, 31070224]]
                        ],
                        [6, null, null, 4, null, 5]
                    ]
                ],
                [4, null, 3], 1
            ],
            [50, [
                [44761477],
                [44761478, [
                    [null, 427198696, null, [null, 1]]
                ]]
            ]],
            [10, [
                [44768257],
                [44768258, [
                    [45374286, null, null, [1]]
                ]]
            ]]
        ]],
        [9, [
            [1000, [
                    [31063049]
                ],
                [4, null, 13, null, null, null, null, ["cxbbhbxm"]]
            ]
        ]],
        [25, [
            [10, [
                    [31064132],
                    [31064133, [
                        [null, 438663674, null, [null, 1]]
                    ]]
                ],
                [2, [
                    [4, null, 68],
                    [3, [
                        [6, null, null, null, 4, null, "2g", ["navigator.connection.effectiveType"]],
                        [6, null, null, null, 4, null, "2g", ["navigator.mozConnection.effectiveType"]],
                        [6, null, null, null, 4, null, "2g", ["navigator.webkitConnection.effectiveType"]]
                    ]]
                ]], 40
            ],
            [50, [
                [31068366],
                [31068367, [
                    [null, 455645877, null, [null, 0.1]]
                ]]
            ]],
            [10, [
                [31068825],
                [31068826, [
                    [null, 462420536, null, [null, 0.1]]
                ]]
            ]],
            [1, [
                [44769862, null, [4, null, 68]],
                [44769865, [
                        [null, 438663674, null, [null, 500]]
                    ],
                    [4, null, 68]
                ],
                [44769866, [
                        [null, 438663674, null, [null, 1000]]
                    ],
                    [4, null, 68]
                ],
                [44769867, [
                        [null, 438663674, null, [null, 1500]]
                    ],
                    [4, null, 68]
                ],
                [44769868, [
                        [null, 438663674, null, [null, 2000]]
                    ],
                    [4, null, 68]
                ],
                [44769869, [
                        [null, 438663674, null, [null, 2500]]
                    ],
                    [4, null, 68]
                ],
                [44769870, [
                        [null, 438663674, null, [null, 3000]]
                    ],
                    [4, null, 68]
                ],
                [44770059, [
                        [null, 438663674, null, [null, 1]]
                    ],
                    [4, null, 68]
                ]
            ], null, 40]
        ]],
        [12, [
            [20, [
                    [21065724],
                    [21065725, [
                        [203, null, null, [1]]
                    ]]
                ],
                [4, null, 9, null, null, null, null, ["LayoutShift"]]
            ],
            [10, [
                [31061690],
                [31061691, [
                    [83, null, null, [1]],
                    [84, null, null, [1]]
                ]]
            ], null, 61],
            [50, [
                [31067825],
                [31067826, [
                    [1971, null, null, [1]]
                ]]
            ]],
            [10, [
                [44769661],
                [44769662, [
                    [1973, null, null, [1]]
                ]]
            ]]
        ]],
        [13, [
            [500, [
                    [31061692],
                    [31061693, [
                        [77, null, null, [1]],
                        [78, null, null, [1]],
                        [85, null, null, [1]],
                        [80, null, null, [1]],
                        [76, null, null, [1]]
                    ]]
                ],
                [4, null, 6, null, null, null, null, ["31061691"]]
            ],
            [1, [
                [31064018],
                [31064019, [
                    [1961, null, null, [1]]
                ]]
            ]],
            [1000, [
                    [31065981]
                ],
                [2, [
                    [12, null, null, null, 4, null, "Chrome/(9[23456789]|\\d{3,})", ["navigator.userAgent"]],
                    [4, null, 27, null, null, null, null, ["crossOriginIsolated"]]
                ]]
            ],
            [1000, [
                    [31067146, null, [4, null, 9, null, null, null, null, ["document.browsingTopics"]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067147, null, [2, [
                        [4, null, 9, null, null, null, null, ["navigator.runAdAuction"]],
                        [4, null, 9, null, null, null, null, ["navigator.joinAdInterestGroup"]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067148, null, [4, null, 69, null, null, null, null, ["attribution-reporting"]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067672, null, [2, [
                        [4, null, 69, null, null, null, null, ["browsing-topics"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["browsing-topics"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067673, null, [2, [
                        [4, null, 69, null, null, null, null, ["join-ad-interest-group"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["join-ad-interest-group"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067674, null, [2, [
                        [4, null, 69, null, null, null, null, ["run-ad-auction"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["run-ad-auction"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067675, null, [2, [
                        [4, null, 69, null, null, null, null, ["attribution-reporting"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["attribution-reporting"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31068556, null, [4, null, 8, null, null, null, null, ["sharedStorage"]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31068557, null, [2, [
                        [4, null, 69, null, null, null, null, ["shared-storage"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["shared-storage"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [200, [
                [31069419, null, [2, [
                    [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]],
                    [4, null, 27, null, null, null, null, ["crossOriginIsolated"]]
                ]]],
                [31069420, [
                        [null, null, null, [null, null, null, ["A/6fvn8/Gtanoa1JImBxbvhuYBg6saTOvUwnxxrjfqYKVr6FhYuq735gNAS9yiA9eZCfxy6DNpj7b5RvVydt3AAAAACKeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A+U9qN2zW5GTLxw8s2+dVNTkJno6E+N/ccDejxXyQWvhjPxM7ZW2kkup3QdRQA3PNcdJmf7fmSYjbhYI9IfoTwwAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A/nrjb/iPi/6otfK9jaRrKeitC60ZEvSBV2LdZ9fK9wYY6avQ4BArkhirmauwsEv8oXTREo3giK6JoHNOyETTwsAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]], null, 472572701]
                    ],
                    [2, [
                        [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]],
                        [4, null, 27, null, null, null, null, ["crossOriginIsolated"]]
                    ]]
                ]
            ]],
            [10, [
                [31069563],
                [31069564, [
                    [471682731, null, null, [1]]
                ]]
            ]],
            [1000, [
                    [31069602, null, [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]]]
                ],
                [2, [
                    [12, null, null, null, 4, null, "Chrome/(9[23456789]|\\d{3,})", ["navigator.userAgent"]],
                    [4, null, 27, null, null, null, null, ["crossOriginIsolated"]]
                ]]
            ],
            [1000, [
                    [31069603, null, [2, [
                        [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]],
                        [4, null, 8, null, null, null, null, ["anonymouslyFramed"]]
                    ]]]
                ],
                [2, [
                    [12, null, null, null, 4, null, "Chrome/(9[23456789]|\\d{3,})", ["navigator.userAgent"]],
                    [4, null, 27, null, null, null, null, ["crossOriginIsolated"]]
                ]]
            ],
            [50, [
                [44768158, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]],
                [44768159, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]]
            ]]
        ]]
    ], null, null, [0.001, 1000, 1, 1000]
])