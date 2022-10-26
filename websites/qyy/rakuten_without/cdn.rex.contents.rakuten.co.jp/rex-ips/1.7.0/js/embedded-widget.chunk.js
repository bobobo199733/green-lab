(this["webpackJsonprex-popask"] = this["webpackJsonprex-popask"] || []).push([
    [6], {
        516: function(e, n, a) {
            "use strict";
            var t, o, c = a(37),
                r = a(502),
                s = a(500),
                i = (a(63), a(499)),
                d = a(115),
                l = i.b.div(t || (t = Object(s.a)(["\n.rexSurveyNamespace & {\n  padding: 12px 0 0 0;\n  display: flex;\n  justify-content: space-between;\n}\n"]))),
                b = i.b.div.attrs((function(e) {
                    return {
                        style: {
                            width: "".concat(10 * e.message, "px")
                        }
                    }
                }))(o || (o = Object(s.a)(["\n.rexSurveyNamespace & {\n  font-size: 10px;\n  line-height: 1;\n  width: 85px;\n  text-align: center;\n  white-space: nowrap;\n  min-width: 20% !important;\n}\n"])));
            n.a = function(e) {
                var n = e.txt0,
                    a = e.txt1,
                    t = e.className,
                    o = void 0 === t ? "" : t,
                    s = Object(r.a)(e, ["txt0", "txt1", "className"]);
                return Object(d.jsxs)(l, Object(c.a)(Object(c.a)({
                    className: o
                }, s), {}, {
                    children: [Object(d.jsx)(b, {
                        className: "nps-message nps-message-0",
                        message: n.length,
                        children: n
                    }), Object(d.jsx)(b, {
                        className: "nps-message nps-message-1",
                        message: a.length,
                        children: a
                    })]
                }))
            }
        },
        518: function(e, n, a) {
            "use strict";
            var t, o = a(37),
                c = a(502),
                r = (a(63), a(500)),
                s = a(499),
                i = a(501),
                d = a(504),
                l = a(115),
                b = s.b.div(t || (t = Object(r.a)(["\n.rexSurveyNamespace & {\n  position: relative;\n  color: ", ";\n  cursor: pointer;\n  line-height: 1.5;\n  text-align: center;\n  width: 20%;\n  height: 50px;\n  font-size: 16px;\n  box-sizing: border-box;\n}\n\n  /* radio */\n\n  .rexSurveyNamespace & > input {\n    position: absolute;\n    left: 0;\n    top: 0;\n    opacity: 0;\n  }\n\n  .rexSurveyNamespace & > input + label {\n    box-sizing: border-box;\n    position: relative;\n    width: 100%;\n    height: 50px;\n    font-weight: 500;\n    /*color: ", ";*/\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n  }\n\n  .rexSurveyNamespace & > input + label::before {\n      box-sizing: border-box;\n      content: '';\n      display: block;\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      margin: auto;\n      /*border: solid 2px ", ";*/\n      border: solid 2px #000;\n      border-radius: 25px;\n      box-sizing: border-box;\n      cursor: pointer;\n      height: 50px;\n      width: 50px;\n      background-color: ", ";\n    }\n\n  /*\n    styled-components \u540c\u3058\u30af\u30e9\u30b9\u540d\u3067\u3057\u304b\u51fa\u529b\u3057\u306a\u304f\u306a\u3063\u305f\u306e\u3067\u30af\u30e9\u30b9\u3067\u8272\u3092\u8a2d\u5b9a\u3059\u308b\n    @since 20201013\n    */\n\n  .rexSurveyNamespace & > input + label.color-EC0606 {\n      color: #ec0606;\n    }\n\n  .rexSurveyNamespace & > input + label.color-EC0606:before {\n        border-color: #ec0606;\n      }\n\n  .rexSurveyNamespace & > input + label.color-EF0AA1 {\n      color: #ef0aa1;\n    }\n\n  .rexSurveyNamespace & > input + label.color-EF0AA1:before {\n        border-color: #ef0aa1;\n      }\n\n  .rexSurveyNamespace & > input + label.color-0085C7 {\n      color: #0085c7;\n    }\n\n  .rexSurveyNamespace & > input + label.color-0085C7:before {\n        border-color: #0085c7;\n      }\n\n  .rexSurveyNamespace & > input + label.color-B87100 {\n      color: #b87100;\n    }\n\n  .rexSurveyNamespace & > input + label.color-B87100:before {\n        border-color: #b87100;\n      }\n\n  .rexSurveyNamespace & > input + label.color-009500 {\n      color: #009500;\n    }\n\n  .rexSurveyNamespace & > input + label.color-009500:before {\n        border-color: #009500;\n      }\n\n  .rexSurveyNamespace & > input + label .nps-radio-text {\n      position: relative;\n      cursor: pointer;\n    }\n\n  .rexSurveyNamespace & > input:checked + label {\n    color: ", ";\n  }\n\n  /*&::before {\n      background-color: ", ";\n    }*/\n\n  .rexSurveyNamespace & > input:checked + label.color-EC0606::before {\n        background-color: #ec0606;\n      }\n\n  .rexSurveyNamespace & > input:checked + label.color-EF0AA1::before {\n        background-color: #ef0aa1;\n      }\n\n  .rexSurveyNamespace & > input:checked + label.color-0085C7::before {\n        background-color: #0085c7;\n      }\n\n  .rexSurveyNamespace & > input:checked + label.color-B87100::before {\n        background-color: #b87100;\n      }\n\n  .rexSurveyNamespace & > input:checked + label.color-009500::before {\n        background-color: #009500;\n      }\n"])), i.b.text.gray, (function(e) {
                    return e.color
                }), (function(e) {
                    return e.color
                }), i.b.text.white, i.b.text.white, (function(e) {
                    return e.color
                })),
                p = function(e) {
                    var n = e.id,
                        a = e.label,
                        t = e.name,
                        r = e.color,
                        s = void 0 === r ? i.b.border.gray : r,
                        p = e.disabled,
                        u = void 0 !== p && p,
                        x = Object(c.a)(e, ["id", "label", "name", "color", "disabled"]);
                    return Object(l.jsxs)(b, {
                        className: "NpsRadioWithLabel",
                        color: s,
                        children: [Object(l.jsx)(d.d, Object(o.a)({
                            id: n,
                            name: t,
                            disabled: u
                        }, x)), Object(l.jsx)("label", {
                            htmlFor: n,
                            className: "".concat(n, " color-").concat(s.substr(1, 6)),
                            children: Object(l.jsx)("span", {
                                className: "nps-radio-text",
                                children: a
                            })
                        })]
                    })
                };
            n.a = function(e) {
                var n = e.optionValues,
                    a = e.name,
                    t = e.alreadyChecked,
                    r = e.generator,
                    s = e.disabled,
                    d = Object(c.a)(e, ["optionValues", "name", "alreadyChecked", "generator", "disabled"]);
                return n.map((function(e, n) {
                    var c = "npsRadio-".concat(n);
                    return r ? Object(l.jsx)(p, Object(o.a)({
                        id: c,
                        color: i.b.nps[n],
                        name: a,
                        label: n + 1,
                        value: e.value,
                        "data-index": n,
                        checked: t === n,
                        disabled: s
                    }, d), c) : Object(l.jsx)(p, Object(o.a)({
                        id: c,
                        color: i.b.nps[n],
                        name: a,
                        label: n + 1,
                        value: e.value,
                        "data-index": n,
                        disabled: s
                    }, d), c)
                }))
            }
        },
        519: function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return u
            })), a.d(n, "c", (function() {
                return x
            })), a.d(n, "d", (function() {
                return m
            })), a.d(n, "f", (function() {
                return f
            })), a.d(n, "b", (function() {
                return j
            })), a.d(n, "e", (function() {
                return h
            }));
            var t, o, c, r, s, i, d = a(500),
                l = a(499),
                b = a(501),
                p = a(514),
                u = l.b.div(t || (t = Object(d.a)(["\n.rexSurveyNamespace & {\n  background-color: ", ";\n  border-top: solid 1px ", ";\n  box-sizing: border-box;\n  color: ", ";\n  font-family: ", ";\n  padding: 16px;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n}\n\n  @media (min-width: ", ") {\n.rexSurveyNamespace & {\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);\n    width: 456px;\n    bottom: 32px;\n    top: auto;\n    left: auto;\n    right: 10%;\n    padding-top: 16px\n}\n  }\n\n  .rexSurveyNamespace & * {\n    font-family: ", ";\n  }\n"])), b.b.white, b.b.border.green, b.b.text.black, b.c.default, b.a.desktop, b.c.default),
                x = l.b.div(o || (o = Object(d.a)(["\n.rexSurveyNamespace & {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n  @media (min-width: ", ") {\n.rexSurveyNamespace & {\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px\n}\n  }\n"])), b.a.desktop),
                m = l.b.div(c || (c = Object(d.a)(["\n.rexSurveyNamespace & {\n  /*\n  @since 20200611 - phase3 - can change icon\n  */\n  background: url(", ")\n    no-repeat center center;\n  background-size: 21px 16px;\n  height: 16px;\n  width: 21px;\n  margin-top: 8px;\n}\n\n  @media (min-width: ", ") {\n.rexSurveyNamespace & {\n    background-size: 14px 10px;\n    height: 10px;\n    width: 14px\n}\n  }\n"])), (function(e) {
                    return e.icon ? e.icon : p.a.green
                }), b.a.desktop),
                f = l.b.div(r || (r = Object(d.a)(["\n.rexSurveyNamespace & {\n  color: ", ";\n  flex: 1;\n  font-size: ", ";\n  font-weight: 700;\n  margin-top: 8px;\n  margin-left: 16px;\n  word-break: break-all;\n}\n\n  @media (min-width: ", ") {\n.rexSurveyNamespace & {\n    margin-left: 8px\n}\n  }\n\n  @media (max-width: ", ") {\n.rexSurveyNamespace & {\n    font-size: ", "\n}\n  }\n"])), b.b.text.green, b.d.medium, b.a.desktop, b.a.small, b.d.smallDevice.medium),
                j = l.b.div(s || (s = Object(d.a)(["\n.rexSurveyNamespace & {\n  align-self: start;\n  margin-left: 16px;\n}\n"]))),
                h = l.b.div(i || (i = Object(d.a)(["\n.rexSurveyNamespace & {\n  color: ", ";\n  font-size: ", ";\n  /*\n  margin-top: 8px;\n  margin-right: 36px;\n  */\n  margin: 8px 18px;\n  word-break: break-all;\n}\n\n  @media (min-width: ", ") {\n.rexSurveyNamespace & {\n    border-bottom-left-radius: 2px;\n    border-bottom-right-radius: 2px;\n    margin-top: 16px\n}\n  }\n"])), b.b.text.black, b.d.medium, b.a.desktop)
        },
        524: function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return w
            }));
            var t, o, c, r, s, i, d = a(37),
                l = a(502),
                b = a(63),
                p = a(506),
                u = a(518),
                x = a(504),
                m = a(516),
                f = a(500),
                j = a(499),
                h = a(501),
                g = j.b.div(t || (t = Object(f.a)(["\n.rexSurveyNamespace & {\n  background-color: ", ";\n  border-top: solid 1px ", ";\n  box-sizing: border-box;\n  font-family: ", ";\n  padding: 16px;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  /*\n  @since 20220324\n  Android Firefox 0 scroll down \u3057\u30a2\u30c9\u30ec\u30b9\u30d0\u30fc\u304c\u975e\u8868\u793a\u306e\u6642\u306b Nps message text \u304c\u8868\u793a\u5f8c\u6d88\u3048\u308b\uff08\u591a\u5206\u30d6\u30e9\u30a6\u30b6\u30fc\u30d0\u30b0\uff09\u5bfe\u5fdc\u306e\u305f\u3081\u306b\u4e0b\u8a18\uff12\u884c\u8a2d\u5b9a\u8ffd\u52a0\u3059\u308b\n  @see https://stackoverflow.com/questions/67161825/what-is-the-problem-about-fixed-position-in-firefox-mobile\n  */\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n  .rexSurveyNamespace &.Nps-hidden {\n    height: 0;\n    padding: 0;\n    overflow: hidden;\n    opacity: 0;\n    z-index: 0;\n  }\n\n  @media (min-width: ", ") {\n.rexSurveyNamespace & {\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);\n    width: 456px;\n    bottom: 32px;\n    top: auto;\n    left: auto;\n    right: 10%;\n    overflow: hidden\n}\n  }\n\n  .rexSurveyNamespace & * {\n    font-family: ", ";\n  }\n"])), h.b.white, h.b.border.darkRed, h.c.default, h.a.desktop, h.c.default),
                v = j.b.div(o || (o = Object(f.a)(["\n.rexSurveyNamespace & {\n  display: flex;\n}\n"]))),
                N = Object(j.b)(v)(c || (c = Object(f.a)(["\n.rexSurveyNamespace & {\n  justify-content: flex-end;\n  margin-bottom: 25px;\n}\n"]))),
                O = j.b.div(r || (r = Object(f.a)(["\n.rexSurveyNamespace & {\n  color: ", ";\n  font-size: ", ";\n  word-break: break-all;\n}\n\n  @media (min-width: ", ") {\n.rexSurveyNamespace & {\n    flex: 1\n}\n  }\n\n  @media (max-width: ", ") {\n.rexSurveyNamespace & {\n    font-size: ", "\n}\n  }\n"])), h.b.text.black, h.d.medium, h.a.desktop, h.a.small, h.d.smallDevice.medium),
                y = j.b.div(s || (s = Object(f.a)(["\n.rexSurveyNamespace & {\n  margin-left: 20px;\n}\n"]))),
                k = j.b.div(i || (i = Object(f.a)(["\n.rexSurveyNamespace & {\n  display: flex;\n  width: 100%;\n}\n"]))),
                S = a(115),
                w = function(e) {
                    var n = e.message,
                        a = e.StyledComponent,
                        t = void 0 === a ? O : a;
                    return Object(S.jsx)(t, {
                        className: "Nps-StyledMessage",
                        children: n
                    })
                },
                C = function(e) {
                    var n = e.action,
                        a = e.color,
                        t = e.closeButton,
                        o = void 0 === t ? null : t,
                        c = Object(b.useCallback)((function(e) {
                            e.preventDefault(), "function" === typeof n && n.call(undefined)
                        }), [n]);
                    return Object(S.jsx)(y, {
                        className: "Nps-CloseButton",
                        children: Object(S.jsx)(p.a, {
                            onClick: c,
                            color: a,
                            closeButton: o
                        })
                    })
                };
            n.b = function(e) {
                var n = e.name,
                    a = e.optionValues,
                    t = e.alreadyChecked,
                    o = void 0 === t ? -1 : t,
                    c = e.generator,
                    r = void 0 !== c && c,
                    s = Object(l.a)(e, ["name", "optionValues", "alreadyChecked", "generator"]);
                return s.embedded && s.className ? null : Object(S.jsxs)(g, {
                    className: "Nps ".concat(s.className),
                    children: [Object(S.jsxs)(N, {
                        className: "Nps-MessageBox",
                        children: [Object(S.jsx)(w, Object(d.a)({
                            className: "Nps-MessageBox-Message"
                        }, s)), Object(S.jsx)(x.h, {
                            type: "hidden",
                            name: s.config.nps.question.name,
                            value: s.config.nps.question.value,
                            className: "Nps-MessageBox-Message-Input"
                        }), Object(S.jsx)(C, {
                            action: s.onCloseClick,
                            color: "red",
                            closeButton: s.closeButton
                        })]
                    }), Object(S.jsx)(k, {
                        className: "Nps-RadiosBox",
                        children: Object(S.jsx)(u.a, {
                            name: n,
                            optionValues: a,
                            onChange: s.onChange ? s.onChange : null,
                            alreadyChecked: o,
                            generator: r,
                            className: "Nps-RadiosBox-Radios"
                        })
                    }), Object(S.jsx)(m.a, {
                        txt0: s.config.nps.txt0,
                        txt1: s.config.nps.txt1,
                        className: "Nps-GuideDiv"
                    })]
                })
            }
        },
        545: function(e, n, a) {
            "use strict";
            var t, o, c, r, s, i = a(389),
                d = a(63),
                l = a(500),
                b = a(499),
                p = a(501),
                u = a(519),
                x = b.b.div((function(e) {
                    return "\n  width: 100%;\n  background-color: ".concat(p.b.white, ";\n  /*\n  desktop \u8868\u793a / mobile \u975e\u8868\u793a\n  */\n  display: ").concat(e.desktop ? "block" : "none", ";\n \n")
                })),
                m = b.b.div(t || (t = Object(l.a)(["\n.rexSurveyNamespace & {\n  color: ", ";\n  font-family: ", ";\n  padding: 16px;\n  box-sizing: border-box;\n  /*\n  max-width: ", ";\n  margin: 0 auto;\n  */\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n  .rexSurveyNamespace & * {\n    font-family: ", ";\n  }\n"])), p.b.text.black, p.c.default, p.a.desktop, p.c.default),
                f = b.b.div(o || (o = Object(l.a)(["\n.rexSurveyNamespace & {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n"]))),
                j = Object(b.b)(u.d)(c || (c = Object(l.a)(["\n.rexSurveyNamespace & {\n  margin-top: 0;\n}\n"]))),
                h = Object(b.b)(u.f)(r || (r = Object(l.a)(["\n.rexSurveyNamespace & {\n  margin-top: 0;\n  /* UXDCOEIPS-370: Add flex-basis for IE11 */\n  flex-basis: auto;\n}\n"]))),
                g = b.b.div(s || (s = Object(l.a)(["\n.rexSurveyNamespace & {\n  color: ", ";\n  font-size: ", ";\n  display: flex;\n  justify-content: center;\n  word-break: break-all;\n}\n"])), p.b.text.black, p.d.medium),
                v = a(510),
                N = a(505),
                O = a(113),
                y = a(509),
                k = a(115);
            n.a = function(e) {
                var n = e.title,
                    a = e.message,
                    t = void 0 === a ? "" : a,
                    o = e.className,
                    c = void 0 === o ? "" : o,
                    r = e.submit,
                    s = e.generator,
                    l = void 0 !== s && s,
                    b = e.desktop,
                    p = e.state,
                    u = e.checkIcon,
                    S = void 0 === u ? null : u,
                    w = Object(d.useState)(l),
                    C = Object(i.a)(w, 2),
                    E = C[0],
                    z = C[1],
                    B = Object(d.useCallback)((function() {
                        r.meta.thanks || (N.a.submit.thanks(), Object(O.c)({
                            cId: p.config.cId.value,
                            screen: O.b.THANKYOU,
                            action: O.a.APPEAR,
                            config: p.config
                        }))
                    }), [p, r]);
                return Object(d.useEffect)((function() {
                    r && r.type === v.a.type.COMPLETE && (N.b.submit(), z(!0), B(), y.a.set(O.b.THANKYOU))
                }), [r, z, B]), E && Object(k.jsx)(x, {
                    className: "show-".concat(String(E), " ThanksEmbedded-Wrapper"),
                    desktop: b,
                    children: Object(k.jsxs)(m, {
                        className: "ThanksEmbedded ".concat(c),
                        children: [Object(k.jsxs)(f, {
                            className: "ThanksEmbedded-Header",
                            children: [Object(k.jsx)(j, {
                                className: "ThanksEmbedded-Header-Icon",
                                icon: S
                            }), Object(k.jsx)(h, {
                                className: "ThanksEmbedded-Header-Title",
                                children: n
                            })]
                        }), Object(k.jsx)(g, {
                            className: "ThanksEmbedded-Message",
                            children: t
                        })]
                    })
                })
            }
        },
        546: function(e, n, a) {
            "use strict";
            a(63);
            var t, o, c, r, s = a(524),
                i = a(518),
                d = a(516),
                l = a(500),
                b = a(499),
                p = a(501),
                u = b.b.div((function(e) {
                    return "\n  width: 100%;\n  background-color: ".concat(p.b.white, ";\n  /*\n  desktop / mobile \u8868\u793a\n  display: ").concat(e.desktop ? "block" : "none", ";\n  */\n")
                })),
                x = b.b.div(t || (t = Object(l.a)(["\n.rexSurveyNamespace & {\n  font-family: ", ";\n  line-height: 1.5;\n  padding: 16px;\n  box-sizing: border-box;\n  /*\n  max-width: ", ";\n  */\n  margin: 0 auto;\n}\n\n  .rexSurveyNamespace & * {\n    font-family: ", ";\n  }\n"])), p.c.default, p.a.desktop, p.c.default),
                m = b.b.div(o || (o = Object(l.a)(["\n.rexSurveyNamespace & {\n  margin-bottom: 25px;\n}\n"]))),
                f = b.b.div(c || (c = Object(l.a)(["\n.rexSurveyNamespace & {\n  color: ", ";\n  font-size: ", ";\n  word-break: break-all;\n  text-align: center;\n  flex: 1;\n}\n"])), p.b.text.black, p.d.medium),
                j = b.b.div(r || (r = Object(l.a)(["\n.rexSurveyNamespace & {\n  display: flex;\n  width: 100%;\n  max-width: ", ";\n  margin: 0 auto;\n}\n"])), p.a.desktop),
                h = a(115);
            n.a = function(e) {
                var n = e.name,
                    a = e.optionValues,
                    t = e.message,
                    o = e.onChange,
                    c = e.minScoreLabel,
                    r = e.maxScoreLabel,
                    l = e.alreadyChecked,
                    b = e.desktop,
                    g = e.disabled;
                return Object(h.jsx)(u, {
                    desktop: b,
                    className: "NpsEmbedded-Wrapper",
                    children: Object(h.jsxs)(x, {
                        className: "NpsEmbedded-Box",
                        children: [Object(h.jsx)(m, {
                            className: "NpsEmbedded-Box-MessageBox",
                            children: Object(h.jsx)(s.a, {
                                message: t,
                                StyledComponent: f
                            })
                        }), Object(h.jsx)(j, {
                            className: "NpsEmbedded-Box-RadioBox",
                            children: Object(h.jsx)(i.a, {
                                name: n,
                                optionValues: a,
                                onChange: o,
                                alreadyChecked: l,
                                disabled: g
                            })
                        }), Object(h.jsx)(d.a, {
                            txt0: c,
                            txt1: r,
                            className: "NpsEmbedded-Box-RadioBox-GuideDiv",
                            style: {
                                maxWidth: p.a.desktop,
                                margin: "0 auto"
                            }
                        })]
                    })
                })
            }
        },
        674: function(e, n, a) {
            "use strict";
            a.r(n);
            var t = a(37),
                o = a(502),
                c = a(63),
                r = a.n(c),
                s = a(507),
                i = a(389),
                d = a(546),
                l = a(113),
                b = a(505),
                p = a(392),
                u = a.n(p),
                x = a(523),
                m = a(390),
                f = a(527),
                j = a(532),
                h = a(115),
                g = r.a.lazy((function() {
                    return Promise.all([a.e(2), a.e(5)]).then(a.bind(null, 679))
                })),
                v = function() {
                    return Object(h.jsx)(x.a, {
                        store: b.d,
                        children: Object(h.jsx)(m.a.Provider, {
                            children: Object(h.jsx)(s.a.Provider, {
                                children: Object(h.jsx)(f.a, {
                                    children: Object(h.jsx)(j.a, {
                                        children: Object(h.jsx)(c.Suspense, {
                                            fallback: null,
                                            children: Object(h.jsx)(g, {
                                                backdrop: !0
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                N = function(e) {
                    u.a.render(Object(h.jsx)(v, {}), e)
                },
                O = a(509),
                y = a(510).a.type,
                k = function(e) {
                    var n = e.state,
                        a = e.desktop,
                        t = e.nps,
                        o = e.submit,
                        r = e.popup,
                        s = Object(c.useState)(!0),
                        p = Object(i.a)(s, 2),
                        u = p[0],
                        x = p[1],
                        m = Object(c.useState)(!1),
                        f = Object(i.a)(m, 2),
                        j = f[0],
                        g = f[1],
                        v = Object(c.useRef)(!1),
                        k = Object(c.useCallback)((function() {
                            Object(l.c)({
                                cId: n.config.cId.value,
                                screen: l.b.NPS,
                                action: l.a.APPEAR,
                                config: n.config
                            })
                        }), [n]);
                    Object(c.useEffect)((function() {
                        v.current || t.meta.appear || (v.current = !0, k(), b.a.nps.appear(), setTimeout(b.b.nps, 16), O.a.set(l.b.NPS))
                    }), [v, t, a, k]);
                    var S = Object(c.useCallback)((function(e) {
                        N(r);
                        var a = e.target;
                        Object(l.c)({
                            cId: n.config.cId.value,
                            screen: l.b.NPS,
                            action: l.a.ANSWER,
                            config: n.config
                        }), g(!0), setTimeout((function() {
                            b.a.nps.change({
                                checked: parseInt(a.dataset.index, 10),
                                name: a.name,
                                value: a.value
                            }), x(!1)
                        }), 100)
                    }), [n, x, g, r]);
                    return Object(c.useEffect)((function() {
                        o.type === y.RESTORE && (b.b.submit(), k(), g(!1), x(!0))
                    }), [o, x, k]), u && Object(h.jsx)(d.a, {
                        message: n.config.nps.question.label,
                        minScoreLabel: n.config.nps.txt0,
                        maxScoreLabel: n.config.nps.txt1,
                        name: n.config.nps.options[0].name,
                        optionValues: n.config.nps.options,
                        onChange: S,
                        desktop: a,
                        state: n,
                        nps: t,
                        disabled: j
                    })
                },
                S = a(545),
                w = function(e) {
                    var n = e.state,
                        a = e.submit,
                        t = e.desktop,
                        o = e.checkIcon,
                        c = void 0 === o ? null : o;
                    return Object(h.jsx)(S.a, {
                        title: n.config.thanks.txt0,
                        message: n.config.thanks.txt1,
                        submit: a,
                        desktop: t,
                        state: n,
                        checkIcon: c
                    })
                },
                C = function(e) {
                    var n = e.nps,
                        a = e.submit,
                        t = e.state,
                        o = e.desktop,
                        c = e.popup;
                    return Object(h.jsxs)(h.Fragment, {
                        children: [Object(h.jsx)(k, {
                            nps: n,
                            submit: a,
                            state: t,
                            desktop: o,
                            popup: c
                        }), Object(h.jsx)(w, {
                            state: t,
                            submit: a,
                            desktop: o
                        })]
                    })
                },
                E = Object(b.c)((function(e) {
                    var n = e.nps,
                        a = e.submit,
                        r = Object(o.a)(e, ["nps", "submit"]),
                        i = Object(c.useContext)(s.a.Context),
                        d = Object(c.useContext)(m.a.Context),
                        l = d.state,
                        b = d.dispatch;
                    return Object(h.jsx)(C, Object(t.a)({
                        nps: n,
                        submit: a,
                        state: l,
                        dispatch: b,
                        desktop: i.state.desktop
                    }, r))
                }));
            n.default = E
        }
    }
]);