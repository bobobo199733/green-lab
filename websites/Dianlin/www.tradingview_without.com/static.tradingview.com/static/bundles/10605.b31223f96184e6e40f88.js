(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [10605], {
        89501: e => {
            e.exports = {}
        },
        620212: e => {
            e.exports = {}
        },
        690936: (e, t, n) => {
            "use strict";
            n.d(t, {
                openStreamMiniPlayer: () => i
            });
            var o = n(320058);

            function i(e) {
                Promise.all([n.e(90519), n.e(10146), n.e(90926), n.e(8834), n.e(30063), n.e(33164), n.e(91774), n.e(75514), n.e(92697), n.e(98270), n.e(51701)]).then(n.bind(n, 693567)).then((t => {
                    const n = o.MiniPlayerSessionStorage.getItem(),
                        i = n ? JSON.parse(n) : null,
                        a = i ? i.time : e.currentTime ? e.currentTime : void 0,
                        s = i ? i.speed : e.currentSpeed ? e.currentSpeed : void 0,
                        r = i ? i.currentVolume : e.currentVolume ? e.currentVolume : void 0;
                    t.renderStreamMiniPlayer({
                        stream: e.stream,
                        currentTime: a,
                        currentSpeed: s,
                        currentVolume: r,
                        isTheaterMode: e.isTheaterMode,
                        setMiniModeOnPageStream: e.setMiniModeOnPageStream
                    })
                }))
            }
        },
        320058: (e, t, n) => {
            "use strict";
            n.d(t, {
                MiniPlayerSessionStorage: () => i
            });
            const o = "stream-mini-player";
            var i;
            ! function(e) {
                e.getItem = function() {
                    return window.sessionStorage.getItem(o)
                }, e.setItem = function(e, t, n, i) {
                    const a = {
                        time: t,
                        data: e,
                        url: null == e ? void 0 : e.url,
                        speed: n,
                        currentVolume: i
                    };
                    window.sessionStorage.setItem(o, JSON.stringify(a))
                }, e.removeItem = function() {
                    window.sessionStorage.removeItem(o)
                }
            }(i || (i = {}))
        },
        94772: (e, t, n) => {
            "use strict";
            n.r(t);
            n(68522);
            var o = n(575932),
                i = n(629588),
                a = n(483601),
                s = n(501867),
                r = n.n(s),
                c = n(345848),
                d = n(226722),
                l = n(685459),
                u = n.n(l),
                g = n(911905);
            const h = (0, g.getLogger)("UserSessions");
            let f, m = 0,
                p = !1,
                w = !1;
            const v = new(u());

            function _(e) {
                if (p) {
                    ChartApiInstance.connect({
                        tokenGrabSession: e
                    });
                    const t = ChartApiInstance.connectDfd;
                    return p = !1, f && (t.then((function() {
                        (0, c.trackEvent)("Auth", "Different Device Active Recovery"), f.destroy(), f = void 0
                    })), t.catch((function() {
                        p = !0
                    })), p || v.emitEvent("Session recovered")), t
                }
            }
            d.TVXWindowEvents.on("session_captured", (function() {
                _()
            })), r().on("auth", (function(e) {
                if (is_authenticated && user && user.session_hash && "active_session_changed" === e.type && e.timestamp > m) {
                    if (m = e.timestamp, user.session_hash === e.source_session && e.source_session in e.changes && "cycled" === e.changes[e.source_session].a && (user.session_hash = e.changes[e.source_session].h), user.session_hash in e.changes && "logout" === e.changes[user.session_hash].a) return void(e.source_session !== user.session_hash && (t = e.device_info, (0, i.createGoProDialog)({
                        feature: "sessionLogout",
                        customParams: t,
                        actions: [{
                            action: a.PredefinedAction.Close,
                            text: o.t("Close", {
                                context: "input"
                            })
                        }]
                    })));
                    if (!e.active_sessions) return;
                    let n = !1;
                    for (let t = e.active_sessions.length - 1; t >= 0; t--) user.session_hash === e.active_sessions[t] && (n = !0);
                    n ? f && _() : function(e) {
                        if (p) return;
                        let t = !0;
                        if (ChartApiInstance && (t = ChartApiInstance.disconnect(!0)), t) {
                            (0, c.trackEvent)("Auth", "Different Device Active Dialog"), p = !0, h.logNormal("Different device connection detected: " + JSON.stringify(e));
                            const t = function() {
                                w = !1;
                                const e = _(!0);
                                e && e.then((function() {
                                    d.TVXWindowEvents.emit("session_captured")
                                }))
                            };
                            if (!w) {
                                const n = {
                                    feature: "sessionLock",
                                    customParams: e,
                                    actionAfterClose: t,
                                    actions: [{
                                        action: a.PredefinedAction.Close,
                                        text: o.t("Connect"),
                                        onClick: t
                                    }]
                                };
                                (0, i.createGoProDialog)(n).then((() => {
                                    w = !0
                                }))
                            }
                            v.emitEvent("Session broken down.")
                        }
                    }(e.device_info)
                }
                var t
            }));
            n(583912), n(849289);
            var b = n(77034),
                y = n.n(b),
                P = n(398835);
            y().safari && (0, P.createGroup)().add({
                desc: "Prevent exit native fullscreen",
                hotkey: 27,
                handler: () => {}
            });
            n(620212);
            var S = n(324797),
                T = n(823127);

            function k(e) {
                var t = "";
                for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
                return t
            }
            var L = {
                    duration: 500,
                    show: function(e, t) {
                        if (2 === e.button) return !1;
                        var n = t || this,
                            o = document.createElement("div");
                        o.className = "tv-ripple", n.appendChild(o);
                        var i, a, s, r, c, d = (r = {
                                top: 0,
                                left: 0
                            }, c = (i = n) && i.ownerDocument, a = c.documentElement, void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()), s = function(e) {
                                return null !== (t = e) && t === t.window ? e : 9 === e.nodeType && e.defaultView;
                                var t
                            }(c), {
                                top: r.top + s.pageYOffset - a.clientTop,
                                left: r.left + s.pageXOffset - a.clientLeft
                            }),
                            l = e.pageY - d.top,
                            u = e.pageX - d.left,
                            g = "scale(" + n.clientWidth / 100 * 10 + ")";
                        "touches" in e && (l = e.touches[0].pageY - d.top, u = e.touches[0].pageX - d.left), o.setAttribute("data-hold", Date.now()), o.setAttribute("data-scale", g), o.setAttribute("data-x", u), o.setAttribute("data-y", l);
                        var h = {
                            top: l + "px",
                            left: u + "px"
                        };
                        o.className = o.className + " tv-ripple--notransition", o.setAttribute("style", k(h)), o.className = o.className.replace("tv-ripple--notransition", ""), h.opacity = "1", h["-webkit-transform"] = h["-moz-transform"] = h["-ms-transform"] = h["-o-transform"] = h.transform = g, h["-webkit-transition-duration"] = h["-moz-transition-duration"] = h["-o-transition-duration"] = h["transition-duration"] = L.duration + "ms", h["-webkit-transition-timing-function"] = h["-moz-transition-timing-function"] = h["-o-transition-timing-function"] = h["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", o.setAttribute("style", k(h))
                    },
                    hide: function(e) {
                        C.touchup(e);
                        var t = this,
                            n = null,
                            o = t.getElementsByClassName("tv-ripple");
                        if (!(o.length > 0)) return !1;
                        var i = (n = o[o.length - 1]).getAttribute("data-x"),
                            a = n.getAttribute("data-y"),
                            s = n.getAttribute("data-scale"),
                            r = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
                        r < 0 && (r = 0), setTimeout((function() {
                            var e = {
                                top: a + "px",
                                left: i + "px",
                                opacity: "0",
                                "-webkit-transition-duration": L.duration + "ms",
                                "-moz-transition-duration": L.duration + "ms",
                                "-o-transition-duration": L.duration + "ms",
                                "transition-duration": L.duration + "ms",
                                "-webkit-transform": s,
                                "-moz-transform": s,
                                "-ms-transform": s,
                                "-o-transform": s,
                                transform: s
                            };
                            n.setAttribute("style", k(e)), setTimeout((function() {
                                try {
                                    t.removeChild(n)
                                } catch (e) {
                                    return !1
                                }
                            }), L.duration)
                        }), r)
                    }
                },
                C = {
                    touches: 0,
                    allowEvent: function(e) {
                        var t = !0;
                        return "touchstart" === e.type ? C.touches += 1 : "touchend" === e.type || "touchcancel" === e.type ? setTimeout((function() {
                            C.touches > 0 && (C.touches -= 1)
                        }), 500) : "mousedown" === e.type && C.touches > 0 && (t = !1), t
                    },
                    touchup: function(e) {
                        C.allowEvent(e)
                    }
                };

            function D(e) {
                var t = function(e) {
                    if (!1 === C.allowEvent(e)) return null;
                    for (var t = null, n = e.target || e.srcElement; null != n.parentElement;) {
                        if (!(n instanceof SVGElement || -1 === n.className.indexOf("tv-ripple"))) {
                            t = n;
                            break
                        }
                        if (!(n instanceof SVGElement) && -1 !== n.className.indexOf("js-ripple")) {
                            t = n;
                            break
                        }
                        n = n.parentElement
                    }
                    return t
                }(e);
                null !== t && (L.show(e, t),
                    "ontouchstart" in window && (t.addEventListener("touchend", L.hide, !1), t.addEventListener("touchcancel", L.hide, !1)), t.addEventListener("mouseup", L.hide, !1), t.addEventListener("mouseleave", L.hide, !1))
            }
            T.fn.tvRipple = (0, S.createTvBlockWithInstance)("tv-ripple", (function(e, t = {}) {
                return e[0].addEventListener("mousedown", D, !1), e
            })), T((function() {
                T(document.body).tvRipple()
            }));
            var E = n(876242),
                A = n(190443),
                I = n(823127),
                M = n(725977);
            class $ {
                constructor(e = {}) {
                    this.opened = !1, this.animated = !1, this.$el = e.$el, this.delegateEvents(), this.$el.addClass("i-inited")
                }
                delegateEvents() {
                    this.$body = this.$el.find(".js-expand__body").first(), this.$el.find(".js-expand__title").first().off("click.js-expand").on("click.js-expand", (e => {
                        e.isDefaultPrevented() || this.toggle()
                    }))
                }
                setOpened(e) {
                    this.opened = e
                }
                setPause(e) {
                    this.paused = e
                }
                toggle() {
                    this[this.opened ? "close" : "open"]()
                }
                open(e = !1) {
                    if (!(this.animated || this.opened || this.paused)) {
                        if (this.opened = !0, this.animated = !0, this.$el.addClass("i-dropped").trigger("beforeOpen"), e) return this.$body.removeClass("i-hidden"), this.$el.trigger("afterOpen"), void(this.animated = !1);
                        (0, A.lazyVelocity)().then((() => {
                            this.$body.css("opacity", 0).velocity("slideDown", {
                                queue: !1,
                                easing: "easeOutCubic",
                                duration: .75 * E.dur,
                                complete: () => {
                                    this.$body.removeClass("i-hidden")
                                }
                            }).velocity({
                                opacity: 1
                            }, {
                                queue: !1,
                                easing: "easeOutCubic",
                                duration: .5 * E.dur,
                                delay: .75 * E.dur,
                                complete: () => {
                                    this.$body.attr("style", ""), this.$el.trigger("afterOpen"), this.animated = !1
                                }
                            })
                        }))
                    }
                }
                close(e = !1) {
                    if (!this.animated && this.opened && !this.paused) {
                        if (this.opened = !1, this.animated = !0, this.$el.removeClass("i-dropped").trigger("beforeClose"), e) return this.$body.addClass("i-hidden"), this.$el.trigger("beforeClose"), void(this.animated = !1);
                        (0, A.lazyVelocity)().then((() => {
                            this.$body.velocity({
                                opacity: 0
                            }, {
                                queue: !1,
                                easing: "easeOutCubic",
                                duration: .5 * E.dur
                            }).velocity("slideUp", {
                                queue: !1,
                                easing: "easeOutCubic",
                                duration: .75 * E.dur,
                                delay: .5 * E.dur,
                                complete: () => {
                                    this.$body.attr("style", "").addClass("i-hidden"), this.$el.trigger("afterClose"), this.animated = !1
                                }
                            })
                        }))
                    }
                }
            }
            I.fn.tvExpand = (0, S.createTvBlockWithInstance)("tv-expand", (function(e, t = {}) {
                return new $(M.extend(t, {
                    $el: e
                }))
            }));
            n(223948), n(487389);
            var x = n(247872),
                O = n.n(x),
                V = n(314370),
                N = n.n(V),
                R = n(638456),
                j = n(174519);

            function F(e) {
                const t = e.target,
                    n = t.closest && t.closest(":link");
                n && n.target && n.relList && n.relList.add("noopener")
            }
            var G = n(43464),
                B = n(261030);

            function U() {
                var e;
                const t = null === (e = (0, R.desktopAppVersion)()) || void 0 === e ? void 0 : e.match(/beta.(\d+)/);
                ((0, R.isWindows)() || (0, R.isMac)()) && t && Number(t[1]) <= 15 && async function() {
                    const {
                        showUpdateAppDialog: e,
                        updateDesktopAppDialogKey: t,
                        dialogHideValue: o
                    } = await Promise.all([n.e(90519), n.e(90926), n.e(8834), n.e(30063), n.e(99740), n.e(77301), n.e(75966), n.e(31402), n.e(75514), n.e(24377), n.e(92697), n.e(38578), n.e(84268), n.e(89137), n.e(7333)]).then(n.bind(n, 158734));
                    window.sessionStorage.getItem(t) !== o && e()
                }()
            }
            var q = n(86674);
            async function Y() {
                const e = await Promise.all([n.e(10146), n.e(17967), n.e(42270), n.e(91077), n.e(75514), n.e(13830), n.e(59805)]).then(n.bind(n, 770025));
                await e.showSurveyToast() && async function() {
                    (await Promise.all([n.e(90519), n.e(90926), n.e(8834), n.e(30063), n.e(99740), n.e(81822), n.e(75514), n.e(92697), n.e(36320)]).then(n.bind(n, 555888))).renderSurveyDialog()
                }(), (0, q.fetch)("/api/v1/users/accept-survey/", {
                    method: "POST",
                    credentials: "include"
                })
            }
            var z = n(320058),
                W = n(690936),
                H = n(560507),
                J = n(833813),
                Q = n(271754),
                X = n(514998),
                K = n(691805),
                Z = n(588948);
            var ee = n(125226);
            var te = n(619101),
                ne = n(380014),
                oe = n(814520),
                ie = n(922664),
                ae = n(12481),
                se = n(49437),
                re = n(175203),
                ce = n(95935);
            const de = "activeBrowserTabsCounter";
            let le = null;
            class ue {
                constructor() {
                    this._isMasterTab = !1, this._lastState = {
                        tabs: [],
                        ts: 0
                    }, this._sendReport = (0, ae.default)(((e, t) => {
                        this._isMasterTab && (re.telemetry.sendReport("site", "browsers_tabs_ratio_frame", {
                            value: e
                        }), re.telemetry.sendReport("site", "browsers_tabs_count_frame", {
                            value: t
                        }))
                    }), 2e4), this._guid = (0, ce.guid)(), this._initTimer()
                }
                unregisterTab() {
                    clearInterval(this._timerId);
                    const e = this._getState();
                    e.tabs = e.tabs.filter((e => e[0] !== this._guid)), e.ts = Date.now(), this._setState(e)
                }
                static getInstance() {
                    return null === le && (le = new ue), le
                }
                _checkIsMaster(e) {
                    const t = 0 === e.tabs.length,
                        n = Date.now() - e.ts > 2e4;
                    return t || n || e.tabs[0][0] === this._guid
                }
                _countVisibleTabsRatio(e) {
                    const t = e.reduce(((e, t) => e + ("visible" === t[1] ? 1 : 0)), 0);
                    return Math.round(t / e.length * 100)
                }
                _getState() {
                    const e = se.TVLocalStorage.getItem(de),
                        t = null !== e ? JSON.parse(e) : this._lastState;
                    return this._lastState = t, t
                }
                _setState(e) {
                    se.TVLocalStorage.setItem(de, JSON.stringify(e))
                }
                _pulse() {
                    const e = this._lastState.tabs,
                        t = document.visibilityState,
                        n = this._getState(),
                        o = n.tabs.find((e => e[0] === this._guid)),
                        i = this._isMasterTab;
                    this._isMasterTab = this._checkIsMaster(n);
                    const a = !i && this._isMasterTab;
                    if (void 0 !== o && o[1] !== t && (o[1] = t), a) n.tabs = [
                        [this._guid, t]
                    ], n.ts = Date.now(), this._isMasterTab = !0, this._sendReport(100, 1);
                    else if (this._isMasterTab) {
                        n.ts = Date.now();
                        const t = this._countVisibleTabsRatio(e),
                            o = this._countVisibleTabsRatio(n.tabs);
                        t !== o && this._sendReport(o, n.tabs.length)
                    } else void 0 === o && n.tabs.push([this._guid, t]);
                    this._setState(n)
                }
                _initTimer() {
                    this._pulse(), this._timerId = setInterval((() => this._pulse()), 1e4)
                }
            }
            var ge = n(46277),
                he = n(910288),
                fe = n(823127),
                me = n(823127);
            const pe = (0, g.getLogger)("Chart.Base");
            var we;
            if (window.initData.lfs && (we = O().prototype.disconnect, O().prototype.disconnect = function(e) {
                    e || we.call(this)
                }), fe.error = function(e) {
                    (0, c.trackEvent)("jQuery Error", e, navigator.userAgent)
                }, loginStateChange.subscribe(window, (function(e) {
                    if (user && is_authenticated) {
                        TVLocalStorage.getItem("paid_account_username") && TVLocalStorage.removeItem("paid_account_username");
                        const e = TVLocalStorage.getItem("last_username"),
                            t = TVLocalStorage.getItem("previous_username");
                        e !== user.username && (TVLocalStorage.setItem("last_username", user.username), e && e !== t && (TVLocalStorage.setItem("previous_username", e), (0, oe.paidAccountCheck)({
                            isNeedCancelButton: !0
                        }).catch((() => {}))))
                    } else {
                        const e = TVLocalStorage.getItem("paid_account_username");
                        e && Promise.resolve().then(n.bind(n, 231039)).then((t => t.showSignModal({
                            source: "Paid Account Popup",
                            username: e
                        })))
                    }
                    e || (0,
                        j.reconnectChartApi)()
                })), me((function() {
                    me(".js-expand").tvExpand(), "#signin" === window.location.hash ? Promise.resolve().then(n.bind(n, 231039)).then((e => e.showSignModal({
                        source: "Redirect"
                    }))) : "#signup" === window.location.hash && Promise.resolve().then(n.bind(n, 231039)).then((e => e.showSignModal({
                        mode: "signup",
                        source: "Redirect"
                    }))), me(".tv-control-material-input").tvControlMaterial(), me(".js-time-upd").timeUpdate(), (0, R.checkPageType)("mobile") ? B.cookieSettingsReady.resolve() : (0, G.initCookiesNotification)().then((() => {
                        const e = (0, ie.placementFromPageLocation)();
                        e && (0, Q.initTrialToast)("chart").then((async () => {
                            if ((0, H.enabled)(J.ProductFeatures.NO_SPONSORED_ADS)) return;
                            let t = !0;
                            "ru" === window.locale && (0, ee.isFeatureEnabled)("careers_toast") && (t = !await async function() {
                                return (await Promise.all([n.e(10146), n.e(17967), n.e(42270), n.e(91077), n.e(98567), n.e(75514), n.e(13830), n.e(13087)]).then(n.bind(n, 550847))).initNotification()
                            }()), t && await Promise.all([Promise.all([n.e(17967), n.e(35199), n.e(83639)]).then(n.bind(n, 669551)), Promise.all([n.e(42270), n.e(91077), n.e(75514), n.e(13830), n.e(94291)]).then(n.bind(n, 13830))]).then((([t, n]) => {
                                new t.PlatformPlacement(n.globalToasts, !1, e).display()
                            }))
                        }))
                    })), (0, ee.isFeatureEnabled)("desktop_version_notification_enabled") && (0, R.isDesktopApp)() && U(), window.initData.show_idc_dialog ? n.e(9726).then(n.bind(n, 198820)).then((e => {
                        e.showIdcAgreementDialog()
                    })) : (window.initData.banned_payments && Promise.all([n.e(22850), n.e(15107), n.e(55099), n.e(84845), n.e(50407), n.e(71452), n.e(25977), n.e(56456), n.e(29098), n.e(29201)]).then(n.bind(n, 529098)).then((({
                        warningDialog: e
                    }) => {
                        e({
                            title: (0, o.t)("Notification"),
                            content: "<p>" + (0, o.t)("Due to suspicious activity in your account, we had to block you from making any new purchases. Please contact our support team to resolve the issue. Thank you for understanding.") + "</p>",
                            closeButtonText: (0, o.t)("Close", {
                                context: "input"
                            })
                        }).open()
                    })), window.initData.show_user_survey && Y())
                })), TradingView.onChartPage || (pe.logNormal("low quality mode is enabled"), ChartApiInstance.enableLowQualityMode()), window.pro = new(N())(window.shopConf), loginStateChange.fire(!0), n.e(38578).then(n.t.bind(n, 404649, 23)).then((({
                    default: e
                }) => {
                    e.init()
                })), !window.is_authenticated) {
                const e = e => {
                        "1" !== TVLocalStorage.getItem(e) && (Promise.all([n.e(10146), n.e(90926), n.e(99740), n.e(15107), n.e(77301), n.e(55099), n.e(84845), n.e(75966), n.e(50407), n.e(71452), n.e(73836), n.e(46850), n.e(75514), n.e(24377), n.e(36057)]).then(n.bind(n, 52445)).then((e => e.createReferralWelcomeDialog())).then((function(e) {
                            e.open()
                        })), TVLocalStorage.setItem(e, "1"))
                    },
                    t = (0, X.getUrlParams)(),
                    o = t.share_your_love,
                    i = t.aff_id;
                if (i || o) {
                    const n = window.location.hostname.split("."),
                        a = n.slice(1, n.length).join(".");
                    if (i && i.length <= 32) {
                        (0, c.trackEvent)("Affiliate Program", "Referral Visit (Direct)", i);
                        const n = {
                            aff_id: i
                        };
                        [{
                            key: "source",
                            maxLength: 64
                        }, {
                            key: "aff_sub",
                            maxLength: 64
                        }, {
                            key: "url_id",
                            maxLength: 256
                        }, {
                            key: "file_id",
                            maxLength: 256
                        }, {
                            key: "aff_sub2",
                            maxLength: 64
                        }, {
                            key: "aff_sub3",
                            maxLength: 64
                        }, {
                            key: "aff_unique1",
                            maxLength: 64
                        }, {
                            key: "aff_click_id",
                            maxLength: 64
                        }, {
                            key: "file_id",
                            maxLength: 256
                        }].forEach((e => {
                            const o = e.key;
                            t[o] && t[o].length <= e.maxLength && (n[o] = t[o])
                        }));
                        const o = `${window.location.origin}${window.location.pathname}`;
                        n.target_link = o, ne.PartnerAPI.addClick({
                            target_link: o,
                            aff_id: n.aff_id,
                            aff_sub: n.aff_sub,
                            aff_source: n.source,
                            aff_unique1: n.aff_unique1,
                            aff_sub2: n.aff_sub2,
                            aff_sub3: n.aff_sub3,
                            aff_click_id: n.aff_click_id,
                            file_id: n.file_id,
                            url_id: n.url_id
                        }).catch((e => pe.logNormal(`Service Partner Program - request error - ${e}`))), he.set("direct_affiliate_params", JSON.stringify(n), 90, "/", a ? `.${a}` : ""), e("seen_by_direct_link")
                    } else o && o.length <= 150 && (he.set("_referralProgramId", o, 0, "/", a ? `.${a}` : ""), e("seen_by_referral_program_link"))
                }
            }
            if (document.addEventListener("click", F, !0), n.e(14436).then(n.bind(n, 231326)).then((e => {
                    (new e.GdprNotification).showIfNotAccepted()
                })), n.e(72226).then(n.bind(n, 727655)).then((e => {
                    e.openSupportDialogOnLoad()
                })), n.e(14309).then(n.bind(n, 249310)).then((e => {
                    e.openPaymentOrderDialogOnLoad()
                })), n.e(99140).then(n.bind(n, 130179)).then((e => {
                    e.openCoinsDialogOnLoad()
                })), (async () => {
                    await Promise.all([n.e(10146), n.e(5979), n.e(3086), n.e(72066), n.e(22850), n.e(15107), n.e(89806), n.e(77301), n.e(37619), n.e(33216), n.e(89587), n.e(59379), n.e(25773), n.e(98432), n.e(10833), n.e(77846), n.e(30170), n.e(36325), n.e(90375), n.e(68945), n.e(53018), n.e(58815), n.e(66138), n.e(75514), n.e(24377), n.e(20651), n.e(61909), n.e(26612), n.e(77297), n.e(60550), n.e(89568)]).then(n.t.bind(n, 201880, 23))
                })(), !window.is_authenticated && (0, ee.isFeatureEnabled)("google-one-tap-signin") && function() {
                    if (!window.GOOGLE_CLIENT_ID || (0, Z.getFreshInitData)().googleSigninPopupDisabled) return;
                    (0, K.appendScript)("https://accounts.google.com/gsi/client"), window.handleGoogleCredentialResponse = e => {
                        const t = (0, X.getUrlParams)();
                        (0, c.trackEvent)("Login", "one tap sign in"), window.open(`/accounts/complete/android-jwt/?token=${e.credential}&feature_source=google_one_tap&utm_source=${t.utmsource}&utm_medium=${t.utmmedium}`)
                    };
                    const e = document.createElement("div");
                    e.setAttribute("id", "g_id_onload"), e.setAttribute("data-client_id", window.GOOGLE_CLIENT_ID), e.setAttribute("data-callback", "handleGoogleCredentialResponse"), document.body.appendChild(e)
                }(), window.initData.offlineAlertEventsOnInit && !window.TradingView.onChartPage && Promise.all([n.e(75514), n.e(49680), n.e(81579), n.e(91046)]).then(n.bind(n, 871386)).then((({
                    tryInitAlertsNotifications: e
                }) => e())), async function() {
                    (await Promise.all([n.e(10146), n.e(17967), n.e(42270), n.e(91077), n.e(862), n.e(75514), n.e(24377), n.e(13830), n.e(97276)]).then(n.bind(n, 193e3))).initNotification()
                }(), document.addEventListener("DOMContentLoaded", (function() {
                    document.addEventListener("click", (e => {
                        if (e.target.matches(".js-open-support-dialog") && ((0, te.showSupportDialog)(), e.preventDefault()), e.target.search && !1 === window.location.pathname.startsWith("/support")) {
                            const t = (0, X.getQueryParams)(e.target.search.substring(1));
                            if ("solution" in t) {
                                const n = t.solution.match(/[a-zA-Z\_]+/g)[0],
                                    o = window.user.id.toString();
                                (0, te.showSupportDialog)({
                                    solutionId: parseInt(t.solution, 10)
                                }), n && (0,
                                    ge.trackSocialNetworkEvent)(n, ge.DialogAction.OpenSolution, o), e.preventDefault()
                            }
                        }
                    }))
                })), (0, ee.isFeatureEnabled)("count-browser-tabs")) {
                const e = ue.getInstance();
                window.addEventListener("unload", (() => e.unregisterTab()))
            }
            try {
                var ve = z.MiniPlayerSessionStorage.getItem();
                null !== ve && (window.location.pathname.startsWith("/streams") && 0 !== window.location.pathname.split("/streams/")[1].length ? z.MiniPlayerSessionStorage.removeItem() : (0, W.openStreamMiniPlayer)({
                    stream: JSON.parse(ve).data
                }))
            } catch (e) {}
        },
        137934: (e, t, n) => {
            "use strict";
            n.d(t, {
                AdUnit: () => p,
                Placement: () => w,
                getAdUnitPath: () => v,
                displaySlot: () => b,
                isEnabled: () => y,
                trackAdDialogEvent: () => P
            });
            var o = n(251954),
                i = n(691805),
                a = n(261030),
                s = n(588948),
                r = n(125226),
                c = n(638456),
                d = n(143498),
                l = n(66974),
                u = n(809965),
                g = n(175203),
                h = n(776734);
            let f = !1;
            const m = {};
            var p, w;
            async function v(e) {
                const t = (0, d.isRtl)();
                if (!t && void 0 === e.darkLtr) return e.lightLtr;
                if (t && void 0 === e.darkRtl) return e.lightRtl;
                const [{
                    StdTheme: o
                }, {
                    getCurrentTheme: i
                }] = await Promise.all([Promise.all([n.e(24377), n.e(19346)]).then(n.bind(n, 919346)), Promise.all([n.e(24377), n.e(85518), n.e(23812)]).then(n.bind(n, 440135))]), a = (0, s.getInitData)().theme || i().name;
                return t ? a === o.Dark && e.darkRtl ? e.darkRtl : e.lightRtl : a === o.Dark && void 0 !== e.darkLtr ? e.darkLtr : e.lightLtr
            }
            async function _(e, t) {
                return f || ((0, i.appendScript)("https://securepubads.g.doubleclick.net/tag/js/gpt.js"), window.googletag = window.googletag || {
                    cmd: []
                }, f = !0, o.subscribe(a.cookieSettingsChangeEvent, ((e, t) => {
                    e === a.CookieSettings.Advertising && window.googletag.cmd.push((() => {
                        window.googletag.pubads().setPrivacySettings({
                            nonPersonalizedAds: !t
                        }), window.googletag.pubads().refresh()
                    }))
                }), null)), new Promise((n => {
                    window.googletag.cmd.push((() => {
                        if (m[e.adUnitPath]) {
                            const t = m[e.adUnitPath].onDestroy;
                            void 0 !== t && t(), window.googletag.destroySlots([m[e.adUnitPath].slot])
                        }
                        const o = window.googletag.defineSlot(e.adUnitPath, e.size, e.optDiv);
                        let i = "web";
                        window.TVD && (i = "tvd"), c.CheckMobile.any() && (i = "mobile_web"), m[e.adUnitPath] = {
                            slot: o
                        }, void 0 !== t && (m[e.adUnitPath].onDestroy = t), o.addService(window.googletag.pubads()), window.googletag.pubads().setPrivacySettings({
                            nonPersonalizedAds: !(0, a.getCookieSetting)(a.CookieSettings.Advertising)
                        }), window.googletag.pubads().enableSingleRequest(), window.googletag.pubads().setTargeting("locale", window.locale), window.googletag.pubads().setTargeting("env", (0, l.isProd)() ? "battle" : "staging"), window.googletag.pubads().setTargeting("app", i), window.googletag.enableServices(), n(o)
                    }))
                }))
            }
            async function b(e, t, n, o) {
                const i = await _(e, n),
                    a = setTimeout((() => {
                        t(!0)
                    }), 3e3);
                window.googletag.cmd.push((() => {
                    const n = o => {
                        o.slot === i && (clearTimeout(a), t(o.isEmpty), o.isEmpty || g.telemetry.sendReport("site", `${e.placementId}_ad_slot_shown`)), window.googletag.pubads().removeEventListener("slotRenderEnded", n)
                    };
                    if (window.googletag.pubads().addEventListener("slotRenderEnded", n), void 0 !== o) {
                        const e = t => {
                            t.slot === i && o(), window.googletag.pubads().removeEventListener("impressionViewable", e)
                        };
                        window.googletag.pubads().addEventListener("impressionViewable", e)
                    }
                    window.googletag.display(e.optDiv)
                })), g.telemetry.sendReport("site", `${e.placementId}_ad_slot_display`)
            }

            function y() {
                var e;
                return (0, r.isFeatureEnabled)("google-ads") && (null === (e = window.user.active_broker) || void 0 === e ? void 0 : e.plan) !== u.BrokerPlansIds.Platinum
            }
            async function P(e, t, n, o) {
                const i = await (0, h.getTracker)();
                i && i.trackAdDialog(e, t, n, o, window.is_authenticated ? "free" : "visitor")
            }! function(e) {
                e.IdeasStream = "ideas stream", e.Platform = "platform", e.PublishedIdea = "published idea"
            }(p || (p = {})),
            function(e) {
                e.Symbols = "symbols", e.Platform = "platform", e.OpenedIdea = "opened idea", e.Feeds = "feeds", e.HeatMap = "heatmap", e.Screener = "screener"
            }(w || (w = {}))
        },
        922664: (e, t, n) => {
            "use strict";
            n.d(t, {
                placementFromPageLocation: () => i
            });
            var o = n(137934);

            function i() {
                if (window.TradingView.onChartPage) return o.Placement.Platform;
                const e = window.location.pathname;
                return e.startsWith("/heatmap") ? o.Placement.HeatMap : /^\/(crypto-|forex-)?screener\//.test(e) ? o.Placement.Screener : ""
            }
        },
        324797: (e, t, n) => {
            "use strict";
            var o = n(823127);
            const i = n(911905).getLogger("CommonUI.CreateTVBlockPlugin");
            e.exports.createTvBlockWithInstance = function(e, t) {
                if (e && t) return e = e.toString(),
                    function(a, s, r) {
                        var c, d, l;
                        return "get" === a ? c = s : (d = s, "object" == typeof a && void 0 === s ? (d = a, a = "init") : "string" != typeof a && (a = "init")), "getInstance" === a ? o(this).eq(0).data(e) : "destroy" === a ? (l = o(this).eq(0).data(e)) ? void("function" == typeof l.destroy ? (n(l, "destroy", d), o(this).eq(0).removeData(e)) : i.logError("[Block Plugin] " + e + " does not support destroy command")) : void console.warn("[Block Plugin] Trying to execute destroy method of " + e + " but it has not been inited") : "get" === a ? (l = o(this).eq(0).data(e)) ? "function" == typeof l[c] ? n(l, c, r) : l[c] : void console.warn("[Block Plugin] Trying to get prop or execute method of " + e + " but it has not been inited") : o(this).each((function() {
                            var s = o(this),
                                r = s.data(e);
                            void 0 === r && (r = void 0 === d ? t(s) : t(s, d), s.data(e, r)), "init" !== a && ("function" == typeof r[a] ? n(r, a, d) : i.logError("[Block Plugin] " + e + " does not support command " + a))
                        }))
                    };

                function n(e, t, n) {
                    return void 0 === n ? e[t]() : e[t](n)
                }
            }
        },
        223948: (e, t, n) => {
            "use strict";
            n.d(t, {
                controlMaterial: () => s
            });
            n(89501);
            var o = n(324797),
                i = n(823127);
            class a {
                constructor(e, t = {}) {
                    var n = e.prop("tagName").toLowerCase(),
                        o = e.prop("readonly"),
                        a = e.prop("disabled"),
                        s = `tv-control-material-${n}`,
                        r = i(document.createElement("span")).addClass(`${s}__label`).text(e.attr("placeholder") || ""),
                        c = i(document.createElement("div")).addClass(`${s}__wrap`),
                        d = e.get(0);
                    if (d && d.classList) {
                        for (var l = [], u = 0; u < d.classList.length; u++) {
                            var g = d.classList[u];
                            if (g.includes(s)) {
                                const e = g.replace(s, "");
                                e && l.push(e)
                            }
                        }
                        for (u = 0; u < l.length; u++) r.addClass(`${s}__label${l[u]}`), c.addClass(`${s}__wrap${l[u]}`)
                    }
                    e.attr("placeholder", "").removeClass(`tv-control-${n}`).addClass(`tv-control-material-${n}__control `).wrap(c).after(r), this.$el = e.parent(), e.on("focus", (() => {
                        o || a || r.addClass("i-up")
                    })), e.on("blur", (() => {
                        "" === e.val() && r.removeClass("i-up")
                    })), e.on("change", (() => {
                        "" !== e.val() && r.addClass("i-up")
                    })), this.$el.on("click", (() => {
                        e.focus()
                    })), "" !== e.attr("value") && void 0 !== e.attr("value") && r.addClass("i-up")
                }
            }

            function s(e, t) {
                return new a(i(e), t)
            }
            i.fn.tvControlMaterial = (0, o.createTvBlockWithInstance)("tv-control-material", (function(e, t) {
                return new a(e, t)
            }))
        },
        926904: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                agoDateFormatter: () => h,
                destroy: () => m,
                getFormattedDataByDate: () => u,
                jQueryCompatibleAgoDateFormatter: () => g,
                jQueryCompatibleDestroy: () => f,
                shortFormat: () => p
            });
            var o = n(575932),
                i = n(735357);
            const a = {
                    L: "MMM D",
                    LL: "YYYY MMM D",
                    LLL: "HH:mm - YYYY MMM D"
                },
                s = {
                    ja: a,
                    ko: a
                };

            function r(e) {
                return 6e4 - e % 6e4
            }

            function c(e) {
                const t = 36e5;
                return t - e % t
            }

            function d(e) {
                const t = 864e5;
                return t - e % t
            }

            function l(e) {
                const t = e.getAttribute("data-ago-date-timer");
                t && clearTimeout(+t)
            }

            function u({
                date: e,
                forceAgoFormat: t,
                customDateFormat: n,
                customDateFormatLocale: o
            }) {
                i.relativeTimeThreshold("h", 24), "number" == typeof e && (e = new Date(e));
                const a = i(new Date).diff(e),
                    l = function(e) {
                        let t = 200;
                        if ((e = Math.floor(e / 6e4)) < 60) t += r(e);
                        else if (e < 1440) t += c(e);
                        else {
                            if (!(e < 43200)) return 0;
                            t += d(e)
                        }
                        return t
                    }(a),
                    u = s[window.language];
                let g = "",
                    h = {
                        L: "L",
                        LL: "LL",
                        LLL: "LLL"
                    };
                u && (h = u), o && (h.LLL = o), g = t || Math.round(a / 36e5) < 24 ? i(e).fromNow() : n ? i(e).format(n) : e.getFullYear() === (new Date).getFullYear() ? i(e).format(h.L) : i(e).format(h.LL);
                return {
                    diff: a,
                    formattedDate: i(e).format(h.LLL),
                    text: g,
                    updateTimeout: l
                }
            }

            function g(e, t, n, o, i) {
                const a = Array.from(e);
                for (const e of a) h(e, t, n, o, i)
            }

            function h(e, t, n, o, i) {
                const {
                    diff: a,
                    formattedDate: s,
                    text: r,
                    updateTimeout: c
                } = u({
                    date: t,
                    forceAgoFormat: n,
                    customDateFormat: i
                }), d = e.parentElement;
                if (null !== d && d.classList.toggle("just-now", a < 45e3), e.setAttribute("title", s), e.textContent = r, c) {
                    l(e);
                    const n = setTimeout((() => {
                        h(e, t)
                    }), c);
                    e.setAttribute("data-ago-date-timer", n.toString())
                } else e.removeAttribute("data-ago-date-timer");
                if (o) {
                    const t = e.closest(".js-visible-after-ago-formatter-inited");
                    null !== t && t.classList.remove("i-invisible", "js-visible-after-ago-formatter-inited")
                }
            }

            function f(e) {
                const t = Array.from(e);
                for (const e of t) m(e)
            }

            function m(e) {
                l(e);
                const t = Array.from(e.querySelectorAll("[data-ago-date-timer]"));
                for (const e of t) l(e)
            }

            function p(e) {
                let t = Math.floor(e / 6e4),
                    n = "",
                    i = 0;
                return t < 60 ? (n = (t < 1 ? 0 : t) + o.t("m", {
                    context: "date_diff_short"
                }), i = r(e)) : t < 1440 ? (t = Math.floor(t / 60), n = t + o.t("h", {
                    context: "date_diff_short"
                }), i = c(e)) : t < 43200 ? (t = Math.floor(t / 1440), n = t + o.t("d", {
                    context: "date_diff_short"
                }), i = d(e)) : t < 15768e3 ? (t = Math.floor(t / 43200), n = t + o.t("mn", {
                    context: "date_diff_short"
                })) : (t = Math.floor(t / 15768e3), n = t + o.t("y", {
                    context: "date_diff_short"
                })), i && (i += 200), {
                    text: n,
                    timeout: i
                }
            }
        },
        271754: (e, t, n) => {
            "use strict";
            n.d(t, {
                initTrialToast: () => c,
                trialToast: () => r
            });
            var o = n(72694);
            var i = n(638456),
                a = n(314802);
            class s {
                showAfterTimeout(e, t) {
                    !window.is_authenticated || o.OFFERS.trial in window.user.available_offers ? this._timeoutId = setTimeout((async () => {
                        if (window.is_authenticated && !(o.OFFERS.trial in window.user.available_offers)) return void t();
                        const {
                            globalToasts: i
                        } = await Promise.all([n.e(42270), n.e(91077), n.e(75514), n.e(13830), n.e(94291)]).then(n.bind(n, 13830));
                        !async function(e, t, o) {
                            (await Promise.all([n.e(10146), n.e(17967), n.e(16712), n.e(24377), n.e(64278)]).then(n.bind(n, 534666))).showTrialNotification(e, t, o)
                        }(i, e, t)
                    }), 3e4) : t()
                }
                clear() {
                    clearTimeout(this._timeoutId)
                }
                static getInstance() {
                    return s._instance || (s._instance = new s), s._instance
                }
            }

            function r() {
                return s.getInstance()
            }

            function c(e) {
                return (0, a.isOnMobileAppPage)("any") || i.CheckMobile.Android() || window.TVD || !window.TradingView.onChartPage ? Promise.resolve() : new Promise((t => {
                    r().showAfterTimeout(e, (() => (t(), Promise.resolve())))
                }))
            }
        },
        380014: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                PayoutHistoryType: () => r,
                PartnerAPI: () => c,
                getPartnerDetails: () => g
            });
            const o = window.initData.tvPartnersHost,
                i = `${o}/api/v1`;
            var a, s, r, c;

            function d(e) {
                return `${i}${e}/`
            }

            function l(e, t, n, o) {
                let i = d(e);
                return t && !n && (i = d(`${e}/${t}`)), t && n && (i = d(`${e}/${t}/${n}`)), o && (i += `?sort=${o}`), i
            }
            async function u(e, t, n) {
                const o = {
                    method: e,
                    credentials: "include"
                };
                return o.headers = new Headers, o.headers.set("Content-Type", "application/json"), o.headers.set("Accept", "application/json"), void 0 !== n && (o.body = JSON.stringify(n)), fetch(t, o).then((e => e.json())).then((e => {
                    if (e.error) throw new Error(e.error);
                    return e
                }))
            }
            async function g() {
                const e = {
                    method: "GET"
                };
                return e.headers = new Headers, e.headers.set("Content-Type", "application/json"), fetch("/partners/details/").then((e => e.json()))
            }! function(e) {
                e.Paypal = "paypal"
            }(a || (a = {})),
            function(e) {
                e.USD = "usd"
            }(s || (s = {})),
            function(e) {
                e.Pending = "pending", e.Completed = "completed", e.DjangoError = "django_eror", e.PayoutError = "payout_error"
            }(r || (r = {})),
            function(e) {
                e.isPartner = async function() {
                    return u("GET", d("/is-partner"))
                }, e.createPartner = async function(e) {
                    return u("POST", d("/partner"), e)
                }, e.getStats = async function(e, t, n) {
                    return u("GET", l("/stats", e, t, n))
                }, e.getReport = async function(e, t) {
                    return u("GET", l("/report", e, t))
                }, e.getReportCSV = async function(e, t) {
                    return u("GET", l("/report-csv", e, t))
                }, e.getHistory = async function() {
                    return u("GET", d("/history"))
                }, e.getConversionReport = async function(e, t) {
                    return u("GET", l("/conversion-report", e, t))
                }, e.getSettings = async function() {
                    return u("GET", d("/settings"))
                }, e.postSettings = async function(e) {
                    return u("POST", d("/settings"), e)
                }, e.addClick = async function(e) {
                    return u("POST", `${o}/analytics/`, e)
                }
            }(c || (c = {}))
        },
        46277: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                FeatureId: () => o,
                DialogAction: () => i,
                errorCode: () => s,
                trackSocialNetworkEvent: () => r,
                createExtendedSolution: () => c
            });
            var o, i, a = n(776734);
            ! function(e) {
                e.CreateIdea = "free__create_public_idea", e.CreateComment = "free__create_comment", e.CreateMessageChat = "free__create_message_chat"
            }(o || (o = {})),
            function(e) {
                e.Open = "open", e.OpenSolution = "open_solution"
            }(i || (i = {}));
            const s = "permissions_denied";
            async function r(e, t) {
                var n;
                const o = await (0, a.getTracker)();
                if (o) {
                    const i = null === (n = window.user.id) || void 0 === n ? void 0 : n.toString();
                    o.trackPermissionDialog(e, t, i || "")
                }
            }

            function c(e, t) {
                var n;
                const o = null === (n = e.match(/\d+\//gm)) || void 0 === n ? void 0 : n[0];
                return e.replace(o || "", o + t)
            }
        }
    }
]);