/*! For license information please see polyfill-intl-displaynames-3809792830a387a18414.js.LICENSE.txt */
"use strict";
(globalThis.webpackChunktinderweb = globalThis.webpackChunktinderweb || []).push([
    [75581], {
        151164: (e, a, t) => {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.CanonicalCodeForDisplayNames = void 0;
            var l = t(799275),
                o = /^([a-z]{2}|[0-9]{3})$/i,
                r = /^[a-z]{4}$/i;
            a.CanonicalCodeForDisplayNames = function(e, a) {
                if ("language" === e) return (0, l.CanonicalizeLocaleList)([a])[0];
                if ("region" === e) {
                    if (t = a, !o.test(t)) throw RangeError("invalid region");
                    return a.toUpperCase()
                }
                var t, i;
                if ("script" === e) {
                    if (i = a, !r.test(i)) throw RangeError("invalid script");
                    return "".concat(a[0].toUpperCase()).concat(a.slice(1).toLowerCase())
                }
                if ((0, l.invariant)("currency" === e, "invalid type"), !(0, l.IsWellFormedCurrencyCode)(a)) throw RangeError("invalid currency");
                return a.toUpperCase()
            }
        },
        404999: (e, a, t) => {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.DisplayNames = void 0;
            var l = t(63559),
                o = t(799275),
                r = t(151164),
                i = t(392133),
                n = function() {
                    function e(a, t) {
                        if (void 0 === this.constructor) throw TypeError("Constructor Intl.DisplayNames requires 'new'");
                        var l = (0, o.CanonicalizeLocaleList)(a);
                        t = (0, o.GetOptionsObject)(t);
                        var r = Object.create(null),
                            n = e.localeData,
                            c = (0, o.GetOption)(t, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
                        r.localeMatcher = c;
                        var u = (0, i.ResolveLocale)(e.availableLocales, l, r, [], e.localeData, e.getDefaultLocale),
                            p = (0, o.GetOption)(t, "style", "string", ["narrow", "short", "long"], "long");
                        s(this, "style", p);
                        var d = (0, o.GetOption)(t, "type", "string", ["language", "currency", "region", "script"], void 0);
                        if (void 0 === d) throw TypeError('Intl.DisplayNames constructor requires "type" option');
                        s(this, "type", d), s(this, "fallback", (0, o.GetOption)(t, "fallback", "string", ["code", "none"], "code")), s(this, "locale", u.locale);
                        var f = u.dataLocale,
                            y = n[f];
                        (0, o.invariant)(!!y, "Missing locale data for ".concat(f)), s(this, "localeData", y), (0, o.invariant)(void 0 !== y, "locale data for ".concat(u.locale, " does not exist."));
                        var v = y.types;
                        (0, o.invariant)("object" == typeof v && null != v, "invalid types data");
                        var g = v[d];
                        (0, o.invariant)("object" == typeof g && null != g, "invalid typeFields data");
                        var b = g[p];
                        (0, o.invariant)("object" == typeof b && null != b, "invalid styleFields data"), s(this, "fields", b)
                    }
                    return e.supportedLocalesOf = function(a, t) {
                        return (0, o.SupportedLocales)(e.availableLocales, (0, o.CanonicalizeLocaleList)(a), t)
                    }, e.__addLocaleData = function() {
                        for (var a = [], t = 0; t < arguments.length; t++) a[t] = arguments[t];
                        for (var l = 0, o = a; l < o.length; l++) {
                            var r = o[l],
                                i = r.data,
                                n = r.locale,
                                c = new Intl.Locale(n).minimize().toString();
                            e.localeData[n] = e.localeData[c] = i, e.availableLocales.add(c), e.availableLocales.add(n), e.__defaultLocale || (e.__defaultLocale = c)
                        }
                    }, e.prototype.of = function(e) {
                        u(this, "of");
                        var a, t, l = (a = this, t = "type", (0, o.getInternalSlot)(c, a, t)),
                            i = (0, o.ToString)(e);
                        if (! function(e, a) {
                                switch (e) {
                                    case "language":
                                        return /^[a-z]{2,3}(-[a-z]{4})?(-([a-z]{2}|\d{3}))?(-([a-z\d]{5,8}|\d[a-z\d]{3}))*$/i.test(a);
                                    case "region":
                                        return /^([a-z]{2}|\d{3})$/i.test(a);
                                    case "script":
                                        return /^[a-z]{4}$/i.test(a);
                                    case "currency":
                                        return (0, o.IsWellFormedCurrencyCode)(a)
                                }
                            }(l, i)) throw RangeError("invalid code for Intl.DisplayNames.prototype.of");
                        var n, s = (0, o.getMultiInternalSlots)(c, this, "localeData", "style", "fallback"),
                            p = s.localeData,
                            d = s.style,
                            f = s.fallback,
                            y = (0, r.CanonicalCodeForDisplayNames)(l, i);
                        if ("language" === l) {
                            var v = /-([a-z]{2}|\d{3})\b/i.exec(y);
                            v && (y = y.substring(0, v.index) + y.substring(v.index + v[0].length), n = v[1])
                        }
                        var g = p.types[l],
                            b = g[d][y] || g.long[y];
                        if (void 0 !== b) {
                            if (!n) return b;
                            var h = p.types.region,
                                L = h[d][n] || h.long[n];
                            if (L || "code" === f) return p.patterns.locale.replace("{0}", b).replace("{1}", L || n)
                        }
                        if ("code" === f) return i
                    }, e.prototype.resolvedOptions = function() {
                        return u(this, "resolvedOptions"), (0, l.__assign)({}, (0, o.getMultiInternalSlots)(c, this, "locale", "style", "type", "fallback"))
                    }, e.getDefaultLocale = function() {
                        return e.__defaultLocale
                    }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.polyfilled = !0, e
                }();
            a.DisplayNames = n;
            try {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n.prototype, Symbol.toStringTag, {
                    value: "Intl.DisplayNames",
                    configurable: !0,
                    enumerable: !1,
                    writable: !1
                }), Object.defineProperty(n, "length", {
                    value: 2,
                    writable: !1,
                    enumerable: !1,
                    configurable: !0
                })
            } catch (e) {}
            var c = new WeakMap;

            function s(e, a, t) {
                (0, o.setInternalSlot)(c, e, a, t)
            }

            function u(e, a) {
                if (!(e instanceof n)) throw TypeError("Method Intl.DisplayNames.prototype.".concat(a, " called on incompatible receiver"))
            }
        },
        449290: (e, a, t) => {
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var l = t(404999);
            (0, t(715550).shouldPolyfill)() && Object.defineProperty(Intl, "DisplayNames", {
                value: l.DisplayNames,
                enumerable: !1,
                writable: !0,
                configurable: !0
            })
        }
    }
]);