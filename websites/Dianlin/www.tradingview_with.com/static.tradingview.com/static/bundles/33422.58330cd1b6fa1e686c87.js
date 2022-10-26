"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [33422, 24377, 5043], {
        858947: (e, n) => {
            function r(e) {
                return Math.round(1e10 * e) / 1e10
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.alignTo = n.fixComputationError = n.isNaN = n.isInteger = n.isNumber = void 0, n.isNumber = function(e) {
                return "number" == typeof e && isFinite(e)
            }, n.isInteger = function(e) {
                return "number" == typeof e && e % 1 == 0
            }, n.isNaN = function(e) {
                return !(e <= 0 || e > 0)
            }, n.fixComputationError = r, n.alignTo = function(e, n) {
                var t = e / n,
                    o = Math.floor(t),
                    a = t - o;
                return a > 2e-10 ? r(a > .5 ? (o + 1) * n : o * n) : e
            }
        },
        724377: (e, n, r) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var t = r(858947);

            function o(e, n, r) {
                return t.isNaN(n) || n < e ? e : n > r ? r : Math.round(n)
            }

            function a(e, n, r) {
                return t.isNaN(n) || n < e ? e : n > r ? r : Math.round(1e4 * n) / 1e4
            }

            function i(e) {
                return o(0, e, 255)
            }

            function f(e) {
                return o(0, e, 255)
            }

            function c(e) {
                return o(0, e, 255)
            }

            function u(e) {
                return a(0, e, 1)
            }

            function l(e) {
                return a(0, e, 1)
            }

            function s(e) {
                return a(0, e, 1)
            }

            function d(e) {
                return a(0, e, 1)
            }

            function h(e) {
                return a(0, e, 1)
            }

            function p(e) {
                return a(0, e, 1)
            }

            function v(e) {
                var n = e[0] / 255,
                    r = e[1] / 255,
                    t = e[2] / 255,
                    o = Math.min(n, r, t),
                    a = Math.max(n, r, t),
                    i = 0,
                    f = 0,
                    c = (o + a) / 2;
                if (o === a) i = 0, f = 0;
                else {
                    var u = a - o;
                    switch (f = c > .5 ? u / (2 - a - o) : u / (a + o), a) {
                        case n:
                            i = ((r - t) / u + (r < t ? 6 : 0)) / 6;
                            break;
                        case r:
                            i = ((t - n) / u + 2) / 6;
                            break;
                        case t:
                            i = ((n - r) / u + 4) / 6
                    }
                }
                return [i, f, c]
            }

            function b(e, n, r) {
                return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (n - e) * r : r < .5 ? n : r < 2 / 3 ? e + (n - e) * (2 / 3 - r) * 6 : e
            }

            function g(e) {
                var n, r, t, o = e[0],
                    a = e[1],
                    u = e[2];
                if (0 === a) n = r = t = u;
                else {
                    var l = u < .5 ? u * (1 + a) : u + a - u * a,
                        s = 2 * u - l;
                    n = b(s, l, o + 1 / 3), r = b(s, l, o), t = b(s, l, o - 1 / 3)
                }
                return [i(255 * n), f(255 * r), c(255 * t)]
            }
            n.normalizeRedComponent = i, n.normalizeGreenComponent = f, n.normalizeBlueComponent = c, n.normalizeAlphaComponent = u, n.rgb = function(e, n, r) {
                return [i(e), f(n), c(r)]
            }, n.areEqualRgb = function(e, n) {
                return e[0] === n[0] && e[1] === n[1] && e[2] === n[2]
            }, n.rgba = function(e, n, r, t) {
                if (Array.isArray(e)) {
                    var o = e;
                    return t = n, [o[0], o[1], o[2], u(t)]
                }
                var a = n;
                return r = r || 0, t = t || 0, [i(e), f(a), c(r), u(t)]
            }, n.areEqualRgba = function(e, n) {
                return e[0] === n[0] && e[1] === n[1] && e[2] === n[2] && e[3] === n[3]
            }, n.normalizeHue = l, n.normalizeHslSaturation = s, n.normalizeHsvSaturation = d, n.normalizeLightness = h, n.normalizeValue = p, n.hsl = function(e, n, r) {
                return [l(e), s(n), h(r)]
            }, n.areEqualHsl = function(e, n) {
                return e[0] === n[0] && e[1] === n[1] && e[2] === n[2]
            }, n.hsv = function(e, n, r) {
                return [l(e), d(n), p(r)]
            }, n.areEqualHsv = function(e, n) {
                return e[0] === n[0] && e[1] === n[1] && e[2] === n[2]
            }, n.rgbToHsl = v, n.hslToRgb = g, n.rgbToHsv = function(e) {
                var n = e[0],
                    r = e[1],
                    t = e[2],
                    o = n / 255,
                    a = r / 255,
                    i = t / 255,
                    f = Math.min(o, a, i),
                    c = Math.max(o, a, i),
                    u = c - f,
                    l = 0,
                    s = 0 === c ? 0 : u / c,
                    d = c;
                if (c === f) l = 0;
                else switch (c) {
                    case n:
                        l = ((a - i) / u + (a < i ? 6 : 0)) / 6;
                        break;
                    case r:
                        l = ((i - o) / u + 2) / 6;
                        break;
                    case t:
                        l = ((o - a) / u + 4) / 6
                }
                return [l, s, d]
            }, n.hsvToRgb = function(e) {
                var n = e[0],
                    r = e[1],
                    t = e[2],
                    o = Math.floor(6 * n),
                    a = 6 * n - o,
                    u = t * (1 - r),
                    l = t * (1 - a * r),
                    s = t * (1 - (1 - a) * r),
                    d = 0,
                    h = 0,
                    p = 0;
                switch (o % 6) {
                    case 0:
                        d = t, h = s, p = u;
                        break;
                    case 1:
                        d = l, h = t, p = u;
                        break;
                    case 2:
                        d = u, h = t, p = s;
                        break;
                    case 3:
                        d = u, h = l, p = t;
                        break;
                    case 4:
                        d = s, h = u, p = t;
                        break;
                    case 5:
                        d = t, h = u, p = l
                }
                return [i(255 * d), f(255 * h), c(255 * p)]
            };
            var m = [.199, .687, .114];

            function y(e) {
                return m[0] * e[0] + m[1] * e[1] + m[2] * e[2]
            }

            function w(e, n, r) {
                void 0 === r && (r = .05);
                var t = v(e),
                    o = t[0] + n * r;
                return t[0] = l(o - Math.floor(o)), g(t)
            }

            function k(e, n, r) {
                void 0 === r && (r = .05);
                var t = e[0],
                    o = e[1],
                    a = e[2],
                    i = e[3],
                    f = w([t, o, a], n, r);
                return [f[0], f[1], f[2], i]
            }
            n.rgbToGrayscale = y, n.distanceRgb = function(e, n) {
                var r = e[0],
                    t = e[1],
                    o = e[2],
                    a = n[0] - r,
                    i = n[1] - t,
                    f = n[2] - o;
                return Math.sqrt(a * a + i * i + f * f)
            }, n.invertRgb = function(e) {
                return [255 - e[0], 255 - e[1], 255 - e[2]]
            }, n.darkenRgb = function(e, n) {
                var r = v(e);
                return g([r[0], r[1], h(r[2] - n / 100)])
            }, n.blendRgba = function(e, n) {
                var r = e[0],
                    t = e[1],
                    o = e[2],
                    a = e[3],
                    l = n[0],
                    s = n[1],
                    d = n[2],
                    h = n[3],
                    p = u(1 - (1 - h) * (1 - a));
                return [i(l * h / p + r * a * (1 - h) / p), f(s * h / p + t * a * (1 - h) / p), c(d * h / p + o * a * (1 - h) / p), p]
            }, n.shiftRgb = w, n.shiftRgba = k, n.shiftColor = function(e, n, r) {
                return void 0 === r && (r = .05), L(k(F(e), n, r))
            };
            var P, x, O, S, T = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dodgerblue: "#1e90ff",
                feldspar: "#d19275",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslateblue: "#8470ff",
                lightslategray: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370d8",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#d87093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                violetred: "#d02090",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            };

            function A(e, n) {
                return n in e
            }

            function $(e) {
                var n = P.re.exec(e);
                return null !== n ? P.parse(n) : null
            }

            function E(e) {
                var n = x.re.exec(e);
                return null !== n ? x.parse(n) : null
            }

            function C(e) {
                var n = O.re.exec(e);
                return null !== n ? O.parse(n) : null
            }

            function M(e) {
                var n = S.re.exec(e);
                return null !== n ? S.parse(n) : null
            }

            function L(e) {
                return "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
            }

            function R(e) {
                if (e = e.toLowerCase(), A(T, e)) {
                    var n = E(T[e]);
                    if (null !== n) return n;
                    throw new Error("Invalid named color definition")
                }
                var r = $(e);
                if (null !== r) return r;
                var t = E(e);
                if (null !== t) return t;
                var o = C(e);
                if (null !== o) return o;
                var a = M(e);
                return null !== a ? [a[0], a[1], a[2]] : null
            }

            function I(e) {
                if (e = e.toLowerCase(), A(T, e)) {
                    var n = E(T[e]);
                    if (null !== n) return [n[0], n[1], n[2], 1];
                    throw new Error("Invalid named color definition")
                }
                var r = $(e);
                if (null !== r) return [r[0], r[1], r[2], 1];
                var t = E(e);
                if (null !== t) return [t[0], t[1], t[2], 1];
                var o = C(e);
                if (null !== o) return [o[0], o[1], o[2], 1];
                var a = M(e);
                return null !== a ? a : null
            }

            function F(e) {
                var n = I(e);
                if (null !== n) return n;
                throw new Error("Passed color string does not match any of the known color representations")
            }! function(e) {
                e.re = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/, e.parse = function(e) {
                    return [i(parseInt(e[1], 10)), f(parseInt(e[2], 10)), c(parseInt(e[3], 10))]
                }
            }(P || (P = {})), n.rgbToString = function(e) {
                    return "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
                },
                function(e) {
                    e.re = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, e.parse = function(e) {
                        return [i(parseInt(e[1], 16)), f(parseInt(e[2], 16)), c(parseInt(e[3], 16))]
                    }
                }(x || (x = {})), n.rgbToHexString = function(e) {
                    var n = e[0],
                        r = e[1],
                        t = e[2],
                        o = n.toString(16),
                        a = r.toString(16),
                        i = t.toString(16);
                    return "#" + (1 === o.length ? "0" : "") + o + (1 === a.length ? "0" : "") + a + (1 === i.length ? "0" : "") + i
                },
                function(e) {
                    e.re = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/, e.parse = function(e) {
                        return [i(parseInt(e[1] + e[1], 16)), f(parseInt(e[2] + e[2], 16)), c(parseInt(e[3] + e[3], 16))]
                    }
                }(O || (O = {})),
                function(e) {
                    e.re = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/, e.parse = function(e) {
                        return [i(parseInt(e[1], 10)), f(parseInt(e[2], 10)), c(parseInt(e[3], 10)), u(parseFloat(e[4]))]
                    }
                }(S || (S = {})), n.rgbaToString = L, n.rgbToBlackWhiteString = function(e, n) {
                    if (n < 0 || n > 255) throw new Error("invalid threshold value, valid values are [0, 255]");
                    return y(e) >= n ? "white" : "black"
                }, n.tryParseRgb = R, n.parseRgb = function(e) {
                    var n = R(e);
                    if (null !== n) return n;
                    throw new Error("Passed color string does not match any of the known color representations")
                }, n.tryParseRgba = I,
                n.parseRgba = F
        },
        405043: (e, n, r) => {
            r.d(n, {
                createBrowserHistory: () => w,
                createHashHistory: () => T,
                createLocation: () => h,
                createMemoryHistory: () => $,
                createPath: () => d
            });
            var t = r(519624);

            function o(e) {
                return "/" === e.charAt(0)
            }

            function a(e, n) {
                for (var r = n, t = r + 1, o = e.length; t < o; r += 1, t += 1) e[r] = e[t];
                e.pop()
            }
            const i = function(e, n) {
                void 0 === n && (n = "");
                var r, t = e && e.split("/") || [],
                    i = n && n.split("/") || [],
                    f = e && o(e),
                    c = n && o(n),
                    u = f || c;
                if (e && o(e) ? i = t : t.length && (i.pop(), i = i.concat(t)), !i.length) return "/";
                if (i.length) {
                    var l = i[i.length - 1];
                    r = "." === l || ".." === l || "" === l
                } else r = !1;
                for (var s = 0, d = i.length; d >= 0; d--) {
                    var h = i[d];
                    "." === h ? a(i, d) : ".." === h ? (a(i, d), s++) : s && (a(i, d), s--)
                }
                if (!u)
                    for (; s--; s) i.unshift("..");
                !u || "" === i[0] || i[0] && o(i[0]) || i.unshift("");
                var p = i.join("/");
                return r && "/" !== p.substr(-1) && (p += "/"), p
            };
            var f = r(55408);

            function c(e) {
                return "/" === e.charAt(0) ? e : "/" + e
            }

            function u(e) {
                return "/" === e.charAt(0) ? e.substr(1) : e
            }

            function l(e, n) {
                return function(e, n) {
                    return 0 === e.toLowerCase().indexOf(n.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(n.length))
                }(e, n) ? e.substr(n.length) : e
            }

            function s(e) {
                return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e
            }

            function d(e) {
                var n = e.pathname,
                    r = e.search,
                    t = e.hash,
                    o = n || "/";
                return r && "?" !== r && (o += "?" === r.charAt(0) ? r : "?" + r), t && "#" !== t && (o += "#" === t.charAt(0) ? t : "#" + t), o
            }

            function h(e, n, r, o) {
                var a;
                "string" == typeof e ? (a = function(e) {
                    var n = e || "/",
                        r = "",
                        t = "",
                        o = n.indexOf("#"); - 1 !== o && (t = n.substr(o), n = n.substr(0, o));
                    var a = n.indexOf("?");
                    return -1 !== a && (r = n.substr(a), n = n.substr(0, a)), {
                        pathname: n,
                        search: "?" === r ? "" : r,
                        hash: "#" === t ? "" : t
                    }
                }(e), a.state = n) : (void 0 === (a = (0, t.default)({}, e)).pathname && (a.pathname = ""), a.search ? "?" !== a.search.charAt(0) && (a.search = "?" + a.search) : a.search = "", a.hash ? "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash) : a.hash = "", void 0 !== n && void 0 === a.state && (a.state = n));
                try {
                    a.pathname = decodeURI(a.pathname)
                } catch (e) {
                    throw e instanceof URIError ? new URIError('Pathname "' + a.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : e
                }
                return r && (a.key = r), o ? a.pathname ? "/" !== a.pathname.charAt(0) && (a.pathname = i(a.pathname, o.pathname)) : a.pathname = o.pathname : a.pathname || (a.pathname = "/"), a
            }

            function p() {
                var e = null;
                var n = [];
                return {
                    setPrompt: function(n) {
                        return e = n,
                            function() {
                                e === n && (e = null)
                            }
                    },
                    confirmTransitionTo: function(n, r, t, o) {
                        if (null != e) {
                            var a = "function" == typeof e ? e(n, r) : e;
                            "string" == typeof a ? "function" == typeof t ? t(a, o) : o(!0) : o(!1 !== a)
                        } else o(!0)
                    },
                    appendListener: function(e) {
                        var r = !0;

                        function t() {
                            r && e.apply(void 0, arguments)
                        }
                        return n.push(t),
                            function() {
                                r = !1, n = n.filter((function(e) {
                                    return e !== t
                                }))
                            }
                    },
                    notifyListeners: function() {
                        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                        n.forEach((function(e) {
                            return e.apply(void 0, r)
                        }))
                    }
                }
            }
            var v = !("undefined" == typeof window || !window.document || !window.document.createElement);

            function b(e, n) {
                n(window.confirm(e))
            }
            var g = "popstate",
                m = "hashchange";

            function y() {
                try {
                    return window.history.state || {}
                } catch (e) {
                    return {}
                }
            }

            function w(e) {
                void 0 === e && (e = {}), v || (0, f.default)(!1);
                var n, r = window.history,
                    o = (-1 === (n = window.navigator.userAgent).indexOf("Android 2.") && -1 === n.indexOf("Android 4.0") || -1 === n.indexOf("Mobile Safari") || -1 !== n.indexOf("Chrome") || -1 !== n.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
                    a = !(-1 === window.navigator.userAgent.indexOf("Trident")),
                    i = e,
                    u = i.forceRefresh,
                    w = void 0 !== u && u,
                    k = i.getUserConfirmation,
                    P = void 0 === k ? b : k,
                    x = i.keyLength,
                    O = void 0 === x ? 6 : x,
                    S = e.basename ? s(c(e.basename)) : "";

                function T(e) {
                    var n = e || {},
                        r = n.key,
                        t = n.state,
                        o = window.location,
                        a = o.pathname + o.search + o.hash;
                    return S && (a = l(a, S)), h(a, t, r)
                }

                function A() {
                    return Math.random().toString(36).substr(2, O)
                }
                var $ = p();

                function E(e) {
                    (0, t.default)(U, e), U.length = r.length, $.notifyListeners(U.location, U.action)
                }

                function C(e) {
                    (function(e) {
                        return void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
                    })(e) || R(T(e.state))
                }

                function M() {
                    R(T(y()))
                }
                var L = !1;

                function R(e) {
                    if (L) L = !1, E();
                    else {
                        $.confirmTransitionTo(e, "POP", P, (function(n) {
                            n ? E({
                                action: "POP",
                                location: e
                            }) : function(e) {
                                var n = U.location,
                                    r = F.indexOf(n.key); - 1 === r && (r = 0);
                                var t = F.indexOf(e.key); - 1 === t && (t = 0);
                                var o = r - t;
                                o && (L = !0, j(o))
                            }(e)
                        }))
                    }
                }
                var I = T(y()),
                    F = [I.key];

                function H(e) {
                    return S + d(e)
                }

                function j(e) {
                    r.go(e)
                }
                var q = 0;

                function N(e) {
                    1 === (q += e) && 1 === e ? (window.addEventListener(g, C), a && window.addEventListener(m, M)) : 0 === q && (window.removeEventListener(g, C), a && window.removeEventListener(m, M))
                }
                var z = !1;
                var U = {
                    length: r.length,
                    action: "POP",
                    location: I,
                    createHref: H,
                    push: function(e, n) {
                        var t = "PUSH",
                            a = h(e, n, A(), U.location);
                        $.confirmTransitionTo(a, t, P, (function(e) {
                            if (e) {
                                var n = H(a),
                                    i = a.key,
                                    f = a.state;
                                if (o)
                                    if (r.pushState({
                                            key: i,
                                            state: f
                                        }, null, n), w) window.location.href = n;
                                    else {
                                        var c = F.indexOf(U.location.key),
                                            u = F.slice(0, c + 1);
                                        u.push(a.key), F = u, E({
                                            action: t,
                                            location: a
                                        })
                                    }
                                else window.location.href = n
                            }
                        }))
                    },
                    replace: function(e, n) {
                        var t = "REPLACE",
                            a = h(e, n, A(), U.location);
                        $.confirmTransitionTo(a, t, P, (function(e) {
                            if (e) {
                                var n = H(a),
                                    i = a.key,
                                    f = a.state;
                                if (o)
                                    if (r.replaceState({
                                            key: i,
                                            state: f
                                        }, null, n), w) window.location.replace(n);
                                    else {
                                        var c = F.indexOf(U.location.key); - 1 !== c && (F[c] = a.key), E({
                                            action: t,
                                            location: a
                                        })
                                    }
                                else window.location.replace(n)
                            }
                        }))
                    },
                    go: j,
                    goBack: function() {
                        j(-1)
                    },
                    goForward: function() {
                        j(1)
                    },
                    block: function(e) {
                        void 0 === e && (e = !1);
                        var n = $.setPrompt(e);
                        return z || (N(1), z = !0),
                            function() {
                                return z && (z = !1, N(-1)), n()
                            }
                    },
                    listen: function(e) {
                        var n = $.appendListener(e);
                        return N(1),
                            function() {
                                N(-1), n()
                            }
                    }
                };
                return U
            }
            var k = "hashchange",
                P = {
                    hashbang: {
                        encodePath: function(e) {
                            return "!" === e.charAt(0) ? e : "!/" + u(e)
                        },
                        decodePath: function(e) {
                            return "!" === e.charAt(0) ? e.substr(1) : e
                        }
                    },
                    noslash: {
                        encodePath: u,
                        decodePath: c
                    },
                    slash: {
                        encodePath: c,
                        decodePath: c
                    }
                };

            function x(e) {
                var n = e.indexOf("#");
                return -1 === n ? e : e.slice(0, n)
            }

            function O() {
                var e = window.location.href,
                    n = e.indexOf("#");
                return -1 === n ? "" : e.substring(n + 1)
            }

            function S(e) {
                window.location.replace(x(window.location.href) + "#" + e)
            }

            function T(e) {
                void 0 === e && (e = {}), v || (0, f.default)(!1);
                var n = window.history,
                    r = (window.navigator.userAgent.indexOf("Firefox"),
                        e),
                    o = r.getUserConfirmation,
                    a = void 0 === o ? b : o,
                    i = r.hashType,
                    u = void 0 === i ? "slash" : i,
                    g = e.basename ? s(c(e.basename)) : "",
                    m = P[u],
                    y = m.encodePath,
                    w = m.decodePath;

                function T() {
                    var e = w(O());
                    return g && (e = l(e, g)), h(e)
                }
                var A = p();

                function $(e) {
                    (0, t.default)(z, e), z.length = n.length, A.notifyListeners(z.location, z.action)
                }
                var E = !1,
                    C = null;

                function M() {
                    var e, n, r = O(),
                        t = y(r);
                    if (r !== t) S(t);
                    else {
                        var o = T(),
                            i = z.location;
                        if (!E && (n = o, (e = i).pathname === n.pathname && e.search === n.search && e.hash === n.hash)) return;
                        if (C === d(o)) return;
                        C = null,
                            function(e) {
                                if (E) E = !1, $();
                                else {
                                    var n = "POP";
                                    A.confirmTransitionTo(e, n, a, (function(r) {
                                        r ? $({
                                            action: n,
                                            location: e
                                        }) : function(e) {
                                            var n = z.location,
                                                r = F.lastIndexOf(d(n)); - 1 === r && (r = 0);
                                            var t = F.lastIndexOf(d(e)); - 1 === t && (t = 0);
                                            var o = r - t;
                                            o && (E = !0, H(o))
                                        }(e)
                                    }))
                                }
                            }(o)
                    }
                }
                var L = O(),
                    R = y(L);
                L !== R && S(R);
                var I = T(),
                    F = [d(I)];

                function H(e) {
                    n.go(e)
                }
                var j = 0;

                function q(e) {
                    1 === (j += e) && 1 === e ? window.addEventListener(k, M) : 0 === j && window.removeEventListener(k, M)
                }
                var N = !1;
                var z = {
                    length: n.length,
                    action: "POP",
                    location: I,
                    createHref: function(e) {
                        var n = document.querySelector("base"),
                            r = "";
                        return n && n.getAttribute("href") && (r = x(window.location.href)), r + "#" + y(g + d(e))
                    },
                    push: function(e, n) {
                        var r = "PUSH",
                            t = h(e, void 0, void 0, z.location);
                        A.confirmTransitionTo(t, r, a, (function(e) {
                            if (e) {
                                var n = d(t),
                                    o = y(g + n);
                                if (O() !== o) {
                                    C = n,
                                        function(e) {
                                            window.location.hash = e
                                        }(o);
                                    var a = F.lastIndexOf(d(z.location)),
                                        i = F.slice(0, a + 1);
                                    i.push(n), F = i, $({
                                        action: r,
                                        location: t
                                    })
                                } else $()
                            }
                        }))
                    },
                    replace: function(e, n) {
                        var r = "REPLACE",
                            t = h(e, void 0, void 0, z.location);
                        A.confirmTransitionTo(t, r, a, (function(e) {
                            if (e) {
                                var n = d(t),
                                    o = y(g + n);
                                O() !== o && (C = n, S(o));
                                var a = F.indexOf(d(z.location)); - 1 !== a && (F[a] = n), $({
                                    action: r,
                                    location: t
                                })
                            }
                        }))
                    },
                    go: H,
                    goBack: function() {
                        H(-1)
                    },
                    goForward: function() {
                        H(1)
                    },
                    block: function(e) {
                        void 0 === e && (e = !1);
                        var n = A.setPrompt(e);
                        return N || (q(1), N = !0),
                            function() {
                                return N && (N = !1, q(-1)), n()
                            }
                    },
                    listen: function(e) {
                        var n = A.appendListener(e);
                        return q(1),
                            function() {
                                q(-1), n()
                            }
                    }
                };
                return z
            }

            function A(e, n, r) {
                return Math.min(Math.max(e, n), r)
            }

            function $(e) {
                void 0 === e && (e = {});
                var n = e,
                    r = n.getUserConfirmation,
                    o = n.initialEntries,
                    a = void 0 === o ? ["/"] : o,
                    i = n.initialIndex,
                    f = void 0 === i ? 0 : i,
                    c = n.keyLength,
                    u = void 0 === c ? 6 : c,
                    l = p();

                function s(e) {
                    (0, t.default)(w, e), w.length = w.entries.length, l.notifyListeners(w.location, w.action)
                }

                function v() {
                    return Math.random().toString(36).substr(2, u)
                }
                var b = A(f, 0, a.length - 1),
                    g = a.map((function(e) {
                        return h(e, void 0, "string" == typeof e ? v() : e.key || v())
                    })),
                    m = d;

                function y(e) {
                    var n = A(w.index + e, 0, w.entries.length - 1),
                        t = w.entries[n];
                    l.confirmTransitionTo(t, "POP", r, (function(e) {
                        e ? s({
                            action: "POP",
                            location: t,
                            index: n
                        }) : s()
                    }))
                }
                var w = {
                    length: g.length,
                    action: "POP",
                    location: g[b],
                    index: b,
                    entries: g,
                    createHref: m,
                    push: function(e, n) {
                        var t = "PUSH",
                            o = h(e, n, v(), w.location);
                        l.confirmTransitionTo(o, t, r, (function(e) {
                            if (e) {
                                var n = w.index + 1,
                                    r = w.entries.slice(0);
                                r.length > n ? r.splice(n, r.length - n, o) : r.push(o), s({
                                    action: t,
                                    location: o,
                                    index: n,
                                    entries: r
                                })
                            }
                        }))
                    },
                    replace: function(e, n) {
                        var t = "REPLACE",
                            o = h(e, n, v(), w.location);
                        l.confirmTransitionTo(o, t, r, (function(e) {
                            e && (w.entries[w.index] = o, s({
                                action: t,
                                location: o
                            }))
                        }))
                    },
                    go: y,
                    goBack: function() {
                        y(-1)
                    },
                    goForward: function() {
                        y(1)
                    },
                    canGo: function(e) {
                        var n = w.index + e;
                        return n >= 0 && n < w.entries.length
                    },
                    block: function(e) {
                        return void 0 === e && (e = !1), l.setPrompt(e)
                    },
                    listen: function(e) {
                        return l.appendListener(e)
                    }
                };
                return w
            }
        },
        472535: (e, n, r) => {
            var t = r(756237),
                o = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                i = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                f = {};

            function c(e) {
                return t.isMemo(e) ? i : f[e.$$typeof] || o
            }
            f[t.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, f[t.Memo] = i;
            var u = Object.defineProperty,
                l = Object.getOwnPropertyNames,
                s = Object.getOwnPropertySymbols,
                d = Object.getOwnPropertyDescriptor,
                h = Object.getPrototypeOf,
                p = Object.prototype;
            e.exports = function e(n, r, t) {
                if ("string" != typeof r) {
                    if (p) {
                        var o = h(r);
                        o && o !== p && e(n, o, t)
                    }
                    var i = l(r);
                    s && (i = i.concat(s(r)));
                    for (var f = c(n), v = c(r), b = 0; b < i.length; ++b) {
                        var g = i[b];
                        if (!(a[g] || t && t[g] || v && v[g] || f && f[g])) {
                            var m = d(r, g);
                            try {
                                u(n, g, m)
                            } catch (e) {}
                        }
                    }
                }
                return n
            }
        },
        760198: (e, n) => {
            var r = "function" == typeof Symbol && Symbol.for,
                t = r ? Symbol.for("react.element") : 60103,
                o = r ? Symbol.for("react.portal") : 60106,
                a = r ? Symbol.for("react.fragment") : 60107,
                i = r ? Symbol.for("react.strict_mode") : 60108,
                f = r ? Symbol.for("react.profiler") : 60114,
                c = r ? Symbol.for("react.provider") : 60109,
                u = r ? Symbol.for("react.context") : 60110,
                l = r ? Symbol.for("react.async_mode") : 60111,
                s = r ? Symbol.for("react.concurrent_mode") : 60111,
                d = r ? Symbol.for("react.forward_ref") : 60112,
                h = r ? Symbol.for("react.suspense") : 60113,
                p = r ? Symbol.for("react.suspense_list") : 60120,
                v = r ? Symbol.for("react.memo") : 60115,
                b = r ? Symbol.for("react.lazy") : 60116,
                g = r ? Symbol.for("react.block") : 60121,
                m = r ? Symbol.for("react.fundamental") : 60117,
                y = r ? Symbol.for("react.responder") : 60118,
                w = r ? Symbol.for("react.scope") : 60119;

            function k(e) {
                if ("object" == typeof e && null !== e) {
                    var n = e.$$typeof;
                    switch (n) {
                        case t:
                            switch (e = e.type) {
                                case l:
                                case s:
                                case a:
                                case f:
                                case i:
                                case h:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case u:
                                        case d:
                                        case b:
                                        case v:
                                        case c:
                                            return e;
                                        default:
                                            return n
                                    }
                            }
                        case o:
                            return n
                    }
                }
            }

            function P(e) {
                return k(e) === s
            }
            n.AsyncMode = l, n.ConcurrentMode = s, n.ContextConsumer = u, n.ContextProvider = c, n.Element = t, n.ForwardRef = d, n.Fragment = a, n.Lazy = b, n.Memo = v, n.Portal = o, n.Profiler = f, n.StrictMode = i, n.Suspense = h, n.isAsyncMode = function(e) {
                return P(e) || k(e) === l
            }, n.isConcurrentMode = P, n.isContextConsumer = function(e) {
                return k(e) === u
            }, n.isContextProvider = function(e) {
                return k(e) === c
            }, n.isElement = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === t
            }, n.isForwardRef = function(e) {
                return k(e) === d
            }, n.isFragment = function(e) {
                return k(e) === a
            }, n.isLazy = function(e) {
                return k(e) === b
            }, n.isMemo = function(e) {
                return k(e) === v
            }, n.isPortal = function(e) {
                return k(e) === o
            }, n.isProfiler = function(e) {
                return k(e) === f
            }, n.isStrictMode = function(e) {
                return k(e) === i
            }, n.isSuspense = function(e) {
                return k(e) === h
            }, n.isValidElementType = function(e) {
                return "string" == typeof e || "function" == typeof e || e === a || e === s || e === f || e === i || e === h || e === p || "object" == typeof e && null !== e && (e.$$typeof === b || e.$$typeof === v || e.$$typeof === c || e.$$typeof === u || e.$$typeof === d || e.$$typeof === m || e.$$typeof === y || e.$$typeof === w || e.$$typeof === g)
            }, n.typeOf = k
        },
        756237: (e, n, r) => {
            e.exports = r(760198)
        },
        55408: (e, n, r) => {
            r.d(n, {
                default: () => o
            });
            var t = "Invariant failed";

            function o(e, n) {
                if (!e) throw new Error(t)
            }
        },
        519624: (e, n, r) => {
            function t() {
                return t = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
                    }
                    return e
                }, t.apply(this, arguments)
            }
            r.d(n, {
                default: () => t
            })
        },
        20042: (e, n, r) => {
            function t(e, n) {
                if (null == e) return {};
                var r, t, o = {},
                    a = Object.keys(e);
                for (t = 0; t < a.length; t++) r = a[t], n.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }
            r.d(n, {
                default: () => t
            })
        }
    }
]);