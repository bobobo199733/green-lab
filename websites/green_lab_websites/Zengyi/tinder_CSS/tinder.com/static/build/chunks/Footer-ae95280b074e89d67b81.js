/*! For license information please see Footer-ae95280b074e89d67b81.js.LICENSE.txt */
"use strict";
(globalThis.webpackChunktinderweb = globalThis.webpackChunktinderweb || []).push([
    [49097], {
        251870: (e, a, s) => {
            s.r(a), s.d(a, {
                UnconnectedFooter: () => G,
                default: () => ae
            });
            var l = s(590132),
                i = s(585152),
                t = s(689447),
                o = s(346922),
                n = s(495356),
                m = s(991931),
                c = s.n(m),
                r = s(369216),
                d = s(90570),
                p = s(365701),
                u = s(420689);
            const g = ({
                children: e,
                fallback: a = null
            }) => {
                const [s, l] = (0, i.useState)(!1);
                return (0, i.useEffect)((() => {
                    l(!0)
                }), []), s ? e : a
            };
            var v = s(747633),
                h = s(551661),
                b = s(642653),
                Z = s(389911),
                x = s(923754),
                k = s(18558),
                y = s(661996),
                P = s(212744);
            const M = (0, k.Z)({
                    loader: () => s.e(52427).then(s.bind(s, 409889))
                }),
                N = (0, k.Z)({
                    loader: () => s.e(98861).then(s.bind(s, 383043))
                }),
                C = (0, k.Z)({
                    loader: () => s.e(908).then(s.bind(s, 237397))
                }),
                $ = (0, k.Z)({
                    loader: () => s.e(23966).then(s.bind(s, 87056))
                }),
                f = (0, k.Z)({
                    loader: () => s.e(10736).then(s.bind(s, 537601))
                }),
                {
                    navMenuLinks: F
                } = p.ZP,
                L = [{
                    link: F.jobs,
                    message: "Jobs",
                    intl: "NavMenu.jobs"
                }, {
                    link: F.techBlog,
                    message: "TechBlog",
                    intl: "NavMenu.techBlog"
                }],
                S = [{
                    link: F.privacy,
                    message: "Privacy",
                    intl: "NavMenu.privacy",
                    hasLocaleParam: !0
                }, {
                    link: F.privacyAddendum,
                    message: "Privacy Addendum",
                    intl: "NavMenu.privacyAddendum",
                    hasLocaleParam: !0
                }, {
                    link: F.lbsTerms,
                    message: "LBS Terms",
                    intl: "NavMenu.lbsTerms",
                    hasLocaleParam: !0
                }, {
                    link: F.terms,
                    message: "Terms",
                    intl: "NavMenu.terms",
                    hasLocaleParam: !0
                }, {
                    link: F.cookiePolicy,
                    message: "Cookie Policy",
                    intl: "Settings.legalCookiePolicy",
                    hasLocaleParam: !0
                }, {
                    link: F.intellectualProperty,
                    message: "Intellectual Property",
                    intl: "NavMenu.intellectualProperty",
                    hasLocaleParam: !0
                }],
                T = [{
                    link: F.instagram,
                    message: "Instagram",
                    icon: N,
                    intl: "instagram"
                }, {
                    link: F.tiktok,
                    message: "TikTok",
                    icon: f,
                    intl: "tiktok"
                }, {
                    link: F.youtube,
                    message: "YouTube",
                    icon: $,
                    intl: "youtube"
                }, {
                    link: F.twitter,
                    message: "Twitter",
                    icon: C,
                    intl: "twitter"
                }, {
                    link: F.facebook,
                    message: "Facebook",
                    icon: M,
                    intl: "facebook"
                }],
                w = [{
                    link: P.oi,
                    message: "FAQ",
                    intl: "NavMenu.faq",
                    hasLocalePrefix: !0
                }, {
                    link: P.oN,
                    message: "Places",
                    intl: "PlacePage.places",
                    hasLocalePrefix: !0
                }, {
                    link: F.press,
                    message: "Press",
                    intl: "NavMenu.press"
                }, {
                    link: F.contact,
                    message: "Contact",
                    intl: "NavMenu.contact",
                    hasLocaleParam: !0
                }];
            (0, p._k)("incentiveRedemption") && w.push({
                modal: y.fn,
                message: "Promo Code",
                intl: "Incentives.promoCode",
                promoSource: "tindercom"
            });
            const A = [{
                    link: P.oi,
                    message: "FAQ",
                    intl: "NavMenu.faq",
                    hasLocalePrefix: !0
                }, {
                    link: F.safety,
                    message: "Safety",
                    intl: "NavMenu.safety"
                }, {
                    link: F.terms,
                    message: "Terms",
                    intl: "NavMenu.terms"
                }, {
                    link: F.cookiePolicy,
                    message: "Cookie Policy",
                    intl: "Settings.legalCookiePolicy"
                }],
                B = {
                    menu: [{
                        id: "NavMenu.legal",
                        data: (z = S, z.filter((e => e.link)))
                    }, {
                        id: "NavMenu.careers",
                        data: L
                    }],
                    others: w,
                    misc: A,
                    social: T
                };
            var z, D = s(438776);
            const W = ({
                    hasLocaleParam: e = !0,
                    hasLocalePrefix: a = !1,
                    intl: s,
                    link: i,
                    message: t
                }) => {
                    const {
                        formatMessage: m,
                        locale: c
                    } = (0, o.Z)();
                    i || (0, D.Z)(!1);
                    let p = i;
                    return a && (p = (0, x.Z)(p, c)), e && (p = (0, Z.Z)(p, c)), (0, l.Z)("li", {
                        className: "Lh($xl)--ml Lh($l)",
                        itemProp: "name"
                    }, t, (0, l.Z)(d.BW, {
                        className: (0, n.Z)("C($c-ds-text-primary) C($c-ds-text-brand-normal):h Fz($s)--ml Fz($xs)", r.qV),
                        href: p,
                        i13nModel: {
                            label: "Footer",
                            message: t
                        },
                        itemProp: "url"
                    }, void 0, m({
                        id: s
                    })))
                },
                q = (0, i.memo)(W);
            var E = s(662310),
                I = s(268714);
            const j = ({
                    intl: e,
                    message: a,
                    modal: s,
                    promoSource: m
                }) => {
                    const {
                        formatMessage: c
                    } = (0, o.Z)(), p = (0, t.I0)(), u = (0, i.useCallback)((() => {
                        m && p((0, I.qX)(m)), s && p((0, E.h)(s))
                    }), [p, s, m]);
                    return (0, l.Z)("li", {
                        className: "Lh($xl)--ml Lh($l)",
                        itemProp: "name"
                    }, a, (0, l.Z)(d.KX, {
                        className: (0, n.Z)(r.Ae, "C($c-ds-text-primary) C($c-ds-text-brand-normal):h Cur(p) Fz($s)--ml Fz($xs) P(0) Ta(start)"),
                        i13nModel: {
                            label: "MenuLinkModal"
                        },
                        onClick: u
                    }, void 0, c({
                        id: e
                    })))
                },
                K = (0, i.memo)(j),
                V = ({
                    items: e
                }) => (0, l.Z)("ul", {
                    className: "P(0) My(8px) M(0)--ml List(n)",
                    itemScope: !0,
                    itemType: "http://schema.org/SiteNavigationElement"
                }, void 0, e.map((e => e.modal ? (0, i.createElement)(K, { ...e,
                    key: e.message
                }) : (0, i.createElement)(q, { ...e,
                    key: e.message
                })))),
                X = (0, i.memo)(V),
                H = ({
                    items: e
                }) => {
                    const {
                        formatMessage: a
                    } = (0, o.Z)();
                    return (0, l.Z)("ul", {
                        className: "P(0) My(0) List(n)"
                    }, void 0, e.map((e => {
                        const s = e.icon;
                        return (0, l.Z)("li", {
                            className: "Sq(42px) D(ib)",
                            itemProp: "name"
                        }, e.message, (0, l.Z)(d.SN, {
                            href: e.link,
                            i13nModel: {
                                label: "Footer",
                                message: e.message
                            },
                            className: (0, n.Z)(r.Ae, "Expand Scale(1.1):h C($c-ds-text-brand-normal):h Trsdu($fast)"),
                            itemProp: "url"
                        }, void 0, (0, l.Z)(s, {
                            className: "Sq(28px)"
                        }), (0, l.Z)("span", {
                            className: "Hidden"
                        }, void 0, a({
                            id: e.intl
                        }))))
                    })))
                },
                J = (0, i.memo)(H);
            var Q, R;
            const U = "Fw($bold) Tt(u) Fz($m)--ml Fz($ms) Mb(12px)",
                Y = "Fxb(1/5)--ml Fxb(1/3) D(ib)--ml Va(t) D(b) W(1/5)--ml W(100%) Mb(8px)--ml Mb(16px) Pend(8px) Pend(12px)--ml Cntv(a)",
                O = "Mend(16px)",
                _ = e => {
                    const {
                        isMobile: a,
                        navData: s = B,
                        osFamily: t,
                        privacySettingsManage: m,
                        showAppIcons: v = !0,
                        showBlurbs: h = !0,
                        showCompanyLinks: b = !0,
                        showSocialLink: k = !0
                    } = e, y = "iOS" === t, {
                        formatMessage: P,
                        locale: M
                    } = (0, o.Z)(), N = (0, i.useMemo)((() => {
                        const e = c()(p.ZP, ["loginPage", "footer", "blurbs"]);
                        if (e) return e.map((e => (0, l.Z)("p", {
                            className: "Fz($xs) C($c-ds-text-secondary) Mt(0) Mb(12px)"
                        }, e, P({
                            id: e
                        }))))
                    }), [P]), C = (0, i.useMemo)((() => (new Date).getFullYear()), []), $ = (0, i.useMemo)((() => (0, l.Z)("div", {
                        className: "Fz($xs)--ml Fz($2xs) C($c-ds-text-secondary) W(100%) Ta(c)--s"
                    }, void 0, (0, l.Z)("div", {
                        className: "Fl(start)--ml My(8px) D(ib) W(100%)--s"
                    }, void 0, s.misc.map((({
                        link: e,
                        message: a,
                        intl: s,
                        hasLocalePrefix: t
                    }) => (0, l.Z)(i.Fragment, {}, s, (0, l.Z)(d.BW, {
                        className: (0, n.Z)("C($c-ds-text-brand-normal):h C($c-ds-text-brand-normal):a C($c-ds-text-secondary)", r.qV),
                        href: t && e ? (0, x.Z)(e, M) : (0, Z.Z)(e, M),
                        i13nModel: {
                            label: "Footer",
                            message: a
                        },
                        itemProp: "url"
                    }, void 0, P({
                        id: s
                    })), Q || (Q = (0, l.Z)("span", {
                        className: "D(ib) Mx(8px) C($c-ds-text-secondary)"
                    }, void 0, " / "))))), (0, l.Z)("div", {
                        className: "D(ib)"
                    }, void 0, (0, l.Z)(d.KX, {
                        className: (0, n.Z)(r.Ae, "C($c-ds-text-brand-normal):h C($c-ds-text-brand-normal):a Cur(p) P(0) Whs(nw)"),
                        i13nModel: {
                            label: "Footer",
                            message: "PrivacySettings"
                        },
                        onClick: m
                    }, void 0, P({
                        id: "privacySettings"
                    })))), (0, l.Z)("div", {
                        className: "Fl(end)--ml My(8px)"
                    }, void 0, P({
                        id: "LoginPage.TinderCopyRight"
                    }, {
                        year: C
                    })))), [s.misc, m, P, C, M]);
                    return (0, l.Z)("footer", {
                        className: "Bgc($c-ds-background-primary) Ta(start) Pb(20px)--s M(a) Px(20px)--ml Px(12px) Py(20px)--ml W(90%)--ml W(100%) Cntv(a) Us(t)",
                        itemScope: !0,
                        itemType: "http://schema.org/WPFooter"
                    }, void 0, b ? (0, l.Z)("div", {
                        className: "D(f) Fxw(w) My(12px)--ml My(20px) Mb(10px)--s BdB Bdbc($c-ds-divider-primary)"
                    }, void 0, s.menu.map((e => (0, l.Z)("section", {
                        className: Y
                    }, e.id, (0, l.Z)("h2", {
                        className: (0, n.Z)(U)
                    }, void 0, P({
                        id: e.id
                    })), (0, l.Z)(X, {
                        items: e.data
                    })))), k ? (0, l.Z)("section", {
                        className: Y
                    }, void 0, (0, l.Z)("h2", {
                        className: (0, n.Z)(U)
                    }, void 0, P({
                        id: "NavMenu.staySocial"
                    })), s.social.length > 0 && (0, l.Z)(J, {
                        items: s.social
                    })) : null, (0, l.Z)("section", {
                        className: Y
                    }, void 0, (0, l.Z)(X, {
                        items: s.others
                    }))) : null, v && (0, l.Z)("section", {
                        className: "D(f) D(n)--sa My(16px)--ml My(12px) Ai(c)"
                    }, void 0, (0, l.Z)("h2", {
                        className: "Mend(12px) Tt(u) Fz($m)--ml Fz($ms) Fw($bold) Fxs(0)"
                    }, void 0, P({
                        id: "LoginPage.getTheApp"
                    })), (0, l.Z)(g, {
                        fallback: R || (R = (0, l.Z)(u.Z, {
                            buttonClassName: O,
                            showAppleStore: !0,
                            showPlayStore: !0
                        }))
                    }, void 0, (0, l.Z)(u.Z, {
                        buttonClassName: O,
                        showAppleStore: !a || y,
                        showPlayStore: !a || !y
                    }))), h ? (0, l.Z)("section", {
                        className: "Cntv(a) My(0)"
                    }, void 0, N) : null, (0, l.Z)("section", {
                        className: "BdT Bdtc($c-ds-divider-primary) Py(16px)--ml Py(12px) Cf Cntv(a)"
                    }, void 0, $))
                },
                G = (0, i.memo)(_);
            const ee = {
                    privacySettingsManage: b.rJ
                },
                ae = (0, t.$j)((function(e) {
                    return {
                        isMobile: (0, v.H7)(e),
                        osFamily: (0, h.qK)(e)
                    }
                }), ee)(G)
        }
    }
]);