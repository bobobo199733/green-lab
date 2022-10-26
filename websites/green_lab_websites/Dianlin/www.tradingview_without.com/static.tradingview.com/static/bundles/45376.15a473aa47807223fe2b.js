"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [45376], {
        831928: (t, e, n) => {
            n.d(e, {
                useKeepActiveItemIntoView: () => i
            });
            var o = n(559496),
                l = n(588537),
                r = n(266329);

            function i(t = {}) {
                const {
                    activeItem: e,
                    getKey: n,
                    ...i
                } = t, s = (0, o.useRef)(null), c = (0, o.useRef)(new Map), a = (0, r.useScrollIntoViewHelper)(s.current), u = (0, o.useCallback)((() => {
                    null !== a.current && null !== s.current && a.current.getContainer() !== s.current && a.current.setContainer(s.current)
                }), [a, s]), d = (0, o.useCallback)((t => {
                    s.current = t
                }), [s]), f = (0, o.useCallback)(((t, e) => {
                    const o = n ? n(t) : t;
                    e ? c.current.set(o, e) : c.current.delete(o)
                }), [c, n]), h = (0, o.useCallback)(((t, e) => {
                    if (!t) return;
                    const o = n ? n(t) : t,
                        r = c.current.get(o);
                    r && (u(), (0, l.ensureNotNull)(a.current).scrollTo(r, e))
                }), [c, a, n]);
                return (0, o.useEffect)((() => h(e, i)), [h, e]), [d, f, h]
            }
        },
        266329: (t, e, n) => {
            n.d(e, {
                useScrollIntoViewHelper: () => d
            });
            var o = n(559496),
                l = n(588537),
                r = n(315949);
            const i = {
                    duration: 200,
                    additionalScroll: 0
                },
                s = {
                    vertical: {
                        scrollSize: "scrollHeight",
                        clientSize: "clientHeight",
                        start: "top",
                        end: "bottom",
                        size: "height"
                    },
                    horizontal: {
                        scrollSize: "scrollWidth",
                        clientSize: "clientWidth",
                        start: "left",
                        end: "right",
                        size: "width"
                    }
                };

            function c(t, e) {
                const n = s[t];
                return e[n.scrollSize] > e[n.clientSize]
            }

            function a(t, e, n, o, l, i) {
                const c = function(t, e, n, o = 0) {
                    const l = s[t];
                    return {
                        start: -1 * o,
                        middle: -1 * (Math.floor(n[l.size] / 2) - Math.floor(e[l.size] / 2)),
                        end: -1 * (n[l.size] - e[l.size]) + o
                    }
                }(t, o, l, i.additionalScroll);
                let a = 0;
                if (function(t, e, n) {
                        const o = s[t];
                        return e[o.start] < n[o.start] - n[o.size] / 2 || e[o.end] > n[o.end] + n[o.size] / 2
                    }(t, o, l)) a = c.middle;
                else {
                    const e = function(t, e, n, o = 0) {
                            const l = s[t],
                                r = e[l.start] + Math.floor(e[l.size] / 2),
                                i = n[l.start] + Math.floor(n[l.size] / 2);
                            return {
                                start: e[l.start] - n[l.start] - o,
                                middle: r - i,
                                end: e[l.end] - n[l.end] + o
                            }
                        }(t, o, l, i.additionalScroll),
                        n = function(t) {
                            const {
                                start: e,
                                middle: n,
                                end: o
                            } = t, l = new Map([
                                [Math.abs(e), {
                                    key: "start",
                                    value: Math.sign(e)
                                }],
                                [Math.abs(n), {
                                    key: "middle",
                                    value: Math.sign(n)
                                }],
                                [Math.abs(o), {
                                    key: "end",
                                    value: Math.sign(o)
                                }]
                            ]), r = Math.min(...l.keys());
                            return l.get(r)
                        }(e);
                    a = void 0 !== n ? c[n.key] : 0
                }
                return (0, r.scrollTo)({ ...i,
                    target: e,
                    targetRect: o,
                    wrap: n,
                    wrapRect: l,
                    additionalScroll: a,
                    direction: t
                })
            }
            class u {
                constructor(t = null) {
                    this._container = null, this._lastScrolledElement = null, this._stopVerticalScroll = null, this._stopHorizontalScroll = null, this._container = t
                }
                scrollTo(t, e = i) {
                    if (null !== this._container && null !== t && ! function(t, e) {
                            const n = t.getBoundingClientRect(),
                                o = e.getBoundingClientRect();
                            return n.top >= o.top && n.bottom <= o.bottom && n.left >= o.left && n.right <= o.right
                        }(t, this._container)) {
                        const n = t.getBoundingClientRect(),
                            o = this._container.getBoundingClientRect();
                        this.stopScroll(), c("vertical", this._container) && (this._stopVerticalScroll = a("vertical", t, this._container, n, o, this._modifyOptions("vertical", e))), c("horizontal", this._container) && (this._stopHorizontalScroll = a("horizontal", t, this._container, n, o, this._modifyOptions("horizontal", e)))
                    }
                    this._lastScrolledElement = t
                }
                scrollToLastElement(t) {
                    this.scrollTo(this._lastScrolledElement, t)
                }
                stopScroll() {
                    null !== this._stopVerticalScroll && this._stopVerticalScroll(),
                        null !== this._stopHorizontalScroll && this._stopHorizontalScroll()
                }
                getContainer() {
                    return this._container
                }
                setContainer(t) {
                    var e;
                    this._container = t, (null === (e = this._container) || void 0 === e ? void 0 : e.contains(this._lastScrolledElement)) || (this._lastScrolledElement = null)
                }
                destroy() {
                    this.stopScroll(), this._container = null, this._lastScrolledElement = null
                }
                _handleScrollEnd(t) {
                    "vertical" === t ? this._stopVerticalScroll = null : this._stopHorizontalScroll = null
                }
                _modifyOptions(t, e) {
                    return Object.assign({}, e, {
                        onScrollEnd: () => {
                            this._handleScrollEnd(t), void 0 !== e.onScrollEnd && e.onScrollEnd()
                        }
                    })
                }
            }

            function d(t) {
                const e = (0, o.useRef)(null);
                return (0, o.useEffect)((() => (e.current = new u(t), () => (0, l.ensureNotNull)(e.current).destroy())), []), e
            }
        },
        481058: (t, e, n) => {
            n.d(e, {
                createDomId: () => c,
                joinDomIds: () => a
            });
            const o = /\s/g;

            function l(t) {
                return "string" == typeof t
            }

            function r(t) {
                switch (typeof t) {
                    case "string":
                        return t;
                    case "number":
                    case "bigint":
                        return t.toString(10);
                    case "boolean":
                    case "symbol":
                        return t.toString();
                    default:
                        return null
                }
            }

            function i(t) {
                return t.trim().length > 0
            }

            function s(t) {
                return t.replace(o, "-")
            }

            function c(...t) {
                const e = t.map(r).filter(l).filter(i).map(s);
                return (e.length > 0 && e[0].startsWith("id_") ? e : ["id", ...e]).join("_")
            }

            function a(...t) {
                return t.map(r).filter(l).filter(i).join(" ")
            }
        },
        315949: (t, e, n) => {
            n.d(e, {
                scrollTo: () => l
            });
            var o = n(745269);

            function l(t) {
                const {
                    additionalScroll: e = 0,
                    duration: n = o.dur,
                    func: l = o.easingFunc.easeInOutCubic,
                    onScrollEnd: r,
                    target: i,
                    wrap: s,
                    direction: c = "vertical"
                } = t;
                let {
                    targetRect: a,
                    wrapRect: u
                } = t;
                a = null != a ? a : i.getBoundingClientRect(), u = null != u ? u : s.getBoundingClientRect();
                const d = ("vertical" === c ? a.top - u.top : a.left - u.left) + e,
                    f = "vertical" === c ? "scrollTop" : "scrollLeft",
                    h = s ? s[f] : 0;
                let p, b = 0;
                return b = window.requestAnimationFrame((function t(e) {
                        let o;
                        if (p ? o = e - p : (o = 0, p = e), o >= n) return s[f] = h + d, void(r && r());
                        const i = h + d * l(o / n);
                        s[f] = Math.floor(i), b = window.requestAnimationFrame(t)
                    })),
                    function() {
                        window.cancelAnimationFrame(b), r && r()
                    }
            }
        },
        99171: (t, e, n) => {
            n.d(e, {
                PopupMenuDisclosureView: () => u
            });
            var o = n(559496),
                l = n(45968),
                r = n(588537);
            const i = {
                x: 0,
                y: 0
            };

            function s(t, e, n) {
                return (0, o.useCallback)((() => function(t, e, {
                    x: n = i.x,
                    y: o = i.y
                } = i) {
                    const l = (0, r.ensureNotNull)(t).getBoundingClientRect(),
                        s = {
                            x: l.left + n,
                            y: l.top + l.height + o,
                            indentFromWindow: {
                                top: 4,
                                bottom: 4,
                                left: 4,
                                right: 4
                            }
                        };
                    return e && (s.overrideWidth = l.width), s
                }(t.current, e, n)), [t, e])
            }
            var c = n(586240);
            const a = parseInt(c["size-header-height"]);

            function u(t) {
                const {
                    button: e,
                    popupChildren: n,
                    buttonRef: r,
                    listboxId: i,
                    listboxClassName: c,
                    listboxTabIndex: u,
                    matchButtonAndListboxWidths: d,
                    isOpened: f,
                    scrollWrapReference: h,
                    listboxReference: p,
                    onClose: b,
                    onOpen: g,
                    onListboxFocus: m,
                    onListboxBlur: v,
                    onListboxKeyDown: S,
                    listboxAria: C,
                    repositionOnScroll: _ = !0,
                    closeOnHeaderOverlap: y = !1,
                    popupPositionCorrection: x = {
                        x: 0,
                        y: 0
                    }
                } = t, k = s(r, d, x), w = y ? a : 0;
                return o.createElement(o.Fragment, null, e, o.createElement(l.PopupMenu, { ...C,
                    id: i,
                    className: c,
                    tabIndex: u,
                    isOpened: f,
                    position: k,
                    repositionOnScroll: _,
                    onClose: b,
                    onOpen: g,
                    doNotCloseOn: r.current,
                    reference: p,
                    scrollWrapReference: h,
                    onFocus: m,
                    onBlur: v,
                    onKeyDown: S,
                    closeOnScrollOutsideOffset: w
                }, n))
            }
        },
        458692: (t, e, n) => {
            n.d(e, {
                useDisclosure: () => a
            });
            var o = n(559496),
                l = n(588537),
                r = n(405964),
                i = n(763341),
                s = n(481058),
                c = n(515312);

            function a(t) {
                const {
                    id: e,
                    listboxId: n,
                    disabled: a,
                    buttonTabIndex: u = 0,
                    onFocus: d,
                    onBlur: f,
                    onClick: h
                } = t, [p, b] = (0, o.useState)(!1), [g, m] = (0, r.useFocus)(), v = g || p, S = (null != n ? n : void 0 !== e) ? (0, s.createDomId)(e, "listbox") : void 0, C = (0, o.useRef)(null), _ = (0, o.useCallback)((t => {
                    var e;
                    return null === (e = C.current) || void 0 === e ? void 0 : e.focus(t)
                }), [C]), y = (0, o.useRef)(null), x = (0, o.useCallback)((() => (0, l.ensureNotNull)(y.current).focus()), [y]), k = (0, o.useCallback)((() => b(!0)), [b]), w = (0, o.useCallback)(((t = !1) => {
                    b(!1);
                    const {
                        activeElement: e
                    } = document;
                    e && (0, c.isTextEditingField)(e) || _({
                        preventScroll: t
                    })
                }), [b, _]), z = (0, o.useCallback)((() => {
                    p ? w() : k()
                }), [p, w, k]), E = a ? [] : [d, m.onFocus], R = a ? [] : [f, m.onBlur], H = a ? [] : [h, z], I = (0, i.createSafeMulticastEventHandler)(...E), M = (0, i.createSafeMulticastEventHandler)(...R), O = (0, i.createSafeMulticastEventHandler)(...H);
                return {
                    listboxId: S,
                    isOpened: p,
                    isFocused: v,
                    buttonTabIndex: a ? -1 : u,
                    listboxTabIndex: -1,
                    open: k,
                    close: w,
                    toggle: z,
                    onOpen: x,
                    buttonFocusBindings: {
                        onFocus: I,
                        onBlur: M
                    },
                    onButtonClick: O,
                    buttonRef: C,
                    listboxRef: y,
                    buttonAria: {
                        "aria-controls": p ? S : void 0,
                        "aria-expanded": p,
                        "aria-disabled": a
                    }
                }
            }
        },
        574823: (t, e, n) => {
            n.d(e, {
                useKeyboardActionHandler: () => i,
                useComposedKeyboardActionHandlers: () => s,
                useKeyboardEventHandler: () => c,
                useKeyboardToggle: () => a,
                useKeyboardClose: () => u,
                useKeyboardOpen: () => d
            });
            var o = n(559496),
                l = n(470316);
            const r = () => !0;

            function i(t, e, n = r) {
                return (0, o.useCallback)((o => {
                    const l = t.map((t => "function" == typeof t ? t() : t));
                    return !(!n() || !l.includes(o)) && (e(), !0)
                }), [...t, e, n])
            }

            function s(...t) {
                return (0, o.useCallback)((e => {
                    for (const n of t)
                        if (n(e)) return !0;
                    return !1
                }), [...t])
            }

            function c(t, e = !0) {
                const n = s(...t);
                return (0, o.useCallback)((t => {
                    n((0, l.hashFromEvent)(t)) && e && t.preventDefault()
                }), [n])
            }

            function a(t) {
                return i([13, 32], t)
            }

            function u(t, e) {
                return i([9, (0, o.useCallback)((() => l.Modifiers.Shift + 9), []), 27], e, (0, o.useCallback)((() => t), [t]))
            }

            function d(t, e) {
                return i([40, 38], e, (0, o.useCallback)((() => !t), [t]))
            }
        },
        198334: (t, e, n) => {
            n.d(e, {
                useItemsKeyboardNavigation: () => c
            });
            var o = n(559496),
                l = n(143498),
                r = n(574823);

            function i(t, e) {
                return t >= 0 ? t % e : (e - Math.abs(t) % e) % e
            }
            const s = {
                next: [40, () => (0, l.isRtl)() ? 37 : 39],
                previous: [38, () => (0, l.isRtl)() ? 39 : 37],
                first: [33, 36],
                last: [34, 35]
            };

            function c(t, e, n, l = !0, c = {}) {
                const a = (0, o.useCallback)((() => {
                        const o = t.findIndex(e);
                        if (o === t.length - 1 && !l) return;
                        const r = i(o + 1, t.length);
                        n && n(t[r], "next")
                    }), [t, e, n, l]),
                    u = (0, o.useCallback)((() => {
                        const o = t.findIndex(e);
                        if (0 === o && !l) return;
                        const r = i(o - 1, t.length);
                        n && n(t[r], "previous")
                    }), [t, e, n, l]),
                    d = (0, o.useCallback)((() => {
                        n && n(t[0], "first")
                    }), [n, t]),
                    f = (0, o.useCallback)((() => {
                        n && n(t[t.length - 1], "last")
                    }), [n, t]),
                    {
                        next: h = s.next,
                        previous: p = s.previous,
                        first: b = s.first,
                        last: g = s.last
                    } = c;
                return (0, r.useComposedKeyboardActionHandlers)((0, r.useKeyboardActionHandler)(h, a), (0, r.useKeyboardActionHandler)(p, u), (0, r.useKeyboardActionHandler)(b, d), (0, r.useKeyboardActionHandler)(g, f))
            }
        }
    }
]);