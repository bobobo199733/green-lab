/*! For license information please see pc-r-LoginDesktop-0585f4e2b81947f6bca4.js.LICENSE.txt */
"use strict";
(globalThis.webpackChunktinderweb = globalThis.webpackChunktinderweb || []).push([
    [21595], {
        356210: (e, a, s) => {
            s.r(a), s.d(a, {
                UnconnectedLoginDesktop: () => w,
                default: () => L
            });
            var i = s(590132),
                o = s(585152),
                r = s(250478),
                t = s(689447),
                n = s(346922),
                l = s(365701),
                d = s(832379),
                c = s(268714),
                m = s(90570),
                p = s(76799),
                u = s(566584),
                Z = s(18558),
                x = s(752490),
                g = s(51193),
                v = s(804271),
                f = s(338762),
                h = s(459193),
                b = s(502601),
                y = s(313927);
            const M = ({
                target: e
            }) => {
                const [a, s] = (0, o.useState)(0), i = (0, o.useMemo)((() => e ? .clientHeight), [e ? .clientHeight]), r = (0, o.useRef)(i);
                return (0, o.useLayoutEffect)((() => {
                    i && (r.current = i, s(0))
                }), [i]), (0, o.useLayoutEffect)((() => {
                    let a;
                    if (e) {
                        const i = ({
                            target: e
                        }) => {
                            const {
                                scrollTop: a
                            } = e;
                            if (r.current) {
                                const e = a / r.current;
                                s(e)
                            }
                        };
                        a = (0, y.Ld)("scroll", i, {
                            target: e,
                            eventOptions: {
                                passive: !0
                            }
                        })
                    }
                    return () => {
                        a && a.unsubscribe()
                    }
                }), [e, r, i]), {
                    scrollPercentage: a
                }
            };
            var P, C, N, $ = s(981403);
            const k = (0, Z.Z)({
                    name: "Testimonial",
                    loader: () => Promise.all([s.e(63098), s.e(76082)]).then(s.bind(s, 296935))
                }),
                T = (0, Z.Z)({
                    name: "Footer",
                    loader: () => s.e(49097).then(s.bind(s, 251870))
                }),
                D = () => {
                    const {
                        formatMessage: e
                    } = (0, n.Z)(), a = (0, t.I0)(), [s, Z] = (0, o.useState)(), y = l.ZP.loginPage.billboard.i18nKey, D = l.ZP.loginPage.billboard.img ? .src, w = l.ZP.loginPage.billboard.img ? .aspectRatio, L = D && w, F = l.ZP.loginPage.disclaimer;
                    (0, x.Z)(), (0, h.Z)();
                    const {
                        openCreateAccountModal: A,
                        openLoginModal: B
                    } = (0, b.Z)({
                        showAppDownloadLinks: !0
                    }), E = (0, o.useCallback)((e => {
                        e.preventDefault(), B()
                    }), [B]), O = (0, o.useMemo)((() => ({
                        props: {
                            handleCloseModal: () => a((0, c.V3)())
                        }
                    })), [a]);
                    (0, f.Z)({
                        modalProps: O
                    });
                    const H = (0, o.useCallback)((e => Z(e)), [Z]),
                        {
                            scrollPercentage: W
                        } = M({
                            target: s
                        }),
                        I = (0, o.useMemo)((() => 1 - 2 * W), [W]);
                    return (0, i.Z)(m.t5, {
                        className: "Pos(r) Bgc($c-ds-background-primary) H(100%) Us(n) Mih(600px)",
                        i13nModel: {
                            category: d.pu,
                            label: "LoginDesktop"
                        }
                    }, void 0, (0, $.jsxs)("div", {
                        className: "Expand Ovy(s)",
                        ref: H,
                        children: [(0, i.Z)("div", {
                            className: "Expand Iso(i) Pos(r) Bgc($c-ds-background-primary-inverse) CenterAlign Fxd(c) Bxsh($bxsh-card) Mb(20px)"
                        }, void 0, (0, i.Z)(u.Z, {
                            className: "Z(1) Pos(st) T(0)",
                            theme: "dark",
                            onLoginClick: E
                        }), P || (P = (0, i.Z)(g.Z, {
                            isDesktop: !0
                        })), (0, i.Z)("div", {
                            className: "D(f) Fxd(c) Expand Ai(c)",
                            style: {
                                opacity: I
                            }
                        }, void 0, (0, i.Z)("div", {
                            className: "Pos(r) D(f) Fxd(c) Mih(200px) Expand CenterAlign"
                        }, void 0, (0, i.Z)("div", {
                            className: "D(f) W(100%) CenterAlign"
                        }, void 0, L ? (0, i.Z)(r.oM, {
                            className: "Maw(1200px) W(100%) Ov(h)",
                            ratio: w
                        }, void 0, (0, i.Z)("img", {
                            src: D,
                            alt: e({
                                id: y
                            })
                        })) : (0, i.Z)("h1", {
                            className: "M(0) C($c-ds-text-primary-overlay) Fw($bold) Fz(12vw) Fz(8vw)--l Lh(1.18) Ta(c)"
                        }, void 0, e({
                            id: y
                        }))), (0, i.Z)("div", {
                            className: "D(f) Fxd(c) W(100%) Ai(c)"
                        }, void 0, (0, i.Z)(p.Z, {
                            className: "Mt(20px) Miw(260px)",
                            i13nModel: {
                                message: "Create Account"
                            },
                            onClick: A,
                            size: "large",
                            theme: "primary"
                        }, void 0, e({
                            id: "createAccount"
                        })), l.ZP.loginPageExtraInfo ? (0, $.jsx)(v.Z, { ...l.ZP.loginPageExtraInfo
                        }) : null), F && (0, i.Z)("div", {
                            className: "Pos(a) B(10px) End(20px) C($c-ds-text-primary-overlay) Fz($2xs)",
                            "data-nosnippet": !0
                        }, void 0, e({
                            id: "LoginPage.illustrativePurposesDisclaimer"
                        }))))), C || (C = (0, i.Z)(k, {
                            className: "W(90%)",
                            autoplay: !0,
                            slidesPerView: 3
                        })), N || (N = (0, i.Z)(T, {}))]
                    }))
                },
                w = D,
                L = (0, o.memo)(D)
        },
        566584: (e, a, s) => {
            s.d(a, {
                Z: () => v
            });
            var i = s(590132),
                o = s(585152),
                r = s(495356),
                t = s(346922),
                n = s(365701),
                l = s(373032),
                d = s(336893),
                c = s(76799),
                m = s(832379),
                p = s(90570),
                u = s(493135),
                Z = s(956778),
                x = s(646494);
            const g = ({
                    className: e,
                    onLoginClick: a,
                    theme: s
                }) => {
                    const {
                        formatMessage: g
                    } = (0, t.Z)(), [v, f] = (0, o.useState)(null), h = (0, Z.Z)(), b = s === x.$, y = !b, M = e => () => {
                        f(e)
                    }, P = () => {
                        f(null)
                    };
                    return (0, i.Z)(p.E3, {
                        className: (0, r.Z)(e, "W(100%) D(f) Mih(0) Trsdu($xfast) Trsp($background) Trstf(l)", {
                            "H(76px)": y,
                            "H(96px)": b,
                            "C(#000) Bgc(#fff)": y,
                            "C(#fff)": b,
                            "Bg(t)": b
                        }),
                        i13nModel: {
                            category: m.pu,
                            label: "DesktopHeader"
                        }
                    }, void 0, (0, i.Z)("div", {
                        className: (0, r.Z)("Expand D(f) Ai(c) Jc(sb) BdB Trsp($border-color) Trstf(l)", {
                            "Bdc(t) Trsdu(0)": b,
                            "Bdc($c-ds-divider-primary) Trsdu($fast)": y
                        })
                    }, void 0, (0, i.Z)("div", {
                        className: "H(40px) Mx(28px) Mx(12px)--m D(f) Ai(c)"
                    }, void 0, (0, i.Z)(l.Z, {
                        className: "D(b) W(150px) Mend(24px) Mend(12px)--m",
                        type: b ? "white" : "default"
                    }), (0, i.Z)("ul", {
                        className: "D(f) P(0)"
                    }, void 0, h.map(((e, a) => {
                        const s = e.href ? p.BW : "span";
                        return (0, i.Z)("li", {
                            className: "Fz($m) List(n) Ta(start)",
                            onMouseOver: M(a),
                            onFocus: M(a),
                            onBlur: P,
                            onMouseOut: P
                        }, a, (0, i.Z)(s, {
                            className: (0, r.Z)("focus-outline-style Mend(40px) Mend(12px)--m Cur(p) Fw($medium) C($c-ds-brand-primary-a11y):h C($c-ds-brand-primary-a11y):f Td(u):h Td(u):f", {
                                "Td(u) C($c-ds-brand-primary-a11y)": v === a,
                                "C(#fff)": b,
                                "C($c-ds-text-secondary)": y
                            }),
                            href: e.href
                        }, void 0, g({
                            id: e.id
                        })), e ? .items ? .length && (0, i.Z)("div", {
                            className: (0, r.Z)({
                                "Op(1)": v === a,
                                "Op(0) V(h)": v !== a
                            })
                        }, void 0, (0, i.Z)(u.Z, {
                            menuItems: e.items,
                            hide: !1,
                            rootClassName: (0, r.Z)("Pt(8px) Pos(a) P(0)", {
                                "Bgc(#fff) Pt(40px) Pb(10px) Px(20px) TranslateX(-20px)": y
                            }),
                            itemColorClassName: (0, r.Z)("C($c-ds-brand-primary-a11y):h C($c-ds-brand-primary-a11y):f", {
                                "C(#fff)": b,
                                "C($c-ds-text-secondary)": !b
                            }),
                            itemClassName: "Py(4px)"
                        })))
                    })))), (0, i.Z)("div", {
                        className: "D(f) Ai(c) Fxs(0)"
                    }, void 0, (0, i.Z)("div", {
                        className: "Mx(12px) Mx(8px)--m  CenterAlign Fxs(0)"
                    }, void 0, (0, i.Z)(d.Z, {
                        theme: b ? "dark" : "light"
                    })), (0, i.Z)("div", {
                        className: "Mx(28px) Mx(8px)--m"
                    }, void 0, (0, i.Z)(c.Z, {
                        className: "Miw(120px)",
                        variant: b ? "primaryOverlay" : "primary",
                        href: n.ZP.navMenuLinks.login,
                        onClick: a,
                        i13nModel: {
                            message: "Login"
                        }
                    }, void 0, g({
                        id: "LoginPage.logIn"
                    }))))))
                },
                v = (0, o.memo)(g)
        }
    }
]);