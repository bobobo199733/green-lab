(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [86348, 46670], {
        892821: (t, e, a) => {
            "use strict";
            a.d(e, {
                default: () => o
            });
            var n = a(833713),
                i = a(893298),
                r = a(826554);
            const o = function(t) {
                return (0, r.default)((0, i.default)(t, void 0, n.default), t + "")
            }
        },
        957052: (t, e, a) => {
            "use strict";
            a.d(e, {
                default: () => l
            });
            var n = a(407193),
                i = a(292893),
                r = a(498827),
                o = a(597888),
                u = a(29419);
            const s = function(t, e) {
                var a = -1,
                    n = (0, u.default)(t) ? Array(t.length) : [];
                return (0, o.default)(t, (function(t, i, r) {
                    n[++a] = e(t, i, r)
                })), n
            };
            var c = a(854814);
            const f = function(t, e) {
                return ((0, c.default)(t) ? i.default : s)(t, (0, r.default)(e, 3))
            };
            const l = function(t, e) {
                return (0, n.default)(f(t, e), 1)
            }
        },
        899156: (t, e, a) => {
            "use strict";
            a.d(e, {
                default: () => h
            });
            var n = a(580838),
                i = a(866934),
                r = a(383821),
                o = a(817104),
                u = a(598279),
                s = a(887844);
            const c = function(t, e, a, n) {
                if (!(0, u.default)(t)) return t;
                for (var c = -1, f = (e = (0, r.default)(e, t)).length, l = f - 1, d = t; null != d && ++c < f;) {
                    var h = (0, s.default)(e[c]),
                        m = a;
                    if (c != l) {
                        var v = d[h];
                        void 0 === (m = n ? n(v, h, d) : void 0) && (m = (0, u.default)(v) ? v : (0, o.default)(e[c + 1]) ? [] : {})
                    }(0, i.default)(d, h, m), d = d[h]
                }
                return t
            };
            const f = function(t, e, a) {
                for (var i = -1, o = e.length, u = {}; ++i < o;) {
                    var s = e[i],
                        f = (0, n.default)(t, s);
                    a(f, s) && c(u, (0, r.default)(s, t), f)
                }
                return u
            };
            var l = a(22321);
            const d = function(t, e) {
                return f(t, e, (function(e, a) {
                    return (0, l.default)(t, a)
                }))
            };
            const h = (0, a(892821).default)((function(t, e) {
                return null == t ? {} : d(t, e)
            }))
        },
        176950: t => {
            t.exports = {}
        },
        38599: (t, e, a) => {
            "use strict";
            a(534962)
        },
        534962: (t, e, a) => {
            "use strict";
            a(764612), a(875239)
        },
        173845: (t, e, a) => {
            "use strict";
            var n = a(823127);
            a(413880),
                function(t) {
                    var e = !1,
                        a = document.body || document.documentElement,
                        n = "animation",
                        i = "Webkit Moz O ms Khtml".split(" "),
                        r = "";
                    if (void 0 !== a.style.animationName && (e = !0), !1 === e)
                        for (var o = 0; o < i.length; o++)
                            if (void 0 !== a.style[i[o] + "AnimationName"]) {
                                r = i[o], n = r + "Animation", "-" + r.toLowerCase() + "-", e = !0;
                                break
                            }
                    var u = ["webkit", "moz", "MS", "o", ""];
                    var s = "flicker-enable",
                        c = "flicker-options";

                    function f(t) {
                        t.stop(!0), t.css("background-color", ""), t.removeData(s), t.removeData(c)
                    }

                    function l(e) {
                        var a = e.data(s);
                        a && (!0 !== a ? --a ? (d(e), e.data(s, a)) : function(e) {
                            var a = e.data(c).complete;
                            f(e), a && t.isFunction(a) && a()
                        }(e) : d(e))
                    }

                    function d(t) {
                        var e = t.css("background-color"),
                            a = t.data(c),
                            n = a.highlightColor || "#fbf8e9",
                            i = a.duration || 400,
                            r = a.easing || "swing";
                        t.animate({
                            "background-color": n
                        }, i, r).animate({
                            "background-color": e
                        }, i, r, l.bind(t, t))
                    }
                    t.fn.highlight = function(a, i) {
                        return !1 === a ? this.each((function() {
                            e ? this.style[n] = "" : f(t(this))
                        })) : (a = void 0 === a || a, this.each((function() {
                            if (e) {
                                a = !0 === a ? "infinite" : a,
                                    function(t, e, a) {
                                        for (var n = 0; n < u.length; n++) u[n] || (e = e.toLowerCase()), t.addEventListener(u[n] + e, a, !1)
                                    }(this, "AnimationEnd", (function() {
                                        this.style[n] = ""
                                    })), document.getElementsByTagName("html")[0].classList.contains("theme-dark") ? this.style[n] = "highlight-animation-theme-dark 0.4s ease-in-out " + a + " alternate" : this.style[n] = "highlight-animation 0.4s ease-in-out " + a + " alternate"
                            } else {
                                var r = t(this);
                                r.data(s, a), r.data(c, t.extend({}, i || {})), r.is(":animated") || d(r)
                            }
                        })))
                    }
                }(n)
        },
        487389: (t, e, a) => {
            "use strict";
            var n = a(823127),
                i = a(926904);
            n.fn.timeUpdate = function(t, e, a) {
                return this.each((function() {
                    var r = n(this),
                        o = r.data(t || "timestamp"),
                        u = this.hasAttribute("data-force-ago-format");
                    o ? o *= 1e3 : o = 1e3 * r.text(), i.jQueryCompatibleAgoDateFormatter(r, new Date(o), u, e, a), r.removeClass("time-upd js-time-upd")
                }))
            }
        },
        764612: (t, e, a) => {
            "use strict";
            a.r(e);
            a(176950)
        }
    },
    t => {
        t.O(0, [8348, 3086, 72066, 93419, 89806, 37352, 82472, 37202, 19768, 12620, 13608, 86742, 32547, 80624, 68479, 75514, 75932, 25977, 23127, 24951, 95170, 17487, 49371, 22513, 98449, 23889, 45387, 37339, 9103, 47872, 49473, 4980, 98898, 29667, 93602, 10605, 91472, 58731, 75239], (() => {
            return e = 38599, t(t.s = e);
            var e
        }));
        t.O()
    }
]);