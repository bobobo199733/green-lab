(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [97276, 94291, 19346], {
        733947: e => {
            e.exports = {
                button: "button-OvB35Th_",
                content: "content-OvB35Th_",
                "icon-only": "icon-only-OvB35Th_",
                "color-brand": "color-brand-OvB35Th_",
                "variant-primary": "variant-primary-OvB35Th_",
                "variant-secondary": "variant-secondary-OvB35Th_",
                "color-gray": "color-gray-OvB35Th_",
                "color-green": "color-green-OvB35Th_",
                "color-red": "color-red-OvB35Th_",
                "size-xsmall": "size-xsmall-OvB35Th_",
                "with-start-icon": "with-start-icon-OvB35Th_",
                "with-end-icon": "with-end-icon-OvB35Th_",
                "start-icon-wrap": "start-icon-wrap-OvB35Th_",
                "end-icon-wrap": "end-icon-wrap-OvB35Th_",
                "size-small": "size-small-OvB35Th_",
                "size-medium": "size-medium-OvB35Th_",
                "size-large": "size-large-OvB35Th_",
                "size-xlarge": "size-xlarge-OvB35Th_",
                animated: "animated-OvB35Th_",
                stretch: "stretch-OvB35Th_",
                grouped: "grouped-OvB35Th_",
                "adjust-position": "adjust-position-OvB35Th_",
                "first-row": "first-row-OvB35Th_",
                "first-col": "first-col-OvB35Th_",
                "no-corner-top-left": "no-corner-top-left-OvB35Th_",
                "no-corner-top-right": "no-corner-top-right-OvB35Th_",
                "no-corner-bottom-right": "no-corner-bottom-right-OvB35Th_",
                "no-corner-bottom-left": "no-corner-bottom-left-OvB35Th_"
            }
        },
        550946: e => {
            e.exports = {
                toast: "toast-r9bFT7mJ",
                "intent-success": "intent-success-r9bFT7mJ",
                "intent-warning": "intent-warning-r9bFT7mJ",
                "intent-danger": "intent-danger-r9bFT7mJ",
                image: "image-r9bFT7mJ",
                "main-content": "main-content-r9bFT7mJ",
                title: "title-r9bFT7mJ",
                "main-text": "main-text-r9bFT7mJ",
                "secondary-text": "secondary-text-r9bFT7mJ",
                actions: "actions-r9bFT7mJ",
                "close-icon": "close-icon-r9bFT7mJ",
                "close-button": "close-button-r9bFT7mJ",
                "adjust-for-close-button": "adjust-for-close-button-r9bFT7mJ"
            }
        },
        632529: e => {
            e.exports = {
                toast: "toast-P_aSOGQA"
            }
        },
        540975: (e, t, o) => {
            "use strict";
            o.d(t, {
                AnchorButton: () => u,
                Button: () => l
            });
            var r = o(559496),
                n = o(915812);

            function i(e = "default") {
                switch (e) {
                    case "default":
                        return "primary";
                    case "stroke":
                        return "secondary"
                }
            }

            function s(e = "primary") {
                switch (e) {
                    case "primary":
                        return "brand";
                    case "success":
                        return "green";
                    case "default":
                        return "gray";
                    case "danger":
                        return "red"
                }
            }

            function a(e = "m") {
                switch (e) {
                    case "s":
                        return "xsmall";
                    case "m":
                        return "small";
                    case "l":
                        return "large"
                }
            }

            function c(e) {
                const {
                    intent: t,
                    size: o,
                    appearance: r,
                    useFullWidth: n,
                    icon: c,
                    ...l
                } = e;
                return { ...l,
                    color: s(t),
                    size: a(o),
                    variant: i(r),
                    stretch: n,
                    startIcon: c
                }
            }

            function l(e) {
                return r.createElement(n.SquareButton, { ...c(e)
                })
            }

            function d(e) {
                const {
                    intent: t,
                    size: o,
                    appearance: r,
                    useFullWidth: n,
                    icon: c,
                    ...l
                } = e;
                return { ...l,
                    color: s(t),
                    size: a(o),
                    variant: i(r),
                    stretch: n,
                    startIcon: c
                }
            }

            function u(e) {
                return r.createElement(n.SquareAnchorButton, { ...d(e)
                })
            }
        },
        915812: (e, t, o) => {
            "use strict";
            o.d(t, {
                SquareButton: () => r.SquareButton,
                SquareAnchorButton: () => n.SquareAnchorButton
            });
            o(221191);
            var r = o(422175),
                n = o(951144)
        },
        951144: (e, t, o) => {
            "use strict";
            o.d(t, {
                SquareAnchorButton: () => c
            });
            var r = o(559496),
                n = o(301792),
                i = o(8626),
                s = o(221191);

            function a(e) {
                const {
                    className: t,
                    color: o,
                    variant: r,
                    size: n,
                    stretch: s,
                    animated: a,
                    icon: c,
                    iconOnly: l,
                    startIcon: d,
                    endIcon: u,
                    ...p
                } = e;
                return { ...p,
                    ...(0, i.filterDataProps)(e),
                    ...(0, i.filterAriaProps)(e)
                }
            }

            function c(e) {
                const {
                    reference: t
                } = e, {
                    isGrouped: o,
                    cellState: i,
                    disablePositionAdjustment: c
                } = (0, r.useContext)(n.ControlGroupContext), l = (0, s.getSquareButtonClasses)({ ...e,
                    isGrouped: o,
                    cellState: i,
                    disablePositionAdjustment: c
                });
                return r.createElement("a", { ...a(e),
                    className: l,
                    ref: t
                }, r.createElement(s.SquareButtonContent, { ...e
                }))
            }
        },
        221191: (e, t, o) => {
            "use strict";
            o.d(t, {
                getSquareButtonClasses: () => l,
                SquareButtonContent: () => d
            });
            var r = o(559496),
                n = o(497754),
                i = o(307754),
                s = o(83436),
                a = o(733947),
                c = o.n(a);

            function l(e) {
                const {
                    color: t = "brand",
                    size: o = "medium",
                    variant: r = "primary",
                    stretch: s = !1,
                    icon: a,
                    startIcon: l,
                    endIcon: d,
                    iconOnly: u = !1,
                    className: p,
                    isGrouped: m,
                    cellState: h,
                    disablePositionAdjustment: f = !1
                } = e, C = function(e) {
                    let t = "";
                    return 0 !== e && (1 & e && (t = n(t, c()["no-corner-top-left"])), 2 & e && (t = n(t, c()["no-corner-top-right"])), 4 & e && (t = n(t, c()["no-corner-bottom-right"])), 8 & e && (t = n(t, c()["no-corner-bottom-left"]))), t
                }((0, i.getGroupCellRemoveRoundBorders)(h));
                return n(p, c().button, c()[`size-${o}`], c()[`color-${t}`], c()[`variant-${r}`], s && c().stretch, (a || l) && c()["with-start-icon"], d && c()["with-end-icon"], u && c()["icon-only"], C, m && c().grouped, m && !f && c()["adjust-position"], m && h.isTop && c()["first-row"], m && h.isLeft && c()["first-col"])
            }

            function d(e) {
                const {
                    startIcon: t,
                    icon: o,
                    iconOnly: n,
                    children: i,
                    endIcon: a
                } = e, l = null != t ? t : o;
                return r.createElement(r.Fragment, null, l && r.createElement(s.Icon, {
                    icon: l,
                    className: c()["start-icon-wrap"]
                }), i && r.createElement("span", {
                    className: c().content
                }, i), a && !n && r.createElement(s.Icon, {
                    icon: a,
                    className: c()["end-icon-wrap"]
                }))
            }
        },
        422175: (e, t, o) => {
            "use strict";
            o.d(t, {
                SquareButton: () => c
            });
            var r = o(559496),
                n = o(301792),
                i = o(8626),
                s = o(221191);

            function a(e) {
                const {
                    className: t,
                    color: o,
                    variant: r,
                    size: n,
                    stretch: s,
                    animated: a,
                    icon: c,
                    iconOnly: l,
                    startIcon: d,
                    endIcon: u,
                    ...p
                } = e;
                return { ...p,
                    ...(0, i.filterDataProps)(e),
                    ...(0, i.filterAriaProps)(e)
                }
            }

            function c(e) {
                const {
                    reference: t,
                    ...o
                } = e, {
                    isGrouped: i,
                    cellState: c,
                    disablePositionAdjustment: l
                } = (0, r.useContext)(n.ControlGroupContext), d = (0, s.getSquareButtonClasses)({ ...o,
                    isGrouped: i,
                    cellState: c,
                    disablePositionAdjustment: l
                });
                return r.createElement("button", { ...a(o),
                    className: d,
                    ref: t
                }, r.createElement(s.SquareButtonContent, { ...o
                }))
            }
        },
        301792: (e, t, o) => {
            "use strict";
            o.d(t, {
                ControlGroupContext: () => r
            });
            const r = o(559496).createContext({
                isGrouped: !1,
                cellState: {
                    isTop: !0,
                    isRight: !0,
                    isBottom: !0,
                    isLeft: !0
                }
            })
        },
        307754: (e, t, o) => {
            "use strict";

            function r(e) {
                let t = 0;
                return e.isTop && e.isLeft || (t += 1), e.isTop && e.isRight || (t += 2), e.isBottom && e.isLeft || (t += 8), e.isBottom && e.isRight || (t += 4), t
            }
            o.d(t, {
                getGroupCellRemoveRoundBorders: () => r
            })
        },
        878003: (e, t, o) => {
            "use strict";
            o.d(t, {
                Toast: () => c
            });
            var r = o(559496),
                n = o(497754),
                i = o(901767),
                s = o(550946),
                a = o.n(s);
            const c = r.memo((e => {
                const {
                    title: t,
                    text: o,
                    secondaryText: s,
                    image: c,
                    actions: l,
                    intent: d,
                    role: u = "status",
                    showCloseButton: p = !1,
                    onClose: m,
                    onAutoFocus: h,
                    className: f
                } = e, C = r.useRef(null), g = p && !c ? a()["adjust-for-close-button"] : void 0, w = !p || c || t ? void 0 : a()["adjust-for-close-button"];
                return r.useEffect((() => {
                        "alert" === u && (void 0 !== h ? h() : null !== C.current && C.current.focus())
                    }), []),
                    r.createElement(i.ToastContainer, {
                        intent: d,
                        role: u,
                        className: f
                    }, p && r.createElement(i.CloseButton, {
                        ref: C,
                        onClick: m
                    }), c && r.createElement(i.ToastImage, null, c), r.createElement("div", {
                        className: n(a()["main-content"], p && a()["with-close-button"])
                    }, t && r.createElement(i.ToastTitle, {
                        className: g
                    }, t), o && r.createElement(i.ToastMainText, {
                        className: w
                    }, o), l && r.createElement(i.ToastActions, null, l), s && r.createElement(i.ToastSecondaryText, null, s)))
            }))
        },
        410864: (e, t, o) => {
            "use strict";
            var r;
            o.d(t, {
                    ToastIntent: () => r
                }),
                function(e) {
                    e.Default = "default", e.Success = "success", e.Warning = "warning", e.Danger = "danger"
                }(r || (r = {}))
        },
        901767: (e, t, o) => {
            "use strict";
            o.d(t, {
                CloseButton: () => d,
                ToastContainer: () => u,
                ToastImage: () => p,
                ToastTitle: () => m,
                ToastMainText: () => h,
                ToastActions: () => f,
                ToastSecondaryText: () => C
            });
            var r = o(559496),
                n = o(497754),
                i = o(410864),
                s = o(83436),
                a = o(238822),
                c = o(550946),
                l = o.n(c);
            const d = r.forwardRef(((e, t) => {
                const {
                    className: o,
                    onClick: i,
                    tabIndex: c
                } = e;
                return r.createElement("button", {
                    type: "button",
                    className: n(l()["close-button"], o),
                    tabIndex: c,
                    onClick: i,
                    ref: t
                }, r.createElement(s.Icon, {
                    icon: a,
                    className: l()["close-icon"]
                }))
            }));

            function u(e) {
                const {
                    children: t,
                    role: o,
                    className: s,
                    intent: a = i.ToastIntent.Default
                } = e, c = n(l().toast, a !== i.ToastIntent.Default && l()[`intent-${a}`], s);
                return r.createElement("article", {
                    className: c,
                    role: o
                }, t)
            }

            function p(e) {
                const {
                    children: t
                } = e;
                return r.createElement("div", {
                    className: l().image
                }, t)
            }

            function m(e) {
                const {
                    children: t,
                    className: o
                } = e;
                return r.createElement("h2", {
                    className: n(l().title, o)
                }, t)
            }

            function h(e) {
                const {
                    children: t,
                    className: o
                } = e;
                return r.createElement("p", {
                    className: n(l()["main-text"], o)
                }, t)
            }

            function f(e) {
                const {
                    children: t
                } = e;
                return r.createElement("div", {
                    className: l().actions
                }, t)
            }

            function C(e) {
                const {
                    children: t
                } = e;
                return r.createElement("p", {
                    className: l()["secondary-text"]
                }, t)
            }
        },
        8626: (e, t, o) => {
            "use strict";

            function r(e) {
                return i(e, s)
            }

            function n(e) {
                return i(e, a)
            }

            function i(e, t) {
                const o = Object.entries(e).filter(t),
                    r = {};
                for (const [e, t] of o) r[e] = t;
                return r
            }

            function s(e) {
                const [t, o] = e;
                return 0 === t.indexOf("data-") && "string" == typeof o
            }

            function a(e) {
                return 0 === e[0].indexOf("aria-")
            }
            o.d(t, {
                filterDataProps: () => r,
                filterAriaProps: () => n,
                filterProps: () => i,
                isDataAttribute: () => s,
                isAriaAttribute: () => a
            })
        },
        193e3: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                initNotification: () => T
            });
            var r = o(559496),
                n = o(575932),
                i = (o(897116), o(501867)),
                s = o.n(i),
                a = o(239401),
                c = o(878003),
                l = o(540975),
                d = o(13830),
                u = o(631078),
                p = o(909740),
                m = o(919346),
                h = o(568919),
                f = (o(659863), o(226722)),
                C = o(632529),
                g = o(830123),
                w = o(729942);
            const b = "donateNotificationClose";
            let y = null;

            function v(e) {
                const {
                    onRemove: t
                } = e, {
                    coins: o,
                    fromUsername: i,
                    fromId: s,
                    text: a
                } = e.data, d = (0, u.useWatchedValueReadonly)({
                    watchedValue: p.watchedTheme
                }), y = n.t("Someone's appreciating your epic work."), v = n.t("{username} sent you {amount} coins").format({
                    amount: o.toString(),
                    username: i
                }), T = (0, r.useCallback)((() => {
                    (0, h.openPMDialog)(s, i), F()
                }), [s]), F = (0, r.useCallback)((() => {
                    f.TVXWindowEvents.emit(b), t()
                }), [t]), x = r.createElement("img", {
                    src: d === m.StdTheme.Dark ? w : g,
                    role: "presentation"
                }), S = r.createElement(l.Button, {
                    onClick: T,
                    size: "s"
                }, n.t("Say thanks to {username}").format({
                    username: i
                }));
                return r.createElement(c.Toast, {
                    className: C.toast,
                    title: v,
                    text: a || y,
                    image: x,
                    onClose: F,
                    actions: S,
                    role: "status",
                    showCloseButton: !0
                })
            }

            function T() {
                s().on("donations", (e => {
                    "visible" === document.visibilityState && (y = (0, d.showToast)({
                        priority: a.ToastPriority.High,
                        render: t => r.createElement(v, {
                            data: e,
                            ...t
                        })
                    }))
                })), f.TVXWindowEvents.on(b, (() => {
                    null !== y && y()
                }))
            }
        },
        919346: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                StdTheme: () => a.StdTheme,
                getStdChartTheme: () => d,
                getStdThemeNames: () => l,
                getThemeNameIfStdTheme: () => m,
                isStdTheme: () => p,
                translateThemeName: () => u
            });
            var r = o(575932),
                n = o(724377);
            const i = JSON.parse('{"content":{"chartProperties":{"scalesProperties":{"textColor":"#131722","lineColor":"rgba(42, 46, 57, 0)","backgroundColor":"#ffffff"},"paneProperties":{"vertGridProperties":{"color":"rgba(42, 46, 57, 0.06)"},"horzGridProperties":{"color":"rgba(42, 46, 57, 0.06)"},"crossHairProperties":{"color":"#9598A1"},"background":"#ffffff","backgroundGradientStartColor":"#ffffff","backgroundGradientEndColor":"#ffffff","separatorColor":"#E0E3EB"}},"sessions":{"graphics":{"backgrounds":{"outOfSession":{"color":"#2962FF","transparency":92},"preMarket":{"color":"#FF9800","transparency":92},"postMarket":{"color":"#2962FF","transparency":92}},"vertlines":{"sessBreaks":{"color":"#4985e7","style":2,"width":1}}}},"mainSourceProperties":{"baseLineColor":"#B2B5BE","candleStyle":{"borderColor":"#378658","upColor":"#089981","wickColor":"#737375","wickUpColor":"#089981","wickDownColor":"#F23645","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645"},"haStyle":{"borderColor":"#378658","upColor":"#089981","wickColor":"#737375","wickUpColor":"#089981","wickDownColor":"#F23645","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645"},"barStyle":{"downColor":"#F23645","upColor":"#089981"},"pnfStyle":{"downColor":"#F23645","upColor":"#089981","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"},"baselineStyle":{"baselineColor":"#758696","topFillColor1":"rgba(8, 153, 129, 0.28)","topFillColor2":"rgba(8, 153, 129, 0.05)","bottomFillColor1":"rgba(242, 54, 69, 0.05)","bottomFillColor2":"rgba(242, 54, 69, 0.28)","topLineColor":"#089981","bottomLineColor":"#F23645"},"areaStyle":{"transparency":100,"color1":"rgba(41, 98, 255, 0.28)","color2":"#2962FF","linecolor":"#2962FF","linewidth":2,"linestyle":0},"hiloStyle":{"color":"#2962FF","borderColor":"#2962FF","labelColor":"#2962FF"},"columnStyle":{"upColor":"rgba(8, 153, 129, 0.5)","downColor":"rgba(242, 54, 69, 0.5)","priceSource":"close"},"renkoStyle":{"upColor":"#089981","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae","borderUpColorProjection":"#a9dcc3","borderDownColorProjection":"#f5a6ae","wickUpColor":"#089981","wickDownColor":"#F23645"},"lineStyle":{"color":"#2962FF","linewidth":2,"linestyle":0},"kagiStyle":{"downColor":"#F23645","upColor":"#089981","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"},"pbStyle":{"upColor":"#089981","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae","borderUpColorProjection":"#a9dcc3","borderDownColorProjection":"#f5a6ae"},"rangeStyle":{"upColor":"#089981","downColor":"#F23645","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"}}}}'),
                s = JSON.parse('{"content":{"chartProperties":{"scalesProperties":{"textColor":"#B2B5BE","lineColor":"rgba(240, 243, 250, 0)","backgroundColor":"#ffffff"},"paneProperties":{"vertGridProperties":{"color":"rgba(240, 243, 250, 0.06)"},"horzGridProperties":{"color":"rgba(240, 243, 250, 0.06)"},"crossHairProperties":{"color":"#9598A1"},"background":"#131722","backgroundGradientStartColor":"#181C27","backgroundGradientEndColor":"#131722","backgroundType":"gradient","separatorColor":"#2A2E39"}},"sessions":{"graphics":{"backgrounds":{"outOfSession":{"color":"#2962FF","transparency":92},"preMarket":{"color":"#FF9800","transparency":92},"postMarket":{"color":"#2962FF","transparency":92}},"vertlines":{"sessBreaks":{"color":"#4985e7","style":2,"width":1}}}},"mainSourceProperties":{"baseLineColor":"#5d606b","candleStyle":{"borderColor":"#378658","upColor":"#089981","wickColor":"#B5B5B8","wickUpColor":"#089981","wickDownColor":"#F23645","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645"},"haStyle":{"borderColor":"#378658","upColor":"#089981","wickColor":"#B5B5B8","wickUpColor":"#089981","wickDownColor":"#F23645","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645"},"barStyle":{"downColor":"#F23645","upColor":"#089981"},"pnfStyle":{"downColor":"#F23645","upColor":"#089981","upColorProjection":"#336854","downColorProjection":"#7f323f"},"baselineStyle":{"baselineColor":"#758696","topFillColor1":"rgba(8, 153, 129, 0.28)","topFillColor2":"rgba(8, 153, 129, 0.05)","bottomFillColor1":"rgba(242, 54, 69, 0.05)","bottomFillColor2":"rgba(242, 54, 69, 0.28)","topLineColor":"#089981","bottomLineColor":"#F23645"},"areaStyle":{"transparency":100,"color1":"rgba(41, 98, 255, 0.28)","color2":"#2962FF","linecolor":"#2962FF","linewidth":2,"linestyle":0},"hiloStyle":{"color":"#2962FF","borderColor":"#2962FF","labelColor":"#2962FF"},"columnStyle":{"upColor":"rgba(8, 153, 129, 0.5)","downColor":"rgba(242, 54, 69, 0.5)","priceSource":"close"},"renkoStyle":{"upColor":"#089981","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645","upColorProjection":"#336854","downColorProjection":"#7f323f","borderUpColorProjection":"#336854","borderDownColorProjection":"#7f323f","wickUpColor":"#089981","wickDownColor":"#F23645"},"lineStyle":{"color":"#2962FF","linewidth":2,"linestyle":0},"kagiStyle":{"downColor":"#F23645","upColor":"#089981","upColorProjection":"#336854","downColorProjection":"#7f323f"},"pbStyle":{"upColor":"#089981","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645","upColorProjection":"#336854","downColorProjection":"#7f323f","borderUpColorProjection":"#336854","borderDownColorProjection":"#7f323f"},"rangeStyle":{"upColor":"#089981","downColor":"#F23645","upColorProjection":"#336854","downColorProjection":"#7f323f"}}}}');
            var a = o(61499);

            function c() {
                return {
                    [a.StdTheme.Light]: JSON.parse(JSON.stringify(i)),
                    [a.StdTheme.Dark]: JSON.parse(JSON.stringify(s))
                }
            }

            function l() {
                return [a.StdTheme.Light, a.StdTheme.Dark]
            }

            function d(e) {
                return c()[e]
            }

            function u(e) {
                return {
                    [a.StdTheme.Light]: r.t("Light", {
                        context: "colorThemeName"
                    }),
                    [a.StdTheme.Dark]: r.t("Dark", {
                        context: "colorThemeName"
                    })
                }[e] || e
            }

            function p(e) {
                const t = c();
                return l().some((o => h(t[o], e)))
            }

            function m(e) {
                const t = c(),
                    o = l();
                for (const r of o)
                    if (h(t[r], e)) return r;
                return null
            }

            function h(e, t) {
                let o = e.content === t.content;
                return function(e = {}, t) {
                    try {
                        f(e, [], t)
                    } catch (e) {
                        return
                    }
                }(e.content, ((e, r) => {
                    const i = function(e, t = {}) {
                        let o = t;
                        for (let t = 0; t < e.length; t++) {
                            if (!o || "object" != typeof o) return;
                            o = o[e[t]]
                        }
                        if ("string" == typeof o || "number" == typeof o) return o;
                        return
                    }(e, t.content);
                    return o = function(e, t) {
                        if (e === t) return !0;
                        if ("string" != typeof e || "string" != typeof t) return !1;
                        try {
                            return function(e, t) {
                                return Math.hypot(e[3] * e[0] - t[3] * t[0], e[3] * e[1] - t[3] * t[1], e[3] * e[2] - t[3] * t[2], 255 * e[3] - 255 * t[3]) < 48
                            }((0, n.parseRgba)(e), (0, n.parseRgba)(t))
                        } catch (e) {}
                        return !1
                    }(r, i), !o
                })), o
            }

            function f(e, t, o) {
                for (const r in e)
                    if (e.hasOwnProperty(r)) {
                        const n = t.concat(r);
                        if ("object" == typeof e[r]) f(e[r], n, o);
                        else if (o(n, e[r])) throw new Error("exit")
                    }
            }
        },
        61499: (e, t, o) => {
            "use strict";
            var r;
            o.d(t, {
                    StdTheme: () => r
                }),
                function(e) {
                    e.Light = "light", e.Dark = "dark"
                }(r || (r = {}))
        },
        909740: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                setTheme: () => i,
                watchedTheme: () => n
            });
            var r = o(262325);
            const n = new(o.n(r)());

            function i(e) {
                n.setValue(e)
            }
            n.subscribe((e => {
                ! function(e, t = window) {
                    const o = "theme-" + e,
                        r = t.document.documentElement.classList;
                    for (const e of Array.from(r)) e.startsWith("theme-") && e !== o && r.remove(e);
                    r.add(o)
                }(e, window)
            }))
        },
        56537: (e, t, o) => {
            "use strict";
            o.d(t, {
                useForceUpdate: () => n
            });
            var r = o(559496);
            const n = () => {
                const [, e] = (0, r.useReducer)(((e, t) => e + 1), 0);
                return e
            }
        },
        631078: (e, t, o) => {
            "use strict";
            o.d(t, {
                useWatchedValueReadonly: () => n
            });
            var r = o(559496);
            const n = (e, t = !1) => {
                const o = "watchedValue" in e ? e.watchedValue : void 0,
                    n = "defaultValue" in e ? e.defaultValue : e.watchedValue.value(),
                    [i, s] = (0, r.useState)(o ? o.value() : n);
                return (t ? r.useLayoutEffect : r.useEffect)((() => {
                    if (o) {
                        s(o.value());
                        const e = e => s(e);
                        return o.subscribe(e), () => o.unsubscribe(e)
                    }
                    return () => {}
                }), [o]), i
            }
        },
        829725: (e, t, o) => {
            "use strict";
            o.d(t, {
                OverlapManager: () => i,
                getRootOverlapManager: () => a
            });
            var r = o(588537);
            class n {
                constructor() {
                    this._storage = []
                }
                add(e) {
                    this._storage.push(e)
                }
                remove(e) {
                    this._storage = this._storage.filter((t => e !== t))
                }
                has(e) {
                    return this._storage.includes(e)
                }
                getItems() {
                    return this._storage
                }
            }
            class i {
                constructor(e = document) {
                    this._storage = new n, this._windows = new Map, this._index = 0, this._document = e, this._container = e.createDocumentFragment()
                }
                setContainer(e) {
                    const t = this._container,
                        o = null === e ? this._document.createDocumentFragment() : e;
                    ! function(e, t) {
                        Array.from(e.childNodes).forEach((e => {
                            e.nodeType === Node.ELEMENT_NODE && t.appendChild(e)
                        }))
                    }(t, o), this._container = o
                }
                registerWindow(e) {
                    this._storage.has(e) || this._storage.add(e)
                }
                ensureWindow(e, t = {
                    position: "fixed",
                    direction: "normal"
                }) {
                    const o = this._windows.get(e);
                    if (void 0 !== o) return o;
                    this.registerWindow(e);
                    const r = this._document.createElement("div");
                    if (r.style.position = t.position, r.style.zIndex = this._index.toString(), r.dataset.id = e, void 0 !== t.index) {
                        const e = this._container.childNodes.length;
                        if (t.index >= e) this._container.appendChild(r);
                        else if (t.index <= 0) this._container.insertBefore(r, this._container.firstChild);
                        else {
                            const e = this._container.childNodes[t.index];
                            this._container.insertBefore(r, e)
                        }
                    } else "reverse" === t.direction ? this._container.insertBefore(r, this._container.firstChild) : this._container.appendChild(r);
                    return this._windows.set(e, r), ++this._index, r
                }
                unregisterWindow(e) {
                    this._storage.remove(e);
                    const t = this._windows.get(e);
                    void 0 !== t && (null !== t.parentElement && t.parentElement.removeChild(t), this._windows.delete(e))
                }
                getZindex(e) {
                    const t = this.ensureWindow(e);
                    return parseInt(t.style.zIndex || "0")
                }
                moveToTop(e) {
                    if (this.getZindex(e) !== this._index) {
                        this.ensureWindow(e).style.zIndex = (++this._index).toString()
                    }
                }
                removeWindow(e) {
                    this.unregisterWindow(e)
                }
            }
            const s = new WeakMap;

            function a(e = document) {
                const t = e.getElementById("overlap-manager-root");
                if (null !== t) return (0, r.ensureDefined)(s.get(t)); {
                    const t = new i(e),
                        o = function(e) {
                            const t = e.createElement("div");
                            return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t
                        }(e);
                    return s.set(o, t), t.setContainer(o), e.body.appendChild(o), t
                }
            }
        },
        707533: (e, t, o) => {
            "use strict";
            o.d(t, {
                Portal: () => c,
                PortalContext: () => l
            });
            var r = o(559496),
                n = o(587995),
                i = o(95935),
                s = o(829725),
                a = o(670797);
            class c extends r.PureComponent {
                constructor() {
                    super(...arguments), this._uuid = (0, i.guid)()
                }
                componentWillUnmount() {
                    this._manager().removeWindow(this._uuid)
                }
                render() {
                    const e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
                    return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", n.createPortal(r.createElement(l.Provider, {
                        value: this
                    }, this.props.children), e)
                }
                moveToTop() {
                    this._manager().moveToTop(this._uuid)
                }
                _manager() {
                    return null === this.context ? (0, s.getRootOverlapManager)() : this.context
                }
            }
            c.contextType = a.SlotContext;
            const l = r.createContext(null)
        },
        670797: (e, t, o) => {
            "use strict";
            o.d(t, {
                Slot: () => n,
                SlotContext: () => i
            });
            var r = o(559496);
            class n extends r.Component {
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
            const i = r.createContext(null)
        },
        238822: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path stroke="currentColor" stroke-width="1.2" d="M1 1l11 11m0-11L1 12"/></svg>'
        },
        729942: (e, t, o) => {
            "use strict";
            e.exports = o.p + "donation-dark.df7a99c6789b833ef0d9.svg"
        },
        830123: (e, t, o) => {
            "use strict";
            e.exports = o.p + "donation-light.5c994bab093e5e49dd6a.svg"
        },
        586240: e => {
            "use strict";
            e.exports = JSON.parse('{"size-header-height":"64px","size-sticky-symbol-header-height":"64px","media-tablet":"screen and (max-width: 1019px)","media-phone":"screen and (max-width: 767px)","media-phone-vertical":"screen and (max-width: 479px)","media-extreme-thin":"screen and (max-width: 329px)","media-mf-legacy-phone":"screen and (min-width: 480px)","media-mf-legacy-notebook":"screen and (min-width: 1020px)","media-mf-phone-landscape":"screen and (min-width: 568px)","media-mf-tablet-vertical":"screen and (min-width: 768px)","media-mf-tablet-landscape":"screen and (min-width: 1024px)","media-mf-laptop":"screen and (min-width: 1280px)","media-mf-desktop-medium":"screen and (min-width: 1440px)","media-mf-desktop-large":"screen and (min-width: 1920px)","z-index-sticky-search-bar":101}')
        }
    }
]);