(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [61909, 60125, 21970, 13961], {
        213398: function(t, e) {
            var n, r, i, o;
            o = function(t) {
                var e = Object.prototype.toString,
                    n = Array.isArray || function(t) {
                        return "[object Array]" === e.call(t)
                    };

                function r(t) {
                    return "function" == typeof t
                }

                function i(t) {
                    return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }

                function o(t, e) {
                    return null != t && "object" == typeof t && e in t
                }
                var a = RegExp.prototype.test,
                    s = /\S/;

                function u(t) {
                    return ! function(t, e) {
                        return a.call(t, e)
                    }(s, t)
                }
                var c = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#x2F;",
                        "`": "&#x60;",
                        "=": "&#x3D;"
                    },
                    l = /\s*/,
                    h = /\s+/,
                    p = /\s*=/,
                    f = /\s*\}/,
                    d = /#|\^|\/|>|\{|&|=|!/;

                function v(t) {
                    this.string = t, this.tail = t, this.pos = 0
                }

                function g(t, e) {
                    this.view = t, this.cache = {
                        ".": this.view
                    }, this.parent = e
                }

                function m() {
                    this.cache = {}
                }
                v.prototype.eos = function() {
                    return "" === this.tail
                }, v.prototype.scan = function(t) {
                    var e = this.tail.match(t);
                    if (!e || 0 !== e.index) return "";
                    var n = e[0];
                    return this.tail = this.tail.substring(n.length), this.pos += n.length, n
                }, v.prototype.scanUntil = function(t) {
                    var e, n = this.tail.search(t);
                    switch (n) {
                        case -1:
                            e = this.tail, this.tail = "";
                            break;
                        case 0:
                            e = "";
                            break;
                        default:
                            e = this.tail.substring(0, n), this.tail = this.tail.substring(n)
                    }
                    return this.pos += e.length, e
                }, g.prototype.push = function(t) {
                    return new g(t, this)
                }, g.prototype.lookup = function(t) {
                    var e, n = this.cache;
                    if (n.hasOwnProperty(t)) e = n[t];
                    else {
                        for (var i, a, s = this, u = !1; s;) {
                            if (t.indexOf(".") > 0)
                                for (e = s.view, i = t.split("."), a = 0; null != e && a < i.length;) a === i.length - 1 && (u = o(e, i[a])), e = e[i[a++]];
                            else e = s.view[t], u = o(s.view, t);
                            if (u) break;
                            s = s.parent
                        }
                        n[t] = e
                    }
                    return r(e) && (e = e.call(this.view)), e
                }, m.prototype.clearCache = function() {
                    this.cache = {}
                }, m.prototype.parse = function(e, r) {
                    var o = this.cache,
                        a = o[e];
                    return null == a && (a = o[e] = function(e, r) {
                        if (!e) return [];
                        var o, a, s, c = [],
                            g = [],
                            m = [],
                            w = !1,
                            y = !1;

                        function k() {
                            if (w && !y)
                                for (; m.length;) delete g[m.pop()];
                            else m = [];
                            w = !1, y = !1
                        }

                        function b(t) {
                            if ("string" == typeof t && (t = t.split(h, 2)), !n(t) || 2 !== t.length) throw new Error("Invalid tags: " + t);
                            o = new RegExp(i(t[0]) + "\\s*"), a = new RegExp("\\s*" + i(t[1])), s = new RegExp("\\s*" + i("}" + t[1]))
                        }
                        b(r || t.tags);
                        for (var x, E, U, C, T, j, A = new v(e); !A.eos();) {
                            if (x = A.pos, U = A.scanUntil(o))
                                for (var O = 0, S = U.length; O < S; ++O) u(C = U.charAt(O)) ? m.push(g.length) : y = !0, g.push(["text", C, x, x + 1]), x += 1, "\n" === C && k();
                            if (!A.scan(o)) break;
                            if (w = !0, E = A.scan(d) || "name", A.scan(l), "=" === E ? (U = A.scanUntil(p), A.scan(p), A.scanUntil(a)) : "{" === E ? (U = A.scanUntil(s), A.scan(f), A.scanUntil(a), E = "&") : U = A.scanUntil(a), !A.scan(a)) throw new Error("Unclosed tag at " + A.pos);
                            if (T = [E, U, x, A.pos], g.push(T), "#" === E || "^" === E) c.push(T);
                            else if ("/" === E) {
                                if (!(j = c.pop())) throw new Error('Unopened section "' + U + '" at ' + x);
                                if (j[1] !== U) throw new Error('Unclosed section "' + j[1] + '" at ' + x)
                            } else "name" === E || "{" === E || "&" === E ? y = !0 : "=" === E && b(U)
                        }
                        if (j = c.pop()) throw new Error('Unclosed section "' + j[1] + '" at ' + A.pos);
                        return function(t) {
                            for (var e, n = [], r = n, i = [], o = 0, a = t.length; o < a; ++o) switch ((e = t[o])[0]) {
                                case "#":
                                case "^":
                                    r.push(e), i.push(e), r = e[4] = [];
                                    break;
                                case "/":
                                    i.pop()[5] = e[2], r = i.length > 0 ? i[i.length - 1][4] : n;
                                    break;
                                default:
                                    r.push(e)
                            }
                            return n
                        }(function(t) {
                            for (var e, n, r = [], i = 0, o = t.length; i < o; ++i)(e = t[i]) && ("text" === e[0] && n && "text" === n[0] ? (n[1] += e[1], n[3] = e[3]) : (r.push(e), n = e));
                            return r
                        }(g))
                    }(e, r)), a
                }, m.prototype.render = function(t, e, n) {
                    var r = this.parse(t),
                        i = e instanceof g ? e : new g(e);
                    return this.renderTokens(r, i, n, t)
                }, m.prototype.renderTokens = function(t, e, n, r) {
                    for (var i, o, a, s = "", u = 0, c = t.length; u < c; ++u) a = void 0, "#" === (o = (i = t[u])[0]) ? a = this.renderSection(i, e, n, r) : "^" === o ? a = this.renderInverted(i, e, n, r) : ">" === o ? a = this.renderPartial(i, e, n, r) : "&" === o ? a = this.unescapedValue(i, e) : "name" === o ? a = this.escapedValue(i, e) : "text" === o && (a = this.rawValue(i)), void 0 !== a && (s += a);
                    return s
                }, m.prototype.renderSection = function(t, e, i, o) {
                    var a = this,
                        s = "",
                        u = e.lookup(t[1]);
                    if (u) {
                        if (n(u))
                            for (var c = 0, l = u.length; c < l; ++c) s += this.renderTokens(t[4], e.push(u[c]), i, o);
                        else if ("object" == typeof u || "string" == typeof u || "number" == typeof u) s += this.renderTokens(t[4], e.push(u), i, o);
                        else if (r(u)) {
                            if ("string" != typeof o) throw new Error("Cannot use higher-order sections without the original template");
                            null != (u = u.call(e.view, o.slice(t[3], t[5]), (function(t) {
                                return a.render(t, e, i)
                            }))) && (s += u)
                        } else s += this.renderTokens(t[4], e, i, o);
                        return s
                    }
                }, m.prototype.renderInverted = function(t, e, r, i) {
                    var o = e.lookup(t[1]);
                    if (!o || n(o) && 0 === o.length) return this.renderTokens(t[4], e, r, i)
                }, m.prototype.renderPartial = function(t, e, n) {
                    if (n) {
                        var i = r(n) ? n(t[1]) : n[t[1]];
                        return null != i ? this.renderTokens(this.parse(i), e, n, i) : void 0
                    }
                }, m.prototype.unescapedValue = function(t, e) {
                    var n = e.lookup(t[1]);
                    if (null != n) return n
                }, m.prototype.escapedValue = function(e, n) {
                    var r = n.lookup(e[1]);
                    if (null != r) return t.escape(r)
                }, m.prototype.rawValue = function(t) {
                    return t[1]
                }, t.name = "mustache.js", t.version = "2.2.1", t.tags = ["{{", "}}"];
                var w = new m;
                t.clearCache = function() {
                    return w.clearCache()
                }, t.parse = function(t, e) {
                    return w.parse(t, e)
                }, t.render = function(t, e, r) {
                    if ("string" != typeof t) throw new TypeError('Invalid template! Template should be a "string" but "' + (n(i = t) ? "array" : typeof i) + '" was given as the first argument for mustache#render(template, view, partials)');
                    var i;
                    return w.render(t, e, r)
                }, t.to_html = function(e, n, i, o) {
                    var a = t.render(e, n, i);
                    if (!r(o)) return a;
                    o(a)
                }, t.escape = function(t) {
                    return String(t).replace(/[&<>"'`=\/]/g, (function(t) {
                        return c[t]
                    }))
                }, t.Scanner = v, t.Context = g, t.Writer = m
            }, e && "string" != typeof e.nodeName ? o(e) : (r = [e], void 0 === (i = "function" == typeof(n = o) ? n.apply(e, r) : n) || (t.exports = i))
        },
        672245: (t, e, n) => {
            "use strict";
            var r = n(823127),
                i = n(778785).mobiletouch;
            ! function(t, e, n) {
                function r(r, i) {
                    i = i || r + n;
                    var o = t(),
                        a = r + "." + i + "-special-event";

                    function s(e) {
                        t(o).each((function() {
                            var n = t(this);
                            this === e.target || n.has(e.target).length || n.triggerHandler(i, [e.target])
                        }))
                    }
                    t.event.special[i] = {
                        setup: function() {
                            delete(o = o.add(this)).prevObject, 1 === o.length && t(e).bind(a, s)
                        },
                        teardown: function() {
                            delete(o = o.not(this)).prevObject, 0 === o.length && t(e).unbind(a)
                        },
                        add: function(t) {
                            var e = t.handler;
                            t.handler = function(t, n) {
                                t.target = n, e.apply(this, arguments)
                            }
                        }
                    }
                }
                t.map("click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup".split(" "), (function(t) {
                    r(t)
                })), r("focusin", "focusoutside"), r("focusout", "bluroutside"), i && (r("touchstart", "mousedownoutside"), r("touchmove", "mousemoveoutside"), r("touchend", "mouseupoutside")), t.addOutsideEvent = r
            }(r, document, "outside")
        },
        173845: (t, e, n) => {
            "use strict";
            var r = n(823127);
            n(413880),
                function(t) {
                    var e = !1,
                        n = document.body || document.documentElement,
                        r = "animation",
                        i = "Webkit Moz O ms Khtml".split(" "),
                        o = "";
                    if (void 0 !== n.style.animationName && (e = !0), !1 === e)
                        for (var a = 0; a < i.length; a++)
                            if (void 0 !== n.style[i[a] + "AnimationName"]) {
                                o = i[a], r = o + "Animation", "-" + o.toLowerCase() + "-", e = !0;
                                break
                            }
                    var s = ["webkit", "moz", "MS", "o", ""];
                    var u = "flicker-enable",
                        c = "flicker-options";

                    function l(t) {
                        t.stop(!0), t.css("background-color", ""), t.removeData(u), t.removeData(c)
                    }

                    function h(e) {
                        var n = e.data(u);
                        n && (!0 !== n ? --n ? (p(e), e.data(u, n)) : function(e) {
                            var n = e.data(c).complete;
                            l(e), n && t.isFunction(n) && n()
                        }(e) : p(e))
                    }

                    function p(t) {
                        var e = t.css("background-color"),
                            n = t.data(c),
                            r = n.highlightColor || "#fbf8e9",
                            i = n.duration || 400,
                            o = n.easing || "swing";
                        t.animate({
                            "background-color": r
                        }, i, o).animate({
                            "background-color": e
                        }, i, o, h.bind(t, t))
                    }
                    t.fn.highlight = function(n, i) {
                        return !1 === n ? this.each((function() {
                            e ? this.style[r] = "" : l(t(this))
                        })) : (n = void 0 === n || n, this.each((function() {
                            if (e) {
                                n = !0 === n ? "infinite" : n,
                                    function(t, e, n) {
                                        for (var r = 0; r < s.length; r++) s[r] || (e = e.toLowerCase()), t.addEventListener(s[r] + e, n, !1)
                                    }(this, "AnimationEnd", (function() {
                                        this.style[r] = ""
                                    })), document.getElementsByTagName("html")[0].classList.contains("theme-dark") ? this.style[r] = "highlight-animation-theme-dark 0.4s ease-in-out " + n + " alternate" : this.style[r] = "highlight-animation 0.4s ease-in-out " + n + " alternate"
                            } else {
                                var o = t(this);
                                o.data(u, n), o.data(c, t.extend({}, i || {})), o.is(":animated") || p(o)
                            }
                        })))
                    }
                }(r)
        }
    }
]);