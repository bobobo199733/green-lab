/*! For license information please see pc-DesktopLayout-bc3b60574adce6d75b5c.js.LICENSE.txt */
"use strict";
(globalThis.webpackChunktinderweb = globalThis.webpackChunktinderweb || []).push([
    [5589], {
        921950: (e, a, s) => {
            s.d(a, {
                Z: () => c
            });
            var o = s(590132),
                t = s(585152),
                n = s(137011),
                i = s(981403);
            const r = e => {
                const {
                    fill: a,
                    ...s
                } = e;
                return (0, i.jsx)(n.Z, { ...s,
                    children: (0, o.Z)("path", {
                        d: "M5.768 5.052c-1.593 0-2.529-.61-2.529-.61S.71 14.723 12.091 22c11.38-7.277 8.851-17.558 8.851-17.558s-.935.61-2.529.61c-1.593 0-3.793-.61-6.322-3.052-2.53 2.442-4.755 3.052-6.323 3.052z",
                        fill: a
                    })
                })
            };
            r.normalized = !0;
            const c = (0, t.memo)(r)
        },
        923039: (e, a, s) => {
            s.d(a, {
                Z: () => c
            });
            var o = s(590132),
                t = s(585152),
                n = s(495356),
                i = s(981403);
            const r = e => {
                const {
                    className: a,
                    col1: s,
                    col1ClassName: t,
                    col1TagName: r,
                    col2: c,
                    col2ClassName: l,
                    col2TagName: d,
                    ...m
                } = e;
                return (0, i.jsxs)("div", { ...m,
                    className: (0, n.Z)("D(f) Fxd(r) Fx($flx1) H(100%)", a),
                    children: [s ? (0, o.Z)(r, {
                        className: t
                    }, void 0, s) : null, c ? (0, o.Z)(d, {
                        className: l
                    }, void 0, c) : null]
                })
            };
            r.defaultProps = {
                col1ClassName: "Fx($flx1) H(100%)",
                col1TagName: "div",
                col2ClassName: "Fx($flx1) H(100%)",
                col2TagName: "div"
            };
            const c = (0, t.memo)(r)
        },
        7105: (e, a, s) => {
            s.d(a, {
                Z: () => h
            });
            var o, t = s(590132),
                n = s(585152),
                i = s(689447),
                r = s(346922),
                c = s(495356),
                l = s(90570),
                d = s(921950),
                m = s(662310),
                p = s(661996),
                u = s(369216),
                g = s(510033),
                v = s(524214);
            const x = ({
                    className: e
                }) => {
                    const a = (0, i.I0)(),
                        {
                            formatMessage: s
                        } = (0, r.Z)(),
                        x = (0, v.Z)(),
                        h = (0, n.useCallback)((() => {
                            x(g.kC), a((0, m.h)(p.ez))
                        }), [a, x]);
                    return (0, t.Z)(l.KX, {
                        className: (0, c.Z)(e, "Sq(40px) Sq(36px)--m Trstf(e) Trsdu($normal) Wc($transform) Pe(a)", "Cur(p) P(4px) Whs(nw) CenterAlign Fxs(0)", u.Ae),
                        onClick: h,
                        i13nModel: {
                            message: "Open safety toolkit modal"
                        }
                    }, void 0, o || (o = (0, t.Z)(d.Z, {
                        className: "Sq(24px)"
                    })), (0, t.Z)("span", {
                        className: "Hidden"
                    }, void 0, s({
                        id: "modals.safetytoolkit.title"
                    })))
                },
                h = (0, n.memo)(x)
        },
        524214: (e, a, s) => {
            s.d(a, {
                Z: () => c
            });
            var o = s(585152),
                t = s(689447),
                n = s(463608),
                i = s(510033);
            const r = {
                    funnelName: i.JZ,
                    funnelVersion: i.AX,
                    stepId: i.be,
                    stepName: i.b4
                },
                c = () => {
                    const e = (0, t.I0)();
                    return (0, o.useCallback)((a => e((0, n.L)(i.ov, { ...r,
                        actionName: a
                    }))), [e])
                }
        },
        872082: (e, a, s) => {
            s.r(a), s.d(a, {
                default: () => Ze
            });
            var o = s(590132),
                t = s(585152),
                n = s(689447),
                i = s(495356),
                r = s(981403);
            const c = e => {
                const {
                    className: a,
                    col: s,
                    colTagName: o,
                    colClassName: n,
                    ...c
                } = e;
                return (0, r.jsx)("div", { ...c,
                    className: (0, i.Z)("D(f) Fxd(r) Fx($flx1) H(100%)", a),
                    children: (0, t.createElement)(o, {
                        className: (0, i.Z)("Fx($flx1)", n)
                    }, s)
                })
            };
            c.defaultProps = {
                colTagName: "div"
            };
            const l = (0, t.memo)(c);
            var d, m = s(487850),
                p = s(387379),
                u = s(923039),
                g = s(365701),
                v = s(654743),
                x = s(58039),
                h = s(113749),
                Z = s(585083),
                $ = s(191795),
                f = s(291640);
            const {
                initial: N,
                fade: b,
                fromRight: C
            } = $.e5, B = {
                [`${N}-to-${b}`]: $.lB.fadeIn,
                [`${N}-to-${C}`]: $.lB.slideInRight,
                [`${b}-to-${b}`]: $.lB.fadeIn,
                [`${b}-to-${C}`]: $.lB.slideInRight,
                [`${b}-to-${N}`]: $.lB.fadeOut,
                [`${C}-to-${N}`]: $.lB.slideOutRight,
                [`${C}-to-${b}`]: $.lB.slideOutRight,
                [`${C}-to-${C}`]: $.lB.fadeIn
            };
            class k extends t.PureComponent {
                constructor(...e) {
                    super(...e), (0, h.Z)(this, "state", {
                        animation: N,
                        enter: !1,
                        exit: !1
                    })
                }
                static getDerivedStateFromProps(e, a) {
                    const s = a.animation,
                        o = e.animation,
                        t = B[`${s}-to-${o}`];
                    return t ? { ...t,
                        animation: o
                    } : {
                        animation: N,
                        enter: !1,
                        exit: !1
                    }
                }
                render() {
                    const {
                        keyName: e,
                        component: a,
                        pageProps: s,
                        ...t
                    } = this.props, n = a;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, o.Z)(Z.Z, {
                            enter: this.state.enter,
                            exit: this.state.exit,
                            transitionKey: e
                        }, void 0, (0, r.jsx)(n, { ...s,
                            ...t
                        })), d || (d = (0, o.Z)("div", {
                            id: f.C1
                        }))]
                    })
                }
            }
            const P = k;
            var y = s(346922),
                M = s(574320),
                T = s.n(M),
                F = s(13124),
                S = s(864724),
                q = s(692277),
                A = s(50377),
                w = s(976950),
                j = s(930940),
                H = s(386494),
                O = s(349810),
                E = s(542113),
                I = s(661996),
                z = s(662310),
                D = s(612596),
                R = s(691220),
                V = s(90570),
                L = s(434886),
                K = s(7105),
                U = s(221515),
                W = s(137011);
            const G = e => {
                const {
                    fill: a,
                    ...s
                } = e;
                return (0, r.jsx)(W.Z, { ...s,
                    children: (0, o.Z)("path", {
                        d: "M3 19.869C3 20.547 3.7 21 4.5 21h15c.8 0 1.5-.453 1.5-1.131v-7.016H3v7.016zm11.6-14.03v.565h-5c-.2 0-.3-.34-.3-.566v-.566c0-.452.4-.792.8-.792h4c.3 0 .6.34.6.792v.566h-.1zm4.8.565H16c.2-.226.2-.34.2-.566v-.566c0-1.357-1-2.262-2.3-2.262H10c-1-.114-2 .792-2 2.15v1.13H4.5c-.8.114-1.5.906-1.5 1.698v3.055h18V7.988c0-.905-.7-1.584-1.6-1.584z",
                        fill: a
                    })
                })
            };
            G.normalized = !0;
            const J = (0, t.memo)(G);
            var Q, X = s(492533),
                Y = s(271497),
                _ = s(369216),
                ee = s(517355);
            const ae = ({
                    timeout: e = 1500,
                    callback: a,
                    condition: s
                }) => {
                    (0, t.useEffect)((() => {
                        let o;
                        return s && (o = setTimeout((() => a(!0)), e)), () => {
                            o && clearTimeout(o)
                        }
                    }), [a, s, e])
                },
                se = new Set([w.bj]),
                oe = e => {
                    var a;
                    const {
                        firstPhoto: s,
                        isExploreAvailable: n,
                        isTinderU: c,
                        openModal: l,
                        pathname: d,
                        setActiveQueue: m,
                        uiTheme: p,
                        userName: u
                    } = e, [v, x] = (0, t.useState)(!1), {
                        formatMessage: h
                    } = (0, y.Z)(), Z = p === w.qh, $ = p === w.bj, f = Z || $, N = se.has(p), b = (0, i.Z)("Trsdu($fast) C($c-ds-icon-overlay):h", {
                        "Bgc($c-ds-border-icon-button-overlay):h Bgc($c-ds-border-icon-button-overlay):a C($c-ds-icon-overlay)": N,
                        "Bgc($c-ds-border-icon-button-overlay):h Bgc($c-ds-border-icon-button-overlay):a C($c-background-secondary)": !N
                    }), C = (0, i.Z)("Bdrs(50%) P(4px) Cur(p) Mx(8px) Mstart(4px):fc Mend(4px):lc", b, _.qV, {
                        "Bgc($c-ds-icon-secondary-inverse)": N,
                        "Bgc(#000.32)": !N
                    }), B = (0, t.useCallback)((() => {
                        l(I.EA, {
                            props: {
                                backgroundClassName: "Bgc(t)"
                            }
                        })
                    }), [l]);
                    ae({
                        condition: f,
                        callback: x
                    }), ae({
                        condition: d === (0, g.Bv)("likesYou"),
                        callback: x
                    });
                    const k = d.split("/"),
                        P = k[(0, q.o3)(d)],
                        M = k[(0, q.Wv)(d)],
                        T = "settings" === P && M ? (0, g.Bv)("settings") : (0, g.Bv)("recs"),
                        F = (0, g.Bv)("profile"),
                        A = (0, O.lO)(s, [3, 2]),
                        j = d === (0, g.Bv)("explore") || d === (0, g.Bv)("exploreCuratedRecs", {
                            catalogId: M
                        }),
                        H = d === (0, g.Bv)("profile"),
                        {
                            interestLeft: E,
                            interestTop: z,
                            interestRight: D,
                            interestBottom: W,
                            userCustomized: G = !1
                        } = (0, S.G$)(s),
                        oe = (0, t.useMemo)((() => (0, o.Z)(V.a, {
                            className: (0, i.Z)(C, "Sq(40px) Sq(36px)--m CenterAlign Scale(1.1):h", {
                                "Bgc(#fff.32)! C($c-ds-icon-brand)!": N,
                                "Bgc(#000.68)! C($c-ds-icon-overlay)!": !N
                            }),
                            to: T,
                            "aria-current": "page",
                            i13nModel: {
                                message: "Go back"
                            },
                            title: h({
                                id: "back"
                            })
                        }, "back", a || (a = (0, o.Z)(X.Z, {
                            className: "Sq(24px)",
                            fill: "",
                            isTinderU: c
                        })), (0, o.Z)("span", {
                            className: "Hidden"
                        }, void 0, h({
                            id: "back"
                        })))), [C, N, T, h, c]),
                        te = (0, t.useMemo)((() => [n && (0, o.Z)(V.a, {
                            className: (0, i.Z)(C, "Sq(40px) Sq(36px)--m CenterAlign", j ? {
                                "Bgc(#fff.32)! C($c-ds-icon-brand)! C($c-ds-icon-brand):h C($c-ds-icon-brand):a": N,
                                "Bgc(#000.68)! C($c-pink)!": !N
                            } : {
                                "C($c-ds-icon-overlay)! C($c-ds-icon-brand):h C($c-ds-icon-brand):a": N,
                                "C($c-ds-background-secondary)!": !N
                            }),
                            "aria-current": j ? "page" : void 0,
                            i13nModel: {
                                message: "Explore"
                            },
                            to: j ? (0, g.Bv)("recs") : (0, g.Bv)("explore"),
                            onClick: () => m(R.QUEUE_MAIN),
                            title: h({
                                id: "explore"
                            })
                        }, "explore", (0, o.Z)(Y.Z, {
                            className: "Sq(24px) M(2px)",
                            fill: ee.q.color.iconOverlay
                        }), (0, o.Z)("span", {
                            className: "Hidden"
                        }, void 0, h({
                            id: "explore"
                        }))), (0, o.Z)(V.KX, {
                            className: (0, i.Z)(C, "C($c-ds-icon-overlay) C($c-ds-icon-overlay):h Sq(40px) Sq(36px)--m CenterAlign"),
                            onClick: B,
                            i13nModel: {
                                message: "Open work mode modal"
                            },
                            title: h({
                                id: "workMode"
                            })
                        }, "work-mode", Q || (Q = (0, o.Z)(J, {
                            className: "Sq(24px) M(2px)"
                        })), (0, o.Z)("span", {
                            className: "Hidden"
                        }, void 0, h({
                            id: "workMode"
                        }))), (0, o.Z)(K.Z, {
                            className: (0, i.Z)("Mstart(8px) C($c-ds-icon-overlay) C($c-ds-icon-trust):h C($c-ds-icon-trust):a Bdrs(50%)", C),
                            variant: "flat"
                        }, "trust-fab")].filter(Boolean)), [n, C, j, N, h, B, m]);
                    return (0, o.Z)(V.bu, {
                        className: (0, i.Z)("D(f) Ai(c) Fxd(r) Jc(sb) H(--side-nav-bar-height)", "Trsdu($fast) Pos(r)", {
                            "Bgc($c-ds-background-banner-default)": p === w.P9,
                            "Bgi($g-ds-background-brand-gradient)": p === w.zg,
                            "Bgi($g-ds-background-gold)": Z,
                            "Bgi($g-ds-background-platinum)": $
                        }),
                        i13nModel: {
                            label: "DesktopNavBar"
                        },
                        "aria-label": h({
                            id: "navBar"
                        })
                    }, void 0, f && (0, o.Z)("span", {
                        className: (0, i.Z)("Pos(a) Z(0) CenterAlign Expand Bgpx(0) Bgr(nr) Animdur($xslow) Pe(n)", {
                            "Animn($anim-shimmer)": v,
                            "Bgi($gold-shimmer-gradient)": Z,
                            "Bgi($platinum-shimmer-gradient)": $
                        }),
                        onAnimationEnd: () => {
                            x(!1)
                        }
                    }), H ? (0, o.Z)("div", {
                        className: (0, i.Z)("Mx(12px)", _.qV)
                    }, void 0, oe) : (0, o.Z)(V.a, {
                        className: (0, i.Z)("Trsdu($fast) Mx(12px) P(4px) Z(1)", "Bdrs(36px) Ov(h)", "D(f) Ai(c) Whs(nw)", _.qV, b),
                        to: F,
                        i13nModel: {
                            message: "Profile"
                        },
                        title: h({
                            id: "myProfile"
                        })
                    }, void 0, (0, o.Z)(L.Z, {
                        className: "D(ib) Va(m) Fxs(0)",
                        interestLeft: E,
                        interestTop: z,
                        interestRight: D,
                        interestBottom: W,
                        interestZoom: G,
                        loader: U.G.NONE,
                        name: h({
                            id: "profilePhoto"
                        }),
                        sizeClassName: "Sq(36px) Sq(32px)--m",
                        urls: A
                    }), te.length < 4 ? (0, o.Z)("h2", {
                        className: "Fw($semibold) Fz($s) D(ib) Va(m) Mx(8px) My(0)"
                    }, void 0, u) : null), (0, o.Z)("div", {
                        className: "Fx($flx1) Mx(12px) Z(1) D(f) Ai(c) Jc(fe)"
                    }, void 0, (0, r.jsx)(r.Fragment, {
                        children: te.map((e => e))
                    })))
                };
            oe.defaultProps = {
                pathname: "",
                uiTheme: w.P9
            };
            const te = {
                    openModal: z.h,
                    setActiveQueue: D.uY
                },
                ne = {
                    [A.qd]: "isExploreAvailable"
                },
                ie = T()([(0, F.Fg)(ne), (0, n.$j)((function(e) {
                    return {
                        firstPhoto: (0, H.rv)(e),
                        isTinderU: (0, j.V1)(e),
                        uiTheme: (0, E.i9)(e),
                        userName: (0, H.vW)(e)
                    }
                }), te)])(oe);
            var re, ce = s(81533),
                le = s(366068);
            const {
                initial: de,
                fromLeft: me,
                fromRight: pe
            } = $.Dh, ue = {
                [`${de}-to-${me}`]: $.lB.slideInLeft,
                [`${me}-to-${pe}`]: $.lB.slideInRight,
                [`${me}-to-${de}`]: $.lB.slideOutLeft,
                [`${pe}-to-${me}`]: $.lB.slideOutRight
            };
            class ge extends t.PureComponent {
                constructor(...e) {
                    super(...e), (0, h.Z)(this, "state", {
                        animation: de,
                        enter: !1,
                        exit: !1
                    })
                }
                static getDerivedStateFromProps(e, a) {
                    const s = a.animation,
                        o = e.animation;
                    return {
                        enter: !1,
                        exit: !1,
                        animation: o,
                        ...ue[`${s}-to-${o}`]
                    }
                }
                render() {
                    const {
                        component: e,
                        keyName: a,
                        navbarPosition: s,
                        pathname: t,
                        pageProps: n,
                        showOverlay: i,
                        ...c
                    } = this.props, l = e, d = !this.state.enter && !this.state.exit;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, o.Z)(ie, {
                            position: s,
                            pathname: t
                        }), (0, o.Z)("nav", {
                            className: "Pos(r) NetHeight(100%,--side-nav-bar-height) Bgc($c-ds-background-primary)"
                        }, void 0, (0, o.Z)(Z.Z, {
                            enter: this.state.enter,
                            exit: this.state.exit,
                            transitionKey: d ? "static" : a
                        }, void 0, (0, r.jsx)(l, {
                            aside: !0,
                            ...n,
                            ...c
                        })), i && (re || (re = (0, o.Z)(le.Z, {
                            onClick: ce.Z
                        }))))]
                    })
                }
            }
            const ve = ge,
                xe = [...g.ZP.tinderPlusRoutes, (0, g.Bv)("subscriptionSettings")],
                he = e => {
                    const {
                        currentPath: a,
                        hasPrevPath: s,
                        initialized: n,
                        loading: i,
                        loggedIn: c,
                        pathname: d,
                        routeConfig: h,
                        routeParams: Z,
                        search: $,
                        setRouteEnd: f
                    } = e;
                    (0, x.Z)({
                        search: $,
                        routeConfig: h,
                        initialized: n,
                        loggedIn: c
                    });
                    const N = (0, v.Vy)("side", h),
                        b = (0, v.Vy)("canvas", h),
                        C = (0, g.zf)(d, xe),
                        B = (0, t.useMemo)((() => (0, r.jsx)(ve, { ...Z,
                            keyName: (0, v.Ck)(N.component, d),
                            isDesktopCard: !0,
                            pathname: d,
                            component: N.component,
                            animation: N.animation,
                            showOverlay: C,
                            pageProps: N.props,
                            navbarPosition: h.navbarPosition
                        })), [Z, N.component, N.animation, N.props, C, h.navbarPosition]),
                        k = (0, t.useMemo)((() => (0, r.jsx)(P, { ...Z,
                            keyName: (0, v.Ck)(b.component, d),
                            isDesktopCard: !0,
                            component: b.component,
                            animation: b.animation,
                            pageProps: b.props,
                            onDidMount: f
                        })), [b.component, b.animation, b.props, Z, f]);
                    return (0, o.Z)(p.Z, {
                        currentPath: a,
                        hasPrevPath: s,
                        loading: i,
                        loggedIn: c,
                        onEnter: h.onEnter,
                        params: Z,
                        prefetch: h.prefetch,
                        search: $
                    }, void 0, N.component && b.component ? (0, o.Z)(u.Z, {
                        className: "desktop Ov(h)",
                        col1TagName: "aside",
                        col1ClassName: "H(100%) Fxd(c) Pos(r) Fxg(0) Fxs(0) Fxb(25%) Miw(325px) Maw(375px)",
                        col1: B,
                        col2TagName: "main",
                        col2ClassName: "H(100%) Ov(h) Pos(r) Bgc($c-ds-background-secondary) Z(1) Fx($flx1) BdStart Bdc($c-ds-divider-primary)",
                        col2: k
                    }) : (0, o.Z)(l, {
                        colTagName: "main",
                        colClassName: "Expand Ov(h) Pos(r) Z(1)",
                        col: k
                    }), (0, r.jsx)(m.Z, { ...h.pageMeta
                    }))
                },
                Ze = (0, n.$j)(v.K, v.ZS)((0, t.memo)(he, v.wy))
        },
        366068: (e, a, s) => {
            s.d(a, {
                Z: () => c
            });
            var o = s(585152),
                t = s(495356),
                n = s(660654),
                i = s(981403);
            const r = e => {
                    const {
                        backdropClassName: a = "Bgc($c-ds-overlay-default)",
                        className: s,
                        onClick: o,
                        opacity: r = 1,
                        ...c
                    } = e;
                    return (0, i.jsx)(n.Z, { ...c,
                        className: (0, t.Z)("StretchedBox", s, a, {
                            "Pe(n)": !o
                        }),
                        onClick: o,
                        style: {
                            opacity: r
                        }
                    })
                },
                c = (0, o.memo)(r)
        }
    }
]);