"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [58731, 802], {
        173777: (e, t, i) => {
            i.d(t, {
                SEPARATOR_PREFIX: () => n,
                isSeparatorItem: () => o
            });
            const n = "###";

            function o(e) {
                return e.startsWith(n)
            }
        },
        223124: (e, t, i) => {
            i.d(t, {
                makeCancelable: () => o,
                isCancelled: () => s
            });
            class n {}

            function o(e) {
                let t = !1;
                return {
                    promise: new Promise(((i, o) => {
                        e.then((e => t ? o(new n) : i(e))), e.catch((e => o(t ? new n : e)))
                    })),
                    cancel() {
                        t = !0
                    }
                }
            }

            function s(e) {
                return e instanceof n
            }
        },
        229534: (e, t, i) => {
            async function n(e) {
                return (await Promise.all([i.e(22850), i.e(15107), i.e(55099), i.e(84845), i.e(50407), i.e(71452), i.e(55097), i.e(25977), i.e(25116), i.e(37757)]).then(i.bind(i, 173403))).createDialog(e)
            }

            function o(e) {
                n(e).then((e => e.open()))
            }
            i.d(t, {
                createErrorDialog: () => n,
                showErrorDialog: () => o
            })
        },
        484443: (e, t, i) => {
            function n(e, t) {
                let i = 0;
                for (const {
                        min: n,
                        max: o
                    } of t) {
                    if (e < n || o < n) continue;
                    const t = Math.min(e, o);
                    if (i = Math.max(i, t), e === i) break
                }
                return i
            }

            function o(e) {
                const t = [];
                if (void 0 === e) return [];
                Array.isArray(e) || (e = [e]);
                for (const i of e) {
                    let e, n;
                    isFinite(i) ? e = n = Number(i) : (e = +i.min, n = +i.max), (e < 0 || isNaN(e)) && (e = 0), isNaN(n) && (n = 1 / 0), e <= n && n > 0 && t.push({
                        min: e,
                        max: n
                    })
                }
                return t.sort(((e, t) => e.min - t.min || e.max - t.max)), t
            }

            function s(e, t) {
                if (e.length !== t.length) return !1;
                for (let i = e.length; i--;) {
                    if (e[i].min !== t[i].min) return !1;
                    if (e[i].max !== t[i].max) return !1
                }
                return !0
            }
            i.d(t, {
                determineSize: () => n,
                processNegotiation: () => o,
                negotiationsAreEqual: () => s
            })
        },
        650969: (e, t, i) => {
            async function n() {
                return (await i.e(47158).then(i.bind(i, 584570))).initSiteGlobalSkipNavigation()
            }
            async function o() {
                return (await i.e(29302).then(i.bind(i, 228062))).initPlatformSkipNavigation()
            }
            i.d(t, {
                initSiteGlobalSkipNavigation: () => n,
                initPlatformSkipNavigation: () => o
            })
        },
        722329: (e, t, i) => {
            async function n(e) {
                Promise.all([i.e(99740), i.e(18867), i.e(3148), i.e(6745), i.e(93090)]).then(i.bind(i, 906745)).then((e => new e.ScreenerAlertsDispatcher));
                const [{
                    widgetBarWidgets: t
                }, {
                    configure: n
                }] = await Promise.all([Promise.all([i.e(3086), i.e(72066), i.e(22850), i.e(15107), i.e(89806), i.e(12620), i.e(13608), i.e(32547), i.e(37619), i.e(40968), i.e(33216), i.e(89587), i.e(59379), i.e(25773), i.e(10833), i.e(77846), i.e(30170), i.e(36325), i.e(90375), i.e(68945), i.e(46256), i.e(98449), i.e(93921), i.e(91622), i.e(20651), i.e(5043), i.e(61909), i.e(91472), i.e(26612), i.e(77297), i.e(60550), i.e(38639), i.e(54876)]).then(i.bind(i, 338527)), Promise.all([i.e(3086), i.e(72066), i.e(22850), i.e(15107), i.e(89806), i.e(12620), i.e(13608), i.e(32547), i.e(37619), i.e(40968), i.e(33216), i.e(89587), i.e(59379), i.e(25773), i.e(10833), i.e(77846), i.e(30170), i.e(36325), i.e(90375), i.e(68945), i.e(46256), i.e(98449), i.e(93921), i.e(91622), i.e(20651), i.e(5043), i.e(61909), i.e(91472), i.e(26612), i.e(77297), i.e(60550), i.e(38639), i.e(54876)]).then(i.bind(i, 918809))]);
                return t.Watchlist = n(e), t
            }
            i.d(t, {
                configuration: () => n
            })
        },
        474474: (e, t, i) => {
            function n() {
                return {
                    version: 2,
                    width: 300,
                    pages: []
                }
            }
            i.d(t, {
                getDefaultState: () => n
            })
        },
        344435: (e, t, i) => {
            i.d(t, {
                combineWithFilteredUpdate: () => r,
                combine: () => a
            });
            var n = i(262325),
                o = i.n(n);

            function s(e, t, ...i) {
                const n = (...t) => e(...t.map((e => e.value()))),
                    s = new(o())(n(...i)),
                    r = () => {
                        t(...i.map((e => e.value()))) && s.setValue(n(...i))
                    },
                    a = i.map((e => e.spawn()));
                for (const e of a) e.subscribe(r);
                return s.readonly().spawn((() => a.forEach((e => e.destroy()))))
            }

            function r(e, t, ...i) {
                return s(e, t, ...i)
            }

            function a(e, ...t) {
                return s(e, (() => !0), ...t)
            }
        },
        440977: (e, t, i) => {
            var n;
            i.d(t, {
                    TradingPage: () => n,
                    maxPanelWidth: () => o,
                    panelWidth: () => s,
                    panelHeight: () => r
                }),
                function(e) {
                    e.DomPanel = "domPanel", e.OrderPanel = "orderPanel"
                }(n || (n = {}));
            const o = 400,
                s = 315,
                r = 451
        },
        110933: (e, t, i) => {
            i.r(t), i.d(t, {
                TRADING_SERVICE: () => o,
                tradingService: () => s,
                waitTradingService: () => r
            });
            var n = i(564894);
            const o = {
                id: "TradingService"
            };

            function s() {
                return (0, n.hasService)(o) ? (0, n.service)(o) : null
            }

            function r() {
                return (0, n.waitServiceRegistered)(o)
            }
        },
        820187: (e, t, i) => {
            i.d(t, {
                hourMinuteSecondFormat: () => s,
                hourMinuteSecondMilisecFormat: () => r,
                hourMinuteFormat: () => a,
                twelveHourMinuteSecondFormat: () => l,
                twelveHourMinuteFormat: () => c,
                TimeFormatter: () => u
            });
            var n = i(381269),
                o = i(689765);
            const s = "%h:%m:%s",
                r = "%h:%m:%s.%ss",
                a = "%h:%m",
                l = "%h:%m:%s %ampm",
                c = "%h:%m %ampm";
            class u {
                constructor(e) {
                    this._isTwelveHoursFormat = !1, this._formatStr = e || s, this._isTwelveHoursFormat = this._formatStr.includes("%ampm")
                }
                format(e) {
                    return n.customFormatters.timeFormatter ? n.customFormatters.timeFormatter.format(e) : this._formatTime(e, !1)
                }
                formatLocal(e) {
                    return n.customFormatters.timeFormatter ? n.customFormatters.timeFormatter.formatLocal ? n.customFormatters.timeFormatter.formatLocal(e) : n.customFormatters.timeFormatter.format(e) : this._formatTime(e, !0)
                }
                _formatTime(e, t) {
                    let i = t ? e.getHours() : e.getUTCHours();
                    const n = t ? e.getMinutes() : e.getUTCMinutes(),
                        s = t ? e.getSeconds() : e.getUTCSeconds(),
                        r = t ? e.getMilliseconds() : e.getUTCMilliseconds();
                    let a = "";
                    return this._isTwelveHoursFormat && (a = i >= 12 ? "PM" : "AM", i %= 12, i = i || 12), this._formatStr.replace("%h", (0, o.numberToStringWithLeadingZero)(i, 2)).replace("%m", (0, o.numberToStringWithLeadingZero)(n, 2)).replace("%s", (0, o.numberToStringWithLeadingZero)(s, 2)).replace("%ss", (0, o.numberToStringWithLeadingZero)(r, 3)).replace("%ampm", a)
                }
            }
        },
        3008: (e, t, i) => {
            function n(e, t, i) {
                return e * (1 - i) + t * i
            }
            i.d(t, {
                lerp: () => n,
                doAnimate: () => r
            });
            const o = {
                from: 0,
                duration: 250,
                easing: i(876242).easingFunc.easeOutCubic
            };
            class s {
                constructor(e) {
                    this._doing = !0, this._completed = !1, this._options = { ...o,
                        ...e
                    };
                    const t = performance.now();
                    window.requestAnimationFrame((e => {
                        this._animation(t, this._options.from, e)
                    }))
                }
                stop() {
                    this._doing = !1
                }
                completed() {
                    return this._completed
                }
                _animation(e, t, i) {
                    if (!this._doing) return void this._finishAnimation();
                    const o = (i = !i || i < 1e12 ? performance.now() : i) - e,
                        s = o >= this._options.duration || t === this._options.to,
                        r = n(this._options.from, this._options.to, this._options.easing(o / this._options.duration)),
                        a = s ? this._options.to : r,
                        l = a - t;
                    this._options.onStep(l, a), s ? this._finishAnimation() : window.requestAnimationFrame((t => {
                        this._animation(e, a, t)
                    }))
                }
                _finishAnimation() {
                    this._options.onComplete && this._options.onComplete(), this._completed = !0
                }
            }

            function r(e) {
                return new s(e)
            }
        },
        145619: (e, t, i) => {
            i.r(t), i.d(t, {
                firstLoginDataUrl: () => o,
                accumulateErrors: () => s,
                fetchPost: () => r,
                firstLoginData: () => a,
                resendLink: () => l,
                signinUrl: () => c,
                signin: () => d,
                signupUrl: () => m,
                signup: () => g,
                ApiError: () => h,
                AggregateError: () => _,
                recoverPasswordUrl: () => p,
                recoverPassword: () => w,
                resetPassword: () => y
            });
            var n = i(86674);
            const o = "/accounts/first_login_data/";

            function s(e, t) {
                return Object.entries(e).map((e => new h(e[1].join("\n"), t, e[0])))
            }

            function r(e, t) {
                return (0, n.fetch)(e, {
                    method: "POST",
                    credentials: "include",
                    mode: "same-origin",
                    body: t
                })
            }

            function a(e) {
                return r(o, e).then((e => e.ok ? e.json() : e.json().then((t => {
                    throw new _(s(t.errors, e.status))
                }))))
            }

            function l() {
                return r("/api/v1/users/anon/change-email/resend/").then((e => e.ok ? e.json() : e.json().then((e => {
                    throw Error(e.error)
                }))))
            }
            const c = "/accounts/signin/";

            function u(e) {
                return e.json().then((t => {
                    if ("error" in t && "" !== t.error || "code" in t || !e.ok) throw new h(t.error || t.detail, e.status, t.code, t.two_factor_types);
                    return t
                }))
            }

            function d(e) {
                return r(c, e).then(u)
            }
            const m = "/accounts/signup/";

            function g(e) {
                return r(m, e).then((e => e.json().then((t => {
                    if ("errors" in t && "" !== t.errors) throw new _(s(t.errors, e.status))
                }))))
            }
            class h extends Error {
                constructor(e, t, i, n) {
                    super(e), this.type = i, this.status = t, this.secondFactorTypes = n
                }
            }
            class _ extends Error {
                constructor(e) {
                    super(e.map((e => e.message)).join("\n")), this.errors = [], this.errors = e
                }
            }
            const p = "/api/v1/recover_password/search/";

            function w(e) {
                return r(p, e).then(u)
            }

            function y(e) {
                return r("/accounts/reset_password/", e).then((e => 400 === e.status ? e.json().then((t => {
                    if ("errors" in t) throw new _(s(t.errors, e.status));
                    throw new h(t.detail, e.status, t.code)
                })) : u(e)))
            }
        },
        179380: (e, t, i) => {
            function n(e) {
                const t = new URL(e, document.baseURI);
                return l(t) && a(t) && r(t)
            }

            function o(e) {
                const t = new URL(e, document.baseURI);
                return a(t) && r(t)
            }

            function s(e) {
                return !e.split(/(\s+)/).filter((e => e.trim().length > 0)).some((e => {
                    try {
                        const t = new URL(e);
                        return !(!t || !t.hostname.length) && !o(e)
                    } catch (e) {
                        return !1
                    }
                }))
            }
            i.d(t, {
                isInternalUrl: () => n,
                isSafeUrl: () => o,
                validateUrlsInText: () => s,
                isInternalHost: () => c
            });
            const r = e => !e.username,
                a = e => "http:" === e.protocol || "https:" === e.protocol,
                l = e => e.hostname === location.hostname || !/^\d+\.\d+\.\d+\.\d+$/.test(e.hostname) && c(e.hostname);

            function c(e, t = window.location.hostname) {
                const i = "." === t.slice(-1) ? 3 : 2,
                    n = t.toLowerCase().split(".").slice(-i),
                    o = e.toLowerCase().split(".").slice(-n.length);
                return n.join(".") === o.join(".")
            }
        },
        385043: (e, t, i) => {
            i.d(t, {
                initAllAnalytics: () => f
            });
            var n = i(677748),
                o = i(588948),
                s = i(719718);
            (0, o.updateInitData)();
            var r;

            function a(e) {
                (0, s.marketingAnalyticsEnabled)() && (0, s.createImage)((e => `https://www.facebook.com/tr?id=${(0,o.getInitData)().fbTagId}&ev=${e}&noscript=1`)(e))
            }! function(e) {
                e.PageView = "PageView", e.CompleteRegistration = "CompleteRegistration", e.StartTrial = "StartTrial", e.Subscribe = "Subscribe"
            }(r || (r = {}));
            var l = i(665343),
                c = i(975420),
                u = i(314802),
                d = i(638456),
                m = i(691805);

            function g() {
                try {
                    return null === top || window !== window.top || document !== top.document || self.location !== top.location
                } catch (e) {
                    return !0
                }
            }
            const h = (0, d.onMainPage)() || window.location.pathname.startsWith("/symbols/");
            let _ = !1;

            function p() {
                if (function() {
                        if (_ || !(0,
                                s.yandexAnalyticsEnabled)() && !g() || (0, u.isOnMobileAppPage)("any") || d.CheckMobile.any() || !h) return;
                        (0, o.updateInitData)(), (0, o.getInitData)().yaTagId && ((0, m.appendScript)("https://mc.yandex.ru/metrika/tag.js"), window.ym = function() {
                            window.ym.a.push(arguments)
                        }, window.ym.a = window.ym.a || [], window.ym.l = (new Date).getTime(), _ = !0)
                    }(), !_) return;
                const e = (0, o.getInitData)().yaTagId;
                window.ym(e, "init", {
                    clickmap: !0,
                    trackLinks: !0,
                    accurateTrackBounce: !0,
                    webvisor: !0,
                    trackHash: !0
                })
            }
            var w = i(776734),
                y = i(261030);
            async function f(e) {
                if (a(r.PageView), (0, l.trackTwitterEvent)(l.TwitterEvent.SiteVisit), await Promise.all([n.whenDocumentReadyPromise, e]), (0, c.initGA)(), p(), !g()) {
                    const e = await (0, w.getTracker)();
                    e && (await y.cookieSettingsReady.promise, e.trackPageView())
                }
            }
        },
        975420: (e, t, i) => {
            i.d(t, {
                initGA: () => c,
                trackTiming: () => u
            });
            var n = i(251954),
                o = i(261030),
                s = i(588948),
                r = i(638456),
                a = i(691805);
            let l = !1;

            function c() {
                if (l) return;
                (0, s.updateInitData)();
                const e = (0, s.getInitData)();
                if (!e.gaId) return;
                l = !0, (0, a.appendScript)(`https://www.googletagmanager.com/gtag/js?id=${(0,s.getInitData)().gaId}`), window.dataLayer = window.dataLayer || [], window.gtag = function() {
                    window.dataLayer.push(arguments)
                }, window.gtag("js", new Date);
                const t = {
                    optimize_id: e.optimizeId,
                    anonymize_ip: !0
                };
                window.TVD && (t.app_name = "TVD", t.app_version = (0, r.desktopAppVersion)()), e.gaVars && window.gtag("set", e.gaVars), window.gtag("consent", "default", {
                    analytics_storage: (0, o.getCookieSetting)(o.CookieSettings.Analytics) ? "granted" : "denied"
                }), window.gtag("config", e.gaId, t), n.subscribe(o.cookieSettingsChangeEvent, ((e, t) => {
                    e === o.CookieSettings.Analytics && window.gtag("consent", "update", {
                        analytics_storage: t ? "granted" : "denied"
                    })
                }), null)
            }

            function u(e, t, i, n) {
                c(), window.gtag("event", "timing_complete", {
                    name: t,
                    value: i,
                    event_category: e,
                    event_label: n
                })
            }
        },
        752604: (e, t, i) => {
            i.d(t, {
                isCountryCode: () => a,
                toCountryCode: () => l,
                getIsoCountryCodeFromLocale: () => c
            });
            var n = i(911905),
                o = i(804510);
            const s = (0, n.getLogger)("Lib.CountryCode"),
                r = /^[A-Z]{2}$/;

            function a(e) {
                return r.test(e)
            }

            function l(e) {
                if (a(e)) return e;
                throw new Error("Invalid country code")
            }

            function c(e) {
                var t, i;
                try {
                    return l(null === (i = null === (t = o[e]) || void 0 === t ? void 0 : t.geoip_code) || void 0 === i ? void 0 : i.toUpperCase())
                } catch (t) {
                    return s.logError(`Get ISO country code from locale "${e}" failed: ${t.message}`), l(o.en.geoip_code.toUpperCase())
                }
            }
        },
        207678: (e, t, i) => {
            i.d(t, {
                breakpoints: () => n,
                mobileFirstBreakpoints: () => o,
                mobileFirstLegacyBreakpoints: () => s
            });
            const n = {
                    desktop: 1 / 0,
                    desktopHd: 1919,
                    phone: 767,
                    "phone-vertical": 479,
                    tablet: 1019
                },
                o = {
                    base: 0,
                    "media-mf-phone-vertical": 320,
                    "media-mf-phone-landscape": 568,
                    "media-mf-tablet-vertical": 768,
                    "media-mf-tablet-landscape": 1024,
                    "media-mf-laptop": 1280,
                    "media-mf-desktop-medium": 1440,
                    "media-mf-desktop-large": 1920,
                    "media-mf-desktop-extra-large": 2560
                },
                s = {
                    "media-mf-legacy-phone-vertical": 330,
                    "media-mf-legacy-phone": 480,
                    "media-mf-legacy-notebook": 1020,
                    "media-mf-legacy-desktop-medium": 1480,
                    "media-mf-legacy-desktop": 1531
                }
        },
        76107: (e, t, i) => {
            i.d(t, {
                getScrollbarWidth: () => n,
                matchMediaMinMax: () => o,
                getContentWidth: () => s,
                setStyle: () => r,
                getCSSProperty: () => a,
                getCSSPropertyNumericValue: () => l
            });
            const n = (() => {
                let e;
                return () => {
                    var t;
                    if (void 0 === e) {
                        const i = document.createElement("div"),
                            n = i.style;
                        n.visibility = "hidden", n.width = "100px", n.msOverflowStyle = "scrollbar", document.body.appendChild(i);
                        const o = i.offsetWidth;
                        i.style.overflow = "scroll";
                        const s = document.createElement("div");
                        s.style.width = "100%", i.appendChild(s);
                        const r = s.offsetWidth;
                        null === (t = i.parentNode) || void 0 === t || t.removeChild(i), e = o - r
                    }
                    return e
                }
            })();

            function o(e, t) {
                return t === 1 / 0 ? window.matchMedia(`(min-width: ${e}px)`) : window.matchMedia(`(min-width: ${e}px) and (max-width: ${t}px)`)
            }

            function s(e) {
                return l(e, "width") - l(e, "padding-left") - l(e, "padding-right")
            }

            function r(e, t, i) {
                null !== e && e.style.setProperty(t, i)
            }

            function a(e, t) {
                return getComputedStyle(e, null).getPropertyValue(t)
            }

            function l(e, t) {
                return parseInt(a(e, t))
            }
        },
        850775: (e, t, i) => {
            i.d(t, {
                mediaState: () => c
            });
            var n = i(685459),
                o = i.n(n),
                s = i(677748),
                r = i(207678),
                a = i(76107);
            class l extends(o()) {
                constructor() {
                    super(), this.width = 0, this.height = 0, this.device = null, this.breakpoints = r.breakpoints, this._checkDevice(), window.addEventListener("resize", this._checkDevice), Object.entries(r.breakpoints).sort((([e, t], [i, n]) => t - n)).forEach((([e, t], i, n) => {
                        let o;
                        if (0 !== i) {
                            const [, e] = n[i - 1];
                            o = e + 1
                        } else o = 0;
                        const s = (0, a.matchMediaMinMax)(o, t);
                        s.matches && this._setNewDevice(e), s.addListener((t => {
                            t.matches && (this._checkDevice(), this._setNewDevice(e))
                        }))
                    })), (0, s.whenDocumentReady)(this._checkDevice.bind(this)), this.isPhoneSizeDevice.bind(this)
                }
                isPhoneSizeDevice() {
                    return "phone" === this.device || "phone-vertical" === this.device
                }
                _checkDevice() {
                    this.width = window.innerWidth, this.height = window.innerHeight
                }
                _setNewDevice(e) {
                    const t = this.device;
                    this.device = e, this.trigger("changeDevice", [e, t])
                }
            }
            const c = new l
        },
        822714: (e, t, i) => {
            i.r(t), i.d(t, {
                convertToCustomSymbolList: () => r,
                convertToMarkedSymbolList: () => a,
                convertToSymbolList: () => l,
                getCustomWatchLists: () => c,
                getAllWatchLists: () => u,
                renameWatchList: () => d,
                removeWatchList: () => m,
                addSymbols: () => g,
                removeSymbols: () => h,
                replaceSymbols: () => _,
                createWatchList: () => p,
                putWatchList: () => w,
                setActive: () => y,
                getActive: () => f,
                changeDescription: () => b
            });
            var n = i(588537),
                o = i(86674),
                s = i(658583);

            function r(e) {
                var t;
                return {
                    type: "custom",
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    symbols: null !== (t = e.symbols) && void 0 !== t ? t : [],
                    shared: e.shared
                }
            }

            function a(e) {
                var t, i;
                const o = (0, n.ensureNotNull)(e.color);
                return {
                    type: "colored",
                    id: o,
                    color: o,
                    name: null !== (t = e.name) && void 0 !== t ? t : null,
                    description: e.description,
                    symbols: null !== (i = e.symbols) && void 0 !== i ? i : [],
                    shared: e.shared
                }
            }

            function l(e) {
                return "custom" === e.type ? r(e) : a(e)
            }

            function c() {
                return (0, o.fetch)("/api/v1/symbols_list/custom/").then(s.handleJSON).then((e => e.map(r)))
            }

            function u() {
                return (0, o.fetch)("/api/v1/symbols_list/all/").then(s.handleJSON).then((e => e.map(l)))
            }

            function d(e, t) {
                return (0, o.fetch)(`/api/v1/symbols_list/custom/${e.id}/rename/`, {
                    method: "POST",
                    body: JSON.stringify({
                        name: t
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(s.handleJSON)
            }

            function m(e) {
                return (0, o.fetch)(`/api/v1/symbols_list/custom/${e.id}/`, {
                    method: "DELETE"
                }).then(s.handleJSON)
            }

            function g(e, t) {
                return (0, o.fetch)(`/api/v1/symbols_list/custom/${e.id}/append/`, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(s.handleJSON)
            }

            function h(e, t) {
                return (0, o.fetch)(`/api/v1/symbols_list/custom/${e.id}/remove/`, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(s.handleJSON)
            }

            function _(e, t) {
                return (0, o.fetch)(`/api/v1/symbols_list/custom/${e.id}/replace/?unsafe=true`, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(s.handleJSON)
            }

            function p(e) {
                return (0, o.fetch)("/api/v1/symbols_list/custom/", {
                    method: "POST",
                    body: JSON.stringify({
                        name: e.name,
                        symbols: e.symbols
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(s.handleJSON).then(r)
            }

            function w(e) {
                throw new Error("not implemented")
            }

            function y(e) {
                return (0, o.fetch)(`/api/v1/symbols_list/active/${e}/`, {
                    method: "POST"
                })
            }
            async function f() {
                if ((0, s.isDesktopWatchlistAvailable)(window.TVD)) {
                    const e = await window.TVD.getActiveWatchlistId();
                    if (e) {
                        const t = await u(),
                            i = t.find((t => t.id === e));
                        return null != i ? i : t[0]
                    }
                }
                return (0, o.fetch)("/api/v1/symbols_list/active/", {
                    method: "GET"
                }).then(s.handleJSON).then(l)
            }

            function b(e, t) {
                return (0, o.fetch)(`/api/v1/symbols_list/custom/${e}/update_meta/`, {
                    method: "POST",
                    body: JSON.stringify({
                        description: t
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(s.handleJSON).then(l)
            }
        },
        658583: (e, t, i) => {
            i.d(t, {
                handleJSON: () => o,
                isDesktopWatchlistAvailable: () => s
            });
            var n = i(638456);

            function o(e) {
                return e.ok ? 204 === e.status ? Promise.resolve() : e.json() : e.json().then((e => {
                    const t = new Error(e.detail || "not ok");
                    throw e.code && (t.name = `ApiError:${e.code}`), t
                }))
            }

            function s(e) {
                return Boolean((0, n.isDesktopApp)() && e && "getActiveWatchlistId" in e && "onActiveWatchlistIdChange" in e)
            }
        },
        473999: (e, t, i) => {
            i.d(t, {
                registerSiteSymbolListBackend: () => m
            });
            var n = i(261309);
            const o = i(822714);
            var s = i(575932),
                r = i(564894);
            class a {
                constructor(e = []) {
                    this._list = {
                        id: "DEFAULT_SINGLE_WATCHLIST",
                        type: "custom",
                        name: (0, s.t)("Watchlist"),
                        description: null,
                        symbols: [...e],
                        shared: !1
                    }
                }
                getCustomWatchLists() {
                    return Promise.resolve([this._list])
                }
                getSymbols(e) {
                    return Promise.resolve(this._list.symbols)
                }
                createWatchList(e) {
                    throw new Error("not implemented")
                }
                putWatchList(e) {
                    throw new Error("not implemented")
                }
                removeWatchList(e) {
                    throw new Error("not implemented")
                }
                renameWatchList(e, t) {
                    return Promise.resolve(t)
                }
                replaceSymbols(e, t) {
                    return this._list.symbols = [...t], Promise.resolve(this._list)
                }
                addSymbols(e, t) {
                    return this._list.symbols.push(...t), Promise.resolve(this._list.symbols)
                }
                removeSymbols(e, t) {
                    return this._list.symbols = this._list.symbols.filter((e => !t.includes(e))), Promise.resolve(this._list.symbols)
                }
                setActive(e) {
                    return Promise.resolve(this._list)
                }
                getActive() {
                    return Promise.resolve(this._list)
                }
                changeDescription(e, t) {
                    throw new Error("not implemented")
                }
            }
            var l = i(440498),
                c = i(638456),
                u = i(658583);
            class d {
                constructor(e) {
                    this._deletedSymbolsList = new l.DeletedSymbolsList, this.update(e)
                }
                update(e) {
                    const {
                        isAuthenticated: t,
                        chartApiInstance: i
                    } = e
                    ;
                    this._current = t ? o : new a(i.defaultWatchlistSymbols())
                }
                getCustomWatchLists() {
                    return this._current.getCustomWatchLists().then((e => {
                        const t = [...e],
                            i = this._deletedSymbolsList.getList();
                        return i && t.push(i), t
                    }))
                }
                createWatchList(e) {
                    if ((0, l.isDeletedSymbolsList)(e.id)) {
                        this._deletedSymbolsList.createList(e);
                        const t = this._deletedSymbolsList.getList();
                        return Promise.resolve(t)
                    }
                    return this._current.createWatchList(e)
                }
                putWatchList(e) {
                    if ((0, l.isDeletedSymbolsList)(e.id)) {
                        const e = this._deletedSymbolsList.getList();
                        if (e) return Promise.resolve(e)
                    }
                    return this._current.putWatchList(e)
                }
                removeWatchList(e) {
                    var t;
                    return (0, l.isDeletedSymbolsList)(e.id) ? (null === (t = this._deletedSymbolsList) || void 0 === t || t.removeList(), Promise.resolve()) : this._current.removeWatchList(e)
                }
                renameWatchList(e, t) {
                    if ((0, l.isDeletedSymbolsList)(e.id)) {
                        const e = this._deletedSymbolsList.getList();
                        if (e) return Promise.resolve(e.name)
                    }
                    return this._current.renameWatchList(e, t)
                }
                replaceSymbols(e, t) {
                    if ((0, l.isDeletedSymbolsList)(e.id)) {
                        this._deletedSymbolsList.replaceSymbols(t);
                        const e = this._deletedSymbolsList.getList();
                        return Promise.resolve(e)
                    }
                    return this._current.replaceSymbols(e, t)
                }
                addSymbols(e, t) {
                    if ((0, l.isDeletedSymbolsList)(e.id)) {
                        this._deletedSymbolsList.addSymbols(t);
                        const e = this._deletedSymbolsList.getList();
                        return e ? Promise.resolve(e.symbols) : Promise.resolve([])
                    }
                    return this._current.addSymbols(e, t)
                }
                removeSymbols(e, t) {
                    if ((0, l.isDeletedSymbolsList)(e.id)) {
                        this._deletedSymbolsList.removeSymbols(t);
                        const e = this._deletedSymbolsList.getList();
                        return e ? Promise.resolve(e.symbols) : Promise.resolve([])
                    }
                    return this._current.removeSymbols(e, t)
                }
                setActive(e) {
                    return (0, l.isDeletedSymbolsList)(e) ? (this._deletedSymbolsList.setIsActive(!0), (0, u.isDesktopWatchlistAvailable)(window.TVD) && window.TVD.onActiveWatchlistIdChange(e), Promise.resolve()) : (this._deletedSymbolsList.getIsActive() && this._deletedSymbolsList.setIsActive(!1), (0, u.isDesktopWatchlistAvailable)(window.TVD) && window.TVD.onActiveWatchlistIdChange(e), this._current.setActive(e))
                }
                async getActive() {
                    var e, t;
                    const i = (0, c.isDesktopApp)() ? await (null === (t = null === (e = window.TVD) || void 0 === e ? void 0 : e.getActiveWatchlistId) || void 0 === t ? void 0 : t.call(e)) : void 0;
                    if (!i && this._deletedSymbolsList.getIsActive() || (0, l.isDeletedSymbolsList)(i)) {
                        const e = this._deletedSymbolsList.getList();
                        if (e) return Promise.resolve(e)
                    }
                    return this._current.getActive()
                }
                changeDescription(e, t) {
                    return this._current.changeDescription(e, t)
                }
            }

            function m(e) {
                const t = new d({
                    chartApiInstance: e,
                    isAuthenticated: window.is_authenticated
                });
                return window.loginStateChange.subscribe(t, (() => {
                    t.update({
                        chartApiInstance: e,
                        isAuthenticated: window.is_authenticated
                    })
                })), (0, r.registerService)(n.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE, t), () => {
                    window.loginStateChange.unsubscribeAll(t), (0, r.unregisterService)(n.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE)
                }
            }
        },
        261309: (e, t, i) => {
            i.d(t, {
                SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE: () => n
            });
            const n = {
                id: "SymbolListRepositoryBackend"
            }
        },
        440498: (e, t, i) => {
            i.d(t, {
                DELETED_SYMBOLS_LIST_ID: () => a,
                isDeletedSymbolsList: () => c,
                DeletedSymbolsList: () => u
            });
            var n = i(49437),
                o = i(738600);
            const s = "deleted_symbols_list",
                r = "is_deleted_symbols_list_active",
                a = "deleted_symbols_list_id",
                l = "There was an error during attempt to set local storage value",
                c = e => e === a;
            class u {
                constructor() {
                    this._logError = (e, t) => {
                        e instanceof Error ? o.logger.logError(e.message) : o.logger.logError(t)
                    }
                }
                createList(e) {
                    this._setList(e)
                }
                removeList() {
                    try {
                        n.TVLocalStorage.removeItem(s)
                    } catch (e) {
                        this._logError(e, "There was an error during local storage item removal")
                    }
                }
                addSymbols(e) {
                    const t = this.getList();
                    if (!t) return;
                    const i = new Set(t.symbols);
                    for (const t of e) i.add(t);
                    const n = Array.from(i);
                    n.length > 100 ? t.symbols = n.reverse().slice(0, 100).reverse() : t.symbols = n, this._setList(t)
                }
                removeSymbols(e) {
                    const t = this.getList();
                    if (!t) return;
                    const i = new Set(t.symbols);
                    for (const t of e) i.delete(t);
                    t.symbols = Array.from(i), this._setList(t)
                }
                replaceSymbols(e) {
                    const t = this.getList();
                    t && (t.symbols = e, this._setList(t))
                }
                getIsActive() {
                    try {
                        return "true" === n.TVLocalStorage.getItem(r)
                    } catch (e) {
                        return this._logError(e, l), !1
                    }
                }
                setIsActive(e) {
                    try {
                        n.TVLocalStorage.setItem(r, String(e))
                    } catch (e) {
                        this._logError(e, l)
                    }
                }
                getList() {
                    try {
                        const e = n.TVLocalStorage.getItem(s);
                        return e ? JSON.parse(e) : null
                    } catch (e) {
                        return this._logError(e, "There was an error during attempt to get local storage value"), null
                    }
                }
                _setList(e) {
                    try {
                        n.TVLocalStorage.setItem(s, JSON.stringify(e))
                    } catch (e) {
                        this._logError(e, l)
                    }
                }
            }
        },
        738600: (e, t, i) => {
            i.d(t, {
                logger: () => n
            });
            const n = (0, i(911905).getLogger)("Platform.Model.Watchlist")
        },
        889267: (e, t, i) => {
            i.d(t, {
                symbolTokenEscapeRe: () => r,
                tokenize: () => c
            });
            var n = i(611688),
                o = i(173777);
            const s = n.enabled("charting_library_base") ? /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&])*|'.+?'/ : /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&])*|'.+?'/,
                r = /[+\-/*]/,
                a = {
                    number: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
                    incompleteNumber: /\./,
                    symbol: s,
                    incompleteSymbol: /'[^']*/,
                    separatorPrefix: o.SEPARATOR_PREFIX,
                    openBrace: "(",
                    closeBrace: ")",
                    plus: "+",
                    minus: "-",
                    multiply: "*",
                    divide: "/",
                    power: "^",
                    whitespace: /[\0-\x20\s]+/,
                    unparsed: null
                },
                l = new RegExp(Object.values(a).map((e => {
                    return null === e ? "" : `(${"string"==typeof e?(t=e,t.replace(/[\^$()[\]{}*+?|\\]/g,"\\$&")):e.source})`;
                    var t
                })).filter((e => "" !== e)).concat(".").join("|"), "g");

            function c(e) {
                if (!e) return [];
                const t = [],
                    i = Object.keys(a);
                let n;
                for (; n = l.exec(e);) {
                    let e = !1;
                    for (let o = i.length; o--;)
                        if (n[o + 1]) {
                            i[o] && t.push({
                                value: n[o + 1],
                                type: i[o],
                                precedence: 0,
                                offset: n.index
                            }), e = !0;
                            break
                        }
                    e || t.push({
                        value: n[0],
                        type: "unparsed",
                        precedence: 0,
                        offset: n.index
                    })
                }
                return t
            }
        },
        692598: (e, t, i) => {
            i.r(t), i.d(t, {
                getLogoUrlsHook: () => a,
                removeUsdAndStableCoinFromCryptoPairLogos: () => l,
                resolveLogoUrls: () => r
            });
            var n = i(849204);
            const o = JSON.parse('["XTVCUSDT","XTVCDAI","XTVCBUSD","XTVCTUSD","XTVCUSDC","XTVCDGX","XTVCHUSD"]'),
                s = (0, n.getLogoUrlResolver)();

            function r(e, t = n.LogoSize.Medium) {
                const i = e.logoid,
                    o = e["base-currency-logoid"],
                    r = e["currency-logoid"],
                    a = i && s.getSymbolLogoUrl(i, t);
                if (a) return [a];
                const l = o && s.getSymbolLogoUrl(o, t),
                    c = r && s.getSymbolLogoUrl(r, t);
                return l && c ? [l, c] : l ? [l] : c ? [c] : []
            }

            function a(e, t) {
                let i = !1;
                return (n, o, s) => {
                    const a = n["currency-logoid"] && n["base-currency-logoid"];
                    if (!i && (n.logoid || a || s)) {
                        i = !0;
                        const o = l(r({
                            logoid: n.logoid,
                            "base-currency-logoid": n["base-currency-logoid"],
                            "currency-logoid": n["currency-logoid"]
                        }, t));
                        e(o)
                    }
                }
            }

            function l(e) {
                return 2 !== e.length ? e : function(e) {
                    return e.some((e => c(e)))
                }(e) && ! function(e) {
                    return e.some((e => e.includes("country") && !c(e)))
                }(e) ? e.filter((e => !c(e))) : function(e) {
                    return e.some((e => d(e)))
                }(e) && function(e) {
                    return e.some((e => u(e)))
                }(e) ? e.filter((e => u(e))) : e
            }

            function c(e) {
                return e.includes("country/US")
            }

            function u(e) {
                return e.includes("crypto") && !d(e)
            }

            function d(e) {
                return o.some((t => e.includes(t)))
            }
        },
        18182: (e, t, i) => {
            i.d(t, {
                MatchMedia: () => o
            });
            var n = i(559496);
            class o extends n.PureComponent {
                constructor(e) {
                    super(e), this._handleChange = () => {
                        this.forceUpdate()
                    }, this.state = {
                        query: window.matchMedia(this.props.rule)
                    }
                }
                componentDidMount() {
                    this._subscribe(this.state.query)
                }
                componentDidUpdate(e, t) {
                    this.state.query !== t.query && (this._unsubscribe(t.query), this._subscribe(this.state.query))
                }
                componentWillUnmount() {
                    this._unsubscribe(this.state.query)
                }
                render() {
                    return this.props.children(this.state.query.matches)
                }
                static getDerivedStateFromProps(e, t) {
                    return e.rule !== t.query.media ? {
                        query: window.matchMedia(e.rule)
                    } : null
                }
                _subscribe(e) {
                    e.addListener(this._handleChange)
                }
                _unsubscribe(e) {
                    e.removeListener(this._handleChange)
                }
            }
        },
        804510: e => {
            e.exports = JSON.parse('{"ar_AE":{"language":"ar","language_name":"العربية","flag":"ae","geoip_code":"ae","countries_with_this_language":["ae","bh","dj","dz","eg","er","iq","jo","km","kw","lb","ly","ma","mr","om","qa","sa","sd","so","sy","td","tn","ye"],"priority":500,"dir":"rtl","iso":"ar","iso_639_3":"arb","show_on_widgets":true,"name_on_widgets":"العَرَبِيَّة‎‎","global_name":"Arabic"},"br":{"language":"pt","language_name":"Português","flag":"br","geoip_code":"br","priority":650,"iso":"pt","iso_639_3":"por","show_on_widgets":true,"name_on_widgets":"Português","global_name":"Portuguese"},"cs":{"language":"cs","language_name":"Czech","flag":"cz","geoip_code":"cz","priority":718,"iso":"cs","iso_639_3":"ces","show_on_widgets":true,"name_on_widgets":"Česky","global_name":"Czech","is_in_european_union":true,"isBattle":true},"de_DE":{"language":"de","language_name":"Deutsch","flag":"de","geoip_code":"de","countries_with_this_language":["at","ch"],"priority":756,"iso":"de","iso_639_3":"de","show_on_widgets":true,"name_on_widgets":"Deutsch","global_name":"German","is_in_european_union":true},"en":{"language":"en","language_name":"English","flag":"us","geoip_code":"us","priority":1000,"iso":"en","iso_639_3":"eng","show_on_widgets":true,"name_on_widgets":"English","global_name":"English","is_only_recommended_tw_autorepost":true},"es":{"language":"es","language_name":"Español","flag":"es","geoip_code":"es","countries_with_this_language":["mx","ar","ve","cl","co","pe","uy","py","cr","gt","c","bo","pa","pr"],"priority":744,"iso":"es","iso_639_3":"spa","show_on_widgets":true,"name_on_widgets":"Español","global_name":"Spanish","is_in_european_union":true},"fa_IR":{"language":"fa","language_name":"فارسى","flag":"ir","geoip_code":"ir","priority":480,"dir":"rtl","iso":"fa","iso_639_3":"fas","show_on_widgets":true,"name_on_widgets":"فارسی","global_name":"Iranian","disabled":true},"fr":{"language":"fr","language_name":"Français","flag":"fr","geoip_code":"fr","priority":750,"iso":"fr","iso_639_3":"fra","show_on_widgets":true,"name_on_widgets":"French","global_name":"French","is_in_european_union":true},"he_IL":{"language":"he_IL","language_name":"עברית","flag":"il","geoip_code":"il","priority":490,"dir":"rtl","iso":"he","iso_639_3":"heb","show_on_widgets":true,"name_on_widgets":"‏עברית‏","global_name":"Israeli"},"hu_HU":{"language":"hu_HU","language_name":"Magyar","flag":"hu","geoip_code":"hu","priority":724,"iso":"hu","iso_639_3":"hun","show_on_widgets":true,"name_on_widgets":"Magyar","global_name":"Hungarian","is_in_european_union":true,"disabled":true},"id":{"language":"id_ID","language_name":"Bahasa Indonesia","flag":"id","geoip_code":"id","priority":648,"iso":"id","iso_639_3":"ind","show_on_widgets":true,"name_on_widgets":"Indonesia","global_name":"Indonesian"},"in":{"language":"en","language_name":"English ‎(India)‎","flag":"in","geoip_code":"in","priority":800,"iso":"en","iso_639_3":"eng","show_on_widgets":true,"name_on_widgets":"India","global_name":"Indian"},"it":{"language":"it","language_name":"Italiano","flag":"it","geoip_code":"it","priority":737,"iso":"it","iso_639_3":"ita","show_on_widgets":true,"name_on_widgets":"Italiano","global_name":"Italian","is_in_european_union":true},"ja":{"language":"ja","language_name":"日本語","flag":"jp","geoip_code":"jp","priority":600,"iso":"ja","iso_639_3":"jpn","show_on_widgets":true,"name_on_widgets":"日本語","global_name":"Japanese"},"kr":{"language":"ko","language_name":"한국어","flag":"kr","geoip_code":"kr","priority":550,"iso":"ko","iso_639_3":"kor","show_on_widgets":true,"name_on_widgets":"한국어","global_name":"Korean"},"ms_MY":{"language":"ms_MY","language_name":"Bahasa Melayu","flag":"my","geoip_code":"my","priority":647,"iso":"ms","iso_639_3":"zlm","show_on_widgets":true,"name_on_widgets":"Malay [Malaysia]","global_name":"Malaysian"},"pl":{"language":"pl","language_name":"Polski","flag":"pl","geoip_code":"pl","priority":725,"iso":"pl","iso_639_3":"pol","show_on_widgets":true,"name_on_widgets":"Polski","global_name":"Polish","is_in_european_union":true},"ru":{"language":"ru","language_name":"Русский","flag":"ru","geoip_code":"ru","countries_with_this_language":["am","by","kg","kz","md","tj","tm","uz"],"priority":700,"iso":"ru","iso_639_3":"rus","show_on_widgets":true,"name_on_widgets":"Русский","global_name":"Russian","is_only_recommended_tw_autorepost":true},"sv_SE":{"language":"sv","language_name":"Svenska","flag":"se","geoip_code":"se","priority":723,"iso":"sv","iso_639_3":"swe","show_on_widgets":true,"name_on_widgets":"Swedish","global_name":"Swedish","is_in_european_union":true},"th_TH":{"language":"th","language_name":"ภาษาไทย","flag":"th","geoip_code":"th","priority":646,"iso":"th","iso_639_3":"tha","show_on_widgets":true,"name_on_widgets":"ภาษาไทย","global_name":"Thai"},"tr":{"language":"tr","language_name":"Türkçe","flag":"tr","geoip_code":"tr","priority":713,"iso":"tr","iso_639_3":"tur","show_on_widgets":true,"name_on_widgets":"Türkçe","global_name":"Turkish","is_only_recommended_tw_autorepost":true},"vi_VN":{"language":"vi","language_name":"Tiếng Việt","flag":"vn","geoip_code":"vn","priority":645,"iso":"vi","iso_639_3":"vie","show_on_widgets":true,"name_on_widgets":"Tiếng Việt","global_name":"Vietnamese"},"zh_CN":{"language":"zh","language_name":"简体中文","flag":"cn","geoip_code":"cn","countries_with_this_language":["zh"],"priority":537,"iso":"zh-Hans","iso_639_3":"cmn","show_on_widgets":true,"name_on_widgets":"简体中文","global_name":"Chinese"},"zh_TW":{"language":"zh_TW","language_name":"繁體中文","flag":"tw","geoip_code":"tw","countries_with_this_language":["hk"],"priority":536,"iso":"zh-Hant","iso_639_3":"cmn","show_on_widgets":true,"name_on_widgets":"繁體中文","global_name":"Taiwanese"},"el":{"language":"el","language_name":"Greek","flag":"gr","geoip_code":"gr","priority":625,"iso":"el","iso_639_3":"ell","global_name":"Greek","is_in_european_union":true,"isBattle":true},"nl_NL":{"language":"nl_NL","language_name":"Dutch","flag":"nl","geoip_code":"nl","priority":731,"iso":"nl","iso_639_3":"nld","global_name":"Dutch","is_in_european_union":true,"isBattle":true},"ro":{"language":"ro","language_name":"Romanian","flag":"ro","geoip_code":"ro","priority":707,"iso":"ro","iso_639_3":"nld","global_name":"Romanian","is_in_european_union":true,"isBattle":true}}')
        }
    }
]);