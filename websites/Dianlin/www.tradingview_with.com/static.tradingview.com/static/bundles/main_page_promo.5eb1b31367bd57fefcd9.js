(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [75108], {
        889597: e => {
            e.exports = {
                "round-button": "round-button-Ma_jZLM8",
                icon: "icon-Ma_jZLM8",
                content: "content-Ma_jZLM8",
                "color-brand": "color-brand-Ma_jZLM8",
                "variant-primary": "variant-primary-Ma_jZLM8",
                "disable-themes": "disable-themes-Ma_jZLM8",
                "variant-quiet-primary": "variant-quiet-primary-Ma_jZLM8",
                "variant-secondary": "variant-secondary-Ma_jZLM8",
                "variant-ghost": "variant-ghost-Ma_jZLM8",
                "color-gray": "color-gray-Ma_jZLM8",
                "color-red": "color-red-Ma_jZLM8",
                "size-xsmall": "size-xsmall-Ma_jZLM8",
                "icon-only": "icon-only-Ma_jZLM8",
                "size-small": "size-small-Ma_jZLM8",
                "size-medium": "size-medium-Ma_jZLM8",
                "size-large": "size-large-Ma_jZLM8",
                "size-xlarge": "size-xlarge-Ma_jZLM8",
                "size-xxlarge": "size-xxlarge-Ma_jZLM8",
                animated: "animated-Ma_jZLM8",
                stretch: "stretch-Ma_jZLM8"
            }
        },
        248567: e => {
            e.exports = {
                container: "container-fPkHA2Uc",
                content: "content-fPkHA2Uc",
                title: "title-fPkHA2Uc",
                description: "description-fPkHA2Uc",
                videoContainer: "videoContainer-fPkHA2Uc",
                video: "video-fPkHA2Uc",
                stickyContainer: "stickyContainer-fPkHA2Uc"
            }
        },
        192262: e => {
            e.exports = {
                arrowBlock: "arrowBlock-GktTKi5q",
                fadeInOpacity: "fadeInOpacity-GktTKi5q",
                isVisible: "isVisible-GktTKi5q",
                isHidden: "isHidden-GktTKi5q",
                fadeOutOpacity: "fadeOutOpacity-GktTKi5q",
                arrowIcon: "arrowIcon-GktTKi5q",
                bubbleAnimation: "bubbleAnimation-GktTKi5q"
            }
        },
        452156: e => {
            e.exports = {}
        },
        875482: e => {
            e.exports = {}
        },
        87745: (e, t, n) => {
            "use strict";

            function r(e, t) {
                return t || null == e || ("string" == typeof e || Array.isArray(e)) && 0 === e.length
            }
            n.d(t, {
                isIconOnly: () => r
            })
        },
        201465: (e, t, n) => {
            "use strict";
            n.d(t, {
                RoundAnchorButton: () => p,
                RoundButton: () => m
            });
            var r = n(497754);

            function i(e, t) {
                const {
                    className: n,
                    color: i = "brand",
                    variant: a = "primary",
                    size: o = "xlarge",
                    stretch: s,
                    animated: c = !1,
                    disableThemes: l = !1,
                    iconOnly: d = !1
                } = t;
                return r(n, e["round-button"], e[`color-${i}`], e[`variant-${a}`], e[`size-${o}`], c && e.animated, s && e.stretch, l && e["disable-themes"], d && e["icon-only"])
            }
            var a = n(559496),
                o = n(83436),
                s = n(8626),
                c = n(87745),
                l = n(889597),
                d = n.n(l);

            function u(e) {
                const {
                    className: t,
                    color: n,
                    variant: r,
                    size: i,
                    stretch: a,
                    animated: o,
                    disableThemes: c,
                    ...l
                } = e;
                return { ...l,
                    ...(0, s.filterDataProps)(e),
                    ...(0, s.filterAriaProps)(e)
                }
            }

            function m(e) {
                const {
                    reference: t,
                    children: n,
                    iconOnly: r,
                    endIcon: s,
                    ...l
                } = e, m = i(d(), e);
                return a.createElement("button", { ...u(l),
                    className: m,
                    ref: t
                }, !(0, c.isIconOnly)(n, r) && a.createElement("span", {
                    className: d().content
                }, n), s && a.createElement(o.Icon, {
                    className: d().icon,
                    icon: s
                }))
            }

            function f(e) {
                const {
                    className: t,
                    color: n,
                    variant: r,
                    size: i,
                    stretch: a,
                    animated: o,
                    disableThemes: c,
                    Component: l,
                    ...d
                } = e;
                return { ...d,
                    ...(0, s.filterDataProps)(e),
                    ...(0, s.filterAriaProps)(e)
                }
            }

            function p(e) {
                const {
                    reference: t,
                    children: n,
                    ...r
                } = e, o = i(d(), e), s = e.Component || "a";
                return a.createElement(s, { ...f(r),
                    className: o,
                    ref: t
                }, a.createElement("span", {
                    className: d().content
                }, n))
            }
        },
        301792: (e, t, n) => {
            "use strict";
            n.d(t, {
                ControlGroupContext: () => r
            });
            const r = n(559496).createContext({
                isGrouped: !1,
                cellState: {
                    isTop: !0,
                    isRight: !0,
                    isBottom: !0,
                    isLeft: !0
                }
            })
        },
        307754: (e, t, n) => {
            "use strict";

            function r(e) {
                let t = 0;
                return e.isTop && e.isLeft || (t += 1), e.isTop && e.isRight || (t += 2), e.isBottom && e.isLeft || (t += 8), e.isBottom && e.isRight || (t += 4), t
            }
            n.d(t, {
                getGroupCellRemoveRoundBorders: () => r
            })
        },
        8626: (e, t, n) => {
            "use strict";

            function r(e) {
                return a(e, o)
            }

            function i(e) {
                return a(e, s)
            }

            function a(e, t) {
                const n = Object.entries(e).filter(t),
                    r = {};
                for (const [e, t] of n) r[e] = t;
                return r
            }

            function o(e) {
                const [t, n] = e;
                return 0 === t.indexOf("data-") && "string" == typeof n
            }

            function s(e) {
                return 0 === e[0].indexOf("aria-")
            }
            n.d(t, {
                filterDataProps: () => r,
                filterAriaProps: () => i,
                filterProps: () => a,
                isDataAttribute: () => o,
                isAriaAttribute: () => s
            })
        },
        899389: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                sync: () => l
            });
            var r = n(62802),
                i = n(588537),
                a = n(72694);
            const o = n(586240)["size-header-height"],
                s = (0, i.ensureNotNull)(document.querySelector(".js-site-header-container"));
            let c;

            function l() {
                const e = document.querySelector(".js-main-page-promo");
                if (!e) return;
                c && (c(), c = void 0);
                const t = window.user.available_offers[a.OFFERS.cyber_monday],
                    n = window.user.available_offers[a.OFFERS.black_friday],
                    i = Boolean((null == t ? void 0 : t.show_on_mainpage) || (null == n ? void 0 : n.show_on_mainpage));
                if (window.is_authenticated && r.getBool("main_promo_closed") && !i) return void s.classList.remove("tv-header--promo");
                const l = new IntersectionObserver((e => {
                    var t;
                    t = e[0].isIntersecting, s.removeEventListener("transitionend", d), s.addEventListener("transitionend", d), s.classList.add("tv-header--animated"), s.classList.toggle("tv-header--promo", t)
                }), {
                    rootMargin: `-${o} 0px 0px 0px`
                });
                l.observe(e), c = () => l.unobserve(e)
            }

            function d() {
                s.classList.remove("tv-header--animated"), s.removeEventListener("transitionend", d)
            }
            l(), window.loginStateChange.subscribe(null, l)
        },
        164639: (e, t, n) => {
            "use strict";
            n.d(t, {
                showCookieBanner: () => r
            });
            const r = async () => {
                const {
                    cookieBannerDelegate: e
                } = await Promise.all([n.e(10146), n.e(99740), n.e(24817), n.e(17967), n.e(57561), n.e(42270), n.e(91077), n.e(27592), n.e(94599), n.e(25316), n.e(75514), n.e(18954), n.e(13830), n.e(87410), n.e(38869)]).then(n.bind(n, 43464));
                e.resolve()
            }
        },
        862441: (e, t, n) => {
            "use strict";
            n.d(t, {
                Arrow: () => c
            });
            var r = n(559496),
                i = n(497754),
                a = n(83436),
                o = n(192262),
                s = n(313698);

            function c(e) {
                const t = i(o.arrowBlock, {
                    [o.isVisible]: !e.isHidden,
                    [o.isHidden]: e.isHidden
                });
                return r.createElement("div", {
                    className: t
                }, r.createElement(a.Icon, {
                    className: o.arrowIcon,
                    icon: s
                }))
            }
        },
        437937: (e, t, n) => {
            "use strict";
            var r = n(587995),
                i = n(559496),
                a = n(575932),
                o = n(201465),
                s = n(948949),
                c = n(943306),
                l = n(248567),
                d = n(586240);
            n(875482);
            const u = d["media-phone"];

            function m() {
                const [e, t] = (0, i.useState)(s);
                return (0, i.useEffect)((() => (n(), window.addEventListener("resize", n), () => {
                    window.removeEventListener("resize", n)
                })), []), i.createElement("div", {
                    className: l.container
                }, i.createElement("div", {
                    className: l.content
                }, i.createElement("strong", {
                    className: l.title
                }, a.t("Chart. Chat. Trade. Repeat")), i.createElement("p", {
                    className: l.description
                }, a.t("Join {count} million traders and investors making better, brighter decisions in the world markets.", {
                    plural: "Join {count} millions traders and investors making better, brighter decisions in the world markets.",
                    count: 30
                }).format({
                    count: 30..toString()
                })), i.createElement(o.RoundAnchorButton, {
                    href: "/features/"
                }, a.t("Explore features")), i.createElement("div", {
                    className: l.videoContainer
                }, i.createElement("video", {
                    className: l.video,
                    src: e,
                    muted: !0,
                    autoPlay: !0,
                    loop: !0,
                    playsInline: !0
                }))));

                function n() {
                    const e = window.matchMedia(u).matches;
                    t(e ? c : s)
                }
            }
            var f = n(492579);

            function p(e) {
                return i.createElement(i.Fragment, null, i.createElement(f.PromoBlock, { ...e
                }), i.createElement(m, null))
            }
            var h = n(376240),
                v = n(899389),
                w = n(219927),
                g = n(402863),
                b = n(588537);
            (0, h.initFromInitData)(), window.is_authenticated || function() {
                const e = (0, b.ensureNotNull)(document.querySelector(".js-main-page-promo")),
                    t = (0, g.getComponentInitData)(e);
                r.hydrate(i.createElement(p, { ...t
                }), e), (0, v.sync)(), window.loginStateChange.subscribe(null, (() => (0, w.update)(e, t)), !0)
            }()
        },
        219927: (e, t, n) => {
            "use strict";
            n.d(t, {
                update: () => d
            });
            var r = n(587995),
                i = n(559496),
                a = n(62802),
                o = n(72694),
                s = n(899389),
                c = n(257330),
                l = n(164639);
            async function d(e, t) {
                if (window.is_authenticated) {
                    const d = window.user.available_offers[o.OFFERS.cyber_monday],
                        u = window.user.available_offers[o.OFFERS.black_friday];
                    if (!Boolean((null == d ? void 0 : d.show_on_mainpage) || (null == u ? void 0 : u.show_on_mainpage)))
                        if (r.unmountComponentAtNode(e), a.getBool("main_promo_closed"))(0, l.showCookieBanner)();
                        else {
                            const {
                                PromoBlock: a
                            } = await Promise.all([n.e(90519), n.e(37135), n.e(48181), n.e(35354), n.e(99740), n.e(63280), n.e(67161), n.e(34640), n.e(77846), n.e(91714), n.e(45376), n.e(60048)]).then(n.bind(n, 492579));
                            r.render(i.createElement(a, { ...t
                            }), e), (0, s.sync)(), (0, c.initHeaderSearchDialog)()
                        }
                }
            }
        },
        402863: (e, t, n) => {
            "use strict";
            n.d(t, {
                getComponentInitData: () => a
            });
            var r = n(588537),
                i = n(588948);

            function a(e) {
                return (0, i.getFreshInitData)()[(0, r.ensureDefined)(e.dataset.propsId)]
            }
        },
        376240: (e, t, n) => {
            "use strict";
            n.d(t, {
                initFromInitData: () => a
            });
            var r = n(588948),
                i = n(909740);

            function a() {
                (0, r.updateInitData)();
                const e = (0, r.getInitData)();
                "theme" in e && (0, i.setTheme)(e.theme)
            }
        },
        909740: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                setTheme: () => a,
                watchedTheme: () => i
            });
            var r = n(262325);
            const i = new(n.n(r)());

            function a(e) {
                i.setValue(e)
            }
            i.subscribe((e => {
                ! function(e, t = window) {
                    const n = "theme-" + e,
                        r = t.document.documentElement.classList;
                    for (const e of Array.from(r)) e.startsWith("theme-") && e !== n && r.remove(e);
                    r.add(n)
                }(e, window)
            }))
        },
        313698: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="23" height="23"><path fill="currentColor" d="M16.47 22.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06zm1.06-21A.75.75 0 0 0 16.47.47l1.06 1.06zM6.85 11.15l-.53-.53.53.53zm0 .7l-.53.53.53-.53zM16.47.47L6.32 10.62l1.06 1.06L17.53 1.53 16.47.47zM6.32 12.38l10.15 10.15 1.06-1.06L7.38 11.32l-1.06 1.06zm0-1.76a1.25 1.25 0 0 0 0 1.76l1.06-1.06c.1.1.1.26 0 .36l-1.06-1.06z"/></svg>'
        },
        943306: (e, t, n) => {
            "use strict";
            e.exports = n.p + "chart-big-mobile.ee4e4c685c37607c2360.mp4"
        },
        948949: (e, t, n) => {
            "use strict";
            e.exports = n.p + "chart-big.5ddfd85030f4ba213936.mp4"
        }
    },
    e => {
        e.O(0, [90519, 37135, 48181, 35354, 99740, 63280, 77301, 67161, 34640, 40968, 77846, 78346, 91714, 49944, 74701, 45376, 60048, 8348, 3086, 72066, 93419, 89806, 37352, 82472, 37202, 19768, 12620, 13608, 86742, 32547, 80624, 68479, 75514, 75932, 25977, 23127, 24951, 95170, 17487, 49371, 22513, 98449, 23889, 45387, 37339, 9103, 47872, 49473, 4980, 98898, 29667, 93602, 10605, 91472, 58731, 75239, 86348], (() => {
            return t = 437937, e(e.s = t);
            var t
        }));
        e.O()
    }
]);