(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [4980], {
        750532: (e, t, o) => {
            "use strict";
            var n = o(309103);

            function i(e, t = "x") {
                let o = !1;
                return "x" !== t && "both" !== t || (o = o || e.offsetWidth < e.scrollWidth), "y" !== t && "both" !== t || (o = o || e.offsetHeight < e.scrollHeight), o
            }(0, o(677748).whenDocumentReady)((() => {
                document.addEventListener("mouseenter", (e => {
                    const t = e.target;
                    if (t instanceof HTMLElement && t.matches(".apply-overflow-tooltip")) {
                        let e = "x";
                        if (t.matches(".apply-overflow-tooltip--direction_both") ? e = "both" : t.matches(".apply-overflow-tooltip--direction_y") && (e = "y"), t.matches(".apply-overflow-tooltip--check-children")) {
                            let o = !1;
                            const n = t.children;
                            for (let t = 0; t < n.length; t++) {
                                const r = n[t];
                                if (r instanceof HTMLElement && i(r, e)) {
                                    o = !0;
                                    break
                                }
                            }
                            if (!o) return
                        } else if (!i(t, e)) return;
                        let o = "";
                        o = t.matches && t.matches(".apply-overflow-tooltip--allow-text") ? t.textContent || "" : Array.from(t.childNodes).reduce(((e, t) => (t.nodeType === Node.TEXT_NODE && e.push(t.textContent || ""), e)), []).join("").trim(), (0, n.showOnElement)(t, {
                            text: o
                        });
                        const r = () => {
                            (0, n.hide)(), ["mouseleave", "mousedown"].forEach((e => t.removeEventListener(e, r)))
                        };
                        ["mouseleave", "mousedown"].forEach((e => t.addEventListener(e, r)))
                    }
                }), !0)
            }))
        },
        43464: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                cookieBannerDomain: () => g,
                oldBannerKey: () => h,
                bannerPrivacyPreferenceKey: () => w,
                cookieBannerDelegate: () => p,
                removeOldCookieBannerKey: () => v,
                checkCookiePolicy: () => b,
                checkCookiePolicyInLs: () => y,
                onAccept: () => k,
                setCookiePolicy: () => S,
                showCookiesNotification: () => E,
                initCookiesNotification: () => C
            });
            var n = o(49437),
                i = o(314802),
                r = (o(659863), o(579917)),
                a = o(226305),
                s = o(261030),
                c = o(634786),
                l = o(66974),
                d = o(910288);
            const u = window.location.hostname.split("."),
                g = (0, l.isLocal)() ? "" : "." + u.slice(1, u.length).join("."),
                h = "cookieBanner",
                w = (0, l.isProd)() ? "cookiePrivacyPreferenceBannerProduction" : "cookiePrivacyPreferenceBannerLocal",
                f = "accepted",
                _ = "ignored",
                m = "notApplicable",
                p = (0, r.createDeferredPromise)();

            function v() {
                return n.TVLocalStorage.removeItem(h)
            }

            function b(e) {
                return d.get(e) === f || d.get(e) === m
            }

            function y(e) {
                return n.TVLocalStorage.getItem(e) === f || n.TVLocalStorage.getItem(e) === m
            }

            function k() {
                S(f)
            }

            function S(e) {
                d.set(w, e, 3653, "/", g)
            }
            let T = !1;
            async function E() {
                if (T) return;
                T = !0;
                const e = await Promise.all([o.e(10146), o.e(99740), o.e(24817), o.e(17967), o.e(57561), o.e(42270), o.e(91077), o.e(27592), o.e(94599), o.e(25316), o.e(75514), o.e(18954), o.e(13830), o.e(87410), o.e(38869)]).then(o.bind(o, 458107));
                await e.showCookiesNotification() && (k(), (0, c.trackCookies)("click", "accept_all")), T = !1
            }
            async function C() {
                const e = document.querySelector(".js-main-page-promo-container");
                if (!b(w) && !(0, i.isOnMobileAppPage)("any")) {
                    if (e || p.resolve(), d.get(w) === _) return s.cookieSettingsReady.resolve(), p.promise.then((() => E())); {
                        const e = await (0, a.userGeoInfo)();
                        if (e.is_in_european_union || (t = e.country_code, ["is", "li", "no", "gb"].includes(t))) return S(_), s.cookieSettingsReady.resolve(), p.promise.then((() => E()));
                        S(m), (0, s.setCookieSetting)(s.CookieSettings.Analytics, !0), (0, s.setCookieSetting)(s.CookieSettings.Advertising, !0)
                    }
                }
                var t;
                s.cookieSettingsReady.resolve()
            }
        },
        97639: (e, t, o) => {
            "use strict";
            e = o.nmd(e);
            const n = o(911905).getLogger("Common.Delegate");

            function i() {
                this._listeners = []
            }

            function r(e) {
                return !e.singleshot
            }
            i.prototype.subscribe = function(e, t, o) {
                const n = {
                    object: e,
                    member: t,
                    singleshot: !!o,
                    skip: !1
                };
                this._listeners.push(n)
            }, i.prototype.unsubscribe = function(e, t) {
                for (let o = 0; o < this._listeners.length; ++o) {
                    const n = this._listeners[o];
                    if (n.object === e && n.member === t) {
                        n.skip = !0, this._listeners.splice(o, 1);
                        break
                    }
                }
            }, i.prototype.unsubscribeAll = function(e) {
                for (let t = this._listeners.length - 1; t >= 0; --t) {
                    const o = this._listeners[t];
                    o.object === e && (o.skip = !0, this._listeners.splice(t, 1))
                }
            }, i.prototype.destroy = function() {
                delete this._listeners
            }, i.prototype.fire = function() {
                const e = this._listeners;
                this._listeners = this._listeners.filter(r);
                const t = e.length;
                for (let o = 0; o < t; ++o) {
                    const t = e[o];
                    if (!t.skip) try {
                        t.member.apply(t.object || null, arguments)
                    } catch (e) {
                        n.logError(e.stack || e.message)
                    }
                }
            }, "undefined" != typeof window && (window.Delegate = i), e && e.exports && (e.exports = i)
        },
        262325: (e, t, o) => {
            "use strict";
            e = o.nmd(e);
            var n = o(911905).getLogger("Common.WatchedValue");

            function i() {}

            function r(e) {
                if (!(this instanceof r)) return new r(e);
                arguments.length > 0 && (this._value = e), this._listeners = []
            }
            r.prototype.value = function() {
                    return this._owner ? this._owner._value : this._value
                }, r.prototype.setValue = function(e, t) {
                    var o = this._owner ? this._owner : this;
                    if ("function" == typeof o.hook && (e = o.hook(e)), o.writeLock) return o._value;
                    var i = o._value === e || Number.isNaN(o._value) && Number.isNaN(e);
                    if (!t && i && o.hasOwnProperty("_value")) return e;
                    o._value = e;
                    for (var r = o._listeners.slice(), a = 0, s = 0; s < r.length; s++) {
                        r[s].once && (o._listeners.splice(s - a, 1), a++);
                        try {
                            r[s].cb(e)
                        } catch (e) {
                            n.logError(e.stack || e.message)
                        }
                    }
                    return e
                }, r.prototype.deleteValue = function() {
                    var e = this._owner ? this._owner : this;
                    if (e.hasOwnProperty("_value")) {
                        if (e.writeLock) return e._value;
                        delete e._value;
                        for (var t = e._listeners.slice(), o = 0, i = 0; i < t.length; i++) {
                            t[i].once && (e._listeners.splice(i - o, 1), o++);
                            try {
                                t[i].cb()
                            } catch (e) {
                                n.logError(e.stack || e.message)
                            }
                        }
                    }
                }, r.prototype.subscribe = function(e, t) {
                    if ("function" != typeof e) throw new TypeError("callback must be a function");
                    var o = !!t && !!t.once,
                        i = !!t && !!t.callWithLast,
                        r = this._owner ? this._owner : this;
                    if (i && r.hasOwnProperty("_value")) {
                        try {
                            e(r._value)
                        } catch (e) {
                            n.logError(e.stack || e.message)
                        }
                        if (o) return
                    }
                    r._listeners.push({
                        cb: e,
                        owner: this,
                        once: !!t && !!t.once
                    })
                }, r.prototype.unsubscribe = function(e) {
                    var t = this._owner ? this._owner : this;
                    void 0 === e && (e = null);
                    for (var o = t._listeners, n = o.length; n--;) o[n].owner !== this && t !== this || o[n].cb !== e && null !== e || o.splice(n, 1)
                }, r.prototype.listeners = function() {
                    return (this._owner ? this._owner : this)._listeners
                }, r.prototype.readonly = function() {
                    if (this._readonlyInstance) return this._readonlyInstance;
                    var e = this._readonlyInstance = new i;
                    return e.subscribe = this.subscribe.bind(this), e.unsubscribe = this.unsubscribe.bind(this), e.value = this.value.bind(this), e.when = this.when.bind(this), e.spawn = function() {
                        return this.spawn.apply(this, arguments).readonly()
                    }.bind(this), this.destroy && (e.destroy = this.destroy.bind(this)), e
                },
                r.prototype.spawn = function(e) {
                    var t = new r;
                    return delete t._listeners, t._owner = this._owner || this, t.destroy = function() {
                        if ("function" == typeof e) try {
                            e()
                        } catch (e) {
                            n.logError(e.stack || e.message)
                        }
                        this.unsubscribe(), delete this._owner
                    }, t
                }, r.prototype.when = function(e) {
                    var t = this;
                    if (this.value()) try {
                        e()
                    } catch (e) {
                        n.logError(e.stack || e.message)
                    } else {
                        var o = function(n) {
                            n && (t.unsubscribe(o), e())
                        };
                        t.subscribe(o)
                    }
                }, r.prototype.opposite = function() {
                    if (!this._opposite) {
                        var e = this,
                            t = new r(!this.value());
                        this.subscribe((function(e) {
                            t.setValue(!e)
                        })), t.subscribe((function(t) {
                            e.setValue(!t)
                        })), this._opposite = t
                    }
                    return this._opposite
                }, "undefined" != typeof window && (window.WatchedValue = r), e && e.exports && (e.exports = r)
        },
        250109: (e, t, o) => {
            "use strict";
            o.r(t);
            var n = o(226722),
                i = o(345848),
                r = o(86674),
                a = o(72694),
                s = (o(255091), o(95935)),
                c = o(66974),
                l = o(49437),
                d = o(911905);
            const u = (0, d.getLogger)("Common.Evercookie");
            const g = (0, d.getLogger)("Common.Evercookie"),
                h = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
            class w {
                constructor() {
                    this._cookieName = "tv_ecuid", this._env = null, this._ec = null, this.check = () => {
                        if (this._isEcNotAvailable() || l.TVLocalStorage.getItem("_tv_ec_ignore_username") === window.user.username) return;
                        const e = window.user.id;
                        this._getEcUids().catch((e => {
                            g.logWarn(`Error thrown inside getEcUids(). Leave evercookie data untouched. User: ${window.user.username} (${window.user.id})\nActual error: ${e}`)
                        })).then((t => {
                            if (void 0 === t) return void g.logWarn(`getEcUids() returned no data. Leave evercookie data untouched. User: ${window.user.username} (${window.user.id})`);
                            let n = t.localEcUid;
                            const i = t.remoteEcUids;
                            n && h.test(n) || (n = (0, s.guid)(), this._getEc().set(this._cookieName, n));
                            const a = t => {
                                t.subscription_canceled && Promise.all([o.e(10146), o.e(90926), o.e(99740), o.e(75966), o.e(32395), o.e(60657), o.e(75514), o.e(18932)]).then(o.bind(o, 833943)).then((e => e.createTrialCanceledDialog())), e === window.user.id && t.is_suspicious ? l.TVLocalStorage.setItem("is_suspicious", "1") : l.TVLocalStorage.removeItem("is_suspicious")
                            };
                            i && 0 !== i.length && -1 !== i.indexOf(n) || e !== window.user.id || function(e) {
                                const t = new FormData;
                                return t.append("ecuid", e), (0, r.fetch)("/accounts/set-ecuid/", {
                                    body: t,
                                    credentials: "include",
                                    method: "POST"
                                }).then((e => {
                                    if (e.ok) return e.json().catch((e => {
                                        u.logWarn(`Error in reponse.json() of /accounts/set-ecuid/. User: ${window.user.username} (${window.user.id})\nActual error: ${e}`)
                                    }));
                                    throw new Error("Unable to set remote ecuids. Response was not OK")
                                }))
                            }(n).then(a)
                        })).catch((e => {
                            g.logError(e.message + ` User: ${window.user.username} (${window.user.id})`)
                        }))
                    }, this._isEcNotAvailable() || (this._env = (0, c.environment)(), (0, c.isDebug)() && (this._cookieName += "_" + this._env))
                }
                _isEcNotAvailable() {
                    return TradingView.onWidget && TradingView.onWidget() || !window.user
                }
                _getEc() {
                    return this._ec || (this._ec = new window.evercookie({
                        domain: (0, c.isProd)() ? ".tradingview.com" : location.hostname,
                        lso: !1
                    })), this._ec
                }
                _getLocalEcUid() {
                    return new Promise((e => {
                        this._getEc().get(this._cookieName, (t => {
                            e(t)
                        }))
                    }))
                }
                _getEcUids() {
                    return new Promise(((e, t) => {
                        let o;
                        this._getLocalEcUid().then((e => (o = e, function(e) {
                            return new Promise(((t, o) => {
                                const n = new FormData;
                                e && n.append("local_ecuid", e), (0, r.fetch)("/accounts/get-ecuid/", {
                                    body: n,
                                    credentials: "include",
                                    method: "POST"
                                }).then((e => {
                                    if (e.ok) return e.json().catch((e => {
                                        u.logWarn(`Error in reponse.json() of /accounts/get-ecuid/. User: ${window.user.username} (${window.user.id})\nActual error: ${e}`)
                                    }));
                                    throw new Error("Unable to get remote ecuids. Response was not OK")
                                })).then((e => {
                                    t(e)
                                })).catch((e => {
                                    o(e)
                                }))
                            }))
                        }(e)))).then((t => {
                            if (void 0 === t) throw new Error(`getRemoteEcUids() returned no response. User: ${window.user.username} (${window.user.id})`);
                            e({
                                localEcUid: o,
                                remoteEcUids: t.ecuids
                            })
                        })).catch((e => {
                            t(e)
                        }))
                    }))
                }
            }
            o(823127);
            var f = o(575932),
                _ = o(132317),
                m = o(46279),
                p = o(733255),
                v = o(125226),
                b = o(704765),
                y = o(823127);
            y("body").on("click", ".js-follow-user", (function(e) {
                const t = y(e.currentTarget),
                    n = t.data("id"),
                    i = t.is(".js-follow-user--followed") ? "Unfollow" : "Follow",
                    r = {
                        authorId: n
                    };
                window.runOrSignIn((async () => {
                    if (!t.is(".self")) {
                        const e = t.is(".js-follow-user--followed") ? 0 : 1;
                        (await Promise.all([o.e(92529), o.e(57853)]).then(o.bind(o, 42941))).protectedFetch("/social/follow-the-user/", {
                            follow: e,
                            targetId: n
                        }, "follow").then((e => {
                            "max_followings_exceed" !== e.error_code ? e.error ? (0, p.showNoticeDialog)({
                                content: e.error,
                                title: e.errorTitle || (0, f.t)("Error")
                            }) : (y(".js-follow-user-" + n).toggleClass("js-follow-user--followed").toggleClass("i-checked"), (0, _.trackActionFollow)("User", i, r)) : Promise.all([o.e(22850), o.e(15107), o.e(55099), o.e(84845), o.e(50407), o.e(71452), o.e(25977), o.e(34834)]).then(o.bind(o, 82649)).then((({
                                createDialog: e
                            }) => {
                                const t = e({
                                    type: "modal",
                                    closeOnEsc: !1,
                                    closeOnOutsideClick: !1,
                                    closeButton: !1,
                                    width: 546,
                                    contentWrapTemplate: '\n\t\t\t\t\t\t\t\t\t\t<div class="tv-dialog__section tv-dialog__section--no-border">\n\t\t\t\t\t\t\t\t\t\t\t<div class="tv-text"></div>\n\t\t\t\t\t\t\t\t\t\t</div>',
                                    content: `\n\t\t\t\t\t\t\t\t\t\t<div class="tv-dialog__header">\n\t\t\t\t\t\t\t\t\t\t\t<div class="tv-dialog__header-logo">${b}</div>\n\t\t\t\t\t\t\t\t\t\t\t<h2 class="tv-dialog__header-title">${(0,f.t)("Unfollow some authors")}</h2>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<p class="tv-text__font tv-text__font--size_semilarge">\n\t\t\t\t\t\t\t\t\t\t\t\t${(0,f.t)("Sorry, follow limit reached and you cannot follow more authors without removing some first.")}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</div>`,
                                    actions: [{
                                        name: "goToProfile",
                                        type: "primary",
                                        text: (0, f.t)("Go to Profile"),
                                        key: 13
                                    }, {
                                        addClass: "tv-button--no-padding i-float_left",
                                        name: "cancel",
                                        type: "link",
                                        text: (0, f.t)("No thanks"),
                                        method: "close"
                                    }]
                                });
                                t.on("action:goToProfile", (e => {
                                    window.location.replace((0, m.getUserProfilePath)(window.user, {
                                        page: m.ProfilePages.FollowingPeople
                                    })), e.destroy()
                                })), t.open()
                            }))
                        })).catch((e => {
                            (0, p.showNoticeDialog)({
                                content: e.message,
                                title: (0, f.t)("Oops!")
                            })
                        }))
                    }
                }), {
                    source: "Follow user",
                    verifiedPhoneRequired: !(0, v.isFeatureEnabled)("disable_phone_verification_sms")
                })
            }));
            var k = o(568919);
            document.addEventListener("DOMContentLoaded", (() => {
                document.addEventListener("click", (e => {
                    const t = e.target.closest(".js-profile-message");
                    t instanceof HTMLElement && (e.preventDefault(), function(e) {
                        const t = Number(e.dataset.id),
                            o = e.dataset.username;
                        window.runOrSignIn((() => (0, k.openPMDialog)(t, o)), {
                            source: "Private message from broker popup",
                            verifiedPhoneRequired: !0
                        })
                    }(t))
                }))
            }));
            var S = o(231039),
                T = o(638456),
                E = o(314802),
                C = (o(750532), o(97639)),
                P = o.n(C),
                N = o(198796),
                L = o(677748);
            o(823127)(document).ajaxSend(((e, t, o) => {
                o.crossDomain && !o.forceLanguageHeader || (window.locale ? t.setRequestHeader("X-Language", window.locale) : console.warn("window.locale is not defined"))
            }));
            var x = o(973286);
            var A = o(814520),
                O = o(641261),
                I = o(665343);
            let V, D;

            function R() {
                if (window.initData.lfs) {
                    const e = document.getElementsByClassName("js-admin-warning")[0];
                    document.body.removeChild(e)
                }
                let e = !0;
                [/^\/chart\//, /^\/share-your-love\//].forEach((t => {
                    t.test(window.location.pathname) && (e = !1)
                })), e && window.location.reload()
            }

            function $(e, t) {
                window.TVDialogs && window.TVDialogs.signModal && window.TVDialogs.signModal.close(), window.user = (0, N.deepExtend)({}, e), window.TradingView.changeLoginState(!0), "function" == typeof t && window.TVDialogs && window.TVDialogs.signModal ? window.TVDialogs.signModal.on("signinSuccess", (() => {
                    t()
                })) : "function" == typeof t && t()
            }

            function F(e) {
                window.iframeAuthWidget && !1 === window.user.profile_data_filled && (window.iframeAuthWidget.preventClose = !0);
                const t = window.user.available_offers || {}; {
                    const e = document.documentElement;
                    e.classList.toggle("is-authenticated", window.is_authenticated), e.classList.toggle("is-not-authenticated", !window.is_authenticated)
                }
                window.TVSettings && window.TVSettings.sync(window.user.settings), window.is_authenticated ? (e && !1 !== window.user.profile_data_filled || void 0 === D || D.check(), e || (Promise.all([o.e(75514), o.e(19158)]).then(o.bind(o, 444139)).then((e => e.offerButtonLoginStateChangeInit())), (0, T.onGoPro)() && window.user.is_pro && window.location.reload()), !1 === window.user.profile_data_filled && ((0, T.checkPageType)("mobile") || (0, E.isOnMobileAppPage)("any") || (0, L.whenDocumentReady)((() => {
                    (0, S.showSignModal)({
                        mode: "create-account",
                        noCloseButton: !!window.user.social_registration,
                        dontCloseOnEsc: !!window.user.social_registration,
                        nameFields: !window.user.social_registration,
                        noUsernameField: !window.user.social_registration
                    }).then((e => {
                        window.iframeAuthWidget && (window.iframeAuthWidget.preventClose = !1, e.on("destroy", (() => {
                            window.iframeAuthWidget.postClose()
                        })))
                    })), window.user.social_registration ? (o.e(22947).then(o.bind(o, 113452)).then((({
                        default: e
                    }) => {
                        e("Social")
                    })), (0, O.trackGTagAdsEvent)(O.GTagEvent.RegistrationCompleted), (0, I.trackTwitterEvent)(I.TwitterEvent.RegistrationCompleted), delete window.user.social_registration) : n.TVXWindowEvents.emit("loginStateChange", JSON.stringify({
                        is_authenticated: window.is_authenticated,
                        user: window.user
                    }))
                }), !0), (0, i.trackEvent)("Conversion", "First login"), delete window.user.profile_data_filled), window.TradingView.setTrialAvailiable(void 0 !== t[a.OFFERS.trial])) : (Object.keys(t).forEach((e => {
                    const o = e;
                    t[o].available_for_anons || delete t[o]
                })), window.user = {
                    username: "Guest",
                    following: "0",
                    followers: "0",
                    ignore_list: [],
                    available_offers: t
                }, l.TVLocalStorage.removeItem("trial_availiable"))
            }
            V = window.loginStateChange ? window.loginStateChange : window.loginStateChange = new(P()), V.subscribe(null, F), n.TVXWindowEvents.on("loginStateChange", (e => {
                const t = JSON.parse(e);
                window.user = t.user, window.is_authenticated = !!t.is_authenticated, V.fire()
            })), n.TVXWindowEvents.on("signOut", (() => {
                R()
            })), (() => {
                const e = "user-obj-changed",
                    t = {};
                window.crossTabSyncUserAttr = t => {
                    const o = {};
                    t instanceof Array ? t.forEach((e => {
                        o[e] = window.user[e]
                    })) : o[t] = window.user[t], n.TVXWindowEvents.emit(e, JSON.stringify(o))
                }, n.TVXWindowEvents.on(e, (e => {
                    const o = JSON.parse(e);
                    let n;
                    for (n in o)
                        if (o.hasOwnProperty(n)) {
                            window.user[n] = o[n];
                            (t[n] || []).forEach((e => {
                                e.fire(o[n])
                            }))
                        }
                }))
            })(), window.TradingView.changeLoginState = e => {
                window.is_authenticated = !!e, n.TVXWindowEvents.emit("loginStateChange", JSON.stringify({
                    is_authenticated: window.is_authenticated,
                    user: window.user
                })), V.fire()
            }, window.loginUser = $, window.addEventListener("storage", (e => {
                "login_user" === e.key && null !== e.newValue && $(JSON.parse(e.newValue))
            })), window.TradingView.signOut = () => {
                const e = { ...window.user
                };
                (0, r.fetch)("/accounts/logout/", {
                    method: "POST",
                    headers: {
                        accept: "html"
                    },
                    credentials: "same-origin"
                }).then((() => {
                    window.TradingView.changeLoginState(!1), n.TVXWindowEvents.emit("signOut"), R()
                })).catch((() => {
                    window.user = e, window.TradingView.changeLoginState(!0)
                }))
            }, D = new w, window.loginRequiredDelegate = new(P()), window.runOrSignIn = (e, t) => {
                t || (t = {});
                const o = [];
                if (t.paidAccountCheck && o.push((() => (0, A.paidAccountCheck)({
                        successButtonText: t.paidAccountSuccessButtonText
                    }))), t.verifiedPhoneRequired) {
                    const e = () => Promise.resolve((0, x.whenVerified)({
                        showDialog: !0,
                        source: t.source,
                        doNotCheckSuspicious: t.doNotCheckSuspicious,
                        doNotCheckSocialActivity: t.doNotCheckSocialActivity,
                        customPhoneCheck: t.customPhoneCheck,
                        doNotShowConfirmation: t.doNotShowConfirmation
                    }));
                    o.push(e)
                }
                window.is_authenticated ? o.reduce(((e, t) => e.then(t)), Promise.resolve()).then(e).catch((() => {})) : (0, S.showSignModal)({
                    source: t.source,
                    sourceMeta: t.sourceMeta,
                    feature: t.feature,
                    mode: t.mode,
                    signinSuccess: e,
                    startTrial: t.startTrial
                })
            }, window.onLoginStateChange = F, window.TradingView.setTrialAvailiable = e => {
                l.TVLocalStorage.setItem("trial_availiable", e ? "1" : "0")
            }, window.TradingView.notificationsChanged = new(P())
        },
        86674: (e, t, o) => {
            "use strict";
            o.d(t, {
                fetch: () => i
            });
            const n = (0, o(911905).getLogger)("Fetch");

            function i(e, t, o = {}) {
                {
                    t = t || {},
                        function(e) {
                            return new URL(e, document.baseURI).origin === location.origin
                        }(e) && (t.headers ? t.headers instanceof Headers || (t.headers = new Headers(t.headers)) : t.headers = new Headers, window.locale && t.headers.set("X-Language", window.locale), t.headers.set("X-Requested-With", "XMLHttpRequest")), void 0 === t.credentials && (t.credentials = "same-origin");
                    const i = window.fetch(e, t);
                    return i.then((i => {
                        if (!i.ok) {
                            let r = "";
                            t.method && (r += `${t.method.toUpperCase()} `), r += e, r += `. Status ${i.status}`, i.statusText && (r += `. ${i.statusText}`), i.headers.via && (r += `. Via: ${i.headers.via}`),
                                o.logBodyOnError && "string" == typeof t.body && (r += `. Body: ${t.body.slice(0,1024)}`), n.logError(r)
                        }
                        return i
                    }), (o => {
                        if (o && "AbortError" === o.name) return;
                        let i = "";
                        t.method && (i += `${t.method.toUpperCase()} `), i += e, navigator.onLine ? i += `. ${o}` : i += ". User is offline.", n.logError(i)
                    })), i
                }
            }
        },
        911905: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                LOGLEVEL: () => r,
                getLogLevel: () => _,
                isHighRateEnabled: () => m,
                setLogLevel: () => p,
                getRawLogHistory: () => v,
                serializeLogHistoryEntry: () => b,
                getLogHistory: () => y,
                getLogger: () => S,
                loggingOn: () => E,
                loggingOff: () => C
            });
            const n = "undefined" != typeof window ? window : {};
            let i = !1;
            try {
                localStorage.getItem(""), i = !0
            } catch (e) {}
            var r;
            ! function(e) {
                e[e.ERROR = 1] = "ERROR", e[e.WARNING = 2] = "WARNING", e[e.INFO = 3] = "INFO", e[e.NORMAL = 4] = "NORMAL", e[e.DEBUG = 5] = "DEBUG"
            }(r || (r = {}));
            let a = 0;
            const s = "tv.logger.loglevel",
                c = "tv.logger.logHighRate",
                l = [];
            let d = null,
                u = null,
                g = null,
                h = NaN,
                w = r.WARNING,
                f = !1;

            function _() {
                return w
            }

            function m() {
                return f
            }

            function p(e) {
                e = Math.max(r.ERROR, Math.min(r.DEBUG, e)), w = e, P()
            }

            function v(e, t) {
                let o = l.reduce(((e, t) => e.concat(t)), []);
                return o.sort(((e, t) => e.id - t.id)), void 0 !== t && (o = o.filter((e => e.subSystemId === t))), "number" == typeof e && (o = o.slice(-e)), o
            }

            function b(e) {
                return new Date(e.timestamp).toISOString() + ":" + e.subSystemId + ":" + e.message.replace(/"/g, "'")
            }

            function y(e, t) {
                return function(e, t) {
                    let o, n = 0,
                        i = 0;
                    for (o = e.length - 1; o >= 1 && (n += 8 * (1 + encodeURIComponent(e[o]).length), !(o - 1 > 0 && (i = 8 * (1 + encodeURIComponent(e[o - 1]).length), n + i > t))); o--);
                    return e.slice(o)
                }(v(e, t).map(b), 75497472)
            }

            function k(e, t, o, i) {
                if (t === u && i.id === g) return;
                const s = new Date;
                if (e <= r.NORMAL && function(e, t, o, i, r) {
                        "function" === n.structuredClone && (t = n.structuredClone(t));
                        const s = {
                            id: a,
                            message: t,
                            subSystemId: i,
                            timestamp: Number(e)
                        };
                        a += 1, o.push(s), void 0 !== r && o.length > r && o.splice(0, 1)
                    }(s, t, o, i.id, i.maxCount), e <= w && (!i.highRate || m()) && (!d || i.id.match(d))) {
                    const o = s.toISOString() + ":" + i.id + ":" + t;
                    switch (e) {
                        case r.DEBUG:
                            console.debug(o);
                            break;
                        case r.INFO:
                        case r.NORMAL:
                            i.color ? console.log("%c" + o, "color: " + i.color) : console.log(o);
                            break;
                        case r.WARNING:
                            console.warn(o);
                            break;
                        case r.ERROR:
                            console.error(o)
                    }
                    u = t, g = i.id, h && clearTimeout(h), h = setTimeout((() => {
                        u = null, g = null, h = NaN
                    }), 1e3)
                }
            }

            function S(e, t = {}) {
                const o = [];
                l.push(o);
                const n = Object.assign(t, {
                    id: e
                });

                function i(e) {
                    return t => k(e, String(t), o, n)
                }
                return {
                    logDebug: i(r.DEBUG),
                    logError: i(r.ERROR),
                    logInfo: i(r.INFO),
                    logNormal: i(r.NORMAL),
                    logWarn: i(r.WARNING)
                }
            }
            const T = S("logger"),
                E = n.lon = (e, t) => {
                    p(r.DEBUG), T.logNormal("Debug logging enabled"), f = Boolean(e), d = t || null, P()
                },
                C = n.loff = () => {
                    p(r.INFO), T.logInfo("Debug logging disabled")
                };

            function P() {
                try {
                    i && (localStorage.setItem(c, String(f)), localStorage.setItem(s, String(w)))
                } catch (e) {
                    T.logWarn(`Cannot save logger state (level: ${w}, high-rate: ${f}) to localStorage: ${e.message}`)
                }
            }! function() {
                f = !!i && "true" === localStorage.getItem(c);
                let e = parseInt(i && localStorage.getItem(s) || "");
                Number.isNaN(e) && (e = r.WARNING), p(e), T.logNormal(`Init with settings - level: ${w}, high-rate: ${f}`)
            }(),
            n.performance && n.performance.now ? T.logNormal(`Sync logger and perf times, now is ${n.performance.now()}`) : T.logWarn("Perf time is not available")
        },
        72694: (e, t, o) => {
            "use strict";
            o.d(t, {
                OFFERS: () => n,
                OfferKind: () => i,
                LastChanceType: () => r
            });
            const n = {
                    trial: "trial",
                    early_access: "early_access",
                    black_friday: "black_friday",
                    cyber_monday: "cyber_monday",
                    custom_discount: "custom_discount",
                    longer_cycle: "longer_cycle",
                    upgrade: "upgrade",
                    last_chance: "last_chance",
                    one_usd: "one_usd",
                    three_months: "three_months",
                    six_months: "six_months"
                },
                i = {
                    early_access: "early_access",
                    black_friday: "black_friday",
                    last_chance: "last_chance",
                    one_usd: "1 usd offer",
                    three_months: "3 months offer",
                    six_months: "six_months",
                    custom_discount: "custom_discount"
                };
            var r;
            ! function(e) {
                e.TwoWeeks = "LastChance_2w", e.TwoDays = "LastChance_2d", e.Hours = "LastChance_24h"
            }(r || (r = {}))
        },
        733255: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                createNoticeDialog: () => r,
                showNoticeDialog: () => a
            });
            var n = o(575932);
            const i = {
                width: 400,
                destroyOnClose: !0,
                title: (0, n.t)("Notification"),
                content: (0, n.t)("You are notified"),
                contentWrapTemplate: '<div class="tv-dialog__section tv-dialog__section--no-border"><div class="tv-text"><p></p></div></div>',
                actionsWrapTemplate: '<div class="tv-dialog__section tv-dialog__section--actions tv-dialog__section--no-border">',
                actions: [{
                    name: "ok",
                    type: "primary",
                    text: (0, n.t)("Ok"),
                    method: "close",
                    key: [13, 32]
                }]
            };
            async function r(e) {
                return (await Promise.all([o.e(22850), o.e(15107), o.e(55099), o.e(84845), o.e(50407), o.e(71452), o.e(25977), o.e(34834)]).then(o.bind(o, 82649))).createDialog({ ...i,
                    ...e
                })
            }

            function a(e) {
                r(e).then((e => e.open()))
            }
        },
        568919: (e, t, o) => {
            "use strict";

            function n() {
                return Promise.all([o.e(3086), o.e(72066), o.e(22850), o.e(15107), o.e(89806), o.e(55099), o.e(84845), o.e(50407), o.e(37619), o.e(71452), o.e(33216), o.e(89587), o.e(2189), o.e(59379), o.e(25773), o.e(10833), o.e(77846), o.e(30170), o.e(36325), o.e(90375), o.e(68945), o.e(13380), o.e(75514), o.e(25977), o.e(24951), o.e(20651), o.e(61909), o.e(72840), o.e(49473), o.e(26612), o.e(77297), o.e(60550), o.e(24025)]).then(o.t.bind(o, 27802, 19))
            }

            function i(e, t, o) {
                n().then((n => n.noteForAuthor(e, t, o)))
            }

            function r(e, t, o) {
                n().then((n => n.openPMDialog(e, t, o)))
            }

            function a() {
                n().then((e => e.newPrivateChatDialog()))
            }
            o.d(t, {
                noteForAuthor: () => i,
                openPMDialog: () => r,
                newPrivateChatDialog: () => a
            })
        },
        231039: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                showSignModal: () => i,
                isSignModalOpen: () => r
            });
            let n = () => !1;
            async function i(e) {
                if (window.TVD && window.TVD.signIn) return window.TVD.signIn(e); {
                    const t = await Promise.all([o.e(15107), o.e(37352), o.e(55099), o.e(84845), o.e(50407), o.e(71452), o.e(2189), o.e(90745), o.e(69646), o.e(92529), o.e(56554), o.e(56748), o.e(25977), o.e(24377), o.e(35189), o.e(8214), o.e(39815), o.e(9262), o.e(36123)]).then(o.bind(o, 409262));
                    return n = t.isSignModalOpen, t.showSignModal(e)
                }
            }

            function r() {
                return n()
            }
        },
        319161: (e, t, o) => {
            "use strict";
            async function n(e) {
                return (await Promise.all([o.e(10146), o.e(48181), o.e(8834), o.e(35354), o.e(5979), o.e(99740), o.e(91670), o.e(15107), o.e(63280), o.e(55099), o.e(84845), o.e(67161), o.e(50407), o.e(71452), o.e(36603), o.e(44119), o.e(47412), o.e(75514), o.e(25977), o.e(24377), o.e(99379), o.e(27588), o.e(85518), o.e(68606)]).then(o.bind(o, 196500))).createPhoneDialog(e)
            }
            async function i(e) {
                return (await Promise.all([o.e(10146), o.e(48181), o.e(8834), o.e(35354), o.e(5979), o.e(99740), o.e(91670), o.e(15107), o.e(63280), o.e(55099), o.e(84845), o.e(67161), o.e(50407), o.e(71452), o.e(36603), o.e(44119), o.e(47412), o.e(75514), o.e(25977), o.e(24377), o.e(99379), o.e(27588), o.e(85518), o.e(68606)]).then(o.bind(o, 196500))).createEmailDialog(e)
            }
            o.d(t, {
                createPhoneDialog: () => n,
                createSMSEmailDialog: () => i
            })
        },
        814520: (e, t, o) => {
            "use strict";
            o.d(t, {
                paidAccountCheck: () => r
            });
            var n = o(49437);
            const i = (0, o(911905).getLogger)("PaidAccountCheck");
            async function r(e) {
                const t = window.user,
                    r = n.TVLocalStorage.getItem("previous_username");
                if (t && window.is_authenticated && !t.is_pro && r) {
                    const [{
                        getProfile: t
                    }, {
                        showWrongAccountDialog: n
                    }] = await Promise.all([o.e(90254).then(o.bind(o, 450305)), Promise.all([o.e(33837), o.e(24377), o.e(12019)]).then(o.bind(o, 716187))]);
                    try {
                        const o = await t(r);
                        if (Boolean(o.pro_plan)) return n({
                            userName: r,
                            isNeedCancelButton: e.isNeedCancelButton,
                            successButtonText: e.successButtonText
                        })
                    } catch (e) {
                        i.logError(e.message)
                    }
                }
                return Promise.resolve(!0)
            }
        },
        973286: (e, t, o) => {
            "use strict";
            o.d(t, {
                getDialogDfd: () => u,
                verificationIsRequired: () => g,
                whenVerified: () => h,
                requestPhoneNumber: () => w
            });
            var n = o(575932),
                i = o(345848),
                r = o(319161),
                a = o(49437),
                s = o(611688),
                c = o(823127);
            let l = c.Deferred();

            function d(e, t) {
                var o = TVSettings.getBool("_phone_verif_dlg_initial", !0);
                TVSettings.setValue("_phone_verif_dlg_initial", !1), (0, i.trackEvent)("Phone verification", e + (o ? " initial" : ""), t)
            }

            function u(e) {
                const t = c.Deferred();
                return (0, r.createPhoneDialog)({
                    featureSource: e.source,
                    doNotShowConfirmation: e.doNotShowConfirmation
                }).then((o => {
                    o.on("afterOpen", (() => d("Show dialog", e.source))).on("verification:success", (o => {
                        t.resolve(o), d("Verified", e.source)
                    })).on("verification:cancel", (() => {
                        t.reject("cancelled"), d("Cancelled", e.source)
                    })).on("verification:codeExpired", (() => d("Show dialog", e.source))).open()
                })), t
            }

            function g(e = {}) {
                return new Promise((t => {
                    !window.is_authenticated || user.is_staff || user.is_superuser || user.is_pro || user.is_moderator ? t([!1]) : e.customPhoneCheck ? e.customPhoneCheck() ? t([!0, "date-joined"]) : t([!1]) : s.enabled("phone_verification") && !user.has_phone ? !0 !== e.doNotCheckSocialActivity ? t([!0, "date-joined"]) : (!0 !== e.doNotCheckSuspicious && t([Boolean(a.TVLocalStorage.getItem("is_suspicious")), "suspicious"]), t([!0, "default"])) : t([!1])
                }))
            }

            function h(e = {}) {
                const t = c.Deferred();
                return g({
                    doNotCheckSuspicious: e.doNotCheckSuspicious,
                    doNotCheckSocialActivity: e.doNotCheckSocialActivity,
                    customPhoneCheck: e.customPhoneCheck
                }).then((([o, i]) => {
                    if (!o) return l.resolve(), t.resolve();
                    if (o && e.silentPhoneVerification) return t.reject("phone_verification_required");
                    if (!e.showDialog) return l.done((() => t.resolve()));
                    const r = {
                        source: e.source,
                        doNotShowConfirmation: e.doNotShowConfirmation
                    };
                    "suspicious" !== i && (r.topMessage = (0, n.t)("Verify your phone number and get access to more tools on TradingView.")), u(r).done((() => t.resolve())).always((() => t.reject("phone_verification_declined")))
                })).catch((e => e)), t.promise()
            }

            function w(e = {}) {
                return new Promise(((t, o) => {
                    u(e).done(t).always(o)
                }))
            }
            window.loginStateChange && loginStateChange.subscribe(null, (() => {
                window.is_authenticated && (l = c.Deferred(), g().then((([e, t]) => {
                    e || l.resolve()
                })))
            }))
        },
        226305: (e, t, o) => {
            "use strict";
            o.d(t, {
                userGeoInfo: () => a
            });
            var n = o(86674);
            const i = (0, o(911905).getLogger)("User.GeoInfo");
            let r;

            function a() {
                if (void 0 !== r) return r;
                return r = (0, n.fetch)("/check_language/", {
                    method: "POST"
                }).then((e => {
                    if (e.ok) return e.json();
                    throw new Error(e.statusText)
                })).catch((e => (i.logWarn(e.message), {}))), r
            }
        },
        910288: (e, t, o) => {
            "use strict";

            function n(e, t, o, n, i) {
                let r = "";
                if (n = n ? "; path=" + n : "", i = i ? "; domain=" + i : "", o) {
                    const e = new Date;
                    e.setTime(e.getTime() + 24 * o * 60 * 60 * 1e3), r = "; expires=" + e.toUTCString()
                } else r = "";
                document.cookie = e + "=" + t + r + i + n
            }

            function i(e) {
                const t = e + "=",
                    o = document.cookie.split(";");
                for (let e = 0; e < o.length; e++) {
                    let n = o[e];
                    for (;
                        " " === n.charAt(0);) n = n.substring(1, n.length);
                    if (0 === n.indexOf(t)) return n.substring(t.length, n.length)
                }
                return null
            }
            o.d(t, {
                set: () => n,
                get: () => i
            })
        },
        198796: (e, t, o) => {
            "use strict";

            function n(e, ...t) {
                return e && "object" == typeof e ? (0 === t.length || t.forEach((t => {
                    null != t && "object" == typeof t && Object.keys(t).forEach((o => {
                        const r = e[o],
                            a = t[o];
                        if (a === e) return;
                        const s = Array.isArray(a);
                        if (a && (i(a) || s)) {
                            let t;
                            t = s ? r && Array.isArray(r) ? r : [] : r && i(r) ? r : {}, e[o] = n(t, a)
                        } else void 0 !== a && (e[o] = a)
                    }))
                })), e) : e
            }

            function i(e) {
                if (!e || "[object Object]" !== Object.prototype.toString.call(e)) return !1;
                const t = Object.getPrototypeOf(e);
                if (!t) return !0;
                const o = Object.hasOwnProperty.toString,
                    n = t.hasOwnProperty("constructor") && t.constructor;
                return "function" == typeof n && o.call(n) === o.call(Object)
            }
            o.d(t, {
                deepExtend: () => n
            })
        },
        95935: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                guid: () => i,
                randomHash: () => r,
                randomHashN: () => a
            });
            const n = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

            function i() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e => {
                    const t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                }))
            }

            function r() {
                return a(12)
            }

            function a(e) {
                let t = "";
                for (let o = 0; o < e; ++o) {
                    const e = Math.floor(Math.random() * n.length);
                    t += n[e]
                }
                return t
            }
        },
        46279: (e, t, o) => {
            "use strict";
            var n;

            function i(e, t = {}) {
                const {
                    page: o,
                    query: i
                } = t;
                let r = "/u/",
                    a = !1,
                    s = null;
                if (function(e) {
                        return e.is_broker || 1 === e.account_type
                    }(e)) switch (r = "/broker/", o) {
                    case n.PublishedCharts:
                        s = "ideas/";
                        break;
                    case n.FollowingPeople:
                        s = "following/";
                        break;
                    case n.Followers:
                        s = "followers/";
                        break;
                    case n.Reviews:
                        s = "reviews/";
                        break;
                    case n.Settings:
                    case n.SettingsProfile:
                    case n.Notifications:
                    case n.Billing:
                        r = "/u/", a = !0
                } else a = !0;
                return "Guest" !== e.username && (r += `${e.username}/`), i && (r += `?${i}`), void 0 !== o && (a ? r += `#${o}` : null !== s && (r += `${s}`)), r
            }
            o.r(t), o.d(t, {
                    ProfilePages: () => n,
                    getUserProfilePath: () => i
                }),
                function(e) {
                    e.Settings = "settings", e.SettingsProfile = "settings-profile",
                        e.Notifications = "notifications", e.Billing = "billing", e.PublishedCharts = "published-charts", e.FollowingPeople = "following-people", e.Followers = "followers", e.Reviews = "reviews"
                }(n || (n = {}))
        },
        677748: (e, t, o) => {
            "use strict";

            function n(e, t = !1) {
                "loading" !== document.readyState ? t ? setTimeout((() => e()), 1) : e() : document.addEventListener("DOMContentLoaded", (() => e()))
            }
            o.d(t, {
                whenDocumentReady: () => n,
                whenDocumentReadyPromise: () => i
            });
            const i = new Promise((e => {
                n(e)
            }))
        },
        719718: (e, t, o) => {
            "use strict";
            o.d(t, {
                createImage: () => i,
                marketingAnalyticsEnabled: () => r,
                yandexAnalyticsEnabled: () => a
            });
            var n = o(125226);

            function i(e) {
                const t = document.createElement("img");
                return t.src = e, t
            }

            function r() {
                return (0, n.isFeatureEnabled)("marketing-analytics")
            }

            function a() {
                return (0, n.isFeatureEnabled)("yandex_metric_enabled")
            }
        },
        641261: (e, t, o) => {
            "use strict";
            o.d(t, {
                GTagEvent: () => u,
                trackGTagAdsEvent: () => h
            });
            var n = o(251954),
                i = o(261030),
                r = o(314802),
                a = o(638456),
                s = o(588948),
                c = o(691805),
                l = o(719718);
            let d = !1;
            var u;

            function g() {
                d || !(0, l.marketingAnalyticsEnabled)() || (0, r.isOnMobileAppPage)("any") || a.CheckMobile.iOS() || ((0, s.updateInitData)(), (0, s.getInitData)().gadwId && (d = !0, (0, c.appendScript)(`https://www.googletagmanager.com/gtag/js?id=${(0,s.getInitData)().gadwId}`), window.dataLayer = window.dataLayer || [], window.gtag = function() {
                    window.dataLayer.push(arguments)
                }, window.gtag("js", new Date), window.gtag("consent", "default", {
                    ad_storage: (0, i.getCookieSetting)(i.CookieSettings.Advertising) ? "granted" : "denied"
                }), window.gtag("config", (0, s.getInitData)().gadwId), n.subscribe(i.cookieSettingsChangeEvent, ((e, t) => {
                    e === i.CookieSettings.Advertising && window.gtag("consent", "update", {
                        ad_storage: t ? "granted" : "denied"
                    })
                }), null)))
            }

            function h(e, t = {}) {
                if (g(), !d) return;
                const o = (0, s.getInitData)().gadwId;
                window.gtag("event", "conversion", {
                    send_to: `${o}/${e}`,
                    user_id: window.user.id,
                    ...t
                })
            }! function(e) {
                e.PageView = "kwnRCP6AwqsBEOTvvuED", e.TrialSignUp = "6_gCCOyejsACEK3sq6gB", e.RegistrationCompleted = "JzYhCIOr578CEK3sq6gB", e.PaidPlanAcquired = "ca8iCNrG578CEK3sq6gB"
            }(u || (u = {}))
        },
        665343: (e, t, o) => {
            "use strict";
            o.d(t, {
                TwitterEvent: () => n,
                trackTwitterEvent: () => a
            });
            var n, i = o(719718),
                r = o(261030);
            ! function(e) {
                e.SiteVisit = "o2eg2", e.TrialSignUp = "o1wjo", e.RegistrationCompleted = "o1wjq", e.PaidPlanAcquired = "o1wjr"
            }(n || (n = {}));

            function a(e) {
                (0, i.marketingAnalyticsEnabled)() && (0, r.getCookieSetting)(r.CookieSettings.Analytics) && (e => [`https://analytics.twitter.com/i/adsct?txn_id=${e}&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0`, `https://t.co/i/adsct?txn_id=${e}&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0"`])(e).map(i.createImage)
            }
        },
        691805: (e, t, o) => {
            "use strict";
            o.d(t, {
                appendScript: () => i
            });
            var n = o(503031);

            function i(e) {
                const t = document.createElement("script");
                t.async = !0, t.src = e;
                const o = (0, n.getCspNonce)();
                return o && t.setAttribute("nonce", o), document.head.appendChild(t), t
            }
        },
        261030: (e, t, o) => {
            "use strict";
            o.d(t, {
                CookieSettings: () => n,
                cookieSettingsChangeEvent: () => d,
                cookieSettingsReady: () => u,
                setCookieSetting: () => _,
                getCookieSetting: () => m
            });
            var n, i = o(251954),
                r = o(579917),
                a = o(49437),
                s = o(43464),
                c = o(66974),
                l = o(910288);
            ! function(e) {
                e.Analytics = "analytics", e.Advertising = "advertising"
            }(n || (n = {}));
            const d = "cookie_settings_changed",
                u = (0, r.createDeferredPromise)(),
                g = "cookiesSettings",
                h = "localCookiesSettings",
                w = "cookiePrivacyPreferenceBanner",
                f = {
                    [n.Analytics]: !1,
                    [n.Advertising]: !1
                };

            function _(e, t) {
                f[e] = t, l.set((0, c.isProd)() ? g : h, JSON.stringify(f), 3653, "/", s.cookieBannerDomain), i.emit(d, e, t)
            }

            function m(e) {
                return f[e]
            }

            function p() {
                return a.TVLocalStorage.removeItem(w)
            }! function() {
                const e = l.get((0, c.isProd)() ? g : h),
                    t = a.TVLocalStorage.getItem(w),
                    o = a.TVLocalStorage.getItem(g);
                if (e) {
                    t && o && (p(), a.TVLocalStorage.removeItem(g)), (0, s.checkCookiePolicyInLs)(s.oldBannerKey) && (0, s.removeOldCookieBannerKey)();
                    try {
                        const t = JSON.parse(e);
                        f[n.Analytics] = (null == t ? void 0 : t[n.Analytics]) || !1, f[n.Advertising] = (null == t ? void 0 : t[n.Advertising]) || !1
                    } catch (e) {}
                } else if ((0, s.checkCookiePolicyInLs)(s.oldBannerKey) && (_(n.Analytics, !0), _(n.Advertising, !0), (0, s.onAccept)(), (0, s.removeOldCookieBannerKey)()), t && o) {
                    const e = JSON.parse(o);
                    (0, s.setCookiePolicy)(t), _(n.Analytics, null == e ? void 0 : e[n.Analytics]), _(n.Advertising, null == e ? void 0 : e[n.Advertising]), p(), a.TVLocalStorage.removeItem(g)
                }
            }()
        },
        503031: (e, t, o) => {
            "use strict";

            function n() {
                const e = document.querySelector("script[nonce]");
                if (null !== e) return e.getAttribute("nonce") || e.nonce
            }
            o.d(t, {
                getCspNonce: () => n
            })
        },
        579917: (e, t, o) => {
            "use strict";

            function n() {
                let e, t;
                return {
                    promise: new Promise(((o, n) => {
                        e = o, t = n
                    })),
                    reject: t,
                    resolve: e
                }
            }
            o.d(t, {
                createDeferredPromise: () => n
            })
        },
        66974: (e, t, o) => {
            "use strict";

            function n(e = location.host) {
                return -1 !== ["i18n.tradingview.com", "partial.tradingview.com", "www.tradingview.com", "wwwcn.tradingview.com"].indexOf(e) || -1 !== ["d33t3vvu2t2yu5.cloudfront.net", "dwq4do82y8xi7.cloudfront.net", "s.tradingview.com", "s3.tradingview.com"].indexOf(e) || e.match(/^[a-z]{2}\.tradingview\.com/) || e.match(/prod-[^.]+.tradingview.com/) ? "battle" : e.includes("tradingview.com") || e.includes("staging") ? "staging" : e.match(/webcharts/) ? "staging_local" : (e.match(/^localhost(:\d+)?$/), "local")
            }

            function i() {
                return "local" === n()
            }

            function r() {
                return "battle" === n()
            }

            function a() {
                return !r()
            }
            o.r(t), o.d(t, {
                environment: () => n,
                isLocal: () => i,
                isProd: () => r,
                isDebug: () => a
            })
        },
        125226: (e, t, o) => {
            "use strict";
            var n = o(49437).TVLocalStorage,
                i = o(97639),
                r = o(855385);
            o(638456);
            var a = new i;
            TradingView.FeatureToggle = {
                force_prefix: "forcefeaturetoggle.",
                onChanged: new i,
                enableFeature: function(e) {
                    n.setItem(this.force_prefix + e, "true"), a.fire(e)
                },
                disableFeature: function(e) {
                    n.setItem(this.force_prefix + e, "false"), a.fire(e)
                },
                resetFeature: function(e) {
                    n.removeItem(this.force_prefix + e), a.fire(e)
                },
                onFeaturesStateChanged: function() {
                    return a
                }
            }, TradingView.isFeatureEnabled = function(e) {
                var t = "featuretoggle_seed";

                function i(e) {
                    try {
                        var o = r(e + function() {
                            if (window.user && window.user.id) return window.user.id;
                            var e = n.getItem(t);
                            return null !== e || (e = Math.floor(1e6 * Math.random()), n.setItem(t, e)), e
                        }());
                        return new DataView(o).getUint32(0, !0) / 4294967296
                    } catch (e) {
                        return .5
                    }
                }

                function s(t) {
                    return !("local" !== window.environment || ! function(e) {
                        var t = ["remove_note_tab_from_bottom_panel", "broker_FXCM_token_v2", "broker_TRADESTATION_V3", "broker_TRADOVATE_dev", "black_friday_mainpage", "black_friday_popup", "datawindow", "trading-fast-renew-oauth-token", "switching_trial_year_to_month_disabled", "switching_year_to_month_disabled", "default_year_billing_cycle_switcher", "marketing-analytics", "google-ads", "visible_address_fields_by_default", "slow-support-warning", "hide-trading-floating-toolbar", "tvcoins_donations", "save-short-streams", "details_disable_bid_ask", "vat_disabled", "pro_plan_upgrades_disabled", "pro_plan_downgrades_disabled", "disable_recaptcha_on_signup", "braintree-trial-implementation", "braintree-gopro-in-order-dialog", "braintree-apple-pay", "braintree-google-pay", "braintree-apple-pay-trial", "braintree-google-pay-trial", "braintree-venmo", "braintree-venmo-trial", "braintree-3ds-enabled", "braintree-3ds-allow-liability-shifted-transactions-only", "hide_gopro_popup_upgrade_button", "tradestation_use_sync_mapper", "yandex_metric_enabled", "broker_id_session", "remove_line_tools_from_content", "disable_retry_load_linetools_from_storage", "modular_broker_use_sync_mapper", "do_not_save_shared_line_tools_to_charts", "save_shared_line_tools", "chart_storage_with_broker_name", "do_not_invalidate_chart_on_changing_line_tools", "oanda-european-accounts-warning", "mobile_show_bottom_panel", "disable_save_settings", "desktop_version_notification_enabled", "favorites-in-broker-dropdown", "streams_stats_profile", "hide_ecomonic_events", "aggregating_page_pings", "mobile_trading_web", "mobile_trading_ios", "mobile_trading_android", "hide_real_brokers_on_mobile", "enable_trading_server_logger", "hide_ranges_label_colors", "disable_user_specific_encryption", "enable_deep_history_backtesting", "enable_deep_history_backtesting_list_of_trades", "show_checkbox_of_house_rules_to_idea_and_script", "minds_widget_enabled", "enable_partner_program", "disable_phone_verification_sms", "disable_sms_for_particular_countries", "no_overlap_mode_enabled", "collapse_pane_buttons_when_connected_to_broker", "enable_new_execution_style", "enable_new_replay_ui", "use_staging_verifier", "ibkr_use_new_init_session_api", "test_minds_connections", "enable_eventsource_pushstream_transport", "ftx_request_server_logger", "ibkr_request_server_logger", "check_ibkr_side_maintenance", "tradestation_request_server_logger", "trading_request_server_logger", "ecommpay_ru", "hide_ideas_on_chart", "RU_SF_disable", "RU_VOR_disable", "enable_monaco_editor", "show_continuous_contract_switches", "enable_new_custom_public_chats", "bottom_panel_track_events", "vertex-tax-included", "enable_place_order_context_in_instant_mode", "nyse_agreement", "sync_daterange_with_right_margin", "websocket_send_locale", "enable_edit_order_context_in_instant_mode", "show_data_problems_in_help_center"],
                            o = "[A-Z]+[a-zA-Z0-9_]+",
                            n = new RegExp(`broker_${o}_dev`, "g"),
                            i = new RegExp(`hide_${o}_on_ios`, "g"),
                            r = new RegExp(`hide_${o}_on_android`, "g"),
                            a = new RegExp(`hide_${o}_on_mobile_web`, "g");
                        return -1 === t.indexOf(e) && -1 === e.indexOf("-maintenance") && !1 === n.test(e) && !1 === i.test(e) && !1 === r.test(e) && !1 === a.test(e)
                    }(t)) || (!e[t] || -1 !== e[t]) && (!!("true" === n.getItem(TradingView.FeatureToggle.force_prefix + t) || window.is_authenticated && "undefined" != typeof user && user.settings && "true" === user.settings[TradingView.FeatureToggle.force_prefix + t]) || !("false" === n.getItem(TradingView.FeatureToggle.force_prefix + t) || window.is_authenticated && "undefined" != typeof user && user.settings && "false" === user.settings[TradingView.FeatureToggle.force_prefix + t]) && (!!e[t] && (1 === e[t] || i(t) <= e[t])))
                }
                return TradingView.onWidget() || o.e(34604).then(o.t.bind(o, 501867, 23)).then((t => {
                    t.on("featuretoggle", (function(t) {
                        var o = s(t.name);
                        e[t.name] = t.state, o !== s(t.name) && a.fire(t.name)
                    }))
                })), s
            }(window.featureToggleState || {}), t.FeatureToggle = TradingView.FeatureToggle, t.isFeatureEnabled = TradingView.isFeatureEnabled, t.onFeaturesStateChanged = TradingView.FeatureToggle.onFeaturesStateChanged.bind(TradingView.FeatureToggle)
        },
        251954: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                unsubscribe: () => c,
                on: () => l,
                subscribe: () => d,
                subscribeToAll: () => u,
                emit: () => g,
                emitOnce: () => h
            });
            var n = o(97639),
                i = o.n(n);
            const r = {},
                a = [],
                s = {};

            function c(e, t, o) {
                r[e].unsubscribe(o, t)
            }

            function l(e, t, o) {
                d(e, t, o)
            }

            function d(e, t, o, n) {
                r.hasOwnProperty(e) || (r[e] = new(i())), s[e] ? t.call(o) : r[e].subscribe(o, t, n)
            }

            function u(e) {
                a.push(e)
            }

            function g(e, ...t) {
                const o = [e].concat(t);
                a.forEach((e => {
                    e.apply(null, o)
                })), r.hasOwnProperty(e) && r[e].fire.apply(r[e], t)
            }

            function h(e) {
                s[e] && console.warn(`Something went wrong: emitOnce called multiple times with same event (${e})`), s[e] = !0, g.apply(null, arguments)
            }
        },
        588948: (e, t, o) => {
            "use strict";
            o.d(t, {
                updateInitData: () => a,
                getInitData: () => s,
                getFreshInitData: () => c,
                deleteField: () => l
            });
            var n = o(588537);
            const i = (0, o(911905).getLogger)("Common.InitData"),
                r = window.initData || {};

            function a() {
                window.initData && window.initData !== r && (Object.assign(r, window.initData), window.initData = r);
                const e = document.querySelectorAll('script[type="application/prs.init-data+json"]');
                for (let t = 0; t < e.length; t++) {
                    const o = e[t];
                    try {
                        const e = JSON.parse((0, n.ensureNotNull)(o.textContent));
                        Object.assign(r, e)
                    } catch (e) {
                        i.logWarn(`Failed to parse initData element. ${e}`)
                    } finally {
                        (0, n.ensureNotNull)(o.parentNode).removeChild(o)
                    }
                }
            }

            function s() {
                return r
            }

            function c() {
                return a(), r
            }

            function l(e) {
                delete r[e]
            }
        },
        49437: (e, t, o) => {
            "use strict";
            const {
                getLogger: n
            } = o(911905), i = n("TVLocalStorage");
            var r = function() {
                try {
                    this.isAvailable = !0, this.localStorage = window.localStorage, this.localStorage.setItem("tvlocalstorage.available", "true")
                } catch (e) {
                    delete this.isAvailable, delete this.localStorage
                }
                this._updateLength();
                try {
                    this._report()
                } catch (e) {}
            };
            r.prototype._report = function() {
                if (this.isAvailable) {
                    const e = 10,
                        t = [];
                    for (let e = 0; e < this.localStorage.length; e++) {
                        const o = this.key(e);
                        t.push({
                            key: o,
                            length: String(this.getItem(o)).length
                        })
                    }
                    t.sort(((e, t) => t.length - e.length));
                    const o = t.slice(0, e);
                    t.sort(((e, t) => t.key.length - e.key.length));
                    const n = t.slice(0, e);
                    i.logNormal(`Total amount of keys in Local Storage: ${this.length}`), i.logNormal(`Top ${e} keys with longest values: ${JSON.stringify(o)}`), i.logNormal(`Top ${e} longest key names: ${JSON.stringify(n)}`);
                    try {
                        navigator.storage.estimate().then((e => {
                            i.logNormal(`Storage estimate: ${JSON.stringify(e)}`)
                        }))
                    } catch (e) {}
                }
            }, r.prototype.length = 0, r.prototype.isAvailable = !1, r.prototype.localStorage = {
                "tvlocalstorage.available": "false"
            }, r.prototype._updateLength = function() {
                if (this.isAvailable) this.length = this.localStorage.length;
                else {
                    var e, t = 0;
                    for (e in this.localStorage) this.localStorage.hasOwnProperty(e) && t++;
                    this.length = t
                }
            }, r.prototype.key = function(e) {
                return this.isAvailable ? this.localStorage.key(e) : Object.keys(this.localStorage)[e]
            }, r.prototype.getItem = function(e) {
                return this.isAvailable ? this.localStorage.getItem(e) : void 0 === this.localStorage[e] ? null : this.localStorage[e]
            }, r.prototype.setItem = function(e, t) {
                this.isAvailable ? this.localStorage.setItem(e, t) : this.localStorage[e] = t, this._updateLength()
            }, r.prototype.removeItem = function(e) {
                this.isAvailable ? this.localStorage.removeItem(e) : delete this.localStorage[e], this._updateLength()
            }, r.prototype.clear = function() {
                this.isAvailable ? this.localStorage.clear() : this.localStorage = {}, this._updateLength()
            };
            var a = function(e) {
                this.storage = e
            };
            a.prototype.getItem = function(e) {
                return Promise.resolve(this.storage.getItem(e))
            }, a.prototype.setItem = function(e, t) {
                return Promise.resolve(this.storage.setItem(e, t))
            }, window.TVLocalStorage = new r, window.TVLocalStorageAsync = new a(window.TVLocalStorage), e.exports = {
                TVLocalStorage: window.TVLocalStorage,
                TVLocalStorageAsync: window.TVLocalStorageAsync
            }
        },
        314802: (e, t, o) => {
            "use strict";
            o.d(t, {
                isOnMobileAppPage: () => i,
                urlWithMobileAppParams: () => r
            });
            var n = o(910288);

            function i(e, t = !1) {
                const {
                    searchParams: o
                } = new URL(String(location)), i = n.get("tv_app") || "";
                let r = "true" === o.get("mobileapp_new"),
                    a = "true" === o.get("mobileapp");
                return t || (r || (r = ["android", "android_nps"].includes(i)), a || (a = "ios" === i)), !("new" !== e && "any" !== e || !r) || !("new" === e || !a)
            }

            function r(e) {
                if (i("new")) {
                    const t = new URL(e, location.href);
                    t.searchParams.set("mobileapp_new", "true"), e = t.toString()
                }
                if (i("old")) {
                    const t = new URL(e, location.href);
                    t.searchParams.set("mobileapp", "true"), e = t.toString()
                }
                return e
            }
        },
        659863: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                qaGlobals: () => n
            });
            const n = new class {
                constructor(e, t) {
                    this._test = e[t] = {}
                }
                provide(e, t) {
                    this._test[e] = t
                }
            }(window, "qaGlobals")
        },
        776734: (e, t, o) => {
            "use strict";
            async function n() {
                if (!window.user || window.user.do_not_track) return null; {
                    const e = (await Promise.all([o.e(26904), o.e(24081)]).then(o.bind(o, 823623))).getTrackerInstance();
                    return e || null
                }
            }
            o.d(t, {
                getTracker: () => n
            })
        },
        634786: (e, t, o) => {
            "use strict";
            o.d(t, {
                trackCookies: () => i
            });
            var n = o(776734);
            async function i(e, t) {
                var o;
                let i, r;
                i = "/" === window.location.pathname ? "index" : window.location.pathname.split("/")[1];
                const a = null !== (o = window.user.pro_plan) && void 0 !== o ? o : window.is_authenticated ? "free" : "visitor";
                window.is_authenticated && (r = window.user.id);
                const s = await (0, n.getTracker)();
                s && s.trackToastDialog("cookies", e, t, i, a, r)
            }
        },
        132317: (e, t, o) => {
            "use strict";
            o.d(t, {
                trackActionFollow: () => i
            });
            var n = o(776734);

            function i(e, t, o) {
                const i = o.authorId ? o.authorId.toString() : "",
                    r = o.symbol ? o.symbol : "",
                    a = o.symbolType ? o.symbolType : "";
                (0,
                    n.getTracker)().then((o => {
                    o && o.trackFollow(e, t, i, r, a)
                }))
            }
        },
        345848: (e, t, o) => {
            "use strict";
            o.d(t, {
                trackEvent: () => c,
                disableTrackingEvents: () => l
            });
            var n = o(251954),
                i = o(611688);
            const r = (0, o(911905).getLogger)("Common.TrackEvent"),
                a = [/Study_(Drawing)_(.*)/, /(Study)_(.*)@tv-basicstudies/, /(Study)_(.*)/, /(Chart Style) (.*)/];
            let s = !1;
            const c = (e, t, o) => {
                if (s) return;
                if (i.enabled("charting_library_base")) return void((e, t, o) => {
                    t = t || e || o || "";
                    let i = "";
                    for (let e = 0; e < a.length; e++) {
                        const o = t.match(a[e]);
                        if (o && 3 === o.length) {
                            t = o[1], i = o[2];
                            break
                        }
                    }(0, n.emit)(t.toLowerCase().replace(" ", "_"), {
                        category: e,
                        label: o,
                        value: i
                    })
                })(e, t, o);
                let c = (e ? e + ":" : "") + t;
                o && (c += " " + o), r.logNormal(c), i.enabled("widget") || !window._UNIT_TESTS && window.gtag && window.gtag("event", t, {
                    event_category: e,
                    event_label: o
                })
            };

            function l() {
                s = !0
            }
            "undefined" != typeof window && (window.TradingView = window.TradingView || {}, window.TradingView.trackEvent = c)
        },
        226722: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                TVXWindowEvents: () => a,
                getScopedTVXWindowEvents: () => s
            });
            o(897116);
            var n = o(911905),
                i = o(49437);
            const r = (0, n.getLogger)("XWindowEvents");
            var a;

            function s(e) {
                return {
                    on: (t, o) => a.on(`${e}.${t}`, o),
                    off: (t, o) => a.off(`${e}.${t}`, o),
                    emit: (t, o) => a.emit(`${e}.${t}`, o)
                }
            }! function(e) {
                const t = "tvxwevents.",
                    o = {};
                let n;
                window.BroadcastChannel ? (n = new BroadcastChannel("tvxwevents"), n.addEventListener("message", (function(e) {
                    const {
                        data: {
                            event: t,
                            value: n
                        }
                    } = e;
                    o[t] && o[t].forEach((e => {
                        e(n)
                    }))
                })), function() {
                    const e = [],
                        o = performance.now();
                    for (let o = 0; o < i.TVLocalStorage.length; o++) {
                        const n = i.TVLocalStorage.key(o);
                        n.startsWith(t) && e.push(n)
                    }
                    const n = i.TVLocalStorage.length;
                    for (const t of e) i.TVLocalStorage.removeItem(t);
                    const a = performance.now() - o;
                    r.logNormal(`Total keys amount in local storage on operation start: ${n}`), r.logNormal(`Keys amount in local storage to be deleted: ${e.length}`), r.logNormal(`Keys to be deleted from local storage: ${JSON.stringify(e)}`), r.logNormal(`Removing keys from local storage took ${a} ms`)
                }()) : window.addEventListener("storage", (function(e) {
                    const {
                        newValue: n,
                        key: r
                    } = e;
                    if (null === n || !r || !r.startsWith(t)) return;
                    const a = r.substring(t.length);
                    o[a] && o[a].forEach((t => {
                        t(e.newValue)
                    }));
                    i.TVLocalStorage.removeItem(r)
                })), e.on = function(e, t) {
                    o[e] || (o[e] = []), o[e].push(t)
                }, e.off = function(e, t) {
                    if (!o[e]) return;
                    const n = o[e].indexOf(t); - 1 !== n && (1 === o[e].length ? delete o[e] : o[e].splice(n, 1))
                }, e.emit = function(e, o = Date.now()) {
                    try {
                        n ? n.postMessage({
                            event: e,
                            value: o
                        }) : i.TVLocalStorage.setItem(t + e, o.toString())
                    } catch (e) {
                        r.logError(e.message)
                    }
                }
            }(a || (a = {}))
        },
        704765: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108" width="108" height="108"><path fill="#2962FF" stroke="#2962FF" stroke-linejoin="round" stroke-width="2" d="m57.29 54a15.43 15.43 0 1 1 0-30.86 15.43 15.43 0 0 1 0 30.86zm5.06 10.3C66.2 64.3 83 69.74 83 85.5v3.47H31.57V85.9a21.6 21.6 0 0 1 21.6-21.6l9.18.02z"/><path fill="#4a4a4a" d="m48.71 50.86a17.43 17.43 0 1 1 0-34.86 17.43 17.43 0 0 1 0 34.86zm0-4a13.43 13.43 0 1 0 0-26.86 13.43 13.43 0 0 0 0 26.86zM25 81.83v-1.09a19.6 19.6 0 0 1 19.6-19.6 5627.07 5627.07 0 0 1 9.09.02 2 2 0 0 0 .17-4l-4.67-.01H44.6A23.6 23.6 0 0 0 21 80.74v3.08c0 1.1.9 2 2 2h51.43a2 2 0 1 0 0-4H25zM64.14 70h20.57a2 2 0 1 0 0-4H64.14a2 2 0 1 0 0 4z"/></svg>'
        }
    }
]);