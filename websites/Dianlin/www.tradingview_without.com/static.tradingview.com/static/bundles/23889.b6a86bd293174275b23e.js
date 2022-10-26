(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [23889], {
        560170: () => {
            ! function() {
                var t, e, i, o, n = window.jQuery,
                    s = n(window),
                    r = n(document),
                    a = "http://www.w3.org/2000/svg",
                    c = "SVGAngle" in window && ((i = document.createElement("div")).innerHTML = "<svg/>", e = (i.firstChild && i.firstChild.namespaceURI) == a, i.innerHTML = "", e),
                    l = "transition" in (o = document.createElement("div").style) || "WebkitTransition" in o || "MozTransition" in o || "msTransition" in o || "OTransition" in o,
                    u = "ontouchstart" in window,
                    h = "mousedown" + (u ? " touchstart" : ""),
                    p = "mousemove.clockpicker" + (u ? " touchmove.clockpicker" : ""),
                    f = "mouseup.clockpicker" + (u ? " touchend.clockpicker" : ""),
                    d = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null;

                function g(t) {
                    return document.createElementNS(a, t)
                }

                function m(t) {
                    return (t < 10 ? "0" : "") + t
                }
                var v = 0;
                var b = 100,
                    y = 80,
                    w = 13,
                    k = l ? 350 : 1,
                    _ = ['<div class="popover clockpicker-popover">', '<div class="arrow"></div>', '<div class="popover-title">', '<span class="clockpicker-span-hours text-primary"></span>', " : ", '<span class="clockpicker-span-minutes"></span>', '<span class="clockpicker-span-am-pm"></span>', "</div>", '<div class="popover-content">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<span class="clockpicker-am-pm-block">', "</span>", "</div>", "</div>"].join("");

                function x(e, i) {
                    var o, s, a = n(_),
                        l = a.find(".clockpicker-plate"),
                        u = a.find(".clockpicker-hours"),
                        d = a.find(".clockpicker-minutes"),
                        x = a.find(".clockpicker-am-pm-block"),
                        M = "INPUT" === e.prop("tagName"),
                        D = M ? e : e.find("input"),
                        T = e.find(".input-group-addon"),
                        W = this;
                    if (this.id = (s = ++v + "", (o = "cp") ? o + s : s), this.element = e, this.options = i, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = M, this.input = D, this.addon = T, this.popover = a, this.plate = l, this.hoursView = u, this.minutesView = d, this.amPmBlock = x, this.spanHours = a.find(".clockpicker-span-hours"), this.spanMinutes = a.find(".clockpicker-span-minutes"), this.spanAmPm = a.find(".clockpicker-span-am-pm"), this.amOrPm = "PM", i.twelvehour) {
                        var S = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn btn-sm btn-default clockpicker-button clockpicker-am-button">', "AM</button>", '<button type="button" class="btn btn-sm btn-default clockpicker-button clockpicker-pm-button">', "PM</button>", "</div>"].join("");
                        n(S);
                        n('<button type="button" class="btn btn-sm btn-default clockpicker-button am-button">AM</button>').on("click", (function() {
                            W.amOrPm = "AM", n(".clockpicker-span-am-pm").empty().append("AM")
                        })).appendTo(this.amPmBlock), n('<button type="button" class="btn btn-sm btn-default clockpicker-button pm-button">PM</button>').on("click", (function() {
                            W.amOrPm = "PM", n(".clockpicker-span-am-pm").empty().append("PM")
                        })).appendTo(this.amPmBlock)
                    }
                    i.autoclose || n('<button type="button" class="btn btn-sm btn-default btn-block clockpicker-button">' + i.donetext + "</button>").click(n.proxy(this.done, this)).appendTo(a),
                        "top" !== i.placement && "bottom" !== i.placement || "top" !== i.align && "bottom" !== i.align || (i.align = "left"), "left" !== i.placement && "right" !== i.placement || "left" !== i.align && "right" !== i.align || (i.align = "top"), a.addClass(i.placement), a.addClass("clockpicker-align-" + i.align), this.spanHours.click(n.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(n.proxy(this.toggleView, this, "minutes")), D.on("focus.clockpicker click.clockpicker", n.proxy(this.show, this)), T.on("click.clockpicker", n.proxy(this.toggle, this));
                    var E, H, A, N, P = n('<div class="clockpicker-tick"></div>');
                    if (i.twelvehour)
                        for (E = 1; E < 13; E += 1) H = P.clone(), A = E / 6 * Math.PI, N = y, H.css("font-size", "120%"), H.css({
                            left: b + Math.sin(A) * N - w,
                            top: b - Math.cos(A) * N - w
                        }), H.html(0 === E ? "00" : E), u.append(H), H.on(h, I);
                    else
                        for (E = 0; E < 24; E += 1) {
                            H = P.clone(), A = E / 6 * Math.PI;
                            var L = E > 0 && E < 13;
                            N = L ? 54 : y, H.css({
                                left: b + Math.sin(A) * N - w,
                                top: b - Math.cos(A) * N - w
                            }), L && H.css("font-size", "120%"), H.html(0 === E ? "00" : E), u.append(H), H.on(h, I)
                        }
                    for (E = 0; E < 60; E += 5) H = P.clone(), A = E / 30 * Math.PI, H.css({
                        left: b + Math.sin(A) * y - w,
                        top: b - Math.cos(A) * y - w
                    }), H.css("font-size", "120%"), H.html(m(E)), d.append(H), H.on(h, I);

                    function I(e, o) {
                        var n = l.offset(),
                            s = /^touch/.test(e.type),
                            a = n.left + b,
                            u = n.top + b,
                            h = (s ? e.originalEvent.touches[0] : e).pageX - a,
                            d = (s ? e.originalEvent.touches[0] : e).pageY - u,
                            g = Math.sqrt(h * h + d * d),
                            m = !1;
                        if (!o || !(g < 67 || g > 93)) {
                            e.preventDefault();
                            var v = setTimeout((function() {
                                t.addClass("clockpicker-moving")
                            }), 200);
                            c && l.append(W.canvas), W.setHand(h, d, !o, !0), r.off(p).on(p, (function(t) {
                                t.preventDefault();
                                var e = /^touch/.test(t.type),
                                    i = (e ? t.originalEvent.touches[0] : t).pageX - a,
                                    o = (e ? t.originalEvent.touches[0] : t).pageY - u;
                                (m || i !== h || o !== d) && (m = !0, W.setHand(i, o, !1, !0))
                            })), r.off(f).on(f, (function(e) {
                                r.off(f), e.preventDefault();
                                var n = /^touch/.test(e.type),
                                    s = (n ? e.originalEvent.changedTouches[0] : e).pageX - a,
                                    c = (n ? e.originalEvent.changedTouches[0] : e).pageY - u;
                                (o || m) && s === h && c === d && W.setHand(s, c), "hours" === W.currentView ? W.toggleView("minutes", k / 2) : i.autoclose && (W.minutesView.addClass("clockpicker-dial-out"), setTimeout((function() {
                                    W.done()
                                }), k / 2)), l.prepend(O), clearTimeout(v), t.removeClass("clockpicker-moving"), r.off(p)
                            }))
                        }
                    }
                    if (l.on(h, (function(t) {
                            0 === n(t.target).closest(".clockpicker-tick").length && I(t, !0)
                        })), c) {
                        var O = a.find(".clockpicker-canvas"),
                            F = g("svg");
                        F.setAttribute("class", "clockpicker-svg"), F.setAttribute("width", 200), F.setAttribute("height", 200);
                        var R = g("g");
                        R.setAttribute("transform", "translate(100,100)");
                        var V = g("circle");
                        V.setAttribute("class", "clockpicker-canvas-bearing"), V.setAttribute("cx", 0), V.setAttribute("cy", 0), V.setAttribute("r", 2);
                        var B = g("line");
                        B.setAttribute("x1", 0), B.setAttribute("y1", 0);
                        var j = g("circle");
                        j.setAttribute("class", "clockpicker-canvas-bg"), j.setAttribute("r", w);
                        var U = g("circle");
                        U.setAttribute("class", "clockpicker-canvas-fg"), U.setAttribute("r", 3.5), R.appendChild(B), R.appendChild(j), R.appendChild(U), R.appendChild(V), F.appendChild(R), O.append(F), this.hand = B, this.bg = j, this.fg = U, this.bearing = V, this.g = R, this.canvas = O
                    }
                    C(this.options.init)
                }

                function C(t) {
                    t && "function" == typeof t && t()
                }
                x.DEFAULTS = {
                    default: "",
                    fromnow: 0,
                    placement: "bottom",
                    align: "left",
                    donetext: "完成",
                    autoclose: !1,
                    twelvehour: !1,
                    vibrate: !0
                }, x.prototype.toggle = function() {
                    this[this.isShown ? "hide" : "show"]()
                }, x.prototype.locate = function() {
                    var t = this.element,
                        e = this.popover,
                        i = t.offset(),
                        o = t.outerWidth(),
                        n = t.outerHeight(),
                        s = this.options.placement,
                        r = this.options.align,
                        a = {};
                    switch (e.show(), s) {
                        case "bottom":
                            a.top = i.top + n;
                            break;
                        case "right":
                            a.left = i.left + o;
                            break;
                        case "top":
                            a.top = i.top - e.outerHeight();
                            break;
                        case "left":
                            a.left = i.left - e.outerWidth()
                    }
                    switch (r) {
                        case "left":
                            a.left = i.left;
                            break;
                        case "right":
                            a.left = i.left + o - e.outerWidth();
                            break;
                        case "top":
                            a.top = i.top;
                            break;
                        case "bottom":
                            a.top = i.top + n - e.outerHeight()
                    }
                    e.css(a)
                }, x.prototype.show = function(e) {
                    if (!this.isShown) {
                        C(this.options.beforeShow);
                        var i = this;
                        this.isAppended || (t = n(document.body).append(this.popover), s.on("resize.clockpicker" + this.id, (function() {
                            i.isShown && i.locate()
                        })), this.isAppended = !0);
                        var o = ((this.input.prop("value") || this.options.default || "") + "").split(":");
                        if ("now" === o[0]) {
                            var a = new Date(+new Date + this.options.fromnow);
                            o = [a.getHours(), a.getMinutes()]
                        }
                        this.hours = +o[0] || 0, this.minutes = +o[1] || 0, this.spanHours.html(m(this.hours)), this.spanMinutes.html(m(this.minutes)), this.toggleView("hours"), this.locate(), this.isShown = !0, r.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, (function(t) {
                            var e = n(t.target);
                            0 === e.closest(i.popover).length && 0 === e.closest(i.addon).length && 0 === e.closest(i.input).length && i.hide()
                        })), r.on("keyup.clockpicker." + this.id, (function(t) {
                            27 === t.keyCode && i.hide()
                        })), C(this.options.afterShow)
                    }
                }, x.prototype.hide = function() {
                    C(this.options.beforeHide), this.isShown = !1, r.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), r.off("keyup.clockpicker." + this.id), this.popover.hide(), C(this.options.afterHide)
                }, x.prototype.toggleView = function(t, e) {
                    var i = !1;
                    "minutes" === t && "visible" === n(this.hoursView).css("visibility") && (C(this.options.beforeHourSelect), i = !0);
                    var o = "hours" === t,
                        s = o ? this.hoursView : this.minutesView,
                        r = o ? this.minutesView : this.hoursView;
                    this.currentView = t, this.spanHours.toggleClass("text-primary", o), this.spanMinutes.toggleClass("text-primary", !o), r.addClass("clockpicker-dial-out"), s.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(e), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout((function() {
                        r.css("visibility", "hidden")
                    }), k), i && C(this.options.afterHourSelect)
                }, x.prototype.resetClock = function(t) {
                    var e = this.currentView,
                        i = this[e],
                        o = "hours" === e,
                        n = i * (Math.PI / (o ? 6 : 30)),
                        s = o && i > 0 && i < 13 ? 54 : y,
                        r = Math.sin(n) * s,
                        a = -Math.cos(n) * s,
                        l = this;
                    c && t ? (l.canvas.addClass("clockpicker-canvas-out"), setTimeout((function() {
                        l.canvas.removeClass("clockpicker-canvas-out"), l.setHand(r, a)
                    }), t)) : this.setHand(r, a)
                }, x.prototype.setHand = function(t, e, i, o) {
                    var s, r = Math.atan2(t, -e),
                        a = "hours" === this.currentView,
                        l = Math.PI / (a || i ? 6 : 30),
                        u = Math.sqrt(t * t + e * e),
                        h = this.options,
                        p = a && u < 67,
                        f = p ? 54 : y;
                    if (h.twelvehour && (f = y), r < 0 && (r = 2 * Math.PI + r), r = (s = Math.round(r / l)) * l, h.twelvehour ? a ? 0 === s && (s = 12) : (i && (s *= 5), 60 === s && (s = 0)) : a ? (12 === s && (s = 0), s = p ? 0 === s ? 12 : s : 0 === s ? 0 : s + 12) : (i && (s *= 5), 60 === s && (s = 0)),
                        this[this.currentView] !== s && d && this.options.vibrate && (this.vibrateTimer || (navigator[d](10), this.vibrateTimer = setTimeout(n.proxy((function() {
                            this.vibrateTimer = null
                        }), this), 100))), this[this.currentView] = s, this[a ? "spanHours" : "spanMinutes"].html(m(s)), c) {
                        o || !a && s % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));
                        var g = Math.sin(r) * f,
                            v = -Math.cos(r) * f;
                        this.hand.setAttribute("x2", g), this.hand.setAttribute("y2", v), this.bg.setAttribute("cx", g), this.bg.setAttribute("cy", v), this.fg.setAttribute("cx", g), this.fg.setAttribute("cy", v)
                    } else this[a ? "hoursView" : "minutesView"].find(".clockpicker-tick").each((function() {
                        var t = n(this);
                        t.toggleClass("active", s === +t.html())
                    }))
                }, x.prototype.done = function() {
                    C(this.options.beforeDone), this.hide();
                    var t = this.input.prop("value"),
                        e = m(this.hours) + ":" + m(this.minutes);
                    this.options.twelvehour && (e += this.amOrPm), this.input.prop("value", e), e !== t && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), C(this.options.afterDone)
                }, x.prototype.remove = function() {
                    this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.addon.off("click.clockpicker"), this.isShown && this.hide(), this.isAppended && (s.off("resize.clockpicker" + this.id), this.popover.remove())
                }, n.fn.clockpicker = function(t) {
                    var e = Array.prototype.slice.call(arguments, 1);
                    return this.each((function() {
                        var i = n(this),
                            o = i.data("clockpicker");
                        if (o) "function" == typeof o[t] && o[t].apply(o, e);
                        else {
                            var s = n.extend({}, x.DEFAULTS, i.data(), "object" == typeof t && t);
                            i.data("clockpicker", new x(i, s))
                        }
                    }))
                }
            }()
        },
        636995: (t, e, i) => {
            var o, n;
            void 0 === (n = "function" == typeof(o = ["jquery", "./data", "./disable-selection", "./focusable", "./form", "./ie", "./keycode", "./labels", "./jquery-1-7", "./plugin", "./safe-active-element", "./safe-blur", "./scroll-parent", "./tabbable", "./unique-id", "./version"]) ? o.call(e, i, e, t) : o) || (t.exports = n)
        },
        386727: (t, e, i) => {
            var o, n, s;
            n = [i(823127), i(834912)], o = function(t) {
                var e, i = "ui-effects-",
                    o = "ui-effects-style",
                    n = "ui-effects-animated",
                    s = t;
                return t.effects = {
                        effect: {}
                    },
                    function(t, e) {
                        var i, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                            n = /^([\-+])=\s*(\d+\.?\d*)/,
                            s = [{
                                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                                parse: function(t) {
                                    return [t[1], t[2], t[3], t[4]]
                                }
                            }, {
                                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                                parse: function(t) {
                                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                                }
                            }, {
                                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                                parse: function(t) {
                                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                                }
                            }, {
                                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                                parse: function(t) {
                                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                                }
                            }, {
                                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                                space: "hsla",
                                parse: function(t) {
                                    return [t[1], t[2] / 100, t[3] / 100, t[4]]
                                }
                            }],
                            r = t.Color = function(e, i, o, n) {
                                return new t.Color.fn.parse(e, i, o, n)
                            },
                            a = {
                                rgba: {
                                    props: {
                                        red: {
                                            idx: 0,
                                            type: "byte"
                                        },
                                        green: {
                                            idx: 1,
                                            type: "byte"
                                        },
                                        blue: {
                                            idx: 2,
                                            type: "byte"
                                        }
                                    }
                                },
                                hsla: {
                                    props: {
                                        hue: {
                                            idx: 0,
                                            type: "degrees"
                                        },
                                        saturation: {
                                            idx: 1,
                                            type: "percent"
                                        },
                                        lightness: {
                                            idx: 2,
                                            type: "percent"
                                        }
                                    }
                                }
                            },
                            c = {
                                byte: {
                                    floor: !0,
                                    max: 255
                                },
                                percent: {
                                    max: 1
                                },
                                degrees: {
                                    mod: 360,
                                    floor: !0
                                }
                            },
                            l = r.support = {},
                            u = t("<p>")[0],
                            h = t.each;

                        function p(t, e, i) {
                            var o = c[e.type] || {};
                            return null == t ? i || !e.def ? null : e.def : (t = o.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : o.mod ? (t + o.mod) % o.mod : 0 > t ? 0 : o.max < t ? o.max : t)
                        }

                        function f(e) {
                            var o = r(),
                                n = o._rgba = [];
                            return e = e.toLowerCase(), h(s, (function(t, i) {
                                var s, r = i.re.exec(e),
                                    c = r && i.parse(r),
                                    l = i.space || "rgba";
                                if (c) return s = o[l](c), o[a[l].cache] = s[a[l].cache], n = o._rgba = s._rgba, !1
                            })), n.length ? ("0,0,0,0" === n.join() && t.extend(n, i.transparent), o) : i[e]
                        }

                        function d(t, e, i) {
                            return 6 * (i = (i + 1) % 1) < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
                        }
                        u.style.cssText = "background-color:rgba(1,1,1,.5)", l.rgba = u.style.backgroundColor.indexOf("rgba") > -1, h(a, (function(t, e) {
                            e.cache = "_" + t, e.props.alpha = {
                                idx: 3,
                                type: "percent",
                                def: 1
                            }
                        })), r.fn = t.extend(r.prototype, {
                            parse: function(o, n, s, c) {
                                if (o === e) return this._rgba = [null, null, null, null], this;
                                (o.jquery || o.nodeType) && (o = t(o).css(n), n = e);
                                var l = this,
                                    u = t.type(o),
                                    d = this._rgba = [];
                                return n !== e && (o = [o, n, s, c], u = "array"), "string" === u ? this.parse(f(o) || i._default) : "array" === u ? (h(a.rgba.props, (function(t, e) {
                                    d[e.idx] = p(o[e.idx], e)
                                })), this) : "object" === u ? (h(a, o instanceof r ? function(t, e) {
                                    o[e.cache] && (l[e.cache] = o[e.cache].slice())
                                } : function(e, i) {
                                    var n = i.cache;
                                    h(i.props, (function(t, e) {
                                        if (!l[n] && i.to) {
                                            if ("alpha" === t || null == o[t]) return;
                                            l[n] = i.to(l._rgba)
                                        }
                                        l[n][e.idx] = p(o[t], e, !0)
                                    })), l[n] && t.inArray(null, l[n].slice(0, 3)) < 0 && (l[n][3] = 1, i.from && (l._rgba = i.from(l[n])))
                                }), this) : void 0
                            },
                            is: function(t) {
                                var e = r(t),
                                    i = !0,
                                    o = this;
                                return h(a, (function(t, n) {
                                    var s, r = e[n.cache];
                                    return r && (s = o[n.cache] || n.to && n.to(o._rgba) || [], h(n.props, (function(t, e) {
                                        if (null != r[e.idx]) return i = r[e.idx] === s[e.idx]
                                    }))), i
                                })), i
                            },
                            _space: function() {
                                var t = [],
                                    e = this;
                                return h(a, (function(i, o) {
                                    e[o.cache] && t.push(i)
                                })), t.pop()
                            },
                            transition: function(t, e) {
                                var i = r(t),
                                    o = i._space(),
                                    n = a[o],
                                    s = 0 === this.alpha() ? r("transparent") : this,
                                    l = s[n.cache] || n.to(s._rgba),
                                    u = l.slice();
                                return i = i[n.cache], h(n.props, (function(t, o) {
                                    var n = o.idx,
                                        s = l[n],
                                        r = i[n],
                                        a = c[o.type] || {};
                                    null !== r && (null === s ? u[n] = r : (a.mod && (r - s > a.mod / 2 ? s += a.mod : s - r > a.mod / 2 && (s -= a.mod)), u[n] = p((r - s) * e + s, o)))
                                })), this[o](u)
                            },
                            blend: function(e) {
                                if (1 === this._rgba[3]) return this;
                                var i = this._rgba.slice(),
                                    o = i.pop(),
                                    n = r(e)._rgba;
                                return r(t.map(i, (function(t, e) {
                                    return (1 - o) * n[e] + o * t
                                })))
                            },
                            toRgbaString: function() {
                                var e = "rgba(",
                                    i = t.map(this._rgba, (function(t, e) {
                                        return null == t ? e > 2 ? 1 : 0 : t
                                    }));
                                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                            },
                            toHslaString: function() {
                                var e = "hsla(",
                                    i = t.map(this.hsla(), (function(t, e) {
                                        return null == t && (t = e > 2 ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t
                                    }));
                                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                            },
                            toHexString: function(e) {
                                var i = this._rgba.slice(),
                                    o = i.pop();
                                return e && i.push(~~(255 * o)), "#" + t.map(i, (function(t) {
                                    return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                                })).join("")
                            },
                            toString: function() {
                                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                            }
                        }), r.fn.parse.prototype = r.fn, a.hsla.to = function(t) {
                            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                            var e, i, o = t[0] / 255,
                                n = t[1] / 255,
                                s = t[2] / 255,
                                r = t[3],
                                a = Math.max(o, n, s),
                                c = Math.min(o, n, s),
                                l = a - c,
                                u = a + c,
                                h = .5 * u;
                            return e = c === a ? 0 : o === a ? 60 * (n - s) / l + 360 : n === a ? 60 * (s - o) / l + 120 : 60 * (o - n) / l + 240, i = 0 === l ? 0 : h <= .5 ? l / u : l / (2 - u), [Math.round(e) % 360, i, h, null == r ? 1 : r]
                        }, a.hsla.from = function(t) {
                            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                            var e = t[0] / 360,
                                i = t[1],
                                o = t[2],
                                n = t[3],
                                s = o <= .5 ? o * (1 + i) : o + i - o * i,
                                r = 2 * o - s;
                            return [Math.round(255 * d(r, s, e + 1 / 3)), Math.round(255 * d(r, s, e)), Math.round(255 * d(r, s, e - 1 / 3)), n]
                        }, h(a, (function(i, o) {
                            var s = o.props,
                                a = o.cache,
                                c = o.to,
                                l = o.from;
                            r.fn[i] = function(i) {
                                if (c && !this[a] && (this[a] = c(this._rgba)), i === e) return this[a].slice();
                                var o, n = t.type(i),
                                    u = "array" === n || "object" === n ? i : arguments,
                                    f = this[a].slice();
                                return h(s, (function(t, e) {
                                    var i = u["object" === n ? t : e.idx];
                                    null == i && (i = f[e.idx]), f[e.idx] = p(i, e)
                                })), l ? ((o = r(l(f)))[a] = f, o) : r(f)
                            }, h(s, (function(e, o) {
                                r.fn[e] || (r.fn[e] = function(s) {
                                    var r, a = t.type(s),
                                        c = "alpha" === e ? this._hsla ? "hsla" : "rgba" : i,
                                        l = this[c](),
                                        u = l[o.idx];
                                    return "undefined" === a ? u : ("function" === a && (s = s.call(this, u), a = t.type(s)), null == s && o.empty ? this : ("string" === a && (r = n.exec(s)) && (s = u + parseFloat(r[2]) * ("+" === r[1] ? 1 : -1)), l[o.idx] = s, this[c](l)))
                                })
                            }))
                        })), r.hook = function(e) {
                            var i = e.split(" ");
                            h(i, (function(e, i) {
                                t.cssHooks[i] = {
                                    set: function(e, o) {
                                        var n, s, a = "";
                                        if ("transparent" !== o && ("string" !== t.type(o) || (n = f(o)))) {
                                            if (o = r(n || o), !l.rgba && 1 !== o._rgba[3]) {
                                                for (s = "backgroundColor" === i ? e.parentNode : e;
                                                    ("" === a || "transparent" === a) && s && s.style;) try {
                                                    a = t.css(s, "backgroundColor"), s = s.parentNode
                                                } catch (t) {}
                                                o = o.blend(a && "transparent" !== a ? a : "_default")
                                            }
                                            o = o.toRgbaString()
                                        }
                                        try {
                                            e.style[i] = o
                                        } catch (t) {}
                                    }
                                }, t.fx.step[i] = function(e) {
                                    e.colorInit || (e.start = r(e.elem, i), e.end = r(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                                }
                            }))
                        }, r.hook(o), t.cssHooks.borderColor = {
                            expand: function(t) {
                                var e = {};
                                return h(["Top", "Right", "Bottom", "Left"], (function(i, o) {
                                    e["border" + o + "Color"] = t
                                })), e
                            }
                        }, i = t.Color.names = {
                            aqua: "#00ffff",
                            black: "#000000",
                            blue: "#0000ff",
                            fuchsia: "#ff00ff",
                            gray: "#808080",
                            green: "#008000",
                            lime: "#00ff00",
                            maroon: "#800000",
                            navy: "#000080",
                            olive: "#808000",
                            purple: "#800080",
                            red: "#ff0000",
                            silver: "#c0c0c0",
                            teal: "#008080",
                            white: "#ffffff",
                            yellow: "#ffff00",
                            transparent: [null, null, null, 0],
                            _default: "#ffffff"
                        }
                    }(s),
                    function() {
                        var e, i = ["add", "remove", "toggle"],
                            o = {
                                border: 1,
                                borderBottom: 1,
                                borderColor: 1,
                                borderLeft: 1,
                                borderRight: 1,
                                borderTop: 1,
                                borderWidth: 1,
                                margin: 1,
                                padding: 1
                            };

                        function n(e) {
                            var i, o, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                                s = {};
                            if (n && n.length && n[0] && n[n[0]])
                                for (o = n.length; o--;) "string" == typeof n[i = n[o]] && (s[t.camelCase(i)] = n[i]);
                            else
                                for (i in n) "string" == typeof n[i] && (s[i] = n[i]);
                            return s
                        }

                        function r(e, i) {
                            var n, s, r = {};
                            for (n in i) s = i[n], e[n] !== s && (o[n] || !t.fx.step[n] && isNaN(parseFloat(s)) || (r[n] = s));
                            return r
                        }
                        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], (function(e, i) {
                            t.fx.step[i] = function(t) {
                                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (s.style(t.elem, i, t.end), t.setAttr = !0)
                            }
                        })), t.fn.addBack || (t.fn.addBack = function(t) {
                            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                        }), t.effects.animateClass = function(e, o, s, a) {
                            var c = t.speed(o, s, a);
                            return this.queue((function() {
                                var o, s = t(this),
                                    a = s.attr("class") || "",
                                    l = c.children ? s.find("*").addBack() : s;
                                l = l.map((function() {
                                    return {
                                        el: t(this),
                                        start: n(this)
                                    }
                                })), (o = function() {
                                    t.each(i, (function(t, i) {
                                        e[i] && s[i + "Class"](e[i])
                                    }))
                                })(), l = l.map((function() {
                                    return this.end = n(this.el[0]), this.diff = r(this.start, this.end), this
                                })), s.attr("class", a), l = l.map((function() {
                                    var e = this,
                                        i = t.Deferred(),
                                        o = t.extend({}, c, {
                                            queue: !1,
                                            complete: function() {
                                                i.resolve(e)
                                            }
                                        });
                                    return this.el.animate(this.diff, o), i.promise()
                                })), t.when.apply(t, l.get()).done((function() {
                                    o(), t.each(arguments, (function() {
                                        var e = this.el;
                                        t.each(this.diff, (function(t) {
                                            e.css(t, "")
                                        }))
                                    })), c.complete.call(s[0])
                                }))
                            }))
                        }, t.fn.extend({
                            addClass: (e = t.fn.addClass, function(i, o, n, s) {
                                return o ? t.effects.animateClass.call(this, {
                                    add: i
                                }, o, n, s) : e.apply(this, arguments)
                            }),
                            removeClass: function(e) {
                                return function(i, o, n, s) {
                                    return arguments.length > 1 ? t.effects.animateClass.call(this, {
                                        remove: i
                                    }, o, n, s) : e.apply(this, arguments)
                                }
                            }(t.fn.removeClass),
                            toggleClass: function(e) {
                                return function(i, o, n, s, r) {
                                    return "boolean" == typeof o || void 0 === o ? n ? t.effects.animateClass.call(this, o ? {
                                        add: i
                                    } : {
                                        remove: i
                                    }, n, s, r) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                                        toggle: i
                                    }, o, n, s)
                                }
                            }(t.fn.toggleClass),
                            switchClass: function(e, i, o, n, s) {
                                return t.effects.animateClass.call(this, {
                                    add: i,
                                    remove: e
                                }, o, n, s)
                            }
                        })
                    }(),
                    function() {
                        var e;

                        function s(e, i, o, n) {
                            return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                                effect: e
                            }, null == i && (i = {}), t.isFunction(i) && (n = i, o = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = o, o = i, i = {}), t.isFunction(o) && (n = o, o = null), i && t.extend(e, i), o = o || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof o ? o : o in t.fx.speeds ? t.fx.speeds[o] : t.fx.speeds._default, e.complete = n || i.complete, e
                        }

                        function r(e) {
                            return !(e && "number" != typeof e && !t.fx.speeds[e]) || "string" == typeof e && !t.effects.effect[e] || !!t.isFunction(e) || "object" == typeof e && !e.effect
                        }

                        function a(t, e) {
                            var i = e.outerWidth(),
                                o = e.outerHeight(),
                                n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, o, 0];
                            return {
                                top: parseFloat(n[1]) || 0,
                                right: "auto" === n[2] ? i : parseFloat(n[2]),
                                bottom: "auto" === n[3] ? o : parseFloat(n[3]),
                                left: parseFloat(n[4]) || 0
                            }
                        }
                        t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = (e = t.expr.filters.animated, function(i) {
                            return !!t(i).data(n) || e(i)
                        })), !1 !== t.uiBackCompat && t.extend(t.effects, {
                            save: function(t, e) {
                                for (var o = 0, n = e.length; o < n; o++) null !== e[o] && t.data(i + e[o], t[0].style[e[o]])
                            },
                            restore: function(t, e) {
                                for (var o, n = 0, s = e.length; n < s; n++) null !== e[n] && (o = t.data(i + e[n]), t.css(e[n], o))
                            },
                            setMode: function(t, e) {
                                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                            },
                            createWrapper: function(e) {
                                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                                var i = {
                                        width: e.outerWidth(!0),
                                        height: e.outerHeight(!0),
                                        float: e.css("float")
                                    },
                                    o = t("<div></div>").addClass("ui-effects-wrapper").css({
                                        fontSize: "100%",
                                        background: "transparent",
                                        border: "none",
                                        margin: 0,
                                        padding: 0
                                    }),
                                    n = {
                                        width: e.width(),
                                        height: e.height()
                                    },
                                    s = document.activeElement;
                                try {
                                    s.id
                                } catch (t) {
                                    s = document.body
                                }
                                return e.wrap(o), (e[0] === s || t.contains(e[0], s)) && t(s).trigger("focus"), o = e.parent(), "static" === e.css("position") ? (o.css({
                                    position: "relative"
                                }), e.css({
                                    position: "relative"
                                })) : (t.extend(i, {
                                    position: e.css("position"),
                                    zIndex: e.css("z-index")
                                }), t.each(["top", "left", "bottom", "right"], (function(t, o) {
                                    i[o] = e.css(o), isNaN(parseInt(i[o], 10)) && (i[o] = "auto")
                                })), e.css({
                                    position: "relative",
                                    top: 0,
                                    left: 0,
                                    right: "auto",
                                    bottom: "auto"
                                })), e.css(n), o.css(i).show()
                            },
                            removeWrapper: function(e) {
                                var i = document.activeElement;
                                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
                            }
                        }), t.extend(t.effects, {
                            version: "1.12.1",
                            define: function(e, i, o) {
                                return o || (o = i, i = "effect"), t.effects.effect[e] = o, t.effects.effect[e].mode = i, o
                            },
                            scaledDimensions: function(t, e, i) {
                                if (0 === e) return {
                                    height: 0,
                                    width: 0,
                                    outerHeight: 0,
                                    outerWidth: 0
                                };
                                var o = "horizontal" !== i ? (e || 100) / 100 : 1,
                                    n = "vertical" !== i ? (e || 100) / 100 : 1;
                                return {
                                    height: t.height() * n,
                                    width: t.width() * o,
                                    outerHeight: t.outerHeight() * n,
                                    outerWidth: t.outerWidth() * o
                                }
                            },
                            clipToBox: function(t) {
                                return {
                                    width: t.clip.right - t.clip.left,
                                    height: t.clip.bottom - t.clip.top,
                                    left: t.clip.left,
                                    top: t.clip.top
                                }
                            },
                            unshift: function(t, e, i) {
                                var o = t.queue();
                                e > 1 && o.splice.apply(o, [1, 0].concat(o.splice(e, i))), t.dequeue()
                            },
                            saveStyle: function(t) {
                                t.data(o, t[0].style.cssText)
                            },
                            restoreStyle: function(t) {
                                t[0].style.cssText = t.data(o) || "", t.removeData(o)
                            },
                            mode: function(t, e) {
                                var i = t.is(":hidden");
                                return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
                            },
                            getBaseline: function(t, e) {
                                var i, o;
                                switch (t[0]) {
                                    case "top":
                                        i = 0;
                                        break;
                                    case "middle":
                                        i = .5;
                                        break;
                                    case "bottom":
                                        i = 1;
                                        break;
                                    default:
                                        i = t[0] / e.height
                                }
                                switch (t[1]) {
                                    case "left":
                                        o = 0;
                                        break;
                                    case "center":
                                        o = .5;
                                        break;
                                    case "right":
                                        o = 1;
                                        break;
                                    default:
                                        o = t[1] / e.width
                                }
                                return {
                                    x: o,
                                    y: i
                                }
                            },
                            createPlaceholder: function(e) {
                                var o, n = e.css("position"),
                                    s = e.position();
                                return e.css({
                                    marginTop: e.css("marginTop"),
                                    marginBottom: e.css("marginBottom"),
                                    marginLeft: e.css("marginLeft"),
                                    marginRight: e.css("marginRight")
                                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute", o = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                                    display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                                    visibility: "hidden",
                                    marginTop: e.css("marginTop"),
                                    marginBottom: e.css("marginBottom"),
                                    marginLeft: e.css("marginLeft"),
                                    marginRight: e.css("marginRight"),
                                    float: e.css("float")
                                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(i + "placeholder", o)), e.css({
                                    position: n,
                                    left: s.left,
                                    top: s.top
                                }), o
                            },
                            removePlaceholder: function(t) {
                                var e = i + "placeholder",
                                    o = t.data(e);
                                o && (o.remove(), t.removeData(e))
                            },
                            cleanUp: function(e) {
                                t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
                            },
                            setTransition: function(e, i, o, n) {
                                return n = n || {}, t.each(i, (function(t, i) {
                                    var s = e.cssUnit(i);
                                    s[0] > 0 && (n[i] = s[0] * o + s[1])
                                })), n
                            }
                        }), t.fn.extend({
                            effect: function() {
                                var e = s.apply(this, arguments),
                                    i = t.effects.effect[e.effect],
                                    o = i.mode,
                                    r = e.queue,
                                    a = r || "fx",
                                    c = e.complete,
                                    l = e.mode,
                                    u = [],
                                    h = function(e) {
                                        var i = t(this),
                                            s = t.effects.mode(i, l) || o;
                                        i.data(n, !0), u.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e()
                                    };
                                if (t.fx.off || !i) return l ? this[l](e.duration, c) : this.each((function() {
                                    c && c.call(this)
                                }));

                                function p(s) {
                                    var r = t(this);

                                    function a() {
                                        r.removeData(n), t.effects.cleanUp(r), "hide" === e.mode && r.hide(), h()
                                    }

                                    function h() {
                                        t.isFunction(c) && c.call(r[0]), t.isFunction(s) && s()
                                    }
                                    e.mode = u.shift(), !1 === t.uiBackCompat || o ? "none" === e.mode ? (r[l](), h()) : i.call(r[0], e, a) : (r.is(":hidden") ? "hide" === l : "show" === l) ? (r[l](), h()) : i.call(r[0], e, h)
                                }
                                return !1 === r ? this.each(h).each(p) : this.queue(a, h).queue(a, p)
                            },
                            show: function(t) {
                                return function(e) {
                                    if (r(e)) return t.apply(this, arguments);
                                    var i = s.apply(this, arguments);
                                    return i.mode = "show", this.effect.call(this, i)
                                }
                            }(t.fn.show),
                            hide: function(t) {
                                return function(e) {
                                    if (r(e)) return t.apply(this, arguments);
                                    var i = s.apply(this, arguments);
                                    return i.mode = "hide", this.effect.call(this, i)
                                }
                            }(t.fn.hide),
                            toggle: function(t) {
                                return function(e) {
                                    if (r(e) || "boolean" == typeof e) return t.apply(this, arguments);
                                    var i = s.apply(this, arguments);
                                    return i.mode = "toggle", this.effect.call(this, i)
                                }
                            }(t.fn.toggle),
                            cssUnit: function(e) {
                                var i = this.css(e),
                                    o = [];
                                return t.each(["em", "px", "%", "pt"], (function(t, e) {
                                    i.indexOf(e) > 0 && (o = [parseFloat(i), e])
                                })), o
                            },
                            cssClip: function(t) {
                                return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : a(this.css("clip"), this)
                            },
                            transfer: function(e, i) {
                                var o = t(this),
                                    n = t(e.to),
                                    s = "fixed" === n.css("position"),
                                    r = t("body"),
                                    a = s ? r.scrollTop() : 0,
                                    c = s ? r.scrollLeft() : 0,
                                    l = n.offset(),
                                    u = {
                                        top: l.top - a,
                                        left: l.left - c,
                                        height: n.innerHeight(),
                                        width: n.innerWidth()
                                    },
                                    h = o.offset(),
                                    p = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                                        top: h.top - a,
                                        left: h.left - c,
                                        height: o.innerHeight(),
                                        width: o.innerWidth(),
                                        position: s ? "fixed" : "absolute"
                                    }).animate(u, e.duration, e.easing, (function() {
                                        p.remove(), t.isFunction(i) && i()
                                    }))
                            }
                        }), t.fx.step.clip = function(e) {
                            e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = a(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
                                top: e.pos * (e.end.top - e.start.top) + e.start.top,
                                right: e.pos * (e.end.right - e.start.right) + e.start.right,
                                bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                                left: e.pos * (e.end.left - e.start.left) + e.start.left
                            })
                        }
                    }(), e = {}, t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], (function(t, i) {
                        e[i] = function(e) {
                            return Math.pow(e, t + 2)
                        }
                    })), t.extend(e, {
                        Sine: function(t) {
                            return 1 - Math.cos(t * Math.PI / 2)
                        },
                        Circ: function(t) {
                            return 1 - Math.sqrt(1 - t * t)
                        },
                        Elastic: function(t) {
                            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                        },
                        Back: function(t) {
                            return t * t * (3 * t - 2)
                        },
                        Bounce: function(t) {
                            for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                        }
                    }), t.each(e, (function(e, i) {
                        t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                            return 1 - i(1 - t)
                        }, t.easing["easeInOut" + e] = function(t) {
                            return t < .5 ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                        }
                    })), t.effects
            }, void 0 === (s = "function" == typeof o ? o.apply(e, n) : o) || (t.exports = s)
        },
        558264: (t, e, i) => {
            var o, n, s;
            n = [i(823127), i(834912)], void 0 === (s = "function" == typeof(o = function(t) {
                return t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
            }) ? o.apply(e, n) : o) || (t.exports = s)
        },
        130420: (t, e, i) => {
            var o, n, s;
            n = [i(823127), i(834912)], o = function(t) {
                return function() {
                    var e, i = Math.max,
                        o = Math.abs,
                        n = /left|center|right/,
                        s = /top|center|bottom/,
                        r = /[\+\-]\d+(\.[\d]+)?%?/,
                        a = /^\w+/,
                        c = /%$/,
                        l = t.fn.position;

                    function u(t, e, i) {
                        return [parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1)]
                    }

                    function h(e, i) {
                        return parseInt(t.css(e, i), 10) || 0
                    }

                    function p(e) {
                        var i = e[0];
                        return 9 === i.nodeType ? {
                            width: e.width(),
                            height: e.height(),
                            offset: {
                                top: 0,
                                left: 0
                            }
                        } : t.isWindow(i) ? {
                            width: e.width(),
                            height: e.height(),
                            offset: {
                                top: e.scrollTop(),
                                left: e.scrollLeft()
                            }
                        } : i.preventDefault ? {
                            width: 0,
                            height: 0,
                            offset: {
                                top: i.pageY,
                                left: i.pageX
                            }
                        } : {
                            width: e.outerWidth(),
                            height: e.outerHeight(),
                            offset: e.offset()
                        }
                    }
                    t.position = {
                        scrollbarWidth: function() {
                            if (void 0 !== e) return e;
                            var i, o, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                                s = n.children()[0];
                            return t("body").append(n), i = s.offsetWidth, n.css("overflow", "scroll"), i === (o = s.offsetWidth) && (o = n[0].clientWidth), n.remove(), e = i - o
                        },
                        getScrollInfo: function(e) {
                            var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                                o = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                                n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                            return {
                                width: "scroll" === o || "auto" === o && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                                height: n ? t.position.scrollbarWidth() : 0
                            }
                        },
                        getWithinInfo: function(e) {
                            var i = t(e || window),
                                o = t.isWindow(i[0]),
                                n = !!i[0] && 9 === i[0].nodeType;
                            return {
                                element: i,
                                isWindow: o,
                                isDocument: n,
                                offset: o || n ? {
                                    left: 0,
                                    top: 0
                                } : t(e).offset(),
                                scrollLeft: i.scrollLeft(),
                                scrollTop: i.scrollTop(),
                                width: i.outerWidth(),
                                height: i.outerHeight()
                            }
                        }
                    }, t.fn.position = function(e) {
                        if (!e || !e.of) return l.apply(this, arguments);
                        e = t.extend({}, e);
                        var c, f, d, g, m, v, b = t(e.of),
                            y = t.position.getWithinInfo(e.within),
                            w = t.position.getScrollInfo(y),
                            k = (e.collision || "flip").split(" "),
                            _ = {};
                        return v = p(b), b[0].preventDefault && (e.at = "left top"), f = v.width, d = v.height, g = v.offset, m = t.extend({}, g), t.each(["my", "at"], (function() {
                            var t, i, o = (e[this] || "").split(" ");
                            1 === o.length && (o = n.test(o[0]) ? o.concat(["center"]) : s.test(o[0]) ? ["center"].concat(o) : ["center", "center"]), o[0] = n.test(o[0]) ? o[0] : "center", o[1] = s.test(o[1]) ? o[1] : "center", t = r.exec(o[0]), i = r.exec(o[1]),
                                _[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [a.exec(o[0])[0], a.exec(o[1])[0]]
                        })), 1 === k.length && (k[1] = k[0]), "right" === e.at[0] ? m.left += f : "center" === e.at[0] && (m.left += f / 2), "bottom" === e.at[1] ? m.top += d : "center" === e.at[1] && (m.top += d / 2), c = u(_.at, f, d), m.left += c[0], m.top += c[1], this.each((function() {
                            var n, s, r = t(this),
                                a = r.outerWidth(),
                                l = r.outerHeight(),
                                p = h(this, "marginLeft"),
                                v = h(this, "marginTop"),
                                x = a + p + h(this, "marginRight") + w.width,
                                C = l + v + h(this, "marginBottom") + w.height,
                                M = t.extend({}, m),
                                D = u(_.my, r.outerWidth(), r.outerHeight());
                            "right" === e.my[0] ? M.left -= a : "center" === e.my[0] && (M.left -= a / 2), "bottom" === e.my[1] ? M.top -= l : "center" === e.my[1] && (M.top -= l / 2), M.left += D[0], M.top += D[1], n = {
                                marginLeft: p,
                                marginTop: v
                            }, t.each(["left", "top"], (function(i, o) {
                                t.ui.position[k[i]] && t.ui.position[k[i]][o](M, {
                                    targetWidth: f,
                                    targetHeight: d,
                                    elemWidth: a,
                                    elemHeight: l,
                                    collisionPosition: n,
                                    collisionWidth: x,
                                    collisionHeight: C,
                                    offset: [c[0] + D[0], c[1] + D[1]],
                                    my: e.my,
                                    at: e.at,
                                    within: y,
                                    elem: r
                                })
                            })), e.using && (s = function(t) {
                                var n = g.left - M.left,
                                    s = n + f - a,
                                    c = g.top - M.top,
                                    u = c + d - l,
                                    h = {
                                        target: {
                                            element: b,
                                            left: g.left,
                                            top: g.top,
                                            width: f,
                                            height: d
                                        },
                                        element: {
                                            element: r,
                                            left: M.left,
                                            top: M.top,
                                            width: a,
                                            height: l
                                        },
                                        horizontal: s < 0 ? "left" : n > 0 ? "right" : "center",
                                        vertical: u < 0 ? "top" : c > 0 ? "bottom" : "middle"
                                    };
                                f < a && o(n + s) < f && (h.horizontal = "center"), d < l && o(c + u) < d && (h.vertical = "middle"), i(o(n), o(s)) > i(o(c), o(u)) ? h.important = "horizontal" : h.important = "vertical", e.using.call(this, t, h)
                            }), r.offset(t.extend(M, {
                                using: s
                            }))
                        }))
                    }, t.ui.position = {
                        fit: {
                            left: function(t, e) {
                                var o, n = e.within,
                                    s = n.isWindow ? n.scrollLeft : n.offset.left,
                                    r = n.width,
                                    a = t.left - e.collisionPosition.marginLeft,
                                    c = s - a,
                                    l = a + e.collisionWidth - r - s;
                                e.collisionWidth > r ? c > 0 && l <= 0 ? (o = t.left + c + e.collisionWidth - r - s, t.left += c - o) : t.left = l > 0 && c <= 0 ? s : c > l ? s + r - e.collisionWidth : s : c > 0 ? t.left += c : l > 0 ? t.left -= l : t.left = i(t.left - a, t.left)
                            },
                            top: function(t, e) {
                                var o, n = e.within,
                                    s = n.isWindow ? n.scrollTop : n.offset.top,
                                    r = e.within.height,
                                    a = t.top - e.collisionPosition.marginTop,
                                    c = s - a,
                                    l = a + e.collisionHeight - r - s;
                                e.collisionHeight > r ? c > 0 && l <= 0 ? (o = t.top + c + e.collisionHeight - r - s, t.top += c - o) : t.top = l > 0 && c <= 0 ? s : c > l ? s + r - e.collisionHeight : s : c > 0 ? t.top += c : l > 0 ? t.top -= l : t.top = i(t.top - a, t.top)
                            }
                        },
                        flip: {
                            left: function(t, e) {
                                var i, n, s = e.within,
                                    r = s.offset.left + s.scrollLeft,
                                    a = s.width,
                                    c = s.isWindow ? s.scrollLeft : s.offset.left,
                                    l = t.left - e.collisionPosition.marginLeft,
                                    u = l - c,
                                    h = l + e.collisionWidth - a - c,
                                    p = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                    f = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                    d = -2 * e.offset[0];
                                u < 0 ? ((i = t.left + p + f + d + e.collisionWidth - a - r) < 0 || i < o(u)) && (t.left += p + f + d) : h > 0 && ((n = t.left - e.collisionPosition.marginLeft + p + f + d - c) > 0 || o(n) < h) && (t.left += p + f + d)
                            },
                            top: function(t, e) {
                                var i, n, s = e.within,
                                    r = s.offset.top + s.scrollTop,
                                    a = s.height,
                                    c = s.isWindow ? s.scrollTop : s.offset.top,
                                    l = t.top - e.collisionPosition.marginTop,
                                    u = l - c,
                                    h = l + e.collisionHeight - a - c,
                                    p = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                    f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                    d = -2 * e.offset[1];
                                u < 0 ? ((n = t.top + p + f + d + e.collisionHeight - a - r) < 0 || n < o(u)) && (t.top += p + f + d) : h > 0 && ((i = t.top - e.collisionPosition.marginTop + p + f + d - c) > 0 || o(i) < h) && (t.top += p + f + d)
                            }
                        },
                        flipfit: {
                            left: function() {
                                t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                            },
                            top: function() {
                                t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                            }
                        }
                    }
                }(), t.ui.position
            }, void 0 === (s = "function" == typeof o ? o.apply(e, n) : o) || (t.exports = s)
        },
        834912: (t, e, i) => {
            var o, n, s;
            n = [i(823127)], void 0 === (s = "function" == typeof(o = function(t) {
                return t.ui = t.ui || {}, t.ui.version = "1.12.1"
            }) ? o.apply(e, n) : o) || (t.exports = s)
        },
        162066: (t, e, i) => {
            var o, n, s;
            n = [i(823127), i(834912)], o = function(t) {
                var e, i = 0,
                    o = Array.prototype.slice;
                return t.cleanData = (e = t.cleanData, function(i) {
                        var o, n, s;
                        for (s = 0; null != (n = i[s]); s++) try {
                            (o = t._data(n, "events")) && o.remove && t(n).triggerHandler("remove")
                        } catch (t) {}
                        e(i)
                    }), t.widget = function(e, i, o) {
                        var n, s, r, a = {},
                            c = e.split(".")[0],
                            l = c + "-" + (e = e.split(".")[1]);
                        return o || (o = i, i = t.Widget), t.isArray(o) && (o = t.extend.apply(null, [{}].concat(o))), t.expr[":"][l.toLowerCase()] = function(e) {
                            return !!t.data(e, l)
                        }, t[c] = t[c] || {}, n = t[c][e], s = t[c][e] = function(t, e) {
                            if (!this._createWidget) return new s(t, e);
                            arguments.length && this._createWidget(t, e)
                        }, t.extend(s, n, {
                            version: o.version,
                            _proto: t.extend({}, o),
                            _childConstructors: []
                        }), (r = new i).options = t.widget.extend({}, r.options), t.each(o, (function(e, o) {
                            t.isFunction(o) ? a[e] = function() {
                                function t() {
                                    return i.prototype[e].apply(this, arguments)
                                }

                                function n(t) {
                                    return i.prototype[e].apply(this, t)
                                }
                                return function() {
                                    var e, i = this._super,
                                        s = this._superApply;
                                    return this._super = t, this._superApply = n, e = o.apply(this, arguments), this._super = i, this._superApply = s, e
                                }
                            }() : a[e] = o
                        })), s.prototype = t.widget.extend(r, {
                            widgetEventPrefix: n && r.widgetEventPrefix || e
                        }, a, {
                            constructor: s,
                            namespace: c,
                            widgetName: e,
                            widgetFullName: l
                        }), n ? (t.each(n._childConstructors, (function(e, i) {
                            var o = i.prototype;
                            t.widget(o.namespace + "." + o.widgetName, s, i._proto)
                        })), delete n._childConstructors) : i._childConstructors.push(s), t.widget.bridge(e, s), s
                    }, t.widget.extend = function(e) {
                        for (var i, n, s = o.call(arguments, 1), r = 0, a = s.length; r < a; r++)
                            for (i in s[r]) n = s[r][i], s[r].hasOwnProperty(i) && void 0 !== n && (t.isPlainObject(n) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : e[i] = n);
                        return e
                    }, t.widget.bridge = function(e, i) {
                        var n = i.prototype.widgetFullName || e;
                        t.fn[e] = function(s) {
                            var r = "string" == typeof s,
                                a = o.call(arguments, 1),
                                c = this;
                            return r ? this.length || "instance" !== s ? this.each((function() {
                                var i, o = t.data(this, n);
                                return "instance" === s ? (c = o, !1) : o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, a)) !== o && void 0 !== i ? (c = i && i.jquery ? c.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
                            })) : c = void 0 : (a.length && (s = t.widget.extend.apply(null, [s].concat(a))), this.each((function() {
                                var e = t.data(this, n);
                                e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this))
                            }))), c
                        }
                    }, t.Widget = function() {},
                    t.Widget._childConstructors = [], t.Widget.prototype = {
                        widgetName: "widget",
                        widgetEventPrefix: "",
                        defaultElement: "<div>",
                        options: {
                            classes: {},
                            disabled: !1,
                            create: null
                        },
                        _createWidget: function(e, o) {
                            o = t(o || this.defaultElement || this)[0], this.element = t(o), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, o !== this && (t.data(o, this.widgetFullName, this), this._on(!0, this.element, {
                                remove: function(t) {
                                    t.target === o && this.destroy()
                                }
                            }), this.document = t(o.style ? o.ownerDocument : o.document || o), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
                        },
                        _getCreateOptions: function() {
                            return {}
                        },
                        _getCreateEventData: t.noop,
                        _create: t.noop,
                        _init: t.noop,
                        destroy: function() {
                            var e = this;
                            this._destroy(), t.each(this.classesElementLookup, (function(t, i) {
                                e._removeClass(i, t)
                            })), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
                        },
                        _destroy: t.noop,
                        widget: function() {
                            return this.element
                        },
                        option: function(e, i) {
                            var o, n, s, r = e;
                            if (0 === arguments.length) return t.widget.extend({}, this.options);
                            if ("string" == typeof e)
                                if (r = {}, o = e.split("."), e = o.shift(), o.length) {
                                    for (n = r[e] = t.widget.extend({}, this.options[e]), s = 0; s < o.length - 1; s++) n[o[s]] = n[o[s]] || {}, n = n[o[s]];
                                    if (e = o.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                                    n[e] = i
                                } else {
                                    if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                                    r[e] = i
                                }
                            return this._setOptions(r), this
                        },
                        _setOptions: function(t) {
                            var e;
                            for (e in t) this._setOption(e, t[e]);
                            return this
                        },
                        _setOption: function(t, e) {
                            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
                        },
                        _setOptionClasses: function(e) {
                            var i, o, n;
                            for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (o = t(n.get()), this._removeClass(n, i), o.addClass(this._classes({
                                element: o,
                                keys: i,
                                classes: e,
                                add: !0
                            })))
                        },
                        _setOptionDisabled: function(t) {
                            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
                        },
                        enable: function() {
                            return this._setOptions({
                                disabled: !1
                            })
                        },
                        disable: function() {
                            return this._setOptions({
                                disabled: !0
                            })
                        },
                        _classes: function(e) {
                            var i = [],
                                o = this;

                            function n(n, s) {
                                var r, a;
                                for (a = 0; a < n.length; a++) r = o.classesElementLookup[n[a]] || t(), r = e.add ? t(t.unique(r.get().concat(e.element.get()))) : t(r.not(e.element).get()), o.classesElementLookup[n[a]] = r, i.push(n[a]), s && e.classes[n[a]] && i.push(e.classes[n[a]])
                            }
                            return e = t.extend({
                                element: this.element,
                                classes: this.options.classes || {}
                            }, e), this._on(e.element, {
                                remove: "_untrackClassesElement"
                            }), e.keys && n(e.keys.match(/\S+/g) || [], !0), e.extra && n(e.extra.match(/\S+/g) || []), i.join(" ")
                        },
                        _untrackClassesElement: function(e) {
                            var i = this;
                            t.each(i.classesElementLookup, (function(o, n) {
                                -1 !== t.inArray(e.target, n) && (i.classesElementLookup[o] = t(n.not(e.target).get()))
                            }))
                        },
                        _removeClass: function(t, e, i) {
                            return this._toggleClass(t, e, i, !1)
                        },
                        _addClass: function(t, e, i) {
                            return this._toggleClass(t, e, i, !0)
                        },
                        _toggleClass: function(t, e, i, o) {
                            o = "boolean" == typeof o ? o : i;
                            var n = "string" == typeof t || null === t,
                                s = {
                                    extra: n ? e : i,
                                    keys: n ? t : e,
                                    element: n ? this.element : t,
                                    add: o
                                };
                            return s.element.toggleClass(this._classes(s), o), this
                        },
                        _on: function(e, i, o) {
                            var n, s = this;
                            "boolean" != typeof e && (o = i, i = e, e = !1), o ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (o = i, i = this.element, n = this.widget()), t.each(o, (function(o, r) {
                                function a() {
                                    if (e || !0 !== s.options.disabled && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof r ? s[r] : r).apply(s, arguments)
                                }
                                "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                                var c = o.match(/^([\w:-]*)\s*(.*)$/),
                                    l = c[1] + s.eventNamespace,
                                    u = c[2];
                                u ? n.on(l, u, a) : i.on(l, a)
                            }))
                        },
                        _off: function(e, i) {
                            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
                        },
                        _delay: function(t, e) {
                            function i() {
                                return ("string" == typeof t ? o[t] : t).apply(o, arguments)
                            }
                            var o = this;
                            return setTimeout(i, e || 0)
                        },
                        _hoverable: function(e) {
                            this.hoverable = this.hoverable.add(e), this._on(e, {
                                mouseenter: function(e) {
                                    this._addClass(t(e.currentTarget), null, "ui-state-hover")
                                },
                                mouseleave: function(e) {
                                    this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                                }
                            })
                        },
                        _focusable: function(e) {
                            this.focusable = this.focusable.add(e), this._on(e, {
                                focusin: function(e) {
                                    this._addClass(t(e.currentTarget), null, "ui-state-focus")
                                },
                                focusout: function(e) {
                                    this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                                }
                            })
                        },
                        _trigger: function(e, i, o) {
                            var n, s, r = this.options[e];
                            if (o = o || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], s = i.originalEvent)
                                for (n in s) n in i || (i[n] = s[n]);
                            return this.element.trigger(i, o), !(t.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(o)) || i.isDefaultPrevented())
                        }
                    }, t.each({
                        show: "fadeIn",
                        hide: "fadeOut"
                    }, (function(e, i) {
                        t.Widget.prototype["_" + e] = function(o, n, s) {
                            var r;
                            "string" == typeof n && (n = {
                                effect: n
                            });
                            var a = n ? !0 === n || "number" == typeof n ? i : n.effect || i : e;
                            "number" == typeof(n = n || {}) && (n = {
                                duration: n
                            }), r = !t.isEmptyObject(n), n.complete = s, n.delay && o.delay(n.delay), r && t.effects && t.effects.effect[a] ? o[e](n) : a !== e && o[a] ? o[a](n.duration, n.easing, s) : o.queue((function(i) {
                                t(this)[e](), s && s.call(o[0]), i()
                            }))
                        }
                    })), t.widget
            }, void 0 === (s = "function" == typeof o ? o.apply(e, n) : o) || (t.exports = s)
        },
        452282: (t, e, i) => {
            var o, n, s;
            n = [i(823127), i(558264), i(834912), i(162066)], void 0 === (s = "function" == typeof(o = function(t) {
                var e = !1;
                return t(document).on("mouseup", (function() {
                    e = !1
                })), t.widget("ui.mouse", {
                    version: "1.12.1",
                    options: {
                        cancel: "input, textarea, button, select, option",
                        distance: 1,
                        delay: 0
                    },
                    _mouseInit: function() {
                        var e = this;
                        this.element.on("mousedown." + this.widgetName, (function(t) {
                            return e._mouseDown(t)
                        })).on("click." + this.widgetName, (function(i) {
                            if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
                        })), this.started = !1
                    },
                    _mouseDestroy: function() {
                        this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
                    },
                    _mouseDown: function(i) {
                        if (!e) {
                            this._mouseMoved = !1, this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                            var o = this,
                                n = 1 === i.which,
                                s = !("string" != typeof this.options.cancel || !i.target.nodeName) && t(i.target).closest(this.options.cancel).length;
                            return !(n && !s && this._mouseCapture(i) && (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function() {
                                o.mouseDelayMet = !0
                            }), this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = !1 !== this._mouseStart(i), !this._mouseStarted) ? (i.preventDefault(), 0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                                return o._mouseMove(t)
                            }, this._mouseUpDelegate = function(t) {
                                return o._mouseUp(t)
                            }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, 0)))
                        }
                    },
                    _mouseMove: function(e) {
                        if (this._mouseMoved) {
                            if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                            if (!e.which)
                                if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                                else if (!this.ignoreMissingWhich) return this._mouseUp(e)
                        }
                        return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
                    },
                    _mouseUp: function(i) {
                        this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, i.target === this._mouseDownEvent.target && t.data(i.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(i)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, e = !1, i.preventDefault()
                    },
                    _mouseDistanceMet: function(t) {
                        return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
                    },
                    _mouseDelayMet: function() {
                        return this.mouseDelayMet
                    },
                    _mouseStart: function() {},
                    _mouseDrag: function() {},
                    _mouseStop: function() {},
                    _mouseCapture: function() {
                        return !0
                    }
                })
            }) ? o.apply(e, n) : o) || (t.exports = s)
        },
        760947: () => {
            "use strict";
            var t, e, i, o, n, s;
            window.parent !== window && window.CanvasRenderingContext2D && window.TextMetrics && (e = window.CanvasRenderingContext2D.prototype) && e.hasOwnProperty("font") && e.hasOwnProperty("mozTextStyle") && "function" == typeof e.__lookupSetter__ && (i = e.__lookupSetter__("font")) && (e.__defineSetter__("font", (function(t) {
                try {
                    return i.call(this, t)
                } catch (t) {
                    if ("NS_ERROR_FAILURE" !== t.name) throw t
                }
            })), o = e.measureText, t = function() {
                this.width = 0, this.isFake = !0, this.__proto__ = window.TextMetrics.prototype
            }, e.measureText = function(e) {
                try {
                    return o.apply(this, arguments)
                } catch (e) {
                    if ("NS_ERROR_FAILURE" !== e.name) throw e;
                    return new t
                }
            }, n = e.fillText, e.fillText = function(t, e, i, o) {
                try {
                    n.apply(this, arguments)
                } catch (t) {
                    if ("NS_ERROR_FAILURE" !== t.name) throw t
                }
            }, s = e.strokeText, e.strokeText = function(t, e, i, o) {
                try {
                    s.apply(this, arguments)
                } catch (t) {
                    if ("NS_ERROR_FAILURE" !== t.name) throw t
                }
            })
        },
        8587: (t, e, i) => {
            "use strict";
            i.r(e);
            i(636995), i(162066), i(452282), i(130420), i(386727)
        },
        190443: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                lazyVelocity: () => n
            });
            i(823127);
            var o = i(823127);
            async function n() {
                await i.e(32112).then(i.t.bind(i, 137356, 23))
            }
            o.fn.velocity = function(...t) {
                return n().then((() => {
                    o.fn.velocity.apply(this, t)
                })), this
            }
        }
    }
]);