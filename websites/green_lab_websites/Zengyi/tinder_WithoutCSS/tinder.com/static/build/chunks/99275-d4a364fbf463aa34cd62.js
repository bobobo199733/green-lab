/*! For license information please see 99275-d4a364fbf463aa34cd62.js.LICENSE.txt */
"use strict";
(globalThis.webpackChunktinderweb = globalThis.webpackChunktinderweb || []).push([
    [99275], {
        799275: (e, r, n) => {
            function t(e) {
                return Intl.getCanonicalLocales(e)
            }

            function u(e, r) {
                var n = r.tzData,
                    t = r.uppercaseLinks,
                    u = e.toUpperCase(),
                    i = Object.keys(n).reduce((function(e, r) {
                        return e[r.toUpperCase()] = r, e
                    }), {}),
                    a = t[u] || i[u];
                return "Etc/UTC" === a || "Etc/GMT" === a ? "UTC" : a
            }

            function i(e) {
                if ("symbol" == typeof e) throw TypeError("Cannot convert a Symbol value to a string");
                return String(e)
            }

            function a(e) {
                if (void 0 === e) return NaN;
                if (null === e) return 0;
                if ("boolean" == typeof e) return e ? 1 : 0;
                if ("number" == typeof e) return e;
                if ("symbol" == typeof e || "bigint" == typeof e) throw new TypeError("Cannot convert symbol/bigint to number");
                return Number(e)
            }

            function o(e) {
                return isFinite(e) ? Math.abs(e) > 8640000000000001 ? NaN : function(e) {
                    var r = a(e);
                    if (isNaN(r) || s(r, -0)) return 0;
                    if (isFinite(r)) return r;
                    var n = Math.floor(Math.abs(r));
                    return r < 0 && (n = -n), s(n, -0) ? 0 : n
                }(e) : NaN
            }

            function c(e) {
                if (null == e) throw new TypeError("undefined/null cannot be converted to object");
                return Object(e)
            }

            function s(e, r) {
                return Object.is ? Object.is(e, r) : e === r ? 0 !== e || 1 / e == 1 / r : e != e && r != r
            }

            function l(e) {
                return new Array(e)
            }

            function D(e, r) {
                return Object.prototype.hasOwnProperty.call(e, r)
            }

            function m(e) {
                return null === e ? "Null" : void 0 === e ? "Undefined" : "function" == typeof e || "object" == typeof e ? "Object" : "number" == typeof e ? "Number" : "boolean" == typeof e ? "Boolean" : "string" == typeof e ? "String" : "symbol" == typeof e ? "Symbol" : "bigint" == typeof e ? "BigInt" : void 0
            }
            n.r(r), n.d(r, {
                ArrayCreate: () => l,
                CanonicalizeLocaleList: () => t,
                CanonicalizeTimeZoneName: () => u,
                CoerceOptionsToObject: () => I,
                ComputeExponent: () => q,
                ComputeExponentForMagnitude: () => Z,
                CurrencyDigits: () => J,
                DateFromTime: () => S,
                Day: () => f,
                DayFromYear: () => F,
                DayWithinYear: () => b,
                DaysInYear: () => v,
                FormatNumericToParts: () => oe,
                FormatNumericToString: () => V,
                GetNumberOption: () => O,
                GetOption: () => k,
                GetOptionsObject: () => j,
                HasOwnProperty: () => D,
                HourFromTime: () => A,
                InLeapYear: () => E,
                InitializeNumberFormat: () => De,
                IsSanctionedSimpleUnitIdentifier: () => R,
                IsValidTimeZoneName: () => G,
                IsWellFormedCurrencyCode: () => Y,
                IsWellFormedUnitIdentifier: () => z,
                MinFromTime: () => B,
                MonthFromTime: () => C,
                OrdinaryHasInstance: () => x,
                PartitionNumberPattern: () => ae,
                PartitionPattern: () => me,
                RangePatternType: () => fe,
                SANCTIONED_UNITS: () => L,
                SIMPLE_UNITS: () => P,
                SameValue: () => s,
                SecFromTime: () => N,
                SetNumberFormatDigitOptions: () => le,
                SetNumberFormatUnitOptions: () => se,
                SupportedLocales: () => ge,
                TimeClip: () => o,
                TimeFromYear: () => y,
                ToNumber: () => a,
                ToObject: () => c,
                ToRawFixed: () => W,
                ToRawPrecision: () => H,
                ToString: () => i,
                Type: () => m,
                WeekDay: () => d,
                YearFromTime: () => h,
                _formatToParts: () => ne,
                defineProperty: () => $._x,
                getInternalSlot: () => $.q,
                getMagnitude: () => $.Tg,
                getMultiInternalSlots: () => $.$0,
                invariant: () => $.kG,
                isLiteralPart: () => $.eY,
                isMissingLocaleDataError: () => Fe,
                msFromTime: () => T,
                removeUnitNamespace: () => U,
                setInternalSlot: () => $.LS,
                setMultiInternalSlots: () => $.e7
            });
            var p = 864e5;

            function g(e, r) {
                return e - Math.floor(e / r) * r
            }

            function f(e) {
                return Math.floor(e / p)
            }

            function d(e) {
                return g(f(e) + 4, 7)
            }

            function F(e) {
                return Date.UTC(e, 0) / p
            }

            function y(e) {
                return Date.UTC(e, 0)
            }

            function h(e) {
                return new Date(e).getUTCFullYear()
            }

            function v(e) {
                return e % 4 != 0 ? 365 : e % 100 != 0 ? 366 : e % 400 != 0 ? 365 : 366
            }

            function b(e) {
                return f(e) - F(h(e))
            }

            function E(e) {
                return 365 === v(h(e)) ? 0 : 1
            }

            function C(e) {
                var r = b(e),
                    n = E(e);
                if (r >= 0 && r < 31) return 0;
                if (r < 59 + n) return 1;
                if (r < 90 + n) return 2;
                if (r < 120 + n) return 3;
                if (r < 151 + n) return 4;
                if (r < 181 + n) return 5;
                if (r < 212 + n) return 6;
                if (r < 243 + n) return 7;
                if (r < 273 + n) return 8;
                if (r < 304 + n) return 9;
                if (r < 334 + n) return 10;
                if (r < 365 + n) return 11;
                throw new Error("Invalid time")
            }

            function S(e) {
                var r = b(e),
                    n = C(e),
                    t = E(e);
                if (0 === n) return r + 1;
                if (1 === n) return r - 30;
                if (2 === n) return r - 58 - t;
                if (3 === n) return r - 89 - t;
                if (4 === n) return r - 119 - t;
                if (5 === n) return r - 150 - t;
                if (6 === n) return r - 180 - t;
                if (7 === n) return r - 211 - t;
                if (8 === n) return r - 242 - t;
                if (9 === n) return r - 272 - t;
                if (10 === n) return r - 303 - t;
                if (11 === n) return r - 333 - t;
                throw new Error("Invalid time")
            }
            var w = 1e3;

            function A(e) {
                return g(Math.floor(e / 36e5), 24)
            }

            function B(e) {
                return g(Math.floor(e / 6e4), 60)
            }

            function N(e) {
                return g(Math.floor(e / w), 60)
            }

            function x(e, r, n) {
                if ("function" != typeof e) return !1;
                if (null == n ? void 0 : n.boundTargetFunction) return r instanceof(null == n ? void 0 : n.boundTargetFunction);
                if ("object" != typeof r) return !1;
                var t = e.prototype;
                if ("object" != typeof t) throw new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
                return Object.prototype.isPrototypeOf.call(t, r)
            }

            function T(e) {
                return g(e, w)
            }

            function I(e) {
                return void 0 === e ? Object.create(null) : c(e)
            }

            function M(e, r, n, t) {
                if (void 0 !== e) {
                    if (e = Number(e), isNaN(e) || e < r || e > n) throw new RangeError("".concat(e, " is outside of range [").concat(r, ", ").concat(n, "]"));
                    return Math.floor(e)
                }
                return t
            }

            function O(e, r, n, t, u) {
                return M(e[r], n, t, u)
            }

            function k(e, r, n, t, u) {
                if ("object" != typeof e) throw new TypeError("Options must be an object");
                var a = e[r];
                if (void 0 !== a) {
                    if ("boolean" !== n && "string" !== n) throw new TypeError("invalid type");
                    if ("boolean" === n && (a = Boolean(a)), "string" === n && (a = i(a)), void 0 !== t && !t.filter((function(e) {
                            return e == a
                        })).length) throw new RangeError("".concat(a, " is not within ").concat(t.join(", ")));
                    return a
                }
                return u
            }

            function j(e) {
                if (void 0 === e) return Object.create(null);
                if ("object" == typeof e) return e;
                throw new TypeError("Options must be an object")
            }
            var L = ["angle-degree", "area-acre", "area-hectare", "concentr-percent", "digital-bit", "digital-byte", "digital-gigabit", "digital-gigabyte", "digital-kilobit", "digital-kilobyte", "digital-megabit", "digital-megabyte", "digital-petabyte", "digital-terabit", "digital-terabyte", "duration-day", "duration-hour", "duration-millisecond", "duration-minute", "duration-month", "duration-second", "duration-week", "duration-year", "length-centimeter", "length-foot", "length-inch", "length-kilometer", "length-meter", "length-mile-scandinavian", "length-mile", "length-millimeter", "length-yard", "mass-gram", "mass-kilogram", "mass-ounce", "mass-pound", "mass-stone", "temperature-celsius", "temperature-fahrenheit", "volume-fluid-ounce", "volume-gallon", "volume-liter", "volume-milliliter"];

            function U(e) {
                return e.slice(e.indexOf("-") + 1)
            }
            var P = L.map(U);

            function R(e) {
                return P.indexOf(e) > -1
            }

            function G(e, r) {
                var n = r.tzData,
                    t = r.uppercaseLinks,
                    u = e.toUpperCase(),
                    i = new Set,
                    a = new Set;
                return Object.keys(n).map((function(e) {
                    return e.toUpperCase()
                })).forEach((function(e) {
                    return i.add(e)
                })), Object.keys(t).forEach((function(e) {
                    a.add(e.toUpperCase()), i.add(t[e].toUpperCase())
                })), i.has(u) || a.has(u)
            }
            var _ = /[^A-Z]/;

            function Y(e) {
                return 3 === (e = e.replace(/([a-z])/g, (function(e, r) {
                    return r.toUpperCase()
                }))).length && !_.test(e)
            }

            function z(e) {
                if (R(e = e.replace(/([A-Z])/g, (function(e, r) {
                        return r.toLowerCase()
                    })))) return !0;
                var r = e.split("-per-");
                if (2 !== r.length) return !1;
                var n = r[0],
                    t = r[1];
                return !(!R(n) || !R(t))
            }
            var $ = n(325687);

            function Z(e, r, n) {
                var t = (0, n.getInternalSlots)(e),
                    u = t.notation,
                    i = t.dataLocaleData,
                    a = t.numberingSystem;
                switch (u) {
                    case "standard":
                        return 0;
                    case "scientific":
                        return r;
                    case "engineering":
                        return 3 * Math.floor(r / 3);
                    default:
                        var o = t.compactDisplay,
                            c = t.style,
                            s = t.currencyDisplay,
                            l = void 0;
                        if ("currency" === c && "name" !== s) {
                            l = (i.numbers.currency[a] || i.numbers.currency[i.numbers.nu[0]]).short
                        } else {
                            var D = i.numbers.decimal[a] || i.numbers.decimal[i.numbers.nu[0]];
                            l = "long" === o ? D.long : D.short
                        }
                        if (!l) return 0;
                        var m = String(Math.pow(10, r)),
                            p = Object.keys(l);
                        if (m < p[0]) return 0;
                        if (m > p[p.length - 1]) return p[p.length - 1].length - 1;
                        var g = p.indexOf(m);
                        if (-1 === g) return 0;
                        var f = p[g];
                        return "0" === l[f].other ? 0 : f.length - l[f].other.match(/0+/)[0].length
                }
            }

            function H(e, r, n) {
                var t, u, i, a, o = n;
                if (0 === e) t = (0, $.rx)("0", o), u = 0, i = 0;
                else {
                    var c = e.toString(),
                        s = c.indexOf("e"),
                        l = c.split("e"),
                        D = l[0],
                        m = l[1],
                        p = D.replace(".", "");
                    if (s >= 0 && p.length <= o) u = +m, t = p + (0, $.rx)("0", o - p.length), i = e;
                    else {
                        var g = (u = (0, $.Tg)(e)) - o + 1,
                            f = Math.round(F(e, g));
                        F(f, o - 1) >= 10 && (u += 1, f = Math.floor(f / 10)), t = f.toString(), i = F(f, o - 1 - u)
                    }
                }
                if (u >= o - 1 ? (t += (0, $.rx)("0", u - o + 1), a = u + 1) : u >= 0 ? (t = "".concat(t.slice(0, u + 1), ".").concat(t.slice(u + 1)), a = u + 1) : (t = "0.".concat((0, $.rx)("0", -u - 1)).concat(t), a = 1), t.indexOf(".") >= 0 && n > r) {
                    for (var d = n - r; d > 0 && "0" === t[t.length - 1];) t = t.slice(0, -1), d--;
                    "." === t[t.length - 1] && (t = t.slice(0, -1))
                }
                return {
                    formattedString: t,
                    roundedNumber: i,
                    integerDigitsCount: a
                };

                function F(e, r) {
                    return r < 0 ? e * Math.pow(10, -r) : e / Math.pow(10, r)
                }
            }

            function W(e, r, n) {
                var t, u, i = n,
                    a = Math.round(e * Math.pow(10, i)),
                    o = a / Math.pow(10, i);
                if (a < 1e21) t = a.toString();
                else {
                    var c = (t = a.toString()).split("e"),
                        s = c[0],
                        l = c[1];
                    t = s.replace(".", ""), t += (0, $.rx)("0", Math.max(+l - t.length + 1, 0))
                }
                if (0 !== i) {
                    var D = t.length;
                    if (D <= i) t = (0, $.rx)("0", i + 1 - D) + t, D = i + 1;
                    var m = t.slice(0, D - i),
                        p = t.slice(D - i);
                    t = "".concat(m, ".").concat(p), u = m.length
                } else u = t.length;
                for (var g = n - r; g > 0 && "0" === t[t.length - 1];) t = t.slice(0, -1), g--;
                return "." === t[t.length - 1] && (t = t.slice(0, -1)), {
                    formattedString: t,
                    roundedNumber: o,
                    integerDigitsCount: u
                }
            }

            function V(e, r) {
                var n, t = r < 0 || s(r, -0);
                switch (t && (r = -r), e.roundingType) {
                    case "significantDigits":
                        n = H(r, e.minimumSignificantDigits, e.maximumSignificantDigits);
                        break;
                    case "fractionDigits":
                        n = W(r, e.minimumFractionDigits, e.maximumFractionDigits);
                        break;
                    default:
                        (n = H(r, 1, 2)).integerDigitsCount > 1 && (n = W(r, 0, 0))
                }
                r = n.roundedNumber;
                var u = n.formattedString,
                    i = n.integerDigitsCount,
                    a = e.minimumIntegerDigits;
                i < a && (u = (0, $.rx)("0", a - i) + u);
                return t && (r = -r), {
                    roundedNumber: r,
                    formattedString: u
                }
            }

            function q(e, r, n) {
                var t = n.getInternalSlots;
                if (0 === r) return [0, 0];
                r < 0 && (r = -r);
                var u = (0, $.Tg)(r),
                    i = Z(e, u, {
                        getInternalSlots: t
                    });
                r = i < 0 ? r * Math.pow(10, -i) : r / Math.pow(10, i);
                var a = V(t(e), r);
                return 0 === a.roundedNumber || (0, $.Tg)(a.roundedNumber) === u - i ? [i, u] : [Z(e, u + 1, {
                    getInternalSlots: t
                }), u + 1]
            }

            function J(e, r) {
                var n = r.currencyDigitsData;
                return D(n, e) ? n[e] : 2
            }
            var K = {
                    adlm: ["𞥐", "𞥑", "𞥒", "𞥓", "𞥔", "𞥕", "𞥖", "𞥗", "𞥘", "𞥙"],
                    ahom: ["𑜰", "𑜱", "𑜲", "𑜳", "𑜴", "𑜵", "𑜶", "𑜷", "𑜸", "𑜹"],
                    arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
                    arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
                    bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
                    beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
                    bhks: ["𑱐", "𑱑", "𑱒", "𑱓", "𑱔", "𑱕", "𑱖", "𑱗", "𑱘", "𑱙"],
                    brah: ["𑁦", "𑁧", "𑁨", "𑁩", "𑁪", "𑁫", "𑁬", "𑁭", "𑁮", "𑁯"],
                    cakm: ["𑄶", "𑄷", "𑄸", "𑄹", "𑄺", "𑄻", "𑄼", "𑄽", "𑄾", "𑄿"],
                    cham: ["꩐", "꩑", "꩒", "꩓", "꩔", "꩕", "꩖", "꩗", "꩘", "꩙"],
                    deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
                    diak: ["𑥐", "𑥑", "𑥒", "𑥓", "𑥔", "𑥕", "𑥖", "𑥗", "𑥘", "𑥙"],
                    fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
                    gong: ["𑶠", "𑶡", "𑶢", "𑶣", "𑶤", "𑶥", "𑶦", "𑶧", "𑶨", "𑶩"],
                    gonm: ["𑵐", "𑵑", "𑵒", "𑵓", "𑵔", "𑵕", "𑵖", "𑵗", "𑵘", "𑵙"],
                    gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
                    guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
                    hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
                    hmng: ["𖭐", "𖭑", "𖭒", "𖭓", "𖭔", "𖭕", "𖭖", "𖭗", "𖭘", "𖭙"],
                    hmnp: ["𞅀", "𞅁", "𞅂", "𞅃", "𞅄", "𞅅", "𞅆", "𞅇", "𞅈", "𞅉"],
                    java: ["꧐", "꧑", "꧒", "꧓", "꧔", "꧕", "꧖", "꧗", "꧘", "꧙"],
                    kali: ["꤀", "꤁", "꤂", "꤃", "꤄", "꤅", "꤆", "꤇", "꤈", "꤉"],
                    khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
                    knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
                    lana: ["᪀", "᪁", "᪂", "᪃", "᪄", "᪅", "᪆", "᪇", "᪈", "᪉"],
                    lanatham: ["᪐", "᪑", "᪒", "᪓", "᪔", "᪕", "᪖", "᪗", "᪘", "᪙"],
                    laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
                    lepc: ["᪐", "᪑", "᪒", "᪓", "᪔", "᪕", "᪖", "᪗", "᪘", "᪙"],
                    limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
                    mathbold: ["𝟎", "𝟏", "𝟐", "𝟑", "𝟒", "𝟓", "𝟔", "𝟕", "𝟖", "𝟗"],
                    mathdbl: ["𝟘", "𝟙", "𝟚", "𝟛", "𝟜", "𝟝", "𝟞", "𝟟", "𝟠", "𝟡"],
                    mathmono: ["𝟶", "𝟷", "𝟸", "𝟹", "𝟺", "𝟻", "𝟼", "𝟽", "𝟾", "𝟿"],
                    mathsanb: ["𝟬", "𝟭", "𝟮", "𝟯", "𝟰", "𝟱", "𝟲", "𝟳", "𝟴", "𝟵"],
                    mathsans: ["𝟢", "𝟣", "𝟤", "𝟥", "𝟦", "𝟧", "𝟨", "𝟩", "𝟪", "𝟫"],
                    mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
                    modi: ["𑙐", "𑙑", "𑙒", "𑙓", "𑙔", "𑙕", "𑙖", "𑙗", "𑙘", "𑙙"],
                    mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
                    mroo: ["𖩠", "𖩡", "𖩢", "𖩣", "𖩤", "𖩥", "𖩦", "𖩧", "𖩨", "𖩩"],
                    mtei: ["꯰", "꯱", "꯲", "꯳", "꯴", "꯵", "꯶", "꯷", "꯸", "꯹"],
                    mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
                    mymrshan: ["႐", "႑", "႒", "႓", "႔", "႕", "႖", "႗", "႘", "႙"],
                    mymrtlng: ["꧰", "꧱", "꧲", "꧳", "꧴", "꧵", "꧶", "꧷", "꧸", "꧹"],
                    newa: ["𑑐", "𑑑", "𑑒", "𑑓", "𑑔", "𑑕", "𑑖", "𑑗", "𑑘", "𑑙"],
                    nkoo: ["߀", "߁", "߂", "߃", "߄", "߅", "߆", "߇", "߈", "߉"],
                    olck: ["᱐", "᱑", "᱒", "᱓", "᱔", "᱕", "᱖", "᱗", "᱘", "᱙"],
                    orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
                    osma: ["𐒠", "𐒡", "𐒢", "𐒣", "𐒤", "𐒥", "𐒦", "𐒧", "𐒨", "𐒩"],
                    rohg: ["𐴰", "𐴱", "𐴲", "𐴳", "𐴴", "𐴵", "𐴶", "𐴷", "𐴸", "𐴹"],
                    saur: ["꣐", "꣑", "꣒", "꣓", "꣔", "꣕", "꣖", "꣗", "꣘", "꣙"],
                    segment: ["🯰", "🯱", "🯲", "🯳", "🯴", "🯵", "🯶", "🯷", "🯸", "🯹"],
                    shrd: ["𑇐", "𑇑", "𑇒", "𑇓", "𑇔", "𑇕", "𑇖", "𑇗", "𑇘", "𑇙"],
                    sind: ["𑋰", "𑋱", "𑋲", "𑋳", "𑋴", "𑋵", "𑋶", "𑋷", "𑋸", "𑋹"],
                    sinh: ["෦", "෧", "෨", "෩", "෪", "෫", "෬", "෭", "෮", "෯"],
                    sora: ["𑃰", "𑃱", "𑃲", "𑃳", "𑃴", "𑃵", "𑃶", "𑃷", "𑃸", "𑃹"],
                    sund: ["᮰", "᮱", "᮲", "᮳", "᮴", "᮵", "᮶", "᮷", "᮸", "᮹"],
                    takr: ["𑛀", "𑛁", "𑛂", "𑛃", "𑛄", "𑛅", "𑛆", "𑛇", "𑛈", "𑛉"],
                    talu: ["᧐", "᧑", "᧒", "᧓", "᧔", "᧕", "᧖", "᧗", "᧘", "᧙"],
                    tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
                    telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
                    thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
                    tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"],
                    tirh: ["𑓐", "𑓑", "𑓒", "𑓓", "𑓔", "𑓕", "𑓖", "𑓗", "𑓘", "𑓙"],
                    vaii: ["ᘠ", "ᘡ", "ᘢ", "ᘣ", "ᘤ", "ᘥ", "ᘦ", "ᘧ", "ᘨ", "ᘩ"],
                    wara: ["𑣠", "𑣡", "𑣢", "𑣣", "𑣤", "𑣥", "𑣦", "𑣧", "𑣨", "𑣩"],
                    wcho: ["𞋰", "𞋱", "𞋲", "𞋳", "𞋴", "𞋵", "𞋶", "𞋷", "𞋸", "𞋹"]
                },
                Q = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/,
                X = new RegExp("^".concat(Q.source)),
                ee = new RegExp("".concat(Q.source, "$")),
                re = /[#0](?:[\.,][#0]+)*/g;

            function ne(e, r, n, t) {
                var u, i, a = e.sign,
                    o = e.exponent,
                    c = e.magnitude,
                    s = t.notation,
                    l = t.style,
                    D = t.numberingSystem,
                    m = r.numbers.nu[0],
                    p = null;
                if ("compact" === s && c && (p = function(e, r, n, t, u, i, a) {
                        var o, c, s = e.roundedNumber,
                            l = e.sign,
                            D = e.magnitude,
                            m = String(Math.pow(10, D)),
                            p = n.numbers.nu[0];
                        if ("currency" === t && "name" !== i) {
                            var g = null === (o = ((f = n.numbers.currency)[a] || f[p]).short) || void 0 === o ? void 0 : o[m];
                            if (!g) return null;
                            c = ie(r, s, g)
                        } else {
                            var f, d = ((f = n.numbers.decimal)[a] || f[p])[u][m];
                            if (!d) return null;
                            c = ie(r, s, d)
                        }
                        if ("0" === c) return null;
                        return c = ue(c, l).replace(/([^\s;\-\+\d¤]+)/g, "{c:$1}").replace(/0+/, "0")
                    }(e, n, r, l, t.compactDisplay, t.currencyDisplay, D)), "currency" === l && "name" !== t.currencyDisplay) {
                    var g = r.currencies[t.currency];
                    if (g) switch (t.currencyDisplay) {
                        case "code":
                            u = t.currency;
                            break;
                        case "symbol":
                            u = g.symbol;
                            break;
                        default:
                            u = g.narrow
                    } else u = t.currency
                }
                if (p) i = p;
                else if ("decimal" === l || "unit" === l || "currency" === l && "name" === t.currencyDisplay) i = ue((r.numbers.decimal[D] || r.numbers.decimal[m]).standard, a);
                else if ("currency" === l) {
                    i = ue((d = r.numbers.currency[D] || r.numbers.currency[m])[t.currencySign], a)
                } else {
                    i = ue(r.numbers.percent[D] || r.numbers.percent[m], a)
                }
                var f = re.exec(i)[0];
                if (i = i.replace(re, "{0}").replace(/'(.)'/g, "$1"), "currency" === l && "name" !== t.currencyDisplay) {
                    var d, F = (d = r.numbers.currency[D] || r.numbers.currency[m]).currencySpacing.afterInsertBetween;
                    F && !ee.test(u) && (i = i.replace("¤{0}", "¤".concat(F, "{0}")));
                    var y = d.currencySpacing.beforeInsertBetween;
                    y && !X.test(u) && (i = i.replace("{0}¤", "{0}".concat(y, "¤")))
                }
                for (var h = i.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g), v = [], b = r.numbers.symbols[D] || r.numbers.symbols[m], E = 0, C = h; E < C.length; E++) {
                    if (Y = C[E]) switch (Y) {
                        case "{0}":
                            v.push.apply(v, te(b, e, s, o, D, !p && t.useGrouping, f));
                            break;
                        case "-":
                            v.push({
                                type: "minusSign",
                                value: b.minusSign
                            });
                            break;
                        case "+":
                            v.push({
                                type: "plusSign",
                                value: b.plusSign
                            });
                            break;
                        case "%":
                            v.push({
                                type: "percentSign",
                                value: b.percentSign
                            });
                            break;
                        case "¤":
                            v.push({
                                type: "currency",
                                value: u
                            });
                            break;
                        default:
                            /^\{c:/.test(Y) ? v.push({
                                type: "compact",
                                value: Y.substring(3, Y.length - 1)
                            }) : v.push({
                                type: "literal",
                                value: Y
                            })
                    }
                }
                switch (l) {
                    case "currency":
                        if ("name" === t.currencyDisplay) {
                            var S = (r.numbers.currency[D] || r.numbers.currency[m]).unitPattern,
                                w = void 0,
                                A = r.currencies[t.currency];
                            w = A ? ie(n, e.roundedNumber * Math.pow(10, o), A.displayName) : t.currency;
                            for (var B = [], N = 0, x = S.split(/(\{[01]\})/g); N < x.length; N++) {
                                switch (Y = x[N]) {
                                    case "{0}":
                                        B.push.apply(B, v);
                                        break;
                                    case "{1}":
                                        B.push({
                                            type: "currency",
                                            value: w
                                        });
                                        break;
                                    default:
                                        Y && B.push({
                                            type: "literal",
                                            value: Y
                                        })
                                }
                            }
                            return B
                        }
                        return v;
                    case "unit":
                        var T = t.unit,
                            I = t.unitDisplay,
                            M = r.units.simple[T];
                        S = void 0;
                        if (M) S = ie(n, e.roundedNumber * Math.pow(10, o), r.units.simple[T][I]);
                        else {
                            var O = T.split("-per-"),
                                k = O[0],
                                j = O[1];
                            M = r.units.simple[k];
                            var L = ie(n, e.roundedNumber * Math.pow(10, o), r.units.simple[k][I]),
                                U = r.units.simple[j].perUnit[I];
                            if (U) S = U.replace("{0}", L);
                            else {
                                var P = r.units.compound.per[I],
                                    R = ie(n, 1, r.units.simple[j][I]);
                                S = S = P.replace("{0}", L).replace("{1}", R.replace("{0}", ""))
                            }
                        }
                        B = [];
                        for (var G = 0, _ = S.split(/(\s*\{0\}\s*)/); G < _.length; G++) {
                            var Y = _[G],
                                z = /^(\s*)\{0\}(\s*)$/.exec(Y);
                            z ? (z[1] && B.push({
                                type: "literal",
                                value: z[1]
                            }), B.push.apply(B, v), z[2] && B.push({
                                type: "literal",
                                value: z[2]
                            })) : Y && B.push({
                                type: "unit",
                                value: Y
                            })
                        }
                        return B;
                    default:
                        return v
                }
            }

            function te(e, r, n, t, u, i, a) {
                var o = [],
                    c = r.formattedString,
                    s = r.roundedNumber;
                if (isNaN(s)) return [{
                    type: "nan",
                    value: c
                }];
                if (!isFinite(s)) return [{
                    type: "infinity",
                    value: c
                }];
                var l = K[u];
                l && (c = c.replace(/\d/g, (function(e) {
                    return l[+e] || e
                })));
                var D, m, p = c.indexOf(".");
                if (p > 0 ? (D = c.slice(0, p), m = c.slice(p + 1)) : D = c, i && ("compact" !== n || s >= 1e4)) {
                    var g = e.group,
                        f = [],
                        d = a.split(".")[0].split(","),
                        F = 3,
                        y = 3;
                    d.length > 1 && (F = d[d.length - 1].length), d.length > 2 && (y = d[d.length - 2].length);
                    var h = D.length - F;
                    if (h > 0) {
                        for (f.push(D.slice(h, h + F)), h -= y; h > 0; h -= y) f.push(D.slice(h, h + y));
                        f.push(D.slice(0, h + y))
                    } else f.push(D);
                    for (; f.length > 0;) {
                        var v = f.pop();
                        o.push({
                            type: "integer",
                            value: v
                        }), f.length > 0 && o.push({
                            type: "group",
                            value: g
                        })
                    }
                } else o.push({
                    type: "integer",
                    value: D
                });
                if (void 0 !== m && o.push({
                        type: "decimal",
                        value: e.decimal
                    }, {
                        type: "fraction",
                        value: m
                    }), ("scientific" === n || "engineering" === n) && isFinite(s)) {
                    o.push({
                        type: "exponentSeparator",
                        value: e.exponential
                    }), t < 0 && (o.push({
                        type: "exponentMinusSign",
                        value: e.minusSign
                    }), t = -t);
                    var b = W(t, 0, 0);
                    o.push({
                        type: "exponentInteger",
                        value: b.formattedString
                    })
                }
                return o
            }

            function ue(e, r) {
                e.indexOf(";") < 0 && (e = "".concat(e, ";-").concat(e));
                var n = e.split(";"),
                    t = n[0],
                    u = n[1];
                switch (r) {
                    case 0:
                        return t;
                    case -1:
                        return u;
                    default:
                        return u.indexOf("-") >= 0 ? u.replace(/-/g, "+") : "+".concat(t)
                }
            }

            function ie(e, r, n) {
                return n[e.select(r)] || n.other
            }

            function ae(e, r, n) {
                var t, u, i, a = n.getInternalSlots,
                    o = a(e),
                    c = o.pl,
                    l = o.dataLocaleData,
                    D = o.numberingSystem,
                    m = l.numbers.symbols[D] || l.numbers.symbols[l.numbers.nu[0]],
                    p = 0,
                    g = 0;
                if (isNaN(r)) u = m.nan;
                else if (isFinite(r)) {
                    "percent" === o.style && (r *= 100), g = (t = q(e, r, {
                        getInternalSlots: a
                    }))[0], p = t[1];
                    var f = V(o, r = g < 0 ? r * Math.pow(10, -g) : r / Math.pow(10, g));
                    u = f.formattedString, r = f.roundedNumber
                } else u = m.infinity;
                switch (o.signDisplay) {
                    case "never":
                        i = 0;
                        break;
                    case "auto":
                        i = s(r, 0) || r > 0 || isNaN(r) ? 0 : -1;
                        break;
                    case "always":
                        i = s(r, 0) || r > 0 || isNaN(r) ? 1 : -1;
                        break;
                    default:
                        i = 0 === r || isNaN(r) ? 0 : r > 0 ? 1 : -1
                }
                return ne({
                    roundedNumber: r,
                    formattedString: u,
                    exponent: g,
                    magnitude: p,
                    sign: i
                }, o.dataLocaleData, c, o)
            }

            function oe(e, r, n) {
                for (var t = ae(e, r, n), u = l(0), i = 0, a = t; i < a.length; i++) {
                    var o = a[i];
                    u.push({
                        type: o.type,
                        value: o.value
                    })
                }
                return u
            }
            var ce = n(276103);

            function se(e, r, n) {
                void 0 === r && (r = Object.create(null));
                var t = (0, n.getInternalSlots)(e),
                    u = k(r, "style", "string", ["decimal", "percent", "currency", "unit"], "decimal");
                t.style = u;
                var i = k(r, "currency", "string", void 0, void 0);
                if (void 0 !== i && !Y(i)) throw RangeError("Malformed currency code");
                if ("currency" === u && void 0 === i) throw TypeError("currency cannot be undefined");
                var a = k(r, "currencyDisplay", "string", ["code", "symbol", "narrowSymbol", "name"], "symbol"),
                    o = k(r, "currencySign", "string", ["standard", "accounting"], "standard"),
                    c = k(r, "unit", "string", void 0, void 0);
                if (void 0 !== c && !z(c)) throw RangeError("Invalid unit argument for Intl.NumberFormat()");
                if ("unit" === u && void 0 === c) throw TypeError("unit cannot be undefined");
                var s = k(r, "unitDisplay", "string", ["short", "narrow", "long"], "short");
                "currency" === u && (t.currency = i.toUpperCase(), t.currencyDisplay = a, t.currencySign = o), "unit" === u && (t.unit = c, t.unitDisplay = s)
            }

            function le(e, r, n, t, u) {
                var i = O(r, "minimumIntegerDigits", 1, 21, 1),
                    a = r.minimumFractionDigits,
                    o = r.maximumFractionDigits,
                    c = r.minimumSignificantDigits,
                    s = r.maximumSignificantDigits;
                if (e.minimumIntegerDigits = i, void 0 !== c || void 0 !== s) e.roundingType = "significantDigits", c = M(c, 1, 21, 1), s = M(s, c, 21, 21), e.minimumSignificantDigits = c, e.maximumSignificantDigits = s;
                else if (void 0 !== a || void 0 !== o) {
                    e.roundingType = "fractionDigits", a = M(a, 0, 20, n), o = M(o, a, 20, Math.max(a, t)), e.minimumFractionDigits = a, e.maximumFractionDigits = o
                } else "compact" === u ? e.roundingType = "compactRounding" : (e.roundingType = "fractionDigits", e.minimumFractionDigits = n, e.maximumFractionDigits = t)
            }

            function De(e, r, n, u) {
                var i = u.getInternalSlots,
                    a = u.localeData,
                    o = u.availableLocales,
                    c = u.numberingSystemNames,
                    s = u.getDefaultLocale,
                    l = u.currencyDigitsData,
                    D = t(r),
                    m = I(n),
                    p = Object.create(null),
                    g = k(m, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
                p.localeMatcher = g;
                var f = k(m, "numberingSystem", "string", void 0, void 0);
                if (void 0 !== f && c.indexOf(f) < 0) throw RangeError("Invalid numberingSystems: ".concat(f));
                p.nu = f;
                var d = (0, ce.f)(o, D, p, ["nu"], a, s),
                    F = a[d.dataLocale];
                (0, $.kG)(!!F, "Missing locale data for ".concat(d.dataLocale));
                var y = i(e);
                y.locale = d.locale, y.dataLocale = d.dataLocale, y.numberingSystem = d.nu, y.dataLocaleData = F, se(e, m, {
                    getInternalSlots: i
                });
                var h, v, b = y.style;
                if ("currency" === b) {
                    var E = J(y.currency, {
                        currencyDigitsData: l
                    });
                    h = E, v = E
                } else h = 0, v = "percent" === b ? 0 : 3;
                var C = k(m, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
                y.notation = C, le(y, m, h, v, C);
                var S = k(m, "compactDisplay", "string", ["short", "long"], "short");
                "compact" === C && (y.compactDisplay = S);
                var w = k(m, "useGrouping", "boolean", void 0, !0);
                y.useGrouping = w;
                var A = k(m, "signDisplay", "string", ["auto", "never", "always", "exceptZero"], "auto");
                return y.signDisplay = A, e
            }

            function me(e) {
                for (var r = [], n = e.indexOf("{"), t = 0, u = 0, i = e.length; n < e.length && n > -1;) t = e.indexOf("}", n), (0, $.kG)(t > n, "Invalid pattern ".concat(e)), n > u && r.push({
                    type: "literal",
                    value: e.substring(u, n)
                }), r.push({
                    type: e.substring(n + 1, t),
                    value: void 0
                }), u = t + 1, n = e.indexOf("{", u);
                return u < i && r.push({
                    type: "literal",
                    value: e.substring(u, i)
                }), r
            }
            var pe = n(924358);

            function ge(e, r, n) {
                return void 0 !== n && k(n = c(n), "localeMatcher", "string", ["lookup", "best fit"], "best fit"), (0, pe.T)(e, r)
            }
            var fe, de = n(63559);
            ! function(e) {
                function r() {
                    var r = null !== e && e.apply(this, arguments) || this;
                    return r.type = "MISSING_LOCALE_DATA", r
                }(0, de.__extends)(r, e)
            }(Error);

            function Fe(e) {
                return "MISSING_LOCALE_DATA" === e.type
            }! function(e) {
                e.startRange = "startRange", e.shared = "shared", e.endRange = "endRange"
            }(fe || (fe = {}))
        }
    }
]);