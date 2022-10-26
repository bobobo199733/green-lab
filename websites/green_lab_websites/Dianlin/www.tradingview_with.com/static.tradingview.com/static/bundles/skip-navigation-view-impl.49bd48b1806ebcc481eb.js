(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [4823], {
        873602: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => l
            });
            var o = n(28027);
            const r = function(e) {
                return e != e
            };
            const i = function(e, t, n) {
                for (var o = n - 1, r = e.length; ++o < r;)
                    if (e[o] === t) return o;
                return -1
            };
            const s = function(e, t, n) {
                return t == t ? i(e, t, n) : (0, o.default)(e, r, n)
            };
            const l = function(e, t) {
                return !!(null == e ? 0 : e.length) && s(e, t, 0) > -1
            }
        },
        141722: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => o
            });
            const o = function(e, t, n) {
                for (var o = -1, r = null == e ? 0 : e.length; ++o < r;)
                    if (n(t, e[o])) return !0;
                return !1
            }
        },
        28027: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => o
            });
            const o = function(e, t, n, o) {
                for (var r = e.length, i = n + (o ? 1 : -1); o ? i-- : ++i < r;)
                    if (t(e[i], i, e)) return i;
                return -1
            }
        },
        279044: e => {
            e.exports = {
                item: "item-TZ2SJ2fG",
                withIcon: "withIcon-TZ2SJ2fG",
                labelRow: "labelRow-TZ2SJ2fG",
                badge: "badge-TZ2SJ2fG",
                row: "row-TZ2SJ2fG",
                alignStart: "alignStart-TZ2SJ2fG",
                description: "description-TZ2SJ2fG",
                iconDescription: "iconDescription-TZ2SJ2fG",
                itemInfo: "itemInfo-TZ2SJ2fG",
                iconStyle: "iconStyle-TZ2SJ2fG",
                label: "label-TZ2SJ2fG"
            }
        },
        242450: e => {
            e.exports = {
                title: "title-ujIBirbo"
            }
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
        574286: e => {
            e.exports = {
                "tablet-small-breakpoint": "screen and (max-width: 428px)",
                item: "item-RhC5uhZw",
                hovered: "hovered-RhC5uhZw",
                isDisabled: "isDisabled-RhC5uhZw",
                isActive: "isActive-RhC5uhZw",
                shortcut: "shortcut-RhC5uhZw",
                toolbox: "toolbox-RhC5uhZw",
                withIcon: "withIcon-RhC5uhZw",
                icon: "icon-RhC5uhZw",
                labelRow: "labelRow-RhC5uhZw",
                label: "label-RhC5uhZw",
                showOnHover: "showOnHover-RhC5uhZw"
            }
        },
        220132: e => {
            e.exports = {
                separator: "separator-w5iW5vBm",
                small: "small-w5iW5vBm",
                normal: "normal-w5iW5vBm",
                large: "large-w5iW5vBm"
            }
        },
        531499: e => {
            e.exports = {
                hidden: "hidden-svMCWG6o",
                "tool-title": "tool-title-svMCWG6o"
            }
        },
        405964: (e, t, n) => {
            "use strict";
            n.d(t, {
                useFocus: () => r
            });
            var o = n(559496);

            function r(e, t) {
                const [n, r] = (0, o.useState)(!1);
                (0, o.useEffect)((() => {
                    t && n && r(!1)
                }), [t, n]);
                const i = {
                    onFocus: (0, o.useCallback)((function(t) {
                        void 0 !== e && e.current !== t.target || r(!0)
                    }), [e]),
                    onBlur: (0, o.useCallback)((function(t) {
                        void 0 !== e && e.current !== t.target || r(!1)
                    }), [e])
                };
                return [n, i]
            }
        },
        8626: (e, t, n) => {
            "use strict";

            function o(e) {
                return i(e, s)
            }

            function r(e) {
                return i(e, l)
            }

            function i(e, t) {
                const n = Object.entries(e).filter(t),
                    o = {};
                for (const [e, t] of n) o[e] = t;
                return o
            }

            function s(e) {
                const [t, n] = e;
                return 0 === t.indexOf("data-") && "string" == typeof n
            }

            function l(e) {
                return 0 === e[0].indexOf("aria-")
            }
            n.d(t, {
                filterDataProps: () => o,
                filterAriaProps: () => r,
                filterProps: () => i,
                isDataAttribute: () => s,
                isAriaAttribute: () => l
            })
        },
        481058: (e, t, n) => {
            "use strict";
            n.d(t, {
                createDomId: () => a,
                joinDomIds: () => c
            });
            const o = /\s/g;

            function r(e) {
                return "string" == typeof e
            }

            function i(e) {
                switch (typeof e) {
                    case "string":
                        return e;
                    case "number":
                    case "bigint":
                        return e.toString(10);
                    case "boolean":
                    case "symbol":
                        return e.toString();
                    default:
                        return null
                }
            }

            function s(e) {
                return e.trim().length > 0
            }

            function l(e) {
                return e.replace(o, "-")
            }

            function a(...e) {
                const t = e.map(i).filter(r).filter(s).map(l);
                return (t.length > 0 && t[0].startsWith("id_") ? t : ["id", ...t]).join("_")
            }

            function c(...e) {
                return e.map(i).filter(r).filter(s).join(" ")
            }
        },
        340149: (e, t, n) => {
            "use strict";
            n.d(t, {
                HEADER_MENU_ITEM_THEME: () => d,
                HeaderMenuItem: () => h
            });
            var o = n(559496),
                r = n(634993),
                i = n(995683),
                s = n(581715),
                l = n(279044),
                a = n(497754);
            const {
                badge: c,
                ...u
            } = l, d = (0, i.mergeThemes)(r.DEFAULT_POPUP_MENU_ITEM_THEME, u);

            function h(e) {
                const {
                    isNew: t,
                    label: n,
                    theme: i,
                    description: s,
                    icon: l,
                    ...a
                } = e;
                return o.createElement(r.PopupMenuItem, { ...a,
                    theme: i || d,
                    label: o.createElement(f, {
                        isNew: t,
                        description: s,
                        label: n,
                        icon: l
                    })
                })
            }

            function f(e) {
                const {
                    isNew: t,
                    description: n,
                    label: r,
                    icon: i
                } = e;
                return o.createElement(o.Fragment, null, t ? o.createElement(o.Fragment, null, r, o.createElement(s.Pill, {
                    label: "New",
                    color: "orange",
                    className: c
                })) : o.createElement("span", {
                    className: a(l.row, n && l.alignStart)
                }, void 0 !== i && o.createElement("span", {
                    className: a(l.iconStyle, l.iconDescription),
                    dangerouslySetInnerHTML: {
                        __html: i
                    }
                }), o.createElement("span", {
                    className: l.itemInfo
                }, o.createElement("span", null, r), o.createElement("span", {
                    className: l.description
                }, n))))
            }
        },
        409384: (e, t, n) => {
            "use strict";
            n.d(t, {
                ToolTitle: () => l
            });
            var o = n(559496),
                r = n(497754),
                i = n.n(r),
                s = n(242450);

            function l(e) {
                const {
                    className: t,
                    text: n,
                    id: r,
                    role: l,
                    ariaHidden: a
                } = e;
                return o.createElement("div", {
                    className: i()(s.title, t),
                    id: r,
                    role: l,
                    "aria-hidden": a
                }, n)
            }
        },
        581715: (e, t, n) => {
            "use strict";
            n.d(t, {
                Pill: () => l
            });
            var o = n(559496),
                r = n(497754),
                i = n.n(r),
                s = n(686361);

            function l(e) {
                const {
                    className: t,
                    label: n,
                    color: r,
                    style: l,
                    tooltip: a
                } = e;
                return o.createElement("div", {
                    className: i()(s.pill, t, r && s[r], a && "apply-common-tooltip"),
                    style: l,
                    title: a
                }, n)
            }
        },
        377318: (e, t, n) => {
            "use strict";
            n.d(t, {
                MenuContext: () => o
            });
            const o = n(559496).createContext(null)
        },
        175071: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_MENU_THEME: () => v,
                Menu: () => g
            });
            var o = n(559496),
                r = n(497754),
                i = n.n(r),
                s = n(588537),
                l = n(466915),
                a = n(860502),
                c = n(670797),
                u = n(224743),
                d = n(829725),
                h = n(398835),
                f = n(787684),
                p = n(377318),
                m = n(572083);
            const v = m;
            class g extends o.PureComponent {
                constructor(e) {
                    super(e), this._containerRef = null, this._scrollWrapRef = null, this._raf = null, this._scrollRaf = null, this._scrollTimeout = void 0, this._manager = new d.OverlapManager, this._hotkeys = null, this._scroll = 0, this._handleContainerRef = e => {
                        this._containerRef = e, this.props.reference && ("function" == typeof this.props.reference && this.props.reference(e), "object" == typeof this.props.reference && (this.props.reference.current = e))
                    }, this._handleScrollWrapRef = e => {
                        this._scrollWrapRef = e, "function" == typeof this.props.scrollWrapReference && this.props.scrollWrapReference(e), "object" == typeof this.props.scrollWrapReference && (this.props.scrollWrapReference.current = e)
                    }, this._handleMeasure = ({
                        callback: e,
                        forceRecalcPosition: t
                    } = {}) => {
                        var n, o, r, i, a, c, u, d, h, f, p, m;
                        if (this.state.isMeasureValid && !t) return;
                        const {
                            position: v
                        } = this.props, g = (0,
                            s.ensureNotNull)(this._containerRef);
                        let b = g.getBoundingClientRect();
                        const _ = document.documentElement.clientHeight,
                            C = document.documentElement.clientWidth,
                            w = null !== (n = this.props.closeOnScrollOutsideOffset) && void 0 !== n ? n : 0;
                        let E = _ - 0 - w;
                        const y = b.height > E;
                        if (y) {
                            (0, s.ensureNotNull)(this._scrollWrapRef).style.overflowY = "scroll", b = g.getBoundingClientRect()
                        }
                        const {
                            width: x,
                            height: S
                        } = b, M = "function" == typeof v ? v(x, S, _) : v, N = null !== (r = null === (o = null == M ? void 0 : M.indentFromWindow) || void 0 === o ? void 0 : o.left) && void 0 !== r ? r : 0, k = C - (null !== (i = M.overrideWidth) && void 0 !== i ? i : x) - (null !== (c = null === (a = null == M ? void 0 : M.indentFromWindow) || void 0 === a ? void 0 : a.right) && void 0 !== c ? c : 0), W = (0, l.clamp)(M.x, N, Math.max(N, k)), R = (null !== (d = null === (u = null == M ? void 0 : M.indentFromWindow) || void 0 === u ? void 0 : u.top) && void 0 !== d ? d : 0) + w, T = _ - (null !== (h = M.overrideHeight) && void 0 !== h ? h : S) - (null !== (p = null === (f = null == M ? void 0 : M.indentFromWindow) || void 0 === f ? void 0 : f.bottom) && void 0 !== p ? p : 0);
                        let O = (0, l.clamp)(M.y, R, Math.max(R, T));
                        if (M.forbidCorrectYCoord && O < M.y && (E -= M.y - O, O = M.y), t && void 0 !== this.props.closeOnScrollOutsideOffset && M.y <= this.props.closeOnScrollOutsideOffset) return void this._handleGlobalClose(!0);
                        const I = null !== (m = M.overrideHeight) && void 0 !== m ? m : y ? E : void 0;
                        this.setState({
                            appearingMenuHeight: t ? this.state.appearingMenuHeight : I,
                            appearingMenuWidth: t ? this.state.appearingMenuWidth : M.overrideWidth,
                            appearingPosition: {
                                x: W,
                                y: O
                            },
                            isMeasureValid: !0
                        }, (() => {
                            this._restoreScrollPosition(), e && e()
                        }))
                    }, this._restoreScrollPosition = () => {
                        const e = document.activeElement,
                            t = (0, s.ensureNotNull)(this._containerRef);
                        if (null !== e && t.contains(e)) try {
                            e.scrollIntoView()
                        } catch (e) {} else(0, s.ensureNotNull)(this._scrollWrapRef).scrollTop = this._scroll
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
                        this._scroll = (0, s.ensureNotNull)(this._scrollWrapRef).scrollTop
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
                        customCloseDelegate: e = u.globalCloseDelegate
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
                        customCloseDelegate: e = u.globalCloseDelegate
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
                        "aria-labelledby": r,
                        "aria-activedescendant": s,
                        "aria-hidden": l,
                        children: u,
                        minWidth: d,
                        theme: h = m,
                        className: v,
                        maxHeight: g,
                        onMouseOver: _,
                        onMouseOut: C,
                        onKeyDown: w,
                        onFocus: E,
                        onBlur: y
                    } = this.props, {
                        appearingMenuHeight: x,
                        appearingMenuWidth: S,
                        appearingPosition: M,
                        isMeasureValid: N
                    } = this.state;
                    return o.createElement(p.MenuContext.Provider, {
                        value: this
                    }, o.createElement(f.SubmenuHandler, null, o.createElement(c.SlotContext.Provider, {
                        value: this._manager
                    }, o.createElement("div", {
                        id: e,
                        role: t,
                        "aria-label": n,
                        "aria-labelledby": r,
                        "aria-activedescendant": s,
                        "aria-hidden": l,
                        className: i()(v, h.menuWrap, !N && h.isMeasuring),
                        style: {
                            height: x,
                            left: M && M.x,
                            minWidth: d,
                            position: "fixed",
                            top: M && M.y,
                            width: S
                        },
                        "data-name": this.props["data-name"],
                        ref: this._handleContainerRef,
                        onScrollCapture: this.props.onScroll,
                        onContextMenu: a.preventDefaultForContextMenu,
                        tabIndex: this.props.tabIndex,
                        onMouseOver: _,
                        onMouseOut: C,
                        onKeyDown: w,
                        onFocus: E,
                        onBlur: y
                    }, o.createElement("div", {
                        className: i()(h.scrollWrap, !this.props.noMomentumBasedScroll && h.momentumBased),
                        style: {
                            overflowY: void 0 !== x ? "scroll" : "auto",
                            maxHeight: g
                        },
                        onScrollCapture: this._handleScroll,
                        ref: this._handleScrollWrapRef
                    }, o.createElement(b, {
                        className: h.menuBox
                    }, u)))), o.createElement(c.Slot, {
                        reference: this._handleSlot
                    })))
                }
                update(e) {
                    e ? this._resizeForced() : this._resize()
                }
            }

            function b(e) {
                const t = (0, s.ensureNotNull)((0, o.useContext)(f.SubmenuContext)),
                    n = o.useRef(null);
                return o.createElement("div", {
                    ref: n,
                    className: e.className,
                    onMouseOver: function(e) {
                        if (!(null !== t.current && e.target instanceof Node && (o = e.target, null === (r = n.current) || void 0 === r ? void 0 : r.contains(o)))) return;
                        var o, r;
                        t.isSubmenuNode(e.target) || t.setCurrent(null)
                    },
                    "data-name": "menu-inner"
                }, e.children)
            }
            g.contextType = f.SubmenuContext
        },
        829725: (e, t, n) => {
            "use strict";
            n.d(t, {
                OverlapManager: () => i,
                getRootOverlapManager: () => l
            });
            var o = n(588537);
            class r {
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
                    this._storage = new r, this._windows = new Map, this._index = 0, this._document = e, this._container = e.createDocumentFragment()
                }
                setContainer(e) {
                    const t = this._container,
                        n = null === e ? this._document.createDocumentFragment() : e;
                    ! function(e, t) {
                        Array.from(e.childNodes).forEach((e => {
                            e.nodeType === Node.ELEMENT_NODE && t.appendChild(e)
                        }))
                    }(t, n), this._container = n
                }
                registerWindow(e) {
                    this._storage.has(e) || this._storage.add(e)
                }
                ensureWindow(e, t = {
                    position: "fixed",
                    direction: "normal"
                }) {
                    const n = this._windows.get(e);
                    if (void 0 !== n) return n;
                    this.registerWindow(e);
                    const o = this._document.createElement("div");
                    if (o.style.position = t.position, o.style.zIndex = this._index.toString(), o.dataset.id = e, void 0 !== t.index) {
                        const e = this._container.childNodes.length;
                        if (t.index >= e) this._container.appendChild(o);
                        else if (t.index <= 0) this._container.insertBefore(o, this._container.firstChild);
                        else {
                            const e = this._container.childNodes[t.index];
                            this._container.insertBefore(o, e)
                        }
                    } else "reverse" === t.direction ? this._container.insertBefore(o, this._container.firstChild) : this._container.appendChild(o);
                    return this._windows.set(e, o), ++this._index, o
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

            function l(e = document) {
                const t = e.getElementById("overlap-manager-root");
                if (null !== t) return (0, o.ensureDefined)(s.get(t)); {
                    const t = new i(e),
                        n = function(e) {
                            const t = e.createElement("div");
                            return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t
                        }(e);
                    return s.set(n, t), t.setContainer(n), e.body.appendChild(n), t
                }
            }
        },
        634993: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_POPUP_MENU_ITEM_THEME: () => c,
                PopupMenuItem: () => h
            });
            var o = n(559496),
                r = n(497754),
                i = n(224743),
                s = n(345848),
                l = n(8626),
                a = n(574286);
            const c = a;

            function u(e) {
                const {
                    reference: t,
                    tagName: n,
                    ...r
                } = e, i = { ...r,
                    ref: t
                };
                let s = n;
                return s || (s = e.href ? "a" : "div"), o.createElement(s, i)
            }

            function d(e) {
                e.stopPropagation()
            }

            function h(e) {
                const {
                    id: t,
                    role: n,
                    "aria-label": c,
                    "aria-selected": h,
                    "aria-checked": f,
                    className: p,
                    title: m,
                    labelRowClassName: v,
                    labelClassName: g,
                    shortcut: b,
                    forceShowShortcuts: _,
                    icon: C,
                    isActive: w,
                    isDisabled: E,
                    isHovered: y,
                    appearAsDisabled: x,
                    label: S,
                    link: M,
                    showToolboxOnHover: N,
                    target: k,
                    rel: W,
                    toolbox: R,
                    reference: T,
                    onMouseOut: O,
                    onMouseOver: I,
                    onKeyDown: P,
                    suppressToolboxClick: D = !0,
                    theme: H = a,
                    tabIndex: F,
                    tagName: A
                } = e, Z = (0, l.filterDataProps)(e), B = (0, o.useRef)(null);
                return o.createElement(u, { ...Z,
                    id: t,
                    role: n,
                    "aria-label": c,
                    "aria-selected": h,
                    "aria-checked": f,
                    className: r(p, H.item, C && H.withIcon, {
                        [H.isActive]: w,
                        [H.isDisabled]: E || x,
                        [H.hovered]: y
                    }),
                    title: m,
                    href: M,
                    target: k,
                    rel: W,
                    reference: function(e) {
                        B.current = e, "function" == typeof T && T(e);
                        "object" == typeof T && (T.current = e)
                    },
                    onClick: function(t) {
                        const {
                            dontClosePopup: n,
                            onClick: o,
                            onClickArg: r,
                            trackEventObject: l
                        } = e;
                        if (E) return;
                        l && (0, s.trackEvent)(l.category, l.event, l.label);
                        o && o(r, t);
                        n || (0, i.globalCloseMenu)()
                    },
                    onContextMenu: function(t) {
                        const {
                            trackEventObject: n,
                            trackRightClick: o
                        } = e;
                        n && o && (0,
                            s.trackEvent)(n.category, n.event, `${n.label}_rightClick`)
                    },
                    onMouseUp: function(t) {
                        const {
                            trackEventObject: n,
                            trackMouseWheelClick: o
                        } = e;
                        if (1 === t.button && M && n) {
                            let e = n.label;
                            o && (e += "_mouseWheelClick"), (0, s.trackEvent)(n.category, n.event, e)
                        }
                    },
                    onMouseOver: I,
                    onMouseOut: O,
                    onKeyDown: P,
                    tabIndex: F,
                    tagName: A
                }, void 0 !== C && o.createElement("span", {
                    className: H.icon,
                    dangerouslySetInnerHTML: {
                        __html: C
                    }
                }), o.createElement("span", {
                    className: r(H.labelRow, v)
                }, o.createElement("span", {
                    className: r(H.label, g)
                }, S)), (void 0 !== b || _) && o.createElement("span", {
                    className: H.shortcut
                }, (G = b) && G.split("+").join(" + ")), void 0 !== R && o.createElement("span", {
                    onClick: D ? d : void 0,
                    className: r(H.toolbox, {
                        [H.showOnHover]: N
                    })
                }, R));
                var G
            }
        },
        93916: (e, t, n) => {
            "use strict";
            n.d(t, {
                PopupMenuSeparator: () => l
            });
            var o = n(559496),
                r = n(497754),
                i = n.n(r),
                s = n(220132);

            function l(e) {
                const {
                    size: t = "normal",
                    className: n,
                    ariaHidden: r = !1
                } = e;
                return o.createElement("div", {
                    className: i()(s.separator, "small" === t && s.small, "normal" === t && s.normal, "large" === t && s.large, n),
                    role: "separator",
                    "aria-hidden": r
                })
            }
        },
        482447: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                renderSkipNavigationImpl: () => D
            });
            var o = n(587995),
                r = n(559496),
                i = n(292893),
                s = n(302399),
                l = n(873602),
                a = n(141722),
                c = n(395256),
                u = n(817651),
                d = Math.min;
            const h = function(e, t, n) {
                for (var o = n ? a.default : l.default, r = e[0].length, h = e.length, f = h, p = Array(h), m = 1 / 0, v = []; f--;) {
                    var g = e[f];
                    f && t && (g = (0, i.default)(g, (0, c.default)(t))), m = d(g.length, m), p[f] = !n && (t || r >= 120 && g.length >= 120) ? new s.default(f && g) : void 0
                }
                g = e[0];
                var b = -1,
                    _ = p[0];
                e: for (; ++b < r && v.length < m;) {
                    var C = g[b],
                        w = t ? t(C) : C;
                    if (C = n || 0 !== C ? C : 0, !(_ ? (0, u.default)(_, w) : o(v, w, n))) {
                        for (f = h; --f;) {
                            var E = p[f];
                            if (!(E ? (0, u.default)(E, w) : o(e[f], w, n))) continue e
                        }
                        _ && _.push(w), v.push(C)
                    }
                }
                return v
            };
            var f = n(29245),
                p = n(261702);
            const m = function(e) {
                return (0, p.default)(e) ? e : []
            };
            const v = (0, f.default)((function(e) {
                var t = (0, i.default)(e, m);
                return t.length && t[0] === e[0] ? h(t) : []
            }));
            const g = function(e, t, n, o) {
                var r = -1,
                    d = l.default,
                    h = !0,
                    f = e.length,
                    p = [],
                    m = t.length;
                if (!f) return p;
                n && (t = (0, i.default)(t, (0, c.default)(n))), o ? (d = a.default, h = !1) : t.length >= 200 && (d = u.default, h = !1, t = new s.default(t));
                e: for (; ++r < f;) {
                    var v = e[r],
                        g = null == n ? v : n(v);
                    if (v = o || 0 !== v ? v : 0, h && g == g) {
                        for (var b = m; b--;)
                            if (t[b] === g) continue e;
                        p.push(v)
                    } else d(t, g, o) || p.push(v)
                }
                return p
            };
            var b = n(407193);
            const _ = (0, f.default)((function(e, t) {
                return (0, p.default)(e) ? g(e, (0, b.default)(t, 1, p.default, !0)) : []
            }));
            var C = n(575932),
                w = n(481058),
                E = n(405964),
                y = n(398835),
                x = n(175071),
                S = n(340149),
                M = n(93916),
                N = n(409384),
                k = n(427616);
            const W = {
                [k.SkipNavigationPosition.Social]: {
                    x: 24,
                    y: 89
                },
                [k.SkipNavigationPosition.Platform]: {
                    x: 56,
                    y: 42
                }
            };
            var R = n(531499);

            function T(e) {
                const {
                    model: t
                } = e, n = (o = e.position) ? function(e) {
                    return ["object", "function"].includes(typeof e)
                }(o) ? o : W[o] : W[k.SkipNavigationPosition.Social];
                var o;
                const i = (0, r.useRef)(null),
                    s = (0, r.useRef)(new Map),
                    [l, a] = (0, E.useFocus)(),
                    c = function(e) {
                        const [t, n] = (0, r.useState)(e.getData()), o = (0, r.useCallback)((() => {
                            n(e.getData())
                        }), [e, n]);
                        return (0, r.useEffect)((() => (e.subscribe(o), () => {
                            e.unsubscribe(o)
                        })), [e, o]), t
                    }(t),
                    u = (0, r.useMemo)((() => function(e) {
                        const t = [];
                        for (const n of e) t.push(...n.entries);
                        return t
                    }(c)), [c]),
                    d = (0, r.useCallback)((e => () => {
                        var t;
                        const {
                            onClick: n,
                            anchor: o
                        } = e;
                        n ? n() : "string" == typeof o ? null === (t = document.getElementById(o)) || void 0 === t || t.focus(e.focusOptions) : o && o.focus(e.focusOptions)
                    }), []);
                return (0, r.useEffect)((() => (i.current = (0, y.createGroup)({
                    desc: "Skip navigation"
                }), () => {
                    var e;
                    null === (e = i.current) || void 0 === e || e.destroy()
                })), []), (0, r.useEffect)((() => {
                    if (!i.current) return;
                    const {
                        added: e,
                        removed: t
                    } = function(e, t) {
                        var n, o;
                        const r = {
                                added: new Set,
                                removed: new Set
                            },
                            i = Array.from(e.keys()),
                            s = t.map((e => e.id)),
                            l = _(s, i).filter((e => t.find((t => t.id === e && void 0 !== t.hotkey)))),
                            a = _(i, s),
                            c = v(i, s);
                        for (const e of l) r.added.add(e);
                        for (const e of a) r.removed.add(e);
                        for (const i of c) {
                            const s = null === (n = e.get(i)) || void 0 === n ? void 0 : n.hotkey,
                                l = null === (o = t.find((e => e.id === i))) || void 0 === o ? void 0 : o.hotkey;
                            void 0 === s && void 0 !== l ? r.added.add(i) : void 0 !== s && void 0 === l ? r.removed.add(i) : s !== l && (r.removed.add(i), r.added.add(i))
                        }
                        return r
                    }(s.current, u);
                    for (const e of t) {
                        const t = s.current.get(e);
                        t && i.current.remove(t)
                    }
                    for (const t of e) {
                        const e = u.find((e => e.id === t));
                        if (!e || void 0 === e.hotkey) continue;
                        const n = i.current.add({
                            hotkey: e.hotkey,
                            desc: e.label,
                            handler: d(e)
                        });
                        s.current.set(t, n)
                    }
                })), 0 === u.length ? r.createElement(r.Fragment, null) : r.createElement(x.Menu, { ...a,
                    onClose: () => {},
                    position: n,
                    "aria-label": (0, C.t)("Skip navigation"),
                    role: "group",
                    className: !l && R.hidden,
                    "data-name": "skip-navigation"
                }, c.map(((e, t) => r.createElement(O, {
                    key: e.id,
                    id: e.id,
                    entries: e.entries,
                    label: e.label,
                    withSeparator: t > 0,
                    createEntryClickHandler: d
                }))))
            }

            function O(e) {
                const {
                    id: t,
                    entries: n,
                    label: o,
                    withSeparator: i,
                    createEntryClickHandler: s
                } = e, l = o && o.length > 0, a = l ? (0, w.createDomId)(t, "group-title") : void 0;
                return r.createElement(r.Fragment, null, !l && i && r.createElement(M.PopupMenuSeparator, {
                    ariaHidden: !0
                }), l && r.createElement(N.ToolTitle, {
                    id: a,
                    role: "separator",
                    className: R["tool-title"],
                    text: o,
                    ariaHidden: !0
                }), r.createElement("div", {
                    role: l ? "group" : void 0,
                    "aria-labelledby": a
                }, n.map((e => r.createElement(I, { ...e,
                    key: "string" == typeof e.anchor ? e.anchor : e.label,
                    onClick: s(e)
                })))))
            }

            function I(e) {
                const {
                    label: t,
                    ariaLabel: n,
                    hotkeyLabel: o,
                    onClick: i
                } = e;
                return r.createElement(S.HeaderMenuItem, {
                    label: t,
                    "aria-label": n,
                    onClick: i,
                    tagName: "button",
                    shortcut: o
                })
            }
            let P = null;

            function D(e, t, n) {
                null !== P && o.unmountComponentAtNode(P);
                let i = null;
                "object" == typeof n ? i = n : "string" == typeof n ? i = document.getElementById(n) : (i = document.createElement("div"), document.body.insertAdjacentElement("afterbegin", i)), i && (P = i, o.render(r.createElement(T, {
                    model: e,
                    position: t
                }), i))
            }
        },
        670797: (e, t, n) => {
            "use strict";
            n.d(t, {
                Slot: () => r,
                SlotContext: () => i
            });
            var o = n(559496);
            class r extends o.Component {
                shouldComponentUpdate() {
                    return !1
                }
                render() {
                    return o.createElement("div", {
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
            const i = o.createContext(null)
        },
        787684: (e, t, n) => {
            "use strict";
            n.d(t, {
                SubmenuContext: () => r,
                SubmenuHandler: () => i
            });
            var o = n(559496);
            const r = o.createContext(null);

            function i(e) {
                const [t, n] = (0, o.useState)(null), i = (0, o.useRef)(null), s = (0, o.useRef)(new Map);
                return (0, o.useEffect)((() => () => {
                    null !== i.current && clearTimeout(i.current)
                }), []), o.createElement(r.Provider, {
                    value: {
                        current: t,
                        setCurrent: function(e) {
                            null !== i.current && (clearTimeout(i.current), i.current = null);
                            null === t ? n(e) : i.current = setTimeout((() => {
                                i.current = null, n(e)
                            }), 100)
                        },
                        registerSubmenu: function(e, t) {
                            return s.current.set(e, t), () => {
                                s.current.delete(e)
                            }
                        },
                        isSubmenuNode: function(e) {
                            return Array.from(s.current.values()).some((t => t(e)))
                        }
                    }
                }, e.children)
            }
        },
        995683: (e, t, n) => {
            "use strict";

            function o(e, t, n = {}) {
                const o = Object.assign({}, t);
                for (const r of Object.keys(t)) {
                    const i = n[r] || r;
                    i in e && (o[r] = [e[i], t[r]].join(" "))
                }
                return o
            }

            function r(e, t, n = {}) {
                return Object.assign({}, e, o(e, t, n))
            }
            n.d(t, {
                weakComposeClasses: () => o,
                mergeThemes: () => r
            })
        }
    }
]);