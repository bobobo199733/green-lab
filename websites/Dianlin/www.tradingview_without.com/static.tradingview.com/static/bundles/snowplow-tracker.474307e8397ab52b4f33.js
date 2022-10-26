(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [24081, 20575], {
        24654: e => {
            "use strict";
            e.exports = function(e) {
                for (var i = [], t = e.length, a = 0; a < t; a++) {
                    var n = e.charCodeAt(a);
                    if (n >= 55296 && n <= 56319 && t > a + 1) {
                        var r = e.charCodeAt(a + 1);
                        r >= 56320 && r <= 57343 && (n = 1024 * (n - 55296) + r - 56320 + 65536, a += 1)
                    }
                    n < 128 ? i.push(n) : n < 2048 ? (i.push(n >> 6 | 192), i.push(63 & n | 128)) : n < 55296 || n >= 57344 && n < 65536 ? (i.push(n >> 12 | 224), i.push(n >> 6 & 63 | 128), i.push(63 & n | 128)) : n >= 65536 && n <= 1114111 ? (i.push(n >> 18 | 240), i.push(n >> 12 & 63 | 128), i.push(n >> 6 & 63 | 128), i.push(63 & n | 128)) : i.push(239, 191, 189)
                }
                return new Uint8Array(i).buffer
            }
        },
        9995: (e, i, t) => {
            var a = t(939340);
            e.exports = function(e) {
                return e = a(e ^= e >>> 16, 2246822507), e = a(e ^= e >>> 13, 3266489909), (e ^= e >>> 16) >>> 0
            }
        },
        939340: e => {
            "use strict";
            e.exports = Math.imul || function(e, i) {
                var t = 65535 & e,
                    a = 65535 & i;
                return t * a + ((e >>> 16 & 65535) * a + t * (i >>> 16 & 65535) << 16 >>> 0) | 0
            }
        },
        855385: (e, i, t) => {
            var a = t(939340),
                n = t(9995),
                r = t(24654),
                s = new Uint32Array([3432918353, 461845907]);

            function o(e, i) {
                return e << i | e >>> 32 - i
            }
            e.exports = function(e, i) {
                if (i = i ? 0 | i : 0, "string" == typeof e && (e = r(e)), !(e instanceof ArrayBuffer)) throw new TypeError("Expected key to be ArrayBuffer or string");
                var t = new Uint32Array([i]);
                return function(e, i) {
                        for (var t = e.byteLength / 4 | 0, n = new Uint32Array(e, 0, t), r = 0; r < t; r++) n[r] = a(n[r], s[0]), n[r] = o(n[r], 15), n[r] = a(n[r], s[1]), i[0] = i[0] ^ n[r], i[0] = o(i[0], 13), i[0] = a(i[0], 5) + 3864292196
                    }(e, t),
                    function(e, i) {
                        var t = e.byteLength / 4 | 0,
                            n = e.byteLength % 4,
                            r = 0,
                            c = new Uint8Array(e, 4 * t, n);
                        switch (n) {
                            case 3:
                                r ^= c[2] << 16;
                            case 2:
                                r ^= c[1] << 8;
                            case 1:
                                r ^= c[0] << 0, r = o(r = a(r, s[0]), 15), r = a(r, s[1]), i[0] = i[0] ^ r
                        }
                    }(e, t),
                    function(e, i) {
                        i[0] = i[0] ^ e.byteLength, i[0] = n(i[0])
                    }(e, t), t.buffer
            }
        },
        43464: (e, i, t) => {
            "use strict";
            t.r(i), t.d(i, {
                cookieBannerDomain: () => d,
                oldBannerKey: () => u,
                bannerPrivacyPreferenceKey: () => m,
                cookieBannerDelegate: () => k,
                removeOldCookieBannerKey: () => b,
                checkCookiePolicy: () => w,
                checkCookiePolicyInLs: () => f,
                onAccept: () => y,
                setCookiePolicy: () => S,
                showCookiesNotification: () => D,
                initCookiesNotification: () => j
            });
            var a = t(49437),
                n = t(314802),
                r = (t(659863), t(579917)),
                s = t(226305),
                o = t(261030),
                c = t(634786),
                _ = t(66974),
                l = t(910288);
            const g = window.location.hostname.split("."),
                d = (0, _.isLocal)() ? "" : "." + g.slice(1, g.length).join("."),
                u = "cookieBanner",
                m = (0, _.isProd)() ? "cookiePrivacyPreferenceBannerProduction" : "cookiePrivacyPreferenceBannerLocal",
                h = "accepted",
                p = "ignored",
                v = "notApplicable",
                k = (0, r.createDeferredPromise)();

            function b() {
                return a.TVLocalStorage.removeItem(u)
            }

            function w(e) {
                return l.get(e) === h || l.get(e) === v
            }

            function f(e) {
                return a.TVLocalStorage.getItem(e) === h || a.TVLocalStorage.getItem(e) === v
            }

            function y() {
                S(h)
            }

            function S(e) {
                l.set(m, e, 3653, "/", d)
            }
            let E = !1;
            async function D() {
                if (E) return;
                E = !0;
                const e = await Promise.all([t.e(10146), t.e(99740), t.e(24817), t.e(17967), t.e(57561), t.e(42270), t.e(91077), t.e(27592), t.e(94599), t.e(25316), t.e(75514), t.e(18954), t.e(13830), t.e(87410), t.e(38869)]).then(t.bind(t, 458107));
                await e.showCookiesNotification() && (y(), (0, c.trackCookies)("click", "accept_all")), E = !1
            }
            async function j() {
                const e = document.querySelector(".js-main-page-promo-container");
                if (!w(m) && !(0,
                        n.isOnMobileAppPage)("any")) {
                    if (e || k.resolve(), l.get(m) === p) return o.cookieSettingsReady.resolve(), k.promise.then((() => D())); {
                        const e = await (0, s.userGeoInfo)();
                        if (e.is_in_european_union || (i = e.country_code, ["is", "li", "no", "gb"].includes(i))) return S(p), o.cookieSettingsReady.resolve(), k.promise.then((() => D()));
                        S(v), (0, o.setCookieSetting)(o.CookieSettings.Analytics, !0), (0, o.setCookieSetting)(o.CookieSettings.Advertising, !0)
                    }
                }
                var i;
                o.cookieSettingsReady.resolve()
            }
        },
        809965: (e, i, t) => {
            "use strict";
            var a, n, r;
            t.d(i, {
                    ProPlans: () => a,
                    BrokerPlans: () => n,
                    BrokerPlansIds: () => r
                }),
                function(e) {
                    e.Free = "free", e.Pro = "pro", e.ProTrial = "pro_trial", e.ProRealtime = "pro_realtime", e.ProRealtimeTrial = "pro_realtime_trial", e.ProPremium = "pro_premium", e.ProPremiumTrial = "pro_premium_trial", e.ProMiniAlerts = "pro_mini_alerts", e.ProMiniAds = "pro_mini_ads", e.ProMiniLayouts = "pro_mini_layouts", e.ProEdu = "pro_edu"
                }(a || (a = {})),
                function(e) {
                    e.Platinum = "platinum", e.Gold = "gold", e.Silver = "silver", e.Free = "free"
                }(n || (n = {})),
                function(e) {
                    e[e.Platinum = 3] = "Platinum", e[e.Gold = 2] = "Gold", e[e.Silver = 1] = "Silver", e[e.Free = 0] = "Free"
                }(r || (r = {}))
        },
        226305: (e, i, t) => {
            "use strict";
            t.d(i, {
                userGeoInfo: () => s
            });
            var a = t(86674);
            const n = (0, t(911905).getLogger)("User.GeoInfo");
            let r;

            function s() {
                if (void 0 !== r) return r;
                return r = (0, a.fetch)("/check_language/", {
                    method: "POST"
                }).then((e => {
                    if (e.ok) return e.json();
                    throw new Error(e.statusText)
                })).catch((e => (n.logWarn(e.message), {}))), r
            }
        },
        261030: (e, i, t) => {
            "use strict";
            t.d(i, {
                CookieSettings: () => a,
                cookieSettingsChangeEvent: () => l,
                cookieSettingsReady: () => g,
                setCookieSetting: () => p,
                getCookieSetting: () => v
            });
            var a, n = t(251954),
                r = t(579917),
                s = t(49437),
                o = t(43464),
                c = t(66974),
                _ = t(910288);
            ! function(e) {
                e.Analytics = "analytics", e.Advertising = "advertising"
            }(a || (a = {}));
            const l = "cookie_settings_changed",
                g = (0, r.createDeferredPromise)(),
                d = "cookiesSettings",
                u = "localCookiesSettings",
                m = "cookiePrivacyPreferenceBanner",
                h = {
                    [a.Analytics]: !1,
                    [a.Advertising]: !1
                };

            function p(e, i) {
                h[e] = i, _.set((0, c.isProd)() ? d : u, JSON.stringify(h), 3653, "/", o.cookieBannerDomain), n.emit(l, e, i)
            }

            function v(e) {
                return h[e]
            }

            function k() {
                return s.TVLocalStorage.removeItem(m)
            }! function() {
                const e = _.get((0, c.isProd)() ? d : u),
                    i = s.TVLocalStorage.getItem(m),
                    t = s.TVLocalStorage.getItem(d);
                if (e) {
                    i && t && (k(), s.TVLocalStorage.removeItem(d)), (0, o.checkCookiePolicyInLs)(o.oldBannerKey) && (0, o.removeOldCookieBannerKey)();
                    try {
                        const i = JSON.parse(e);
                        h[a.Analytics] = (null == i ? void 0 : i[a.Analytics]) || !1, h[a.Advertising] = (null == i ? void 0 : i[a.Advertising]) || !1
                    } catch (e) {}
                } else if ((0, o.checkCookiePolicyInLs)(o.oldBannerKey) && (p(a.Analytics, !0), p(a.Advertising, !0), (0, o.onAccept)(), (0, o.removeOldCookieBannerKey)()), i && t) {
                    const e = JSON.parse(t);
                    (0, o.setCookiePolicy)(i), p(a.Analytics, null == e ? void 0 : e[a.Analytics]), p(a.Advertising, null == e ? void 0 : e[a.Advertising]), k(), s.TVLocalStorage.removeItem(d)
                }
            }()
        },
        579917: (e, i, t) => {
            "use strict";

            function a() {
                let e, i;
                return {
                    promise: new Promise(((t, a) => {
                        e = t, i = a
                    })),
                    reject: i,
                    resolve: e
                }
            }
            t.d(i, {
                createDeferredPromise: () => a
            })
        },
        66974: (e, i, t) => {
            "use strict";

            function a(e = location.host) {
                return -1 !== ["i18n.tradingview.com", "partial.tradingview.com", "www.tradingview.com", "wwwcn.tradingview.com"].indexOf(e) || -1 !== ["d33t3vvu2t2yu5.cloudfront.net", "dwq4do82y8xi7.cloudfront.net", "s.tradingview.com", "s3.tradingview.com"].indexOf(e) || e.match(/^[a-z]{2}\.tradingview\.com/) || e.match(/prod-[^.]+.tradingview.com/) ? "battle" : e.includes("tradingview.com") || e.includes("staging") ? "staging" : e.match(/webcharts/) ? "staging_local" : (e.match(/^localhost(:\d+)?$/), "local")
            }

            function n() {
                return "local" === a()
            }

            function r() {
                return "battle" === a()
            }

            function s() {
                return !r()
            }
            t.r(i), t.d(i, {
                environment: () => a,
                isLocal: () => n,
                isProd: () => r,
                isDebug: () => s
            })
        },
        125226: (e, i, t) => {
            "use strict";
            var a = t(49437).TVLocalStorage,
                n = t(97639),
                r = t(855385);
            t(638456);
            var s = new n;
            TradingView.FeatureToggle = {
                force_prefix: "forcefeaturetoggle.",
                onChanged: new n,
                enableFeature: function(e) {
                    a.setItem(this.force_prefix + e, "true"), s.fire(e)
                },
                disableFeature: function(e) {
                    a.setItem(this.force_prefix + e, "false"), s.fire(e)
                },
                resetFeature: function(e) {
                    a.removeItem(this.force_prefix + e), s.fire(e)
                },
                onFeaturesStateChanged: function() {
                    return s
                }
            }, TradingView.isFeatureEnabled = function(e) {
                var i = "featuretoggle_seed";

                function n(e) {
                    try {
                        var t = r(e + function() {
                            if (window.user && window.user.id) return window.user.id;
                            var e = a.getItem(i);
                            return null !== e || (e = Math.floor(1e6 * Math.random()), a.setItem(i, e)), e
                        }());
                        return new DataView(t).getUint32(0, !0) / 4294967296
                    } catch (e) {
                        return .5
                    }
                }

                function o(i) {
                    return !("local" !== window.environment || ! function(e) {
                        var i = ["remove_note_tab_from_bottom_panel", "broker_FXCM_token_v2", "broker_TRADESTATION_V3", "broker_TRADOVATE_dev", "black_friday_mainpage", "black_friday_popup", "datawindow", "trading-fast-renew-oauth-token", "switching_trial_year_to_month_disabled", "switching_year_to_month_disabled", "default_year_billing_cycle_switcher", "marketing-analytics", "google-ads", "visible_address_fields_by_default", "slow-support-warning", "hide-trading-floating-toolbar", "tvcoins_donations", "save-short-streams", "details_disable_bid_ask", "vat_disabled", "pro_plan_upgrades_disabled", "pro_plan_downgrades_disabled", "disable_recaptcha_on_signup", "braintree-trial-implementation", "braintree-gopro-in-order-dialog", "braintree-apple-pay", "braintree-google-pay", "braintree-apple-pay-trial", "braintree-google-pay-trial", "braintree-venmo", "braintree-venmo-trial", "braintree-3ds-enabled", "braintree-3ds-allow-liability-shifted-transactions-only", "hide_gopro_popup_upgrade_button", "tradestation_use_sync_mapper", "yandex_metric_enabled", "broker_id_session", "remove_line_tools_from_content", "disable_retry_load_linetools_from_storage", "modular_broker_use_sync_mapper", "do_not_save_shared_line_tools_to_charts", "save_shared_line_tools", "chart_storage_with_broker_name", "do_not_invalidate_chart_on_changing_line_tools", "oanda-european-accounts-warning", "mobile_show_bottom_panel", "disable_save_settings", "desktop_version_notification_enabled", "favorites-in-broker-dropdown", "streams_stats_profile", "hide_ecomonic_events", "aggregating_page_pings", "mobile_trading_web", "mobile_trading_ios", "mobile_trading_android", "hide_real_brokers_on_mobile", "enable_trading_server_logger", "hide_ranges_label_colors", "disable_user_specific_encryption", "enable_deep_history_backtesting", "enable_deep_history_backtesting_list_of_trades", "show_checkbox_of_house_rules_to_idea_and_script", "minds_widget_enabled", "enable_partner_program", "disable_phone_verification_sms", "disable_sms_for_particular_countries", "no_overlap_mode_enabled", "collapse_pane_buttons_when_connected_to_broker", "enable_new_execution_style", "enable_new_replay_ui", "use_staging_verifier", "ibkr_use_new_init_session_api", "test_minds_connections", "enable_eventsource_pushstream_transport", "ftx_request_server_logger", "ibkr_request_server_logger", "check_ibkr_side_maintenance", "tradestation_request_server_logger", "trading_request_server_logger", "ecommpay_ru", "hide_ideas_on_chart", "RU_SF_disable", "RU_VOR_disable", "enable_monaco_editor", "show_continuous_contract_switches", "enable_new_custom_public_chats", "bottom_panel_track_events", "vertex-tax-included", "enable_place_order_context_in_instant_mode", "nyse_agreement", "sync_daterange_with_right_margin", "websocket_send_locale", "enable_edit_order_context_in_instant_mode", "show_data_problems_in_help_center"],
                            t = "[A-Z]+[a-zA-Z0-9_]+",
                            a = new RegExp(`broker_${t}_dev`, "g"),
                            n = new RegExp(`hide_${t}_on_ios`, "g"),
                            r = new RegExp(`hide_${t}_on_android`, "g"),
                            s = new RegExp(`hide_${t}_on_mobile_web`, "g");
                        return -1 === i.indexOf(e) && -1 === e.indexOf("-maintenance") && !1 === a.test(e) && !1 === n.test(e) && !1 === r.test(e) && !1 === s.test(e)
                    }(i)) || (!e[i] || -1 !== e[i]) && (!!("true" === a.getItem(TradingView.FeatureToggle.force_prefix + i) || window.is_authenticated && "undefined" != typeof user && user.settings && "true" === user.settings[TradingView.FeatureToggle.force_prefix + i]) || !("false" === a.getItem(TradingView.FeatureToggle.force_prefix + i) || window.is_authenticated && "undefined" != typeof user && user.settings && "false" === user.settings[TradingView.FeatureToggle.force_prefix + i]) && (!!e[i] && (1 === e[i] || n(i) <= e[i])))
                }
                return TradingView.onWidget() || t.e(34604).then(t.t.bind(t, 501867, 23)).then((i => {
                    i.on("featuretoggle", (function(i) {
                        var t = o(i.name);
                        e[i.name] = i.state, t !== o(i.name) && s.fire(i.name)
                    }))
                })), o
            }(window.featureToggleState || {}), i.FeatureToggle = TradingView.FeatureToggle, i.isFeatureEnabled = TradingView.isFeatureEnabled, i.onFeaturesStateChanged = TradingView.FeatureToggle.onFeaturesStateChanged.bind(TradingView.FeatureToggle)
        },
        188526: (e, i, t) => {
            "use strict";
            t.d(i, {
                getSettings: () => u
            });
            var a = t(251954),
                n = t(638456),
                r = t(314802),
                s = t(261030),
                o = t(326904),
                c = t(125226);
            const _ = window.initData.snowplowSettings;
            let l, g = "web",
                d = "";

            function u() {
                if (l) return l
            }(0, n.isDesktopApp)() && (g = "pc", d = "_desktop"), (0, r.isOnMobileAppPage)("old") ? (g = "mob", d = "_ios") : (0, r.isOnMobileAppPage)("new") && (g = "mob", d = "_android"), _ && _.params && _.enabled && (l = {
                collectorId: _.collectorId,
                url: _.url,
                params: {
                    appId: _.params.appId + d,
                    platform: g,
                    discoverRootDomain: !0,
                    contexts: {
                        webPage: !0,
                        performanceTiming: !0
                    },
                    eventMethod: "get",
                    maxLocalStorageQueueSize: 30,
                    anonymousTracking: !(0, c.isFeatureEnabled)("snowplow_settings_override") && !(0, s.getCookieSetting)(s.CookieSettings.Analytics) && {
                        withSessionTracking: !0
                    },
                    sessionCookieTimeout: (0, s.getCookieSetting)(s.CookieSettings.Analytics) ? 1800 : 7776e3
                }
            }), a.subscribe(s.cookieSettingsChangeEvent, ((e, i) => {
                (0, c.isFeatureEnabled)("snowplow_settings_override") || e === s.CookieSettings.Analytics && (i ? (0, o.snowplowTracker)("disableAnonymousTracking") : (0, o.snowplowTracker)("enableAnonymousTracking", {
                    withSessionTracking: !0
                }))
            }), null)
        },
        688638: (e, i, t) => {
            "use strict";
            t.d(i, {
                SnowplowTrackerBase: () => c
            });
            var a = t(326904),
                n = t(125226);
            const r = {
                "-": "+",
                _: "/",
                ".": "="
            };

            function s(e) {
                return function(e) {
                    const i = new Uint8Array(e.length);
                    for (let t = 0; t < e.length; t++) {
                        const a = e.charCodeAt(t);
                        i[t] = a
                    }
                    return i
                }(atob(e.replace(/[-_.]/g, (e => r[e]))))
            }

            function o(e) {
                const i = s(e);
                return new TextDecoder("utf-8").decode(i)
            }
            class c {
                constructor(e, i) {
                    (0, a.snowplowTracker)("newTracker", e.collectorId, e.url, e.params), this._schemes = i, this._collectorId = e.collectorId, this._setDiscardBrace(!0)
                }
                trackPageView() {
                    var e;
                    if ((0, n.isFeatureEnabled)("aggregating_page_pings")) {
                        const e = document.cookie.split("; ").find((e => e.startsWith("_sp_id")));
                        if (void 0 !== e) {
                            if ("1" === e.split(".")[3]) {
                                let e = {
                                    numEvents: 0
                                };
                                (0, a.snowplowTracker)("enableActivityTrackingCallback", 10, 10, (() => {
                                    e = {
                                        numEvents: e.numEvents + 1
                                    }
                                })), window.addEventListener("unload", (() => {
                                    const i = {
                                        active_seconds: 10 * e.numEvents
                                    };
                                    this._trackSelfDescribingEvent("page_unload", i)
                                }))
                            }
                        }
                    }
                    const i = [],
                        t = null === (e = this._schemes.amp_pageview) || void 0 === e ? void 0 : e.schema,
                        r = new URLSearchParams(window.location.search).get("sp_amp_linker");
                    if (r && void 0 !== t) {
                        const [, , , e] = r.split("*");
                        i.push({
                            schema: t,
                            data: {
                                ampClientId: o(e),
                                domainUserid: "",
                                userId: ""
                            }
                        })
                    }(0, a.snowplowTracker)("trackPageView", null, i)
                }
                _setDiscardBrace(e) {
                    (0, a.snowplowTracker)("discardBrace", e)
                }
                _trackSelfDescribingEvent(e, i) {
                    const t = this._wrapSelfDescribingData(e, i);
                    (0, a.snowplowTracker)("trackSelfDescribingEvent", t)
                }
                _wrapSelfDescribingData(e, i) {
                    const t = this._schemes[e];
                    if (void 0 === t) throw new Error("SelfDescribingEvent must have a schema");
                    return {
                        schema: t.schema,
                        data: i
                    }
                }
            }
        },
        823623: (e, i, t) => {
            "use strict";
            t.r(i), t.d(i, {
                getTrackerInstance: () => l,
                Tracker: () => g
            });
            var a = t(326904),
                n = t(540169),
                r = t(809965),
                s = t(125226),
                o = t(188526),
                c = t(688638);
            let _ = null;

            function l() {
                if (null === _) {
                    const e = (0, o.getSettings)();
                    void 0 !== e && (e.userId = window.user.id, _ = new g(e), window.loginStateChange.subscribe(_, (() => {
                        _ && _.setUserId(window.user.id)
                    })))
                }
                return _
            }
            class g extends c.SnowplowTrackerBase {
                constructor(e) {
                    super(e, n), this.setUserId(e.userId)
                }
                setUserId(e) {
                    (0, a.snowplowTracker)("setUserId", e)
                }
                trackPermissionDialog(e, i, t) {
                    var a;
                    const n = {
                        feature_id: e,
                        dialog_action: i,
                        user_id: t,
                        user_plan: null !== (a = window.user.pro_plan) && void 0 !== a ? a : window.is_authenticated ? "free" : "visitor"
                    };
                    this._trackSelfDescribingEvent("permission_dialogs", n)
                }
                trackStudiesAnalytics(e, i, t, a, n = "") {
                    const r = {
                        study_name: e,
                        study_package: i,
                        study_action: t,
                        is_strategy: a,
                        pro_plan: n
                    };
                    this._trackSelfDescribingEvent("studies_analytics", r)
                }
                trackDrawingsAnalytics(e, i, t) {
                    if ((0, s.isFeatureEnabled)("disable_snowplow_platform_events")) return;
                    const a = {
                        symbol_name: e,
                        drawing_name: i,
                        drawing_action: t
                    };
                    this._trackSelfDescribingEvent("drawings_analytics", a)
                }
                trackChartApiDrawingCreation(e) {
                    const i = {
                        drawing_name: e
                    };
                    this._trackSelfDescribingEvent("chart_api_drawing_creation", i)
                }
                trackBarReplayAnalytics(e, i) {
                    const t = {
                        bar_replay_action: e,
                        bar_replay_action_data: null != i ? i : null,
                        enable_new_replay: (0, s.isFeatureEnabled)("enable_new_replay_ui")
                    };
                    this._trackSelfDescribingEvent("bar_replay_analytics", t)
                }
                trackChartStyle(e) {
                    const i = {
                        style_name: e
                    };
                    this._trackSelfDescribingEvent("chart_styles", i)
                }
                trackChartSymbols(e, i, t, a) {
                    const n = {
                        symbol_name: e,
                        symbol_type: i,
                        layout_type: t,
                        chart_id: a
                    };
                    this._trackSelfDescribingEvent("chart_symbols", n)
                }
                trackRefunds(e, i, t, a) {
                    const n = {
                        action: e,
                        segment: i,
                        plan: t,
                        billing_cycle: a
                    };
                    this._trackSelfDescribingEvent("refunds", n)
                }
                trackSolutionWatch(e, i, t) {
                    const a = {
                        solution_id: e,
                        popular: i,
                        lang: t
                    };
                    this._trackSelfDescribingEvent("solutions_watch", a)
                }
                trackSolutionNodeWatch(e, i, t, a) {
                    const n = {
                        node_id: e,
                        node_type: i,
                        title: t,
                        lang: a
                    };
                    this._trackSelfDescribingEvent("solutions_nodes_watch", n)
                }
                trackSolutionSkip(e, i, t, a) {
                    const n = {
                        node_id: e,
                        node_type: i,
                        title: t,
                        lang: a
                    };
                    this._trackSelfDescribingEvent("solutions_skip", n)
                }
                trackSolutionSendTicket(e, i, t, a) {
                    const n = {
                        category_id: e,
                        folder_id: t,
                        solution_id: a,
                        lang: i
                    };
                    this._trackSelfDescribingEvent("solutions_send_ticket", n)
                }
                trackTrial(e, i, t, a) {
                    const n = {
                        product_id: e,
                        billing_cycle: i,
                        action: t,
                        merchant: a
                    };
                    this._trackSelfDescribingEvent("trials", n)
                }
                trackNewsClick(e) {
                    this._trackSelfDescribingEvent("news_clicks", e)
                }
                trackNewsEvent(e) {
                    this._trackSelfDescribingEvent("news_events", e)
                }
                trackGoproVisits(e, i, t) {
                    const a = {
                        source: e,
                        feature: i,
                        outcome: t
                    };
                    this._trackSelfDescribingEvent("gopro_visits", a)
                }
                trackFollow(e, i, t, a, n) {
                    const r = {
                        follow_type: e,
                        action: i,
                        author_id: t,
                        symbol: a,
                        symbol_type: n
                    };
                    this._trackSelfDescribingEvent("follow", r)
                }
                trackFullFeaturedChartButton(e, i, t) {
                    const a = {
                        user_id: e,
                        page: i,
                        source: t
                    };
                    this._trackSelfDescribingEvent("full_featured_chart_button", a)
                }
                trackRefLinkAction(e, i, t) {
                    const a = {
                        ref: e,
                        action: i,
                        source: t
                    };
                    this._trackSelfDescribingEvent("referral_ref_link", a)
                }
                trackReferralVisit(e, i) {
                    const t = {
                        source: e,
                        feature: i
                    };
                    this._trackSelfDescribingEvent("referral_visits", t)
                }
                trackTradingBrokerConnnected(e, i, t) {
                    const a = {
                        broker_id: e,
                        account_type: i,
                        user_id: t
                    };
                    this._trackSelfDescribingEvent("trading_broker_connection_status", a)
                }
                trackTradingOrder(e) {
                    this._trackSelfDescribingEvent("trading_order_status", e)
                }
                trackTradingOrderWidget(e) {
                    this._trackSelfDescribingEvent("trading_order_widget", e)
                }
                trackPhoneVerificationDialog(e, i, t) {
                    this._trackSelfDescribingEvent("phone_verification_dialog", {
                        action: e,
                        feature_source: i,
                        page: t
                    })
                }
                trackCopyCodes(e) {
                    const i = {
                        type_2fa: e
                    };
                    this._trackSelfDescribingEvent("copy_reserve_codes", i)
                }
                trackTVCoinsDialogWatch(e, i) {
                    this._trackSelfDescribingEvent("tv_coins_dialog_watch", {
                        page: e,
                        tab: i
                    })
                }
                trackBurgerMenuClick(e) {
                    this._trackSelfDescribingEvent("burger_menu_click", {
                        source: e
                    })
                }
                trackChangeProPlan(e, i, t, a, n) {
                    const r = {
                        product_id: e,
                        from_product_id: i,
                        action: t,
                        days_left: null,
                        from_billing_cycle: a,
                        to_billing_cycle: n
                    };
                    this._trackSelfDescribingEvent("change_pro_plan", r)
                }
                trackUnsubscribeDialog(e, i, t, a) {
                    this._trackSelfDescribingEvent("unsubscribe_dialog", {
                        page: t,
                        action: a,
                        product_id: e,
                        billing_cycle: i
                    })
                }
                trackChat(e, i, t, a) {
                    const n = {
                        chatroom_id: e,
                        is_chatroom: i,
                        is_private: t,
                        locale: a
                    };
                    this._trackSelfDescribingEvent("chat", n)
                }
                trackBrokerBrandingBanner(e) {
                    this._trackSelfDescribingEvent("broker_brandig_banner", e)
                }
                trackBrokerProfileLinksClick(e) {
                    this._trackSelfDescribingEvent("broker_profile_links_click", e)
                }
                trackStreamsActions(e, i, t) {
                    this._trackSelfDescribingEvent("streams_actions", {
                        locale: e,
                        action: i,
                        stream_id: t
                    })
                }
                trackStreamsViewingDuration(e, i, t, a) {
                    this._trackSelfDescribingEvent("streams_viewing_duration", {
                        locale: e,
                        stream_time: i,
                        source: t,
                        stream_id: a
                    })
                }
                trackBrokerOpenAccount(e) {
                    this._trackSelfDescribingEvent("broker_open_account", e)
                }
                trackFinancialsDialog(e, i) {
                    this._trackSelfDescribingEvent("financials_dialog", {
                        symbol: e,
                        source: i
                    })
                }
                trackChangeSymbol(e, i) {
                    (0, s.isFeatureEnabled)("disable_snowplow_platform_events") || this._trackSelfDescribingEvent("change_symbol", {
                        symbol: e,
                        source: i
                    })
                }
                trackPaymentOrderDialogInitial(e, i, t) {
                    this._trackSelfDescribingEvent("payment_order_dialog_initial", {
                        step: e,
                        products: i,
                        billing_cycle: t
                    })
                }
                trackPaymentOrderDialogChanges(e, i) {
                    this._trackSelfDescribingEvent("payment_order_dialog_changes", {
                        value: i,
                        action: e
                    })
                }
                trackGoproCardsClicks(e, i) {
                    this._trackSelfDescribingEvent("gopro_cards_clicks", {
                        component: e,
                        value: i
                    })
                }
                trackSearchToolbar(e, i, t) {
                    this._trackSelfDescribingEvent("search_toolbar", {
                        search_type: e,
                        search_input: i,
                        search_result: t
                    })
                }
                trackAppLinkClick(e, i, t, a) {
                    this._trackSelfDescribingEvent("app_link", {
                        source: e,
                        medium: i,
                        campaign: t,
                        app_platform: a
                    })
                }
                trackAppBannerClick(e, i, t, a, n) {
                    this._trackSelfDescribingEvent("app_banner", {
                        source: e,
                        medium: i,
                        campaign: t,
                        action: a,
                        destination: n
                    })
                }
                trackScreenerHighLevel(e, i, t) {
                    this._trackSelfDescribingEvent("screener_high_level", {
                        event: e.event,
                        source: e.source,
                        location: e.location,
                        state: e.state,
                        value: e.value,
                        screener_type: i,
                        screener_source: t
                    })
                }
                trackIdeaAction(e) {
                    this._trackSelfDescribingEvent("idea_events", {
                        picked_time: "",
                        author_plan: "",
                        author_reputation: "",
                        author_count_ideas: 0,
                        author_scripts: 0,
                        author_likes: 0,
                        author_followers: 0,
                        idea_lock: !1,
                        ...e
                    })
                }
                trackMarketHeatmapEvent(e) {
                    this._trackSelfDescribingEvent("market_heatmap_events", {
                        event_name: e.event_name,
                        market_type: e.market_type,
                        dataset: e.dataset,
                        color_parameter: e.color_parameter,
                        size_parameter: e.size_parameter,
                        is_monosize: e.is_monosize,
                        is_fullscreen: e.is_fullscreen,
                        group_by: e.group_by,
                        active_group: e.active_group,
                        multiplier: e.multiplier,
                        has_filters: e.has_filters
                    })
                }
                trackThreeDSecure(e) {
                    this._trackSelfDescribingEvent("three_d_secure", {
                        type: e.type,
                        issuing_bank: e.issuing_bank,
                        country_of_issuance: e.country_of_issuance,
                        liability_shifted: e.liability_shifted,
                        liability_shift_possible: e.liability_shift_possible,
                        status: e.status,
                        eci_flag: e.eci_flag,
                        three_d_secure_version: e.three_d_secure_version,
                        enrolled: e.enrolled,
                        amount: e.amount,
                        currency_code: e.currency_code,
                        pares_status: e.pares_status,
                        signature_verification: e.signature_verification
                    })
                }
                trackToastDialog(e, i, t, a, n, r) {
                    this._trackSelfDescribingEvent("toast_dialog", {
                        toast_type: e,
                        action: i,
                        title: t,
                        placement: a,
                        user_plan: n,
                        user_id: r,
                        symbol_type: ""
                    })
                }
                trackAdDialog(e, i, t, a, n) {
                    this._trackSelfDescribingEvent("ad_dialog", {
                        ad_unit: e,
                        placement: i,
                        action: t,
                        filled: a,
                        user_plan: n,
                        symbol_type: ""
                    })
                }
                trackToolbarButtonClick(e, i) {
                    if ((0, s.isFeatureEnabled)("disable_snowplow_platform_events")) return;
                    const t = window.is_authenticated ? window.user.pro_plan || r.ProPlans.Free : "visitor";
                    this._trackSelfDescribingEvent("toolbar_button_click", {
                        area: e,
                        button: i,
                        user_plan: t
                    })
                }
                trackBottomToolbarButtonClick(e) {
                    if (!(0, s.isFeatureEnabled)("bottom_panel_track_events")) return;
                    const i = window.is_authenticated ? window.user.pro_plan || r.ProPlans.Free : "visitor";
                    this._trackSelfDescribingEvent("toolbar_button_click", {
                        area: "bottom panel",
                        button: e,
                        user_plan: i
                    })
                }
                trackSparksEvent(e, i) {
                    this._trackSelfDescribingEvent("sparks", {
                        slug_name: e,
                        action: i
                    })
                }
                trackLongerBillingCycleEvent() {
                    this._trackSelfDescribingEvent("longer_billing_cycle_offer", {
                        action: "open"
                    })
                }
                trackMarketDataSolutionEvent(e) {
                    this._trackSelfDescribingEvent("market_data_solution", {
                        symbol: e
                    })
                }
                trackEditorEvent(e) {
                    this._trackSelfDescribingEvent("pine_editor_events", e)
                }
                trackCareersLinkEvent(e) {
                    this._trackSelfDescribingEvent("careers_link_click", e)
                }
                trackToolbarIndicators(e, i, t, a) {
                    this._trackSelfDescribingEvent("toolbar_indicators", {
                        tab: e,
                        bubble: i,
                        script_id: t,
                        feature_toggle: a ? "recsys_on" : "recsys_off"
                    })
                }
            }
        },
        634786: (e, i, t) => {
            "use strict";
            t.d(i, {
                trackCookies: () => n
            });
            var a = t(776734);
            async function n(e, i) {
                var t;
                let n, r;
                n = "/" === window.location.pathname ? "index" : window.location.pathname.split("/")[1];
                const s = null !== (t = window.user.pro_plan) && void 0 !== t ? t : window.is_authenticated ? "free" : "visitor";
                window.is_authenticated && (r = window.user.id);
                const o = await (0, a.getTracker)();
                o && o.trackToastDialog("cookies", e, i, n, s, r)
            }
        },
        540169: e => {
            "use strict";
            e.exports = JSON.parse('{"permission_dialogs":{"schema":"iglu:com.tradingview/permission_dialogs/jsonschema/1-0-0"},"studies_analytics":{"schema":"iglu:com.tradingview/studies_analytics_v2/jsonschema/1-0-0"},"drawings_analytics":{"schema":"iglu:com.tradingview/drawings_analytics/jsonschema/1-0-0"},"bar_replay_analytics":{"schema":"iglu:com.tradingview/bar_replay_analytics/jsonschema/1-0-0"},"chart_api_drawing_creation":{"schema":"iglu:com.tradingview/chart_api_drawing_creation/jsonschema/1-0-0"},"chart_symbols":{"schema":"iglu:com.tradingview/chart_symbols/jsonschema/1-0-0"},"chart_styles":{"schema":"iglu:com.tradingview/chart_styles/jsonschema/1-0-0"},"solutions_watch":{"schema":"iglu:com.tradingview/solutions_watch/jsonschema/1-0-0"},"solutions_send_ticket":{"schema":"iglu:com.tradingview/solutions_send_ticket/jsonschema/1-0-0"},"solutions_nodes_watch":{"schema":"iglu:com.tradingview/solutions_nodes_watch/jsonschema/1-0-0"},"solutions_skip":{"schema":"iglu:com.tradingview/solutions_skip/jsonschema/1-0-0"},"user_signup":{"schema":"iglu:com.tradingview/user_signup/jsonschema/1-0-0"},"trials":{"schema":"iglu:com.tradingview/trials/jsonschema/1-0-0"},"refund_transactions":{"schema":"iglu:com.tradingview/refund_transactions/jsonschema/1-0-0"},"billing":{"schema":"iglu:com.tradingview/billing/jsonschema/1-0-0"},"subscription_renewal":{"schema":"iglu:com.tradingview/subscription_renewal/jsonschema/1-0-0"},"subscription_removal":{"schema":"iglu:com.tradingview/subscription_removal/jsonschema/1-0-0"},"chargeback":{"schema":"iglu:com.tradingview/chargeback/jsonschema/1-0-0"},"news_clicks":{"schema":"iglu:com.tradingview/news_clicks/jsonschema/1-0-0"},"news_events":{"schema":"iglu:com.tradingview/news_events/jsonschema/1-0-0"},"gopro_visits":{"schema":"iglu:com.tradingview/gopro_visits/jsonschema/1-0-0"},"logins":{"schema":"iglu:com.tradingview/logins/jsonschema/1-0-0"},"referral_signup":{"schema":"iglu:com.tradingview/referral_signup/jsonschema/1-0-0"},"referral_income":{"schema":"iglu:com.tradingview/referral_income/jsonschema/1-0-0"},"referral_spending":{"schema":"iglu:com.tradingview/referral_spending/jsonschema/1-0-0"},"referral_ref_link":{"schema":"iglu:com.tradingview/referral_ref_link/jsonschema/1-0-0"},"referral_visits":{"schema":"iglu:com.tradingview/referral_visits/jsonschema/1-0-0"},"follow":{"schema":"iglu:com.tradingview/follow/jsonschema/1-0-0"},"full_featured_chart_button":{"schema":"iglu:com.tradingview/full_featured_chart_button/jsonschema/1-0-0"},"publish_ideas":{"schema":"iglu:com.tradingview/publish_ideas/jsonschema/1-0-0"},"idea_update_created":{"schema":"iglu:com.tradingview/idea_update_created/jsonschema/1-0-0"},"idea_posting_comments":{"schema":"iglu:com.tradingview/idea_posting_comments/jsonschema/1-0-0"},"publish_scripts":{"schema":"iglu:com.tradingview/publish_scripts/jsonschema/1-0-0"},"idea_likes":{"schema":"iglu:com.tradingview/idea_likes/jsonschema/1-0-0"},"trading_broker_connection_status":{"schema":"iglu:com.tradingview/trading_broker_connection_status/jsonschema/1-0-0"},"trading_order_status":{"schema":"iglu:com.tradingview/trading_order_status/jsonschema/1-0-0"},"trading_order_widget":{"schema":"iglu:com.tradingview/trading_order_widget/jsonschema/1-0-0"},"switch_year_to_month_after_fail":{"schema":"iglu:com.tradingview/switch_year_to_month_after_fail/jsonschema/1-0-0"},"switching_yearly_to_monthly":{"schema":"iglu:com.tradingview/switching_yearly_to_monthly/jsonschema/1-0-0"},"phone_verification_dialog":{"schema":"iglu:com.tradingview/phone_verification_dialog/jsonschema/1-0-0"},"copy_reserve_codes":{"schema":"iglu:com.tradingview/copy_reserve_codes/jsonschema/1-0-0"},"tv_coins_dialog_watch":{"schema":"iglu:com.tradingview/tv_coins_dialog_watch/jsonschema/1-0-0"},"set_script_permission":{"schema":"iglu:com.tradingview/set_script_permission/jsonschema/1-0-0"},"remove_script_permission":{"schema":"iglu:com.tradingview/remove_script_permission/jsonschema/1-0-0"},"change_pro_plan":{"schema":"iglu:com.tradingview/change_pro_plan/jsonschema/1-0-0"},"unsubscribe_feedback":{"schema":"iglu:com.tradingview/unsubscribe_feedback/jsonschema/1-0-0"},"unsubscribe_dialog":{"schema":"iglu:com.tradingview/unsubscribe_dialog/jsonschema/1-0-0"},"fail_on_duplicate_bt_payment_method":{"schema":"iglu:com.tradingview/fail_on_duplicate_bt_payment_method/jsonschema/1-0-0"},"trial_block_event":{"schema":"iglu:com.tradingview/trial_block_event/jsonschema/1-0-0"},"chat":{"schema":"iglu:com.tradingview/chat/jsonschema/1-0-0"},"broker_brandig_banner":{"schema":"iglu:com.tradingview/broker_brandig_banner/jsonschema/1-0-0"},"broker_profile_links_click":{"schema":"iglu:com.tradingview/broker_profile_links_click/jsonschema/1-0-0"},"streams_actions":{"schema":"iglu:com.tradingview/streams_actions/jsonschema/1-0-0"},"streams_settings_created":{"schema":"iglu:com.tradingview/streams_settings_created/jsonschema/1-0-0"},"streams_viewing_duration":{"schema":"iglu:com.tradingview/streams_viewing_duration/jsonschema/1-0-0"},"broker_open_account":{"schema":"iglu:com.tradingview/broker_open_account/jsonschema/1-0-0"},"financials_dialog":{"schema":"iglu:com.tradingview/financials_dialog/jsonschema/1-0-0"},"payment_order_dialog_initial":{"schema":"iglu:com.tradingview/payment_order_dialog_initial/jsonschema/1-0-0"},"payment_order_dialog_changes":{"schema":"iglu:com.tradingview/payment_order_dialog_changes/jsonschema/1-0-0"},"gopro_cards_clicks":{"schema":"iglu:com.tradingview/gopro_cards_clicks/jsonschema/1-0-0"},"search_toolbar":{"schema":"iglu:com.tradingview/search_toolbar/jsonschema/1-0-0"},"change_symbol":{"schema":"iglu:com.tradingview/change_symbol/jsonschema/1-0-0"},"burger_menu_click":{"schema":"iglu:com.tradingview/burger_menu_click/jsonschema/1-0-0"},"app_banner":{"schema":"iglu:com.tradingview/app_banner/jsonschema/1-0-0"},"app_link":{"schema":"iglu:com.tradingview/app_link/jsonschema/1-0-0"},"screener_high_level":{"schema":"iglu:com.tradingview/screener_high_level/jsonschema/1-0-0"},"widget_tv_link_click":{"schema":"iglu:com.tradingview/widget_tv_link_click/jsonschema/1-0-0"},"page_unload":{"schema":"iglu:com.tradingview/page_unload/jsonschema/1-0-0"},"idea_events":{"schema":"iglu:com.tradingview/idea_events/jsonschema/1-0-0"},"market_heatmap_events":{"schema":"iglu:com.tradingview/market_heatmap_events/jsonschema/1-0-0"},"toast_dialog":{"schema":"iglu:com.tradingview/toast_dialog/jsonschema/1-0-0"},"ad_dialog":{"schema":"iglu:com.tradingview/ad_dialog/jsonschema/1-0-0"},"toolbar_button_click":{"schema":"iglu:com.tradingview/toolbar_button_click/jsonschema/1-0-0"},"amp_pageview":{"schema":"iglu:dev.amp.snowplow/amp_id/jsonschema/1-0-0"},"sparks":{"schema":"iglu:com.tradingview/sparks/jsonschema/1-0-0"},"longer_billing_cycle_offer":{"schema":"iglu:com.tradingview/longer_billing_cycle_offer/jsonschema/1-0-0"},"market_data_solution":{"schema":"iglu:com.tradingview/market_data_solution/jsonschema/1-0-0"},"pine_editor_events":{"schema":"iglu:com.tradingview/pine_editor_events/jsonschema/1-0-0"},"three_d_secure":{"schema":"iglu:com.tradingview/three_d_secure/jsonschema/1-0-0"},"careers_link_click":{"schema":"iglu:com.tradingview/careers_link_click/jsonschema/1-0-0"},"toolbar_indicators":{"schema":"iglu:com.tradingview/toolbar_indicators/jsonschema/1-0-0"}}')
        }
    }
]);