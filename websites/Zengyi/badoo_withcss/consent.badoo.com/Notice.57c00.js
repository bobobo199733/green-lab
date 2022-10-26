! function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: o
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var r in e) t.d(o, r, function(t) {
                return e[t]
            }.bind(null, r));
        return o
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "/", t(t.s = 0)
}({
    0: function(e, t, n) {
        n("zS2S"), e.exports = n("Cwyy")
    },
    "0d0D": function(e, t, n) {
        "use strict";

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(n, !0).forEach((function(t) {
                    s(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var c = n("2mXy"),
            l = n("FdF9"),
            u = function(e) {
                void 0 === e && (e = {}), o(this, {
                    text: "Button",
                    width: {
                        type: "auto",
                        value: 1
                    },
                    padding: {
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 10,
                        paddingBottom: 10
                    },
                    margin: {
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 10,
                        marginBottom: 10
                    },
                    font: {
                        fontSize: 14,
                        fontWeight: "400",
                        color: "#ffffff",
                        fontFamily: "arial, helvetica, sans-serif"
                    },
                    background: "#1890ff",
                    border: {
                        borderWidth: 0,
                        borderColor: "#000000",
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderStyle: "solid"
                    },
                    languages: {},
                    selectedLanguage: "",
                    startFocus: !1,
                    action_type: "SHOW_ATT_MSG"
                }), o(this, e)
            },
            p = n("o1E3"),
            d = n("YSmr");
        n("DBc/");
        n.d(t, "a", (function() {
            return g
        }));
        var g = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).makeChoice = function(e, n) {
                    var o = t.props.language;
                    t.props.makeChoice(d.g[e], Object(p.s)(o, n, "text"))
                }, t
            }
            var n, o;
            return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                var e = this,
                    t = new u(this.props.component.settings),
                    n = this.props,
                    o = n.language,
                    a = n.dev,
                    s = i({}, t.padding, {}, t.margin, {}, t.border, {}, t.font),
                    l = t.padding,
                    d = l.paddingLeft,
                    g = l.paddingRight,
                    f = t.margin,
                    h = f.marginLeft,
                    m = f.marginRight;
                s.width = "auto" === t.width.type ? "auto" : t.width.value + t.width.type, "%" === t.width.type && (s.width = "calc(" + t.width.value + "% - " + (d + g + h + m) + "px"), s.background = t.background;
                var b = {},
                    v = !1,
                    y = JSON.stringify(this.props.path);
                a && (b = i({}, a.hover), v = a.current === y);
                var O = "message-component message-button no-children focusable" + this.props.className,
                    j = Object(p.u)(a, t, "text", o);
                return Object(c.h)("button", r({
                    tabIndex: t.startFocus ? 1 : 0,
                    title: j,
                    onClick: function() {
                        return e.makeChoice(t.action_type, t)
                    },
                    onKeyDown: function(n) {
                        return Object(p.q)(n.key) && e.makeChoice(t.action_type)
                    },
                    className: v ? O + " on-active" : O,
                    path: a ? y : null,
                    style: s
                }, b), j)
            }, t
        }(l.Component)
    },
    "1mLn": function(e, t, n) {
        "use strict";

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(n, !0).forEach((function(t) {
                    a(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i() {
            return (i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function s() {
            return (s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function c(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(n, !0).forEach((function(t) {
                    u(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var p = n("2mXy"),
            d = n("FdF9"),
            g = n("KOA+"),
            f = n("o1E3"),
            h = (n("5QLj"), function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        open: !1
                    }, t.toggleAccordion = function() {
                        var e = t.panel,
                            n = !t.state.open;
                        t.setState({
                            open: n
                        }), e.style.maxHeight = n ? e.scrollHeight + "px" : null
                    }, t
                }
                var n, o;
                return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.stack,
                        o = t.loading,
                        a = this.state.open,
                        i = "CUSTOM" === n.type ? Object(p.h)("p", {
                            style: r({}, this.props.panelStyles),
                            dangerouslySetInnerHTML: {
                                __html: Object(g.a)({
                                    html: n.description
                                })
                            }
                        }) : Object(p.h)("p", {
                            style: r({}, this.props.panelStyles)
                        }, Object(f.f)(n.description));
                    return Object(p.h)("div", {
                        tabIndex: "0",
                        className: "stack",
                        onKeyDown: function(t) {
                            return Object(f.q)(t.key) && (o ? null : e.toggleAccordion())
                        }
                    }, Object(p.h)("button", {
                        tabIndex: "-1",
                        className: a ? "accordion active" : "accordion",
                        style: this.props.accordionStyles,
                        onClick: o ? null : this.toggleAccordion
                    }, n.name, o ? null : Object(p.h)("span", {
                        className: a ? "chevron up" : "chevron down"
                    })), Object(p.h)("div", {
                        ref: function(t) {
                            return e.panel = t
                        },
                        className: "panel"
                    }, i))
                }, t
            }(d.Component)),
            m = function(e) {
                void 0 === e && (e = {}), i(this, {
                    accordionsSpacing: {
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 20,
                        paddingBottom: 20
                    },
                    accordionsFont: {
                        fontSize: 14,
                        fontWeight: "600",
                        color: "#000000",
                        fontFamily: "arial, helvetica, sans-serif"
                    },
                    panelSpacing: {
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 20,
                        paddingBottom: 20
                    },
                    panelFont: {
                        fontSize: 13,
                        fontWeight: "400",
                        color: "#555555",
                        fontFamily: "arial, helvetica, sans-serif"
                    },
                    minHeight: {
                        type: "auto",
                        value: 1
                    },
                    maxHeight: {
                        type: "px",
                        value: 400
                    }
                }), i(this, e)
            };
        n.d(t, "a", (function() {
            return v
        }));
        var b = [{
                name: "Category Name",
                description: "Custom category #1 description",
                type: "CUSTOM"
            }, {
                name: "Stack Name",
                description: "Custom stack description",
                type: "CUSTOM_STACK"
            }, {
                name: "IAB Purpose",
                description: "IAB purpose description",
                type: "IAB_PURPOSE"
            }, {
                name: "IAB Stack",
                description: "IAB stack description",
                type: "IAB_STACK"
            }],
            v = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        stacks: [{
                            name: "Loading...",
                            description: "",
                            type: ""
                        }],
                        loading: !0
                    }, t.componentDidMount = function() {
                        t.loadStacks()
                    }, t.componentDidUpdate = function(e) {
                        var n = t.props,
                            o = n.stacksData,
                            r = n.language;
                        o && t.state.stacks === b && !n.refetchStacks && t.setState({
                            stacks: o
                        }), r !== e.language && t.loadStacks()
                    }, t.loadStacks = function() {
                        var e = t.props,
                            n = e.siteId,
                            o = e.preloadMsg,
                            r = e.language;
                        if (n && !o || n && e.refetchStacks || !e.stacksData && o) {
                            fetch(e.cmpv2Origin + "/vendor-list/categories?siteId=" + n + (r ? "&consentLanguage=" + r.toLowerCase() : ""), {
                                insecure: !0
                            }).then((function(e) {
                                return e.json()
                            })).then((function(e) {
                                try {
                                    t.setState({
                                        stacks: e.categories || b,
                                        loading: !1
                                    })
                                } catch (e) {
                                    t.defaultStacks()
                                }
                            }))
                        } else t.defaultStacks()
                    }, t.defaultStacks = function() {
                        t.setState({
                            stacks: b,
                            loading: !1
                        })
                    }, t
                }
                var n, o;
                return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                    var e = this,
                        t = new m(this.props.component.settings),
                        n = l({}, t.accordionsSpacing, {}, t.accordionsFont),
                        o = l({}, t.panelSpacing, {}, t.panelFont),
                        r = {};
                    r.minHeight = "auto" === t.minHeight.type ? "auto" : t.minHeight.value + t.minHeight.type, r.maxHeight = "auto" === t.maxHeight.type ? "auto" : t.maxHeight.value + t.maxHeight.type;
                    var a = {},
                        i = !1,
                        c = JSON.stringify(this.props.path);
                    this.props.dev && (a = l({}, this.props.dev.hover), i = this.props.dev.current === c);
                    var u = "message-component message-stacks no-children" + this.props.className;
                    return Object(p.h)("div", s({
                        className: i ? u + " on-active" : u,
                        path: this.props.dev ? c : null
                    }, a), Object(p.h)("div", {
                        className: "stack-container",
                        style: r
                    }, this.state.stacks.map((function(t, r) {
                        return Object(p.h)(h, {
                            key: "stack-" + r,
                            stack: t,
                            panelStyles: o,
                            accordionStyles: n,
                            dev: e.props.dev,
                            loading: e.state.loading
                        })
                    }))))
                }, t
            }(d.Component)
    },
    "2EdD": function(e, t, n) {
        "use strict";

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        n.d(t, "a", (function() {
            return u
        }));
        var i = n("2mXy"),
            s = (n("FdF9"), n("eLgm")),
            c = n("Asb/"),
            l = n("5oGf"),
            u = (n("wl5O"), function(e) {
                var t = e.component,
                    n = e.path,
                    u = e.dev,
                    p = e.className,
                    d = e.siteId,
                    g = e.message,
                    f = e.makeChoice,
                    h = e.language,
                    m = e.events,
                    b = e.preloadMsg,
                    v = e.stacksData,
                    y = e.updateStacks,
                    O = e.consentUUID,
                    j = e.allSelectionsMade,
                    _ = new s.a(t.settings),
                    w = Object(l.c)(n, u),
                    k = w.devActions,
                    C = w.devClass,
                    x = w.pathString,
                    T = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? r(n, !0).forEach((function(t) {
                                a(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(n).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, _.padding, {}, _.margin, {}, _.border);
                u && (0 === t.children.length && (T.minHeight = "24px"), u.opts.hideRowColumnBorders || (C += " on-dev"));
                var P = _.padding,
                    N = P.paddingTop,
                    S = P.paddingBottom,
                    L = _.margin,
                    A = L.marginTop,
                    I = L.marginBottom;
                return T.width = "auto" === _.width.type ? "auto" : _.width.value + _.width.type, T.height = "auto" === _.height.type ? "auto" : _.height.value + _.height.type, "%" === _.height.type && (T.height = "calc(" + _.height.value + "% - " + (N + S + A + I) + "px"), T.background = _.background, T.alignItems = _.align, T.justifyContent = _.vertical, Object(i.h)("div", o({
                    style: T,
                    className: "message-component message-column" + C + p,
                    path: u ? x : null
                }, k), Object(i.h)(c.a, o({}, e, {
                    path: n,
                    dev: u,
                    components: t.children,
                    siteId: d,
                    message: g,
                    makeChoice: f,
                    language: h,
                    events: m,
                    preloadMsg: b,
                    stacksData: v,
                    updateStacks: y,
                    consentUUID: O,
                    width: null,
                    allSelectionsMade: j
                })))
            })
    },
    "2mXy": function(e, t, n) {
        "use strict";

        function o(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }

        function a(e, t, n) {
            var r, a, s, c, l = arguments;
            if (t = o({}, t), arguments.length > 3)
                for (n = [n], r = 3; r < arguments.length; r++) n.push(l[r]);
            if (null != n && (t.children = n), null != e && null != e.defaultProps)
                for (a in e.defaultProps) void 0 === t[a] && (t[a] = e.defaultProps[a]);
            return c = t.key, null != (s = t.ref) && delete t.ref, null != c && delete t.key, i(e, t, c, s)
        }

        function i(e, t, n, o) {
            var r = {
                type: e,
                props: t,
                key: n,
                ref: o,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: null,
                __c: null,
                constructor: void 0
            };
            return N.vnode && N.vnode(r), r
        }

        function s() {
            return {}
        }

        function c(e) {
            return e.children
        }

        function l(e, t) {
            this.props = e, this.context = t
        }

        function u(e, t) {
            if (null == t) return e.__ ? u(e.__, e.__.__k.indexOf(e) + 1) : null;
            for (var n; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
            return "function" == typeof e.type ? u(e) : null
        }

        function p(e) {
            var t, n;
            if (null != (e = e.__) && null != e.__c) {
                for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) {
                        e.__e = e.__c.base = n.__e;
                        break
                    }
                return p(e)
            }
        }

        function d(e) {
            (!e.__d && (e.__d = !0) && 1 === L.push(e) || I !== N.debounceRendering) && ((I = N.debounceRendering) || A)(g)
        }

        function g() {
            var e, t, n, r, a, i, s;
            for (L.sort((function(e, t) {
                    return t.__v.__b - e.__v.__b
                })); e = L.pop();) e.__d && (n = void 0, r = void 0, i = (a = (t = e).__v).__e, (s = t.__P) && (n = [], r = y(s, a, o({}, a), t.__n, void 0 !== s.ownerSVGElement, null, n, null == i ? u(a) : i), O(n, a), r != i && p(a)))
        }

        function f(e, t, n, o, a, i, s, c, l) {
            var p, d, g, f, m, b, v, O = n && n.__k || F,
                j = O.length;
            if (c == B && (c = null != i ? i[0] : j ? u(n, 0) : null), p = 0, t.__k = h(t.__k, (function(n) {
                    if (null != n) {
                        if (n.__ = t, n.__b = t.__b + 1, null === (g = O[p]) || g && n.key == g.key && n.type === g.type) O[p] = void 0;
                        else
                            for (d = 0; d < j; d++) {
                                if ((g = O[d]) && n.key == g.key && n.type === g.type) {
                                    O[d] = void 0;
                                    break
                                }
                                g = null
                            }
                        if (f = y(e, n, g = g || B, o, a, i, s, c, l), (d = n.ref) && g.ref != d && (v || (v = []), g.ref && v.push(g.ref, null, n), v.push(d, n.__c || f, n)), null != f) {
                            if (null == b && (b = f), null != n.__d) f = n.__d, n.__d = null;
                            else if (i == g || f != c || null == f.parentNode) {
                                e: if (null == c || c.parentNode !== e) e.appendChild(f);
                                    else {
                                        for (m = c, d = 0;
                                            (m = m.nextSibling) && d < j; d += 2)
                                            if (m == f) break e;
                                        e.insertBefore(f, c)
                                    }
                                "option" == t.type && (e.value = "")
                            }
                            c = f.nextSibling, "function" == typeof t.type && (t.__d = f)
                        }
                    }
                    return p++, n
                })), t.__e = b, null != i && "function" != typeof t.type)
                for (p = i.length; p--;) null != i[p] && r(i[p]);
            for (p = j; p--;) null != O[p] && w(O[p], O[p]);
            if (v)
                for (p = 0; p < v.length; p++) _(v[p], v[++p], v[++p])
        }

        function h(e, t, n) {
            if (null == n && (n = []), null == e || "boolean" == typeof e) t && n.push(t(null));
            else if (Array.isArray(e))
                for (var o = 0; o < e.length; o++) h(e[o], t, n);
            else n.push(t ? t("string" == typeof e || "number" == typeof e ? i(null, e, null, null) : null != e.__e || null != e.__c ? i(e.type, e.props, e.key, null) : e) : e);
            return n
        }

        function m(e, t, n) {
            "-" === t[0] ? e.setProperty(t, n) : e[t] = "number" == typeof n && !1 === M.test(t) ? n + "px" : null == n ? "" : n
        }

        function b(e, t, n, o, r) {
            var a, i, s, c, l;
            if (r ? "className" === t && (t = "class") : "class" === t && (t = "className"), "key" === t || "children" === t);
            else if ("style" === t)
                if (a = e.style, "string" == typeof n) a.cssText = n;
                else {
                    if ("string" == typeof o && (a.cssText = "", o = null), o)
                        for (i in o) n && i in n || m(a, i, "");
                    if (n)
                        for (s in n) o && n[s] === o[s] || m(a, s, n[s])
                }
            else "o" === t[0] && "n" === t[1] ? (c = t !== (t = t.replace(/Capture$/, "")), l = t.toLowerCase(), t = (l in e ? l : t).slice(2), n ? (o || e.addEventListener(t, v, c), (e.l || (e.l = {}))[t] = n) : e.removeEventListener(t, v, c)) : "list" !== t && "tagName" !== t && "form" !== t && !r && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/^xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n ? e.removeAttribute(t) : e.setAttribute(t, n))
        }

        function v(e) {
            this.l[e.type](N.event ? N.event(e) : e)
        }

        function y(e, t, n, r, a, i, s, u, p) {
            var d, g, m, b, v, y, O, _, w, C, x = t.type;
            if (void 0 !== t.constructor) return null;
            (d = N.__b) && d(t);
            try {
                e: if ("function" == typeof x) {
                    if (_ = t.props, w = (d = x.contextType) && r[d.__c], C = d ? w ? w.props.value : d.__ : r, n.__c ? O = (g = t.__c = n.__c).__ = g.__E : ("prototype" in x && x.prototype.render ? t.__c = g = new x(_, C) : (t.__c = g = new l(_, C), g.constructor = x, g.render = k), w && w.sub(g), g.props = _, g.state || (g.state = {}), g.context = C, g.__n = r, m = g.__d = !0, g.__h = []), null == g.__s && (g.__s = g.state), null != x.getDerivedStateFromProps && (g.__s == g.state && (g.__s = o({}, g.__s)), o(g.__s, x.getDerivedStateFromProps(_, g.__s))), b = g.props, v = g.state, m) null == x.getDerivedStateFromProps && null != g.componentWillMount && g.componentWillMount(), null != g.componentDidMount && g.__h.push(g.componentDidMount);
                    else {
                        if (null == x.getDerivedStateFromProps && null == g.__e && null != g.componentWillReceiveProps && g.componentWillReceiveProps(_, C), !g.__e && null != g.shouldComponentUpdate && !1 === g.shouldComponentUpdate(_, g.__s, C)) {
                            for (g.props = _, g.state = g.__s, g.__d = !1, g.__v = t, t.__e = n.__e, t.__k = n.__k, g.__h.length && s.push(g), d = 0; d < t.__k.length; d++) t.__k[d] && (t.__k[d].__ = t);
                            break e
                        }
                        null != g.componentWillUpdate && g.componentWillUpdate(_, g.__s, C), null != g.componentDidUpdate && g.__h.push((function() {
                            g.componentDidUpdate(b, v, y)
                        }))
                    }
                    g.context = C, g.props = _, g.state = g.__s, (d = N.__r) && d(t), g.__d = !1, g.__v = t, g.__P = e, d = g.render(g.props, g.state, g.context), t.__k = h(null != d && d.type == c && null == d.key ? d.props.children : d), null != g.getChildContext && (r = o(o({}, r), g.getChildContext())), m || null == g.getSnapshotBeforeUpdate || (y = g.getSnapshotBeforeUpdate(b, v)), f(e, t, n, r, a, i, s, u, p), g.base = t.__e, g.__h.length && s.push(g), O && (g.__E = g.__ = null), g.__e = null
                } else t.__e = j(n.__e, t, n, r, a, i, s, p);
                (d = N.diffed) && d(t)
            }
            catch (e) {
                N.__e(e, t, n)
            }
            return t.__e
        }

        function O(e, t) {
            N.__c && N.__c(t, e), e.some((function(t) {
                try {
                    e = t.__h, t.__h = [], e.some((function(e) {
                        e.call(t)
                    }))
                } catch (e) {
                    N.__e(e, t.__v)
                }
            }))
        }

        function j(e, t, n, o, r, a, i, s) {
            var c, l, u, p, d, g = n.props,
                h = t.props;
            if (r = "svg" === t.type || r, null == e && null != a)
                for (c = 0; c < a.length; c++)
                    if (null != (l = a[c]) && (null === t.type ? 3 === l.nodeType : l.localName === t.type)) {
                        e = l, a[c] = null;
                        break
                    }
            if (null == e) {
                if (null === t.type) return document.createTextNode(h);
                e = r ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type), a = null
            }
            if (null === t.type) null != a && (a[a.indexOf(e)] = null), g !== h && (e.data = h);
            else if (t !== n) {
                if (null != a && (a = F.slice.call(e.childNodes)), u = (g = n.props || B).dangerouslySetInnerHTML, p = h.dangerouslySetInnerHTML, !s) {
                    if (g === B)
                        for (g = {}, d = 0; d < e.attributes.length; d++) g[e.attributes[d].name] = e.attributes[d].value;
                    (p || u) && (p && u && p.__html == u.__html || (e.innerHTML = p && p.__html || ""))
                }(function(e, t, n, o, r) {
                    var a;
                    for (a in n) a in t || b(e, a, null, n[a], o);
                    for (a in t) r && "function" != typeof t[a] || "value" === a || "checked" === a || n[a] === t[a] || b(e, a, t[a], n[a], o)
                })(e, h, g, r, s), t.__k = t.props.children, p || f(e, t, n, o, "foreignObject" !== t.type && r, a, i, B, s), s || ("value" in h && void 0 !== h.value && h.value !== e.value && (e.value = null == h.value ? "" : h.value), "checked" in h && void 0 !== h.checked && h.checked !== e.checked && (e.checked = h.checked))
            }
            return e
        }

        function _(e, t, n) {
            try {
                "function" == typeof e ? e(t) : e.current = t
            } catch (e) {
                N.__e(e, n)
            }
        }

        function w(e, t, n) {
            var o, a, i;
            if (N.unmount && N.unmount(e), (o = e.ref) && _(o, null, t), n || "function" == typeof e.type || (n = null != (a = e.__e)), e.__e = e.__d = null, null != (o = e.__c)) {
                if (o.componentWillUnmount) try {
                    o.componentWillUnmount()
                } catch (e) {
                    N.__e(e, t)
                }
                o.base = o.__P = null
            }
            if (o = e.__k)
                for (i = 0; i < o.length; i++) o[i] && w(o[i], t, n);
            null != a && r(a)
        }

        function k(e, t, n) {
            return this.constructor(e, n)
        }

        function C(e, t, n) {
            var o, r, i;
            N.__ && N.__(e, t), r = (o = n === D) ? null : n && n.__k || t.__k, e = a(c, null, [e]), i = [], y(t, (o ? t : n || t).__k = e, r || B, B, void 0 !== t.ownerSVGElement, n && !o ? [n] : r ? null : F.slice.call(t.childNodes), i, n || B, o), O(i, e)
        }

        function x(e, t) {
            C(e, t, D)
        }

        function T(e, t) {
            return t = o(o({}, e.props), t), arguments.length > 2 && (t.children = F.slice.call(arguments, 2)), i(e.type, t, t.key || e.key, t.ref || e.ref)
        }

        function P(e) {
            var t = {},
                n = {
                    __c: "__cC" + E++,
                    __: e,
                    Consumer: function(e, t) {
                        return e.children(t)
                    },
                    Provider: function(e) {
                        var o, r = this;
                        return this.getChildContext || (o = [], this.getChildContext = function() {
                            return t[n.__c] = r, t
                        }, this.shouldComponentUpdate = function(t) {
                            e.value !== t.value && o.some((function(e) {
                                e.context = t.value, d(e)
                            }))
                        }, this.sub = function(e) {
                            o.push(e);
                            var t = e.componentWillUnmount;
                            e.componentWillUnmount = function() {
                                o.splice(o.indexOf(e), 1), t && t.call(e)
                            }
                        }), e.children
                    }
                };
            return n.Consumer.contextType = n, n
        }
        n.r(t), n.d(t, "render", (function() {
            return C
        })), n.d(t, "hydrate", (function() {
            return x
        })), n.d(t, "createElement", (function() {
            return a
        })), n.d(t, "h", (function() {
            return a
        })), n.d(t, "Fragment", (function() {
            return c
        })), n.d(t, "createRef", (function() {
            return s
        })), n.d(t, "isValidElement", (function() {
            return S
        })), n.d(t, "Component", (function() {
            return l
        })), n.d(t, "cloneElement", (function() {
            return T
        })), n.d(t, "createContext", (function() {
            return P
        })), n.d(t, "toChildArray", (function() {
            return h
        })), n.d(t, "_unmount", (function() {
            return w
        })), n.d(t, "options", (function() {
            return N
        }));
        var N, S, L, A, I, D, E, B = {},
            F = [],
            M = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
        N = {
            __e: function(e, t) {
                for (var n; t = t.__;)
                    if ((n = t.__c) && !n.__) try {
                        if (n.constructor && null != n.constructor.getDerivedStateFromError) n.setState(n.constructor.getDerivedStateFromError(e));
                        else {
                            if (null == n.componentDidCatch) continue;
                            n.componentDidCatch(e)
                        }
                        return d(n.__E = n)
                    } catch (t) {
                        e = t
                    }
                throw e
            }
        }, S = function(e) {
            return null != e && void 0 === e.constructor
        }, l.prototype.setState = function(e, t) {
            var n;
            n = this.__s !== this.state ? this.__s : this.__s = o({}, this.state), "function" == typeof e && (e = e(n, this.props)), e && o(n, e), null != e && this.__v && (this.__e = !1, t && this.__h.push(t), d(this))
        }, l.prototype.forceUpdate = function(e) {
            this.__v && (this.__e = !0, e && this.__h.push(e), d(this))
        }, l.prototype.render = c, L = [], A = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, D = B, E = 0
    },
    "3u6x": function(e, t, n) {
        "use strict";
        (function(e) {
            var o = n("Pidg"),
                r = n.n(o);
            t.a = function(t) {
                var n = t.vendor;
                return e("a", {
                    tabIndex: t.tabbable ? 0 : -1,
                    href: n.policyUrl,
                    target: "_blank",
                    className: "vendor-tag linked"
                }, e("span", null, n.name), e("img", {
                    src: r.a,
                    alt: ""
                }))
            }
        }).call(this, n("2mXy").h)
    },
    "4Q1r": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }));
        var o = n("2mXy"),
            r = n("FdF9"),
            a = n("5ehb"),
            i = n("eeaA"),
            s = n("o1E3"),
            c = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        open: !1,
                        consentAll: !1,
                        liAll: !1
                    }, t.toggleAccordion = function() {
                        var e = t.content,
                            n = !t.state.open;
                        t.setState({
                            open: n
                        }, t.props.force), e.style.maxHeight = n ? e.scrollHeight + "px" : null
                    }, t.toggleConsentAll = function() {
                        t.setState({
                            consentAll: !t.state.consentAll
                        }, t.props.force)
                    }, t.toggleLiAll = function() {
                        t.setState({
                            liAll: !t.state.liAll
                        }, t.props.force)
                    }, t.openLink = function() {
                        return window.open(t.props.vendor.policyUrl, "_blank")
                    }, t
                }
                var n, r;
                r = e, (n = t).prototype = Object.create(r.prototype), n.prototype.constructor = n, n.__proto__ = r;
                var c = t.prototype;
                return c.shouldComponentUpdate = function(e, t) {
                    var n = this.content;
                    n && t.open && (n.style.maxHeight = n.scrollHeight + "px")
                }, c.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.purpose,
                        r = t.selected,
                        c = t.settings,
                        l = t.togglePurposeOrFeature,
                        u = t.toggleText,
                        p = t.toggleOffText,
                        d = t.language,
                        g = t.force,
                        f = t.dev,
                        h = t.parentAccordionOpen,
                        m = t.usePurModel,
                        b = this.state,
                        v = b.open,
                        y = b.consentAll,
                        O = b.liAll,
                        j = Object(s.u)(Boolean(f), c, "viewAllText", d),
                        _ = Object(s.u)(Boolean(f), c, "viewLessText", d),
                        w = Object(s.u)(Boolean(f), c, "otherText", d),
                        k = Object(s.u)(Boolean(f), c, "otherLetter", d),
                        C = Object(s.u)(Boolean(f), c, "customPurposesLetter", d),
                        x = h ? 0 : -1;
                    return Object(o.h)("div", {
                        className: "toggle-purpose"
                    }, Object(o.h)("div", {
                        className: "stack-row",
                        style: {
                            position: "relative"
                        }
                    }, Object(o.h)("div", {
                        tabIndex: x,
                        className: v ? "opener active" : "opener",
                        onClick: this.toggleAccordion,
                        onKeyDown: function(t) {
                            return isActionAllowed(t.key) && e.toggleAccordion()
                        }
                    }, Object(o.h)("span", {
                        className: "plusminus"
                    }, v ? "-" : "+"), Object(o.h)("span", null, n.name, "CUSTOM" === n.type && Object(o.h)("span", {
                        className: "legend-key inline",
                        "aria-hidden": !0
                    }, C))), l && Object(o.h)(i.a, {
                        tabbable: 0 == x,
                        type: c.toggleType,
                        color: c.toggleColor,
                        colorActive: c.toggleActiveColor,
                        offColor: c.toggleOffColor,
                        offActiveColor: c.toggleOffActiveColor,
                        text: u,
                        offText: p,
                        toggle: l,
                        child: "purposes",
                        vendors: "consent" === r ? n.requiringConsentVendors : n.legIntVendors,
                        value: n,
                        legInt: "li" === r,
                        checked: "li" === r ? n.legInt : n.active,
                        usePurModel: m
                    })), Object(o.h)("div", {
                        ref: function(t) {
                            return e.content = t
                        },
                        className: "main"
                    }, Object(o.h)("p", {
                        className: "sub-purpose-description"
                    }, Object(s.f)(n.description)), "consent" === r && Object(o.h)("div", {
                        className: "inner-main"
                    }, Object(o.h)("div", {
                        className: "legend"
                    }, Object(o.h)("span", {
                        className: "legend-key",
                        "aria-hidden": !0
                    }, k), Object(o.h)("h2", {
                        class: "custom-header"
                    }, w)), n.requiringConsentVendors.slice(0, y ? n.requiringConsentVendors.length : 3).map((function(e) {
                        return Object(o.h)(a.a, {
                            vendor: e,
                            key: e.vendorId,
                            language: d,
                            settings: c,
                            force: g,
                            accordionOpen: v
                        })
                    })), n.requiringConsentVendors.length > 3 ? Object(o.h)("div", {
                        className: "view-all",
                        onClick: this.toggleConsentAll
                    }, y ? _ : j) : null), "li" === r && Object(o.h)("div", {
                        className: "inner-main"
                    }, Object(o.h)("div", {
                        className: "legend"
                    }, Object(o.h)("span", {
                        className: "legend-key",
                        "aria-hidden": !0
                    }, k), Object(o.h)("h2", {
                        class: "custom-header"
                    }, w)), n.legIntVendors.slice(0, O ? n.legIntVendors.length : 3).map((function(e) {
                        return Object(o.h)(a.a, {
                            vendor: e,
                            key: e.vendorId,
                            language: d,
                            settings: c,
                            force: g,
                            accordionOpen: v
                        })
                    })), n.legIntVendors.length > 3 ? Object(o.h)("div", {
                        className: "view-all",
                        onClick: this.toggleLiAll
                    }, O ? _ : j) : null)))
                }, t
            }(r.Component)
    },
    "5Hd3": function(e, t, n) {
        e.exports = n.p + "a4e6bfc7a854c6ebc18a33b694e9dc37.svg"
    },
    "5QLj": function() {},
    "5ehb": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return l
        }));
        var o = n("2mXy"),
            r = n("FdF9"),
            a = n("HbQw"),
            i = n.n(a),
            s = n("o1E3"),
            c = function(e) {
                var t = e.vendor;
                return Object(o.h)("a", {
                    tabIndex: "-1",
                    href: t.policyUrl,
                    target: "_blank",
                    className: "vendor-tag linked"
                }, Object(o.h)("span", null, t.name), Object(o.h)("img", {
                    src: i.a,
                    alt: ""
                }))
            },
            l = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        open: !1
                    }, t.toggleAccordion = function() {
                        var e = t.content,
                            n = !t.state.open;
                        t.setState({
                            open: n
                        }, t.props.force), e.style.maxHeight = n ? e.scrollHeight + "px" : null
                    }, t.openLink = function() {
                        return window.open(t.props.vendor.policyUrl, "_blank")
                    }, t
                }
                var n, r;
                return r = e, (n = t).prototype = Object.create(r.prototype), n.prototype.constructor = n, n.__proto__ = r, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.vendor,
                        r = t.settings,
                        a = t.language,
                        l = t.dev,
                        u = t.accordionOpen,
                        p = t.isSpecialPurpose,
                        d = this.state.open,
                        g = n.cookies ? n.cookies.length : 0,
                        f = n.cookies || [],
                        h = Object(s.u)(Boolean(l), r, "cookieText", a),
                        m = Object(s.u)(Boolean(l), r, "tableCookieText", a),
                        b = Object(s.u)(Boolean(l), r, "tableDomainText", a),
                        v = Object(s.u)(Boolean(l), r, "tableDurationText", a),
                        y = Object(s.u)(Boolean(l), r, "otherLetter", a);
                    return Object(o.h)("div", {
                        className: "toggle-vendor"
                    }, Object(o.h)("div", {
                        style: {
                            position: "relative"
                        }
                    }, Object(o.h)("button", {
                        tabIndex: u || void 0 === u ? 0 : -1,
                        className: d ? "expand active" : "expand",
                        onClick: g > 0 ? this.toggleAccordion : this.openLink
                    }, g > 0 ? Object(o.h)("span", {
                        className: "plusminus"
                    }, d ? "-" : "+") : Object(o.h)("img", {
                        src: i.a,
                        alt: ""
                    }), Object(o.h)("span", {
                        style: {
                            padding: "0 5px"
                        }
                    }, n.name), "IAB" !== n.vendorType && !p && Object(o.h)("span", {
                        className: "legend-key",
                        "aria-hidden": !0
                    }, y), g > 0 ? Object(o.h)("span", {
                        style: {
                            marginLeft: "5px"
                        }
                    }, "(", g, " ", h, ")") : null)), Object(o.h)("div", {
                        ref: function(t) {
                            return e.content = t
                        },
                        className: "content"
                    }, Object(o.h)("div", {
                        className: "inner-content"
                    }, Object(o.h)(c, {
                        vendor: n
                    }), g > 0 ? Object(o.h)("table", {
                        className: "tvtbl"
                    }, Object(o.h)("tr", null, Object(o.h)("th", null, m), Object(o.h)("th", null, b), Object(o.h)("th", null, v)), f.map((function(e) {
                        return Object(o.h)("tr", null, Object(o.h)("td", null, Object(o.h)("span", null, e.name)), Object(o.h)("td", null, e.domain), Object(o.h)("td", null, Object(o.h)("span", null, e.cookieLifeSpan)))
                    }))) : null)))
                }, t
            }(r.Component)
    },
    "5oGf": function(e, t, n) {
        "use strict";

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        n.d(t, "c", (function() {
            return s
        })), n.d(t, "d", (function() {
            return c
        })), n.d(t, "a", (function() {
            return l
        })), n.d(t, "b", (function() {
            return u
        })), n.d(t, "e", (function() {
            return p
        })), n.d(t, "f", (function() {
            return d
        }));
        n("2mXy");
        var a = n("FdF9"),
            i = n("gm8T"),
            s = (n("o1E3"), function(e, t) {
                t = t || {
                    hover: {}
                };
                var n = JSON.stringify(e),
                    i = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? o(n, !0).forEach((function(t) {
                                r(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, t.hover),
                    s = Object(a.useState)(""),
                    c = s[0],
                    l = s[1];
                return Object(a.useEffect)((function() {
                    var e = "";
                    t.current !== n && t.highlight !== n || (e += " on-active"), l(e)
                }), [t.current, t.highlight, n]), {
                    devActions: i,
                    devClass: c,
                    pathString: n
                }
            }),
            c = function() {
                for (var e = Object(a.useContext)(i.f), t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                Object(a.useEffect)(e, n)
            },
            l = function(e, t) {
                e && e.current && t && setTimeout((function() {
                    for (var n, o = e.current.getBoundingClientRect(), r = o.left, s = o.right, c = t.getBoundingClientRect(), l = c.right, u = c.left, p = 0; p < t.children.length; p++) {
                        var d = t.children[p];
                        "switch" === d.getAttribute("role") && (n = d)
                    }
                    u < r ? (t.classList.remove("focusable"), n && n.classList.remove("focusable")) : l > s ? (t.classList.remove("focusable"), n && n.classList.remove("focusable")) : (t.classList.add("focusable"), n && n.classList.add("focusable")), Object(a.useContext)(i.f)()
                }), 100)
            },
            u = function(e, t) {
                var n = Object(a.useState)(0),
                    o = n[0],
                    r = n[1],
                    i = Object(a.useState)(!1),
                    s = i[0],
                    c = i[1],
                    l = Object(a.useState)(!1),
                    u = l[0],
                    p = l[1];
                Object(a.useEffect)((function() {
                    t.current && e.current && setTimeout((function() {
                        for (var n = e.current.getBoundingClientRect(), r = n.left, a = n.right, i = t.current.children, s = 0; s < i.length; s++) {
                            var l = i[s].getBoundingClientRect(),
                                u = l.right;
                            if (l.left < r && p(!0), u > a) return c(!0), void(o >= 0 && p(!1))
                        }
                        c(!1)
                    }), 100)
                }), [o]);
                return {
                    state: [o, function(n) {
                        return function(a) {
                            if ((13 === a.keyCode || void 0 === a.keyCode) && t.current && e.current) {
                                var i = function() {
                                    var a = e.current.getBoundingClientRect(),
                                        i = a.left,
                                        s = a.right;
                                    if ("left" === n) {
                                        if (o > 10) return {
                                            v: void 0
                                        };
                                        for (var c = t.current.children, l = function(e) {
                                                var t = c[e],
                                                    n = t.getBoundingClientRect().left;
                                                if (n < i) return r((function(e) {
                                                    var o = Math.abs(i - n) + e + t.offsetWidth / 2;
                                                    return o > 5 ? 5 : o
                                                })), {
                                                    v: {
                                                        v: void 0
                                                    }
                                                }
                                            }, u = c.length - 1; u >= 0; u--) {
                                            var p = l(u);
                                            if ("object" == typeof p) return p.v
                                        }
                                    } else if ("right" === n) {
                                        if (t.current.getBoundingClientRect().right / s < .75) return {
                                            v: void 0
                                        };
                                        for (var d = t.current.children, g = function(e) {
                                                var t = d[e],
                                                    n = t.getBoundingClientRect().right;
                                                if (n > s) return r((function(e) {
                                                    return e - Math.abs(s - n) - t.offsetWidth / 2
                                                })), {
                                                    v: {
                                                        v: void 0
                                                    }
                                                }
                                            }, f = 0; f < d.length; f++) {
                                            var h = g(f);
                                            if ("object" == typeof h) return h.v
                                        }
                                    }
                                }();
                                if ("object" == typeof i) return i.v
                            }
                        }
                    }],
                    canGoRight: s,
                    canGoLeft: u,
                    resetAdjustment: function() {
                        return r(5)
                    }
                }
            },
            p = function(e) {
                return void 0 === e && (e = function() {}),
                    function() {
                        var t = Object(a.useContext)(i.b),
                            n = t.devOnClick,
                            o = t.dev;
                        return o ? n.apply(void 0, arguments) : e.apply(void 0, arguments)
                    }
            },
            d = function(e) {
                return function(t) {
                    var n = Object(a.useContext)(i.e);
                    return Object(a.useContext)(i.b).dev ? e.languages[e.selectedLanguage] && e.languages[e.selectedLanguage][t] ? e.languages[e.selectedLanguage][t] : e.languages[n] && e.languages[n][t] ? e.languages[n][t] : e[t] : e.languages[n] && e.languages[n][t] || e[t]
                }
            }
    },
    "78X1": function(e, t, n) {
        "use strict";

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(n, !0).forEach((function(t) {
                    s(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var c = n("2mXy"),
            l = n("FdF9"),
            u = n("o1E3"),
            p = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                var n, o;
                return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.checked,
                        o = t.value,
                        r = t.dev,
                        a = t.settings,
                        i = t.language,
                        s = t.page,
                        l = n ? a.toggleColor : a.toggleOffColor,
                        p = Object(u.u)(Boolean(r), a, "toggleOnText", i),
                        d = Object(u.u)(Boolean(r), a, "toggleOffText", i),
                        g = p || d ? " has-text" : "",
                        f = n ? "cat-switch checked" + g : "cat-switch" + g;
                    return Object(c.h)("button", {
                        className: f,
                        tabIndex: "0",
                        type: "button",
                        role: "switch",
                        "aria-checked": n ? "true" : "false",
                        onKeyDown: function(t) {
                            return Object(u.q)(t.key) && e.props.toggle(o._id, !n, s)
                        }
                    }, Object(c.h)("span", {
                        className: n ? "slider round is-checked" : "slider round",
                        style: {
                            backgroundColor: l
                        },
                        onClick: function() {
                            return e.props.toggle(o._id, !n, s)
                        }
                    }, n ? p : d))
                }, t
            }(l.Component),
            d = function(e) {
                void 0 === e && (e = {}), o(this, {
                    titleFont: {
                        fontSize: 14,
                        fontWeight: "700",
                        color: "#777777",
                        fontFamily: "arial, helvetica, sans-serif"
                    },
                    tableHeaderFont: {
                        fontSize: 16,
                        fontWeight: "700",
                        color: "#333333",
                        fontFamily: "arial, helvetica, sans-serif"
                    },
                    tableBodyFont: {
                        fontSize: 14,
                        fontWeight: "400",
                        color: "#555555",
                        fontFamily: "arial, helvetica, sans-serif"
                    },
                    useTitleFont: {
                        fontSize: 16,
                        fontWeight: "700",
                        color: "#333333",
                        fontFamily: "arial, helvetica, sans-serif"
                    },
                    useFont: {
                        fontSize: 14,
                        fontWeight: "400",
                        color: "#555555",
                        fontFamily: "arial, helvetica, sans-serif"
                    },
                    tableCellSpacing: {
                        paddingLeft: 8,
                        paddingRight: 8,
                        paddingTop: 12,
                        paddingBottom: 12
                    },
                    categoriesText: "Cookie Categories",
                    descriptionText: "Description",
                    consentText: "User Consent",
                    liText: "Legitimate Interest",
                    categoriesUseText: "Categories of Use",
                    linkConsentText: "Manage options for Consent",
                    linkLIText: "Manage options for Legitimate Interest",
                    link: {
                        fontWeight: "400",
                        color: "#1890ff",
                        textDecoration: "none"
                    },
                    hover: {
                        fontWeight: "400",
                        color: "#0880ef",
                        textDecoration: "underline"
                    },
                    toggleColor: "#47d747",
                    toggleOffColor: "#cccccc",
                    toggleNeutralColor: "#FFA800",
                    toggleOnText: "",
                    toggleOffText: "",
                    languages: {},
                    selectedLanguage: ""
                }), o(this, e)
            },
            g = n("KOA+");
        n("Pp7d");
        n.d(t, "a", (function() {
            return f
        }));
        var f = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    page: "consent",
                    loading: !0
                }, t.componentDidMount = function() {
                    t.loadStacks()
                }, t.componentDidUpdate = function(e) {
                    t.props.language !== e.language && t.loadStacks()
                }, t.loadStacks = function() {
                    var e = t.props,
                        n = e.siteId,
                        o = e.language;
                    n && !e.preloadMsg ? fetch((e.cmpv2Origin || "https://sourcepoint.mgr.consensu.org/tcfv2") + "/vendor-list/categories?siteId=" + n + (o ? "&consentLanguage=" + o.toLowerCase() : ""), {
                        insecure: !0
                    }).then((function(e) {
                        return e.json()
                    })).then((function(e) {
                        try {
                            t.props.updateStacks(e.categories), t.setState({
                                loading: !1
                            }, t.getConsent)
                        } catch (e) {
                            t.defaultStacks()
                        }
                    })) : t.defaultStacks()
                }, t.getConsent = function() {
                    var e = t.props;
                    fetch((e.cmpv2Origin || "https://sourcepoint.mgr.consensu.org/tcfv2") + "/consent/v3/" + e.siteId + "?consentUUID=" + e.consentUUID + "&consentLanguage=" + e.language + "&separateLegIntVendors=true", {
                        insecure: !0
                    }).then((function(e) {
                        return e ? e.json() : null
                    })).then((function(e) {
                        var n = [].concat(t.props.stacksData),
                            o = e && e.legIntCategories || [],
                            r = e && e.categories || [];
                        n = n.map((function(e) {
                            return e.legInt = !!(o.indexOf(e._id) > -1 || e.hasLegInt), e.consent = !!(r.indexOf(e._id) > -1 || e.hasConsent), e
                        })), t.props.updateStacks(n)
                    })).catch((function() {
                        return console.log("Error returning consent")
                    }))
                }, t.defaultStacks = function() {
                    t.setState({
                        loading: !1
                    }, t.getConsent)
                }, t.linkHover = function(e, t) {
                    e.target.style.color = t.color, e.target.style.textDecoration = t.textDecoration, e.target.style.fontWeight = t.fontWeight
                }, t.togglePage = function() {
                    return t.setState({
                        page: "consent" === t.state.page ? "legInt" : "consent"
                    })
                }, t.toggleCategory = function(e, n, o) {
                    var r = [].concat(t.props.stacksData);
                    r.map((function(t) {
                        return e === t._id && (t[o] = n), t
                    })), t.props.updateStacks(r)
                }, t
            }
            var n, o;
            return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                var e = this,
                    t = new d(this.props.component.settings),
                    n = this.props,
                    o = n.language,
                    a = n.stacksData,
                    s = {},
                    l = !1,
                    f = JSON.stringify(this.props.path);
                this.props.dev && (s = i({}, this.props.dev.hover), l = this.props.dev.current === f);
                var h = i({}, t.tableHeaderFont, {}, t.tableCellSpacing),
                    m = i({}, t.tableBodyFont, {}, t.tableCellSpacing),
                    b = i({}, t.useTitleFont),
                    v = i({}, t.useFont),
                    y = i({}, t.titleFont),
                    O = {
                        style: t.link,
                        onMouseOver: function(n) {
                            return e.linkHover(n, t.hover)
                        },
                        onMouseOut: function(n) {
                            return e.linkHover(n, t.link)
                        }
                    },
                    j = Object(u.u)(Boolean(this.props.dev), t, "linkConsentText", o),
                    _ = Object(u.u)(Boolean(this.props.dev), t, "linkLIText", o),
                    w = Object(u.u)(Boolean(this.props.dev), t, "categoriesText", o),
                    k = Object(u.u)(Boolean(this.props.dev), t, "descriptionText", o),
                    C = Object(u.u)(Boolean(this.props.dev), t, "consentText", o),
                    x = Object(u.u)(Boolean(this.props.dev), t, "liText", o),
                    T = Object(u.u)(Boolean(this.props.dev), t, "categoriesUseText", o),
                    P = (a || []).filter((function(e) {
                        return "CUSTOM" === e.type && e.hasConsent
                    })),
                    N = (a || []).filter((function(e) {
                        return "CUSTOM" === e.type && e.hasLegInt
                    })),
                    S = (a || []).filter((function(e) {
                        return "IAB_PURPOSE" === e.type || "IAB_STACK" === e.type
                    })),
                    L = this.state.page;
                "consent" === this.state.page && P.length <= 0 && N.length > 0 && (L = "legInt");
                var A = "message-component message-stacks no-children" + this.props.className;
                return Object(c.h)("div", r({
                    className: l ? A + " on-active" : A,
                    path: this.props.dev ? f : null
                }, s), P && P.length > 0 || N && N.length > 0 || S && S.length > 0 ? Object(c.h)("div", {
                    className: "categories-container"
                }, S && S.length > 0 ? Object(c.h)("div", null, Object(c.h)("div", {
                    className: "page-use-title",
                    style: b
                }, T), Object(c.h)("div", {
                    className: "page-use",
                    style: v
                }, S.map((function(e) {
                    return Object(c.h)("div", null, Object(c.h)("span", null, Object(c.h)("b", null, e.name, ": ")), Object(c.h)("span", null, e.description))
                })))) : null, P && P.length > 0 || N && N.length > 0 ? Object(c.h)("div", null, Object(c.h)("div", {
                    className: "page-title",
                    style: y
                }, "consent" === L ? C : x), Object(c.h)("table", {
                    className: "cat-tbl"
                }, Object(c.h)("thead", null, Object(c.h)("tr", null, Object(c.h)("th", {
                    style: h
                }, w), Object(c.h)("th", {
                    style: h
                }, k), Object(c.h)("th", {
                    style: h
                }, "consent" === L ? C : x))), Object(c.h)("tbody", null, ("consent" === L ? P : N).map((function(n) {
                    return Object(c.h)("tr", {
                        key: "cat-" + n._id
                    }, Object(c.h)("td", {
                        style: m
                    }, n.name), Object(c.h)("td", {
                        style: m,
                        dangerouslySetInnerHTML: {
                            __html: Object(g.a)({
                                html: n.description
                            })
                        }
                    }), Object(c.h)("td", {
                        style: m
                    }, Object(c.h)(p, {
                        value: n,
                        checked: n[L],
                        toggle: e.toggleCategory,
                        page: L,
                        dev: e.props.dev,
                        settings: t,
                        language: o
                    })))
                }))))) : null, "consent" === L && N.length > 0 || "legInt" === L && P.length > 0 ? Object(c.h)("div", {
                    className: "bottom-link"
                }, Object(c.h)("div", r({
                    tabIndex: "0"
                }, O, {
                    onClick: this.togglePage,
                    onKeyDown: function(t) {
                        return Object(u.q)(t.key) && e.togglePage
                    }
                }), "consent" === L ? _ : j)) : null) : Object(c.h)("div", {
                    className: "no-categories"
                }, "This vendor list does not have any categories/purposes yet"))
            }, t
        }(l.Component)
    },
    "7P9E": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }));
        var o = n("2mXy"),
            r = n("FdF9"),
            a = (n("Fh2O"), function(e) {
                var t = e.children,
                    n = e.veil,
                    a = e.safeBottom;
                return a = !1 !== a, Object(o.h)(r.default.Fragment, null, n, Object(o.h)("div", {
                    class: "message-safe-area-holder" + (a ? " message-safe-area-holder--safe-bottom" : "")
                }, Object(o.h)("div", {
                    class: "message-safe-area"
                }, t)))
            })
    },
    "8OL/": function(e, t, n) {
        "use strict";

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var s = n("2mXy"),
            c = (n("FdF9"), function(e) {
                void 0 === e && (e = {}), o(this, {
                    url: "",
                    link: "",
                    margin: {
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 10,
                        marginBottom: 10
                    },
                    border: {
                        borderWidth: 0,
                        borderColor: "#000000",
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderStyle: "solid"
                    },
                    width: {
                        type: "auto",
                        value: 100
                    },
                    height: {
                        type: "auto",
                        value: 100
                    },
                    align: "left",
                    alt: ""
                }), o(this, e)
            }),
            l = n("jgXh"),
            u = n.n(l),
            p = n("5oGf");
        n("CcD8");
        n.d(t, "a", (function() {
            return d
        }));
        var d = function(e) {
            var t = e.path,
                n = e.dev,
                o = e.className,
                l = new c(e.component.settings),
                d = Object(p.c)(t, n),
                g = d.devActions,
                f = d.devClass,
                h = d.pathString,
                m = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? a(n, !0).forEach((function(t) {
                            i(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(n).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, l.margin, {}, l.border, {
                    cursor: l.link ? "pointer" : ""
                }),
                b = l.margin,
                v = b.marginLeft,
                y = b.marginRight;
            m.width = "auto" === l.width.type ? "auto" : l.width.value + l.width.type, m.height = "auto" === l.height.type ? "auto" : l.height.value + l.height.type, "%" === l.width.type && (m.width = "calc(" + l.width.value + "% - " + (v + y) + "px"), "center" === l.align ? m.margin = "0 auto" : "right" === l.align ? m.marginLeft = "auto" : m.margin = null;
            var O = Object(s.h)("img", r({
                tabIndex: "1",
                alt: l.alt,
                src: l.url || u.a,
                path: h,
                className: "message-component message-image no-children" + o + f,
                style: m
            }, g));
            return l.link ? Object(s.h)("a", {
                href: l.link,
                target: "_blank"
            }, O) : O
        }
    },
    Abvc: function(e, t, n) {
        "use strict";

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }
        n.d(t, "a", (function() {
            return r
        }));
        var r = function(e) {
            void 0 === e && (e = {});
            o(this, {
                align: "flex-start",
                vertical: "flex-start",
                width: {
                    type: "auto",
                    value: 1
                },
                height: {
                    type: "auto",
                    value: 1
                },
                background_url: null,
                padding: {
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 10,
                    paddingBottom: 10
                },
                margin: {
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10,
                    marginBottom: 10
                },
                border: {
                    borderWidth: 0,
                    borderColor: "#000000",
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderStyle: "solid"
                }
            }, e)
        }
    },
    "Asb/": function(e, t, n) {
        "use strict";
        var o = {};
        n.r(o), n.d(o, "Column", (function() {
            return a.a
        })), n.d(o, "Image", (function() {
            return i.a
        })), n.d(o, "Row", (function() {
            return s.a
        })), n.d(o, "PrivacyManagerTCFv2", (function() {
            return c.a
        })), n.d(o, "PMTCFv2Inline", (function() {
            return l.a
        })), n.d(o, "PMCCPA", (function() {
            return u.a
        })), n.d(o, "PMButton", (function() {
            return p.a
        })), n.d(o, "IOSButton", (function() {
            return d.a
        })), n.d(o, "Stacks", (function() {
            return g.a
        })), n.d(o, "Categories", (function() {
            return f.a
        })), n.d(o, "Text", (function() {
            return h.a
        })), n.d(o, "Button", (function() {
            return m.a
        }));
        var r = n("2mXy"),
            a = (n("FdF9"), n("2EdD")),
            i = n("8OL/"),
            s = n("Rm/h"),
            c = n("yJvR"),
            l = n("hfBA"),
            u = n("BWpl"),
            p = n("WIag"),
            d = n("0d0D"),
            g = n("1mLn"),
            f = n("78X1"),
            h = n("Jvnj"),
            m = n("Ig1F"),
            b = n("gm8T"),
            v = n("o1E3");
        t.a = function(e) {
            return e.components.map((function(t, n) {
                var a = o[t.type],
                    i = [].concat(e.path);
                return i.push(n), Object(r.h)(b.a.Consumer, null, (function(n) {
                    return Object(r.h)(b.h.Consumer, null, (function(o) {
                        return Object(r.h)(a, {
                            path: i,
                            dev: e.dev,
                            key: "n-" + i,
                            component: t,
                            className: Object(v.b)(t.handle),
                            siteId: e.siteId,
                            message: e.message,
                            makeChoice: e.makeChoice,
                            updateStacks: e.updateStacks,
                            consentUUID: e.consentUUID,
                            language: e.language,
                            cmpv2Origin: e.cmpv2Origin,
                            width: e.width,
                            events: e.events,
                            preview: e.preview,
                            preloadMsg: e.preloadMsg,
                            stacksData: e.stacksData,
                            refetchStacks: o,
                            defaultLanguage: n,
                            allSelectionsMade: e.allSelectionsMade,
                            neutralPm: e.neutralPm
                        })
                    }))
                }))
            }))
        }
    },
    BWpl: function(e, t, n) {
        "use strict";

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(n, !0).forEach((function(t) {
                    a(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i() {
            return (i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function s() {
            return (s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function c(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(n, !0).forEach((function(t) {
                    u(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var p = n("2mXy"),
            d = n("FdF9"),
            g = n("o1E3"),
            f = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        isPurModelChecked: !1,
                        toggleDisplay: !0
                    }, t.toggle = function(e) {
                        var n = t.props,
                            o = n.child,
                            r = n.value,
                            a = n.consentType,
                            i = void 0 !== e ? e : !t.props.checked;
                        "purposes" === o || "features" === o ? (t.props.toggle(r._id, o, i, n.vendors, t.props.legInt), t.setState({
                            checked: i
                        })) : "vendors" === o ? (t.props.toggle(r._id, i, a), t.setState({
                            checked: i
                        })) : "stacks" === o && (t.props.toggle(r._id, i), t.setState({
                            checked: i
                        }))
                    }, t.componentDidMount = function() {
                        t.props.usePurModel && t.toggle(!0)
                    }, t.componentDidUpdate = function(e) {
                        t.props.usePurModel !== e.usePurModel && t.setState({
                            isPurModelChecked: t.props.usePurModel,
                            toggleDisplay: !t.state.toggleDisplay
                        }, (function() {
                            t.props.selectedLi || t.toggle(t.state.isPurModelChecked)
                        }))
                    }, t
                }
                var n, o;
                return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.type,
                        o = t.color,
                        r = t.offColor,
                        a = t.text,
                        i = t.offText,
                        s = t.colorActive,
                        c = t.offActiveColor,
                        l = t.checked,
                        u = t.locked,
                        d = !this.props.usePurModel || this.state.toggleDisplay && !this.props.usePurModel ? "inline-flex" : "none",
                        f = Object(p.h)("button", {
                            className: u ? "pm-toggle locked" : "pm-toggle",
                            tabIndex: "0",
                            type: "button",
                            role: "switch",
                            "aria-checked": l ? "true" : "false",
                            onKeyDown: function(t) {
                                return Object(g.q)(t.key) && e.toggle(!l)
                            },
                            style: {
                                display: d
                            }
                        }, Object(p.h)("span", {
                            className: "off",
                            style: {
                                backgroundColor: l ? "transparent" : r,
                                color: l ? "#000000" : c,
                                borderColor: l ? "#dddddd" : r
                            },
                            onClick: function() {
                                return e.toggle(!1)
                            }
                        }, i), Object(p.h)("span", {
                            className: "on",
                            style: {
                                backgroundColor: l ? o : "transparent",
                                color: l ? s : "#000000",
                                borderColor: l ? o : "#dddddd"
                            },
                            onClick: function() {
                                return e.toggle(!0)
                            }
                        }, a)),
                        h = l ? "pm-switch checked" : "pm-switch",
                        m = Object(p.h)("button", {
                            tabIndex: "0",
                            type: "button",
                            role: "switch",
                            "aria-checked": l ? "true" : "false",
                            className: u ? h + " locked" : h,
                            onKeyDown: function(t) {
                                t.stopPropagation(), Object(g.q)(t.key) && e.toggle()
                            },
                            style: {
                                display: d
                            }
                        }, Object(p.h)("span", {
                            className: "slider round",
                            style: {
                                backgroundColor: l ? o : r
                            },
                            onClick: function() {
                                return e.toggle()
                            }
                        }));
                    return "neutral" === n ? f : m
                }, t
            }(d.Component),
            h = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        open: !1
                    }, t.toggleAccordion = function(e) {
                        if (void 0 !== e && !["stack-toggle", "opener", "expand"].some((function(t) {
                                return e.target.className.includes(t)
                            }))) {
                            var n = t.panel,
                                o = !t.state.open;
                            t.setState({
                                open: o
                            }), n.style.maxHeight = o ? n.scrollHeight + "px" : null
                        }
                    }, t
                }
                var n, o;
                o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o;
                var a = t.prototype;
                return a.shouldComponentUpdate = function(e, t) {
                    var n = this.panel;
                    n && t.open && setTimeout((function() {
                        n.style.maxHeight = n.scrollHeight + "px"
                    }), 100)
                }, a.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.dev,
                        o = t.name,
                        a = t.accessName,
                        i = t.description,
                        s = t.content,
                        c = t.toggle,
                        l = t.child,
                        u = t.value,
                        h = t.language,
                        m = t.titleContent,
                        b = t.vendors,
                        v = t.isCustom,
                        y = t.locked,
                        O = t.consentType,
                        j = t.isApple,
                        _ = t.appleDataBrokerLetter,
                        w = this.state.open,
                        k = this.props.settings || {},
                        C = r({}, k.accordionsSpacing, {}, k.accordionsFont),
                        x = r({}, k.panelSpacing, {}, k.panelFont),
                        T = Object(g.u)(Boolean(n), k, "toggleText", h),
                        P = Object(g.u)(Boolean(n), k, "toggleOffText", h);
                    return Object(p.h)("div", {
                        className: "ccpa-stack",
                        tabindex: "0",
                        title: a || "Accordion",
                        onKeyDown: function(t) {
                            return Object(g.q)(t.key) && e.toggleAccordion(t)
                        }
                    }, Object(p.h)("div", {
                        className: v ? "stack-row custom" : "stack-row",
                        style: {
                            position: "relative"
                        }
                    }, Object(p.h)("div", {
                        className: w ? "accordion active" : "accordion",
                        style: C,
                        onClick: this.toggleAccordion
                    }, Object(p.h)("span", {
                        className: w ? "chevron up" : "chevron down"
                    }), w && !m ? Object(p.h)("b", null, o) : o, j && Object(p.h)("span", {
                        className: "legend-key apple-broker",
                        "aria-hidden": !0
                    }, _), m || null), c && Object(p.h)(f, {
                        accessName: a + " Toggle" || !1,
                        type: k.toggleType,
                        color: k.toggleColor,
                        colorActive: k.toggleActiveColor,
                        offColor: k.toggleOffColor,
                        offActiveColor: k.toggleOffActiveColor,
                        text: T,
                        offText: P,
                        toggle: c,
                        child: l,
                        vendors: b,
                        value: u,
                        locked: y,
                        checked: u.enabled,
                        consentType: O
                    })), Object(p.h)("div", {
                        ref: function(t) {
                            return e.panel = t
                        },
                        className: "panel"
                    }, Object(p.h)("p", {
                        style: r({}, x)
                    }, s ? d.default.cloneElement(s, {
                        accordionOpen: w
                    }) : i)))
                }, t
            }(d.Component),
            m = n("KOA+"),
            b = n("ffVi"),
            v = n.n(b),
            y = function(e) {
                var t = e.vendor;
                return Object(p.h)("a", {
                    tabIndex: "-1",
                    href: t.policyUrl,
                    target: "_blank",
                    className: "vendor-tag linked"
                }, Object(p.h)("span", null, t.name), Object(p.h)("img", {
                    src: v.a,
                    alt: ""
                }))
            },
            O = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        open: !1
                    }, t.toggleAccordion = function() {
                        var e = t.content,
                            n = !t.state.open;
                        t.setState({
                            open: n
                        }, t.props.force), e.style.maxHeight = n ? e.scrollHeight + "px" : null
                    }, t.openLink = function() {
                        return window.open(t.props.vendor.policyUrl, "_blank")
                    }, t
                }
                var n, o;
                return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.vendor,
                        o = t.settings,
                        r = t.language,
                        a = t.dev,
                        i = t.accordionOpen,
                        s = t.isSpecialPurpose,
                        c = this.state.open,
                        l = n.cookies ? n.cookies.length : 0,
                        u = n.cookies || [],
                        d = Object(g.u)(Boolean(a), o, "cookieText", r),
                        f = Object(g.u)(Boolean(a), o, "tableCookieText", r),
                        h = Object(g.u)(Boolean(a), o, "tableDomainText", r),
                        m = Object(g.u)(Boolean(a), o, "tableDurationText", r),
                        b = Object(g.u)(Boolean(a), o, "otherLetter", r);
                    return Object(p.h)("div", {
                        className: "toggle-vendor"
                    }, Object(p.h)("div", {
                        style: {
                            position: "relative"
                        }
                    }, Object(p.h)("button", {
                        tabIndex: i || void 0 === i ? 0 : -1,
                        className: c ? "expand active" : "expand",
                        onClick: l > 0 ? this.toggleAccordion : this.openLink
                    }, l > 0 ? Object(p.h)("span", {
                        className: "plusminus"
                    }, c ? "-" : "+") : Object(p.h)("img", {
                        src: v.a,
                        alt: ""
                    }), Object(p.h)("span", {
                        style: {
                            padding: "0 5px"
                        }
                    }, n.name), "IAB" !== n.vendorType && !s && Object(p.h)("span", {
                        className: "legend-key",
                        "aria-hidden": !0
                    }, b), l > 0 ? Object(p.h)("span", {
                        style: {
                            marginLeft: "5px"
                        }
                    }, "(", l, " ", d, ")") : null)), Object(p.h)("div", {
                        ref: function(t) {
                            return e.content = t
                        },
                        className: "content"
                    }, Object(p.h)("div", {
                        className: "inner-content"
                    }, Object(p.h)(y, {
                        vendor: n
                    }), l > 0 ? Object(p.h)("table", {
                        className: "tvtbl"
                    }, Object(p.h)("tr", null, Object(p.h)("th", null, f), Object(p.h)("th", null, h), Object(p.h)("th", null, m)), u.map((function(e) {
                        return Object(p.h)("tr", null, Object(p.h)("td", null, Object(p.h)("span", null, e.name)), Object(p.h)("td", null, e.domain), Object(p.h)("td", null, Object(p.h)("span", null, e.cookieLifeSpan)))
                    }))) : null)))
                }, t
            }(d.Component),
            j = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        consentAll: !1
                    }, t.toggleConsentAll = function() {
                        t.setState({
                            consentAll: !t.state.consentAll
                        }, t.props.force)
                    }, t
                }
                var n, o;
                return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.purpose,
                        o = t.settings,
                        r = t.language,
                        a = t.force,
                        i = t.dev,
                        s = t.isCustom,
                        c = t.accordionOpen,
                        l = this.state.consentAll,
                        u = Object(g.u)(Boolean(i), o, "viewAllText", r),
                        d = Object(g.u)(Boolean(i), o, "viewLessText", r),
                        f = s ? Object(p.h)("p", {
                            style: "margin-bottom:15px;",
                            dangerouslySetInnerHTML: {
                                __html: Object(m.a)({
                                    html: n.description
                                })
                            }
                        }) : Object(p.h)("p", {
                            style: "margin-bottom:15px;"
                        }, Object(g.f)(n.description));
                    return o.alphabetizeVendors && n.requiringConsentVendors && n.requiringConsentVendors.sort((function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                    })), Object(p.h)("div", {
                        className: "purpose-content"
                    }, f, Object(p.h)("div", null, Object(p.h)("div", {
                        className: "policies"
                    }, n.requiringConsentVendors.slice(0, l ? n.requiringConsentVendors.length : 3).map((function(e) {
                        return Object(p.h)(O, {
                            vendor: e,
                            key: e._id,
                            language: r,
                            settings: o,
                            force: a,
                            accordionOpen: c
                        })
                    })), n.requiringConsentVendors.length > 3 && Object(p.h)("div", {
                        tabIndex: c ? 0 : -1,
                        className: "view-all",
                        onClick: this.toggleConsentAll,
                        onKeyDown: function(t) {
                            return Object(g.q)(t.key) && e.toggleConsentAll()
                        }
                    }, l ? d : u))))
                }, t
            }(d.Component),
            _ = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        forceUpdate: !0
                    }, t.force = function() {
                        return t.setState({
                            forceUpdate: !t.state.forceUpdate
                        })
                    }, t
                }
                var n, o;
                return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.purposes,
                        o = t.settings,
                        r = t.language,
                        a = t.dev;
                    Object(g.u)(Boolean(a), o, "purposesText", r), Object(g.u)(Boolean(a), o, "purposeInfo", r);
                    return Object(p.h)("div", {
                        className: "pm-purposes"
                    }, n.map((function(t) {
                        return Object(p.h)(h, {
                            key: "purpose-" + t._id,
                            settings: o,
                            name: Object(p.h)("span", null, t.name),
                            accessName: t.name,
                            description: t.description,
                            child: "purposes",
                            language: r,
                            value: t,
                            vendors: t.requiringConsentVendors,
                            content: Object(p.h)(j, {
                                purpose: t,
                                language: r,
                                settings: o,
                                force: e.force,
                                dev: a
                            }),
                            toggle: e.props.toggleCategory,
                            updateMe: e.state.forceUpdate,
                            dev: a
                        })
                    })))
                }, t
            }(d.Component),
            w = n("5Hd3"),
            k = n.n(w),
            C = n("fYZW"),
            x = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        filter: ""
                    }, t.updateFilter = function(e) {
                        return t.setState({
                            filter: e.target.value
                        })
                    }, t
                }
                var n, o;
                return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.settings,
                        o = t.language,
                        r = t.dev,
                        a = this.state.filter,
                        i = t.vendors.filter((function(e) {
                            return "" === a || e.name.toLowerCase().indexOf(a.toLowerCase()) >= 0
                        })),
                        s = Object(g.u)(Boolean(r), n, "searchText", o);
                    return Object(p.h)("div", {
                        className: "pm-features pm-vendors"
                    }, Object(p.h)("div", {
                        className: "filter-container"
                    }, Object(p.h)("img", {
                        src: k.a,
                        alt: ""
                    }), Object(p.h)("input", {
                        className: "vendor-filter",
                        placeholder: s + "...",
                        name: "filter",
                        value: a,
                        onChange: this.updateFilter
                    })), i.map((function(t) {
                        return Object(p.h)(h, {
                            key: "vendor-" + t._id,
                            settings: e.props.settings,
                            name: Object(p.h)("span", null, t.name),
                            description: t.name,
                            child: "vendors",
                            language: o,
                            value: t,
                            content: Object(p.h)(C.a, {
                                dev: r,
                                vendor: t,
                                settings: n,
                                language: o
                            }),
                            toggle: e.props.toggleVendor
                        })
                    })))
                }, t
            }(d.Component),
            T = function(e) {
                void 0 === e && (e = {}), i(this, {
                    accordionsSpacing: {
                        paddingLeft: 16,
                        paddingRight: 16,
                        paddingTop: 16,
                        paddingBottom: 16
                    },
                    accordionsFont: {
                        fontSize: 13,
                        fontWeight: "500",
                        color: "#000000",
                        fontFamily: "arial, helvetica, sans-serif"
                    },
                    panelSpacing: {
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 5,
                        paddingBottom: 20
                    },
                    panelFont: {
                        fontSize: 13,
                        fontWeight: "400",
                        color: "#555555",
                        fontFamily: "arial, helvetica, sans-serif"
                    },
                    toggleType: "basic",
                    toggleColor: "#47d747",
                    toggleActiveColor: "#ffffff",
                    toggleText: "On",
                    toggleOffColor: "#cccccc",
                    toggleOffActiveColor: "#ffffff",
                    toggleOffText: "Off",
                    purposesText: "Purposes",
                    alphabetizeVendors: !1,
                    vendorsText: "Site Vendors",
                    vendorConsent: "Relying on consent for:",
                    searchText: "Search Site Vendors",
                    minHeight: {
                        type: "auto",
                        value: 1
                    },
                    maxHeight: {
                        type: "px",
                        value: 400
                    },
                    languages: {},
                    selectedLanguage: ""
                }), i(this, e)
            };
        n("HD23");
        n.d(t, "a", (function() {
            return P
        }));
        var P = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    tab: t.props.pmTab ? t.props.pmTab || "purposes" : t.props.message.defaultTab || "purposes",
                    loading: !0
                }, t.changeTab = function(e) {
                    return t.setState({
                        tab: e
                    })
                }, t.linkHover = function(e, t) {
                    e.target.style.color = t.color, e.target.style.textDecoration = t.textDecoration, e.target.style.fontWeight = t.fontWeight
                }, t
            }
            var n, o;
            return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                var e = this,
                    t = new T(this.props.component.settings),
                    n = this.props.language,
                    o = this.state.tab,
                    r = this.props.pmData || {},
                    a = {},
                    i = !1,
                    c = JSON.stringify(this.props.path);
                this.props.dev && (a = l({}, this.props.dev.hover), i = this.props.dev.current === c);
                var u = {};
                u.minHeight = "auto" === t.minHeight.type ? "auto" : t.minHeight.value + t.minHeight.type, u.maxHeight = "auto" === t.maxHeight.type ? "auto" : t.maxHeight.value + t.maxHeight.type;
                l({}, t.accordionsFont);
                var d = "message-component message-stacks pm-ccpa no-children" + this.props.className,
                    f = Object(g.u)(Boolean(this.props.dev), t, "purposesText", n),
                    h = Object(g.u)(Boolean(this.props.dev), t, "vendorsText", n);
                return t.alphabetizeVendors && (r.vendors || []).sort((function(e, t) {
                    return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                })), Object(p.h)("div", s({
                    className: i ? d + " on-active" : d,
                    path: this.props.dev ? c : null
                }, a), Object(p.h)("div", {
                    className: "pm-tabs"
                }, r.categories && r.categories.length > 0 && Object(p.h)("button", {
                    className: o.includes("purposes") ? "pm-tab active" : "pm-tab",
                    onClick: function() {
                        return e.changeTab("purposes")
                    },
                    onKeyDown: function(t) {
                        return Object(g.q)(t.key) && e.changeTab("purposes")
                    },
                    title: f
                }, f), r.vendors && r.vendors.length > 0 && Object(p.h)("button", {
                    className: o.includes("vendors") ? "pm-tab active" : "pm-tab",
                    onClick: function() {
                        return e.changeTab("vendors")
                    },
                    onKeyDown: function(t) {
                        return Object(g.q)(t.key) && e.changeTab("vendors")
                    },
                    title: h
                }, h)), o.includes("purposes") && void 0 !== r.categories && Object(p.h)("div", {
                    className: "pm-section",
                    style: u
                }, Object(p.h)(_, {
                    dev: this.props.dev,
                    purposes: r.categories || [],
                    language: this.props.language,
                    settings: t,
                    toggleCategory: this.props.toggleCategory
                })), o.includes("vendors") && void 0 !== r.vendors && Object(p.h)("div", {
                    className: "pm-section",
                    style: u
                }, Object(p.h)(x, {
                    dev: this.props.dev,
                    vendors: r.vendors || [],
                    settings: t,
                    language: this.props.language,
                    toggleVendor: this.props.toggleVendor
                })))
            }, t
        }(d.Component)
    },
    CcD8: function() {},
    CujF: function() {},
    Cwyy: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("2mXy"),
            r = function(e) {
                return e && e.default ? e.default : e
            };
        if ("function" == typeof r(n("XYkp"))) {
            var a = document.body.firstElementChild;
            0,
            function() {
                var e = r(n("XYkp")),
                    t = {},
                    i = document.querySelector('[type="__PREACT_CLI_DATA__"]');
                i && (t = JSON.parse(i.innerHTML).preRenderData);
                var s = {
                    preRenderData: t
                };
                a = Object(o.render)(Object(o.h)(e, {
                    CLI_DATA: s
                }), document.body, a)
            }()
        }
    },
    D44D: function(e, t, n) {
        "use strict";
        (function(e, o) {
            var r = n("FdF9"),
                a = n("gm8T");
            n("Hm76");
            t.a = function(t) {
                function n() {
                    var e = s.current;
                    e && (f(e.scrollTop === e.scrollHeight - e.offsetHeight), b(0 === e.scrollTop))
                }
                var i = t.children,
                    s = t.pRef,
                    c = t.settings;
                if (!Object(r.useContext)(a.c)) return i;
                Object(r.useContext)(a.f)();
                var l = Object(r.useState)(!1),
                    u = l[0],
                    p = l[1],
                    d = Object(r.useState)(!1),
                    g = d[0],
                    f = d[1],
                    h = Object(r.useState)(!1),
                    m = h[0],
                    b = h[1];
                Object(r.useEffect)(n), Object(r.useEffect)((function() {
                    var e = s.current;
                    e && p(e.scrollHeight > e.clientHeight)
                }));
                var v = function(e) {
                    return function(t) {
                        if ("Enter" === t.key) {
                            var o = s.current;
                            o && ("DOWN" === e ? o.scrollTop += .05 * o.scrollHeight : o.scrollTop -= .05 * o.scrollHeight, n())
                        }
                    }
                };
                return e("span", {
                    className: "text-container"
                }, u && e(o, null, e("div", {
                    tabIndex: "-1",
                    onKeyDown: v("UP"),
                    className: "focusable scroll-arrow-container up"
                }, e("div", {
                    style: {
                        borderColor: c.arrowColor
                    },
                    className: "scroll-arrow up " + (m ? "fade" : null)
                })), e("div", {
                    tabIndex: "-1",
                    onKeyDown: v("DOWN"),
                    className: "focusable scroll-arrow-container down"
                }, e("div", {
                    style: {
                        borderColor: c.arrowColor
                    },
                    className: "scroll-arrow down " + (g ? "fade" : null)
                }))), i)
            }
        }).call(this, n("2mXy").h, n("2mXy").Fragment)
    },
    "DBc/": function() {},
    EgWA: function() {},
    FdF9: function(e, t, n) {
        "use strict";

        function o(e) {
            V.options.__h && V.options.__h(M);
            var t = M.__H || (M.__H = {
                t: [],
                u: []
            });
            return e >= t.t.length && t.t.push({}), t.t[e]
        }

        function r(e) {
            return a(v, e)
        }

        function a(e, t, n) {
            var r = o(F++);
            return r.__c || (r.__c = M, r.i = [n ? n(t) : v(void 0, t), function(t) {
                var n = e(r.i[0], t);
                r.i[0] !== n && (r.i[0] = n, r.__c.setState({}))
            }]), r.i
        }

        function i(e, t) {
            var n = o(F++);
            b(n.o, t) && (n.i = e, n.o = t, M.__H.u.push(n))
        }

        function s(e, t) {
            var n = o(F++);
            b(n.o, t) && (n.i = e, n.o = t, M.__h.push(n))
        }

        function c(e) {
            return u((function() {
                return {
                    current: e
                }
            }), [])
        }

        function l(e, t, n) {
            s((function() {
                "function" == typeof e ? e(t()) : e && (e.current = t())
            }), null == n ? n : n.concat(e))
        }

        function u(e, t) {
            var n = o(F++);
            return b(n.o, t) ? (n.o = t, n.v = e, n.i = e()) : n.i
        }

        function p(e, t) {
            return u((function() {
                return e
            }), t)
        }

        function d(e) {
            var t = M.context[e.__c];
            if (!t) return e.__;
            var n = o(F++);
            return null == n.i && (n.i = !0, t.sub(M)), t.props.value
        }

        function g(e, t) {
            V.options.useDebugValue && V.options.useDebugValue(t ? t(e) : e)
        }

        function f() {
            H.some((function(e) {
                e.__P && (e.__H.u.forEach(h), e.__H.u.forEach(m), e.__H.u = [])
            })), H = []
        }

        function h(e) {
            e.m && e.m()
        }

        function m(e) {
            var t = e.i();
            "function" == typeof t && (e.m = t)
        }

        function b(e, t) {
            return !e || t.some((function(t, n) {
                return t !== e[n]
            }))
        }

        function v(e, t) {
            return "function" == typeof t ? t(e) : t
        }

        function y(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function O(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }

        function j(e) {
            this.__u = [], this.__f = e.fallback
        }

        function _(e) {
            function t(t) {
                if (n || (n = e()).then((function(e) {
                        o = e.default
                    }), (function(e) {
                        r = e
                    })), r) throw r;
                if (!o) throw n;
                return Object(V.createElement)(o, t)
            }
            var n, o, r;
            return t.displayName = "Lazy", t.t = !0, t
        }

        function w(e) {
            return T.bind(null, e)
        }

        function k(e, t, n) {
            if (null == t.__k)
                for (; t.firstChild;) O(t.firstChild);
            return Object(V.render)(e, t), "function" == typeof n && n(), e ? e.__c : null
        }

        function C(e) {
            var t = this,
                n = e.container,
                o = Object(V.h)(J, {
                    context: t.context
                }, e.vnode);
            return t.i && t.i !== n && (t.l.parentNode && t.i.removeChild(t.l), Object(V._unmount)(t.s), t.v = !1), e.vnode ? t.v ? (n.__k = t.__k, Object(V.render)(o, n), t.__k = n.__k) : (t.l = document.createTextNode(""), Object(V.hydrate)("", n), n.appendChild(t.l), t.v = !0, t.i = n, Object(V.render)(o, n, t.l), t.__k = this.l.__k) : t.v && (t.l.parentNode && t.i.removeChild(t.l), Object(V._unmount)(t.s)), t.s = o, t.componentWillUnmount = function() {
                t.l.parentNode && t.i.removeChild(t.l), Object(V._unmount)(t.s)
            }, null
        }

        function x(e, t) {
            return Object(V.h)(C, {
                vnode: e,
                container: t
            })
        }

        function T() {
            var e = V.h.apply(void 0, arguments),
                t = e.type,
                n = e.props;
            return "function" != typeof t && (n.defaultValue && (n.value || 0 === n.value || (n.value = n.defaultValue), delete n.defaultValue), Array.isArray(n.value) && n.multiple && "select" === t && (Object(V.toChildArray)(n.children).forEach((function(e) {
                -1 != n.value.indexOf(e.props.value) && (e.props.selected = !0)
            })), delete n.value), function(e, t) {
                var n, o, r;
                for (r in t)
                    if (n = $.test(r)) break;
                if (n)
                    for (r in o = e.props = {}, t) o[$.test(r) ? r.replace(/([A-Z0-9])/, "-$1").toLowerCase() : r] = t[r]
            }(e, n)), e.preactCompatNormalized = !1, P(e)
        }

        function P(e) {
            return e.preactCompatNormalized = !0,
                function(e) {
                    var t = e.props;
                    (t.class || t.className) && (ee.enumerable = "className" in t, t.className && (t.class = t.className), Object.defineProperty(t, "className", ee))
                }(e), e
        }

        function N(e) {
            return S(e) ? P(V.cloneElement.apply(null, arguments)) : e
        }

        function S(e) {
            return !!e && e.$$typeof === G
        }

        function L(e) {
            return !!e.__k && (Object(V.render)(null, e), !0)
        }

        function A(e, t) {
            for (var n in e)
                if ("__source" !== n && !(n in t)) return !0;
            for (var o in t)
                if ("__source" !== o && e[o] !== t[o]) return !0;
            return !1
        }

        function I(e) {
            return e && (e.base || 1 === e.nodeType && e) || null
        }

        function D(e, t) {
            function n(e) {
                var n = this.props.ref,
                    o = n == e.ref;
                return !o && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !o : A(this.props, e)
            }

            function o(t) {
                return this.shouldComponentUpdate = n, Object(V.h)(e, y({}, t))
            }
            return o.prototype.isReactComponent = !0, o.displayName = "Memo(" + (e.displayName || e.name) + ")", o.t = !0, o
        }

        function E(e) {
            function t(t) {
                var n = y({}, t);
                return delete n.ref, e(n, t.ref)
            }
            return t.prototype.isReactComponent = !0, t.t = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
        }

        function B(e, t) {
            e["UNSAFE_" + t] && !e[t] && Object.defineProperty(e, t, {
                configurable: !1,
                get: function() {
                    return this["UNSAFE_" + t]
                },
                set: function(e) {
                    this["UNSAFE_" + t] = e
                }
            })
        }
        n.r(t);
        var F, M, R, V = n("2mXy"),
            H = [],
            U = V.options.__r,
            q = V.options.diffed,
            z = V.options.__c,
            W = V.options.unmount;
        V.options.__r = function(e) {
            U && U(e), F = 0, (M = e.__c).__H && (M.__H.u.forEach(h), M.__H.u.forEach(m), M.__H.u = [])
        }, V.options.diffed = function(e) {
            q && q(e);
            var t = e.__c;
            if (t) {
                var n = t.__H;
                n && n.u.length && (1 !== H.push(t) && R === V.options.requestAnimationFrame || ((R = V.options.requestAnimationFrame) || function(e) {
                    var t, n = function() {
                            clearTimeout(o), cancelAnimationFrame(t), setTimeout(e)
                        },
                        o = setTimeout(n, 100);
                    "undefined" != typeof window && (t = requestAnimationFrame(n))
                })(f))
            }
        }, V.options.__c = function(e, t) {
            t.some((function(e) {
                e.__h.forEach(h), e.__h = e.__h.filter((function(e) {
                    return !e.i || m(e)
                }))
            })), z && z(e, t)
        }, V.options.unmount = function(e) {
            W && W(e);
            var t = e.__c;
            if (t) {
                var n = t.__H;
                n && n.t.forEach((function(e) {
                    return e.m && e.m()
                }))
            }
        }, n.d(t, "version", (function() {
            return X
        })), n.d(t, "Children", (function() {
            return Z
        })), n.d(t, "render", (function() {
            return k
        })), n.d(t, "hydrate", (function() {
            return k
        })), n.d(t, "unmountComponentAtNode", (function() {
            return L
        })), n.d(t, "createPortal", (function() {
            return x
        })), n.d(t, "createElement", (function() {
            return T
        })), n.d(t, "createFactory", (function() {
            return w
        })), n.d(t, "cloneElement", (function() {
            return N
        })), n.d(t, "isValidElement", (function() {
            return S
        })), n.d(t, "findDOMNode", (function() {
            return I
        })), n.d(t, "PureComponent", (function() {
            return te
        })), n.d(t, "memo", (function() {
            return D
        })), n.d(t, "forwardRef", (function() {
            return E
        })), n.d(t, "unstable_batchedUpdates", (function() {
            return oe
        })), n.d(t, "Suspense", (function() {
            return j
        })), n.d(t, "lazy", (function() {
            return _
        })), n.d(t, "useState", (function() {
            return r
        })), n.d(t, "useReducer", (function() {
            return a
        })), n.d(t, "useEffect", (function() {
            return i
        })), n.d(t, "useLayoutEffect", (function() {
            return s
        })), n.d(t, "useRef", (function() {
            return c
        })), n.d(t, "useImperativeHandle", (function() {
            return l
        })), n.d(t, "useMemo", (function() {
            return u
        })), n.d(t, "useCallback", (function() {
            return p
        })), n.d(t, "useContext", (function() {
            return d
        })), n.d(t, "useDebugValue", (function() {
            return g
        })), n.d(t, "createContext", (function() {
            return V.createContext
        })), n.d(t, "createRef", (function() {
            return V.createRef
        })), n.d(t, "Fragment", (function() {
            return V.Fragment
        })), n.d(t, "Component", (function() {
            return V.Component
        }));
        var K = V.options.__e;
        V.options.__e = function(e, t, n) {
            if (e.then && n)
                for (var o, r = t; r = r.__;)
                    if ((o = r.__c) && o.o) return n && (t.__e = n.__e, t.__k = n.__k), void o.o(e);
            K(e, t, n)
        }, (j.prototype = new V.Component).o = function(e) {
            var t = this;
            t.__u.push(e);
            var n = function() {
                t.__u[t.__u.indexOf(e)] = t.__u[t.__u.length - 1], t.__u.pop(), 0 == t.__u.length && (t.__f && Object(V._unmount)(t.__f), t.__v.__e = null, t.__v.__k = t.state.u, t.setState({
                    u: null
                }))
            };
            null == t.state.u && (t.__f = t.__f && Object(V.cloneElement)(t.__f), t.setState({
                u: t.__v.__k
            }), function e(t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    null != o && ("function" != typeof o.type && o.__e ? O(o.__e) : o.__k && e(o.__k))
                }
            }(t.__v.__k), t.__v.__k = []), e.then(n, n)
        }, j.prototype.render = function(e, t) {
            return t.u ? this.__f : e.children
        };
        var X = "16.8.0",
            G = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
            $ = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,
            Y = V.options.event;
        V.options.event = function(e) {
            return Y && (e = Y(e)), e.persist = function() {}, e.nativeEvent = e
        };
        var J = function() {
                function e() {}
                var t = e.prototype;
                return t.getChildContext = function() {
                    return this.props.context
                }, t.render = function(e) {
                    return e.children
                }, e
            }(),
            Q = function(e, t) {
                return e ? Object(V.toChildArray)(e).map(t) : null
            },
            Z = {
                map: Q,
                forEach: Q,
                count: function(e) {
                    return e ? Object(V.toChildArray)(e).length : 0
                },
                only: function(e) {
                    if (1 !== (e = Object(V.toChildArray)(e)).length) throw new Error("Children.only() expects only one child.");
                    return e[0]
                },
                toArray: V.toChildArray
            },
            ee = {
                configurable: !0,
                get: function() {
                    return this.class
                }
            },
            te = function(e) {
                function t(t) {
                    var n;
                    return (n = e.call(this, t) || this).isPureReactComponent = !0, n
                }
                var n, o;
                return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.shouldComponentUpdate = function(e, t) {
                    return A(this.props, e) || A(this.state, t)
                }, t
            }(V.Component);
        V.Component.prototype.isReactComponent = {};
        var ne = V.options.vnode;
        V.options.vnode = function(e) {
            e.$$typeof = G,
                function() {
                    var t = e.type,
                        n = e.props;
                    if (n && "string" == typeof t) {
                        var o = {};
                        for (var r in n) /^on(Ani|Tra)/.test(r) && (n[r.toLowerCase()] = n[r], delete n[r]), o[r.toLowerCase()] = r;
                        if (o.ondoubleclick && (n.ondblclick = n[o.ondoubleclick], delete n[o.ondoubleclick]), o.onbeforeinput && (n.onbeforeinput = n[o.onbeforeinput], delete n[o.onbeforeinput]), o.onchange && ("textarea" === t || "input" === t.toLowerCase() && !/^fil|che|ra/i.test(n.type))) {
                            var a = o.oninput || "oninput";
                            n[a] || (n[a] = n[o.onchange], delete n[o.onchange])
                        }
                    }
                }();
            var t = e.type;
            t && t.t && e.ref && (e.props.ref = e.ref, e.ref = null), "function" == typeof t && !t.p && t.prototype && (B(t.prototype, "componentWillMount"), B(t.prototype, "componentWillReceiveProps"), B(t.prototype, "componentWillUpdate"), t.p = !0), ne && ne(e)
        };
        var oe = function(e, t) {
            return e(t)
        };
        t.default = {
            useState: r,
            useReducer: a,
            useEffect: i,
            useLayoutEffect: s,
            useRef: c,
            useImperativeHandle: l,
            useMemo: u,
            useCallback: p,
            useContext: d,
            useDebugValue: g,
            version: "16.8.0",
            Children: Z,
            render: k,
            hydrate: k,
            unmountComponentAtNode: L,
            createPortal: x,
            createElement: T,
            createContext: V.createContext,
            createFactory: w,
            cloneElement: N,
            createRef: V.createRef,
            Fragment: V.Fragment,
            isValidElement: S,
            findDOMNode: I,
            Component: V.Component,
            PureComponent: te,
            memo: D,
            forwardRef: E,
            unstable_batchedUpdates: oe,
            Suspense: j,
            lazy: _
        }
    },
    Fh2O: function() {},
    G9YQ: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", (function() {
                return p
            }));
            var o = n("2mXy"),
                r = n("FdF9"),
                a = n("HbQw"),
                i = n.n(a),
                s = n("H6Cw"),
                c = n("o1E3"),
                l = function(e) {
                    var t = e.vendor,
                        n = e.accordionOpen;
                    return Object(o.h)("a", {
                        tabIndex: n ? 0 : -1,
                        href: t.policyUrl,
                        target: "_blank",
                        className: "vendor-tag linked"
                    }, Object(o.h)("span", null, t.name), Object(o.h)("img", {
                        src: i.a,
                        alt: ""
                    }))
                },
                u = function(e) {
                    var t = e.feature,
                        n = e.accordionOpen;
                    return e.settings.alphabetizeVendors && t && t.vendors && t.vendors.sort((function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                    })), Object(o.h)("div", {
                        className: "feature-content"
                    }, Object(o.h)("p", null, Object(c.f)(t.description)), t.vendors.length > 0 && Object(o.h)("div", {
                        className: "policies"
                    }, t.vendors.map((function(e) {
                        return Object(o.h)(l, {
                            vendor: e,
                            accordionOpen: n
                        })
                    }))))
                },
                p = function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    var r, a;
                    return a = t, (r = n).prototype = Object.create(a.prototype), r.prototype.constructor = r, r.__proto__ = a, n.prototype.render = function() {
                        var t = this,
                            n = this.props,
                            r = n.features,
                            a = n.specialFeatures,
                            i = n.settings,
                            l = n.language,
                            p = n.dev,
                            d = Object(c.u)(Boolean(p), i, "featuresText", l),
                            g = Object(c.u)(Boolean(p), i, "featuresInfo", l),
                            f = Object(c.u)(Boolean(p), i, "specialFeaturesText", l),
                            h = Object(c.u)(Boolean(p), i, "specialFeaturesInfo", l);
                        return Object(o.h)("div", {
                            className: "pm-features"
                        }, r.length > 0 && Object(o.h)(e, null, Object(o.h)("h2", {
                            id: "features-focus",
                            tabindex: "0",
                            className: "info-title"
                        }, d), Object(o.h)("p", {
                            className: "pm-sub-p"
                        }, g), r.map((function(e, n) {
                            return Object(o.h)(s.a, {
                                key: "purpose-" + e._id,
                                settings: t.props.settings,
                                name: e.name,
                                child: "features",
                                language: l,
                                value: e,
                                description: e.description,
                                content: Object(o.h)(u, {
                                    feature: e,
                                    settings: i
                                }),
                                index: n
                            })
                        }))), a.length > 0 && Object(o.h)(e, null, Object(o.h)("h2", {
                            className: "info-title"
                        }, f), Object(o.h)("p", {
                            className: "pm-sub-p"
                        }, h), a.map((function(e, n) {
                            return Object(o.h)(s.a, {
                                key: "special-purpose-" + e._id,
                                settings: t.props.settings,
                                name: e.name,
                                child: "features",
                                language: l,
                                value: e,
                                vendors: e.vendors,
                                description: e.description,
                                content: Object(o.h)(u, {
                                    feature: e,
                                    settings: i
                                }),
                                toggle: t.props.togglePurposeOrFeature,
                                dev: p,
                                index: n
                            })
                        }))))
                    }, n
                }(r.Component)
        }).call(this, n("2mXy").Fragment)
    },
    GeSn: function(e, t, n) {
        "use strict";

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function r(e, t) {
            return (r = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function a() {
            return (a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }() ? Reflect.construct : function(e, t, n) {
                var o = [null];
                o.push.apply(o, t);
                var a = new(Function.bind.apply(e, o));
                return n && r(a, n.prototype), a
            }).apply(null, arguments)
        }

        function i(e) {
            return function(e) {
                if (Array.isArray(e)) return s(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o
        }

        function c(e) {
            return function(t) {
                for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                return j(e, t, o)
            }
        }

        function l(e, t, n) {
            n = n || T, g && g(e, null);
            for (var o = t.length; o--;) {
                var r = t[o];
                if ("string" == typeof r) {
                    var a = n(r);
                    a !== r && (f(t) || (t[o] = a), r = a)
                }
                e[r] = !0
            }
            return e
        }

        function u(e) {
            var t, n = y(null);
            for (t in e) j(d, e, [t]) && (n[t] = e[t]);
            return n
        }

        function p(e, t) {
            for (; null !== e;) {
                var n = m(e, t);
                if (n) {
                    if (n.get) return c(n.get);
                    if ("function" == typeof n.value) return c(n.value)
                }
                e = h(e)
            }
            return function(e) {
                return console.warn("fallback value for", e), null
            }
        }
        n.d(t, "a", (function() {
            return te
        }));
        var d = Object.hasOwnProperty,
            g = Object.setPrototypeOf,
            f = Object.isFrozen,
            h = Object.getPrototypeOf,
            m = Object.getOwnPropertyDescriptor,
            b = Object.freeze,
            v = Object.seal,
            y = Object.create,
            O = "undefined" != typeof Reflect && Reflect,
            j = O.apply,
            _ = O.construct;
        j || (j = function(e, t, n) {
            return e.apply(t, n)
        }), b || (b = function(e) {
            return e
        }), v || (v = function(e) {
            return e
        }), _ || (_ = function(e, t) {
            return a(e, i(t))
        });
        var w, k = c(Array.prototype.forEach),
            C = c(Array.prototype.pop),
            x = c(Array.prototype.push),
            T = c(String.prototype.toLowerCase),
            P = c(String.prototype.match),
            N = c(String.prototype.replace),
            S = c(String.prototype.indexOf),
            L = c(String.prototype.trim),
            A = c(RegExp.prototype.test),
            I = (w = TypeError, function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return _(w, t)
            }),
            D = b(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
            E = b(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
            B = b(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
            F = b(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
            M = b(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
            R = b(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
            V = b(["#text"]),
            H = b(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
            U = b(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
            q = b(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
            z = b(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
            W = v(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
            K = v(/<%[\w\W]*|[\w\W]*%>/gm),
            X = v(/^data-[\-\w.\u00B7-\uFFFF]/),
            G = v(/^aria-[\-\w]+$/),
            $ = v(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
            Y = v(/^(?:\w+script|data):/i),
            J = v(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
            Q = v(/^html$/i),
            Z = function() {
                return "undefined" == typeof window ? null : window
            },
            ee = function(e, t) {
                if ("object" !== o(e) || "function" != typeof e.createPolicy) return null;
                var n = null;
                t.currentScript && t.currentScript.hasAttribute("data-tt-policy-suffix") && (n = t.currentScript.getAttribute("data-tt-policy-suffix"));
                var r = "dompurify" + (n ? "#" + n : "");
                try {
                    return e.createPolicy(r, {
                        createHTML: function(e) {
                            return e
                        },
                        createScriptURL: function(e) {
                            return e
                        }
                    })
                } catch (e) {
                    return console.warn("TrustedTypes policy " + r + " could not be created."), null
                }
            },
            te = function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z(),
                    n = function(t) {
                        return e(t)
                    };
                if (n.version = "2.4.0", n.removed = [], !t || !t.document || 9 !== t.document.nodeType) return n.isSupported = !1, n;
                var r = t.document,
                    a = t.document,
                    s = t.DocumentFragment,
                    c = t.HTMLTemplateElement,
                    d = t.Node,
                    g = t.Element,
                    f = t.NodeFilter,
                    h = t.NamedNodeMap,
                    m = void 0 === h ? t.NamedNodeMap || t.MozNamedAttrMap : h,
                    v = t.HTMLFormElement,
                    y = t.DOMParser,
                    O = t.trustedTypes,
                    j = g.prototype,
                    _ = p(j, "cloneNode"),
                    w = p(j, "nextSibling"),
                    te = p(j, "childNodes"),
                    ne = p(j, "parentNode");
                if ("function" == typeof c) {
                    var oe = a.createElement("template");
                    oe.content && oe.content.ownerDocument && (a = oe.content.ownerDocument)
                }
                var re = ee(O, r),
                    ae = re ? re.createHTML("") : "",
                    ie = a.implementation,
                    se = a.createNodeIterator,
                    ce = a.createDocumentFragment,
                    le = a.getElementsByTagName,
                    ue = r.importNode,
                    pe = {};
                try {
                    pe = u(a).documentMode ? a.documentMode : {}
                } catch (e) {}
                var de = {};
                n.isSupported = "function" == typeof ne && ie && void 0 !== ie.createHTMLDocument && 9 !== pe;
                var ge, fe, he = W,
                    me = K,
                    be = X,
                    ve = G,
                    ye = Y,
                    Oe = J,
                    je = $,
                    _e = null,
                    we = l({}, [].concat(i(D), i(E), i(B), i(M), i(V))),
                    ke = null,
                    Ce = l({}, [].concat(i(H), i(U), i(q), i(z))),
                    xe = Object.seal(Object.create(null, {
                        tagNameCheck: {
                            writable: !0,
                            configurable: !1,
                            enumerable: !0,
                            value: null
                        },
                        attributeNameCheck: {
                            writable: !0,
                            configurable: !1,
                            enumerable: !0,
                            value: null
                        },
                        allowCustomizedBuiltInElements: {
                            writable: !0,
                            configurable: !1,
                            enumerable: !0,
                            value: !1
                        }
                    })),
                    Te = null,
                    Pe = null,
                    Ne = !0,
                    Se = !0,
                    Le = !1,
                    Ae = !1,
                    Ie = !1,
                    De = !1,
                    Ee = !1,
                    Be = !1,
                    Fe = !1,
                    Me = !1,
                    Re = !0,
                    Ve = !1,
                    He = !0,
                    Ue = !1,
                    qe = {},
                    ze = null,
                    We = l({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
                    Ke = null,
                    Xe = l({}, ["audio", "video", "img", "source", "image", "track"]),
                    Ge = null,
                    $e = l({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                    Ye = "http://www.w3.org/1998/Math/MathML",
                    Je = "http://www.w3.org/2000/svg",
                    Qe = "http://www.w3.org/1999/xhtml",
                    Ze = Qe,
                    et = !1,
                    tt = ["application/xhtml+xml", "text/html"],
                    nt = null,
                    ot = a.createElement("form"),
                    rt = function(e) {
                        return e instanceof RegExp || e instanceof Function
                    },
                    at = function(e) {
                        nt && nt === e || (e && "object" === o(e) || (e = {}), e = u(e), ge = ge = -1 === tt.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE, fe = "application/xhtml+xml" === ge ? function(e) {
                            return e
                        } : T, _e = "ALLOWED_TAGS" in e ? l({}, e.ALLOWED_TAGS, fe) : we, ke = "ALLOWED_ATTR" in e ? l({}, e.ALLOWED_ATTR, fe) : Ce, Ge = "ADD_URI_SAFE_ATTR" in e ? l(u($e), e.ADD_URI_SAFE_ATTR, fe) : $e, Ke = "ADD_DATA_URI_TAGS" in e ? l(u(Xe), e.ADD_DATA_URI_TAGS, fe) : Xe, ze = "FORBID_CONTENTS" in e ? l({}, e.FORBID_CONTENTS, fe) : We, Te = "FORBID_TAGS" in e ? l({}, e.FORBID_TAGS, fe) : {}, Pe = "FORBID_ATTR" in e ? l({}, e.FORBID_ATTR, fe) : {}, qe = "USE_PROFILES" in e && e.USE_PROFILES, Ne = !1 !== e.ALLOW_ARIA_ATTR, Se = !1 !== e.ALLOW_DATA_ATTR, Le = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Ae = e.SAFE_FOR_TEMPLATES || !1, Ie = e.WHOLE_DOCUMENT || !1, Be = e.RETURN_DOM || !1, Fe = e.RETURN_DOM_FRAGMENT || !1, Me = e.RETURN_TRUSTED_TYPE || !1, Ee = e.FORCE_BODY || !1, Re = !1 !== e.SANITIZE_DOM, Ve = e.SANITIZE_NAMED_PROPS || !1, He = !1 !== e.KEEP_CONTENT, Ue = e.IN_PLACE || !1, je = e.ALLOWED_URI_REGEXP || je, Ze = e.NAMESPACE || Qe, e.CUSTOM_ELEMENT_HANDLING && rt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (xe.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && rt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (xe.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (xe.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ae && (Se = !1), Fe && (Be = !0), qe && (_e = l({}, i(V)), ke = [], !0 === qe.html && (l(_e, D), l(ke, H)), !0 === qe.svg && (l(_e, E), l(ke, U), l(ke, z)), !0 === qe.svgFilters && (l(_e, B), l(ke, U), l(ke, z)), !0 === qe.mathMl && (l(_e, M), l(ke, q), l(ke, z))), e.ADD_TAGS && (_e === we && (_e = u(_e)), l(_e, e.ADD_TAGS, fe)), e.ADD_ATTR && (ke === Ce && (ke = u(ke)), l(ke, e.ADD_ATTR, fe)), e.ADD_URI_SAFE_ATTR && l(Ge, e.ADD_URI_SAFE_ATTR, fe), e.FORBID_CONTENTS && (ze === We && (ze = u(ze)), l(ze, e.FORBID_CONTENTS, fe)), He && (_e["#text"] = !0), Ie && l(_e, ["html", "head", "body"]), _e.table && (l(_e, ["tbody"]), delete Te.tbody), b && b(e), nt = e)
                    },
                    it = l({}, ["mi", "mo", "mn", "ms", "mtext"]),
                    st = l({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                    ct = l({}, ["title", "style", "font", "a", "script"]),
                    lt = l({}, E);
                l(lt, B), l(lt, F);
                var ut = l({}, M);
                l(ut, R);
                var pt = function(e) {
                        x(n.removed, {
                            element: e
                        });
                        try {
                            e.parentNode.removeChild(e)
                        } catch (t) {
                            try {
                                e.outerHTML = ae
                            } catch (t) {
                                e.remove()
                            }
                        }
                    },
                    dt = function(e, t) {
                        try {
                            x(n.removed, {
                                attribute: t.getAttributeNode(e),
                                from: t
                            })
                        } catch (e) {
                            x(n.removed, {
                                attribute: null,
                                from: t
                            })
                        }
                        if (t.removeAttribute(e), "is" === e && !ke[e])
                            if (Be || Fe) try {
                                pt(t)
                            } catch (e) {} else try {
                                t.setAttribute(e, "")
                            } catch (e) {}
                    },
                    gt = function(e) {
                        var t, n;
                        if (Ee) e = "<remove></remove>" + e;
                        else {
                            var o = P(e, /^[\r\n\t ]+/);
                            n = o && o[0]
                        }
                        "application/xhtml+xml" === ge && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                        var r = re ? re.createHTML(e) : e;
                        if (Ze === Qe) try {
                            t = (new y).parseFromString(r, ge)
                        } catch (e) {}
                        if (!t || !t.documentElement) {
                            t = ie.createDocument(Ze, "template", null);
                            try {
                                t.documentElement.innerHTML = et ? "" : r
                            } catch (e) {}
                        }
                        var i = t.body || t.documentElement;
                        return e && n && i.insertBefore(a.createTextNode(n), i.childNodes[0] || null), Ze === Qe ? le.call(t, Ie ? "html" : "body")[0] : Ie ? t.documentElement : i
                    },
                    ft = function(e) {
                        return se.call(e.ownerDocument || e, e, f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT, null, !1)
                    },
                    ht = function(e) {
                        return "object" === o(d) ? e instanceof d : e && "object" === o(e) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
                    },
                    mt = function(e, t, o) {
                        de[e] && k(de[e], (function(e) {
                            e.call(n, t, o, nt)
                        }))
                    },
                    bt = function(e) {
                        var t, o;
                        if (mt("beforeSanitizeElements", e, null), (o = e) instanceof v && ("string" != typeof o.nodeName || "string" != typeof o.textContent || "function" != typeof o.removeChild || !(o.attributes instanceof m) || "function" != typeof o.removeAttribute || "function" != typeof o.setAttribute || "string" != typeof o.namespaceURI || "function" != typeof o.insertBefore)) return pt(e), !0;
                        if (A(/[\u0080-\uFFFF]/, e.nodeName)) return pt(e), !0;
                        var r = fe(e.nodeName);
                        if (mt("uponSanitizeElement", e, {
                                tagName: r,
                                allowedTags: _e
                            }), e.hasChildNodes() && !ht(e.firstElementChild) && (!ht(e.content) || !ht(e.content.firstElementChild)) && A(/<[/\w]/g, e.innerHTML) && A(/<[/\w]/g, e.textContent)) return pt(e), !0;
                        if ("select" === r && A(/<template/i, e.innerHTML)) return pt(e), !0;
                        if (!_e[r] || Te[r]) {
                            if (!Te[r] && yt(r)) {
                                if (xe.tagNameCheck instanceof RegExp && A(xe.tagNameCheck, r)) return !1;
                                if (xe.tagNameCheck instanceof Function && xe.tagNameCheck(r)) return !1
                            }
                            if (He && !ze[r]) {
                                var a = ne(e) || e.parentNode,
                                    i = te(e) || e.childNodes;
                                if (i && a)
                                    for (var s = i.length - 1; s >= 0; --s) a.insertBefore(_(i[s], !0), w(e))
                            }
                            return pt(e), !0
                        }
                        return e instanceof g && ! function(e) {
                            var t = ne(e);
                            t && t.tagName || (t = {
                                namespaceURI: Qe,
                                tagName: "template"
                            });
                            var n = T(e.tagName),
                                o = T(t.tagName);
                            return e.namespaceURI === Je ? t.namespaceURI === Qe ? "svg" === n : t.namespaceURI === Ye ? "svg" === n && ("annotation-xml" === o || it[o]) : Boolean(lt[n]) : e.namespaceURI === Ye ? t.namespaceURI === Qe ? "math" === n : t.namespaceURI === Je ? "math" === n && st[o] : Boolean(ut[n]) : e.namespaceURI === Qe && (!(t.namespaceURI === Je && !st[o]) && (!(t.namespaceURI === Ye && !it[o]) && (!ut[n] && (ct[n] || !lt[n]))))
                        }(e) ? (pt(e), !0) : "noscript" !== r && "noembed" !== r || !A(/<\/no(script|embed)/i, e.innerHTML) ? (Ae && 3 === e.nodeType && (t = N(t = e.textContent, he, " "), t = N(t, me, " "), e.textContent !== t && (x(n.removed, {
                            element: e.cloneNode()
                        }), e.textContent = t)), mt("afterSanitizeElements", e, null), !1) : (pt(e), !0)
                    },
                    vt = function(e, t, n) {
                        if (Re && ("id" === t || "name" === t) && (n in a || n in ot)) return !1;
                        if (Se && !Pe[t] && A(be, t));
                        else if (Ne && A(ve, t));
                        else if (!ke[t] || Pe[t]) {
                            if (!(yt(e) && (xe.tagNameCheck instanceof RegExp && A(xe.tagNameCheck, e) || xe.tagNameCheck instanceof Function && xe.tagNameCheck(e)) && (xe.attributeNameCheck instanceof RegExp && A(xe.attributeNameCheck, t) || xe.attributeNameCheck instanceof Function && xe.attributeNameCheck(t)) || "is" === t && xe.allowCustomizedBuiltInElements && (xe.tagNameCheck instanceof RegExp && A(xe.tagNameCheck, n) || xe.tagNameCheck instanceof Function && xe.tagNameCheck(n)))) return !1
                        } else if (Ge[t]);
                        else if (A(je, N(n, Oe, "")));
                        else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== S(n, "data:") || !Ke[e]) {
                            if (Le && !A(ye, N(n, Oe, "")));
                            else if (n) return !1
                        } else;
                        return !0
                    },
                    yt = function(e) {
                        return e.indexOf("-") > 0
                    },
                    Ot = function(e) {
                        var t, r, a, i;
                        mt("beforeSanitizeAttributes", e, null);
                        var s = e.attributes;
                        if (s) {
                            var c = {
                                attrName: "",
                                attrValue: "",
                                keepAttr: !0,
                                allowedAttributes: ke
                            };
                            for (i = s.length; i--;) {
                                t = s[i];
                                var l = t.name,
                                    u = t.namespaceURI;
                                if (r = "value" === l ? t.value : L(t.value), a = fe(l), c.attrName = a, c.attrValue = r, c.keepAttr = !0, c.forceKeepAttr = void 0, mt("uponSanitizeAttribute", e, c), r = c.attrValue, !c.forceKeepAttr && (dt(l, e), c.keepAttr))
                                    if (A(/\/>/i, r)) dt(l, e);
                                    else {
                                        Ae && (r = N(r, he, " "), r = N(r, me, " "));
                                        var p = fe(e.nodeName);
                                        if (vt(p, a, r)) {
                                            if (!Ve || "id" !== a && "name" !== a || (dt(l, e), r = "user-content-" + r), re && "object" === o(O) && "function" == typeof O.getAttributeType)
                                                if (u);
                                                else switch (O.getAttributeType(p, a)) {
                                                    case "TrustedHTML":
                                                        r = re.createHTML(r);
                                                        break;
                                                    case "TrustedScriptURL":
                                                        r = re.createScriptURL(r)
                                                }
                                            try {
                                                u ? e.setAttributeNS(u, l, r) : e.setAttribute(l, r), C(n.removed)
                                            } catch (e) {}
                                        }
                                    }
                            }
                            mt("afterSanitizeAttributes", e, null)
                        }
                    },
                    jt = function e(t) {
                        var n, o = ft(t);
                        for (mt("beforeSanitizeShadowDOM", t, null); n = o.nextNode();) mt("uponSanitizeShadowNode", n, null), bt(n) || (n.content instanceof s && e(n.content), Ot(n));
                        mt("afterSanitizeShadowDOM", t, null)
                    };
                return n.sanitize = function(e) {
                    var a, i, c, l, u, p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if ((et = !e) && (e = "\x3c!--\x3e"), "string" != typeof e && !ht(e)) {
                        if ("function" != typeof e.toString) throw I("toString is not a function");
                        if ("string" != typeof(e = e.toString())) throw I("dirty is not a string, aborting")
                    }
                    if (!n.isSupported) {
                        if ("object" === o(t.toStaticHTML) || "function" == typeof t.toStaticHTML) {
                            if ("string" == typeof e) return t.toStaticHTML(e);
                            if (ht(e)) return t.toStaticHTML(e.outerHTML)
                        }
                        return e
                    }
                    if (De || at(p), n.removed = [], "string" == typeof e && (Ue = !1), Ue) {
                        if (e.nodeName) {
                            var g = fe(e.nodeName);
                            if (!_e[g] || Te[g]) throw I("root node is forbidden and cannot be sanitized in-place")
                        }
                    } else if (e instanceof d) 1 === (i = (a = gt("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === i.nodeName ? a = i : "HTML" === i.nodeName ? a = i : a.appendChild(i);
                    else {
                        if (!Be && !Ae && !Ie && -1 === e.indexOf("<")) return re && Me ? re.createHTML(e) : e;
                        if (!(a = gt(e))) return Be ? null : Me ? ae : ""
                    }
                    a && Ee && pt(a.firstChild);
                    for (var f = ft(Ue ? e : a); c = f.nextNode();) 3 === c.nodeType && c === l || bt(c) || (c.content instanceof s && jt(c.content), Ot(c), l = c);
                    if (l = null, Ue) return e;
                    if (Be) {
                        if (Fe)
                            for (u = ce.call(a.ownerDocument); a.firstChild;) u.appendChild(a.firstChild);
                        else u = a;
                        return ke.shadowroot && (u = ue.call(r, u, !0)), u
                    }
                    var h = Ie ? a.outerHTML : a.innerHTML;
                    return Ie && _e["!doctype"] && a.ownerDocument && a.ownerDocument.doctype && a.ownerDocument.doctype.name && A(Q, a.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + a.ownerDocument.doctype.name + ">\n" + h), Ae && (h = N(h, he, " "), h = N(h, me, " ")), re && Me ? re.createHTML(h) : h
                }, n.setConfig = function(e) {
                    at(e), De = !0
                }, n.clearConfig = function() {
                    nt = null, De = !1
                }, n.isValidAttribute = function(e, t, n) {
                    nt || at({});
                    var o = fe(e),
                        r = fe(t);
                    return vt(o, r, n)
                }, n.addHook = function(e, t) {
                    "function" == typeof t && (de[e] = de[e] || [], x(de[e], t))
                }, n.removeHook = function(e) {
                    if (de[e]) return C(de[e])
                }, n.removeHooks = function(e) {
                    de[e] && (de[e] = [])
                }, n.removeAllHooks = function() {
                    de = {}
                }, n
            }()
    },
    H6Cw: function(e, t, n) {
        "use strict";

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(n, !0).forEach((function(t) {
                    a(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        n.d(t, "a", (function() {
            return u
        }));
        var i = n("2mXy"),
            s = n("FdF9"),
            c = n("eeaA"),
            l = n("o1E3"),
            u = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        open: !1
                    }, t.toggleAccordion = function(e) {
                        if (void 0 !== e && !["stack-toggle", "opener", "expand"].some((function(t) {
                                return e.target.className.includes(t)
                            }))) {
                            var n = t.panel,
                                o = !t.state.open;
                            t.setState({
                                open: o
                            }), n.style.maxHeight = o ? n.scrollHeight + "px" : null
                        }
                    }, t
                }
                var n, o;
                o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o;
                var a = t.prototype;
                return a.shouldComponentUpdate = function(e, t) {
                    var n = this.panel;
                    n && t.open && setTimeout((function() {
                        n.style.maxHeight = n.scrollHeight + "px"
                    }), 100)
                }, a.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.dev,
                        o = t.name,
                        a = t.accessName,
                        u = t.description,
                        p = t.content,
                        d = t.selected,
                        g = t.toggle,
                        f = t.child,
                        h = t.value,
                        m = t.language,
                        b = t.titleContent,
                        v = t.vendors,
                        y = t.isCustom,
                        O = t.locked,
                        j = t.consentType,
                        _ = t.isApple,
                        w = t.isCustomVendorLabel1,
                        k = t.isCustomVendorLabel2,
                        C = t.isCustomVendorLabel3,
                        x = t.appleDataBrokerLetter,
                        T = t.customVendorLabel1Letter,
                        P = t.customVendorLabel2Letter,
                        N = t.customVendorLabel3Letter,
                        S = t.usePurModel,
                        L = t.idfaStatus,
                        A = t.index,
                        I = t.key,
                        D = this.state.open,
                        E = this.props.settings || {},
                        B = r({}, E.accordionsSpacing, {}, E.accordionsFont),
                        F = r({}, E.panelSpacing, {}, E.panelFont),
                        M = Object(l.u)(Boolean(n), E, "toggleText", m),
                        R = Object(l.u)(Boolean(n), E, "toggleOffText", m);
                    return Object(i.h)("div", {
                        className: "tcfv2-stack",
                        id: 0 === A ? "features-focus" : I,
                        title: a || "Accordion"
                    }, Object(i.h)("div", {
                        className: y ? "stack-row custom" : "stack-row",
                        style: {
                            position: "relative"
                        }
                    }, Object(i.h)("button", {
                        className: (D ? "accordion active" : "accordion") + " focusable",
                        "aria-expanded": D,
                        style: B,
                        onClick: function(t) {
                            return e.toggleAccordion(t)
                        }
                    }, Object(i.h)("span", {
                        className: D ? "chevron up" : "chevron down"
                    }), D && !b ? Object(i.h)("b", null, o) : o, _ && Object(i.h)("span", {
                        className: "legend-key apple-broker"
                    }, x), w && Object(i.h)("span", {
                        className: "legend-key is-custom-vendor-label-1",
                        "aria-hidden": !0
                    }, T), k && Object(i.h)("span", {
                        className: "legend-key is-custom-vendor-label-2",
                        "aria-hidden": !0
                    }, P), C && Object(i.h)("span", {
                        className: "legend-key is-custom-vendor-label-3",
                        "aria-hidden": !0
                    }, N), b || null), g && Object(i.h)(c.a, {
                        accessName: a + " Toggle" || !1,
                        type: E.toggleType,
                        color: E.toggleColor,
                        colorActive: E.toggleActiveColor,
                        offColor: E.toggleOffColor,
                        offActiveColor: E.toggleOffActiveColor,
                        text: M,
                        offText: R,
                        toggle: g,
                        child: f,
                        vendors: v,
                        value: h,
                        locked: O,
                        legInt: "li" === d,
                        checked: "li" === d ? h.legInt : h.active,
                        consentType: j,
                        usePurModel: S,
                        selectedLi: "li" === d,
                        idfaStatus: L
                    })), Object(i.h)("div", {
                        ref: function(t) {
                            return e.panel = t
                        },
                        className: "panel"
                    }, Object(i.h)("p", {
                        style: r({}, F)
                    }, p && D ? s.default.cloneElement(p, {
                        accordionOpen: D
                    }) : u)))
                }, t
            }(s.Component)
    },
    HD23: function() {},
    HbQw: function(e, t, n) {
        e.exports = n.p + "2700acc9ffd33b5bbb3866bd8b34ab32.svg"
    },
    Hm76: function() {},
    "I+oa": function(e, t, n) {
        e.exports = n.p + "a4e6bfc7a854c6ebc18a33b694e9dc37.svg"
    },
    Ig1F: function(e, t, n) {
        "use strict";

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var s = n("2mXy"),
            c = (n("FdF9"), function(e) {
                void 0 === e && (e = {}), o(this, {
                    text: "Button",
                    width: {
                        type: "auto",
                        value: 1
                    },
                    padding: {
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 10,
                        paddingBottom: 10
                    },
                    margin: {
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 10,
                        marginBottom: 10
                    },
                    font: {
                        fontSize: 14,
                        fontWeight: "400",
                        color: "#ffffff",
                        fontFamily: "arial, helvetica, sans-serif"
                    },
                    background: "#1890ff",
                    border: {
                        borderWidth: 0,
                        borderColor: "#000000",
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderStyle: "solid"
                    },
                    choice_option: {
                        type: null,
                        data: {}
                    },
                    languages: {},
                    selectedLanguage: "",
                    startFocus: !1
                }), o(this, e)
            }),
            l = n("o1E3"),
            u = n("5oGf");
        n("Q7tg");
        n.d(t, "a", (function() {
            return p
        }));
        var p = function(e) {
            var t = e.component,
                n = e.makeChoice,
                o = e.dev,
                p = e.path,
                d = e.language,
                g = e.className,
                f = new c(t.settings),
                h = Object(u.c)(p, o),
                m = h.devActions,
                b = h.devClass,
                v = h.pathString,
                y = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? a(n, !0).forEach((function(t) {
                            i(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(n).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, f.padding, {}, f.margin, {}, f.border, {}, f.font),
                O = f.padding,
                j = O.paddingLeft,
                _ = O.paddingRight,
                w = f.margin,
                k = w.marginLeft,
                C = w.marginRight;
            y.width = "auto" === f.width.type ? "auto" : f.width.value + f.width.type, "%" === f.width.type && (y.width = "calc(" + f.width.value + "% - " + (j + _ + k + C) + "px"), y.background = f.background;
            var x, T, P = function() {
                    var e = t.settings.choice_option.data,
                        o = t.settings.choice_option.type;
                    e.button_text && n(e.button_text, Object(l.s)(d, f, "text"), "SE" === o, e)
                },
                N = "message-component message-button no-children focusable" + g + b;
            N += " " + ((T = (x = t.settings.choice_option) ? x.type : null) ? "sp_choice_type_" + T : "");
            var S = Object(l.u)(o, f, "text", d);
            return Object(s.h)("button", r({
                title: S,
                onClick: P,
                onKeyDown: function(e) {
                    return Object(l.q)(e.key) && P()
                },
                className: N,
                path: o ? v : null,
                style: y
            }, m), S)
        }
    },
    Jvnj: function(e, t, n) {
        "use strict";

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var s = n("2mXy"),
            c = n("FdF9"),
            l = n("GeSn"),
            u = n("KOA+"),
            p = function(e) {
                void 0 === e && (e = {});
                o(this, {
                    color: "#000000",
                    align: "left",
                    font: {
                        fontSize: 14,
                        fontWeight: "400",
                        color: "#000000",
                        fontFamily: "arial, helvetica, sans-serif"
                    },
                    height: {
                        type: "percent",
                        value: 100
                    },
                    padding: {
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 10,
                        paddingBottom: 10
                    },
                    margin: {
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 10,
                        marginBottom: 10
                    },
                    text: "Text",
                    choice_options: [],
                    width: {
                        type: "auto",
                        value: 100
                    },
                    link: {
                        fontWeight: "400",
                        color: "#0000ff",
                        textDecoration: "none"
                    },
                    hover: {
                        fontWeight: "400",
                        color: "#0000ff",
                        textDecoration: "underline"
                    },
                    languages: {},
                    selectedLanguage: "",
                    arrowColor: "#000000",
                    startFocus: !1,
                    heading: "p"
                }, e)
            },
            d = n("o1E3"),
            g = n("5oGf"),
            f = n("gm8T"),
            h = n("D44D");
        n("CujF");
        n.d(t, "a", (function() {
            return m
        }));
        var m = function(e) {
            function t(e) {
                var t;
                if (this.dataset.choice ? t = this.dataset.choice : this.href && this.href.indexOf("$$$$:") >= 0 && (t = this.href.split("$$$$:")[1]), t) {
                    e.preventDefault();
                    var r = (n.settings.choice_options || []).find((function(e) {
                        return e.data.button_text === t
                    }));
                    r && O ? y(r.type, Object(d.s)(o, x, "text"), !1, r.data) : r && r.data.button_text && y(r.data.button_text, Object(d.s)(o, x, "text"), !1, r.data)
                }
            }
            var n = e.component,
                o = e.language,
                m = e.className,
                b = e.dev,
                v = e.path,
                y = e.makeChoice,
                O = Object(c.useContext)(f.d),
                j = Object(g.c)(v, b),
                _ = j.devActions,
                w = j.devClass,
                k = j.pathString,
                C = Object(c.useRef)(null);
            Object(c.useEffect)((function() {
                if (C.current)
                    for (var e = C.current.getElementsByTagName("A"), n = 0; n < e.length; n++) e[n].addEventListener("click", t);
                return function() {
                    if (C.current)
                        for (var e = C.current.getElementsByTagName("A"), n = 0; n < e.length; n++) e[n].removeEventListener("click", t)
                }
            }), []), Object(c.useEffect)((function() {
                document.getElementsByTagName("html")[0].lang = o && o.toLowerCase() || "EN"
            }), []);
            var x = new p(n.settings),
                T = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? a(n, !0).forEach((function(t) {
                            i(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(n).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, x.padding, {}, x.margin, {}, x.border, {}, x.font);
            T.textAlign = x.align;
            var P = x.padding,
                N = P.paddingLeft,
                S = P.paddingRight,
                L = x.margin,
                A = L.marginLeft,
                I = L.marginRight;
            if (T.width = "auto" === x.width.type ? "auto" : x.width.value + x.width.type, T.height = "auto" === x.height.type ? "auto" : x.height.value + x.height.type, "%" === x.width.type) {
                var D = N + S + A + I;
                T.width = "calc(" + x.width.value + "% - " + (isNaN(D) ? 0 : D) + "px"
            }
            var E = "text-link-" + v.join("-"),
                B = l.a.sanitize("\n    ." + E + ":hover { color:" + x.hover.color + " !important; text-decoration:" + x.hover.textDecoration + " !important; font-weight: " + x.hover.fontWeight + " !important;  }\n  "),
                F = "color:" + x.link.color + ";text-decoration:" + x.link.textDecoration + ";font-weight: " + x.link.fontWeight + ";",
                M = Object(d.u)(b, x, "text", o).replace(/<a ([^>]*(href)[^>]*)>([^<]+)/g, (function(e, t, o, r) {
                    var a, i, s, c = (t = t.replace('aria-label="message-link"', "")).split("$$$$:")[1],
                        l = c ? c.split('"')[0] : null,
                        u = (a = l, i = (n.settings.choice_options || []).find((function(e) {
                            return e.data.button_text === a
                        })), (s = i ? i.type || i.action_type : null) ? "sp_choice_type_" + s : "");
                    return '<a tabindex="1" class=\'' + E + " " + u + " focusable' style='" + F + "' " + t + ">" + r
                })),
                R = ["h1", "h2", "h3", "p"].includes(x.heading) ? x.heading : "p",
                V = ["h1", "h2", "h3", "p"].includes(R);
            return Object(c.useEffect)((function() {
                document.head && document.head.insertAdjacentHTML("beforeend", "<style>" + B + "</style>")
            }), []), Object(s.h)(h.a, {
                pRef: C,
                settings: x
            }, Object(s.h)(R, r({
                className: "message-component text no-children" + m + w,
                style: T,
                path: b ? k : null,
                tabIndex: "1",
                ref: function(e) {
                    C.current = e, e && x.font.size && e.style.setProperty("font-size", Settings.font.size + "px", "important")
                }
            }, _, {
                dangerouslySetInnerHTML: {
                    __html: Object(u.a)({
                        html: V ? M.replace(/^\<p\>/, "").replace(/\<\/p\>$/, "") : M
                    })
                }
            })))
        }
    },
    "KOA+": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }));
        n("2mXy"), n("FdF9");
        var o = n("GeSn"),
            r = (n("gm8T"), function(e) {
                return o.a.sanitize(e.html, {
                    ADD_ATTR: ["target"]
                })
            })
    },
    "LX/k": function() {},
    MjMI: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", (function() {
                return c
            }));
            var o = n("KOA+"),
                r = n("HbQw"),
                a = n.n(r),
                i = n("o1E3"),
                s = function(t) {
                    var n = t.vendor;
                    return e("a", {
                        tabIndex: t.accordionOpen ? 0 : -1,
                        href: n.policyUrl,
                        target: "_blank",
                        className: "vendor-tag linked"
                    }, e("span", null, n.name), e("img", {
                        src: a.a,
                        alt: ""
                    }))
                },
                c = function(t) {
                    var n = t.vendor,
                        r = t.settings,
                        a = t.language,
                        c = t.dev,
                        l = t.consentType,
                        u = t.accordionOpen,
                        p = Object(i.u)(Boolean(c), r, "cookieText", a),
                        d = Object(i.u)(Boolean(c), r, "tableCookieText", a),
                        g = Object(i.u)(Boolean(c), r, "tableCategoryText", a),
                        f = Object(i.u)(Boolean(c), r, "tableDomainText", a),
                        h = Object(i.u)(Boolean(c), r, "tableDurationText", a),
                        m = Object(i.u)(Boolean(c), r, "iabConsent", a),
                        b = Object(i.u)(Boolean(c), r, "iabLegInt", a),
                        v = Object(i.u)(Boolean(c), r, "iabFeatures", a),
                        y = Object(i.u)(Boolean(c), r, "iabSpecialFeatures", a),
                        O = Object(i.u)(Boolean(c), r, "iabSpecialPurposes", a);
                    return e("div", {
                        className: "vendor-content"
                    }, n.description && e("p", {
                        className: "pm-sub-p",
                        dangerouslySetInnerHTML: {
                            __html: Object(o.a)({
                                html: n.description
                            })
                        }
                    }), n.cookieHeader && e("div", {
                        className: "vendor-cookie-header"
                    }, n.cookieHeader), e(s, {
                        vendor: n,
                        accordionOpen: u
                    }), e("div", null, "consent" === l && n.consentCategories.length > 0 && e("div", {
                        className: "vendor-info"
                    }, e("div", {
                        className: "info-title"
                    }, e("h3", {
                        class: "vendor-purposes-header"
                    }, m)), e("ul", null, n.consentCategories.map((function(t) {
                        return e("li", null, t.name || t)
                    })))), "li" === l && n.legIntCategories.length > 0 && e("div", {
                        className: "vendor-info"
                    }, e("div", {
                        className: "info-title"
                    }, e("h3", {
                        class: "vendor-purposes-header"
                    }, b)), n.legIntCategories.map((function(t) {
                        return e("div", null, "• ", t.name || t)
                    }))), n.iabFeatures.length > 0 && e("div", {
                        className: "vendor-info"
                    }, e("div", {
                        className: "info-title"
                    }, e("h3", {
                        class: "vendor-purposes-header"
                    }, v)), n.iabFeatures.map((function(t) {
                        return e("div", null, "• ", t.name || t)
                    }))), n.iabSpecialFeatures.length > 0 && e("div", {
                        className: "vendor-info"
                    }, e("div", {
                        className: "info-title"
                    }, e("h3", {
                        class: "vendor-purposes-header"
                    }, y)), n.iabSpecialFeatures.map((function(t) {
                        return e("div", null, "• ", t.name || t)
                    }))), n.iabSpecialPurposes.length > 0 && e("div", {
                        className: "vendor-info"
                    }, e("div", {
                        className: "info-title"
                    }, e("h3", {
                        class: "vendor-purposes-header"
                    }, O)), n.iabSpecialPurposes.map((function(t) {
                        return e("div", null, "• ", t.name || t)
                    })))), n.cookies.length > 0 && e("div", {
                        className: "vendor-cookies"
                    }, e("div", {
                        className: "cookie-title"
                    }, p), e("table", {
                        className: "tvtbl"
                    }, e("tr", null, e("th", null, g), e("th", null, d), e("th", null, f), e("th", null, h)), n.cookies.map((function(t) {
                        return e("tr", null, e("td", {
                            className: "category-td no-content"
                        }, t.categoryName), e("td", null, e("span", null, t.name)), e("td", {
                            className: "no-content"
                        }, t.domain), e("td", null, e("span", null, t.cookieLifeSpan)))
                    })))))
                }
        }).call(this, n("2mXy").h)
    },
    NLdj: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        }));
        var o = n("2mXy"),
            r = n("FdF9"),
            a = n("5ehb"),
            i = n("o1E3"),
            s = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        all: !1
                    }, t.toggleAll = function() {
                        t.setState({
                            all: !t.state.all
                        }, t.props.force)
                    }, t
                }
                var n, r;
                return r = e, (n = t).prototype = Object.create(r.prototype), n.prototype.constructor = n, n.__proto__ = r, t.prototype.render = function() {
                    var e = this.props,
                        t = e.purpose,
                        n = e.language,
                        r = e.settings,
                        s = e.force,
                        c = e.dev,
                        l = e.accordionOpen,
                        u = this.state.all,
                        p = Object(i.u)(Boolean(c), r, "viewAllText", n),
                        d = Object(i.u)(Boolean(c), r, "viewLessText", n);
                    return r.alphabetizeVendors && t.vendors && t.vendors.sort((function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                    })), Object(o.h)("div", {
                        className: "purpose-content"
                    }, Object(o.h)("p", {
                        style: "margin-bottom:15px;"
                    }, Object(i.f)(t.description)), Object(o.h)("div", null, Object(o.h)("div", {
                        className: "policies"
                    }, t.vendors.slice(0, u ? t.vendors.length : 3).map((function(e) {
                        return Object(o.h)(a.a, {
                            vendor: e,
                            key: e.vendorId,
                            language: n,
                            settings: r,
                            force: s,
                            dev: c,
                            accordionOpen: l,
                            isSpecialPurpose: !0
                        })
                    })), t.vendors.length > 3 ? Object(o.h)("div", {
                        className: "view-all",
                        onClick: this.toggleAll
                    }, u ? d : p) : null)))
                }, t
            }(r.Component)
    },
    Pidg: function(e, t, n) {
        e.exports = n.p + "2700acc9ffd33b5bbb3866bd8b34ab32.svg"
    },
    Pp7d: function() {},
    Q7tg: function() {},
    "Rm/h": function(e, t, n) {
        "use strict";

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        n.d(t, "a", (function() {
            return u
        }));
        var i = n("2mXy"),
            s = (n("FdF9"), n("Abvc")),
            c = n("Asb/"),
            l = n("5oGf"),
            u = (n("pMXK"), function(e) {
                var t = e.component,
                    n = e.className,
                    u = e.width,
                    p = e.preview,
                    d = e.dev,
                    g = e.path,
                    f = e.makeChoice,
                    h = e.language,
                    m = e.siteId,
                    b = e.message,
                    v = e.events,
                    y = e.preloadMsg,
                    O = e.stacksData,
                    j = e.updateStacks,
                    _ = e.consentUUID,
                    w = e.allSelectionsMade,
                    k = new s.a(t.settings),
                    C = Object(l.c)(g, d),
                    x = C.devActions,
                    T = C.devClass,
                    P = C.pathString,
                    N = "",
                    S = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? r(n, !0).forEach((function(t) {
                                a(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(n).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, k.padding, {}, k.margin, {}, k.border, {
                        display: k.display
                    });
                d && (0 === t.children.length && (S.minHeight = "24px"), d.opts.hideRowColumnBorders || (T += " on-dev"));
                var L = k.padding,
                    A = L.paddingLeft,
                    I = L.paddingRight,
                    D = k.margin,
                    E = D.marginLeft,
                    B = D.marginRight;
                return S.width = "auto" === k.width.type ? "auto" : k.width.value + k.width.type, S.height = "auto" === k.height.type ? "auto" : k.height.value + k.height.type, "%" === k.width.type && (S.width = "calc(" + k.width.value + "% - " + (A + I + E + B) + "px"), S.background = k.background, S.justifyContent = k.align, S.alignItems = k.vertical, u && u < 600 && !p && (S.flexDirection = "column", S.justifyContent = k.vertical, S.alignItems = k.align), k.background_url && k.background_url.length > 0 && (delete S.background, S.backgroundImage = "url(" + k.background_url + ")", N += " background-url"), Object(i.h)("div", o({
                    className: "message-component message-row" + T + n + N,
                    path: d ? P : null,
                    style: S
                }, x), Object(i.h)(c.a, o({}, e, {
                    path: g,
                    dev: d,
                    components: t.children,
                    siteId: m,
                    message: b,
                    makeChoice: f,
                    language: h,
                    events: v,
                    preloadMsg: y,
                    stacksData: O,
                    updateStacks: j,
                    consentUUID: _,
                    allSelectionsMade: w,
                    neutralPm: e.neutralPm
                })))
            })
    },
    Up9s: function(e, t, n) {
        "use strict";
        (function(e) {
            n("FdF9");
            var o = n("o1E3");
            n("mLpX");
            t.a = function(t) {
                var n = t.child,
                    r = t.vendors,
                    a = t.value,
                    i = t.toggle,
                    s = t.settings,
                    c = t.dev,
                    l = t.language,
                    u = t.toggleStack,
                    p = a.active,
                    d = s.neutralButtonBackgroundColor,
                    g = s.neutralButtonFontColor,
                    f = function(e) {
                        e.stopPropagation(), u && u(e, !0), "purposes" === n || "features" === n ? i(a._id, n, !0, r) : "vendors" === n ? i(a.vendorId, !0) : "stacks" === n && i(a._id, !0)
                    },
                    h = function(e) {
                        e.stopPropagation(), u && u(e, !1), "purposes" === n || "features" === n ? i(a._id, n, !1, r) : "vendors" === n ? i(a.vendorId, !1) : "stacks" === n && i(a._id, !1)
                    },
                    m = {
                        background: !1 === p ? s.offButtonBackgroundColor : d,
                        color: !1 === p ? s.offButtonFontColor : g
                    };
                return e("div", {
                    className: "pur-buttons-container",
                    style: t.style
                }, e("button", {
                    style: {
                        background: !0 === p ? s.onButtonBackgroundColor : d,
                        color: !0 === p ? s.onButtonFontColor : g
                    },
                    "aria-pressed": p,
                    onClick: f,
                    onKeyDown: function(e) {
                        return Object(o.q)(e.key) && f(e)
                    }
                }, Object(o.u)(c, s, "onButtonText", l)), e("button", {
                    style: m,
                    "aria-pressed": !1 === p,
                    onClick: h,
                    onKeyDown: function(e) {
                        return Object(o.q)(e.key) && h(e)
                    }
                }, Object(o.u)(c, s, "offButtonText", l)))
            }
        }).call(this, n("2mXy").h)
    },
    WIag: function(e, t, n) {
        "use strict";

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(n, !0).forEach((function(t) {
                    s(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var c = n("2mXy"),
            l = n("FdF9"),
            u = n("xc8A"),
            p = n.n(u),
            d = function(e) {
                void 0 === e && (e = {}), o(this, {
                    text: "Button",
                    width: {
                        type: "auto",
                        value: 1
                    },
                    padding: {
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 10,
                        paddingBottom: 10
                    },
                    margin: {
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 10,
                        marginBottom: 10
                    },
                    font: {
                        fontSize: 14,
                        fontWeight: "400",
                        color: "#ffffff",
                        fontFamily: "arial, helvetica, sans-serif"
                    },
                    background: "#1890ff",
                    border: {
                        borderWidth: 0,
                        borderColor: "#000000",
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderStyle: "solid"
                    },
                    action_type: null,
                    languages: {},
                    selectedLanguage: "",
                    startFocus: !1
                }), o(this, e)
            },
            g = n("o1E3"),
            f = n("YSmr");
        n("LX/k");
        n.d(t, "a", (function() {
            return h
        }));
        var h = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).componentDidMount = function() {
                    t.props.component.settings.startFocus && (p.a.clear(), p.a.add({
                        selector: ".start-focus",
                        defaultElement: ".start-focus"
                    }), p.a.focus())
                }, t.makeChoice = function(e) {
                    if (!(t.props.isOtt && "click" === e.type || t.props.isOtt && 13 !== e.keyCode)) {
                        var n = t.props,
                            o = n.language,
                            r = n.component.settings,
                            a = r.action_type;
                        a && t.props.makeChoice(f.g[a], Object(g.s)(o, new d(r), "text"))
                    }
                }, t
            }
            var n, o;
            return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                var e = this,
                    t = new d(this.props.component.settings),
                    n = this.props,
                    o = n.language,
                    a = n.dev,
                    s = n.isOtt,
                    l = n.neutralPm && "SAVE_AND_EXIT" === t.action_type && !n.allSelectionsMade,
                    u = i({
                        opacity: l ? .5 : 1
                    }, t.padding, {}, t.margin, {}, t.border, {}, t.font),
                    p = t.padding,
                    f = p.paddingLeft,
                    h = p.paddingRight,
                    m = t.margin,
                    b = m.marginLeft,
                    v = m.marginRight;
                u.width = "auto" === t.width.type ? "auto" : t.width.value + t.width.type, "%" === t.width.type && (u.width = "calc(" + t.width.value + "% - " + (f + h + b + v) + "px"), u.background = t.background;
                var y = {},
                    O = !1,
                    j = JSON.stringify(this.props.path);
                a && (y = i({}, a.hover), O = a.current === j);
                var _, w, k = "message-component message-button no-children focusable " + (t.startFocus ? "start-focus" : "") + this.props.className,
                    C = Object(g.u)(a, t, "text", o);
                return k += " " + ((w = (_ = e.props.component.settings) ? _.action_type : null) ? "sp_choice_type_" + w : ""), Object(c.h)("button", r({
                    disabled: l ? "disabled" : "",
                    "aria-disabled": l,
                    title: C,
                    onClick: s ? void 0 : this.makeChoice,
                    onKeyDown: function(t) {
                        return Object(g.q)(t.key) && e.makeChoice(t)
                    },
                    className: O ? k + " on-active" : k,
                    path: a ? j : null,
                    style: u
                }, y), C)
            }, t
        }(l.Component)
    },
    XYkp: function(e, t, n) {
        "use strict";

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(n, !0).forEach((function(t) {
                    i(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        n.r(t);
        var s = n("2mXy"),
            c = n("FdF9"),
            l = n("eLTm"),
            u = n("Asb/"),
            p = function(e) {
                void 0 === e && (e = {}), o(this, {
                    width: {
                        type: "px",
                        value: 600
                    },
                    height: {
                        type: "auto",
                        value: 1
                    },
                    padding: {
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 10,
                        paddingBottom: 10
                    },
                    border: {
                        borderWidth: 0,
                        borderColor: "#000000",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderStyle: "solid"
                    },
                    background: "#ffffff",
                    closeAlign: "right",
                    closeFont: {
                        fontSize: 16,
                        fontWeight: "500",
                        color: "#999999",
                        fontFamily: "arial, helvetica, sans-serif"
                    },
                    selected_privacy_manager: {
                        type: null,
                        data: {}
                    },
                    showClose: !0,
                    showVeil: !0,
                    lockScroll: !0,
                    useSafeArea: !1,
                    veilColor: "#000000",
                    veilOpacity: .65,
                    type: "modal",
                    zIndex: 2147483e3,
                    url: "",
                    type_settings: {
                        targetType: "id",
                        targetName: "",
                        dismissable: !1
                    },
                    defaultLanguage: e.language || "EN",
                    useBrowserDefault: !1,
                    supportedLanguages: [],
                    iframeTitle: "SP Consent Message"
                }, e)
            },
            d = [{
                type: "Notice",
                name: "Notice",
                settings: {},
                children: []
            }],
            g = n("o1E3"),
            f = n("7P9E"),
            h = n("YSmr"),
            m = (n("qD70"), n("gm8T"));
        n.d(t, "Notice", (function() {
            return b
        }));
        var b = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).componentDidMount = function() {
                    var e = n.props,
                        t = e.messageId,
                        o = e.preloadMsg;
                    window.addEventListener("keydown", n.handleFirstTab), window.addEventListener("resize", n.updateWindowDimensions), o && (window.addEventListener("message", n.loadPreloadedMsg, !1), window.parent.postMessage({
                        name: "sp.readyForPreload",
                        messageId: n.props.messageId
                    }, "*")), t && !o ? fetch(n.props.mmsOrigin + "/message?message_id=" + t, {
                        insecure: !0
                    }).then((function(e) {
                        return e.json()
                    })).then(n.loadMessage.bind(function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(n))) : (n.props.dev || n.props.tiny || n.props.mini || n.props.full) && (n.setState({
                        loading: !1
                    }), window.addEventListener("message", n.handleDev, !1))
                }, n.handleFirstTab = function(e) {
                    9 === e.keyCode && (document.body.classList.add("user-is-tabbing"), window.removeEventListener("keydown", n.handleFirstTab))
                }, n.updateWindowDimensions = function() {
                    if (!n.state.loading && ("top" === n.state.type || "bottom" === n.state.type || "inline" === n.state.type)) {
                        var e = new p((n.state.components ? n.state.components[0] : {}).settings || {});
                        window.parent.postMessage({
                            name: "sp.resizeMessage",
                            type: n.state.type,
                            height: n.noticeRef ? n.noticeRef.clientHeight + 2 * (e.border.borderWidth || 0) : 0,
                            heightSettings: e.height,
                            showVeil: e.showVeil,
                            messageId: n.props.messageId
                        }, "*")
                    }
                    n.setState({
                        width: window.innerWidth || n.state.width,
                        height: window.innerHeight || n.state.height
                    })
                }, n.makeChoice = function(e, t, o, r) {
                    if (!0 === o) return n.makeCategoryChoice(t);
                    var i = n.state.choices.find((function(t) {
                            return t.button_text === e
                        })),
                        s = n.state.components ? n.state.components[0] : {};
                    i || (i = n.state.choices.find((function(e) {
                        return 15 === e.type
                    })));
                    var c = n.state.actions.concat(9 === i.type ? {
                        type: "choice",
                        data: a({}, i, {
                            customAction: r.js_fn_name
                        })
                    } : {
                        type: "choice",
                        data: i
                    });
                    n.setState({
                        actions: c
                    }, (function() {
                        i.type && (window.parent.postMessage({
                            name: "sp.hideMessage",
                            actions: c,
                            settings: s.settings || {},
                            consentLanguage: t,
                            messageId: n.props.messageId
                        }, "*"), n.setState({
                            actions: []
                        }))
                    }))
                }, n.makeCategoryChoice = function(e) {
                    window.parent.postMessage({
                        name: "sp.hideMessage",
                        fromPM: !0,
                        actionType: "SE",
                        consentLanguage: e,
                        messageId: n.props.messageId,
                        payload: {
                            lang: e,
                            categories: n.state.stacks.map((function(e) {
                                return {
                                    _id: e._id,
                                    consent: "CUSTOM" !== e.type || Boolean(e.consent),
                                    legInt: "CUSTOM" !== e.type || Boolean(e.legInt)
                                }
                            }))
                        }
                    }, "*")
                }, n.dismissNotice = function() {
                    n.makeChoice("Dismiss")
                }, n.handleMessages = function(e) {
                    var t = e.data;
                    if ("sp.choiceAction" === t.name && t.type) {
                        var o = n.state.choices.find((function(e) {
                            return e.type === t.type
                        }));
                        o && window.parent.postMessage({
                            name: "sp.hideMessage",
                            actions: [{
                                type: "choice",
                                data: o
                            }],
                            settings: (n.state.components ? n.state.components[0] : {}).settings || {},
                            messageId: n.props.messageId
                        }, "*")
                    }
                }, n.loadPreloadedMsg = function(e) {
                    var t = e.data;
                    !t.fromNativeSDK && h.n.indexOf(e.origin) > -1 && "localhost" !== window.location.host || "sp.loadMessage" === t.name && n.loadMessage(t)
                }, n.handleDev = function(e) {
                    if (e.data && "string" == typeof e.data) {
                        var t = JSON.parse(e.data);
                        t.components[0].css && Object(g.a)(t.components[0].css), n.setState({
                            devOpts: t.devOpts || {},
                            components: t.components,
                            current: t.current,
                            siteId: t.siteId,
                            highlight: t.highlight
                        })
                    }
                }, n.noticeSetCurrent = function(e, t) {
                    var o = t.target === t.currentTarget;
                    t.currentTarget.className.includes("text") && (o = !0), t.currentTarget.className.includes("message-stacks") && (o = !0), o && window.parent.postMessage({
                        action: "dev.setCurrent",
                        newCurrent: e,
                        messageId: n.props.messageId
                    }, "*")
                }, n.updateStacks = function(e) {
                    return n.setState({
                        stacks: e
                    })
                }, n.doAction = function(e) {
                    return window.parent.postMessage({
                        action: e
                    }, "*")
                }, n.state = {
                    choices: [],
                    components: t.messageId ? [{}] : d,
                    stacks: null,
                    siteId: null,
                    current: [0],
                    loading: !0,
                    actions: [],
                    width: 0,
                    height: 0,
                    devOpts: {
                        hideRowColumnBorder: !1
                    },
                    highlight: null,
                    stacksLanguage: null
                }, n
            }
            var n, o;
            o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o;
            var r = t.prototype;
            return r.loadMessage = function(e) {
                var t = this;
                try {
                    var n = "string" == typeof e.message_json ? JSON.parse(e.message_json) : e.message_json,
                        o = Array.isArray(n) ? n : [n],
                        r = Promise.resolve();
                    o[0].css && (r = Object(g.a)(o[0].css)), this.setState({
                        components: o,
                        choices: e.message_choice || [],
                        type: o[0].settings.type,
                        siteId: e.site_id || null,
                        stacks: e.categories || null,
                        stacksLanguage: e.language ? e.language.toUpperCase() : null,
                        loading: !1,
                        height: e.windowHeight || 0,
                        width: e.windowWidth || 0
                    }, (function() {
                        window.addEventListener("message", t.handleMessages, !1), r.then((function() {
                            window.parent.postMessage({
                                name: "sp.showMessage",
                                messageId: t.props.messageId,
                                actions: [],
                                settings: o[0].settings,
                                iframeTitle: Object(g.l)(o[0].settings, t.props.consentLanguage, o[0])
                            }, "*"), t.updateWindowDimensions()
                        })), t.setState({
                            actions: []
                        })
                    }))
                } catch (e) {
                    throw Error("Could not parse message data: " + e)
                }
            }, r.componentWillUnmount = function() {
                window.removeEventListener("message", this.handleDev), window.removeEventListener("message", this.handleMessages), window.removeEventListener("message", this.loadPreloadedMsg), window.removeEventListener("resize", this.updateWindowDimensions)
            }, r.render = function() {
                var e = this,
                    t = this.state.components ? this.state.components[0] : {},
                    n = t.children || [],
                    o = t.settings;
                t.settings && "inline" !== t.settings.type && Object(g.w)();
                var r = new p(t.settings || {}),
                    i = this.props.dev ? "message message-dev" : "message",
                    c = a({}, r.padding, {}, r.border),
                    l = a({}, r.closeFont),
                    d = {};
                c.background = r.background;
                var h = r.padding,
                    b = h.paddingTop,
                    v = h.paddingBottom,
                    y = h.paddingLeft,
                    O = h.paddingRight;
                c.width = "auto" === r.width.type ? "auto" : r.width.value + r.width.type, c.height = "auto" === r.height.type ? "auto" : r.height.value + r.height.type, "%" === r.height.type && (c.height = "calc(" + r.height.value + "% - " + (b + v) + "px"), r.showVeil || "bottom" !== r.type || "%" !== r.height.type || this.props.dev || (c.height = "100%"), "%" !== r.width.type || "top" !== r.type && "bottom" !== r.type || (c.width = "calc(" + r.width.value + "% - " + (y + O) + "px"), r.showClose ? ("left" === r.closeAlign ? (l.right = "auto", l.left = "20px", l.textAlign = "left") : (l.left = "auto", l.right = "20px", l.textAlign = "right"), l.zIndex = 2147483646) : l.display = "none", d.display = r.showVeil ? "flex" : "none", d.background = r.veilColor, d.opacity = r.veilOpacity;
                var j = this.props.tiny || this.props.mini || this.props.full,
                    _ = "top" === r.type || "bottom" === r.type,
                    w = this.props.mini ? .4 : this.props.full ? 1 : .2;
                (j && (c.transform = "scale(" + w + ") translateX(-50%) translateY(-50%)", _ && (c.transform = "scale(" + w + ") translateX(-50%)"), c.transformOrigin = "bottom" === r.type ? "left bottom" : "left top", i += " message-mini"), !j || !_ && "px" === r.width.type || this.props.full) || (c.width = 1 / w * (this.props.mini ? 364 : 160) * (100 / (_ || "auto" === r.width.type ? 100 : r.width.value)) - (y + O) + "px");
                "modal" === r.type && (i += " type-modal"), "top" === r.type && (i += " type-top"), "bottom" === r.type && (i += " type-bottom"), "bottom" !== r.type || o.border || (i += " no-border");
                var k, C = {
                        highlight: this.state.highlight,
                        current: JSON.stringify(this.state.current || [0]),
                        opts: this.state.devOpts,
                        add: function() {
                            return e.doAction("dev.add")
                        },
                        templates: function() {
                            return e.doAction("dev.templates")
                        },
                        hover: {
                            onClick: function(t) {
                                t.preventDefault();
                                var n = t.target && t.target.getAttribute("path") ? JSON.parse(t.target.getAttribute("path")) : null;
                                if (n) e.noticeSetCurrent(n, t);
                                else if (!n && t.currentTarget && (t.currentTarget.className.includes("text") || t.currentTarget.className.includes("message-stacks"))) {
                                    var o = t.currentTarget && t.currentTarget.getAttribute("path") ? JSON.parse(t.currentTarget.getAttribute("path")) : null;
                                    o && e.noticeSetCurrent(o, t)
                                }
                            },
                            onMouseOver: function(e) {
                                e.preventDefault();
                                var t = e.target;
                                e.currentTarget.className.includes("text") && (t = e.currentTarget), e.currentTarget.className.includes("message-stacks") && (t = e.currentTarget), t.className.includes("message-component") && (t.id = "on-hover")
                            },
                            onMouseOut: function(e) {
                                e.preventDefault();
                                var t = e.target;
                                e.currentTarget.className.includes("text") && (t = e.currentTarget), e.currentTarget.className.includes("message-stacks") && (t = e.currentTarget), t.id = "no-hover"
                            }
                        }
                    },
                    x = !1;
                r.useBrowserDefault || r.supportedLanguages.includes(this.state.stacksLanguage) ? (k = this.props.consentLanguage || Object(g.h)(), k = Object(g.r)(k, r, [t]) ? k : r.language || r.defaultLanguage || "EN") : (k = this.props.consentLanguage || r.language || r.defaultLanguage, x = this.state.stacksLanguage && this.state.stacksLanguage !== k);
                var T = Object(g.b)(t.handle),
                    P = Object(s.h)("div", {
                        id: "notice",
                        ref: function(t) {
                            return e.noticeRef = t
                        },
                        className: i,
                        style: c
                    }, Object(s.h)("div", {
                        style: l
                    }, Object(s.h)("span", {
                        tabIndex: "0",
                        className: "message-stacksclose",
                        onClick: this.dismissNotice
                    }, "X")), Object(u.a)({
                        path: [0],
                        dev: this.props.dev ? C : null,
                        components: n,
                        siteId: this.state.siteId,
                        message: r,
                        makeChoice: this.makeChoice,
                        updateStacks: this.updateStacks,
                        consentUUID: this.props.consentUUID,
                        cmpv2Origin: this.props.cmpv2Origin,
                        language: k,
                        width: this.state.width,
                        preview: j,
                        stacksData: this.state.stacks,
                        preloadMsg: this.props.preloadMsg
                    })),
                    N = Object(s.h)("div", {
                        id: "empty-message",
                        role: "presentation"
                    }, Object(s.h)("button", {
                        onClick: this.props.dev ? C.add : null,
                        className: "empty-add"
                    }, "+ Add Components"), Object(s.h)("div", {
                        className: "empty-or"
                    }, "or"), Object(s.h)("button", {
                        className: "empty-template",
                        onClick: this.props.dev ? C.templates : null
                    }, "Start from Template")),
                    S = Object(s.h)("div", {
                        className: "message-container" + T
                    }, r.useSafeArea ? "" : Object(s.h)("div", {
                        className: "message-overlay",
                        style: d
                    }), n.length ? P : N);
                if (S = r.useSafeArea ? Object(s.h)(f.a, {
                        safeBottom: "bottom" !== r.type,
                        veil: Object(s.h)("div", {
                            className: "message-overlay",
                            style: d
                        })
                    }, S) : S, this.state.loading) return Object(s.h)("div", {
                    className: "loader-container"
                }, Object(s.h)("div", {
                    className: "loader"
                }));
                return Object(s.h)(m.a.Provider, {
                    value: r.language || r.defaultLanguage
                }, Object(s.h)(m.h.Provider, {
                    value: x
                }, this.props.mini || this.props.tiny || this.props.full ? P : S))
            }, t
        }(c.default.Component);
        t.default = Object(l.a)(b)
    },
    YSmr: function(e, t, n) {
        "use strict";
        var o;
        n.d(t, "e", (function() {
            return a
        })), n.d(t, "a", (function() {
            return i
        })), n.d(t, "b", (function() {
            return s
        })), n.d(t, "h", (function() {
            return c
        })), n.d(t, "r", (function() {
            return l
        })), n.d(t, "i", (function() {
            return u
        })), n.d(t, "q", (function() {
            return p
        })), n.d(t, "p", (function() {
            return d
        })), n.d(t, "f", (function() {
            return g
        })), n.d(t, "c", (function() {
            return f
        })), n.d(t, "d", (function() {
            return h
        })), n.d(t, "l", (function() {
            return m
        })), n.d(t, "j", (function() {
            return b
        })), n.d(t, "n", (function() {
            return v
        })), n.d(t, "k", (function() {
            return r
        })), n.d(t, "g", (function() {
            return y
        })), n.d(t, "m", (function() {
            return O
        })), n.d(t, "o", (function() {
            return j
        }));
        try {
            o = {
                PRODUCTION: !0
            }
        } catch (e) {
            o = {
                PRODUCTION: !0
            }
        }
        var r, a = o.PRODUCTION ? "https://cdn.privacy-mgmt.com/mms/v2" : "https://mms.sp-stage.net/mms/v2",
            i = o.PRODUCTION ? "https://ccpa-service.sp-prod.net" : "https://ccpa.sp-stage.net",
            s = o.PRODUCTION ? "https://cdn.privacy-mgmt.com/consent/tcfv2" : "https://cmpv2.sp-stage.net/tcfv2",
            c = {
                DELETE: "delete-my-data",
                DSAR: "dsar"
            },
            l = {
                FORM: "form",
                SUCCESS: "success",
                error: {
                    VERIFICATION: "verification",
                    MAX_REQUESTS: "max-requests",
                    ACTIVE_REQUEST: "active-request"
                }
            },
            u = {
                HOME: "home",
                ONE_TIME_CODE: "one-time-code",
                CODE_SUCCESS: "code-success",
                REQUEST_PENDING: "request-pending"
            },
            p = {
                HOME: "home",
                CATEGORIES: "categories",
                VENDORS: "vendors",
                CARD_DETAILS: "card_details",
                PRIVACY_POLICY: "privacy_policy",
                CUSTOM_VIEW: "custom_view"
            },
            d = {
                HOME: "home",
                VENDORS: "vendors",
                CATEGORIES: "categories",
                PRIVACY_POLICY: "privacy_policy",
                CARD_DETAILS: "card_details",
                CUSTOM_VIEW: "custom_view"
            },
            g = "VERIFICATION_FAILURE",
            f = "MAX_REQUESTS_EXCEEDED",
            h = "MFA_CODE_FAILURE",
            m = [],
            b = {
                FIRST_NAME: "first-name",
                LAST_NAME: "last-name",
                EMAIL: "email",
                PHONE: "phone",
                SSN: "ssn",
                REQUEST_ID: "request-id",
                MFA: "mfa"
            },
            v = ["https://notice.sp-prod.net", "https://notice.sp-stage.net"];
        try {
            document.createElement("input").type = "date", r = !1
        } catch (e) {
            r = !0
        }
        var y = {
                SAVE_AND_EXIT: 1,
                REJECT_ALL: 13,
                ACCEPT_ALL: 11,
                CANCEL: 2,
                DISMISS: 15,
                SHOW_ATT_MSG: 16
            },
            O = {
                categories: [],
                specialPurposes: [],
                features: [],
                specialFeatures: [],
                vendors: []
            },
            j = {
                HOME: "HomeView",
                CATEGORIES: "CategoriesView",
                VENDORS: "VendorsView",
                PRIVACY_POLICY: "PrivacyPolicyView",
                VENDOR_DETAILS: "VendorDetailsView",
                CATEGORY_DETAILS: "CategoryDetailsView",
                CUSTOM: "CustomView"
            }
    },
    "anj/": function(e, t, n) {
        e.exports = n.p + "a4e6bfc7a854c6ebc18a33b694e9dc37.svg"
    },
    d7zh: function(e, t, n) {
        "use strict";
        (function(e) {
            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(n, !0).forEach((function(t) {
                        a(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", (function() {
                return m
            }));
            var i = n("2mXy"),
                s = n("FdF9"),
                c = n("H6Cw"),
                l = n("k/EF"),
                u = n("NLdj"),
                p = n("4Q1r"),
                d = n("j1Q3"),
                g = n("o1E3"),
                f = n("KOA+"),
                h = function(e) {
                    var t = e.stack,
                        n = e.selected,
                        o = e.settings,
                        a = e.togglePurposeOrFeature,
                        s = e.toggleText,
                        c = e.toggleOffText,
                        l = e.force,
                        u = e.updateMe,
                        d = e.accordionOpen,
                        g = e.usePurModel;
                    return Object(i.h)("div", {
                        className: "purpose-content"
                    }, Object(i.h)("p", {
                        style: r({}, o.panelFont),
                        className: "stack-description",
                        dangerouslySetInnerHTML: {
                            __html: Object(f.a)({
                                html: t.description
                            })
                        }
                    }), t.categories.map((function(e) {
                        return Object(i.h)(p.a, {
                            key: e._id,
                            purpose: e,
                            selected: n,
                            settings: o,
                            togglePurposeOrFeature: a,
                            toggleText: s,
                            toggleOffText: c,
                            force: l,
                            updateMe: u,
                            parentAccordionOpen: d,
                            usePurModel: g
                        })
                    })))
                },
                m = function(t) {
                    function n() {
                        for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(o)) || this).state = {
                            selected: e.props.startWithLiToggled ? "li" : "consent",
                            forceUpdate: !0
                        }, e.force = function() {
                            return e.setState({
                                forceUpdate: !e.state.forceUpdate
                            })
                        }, e
                    }
                    var o, r;
                    return r = t, (o = n).prototype = Object.create(r.prototype), o.prototype.constructor = o, o.__proto__ = r, n.prototype.render = function() {
                        var t = this,
                            n = this.props,
                            o = n.stacks,
                            r = n.useStacks,
                            a = n.consentOnlyStacks,
                            s = n.purposes,
                            p = n.specialPurposes,
                            f = n.settings,
                            m = n.language,
                            b = n.dev,
                            v = n.usePurModel,
                            y = this.state.selected,
                            O = Object(g.u)(Boolean(b), f, "purposesText", m),
                            j = Object(g.u)(Boolean(b), f, "purposeInfo", m),
                            _ = Object(g.u)(Boolean(b), f, "customPurposesText", m),
                            w = Object(g.u)(Boolean(b), f, "specialPurposesText", m),
                            k = Object(g.u)(Boolean(b), f, "specialPurposesInfo", m),
                            C = Object(g.u)(Boolean(b), f, "toggleText", m),
                            x = Object(g.u)(Boolean(b), f, "toggleOffText", m),
                            T = Object(g.u)(Boolean(b), f, "consentText", m),
                            P = Object(g.u)(Boolean(b), f, "liText", m),
                            N = Object(g.u)(Boolean(b), f, "liInfo", m),
                            S = Object(g.u)(Boolean(b), f, "customPurposesLetter", m),
                            L = "consent" === y && f.specialOnly,
                            A = o.filter((function(e) {
                                return e.childCategories.length > 0
                            })).map((function(e) {
                                return e.categories = e.childCategories.map((function(e) {
                                    return s.find((function(t) {
                                        return t._id === e
                                    }))
                                })).filter((function(e) {
                                    return void 0 !== e && (!("consent" === y && e.requiringConsentVendors.length <= 0) && !("li" === y && e.legIntVendors.length <= 0))
                                })), e
                            })),
                            I = [];
                        A.forEach((function(e) {
                            var t = e.categories.map((function(e) {
                                return e._id
                            }));
                            I = [].concat(I, t)
                        }));
                        var D = [],
                            E = null,
                            B = ("li" !== y || !a) && r,
                            F = s.filter((function(e) {
                                return !0 === e.disclosureOnly ? (D.push(e), !1) : !("consent" === y && e.requiringConsentVendors.length <= 0) && (!("li" === y && e.legIntVendors.length <= 0) && (B && 1 === e.iabId ? (E = e, !1) : !B || !I.find((function(t) {
                                    return t === e._id
                                }))))
                            }));
                        return Object(i.h)("div", {
                            className: "pm-purposes"
                        }, Object(i.h)("div", {
                            className: "pm-type-toggle"
                        }, Object(i.h)("div", {
                            id: "purposes-focus",
                            tabindex: "0",
                            className: "focusable",
                            title: T,
                            onClick: function() {
                                return t.setState({
                                    selected: "consent"
                                })
                            },
                            onKeyDown: function(e) {
                                return Object(g.q)(e.key) && t.setState({
                                    selected: "consent"
                                })
                            }
                        }, T), Object(i.h)("div", {
                            title: P,
                            tabindex: "0",
                            onClick: function() {
                                return t.setState({
                                    selected: "li"
                                })
                            },
                            onKeyDown: function(e) {
                                return Object(g.q)(e.key) && t.setState({
                                    selected: "li"
                                })
                            }
                        }, P), Object(i.h)("span", {
                            className: "li" === y ? "selected li" : "selected consent"
                        })), Object(i.h)("h2", {
                            className: "info-title"
                        }, O), Object(i.h)("p", {
                            className: "pm-sub-p"
                        }, "consent" === y ? j : N), Object(i.h)("div", {
                            className: "legend"
                        }, Object(i.h)("span", {
                            className: "legend-key",
                            "aria-hidden": !0
                        }, S), Object(i.h)("h2", {
                            class: "custom-header"
                        }, _)), !0 === B && Object(i.h)(e, null, null !== E && Object(i.h)(c.a, {
                            key: "purpose-" + E._id,
                            settings: f,
                            name: Object(i.h)("span", null, E.name, "IAB_PURPOSE" !== E.type && Object(i.h)("span", {
                                className: "legend-key inline",
                                "aria-hidden": !0
                            }, S)),
                            accessName: E.name,
                            description: E.description,
                            child: "purposes",
                            language: m,
                            value: E,
                            selected: y,
                            vendors: "consent" === y ? E.requiringConsentVendors : E.legIntVendors,
                            content: Object(i.h)(l.a, {
                                dev: b,
                                selected: y,
                                purpose: E,
                                language: m,
                                settings: f,
                                force: this.force,
                                isCustom: "CUSTOM" === E.type
                            }),
                            toggle: this.props.togglePurposeOrFeature,
                            updateMe: this.state.forceUpdate,
                            dev: b,
                            usePurModel: v && "li" !== this.state.selected
                        }), A.length > 0 && A.map((function(e) {
                            return e.categories.length > 0 ? Object(i.h)(c.a, {
                                key: "stack-" + e._id,
                                settings: f,
                                accessName: e.name,
                                child: "purposes",
                                language: m,
                                value: e,
                                titleContent: Object(i.h)(d.a, {
                                    stack: e,
                                    selected: y,
                                    toggleStack: t.props.toggleStack,
                                    language: m,
                                    settings: f,
                                    dev: b,
                                    usePurModel: v
                                }),
                                content: Object(i.h)(h, {
                                    stack: e,
                                    selected: y,
                                    settings: f,
                                    togglePurposeOrFeature: t.props.togglePurposeOrFeature,
                                    toggleText: C,
                                    toggleOffText: x,
                                    language: m,
                                    force: t.force,
                                    updateMe: t.state.forceUpdate,
                                    dev: b,
                                    isCustom: "CUSTOM" === e.type,
                                    usePurModel: v && "li" !== t.state.selected
                                }),
                                toggle: !1,
                                force: t.force,
                                updateMe: t.state.forceUpdate,
                                dev: b,
                                usePurModel: v && "li" !== t.state.selected
                            }) : null
                        }))), F.map((function(e) {
                            return Object(i.h)(c.a, {
                                key: "purpose-" + e._id,
                                settings: f,
                                name: Object(i.h)("span", null, e.name, "IAB_PURPOSE" !== e.type && Object(i.h)("span", {
                                    className: "legend-key inline",
                                    "aria-hidden": !0
                                }, S)),
                                accessName: e.name,
                                description: e.description,
                                child: "purposes",
                                language: m,
                                value: e,
                                selected: y,
                                vendors: "consent" === y ? e.requiringConsentVendors : e.legIntVendors,
                                content: Object(i.h)(l.a, {
                                    selected: y,
                                    purpose: e,
                                    language: m,
                                    settings: f,
                                    force: t.force,
                                    dev: b,
                                    isCustom: "CUSTOM" === e.type
                                }),
                                toggle: t.props.togglePurposeOrFeature,
                                updateMe: t.state.forceUpdate,
                                dev: b,
                                usePurModel: v && "li" !== t.state.selected
                            })
                        })), (p.length > 0 || D.length > 0) && !L && Object(i.h)("h2", {
                            className: "info-title"
                        }, w), (p.length > 0 || D.length > 0) && !L && Object(i.h)("p", {
                            className: "pm-sub-p"
                        }, k), p.length > 0 && !L && p.map((function(e) {
                            return Object(i.h)(c.a, {
                                key: "special-purpose-" + e._id,
                                settings: f,
                                name: e.name,
                                accessName: e.name,
                                child: "specialPurposes",
                                language: m,
                                value: e,
                                selected: y,
                                description: e.description,
                                content: Object(i.h)(u.a, {
                                    purpose: e,
                                    language: m,
                                    settings: f,
                                    force: t.force,
                                    dev: b,
                                    isCustom: "CUSTOM" === e.type
                                }),
                                updateMe: t.state.forceUpdate,
                                dev: b,
                                usePurModel: v && "li" !== t.state.selected
                            })
                        })), D.length > 0 && D.map((function(e) {
                            return Object(i.h)(c.a, {
                                key: "purpose-" + e._id,
                                settings: f,
                                name: Object(i.h)("span", null, e.name, Object(i.h)("span", {
                                    className: "legend-key inline",
                                    "aria-hidden": !0
                                }, S)),
                                accessName: e.name,
                                description: e.description,
                                child: "purposes",
                                language: m,
                                value: e,
                                selected: y,
                                content: Object(i.h)(l.a, {
                                    disclosure: !0,
                                    selected: y,
                                    purpose: e,
                                    language: m,
                                    settings: f,
                                    force: t.force,
                                    dev: b,
                                    isCustom: "CUSTOM" === e.type
                                }),
                                toggle: !1,
                                updateMe: t.state.forceUpdate,
                                dev: b,
                                usePurModel: v && "li" !== t.state.selected
                            })
                        })))
                    }, n
                }(s.Component)
        }).call(this, n("2mXy").Fragment)
    },
    eLTm: function(e, t, n) {
        "use strict";

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }
        var r = n("2mXy"),
            a = (n("FdF9"), n("gm8T")),
            i = n("o1E3"),
            s = n("YSmr");
        n("EgWA");
        "true" === Object(i.n)("observe_cls") && Object(i.v)();
        t.a = function(e) {
            return function(t) {
                return Object(r.h)(a.g.Provider, {
                    value: Object(i.n)("preload_message")
                }, Object(r.h)(e, o({}, t, {
                    messageId: Object(i.n)("message_id"),
                    dev: "dev" === Object(i.n)("type"),
                    mini: "mini" === Object(i.n)("type"),
                    tiny: "tiny" === Object(i.n)("type"),
                    full: "full" === Object(i.n)("type"),
                    ccpaType: Object(i.n)("ccpa_type"),
                    accountId: Object(i.n)("account_id") || 22,
                    ccpaOrigin: Object(i.n)("ccpa_origin") || s.a,
                    cmpv2Origin: Object(i.n)("consent_origin") || Object(i.n)("cmpv2_origin") || s.b,
                    consentUUID: Object(i.n)("consentUUID") || void 0,
                    ccpaUUID: Object(i.n)("ccpaUUID") || void 0,
                    requestUUID: Object(i.n)("requestUUID") || void 0,
                    mmsOrigin: Object(i.o)(),
                    siteId: Object(i.n)("site_id"),
                    requestId: Object(i.n)("request_id"),
                    preloadMsg: Object(i.n)("preload_message"),
                    pmTab: Object(i.n)("pmTab"),
                    consentLanguage: (Object(i.n)("consentLanguage") || "").toUpperCase() || null,
                    idfaStatus: Object(i.n)("idfaStatus"),
                    isCcpa: Object(i.n)("is_ccpa")
                })))
            }
        }
    },
    eLgm: function(e, t, n) {
        "use strict";

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }
        n.d(t, "a", (function() {
            return r
        }));
        var r = function(e) {
            void 0 === e && (e = {}), o(this, {
                background: "none",
                align: "flex-start",
                vertical: "flex-start",
                width: {
                    type: "%",
                    value: 100
                },
                height: {
                    type: "auto",
                    value: 1
                },
                padding: {
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 10,
                    paddingBottom: 10
                },
                margin: {
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10,
                    marginBottom: 10
                },
                border: {
                    borderWidth: 0,
                    borderColor: "#000000",
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderStyle: "solid"
                }
            }), o(this, e)
        }
    },
    eeaA: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }));
        var o = n("2mXy"),
            r = n("FdF9"),
            a = n("o1E3"),
            i = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        isPurModelChecked: !1,
                        toggleDisplay: !0
                    }, t.toggle = function(e) {
                        var n = t.props,
                            o = n.child,
                            r = n.value,
                            a = n.consentType,
                            i = void 0 !== e ? e : !t.props.checked;
                        "purposes" === o || "features" === o ? (t.props.toggle(r._id, o, i, n.vendors, t.props.legInt), t.setState({
                            checked: i
                        })) : "vendors" === o ? (t.props.toggle(r.vendorId, i, a), t.setState({
                            checked: i
                        })) : "stacks" === o && (t.props.toggle(r._id, i), t.setState({
                            checked: i
                        }))
                    }, t.componentDidMount = function() {
                        t.props.usePurModel && "legInt" !== t.props.consentType && "all" !== t.props.consentType && t.toggle(!0)
                    }, t.componentDidUpdate = function(e) {
                        t.props.usePurModel === e.usePurModel || t.props.legInt || t.setState({
                            isPurModelChecked: t.props.usePurModel,
                            toggleDisplay: !t.state.toggleDisplay
                        }, (function() {
                            t.props.selectedLi || t.toggle(t.state.isPurModelChecked)
                        }))
                    }, t
                }
                var n, r;
                return r = e, (n = t).prototype = Object.create(r.prototype), n.prototype.constructor = n, n.__proto__ = r, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.type,
                        r = t.color,
                        i = t.offColor,
                        s = t.text,
                        c = t.offText,
                        l = t.colorActive,
                        u = t.offActiveColor,
                        p = t.checked,
                        d = t.locked,
                        g = this.props.usePurModel && "legInt" === this.props.consentType || !this.props.usePurModel || this.state.toggleDisplay && !this.props.usePurModel ? "inline-flex" : "none",
                        f = Object(o.h)("button", {
                            className: d ? "pm-toggle locked" : "pm-toggle",
                            tabIndex: "0",
                            type: "button",
                            role: "switch",
                            "aria-checked": p ? "true" : "false",
                            onKeyDown: function(t) {
                                return Object(a.q)(t.key) && e.toggle(!p)
                            },
                            style: {
                                display: g
                            }
                        }, Object(o.h)("span", {
                            className: "off",
                            style: {
                                backgroundColor: p ? "transparent" : i,
                                color: p ? "#000000" : u,
                                borderColor: p ? "#dddddd" : i
                            },
                            onClick: function() {
                                return e.toggle(!1)
                            },
                            role: "switch",
                            "aria-checked": p ? "true" : "false"
                        }, c), Object(o.h)("span", {
                            className: "on",
                            style: {
                                backgroundColor: p ? r : "transparent",
                                color: p ? l : "#000000",
                                borderColor: p ? r : "#dddddd"
                            },
                            role: "switch",
                            "aria-checked": p ? "true" : "false",
                            onClick: function() {
                                return e.toggle(!0)
                            }
                        }, s)),
                        h = p ? "pm-switch checked" : "pm-switch",
                        m = Object(o.h)("button", {
                            tabIndex: "0",
                            type: "button",
                            role: "switch",
                            "aria-checked": p ? "true" : "false",
                            className: d ? h + " locked" : h,
                            onClick: function(t) {
                                t.stopPropagation(), e.toggle()
                            },
                            style: {
                                display: g
                            }
                        }, Object(o.h)("span", {
                            className: "slider round",
                            style: {
                                backgroundColor: p ? r : i
                            }
                        }));
                    return "neutral" === n ? f : m
                }, t
            }(r.Component)
    },
    evnV: function() {},
    fYZW: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", (function() {
                return c
            }));
            var o = n("KOA+"),
                r = n("ffVi"),
                a = n.n(r),
                i = n("o1E3"),
                s = function(t) {
                    var n = t.vendor;
                    return e("a", {
                        tabIndex: t.accordionOpen ? 0 : -1,
                        href: n.policyUrl,
                        target: "_blank",
                        className: "vendor-tag linked"
                    }, e("span", null, n.name), e("img", {
                        src: a.a,
                        alt: ""
                    }))
                },
                c = function(t) {
                    var n = t.vendor,
                        r = t.settings,
                        a = t.language,
                        c = t.dev,
                        l = t.accordionOpen,
                        u = Object(i.u)(Boolean(c), r, "vendorConsent", a);
                    return e("div", {
                        className: "vendor-content"
                    }, n.description && e("p", {
                        className: "pm-sub-p",
                        dangerouslySetInnerHTML: {
                            __html: Object(o.a)({
                                html: n.description
                            })
                        }
                    }), n.cookieHeader && e("div", {
                        className: "vendor-cookie-header"
                    }, n.cookieHeader), e(s, {
                        vendor: n,
                        accordionOpen: l
                    }), e("div", null, n.purposes.length > 0 && e("div", {
                        className: "vendor-info"
                    }, e("h2", {
                        className: "info-title"
                    }, u), n.purposes.map((function(t) {
                        return t ? e("div", null, "• ", t.name || t) : null
                    })))))
                }
        }).call(this, n("2mXy").h)
    },
    ffVi: function(e, t, n) {
        e.exports = n.p + "2700acc9ffd33b5bbb3866bd8b34ab32.svg"
    },
    gm8T: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        })), n.d(t, "e", (function() {
            return a
        })), n.d(t, "f", (function() {
            return i
        })), n.d(t, "h", (function() {
            return s
        })), n.d(t, "g", (function() {
            return c
        })), n.d(t, "c", (function() {
            return l
        })), n.d(t, "b", (function() {
            return u
        })), n.d(t, "d", (function() {
            return p
        }));
        var o = n("FdF9"),
            r = Object(o.createContext)(),
            a = Object(o.createContext)(),
            i = Object(o.createContext)(),
            s = Object(o.createContext)(),
            c = Object(o.createContext)(),
            l = Object(o.createContext)(),
            u = Object(o.createContext)(),
            p = Object(o.createContext)()
    },
    h8E1: function() {},
    hfBA: function(e, t, n) {
        "use strict";

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(n, !0).forEach((function(t) {
                    a(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(n, !0).forEach((function(t) {
                    c(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(n, !0).forEach((function(t) {
                    p(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function d() {
            return (d = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function g() {
            return (g = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(n, !0).forEach((function(t) {
                    m(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function m(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function b() {
            return (b = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function v(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? v(n, !0).forEach((function(t) {
                    O(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function O(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var j = n("2mXy"),
            _ = n("FdF9"),
            w = n("sSoO"),
            k = n("o1E3"),
            C = n("Up9s"),
            x = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        open: !1
                    }, t.toggleAccordion = function(e) {
                        if (void 0 !== e && !["stack-toggle", "opener", "pm-switch", "slider", "view-all"].some((function(t) {
                                return e.target.className.includes(t)
                            }))) {
                            var n = t.panel,
                                o = !t.state.open;
                            t.setState({
                                open: o
                            }, (function() {
                                t.props.force && t.props.force()
                            })), n.style.maxHeight = o ? n.scrollHeight + "px" : null
                        }
                    }, t
                }
                var n, o;
                o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o;
                var a = t.prototype;
                return a.shouldComponentUpdate = function(e, t) {
                    var n = this.panel;
                    n && t.open && setTimeout((function() {
                        n.style.maxHeight = n.scrollHeight + "px"
                    }), 150)
                }, a.render = function() {
                    var e, t = this,
                        n = this.props,
                        o = n.dev,
                        a = n.name,
                        i = n.description,
                        s = n.content,
                        c = n.selected,
                        l = n.toggle,
                        u = n.child,
                        p = n.value,
                        d = n.language,
                        g = n.titleContent,
                        f = n.vendors,
                        h = n.plus,
                        m = n.isCustom,
                        b = n.locked,
                        v = n.isApple,
                        y = n.isCustomVendorLabel1,
                        O = n.isCustomVendorLabel2,
                        x = n.isCustomVendorLabel3,
                        T = n.appleDataBrokerLetter,
                        P = n.customVendorLabel1Letter,
                        N = n.customVendorLabel2Letter,
                        S = n.customVendorLabel3Letter,
                        L = n.usePurModel,
                        A = n.neutralPm,
                        I = this.state.open,
                        D = this.props.settings || {},
                        E = r({}, D.accordionsSpacing, {}, D.accordionsFont),
                        B = r({}, D.panelSpacing, {}, D.panelFont),
                        F = !1;
                    if ("vendors" === u) {
                        var M = p.active,
                            R = p.legInt;
                        p.legIntCategories.length && p.consentCategories.length && (F = Boolean(M) !== Boolean(R)), e = Boolean(M) || Boolean(R)
                    } else e = "li" === c ? p.legInt : "consent" === c ? p.active : p && (p.active || p.legInt);
                    var V = Object(k.u)(Boolean(o), D, "toggleText", d),
                        H = Object(k.u)(Boolean(o), D, "toggleOffText", d);
                    return Object(j.h)("div", {
                        tabIndex: "0",
                        className: h ? "tcfv2-stack plus focusable" : "tcfv2-stack focusable",
                        onKeyDown: function(e) {
                            return Object(k.q)(e.key) && t.toggleAccordion(e)
                        }
                    }, Object(j.h)("div", {
                        className: m ? "stack-row custom" : "stack-row",
                        style: {
                            position: "relative"
                        }
                    }, Object(j.h)("div", {
                        className: I ? "accordion active" : "accordion",
                        style: E,
                        onClick: this.toggleAccordion
                    }, h ? Object(j.h)("span", {
                        className: "plus-minus"
                    }, I ? "-" : "+") : Object(j.h)("span", {
                        className: I ? "chevron up" : "chevron down"
                    }), I && !g ? Object(j.h)("b", null, a) : a, v && Object(j.h)("span", {
                        className: "legend-key apple-broker"
                    }, T), y && Object(j.h)("span", {
                        className: "legend-key is-custom-vendor-label-1",
                        "aria-hidden": !0
                    }, P), O && Object(j.h)("span", {
                        className: "legend-key is-custom-vendor-label-2",
                        "aria-hidden": !0
                    }, N), x && Object(j.h)("span", {
                        className: "legend-key is-custom-vendor-label-3",
                        "aria-hidden": !0
                    }, S), g || null), l ? A ? Object(j.h)(C.a, {
                        settings: D,
                        toggle: l,
                        vendors: f,
                        value: p,
                        child: u,
                        dev: o,
                        language: d
                    }) : Object(j.h)(w.a, {
                        type: D.toggleType,
                        color: D.toggleColor,
                        colorActive: D.toggleActiveColor,
                        offColor: D.toggleOffColor,
                        neutralColor: D.toggleNeutralColor,
                        offActiveColor: D.toggleOffActiveColor,
                        text: V,
                        offText: H,
                        toggle: l,
                        child: u,
                        vendors: f,
                        value: p,
                        locked: b,
                        legInt: "li" === c,
                        checked: e,
                        tabbable: !0,
                        partialConsent: F,
                        consentType: "vendors" === u ? "all" : null,
                        dev: o,
                        settings: D,
                        language: d,
                        usePurModel: L
                    }) : null), Object(j.h)("div", {
                        ref: function(e) {
                            return t.panel = e
                        },
                        className: "panel"
                    }, Object(j.h)("p", {
                        style: r({}, B)
                    }, s ? _.default.cloneElement(s, {
                        accordionOpen: I
                    }) : i)))
                }, t
            }(_.Component),
            T = n("3u6x"),
            P = n("Pidg"),
            N = n.n(P),
            S = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        open: !1
                    }, t.toggleAccordion = function() {
                        var e = t.content,
                            n = !t.state.open;
                        t.setState({
                            open: n
                        }, t.props.force), e.style.maxHeight = n ? e.scrollHeight + "px" : null
                    }, t.openLink = function() {
                        return window.open(t.props.vendor.policyUrl, "_blank")
                    }, t
                }
                var n, o;
                return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.vendor,
                        o = t.settings,
                        r = t.language,
                        a = t.dev,
                        i = t.accordionOpen,
                        s = t.isSpecialPurposeOrFeature,
                        c = this.state.open,
                        l = n.cookies ? n.cookies.length : 0,
                        u = n.cookies || [],
                        p = Object(k.u)(Boolean(a), o, "cookieText", r),
                        d = Object(k.u)(Boolean(a), o, "tableCookieText", r),
                        g = Object(k.u)(Boolean(a), o, "tableDomainText", r),
                        f = Object(k.u)(Boolean(a), o, "tableDurationText", r),
                        h = Object(k.u)(Boolean(a), o, "otherLetter", r);
                    return Object(j.h)("div", {
                        className: "toggle-vendor"
                    }, Object(j.h)("div", {
                        style: {
                            position: "relative"
                        }
                    }, Object(j.h)("button", {
                        tabIndex: i || void 0 === i ? 0 : -1,
                        className: c ? "expand active" : "expand",
                        onClick: l > 0 ? this.toggleAccordion : this.openLink
                    }, l > 0 ? Object(j.h)("span", {
                        className: "plusminus"
                    }, c ? "-" : "+") : Object(j.h)("img", {
                        src: N.a,
                        alt: ""
                    }), Object(j.h)("span", {
                        style: {
                            padding: "0 5px"
                        }
                    }, n.name), "IAB" !== n.vendorType && !s && Object(j.h)("span", {
                        className: "legend-key",
                        "aria-hidden": !0
                    }, h), l > 0 ? Object(j.h)("span", {
                        style: {
                            marginLeft: "5px"
                        }
                    }, "(", l, " ", p, ")") : null)), Object(j.h)("div", {
                        ref: function(t) {
                            return e.content = t
                        },
                        className: "content"
                    }, Object(j.h)("div", {
                        className: "inner-content"
                    }, Object(j.h)(T.a, {
                        vendor: n
                    }), Object(j.h)("table", {
                        className: "tvtbl"
                    }, Object(j.h)("tr", null, Object(j.h)("th", null, d), Object(j.h)("th", null, g), Object(j.h)("th", null, f)), u.map((function(e) {
                        return Object(j.h)("tr", null, Object(j.h)("td", null, Object(j.h)("span", null, e.name)), Object(j.h)("td", null, e.domain), Object(j.h)("td", null, Object(j.h)("span", null, e.cookieLifeSpan)))
                    }))))))
                }, t
            }(_.Component),
            L = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        open: !1,
                        consentAll: !1,
                        liAll: !1,
                        disclosureAll: !1,
                        vendorsAll: !1
                    }, t.toggleAccordion = function() {
                        var e = t.content,
                            n = !t.state.open;
                        t.setState({
                            open: n
                        }, t.props.force), e.style.maxHeight = n ? e.scrollHeight + "px" : null
                    }, t.toggleConsentAll = function() {
                        t.setState({
                            consentAll: !t.state.consentAll
                        }, t.props.force)
                    }, t.toggleLiAll = function() {
                        t.setState({
                            liAll: !t.state.liAll
                        }, t.props.force)
                    }, t.toggleDisclosure = function() {
                        t.setState({
                            disclosureAll: !t.state.disclosureAll
                        }, t.props.force)
                    }, t.toggleVendors = function() {
                        t.setState({
                            vendorsAll: !t.state.vendorsAll
                        }, t.props.force)
                    }, t.openLink = function() {
                        return window.open(t.props.vendor.policyUrl, "_blank")
                    }, t
                }
                var n, o;
                o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o;
                var r = t.prototype;
                return r.shouldComponentUpdate = function(e, t) {
                    var n = this.content;
                    n && t.open && (n.style.maxHeight = n.scrollHeight + "px")
                }, r.componentDidUpdate = function(e) {
                    e.parentAccordionOpen && !this.props.parentAccordionOpen && (this.setState({
                        open: !1
                    }), this.content.style.maxHeight = null)
                }, r.render = function() {
                    var e, t = this,
                        n = this.props,
                        o = n.purpose,
                        r = n.selected,
                        a = n.settings,
                        i = n.togglePurposeOrFeature,
                        s = n.toggleText,
                        c = n.toggleOffText,
                        l = n.language,
                        u = n.force,
                        p = n.dev,
                        d = n.parentAccordionOpen,
                        g = n.isSpecialPurpose,
                        f = n.isFeature,
                        h = n.usePurModel,
                        m = n.neutralPm,
                        b = this.state,
                        v = b.open,
                        y = b.consentAll,
                        O = b.liAll,
                        _ = b.disclosureAll,
                        x = b.vendorsAll,
                        T = Object(k.u)(Boolean(p), a, "viewAllText", l),
                        P = Object(k.u)(Boolean(p), a, "viewLessText", l),
                        N = Object(k.u)(Boolean(p), a, "otherText", l),
                        L = Object(k.u)(Boolean(p), a, "otherLetter", l),
                        A = Object(k.u)(Boolean(p), a, "customPurposesLetter", l),
                        I = Object(k.u)(Boolean(p), a, "purposeVendorTitle", l);
                    a.alphabetizeVendors && (o.requiringConsentVendors && o.requiringConsentVendors.sort((function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                    })), o.legIntVendors && o.legIntVendors.sort((function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                    })), o.disclosureOnlyVendors && o.disclosureOnlyVendors.sort((function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                    })), o.vendors && o.vendors.sort((function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                    })));
                    var D = d ? 0 : -1,
                        E = !h || "li" === r;
                    return Object(j.h)("div", {
                        className: "toggle-purpose"
                    }, Object(j.h)("div", {
                        className: "stack-row",
                        style: {
                            position: "relative"
                        }
                    }, Object(j.h)("button", {
                        tabIndex: D,
                        className: v ? "opener active" : "opener",
                        onClick: this.toggleAccordion,
                        onKeyDown: function(e) {
                            return Object(k.q)(e.key) && t.toggleAccordion()
                        }
                    }, Object(j.h)("span", {
                        className: "plusminus"
                    }, v ? "-" : "+"), Object(j.h)("span", null, o.name, "CUSTOM" === o.type && Object(j.h)("span", {
                        className: "legend-key inline",
                        "aria-hidden": !0
                    }, A))), i && E && (m ? Object(j.h)(C.a, {
                        settings: a,
                        value: o,
                        toggle: i,
                        child: "purposes",
                        vendors: o.requiringConsentVendors,
                        dev: p,
                        language: l,
                        style: {
                            right: 8
                        }
                    }) : Object(j.h)(w.a, ((e = {
                        tabbable: 0 == D,
                        type: a.toggleType,
                        color: a.toggleColor,
                        colorActive: a.toggleActiveColor,
                        offColor: a.toggleOffColor,
                        offActiveColor: a.toggleOffActiveColor,
                        text: s,
                        offText: c,
                        toggle: i,
                        child: "purposes",
                        vendors: "consent" === r ? o.requiringConsentVendors : o.legIntVendors,
                        value: o,
                        legInt: "li" === r,
                        checked: "li" === r ? o.legInt : o.active
                    }).tabbable = d, e.dev = p, e.settings = a, e.language = l, e)))), Object(j.h)("div", {
                        ref: function(e) {
                            return t.content = e
                        },
                        className: "main"
                    }, Object(j.h)("p", {
                        className: "sub-purpose-description"
                    }, Object(k.f)(o.description)), "consent" === r && Object(j.h)("div", {
                        className: "inner-main"
                    }, Object(j.h)("div", {
                        className: "legend",
                        style: {
                            textAlign: "left"
                        }
                    }, Object(j.h)("span", {
                        className: "legend-key",
                        "aria-hidden": !0
                    }, L), Object(j.h)("h2", {
                        class: "custom-header"
                    }, N)), Object(j.h)("div", {
                        className: "pv-title"
                    }, I), o.requiringConsentVendors.slice(0, y ? o.requiringConsentVendors.length : 3).map((function(e) {
                        return Object(j.h)(S, {
                            vendor: e,
                            key: e.vendorId,
                            language: l,
                            settings: a,
                            force: u,
                            accordionOpen: v,
                            isSpecialPurpose: g
                        })
                    })), o.requiringConsentVendors.length > 3 && Object(j.h)("div", {
                        tabIndex: v ? 0 : -1,
                        className: "view-all",
                        onClick: this.toggleConsentAll,
                        onKeyDown: function(e) {
                            return Object(k.q)(e.key) && t.toggleConsentAll()
                        }
                    }, y ? P : T)), "li" === r && Object(j.h)("div", {
                        className: "inner-main"
                    }, Object(j.h)("div", {
                        className: "legend",
                        style: {
                            textAlign: "left"
                        }
                    }, Object(j.h)("span", {
                        className: "legend-key",
                        "aria-hidden": !0
                    }, L), Object(j.h)("h2", {
                        class: "custom-header"
                    }, N)), Object(j.h)("div", {
                        className: "pv-title"
                    }, I), o.legIntVendors.slice(0, O ? o.legIntVendors.length : 3).map((function(e) {
                        return Object(j.h)(S, {
                            vendor: e,
                            key: e.vendorId,
                            language: l,
                            settings: a,
                            force: u,
                            accordionOpen: v
                        })
                    })), o.legIntVendors.length > 3 && Object(j.h)("div", {
                        tabIndex: v ? 0 : -1,
                        className: "view-all",
                        onClick: this.toggleLiAll,
                        onKeyDown: function(e) {
                            return Object(k.q)(e.key) && t.toggleLiAll()
                        }
                    }, O ? P : T)), "disclosure" === r && Object(j.h)("div", {
                        className: "inner-main"
                    }, Object(j.h)("div", {
                        className: "legend",
                        style: {
                            textAlign: "left"
                        }
                    }, Object(j.h)("span", {
                        className: "legend-key",
                        "aria-hidden": !0
                    }, L), Object(j.h)("h2", {
                        class: "custom-header"
                    }, N)), Object(j.h)("div", {
                        className: "pv-title"
                    }, I), o.disclosureOnlyVendors.slice(0, _ ? o.disclosureOnlyVendors.length : 3).map((function(e) {
                        return Object(j.h)(S, {
                            vendor: e,
                            key: e.vendorId,
                            language: l,
                            settings: a,
                            force: u,
                            accordionOpen: v
                        })
                    })), o.disclosureOnlyVendors.length > 3 && Object(j.h)("div", {
                        tabIndex: v ? 0 : -1,
                        className: "view-all",
                        onClick: this.toggleDisclosure,
                        onKeyDown: function(e) {
                            return Object(k.q)(e.key) && t.toggleDisclosure()
                        }
                    }, _ ? P : T)), "vendors" === r && Object(j.h)("div", {
                        className: "inner-main"
                    }, !g && !f && Object(j.h)("div", {
                        className: "legend",
                        style: {
                            textAlign: "left"
                        }
                    }, Object(j.h)("span", {
                        className: "legend-key",
                        "aria-hidden": !0
                    }, L), Object(j.h)("h2", {
                        class: "custom-header"
                    }, N)), Object(j.h)("div", {
                        className: "pv-title"
                    }, I), o.vendors.slice(0, x ? o.vendors.length : 3).map((function(e) {
                        return Object(j.h)(S, {
                            vendor: e,
                            key: e.vendorId,
                            language: l,
                            settings: a,
                            force: u,
                            accordionOpen: v,
                            isSpecialPurposeOrFeature: g || f
                        })
                    })), o.vendors.length > 3 && Object(j.h)("div", {
                        tabIndex: v ? 0 : -1,
                        className: "view-all",
                        onClick: this.toggleVendors,
                        onKeyDown: function(e) {
                            return Object(k.q)(e.key) && t.toggleVendors()
                        }
                    }, x ? P : T))))
                }, t
            }(_.Component),
            A = function(e) {
                var t = e.disclosureOnlyPurposes,
                    n = e.specialPurposesInfoText,
                    o = e.specialPurposes,
                    r = e.settings,
                    a = e.force,
                    i = e.updateMe,
                    s = e.accordionOpen;
                return Object(j.h)("div", {
                    className: "special-purposes-list"
                }, Object(j.h)("p", {
                    style: "margin-bottom:15px;"
                }, Object(k.f)(n)), o.map((function(e) {
                    return Object(j.h)(L, {
                        key: e._id,
                        purpose: e,
                        selected: "vendors",
                        settings: r,
                        force: a,
                        updateMe: i,
                        parentAccordionOpen: s,
                        isSpecialPurpose: !0
                    })
                })), t.length > 0 && t.map((function(e) {
                    return Object(j.h)(L, {
                        key: e._id,
                        purpose: e,
                        selected: "disclosure",
                        settings: r,
                        force: a,
                        updateMe: i,
                        parentAccordionOpen: s
                    })
                })))
            },
            I = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                var n, o;
                return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                    var e = this.props,
                        t = e.specialPurposes,
                        n = e.disclosureOnlyPurposes,
                        o = e.settings,
                        r = e.language,
                        a = e.force,
                        i = e.updateMe,
                        s = e.dev,
                        c = e.usePurModel,
                        l = e.neutralPm,
                        u = Object(k.u)(Boolean(s), o, "specialPurposesText", r),
                        p = Object(k.u)(Boolean(s), o, "specialPurposesInfo", r);
                    return Object(j.h)(x, {
                        settings: o,
                        name: u,
                        child: "specialPurposes-parent",
                        language: r,
                        value: null,
                        force: a,
                        updateMe: i,
                        description: null,
                        content: Object(j.h)(A, {
                            disclosureOnlyPurposes: n,
                            specialPurposesInfoText: p,
                            specialPurposes: t,
                            settings: o,
                            language: r,
                            force: a,
                            dev: s,
                            updateMe: i
                        }),
                        usePurModel: c,
                        neutralPm: l
                    })
                }, t
            }(_.Component),
            D = function(e) {
                var t = e.featuresInfo,
                    n = e.features,
                    o = e.settings,
                    r = e.force,
                    a = e.updateMe,
                    i = e.accordionOpen;
                return Object(j.h)("div", {
                    className: "features-list"
                }, Object(j.h)("p", {
                    style: "margin-bottom:15px;"
                }, Object(k.f)(t)), n.map((function(e) {
                    return Object(j.h)(L, {
                        key: e._id,
                        purpose: e,
                        selected: "vendors",
                        settings: o,
                        force: r,
                        updateMe: a,
                        parentAccordionOpen: i,
                        isFeature: !0
                    })
                })))
            },
            E = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                var n, o;
                return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                    var e = this.props,
                        t = e.features,
                        n = e.settings,
                        o = e.language,
                        r = e.force,
                        a = e.updateMe,
                        i = e.dev,
                        s = e.usePurModel,
                        c = Object(k.u)(Boolean(i), n, "featuresText", o),
                        l = Object(k.u)(Boolean(i), n, "featuresInfo", o);
                    return Object(j.h)(x, {
                        settings: n,
                        name: c,
                        child: "features",
                        language: o,
                        value: null,
                        force: r,
                        description: null,
                        content: Object(j.h)(D, {
                            featuresInfo: l,
                            features: t,
                            settings: n,
                            language: o,
                            force: r,
                            updateMe: a
                        }),
                        usePurModel: s
                    })
                }, t
            }(_.Component),
            B = n("KOA+"),
            F = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        consentAll: !1,
                        liAll: !1,
                        discolsureAll: !1
                    }, t.toggleConsentAll = function() {
                        t.setState({
                            consentAll: !t.state.consentAll
                        }, t.props.force)
                    }, t.toggleLiAll = function() {
                        t.setState({
                            liAll: !t.state.liAll
                        }, t.props.force)
                    }, t.toggleDisclosure = function() {
                        t.setState({
                            discolsureAll: !t.state.discolsureAll
                        }, t.props.force)
                    }, t
                }
                var n, o;
                return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.selected,
                        o = t.purpose,
                        r = t.settings,
                        a = t.language,
                        i = t.force,
                        s = t.dev,
                        c = t.disclosure,
                        l = t.isCustom,
                        u = t.accordionOpen,
                        p = this.state,
                        d = p.consentAll,
                        g = p.liAll,
                        f = p.discolsureAll,
                        h = Object(k.u)(Boolean(s), r, "viewAllText", a),
                        m = Object(k.u)(Boolean(s), r, "viewLessText", a),
                        b = Object(k.u)(Boolean(s), r, "otherText", a),
                        v = Object(k.u)(Boolean(s), r, "otherLetter", a),
                        y = Object(k.u)(Boolean(s), r, "purposeVendorTitle", a),
                        O = l ? Object(j.h)("p", {
                            style: "margin-bottom:15px;",
                            dangerouslySetInnerHTML: {
                                __html: Object(B.a)({
                                    html: o.description
                                })
                            }
                        }) : Object(j.h)("p", {
                            style: "margin-bottom:15px;"
                        }, Object(k.f)(o.description));
                    return r.alphabetizeVendors && (o.requiringConsentVendors && o.requiringConsentVendors.sort((function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                    })), o.legIntVendors && o.legIntVendors.sort((function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                    })), o.disclosureOnlyVendors && o.disclosureOnlyVendors.sort((function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                    }))), Object(j.h)("div", {
                        className: "purpose-content"
                    }, O, "consent" === n && Object(j.h)("div", null, Object(j.h)("div", {
                        className: "policies"
                    }, Object(j.h)("div", {
                        className: "legend xxx"
                    }, Object(j.h)("span", {
                        className: "legend-key",
                        "aria-hidden": !0
                    }, v), Object(j.h)("h2", {
                        class: "custom-header"
                    }, b)), Object(j.h)("div", {
                        className: "pv-title"
                    }, y), o.requiringConsentVendors.slice(0, d ? o.requiringConsentVendors.length : 3).map((function(e) {
                        return Object(j.h)(S, {
                            vendor: e,
                            key: e.vendorId,
                            language: a,
                            settings: r,
                            force: i,
                            accordionOpen: u
                        })
                    })), o.requiringConsentVendors.length > 3 && Object(j.h)("div", {
                        tabIndex: u ? 0 : -1,
                        className: "view-all",
                        onClick: this.toggleConsentAll,
                        onKeyDown: function(t) {
                            return Object(k.q)(t.key) && e.toggleConsentAll()
                        }
                    }, d ? m : h))), "li" === n && Object(j.h)("div", {
                        style: {
                            position: "relative"
                        }
                    }, Object(j.h)("div", {
                        className: "policies"
                    }, Object(j.h)("div", {
                        className: "legend"
                    }, Object(j.h)("span", {
                        className: "legend-key",
                        "aria-hidden": !0
                    }, v), Object(j.h)("h2", {
                        class: "custom-header"
                    }, b)), Object(j.h)("div", {
                        className: "pv-title"
                    }, y), o.legIntVendors.slice(0, g ? o.legIntVendors.length : 3).map((function(e) {
                        return Object(j.h)(S, {
                            vendor: e,
                            key: e.vendorId,
                            language: a,
                            settings: r,
                            force: i,
                            accordionOpen: u
                        })
                    })), o.legIntVendors.length > 3 && Object(j.h)("div", {
                        tabIndex: u ? 0 : -1,
                        className: "view-all",
                        onClick: this.toggleLiAll,
                        onKeyDown: function(t) {
                            return Object(k.q)(t.key) && e.toggleLiAll()
                        }
                    }, g ? m : h))), !0 === c && Object(j.h)("div", {
                        style: {
                            position: "relative"
                        }
                    }, Object(j.h)("div", {
                        className: "policies"
                    }, Object(j.h)("div", {
                        className: "legend"
                    }, Object(j.h)("span", {
                        className: "legend-key",
                        "aria-hidden": !0
                    }, v), Object(j.h)("h2", {
                        class: "custom-header"
                    }, b)), Object(j.h)("div", {
                        className: "pv-title"
                    }, y), o.disclosureOnlyVendors.slice(0, f ? o.disclosureOnlyVendors.length : 3).map((function(e) {
                        return Object(j.h)(S, {
                            vendor: e,
                            key: e.vendorId,
                            language: a,
                            settings: r,
                            force: i,
                            accordionOpen: u
                        })
                    })), o.disclosureOnlyVendors.length > 3 ? Object(j.h)("div", {
                        tabIndex: u ? 0 : -1,
                        className: "view-all",
                        onClick: this.toggleDisclosure,
                        onKeyDown: function(t) {
                            return Object(k.q)(t.key) && e.toggleDisclosure()
                        }
                    }, f ? m : h) : null)))
                }, t
            }(_.Component),
            M = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        vendorsAll: !1
                    }, t.toggleVendors = function() {
                        t.setState({
                            vendorsAll: !t.state.vendorsAll
                        }, t.props.force)
                    }, t
                }
                var n, o;
                return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.feature,
                        o = t.settings,
                        r = t.language,
                        a = t.force,
                        i = t.dev,
                        s = t.isCustom,
                        c = t.accordionOpen,
                        l = this.state.vendorsAll,
                        u = Object(k.u)(Boolean(i), o, "viewAllText", r),
                        p = Object(k.u)(Boolean(i), o, "viewLessText", r),
                        d = Object(k.u)(Boolean(i), o, "purposeVendorTitle", r);
                    return Object(j.h)("div", {
                        className: "purpose-content"
                    }, Object(j.h)("p", {
                        style: "margin-bottom:15px;"
                    }, s ? n.description : Object(k.f)(n.description)), Object(j.h)("div", {
                        style: {
                            position: "relative"
                        }
                    }, Object(j.h)("div", {
                        className: "policies"
                    }, Object(j.h)("div", {
                        className: "pv-title"
                    }, d), n.vendors.slice(0, l ? n.vendors.length : 3).map((function(e) {
                        return Object(j.h)(S, {
                            vendor: e,
                            key: e.vendorId,
                            language: r,
                            settings: o,
                            force: a,
                            isSpecialPurposeOrFeature: !0
                        })
                    })), n.vendors.length > 3 && Object(j.h)("div", {
                        tabIndex: c ? 0 : -1,
                        className: "view-all",
                        onClick: this.toggleVendors,
                        onKeyDown: function(t) {
                            return Object(k.q)(t.key) && e.toggleVendors()
                        }
                    }, l ? p : u))))
                }, t
            }(_.Component),
            R = (n("1mLn"), function(e) {
                var t = e.stack,
                    n = e.selected,
                    o = e.toggleStack,
                    r = e.language,
                    a = e.settings,
                    i = e.dev,
                    c = e.usePurModel,
                    l = e.neutralPm;
                Object(_.useEffect)((function(e) {
                    c && o(e, t.categories, !0, "li" === n)
                }), []);
                var u = {
                    active: 0,
                    rejected: 0,
                    neutral: 0
                };
                t.categories.forEach((function(e) {
                    "consent" === n && e.active ? u.active += 1 : "consent" === n && !1 === e.active ? u.rejected += 1 : "consent" === n && null === e.active && (u.neutral += 1), "li" === n && e.legInt ? u.active += 1 : "li" !== n || e.legInt || (u.rejected += 1)
                }));
                var p = "partial";
                u.active > 0 && 0 === u.rejected && (p = "accepted"), u.rejected > 0 && 0 === u.active && (p = "rejected"), l && (p = u.rejected === t.categories.length ? "rejected" : u.active === t.categories.length ? "accepted" : "partial");
                var d = a.toggleOffColor;
                "accepted" === p && (d = a.toggleColor), "partial" === p && (d = a.toggleNeutralColor), delete s({}, a.accordionsFont).color;
                var g = "accepted" !== p;
                c && (p = "accepted");
                var f = Object(k.u)(Boolean(i), a, "toggleOnText", r),
                    h = Object(k.u)(Boolean(i), a, "toggleOffText", r),
                    m = f || h ? " has-text" : "",
                    b = "accepted" === p ? " pm-switch checked" + m : " pm-switch" + m,
                    v = "li" !== n && c ? "none" : "inline-flex",
                    y = function(e) {
                        return o(e, t.categories, g, "li" === n)
                    };
                return Object(j.h)("div", {
                    className: "stack-title",
                    style: {
                        display: l && "flex"
                    }
                }, Object(j.h)("h4", {
                    style: s({}, a.accordionsFont, {
                        width: l && "75%"
                    })
                }, t.name), l ? Object(j.h)(C.a, {
                    value: {
                        active: "accepted" === p || "rejected" !== p && null
                    },
                    settings: a,
                    toggleStack: function(e, n) {
                        return o(e, t.categories, n, !1)
                    }
                }) : Object(j.h)("label", {
                    className: "pm-nswitch " + p + b,
                    onKeyDown: function(e) {
                        return Object(k.q)(e.key) && y(e)
                    },
                    style: {
                        display: v
                    }
                }, Object(j.h)("span", {
                    tabIndex: "0",
                    className: "accepted" === p ? "slider round is-checked" : "slider round",
                    style: {
                        backgroundColor: d
                    },
                    onClick: y
                }, "partial" === p ? null : "accepted" === p ? f : h)))
            }),
            V = function(e) {
                var t = e.stack,
                    n = e.selected,
                    o = e.settings,
                    r = e.togglePurposeOrFeature,
                    a = e.toggleText,
                    i = e.toggleOffText,
                    s = e.force,
                    c = e.updateMe,
                    l = e.accordionOpen,
                    p = e.usePurModel,
                    d = e.neutralPm;
                return Object(j.h)("div", {
                    className: "purpose-content"
                }, Object(j.h)("p", {
                    style: u({}, o.panelFont),
                    className: "stack-description",
                    dangerouslySetInnerHTML: {
                        __html: Object(B.a)({
                            html: t.description
                        })
                    }
                }), t.categories.map((function(e) {
                    return Object(j.h)(L, {
                        key: e._id,
                        purpose: e,
                        selected: n,
                        settings: o,
                        togglePurposeOrFeature: r,
                        toggleText: a,
                        toggleOffText: i,
                        force: s,
                        updateMe: c,
                        parentAccordionOpen: l,
                        usePurModel: p,
                        neutralPm: d
                    })
                })))
            },
            H = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        forceUpdate: !0
                    }, t.force = function() {
                        return t.setState({
                            forceUpdate: !t.state.forceUpdate
                        })
                    }, t
                }
                var n, o;
                return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.stacks,
                        o = t.useStacks,
                        r = t.consentOnlyStacks,
                        a = t.purposes,
                        i = t.specialPurposes,
                        s = t.specialFeatures,
                        c = t.features,
                        l = t.settings,
                        u = t.language,
                        p = t.selected,
                        d = t.dev,
                        g = t.usePurModel,
                        f = t.neutralPm,
                        h = Object(k.u)(Boolean(d), l, "toggleText", u),
                        m = Object(k.u)(Boolean(d), l, "toggleOffText", u),
                        b = Object(k.u)(Boolean(d), l, "customPurposesLetter", u),
                        v = n.filter((function(e) {
                            return e.childCategories.length > 0
                        })).map((function(e) {
                            return e.categories = e.childCategories.map((function(e) {
                                return a.find((function(t) {
                                    return t._id === e
                                }))
                            })).filter((function(e) {
                                return void 0 !== e && (!("consent" === p && e.requiringConsentVendors.length <= 0) && !("li" === p && e.legIntVendors.length <= 0))
                            })), e
                        })),
                        y = [];
                    v.forEach((function(e) {
                        var t = e.categories.map((function(e) {
                            return e._id
                        }));
                        y = [].concat(y, t)
                    }));
                    var O = ("li" !== p || !r) && o,
                        _ = [],
                        w = null,
                        C = a.filter((function(e) {
                            return !0 === e.disclosureOnly ? (_.push(e), !1) : !("consent" === p && e.requiringConsentVendors.length <= 0) && (!("li" === p && e.legIntVendors.length <= 0) && (O && 1 === e.iabId ? (w = e, !1) : !O || !y.find((function(t) {
                                return t === e._id
                            }))))
                        }));
                    return Object(j.h)("div", {
                        className: "pm-main"
                    }, !0 === O && Object(j.h)("div", {
                        className: "type-box"
                    }, null !== w && Object(j.h)(x, {
                        key: "purpose-" + w._id,
                        settings: l,
                        name: Object(j.h)("span", null, w.name, "IAB_PURPOSE" !== w.type && Object(j.h)("span", {
                            className: "legend-key inline",
                            "aria-hidden": !0
                        }, b)),
                        description: w.description,
                        child: "purposes",
                        language: u,
                        value: w,
                        selected: p,
                        vendors: "consent" === p ? w.requiringConsentVendors : w.legIntVendors,
                        content: Object(j.h)(F, {
                            dev: d,
                            selected: p,
                            purpose: w,
                            language: u,
                            settings: l,
                            force: this.force,
                            isCustom: "CUSTOM" === w.type
                        }),
                        toggle: this.props.togglePurposeOrFeature,
                        updateMe: this.state.forceUpdate,
                        dev: d,
                        usePurModel: g,
                        neutralPm: this.props.neutralPm
                    }), v.length > 0 && v.map((function(t) {
                        return t.categories.length > 0 ? Object(j.h)(x, {
                            key: "stack-" + t._id,
                            settings: l,
                            child: "purposes",
                            language: u,
                            value: t,
                            titleContent: Object(j.h)(R, {
                                stack: t,
                                selected: p,
                                toggleStack: e.props.toggleStack,
                                language: u,
                                settings: l,
                                dev: d,
                                usePurModel: g,
                                neutralPm: f
                            }),
                            content: Object(j.h)(V, {
                                stack: t,
                                selected: p,
                                settings: l,
                                togglePurposeOrFeature: e.props.togglePurposeOrFeature,
                                toggleText: h,
                                toggleOffText: m,
                                language: u,
                                updateMe: e.state.forceUpdate,
                                dev: d,
                                isCustom: "CUSTOM" === t.type,
                                usePurModel: g,
                                force: e.force,
                                neutralPm: f
                            }),
                            toggle: !1,
                            force: e.force,
                            updateMe: e.state.forceUpdate,
                            dev: d,
                            usePurModel: g,
                            neutralPm: e.props.neutralPm
                        }) : null
                    }))), Object(j.h)("div", {
                        className: C && C.length > 0 ? "type-box" : ""
                    }, C.map((function(t) {
                        return Object(j.h)(x, {
                            key: "purpose-" + t._id,
                            settings: l,
                            name: Object(j.h)("span", null, t.name, "IAB_PURPOSE" !== t.type && Object(j.h)("span", {
                                className: "legend-key inline",
                                "aria-hidden": !0
                            }, b)),
                            description: t.description,
                            child: "purposes",
                            language: u,
                            value: t,
                            selected: p,
                            vendors: "consent" === p ? t.requiringConsentVendors : t.legIntVendors,
                            content: Object(j.h)(F, {
                                selected: p,
                                purpose: t,
                                language: u,
                                settings: l,
                                force: e.force,
                                dev: d,
                                isCustom: "CUSTOM" === t.type
                            }),
                            toggle: e.props.togglePurposeOrFeature,
                            updateMe: e.state.forceUpdate,
                            dev: d,
                            usePurModel: g,
                            neutralPm: e.props.neutralPm
                        })
                    }))), "consent" === p && s.length > 0 && Object(j.h)("div", {
                        className: "type-box"
                    }, s.map((function(t) {
                        return Object(j.h)(x, {
                            key: "special-purpose-" + t._id,
                            settings: l,
                            name: t.name,
                            child: "features",
                            language: u,
                            value: t,
                            vendors: t.vendors,
                            description: t.description,
                            content: Object(j.h)(M, {
                                selected: p,
                                feature: t,
                                language: u,
                                settings: l,
                                force: e.force,
                                dev: d,
                                isCustom: "CUSTOM" === t.type
                            }),
                            toggle: e.props.togglePurposeOrFeature,
                            dev: d,
                            usePurModel: g,
                            neutralPm: e.props.neutralPm
                        })
                    }))), "consent" === p && (i.length > 0 || _.length > 0) && Object(j.h)("div", {
                        className: "type-box"
                    }, Object(j.h)(I, {
                        dev: d,
                        specialPurposes: i,
                        disclosureOnlyPurposes: _,
                        language: u,
                        settings: l,
                        force: this.force,
                        updateMe: this.state.forceUpdate,
                        usePurModel: g,
                        neutralPm: this.props.neutralPm
                    })), "consent" === p && c.length > 0 && Object(j.h)("div", {
                        className: "type-box"
                    }, Object(j.h)(E, {
                        dev: d,
                        features: c,
                        language: u,
                        settings: l,
                        force: this.force,
                        updateMe: this.state.forceUpdate,
                        usePurModel: g
                    })))
                }, t
            }(_.Component),
            U = n("I+oa"),
            q = n.n(U),
            z = n("t0Ov"),
            W = n("YSmr"),
            K = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        filter: ""
                    }, t.updateFilter = function(e) {
                        return t.setState({
                            filter: e.target.value
                        })
                    }, t
                }
                var n, o;
                return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.settings,
                        o = t.language,
                        r = t.dev,
                        a = t.toggleVendor,
                        i = t.usePurModel,
                        s = t.idfaStatus,
                        c = t.neutralPm,
                        l = this.state.filter,
                        u = t.vendors.filter((function(e) {
                            return "" === l || e.name.toLowerCase().indexOf(l.toLowerCase()) >= 0
                        })),
                        p = Object(k.u)(Boolean(r), n, "searchText", o),
                        d = Object(k.u)(Boolean(r), n, "otherText", o),
                        g = Object(k.u)(Boolean(r), n, "otherLetter", o),
                        f = Object(k.u)(Boolean(r), n, "appleDataBrokerText", o),
                        h = Object(k.u)(Boolean(r), n, "appleDataBrokerLetter", o),
                        m = Boolean(u.some((function(e) {
                            return e.isApple
                        }))),
                        b = "unknown" === s || "denied" === s,
                        v = Object(k.u)(Boolean(r), n, "customVendorLabel1Text", o),
                        y = Object(k.u)(Boolean(r), n, "customVendorLabel2Text", o),
                        O = Object(k.u)(Boolean(r), n, "customVendorLabel3Text", o),
                        _ = Object(k.u)(Boolean(r), n, "customVendorLabel1Letter", o),
                        w = Object(k.u)(Boolean(r), n, "customVendorLabel2Letter", o),
                        C = Object(k.u)(Boolean(r), n, "customVendorLabel3Letter", o),
                        T = Boolean(u.some((function(e) {
                            return e.isCustomVendorLabel1
                        }))),
                        P = Boolean(u.some((function(e) {
                            return e.isCustomVendorLabel2
                        }))),
                        N = Boolean(u.some((function(e) {
                            return e.isCustomVendorLabel3
                        })));
                    return Object(j.h)("div", {
                        className: "pm-features"
                    }, Object(j.h)("div", {
                        className: "filter-container"
                    }, Object(j.h)("img", {
                        src: q.a,
                        alt: ""
                    }), Object(j.h)("input", {
                        className: "vendor-filter",
                        placeholder: p + "...",
                        name: "filter",
                        value: l,
                        onChange: this.updateFilter
                    })), Object(j.h)("div", {
                        className: "legend"
                    }, Object(j.h)("span", {
                        className: "legend-key",
                        "aria-hidden": !0
                    }, g), Object(j.h)("h2", {
                        class: "custom-header"
                    }, d), m && Object(j.h)("span", {
                        className: "legend-key apple-broker",
                        "aria-hidden": !0
                    }, h), m && f, T && Object(j.h)("span", {
                        className: "legend-key is-custom-vendor-label-1",
                        "aria-hidden": !0
                    }, _), T && v, P && Object(j.h)("span", {
                        className: "legend-key is-custom-vendor-label-2",
                        "aria-hidden": !0
                    }, w), P && y, N && Object(j.h)("span", {
                        className: "legend-key is-custom-vendor-label-3",
                        "aria-hidden": !0
                    }, C), N && O), u.map((function(t) {
                        var s = !(t.disclosureOnlyCategories.length > 0 && t.legIntCategories <= 0 && t.consentCategories <= 0),
                            l = (t.iabSpecialPurposes.length > 0 || t.iabFeatures.length > 0) && t.consentCategories <= 0 && t.legIntCategories.length <= 0 && t.iabSpecialFeatures <= 0,
                            u = t.isApple,
                            p = t.isCustomVendorLabel1,
                            d = t.isCustomVendorLabel2,
                            f = t.isCustomVendorLabel3,
                            m = u && b;
                        return Object(j.h)(x, {
                            key: "vendor-" + t.vendorId,
                            settings: e.props.settings,
                            name: Object(j.h)("span", null, t.name, "IAB" !== t.vendorType && Object(j.h)("span", {
                                className: "legend-key inline",
                                "aria-hidden": !0
                            }, g)),
                            isCustom: "IAB" !== t.vendorType,
                            locked: W.l.includes(t.iabId) || m,
                            description: t.name,
                            child: "vendors",
                            language: o,
                            value: t,
                            content: Object(j.h)(z.a, {
                                dev: r,
                                vendor: t,
                                settings: n,
                                language: o,
                                toggleVendor: a,
                                usePurModel: i,
                                hideAppleToggle: m
                            }),
                            toggle: s && !l ? e.props.toggleVendor : null,
                            isApple: u,
                            isCustomVendorLabel1: p,
                            isCustomVendorLabel2: d,
                            isCustomVendorLabel3: f,
                            appleDataBrokerLetter: h,
                            customVendorLabel1Letter: _,
                            customVendorLabel2Letter: w,
                            customVendorLabel3Letter: C,
                            usePurModel: i,
                            neutralPm: c
                        })
                    })))
                }, t
            }(_.Component),
            X = function(e) {
                void 0 === e && (e = {}), d(this, {
                    accordionsSpacing: {
                        paddingLeft: 20,
                        paddingRight: 40,
                        paddingTop: 16,
                        paddingBottom: 16
                    },
                    accordionsFont: {
                        fontSize: 13,
                        fontWeight: "500",
                        color: "#000000",
                        fontFamily: "arial, helvetica, sans-serif"
                    },
                    panelSpacing: {
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 5,
                        paddingBottom: 20
                    },
                    panelFont: {
                        fontSize: 13,
                        fontWeight: "400",
                        color: "#555555",
                        fontFamily: "arial, helvetica, sans-serif"
                    },
                    toggleColor: "#47d747",
                    toggleOffColor: "#cccccc",
                    toggleNeutralColor: "#FFA800",
                    customPurposesText: "Custom Purposes",
                    customPurposesLetter: "C",
                    specialPurposesText: "Special Purposes",
                    specialPurposesInfo: "We have a need to use your data for this processing purpose that is required for us to deliver services to you.",
                    liText: "Manage Settings",
                    liInfo: "We also work with some partners on the basis of legitimate interest and other legal bases without consent.",
                    purposeVendorTitle: "Vendors",
                    featuresText: "Features",
                    featuresInfo: "Features are a use of the data that you have already agreed to share with us",
                    iabConsent: "Consent Purposes",
                    iabLegInt: "Legitimate Interest Purposes",
                    iabFeatures: "Features",
                    iabSpecialFeatures: "Special Features",
                    iabSpecialPurposes: "Special Purposes",
                    alphabetizeVendors: !1,
                    vendorsText: "View All Providers",
                    vendorsInfo: "You can find a list of all third-party providers.",
                    searchText: "Search Site Vendors",
                    otherText: "Other Site Vendors",
                    otherLetter: "O",
                    cookieText: "Cookie Information",
                    tableCategoryText: "Category",
                    tableCookieText: "Cookie",
                    tableDomainText: "Domain",
                    tableDurationText: "Duration",
                    viewAllText: "View All",
                    viewLessText: "View Less",
                    toggleOnText: "",
                    toggleOffText: "",
                    minHeight: {
                        type: "auto",
                        value: 1
                    },
                    maxHeight: {
                        type: "px",
                        value: 400
                    },
                    languages: {},
                    selectedLanguage: "",
                    link: {
                        fontWeight: "400",
                        color: "#1890ff",
                        textDecoration: "underline"
                    },
                    hover: {
                        fontWeight: "400",
                        color: "#1890ff",
                        textDecoration: "underline"
                    },
                    appleDataBrokerText: "Apple Data Broker",
                    appleDataBrokerLetter: "A",
                    customVendorLabel1Text: "Label 1",
                    customVendorLabel1Letter: "1",
                    customVendorLabel2Text: "Label 2",
                    customVendorLabel2Letter: "2",
                    customVendorLabel3Text: "Label 3",
                    customVendorLabel3Letter: "3"
                }), d(this, e)
            },
            G = function(e) {
                void 0 === e && (e = {}), g(this, h({}, new X(e), {
                    neutralButtonBackgroundColor: "gray",
                    neutralButtonFontColor: "white",
                    onButtonBackgroundColor: "green",
                    onButtonFontColor: "white",
                    onButtonText: "Accept",
                    offButtonBackgroundColor: "red",
                    offButtonFontColor: "white",
                    offButtonText: "Reject"
                }), e)
            };
        h({}, {
            height: {
                minHeight: {
                    title: "Min Scroll Height",
                    type: "Size"
                },
                maxHeight: {
                    title: "Max Scroll Height",
                    type: "Size"
                }
            },
            accordions: {
                accordionsSpacing: {
                    title: "Padding",
                    type: "Padding"
                },
                accordionsFont: {
                    title: "Font",
                    type: "Font"
                }
            },
            panel: {
                panelSpacing: {
                    title: "Padding",
                    type: "Padding"
                },
                panelFont: {
                    title: "Font",
                    type: "Font"
                }
            },
            "purpose content": {
                customPurposesText: {
                    title: "Custom",
                    type: "InputLanguage"
                },
                customPurposesLetter: {
                    title: "Custom Icon",
                    type: "InputLanguage"
                },
                specialPurposesText: {
                    title: "Spec. Purposes",
                    type: "InputLanguage"
                },
                specialPurposesInfo: {
                    title: "Spec. Purposes Info",
                    type: "InputLanguage"
                },
                liText: {
                    title: "Leg. Interest",
                    type: "InputLanguage"
                },
                liInfo: {
                    title: "Leg. Interest Info",
                    type: "InputLanguage"
                }
            },
            "feature content": {
                featuresText: {
                    title: "Features",
                    type: "InputLanguage"
                },
                featuresInfo: {
                    title: "Features Info",
                    type: "InputLanguage"
                }
            },
            "vendor content": {
                alphabetizeVendors: {
                    title: "Sort Vendors Alphabetically?",
                    type: "Switch"
                },
                vendorsText: {
                    title: "Vendors",
                    type: "InputLanguage"
                },
                vendorsInfo: {
                    title: "Vendors Info",
                    type: "InputLanguage"
                },
                purposeVendorTitle: {
                    title: "Vendor Title",
                    type: "InputLanguage"
                },
                searchText: {
                    title: "Search",
                    type: "InputLanguage"
                },
                otherText: {
                    title: "Others",
                    type: "InputLanguage"
                },
                otherLetter: {
                    title: "Other Icon",
                    type: "InputLanguage"
                },
                appleDataBrokerText: {
                    title: "Apple Data Broker Description",
                    type: "InputLanguage"
                },
                appleDataBrokerLetter: {
                    title: "Apple Data Broker Icon",
                    type: "InputLanguage"
                },
                customVendorLabel1Text: {
                    title: "Custom Label 1 Description",
                    type: "InputLanguage"
                },
                customVendorLabel1Letter: {
                    title: "Custom Label 1 Icon",
                    type: "InputLanguage"
                },
                customVendorLabel2Text: {
                    title: "Custom Label 2 Description",
                    type: "InputLanguage"
                },
                customVendorLabel2Letter: {
                    title: "Custom Label 2 Icon",
                    type: "InputLanguage"
                },
                customVendorLabel3Text: {
                    title: "Custom Label 3 Description",
                    type: "InputLanguage"
                },
                customVendorLabel3Letter: {
                    title: "Custom Label 3 Icon",
                    type: "InputLanguage"
                }
            },
            "IAB Categories": {
                iabConsent: {
                    title: "Consent Purposes",
                    type: "InputLanguage"
                },
                iabLegInt: {
                    title: "Legitimate Interest Purposes",
                    type: "InputLanguage"
                },
                iabFeatures: {
                    title: "Features",
                    type: "InputLanguage"
                },
                iabSpecialFeatures: {
                    title: "Special Features",
                    type: "InputLanguage"
                },
                iabSpecialPurposes: {
                    title: "Special Purposes",
                    type: "InputLanguage"
                }
            },
            "cookie content": {
                cookieText: {
                    title: "Cookie Info",
                    type: "InputLanguage"
                },
                tableCategoryText: {
                    title: "Category",
                    type: "InputLanguage"
                },
                tableCookieText: {
                    title: "Cookie",
                    type: "InputLanguage"
                },
                tableDomainText: {
                    title: "Domain",
                    type: "InputLanguage"
                },
                tableDurationText: {
                    title: "Duration",
                    type: "InputLanguage"
                }
            },
            "general content": {
                viewAllText: {
                    title: "View All",
                    type: "InputLanguage"
                },
                viewLessText: {
                    title: "View Less",
                    type: "InputLanguage"
                }
            },
            "toggle settings": {
                toggleColor: {
                    title: "ON Color",
                    type: "ColorPicker"
                },
                toggleOffColor: {
                    title: "OFF Color",
                    type: "ColorPicker"
                },
                toggleNeutralColor: {
                    title: "Neutral Color",
                    type: "ColorPicker"
                },
                toggleOnText: {
                    title: "Toggle ON Text",
                    type: "InputLanguage"
                },
                toggleOffText: {
                    title: "Toggle OFF Text",
                    type: "InputLanguage"
                }
            },
            links: {
                link: {
                    title: "Link Style",
                    type: "Links"
                },
                hover: {
                    title: "Hover Style",
                    type: "Links"
                }
            }
        }, {
            "toggle settings": {
                neutralButtonBackgroundColor: {
                    title: "Neutral Button Background Color",
                    type: "ColorPicker"
                },
                neutralButtonFontColor: {
                    title: "Neutral Button Font Color",
                    type: "ColorPicker"
                },
                onButtonBackgroundColor: {
                    title: "On Button Background Color",
                    type: "ColorPicker"
                },
                onButtonFontColor: {
                    title: "ON Button Font Color",
                    type: "ColorPicker"
                },
                onButtonText: {
                    title: "ON Button Text",
                    type: "InputLanguage"
                },
                offButtonBackgroundColor: {
                    title: "Off Button Background Color",
                    type: "ColorPicker"
                },
                offButtonFontColor: {
                    title: "Off Button Font Color",
                    type: "ColorPicker"
                },
                offButtonText: {
                    title: "Off Button Text!",
                    type: "InputLanguage"
                }
            }
        }), n("h8E1");
        n.d(t, "a", (function() {
            return $
        }));
        var $ = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    page: t.props.pmTab ? t.props.pmTab.includes("li") ? "li" : t.props.pmTab.includes("purposes") ? "purposes" : "vendors" : t.props.message.defaultTab || "purposes",
                    loading: !0
                }, t.backRef = _.default.createRef(), t.changePage = function(e) {
                    t.setState({
                        page: e
                    }, (function() {
                        t.backRef.current && t.backRef.current.focus()
                    }))
                }, t.linkHover = function(e, t) {
                    e.target.style.color = t.color, e.target.style.textDecoration = t.textDecoration, e.target.style.fontWeight = t.fontWeight
                }, t
            }
            var n, o;
            return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                var e = this,
                    t = this.props.neutralPm ? new G(this.props.component.settings) : new X(this.props.component.settings),
                    n = this.props.language,
                    o = this.state.page,
                    r = this.props.pmData || {},
                    a = {},
                    i = !1,
                    s = JSON.stringify(this.props.path);
                this.props.dev && (a = y({}, this.props.dev.hover), i = this.props.dev.current === s);
                var c = {};
                c.minHeight = "auto" === t.minHeight.type ? "auto" : t.minHeight.value + t.minHeight.type, c.maxHeight = "auto" === t.maxHeight.type ? "auto" : t.maxHeight.value + t.maxHeight.type;
                var l = y({}, t.accordionsFont),
                    u = {
                        style: t.link,
                        onMouseOver: function(n) {
                            return e.linkHover(n, t.hover)
                        },
                        onMouseOut: function(n) {
                            return e.linkHover(n, t.link)
                        }
                    },
                    p = "message-component message-stacks pm-tcfv2-inline no-children" + this.props.className,
                    d = Object(k.u)(Boolean(this.props.dev), t, "liText", n),
                    g = Object(k.u)(Boolean(this.props.dev), t, "liInfo", n),
                    f = Object(k.u)(Boolean(this.props.dev), t, "vendorsText", n),
                    h = Object(k.u)(Boolean(this.props.dev), t, "vendorsInfo", n),
                    m = Object(k.u)(Boolean(this.props.dev), t, "customPurposesText", n),
                    v = Object(k.u)(Boolean(this.props.dev), t, "customPurposesLetter", n),
                    O = this.props.message.useStacks,
                    _ = this.props.message.consentOnlyStacks,
                    w = this.props.message.usePurModel;
                return t.alphabetizeVendors && (r.vendors || []).sort((function(e, t) {
                    return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                })), Object(j.h)("div", b({
                    ref: this.backRef,
                    className: i ? p + " on-active" : p,
                    path: this.props.dev ? s : null
                }, a), "purposes" === o && void 0 !== r.categories && void 0 !== r.features && Object(j.h)("div", {
                    className: "pm-section pm-main",
                    style: c
                }, Object(j.h)(H, {
                    dev: this.props.dev,
                    stacks: r.stacks || [],
                    purposes: r.categories || [],
                    specialFeatures: r.specialFeatures || [],
                    features: r.features || [],
                    specialPurposes: r.specialPurposes || [],
                    useStacks: O,
                    consentOnlyStacks: _,
                    language: this.props.language,
                    settings: t,
                    togglePurposeOrFeature: this.props.togglePurposeOrFeature,
                    toggleStack: this.props.toggleStack,
                    selected: "consent",
                    usePurModel: w,
                    neutralPm: this.props.neutralPm
                }), this.props.pmData.vendors && this.props.pmData.vendors.some((function(e) {
                    return e.legIntCategories.length
                })) && Object(j.h)("div", {
                    className: "page-link bottom"
                }, Object(j.h)("div", {
                    className: "page-desc",
                    style: l
                }, g), Object(j.h)("div", b({
                    tabIndex: "0",
                    className: "page-action"
                }, u, {
                    onClick: function() {
                        return e.changePage("li")
                    },
                    onKeyDown: function(t) {
                        return Object(k.q)(t.key) && e.changePage("li")
                    }
                }), d)), Object(j.h)("div", {
                    className: "page-link bottom"
                }, Object(j.h)("div", {
                    className: "page-desc",
                    style: l
                }, h), Object(j.h)("div", b({
                    tabIndex: "0",
                    className: "page-action"
                }, u, {
                    onClick: function() {
                        return e.changePage("vendors")
                    },
                    onKeyDown: function(t) {
                        return Object(k.q)(t.key) && e.changePage("vendors")
                    }
                }), f)), Object(j.h)("div", {
                    className: "legend"
                }, Object(j.h)("span", {
                    className: "legend-key",
                    "aria-hidden": !0
                }, v), Object(j.h)("h2", {
                    class: "custom-header"
                }, m))), "li" === o && void 0 !== r.vendors && Object(j.h)("div", {
                    className: "pm-section pm-li",
                    style: c
                }, Object(j.h)("div", {
                    id: "li-header",
                    className: "page-header"
                }, Object(j.h)("div", {
                    ref: this.backRef,
                    tabIndex: "0",
                    className: "chevron left",
                    onClick: function() {
                        return e.changePage("purposes")
                    },
                    onKeyDown: function(t) {
                        return Object(k.q)(t.key) && e.changePage("purposes")
                    }
                }), d), Object(j.h)("p", {
                    style: "margin-bottom:15px;",
                    className: "page-information"
                }, Object(k.f)(g)), Object(j.h)(H, {
                    dev: this.props.dev,
                    stacks: r.stacks || [],
                    purposes: r.categories || [],
                    specialFeatures: r.specialFeatures || [],
                    useStacks: O,
                    consentOnlyStacks: _,
                    language: this.props.language,
                    settings: t,
                    togglePurposeOrFeature: this.props.togglePurposeOrFeature,
                    toggleStack: this.props.toggleStack,
                    selected: "li"
                })), "vendors" === o && void 0 !== r.vendors && Object(j.h)("div", {
                    className: "pm-section pm-vendors",
                    style: c
                }, Object(j.h)("div", {
                    id: "vendors-header",
                    className: "page-header"
                }, Object(j.h)("div", {
                    ref: this.backRef,
                    tabIndex: "0",
                    className: "chevron left",
                    onClick: function() {
                        return e.changePage("purposes")
                    },
                    onKeyDown: function(t) {
                        return Object(k.q)(t.key) && e.changePage("purposes")
                    }
                }), f), Object(j.h)("p", {
                    style: "margin-bottom:15px;",
                    className: "page-information"
                }, Object(k.f)(h)), Object(j.h)(K, {
                    dev: this.props.dev,
                    vendors: r.vendors || [],
                    settings: t,
                    language: this.props.language,
                    toggleVendor: this.props.toggleVendor,
                    usePurModel: w,
                    idfaStatus: this.props.idfaStatus,
                    neutralPm: this.props.neutralPm
                })))
            }, t
        }(_.Component)
    },
    j1Q3: function(e, t, n) {
        "use strict";
        (function(e) {
            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(n, !0).forEach((function(t) {
                        a(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", (function() {
                return c
            }));
            var i = n("o1E3"),
                s = {
                    partial: "yellow",
                    accepted: "green",
                    rejected: "grey"
                },
                c = function(t) {
                    var n = t.dev,
                        o = t.stack,
                        a = t.selected,
                        c = t.toggleStack,
                        l = t.language,
                        u = t.settings,
                        p = t.usePurModel,
                        d = {
                            active: 0,
                            rejected: 0
                        };
                    o.categories.forEach((function(e) {
                        "consent" === a && e.active ? d.active += 1 : "consent" !== a || e.active || (d.rejected += 1), "li" === a && e.legInt ? d.active += 1 : "li" !== a || e.legInt || (d.rejected += 1)
                    }));
                    var g = Object(i.u)(Boolean(n), u, "statusText", l),
                        f = Object(i.u)(Boolean(n), u, "acceptedAllText", l),
                        h = Object(i.u)(Boolean(n), u, "rejectedAllText", l),
                        m = Object(i.u)(Boolean(n), u, "partialConsentText", l),
                        b = Object(i.u)(Boolean(n), u, "acceptAllText", l),
                        v = Object(i.u)(Boolean(n), u, "rejectAllText", l),
                        y = m,
                        O = "partial";
                    d.active > 0 && 0 === d.rejected && (y = f, O = "accepted"), d.rejected > 0 && 0 === d.active && (y = h, O = "rejected");
                    var j = r({}, u.accordionsFont);
                    return delete j.color, e("div", {
                        className: "stack-title"
                    }, e("h4", {
                        style: r({}, u.accordionsFont)
                    }, o.name), !p && e("div", {
                        className: "stack-status"
                    }, e("span", null, g, ":"), e("span", {
                        style: r({}, j),
                        className: s[O]
                    }, y)), !p && e("div", {
                        className: "stack-toggles"
                    }, e("button", {
                        tabIndex: "0",
                        className: y === h ? "stack-toggle reject-toggle choice" : "stack-toggle reject-toggle",
                        onClick: function(e) {
                            return c(e, o.categories, !1, "li" === a)
                        },
                        onKeyDown: function(e) {
                            return Object(i.q)(e.key) && c(e, o.categories, !1, "li" === a)
                        }
                    }, v), e("button", {
                        tabIndex: "0",
                        className: y === f ? "stack-toggle accept-toggle choice" : "stack-toggle accept-toggle",
                        onClick: function(e) {
                            return c(e, o.categories, !0, "li" === a)
                        },
                        onKeyDown: function(e) {
                            return Object(i.q)(e.key) && c(e, o.categories, !0, "li" === a)
                        }
                    }, b)))
                }
        }).call(this, n("2mXy").h)
    },
    jgXh: function(e, t, n) {
        e.exports = n.p + "270b1804ded10442dc27e9e0098bb1f3.svg"
    },
    "k/EF": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }));
        var o = n("2mXy"),
            r = n("FdF9"),
            a = n("KOA+"),
            i = n("5ehb"),
            s = n("o1E3"),
            c = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        consentAll: !1,
                        liAll: !1,
                        discolsureAll: !1
                    }, t.toggleConsentAll = function() {
                        t.setState({
                            consentAll: !t.state.consentAll
                        }, t.props.force)
                    }, t.toggleLiAll = function() {
                        t.setState({
                            liAll: !t.state.liAll
                        }, t.props.force)
                    }, t.toggleDisclosure = function() {
                        t.setState({
                            discolsureAll: !t.state.discolsureAll
                        }, t.props.force)
                    }, t
                }
                var n, r;
                return r = e, (n = t).prototype = Object.create(r.prototype), n.prototype.constructor = n, n.__proto__ = r, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.selected,
                        r = t.purpose,
                        c = t.settings,
                        l = t.language,
                        u = t.force,
                        p = t.dev,
                        d = t.disclosure,
                        g = t.isCustom,
                        f = t.accordionOpen,
                        h = this.state,
                        m = h.consentAll,
                        b = h.liAll,
                        v = h.discolsureAll,
                        y = Object(s.u)(Boolean(p), c, "viewAllText", l),
                        O = Object(s.u)(Boolean(p), c, "viewLessText", l),
                        j = Object(s.u)(Boolean(p), c, "otherText", l),
                        _ = Object(s.u)(Boolean(p), c, "otherLetter", l),
                        w = g ? Object(o.h)("p", {
                            style: "margin-bottom:15px;",
                            dangerouslySetInnerHTML: {
                                __html: Object(a.a)({
                                    html: r.description
                                })
                            }
                        }) : Object(o.h)("p", {
                            style: "margin-bottom:15px;"
                        }, Object(s.f)(r.description));
                    return c.alphabetizeVendors && (r.requiringConsentVendors && r.requiringConsentVendors.sort((function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                    })), r.legIntVendors && r.legIntVendors.sort((function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                    })), r.disclosureOnlyVendors && r.disclosureOnlyVendors.sort((function(e, t) {
                        return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                    }))), Object(o.h)("div", {
                        className: "purpose-content"
                    }, w, Object(o.h)("div", {
                        className: "policies"
                    }, Object(o.h)("div", {
                        className: "legend"
                    }, Object(o.h)("span", {
                        className: "legend-key",
                        "aria-hidden": !0
                    }, _), Object(o.h)("h2", {
                        class: "custom-header"
                    }, j))), "consent" === n && Object(o.h)("div", null, Object(o.h)("div", {
                        className: "policies"
                    }, r.requiringConsentVendors.slice(0, m ? r.requiringConsentVendors.length : 3).map((function(e) {
                        return Object(o.h)(i.a, {
                            vendor: e,
                            key: e.vendorId,
                            language: l,
                            settings: c,
                            force: u,
                            accordionOpen: f
                        })
                    })), r.requiringConsentVendors.length > 3 && Object(o.h)("div", {
                        tabIndex: f ? 0 : -1,
                        className: "view-all",
                        onClick: this.toggleConsentAll,
                        onKeyDown: function(t) {
                            return Object(s.q)(t.key) && e.toggleConsentAll()
                        }
                    }, m ? O : y))), "li" === n && Object(o.h)("div", {
                        style: {
                            position: "relative"
                        }
                    }, Object(o.h)("div", {
                        className: "policies"
                    }, r.legIntVendors.slice(0, b ? r.legIntVendors.length : 3).map((function(e) {
                        return Object(o.h)(i.a, {
                            vendor: e,
                            key: e.vendorId,
                            language: l,
                            settings: c,
                            force: u,
                            accordionOpen: f
                        })
                    })), r.legIntVendors.length > 3 ? Object(o.h)("div", {
                        tabIndex: f ? 0 : -1,
                        className: "view-all",
                        onClick: this.toggleLiAll,
                        onKeyDown: function(t) {
                            return Object(s.q)(t.key) && e.toggleLiAll()
                        }
                    }, b ? O : y) : null)), !0 === d && Object(o.h)("div", {
                        style: {
                            position: "relative"
                        }
                    }, Object(o.h)("div", {
                        className: "policies"
                    }, r.disclosureOnlyVendors.slice(0, v ? r.disclosureOnlyVendors.length : 3).map((function(e) {
                        return Object(o.h)(i.a, {
                            vendor: e,
                            key: e.vendorId,
                            language: l,
                            settings: c,
                            force: u,
                            accordionOpen: f
                        })
                    })), r.disclosureOnlyVendors.length > 3 ? Object(o.h)("div", {
                        tabIndex: f ? 0 : -1,
                        className: "view-all",
                        onClick: this.toggleDisclosure,
                        onKeyDown: function(t) {
                            return Object(s.q)(t.key) && e.toggleDisclosure()
                        }
                    }, v ? O : y) : null)))
                }, t
            }(r.Component)
    },
    mLpX: function() {},
    o1E3: function(e, t, n) {
        "use strict";

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        n.d(t, "n", (function() {
            return l
        })), n.d(t, "k", (function() {
            return u
        })), n.d(t, "i", (function() {
            return p
        })), n.d(t, "c", (function() {
            return d
        })), n.d(t, "g", (function() {
            return g
        })), n.d(t, "y", (function() {
            return f
        })), n.d(t, "z", (function() {
            return h
        })), n.d(t, "x", (function() {
            return m
        })), n.d(t, "a", (function() {
            return b
        })), n.d(t, "b", (function() {
            return v
        })), n.d(t, "h", (function() {
            return y
        })), n.d(t, "d", (function() {
            return O
        })), n.d(t, "e", (function() {
            return j
        })), n.d(t, "t", (function() {
            return _
        })), n.d(t, "u", (function() {
            return w
        })), n.d(t, "s", (function() {
            return k
        })), n.d(t, "f", (function() {
            return C
        })), n.d(t, "r", (function() {
            return x
        })), n.d(t, "j", (function() {
            return T
        })), n.d(t, "q", (function() {
            return P
        })), n.d(t, "w", (function() {
            return N
        })), n.d(t, "m", (function() {
            return S
        })), n.d(t, "l", (function() {
            return L
        })), n.d(t, "v", (function() {
            return A
        })), n.d(t, "p", (function() {
            return I
        })), n.d(t, "o", (function() {
            return D
        }));
        var a = n("2mXy"),
            i = n("FdF9"),
            s = n("gm8T"),
            c = n("YSmr"),
            l = function(e, t) {
                t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
                var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
                return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
            },
            u = function e(t, n) {
                void 0 === n && (n = []);
                for (var o = null, r = 0; r < n.length; r++) {
                    if (n[r].type === t) return n[r];
                    o || (o = e(t, n[r].children))
                }
                return o
            },
            p = function e(t, n, o) {
                void 0 === n && (n = []), void 0 === o && (o = 0);
                for (var r = null, a = 0; a < n.length; a++) {
                    if (n[a].id === t) return n[a];
                    r || (r = e(t, n[a].children, o + 1))
                }
                return r
            },
            d = function e(t) {
                return t instanceof Array ? t.map((function(t) {
                    return e(t)
                })) : "object" == typeof t && null !== t ? Object.entries(t).reduce((function(t, n) {
                    var a;
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? o(n, !0).forEach((function(t) {
                                r(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, t, ((a = {})[n[0]] = e(n[1]), a))
                }), {}) : t
            },
            g = function(e) {
                return e ? 10 === e.length ? "+1" + e : "+" + e : ""
            },
            f = function(e) {
                return !e || (/^\d{10}$/.test(e.trim()) || /^\d{11}$/.test(e.trim()))
            },
            h = function(e) {
                return !e || /^\d{4}$/.test(e.trim())
            },
            m = function(e) {
                return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)
            },
            b = function(e) {
                return new Promise((function(t) {
                    var n = document.getElementById("custom-styles");
                    n && n.remove();
                    var o = document.createElement("style");
                    o.setAttribute("id", "custom-styles"), o.innerHTML = e, document.body.appendChild(o), t()
                }))
            },
            v = function(e) {
                return e ? " " + e.replace(".", "").replace("#", "") : ""
            },
            y = function() {
                var e = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
                return e = e && e.length >= 2 ? e.substring(0, 2).toUpperCase() : "EN", ["NO", "NB", "NN"].includes(e) ? "NO" : e
            },
            O = function(e) {
                return Object.values(e).reduce((function(e, t) {
                    return t.error = t.required && "" === t.value, !t.error && e
                }), !0)
            },
            j = function(e) {
                return Object.values(e).reduce((function(e, t) {
                    return t.error = null !== t.mustBeVal && t.value !== t.mustBeVal, !t.error && e
                }), !0)
            },
            _ = function(e) {
                return Object.entries(e).reduce((function(e, t) {
                    return e + "&" + t[0] + "=" + t[1]
                }), "?")
            },
            w = function(e, t, n, o) {
                return e ? t.languages[t.selectedLanguage] && t.languages[t.selectedLanguage][n] ? t.languages[t.selectedLanguage][n] : t.languages[o] && t.languages[o][n] ? t.languages[o][n] : t[n] : t.languages[o] && t.languages[o][n] || t[n]
            },
            k = function(e, t, n) {
                return t.languages[e] && void 0 !== t.languages[e][n] ? e : Object(i.useContext)(s.a)
            },
            C = function(e) {
                void 0 === e && (e = "");
                var t = e.split(/\r\n|\r|\n/).map((function(e, t, n) {
                    if (e) return e.includes("<") && (e = e.replace(/(<([^>]+)>)/gi, "")), "*" === e[0] && 0 !== t ? Object(a.h)("li", null, e.slice(1)) : Object(a.h)("div", null, 0 !== t && Object(a.h)("br", null), Object(a.h)("div", null, "*" === e[0] ? e.slice(1) : e), t !== n.length - 1 && Object(a.h)("br", null))
                }));
                return e ? t.reduce((function(e, n, o) {
                    if (n && "div" === n.type) {
                        var r = t.slice(o + 1),
                            i = r.findIndex((function(e) {
                                return e && "div" === e.type
                            }));
                        e = [].concat(e, [n, Object(a.h)("ul", {
                            class: "description-bullet"
                        }, r.slice(0, -1 === i ? r.length + 1 : i))])
                    }
                    return e
                }), []) : ""
            },
            x = function(e, t, n) {
                return t.supportedLanguages && t.supportedLanguages.length ? t.supportedLanguages.includes(e) : !(!t.language && !t.defaultLanguage || e !== t.language && e !== t.defaultLanguage) || function e(t, n) {
                    void 0 === n && (n = []);
                    for (var o = !1, r = 0; r < n.length; r++) {
                        var a = n[r],
                            i = a.settings;
                        if (i && i.languages && i.languages[t] && i.languages[t].text) {
                            if ("<p><br></p>" !== i.languages[t].text) return !0
                        } else o || (o = e(t, a.children))
                    }
                    return o
                }(e, n)
            },
            T = function(e) {
                return function(t) {
                    var n = e.find((function(e) {
                            return e.id === t
                        })),
                        o = e.findIndex((function(e) {
                            return e.id === t
                        }));
                    if (!n) throw Error("Bad ID: No component with ID " + t);
                    return {
                        component: n,
                        path: JSON.stringify([0, o])
                    }
                }
            },
            P = function(e) {
                return " " === e || "Spacebar" === e || "Enter" === e || void 0 === e
            },
            N = function() {
                var e = document.getElementsByClassName("focusable"),
                    t = e[0],
                    n = e[e.length - 1],
                    o = "first-focusable-el";
                t && !t.className.includes(o) && (t.className += " " + o), n && !n.className.includes("last-focusable-el") && (n.className += " last-focusable-el");
                var r = document.getElementsByClassName("last-focusable-el");
                document.getElementsByClassName(o).length > 1 && document.getElementsByClassName(o)[0].focus(), r[0] && r[0].addEventListener("keydown", (function(e) {
                    var t = "Tab" === e.code && !1 === e.shiftKey,
                        n = "ArrowRight" === e.code;
                    e.target.className.includes("last-focusable-el") && (n || t) && (document.getElementsByClassName(o)[0].focus(), e.preventDefault())
                }))
            },
            S = function(e, t, n) {
                var o;
                e.useBrowserDefault || !e.supportedLanguages || e.supportedLanguages.includes(y()) ? (o = t || y(), o = x(o, e, [n]) ? o : e.language || e.defaultLanguage || "EN") : o = t || e.language || e.defaultLanguage;
                return o
            },
            L = function(e, t, n) {
                var o = S(e, t, n),
                    r = e.iframeTitle && e.iframeTitle.replace(/^\<p\>/, "").replace(/\<\/p\>$/, "") || "SP Consent Message";
                return e.languages && e.languages[o] ? e.languages[o].iframeTitle.replace(/^\<p\>/, "").replace(/\<\/p\>$/, "") : r
            },
            A = function() {
                console.log("Observing CLS (Cumulative Layout Shift)");
                var e = 0,
                    t = 0,
                    n = [];
                try {
                    new PerformanceObserver((function(o) {
                        var r = o.getEntries(),
                            a = Array.isArray(r),
                            i = 0;
                        for (r = a ? r : r[Symbol.iterator]();;) {
                            var s;
                            if (a) {
                                if (i >= r.length) break;
                                s = r[i++]
                            } else {
                                if ((i = r.next()).done) break;
                                s = i.value
                            }
                            var c = s;
                            if (!c.hadRecentInput) t && c.startTime - n[n.length - 1].startTime < 1e3 && c.startTime - n[0].startTime < 5e3 ? (t += c.value, n.push(c)) : (t = c.value, n = [c]), t > e && (e = t, console.log("CLS:", e, n))
                        }
                    })).observe({
                        type: "layout-shift",
                        buffered: !0
                    })
                } catch (e) {}
            },
            I = function e(t, n) {
                return n.type === t || n.children.some((function(n) {
                    return e(t, n)
                }))
            },
            D = function() {
                var e = c.e,
                    t = l("mms_origin"),
                    n = window.location && window.location.protocol + "//" + window.location.hostname;
                return t && 0 === t.indexOf(n) && (e = t), e
            }
    },
    pMXK: function() {},
    qD70: function() {},
    sSoO: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }));
        var o = n("2mXy"),
            r = n("FdF9"),
            a = n("o1E3"),
            i = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        isPurModelChecked: !1,
                        toggleDisplay: !0
                    }, t.toggle = function(e) {
                        var n = t.props,
                            o = n.child,
                            r = n.value,
                            a = n.consentType,
                            i = void 0 !== e ? e : !t.props.checked;
                        "purposes" === o || "features" === o ? (t.props.toggle(r._id, o, i, n.vendors, t.props.legInt), t.setState({
                            checked: i
                        })) : "vendors" === o ? (t.props.toggle(r.vendorId, i, "consent" === a ? "active" : a), t.setState({
                            checked: i
                        })) : "stacks" === o && (t.props.toggle(r._id, i), t.setState({
                            checked: i
                        }))
                    }, t.componentDidMount = function() {
                        t.props.usePurModel && "legInt" !== t.props.consentType && "all" !== t.props.consentType && t.toggle(!0)
                    }, t.componentDidUpdate = function(e) {
                        t.props.usePurModel !== e.usePurModel && t.setState({
                            isPurModelChecked: t.props.usePurModel,
                            toggleDisplay: !t.state.toggleDisplay
                        }, (function() {
                            null !== t.props.value.legInt && t.toggle(t.state.isPurModelChecked)
                        }))
                    }, t
                }
                var n, r;
                return r = e, (n = t).prototype = Object.create(r.prototype), n.prototype.constructor = n, n.__proto__ = r, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.checked,
                        r = t.locked,
                        i = t.partialConsent,
                        s = t.dev,
                        c = t.settings,
                        l = t.language,
                        u = n ? i ? t.neutralColor : t.color : t.offColor,
                        p = Object(a.u)(Boolean(s), c, "toggleOnText", l),
                        d = Object(a.u)(Boolean(s), c, "toggleOffText", l),
                        g = p || d ? " has-text" : "",
                        f = n ? "pm-switch checked" + g : "pm-switch" + g,
                        h = "vendors" === this.props.child && null !== this.props.value.legInt && "legInt" === this.props.consentType || this.props.usePurModel && "legInt" === this.props.consentType || !this.props.usePurModel || this.state.toggleDisplay && !this.props.usePurModel ? "inline-flex" : "none";
                    return Object(o.h)("button", {
                        tabIndex: "0",
                        type: "button",
                        role: "switch",
                        "aria-checked": n ? "true" : "false",
                        className: (r ? f + " locked" : f) + (i ? " partial" : ""),
                        onClick: function(t) {
                            t.stopPropagation(), e.toggle(!n)
                        },
                        style: {
                            display: h
                        }
                    }, Object(o.h)("span", {
                        className: n ? "slider round is-checked" : "slider round",
                        style: {
                            backgroundColor: u
                        }
                    }, i ? null : n ? p : d))
                }, t
            }(r.Component)
    },
    t0Ov: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", (function() {
                return s
            }));
            var o = n("KOA+"),
                r = n("3u6x"),
                a = n("sSoO"),
                i = n("o1E3"),
                s = function(t) {
                    var n = t.vendor,
                        s = t.settings,
                        c = t.language,
                        l = t.dev,
                        u = t.accordionOpen,
                        p = t.toggleVendor,
                        d = t.usePurModel,
                        g = t.hideAppleToggle,
                        f = Object(i.u)(Boolean(l), s, "cookieText", c),
                        h = Object(i.u)(Boolean(l), s, "tableCategoryText", c),
                        m = Object(i.u)(Boolean(l), s, "tableCookieText", c),
                        b = Object(i.u)(Boolean(l), s, "tableDomainText", c),
                        v = Object(i.u)(Boolean(l), s, "tableDurationText", c),
                        y = Object(i.u)(Boolean(l), s, "iabConsent", c),
                        O = Object(i.u)(Boolean(l), s, "iabLegInt", c),
                        j = Object(i.u)(Boolean(l), s, "iabFeatures", c),
                        _ = Object(i.u)(Boolean(l), s, "iabSpecialFeatures", c),
                        w = Object(i.u)(Boolean(l), s, "iabSpecialPurposes", c);
                    return e("div", {
                        className: "vendor-content"
                    }, n.description && e("p", {
                        className: "pm-sub-p",
                        dangerouslySetInnerHTML: {
                            __html: Object(o.a)({
                                html: n.description
                            })
                        }
                    }), n.cookieHeader && e("div", {
                        className: "vendor-cookie-header"
                    }, n.cookieHeader), e(r.a, {
                        vendor: n,
                        tabbable: u
                    }), e("div", null, n.consentCategories.length > 0 && e("div", {
                        className: "vendor-info"
                    }, e("div", {
                        className: "vendor-header-container"
                    }, e("div", {
                        className: "info-title"
                    }, e("h3", {
                        class: "custom-header"
                    }, y)), e("div", null, e(a.a, {
                        consentType: "consent",
                        child: "vendors",
                        value: n,
                        checked: n.active,
                        toggle: p,
                        dev: l,
                        settings: s,
                        language: c,
                        usePurModel: d
                    }))), n.consentCategories.map((function(t) {
                        return e("div", null, "• ", t.name || t)
                    }))), n.legIntCategories.length > 0 && e("div", {
                        className: "vendor-info"
                    }, e("div", {
                        className: "vendor-header-container"
                    }, e("div", {
                        className: "info-title"
                    }, O), e("div", null, e(a.a, {
                        consentType: "legInt",
                        child: "vendors",
                        value: n,
                        checked: n.legInt,
                        toggle: p,
                        dev: l,
                        settings: s,
                        language: c,
                        locked: g,
                        usePurModel: d
                    }))), n.legIntCategories.map((function(t) {
                        return e("div", null, "• ", t.name || t)
                    }))), n.iabFeatures.length > 0 && e("div", {
                        className: "vendor-info"
                    }, e("div", {
                        className: "info-title"
                    }, j), n.iabFeatures.map((function(t) {
                        return e("div", null, "• ", t.name || t)
                    }))), n.iabSpecialFeatures.length > 0 && e("div", {
                        className: "vendor-info"
                    }, e("div", {
                        className: "info-title"
                    }, _), n.iabSpecialFeatures.map((function(t) {
                        return e("div", null, "• ", t.name || t)
                    }))), n.iabSpecialPurposes.length > 0 && e("div", {
                        className: "vendor-info"
                    }, e("div", {
                        className: "info-title"
                    }, w), n.iabSpecialPurposes.map((function(t) {
                        return e("div", null, "• ", t.name || t)
                    })))), n.cookies.length > 0 && e("div", {
                        className: "vendor-cookies"
                    }, e("div", {
                        className: "cookie-title"
                    }, f), e("table", {
                        className: "tvtbl"
                    }, e("tr", null, e("th", null, h), e("th", null, m), e("th", null, b), e("th", null, v)), n.cookies.map((function(t) {
                        return e("tr", null, e("td", {
                            className: "category-td no-content"
                        }, t.categoryName), e("td", null, e("span", {
                            className: "cookie-td"
                        }, t.name)), e("td", {
                            className: "no-content"
                        }, t.domain), e("td", null, e("span", null, t.cookieLifeSpan)))
                    })))))
                }
        }).call(this, n("2mXy").h)
    },
    wl5O: function() {},
    xc8A: function(e) {
        ! function(t) {
            "use strict";

            function n(e) {
                var t = e.getBoundingClientRect(),
                    n = {
                        left: t.left,
                        top: t.top,
                        right: t.right,
                        bottom: t.bottom,
                        width: t.width,
                        height: t.height
                    };
                return n.element = e, n.center = {
                    x: n.left + Math.floor(n.width / 2),
                    y: n.top + Math.floor(n.height / 2)
                }, n.center.left = n.center.right = n.center.x, n.center.top = n.center.bottom = n.center.y, n
            }

            function o(e, t, n) {
                for (var o = [
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        []
                    ], r = 0; r < e.length; r++) {
                    var a, i = e[r],
                        s = i.center;
                    if (o[a = 3 * (s.y < t.top ? 0 : s.y <= t.bottom ? 1 : 2) + (s.x < t.left ? 0 : s.x <= t.right ? 1 : 2)].push(i), -1 !== [0, 2, 6, 8].indexOf(a)) {
                        var c = n;
                        i.left <= t.right - t.width * c && (2 === a ? o[1].push(i) : 8 === a && o[7].push(i)), i.right >= t.left + t.width * c && (0 === a ? o[1].push(i) : 6 === a && o[7].push(i)), i.top <= t.bottom - t.height * c && (6 === a ? o[3].push(i) : 8 === a && o[5].push(i)), i.bottom >= t.top + t.height * c && (0 === a ? o[3].push(i) : 2 === a && o[5].push(i))
                    }
                }
                return o
            }

            function r(e, t, r, a) {
                if (!(e && t && r && r.length)) return null;
                for (var i = [], s = 0; s < r.length; s++) {
                    var c = n(r[s]);
                    c && i.push(c)
                }
                if (!i.length) return null;
                var l = n(e);
                if (!l) return null;
                var u, p = function(e) {
                        return {
                            nearPlumbLineIsBetter: function(t) {
                                var n;
                                return (n = t.center.x < e.center.x ? e.center.x - t.right : t.left - e.center.x) < 0 ? 0 : n
                            },
                            nearHorizonIsBetter: function(t) {
                                var n;
                                return (n = t.center.y < e.center.y ? e.center.y - t.bottom : t.top - e.center.y) < 0 ? 0 : n
                            },
                            nearTargetLeftIsBetter: function(t) {
                                var n;
                                return (n = t.center.x < e.center.x ? e.left - t.right : t.left - e.left) < 0 ? 0 : n
                            },
                            nearTargetTopIsBetter: function(t) {
                                var n;
                                return (n = t.center.y < e.center.y ? e.top - t.bottom : t.top - e.top) < 0 ? 0 : n
                            },
                            topIsBetter: function(e) {
                                return e.top
                            },
                            bottomIsBetter: function(e) {
                                return -1 * e.bottom
                            },
                            leftIsBetter: function(e) {
                                return e.left
                            },
                            rightIsBetter: function(e) {
                                return -1 * e.right
                            }
                        }
                    }(l),
                    d = o(i, l, a.straightOverlapThreshold),
                    g = o(d[4], l.center, a.straightOverlapThreshold);
                switch (t) {
                    case "left":
                        u = [{
                            group: g[0].concat(g[3]).concat(g[6]),
                            distance: [p.nearPlumbLineIsBetter, p.topIsBetter]
                        }, {
                            group: d[3],
                            distance: [p.nearPlumbLineIsBetter, p.topIsBetter]
                        }, {
                            group: d[0].concat(d[6]),
                            distance: [p.nearHorizonIsBetter, p.rightIsBetter, p.nearTargetTopIsBetter]
                        }];
                        break;
                    case "right":
                        u = [{
                            group: g[2].concat(g[5]).concat(g[8]),
                            distance: [p.nearPlumbLineIsBetter, p.topIsBetter]
                        }, {
                            group: d[5],
                            distance: [p.nearPlumbLineIsBetter, p.topIsBetter]
                        }, {
                            group: d[2].concat(d[8]),
                            distance: [p.nearHorizonIsBetter, p.leftIsBetter, p.nearTargetTopIsBetter]
                        }];
                        break;
                    case "up":
                        u = [{
                            group: g[0].concat(g[1]).concat(g[2]),
                            distance: [p.nearHorizonIsBetter, p.leftIsBetter]
                        }, {
                            group: d[1],
                            distance: [p.nearHorizonIsBetter, p.leftIsBetter]
                        }, {
                            group: d[0].concat(d[2]),
                            distance: [p.nearPlumbLineIsBetter, p.bottomIsBetter, p.nearTargetLeftIsBetter]
                        }];
                        break;
                    case "down":
                        u = [{
                            group: g[6].concat(g[7]).concat(g[8]),
                            distance: [p.nearHorizonIsBetter, p.leftIsBetter]
                        }, {
                            group: d[7],
                            distance: [p.nearHorizonIsBetter, p.leftIsBetter]
                        }, {
                            group: d[6].concat(d[8]),
                            distance: [p.nearPlumbLineIsBetter, p.topIsBetter, p.nearTargetLeftIsBetter]
                        }];
                        break;
                    default:
                        return null
                }
                a.straightOnly && u.pop();
                var f = function(e) {
                    for (var t = null, n = 0; n < e.length; n++)
                        if (e[n].group.length) {
                            t = e[n];
                            break
                        }
                    if (!t) return null;
                    var o = t.distance;
                    return t.group.sort((function(e, t) {
                        for (var n = 0; n < o.length; n++) {
                            var r = o[n],
                                a = r(e) - r(t);
                            if (a) return a
                        }
                        return 0
                    })), t.group
                }(u);
                if (!f) return null;
                var h = null;
                if (a.rememberSource && a.previous && a.previous.destination === e && a.previous.reverse === t)
                    for (var m = 0; m < f.length; m++)
                        if (f[m].element === a.previous.target) {
                            h = f[m].element;
                            break
                        }
                return h || (h = f[0].element), h
            }

            function a() {
                for (var e; e = A + String(++I), B[e];);
                return e
            }

            function i(e) {
                return t ? t(e).get() : "string" == typeof e ? [].slice.call(document.querySelectorAll(e)) : "object" == typeof e && e.length ? [].slice.call(e) : "object" == typeof e && 1 === e.nodeType ? [e] : []
            }

            function s(e, n) {
                return t ? t(e).is(n) : "string" == typeof n ? H.call(e, n) : "object" == typeof n && n.length ? n.indexOf(e) >= 0 : "object" == typeof n && 1 === n.nodeType && e === n
            }

            function c() {
                var e = document.activeElement;
                if (e && e !== document.body) return e
            }

            function l(e) {
                e = e || {};
                for (var t = 1; t < arguments.length; t++)
                    if (arguments[t])
                        for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && void 0 !== arguments[t][n] && (e[n] = arguments[t][n]);
                return e
            }

            function u(e, t) {
                Array.isArray(t) || (t = [t]);
                for (var n, o = 0; o < t.length; o++)(n = e.indexOf(t[o])) >= 0 && e.splice(n, 1);
                return e
            }

            function p(e, t, n) {
                if (!e || !t || !B[t] || B[t].disabled) return !1;
                if (e.offsetWidth <= 0 && e.offsetHeight <= 0 || e.hasAttribute("disabled")) return !1;
                if (n && !s(e, B[t].selector)) return !1;
                if ("function" == typeof B[t].navigableFilter) {
                    if (!1 === B[t].navigableFilter(e, t)) return !1
                } else if ("function" == typeof P.navigableFilter && !1 === P.navigableFilter(e, t)) return !1;
                return !0
            }

            function d(e) {
                for (var t in B)
                    if (!B[t].disabled && s(e, B[t].selector)) return t
            }

            function g(e) {
                return i(B[e].selector).filter((function(t) {
                    return p(t, e)
                }))
            }

            function f(e) {
                var n = B[e].defaultElement;
                return n ? ("string" == typeof n ? n = i(n)[0] : t && n instanceof t && (n = n.get(0)), p(n, e, !0) ? n : null) : null
            }

            function h(e) {
                var t = B[e].lastFocusedElement;
                return p(t, e, !0) ? t : null
            }

            function m(e, t, n, o) {
                arguments.length < 4 && (o = !0);
                var r = document.createEvent("CustomEvent");
                return r.initCustomEvent(L + t, !0, o, n), e.dispatchEvent(r)
            }

            function b(e, t, n) {
                if (!e) return !1;
                var o = c(),
                    r = function() {
                        o && o.blur(), e.focus(), v(e, t)
                    };
                if (V) return r(), !0;
                if (V = !0, E) return r(), V = !1, !0;
                if (o) {
                    var a = {
                        nextElement: e,
                        nextSectionId: t,
                        direction: n,
                        native: !1
                    };
                    if (!m(o, "willunfocus", a)) return V = !1, !1;
                    o.blur(), m(o, "unfocused", a, !1)
                }
                var i = {
                    previousElement: o,
                    sectionId: t,
                    direction: n,
                    native: !1
                };
                return m(e, "willfocus", i) ? (e.focus(), m(e, "focused", i, !1), V = !1, v(e, t), !0) : (V = !1, !1)
            }

            function v(e, t) {
                t || (t = d(e)), t && (B[t].lastFocusedElement = e, R = t)
            }

            function y(e, t) {
                if ("@" == e.charAt(0)) return 1 == e.length ? O() : O(e.substr(1));
                var n = i(e)[0];
                if (n) {
                    var o = d(n);
                    if (p(n, o)) return b(n, o, t)
                }
                return !1
            }

            function O(e) {
                var t = [],
                    n = function(e) {
                        e && t.indexOf(e) < 0 && B[e] && !B[e].disabled && t.push(e)
                    };
                e ? n(e) : (n(M), n(R), Object.keys(B).map(n));
                for (var o = 0; o < t.length; o++) {
                    var r, a = t[o];
                    if (r = "last-focused" == B[a].enterTo ? h(a) || f(a) || g(a)[0] : f(a) || h(a) || g(a)[0]) return b(r, a)
                }
                return !1
            }

            function j(e, t) {
                m(e, "navigatefailed", {
                    direction: t
                }, !1)
            }

            function _(e, n) {
                if (B[e].leaveFor && void 0 !== B[e].leaveFor[n]) {
                    var o = B[e].leaveFor[n];
                    if ("string" == typeof o) return "" === o ? null : y(o, n);
                    t && o instanceof t && (o = o.get(0));
                    var r = d(o);
                    if (p(o, r)) return b(o, r, n)
                }
                return !1
            }

            function w(e, t, n) {
                var o = t.getAttribute("data-sn-" + e);
                if ("string" == typeof o) return !("" === o || !y(o, e)) || (j(t, e), !1);
                var a = {},
                    i = [];
                for (var s in B) a[s] = g(s), i = i.concat(a[s]);
                var c, p = l({}, P, B[n]);
                if ("self-only" == p.restrict || "self-first" == p.restrict) {
                    var m = a[n];
                    (c = r(t, e, u(m, t), p)) || "self-first" != p.restrict || (c = r(t, e, u(i, m), p))
                } else c = r(t, e, u(i, t), p);
                if (c) {
                    B[n].previous = {
                        target: t,
                        destination: c,
                        reverse: S[e]
                    };
                    var v = d(c);
                    if (n != v) {
                        var O, w = _(n, e);
                        if (w) return !0;
                        if (null === w) return j(t, e), !1;
                        switch (B[v].enterTo) {
                            case "last-focused":
                                O = h(v) || f(v);
                                break;
                            case "default-element":
                                O = f(v)
                        }
                        O && (c = O)
                    }
                    return b(c, v, e)
                }
                return !!_(n, e) || (j(t, e), !1)
            }

            function k(e) {
                if (!(!F || E || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)) {
                    var t, n = function() {
                            return e.preventDefault(), e.stopPropagation(), !1
                        },
                        o = N[e.keyCode];
                    if (!o) return 13 == e.keyCode && (t = c()) && d(t) && !m(t, "enter-down") ? n() : void 0;
                    if (!(t = c()) && (R && (t = h(R)), !t)) return O(), n();
                    var r = d(t);
                    if (r) return m(t, "willmove", {
                        direction: o,
                        sectionId: r,
                        cause: "keydown"
                    }) && w(o, t, r), n()
                }
            }

            function C(e) {
                if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && !E && F && 13 == e.keyCode) {
                    var t = c();
                    t && d(t) && (m(t, "enter-up") || (e.preventDefault(), e.stopPropagation()))
                }
            }

            function x(e) {
                var t = e.target;
                if (t !== window && t !== document && F && !V) {
                    var n = d(t);
                    if (n) {
                        if (E) return void v(t, n);
                        var o = {
                            sectionId: n,
                            native: !0
                        };
                        m(t, "willfocus", o) ? (m(t, "focused", o, !1), v(t, n)) : (V = !0, t.blur(), V = !1)
                    }
                }
            }

            function T(e) {
                var t = e.target;
                if (t !== window && t !== document && !E && F && !V && d(t)) {
                    var n = {
                        native: !0
                    };
                    m(t, "willunfocus", n) ? m(t, "unfocused", n, !1) : (V = !0, setTimeout((function() {
                        t.focus(), V = !1
                    })))
                }
            }
            var P = {
                    selector: "",
                    straightOnly: !1,
                    straightOverlapThreshold: .5,
                    rememberSource: !1,
                    disabled: !1,
                    defaultElement: "",
                    enterTo: "",
                    leaveFor: null,
                    restrict: "self-first",
                    tabIndexIgnoreList: "a, input, select, textarea, button, iframe, [contentEditable=true]",
                    navigableFilter: null
                },
                N = {
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down"
                },
                S = {
                    left: "right",
                    up: "down",
                    right: "left",
                    down: "up"
                },
                L = "sn:",
                A = "section-",
                I = 0,
                D = !1,
                E = !1,
                B = {},
                F = 0,
                M = "",
                R = "",
                V = !1,
                H = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || function(e) {
                    var t = (this.parentNode || this.document).querySelectorAll(e);
                    return [].slice.call(t).indexOf(this) >= 0
                },
                U = {
                    init: function() {
                        D || (window.addEventListener("keydown", k), window.addEventListener("keyup", C), window.addEventListener("focus", x, !0), window.addEventListener("blur", T, !0), D = !0)
                    },
                    uninit: function() {
                        window.removeEventListener("blur", T, !0), window.removeEventListener("focus", x, !0), window.removeEventListener("keyup", C), window.removeEventListener("keydown", k), U.clear(), I = 0, D = !1
                    },
                    clear: function() {
                        B = {}, F = 0, M = "", R = "", V = !1
                    },
                    set: function() {
                        var e, t;
                        if ("object" == typeof arguments[0]) t = arguments[0];
                        else {
                            if ("string" != typeof arguments[0] || "object" != typeof arguments[1]) return;
                            if (t = arguments[1], !B[e = arguments[0]]) throw new Error('Section "' + e + "\" doesn't exist!")
                        }
                        for (var n in t) void 0 !== P[n] && (e ? B[e][n] = t[n] : void 0 !== t[n] && (P[n] = t[n]));
                        e && (B[e] = l({}, B[e]))
                    },
                    add: function() {
                        var e, t = {};
                        if ("object" == typeof arguments[0] ? t = arguments[0] : "string" == typeof arguments[0] && "object" == typeof arguments[1] && (e = arguments[0], t = arguments[1]), e || (e = "string" == typeof t.id ? t.id : a()), B[e]) throw new Error('Section "' + e + '" has already existed!');
                        return B[e] = {}, F++, U.set(e, t), e
                    },
                    remove: function(e) {
                        if (!e || "string" != typeof e) throw new Error('Please assign the "sectionId"!');
                        return !!B[e] && (B[e] = void 0, B = l({}, B), F--, R === e && (R = ""), !0)
                    },
                    disable: function(e) {
                        return !!B[e] && (B[e].disabled = !0, !0)
                    },
                    enable: function(e) {
                        return !!B[e] && (B[e].disabled = !1, !0)
                    },
                    pause: function() {
                        E = !0
                    },
                    resume: function() {
                        E = !1
                    },
                    focus: function(e, n) {
                        var o = !1;
                        void 0 === n && "boolean" == typeof e && (n = e, e = void 0);
                        var r = !E && n;
                        if (r && U.pause(), e)
                            if ("string" == typeof e) o = B[e] ? O(e) : y(e);
                            else {
                                t && e instanceof t && (e = e.get(0));
                                var a = d(e);
                                p(e, a) && (o = b(e, a))
                            }
                        else o = O();
                        return r && U.resume(), o
                    },
                    move: function(e, t) {
                        if (e = e.toLowerCase(), !S[e]) return !1;
                        var n = t ? i(t)[0] : c();
                        if (!n) return !1;
                        var o = d(n);
                        return !!o && (!!m(n, "willmove", {
                            direction: e,
                            sectionId: o,
                            cause: "api"
                        }) && w(e, n, o))
                    },
                    makeFocusable: function(e) {
                        var t = function(e) {
                            var t = void 0 !== e.tabIndexIgnoreList ? e.tabIndexIgnoreList : P.tabIndexIgnoreList;
                            i(e.selector).forEach((function(e) {
                                s(e, t) || e.getAttribute("tabindex") || e.setAttribute("tabindex", "-1")
                            }))
                        };
                        if (e) {
                            if (!B[e]) throw new Error('Section "' + e + "\" doesn't exist!");
                            t(B[e])
                        } else
                            for (var n in B) t(B[n])
                    },
                    setDefaultSection: function(e) {
                        if (e) {
                            if (!B[e]) throw new Error('Section "' + e + "\" doesn't exist!");
                            M = e
                        } else M = ""
                    }
                };
            window.SpatialNavigation = U, e.exports = U, t && (t.SpatialNavigation = function() {
                if (U.init(), arguments.length > 0) {
                    if (t.isPlainObject(arguments[0])) return U.add(arguments[0]);
                    if ("string" === t.type(arguments[0]) && t.isFunction(U[arguments[0]])) return U[arguments[0]].apply(U, [].slice.call(arguments, 1))
                }
                return t.extend({}, U)
            }, t.fn.SpatialNavigation = function() {
                var e;
                return (e = t.isPlainObject(arguments[0]) ? arguments[0] : {
                    id: arguments[0]
                }).selector = this, U.init(), e.id && U.remove(e.id), U.add(e), U.makeFocusable(e.id), this
            })
        }(window.jQuery)
    },
    yJvR: function(e, t, n) {
        "use strict";

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }).apply(this, arguments)
        }

        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var s = n("2mXy"),
            c = n("FdF9"),
            l = n("d7zh"),
            u = n("G9YQ"),
            p = n("anj/"),
            d = n.n(p),
            g = n("H6Cw"),
            f = n("MjMI"),
            h = n("o1E3"),
            m = n("YSmr"),
            b = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                        filter: "",
                        selected: t.props.startWithLiToggled ? "li" : "consent"
                    }, t.updateFilter = function(e) {
                        return t.setState({
                            filter: e.target.value
                        })
                    }, t
                }
                var n, o;
                return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.settings,
                        o = t.language,
                        r = t.dev,
                        a = t.usePurModel,
                        i = t.idfaStatus,
                        c = this.state,
                        l = c.filter,
                        u = c.selected,
                        p = t.vendors.filter((function(e) {
                            return "consent" === u ? e.consentCategories.length : e.legIntCategories.length || e.disclosureOnlyCategories.length
                        })).filter((function(e) {
                            return "" === l || e.name.toLowerCase().indexOf(l.toLowerCase()) >= 0
                        })),
                        b = Object(h.u)(Boolean(r), n, "searchText", o),
                        v = Object(h.u)(Boolean(r), n, "otherText", o),
                        y = Object(h.u)(Boolean(r), n, "otherLetter", o),
                        O = Object(h.u)(Boolean(r), n, "vendorConsentText", o),
                        j = Object(h.u)(Boolean(r), n, "vendorLiText", o),
                        _ = Object(h.u)(Boolean(r), n, "appleDataBrokerText", o),
                        w = Object(h.u)(Boolean(r), n, "appleDataBrokerLetter", o),
                        k = Boolean(p.some((function(e) {
                            return e.isApple
                        }))),
                        C = Object(h.u)(Boolean(r), n, "customVendorLabel1Text", o),
                        x = Object(h.u)(Boolean(r), n, "customVendorLabel2Text", o),
                        T = Object(h.u)(Boolean(r), n, "customVendorLabel3Text", o),
                        P = Object(h.u)(Boolean(r), n, "customVendorLabel1Letter", o),
                        N = Object(h.u)(Boolean(r), n, "customVendorLabel2Letter", o),
                        S = Object(h.u)(Boolean(r), n, "customVendorLabel3Letter", o),
                        L = Boolean(p.some((function(e) {
                            return e.isCustomVendorLabel1
                        }))),
                        A = Boolean(p.some((function(e) {
                            return e.isCustomVendorLabel2
                        }))),
                        I = Boolean(p.some((function(e) {
                            return e.isCustomVendorLabel3
                        })));
                    return Object(s.h)("div", {
                        className: "pm-features pm-vendors"
                    }, Object(s.h)("div", {
                        className: "pm-type-toggle"
                    }, Object(s.h)("div", {
                        id: "vendors-focus",
                        tabindex: "0",
                        className: "focusable",
                        onClick: function() {
                            return e.setState({
                                selected: "consent"
                            })
                        },
                        onKeyDown: function(t) {
                            return Object(h.q)(t.key) && e.setState({
                                selected: "consent"
                            })
                        }
                    }, O), Object(s.h)("div", {
                        tabindex: "0",
                        onClick: function() {
                            return e.setState({
                                selected: "li"
                            })
                        },
                        onKeyDown: function(t) {
                            return Object(h.q)(t.key) && e.setState({
                                selected: "li"
                            })
                        }
                    }, j), Object(s.h)("span", {
                        className: "li" === u ? "selected li" : "selected consent"
                    })), Object(s.h)("div", {
                        className: "filter-container"
                    }, Object(s.h)("img", {
                        src: d.a,
                        alt: ""
                    }), Object(s.h)("input", {
                        className: "vendor-filter",
                        placeholder: b + "...",
                        name: "filter",
                        value: l,
                        onChange: this.updateFilter
                    }), Object(s.h)("div", {
                        role: "status",
                        "aria-live": "polite"
                    }, p.length ? p.length + " vendor" + (1 === p.length ? "" : "s") + " found" : "No Vendors Found")), Object(s.h)("div", {
                        className: "legend"
                    }, Object(s.h)("span", {
                        className: "legend-key",
                        "aria-hidden": !0
                    }, y), Object(s.h)("h2", {
                        class: "custom-header"
                    }, v), k && Object(s.h)("span", {
                        className: "legend-key apple-broker",
                        "aria-hidden": !0
                    }, w), k && _, L && Object(s.h)("span", {
                        className: "legend-key is-custom-vendor-label-1",
                        "aria-hidden": !0
                    }, P), L && C, A && Object(s.h)("span", {
                        className: "legend-key is-custom-vendor-label-2",
                        "aria-hidden": !0
                    }, N), A && x, I && Object(s.h)("span", {
                        className: "legend-key is-custom-vendor-label-3",
                        "aria-hidden": !0
                    }, S), I && T), p.map((function(t) {
                        var c, l = !(t.disclosureOnlyCategories.length > 0 && t.legIntCategories <= 0 && t.consentCategories <= 0),
                            p = (t.iabSpecialPurposes.length > 0 || t.iabFeatures.length > 0) && t.consentCategories <= 0 && t.legIntCategories.length <= 0 && t.iabSpecialFeatures <= 0,
                            d = t.isApple,
                            h = t.isCustomVendorLabel1,
                            b = t.isCustomVendorLabel2,
                            v = t.isCustomVendorLabel3,
                            O = d && ("unknown" === i || "denied" === i);
                        return Object(s.h)(g.a, ((c = {
                            key: "vendor-" + t.vendorId,
                            settings: e.props.settings,
                            name: Object(s.h)("span", null, t.name, "IAB" !== t.vendorType && Object(s.h)("span", {
                                className: "legend-key inline",
                                "aria-hidden": !0
                            }, y)),
                            isCustom: "IAB" !== t.vendorType,
                            locked: m.l.includes(t.iabId) || O,
                            description: t.name,
                            child: "vendors",
                            language: o,
                            value: t,
                            content: Object(s.h)(f.a, {
                                dev: r,
                                vendor: t,
                                settings: n,
                                language: o,
                                consentType: u
                            }),
                            toggle: l && !p ? e.props.toggleVendor : null,
                            consentType: "consent" === u ? "active" : "legInt",
                            selected: "consent" === u ? "active" : "li",
                            isApple: d,
                            appleDataBrokerLetter: w,
                            usePurModel: a && "li" !== e.state.selected,
                            isCustomVendorLabel1: h,
                            isCustomVendorLabel2: b,
                            isCustomVendorLabel3: v
                        }).appleDataBrokerLetter = w, c.customVendorLabel1Letter = P, c.customVendorLabel2Letter = N, c.customVendorLabel3Letter = S, c))
                    })))
                }, t
            }(c.Component),
            v = function(e) {
                void 0 === e && (e = {}), o(this, {
                    accordionsSpacing: {
                        paddingLeft: 16,
                        paddingRight: 16,
                        paddingTop: 16,
                        paddingBottom: 16
                    },
                    accordionsFont: {
                        fontSize: 13,
                        fontWeight: "500",
                        color: "#000000",
                        fontFamily: "arial, helvetica, sans-serif"
                    },
                    panelSpacing: {
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 5,
                        paddingBottom: 20
                    },
                    panelFont: {
                        fontSize: 13,
                        fontWeight: "400",
                        color: "#555555",
                        fontFamily: "arial, helvetica, sans-serif"
                    },
                    toggleType: "basic",
                    toggleColor: "#47d747",
                    toggleActiveColor: "#ffffff",
                    toggleText: "On",
                    toggleOffColor: "#cccccc",
                    toggleOffActiveColor: "#ffffff",
                    toggleOffText: "Off",
                    specialOnly: !1,
                    purposesText: "Purposes",
                    purposeInfo: "You give an affirmative action to indicate that we can use your data for this purpose.",
                    customPurposesText: "Custom Purposes",
                    customPurposesLetter: "C",
                    specialPurposesText: "Special Purposes",
                    specialPurposesInfo: "We have a need to use your data for this processing purpose that is required for us to deliver services to you.",
                    consentText: "User Consent",
                    liText: "Legitimate Interest",
                    vendorConsentText: "User Consent",
                    vendorLiText: "Legitimate Interest",
                    liInfo: "We have a need to use your data for this processing purpose that is required for us to deliver services to you.",
                    rejectAllText: "Reject All",
                    acceptAllText: "Accept All",
                    featuresText: "Features",
                    featuresInfo: "Features are a use of the data that you have already agreed to share with us",
                    specialFeaturesText: "Special Features",
                    specialFeaturesInfo: "Special Features are processing purposes that require your explicit consent",
                    iabConsent: "Consent Purposes",
                    iabLegInt: "Legitimate Interest Purposes",
                    iabFeatures: "Features",
                    iabSpecialFeatures: "Special Features",
                    iabSpecialPurposes: "Special Purposes",
                    alphabetizeVendors: !1,
                    vendorsText: "Site Vendors",
                    searchText: "Search Site Vendors",
                    otherText: "Other Site Vendors",
                    otherLetter: "O",
                    cookieText: "Cookie Information",
                    tableCategoryText: "Category",
                    tableCookieText: "Cookie",
                    tableDomainText: "Domain",
                    tableDurationText: "Duration",
                    statusText: "Status",
                    viewAllText: "View All",
                    viewLessText: "View Less",
                    acceptedAllText: "Accepted All",
                    partialConsentText: "Partial Consent",
                    rejectedAllText: "Rejected All",
                    minHeight: {
                        type: "auto",
                        value: 1
                    },
                    maxHeight: {
                        type: "px",
                        value: 400
                    },
                    languages: {},
                    selectedLanguage: "",
                    appleDataBrokerText: "Apple Data Broker",
                    appleDataBrokerLetter: "A",
                    customVendorLabel1Text: "Label 1",
                    customVendorLabel1Letter: "1",
                    customVendorLabel2Text: "Label 2",
                    customVendorLabel2Letter: "2",
                    customVendorLabel3Text: "Label 3",
                    customVendorLabel3Letter: "3"
                }), o(this, e)
            },
            y = (n("evnV"), n("xc8A")),
            O = n.n(y);
        n.d(t, "a", (function() {
            return j
        }));
        var j = function(e) {
            function t() {
                for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    tab: t.props.pmTab ? t.props.pmTab || "purposes" : t.props.message.defaultTab || "purposes",
                    loading: !0
                }, t.componentDidMount = function() {
                    Object(h.w)()
                }, t.changeTab = function(e) {
                    t.setState({
                        tab: e
                    });
                    var n = "#" + e + "-focus";
                    window.setTimeout((function() {
                        O.a.clear(), O.a.add({
                            selector: n,
                            defaultElement: n
                        }), O.a.focus()
                    }), 500)
                }, t
            }
            var n, o;
            return o = e, (n = t).prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o, t.prototype.render = function() {
                var e = this,
                    t = new v(this.props.component.settings),
                    n = this.props.language,
                    o = this.state.tab,
                    c = this.props.pmData || {},
                    p = {},
                    d = !1,
                    g = JSON.stringify(this.props.path);
                this.props.dev && (p = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? a(n, !0).forEach((function(t) {
                            i(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(n).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, this.props.dev.hover), d = this.props.dev.current === g);
                var f = {};
                f.minHeight = "auto" === t.minHeight.type ? "auto" : t.minHeight.value + t.minHeight.type, f.maxHeight = "auto" === t.maxHeight.type ? "auto" : t.maxHeight.value + t.maxHeight.type;
                var m = "message-component message-stacks privacy-manager-tcfv2 no-children" + this.props.className,
                    y = Object(h.u)(Boolean(this.props.dev), t, "purposesText", n),
                    O = Object(h.u)(Boolean(this.props.dev), t, "featuresText", n),
                    j = Object(h.u)(Boolean(this.props.dev), t, "vendorsText", n),
                    _ = c.vendors || [];
                t.alphabetizeVendors && _.sort((function(e, t) {
                    return e.name.toLowerCase() < t.name.toLowerCase() ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : 0
                }));
                var w = this.props.message.useStacks,
                    k = this.props.message.consentOnlyStacks,
                    C = this.props.message.usePurModel;
                return Object(s.h)("div", r({
                    className: d ? m + " on-active" : m,
                    path: this.props.dev ? g : null
                }, p), Object(s.h)("div", {
                    className: "pm-tabs",
                    role: "tablist"
                }, c.categories && c.categories.length > 0 && Object(s.h)("div", {
                    role: "tab",
                    tabindex: "0",
                    className: o.includes("purposes") ? "pm-tab active focusable" : "pm-tab focusable",
                    "aria-selected": o.includes("purposes") ? "true" : "false",
                    onClick: function() {
                        return e.changeTab("purposes")
                    },
                    onKeyDown: function(t) {
                        return Object(h.q)(t.key) && e.changeTab("purposes")
                    },
                    title: y
                }, y), c.features && c.features.length > 0 && Object(s.h)("div", {
                    role: "tab",
                    tabindex: "0",
                    className: "features" === o ? "pm-tab active focusable" : "pm-tab focusable",
                    "aria-selected": o.includes("features") ? "true" : "false",
                    onClick: function() {
                        return e.changeTab("features")
                    },
                    onKeyDown: function(t) {
                        return Object(h.q)(t.key) && e.changeTab("features")
                    },
                    title: O
                }, O), c.vendors && c.vendors.length > 0 && Object(s.h)("div", {
                    role: "tab",
                    tabindex: "0",
                    className: o.includes("vendors") ? "pm-tab active focusable" : "pm-tab focusable",
                    "aria-selected": o.includes("vendors") ? "true" : "false",
                    onClick: function() {
                        return e.changeTab("vendors")
                    },
                    onKeyDown: function(t) {
                        return Object(h.q)(t.key) && e.changeTab("vendors")
                    },
                    title: j
                }, j)), o.includes("purposes") && void 0 !== c.categories && Object(s.h)("div", {
                    className: "pm-section",
                    style: f
                }, Object(s.h)(l.a, {
                    dev: this.props.dev,
                    stacks: c.stacks || [],
                    useStacks: w,
                    consentOnlyStacks: k,
                    purposes: c.categories || [],
                    specialPurposes: c.specialPurposes || [],
                    language: this.props.language,
                    settings: t,
                    togglePurposeOrFeature: this.props.togglePurposeOrFeature,
                    toggleStack: this.props.toggleStack,
                    startWithLiToggled: "purposes-li" === o,
                    usePurModel: C
                })), "features" === o && void 0 !== c.features && Object(s.h)("div", {
                    className: "pm-section",
                    style: f
                }, Object(s.h)(u.a, {
                    dev: this.props.dev,
                    features: c.features || [],
                    specialFeatures: c.specialFeatures || [],
                    language: this.props.language,
                    settings: t,
                    togglePurposeOrFeature: this.props.togglePurposeOrFeature
                })), o.includes("vendors") && void 0 !== c.vendors && Object(s.h)("div", {
                    className: "pm-section",
                    style: f
                }, Object(s.h)(b, {
                    dev: this.props.dev,
                    vendors: _,
                    settings: t,
                    language: this.props.language,
                    toggleVendor: this.props.toggleVendor,
                    startWithLiToggled: "vendors-li" === o,
                    usePurModel: C,
                    idfaStatus: this.props.idfaStatus
                })))
            }, t
        }(c.Component)
    },
    zS2S: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("o1E3"),
            r = function(e) {
                if (window.parent) try {
                    window.parent.postMessage(a(e), "*")
                } catch (e) {}
            };
        window.onerror = function() {
            i(), r((arguments.length <= 4 ? void 0 : arguments[4]) || (arguments.length <= 0 ? void 0 : arguments[0]))
        }, window.onunhandledrejection = function(e) {
            i(), r(e.reason)
        };
        var a = function(e) {
                switch (e.code) {
                    case 1:
                        return {
                            code: 1,
                            title: "Unable to fetch PM",
                            stackTrace: e.message
                        };
                    default:
                        return {
                            code: 99,
                            title: "general error",
                            stackTrace: e
                        }
                }
            },
            i = function() {
                window.parent.postMessage({
                    name: "sp.renderingAppError",
                    messageId: Object(o.n)("message_id"),
                    fromPM: window.__isPm
                }, "*")
            }
    }
});