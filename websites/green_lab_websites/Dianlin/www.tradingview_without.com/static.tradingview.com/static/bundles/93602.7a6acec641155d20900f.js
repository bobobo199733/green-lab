"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [93602, 38357], {
        745269: (e, t, i) => {
            i.d(t, {
                dur: () => n,
                easingFunc: () => s,
                CubicBezier: () => o,
                color: () => r
            });
            const n = 350,
                s = {
                    linear: e => e,
                    easeInQuad: e => e * e,
                    easeOutQuad: e => e * (2 - e),
                    easeInOutQuad: e => e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1,
                    easeInCubic: e => e * e * e,
                    easeOutCubic: e => --e * e * e + 1,
                    easeInOutCubic: e => e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
                    easeInQuart: e => e * e * e * e,
                    easeOutQuart: e => 1 - --e * e * e * e,
                    easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e,
                    easeInQuint: e => e * e * e * e * e,
                    easeOutQuint: e => 1 + --e * e * e * e * e,
                    easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
                };
            class o {
                constructor(e, t, i, n) {
                    this._mX1 = e, this._mY1 = t, this._mX2 = i, this._mY2 = n
                }
                easingFunc(e) {
                    return this._mX1 === this._mY1 && this._mX2 === this._mY2 ? e : this._calcBezier(this._getTForX(e))
                }
                _a(e, t) {
                    return 1 - 3 * t + 3 * e
                }
                _b(e, t) {
                    return 3 * t - 6 * e
                }
                _c(e) {
                    return 3 * e
                }
                _calcBezier(e) {
                    return ((this._a(this._mY1, this._mY2) * e + this._b(this._mY1, this._mY2)) * e + this._c(this._mY1)) * e
                }
                _getSlope(e) {
                    return 3 * this._a(this._mX1, this._mX2) * e * e + 2 * this._b(this._mX1, this._mX2) * e + this._c(this._mX1)
                }
                _getTForX(e) {
                    let t = e;
                    for (let i = 0; i < 4; ++i) {
                        const i = this._getSlope(t);
                        if (0 === i) return t;
                        t -= (this._calcBezier(t) - e) / i
                    }
                    return t
                }
            }
            const r = {
                black70: "#4A4A4A",
                black80: "#535353"
            }
        },
        83436: (e, t, i) => {
            i.d(t, {
                Icon: () => s
            });
            var n = i(559496);
            const s = n.forwardRef(((e, t) => {
                const {
                    icon: i = "",
                    ...s
                } = e;
                return n.createElement("span", { ...s,
                    ref: t,
                    dangerouslySetInnerHTML: {
                        __html: i
                    }
                })
            }))
        },
        581996: (e, t, i) => {
            i.d(t, {
                ResizerDetacherState: () => r
            });
            var n = i(588537),
                s = i(262325),
                o = i.n(s);
            class r {
                constructor(e) {
                    this._alive = new(o()), this._container = new(o()), this._width = new(o()), this._height = new(o()), this._fullscreen = new(o()), this._detachable = new(o()), this._fullscreenable = new(o()), this._visible = new(o()), this._availWidth = new(o()), this._availHeight = new(o()), this._owner = new(o()), this._ownersStack = [], this.owner = this._owner.readonly(), this._bridge = {
                        alive: this._alive.readonly(),
                        container: this._container.readonly(),
                        width: this._width.readonly(),
                        height: this._height.readonly(),
                        fullscreen: this._fullscreen.readonly(),
                        detachable: this._detachable.readonly(),
                        fullscreenable: this._fullscreenable.readonly(),
                        visible: this._visible.readonly(),
                        availWidth: this._availWidth.readonly(),
                        availHeight: this._availHeight.readonly(),
                        remove: () => {
                            const e = this._owner.value();
                            e && e.remove && e.remove()
                        },
                        negotiateWidth: e => {
                            const t = this._owner.value();
                            t && t.negotiateWidth && t.negotiateWidth(e)
                        },
                        negotiateHeight: e => {
                            const t = this._owner.value();
                            t && t.negotiateHeight && t.negotiateHeight(e)
                        },
                        requestFullscreen: () => {
                            const e = this._owner.value();
                            e && e.requestFullscreen && e.requestFullscreen()
                        },
                        exitFullscreen: () => {
                            const e = this._owner.value();
                            e && e.exitFullscreen && e.exitFullscreen()
                        },
                        detach: e => {
                            const t = this._owner.value();
                            t && t.detach && t.detach(e)
                        },
                        attach: () => {
                            const e = this._owner.value();
                            e && e.attach && e.attach()
                        }
                    }, e && this.pushOwner(e)
                }
                bridge() {
                    return this._bridge
                }
                pushOwner(e) {
                    if (!e.alive.value()) return;
                    for (const e of this._ownersStack) this._unsubscribeOwner(e);
                    const t = {
                        owner: e
                    };
                    this._ownersStack.push(t), this._subscribeOwner(t)
                }
                _subscribeOwner(e) {
                    const t = e.owner;
                    if (e.deathWatcher || (this._alive.setValue(!0), e.deathWatcher = t.alive.spawn(), e.deathWatcher.subscribe((t => {
                            t || this._deadHandler(e)
                        }))), this._owner.setValue(t), !e.subscriptions) {
                        const i = e.subscriptions = [];
                        this._visible.setValue(!1);
                        const n = (e, t) => {
                            if (e) {
                                const n = e.spawn();
                                i.push(n), n.subscribe((e => {
                                    t.setValue(e)
                                }), {
                                    callWithLast: !0
                                })
                            } else t.deleteValue()
                        };
                        n(t.container, this._container), n(t.width, this._width), n(t.height, this._height), n(t.fullscreen, this._fullscreen), n(t.detachable, this._detachable), n(t.fullscreenable, this._fullscreenable), n(t.availWidth, this._availWidth), n(t.availHeight, this._availHeight), n(t.visible, this._visible)
                    }
                }
                _unsubscribeOwner(e, t) {
                    if (e.subscriptions) {
                        for (const t of e.subscriptions) t.unsubscribe();
                        e.subscriptions = null
                    }
                    t && e.deathWatcher && (e.deathWatcher.unsubscribe(), e.deathWatcher = null)
                }
                _deadHandler(e) {
                    const t = this._ownersStack.indexOf(e);
                    (0, n.assert)(-1 !== t, "sanitized owner should be in stack");
                    for (let e = this._ownersStack.length - 1; e >= t; e--) this._unsubscribeOwner(this._ownersStack[e], !0);
                    this._ownersStack.length = t, t > 0 ? this._subscribeOwner(this._ownersStack[t - 1]) : (this._alive.setValue(!1), this._owner.deleteValue())
                }
            }
        },
        90523: (e, t, i) => {
            i.d(t, {
                Root: () => d
            });
            var n = i(262325),
                s = i.n(n),
                o = i(581996);
            class r {
                constructor(e) {
                    this._document = e, this.isFullscreen = new(s());
                    const t = () => {
                        const e = ["fullscreenElement", "webkitFullscreenElement", "mozFullscreenElement", "mozFullScreenElement", "msFullscreenElement"];
                        for (let t = 0; t < e.length; t++) {
                            const i = e[t];
                            if (i in this._document) {
                                this.isFullscreen.setValue(!!this._document[i]);
                                break
                            }
                        }
                    };
                    t();
                    for (const i of ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"]) e.addEventListener(i, t, !1)
                }
                enter() {
                    const e = this._document.documentElement;
                    for (const t of ["requestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen", "msRequestFullscreen"])
                        if ("function" == typeof e[t]) {
                            e[t]();
                            break
                        }
                    this.isFullscreen.setValue(!0)
                }
                exit() {
                    const e = this._document;
                    for (const t of ["exitFullscreen", "mozCancelFullScreen", "mozExitFullscreen", "webkitExitFullscreen", "msExitFullscreen"])
                        if ("function" == typeof e[t]) {
                            e[t]();
                            break
                        }
                    this.isFullscreen.setValue(!1)
                }
            }
            var a = i(554433),
                l = i(314802),
                c = i(588537),
                u = i(638456);
            class d {
                constructor(e) {
                    this._updateDocumentHeight = e => {
                        "visual" === this._viewportType && this._window.document.documentElement.style.setProperty("height", `${e}px`, "important")
                    }, this._window = e, this._fullscreenApi = new r(e.document), this._viewportType = u.CheckMobile.iOS() && !(0, l.isOnMobileAppPage)("any") && this._window.visualViewport ? "visual" : "quirks", "visual" === this._viewportType ? this._viewport = (0, c.ensureDefined)(this._window.visualViewport) : this._viewport = this._window;
                    const t = this._layoutSizeSensor = this._window.document.createElement("div");
                    t.id = "layout-size-sensor", t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.right = "0", t.style.bottom = "0", t.style.pointerEvents = "none", t.style.visibility = "hidden", this._initFullscreen()
                }
                allocate() {
                    this.free();
                    const e = this._window.document,
                        t = e.createElement("div");
                    t.classList.add("js-rootresizer__contents"),
                        t.style.position = "relative", t.style.width = "100%", t.style.height = "100%", e.body.insertAdjacentElement("afterbegin", t), e.body.insertAdjacentElement("afterbegin", this._layoutSizeSensor), this._visibilityApi = new a.VisibilityApi(this._window.document);
                    const i = {
                        alive: new(s())(!0),
                        fullscreenable: new(s())(!0),
                        container: new(s())(t),
                        width: new(s()),
                        height: new(s()),
                        availWidth: new(s()),
                        availHeight: new(s()),
                        visible: this._visibilityApi.isVisible,
                        fullscreen: this._fullscreenApi.isFullscreen,
                        remove: () => {
                            i.alive.setValue(!1)
                        },
                        attach: () => {
                            i.alive.setValue(!1), this._window.close()
                        },
                        requestFullscreen: () => {
                            this._requestFullscreen()
                        },
                        exitFullscreen: () => {
                            this._exitFullscreen()
                        }
                    };
                    return i.alive.subscribe((e => {
                        e || i !== this._area || this.free()
                    })), this._area = i, this._resizeHandler = () => {
                        const e = this._width(i) || 800,
                            t = this._height(i) || 600;
                        i.availHeight.setValue(t), i.availWidth.setValue(e), i.height.setValue(t), i.width.setValue(e)
                    }, this._area.height.subscribe(this._updateDocumentHeight, {
                        callWithLast: !0
                    }), this._resizeHandler(), this._viewport.addEventListener("resize", this._resizeHandler), new o.ResizerDetacherState(i).bridge()
                }
                free() {
                    if (this._resizeHandler && (this._viewport.removeEventListener("resize", this._resizeHandler), this._resizeHandler = void 0), this._visibilityApi && (this._visibilityApi.destroy(), this._visibilityApi = void 0), this._area) {
                        const e = this._area;
                        this._area = void 0, e.height.unsubscribe(this._updateDocumentHeight), e.alive.setValue(!1);
                        const t = e.container.value(),
                            i = null == t ? void 0 : t.parentElement;
                        i && (i.removeChild(t), i.removeChild(this._layoutSizeSensor))
                    }
                }
                _height(e) {
                    if ("visual" === this._viewportType) return this._layoutSizeSensor.clientHeight;
                    return e.container.value().clientHeight
                }
                _width(e) {
                    return e.container.value().clientWidth
                }
                _requestFullscreen() {
                    this._fullscreenApi.enter()
                }
                _exitFullscreen() {
                    this._fullscreenApi.exit()
                }
                _initFullscreen() {
                    this._fullscreenApi.isFullscreen.subscribe((e => {
                        this._resizeHandler && this._resizeHandler()
                    }))
                }
            }
        },
        554433: (e, t, i) => {
            i.d(t, {
                VisibilityApi: () => o
            });
            var n = i(262325),
                s = i.n(n);
            class o {
                constructor(e) {
                    let t;
                    this.isVisible = new(s())(!0);
                    let i = null;
                    for (const n of ["", "moz", "ms", "webkit"]) {
                        const s = n ? `${n}Hidden` : "hidden";
                        if (s in e) {
                            t = `${n}visibilitychange`, i = () => {
                                this.isVisible.setValue(!e[s])
                            }, i(), e.addEventListener(t, i, !1);
                            break
                        }
                    }
                    this.destroy = () => {
                        i && (e.removeEventListener(t, i, !1), i = null)
                    }
                }
            }
        },
        84119: (e, t, i) => {
            i.d(t, {
                followSymbol: () => s
            });
            var n = i(883721);

            function s(e) {
                return (0, n.handleJSONRequest)({
                    path: "/social/follow-the-symbol/",
                    requestData: {
                        body: e,
                        method: "POST"
                    }
                })
            }
        },
        174519: (e, t, i) => {
            i.d(t, {
                reconnectChartApi: () => n,
                setBroker: () => s
            });
            i(247872);

            function n(e) {
                const t = window.ChartApiInstance;
                window.is_authenticated && (t.disconnect(), e && t.authTokenManager().reset(), setTimeout((() => t.connect()), 500))
            }

            function s(e) {
                window.ChartApiInstance.setBroker(e)
            }
        },
        371856: (e, t, i) => {
            i.d(t, {
                japaneseChartStyles: () => s,
                commonChartStyles: () => o,
                allChartStyles: () => r
            });
            var n = i(611688);

            function s() {
                const e = [8];
                return n.enabled("japanese_chart_styles") && (e.push(4, 7, 5, 6), e.push(11)), e
            }

            function o() {
                const e = [0, 1, 9, 13, 2, 3, 10];
                return e.push(12), e
            }

            function r() {
                return o().concat(s())
            }
        },
        381269: (e, t, i) => {
            i.d(t, {
                customFormatters: () => n
            });
            const n = {
                dateFormatter: null,
                timeFormatter: null,
                tickMarkFormatter: null,
                priceFormatterFactory: null
            }
        },
        830318: (e, t, i) => {
            i.d(t, {
                monthFormatFunction: () => y,
                dateFormatFunctions: () => m,
                getDateFormatWithWeekday: () => E,
                availableDateFormats: () => T,
                defaultDateFormat: () => p
            });
            var n = i(575932),
                s = i(39654),
                o = i(689765);
            const r = {
                    1: () => (0, n.t)("Jan"),
                    2: () => (0, n.t)("Feb"),
                    3: () => (0, n.t)("Mar"),
                    4: () => (0, n.t)("Apr"),
                    5: () => (0, n.t)("May", {
                        context: "short"
                    }),
                    6: () => (0, n.t)("Jun"),
                    7: () => (0, n.t)("Jul"),
                    8: () => (0, n.t)("Aug"),
                    9: () => (0, n.t)("Sep"),
                    10: () => (0, n.t)("Oct"),
                    11: () => (0, n.t)("Nov"),
                    12: () => (0, n.t)("Dec")
                },
                a = (e, t) => (t ? e.getMonth() : e.getUTCMonth()) + 1,
                l = (e, t) => t ? e.getFullYear() : e.getUTCFullYear(),
                c = e => e.toLocaleDateString(window.language ? (0, s.getIsoLanguageCodeFromLanguage)(window.language) : void 0, {
                    weekday: "short",
                    timeZone: "UTC"
                }),
                u = (e, t) => (0, o.numberToStringWithLeadingZero)(((e, t) => t ? e.getDate() : e.getUTCDate())(e, t), 2),
                d = (e, t) => r[a(e, t)](),
                h = (e, t) => (0, o.numberToStringWithLeadingZero)(a(e, t), 2),
                _ = (e, t) => (0, o.numberToStringWithLeadingZero)(l(e, t) % 100, 2),
                S = (e, t) => (0, o.numberToStringWithLeadingZero)(l(e, t), 4),
                y = (e, t) => d(e, t),
                m = {
                    "dd MMM 'yy": (e, t) => `${u(e,t)} ${d(e,t)} '${_(e,t)}`,
                    "MMM dd, yyyy": (e, t) => `${d(e,t)} ${u(e,t)}, ${S(e,t)}`,
                    "MMM dd": (e, t) => `${d(e,t)} ${u(e,t)}`,
                    "yyyy-MM-dd": (e, t) => `${S(e,t)}-${h(e,t)}-${u(e,t)}`,
                    "yy-MM-dd": (e, t) => `${_(e,t)}-${h(e,t)}-${u(e,t)}`,
                    "yy/MM/dd": (e, t) => `${_(e,t)}/${h(e,t)}/${u(e,t)}`,
                    "yyyy/MM/dd": (e, t) => `${S(e,t)}/${h(e,t)}/${u(e,t)}`,
                    "dd-MM-yyyy": (e, t) => `${u(e,t)}-${h(e,t)}-${S(e,t)}`,
                    "dd-MM-yy": (e, t) => `${u(e,t)}-${h(e,t)}-${_(e,t)}`,
                    "dd/MM/yy": (e, t) => `${u(e,t)}/${h(e,t)}/${_(e,t)}`,
                    "dd/MM/yyyy": (e, t) => `${u(e,t)}/${h(e,t)}/${S(e,t)}`,
                    "MM/dd/yy": (e, t) => `${h(e,t)}/${u(e,t)}/${_(e,t)}`,
                    "MM/dd/yyyy": (e, t) => `${h(e,t)}/${u(e,t)}/${S(e,t)}`
                };

            function E(e) {
                return "ja" === window.language ? (t, i) => `${m[e](t,i)} (${c(t)})` : (t, i) => `${c(t)} ${m[e](t,i)}`
            }
            const T = Object.keys(m),
                p = () => -1 !== ["ja", "ko", "zh", "zh_TW"].indexOf(window.language || "") ? "yyyy-MM-dd" : "dd MMM 'yy"
        },
        68522: (e, t, i) => {
            window.TradingView = window.TradingView || {}, window.requireAll = function(e) {
                return e.keys().map(e)
            }, i(823127), i(778785).setClasses(), i(760947), i(128327).install(), i(8587), i(560170), i(835664), i(255091), i(638456), i(270617), i(72461), i(897116), i(296150), i(247872), i(682614), i(934440), i(834925), i(125226), i(49437), i(694755), i(250109), i(62802)
        },
        883721: (e, t, i) => {
            i.d(t, {
                handleVoidRequest: () => o,
                handleJSONRequest: () => r,
                APIError: () => a
            });
            var n = i(86674);

            function s({
                path: e,
                requestData: t,
                signal: i
            }) {
                const s = new URL(e, window.origin);
                if ("GET" === t.method && t.query)
                    for (const [e, i] of Object.entries(t.query)) void 0 !== i && s.searchParams.append(e, i);
                const o = {
                    method: t.method,
                    credentials: "same-origin",
                    signal: i
                };
                return "POST" !== t.method && "PUT" !== t.method || (o.body = JSON.stringify(t.body), o.headers = new Headers({
                    "Content-Type": "application/json"
                })), (0, n.fetch)(s.toString(), o)
            }
            async function o(e) {
                const t = await s(e);
                if (!t.ok) try {
                    const e = await t.json();
                    return Promise.reject(new a(t.status, e))
                } catch (e) {
                    return Promise.reject(new a(t.status, {}))
                }
            }
            async function r(e) {
                const t = await s(e);
                try {
                    const e = await t.json();
                    return t.ok ? e : Promise.reject(new a(t.status, e))
                } catch (e) {
                    return Promise.reject(new a(t.status, {}))
                }
            }
            class a extends Error {
                constructor(e, t) {
                    super([e, t.code, t.detail].filter(Boolean).join(" - ")), this.status = e, this.payload = t, this.name = "APIError", Object.setPrototypeOf(this, new.target.prototype)
                }
            }
        },
        876242: (e, t, i) => {
            i.r(t), i.d(t, {
                CubicBezier: () => n.CubicBezier,
                color: () => n.color,
                dur: () => n.dur,
                easingFunc: () => n.easingFunc
            });
            var n = i(745269)
        },
        888035: (e, t, i) => {
            var n;
            i.d(t, {
                    BillingCycle: () => n
                }),
                function(e) {
                    e.Monthly = "m", e.ThreeMonths = "3m", e.OneYear = "y", e.TwoYears = "2y"
                }(n || (n = {}))
        },
        348102: (e, t, i) => {
            i.d(t, {
                getCountries: () => o
            });
            var n = i(86674);
            let s = null;
            async function o() {
                var e;
                if (null !== s) return s;
                const t = await (0, n.fetch)("/accounts/countries/", {
                    credentials: "include"
                });
                if (!t.ok) {
                    const e = await t.json();
                    throw Error(String(e))
                }
                const i = await t.json();
                return s = { ...i,
                    current_country_code: null !== (e = i.current_country_code) && void 0 !== e ? e : "US"
                }, s
            }
        },
        629588: (e, t, i) => {
            i.r(t), i.d(t, {
                onGoProDialog: () => r,
                createGoProDialog: () => a
            });
            const n = new Set,
                s = [],
                o = new Promise((e => {
                    window.addEventListener("load", (() => {
                        setTimeout((() => {
                            e()
                        }), 3e3)
                    })), setTimeout((() => {
                        e()
                    }), 3e3)
                }));

            function r(e, t) {
                s.push(e), t && t.forEach((e => {
                    n.add(e)
                }))
            }
            async function a(e) {
                var t;
                if (await o, s.forEach((t => {
                        t(e.feature)
                    })), n.has(e.feature)) return;
                const r = await Promise.all([i.e(90519), i.e(90926), i.e(8834), i.e(30063), i.e(99740), i.e(77301), i.e(75966), i.e(18867), i.e(61820), i.e(31402), i.e(92362), i.e(75514), i.e(24377), i.e(92697), i.e(38578), i.e(84268), i.e(89137), i.e(5246)]).then(i.bind(i, 564576));
                await (null === (t = window.pro) || void 0 === t ? void 0 : t.ensureValidShopConf()), r.renderGoproDialog(e)
            }
            window.TradingView.createGoProDialog = a
        },
        483601: (e, t, i) => {
            var n, s;
            i.d(t, {
                    PredefinedAction: () => n,
                    ContentAlign: () => s
                }),
                function(e) {
                    e.Close = "close", e.OpenGopro = "openGopro"
                }(n || (n = {})),
                function(e) {
                    e.Center = "center", e.Left = "left"
                }(s || (s = {}))
        },
        338733: (e, t, i) => {
            function n(e) {
                return Promise.all([i.e(90519), i.e(10146), i.e(8348), i.e(90926), i.e(37135), i.e(48181), i.e(8834), i.e(35354), i.e(5979), i.e(30063), i.e(78941), i.e(99740), i.e(91670), i.e(15107), i.e(53221), i.e(63280), i.e(77301), i.e(67161), i.e(37619), i.e(34640), i.e(9935), i.e(36603), i.e(18867), i.e(44119), i.e(29499), i.e(82520), i.e(52323), i.e(61820), i.e(98432), i.e(57561), i.e(73116), i.e(84458), i.e(53639), i.e(50289), i.e(91124), i.e(98046), i.e(51040), i.e(73477), i.e(49830), i.e(75514), i.e(66414), i.e(9541), i.e(26761), i.e(85518), i.e(86328), i.e(3509), i.e(41748), i.e(20444), i.e(63797), i.e(48323), i.e(88049), i.e(78703)]).then(i.bind(i, 583008)).then((t => t.openPaymentOrderDialog(e)))
            }
            i.r(t), i.d(t, {
                showPaymentOrderDialog: () => n
            })
        },
        706162: (e, t, i) => {
            var n;
            i.d(t, {
                    StatusExtraData: () => n
                }),
                function(e) {
                    e.Opened = "opened", e.Closed = "closed"
                }(n || (n = {}))
        },
        459689: (e, t, i) => {
            i.d(t, {
                check: () => s
            });
            var n = i(348102);
            async function s() {
                const {
                    is_restricted: e
                } = await (0, n.getCountries)();
                return e
            }
        },
        224314: (e, t, i) => {
            i.r(t), i.d(t, {
                showRestrictedCountryNotificationDialog: () => o
            });
            var n = i(575932),
                s = i(779923);

            function o() {
                (0, s.showWarning)({
                    title: (0, n.t)("We can't accept your payment right now"),
                    text: (0, n.t)("TradingView needs to comply with U.S. trade embargoes and economic sanctions, so we're unable to accept any payments from the region you're in at the moment.")
                })
            }
        },
        619101: (e, t, i) => {
            i.d(t, {
                showSupportDialog: () => n
            });
            i(659863);

            function n(e) {
                return Promise.all([i.e(10146), i.e(48181), i.e(35354), i.e(5979), i.e(78941), i.e(99740), i.e(91670), i.e(15107), i.e(93419), i.e(53221), i.e(63280), i.e(77301), i.e(55099), i.e(84845), i.e(50407), i.e(71452), i.e(94430), i.e(36603), i.e(44415), i.e(56391), i.e(25773), i.e(98432), i.e(57561), i.e(5953), i.e(75559), i.e(56484), i.e(75514), i.e(25977), i.e(23127), i.e(24951), i.e(83813), i.e(79781), i.e(9103), i.e(29667), i.e(26612), i.e(74540), i.e(91938), i.e(57274)]).then(i.bind(i, 24056)).then((t => new t.SupportDialog(e).open()))
            }
        },
        296150: (e, t, i) => {
            var n = i(823127);
            const s = i(911905).getLogger("Chart.FollowSymbolsButton"),
                o = i(132317).trackActionFollow,
                r = i(84119).followSymbol;
            ! function() {
                var e = ".js-follow-symbol",
                    t = {};

                function i(e) {
                    if (!e.symbol) return n.Deferred().reject().promise();
                    if (null == e.follow && Object.prototype.hasOwnProperty.call(t, e.symbol)) return t[e.symbol].promise;
                    var i = n.Deferred(),
                        s = i.promise();
                    return t[e.symbol] || (t[e.symbol] = {}), t[e.symbol].promise = s, r(e).then((n => {
                        n.error ? i.reject(n) : (i.resolve(n), n.symbol !== e.symbol && (t[n.symbol] = t[e.symbol]))
                    })).catch((() => {
                        i.reject.apply(i, arguments)
                    })), s
                }

                function a(e, t) {
                    return i({
                        symbol: e,
                        follow: +!!t
                    }).done((function(t) {
                        var i = t.followTheSymbol;
                        l(e, i)
                    })).promise()
                }

                function l(t, i) {
                    n(e).each((function() {
                        var e = n(this);
                        e.data("symbol") === t && u(e, i)
                    }))
                }

                function c() {
                    for (var i in t) delete t[i];
                    u(n(e), !1)
                }

                function u(e, t) {
                    t = !!t, e.each((function() {
                        var e = n(this);
                        e.toggleClass("js-follow-symbol--followed", t).toggleClass(e.data("follow-symbol-button-followed-style-class") ? e.data("follow-symbol-button-followed-style-class") : "i-checked", t)
                    }))
                }
                n(document).on("click", e, (function(e) {
                    var t = n(this),
                        i = t.data("symbol"),
                        s = t.data("type");
                    i && runOrSignIn((function() {
                        var e = function(e) {
                                return e.hasClass("js-follow-symbol--followed")
                            }(t),
                            n = a(i, !e),
                            r = e ? "Unfollow" : "Follow",
                            l = {
                                symbol: i,
                                symbolType: s
                            };
                        u(t, !e), o("Symbol", r, l), n.fail((function() {
                            u(t, e)
                        }))
                    }), {
                        source: "Follow symbol button"
                    })
                })), TradingView.FollowSymbols = {
                    changeState: a,
                    makeButton: function(e) {
                        var t = (e = e || {}).$button,
                            o = e.symbol;
                        return t ? (t.addClass("js-follow-symbol tv-button tv-button--success"), o || (o = t.data("symbol"))) : t = n('<span class="js-follow-symbol tv-button tv-button--success">'), t.data({
                            "follow-symbol-button-followed-style-class": "i-checked",
                            "follow-symbol-button-change-text": void 0 === e.changeText || !!e.changeText
                        }), o ? (i({
                            symbol: o
                        }).pipe((function(e) {
                            t.attr("data-symbol", e.symbol), u(t, e.followTheSymbol)
                        })), t) : (s.logError("symbol is required"), t)
                    },
                    request: i
                }, n((function() {
                    loginStateChange.subscribe(TradingView.FollowSymbols, (function(s) {
                        s || (window.is_authenticated ? (c(), n(e).each((function() {
                            var e = n(this).data("symbol");
                            e && (Object.prototype.hasOwnProperty.call(t, e) || i({
                                symbol: e
                            }).done((function(e) {
                                l(e.symbol, e.followTheSymbol)
                            })))
                        }))) : c())
                    }))
                }))
            }()
        },
        735357: (e, t, i) => {
            var n = i(575932).t;
            i(897116);
            var s = i(324951),
                o = i(414879),
                r = o.WeekDays,
                a = o.Months,
                l = i(936410),
                c = l.monthsFullNames,
                u = l.monthsShortNames,
                d = l.weekDaysFullNames,
                h = l.weekDaysShortNames,
                _ = l.weekDaysMiniNames;
            window.language && (s.locale(window.language, {
                months: [c[a.JANUARY], c[a.FEBRUARY], c[a.MARCH], c[a.APRIL], c[a.MAY], c[a.JUNE], c[a.JULY], c[a.AUGUST], c[a.SEPTEMBER], c[a.OCTOBER], c[a.NOVEMBER], c[a.DECEMBER]],
                monthsShort: [u[a.JANUARY], u[a.FEBRUARY], u[a.MARCH], u[a.APRIL], u[a.MAY], u[a.JUNE], u[a.JULY], u[a.AUGUST], u[a.SEPTEMBER], u[a.OCTOBER], u[a.NOVEMBER], u[a.DECEMBER]],
                weekdays: [d[r.SUNDAY], d[r.MONDAY], d[r.TUESDAY], d[r.WEDNESDAY], d[r.THURSDAY], d[r.FRIDAY], d[r.SATURDAY]],
                weekdaysShort: [h[r.SUNDAY], h[r.MONDAY], h[r.TUESDAY], h[r.WEDNESDAY], h[r.THURSDAY], h[r.FRIDAY], h[r.SATURDAY]],
                weekdaysMin: [_[r.SUNDAY], _[r.MONDAY], _[r.TUESDAY], _[r.WEDNESDAY], _[r.THURSDAY], _[r.FRIDAY], _[r.SATURDAY]],
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "MMM D",
                    l: "M/D/YYYY",
                    LL: "MMM D, YYYY",
                    ll: "MMM D LT",
                    LLL: "LT - LL",
                    lll: "MMM D, YYYY LT",
                    LLLL: "ddd D MMMM YYYY LT",
                    llll: "ddd D MMM YYYY LT"
                },
                calendar: {
                    sameDay: n("{specialSymbolOpen}Today at{specialSymbolClose} {dayTime}").format({
                        specialSymbolOpen: "[",
                        specialSymbolClose: "]",
                        dayTime: "LT"
                    }),
                    nextDay: n("{specialSymbolOpen}Tomorrow at{specialSymbolClose} {dayTime}").format({
                        specialSymbolOpen: "[",
                        specialSymbolClose: "]",
                        dayTime: "LT"
                    }),
                    nextWeek: n("{dayName} {specialSymbolOpen}at{specialSymbolClose} {dayTime}").format({
                        specialSymbolOpen: "[",
                        specialSymbolClose: "]",
                        dayTime: "LT",
                        dayName: "dddd"
                    }),
                    lastDay: n("{specialSymbolOpen}Yesterday at{specialSymbolClose} {dayTime}").format({
                        specialSymbolOpen: "[",
                        specialSymbolClose: "]",
                        dayTime: "LT"
                    }),
                    lastWeek: n("{specialSymbolOpen}Last{specialSymbolClose} {dayName} {specialSymbolOpen}at{specialSymbolClose} {dayTime}").format({
                        specialSymbolOpen: "[",
                        specialSymbolClose: "]",
                        dayTime: "LT",
                        dayName: "dddd"
                    }),
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return e === n("just now") ? e : n("in %s", {
                            context: "time_range"
                        }).replace("%s", e)
                    },
                    past: function(e) {
                        return e === n("just now") ? e : n("%s ago", {
                            context: "time_range"
                        }).replace("%s", e)
                    },
                    s: n("just now"),
                    m: function(e) {
                        return n("%d minute", {
                            plural: "%d minutes",
                            count: e
                        }).replace("%d", e)
                    },
                    mm: function(e) {
                        return n("%d minute", {
                            plural: "%d minutes",
                            count: e
                        }).replace("%d", e)
                    },
                    h: n("an hour"),
                    hh: function(e) {
                        return n("%d hour", {
                            plural: "%d hours",
                            count: e
                        }).replace("%d", e)
                    },
                    d: n("a day"),
                    dd: function(e) {
                        return n("%d day", {
                            plural: "%d days",
                            count: e
                        }).replace("%d", e)
                    },
                    M: n("a month"),
                    MM: function(e) {
                        return n("%d month", {
                            plural: "%d months",
                            count: e
                        }).replace("%d", e)
                    },
                    y: n("a year"),
                    yy: function(e) {
                        return n("%d year", {
                            plural: "%d years",
                            count: e
                        }).replace("%d", e)
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), s.locale(window.language)), e.exports = s
        },
        314370: (e, t, i) => {
            var n = i(86674).fetch,
                s = i(893278).visitPaymentPage,
                o = i(888035).BillingCycle,
                r = i(97639),
                a = (0, i(588948).getFreshInitData)();

            function l(e) {
                if (this._freeProductIds = ["tv-scripting", "tv-basicstudies", "tv-prostudies", "Script$USER", "Script$EDGR", "ESD$TV"], this.packagesUpdated = new r, !e) return this._products = this._discounts = {},
                    void(this._offers = this._order = []);
                this._products = {}, this._discounts = {}, this._offers = e.offers, this._order = [], this._invalidShopConf = !0, "undefined" != typeof window && window.loginStateChange.subscribe(this, this.onLoginStateChange), this.currencies = ["USD", "RUB"]
            }
            l.prototype.PRODUCT_TYPES = {
                pro_plan: 1,
                study_package: 2,
                news_feed: 3,
                exchange: 4,
                connection: 6,
                coins: 8
            }, l.prototype.updateShopConf = function(e) {
                return this._shopConfPromise || (this._shopConfPromise = n("/market/shopconf/", {
                    credentials: "include"
                }).then((function(e) {
                    return e.json()
                })).then(function(t) {
                    this._products = t.all_products && JSON.parse(t.all_products) || {}, this._discounts = t.discounts && JSON.parse(t.discounts) || {}, this._offers = t.offers && JSON.parse(t.offers) || [], this._order = t.order && JSON.parse(t.order) || [], this._invalidShopConf = !1, delete this._shopConfPromise, e || this.packagesUpdated.fire()
                }.bind(this)).catch(function() {
                    delete this._shopConfPromise
                }.bind(this))), this._shopConfPromise
            }, l.prototype.invalidateShopConf = function() {
                this._invalidShopConf = !0
            }, l.prototype.isInvalidShopConf = function() {
                return !!this._invalidShopConf
            }, l.prototype.ensureValidShopConf = function() {
                return new Promise(function(e) {
                    return this.runOrUpdate(e)
                }.bind(this))
            }, l.prototype.onLoginStateChange = function(e) {
                e || this.updateShopConf()
            }, l.prototype.runOrUpdate = function(e, t) {
                this.isInvalidShopConf() ? this.updateShopConf(t).then(e) : e()
            }, l.prototype.getIDCExchanges = function(e) {
                var t = this._products;
                if (a)
                    if (e) {
                        if (a.idc_delay_exchanges_list) return a.idc_delay_exchanges_list
                    } else if (a.idc_exchanges_list) return a.idc_exchanges_list;
                return Object.keys(t).filter((function(i) {
                    return e ? t[i].idc_service_codes_delay : t[i].idc_service_codes
                })).map((function(e) {
                    return t[e].exchange
                }))
            }, l.prototype.getProduct = function(e) {
                if (e in this._products) return this._products[e];
                if (this.isDiscountProductId(e)) {
                    var t = this._discounts[e],
                        i = Object.assign({
                            discount_text_id: e
                        }, this._products[t.product]);
                    return this.currencies.forEach((e => {
                        const n = "USD" === e ? "" : `_${e}`;
                        t[`cost${n}`] && (i[`cost${n}`] = t[`cost${n}`]), t[`cost_annual${n}`] && (i[`cost_annual${n}`] = t[`cost_annual${n}`]), t[`cost_biennial${n}`] && (i[`cost_biennial${n}`] = t[`cost_biennial${n}`])
                    })), void 0 !== t.fixed_cost && (i.fixed_cost = t.fixed_cost), void 0 !== t.extra_days && (i.extra_days = t.extra_days), void 0 !== t.billing_cycle && (i.billing_cycle = t.billing_cycle), i
                }
                return {}
            }, l.prototype.findProduct = function(e) {
                return new Promise(function(t) {
                    var i = function() {
                        t(this.getProduct(e))
                    }.bind(this);
                    if (!this.isInvalidShopConf()) return i();
                    this.updateShopConf().then(i).catch(i)
                }.bind(this))
            }, l.prototype.isProductDefined = function(e) {
                return !(!e || !Object.keys(e).length)
            }, l.prototype.getDiscountProduct = function(e) {
                return this._discounts[e] || {}
            }, l.prototype.isOffer = function(e, t) {
                var i = this._discounts;
                return Object.keys(i).filter((function(e) {
                    return !i[e].expired && i[e].offer_type === t
                })).includes(e)
            }, l.prototype.getProductId = function(e) {
                return e && (e.discount_text_id || e.text_id) || ""
            }, l.prototype.isDiscountProductId = function(e) {
                return e in this._discounts
            }, l.prototype.isPlan = function(e) {
                return e.type === this.PRODUCT_TYPES.pro_plan
            }, l.prototype.isExchange = function(e) {
                return e.type === this.PRODUCT_TYPES.exchange
            }, l.prototype.getActiveExchanges = function() {
                return this.getProductsByType(this.PRODUCT_TYPES.exchange).filter((function(e) {
                    return !e.disabled && Boolean(e.cost)
                }))
            }, l.prototype.getExchange = function(e) {
                for (var t, i = this.getProductsByType(this.PRODUCT_TYPES.exchange), n = 0; n < i.length; n += 1)
                    if ((t = i[n]).exchange === e || t.included_exchanges && t.included_exchanges.includes(e)) return t;
                return {}
            }, l.prototype.getCost = function(e, t, i) {
                let n = "";
                void 0 !== i && "USD" !== i && (n = `_${i}`);
                var s = `cost${n}`,
                    r = `cost_annual${n}`,
                    a = `cost_biennial${n}`,
                    l = 1;
                if (o.TwoYears === t) {
                    if (e.fixed_cost || (l = 24), e[a]) return e[a] * l;
                    if (e[r]) return e[r] * l
                } else if (o.OneYear === t) {
                    if (e.fixed_cost || (l = 12), e[r]) return e[r] * l
                } else o.ThreeMonths === t && (e.fixed_cost || (l = 3));
                return e[s] ? e[s] * l : e.cost * l
            }, l.prototype.getProductsByType = function(e) {
                return Object.keys(this._products).filter((function(t) {
                    return this._products[t].type === e
                }), this).map((function(e) {
                    return this.getProduct(e)
                }), this).sort((function(e, t) {
                    return t.order > e.order ? -1 : t.order < e.order ? 1 : 0
                }))
            }, l.prototype.getProPlans = function(e) {
                return this.getProductsByType(this.PRODUCT_TYPES.pro_plan).filter((function(t) {
                    return !e || !t.is_limited
                })).map((function(e) {
                    return e.text_id
                }))
            }, l.prototype.getSuperProduct = function(e) {
                for (var t in this._products) {
                    var i = this._products[t];
                    if (i.subproduct_ids && i.subproduct_ids.indexOf(e) >= 0) return i.id
                }
            }, l.prototype.getStudiesOrder = function() {
                return this._order.filter((function(e) {
                    return this._products[e] && this._products[e].type === this.PRODUCT_TYPES.study_package
                }), this)
            }, l.prototype.hasPackage = function(e) {
                return this._offers.includes(e) || this._freeProductIds.includes(e)
            }, l.prototype._getUser = function() {
                return window.user
            }, l.prototype.updateUser = function() {}, l.prototype.isPro = function() {
                return !!this._getUser().pro_plan
            }, l.prototype.isTrial = function() {
                return !!this._getUser().is_trial
            }, l.prototype.isPaidPro = function() {
                return this.isPro() && !this.isTrial()
            }, l.prototype.userHasRealtimeForExchange = function(e) {
                e = (e || "").toLowerCase().replace("exchange-", "");
                var t = this.getExchange(e);
                if (!this.isProductDefined(t)) return !1;
                if (this._offers.includes("exchange-" + t.exchange)) return !0;
                if (t.included_exchanges)
                    for (var i = 0; i < t.included_exchanges.length; i += 1)
                        if (this._offers.includes("exchange-" + t.included_exchanges[i])) return !0;
                return !1
            }, l.prototype._exHasRealtimeForType = function(e, t) {
                return !("stock" === t && !e.is_stocks) && (!("index" === t && !e.is_indices) && !("futures" === t && !e.is_futures))
            }, l.prototype.hasRealtimeForExchange = function(e, t) {
                var i, n, s = pro.getProductsByType(pro.PRODUCT_TYPES.exchange);
                e = (e || "").toLowerCase();
                for (var o = 0; o < s.length; o += 1)
                    if ((i = s[o]).exchange === e || (i.included_exchanges || []).includes(e)) {
                        if (i.disabled && !i.included_exchanges) return !1;
                        if (!t) return !0;
                        if (i.included_exchanges) {
                            for (var r, a = 0; a < i.included_exchanges.length; a += 1)
                                if (n = this.getProduct("exchange-" + i.included_exchanges[a]), this.isProductDefined(n) && this._exHasRealtimeForType(n, t)) {
                                    r = !0;
                                    break
                                }
                            if (!r) return !1
                        } else if (!this._exHasRealtimeForType(i, t)) return !1;
                        return !0
                    }
                return !1
            }, l.prototype.visitExchangesPage = function(e) {
                var t = o.Monthly,
                    i = !0,
                    n = this._getUser();
                n.is_trial || (t = n.pro_plan_billing_cycle || o.OneYear, i = !1), s(t, {
                    exchangesOnly: !0,
                    newWindow: (e = e || {}).newWindow,
                    paymentMethod: e.paymentMethod,
                    fixedCycle: i
                })
            }, l.prototype.offerLogoSrc = function(e) {
                return e.has_logo ? "/static/images/indicators/logos/" + e.text_id + ".png" : null
            }, l.prototype.offers = function() {
                return this._offers
            }, l.prototype.isSupportAvailable = function() {
                return Boolean(a.is_support_available)
            }, l.prototype.discounts = function() {
                return this._discounts
            }, l.prototype.hash = function() {
                var e = this._offers.slice(0);
                e.sort();
                var t = {
                    offers: e
                };
                return JSON.stringify(t)
            }, "undefined" != typeof window && window.TradingView && (window.TradingView.Pro = l), e.exports = l
        },
        234405: (e, t, i) => {
            i.r(t), i.d(t, {
                TRIAL_SUFFIX: () => r,
                EA_SUFFIX: () => a,
                CUSTOM_SUFFIX: () => l,
                billingCycleToTimeUnit: () => c,
                getReadableCycle: () => u,
                getReadableNumericCycle: () => d,
                billingPeriodText: () => h,
                isEarlyAccess: () => _,
                isTrialProduct: () => S,
                getProductForTrial: () => y,
                getDiscountFromEarlyAccess: () => m,
                toEarlyAccess: () => E,
                humanizeProPlan: () => T,
                humanizeCardPlan: () => p,
                getAmountOfDaysForBillingCycle: () => b,
                countDiscountByBillingCycle: () => f,
                billingCycleToMonth: () => A,
                round2: () => g,
                round0: () => R,
                floor0: () => w,
                round2or0: () => C,
                round1or0: () => I,
                roundMinimal: () => D,
                getPlanName: () => O
            });
            i(897116);
            var n = i(575932),
                s = i(809965),
                o = i(888035);
            const r = "_trial",
                a = "_discount",
                l = "_custom";

            function c(e) {
                return {
                    y: (0, n.t)("year", {
                        plural: "years",
                        count: 1
                    }),
                    m: (0, n.t)("month", {
                        plural: "months",
                        count: 1
                    }),
                    "3m": (0, n.t)("three months"),
                    "2y": (0, n.t)("two years")
                }[e]
            }

            function u(e) {
                return {
                    m: (0, n.t)("monthly"),
                    y: (0, n.t)("annually"),
                    "3m": (0, n.t)("3 months"),
                    "2y": (0, n.t)("2-year")
                }[e] || ""
            }

            function d(e) {
                return {
                    [o.BillingCycle.Monthly]: (0, n.t)("monthly"),
                    [o.BillingCycle.OneYear]: (0, n.t)("1 year"),
                    [o.BillingCycle.ThreeMonths]: (0, n.t)("3 months"),
                    [o.BillingCycle.TwoYears]: (0, n.t)("2 years")
                }[e] || ""
            }

            function h(e) {
                var t;
                return null !== (t = {
                    y: (0, n.t)("Billed every year."),
                    m: (0, n.t)("Billed every month."),
                    "2y": (0, n.t)("Billed every two years.")
                }[e]) && void 0 !== t ? t : ""
            }

            function _(e) {
                return /\d{0,2}_discount$/.test(e)
            }

            function S(e) {
                return new RegExp(r + "$").test(e)
            }

            function y(e) {
                return e.split(r)[0]
            }

            function m(e) {
                const t = e.match(new RegExp("^(d{0,2})" + a + "$"));
                return t ? +t[1] || 50 : 0
            }

            function E(e, t) {
                return `${e}_${t}${a}`
            }

            function T(e, t) {
                let i = e;
                switch (e) {
                    case s.ProPlans.Free:
                        i = "Basic";
                        break;
                    case s.ProPlans.Pro:
                        i = "Pro";
                        break;
                    case s.ProPlans.ProRealtime:
                        i = "Pro+";
                        break;
                    case s.ProPlans.ProPremium:
                        i = "Premium";
                        break;
                    case s.ProPlans.ProMiniAds:
                    case s.ProPlans.ProMiniLayouts:
                    case s.ProPlans.ProMiniAlerts:
                        i = (0, n.t)("1-feature");
                        break;
                    case s.ProPlans.ProEdu:
                        i = (0, n.t)("Rookie")
                }
                return t && (i += " " + (0, n.t)("trial")), i
            }

            function p(e) {
                let t = e;
                switch (e) {
                    case s.ProPlans.Pro:
                        t = "Pro";
                        break;
                    case s.ProPlans.ProRealtime:
                        t = "Pro+";
                        break;
                    case s.ProPlans.ProPremium:
                        t = "Premium";
                        break;
                    case s.ProPlans.Free:
                        t = "Basic"
                }
                return t
            }

            function b(e) {
                switch (e) {
                    case o.BillingCycle.TwoYears:
                        return 730;
                    case o.BillingCycle.OneYear:
                        return 365;
                    case o.BillingCycle.ThreeMonths:
                        return 90;
                    case o.BillingCycle.Monthly:
                        return 30;
                    default:
                        return 1
                }
            }

            function f(e, t, i) {
                return Math.round((t - e) * A(i))
            }

            function A(e) {
                switch (e) {
                    case o.BillingCycle.TwoYears:
                        return 24;
                    case o.BillingCycle.OneYear:
                        return 12;
                    default:
                        return 1
                }
            }

            function g(e) {
                return (Math.round(100 * e) / 100).toFixed(2)
            }

            function R(e) {
                const t = Math.round(100 * e) / 100;
                return Math.round(t).toFixed(0)
            }

            function w(e) {
                return Math.floor(e).toString()
            }

            function C(e) {
                const t = Math.round(100 * e) / 100,
                    i = Math.round(t);
                return Math.abs(t - i) > 0 ? t.toFixed(2) : i.toFixed(0)
            }

            function I(e) {
                return Number.isInteger(e) ? e.toFixed(0) : (Math.round(10 * e) / 10).toFixed(1)
            }

            function D(e) {
                const t = Math.round(100 * e) / 100,
                    i = Math.round(10 * e) / 10,
                    n = Math.round(t);
                return Math.abs(t - n) > 0 ? Math.abs(t - i) > 0 ? t.toFixed(2) : i.toFixed(1) : n.toFixed(0)
            }

            function O(e) {
                const t = (0, n.t)("{proPlanName} Trial");
                if (S(e)) {
                    const i = T(y(e));
                    return t.format({
                        proPlanName: i
                    })
                }
                return T(e)
            }
        },
        834925: (e, t, i) => {
            var n = i(629588).createGoProDialog,
                s = i(231039).showSignModal;
            window.TVDialogs = {
                showSignInDialog: function(e) {
                    return s(e)
                },
                signModal: null,
                showGoProDialog: function(e) {
                    n(e)
                }
            }
        },
        514998: (e, t, i) => {
            function n(e) {
                return decodeURIComponent(e.replace(/\+/g, " ")).replace(/<\/?[^>]+(>|$)/g, "")
            }

            function s(e) {
                const t = /([^&=]+)=?([^&]*)/g,
                    i = {};
                if (!e) return i;
                let s = t.exec(e);
                for (; s;) i[n(s[1])] = n(s[2]), s = t.exec(e);
                return i
            }

            function o() {
                return s(window.location.search.substring(1))
            }

            function r() {
                return s(window.location.hash.split("#")[1])
            }

            function a(e) {
                const t = [];
                for (const i in e) e.hasOwnProperty(i) && null != e[i] && t.push({
                    key: i,
                    pair: encodeURIComponent(i) + "=" + encodeURIComponent(e[i])
                });
                return t.sort(((e, t) => e.key > t.key ? 1 : e.key < t.key ? -1 : 0)).map((e => e.pair)).join("&")
            }
            i.r(t), i.d(t, {
                decode: () => n,
                getQueryParams: () => s,
                getUrlParams: () => o,
                getHashUrlParams: () => r,
                createUrlParams: () => a
            })
        },
        893278: (e, t, i) => {
            i.d(t, {
                visitPaymentPage: () => d
            });
            var n = i(575932),
                s = i(698969),
                o = i(338733),
                r = i(888035),
                a = i(125226),
                l = i(706162),
                c = i(459689),
                u = i(224314);

            function d(e = "y", t = {}) {
                var i;
                const d = null !== (i = t.productName) && void 0 !== i ? i : "pro",
                    h = t.paymentMethod || "paypal",
                    _ = "bitcoin" === h ? "Bitcoin payment" : "Paypal payment";
                window.runOrSignIn((async () => {
                    if (await (0, c.check)()) return void(0, u.showRestrictedCountryNotificationDialog)();
                    if ("function" == typeof t.canVisit && !t.canVisit()) return void(location.href = "/");
                    if ((0, a.isFeatureEnabled)("braintree-trial-implementation")) return void(0, o.showPaymentOrderDialog)({
                        productId: t.productName,
                        billingCycle: t.exchangesOnly ? r.BillingCycle.Monthly : e,
                        fixedCycle: t.fixedCycle,
                        statusExtraData: t.exchangesExpanded ? l.StatusExtraData.Opened : void 0
                    });
                    const i = (0,
                        s.parseHtmlElement)(`<form action="/order/" method="post" ${t.newWindow?'target="_blank"':""}>\n\t\t\t\t\t<input type="hidden" name="product" value="${d}"/>\n\t\t\t\t\t<input type="hidden" name="billing_cycle" value="${e}"/>\n\t\t\t\t\t<input type="hidden" name="fixed_billing_cycle" value="${t.fixedCycle?"1":""}"/>\n\t\t\t\t\t<input type="hidden" name="exchanges_only" value="${t.exchangesOnly?"1":""}"/>\n\t\t\t\t\t<input type="hidden" name="exchanges_expanded" value="${t.exchangesExpanded?"1":""}"/>\n\t\t\t\t\t<input type="hidden" name="selected_packages" value="${(t.selectedPackages||[]).join(",")}"/>\n\t\t\t\t\t<input type="hidden" name="payment_method" value="${h}"/>\n\t\t\t\t</form>`);
                    i && (document.body.appendChild(i), i.submit())
                }), {
                    source: _,
                    paidAccountCheck: window.pro && window.pro.getProduct(d).type === window.pro.PRODUCT_TYPES.pro_plan,
                    paidAccountSuccessButtonText: (0, n.t)("Continue purchasing")
                })
            }
        },
        414879: (e, t, i) => {
            var n, s;
            i.r(t), i.d(t, {
                    WeekDays: () => n,
                    Months: () => s
                }),
                function(e) {
                    e[e.SUNDAY = 1] = "SUNDAY", e[e.MONDAY = 2] = "MONDAY", e[e.TUESDAY = 3] = "TUESDAY", e[e.WEDNESDAY = 4] = "WEDNESDAY", e[e.THURSDAY = 5] = "THURSDAY", e[e.FRIDAY = 6] = "FRIDAY", e[e.SATURDAY = 7] = "SATURDAY"
                }(n || (n = {})),
                function(e) {
                    e[e.JANUARY = 0] = "JANUARY", e[e.FEBRUARY = 1] = "FEBRUARY", e[e.MARCH = 2] = "MARCH", e[e.APRIL = 3] = "APRIL", e[e.MAY = 4] = "MAY", e[e.JUNE = 5] = "JUNE", e[e.JULY = 6] = "JULY", e[e.AUGUST = 7] = "AUGUST", e[e.SEPTEMBER = 8] = "SEPTEMBER", e[e.OCTOBER = 9] = "OCTOBER", e[e.NOVEMBER = 10] = "NOVEMBER", e[e.DECEMBER = 11] = "DECEMBER"
                }(s || (s = {}))
        },
        936410: (e, t, i) => {
            i.r(t), i.d(t, {
                monthsFullNames: () => o,
                monthsShortNames: () => r,
                weekDaysFullNames: () => a,
                weekDaysShortNames: () => l,
                weekDaysMiniNames: () => c
            });
            var n = i(575932),
                s = i(414879);
            const o = {
                    [s.Months.JANUARY]: (0, n.t)("January"),
                    [s.Months.FEBRUARY]: (0, n.t)("February"),
                    [s.Months.MARCH]: (0, n.t)("March"),
                    [s.Months.APRIL]: (0, n.t)("April"),
                    [s.Months.MAY]: (0, n.t)("May"),
                    [s.Months.JUNE]: (0, n.t)("June"),
                    [s.Months.JULY]: (0, n.t)("July"),
                    [s.Months.AUGUST]: (0, n.t)("August"),
                    [s.Months.SEPTEMBER]: (0, n.t)("September"),
                    [s.Months.OCTOBER]: (0, n.t)("October"),
                    [s.Months.NOVEMBER]: (0, n.t)("November"),
                    [s.Months.DECEMBER]: (0, n.t)("December")
                },
                r = {
                    [s.Months.JANUARY]: (0, n.t)("Jan"),
                    [s.Months.FEBRUARY]: (0, n.t)("Feb"),
                    [s.Months.MARCH]: (0, n.t)("Mar"),
                    [s.Months.APRIL]: (0, n.t)("Apr"),
                    [s.Months.MAY]: (0, n.t)("May", {
                        context: "short"
                    }),
                    [s.Months.JUNE]: (0, n.t)("Jun"),
                    [s.Months.JULY]: (0, n.t)("Jul"),
                    [s.Months.AUGUST]: (0, n.t)("Aug"),
                    [s.Months.SEPTEMBER]: (0, n.t)("Sep"),
                    [s.Months.OCTOBER]: (0, n.t)("Oct"),
                    [s.Months.NOVEMBER]: (0, n.t)("Nov"),
                    [s.Months.DECEMBER]: (0, n.t)("Dec")
                },
                a = {
                    [s.WeekDays.SUNDAY]: (0, n.t)("Sunday"),
                    [s.WeekDays.MONDAY]: (0, n.t)("Monday"),
                    [s.WeekDays.TUESDAY]: (0, n.t)("Tuesday"),
                    [s.WeekDays.WEDNESDAY]: (0, n.t)("Wednesday"),
                    [s.WeekDays.THURSDAY]: (0, n.t)("Thursday"),
                    [s.WeekDays.FRIDAY]: (0, n.t)("Friday"),
                    [s.WeekDays.SATURDAY]: (0, n.t)("Saturday")
                },
                l = {
                    [s.WeekDays.SUNDAY]: (0, n.t)("Sun"),
                    [s.WeekDays.MONDAY]: (0, n.t)("Mon"),
                    [s.WeekDays.TUESDAY]: (0, n.t)("Tue"),
                    [s.WeekDays.WEDNESDAY]: (0, n.t)("Wed"),
                    [s.WeekDays.THURSDAY]: (0, n.t)("Thu"),
                    [s.WeekDays.FRIDAY]: (0, n.t)("Fri"),
                    [s.WeekDays.SATURDAY]: (0,
                        n.t)("Sat")
                },
                c = {
                    [s.WeekDays.SUNDAY]: (0, n.t)("Su", {
                        context: "day_of_week"
                    }),
                    [s.WeekDays.MONDAY]: (0, n.t)("Mo", {
                        context: "day_of_week"
                    }),
                    [s.WeekDays.TUESDAY]: (0, n.t)("Tu", {
                        context: "day_of_week"
                    }),
                    [s.WeekDays.WEDNESDAY]: (0, n.t)("We", {
                        context: "day_of_week"
                    }),
                    [s.WeekDays.THURSDAY]: (0, n.t)("Th", {
                        context: "day_of_week"
                    }),
                    [s.WeekDays.FRIDAY]: (0, n.t)("Fr", {
                        context: "day_of_week"
                    }),
                    [s.WeekDays.SATURDAY]: (0, n.t)("Sa", {
                        context: "day_of_week"
                    })
                }
        },
        560507: (e, t, i) => {
            i.d(t, {
                enabled: () => c,
                getConfig: () => d,
                getProductFeaturesConfig: () => u,
                getProductId: () => l
            });
            const n = JSON.parse('{"free":{"CHART_STORAGE":{"limit":1},"MULTIPLE_CHARTS":{"limit":1},"INDICATORS_ON_CHART":{"limit":3},"HISTORICAL_BARS":{"limit":5},"STUDY_ON_STUDY":{"limit":270,"child_limit":1},"SERVER_SIDE_ALERTS":{"limit":1},"SCREENER_ALERTS":{"limit":1},"SCREENER_INTERVALS":{"interval":["1D","1W","1M"]},"STUDY_TEMPLATES":{"limit":1},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]},"MULTICOLOR_FLAGGED_SYMBOLS":{"limit":1}},"__legacy_pro":{"CHART_STORAGE":{"limit":99999},"MULTIPLE_CHARTS":{"limit":8},"CUSTOM_INTERVALS":{},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"INDICATORS_ON_CHART":{"limit":99999},"HISTORICAL_BARS":{"limit":10},"TV_VOLUMEBYPRICE":{"study_packages":["tv-volumebyprice"]},"STUDY_ON_STUDY":{"limit":270,"child_limit":99999},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"limit":20},"SCREENER_ALERTS":{"limit":99999},"SCREENER_AUTO_REFRESH":{},"SCREENER_EXPORT_DATA":{},"SCREENER_INTERVALS":{"interval":["1m","5m","15m","30m","1h","2h","4h","1D","1W","1M"]},"NO_SPONSORED_ADS":{},"STUDY_TEMPLATES":{"limit":99999},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"IDC_AVAILABLE_DELAY":{},"STATUS":{"disable_on_trial":true},"MULTIFLAGGED_SYMBOLS_LISTS":{},"BAR_REPLAY_INTRADAY":{},"SHOWS":{"disable_on_trial":true},"ALERTS_WEBHOOK":{},"DEEP_FUNDAMENTALS_HISTORY":{},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram"],"disable_on_trial":true},"MULTI_MONITOR":{},"PUBLISH_PROTECTED_SCRIPTS":{"disable_on_trial":true}},"__legacy_pro_realtime":{"extends":"__legacy_pro","TV_PROSTUDIES":{"study_packages":["tv-prostudies"]},"SERVER_SIDE_ALERTS":{"limit":1000},"CAN_EDIT_PUBLIC_CHATS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"CUSTOM_FORMULAS":{},"INTRADAY_EXOTIC_CHARTS":{},"BACKTESTING_EXPORT":{}},"__legacy_pro_premium":{"extends":"__legacy_pro_realtime","USE_BAR_MAGNIFIER":{},"HISTORICAL_BARS":{"limit":20},"IDEA_SIGNATURE":{"disable_on_trial":true},"PROFILE_WEBSITE_FIELD":{"disable_on_trial":true},"ALERTS_NO_EXPIRATION":{},"PUBLISH_INVITE_ONLY_SCRIPTS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"DEEP_HISTORY_BACKTEST":{},"ALERTS_ON_SECONDS":{},"PERMANENT_STREAM_RECORDS":{},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram","Website"],"disable_on_trial":true},"SECONDS_INTERVALS":{}},"pro":{"CHART_STORAGE":{"limit":5},"MULTIPLE_CHARTS":{"limit":2},"CUSTOM_INTERVALS":{},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"INDICATORS_ON_CHART":{"limit":5},"HISTORICAL_BARS":{"limit":10},"TV_VOLUMEBYPRICE":{"study_packages":["tv-volumebyprice"]},"STUDY_ON_STUDY":{"limit":270,"child_limit":1},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"limit":20},"SCREENER_ALERTS":{"limit":99999},"SCREENER_AUTO_REFRESH":{},"SCREENER_EXPORT_DATA":{},"SCREENER_INTERVALS":{"interval":["1m","5m","15m","30m","1h","2h","4h","1D","1W","1M"]},"NO_SPONSORED_ADS":{},"STUDY_TEMPLATES":{"limit":99999},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"IDC_AVAILABLE_DELAY":{},"STATUS":{"disable_on_trial":true},"BAR_REPLAY_INTRADAY":{},"MULTIFLAGGED_SYMBOLS_LISTS":{},"SHOWS":{"disable_on_trial":true},"ALERTS_WEBHOOK":{},"DEEP_FUNDAMENTALS_HISTORY":{},"PUBLISH_PROTECTED_SCRIPTS":{"disable_on_trial":true},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram"],"disable_on_trial":true},"MULTI_MONITOR":{},"MULTICOLOR_FLAGGED_SYMBOLS":{"limit":7},"INTRADAY_EXCHANGE":{},"VOLUME_PROFILE":{}},"pro_realtime":{"extends":"pro","CHART_STORAGE":{"limit":10},"MULTIPLE_CHARTS":{"limit":4},"INDICATORS_ON_CHART":{"limit":10},"TV_PROSTUDIES":{"study_packages":["tv-prostudies"]},"STUDY_ON_STUDY":{"limit":270,"child_limit":9},"SERVER_SIDE_ALERTS":{"limit":100},"CAN_EDIT_PUBLIC_CHATS":{"disable_on_trial":true},"SIMULTANEOUS_CONNECTIONS":{"limit":2},"EXPORT_CHART_DATA":{},"CUSTOM_FORMULAS":{},"INTRADAY_EXOTIC_CHARTS":{},"KAGI_RENKO":{},"INTRADAY_SPREAD":{},"CUSTOM_CHATS":{},"BACKTESTING_EXPORT":{}},"pro_premium":{"extends":"pro_realtime","USE_BAR_MAGNIFIER":{},"CHART_STORAGE":{"limit":99999},"MULTIPLE_CHARTS":{"limit":8},"INDICATORS_ON_CHART":{"limit":25},"HISTORICAL_BARS":{"limit":20},"STUDY_ON_STUDY":{"limit":270,"child_limit":24},"SERVER_SIDE_ALERTS":{"limit":400},"SIMULTANEOUS_CONNECTIONS":{"limit":5},"IDEA_SIGNATURE":{"disable_on_trial":true},"PROFILE_WEBSITE_FIELD":{"disable_on_trial":true},"ALERTS_NO_EXPIRATION":{},"PUBLISH_INVITE_ONLY_SCRIPTS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"DEEP_HISTORY_BACKTEST":{},"ALERTS_ON_SECONDS":{},"PERMANENT_STREAM_RECORDS":{},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram","Website"],"disable_on_trial":true},"SECONDS_INTERVALS":{}},"pro_mini_alerts":{"extends":"free","SERVER_SIDE_ALERTS":{"limit":30},"SCREENER_ALERTS":{"limit":99999},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}},"pro_mini_ads":{"extends":"free","NO_SPONSORED_ADS":{},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}},"pro_mini_layouts":{"extends":"free","MULTIPLE_CHARTS":{"limit":8},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}},"pro_edu":{"extends":"free","CHART_STORAGE":{"limit":3},"MULTIPLE_CHARTS":{"limit":2},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"limit":5},"SCREENER_ALERTS":{"limit":99999},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}}}'),
                s = JSON.parse('{"cme":{"INDICATORS_ON_CHART":{"limit":99999}},"bovespa":{"INDICATORS_ON_CHART":{"limit":99999}},"qecomqa":{"INDICATORS_ON_CHART":{"limit":99999}}}');
            var o = i(833813),
                r = i(809965),
                a = i(234405);

            function l(e) {
                let t = window.user;
                e && (t = e);
                let i = (null == t ? void 0 : t.pro_plan) || r.ProPlans.Free;
                const n = i !== r.ProPlans.Free && !(0, a.isTrialProduct)(i);
                return n || (i = (0, a.getProductForTrial)(i)), n && t && !t.is_pro_limited && !t.new_pro_product_line && (i = `__legacy_${i}`), i
            }

            function c(e, t, i) {
                let n = window.user;
                i && (n = i);
                const s = d(e, t, n);
                return !!s && !(s[o.ProductFeatures.DISABLE_ON_TRIAL] && (!n || n.is_trial))
            }

            function u(e) {
                const t = n[e];
                return t ? t.extends ? Object.assign({}, u(t.extends), t) : t : null
            }

            function d(e, t, i) {
                var n;
                let o = u(t || l(i));
                if (!o) return null;
                const r = null === (n = window.TradingView) || void 0 === n ? void 0 : n.widgetCustomer;
                return r && s[r] && (o = Object.assign({}, o, s[r])), o && o[e] || null
            }
        },
        833813: (e, t, i) => {
            var n;
            i.d(t, {
                    ProductFeatures: () => n,
                    UNLIMITED_FEATURE_LIMIT: () => s
                }),
                function(e) {
                    e.DISABLE_ON_TRIAL = "disable_on_trial", e.CUSTOM_INTERVALS = "CUSTOM_INTERVALS", e.CHART_STORAGE = "CHART_STORAGE", e.MULTIPLE_CHARTS = "MULTIPLE_CHARTS", e.MULTIPLE_WATCHLISTS = "MULTIPLE_WATCHLISTS", e.IMPORT_WATCHLISTS = "IMPORT_WATCHLISTS", e.EXPORT_WATCHLISTS = "EXPORT_WATCHLISTS", e.INDICATORS_ON_CHART = "INDICATORS_ON_CHART", e.STUDY_ON_STUDY = "STUDY_ON_STUDY", e.TICK_BY_TICK_PUSH_DATA = "TICK_BY_TICK_PUSH_DATA", e.SERVER_SIDE_ALERTS = "SERVER_SIDE_ALERTS", e.PUBLISH_INVITE_ONLY_SCRIPTS = "PUBLISH_INVITE_ONLY_SCRIPTS", e.PUBLISH_PROTECTED_SCRIPTS = "PUBLISH_PROTECTED_SCRIPTS", e.SCREENER_ALERTS = "SCREENER_ALERTS", e.SCREENER_AUTO_REFRESH = "SCREENER_AUTO_REFRESH", e.SCREENER_EXPORT_DATA = "SCREENER_EXPORT_DATA", e.SCREENER_INTERVALS = "SCREENER_INTERVALS", e.SIMULTANEOUS_CONNECTIONS = "SIMULTANEOUS_CONNECTIONS", e.STUDY_TEMPLATES = "STUDY_TEMPLATES", e.CAN_EDIT_PUBLIC_CHATS = "CAN_EDIT_PUBLIC_CHATS", e.NO_SPONSORED_ADS = "NO_SPONSORED_ADS", e.IDC_AVAILABLE_DELAY = "IDC_AVAILABLE_DELAY", e.STATUS = "STATUS", e.ALERTS_NO_EXPIRATION = "ALERTS_NO_EXPIRATION", e.MULTIFLAGGED_SYMBOLS_LISTS = "MULTIFLAGGED_SYMBOLS_LISTS", e.BAR_REPLAY_INTRADAY = "BAR_REPLAY_INTRADAY", e.TV_VOLUMEBYPRICE = "TV_VOLUMEBYPRICE", e.ALERTS_WEBHOOK = "ALERTS_WEBHOOK", e.DEEP_FUNDAMENTALS_HISTORY = "DEEP_FUNDAMENTALS_HISTORY", e.EXPORT_CHART_DATA = "EXPORT_CHART_DATA", e.ALERTS_ON_SECONDS = "ALERTS_ON_SECONDS", e.PERMANENT_STREAM_RECORDS = "PERMANENT_STREAM_RECORDS", e.IDEA_SOCIAL_LINKS = "IDEA_SOCIAL_LINKS", e.EXTENDED_SOCIAL_LINKS = "EXTENDED_SOCIAL_LINKS", e.DEEP_HISTORY_BACKTEST = "DEEP_HISTORY_BACKTEST", e.BACKTESTING_EXPORT = "BACKTESTING_EXPORT", e.USE_BAR_MAGNIFIER = "USE_BAR_MAGNIFIER", e.HISTORICAL_BARS = "HISTORICAL_BARS", e.KAGI_RENKO = "KAGI_RENKO", e.INTRADAY_SPREAD = "INTRADAY_SPREAD", e.SECONDS_INTERVALS = "SECONDS_INTERVALS", e.MULTICOLOR_FLAGGED_SYMBOLS = "MULTICOLOR_FLAGGED_SYMBOLS", e.INTRADAY_EXCHANGE = "INTRADAY_EXCHANGE", e.CUSTOM_CHATS = "CUSTOM_CHATS", e.VOLUME_PROFILE = "VOLUME_PROFILE", e.PRIMITIVE_ALERTS = "PRIMITIVE_ALERTS", e.COMPLEX_ALERTS = "COMPLEX_ALERTS"
                }(n || (n = {}));
            const s = 99999
        },
        128327: (e, t, i) => {
            function n(e) {
                if (e instanceof Error) return e.stack || e.message;
                try {
                    return e.outerHTML.slice(0, 1024)
                } catch (e) {}
                try {
                    if (void 0 !== e) return JSON.stringify(e).slice(0, 1024)
                } catch (e) {}
                return String(e)
            }

            function s() {
                window.__tv_js_errors || (window.__tv_js_errors = []), window.addEventListener("error", (e => {
                    const t = (new Date).toISOString();
                    window.__tv_js_errors.push(`${t} ${e.message||"JS error"}. ${e.filename||"<unknown url>"}, line ${e.lineno}, col ${e.colno}.\nError: ${n(e.error)}`)
                }), !1), window.addEventListener("unhandledrejection", (e => {
                    const t = (new Date).toISOString();
                    window.__tv_js_errors.push(`${t} Unhandled rejection.\nReason: ${n(e.reason)}`)
                }), !1), document.addEventListener("securitypolicyviolation", (e => {
                    if (String(e.sourceFile).startsWith("https://securepubads.g.doubleclick.net") && String(e.blockedURI).startsWith("https://adservice.google.")) return;
                    const t = (new Date).toISOString(),
                        i = "report" === e.disposition ? "CSP report-only" : "CSP violation";
                    window.__tv_js_errors.push(`${t} ${i}: ${e.violatedDirective||e.effectiveDirective}. ${e.sourceFile||"<unknown url>"}, line ${e.lineNumber}, col ${e.columnNumber}.\nBlocked URI: ${e.blockedURI}\nSample: ${e.sample}\nTarget: ${n(e.target)}`)
                }), !1)
            }
            i.d(t, {
                install: () => s
            })
        },
        583912: (e, t, i) => {
            i.d(t, {
                linking: () => y
            });
            var n = i(12481),
                s = i(262325),
                o = i.n(s),
                r = i(611688),
                a = i(749473),
                l = i(911905),
                c = i(62802),
                u = i(588948),
                d = i(776734),
                h = i(371856);
            const _ = (0, l.getLogger)("Linking");
            var S;
            ! function(e) {
                e[e.NotBound = 0] = "NotBound", e[e.BoundToWidget = 1] = "BoundToWidget", e[e.BoundToModel = 2] = "BoundToModel"
            }(S || (S = {}));
            const y = new class {
                constructor() {
                    this._watchedSymbol = new(o()), this._seriesShortSymbol = new(o()), this._proSymbol = new(o()), this._watchedInterval = new(o()), this._watchedIntraday = new(o()), this._watchedSeconds = new(o()), this._watchedTicks = new(o()), this._watchedDataFrequencyResolution = new(o()), this._watchedRange = new(o()), this._watchedSupportedResolutions = new(o()), this._watchedSupportedChartStyles = new(o())([]), this._symbolNamesList = new(o()), this._chartWidgetBindingState = S.NotBound, this._activeChartWidget = null, this._watchedSymbolListenerBound = this._watchedSymbolListener.bind(this), this._watchedIntervalListenerBound = this._watchedIntervalListener.bind(this), this._onSymbolLinkBound = this._onSymbolLink.bind(this), this._searchCharts = null, this._searchChartsLoadDebounced = null, this._selfEmit = !1, this._preventFeedBySymbol = !1, this._feedBySymbolDebounceCounter = 0
                }
                get symbol() {
                    return this._watchedSymbol
                }
                get proSymbol() {
                    return this._proSymbol
                }
                get symbolNamesList() {
                    return this._symbolNamesList
                }
                get seriesShortSymbol() {
                    return this._seriesShortSymbol.readonly()
                }
                get interval() {
                    return this._watchedInterval
                }
                get intraday() {
                    return this._watchedIntraday.readonly()
                }
                get seconds() {
                    return this._watchedSeconds.readonly()
                }
                get ticks() {
                    return this._watchedTicks.readonly()
                }
                get range() {
                    return this._watchedRange.readonly()
                }
                get supportedResolutions() {
                    return this._watchedSupportedResolutions.readonly()
                }
                get supportedChartStyles() {
                    return this._watchedSupportedChartStyles.readonly()
                }
                get preventFeedBySymbol() {
                    return this._preventFeedBySymbol
                }
                get dataFrequencyResolution() {
                    return this._watchedDataFrequencyResolution.readonly()
                }
                bindToChartWidget(e) {
                    if (this.unbindFromChartWidget(), this._activeChartWidget = e,
                        e.hasModel()) return void this._onChartModelCreated(e.model());
                    e.modelCreated().subscribe(this, this._onChartModelCreated), this._chartWidgetBindingState = S.BoundToWidget;
                    const t = e.properties().childs().mainSeriesProperties.childs();
                    this._watchedSymbol.setValue(t.symbol.value()), this._watchedInterval.setValue(t.interval.value())
                }
                unbindFromChartWidget() {
                    switch (this._chartWidgetBindingState) {
                        case S.BoundToWidget:
                            if (!this._activeChartWidget) throw new Error("ChartWidget is undefined");
                            this._activeChartWidget.modelCreated().unsubscribe(this, this._onChartModelCreated);
                            break;
                        case S.BoundToModel:
                            this._symbolProperty().unsubscribe(this, this._onSymbolPropertyChange), this._watchedSymbol.unsubscribe(this._watchedSymbolListenerBound), this._mainSeries().dataEvents().symbolResolved().unsubscribe(this, this._updateSeriesSymbolInfo), this._mainSeries().dataEvents().symbolError().unsubscribe(this, this._updateSeriesSymbolInfo), this._intervalProperty().unsubscribe(this, this._onIntervalPropertyChange), this._watchedInterval.unsubscribe(this._watchedIntervalListenerBound), delete this._watchedSymbol.hook, delete this._watchedSymbol.writeLock
                    }
                    this._activeChartWidget = null, this._chartWidgetBindingState = S.NotBound
                }
                getChartWidget() {
                    return this._activeChartWidget
                }
                bindToChartWidgetCollection(e) {
                    this._chartWidgetCollection = e, this.unbindFromChartWidget(), e.activeChartWidget.subscribe((e => {
                        this.unbindFromChartWidget(), this.bindToChartWidget(e)
                    }), {
                        callWithLast: !0
                    })
                }
                bindToSearchCharts(e) {
                    this.unbindFromSearchCharts(), this._searchCharts = e, e.onSearchBySymbol.subscribe(this, this._onSearchBySymbol), e.loadingSymbol.subscribe((e => {
                        !1 === e && (this._feedBySymbolDebounceCounter = 0)
                    })), this._watchedSymbol.subscribe(this._onSymbolLinkBound)
                }
                unbindFromSearchCharts() {
                    this._searchCharts && (this._searchCharts.onSearchBySymbol.unsubscribe(this, this._onSearchBySymbol), this._watchedSymbol.unsubscribe(this._onSymbolLinkBound), this._searchCharts = null)
                }
                setPreventFeedBySymbol(e) {
                    this._preventFeedBySymbol = e
                }
                _onSearchBySymbol(e) {
                    if (!e.resolved_symbol) throw new Error("no resolved_symbol");
                    this._selfEmit = !0, this._watchedSymbol.setValue(e.resolved_symbol), this._selfEmit = !1
                }
                _onSymbolLink(e) {
                    if (!this._selfEmit) {
                        if (!this._searchCharts) {
                            const e = "No search charts defined";
                            throw _.logError(e), new Error(e)
                        }
                        this._preventFeedBySymbol || this._loadSearchCharts(e)
                    }
                }
                _loadSearchCharts(e) {
                    if (!this._searchCharts) {
                        const e = "No search charts defined";
                        throw _.logError(e), new Error(e)
                    }
                    if (this._searchChartsLoadDebounced) return void(this._feedBySymbolDebounceCounter < 100 && (this._feedBySymbolDebounceCounter++, this._searchChartsLoadDebounced(e)));
                    const t = e => this._searchCharts ? (!0 === this._searchCharts.loadingSymbol.value() ? this._feedBySymbolDebounceCounter < 100 && (this._feedBySymbolDebounceCounter++, this._searchChartsLoadDebounced = (0, n.default)(t, 2e3), this._searchChartsLoadDebounced(e)) : this._searchChartsLoadDebounced = null, this._searchCharts.feedBySymbol.call(this._searchCharts, e)) : () => {};
                    !0 === this._searchCharts.loadingSymbol.value() ? this._feedBySymbolDebounceCounter < 100 && (this._feedBySymbolDebounceCounter++,
                        this._searchChartsLoadDebounced = (0, n.default)(t, 2e3), this._searchChartsLoadDebounced(e)) : this._searchCharts.feedBySymbol(e)
                }
                _mainSeries() {
                    if (!this._activeChartWidget) throw new Error("ChartWidget is undefined");
                    return this._activeChartWidget.model().mainSeries()
                }
                _properties() {
                    return this._mainSeries().properties()
                }
                _symbolProperty() {
                    return this._properties().symbol
                }
                _intervalProperty() {
                    return this._properties().interval
                }
                _watchedSymbolListener(e) {
                    this._symbolProperty().value() !== e && (this._chartWidgetCollection.setSymbol(e), this._sendSnowplowAnalytics())
                }
                _sendSnowplowAnalytics() {
                    if (window.user.do_not_track) return;
                    const e = this._mainSeries(),
                        t = () => {
                            e.dataEvents().symbolResolved().unsubscribe(this, i)
                        },
                        i = i => {
                            (0, d.getTracker)().then((e => {
                                if (null === e) return;
                                const t = this._chartWidgetCollection.layout.value(),
                                    n = this._chartWidgetCollection.metaInfo.uid.value() || "";
                                e.trackChartSymbols(i.pro_name, i.type, t, n)
                            })), e.dataEvents().symbolError().unsubscribe(this, t)
                        };
                    e.dataEvents().symbolResolved().subscribe(this, i, !0), e.dataEvents().symbolError().subscribe(this, t, !0)
                }
                _onSymbolPropertyChange() {
                    const e = this._symbolProperty().value() !== this._watchedSymbol.value();
                    this._watchedSymbol.setValue(this._symbolProperty().value()), e && this._chartWidgetCollection.setSymbol(this._symbolProperty().value())
                }
                _onSymbolResolved(e) {
                    const t = this._mainSeries().symbolInfo();
                    t && this._applyValuesFromSymbolInfo(t)
                }
                _applyValuesFromSymbolInfo(e) {
                    const t = e.pro_name || r.enabled("trading_terminal") && (e.full_name || e.name) || "";
                    this._proSymbol.setValue(t), e.aliases && this._symbolNamesList.setValue(e.aliases)
                }
                _updateSeriesSymbolInfo() {
                    this._seriesShortSymbol.setValue(this._properties().shortName.value());
                    const e = this._mainSeries().symbolInfo();
                    if (e) {
                        this._applyValuesFromSymbolInfo(e);
                        let t = (0, h.allChartStyles)();
                        (0, a.isCloseBasedSymbol)(e) && (t = t.filter((e => (0, a.isSingleValueBasedStyle)(e)))), this._watchedSupportedChartStyles.setValue(t), this._watchedIntraday.setValue(!!e.has_intraday), this._watchedSeconds.setValue(!!e.has_seconds), this._watchedTicks.setValue(!(0, a.isCloseBasedSymbol)(e) && !!e.has_ticks), this._watchedRange.setValue(!(0, a.isCloseBasedSymbol)(e));
                        const i = e.data_frequency ? e.data_frequency : void 0;
                        this._watchedDataFrequencyResolution.setValue(i)
                    } else this._watchedIntraday.deleteValue(), this._watchedSeconds.deleteValue(), this._watchedTicks.deleteValue(), this._watchedRange.deleteValue(), this._proSymbol.deleteValue()
                }
                _watchedIntervalListener(e) {
                    this._intervalProperty().value() !== e && this._chartWidgetCollection.setResolution(e)
                }
                _onIntervalPropertyChange() {
                    const e = this._intervalProperty().value() !== this._watchedInterval.value();
                    this._watchedInterval.setValue(this._intervalProperty().value()), e && this._chartWidgetCollection.setResolution(this._intervalProperty().value())
                }
                _onChartModelCreated(e) {
                    if (!this._activeChartWidget) throw new Error("ChartWidget is undefined");
                    this._chartWidgetBindingState = S.BoundToModel, this._activeChartWidget.modelCreated().unsubscribe(this, this._onChartModelCreated);
                    const t = this._symbolProperty();
                    t.subscribe(this, this._onSymbolPropertyChange),
                        this._watchedSymbol.setValue(t.value()), this._watchedSymbol.subscribe(this._watchedSymbolListenerBound);
                    const i = this._mainSeries();
                    i.dataEvents().symbolResolved().subscribe(this, this._onSymbolResolved), this._watchedSymbol.hook = e => (i.symbolSameAsCurrent(e) && (e = i.symbol()), e), i.dataEvents().symbolResolved().subscribe(this, this._updateSeriesSymbolInfo), i.dataEvents().symbolError().subscribe(this, this._updateSeriesSymbolInfo), i.dataEvents().symbolNotPermitted().subscribe(this, this._updateSeriesSymbolInfo), i.dataEvents().symbolGroupNotPermitted().subscribe(this, this._updateSeriesSymbolInfo), this._updateSeriesSymbolInfo();
                    const n = this._intervalProperty();
                    n.subscribe(this, this._onIntervalPropertyChange), this._watchedInterval.setValue(n.value()), this._watchedInterval.subscribe(this._watchedIntervalListenerBound), this._activeChartWidget.readOnly() && (this._watchedSymbol.writeLock = !0)
                }
            }; {
                const e = (0, u.getFreshInitData)().symbolInfo,
                    t = e ? e.pro_symbol : c.getValue("editchart.model.symbol", window.DEFAULT_SYMBOL);
                y.symbol.setValue(t)
            }
            window.TradingViewApi || (window.TradingViewApi = {
                linking: y
            })
        },
        849204: (e, t, i) => {
            i.r(t), i.d(t, {
                LogoSize: () => n,
                LogoUrlResolver: () => r,
                getLogoUrlResolver: () => l
            });
            var n, s = i(588537),
                o = i(588948);
            ! function(e) {
                e[e.Medium = 0] = "Medium", e[e.Large = 1] = "Large"
            }(n || (n = {}));
            class r {
                constructor(e) {
                    (0, s.assert)("" !== e, "S3 base url must be a non-empty string"), this._baseUrl = e
                }
                getSymbolLogoUrl(e, t) {
                    switch ((0, s.assert)("" !== e, "logo id must be a non-empty string"), t) {
                        case n.Medium:
                            return this._baseUrl + `${e}.svg`;
                        case n.Large:
                            return this._baseUrl + `${e}--big.svg`
                    }
                }
                getCountryFlagUrl(e, t) {
                    return this.getSymbolLogoUrl("country/" + e, t)
                }
                getCryptoLogoUrl(e, t) {
                    return this.getSymbolLogoUrl("crypto/" + e, t)
                }
                getProviderLogoUrl(e, t) {
                    return this.getSymbolLogoUrl("provider/" + e, t)
                }
            }
            let a;

            function l() {
                if (!a) {
                    const e = (0, o.getInitData)(),
                        t = e.settings ? e.settings.S3_LOGO_SERVICE_BASE_URL : "";
                    a = new r(t)
                }
                return a
            }
        },
        934440: (e, t, i) => {
            const n = i(611688);
            window.TradingView = window.TradingView || {};
            var s, o, r, a, l, c, u, d = TradingView.postMessageWrapper = (o = Object.create(null), r = Object.create(null), a = Object.create(null), l = 0, c = 0, u = "TradingView", window.addEventListener && window.addEventListener("message", (function(e) {
                var t;
                try {
                    t = JSON.parse(e.data), n.enabled("charting_library_debug_mode") && console.log("PostMessage: incoming message: " + JSON.stringify(t))
                } catch (e) {
                    return
                }
                if (t && t.provider && t.provider === u)
                    if ("get" === t.type) {
                        if (!r[t.name]) return;
                        r[t.name].forEach((function(e) {
                            "function" == typeof e && e.call(t, t.data, (function(e) {
                                var i = {
                                    id: t.id,
                                    type: "on",
                                    name: t.name,
                                    client_id: t.client_id,
                                    data: e,
                                    provider: u
                                };
                                s.postMessage(JSON.stringify(i), "*")
                            }))
                        }))
                    } else if ("on" === t.type) o[t.client_id] && o[t.client_id][t.id] && (o[t.client_id][t.id].call(t, t.data), delete o[t.client_id][t.id]);
                else if ("post" === t.type) {
                    if (!r[t.name]) return;
                    r[t.name].forEach((function(e) {
                        "function" == typeof e && e.call(t, t.data, (function() {}))
                    }))
                }
            })), function(e, t) {
                o[t] = Object.create(null), a[t] = e, s = e;
                var i = "";
                return {
                    on: function(e, t, i) {
                        r[e] && i || (r[e] = []), r[e].push(t)
                    },
                    get: function(e, i, n) {
                        var s = {
                            id: l++,
                            type: "get",
                            name: e,
                            client_id: t,
                            data: i,
                            provider: u
                        };
                        o[t][s.id] = n, a[t].postMessage(JSON.stringify(s), "*")
                    },
                    post: function(e, t, n) {
                        var s = {
                            id: c++,
                            type: "post",
                            name: t,
                            client_id: i,
                            data: n,
                            provider: u
                        };
                        e && "function" == typeof e.postMessage && e.postMessage(JSON.stringify(s), "*")
                    },
                    setClientId: function(e) {
                        i = e
                    }
                }
            });
            e.exports = d
        },
        779923: (e, t, i) => {
            async function n(e, t) {
                const n = await Promise.all([i.e(90519), i.e(10146), i.e(90926), i.e(48181), i.e(8834), i.e(35354), i.e(5979), i.e(30063), i.e(91670), i.e(95468), i.e(55508), i.e(28718), i.e(21897), i.e(75514), i.e(92697), i.e(45553), i.e(32025), i.e(38890)]).then(i.bind(i, 894185));
                return n.showSimpleDialog(e, n.renameModule, t)
            }
            async function s(e, t) {
                const n = await Promise.all([i.e(90519), i.e(10146), i.e(90926), i.e(48181), i.e(8834), i.e(35354), i.e(5979), i.e(30063), i.e(91670), i.e(95468), i.e(55508), i.e(28718), i.e(21897), i.e(75514), i.e(92697), i.e(45553), i.e(32025), i.e(38890)]).then(i.bind(i, 894185));
                return n.showSimpleDialog(e, n.confirmModule, t)
            }
            async function o(e, t) {
                const n = await Promise.all([i.e(90519), i.e(10146), i.e(90926), i.e(48181), i.e(8834), i.e(35354), i.e(5979), i.e(30063), i.e(91670), i.e(95468), i.e(55508), i.e(28718), i.e(21897), i.e(75514), i.e(92697), i.e(45553), i.e(32025), i.e(38890)]).then(i.bind(i, 894185));
                return n.showSimpleDialog(e, n.warningModule, t)
            }
            i.r(t), i.d(t, {
                showRename: () => n,
                showConfirm: () => s,
                showWarning: () => o
            })
        },
        224743: (e, t, i) => {
            i.d(t, {
                globalCloseDelegate: () => s,
                globalCloseMenu: () => o
            });
            var n = i(97639);
            const s = new(i.n(n)());

            function o() {
                s.fire()
            }
        }
    }
]);