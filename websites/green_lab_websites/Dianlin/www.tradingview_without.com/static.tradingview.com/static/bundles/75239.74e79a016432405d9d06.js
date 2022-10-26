(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [75239], {
        380847: e => {
            e.exports = {
                "card-exterior": "card-exterior-RYyl75pN"
            }
        },
        894731: e => {
            e.exports = {
                "css-value-categories-width": "252px",
                "css-value-subcategories-width": "220px",
                "css-value-extra-width": "252px"
            }
        },
        658889: e => {
            e.exports = {
                "css-value-categories-width": "252px",
                "css-value-subcategories-width": "220px",
                "css-value-extra-width": "252px",
                menuBox: "menuBox-ml2L5a_a",
                reversed: "reversed-ml2L5a_a",
                menuWrap: "menuWrap-ml2L5a_a",
                scrollWrap: "scrollWrap-ml2L5a_a",
                categories: "categories-ml2L5a_a",
                menuItem: "menuItem-ml2L5a_a",
                menuItemHeader: "menuItemHeader-ml2L5a_a",
                categoriesBroker: "categoriesBroker-ml2L5a_a",
                categoriesExtra: "categoriesExtra-ml2L5a_a",
                subcategories: "subcategories-ml2L5a_a",
                extra: "extra-ml2L5a_a",
                freeBlock: "freeBlock-ml2L5a_a",
                active: "active-ml2L5a_a",
                badge: "badge-ml2L5a_a",
                icon: "icon-ml2L5a_a",
                dropArrow: "dropArrow-ml2L5a_a",
                description: "description-ml2L5a_a",
                rowMenuItem: "rowMenuItem-ml2L5a_a",
                menuItemInfo: "menuItemInfo-ml2L5a_a",
                indentTop: "indentTop-ml2L5a_a",
                alignStart: "alignStart-ml2L5a_a"
            }
        },
        229536: e => {
            e.exports = {
                banner: "banner-Wbe7dz0V",
                "not-blue": "not-blue-Wbe7dz0V",
                text: "text-Wbe7dz0V",
                icon: "icon-Wbe7dz0V"
            }
        },
        973610: e => {
            e.exports = {
                logo: "logo-vovYtbAz",
                info: "info-vovYtbAz",
                name: "name-vovYtbAz",
                ratingWrapper: "ratingWrapper-vovYtbAz",
                rating: "rating-vovYtbAz",
                starsWrapper: "starsWrapper-vovYtbAz",
                badge: "badge-vovYtbAz"
            }
        },
        964608: e => {
            e.exports = {
                article: "article-c3pSqO54",
                title: "title-c3pSqO54",
                breadcrumbs: "breadcrumbs-c3pSqO54"
            }
        },
        731210: e => {
            e.exports = {
                item: "item-DER27mDm"
            }
        },
        104577: e => {
            e.exports = {
                title: "title-IpaUO_rU",
                condensed: "condensed-IpaUO_rU"
            }
        },
        5880: e => {
            e.exports = {
                ticker: "ticker-HgNoSjR6",
                text: "text-HgNoSjR6",
                head: "head-HgNoSjR6",
                body: "body-HgNoSjR6",
                title: "title-HgNoSjR6",
                logo: "logo-HgNoSjR6",
                lastWrapper: "lastWrapper-HgNoSjR6",
                last: "last-HgNoSjR6",
                change: "change-HgNoSjR6",
                growing: "growing-HgNoSjR6",
                up: "up-HgNoSjR6",
                falling: "falling-HgNoSjR6",
                down: "down-HgNoSjR6",
                customIcon: "customIcon-HgNoSjR6"
            }
        },
        681525: e => {
            e.exports = {
                article: "article-C9RvkKmg",
                important: "important-C9RvkKmg",
                container: "container-C9RvkKmg",
                title: "title-C9RvkKmg",
                header: "header-C9RvkKmg",
                logoStack: "logoStack-C9RvkKmg",
                breadcrumbs: "breadcrumbs-C9RvkKmg",
                externalLink: "externalLink-C9RvkKmg"
            }
        },
        752434: e => {
            e.exports = {
                card: "card-gaCYEutU",
                noHover: "noHover-gaCYEutU",
                cardLink: "cardLink-gaCYEutU"
            }
        },
        991294: e => {
            e.exports = {}
        },
        686361: e => {
            e.exports = {
                pill: "pill-d4h2imx1",
                color: "color-d4h2imx1",
                orange: "orange-d4h2imx1 color-d4h2imx1",
                gray: "gray-d4h2imx1 color-d4h2imx1",
                green: "green-d4h2imx1 color-d4h2imx1",
                blue: "blue-d4h2imx1 color-d4h2imx1"
            }
        },
        572083: e => {
            e.exports = {
                menuWrap: "menuWrap-biWYdsXC",
                isMeasuring: "isMeasuring-biWYdsXC",
                scrollWrap: "scrollWrap-biWYdsXC",
                momentumBased: "momentumBased-biWYdsXC",
                menuBox: "menuBox-biWYdsXC",
                isHidden: "isHidden-biWYdsXC"
            }
        },
        26895: (e, t, n) => {
            "use strict";
            n.d(t, {
                CardExterior: () => s
            });
            var r = n(559496),
                o = n(497754),
                a = n(380847),
                i = n.n(a);

            function s(e) {
                const {
                    children: t,
                    className: n,
                    onClick: a,
                    ...s
                } = e;
                return r.createElement("article", { ...s,
                    className: o(i()["card-exterior"], n),
                    onClick: a
                }, t)
            }
        },
        52120: (e, t, n) => {
            "use strict";
            n.d(t, {
                isRatingFilter: () => o,
                castToRating: () => a,
                getRatingNaming: () => i
            });
            var r = n(575932);

            function o(e) {
                return "number" == typeof e && [1, 2, 3, 4, 5].includes(e)
            }

            function a(e) {
                return 0 === e ? 0 : (e = Math.max(1, Math.min(5, e)), Math.round(2 * e) / 2)
            }

            function i(e) {
                return new Map([
                    [1, r.t("Bad")],
                    [2, r.t("Poor")],
                    [3, r.t("Average")],
                    [4, r.t("Great")],
                    [5, r.t("Excellent")]
                ]).get(function(e) {
                    if (e <= 0) return 0;
                    return (e = Math.max(1, Math.min(5, e))) <= 4.5 ? Math.floor(e) : Math.ceil(e)
                }(e)) || ""
            }
        },
        130590: (e, t, n) => {
            "use strict";
            n.d(t, {
                useBackStackReset: () => a,
                useCloseOnLoginChange: () => i,
                useCloseOnHamburgerButtonBreakpoint: () => s
            });
            var r = n(559496),
                o = n(586240);

            function a(e, t) {
                (0, r.useEffect)((() => {
                    e || t()
                }), [e])
            }

            function i(e) {
                (0, r.useEffect)((() => (window.loginStateChange.subscribe(null, e), () => {
                    window.loginStateChange.unsubscribe(null, e)
                })), [e])
            }

            function s(e) {
                (0, r.useEffect)((() => {
                    const t = window.matchMedia(o["media-mf-laptop"]);
                    return t.addListener(e), () => {
                        t.removeListener(e)
                    }
                }), [e])
            }
        },
        941887: (e, t, n) => {
            "use strict";
            n.d(t, {
                icons: () => E,
                description: () => x
            });
            var r = n(575932),
                o = n(404052),
                a = n(786724),
                i = n(377135),
                s = n(543325),
                l = n(777567),
                c = n(125818),
                d = n(898304),
                u = n(656394),
                h = n(506054),
                m = n(154591),
                p = n(681260),
                g = n(494458),
                v = n(753804),
                f = n(183993),
                w = n(82556),
                b = n(953943);
            const E = {
                    "products-chart": o,
                    "products-screeners": g,
                    "products-heatmaps": c,
                    "community-streams": w,
                    "community-ideas": u,
                    "community-education": s,
                    "community-scripts": v,
                    "markets-research-sparks": f,
                    "markets-research-countries": a,
                    "markets-research-world-economy": b,
                    "news-snaps": h,
                    "news-flow": p,
                    "more-help-center": d,
                    "more-desktop-app": i,
                    "more-mobile-app": m,
                    "more-for-business": l
                },
                x = {
                    "products-chart": (0, r.t)("Often imitated, never duplicated"),
                    "products-screeners": (0, r.t)("Find anything, anywhere"),
                    "products-heatmaps": (0, r.t)("See the lay of the land"),
                    "community-streams": (0, r.t)("Trading, as it happens"),
                    "community-ideas": (0, r.t)("Don't reinvent the wheel"),
                    "community-education": (0, r.t)("I don't need to learn, said nobody ever"),
                    "community-scripts": (0, r.t)("Sorta like the moon landing computations"),
                    "markets-research-sparks": (0, r.t)("Highly-researched lists for the discerning deep-diver"),
                    "markets-research-countries": (0, r.t)("All the world's a trade"),
                    "markets-research-world-economy": (0, r.t)("The only unfettered global view"),
                    "news-snaps": (0, r.t)("Sassy updates for time-poor traders"),
                    "news-flow": (0, r.t)("What's happening, right now"),
                    "more-help-center": (0, r.t)("It's all here"),
                    "more-desktop-app": (0, r.t)("Your terminal to success, we hope"),
                    "more-mobile-app": (0, r.t)("Planet Earth's highest-rated finance app"),
                    "more-for-business": (0, r.t)("Sharing the tech, sharing the wealth")
                }
        },
        544017: (e, t, n) => {
            "use strict";
            n.d(t, {
                sparksBannerType: () => a,
                getMainMenuCategories: () => s
            });
            var r = n(588537),
                o = n(588948);
            const a = new Set(["big-tech-stocks-a-brave-new-world", "cannabis-stocks-lets-get-high-returns", "electric-vehicle-stocks-ev-cars-and-trucks", "luxury-fashion-stocks-house-of-style", "metaverse-stocks-real-gains", "self-drive-stocks-cars-of-the-future", "space-stocks-to-infinity-and-beyond"]);
            let i = null;

            function s() {
                return i || (i = (0, r.ensureDefined)((0, o.getFreshInitData)().mainMenuCategories)), i
            }
        },
        824510: (e, t, n) => {
            "use strict";
            n.d(t, {
                MainMenuSection: () => s
            });
            var r = n(559496),
                o = n(497754),
                a = n.n(o),
                i = n(104577);

            function s(e) {
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: a()(i.title, e.isCondensed && i.condensed)
                }, e.title), e.children)
            }
        },
        197642: (e, t, n) => {
            "use strict";
            n.d(t, {
                CARD_CONTENT_DEFAULT_THEME: () => h,
                HeadlineCard: () => g
            });
            var r = n(559496),
                o = n(497754),
                a = n(470316),
                i = n(83436),
                s = n(26895),
                l = n(816770),
                c = n(604244),
                d = n(681525),
                u = n.n(d);
            const h = u();

            function m(e) {
                const {
                    breadcrumbs: t,
                    className: n,
                    logoUrlsOrSymbols: a,
                    showExternalLink: d,
                    title: m,
                    urgency: p,
                    onClick: g,
                    theme: v = h
                } = e;
                return r.createElement(s.CardExterior, {
                    className: o(v.article, n, 1 === p && u().important),
                    onClick: g
                }, r.createElement("div", {
                    className: u().container
                }, r.createElement("div", {
                    className: v.header
                }, 0 !== a.length && r.createElement(l.CircleLogoStack, {
                    logoUrlsOrSymbols: a,
                    className: v.logoStack
                }), r.createElement("span", {
                    className: v.breadcrumbs
                }, t.map(((e, t) => r.createElement(r.Fragment, {
                    key: t
                }, e)))), d && r.createElement(i.Icon, {
                    className: v.externalLink,
                    icon: c
                })), r.createElement("span", {
                    className: v.title
                }, m)))
            }
            var p = n(752434);

            function g(e) {
                const t = {
                        breadcrumbs: e.breadcrumbs,
                        showExternalLink: e.showExternalLink,
                        logoUrlsOrSymbols: e.logoUrlsOrSymbols,
                        title: e.title,
                        theme: e.cardContentTheme,
                        urgency: e.urgency
                    },
                    n = e.isButton ? "div" : "a",
                    i = e.isButton ? {
                        role: "button",
                        tabIndex: 0,
                        onKeyDown: function(t) {
                            e.onAction && 13 === (0, a.hashFromEvent)(t) && e.onAction(t)
                        },
                        onContextMenu: function(e) {
                            e.preventDefault()
                        }
                    } : {
                        href: e.link,
                        target: e.linkTarget
                    };
                return r.createElement(n, { ...i,
                    className: o(p.card, p.cardLink, !e.withHover && p.noHover),
                    onClick: e.onAction
                }, r.createElement(m, { ...t
                }))
            }
        },
        701701: (e, t, n) => {
            "use strict";
            n.d(t, {
                ContentPage: () => d
            });
            var r = n(262325),
                o = n.n(r),
                a = n(581996),
                i = n(484443),
                s = n(554433),
                l = n(531327),
                c = n(586240);
            class d {
                constructor(e) {
                    this._width = new(o()), this._window = e
                }
                allocate(e) {
                    const t = e && e.areaName;
                    if ("right" !== t) throw new Error("unknown options.areaName");
                    this.free(t), this._visibilityApi = new s.VisibilityApi(this._window.document);
                    const n = this._createDOM(t),
                        r = {
                            alive: new(o())(!0),
                            container: new(o())(n),
                            width: new(o()),
                            height: new(o()),
                            availWidth: new(o()),
                            availHeight: new(o()),
                            visible: this._visibilityApi.isVisible,
                            fullscreen: new(o()),
                            remove: () => {
                                r.alive.setValue(!1)
                            },
                            negotiations: {
                                width: []
                            },
                            negotiateWidth: e => {
                                const t = (0, i.processNegotiation)(e);
                                (0, i.negotiationsAreEqual)(r.negotiations.width, t) || (r.negotiations.width = t, this.recalculate())
                            },
                            requestFullscreen: () => {
                                this._fullscreenArea || (this._fullscreenArea = t, this._resizeHandler && this._resizeHandler(), this.recalculate())
                            },
                            exitFullscreen: () => {
                                this._fullscreenArea === t && (this._fullscreenArea = void 0, this.recalculate())
                            }
                        };
                    return r.alive.subscribe((e => {
                        e || r !== this._area || this.free("right")
                    })), this._area = r, this._resizeHandler = e => {
                        if (e) {
                            if ((e.detail && e.detail.emittedBy) === this) return
                        }
                        const t = this._window.document,
                            n = t.documentElement.clientWidth,
                            o = t.documentElement.clientHeight;
                        r.height.value() === o && this._width.value() === n || (r.height.setValue(o), this._width.setValue(n), this.recalculate())
                    }, this._resizeHandler(), this._window.addEventListener("resize", this._resizeHandler), this._window.document.body.insertAdjacentElement("afterbegin", n), new a.ResizerDetacherState(r).bridge()
                }
                free(e) {
                    if ("right" !== e) throw new Error("unknown areaName");
                    const t = this._area;
                    if (!t) return;
                    this._area = void 0;
                    const n = t.container.value();
                    n && n.parentElement && n.parentElement.removeChild(n), t.alive.setValue(!1), this._resizeHandler && (this._window.removeEventListener("resize", this._resizeHandler), this._resizeHandler = void 0), this._visibilityApi && (this._visibilityApi.destroy(), this._visibilityApi = void 0), this._setBodyPadding(0)
                }
                recalculate() {
                    const e = {};
                    this._recalcSingleRunToken = e;
                    const t = this._area;
                    if (!t) return;
                    let n;
                    if ("right" === this._fullscreenArea) t.availWidth.setValue(1 / 0), n = this._width.value();
                    else {
                        let r = 0;
                        if ((0, l.isWidgetBarFullscreen)() || window.TradingView.onChartPage || (r = 450), t.availWidth.setValue(r), e !== this._recalcSingleRunToken) return;
                        n = (0, i.determineSize)(r, t.negotiations.width)
                    }
                    t.width.setValue(n), t.fullscreen.setValue("right" === this._fullscreenArea), this._fullscreenArea || this._setBodyPadding((0, l.getWidgetBarPadding)(n));
                    const r = t.container.value();
                    r && (r.style.width = n + "px")
                }
                _createDOM(e) {
                    const t = document.createElement("div");
                    return t.classList.add("layout__area--" + e), t.style.position = "fixed", t.style.webkitTransform = "translateZ(0)", t.style.top = "0", t.style.height = "100%", t.style.right = "0", t.style.zIndex = String(c["z-index-sticky-search-bar"] + 1), t
                }
                _setBodyPadding(e) {
                    this._prevBodyPadding !== e && (this._prevBodyPadding = e, this._window.document.body.style.paddingRight = e + "px", this._window.dispatchEvent(new CustomEvent("resize", {
                        detail: {
                            emittedBy: this
                        }
                    })))
                }
            }
        },
        349896: (e, t, n) => {
            "use strict";
            var r, o, a;
            n.d(t, {
                    Size: () => r,
                    StarFill: () => o,
                    StarColor: () => a
                }),
                function(e) {
                    e.Small = "small", e.Medium = "medium", e.Large = "large"
                }(r || (r = {})),
                function(e) {
                    e.Full = "full", e.Half = "half", e.Empty = "empty", e.Hidden = "hidden"
                }(o || (o = {})),
                function(e) {
                    e.Blue = "blue", e.White = "white"
                }(a || (a = {}))
        },
        601663: (e, t, n) => {
            "use strict";
            n.d(t, {
                Star: () => c,
                isEmptyFillStar: () => g,
                getGradientId: () => v
            });
            var r = n(559496),
                o = n(497754),
                a = n.n(o),
                i = n(588537),
                s = n(95935),
                l = n(349896);

            function c(e) {
                const {
                    starFill: t,
                    size: n,
                    color: o = l.StarColor.Blue,
                    disabled: i,
                    id: s,
                    onClick: c
                } = e, m = !i && function(e) {
                    return e === l.StarFill.Full
                }(t), p = !i && function(e) {
                    return e === l.StarFill.Half
                }(t), g = function(e) {
                    return e === l.StarFill.Hidden
                }(t), v = p ? s : void 0;
                return r.createElement("span", {
                    className: a()("tv-stars-rating-block__item", `tv-stars-rating-block__item--color-${o}`, m && "tv-stars-rating-block__item--fill", g && "tv-stars-rating-block__item--hidden", `tv-stars-rating-block__item--${n}`, i && "tv-stars-rating-block__item--disabled"),
                    onClick: c
                }, n === l.Size.Large ? r.createElement(h, {
                    gradientId: v
                }) : n === l.Size.Small ? r.createElement(d, {
                    gradientId: v
                }) : r.createElement(u, {
                    gradientId: v
                }))
            }

            function d(e) {
                const t = e.gradientId ? p(e.gradientId) : void 0;
                return r.createElement("svg", {
                    width: "16",
                    height: "15",
                    viewBox: "0 0 16 15",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: t
                }, t && r.createElement(m, {
                    gradientId: (0, i.ensureDefined)(e.gradientId)
                }), r.createElement("path", {
                    d: "M8 1.12l2.03 4.04.11.24.26.03 4.51.65-3.26 3.13-.19.19.05.26.77 4.43L8.23 12 8 11.87l-.23.12-4.05 2.1.77-4.43.05-.26-.2-.19L1.1 6.08l4.5-.65.27-.03.11-.24L8 1.12z"
                }))
            }

            function u(e) {
                const t = e.gradientId ? p(e.gradientId) : void 0;
                return r.createElement("svg", {
                    width: "19",
                    height: "17",
                    viewBox: "0 0 19 17",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: t
                }, t && r.createElement(m, {
                    gradientId: (0, i.ensureDefined)(e.gradientId)
                }), r.createElement("path", {
                    d: "M9.7.1113l2.7742 5.4864 6.2035.8797-4.4889 4.2705 1.0597 6.0301-5.5486-2.847-5.5485 2.847 1.0597-6.0301L.722 6.4774l6.2036-.8797L9.6999.1113z"
                }))
            }

            function h(e) {
                const t = e.gradientId ? p(e.gradientId) : void 0;
                return r.createElement("svg", {
                    width: "30",
                    height: "28",
                    viewBox: "0 0 30 28",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: t
                }, t && r.createElement(m, {
                    gradientId: (0, i.ensureDefined)(e.gradientId)
                }), r.createElement("path", {
                    d: "M15.01 1l3.86 7.64c.3.59.87.99 1.51 1.08L29 10.94l-6.2 5.9a2 2 0 00-.6 1.8L23.68 27a.04.04 0 01-.01.01h-.01l-7.73-3.97a2 2 0 00-1.84 0L6.35 27h-.02l1.47-8.36a2 2 0 00-.59-1.8l-6.2-5.9 8.6-1.22c.65-.1 1.22-.5 1.52-1.08L14.99 1a.04.04 0 01.02 0z",
                    strokeWidth: 2
                }))
            }

            function m(e) {
                return r.createElement("defs", null, r.createElement("linearGradient", {
                    id: e.gradientId
                }, r.createElement("stop", {
                    offset: "50%",
                    className: "stop-color-left"
                }), r.createElement("stop", {
                    offset: "50%",
                    className: "stop-color-right"
                })))
            }

            function p(e) {
                return {
                    fill: `url('#${e}')`
                }
            }

            function g(e) {
                return e === l.StarFill.Empty
            }

            function v(e, t) {
                return e && t ? `tv-star-rating-linear-gradient-50-${e}-${t}` : `tv-star-rating-linear-gradient-50-${(0,s.randomHashN)(4)}`
            }
        },
        874909: (e, t, n) => {
            "use strict";
            n.d(t, {
                StarsRating: () => c
            });
            var r = n(559496),
                o = n(497754),
                a = n.n(o),
                i = n(349896),
                s = n(601663),
                l = n(52120);
            n(991294);

            function c(e) {
                const {
                    rating: t,
                    size: n,
                    id: o,
                    isInteractive: c,
                    disabled: d,
                    hideEmptyStars: u,
                    className: h,
                    color: m,
                    onClick: p
                } = e, g = [], v = (0, l.castToRating)(t);
                for (let e = 5; e > 0; e--) {
                    let t = e <= v ? i.StarFill.Full : i.StarFill.Empty;
                    const a = (0, s.getGradientId)(o, e);
                    let h;
                    if ((0, s.isEmptyFillStar)(t) && (t = Math.abs(e - v) <= .5 ? i.StarFill.Half : i.StarFill.Empty, u && (0, s.isEmptyFillStar)(t) && (t = i.StarFill.Hidden)), !d && c && p) {
                        const t = (0, l.castToRating)(e);
                        h = () => p(t)
                    }
                    g.push(r.createElement(s.Star, {
                        key: e,
                        id: a,
                        onClick: h,
                        starFill: t,
                        size: n,
                        color: m,
                        disabled: d
                    }))
                }
                return r.createElement("span", {
                    className: a()(h, "tv-stars-rating-block", c && "tv-stars-rating-block--interactive")
                }, g)
            }
        },
        531327: (e, t, n) => {
            "use strict";

            function r(e) {
                return o() ? 0 : a() ? 46 : Math.min(Math.max(e, 46), 450)
            }
            n.d(t, {
                getWidgetBarPadding: () => r,
                isWidgetBarFullscreen: () => o
            });
            const o = () => !window.matchMedia("screen and (min-width: 768px)").matches,
                a = () => !window.matchMedia("screen and (min-width: 1280px)").matches
        },
        654554: (e, t, n) => {
            "use strict";
            n.d(t, {
                VerticalAttachEdge: () => r,
                HorizontalAttachEdge: () => o,
                VerticalDropDirection: () => a,
                HorizontalDropDirection: () => i,
                getPopupPositioner: () => c
            });
            var r, o, a, i, s = n(588537);
            ! function(e) {
                e[e.Top = 0] = "Top", e[e.Bottom = 1] = "Bottom"
            }(r || (r = {})),
            function(e) {
                e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
            }(o || (o = {})),
            function(e) {
                e[e.FromTopToBottom = 0] = "FromTopToBottom", e[e.FromBottomToTop = 1] = "FromBottomToTop"
            }(a || (a = {})),
            function(e) {
                e[e.FromLeftToRight = 0] = "FromLeftToRight", e[e.FromRightToLeft = 1] = "FromRightToLeft"
            }(i || (i = {}));
            const l = {
                verticalAttachEdge: r.Bottom,
                horizontalAttachEdge: o.Left,
                verticalDropDirection: a.FromTopToBottom,
                horizontalDropDirection: i.FromLeftToRight,
                verticalMargin: 0,
                horizontalMargin: 0,
                matchButtonAndListboxWidths: !1
            };

            function c(e, t) {
                return (n, c) => {
                    const d = (0, s.ensureNotNull)(e).getBoundingClientRect(),
                        {
                            verticalAttachEdge: u = l.verticalAttachEdge,
                            verticalDropDirection: h = l.verticalDropDirection,
                            horizontalAttachEdge: m = l.horizontalAttachEdge,
                            horizontalDropDirection: p = l.horizontalDropDirection,
                            horizontalMargin: g = l.horizontalMargin,
                            verticalMargin: v = l.verticalMargin,
                            matchButtonAndListboxWidths: f = l.matchButtonAndListboxWidths
                        } = t,
                        w = u === r.Top ? -1 * v : v,
                        b = m === o.Right ? d.right : d.left,
                        E = u === r.Top ? d.top : d.bottom,
                        x = {
                            x: b - (p === i.FromRightToLeft ? n : 0) + g,
                            y: E - (h === a.FromBottomToTop ? c : 0) + w
                        };
                    return f && (x.overrideWidth = d.width), x
                }
            }
        },
        875239: (e, t, n) => {
            "use strict";
            n.r(t);
            n(94772);
            var r = n(559496),
                o = n(18182),
                a = n(587995),
                i = n(470316);

            function s(e, t = {}) {
                return n => {
                    let o = !1;
                    const s = document.createElement("div"),
                        l = function(e, t) {
                            if (e.matches(":hover")) return t(), () => {};
                            return e.addEventListener("touchstart", t, {
                                passive: !0,
                                once: !0
                            }), e.addEventListener("mouseover", t, {
                                once: !0
                            }), () => {
                                e.removeEventListener("touchstart", t), e.addEventListener("mouseover", t)
                            }
                        }(n, p);
                    return n.addEventListener("click", c), n.addEventListener("keydown", m), () => {
                        l(), a.unmountComponentAtNode(s), n.removeEventListener("click", c), n.removeEventListener("keydown", m)
                    };

                    function c(e) {
                        const t = 0 === e.detail;
                        o ? u(t) : d(t)
                    }

                    function d(e = !1) {
                        o = !0, n.setAttribute("aria-expanded", "true"), p(e)
                    }

                    function u(e = !1) {
                        o = !1, n.setAttribute("aria-expanded", "false"), t.restoreFocus && e && n.focus(), p(e)
                    }

                    function h() {
                        t.restoreFocus && n.focus()
                    }

                    function m(e) {
                        if (!t.handleArrowKeys) return;
                        const n = (0, i.hashFromEvent)(e);
                        40 === n ? (d(!0), e.preventDefault()) : 38 === n && (u(!0), e.preventDefault())
                    }

                    function p(t = !1) {
                        a.render(r.createElement(e, {
                            buttonEl: n,
                            onClose: u,
                            onKeyboardClose: h,
                            isOpened: o,
                            showFocusRing: t
                        }), s), n.classList.toggle("i-dropped", o)
                    }
                }
            }
            var l = n(654554),
                c = n(143498);
            const d = (0, c.isRtl)() ? {
                horizontalAttachEdge: l.HorizontalAttachEdge.Right,
                horizontalDropDirection: l.HorizontalDropDirection.FromRightToLeft
            } : {
                horizontalAttachEdge: l.HorizontalAttachEdge.Left,
                horizontalDropDirection: l.HorizontalDropDirection.FromLeftToRight
            };

            function u(e) {
                const t = (0, l.getPopupPositioner)(e, { ...d,
                    verticalMargin: 10
                });
                return (e, n) => {
                    const r = t(e, n),
                        {
                            clientWidth: o,
                            clientHeight: a
                        } = document.documentElement,
                        i = r.x + e,
                        s = o - ((null === (l = window.widgetbar) || void 0 === l ? void 0 : l.resizerBridge.width.value()) || 0);
                    var l;
                    i > s && (r.x -= i - s);
                    const c = a - r.y - 48;
                    return n > c && (r.overrideHeight = c), r
                }
            }
            var h = n(130590),
                m = n(586240);
            const p = m["media-phone-vertical"],
                g = m["media-mf-tablet-landscape"],
                v = r.lazy((async () => ({
                    default: (await Promise.all([n.e(90519), n.e(37135), n.e(37619), n.e(29331), n.e(33216), n.e(24817), n.e(89587), n.e(32836), n.e(86193), n.e(7201), n.e(69907), n.e(85279), n.e(15995), n.e(2875), n.e(25305)]).then(n.bind(n, 17911))).UserDropdownMenu
                }))),
                f = r.lazy((async () => ({
                    default: (await Promise.all([n.e(90519), n.e(90926), n.e(37135), n.e(8834), n.e(30063), n.e(80580), n.e(68074), n.e(52498), n.e(37619), n.e(29331), n.e(33216), n.e(24817), n.e(89587), n.e(32836), n.e(86193), n.e(57561), n.e(7201), n.e(69907), n.e(67040), n.e(92697), n.e(15995), n.e(2875), n.e(73204)]).then(n.bind(n, 419441))).UserDialogMenu
                }))),
                w = r.lazy((async () => ({
                    default: (await Promise.all([n.e(90519), n.e(37135), n.e(68074), n.e(37619), n.e(29331), n.e(33216), n.e(24817), n.e(89587), n.e(32836), n.e(86193), n.e(57561), n.e(7201), n.e(69907), n.e(93088), n.e(15995), n.e(2875), n.e(66208)]).then(n.bind(n, 673717))).UserBackStackDropdownMenu
                })));
            const b = s((function(e) {
                const {
                    isOpened: t,
                    onClose: n,
                    onKeyboardClose: a,
                    buttonEl: i,
                    showFocusRing: s
                } = e, l = (0, r.useMemo)((() => u(i)), [i]);
                return (0, h.useCloseOnLoginChange)(n), r.createElement(o.MatchMedia, {
                    rule: p
                }, (e => r.createElement(o.MatchMedia, {
                    rule: g
                }, (o => r.createElement(r.Suspense, {
                    fallback: null
                }, e ? r.createElement(f, {
                    onClose: n,
                    onKeyboardClose: a,
                    isOpened: t,
                    showFocusRing: s
                }) : o ? r.createElement(v, {
                    onClose: n,
                    onKeyboardClose: a,
                    isOpened: t,
                    position: l,
                    doNotCloseOn: i,
                    showFocusRing: s
                }) : r.createElement(w, {
                    onClose: n,
                    onKeyboardClose: a,
                    isOpened: t,
                    position: l,
                    doNotCloseOn: i,
                    showFocusRing: s
                }))))))
            }), {
                restoreFocus: !0,
                handleArrowKeys: !0
            });
            var E = n(588537),
                x = n(894731);
            const y = (0, c.isRtl)() ? {
                    horizontalAttachEdge: l.HorizontalAttachEdge.Right,
                    horizontalDropDirection: l.HorizontalDropDirection.FromRightToLeft
                } : {
                    horizontalAttachEdge: l.HorizontalAttachEdge.Left,
                    horizontalDropDirection: l.HorizontalDropDirection.FromLeftToRight
                },
                C = parseInt(x["css-value-categories-width"]);
            var k = n(345848);

            function M(e, t) {
                (0, k.trackEvent)("Main menu", e, t)
            }
            var _ = n(497754),
                S = n(83436),
                z = n(995683),
                H = n(45968),
                L = n(175071),
                N = n(581715),
                A = n(899156),
                D = n(544017),
                T = n(941887),
                B = n(147559),
                R = n(84504),
                V = n(119298),
                O = n(735862),
                I = n(251399),
                F = n(564930),
                W = n(155381),
                P = n(191749),
                Z = n(686547),
                j = n(594653),
                U = n(180852),
                Y = n(765190),
                q = n(464175),
                K = n(748224);
            const G = {
                "broker-awards": B,
                "brokers-compare-review": I,
                "big-tech-stocks-a-brave-new-world": Y,
                "cannabis-stocks-lets-get-high-returns": q,
                "electric-vehicle-stocks-ev-cars-and-trucks": n(354345),
                "luxury-fashion-stocks-house-of-style": n(974194),
                "metaverse-stocks-real-gains": n(627123),
                "self-drive-stocks-cars-of-the-future": K,
                "space-stocks-to-infinity-and-beyond": n(408393),
                candles: V,
                calendar: R,
                code: O,
                education: F,
                feeds: W,
                financials: P,
                question: Z,
                screener: j,
                technicals: U
            };
            let X = null;

            function $() {
                return X || (X = Q((0, D.getMainMenuCategories)(), !0)), X
            }
            const J = new Set(["markets-all"]);

            function Q(e, t) {
                const n = [];
                for (const r of e)
                    if ("section" in r) n.push({
                        section: r.section,
                        banners: ee(r),
                        children: Q(r.children, !1)
                    });
                    else {
                        if (r.id && J.has(r.id)) continue;
                        n.push({ ...(0,
                                A.default)(r, ["id", "name", "new", "url", "target", "rel", "watchlists"]),
                            children: r.children && Q(r.children, !1),
                            banners: ee(r),
                            rootTrackId: t ? r.id : void 0,
                            trackLabel: r.url,
                            icon: r.id && T.icons[r.id],
                            className: "more-mobile-app" === r.id ? "js-mobile-app" : void 0,
                            description: r.id && T.description[r.id]
                        })
                    }
                return n
            }

            function ee(e) {
                var t;
                return e.banners ? null === (t = e.banners) || void 0 === t ? void 0 : t.map((e => ({ ...(0, A.default)(e, ["text", "url", "rel", "target", "type"]),
                    icon: G[e.type],
                    headlineData: e.headline_data,
                    brokerData: e.broker_data && { ...e.broker_data,
                        user: { ...e.broker_data.user,
                            pictureUrl: e.broker_data.user.picture_url
                        },
                        logoSquare: e.broker_data.logo_square
                    }
                }))) : []
            }
            var te = n(160742),
                ne = n(682614),
                re = n(731210);
            const oe = r.forwardRef(((e, t) => r.createElement("a", {
                className: _(re.item, e.className),
                href: e.href,
                target: e.target,
                ref: t,
                rel: e.rel,
                onClick: e.onClick
            }, e.children)));
            var ae = n(5880);

            function ie(e) {
                const {
                    proName: t,
                    market: n,
                    url: o,
                    title: a,
                    logoUrls: i,
                    isTickerActive: s,
                    customIcon: l
                } = e, c = function(e, t) {
                    const n = (0, r.useRef)(null);
                    return (0, r.useEffect)((() => {
                        if (!t) return;
                        const r = (0, E.ensureNotNull)(n.current),
                            o = {
                                dontDyePrice: !0,
                                signPositive: !0,
                                signNegative: !0,
                                changeDirectionUpClass: ae.up,
                                changeDirectionDownClass: ae.down,
                                lastGrowingClass: ae.growing,
                                lastFallingClass: ae.falling,
                                dataModeClassSuffix: "--for-ticker-header",
                                sessionStatusClassSuffix: "--for-ticker-header"
                            },
                            a = new ne.QuoteTicker(e, r, o);
                        return () => {
                            a.disconnect()
                        }
                    }), [e, t]), n
                }(t, s);
                return r.createElement(oe, {
                    className: ae.ticker,
                    href: o,
                    ref: c,
                    onClick: function() {
                        ! function(e, t) {
                            (0, k.trackEvent)("Main menu symbols", t, e)
                        }(t, n)
                    }
                }, r.createElement("div", {
                    className: ae.logo
                }, l ? r.createElement(S.Icon, {
                    icon: l,
                    className: ae.customIcon
                }) : r.createElement(te.CircleLogoAny, {
                    size: "xsmall",
                    logoUrls: i,
                    placeholderLetter: a[0] || " "
                })), r.createElement("div", {
                    className: ae.text
                }, r.createElement("div", {
                    className: ae.head
                }, r.createElement("span", {
                    className: _(ae.title, !a && "js-symbol-description-name")
                }, a), r.createElement("span", {
                    className: "js-symbol-session-status"
                })), r.createElement("div", {
                    className: ae.body
                }, r.createElement("span", {
                    className: ae.lastWrapper
                }, r.createElement("span", {
                    className: _(ae.last, "js-symbol-last")
                }), r.createElement("span", {
                    className: "js-data-mode"
                })), r.createElement("span", {
                    className: _(ae.change, "js-symbol-change-direction", "js-symbol-change-pt")
                }))))
            }
            var se = n(229536);

            function le(e) {
                const {
                    icon: t,
                    text: n,
                    url: o,
                    target: a,
                    rel: i,
                    isNotBlue: s
                } = e;
                return r.createElement(oe, {
                    className: _(se.banner, s && se["not-blue"]),
                    href: o,
                    rel: i,
                    target: a
                }, r.createElement(S.Icon, {
                    icon: t,
                    className: se.icon
                }), r.createElement("span", {
                    className: se.text
                }, n))
            }
            var ce = n(824510),
                de = n(877765),
                ue = n(615063),
                he = n(197642),
                me = n(970895),
                pe = n(887357),
                ge = n(964608);
            const ve = (0, z.mergeThemes)(he.CARD_CONTENT_DEFAULT_THEME, {
                breadcrumbs: ge.breadcrumbs,
                article: ge.article,
                title: ge.title
            });

            function fe(e) {
                const t = e.published,
                    n = t ? (0, me.getNewsCardVisualProps)((0, de.newsItemTransform)(e)) : (0, me.getHeadlineCardVisualProps)(e);
                return r.createElement(he.HeadlineCard, { ...n,
                    showExternalLink: !1,
                    withHover: !0,
                    cardContentTheme: ve,
                    onAction: t ? () => {
                        return t = e.id, void(0,
                            ue.trackNewsClick)({
                            category: null,
                            country: window.countryCode,
                            language: window.locale,
                            news_id: t,
                            link: null,
                            provider: null,
                            symbol: "",
                            page: "main_menu",
                            placement: pe.NewsWidgetPlacement.Main
                        });
                        var t
                    } : void 0
                })
            }
            var we = n(180184),
                be = n(781014),
                Ee = n(874909),
                xe = n(349896),
                ye = n(46279),
                Ce = n(973610);
            const ke = r.lazy((async () => ({
                default: (await Promise.all([n.e(37619), n.e(33216), n.e(84029)]).then(n.bind(n, 465872))).BadgeBroker
            })));

            function Me(e) {
                const {
                    name: t,
                    rating: n,
                    logoSquare: o,
                    user: a,
                    flags: i,
                    canShowBadge: s = !0
                } = e, l = s && (null == i ? void 0 : i.includes("featured")), c = (0, ye.getUserProfilePath)({
                    username: a.username,
                    is_broker: !0
                });
                return r.createElement(oe, {
                    className: se.banner,
                    href: c
                }, r.createElement("img", {
                    alt: "",
                    src: o || a.pictureUrl,
                    className: Ce.logo
                }), r.createElement("div", {
                    className: Ce.info
                }, r.createElement("div", {
                    className: Ce.name
                }, t), r.createElement("div", {
                    className: Ce.ratingWrapper
                }, r.createElement("span", {
                    className: Ce.rating
                }, n.toFixed(2)), r.createElement("div", {
                    className: Ce.starsWrapper
                }, r.createElement(Ee.StarsRating, {
                    rating: n,
                    size: xe.Size.Small,
                    isInteractive: !1
                })))), l && r.createElement(r.Suspense, {
                    fallback: null
                }, r.createElement("div", {
                    className: Ce.badge
                }, r.createElement(ke, {
                    name: be.BadgeBrokerNames.BrokerExtraFeatured,
                    size: we.BadgeSize.XSmall
                }))))
            }
            const _e = (0, n(911905).getLogger)("MainMenu.ItemErrorBoundary");
            class Se extends r.Component {
                constructor() {
                    super(...arguments), this.state = {
                        hasError: !1
                    }
                }
                componentDidCatch(e) {
                    _e.logError(e.message)
                }
                render() {
                    return this.state.hasError ? r.createElement(r.Fragment, null) : r.createElement(r.Fragment, null, this.props.children)
                }
                static getDerivedStateFromError(e) {
                    return {
                        hasError: !0
                    }
                }
            }
            var ze = n(575932),
                He = n(86441),
                Le = n(934026),
                Ne = n(638456);
            const Ae = (0, c.isRtl)();

            function De(e) {
                return (0, r.useMemo)((() => {
                    const n = $()[e],
                        r = (0, E.ensureDefined)(n.children);
                    if ("news" === n.rootTrackId && !r.find((e => "id" in e && "news-research-snaps" === e.id))) {
                        const e = function(e) {
                            const t = [];
                            let n = [];
                            return e.forEach((e => {
                                "banners" in e && e.banners && (n = [...n, ...e.banners])
                            })), [{
                                name: "",
                                banners: [...n, ...t]
                            }]
                        }(r);
                        return 0 === e[0].banners.length ? {
                            items: r,
                            categories: t(r),
                            categoryRootName: n.name,
                            rootTrackId: n.rootTrackId
                        } : {
                            items: [],
                            categories: e,
                            categoryRootName: n.name,
                            rootTrackId: n.rootTrackId
                        }
                    }
                    if ("brokers" === n.rootTrackId) {
                        const [e, o] = function(e) {
                            const n = e.slice(),
                                r = n[0].banners;
                            if (n[0].banners = [], r && r.length) {
                                return [
                                    [{
                                        section: (0, ze.t)("Top Platinum brokers"),
                                        banners: r,
                                        children: []
                                    }, {
                                        section: (0, ze.t)("Explore further"),
                                        children: n
                                    }],
                                    []
                                ]
                            }
                            return [n, t(n)]
                        }(r);
                        return {
                            items: e,
                            categories: o,
                            categoryRootName: n.name,
                            rootTrackId: n.rootTrackId
                        }
                    }
                    return {
                        items: r,
                        categories: t(r),
                        categoryRootName: n.name,
                        rootTrackId: n.rootTrackId
                    }
                }), [e]);

                function t(e) {
                    let t = [];
                    for (const n of e) "section" in n ? t = [...t, ...n.children] : t.push(n);
                    return t
                }
            }

            function Te(e, t) {
                (0, r.useEffect)((() => {
                    t && function(e) {
                        (0, k.trackEvent)("GUI", "MainMenuShowDropdown", e)
                    }(e)
                }), [t])
            }

            function Be(e, t) {
                const [n, o] = (0, r.useState)((e => e.length ? e[0] : null)(e)), a = (0, r.useRef)(null), i = (0, r.useRef)(null), s = (0, r.useRef)(null);

                function l() {
                    null !== s.current && (clearTimeout(s.current), s.current = null)
                }
                return (0,
                    r.useEffect)((() => l), []), {
                    activeCategory: n,
                    categoriesContainerRef: a,
                    getCategoryHoverCallbacks: function(e) {
                        function r(r) {
                            if (l(), "mouseleave" !== r.type)
                                if (e === n) i.current = r;
                                else {
                                    const n = i.current,
                                        l = a.current;
                                    n && l && function(e, t, n, r) {
                                        const o = n.getBoundingClientRect(),
                                            a = new He.Point(e.clientX, e.clientY),
                                            i = new He.Point(t.clientX, t.clientY),
                                            s = (Ae ? !r : r) ? o.left : o.right,
                                            l = new He.Point(s, o.top),
                                            c = new He.Point(s, o.bottom);
                                        return (0, Le.pointInTriangle)(a, i, l, c)
                                    }(r, n, l, t) ? s.current = setTimeout((() => {
                                        o(e), s.current = null
                                    }), 150) : o(e)
                                }
                        }
                        return {
                            onMouseEnter: r,
                            onMouseLeave: r,
                            onMouseOver: r
                        }
                    },
                    onContainerMouseEnter: function(e) {
                        l(), i.current = e
                    }
                }
            }
            var Re = n(723300),
                Ve = n(689612),
                Oe = n(658889);
            const Ie = (0, z.mergeThemes)(L.DEFAULT_MENU_THEME, {
                    menuBox: Oe.menuBox,
                    menuWrap: Oe.menuWrap,
                    scrollWrap: Oe.scrollWrap
                }),
                Fe = (0, z.mergeThemes)(Ie, {
                    menuBox: Oe.reversed
                });

            function We(e) {
                const {
                    rootCategoryIndex: t,
                    isReversed: n,
                    ...o
                } = e, {
                    items: a,
                    categories: i,
                    categoryRootName: s,
                    rootTrackId: l
                } = De(t), {
                    activeCategory: c,
                    categoriesContainerRef: d,
                    getCategoryHoverCallbacks: u,
                    onContainerMouseEnter: h
                } = Be(i, n), m = function(e) {
                    const t = (0, r.useRef)(null);
                    return (0, r.useLayoutEffect)((() => {
                        var e;
                        null === (e = t.current) || void 0 === e || e.update(!Ne.isFF)
                    }), [e]), t
                }(c), p = (null == c ? void 0 : c.children) || [], g = "brokers" === l;
                return Te(s, o.isOpened), r.createElement(H.PopupMenu, {
                    theme: n ? Fe : Ie,
                    controller: m,
                    ...o
                }, r.createElement("div", {
                    className: _(Oe.categories, g && Oe.categoriesBroker),
                    ref: d,
                    onMouseEnter: h
                }, v(a, (function(e, t) {
                    return r.createElement(Pe, {
                        key: t,
                        isActive: e === c,
                        url: e.url,
                        target: e.target,
                        rel: e.rel,
                        hasChildren: Boolean(e.children),
                        rootTrackId: l,
                        icon: e.icon,
                        description: e.description,
                        className: e.className,
                        id: e.id,
                        ...u(e)
                    }, e.name)
                }))), p.length > 0 && r.createElement("div", {
                    className: Oe.subcategories
                }, v(p, (function(e, t) {
                    return r.createElement(Pe, {
                        key: t,
                        isNew: e.new,
                        url: e.url,
                        target: e.target,
                        rel: e.rel,
                        rootTrackId: l,
                        trackLabel: e.trackLabel
                    }, e.name)
                }))), r.createElement(Ze, {
                    categories: i,
                    activeCategory: c
                }));

                function v(e, t) {
                    return e.map(((e, n) => "section" in e ? r.createElement(ce.MainMenuSection, {
                        key: n,
                        title: e.section,
                        isCondensed: !0
                    }, e.children.map(t), e.banners && e.banners.length > 0 && r.createElement("div", {
                        className: Oe.categoriesExtra
                    }, e.banners.map(je))) : t(e, n)))
                }
            }

            function Pe(e) {
                const {
                    children: t,
                    url: n,
                    isNew: o,
                    isActive: a,
                    hasChildren: i,
                    rootTrackId: s,
                    trackLabel: l,
                    icon: c,
                    className: d,
                    description: u,
                    id: h,
                    ...m
                } = e;
                return r.createElement("a", {
                    className: _(Oe.menuItem, a && Oe.active, d),
                    href: n,
                    onClick: function(e) {
                        s && l && M(s, l);
                        "more-mobile-app" === h && (e.preventDefault(), (0, Re.showInstallMobileAppDialog)())
                    },
                    ...m
                }, r.createElement("div", {
                    className: _(Oe.rowMenuItem, u && Oe.alignStart)
                }, c && r.createElement(S.Icon, {
                    className: Oe.icon,
                    icon: c
                }), r.createElement("div", {
                    className: _(Oe.menuItemInfo, u && Oe.indentTop)
                }, r.createElement("span", {
                    className: Oe.menuItemHeader
                }, t), u && r.createElement("span", {
                    className: Oe.description
                }, u))), o && r.createElement(N.Pill, {
                    className: Oe.badge,
                    label: "New",
                    color: "orange"
                }), i && r.createElement(S.Icon, {
                    className: Oe.dropArrow,
                    icon: Ve
                }))
            }

            function Ze(e) {
                const {
                    categories: t,
                    activeCategory: n
                } = e, o = function(e) {
                    return (0,
                        r.useMemo)((() => e.filter((e => {
                        var t, n;
                        return (null === (t = e.watchlists) || void 0 === t ? void 0 : t.length) || (null === (n = e.banners) || void 0 === n ? void 0 : n.length)
                    }))), [e])
                }(t);
                return r.createElement(r.Fragment, null, o.map(((e, t) => {
                    const {
                        banners: o = [],
                        watchlists: a = []
                    } = e, i = e === n, s = o.find((e => e.headlineData));
                    return r.createElement(Se, {
                        key: t
                    }, r.createElement("div", {
                        className: _(Oe.extra, !i && "i-hidden", s && Oe.freeBlock)
                    }, a.map((e => {
                        return r.createElement(ie, { ...e,
                            customIcon: e.bannerType && (t = e.bannerType, G[t]),
                            key: e.proName,
                            isTickerActive: i
                        });
                        var t
                    })), o.map(je)))
                })))
            }

            function je(e, t) {
                return e.brokerData ? r.createElement(Me, {
                    key: e.brokerData.name,
                    canShowBadge: 0 === t,
                    ...e.brokerData
                }) : e.headlineData ? r.createElement(fe, {
                    key: t,
                    ...e.headlineData
                }) : r.createElement(le, {
                    key: t,
                    ...e,
                    isNotBlue: D.sparksBannerType.has(e.type)
                })
            }
            const Ue = m["media-phone-vertical"],
                Ye = r.lazy((async () => ({
                    default: (await Promise.all([n.e(90519), n.e(90926), n.e(37135), n.e(8834), n.e(30063), n.e(80580), n.e(68074), n.e(52498), n.e(37619), n.e(29331), n.e(33216), n.e(24817), n.e(89587), n.e(32836), n.e(86193), n.e(57561), n.e(7201), n.e(69907), n.e(67040), n.e(92697), n.e(15995), n.e(2875), n.e(73204)]).then(n.bind(n, 868032))).MainDialogMenu
                }))),
                qe = r.lazy((async () => ({
                    default: (await Promise.all([n.e(90519), n.e(37135), n.e(68074), n.e(37619), n.e(29331), n.e(33216), n.e(24817), n.e(89587), n.e(32836), n.e(86193), n.e(57561), n.e(7201), n.e(69907), n.e(93088), n.e(15995), n.e(2875), n.e(66208)]).then(n.bind(n, 381667))).MainBackStackDropdownMenu
                })));
            const Ke = s((function(e) {
                    const {
                        isOpened: t,
                        onClose: n,
                        buttonEl: a
                    } = e, i = (0, r.useMemo)((() => u(a)), [a]);
                    return (0, h.useCloseOnHamburgerButtonBreakpoint)(n), (0, h.useCloseOnLoginChange)(n), r.createElement(o.MatchMedia, {
                        rule: Ue
                    }, (e => r.createElement(r.Suspense, {
                        fallback: null
                    }, e ? r.createElement(Ye, {
                        onClose: n,
                        isOpened: t
                    }) : r.createElement(qe, {
                        onClose: n,
                        isOpened: t,
                        position: i,
                        doNotCloseOn: a
                    }))))
                })),
                Ge = (Xe = function(e) {
                    const {
                        isOpened: t,
                        onClose: n,
                        buttonEl: o,
                        reference: a,
                        onMouseOut: i
                    } = e, [s, c] = (0, r.useState)(!1), d = (0, r.useMemo)((() => function(e, t) {
                        const n = (0, l.getPopupPositioner)(e, { ...y,
                            verticalMargin: -4
                        });
                        return (e, r) => {
                            const o = n(e, r),
                                {
                                    clientWidth: a
                                } = document.documentElement,
                                i = o.x + e > a ? -1 : o.x < 0 ? 1 : 0,
                                s = e - C;
                            return o.x += s * i, o.forbidCorrectYCoord = !0, o.overrideHeight = r, t(0 !== i), o
                        }
                    }(o, c)), [o]), u = (0, r.useMemo)((() => Number((0, E.ensureDefined)(o.dataset.mainMenuDropdownRootIndex))), [o]);
                    return (0, h.useCloseOnHamburgerButtonBreakpoint)(n), (0, h.useCloseOnLoginChange)(n), r.createElement(We, {
                        onClose: n,
                        isOpened: t,
                        isReversed: s,
                        position: d,
                        doNotCloseOn: o,
                        rootCategoryIndex: u,
                        reference: a,
                        onMouseOut: i
                    })
                }, e => {
                    const t = document.createElement("div"),
                        n = r.createRef();
                    let o = !1;
                    return e.matches(":hover") && s(), e.addEventListener("mouseenter", s), e.addEventListener("mouseleave", i), () => {
                        a.unmountComponentAtNode(t), e.removeEventListener("mouseenter", s), e.removeEventListener("mouseleave", i)
                    };

                    function i(t) {
                        const r = n.current,
                            o = t.relatedTarget,
                            a = r && o && r.contains(o),
                            i = e.contains(o);
                        a || i || l()
                    }

                    function s() {
                        o = !0, c()
                    }

                    function l() {
                        o = !1, c()
                    }

                    function c() {
                        a.render(r.createElement(Xe, {
                            buttonEl: e,
                            onClose: l,
                            isOpened: o,
                            reference: n,
                            onMouseOut: e => i(e.nativeEvent)
                        }), t), e.classList.toggle("i-dropped", o)
                    }
                });
            var Xe;

            function $e(e) {
                const t = function(e) {
                        return e.addEventListener("click", t), () => {
                            e.removeEventListener("click", t)
                        };

                        function t(e) {
                            const t = e.target instanceof HTMLElement ? e.target.closest("a[data-main-menu-root-track-id]") : null;
                            if (t) {
                                M((0, E.ensureDefined)(t.dataset.mainMenuRootTrackId), t.href)
                            }
                        }
                    }(e),
                    n = [],
                    r = Array.from(e.querySelectorAll("[data-main-menu-dropdown-root-index]"));
                for (const e of r) n.push(Ge(e));
                return () => {
                    t();
                    for (const e of n) e()
                }
            }
            let Je = null;

            function Qe(e = !1) {
                e ? function() {
                    if (null !== Je) return;
                    const e = Array.from(document.querySelectorAll(".js-notifications-indicator"));
                    Promise.all([n.e(22850), n.e(89242), n.e(70191), n.e(65589)]).then(n.bind(n, 366367)).then((t => {
                        Je = new t.HeaderNotificationView(e)
                    }))
                }() : null !== Je && (Je.destroy(), Je = null)
            }
            var et = n(257330);
            const tt = document.querySelector(".js-site-header-container");
            tt && function(e) {
                e.querySelectorAll(".js-header-user-menu-button").forEach((e => {
                    b(e)
                }));
                const t = e.querySelector(".js-header-main-menu-mobile-button");
                t && Ke(t);
                const n = e.querySelector(".js-header-main-menu");
                n && $e(n);
                const r = e.querySelector(".js-search-hotkey-hint");
                r && (r.innerText = (0, i.humanReadableHash)(i.Modifiers.Mod + 75));
                const o = e.querySelector(".js-userpic"),
                    a = e.querySelector(".js-userpic-mid");

                function s() {
                    const {
                        user: e
                    } = window;
                    e.userpic_mid && (null == a || a.setAttribute("src", e.userpic_mid)), e.userpic && (null == o || o.setAttribute("src", e.userpic))
                }
                s(), Qe(window.is_authenticated), (0, et.initHeaderSearchDialog)(), window.loginStateChange.subscribe(null, (() => {
                    s(), Qe(window.is_authenticated)
                }))
            }(tt);
            n(770574);
            var nt = n(823127);

            function rt(e) {
                return Promise.all([n.e(26771), n.e(48739)]).then(n.bind(n, 839178)).then((() => {
                    nt(e).tvDeviceMenu()
                }))
            }
            var ot = n(359621),
                at = n(588948),
                it = n(450305),
                st = n(229534);
            n(659863);
            async function lt(e) {
                const t = await Promise.all([n.e(10146), n.e(17967), n.e(42270), n.e(91077), n.e(13830), n.e(51199)]).then(n.bind(n, 722371)),
                    r = await t.showAccountDeletionNotification(e);
                await async function() {
                    try {
                        return "ok" === (await (0, it.cancelAccountDeletion)()).status
                    } catch (e) {
                        return (0, st.showErrorDialog)({
                            title: ze.t("Error"),
                            content: e.message || e,
                            actions: [{
                                key: 13,
                                method: "close",
                                name: "ok",
                                text: ze.t("OK"),
                                type: "primary"
                            }]
                        }), !1
                    }
                }() && r()
            }
            var ct = n(385043),
                dt = n(993231);
            var ut = n(850775),
                ht = n(473999),
                mt = n(722329),
                pt = n(650969),
                gt = n(823127),
                vt = (0, at.getFreshInitData)();
            gt((function() {
                var e = n(701701).ContentPage,
                    t = n(90523).Root;
                (0, ht.registerSiteSymbolListBackend)(ChartApiInstance), "block_widgetbar" in vt && vt.block_widgetbar(ot.WidgetBar, e, t, (() => (0, mt.configuration)({
                    chartApiInstance: ChartApiInstance
                }))), ut.mediaState.width <= ut.mediaState.breakpoints.tablet ? rt(".tv-device-menu") : ut.mediaState.on("changeDevice", (function e() {
                    ut.mediaState.width <= ut.mediaState.breakpoints.tablet && (rt(".tv-device-menu"), ut.mediaState.off("changeDevice", e))
                })), (0, pt.initSiteGlobalSkipNavigation)()
            })), async function() {
                const e = (0, at.getFreshInitData)();
                window.is_authenticated && void 0 !== e.days_to_deactivation && null !== e.days_to_deactivation && lt({
                    daysToDeactivation: e.days_to_deactivation
                })
            }(), (0, dt.initMobileNotificationBanner)(), n.e(65481).then(n.bind(n, 193612)).then((e => e.offerButtonInit())), "serviceWorker" in navigator && navigator.serviceWorker.getRegistrations().then((function(e) {
                for (var t of e) t.unregister()
            })), (0, ct.initAllAnalytics)()
        },
        723300: (e, t, n) => {
            "use strict";
            async function r() {
                return Promise.all([n.e(90519), n.e(10146), n.e(90926), n.e(8834), n.e(5979), n.e(30063), n.e(55508), n.e(85902), n.e(95524), n.e(92697), n.e(54286)]).then(n.bind(n, 636247)).then((e => e.installMobileAppDialogImpl()))
            }
            n.d(t, {
                showInstallMobileAppDialog: () => r
            })
        },
        993231: (e, t, n) => {
            "use strict";
            n.d(t, {
                updateInfoAboutMobileBanner: () => d,
                initMobileNotificationBanner: () => h
            });
            var r = n(49437),
                o = n(638456),
                a = n(314802),
                i = n(788599);

            function s(e) {
                return Promise.all([n.e(33883), n.e(49125)]).then(n.bind(n, 55541)).then((t => t.createAndroidNotificationDialog(e)))
            }
            const l = "mobileNotification";

            function c(e, t) {
                const n = Math.abs((new Date).getTime() - new Date(e).getTime());
                return Math.ceil(n / 864e5) >= t
            }

            function d() {
                const e = r.TVLocalStorage.getItem(l);
                if (e) {
                    let t = JSON.parse(e);
                    t = {
                        numberOfClose: t.numberOfClose + 1,
                        dataOfClose: (new Date).getTime()
                    }, r.TVLocalStorage.setItem(l, JSON.stringify(t))
                } else {
                    const e = {
                        numberOfClose: 1,
                        dataOfClose: (new Date).getTime()
                    };
                    r.TVLocalStorage.setItem(l, JSON.stringify(e))
                }
            }

            function u() {
                const e = r.TVLocalStorage.getItem(l);
                if (e) {
                    const t = JSON.parse(e);
                    switch (t.numberOfClose) {
                        case 1:
                            return c(t.dataOfClose, 7);
                        case 2:
                            return c(t.dataOfClose, 30);
                        default:
                            return c(t.dataOfClose, 182)
                    }
                }
                return !0
            }
            async function h() {
                window.addEventListener("beforeinstallprompt", (t => {
                    t.preventDefault(), u() && s({
                        storeAction: e ? i.StoreAction.App : i.StoreAction.Shop,
                        deferredInstallPromptRef: t
                    })
                }));
                let e = !1;
                if ("getInstalledRelatedApps" in window.navigator) try {
                    const t = await window.navigator.getInstalledRelatedApps();
                    e = t.length > 0
                } catch (e) {}
                u() && (o.CheckMobile.Android() && !(0, a.isOnMobileAppPage)("new") && ("onbeforeinstallprompt" in window || s({
                    storeAction: e ? i.StoreAction.App : i.StoreAction.Shop
                })), o.CheckMobile.iOS() && !(0, a.isOnMobileAppPage)("old") && Promise.all([n.e(71655), n.e(95758)]).then(n.bind(n, 56990)).then((e => e.createIosNotificationDialog())))
            }
        },
        788599: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    StoreAction: () => r,
                    utm: () => o
                }),
                function(e) {
                    e.App = "app", e.Shop = "shop"
                }(r || (r = {}));
            const o = {
                utmSource: "TV_banner",
                utmMedium: "banner",
                utmCampaign: "banner"
            }
        },
        450305: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                Code: () => r,
                checkUserAnonymizationAbility: () => c,
                anonimyzeAccount: () => d,
                cancelAccountDeletion: () => u,
                contacts: () => h,
                SendCodeStatus: () => m,
                isCodeSendedResponse: () => p,
                contactsSendCode: () => g,
                contactsConfirmAccess: () => v,
                changeEmail: () => f,
                togglePrivacyChattingMode: () => w,
                getProfile: () => b,
                getMe: () => E
            });
            var r, o = n(575932),
                a = n(86674),
                i = n(145619),
                s = n(588537);
            ! function(e) {
                e.PaidServicesExist = "paid_services_exist", e.UnusablePassword = "unusable_password", e.InvalidPassword = "invalid_password", e.TooManyAttempts = "too_many_attempts"
            }(r || (r = {}));
            const l = o.t("Unknown error happened");

            function c() {
                return (0, a.fetch)("/api/v1/users/anonymize/", {
                    credentials: "include",
                    method: "GET",
                    headers: {
                        accept: "application/json"
                    }
                }).then((e => {
                    if (!e.ok) throw new Error(l);
                    return e.json()
                }))
            }

            function d(e) {
                return (0, a.fetch)("/api/v1/users/anonymize/", {
                    credentials: "include",
                    method: "POST",
                    headers: {
                        accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        current_password: e
                    })
                }).then((e => {
                    if (!e.ok) throw new Error(l);
                    return e.json()
                }))
            }

            function u() {
                return (0, a.fetch)("/api/v1/users/anonymize/", {
                    credentials: "include",
                    method: "DELETE",
                    headers: {
                        accept: "application/json"
                    }
                }).then((e => {
                    if (!e.ok) throw new Error(l);
                    return e.json()
                }))
            }

            function h() {
                return (0, a.fetch)("/api/v1/user/profile/contacts/", {
                    credentials: "include",
                    method: "GET"
                }).then((e => e.json()))
            }
            var m;

            function p(e) {
                return e.status === m.Sended
            }! function(e) {
                e[e.AlreadyConfirmed = 0] = "AlreadyConfirmed", e[e.Sended = 1] = "Sended"
            }(m || (m = {}));

            function g(e) {
                const t = new FormData;
                return t.append("option", e.option), (0, a.fetch)("/api/v1/user/profile/contacts/send_code/", {
                    credentials: "include",
                    method: "POST",
                    body: t
                }).then((e => e.ok ? e.json().then((e => ({
                    status: m.Sended,
                    response: {
                        sid: e.sid,
                        exp: Date.now() + 1e3 * e.exp
                    }
                }))) : e.json().then((e => {
                    if ("confirmed" === e.code) return {
                        status: m.AlreadyConfirmed
                    };
                    if (e.errors) throw Error(Object.values(e.errors).join());
                    throw Error(e.error)
                }))))
            }

            function v(e) {
                const t = new FormData;
                return t.append("option", e.option), t.append("code", e.code), t.append("sid", e.sid), (0, a.fetch)("/api/v1/user/profile/contacts/confirm_access/", {
                    credentials: "include",
                    method: "POST",
                    body: t
                }).then((e => e.ok ? e.json().then((e => ({
                    exp: Date.now() + 1e3 * e.exp
                }))) : e.json().then((e => {
                    if (e.errors) throw Error(Object.values(e.errors).join());
                    throw Error(e.error)
                }))))
            }

            function f(e) {
                return (0, a.fetch)("/api/v1/users/change-email/", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        accept: "application/json"
                    },
                    body: e
                }).then((e => e.ok ? e.json() : e.json().then((t => {
                    if (400 === e.status) throw new i.AggregateError((0, i.accumulateErrors)(t.errors, e.status));
                    if (403 === e.status) throw new i.ApiError(t.error, e.status, t.code);
                    if (429 === e.status) throw new i.ApiError(t.error, e.status, t.code);
                    throw Error("Unhandled exception")
                }))))
            }

            function w(e) {
                const t = new FormData;
                return t.append("disallow_adding_to_private_chats", e.toString()), (0, a.fetch)("/api/v1/user/profile/settings/", {
                    method: "POST",
                    body: t
                }).then((e => {
                    if (!e.ok) throw new Error(l);
                    return e.json()
                })).then((e => (0, s.ensureDefined)(e.disallow_adding_to_private_chats)))
            }
            async function b(e) {
                const t = await (0, a.fetch)(`/api/v1/user/profile/${e}/?by=username`);
                return t.ok ? t.json() : t.json().then((e => {
                    throw new Error(e.detail)
                }))
            }
            async function E() {
                const e = await (0, a.fetch)("/api/v1/user/profile/me/");
                if (!e.ok) {
                    const t = await e.json();
                    throw 403 === e.status ? new i.ApiError(t.detail, e.status, t.code) : Error(String(t))
                }
                return e.json()
            }
        },
        770574: (e, t, n) => {
            "use strict";
            var r = n(776734);
            !async function() {
                const e = await (0, r.getTracker)(),
                    t = document.querySelectorAll(".js-footer-markets-link"),
                    n = document.querySelector(".js-footer-trading-view-desktop-link");
                t.forEach((t => {
                    t.addEventListener("click", (t => {
                        const n = t.currentTarget;
                        if (null === n) return;
                        const r = n.dataset.platform;
                        e && r && e.trackAppLinkClick("tradingview", "footer", "footer", r)
                    }))
                })), n && n.addEventListener("click", (t => {
                    null !== t.currentTarget && e && e.trackAppLinkClick("tradingview", "footer", "get_desktop_app_footer_menu", "desktop")
                }))
            }()
        },
        314308: (e, t, n) => {
            "use strict";

            function r(e, t, n, r, o) {
                function a(o) {
                    if (e > o.timeStamp) return;
                    const a = o.target;
                    void 0 !== n && null !== t && null !== a && a.ownerDocument === r && (t.contains(a) || n(o))
                }
                return o.click && r.addEventListener("click", a, !1), o.mouseDown && r.addEventListener("mousedown", a, !1), o.touchEnd && r.addEventListener("touchend", a, !1), o.touchStart && r.addEventListener("touchstart", a, !1), () => {
                    r.removeEventListener("click", a, !1), r.removeEventListener("mousedown", a, !1), r.removeEventListener("touchend", a, !1), r.removeEventListener("touchstart", a, !1)
                }
            }
            n.d(t, {
                addOutsideEventListener: () => r
            })
        },
        581715: (e, t, n) => {
            "use strict";
            n.d(t, {
                Pill: () => s
            });
            var r = n(559496),
                o = n(497754),
                a = n.n(o),
                i = n(686361);

            function s(e) {
                const {
                    className: t,
                    label: n,
                    color: o,
                    style: s,
                    tooltip: l
                } = e;
                return r.createElement("div", {
                    className: a()(i.pill, t, o && i[o], l && "apply-common-tooltip"),
                    style: s,
                    title: l
                }, n)
            }
        },
        257330: (e, t, n) => {
            "use strict";
            n.d(t, {
                initHeaderSearchDialog: () => i
            });
            var r = n(778516),
                o = n(398835);
            let a = !1;

            function i() {
                document.querySelectorAll(".js-header-search-button").forEach((e => {
                    e.addEventListener("click", (() => {
                        a || s()
                    }))
                })), o.createGroup({
                    desc: "Search actions"
                }).add({
                    desc: "Show Search",
                    hotkey: o.Modifiers.Mod + 75,
                    handler: s,
                    isDisabled: () => a
                })
            }

            function s() {
                a = !0, (0, r.openHeaderSearchDialog)(l)
            }

            function l() {
                a = !1
            }
        },
        778516: (e, t, n) => {
            "use strict";

            function r(e) {
                return o().then((t => t.openHeaderSearchDialogImpl(e)))
            }

            function o() {
                return Promise.all([n.e(90519), n.e(10146), n.e(90926), n.e(37135), n.e(8834), n.e(5979), n.e(30063), n.e(78941), n.e(15107), n.e(21834), n.e(95468), n.e(80580), n.e(68074), n.e(75966), n.e(52498), n.e(82739), n.e(44155), n.e(5799), n.e(63146), n.e(52019), n.e(50522), n.e(24384), n.e(85687), n.e(35015), n.e(2036), n.e(40731), n.e(61153), n.e(50991), n.e(4171), n.e(93683), n.e(45410), n.e(94460), n.e(82290), n.e(95619), n.e(83352), n.e(76634), n.e(93921), n.e(69397), n.e(29206), n.e(33555), n.e(17776), n.e(29031)]).then(n.bind(n, 204320))
            }
            n.d(t, {
                openHeaderSearchDialog: () => r,
                loadHeaderSearchDialog: () => o
            })
        },
        951292: (e, t, n) => {
            "use strict";
            n.d(t, {
                useOutsideEvent: () => a
            });
            var r = n(559496),
                o = n(314308);

            function a(e) {
                const {
                    click: t,
                    mouseDown: n,
                    touchEnd: a,
                    touchStart: i,
                    handler: s,
                    reference: l,
                    ownerDocument: c = document
                } = e, d = (0, r.useRef)(null), u = (0, r.useRef)(new CustomEvent("timestamp").timeStamp);
                return (0, r.useLayoutEffect)((() => {
                    const e = {
                            click: t,
                            mouseDown: n,
                            touchEnd: a,
                            touchStart: i
                        },
                        r = l ? l.current : d.current;
                    return (0, o.addOutsideEventListener)(u.current, r, s, c, e)
                }), [t, n, a, i, s]), l || d
            }
        },
        377318: (e, t, n) => {
            "use strict";
            n.d(t, {
                MenuContext: () => r
            });
            const r = n(559496).createContext(null)
        },
        175071: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_MENU_THEME: () => v,
                Menu: () => f
            });
            var r = n(559496),
                o = n(497754),
                a = n.n(o),
                i = n(588537),
                s = n(466915),
                l = n(860502),
                c = n(670797),
                d = n(224743),
                u = n(829725),
                h = n(398835),
                m = n(787684),
                p = n(377318),
                g = n(572083);
            const v = g;
            class f extends r.PureComponent {
                constructor(e) {
                    super(e), this._containerRef = null,
                        this._scrollWrapRef = null, this._raf = null, this._scrollRaf = null, this._scrollTimeout = void 0, this._manager = new u.OverlapManager, this._hotkeys = null, this._scroll = 0, this._handleContainerRef = e => {
                            this._containerRef = e, this.props.reference && ("function" == typeof this.props.reference && this.props.reference(e), "object" == typeof this.props.reference && (this.props.reference.current = e))
                        }, this._handleScrollWrapRef = e => {
                            this._scrollWrapRef = e, "function" == typeof this.props.scrollWrapReference && this.props.scrollWrapReference(e), "object" == typeof this.props.scrollWrapReference && (this.props.scrollWrapReference.current = e)
                        }, this._handleMeasure = ({
                            callback: e,
                            forceRecalcPosition: t
                        } = {}) => {
                            var n, r, o, a, l, c, d, u, h, m, p, g;
                            if (this.state.isMeasureValid && !t) return;
                            const {
                                position: v
                            } = this.props, f = (0, i.ensureNotNull)(this._containerRef);
                            let w = f.getBoundingClientRect();
                            const b = document.documentElement.clientHeight,
                                E = document.documentElement.clientWidth,
                                x = null !== (n = this.props.closeOnScrollOutsideOffset) && void 0 !== n ? n : 0;
                            let y = b - 0 - x;
                            const C = w.height > y;
                            if (C) {
                                (0, i.ensureNotNull)(this._scrollWrapRef).style.overflowY = "scroll", w = f.getBoundingClientRect()
                            }
                            const {
                                width: k,
                                height: M
                            } = w, _ = "function" == typeof v ? v(k, M, b) : v, S = null !== (o = null === (r = null == _ ? void 0 : _.indentFromWindow) || void 0 === r ? void 0 : r.left) && void 0 !== o ? o : 0, z = E - (null !== (a = _.overrideWidth) && void 0 !== a ? a : k) - (null !== (c = null === (l = null == _ ? void 0 : _.indentFromWindow) || void 0 === l ? void 0 : l.right) && void 0 !== c ? c : 0), H = (0, s.clamp)(_.x, S, Math.max(S, z)), L = (null !== (u = null === (d = null == _ ? void 0 : _.indentFromWindow) || void 0 === d ? void 0 : d.top) && void 0 !== u ? u : 0) + x, N = b - (null !== (h = _.overrideHeight) && void 0 !== h ? h : M) - (null !== (p = null === (m = null == _ ? void 0 : _.indentFromWindow) || void 0 === m ? void 0 : m.bottom) && void 0 !== p ? p : 0);
                            let A = (0, s.clamp)(_.y, L, Math.max(L, N));
                            if (_.forbidCorrectYCoord && A < _.y && (y -= _.y - A, A = _.y), t && void 0 !== this.props.closeOnScrollOutsideOffset && _.y <= this.props.closeOnScrollOutsideOffset) return void this._handleGlobalClose(!0);
                            const D = null !== (g = _.overrideHeight) && void 0 !== g ? g : C ? y : void 0;
                            this.setState({
                                appearingMenuHeight: t ? this.state.appearingMenuHeight : D,
                                appearingMenuWidth: t ? this.state.appearingMenuWidth : _.overrideWidth,
                                appearingPosition: {
                                    x: H,
                                    y: A
                                },
                                isMeasureValid: !0
                            }, (() => {
                                this._restoreScrollPosition(), e && e()
                            }))
                        }, this._restoreScrollPosition = () => {
                            const e = document.activeElement,
                                t = (0, i.ensureNotNull)(this._containerRef);
                            if (null !== e && t.contains(e)) try {
                                e.scrollIntoView()
                            } catch (e) {} else(0, i.ensureNotNull)(this._scrollWrapRef).scrollTop = this._scroll
                        }, this._resizeForced = () => {
                            this.setState({
                                appearingMenuHeight: void 0,
                                appearingMenuWidth: void 0,
                                appearingPosition: void 0,
                                isMeasureValid: void 0
                            })
                        }, this._resize = () => {
                            null === this._raf && (this._raf = requestAnimationFrame((() => {
                                this.setState({
                                    appearingMenuHeight: void 0,
                                    appearingMenuWidth: void 0,
                                    appearingPosition: void 0,
                                    isMeasureValid: void 0
                                }), this._raf = null
                            })))
                        }, this._handleGlobalClose = e => {
                            this.props.onClose(e)
                        }, this._handleSlot = e => {
                            this._manager.setContainer(e)
                        }, this._handleScroll = () => {
                            this._scroll = (0, i.ensureNotNull)(this._scrollWrapRef).scrollTop
                        }, this._handleScrollOutsideEnd = () => {
                            clearTimeout(this._scrollTimeout), this._scrollTimeout = setTimeout((() => {
                                this._handleMeasure({
                                    forceRecalcPosition: !0
                                })
                            }), 80)
                        }, this._handleScrollOutside = e => {
                            e.target !== this._scrollWrapRef && (this._handleScrollOutsideEnd(), null === this._scrollRaf && (this._scrollRaf = requestAnimationFrame((() => {
                                this._handleMeasure({
                                    forceRecalcPosition: !0
                                }), this._scrollRaf = null
                            }))))
                        }, this.state = {}
                }
                componentDidMount() {
                    this._handleMeasure({
                        callback: this.props.onOpen
                    });
                    const {
                        customCloseDelegate: e = d.globalCloseDelegate
                    } = this.props;
                    e.subscribe(this, this._handleGlobalClose), window.addEventListener("resize", this._resize);
                    const t = null !== this.context;
                    this._hotkeys || t || (this._hotkeys = h.createGroup({
                        desc: "Popup menu"
                    }), this._hotkeys.add({
                        desc: "Close",
                        hotkey: 27,
                        handler: () => {
                            this.props.onKeyboardClose && this.props.onKeyboardClose(), this._handleGlobalClose()
                        }
                    })), this.props.repositionOnScroll && window.addEventListener("scroll", this._handleScrollOutside, {
                        capture: !0
                    })
                }
                componentDidUpdate() {
                    this._handleMeasure()
                }
                componentWillUnmount() {
                    const {
                        customCloseDelegate: e = d.globalCloseDelegate
                    } = this.props;
                    e.unsubscribe(this, this._handleGlobalClose), window.removeEventListener("resize", this._resize), window.removeEventListener("scroll", this._handleScrollOutside, {
                        capture: !0
                    }), this._hotkeys && (this._hotkeys.destroy(), this._hotkeys = null), null !== this._raf && (cancelAnimationFrame(this._raf), this._raf = null), null !== this._scrollRaf && (cancelAnimationFrame(this._scrollRaf), this._scrollRaf = null), this._scrollTimeout && clearTimeout(this._scrollTimeout)
                }
                render() {
                    const {
                        id: e,
                        role: t,
                        "aria-label": n,
                        "aria-labelledby": o,
                        "aria-activedescendant": i,
                        "aria-hidden": s,
                        children: d,
                        minWidth: u,
                        theme: h = g,
                        className: v,
                        maxHeight: f,
                        onMouseOver: b,
                        onMouseOut: E,
                        onKeyDown: x,
                        onFocus: y,
                        onBlur: C
                    } = this.props, {
                        appearingMenuHeight: k,
                        appearingMenuWidth: M,
                        appearingPosition: _,
                        isMeasureValid: S
                    } = this.state;
                    return r.createElement(p.MenuContext.Provider, {
                        value: this
                    }, r.createElement(m.SubmenuHandler, null, r.createElement(c.SlotContext.Provider, {
                        value: this._manager
                    }, r.createElement("div", {
                        id: e,
                        role: t,
                        "aria-label": n,
                        "aria-labelledby": o,
                        "aria-activedescendant": i,
                        "aria-hidden": s,
                        className: a()(v, h.menuWrap, !S && h.isMeasuring),
                        style: {
                            height: k,
                            left: _ && _.x,
                            minWidth: u,
                            position: "fixed",
                            top: _ && _.y,
                            width: M
                        },
                        "data-name": this.props["data-name"],
                        ref: this._handleContainerRef,
                        onScrollCapture: this.props.onScroll,
                        onContextMenu: l.preventDefaultForContextMenu,
                        tabIndex: this.props.tabIndex,
                        onMouseOver: b,
                        onMouseOut: E,
                        onKeyDown: x,
                        onFocus: y,
                        onBlur: C
                    }, r.createElement("div", {
                        className: a()(h.scrollWrap, !this.props.noMomentumBasedScroll && h.momentumBased),
                        style: {
                            overflowY: void 0 !== k ? "scroll" : "auto",
                            maxHeight: f
                        },
                        onScrollCapture: this._handleScroll,
                        ref: this._handleScrollWrapRef
                    }, r.createElement(w, {
                        className: h.menuBox
                    }, d)))), r.createElement(c.Slot, {
                        reference: this._handleSlot
                    })))
                }
                update(e) {
                    e ? this._resizeForced() : this._resize()
                }
            }

            function w(e) {
                const t = (0, i.ensureNotNull)((0, r.useContext)(m.SubmenuContext)),
                    n = r.useRef(null);
                return r.createElement("div", {
                    ref: n,
                    className: e.className,
                    onMouseOver: function(e) {
                        if (!(null !== t.current && e.target instanceof Node && (r = e.target,
                                null === (o = n.current) || void 0 === o ? void 0 : o.contains(r)))) return;
                        var r, o;
                        t.isSubmenuNode(e.target) || t.setCurrent(null)
                    },
                    "data-name": "menu-inner"
                }, e.children)
            }
            f.contextType = m.SubmenuContext
        },
        320116: (e, t, n) => {
            "use strict";
            n.d(t, {
                CloseDelegateContext: () => a
            });
            var r = n(559496),
                o = n(224743);
            const a = r.createContext(o.globalCloseDelegate)
        },
        45968: (e, t, n) => {
            "use strict";
            n.d(t, {
                PopupMenu: () => c
            });
            var r = n(559496),
                o = n(587995),
                a = n(707533),
                i = n(175071),
                s = n(320116),
                l = n(951292);

            function c(e) {
                const {
                    controller: t,
                    children: n,
                    isOpened: c,
                    closeOnClickOutside: d = !0,
                    doNotCloseOn: u,
                    onClickOutside: h,
                    onClose: m,
                    onKeyboardClose: p,
                    ...g
                } = e, v = (0, r.useContext)(s.CloseDelegateContext), f = (0, l.useOutsideEvent)({
                    handler: function(e) {
                        h && h(e);
                        if (!d) return;
                        if (u && e.target instanceof Node) {
                            const t = o.findDOMNode(u);
                            if (t instanceof Node && t.contains(e.target)) return
                        }
                        m()
                    },
                    mouseDown: !0,
                    touchStart: !0
                });
                return c ? r.createElement(a.Portal, {
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    pointerEvents: "none"
                }, r.createElement("span", {
                    ref: f,
                    style: {
                        pointerEvents: "auto"
                    }
                }, r.createElement(i.Menu, { ...g,
                    onClose: m,
                    onKeyboardClose: p,
                    onScroll: function(t) {
                        const {
                            onScroll: n
                        } = e;
                        n && n(t)
                    },
                    customCloseDelegate: v,
                    ref: t
                }, n))) : null
            }
        },
        707533: (e, t, n) => {
            "use strict";
            n.d(t, {
                Portal: () => l,
                PortalContext: () => c
            });
            var r = n(559496),
                o = n(587995),
                a = n(95935),
                i = n(829725),
                s = n(670797);
            class l extends r.PureComponent {
                constructor() {
                    super(...arguments), this._uuid = (0, a.guid)()
                }
                componentWillUnmount() {
                    this._manager().removeWindow(this._uuid)
                }
                render() {
                    const e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
                    return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", o.createPortal(r.createElement(c.Provider, {
                        value: this
                    }, this.props.children), e)
                }
                moveToTop() {
                    this._manager().moveToTop(this._uuid)
                }
                _manager() {
                    return null === this.context ? (0, i.getRootOverlapManager)() : this.context
                }
            }
            l.contextType = s.SlotContext;
            const c = r.createContext(null)
        },
        670797: (e, t, n) => {
            "use strict";
            n.d(t, {
                Slot: () => o,
                SlotContext: () => a
            });
            var r = n(559496);
            class o extends r.Component {
                shouldComponentUpdate() {
                    return !1
                }
                render() {
                    return r.createElement("div", {
                        style: {
                            position: "fixed",
                            zIndex: 150,
                            left: 0,
                            top: 0
                        },
                        ref: this.props.reference
                    })
                }
            }
            const a = r.createContext(null)
        },
        787684: (e, t, n) => {
            "use strict";
            n.d(t, {
                SubmenuContext: () => o,
                SubmenuHandler: () => a
            });
            var r = n(559496);
            const o = r.createContext(null);

            function a(e) {
                const [t, n] = (0, r.useState)(null), a = (0, r.useRef)(null), i = (0, r.useRef)(new Map);
                return (0, r.useEffect)((() => () => {
                    null !== a.current && clearTimeout(a.current)
                }), []), r.createElement(o.Provider, {
                    value: {
                        current: t,
                        setCurrent: function(e) {
                            null !== a.current && (clearTimeout(a.current), a.current = null);
                            null === t ? n(e) : a.current = setTimeout((() => {
                                a.current = null, n(e)
                            }), 100)
                        },
                        registerSubmenu: function(e, t) {
                            return i.current.set(e, t), () => {
                                i.current.delete(e)
                            }
                        },
                        isSubmenuNode: function(e) {
                            return Array.from(i.current.values()).some((t => t(e)))
                        }
                    }
                }, e.children)
            }
        },
        995683: (e, t, n) => {
            "use strict";

            function r(e, t, n = {}) {
                const r = Object.assign({}, t);
                for (const o of Object.keys(t)) {
                    const a = n[o] || o;
                    a in e && (r[o] = [e[a], t[o]].join(" "))
                }
                return r
            }

            function o(e, t, n = {}) {
                return Object.assign({}, e, r(e, t, n))
            }
            n.d(t, {
                weakComposeClasses: () => r,
                mergeThemes: () => o
            })
        },
        689612: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.26 4.44a.75.75 0 0 1 1.05.07l3.5 4c.25.28.25.7 0 .98l-3.5 4a.75.75 0 0 1-1.12-.98L10.25 9 7.2 5.5a.75.75 0 0 1 .07-1.06Z"/></svg>'
        },
        604244: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M4.5 3A1.5 1.5 0 0 0 3 4.5v9A1.5 1.5 0 0 0 4.5 15h9a1.5 1.5 0 0 0 1.5-1.5V10h-1v3.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5H8V3H4.5zM11 4h2.3L9.14 8.15l.7.7L14 4.71V7h1V3h-4v1z"/></svg>'
        },
        147559: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M9.45 5.5v.35c.02 1.07.1 2.47.4 3.84a8.5 8.5 0 0 0 1.44 3.5c.63.8 1.47 1.31 2.71 1.31s2.08-.5 2.71-1.3a8.5 8.5 0 0 0 1.45-3.5 20.73 20.73 0 0 0 .39-4.2h-9.1Zm6.1 10.28a5.3 5.3 0 0 0 3.13-2.92l.88-.17 2.76-.55a1 1 0 0 0 .8-.82l.69-4.16A1 1 0 0 0 22.82 6h-2.78c.03-1.2-.04-2-.04-2H8s-.07.8-.04 2H5.18a1 1 0 0 0-.99 1.16l.7 4.16a1 1 0 0 0 .79.82l2.76.55.88.17a5.3 5.3 0 0 0 3.13 2.92L11.5 18l-1.14 2h-.58a1 1 0 0 0-.97.76l-.5 2A1 1 0 0 0 9.28 24h9.44a1 1 0 0 0 .97-1.24l-.5-2a1 1 0 0 0-.97-.76h-.58l-1.14-2-.95-2.22Zm2.28 5.72h-7.66l-.25 1h8.16l-.25-1ZM15.92 20l-.72-1.26-.04-.07-.04-.08-1.1-2.59h-.03l-1.11 2.6-.04.07-.04.07-.72 1.26h3.84ZM6.3 10.73 5.77 7.5H7.7l.52 3.61-1.91-.38ZM22.23 7.5l-.54 3.23-1.9.38.51-3.61h1.93Z"/></svg>'
        },
        84504: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M9.75 3c.41 0 .75.34.75.75V5h7V3.75a.75.75 0 0 1 1.5 0V5a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4V3.75c0-.41.34-.75.75-.75zM9 6.5h10A2.5 2.5 0 0 1 21.5 9v1.5h-15V9A2.5 2.5 0 0 1 9 6.5zM6.5 12v7A2.5 2.5 0 0 0 9 21.5h10a2.5 2.5 0 0 0 2.5-2.5v-7h-15z"/></svg>'
        },
        119298: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M9.25 7V4h1.5v3H12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-1.25v3h-1.5v-3H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1.25ZM8.5 19.5v-11h3v11h-3Zm8-5v-5h3v5h-3Zm.75-6.5H16a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1.25v3h1.5v-3H20a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1.25V5h-1.5v3Z"/></svg>'
        },
        735862: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M15.66 5.77c.4.08.66.48.57.89l-3 14a.75.75 0 0 1-1.46-.32l3-14c.08-.4.48-.66.89-.57ZM18 7.94a.75.75 0 0 1 1.06.06l4.5 5c.25.28.25.72 0 1l-4.5 5a.75.75 0 0 1-1.12-1L22 13.5 17.94 9A.75.75 0 0 1 18 7.94ZM10.06 9a.75.75 0 0 0-1.12-1l-4.5 5a.75.75 0 0 0 0 1l4.5 5a.75.75 0 1 0 1.12-1L6 13.5 10.06 9Z"/></svg>'
        },
        251399: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M7 5.5h14c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-3.59c-.66 0-1.3.26-1.76.73L14 22.88l-1.65-1.65a2.5 2.5 0 0 0-1.76-.73H7A1.5 1.5 0 0 1 5.5 19V7c0-.83.67-1.5 1.5-1.5ZM14 25l1.06-1.06 1.65-1.65a1 1 0 0 1 .7-.29H21a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h3.59a1 1 0 0 1 .7.3l1.65 1.64L14 25Zm.69-13.94.33.54.62.14 1.3.3-.88 1.02-.41.47.05.64.12 1.33-1.23-.52-.59-.25-.59.25-1.23.52.12-1.33.05-.64-.41-.47-.88-1.02 1.3-.3.62-.14.33-.54L14 9.9l.69 1.15Zm-5.59-.1 2.93-.68 1.54-2.57a.5.5 0 0 1 .86 0l1.54 2.57 2.93.68a.5.5 0 0 1 .26.81l-1.96 2.27.25 2.99a.5.5 0 0 1-.69.5L14 16.36l-2.76 1.17a.5.5 0 0 1-.7-.5l.26-3-1.96-2.26a.5.5 0 0 1 .26-.81Z"/></svg>'
        },
        564930: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M14.39 4.36a.75.75 0 0 0-.78 0l-10 6a.75.75 0 0 0 0 1.28l3.64 2.18v3.78a5.5 5.5 0 0 0 1.72 3.66A6.96 6.96 0 0 0 14 23.25c2.2 0 3.9-.86 5.03-2a5.5 5.5 0 0 0 1.72-3.65v-3.77l2.5-1.5V17h1.5v-6c0-.26-.14-.5-.36-.64l-10-6Zm4.86 10.36-4.86 2.92a.75.75 0 0 1-.78 0l-4.86-2.92v2.88c0 .66.39 1.7 1.28 2.6A5.47 5.47 0 0 0 14 21.74c1.8 0 3.1-.69 3.97-1.56a4.04 4.04 0 0 0 1.28-2.59v-2.86ZM14 16.12 22.54 11 14 5.87 5.46 11 14 16.13Z"/></svg>'
        },
        155381: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M6 5.5h13c.28 0 .5.22.5.5v14a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6c0-.28.22-.5.5-.5zM4 6c0-1.1.9-2 2-2h13a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zm4 4.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5H8zM7.25 14c0-.41.34-.75.75-.75h9a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75zM8 16.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H8z"/><path fill="currentColor" d="M8.06 23.5A2 2 0 0 0 10 25h12a2 2 0 0 0 2-2V9a2 2 0 0 0-1.5-1.94V23a.5.5 0 0 1-.5.5H8.06z"/></svg>'
        },
        191749: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M18.5 8.5h2v12h-2v-12ZM17 7h5v15H5v-7h4v-5h5v3h3V7Zm-6.5 4.5h2v9h-2v-9Zm-4 5h2v4h-2v-4Zm10-2h-2v6h2v-6Z"/></svg>'
        },
        686547: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M14 22.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm0 1.5a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm-1-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-2-5.5a3 3 0 1 1 6 0c0 .96-.6 1.48-1.17 1.98-.55.48-1.08.95-1.08 1.77h-1.5c0-1.37.7-1.9 1.33-2.38.49-.38.92-.71.92-1.37 0-.82-.68-1.5-1.5-1.5s-1.5.68-1.5 1.5H11Z"/></svg>'
        },
        594653: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M20.52 8.54l-1.78 1.78a6 6 0 1 1-1.06-1.06l1.78-1.78a8.5 8.5 0 1 0 1.06 1.06zm-5.74 3.62l1.83-1.83a4.5 4.5 0 1 0 1.06 1.06l-1.83 1.83A2 2 0 0 1 14 16a2 2 0 1 1 .78-3.84zm6.8-4.68a10 10 0 1 1-.51-.55c.18.18.35.36.51.55z"/></svg>'
        },
        180852: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="m23.53 7.53-5.09 5.09a2.75 2.75 0 0 1-3.88 0l-3.18-3.18a1.25 1.25 0 0 0-1.76 0l-5.09 5.09-1.06-1.06 5.09-5.09a2.75 2.75 0 0 1 3.88 0l3.18 3.18c.48.48 1.28.48 1.76 0l5.09-5.09 1.06 1.06ZM11.25 21.99V22h-1.5V14h1.5V22Zm12 0V22h-1.5V14h1.5V22Zm-15 0V22h-1.5V16h1.5V22Zm6 0V22h-1.5V16h1.5V22Zm6 0V22h-1.5V16h1.5V22Zm-3 0V22h-1.5V18h1.5V22Zm-12 0V22h-1.5V19h1.5V22Z"/></svg>'
        },
        404052: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8 3h1.5v5H12v12H9.5v5H8v-5H6V8h2V3z"/><path fill="currentColor" fill-rule="evenodd" d="M19.5 3H18v5h-2v12h2v5h1.5v-5H22V8h-2.5V3zm1 6.5h-3v9h3v-9z"/></svg>'
        },
        786724: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M7.5 3H6v19.5H4V24h5.5v-1.5h-2V19h17.78l-3.92-7 3.97-7H7.5V3zm0 14.5v-4.75H14v4.75H7.5zm6.5-6.25H7.5V6.49H14v4.76zm1.5 6.25v-4.75h4.56l2.66 4.75H15.5z"/></svg>'
        },
        377135: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M4 4h20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-9v4h6v1.5H8V23h5.5v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1.5h9V15H3.5V6a.5.5 0 0 1 .5-.5zM24.5 15V6a.5.5 0 0 0-.5-.5h-9V15h9.5z"/></svg>'
        },
        543325: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M13.45 4.36a.75.75 0 0 1 .78 0l9.9 6a.75.75 0 0 1 .37.64v6H23v-4.67l-2.41 1.5v5.87a2 2 0 0 1-1.19 1.83l-4.75 2.1a2 2 0 0 1-1.62 0l-4.75-2.1a2 2 0 0 1-1.2-1.83v-5.88l-3.63-2.18a.75.75 0 0 1 0-1.28l10-6zM22.38 11l-8.54 5.13L5.3 11l8.54-5.13L22.38 11z"/></svg>'
        },
        777567: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor"><path d="M17 15h-6v3h6v-3z"/><path fill-rule="evenodd" d="M19 5v3h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-1.5.5V8h-7V5.5h7zM9.5 16h-4v6a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5v-6h-4v-2.5h-9V16z"/></g></svg>'
        },
        125818: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M4 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zm7.5-.5H22a.5.5 0 0 1 .5.5v5h-11V5.5zm-1.5 0H6a.5.5 0 0 0-.5.5v9H10V5.5zm1.5 7H16v10h-4.5v-10zm6 5.5v4.5H22a.5.5 0 0 0 .5-.5v-4h-5z"/></svg>'
        },
        898304: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14 2c-3.87 0-7 3.18-7 7.11h3.5c0-1.95 1.57-3.55 3.5-3.55s3.5 1.6 3.5 3.55c0 1.56-1.01 2.35-2.15 3.24l-.6.45C13.43 13.77 12 14.83 12 17h3.5c0-1.1.8-1.7 1.74-2.38.34-.24.7-.5 1.03-.8C19.62 12.62 21 11.38 21 9.1A7.05 7.05 0 0 0 14 2z"/><path fill="currentColor" fill-rule="evenodd" d="M17 22a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-1.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>'
        },
        656394: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M23 12a8.98 8.98 0 0 1-3 6.7V21a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2H9a1 1 0 0 1-1-1v-2.3A9 9 0 1 1 23 12zm-1.5 0a7.48 7.48 0 0 1-2.4 5.5h-4.6V13H18v-1.5h-8V13h3v4.5H8.9A7.5 7.5 0 1 1 21.5 12z"/></svg>'
        },
        154591: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor"><path d="M10 3.5H7a.5.5 0 0 0-.5.5v20a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2H22v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v2h-1.5V4a.5.5 0 0 0-.5-.5h-3V6h-7V3.5z"/><path d="M20.5 20v-2h-1.2v-8h1.2V8H22v2h1.3v8H22v2h-1.5zm-6.3-9h1.5v3H17v5h-1.3v2h-1.5v-2H13v-5h1.2v-3z"/></g></svg>'
        },
        681260: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M4 4v19h18.25A1.75 1.75 0 0 0 24 21.25V10h-3V4H4zm15.5 17.5h-14v-16h14v16zM8 7h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-1.25 8a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1-.75-.75zm0 3a.75.75 0 0 1 .75-.75H13a.75.75 0 0 1 0 1.5H7.5a.75.75 0 0 1-.75-.75zM14.5 7.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3zm0 3a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3z"/></svg>'
        },
        494458: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14 22.5c1.55 0 3-.41 4.25-1.14l-1.07-1.85a6.36 6.36 0 1 1 1.04-10.27l-1.13 1a4.86 4.86 0 1 0-.66 7.97l-1.07-1.85a2.73 2.73 0 1 1 .1-4.66l-1.96 1.74a.75.75 0 0 0 1 1.12l7.45-6.63A9.96 9.96 0 0 1 24 14 10 10 0 1 1 14 4a9.97 9.97 0 0 1 6.96 2.81l-1.13 1A8.5 8.5 0 1 0 14 22.5z"/></svg>'
        },
        753804: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="m17.38 18-5.63-4.67-5.17 1.8a.5.5 0 0 1-.56-.79l7.6-9.85a.5.5 0 0 1 .78-.02l8.22 9.59a.5.5 0 0 1-.11.75L17.38 18zm-8.13-5.39 4.81-6.23 6.66 7.77-3.22 2-5.44-4.5-2.8.96z"/><path fill="currentColor" d="m21.27 17.88 3.15 4.33a.5.5 0 0 1-.4.8H3.98a.5.5 0 0 1-.4-.8l3.33-4.58a.5.5 0 0 1 .24-.18l4.1-1.37a.5.5 0 0 1 .46.07l5.02 3.65a.5.5 0 0 0 .56.02l3.31-2.07a.5.5 0 0 1 .67.13z"/></svg>'
        },
        506054: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M6.95 16h5.55a.5.5 0 0 1 .5.5v7a.5.5 0 0 0 .9.3l7.5-10a.5.5 0 0 0-.4-.8h-5.5a.5.5 0 0 1-.5-.5V4.6a.5.5 0 0 0-.91-.28l-7.55 10.9a.5.5 0 0 0 .41.78z"/></svg>'
        },
        183993: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M10.5 2.27 7.83 7.82 2.27 10.5l5.56 2.67 2.67 5.55 2.68-5.55 5.55-2.67-5.55-2.68-2.68-5.55zm0 3.45 1.55 3.22 3.22 1.56-3.22 1.55-1.55 3.22-1.55-3.22-3.22-1.55 3.22-1.56 1.55-3.22zM20.63 17.37 19 14l-1.63 3.37L14 19l3.37 1.62L19 24l1.63-3.38L24 19l-3.37-1.63z"/></svg>'
        },
        82556: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M21.22 21a14.63 14.63 0 0 0 .4-15l-1.32.7a13.21 13.21 0 0 1-.37 13.55l1.3.75z"/><path fill="currentColor" d="M17.3 19.31a9.92 9.92 0 0 0 .46-11.8l-1.32.69A8.5 8.5 0 0 1 16 18.56l1.3.75zM6.57 7.36l7.26 5.08a1 1 0 0 1 0 1.64l-7.26 5.08A1 1 0 0 1 5 18.34V8.18a1 1 0 0 1 1.57-.82z"/></svg>'
        },
        953943: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M25 14a11 11 0 1 1-22 0 11 11 0 0 1 22 0zM12 4.97a9.19 9.19 0 0 0-2.62 1.02 9.3 9.3 0 0 0-2.61 2.24l.26-.26.05.04a6.48 6.48 0 0 0 1.4.8c.3.13.68.26 1.1.39A14.23 14.23 0 0 1 12 4.97zm-4.97 3zM13.99 5l-.16.16a12.74 12.74 0 0 0-2.77 4.36 18 18 0 0 0 2.94.22c1.14 0 2.11-.09 2.94-.23a12.74 12.74 0 0 0-2.4-3.95 13.6 13.6 0 0 0-.54-.56zm.55 17.42a12.74 12.74 0 0 0 2.4-3.96 18.06 18.06 0 0 0-2.94-.22c-1.14 0-2.11.09-2.94.23a12.74 12.74 0 0 0 2.93 4.5c.2-.17.37-.36.55-.55zm2.85-11.46c-.96.17-2.08.28-3.39.28-1.3 0-2.43-.11-3.39-.28a12.68 12.68 0 0 0-.36 3.03c0 1.1.14 2.11.36 3.03a19.29 19.29 0 0 1 3.39-.28c1.3 0 2.43.11 3.39.28a12.67 12.67 0 0 0 0-6.06zM12 23.03a14.32 14.32 0 0 1-2.42-4.23 9.92 9.92 0 0 0-1.1.4c-.55.22-.92.45-1.16.6a3.3 3.3 0 0 0-.29.23h-.01L7.01 20l-.24-.24A9.25 9.25 0 0 0 12 23.03zm-4.97-3zm-.91-1.2.35-.26c.32-.22.78-.5 1.43-.76.36-.15.77-.3 1.25-.44a14.18 14.18 0 0 1-.4-3.37c0-1.22.15-2.35.4-3.37a11.4 11.4 0 0 1-1.25-.44 8.01 8.01 0 0 1-1.43-.76 4.75 4.75 0 0 1-.35-.27A9.2 9.2 0 0 0 4.75 14c0 1.77.5 3.43 1.37 4.84z"/></svg>'
        },
        765190: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#2962FF" d="M10.29 10.28A37.9 37.9 0 0 1 14 7c.46.35.92.73 1.39 1.12l4.01 3.94c.57.64 1.1 1.29 1.59 1.93A37.87 37.87 0 0 1 14 20.98 37.9 37.9 0 0 1 7.01 14c.95-1.24 2.05-2.5 3.28-3.72Z"/><path fill="#2BD9BC" d="M3.6 3.6c.66-.66 1.92-.82 3.78-.26 1.67.5 3.66 1.53 5.76 3.03a39.15 39.15 0 0 0-6.77 6.76A20.49 20.49 0 0 1 3.34 7.4c-.56-1.86-.4-3.13.26-3.8Zm14.85 5.96a39.13 39.13 0 0 1 3.18 3.57 20.48 20.48 0 0 0 3.03-5.74c.56-1.86.4-3.13-.26-3.8-.66-.65-1.92-.8-3.78-.25-1.67.5-3.66 1.53-5.76 3.03 1.2.94 2.41 2 3.6 3.19Zm0 8.88a39.15 39.15 0 0 0 3.18-3.58 20.49 20.49 0 0 1 3.03 5.75c.56 1.85.4 3.12-.26 3.78-.66.66-1.92.82-3.78.27a20.53 20.53 0 0 1-5.76-3.04c1.2-.93 2.41-2 3.6-3.18Zm-8.9 0a39.17 39.17 0 0 0 3.59 3.18c-2.1 1.5-4.1 2.54-5.76 3.04-1.86.55-3.12.39-3.78-.27-.66-.66-.82-1.93-.26-3.78.5-1.67 1.53-3.66 3.03-5.75.93 1.2 2 2.4 3.18 3.58Z"/></svg>'
        },
        464175: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#72D927" d="M13 21.86c.17-.22.32-.43.45-.64l.03-.04c.15.22.32.45.51.68v5.15h-1v-5.15Zm1.12-6.72c.34-.64.8-1.34 1.37-2.06.07-.89.12-1.84.12-2.83 0-3.29-.71-5.9-2.13-8.46a16.05 16.05 0 0 0-2.1 8.46c0 .97.04 1.9.12 2.78l.02.04c.6.76 1.08 1.5 1.43 2.17.26.48.45.94.57 1.37.11-.45.32-.95.6-1.47Zm2.2 3.88-.76-.4c.47-.12 1-.34 1.56-.63.45-.24.94-.54 1.44-.9l1.02-.1a12.3 12.3 0 0 1 5.8.84 11.97 11.97 0 0 1-5.59 1.7c-.83.07-1.62.09-2.35.07l-.31-.16c-.27-.16-.54-.3-.8-.42Zm-.5.86c-.26-.11-.5-.2-.72-.27a2.4 2.4 0 0 0-.82-.11c-.2.01-.25.07-.27.09-.01.02-.06.09-.02.27.03.2.13.44.32.74a7.7 7.7 0 0 0 1.89 1.94c.8.6 1.81 1.13 3.25 1.14a5.14 5.14 0 0 0-1.94-2.79c-.28-.21-.57-.4-.85-.57l-.84-.44Zm-4.51-1.1-.3.16c-.54.2-1.11.5-1.68.88H8.07c-1.77-.14-3.7-.52-5.6-1.7a14.3 14.3 0 0 1 6.13-.67l.05.02c.41.27.82.51 1.2.71.51.27 1 .48 1.46.6Zm-5.15-4.66a11.39 11.39 0 0 1-3.4-5.95 12.3 12.3 0 0 1 6.08 3.4 18.07 18.07 0 0 1 3.2 4.11c.33.6.5 1.12.57 1.5.05.4-.03.57-.1.63-.06.06-.24.14-.65.08a5.3 5.3 0 0 1-1.53-.57 18.5 18.5 0 0 1-4.17-3.2Zm1.3 9.64c1.45 0 2.44-.52 3.25-1.12a7.62 7.62 0 0 0 1.87-1.93c.19-.3.29-.55.32-.74.04-.18 0-.25-.02-.27-.02-.02-.07-.08-.27-.1-.2-.01-.47.02-.81.12-.69.2-1.55.63-2.4 1.27a5.1 5.1 0 0 0-1.93 2.77Zm16.6-15.53a11.36 11.36 0 0 1-3.35 5.76 18.5 18.5 0 0 1-4.08 3.14c-.6.31-1.1.5-1.49.57-.4.06-.55-.02-.6-.07-.06-.04-.14-.2-.08-.58.06-.38.24-.87.56-1.46.63-1.16 1.72-2.6 3.15-4.01a12.25 12.25 0 0 1 5.89-3.35Z"/></svg>'
        },
        354345: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#00B8D4" d="m16.5 1.5-4 4L14 7l4-4-1.5-1.5Zm6 6-4 4L20 13l4-4-1.5-1.5Z"/><path fill="#F7525F" d="m21.5 17.5-13-13L7 6l1.47 1.47C7.2 8.7 4.2 12.14 6.07 16.01c-.45.61-1.05 1.7-.78 2.8-.84.76-1.79 2-1.79 3.69 0 1.22.6 3.26 2.68 3.95 1.95.65 3.55.08 4.88-.55l.85-.42 1-.49a5.51 5.51 0 0 1 1.69-.5c1.59-.16 2.6.28 3.2.7a3.38 3.38 0 0 1 .83.8V26a81.65 81.65 0 0 1 1.74-1l-.01-.01a1.87 1.87 0 0 0-.1-.15c-.06-.1-.15-.21-.26-.35a5.37 5.37 0 0 0-1.06-.95 6.62 6.62 0 0 0-4.54-1.03c-.85.08-1.61.35-2.3.66-.37.16-.8.38-1.2.58l-.7.35c-1.18.56-2.18.85-3.38.45-.93-.3-1.32-1.27-1.32-2.05 0-.83.43-1.53 1-2.09 1.33.83 2.75.06 3.49-.48 3.87 1.87 7.32-1.13 8.54-2.4L20 19l1.5-1.5ZM11 15H9l3-4v3h2l-3 4v-3Z"/></svg>'
        },
        974194: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#12CECE" d="m3.27 10 5.15-6h4.2l-5.56 6H3.27Zm5.17 0 5.33-5.77L18.84 10H8.44Zm-.39 1h11.17l-5.3 12.59L8.04 11Zm-1.1 0 4.88 10.45L3.21 11h3.74Zm13.36 0-4.53 10.7L24.4 11h-4.08Zm-.12-1h4.12l-5.16-6H14.9l5.28 6Z"/></svg>'
        },
        627123: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#B39DDB" d="M18.8 5.52c6.62 0 9.9 10.85 6.14 15.4-2.6 3.16-6.46-5.56-10.94-11.14l-.36-.47C9.3 14.94 5.6 23.98 3.06 20.9-.7 16.35 2.58 5.5 9.2 5.5c1.63 0 3.09 2.05 4.43 3.8l.36-.46c1.44-1.84 3.01-3.32 4.8-3.32Z"/><path fill="#2962FF" fill-rule="evenodd" d="M1.54 11.24c1.22-3.41 3.9-6.49 7.67-6.49 1.12 0 2.08.7 2.85 1.46.56.55 1.1 1.22 1.59 1.87.67-.83 1.39-1.6 2.17-2.19a4.95 4.95 0 0 1 2.97-1.12c3.78 0 6.45 3.08 7.67 6.49 1.23 3.4 1.17 7.57-.94 10.13-.4.5-.9.84-1.5.93a2.52 2.52 0 0 1-1.63-.37c-.95-.55-1.9-1.63-2.82-2.87a82.47 82.47 0 0 1-2.96-4.35 66.88 66.88 0 0 0-2.96-4.18 69.97 69.97 0 0 0-3.09 4.72c-.78 1.25-1.54 2.48-2.27 3.53-.89 1.28-1.8 2.42-2.7 3-.48.31-1.02.52-1.6.46-.6-.06-1.1-.4-1.51-.88C.37 18.82.3 14.65 1.54 11.24ZM12.7 9.31a66.3 66.3 0 0 0-3.42 5.18 87.14 87.14 0 0 1-2.22 3.45c-.9 1.3-1.66 2.2-2.3 2.61-.3.2-.5.23-.62.22-.1 0-.27-.07-.5-.35-1.64-1.98-1.82-5.52-.7-8.67 1.14-3.15 3.42-5.5 6.27-5.5.5 0 1.09.33 1.8 1.03.57.57 1.12 1.28 1.69 2.03Zm1.89 0a64.15 64.15 0 0 1 3.27 4.6l.5.74c.85 1.3 1.65 2.5 2.41 3.53a9.45 9.45 0 0 0 2.37 2.47c.3.18.51.2.66.18.13-.02.32-.1.56-.4 1.64-1.98 1.82-5.51.7-8.66-1.14-3.15-3.42-5.5-6.27-5.5-.67 0-1.35.28-2.07.82a12.1 12.1 0 0 0-2.13 2.21v.01Z"/></svg>'
        },
        748224: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#868993" d="M12.01 3.5c-1.91 0-3.68.67-5.08 1.8L6 4.15a9.54 9.54 0 0 1 12.05 0l-.95 1.17a8.04 8.04 0 0 0-5.08-1.81Zm0 4c-.82 0-1.58.28-2.19.77l-.94-1.16a4.97 4.97 0 0 1 6.27 0l-.95 1.16c-.6-.49-1.36-.78-2.19-.78Zm0 2.61c-1.1 0-2 .87-2 1.95V14h4v-1.94c0-1.08-.9-1.95-2-1.95Z"/><path fill="#D500F9" d="M3.57 18.85 6.48 15h8.37l3.65 3.07 6.5 2.3V23h-3a3 3 0 0 0-6 0H10a3 3 0 0 0-6 0H2v-3.36l1.57-.78Zm5.42 4.14h-4a2 2 0 0 1 4 0ZM19 21a2 2 0 0 1 2 2h-4c0-1.1.9-2 2-2Z"/><circle fill="#868993" cx="6.99" cy="22.99" r="2"/><circle fill="#868993" cx="19.01" cy="22.99" r="2"/></svg>'
        },
        408393: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#E040FB" d="M11.63 8.63a4.7 4.7 0 0 0-6.28.32l-2.64 2.63 1.05 1.07 2.65-2.63a3.2 3.2 0 0 1 4.14-.32l1.08-1.07Zm7.47 9.8a3.33 3.33 0 0 1-.53 4.05L16 25.03l1.06 1.07 2.56-2.56a4.84 4.84 0 0 0 .57-6.19l-1.1 1.09Z"/><path fill="#FF9800" d="M7.62 23.24c-1.3.8-3.28 1.3-4.82 1.4l.2-.7c.25-.8.62-1.8 1.1-2.69.48-.9 1.04-1.6 1.64-1.9.29-.14.58-.18.9-.12.32.06.71.25 1.16.65.94.82 1.12 1.46 1.05 1.91-.08.49-.49.99-1.23 1.45Z"/><path fill="#E040FB" fill-rule="evenodd" d="m5.48 16.13 7.24 7.28 10.63-10.67c1.16-1.3 3-4.43 2.45-9.18-5.47-1.01-8.65 1.08-10.04 2.37-.69.63-3.27 3.22-5.86 5.8-1.63 1.63-3.26 3.26-4.42 4.4Zm15.64-7.5c.52 0 .95-.44.95-.97a.96.96 0 0 0-.95-.97.96.96 0 0 0-.96.97c0 .53.43.96.96.96Z"/></svg>'
        },
        586240: e => {
            "use strict";
            e.exports = JSON.parse('{"size-header-height":"64px","size-sticky-symbol-header-height":"64px","media-tablet":"screen and (max-width: 1019px)","media-phone":"screen and (max-width: 767px)","media-phone-vertical":"screen and (max-width: 479px)","media-extreme-thin":"screen and (max-width: 329px)","media-mf-legacy-phone":"screen and (min-width: 480px)","media-mf-legacy-notebook":"screen and (min-width: 1020px)","media-mf-phone-landscape":"screen and (min-width: 568px)","media-mf-tablet-vertical":"screen and (min-width: 768px)","media-mf-tablet-landscape":"screen and (min-width: 1024px)","media-mf-laptop":"screen and (min-width: 1280px)","media-mf-desktop-medium":"screen and (min-width: 1440px)","media-mf-desktop-large":"screen and (min-width: 1920px)","z-index-sticky-search-bar":101}')
        }
    }
]);