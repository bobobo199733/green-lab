(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [48739], {
        347092: e => {
            e.exports = {}
        },
        240435: e => {
            e.exports = {}
        },
        315949: (e, t, i) => {
            "use strict";
            i.d(t, {
                scrollTo: () => o
            });
            var n = i(745269);

            function o(e) {
                const {
                    additionalScroll: t = 0,
                    duration: i = n.dur,
                    func: o = n.easingFunc.easeInOutCubic,
                    onScrollEnd: s,
                    target: d,
                    wrap: c,
                    direction: a = "vertical"
                } = e;
                let {
                    targetRect: r,
                    wrapRect: l
                } = e;
                r = null != r ? r : d.getBoundingClientRect(), l = null != l ? l : c.getBoundingClientRect();
                const u = ("vertical" === a ? r.top - l.top : r.left - l.left) + t,
                    v = "vertical" === a ? "scrollTop" : "scrollLeft",
                    p = c ? c[v] : 0;
                let g, h = 0;
                return h = window.requestAnimationFrame((function e(t) {
                        let n;
                        if (g ? n = t - g : (n = 0, g = t), n >= i) return c[v] = p + u, void(s && s());
                        const d = p + u * o(n / i);
                        c[v] = Math.floor(d), h = window.requestAnimationFrame(e)
                    })),
                    function() {
                        window.cancelAnimationFrame(h), s && s()
                    }
            }
        },
        839178: (e, t, i) => {
            "use strict";
            i.r(t);
            var n = i(343370),
                o = (i(347092), i(240435), i(876242)),
                s = i(850775),
                d = i(575658),
                c = i(324797),
                a = i(315949),
                r = i(190443),
                l = i(823127),
                u = i(97639),
                v = i(725977);
            const p = {},
                g = l("body"),
                h = l(document),
                m = l('<div class="tv-device-menu__overlay i-hidden"></div>'),
                f = h.find(".js-container-android-notification"),
                y = h.find(".js-container-ios-notification");
            let C, _, b = 0;
            l((function() {
                g.append(m), C = l(".tv-header"), _ = C.find(".js-device-menu-btn--center"), h.on("click", ".js-device-menu-btn", (function(e) {
                    const t = l(e.currentTarget).data("device-menu-id");
                    let i = l(e.currentTarget).data("device-menu-action"); - 1 === ["toggle", "open", "close"].indexOf(i) && (i = "toggle"), p[t] && p[t][i]()
                }))
            }));
            const w = {
                center: {
                    open: function(e, t = l.noop) {
                        _.addClass("i-dropped"), m.addClass("tv-device-menu__overlay--center");
                        const i = e.find(".tv-device-menu__inner").css("opacity", 0);
                        e.css({
                            opacity: 0,
                            translateY: 0
                        }), (0, r.lazyVelocity)().then((() => {
                            e.velocity({
                                translateY: [0, "-100%"]
                            }, {
                                queue: !1,
                                duration: .75 * o.dur,
                                easing: "easeInOutCubic",
                                delay: 1,
                                complete: () => {
                                    i.velocity({
                                        opacity: 1
                                    }, {
                                        queue: !1,
                                        duration: .75 * o.dur,
                                        easing: "easeOutCubic"
                                    }), t()
                                }
                            }), setTimeout((function() {
                                e.css("opacity", 1)
                            }), 2)
                        }))
                    },
                    close: function(e, t = l.noop) {
                        _.removeClass("i-dropped"), m.removeClass("tv-device-menu__overlay--center"), e.find(".tv-device-menu__inner").velocity("stop").velocity({
                            opacity: 0
                        }, {
                            queue: !1,
                            duration: .5 * o.dur,
                            easing: "easeInCubic",
                            complete: () => {
                                e.velocity({
                                    translateY: "-100%"
                                }, {
                                    queue: !1,
                                    duration: .75 * o.dur,
                                    easing: "easeInCubic",
                                    complete: t
                                })
                            }
                        })
                    }
                },
                "search-filters": {
                    open: function(e, t = l.noop) {
                        e.css("opacity", 0);
                        const i = l(e.data("from-selector")),
                            n = "50% " + (i[0].getBoundingClientRect().top + 15) + "px";
                        e.css({
                            "transform-origin": n,
                            "-ms-transform-origin": n,
                            "-webkit-transform-origin": n,
                            scaleY: 1
                        });
                        const s = e.find(".tv-device-menu__inner, .tv-device-menu__header, .tv-device-menu__body").css("opacity", 0);
                        (0, r.lazyVelocity)().then((() => {
                            e.velocity({
                                scaleY: [1, 0]
                            }, {
                                queue: !1,
                                duration: o.dur,
                                delay: o.dur / 2,
                                easing: "easeInOutCubic",
                                complete: () => {
                                    s.velocity({
                                        opacity: 1
                                    }, {
                                        queue: !1,
                                        duration: .75 * o.dur,
                                        easing: "easeOutCubic",
                                        complete: t
                                    })
                                }
                            }), setTimeout((function() {
                                e.css("opacity", 1)
                            }), o.dur / 2 + 1), i.addClass("i-device-menu-mode--opened").css("z-index", 199)
                        }))
                    },
                    close: function(e, t = l.noop) {
                        e.find(".tv-device-menu__inner, .tv-device-menu__header, .tv-device-menu__body").velocity({
                            opacity: 0
                        }, {
                            queue: !1,
                            duration: o.dur / 2,
                            easing: "easeInCubic",
                            complete: () => {
                                const i = l(e.data("from-selector")),
                                    n = "50% " + (i[0].getBoundingClientRect().top + 5) + "px";
                                e.css({
                                    "transform-origin": n,
                                    "-ms-transform-origin": n,
                                    "-webkit-transform-origin": n
                                }).velocity({
                                    scaleY: [0, 1]
                                }, {
                                    queue: !1,
                                    duration: o.dur,
                                    easing: "easeInCubic",
                                    complete: () => {
                                        i.removeClass("i-device-menu-mode--opened").css("z-index", ""), t()
                                    }
                                })
                            }
                        })
                    }
                }
            };
            const S = ["center"];
            class x {
                constructor(e = {}) {
                    this.opened = !1, this.animated = !1, this.$el = e.$el, this.id = this.$el.data("device-menu-id"), this.scrolltoend = new u;
                    const t = this.$el.find(".tv-device-menu__body"),
                        i = this.$el.find(".tv-device-menu__inner"),
                        o = (0, n.default)((() => {
                            const e = t[0].scrollHeight > t.height(),
                                n = t.scrollTop() >= i.outerHeight() - t.height();
                            e && n && this.scrolltoend.fire()
                        }), 150, {
                            leading: !1,
                            trailing: !0
                        });
                    t.on("scroll", o), p[this.id] = this, this.$el.on("click", ".js-device-menu__close, a.tv-device-menu__item", (() => this.close())), s.mediaState.on("changeDevice", ((e, t) => {
                        const i = "desktop" === e || "desktopHd" === e;
                        this.opened && i && this.close()
                    }))
                }
                toggle() {
                    this[this.opened ? "close" : "open"]()
                }
                open() {
                    this.animated || this.opened || (this.opened = !0, this.animated = !0, f.addClass("i-hidden"), y.addClass("i-hidden"), m.css("opacity", 0).on("click.tv-device-menu-close", (() => this.close())), -1 !== S.indexOf(this.id) && (b = g.scrollTop(), (0, a.scrollTo)({
                        wrap: g.get(0),
                        target: C.get(0),
                        onScrollEnd: () => {
                            (0, d.setFixedBodyState)(!0)
                        }
                    })), this.$el.trigger("deviceMenuBeforeOpen").removeClass("i-hidden").scrollTop(0), C.addClass("i-device-menu-mode--" + this.id), g.addClass("i-no-padding"), w[this.id].open(this.$el, (() => {
                        this.$el.attr("style", "").addClass("i-opened").trigger("deviceMenuAfterOpen"), this.animated = !1
                    })), m.removeClass("i-hidden").velocity({
                        opacity: 1
                    }, {
                        queue: !1,
                        duration: o.dur,
                        easing: "easeOutCubic"
                    }))
                }
                close() {
                    !this.animated && this.opened && (this.opened = !1, this.animated = !0, m.off("click.tv-device-menu-close"), this.$el.trigger("deviceMenuBeforeClose"), g.removeClass("i-no-padding"), (0, d.setFixedBodyState)(!1), -1 !== S.indexOf(this.id) && (0, a.scrollTo)({
                        wrap: g.get(0),
                        target: g.get(0),
                        additionalScroll: b
                    }), w[this.id].close(this.$el, (() => {
                        this.$el.attr("style", "").addClass("i-hidden").removeClass("i-opened").trigger("deviceMenuAfterClose"), C.removeClass("i-device-menu-mode--" + this.id), f.removeClass("i-hidden"), y.removeClass("i-hidden"), this.animated = !1
                    })), m.velocity({
                        opacity: 0
                    }, {
                        queue: !1,
                        duration: o.dur,
                        delay: o.dur / 2,
                        easing: "easeInCubic",
                        complete: () => {
                            m.addClass("i-hidden")
                        }
                    }))
                }
            }
            l.fn.tvDeviceMenu = (0, c.createTvBlockWithInstance)("tv-device-menu", (function(e, t = {}) {
                return new x(v.extend(t, {
                    $el: e
                }))
            }))
        },
        575658: (e, t, i) => {
            "use strict";
            i.d(t, {
                setFixedBodyState: () => c
            });
            var n = i(76107),
                o = i(531327);
            let s = 0,
                d = !1;

            function c(e) {
                const {
                    body: t
                } = document, i = t.querySelector(".widgetbar-wrap");
                if (e && 1 == ++s) {
                    const e = (0, n.getCSSProperty)(t, "overflow"),
                        o = (0, n.getCSSPropertyNumericValue)(t, "padding-right");
                    "hidden" !== e.toLowerCase() && t.scrollHeight > t.offsetHeight && ((0, n.setStyle)(i, "right", `${(0,
n.getScrollbarWidth)()}px`), t.style.paddingRight = `${o+(0,n.getScrollbarWidth)()}px`, d = !0), t.classList.add("i-no-scroll")
                } else if (!e && s > 0 && 0 == --s && (t.classList.remove("i-no-scroll"), d)) {
                    (0, n.setStyle)(i, "right", "0px");
                    let e = 0;
                    e = i ? (0, o.getWidgetBarPadding)((0, n.getContentWidth)(i)) : 0, t.scrollHeight <= t.clientHeight && (e -= (0, n.getScrollbarWidth)()), t.style.paddingRight = (e < 0 ? 0 : e) + "px", d = !1
                }
            }
        }
    }
]);