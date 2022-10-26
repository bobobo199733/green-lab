"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [49473], {
        715394: (e, t, i) => {
            i.d(t, {
                numOfDecimalPlaces: () => n
            });
            var r = i(960521);

            function n(e) {
                return (new r.Big(e).toFixed().split(".")[1] || "").length
            }
        },
        446472: (e, t, i) => {
            i.d(t, {
                getMinTick: () => s,
                makeVariableMinTickData: () => a,
                makePriceToPriceIndexConverter: () => o,
                makePriceIndexToPriceConverter: () => l
            });
            var r = i(960521),
                n = i(270617);

            function s(e) {
                const {
                    minTick: t,
                    price: i,
                    variableMinTickData: r,
                    shouldCheckForEquality: n
                } = e;
                return void 0 === r ? t : function(e, t, i = !1) {
                    for (let r = 0; r < t.length; r++) {
                        if (e < t[r].price) return t[r].minTick;
                        if (i && e === t[r].price) return t[r].minTick
                    }
                    return t[t.length - 1].minTick
                }(i, r, n)
            }

            function a(e, t) {
                var i, s, a, o, l;
                const u = t.split(" ").map(Number);
                if ((0, n.isEven)(u.length) || u.some(Number.isNaN)) return [{
                    minTick: e,
                    price: 1 / 0,
                    maxIndex: 1 / 0
                }];
                const c = [];
                for (let e = 0; e < u.length; e += 2) {
                    const t = null !== (i = u[e + 1]) && void 0 !== i ? i : 1 / 0,
                        n = null !== (a = null === (s = c[c.length - 1]) || void 0 === s ? void 0 : s.price) && void 0 !== a ? a : 0,
                        d = null !== (l = null === (o = c[c.length - 1]) || void 0 === o ? void 0 : o.maxIndex) && void 0 !== l ? l : 0,
                        m = t === 1 / 0 ? 1 / 0 : new r.Big(t).minus(n).div(u[e]).plus(d).toNumber();
                    c.push({
                        minTick: u[e],
                        price: t,
                        maxIndex: m
                    })
                }
                return c
            }

            function o(e, t) {
                return i => {
                    var n, s, a, o;
                    if (!Number.isFinite(i)) return NaN;
                    if (void 0 === t) return new r.Big(i).div(e).round().toNumber();
                    for (let e = 0; e < t.length; e++) {
                        const {
                            price: l,
                            minTick: u
                        } = t[e], c = null !== (s = null === (n = t[e - 1]) || void 0 === n ? void 0 : n.price) && void 0 !== s ? s : 0, d = null !== (o = null === (a = t[e - 1]) || void 0 === a ? void 0 : a.maxIndex) && void 0 !== o ? o : 0;
                        if (i < l) return new r.Big(i).minus(c).div(u).plus(d).round().toNumber()
                    }
                    return NaN
                }
            }

            function l(e, t) {
                return i => {
                    var n, s, a, o;
                    if (!Number.isFinite(i)) return NaN;
                    if (void 0 === t) return (0, r.Big)(i).mul(e).toNumber();
                    for (let e = 0; e < t.length; e++) {
                        const {
                            maxIndex: l,
                            minTick: u
                        } = t[e], c = null !== (s = null === (n = t[e - 1]) || void 0 === n ? void 0 : n.price) && void 0 !== s ? s : 0, d = null !== (o = null === (a = t[e - 1]) || void 0 === a ? void 0 : a.maxIndex) && void 0 !== o ? o : 0;
                        if (i < l) return new r.Big(i).minus(d).mul(u).plus(c).toNumber()
                    }
                    return NaN
                }
            }
        },
        701336: (e, t, i) => {
            i.d(t, {
                NumericFormatter: () => s
            });
            var r = i(689765),
                n = i(960521);
            class s {
                constructor(e) {
                    this._precision = e
                }
                format(e) {
                    return (void 0 !== this._precision ? e.toFixed(this._precision) : s.formatNoE(e)).replace(".", r.formatterOptions.decimalSign)
                }
                parse(e) {
                    const t = e.replace(r.formatterOptions.decimalSign, ".");
                    let i = parseFloat(t);
                    return this._precision && (i = +i.toFixed(this._precision)), i
                }
                static formatNoE(e) {
                    if (!Number.isFinite(e)) return String(e);
                    const t = new n.Big(e);
                    return t.lt(1) ? t.toFixed() : t.toString()
                }
            }
        },
        965513: (e, t, i) => {
            i.d(t, {
                PercentageFormatter: () => s
            });
            var r = i(689765),
                n = i(143498);
            class s extends r.PriceFormatter {
                constructor(e) {
                    super(e), this.type = "percentage"
                }
                state() {
                    const e = r.PriceFormatter.prototype.state.call(this);
                    return e.percent = !0, e
                }
                parse(e) {
                    return e = e.replace("%", ""), super.parse(e)
                }
                format(e, t, i, r, s = !0) {
                    const a = super.format(e, t, i, r, !1) + "%";
                    return s ? (0, n.forceLTRStr)(a) : a
                }
                static serialize(e) {
                    return e.state()
                }
                static deserialize(e) {
                    return new s(e.priceScale)
                }
            }
        },
        689765: (e, t, i) => {
            i.d(t, {
                formatterOptions: () => d,
                numberToStringWithLeadingZero: () => f,
                isFormatterHasForexAdditionalPrecision: () => _,
                PriceFormatter: () => S
            });
            var r = i(575932),
                n = i(960521),
                s = i(446472),
                a = i(270617),
                o = i(143498),
                l = i(715394);
            const u = (0, i(911905).getLogger)("Chart.PriceFormatter"),
                c = new RegExp(/^(-?)[0-9]+$/),
                d = {
                    decimalSign: ".",
                    decimalSignFractional: "'"
                },
                m = new Map;
            const h = new Map;

            function p(e, t, i, r) {
                let n = 0;
                if (e > 0 && t > 0) {
                    let t = e;
                    for (i && r && (t /= r); t > 1;) t /= 10, n++
                }
                return n
            }

            function f(e, t) {
                if (!(0, a.isNumber)(e)) return "n/a";
                if (!(0, a.isInteger)(t)) throw new TypeError("invalid length");
                if (t < 0 || t > 24) throw new TypeError("invalid length");
                if (0 === t) return e.toString();
                return ("0000000000000000" + e.toString()).slice(-t)
            }

            function _(e) {
                return "hasForexAdditionalPrecision" in e
            }
            class S {
                constructor(e, t, i, n, o) {
                    if (this.type = "price", this._formatterErrors = {
                            custom: (0, r.t)("Price format is invalid."),
                            fraction: (0, r.t)("Fraction part is invalid."),
                            secondFraction: (0, r.t)("Second fraction part is invalid.")
                        }, t || (t = 1), (0, a.isNumber)(e) && (0, a.isInteger)(e) || (e = 100), e < 0) throw new TypeError("invalid base");
                    this._priceScale = e, this._minMove = t, this._minMove2 = n, this._variableMinTickData = i || void 0 === o ? void 0 : (0, s.makeVariableMinTickData)(NaN, o), i && void 0 !== n && n > 0 && 2 !== n && 4 !== n && 8 !== n ? u.logDebug("invalid minmove2") : (this._fractional = i, this._fractionalLength = p(this._priceScale, this._minMove, this._fractional, this._minMove2))
                }
                isFractional() {
                    return !!this._fractional
                }
                state() {
                    return {
                        fractional: this._fractional,
                        fractionalLength: this._fractionalLength,
                        minMove: this._minMove,
                        minMove2: this._minMove2,
                        priceScale: this._priceScale
                    }
                }
                format(e, t, i, r = !0, a = !0) {
                    let u = "";
                    e < 0 ? (u = !1 === r ? "" : "−", e = -e) : e && !0 === t && (u = "+");
                    let c, d = this._priceScale,
                        m = this._minMove,
                        h = this._fractionalLength;
                    if (void 0 !== this._variableMinTickData) {
                        const t = (0, s.getMinTick)({
                            price: e,
                            minTick: NaN,
                            variableMinTickData: this._variableMinTickData,
                            shouldCheckForEquality: !0
                        });
                        d = Math.pow(10, (0, l.numOfDecimalPlaces)(t)), m = (0, n.Big)(t).mul(d).toNumber(), h = p(d, m)
                    }
                    return c = this._fractional ? u + this._formatAsFractional(e, i) : u + this._formatAsDecimal({
                        price: e,
                        priceScale: d,
                        minMove: m,
                        fractionalLength: h,
                        tailSize: i
                    }), a ? (0, o.forceLTRStr)(c) : c
                }
                parse(e) {
                    return "+" === (e = (e = (0, o.stripLTRMarks)(e)).replace("−", "-"))[0] && (e = e.substring(1)), this._fractional ? this._minMove2 ? this._parseAsDoubleFractional(e) : this._parseAsSingleFractional(e) : this._parseAsDecimal(e)
                }
                hasForexAdditionalPrecision() {
                    return !this._fractional && 10 === this._minMove2
                }
                static serialize(e) {
                    return e.state()
                }
                static deserialize(e) {
                    return new S(e.priceScale, e.minMove, e.fractional, e.minMove2)
                }
                _formatAsExponential(e) {
                    const t = Math.floor(.75 * Math.log10(this._priceScale)),
                        i = e * Math.pow(10, t),
                        r = `e-${t}`,
                        n = Math.log10(this._priceScale) - t;
                    return `${i.toFixed(n).replace(".",d.decimalSign)}${r}`
                }
                _formatAsDecimal(e) {
                    const {
                        price: t,
                        priceScale: i,
                        minMove: r,
                        fractionalLength: n = 0,
                        tailSize: s = 0
                    } = e;
                    if (i > 1e10) return this._formatAsExponential(t);
                    let a;
                    a = this._fractional ? Math.pow(10, n) : Math.pow(10, s) * i / r;
                    const o = 1 / a;
                    let l;
                    if (a > 1) l = Math.floor(t);
                    else {
                        const e = Math.floor(Math.round(t / o) * o);
                        l = 0 === Math.round((t - e) / o) ? e : e + o
                    }
                    let u = "";
                    if (a > 1) {
                        let e = parseFloat((Math.round(t * a) - l * a).toFixed(n));
                        e >= a && (e -= a, l += 1), u = d.decimalSign + f(parseFloat(e.toFixed(n)) * r, n + s), u = this._removeEndingZeros(u, s)
                    }
                    return l.toString() + u
                }
                _getFractPart(e, t, i) {
                    const r = [0, 5],
                        n = [0, 2, 5, 7],
                        s = [0, 1, 2, 3, 5, 6, 7, 8];
                    return 2 === i ? void 0 === r[e] ? -1 : r[e] : 4 === i ? void 0 === n[e] ? -1 : n[e] : 8 === i && 2 === t ? void 0 === s[e] ? -1 : s[e] : e
                }
                _formatAsFractional(e, t) {
                    const i = this._priceScale / this._minMove;
                    let r = Math.floor(e),
                        n = t ? Math.floor(e * i) - r * i : Math.round(e * i) - r * i;
                    n === i && (n = 0, r += 1);
                    let s = "";
                    if (t) {
                        let a = (e - r - n / i) * i;
                        a = Math.round(a * Math.pow(10, t)), s = f(a, t), s = this._removeEndingZeros(s, t)
                    }
                    if (!this._fractionalLength) throw new Error("_fractionalLength is not calculated");
                    let a = "";
                    if (this._minMove2) {
                        const e = n % this._minMove2;
                        n = (n - e) / this._minMove2;
                        const t = f(n, this._fractionalLength),
                            i = this._getFractPart(e, 2, this._minMove2);
                        a = t + d.decimalSignFractional + i
                    } else n = this._getFractPart(n, 1, this._priceScale), a = f(n * this._minMove, this._fractionalLength);
                    return r.toString() + d.decimalSignFractional + a + s
                }
                _removeEndingZeros(e, t) {
                    for (let i = 0; i < t && "0" === e[e.length - 1]; i++) e = e.substring(0, e.length - 1);
                    return e
                }
                _parseAsDecimal(e) {
                    if (e.includes("e")) {
                        if (function(e) {
                                let t = m.get(e);
                                return t || (t = new RegExp("^(-?)[0-9]+\\" + e + "[0-9]*e(-?)[0-9]+$"), m.set(e, t)), t
                            }(d.decimalSign).exec(e)) {
                            const t = parseFloat(e.replace(d.decimalSign, "."));
                            return {
                                value: t,
                                res: !0,
                                suggest: this.format(t)
                            }
                        }
                        return {
                            error: this._formatterErrors.custom,
                            res: !1
                        }
                    }
                    let t = c.exec(e);
                    if (t) {
                        const t = parseFloat(e);
                        return {
                            value: t,
                            res: !0,
                            suggest: this.format(t)
                        }
                    }
                    if (t = function(e) {
                            let t = h.get(e);
                            return t || (t = new RegExp("^(-?)[0-9]+\\" + d.decimalSign + "[0-9]*$"), h.set(e, t)), t
                        }(d.decimalSign).exec(e), t) {
                        const t = parseFloat(e.replace(d.decimalSign, "."));
                        return {
                            value: t,
                            res: !0,
                            suggest: this.format(t)
                        }
                    }
                    return {
                        error: this._formatterErrors.custom,
                        res: !1
                    }
                }
                _patchFractPart(e, t, i) {
                    const r = {
                            0: 0,
                            5: 1
                        },
                        n = {
                            0: 0,
                            2: 1,
                            5: 2,
                            7: 3
                        },
                        s = {
                            0: 0,
                            1: 1,
                            2: 2,
                            3: 3,
                            5: 4,
                            6: 5,
                            7: 6,
                            8: 7
                        };
                    return 2 === i ? void 0 === r[e] ? -1 : r[e] : 4 === i ? void 0 === n[e] ? -1 : n[e] : 8 === i && 2 === t ? void 0 === s[e] ? -1 : s[e] : e
                }
                _parseAsSingleFractional(e) {
                    let t = c.exec(e);
                    if (t) {
                        const t = parseFloat(e);
                        return {
                            value: t,
                            res: !0,
                            suggest: this.format(t)
                        }
                    }
                    if (t = new RegExp("^(-?)([0-9]+)\\" + d.decimalSignFractional + "([0-9]+)$").exec(e), t) {
                        const e = !!t[1],
                            i = parseInt(t[2]),
                            r = this._priceScale,
                            n = this._patchFractPart(parseInt(t[3]), 1, r);
                        if (n >= r || n < 0) return {
                            error: this._formatterErrors.fraction,
                            res: !1
                        };
                        let s = i + n / r;
                        return e && (s = -s), {
                            value: s,
                            res: !0,
                            suggest: this.format(s)
                        }
                    }
                    return {
                        error: this._formatterErrors.custom,
                        res: !1
                    }
                }
                _parseAsDoubleFractional(e) {
                    let t = c.exec(e);
                    if (t) {
                        const t = parseFloat(e);
                        return {
                            value: t,
                            res: !0,
                            suggest: this.format(t)
                        }
                    }
                    if (t = new RegExp("^(-?)([0-9]+)\\" + d.decimalSignFractional + "([0-9]+)\\" + d.decimalSignFractional + "([0-9]+)$").exec(e), t) {
                        const e = !!t[1],
                            i = parseInt(t[2]),
                            r = void 0 !== this._minMove2 ? this._minMove2 : NaN,
                            n = this._priceScale / r,
                            s = this._minMove2,
                            a = this._patchFractPart(parseInt(t[3]), 1, n),
                            o = this._patchFractPart(parseInt(t[4]), 2, s);
                        if (a >= n || a < 0) return {
                            error: this._formatterErrors.fraction,
                            res: !1
                        };
                        if (void 0 !== s && o >= s || o < 0) return {
                            error: this._formatterErrors.secondFraction,
                            res: !1
                        };
                        let l = void 0 !== s ? i + a / n + o / (n * s) : NaN;
                        return e && (l = -l), {
                            value: l,
                            res: !0,
                            suggest: this.format(l)
                        }
                    }
                    return {
                        error: this._formatterErrors.custom,
                        res: !1
                    }
                }
            }
        },
        591419: (e, t, i) => {
            i.d(t, {
                PLACE_HOLDER: () => a,
                NOT_AVAILABLE_VOLUME_FORMATTER: () => o,
                VolumeFormatter: () => l
            });
            var r = i(575932),
                n = i(701336),
                s = i(270617);
            const a = "---",
                o = 1e100;
            class l {
                constructor(e) {
                    this.type = "volume", this._numericFormatter = new n.NumericFormatter, this._fractionalValues = void 0 !== e && e > 0, this._precision = e
                }
                state() {
                    return {
                        precision: this._precision
                    }
                }
                format(e, t) {
                    if (!(0, s.isNumber)(e)) return a;
                    let i = "";
                    return e < 0 ? (i = "−", e = -e) : e > 0 && t && (i = "+"), e >= o ? (0, r.t)("N/A") : (!this._fractionalValues || e >= 995 ? e = Math.round(e) : this._fractionalValues && (e = +e.toFixed(this._precision)), e < 995 ? i + this._formatNumber(e) : e < 999995 ? i + this._formatNumber(e / 1e3) + "K" : e < 999999995 ? (e = 1e3 * Math.round(e / 1e3), i + this._formatNumber(e / 1e6) + "M") : e < 999999999995 ? (e = 1e6 * Math.round(e / 1e6), i + this._formatNumber(e / 1e9) + "B") : (e = 1e9 * Math.round(e / 1e9), i + this._formatNumber(e / 1e12) + "T"))
                }
                parse(e) {
                    if ("---" === e) return {
                        error: "not a number",
                        res: !1,
                        value: NaN
                    };
                    const t = {
                            K: 1e3,
                            M: 1e6,
                            B: 1e9
                        },
                        i = e.slice(-1);
                    if (t.hasOwnProperty(i)) {
                        const r = this._numericFormatter.parse(e.slice(0, -1));
                        return (0, s.isNumber)(r) ? {
                            res: !0,
                            value: r * t[i]
                        } : {
                            error: "not a number",
                            res: !1,
                            value: NaN
                        }
                    } {
                        const t = this._numericFormatter.parse(e);
                        return (0, s.isNumber)(t) ? {
                            res: !0,
                            value: t
                        } : {
                            error: "not a number",
                            res: !1,
                            value: NaN
                        }
                    }
                }
                static serialize(e) {
                    return e.state()
                }
                static deserialize(e) {
                    return new l(e.precision)
                }
                _formatNumber(e) {
                    if (this._fractionalValues && 0 !== e) {
                        const t = 14 - Math.ceil(Math.log10(e)),
                            i = Math.pow(10, t);
                        e = Math.round(e * i) / i
                    }
                    return this._numericFormatter.format(e).replace(/(\.[1-9]*)0+$/, ((e, t) => t))
                }
            }
        },
        273044: (e, t, i) => {
            i.r(t), i.d(t, {
                ResolutionKind: () => s,
                SpecialResolutionKind: () => a,
                Interval: () => c,
                isHour: () => m
            });
            const r = /^(\d*)([TSHDWMR])$/,
                n = /^(\d+)$/;
            var s, a;
            ! function(e) {
                e.Ticks = "ticks", e.Seconds = "seconds", e.Minutes = "minutes", e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Range = "range", e.Invalid = "invalid"
            }(s || (s = {})),
            function(e) {
                e.Hours = "hours"
            }(a || (a = {}));
            const o = {};
            o[s.Ticks] = 1e3, o[s.Seconds] = 1e3, o[s.Minutes] = 60 * o[s.Seconds], o[s.Days] = 1440 * o[s.Minutes], o[s.Weeks] = 7 * o[s.Days];
            const l = {
                    T: s.Ticks,
                    S: s.Seconds,
                    D: s.Days,
                    W: s.Weeks,
                    M: s.Months,
                    R: s.Range
                },
                u = new Set([s.Ticks, s.Seconds, s.Minutes]);
            class c {
                constructor(e, t) {
                    this._kind = s.Invalid, this._multiplier = 0, e !== s.Invalid && t > 0 && (this._kind = e, this._multiplier = t)
                }
                kind() {
                    return this._kind
                }
                multiplier() {
                    return this._multiplier
                }
                isValid() {
                    return this.kind() !== s.Invalid && this.multiplier() > 0
                }
                isDWM() {
                    return this.isValid() && !this.isRange() && !this.isIntraday() && !this.isTicks()
                }
                isIntraday() {
                    const e = u.has(this.kind());
                    return this.isValid() && e
                }
                isSeconds() {
                    return this.kind() === s.Seconds
                }
                isMinutes() {
                    return this.kind() === s.Minutes
                }
                isMinuteHours() {
                    return this.kind() === s.Minutes && m(this.multiplier())
                }
                isDays() {
                    return this.kind() === s.Days
                }
                isWeeks() {
                    return this.kind() === s.Weeks
                }
                isMonths() {
                    return this.kind() === s.Months
                }
                isRange() {
                    return this.kind() === s.Range
                }
                isTicks() {
                    return this.kind() === s.Ticks
                }
                isTimeBased() {
                    return !this.isRange()
                }
                letter() {
                    return this.isValid() && this.kind() !== s.Minutes ? this.kind()[0].toUpperCase() : ""
                }
                value() {
                    return this.isValid() ? this.kind() === s.Minutes ? this.multiplier() + "" : this.multiplier() + this.letter() : ""
                }
                isEqualTo(e) {
                    if (!(e instanceof c)) throw new Error("Argument is not an Interval");
                    return !(!this.isValid() || !e.isValid()) && (this.kind() === e.kind() && this.multiplier() === e.multiplier())
                }
                inMilliseconds(e = Date.now()) {
                    if (!this.isValid() || this.isRange()) return NaN;
                    if (this.isMonths()) {
                        const t = new Date(e);
                        t.setUTCMonth(t.getUTCMonth() + (this.multiplier() || 1));
                        return +t - e
                    }
                    const t = this.multiplier();
                    return o[this.kind()] * t
                }
                static isEqual(e, t) {
                    return e === t || c.parse(e).isEqualTo(c.parse(t))
                }
                static parseExt(e) {
                    e = (e + "").toUpperCase().split(",")[0];
                    let t = r.exec(e);
                    return null !== t ? "H" === t[2] ? {
                        interval: new c(s.Minutes, 60 * d(t[1])),
                        guiResolutionKind: a.Hours
                    } : {
                        interval: new c(l[t[2]], d(t[1])),
                        guiResolutionKind: l[t[2]]
                    } : (t = n.exec(e), null !== t ? {
                        interval: new c(s.Minutes, d(t[1])),
                        guiResolutionKind: s.Minutes
                    } : {
                        interval: new c(s.Invalid, 0),
                        guiResolutionKind: s.Invalid
                    })
                }
                static parse(e) {
                    return c.parseExt(e).interval
                }
                static kind(e) {
                    return c.parse(e).kind()
                }
                static isValid(e) {
                    return c.parse(e).isValid()
                }
                static isDWM(e) {
                    return c.parse(e).isDWM()
                }
                static isIntraday(e) {
                    return c.parse(e).isIntraday()
                }
                static isSeconds(e) {
                    return c.parse(e).isSeconds()
                }
                static isMinutes(e) {
                    return c.parse(e).isMinutes()
                }
                static isMinuteHours(e) {
                    return c.parse(e).isMinuteHours()
                }
                static isDays(e) {
                    return c.parse(e).isDays()
                }
                static isWeeks(e) {
                    return c.parse(e).isWeeks()
                }
                static isMonths(e) {
                    return c.parse(e).isMonths()
                }
                static isRange(e) {
                    return c.parse(e).isRange()
                }
                static isTicks(e) {
                    return c.parse(e).isTicks()
                }
                static isTimeBased(e) {
                    return c.parse(e).isTimeBased()
                }
                static normalize(e) {
                    const t = c.parse(e);
                    return t.isValid() ? t.value() : null
                }
            }

            function d(e) {
                return 0 === e.length ? 1 : parseInt(e, 10)
            }

            function m(e) {
                return e >= 60 && !(e % 60)
            }
        },
        195048: (e, t, i) => {
            i.r(t), i.d(t, {
                STATUS_OFFLINE: () => r,
                STATUS_RESOLVING: () => n,
                STATUS_LOADING: () => s,
                STATUS_READY: () => a,
                STATUS_INVALID_SYMBOL: () => o,
                STATUS_SNAPSHOT: () => l,
                STATUS_EOD: () => u,
                STATUS_PULSE: () => c,
                STATUS_DELAYED: () => d,
                STATUS_DELAYED_STREAMING: () => m,
                STATUS_NO_BARS: () => h,
                STATUS_REPLAY: () => p,
                STATUS_ERROR: () => f,
                SERIES_STATUS_TEXT: () => _,
                STYLE_LINE_TYPE_MARKERS: () => S,
                STYLE_LINE_TYPE_STEP: () => v,
                STYLE_LINE_TYPE_SIMPLE: () => g,
                STYLE_BARS: () => y,
                STYLE_CANDLES: () => T,
                STYLE_LINE: () => M,
                STYLE_AREA: () => b,
                STYLE_RENKO: () => E,
                STYLE_KAGI: () => k,
                STYLE_PNF: () => N,
                STYLE_PB: () => F,
                STYLE_HEIKEN_ASHI: () => A,
                STYLE_HOLLOW_CANDLES: () => L,
                STYLE_BASELINE: () => x,
                STYLE_RANGE: () => I,
                STYLE_HILO: () => R,
                STYLE_COLUMNS: () => w,
                STYLE_SHORT_NAMES: () => D,
                SYMBOL_STRING_DATA: () => P
            });
            const r = 0,
                n = 1,
                s = 2,
                a = 3,
                o = 4,
                l = 5,
                u = 6,
                c = 7,
                d = 8,
                m = 9,
                h = 10,
                p = 11,
                f = 12,
                _ = {
                    [r]: "connecting",
                    [n]: "loading",
                    [s]: "loading",
                    [a]: "realtime",
                    [o]: "invalid",
                    [l]: "snapshot",
                    [u]: "endofday",
                    [c]: "endofday",
                    [d]: "delayed",
                    [m]: "delayed_streaming",
                    [h]: "forbidden",
                    [p]: "replay",
                    [f]: "error"
                },
                S = 0,
                v = 1,
                g = 2,
                y = 0,
                T = 1,
                M = 2,
                b = 3,
                E = 4,
                k = 5,
                N = 6,
                F = 7,
                A = 8,
                L = 9,
                x = 10,
                I = 11,
                R = 12,
                w = 13,
                D = {
                    0: "bar",
                    1: "candle",
                    9: "hollowCandle",
                    2: "line",
                    3: "area",
                    4: "renko",
                    7: "pb",
                    5: "kagi",
                    6: "pnf",
                    8: "ha",
                    10: "baseline",
                    11: "range",
                    12: "hilo",
                    13: "column"
                },
                P = {
                    4: {
                        type: "BarSetRenko@tv-prostudies",
                        basicStudyVersion: 40
                    },
                    7: {
                        type: "BarSetPriceBreak@tv-prostudies",
                        basicStudyVersion: 34
                    },
                    5: {
                        type: "BarSetKagi@tv-prostudies",
                        basicStudyVersion: 34
                    },
                    6: {
                        type: "BarSetPnF@tv-prostudies",
                        basicStudyVersion: 34
                    },
                    8: {
                        type: "BarSetHeikenAshi@tv-basicstudies",
                        basicStudyVersion: 60
                    },
                    11: {
                        type: "BarSetRange@tv-basicstudies",
                        basicStudyVersion: 72
                    }
                }
        },
        749473: (e, t, i) => {
            i.r(t), i.d(t, {
                isRequiringRestartSeriesStyles: () => y,
                isRangeBasedStyle: () => T,
                isRangeStyle: () => M,
                isTimeBasedStyle: () => b,
                isValidStyle: () => E,
                isSingleValueBasedStyle: () => k,
                setLastUsedStyle: () => N,
                getLastUsedStyle: () => F,
                getLastUsedSingleValueBasedStyle: () => A,
                getDefaultStyle: () => L,
                getChartStyleByResolution: () => x,
                chartStyleStudyId: () => I,
                preparePriceAxisProperties: () => R,
                hasProjection: () => D,
                isPriceSourceStyle: () => P,
                getSeriesPriceFormattingState: () => V,
                createSeriesFormatter: () => B,
                symbolCurrencyConvertible: () => U,
                symbolCurrency: () => O,
                symbolOriginalCurrency: () => C,
                symbolBaseCurrency: () => Y,
                isConvertedToOtherCurrency: () => H,
                symbolUnitConvertible: () => W,
                symbolUnit: () => $,
                symbolOriginalUnit: () => K,
                isConvertedToOtherUnit: () => z,
                symbolUnitConvertibleGroupsIfExist: () => G,
                symbolCurrentContract: () => q,
                symbolHasPreOrPostMarket: () => j,
                symbolHasSeveralSessions: () => Z,
                symbolHasEconomicEvents: () => X,
                extractSymbolNameFromSymbolInfo: () => J,
                symbolTitle: () => Q,
                displayedSymbolName: () => ee,
                displayedSymbolExchange: () => te,
                actualSymbol: () => ie,
                proSymbol: () => re,
                symbolForApi: () => ne,
                isRegularSessionId: () => se,
                isCloseBasedSymbol: () => ae,
                isMeasureUnitSymbol: () => oe,
                measureUnitId: () => le,
                hasVolume: () => ue,
                isEconomicSymbol: () => ce,
                getStudySymbolExchange: () => de,
                isFutureContinuousSymbolWithBackajustment: () => me,
                isCryptoSymbol: () => he
            });
            var r = i(62802),
                n = i(195048),
                s = i(273044),
                a = i(689765),
                o = i(611688),
                l = i(588537),
                u = i(591419),
                c = i(965513);
            const d = o.enabled("pay_attention_to_ticker_not_symbol"),
                m = o.enabled("uppercase_instrument_names"),
                h = o.enabled("charting_library_single_symbol_request"),
                p = o.enabled("use_ticker_on_symbol_info_update"),
                f = o.enabled("hide_object_tree_and_price_scale_exchange_label"),
                _ = [4, 5, 6, 7, 8],
                S = [4, 5, 6, 7, 11],
                v = [0, 1, 9, 2, 3, 10, 8, 12, 13],
                g = [2, 10, 3, 13];

            function y(e) {
                return -1 !== _.indexOf(e)
            }

            function T(e) {
                return -1 !== S.indexOf(e)
            }

            function M(e) {
                return 11 === e
            }

            function b(e) {
                return -1 !== v.indexOf(e)
            }

            function E(e) {
                return T(e) || b(e)
            }

            function k(e) {
                switch (e) {
                    case 3:
                    case 10:
                    case 2:
                    case 13:
                        return !0;
                    default:
                        return !1
                }
            }

            function N(e, t) {
                E(e) && (11 !== e && r.setValue("chart.lastUsedStyle", e), ae(t) && k(e) && r.setValue("chart.lastUsedSingleValueBasedStyle", e))
            }

            function F() {
                const e = r.getInt("chart.lastUsedStyle");
                return void 0 === e ? 1 : e
            }

            function A() {
                const e = r.getInt("chart.lastUsedSingleValueBasedStyle");
                return void 0 === e ? 2 : e
            }

            function L(e) {
                return e ? 11 : 1
            }

            function x(e, t) {
                const i = M(t),
                    r = s.Interval.isRange(e);
                return !i && r ? L(!0) : i && !r ? L(!1) : t
            }

            function I(e, t) {
                const i = n.SYMBOL_STRING_DATA[e];
                return void 0 === i ? null : t ? `${i.type}-${i.basicStudyVersion}` : i.type
            }

            function R(e) {
                const t = e.priceAxisProperties,
                    i = t.lockScale.value(),
                    r = 6 === e.style.value();
                (r || i) && (t.log.setValue(!1), t.percentage.setValue(!1)),
                t.logDisabled.setValue(!(!r && !i)), t.percentageDisabled.setValue(!(!r && !i))
            }
            const w = [4, 7, 5, 6];

            function D(e) {
                return -1 !== w.indexOf(e)
            }

            function P(e) {
                return g.includes(e)
            }

            function V(e, t = "default", i = !1) {
                let r, n, s = 100,
                    a = 1;
                if ("default" === t) null != e && (s = e.pricescale, a = e.minmov, r = e.fractional, n = e.minmove2);
                else {
                    let e = t.split(",");
                    3 !== e.length && (e = ["100", "1", "false"]), s = parseInt(e[0]), a = parseInt(e[1]), r = "true" === e[2]
                }
                return i && (a = 1), {
                    priceScale: s,
                    minMove: a,
                    fractional: r,
                    minMove2: n
                }
            }

            function B(e, t, i = !1) {
                if ("default" === t && null != e) {
                    const t = e.formatter || e.format;
                    if ("volume" === t) return new u.VolumeFormatter(2);
                    if ("percent" === t) return new c.PercentageFormatter(e.pricescale)
                }
                const {
                    priceScale: r,
                    minMove: n,
                    fractional: s,
                    minMove2: o
                } = V(e, t, i);
                return new a.PriceFormatter(r, n, s, o)
            }

            function U(e) {
                return null !== e && "spread" !== e.type
            }

            function O(e, t, i) {
                if (null === e) return null;
                const r = !t || i ? e.currency_id : e.currency_code;
                return void 0 === r || "" === r || "pct" === r ? null : r
            }

            function C(e, t) {
                const i = t ? e.original_currency_code : e.original_currency_id;
                return "pct" === i ? null : null != i ? i : O(e, t)
            }

            function Y(e) {
                return e.base_currency_id || null
            }

            function H(e) {
                return !(null === e || !U(e)) && (void 0 !== e.original_currency_id && e.original_currency_id !== e.currency_id)
            }

            function W(e, t) {
                return t && null !== e && "spread" !== e.type
            }

            function $(e, t) {
                if (null === e || !t) return null;
                const i = e.unit_id;
                return void 0 === i || "" === i ? null : i
            }

            function K(e, t) {
                return t ? e.original_unit_id || $(e, t) : null
            }

            function z(e, t) {
                return !(null === e || !W(e, t)) && (void 0 !== e.original_unit_id && e.original_unit_id !== e.unit_id)
            }

            function G(e, t) {
                return null !== e && W(e, t) ? e.unit_conversion_types || null : []
            }

            function q(e) {
                return "futures" === e.type && e.front_contract || null
            }

            function j(e) {
                return null !== e && void 0 !== e.subsessions && e.subsessions.some((e => "premarket" === e.id || "postmarket" === e.id))
            }

            function Z(e) {
                return null !== e && void 0 !== e.subsessions && e.subsessions.filter((e => !e.private)).length > 1
            }

            function X(e) {
                return null !== e && ("forex" === e.type || "cfd" === e.type || he(e))
            }

            function J(e, t) {
                let i = e && (e.pro_name || e.full_name || e.name);
                return h && t ? i = t : p && e && e.ticker && (i = e.ticker), m && i && (i = i.toUpperCase()), i
            }

            function Q(e, t, i = "exchange") {
                return t || f ? e.name : `${e.name}, ${e[i]}`
            }

            function ee(e) {
                let t = e && (q(e) || e.name) || "";
                return t.length > 40 && (t = t.substring(0, 37) + "..."), t.trim()
            }

            function te(e) {
                const t = e ? e.exchange : "";
                return m ? t.toUpperCase() : t
            }

            function ie(e, t) {
                return null !== e ? e.full_name : t
            }

            function re(e, t) {
                return null !== e ? e.pro_name : t
            }

            function ne(e, t) {
                return d && e ? (0, l.ensureDefined)(e.ticker) : ie(e, t)
            }

            function se(e) {
                return "regular" === e || "us_regular" === e
            }

            function ae(e) {
                return "c" === (null == e ? void 0 : e.visible_plots_set)
            }

            function oe(e) {
                return null !== e && ("unit" === e.measure && null !== le(e))
            }

            function le(e) {
                var t;
                return null !== (t = null == e ? void 0 : e.value_unit_id) && void 0 !== t ? t : null
            }

            function ue(e) {
                return void 0 !== e.visible_plots_set ? "ohlcv" === e.visible_plots_set : !e.has_no_volume
            }

            function ce(e) {
                return null !== e && "economic" === e.type
            }

            function de(e) {
                return ce(e) && e.source ? e.source : e.exchange && 0 !== e.exchange.length ? e.exchange : void 0
            }

            function me(e) {
                var t;
                return null !== e && "futures" === e.type && Boolean(e.has_backadjustment && (null === (t = e.typespecs) || void 0 === t ? void 0 : t.includes("continuous")))
            }

            function he(e) {
                var t;
                return (null === (t = e.typespecs) || void 0 === t ? void 0 : t.includes("crypto")) || "crypto" === e.type || "bitcoin" === e.type
            }
        }
    }
]);