(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [89568, 19346, 84029, 99928, 802], {
        633202: (t, e, o) => {
            "use strict";
            o.d(e, {
                default: () => d
            });
            var r, n, i = "function" == typeof Map ? new Map : (r = [], n = [], {
                    has: function(t) {
                        return r.indexOf(t) > -1
                    },
                    get: function(t) {
                        return n[r.indexOf(t)]
                    },
                    set: function(t, e) {
                        -1 === r.indexOf(t) && (r.push(t), n.push(e))
                    },
                    delete: function(t) {
                        var e = r.indexOf(t);
                        e > -1 && (r.splice(e, 1), n.splice(e, 1))
                    }
                }),
                s = function(t) {
                    return new Event(t, {
                        bubbles: !0
                    })
                };
            try {
                new Event("test")
            } catch (r) {
                s = function(t) {
                    var e = document.createEvent("Event");
                    return e.initEvent(t, !0, !1), e
                }
            }

            function a(t) {
                var e = i.get(t);
                e && e.destroy()
            }

            function l(t) {
                var e = i.get(t);
                e && e.update()
            }
            var c = null;
            "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((c = function(t) {
                return t
            }).destroy = function(t) {
                return t
            }, c.update = function(t) {
                return t
            }) : ((c = function(t, e) {
                return t && Array.prototype.forEach.call(t.length ? t : [t], (function(t) {
                    return function(t) {
                        if (t && t.nodeName && "TEXTAREA" === t.nodeName && !i.has(t)) {
                            var e, o = null,
                                r = null,
                                n = null,
                                a = function() {
                                    t.clientWidth !== r && h()
                                },
                                l = function(e) {
                                    window.removeEventListener("resize", a, !1), t.removeEventListener("input", h, !1), t.removeEventListener("keyup", h, !1), t.removeEventListener("autosize:destroy", l, !1), t.removeEventListener("autosize:update", h, !1), Object.keys(e).forEach((function(o) {
                                        t.style[o] = e[o]
                                    })), i.delete(t)
                                }.bind(t, {
                                    height: t.style.height,
                                    resize: t.style.resize,
                                    overflowY: t.style.overflowY,
                                    overflowX: t.style.overflowX,
                                    wordWrap: t.style.wordWrap
                                });
                            t.addEventListener("autosize:destroy", l, !1), "onpropertychange" in t && "oninput" in t && t.addEventListener("keyup", h, !1), window.addEventListener("resize", a, !1), t.addEventListener("input", h, !1), t.addEventListener("autosize:update", h, !1), t.style.overflowX = "hidden", t.style.wordWrap = "break-word", i.set(t, {
                                destroy: l,
                                update: h
                            }), "vertical" === (e = window.getComputedStyle(t, null)).resize ? t.style.resize = "none" : "both" === e.resize && (t.style.resize = "horizontal"), o = "content-box" === e.boxSizing ? -(parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)) : parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), isNaN(o) && (o = 0), h()
                        }

                        function c(e) {
                            var o = t.style.width;
                            t.style.width = "0px", t.style.width = o, t.style.overflowY = e
                        }

                        function d() {
                            if (0 !== t.scrollHeight) {
                                var e = function(t) {
                                        for (var e = []; t && t.parentNode && t.parentNode instanceof Element;) t.parentNode.scrollTop && e.push({
                                            node: t.parentNode,
                                            scrollTop: t.parentNode.scrollTop
                                        }), t = t.parentNode;
                                        return e
                                    }(t),
                                    n = document.documentElement && document.documentElement.scrollTop;
                                t.style.height = "", t.style.height = t.scrollHeight + o + "px", r = t.clientWidth, e.forEach((function(t) {
                                    t.node.scrollTop = t.scrollTop
                                })), n && (document.documentElement.scrollTop = n)
                            }
                        }

                        function h() {
                            d();
                            var e = Math.round(parseFloat(t.style.height)),
                                o = window.getComputedStyle(t, null),
                                r = "content-box" === o.boxSizing ? Math.round(parseFloat(o.height)) : t.offsetHeight;
                            if (r < e ? "hidden" === o.overflowY && (c("scroll"), d(), r = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight) : "hidden" !== o.overflowY && (c("hidden"), d(),
                                    r = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight), n !== r) {
                                n = r;
                                var i = s("autosize:resized");
                                try {
                                    t.dispatchEvent(i)
                                } catch (t) {}
                            }
                        }
                    }(t)
                })), t
            }).destroy = function(t) {
                return t && Array.prototype.forEach.call(t.length ? t : [t], a), t
            }, c.update = function(t) {
                return t && Array.prototype.forEach.call(t.length ? t : [t], l), t
            });
            const d = c
        },
        72387: t => {
            t.exports = {}
        },
        530941: t => {
            t.exports = {
                badge: "badge-TRXznVu1",
                content: "content-TRXznVu1",
                anchor: "anchor-TRXznVu1",
                button: "button-TRXznVu1",
                "size-xsmall": "size-xsmall-TRXznVu1",
                "size-small": "size-small-TRXznVu1",
                "size-medium": "size-medium-TRXznVu1",
                "size-large": "size-large-TRXznVu1",
                "size-xlarge": "size-xlarge-TRXznVu1"
            }
        },
        889597: t => {
            t.exports = {
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
        733947: t => {
            t.exports = {
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
        616044: t => {
            t.exports = {
                loader: "loader-PZ4hqS2H",
                static: "static-PZ4hqS2H",
                item: "item-PZ4hqS2H",
                "tv-button-loader": "tv-button-loader-PZ4hqS2H",
                medium: "medium-PZ4hqS2H",
                small: "small-PZ4hqS2H",
                black: "black-PZ4hqS2H",
                white: "white-PZ4hqS2H",
                gray: "gray-PZ4hqS2H",
                primary: "primary-PZ4hqS2H",
                "loader-initial": "loader-initial-PZ4hqS2H",
                "loader-appear": "loader-appear-PZ4hqS2H"
            }
        },
        349202: t => {
            t.exports = {
                hidden: "hidden-dY7nIKs1",
                buttonIcon: "buttonIcon-dY7nIKs1"
            }
        },
        755275: t => {
            t.exports = {
                "tv-spinner__container-rotate": "tv-spinner__container-rotate-OAzoNsnS"
            }
        },
        428334: t => {
            t.exports = {
                buttonInner: "buttonInner-_lBBkIFe",
                button: "button-_lBBkIFe",
                hidden: "hidden-_lBBkIFe",
                checked: "checked-_lBBkIFe",
                unchecked: "unchecked-_lBBkIFe",
                uncheckHint: "uncheckHint-_lBBkIFe",
                "i-checked": "i-checked-_lBBkIFe"
            }
        },
        723961: t => {
            t.exports = {}
        },
        367525: t => {
            t.exports = {
                wrapper: "wrapper-NSBB5lqy",
                touch: "touch-NSBB5lqy"
            }
        },
        413880: t => {
            t.exports = {}
        },
        736124: t => {
            t.exports = {
                "badge-broker": "badge-broker-YnwYte0E",
                featured: "featured-YnwYte0E",
                platinum: "platinum-YnwYte0E",
                link: "link-YnwYte0E",
                gold: "gold-YnwYte0E",
                silver: "silver-YnwYte0E"
            }
        },
        686422: t => {
            t.exports = {
                "badge-user": "badge-user-FpgDFPAn",
                "pro-premium": "pro-premium-FpgDFPAn",
                "pro-realtime": "pro-realtime-FpgDFPAn",
                pro: "pro-FpgDFPAn",
                moderator: "moderator-FpgDFPAn",
                trial: "trial-FpgDFPAn",
                "pine-wizard": "pine-wizard-FpgDFPAn",
                employee: "employee-FpgDFPAn",
                "employee-logo-icon": "employee-logo-icon-FpgDFPAn",
                "size-xsmall": "size-xsmall-FpgDFPAn",
                "size-small": "size-small-FpgDFPAn",
                "size-medium": "size-medium-FpgDFPAn",
                "size-large": "size-large-FpgDFPAn",
                "size-xlarge": "size-xlarge-FpgDFPAn"
            }
        },
        745347: t => {
            t.exports = {
                childrenWrapper: "childrenWrapper-qQM_QN_m",
                shown: "shown-qQM_QN_m",
                loader: "loader-qQM_QN_m"
            }
        },
        480826: t => {
            t.exports = {}
        },
        500045: t => {
            t.exports = {}
        },
        173777: (t, e, o) => {
            "use strict";
            o.d(e, {
                SEPARATOR_PREFIX: () => r,
                isSeparatorItem: () => n
            });
            const r = "###";

            function n(t) {
                return t.startsWith(r)
            }
        },
        774465: (t, e, o) => {
            "use strict";
            o.d(e, {
                AnchorBadge: () => p,
                Badge: () => u,
                BadgeSize: () => s.BadgeSize
            });
            var r = o(559496),
                n = o(497754),
                i = o.n(n),
                s = o(105573),
                a = o(530941),
                l = o.n(a);

            function c(t) {
                const {
                    size: e = s.BadgeSize.Medium,
                    className: o
                } = t;
                return i()(l().badge, e && l()[`size-${e}`], o)
            }

            function d(t) {
                return i()(c(t), l().anchor)
            }

            function h(t) {
                const {
                    children: e,
                    contentClassName: o
                } = t;
                return r.createElement("span", {
                    className: i()(l().content, o)
                }, e)
            }

            function u(t) {
                const {
                    size: e,
                    children: o,
                    className: n,
                    contentClassName: i,
                    ...s
                } = t;
                return r.createElement("span", { ...s,
                    className: c({
                        size: e,
                        className: n
                    })
                }, r.createElement(h, {
                    contentClassName: i
                }, o))
            }

            function p(t) {
                const {
                    size: e,
                    children: o,
                    className: n,
                    contentClassName: i,
                    ...s
                } = t;
                return r.createElement("a", { ...s,
                    className: d({
                        size: e,
                        className: n
                    })
                }, r.createElement(h, {
                    contentClassName: i
                }, o))
            }
        },
        105573: (t, e, o) => {
            "use strict";
            var r;
            o.d(e, {
                    BadgeSize: () => r
                }),
                function(t) {
                    t.XSmall = "xsmall", t.Small = "small", t.Medium = "medium", t.Large = "large", t.XLarge = "xlarge"
                }(r || (r = {}))
        },
        540975: (t, e, o) => {
            "use strict";
            o.d(e, {
                AnchorButton: () => h,
                Button: () => c
            });
            var r = o(559496),
                n = o(915812);

            function i(t = "default") {
                switch (t) {
                    case "default":
                        return "primary";
                    case "stroke":
                        return "secondary"
                }
            }

            function s(t = "primary") {
                switch (t) {
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

            function a(t = "m") {
                switch (t) {
                    case "s":
                        return "xsmall";
                    case "m":
                        return "small";
                    case "l":
                        return "large"
                }
            }

            function l(t) {
                const {
                    intent: e,
                    size: o,
                    appearance: r,
                    useFullWidth: n,
                    icon: l,
                    ...c
                } = t;
                return { ...c,
                    color: s(e),
                    size: a(o),
                    variant: i(r),
                    stretch: n,
                    startIcon: l
                }
            }

            function c(t) {
                return r.createElement(n.SquareButton, { ...l(t)
                })
            }

            function d(t) {
                const {
                    intent: e,
                    size: o,
                    appearance: r,
                    useFullWidth: n,
                    icon: l,
                    ...c
                } = t;
                return { ...c,
                    color: s(e),
                    size: a(o),
                    variant: i(r),
                    stretch: n,
                    startIcon: l
                }
            }

            function h(t) {
                return r.createElement(n.SquareAnchorButton, { ...d(t)
                })
            }
        },
        87745: (t, e, o) => {
            "use strict";

            function r(t, e) {
                return e || null == t || ("string" == typeof t || Array.isArray(t)) && 0 === t.length
            }
            o.d(e, {
                isIconOnly: () => r
            })
        },
        201465: (t, e, o) => {
            "use strict";
            o.d(e, {
                RoundAnchorButton: () => g,
                RoundButton: () => u
            });
            var r = o(497754);

            function n(t, e) {
                const {
                    className: o,
                    color: n = "brand",
                    variant: i = "primary",
                    size: s = "xlarge",
                    stretch: a,
                    animated: l = !1,
                    disableThemes: c = !1,
                    iconOnly: d = !1
                } = e;
                return r(o, t["round-button"], t[`color-${n}`], t[`variant-${i}`], t[`size-${s}`], l && t.animated, a && t.stretch, c && t["disable-themes"], d && t["icon-only"])
            }
            var i = o(559496),
                s = o(83436),
                a = o(8626),
                l = o(87745),
                c = o(889597),
                d = o.n(c);

            function h(t) {
                const {
                    className: e,
                    color: o,
                    variant: r,
                    size: n,
                    stretch: i,
                    animated: s,
                    disableThemes: l,
                    ...c
                } = t;
                return { ...c,
                    ...(0, a.filterDataProps)(t),
                    ...(0, a.filterAriaProps)(t)
                }
            }

            function u(t) {
                const {
                    reference: e,
                    children: o,
                    iconOnly: r,
                    endIcon: a,
                    ...c
                } = t, u = n(d(), t);
                return i.createElement("button", { ...h(c),
                    className: u,
                    ref: e
                }, !(0, l.isIconOnly)(o, r) && i.createElement("span", {
                    className: d().content
                }, o), a && i.createElement(s.Icon, {
                    className: d().icon,
                    icon: a
                }))
            }

            function p(t) {
                const {
                    className: e,
                    color: o,
                    variant: r,
                    size: n,
                    stretch: i,
                    animated: s,
                    disableThemes: l,
                    Component: c,
                    ...d
                } = t;
                return { ...d,
                    ...(0, a.filterDataProps)(t),
                    ...(0, a.filterAriaProps)(t)
                }
            }

            function g(t) {
                const {
                    reference: e,
                    children: o,
                    ...r
                } = t, s = n(d(), t), a = t.Component || "a";
                return i.createElement(a, { ...p(r),
                    className: s,
                    ref: e
                }, i.createElement("span", {
                    className: d().content
                }, o))
            }
        },
        915812: (t, e, o) => {
            "use strict";
            o.d(e, {
                SquareButton: () => r.SquareButton,
                SquareAnchorButton: () => n.SquareAnchorButton
            });
            o(221191);
            var r = o(422175),
                n = o(951144)
        },
        951144: (t, e, o) => {
            "use strict";
            o.d(e, {
                SquareAnchorButton: () => l
            });
            var r = o(559496),
                n = o(301792),
                i = o(8626),
                s = o(221191);

            function a(t) {
                const {
                    className: e,
                    color: o,
                    variant: r,
                    size: n,
                    stretch: s,
                    animated: a,
                    icon: l,
                    iconOnly: c,
                    startIcon: d,
                    endIcon: h,
                    ...u
                } = t;
                return { ...u,
                    ...(0, i.filterDataProps)(t),
                    ...(0, i.filterAriaProps)(t)
                }
            }

            function l(t) {
                const {
                    reference: e
                } = t, {
                    isGrouped: o,
                    cellState: i,
                    disablePositionAdjustment: l
                } = (0, r.useContext)(n.ControlGroupContext), c = (0, s.getSquareButtonClasses)({ ...t,
                    isGrouped: o,
                    cellState: i,
                    disablePositionAdjustment: l
                });
                return r.createElement("a", { ...a(t),
                    className: c,
                    ref: e
                }, r.createElement(s.SquareButtonContent, { ...t
                }))
            }
        },
        221191: (t, e, o) => {
            "use strict";
            o.d(e, {
                getSquareButtonClasses: () => c,
                SquareButtonContent: () => d
            });
            var r = o(559496),
                n = o(497754),
                i = o(307754),
                s = o(83436),
                a = o(733947),
                l = o.n(a);

            function c(t) {
                const {
                    color: e = "brand",
                    size: o = "medium",
                    variant: r = "primary",
                    stretch: s = !1,
                    icon: a,
                    startIcon: c,
                    endIcon: d,
                    iconOnly: h = !1,
                    className: u,
                    isGrouped: p,
                    cellState: g,
                    disablePositionAdjustment: m = !1
                } = t, _ = function(t) {
                    let e = "";
                    return 0 !== t && (1 & t && (e = n(e, l()["no-corner-top-left"])), 2 & t && (e = n(e, l()["no-corner-top-right"])), 4 & t && (e = n(e, l()["no-corner-bottom-right"])), 8 & t && (e = n(e, l()["no-corner-bottom-left"]))), e
                }((0, i.getGroupCellRemoveRoundBorders)(g));
                return n(u, l().button, l()[`size-${o}`], l()[`color-${e}`], l()[`variant-${r}`], s && l().stretch, (a || c) && l()["with-start-icon"], d && l()["with-end-icon"], h && l()["icon-only"], _, p && l().grouped, p && !m && l()["adjust-position"], p && g.isTop && l()["first-row"], p && g.isLeft && l()["first-col"])
            }

            function d(t) {
                const {
                    startIcon: e,
                    icon: o,
                    iconOnly: n,
                    children: i,
                    endIcon: a
                } = t, c = null != e ? e : o;
                return r.createElement(r.Fragment, null, c && r.createElement(s.Icon, {
                    icon: c,
                    className: l()["start-icon-wrap"]
                }), i && r.createElement("span", {
                    className: l().content
                }, i), a && !n && r.createElement(s.Icon, {
                    icon: a,
                    className: l()["end-icon-wrap"]
                }))
            }
        },
        422175: (t, e, o) => {
            "use strict";
            o.d(e, {
                SquareButton: () => l
            });
            var r = o(559496),
                n = o(301792),
                i = o(8626),
                s = o(221191);

            function a(t) {
                const {
                    className: e,
                    color: o,
                    variant: r,
                    size: n,
                    stretch: s,
                    animated: a,
                    icon: l,
                    iconOnly: c,
                    startIcon: d,
                    endIcon: h,
                    ...u
                } = t;
                return { ...u,
                    ...(0, i.filterDataProps)(t),
                    ...(0, i.filterAriaProps)(t)
                }
            }

            function l(t) {
                const {
                    reference: e,
                    ...o
                } = t, {
                    isGrouped: i,
                    cellState: l,
                    disablePositionAdjustment: c
                } = (0, r.useContext)(n.ControlGroupContext), d = (0, s.getSquareButtonClasses)({ ...o,
                    isGrouped: i,
                    cellState: l,
                    disablePositionAdjustment: c
                });
                return r.createElement("button", { ...a(o),
                    className: d,
                    ref: e
                }, r.createElement(s.SquareButtonContent, { ...o
                }))
            }
        },
        301792: (t, e, o) => {
            "use strict";
            o.d(e, {
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
        307754: (t, e, o) => {
            "use strict";

            function r(t) {
                let e = 0;
                return t.isTop && t.isLeft || (e += 1), t.isTop && t.isRight || (e += 2), t.isBottom && t.isLeft || (e += 8), t.isBottom && t.isRight || (e += 4), e
            }
            o.d(e, {
                getGroupCellRemoveRoundBorders: () => r
            })
        },
        640027: (t, e, o) => {
            "use strict";
            o.d(e, {
                useIsMounted: () => n
            });
            var r = o(559496);
            const n = () => {
                const t = (0, r.useRef)(!1);
                return (0, r.useEffect)((() => (t.current = !0, () => {
                    t.current = !1
                })), []), t
            }
        },
        612247: (t, e, o) => {
            "use strict";
            o.d(e, {
                Loader: () => c
            });
            var r, n = o(559496),
                i = o(497754),
                s = o(745269),
                a = o(616044),
                l = o.n(a);
            ! function(t) {
                t[t.Initial = 0] = "Initial", t[t.Appear = 1] = "Appear", t[t.Active = 2] = "Active"
            }(r || (r = {}));
            class c extends n.PureComponent {
                constructor(t) {
                    super(t), this._stateChangeTimeout = null, this.state = {
                        state: r.Initial
                    }
                }
                render() {
                    const {
                        className: t,
                        color: e = "black",
                        size: o = "medium",
                        staticPosition: r
                    } = this.props, s = i(l().item, l()[e], l()[o]);
                    return n.createElement("span", {
                        className: i(l().loader, r && l().static, this._getStateClass(), t)
                    }, n.createElement("span", {
                        className: s
                    }), n.createElement("span", {
                        className: s
                    }), n.createElement("span", {
                        className: s
                    }))
                }
                componentDidMount() {
                    this.setState({
                        state: r.Appear
                    }), this._stateChangeTimeout = setTimeout((() => {
                        this.setState({
                            state: r.Active
                        })
                    }), 2 * s.dur)
                }
                componentWillUnmount() {
                    this._stateChangeTimeout && (clearTimeout(this._stateChangeTimeout), this._stateChangeTimeout = null)
                }
                _getStateClass() {
                    switch (this.state.state) {
                        case r.Initial:
                            return l()["loader-initial"];
                        case r.Appear:
                            return l()["loader-appear"];
                        default:
                            return ""
                    }
                }
            }
        },
        8626: (t, e, o) => {
            "use strict";

            function r(t) {
                return i(t, s)
            }

            function n(t) {
                return i(t, a)
            }

            function i(t, e) {
                const o = Object.entries(t).filter(e),
                    r = {};
                for (const [t, e] of o) r[t] = e;
                return r
            }

            function s(t) {
                const [e, o] = t
                ;
                return 0 === e.indexOf("data-") && "string" == typeof o
            }

            function a(t) {
                return 0 === t[0].indexOf("aria-")
            }
            o.d(e, {
                filterDataProps: () => r,
                filterAriaProps: () => n,
                filterProps: () => i,
                isDataAttribute: () => s,
                isAriaAttribute: () => a
            })
        },
        746326: (t, e, o) => {
            "use strict";

            function r(t) {
                const {
                    paddingTop: e,
                    paddingBottom: o
                } = window.getComputedStyle(t);
                return [e, o].reduce(((t, e) => t - Number((e || "").replace("px", ""))), t.clientHeight)
            }

            function n(t) {
                const {
                    paddingLeft: e,
                    paddingRight: o
                } = window.getComputedStyle(t);
                return [e, o].reduce(((t, e) => t - Number((e || "").replace("px", ""))), t.clientWidth)
            }

            function i(t, e = !1) {
                const o = getComputedStyle(t),
                    r = [o.height];
                return "border-box" !== o.boxSizing && r.push(o.paddingTop, o.paddingBottom, o.borderTopWidth, o.borderBottomWidth), e && r.push(o.marginTop, o.marginBottom), r.reduce(((t, e) => t + (parseFloat(e) || 0)), 0)
            }

            function s(t, e = !1) {
                const o = getComputedStyle(t),
                    r = [o.width];
                return "border-box" !== o.boxSizing && r.push(o.paddingLeft, o.paddingRight, o.borderLeftWidth, o.borderRightWidth), e && r.push(o.marginLeft, o.marginRight), r.reduce(((t, e) => t + (parseFloat(e) || 0)), 0)
            }
            o.d(e, {
                contentHeight: () => r,
                contentWidth: () => n,
                outerHeight: () => i,
                outerWidth: () => s
            })
        },
        248443: (t, e, o) => {
            "use strict";
            o.d(e, {
                DonationButton: () => h
            });
            var r = o(559496),
                n = o(575932),
                i = o(303177),
                s = o(767399),
                a = o(345848),
                l = o(224286),
                c = o(633881),
                d = o(349202);

            function h(t) {
                const {
                    donationUserInfo: e,
                    targetObjectId: o,
                    hidden: h,
                    onMount: u,
                    onUnmount: p,
                    action: g,
                    donationKind: m,
                    closeOnEsc: _,
                    size: f = "small"
                } = t, v = (0, r.useCallback)((() => new Promise((t => {
                    g && g(), window.runOrSignIn((() => {
                        (0, s.openDonationPopup)({
                            donationUserInfo: e,
                            donationKind: m,
                            targetObjectId: o,
                            onMount: () => {
                                u && u()
                            },
                            onUnmount: () => {
                                p && p()
                            },
                            onOpen: t,
                            closeOnEsc: null == _ || _
                        }), (0, a.trackEvent)("Donation", "Open donation dialog")
                    }), {
                        source: "Stream chat donate button"
                    })
                }))), []);
                return r.createElement(i.ButtonWithLock, {
                    onClick: v,
                    variant: "primary",
                    className: h && d.hidden,
                    icon: "medium" === f ? l : c,
                    size: f
                }, n.t("Cheer"))
            }
        },
        830375: (t, e, o) => {
            "use strict";
            o.d(e, {
                renderDonationButton: () => c,
                renderFollowButton: () => d,
                renderMessageButton: () => h
            });
            var r = o(559496),
                n = o(587995),
                i = o(575932),
                s = o(248443),
                a = o(248684),
                l = o(540975);

            function c(t) {
                const {
                    container: e,
                    donationUserInfo: o,
                    action: i,
                    donationKind: a,
                    targetObjectId: l
                } = t;
                n.render(r.createElement(s.DonationButton, {
                    donationUserInfo: o,
                    action: i,
                    donationKind: a,
                    targetObjectId: l
                }), e)
            }

            function d(t) {
                const {
                    container: e,
                    isFollowed: o,
                    userId: i
                } = t;
                n.render(r.createElement(a.FollowButton, {
                    isFollowed: o,
                    authorId: i,
                    color: "green",
                    variant: "secondary"
                }), e)
            }

            function h(t) {
                const {
                    container: e,
                    action: o
                } = t;
                n.render(r.createElement(l.Button, {
                    intent: "primary",
                    appearance: "stroke",
                    onClick: o
                }, i.t("Message")), e)
            }
        },
        229534: (t, e, o) => {
            "use strict";
            async function r(t) {
                return (await Promise.all([o.e(22850), o.e(15107), o.e(55099), o.e(84845), o.e(50407), o.e(71452), o.e(55097), o.e(25977), o.e(25116), o.e(37757)]).then(o.bind(o, 173403))).createDialog(t)
            }

            function n(t) {
                r(t).then((t => t.open()))
            }
            o.d(e, {
                createErrorDialog: () => r,
                showErrorDialog: () => n
            })
        },
        500521: (t, e, o) => {
            "use strict";
            t.exports.pushChartPage = async function(t) {
                const {
                    default: e
                } = await Promise.all([o.e(22850), o.e(15107), o.e(55099), o.e(84845), o.e(50407), o.e(71452), o.e(99899), o.e(25977), o.e(41915), o.e(34629)]).then(o.t.bind(o, 55244, 23)), r = new e.ChartPage(t);
                TradingView.historyManager.push(r)
            }
        },
        791325: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, {
                LEFT_ARROW: () => r,
                UP_ARROW: () => n,
                RIGHT_ARROW: () => i,
                DOWN_ARROW: () => s,
                ENTER: () => a,
                ESC: () => l,
                SPACE: () => c,
                SLASH: () => d
            });
            const r = 37,
                n = 38,
                i = 39,
                s = 40,
                a = 13,
                l = 27,
                c = 32,
                d = 47
        },
        607436: (t, e, o) => {
            "use strict";
            o.d(e, {
                DEFAULT_SIZE: () => r,
                spinnerSizeMap: () => n
            });
            const r = "large",
                n = {
                    mini: "xsmall",
                    xsmall: "xsmall",
                    small: "small",
                    medium: "medium",
                    large: "large"
                }
        },
        941285: (t, e, o) => {
            "use strict";
            o.d(e, {
                Spinner: () => s
            });
            o(755275);
            var r = o(698969),
                n = o(607436);
            const i = (0, r.parseHtmlElement)(function(t = "") {
                return `<div class="tv-spinner ${t}" role="progressbar"></div>`
            }());
            class s {
                constructor(t) {
                    this._shown = !1, this._el = i.cloneNode(!0), this.setSize(n.spinnerSizeMap[t || n.DEFAULT_SIZE])
                }
                spin(t) {
                    return this._el.classList.add("tv-spinner--shown"), void 0 === this._container && (this._container = t, void 0 !== t && t.appendChild(this._el)), this._shown = !0, this
                }
                stop(t) {
                    return t && void 0 !== this._container && this._container.removeChild(this._el), this._el.classList.remove("tv-spinner--shown"), this._shown = !1, this
                }
                setStyle(t) {
                    return Object.keys(t).forEach((e => {
                        const o = t[e];
                        void 0 !== o && this._el.style.setProperty(e, o)
                    })), this
                }
                style() {
                    return this._el.style
                }
                setSize(t) {
                    const e = void 0 !== t ? `tv-spinner--size_${t}` : "";
                    return this._el.className = `tv-spinner ${e} ${this._shown?"tv-spinner--shown":""}`, this
                }
                getEl() {
                    return this._el
                }
                destroy() {
                    this.stop(), delete this._el, delete this._container
                }
            }
        },
        349896: (t, e, o) => {
            "use strict";
            var r, n, i;
            o.d(e, {
                    Size: () => r,
                    StarFill: () => n,
                    StarColor: () => i
                }),
                function(t) {
                    t.Small = "small", t.Medium = "medium", t.Large = "large"
                }(r || (r = {})),
                function(t) {
                    t.Full = "full", t.Half = "half", t.Empty = "empty", t.Hidden = "hidden"
                }(n || (n = {})),
                function(t) {
                    t.Blue = "blue", t.White = "white"
                }(i || (i = {}))
        },
        295670: (t, e, o) => {
            "use strict";

            function r(t, e) {
                return Promise.all([o.e(37202), o.e(9303)]).then(o.bind(o, 127353)).then((o => o.renderStarsRatingElementImpl(t, e)))
            }
            o.d(e, {
                renderStarsRatingElement: () => r
            })
        },
        248684: (t, e, o) => {
            "use strict";
            o.d(e, {
                FollowButton: () => l
            });
            var r = o(559496),
                n = o(575932),
                i = o(497754),
                s = o(915812),
                a = o(428334);
            class l extends r.PureComponent {
                constructor(t) {
                    super(t), this._buttonRef = r.createRef(), this._mutationObserver = null, this._observerCallback = (t, e) => {
                        const {
                            followed: o
                        } = this.state;
                        for (const e of t) {
                            if ("attributes" !== e.type || "class" !== e.attributeName) return;
                            const t = e.target.classList;
                            if (t.contains("js-follow-user--followed") && !o) return this.setState({
                                followed: !0
                            });
                            if (!t.contains("js-follow-user--followed") && o) return this.setState({
                                followed: !1
                            })
                        }
                    }, this.state = {
                        followed: this.props.isFollowed
                    }
                }
                componentDidMount() {
                    this._buttonRef && this._buttonRef.current && (this._mutationObserver = new MutationObserver(this._observerCallback), this._mutationObserver.observe(this._buttonRef.current, {
                        attributes: !0
                    }))
                }
                componentDidUpdate(t) {
                    t.isFollowed !== this.props.isFollowed && this.setState({
                        followed: this.props.isFollowed
                    })
                }
                componentWillUnmount() {
                    this._mutationObserver && this._mutationObserver.disconnect()
                }
                render() {
                    const {
                        authorId: t,
                        hidden: e,
                        size: o = "small",
                        variant: l = "secondary",
                        color: c = "brand",
                        className: d
                    } = this.props, {
                        followed: h
                    } = this.state;
                    return r.createElement("div", {
                        "data-id": t,
                        className: i("js-follow-user", `js-follow-user-${t}`, h && "js-follow-user--followed", e && a.hidden, d),
                        ref: this._buttonRef
                    }, r.createElement(s.SquareButton, {
                        className: i(a.button, h && a["i-checked"]),
                        variant: l,
                        color: c,
                        size: o
                    }, r.createElement("div", {
                        className: a.buttonInner
                    }, r.createElement("span", {
                        className: a.unchecked
                    }, n.t("Follow")), r.createElement("span", {
                        className: a.checked
                    }, n.t("Following", {
                        context: "follow_status"
                    })), r.createElement("span", {
                        className: a.uncheckHint
                    }, n.t("Unfollow")))))
                }
            }
        },
        373074: (t, e, o) => {
            "use strict";
            o.d(e, {
                template: () => a
            });
            var r = o(575932),
                n = o(738540),
                i = o(759530),
                s = o(989148);
            const a = `<div class="tv-user-link-popup i-hidden" data-id="{{ id }}">\n\t\t<div class="tv-user-link-popup__general">\n\t\t\t<a href="{{ profile_link }}" class="tv-user-link-popup__avatar"{{#hrefTarget}} target="{{hrefTarget}}"{{/hrefTarget}}>\n\t\t\t\t<img src="{{mid_picture_url}}" alt="" class="tv-user-link-popup__avatar-img">\n\t\t\t</a>\n\t\t\t<div class="tv-user-link-popup__profile">\n\t\t\t\t<div class="tv-user-link-popup__name">\n\t\t\t\t\t<a href="{{ profile_link }}" class="tv-user-link-popup__name-link apply-overflow-tooltip"{{#hrefTarget}} target="{{hrefTarget}}"{{/hrefTarget}}>{{ username }}</a>\n\t\t\t\t\t<span class="tv-user-link-popup__badge-wrapper js-badge-wrapper"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class="tv-user-link-popup__info">\n\t\t\t\t\t{{#show_broker_rating_block}}\n\t\t\t\t\t<span class="tv-user-link-popup__rating-number">{{ broker_rating }}</span>\n\t\t\t\t\t<span class="js-stars-rating-wrapper"></span>\n\t\t\t\t\t{{/show_broker_rating_block}}\n\t\t\t\t\t{{^broker_plan}}\n\t\t\t\t\t<span class="tv-user-link-popup__info-item tv-user-link-popup__info-item--users">\n\t\t\t\t\t\t<span class="tv-user-link-popup__info-icon apply-common-tooltip" title="${(0,r.t)("Followers")}">${n}</span>\n\t\t\t\t\t\t<span class="tv-user-link-popup__info-value apply-overflow-tooltip">{{ followers_count }}</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class="tv-user-link-popup__info-item tv-user-link-popup__info-item--comment">\n\t\t\t\t\t\t<span class="tv-user-link-popup__info-icon apply-common-tooltip" title="${(0,r.t)("Ideas")}">${i}</span>\n\t\t\t\t\t\t<span class="tv-user-link-popup__info-value apply-overflow-tooltip">{{ charts_count }}</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class="tv-user-link-popup__info-item tv-user-link-popup__info-item--chart">\n\t\t\t\t\t\t<span class="tv-user-link-popup__info-icon apply-common-tooltip" title="${(0,
r.t)("Reputation")}">\n\t\t\t\t\t\t\t${s}</span>\n\t\t\t\t\t\t<span class="tv-user-link-popup__info-value apply-overflow-tooltip">{{ reputation }}</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t{{/broker_plan}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t{{#status}}\n\t\t\t<div class="tv-user-link-popup__status js-status">{{ status }}</div>\n\t\t{{/status}}\n\t\t{{#showButtons}}\n\t\t\t<div class="tv-user-link-popup__actions">\n\t\t\t\t<span class="tv-user-link-popup__button js-follow-wrapper"></span>\n\t\t\t\t<span class="tv-user-link-popup__button js-message-wrapper" data-username="{{ username }}" data-id="{{ id }}"></span>\n\t\t\t\t<span class="tv-user-link-popup__button js-donation-wrapper"></span>\n\t\t\t</div>\n\t\t{{/showButtons}}\n\t</div>`
        },
        201880: (t, e, o) => {
            "use strict";
            var r = o(823127),
                n = o(213398),
                i = o(587995),
                s = o(876242),
                a = o(114939).buildUtmQueryStringFromUrlParams,
                l = o(373074).template,
                c = o(568919).openPMDialog,
                d = o(527800).renderBadgeAccount,
                h = o(970704).isFeaturedBroker,
                u = o(461495).getBadgeAccountTitle,
                p = o(461495).getBadgeAccountName,
                g = o(712797).getBadgeAccountLink,
                m = o(349896).Size,
                _ = o(295670).renderStarsRatingElement,
                f = o(46279).getUserProfilePath,
                v = o(830375).renderDonationButton,
                w = o(830375).renderFollowButton,
                b = o(830375).renderMessageButton,
                y = o(725026).sendMessageToUser,
                C = o(778785).mobiletouch;
            const B = o(611688);
            ! function() {
                var t, e = r(window),
                    o = r(document);

                function S() {
                    var e, n;
                    B.enabled("disable_userlink_popup") || (t = this, o.on("mouseenter", ".js-userlink-popup, .userlink, .ch-userlink, .ch-item-userpic", (function() {
                        n && clearTimeout(n);
                        var o = r(this);
                        n = setTimeout((function() {
                            n = void 0, t.isActiveTarget(o) ? t.open() : e = r.ajax({
                                url: "/u/" + (o.data("username") || o.text()) + "/info/",
                                type: "POST",
                                success: function(e) {
                                    if (e && !e.error) {
                                        o.is('[target="_blank"]') && (e.hrefTarget = "_blank"), t.update(o, e);
                                        var r = t.$el[0].querySelector(".js-follow-wrapper");
                                        null !== r && w({
                                            container: r,
                                            isFollowed: t.data.follow_status,
                                            userId: t.data.id
                                        });
                                        var n = t.$el[0].querySelector(".js-message-wrapper");
                                        if (null !== n && b({
                                                container: n,
                                                action: function() {
                                                    runOrSignIn((function() {
                                                        c(t.data.id, t.data.username)
                                                    }), {
                                                        source: "Private message from userlink popup",
                                                        verifiedPhoneRequired: !0
                                                    })
                                                }
                                            }), !e.is_broker) {
                                            var i = {
                                                    id: e.id,
                                                    username: e.username,
                                                    avatars: {
                                                        small: e.picture_url
                                                    },
                                                    is_broker: e.is_broker,
                                                    badges: e.badges
                                                },
                                                s = t.$el[0].querySelector(".js-donation-wrapper");
                                            null !== s && v({
                                                container: s,
                                                donationUserInfo: i,
                                                donationKind: "profile_popup",
                                                action: function() {
                                                    t.close()
                                                }
                                            })
                                        }
                                        var a = t.$el[0].querySelector(".js-badge-wrapper");
                                        if (null !== a) {
                                            var l = e.badges.filter((function(t) {
                                                return !h(t.name)
                                            }));
                                            if (l.length > 0) {
                                                var f = p(l);
                                                f && d(a, {
                                                    name: f,
                                                    title: u(l),
                                                    href: g(f)
                                                })
                                            }
                                        }
                                        if (e.broker_plan && e.broker_rating) {
                                            var y = t.$el[0].querySelector(".js-stars-rating-wrapper");
                                            _(y, {
                                                rating: e.broker_rating,
                                                size: m.Medium
                                            }).then((function() {
                                                t.open()
                                            }))
                                        } else t.open()
                                    }
                                }
                            })
                        }), parseInt(o.data("userlinkpopup-timeout"), 10) || s.dur)
                    })).on("mouseleave", ".js-userlink-popup, .userlink, .ch-userlink, .ch-item-userpic", (function() {
                        e && e.abort(), n && clearTimeout(n), t.close(200)
                    })))
                }
                C || (S.prototype.clearCloseTimeout = function() {
                    this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = void 0)
                }, S.prototype.isInDOM = function() {
                    return !!this.$el && r.contains(document.body, this.$el[0])
                }, S.prototype.getSizes = function() {
                    if (!this.$el) return {
                        width: 0,
                        height: 0
                    };
                    var t = this.isInDOM(),
                        e = this.$el.hasClass("i-hidden");
                    this.$el.removeClass("i-hidden"), t || this.$el.css("position", "fixed").appendTo(document.body);
                    var o = {
                        width: this.$el.outerWidth(),
                        height: this.$el.outerHeight()
                    };
                    return t || this.$el.css("position", "").detach(), e && this.$el.addClass("i-hidden"), o
                }, S.prototype.sendMessage = function() {
                    var t = this.$el.find('[name="message-text"]'),
                        e = String(t.val()).replace(/^\s+|\s+$/g, "");
                    e ? (y(e, this.data.id), this.close()) : t.css("border-color", "#E0735E").focus()
                }, S.prototype.isActiveTarget = function(t) {
                    return this.$el && this.$target && this.$target.is(t)
                }, S.prototype.isSameUser = function(t) {
                    var e = t.data();
                    return e && this.data && e.id === this.data.id
                }, S.prototype.update = function(t, e) {
                    if (this.isActiveTarget(t) || this.isSameUser(t)) return this.clearCloseTimeout(), this;
                    open && this.close();
                    var o = this;
                    o.$target = t, o.data = e || t.data(), o.data.showButtons = o.data.username !== window.user.username && !(o.data.banned_permanently || o.data.inactive), o.data.show_add_status_btn = !window.user.status && is_authenticated, o.data.show_broker_rating_block = o.data.broker_plan && o.data.broker_rating;
                    var i = a(!1);
                    o.data.profile_link = f({
                        username: o.data.username,
                        is_broker: o.data.is_broker
                    }, {
                        query: i
                    });
                    var s = o.data.broker_rating && o.data.broker_rating.toFixed(2);
                    return o.$el = r(n.render(l, Object.assign({}, o.data, {
                        broker_rating: s
                    }))).on("mouseenter", (function() {
                        o.clearCloseTimeout()
                    })).on("mouseleave", (function(t) {
                        o.close(o.lastDelay || 500)
                    })).on("click", "a, .tv-button", (function() {
                        o.close()
                    })), o
                }, S.prototype.open = function() {
                    if (this.clearCloseTimeout(), this.opened || !this.$el) return this;
                    var t = this.$target.closest(".js-userlink-popup-anchor"),
                        o = this.$target[0].getBoundingClientRect(),
                        r = t.length ? t[0].getBoundingClientRect().left : o.left - 20,
                        n = this.getSizes();
                    r + n.width > e.width() - 10 && (r = e.width() - n.width - 10);
                    var i = {
                        top: o.top - n.height - 5,
                        left: r
                    };
                    i.top < 0 && (i.top = o.top + this.$target.height() + 5), this.$el.css(i).appendTo(document.body).removeClass("i-hidden").addClass("i-opening"), this.$el.find(".js-status").width(this.$el.width());
                    var a = this;
                    return setTimeout((function() {
                        a.$el.addClass("i-opened"), setTimeout((function() {
                            a.$el.removeClass("i-opening")
                        }), s.dur)
                    }), 20), this.opened = !0, this
                }, S.prototype.close = function(t) {
                    if (t && "number" == typeof t) return this.closeTimeout = setTimeout(this.close.bind(this), t), this.lastDelay = t, this;
                    if (this.clearCloseTimeout(), !this.opened) return this;
                    this.$el.addClass("i-closing");
                    var e = this;
                    return setTimeout((function() {
                        e.$el && (e._unmountComponentsAtNodes(), e.$el.remove()), e.$el = e.$target = e.data = void 0, e.opened = !1
                    }), .5 * s.dur), this
                }, S.prototype.getPosition = function() {
                    return !!this.$el && {
                        top: this.$el.offset().top - r(window).scrollTop(),
                        left: this.$el.offset().left - r(window).scrollLeft()
                    }
                }, S.prototype._unmountComponentsAtNodes = function() {
                    var t = this.$el[0].querySelector(".js-badge-wrapper");
                    null !== t && i.unmountComponentAtNode(t);
                    var e = this.$el[0].querySelector(".js-stars-rating-wrapper");
                    null !== e && i.unmountComponentAtNode(e)
                }, t = new S)
            }()
        },
        829770: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, {
                Action: () => l,
                ActionAsync: () => c,
                Separator: () => d,
                Loader: () => h
            });
            var r = o(588537),
                n = o(97639),
                i = o.n(n),
                s = o(470316),
                a = o(95935);
            class l {
                constructor(t, e = a.guid()) {
                    this.type = "action", this._destroyed = !1, this._binding = null, (0, r.assert)(void 0 !== t.actionId, "actionId must be defined"), this.id = e, this._onUpdate = new(i()), this._options = t, this.update(t)
                }
                execute() {
                    this._options.checkable && this.update({
                        checked: !this._options.checked
                    }), this._options.onExecute && this._options.onExecute(this)
                }
                getLabel() {
                    return this._options.label || ""
                }
                getSubItems() {
                    return this._options.subItems || []
                }
                isDisabled() {
                    return !0 === this._options.disabled
                }
                isActive() {
                    return !0 === this._options.active
                }
                isCheckable() {
                    return !0 === this._options.checkable
                }
                isChecked() {
                    return !0 === this._options.checked
                }
                isLoading() {
                    return !0 === this._options.loading
                }
                getSize() {
                    var t;
                    return null !== (t = this._options.size) && void 0 !== t ? t : "normal"
                }
                getPayload() {
                    return this._options.payload
                }
                update(t) {
                    this._destroyed || (this._unbindShortcut(), t.hotkeyHash && (this._options.shortcutHint = (0, s.humanReadableHash)(t.hotkeyHash)), this._options = Object.assign(this._options, t), this._bindShortcut(), this._onUpdate.fire(this))
                }
                onUpdate() {
                    return this._onUpdate
                }
                getState() {
                    return {
                        actionId: this._options.actionId,
                        label: this.getLabel(),
                        disabled: this.isDisabled(),
                        active: this.isActive(),
                        subItems: this.getSubItems(),
                        checkable: this.isCheckable(),
                        checked: this.isChecked(),
                        loading: this.isLoading(),
                        size: this.getSize(),
                        doNotCloseOnClick: this._options.doNotCloseOnClick || !1,
                        shortcutHint: this._options.shortcutHint,
                        hint: this._options.hint,
                        icon: this._options.icon,
                        iconChecked: this._options.iconChecked,
                        toolbox: this._options.toolbox,
                        showToolboxOnHover: this._options.showToolboxOnHover || !1,
                        statName: this._options.statName,
                        name: this._options.name,
                        invisibleHotkey: this._options.invisibleHotkey,
                        noInteractive: this._options.noInteractive
                    }
                }
                getBinding() {
                    return this._binding
                }
                setBinding(t) {
                    this._binding = t
                }
                destroy() {
                    var t, e;
                    this._destroyed = !0, this._onUpdate.destroy(), null !== this._binding && this._binding.destroy(), this._unbindShortcut(), null === (e = (t = this._options).onDestroy) || void 0 === e || e.call(t)
                }
                options() {
                    return this._options
                }
                _bindShortcut() {
                    if (!this._options.hotkeyGroup || !this._options.hotkeyHash) return;
                    const t = "string" == typeof this._options.label ? this._options.label : this._options.name;
                    this._hotkeyAction = this._options.hotkeyGroup.add({
                        hotkey: this._options.hotkeyHash,
                        desc: t,
                        handler: () => this.execute(),
                        isDisabled: () => this.isDisabled()
                    })
                }
                _unbindShortcut() {
                    this._hotkeyAction && (this._hotkeyAction.destroy(), delete this._hotkeyAction)
                }
            }
            class c extends l {
                constructor(t, e, o) {
                    super({
                        actionId: t
                    }, o), this._loader = e, this._loaded = !1
                }
                loadOptions() {
                    return this._loadingPromise || (this._loadingPromise = this._loader().then((t => {
                        this._loaded = !0, this.update(t)
                    }))), this._loadingPromise
                }
                getState() {
                    return this.loadOptions(), super.getState()
                }
                isLoading() {
                    return !this.isLoaded()
                }
                isLoaded() {
                    return this._loaded
                }
            }
            class d {
                constructor(t) {
                    this.type = "separator", this.id = a.guid(), this._hint = t
                }
                getHint() {
                    return this._hint
                }
            }
            class h extends l {
                constructor(t) {
                    super({
                        actionId: t
                    })
                }
                isLoading() {
                    return !0
                }
                getSize() {
                    return "big"
                }
            }
        },
        1891: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, {
                ContextMenuManager: () => r
            });
            var r, n = o(829770),
                i = o(224743);
            ! function(t) {
                let e = null,
                    r = null;
                const s = [],
                    a = {
                        createAction: t => new n.Action({ ...t,
                            actionId: "Chart.CustomActionId"
                        }),
                        createAsyncAction: t => new n.ActionAsync("Chart.CustomActionId", t),
                        createSeparator: () => new n.Separator
                    };
                async function l(t, n = {}, i = {
                    menuName: ""
                }, l) {
                    let d;
                    null !== e && (t = await e(t, a));
                    const h = () => {
                        const t = s.indexOf(d); - 1 !== t && s.splice(t, 1), void 0 !== l && l()
                    };
                    if (null !== r) d = await r(t, i, h), c();
                    else {
                        const e = await Promise.all([o.e(8348), o.e(5979), o.e(78941), o.e(21834), o.e(44155), o.e(24384), o.e(74733), o.e(11812), o.e(24782), o.e(75514), o.e(88607), o.e(91584)]).then(o.bind(o, 37091));
                        d = new e.ContextMenuRenderer(t, n, h, c)
                    }
                    return s.push(d), d
                }

                function c() {
                    (0, i.globalCloseMenu)()
                }
                t.createMenu = l, t.showMenu = function(t, e, o = {}, r, n) {
                    return l(t, o, r, n).then((t => t.show(e)))
                }, t.setCustomRendererFactory = function(t) {
                    r = t
                }, t.setCustomItemsProcessor = function(t) {
                    e = t
                }, t.hideAll = c, t.getShown = function() {
                    for (let t = 0; t < s.length; t++)
                        if (s[t].isShown()) return s[t];
                    return null
                }
            }(r || (r = {}))
        },
        253742: (t, e, o) => {
            "use strict";
            o.d(e, {
                SidebarCustomScroll: () => u
            });
            var r = o(778785),
                n = o(97639),
                i = o.n(n),
                s = o(318557),
                a = o(3008),
                l = o(404573),
                c = o(320335),
                d = (o(723961), o(367525));
            const h = {
                headerHeight: 0,
                additionalClass: "",
                alwaysVisible: !1,
                showBottomShadow: !0,
                scrollMarginTop: 1,
                bubbleScrollEvent: !1
            };
            class u {
                constructor(t, e, o = {}) {
                    if (this.scrolled = new(i()), this.scrolltoend = new(i()), this.scrolltostart = new(i()), this.visibilityCallbacks = [], this._scrollTargetTop = 0, this._scrollSpeed = 40, this._shadowOffset = 10, this._shadowTop = null, this._shadowBottom = null, this._dragInitialized = !1, this._dragging = !1, this._draggable = null, this._atStart = !1, this._atEnd = !1, this._stickyBottom = null, this._animation = null, this._saved = null, this._options = { ...h,
                            ...o
                        }, this._wrapper = t, this._wrapper.classList.add(d.wrapper), this._content = e, this._headerHeight = this._options.headerHeight, this._scrollMarginTop = this._options.scrollMarginTop, this._scrollBar = document.createElement("div"), this._scrollBar.classList.add("sb-scrollbar", "sb-scrollbar-body"), this._options.additionalClass && this._scrollBar.classList.add(this._options.additionalClass), this._scrollBar.classList.toggle("active-always", this._options.alwaysVisible), this._scrollBarWrapper = document.createElement("div"), this._scrollBarWrapper.classList.add("sb-scrollbar-wrap"), this._touch = r.touch, this._touch) return this._content.style.position = "relative", this._wrapper.classList.add(d.touch), void this._wrapper.addEventListener("scroll", (() => this._onScroll()));
                    this._wrapper.style.overflow = "hidden", this._unsubscribe = (() => {
                        const t = () => {
                                this._dragging || (this._options.alwaysVisible || this._scrollBar.classList.add("active"), this._onScroll())
                            },
                            e = () => {
                                this._dragging || (this._options.alwaysVisible || this._scrollBar.classList.remove("active"), this._onScroll())
                            },
                            o = t => {
                                if (!t.defaultPrevented) {
                                    const e = (0, c.getPixelsFromEvent)(t, (() => ({
                                        height: this._wrapper.clientHeight
                                    }))).y;
                                    this.scroll(-e, 1) || (t.stopPropagation(), t.preventDefault())
                                }
                            };
                        return this._wrapper.addEventListener("mouseenter", t), this._wrapper.addEventListener("mouseleave", e), this._wrapper.addEventListener("wheel", o), () => {
                            this._wrapper.removeEventListener("mouseenter", t), this._wrapper.removeEventListener("mouseleave", e), this._wrapper.removeEventListener("wheel", o)
                        }
                    })(), !1 !== this._options.showTopShadow && (this._shadowTop = document.createElement("div"), this._shadowTop.classList.add("sb-inner-shadow", "top", "i-invisible"), this._wrapper.appendChild(this._shadowTop)), !1 !== this._options.showBottomShadow && (this._shadowBottom = document.createElement("div"), this._shadowBottom.classList.add("sb-inner-shadow"), this._wrapper.appendChild(this._shadowBottom)), this._shadowTop && this._headerHeight && (this._shadowTop.style.top = this._headerHeight - this._shadowOffset + "px"), this._wrapper.appendChild(this._scrollBarWrapper), this._scrollBarWrapper.appendChild(this._scrollBar), this._onScroll()
                }
                isTouch() {
                    return this._touch
                }
                getScrollBar() {
                    return this._scrollBar
                }
                initDraggable() {
                    return this._dragInitialized || (this._draggable = new l.Draggable({
                        axis: "y",
                        source: this._scrollBar,
                        containment: this._scrollBarWrapper,
                        start: () => {
                            this._dragging = !0
                        },
                        stop: () => {
                            this._dragging = !1
                        },
                        drag: () => {
                            this.updateScroll()
                        }
                    }), this._dragInitialized = !0), this
                }
                updateScroll() {
                    if (this._touch) return this;
                    const t = Math.ceil((0, s.position)(this._scrollBar).top - this._scrollMarginTop - this._headerHeight),
                        e = this.getContainerHeightWithoutHeader(),
                        o = (0, s.outerHeight)(this._content),
                        r = o - e - 1;
                    return e <= 0 || (this._scrollTargetTop = r <= 0 ? this._headerHeight : Math.min(-t * o / e + this._headerHeight, this._headerHeight), t + (0, s.contentHeight)(this._scrollBar) + 2 >= e ? this.scrollToEnd() : (this._content.style.top = this._scrollTargetTop + "px", this._onScroll())), this
                }
                getContainerHeightWithoutHeader() {
                    return this._wrapper.getBoundingClientRect().height - this._headerHeight
                }
                getContainerHeight() {
                    return this._wrapper.getBoundingClientRect().height
                }
                getContentHeight() {
                    return this._content.getBoundingClientRect().height
                }
                updateScrollBar() {
                    if (this._touch) return this;
                    const t = (0, s.position)(this._content).top,
                        e = this.getContentHeight(),
                        o = this.getContainerHeight(),
                        r = this.getContainerHeightWithoutHeader(),
                        n = 1 + this._headerHeight,
                        i = r - 2,
                        a = (Math.abs(t) - this._headerHeight) * i / e,
                        l = o * o / e;
                    return this.isContentShort() ? (this._scrollBar.classList.add("js-hidden"), this._wrapper.classList.remove("sb-scroll-active")) : (this._scrollBar.classList.remove("js-hidden"), this._scrollBar.style.height = l + "px", this._scrollBar.style.top = n + a + "px", this._wrapper.classList.add("sb-scroll-active"), this.initDraggable()), this
                }
                scroll(t, e) {
                    const o = (0, s.position)(this._content).top,
                        r = (0, s.outerHeight)(this._content) - this.getContainerHeightWithoutHeader() - 1,
                        n = e || this._scrollSpeed;
                    return r <= 0 || (this._scrollTargetTop = Math.max(-r + this._headerHeight, Math.min(this._headerHeight, o + t * n)), this.setContentTop(this._scrollTargetTop), this._onScroll())
                }
                animateTo(t) {
                    if (this._touch) return this;
                    const e = (0, s.outerHeight)(this._content) - this.getContainerHeightWithoutHeader() - 1;
                    if (e <= 0) return !0;
                    this._scrollTargetTop = Math.max(-e + this._headerHeight, Math.min(this._headerHeight, -t)), this._animation && this._animation.stop(), this._animation = (0, a.doAnimate)({
                        duration: 500,
                        from: parseFloat(getComputedStyle(this._content).top),
                        to: this._scrollTargetTop,
                        onStep: (t, e) => {
                            this._content.style.top = e + "px"
                        },
                        onComplete: () => {
                            this._onScroll()
                        }
                    })
                }
                resize() {
                    const t = (0, s.outerHeight)(this._content),
                        e = (0, s.outerHeight)(this._wrapper);
                    !this._options.vAlignBottom && t < e ? this.atStart() || this.scrollToStart() : this.atEnd() ? this.scrollToEnd() : "number" == typeof this._stickyBottom && this.setContentTop(Math.min(0, this._stickyBottom + (0, s.outerHeight)(this._wrapper) - (0, s.outerHeight)(this._content)))
                }
                resizeHeader(t) {
                    const e = t - this._headerHeight;
                    this._headerHeight = t, this._scrollTargetTop += e, this._shadowTop && (this._shadowTop.style.top = this._headerHeight - this._shadowOffset + "px"), this.resize()
                }
                scrollTo(t, e) {
                    const o = {
                        position: "visible",
                        areaHeight: t instanceof HTMLElement ? (0, s.contentHeight)(t) : 0,
                        ...e
                    };
                    t instanceof HTMLElement && (t = o.offsetTop || (0, s.position)(t).top);
                    const r = (0, s.position)(this._content).top,
                        n = this._content.getBoundingClientRect().height,
                        i = this.getContainerHeightWithoutHeader();
                    if (n - i - 1 <= 0) return !0;
                    const a = -1 * (r - this._headerHeight),
                        l = a + i;
                    let c = 0;
                    if ("visible" === o.position) {
                        if (t > a && t + o.areaHeight < l) return !1;
                        c = t + o.areaHeight > l ? l - t - o.areaHeight : a - t
                    } else "top" === o.position && (c = a - t);
                    return this.scroll(c, 1), this._onScroll(), !1
                }
                scrollToEnd() {
                    const t = (0, s.position)(this._content).top,
                        e = (0, s.outerHeight)(this._content),
                        o = (0, s.outerHeight)(this._wrapper),
                        r = e > o ? t + (o - (e + t)) + 1 : 1;
                    return this.setContentTop(r), this._onScroll(), this
                }
                scrollToStart() {
                    return this.setContentTop(this._headerHeight), this._onScroll(), this
                }
                currentPosition() {
                    return Math.round((0, s.position)(this._content).top)
                }
                atStart() {
                    return Math.round((0, s.position)(this._content).top) >= this._headerHeight
                }
                atEnd(t) {
                    "number" == typeof t && isFinite(t) || (t = 0);
                    const e = Math.round((0, s.position)(this._content).top),
                        o = Math.round((0, s.outerHeight)(this._content)),
                        r = Math.round((0, s.outerHeight)(this._wrapper));
                    return o - Math.abs(e) - 1 <= r + t
                }
                checkContentVisibility() {
                    this._onContentVisible()
                }
                subscribeToContentVisible(t, e, o) {
                    this.visibilityCallbacks.push({
                        id: t,
                        element: e,
                        callback: o
                    })
                }
                triggerVisibilityCallbacks(t) {
                    this._onContentVisible(t)
                }
                save() {
                    return this._saved = {
                        top: (0, s.position)(this._content).top,
                        height: (0, s.outerHeight)(this._content)
                    }, this
                }
                restore() {
                    if (this._saved) {
                        if (this._saved.top === (0, s.position)(this._content).top && this._saved.height === (0, s.outerHeight)(this._content)) return this._saved = null, this;
                        this._options.vAlignBottom && (this._saved.top -= (0, s.outerHeight)(this._content) - this._saved.height, this._saved.top > this._headerHeight && (this._saved.top = this._headerHeight)), this.setContentTop(this._saved.top), this._saved = null, this._onScroll(!0)
                    }
                    return this
                }
                setContentTop(t) {
                    return this._touch ? this._options.vAlignBottom && (0, s.outerHeight)(this._content) < (0,
                        s.outerHeight)(this._wrapper) ? (this._wrapper.style.overflowY = "visible", this._content.style.position = "absolute", this._content.style.bottom = "0px") : (this._content.style.position = "relative", this._content.style.position = "auto", this._wrapper.style.overflowY = "auto", this._wrapper.scrollTop = -t) : this._content.style.top = t + "px", this
                }
                isContentShort() {
                    return this.getContentHeight() <= this.getContainerHeightWithoutHeader()
                }
                destroy() {
                    var t;
                    this._animation && this._animation.stop(), this._scrollBarWrapper && this._scrollBarWrapper.remove(), this._shadowBottom && this._shadowBottom.remove(), this._shadowTop && this._shadowTop.remove(), this._draggable && (this._draggable.destroy(), this._draggable = null), this._content.style.cssText = "", this._wrapper.style.cssText = "", null === (t = this._unsubscribe) || void 0 === t || t.call(this)
                }
                _onScroll(t) {
                    this._touch || (this._content.style.bottom = "auto"), this.scrolled.fire(), this._dragging && !0 !== t || this.updateScrollBar();
                    const e = this.atStart(),
                        o = this.atEnd();
                    return this._shadowTop && this._shadowTop.classList.toggle("i-invisible", !!e), this._shadowBottom && this._shadowBottom.classList.toggle("i-invisible", !!o), this._onContentVisible(), !this._atStart && e ? (this._atStart = !0, this.scrolltostart.fire()) : this._atStart && !e && (this._atStart = !1), !this._atEnd && o ? (this._atEnd = !0, this.scrolltoend.fire()) : this._atEnd && !o && (this._atEnd = !1), this._options.vAlignBottom && (this._stickyBottom = (0, s.outerHeight)(this._content) - Math.abs((0, s.position)(this._content).top) - (0, s.outerHeight)(this._wrapper)), (this._atStart || this._atEnd) && ("function" == typeof this._options.bubbleScrollEvent ? Boolean(this._options.bubbleScrollEvent()) : Boolean(this._options.bubbleScrollEvent))
                }
                _contentIsVisible(t) {
                    return (0, s.position)(t.element).top > -1 * this.currentPosition()
                }
                _onContentVisible(t) {
                    if (!this.visibilityCallbacks.length) return;
                    const e = t || this._contentIsVisible.bind(this),
                        o = [],
                        r = this.visibilityCallbacks.filter(((t, r) => {
                            if (!this._content.contains(t.element)) return !1;
                            const n = e(t);
                            return n && o.push(r), !n
                        }));
                    o.forEach((e => {
                        this.visibilityCallbacks[e].callback(!!t)
                    })), this.visibilityCallbacks = r
                }
            }
        },
        535954: (t, e, o) => {
            "use strict";
            var r, n, i, s = o(823127);
            r = s, void 0 !== document.hidden ? (n = "hidden", i = "visibilitychange") : void 0 !== document.mozHidden ? (n = "mozHidden", i = "mozvisibilitychange") : void 0 !== document.msHidden ? (n = "msHidden", i = "msvisibilitychange") : void 0 !== document.webkitHidden && (n = "webkitHidden", i = "webkitvisibilitychange"), r.tabvisible = !0, i && (r(document).on(i, (function(t) {
                r.tabvisible = !document[n], r(window).trigger("visibilitychange", !document[n])
            })), r(document).trigger(i)), r.whenTabVisible = function(t) {
                !i || r.tabvisible ? t() : r(window).one("visibilitychange", t)
            }
        },
        891137: (t, e, o) => {
            "use strict";
            o.d(e, {
                lazyFancybox: () => n
            });
            o(823127), o(524956);
            var r = o(823127);

            function n(t) {
                const {
                    elem: e
                } = t, o = e ? r(e) : void 0, n = e => {
                    const s = r(e.currentTarget);
                    e.preventDefault(), e.stopPropagation(), i((() => {
                        void 0 !== o && (o.off({
                            click: n
                        }), o.fancybox(t)), s.click()
                    }))
                };
                "function" != typeof r.fancybox ? void 0 !== o ? o.one({
                    click: n
                }) : i((() => {
                    r.fancybox(t)
                })) : void 0 !== o ? o.fancybox(t) : r.fancybox(t)
            }

            function i(t) {
                Promise.all([o.e(15107), o.e(26554)]).then((e => {
                    o(626554), t()
                }).bind(null, o)).catch(o.oe)
            }
        },
        3008: (t, e, o) => {
            "use strict";

            function r(t, e, o) {
                return t * (1 - o) + e * o
            }
            o.d(e, {
                lerp: () => r,
                doAnimate: () => s
            });
            const n = {
                from: 0,
                duration: 250,
                easing: o(876242).easingFunc.easeOutCubic
            };
            class i {
                constructor(t) {
                    this._doing = !0, this._completed = !1, this._options = { ...n,
                        ...t
                    };
                    const e = performance.now();
                    window.requestAnimationFrame((t => {
                        this._animation(e, this._options.from, t)
                    }))
                }
                stop() {
                    this._doing = !1
                }
                completed() {
                    return this._completed
                }
                _animation(t, e, o) {
                    if (!this._doing) return void this._finishAnimation();
                    const n = (o = !o || o < 1e12 ? performance.now() : o) - t,
                        i = n >= this._options.duration || e === this._options.to,
                        s = r(this._options.from, this._options.to, this._options.easing(n / this._options.duration)),
                        a = i ? this._options.to : s,
                        l = a - e;
                    this._options.onStep(l, a), i ? this._finishAnimation() : window.requestAnimationFrame((e => {
                        this._animation(t, a, e)
                    }))
                }
                _finishAnimation() {
                    this._options.onComplete && this._options.onComplete(), this._completed = !0
                }
            }

            function s(t) {
                return new i(t)
            }
        },
        894169: (t, e, o) => {
            "use strict";
            o.d(e, {
                urlsRegExp: () => r
            });
            const r = {
                amazonawsLinks: "(?:https://|http://)(s3\\.(amazonaws|tradingview)\\.com(\\/tradingview(_staging)?)?\\/snapshots)\\/(?:\\S*?)\\.(png|bmp|jpg|jpeg)",
                imageUrl: "^[0-9a-zA-Z]{8}$",
                publishedChart: "/chart/(.+?)/([0-9a-zA-Z]{8})(?:-([^/]+))?/?",
                publishedChartOld: "/v/([0-9a-zA-Z]{8})/?",
                publishedImage: "/(?:i|x)/([0-9a-zA-Z]{8})/?",
                publishedScript: "/script/([0-9a-zA-Z]{8})(?:-([^/]+))?/?",
                externalLinks: "((http://|https://)|(www\\.))[\\w.\\-]+"
            }
        },
        819615: (t, e, o) => {
            "use strict";

            function r() {
                return Promise.all([o.e(55099), o.e(84845), o.e(50407), o.e(89242), o.e(71452), o.e(61369), o.e(33216), o.e(59379), o.e(25773), o.e(10833), o.e(12255), o.e(77846), o.e(30170), o.e(36325), o.e(90375), o.e(68945), o.e(35464), o.e(98661), o.e(25977), o.e(20651), o.e(567), o.e(26612), o.e(77297), o.e(60550), o.e(67198)]).then(o.bind(o, 244420))
            }

            function n(t, e, o, n) {
                r().then((r => {
                    new r.BanUserDialog(t, e, o, n).show()
                }))
            }

            function i(t, e, o) {
                r().then((r => {
                    new r.UnbanUserDialog(t, e, o).show()
                }))
            }
            o.r(e), o.d(e, {
                showBanUserDialog: () => n,
                showUnbanUserDialog: () => i
            })
        },
        767399: (t, e, o) => {
            "use strict";

            function r(t) {
                return Promise.all([o.e(48181), o.e(35354), o.e(99740), o.e(94430), o.e(33216), o.e(32836), o.e(98432), o.e(85437), o.e(46518), o.e(82163)]).then(o.bind(o, 752523)).then((e => {
                    e.renderDonationPopup(t)
                }))
            }
            o.d(e, {
                openDonationPopup: () => r
            })
        },
        805416: (t, e, o) => {
            "use strict";

            function r(t) {
                return !/[\u0370-\u1FFF\u2E80-\uFDFF\uFE20-\uFFFF]/gu.test(t)
            }
            o.r(e), o.d(e, {
                isLatin: () => r
            })
        },
        184601: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, {
                htmlEscape: () => i,
                removeTags: () => s,
                removeSpaces: () => a,
                capitalizeFirstLetterInWord: () => l
            });
            const r = /[<"'&>]/g,
                n = t => `&#${t.charCodeAt(0)};`;

            function i(t) {
                return t.replace(r, n)
            }

            function s(t = "") {
                return t.replace(/(<([^>]+)>)/gi, "")
            }

            function a(t = "") {
                return t.replace(/\s+/g, "")
            }

            function l(t = "") {
                return t.replace(/\b\w/g, (t => t.toUpperCase()))
            }
        },
        179380: (t, e, o) => {
            "use strict";

            function r(t) {
                const e = new URL(t, document.baseURI);
                return l(e) && a(e) && s(e)
            }

            function n(t) {
                const e = new URL(t, document.baseURI);
                return a(e) && s(e)
            }

            function i(t) {
                return !t.split(/(\s+)/).filter((t => t.trim().length > 0)).some((t => {
                    try {
                        const e = new URL(t);
                        return !(!e || !e.hostname.length) && !n(t)
                    } catch (t) {
                        return !1
                    }
                }))
            }
            o.d(e, {
                isInternalUrl: () => r,
                isSafeUrl: () => n,
                validateUrlsInText: () => i,
                isInternalHost: () => c
            });
            const s = t => !t.username,
                a = t => "http:" === t.protocol || "https:" === t.protocol,
                l = t => t.hostname === location.hostname || !/^\d+\.\d+\.\d+\.\d+$/.test(t.hostname) && c(t.hostname);

            function c(t, e = window.location.hostname) {
                const o = "." === e.slice(-1) ? 3 : 2,
                    r = e.toLowerCase().split(".").slice(-o),
                    n = t.toLowerCase().split(".").slice(-r.length);
                return r.join(".") === n.join(".")
            }
        },
        963239: (t, e, o) => {
            "use strict";

            function r(t) {
                return n(t, null)
            }

            function n(t, e) {
                const o = t.files && t.files.length > 0;
                if (!o && e && e.eventPhase > 0) return i(e, t), Promise.resolve();
                if (!o) {
                    let e = !1;
                    const o = o => {
                        o.stopImmediatePropagation(), i(o, t), e = !0
                    };
                    try {
                        document.addEventListener("copy", o, !0), document.execCommand("copy")
                    } finally {
                        document.removeEventListener("copy", o, !0)
                    }
                    if (e) return Promise.resolve()
                }
                return async function(t) {
                    if (!navigator.clipboard || !navigator.clipboard.write || !window.ClipboardItem) throw new DOMException("ClipboardApi is not supported", "NotSupportedError");
                    const e = {};
                    for (const o of t.files || []) e[o.type] = o;
                    t.text && (e["text/plain"] = t.text);
                    t.html && (e["text/html"] = t.html);
                    return navigator.clipboard.write([new window.ClipboardItem(e)])
                }(t)
            }

            function i(t, e) {
                t.preventDefault();
                const o = t.clipboardData;
                e.text && o.setData("text/plain", e.text), e.html && o.setData("text/html", e.html)
            }
            async function s(t, e) {
                if ("text/plain" === e && !navigator.clipboard.write) {
                    const e = await t;
                    return navigator.clipboard.writeText(await e.text())
                }
                if (!navigator.clipboard || !navigator.clipboard.write || !window.ClipboardItem) throw new DOMException("ClipboardApi is not supported", "NotSupportedError");
                let o = null;
                try {
                    o = new window.ClipboardItem({
                        [e]: t
                    })
                } catch (r) {
                    o = new window.ClipboardItem({
                        [e]: await t
                    })
                }
                if (o) return navigator.clipboard.write([o]);
                throw new Error("ClipboardApi is not supported")
            }
            o.r(e), o.d(e, {
                copyToClipboard: () => r,
                writeImpl: () => n,
                writePromiseUsingApi: () => s
            })
        },
        404573: (t, e, o) => {
            "use strict";
            o.d(e, {
                Draggable: () => a,
                PointerBackend: () => l
            });
            var r = o(588537),
                n = o(318557),
                i = o(638456),
                s = o(778785);
            class a {
                constructor(t) {
                    var e, o;
                    this._helper = null, this._handleDragStart = t => {
                        var e;
                        if (null !== this._helper) return;
                        const o = this._source;
                        o.classList.add("ui-draggable-dragging");
                        const [r, i] = [(0, n.outerWidth)(o), (0, n.outerHeight)(o)];
                        this._helper = {
                            startTop: parseFloat(o.style.top) || 0,
                            startLeft: parseFloat(o.style.left) || 0,
                            nextTop: null,
                            nextLeft: null,
                            raf: null,
                            size: [r, i],
                            containment: this._containment instanceof HTMLElement ? [parseInt(getComputedStyle(this._containment).borderLeftWidth) + parseInt(getComputedStyle(this._containment).paddingLeft), parseInt(getComputedStyle(this._containment).borderTopWidth) + parseInt(getComputedStyle(this._containment).paddingTop), this._containment.offsetWidth - parseInt(getComputedStyle(this._containment).borderRightWidth) - parseInt(getComputedStyle(this._containment).paddingRight) - parseInt(getComputedStyle(o).marginLeft) - parseInt(getComputedStyle(o).marginRight) - r, this._containment.offsetHeight - parseInt(getComputedStyle(this._containment).borderBottomWidth) - parseInt(getComputedStyle(this._containment).paddingBottom) - parseInt(getComputedStyle(o).marginTop) - parseInt(getComputedStyle(o).marginBottom) - i] : "window" === this._containment ? [window.scrollX, window.scrollY, window.scrollX + document.documentElement.offsetWidth - r, window.scrollY + document.documentElement.offsetHeight - i] : null
                        }, null === (e = this._start) || void 0 === e || e.call(this)
                    }, this._handleDragMove = t => {
                        var e;
                        if (null === this._helper) return;
                        const {
                            current: o,
                            initial: r
                        } = t.detail, n = this._source, i = this._helper.nextTop, s = this._helper.nextLeft, a = "y" === this._axis || !1 === this._axis || 0 !== o.movementY;
                        if (a) {
                            const t = this._helper.startTop;
                            isFinite(t) && (this._helper.nextTop = o.clientY - r.clientY + t)
                        }
                        const l = "x" === this._axis || !1 === this._axis || 0 !== o.movementY;
                        if (l) {
                            const t = this._helper.startLeft;
                            isFinite(t) && (this._helper.nextLeft = o.clientX - r.clientX + t)
                        }
                        if (null !== this._helper.containment) {
                            const [t, e, o, r] = this._helper.containment;
                            a && this._helper.nextTop && (this._helper.nextTop = Math.min(this._helper.nextTop, r), this._helper.nextTop = Math.max(this._helper.nextTop, e)), l && this._helper.nextLeft && (this._helper.nextLeft = Math.min(this._helper.nextLeft, o), this._helper.nextLeft = Math.max(this._helper.nextLeft, t))
                        }
                        null !== this._helper.raf || i === this._helper.nextTop && s === this._helper.nextLeft || (this._helper.raf = requestAnimationFrame((() => {
                            null !== this._helper && (null !== this._helper.nextTop && (n.style.top = this._helper.nextTop + "px", this._helper.nextTop = null), null !== this._helper.nextLeft && (n.style.left = this._helper.nextLeft + "px", this._helper.nextLeft = null), this._helper.raf = null)
                        }))), null === (e = this._drag) || void 0 === e || e.call(this)
                    }, this._handleDragStop = t => {
                        var e;
                        if (null === this._helper) return;
                        this._source.classList.remove("ui-draggable-dragging"), this._helper = null, null === (e = this._stop) || void 0 === e || e.call(this)
                    };
                    const r = this._source = t.source;
                    r.classList.add("ui-draggable");
                    const i = this._handle = null !== (e = t.handle ? r.querySelector(t.handle) : null) && void 0 !== e ? e : r;
                    i.classList.add("ui-draggable-handle"), this._start = t.start, this._stop = t.stop, this._drag = t.drag, this._backend = new l({
                        handle: i,
                        onDragStart: this._handleDragStart,
                        onDragMove: this._handleDragMove,
                        onDragStop: this._handleDragStop
                    }), this._axis = null !== (o = t.axis) && void 0 !== o && o, this._containment = t.containment
                }
                destroy() {
                    const t = this._source;
                    t.classList.remove("ui-draggable"), t.classList.remove("ui-draggable-dragging");
                    this._handle.classList.remove("ui-draggable-handle"), this._backend.destroy(),
                        null !== this._helper && (this._helper.raf && cancelAnimationFrame(this._helper.raf), this._helper = null)
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
                    return i.CheckMobile.iOS() || (0, i.isMac)() && s.touch ? window.document.documentElement : this._handle
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
                    return (0, r.assert)(null !== this._initial), new CustomEvent(t, {
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
        728811: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, {
                createPublishedChartUrl: () => c,
                parsePublishedChartUrl: () => d,
                createPublishedChartImageUrl: () => h,
                createSnapshotImageUrls: () => u
            });
            var r = o(894169),
                n = o(66974);
            const i = new RegExp(r.urlsRegExp.publishedChartOld),
                s = new RegExp(r.urlsRegExp.publishedChart),
                a = new RegExp(r.urlsRegExp.publishedScript),
                l = new RegExp(r.urlsRegExp.imageUrl);

            function c(t, e, o) {
                if (!t || !/[0-9a-zA-Z]{8}/.test(t)) return "";
                if (t && e) {
                    return `/chart/${e}/${t}${o?`-${o}`:""}/`
                }
                return `/v/${t}/`
            }

            function d(t) {
                if (i.test(t)) {
                    return {
                        image_url: (t.match(i) || [])[1]
                    }
                }
                if (s.test(t)) {
                    const e = t.match(s) || [];
                    return {
                        image_url: e[2],
                        symbol: e[1],
                        title: e[3]
                    }
                }
                if (a.test(t)) {
                    const e = t.match(a) || [];
                    return {
                        image_url: e[1],
                        title: e[2]
                    }
                }
                return l.test(t) ? {
                    image_url: t
                } : {}
            }

            function h(t) {
                if (!t || !/[0-9a-zA-Z]{8}/.test(t)) return "";
                const e = (0, n.environment)();
                if ("battle" === e || "staging" === e) {
                    const e = t.charAt(0).toLowerCase();
                    return `${window.AWS_S3_CDN}/${e}/${t}.png`
                }
                return `/i/${t}/`
            }

            function u(t) {
                if (!t || !/[0-9a-zA-Z]{8}/.test(t)) return null;
                const e = (0, n.environment)();
                if ("battle" === e || "staging" === e) {
                    const e = t.charAt(0).toLowerCase(),
                        o = `${window.AWS_S3_CDN}/snapshots/${e}`;
                    return {
                        preview: `${o}/${t}_thumb.png`,
                        url: `${o}/${t}.png`
                    }
                } {
                    const e = `${window.location.protocol}//${window.location.host}`;
                    return {
                        preview: `${e}/x/${t}/s/`,
                        url: `${e}/x/${t}/`
                    }
                }
            }
        },
        318557: (t, e, o) => {
            "use strict";
            o.d(e, {
                contentHeight: () => n.contentHeight,
                outerHeight: () => n.outerHeight,
                outerWidth: () => n.outerWidth,
                unwrap: () => i,
                html: () => s,
                offset: () => a,
                position: () => l
            });
            var r = o(588537),
                n = o(746326);

            function i(t) {
                return t[0]
            }

            function s(t, e) {
                return void 0 === e || (null === e && (t.innerHTML = ""), "string" != typeof e && "number" != typeof e || (t.innerHTML = String(e))), t
            }

            function a(t) {
                if (!t.getClientRects().length) return {
                    top: 0,
                    left: 0
                };
                const e = t.getBoundingClientRect(),
                    o = (0, r.ensureNotNull)(t.ownerDocument.defaultView);
                return {
                    top: e.top + o.pageYOffset,
                    left: e.left + o.pageXOffset
                }
            }

            function l(t) {
                const e = getComputedStyle(t);
                let o, r = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === e.position) o = t.getBoundingClientRect();
                else {
                    o = a(t);
                    const e = t.ownerDocument;
                    let n = t.offsetParent || e.documentElement;
                    for (; n && (n === e.body || n === e.documentElement) && "static" === getComputedStyle(n).position;) n = n.parentElement;
                    n && n !== t && 1 === n.nodeType && (r = a(n), r.top += parseFloat(getComputedStyle(n).borderTopWidth), r.left += parseFloat(getComputedStyle(n).borderLeftWidth))
                }
                return {
                    top: o.top - r.top - parseFloat(e.marginTop),
                    left: o.left - r.left - parseFloat(e.marginLeft)
                }
            }
        },
        919346: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, {
                StdTheme: () => a.StdTheme,
                getStdChartTheme: () => d,
                getStdThemeNames: () => c,
                getThemeNameIfStdTheme: () => p,
                isStdTheme: () => u,
                translateThemeName: () => h
            });
            var r = o(575932),
                n = o(724377);
            const i = JSON.parse('{"content":{"chartProperties":{"scalesProperties":{"textColor":"#131722","lineColor":"rgba(42, 46, 57, 0)","backgroundColor":"#ffffff"},"paneProperties":{"vertGridProperties":{"color":"rgba(42, 46, 57, 0.06)"},"horzGridProperties":{"color":"rgba(42, 46, 57, 0.06)"},"crossHairProperties":{"color":"#9598A1"},"background":"#ffffff","backgroundGradientStartColor":"#ffffff","backgroundGradientEndColor":"#ffffff","separatorColor":"#E0E3EB"}},"sessions":{"graphics":{"backgrounds":{"outOfSession":{"color":"#2962FF","transparency":92},"preMarket":{"color":"#FF9800","transparency":92},"postMarket":{"color":"#2962FF","transparency":92}},"vertlines":{"sessBreaks":{"color":"#4985e7","style":2,"width":1}}}},"mainSourceProperties":{"baseLineColor":"#B2B5BE","candleStyle":{"borderColor":"#378658","upColor":"#089981","wickColor":"#737375","wickUpColor":"#089981","wickDownColor":"#F23645","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645"},"haStyle":{"borderColor":"#378658","upColor":"#089981","wickColor":"#737375","wickUpColor":"#089981","wickDownColor":"#F23645","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645"},"barStyle":{"downColor":"#F23645","upColor":"#089981"},"pnfStyle":{"downColor":"#F23645","upColor":"#089981","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"},"baselineStyle":{"baselineColor":"#758696","topFillColor1":"rgba(8, 153, 129, 0.28)","topFillColor2":"rgba(8, 153, 129, 0.05)","bottomFillColor1":"rgba(242, 54, 69, 0.05)","bottomFillColor2":"rgba(242, 54, 69, 0.28)","topLineColor":"#089981","bottomLineColor":"#F23645"},"areaStyle":{"transparency":100,"color1":"rgba(41, 98, 255, 0.28)","color2":"#2962FF","linecolor":"#2962FF","linewidth":2,"linestyle":0},"hiloStyle":{"color":"#2962FF","borderColor":"#2962FF","labelColor":"#2962FF"},"columnStyle":{"upColor":"rgba(8, 153, 129, 0.5)","downColor":"rgba(242, 54, 69, 0.5)","priceSource":"close"},"renkoStyle":{"upColor":"#089981","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae","borderUpColorProjection":"#a9dcc3","borderDownColorProjection":"#f5a6ae","wickUpColor":"#089981","wickDownColor":"#F23645"},"lineStyle":{"color":"#2962FF","linewidth":2,"linestyle":0},"kagiStyle":{"downColor":"#F23645","upColor":"#089981","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"},"pbStyle":{"upColor":"#089981","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae","borderUpColorProjection":"#a9dcc3","borderDownColorProjection":"#f5a6ae"},"rangeStyle":{"upColor":"#089981","downColor":"#F23645","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"}}}}'),
                s = JSON.parse('{"content":{"chartProperties":{"scalesProperties":{"textColor":"#B2B5BE","lineColor":"rgba(240, 243, 250, 0)","backgroundColor":"#ffffff"},"paneProperties":{"vertGridProperties":{"color":"rgba(240, 243, 250, 0.06)"},"horzGridProperties":{"color":"rgba(240, 243, 250, 0.06)"},"crossHairProperties":{"color":"#9598A1"},"background":"#131722","backgroundGradientStartColor":"#181C27","backgroundGradientEndColor":"#131722","backgroundType":"gradient","separatorColor":"#2A2E39"}},"sessions":{"graphics":{"backgrounds":{"outOfSession":{"color":"#2962FF","transparency":92},"preMarket":{"color":"#FF9800","transparency":92},"postMarket":{"color":"#2962FF","transparency":92}},"vertlines":{"sessBreaks":{"color":"#4985e7","style":2,"width":1}}}},"mainSourceProperties":{"baseLineColor":"#5d606b","candleStyle":{"borderColor":"#378658","upColor":"#089981","wickColor":"#B5B5B8","wickUpColor":"#089981","wickDownColor":"#F23645","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645"},"haStyle":{"borderColor":"#378658","upColor":"#089981","wickColor":"#B5B5B8","wickUpColor":"#089981","wickDownColor":"#F23645","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645"},"barStyle":{"downColor":"#F23645","upColor":"#089981"},"pnfStyle":{"downColor":"#F23645","upColor":"#089981","upColorProjection":"#336854","downColorProjection":"#7f323f"},"baselineStyle":{"baselineColor":"#758696","topFillColor1":"rgba(8, 153, 129, 0.28)","topFillColor2":"rgba(8, 153, 129, 0.05)","bottomFillColor1":"rgba(242, 54, 69, 0.05)","bottomFillColor2":"rgba(242, 54, 69, 0.28)","topLineColor":"#089981","bottomLineColor":"#F23645"},"areaStyle":{"transparency":100,"color1":"rgba(41, 98, 255, 0.28)","color2":"#2962FF","linecolor":"#2962FF","linewidth":2,"linestyle":0},"hiloStyle":{"color":"#2962FF","borderColor":"#2962FF","labelColor":"#2962FF"},"columnStyle":{"upColor":"rgba(8, 153, 129, 0.5)","downColor":"rgba(242, 54, 69, 0.5)","priceSource":"close"},"renkoStyle":{"upColor":"#089981","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645","upColorProjection":"#336854","downColorProjection":"#7f323f","borderUpColorProjection":"#336854","borderDownColorProjection":"#7f323f","wickUpColor":"#089981","wickDownColor":"#F23645"},"lineStyle":{"color":"#2962FF","linewidth":2,"linestyle":0},"kagiStyle":{"downColor":"#F23645","upColor":"#089981","upColorProjection":"#336854","downColorProjection":"#7f323f"},"pbStyle":{"upColor":"#089981","downColor":"#F23645","borderUpColor":"#089981","borderDownColor":"#F23645","upColorProjection":"#336854","downColorProjection":"#7f323f","borderUpColorProjection":"#336854","borderDownColorProjection":"#7f323f"},"rangeStyle":{"upColor":"#089981","downColor":"#F23645","upColorProjection":"#336854","downColorProjection":"#7f323f"}}}}');
            var a = o(61499);

            function l() {
                return {
                    [a.StdTheme.Light]: JSON.parse(JSON.stringify(i)),
                    [a.StdTheme.Dark]: JSON.parse(JSON.stringify(s))
                }
            }

            function c() {
                return [a.StdTheme.Light, a.StdTheme.Dark]
            }

            function d(t) {
                return l()[t]
            }

            function h(t) {
                return {
                    [a.StdTheme.Light]: r.t("Light", {
                        context: "colorThemeName"
                    }),
                    [a.StdTheme.Dark]: r.t("Dark", {
                        context: "colorThemeName"
                    })
                }[t] || t
            }

            function u(t) {
                const e = l();
                return c().some((o => g(e[o], t)))
            }

            function p(t) {
                const e = l(),
                    o = c();
                for (const r of o)
                    if (g(e[r], t)) return r;
                return null
            }

            function g(t, e) {
                let o = t.content === e.content;
                return function(t = {}, e) {
                    try {
                        m(t, [], e)
                    } catch (t) {
                        return
                    }
                }(t.content, ((t, r) => {
                    const i = function(t, e = {}) {
                        let o = e;
                        for (let e = 0; e < t.length; e++) {
                            if (!o || "object" != typeof o) return;
                            o = o[t[e]]
                        }
                        if ("string" == typeof o || "number" == typeof o) return o;
                        return
                    }(t, e.content);
                    return o = function(t, e) {
                        if (t === e) return !0;
                        if ("string" != typeof t || "string" != typeof e) return !1;
                        try {
                            return function(t, e) {
                                return Math.hypot(t[3] * t[0] - e[3] * e[0], t[3] * t[1] - e[3] * e[1], t[3] * t[2] - e[3] * e[2], 255 * t[3] - 255 * e[3]) < 48
                            }((0, n.parseRgba)(t), (0, n.parseRgba)(e))
                        } catch (t) {}
                        return !1
                    }(r, i), !o
                })), o
            }

            function m(t, e, o) {
                for (const r in t)
                    if (t.hasOwnProperty(r)) {
                        const n = e.concat(r);
                        if ("object" == typeof t[r]) m(t[r], n, o);
                        else if (o(n, t[r])) throw new Error("exit")
                    }
            }
        },
        61499: (t, e, o) => {
            "use strict";
            var r;
            o.d(e, {
                    StdTheme: () => r
                }),
                function(t) {
                    t.Light = "light", t.Dark = "dark"
                }(r || (r = {}))
        },
        909740: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, {
                setTheme: () => i,
                watchedTheme: () => n
            });
            var r = o(262325);
            const n = new(o.n(r)());

            function i(t) {
                n.setValue(t)
            }
            n.subscribe((t => {
                ! function(t, e = window) {
                    const o = "theme-" + t,
                        r = e.document.documentElement.classList;
                    for (const t of Array.from(r)) t.startsWith("theme-") && t !== o && r.remove(t);
                    r.add(o)
                }(t, window)
            }))
        },
        889267: (t, e, o) => {
            "use strict";
            o.d(e, {
                symbolTokenEscapeRe: () => s,
                tokenize: () => c
            });
            var r = o(611688),
                n = o(173777);
            const i = r.enabled("charting_library_base") ? /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&])*|'.+?'/ : /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&])*|'.+?'/,
                s = /[+\-/*]/,
                a = {
                    number: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
                    incompleteNumber: /\./,
                    symbol: i,
                    incompleteSymbol: /'[^']*/,
                    separatorPrefix: n.SEPARATOR_PREFIX,
                    openBrace: "(",
                    closeBrace: ")",
                    plus: "+",
                    minus: "-",
                    multiply: "*",
                    divide: "/",
                    power: "^",
                    whitespace: /[\0-\x20\s]+/,
                    unparsed: null
                },
                l = new RegExp(Object.values(a).map((t => {
                    return null === t ? "" : `(${"string"==typeof t?(e=t,e.replace(/[\^$()[\]{}*+?|\\]/g,"\\$&")):t.source})`;
                    var e
                })).filter((t => "" !== t)).concat(".").join("|"), "g");

            function c(t) {
                if (!t) return [];
                const e = [],
                    o = Object.keys(a);
                let r;
                for (; r = l.exec(t);) {
                    let t = !1;
                    for (let n = o.length; n--;)
                        if (r[n + 1]) {
                            o[n] && e.push({
                                value: r[n + 1],
                                type: o[n],
                                precedence: 0,
                                offset: r.index
                            }), t = !0;
                            break
                        }
                    t || e.push({
                        value: r[0],
                        type: "unparsed",
                        precedence: 0,
                        offset: r.index
                    })
                }
                return e
            }
        },
        712797: (t, e, o) => {
            "use strict";
            o.d(e, {
                getBadgeAccountLink: () => i
            });
            var r = o(359984);
            var n = o(970704);

            function i(t) {
                return (0, r.isBadgeUser)(t) ? function(t) {
                    if ((0,
                            r.isPineWizard)(t)) return "/pine-wizards/";
                    if ((0, r.isModerator)(t)) return "/moderators/";
                    if ((0, r.isProPremium)(t) || (0, r.isProRealtime)(t) || (0, r.isPro)(t) || (0, r.isTrial)(t)) return `/gopro/?source=badge&feature=${t.split(":")[1]}`
                }(t) : (0, n.isBadgeBroker)(t) ? function(t) {
                    return (0, n.isBadgeBrokerWithLink)(t) ? "/brokers/" : void 0
                }(t) : void 0
            }
        },
        527800: (t, e, o) => {
            "use strict";
            o.d(e, {
                BadgeAccount: () => c,
                renderBadgeAccount: () => d
            });
            var r = o(559496),
                n = o(587995),
                i = o(271402),
                s = o(465872),
                a = o(359984),
                l = o(970704);

            function c(t) {
                const {
                    name: e,
                    href: o,
                    ...n
                } = t;
                return (0, a.isBadgeUser)(e) ? r.createElement(i.BadgeUser, {
                    name: e,
                    href: o,
                    ...n
                }) : (0, l.isBadgeBroker)(e) ? r.createElement(s.BadgeBroker, {
                    name: e,
                    href: o,
                    ...n
                }) : null
            }

            function d(t, e) {
                n.render(r.createElement(c, { ...e
                }), t)
            }
        },
        461495: (t, e, o) => {
            "use strict";
            o.d(e, {
                getBadgeAccountName: () => i,
                getBadgeAccountTitle: () => s
            });
            var r = o(781014),
                n = o(540935);

            function i(t) {
                var e;
                if (0 !== t.length) return null === (e = t.find((t => {
                    return e = t.name, a.has(e);
                    var e
                }))) || void 0 === e ? void 0 : e.name
            }

            function s(t) {
                return t.map((t => t.verbose_name)).join(" | ")
            }
            const a = new Set(Object.values({ ...r.BadgeBrokerNames,
                ...n.BadgeUserNames
            }))
        },
        781014: (t, e, o) => {
            "use strict";
            var r;
            o.d(e, {
                    BadgeBrokerNames: () => r
                }),
                function(t) {
                    t.BrokerExtraFeatured = "broker_extra:featured", t.BrokerPlatinum = "broker:platinum", t.BrokerGold = "broker:gold", t.BrokerSilver = "broker:silver"
                }(r || (r = {}))
        },
        465872: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, {
                BadgeBroker: () => d,
                getBrokerBadgeClasses: () => h
            });
            var r = o(559496),
                n = o(497754),
                i = o(575932),
                s = o(781014),
                a = o(558470),
                l = o(970704),
                c = o(736124);

            function d(t) {
                const {
                    name: e,
                    size: o = a.BadgeSize.Small,
                    className: n,
                    title: i,
                    href: s,
                    ...c
                } = t;
                return s ? r.createElement(a.AnchorBadge, { ...c,
                    className: h(e, s, i, n),
                    title: (0, l.isBadgeBrokerWithTitle)(e) ? i : void 0,
                    size: o,
                    href: s,
                    target: "_blank"
                }, u(e)) : r.createElement(a.Badge, { ...c,
                    className: h(e, s, i, n),
                    title: (0, l.isBadgeBrokerWithTitle)(e) ? i : void 0,
                    size: o
                }, u(e))
            }

            function h(t, e, o, r) {
                return n(c["badge-broker"], t === s.BadgeBrokerNames.BrokerExtraFeatured && c.featured, t === s.BadgeBrokerNames.BrokerPlatinum && c.platinum, t === s.BadgeBrokerNames.BrokerGold && c.gold, t === s.BadgeBrokerNames.BrokerSilver && c.silver, e && c.link, o && "apply-common-tooltip", r)
            }

            function u(t) {
                return t === s.BadgeBrokerNames.BrokerExtraFeatured ? (0, i.t)("Featured") : (0, i.t)("Broker")
            }
        },
        970704: (t, e, o) => {
            "use strict";
            o.d(e, {
                isBadgeBroker: () => i,
                isFeaturedBroker: () => s,
                isBadgeBrokerWithLink: () => l,
                isBadgeBrokerWithTitle: () => d
            });
            var r = o(781014);
            const n = new Set(Object.values(r.BadgeBrokerNames));

            function i(t) {
                return n.has(t)
            }

            function s(t) {
                return t === r.BadgeBrokerNames.BrokerExtraFeatured
            }
            const a = new Set([r.BadgeBrokerNames.BrokerPlatinum, r.BadgeBrokerNames.BrokerGold, r.BadgeBrokerNames.BrokerSilver]);

            function l(t) {
                return a.has(t)
            }
            const c = new Set([r.BadgeBrokerNames.BrokerPlatinum, r.BadgeBrokerNames.BrokerGold, r.BadgeBrokerNames.BrokerSilver]);

            function d(t) {
                return c.has(t)
            }
        },
        540935: (t, e, o) => {
            "use strict";
            var r;
            o.d(e, {
                    BadgeUserNames: () => r
                }),
                function(t) {
                    t.Moderator = "moderator", t.Employee = "employee", t.PineWizard = "pine_wizard", t.ProPremium = "pro:pro_premium",
                        t.ProPremiumTrial = "pro:pro_premium_trial", t.ProRealTime = "pro:pro_realtime", t.ProRealTimeTrial = "pro:pro_realtime_trial", t.Pro = "pro:pro", t.ProTrial = "pro:pro_trial"
                }(r || (r = {}))
        },
        271402: (t, e, o) => {
            "use strict";
            o.d(e, {
                BadgeUser: () => c
            });
            var r = o(559496),
                n = o(497754),
                i = o(359984),
                s = o(558470),
                a = o(987763),
                l = o(686422);

            function c(t) {
                const {
                    name: e,
                    size: o = s.BadgeSize.Small,
                    href: n,
                    title: c,
                    className: u,
                    ...p
                } = t;
                return n ? r.createElement(s.AnchorBadge, { ...p,
                    className: d(e, o, c, u),
                    title: (0, i.isBadgeUserWithTitle)(e) ? c : void 0,
                    "aria-label": (0, i.isEmployee)(e) && (0, i.isBadgeUserWithTitle)(e) ? c : void 0,
                    size: o,
                    href: n,
                    target: "_blank"
                }, h(e), (0, i.isEmployee)(e) && r.createElement("img", {
                    src: a,
                    className: l["employee-logo-icon"],
                    role: "presentation",
                    loading: "lazy"
                })) : r.createElement(s.Badge, {
                    className: d(e, o, c, u),
                    title: (0, i.isBadgeUserWithTitle)(e) ? c : void 0,
                    "aria-label": (0, i.isEmployee)(e) && (0, i.isBadgeUserWithTitle)(e) ? c : void 0,
                    size: o,
                    ...p
                }, h(e), (0, i.isEmployee)(e) && r.createElement("img", {
                    src: a,
                    className: l["employee-logo-icon"],
                    role: "presentation",
                    loading: "lazy"
                }))
            }

            function d(t, e = s.BadgeSize.Small, o, r) {
                return n(l["badge-user"], l[`size-${e}`], (0, i.isProPremium)(t) && l["pro-premium"], (0, i.isProRealtime)(t) && l["pro-realtime"], (0, i.isPro)(t) && l.pro, (0, i.isModerator)(t) && l.moderator, (0, i.isEmployee)(t) && l.employee, (0, i.isPineWizard)(t) && l["pine-wizard"], (0, i.isTrial)(t) && l.trial, o && "apply-common-tooltip", r)
            }

            function h(t) {
                return (0, i.isProPremium)(t) ? "Premium" : (0, i.isProRealtime)(t) ? "Pro+" : (0, i.isPro)(t) ? "Pro" : (0, i.isModerator)(t) ? "Mod" : (0, i.isPineWizard)(t) ? "Wizard" : ""
            }
        },
        359984: (t, e, o) => {
            "use strict";
            o.d(e, {
                isBadgeUserWithTitle: () => i,
                isBadgeUser: () => a,
                isModerator: () => l,
                isProPremium: () => c,
                isProRealtime: () => d,
                isPro: () => h,
                isEmployee: () => u,
                isPineWizard: () => p,
                isTrial: () => g
            });
            var r = o(540935);
            const n = new Set([r.BadgeUserNames.Employee, r.BadgeUserNames.PineWizard, r.BadgeUserNames.Moderator, r.BadgeUserNames.ProPremiumTrial, r.BadgeUserNames.ProRealTimeTrial, r.BadgeUserNames.ProTrial]);

            function i(t) {
                return n.has(t)
            }
            const s = new Set(Object.values(r.BadgeUserNames));

            function a(t) {
                return s.has(t)
            }

            function l(t) {
                return r.BadgeUserNames.Moderator === t
            }

            function c(t) {
                return r.BadgeUserNames.ProPremium === t || r.BadgeUserNames.ProPremiumTrial === t
            }

            function d(t) {
                return r.BadgeUserNames.ProRealTime === t || r.BadgeUserNames.ProRealTimeTrial === t
            }

            function h(t) {
                return r.BadgeUserNames.Pro === t || r.BadgeUserNames.ProTrial === t
            }

            function u(t) {
                return r.BadgeUserNames.Employee === t
            }

            function p(t) {
                return r.BadgeUserNames.PineWizard === t
            }

            function g(t) {
                return r.BadgeUserNames.ProPremiumTrial === t || r.BadgeUserNames.ProRealTimeTrial === t || r.BadgeUserNames.ProTrial === t
            }
        },
        558470: (t, e, o) => {
            "use strict";
            o.d(e, {
                AnchorBadge: () => r.AnchorBadge,
                Badge: () => r.Badge,
                BadgeSize: () => r.BadgeSize
            });
            var r = o(774465)
        },
        180184: (t, e, o) => {
            "use strict";
            o.d(e, {
                BadgeSize: () => r.BadgeSize
            });
            var r = o(105573)
        },
        303177: (t, e, o) => {
            "use strict";
            o.d(e, {
                ButtonWithLock: () => m,
                RoundButtonWithLock: () => _
            });
            var r, n = o(559496),
                i = o(497754),
                s = o(640027);
            ! function(t) {
                t.Untouched = "untouched", t.Unsettled = "unsettled", t.Resolved = "resolved", t.Rejected = "rejected"
            }(r || (r = {}));
            var a = o(201465),
                l = o(909740),
                c = o(919346),
                d = o(612247),
                h = o(915812),
                u = o(745347);

            function p(t) {
                const {
                    onClick: e,
                    loaderColor: o,
                    disabled: a,
                    showLoader: d = !1
                } = t, [h, p] = function(t) {
                    const [e, o] = (0, n.useState)(r.Untouched), i = (0, s.useIsMounted)(), a = (0, n.useCallback)(((...e) => {
                        t && (l(r.Unsettled), t(...e).then((() => l(r.Resolved))).catch((() => l(r.Rejected))))
                    }), [t]), l = (0, n.useCallback)((t => {
                        i.current && o(t)
                    }), []);
                    return [a, e]
                }(e), [g, m] = (0, n.useState)(!1);
                (0, n.useEffect)((() => {
                    m(p === r.Unsettled && d)
                }), [p]);
                const _ = i(u.childrenWrapper, !g && u.shown),
                    f = i(u.loader, g && u.shown);
                return {
                    onClickhandler: h,
                    disabled: a || p === r.Unsettled,
                    childrenWrapperClassNames: _,
                    laoderClassNames: f,
                    loaderColor: null != o ? o : l.watchedTheme.value() === c.StdTheme.Light ? "white" : "gray"
                }
            }

            function g(t) {
                const {
                    disabled: e,
                    showLoader: o,
                    loaderColor: r,
                    onClick: n,
                    ...i
                } = t;
                return i
            }

            function m(t) {
                const {
                    onClickhandler: e,
                    disabled: o,
                    childrenWrapperClassNames: r,
                    laoderClassNames: i,
                    loaderColor: s
                } = p(t), {
                    children: a,
                    size: l = "small",
                    ...c
                } = t;
                return n.createElement(h.SquareButton, { ...g(c),
                    disabled: o,
                    onClick: e,
                    size: l
                }, n.createElement("span", {
                    className: r
                }, a), n.createElement(d.Loader, {
                    className: i,
                    color: s
                }))
            }

            function _(t) {
                const {
                    onClickhandler: e,
                    disabled: o,
                    childrenWrapperClassNames: r,
                    laoderClassNames: i,
                    loaderColor: s
                } = p(t), {
                    children: l,
                    ...c
                } = t;
                return n.createElement(a.RoundButton, { ...g(c),
                    disabled: o,
                    onClick: e
                }, n.createElement("span", {
                    className: r
                }, l), n.createElement(d.Loader, {
                    className: i,
                    color: s
                }))
            }
        },
        160742: (t, e, o) => {
            "use strict";
            o.d(e, {
                CircleLogoAny: () => s
            });
            var r = o(559496),
                n = o(46926),
                i = o(495217);

            function s(t) {
                const {
                    logoUrls: e
                } = t;
                return 1 === e.length ? r.createElement(i.CircleLogo, { ...t,
                    logoUrl: e[0]
                }) : 2 === e.length ? r.createElement(n.CircleLogoPair, { ...t,
                    primaryLogoUrl: e[0],
                    secondaryLogoUrl: e[1]
                }) : r.createElement(i.CircleLogo, { ...t,
                    logoUrl: void 0
                })
            }
        },
        692598: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, {
                getLogoUrlsHook: () => a,
                removeUsdAndStableCoinFromCryptoPairLogos: () => l,
                resolveLogoUrls: () => s
            });
            var r = o(849204);
            const n = JSON.parse('["XTVCUSDT","XTVCDAI","XTVCBUSD","XTVCTUSD","XTVCUSDC","XTVCDGX","XTVCHUSD"]'),
                i = (0, r.getLogoUrlResolver)();

            function s(t, e = r.LogoSize.Medium) {
                const o = t.logoid,
                    n = t["base-currency-logoid"],
                    s = t["currency-logoid"],
                    a = o && i.getSymbolLogoUrl(o, e);
                if (a) return [a];
                const l = n && i.getSymbolLogoUrl(n, e),
                    c = s && i.getSymbolLogoUrl(s, e);
                return l && c ? [l, c] : l ? [l] : c ? [c] : []
            }

            function a(t, e) {
                let o = !1;
                return (r, n, i) => {
                    const a = r["currency-logoid"] && r["base-currency-logoid"];
                    if (!o && (r.logoid || a || i)) {
                        o = !0;
                        const n = l(s({
                            logoid: r.logoid,
                            "base-currency-logoid": r["base-currency-logoid"],
                            "currency-logoid": r["currency-logoid"]
                        }, e));
                        t(n)
                    }
                }
            }

            function l(t) {
                return 2 !== t.length ? t : function(t) {
                    return t.some((t => c(t)))
                }(t) && ! function(t) {
                    return t.some((t => t.includes("country") && !c(t)))
                }(t) ? t.filter((t => !c(t))) : function(t) {
                    return t.some((t => h(t)))
                }(t) && function(t) {
                    return t.some((t => d(t)))
                }(t) ? t.filter((t => d(t))) : t
            }

            function c(t) {
                return t.includes("country/US")
            }

            function d(t) {
                return t.includes("crypto") && !h(t)
            }

            function h(t) {
                return n.some((e => t.includes(e)))
            }
        },
        46926: (t, e, o) => {
            "use strict";
            o.d(e, {
                CircleLogoPair: () => i
            });
            var r = o(559496),
                n = o(439378);
            o(480826);

            function i(t) {
                const {
                    primaryLogoUrl: e,
                    secondaryLogoUrl: o,
                    size: i,
                    className: a
                } = t;
                return r.createElement("span", {
                    className: (0, n.getBlockStyleClasses)(i, a),
                    title: t.title
                }, r.createElement(s, {
                    logoUrl: o,
                    size: i
                }), r.createElement(s, {
                    logoUrl: e,
                    size: i
                }))
            }

            function s(t) {
                const {
                    logoUrl: e,
                    size: o
                } = t, i = (0, n.getLogoStyleClasses)(o);
                return void 0 === e ? r.createElement("span", {
                    className: i
                }) : r.createElement("img", {
                    className: i,
                    src: e,
                    alt: ""
                })
            }
        },
        439378: (t, e, o) => {
            "use strict";
            o.d(e, {
                getBlockStyleClasses: () => n,
                getLogoStyleClasses: () => i
            });
            var r = o(497754);

            function n(t, e) {
                return r("tv-circle-logo-pair", `tv-circle-logo-pair--${t}`, e)
            }

            function i(t, e) {
                return r("tv-circle-logo-pair__logo", `tv-circle-logo-pair__logo--${t}`, !e && "tv-circle-logo-pair__logo-empty")
            }
        },
        495217: (t, e, o) => {
            "use strict";
            o.d(e, {
                CircleLogo: () => i
            });
            var r = o(559496),
                n = o(783036);
            o(500045);

            function i(t) {
                var e, o;
                const i = (0, n.getStyleClasses)(t.size, t.className),
                    s = null !== (o = null !== (e = t.alt) && void 0 !== e ? e : t.title) && void 0 !== o ? o : "";
                return (0, n.isCircleLogoWithUrlProps)(t) ? r.createElement("img", {
                    className: i,
                    src: t.logoUrl,
                    alt: s,
                    title: t.title,
                    loading: t.loading
                }) : r.createElement("span", {
                    className: i,
                    title: t.title
                }, t.placeholderLetter)
            }
        },
        783036: (t, e, o) => {
            "use strict";
            o.d(e, {
                getStyleClasses: () => n,
                isCircleLogoWithUrlProps: () => i
            });
            var r = o(497754);

            function n(t, e) {
                return r("tv-circle-logo", `tv-circle-logo--${t}`, e)
            }

            function i(t) {
                return "logoUrl" in t && void 0 !== t.logoUrl && 0 !== t.logoUrl.length
            }
        },
        829725: (t, e, o) => {
            "use strict";
            o.d(e, {
                OverlapManager: () => i,
                getRootOverlapManager: () => a
            });
            var r = o(588537);
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
            class i {
                constructor(t = document) {
                    this._storage = new n, this._windows = new Map, this._index = 0, this._document = t, this._container = t.createDocumentFragment()
                }
                setContainer(t) {
                    const e = this._container,
                        o = null === t ? this._document.createDocumentFragment() : t;
                    ! function(t, e) {
                        Array.from(t.childNodes).forEach((t => {
                            t.nodeType === Node.ELEMENT_NODE && e.appendChild(t)
                        }))
                    }(e, o), this._container = o
                }
                registerWindow(t) {
                    this._storage.has(t) || this._storage.add(t)
                }
                ensureWindow(t, e = {
                    position: "fixed",
                    direction: "normal"
                }) {
                    const o = this._windows.get(t);
                    if (void 0 !== o) return o;
                    this.registerWindow(t);
                    const r = this._document.createElement("div");
                    if (r.style.position = e.position, r.style.zIndex = this._index.toString(), r.dataset.id = t, void 0 !== e.index) {
                        const t = this._container.childNodes.length;
                        if (e.index >= t) this._container.appendChild(r);
                        else if (e.index <= 0) this._container.insertBefore(r, this._container.firstChild);
                        else {
                            const t = this._container.childNodes[e.index];
                            this._container.insertBefore(r, t)
                        }
                    } else "reverse" === e.direction ? this._container.insertBefore(r, this._container.firstChild) : this._container.appendChild(r);
                    return this._windows.set(t, r), ++this._index, r
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
            const s = new WeakMap;

            function a(t = document) {
                const e = t.getElementById("overlap-manager-root");
                if (null !== e) return (0, r.ensureDefined)(s.get(e)); {
                    const e = new i(t),
                        o = function(t) {
                            const e = t.createElement("div");
                            return e.style.position = "absolute", e.style.zIndex = 150..toString(), e.style.top = "0px", e.style.left = "0px", e.id = "overlap-manager-root", e
                        }(t);
                    return s.set(o, e), e.setContainer(o), t.body.appendChild(o), e
                }
            }
        },
        320335: (t, e, o) => {
            "use strict";
            o.d(e, {
                getPixelsFromEvent: () => n
            });
            const r = [() => navigator.userAgent.includes("Win") && navigator.userAgent.includes("Chrome") ? 1 / window.devicePixelRatio : 1, () => 16, (t = (() => 0)) => {
                var e;
                return .8 * (null !== (e = t()) && void 0 !== e ? e : 0)
            }];

            function n(t, e = (() => ({}))) {
                return {
                    x: t.deltaX * r[t.deltaMode]((() => e().width)),
                    y: t.deltaY * r[t.deltaMode]((() => e().height))
                }
            }
        },
        633881: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.25 9a5.75 5.75 0 0 1 9.79-4.1.75.75 0 1 0 1.05-1.07 7.25 7.25 0 0 0-12.18 6.7.75.75 0 1 0 1.47-.32c-.09-.4-.13-.8-.13-1.21zm12.78-1.78a.75.75 0 0 0-1.45.36A5.77 5.77 0 0 1 4.87 13a.75.75 0 0 0-1.08 1.05 7.25 7.25 0 0 0 12.24-6.82zm-7.68.07a.75.75 0 0 0-1.06 0L5.22 9.36a.75.75 0 1 0 1.06 1.06l1.54-1.54 1.54 1.54a.75.75 0 0 0 1.06 0l2.06-2.07a.75.75 0 0 0-1.06-1.06L9.9 8.83 8.35 7.29z"/></svg>'
        },
        224286: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M3.75 14a10.25 10.25 0 0 1 18.24-6.42.75.75 0 0 0 1.17-.95A11.75 11.75 0 0 0 2.69 17.2a.75.75 0 1 0 1.44-.4c-.25-.89-.38-1.82-.38-2.79zm21.42-3.66a.75.75 0 1 0-1.43.47A10.24 10.24 0 0 1 14 24.25c-3.5 0-6.6-1.76-8.45-4.45a.75.75 0 0 0-1.24.85A11.74 11.74 0 0 0 25.75 14c0-1.28-.2-2.5-.58-3.66zm-12.6 1.13a.75.75 0 0 0-1.06 0l-3.93 3.92a.75.75 0 0 0 1.06 1.06l3.4-3.39 3.4 3.4c.28.29.76.29 1.05 0l3.93-3.93a.75.75 0 1 0-1.06-1.06l-3.4 3.4-3.4-3.4z"/></svg>'
        },
        366518: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="m23.91 4.1.04.67c.07 1.08-.05 3.04-.58 5.12a13.12 13.12 0 0 1-3.17 6.06c-3.18 3.18-6.18 4.74-7.37 5.14l-.44.14-5.6-5.6.15-.44c.4-1.2 1.95-4.19 5.13-7.37a13.12 13.12 0 0 1 6.06-3.17c2.09-.53 4.04-.64 5.12-.58l.66.04Zm-5.66 9.2a2.5 2.5 0 1 1-3.53-3.53 2.5 2.5 0 0 1 3.53 3.53Z"/><path fill="currentColor" d="M10.2 7.6H8.04l-5.42 5.42 3.27.76a24.86 24.86 0 0 1 4.3-6.18ZM10.12 21.08l1.06 1.06-1.59 1.6-1.06-1.07 1.6-1.59ZM9.06 20.02 8 18.96l-3 3 1.06 1.07 3-3.01ZM5.88 16.84l1.06 1.06-1.6 1.59-1.05-1.06 1.59-1.6ZM20.42 17.82a24.85 24.85 0 0 1-6.18 4.31L15 25.4l5.42-5.42v-2.16Z"/></svg>'
        },
        759530: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16"><g fill="none" stroke="currentcolor"><path d="M9.52 10.226a5.5 5.5 0 1 0-6.983.048"/><path stroke-linecap="square" d="M4.5 14.4v.601c0 .276.216.499.495.499h2.01a.504.504 0 0 0 .495-.499V14.4m-5-4.9v3.51c0 .27.233.49.503.49h5.994a.494.494 0 0 0 .503-.49V9.5h-7z"/><path d="M3 11.5h6"/></g></svg>'
        },
        608636: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>'
        },
        738540: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" width="14" height="15"><path fill="none" stroke="currentcolor" stroke-linejoin="round" d="m.5 14.5a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5zm6.5-7a1 1 0 0 1 0-7 1 1 0 0 1 0 7z"/></svg>'
        },
        989148: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 15" width="13" height="15"><g fill="none"><path d="M-5-5h24v24H-5z"/><path stroke="currentcolor" stroke-linejoin="round" d="M.5 7.5h4v7h-4zm4-7h4v14h-4zm4 5h4v9h-4z"/></g></svg>'
        },
        987763: (t, e, o) => {
            "use strict";
            t.exports = o.p + "logo-tradingview.f3af8e3579cc12751704.svg"
        }
    }
]);