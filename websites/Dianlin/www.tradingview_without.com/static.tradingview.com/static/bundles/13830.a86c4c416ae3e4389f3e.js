(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [13830], {
        167314: t => {
            t.exports = {
                "toast-wrapper": "toast-wrapper-lkrjxM0A",
                compact: "compact-lkrjxM0A"
            }
        },
        648655: t => {
            t.exports = {
                "toast-positioning-wrapper": "toast-positioning-wrapper-ghV07cIW",
                compact: "compact-ghV07cIW",
                "location-bottom-left": "location-bottom-left-ghV07cIW",
                "location-bottom-right": "location-bottom-right-ghV07cIW",
                hidden: "hidden-ghV07cIW",
                added: "added-ghV07cIW"
            }
        },
        13830: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, {
                globalToasts: () => d,
                showToast: () => u
            });
            var s = o(559496),
                n = o(497754),
                i = o(799217),
                a = o(586240),
                r = o(167314);
            const h = a["media-mf-phone-landscape"];

            function c(t) {
                const {
                    suggestedLayout: e,
                    children: o
                } = t;
                return s.createElement("div", {
                    className: n(r["toast-wrapper"], "compact" === e && r.compact)
                }, o)
            }
            const d = new class {
                constructor() {
                    var t;
                    this._mediaQuery = window.matchMedia(h), this._handleMediaQueryChange = () => {
                        this._toastsLayer.update({
                            suggestedLayout: this._getSuggestedLayout()
                        })
                    }, this._handleLoginStateChange = () => {
                        this._toastsLayer.update({
                            location: this._getLocation()
                        })
                    }, this._toastsLayer = new i.ToastsLayer(this._getSuggestedLayout(), void 0, void 0, this._getLocation()), this._mediaQuery.addListener(this._handleMediaQueryChange), null === (t = window.loginStateChange) || void 0 === t || t.subscribe(this, this._handleLoginStateChange)
                }
                destroy() {
                    var t;
                    this._toastsLayer.destroy(), this._mediaQuery.removeListener(this._handleMediaQueryChange), null === (t = window.loginStateChange) || void 0 === t || t.unsubscribe(this, this._handleLoginStateChange)
                }
                showCustomToast(t) {
                    const {
                        render: e,
                        ...o
                    } = t;
                    var n;
                    return this._toastsLayer.showToast({
                        render: (n = e, t => s.createElement(c, {
                            suggestedLayout: t.suggestedLayout,
                            children: n(t)
                        })),
                        ...o
                    }).remove
                }
                reset() {
                    this._toastsLayer.reset()
                }
                forceRender() {
                    this._toastsLayer.forceRender()
                }
                merge(t) {
                    this._toastsLayer.merge(t)
                }
                split(t) {
                    this._toastsLayer.split(t)
                }
                _getSuggestedLayout() {
                    return this._mediaQuery.matches ? "loose" : "compact"
                }
                _getLocation() {
                    return "bottom-left"
                }
            };

            function u(t) {
                return d.showCustomToast(t)
            }
        },
        239401: (t, e, o) => {
            "use strict";
            var s, n;
            o.d(e, {
                    ToastAnimationStage: () => s,
                    ToastPriority: () => n
                }),
                function(t) {
                    t[t.Add = 0] = "Add", t[t.Remove = 1] = "Remove", t[t.None = 2] = "None"
                }(s || (s = {})),
                function(t) {
                    t[t.Low = 0] = "Low", t[t.Medium = 1] = "Medium", t[t.High = 2] = "High"
                }(n || (n = {}))
        },
        799217: (t, e, o) => {
            "use strict";
            o.d(e, {
                ToastsLayer: () => v
            });
            var s, n = o(559496),
                i = o(587995),
                a = o(497754),
                r = o(95935),
                h = o(707533),
                c = o(670797),
                d = o(829725),
                u = o(56537),
                g = o(239401);
            class l {
                constructor(t) {
                    this._animationStage = g.ToastAnimationStage.Add, this._keys = new Map, this._element = null, this.render = t => this._render(t), this.remove = () => {
                        const t = this.getStaticData();
                        return this._currentToastsLayer.removeToast(this).then((() => {
                            t.onRemoveEnd && t.onRemoveEnd()
                        }))
                    };
                    const {
                        priority: e,
                        origin: o,
                        currentLayer: s,
                        onLayerChange: n,
                        render: i,
                        onMouseOver: a,
                        onMouseOut: r,
                        swipeToCloseDirection: h,
                        onRemoveEnd: c
                    } = t;
                    this._staticData = Object.freeze({
                        priority: e,
                        origin: o,
                        onLayerChange: n,
                        swipeToCloseDirection: h,
                        onRemoveEnd: c,
                        onMouseOver: a,
                        onMouseOut: r
                    }), this._currentToastsLayer = s || o, this._render = i
                }
                getStaticData() {
                    return this._staticData
                }
                migrate(t) {
                    this._currentToastsLayer = t, this._animationStage = g.ToastAnimationStage.Add
                }
                getCurrentLayer() {
                    return this._currentToastsLayer
                }
                isForeign() {
                    return this._staticData.origin !== this._currentToastsLayer
                }
                getAnimationStage() {
                    return this._animationStage
                }
                setAnimationStage(t) {
                    this._animationStage = t
                }
                setKey(t, e) {
                    this._keys.set(t, e)
                }
                getKey(t = this._currentToastsLayer) {
                    return this._keys.get(t)
                }
                getElement() {
                    return this._element
                }
                setElement(t) {
                    this._element = t
                }
            }

            function m(t, e) {
                const o = (0, n.useRef)({
                        x: 0,
                        y: 0
                    }),
                    [i, a] = (0, n.useState)(s.Unset);
                return [i, {
                    onTouchStart: (0, n.useCallback)((t => {
                        o.current = {
                            x: t.changedTouches[0].clientX,
                            y: t.changedTouches[0].clientY
                        }
                    }), []),
                    onTouchEnd: (0, n.useCallback)((n => {
                        a(function(t, e, o, n, i) {
                            const a = t.currentTarget,
                                r = Math.abs(o.x - e.x),
                                h = Math.abs(o.y - e.y),
                                c = a.offsetWidth * n,
                                d = a.offsetHeight * i;
                            return r > h && r > c ? o.x > e.x ? s.Right : s.Left : h > d ? o.y > e.y ? s.Down : s.Up : s.Unset
                        }(n, o.current, {
                            x: n.changedTouches[0].clientX,
                            y: n.changedTouches[0].clientY
                        }, t, e))
                    }), [a, o, t, e])
                }]
            }! function(t) {
                t.Right = "right", t.Left = "left", t.Up = "up", t.Down = "down", t.Unset = "unset"
            }(s || (s = {}));
            var _ = o(143498),
                y = o(648655);
            const p = {
                position: "fixed",
                left: "0",
                bottom: "0",
                right: "0",
                zIndex: 145
            };
            class v {
                constructor(t, e, o = p, s) {
                    this._toasts = {
                        [g.ToastPriority.Low]: [],
                        [g.ToastPriority.Medium]: [],
                        [g.ToastPriority.High]: []
                    }, this._container = void 0 !== e ? e : document.body, this._suggestedLayout = void 0 !== t ? t : "loose", this._location = null != s ? s : "bottom-left", this._manager = new d.OverlapManager(document), this._overlapManagerContainer = function(t, e = {}) {
                        const o = t.createElement("div");
                        return o.dataset.role = "toast-container", T(o, { ...p,
                            ...e
                        }), o
                    }(document, o), this._manager.setContainer(this._overlapManagerContainer), this._container.appendChild(this._overlapManagerContainer), this._detachedContainer = document.createElement("div")
                }
                showToast(t) {
                    const {
                        render: e,
                        priority: o = g.ToastPriority.Medium,
                        index: n,
                        origin: i = this,
                        onLayerChange: a,
                        onRemoveEnd: r,
                        onMouseOver: h,
                        onMouseOut: c
                    } = t, d = function(t) {
                        const e = (0, _.isRtl)() ? s.Right : s.Left;
                        return void 0 === t ? e : null !== t ? t : void 0
                    }(t.swipeToCloseDirection), u = new l({
                        priority: o,
                        origin: i,
                        currentLayer: this,
                        render: e,
                        onLayerChange: a,
                        swipeToCloseDirection: d,
                        onRemoveEnd: r,
                        onMouseOver: h,
                        onMouseOut: c
                    }), m = this._getNextKey();
                    return u.setKey(this, m), "compact" === this._suggestedLayout && o === g.ToastPriority.Low ? Promise.all(this._toasts[g.ToastPriority.Low].map((t => this.removeToast(t)))).then((() => {
                        this._add(u, n), this._render()
                    })) : (this._add(u, n), this._render()), u
                }
                showExistingToast(t) {
                    const e = this._getNextKey();
                    return t.setKey(this, e), this._add(t), this._render(), t
                }
                removeToast(t) {
                    return new Promise((e => {
                        t.setAnimationStage(g.ToastAnimationStage.Remove), this._render(), setTimeout((() => {
                            this._remove(t), this._render(), e()
                        }), 300)
                    }))
                }
                update(t) {
                    const {
                        suggestedLayout: e,
                        location: o,
                        container: s,
                        rootContainerOptions: n
                    } = t;
                    let i = !1,
                        a = !1;
                    void 0 !== e && e !== this._suggestedLayout && (this._setSuggestedLayout(e), i = !0), void 0 !== o && (this._setLocation(o), a = !0), void 0 !== s && (this._setContainer(s), a = !0), void 0 !== n && (this._updateRootContainer(n), a = !0),
                        i ? "compact" === this._suggestedLayout && this._toasts[g.ToastPriority.Low].slice(0, -1).forEach((t => this.removeToast(t))) : a && this._render()
                }
                getToasts() {
                    return this._toasts
                }
                forceRender() {
                    this._render()
                }
                merge(t) {
                    L(t.getToasts()).forEach((async e => {
                        const o = e.getStaticData();
                        await e.remove(), e.migrate(this), this.showExistingToast(e), void 0 !== o.onLayerChange && o.onLayerChange(t, this)
                    }))
                }
                split(t) {
                    L(this._toasts).filter((t => t.isForeign())).forEach((async e => {
                        const o = e.getStaticData();
                        await e.remove(), e.migrate(t), t.showExistingToast(e), void 0 !== o.onLayerChange && o.onLayerChange(this, t)
                    }))
                }
                reset() {
                    this._toasts = {
                        [g.ToastPriority.Low]: [],
                        [g.ToastPriority.Medium]: [],
                        [g.ToastPriority.High]: []
                    }, this._render()
                }
                destroy() {
                    this._removeRootContainer()
                }
                _removeRootContainer() {
                    i.unmountComponentAtNode(this._detachedContainer), this._detachedContainer.remove(), this._overlapManagerContainer.remove()
                }
                _getToastsList(t) {
                    const e = t.getStaticData().priority;
                    return this._toasts[e]
                }
                _normalizeIndex(t, e) {
                    return t < 0 ? 0 : t > e.length ? e.length : t
                }
                _add(t, e) {
                    const o = this._getToastsList(t);
                    if (void 0 !== e) {
                        const s = this._normalizeIndex(e, o);
                        o.splice(s, 0, t)
                    } else o.push(t)
                }
                _remove(t) {
                    const e = this._getToastsList(t),
                        o = e.indexOf(t);
                    o >= 0 && e.splice(o, 1)
                }
                _render() {
                    const t = L(this._toasts);
                    i.render(n.createElement(w, {
                        toasts: t,
                        suggestedLayout: this._suggestedLayout,
                        location: this._location,
                        manager: this._manager,
                        layer: this
                    }), this._detachedContainer)
                }
                _setSuggestedLayout(t) {
                    t !== this._suggestedLayout && (this._suggestedLayout = t)
                }
                _setLocation(t) {
                    t !== this._location && (this._location = t)
                }
                _setContainer(t) {
                    t !== this._container && (this._container = t, this._container.appendChild(this._overlapManagerContainer))
                }
                _updateRootContainer(t) {
                    T(this._overlapManagerContainer, t)
                }
                _getNextKey() {
                    return (0, r.randomHashN)(5)
                }
            }

            function L(t) {
                return [...t[g.ToastPriority.Low], ...t[g.ToastPriority.Medium], ...t[g.ToastPriority.High]]
            }

            function T(t, e) {
                const {
                    top: o,
                    right: s,
                    bottom: n,
                    left: i,
                    position: a,
                    zIndex: r
                } = e;
                void 0 !== a && (t.style.position = a), void 0 !== r && (t.style.zIndex = String(r)), void 0 !== o && (t.style.top = o), void 0 !== s && (t.style.right = s), void 0 !== n && (t.style.bottom = n), void 0 !== i && (t.style.left = i)
            }

            function f(t, e, o) {
                return t.getKey(o) || e.toString(10)
            }

            function C(t) {
                const {
                    toast: e,
                    toasts: o,
                    layer: i,
                    suggestedLayout: r,
                    location: c,
                    forceRender: d
                } = t, u = (0, n.useRef)(null), l = e.getStaticData().swipeToCloseDirection, [p, v] = m(.2, .7), L = e.getAnimationStage(), T = L !== g.ToastAnimationStage.None, C = L === g.ToastAnimationStage.Add, [w, S] = function(t, e, o, n) {
                    var i, a;
                    const r = e.indexOf(t),
                        h = f(t, r, o);
                    let c = 0,
                        d = 0;
                    for (const t of e) {
                        const u = e.indexOf(t),
                            l = f(t, u, o),
                            m = (null === (i = t.getElement()) || void 0 === i ? void 0 : i.offsetHeight) || 0,
                            y = (null === (a = t.getElement()) || void 0 === a ? void 0 : a.offsetWidth) || 0,
                            p = (0, _.isRtl)() ? y : -y,
                            v = t.getAnimationStage() !== g.ToastAnimationStage.None && n === s.Unset,
                            L = n === t.getStaticData().swipeToCloseDirection;
                        let T = 0;
                        v && l === h ? T = 1 : !v && r < u && (T = -1), c += T * m, d = L ? p : 0
                    }
                    return [c, d]
                }(e, o, i, p), M = a(y["toast-positioning-wrapper"], T && y.hidden, C && y.added, "compact" === r && y.compact, c && y[`location-${c}`]);
                return (0, n.useEffect)((() => {
                    if (e.getCurrentLayer() !== i || e.getAnimationStage() !== g.ToastAnimationStage.Add || null === u.current) return;
                    const t = e.getElement();
                    null === t || t !== u.current ? (e.setElement(u.current), d()) : (e.setAnimationStage(g.ToastAnimationStage.None), d())
                })), (0, n.useEffect)((() => {
                    p === l && p !== s.Unset && e.remove()
                }), [p, e]), n.createElement(h.Portal, {
                    layerOptions: {
                        position: "absolute"
                    },
                    left: "0",
                    right: "0"
                }, n.createElement("div", {
                    onTouchStart: l ? v.onTouchStart : void 0,
                    onTouchEnd: l ? v.onTouchEnd : void 0,
                    onMouseOver: e.getStaticData().onMouseOver,
                    onMouseOut: e.getStaticData().onMouseOut,
                    className: M,
                    style: {
                        transform: `translate(${S}px, ${w}px)`
                    },
                    ref: u
                }, e.render({
                    onRemove: e.remove,
                    suggestedLayout: r
                })))
            }

            function w(t) {
                const {
                    toasts: e,
                    suggestedLayout: o,
                    location: s,
                    manager: i,
                    layer: a
                } = t, r = (0, u.useForceUpdate)();
                return n.createElement(c.SlotContext.Provider, {
                    value: i
                }, e.map(((t, i) => n.createElement(C, {
                    key: f(t, i, a),
                    toast: t,
                    toasts: e,
                    layer: a,
                    suggestedLayout: o,
                    location: s,
                    forceRender: r
                }))))
            }
        }
    }
]);