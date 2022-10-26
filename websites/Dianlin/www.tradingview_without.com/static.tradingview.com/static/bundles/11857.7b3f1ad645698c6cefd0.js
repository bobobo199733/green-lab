"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [11857], {
        311857: (t, i, s) => {
            s.d(i, {
                ColorType: () => ls,
                CrosshairMode: () => tt,
                LastPriceAnimationMode: () => ns,
                LineStyle: () => n,
                MismatchDirection: () => yi,
                PriceLineSource: () => rs,
                PriceScaleMode: () => ji,
                createChart: () => Jh,
                isBusinessDay: () => vs
            });
            var h = {
                allowDownsampling: !0
            };
            var e, n, r, l = function() {
                function t(t, i) {
                    var s = this;
                    this._resolutionMediaQueryList = null, this._resolutionListener = function(t) {
                        return s._onResolutionChanged()
                    }, this._canvasConfiguredListeners = [], this.canvas = t, this._canvasSize = {
                        width: this.canvas.clientWidth,
                        height: this.canvas.clientHeight
                    }, this._options = i, this._configureCanvas(), this._installResolutionListener()
                }
                return t.prototype.destroy = function() {
                    this._canvasConfiguredListeners.length = 0, this._uninstallResolutionListener(), this.canvas = null
                }, Object.defineProperty(t.prototype, "canvasSize", {
                    get: function() {
                        return {
                            width: this._canvasSize.width,
                            height: this._canvasSize.height
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.resizeCanvas = function(t) {
                    this._canvasSize = {
                        width: t.width,
                        height: t.height
                    }, this._configureCanvas()
                }, Object.defineProperty(t.prototype, "pixelRatio", {
                    get: function() {
                        var t = this.canvas.ownerDocument.defaultView;
                        if (null == t) throw new Error("No window is associated with the canvas");
                        return t.devicePixelRatio > 1 || this._options.allowDownsampling ? t.devicePixelRatio : 1
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.subscribeCanvasConfigured = function(t) {
                    this._canvasConfiguredListeners.push(t)
                }, t.prototype.unsubscribeCanvasConfigured = function(t) {
                    this._canvasConfiguredListeners = this._canvasConfiguredListeners.filter((function(i) {
                        return i != t
                    }))
                }, t.prototype._configureCanvas = function() {
                    var t = this.pixelRatio;
                    this.canvas.style.width = this._canvasSize.width + "px", this.canvas.style.height = this._canvasSize.height + "px", this.canvas.width = this._canvasSize.width * t, this.canvas.height = this._canvasSize.height * t, this._emitCanvasConfigured()
                }, t.prototype._emitCanvasConfigured = function() {
                    var t = this;
                    this._canvasConfiguredListeners.forEach((function(i) {
                        return i.call(t)
                    }))
                }, t.prototype._installResolutionListener = function() {
                    if (null !== this._resolutionMediaQueryList) throw new Error("Resolution listener is already installed");
                    var t = this.canvas.ownerDocument.defaultView;
                    if (null == t) throw new Error("No window is associated with the canvas");
                    var i = t.devicePixelRatio;
                    this._resolutionMediaQueryList = t.matchMedia("all and (resolution: " + i + "dppx)"), this._resolutionMediaQueryList.addListener(this._resolutionListener)
                }, t.prototype._uninstallResolutionListener = function() {
                    null !== this._resolutionMediaQueryList && (this._resolutionMediaQueryList.removeListener(this._resolutionListener), this._resolutionMediaQueryList = null)
                }, t.prototype._reinstallResolutionListener = function() {
                    this._uninstallResolutionListener(), this._installResolutionListener()
                }, t.prototype._onResolutionChanged = function() {
                    this._configureCanvas(), this._reinstallResolutionListener()
                }, t
            }();

            function o(t, i) {
                const s = {
                    0: [],
                    1: [t.lineWidth, t.lineWidth],
                    2: [2 * t.lineWidth, 2 * t.lineWidth],
                    3: [6 * t.lineWidth, 6 * t.lineWidth],
                    4: [t.lineWidth, 4 * t.lineWidth]
                }[i];
                t.setLineDash(s)
            }

            function a(t, i, s, h) {
                t.beginPath();
                const e = t.lineWidth % 2 ? .5 : 0;
                t.moveTo(s, i + e), t.lineTo(h, i + e), t.stroke()
            }

            function u(t, i) {
                if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""))
            }

            function c(t) {
                if (void 0 === t) throw new Error("Value is undefined");
                return t
            }

            function f(t) {
                if (null === t) throw new Error("Value is null");
                return t
            }

            function d(t) {
                return f(c(t))
            }(r = e || (e = {}))[r.Simple = 0] = "Simple", r[r.WithSteps = 1] = "WithSteps", r[r.Curved = 2] = "Curved",
                function(t) {
                    t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed", t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted"
                }(n || (n = {}));
            const v = {
                khaki: "#f0e68c",
                azure: "#f0ffff",
                aliceblue: "#f0f8ff",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gainsboro: "#dcdcdc",
                gray: "#808080",
                green: "#008000",
                honeydew: "#f0fff0",
                floralwhite: "#fffaf0",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lemonchiffon: "#fffacd",
                hotpink: "#ff69b4",
                lightyellow: "#ffffe0",
                greenyellow: "#adff2f",
                lightgoldenrodyellow: "#fafad2",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                lightcyan: "#e0ffff",
                magenta: "#f0f",
                maroon: "#800000",
                olive: "#808000",
                orange: "#ffa500",
                oldlace: "#fdf5e6",
                mediumblue: "#0000cd",
                transparent: "#0000",
                lime: "#0f0",
                lightpink: "#ffb6c1",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                midnightblue: "#191970",
                orchid: "#da70d6",
                mediumorchid: "#ba55d3",
                mediumturquoise: "#48d1cc",
                orangered: "#ff4500",
                royalblue: "#4169e1",
                powderblue: "#b0e0e6",
                red: "#f00",
                coral: "#ff7f50",
                turquoise: "#40e0d0",
                white: "#fff",
                whitesmoke: "#f5f5f5",
                wheat: "#f5deb3",
                teal: "#008080",
                steelblue: "#4682b4",
                bisque: "#ffe4c4",
                aquamarine: "#7fffd4",
                aqua: "#0ff",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                springgreen: "#00ff7f",
                antiquewhite: "#faebd7",
                burlywood: "#deb887",
                brown: "#a52a2a",
                beige: "#f5f5dc",
                chocolate: "#d2691e",
                chartreuse: "#7fff00",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cadetblue: "#5f9ea0",
                tomato: "#ff6347",
                fuchsia: "#f0f",
                blue: "#00f",
                salmon: "#fa8072",
                blanchedalmond: "#ffebcd",
                slateblue: "#6a5acd",
                slategray: "#708090",
                thistle: "#d8bfd8",
                tan: "#d2b48c",
                cyan: "#0ff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                blueviolet: "#8a2be2",
                black: "#000",
                darkmagenta: "#8b008b",
                darkslateblue: "#483d8b",
                darkkhaki: "#bdb76b",
                darkorchid: "#9932cc",
                darkorange: "#ff8c00",
                darkgreen: "#006400",
                darkred: "#8b0000",
                dodgerblue: "#1e90ff",
                darkslategray: "#2f4f4f",
                dimgray: "#696969",
                deepskyblue: "#00bfff",
                firebrick: "#b22222",
                forestgreen: "#228b22",
                indigo: "#4b0082",
                ivory: "#fffff0",
                lavenderblush: "#fff0f5",
                feldspar: "#d19275",
                indianred: "#cd5c5c",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightskyblue: "#87cefa",
                lightslategray: "#789",
                lightslateblue: "#8470ff",
                snow: "#fffafa",
                lightseagreen: "#20b2aa",
                lightsalmon: "#ffa07a",
                darksalmon: "#e9967a",
                darkviolet: "#9400d3",
                mediumpurple: "#9370d8",
                mediumaquamarine: "#66cdaa",
                skyblue: "#87ceeb",
                lavender: "#e6e6fa",
                lightsteelblue: "#b0c4de",
                mediumvioletred: "#c71585",
                mintcream: "#f5fffa",
                navajowhite: "#ffdead",
                navy: "#000080",
                olivedrab: "#6b8e23",
                palevioletred: "#d87093",
                violetred: "#d02090",
                yellow: "#ff0",
                yellowgreen: "#9acd32",
                lawngreen: "#7cfc00",
                pink: "#ffc0cb",
                paleturquoise: "#afeeee",
                palegoldenrod: "#eee8aa",
                darkolivegreen: "#556b2f",
                darkseagreen: "#8fbc8f",
                darkturquoise: "#00ced1",
                peachpuff: "#ffdab9",
                deeppink: "#ff1493",
                violet: "#ee82ee",
                palegreen: "#98fb98",
                mediumseagreen: "#3cb371",
                peru: "#cd853f",
                saddlebrown: "#8b4513",
                sandybrown: "#f4a460",
                rosybrown: "#bc8f8f",
                purple: "#800080",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                papayawhip: "#ffefd5",
                mediumslateblue: "#7b68ee",
                plum: "#dda0dd",
                mediumspringgreen: "#00fa9a"
            };

            function p(t) {
                return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0
            }

            function m(t) {
                return t <= 0 || t > 0 ? t < 0 ? 0 : t > 1 ? 1 : Math.round(1e4 * t) / 1e4 : 0
            }
            const g = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
                b = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
                M = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
                w = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;

            function y(t) {
                (t = t.toLowerCase()) in v && (t = v[t]); {
                    const i = w.exec(t) || M.exec(t);
                    if (i) return [p(parseInt(i[1], 10)), p(parseInt(i[2], 10)), p(parseInt(i[3], 10)), m(i.length < 5 ? 1 : parseFloat(i[4]))]
                } {
                    const i = b.exec(t);
                    if (i) return [p(parseInt(i[1], 16)), p(parseInt(i[2], 16)), p(parseInt(i[3], 16)), 1]
                } {
                    const i = g.exec(t);
                    if (i) return [p(17 * parseInt(i[1], 16)), p(17 * parseInt(i[2], 16)), p(17 * parseInt(i[3], 16)), 1]
                }
                throw new Error(`Cannot parse color: ${t}`)
            }

            function _(t) {
                const i = y(t);
                return {
                    t: `rgb(${i[0]}, ${i[1]}, ${i[2]})`,
                    i: (s = i, .199 * s[0] + .687 * s[1] + .114 * s[2] > 160 ? "black" : "white")
                };
                var s
            }
            class C {
                constructor() {
                    this.h = []
                }
                l(t, i, s) {
                    const h = {
                        o: t,
                        _: i,
                        u: !0 === s
                    };
                    this.h.push(h)
                }
                p(t) {
                    const i = this.h.findIndex((i => t === i.o));
                    i > -1 && this.h.splice(i, 1)
                }
                v(t) {
                    this.h = this.h.filter((i => i._ !== t))
                }
                m(t, i) {
                    const s = [...this.h];
                    this.h = this.h.filter((t => !t.u)), s.forEach((s => s.o(t, i)))
                }
                g() {
                    return this.h.length > 0
                }
                M() {
                    this.h = []
                }
            }

            function S(t, ...i) {
                for (const s of i)
                    for (const i in s) void 0 !== s[i] && ("object" != typeof s[i] || void 0 === t[i] ? t[i] = s[i] : S(t[i], s[i]));
                return t
            }

            function N(t) {
                return "number" == typeof t && isFinite(t)
            }

            function T(t) {
                return "number" == typeof t && t % 1 == 0
            }

            function x(t) {
                return "string" == typeof t
            }

            function E(t) {
                return "boolean" == typeof t
            }

            function z(t) {
                const i = t;
                if (!i || "object" != typeof i) return i;
                let s, h, e;
                for (h in s = Array.isArray(i) ? [] : {}, i) i.hasOwnProperty(h) && (e = i[h], s[h] = e && "object" == typeof e ? z(e) : e);
                return s
            }

            function k(t) {
                return null !== t
            }

            function L(t) {
                return null === t ? void 0 : t
            }
            const O = "'Trebuchet MS', Roboto, Ubuntu, sans-serif";

            function I(t, i, s) {
                return void 0 === i && (i = O), `${s=void 0!==s?`${s} `:""}${t}px ${i}`
            }
            class B {
                constructor(t) {
                    this.S = {
                        k: 1,
                        C: 4,
                        T: NaN,
                        P: "",
                        D: "",
                        O: "",
                        N: 0,
                        R: 0,
                        A: 0,
                        I: 0,
                        L: 0
                    }, this.V = t
                }
                B() {
                    const t = this.S,
                        i = this.F(),
                        s = this.W();
                    return t.T === i && t.D === s || (t.T = i, t.D = s, t.P = I(i, s), t.I = Math.floor(i / 3.5), t.N = t.I, t.R = Math.max(Math.ceil(i / 2 - t.C / 2), 0), t.A = Math.ceil(i / 2 + t.C / 2), t.L = Math.round(i / 10)), t.O = this.j(), this.S
                }
                j() {
                    return this.V.B().layout.textColor
                }
                F() {
                    return this.V.B().layout.fontSize
                }
                W() {
                    return this.V.B().layout.fontFamily
                }
            }
            class R {
                constructor() {
                    this.$ = []
                }
                H(t) {
                    this.$ = t
                }
                U(t, i, s, h) {
                    this.$.forEach((e => {
                        t.save(), e.U(t, i, s, h), t.restore()
                    }))
                }
            }
            class V {
                U(t, i, s, h) {
                    t.save(), t.scale(i, i), this.q(t, s, h), t.restore()
                }
                Y(t, i, s, h) {
                    t.save(), t.scale(i, i),
                        this.X(t, s, h), t.restore()
                }
                X(t, i, s) {}
            }
            class P extends V {
                constructor() {
                    super(...arguments), this.K = null
                }
                Z(t) {
                    this.K = t
                }
                q(t) {
                    if (null === this.K || null === this.K.G) return;
                    const i = this.K.G,
                        s = this.K,
                        h = h => {
                            t.beginPath();
                            for (let e = i.to - 1; e >= i.from; --e) {
                                const i = s.J[e];
                                t.moveTo(i.tt, i.it), t.arc(i.tt, i.it, h, 0, 2 * Math.PI)
                            }
                            t.fill()
                        };
                    t.fillStyle = s.st, h(s.nt + 2), t.fillStyle = s.et, h(s.nt)
                }
            }

            function J() {
                return {
                    J: [{
                        tt: 0,
                        it: 0,
                        rt: 0,
                        ht: 0
                    }],
                    et: "",
                    st: "",
                    nt: 0,
                    G: null
                }
            }
            const F = {
                from: 0,
                to: 1
            };
            class D {
                constructor(t, i) {
                    this.lt = new R, this.ot = [], this._t = [], this.ut = !0, this.V = t, this.ct = i, this.lt.H(this.ot)
                }
                dt(t) {
                    const i = this.V.ft();
                    i.length !== this.ot.length && (this._t = i.map(J), this.ot = this._t.map((t => {
                        const i = new P;
                        return i.Z(t), i
                    })), this.lt.H(this.ot)), this.ut = !0
                }
                vt(t, i, s) {
                    return this.ut && (this.wt(t), this.ut = !1), this.lt
                }
                wt(t) {
                    const i = this.V.ft(),
                        s = this.ct.bt(),
                        h = this.V.gt();
                    i.forEach(((i, e) => {
                        var n;
                        const r = this._t[e],
                            l = i.Mt(s);
                        if (null === l || !i.St()) return void(r.G = null);
                        const o = f(i.yt());
                        r.et = l.kt, r.nt = l.nt, r.J[0].ht = l.ht, r.J[0].it = i.Ct().xt(l.ht, o.Tt), r.st = null !== (n = l.Pt) && void 0 !== n ? n : this.V.Dt(r.J[0].it / t), r.J[0].rt = s, r.J[0].tt = h.Ot(s), r.G = F
                    }))
                }
            }
            class U {
                constructor(t) {
                    this.Nt = t
                }
                U(t, i, s, h) {
                    if (null === this.Nt) return;
                    const e = this.Nt.Rt.St,
                        n = this.Nt.At.St;
                    if (!e && !n) return;
                    t.save();
                    const r = Math.round(this.Nt.tt * i),
                        l = Math.round(this.Nt.it * i),
                        u = Math.ceil(this.Nt.Et * i),
                        c = Math.ceil(this.Nt.It * i);
                    t.lineCap = "butt", e && r >= 0 && (t.lineWidth = Math.floor(this.Nt.Rt.Lt * i), t.strokeStyle = this.Nt.Rt.O, t.fillStyle = this.Nt.Rt.O, o(t, this.Nt.Rt.Vt), function(t, i, s, h) {
                        t.beginPath();
                        const e = t.lineWidth % 2 ? .5 : 0;
                        t.moveTo(i + e, 0), t.lineTo(i + e, h), t.stroke()
                    }(t, r, 0, c)), n && l >= 0 && (t.lineWidth = Math.floor(this.Nt.At.Lt * i), t.strokeStyle = this.Nt.At.O, t.fillStyle = this.Nt.At.O, o(t, this.Nt.At.Vt), a(t, l, 0, u)), t.restore()
                }
            }
            class j {
                constructor(t) {
                    this.ut = !0, this.Bt = {
                        Rt: {
                            Lt: 1,
                            Vt: 0,
                            O: "",
                            St: !1
                        },
                        At: {
                            Lt: 1,
                            Vt: 0,
                            O: "",
                            St: !1
                        },
                        Et: 0,
                        It: 0,
                        tt: 0,
                        it: 0
                    }, this.Ft = new U(this.Bt), this.zt = t
                }
                dt() {
                    this.ut = !0
                }
                vt(t, i) {
                    return this.ut && (this.wt(), this.ut = !1), this.Ft
                }
                wt() {
                    const t = this.zt.St(),
                        i = f(this.zt.Wt()),
                        s = i.jt().B().crosshair,
                        h = this.Bt;
                    h.At.St = t && this.zt.$t(i), h.Rt.St = t && this.zt.Ht(), h.At.Lt = s.horzLine.width, h.At.Vt = s.horzLine.style, h.At.O = s.horzLine.color, h.Rt.Lt = s.vertLine.width, h.Rt.Vt = s.vertLine.style, h.Rt.O = s.vertLine.color, h.Et = i.Ut(), h.It = i.qt(), h.tt = this.zt.Yt(), h.it = this.zt.Xt()
                }
            }

            function A(t, i, s, h, e, n) {
                t.fillRect(i + n, s, h - 2 * n, n), t.fillRect(i + n, s + e - n, h - 2 * n, n), t.fillRect(i, s, n, e), t.fillRect(i + h - n, s, n, e)
            }

            function q(t, i, s) {
                t.save(), t.scale(i, i), s(), t.restore()
            }

            function W(t, i, s, h, e, n) {
                t.save(), t.globalCompositeOperation = "copy", t.fillStyle = n, t.fillRect(i, s, h, e), t.restore()
            }

            function G(t, i, s, h, e, n, r) {
                t.save(), t.globalCompositeOperation = "copy";
                const l = t.createLinearGradient(0, 0, 0, e);
                l.addColorStop(0, n), l.addColorStop(1, r), t.fillStyle = l, t.fillRect(i, s, h, e), t.restore()
            }
            class K {
                constructor(t, i) {
                    this.Z(t, i)
                }
                Z(t, i) {
                    this.Nt = t, this.Kt = i
                }
                U(t, i, s, h, e, n) {
                    if (!this.Nt.St) return;
                    t.font = i.P;
                    const r = this.Nt.Zt || !this.Nt.Gt ? i.C : 0,
                        l = i.k,
                        o = i.I,
                        a = i.N,
                        u = i.R,
                        c = i.A,
                        f = this.Nt.Jt,
                        d = Math.ceil(s.Qt(t, f)),
                        v = i.L,
                        p = i.T + o + a,
                        m = Math.ceil(.5 * p),
                        g = l + d + u + c + r;
                    let b = this.Kt.ti;
                    this.Kt.ii && (b = this.Kt.ii), b = Math.round(b);
                    const M = b - m,
                        w = M + p,
                        y = "right" === e,
                        _ = y ? h : 0,
                        C = Math.ceil(h * n);
                    let S, N, T = _;
                    if (t.fillStyle = this.Kt.t, t.lineWidth = 1, t.lineCap = "butt", f) {
                        y ? (T = _ - g, S = _ - r, N = T + c) : (T = _ + g, S = _ + r, N = _ + l + r + u);
                        const i = Math.max(1, Math.floor(n)),
                            s = Math.max(1, Math.floor(l * n)),
                            h = y ? C : 0,
                            e = Math.round(M * n),
                            o = Math.round(T * n),
                            d = Math.round(b * n) - Math.floor(.5 * n),
                            p = d + i + (d - e),
                            m = Math.round(S * n);
                        t.save(), t.beginPath(), t.moveTo(h, e), t.lineTo(o, e), t.lineTo(o, p), t.lineTo(h, p), t.fill(), t.fillStyle = this.Nt.Pt, t.fillRect(y ? C - s : 0, e, s, p - e), this.Nt.Zt && (t.fillStyle = this.Kt.O, t.fillRect(h, d, m - h, i)), t.textAlign = "left", t.fillStyle = this.Kt.O, q(t, n, (() => {
                            t.fillText(f, N, w - a - v)
                        })), t.restore()
                    }
                }
                qt(t, i) {
                    return this.Nt.St ? t.T + t.I + t.N : 0
                }
            }
            class Z {
                constructor(t) {
                    this.si = {
                        ti: 0,
                        O: "#FFF",
                        t: "#000"
                    }, this.ni = {
                        Jt: "",
                        St: !1,
                        Zt: !0,
                        Gt: !1,
                        Pt: ""
                    }, this.ei = {
                        Jt: "",
                        St: !1,
                        Zt: !1,
                        Gt: !0,
                        Pt: ""
                    }, this.ut = !0, this.ri = new(t || K)(this.ni, this.si), this.hi = new(t || K)(this.ei, this.si)
                }
                Jt() {
                    return this.li(), this.ni.Jt
                }
                ti() {
                    return this.li(), this.si.ti
                }
                dt() {
                    this.ut = !0
                }
                qt(t, i = !1) {
                    return Math.max(this.ri.qt(t, i), this.hi.qt(t, i))
                }
                ai() {
                    return this.si.ii || 0
                }
                oi(t) {
                    this.si.ii = t
                }
                _i() {
                    return this.li(), this.ni.St || this.ei.St
                }
                ui() {
                    return this.li(), this.ni.St
                }
                vt(t) {
                    return this.li(), this.ni.Zt = this.ni.Zt && t.B().ticksVisible, this.ei.Zt = this.ei.Zt && t.B().ticksVisible, this.ri.Z(this.ni, this.si), this.hi.Z(this.ei, this.si), this.ri
                }
                ci() {
                    return this.li(), this.ri.Z(this.ni, this.si), this.hi.Z(this.ei, this.si), this.hi
                }
                li() {
                    this.ut && (this.ni.Zt = !0, this.ei.Zt = !1, this.di(this.ni, this.ei, this.si))
                }
            }
            class $ extends Z {
                constructor(t, i, s) {
                    super(), this.zt = t, this.fi = i, this.pi = s
                }
                di(t, i, s) {
                    t.St = !1;
                    const h = this.zt.B().horzLine;
                    if (!h.labelVisible) return;
                    const e = this.fi.yt();
                    if (!this.zt.St() || this.fi.vi() || null === e) return;
                    const n = _(h.labelBackgroundColor);
                    s.t = n.t, s.O = n.i;
                    const r = this.pi(this.fi);
                    s.ti = r.ti, t.Jt = this.fi.mi(r.ht, e), t.St = !0
                }
            }
            const Y = /[1-9]/g;
            class H {
                constructor() {
                    this.Nt = null
                }
                Z(t) {
                    this.Nt = t
                }
                U(t, i, s) {
                    if (null === this.Nt || !1 === this.Nt.St || 0 === this.Nt.Jt.length) return;
                    t.font = i.P;
                    const h = Math.round(i.wi.Qt(t, this.Nt.Jt, Y));
                    if (h <= 0) return;
                    t.save();
                    const e = i.bi,
                        n = h + 2 * e,
                        r = n / 2,
                        l = this.Nt.Ut;
                    let o = this.Nt.ti,
                        a = Math.floor(o - r) + .5;
                    a < 0 ? (o += Math.abs(0 - a), a = Math.floor(o - r) + .5) : a + n > l && (o -= Math.abs(l - (a + n)), a = Math.floor(o - r) + .5);
                    const u = a + n,
                        c = 0 + i.k + i.I + i.T + i.N;
                    t.fillStyle = this.Nt.t;
                    const d = Math.round(a * s),
                        v = Math.round(0 * s),
                        p = Math.round(u * s),
                        m = Math.round(c * s);
                    if (t.fillRect(d, v, p - d, m - v), this.Nt.Zt) {
                        const h = Math.round(this.Nt.ti * s),
                            e = v,
                            n = Math.round((e + i.k + i.C) * s);
                        t.fillStyle = this.Nt.O;
                        const r = Math.max(1, Math.floor(s)),
                            l = Math.floor(.5 * s);
                        t.fillRect(h - l, e, r, n - e)
                    }
                    const g = c - i.L - i.N;
                    t.textAlign = "left", t.fillStyle = this.Nt.O, q(t, s, (() => {
                        t.fillText(f(this.Nt).Jt, a + e, g)
                    })), t.restore()
                }
            }
            class Q {
                constructor(t, i, s) {
                    this.ut = !0, this.Ft = new H, this.Bt = {
                        St: !1,
                        t: "#4c525e",
                        O: "white",
                        Jt: "",
                        Ut: 0,
                        ti: NaN,
                        Zt: !0
                    }, this.ct = t, this.gi = i, this.pi = s
                }
                dt() {
                    this.ut = !0
                }
                vt() {
                    return this.ut && (this.wt(), this.ut = !1), this.Ft.Z(this.Bt), this.Ft
                }
                wt() {
                    const t = this.Bt;
                    t.St = !1;
                    const i = this.ct.B().vertLine;
                    if (!i.labelVisible) return;
                    const s = this.gi.gt();
                    if (s.vi()) return;
                    t.Ut = s.Ut();
                    const h = this.pi();
                    if (!h.rt) return;
                    t.ti = h.ti;
                    const e = s.Mi(this.ct.bt());
                    t.Jt = s.Si(f(e)), t.St = !0;
                    const n = _(i.labelBackgroundColor);
                    t.t = n.t, t.O = n.i, t.Zt = s.B().ticksVisible
                }
            }
            class X {
                constructor() {
                    this.yi = null, this.ki = 0
                }
                xi() {
                    return this.ki
                }
                Ci(t) {
                    this.ki = t
                }
                Ct() {
                    return this.yi
                }
                Ti(t) {
                    this.yi = t
                }
                Pi(t) {
                    return []
                }
                Di() {
                    return []
                }
                St() {
                    return !0
                }
            }
            var tt;
            ! function(t) {
                t[t.Normal = 0] = "Normal", t[t.Magnet = 1] = "Magnet"
            }(tt || (tt = {}));
            class it extends X {
                constructor(t, i) {
                    super(), this.Oi = null, this.Ni = NaN, this.Ri = 0, this.Ai = !0, this.Ei = new Map, this.Ii = !1, this.Li = NaN, this.Vi = NaN, this.Bi = NaN, this.Fi = NaN, this.gi = t, this.zi = i, this.Wi = new D(t, this), this.ji = ((t, i) => s => {
                        const h = i(),
                            e = t();
                        if (s === f(this.Oi).$i()) return {
                            ht: e,
                            ti: h
                        }; {
                            const t = f(s.yt());
                            return {
                                ht: s.Hi(h, t),
                                ti: h
                            }
                        }
                    })((() => this.Ni), (() => this.Vi));
                    const s = ((t, i) => () => ({
                        rt: this.gi.gt().Ui(t()),
                        ti: i()
                    }))((() => this.Ri), (() => this.Yt()));
                    this.qi = new Q(this, t, s), this.Yi = new j(this)
                }
                B() {
                    return this.zi
                }
                Xi(t, i) {
                    this.Bi = t, this.Fi = i
                }
                Ki() {
                    this.Bi = NaN, this.Fi = NaN
                }
                Zi() {
                    return this.Bi
                }
                Gi() {
                    return this.Fi
                }
                Ji(t, i, s) {
                    this.Ii || (this.Ii = !0), this.Ai = !0, this.Qi(t, i, s)
                }
                bt() {
                    return this.Ri
                }
                Yt() {
                    return this.Li
                }
                Xt() {
                    return this.Vi
                }
                St() {
                    return this.Ai
                }
                ts() {
                    this.Ai = !1, this.ss(), this.Ni = NaN, this.Li = NaN, this.Vi = NaN, this.Oi = null, this.Ki()
                }
                ns(t) {
                    return null !== this.Oi ? [this.Yi, this.Wi] : []
                }
                $t(t) {
                    return t === this.Oi && this.zi.horzLine.visible
                }
                Ht() {
                    return this.zi.vertLine.visible
                }
                es(t, i) {
                    this.Ai && this.Oi === t || this.Ei.clear();
                    const s = [];
                    return this.Oi === t && s.push(this.rs(this.Ei, i, this.ji)), s
                }
                Di() {
                    return this.Ai ? [this.qi] : []
                }
                Wt() {
                    return this.Oi
                }
                hs() {
                    this.Yi.dt(), this.Ei.forEach((t => t.dt())), this.qi.dt(), this.Wi.dt()
                }
                ls(t) {
                    return t && !t.$i().vi() ? t.$i() : null
                }
                Qi(t, i, s) {
                    this.os(t, i, s) && this.hs()
                }
                os(t, i, s) {
                    const h = this.Li,
                        e = this.Vi,
                        n = this.Ni,
                        r = this.Ri,
                        l = this.Oi,
                        o = this.ls(s);
                    this.Ri = t, this.Li = isNaN(t) ? NaN : this.gi.gt().Ot(t), this.Oi = s;
                    const a = null !== o ? o.yt() : null;
                    return null !== o && null !== a ? (this.Ni = i, this.Vi = o.xt(i, a)) : (this.Ni = NaN, this.Vi = NaN), h !== this.Li || e !== this.Vi || r !== this.Ri || n !== this.Ni || l !== this.Oi
                }
                ss() {
                    const t = this.gi.ft().map((t => t.us()._s())).filter(k),
                        i = 0 === t.length ? null : Math.max(...t);
                    this.Ri = null !== i ? i : NaN
                }
                rs(t, i, s) {
                    let h = t.get(i);
                    return void 0 === h && (h = new $(this, i, s), t.set(i, h)), h
                }
            }

            function st(t) {
                return "left" === t || "right" === t
            }
            class ht {
                constructor(t) {
                    this.cs = new Map, this.ds = [], this.fs = t
                }
                ps(t, i) {
                    const s = function(t, i) {
                        return void 0 === t ? i : {
                            vs: Math.max(t.vs, i.vs),
                            ws: t.ws || i.ws
                        }
                    }(this.cs.get(t), i);
                    this.cs.set(t, s)
                }
                bs() {
                    return this.fs
                }
                gs(t) {
                    const i = this.cs.get(t);
                    return void 0 === i ? {
                        vs: this.fs
                    } : {
                        vs: Math.max(this.fs, i.vs),
                        ws: i.ws
                    }
                }
                Ms() {
                    this.ds = [{
                        Ss: 0
                    }]
                }
                ys(t) {
                    this.ds = [{
                        Ss: 1,
                        Tt: t
                    }]
                }
                ks() {
                    this.ds = [{
                        Ss: 4
                    }]
                }
                xs(t) {
                    this.ds.push({
                        Ss: 2,
                        Tt: t
                    })
                }
                Cs(t) {
                    this.ds.push({
                        Ss: 3,
                        Tt: t
                    })
                }
                Ts() {
                    return this.ds
                }
                Ps(t) {
                    for (const i of t.ds) this.Ds(i);
                    this.fs = Math.max(this.fs, t.fs), t.cs.forEach(((t, i) => {
                        this.ps(i, t)
                    }))
                }
                Ds(t) {
                    switch (t.Ss) {
                        case 0:
                            this.Ms();
                            break;
                        case 1:
                            this.ys(t.Tt);
                            break;
                        case 2:
                            this.xs(t.Tt);
                            break;
                        case 3:
                            this.Cs(t.Tt);
                            break;
                        case 4:
                            this.ks()
                    }
                }
            }

            function et(t, i) {
                if (!N(t)) return "n/a";
                if (!T(i)) throw new TypeError("invalid length");
                if (i < 0 || i > 16) throw new TypeError("invalid length");
                return 0 === i ? t.toString() : ("0000000000000000" + t.toString()).slice(-i)
            }
            class nt {
                constructor(t, i) {
                    if (i || (i = 1), N(t) && T(t) || (t = 100), t < 0) throw new TypeError("invalid base");
                    this.fi = t, this.Os = i, this.Ns()
                }
                format(t) {
                    const i = t < 0 ? "−" : "";
                    return t = Math.abs(t), i + this.Rs(t)
                }
                Ns() {
                    if (this.As = 0, this.fi > 0 && this.Os > 0) {
                        let t = this.fi;
                        for (; t > 1;) t /= 10, this.As++
                    }
                }
                Rs(t) {
                    const i = this.fi / this.Os;
                    let s = Math.floor(t),
                        h = "";
                    const e = void 0 !== this.As ? this.As : NaN;
                    if (i > 1) {
                        let n = +(Math.round(t * i) - s * i).toFixed(this.As);
                        n >= i && (n -= i, s += 1), h = "." + et(+n.toFixed(this.As) * this.Os, e)
                    } else s = Math.round(s * i) / i, e > 0 && (h = "." + et(0, e));
                    return s.toFixed(0) + h
                }
            }
            class rt extends nt {
                constructor(t = 100) {
                    super(t)
                }
                format(t) {
                    return `${super.format(t)}%`
                }
            }
            class lt {
                constructor(t) {
                    this.Es = t
                }
                format(t) {
                    let i = "";
                    return t < 0 && (i = "-", t = -t), t < 995 ? i + this.Is(t) : t < 999995 ? i + this.Is(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), i + this.Is(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), i + this.Is(t / 1e9) + "B")
                }
                Is(t) {
                    let i;
                    const s = Math.pow(10, this.Es);
                    return i = (t = Math.round(t * s) / s) >= 1e-15 && t < 1 ? t.toFixed(this.Es).replace(/\.?0+$/, "") : String(t), i.replace(/(\.[1-9]*)0+$/, ((t, i) => i))
                }
            }

            function ot(t, i, s, h) {
                if (0 === i.length) return;
                const e = i[h.from].tt,
                    n = i[h.from].it;
                t.moveTo(e, n);
                for (let e = h.from + 1; e < h.to; ++e) {
                    const h = i[e];
                    switch (s) {
                        case 0:
                            t.lineTo(h.tt, h.it);
                            break;
                        case 1:
                            t.lineTo(h.tt, i[e - 1].it), t.lineTo(h.tt, h.it);
                            break;
                        case 2:
                            {
                                const [s, n] = ct(i, e - 1, e);t.bezierCurveTo(s.tt, s.it, n.tt, n.it, h.tt, h.it);
                                break
                            }
                    }
                }
            }

            function at(t, i) {
                return {
                    tt: t.tt - i.tt,
                    it: t.it - i.it
                }
            }

            function ut(t, i) {
                return {
                    tt: t.tt / i,
                    it: t.it / i
                }
            }

            function ct(t, i, s) {
                const h = Math.max(0, i - 1),
                    e = Math.min(t.length - 1, s + 1);
                var n, r;
                return [(n = t[i], r = ut(at(t[s], t[h]), 6), {
                    tt: n.tt + r.tt,
                    it: n.it + r.it
                }), at(t[s], ut(at(t[e], t[i]), 6))]
            }
            class ft extends V {
                constructor() {
                    super(...arguments), this.K = null
                }
                Z(t) {
                    this.K = t
                }
                q(t) {
                    if (null !== this.K && 0 !== this.K.J.length && null !== this.K.G) {
                        if (t.lineCap = "butt", t.lineJoin = "round", t.lineWidth = this.K.Lt, o(t, this.K.Vt), t.lineWidth = 1, t.beginPath(), 1 === this.K.J.length) {
                            const i = this.K.J[0],
                                s = this.K.Ls / 2;
                            t.moveTo(i.tt - s, this.K.Vs), t.lineTo(i.tt - s, i.it), t.lineTo(i.tt + s, i.it), t.lineTo(i.tt + s, this.K.Vs)
                        } else t.moveTo(this.K.J[this.K.G.from].tt, this.K.Vs), t.lineTo(this.K.J[this.K.G.from].tt, this.K.J[this.K.G.from].it), ot(t, this.K.J, this.K.Bs, this.K.G), this.K.G.to > this.K.G.from && (t.lineTo(this.K.J[this.K.G.to - 1].tt, this.K.Vs), t.lineTo(this.K.J[this.K.G.from].tt, this.K.Vs));
                        t.closePath(), t.fillStyle = this.Fs(t), t.fill()
                    }
                }
            }
            class dt extends ft {
                Fs(t) {
                    const i = this.K,
                        s = t.createLinearGradient(0, 0, 0, i.zs);
                    return s.addColorStop(0, i.Ws), s.addColorStop(1, i.js), s
                }
            }
            class vt extends V {
                constructor() {
                    super(...arguments), this.K = null
                }
                Z(t) {
                    this.K = t
                }
                q(t) {
                    if (null !== this.K && 0 !== this.K.J.length && null !== this.K.G)
                        if (t.lineCap = "butt", t.lineWidth = this.K.Lt, o(t, this.K.Vt), t.strokeStyle = this.$s(t), t.lineJoin = "round", 1 === this.K.J.length) {
                            t.beginPath();
                            const i = this.K.J[0];
                            t.moveTo(i.tt - this.K.Ls / 2, i.it), t.lineTo(i.tt + this.K.Ls / 2, i.it), void 0 !== i.O && (t.strokeStyle = i.O), t.stroke()
                        } else this.Hs(t, this.K)
                }
                Hs(t, i) {
                    t.beginPath(),
                        ot(t, i.J, i.Bs, i.G), t.stroke()
                }
            }
            class pt extends vt {
                Hs(t, i) {
                    var s, h;
                    const {
                        J: e,
                        G: n,
                        Bs: r,
                        et: l
                    } = i;
                    if (0 === e.length || null === n) return;
                    t.beginPath();
                    const o = e[n.from];
                    t.moveTo(o.tt, o.it);
                    let a = null !== (s = o.O) && void 0 !== s ? s : l;
                    t.strokeStyle = a;
                    const u = i => {
                        t.stroke(), t.beginPath(), t.strokeStyle = i, a = i
                    };
                    for (let i = n.from + 1; i < n.to; ++i) {
                        const s = e[i],
                            n = null !== (h = s.O) && void 0 !== h ? h : l;
                        switch (r) {
                            case 0:
                                t.lineTo(s.tt, s.it);
                                break;
                            case 1:
                                t.lineTo(s.tt, e[i - 1].it), n !== a && (u(n), t.lineTo(s.tt, e[i - 1].it)), t.lineTo(s.tt, s.it);
                                break;
                            case 2:
                                {
                                    const [h, n] = ct(e, i - 1, i);t.bezierCurveTo(h.tt, h.it, n.tt, n.it, s.tt, s.it);
                                    break
                                }
                        }
                        1 !== r && n !== a && (u(n), t.moveTo(s.tt, s.it))
                    }
                    t.stroke()
                }
                $s() {
                    return this.K.et
                }
            }

            function mt(t, i, s, h = 0, e = t.length) {
                let n = e - h;
                for (; 0 < n;) {
                    const e = n >> 1,
                        r = h + e;
                    s(t[r], i) ? (h = r + 1, n -= e + 1) : n = e
                }
                return h
            }

            function gt(t, i, s, h = 0, e = t.length) {
                let n = e - h;
                for (; 0 < n;) {
                    const e = n >> 1,
                        r = h + e;
                    s(i, t[r]) ? n = e : (h = r + 1, n -= e + 1)
                }
                return h
            }

            function bt(t, i) {
                return t.rt < i
            }

            function Mt(t, i) {
                return t < i.rt
            }

            function wt(t, i, s) {
                const h = i.Us(),
                    e = i.qs(),
                    n = mt(t, h, bt),
                    r = gt(t, e, Mt);
                if (!s) return {
                    from: n,
                    to: r
                };
                let l = n,
                    o = r;
                return n > 0 && n < t.length && t[n].rt >= h && (l = n - 1), r > 0 && r < t.length && t[r - 1].rt <= e && (o = r + 1), {
                    from: l,
                    to: o
                }
            }
            class yt {
                constructor(t, i, s) {
                    this.Ys = !0, this.Xs = !0, this.Ks = !0, this.Zs = [], this.Gs = null, this.Js = t, this.Qs = i, this.tn = s
                }
                dt(t) {
                    this.Ys = !0, "data" === t && (this.Xs = !0), "options" === t && (this.Ks = !0)
                }
                sn() {
                    this.Xs && (this.nn(), this.Xs = !1), this.Ys && (this.en(), this.Ys = !1), this.Ks && (this.rn(), this.Ks = !1)
                }
                hn() {
                    this.Gs = null
                }
                en() {
                    const t = this.Js.Ct(),
                        i = this.Qs.gt();
                    if (this.hn(), i.vi() || t.vi()) return;
                    const s = i.ln();
                    if (null === s) return;
                    if (0 === this.Js.us().an()) return;
                    const h = this.Js.yt();
                    null !== h && (this.Gs = wt(this.Zs, s, this.tn), this.on(t, i, h.Tt))
                }
            }
            class _t extends yt {
                constructor(t, i) {
                    super(t, i, !0)
                }
                on(t, i, s) {
                    i._n(this.Zs, L(this.Gs)), t.un(this.Zs, s, L(this.Gs))
                }
                cn(t, i) {
                    return {
                        rt: t,
                        ht: i,
                        tt: NaN,
                        it: NaN
                    }
                }
                rn() {}
                nn() {
                    const t = this.Js.dn();
                    this.Zs = this.Js.us().fn().map((i => {
                        const s = i.Tt[3];
                        return this.pn(i.vn, s, t)
                    }))
                }
            }
            class Ct extends _t {
                constructor(t, i) {
                    super(t, i), this.Ft = new R, this.mn = new dt, this.wn = new pt, this.Ft.H([this.mn, this.wn])
                }
                vt(t, i) {
                    if (!this.Js.St()) return null;
                    const s = this.Js.B();
                    return this.sn(), this.mn.Z({
                        Bs: s.lineType,
                        J: this.Zs,
                        Vt: s.lineStyle,
                        Lt: s.lineWidth,
                        Ws: s.topColor,
                        js: s.bottomColor,
                        Vs: t,
                        zs: t,
                        G: this.Gs,
                        Ls: this.Qs.gt().bn()
                    }), this.wn.Z({
                        Bs: s.lineType,
                        J: this.Zs,
                        et: s.lineColor,
                        Vt: s.lineStyle,
                        Lt: s.lineWidth,
                        G: this.Gs,
                        Ls: this.Qs.gt().bn()
                    }), this.Ft
                }
                pn(t, i) {
                    return this.cn(t, i)
                }
            }
            class St {
                constructor() {
                    this.Nt = null, this.gn = 0, this.Mn = 0
                }
                Z(t) {
                    this.Nt = t
                }
                U(t, i, s, h) {
                    if (null === this.Nt || 0 === this.Nt.us.length || null === this.Nt.G) return;
                    this.gn = this.Sn(i), this.gn >= 2 && Math.max(1, Math.floor(i)) % 2 != this.gn % 2 && this.gn--, this.Mn = this.Nt.yn ? Math.min(this.gn, Math.floor(i)) : this.gn;
                    let e = null;
                    const n = this.Mn <= this.gn && this.Nt.bn >= Math.floor(1.5 * i);
                    for (let s = this.Nt.G.from; s < this.Nt.G.to; ++s) {
                        const h = this.Nt.us[s];
                        e !== h.O && (t.fillStyle = h.O, e = h.O);
                        const r = Math.floor(.5 * this.Mn),
                            l = Math.round(h.tt * i),
                            o = l - r,
                            a = this.Mn,
                            u = o + a - 1,
                            c = Math.min(h.kn, h.xn),
                            f = Math.max(h.kn, h.xn),
                            d = Math.round(c * i) - r,
                            v = Math.round(f * i) + r,
                            p = Math.max(v - d, this.Mn);
                        t.fillRect(o, d, a, p);
                        const m = Math.ceil(1.5 * this.gn);
                        if (n) {
                            if (this.Nt.Cn) {
                                const s = l - m;
                                let e = Math.max(d, Math.round(h.Tn * i) - r),
                                    n = e + a - 1;
                                n > d + p - 1 && (n = d + p - 1, e = n - a + 1), t.fillRect(s, e, o - s, n - e + 1)
                            }
                            const s = l + m;
                            let e = Math.max(d, Math.round(h.Pn * i) - r),
                                n = e + a - 1;
                            n > d + p - 1 && (n = d + p - 1, e = n - a + 1), t.fillRect(u + 1, e, s - u, n - e + 1)
                        }
                    }
                }
                Sn(t) {
                    const i = Math.floor(t);
                    return Math.max(i, Math.floor(function(t, i) {
                        return Math.floor(.3 * t * i)
                    }(f(this.Nt).bn, t)))
                }
            }
            class Nt extends yt {
                constructor(t, i) {
                    super(t, i, !1)
                }
                on(t, i, s) {
                    i._n(this.Zs, L(this.Gs)), t.Dn(this.Zs, s, L(this.Gs))
                }
                On(t, i, s) {
                    return {
                        rt: t,
                        Nn: i.Tt[0],
                        Rn: i.Tt[1],
                        An: i.Tt[2],
                        En: i.Tt[3],
                        tt: NaN,
                        Tn: NaN,
                        kn: NaN,
                        xn: NaN,
                        Pn: NaN
                    }
                }
                nn() {
                    const t = this.Js.dn();
                    this.Zs = this.Js.us().fn().map((i => this.pn(i.vn, i, t)))
                }
            }
            class Tt extends Nt {
                constructor() {
                    super(...arguments), this.Ft = new St
                }
                vt(t, i) {
                    if (!this.Js.St()) return null;
                    const s = this.Js.B();
                    this.sn();
                    const h = {
                        us: this.Zs,
                        bn: this.Qs.gt().bn(),
                        Cn: s.openVisible,
                        yn: s.thinBars,
                        G: this.Gs
                    };
                    return this.Ft.Z(h), this.Ft
                }
                rn() {
                    this.Zs.forEach((t => {
                        t.O = this.Js.dn().Ln(t.rt).In
                    }))
                }
                pn(t, i, s) {
                    return Object.assign(Object.assign({}, this.On(t, i, s)), {
                        O: s.Ln(t).In
                    })
                }
            }

            function xt(t, i, s) {
                return Math.min(Math.max(t, i), s)
            }

            function Et(t, i, s) {
                return i - t <= s
            }

            function zt(t) {
                return t <= 0 ? NaN : Math.log(t) / Math.log(10)
            }

            function kt(t) {
                const i = Math.ceil(t);
                return i % 2 != 0 ? i - 1 : i
            }

            function Lt(t) {
                const i = Math.ceil(t);
                return i % 2 == 0 ? i - 1 : i
            }
            class Ot extends ft {
                Fs(t) {
                    const i = this.K,
                        s = t.createLinearGradient(0, 0, 0, i.zs),
                        h = xt(i.Vs / i.zs, 0, 1);
                    return s.addColorStop(0, i.Vn), s.addColorStop(h, i.Bn), s.addColorStop(h, i.Fn), s.addColorStop(1, i.zn), s
                }
            }
            class It extends vt {
                $s(t) {
                    const i = this.K,
                        s = t.createLinearGradient(0, 0, 0, i.zs),
                        h = xt(i.Vs / i.zs, 0, 1);
                    return s.addColorStop(0, i.Ws), s.addColorStop(h, i.Ws), s.addColorStop(h, i.js), s.addColorStop(1, i.js), s
                }
            }
            class Bt extends _t {
                constructor(t, i) {
                    super(t, i), this.Wn = new Ot, this.jn = new It, this.lt = new R, this.lt.H([this.Wn, this.jn])
                }
                vt(t, i) {
                    if (!this.Js.St()) return null;
                    const s = this.Js.yt();
                    if (null === s) return null;
                    const h = this.Js.B();
                    this.sn();
                    const e = this.Js.Ct().xt(h.baseValue.price, s.Tt),
                        n = this.Qs.gt().bn();
                    return this.Wn.Z({
                        J: this.Zs,
                        Vn: h.topFillColor1,
                        Bn: h.topFillColor2,
                        Fn: h.bottomFillColor1,
                        zn: h.bottomFillColor2,
                        Lt: h.lineWidth,
                        Vt: h.lineStyle,
                        Bs: h.lineType,
                        Vs: e,
                        zs: t,
                        G: this.Gs,
                        Ls: n
                    }), this.jn.Z({
                        J: this.Zs,
                        Ws: h.topLineColor,
                        js: h.bottomLineColor,
                        Lt: h.lineWidth,
                        Vt: h.lineStyle,
                        Bs: h.lineType,
                        Vs: e,
                        zs: t,
                        G: this.Gs,
                        Ls: n
                    }), this.lt
                }
                pn(t, i) {
                    return this.cn(t, i)
                }
            }
            class Rt {
                constructor() {
                    this.Nt = null, this.gn = 0
                }
                Z(t) {
                    this.Nt = t
                }
                U(t, i, s, h) {
                    if (null === this.Nt || 0 === this.Nt.us.length || null === this.Nt.G) return;
                    this.gn = function(t, i) {
                        if (t >= 2.5 && t <= 4) return Math.floor(3 * i);
                        const s = 1 - .2 * Math.atan(Math.max(4, t) - 4) / (.5 * Math.PI),
                            h = Math.floor(t * s * i),
                            e = Math.floor(t * i),
                            n = Math.min(h, e);
                        return Math.max(Math.floor(i), n)
                    }(this.Nt.bn, i), this.gn >= 2 && Math.floor(i) % 2 != this.gn % 2 && this.gn--;
                    const e = this.Nt.us;
                    this.Nt.$n && this.Hn(t, e, this.Nt.G, i), this.Nt.Un && this.qn(t, e, this.Nt.G, this.Nt.bn, i);
                    const n = this.Yn(i);
                    (!this.Nt.Un || this.gn > 2 * n) && this.Xn(t, e, this.Nt.G, i)
                }
                Hn(t, i, s, h) {
                    if (null === this.Nt) return;
                    let e = "",
                        n = Math.min(Math.floor(h), Math.floor(this.Nt.bn * h));
                    n = Math.max(Math.floor(h), Math.min(n, this.gn));
                    const r = Math.floor(.5 * n);
                    let l = null;
                    for (let o = s.from; o < s.to; o++) {
                        const s = i[o];
                        s.Kn !== e && (t.fillStyle = s.Kn, e = s.Kn);
                        const a = Math.round(Math.min(s.Tn, s.Pn) * h),
                            u = Math.round(Math.max(s.Tn, s.Pn) * h),
                            c = Math.round(s.kn * h),
                            f = Math.round(s.xn * h);
                        let d = Math.round(h * s.tt) - r;
                        const v = d + n - 1;
                        null !== l && (d = Math.max(l + 1, d), d = Math.min(d, v));
                        const p = v - d + 1;
                        t.fillRect(d, c, p, a - c), t.fillRect(d, u + 1, p, f - u), l = v
                    }
                }
                Yn(t) {
                    let i = Math.floor(1 * t);
                    this.gn <= 2 * i && (i = Math.floor(.5 * (this.gn - 1)));
                    const s = Math.max(Math.floor(t), i);
                    return this.gn <= 2 * s ? Math.max(Math.floor(t), Math.floor(1 * t)) : s
                }
                qn(t, i, s, h, e) {
                    if (null === this.Nt) return;
                    let n = "";
                    const r = this.Yn(e);
                    let l = null;
                    for (let h = s.from; h < s.to; h++) {
                        const s = i[h];
                        s.Pt !== n && (t.fillStyle = s.Pt, n = s.Pt);
                        let o = Math.round(s.tt * e) - Math.floor(.5 * this.gn);
                        const a = o + this.gn - 1,
                            u = Math.round(Math.min(s.Tn, s.Pn) * e),
                            c = Math.round(Math.max(s.Tn, s.Pn) * e);
                        if (null !== l && (o = Math.max(l + 1, o), o = Math.min(o, a)), this.Nt.bn * e > 2 * r) A(t, o, u, a - o + 1, c - u + 1, r);
                        else {
                            const i = a - o + 1;
                            t.fillRect(o, u, i, c - u + 1)
                        }
                        l = a
                    }
                }
                Xn(t, i, s, h) {
                    if (null === this.Nt) return;
                    let e = "";
                    const n = this.Yn(h);
                    for (let r = s.from; r < s.to; r++) {
                        const s = i[r];
                        let l = Math.round(Math.min(s.Tn, s.Pn) * h),
                            o = Math.round(Math.max(s.Tn, s.Pn) * h),
                            a = Math.round(s.tt * h) - Math.floor(.5 * this.gn),
                            u = a + this.gn - 1;
                        if (s.O !== e) {
                            const i = s.O;
                            t.fillStyle = i, e = i
                        }
                        this.Nt.Un && (a += n, l += n, u -= n, o -= n), l > o || t.fillRect(a, l, u - a + 1, o - l + 1)
                    }
                }
            }
            class Vt extends Nt {
                constructor() {
                    super(...arguments), this.Ft = new Rt
                }
                vt(t, i) {
                    if (!this.Js.St()) return null;
                    const s = this.Js.B();
                    this.sn();
                    const h = {
                        us: this.Zs,
                        bn: this.Qs.gt().bn(),
                        $n: s.wickVisible,
                        Un: s.borderVisible,
                        G: this.Gs
                    };
                    return this.Ft.Z(h), this.Ft
                }
                rn() {
                    this.Zs.forEach((t => {
                        const i = this.Js.dn().Ln(t.rt);
                        t.O = i.In, t.Kn = i.Zn, t.Pt = i.Gn
                    }))
                }
                pn(t, i, s) {
                    const h = s.Ln(t);
                    return Object.assign(Object.assign({}, this.On(t, i, s)), {
                        O: h.In,
                        Kn: h.Zn,
                        Pt: h.Gn
                    })
                }
            }
            class Pt {
                constructor() {
                    this.Nt = null, this.Jn = []
                }
                Z(t) {
                    this.Nt = t, this.Jn = []
                }
                U(t, i, s, h) {
                    if (null === this.Nt || 0 === this.Nt.J.length || null === this.Nt.G) return;
                    this.Jn.length || this.Qn(i);
                    const e = Math.max(1, Math.floor(i)),
                        n = Math.round(this.Nt.te * i) - Math.floor(e / 2),
                        r = n + e;
                    for (let s = this.Nt.G.from; s < this.Nt.G.to; s++) {
                        const h = this.Nt.J[s],
                            l = this.Jn[s - this.Nt.G.from],
                            o = Math.round(h.it * i);
                        let a, u;
                        t.fillStyle = h.O, o <= n ? (a = o, u = r) : (a = n, u = o - Math.floor(e / 2) + e), t.fillRect(l.Us, a, l.qs - l.Us + 1, u - a)
                    }
                }
                Qn(t) {
                    if (null === this.Nt || 0 === this.Nt.J.length || null === this.Nt.G) return void(this.Jn = []);
                    const i = Math.ceil(this.Nt.bn * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
                        s = Math.round(this.Nt.bn * t) - i;
                    this.Jn = new Array(this.Nt.G.to - this.Nt.G.from);
                    for (let i = this.Nt.G.from; i < this.Nt.G.to; i++) {
                        const h = this.Nt.J[i],
                            e = Math.round(h.tt * t);
                        let n, r;
                        if (s % 2) {
                            const t = (s - 1) / 2;
                            n = e - t, r = e + t
                        } else {
                            const t = s / 2;
                            n = e - t, r = e + t - 1
                        }
                        this.Jn[i - this.Nt.G.from] = {
                            Us: n,
                            qs: r,
                            ie: e,
                            se: h.tt * t,
                            rt: h.rt
                        }
                    }
                    for (let t = this.Nt.G.from + 1; t < this.Nt.G.to; t++) {
                        const s = this.Jn[t - this.Nt.G.from],
                            h = this.Jn[t - this.Nt.G.from - 1];
                        s.rt === h.rt + 1 && s.Us - h.qs !== i + 1 && (h.ie > h.se ? h.qs = s.Us - i - 1 : s.Us = h.qs + i + 1)
                    }
                    let h = Math.ceil(this.Nt.bn * t);
                    for (let t = this.Nt.G.from; t < this.Nt.G.to; t++) {
                        const i = this.Jn[t - this.Nt.G.from];
                        i.qs < i.Us && (i.qs = i.Us);
                        const s = i.qs - i.Us + 1;
                        h = Math.min(s, h)
                    }
                    if (i > 0 && h < 4)
                        for (let t = this.Nt.G.from; t < this.Nt.G.to; t++) {
                            const i = this.Jn[t - this.Nt.G.from];
                            i.qs - i.Us + 1 > h && (i.ie > i.se ? i.qs -= 1 : i.Us += 1)
                        }
                }
            }

            function Jt(t) {
                return {
                    J: [],
                    bn: t,
                    te: NaN,
                    G: null
                }
            }

            function Ft(t, i, s) {
                return {
                    rt: t,
                    ht: i,
                    tt: NaN,
                    it: NaN,
                    O: s
                }
            }
            class Dt extends yt {
                constructor(t, i) {
                    super(t, i, !1), this.lt = new R, this.ne = Jt(0), this.Ft = new Pt
                }
                vt(t, i) {
                    return this.Js.St() ? (this.sn(), this.lt) : null
                }
                nn() {
                    const t = this.Qs.gt().bn();
                    this.ne = Jt(t);
                    let i = 0,
                        s = 0;
                    const h = this.Js.B().color;
                    for (const t of this.Js.us().fn()) {
                        const e = t.Tt[3],
                            n = void 0 !== t.O ? t.O : h,
                            r = Ft(t.vn, e, n);
                        i++, i < this.ne.J.length ? this.ne.J[i] = r : this.ne.J.push(r), this.Zs[s++] = {
                            rt: t.vn,
                            tt: 0
                        }
                    }
                    this.Ft.Z(this.ne), this.lt.H([this.Ft])
                }
                rn() {}
                hn() {
                    super.hn(), this.ne.G = null
                }
                on(t, i, s) {
                    if (null === this.Gs) return;
                    const h = i.bn(),
                        e = f(i.ln()),
                        n = t.xt(this.Js.B().base, s);
                    i._n(this.ne.J), t.un(this.ne.J, s), this.ne.te = n, this.ne.G = wt(this.ne.J, e, !1), this.ne.bn = h, this.Ft.Z(this.ne)
                }
            }
            class Ut extends _t {
                constructor(t, i) {
                    super(t, i), this.wn = new pt
                }
                vt(t, i) {
                    if (!this.Js.St()) return null;
                    const s = this.Js.B();
                    this.sn();
                    const h = {
                        J: this.Zs,
                        et: s.color,
                        Vt: s.lineStyle,
                        Bs: s.lineType,
                        Lt: s.lineWidth,
                        G: this.Gs,
                        Ls: this.Qs.gt().bn()
                    };
                    return this.wn.Z(h), this.wn
                }
                rn() {
                    this.Zs.forEach((t => {
                        t.O = this.Js.dn().Ln(t.rt).In
                    }))
                }
                pn(t, i, s) {
                    const h = this.cn(t, i);
                    return h.O = s.Ln(t).In, h
                }
            }
            const jt = /[2-9]/g;
            class At {
                constructor(t = 50) {
                    this.ee = new Map, this.re = 0, this.he = Array.from(new Array(t))
                }
                le() {
                    this.ee.clear(), this.he.fill(void 0)
                }
                Qt(t, i, s) {
                    const h = s || jt,
                        e = String(i).replace(h, "0");
                    let n = this.ee.get(e);
                    if (void 0 === n) {
                        if (n = t.measureText(e).width, 0 === n && 0 !== i.length) return 0;
                        const s = this.he[this.re];
                        void 0 !== s && this.ee.delete(s), this.he[this.re] = e, this.re = (this.re + 1) % this.he.length, this.ee.set(e, n)
                    }
                    return n
                }
            }
            class qt {
                constructor(t) {
                    this.ae = null, this.S = null, this.oe = "right", this._e = 0, this.ue = t
                }
                ce(t, i, s, h) {
                    this.ae = t, this.S = i, this._e = s, this.oe = h
                }
                U(t, i) {
                    null !== this.S && null !== this.ae && this.ae.U(t, this.S, this.ue, this._e, this.oe, i)
                }
            }
            class Wt {
                constructor(t, i, s) {
                    this.de = t, this.ue = new At(50), this.fe = i, this.V = s, this.F = -1, this.Ft = new qt(this.ue)
                }
                vt(t, i) {
                    const s = this.V.pe(this.fe);
                    if (null === s) return null;
                    const h = s.ve(this.fe) ? s.me() : this.fe.Ct();
                    if (null === h) return null;
                    const e = s.we(h);
                    if ("overlay" === e) return null;
                    const n = this.V.be();
                    return n.T !== this.F && (this.F = n.T, this.ue.le()), this.Ft.ce(this.de.ci(), n, i, e), this.Ft
                }
            }
            class Gt {
                constructor() {
                    this.Nt = null
                }
                Z(t) {
                    this.Nt = t
                }
                U(t, i, s, h) {
                    if (null === this.Nt) return;
                    if (!1 === this.Nt.St) return;
                    const e = Math.round(this.Nt.it * i);
                    if (e < 0 || e > Math.ceil(this.Nt.qt * i)) return;
                    const n = Math.ceil(this.Nt.Ut * i);
                    t.lineCap = "butt", t.strokeStyle = this.Nt.O, t.lineWidth = Math.floor(this.Nt.Lt * i), o(t, this.Nt.Vt), a(t, e, 0, n)
                }
            }
            class Kt {
                constructor(t) {
                    this.ge = {
                        Ut: 0,
                        qt: 0,
                        it: 0,
                        O: "rgba(0, 0, 0, 0)",
                        Lt: 1,
                        Vt: 0,
                        St: !1
                    }, this.Me = new Gt, this.ut = !0, this.Js = t, this.Qs = t.jt(), this.Me.Z(this.ge)
                }
                dt() {
                    this.ut = !0
                }
                vt(t, i) {
                    return this.Js.St() ? (this.ut && (this.Se(t, i), this.ut = !1), this.Me) : null
                }
            }
            class Zt extends Kt {
                constructor(t) {
                    super(t)
                }
                Se(t, i) {
                    this.ge.St = !1;
                    const s = this.Js.Ct(),
                        h = s.ye().ye;
                    if (2 !== h && 3 !== h) return;
                    const e = this.Js.B();
                    if (!e.baseLineVisible || !this.Js.St()) return;
                    const n = this.Js.yt();
                    null !== n && (this.ge.St = !0, this.ge.it = s.xt(n.Tt, n.Tt), this.ge.Ut = i, this.ge.qt = t, this.ge.O = e.baseLineColor, this.ge.Lt = e.baseLineWidth, this.ge.Vt = e.baseLineStyle)
                }
            }
            class $t {
                constructor() {
                    this.Nt = null
                }
                Z(t) {
                    this.Nt = t
                }
                ke() {
                    return this.Nt
                }
                U(t, i, s, h) {
                    const e = this.Nt;
                    if (null === e) return;
                    t.save();
                    const n = Math.max(1, Math.floor(i)),
                        r = n % 2 / 2,
                        l = Math.round(e.se.x * i) + r,
                        o = e.se.y * i;
                    t.fillStyle = e.xe, t.beginPath();
                    const a = Math.max(2, 1.5 * e.Ce) * i;
                    t.arc(l, o, a, 0, 2 * Math.PI, !1), t.fill(), t.fillStyle = e.Te, t.beginPath(), t.arc(l, o, e.nt * i, 0, 2 * Math.PI, !1), t.fill(), t.lineWidth = n, t.strokeStyle = e.Pe, t.beginPath(), t.arc(l, o, e.nt * i + n / 2, 0, 2 * Math.PI, !1), t.stroke(), t.restore()
                }
            }
            const Yt = [{
                De: 0,
                Oe: .25,
                Ne: 4,
                Re: 10,
                Ae: .25,
                Ee: 0,
                Ie: .4,
                Le: .8
            }, {
                De: .25,
                Oe: .525,
                Ne: 10,
                Re: 14,
                Ae: 0,
                Ee: 0,
                Ie: .8,
                Le: 0
            }, {
                De: .525,
                Oe: 1,
                Ne: 14,
                Re: 14,
                Ae: 0,
                Ee: 0,
                Ie: 0,
                Le: 0
            }];

            function Ht(t, i, s, h) {
                return function(t, i) {
                    if ("transparent" === t) return t;
                    const s = y(t),
                        h = s[3];
                    return `rgba(${s[0]}, ${s[1]}, ${s[2]}, ${i*h})`
                }(t, s + (h - s) * i)
            }

            function Qt(t, i) {
                const s = t % 2600 / 2600;
                let h;
                for (const t of Yt)
                    if (s >= t.De && s <= t.Oe) {
                        h = t;
                        break
                    }
                u(void 0 !== h, "Last price animation internal logic error");
                const e = (s - h.De) / (h.Oe - h.De);
                return {
                    Te: Ht(i, e, h.Ae, h.Ee),
                    Pe: Ht(i, e, h.Ie, h.Le),
                    nt: (n = e, r = h.Ne, l = h.Re, r + (l - r) * n)
                };
                var n, r, l
            }
            class Xt {
                constructor(t) {
                    this.Ft = new $t, this.ut = !0, this.Ve = !0, this.Be = performance.now(), this.Fe = this.Be - 1, this.ze = t
                }
                We() {
                    this.Fe = this.Be - 1, this.dt()
                }
                je() {
                    if (this.dt(), 2 === this.ze.B().lastPriceAnimation) {
                        const t = performance.now(),
                            i = this.Fe - t;
                        if (i > 0) return void(i < 650 && (this.Fe += 2600));
                        this.Be = t, this.Fe = t + 2600
                    }
                }
                dt() {
                    this.ut = !0
                }
                $e() {
                    this.Ve = !0
                }
                St() {
                    return 0 !== this.ze.B().lastPriceAnimation
                }
                He() {
                    switch (this.ze.B().lastPriceAnimation) {
                        case 0:
                            return !1;
                        case 1:
                            return !0;
                        case 2:
                            return performance.now() <= this.Fe
                    }
                }
                vt(t, i) {
                    return this.ut ? (this.wt(t, i), this.ut = !1, this.Ve = !1) : this.Ve && (this.Ue(), this.Ve = !1), this.Ft
                }
                wt(t, i) {
                    this.Ft.Z(null);
                    const s = this.ze.jt().gt(),
                        h = s.ln(),
                        e = this.ze.yt();
                    if (null === h || null === e) return;
                    const n = this.ze.qe(!0);
                    if (n.Ye || !h.Xe(n.vn)) return;
                    const r = {
                            x: s.Ot(n.vn),
                            y: this.ze.Ct().xt(n.ht, e.Tt)
                        },
                        l = n.O,
                        o = this.ze.B().lineWidth,
                        a = Qt(this.Ke(), l);
                    this.Ft.Z({
                        xe: l,
                        Ce: o,
                        Te: a.Te,
                        Pe: a.Pe,
                        nt: a.nt,
                        se: r
                    })
                }
                Ue() {
                    const t = this.Ft.ke();
                    if (null !== t) {
                        const i = Qt(this.Ke(), t.xe);
                        t.Te = i.Te, t.Pe = i.Pe, t.nt = i.nt
                    }
                }
                Ke() {
                    return this.He() ? performance.now() - this.Be : 2599
                }
            }

            function ti(t, i) {
                return Lt(Math.min(Math.max(t, 12), 30) * i)
            }

            function ii(t, i) {
                switch (t) {
                    case "arrowDown":
                    case "arrowUp":
                        return ti(i, 1);
                    case "circle":
                        return ti(i, .8);
                    case "square":
                        return ti(i, .7)
                }
            }

            function si(t) {
                return kt(ti(t, 1))
            }

            function hi(t) {
                return Math.max(ti(t, .1), 3)
            }

            function ei(t, i, s, h, e) {
                const n = ii("square", s),
                    r = (n - 1) / 2,
                    l = t - r,
                    o = i - r;
                return h >= l && h <= l + n && e >= o && e <= o + n
            }

            function ni(t, i, s, h, e) {
                const n = (ii("arrowUp", e) - 1) / 2,
                    r = (Lt(e / 2) - 1) / 2;
                i.beginPath(), t ? (i.moveTo(s - n, h), i.lineTo(s, h - n), i.lineTo(s + n, h), i.lineTo(s + r, h), i.lineTo(s + r, h + n), i.lineTo(s - r, h + n), i.lineTo(s - r, h)) : (i.moveTo(s - n, h),
                    i.lineTo(s, h + n), i.lineTo(s + n, h), i.lineTo(s + r, h), i.lineTo(s + r, h - n), i.lineTo(s - r, h - n), i.lineTo(s - r, h)), i.fill()
            }
            class ri extends V {
                constructor() {
                    super(...arguments), this.Nt = null, this.ue = new At, this.F = -1, this.W = "", this.Ze = ""
                }
                Z(t) {
                    this.Nt = t
                }
                ce(t, i) {
                    this.F === t && this.W === i || (this.F = t, this.W = i, this.Ze = I(t, i), this.ue.le())
                }
                Ge(t, i) {
                    if (null === this.Nt || null === this.Nt.G) return null;
                    for (let s = this.Nt.G.from; s < this.Nt.G.to; s++) {
                        const h = this.Nt.J[s];
                        if (oi(h, t, i)) return {
                            Je: h.Qe,
                            tr: h.tr
                        }
                    }
                    return null
                }
                q(t, i, s) {
                    if (null !== this.Nt && null !== this.Nt.G) {
                        t.textBaseline = "middle", t.font = this.Ze;
                        for (let i = this.Nt.G.from; i < this.Nt.G.to; i++) {
                            const s = this.Nt.J[i];
                            void 0 !== s.Jt && (s.Jt.Ut = this.ue.Qt(t, s.Jt.ir), s.Jt.qt = this.F), li(s, t)
                        }
                    }
                }
            }

            function li(t, i) {
                i.fillStyle = t.O, void 0 !== t.Jt && function(t, i, s, h) {
                        t.fillText(i, s, h)
                    }(i, t.Jt.ir, t.tt - t.Jt.Ut / 2, t.Jt.it),
                    function(t, i) {
                        if (0 !== t.an) {
                            switch (t.sr) {
                                case "arrowDown":
                                    return void ni(!1, i, t.tt, t.it, t.an);
                                case "arrowUp":
                                    return void ni(!0, i, t.tt, t.it, t.an);
                                case "circle":
                                    return void
                                    function(t, i, s, h) {
                                        const e = (ii("circle", h) - 1) / 2;
                                        t.beginPath(), t.arc(i, s, e, 0, 2 * Math.PI, !1), t.fill()
                                    }(i, t.tt, t.it, t.an);
                                case "square":
                                    return void
                                    function(t, i, s, h) {
                                        const e = ii("square", h),
                                            n = (e - 1) / 2,
                                            r = i - n,
                                            l = s - n;
                                        t.fillRect(r, l, e, e)
                                    }(i, t.tt, t.it, t.an)
                            }
                            t.sr
                        }
                    }(t, i)
            }

            function oi(t, i, s) {
                return !(void 0 === t.Jt || ! function(t, i, s, h, e, n) {
                    const r = h / 2;
                    return e >= t && e <= t + s && n >= i - r && n <= i + r
                }(t.tt, t.Jt.it, t.Jt.Ut, t.Jt.qt, i, s)) || function(t, i, s) {
                    if (0 === t.an) return !1;
                    switch (t.sr) {
                        case "arrowDown":
                        case "arrowUp":
                            return function(t, i, s, h, e, n) {
                                return ei(i, s, h, e, n)
                            }(0, t.tt, t.it, t.an, i, s);
                        case "circle":
                            return function(t, i, s, h, e) {
                                const n = 2 + ii("circle", s) / 2,
                                    r = t - h,
                                    l = i - e;
                                return Math.sqrt(r * r + l * l) <= n
                            }(t.tt, t.it, t.an, i, s);
                        case "square":
                            return ei(t.tt, t.it, t.an, i, s)
                    }
                }(t, i, s)
            }

            function ai(t, i, s, h, e, n, r, l, o) {
                const a = N(s) ? s : s.En,
                    u = N(s) ? s : s.Rn,
                    c = N(s) ? s : s.An,
                    f = N(i.size) ? Math.max(i.size, 0) : 1,
                    d = si(l.bn()) * f,
                    v = d / 2;
                switch (t.an = d, i.position) {
                    case "inBar":
                        return t.it = r.xt(a, o), void(void 0 !== t.Jt && (t.Jt.it = t.it + v + n + .6 * e));
                    case "aboveBar":
                        return t.it = r.xt(u, o) - v - h.nr, void 0 !== t.Jt && (t.Jt.it = t.it - v - .6 * e, h.nr += 1.2 * e), void(h.nr += d + n);
                    case "belowBar":
                        return t.it = r.xt(c, o) + v + h.er, void 0 !== t.Jt && (t.Jt.it = t.it + v + n + .6 * e, h.er += 1.2 * e), void(h.er += d + n)
                }
                i.position
            }
            class ui {
                constructor(t, i) {
                    this.ut = !0, this.rr = !0, this.hr = !0, this.lr = null, this.Ft = new ri, this.ze = t, this.gi = i, this.Nt = {
                        J: [],
                        G: null
                    }
                }
                dt(t) {
                    this.ut = !0, this.hr = !0, "data" === t && (this.rr = !0)
                }
                vt(t, i, s) {
                    if (!this.ze.St()) return null;
                    this.ut && this.sn();
                    const h = this.gi.B().layout;
                    return this.Ft.ce(h.fontSize, h.fontFamily), this.Ft.Z(this.Nt), this.Ft
                }
                ar() {
                    if (this.hr) {
                        if (this.ze._r().length > 0) {
                            const t = this.gi.gt().bn(),
                                i = hi(t),
                                s = 1.5 * si(t) + 2 * i;
                            this.lr = {
                                above: s,
                                below: s
                            }
                        } else this.lr = null;
                        this.hr = !1
                    }
                    return this.lr
                }
                sn() {
                    const t = this.ze.Ct(),
                        i = this.gi.gt(),
                        s = this.ze._r();
                    this.rr && (this.Nt.J = s.map((t => ({
                        rt: t.time,
                        tt: 0,
                        it: 0,
                        an: 0,
                        sr: t.shape,
                        O: t.color,
                        Qe: t.internalId,
                        tr: t.id,
                        Jt: void 0
                    }))), this.rr = !1);
                    const h = this.gi.B().layout;
                    this.Nt.G = null;
                    const e = i.ln();
                    if (null === e) return;
                    const n = this.ze.yt();
                    if (null === n) return;
                    if (0 === this.Nt.J.length) return;
                    let r = NaN;
                    const l = hi(i.bn()),
                        o = {
                            nr: l,
                            er: l
                        };
                    this.Nt.G = wt(this.Nt.J, e, !0);
                    for (let e = this.Nt.G.from; e < this.Nt.G.to; e++) {
                        const a = s[e];
                        a.time !== r && (o.nr = l, o.er = l, r = a.time);
                        const u = this.Nt.J[e];
                        u.tt = i.Ot(a.time), void 0 !== a.text && a.text.length > 0 && (u.Jt = {
                            ir: a.text,
                            it: 0,
                            Ut: 0,
                            qt: 0
                        });
                        const c = this.ze.ur(a.time);
                        null !== c && ai(u, a, c, o, h.fontSize, l, t, i, n.Tt)
                    }
                    this.ut = !1
                }
            }
            class ci extends Kt {
                constructor(t) {
                    super(t)
                }
                Se(t, i) {
                    const s = this.ge;
                    s.St = !1;
                    const h = this.Js.B();
                    if (!h.priceLineVisible || !this.Js.St()) return;
                    const e = this.Js.qe(0 === h.priceLineSource);
                    e.Ye || (s.St = !0, s.it = e.ti, s.O = this.Js.cr(e.O), s.Ut = i, s.qt = t, s.Lt = h.priceLineWidth, s.Vt = h.priceLineStyle)
                }
            }
            class fi extends Z {
                constructor(t) {
                    super(), this.zt = t
                }
                di(t, i, s) {
                    t.St = !1, i.St = !1;
                    const h = this.zt;
                    if (!h.St()) return;
                    const e = h.B(),
                        n = e.lastValueVisible,
                        r = "" !== h.dr(),
                        l = 0 === e.seriesLastValueMode,
                        o = h.qe(!1);
                    if (o.Ye) return;
                    n && (t.Jt = this.pr(o, n, l), t.St = 0 !== t.Jt.length), (r || l) && (i.Jt = this.vr(o, n, r, l), i.St = i.Jt.length > 0);
                    const a = h.cr(o.O),
                        u = _(a);
                    s.t = u.t, s.O = u.i, s.ti = o.ti, i.Pt = h.jt().Dt(o.ti / h.Ct().qt()), t.Pt = a
                }
                vr(t, i, s, h) {
                    let e = "";
                    const n = this.zt.dr();
                    return s && 0 !== n.length && (e += `${n} `), i && h && (e += this.zt.Ct().mr() ? t.wr : t.br), e.trim()
                }
                pr(t, i, s) {
                    return i ? s ? this.zt.Ct().mr() ? t.br : t.wr : t.Jt : ""
                }
            }
            class di {
                constructor(t, i) {
                    this.gr = t, this.Mr = i
                }
                Sr(t) {
                    return null !== t && this.gr === t.gr && this.Mr === t.Mr
                }
                yr() {
                    return new di(this.gr, this.Mr)
                }
                kr() {
                    return this.gr
                }
                Cr() {
                    return this.Mr
                }
                Tr() {
                    return this.Mr - this.gr
                }
                vi() {
                    return this.Mr === this.gr || Number.isNaN(this.Mr) || Number.isNaN(this.gr)
                }
                Ps(t) {
                    return null === t ? this : new di(Math.min(this.kr(), t.kr()), Math.max(this.Cr(), t.Cr()))
                }
                Pr(t) {
                    if (!N(t)) return;
                    if (0 == this.Mr - this.gr) return;
                    const i = .5 * (this.Mr + this.gr);
                    let s = this.Mr - i,
                        h = this.gr - i;
                    s *= t, h *= t, this.Mr = i + s, this.gr = i + h
                }
                Dr(t) {
                    N(t) && (this.Mr += t, this.gr += t)
                }
                Or() {
                    return {
                        minValue: this.gr,
                        maxValue: this.Mr
                    }
                }
                static Nr(t) {
                    return null === t ? null : new di(t.minValue, t.maxValue)
                }
            }
            class vi {
                constructor(t, i) {
                    this.Rr = t, this.Ar = i || null
                }
                Er() {
                    return this.Rr
                }
                Ir() {
                    return this.Ar
                }
                Or() {
                    return null === this.Rr ? null : {
                        priceRange: this.Rr.Or(),
                        margins: this.Ar || void 0
                    }
                }
                static Nr(t) {
                    return null === t ? null : new vi(di.Nr(t.priceRange), t.margins)
                }
            }
            class pi extends Kt {
                constructor(t, i) {
                    super(t), this.Lr = i
                }
                Se(t, i) {
                    const s = this.ge;
                    s.St = !1;
                    const h = this.Lr.B();
                    if (!this.Js.St() || !h.lineVisible) return;
                    const e = this.Lr.Vr();
                    null !== e && (s.St = !0, s.it = e, s.O = h.color, s.Ut = i, s.qt = t, s.Lt = h.lineWidth, s.Vt = h.lineStyle)
                }
            }
            class mi extends Z {
                constructor(t, i) {
                    super(), this.ze = t, this.Lr = i
                }
                di(t, i, s) {
                    t.St = !1, i.St = !1;
                    const h = this.Lr.B(),
                        e = h.axisLabelVisible,
                        n = "" !== h.title,
                        r = this.ze;
                    if (!e || !r.St()) return;
                    const l = this.Lr.Vr();
                    if (null === l) return;
                    n && (i.Jt = h.title, i.St = !0), i.Pt = r.jt().Dt(l / r.Ct().qt()), t.Jt = this.Br(h.price), t.St = !0;
                    const o = _(h.color);
                    s.t = o.t, s.O = o.i, s.ti = l
                }
                Br(t) {
                    const i = this.ze.yt();
                    return null === i ? "" : this.ze.Ct().mi(t, i.Tt)
                }
            }
            class gi {
                constructor(t, i) {
                    this.ze = t, this.zi = i, this.Fr = new pi(t, this), this.de = new mi(t, this), this.zr = new Wt(this.de, t, t.jt())
                }
                Wr(t) {
                    S(this.zi, t), this.dt(), this.ze.jt().jr()
                }
                B() {
                    return this.zi
                }
                $r() {
                    return this.Fr
                }
                Hr() {
                    return this.zr
                }
                Ur() {
                    return this.de
                }
                dt() {
                    this.Fr.dt(), this.de.dt()
                }
                Vr() {
                    const t = this.ze,
                        i = t.Ct();
                    if (t.jt().gt().vi() || i.vi()) return null;
                    const s = t.yt();
                    return null === s ? null : i.xt(this.zi.price, s.Tt)
                }
            }
            class bi extends X {
                constructor(t) {
                    super(), this.gi = t
                }
                jt() {
                    return this.gi
                }
            }
            const Mi = {
                In: "",
                Gn: "",
                Zn: ""
            };
            class wi {
                constructor(t) {
                    this.ze = t
                }
                Ln(t, i) {
                    const s = this.ze.qr(),
                        h = this.ze.B();
                    switch (s) {
                        case "Line":
                            return this.Yr(h, t, i);
                        case "Area":
                            return this.Xr(h);
                        case "Baseline":
                            return this.Kr(h, t, i);
                        case "Bar":
                            return this.Zr(h, t, i);
                        case "Candlestick":
                            return this.Gr(h, t, i);
                        case "Histogram":
                            return this.Jr(h, t, i)
                    }
                    throw new Error("Unknown chart style")
                }
                Zr(t, i, s) {
                    const h = Object.assign({}, Mi),
                        e = t.upColor,
                        n = t.downColor,
                        r = e,
                        l = n,
                        o = f(this.Qr(i, s)),
                        a = d(o.Tt[0]) <= d(o.Tt[3]);
                    return void 0 !== o.O ? (h.In = o.O, h.Gn = o.O) : (h.In = a ? e : n, h.Gn = a ? r : l), h
                }
                Gr(t, i, s) {
                    var h, e, n;
                    const r = Object.assign({}, Mi),
                        l = t.upColor,
                        o = t.downColor,
                        a = t.borderUpColor,
                        u = t.borderDownColor,
                        c = t.wickUpColor,
                        v = t.wickDownColor,
                        p = f(this.Qr(i, s)),
                        m = d(p.Tt[0]) <= d(p.Tt[3]);
                    return r.In = null !== (h = p.O) && void 0 !== h ? h : m ? l : o, r.Gn = null !== (e = p.Pt) && void 0 !== e ? e : m ? a : u, r.Zn = null !== (n = p.Kn) && void 0 !== n ? n : m ? c : v, r
                }
                Xr(t) {
                    return Object.assign(Object.assign({}, Mi), {
                        In: t.lineColor
                    })
                }
                Kr(t, i, s) {
                    const h = f(this.Qr(i, s)).Tt[3] >= t.baseValue.price;
                    return Object.assign(Object.assign({}, Mi), {
                        In: h ? t.topLineColor : t.bottomLineColor
                    })
                }
                Yr(t, i, s) {
                    var h;
                    const e = f(this.Qr(i, s));
                    return Object.assign(Object.assign({}, Mi), {
                        In: null !== (h = e.O) && void 0 !== h ? h : t.color
                    })
                }
                Jr(t, i, s) {
                    const h = Object.assign({}, Mi),
                        e = f(this.Qr(i, s));
                    return h.In = void 0 !== e.O ? e.O : t.color, h
                }
                Qr(t, i) {
                    return void 0 !== i ? i.Tt : this.ze.us().th(t)
                }
            }
            var yi;
            ! function(t) {
                t[t.NearestLeft = -1] = "NearestLeft", t[t.None = 0] = "None", t[t.NearestRight = 1] = "NearestRight"
            }(yi || (yi = {}));
            class _i {
                constructor() {
                    this.ih = [], this.sh = new Map, this.nh = new Map
                }
                eh() {
                    return this.an() > 0 ? this.ih[this.ih.length - 1] : null
                }
                rh() {
                    return this.an() > 0 ? this.hh(0) : null
                }
                _s() {
                    return this.an() > 0 ? this.hh(this.ih.length - 1) : null
                }
                an() {
                    return this.ih.length
                }
                vi() {
                    return 0 === this.an()
                }
                Xe(t) {
                    return null !== this.lh(t, 0)
                }
                th(t) {
                    return this.ah(t)
                }
                ah(t, i = 0) {
                    const s = this.lh(t, i);
                    return null === s ? null : Object.assign(Object.assign({}, this.oh(s)), {
                        vn: this.hh(s)
                    })
                }
                fn() {
                    return this.ih
                }
                _h(t, i, s) {
                    if (this.vi()) return null;
                    let h = null;
                    for (const e of s) h = Ci(h, this.uh(t, i, e));
                    return h
                }
                Z(t) {
                    this.nh.clear(), this.sh.clear(), this.ih = t
                }
                hh(t) {
                    return this.ih[t].vn
                }
                oh(t) {
                    return this.ih[t]
                }
                lh(t, i) {
                    const s = this.dh(t);
                    if (null === s && 0 !== i) switch (i) {
                        case -1:
                            return this.fh(t);
                        case 1:
                            return this.ph(t);
                        default:
                            throw new TypeError("Unknown search mode")
                    }
                    return s
                }
                fh(t) {
                    let i = this.mh(t);
                    return i > 0 && (i -= 1), i !== this.ih.length && this.hh(i) < t ? i : null
                }
                ph(t) {
                    const i = this.wh(t);
                    return i !== this.ih.length && t < this.hh(i) ? i : null
                }
                dh(t) {
                    const i = this.mh(t);
                    return i === this.ih.length || t < this.ih[i].vn ? null : i
                }
                mh(t) {
                    return mt(this.ih, t, ((t, i) => t.vn < i))
                }
                wh(t) {
                    return gt(this.ih, t, ((t, i) => i.vn > t))
                }
                bh(t, i, s) {
                    let h = null;
                    for (let e = t; e < i; e++) {
                        const t = this.ih[e].Tt[s];
                        Number.isNaN(t) || (null === h ? h = {
                            gh: t,
                            Mh: t
                        } : (t < h.gh && (h.gh = t), t > h.Mh && (h.Mh = t)))
                    }
                    return h
                }
                uh(t, i, s) {
                    if (this.vi()) return null;
                    let h = null;
                    const e = f(this.rh()),
                        n = f(this._s()),
                        r = Math.max(t, e),
                        l = Math.min(i, n),
                        o = 30 * Math.ceil(r / 30),
                        a = Math.max(o, 30 * Math.floor(l / 30)); {
                        const t = this.mh(r),
                            e = this.wh(Math.min(l, o, i));
                        h = Ci(h, this.bh(t, e, s))
                    }
                    let u = this.sh.get(s);
                    void 0 === u && (u = new Map, this.sh.set(s, u));
                    for (let t = Math.max(o + 1, r); t < a; t += 30) {
                        const i = Math.floor(t / 30);
                        let e = u.get(i);
                        if (void 0 === e) {
                            const t = this.mh(30 * i),
                                h = this.wh(30 * (i + 1) - 1);
                            e = this.bh(t, h, s), u.set(i, e)
                        }
                        h = Ci(h, e)
                    } {
                        const t = this.mh(a),
                            i = this.wh(l);
                        h = Ci(h, this.bh(t, i, s))
                    }
                    return h
                }
            }

            function Ci(t, i) {
                return null === t ? i : null === i ? t : {
                    gh: Math.min(t.gh, i.gh),
                    Mh: Math.max(t.Mh, i.Mh)
                }
            }
            class Si extends bi {
                constructor(t, i, s) {
                    super(t), this.Nt = new _i, this.Fr = new ci(this), this.Sh = [], this.yh = new Zt(this), this.kh = null, this.xh = null, this.Ch = [], this.Th = [], this.Ph = null, this.zi = i, this.Dh = s;
                    const h = new fi(this);
                    this.Ei = [h], this.zr = new Wt(h, this, t), "Area" !== s && "Line" !== s && "Baseline" !== s || (this.kh = new Xt(this)), this.Oh(), this.Nh()
                }
                M() {
                    null !== this.Ph && clearTimeout(this.Ph)
                }
                cr(t) {
                    return this.zi.priceLineColor || t
                }
                qe(t) {
                    const i = {
                            Ye: !0
                        },
                        s = this.Ct();
                    if (this.jt().gt().vi() || s.vi() || this.Nt.vi()) return i;
                    const h = this.jt().gt().ln(),
                        e = this.yt();
                    if (null === h || null === e) return i;
                    let n, r;
                    if (t) {
                        const t = this.Nt.eh();
                        if (null === t) return i;
                        n = t, r = t.vn
                    } else {
                        const t = this.Nt.ah(h.qs(), -1);
                        if (null === t) return i;
                        if (n = this.Nt.th(t.vn), null === n) return i;
                        r = t.vn
                    }
                    const l = n.Tt[3],
                        o = this.dn().Ln(r, {
                            Tt: n
                        }),
                        a = s.xt(l, e.Tt);
                    return {
                        Ye: !1,
                        ht: l,
                        Jt: s.mi(l, e.Tt),
                        wr: s.Rh(l),
                        br: s.Ah(l, e.Tt),
                        O: o.In,
                        ti: a,
                        vn: r
                    }
                }
                dn() {
                    return null !== this.xh || (this.xh = new wi(this)), this.xh
                }
                B() {
                    return this.zi
                }
                Wr(t) {
                    const i = t.priceScaleId;
                    void 0 !== i && i !== this.zi.priceScaleId && this.jt().Eh(this, i), S(this.zi, t), void 0 !== t.priceFormat && (this.Oh(), this.jt().Ih()), this.jt().Lh(this), this.jt().Vh(), this.Yi.dt("options")
                }
                Z(t, i) {
                    this.Nt.Z(t), this.Bh(), this.Yi.dt("data"), this.Wi.dt("data"), null !== this.kh && (i && i.Fh ? this.kh.je() : 0 === t.length && this.kh.We());
                    const s = this.jt().pe(this);
                    this.jt().zh(s), this.jt().Lh(this), this.jt().Vh(), this.jt().jr()
                }
                Wh(t) {
                    this.Ch = t, this.Bh();
                    const i = this.jt().pe(this);
                    this.Wi.dt("data"), this.jt().zh(i), this.jt().Lh(this), this.jt().Vh(), this.jt().jr()
                }
                jh() {
                    return this.Ch
                }
                _r() {
                    return this.Th
                }
                $h(t) {
                    const i = new gi(this, t);
                    return this.Sh.push(i), this.jt().Lh(this), i
                }
                Hh(t) {
                    const i = this.Sh.indexOf(t); - 1 !== i && this.Sh.splice(i, 1), this.jt().Lh(this)
                }
                qr() {
                    return this.Dh
                }
                yt() {
                    const t = this.Uh();
                    return null === t ? null : {
                        Tt: t.Tt[3],
                        qh: t.rt
                    }
                }
                Uh() {
                    const t = this.jt().gt().ln();
                    if (null === t) return null;
                    const i = t.Us();
                    return this.Nt.ah(i, 1)
                }
                us() {
                    return this.Nt
                }
                ur(t) {
                    const i = this.Nt.th(t);
                    return null === i ? null : "Bar" === this.Dh || "Candlestick" === this.Dh ? {
                        Nn: i.Tt[0],
                        Rn: i.Tt[1],
                        An: i.Tt[2],
                        En: i.Tt[3]
                    } : i.Tt[3]
                }
                Yh(t) {
                    const i = this.kh;
                    return null !== i && i.St() ? (null === this.Ph && i.He() && (this.Ph = setTimeout((() => {
                        this.Ph = null, this.jt().Xh()
                    }), 0)), i.$e(), [i]) : []
                }
                ns() {
                    const t = [];
                    this.Kh() || t.push(this.yh), t.push(this.Yi, this.Fr, this.Wi);
                    const i = this.Sh.map((t => t.$r()));
                    return t.push(...i), t
                }
                Pi(t) {
                    return [this.zr, ...this.Sh.map((t => t.Hr()))]
                }
                es(t, i) {
                    if (i !== this.yi && !this.Kh()) return [];
                    const s = [...this.Ei];
                    for (const t of this.Sh) s.push(t.Ur());
                    return s
                }
                Zh(t, i) {
                    if (void 0 !== this.zi.autoscaleInfoProvider) {
                        const s = this.zi.autoscaleInfoProvider((() => {
                            const s = this.Gh(t, i);
                            return null === s ? null : s.Or()
                        }));
                        return vi.Nr(s)
                    }
                    return this.Gh(t, i)
                }
                Jh() {
                    return this.zi.priceFormat.minMove
                }
                Qh() {
                    return this.tl
                }
                hs() {
                    var t;
                    this.Yi.dt(), this.Wi.dt();
                    for (const t of this.Ei) t.dt();
                    for (const t of this.Sh) t.dt();
                    this.Fr.dt(), this.yh.dt(), null === (t = this.kh) || void 0 === t || t.dt()
                }
                Ct() {
                    return f(super.Ct())
                }
                Mt(t) {
                    if ("Line" !== this.Dh && "Area" !== this.Dh && "Baseline" !== this.Dh || !this.zi.crosshairMarkerVisible) return null;
                    const i = this.Nt.th(t);
                    return null === i ? null : {
                        ht: i.Tt[3],
                        nt: this.il(),
                        Pt: this.sl(),
                        kt: this.nl(t)
                    }
                }
                dr() {
                    return this.zi.title
                }
                St() {
                    return this.zi.visible
                }
                Kh() {
                    return !st(this.Ct().el())
                }
                Gh(t, i) {
                    if (!T(t) || !T(i) || this.Nt.vi()) return null;
                    const s = "Line" === this.Dh || "Area" === this.Dh || "Baseline" === this.Dh || "Histogram" === this.Dh ? [3] : [2, 1],
                        h = this.Nt._h(t, i, s);
                    let e = null !== h ? new di(h.gh, h.Mh) : null;
                    if ("Histogram" === this.qr()) {
                        const t = this.zi.base,
                            i = new di(t, t);
                        e = null !== e ? e.Ps(i) : i
                    }
                    return new vi(e, this.Wi.ar())
                }
                il() {
                    switch (this.Dh) {
                        case "Line":
                        case "Area":
                        case "Baseline":
                            return this.zi.crosshairMarkerRadius
                    }
                    return 0
                }
                sl() {
                    switch (this.Dh) {
                        case "Line":
                        case "Area":
                        case "Baseline":
                            {
                                const t = this.zi.crosshairMarkerBorderColor;
                                if (0 !== t.length) return t
                            }
                    }
                    return null
                }
                nl(t) {
                    switch (this.Dh) {
                        case "Line":
                        case "Area":
                        case "Baseline":
                            {
                                const t = this.zi.crosshairMarkerBackgroundColor;
                                if (0 !== t.length) return t
                            }
                    }
                    return this.dn().Ln(t).In
                }
                Oh() {
                    switch (this.zi.priceFormat.type) {
                        case "custom":
                            this.tl = {
                                format: this.zi.priceFormat.formatter
                            };
                            break;
                        case "volume":
                            this.tl = new lt(this.zi.priceFormat.precision);
                            break;
                        case "percent":
                            this.tl = new rt(this.zi.priceFormat.precision);
                            break;
                        default:
                            {
                                const t = Math.pow(10, this.zi.priceFormat.precision);this.tl = new nt(t, this.zi.priceFormat.minMove * t)
                            }
                    }
                    null !== this.yi && this.yi.rl()
                }
                Bh() {
                    const t = this.jt().gt();
                    if (t.vi() || 0 === this.Nt.an()) return void(this.Th = []);
                    const i = f(this.Nt.rh());
                    this.Th = this.Ch.map(((s, h) => {
                        const e = f(t.hl(s.time, !0)),
                            n = e < i ? 1 : -1;
                        return {
                            time: f(this.Nt.ah(e, n)).vn,
                            position: s.position,
                            shape: s.shape,
                            color: s.color,
                            id: s.id,
                            internalId: h,
                            text: s.text,
                            size: s.size
                        }
                    }))
                }
                Nh() {
                    switch (this.Wi = new ui(this, this.jt()), this.Dh) {
                        case "Bar":
                            this.Yi = new Tt(this, this.jt());
                            break;
                        case "Candlestick":
                            this.Yi = new Vt(this, this.jt());
                            break;
                        case "Line":
                            this.Yi = new Ut(this, this.jt());
                            break;
                        case "Area":
                            this.Yi = new Ct(this, this.jt());
                            break;
                        case "Baseline":
                            this.Yi = new Bt(this, this.jt());
                            break;
                        case "Histogram":
                            this.Yi = new Dt(this, this.jt());
                            break;
                        default:
                            throw Error("Unknown chart style assigned: " + this.Dh)
                    }
                }
            }
            class Ni {
                constructor(t) {
                    this.zi = t
                }
                ll(t, i, s) {
                    let h = t;
                    if (0 === this.zi.mode) return h;
                    const e = s.$i(),
                        n = e.yt();
                    if (null === n) return h;
                    const r = e.xt(t, n),
                        l = s.al().filter((t => t instanceof Si)).reduce(((t, h) => {
                            if (s.ve(h) || !h.St()) return t;
                            const e = h.Ct(),
                                n = h.us();
                            if (e.vi() || !n.Xe(i)) return t;
                            const r = n.th(i);
                            if (null === r) return t;
                            const l = d(h.yt());
                            return t.concat([e.xt(r.Tt[3], l.Tt)])
                        }), []);
                    if (0 === l.length) return h;
                    l.sort(((t, i) => Math.abs(t - r) - Math.abs(i - r)));
                    const o = l[0];
                    return h = e.Hi(o, n), h
                }
            }
            class Ti {
                constructor() {
                    this.Nt = null
                }
                Z(t) {
                    this.Nt = t
                }
                U(t, i, s, h) {
                    if (null === this.Nt) return;
                    const e = Math.max(1, Math.floor(i));
                    t.lineWidth = e;
                    const n = Math.ceil(this.Nt.It * i),
                        r = Math.ceil(this.Nt.Et * i);
                    ! function(t, i) {
                        t.save(), t.lineWidth % 2 && t.translate(.5, .5), i(), t.restore()
                    }(t, (() => {
                        const s = f(this.Nt);
                        if (s.ol) {
                            t.strokeStyle = s._l, o(t, s.ul), t.beginPath();
                            for (const h of s.cl) {
                                const s = Math.round(h.dl * i);
                                t.moveTo(s, -e), t.lineTo(s, n + e)
                            }
                            t.stroke()
                        }
                        if (s.fl) {
                            t.strokeStyle = s.pl, o(t, s.vl), t.beginPath();
                            for (const h of s.ml) {
                                const s = Math.round(h.dl * i);
                                t.moveTo(-e, s), t.lineTo(r + e, s)
                            }
                            t.stroke()
                        }
                    }))
                }
            }
            class xi {
                constructor(t) {
                    this.Ft = new Ti, this.ut = !0, this.Oi = t
                }
                dt() {
                    this.ut = !0
                }
                vt(t, i) {
                    if (this.ut) {
                        const s = this.Oi.jt().B().grid,
                            h = {
                                It: t,
                                Et: i,
                                fl: s.horzLines.visible,
                                ol: s.vertLines.visible,
                                pl: s.horzLines.color,
                                _l: s.vertLines.color,
                                vl: s.horzLines.style,
                                ul: s.vertLines.style,
                                ml: this.Oi.$i().wl(),
                                cl: this.Oi.jt().gt().wl() || []
                            };
                        this.Ft.Z(h), this.ut = !1
                    }
                    return this.Ft
                }
            }
            class Ei {
                constructor(t) {
                    this.Yi = new xi(t)
                }
                $r() {
                    return this.Yi
                }
            }
            const zi = {
                bl: 4,
                gl: 1e-4
            };

            function ki(t, i) {
                const s = 100 * (t - i) / i;
                return i < 0 ? -s : s
            }

            function Li(t, i) {
                const s = ki(t.kr(), i),
                    h = ki(t.Cr(), i);
                return new di(s, h)
            }

            function Oi(t, i) {
                const s = 100 * (t - i) / i + 100;
                return i < 0 ? -s : s
            }

            function Ii(t, i) {
                const s = Oi(t.kr(), i),
                    h = Oi(t.Cr(), i);
                return new di(s, h)
            }

            function Bi(t, i) {
                const s = Math.abs(t);
                if (s < 1e-15) return 0;
                const h = zt(s + i.gl) + i.bl;
                return t < 0 ? -h : h
            }

            function Ri(t, i) {
                const s = Math.abs(t);
                if (s < 1e-15) return 0;
                const h = Math.pow(10, s - i.bl) - i.gl;
                return t < 0 ? -h : h
            }

            function Vi(t, i) {
                if (null === t) return null;
                const s = Bi(t.kr(), i),
                    h = Bi(t.Cr(), i);
                return new di(s, h)
            }

            function Pi(t, i) {
                if (null === t) return null;
                const s = Ri(t.kr(), i),
                    h = Ri(t.Cr(), i);
                return new di(s, h)
            }

            function Ji(t) {
                if (null === t) return zi;
                const i = Math.abs(t.Cr() - t.kr());
                if (i >= 1 || i < 1e-15) return zi;
                const s = Math.ceil(Math.abs(Math.log10(i))),
                    h = zi.bl + s;
                return {
                    bl: h,
                    gl: 1 / Math.pow(10, h)
                }
            }
            class Fi {
                constructor(t, i) {
                    if (this.Ml = t, this.Sl = i, function(t) {
                            if (t < 0) return !1;
                            for (let i = t; i > 1; i /= 10)
                                if (i % 10 != 0) return !1;
                            return !0
                        }(this.Ml)) this.yl = [2, 2.5, 2];
                    else {
                        this.yl = [];
                        for (let t = this.Ml; 1 !== t;) {
                            if (t % 2 == 0) this.yl.push(2), t /= 2;
                            else {
                                if (t % 5 != 0) throw new Error("unexpected base");
                                this.yl.push(2, 2.5), t /= 5
                            }
                            if (this.yl.length > 100) throw new Error("something wrong with base")
                        }
                    }
                }
                kl(t, i, s) {
                    const h = 0 === this.Ml ? 0 : 1 / this.Ml;
                    let e = Math.pow(10, Math.max(0, Math.ceil(zt(t - i)))),
                        n = 0,
                        r = this.Sl[0];
                    for (;;) {
                        const t = Et(e, h, 1e-14) && e > h + 1e-14,
                            i = Et(e, s * r, 1e-14),
                            l = Et(e, 1, 1e-14);
                        if (!(t && i && l)) break;
                        e /= r, r = this.Sl[++n % this.Sl.length]
                    }
                    if (e <= h + 1e-14 && (e = h), e = Math.max(1, e), this.yl.length > 0 && (l = e, 1, 1e-14, Math.abs(l - 1) < 1e-14))
                        for (n = 0, r = this.yl[0]; Et(e, s * r, 1e-14) && e > h + 1e-14;) e /= r, r = this.yl[++n % this.yl.length];
                    var l;
                    return e
                }
            }
            class Di {
                constructor(t, i, s, h) {
                    this.xl = [], this.fi = t, this.Ml = i, this.Cl = s, this.Tl = h
                }
                kl(t, i) {
                    if (t < i) throw new Error("high < low");
                    const s = this.fi.qt(),
                        h = (t - i) * this.Pl() / s,
                        e = new Fi(this.Ml, [2, 2.5, 2]),
                        n = new Fi(this.Ml, [2, 2, 2.5]),
                        r = new Fi(this.Ml, [2.5, 2, 2]),
                        l = [];
                    return l.push(e.kl(t, i, h), n.kl(t, i, h), r.kl(t, i, h)),
                        function(t) {
                            if (t.length < 1) throw Error("array is empty");
                            let i = t[0];
                            for (let s = 1; s < t.length; ++s) t[s] < i && (i = t[s]);
                            return i
                        }(l)
                }
                Dl() {
                    const t = this.fi,
                        i = t.yt();
                    if (null === i) return void(this.xl = []);
                    const s = t.qt(),
                        h = this.Cl(s - 1, i),
                        e = this.Cl(0, i),
                        n = this.fi.B().entireTextOnly ? this.Ol() / 2 : 0,
                        r = n,
                        l = s - 1 - n,
                        o = Math.max(h, e),
                        a = Math.min(h, e);
                    if (o === a) return void(this.xl = []);
                    let u = this.kl(o, a),
                        c = o % u;
                    c += c < 0 ? u : 0;
                    const f = o >= a ? 1 : -1;
                    let d = null,
                        v = 0;
                    for (let s = o - c; s > a; s -= u) {
                        const h = this.Tl(s, i, !0);
                        null !== d && Math.abs(h - d) < this.Pl() || h < r || h > l || (v < this.xl.length ? (this.xl[v].dl = h, this.xl[v].Nl = t.Rl(s)) : this.xl.push({
                            dl: h,
                            Nl: t.Rl(s)
                        }), v++, d = h, t.Al() && (u = this.kl(s * f, a)))
                    }
                    this.xl.length = v
                }
                wl() {
                    return this.xl
                }
                Ol() {
                    return this.fi.T()
                }
                Pl() {
                    return Math.ceil(2.5 * this.Ol())
                }
            }

            function Ui(t) {
                return t.slice().sort(((t, i) => f(t.xi()) - f(i.xi())))
            }
            var ji;
            ! function(t) {
                t[t.Normal = 0] = "Normal", t[t.Logarithmic = 1] = "Logarithmic", t[t.Percentage = 2] = "Percentage", t[t.IndexedTo100 = 3] = "IndexedTo100"
            }(ji || (ji = {}));
            const Ai = new rt,
                qi = new nt(100, 1);
            class Wi {
                constructor(t, i, s, h) {
                    this.El = 0, this.Il = null, this.Rr = null, this.Ll = null, this.Vl = {
                        Bl: !1,
                        Fl: null
                    }, this.zl = 0, this.Wl = 0, this.jl = new C, this.$l = new C, this.Hl = [], this.Ul = null, this.ql = null, this.Yl = null, this.Xl = null, this.tl = qi, this.Kl = Ji(null), this.Zl = t, this.zi = i, this.Gl = s, this.Jl = h, this.Ql = new Di(this, 100, this.ta.bind(this), this.ia.bind(this))
                }
                el() {
                    return this.Zl
                }
                B() {
                    return this.zi
                }
                Wr(t) {
                    if (S(this.zi, t), this.rl(), void 0 !== t.mode && this.sa({
                            ye: t.mode
                        }), void 0 !== t.scaleMargins) {
                        const i = c(t.scaleMargins.top),
                            s = c(t.scaleMargins.bottom);
                        if (i < 0 || i > 1) throw new Error(`Invalid top margin - expect value between 0 and 1, given=${i}`);
                        if (s < 0 || s > 1 || i + s > 1) throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${s}`);
                        if (i + s > 1) throw new Error(`Invalid margins - sum of margins must be less than 1, given=${i+s}`);
                        this.na(), this.ql = null
                    }
                }
                ea() {
                    return this.zi.autoScale
                }
                Al() {
                    return 1 === this.zi.mode
                }
                mr() {
                    return 2 === this.zi.mode
                }
                ra() {
                    return 3 === this.zi.mode
                }
                ye() {
                    return {
                        ws: this.zi.autoScale,
                        ha: this.zi.invertScale,
                        ye: this.zi.mode
                    }
                }
                sa(t) {
                    const i = this.ye();
                    let s = null;
                    void 0 !== t.ws && (this.zi.autoScale = t.ws), void 0 !== t.ye && (this.zi.mode = t.ye, 2 !== t.ye && 3 !== t.ye || (this.zi.autoScale = !0), this.Vl.Bl = !1), 1 === i.ye && t.ye !== i.ye && (function(t, i) {
                        if (null === t) return !1;
                        const s = Ri(t.kr(), i),
                            h = Ri(t.Cr(), i);
                        return isFinite(s) && isFinite(h)
                    }(this.Rr, this.Kl) ? (s = Pi(this.Rr, this.Kl), null !== s && this.la(s)) : this.zi.autoScale = !0), 1 === t.ye && t.ye !== i.ye && (s = Vi(this.Rr, this.Kl), null !== s && this.la(s));
                    const h = i.ye !== this.zi.mode;
                    h && (2 === i.ye || this.mr()) && this.rl(), h && (3 === i.ye || this.ra()) && this.rl(), void 0 !== t.ha && i.ha !== t.ha && (this.zi.invertScale = t.ha, this.aa()), this.$l.m(i, this.ye())
                }
                oa() {
                    return this.$l
                }
                T() {
                    return this.Gl.fontSize
                }
                qt() {
                    return this.El
                }
                _a(t) {
                    this.El !== t && (this.El = t, this.na(), this.ql = null)
                }
                ua() {
                    if (this.Il) return this.Il;
                    const t = this.qt() - this.ca() - this.da();
                    return this.Il = t, t
                }
                Er() {
                    return this.fa(), this.Rr
                }
                la(t, i) {
                    const s = this.Rr;
                    (i || null === s && null !== t || null !== s && !s.Sr(t)) && (this.ql = null, this.Rr = t)
                }
                vi() {
                    return this.fa(), 0 === this.El || !this.Rr || this.Rr.vi()
                }
                pa(t) {
                    return this.ha() ? t : this.qt() - 1 - t
                }
                xt(t, i) {
                    return this.mr() ? t = ki(t, i) : this.ra() && (t = Oi(t, i)), this.ia(t, i)
                }
                un(t, i, s) {
                    this.fa();
                    const h = this.da(),
                        e = f(this.Er()),
                        n = e.kr(),
                        r = e.Cr(),
                        l = this.ua() - 1,
                        o = this.ha(),
                        a = l / (r - n),
                        u = void 0 === s ? 0 : s.from,
                        c = void 0 === s ? t.length : s.to,
                        d = this.va();
                    for (let s = u; s < c; s++) {
                        const e = t[s],
                            r = e.ht;
                        if (isNaN(r)) continue;
                        let l = r;
                        null !== d && (l = d(e.ht, i));
                        const u = h + a * (l - n),
                            c = o ? u : this.El - 1 - u;
                        e.it = c
                    }
                }
                Dn(t, i, s) {
                    this.fa();
                    const h = this.da(),
                        e = f(this.Er()),
                        n = e.kr(),
                        r = e.Cr(),
                        l = this.ua() - 1,
                        o = this.ha(),
                        a = l / (r - n),
                        u = void 0 === s ? 0 : s.from,
                        c = void 0 === s ? t.length : s.to,
                        d = this.va();
                    for (let s = u; s < c; s++) {
                        const e = t[s];
                        let r = e.Nn,
                            l = e.Rn,
                            u = e.An,
                            c = e.En;
                        null !== d && (r = d(e.Nn, i), l = d(e.Rn, i), u = d(e.An, i), c = d(e.En, i));
                        let f = h + a * (r - n),
                            v = o ? f : this.El - 1 - f;
                        e.Tn = v, f = h + a * (l - n), v = o ? f : this.El - 1 - f, e.kn = v, f = h + a * (u - n), v = o ? f : this.El - 1 - f, e.xn = v, f = h + a * (c - n), v = o ? f : this.El - 1 - f, e.Pn = v
                    }
                }
                Hi(t, i) {
                    const s = this.ta(t, i);
                    return this.ma(s, i)
                }
                ma(t, i) {
                    let s = t;
                    return this.mr() ? s = function(t, i) {
                        return i < 0 && (t = -t), t / 100 * i + i
                    }(s, i) : this.ra() && (s = function(t, i) {
                        return t -= 100, i < 0 && (t = -t), t / 100 * i + i
                    }(s, i)), s
                }
                al() {
                    return this.Hl
                }
                wa() {
                    if (this.Ul) return this.Ul;
                    let t = [];
                    for (let i = 0; i < this.Hl.length; i++) {
                        const s = this.Hl[i];
                        null === s.xi() && s.Ci(i + 1), t.push(s)
                    }
                    return t = Ui(t), this.Ul = t, this.Ul
                }
                ba(t) {
                    -1 === this.Hl.indexOf(t) && (this.Hl.push(t), this.rl(), this.ga())
                }
                Ma(t) {
                    const i = this.Hl.indexOf(t);
                    if (-1 === i) throw new Error("source is not attached to scale");
                    this.Hl.splice(i, 1), 0 === this.Hl.length && (this.sa({
                        ws: !0
                    }), this.la(null)), this.rl(), this.ga()
                }
                yt() {
                    let t = null;
                    for (const i of this.Hl) {
                        const s = i.yt();
                        null !== s && (null === t || s.qh < t.qh) && (t = s)
                    }
                    return null === t ? null : t.Tt
                }
                ha() {
                    return this.zi.invertScale
                }
                wl() {
                    const t = null === this.yt();
                    if (null !== this.ql && (t || this.ql.Sa === t)) return this.ql.wl;
                    this.Ql.Dl();
                    const i = this.Ql.wl();
                    return this.ql = {
                        wl: i,
                        Sa: t
                    }, this.jl.m(), i
                }
                ya() {
                    return this.jl
                }
                ka(t) {
                    this.mr() || this.ra() || null === this.Yl && null === this.Ll && (this.vi() || (this.Yl = this.El - t, this.Ll = f(this.Er()).yr()))
                }
                xa(t) {
                    if (this.mr() || this.ra()) return;
                    if (null === this.Yl) return;
                    this.sa({
                        ws: !1
                    }), (t = this.El - t) < 0 && (t = 0);
                    let i = (this.Yl + .2 * (this.El - 1)) / (t + .2 * (this.El - 1));
                    const s = f(this.Ll).yr();
                    i = Math.max(i, .1), s.Pr(i), this.la(s)
                }
                Ca() {
                    this.mr() || this.ra() || (this.Yl = null, this.Ll = null)
                }
                Ta(t) {
                    this.ea() || null === this.Xl && null === this.Ll && (this.vi() || (this.Xl = t, this.Ll = f(this.Er()).yr()))
                }
                Pa(t) {
                    if (this.ea()) return;
                    if (null === this.Xl) return;
                    const i = f(this.Er()).Tr() / (this.ua() - 1);
                    let s = t - this.Xl;
                    this.ha() && (s *= -1);
                    const h = s * i,
                        e = f(this.Ll).yr();
                    e.Dr(h), this.la(e, !0), this.ql = null
                }
                Da() {
                    this.ea() || null !== this.Xl && (this.Xl = null, this.Ll = null)
                }
                Qh() {
                    return this.tl || this.rl(), this.tl
                }
                mi(t, i) {
                    switch (this.zi.mode) {
                        case 2:
                            return this.Qh().format(ki(t, i));
                        case 3:
                            return this.Qh().format(Oi(t, i));
                        default:
                            return this.Br(t)
                    }
                }
                Rl(t) {
                    switch (this.zi.mode) {
                        case 2:
                        case 3:
                            return this.Qh().format(t);
                        default:
                            return this.Br(t)
                    }
                }
                Rh(t) {
                    return this.Br(t, f(this.Oa()).Qh())
                }
                Ah(t, i) {
                    return t = ki(t, i), Ai.format(t)
                }
                Na() {
                    return this.Hl
                }
                Ra(t) {
                    this.Vl = {
                        Fl: t,
                        Bl: !1
                    }
                }
                hs() {
                    this.Hl.forEach((t => t.hs()))
                }
                rl() {
                    this.ql = null;
                    const t = this.Oa();
                    let i = 100;
                    null !== t && (i = Math.round(1 / t.Jh())), this.tl = qi,
                        this.mr() ? (this.tl = Ai, i = 100) : this.ra() ? (this.tl = new nt(100, 1), i = 100) : null !== t && (this.tl = t.Qh()), this.Ql = new Di(this, i, this.ta.bind(this), this.ia.bind(this)), this.Ql.Dl()
                }
                ga() {
                    this.Ul = null
                }
                Oa() {
                    return this.Hl[0] || null
                }
                ca() {
                    return this.ha() ? this.zi.scaleMargins.bottom * this.qt() + this.Wl : this.zi.scaleMargins.top * this.qt() + this.zl
                }
                da() {
                    return this.ha() ? this.zi.scaleMargins.top * this.qt() + this.zl : this.zi.scaleMargins.bottom * this.qt() + this.Wl
                }
                fa() {
                    this.Vl.Bl || (this.Vl.Bl = !0, this.Aa())
                }
                na() {
                    this.Il = null
                }
                ia(t, i) {
                    if (this.fa(), this.vi()) return 0;
                    t = this.Al() && t ? Bi(t, this.Kl) : t;
                    const s = f(this.Er()),
                        h = this.da() + (this.ua() - 1) * (t - s.kr()) / s.Tr();
                    return this.pa(h)
                }
                ta(t, i) {
                    if (this.fa(), this.vi()) return 0;
                    const s = this.pa(t),
                        h = f(this.Er()),
                        e = h.kr() + h.Tr() * ((s - this.da()) / (this.ua() - 1));
                    return this.Al() ? Ri(e, this.Kl) : e
                }
                aa() {
                    this.ql = null, this.Ql.Dl()
                }
                Aa() {
                    const t = this.Vl.Fl;
                    if (null === t) return;
                    let i = null;
                    const s = this.Na();
                    let h = 0,
                        e = 0;
                    for (const n of s) {
                        if (!n.St()) continue;
                        const s = n.yt();
                        if (null === s) continue;
                        const r = n.Zh(t.Us(), t.qs());
                        let l = r && r.Er();
                        if (null !== l) {
                            switch (this.zi.mode) {
                                case 1:
                                    l = Vi(l, this.Kl);
                                    break;
                                case 2:
                                    l = Li(l, s.Tt);
                                    break;
                                case 3:
                                    l = Ii(l, s.Tt)
                            }
                            if (i = null === i ? l : i.Ps(f(l)), null !== r) {
                                const t = r.Ir();
                                null !== t && (h = Math.max(h, t.above), e = Math.max(h, t.below))
                            }
                        }
                    }
                    if (h === this.zl && e === this.Wl || (this.zl = h, this.Wl = e, this.ql = null, this.na()), null !== i) {
                        if (i.kr() === i.Cr()) {
                            const t = this.Oa(),
                                s = 5 * (null === t || this.mr() || this.ra() ? 1 : t.Jh());
                            this.Al() && (i = Pi(i, this.Kl)), i = new di(i.kr() - s, i.Cr() + s), this.Al() && (i = Vi(i, this.Kl))
                        }
                        if (this.Al()) {
                            const t = Pi(i, this.Kl),
                                s = Ji(t);
                            if (n = s, r = this.Kl, n.bl !== r.bl || n.gl !== r.gl) {
                                const h = null !== this.Ll ? Pi(this.Ll, this.Kl) : null;
                                this.Kl = s, i = Vi(t, s), null !== h && (this.Ll = Vi(h, s))
                            }
                        }
                        this.la(i)
                    } else null === this.Rr && (this.la(new di(-.5, .5)), this.Kl = Ji(null));
                    var n, r;
                    this.Vl.Bl = !0
                }
                va() {
                    return this.mr() ? ki : this.ra() ? Oi : this.Al() ? t => Bi(t, this.Kl) : null
                }
                Br(t, i) {
                    return void 0 === this.Jl.priceFormatter ? (void 0 === i && (i = this.Qh()), i.format(t)) : this.Jl.priceFormatter(t)
                }
            }
            class Gi {
                constructor(t, i) {
                    this.Hl = [], this.Ea = new Map, this.El = 0, this._e = 0, this.Ia = 1e3, this.Ul = null, this.La = new C, this.Va = t, this.gi = i, this.Ba = new Ei(this);
                    const s = i.B();
                    this.Fa = this.za("left", s.leftPriceScale), this.Wa = this.za("right", s.rightPriceScale), this.Fa.oa().l(this.ja.bind(this, this.Fa), this), this.Wa.oa().l(this.ja.bind(this, this.Wa), this), this.$a(s)
                }
                $a(t) {
                    if (t.leftPriceScale && this.Fa.Wr(t.leftPriceScale), t.rightPriceScale && this.Wa.Wr(t.rightPriceScale), t.localization && (this.Fa.rl(), this.Wa.rl()), t.overlayPriceScales) {
                        const i = Array.from(this.Ea.values());
                        for (const s of i) {
                            const i = f(s[0].Ct());
                            i.Wr(t.overlayPriceScales), t.localization && i.rl()
                        }
                    }
                }
                Ha(t) {
                    switch (t) {
                        case "left":
                            return this.Fa;
                        case "right":
                            return this.Wa
                    }
                    return this.Ea.has(t) ? c(this.Ea.get(t))[0].Ct() : null
                }
                M() {
                    this.jt().Ua().v(this), this.Fa.oa().v(this), this.Wa.oa().v(this), this.Hl.forEach((t => {
                        t.M && t.M()
                    })), this.La.m()
                }
                qa() {
                    return this.Ia
                }
                Ya(t) {
                    this.Ia = t
                }
                jt() {
                    return this.gi
                }
                Ut() {
                    return this._e
                }
                qt() {
                    return this.El
                }
                Xa(t) {
                    this._e = t, this.Ka()
                }
                _a(t) {
                    this.El = t, this.Fa._a(t), this.Wa._a(t), this.Hl.forEach((i => {
                        if (this.ve(i)) {
                            const s = i.Ct();
                            null !== s && s._a(t)
                        }
                    })), this.Ka()
                }
                al() {
                    return this.Hl
                }
                ve(t) {
                    const i = t.Ct();
                    return null === i || this.Fa !== i && this.Wa !== i
                }
                ba(t, i, s) {
                    const h = void 0 !== s ? s : this.Ga().Za + 1;
                    this.Ja(t, i, h)
                }
                Ma(t) {
                    const i = this.Hl.indexOf(t);
                    u(-1 !== i, "removeDataSource: invalid data source"), this.Hl.splice(i, 1);
                    const s = f(t.Ct()).el();
                    if (this.Ea.has(s)) {
                        const i = c(this.Ea.get(s)),
                            h = i.indexOf(t); - 1 !== h && (i.splice(h, 1), 0 === i.length && this.Ea.delete(s))
                    }
                    const h = t.Ct();
                    h && h.al().indexOf(t) >= 0 && h.Ma(t), null !== h && (h.ga(), this.Qa(h)), this.Ul = null
                }
                we(t) {
                    return t === this.Fa ? "left" : t === this.Wa ? "right" : "overlay"
                }
                io() {
                    return this.Fa
                }
                so() {
                    return this.Wa
                }
                no(t, i) {
                    t.ka(i)
                }
                eo(t, i) {
                    t.xa(i), this.Ka()
                }
                ro(t) {
                    t.Ca()
                }
                ho(t, i) {
                    t.Ta(i)
                }
                lo(t, i) {
                    t.Pa(i), this.Ka()
                }
                ao(t) {
                    t.Da()
                }
                Ka() {
                    this.Hl.forEach((t => {
                        t.hs()
                    }))
                }
                $i() {
                    let t = null;
                    return this.gi.B().rightPriceScale.visible && 0 !== this.Wa.al().length ? t = this.Wa : this.gi.B().leftPriceScale.visible && 0 !== this.Fa.al().length ? t = this.Fa : 0 !== this.Hl.length && (t = this.Hl[0].Ct()), null === t && (t = this.Wa), t
                }
                me() {
                    let t = null;
                    return this.gi.B().rightPriceScale.visible ? t = this.Wa : this.gi.B().leftPriceScale.visible && (t = this.Fa), t
                }
                Qa(t) {
                    null !== t && t.ea() && this.oo(t)
                }
                _o(t) {
                    const i = this.Va.ln();
                    t.sa({
                        ws: !0
                    }), null !== i && t.Ra(i), this.Ka()
                }
                uo() {
                    this.oo(this.Fa), this.oo(this.Wa)
                }
                co() {
                    this.Qa(this.Fa), this.Qa(this.Wa), this.Hl.forEach((t => {
                        this.ve(t) && this.Qa(t.Ct())
                    })), this.Ka(), this.gi.jr()
                }
                wa() {
                    return null === this.Ul && (this.Ul = Ui(this.Hl)), this.Ul
                }
                do() {
                    return this.La
                }
                fo() {
                    return this.Ba
                }
                oo(t) {
                    const i = t.Na();
                    if (i && i.length > 0 && !this.Va.vi()) {
                        const i = this.Va.ln();
                        null !== i && t.Ra(i)
                    }
                    t.hs()
                }
                Ga() {
                    const t = this.wa();
                    if (0 === t.length) return {
                        po: 0,
                        Za: 0
                    };
                    let i = 0,
                        s = 0;
                    for (let h = 0; h < t.length; h++) {
                        const e = t[h].xi();
                        null !== e && (e < i && (i = e), e > s && (s = e))
                    }
                    return {
                        po: i,
                        Za: s
                    }
                }
                Ja(t, i, s) {
                    let h = this.Ha(i);
                    if (null === h && (h = this.za(i, this.gi.B().overlayPriceScales)), this.Hl.push(t), !st(i)) {
                        const s = this.Ea.get(i) || [];
                        s.push(t), this.Ea.set(i, s)
                    }
                    h.ba(t), t.Ti(h), t.Ci(s), this.Qa(h), this.Ul = null
                }
                ja(t, i, s) {
                    i.ye !== s.ye && this.oo(t)
                }
                za(t, i) {
                    const s = Object.assign({
                            visible: !0,
                            autoScale: !0
                        }, z(i)),
                        h = new Wi(t, s, this.gi.B().layout, this.gi.B().localization);
                    return h._a(this.qt()), h
                }
            }
            const Ki = t => t.getUTCFullYear();
            class Zi {
                constructor(t = "yyyy-MM-dd", i = "default") {
                    this.vo = t, this.mo = i
                }
                wo(t) {
                    return function(t, i, s) {
                        return i.replace(/yyyy/g, (t => et(Ki(t), 4))(t)).replace(/yy/g, (t => et(Ki(t) % 100, 2))(t)).replace(/MMMM/g, ((t, i) => new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
                            month: "long"
                        }))(t, s)).replace(/MMM/g, ((t, i) => new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
                            month: "short"
                        }))(t, s)).replace(/MM/g, (t => et((t => t.getUTCMonth() + 1)(t), 2))(t)).replace(/dd/g, (t => et((t => t.getUTCDate())(t), 2))(t))
                    }(t, this.vo, this.mo)
                }
            }
            class $i {
                constructor(t) {
                    this.bo = t || "%h:%m:%s"
                }
                wo(t) {
                    return this.bo.replace("%h", et(t.getUTCHours(), 2)).replace("%m", et(t.getUTCMinutes(), 2)).replace("%s", et(t.getUTCSeconds(), 2))
                }
            }
            const Yi = {
                Mo: "yyyy-MM-dd",
                So: "%h:%m:%s",
                yo: " ",
                ko: "default"
            };
            class Hi {
                constructor(t = {}) {
                    const i = Object.assign(Object.assign({}, Yi), t);
                    this.xo = new Zi(i.Mo, i.ko),
                        this.Co = new $i(i.So), this.To = i.yo
                }
                wo(t) {
                    return `${this.xo.wo(t)}${this.To}${this.Co.wo(t)}`
                }
            }
            class Qi {
                constructor(t, i = 50) {
                    this.Po = 0, this.Do = 1, this.Oo = 1, this.ee = new Map, this.No = new Map, this.Ro = t, this.Ao = i
                }
                wo(t) {
                    const i = t.rt,
                        s = void 0 === i.Eo ? new Date(1e3 * i.Io).getTime() : new Date(Date.UTC(i.Eo.year, i.Eo.month - 1, i.Eo.day)).getTime(),
                        h = this.ee.get(s);
                    if (void 0 !== h) return h.Lo;
                    if (this.Po === this.Ao) {
                        const t = this.No.get(this.Oo);
                        this.No.delete(this.Oo), this.ee.delete(c(t)), this.Oo++, this.Po--
                    }
                    const e = this.Ro(t);
                    return this.ee.set(s, {
                        Lo: e,
                        Vo: this.Do
                    }), this.No.set(this.Do, s), this.Po++, this.Do++, e
                }
            }
            class Xi {
                constructor(t, i) {
                    u(t <= i, "right should be >= left"), this.Bo = t, this.Fo = i
                }
                Us() {
                    return this.Bo
                }
                qs() {
                    return this.Fo
                }
                zo() {
                    return this.Fo - this.Bo + 1
                }
                Xe(t) {
                    return this.Bo <= t && t <= this.Fo
                }
                Sr(t) {
                    return this.Bo === t.Us() && this.Fo === t.qs()
                }
            }

            function ts(t, i) {
                return null === t || null === i ? t === i : t.Sr(i)
            }
            class is {
                constructor() {
                    this.Wo = new Map, this.ee = null
                }
                jo(t, i) {
                    this.$o(i), this.ee = null;
                    for (let s = i; s < t.length; ++s) {
                        const i = t[s];
                        let h = this.Wo.get(i.Ho);
                        void 0 === h && (h = [], this.Wo.set(i.Ho, h)), h.push({
                            vn: s,
                            rt: i.rt,
                            Uo: i.Ho,
                            qo: i.qo
                        })
                    }
                }
                Yo(t, i) {
                    const s = Math.ceil(i / t);
                    return null !== this.ee && this.ee.Xo === s || (this.ee = {
                        wl: this.Ko(s),
                        Xo: s
                    }), this.ee.wl
                }
                $o(t) {
                    if (0 === t) return void this.Wo.clear();
                    const i = [];
                    this.Wo.forEach(((s, h) => {
                        t <= s[0].vn ? i.push(h) : s.splice(mt(s, t, (i => i.vn < t)), 1 / 0)
                    }));
                    for (const t of i) this.Wo.delete(t)
                }
                Ko(t) {
                    let i = [];
                    for (const s of Array.from(this.Wo.keys()).sort(((t, i) => i - t))) {
                        if (!this.Wo.get(s)) continue;
                        const h = i;
                        i = [];
                        const e = h.length;
                        let n = 0;
                        const r = c(this.Wo.get(s)),
                            l = r.length;
                        let o = 1 / 0,
                            a = -1 / 0;
                        for (let s = 0; s < l; s++) {
                            const l = r[s],
                                u = l.vn;
                            for (; n < e;) {
                                const t = h[n],
                                    s = t.vn;
                                if (!(s < u)) {
                                    o = s;
                                    break
                                }
                                n++, i.push(t), a = s, o = 1 / 0
                            }
                            o - u >= t && u - a >= t && (i.push(l), a = u)
                        }
                        for (; n < e; n++) i.push(h[n])
                    }
                    return i
                }
            }
            class ss {
                constructor(t) {
                    this.Zo = t
                }
                Go() {
                    return null === this.Zo ? null : new Xi(Math.floor(this.Zo.Us()), Math.ceil(this.Zo.qs()))
                }
                Jo() {
                    return this.Zo
                }
                static Qo() {
                    return new ss(null)
                }
            }
            var hs, es, ns, rs, ls;
            ! function(t) {
                t[t.Year = 0] = "Year", t[t.Month = 1] = "Month", t[t.DayOfMonth = 2] = "DayOfMonth", t[t.Time = 3] = "Time", t[t.TimeWithSeconds = 4] = "TimeWithSeconds"
            }(hs || (hs = {}));
            class os {
                constructor(t, i, s) {
                    this._e = 0, this.t_ = null, this.i_ = [], this.Xl = null, this.Yl = null, this.s_ = new is, this.n_ = new Map, this.e_ = ss.Qo(), this.r_ = !0, this.h_ = new C, this.l_ = new C, this.a_ = new C, this.o_ = null, this.__ = null, this.u_ = [], this.zi = i, this.Jl = s, this.c_ = i.rightOffset, this.d_ = i.barSpacing, this.gi = t, this.f_()
                }
                B() {
                    return this.zi
                }
                p_(t) {
                    S(this.Jl, t), this.v_(), this.f_()
                }
                Wr(t, i) {
                    var s;
                    S(this.zi, t), this.zi.fixLeftEdge && this.m_(), this.zi.fixRightEdge && this.w_(), void 0 !== t.barSpacing && this.gi.xs(t.barSpacing), void 0 !== t.rightOffset && this.gi.Cs(t.rightOffset), void 0 !== t.minBarSpacing && this.gi.xs(null !== (s = t.barSpacing) && void 0 !== s ? s : this.d_), this.v_(), this.f_(), this.a_.m()
                }
                Ui(t) {
                    var i, s;
                    return null !== (s = null === (i = this.i_[t]) || void 0 === i ? void 0 : i.rt) && void 0 !== s ? s : null
                }
                Mi(t) {
                    var i;
                    return null !== (i = this.i_[t]) && void 0 !== i ? i : null
                }
                hl(t, i) {
                    if (this.i_.length < 1) return null;
                    if (t.Io > this.i_[this.i_.length - 1].rt.Io) return i ? this.i_.length - 1 : null;
                    const s = mt(this.i_, t.Io, ((t, i) => t.rt.Io < i));
                    return t.Io < this.i_[s].rt.Io ? i ? s : null : s
                }
                vi() {
                    return 0 === this._e || 0 === this.i_.length || null === this.t_
                }
                ln() {
                    return this.b_(), this.e_.Go()
                }
                g_() {
                    return this.b_(), this.e_.Jo()
                }
                M_() {
                    const t = this.ln();
                    if (null === t) return null;
                    const i = {
                        from: t.Us(),
                        to: t.qs()
                    };
                    return this.S_(i)
                }
                S_(t) {
                    const i = Math.round(t.from),
                        s = Math.round(t.to),
                        h = f(this.y_()),
                        e = f(this.k_());
                    return {
                        from: f(this.Ui(Math.max(h, i))),
                        to: f(this.Ui(Math.min(e, s)))
                    }
                }
                x_(t) {
                    return {
                        from: f(this.hl(t.from, !0)),
                        to: f(this.hl(t.to, !0))
                    }
                }
                Ut() {
                    return this._e
                }
                Xa(t) {
                    if (!isFinite(t) || t <= 0) return;
                    if (this._e === t) return;
                    const i = this.g_(),
                        s = this._e;
                    if (this._e = t, this.r_ = !0, this.zi.lockVisibleTimeRangeOnResize && 0 !== s) {
                        const i = this.d_ * t / s;
                        this.d_ = i
                    }
                    if (this.zi.fixLeftEdge && null !== i && i.Us() <= 0) {
                        const i = s - t;
                        this.c_ -= Math.round(i / this.d_) + 1, this.r_ = !0
                    }
                    this.C_(), this.T_()
                }
                Ot(t) {
                    if (this.vi() || !T(t)) return 0;
                    const i = this.P_() + this.c_ - t;
                    return this._e - (i + .5) * this.d_ - 1
                }
                _n(t, i) {
                    const s = this.P_(),
                        h = void 0 === i ? 0 : i.from,
                        e = void 0 === i ? t.length : i.to;
                    for (let i = h; i < e; i++) {
                        const h = t[i].rt,
                            e = s + this.c_ - h,
                            n = this._e - (e + .5) * this.d_ - 1;
                        t[i].tt = n
                    }
                }
                D_(t) {
                    return Math.ceil(this.O_(t))
                }
                Cs(t) {
                    this.r_ = !0, this.c_ = t, this.T_(), this.gi.N_(), this.gi.jr()
                }
                bn() {
                    return this.d_
                }
                xs(t) {
                    this.R_(t), this.T_(), this.gi.N_(), this.gi.jr()
                }
                A_() {
                    return this.c_
                }
                wl() {
                    if (this.vi()) return null;
                    if (null !== this.__) return this.__;
                    const t = this.d_,
                        i = 5 * (this.gi.B().layout.fontSize + 4),
                        s = Math.round(i / t),
                        h = f(this.ln()),
                        e = Math.max(h.Us(), h.Us() - s),
                        n = Math.max(h.qs(), h.qs() - s),
                        r = this.s_.Yo(t, i),
                        l = this.y_() + s,
                        o = this.k_() - s,
                        a = this.E_(),
                        u = this.zi.fixLeftEdge || a,
                        c = this.zi.fixRightEdge || a;
                    let d = 0;
                    for (const t of r) {
                        if (!(e <= t.vn && t.vn <= n)) continue;
                        let s;
                        d < this.u_.length ? (s = this.u_[d], s.dl = this.Ot(t.vn), s.Nl = this.I_(t), s.Uo = t.Uo) : (s = {
                            L_: !1,
                            dl: this.Ot(t.vn),
                            Nl: this.I_(t),
                            Uo: t.Uo
                        }, this.u_.push(s)), this.d_ > i / 2 && !a ? s.L_ = !1 : s.L_ = u && t.vn <= l || c && t.vn >= o, d++
                    }
                    return this.u_.length = d, this.__ = this.u_, this.u_
                }
                V_() {
                    this.r_ = !0, this.xs(this.zi.barSpacing), this.Cs(this.zi.rightOffset)
                }
                B_(t) {
                    this.r_ = !0, this.t_ = t, this.T_(), this.m_()
                }
                F_(t, i) {
                    const s = this.O_(t),
                        h = this.bn(),
                        e = h + i * (h / 10);
                    this.xs(e), this.zi.rightBarStaysOnScroll || this.Cs(this.A_() + (s - this.O_(t)))
                }
                ka(t) {
                    this.Xl && this.Da(), null === this.Yl && null === this.o_ && (this.vi() || (this.Yl = t, this.z_()))
                }
                xa(t) {
                    if (null === this.o_) return;
                    const i = xt(this._e - t, 0, this._e),
                        s = xt(this._e - f(this.Yl), 0, this._e);
                    0 !== i && 0 !== s && this.xs(this.o_.bn * i / s)
                }
                Ca() {
                    null !== this.Yl && (this.Yl = null, this.W_())
                }
                Ta(t) {
                    null === this.Xl && null === this.o_ && (this.vi() || (this.Xl = t, this.z_()))
                }
                Pa(t) {
                    if (null === this.Xl) return;
                    const i = (this.Xl - t) / this.bn();
                    this.c_ = f(this.o_).A_ + i, this.r_ = !0, this.T_()
                }
                Da() {
                    null !== this.Xl && (this.Xl = null, this.W_())
                }
                j_() {
                    this.H_(this.zi.rightOffset)
                }
                H_(t, i = 400) {
                    if (!isFinite(t)) throw new RangeError("offset is required and must be finite number");
                    if (!isFinite(i) || i <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
                    const s = this.c_,
                        h = performance.now(),
                        e = () => {
                            const n = (performance.now() - h) / i,
                                r = n >= 1,
                                l = r ? t : s + (t - s) * n;
                            this.Cs(l), r || setTimeout(e, 20)
                        };
                    e()
                }
                dt(t, i) {
                    this.r_ = !0,
                        this.i_ = t, this.s_.jo(t, i), this.T_()
                }
                U_() {
                    return this.h_
                }
                q_() {
                    return this.l_
                }
                Y_() {
                    return this.a_
                }
                P_() {
                    return this.t_ || 0
                }
                X_(t) {
                    const i = t.zo();
                    this.R_(this._e / i), this.c_ = t.qs() - this.P_(), this.T_(), this.r_ = !0, this.gi.N_(), this.gi.jr()
                }
                K_() {
                    const t = this.y_(),
                        i = this.k_();
                    null !== t && null !== i && this.X_(new Xi(t, i + this.zi.rightOffset))
                }
                Z_(t) {
                    const i = new Xi(t.from, t.to);
                    this.X_(i)
                }
                Si(t) {
                    return void 0 !== this.Jl.timeFormatter ? this.Jl.timeFormatter(t.qo) : this.G_.wo(new Date(1e3 * t.rt.Io))
                }
                E_() {
                    const {
                        handleScroll: t,
                        handleScale: i
                    } = this.gi.B();
                    return !(t.horzTouchDrag || t.mouseWheel || t.pressedMouseMove || t.vertTouchDrag || i.axisDoubleClickReset || i.axisPressedMouseMove.time || i.mouseWheel || i.pinch)
                }
                y_() {
                    return 0 === this.i_.length ? null : 0
                }
                k_() {
                    return 0 === this.i_.length ? null : this.i_.length - 1
                }
                J_(t) {
                    return (this._e - 1 - t) / this.d_
                }
                O_(t) {
                    const i = this.J_(t),
                        s = this.P_() + this.c_ - i;
                    return Math.round(1e6 * s) / 1e6
                }
                R_(t) {
                    const i = this.d_;
                    this.d_ = t, this.C_(), i !== this.d_ && (this.r_ = !0, this.Q_())
                }
                b_() {
                    if (!this.r_) return;
                    if (this.r_ = !1, this.vi()) return void this.tu(ss.Qo());
                    const t = this.P_(),
                        i = this._e / this.d_,
                        s = this.c_ + t,
                        h = new Xi(s - i + 1, s);
                    this.tu(new ss(h))
                }
                C_() {
                    const t = this.iu();
                    if (this.d_ < t && (this.d_ = t, this.r_ = !0), 0 !== this._e) {
                        const t = .5 * this._e;
                        this.d_ > t && (this.d_ = t, this.r_ = !0)
                    }
                }
                iu() {
                    return this.zi.fixLeftEdge && this.zi.fixRightEdge && 0 !== this.i_.length ? this._e / this.i_.length : this.zi.minBarSpacing
                }
                T_() {
                    const t = this.su();
                    this.c_ > t && (this.c_ = t, this.r_ = !0);
                    const i = this.nu();
                    null !== i && this.c_ < i && (this.c_ = i, this.r_ = !0)
                }
                nu() {
                    const t = this.y_(),
                        i = this.t_;
                    return null === t || null === i ? null : t - i - 1 + (this.zi.fixLeftEdge ? this._e / this.d_ : Math.min(2, this.i_.length))
                }
                su() {
                    return this.zi.fixRightEdge ? 0 : this._e / this.d_ - Math.min(2, this.i_.length)
                }
                z_() {
                    this.o_ = {
                        bn: this.bn(),
                        A_: this.A_()
                    }
                }
                W_() {
                    this.o_ = null
                }
                I_(t) {
                    let i = this.n_.get(t.Uo);
                    return void 0 === i && (i = new Qi((t => this.eu(t))), this.n_.set(t.Uo, i)), i.wo(t)
                }
                eu(t) {
                    const i = function(t, i, s) {
                        switch (t) {
                            case 0:
                            case 10:
                                return i ? s ? 4 : 3 : 2;
                            case 20:
                            case 21:
                            case 22:
                            case 30:
                            case 31:
                            case 32:
                            case 33:
                                return i ? 3 : 2;
                            case 50:
                                return 2;
                            case 60:
                                return 1;
                            case 70:
                                return 0
                        }
                    }(t.Uo, this.zi.timeVisible, this.zi.secondsVisible);
                    return void 0 !== this.zi.tickMarkFormatter ? this.zi.tickMarkFormatter(t.qo, i, this.Jl.locale) : function(t, i, s) {
                        const h = {};
                        switch (i) {
                            case 0:
                                h.year = "numeric";
                                break;
                            case 1:
                                h.month = "short";
                                break;
                            case 2:
                                h.day = "numeric";
                                break;
                            case 3:
                                h.hour12 = !1, h.hour = "2-digit", h.minute = "2-digit";
                                break;
                            case 4:
                                h.hour12 = !1, h.hour = "2-digit", h.minute = "2-digit", h.second = "2-digit"
                        }
                        const e = void 0 === t.Eo ? new Date(1e3 * t.Io) : new Date(Date.UTC(t.Eo.year, t.Eo.month - 1, t.Eo.day));
                        return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()).toLocaleString(s, h)
                    }(t.rt, i, this.Jl.locale)
                }
                tu(t) {
                    const i = this.e_;
                    this.e_ = t, ts(i.Go(), this.e_.Go()) || this.h_.m(), ts(i.Jo(), this.e_.Jo()) || this.l_.m(), this.Q_()
                }
                Q_() {
                    this.__ = null
                }
                v_() {
                    this.Q_(), this.n_.clear()
                }
                f_() {
                    const t = this.Jl.dateFormat;
                    this.zi.timeVisible ? this.G_ = new Hi({
                        Mo: t,
                        So: this.zi.secondsVisible ? "%h:%m:%s" : "%h:%m",
                        yo: "   ",
                        ko: this.Jl.locale
                    }) : this.G_ = new Zi(t, this.Jl.locale)
                }
                m_() {
                    if (!this.zi.fixLeftEdge) return;
                    const t = this.y_();
                    if (null === t) return;
                    const i = this.ln();
                    if (null === i) return;
                    const s = i.Us() - t;
                    if (s < 0) {
                        const t = this.c_ - s - 1;
                        this.Cs(t)
                    }
                    this.C_()
                }
                w_() {
                    this.T_(), this.C_()
                }
            }
            class as extends V {
                constructor(t) {
                    super(), this.ru = new Map, this.Nt = t
                }
                q(t) {}
                X(t) {
                    if (!this.Nt.St) return;
                    t.save();
                    let i = 0;
                    for (const s of this.Nt.hu) {
                        if (0 === s.Jt.length) continue;
                        t.font = s.P;
                        const h = this.lu(t, s.Jt);
                        h > this.Nt.Ut ? s.F_ = this.Nt.Ut / h : s.F_ = 1, i += s.au * s.F_
                    }
                    let s = 0;
                    switch (this.Nt.ou) {
                        case "top":
                            s = 0;
                            break;
                        case "center":
                            s = Math.max((this.Nt.qt - i) / 2, 0);
                            break;
                        case "bottom":
                            s = Math.max(this.Nt.qt - i, 0)
                    }
                    t.fillStyle = this.Nt.O;
                    for (const i of this.Nt.hu) {
                        t.save();
                        let h = 0;
                        switch (this.Nt._u) {
                            case "left":
                                t.textAlign = "left", h = i.au / 2;
                                break;
                            case "center":
                                t.textAlign = "center", h = this.Nt.Ut / 2;
                                break;
                            case "right":
                                t.textAlign = "right", h = this.Nt.Ut - 1 - i.au / 2
                        }
                        t.translate(h, s), t.textBaseline = "top", t.font = i.P, t.scale(i.F_, i.F_), t.fillText(i.Jt, 0, i.uu), t.restore(), s += i.au * i.F_
                    }
                    t.restore()
                }
                lu(t, i) {
                    const s = this.cu(t.font);
                    let h = s.get(i);
                    return void 0 === h && (h = t.measureText(i).width, s.set(i, h)), h
                }
                cu(t) {
                    let i = this.ru.get(t);
                    return void 0 === i && (i = new Map, this.ru.set(t, i)), i
                }
            }
            class us {
                constructor(t) {
                    this.ut = !0, this.Bt = {
                        St: !1,
                        O: "",
                        qt: 0,
                        Ut: 0,
                        hu: [],
                        ou: "center",
                        _u: "center"
                    }, this.Ft = new as(this.Bt), this.zt = t
                }
                dt() {
                    this.ut = !0
                }
                vt(t, i) {
                    return this.ut && (this.wt(t, i), this.ut = !1), this.Ft
                }
                wt(t, i) {
                    const s = this.zt.B(),
                        h = this.Bt;
                    h.St = s.visible, h.St && (h.O = s.color, h.Ut = i, h.qt = t, h._u = s.horzAlign, h.ou = s.vertAlign, h.hu = [{
                        Jt: s.text,
                        P: I(s.fontSize, s.fontFamily, s.fontStyle),
                        au: 1.2 * s.fontSize,
                        uu: 0,
                        F_: 0
                    }])
                }
            }
            class cs extends X {
                constructor(t, i) {
                    super(), this.zi = i, this.Yi = new us(this)
                }
                es() {
                    return []
                }
                ns() {
                    return [this.Yi]
                }
                B() {
                    return this.zi
                }
                hs() {
                    this.Yi.dt()
                }
            }! function(t) {
                t[t.OnTouchEnd = 0] = "OnTouchEnd", t[t.OnNextTap = 1] = "OnNextTap"
            }(es || (es = {}));
            class fs {
                constructor(t, i) {
                    this.du = [], this.fu = [], this._e = 0, this.pu = null, this.vu = null, this.mu = new C, this.wu = new C, this.bu = null, this.gu = t, this.zi = i, this.Mu = new B(this), this.Va = new os(this, i.timeScale, this.zi.localization), this.ct = new it(this, i.crosshair), this.Su = new Ni(i.crosshair), this.yu = new cs(this, i.watermark), this.ku(), this.du[0].Ya(2e3), this.xu = this.Cu(0), this.Tu = this.Cu(1)
                }
                Ih() {
                    this.Pu(new ht(3))
                }
                jr() {
                    this.Pu(new ht(2))
                }
                Xh() {
                    this.Pu(new ht(1))
                }
                Lh(t) {
                    const i = this.Du(t);
                    this.Pu(i)
                }
                Ou() {
                    return this.vu
                }
                Nu(t) {
                    const i = this.vu;
                    this.vu = t, null !== i && this.Lh(i.Ru), null !== t && this.Lh(t.Ru)
                }
                B() {
                    return this.zi
                }
                Wr(t) {
                    S(this.zi, t), this.du.forEach((i => i.$a(t))), void 0 !== t.timeScale && this.Va.Wr(t.timeScale), void 0 !== t.localization && this.Va.p_(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.mu.m(), this.xu = this.Cu(0), this.Tu = this.Cu(1), this.Ih()
                }
                Au(t, i) {
                    if ("left" === t) return void this.Wr({
                        leftPriceScale: i
                    });
                    if ("right" === t) return void this.Wr({
                        rightPriceScale: i
                    });
                    const s = this.Eu(t);
                    null !== s && (s.Ct.Wr(i), this.mu.m())
                }
                Eu(t) {
                    for (const i of this.du) {
                        const s = i.Ha(t);
                        if (null !== s) return {
                            Wt: i,
                            Ct: s
                        }
                    }
                    return null
                }
                gt() {
                    return this.Va
                }
                Iu() {
                    return this.du
                }
                Lu() {
                    return this.yu
                }
                Vu() {
                    return this.ct
                }
                Bu() {
                    return this.wu
                }
                Fu(t, i) {
                    t._a(i),
                        this.N_()
                }
                Xa(t) {
                    this._e = t, this.Va.Xa(this._e), this.du.forEach((i => i.Xa(t))), this.N_()
                }
                ku(t) {
                    const i = new Gi(this.Va, this);
                    void 0 !== t ? this.du.splice(t, 0, i) : this.du.push(i);
                    const s = void 0 === t ? this.du.length - 1 : t,
                        h = new ht(3);
                    return h.ps(s, {
                        vs: 0,
                        ws: !0
                    }), this.Pu(h), i
                }
                no(t, i, s) {
                    t.no(i, s)
                }
                eo(t, i, s) {
                    t.eo(i, s), this.Vh(), this.Pu(this.zu(t, 2))
                }
                ro(t, i) {
                    t.ro(i), this.Pu(this.zu(t, 2))
                }
                ho(t, i, s) {
                    i.ea() || t.ho(i, s)
                }
                lo(t, i, s) {
                    i.ea() || (t.lo(i, s), this.Vh(), this.Pu(this.zu(t, 2)))
                }
                ao(t, i) {
                    i.ea() || (t.ao(i), this.Pu(this.zu(t, 2)))
                }
                _o(t, i) {
                    t._o(i), this.Pu(this.zu(t, 2))
                }
                Wu(t) {
                    this.Va.ka(t)
                }
                ju(t, i) {
                    const s = this.gt();
                    if (s.vi() || 0 === i) return;
                    const h = s.Ut();
                    t = Math.max(1, Math.min(t, h)), s.F_(t, i), this.N_()
                }
                $u(t) {
                    this.Hu(0), this.Uu(t), this.qu()
                }
                Yu(t) {
                    this.Va.xa(t), this.N_()
                }
                Xu() {
                    this.Va.Ca(), this.jr()
                }
                Hu(t) {
                    this.pu = t, this.Va.Ta(t)
                }
                Uu(t) {
                    let i = !1;
                    return null !== this.pu && Math.abs(t - this.pu) > 20 && (this.pu = null, i = !0), this.Va.Pa(t), this.N_(), i
                }
                qu() {
                    this.Va.Da(), this.jr(), this.pu = null
                }
                ft() {
                    return this.fu
                }
                Ku(t, i, s) {
                    this.ct.Xi(t, i);
                    let h = NaN,
                        e = this.Va.D_(t);
                    const n = this.Va.ln();
                    null !== n && (e = Math.min(Math.max(n.Us(), e), n.qs()));
                    const r = s.$i(),
                        l = r.yt();
                    null !== l && (h = r.Hi(i, l)), h = this.Su.ll(h, e, s), this.ct.Ji(e, h, s), this.Xh(), this.wu.m(this.ct.bt(), {
                        x: t,
                        y: i
                    })
                }
                Zu() {
                    this.Vu().ts(), this.Xh(), this.wu.m(null, null)
                }
                Vh() {
                    const t = this.ct.Wt();
                    if (null !== t) {
                        const i = this.ct.Zi(),
                            s = this.ct.Gi();
                        this.Ku(i, s, t)
                    }
                    this.ct.hs()
                }
                Gu(t, i, s) {
                    const h = this.Va.Ui(0);
                    void 0 !== i && void 0 !== s && this.Va.dt(i, s);
                    const e = this.Va.Ui(0),
                        n = this.Va.P_(),
                        r = this.Va.ln();
                    if (null !== r && null !== h && null !== e) {
                        const i = r.Xe(n),
                            s = h.Io > e.Io,
                            l = null !== t && t > n && !s,
                            o = i && this.Va.B().shiftVisibleRangeOnNewBar;
                        if (l && !o) {
                            const i = t - n;
                            this.Va.Cs(this.Va.A_() - i)
                        }
                    }
                    this.Va.B_(t)
                }
                zh(t) {
                    null !== t && t.co()
                }
                pe(t) {
                    const i = this.du.find((i => i.wa().includes(t)));
                    return void 0 === i ? null : i
                }
                N_() {
                    this.yu.hs(), this.du.forEach((t => t.co())), this.Vh()
                }
                M() {
                    this.du.forEach((t => t.M())), this.du.length = 0, this.zi.localization.priceFormatter = void 0, this.zi.localization.timeFormatter = void 0
                }
                Ju() {
                    return this.Mu
                }
                be() {
                    return this.Mu.B()
                }
                Ua() {
                    return this.mu
                }
                Qu(t, i) {
                    const s = this.du[0],
                        h = this.tc(i, t, s);
                    return this.fu.push(h), 1 === this.fu.length ? this.Ih() : this.jr(), h
                }
                ic(t) {
                    const i = this.pe(t),
                        s = this.fu.indexOf(t);
                    u(-1 !== s, "Series not found"), this.fu.splice(s, 1), f(i).Ma(t), t.M && t.M()
                }
                Eh(t, i) {
                    const s = f(this.pe(t));
                    s.Ma(t);
                    const h = this.Eu(i);
                    if (null === h) {
                        const h = t.xi();
                        s.ba(t, i, h)
                    } else {
                        const e = h.Wt === s ? t.xi() : void 0;
                        h.Wt.ba(t, i, e)
                    }
                }
                K_() {
                    const t = new ht(2);
                    t.Ms(), this.Pu(t)
                }
                sc(t) {
                    const i = new ht(2);
                    i.ys(t), this.Pu(i)
                }
                ks() {
                    const t = new ht(2);
                    t.ks(), this.Pu(t)
                }
                xs(t) {
                    const i = new ht(2);
                    i.xs(t), this.Pu(i)
                }
                Cs(t) {
                    const i = new ht(2);
                    i.Cs(t), this.Pu(i)
                }
                nc() {
                    return this.zi.rightPriceScale.visible ? "right" : "left"
                }
                ec() {
                    return this.Tu
                }
                rc() {
                    return this.xu
                }
                Dt(t) {
                    const i = this.Tu,
                        s = this.xu;
                    if (i === s) return i;
                    if (t = Math.max(0, Math.min(100, Math.round(100 * t))), null === this.bu || this.bu.Ws !== s || this.bu.js !== i) this.bu = {
                        Ws: s,
                        js: i,
                        hc: new Map
                    };
                    else {
                        const i = this.bu.hc.get(t);
                        if (void 0 !== i) return i
                    }
                    const h = function(t, i, s) {
                        const [h, e, n, r] = y(t), [l, o, a, u] = y(i), c = [p(h + s * (l - h)), p(e + s * (o - e)), p(n + s * (a - n)), m(r + s * (u - r))];
                        return `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${c[3]})`
                    }(s, i, t / 100);
                    return this.bu.hc.set(t, h), h
                }
                zu(t, i) {
                    const s = new ht(i);
                    if (null !== t) {
                        const h = this.du.indexOf(t);
                        s.ps(h, {
                            vs: i
                        })
                    }
                    return s
                }
                Du(t, i) {
                    return void 0 === i && (i = 2), this.zu(this.pe(t), i)
                }
                Pu(t) {
                    this.gu && this.gu(t), this.du.forEach((t => t.fo().$r().dt()))
                }
                tc(t, i, s) {
                    const h = new Si(this, t, i),
                        e = void 0 !== t.priceScaleId ? t.priceScaleId : this.nc();
                    return s.ba(h, e), st(e) || h.Wr(t), h
                }
                Cu(t) {
                    const i = this.zi.layout;
                    return "gradient" === i.background.type ? 0 === t ? i.background.topColor : i.background.bottomColor : i.background.color
                }
            }

            function ds(t) {
                void 0 !== t.borderColor && (t.borderUpColor = t.borderColor, t.borderDownColor = t.borderColor), void 0 !== t.wickColor && (t.wickUpColor = t.wickColor, t.wickDownColor = t.wickColor)
            }

            function vs(t) {
                return !N(t) && !x(t)
            }

            function ps(t) {
                return N(t)
            }! function(t) {
                t[t.Disabled = 0] = "Disabled", t[t.Continuous = 1] = "Continuous", t[t.OnDataUpdate = 2] = "OnDataUpdate"
            }(ns || (ns = {})),
            function(t) {
                t[t.LastBar = 0] = "LastBar", t[t.LastVisible = 1] = "LastVisible"
            }(rs || (rs = {})),
            function(t) {
                t.Solid = "solid", t.VerticalGradient = "gradient"
            }(ls || (ls = {}));
            class ms {
                constructor(t, i) {
                    this.Et = t, this.It = i
                }
                Sr(t) {
                    return this.Et === t.Et && this.It === t.It
                }
            }

            function gs(t) {
                return t.ownerDocument && t.ownerDocument.defaultView && t.ownerDocument.defaultView.devicePixelRatio || 1
            }

            function bs(t) {
                const i = f(t.getContext("2d"));
                return i.setTransform(1, 0, 0, 1, 0, 0), i
            }

            function Ms(t, i) {
                const s = t.createElement("canvas"),
                    h = gs(s);
                return s.style.width = `${i.Et}px`, s.style.height = `${i.It}px`, s.width = i.Et * h, s.height = i.It * h, s
            }

            function ws(t, i) {
                const s = f(t.ownerDocument).createElement("canvas");
                t.appendChild(s);
                const e = (void 0 === (n = {
                    allowDownsampling: !1
                }) && (n = h), new l(s, n));
                var n;
                return e.resizeCanvas({
                    width: i.Et,
                    height: i.It
                }), e
            }

            function ys(t, i) {
                return t.lc - i.lc
            }

            function _s(t, i, s) {
                const h = (t.lc - i.lc) / (t.rt - i.rt);
                return Math.sign(h) * Math.min(Math.abs(h), s)
            }
            class Cs {
                constructor(t, i, s, h) {
                    this.ac = null, this.oc = null, this._c = null, this.uc = null, this.cc = null, this.dc = 0, this.fc = 0, this.vc = !1, this.mc = t, this.wc = i, this.bc = s, this.Os = h
                }
                gc(t, i) {
                    if (null !== this.ac) {
                        if (this.ac.rt === i) return void(this.ac.lc = t);
                        if (Math.abs(this.ac.lc - t) < this.Os) return
                    }
                    this.uc = this._c, this._c = this.oc, this.oc = this.ac, this.ac = {
                        rt: i,
                        lc: t
                    }
                }
                De(t, i) {
                    if (null === this.ac || null === this.oc) return;
                    if (i - this.ac.rt > 50) return;
                    let s = 0;
                    const h = _s(this.ac, this.oc, this.wc),
                        e = ys(this.ac, this.oc),
                        n = [h],
                        r = [e];
                    if (s += e, null !== this._c) {
                        const t = _s(this.oc, this._c, this.wc);
                        if (Math.sign(t) === Math.sign(h)) {
                            const i = ys(this.oc, this._c);
                            if (n.push(t), r.push(i), s += i, null !== this.uc) {
                                const t = _s(this._c, this.uc, this.wc);
                                if (Math.sign(t) === Math.sign(h)) {
                                    const i = ys(this._c, this.uc);
                                    n.push(t), r.push(i), s += i
                                }
                            }
                        }
                    }
                    let l = 0;
                    for (let t = 0; t < n.length; ++t) l += r[t] / s * n[t];
                    Math.abs(l) < this.mc || (this.cc = {
                        lc: t,
                        rt: i
                    }, this.fc = l, this.dc = function(t, i) {
                        const s = Math.log(i);
                        return Math.log(1 * s / -t) / s
                    }(Math.abs(l), this.bc))
                }
                Mc(t) {
                    const i = f(this.cc),
                        s = t - i.rt;
                    return i.lc + this.fc * (Math.pow(this.bc, s) - 1) / Math.log(this.bc)
                }
                Sc(t) {
                    return null === this.cc || this.yc(t) === this.dc
                }
                kc() {
                    return this.vc
                }
                xc() {
                    this.vc = !0
                }
                yc(t) {
                    const i = t - f(this.cc).rt;
                    return Math.min(i, this.dc)
                }
            }
            const Ss = "undefined" != typeof window;

            function Ns() {
                return !!Ss && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1
            }

            function Ts() {
                return !!Ss && /iPhone|iPad|iPod/.test(window.navigator.platform)
            }
            class xs {
                constructor(t, i, s) {
                    this.Cc = 0, this.Tc = null, this.Pc = {
                        tt: Number.NEGATIVE_INFINITY,
                        it: Number.POSITIVE_INFINITY
                    }, this.Dc = 0, this.Oc = null, this.Nc = {
                        tt: Number.NEGATIVE_INFINITY,
                        it: Number.POSITIVE_INFINITY
                    }, this.Rc = null, this.Ac = !1, this.Ec = null, this.Ic = null, this.Lc = !1, this.Vc = !1, this.Bc = !1, this.Fc = null, this.zc = null, this.Wc = null, this.jc = null, this.$c = null, this.Hc = null, this.Uc = null, this.qc = 0, this.Yc = !1, this.Xc = !1, this.Kc = !1, this.Zc = 0, this.Gc = null, this.Jc = !Ts(), this.Qc = t => {
                        this.td(t)
                    }, this.sd = t => {
                        if (this.nd(t)) {
                            const i = this.ed(t);
                            if (++this.Dc, this.Oc && this.Dc > 1) {
                                const {
                                    rd: s
                                } = this.hd(ks(t), this.Nc);
                                s < 30 && !this.Bc && this.ld(i, this.od.ad), this._d()
                            }
                        } else {
                            const i = this.ed(t);
                            if (++this.Cc, this.Tc && this.Cc > 1) {
                                const {
                                    rd: s
                                } = this.hd(ks(t), this.Pc);
                                s < 5 && !this.Vc && this.ud(i, this.od.dd), this.fd()
                            }
                        }
                    }, this.pd = t, this.od = i, this.zi = s, this.vd()
                }
                M() {
                    null !== this.Fc && (this.Fc(), this.Fc = null), null !== this.zc && (this.zc(), this.zc = null), null !== this.jc && (this.jc(), this.jc = null), null !== this.$c && (this.$c(), this.$c = null), null !== this.Hc && (this.Hc(), this.Hc = null), null !== this.Wc && (this.Wc(), this.Wc = null), this.md(), this.fd()
                }
                wd(t) {
                    this.jc && this.jc();
                    const i = this.bd.bind(this);
                    if (this.jc = () => {
                            this.pd.removeEventListener("mousemove", i)
                        }, this.pd.addEventListener("mousemove", i), this.nd(t)) return;
                    const s = this.ed(t);
                    this.ud(s, this.od.gd), this.Jc = !0
                }
                fd() {
                    null !== this.Tc && clearTimeout(this.Tc), this.Cc = 0, this.Tc = null, this.Pc = {
                        tt: Number.NEGATIVE_INFINITY,
                        it: Number.POSITIVE_INFINITY
                    }
                }
                _d() {
                    null !== this.Oc && clearTimeout(this.Oc), this.Dc = 0, this.Oc = null, this.Nc = {
                        tt: Number.NEGATIVE_INFINITY,
                        it: Number.POSITIVE_INFINITY
                    }
                }
                bd(t) {
                    if (this.Kc || null !== this.Ic) return;
                    if (this.nd(t)) return;
                    const i = this.ed(t);
                    this.ud(i, this.od.Md), this.Jc = !0
                }
                Sd(t) {
                    const i = Os(t.changedTouches, f(this.Gc));
                    if (null === i) return;
                    if (this.Zc = Ls(t), null !== this.Uc) return;
                    if (this.Xc) return;
                    this.Yc = !0;
                    const s = this.hd(ks(i), f(this.Ic)),
                        {
                            yd: h,
                            kd: e,
                            rd: n
                        } = s;
                    if (this.Lc || !(n < 5)) {
                        if (!this.Lc) {
                            const t = .5 * h,
                                i = e >= t && !this.zi.xd(),
                                s = t > e && !this.zi.Cd();
                            i || s || (this.Xc = !0), this.Lc = !0, this.Bc = !0, this.md(), this._d()
                        }
                        if (!this.Xc) {
                            const s = this.ed(t, i);
                            this.ld(s, this.od.Td), zs(t)
                        }
                    }
                }
                Pd(t) {
                    if (0 !== t.button) return;
                    const i = this.hd(ks(t), f(this.Ec)),
                        {
                            rd: s
                        } = i;
                    if (s >= 5 && (this.Vc = !0, this.fd()), this.Vc) {
                        const i = this.ed(t);
                        this.ud(i, this.od.Dd)
                    }
                }
                hd(t, i) {
                    const s = Math.abs(i.tt - t.tt),
                        h = Math.abs(i.it - t.it);
                    return {
                        yd: s,
                        kd: h,
                        rd: s + h
                    }
                }
                Od(t) {
                    let i = Os(t.changedTouches, f(this.Gc));
                    if (null === i && 0 === t.touches.length && (i = t.changedTouches[0]), null === i) return;
                    this.Gc = null, this.Zc = Ls(t), this.md(), this.Ic = null, this.Hc && (this.Hc(), this.Hc = null);
                    const s = this.ed(t, i);
                    if (this.ld(s, this.od.Nd), ++this.Dc, this.Oc && this.Dc > 1) {
                        const {
                            rd: t
                        } = this.hd(ks(i), this.Nc);
                        t < 30 && !this.Bc && this.ld(s, this.od.ad), this._d()
                    } else this.Bc || (this.ld(s, this.od.Rd), this.od.Rd && zs(t));
                    0 === this.Dc && zs(t),
                        0 === t.touches.length && this.Ac && (this.Ac = !1, zs(t))
                }
                td(t) {
                    if (0 !== t.button) return;
                    const i = this.ed(t);
                    if (this.Ec = null, this.Kc = !1, this.$c && (this.$c(), this.$c = null), Ns() && this.pd.ownerDocument.documentElement.removeEventListener("mouseleave", this.Qc), !this.nd(t))
                        if (this.ud(i, this.od.Ad), ++this.Cc, this.Tc && this.Cc > 1) {
                            const {
                                rd: s
                            } = this.hd(ks(t), this.Pc);
                            s < 5 && !this.Vc && this.ud(i, this.od.dd), this.fd()
                        } else this.Vc || this.ud(i, this.od.Ed)
                }
                md() {
                    null !== this.Rc && (clearTimeout(this.Rc), this.Rc = null)
                }
                Id(t) {
                    if (null !== this.Gc) return;
                    const i = t.changedTouches[0];
                    this.Gc = i.identifier, this.Zc = Ls(t);
                    const s = this.pd.ownerDocument.documentElement;
                    this.Bc = !1, this.Lc = !1, this.Xc = !1, this.Ic = ks(i), this.Hc && (this.Hc(), this.Hc = null); {
                        const i = this.Sd.bind(this),
                            h = this.Od.bind(this);
                        this.Hc = () => {
                            s.removeEventListener("touchmove", i), s.removeEventListener("touchend", h)
                        }, s.addEventListener("touchmove", i, {
                            passive: !1
                        }), s.addEventListener("touchend", h, {
                            passive: !1
                        }), this.md(), this.Rc = setTimeout(this.Ld.bind(this, t), 240)
                    }
                    const h = this.ed(t, i);
                    this.ld(h, this.od.Vd), this.Oc || (this.Dc = 0, this.Oc = setTimeout(this._d.bind(this), 500), this.Nc = ks(i))
                }
                Bd(t) {
                    if (0 !== t.button) return;
                    const i = this.pd.ownerDocument.documentElement;
                    Ns() && i.addEventListener("mouseleave", this.Qc), this.Vc = !1, this.Ec = ks(t), this.$c && (this.$c(), this.$c = null); {
                        const t = this.Pd.bind(this),
                            s = this.td.bind(this);
                        this.$c = () => {
                            i.removeEventListener("mousemove", t), i.removeEventListener("mouseup", s)
                        }, i.addEventListener("mousemove", t), i.addEventListener("mouseup", s)
                    }
                    if (this.Kc = !0, this.nd(t)) return;
                    const s = this.ed(t);
                    this.ud(s, this.od.Fd), this.Tc || (this.Cc = 0, this.Tc = setTimeout(this.fd.bind(this), 500), this.Pc = ks(t))
                }
                vd() {
                    this.pd.addEventListener("mouseenter", this.wd.bind(this)), this.pd.addEventListener("touchcancel", this.md.bind(this)); {
                        const t = this.pd.ownerDocument,
                            i = t => {
                                this.od.zd && (t.target && this.pd.contains(t.target) || this.od.zd())
                            };
                        this.zc = () => {
                            t.removeEventListener("touchstart", i)
                        }, this.Fc = () => {
                            t.removeEventListener("mousedown", i)
                        }, t.addEventListener("mousedown", i), t.addEventListener("touchstart", i, {
                            passive: !0
                        })
                    }
                    Ts() && (this.Wc = () => {
                            this.pd.removeEventListener("dblclick", this.sd)
                        }, this.pd.addEventListener("dblclick", this.sd)), this.pd.addEventListener("mouseleave", this.Wd.bind(this)), this.pd.addEventListener("touchstart", this.Id.bind(this), {
                            passive: !0
                        }),
                        function(t) {
                            Ss && void 0 !== window.chrome && t.addEventListener("mousedown", (t => {
                                if (1 === t.button) return t.preventDefault(), !1
                            }))
                        }(this.pd), this.pd.addEventListener("mousedown", this.Bd.bind(this)), this.jd(), this.pd.addEventListener("touchmove", (() => {}), {
                            passive: !1
                        })
                }
                jd() {
                    void 0 === this.od.$d && void 0 === this.od.Hd && void 0 === this.od.Ud || (this.pd.addEventListener("touchstart", (t => this.qd(t.touches)), {
                        passive: !0
                    }), this.pd.addEventListener("touchmove", (t => {
                        if (2 === t.touches.length && null !== this.Uc && void 0 !== this.od.Hd) {
                            const i = Es(t.touches[0], t.touches[1]) / this.qc;
                            this.od.Hd(this.Uc, i), zs(t)
                        }
                    }), {
                        passive: !1
                    }), this.pd.addEventListener("touchend", (t => {
                        this.qd(t.touches)
                    })))
                }
                qd(t) {
                    1 === t.length && (this.Yc = !1), 2 !== t.length || this.Yc || this.Ac ? this.Yd() : this.Xd(t)
                }
                Xd(t) {
                    const i = this.pd.getBoundingClientRect() || {
                        left: 0,
                        top: 0
                    };
                    this.Uc = {
                        tt: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
                        it: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2
                    }, this.qc = Es(t[0], t[1]), void 0 !== this.od.$d && this.od.$d(), this.md()
                }
                Yd() {
                    null !== this.Uc && (this.Uc = null, void 0 !== this.od.Ud && this.od.Ud())
                }
                Wd(t) {
                    if (this.jc && this.jc(), this.nd(t)) return;
                    if (!this.Jc) return;
                    const i = this.ed(t);
                    this.ud(i, this.od.Kd), this.Jc = !Ts()
                }
                Ld(t) {
                    const i = Os(t.touches, f(this.Gc));
                    if (null === i) return;
                    const s = this.ed(t, i);
                    this.ld(s, this.od.Zd), this.Bc = !0, this.Ac = !0
                }
                nd(t) {
                    return t.sourceCapabilities && void 0 !== t.sourceCapabilities.firesTouchEvents ? t.sourceCapabilities.firesTouchEvents : Ls(t) < this.Zc + 500
                }
                ld(t, i) {
                    i && i.call(this.od, t)
                }
                ud(t, i) {
                    i && i.call(this.od, t)
                }
                ed(t, i) {
                    const s = i || t,
                        h = this.pd.getBoundingClientRect() || {
                            left: 0,
                            top: 0
                        };
                    return {
                        Gd: s.clientX,
                        Jd: s.clientY,
                        Qd: s.pageX,
                        tf: s.pageY,
                        if: s.screenX,
                        sf: s.screenY,
                        nf: s.clientX - h.left,
                        ef: s.clientY - h.top,
                        rf: t.ctrlKey,
                        hf: t.altKey,
                        lf: t.shiftKey,
                        af: t.metaKey,
                        _f: !t.type.startsWith("mouse") && "contextmenu" !== t.type && "click" !== t.type,
                        uf: t.type,
                        cf: s.target,
                        df: t.view,
                        ff: () => {
                            "touchstart" !== t.type && zs(t)
                        }
                    }
                }
            }

            function Es(t, i) {
                const s = t.clientX - i.clientX,
                    h = t.clientY - i.clientY;
                return Math.sqrt(s * s + h * h)
            }

            function zs(t) {
                t.cancelable && t.preventDefault()
            }

            function ks(t) {
                return {
                    tt: t.pageX,
                    it: t.pageY
                }
            }

            function Ls(t) {
                return t.timeStamp || performance.now()
            }

            function Os(t, i) {
                for (let s = 0; s < t.length; ++s)
                    if (t[s].identifier === i) return t[s];
                return null
            }
            class Is {
                constructor(t, i, s, h) {
                    this.ue = new At(200), this.F = 0, this.pf = "", this.Ze = "", this.he = [], this.vf = new Map, this.F = t, this.pf = i, this.Ze = I(t, s, h)
                }
                M() {
                    this.ue.le(), this.he = [], this.vf.clear()
                }
                mf(t, i, s, h, e) {
                    const n = this.wf(t, i);
                    if ("left" !== e) {
                        const i = gs(t.canvas);
                        s -= Math.floor(n.bf * i)
                    }
                    h -= Math.floor(n.qt / 2), t.drawImage(n.gf, s, h, n.Ut, n.qt)
                }
                wf(t, i) {
                    let s;
                    if (this.vf.has(i)) s = c(this.vf.get(i));
                    else {
                        if (this.he.length >= 200) {
                            const t = c(this.he.shift());
                            this.vf.delete(t)
                        }
                        const h = gs(t.canvas),
                            e = Math.ceil(this.F / 4.5),
                            n = Math.round(this.F / 10),
                            r = Math.ceil(this.ue.Qt(t, i)),
                            l = kt(Math.round(r + 2 * e)),
                            o = kt(this.F + 2 * e),
                            a = Ms(document, new ms(l, o));
                        s = {
                            Jt: i,
                            bf: Math.round(Math.max(1, r)),
                            Ut: Math.ceil(l * h),
                            qt: Math.ceil(o * h),
                            gf: a
                        }, 0 !== r && (this.he.push(s.Jt), this.vf.set(s.Jt, s)), q(t = bs(s.gf), h, (() => {
                            t.font = this.Ze, t.fillStyle = this.pf, t.fillText(i, 0, o - e - n)
                        }))
                    }
                    return s
                }
            }
            class Bs {
                constructor(t, i, s, h) {
                    this.fi = null, this.Mf = null, this.Sf = !1, this.yf = new At(50), this.kf = new Is(11, "#000"), this.pf = null, this.Ze = null, this.xf = 0, this.Cf = !1, this.Tf = () => {
                        this.Pf(this.Mu.B()), this.Cf || this.Oi.Df().jt().jr()
                    }, this.Of = () => {
                        this.Cf || this.Oi.Df().jt().jr()
                    }, this.Oi = t, this.zi = i, this.Mu = s, this.Nf = "left" === h, this.Rf = document.createElement("div"), this.Rf.style.height = "100%", this.Rf.style.overflow = "hidden", this.Rf.style.width = "25px", this.Rf.style.left = "0", this.Rf.style.position = "relative", this.Af = ws(this.Rf, new ms(16, 16)), this.Af.subscribeCanvasConfigured(this.Tf);
                    const e = this.Af.canvas;
                    e.style.position = "absolute", e.style.zIndex = "1", e.style.left = "0", e.style.top = "0", this.Ef = ws(this.Rf, new ms(16, 16)), this.Ef.subscribeCanvasConfigured(this.Of);
                    const n = this.Ef.canvas;
                    n.style.position = "absolute", n.style.zIndex = "2", n.style.left = "0", n.style.top = "0";
                    const r = {
                        Fd: this.If.bind(this),
                        Vd: this.If.bind(this),
                        Dd: this.Lf.bind(this),
                        Td: this.Lf.bind(this),
                        zd: this.Vf.bind(this),
                        Ad: this.Bf.bind(this),
                        Nd: this.Bf.bind(this),
                        dd: this.Ff.bind(this),
                        ad: this.Ff.bind(this),
                        gd: this.zf.bind(this),
                        Kd: this.Wf.bind(this)
                    };
                    this.jf = new xs(this.Ef.canvas, r, {
                        xd: () => !1,
                        Cd: () => !0
                    })
                }
                M() {
                    this.jf.M(), this.Ef.unsubscribeCanvasConfigured(this.Of), this.Ef.destroy(), this.Af.unsubscribeCanvasConfigured(this.Tf), this.Af.destroy(), null !== this.fi && this.fi.ya().v(this), this.fi = null, this.kf.M()
                }
                $f() {
                    return this.Rf
                }
                et() {
                    return f(this.fi).B().borderColor
                }
                Hf() {
                    return this.zi.textColor
                }
                T() {
                    return this.zi.fontSize
                }
                Uf() {
                    return I(this.T(), this.zi.fontFamily)
                }
                qf() {
                    const t = this.Mu.B(),
                        i = this.pf !== t.O,
                        s = this.Ze !== t.P;
                    return (i || s) && (this.Pf(t), this.pf = t.O), s && (this.yf.le(), this.Ze = t.P), t
                }
                Yf() {
                    if (null === this.fi) return 0;
                    let t = 0;
                    const i = this.qf(),
                        s = bs(this.Af.canvas),
                        h = this.fi.wl();
                    s.font = this.Uf(), h.length > 0 && (t = Math.max(this.yf.Qt(s, h[0].Nl), this.yf.Qt(s, h[h.length - 1].Nl)));
                    const e = this.Xf();
                    for (let i = e.length; i--;) {
                        const h = this.yf.Qt(s, e[i].Jt());
                        h > t && (t = h)
                    }
                    const n = this.fi.yt();
                    if (null !== n && null !== this.Mf) {
                        const i = this.fi.Hi(1, n),
                            h = this.fi.Hi(this.Mf.It - 2, n);
                        t = Math.max(t, this.yf.Qt(s, this.fi.mi(Math.floor(Math.min(i, h)) + .11111111111111, n)), this.yf.Qt(s, this.fi.mi(Math.ceil(Math.max(i, h)) - .11111111111111, n)))
                    }
                    const r = t || 34;
                    let l = Math.ceil(i.k + i.C + i.R + i.A + r);
                    return l += l % 2, l
                }
                Kf(t) {
                    if (t.Et < 0 || t.It < 0) throw new Error("Try to set invalid size to PriceAxisWidget " + JSON.stringify(t));
                    null !== this.Mf && this.Mf.Sr(t) || (this.Mf = t, this.Cf = !0, this.Af.resizeCanvas({
                        width: t.Et,
                        height: t.It
                    }), this.Ef.resizeCanvas({
                        width: t.Et,
                        height: t.It
                    }), this.Cf = !1, this.Rf.style.width = t.Et + "px", this.Rf.style.height = t.It + "px", this.Rf.style.minWidth = t.Et + "px")
                }
                Zf() {
                    return f(this.Mf).Et
                }
                Ti(t) {
                    this.fi !== t && (null !== this.fi && this.fi.ya().v(this), this.fi = t, t.ya().l(this.jl.bind(this), this))
                }
                Ct() {
                    return this.fi
                }
                le() {
                    const t = this.Oi.Gf();
                    this.Oi.Df().jt()._o(t, f(this.Ct()))
                }
                Jf(t) {
                    if (null === this.Mf) return;
                    if (1 !== t) {
                        const t = bs(this.Af.canvas);
                        this.Qf(), this.tp(t, this.Af.pixelRatio), this.qn(t, this.Af.pixelRatio), this.ip(t, this.Af.pixelRatio), this.sp(t, this.Af.pixelRatio)
                    }
                    const i = bs(this.Ef.canvas),
                        s = this.Mf.Et,
                        h = this.Mf.It;
                    q(i, this.Ef.pixelRatio, (() => {
                        i.clearRect(0, 0, s, h)
                    })), this.np(i, this.Ef.pixelRatio)
                }
                ep() {
                    return this.Af.canvas
                }
                dt() {
                    var t;
                    null === (t = this.fi) || void 0 === t || t.wl()
                }
                If(t) {
                    if (null === this.fi || this.fi.vi() || !this.Oi.Df().B().handleScale.axisPressedMouseMove.price) return;
                    const i = this.Oi.Df().jt(),
                        s = this.Oi.Gf();
                    this.Sf = !0, i.no(s, this.fi, t.ef)
                }
                Lf(t) {
                    if (null === this.fi || !this.Oi.Df().B().handleScale.axisPressedMouseMove.price) return;
                    const i = this.Oi.Df().jt(),
                        s = this.Oi.Gf(),
                        h = this.fi;
                    i.eo(s, h, t.ef)
                }
                Vf() {
                    if (null === this.fi || !this.Oi.Df().B().handleScale.axisPressedMouseMove.price) return;
                    const t = this.Oi.Df().jt(),
                        i = this.Oi.Gf(),
                        s = this.fi;
                    this.Sf && (this.Sf = !1, t.ro(i, s))
                }
                Bf(t) {
                    if (null === this.fi || !this.Oi.Df().B().handleScale.axisPressedMouseMove.price) return;
                    const i = this.Oi.Df().jt(),
                        s = this.Oi.Gf();
                    this.Sf = !1, i.ro(s, this.fi)
                }
                Ff(t) {
                    this.Oi.Df().B().handleScale.axisDoubleClickReset && this.le()
                }
                zf(t) {
                    null !== this.fi && (!this.Oi.Df().jt().B().handleScale.axisPressedMouseMove.price || this.fi.mr() || this.fi.ra() || this.rp(1))
                }
                Wf(t) {
                    this.rp(0)
                }
                Xf() {
                    const t = [],
                        i = null === this.fi ? void 0 : this.fi;
                    return (s => {
                        for (let h = 0; h < s.length; ++h) {
                            const e = s[h].es(this.Oi.Gf(), i);
                            for (let i = 0; i < e.length; i++) t.push(e[i])
                        }
                    })(this.Oi.Gf().wa()), t
                }
                tp(t, i) {
                    if (null === this.Mf) return;
                    const s = this.Mf.Et,
                        h = this.Mf.It;
                    q(t, i, (() => {
                        const i = this.Oi.Gf().jt(),
                            e = i.rc(),
                            n = i.ec();
                        e === n ? W(t, 0, 0, s, h, e) : G(t, 0, 0, s, h, e, n)
                    }))
                }
                qn(t, i) {
                    if (null === this.Mf || null === this.fi || !this.fi.B().borderVisible) return;
                    t.save(), t.fillStyle = this.et();
                    const s = Math.max(1, Math.floor(this.qf().k * i));
                    let h;
                    h = this.Nf ? Math.floor(this.Mf.Et * i) - s : 0, t.fillRect(h, 0, s, Math.ceil(this.Mf.It * i)), t.restore()
                }
                ip(t, i) {
                    if (null === this.Mf || null === this.fi) return;
                    const s = this.fi.wl();
                    t.save(), t.strokeStyle = this.et(), t.font = this.Uf(), t.fillStyle = this.et();
                    const h = this.qf(),
                        e = this.Nf ? Math.floor((this.Mf.Et - h.C) * i - h.k * i) : Math.floor(h.k * i),
                        n = this.Nf ? Math.round(e - h.R * i) : Math.round(e + h.C * i + h.R * i),
                        r = this.Nf ? "right" : "left",
                        l = Math.max(1, Math.floor(i)),
                        o = Math.floor(.5 * i),
                        a = this.fi.B();
                    if (a.borderVisible && a.ticksVisible) {
                        const n = Math.round(h.C * i);
                        t.beginPath();
                        for (const h of s) t.rect(e, Math.round(h.dl * i) - o, n, l);
                        t.fill()
                    }
                    t.fillStyle = this.Hf();
                    for (const h of s) this.kf.mf(t, h.Nl, n, Math.round(h.dl * i), r);
                    t.restore()
                }
                Qf() {
                    if (null === this.Mf || null === this.fi) return;
                    let t = this.Mf.It / 2;
                    const i = [],
                        s = this.fi.wa().slice(),
                        h = this.Oi.Gf(),
                        e = this.qf();
                    this.fi === h.me() && this.Oi.Gf().wa().forEach((t => {
                        h.ve(t) && s.push(t)
                    }));
                    const n = this.fi.al()[0],
                        r = this.fi;
                    s.forEach((s => {
                        const e = s.es(h, r);
                        e.forEach((t => {
                            t.oi(null), t._i() && i.push(t)
                        })), n === s && e.length > 0 && (t = e[0].ti())
                    }));
                    const l = i.filter((i => i.ti() <= t)),
                        o = i.filter((i => i.ti() > t));
                    if (l.sort(((t, i) => i.ti() - t.ti())), l.length && o.length && o.push(l[0]), o.sort(((t, i) => t.ti() - i.ti())), i.forEach((t => t.oi(t.ti()))), this.fi.B().alignLabels) {
                        for (let t = 1; t < l.length; t++) {
                            const i = l[t],
                                s = l[t - 1],
                                h = s.qt(e, !1),
                                n = i.ti(),
                                r = s.ai();
                            n > r - h && i.oi(r - h)
                        }
                        for (let t = 1; t < o.length; t++) {
                            const i = o[t],
                                s = o[t - 1],
                                h = s.qt(e, !0),
                                n = i.ti(),
                                r = s.ai();
                            n < r + h && i.oi(r + h)
                        }
                    }
                }
                sp(t, i) {
                    if (null === this.Mf) return;
                    t.save();
                    const s = this.Mf,
                        h = this.Xf(),
                        e = this.qf(),
                        n = this.Nf ? "right" : "left";
                    h.forEach((h => {
                        if (h.ui()) {
                            const r = h.vt(f(this.fi));
                            t.save(), r.U(t, e, this.yf, s.Et, n, i), t.restore()
                        }
                    })), t.restore()
                }
                np(t, i) {
                    if (null === this.Mf || null === this.fi) return;
                    t.save();
                    const s = this.Mf,
                        h = this.Oi.Df().jt(),
                        e = [],
                        n = this.Oi.Gf(),
                        r = h.Vu().es(n, this.fi);
                    r.length && e.push(r);
                    const l = this.qf(),
                        o = this.Nf ? "right" : "left";
                    e.forEach((h => {
                        h.forEach((h => {
                            t.save(), h.vt(f(this.fi)).U(t, l, this.yf, s.Et, o, i), t.restore()
                        }))
                    })), t.restore()
                }
                rp(t) {
                    this.Rf.style.cursor = 1 === t ? "ns-resize" : "default"
                }
                jl() {
                    const t = this.Yf();
                    this.xf < t && this.Oi.Df().jt().Ih(), this.xf = t
                }
                Pf(t) {
                    this.kf.M(), this.kf = new Is(t.T, t.O, t.D)
                }
            }

            function Rs(t, i, s, h, e) {
                t.Y && t.Y(i, s, h, e)
            }

            function Vs(t, i, s, h, e) {
                t.U(i, s, h, e)
            }

            function Ps(t, i) {
                return t.ns(i)
            }

            function Js(t, i) {
                return t.Pi(i)
            }

            function Fs(t, i) {
                return void 0 !== t.Yh ? t.Yh(i) : []
            }
            class Ds {
                constructor(t, i) {
                    this.Mf = new ms(0, 0), this.hp = null, this.lp = null, this.ap = null, this.op = !1, this._p = new C, this.up = 0, this.cp = !1, this.dp = null, this.fp = !1, this.pp = null, this.vp = null, this.Cf = !1, this.Tf = () => {
                        this.Cf || null === this.mp || this.gi().jr()
                    }, this.Of = () => {
                        this.Cf || null === this.mp || this.gi().jr()
                    }, this.wp = t, this.mp = i, this.mp.do().l(this.bp.bind(this), this, !0), this.gp = document.createElement("td"), this.gp.style.padding = "0", this.gp.style.position = "relative";
                    const s = document.createElement("div");
                    s.style.width = "100%", s.style.height = "100%", s.style.position = "relative", s.style.overflow = "hidden", this.Mp = document.createElement("td"), this.Mp.style.padding = "0", this.Sp = document.createElement("td"), this.Sp.style.padding = "0", this.gp.appendChild(s), this.Af = ws(s, new ms(16, 16)), this.Af.subscribeCanvasConfigured(this.Tf);
                    const h = this.Af.canvas;
                    h.style.position = "absolute", h.style.zIndex = "1", h.style.left = "0", h.style.top = "0", this.Ef = ws(s, new ms(16, 16)), this.Ef.subscribeCanvasConfigured(this.Of);
                    const e = this.Ef.canvas;
                    e.style.position = "absolute", e.style.zIndex = "2", e.style.left = "0", e.style.top = "0", this.yp = document.createElement("tr"), this.yp.appendChild(this.Mp), this.yp.appendChild(this.gp), this.yp.appendChild(this.Sp), this.kp(), this.jf = new xs(this.Ef.canvas, this, {
                        xd: () => null === this.dp && !this.wp.B().handleScroll.vertTouchDrag,
                        Cd: () => null === this.dp && !this.wp.B().handleScroll.horzTouchDrag
                    })
                }
                M() {
                    null !== this.hp && this.hp.M(), null !== this.lp && this.lp.M(), this.Ef.unsubscribeCanvasConfigured(this.Of), this.Ef.destroy(), this.Af.unsubscribeCanvasConfigured(this.Tf), this.Af.destroy(), null !== this.mp && this.mp.do().v(this), this.jf.M()
                }
                Gf() {
                    return f(this.mp)
                }
                xp(t) {
                    null !== this.mp && this.mp.do().v(this), this.mp = t, null !== this.mp && this.mp.do().l(Ds.prototype.bp.bind(this), this, !0), this.kp()
                }
                Df() {
                    return this.wp
                }
                $f() {
                    return this.yp
                }
                kp() {
                    if (null !== this.mp && (this.Cp(), 0 !== this.gi().ft().length)) {
                        if (null !== this.hp) {
                            const t = this.mp.io();
                            this.hp.Ti(f(t))
                        }
                        if (null !== this.lp) {
                            const t = this.mp.so();
                            this.lp.Ti(f(t))
                        }
                    }
                }
                Tp() {
                    null !== this.hp && this.hp.dt(), null !== this.lp && this.lp.dt()
                }
                qa() {
                    return null !== this.mp ? this.mp.qa() : 0
                }
                Ya(t) {
                    this.mp && this.mp.Ya(t)
                }
                gd(t) {
                    if (!this.mp) return;
                    this.Pp();
                    const i = t.nf,
                        s = t.ef;
                    this.Dp(i, s)
                }
                Fd(t) {
                    this.Pp(), this.Op(), this.Dp(t.nf, t.ef)
                }
                Md(t) {
                    if (!this.mp) return;
                    this.Pp();
                    const i = t.nf,
                        s = t.ef;
                    this.Dp(i, s);
                    const h = this.Ge(i, s);
                    this.gi().Nu(h && {
                        Ru: h.Ru,
                        Np: h.Np
                    })
                }
                Ed(t) {
                    if (null === this.mp) return;
                    this.Pp();
                    const i = t.nf,
                        s = t.ef;
                    if (this._p.g()) {
                        const t = this.gi().Vu().bt();
                        this._p.m(t, {
                            x: i,
                            y: s
                        })
                    }
                }
                Dd(t) {
                    this.Pp(), this.Rp(t), this.Dp(t.nf, t.ef)
                }
                Ad(t) {
                    null !== this.mp && (this.Pp(), this.cp = !1, this.Ap(t))
                }
                Zd(t) {
                    if (this.cp = !0, null === this.dp) {
                        const i = {
                            x: t.nf,
                            y: t.ef
                        };
                        this.Ep(i, i)
                    }
                }
                Kd(t) {
                    null !== this.mp && (this.Pp(), this.mp.jt().Nu(null), this.Ip())
                }
                Lp() {
                    return this._p
                }
                $d() {
                    this.up = 1, this.Vp()
                }
                Hd(t, i) {
                    if (!this.wp.B().handleScale.pinch) return;
                    const s = 5 * (i - this.up);
                    this.up = i, this.gi().ju(t.tt, s)
                }
                Vd(t) {
                    if (this.cp = !1, this.fp = null !== this.dp, this.Op(), null !== this.dp) {
                        const i = this.gi().Vu();
                        this.pp = {
                            x: i.Yt(),
                            y: i.Xt()
                        }, this.dp = {
                            x: t.nf,
                            y: t.ef
                        }
                    }
                }
                Td(t) {
                    if (null === this.mp) return;
                    const i = t.nf,
                        s = t.ef;
                    if (null === this.dp) this.Rp(t);
                    else {
                        this.fp = !1;
                        const t = f(this.pp),
                            h = t.x + (i - this.dp.x),
                            e = t.y + (s - this.dp.y);
                        this.Dp(h, e)
                    }
                }
                Nd(t) {
                    0 === this.Df().B().trackingMode.exitMode && (this.fp = !0), this.Bp(), this.Ap(t)
                }
                Ge(t, i) {
                    const s = this.mp;
                    if (null === s) return null;
                    const h = s.wa();
                    for (const e of h) {
                        const h = this.Fp(e.ns(s), t, i);
                        if (null !== h) return {
                            Ru: e,
                            df: h.df,
                            Np: h.Np
                        }
                    }
                    return null
                }
                zp(t, i) {
                    f("left" === i ? this.hp : this.lp).Kf(new ms(t, this.Mf.It))
                }
                Wp() {
                    return this.Mf
                }
                Kf(t) {
                    if (t.Et < 0 || t.It < 0) throw new Error("Try to set invalid size to PaneWidget " + JSON.stringify(t));
                    this.Mf.Sr(t) || (this.Mf = t, this.Cf = !0, this.Af.resizeCanvas({
                        width: t.Et,
                        height: t.It
                    }), this.Ef.resizeCanvas({
                        width: t.Et,
                        height: t.It
                    }), this.Cf = !1, this.gp.style.width = t.Et + "px", this.gp.style.height = t.It + "px")
                }
                jp() {
                    const t = f(this.mp);
                    t.Qa(t.io()), t.Qa(t.so());
                    for (const i of t.al())
                        if (t.ve(i)) {
                            const s = i.Ct();
                            null !== s && t.Qa(s), i.hs()
                        }
                }
                ep() {
                    return this.Af.canvas
                }
                Jf(t) {
                    if (0 === t) return;
                    if (null === this.mp) return;
                    if (t > 1 && this.jp(), null !== this.hp && this.hp.Jf(t), null !== this.lp && this.lp.Jf(t), 1 !== t) {
                        const t = bs(this.Af.canvas);
                        t.save(), this.tp(t, this.Af.pixelRatio), this.mp && (this.$p(t, this.Af.pixelRatio), this.Hp(t, this.Af.pixelRatio), this.Up(t, this.Af.pixelRatio, Ps), this.Up(t, this.Af.pixelRatio, Js)), t.restore()
                    }
                    const i = bs(this.Ef.canvas);
                    i.clearRect(0, 0, Math.ceil(this.Mf.Et * this.Ef.pixelRatio), Math.ceil(this.Mf.It * this.Ef.pixelRatio)), this.Up(i, this.Af.pixelRatio, Fs), this.qp(i, this.Ef.pixelRatio)
                }
                Yp() {
                    return this.hp
                }
                Xp() {
                    return this.lp
                }
                bp() {
                    null !== this.mp && this.mp.do().v(this), this.mp = null
                }
                tp(t, i) {
                    q(t, i, (() => {
                        const i = this.gi(),
                            s = i.rc(),
                            h = i.ec();
                        s === h ? W(t, 0, 0, this.Mf.Et, this.Mf.It, h) : G(t, 0, 0, this.Mf.Et, this.Mf.It, s, h)
                    }))
                }
                $p(t, i) {
                    const s = f(this.mp),
                        h = s.fo().$r().vt(s.qt(), s.Ut());
                    null !== h && (t.save(), h.U(t, i, !1), t.restore())
                }
                Hp(t, i) {
                    const s = this.gi().Lu();
                    this.Kp(t, i, Ps, Rs, s), this.Kp(t, i, Ps, Vs, s)
                }
                qp(t, i) {
                    this.Kp(t, i, Ps, Vs, this.gi().Vu())
                }
                Up(t, i, s) {
                    const h = f(this.mp).wa();
                    for (const e of h) this.Kp(t, i, s, Rs, e);
                    for (const e of h) this.Kp(t, i, s, Vs, e)
                }
                Kp(t, i, s, h, e) {
                    const n = f(this.mp),
                        r = s(e, n),
                        l = n.qt(),
                        o = n.Ut(),
                        a = n.jt().Ou(),
                        u = null !== a && a.Ru === e,
                        c = null !== a && u && void 0 !== a.Np ? a.Np.Je : void 0;
                    for (const s of r) {
                        const e = s.vt(l, o);
                        null !== e && (t.save(), h(e, t, i, u, c), t.restore())
                    }
                }
                Fp(t, i, s) {
                    for (const h of t) {
                        const t = h.vt(this.Mf.It, this.Mf.Et);
                        if (null !== t && t.Ge) {
                            const e = t.Ge(i, s);
                            if (null !== e) return {
                                df: h,
                                Np: e
                            }
                        }
                    }
                    return null
                }
                Cp() {
                    if (null === this.mp) return;
                    const t = this.wp,
                        i = this.mp.io().B().visible,
                        s = this.mp.so().B().visible;
                    i || null === this.hp || (this.Mp.removeChild(this.hp.$f()), this.hp.M(), this.hp = null), s || null === this.lp || (this.Sp.removeChild(this.lp.$f()), this.lp.M(), this.lp = null);
                    const h = t.jt().Ju();
                    i && null === this.hp && (this.hp = new Bs(this, t.B().layout, h, "left"), this.Mp.appendChild(this.hp.$f())), s && null === this.lp && (this.lp = new Bs(this, t.B().layout, h, "right"), this.Sp.appendChild(this.lp.$f()))
                }
                Zp(t) {
                    return t._f && this.cp || null !== this.dp
                }
                Gp(t) {
                    return Math.max(0, Math.min(t, this.Mf.Et - 1))
                }
                Jp(t) {
                    return Math.max(0, Math.min(t, this.Mf.It - 1))
                }
                Dp(t, i) {
                    this.gi().Ku(this.Gp(t), this.Jp(i), f(this.mp))
                }
                Ip() {
                    this.gi().Zu()
                }
                Bp() {
                    this.fp && (this.dp = null, this.Ip())
                }
                Ep(t, i) {
                    this.dp = t, this.fp = !1, this.Dp(i.x, i.y);
                    const s = this.gi().Vu();
                    this.pp = {
                        x: s.Yt(),
                        y: s.Xt()
                    }
                }
                gi() {
                    return this.wp.jt()
                }
                Qp() {
                    const t = this.gi(),
                        i = this.Gf(),
                        s = i.$i();
                    t.ao(i, s), t.qu(), this.ap = null, this.op = !1
                }
                Ap(t) {
                    if (!this.op) return;
                    const i = performance.now();
                    if (null !== this.vp && this.vp.De(t.nf, i), null === this.vp || this.vp.Sc(i)) return void this.Qp();
                    const s = this.gi(),
                        h = s.gt(),
                        e = this.vp,
                        n = () => {
                            if (e.kc()) return;
                            const t = performance.now();
                            let i = e.Sc(t);
                            if (!e.kc()) {
                                const n = h.A_();
                                s.Uu(e.Mc(t)), n === h.A_() && (i = !0, this.vp = null)
                            }
                            i ? this.Qp() : requestAnimationFrame(n)
                        };
                    requestAnimationFrame(n)
                }
                Pp() {
                    this.dp = null
                }
                Op() {
                    if (this.mp) {
                        if (this.Vp(), document.activeElement !== document.body && document.activeElement !== document.documentElement) f(document.activeElement).blur();
                        else {
                            const t = document.getSelection();
                            null !== t && t.removeAllRanges()
                        }!this.mp.$i().vi() && this.gi().gt().vi()
                    }
                }
                Rp(t) {
                    if (null === this.mp) return;
                    const i = this.gi();
                    if (i.gt().vi()) return;
                    const s = this.wp.B(),
                        h = s.handleScroll,
                        e = s.kineticScroll;
                    if ((!h.pressedMouseMove || t._f) && (!h.horzTouchDrag && !h.vertTouchDrag || !t._f)) return;
                    const n = this.mp.$i(),
                        r = performance.now();
                    null !== this.ap || this.Zp(t) || (this.ap = {
                        x: t.Gd,
                        y: t.Jd,
                        Io: r,
                        nf: t.nf,
                        ef: t.ef
                    }), null !== this.vp && this.vp.gc(t.nf, r), null === this.ap || this.op || this.ap.x === t.Gd && this.ap.y === t.Jd || (null === this.vp && (t._f && e.touch || !t._f && e.mouse) && (this.vp = new Cs(.2, 7, .997, 15), this.vp.gc(this.ap.nf, this.ap.Io), this.vp.gc(t.nf, r)), n.vi() || i.ho(this.mp, n, t.ef), i.Hu(t.nf), this.op = !0), this.op && (n.vi() || i.lo(this.mp, n, t.ef), i.Uu(t.nf))
                }
                Vp() {
                    const t = performance.now(),
                        i = null === this.vp || this.vp.Sc(t);
                    null !== this.vp && (i || this.Qp()), null !== this.vp && (this.vp.xc(), this.vp = null)
                }
            }
            class Us {
                constructor(t, i, s, h, e) {
                    this.ut = !0, this.Mf = new ms(0, 0), this.Tf = () => this.Jf(3), this.Nf = "left" === t, this.Mu = s.Ju, this.zi = i, this.tv = h, this.iv = e, this.Rf = document.createElement("div"), this.Rf.style.width = "25px", this.Rf.style.height = "100%", this.Rf.style.overflow = "hidden", this.Af = ws(this.Rf, new ms(16, 16)), this.Af.subscribeCanvasConfigured(this.Tf)
                }
                M() {
                    this.Af.unsubscribeCanvasConfigured(this.Tf), this.Af.destroy()
                }
                $f() {
                    return this.Rf
                }
                Wp() {
                    return this.Mf
                }
                Kf(t) {
                    if (t.Et < 0 || t.It < 0) throw new Error("Try to set invalid size to PriceAxisStub " + JSON.stringify(t));
                    this.Mf.Sr(t) || (this.Mf = t, this.Af.resizeCanvas({
                        width: t.Et,
                        height: t.It
                    }), this.Rf.style.width = `${t.Et}px`, this.Rf.style.minWidth = `${t.Et}px`, this.Rf.style.height = `${t.It}px`, this.ut = !0)
                }
                Jf(t) {
                    if (t < 3 && !this.ut) return;
                    if (0 === this.Mf.Et || 0 === this.Mf.It) return;
                    this.ut = !1;
                    const i = bs(this.Af.canvas);
                    this.tp(i, this.Af.pixelRatio), this.qn(i, this.Af.pixelRatio)
                }
                ep() {
                    return this.Af.canvas
                }
                qn(t, i) {
                    if (!this.tv()) return;
                    const s = this.Mf.Et;
                    t.save(), t.fillStyle = this.zi.timeScale.borderColor;
                    const h = Math.floor(this.Mu.B().k * i),
                        e = this.Nf ? Math.round(s * i) - h : 0;
                    t.fillRect(e, 0, h, h), t.restore()
                }
                tp(t, i) {
                    q(t, i, (() => {
                        W(t, 0, 0, this.Mf.Et, this.Mf.It, this.iv())
                    }))
                }
            }

            function js(t, i) {
                return t.Uo > i.Uo ? t : i
            }
            class As {
                constructor(t) {
                    this.sv = null, this.nv = null, this.S = null,
                        this.ev = !1, this.Mf = new ms(0, 0), this.rv = new C, this.yf = new At(5), this.Cf = !1, this.Tf = () => {
                            this.Cf || this.wp.jt().jr()
                        }, this.Of = () => {
                            this.Cf || this.wp.jt().jr()
                        }, this.wp = t, this.zi = t.B().layout, this.hv = document.createElement("tr"), this.lv = document.createElement("td"), this.lv.style.padding = "0", this.av = document.createElement("td"), this.av.style.padding = "0", this.Rf = document.createElement("td"), this.Rf.style.height = "25px", this.Rf.style.padding = "0", this.ov = document.createElement("div"), this.ov.style.width = "100%", this.ov.style.height = "100%", this.ov.style.position = "relative", this.ov.style.overflow = "hidden", this.Rf.appendChild(this.ov), this.Af = ws(this.ov, new ms(16, 16)), this.Af.subscribeCanvasConfigured(this.Tf);
                    const i = this.Af.canvas;
                    i.style.position = "absolute", i.style.zIndex = "1", i.style.left = "0", i.style.top = "0", this.Ef = ws(this.ov, new ms(16, 16)), this.Ef.subscribeCanvasConfigured(this.Of);
                    const s = this.Ef.canvas;
                    s.style.position = "absolute", s.style.zIndex = "2", s.style.left = "0", s.style.top = "0", this.hv.appendChild(this.lv), this.hv.appendChild(this.Rf), this.hv.appendChild(this.av), this._v(), this.wp.jt().Ua().l(this._v.bind(this), this), this.jf = new xs(this.Ef.canvas, this, {
                        xd: () => !0,
                        Cd: () => !1
                    })
                }
                M() {
                    this.jf.M(), null !== this.sv && this.sv.M(), null !== this.nv && this.nv.M(), this.Ef.unsubscribeCanvasConfigured(this.Of), this.Ef.destroy(), this.Af.unsubscribeCanvasConfigured(this.Tf), this.Af.destroy()
                }
                $f() {
                    return this.hv
                }
                uv() {
                    return this.sv
                }
                cv() {
                    return this.nv
                }
                Fd(t) {
                    if (this.ev) return;
                    this.ev = !0;
                    const i = this.wp.jt();
                    !i.gt().vi() && this.wp.B().handleScale.axisPressedMouseMove.time && i.Wu(t.nf)
                }
                Vd(t) {
                    this.Fd(t)
                }
                zd() {
                    const t = this.wp.jt();
                    !t.gt().vi() && this.ev && (this.ev = !1, this.wp.B().handleScale.axisPressedMouseMove.time && t.Xu())
                }
                Dd(t) {
                    const i = this.wp.jt();
                    !i.gt().vi() && this.wp.B().handleScale.axisPressedMouseMove.time && i.Yu(t.nf)
                }
                Td(t) {
                    this.Dd(t)
                }
                Ad() {
                    this.ev = !1;
                    const t = this.wp.jt();
                    t.gt().vi() && !this.wp.B().handleScale.axisPressedMouseMove.time || t.Xu()
                }
                Nd() {
                    this.Ad()
                }
                dd() {
                    this.wp.B().handleScale.axisDoubleClickReset && this.wp.jt().ks()
                }
                ad() {
                    this.dd()
                }
                gd() {
                    this.wp.jt().B().handleScale.axisPressedMouseMove.time && this.rp(1)
                }
                Kd() {
                    this.rp(0)
                }
                Wp() {
                    return this.Mf
                }
                dv() {
                    return this.rv
                }
                fv(t, i, s) {
                    this.Mf && this.Mf.Sr(t) || (this.Mf = t, this.Cf = !0, this.Af.resizeCanvas({
                        width: t.Et,
                        height: t.It
                    }), this.Ef.resizeCanvas({
                        width: t.Et,
                        height: t.It
                    }), this.Cf = !1, this.Rf.style.width = t.Et + "px", this.Rf.style.height = t.It + "px", this.rv.m(t)), null !== this.sv && this.sv.Kf(new ms(i, t.It)), null !== this.nv && this.nv.Kf(new ms(s, t.It))
                }
                pv() {
                    const t = this.vv();
                    return Math.ceil(t.k + t.C + t.T + t.I + t.N)
                }
                dt() {
                    this.wp.jt().gt().wl()
                }
                ep() {
                    return this.Af.canvas
                }
                Jf(t) {
                    if (0 === t) return;
                    if (1 !== t) {
                        const i = bs(this.Af.canvas);
                        this.tp(i, this.Af.pixelRatio), this.qn(i, this.Af.pixelRatio), this.ip(i, this.Af.pixelRatio), null !== this.sv && this.sv.Jf(t), null !== this.nv && this.nv.Jf(t)
                    }
                    const i = bs(this.Ef.canvas),
                        s = this.Ef.pixelRatio;
                    i.clearRect(0, 0, Math.ceil(this.Mf.Et * s), Math.ceil(this.Mf.It * s)), this.mv([this.wp.jt().Vu()], i, s)
                }
                tp(t, i) {
                    q(t, i, (() => {
                        W(t, 0, 0, this.Mf.Et, this.Mf.It, this.wp.jt().ec())
                    }))
                }
                qn(t, i) {
                    if (this.wp.B().timeScale.borderVisible) {
                        t.save(), t.fillStyle = this.wv();
                        const s = Math.max(1, Math.floor(this.vv().k * i));
                        t.fillRect(0, 0, Math.ceil(this.Mf.Et * i), s), t.restore()
                    }
                }
                ip(t, i) {
                    const s = this.wp.jt().gt(),
                        h = s.wl();
                    if (!h || 0 === h.length) return;
                    let e = h.reduce(js, h[0]).Uo;
                    e > 30 && e < 50 && (e = 30), t.save(), t.strokeStyle = this.wv();
                    const n = this.vv(),
                        r = n.k + n.C + n.I + n.T - n.L;
                    t.textAlign = "center", t.fillStyle = this.wv();
                    const l = Math.floor(this.vv().k * i),
                        o = Math.max(1, Math.floor(i)),
                        a = Math.floor(.5 * i),
                        u = s.B();
                    if (u.borderVisible && u.ticksVisible) {
                        t.beginPath();
                        const s = Math.round(n.C * i);
                        for (let e = h.length; e--;) {
                            const n = Math.round(h[e].dl * i);
                            t.rect(n - a, l, o, s)
                        }
                        t.fill()
                    }
                    t.fillStyle = this.j(), q(t, i, (() => {
                        t.font = this.bv();
                        for (const i of h)
                            if (i.Uo < e) {
                                const s = i.L_ ? this.gv(t, i.dl, i.Nl) : i.dl;
                                t.fillText(i.Nl, s, r)
                            }
                        t.font = this.Mv();
                        for (const i of h)
                            if (i.Uo >= e) {
                                const s = i.L_ ? this.gv(t, i.dl, i.Nl) : i.dl;
                                t.fillText(i.Nl, s, r)
                            }
                    })), t.restore()
                }
                gv(t, i, s) {
                    const h = this.yf.Qt(t, s),
                        e = h / 2,
                        n = Math.floor(i - e) + .5;
                    return n < 0 ? i += Math.abs(0 - n) : n + h > this.Mf.Et && (i -= Math.abs(this.Mf.Et - (n + h))), i
                }
                mv(t, i, s) {
                    const h = this.vv();
                    for (const e of t)
                        for (const t of e.Di()) i.save(), t.vt().U(i, h, s), i.restore()
                }
                wv() {
                    return this.wp.B().timeScale.borderColor
                }
                j() {
                    return this.zi.textColor
                }
                F() {
                    return this.zi.fontSize
                }
                bv() {
                    return I(this.F(), this.zi.fontFamily)
                }
                Mv() {
                    return I(this.F(), this.zi.fontFamily, "bold")
                }
                vv() {
                    null === this.S && (this.S = {
                        k: 1,
                        L: NaN,
                        I: NaN,
                        N: NaN,
                        bi: NaN,
                        C: 3,
                        T: NaN,
                        P: "",
                        wi: new At
                    });
                    const t = this.S,
                        i = this.bv();
                    if (t.P !== i) {
                        const s = this.F();
                        t.T = s, t.P = i, t.I = Math.ceil(s / 2.5), t.N = t.I, t.bi = Math.ceil(s / 2), t.L = Math.round(this.F() / 5), t.wi.le()
                    }
                    return this.S
                }
                rp(t) {
                    this.Rf.style.cursor = 1 === t ? "ew-resize" : "default"
                }
                _v() {
                    const t = this.wp.jt(),
                        i = t.B();
                    i.leftPriceScale.visible || null === this.sv || (this.lv.removeChild(this.sv.$f()), this.sv.M(), this.sv = null), i.rightPriceScale.visible || null === this.nv || (this.av.removeChild(this.nv.$f()), this.nv.M(), this.nv = null);
                    const s = {
                            Ju: this.wp.jt().Ju()
                        },
                        h = () => i.leftPriceScale.borderVisible && t.gt().B().borderVisible,
                        e = () => t.ec();
                    i.leftPriceScale.visible && null === this.sv && (this.sv = new Us("left", i, s, h, e), this.lv.appendChild(this.sv.$f())), i.rightPriceScale.visible && null === this.nv && (this.nv = new Us("right", i, s, h, e), this.av.appendChild(this.nv.$f()))
                }
            }
            class qs {
                constructor(t, i) {
                    var s;
                    this.Sv = [], this.yv = 0, this.El = 0, this._e = 0, this.kv = 0, this.xv = 0, this.Cv = null, this.Tv = !1, this._p = new C, this.wu = new C, this.zi = i, this.hv = document.createElement("div"), this.hv.classList.add("tv-lightweight-charts"), this.hv.style.overflow = "hidden", this.hv.style.width = "100%", this.hv.style.height = "100%", (s = this.hv).style.userSelect = "none", s.style.webkitUserSelect = "none", s.style.msUserSelect = "none", s.style.MozUserSelect = "none", s.style.webkitTapHighlightColor = "transparent", this.Pv = document.createElement("table"), this.Pv.setAttribute("cellspacing", "0"), this.hv.appendChild(this.Pv), this.Dv = this.Ov.bind(this), this.hv.addEventListener("wheel", this.Dv, {
                        passive: !1
                    }), this.gi = new fs(this.gu.bind(this), this.zi), this.jt().Bu().l(this.Nv.bind(this), this), this.Rv = new As(this), this.Pv.appendChild(this.Rv.$f());
                    let h = this.zi.width,
                        e = this.zi.height;
                    if (0 === h || 0 === e) {
                        const i = t.getBoundingClientRect();
                        0 === h && (h = Math.floor(i.width), h -= h % 2), 0 === e && (e = Math.floor(i.height), e -= e % 2)
                    }
                    this.Av(h, e), this.Ev(), t.appendChild(this.hv), this.Iv(), this.gi.gt().Y_().l(this.gi.Ih.bind(this.gi), this), this.gi.Ua().l(this.gi.Ih.bind(this.gi), this)
                }
                jt() {
                    return this.gi
                }
                B() {
                    return this.zi
                }
                Lv() {
                    return this.Sv
                }
                Vv() {
                    return this.Rv
                }
                M() {
                    this.hv.removeEventListener("wheel", this.Dv), 0 !== this.yv && window.cancelAnimationFrame(this.yv), this.gi.Bu().v(this), this.gi.gt().Y_().v(this), this.gi.Ua().v(this), this.gi.M();
                    for (const t of this.Sv) this.Pv.removeChild(t.$f()), t.Lp().v(this), t.M();
                    this.Sv = [], f(this.Rv).M(), null !== this.hv.parentElement && this.hv.parentElement.removeChild(this.hv), this.wu.M(), this._p.M()
                }
                Av(t, i, s = !1) {
                    if (this.El === i && this._e === t) return;
                    this.El = i, this._e = t;
                    const h = i + "px",
                        e = t + "px";
                    f(this.hv).style.height = h, f(this.hv).style.width = e, this.Pv.style.height = h, this.Pv.style.width = e, s ? this.Bv(new ht(3)) : this.gi.Ih()
                }
                Jf(t) {
                    void 0 === t && (t = new ht(3));
                    for (let i = 0; i < this.Sv.length; i++) this.Sv[i].Jf(t.gs(i).vs);
                    this.zi.timeScale.visible && this.Rv.Jf(t.bs())
                }
                Wr(t) {
                    this.gi.Wr(t), this.Iv();
                    const i = t.width || this._e,
                        s = t.height || this.El;
                    this.Av(i, s)
                }
                Lp() {
                    return this._p
                }
                Bu() {
                    return this.wu
                }
                Fv() {
                    null !== this.Cv && (this.Bv(this.Cv), this.Cv = null);
                    const t = this.Sv[0],
                        i = Ms(document, new ms(this._e, this.El)),
                        s = bs(i),
                        h = gs(i);
                    return q(s, h, (() => {
                        let i = 0,
                            h = 0;
                        const e = t => {
                            for (let e = 0; e < this.Sv.length; e++) {
                                const n = this.Sv[e],
                                    r = n.Wp().It,
                                    l = f("left" === t ? n.Yp() : n.Xp()),
                                    o = l.ep();
                                s.drawImage(o, i, h, l.Zf(), r), h += r
                            }
                        };
                        this.zv() && (e("left"), i = f(t.Yp()).Zf()), h = 0;
                        for (let t = 0; t < this.Sv.length; t++) {
                            const e = this.Sv[t],
                                n = e.Wp(),
                                r = e.ep();
                            s.drawImage(r, i, h, n.Et, n.It), h += n.It
                        }
                        i += t.Wp().Et, this.Wv() && (h = 0, e("right"));
                        const n = t => {
                            const e = f("left" === t ? this.Rv.uv() : this.Rv.cv()),
                                n = e.Wp(),
                                r = e.ep();
                            s.drawImage(r, i, h, n.Et, n.It)
                        };
                        if (this.zi.timeScale.visible) {
                            i = 0, this.zv() && (n("left"), i = f(t.Yp()).Zf());
                            const e = this.Rv.Wp(),
                                r = this.Rv.ep();
                            s.drawImage(r, i, h, e.Et, e.It), this.Wv() && (i += t.Wp().Et, n("right"), s.restore())
                        }
                    })), i
                }
                jv(t) {
                    return ("left" !== t || this.zv()) && ("right" !== t || this.Wv()) ? 0 === this.Sv.length ? 0 : f("left" === t ? this.Sv[0].Yp() : this.Sv[0].Xp()).Zf() : 0
                }
                $v() {
                    let t = 0,
                        i = 0,
                        s = 0;
                    for (const h of this.Sv) this.zv() && (i = Math.max(i, f(h.Yp()).Yf())), this.Wv() && (s = Math.max(s, f(h.Xp()).Yf())), t += h.qa();
                    const h = this._e,
                        e = this.El,
                        n = Math.max(h - i - s, 0),
                        r = this.zi.timeScale.visible;
                    let l = r ? this.Rv.pv() : 0;
                    l % 2 && (l += 1);
                    const o = 0 + l,
                        a = e < o ? 0 : e - o,
                        u = a / t;
                    let c = 0;
                    for (let t = 0; t < this.Sv.length; ++t) {
                        const h = this.Sv[t];
                        h.xp(this.gi.Iu()[t]);
                        let e = 0,
                            r = 0;
                        r = t === this.Sv.length - 1 ? a - c : Math.round(h.qa() * u), e = Math.max(r, 2), c += e, h.Kf(new ms(n, e)), this.zv() && h.zp(i, "left"), this.Wv() && h.zp(s, "right"), h.Gf() && this.gi.Fu(h.Gf(), e)
                    }
                    this.Rv.fv(new ms(r ? n : 0, l), r ? i : 0, r ? s : 0), this.gi.Xa(n), this.kv !== i && (this.kv = i), this.xv !== s && (this.xv = s)
                }
                Ov(t) {
                    let i = t.deltaX / 100,
                        s = -t.deltaY / 100;
                    if (0 !== i && this.zi.handleScroll.mouseWheel || 0 !== s && this.zi.handleScale.mouseWheel) {
                        switch (t.cancelable && t.preventDefault(), t.deltaMode) {
                            case t.DOM_DELTA_PAGE:
                                i *= 120, s *= 120;
                                break;
                            case t.DOM_DELTA_LINE:
                                i *= 32, s *= 32
                        }
                        if (0 !== s && this.zi.handleScale.mouseWheel) {
                            const i = Math.sign(s) * Math.min(1, Math.abs(s)),
                                h = t.clientX - this.hv.getBoundingClientRect().left;
                            this.jt().ju(h, i)
                        }
                        0 !== i && this.zi.handleScroll.mouseWheel && this.jt().$u(-80 * i)
                    }
                }
                Bv(t) {
                    var i;
                    const s = t.bs();
                    3 === s && this.Hv(), 3 !== s && 2 !== s || (this.Uv(t), this.qv(t), this.Rv.dt(), this.Sv.forEach((t => {
                        t.Tp()
                    })), 3 === (null === (i = this.Cv) || void 0 === i ? void 0 : i.bs()) && (this.Cv.Ps(t), this.Hv(), this.Uv(this.Cv), this.qv(this.Cv), t = this.Cv, this.Cv = null)), this.Jf(t)
                }
                qv(t) {
                    const i = t.Ts();
                    for (const t of i) this.Ds(t)
                }
                Uv(t) {
                    const i = this.gi.Iu();
                    for (let s = 0; s < i.length; s++) t.gs(s).ws && i[s].uo()
                }
                Ds(t) {
                    const i = this.gi.gt();
                    switch (t.Ss) {
                        case 0:
                            i.K_();
                            break;
                        case 1:
                            i.Z_(t.Tt);
                            break;
                        case 2:
                            i.xs(t.Tt);
                            break;
                        case 3:
                            i.Cs(t.Tt);
                            break;
                        case 4:
                            i.V_()
                    }
                }
                gu(t) {
                    null !== this.Cv ? this.Cv.Ps(t) : this.Cv = t, this.Tv || (this.Tv = !0, this.yv = window.requestAnimationFrame((() => {
                        if (this.Tv = !1, this.yv = 0, null !== this.Cv) {
                            const t = this.Cv;
                            this.Cv = null, this.Bv(t)
                        }
                    })))
                }
                Hv() {
                    this.Ev()
                }
                Ev() {
                    const t = this.gi.Iu(),
                        i = t.length,
                        s = this.Sv.length;
                    for (let t = i; t < s; t++) {
                        const t = c(this.Sv.pop());
                        this.Pv.removeChild(t.$f()), t.Lp().v(this), t.M()
                    }
                    for (let h = s; h < i; h++) {
                        const i = new Ds(this, t[h]);
                        i.Lp().l(this.Yv.bind(this), this), this.Sv.push(i), this.Pv.insertBefore(i.$f(), this.Rv.$f())
                    }
                    for (let s = 0; s < i; s++) {
                        const i = t[s],
                            h = this.Sv[s];
                        h.Gf() !== i ? h.xp(i) : h.kp()
                    }
                    this.Iv(), this.$v()
                }
                Xv(t, i) {
                    var s;
                    const h = new Map;
                    let e;
                    if (null !== t && this.gi.ft().forEach((i => {
                            const s = i.us().ah(t);
                            null !== s && h.set(i, s)
                        })), null !== t) {
                        const i = null === (s = this.gi.gt().Mi(t)) || void 0 === s ? void 0 : s.qo;
                        void 0 !== i && (e = i)
                    }
                    const n = this.jt().Ou(),
                        r = null !== n && n.Ru instanceof Si ? n.Ru : void 0,
                        l = null !== n && void 0 !== n.Np ? n.Np.tr : void 0;
                    return {
                        rt: e,
                        vn: null != t ? t : void 0,
                        Kv: null != i ? i : void 0,
                        Zv: r,
                        Gv: h,
                        Jv: l
                    }
                }
                Yv(t, i) {
                    this._p.m((() => this.Xv(t, i)))
                }
                Nv(t, i) {
                    this.wu.m((() => this.Xv(t, i)))
                }
                Iv() {
                    const t = this.zi.timeScale.visible ? "" : "none";
                    this.Rv.$f().style.display = t
                }
                zv() {
                    return this.Sv[0].Gf().io().B().visible
                }
                Wv() {
                    return this.Sv[0].Gf().so().B().visible
                }
            }

            function Ws(t, i, s, h) {
                const e = s.value;
                return {
                    vn: i,
                    rt: t,
                    Tt: [e, e, e, e],
                    qo: h
                }
            }

            function Gs(t, i, s, h) {
                const e = s.value,
                    n = {
                        vn: i,
                        rt: t,
                        Tt: [e, e, e, e],
                        qo: h
                    };
                return "color" in s && void 0 !== s.color && (n.O = s.color), n
            }

            function Ks(t) {
                return void 0 !== t.Tt
            }

            function Zs(t) {
                return (i, s, h, e) => {
                    return void 0 === (n = h).open && void 0 === n.value ? {
                        rt: i,
                        vn: s,
                        qo: e
                    } : t(i, s, h, e);
                    var n
                }
            }
            const $s = {
                Candlestick: Zs((function(t, i, s, h) {
                    const e = {
                        vn: i,
                        rt: t,
                        Tt: [s.open, s.high, s.low, s.close],
                        qo: h
                    };
                    return "color" in s && void 0 !== s.color && (e.O = s.color), "borderColor" in s && void 0 !== s.borderColor && (e.Pt = s.borderColor), "wickColor" in s && void 0 !== s.wickColor && (e.Kn = s.wickColor), e
                })),
                Bar: Zs((function(t, i, s, h) {
                    const e = {
                        vn: i,
                        rt: t,
                        Tt: [s.open, s.high, s.low, s.close],
                        qo: h
                    };
                    return "color" in s && void 0 !== s.color && (e.O = s.color), e
                })),
                Area: Zs(Ws),
                Baseline: Zs(Ws),
                Histogram: Zs(Gs),
                Line: Zs(Gs)
            };

            function Ys(t) {
                return $s[t]
            }

            function Hs(t) {
                return 60 * t * 60 * 1e3
            }

            function Qs(t) {
                return 60 * t * 1e3
            }
            const Xs = [{
                Qv: (1, 1e3),
                Uo: 10
            }, {
                Qv: Qs(1),
                Uo: 20
            }, {
                Qv: Qs(5),
                Uo: 21
            }, {
                Qv: Qs(30),
                Uo: 22
            }, {
                Qv: Hs(1),
                Uo: 30
            }, {
                Qv: Hs(3),
                Uo: 31
            }, {
                Qv: Hs(6),
                Uo: 32
            }, {
                Qv: Hs(12),
                Uo: 33
            }];

            function th(t, i) {
                if (t.getUTCFullYear() !== i.getUTCFullYear()) return 70;
                if (t.getUTCMonth() !== i.getUTCMonth()) return 60;
                if (t.getUTCDate() !== i.getUTCDate()) return 50;
                for (let s = Xs.length - 1; s >= 0; --s)
                    if (Math.floor(i.getTime() / Xs[s].Qv) !== Math.floor(t.getTime() / Xs[s].Qv)) return Xs[s].Uo;
                return 0
            }

            function ih(t, i = 0) {
                if (0 === t.length) return;
                let s = 0 === i ? null : t[i - 1].rt.Io,
                    h = null !== s ? new Date(1e3 * s) : null,
                    e = 0;
                for (let n = i; n < t.length; ++n) {
                    const i = t[n],
                        r = new Date(1e3 * i.rt.Io);
                    null !== h && (i.Ho = th(r, h)), e += i.rt.Io - (s || i.rt.Io), s = i.rt.Io, h = r
                }
                if (0 === i && t.length > 1) {
                    const i = Math.ceil(e / (t.length - 1)),
                        s = new Date(1e3 * (t[0].rt.Io - i));
                    t[0].Ho = th(new Date(1e3 * t[0].rt.Io), s)
                }
            }

            function sh(t) {
                if (!vs(t)) throw new Error("time must be of type BusinessDay");
                const i = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
                return {
                    Io: Math.round(i.getTime() / 1e3),
                    Eo: t
                }
            }

            function hh(t) {
                if (!ps(t)) throw new Error("time must be of type isUTCTimestamp");
                return {
                    Io: t
                }
            }

            function eh(t) {
                return 0 === t.length ? null : vs(t[0].time) ? sh : hh
            }

            function nh(t) {
                return ps(t) ? hh(t) : vs(t) ? sh(t) : sh(rh(t))
            }

            function rh(t) {
                const i = new Date(t);
                if (isNaN(i.getTime())) throw new Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);
                return {
                    day: i.getUTCDate(),
                    month: i.getUTCMonth() + 1,
                    year: i.getUTCFullYear()
                }
            }

            function lh(t) {
                x(t.time) && (t.time = rh(t.time))
            }

            function oh(t) {
                return {
                    vn: 0,
                    tm: new Map,
                    qh: t
                }
            }

            function ah(t) {
                if (void 0 !== t && 0 !== t.length) return {
                    im: t[0].rt.Io,
                    sm: t[t.length - 1].rt.Io
                }
            }

            function uh(t) {
                let i;
                return t.forEach((t => {
                    void 0 === i && (i = t.qo)
                })), c(i)
            }

            function ch(t) {
                void 0 === t.qo && (t.qo = t.time)
            }
            class fh {
                constructor() {
                    this.nm = new Map, this.rm = new Map, this.hm = new Map, this.lm = []
                }
                M() {
                    this.nm.clear(), this.rm.clear(), this.hm.clear(), this.lm = []
                }
                am(t, i) {
                    let s = 0 !== this.nm.size,
                        h = !1;
                    const e = this.rm.get(t);
                    if (void 0 !== e)
                        if (1 === this.rm.size) s = !1, h = !0, this.nm.clear();
                        else
                            for (const i of this.lm) i.pointData.tm.delete(t) && (h = !0);
                    let n = [];
                    if (0 !== i.length) {
                        const s = i;
                        s.forEach((t => ch(t))),
                            function(t) {
                                t.forEach(lh)
                            }(i);
                        const e = f(eh(i)),
                            r = Ys(t.qr());
                        n = s.map((i => {
                            const s = e(i.time);
                            let n = this.nm.get(s.Io);
                            void 0 === n && (n = oh(s), this.nm.set(s.Io, n), h = !0);
                            const l = r(s, n.vn, i, i.qo);
                            return n.tm.set(t, l), l
                        }))
                    }
                    s && this.om(), this._m(t, n);
                    let r = -1;
                    if (h) {
                        const t = [];
                        this.nm.forEach((i => {
                            t.push({
                                Ho: 0,
                                rt: i.qh,
                                pointData: i,
                                qo: uh(i.tm)
                            })
                        })), t.sort(((t, i) => t.rt.Io - i.rt.Io)), r = this.um(t)
                    }
                    return this.dm(t, r, function(t, i) {
                        const s = ah(t),
                            h = ah(i);
                        if (void 0 !== s && void 0 !== h) return {
                            Fh: s.sm >= h.sm && s.im >= h.im
                        }
                    }(this.rm.get(t), e))
                }
                ic(t) {
                    return this.am(t, [])
                }
                fm(t, i) {
                    const s = i;
                    ch(s), lh(i);
                    const h = f(eh([i]))(i.time),
                        e = this.hm.get(t);
                    if (void 0 !== e && h.Io < e.Io) throw new Error(`Cannot update oldest data, last time=${e.Io}, new time=${h.Io}`);
                    let n = this.nm.get(h.Io);
                    const r = void 0 === n;
                    void 0 === n && (n = oh(h), this.nm.set(h.Io, n));
                    const l = Ys(t.qr())(h, n.vn, i, s.qo);
                    n.tm.set(t, l), this.pm(t, l);
                    const o = {
                        Fh: Ks(l)
                    };
                    if (!r) return this.dm(t, -1, o);
                    const a = {
                            Ho: 0,
                            rt: n.qh,
                            pointData: n,
                            qo: uh(n.tm)
                        },
                        u = mt(this.lm, a.rt.Io, ((t, i) => t.rt.Io < i));
                    this.lm.splice(u, 0, a);
                    for (let t = u; t < this.lm.length; ++t) dh(this.lm[t].pointData, t);
                    return ih(this.lm, u), this.dm(t, u, o)
                }
                pm(t, i) {
                    let s = this.rm.get(t);
                    void 0 === s && (s = [], this.rm.set(t, s));
                    const h = 0 !== s.length ? s[s.length - 1] : null;
                    null === h || i.rt.Io > h.rt.Io ? Ks(i) && s.push(i) : Ks(i) ? s[s.length - 1] = i : s.splice(-1, 1), this.hm.set(t, i.rt)
                }
                _m(t, i) {
                    0 !== i.length ? (this.rm.set(t, i.filter(Ks)), this.hm.set(t, i[i.length - 1].rt)) : (this.rm.delete(t), this.hm.delete(t))
                }
                om() {
                    for (const t of this.lm) 0 === t.pointData.tm.size && this.nm.delete(t.rt.Io)
                }
                um(t) {
                    let i = -1;
                    for (let s = 0; s < this.lm.length && s < t.length; ++s) {
                        const h = this.lm[s],
                            e = t[s];
                        if (h.rt.Io !== e.rt.Io) {
                            i = s;
                            break
                        }
                        e.Ho = h.Ho, dh(e.pointData, s)
                    }
                    if (-1 === i && this.lm.length !== t.length && (i = Math.min(this.lm.length, t.length)), -1 === i) return -1;
                    for (let s = i; s < t.length; ++s) dh(t[s].pointData, s);
                    return ih(t, i), this.lm = t, i
                }
                vm() {
                    if (0 === this.rm.size) return null;
                    let t = 0;
                    return this.rm.forEach((i => {
                        0 !== i.length && (t = Math.max(t, i[i.length - 1].vn))
                    })), t
                }
                dm(t, i, s) {
                    const h = {
                        wm: new Map,
                        gt: {
                            P_: this.vm()
                        }
                    };
                    if (-1 !== i) this.rm.forEach(((i, e) => {
                        h.wm.set(e, {
                            ke: i,
                            bm: e === t ? s : void 0
                        })
                    })), this.rm.has(t) || h.wm.set(t, {
                        ke: [],
                        bm: s
                    }), h.gt.gm = this.lm, h.gt.Mm = i;
                    else {
                        const i = this.rm.get(t);
                        h.wm.set(t, {
                            ke: i || [],
                            bm: s
                        })
                    }
                    return h
                }
            }

            function dh(t, i) {
                t.vn = i, t.tm.forEach((t => {
                    t.vn = i
                }))
            }

            function vh(t) {
                return {
                    value: t.Tt[3],
                    time: t.qo
                }
            }

            function ph(t) {
                const i = vh(t);
                return void 0 !== t.O && (i.color = t.O), i
            }

            function mh(t) {
                return {
                    open: t.Tt[0],
                    high: t.Tt[1],
                    low: t.Tt[2],
                    close: t.Tt[3],
                    time: t.qo
                }
            }
            const gh = {
                Area: vh,
                Line: ph,
                Baseline: vh,
                Histogram: ph,
                Bar: function(t) {
                    const i = mh(t);
                    return void 0 !== t.O && (i.color = t.O), i
                },
                Candlestick: function(t) {
                    const i = mh(t),
                        {
                            O: s,
                            Pt: h,
                            Kn: e
                        } = t;
                    return void 0 !== s && (i.color = s), void 0 !== h && (i.borderColor = h), void 0 !== e && (i.wickColor = e), i
                }
            };

            function bh(t) {
                return gh[t]
            }
            const Mh = {
                color: "#FF0000",
                price: 0,
                lineStyle: 2,
                lineWidth: 1,
                lineVisible: !0,
                axisLabelVisible: !0,
                title: ""
            };
            class wh {
                constructor(t) {
                    this.Lr = t
                }
                applyOptions(t) {
                    this.Lr.Wr(t)
                }
                options() {
                    return this.Lr.B()
                }
                Sm() {
                    return this.Lr
                }
            }
            class yh {
                constructor(t, i, s) {
                    this.Js = t, this.ym = i, this.km = s
                }
                priceFormatter() {
                    return this.Js.Qh()
                }
                priceToCoordinate(t) {
                    const i = this.Js.yt();
                    return null === i ? null : this.Js.Ct().xt(t, i.Tt)
                }
                coordinateToPrice(t) {
                    const i = this.Js.yt();
                    return null === i ? null : this.Js.Ct().Hi(t, i.Tt)
                }
                barsInLogicalRange(t) {
                    if (null === t) return null;
                    const i = new ss(new Xi(t.from, t.to)).Go(),
                        s = this.Js.us();
                    if (s.vi()) return null;
                    const h = s.ah(i.Us(), 1),
                        e = s.ah(i.qs(), -1),
                        n = f(s.rh()),
                        r = f(s._s());
                    if (null !== h && null !== e && h.vn > e.vn) return {
                        barsBefore: t.from - n,
                        barsAfter: r - t.to
                    };
                    const l = {
                        barsBefore: null === h || h.vn === n ? t.from - n : h.vn - n,
                        barsAfter: null === e || e.vn === r ? r - t.to : r - e.vn
                    };
                    return null !== h && null !== e && (l.from = h.rt.Eo || h.rt.Io, l.to = e.rt.Eo || e.rt.Io), l
                }
                setData(t) {
                    this.Js.qr(), this.ym.xm(this.Js, t)
                }
                update(t) {
                    this.Js.qr(), this.ym.Cm(this.Js, t)
                }
                dataByIndex(t, i) {
                    const s = this.Js.us().ah(t, i);
                    return null === s ? null : bh(this.seriesType())(s)
                }
                setMarkers(t) {
                    const i = t.map((t => Object.assign(Object.assign({}, t), {
                        originalTime: t.time,
                        time: nh(t.time)
                    })));
                    this.Js.Wh(i)
                }
                markers() {
                    return this.Js.jh().map((t => {
                        const {
                            originalTime: i,
                            time: s
                        } = t, h = function(t, i) {
                            var s = {};
                            for (var h in t) Object.prototype.hasOwnProperty.call(t, h) && i.indexOf(h) < 0 && (s[h] = t[h]);
                            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                                var e = 0;
                                for (h = Object.getOwnPropertySymbols(t); e < h.length; e++) i.indexOf(h[e]) < 0 && Object.prototype.propertyIsEnumerable.call(t, h[e]) && (s[h[e]] = t[h[e]])
                            }
                            return s
                        }(t, ["originalTime", "time"]);
                        return Object.assign({
                            time: i
                        }, h)
                    }))
                }
                applyOptions(t) {
                    this.Js.Wr(t)
                }
                options() {
                    return z(this.Js.B())
                }
                priceScale() {
                    return this.km.priceScale(this.Js.Ct().el())
                }
                createPriceLine(t) {
                    const i = S(z(Mh), t),
                        s = this.Js.$h(i);
                    return new wh(s)
                }
                removePriceLine(t) {
                    this.Js.Hh(t.Sm())
                }
                seriesType() {
                    return this.Js.qr()
                }
            }
            class _h extends yh {
                applyOptions(t) {
                    ds(t), super.applyOptions(t)
                }
            }
            const Ch = {
                    autoScale: !0,
                    mode: 0,
                    invertScale: !1,
                    alignLabels: !0,
                    borderVisible: !0,
                    borderColor: "#2B2B43",
                    entireTextOnly: !1,
                    visible: !1,
                    ticksVisible: !0,
                    scaleMargins: {
                        bottom: .1,
                        top: .2
                    }
                },
                Sh = {
                    color: "rgba(0, 0, 0, 0)",
                    visible: !1,
                    fontSize: 48,
                    fontFamily: O,
                    fontStyle: "",
                    text: "",
                    horzAlign: "center",
                    vertAlign: "center"
                },
                Nh = {
                    width: 0,
                    height: 0,
                    layout: {
                        background: {
                            type: "solid",
                            color: "#FFFFFF"
                        },
                        textColor: "#191919",
                        fontSize: 11,
                        fontFamily: O
                    },
                    crosshair: {
                        vertLine: {
                            color: "#758696",
                            width: 1,
                            style: 3,
                            visible: !0,
                            labelVisible: !0,
                            labelBackgroundColor: "#4c525e"
                        },
                        horzLine: {
                            color: "#758696",
                            width: 1,
                            style: 3,
                            visible: !0,
                            labelVisible: !0,
                            labelBackgroundColor: "#4c525e"
                        },
                        mode: 1
                    },
                    grid: {
                        vertLines: {
                            color: "#D6DCDE",
                            style: 0,
                            visible: !0
                        },
                        horzLines: {
                            color: "#D6DCDE",
                            style: 0,
                            visible: !0
                        }
                    },
                    overlayPriceScales: Object.assign({}, Ch),
                    leftPriceScale: Object.assign(Object.assign({}, Ch), {
                        visible: !1
                    }),
                    rightPriceScale: Object.assign(Object.assign({}, Ch), {
                        visible: !0
                    }),
                    timeScale: {
                        rightOffset: 0,
                        barSpacing: 6,
                        minBarSpacing: .5,
                        fixLeftEdge: !1,
                        fixRightEdge: !1,
                        lockVisibleTimeRangeOnResize: !1,
                        rightBarStaysOnScroll: !1,
                        borderVisible: !0,
                        borderColor: "#2B2B43",
                        visible: !0,
                        timeVisible: !1,
                        secondsVisible: !0,
                        shiftVisibleRangeOnNewBar: !0,
                        ticksVisible: !0
                    },
                    watermark: Sh,
                    localization: {
                        locale: Ss ? navigator.language : "",
                        dateFormat: "dd MMM 'yy"
                    },
                    handleScroll: {
                        mouseWheel: !0,
                        pressedMouseMove: !0,
                        horzTouchDrag: !0,
                        vertTouchDrag: !0
                    },
                    handleScale: {
                        axisPressedMouseMove: {
                            time: !0,
                            price: !0
                        },
                        axisDoubleClickReset: !0,
                        mouseWheel: !0,
                        pinch: !0
                    },
                    kineticScroll: {
                        mouse: !1,
                        touch: !0
                    },
                    trackingMode: {
                        exitMode: 1
                    }
                },
                Th = {
                    upColor: "#26a69a",
                    downColor: "#ef5350",
                    wickVisible: !0,
                    borderVisible: !0,
                    borderColor: "#378658",
                    borderUpColor: "#26a69a",
                    borderDownColor: "#ef5350",
                    wickColor: "#737375",
                    wickUpColor: "#26a69a",
                    wickDownColor: "#ef5350"
                },
                xh = {
                    upColor: "#26a69a",
                    downColor: "#ef5350",
                    openVisible: !0,
                    thinBars: !0
                },
                Eh = {
                    color: "#2196f3",
                    lineStyle: 0,
                    lineWidth: 3,
                    lineType: 0,
                    crosshairMarkerVisible: !0,
                    crosshairMarkerRadius: 4,
                    crosshairMarkerBorderColor: "",
                    crosshairMarkerBackgroundColor: "",
                    lastPriceAnimation: 0
                },
                zh = {
                    topColor: "rgba( 46, 220, 135, 0.4)",
                    bottomColor: "rgba( 40, 221, 100, 0)",
                    lineColor: "#33D778",
                    lineStyle: 0,
                    lineWidth: 3,
                    lineType: 0,
                    crosshairMarkerVisible: !0,
                    crosshairMarkerRadius: 4,
                    crosshairMarkerBorderColor: "",
                    crosshairMarkerBackgroundColor: "",
                    lastPriceAnimation: 0
                },
                kh = {
                    baseValue: {
                        type: "price",
                        price: 0
                    },
                    topFillColor1: "rgba(38, 166, 154, 0.28)",
                    topFillColor2: "rgba(38, 166, 154, 0.05)",
                    topLineColor: "rgba(38, 166, 154, 1)",
                    bottomFillColor1: "rgba(239, 83, 80, 0.05)",
                    bottomFillColor2: "rgba(239, 83, 80, 0.28)",
                    bottomLineColor: "rgba(239, 83, 80, 1)",
                    lineWidth: 3,
                    lineStyle: 0,
                    lineType: 0,
                    crosshairMarkerVisible: !0,
                    crosshairMarkerRadius: 4,
                    crosshairMarkerBorderColor: "",
                    crosshairMarkerBackgroundColor: "",
                    lastPriceAnimation: 0
                },
                Lh = {
                    color: "#26a69a",
                    base: 0
                },
                Oh = {
                    title: "",
                    visible: !0,
                    lastValueVisible: !0,
                    priceLineVisible: !0,
                    priceLineSource: 0,
                    priceLineWidth: 1,
                    priceLineColor: "",
                    priceLineStyle: 2,
                    baseLineVisible: !0,
                    baseLineWidth: 1,
                    baseLineColor: "#B2B5BE",
                    baseLineStyle: 0,
                    priceFormat: {
                        type: "price",
                        precision: 2,
                        minMove: .01
                    }
                };
            class Ih {
                constructor(t, i) {
                    this.Tm = t, this.Pm = i
                }
                applyOptions(t) {
                    this.Tm.jt().Au(this.Pm, t)
                }
                options() {
                    return this.fi().B()
                }
                width() {
                    return st(this.Pm) ? this.Tm.jv(this.Pm) : 0
                }
                fi() {
                    return f(this.Tm.jt().Eu(this.Pm)).Ct
                }
            }
            class Bh {
                constructor(t, i) {
                    this.Dm = new C, this.l_ = new C, this.rv = new C, this.gi = t, this.Va = t.gt(), this.Rv = i, this.Va.U_().l(this.Om.bind(this)), this.Va.q_().l(this.Nm.bind(this)), this.Rv.dv().l(this.Rm.bind(this))
                }
                M() {
                    this.Va.U_().v(this), this.Va.q_().v(this), this.Rv.dv().v(this), this.Dm.M(), this.l_.M(), this.rv.M()
                }
                scrollPosition() {
                    return this.Va.A_()
                }
                scrollToPosition(t, i) {
                    i ? this.Va.H_(t, 1e3) : this.gi.Cs(t)
                }
                scrollToRealTime() {
                    this.Va.j_()
                }
                getVisibleRange() {
                    var t, i;
                    const s = this.Va.M_();
                    return null === s ? null : {
                        from: null !== (t = s.from.Eo) && void 0 !== t ? t : s.from.Io,
                        to: null !== (i = s.to.Eo) && void 0 !== i ? i : s.to.Io
                    }
                }
                setVisibleRange(t) {
                    const i = {
                            from: nh(t.from),
                            to: nh(t.to)
                        },
                        s = this.Va.x_(i);
                    this.gi.sc(s)
                }
                getVisibleLogicalRange() {
                    const t = this.Va.g_();
                    return null === t ? null : {
                        from: t.Us(),
                        to: t.qs()
                    }
                }
                setVisibleLogicalRange(t) {
                    u(t.from <= t.to, "The from index cannot be after the to index."), this.gi.sc(t)
                }
                resetTimeScale() {
                    this.gi.ks()
                }
                fitContent() {
                    this.gi.K_()
                }
                logicalToCoordinate(t) {
                    const i = this.gi.gt();
                    return i.vi() ? null : i.Ot(t)
                }
                coordinateToLogical(t) {
                    return this.Va.vi() ? null : this.Va.D_(t)
                }
                timeToCoordinate(t) {
                    const i = nh(t),
                        s = this.Va.hl(i, !1);
                    return null === s ? null : this.Va.Ot(s)
                }
                coordinateToTime(t) {
                    var i;
                    const s = this.gi.gt(),
                        h = s.D_(t),
                        e = s.Ui(h);
                    return null === e ? null : null !== (i = e.Eo) && void 0 !== i ? i : e.Io
                }
                width() {
                    return this.Rv.Wp().Et
                }
                height() {
                    return this.Rv.Wp().It
                }
                subscribeVisibleTimeRangeChange(t) {
                    this.Dm.l(t)
                }
                unsubscribeVisibleTimeRangeChange(t) {
                    this.Dm.p(t)
                }
                subscribeVisibleLogicalRangeChange(t) {
                    this.l_.l(t)
                }
                unsubscribeVisibleLogicalRangeChange(t) {
                    this.l_.p(t)
                }
                subscribeSizeChange(t) {
                    this.rv.l(t)
                }
                unsubscribeSizeChange(t) {
                    this.rv.p(t)
                }
                applyOptions(t) {
                    this.Va.Wr(t)
                }
                options() {
                    return z(this.Va.B())
                }
                Om() {
                    this.Dm.g() && this.Dm.m(this.getVisibleRange())
                }
                Nm() {
                    this.l_.g() && this.l_.m(this.getVisibleLogicalRange())
                }
                Rm(t) {
                    this.rv.m(t.Et, t.It)
                }
            }

            function Rh(t) {
                if (void 0 === t || "custom" === t.type) return;
                const i = t;
                void 0 !== i.minMove && void 0 === i.precision && (i.precision = function(t) {
                    if (t >= 1) return 0;
                    let i = 0;
                    for (; i < 8; i++) {
                        const s = Math.round(t);
                        if (Math.abs(s - t) < 1e-8) return i;
                        t *= 10
                    }
                    return i
                }(i.minMove))
            }

            function Vh(t) {
                return function(t) {
                    if (E(t.handleScale)) {
                        const i = t.handleScale;
                        t.handleScale = {
                            axisDoubleClickReset: i,
                            axisPressedMouseMove: {
                                time: i,
                                price: i
                            },
                            mouseWheel: i,
                            pinch: i
                        }
                    } else if (void 0 !== t.handleScale && E(t.handleScale.axisPressedMouseMove)) {
                        const i = t.handleScale.axisPressedMouseMove;
                        t.handleScale.axisPressedMouseMove = {
                            time: i,
                            price: i
                        }
                    }
                    const i = t.handleScroll;
                    E(i) && (t.handleScroll = {
                        horzTouchDrag: i,
                        vertTouchDrag: i,
                        mouseWheel: i,
                        pressedMouseMove: i
                    })
                }(t), t
            }
            class Ph {
                constructor(t, i) {
                    this.Am = new fh, this.Em = new Map, this.Im = new Map, this.Lm = new C, this.Vm = new C;
                    const s = void 0 === i ? z(Nh) : S(z(Nh), Vh(i));
                    this.Tm = new qs(t, s), this.Tm.Lp().l((t => {
                        this.Lm.g() && this.Lm.m(this.Bm(t()))
                    }), this), this.Tm.Bu().l((t => {
                        this.Vm.g() && this.Vm.m(this.Bm(t()))
                    }), this);
                    const h = this.Tm.jt();
                    this.Fm = new Bh(h, this.Tm.Vv())
                }
                remove() {
                    this.Tm.Lp().v(this), this.Tm.Bu().v(this), this.Fm.M(), this.Tm.M(), this.Em.clear(), this.Im.clear(), this.Lm.M(), this.Vm.M(), this.Am.M()
                }
                resize(t, i, s) {
                    this.Tm.Av(t, i, s)
                }
                addAreaSeries(t = {}) {
                    Rh(t.priceFormat);
                    const i = S(z(Oh), zh, t),
                        s = this.Tm.jt().Qu("Area", i),
                        h = new yh(s, this, this);
                    return this.Em.set(h, s), this.Im.set(s, h), h
                }
                addBaselineSeries(t = {}) {
                    Rh(t.priceFormat);
                    const i = S(z(Oh), z(kh), t),
                        s = this.Tm.jt().Qu("Baseline", i),
                        h = new yh(s, this, this);
                    return this.Em.set(h, s), this.Im.set(s, h), h
                }
                addBarSeries(t = {}) {
                    Rh(t.priceFormat);
                    const i = S(z(Oh), xh, t),
                        s = this.Tm.jt().Qu("Bar", i),
                        h = new yh(s, this, this);
                    return this.Em.set(h, s), this.Im.set(s, h), h
                }
                addCandlestickSeries(t = {}) {
                    ds(t), Rh(t.priceFormat);
                    const i = S(z(Oh), Th, t),
                        s = this.Tm.jt().Qu("Candlestick", i),
                        h = new _h(s, this, this);
                    return this.Em.set(h, s), this.Im.set(s, h), h
                }
                addHistogramSeries(t = {}) {
                    Rh(t.priceFormat);
                    const i = S(z(Oh), Lh, t),
                        s = this.Tm.jt().Qu("Histogram", i),
                        h = new yh(s, this, this);
                    return this.Em.set(h, s), this.Im.set(s, h), h
                }
                addLineSeries(t = {}) {
                    Rh(t.priceFormat);
                    const i = S(z(Oh), Eh, t),
                        s = this.Tm.jt().Qu("Line", i),
                        h = new yh(s, this, this);
                    return this.Em.set(h, s), this.Im.set(s, h), h
                }
                removeSeries(t) {
                    const i = c(this.Em.get(t)),
                        s = this.Am.ic(i);
                    this.Tm.jt().ic(i), this.zm(s), this.Em.delete(t), this.Im.delete(i)
                }
                xm(t, i) {
                    this.zm(this.Am.am(t, i))
                }
                Cm(t, i) {
                    this.zm(this.Am.fm(t, i))
                }
                subscribeClick(t) {
                    this.Lm.l(t)
                }
                unsubscribeClick(t) {
                    this.Lm.p(t)
                }
                subscribeCrosshairMove(t) {
                    this.Vm.l(t)
                }
                unsubscribeCrosshairMove(t) {
                    this.Vm.p(t)
                }
                priceScale(t) {
                    return new Ih(this.Tm, t)
                }
                timeScale() {
                    return this.Fm
                }
                applyOptions(t) {
                    this.Tm.Wr(Vh(t))
                }
                options() {
                    return this.Tm.B()
                }
                takeScreenshot() {
                    return this.Tm.Fv()
                }
                zm(t) {
                    const i = this.Tm.jt();
                    i.Gu(t.gt.P_, t.gt.gm, t.gt.Mm), t.wm.forEach(((t, i) => i.Z(t.ke, t.bm))), i.N_()
                }
                Wm(t) {
                    return c(this.Im.get(t))
                }
                Bm(t) {
                    const i = new Map;
                    t.Gv.forEach(((t, s) => {
                        const h = bh(s.qr())(t);
                        u(function(t) {
                            return void 0 !== t.open || void 0 !== t.value
                        }(h)), i.set(this.Wm(s), h)
                    }));
                    const s = void 0 === t.Zv ? void 0 : this.Wm(t.Zv);
                    return {
                        time: t.rt,
                        logical: t.vn,
                        point: t.Kv,
                        hoveredSeries: s,
                        hoveredMarkerId: t.Jv,
                        seriesData: i
                    }
                }
            }

            function Jh(t, i) {
                let s;
                if (x(t)) {
                    const i = document.getElementById(t);
                    u(null !== i, `Cannot find element in DOM with id=${t}`), s = i
                } else s = t;
                return new Ph(s, i)
            }
        }
    }
]);