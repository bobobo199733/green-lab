/*! For license information please see 6837-127cfa8ca389fcd1a384.js.LICENSE.txt */
"use strict";
(globalThis.webpackChunktinderweb = globalThis.webpackChunktinderweb || []).push([
    [6837], {
        645994: (e, s, t) => {
            t.d(s, {
                Z: () => b
            });
            var a = t(590132),
                n = t(585152),
                i = t(346922),
                o = t(495356),
                l = t(695641),
                r = t.n(l),
                u = t(369216),
                d = t(90570),
                c = t(756698),
                p = t(981403);
            const h = function(e, s) {
                    return s ? s[e] : {}
                },
                m = e => {
                    const {
                        buttonClass: s,
                        header: t,
                        subHeaders: n,
                        children: l,
                        to: r,
                        intlValues: m,
                        titleClassName: b,
                        borderRadius: k,
                        interactive: g,
                        subtitleItemClassName: P,
                        titleId: f,
                        titleSize: S,
                        subtitleSize: v,
                        vertical: N,
                        subtitleClassName: Z,
                        handleMouseEnter: C,
                        handleMouseLeave: M,
                        bold: H
                    } = e, {
                        formatMessage: w
                    } = (0, i.Z)(), y = r ? d.a : "div", T = {
                        title: t && ("string" == typeof t ? w({
                            id: t
                        }, h("header", m)) : t),
                        titleClassName: b,
                        titleId: f,
                        subtitles: n ? .map((e => "string" == typeof e ? w({
                            id: e
                        }) : e)),
                        titleSize: S,
                        subtitleSize: v,
                        subtitleItemClassName: P,
                        subtitleClassName: Z,
                        bold: H
                    }, x = r ? {
                        i13nModel: {
                            label: "ProductButton",
                            message: "Click"
                        }
                    } : {};
                    return (0, p.jsxs)(y, {
                        to: r,
                        onMouseEnter: C,
                        onMouseLeave: M,
                        className: (0, o.Z)("D(if) Ai(c) Ov(h) Expand P(16px) P(8px)--xs", {
                            "Bdrs(8px) Bxsh($bxsh-btn)": k,
                            "Cur(p)": g,
                            "Ta(c) Fxd(c) Jc(c)": N,
                            "Fxd(r) Ta(start)": !N,
                            [u.Ae]: r
                        }, s),
                        ...x,
                        children: [l, (t || n) && (0, a.Z)("span", {
                            className: "D(f) Fxd(c)"
                        }, void 0, (0, p.jsx)(c.Z, { ...T
                        }))]
                    })
                };
            m.defaultProps = {
                borderRadius: !0,
                interactive: !0,
                titleSize: "ml",
                subtitleSize: "s",
                vertical: !1,
                handleMouseEnter: r(),
                handleMouseLeave: r(),
                bold: !0
            };
            const b = (0, n.memo)(m)
        },
        700066: (e, s, t) => {
            t.d(s, {
                m: () => b,
                Z: () => g
            });
            var a = t(590132),
                n = t(585152),
                i = t(346922),
                o = t(689447),
                l = t(983330),
                r = t(747633);
            const u = t.p + "8fc3417d90616927efca64766618131e.svg",
                d = t.p + "e24e6b64d6b62f9209ee04f345b8944b.svg",
                c = t.p + "4c7c9cb7d2bfb3e36648639c7ae12995.svg",
                p = t.p + "9b48f7970a6f049cb8a1d13ca768efa2.svg",
                h = t.p + "6dcd593a7d278a1a1e52eff1f03365bb.svg",
                m = t.p + "22ebd8476c7cc7ef257f674e8e476951.svg",
                b = {
                    [l.Xk]: {
                        intlId: "tinderPlus",
                        logo: {
                            src: {
                                light: h,
                                dark: m
                            },
                            sup: "®"
                        }
                    },
                    [l.Qm]: {
                        intlId: "tinderGold",
                        logo: {
                            src: {
                                light: u,
                                dark: d
                            },
                            sup: "™"
                        }
                    },
                    [l.N8]: {
                        intlId: "tinderPlatinum",
                        logo: {
                            src: {
                                light: c,
                                dark: p
                            },
                            sup: "™"
                        }
                    }
                },
                k = ({
                    className: e,
                    tier: s
                }) => {
                    const t = b[s],
                        {
                            formatMessage: n
                        } = (0, i.Z)(),
                        l = (0, o.v9)(r.RW);
                    if (!t) return null;
                    const {
                        intlId: u,
                        logo: d
                    } = t;
                    return (0, a.Z)("div", {
                        className: e
                    }, void 0, (0, a.Z)("div", {
                        className: "Expand D(f) Fxd(r)"
                    }, void 0, (0, a.Z)("img", {
                        className: "H(100%)",
                        alt: n({
                            id: u
                        }),
                        src: d.src[l],
                        loading: "lazy"
                    }), (0, a.Z)("sup", {
                        className: "Fw($bold)",
                        "aria-hidden": "true",
                        "data-nosnippet": "true"
                    }, void 0, d.sup)))
                },
                g = (0, n.memo)(k)
        },
        775981: (e, s, t) => {
            t.d(s, {
                Z: () => h
            });
            var a = t(590132),
                n = t(585152),
                i = t(689447),
                o = t(346922),
                l = t(13124),
                r = t(50377),
                u = t(568343),
                d = t(386494),
                c = t(579342),
                p = t(104665);
            const h = () => {
                const {
                    formatMessage: e
                } = (0, o.Z)(), s = (0, i.v9)(u._E), t = (0, i.v9)(d.IF), h = (0, i.v9)(c.wA), m = (0, l.wU)(r.j_), b = (0, l.wU)(r.yO), k = (0, l.wU)(r.$Q), g = (0, l.wU)(r.Zd), P = t === p.Ot, f = P ? m : b, S = (0, n.useMemo)((() => h ? (0, a.Z)("span", {}, void 0, Math.min(99, h), h > 99 ? "+" : "") : null), [h]), v = (0, n.useMemo)((() => {
                    const s = {
                        header: "tinderPlatinum",
                        subHeaders: ["Platinum.levelUpEveryAction"]
                    };
                    switch (f) {
                        case 1:
                            return h > 3 ? {
                                header: "tinderPlatinum",
                                subHeaders: [e({
                                    id: "Platinum.controllaTestVariant1SubHeaderWithLikes"
                                }, {
                                    likesCount: S
                                })]
                            } : {
                                header: "tinderPlatinum",
                                subHeaders: ["Platinum.controllaTestVariant1SubHeaderWithoutLikes"]
                            };
                        case 2:
                            return P ? {
                                header: "Platinum.controllaTestVariant2HeaderFemale",
                                subHeaders: ["Platinum.controllaTestVariant2SubHeaderFemale"]
                            } : {
                                header: "tinderPlatinum",
                                subHeaders: ["Platinum.controllaTestVariant2SubHeaderMale"]
                            };
                        case 3:
                            return P ? s : {
                                header: "Platinum.controllaTestVariant3HeaderMale",
                                subHeaders: ["Platinum.controllaTestVariant3SubHeaderMale"]
                            };
                        default:
                            return s
                    }
                }), [f, P, h]);
                return {
                    attachMessageCopy: (0, n.useMemo)((() => {
                        const e = {
                            id: "SwipeNote.sendAMessageAndIncreaseChances"
                        };
                        if (!s) switch (g) {
                            case 1:
                                return {
                                    id: "Platinum.attachMessageTestVariant1"
                                };
                            case 2:
                                return {
                                    id: "Platinum.attachMessageTestVariant2"
                                };
                            default:
                                return e
                        }
                        return e
                    }), [g, s]),
                    controllaCopy: v,
                    settingsCopy: (0, n.useMemo)((() => {
                        switch (k) {
                            case 1:
                                return {
                                    subHeader: "Platinum.settingsTestVariant1"
                                };
                            case 2:
                                return {
                                    subHeader: "Platinum.settingsTestVariant2"
                                };
                            default:
                                return {
                                    subHeader: "Platinum.levelUpEveryAction"
                                }
                        }
                    }), [k])
                }
            }
        },
        103902: (e, s, t) => {
            t.d(s, {
                Z: () => g
            });
            var a = t(590132),
                n = t(585152),
                i = t(695641),
                o = t.n(i),
                l = t(689447),
                r = t(307681),
                u = t(983330),
                d = t(365701),
                c = t(358918),
                p = t(543753),
                h = t(639859),
                m = t(522360),
                b = t(981403);
            const k = e => {
                const {
                    buttonClassName: s,
                    className: t,
                    hasGoldSubscription: n,
                    linkPathname: i,
                    showDesktopGoldModal: k,
                    showPlatinumStringCopy: g,
                    shouldShowSubHeader: P,
                    handleOpenModal: f,
                    pathname: S,
                    subHeader: v
                } = e, N = g ? "TinderGold.seeWhoLikesYouAndMore" : "TinderGold.unlockMostExclusive", Z = {
                    buttonClassName: s,
                    className: t,
                    subscriptionType: u.Qm,
                    hasSubscription: n,
                    linkPathname: i,
                    pathname: S,
                    subHeader: v || (n ? "TinderPlus.manageYourSubscription" : N),
                    shouldShowSubHeader: P,
                    testId: "tgold-settings"
                }, C = (0, l.I0)(), M = () => {
                    !n && f && C((0, c.Dd)({
                        uuid: p.qu,
                        type: h.RW
                    }))
                };
                return (0, b.jsxs)(b.Fragment, {
                    children: [(0, a.Z)(r.ij, {}, void 0, (0, b.jsx)(m.Z, {
                        handleOpenModal: n ? o() : f,
                        ...Z
                    })), (0, a.Z)(r.yG, {}, void 0, k && !n && (0, b.jsx)(m.Z, {
                        handleOpenModal: f,
                        onClick: M,
                        ...Z
                    }), (!k || n) && (0, b.jsx)(m.Z, {
                        isFocused: (0, d.zf)(S, d.ZP.tinderPlusRoutes),
                        onClick: M,
                        ...Z
                    }))]
                })
            };
            k.defaultProps = {
                buttonClassName: "",
                className: "",
                linkPathname: "",
                hasGoldSubscription: !1,
                showDesktopGoldModal: !1,
                handleOpenModal: o(),
                subHeader: ""
            };
            const g = (0, n.memo)(k)
        },
        319790: (e, s, t) => {
            t.d(s, {
                Z: () => P
            });
            var a = t(590132),
                n = t(585152),
                i = t(695641),
                o = t.n(i),
                l = t(689447),
                r = t(365701),
                u = t(983330),
                d = t(307681),
                c = t(775981),
                p = t(358918),
                h = t(543753),
                m = t(639859),
                b = t(522360),
                k = t(981403);
            const g = e => {
                const {
                    buttonClassName: s,
                    className: t,
                    hasPlatinumSubscription: i,
                    linkPathname: g,
                    showDesktopPlatinumModal: P,
                    shouldShowSubHeader: f,
                    handleOpenModal: S,
                    pathname: v,
                    subHeader: N
                } = e, Z = (0, n.useMemo)((() => (0, r.zf)(v, r.ZP.tinderPlusRoutes)), [v]), {
                    settingsCopy: C
                } = (0, c.Z)(), M = {
                    buttonClassName: s,
                    className: t,
                    hasSubscription: i,
                    linkPathname: g,
                    pathname: v,
                    shouldShowSubHeader: f,
                    subscriptionType: u.N8,
                    subHeader: N || (i ? "TinderPlus.manageYourSubscription" : C.subHeader),
                    testId: "tplatinum-settings"
                }, H = (0, l.I0)(), w = () => {
                    !i && S && H((0, p.Dd)({
                        uuid: h.Yt,
                        type: m.RW
                    }))
                };
                return (0, k.jsxs)(k.Fragment, {
                    children: [(0, a.Z)(d.ij, {}, void 0, (0, k.jsx)(b.Z, {
                        handleOpenModal: i ? o() : S,
                        ...M
                    })), (0, a.Z)(d.yG, {}, void 0, P && !i && (0, k.jsx)(b.Z, {
                        handleOpenModal: S,
                        onClick: w,
                        ...M
                    }), (!P || i) && (0, k.jsx)(b.Z, {
                        isFocused: Z,
                        onClick: w,
                        ...M
                    }))]
                })
            };
            g.defaultProps = {
                buttonClassName: "",
                className: "",
                linkPathname: "",
                hasPlatinumSubscription: !1,
                showDesktopPlatinumModal: !1,
                handleOpenModal: o(),
                subHeader: ""
            };
            const P = (0, n.memo)(g)
        },
        886659: (e, s, t) => {
            t.d(s, {
                Z: () => g
            });
            var a = t(590132),
                n = t(585152),
                i = t(695641),
                o = t.n(i),
                l = t(689447),
                r = t(307681),
                u = t(983330),
                d = t(365701),
                c = t(358918),
                p = t(543753),
                h = t(639859),
                m = t(522360),
                b = t(981403);
            const k = e => {
                const {
                    buttonClassName: s,
                    hasSubscription: t,
                    className: n,
                    handleOpenModal: i,
                    linkPathname: k,
                    pathname: g,
                    shouldShowSubHeader: P,
                    subHeader: f
                } = e, S = {
                    buttonClassName: s,
                    className: n,
                    linkPathname: k,
                    subscriptionType: u.Xk,
                    shouldShowSubHeader: P,
                    hasSubscription: t,
                    pathname: g,
                    isFocused: (0, d.zf)(g, d.ZP.tinderPlusRoutes),
                    subHeader: f || (t ? "TinderPlus.manageYourSubscription" : "TinderPlus.getTinderPlusSubTitle"),
                    testId: "tplus-settings"
                }, v = (0, l.I0)();
                return (0, b.jsxs)(b.Fragment, {
                    children: [(0, a.Z)(r.ij, {}, void 0, (0, b.jsx)(m.Z, {
                        handleOpenModal: t ? o() : i,
                        ...S
                    })), (0, a.Z)(r.yG, {}, void 0, (0, b.jsx)(m.Z, {
                        onClick: () => {
                            !t && i && v((0, c.Dd)({
                                uuid: p.D2,
                                type: h.RW
                            }))
                        },
                        ...S
                    }))]
                })
            };
            k.defaultProps = {
                buttonClassName: "",
                className: "",
                linkPathname: "",
                hasSubscription: !1,
                handleOpenModal: o(),
                pathname: "",
                subHeader: ""
            };
            const g = (0, n.memo)(k)
        },
        522360: (e, s, t) => {
            t.d(s, {
                Z: () => c
            });
            var a = t(590132),
                n = t(113749),
                i = t(585152),
                o = t(495356),
                l = t(365701),
                r = t(645994),
                u = t(700066);
            class d extends i.PureComponent {
                constructor(...e) {
                    super(...e), (0, n.Z)(this, "shouldBeFocused", (() => {
                        const {
                            isFocused: e,
                            hasSubscription: s,
                            pathname: t,
                            showSubscriptionOptions: a
                        } = this.props;
                        if (!t) return !1;
                        const n = !s && (0, l.Bv)("checkout") === t,
                            i = (s || a) && (0, l.Bv)("subscriptionSettings") === t;
                        return n || i || e
                    })), (0, n.Z)(this, "handleLink", (() => {
                        const {
                            hasSubscription: e,
                            handleOpenModal: s,
                            linkPathname: t,
                            showSubscriptionOptions: a
                        } = this.props;
                        return t ? (0, l.Bv)(t) : e || a ? (0, l.Bv)("subscriptionSettings") : s ? "" : (0, l.Bv)("preCheckout", {
                            productType: this.props.subscriptionType
                        })
                    })), (0, n.Z)(this, "handleOnClick", (() => {
                        const {
                            handleOpenModal: e,
                            onClick: s
                        } = this.props;
                        e && e(), s && s()
                    }))
                }
                render() {
                    const {
                        buttonClassName: e,
                        className: s,
                        subHeader: t,
                        subscriptionType: n,
                        shouldShowSubHeader: i,
                        testId: l,
                        title: d
                    } = this.props;
                    return (0, a.Z)("div", {
                        onClick: this.handleOnClick,
                        className: (0, o.Z)("settings__tinderPlusContainer D(f) Ai(c) Trsdu($normal)", {
                            "Z(2) Pos(r)": this.shouldBeFocused()
                        }, s)
                    }, void 0, (0, a.Z)(r.Z, {
                        buttonClass: (0, o.Z)("Bgc($c-ds-background-primary)", e),
                        header: d,
                        titleClassName: "Fz($s)",
                        subtitleItemClassName: "Fz($xs)",
                        subHeaders: i ? [t] : [],
                        to: this.handleLink(),
                        vertical: !0
                    }, void 0, !d && (0, a.Z)(u.Z, {
                        className: (0, o.Z)("Pend(12px)--s D(ib)", {
                            "Pb(10px)": i
                        }),
                        tier: n
                    })))
                }
            }(0, n.Z)(d, "defaultProps", {
                buttonClassName: "",
                className: "",
                handleOpenModal: null,
                hasSubscription: !1,
                isFocused: !1,
                shouldShowSubHeader: !0,
                showSubscriptionOptions: !1,
                subHeader: "",
                testId: "",
                onClick: null
            });
            const c = d
        },
        93637: (e, s, t) => {
            t.d(s, {
                B2: () => k,
                C1: () => h,
                Ho: () => m,
                In: () => f,
                OX: () => o,
                Si: () => b,
                U8: () => L,
                Wd: () => d,
                Yj: () => S,
                aG: () => g,
                f3: () => r,
                g8: () => j,
                iC: () => c,
                ii: () => M,
                jj: () => v,
                ln: () => C,
                m$: () => P,
                n2: () => u,
                nj: () => Z,
                nu: () => N,
                o5: () => F,
                ps: () => l,
                pt: () => p,
                s_: () => O,
                sg: () => _
            });
            var a = t(983330),
                n = t(949194),
                i = t(50377);
            const o = "passport",
                l = "yourProfile",
                r = "undo",
                u = "superLike",
                d = "boost",
                c = "filters",
                p = "goldIntro",
                h = "combinedSubscription",
                m = "outOfLikes",
                b = "readReceipt",
                k = "swipeNote",
                g = "priorityLikes",
                P = "platinumIntro",
                f = "seeWhoLikesYou",
                S = "controlWhoSeesYou",
                v = "hide_ads",
                N = "merchandising",
                Z = "plusIntro",
                C = "likesYou",
                M = [P, p, Z, N, d],
                H = [m, d, S, o, l, u, r, v],
                w = [p, ...H, h],
                y = [k, g, f, h],
                T = [p, o, l, r, u, d, h, m, b, k, g, f, v, S, c],
                x = {
                    platinum: P,
                    plus: Z,
                    gold: p,
                    merchandising: N,
                    profileControl: l,
                    rewind: r,
                    unlimitedLikes: m
                },
                O = {
                    boost: d,
                    control_who_sees_you: S,
                    filters: c,
                    gold: h,
                    hide_ads: v,
                    hide_age_and_distance: l,
                    likes_you: p,
                    like: m,
                    passport: o,
                    plus: h,
                    preference_filters: c,
                    priority_likes: g,
                    rewind: r,
                    superlike: u,
                    superlike_attach_message: k,
                    upsell_features: h
                },
                I = e => {
                    const {
                        featuresList: s,
                        hasGold: t,
                        subscriptionName: n,
                        subscriptionType: i
                    } = e, o = i === a.Qm, l = i === a.N8;
                    let r = [...s],
                        u = [];
                    o && (r = ["likes_you", "top_picks", ...r]);
                    u = {
                        "": l ? [] : ["upsell_features", "gold", "plus"],
                        [a.Xk]: [...H],
                        [a.Qm]: ["likes_you"]
                    }[((e, s) => e === a.Xk && s ? a.Qm : e)(n, t)] || [];
                    const d = [...u];
                    return r.filter((e => {
                        const s = _(e, !0, l);
                        return !(d.includes(s) || d.includes(e))
                    }))
                },
                _ = (e, s = !1, t = !1) => "likes_you" === e && t ? f : (s ? O : x)[e] || e,
                j = (e, s, t) => {
                    const n = t ? .[e || a.Xk];
                    return n ? .[s] ? .renewalData || {}
                },
                F = (e, s) => {
                    const t = s ? .[e];
                    return t ? .upsell || a.Qm
                };

            function L(e) {
                const {
                    initialKey: s,
                    hasGold: t,
                    paywallOfferingFeatures: o,
                    shouldShowInitialKey: l,
                    subscriptionName: r,
                    subscriptionType: u
                } = e, d = ((e, s) => {
                    const t = s ? .[e];
                    return t ? .carousel
                })(u, o), c = (e => {
                    const s = (0, n.l)(i.P6);
                    return e === a.N8 && s ? s ? .split(",") : null
                })(u) || d || [];
                let p = c;
                0 === c.length && (p = (e => {
                    switch (e) {
                        case a.Xk:
                            return H;
                        case a.Qm:
                            return w;
                        case a.N8:
                            return y;
                        default:
                            return []
                    }
                })(u));
                const h = I({
                        featuresList: p,
                        hasGold: t,
                        subscriptionName: r,
                        subscriptionType: u
                    }),
                    m = u === a.N8,
                    b = h.map((e => _(e, !0, m)));
                let k = b;
                s && (k = ((e = "", s, t = !1) => {
                    const a = s.indexOf(e),
                        n = s;
                    return (a > 0 || t) && (a > 0 && n.splice(a, 1), n.unshift(e)), n
                })(s, b, l));
                const g = k.filter((e => T.includes(e))),
                    P = new Set(g);
                return Array.from(P)
            }
        }
    }
]);