(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [91472, 53377], {
        53377: t => {
            t.exports = {}
        },
        327581: t => {
            t.exports = {
                "css-value-widgetbar-tabs-width": "45px",
                "css-value-widgetbar-border-width": "1px"
            }
        },
        23541: t => {
            t.exports = {
                widgetbarButton: "widgetbarButton-lOu47hf_"
            }
        },
        736232: t => {
            t.exports = {
                "css-value-widgets-margin": "4px",
                widget: "widget-_I5Xtw7b",
                widgetHeader: "widgetHeader-_I5Xtw7b",
                widgetTitle: "widgetTitle-_I5Xtw7b",
                headerSpace: "headerSpace-_I5Xtw7b"
            }
        },
        534687: t => {
            t.exports = {
                "news-item": "news-item-GNj7IA5S",
                "news-item--no-hover": "news-item--no-hover-GNj7IA5S",
                "news-item--highlight": "news-item--highlight-GNj7IA5S",
                "news-item__header": "news-item__header-GNj7IA5S",
                "news-item__breadcrumbs": "news-item__breadcrumbs-GNj7IA5S",
                "news-item__logos": "news-item__logos-GNj7IA5S",
                "news-item--card": "news-item--card-GNj7IA5S",
                "news-item__title": "news-item__title-GNj7IA5S",
                "news-item__title--external-link": "news-item__title--external-link-GNj7IA5S",
                "news-item__description": "news-item__description-GNj7IA5S",
                "news-item--important": "news-item--important-GNj7IA5S",
                "news-item__wrapper": "news-item__wrapper-GNj7IA5S"
            }
        },
        186012: t => {
            t.exports = {
                container: "container-ZZvWrNQq",
                mirror: "mirror-ZZvWrNQq",
                background: "background-ZZvWrNQq",
                arrow: "arrow-ZZvWrNQq"
            }
        },
        831301: t => {
            t.exports = {
                wrap: "wrap-g7ay5OPA",
                scrollWrap: "scrollWrap-g7ay5OPA",
                noScrollBar: "noScrollBar-g7ay5OPA",
                content: "content-g7ay5OPA",
                icon: "icon-g7ay5OPA",
                scrollBot: "scrollBot-g7ay5OPA",
                scrollTop: "scrollTop-g7ay5OPA",
                isVisible: "isVisible-g7ay5OPA",
                iconWrap: "iconWrap-g7ay5OPA",
                fadeBot: "fadeBot-g7ay5OPA",
                fadeTop: "fadeTop-g7ay5OPA"
            }
        },
        774610: t => {
            t.exports = {
                button: "button-sk15D4PB",
                icon: "icon-sk15D4PB"
            }
        },
        979539: t => {
            t.exports = {
                filler: "filler-Z5mVXNrM"
            }
        },
        961015: t => {
            t.exports = {
                toolbar: "toolbar-FsIAtouN",
                isGrayed: "isGrayed-FsIAtouN"
            }
        },
        66243: t => {
            t.exports = {
                separator: "separator-rRO3oCne"
            }
        },
        773989: t => {
            t.exports = {
                button: "button-ocTuaBGx",
                hover: "hover-ocTuaBGx",
                hoverMask: "hoverMask-ocTuaBGx",
                icon: "icon-ocTuaBGx",
                counterRow: "counterRow-ocTuaBGx",
                counter: "counter-ocTuaBGx",
                isGrayed: "isGrayed-ocTuaBGx",
                isActive: "isActive-ocTuaBGx",
                isTab: "isTab-ocTuaBGx"
            }
        },
        413880: t => {
            t.exports = {}
        },
        456018: t => {
            t.exports = {
                counter: "counter-faGyqqCg"
            }
        },
        480826: t => {
            t.exports = {}
        },
        755331: t => {
            t.exports = {
                stack: "stack-_a62qKzG"
            }
        },
        500045: t => {
            t.exports = {}
        },
        105573: (t, e, i) => {
            "use strict";
            var s;
            i.d(e, {
                    BadgeSize: () => s
                }),
                function(t) {
                    t.XSmall = "xsmall", t.Small = "small", t.Medium = "medium", t.Large = "large", t.XLarge = "xlarge"
                }(s || (s = {}))
        },
        662464: (t, e, i) => {
            "use strict";
            i.d(e, {
                useHover: () => n,
                hoverMouseEventFilter: () => a,
                useAccurateHover: () => r
            });
            var s = i(559496);

            function n() {
                const [t, e] = (0, s.useState)(!1);
                return [t, {
                    onMouseOver: function(t) {
                        a(t) && e(!0)
                    },
                    onMouseOut: function(t) {
                        a(t) && e(!1)
                    }
                }]
            }

            function a(t) {
                return !t.currentTarget.contains(t.relatedTarget)
            }

            function r(t) {
                const [e, i] = (0, s.useState)(!1);
                return (0, s.useEffect)((() => {
                    const e = e => {
                        if (null === t.current) return;
                        const s = t.current.contains(e.target);
                        i(s)
                    };
                    return document.addEventListener("mouseover", e), () => document.removeEventListener("mouseover", e)
                }), []), e
            }
        },
        923628: (t, e, i) => {
            "use strict";
            i.d(e, {
                RelativeTime: () => d
            });
            var s = i(559496);

            function n(t, e, i = "long") {
                const s = Math.floor(t / 1e3),
                    n = Math.sign(s),
                    [a, r] = function(t) {
                        if (t < 90) return [1, "minute"];
                        if (t < 2700) return [Math.max(Math.floor(t / 60), 2), "minute"];
                        if (t < 5400) return [1, "hour"];
                        if (t < 79200) return [Math.max(Math.floor(t / 60 / 60), 2), "hour"];
                        if (t < 129600) return [1, "day"];
                        if (t < 216e4) return [Math.max(Math.floor(t / 86400), 2), "day"];
                        if (t < 3888e3) return [1, "month"];
                        if (t < 29808e3) return [Math.max(Math.floor(t / 2592e3), 2), "month"];
                        return t < 47088e3 ? [1, "year"] : [Math.max(Math.floor(t / 31536e3), 2), "year"]
                    }(Math.abs(s));
                return new Intl.RelativeTimeFormat(e, {
                    numeric: "auto",
                    style: i
                }).format(n * a, r)
            }

            function a() {
                if (!window.customElements.get("relative-time")) {
                    class t extends HTMLElement {
                        constructor() {
                            super(), this._currentTime = 0, this._eventTime = 0, this._locale = void 0, this._style = "long", this._isConnected = !1, this._date = document.createElement("time");
                            const t = this.getAttribute("ssr-time");
                            this._currentTime = t ? Date.parse(t) : Date.now();
                            this.attachShadow({
                                mode: "closed"
                            }).appendChild(this._date)
                        }
                        static get observedAttributes() {
                            return ["event-time", "locale", "format-style"]
                        }
                        connectedCallback() {
                            this._isConnected = !0, this.classList.add("apply-common-tooltip"), this._updateAttributes(), this._connectionChanged()
                        }
                        disconnectedCallback() {
                            this._isConnected = !1, this._connectionChanged()
                        }
                        attributeChangedCallback(t, e, i) {
                            "event-time" === t && (this._eventTime = Date.parse(i)), "locale" === t && (this._locale = i), "format-style" === t && (this._style = i), this._isConnected && (this._updateAttributes(), this.update(Date.now()))
                        }
                        update(t) {
                            const e = n(this._eventTime - t, this._locale, this._style);
                            this._date.innerText = e
                        }
                        _updateAttributes() {
                            const t = new Date(this._eventTime);
                            var e, i, s;
                            this.setAttribute("title", (e = t, s = this._locale, i = s ? `${s}-u-hc-h23` : void 0, new Intl.DateTimeFormat(i, {
                                year: "numeric",
                                day: "numeric",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit",
                                calendar: "gregory"
                            }).format(e))), this._date.setAttribute("datetime", t.toUTCString())
                        }
                        _connectionChanged() {
                            this._isConnected ? (r.add(this), this.update(this._currentTime), h()) : r.delete(this)
                        }
                    }
                    window.customElements.define("relative-time", t)
                }
            }
            const r = new Set;
            let o = 0,
                l = 0;

            function h() {
                0 === o && 0 === l && 0 !== r.size && (o = setTimeout((() => {
                    o = 0, l = requestAnimationFrame((() => {
                        l = 0, h(),
                            function() {
                                const t = Date.now();
                                for (const e of r) e.update(t)
                            }()
                    }))
                }), 3e4))
            }

            function d(t) {
                const {
                    ssrTime: e,
                    eventTime: i,
                    localeIso: n,
                    formatStyle: r,
                    fallbackText: o,
                    isSSR: l
                } = t, h = new Date(e || Date.now()), d = new Date(i), g = (0, s.useRef)(null);
                return l || (0, s.useLayoutEffect)((() => {
                    const t = g.current;
                    o && t && !t.textContent && (t.textContent = o)
                })), (0, s.useEffect)((() => {
                    const t = g.current;
                    Intl.RelativeTimeFormat && (t && t.remove(), a())
                }), []), s.createElement("relative-time", {
                    locale: n,
                    "ssr-time": h.toUTCString(),
                    "event-time": d.toUTCString(),
                    "format-style": r
                }, s.createElement(c, {
                    startDate: h,
                    endDate: d,
                    localeIso: n,
                    style: r,
                    ref: g
                }))
            }
            const c = s.forwardRef(((t, e) => {
                const {
                    startDate: i,
                    endDate: a,
                    localeIso: r,
                    style: o
                } = t;
                if (Intl.RelativeTimeFormat) {
                    const t = (0, s.useMemo)((() => n(a.getTime() - i.getTime(), r, o)), []);
                    return s.createElement("time", {
                        ref: e,
                        dateTime: a.toUTCString(),
                        suppressHydrationWarning: !0
                    }, t)
                }
                return s.createElement("time", {
                    ref: e,
                    dangerouslySetInnerHTML: {
                        __html: ""
                    },
                    suppressHydrationWarning: !0
                })
            }))
        },
        746326: (t, e, i) => {
            "use strict";

            function s(t) {
                const {
                    paddingTop: e,
                    paddingBottom: i
                } = window.getComputedStyle(t);
                return [e, i].reduce(((t, e) => t - Number((e || "").replace("px", ""))), t.clientHeight)
            }

            function n(t) {
                const {
                    paddingLeft: e,
                    paddingRight: i
                } = window.getComputedStyle(t);
                return [e, i].reduce(((t, e) => t - Number((e || "").replace("px", ""))), t.clientWidth)
            }

            function a(t, e = !1) {
                const i = getComputedStyle(t),
                    s = [i.height];
                return "border-box" !== i.boxSizing && s.push(i.paddingTop, i.paddingBottom, i.borderTopWidth, i.borderBottomWidth), e && s.push(i.marginTop, i.marginBottom), s.reduce(((t, e) => t + (parseFloat(e) || 0)), 0)
            }

            function r(t, e = !1) {
                const i = getComputedStyle(t),
                    s = [i.width];
                return "border-box" !== i.boxSizing && s.push(i.paddingLeft, i.paddingRight, i.borderLeftWidth, i.borderRightWidth), e && s.push(i.marginLeft, i.marginRight), s.reduce(((t, e) => t + (parseFloat(e) || 0)), 0)
            }
            i.d(e, {
                contentHeight: () => s,
                contentWidth: () => n,
                outerHeight: () => a,
                outerWidth: () => r
            })
        },
        341099: (t, e, i) => {
            "use strict";
            i.d(e, {
                AgoDateFormatter: () => u,
                Time: () => g
            });
            var s = i(559496),
                n = i(497754),
                a = i(923628),
                r = i(812352),
                o = i(820187),
                l = i(830318);

            function h(t) {
                return function(t) {
                    const e = new Date(t),
                        i = new o.TimeFormatter(o.hourMinuteFormat),
                        s = l.dateFormatFunctions["MMM dd"](e, !0);
                    return [i.formatLocal(e), s]
                }(t).join(" ").replace(" ", " · ")
            }
            var d = i(684987);
            const c = (0, r.getLocaleIso)();

            function g(t) {
                const e = new Date(t.eventTime);
                return s.createElement("time", {
                    dateTime: e.toUTCString(),
                    className: n("apply-common-tooltip", t.className),
                    title: (0, d.getFormatterFullContent)(t.eventTime),
                    suppressHydrationWarning: !0
                }, t.children)
            }

            function u(t) {
                const e = new Date,
                    i = new Date(t.eventTime),
                    n = i.getTime(),
                    r = e.getTime() - n,
                    o = e.getFullYear() !== i.getFullYear();
                return !o && r < 6912e5 ? s.createElement(a.RelativeTime, {
                    eventTime: t.eventTime,
                    ssrTime: t.ssrTime,
                    localeIso: c,
                    fallbackText: h(n),
                    isSSR: !1
                }) : s.createElement(g, {
                    eventTime: t.eventTime
                }, function(t, e) {
                    if (e) return (0, d.getFormatterContentWithYear)(t);
                    return (0, d.getFormatterContent)(t)
                }(n, o))
            }
        },
        684987: (t, e, i) => {
            "use strict";
            i.d(e, {
                getFormatterFullContent: () => a,
                getFormatterContent: () => r,
                getFormatterContentWithYear: () => o,
                getFormatterTime: () => l
            });
            const s = (0, i(812352).getLocaleIso)(),
                n = s && `${s}-u-hc-h23`,
                a = t => {
                    const e = new Date(t).getTime();
                    return new Intl.DateTimeFormat(n, {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        calendar: "gregory"
                    }).format(e)
                },
                r = t => {
                    const e = new Date(t).getTime();
                    return new Intl.DateTimeFormat(n, {
                        month: "short",
                        day: "numeric",
                        calendar: "gregory"
                    }).format(e)
                },
                o = t => {
                    const e = new Date(t).getTime();
                    return new Intl.DateTimeFormat(n, {
                        month: "short",
                        day: "numeric",
                        calendar: "gregory",
                        year: "numeric"
                    }).format(e)
                },
                l = t => {
                    const e = new Date(t).getTime();
                    return new Intl.DateTimeFormat(n, {
                        hour: "2-digit",
                        minute: "2-digit"
                    }).format(e)
                }
        },
        970895: (t, e, i) => {
            "use strict";
            i.d(e, {
                getHeadlineCardVisualProps: () => g,
                getNewsCardVisualProps: () => u,
                prepareLogoUrls: () => m
            });
            var s = i(957052),
                n = i(588537),
                a = i(593725),
                r = i(838115),
                o = i(692598),
                l = i(830318),
                h = i(559496),
                d = i(341099);

            function c(t) {
                const e = [];
                return "published" in t && e.push(h.createElement(d.AgoDateFormatter, {
                    eventTime: t.published,
                    ssrTime: t.ssrTimeMs,
                    isSSR: !1
                })), e.push(h.createElement("span", null, t.source)), "date" in t && e.push(h.createElement("span", null, t.date)), e
            }

            function g(t) {
                const e = l.dateFormatFunctions["MMM dd"](new Date((0, n.ensureDefined)(t.date)), !0);
                return {
                    breadcrumbs: c({
                        source: t.source,
                        date: e
                    }),
                    title: t.title,
                    link: t.link,
                    logoUrlsOrSymbols: t.relatedSymbols ? m(t.relatedSymbols.slice(0, 4)) : []
                }
            }

            function u(t, e) {
                return {
                    breadcrumbs: c({
                        source: t.source,
                        published: t.published,
                        ssrTimeMs: e
                    }),
                    title: t.title,
                    link: (0, a.getNewsItemLink)(t),
                    logoUrlsOrSymbols: t.relatedSymbols ? m(t.relatedSymbols.slice(0, 4)) : [],
                    showExternalLink: (0, r.showExternalLink)(t),
                    isButton: !(0, a.isNewsItemLink)(t),
                    withHover: (0, a.isInteractiveNewsItem)(t),
                    urgency: t.urgency
                }
            }

            function m(t) {
                return (0, s.default)(t, (t => {
                    const e = (0, o.removeUsdAndStableCoinFromCryptoPairLogos)((0, o.resolveLogoUrls)(t));
                    return e.length ? e.map(p) : {
                        symbol: t.symbol
                    }
                }))
            }

            function p(t) {
                return {
                    logoUrl: t
                }
            }
        },
        564787: (t, e, i) => {
            "use strict";
            var s;
            i.d(e, {
                WIDGET_BAR_MESSAGE_BUS: () => n
            });
            const n = new((s = class t {
                postMessage(e, i) {
                    t._handlers.forEach((t => {
                        t.handler(e, i)
                    }))
                }
                onMessage(e) {
                    "function" == typeof e && t._handlers.push({
                        handler: e,
                        widget: this
                    })
                }
                offMessage(e) {
                    if ("function" == typeof e) {
                        const i = t._handlers.findIndex((t => t.handler === e)); - 1 !== i && t._handlers.splice(i, 1)
                    }
                }
                offWidget(e) {
                    t._handlers = t._handlers.filter((t => t.widget !== e))
                }
            })._handlers = [], s)
        },
        359621: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                WidgetBar: () => Qt
            });
            var s = i(897304),
                n = (i(823127), i(588537)),
                a = (i(53377), i(173845), i(327581), i(575932)),
                r = i(344435),
                o = i(559496),
                l = i(587995),
                h = i(262325),
                d = i.n(h);
            const c = {
                isActive: !1,
                notificationCount: 0
            };
            class g {
                constructor(t) {
                    const e = { ...c,
                        ...t
                    };
                    this.isActive = new(d())(e.isActive), this.notificationsCount = new(d())(e.notificationCount), this.icon = new(d())(e.icon), this.hint = new(d())(e.hint), this.onClick = new(d())(e.onClick), this.TabButtonComponent = t.TabButtonComponent
                }
                onActiveStateChange(t) {
                    this.isActive.setValue(t)
                }
                updateNotifications(t) {
                    this.notificationsCount.setValue(t)
                }
            }
            var u = i(191085),
                m = i(66957),
                p = i(848185),
                v = i(836914),
                w = i(242765),
                _ = i(425403),
                f = i(481891),
                b = i(232064),
                y = i(151286),
                C = i(496220),
                B = i(525336),
                T = i(786548),
                x = i(707953),
                S = i(452970),
                M = i(981132),
                L = i(736232);
            const z = parseInt(L["css-value-widgets-margin"]),
                W = {
                    reuters_calendar: {
                        title: (0, a.t)("Economic Calendar"),
                        emptyHeader: !0,
                        ctor: null,
                        lazyLoad: !0,
                        widgetClass: L.widget,
                        headerClass: L.widgetHeader
                    },
                    earnings_calendar: {
                        title: (0, a.t)("Earnings Calendar"),
                        ctor: null,
                        lazyLoad: !0,
                        emptyHeader: !0,
                        widgetClass: L.widget,
                        headerClass: L.widgetHeader,
                        margin: z
                    },
                    watchlist: {
                        title: (0, a.t)("Watchlist"),
                        ctor: null,
                        lazyLoad: !0,
                        chartWidgetAllowed: !0,
                        emptyHeader: !0,
                        widgetClass: L.widget,
                        headerClass: L.widgetHeader,
                        margin: z,
                        preloadDelay: 6e4
                    },
                    hotlist: {
                        title: (0, a.t)("Hotlist"),
                        ctor: null,
                        lazyLoad: !0,
                        chartWidgetAllowed: !0,
                        emptyHeader: !0,
                        widgetClass: L.widget,
                        headerClass: L.widgetHeader,
                        margin: z
                    },
                    detail: {
                        title: (0,
                            a.t)("Details"),
                        ctor: null,
                        lazyLoad: !0,
                        chartWidgetAllowed: !0,
                        widgetClass: L.widget,
                        headerClass: L.widgetHeader,
                        margin: z,
                        emptyHeader: !0
                    },
                    news: {
                        title: (0, a.t)("Headlines"),
                        ctor: null,
                        noHeaderSpace: !0,
                        widgetClass: L.widget,
                        headerClass: L.widgetHeader,
                        titleClass: L.widgetTitle,
                        margin: z
                    },
                    chat: {
                        title: (0, a.t)("Talks"),
                        ctor: null,
                        chartWidgetAllowed: !0,
                        doNotClearNotifications: !0
                    },
                    messages: {
                        title: (0, a.t)("Recent Chats"),
                        ctor: null,
                        chartWidgetAllowed: !0,
                        doNotClearNotifications: !0
                    },
                    messages_with_select: {
                        title: (0, a.t)("Recent Chats"),
                        ctor: null,
                        chartWidgetAllowed: !0,
                        doNotClearNotifications: !0,
                        options: {
                            layoutWithSelect: !0
                        },
                        emptyHeader: !0
                    },
                    notifications_user: {
                        title: (0, a.t)("Notifications"),
                        ctor: null,
                        options: {
                            type: "user"
                        },
                        chartWidgetAllowed: !0
                    },
                    notifications_following: {
                        title: (0, a.t)("Ideas Stream"),
                        ctor: null,
                        options: {
                            type: "following"
                        },
                        chartWidgetAllowed: !0
                    },
                    datawindow: {
                        title: (0, a.t)("Data Window"),
                        ctor: null,
                        chartWidgetAllowed: !0,
                        chartWidgetRequired: !0
                    },
                    publicchats: {
                        title: (0, a.t)("All Talks"),
                        ctor: null,
                        doNotClearNotifications: !0
                    },
                    publicchats_with_select: {
                        title: (0, a.t)("All Talks"),
                        ctor: null,
                        doNotClearNotifications: !0,
                        options: {
                            layoutWithSelect: !0
                        },
                        emptyHeader: !0
                    },
                    notes: {
                        title: (0, a.t)("My Ideas"),
                        ctor: null,
                        lazyLoad: !0,
                        chartWidgetAllowed: !0
                    },
                    alerts_manage: {
                        ctor: null,
                        lazyLoad: !0,
                        chartWidgetAllowed: !0,
                        emptyHeader: !0,
                        noHeaderSpace: !0,
                        widgetClass: L.widget,
                        headerClass: L.widgetHeader,
                        margin: z
                    },
                    alerts_log: {
                        ctor: null,
                        chartWidgetAllowed: !0,
                        emptyHeader: !0,
                        noHeaderSpace: !0,
                        widgetClass: L.widget,
                        headerClass: L.widgetHeader,
                        margin: z
                    },
                    market_summary: {
                        title: (0, a.t)("Market Summary"),
                        ctor: null
                    },
                    object_tree: {
                        title: (0, a.t)("Object tree. Multi-select drawings"),
                        ctor: null,
                        noHeader: !0,
                        chartWidgetAllowed: !0,
                        chartWidgetRequired: !0
                    },
                    streams: {
                        title: (0, a.t)("Streams"),
                        ctor: null,
                        emptyHeader: !0,
                        widgetClass: L.widget,
                        headerClass: L.widgetHeader,
                        margin: z,
                        doNotClearNotifications: !0,
                        doNotClearNotificationsOnVisibilityChange: !0
                    },
                    minds: {
                        title: (0, a.t)("Minds"),
                        ctor: null,
                        emptyHeader: !0,
                        widgetClass: L.widget,
                        headerClass: L.widgetHeader,
                        margin: z,
                        chartWidgetAllowed: !0
                    }
                },
                E = {
                    base: u
                };
            E["economic-calendar"] = m, E["alarm-clock"] = p, E.hotlists = v, E.calendar = w, E.notes = _, E.chat = f, E.messages = b, E["ideas-stream"] = y, E.notifications = C, E.streams = B, E.news = T, E.minds = x, E["object-tree"] = S, E.datawindow = M;
            var P = i(497754),
                k = i.n(P),
                A = i(581996),
                N = i(97639),
                H = i.n(N),
                I = i(583912),
                D = i(698969),
                V = i(345848),
                O = i(62802);
            class R {
                constructor(t) {
                    this._settingsKey = null, this._value = null, t && t.settingsKey && (this._settingsKey = t.settingsKey, this._value = O.getJSON(this._settingsKey, null)), t && t.widgetBarWidget && Object.defineProperty(this, "widgetBarWidget", {
                        value: t.widgetBarWidget,
                        configurable: !0
                    })
                }
                value() {
                    return this._value
                }
                setValue(t, e) {
                    return this._value = t, this._settingsKey && (null == t ? ((0, V.trackEvent)("Settings debug", "WigdetProperties.setValue: " + this._settingsKey, window.user.username), O.remove(this._settingsKey)) : O.setJSON(this._settingsKey, t, e)), this._value
                }
            }
            var F = i(318557),
                U = i(564787),
                G = i(95935),
                j = i(404573),
                $ = i(823127);
            class q {
                constructor(t) {
                    this.heightRatio = q.heightRatio, this.minHeight = 0, this.widgetConfig = null,
                        this.widgetActive = new(d()), this.widgetMaximized = new(d()), this.widgetVisible = null, this.symbolLinking = null, this.intervalLinking = null, this._header = null, this._widget = null, this._headerIcon = null, this._headerspace = null, this._title = null, this._resizehandle = null, this._widgetStarted = new(H()), this._resizer = null, this._internalState = {
                            alive: new(d())(!0),
                            container: new(d()),
                            width: new(d()),
                            height: new(d()),
                            detachable: new(d())(!1)
                        }, t && t.widgetBarPage && (this.widgetBarPage = t.widgetBarPage), this._rdState = new A.ResizerDetacherState(this._internalState), this._rdState.owner.subscribe((t => {
                            t !== this._internalState && $(this._internalState.container.value()).empty()
                        }))
                }
                element(t) {
                    switch (t) {
                        case "widget":
                            return this._widget;
                        case "header":
                            return this._header;
                        case "resize-handle":
                            return this._resizehandle;
                        default:
                            return null
                    }
                }
                setHeight(t) {
                    this._internalState.container.value() && (this._internalState.container.value().style.height = t + "px"), this._internalState.height.setValue(t)
                }
                onWidthChange(t) {
                    this._internalState.width.setValue(t)
                }
                remove() {
                    this.widgetBarPage && this.widgetBarPage.removeWidget(this)
                }
                destroy() {
                    var t, e, i, s, n, a;
                    this.widgetObject && "destroy" in this.widgetObject && this.widgetObject.destroy(), this.remove(), this.symbolLinking && (this.symbolLinking.destroy(), this.symbolLinking = null), this.intervalLinking && (this.intervalLinking.destroy(), this.intervalLinking = null), this.widgetVisible && (this.widgetVisible.unsubscribe(), this.widgetVisible = null), this.widgetActive && (this.widgetActive.unsubscribe(), this.widgetActive = null), this.widgetMaximized && (this.widgetMaximized.unsubscribe(), this.widgetMaximized = null), null === (t = this._header) || void 0 === t || t.remove(), null === (e = this._widget) || void 0 === e || e.remove(), null === (i = this._headerIcon) || void 0 === i || i.remove(), null === (s = this._headerspace) || void 0 === s || s.remove(), null === (n = this._title) || void 0 === n || n.remove(), null === (a = this._resizehandle) || void 0 === a || a.remove(), this._header = null, this._widget = null, this._headerIcon = null, this._headerspace = null, this._title = null, this._resizehandle = null, U.WIDGET_BAR_MESSAGE_BUS.offWidget(this), this._preloadTimeout && clearTimeout(this._preloadTimeout)
                }
                rdState() {
                    return this._rdState
                }
                onActiveStateChange(t) {
                    var e;
                    const i = (this.getWidgetBarOption("widgetConfig") || W)[this.type];
                    t && !i.doNotClearNotifications && this.clearNotifications(), this.updateVisibleWatchedValue(), null === (e = this.widgetActive) || void 0 === e || e.setValue(!!t)
                }
                toggleMaximize(t) {
                    var e, i, s;
                    const n = "boolean" != typeof t ? !(null === (e = this.widgetMaximized) || void 0 === e ? void 0 : e.value()) : t;
                    n !== (null === (i = this.widgetMaximized) || void 0 === i ? void 0 : i.value()) && (null === (s = this.widgetMaximized) || void 0 === s || s.setValue(n), this.widgetBarPage && this.widgetBarPage.widgetBarLayout && this.widgetBarPage.widgetBarLayout.widgetBar && this.widgetBarPage.widgetBarLayout.widgetBar.saveToTVSettings(), this.widgetBarPage && this.widgetBarPage.updateWidgetsHeight())
                }
                startWidget() {
                    var t;
                    if (this.widgetObject || this.widgetStartDelayed) return;
                    if (!this.id) return;
                    const e = this.getWidgetBarOption("widgetConfig") || W;
                    if (!this.type) return;
                    const i = e[this.type];
                    if (!i) return;
                    const s = i.ctor;
                    if (!s) return;
                    if (this.widgetVisible = this.widgetVisible || new(d()), this.updateVisibleWatchedValue(), i.lazyLoad && !this.widgetVisible.value()) return this.widgetStartDelayed = !0, this.widgetVisible.when((() => {
                        delete this.widgetStartDelayed, this.startWidget(), clearTimeout(this._preloadTimeout)
                    })), void(i.preloadDelay && (this._preloadTimeout = setTimeout((() => {
                        s.preload && s.preload()
                    }), i.preloadDelay)));
                    this.symbolLinking = I.linking.symbol.spawn(), this.intervalLinking = I.linking.interval.spawn();
                    const a = this._rdState.bridge(),
                        r = { ...{
                                $widget: this.$widget,
                                $header: this.$header,
                                $headerspace: this.$headerspace,
                                $body: $(a.container.value())
                            },
                            header: (0, n.ensureNotNull)(this._header),
                            headerspace: this._headerspace,
                            widget: (0, n.ensureNotNull)(this._widget),
                            container: a.container.value(),
                            properties: this.properties,
                            notify: this.notify.bind(this),
                            clearNotifications: this.clearNotifications.bind(this),
                            visible: this.widgetVisible.readonly(),
                            active: (0, n.ensureNotNull)(this.widgetActive).readonly(),
                            symbol: this.symbolLinking,
                            interval: this.intervalLinking,
                            height: a.height,
                            setMinHeight: this.setMinHeight.bind(this),
                            width: a.width,
                            setTitle: this.setTitle.bind(this),
                            setTitleHtml: this.setTitleHtml.bind(this),
                            id: this.id,
                            toggleMaximize: this.toggleMaximize.bind(this),
                            maximized: (0, n.ensureNotNull)(this.widgetMaximized).readonly(),
                            postMessage: U.WIDGET_BAR_MESSAGE_BUS.postMessage.bind(this),
                            onMessage: U.WIDGET_BAR_MESSAGE_BUS.onMessage.bind(this),
                            offMessage: U.WIDGET_BAR_MESSAGE_BUS.offMessage.bind(this),
                            hideDetach: !1,
                            unAuthEditable: this.unAuthEditable
                        };
                    if (i.chartWidgetAllowed) {
                        const t = () => this.widgetBarPage && this.widgetBarPage.widgetBarLayout && this.widgetBarPage.widgetBarLayout.widgetBar && this.widgetBarPage.widgetBarLayout.widgetBar.chartWidgetCollection;
                        r.getChartWidget = () => {
                            const e = t();
                            return e ? e.activeChartWidget.value() : null
                        }, r.getChartWidgetCollection = () => t() || null
                    }
                    void 0 !== this.readonly ? this.readonly && (r.readonly = !0) : this.getWidgetBarOption("readonly") && (r.readonly = !0), void 0 !== i.options && (r.options = i.options), null != this.stateData ? r.data = this.stateData : null != i.data && (r.data = i.data);
                    const o = this.widgetObject = new s(r);
                    "hasLifecycle" in o && (null === (t = this.widgetActive) || void 0 === t || t.readonly().subscribe((t => {
                        t ? o.mount() : o.unmount()
                    }), {
                        callWithLast: !i.lazyLoad
                    })), this._widgetStarted.fire(this)
                }
                widgetStarted() {
                    return this._widgetStarted
                }
                notify(t, e = {}) {
                    if (this.widgetBarPage && (!this.widgetBarPage.isActiveAndVisible() || e.force)) return this.widgetBarPage.notify(t, e)
                }
                clearNotifications() {
                    if (this.widgetBarPage) return this.widgetBarPage.clearNotifications()
                }
                onVisibilityChange() {
                    this.updateVisibleWatchedValue()
                }
                updateVisibleWatchedValue() {
                    this.widgetVisible && this.widgetVisible.setValue(!!this.widgetBarPage && this.widgetBarPage.isActiveAndVisible())
                }
                setTitle(t) {
                    this.customTitle = String(t), this._title && (this._title.textContent = this.getTitle())
                }
                setTitleHtml(t) {
                    this._title && (0, F.html)(this._title, t)
                }
                setMinHeight(t) {
                    const e = this.widgetBarPage;
                    e && (this.minHeight = 0, this.minHeight = Math.min(t, e.getAvailableHeight()), e.updateWidgetsHeight())
                }
                getWidgetBarOption(t) {
                    if (this.widgetBarPage && this.widgetBarPage.widgetBarLayout && this.widgetBarPage.widgetBarLayout.widgetBar && t in this.widgetBarPage.widgetBarLayout.widgetBar) return this.widgetBarPage.widgetBarLayout.widgetBar[t]
                }
                getTitle(t) {
                    const e = function(t, e) {
                        var i, s;
                        try {
                            let n = null === (i = (e = e || W)[t]) || void 0 === i ? void 0 : i.title;
                            return !n && t && (n = null === (s = String(t).match(/[A-Z]{2,}|\d+(?:\.\d+)?|[A-Z]?[a-z]+/g)) || void 0 === s ? void 0 : s.join(" ").replace(/^.|\s./g, (t => t.toUpperCase()))), n || void 0
                        } catch (t) {
                            return
                        }
                    }(this.type, this.getWidgetBarOption("widgetConfig"));
                    return t && this.customTitle && e ? this.customTitle.substring(0, e.length) === e ? this.customTitle : e + ": " + this.customTitle : this.customTitle || e || (0, a.t)("Widget")
                }
                createHTML() {
                    const t = !!this.widgetConfig && (!!this.widgetConfig.icon && this.widgetConfig.icon),
                        e = this.widgetConfig && this.widgetConfig.emptyHeader,
                        i = this.widgetConfig && this.widgetConfig.noHeader,
                        s = this.widgetConfig && this.widgetConfig.noHeaderSpace,
                        n = this.widgetConfig && this.widgetConfig.widgetClass || "",
                        a = this.widgetConfig && this.widgetConfig.headerClass || "",
                        r = this.widgetConfig && this.widgetConfig.titleClass || "",
                        o = this._widget = document.createElement("div");
                    o.classList.value = k()(n, "widgetbar-widget", "widgetbar-widget-" + this.type);
                    const l = this._header = document.createElement("div");
                    if (l.classList.value = a || "widgetbar-widgetheader", l.addEventListener("contextmenu", (t => {
                            "input" !== t.target.tagName.toLowerCase() && t.preventDefault()
                        })), i || o.appendChild(l), this.$widget = $(this._widget), this.$header = $(this._header), t) {
                        const e = this._headerIcon = document.createElement("div");
                        e.classList.value = "widgetbar-widgetheader-icon widgetbar-widgetheader-icon-" + t, e.appendChild((0, D.parseHtml)(E[t])), l.appendChild(e), this.$headericon = $(l)
                    }
                    if (!s) {
                        const t = this._headerspace = document.createElement("div");
                        t.classList.value = "widgetbar-headerspace", t.addEventListener("click", (t => t.preventDefault())), l.appendChild(t), this.$headerspace = $(t)
                    }
                    if (!e) {
                        const t = this._title = document.createElement("div");
                        t.classList.value = k()("widgetbar-widgettitle", r), t.dataset.name = this.type + "_header", t.textContent = this.getTitle(), l.appendChild(t), this.$title = $(t)
                    }
                    const h = document.createElement("div");
                    h.classList.value = "widgetbar-widgetbody", h.addEventListener("contextmenu", (t => {
                        t.target === h && t.preventDefault()
                    })), o.appendChild(h), this._internalState.container.setValue(h);
                    const d = this._resizehandle = document.createElement("div");
                    d.classList.value = "widgetbar-widgethandle", d.addEventListener("contextmenu", (t => {
                        t.target === d && t.preventDefault()
                    })), null !== this._resizer && this._resizer.destroy(), this._resizer = new j.PointerBackend({
                        handle: d,
                        onDragStart: t => {
                            var e;
                            null === (e = this.widgetBarPage) || void 0 === e || e.handleWidgetResizeStart(this, t)
                        },
                        onDragMove: t => {
                            var e;
                            null === (e = this.widgetBarPage) || void 0 === e || e.handleWidgetResizeChange(this, t)
                        },
                        onDragStop: t => {
                            var e;
                            null === (e = this.widgetBarPage) || void 0 === e || e.handleWidgetResizeStop(this, t)
                        }
                    }), o.appendChild(d), this.$resizehandle = $(d), !0 === this.maximized && (this.toggleMaximize(!0), delete this.maximized)
                }
                demarshal(t) {
                    if ("string" == typeof t) try {
                        t = JSON.parse(t)
                    } catch (t) {}
                    if (!t || "object" != typeof t) return null;
                    let e;
                    if ("id" in t ? (this.id = String(t.id), this.type = this.id.replace(/\..*/, "")) : "type" in t ? (this.type = String(t.type), this.id = this.type + "." + (0, G.randomHash)()) : (delete this.type, delete this.id), null != t.readonly ? this.readonly = !!t.readonly : delete this.readonly, this.stateData = t.data, isFinite(Number(t.heightRatio)) && Number(t.heightRatio) >= 0 ? this.heightRatio = Number(t.heightRatio) : this.heightRatio = q.heightRatio, !0 === t.maximized && (this.maximized = !0), !0 === t.unAuthEditable && (this.unAuthEditable = !0), t.settingsKey) e = String(t.settingsKey);
                    else if (this.id) {
                        const t = this.getWidgetBarOption("_settingsPrefix");
                        t && (e = t + ".widget." + this.id)
                    }
                    if (this.properties = new R({
                            widgetBarWidget: this,
                            settingsKey: e
                        }), null == t.properties || e && null !== this.properties.value() || this.properties.setValue(t.properties), "news" !== this.type && "hotlist" !== this.type || !e || this.properties.setValue((0, s.default)({}, t.properties, this.properties.value())), "hotlist" === this.type)
                        if (!e && t.properties) this.properties.setValue(t.properties);
                        else {
                            const t = this.properties.value();
                            ("exchangeByLocale" in t || "groupByLocale" in t) && (delete t.exchangeByLocale, delete t.groupByLocale, this.properties.setValue(t))
                        }
                    this.widgetConfig = null;
                    const i = this.getWidgetBarOption("widgetConfig");
                    return this.type && i && i[this.type] && (this.widgetConfig = i[this.type]), this
                }
                marshal() {
                    var t;
                    const e = {};
                    return this.id && (e.id = this.id), this.type && (e.type = this.type), this.heightRatio !== q.heightRatio && (e.heightRatio = this.heightRatio), (null === (t = this.widgetMaximized) || void 0 === t ? void 0 : t.value()) && (e.maximized = !0), e
                }
            }
            q.heightRatio = 1;
            var Z = i(823127);
            class X {
                constructor(t) {
                    this.widgets = [], this.notificationCounter = 0, this._page = null, this._invalidated = !1, this._resizeOperations = new WeakMap, this.widgets = [], t && t.widgetBarLayout && (this.widgetBarLayout = t.widgetBarLayout)
                }
                widget(t) {
                    for (const e of this.widgets)
                        if (e.type === t) return e;
                    return null
                }
                element() {
                    return this._page
                }
                gaEvent() {
                    return this._gaEvent
                }
                onActiveStateChange(t) {
                    var e;
                    t = !!t, null === (e = this._page) || void 0 === e || e.classList.toggle("active", !!t), (0, n.ensure)(this.tab).onActiveStateChange(t), t && this.updateWidgetsHeight({
                        skipIfHeightUnchanged: !0
                    }), this.widgets.forEach((e => {
                        e.onActiveStateChange(t)
                    }))
                }
                getAvailableHeight() {
                    var t, e;
                    let i = (null === (e = null === (t = this.widgetBarLayout) || void 0 === t ? void 0 : t.widgetBar) || void 0 === e ? void 0 : e.resizerBridge.height.value()) || 0;
                    if (!i) return 0;
                    let s = 0;
                    return this.widgets.forEach(((t, e) => {
                        if (i -= t.minHeight, e > 0) {
                            const e = t.widgetConfig && t.widgetConfig.margin || 1;
                            i -= e
                        }
                        const n = t.element("header");
                        n && (s || (s = (0, F.outerHeight)(n, !0)), i -= s)
                    })), Math.max(i, 0)
                }
                updateWidgetsHeight(t = {}) {
                    if (!this._page) return;
                    if (!this.widgetBarLayout || !this.widgetBarLayout.widgetBar) return;
                    if (this.widgetBarLayout.getActivePage() !== this) return void(this._invalidated = !0);
                    const e = this.widgetBarLayout.widgetBar.resizerBridge.height.value();
                    if (this._pageHeight === e && t.skipIfHeightUnchanged || (this._invalidated = !0, this._pageHeight = e), !this._invalidated) return;
                    let i, s = e,
                        a = 0,
                        r = this.widgets,
                        o = null;
                    const l = r.every((t => 0 === t.heightRatio));
                    for (let t = this.widgets.length; t--;)
                        if ((0, n.ensureNotNull)(this.widgets[t].widgetMaximized).value()) {
                            o = this.widgets[t];
                            break
                        }
                    if (r.length > 0 && null === o && l) {
                        const t = r[r.length - 1];
                        t.heightRatio = 1, o = t
                    }
                    if (o) {
                        for (let t = this.widgets.length; t--;) {
                            const e = r[t];
                            e !== o && e.setHeight(0)
                        }
                        r = [o]
                    }
                    for (let t = r.length - 1; t > 0; t--) {
                        const e = r[t];
                        s -= e.widgetConfig && e.widgetConfig.margin || 1
                    }
                    for (let t = r.length; t--;) {
                        const e = r[t],
                            n = e.element("header");
                        n && (void 0 === i && (i = (0, F.outerHeight)(n, !0)), s -= i, a += e.heightRatio)
                    }
                    const h = s / a;
                    this._recalculateWidgetsHeightRatio(h);
                    const d = r.length - 1;
                    for (let t = 0; t <= d; t++) {
                        const e = r[t];
                        let i;
                        i = t === d ? s : Math.round(h * e.heightRatio), i = Math.max(i, e.minHeight), e.setHeight(i), s -= i
                    }
                }
                handleWidgetResizeStart(t, e) {
                    let i, s;
                    for (let e = this.widgets.length - 1; e > 0; e--) this.widgets[e] === t && (i = this.widgets[e], s = this.widgets[e - 1]);
                    (0, n.assert)(void 0 !== i), (0, n.assert)(void 0 !== s);
                    const a = s.rdState().bridge().height.value(),
                        r = s.heightRatio + i.heightRatio,
                        o = a + i.rdState().bridge().height.value();
                    0 === o && e.preventDefault(), this._resizeOperations.set(t, {
                        bottomWidget: i,
                        topWidget: s,
                        summaryHeight: o,
                        summaryRatio: r,
                        startTopWidgetHeight: a,
                        prevTopWidgetHeight: void 0
                    })
                }
                handleWidgetResizeChange(t, e) {
                    var i;
                    const s = this._resizeOperations.get(t);
                    if (void 0 === s) return;
                    null === (i = this._page) || void 0 === i || i.classList.add("widget-resize-mode");
                    const {
                        current: n,
                        initial: a
                    } = e.detail, r = n.pageY - a.pageY, o = Math.max(s.topWidget.minHeight, Math.min(s.startTopWidgetHeight + r, s.summaryHeight - s.bottomWidget.minHeight));
                    s.prevTopWidgetHeight !== o && (s.prevTopWidgetHeight = o, s.topWidget.heightRatio = o / s.summaryHeight * s.summaryRatio, s.bottomWidget.heightRatio = s.summaryRatio - s.topWidget.heightRatio, s.topWidget.setHeight(o), s.bottomWidget.setHeight(s.summaryHeight - o))
                }
                handleWidgetResizeStop(t, e) {
                    var i;
                    const s = this._resizeOperations.get(t);
                    void 0 !== s && (this._resizeOperations.delete(t), null === (i = this._page) || void 0 === i || i.classList.remove("widget-resize-mode"), s.prevTopWidgetHeight !== s.startTopWidgetHeight && (this.normalizeRatios(), this.widgetBarLayout && this.widgetBarLayout.widgetBar && this.widgetBarLayout.widgetBar.saveToTVSettings()))
                }
                normalizeRatios() {
                    let t = 1 / 0;
                    for (let e = this.widgets.length; e--;) {
                        const i = this.widgets[e].heightRatio;
                        i <= 0 || !isFinite(i) || i < t && (t = i)
                    }
                    if (!isFinite(t)) return;
                    let e = 1;
                    for (; t < 1;) t *= 2, e *= 2;
                    for (; t >= 2;) t /= 2, e /= 2;
                    for (let t = this.widgets.length; t--;) this.widgets[t].heightRatio *= e
                }
                attachWidget(t, e) {
                    var i;
                    e = Number(e);
                    const s = this.widgets.indexOf(t); - 1 !== s ? this.widgets.splice(s, 1) : t.widgetBarPage && t.widgetBarPage !== this && t.widgetBarPage.removeWidget(t), e < this.widgets.length ? e < 0 && (e = 0) : e = this.widgets.length, delete t.widgetBarPage, Object.defineProperty(t, "widgetBarPage", {
                        value: this,
                        configurable: !0
                    }), this.widgets.splice(e, 0, t);
                    const n = this.widgets[e + 1],
                        a = t.element("widget");
                    n ? a && a.insertAdjacentElement("beforebegin", n.element("widget")) : a && (null === (i = this._page) || void 0 === i || i.appendChild(a)), this.updateWidgetsHeight(), t.updateVisibleWatchedValue()
                }
                removeWidget(t) {
                    var e;
                    const i = this.widgets.indexOf(t); - 1 !== i && (delete t.widgetBarPage, this.widgets.splice(i, 1),
                        null === (e = t.element("widget")) || void 0 === e || e.remove(), this.updateWidgetsHeight())
                }
                remove() {
                    this.widgetBarLayout && this.widgetBarLayout.removePage(this)
                }
                destroy() {
                    var t;
                    this.remove(), null === (t = this._page) || void 0 === t || t.remove()
                }
                onVisibilityChange(t) {
                    const e = t && this.widgetBarLayout && this.widgetBarLayout.getActivePage() === this;
                    this.widgets.forEach((t => {
                        const i = t.getWidgetBarOption("widgetConfig")[t.type];
                        e && !i.doNotClearNotificationsOnVisibilityChange && t.clearNotifications(), t.onVisibilityChange()
                    }))
                }
                notify(t, e = {}) {
                    !0 !== e.clear ? e.stopHighlightTab || (this.notificationCounter = this.notificationCounter + (~~t || 1), this.updateNotifications(e.notificationValue)) : this.clearNotifications()
                }
                clearNotifications() {
                    this.notificationCounter = 0, (0, n.ensure)(this.tab).updateNotifications(this.notificationCounter)
                }
                updateNotifications(t) {
                    const e = "number" == typeof t ? t : this.notificationCounter;
                    (0, n.ensure)(this.tab).updateNotifications(e)
                }
                getWidgets(t) {
                    const e = [];
                    for (let i = 0; i < this.widgets.length; ++i) {
                        const s = this.widgets[i];
                        s.type === t && e.push(s)
                    }
                    return e
                }
                isActiveAndVisible() {
                    const t = this.widgetBarLayout;
                    return !(!t || !t.visible) && t.getActivePage() === this
                }
                createHTML() {
                    const t = this._page = document.createElement("div");
                    t.classList.value = "widgetbar-page", this.$page = Z(t), this.widgets.forEach((e => {
                        e.createHTML();
                        const i = e.element("widget");
                        i && t.appendChild(i)
                    }))
                }
                createTabButtonViewModel() {
                    this.tab = new g({
                        icon: E[this.icon],
                        hint: this.title,
                        onClick: t => {
                            this.widgetBarLayout && this.widgetBarLayout.onTabClick(t, this)
                        },
                        TabButtonComponent: this.TabButtonComponent
                    })
                }
                demarshal(t) {
                    if ("string" == typeof t) try {
                        t = JSON.parse(t)
                    } catch (t) {}
                    if ("object" != typeof t || !t.widgets || !Array.isArray(t.widgets)) return null;
                    const e = this.widgets;
                    return e.splice(0, e.length), this._gaEvent = t._gaEvent, this.title = t.title, this.name = t.name, this.icon = t.icon, this.spaceBottom = t.spaceBottom, this.spaceBottomText = t.spaceBottomText, this.onBottom = t.onBottom, this.TabButtonComponent = t.TabButtonComponent, this.createTabButtonViewModel(), t.widgets.forEach((t => {
                        const i = new q({
                            widgetBarPage: this
                        }).demarshal(t);
                        i && e.push(i)
                    })), 0 === e.length ? null : this
                }
                marshal() {
                    const t = [];
                    return this.widgets.forEach((e => {
                        const i = e.marshal();
                        i && t.push(i)
                    })), 0 === t.length ? null : t
                }
                _recalculateWidgetsHeightRatio(t) {
                    const e = this.widgets;
                    e.length <= 1 || e.forEach(((i, s) => {
                        if (t * i.heightRatio >= i.minHeight) return;
                        let n = i.minHeight / t - i.heightRatio;
                        for (let i = 0; i < e.length; i++) {
                            if (i === s) continue;
                            const a = e[i],
                                r = a.heightRatio - a.minHeight / t;
                            if (!(r <= 0) && (a.heightRatio -= Math.min(n, r), e[s].heightRatio += Math.min(n, r), n -= r, n <= 0)) break
                        }
                    }))
                }
            }
            var K = i(358683),
                Y = i(23541),
                J = i(73927);
            var Q = i(719036),
                tt = i(778785),
                et = i(83436),
                it = i(774610),
                st = i(315130);

            function nt(t) {
                const e = P(t.className, it.button, t.isGrayed && it.isGrayed);
                return o.createElement("div", {
                    className: e,
                    onClick: t.onClick,
                    "data-role": "button",
                    "data-name": t.name
                }, o.createElement(et.Icon, {
                    className: it.icon,
                    icon: st
                }))
            }
            var at = i(812238),
                rt = i(369456),
                ot = i(440977),
                lt = i(740976),
                ht = i(443768);
            const dt = (0, a.t)("DOM"),
                ct = (0, lt.registryContextType)();
            class gt extends o.PureComponent {
                constructor(t, e) {
                    super(t, e),
                        this._handleClick = () => {
                            (0, K.trackButtonClick)("right panel", "dom");
                            const {
                                setDomPanelVisibility: t
                            } = (0, n.ensure)(this.context.widgetBar.tradingPanelAccessor);
                            t(!this.state.isActive)
                        }, this._handleIsOpenedChange = () => {
                            this.setState({
                                isActive: this._tradingPanel.isPageOpened(ot.TradingPage.DomPanel)
                            })
                        }, this._handleActivePageChange = t => {
                            this._tradingPanel.isOpened.value() && this.setState({
                                isActive: t === ot.TradingPage.DomPanel
                            })
                        }, (0, lt.validateRegistry)(e, {
                            widgetBar: Q.any.isRequired
                        }), this._tradingPanel = (0, n.ensure)(this.context.widgetBar.tradingPanelAccessor).tradingPanel, this.state = {
                            isActive: this._tradingPanel.isPageOpened(ot.TradingPage.DomPanel)
                        }
                }
                componentDidMount() {
                    this._tradingPanel.isOpened.subscribe(this._handleIsOpenedChange), this._tradingPanel.activePage.subscribe(this._handleActivePageChange)
                }
                componentWillUnmount() {
                    this._tradingPanel.isOpened.unsubscribe(this._handleIsOpenedChange), this._tradingPanel.activePage.unsubscribe(this._handleActivePageChange)
                }
                render() {
                    return o.createElement(rt.TabButton, { ...this.props,
                        icon: ht,
                        hint: dt,
                        isActive: this.state.isActive,
                        onClick: this._handleClick
                    })
                }
            }
            gt.contextType = ct;
            var ut = i(197944);
            const mt = (0, a.t)("Order Panel"),
                pt = (0, lt.registryContextType)();
            class vt extends o.PureComponent {
                constructor(t, e) {
                    super(t, e), this._handleClick = () => {
                        (0, K.trackButtonClick)("right panel", "order panel");
                        const {
                            setOrderPanelVisibility: t
                        } = (0, n.ensure)(this.context.widgetBar.tradingPanelAccessor), e = !this.state.isActive;
                        t(e), e && (0, V.trackEvent)("GUI", "Open Order Panel")
                    }, this._handleIsOpenedChange = () => {
                        this.setState({
                            isActive: this._tradingPanel.isPageOpened(ot.TradingPage.OrderPanel)
                        })
                    }, this._handleActivePageChange = t => {
                        this._tradingPanel.isOpened.value() && this.setState({
                            isActive: t === ot.TradingPage.OrderPanel
                        })
                    }, (0, lt.validateRegistry)(e, {
                        widgetBar: Q.any.isRequired
                    }), this._tradingPanel = (0, n.ensure)(this.context.widgetBar.tradingPanelAccessor).tradingPanel, this.state = {
                        isActive: this._tradingPanel.isPageOpened(ot.TradingPage.OrderPanel)
                    }
                }
                componentDidMount() {
                    this._tradingPanel.isOpened.subscribe(this._handleIsOpenedChange), this._tradingPanel.activePage.subscribe(this._handleActivePageChange)
                }
                componentWillUnmount() {
                    this._tradingPanel.isOpened.unsubscribe(this._handleIsOpenedChange), this._tradingPanel.activePage.unsubscribe(this._handleActivePageChange)
                }
                render() {
                    return o.createElement(rt.TabButton, { ...this.props,
                        icon: ut,
                        hint: mt,
                        isActive: this.state.isActive,
                        onClick: this._handleClick
                    })
                }
            }
            vt.contextType = pt;
            var wt = i(66243);

            function _t(t) {
                return o.createElement("div", {
                    className: P(t.className, wt.separator)
                })
            }
            var ft = i(979539);

            function bt(t) {
                return o.createElement("div", {
                    className: P(ft.filler, t.className)
                })
            }

            function yt(t, e) {
                return class extends o.PureComponent {
                    constructor(t) {
                        super(t), this._bindedForceUpdate = () => this.forceUpdate(), this.state = {
                            viewModel: e
                        }
                    }
                    componentDidMount() {
                        const {
                            viewModel: t
                        } = this.state;
                        t.notificationsCount.subscribe(this._bindedForceUpdate), t.isActive.subscribe(this._bindedForceUpdate)
                    }
                    componentWillUnmount() {
                        const {
                            viewModel: t
                        } = this.state;
                        t.notificationsCount.unsubscribe(this._bindedForceUpdate),
                            t.isActive.unsubscribe(this._bindedForceUpdate)
                    }
                    render() {
                        const {
                            viewModel: e
                        } = this.state, i = e.notificationsCount.value();
                        return o.createElement(t, { ...this.props,
                            icon: e.icon.value(),
                            isActive: e.isActive.value(),
                            onClick: e.onClick.value(),
                            hint: e.hint.value(),
                            count: i
                        })
                    }
                }
            }
            var Ct = i(860502),
                Bt = i(911905),
                Tt = i(962624),
                xt = i(961015);
            const St = (0, Bt.getLogger)("Platform.GUI.RightToolbar"),
                Mt = (0, lt.registryContextType)();
            class Lt extends o.PureComponent {
                constructor(t, e) {
                    super(t, e), this._pages = {}, this._isTradingPanelVisible = null, this._tradingActivePage = null, this._isTradingPanelOpened = null, this._handleMouseOver = t => {
                        (0, Tt.hoverMouseEventFilter)(t) && this.setState({
                            isHovered: !0
                        })
                    }, this._handleMouseOut = t => {
                        (0, Tt.hoverMouseEventFilter)(t) && this.setState({
                            isHovered: !1
                        })
                    }, this._handleFullscreenChange = t => {
                        this.setState({
                            isFullscreen: t
                        })
                    }, this._handleCloseClick = () => {
                        const {
                            widgetBar: t
                        } = this.context;
                        (0, n.ensureDefined)(t.layout).setMinimizedState(!0)
                    }, this._handleGrayedChange = () => {
                        this.setState({
                            isGrayed: this._isGrayed()
                        })
                    }, this._handleDomButtonVisibilityChange = t => {
                        this.setState({
                            isTradingButtonsVisible: t
                        })
                    }, this._isGrayed = () => {
                        let t = this._isMinimized.value();
                        return null !== this._isTradingPanelOpened && (t = t && !this._isTradingPanelOpened.value()), !t
                    }, (0, lt.validateRegistry)(e, {
                        widgetBar: Q.any.isRequired
                    });
                    const {
                        widgetBar: i
                    } = this.context;
                    if (this._isMinimized = (0, n.ensureDefined)(i.layout).isMinimized.spawn(), this._isFullscreen = i.resizerBridge.fullscreen.spawn(), i.tradingPanelAccessor) {
                        const t = i.tradingPanelAccessor.tradingPanel;
                        this._isTradingPanelVisible = t.isVisible.spawn(), this._tradingActivePage = t.activePage.spawn(), this._isTradingPanelOpened = t.isOpened.spawn()
                    }
                    this.state = {
                        isHovered: !1,
                        isGrayed: this._isGrayed(),
                        isFullscreen: this._isFullscreen.value(),
                        isTradingButtonsVisible: !1
                    }, null !== this._isTradingPanelVisible && (this.state = { ...this.state,
                        isTradingButtonsVisible: this._isTradingPanelVisible.value()
                    }), (0, n.ensureDefined)(i.layout).pages.forEach((t => {
                        var e;
                        void 0 === t.name && St.logWarn('Page does not provide required field "name"');
                        const i = t.tab;
                        this._pages[t.name] = yt(null !== (e = i.TabButtonComponent) && void 0 !== e ? e : rt.TabButton, i)
                    })), this._toolset = this._createToolset()
                }
                componentDidMount() {
                    this._isFullscreen.subscribe(this._handleFullscreenChange), this._isMinimized.subscribe(this._handleGrayedChange), null !== this._isTradingPanelVisible && this._isTradingPanelVisible.subscribe(this._handleDomButtonVisibilityChange), null !== this._isTradingPanelOpened && this._isTradingPanelOpened.subscribe(this._handleGrayedChange)
                }
                componentWillUnmount() {
                    this._isFullscreen.destroy(), this._isMinimized.destroy(), null !== this._isTradingPanelVisible && this._isTradingPanelVisible.destroy(), null !== this._tradingActivePage && this._tradingActivePage.destroy(), null !== this._isTradingPanelOpened && this._isTradingPanelOpened.destroy()
                }
                render() {
                    const {
                        className: t,
                        isDomButtonAvailable: e,
                        isOrderPanelButtonAvailable: i
                    } = this.props, {
                        isHovered: s,
                        isGrayed: n,
                        isFullscreen: a,
                        isTradingButtonsVisible: r
                    } = this.state, {
                        widgetBar: l
                    } = this.context, h = this._toolset, d = i && r, c = e && r;
                    return o.createElement(at.VerticalScroll, {
                        isVisibleFade: tt.mobiletouch,
                        isVisibleButtons: !tt.mobiletouch && s,
                        isVisibleScrollbar: !1,
                        onMouseOver: this._handleMouseOver,
                        onMouseOut: this._handleMouseOut
                    }, o.createElement("div", {
                        className: P(t, xt.toolbar, n && xt.isGrayed),
                        "data-name": "right-toolbar",
                        onContextMenu: Ct.preventDefault
                    }, l.adaptive && a && o.createElement(nt, {
                        name: "close-button",
                        onClick: this._handleCloseClick
                    }), this._renderPages(), (d || c) && o.createElement(_t, null), d && o.createElement(vt, {
                        name: "order-panel-button",
                        isGrayed: n
                    }), c && o.createElement(gt, {
                        name: "dom-button",
                        isGrayed: n
                    }), o.createElement(bt, null), this._renderPages(!0), h.SupportTicketButton && o.createElement(h.SupportTicketButton, {
                        name: "bug-report-button",
                        isGrayed: n,
                        isTab: !1
                    }), h.HelpButton && o.createElement(h.HelpButton, {
                        name: "help-button",
                        isGrayed: n,
                        isTab: !1
                    })))
                }
                _renderPages(t) {
                    const e = [],
                        {
                            isGrayed: i
                        } = this.state,
                        {
                            widgetBar: s
                        } = this.context,
                        {
                            pages: a
                        } = (0, n.ensureDefined)(s.layout);
                    return a.forEach((s => {
                        const n = s.name;
                        if (n in this._pages && Boolean(s.onBottom) === Boolean(t)) {
                            const t = this._pages[n];
                            e.push(o.createElement(t, {
                                name: n,
                                isGrayed: i,
                                key: n
                            })), s.spaceBottom && e.push(o.createElement(_t, {
                                key: s.spaceBottomText
                            }))
                        }
                    })), e
                }
                _createToolset() {
                    const {
                        widgetBar: t
                    } = this.context;
                    return {
                        SupportTicketButton: this.props.isSupportTicketButtonAvailable ? yt(rt.TabButton, t.ensureSupportTicketButtonViewModel()) : void 0,
                        HelpButton: this.props.isHelpButtonAvailable ? yt(rt.TabButton, t.ensureHelpButtonViewModel()) : void 0
                    }
                }
            }
            Lt.contextType = Mt;
            const zt = {
                widgetBar: Q.any
            };
            class Wt extends o.PureComponent {
                constructor(t) {
                    super(t), this._registry = {
                        widgetBar: this.props.widgetBar
                    }
                }
                render() {
                    return o.createElement(lt.RegistryProvider, {
                        validation: zt,
                        value: this._registry
                    }, this.props.children)
                }
            }
            class Et {
                constructor(t, e, i) {
                    this._widgetBar = t, this._container = e, this._options = i, this._render()
                }
                updateOptions(t) {
                    this._options = t, this._render()
                }
                destroy() {
                    l.unmountComponentAtNode(this._container)
                }
                _render() {
                    l.render(o.createElement(Wt, {
                        widgetBar: this._widgetBar
                    }, o.createElement(Lt, {
                        isDomButtonAvailable: this._options.isDomButtonAvailable,
                        isOrderPanelButtonAvailable: this._options.isOrderPanelButtonAvailable,
                        isHelpButtonAvailable: this._options.isHelpButtonAvailable,
                        isSupportTicketButtonAvailable: this._options.isSupportTicketButtonAvailable
                    })), this._container)
                }
            }
            var Pt = i(186012);
            const kt = "http://www.w3.org/2000/svg";

            function At(t) {
                const {
                    direction: e,
                    theme: i = Pt
                } = t;
                return o.createElement("svg", {
                    xmlns: kt,
                    width: "9",
                    height: "27",
                    viewBox: "0 0 9 27",
                    className: P(i.container, "right" === e ? i.mirror : null),
                    onContextMenu: Ct.preventDefault
                }, o.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, o.createElement("path", {
                    className: i.background,
                    d: "M4.5.5a4 4 0 0 1 4 4v18a4 4 0 1 1-8 0v-18a4 4 0 0 1 4-4z"
                }), o.createElement("path", {
                    className: i.arrow,
                    d: "M5.5 10l-2 3.5 2 3.5"
                })))
            }
            const Nt = (0, a.t)("Hide Tab"),
                Ht = (0, a.t)("Open Tab");

            function It(t) {
                const e = P(t.className, "apply-common-tooltip", "common-tooltip-vertical", "common-tooltip-otl");
                return o.createElement("div", {
                    className: e,
                    onClick: t.onClick,
                    title: t.isMinimized ? Ht : Nt
                }, o.createElement(At, {
                    direction: t.isMinimized ? "left" : "right"
                }))
            }
            var Dt = i(611688),
                Vt = i(823127);
            class Ot {
                constructor(t = {}) {
                    this.MIN_WIDTH = 200, this.MINIMIZE_THRESHOLD = 50, this.activeIndex = Ot.activeIndex, this.activeName = Ot.activeName, this.minimized = Ot.minimized, this.visible = Ot.visible, this.width = Ot.width, this.version = Ot.version, this.pages = [], this.isMinimized = new(d()), this.activePageIndex = new(d())(this.activeIndex), this.tabRenderer = null, this._tabs = null, this._pages = null, this._pagescontent = null, this._handle = null, this._deviceButton = null, this._hider = null, this._draggable = null, this._rightToolbarOptions = {
                        isDomButtonAvailable: Dt.enabled("dome_widget") || Dt.enabled("dom_widget"),
                        isOrderPanelButtonAvailable: Dt.enabled("order_panel"),
                        isSupportTicketButtonAvailable: Dt.enabled("bugreport_button"),
                        isHelpButtonAvailable: !Dt.enabled("widget") && !Dt.enabled("charting_library_base")
                    }, this.widgetBar = t.widgetBar, this._rightToolbar = Boolean(t.rightToolbar)
                }
                element(t) {
                    switch (t) {
                        case "tabs":
                            return this._tabs;
                        case "pages":
                            return this._pages;
                        case "pages-content":
                            return this._pagescontent;
                        case "handle":
                            return this._handle;
                        case "device-button":
                            return this._deviceButton;
                        case "hider":
                            return this._hider;
                        default:
                            return null
                    }
                }
                widget(t) {
                    for (const e of this.pages) {
                        const i = e.widget(t);
                        if (i) return i
                    }
                    return null
                }
                startWidgets() {
                    this.pages.forEach((t => {
                        t.widgets.forEach((t => {
                            t.widgetObject || t.widgetStartDelayed || setTimeout((() => {
                                t.startWidget()
                            }), 0)
                        }))
                    }));
                    const t = this.getActivePage();
                    t && t.onActiveStateChange(!0)
                }
                syncHeight() {
                    const t = (0, n.ensureDefined)(this.widgetBar).resizerBridge.height.value();
                    if (null !== this._pages && (this._pages.style.height = t + "px"), !this.minimized) {
                        const t = this.getActivePage();
                        t && t.updateWidgetsHeight()
                    }
                }
                tabsWidth() {
                    return this._rightToolbar ? 46 : this.minimized ? 5 : 0
                }
                borderWidth() {
                    return 1
                }
                canOpen() {
                    return this.MIN_WIDTH + this.tabsWidth() + this.borderWidth() <= (0, n.ensureDefined)(this.widgetBar).resizerBridge.availWidth.value()
                }
                requestWidth(t) {
                    const e = (0, n.ensureDefined)(this.widgetBar).resizerBridge;
                    t > 0 && (t += this.borderWidth());
                    const i = this.tabsWidth(),
                        s = t + i;
                    this.canOpen() ? e.width.value() !== s && e.negotiateWidth([{
                        min: i,
                        max: i
                    }, {
                        min: this.MIN_WIDTH + i,
                        max: s
                    }]) : e.negotiateWidth(0)
                }
                requestOptimalWidth() {
                    this.minimized ? this.requestWidth(0) : this.requestWidth(this.width)
                }
                updateResponsiveness() {
                    var t, e;
                    const i = !this.canOpen();
                    null === (t = this._tabs) || void 0 === t || t.classList.toggle("js-hidden", i), null === (e = this._pages) || void 0 === e || e.classList.toggle("js-hidden", i)
                }
                syncWidth() {
                    const t = (0, n.ensureDefined)(this.widgetBar).resizerBridge,
                        e = this.tabsWidth(),
                        i = this.borderWidth(),
                        s = t.width.value(),
                        a = Math.max(s - e - i, 0) || 0;
                    a < this.MINIMIZE_THRESHOLD ? this.setMinimizedState(!0) : this.setMinimizedState(!1);
                    const r = this._pages;
                    if (r && (r.style.width = a + "px", r.classList.toggle("hidden", !!this.minimized)), !this.minimized) {
                        const t = this.getActivePage();
                        t && t.widgets.forEach((t => {
                            t.onWidthChange(a)
                        })), this.widgetBar && this.widgetBar.loadWidgets()
                    }
                    const o = !this.canOpen();
                    this._deviceButton && this._deviceButton.classList.toggle("js-hidden", !o || !this.minimized)
                }
                setMinimizedState(t) {
                    const e = Boolean(t);
                    !!this.minimized !== e && (this.minimized = e,
                        this.isMinimized.setValue(this.minimized), e && (0, n.ensureDefined)(this.widgetBar).resizerBridge.exitFullscreen(), this.requestOptimalWidth(), this.activeIndex >= 0 && this.pages[this.activeIndex].onActiveStateChange(!this.minimized))
                }
                switchPage(t) {
                    if (-1 === t || 0 === this.pages.length) return this.activeIndex = -1, void this.activePageIndex.setValue(this.activeIndex);
                    let e;
                    if (t instanceof X) {
                        if (e = this.pages.indexOf(t), -1 === e) return
                    } else e = +t;
                    const i = this.pages[this.activeIndex];
                    this.activeIndex = Math.min(this.pages.length - 1, Math.max(0, e)), this.activePageIndex.setValue(this.activeIndex);
                    const s = this.pages[this.activeIndex];
                    this.activeName = s.name || "", this.minimized || i && i === s || (i && i.onActiveStateChange(!1), s && (s.onActiveStateChange(!0), this.syncWidth()))
                }
                getActivePage() {
                    return this.minimized ? null : this.pages[this.activeIndex] || null
                }
                getWidgetByType(t) {
                    var e;
                    const i = null === (e = this.getActivePage()) || void 0 === e ? void 0 : e.widgets;
                    if (i) return i.find((e => e.type === t))
                }
                onTabClick(t, e) {
                    if (t.isDefaultPrevented()) return;
                    const i = this.pages.indexOf(e);
                    if (-1 !== i) {
                        if (t.preventDefault(), this._trackClick(e.name), i !== this.activeIndex || this.minimized) {
                            const t = e.gaEvent();
                            t && (0, V.trackEvent)("Platform Widgets", t), this.switchPage(i), this.minimized && this.setMinimizedState(!1)
                        } else this.setMinimizedState(!0);
                        this.widgetBar && this.widgetBar.saveToTVSettings()
                    }
                }
                removePage(t) {
                    const e = this.pages.indexOf(t);
                    if (-1 === e) return;
                    delete t.widgetBarLayout, this.pages.splice(e, 1);
                    const i = t.element();
                    null == i || i.remove(), this.activeIndex === e && this.switchPage(e - 1)
                }
                createPage() {
                    var t;
                    const e = new X({
                        widgetBarLayout: this
                    });
                    this.pages.push(e), e.createHTML();
                    const i = (0, n.ensureNotNull)(e.element());
                    return null === (t = this._pagescontent) || void 0 === t || t.append(i), e
                }
                createWidget(t, e) {
                    if (e) {
                        if (-1 === this.pages.indexOf(e)) return null
                    } else e = this.createPage();
                    const i = new q({
                        widgetBarPage: e
                    });
                    return i.demarshal({
                        type: t
                    }), i.createHTML(), e.attachWidget(i), i
                }
                onVisibilityChange() {
                    const t = !(!this.widgetBar || !this.widgetBar.resizerBridge.visible.value());
                    this.visible = t, this.pages.forEach((e => {
                        e.onVisibilityChange(t)
                    }))
                }
                destroy() {
                    var t, e, i, s, n, a;
                    this.widgetBar && this.widgetBar.layout === this && delete this.widgetBar.layout, this.tabRenderer && (this.tabRenderer.destroy(), this.tabRenderer = null), this._hider && l.unmountComponentAtNode(this._hider);
                    for (let t = this.pages.length; t--;) {
                        const e = this.pages[t];
                        for (let t = e.widgets.length; t--;) e.widgets[t].destroy()
                    }
                    null === (t = this._tabs) || void 0 === t || t.remove(), null === (e = this._pages) || void 0 === e || e.remove(), null === (i = this._pagescontent) || void 0 === i || i.remove(), null === (s = this._handle) || void 0 === s || s.remove(), null === (n = this._deviceButton) || void 0 === n || n.remove(), null === (a = this._hider) || void 0 === a || a.remove()
                }
                updateRightToolbar() {
                    var t;
                    null === (t = this.tabRenderer) || void 0 === t || t.updateOptions(this._rightToolbarOptions)
                }
                createHTML() {
                    const t = (0, n.ensureDefined)(this.widgetBar);
                    if (this._rightToolbar) {
                        const e = this._tabs = document.createElement("div");
                        if (e.classList.value = "widgetbar-tabs", this.$tabs = Vt(e), this.tabRenderer && (this.tabRenderer.destroy(), this.tabRenderer = null),
                            this.tabRenderer = new Et(t, e, this._rightToolbarOptions), t.adaptive) {
                            const e = this._deviceButton = (0, D.parseHtmlElement)(`\n\t\t<div class="${Y.widgetbarButton} js-hidden">\n\t\t\t${J}\n\t\t</div>\n\t`);
                            e.addEventListener("click", (() => {
                                t.resizerBridge.requestFullscreen(), (0, V.trackEvent)("Mobile", "Open right toolbar")
                            })), this.$deviceButton = Vt(e)
                        }
                    }
                    const e = this._pages = document.createElement("div");
                    e.classList.value = "widgetbar-pages";
                    const i = this._pagescontent = document.createElement("div");
                    i.classList.value = "widgetbar-pagescontent", e.appendChild(i), this._rightToolbar || (this._pages.style.right = "-1px");
                    const s = this._handle = document.createElement("div");
                    if (s.classList.value = "widgetbar-handle", e.appendChild(s), s.addEventListener("contextmenu", (t => {
                            t.target === s && t.preventDefault()
                        })), this._createDraggable(s), this.$pages = Vt(e), this.$pagescontent = Vt(i), this.$handle = Vt(s), t.showCloseButton) {
                        const t = this._hider = document.createElement("div");
                        t.classList.value = "widgetbar-hider", this.$hider = Vt(t);
                        const e = () => {
                            t.classList.toggle("widgetbar-hider--closed", this.isMinimized.value()), t.classList.toggle("js-hidden", this._rightToolbar && this.isMinimized.value()), l.render(o.createElement(It, {
                                isMinimized: this.isMinimized.value(),
                                onClick: () => {
                                    this.setMinimizedState(!this.minimized)
                                }
                            }), t)
                        };
                        this.isMinimized.subscribe(e), e()
                    }
                    this.pages.forEach((t => {
                        t.createHTML();
                        const e = t.element();
                        e && i.appendChild(e)
                    }))
                }
                demarshal(t) {
                    if ("string" == typeof t) try {
                        t = JSON.parse(t)
                    } catch (t) {}
                    if ("object" != typeof t) return null;
                    this.width = Number(t.width), !isFinite(this.width) || this.width <= 0 ? this.width = Ot.width : this.width < this.MIN_WIDTH && (this.width = this.MIN_WIDTH), "minimized" in t ? (this.minimized = Boolean(t.minimized), this.isMinimized.setValue(this.minimized)) : (this.minimized = Ot.minimized, this.isMinimized.setValue(this.minimized)), "version" in t && (this.version = t.version);
                    let e = Number(t.activeIndex);
                    const i = t.activeName;
                    let s = !1;
                    const n = this.pages;
                    return n.splice(0, this.pages.length), Array.isArray(t.pages) && t.pages.forEach(((t, a) => {
                        const r = new X({
                            widgetBarLayout: this
                        }).demarshal(t);
                        i ? t.name === i && r && (e = a, s = !0) : r || a !== e || e--, r && n.push(r)
                    })), i && !s && (e = 0), 0 === n.length ? (this.activeIndex = -1, this.activePageIndex.setValue(this.activeIndex)) : e >= 0 && e < n.length && (this.activeIndex = e, this.activePageIndex.setValue(this.activeIndex)), this
                }
                marshal() {
                    let t = [];
                    this.pages.forEach((e => {
                        const i = e.marshal();
                        i && (t = t.concat(i))
                    }));
                    const e = {};
                    for (let i = 0; i < t.length; i++) {
                        const s = t[i].type;
                        s && (t[i].id && delete t[i].type, e[s] ? e[s].push(t[i]) : e[s] = [t[i]])
                    }
                    const i = {
                        widgets: e,
                        settings: {}
                    };
                    return this.minimized !== Ot.minimized && (i.settings.minimized = this.minimized), this.width !== Ot.width && (i.settings.width = this.width), this.activeIndex !== Ot.activeIndex && (i.settings.activeIndex = this.activeIndex), this.activeName !== Ot.activeName && (i.settings.activeName = this.activeName), this.version !== Ot.version && (i.settings.version = this.version), i
                }
                _createDraggable(t) {
                    null !== this._draggable && this._draggable.destroy();
                    const e = {
                        initialWidth: 0
                    };
                    this._draggable = new j.PointerBackend({
                        handle: t,
                        onDragStart: t => {
                            this.widgetBar ? e.initialWidth = Math.max(this.widgetBar.resizerBridge.width.value() - this.tabsWidth() - this.borderWidth(), 0) : t.preventDefault()
                        },
                        onDragMove: t => {
                            const {
                                current: i,
                                initial: s
                            } = t.detail, n = i.pageX - s.pageX;
                            let a = e.initialWidth - n;
                            a < this.MINIMIZE_THRESHOLD ? a = 0 : a < this.MIN_WIDTH && (a = this.MIN_WIDTH), a > 0 && (this.width = a), this.requestWidth(a)
                        },
                        onDragStop: t => {
                            this.widgetBar && this.widgetBar.saveToTVSettings()
                        }
                    })
                }
                _trackClick(t) {
                    switch (t) {
                        case "base":
                            (0, K.trackButtonClick)("right panel", "watchlist");
                            break;
                        case "alerts":
                            (0, K.trackButtonClick)("right panel", "alerts");
                            break;
                        case "news":
                            (0, K.trackButtonClick)("right panel", "news");
                            break;
                        case "object_tree":
                            (0, K.trackButtonClick)("right panel", "object tree");
                            break;
                        case "data-window":
                            (0, K.trackButtonClick)("right panel", "data window");
                            break;
                        case "hotlist":
                            (0, K.trackButtonClick)("right panel", "hotlist");
                            break;
                        case "calendar":
                            (0, K.trackButtonClick)("right panel", "calendar");
                            break;
                        case "notes":
                            (0, K.trackButtonClick)("right panel", "my ideas");
                            break;
                        case "chats":
                            (0, K.trackButtonClick)("right panel", "public chats");
                            break;
                        case "pm_chats":
                            (0, K.trackButtonClick)("right panel", "private chats");
                            break;
                        case "ideas_stream":
                            (0, K.trackButtonClick)("right panel", "ideas stream");
                            break;
                        case "streams":
                            (0, K.trackButtonClick)("right panel", "streams");
                            break;
                        case "notifications":
                            (0, K.trackButtonClick)("right panel", "notifications")
                    }
                }
            }
            Ot.width = 290, Ot.minimized = !Dt.enabled("show_right_widgets_panel_by_default"), Ot.activeIndex = 0, Ot.activeName = "", Ot.visible = !0, Ot.version = void 0;
            var Rt = i(223124),
                Ft = i(110933),
                Ut = i(125226),
                Gt = i(588948),
                jt = i(321475),
                $t = i(474474),
                qt = i(761068),
                Zt = i(731503),
                Xt = i(178911),
                Kt = i(823127);
            const Yt = Dt.enabled("right_toolbar"),
                Jt = (Dt.enabled("keep_object_tree_widget_in_right_toolbar"), Dt.enabled("show_object_tree"));
            class Qt {
                constructor(t) {
                    this._wrap = null, this._tradingServiceCancelable = null, this.options = t, this._load = () => {};
                    const e = new Promise((t => {
                            this._load = t
                        })),
                        i = this.options.configuration;
                    this._configuration = Promise.race([(0, qt.delay)(null, 5e3), e]).then((() => i())).then((t => {
                        const e = this.widgetConfig;
                        return e.reuters_calendar.ctor = t.ReutersCalendarWidget, e.earnings_calendar.ctor = t.CalendarWidget, e.watchlist.ctor = t.Watchlist, e.hotlist.ctor = t.HotlistWidget, e.detail.ctor = t.Detail && t.Detail.Widget, e.news.ctor = t.NewsWidget, e.chat.ctor = t.ChatWidget, e.messages.ctor = t.Messages && t.Messages.Widget, e.messages_with_select.ctor = t.Messages && t.Messages.Widget, e.notifications_following.ctor = t.NotificationsWidgets, e.notifications_user.ctor = t.NotificationsWidgets, e.publicchats.ctor = t.PublicChatsWidget, e.publicchats_with_select.ctor = t.PublicChatsWidget, e.notes.ctor = t.NotesWidget, e.alerts_manage.ctor = t.AlertsManageWidget, e.alerts_log.ctor = t.AlertsLogWidget, e.streams.ctor = t.StreamsWidget, e.minds.ctor = t.MindsWidget, e.datawindow.ctor = t.DataWindowWidget, (0, n.ensure)(e.object_tree).ctor = t.ObjectTreeWidget, t
                    }));
                    const a = this.resizerBridge = t.resizerBridge;
                    this.adaptive = Boolean(t.adaptive), this.tradingPanelAccessor = t.tradingPanelAccessor || null, this._visible = (0, r.combine)(((t, e, i) => Boolean(t && e && i)), a.width, a.height, a.visible),
                        this.widgetConfig = (0, s.default)({}, W), t.widgetConfig && (this.widgetConfig = (0, s.default)(this.widgetConfig, t.widgetConfig)), this.layout = new Ot({
                            widgetBar: this,
                            rightToolbar: Yt
                        }), this._customization = t.customization || {}, t.chartWidgetCollection && (this.chartWidgetCollection = t.chartWidgetCollection), t.state ? this.layout.demarshal(t.state) : t.settingsPrefix && (this._settingsPrefix = String(t.settingsPrefix), this.loadFromTVSettings()), t.readonly && (this.readonly = !0), t.fixedMode && (this.fixedMode = !0), t.showCloseButton && (this.showCloseButton = !0), this._container = this.resizerBridge.container.value(), this.createHTML(), this.initLayout(), window.loginStateChange.subscribe(this, this.onLoginStateChange), this.resizerBridge.width.subscribe((() => {
                            var t;
                            null === (t = this.layout) || void 0 === t || t.syncWidth()
                        })), this.resizerBridge.height.subscribe((() => {
                            var t;
                            null === (t = this.layout) || void 0 === t || t.syncHeight()
                        })), this.resizerBridge.visible.subscribe((() => {
                            var t;
                            null === (t = this.layout) || void 0 === t || t.onVisibilityChange()
                        })), this.resizerBridge.availWidth.subscribe((() => {
                            var t, e;
                            null === (t = this.layout) || void 0 === t || t.requestOptimalWidth(), null === (e = this.layout) || void 0 === e || e.updateResponsiveness()
                        })), this._tradingServiceCancelable = (0, Rt.makeCancelable)((0, Ft.waitTradingService)()), this._tradingServiceCancelable.promise.then((t => {
                            this._tradingServiceCancelable = null, t.onConnectionStatusChange.subscribe(this, this._onBrokerConnectionStatusChanged)
                        }))
                }
                destroy() {
                    var t;
                    if (null !== this._tradingServiceCancelable) this._tradingServiceCancelable.cancel(), this._tradingServiceCancelable = null;
                    else {
                        (0, n.ensureNotNull)((0, Ft.tradingService)()).onConnectionStatusChange.unsubscribe(this, this._onBrokerConnectionStatusChanged)
                    }
                    null === (t = this.layout) || void 0 === t || t.destroy()
                }
                widget(t) {
                    return this.layout ? this.layout.widget(t) : null
                }
                isVisible() {
                    const t = this.resizerBridge;
                    return Boolean(t.visible.value() && t.height.value() && t.width.value())
                }
                visible() {
                    return this._visible
                }
                initLayout() {
                    var t;
                    this.options.instantLoad && this._load(), this.layout && (this._configuration.then((() => {
                        var t;
                        null === (t = this.layout) || void 0 === t || t.startWidgets()
                    })), 0 === this.layout.pages.length && (this.layout.setMinimizedState(!0), null === (t = this.layout.element("handle")) || void 0 === t || t.classList.add("js-hidden")), this.layout.requestOptimalWidth(), this.layout.syncWidth(), this.layout.syncHeight(), this.layout.onVisibilityChange(), this.layout.updateResponsiveness())
                }
                loadWidgets() {
                    this._widgetsLoadRequested || (this._widgetsLoadRequested = !0, this._load())
                }
                onLoginStateChange(t) {
                    t || window.is_authenticated && (this.dropWidgetData(), this.refreshFromTVSettings())
                }
                dropWidgetData() {
                    for (const t in this.widgetConfig) delete(0, n.ensure)(this.widgetConfig[t]).data
                }
                refreshFromTVSettings() {
                    var t, e, i;
                    if (!this._settingsPrefix) return;
                    this.layout && this.layout.destroy(), this.layout = new Ot({
                        widgetBar: this,
                        rightToolbar: Yt
                    }), this.loadFromTVSettings(), this.layout.createHTML();
                    const s = this.layout.element("pages");
                    s && (null === (t = this._wrap) || void 0 === t || t.appendChild(s));
                    const n = this.layout.element("tabs");
                    n && (null === (e = this._wrap) || void 0 === e || e.appendChild(n));
                    const a = this.layout.element("hider");
                    a && (null === (i = this._wrap) || void 0 === i || i.appendChild(a)), this.initLayout()
                }
                getWidgets(t) {
                    let e = [];
                    if (!this.layout) return e;
                    for (let i = 0; i < this.layout.pages.length; ++i) e = e.concat(this.layout.pages[i].getWidgets(t));
                    return e
                }
                loadFromTVSettings() {
                    if (!this._settingsPrefix) return;
                    if (!this.layout) return;
                    let t = this.getLayoutState();
                    t = this.mergeProperties(t), this.layout.demarshal(t), this.saveToTVSettings();
                    const e = this._getSerializedStateFromSetting();
                    if (e) {
                        let t = [];
                        for (const i in e.widgets) {
                            const s = e.widgets[i];
                            t = t.concat(s.map((t => t.id)))
                        }
                        const i = O.keysMask(this._settingsPrefix + ".widget.*.*");
                        i && i.forEach((e => {
                            const i = e.replace(this._settingsPrefix + ".widget.", ""); - 1 === t.indexOf(i) && 0 === e.indexOf(this._settingsPrefix + ".widget.") && ((0, V.trackEvent)("Settings debug", "loadFromTVSettings: " + e, window.user.username), O.remove(e))
                        }))
                    }
                }
                mergeProperties(t) {
                    const e = this._getSerializedStateFromSetting();
                    if (!e) return t;
                    e.settings && Object.assign(t, e.settings);
                    const i = {};
                    for (let s = 0; s < t.pages.length; s++)
                        for (let n = 0; n < t.pages[s].widgets.length; n++) {
                            const a = t.pages[s].widgets[n],
                                r = i[a.type] || 0;
                            e.widgets[a.type] && e.widgets[a.type][r] && Object.assign(a, e.widgets[a.type][r]), i[a.type] = r + 1
                        }
                    return t
                }
                saveToTVSettings() {
                    if (!this._settingsPrefix) return;
                    if (!this.layout) return;
                    const t = this.layout.marshal();
                    this._setSerializedStateToSettings(t)
                }
                getWidgetProperties(t, e = 0) {
                    const i = (0, n.ensure)(this._settingsPrefix).replace(/\W/g, "\\$&") + ".widget.";
                    let s = O.keysMask(i + t + ".*");
                    return s && s.length && (s = s.sort(), s[e]) ? {
                        id: s[e].replace(i, "")
                    } : null
                }
                getGenericLayoutState(t) {
                    const e = (0, $t.getDefaultState)(),
                        s = (0, Ut.isFeatureEnabled)("news_separate_tab_enabled"),
                        n = (0, Gt.getInitData)().streams_enabled,
                        r = (0, jt.isMindsFeatureEnabledWithBackend)(),
                        o = {
                            type: "news"
                        },
                        l = [{
                            _gaEvent: "General Widget",
                            title: s ? (0, a.t)("Watchlist and details") : (0, a.t)("Watchlist, details and news"),
                            name: "base",
                            icon: "base",
                            widgets: [{
                                type: "watchlist",
                                properties: t && t.length ? {
                                    list: t
                                } : void 0
                            }, {
                                type: "detail"
                            }, { ...o,
                                isEnabled: !s
                            }]
                        }, Dt.enabled("alerts") ? {
                            _gaEvent: "Alerts",
                            title: (0, a.t)("Alerts"),
                            name: "alerts",
                            icon: "alarm-clock",
                            widgets: [{
                                type: "alerts_manage",
                                properties: {}
                            }, {
                                type: "alerts_log",
                                properties: {}
                            }]
                        } : null, s ? {
                            _gaEvent: "News",
                            title: (0, a.t)("News"),
                            name: "news",
                            icon: "news",
                            widgets: [o]
                        } : null, this.chartWidgetCollection && !this.chartWidgetCollection.readOnly() ? {
                            _gaEvent: "Object tree",
                            title: (0, a.t)("Object tree. Multi-select drawings"),
                            name: "object_tree",
                            icon: "object-tree",
                            onBottom: !0,
                            widgets: [{
                                type: "object_tree"
                            }]
                        } : null, {
                            _gaEvent: "Data Window",
                            title: (0, a.t)("Data Window"),
                            name: "data-window",
                            icon: "datawindow",
                            widgets: [{
                                type: "datawindow"
                            }]
                        }, r ? {
                            _gaEvent: "Minds",
                            title: (0, a.t)("Minds"),
                            name: "minds",
                            icon: "minds",
                            widgets: [{
                                type: "minds"
                            }]
                        } : null, {
                            _gaEvent: "Hotlists",
                            title: (0, a.t)("Hotlists"),
                            name: "hotlist",
                            icon: "hotlists",
                            widgets: [{
                                type: "hotlist",
                                properties: {
                                    group: "volume_gainers"
                                }
                            }, {
                                type: "hotlist",
                                properties: {
                                    group: "percent_change_gainers"
                                }
                            }, {
                                type: "hotlist",
                                properties: {
                                    group: "percent_change_loosers"
                                }
                            }]
                        }, {
                            _gaEvent: "Calendar",
                            title: (0, a.t)("Calendar"),
                            name: "calendar",
                            icon: "calendar",
                            widgets: [{
                                type: "reuters_calendar",
                                properties: {}
                            }, {
                                type: "earnings_calendar",
                                properties: {}
                            }]
                        }, {
                            _gaEvent: "My Ideas",
                            title: (0, a.t)("My Ideas"),
                            name: "notes",
                            icon: "notes",
                            spaceBottom: !0,
                            spaceBottomText: (0, a.t)("Social"),
                            widgets: [{
                                type: "notes"
                            }]
                        }, {
                            _gaEvent: "Public Chats",
                            title: (0, a.t)("Public Chats"),
                            name: "chats",
                            icon: "chat",
                            widgets: [{
                                type: "chat"
                            }, {
                                type: "publicchats"
                            }]
                        }, {
                            _gaEvent: "Private Chats",
                            title: (0, a.t)("Private Chats"),
                            name: "pm_chats",
                            icon: "messages",
                            widgets: [{
                                type: "messages"
                            }]
                        }, {
                            _gaEvent: "Ideas Stream",
                            title: (0, a.t)("Ideas Stream"),
                            name: "ideas_stream",
                            icon: "ideas-stream",
                            widgets: [{
                                type: "notifications_following"
                            }]
                        }, n ? {
                            _gaEvent: "Streams",
                            title: (0, a.t)("Streams"),
                            name: "streams",
                            icon: "streams",
                            widgets: [{
                                type: "streams"
                            }],
                            TabButtonComponent: i(210085).StreamsTabButton
                        } : null, {
                            _gaEvent: "Notifications",
                            title: (0, a.t)("Notifications"),
                            name: "notifications",
                            icon: "notifications",
                            widgets: [{
                                type: "notifications_user"
                            }]
                        }];
                    for (let t = 0; t < l.length; t++) {
                        const i = l[t];
                        i && e.pages.push(i)
                    }
                    return e
                }
                getChartingPlatformLayoutState(t, e) {
                    const i = (0, $t.getDefaultState)();
                    if (this._customization.watchlist || this._customization.details || this._customization.news) {
                        let s = "";
                        const n = [];
                        this._customization.watchlist && (s = (0, a.t)("Watchlist"), n.push({
                            type: "watchlist",
                            id: "watchlist." + e,
                            properties: t && t.length ? {
                                list: t
                            } : void 0
                        })), this._customization.details && (s = this._customization.watchlist ? (0, a.t)("Watchlist and details") : (0, a.t)("Details"), n.push({
                            type: "detail"
                        })), this._customization.news && (s = this._customization.watchlist && this._customization.details ? (0, a.t)("Watchlist and details and news") : this._customization.watchlist ? (0, a.t)("Watchlist and news") : (0, a.t)("News"), n.push({
                            type: "news",
                            id: "news." + e
                        })), i.pages.push({
                            name: "base",
                            title: s,
                            icon: "base",
                            widgets: n
                        })
                    }
                    return this._customization.datawindow && i.pages.push({
                        title: (0, a.t)("Data Window"),
                        name: "data-window",
                        icon: "datawindow",
                        widgets: [{
                            type: "datawindow"
                        }]
                    }), Jt && this.chartWidgetCollection && !this.chartWidgetCollection.readOnly() && i.pages.push({
                        title: (0, a.t)("Show Object tree"),
                        name: "object_tree",
                        icon: "object-tree",
                        onBottom: !0,
                        widgets: [{
                            type: "object_tree"
                        }]
                    }), i
                }
                getLayoutState() {
                    const t = O.getJSON("watchlist.list", []);
                    let e;
                    e = Dt.enabled("trading_terminal") ? this.getChartingPlatformLayoutState(t, "terminal") : this.getGenericLayoutState(t);
                    const i = t => !(void 0 !== t.isEnabled && !t.isEnabled) && (this.chartWidgetCollection || !(0, n.ensure)(W[t.type]).chartWidgetRequired);
                    for (let t = e.pages.length - 1; t >= 0; t--) {
                        const s = e.pages[t];
                        s.widgets = s.widgets.filter(i)
                    }
                    return e.pages = e.pages.filter((t => t.widgets && t.widgets.length)), e
                }
                createWidgetId(t) {
                    return t + "." + (0, G.randomHash)()
                }
                setPage(t) {
                    if (!this.layout) return null;
                    this.layout.setMinimizedState(!1);
                    let e = this.layout.activeIndex;
                    return this.layout.pages.forEach(((i, s) => {
                        i.name === t && (e = s)
                    })), this.layout.switchPage(e), this.layout.getActivePage()
                }
                ensureSupportTicketButtonViewModel() {
                    return this._supportTicketButtonViewModel || (this._supportTicketButtonViewModel = new g({
                        icon: Zt,
                        hint: (0, a.t)("Help Center"),
                        onClick: () => {
                            (0, K.trackButtonClick)("right panel", "help center"), this._configuration.then((t => {
                                const e = t.showSupportDialog;
                                e && e()
                            })), this._load()
                        }
                    })), this._supportTicketButtonViewModel
                }
                ensureHelpButtonViewModel() {
                    if (this._helpButtonViewModel) return this._helpButtonViewModel;
                    const t = this.ensureSupportTicketButtonViewModel();
                    return this._helpButtonViewModel = new g({
                        icon: Xt,
                        hint: (0, a.t)("Help Center"),
                        onClick: t.onClick.value()
                    }), this._helpButtonViewModel
                }
                createHTML() {
                    const t = this._container;
                    if (!t) return;
                    if (!this.layout) return;
                    t.innerHTML = "", this.layout.createHTML();
                    const e = this._wrap = document.createElement("div");
                    e.classList.value = "widgetbar-wrap unselectable js-right-boundary", t.appendChild(e), this.$wrap = Kt(e);
                    const i = this.layout.element("pages");
                    i && this._wrap.appendChild(i);
                    const s = this.layout.element("tabs");
                    Yt && s && this._wrap.appendChild(s);
                    const n = this.layout.element("device-button");
                    n && this._wrap.appendChild(n);
                    const a = this.layout.element("hider");
                    a && this._wrap.appendChild(a)
                }
                _getSerializedStateFromSetting() {
                    return this._settingsPrefix ? O.getJSON(this._settingsPrefix + ".layout-settings", null) : null
                }
                _setSerializedStateToSettings(t) {
                    this._settingsPrefix && O.setJSON(this._settingsPrefix + ".layout-settings", t)
                }
                _onBrokerConnectionStatusChanged() {
                    var t;
                    null === (t = this.layout) || void 0 === t || t.updateRightToolbar()
                }
            }
        },
        488627: (t, e, i) => {
            "use strict";

            function s(t) {
                return t.includes(":") ? t.split(":") : ["", t]
            }
            i.d(e, {
                splitSymbolName: () => s
            })
        },
        358683: (t, e, i) => {
            "use strict";
            i.d(e, {
                trackButtonClick: () => n
            });
            var s = i(776734);

            function n(t, e, i) {
                (0, s.getTracker)().then((s => {
                    null !== s && s.trackToolbarButtonClick(t, i ? `${e} ${i}` : e)
                }))
            }
        },
        812238: (t, e, i) => {
            "use strict";
            i.d(e, {
                VerticalScroll: () => g
            });
            var s = i(559496),
                n = i(497754),
                a = i.n(n),
                r = i(297974),
                o = i(83436),
                l = i(3008),
                h = i(876242),
                d = i(831301),
                c = i(661380);
            class g extends s.PureComponent {
                constructor(t) {
                    super(t), this._scroll = null, this._handleScrollTop = () => {
                        this.animateTo(Math.max(0, this.currentPosition() - (this.state.heightWrap - 50)))
                    }, this._handleScrollBot = () => {
                        this.animateTo(Math.min((this.state.heightContent || 0) - (this.state.heightWrap || 0), this.currentPosition() + (this.state.heightWrap - 50)))
                    }, this._handleResizeWrap = ({
                        height: t
                    }) => {
                        this.setState({
                            heightWrap: t
                        })
                    }, this._handleResizeContent = ({
                        height: t
                    }) => {
                        this.setState({
                            heightContent: t
                        })
                    }, this._handleScroll = () => {
                        const {
                            onScroll: t
                        } = this.props;
                        t && t(this.currentPosition(), this.isAtTop(), this.isAtBot()), this._checkButtonsVisibility()
                    }, this._checkButtonsVisibility = () => {
                        const {
                            isVisibleTopButton: t,
                            isVisibleBotButton: e
                        } = this.state, i = this.isAtTop(), s = this.isAtBot();
                        i || t ? i && t && this.setState({
                            isVisibleTopButton: !1
                        }) : this.setState({
                            isVisibleTopButton: !0
                        }), s || e ? s && e && this.setState({
                            isVisibleBotButton: !1
                        }) : this.setState({
                            isVisibleBotButton: !0
                        })
                    }, this.state = {
                        heightContent: 0,
                        heightWrap: 0,
                        isVisibleBotButton: !1,
                        isVisibleTopButton: !1
                    }
                }
                componentDidMount() {
                    this._checkButtonsVisibility()
                }
                componentDidUpdate(t, e) {
                    e.heightWrap === this.state.heightWrap && e.heightContent === this.state.heightContent || this._handleScroll()
                }
                currentPosition() {
                    return this._scroll ? this._scroll.scrollTop : 0
                }
                isAtTop() {
                    return this.currentPosition() <= 1
                }
                isAtBot() {
                    return this.currentPosition() + this.state.heightWrap >= this.state.heightContent - 1
                }
                animateTo(t, e = h.dur) {
                    const i = this._scroll;
                    i && (0, l.doAnimate)({
                        onStep(t, e) {
                            i.scrollTop = e
                        },
                        from: i.scrollTop,
                        to: Math.round(t),
                        easing: h.easingFunc.easeInOutCubic,
                        duration: e
                    })
                }
                render() {
                    const {
                        children: t,
                        isVisibleScrollbar: e,
                        isVisibleFade: i,
                        isVisibleButtons: n,
                        onMouseOver: l,
                        onMouseOut: h
                    } = this.props, {
                        heightContent: g,
                        heightWrap: u,
                        isVisibleBotButton: m,
                        isVisibleTopButton: p
                    } = this.state;
                    return s.createElement(r, {
                        whitelist: ["height"],
                        onMeasure: this._handleResizeWrap
                    }, s.createElement("div", {
                        className: d.wrap,
                        onMouseOver: l,
                        onMouseOut: h
                    }, s.createElement("div", {
                        className: a()(d.scrollWrap, {
                            [d.noScrollBar]: !e
                        }),
                        onScroll: this._handleScroll,
                        ref: t => this._scroll = t
                    }, s.createElement(r, {
                        onMeasure: this._handleResizeContent,
                        whitelist: ["height"]
                    }, s.createElement("div", {
                        className: d.content
                    }, t))), i && s.createElement("div", {
                        className: a()(d.fadeTop, {
                            [d.isVisible]: p && g > u
                        })
                    }), i && s.createElement("div", {
                        className: a()(d.fadeBot, {
                            [d.isVisible]: m && g > u
                        })
                    }), n && s.createElement("div", {
                        className: a()(d.scrollTop, {
                            [d.isVisible]: p && g > u
                        }),
                        onClick: this._handleScrollTop
                    }, s.createElement("div", {
                        className: d.iconWrap
                    }, s.createElement(o.Icon, {
                        icon: c,
                        className: d.icon
                    }))), n && s.createElement("div", {
                        className: a()(d.scrollBot, {
                            [d.isVisible]: m && g > u
                        }),
                        onClick: this._handleScrollBot
                    }, s.createElement("div", {
                        className: d.iconWrap
                    }, s.createElement(o.Icon, {
                        icon: c,
                        className: d.icon
                    })))))
                }
            }
            g.defaultProps = {
                isVisibleScrollbar: !0
            }
        },
        740976: (t, e, i) => {
            "use strict";
            i.d(e, {
                validateRegistry: () => o,
                RegistryProvider: () => l,
                useRegistry: () => h,
                registryContextType: () => d
            });
            var s = i(559496),
                n = i(719036),
                a = i.n(n);
            const r = s.createContext({});

            function o(t, e) {
                a().checkPropTypes(e, t, "context", "RegistryContext")
            }

            function l(t) {
                const {
                    validation: e,
                    value: i
                } = t;
                return o(i, e), s.createElement(r.Provider, {
                    value: i
                }, t.children)
            }

            function h(t) {
                const e = (0, s.useContext)(r);
                return o(e, t), e
            }

            function d() {
                return r
            }
        },
        369456: (t, e, i) => {
            "use strict";
            i.d(e, {
                TabButton: () => o
            });
            var s = i(559496),
                n = i(497754),
                a = i(83436),
                r = i(773989);

            function o(t) {
                t = {
                    isTab: !0,
                    theme: r,
                    ...t
                };
                const {
                    NotificationComponent: e = l
                } = t, i = n(t.className, t.theme.button, t.isTab && t.theme.isTab, t.isActive && t.theme.isActive, t.isGrayed && t.theme.isGrayed, t.hint && "apply-common-tooltip common-tooltip-vertical");
                return s.createElement("div", {
                    className: i,
                    title: t.hint,
                    onClick: t.onClick,
                    ref: t.reference,
                    "data-role": "button",
                    "data-name": t.name
                }, s.createElement("div", {
                    className: t.theme.hoverMask
                }), s.createElement(a.Icon, {
                    icon: t.icon
                }), s.createElement("div", {
                    className: t.theme.counterRow
                }, s.createElement(e, {
                    className: t.theme.counter,
                    count: t.count,
                    "data-name": "counter"
                })))
            }

            function l(t) {
                return s.createElement("span", {
                    className: t.className,
                    "data-name": "counter"
                }, t.count && 0 !== t.count ? t.count.toString() : void 0)
            }
        },
        210085: (t, e, i) => {
            "use strict";
            i.d(e, {
                StreamsTabButton: () => r
            });
            var s = i(559496),
                n = i(369456),
                a = i(456018);

            function r(t) {
                return s.createElement(n.TabButton, { ...t,
                    NotificationComponent: o
                })
            }

            function o(t) {
                const {
                    count: e
                } = t;
                return e && e > 0 ? s.createElement("span", {
                    className: a.counter
                }) : null
            }
        },
        404573: (t, e, i) => {
            "use strict";
            i.d(e, {
                Draggable: () => o,
                PointerBackend: () => l
            });
            var s = i(588537),
                n = i(318557),
                a = i(638456),
                r = i(778785);
            class o {
                constructor(t) {
                    var e, i;
                    this._helper = null, this._handleDragStart = t => {
                        var e;
                        if (null !== this._helper) return;
                        const i = this._source;
                        i.classList.add("ui-draggable-dragging");
                        const [s, a] = [(0, n.outerWidth)(i), (0, n.outerHeight)(i)];
                        this._helper = {
                            startTop: parseFloat(i.style.top) || 0,
                            startLeft: parseFloat(i.style.left) || 0,
                            nextTop: null,
                            nextLeft: null,
                            raf: null,
                            size: [s, a],
                            containment: this._containment instanceof HTMLElement ? [parseInt(getComputedStyle(this._containment).borderLeftWidth) + parseInt(getComputedStyle(this._containment).paddingLeft), parseInt(getComputedStyle(this._containment).borderTopWidth) + parseInt(getComputedStyle(this._containment).paddingTop), this._containment.offsetWidth - parseInt(getComputedStyle(this._containment).borderRightWidth) - parseInt(getComputedStyle(this._containment).paddingRight) - parseInt(getComputedStyle(i).marginLeft) - parseInt(getComputedStyle(i).marginRight) - s, this._containment.offsetHeight - parseInt(getComputedStyle(this._containment).borderBottomWidth) - parseInt(getComputedStyle(this._containment).paddingBottom) - parseInt(getComputedStyle(i).marginTop) - parseInt(getComputedStyle(i).marginBottom) - a] : "window" === this._containment ? [window.scrollX, window.scrollY, window.scrollX + document.documentElement.offsetWidth - s, window.scrollY + document.documentElement.offsetHeight - a] : null
                        }, null === (e = this._start) || void 0 === e || e.call(this)
                    }, this._handleDragMove = t => {
                        var e;
                        if (null === this._helper) return;
                        const {
                            current: i,
                            initial: s
                        } = t.detail, n = this._source, a = this._helper.nextTop, r = this._helper.nextLeft, o = "y" === this._axis || !1 === this._axis || 0 !== i.movementY;
                        if (o) {
                            const t = this._helper.startTop;
                            isFinite(t) && (this._helper.nextTop = i.clientY - s.clientY + t)
                        }
                        const l = "x" === this._axis || !1 === this._axis || 0 !== i.movementY;
                        if (l) {
                            const t = this._helper.startLeft;
                            isFinite(t) && (this._helper.nextLeft = i.clientX - s.clientX + t)
                        }
                        if (null !== this._helper.containment) {
                            const [t, e, i, s] = this._helper.containment;
                            o && this._helper.nextTop && (this._helper.nextTop = Math.min(this._helper.nextTop, s), this._helper.nextTop = Math.max(this._helper.nextTop, e)), l && this._helper.nextLeft && (this._helper.nextLeft = Math.min(this._helper.nextLeft, i), this._helper.nextLeft = Math.max(this._helper.nextLeft, t))
                        }
                        null !== this._helper.raf || a === this._helper.nextTop && r === this._helper.nextLeft || (this._helper.raf = requestAnimationFrame((() => {
                            null !== this._helper && (null !== this._helper.nextTop && (n.style.top = this._helper.nextTop + "px", this._helper.nextTop = null), null !== this._helper.nextLeft && (n.style.left = this._helper.nextLeft + "px", this._helper.nextLeft = null), this._helper.raf = null)
                        }))), null === (e = this._drag) || void 0 === e || e.call(this)
                    }, this._handleDragStop = t => {
                        var e;
                        if (null === this._helper) return;
                        this._source.classList.remove("ui-draggable-dragging"), this._helper = null, null === (e = this._stop) || void 0 === e || e.call(this)
                    };
                    const s = this._source = t.source;
                    s.classList.add("ui-draggable");
                    const a = this._handle = null !== (e = t.handle ? s.querySelector(t.handle) : null) && void 0 !== e ? e : s;
                    a.classList.add("ui-draggable-handle"), this._start = t.start, this._stop = t.stop, this._drag = t.drag, this._backend = new l({
                        handle: a,
                        onDragStart: this._handleDragStart,
                        onDragMove: this._handleDragMove,
                        onDragStop: this._handleDragStop
                    }), this._axis = null !== (i = t.axis) && void 0 !== i && i, this._containment = t.containment
                }
                destroy() {
                    const t = this._source;
                    t.classList.remove("ui-draggable"), t.classList.remove("ui-draggable-dragging");
                    this._handle.classList.remove("ui-draggable-handle"), this._backend.destroy(), null !== this._helper && (this._helper.raf && cancelAnimationFrame(this._helper.raf), this._helper = null)
                }
            }
            class l {
                constructor(t) {
                    this._initial = null, this._handlePointerDown = t => {
                        if (null !== this._initial) return;
                        if (!(t.target instanceof Element && this._handle.contains(t.target))) return;
                        if (this._initial = t, !this._dispatchEvent(this._createEvent("pointer-drag-start", t))) return void(this._initial = null);
                        t.preventDefault();
                        const e = this._getEventTarget();
                        e.addEventListener("pointermove", this._handlePointerMove), e.addEventListener("pointerup", this._handlePointerUp), e.addEventListener("pointercancel", this._handlePointerUp), e.addEventListener("lostpointercapture", this._handlePointerUp), e.setPointerCapture(t.pointerId)
                    }, this._handlePointerMove = t => {
                        null !== this._initial && this._initial.pointerId === t.pointerId && (t.preventDefault(), this._dispatchEvent(this._createEvent("pointer-drag-move", t)))
                    }, this._handlePointerUp = t => {
                        if (null === this._initial || this._initial.pointerId !== t.pointerId) return;
                        t.preventDefault();
                        const e = this._getEventTarget();
                        e.removeEventListener("pointermove", this._handlePointerMove), e.removeEventListener("pointerup", this._handlePointerUp), e.removeEventListener("pointercancel", this._handlePointerUp), e.removeEventListener("lostpointercapture", this._handlePointerUp), e.releasePointerCapture(this._initial.pointerId), this._dispatchEvent(this._createEvent("pointer-drag-stop", t)), this._initial = null
                    };
                    const e = this._handle = t.handle;
                    this._onDragStart = t.onDragStart, this._onDragMove = t.onDragMove, this._onDragStop = t.onDragStop, e.style.touchAction = "none";
                    this._getEventTarget().addEventListener("pointerdown", this._handlePointerDown)
                }
                destroy() {
                    this._handle.style.touchAction = "";
                    const t = this._getEventTarget();
                    t.removeEventListener("pointerdown", this._handlePointerDown), t.removeEventListener("pointermove", this._handlePointerMove), t.removeEventListener("pointerup", this._handlePointerUp), t.removeEventListener("pointercancel", this._handlePointerUp), t.removeEventListener("lostpointercapture", this._handlePointerUp), null !== this._initial && (t.releasePointerCapture(this._initial.pointerId), this._initial = null)
                }
                _getEventTarget() {
                    return a.CheckMobile.iOS() || (0, a.isMac)() && r.touch ? window.document.documentElement : this._handle
                }
                _dispatchEvent(t) {
                    switch (t.type) {
                        case "pointer-drag-start":
                            this._onDragStart(t);
                            break;
                        case "pointer-drag-move":
                            this._onDragMove(t);
                            break;
                        case "pointer-drag-stop":
                            this._onDragStop(t)
                    }
                    return !t.defaultPrevented
                }
                _createEvent(t, e) {
                    return (0, s.assert)(null !== this._initial), new CustomEvent(t, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            backend: this,
                            initial: this._initial,
                            current: e
                        }
                    })
                }
            }
        },
        877765: (t, e, i) => {
            "use strict";

            function s(t) {
                return { ...t,
                    published: t.published ? 1e3 * t.published : Date.now()
                }
            }
            i.d(e, {
                newsItemTransform: () => s
            })
        },
        838115: (t, e, i) => {
            "use strict";
            i.d(e, {
                showExternalLink: () => h,
                renderNewsItem: () => d,
                renderLogosNewsItem: () => c,
                renderTimeNewsItem: () => g
            });
            var s = i(559496),
                n = i(587995),
                a = i(816770),
                r = i(713667),
                o = i(593725),
                l = i(341099);

            function h(t) {
                return Boolean(t.link && !t.astDescription)
            }

            function d(t) {
                const e = { ...t,
                    link: (0, o.getNewsItemLink)(t)
                };
                return (0, r.renderNewsItem)(e, function(t) {
                    return {
                        isLinkBlock: (0, o.isNewsItemLink)(t),
                        withHover: Boolean(t.astDescription || t.link),
                        showExternalLink: h(t),
                        isImportantNewsItem: 1 === t.urgency
                    }
                }(e))
            }

            function c(t, e) {
                const i = e.querySelector("[init_logo_container]");
                return n.render(s.createElement(a.CircleLogoStack, {
                    logoUrlsOrSymbols: t
                }), i), () => {
                    n.unmountComponentAtNode(i)
                }
            }

            function g(t, e) {
                const i = e.querySelector("[init_time_container]");
                return n.render(s.createElement(l.AgoDateFormatter, {
                    eventTime: t,
                    isSSR: !1
                }), i), () => {
                    n.unmountComponentAtNode(i)
                }
            }
        },
        615063: (t, e, i) => {
            "use strict";
            i.d(e, {
                trackNewsClick: () => a,
                getPageName: () => r
            });
            var s = i(345848),
                n = i(776734);
            async function a(t) {
                null !== t.provider && (0, s.trackEvent)("News", "click", t.provider);
                const e = await (0, n.getTracker)();
                e && e.trackNewsClick({ ...t,
                    user_id: window.user.id || null
                })
            }

            function r() {
                if (window.TradingView.onChartPage) return "chart";
                const t = window.location.pathname;
                if ("/" === t) return "main";
                const e = t.split("/")[1];
                return "chart" === e ? "idea" : e
            }
        },
        887357: (t, e, i) => {
            "use strict";
            var s;
            i.d(e, {
                    NewsWidgetPlacement: () => s
                }),
                function(t) {
                    t.WidgetBar = "widgetbar", t.Main = "main"
                }(s || (s = {}))
        },
        593725: (t, e, i) => {
            "use strict";
            i.d(e, {
                getNewsCountry: () => b,
                getNewsItemLink: () => v,
                getStoryPageUrl: () => p,
                getUpdatedRequestProps: () => c,
                handleNewsProName: () => f,
                hasStoryPage: () => m,
                isInteractiveNewsItem: () => w,
                isNewsItemLink: () => _
            });
            const s = {
                bond: "bond",
                cfd: "cfd",
                crypto: "crypto",
                dr: "stock",
                forex: "forex",
                fund: "stock",
                futures: "futures",
                index: "index",
                right: "stock",
                stock: "stock",
                structured: "stock",
                warrant: "stock",
                economic: "economic"
            };

            function n(t, e) {
                if (e && 0 !== e.length) {
                    if (e.includes("crypto")) return "crypto";
                    if (e.includes("bond")) return "bond"
                }
                return function(t) {
                    return Boolean(t && t in s)
                }(t) ? s[t] : "base"
            }
            var a = i(39654),
                r = i(889267),
                o = i(179380),
                l = i(752604);
            const h = "urn:newsml:".length,
                d = "tag:".length;

            function c(t) {
                return {
                    symbol: t.pro_name || null,
                    category: n(t.type, t.typespecs),
                    country: b(t.country),
                    lang: t.lang || (0, a.getIsoLanguageCodeFromLanguage)(window.language)
                }
            }

            function g(t) {
                return t.toLowerCase().trim().replace(/[\W_]+/g, "-").replace(/-+/, "-").replace(/^-/, "").replace(/-$/, "")
            }

            function u(t) {
                return t.startsWith("tag:reuters.com")
            }

            function m(t) {
                return u(t) || function(t) {
                    return t.startsWith("urn:newsml:mtnewswires.com")
                }(t)
            }

            function p(t, e) {
                return m(t) ? function(t, e) {
                    return u(t) ? `/news/${t.slice(d)}-${g(e)}/` : `/news/${t.slice(h)}-${g(e)}/`
                }(t, e) : void 0
            }

            function v(t) {
                return t.link || p(t.id, t.title)
            }

            function w(t) {
                return Boolean(t.astDescription || t.link)
            }

            function _(t) {
                const e = v(t);
                return Boolean(!t.astDescription || e && function(t) {
                    try {
                        return t.startsWith("/") || (0,
                            o.isInternalHost)(new URL(t).hostname, "tradingview.com")
                    } catch (t) {
                        return !1
                    }
                }(e))
            }

            function f(t, e) {
                if ("spread" !== e) return t;
                try {
                    return (0, r.tokenize)(t).filter((t => "symbol" === t.type)).map((t => t.value))[0]
                } catch (e) {
                    return t
                }
            }

            function b(t) {
                return t || ("in" === window.locale ? (0, l.getIsoCountryCodeFromLocale)(window.locale) : null)
            }
        },
        713667: (t, e, i) => {
            "use strict";
            i.d(e, {
                getNewsItemBlockOptions: () => n,
                renderNewsItem: () => a
            });
            var s = i(534687);

            function n(t) {
                return {
                    isLinkBlock: Boolean(t.link),
                    withHover: Boolean(t.link),
                    showExternalLink: Boolean(t.link),
                    isImportantNewsItem: !1
                }
            }

            function a(t, e) {
                const {
                    title: i,
                    shortDescription: n,
                    link: a,
                    source: o
                } = t, {
                    isLinkBlock: l,
                    withHover: h,
                    showExternalLink: d,
                    isImportantNewsItem: c
                } = e, g = document.createElement("div");
                g.classList.add(s["news-item__title"]), g.textContent = i, g.classList.toggle(s["news-item__title--external-link"], d);
                const u = document.createElement("div");
                u.classList.add(s["news-item__header"]);
                const m = document.createElement("div");
                m.classList.add(s["news-item__logos"]), m.setAttribute("init_logo_container", ""), u.appendChild(m);
                const p = document.createElement("div");
                p.classList.add(s["news-item__breadcrumbs"]);
                const v = document.createElement("div");
                v.setAttribute("init_time_container", ""), p.appendChild(v);
                const w = document.createElement("span");
                w.textContent = o, p.appendChild(w), u.appendChild(p);
                const _ = document.createElement(l ? "a" : "div");
                _.classList.add(s["news-item"]), _.classList.toggle(s["news-item--no-hover"], !h);
                const f = document.createElement("div");
                if (f.classList.add(s["news-item__wrapper"]), c && _.classList.add(s["news-item--important"]), l && a && (_.href = a, _.target = "_blank", _.rel = d ? "noopener nofollow" : "noopener"), l || _.addEventListener("contextmenu", r), f.appendChild(u), f.appendChild(g), n) {
                    const t = document.createElement("div");
                    t.classList.add(s["news-item__description"]), t.textContent = n || "", f.appendChild(t)
                }
                return _.appendChild(f), _
            }

            function r(t) {
                t.preventDefault()
            }
        },
        318557: (t, e, i) => {
            "use strict";
            i.d(e, {
                contentHeight: () => n.contentHeight,
                outerHeight: () => n.outerHeight,
                outerWidth: () => n.outerWidth,
                unwrap: () => a,
                html: () => r,
                offset: () => o,
                position: () => l
            });
            var s = i(588537),
                n = i(746326);

            function a(t) {
                return t[0]
            }

            function r(t, e) {
                return void 0 === e || (null === e && (t.innerHTML = ""), "string" != typeof e && "number" != typeof e || (t.innerHTML = String(e))), t
            }

            function o(t) {
                if (!t.getClientRects().length) return {
                    top: 0,
                    left: 0
                };
                const e = t.getBoundingClientRect(),
                    i = (0, s.ensureNotNull)(t.ownerDocument.defaultView);
                return {
                    top: e.top + i.pageYOffset,
                    left: e.left + i.pageXOffset
                }
            }

            function l(t) {
                const e = getComputedStyle(t);
                let i, s = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === e.position) i = t.getBoundingClientRect();
                else {
                    i = o(t);
                    const e = t.ownerDocument;
                    let n = t.offsetParent || e.documentElement;
                    for (; n && (n === e.body || n === e.documentElement) && "static" === getComputedStyle(n).position;) n = n.parentElement;
                    n && n !== t && 1 === n.nodeType && (s = o(n), s.top += parseFloat(getComputedStyle(n).borderTopWidth), s.left += parseFloat(getComputedStyle(n).borderLeftWidth))
                }
                return {
                    top: i.top - s.top - parseFloat(e.marginTop),
                    left: i.left - s.left - parseFloat(e.marginLeft)
                }
            }
        },
        812352: (t, e, i) => {
            "use strict";
            i.d(e, {
                getLocales: () => r,
                getLocale: () => o,
                getLocaleIso: () => l
            });
            var s = i(588537),
                n = i(804510);
            const a = function() {
                const t = document.querySelectorAll("link[rel~=link-locale][data-locale]");
                if (0 === t.length) return n;
                const e = {};
                return t.forEach((t => {
                    const i = (0, s.ensureNotNull)(t.getAttribute("data-locale"));
                    e[i] = { ...n[i],
                        href: t.href
                    }
                })), e
            }();

            function r() {
                return a
            }

            function o(t) {
                return t = t || window.locale, a[t]
            }

            function l(t) {
                var e;
                return t = t || window.locale, null === (e = a[t]) || void 0 === e ? void 0 : e.iso
            }
        },
        321475: (t, e, i) => {
            "use strict";
            i.d(e, {
                isMindsFeatureEnabledWithBackend: () => n
            });
            var s = i(125226);

            function n() {
                var t, e;
                const i = null !== (t = window.featureToggleState.enable_minds_backend) && void 0 !== t ? t : 0;
                return window.user.is_staff && i >= .1 || (null === (e = window.user.permissions) || void 0 === e ? void 0 : e.can_moderate_ideas) && i >= .2 || (0, s.isFeatureEnabled)("minds_widget_enabled") && 1 === i
            }
        },
        781014: (t, e, i) => {
            "use strict";
            var s;
            i.d(e, {
                    BadgeBrokerNames: () => s
                }),
                function(t) {
                    t.BrokerExtraFeatured = "broker_extra:featured", t.BrokerPlatinum = "broker:platinum", t.BrokerGold = "broker:gold", t.BrokerSilver = "broker:silver"
                }(s || (s = {}))
        },
        180184: (t, e, i) => {
            "use strict";
            i.d(e, {
                BadgeSize: () => s.BadgeSize
            });
            var s = i(105573)
        },
        160742: (t, e, i) => {
            "use strict";
            i.d(e, {
                CircleLogoAny: () => r
            });
            var s = i(559496),
                n = i(46926),
                a = i(495217);

            function r(t) {
                const {
                    logoUrls: e
                } = t;
                return 1 === e.length ? s.createElement(a.CircleLogo, { ...t,
                    logoUrl: e[0]
                }) : 2 === e.length ? s.createElement(n.CircleLogoPair, { ...t,
                    primaryLogoUrl: e[0],
                    secondaryLogoUrl: e[1]
                }) : s.createElement(a.CircleLogo, { ...t,
                    logoUrl: void 0
                })
            }
        },
        46926: (t, e, i) => {
            "use strict";
            i.d(e, {
                CircleLogoPair: () => a
            });
            var s = i(559496),
                n = i(439378);
            i(480826);

            function a(t) {
                const {
                    primaryLogoUrl: e,
                    secondaryLogoUrl: i,
                    size: a,
                    className: o
                } = t;
                return s.createElement("span", {
                    className: (0, n.getBlockStyleClasses)(a, o),
                    title: t.title
                }, s.createElement(r, {
                    logoUrl: i,
                    size: a
                }), s.createElement(r, {
                    logoUrl: e,
                    size: a
                }))
            }

            function r(t) {
                const {
                    logoUrl: e,
                    size: i
                } = t, a = (0, n.getLogoStyleClasses)(i);
                return void 0 === e ? s.createElement("span", {
                    className: a
                }) : s.createElement("img", {
                    className: a,
                    src: e,
                    alt: ""
                })
            }
        },
        439378: (t, e, i) => {
            "use strict";
            i.d(e, {
                getBlockStyleClasses: () => n,
                getLogoStyleClasses: () => a
            });
            var s = i(497754);

            function n(t, e) {
                return s("tv-circle-logo-pair", `tv-circle-logo-pair--${t}`, e)
            }

            function a(t, e) {
                return s("tv-circle-logo-pair__logo", `tv-circle-logo-pair__logo--${t}`, !e && "tv-circle-logo-pair__logo-empty")
            }
        },
        816770: (t, e, i) => {
            "use strict";
            i.d(e, {
                CircleLogoStack: () => h
            });
            var s = i(559496),
                n = i(497754),
                a = i(488627);

            function r(t) {
                return "logoUrl" in t
            }
            var o = i(495217),
                l = i(755331);

            function h(t) {
                const e = function(t) {
                    const e = [],
                        i = new Set,
                        s = t.slice();
                    for (; 0 !== s.length;) {
                        const t = s.shift();
                        if (!t) break;
                        const n = r(t),
                            o = n ? t.logoUrl : t.symbol;
                        if (!i.has(o) && (i.add(o), n ? e.push(t) : e.push({
                                placeholderLetter: (0, a.splitSymbolName)(t.symbol)[1][0]
                            }), 4 === e.length)) break
                    }
                    return e
                }(t.logoUrlsOrSymbols);
                return s.createElement("ul", {
                    className: n(l.stack, t.className)
                }, e.map(((t, e) => s.createElement("li", {
                    key: e
                }, s.createElement(o.CircleLogo, { ...t,
                    size: "xxsmall",
                    loading: "lazy"
                })))))
            }
        },
        495217: (t, e, i) => {
            "use strict";
            i.d(e, {
                CircleLogo: () => a
            });
            var s = i(559496),
                n = i(783036);
            i(500045);

            function a(t) {
                var e, i;
                const a = (0, n.getStyleClasses)(t.size, t.className),
                    r = null !== (i = null !== (e = t.alt) && void 0 !== e ? e : t.title) && void 0 !== i ? i : "";
                return (0, n.isCircleLogoWithUrlProps)(t) ? s.createElement("img", {
                    className: a,
                    src: t.logoUrl,
                    alt: r,
                    title: t.title,
                    loading: t.loading
                }) : s.createElement("span", {
                    className: a,
                    title: t.title
                }, t.placeholderLetter)
            }
        },
        783036: (t, e, i) => {
            "use strict";
            i.d(e, {
                getStyleClasses: () => n,
                isCircleLogoWithUrlProps: () => a
            });
            var s = i(497754);

            function n(t, e) {
                return s("tv-circle-logo", `tv-circle-logo--${t}`, e)
            }

            function a(t) {
                return "logoUrl" in t && void 0 !== t.logoUrl && 0 !== t.logoUrl.length
            }
        },
        962624: (t, e, i) => {
            "use strict";
            i.d(e, {
                hoverMouseEventFilter: () => s.hoverMouseEventFilter,
                useAccurateHover: () => s.useAccurateHover,
                useHover: () => s.useHover
            });
            var s = i(662464)
        },
        829725: (t, e, i) => {
            "use strict";
            i.d(e, {
                OverlapManager: () => a,
                getRootOverlapManager: () => o
            });
            var s = i(588537);
            class n {
                constructor() {
                    this._storage = []
                }
                add(t) {
                    this._storage.push(t)
                }
                remove(t) {
                    this._storage = this._storage.filter((e => t !== e))
                }
                has(t) {
                    return this._storage.includes(t)
                }
                getItems() {
                    return this._storage
                }
            }
            class a {
                constructor(t = document) {
                    this._storage = new n, this._windows = new Map, this._index = 0, this._document = t, this._container = t.createDocumentFragment()
                }
                setContainer(t) {
                    const e = this._container,
                        i = null === t ? this._document.createDocumentFragment() : t;
                    ! function(t, e) {
                        Array.from(t.childNodes).forEach((t => {
                            t.nodeType === Node.ELEMENT_NODE && e.appendChild(t)
                        }))
                    }(e, i), this._container = i
                }
                registerWindow(t) {
                    this._storage.has(t) || this._storage.add(t)
                }
                ensureWindow(t, e = {
                    position: "fixed",
                    direction: "normal"
                }) {
                    const i = this._windows.get(t);
                    if (void 0 !== i) return i;
                    this.registerWindow(t);
                    const s = this._document.createElement("div");
                    if (s.style.position = e.position, s.style.zIndex = this._index.toString(), s.dataset.id = t, void 0 !== e.index) {
                        const t = this._container.childNodes.length;
                        if (e.index >= t) this._container.appendChild(s);
                        else if (e.index <= 0) this._container.insertBefore(s, this._container.firstChild);
                        else {
                            const t = this._container.childNodes[e.index];
                            this._container.insertBefore(s, t)
                        }
                    } else "reverse" === e.direction ? this._container.insertBefore(s, this._container.firstChild) : this._container.appendChild(s);
                    return this._windows.set(t, s), ++this._index, s
                }
                unregisterWindow(t) {
                    this._storage.remove(t);
                    const e = this._windows.get(t);
                    void 0 !== e && (null !== e.parentElement && e.parentElement.removeChild(e), this._windows.delete(t))
                }
                getZindex(t) {
                    const e = this.ensureWindow(t);
                    return parseInt(e.style.zIndex || "0")
                }
                moveToTop(t) {
                    if (this.getZindex(t) !== this._index) {
                        this.ensureWindow(t).style.zIndex = (++this._index).toString()
                    }
                }
                removeWindow(t) {
                    this.unregisterWindow(t)
                }
            }
            const r = new WeakMap;

            function o(t = document) {
                const e = t.getElementById("overlap-manager-root");
                if (null !== e) return (0, s.ensureDefined)(r.get(e)); {
                    const e = new a(t),
                        i = function(t) {
                            const e = t.createElement("div");
                            return e.style.position = "absolute", e.style.zIndex = 150..toString(), e.style.top = "0px", e.style.left = "0px", e.id = "overlap-manager-root", e
                        }(t);
                    return r.set(i, e), e.setContainer(i), t.body.appendChild(i), e
                }
            }
        },
        73927: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M15.83 7.5l4.67 4.67 4.67-4.67-4.67-4.67-4.67 4.67zm3.26-6.09L13 7.5l6.09 6.09L20.5 15l1.41-1.41L26.6 8.9 28 7.5l-1.41-1.41L21.9 1.4 20.5 0l-1.41 1.41zM4 4h7v7H4V4zM2 2h11v11H2V2zm15 15h7v7h-7v-7zm-2-2h11v11H15V15zM4 17h7v7H4v-7zm-2-2h11v11H2V15z"/></svg>'
        },
        315130: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor"><path d="m.58 1.42.82-.82 15 15-.82.82z"/><path d="m.58 15.58 15-15 .82.82-15 15z"/></svg>'
        },
        661380: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>'
        },
        66957: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="22" height="22"><path d="M6.5 1C5.67 1 5 1.67 5 2.5v1C5 4.33 5.67 5 6.5 5S8 4.33 8 3.5v-1C8 1.67 7.33 1 6.5 1zm8 0c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5S16 4.33 16 3.5v-1c0-.83-.67-1.5-1.5-1.5zM1 4v16h19V4h-3.05c-.238 1.164-1.262 2-2.45 2-1.186-.002-2.208-.838-2.445-2H8.95C8.71 5.164 7.687 6 6.5 6c-1.186-.002-2.208-.838-2.445-2H1zm20 2v15H3v1h19V6h-1zM2 8h17v11H2V8zm3 1v3h3V9H5zm4 0v3h3V9H9zm4 0v3h3V9h-3zm-8 4v3h3v-3H5zm4 0v3h3v-3H9zm4 0v3h3v-3h-3z"/></svg>'
        },
        452970: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M22.308 8.606a.5.5 0 0 0-.616 0l-11.5 9a.5.5 0 0 0 0 .788l11.5 9a.5.5 0 0 0 .616 0l11.5-9a.5.5 0 0 0 0-.788l-11.5-9zM22 26.366L11.311 18 22 9.635 32.689 18 22 26.365zm0 4l-11.192-8.76-.616.788 11.5 9a.5.5 0 0 0 .616 0l11.5-9-.616-.788L22 30.366zm0 4l-11.192-8.76-.616.788 11.5 9a.5.5 0 0 0 .616 0l11.5-9-.616-.788L22 34.366z"/></svg>'
        },
        848185: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="M22.5 12a1 1 0 0 1 0 21 1 1 0 0 1 0-21m0 1a1 1 0 0 0 0 19 1 1 0 0 0 0-19m-7.15 16.85l.8.6-2.05 2.75-.8-.6zm13.48.57l.8-.6 2.07 2.78-.8.6zM22 22v-7h1v8h-6v-1zm9.93-2.95l-.58-.81a4 4 0 1 0-5.84-5.2l-.87-.49a5 5 0 1 1 7.3 6.5zm-11.57-6.5l-.87.48a4 4 0 1 0-5.9 5.17l-.6.8a5 5 0 1 1 7.36-6.46z"/></svg>'
        },
        731503: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><g fill="none" stroke="currentColor"><path d="M14.5 27.5c0 4.97 3.03 8 8 8 4.97 0 8-3.03 8-8v-6a3 3 0 0 0-3-3h-10a3 3 0 0 0-3 3v6z"/><path stroke-linecap="square" d="M22.5 19v16"/><path d="M27.5 18.5a5 5 0 1 0-10 0m13 3h2a2 2 0 0 1 2 2V25m-4 2.5h2a2 2 0 0 1 2 2V31M29 32.5h1.5a2 2 0 0 1 2 2V36m-18-14.5h-2a2 2 0 0 0-2 2V25m4 2.5h-2a2 2 0 0 0-2 2V31m5.5 1.5h-1.5a2 2 0 0 0-2 2V36"/><g transform="translate(12 8)"><circle cx="2.5" cy="2.5" r="2"/><path d="M3.911 3.911L7 7"/></g><g transform="translate(26 8)"><circle cx="4.5" cy="2.5" r="2"/><path d="M3.115 3.885L0 7"/></g></g></svg>'
        },
        242765: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m29.5 10a4.5 4.5 0 0 1 4.5 4.5v15a4.5 4.5 0 0 1-4.5 4.5h-15a4.5 4.5 0 0 1-4.5-4.5v-15a4.5 4.5 0 0 1 4.5-4.5m0 1a3.5 3.5 0 0 0-3.5 3.5v15a3.5 3.5 0 0 0 3.5 3.5h15a3.5 3.5 0 0 0 3.5-3.5v-15a3.5 3.5 0 0 0-3.5-3.5M16 8h1v5h-1m11-5h1v5h-1M16 27a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m6-1a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m-6-7a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m6-1a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m6-1a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m-12-7a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m6-1a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m6-1a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2"/></svg>'
        },
        981132: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m5 12v-1h4v1zm5-6h1v4h-1zm0 7h1v4h-1zm2-1v-1h4v1zm7 0v-1h10.5a4.5 4.5 0 0 1 4.5 4.5v14a4.5 4.5 0 0 1-4.5 4.5h-15a4.5 4.5 0 0 1-4.5-4.5V20h1v9.5a3.5 3.5 0 0 0 3.5 3.5h15a3.5 3.5 0 0 0 3.5-3.5v-14a3.5 3.5 0 0 0-3.5-3.5H19zm-3 5a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2H16zm0-1h12a2 2 0 1 1 0 4H16a2 2 0 1 1 0-4zm-1 8v-1h8v1zm0 4v-1h8v1zm11-4v-1h3v1zm0 4v-1h3v1z"/></svg>'
        },
        443768: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m17 30a1 1 0 0 1 0 4h-4a1 1 0 0 1 0-4m0 1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m0-7a1 1 0 0 1 0 4h-4a1 1 0 0 1 0-4m0 1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m6 5a1 1 0 0 1 0 4 1 1 0 0 1 0-4m0 1a1 1 0 0 0 0 2 1 1 0 0 0 0-2m0-7a1 1 0 0 1 0 4 1 1 0 0 1 0-4m0 1a1 1 0 0 0 0 2 1 1 0 0 0 0-2m0-7a1 1 0 0 1 0 4 1 1 0 0 1 0-4m0 1a1 1 0 0 0 0 2 1 1 0 0 0 0-2m0-7a1 1 0 0 1 0 4 1 1 0 0 1 0-4m0 1a1 1 0 0 0 0 2 1 1 0 0 0 0-2m10 5a1 1 0 0 1 0 4h-4a1 1 0 0 1 0-4m0 1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m0-7a1 1 0 0 1 0 4h-4a1 1 0 0 1 0-4m0 1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2"/></svg>'
        },
        836914: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m28.5 16.92l.14-.8.65.47a9.8 9.8 0 0 1 1.87 2A10.12 10.12 0 0 1 33 24.5C33 30.28 28.28 35 22.5 35S12 30.28 12 24.5c0-4.4 1.71-6.67 6.46-10.3l.49-.36a30 30 0 0 0 3.2-2.7l.4-.39.34.44a12.57 12.57 0 0 1 1.05 1.64 7.95 7.95 0 0 1 .93 5.5 28.56 28.56 0 0 1-.71 3.64c2.46-.27 3.85-2.04 4.35-5.05zm-8.95-2.29l-.48.37C14.55 18.45 13 20.5 13 24.5c0 5.22 4.28 9.5 9.5 9.5s9.5-4.28 9.5-9.5c0-2.08-.62-3.86-1.66-5.34a8.91 8.91 0 0 0-1.02-1.22C28.55 21.13 26.66 23 23.5 23h-.66l.18-.64a35.38 35.38 0 0 0 .49-2.02c.16-.74.28-1.46.37-2.14a7 7 0 0 0-.82-4.9c-.2-.38-.41-.72-.63-1.04-.74.7-1.55 1.36-2.88 2.37z"/></svg>'
        },
        151286: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><g fill="none" stroke="currentcolor"><path d="M19.5 33.5h6a2 2 0 0 0 2-2v-4c2.41-1.615 4-4.88 4-8a9 9 0 0 0-18 0c0 3.122 1.586 6.386 4 8v4a2 2 0 0 0 2 2zm-2-6h10m-10 3h10m-7 3v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1"/><path stroke-linecap="square" d="M22.5 27.5v-7m-2 0h4"/><path d="M11.86 13.945A11.948 11.948 0 0 0 10.5 19.5c0 2.009.494 3.902 1.366 5.566M9.203 12.552A14.935 14.935 0 0 0 7.5 19.5c0 2.508.615 4.872 1.703 6.95M33.14 13.945A11.946 11.946 0 0 1 34.5 19.5c0 2.009-.494 3.902-1.366 5.566m2.663-12.514A14.935 14.935 0 0 1 37.5 19.5c0 2.508-.615 4.872-1.703 6.95"/></g></svg>'
        },
        425403: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m27 31.5a2.5 2.5 0 0 1-2.5 2.5h-6a2.5 2.5 0 0 1-2.5-2.5v-3.74c-2.41-1.74-4-5.04-4-8.26a9.5 9.5 0 0 1 19 0c0 3.21-1.6 6.52-4 8.26v3.74zM18.5 33h6a1.5 1.5 0 0 0 1.5-1.5v-4.27l.22-.14c2.25-1.51 3.78-4.6 3.78-7.59a8.5 8.5 0 1 0-17 0c0 3 1.53 6.08 3.78 7.58l.22.15v4.27a1.5 1.5 0 0 0 1.5 1.5zm-2-5v-1h10v1zm0 3v-1h10v1zm2.5 2.5h1v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1h1v1a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-1zm3-5.5h-1v-8h1zm-3-7v-1h5v1z"/></svg>'
        },
        707953: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44"><path fill="currentColor" d="M19.9 8.28c-4.04 0-7.29 3.42-7.29 7.58 0 .16 0 .32.02.48a6.03 6.03 0 1 0 2.77 11.7 9.18 9.18 0 0 0 7.22 3.56c2.82 0 5.34-1.3 7.05-3.35.33.07.68.1 1.03.1 3.23 0 5.8-2.76 5.8-6.11 0-2.57-1.5-4.78-3.66-5.68.16-.53.24-1.08.24-1.66a5.43 5.43 0 0 0-5.31-5.53c-1.09 0-2.1.34-2.93.91a7.11 7.11 0 0 0-4.94-2Zm-6.29 7.58a6.44 6.44 0 0 1 6.3-6.58c1.76 0 3.37.77 4.51 2l.32.35.37-.3c.73-.6 1.65-.96 2.66-.96 2.36 0 4.31 2.01 4.31 4.53a4.7 4.7 0 0 1-.34 1.77l-.2.5.52.16a5.08 5.08 0 0 1 3.43 4.9c0 2.86-2.17 5.12-4.79 5.12-.38 0-.75-.05-1.1-.14l-.32-.08-.2.26a8.18 8.18 0 0 1-6.46 3.2 8.2 8.2 0 0 1-6.64-3.44l-.22-.32-.36.14a5.05 5.05 0 0 1-6.9-4.68 5.04 5.04 0 0 1 4.7-5.01l.53-.04-.07-.52a6.95 6.95 0 0 1-.05-.86ZM15 20h14v-1H15v1Zm9 4h-9v-1h9v1Zm6.98 8.48a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.5-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"/></svg>'
        },
        786548: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width="45" height="45" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 11c-.83 0-1.5.67-1.5 1.5v19a2.5 2.5 0 0 0 2.5 2.5H33.5c.59 0 1.06-.15 1.43-.4.37-.24.61-.57.77-.88a2.96 2.96 0 0 0 .3-1.18v-.04h-.5.5v-11c0-.83-.67-1.5-1.5-1.5H32v-6.5c0-.83-.67-1.5-1.5-1.5h-19zM32 20V31.55a1.97 1.97 0 0 0 .2.73c.1.19.23.36.42.5.2.12.47.22.88.22.41 0 .69-.1.88-.23.2-.13.33-.3.42-.5a1.96 1.96 0 0 0 .2-.76V20.5a.5.5 0 0 0-.5-.5H32zm-.7 12.72l.16.28H12.5a1.5 1.5 0 0 1-1.5-1.5v-19c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5v19h.5-.5v.04a2.08 2.08 0 0 0 .04.35c.03.22.1.53.26.83zM15.5 15c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3zm-.5 1.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3zM28 24H14v-1h14v1zm-6-8h6v-1h-6v1zm6 3h-6v-1h6v1zm-14 8h14v-1H14v1zm7 3h-7v-1h7v1z"/></svg>'
        },
        496220: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="M23.98 13.12c3.67 1.19 5.98 4.85 6.02 9.26v2.31c-.04 1.53.03 2.14.35 2.46l-.7.7c-.61-.6-.7-1.32-.66-3.18L29 24v-1.62c-.04-4.13-2.23-7.46-5.63-8.4a.5.5 0 0 1-.37-.48c0-1.04-.56-1.5-1.5-1.5s-1.5.46-1.5 1.5a.5.5 0 0 1-.37.48c-3.4.93-5.59 4.27-5.63 8.4V24l.01.67c.04 1.86-.05 2.58-.66 3.18l-.7-.7c.32-.32.4-.93.36-2.46L13 24v-1.62c.04-4.41 2.35-8.07 6.02-9.26.15-1.39 1.14-2.12 2.48-2.12s2.33.73 2.48 2.12zM13 28a1 1 0 0 0 0 2h17a1 1 0 0 0 0-2m0-1a1 1 0 0 1 0 4H13a1 1 0 0 1 0-4m6 3.5a1 1 0 0 0 5 0h1a1 1 0 0 1-7 0"/></svg>'
        },
        232064: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m14.5 10a4.5 4.5 0 0 0-4.5 4.5v17.2l4.7-4.7h10.8a4.5 4.5 0 0 0 4.5-4.5v-8a4.5 4.5 0 0 0-4.5-4.5zm0 1h11a3.5 3.5 0 0 1 3.5 3.5v8a3.5 3.5 0 0 1-3.5 3.5H14.3L11 29.3V14.5a3.5 3.5 0 0 1 3.5-3.5zm15 5v1h1a2.5 2.5 0 0 1 2.5 2.5v12.8L29.7 29h-8.2a2.5 2.5 0 0 1-2.5-2.5h-1a3.5 3.5 0 0 0 3.5 3.5h7.8l4.7 4.7V19.5a3.5 3.5 0 0 0-3.5-3.5z"/></svg>'
        },
        481891: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m21.5 10a3.5 3.5 0 0 0-3.5 3.5v3h1v-3a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-1v1h1a3.5 3.5 0 0 0 3.5-3.5v-3a3.5 3.5 0 0 0-3.5-3.5zm-7 6a4.5 4.5 0 0 0-4.5 4.5v13.2l4.7-4.7h10.8a4.5 4.5 0 0 0 4.5-4.5v-4a4.5 4.5 0 0 0-4.5-4.5zm0 1h11a3.5 3.5 0 0 1 3.5 3.5v4a3.5 3.5 0 0 1-3.5 3.5H14.3L11 31.3V20.5a3.5 3.5 0 0 1 3.5-3.5zm15 5v1h1a2.5 2.5 0 0 1 2.5 2.5v8.8L29.7 31h-8.2a2.5 2.5 0 0 1-2.5-2.5h-1a3.5 3.5 0 0 0 3.5 3.5h7.8l4.7 4.7V25.5a3.5 3.5 0 0 0-3.5-3.5z"/></svg>'
        },
        178911: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m18 18v-.5c0-1.2.6-2 1.5-2.7.8-.5 2-.8 3-.8s2.2.3 3 .8c.9.6 1.5 1.5 1.5 2.7a4 4 0 0 1-1.3 2.8l-2.3 2c-.3.3-.4.6-.4 1.2v.5h-1v-.5c0-.8.2-1.4.6-1.9l2.4-2c.6-.7 1-1.3 1-2.1a2 2 0 0 0-1-1.8c-.7-.5-1.6-.7-2.5-.7-1 0-1.8.2-2.5.7-.6.4-1 1-1 1.8v.5m3.5 8a1 1 0 0 0 0 5 1 1 0 0 0 0-5m0 1a1 1 0 0 1 0 3 1 1 0 0 1 0-3m0-17a1 1 0 0 0 0 25 1 1 0 0 0 0-25m0 1a1 1 0 0 1 0 23 1 1 0 0 1 0-23"/></svg>'
        },
        525336: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width="45" height="45" fill="none"><path fill="currentcolor" fill-rule="evenodd" clip-rule="evenodd" d="M14.25 23.02a8.76 8.76 0 0 1 3.6-7.09l-.51-.87a9.76 9.76 0 0 0-.05 15.88l.5-.88a8.76 8.76 0 0 1-3.54-7.04zm17.5 0c0 2.89-1.39 5.45-3.54 7.04l.5.87a9.76 9.76 0 0 0-.05-15.87l-.5.87a8.76 8.76 0 0 1 3.6 7.09zM9 23.02c0 4.83 2.44 9.1 6.16 11.61l-.5.87a15.01 15.01 0 0 1 .05-25l.5.87A14.01 14.01 0 0 0 9 23.02zm21.84 11.61l.5.87a15.01 15.01 0 0 0-.05-25l-.5.87a14.01 14.01 0 0 1 .05 23.26zm-9.2-8.03l5.6-3.23a1 1 0 0 0 0-1.74l-5.6-3.23a1 1 0 0 0-1.5.87v6.46a1 1 0 0 0 1.5.87zm-.5-7.33l5.6 3.23-5.6 3.23v-6.46z"/></svg>'
        },
        197944: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width="45" height="45"><path fill="currentcolor" d="M16.5 21.5l8.146 8.146a.914.914 0 0 1-1.292 1.293L16.5 24.086l-6.854 6.853a.914.914 0 0 1-1.292-1.293L16.5 21.5zm0 4l6.146 6.146a1.914 1.914 0 0 0 2.708-2.707L16.5 20.086l-8.854 8.853a1.914 1.914 0 1 0 2.708 2.707L16.5 25.5zm13 0l8.146-8.146a.914.914 0 0 0-1.292-1.293L29.5 22.914l-6.854-6.853a.914.914 0 0 0-1.292 1.293L29.5 25.5zm0-4l6.146-6.146a1.914 1.914 0 0 1 2.708 2.707L29.5 26.914l-8.854-8.853a1.914 1.914 0 1 1 2.708-2.707L29.5 21.5z"/></svg>'
        },
        191085: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m29.5 11a4.5 4.5 0 0 1 4.5 4.5v14a4.5 4.5 0 0 1-4.5 4.5h-15a4.5 4.5 0 0 1-4.5-4.5v-14a4.5 4.5 0 0 1 4.5-4.5m0 1a3.5 3.5 0 0 0-3.5 3.5v14a3.5 3.5 0 0 0 3.5 3.5h15a3.5 3.5 0 0 0 3.5-3.5v-14a3.5 3.5 0 0 0-3.5-3.5M15 17v-1h14v1zm0 4v-1h14v1zm0 4v-1h14v1zm0 4v-1h14v1z"/></svg>'
        }
    }
]);