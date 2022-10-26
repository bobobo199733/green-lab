(this["webpackJsonprex-popask"] = this["webpackJsonprex-popask"] || []).push([
    [4], {
        501: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return a
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "d", (function() {
                return i
            }));
            var r = {
                    desktop: "512px",
                    small: "321px"
                },
                a = {
                    black: "#333333",
                    red: "#bf0000",
                    gray: "#9c9c9c",
                    white: "#ffffff",
                    text: {
                        black: "#333333",
                        darkGray: "#4d4d4d",
                        gray: "#828282",
                        green: "#047205",
                        white: "#ffffff"
                    },
                    border: {
                        blue: "#009ae9",
                        darkGray: "#828282",
                        gray: "#b6b6b6",
                        lightGray: "#dadada",
                        ultraLightGray: "#ebebeb",
                        green: "#047205",
                        yellowGreen: "#c9db00",
                        lightGreen: "#7fca51",
                        red: "#f53a3a",
                        darkRed: "#bf0000",
                        orange: "#f59600",
                        yellow: "#ffd633"
                    },
                    nps: ["#EC0606;", "#EF0AA1", "#0085C7;", "#B87100", "#009500"]
                },
                c = {
                    default: '"Hiragino Sans","Hiragino Kaku Gothic Pro","\u30d2\u30e9\u30ad\u3099\u30ce\u89d2\u30b3\u3099 Pro W3",Osaka,Meiryo,\u30e1\u30a4\u30ea\u30aa,"MS PGothic","MS P\u30b3\u3099\u30b7\u30c3\u30af","Hiragino Sans GB","Noto Sans CJK JP","Helvetica Neue",HelveticaNeue,Helvetica,Roboto,Arial,"Arial Unicode MS",sans-serif'
                },
                i = {
                    medium: "16px",
                    small: "14px",
                    tiny: "12px",
                    tinier: "10px",
                    desktop: {
                        medium: "16px",
                        small: "14px",
                        tiny: "12px",
                        tinier: "10px"
                    },
                    smallDevice: {
                        medium: "15px"
                    }
                }
        },
        504: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return u
            })), n.d(t, "e", (function() {
                return s
            })), n.d(t, "g", (function() {
                return d
            })), n.d(t, "f", (function() {
                return p
            })), n.d(t, "a", (function() {
                return b
            })), n.d(t, "b", (function() {
                return f
            })), n.d(t, "d", (function() {
                return j
            }));
            var r, a = n(500),
                c = n(37),
                i = n(63),
                o = n(499),
                A = n(115),
                u = Object(i.forwardRef)((function(e, t) {
                    return Object(A.jsx)("form", Object(c.a)(Object(c.a)({
                        ref: t
                    }, e), {}, {
                        children: e.children
                    }))
                })),
                s = Object(i.forwardRef)((function(e, t) {
                    return Object(A.jsx)("select", Object(c.a)(Object(c.a)({
                        ref: t
                    }, e), {}, {
                        children: e.children
                    }))
                })),
                d = Object(i.forwardRef)((function(e, t) {
                    return Object(A.jsx)("textarea", Object(c.a)(Object(c.a)({
                        ref: t
                    }, e), {}, {
                        style: {
                            wordBreak: "break-all"
                        }
                    }))
                })),
                l = o.b.input(r || (r = Object(a.a)(["\n.rexSurveyNamespace & {\n  word-break: break-all;\n}\n"]))),
                p = Object(i.forwardRef)((function(e, t) {
                    return Object(A.jsx)(l, Object(c.a)({
                        type: "text",
                        ref: t
                    }, e))
                })),
                b = Object(i.forwardRef)((function(e, t) {
                    return Object(A.jsx)("button", Object(c.a)(Object(c.a)({
                        type: "button",
                        ref: t
                    }, e), {}, {
                        children: Object(A.jsx)("span", {
                            className: "Button-span",
                            style: {
                                wordBreak: "break-all",
                                display: "inline-block"
                            },
                            children: e.children
                        })
                    }))
                })),
                f = Object(i.forwardRef)((function(e, t) {
                    return Object(A.jsx)("input", Object(c.a)({
                        type: "checkbox",
                        ref: t
                    }, e))
                })),
                j = Object(i.forwardRef)((function(e, t) {
                    return Object(A.jsx)("input", Object(c.a)({
                        type: "radio",
                        ref: t
                    }, e))
                })),
                g = Object(i.forwardRef)((function(e, t) {
                    return Object(A.jsx)("input", Object(c.a)({
                        ref: t
                    }, e))
                }));
            t.h = g
        },
        505: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return d
            })), n.d(t, "d", (function() {
                return p
            })), n.d(t, "a", (function() {
                return b
            })), n.d(t, "b", (function() {
                return f
            }));
            var r = n(37),
                a = n(512),
                c = n(513),
                i = n(523),
                o = n(543),
                A = n(508),
                u = n(510),
                s = function(e) {
                    return e
                },
                d = function(e) {
                    return Object(i.b)(s)(e)
                },
                l = Object(o.a)({
                    nps: A.a.behavior,
                    submit: u.a.behavior
                }),
                p = Object(o.b)(l),
                b = function e() {
                    Object(c.a)(this, e)
                };
            b.nps = {
                change: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            checked: null,
                            name: "",
                            value: null
                        },
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.a.type.CHANGE;
                    p.dispatch({
                        type: t,
                        payload: Object(r.a)({}, e)
                    })
                },
                appear: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A.a.type.APPEAR;
                    p.dispatch({
                        type: e
                    })
                }
            }, b.submit = {
                complete: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.a.type.COMPLETE;
                    p.dispatch({
                        type: e
                    })
                },
                thanks: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.a.type.THANKS;
                    p.dispatch({
                        type: e
                    })
                },
                close: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.a.type.CLOSE;
                    p.dispatch({
                        type: e
                    })
                },
                restore: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.a.type.RESTORE;
                    p.dispatch({
                        type: e
                    })
                }
            };
            var f = function() {
                function e() {
                    Object(c.a)(this, e)
                }
                return Object(a.a)(e, null, [{
                    key: "nps",
                    value: function() {
                        p.dispatch({
                            type: A.a.type.INITIAL
                        })
                    }
                }, {
                    key: "submit",
                    value: function() {
                        p.dispatch({
                            type: u.a.type.INITIAL
                        })
                    }
                }]), e
            }()
        },
        506: function(e, t, n) {
            "use strict";
            var r, a = n(37),
                c = n(502),
                i = n(500),
                o = n(63),
                A = n(499),
                u = n(504),
                s = n(514),
                d = n(390),
                l = n(115),
                p = function(e) {
                    var t, n, r = e.color,
                        a = void 0 === r ? "red" : r,
                        c = e.closeButton,
                        i = void 0 === c ? null : c,
                        A = Object(o.useContext)(d.a.Context).state,
                        u = Object(o.useRef)(i || (null === A || void 0 === A || null === (t = A.config) || void 0 === t || null === (n = t.assetPaths) || void 0 === n ? void 0 : n.closeButton)),
                        p = Object(o.useCallback)((function() {
                            return u.current ? u.current : s.b[a]
                        }), [a, u]);
                    return Object(l.jsx)("img", {
                        className: "CloseIcon",
                        src: p(),
                        alt: "close"
                    })
                },
                b = A.b.span(r || (r = Object(i.a)(["\n.rexSurveyNamespace & {\n  display: inline-block;\n  height: 18px;\n  width: 18px;\n}\n\n  .rexSurveyNamespace & > button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    display: block;\n    width: 100%;\n    height: 100%;\n    text-decoration: none;\n    line-height: 1;\n    margin: 0;\n    padding: 0;\n  }\n\n  .rexSurveyNamespace & > button img {\n      width: 100%;\n      height: 100%;\n    }\n"])));
            t.a = function(e) {
                var t = e.color,
                    n = void 0 === t ? "red" : t,
                    r = e.closeButton,
                    i = void 0 === r ? null : r,
                    o = Object(c.a)(e, ["color", "closeButton"]);
                return Object(l.jsx)(b, {
                    className: "Close",
                    children: Object(l.jsx)(u.a, Object(a.a)(Object(a.a)({
                        className: "Close-Button"
                    }, o), {}, {
                        children: Object(l.jsx)(p, {
                            color: n,
                            closeButton: i
                        })
                    }))
                })
            }
        },
        507: function(e, t, n) {
            "use strict";
            var r = n(389),
                a = n(37),
                c = n(63),
                i = n(501),
                o = n(115),
                A = function() {
                    return window.matchMedia("(min-width:".concat(i.a.desktop, ")")).matches
                },
                u = {
                    INITIAL: "resizingInitial",
                    RESIZE: "resizingResize"
                },
                s = {
                    type: u.INITIAL,
                    width: -1,
                    desktop: A()
                },
                d = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = Object(a.a)({}, e);
                    if (!t || !t.type) return n;
                    switch (t.type) {
                        case u.RESIZE:
                            return n.type = t.type, n.width = t.width, n.desktop = A(), n;
                        case u.INITIAL:
                            return n.type = t.type, n;
                        default:
                            return n
                    }
                },
                l = Object(c.createContext)(s),
                p = {
                    events: u,
                    Context: l,
                    Provider: function(e) {
                        var t = Object(c.useReducer)(d, s),
                            n = Object(r.a)(t, 2),
                            a = n[0],
                            i = n[1];
                        return Object(o.jsx)(l.Provider, {
                            value: {
                                state: a,
                                dispatch: i
                            },
                            children: e.children
                        })
                    },
                    initial: s,
                    mediaBreak: A
                };
            t.a = p
        },
        508: function(e, t, n) {
            "use strict";
            var r = n(37),
                a = {
                    INITIAL: "type-NPS-INITIAL",
                    CHANGE: "type-NPS-CHANGE",
                    RESET: "type-NPS-RESET",
                    APPEAR: "type-NPS-APPEAR"
                },
                c = {
                    type: a.INITIAL,
                    payload: {
                        checked: null,
                        name: "",
                        value: null
                    },
                    meta: {
                        appear: !1
                    }
                },
                i = {
                    type: a,
                    initial: c,
                    behavior: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(r.a)({}, c),
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = Object(r.a)({}, e);
                        if (!t || !t.type) return n;
                        switch (t.type) {
                            case a.CHANGE:
                                return n.type = t.type, n.payload.checked = t.payload.checked, n.payload.value = t.payload.value, n.payload.name = t.payload.name, n;
                            case a.RESET:
                                return n.type = t.type, n.payload.checked = null, n.payload.value = null, n.payload.name = "", n;
                            case a.INITIAL:
                                return n.type = t.type, n;
                            case a.APPEAR:
                                return n.type = t.type, n.meta.appear = !0, n;
                            default:
                                return n
                        }
                    }
                };
            t.a = i
        },
        509: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n(513),
                a = n(512),
                c = "",
                i = function() {
                    function e() {
                        Object(r.a)(this, e)
                    }
                    return Object(a.a)(e, null, [{
                        key: "get",
                        value: function() {
                            return c
                        }
                    }, {
                        key: "set",
                        value: function(e) {
                            c = e
                        }
                    }]), e
                }()
        },
        510: function(e, t, n) {
            "use strict";
            var r = n(37),
                a = {
                    INITIAL: "type-SUBMIT-INITIAL",
                    COMPLETE: "type-SUBMIT-COMPLETE",
                    CLOSE: "type-SUBMIT-CLOSE",
                    THANKS: "type-SUBMIT-THANKS",
                    RESTORE: "type-SUBMIT-RESTORE"
                },
                c = {
                    type: a.INITIAL,
                    meta: {
                        thanks: !1
                    }
                },
                i = {
                    type: a,
                    initial: c,
                    behavior: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(r.a)({}, c),
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = Object(r.a)({}, e);
                        if (!t || !t.type) return n;
                        switch (t.type) {
                            case a.RESTORE:
                            case a.CLOSE:
                            case a.COMPLETE:
                            case a.INITIAL:
                                return n.type = t.type, n;
                            case a.THANKS:
                                return n.type = t.type, n.meta.thanks = !0, n;
                            default:
                                return n
                        }
                    }
                };
            t.a = i
        },
        514: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return a
            }));
            var r = {
                    white: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAACJklEQVQ4EaXUTUtUURjAcScHDaQCIywLHQOxDMVFiUGKiZTWJlq5c9t36TsEbURoEyk2mBS5EFN8mYLUpUQNkVFJhgo6/f+He+FOWjn6wM9z5r485+25psqOGIVCIUUUTEP/JM1N9OE6Mmn+HClM7iAkqcRltKAWG1j1xqHij5mbvA13cR+nMYv8oVcQzfwYSSpg8jvoxUXkMYdcyQMkZ06C42hFP+6hASZ/FZl3BiVF4kDd3ku4jVtohPv+GiPI8exP2r0RHVrRjeQ1+uXI4AGmsYE8htGPKoTJp+lcJdMWHO071hl5h7Yooj131uVowg1YjlaNZTqNUUzxrCuxbFOewUN8RA5T8HDCAD5Av8zktoQHeh4mH0A7KvEGT/ECvxDC9xzAvauBL57CLonnabcTifkZwvrugvt+DR7yDJ5hkuc/0xaFA2Thi87mHJztLlzRJkJEq8nww4rphFtl8kcYxxfsCQdw3yy1BjhADww/0UVaz+cMrBj3vAMn4D2rZZyZr9LuGw7wEnm4vya/gmp4Ds5yGRkMwnJ0El57guf4ir9GmtHXmanbEQ6U1uRn0Q3/eXnvAnqj9j3tGCZ41/4/wxUYboNLjgfppm8pWoIu35VYCCZ8jCw+4L/hd8BEQhlu0l/gjfiQq+i3wRX9wApMnOX5t7QHCrcornFfiFfitW2soRmfMIQJHGjmPBci3qLw1SVWssRdS7cO9fiGBe6/oy0pfgPuddeEjk++VwAAAABJRU5ErkJggg==",
                    green: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAgCAYAAABkWOo9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFVSURBVHgB7dZNcoIwGMbxNyFlXHqEnqGrdseRKpsuiRdor2RX7Y3qtClpHgeKAmogH2Thf+EgauY3MUCIEk6UohJlXh2OKdGAJGKSSJvjnDglWIds0sQYJdYQybbq7VsmBT2HxGEy0EtIlAT0GhItDrVBokWhtki0GHQKEi0CnYpE0aFzkCgqdC4SRYO6IFEUqCsS8XagdjvlOx9IlB0NVPAnQfXH7zt5yhcScWyhurda+prZAZLmI1FWf9Y7/siZ2fEVzTmnmV3LNakHJQfI1/nIAxQvvrCrlxXbf+2lgVU+kf9QH1gg1Y+qQiBPoC7YEaRukFvyVNY/MRWLNdn7u70jR6FTsc2FExR5FmqL7d2CgiEvQq9hYyKR1bNebIQ02O5q1rQzvyyOhpEhkSiz+dJgZhndd5+Gnck2KygaWQZOz+7gYRmI8k6LTS4p9cSzKOjWeH8m2gQb83dpkwAAAABJRU5ErkJggg=="
                },
                a = {
                    green: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGESURBVHgBzdjLUcMwEAbgldfqAzrIEW5QCaaDJNQBuANCB1BBcgtXOqCPOBaScIyxHaxdPcb/IXEUjfSNPdZqBDDn5A/5DSROvvw7Z3a6kCt5B0pscS1fIFHsXJnY2rmbCPNh74zGnBoVwOb4dLiHiDEYPXnRNtTqtiqrHdrrff0lrvBSCFg0yoW4xgu1r98hQvoYpeD1WFal/a9t/KjfUqBGMc+H9jd2O8dGTWEGoJgoF8woKAbKFXMWFBJFwfwLCoGiYiZBPigOxgnEQXExziAKygdDArmgfDHNmPTgSm40qi2IpvY1gxU+mGYMXvqobrgYOy4w0398ITAmGfhEmKfl0EYI+w4N9jOtx7PMACNjb5P++gxR+8igc692sNpH6jyxzoRAOYNcFz3vguzUibgC+6AmQdxywN4lQASMDwpjYbgojInhoDA2horCFBgKClNhXFE/+yF92JB3DxsiYboZ7KeEPmx4rHa/HZayyNdSmY6QKGYuM6fUc4/3mMGB1ezyDfPmoaQN4gSrAAAAAElFTkSuQmCC",
                    red: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE2SURBVHgBzdhtDsIgDAbgt8aD6Q/PIZ5MPYeJHyebrU6DC4O2DOKbzA+C6WNlTAX+MRdgg865TWvywJ6PgY8jOkVqSc0H1yYZkE6sX+PfnLbAAQ0zvuHweb6Smx1wH4BzNC+07MwUwTlTPOHKneCBfTS0eGdSCK4RaDqxJWYOIQ8o9YIWmBxiFrI0poTIQpbCaBBFSC1Gi1BBvBgLQg2xYqwIE0SL8SDMkBLGi3BB5jDjfYAD4YbMYOBFVEEyGDNCskJFGDEkhgc44u5IYmHGMe/Aro6kzo7a7zNrGJM7RXnNIFozgoG2M6aPRrNPeK9Naohls/JgVBDPjmnFFCE127YFQ60QVgy1RFgw1BqhxVAPhAZDvRAlDPVE5DA0Ijb4/RHeDJHBvHN7Xxvkb4kTOkUwY83wBFJXtUOHc+T9AAAAAElFTkSuQmCC",
                    white: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADLSURBVHgBvdZdCsQgDATgsBetN1tvOquwQltaf2JmBlokCn4PGjQrAXCU72vi1D3r3nZCtMgwf0TLUQsZ19AxN0RNbhMyzCvitICOGSIUmGkEE7OMYGDciEjMNiICE4bYwYQjPBgaYgVDR8xgZIgeRo7oYPSIASabMx/zB5M1Xh7OxOMBViMy1I+r3u2QYTBxRekYLPQJGgaOZhWOwUbHDMMgoG1vYyIQ25hIhBvDQCxjmIhpjAIxxCgRXUz5JSXiBZNaMSkRN0yq4x+i3pR1oDm/hwAAAABJRU5ErkJggg=="
                }
        },
        527: function(e, t, n) {
            "use strict";
            var r = n(63),
                a = n(528),
                c = n.n(a),
                i = n(507),
                o = n(115);
            t.a = function(e) {
                var t = Object(r.useContext)(i.a.Context),
                    n = t.state,
                    a = t.dispatch,
                    A = Object(r.useRef)(n.width),
                    u = Object(r.useCallback)((function() {
                        var e = window.innerWidth;
                        A.current !== e && (A.current = e, n.type = i.a.events.RESIZE, n.width = e, a(n))
                    }), [n, a, A]),
                    s = Object(r.useRef)(c()(u, 100)),
                    d = Object(r.useRef)(!1),
                    l = Object(r.useCallback)((function() {
                        window.addEventListener("resize", s.current, !1)
                    }), [s]),
                    p = Object(r.useCallback)((function() {
                        window.removeEventListener("resize", s.current)
                    }), [s]);
                return Object(r.useEffect)((function() {
                    return d.current || (d.current = !0, l()), p
                }), [d, l, p]), Object(o.jsx)(o.Fragment, {
                    children: e.children
                })
            }
        },
        532: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return Y
            }));
            var r, a, c, i, o, A, u = n(513),
                s = n(512),
                d = n(557),
                l = n(556),
                p = n(63),
                b = n(389),
                f = n(500),
                j = n(499),
                g = n(525),
                h = n(681),
                O = n(501),
                v = n(115),
                y = function(e) {
                    var t = e.fill,
                        n = void 0 === t ? "#df0101" : t;
                    return Object(v.jsx)("svg", {
                        width: "22",
                        height: "19",
                        viewBox: "0 0 22 19",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "warning-icon-svg",
                        style: {
                            fill: n
                        },
                        children: Object(v.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2.33107 17.5H19.6688L11.0003 2.17901L2.33107 17.5ZM21.3653 17.4535C21.7583 18.148 21.243 19 20.4278 19H1.57205C0.756796 19 0.241546 18.148 0.634546 17.4535L10.0628 0.79C10.266 0.43 10.6328 0.25 11.0003 0.25C11.367 0.25 11.7338 0.43 11.9378 0.79L21.3653 17.4535ZM10.25 12.25H11.75V5.5H10.25V12.25ZM11 16C10.379 16 9.87502 15.496 9.87502 14.875C9.87502 14.254 10.379 13.75 11 13.75C11.621 13.75 12.125 14.254 12.125 14.875C12.125 15.496 11.621 16 11 16Z"
                        })
                    })
                },
                x = n(506),
                m = n(390),
                C = n(113),
                I = n(509),
                w = Object(j.c)(r || (r = Object(f.a)(["", ""])), g.fadeInUp),
                E = Object(j.b)("div")(a || (a = Object(f.a)(["\n.rexSurveyNamespace & {\n  width: ", "%;\n  display: flex;\n  justify-content: center;\n}\n"])), 56 / 456 * 100),
                R = Object(j.b)("div")(c || (c = Object(f.a)(["\n.rexSurveyNamespace & {\n  font-family: ", ";\n  font-size: ", ";\n  color: #df0101;\n  width: ", "%;\n}\n\n  /* desktop */\n\n  @media (min-width: ", ") {\n.rexSurveyNamespace & {\n    font-size: ", "\n}\n  }\n"])), O.c.default, O.d.smallDevice.medium, 336 / 456 * 100, O.a.desktop, O.d.medium),
                B = Object(j.b)("div")(i || (i = Object(f.a)(["\n.rexSurveyNamespace & {\n  width: ", "%;\n  display: flex;\n  justify-content: center;\n}\n"])), 64 / 456 * 100),
                k = Object(j.b)("div")(o || (o = Object(f.a)(["\n.rexSurveyNamespace & {\n  background-color: #fff0f0;\n  border: 1px solid #fff0f0;\n  box-sizing: border-box;\n\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 56px;\n  z-index: 9003;\n\n  display: flex;\n  align-items: center;\n  animation: 0.8s ", ";\n}\n\n  /* desktop */\n\n  @media (min-width: ", ") {\n.rexSurveyNamespace & {\n    width: 456px;\n    height: 56px;\n    top: auto;\n    left: auto;\n    right: 10%;\n    bottom: 32px;\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);\n    border-radius: 4px\n}\n  }\n"])), w, O.a.desktop),
                S = Object(j.b)("div")(A || (A = Object(f.a)(["\n.rexSurveyNamespace & {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n"]))),
                N = function(e) {
                    var t = e.error,
                        n = void 0 === t ? null : t,
                        r = Object(p.useContext)(m.a.Context).state,
                        a = Object(p.useRef)(!1),
                        c = Object(p.useState)(!0),
                        i = Object(b.a)(c, 2),
                        o = i[0],
                        A = i[1],
                        u = Object(p.useRef)(0),
                        s = Object(p.useCallback)((function() {
                            clearTimeout(u.current), A(!1)
                        }), [u, A]),
                        d = Object(p.useCallback)((function(e) {
                            e.preventDefault(), s()
                        }), [s]);
                    Object(p.useEffect)((function() {
                        a.current || Object(C.c)({
                            cId: r.config.cId.value,
                            screen: I.a.get(),
                            action: "error",
                            config: r.config,
                            error: null === n || void 0 === n ? void 0 : n.toString()
                        }), u.current = setTimeout(s, 3e3)
                    }), [u, s, r, a, n]);
                    var l = Object(h.a)().t;
                    return o && Object(v.jsx)(k, {
                        className: "WarningPopup",
                        children: Object(v.jsxs)(S, {
                            className: "WarningPopup-Inner",
                            children: [Object(v.jsx)(B, {
                                className: "WarningPopup-Icon",
                                children: Object(v.jsx)(y, {})
                            }), Object(v.jsx)(R, {
                                className: "WarningPopup-Message",
                                children: l("A read error has occurred.")
                            }), Object(v.jsx)(E, {
                                className: "WarningPopup-Close",
                                children: Object(v.jsx)(x.a, {
                                    onClick: d,
                                    color: "red",
                                    id: "WarningPopup-Close-button"
                                })
                            })]
                        })
                    })
                },
                Y = function(e) {
                    Object(d.a)(n, e);
                    var t = Object(l.a)(n);

                    function n(e) {
                        var r;
                        return Object(u.a)(this, n), (r = t.call(this, e)).state = {
                            hasError: !1
                        }, r
                    }
                    return Object(s.a)(n, [{
                        key: "componentDidCatch",
                        value: function(e, t) {
                            n.outputErrorLog(e, t)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.hasError ? Object(v.jsx)(N, {
                                error: n.error
                            }) : this.props.children
                        }
                    }], [{
                        key: "getDerivedStateFromError",
                        value: function(e) {
                            return n.error = e, {
                                hasError: !0
                            }
                        }
                    }, {
                        key: "outputErrorLog",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            n.error = e
                        }
                    }]), n
                }(p.Component);
            Y.error = null
        },
        676: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(63),
                a = n.n(r),
                c = n(392),
                i = n.n(c),
                o = n(523),
                A = n(507),
                u = n(390),
                s = n(527),
                d = n(505),
                l = n(532),
                p = n(113),
                b = n(115),
                f = a.a.lazy((function() {
                    return n.e(6).then(n.bind(null, 674))
                })),
                j = function(e) {
                    var t = e.popup;
                    return Object(b.jsx)(o.a, {
                        store: d.d,
                        children: Object(b.jsx)(u.a.Provider, {
                            children: Object(b.jsx)(l.a, {
                                children: Object(b.jsx)(A.a.Provider, {
                                    children: Object(b.jsx)(s.a, {
                                        children: Object(b.jsx)(r.Suspense, {
                                            fallback: null,
                                            children: Object(b.jsx)(f, {
                                                popup: t
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                };
            t.default = function(e) {
                var t, n = e.popup,
                    r = e.embedded;
                i.a.render(Object(b.jsx)(j, {
                    popup: n
                }), r);
                var a = window.rexSurveyConfig || {};
                Object(p.c)({
                    cId: null === (t = a.cId) || void 0 === t ? void 0 : t.value,
                    screen: "initial_screen",
                    action: "appear",
                    config: a
                })
            }
        }
    }
]);