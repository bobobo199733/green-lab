(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [23127], {
        823127: e => {
            var t = window.document,
                n = window.navigator,
                r = window.location,
                i = function() {
                    var e, r, i, o, a = function(t, n) {
                            return new a.fn.init(t, n, e)
                        },
                        s = window.jQuery,
                        l = window.$,
                        u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                        c = /\S/,
                        d = /^\s+/,
                        f = /\s+$/,
                        p = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                        h = /^[\],:{}\s]*$/,
                        m = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                        g = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                        v = /(?:^|:|,)(?:\s*\[)+/g,
                        y = /(webkit)[ \/]([\w.]+)/,
                        b = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                        x = /(msie) ([\w.]+)/,
                        w = /(mozilla)(?:.*? rv:([\w.]+))?/,
                        T = /-([a-z]|[0-9])/gi,
                        N = /^-ms-/,
                        C = function(e, t) {
                            return (t + "").toUpperCase()
                        },
                        k = n.userAgent,
                        E = Object.prototype.toString,
                        S = Object.prototype.hasOwnProperty,
                        A = Array.prototype.push,
                        L = Array.prototype.slice,
                        D = String.prototype.trim,
                        j = Array.prototype.indexOf,
                        F = {};

                    function M() {
                        if (!a.isReady) {
                            try {
                                t.documentElement.doScroll("left")
                            } catch (e) {
                                return void setTimeout(M, 1)
                            }
                            a.ready()
                        }
                    }
                    return a.fn = a.prototype = {
                        constructor: a,
                        init: function(e, n, r) {
                            var i, o, s, l;
                            if (!e) return this;
                            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                            if ("body" === e && !n && t.body) return this.context = t, this[0] = t.body, this.selector = e, this.length = 1, this;
                            if ("string" == typeof e) {
                                if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : u.exec(e)) || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                                if (i[1]) return l = (n = n instanceof a ? n[0] : n) ? n.ownerDocument || n : t, (s = p.exec(e)) ? a.isPlainObject(n) ? (e = [t.createElement(s[1])], a.fn.attr.call(e, n, !0)) : e = [l.createElement(s[1])] : e = ((s = a.buildFragment([i[1]], [l])).cacheable ? a.clone(s.fragment) : s.fragment).childNodes, a.merge(this, e);
                                if ((o = t.getElementById(i[2])) && o.parentNode) {
                                    if (o.id !== i[2]) return r.find(e);
                                    this.length = 1, this[0] = o
                                }
                                return this.context = t, this.selector = e, this
                            }
                            return a.isFunction(e) ? r.ready(e) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), a.makeArray(e, this))
                        },
                        selector: "",
                        jquery: "1.7.2",
                        length: 0,
                        size: function() {
                            return this.length
                        },
                        toArray: function() {
                            return L.call(this, 0)
                        },
                        get: function(e) {
                            return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
                        },
                        pushStack: function(e, t, n) {
                            var r = this.constructor();
                            return a.isArray(e) ? A.apply(r, e) : a.merge(r, e), r.prevObject = this, r.context = this.context, "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
                        },
                        each: function(e, t) {
                            return a.each(this, e, t)
                        },
                        ready: function(e) {
                            return a.bindReady(), i.add(e), this
                        },
                        eq: function(e) {
                            return -1 === (e = +e) ? this.slice(e) : this.slice(e, e + 1)
                        },
                        first: function() {
                            return this.eq(0)
                        },
                        last: function() {
                            return this.eq(-1)
                        },
                        slice: function() {
                            return this.pushStack(L.apply(this, arguments), "slice", L.call(arguments).join(","))
                        },
                        map: function(e) {
                            return this.pushStack(a.map(this, (function(t, n) {
                                return e.call(t, n, t)
                            })))
                        },
                        end: function() {
                            return this.prevObject || this.constructor(null)
                        },
                        push: A,
                        sort: [].sort,
                        splice: [].splice
                    }, a.fn.init.prototype = a.fn, a.extend = a.fn.extend = function() {
                        var e, t, n, r, i, o, s = arguments[0] || {},
                            l = 1,
                            u = arguments.length,
                            c = !1;
                        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || a.isFunction(s) || (s = {}), u === l && (s = this, --l); l < u; l++)
                            if (null != (e = arguments[l]))
                                for (t in e) n = s[t], s !== (r = e[t]) && (c && r && (a.isPlainObject(r) || (i = a.isArray(r))) ? (i ? (i = !1, o = n && a.isArray(n) ? n : []) : o = n && a.isPlainObject(n) ? n : {}, s[t] = a.extend(c, o, r)) : void 0 !== r && (s[t] = r));
                        return s
                    }, a.extend({
                        noConflict: function(e) {
                            return window.$ === a && (window.$ = l), e && window.jQuery === a && (window.jQuery = s), a
                        },
                        isReady: !1,
                        readyWait: 1,
                        holdReady: function(e) {
                            e ? a.readyWait++ : a.ready(!0)
                        },
                        ready: function(e) {
                            if (!0 === e && !--a.readyWait || !0 !== e && !a.isReady) {
                                if (!t.body) return setTimeout(a.ready, 1);
                                if (a.isReady = !0, !0 !== e && --a.readyWait > 0) return;
                                i.fireWith(t, [a]), a.fn.trigger && a(t).trigger("ready").off("ready")
                            }
                        },
                        bindReady: function() {
                            if (!i) {
                                if (i = a.Callbacks("once memory"), "complete" === t.readyState) return setTimeout(a.ready, 1);
                                if (t.addEventListener) t.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", a.ready, !1);
                                else if (t.attachEvent) {
                                    t.attachEvent("onreadystatechange", o), window.attachEvent("onload", a.ready);
                                    var e = !1;
                                    try {
                                        e = null == window.frameElement
                                    } catch (e) {}
                                    t.documentElement.doScroll && e && M()
                                }
                            }
                        },
                        isFunction: function(e) {
                            return "function" === a.type(e)
                        },
                        isArray: Array.isArray || function(e) {
                            return "array" === a.type(e)
                        },
                        isWindow: function(e) {
                            return null != e && e == e.window
                        },
                        isNumeric: function(e) {
                            return !isNaN(parseFloat(e)) && isFinite(e)
                        },
                        type: function(e) {
                            return null == e ? String(e) : F[E.call(e)] || "object"
                        },
                        isPlainObject: function(e) {
                            if (!e || "object" !== a.type(e) || e.nodeType || a.isWindow(e)) return !1;
                            try {
                                if (e.constructor && !S.call(e, "constructor") && !S.call(e.constructor.prototype, "isPrototypeOf")) return !1
                            } catch (e) {
                                return !1
                            }
                            var t;
                            for (t in e);
                            return void 0 === t || S.call(e, t)
                        },
                        isEmptyObject: function(e) {
                            for (var t in e) return !1;
                            return !0
                        },
                        error: function(e) {
                            throw new Error(e)
                        },
                        parseJSON: function(e) {
                            return "string" == typeof e && e ? (e = a.trim(e), window.JSON && window.JSON.parse ? window.JSON.parse(e) : h.test(e.replace(m, "@").replace(g, "]").replace(v, "")) ? new Function("return " + e)() : void a.error("Invalid JSON: " + e)) : null
                        },
                        parseXML: function(e) {
                            if ("string" != typeof e || !e) return null;
                            var t;
                            try {
                                window.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
                            } catch (e) {
                                t = void 0
                            }
                            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || a.error("Invalid XML: " + e), t
                        },
                        noop: function() {},
                        globalEval: function(e) {
                            e && c.test(e) && (window.execScript || function(e) {
                                window.eval.call(window, e)
                            })(e)
                        },
                        camelCase: function(e) {
                            return e.replace(N, "ms-").replace(T, C)
                        },
                        nodeName: function(e, t) {
                            return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                        },
                        each: function(e, t, n) {
                            var r, i = 0,
                                o = e.length,
                                s = void 0 === o || a.isFunction(e);
                            if (n)
                                if (s) {
                                    for (r in e)
                                        if (!1 === t.apply(e[r], n)) break
                                } else
                                    for (; i < o && !1 !== t.apply(e[i++], n););
                            else if (s) {
                                for (r in e)
                                    if (!1 === t.call(e[r], r, e[r])) break
                            } else
                                for (; i < o && !1 !== t.call(e[i], i, e[i++]););
                            return e
                        },
                        trim: D ? function(e) {
                            return null == e ? "" : D.call(e)
                        } : function(e) {
                            return null == e ? "" : e.toString().replace(d, "").replace(f, "")
                        },
                        makeArray: function(e, t) {
                            var n = t || [];
                            if (null != e) {
                                var r = a.type(e);
                                null == e.length || "string" === r || "function" === r || "regexp" === r || a.isWindow(e) ? A.call(n, e) : a.merge(n, e)
                            }
                            return n
                        },
                        inArray: function(e, t, n) {
                            var r;
                            if (t) {
                                if (j) return j.call(t, e, n);
                                for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                                    if (n in t && t[n] === e) return n
                            }
                            return -1
                        },
                        merge: function(e, t) {
                            var n = e.length,
                                r = 0;
                            if ("number" == typeof t.length)
                                for (var i = t.length; r < i; r++) e[n++] = t[r];
                            else
                                for (; void 0 !== t[r];) e[n++] = t[r++];
                            return e.length = n, e
                        },
                        grep: function(e, t, n) {
                            var r = [];
                            n = !!n;
                            for (var i = 0, o = e.length; i < o; i++) n !== !!t(e[i], i) && r.push(e[i]);
                            return r
                        },
                        map: function(e, t, n) {
                            var r, i, o = [],
                                s = 0,
                                l = e.length;
                            if (e instanceof a || void 0 !== l && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || a.isArray(e)))
                                for (; s < l; s++) null != (r = t(e[s], s, n)) && (o[o.length] = r);
                            else
                                for (i in e) null != (r = t(e[i], i, n)) && (o[o.length] = r);
                            return o.concat.apply([], o)
                        },
                        guid: 1,
                        proxy: function(e, t) {
                            if ("string" == typeof t) {
                                var n = e[t];
                                t = e, e = n
                            }
                            if (a.isFunction(e)) {
                                var r = L.call(arguments, 2),
                                    i = function() {
                                        return e.apply(t, r.concat(L.call(arguments)))
                                    };
                                return i.guid = e.guid = e.guid || i.guid || a.guid++, i
                            }
                        },
                        access: function(e, t, n, r, i, o, s) {
                            var l, u = null == n,
                                c = 0,
                                d = e.length;
                            if (n && "object" == typeof n) {
                                for (c in n) a.access(e, t, c, n[c], 1, o, r);
                                i = 1
                            } else if (void 0 !== r) {
                                if (l = void 0 === s && a.isFunction(r), u && (l ? (l = t, t = function(e, t, n) {
                                        return l.call(a(e), n)
                                    }) : (t.call(e, r), t = null)), t)
                                    for (; c < d; c++) t(e[c], n, l ? r.call(e[c], c, t(e[c], n)) : r, s);
                                i = 1
                            }
                            return i ? e : u ? t.call(e) : d ? t(e[0], n) : o
                        },
                        now: function() {
                            return (new Date).getTime()
                        },
                        uaMatch: function(e) {
                            e = e.toLowerCase();
                            var t = y.exec(e) || b.exec(e) || x.exec(e) || e.indexOf("compatible") < 0 && w.exec(e) || [];
                            return {
                                browser: t[1] || "",
                                version: t[2] || "0"
                            }
                        },
                        sub: function() {
                            function e(t, n) {
                                return new e.fn.init(t, n)
                            }
                            a.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(t, r) {
                                return r && r instanceof a && !(r instanceof e) && (r = e(r)), a.fn.init.call(this, t, r, n)
                            }, e.fn.init.prototype = e.fn;
                            var n = e(t);
                            return e
                        },
                        browser: {}
                    }), a.each("Boolean Number String Function Array Date RegExp Object".split(" "), (function(e, t) {
                        F["[object " + t + "]"] = t.toLowerCase()
                    })), (r = a.uaMatch(k)).browser && (a.browser[r.browser] = !0, a.browser.version = r.version), a.browser.webkit && (a.browser.safari = !0), c.test(" ") && (d = /^[\s\xA0]+/, f = /[\s\xA0]+$/), e = a(t), t.addEventListener ? o = function() {
                        t.removeEventListener("DOMContentLoaded", o, !1), a.ready()
                    } : t.attachEvent && (o = function() {
                        "complete" === t.readyState && (t.detachEvent("onreadystatechange", o), a.ready())
                    }), a
                }(),
                o = {};
            i.Callbacks = function(e) {
                e = e ? o[e] || function(e) {
                    var t, n, r = o[e] = {};
                    for (t = 0, n = (e = e.split(/\s+/)).length; t < n; t++) r[e[t]] = !0;
                    return r
                }(e) : {};
                var t, n, r, a, s, l, u = [],
                    c = [],
                    d = function(t) {
                        var n, r, o, a;
                        for (n = 0, r = t.length; n < r; n++) o = t[n], "array" === (a = i.type(o)) ? d(o) : "function" === a && (e.unique && p.has(o) || u.push(o))
                    },
                    f = function(i, o) {
                        for (o = o || [], t = !e.memory || [i, o], n = !0, r = !0, l = a || 0, a = 0, s = u.length; u && l < s; l++)
                            if (!1 === u[l].apply(i, o) && e.stopOnFalse) {
                                t = !0;
                                break
                            }
                        r = !1, u && (e.once ? !0 === t ? p.disable() : u = [] : c && c.length && (t = c.shift(), p.fireWith(t[0], t[1])))
                    },
                    p = {
                        add: function() {
                            if (u) {
                                var e = u.length;
                                d(arguments),
                                    r ? s = u.length : t && !0 !== t && (a = e, f(t[0], t[1]))
                            }
                            return this
                        },
                        remove: function() {
                            if (u)
                                for (var t = arguments, n = 0, i = t.length; n < i; n++)
                                    for (var o = 0; o < u.length && (t[n] !== u[o] || (r && o <= s && (s--, o <= l && l--), u.splice(o--, 1), !e.unique)); o++);
                            return this
                        },
                        has: function(e) {
                            if (u)
                                for (var t = 0, n = u.length; t < n; t++)
                                    if (e === u[t]) return !0;
                            return !1
                        },
                        empty: function() {
                            return u = [], this
                        },
                        disable: function() {
                            return u = c = t = void 0, this
                        },
                        disabled: function() {
                            return !u
                        },
                        lock: function() {
                            return c = void 0, t && !0 !== t || p.disable(), this
                        },
                        locked: function() {
                            return !c
                        },
                        fireWith: function(n, i) {
                            return c && (r ? e.once || c.push([n, i]) : e.once && t || f(n, i)), this
                        },
                        fire: function() {
                            return p.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!n
                        }
                    };
                return p
            };
            var a = [].slice;
            i.extend({
                Deferred: function(e) {
                    var t, n = i.Callbacks("once memory"),
                        r = i.Callbacks("once memory"),
                        o = i.Callbacks("memory"),
                        a = "pending",
                        s = {
                            resolve: n,
                            reject: r,
                            notify: o
                        },
                        l = {
                            done: n.add,
                            fail: r.add,
                            progress: o.add,
                            state: function() {
                                return a
                            },
                            isResolved: n.fired,
                            isRejected: r.fired,
                            then: function(e, t, n) {
                                return u.done(e).fail(t).progress(n), this
                            },
                            always: function() {
                                return u.done.apply(u, arguments).fail.apply(u, arguments), this
                            },
                            pipe: function(e, t, n) {
                                return i.Deferred((function(r) {
                                    i.each({
                                        done: [e, "resolve"],
                                        fail: [t, "reject"],
                                        progress: [n, "notify"]
                                    }, (function(e, t) {
                                        var n, o = t[0],
                                            a = t[1];
                                        i.isFunction(o) ? u[e]((function() {
                                            (n = o.apply(this, arguments)) && i.isFunction(n.promise) ? n.promise().then(r.resolve, r.reject, r.notify) : r[a + "With"](this === u ? r : this, [n])
                                        })) : u[e](r[a])
                                    }))
                                })).promise()
                            },
                            promise: function(e) {
                                if (null == e) e = l;
                                else
                                    for (var t in l) e[t] = l[t];
                                return e
                            }
                        },
                        u = l.promise({});
                    for (t in s) u[t] = s[t].fire, u[t + "With"] = s[t].fireWith;
                    return u.done((function() {
                        a = "resolved"
                    }), r.disable, o.lock).fail((function() {
                        a = "rejected"
                    }), n.disable, o.lock), e && e.call(u, u), u
                },
                when: function(e) {
                    var t = a.call(arguments, 0),
                        n = 0,
                        r = t.length,
                        o = new Array(r),
                        s = r,
                        l = r <= 1 && e && i.isFunction(e.promise) ? e : i.Deferred(),
                        u = l.promise();

                    function c(e) {
                        return function(n) {
                            t[e] = arguments.length > 1 ? a.call(arguments, 0) : n, --s || l.resolveWith(l, t)
                        }
                    }

                    function d(e) {
                        return function(t) {
                            o[e] = arguments.length > 1 ? a.call(arguments, 0) : t, l.notifyWith(u, o)
                        }
                    }
                    if (r > 1) {
                        for (; n < r; n++) t[n] && t[n].promise && i.isFunction(t[n].promise) ? t[n].promise().then(c(n), l.reject, d(n)) : --s;
                        s || l.resolveWith(l, t)
                    } else l !== e && l.resolveWith(l, r ? [e] : []);
                    return u
                }
            }), i.support = function() {
                var e, n, r, o, a, s, l, u, c, d, f, p = t.createElement("div");
                t.documentElement;
                if (p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0], !n || !n.length || !r) return {};
                a = (o = t.createElement("select")).appendChild(t.createElement("option")), s = p.getElementsByTagName("input")[0], e = {
                    leadingWhitespace: 3 === p.firstChild.nodeType,
                    tbody: !p.getElementsByTagName("tbody").length,
                    htmlSerialize: !!p.getElementsByTagName("link").length,
                    style: /top/.test(r.getAttribute("style")),
                    hrefNormalized: "/a" === r.getAttribute("href"),
                    opacity: /^0.55/.test(r.style.opacity),
                    cssFloat: !!r.style.cssFloat,
                    checkOn: "on" === s.value,
                    optSelected: a.selected,
                    getSetAttribute: "t" !== p.className,
                    enctype: !!t.createElement("form").enctype,
                    html5Clone: "<:nav></:nav>" !== t.createElement("nav").cloneNode(!0).outerHTML,
                    submitBubbles: !0,
                    changeBubbles: !0,
                    focusinBubbles: !1,
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0,
                    pixelMargin: !0
                }, i.boxModel = e.boxModel = "CSS1Compat" === t.compatMode, s.checked = !0, e.noCloneChecked = s.cloneNode(!0).checked, o.disabled = !0, e.optDisabled = !a.disabled;
                try {
                    delete p.test
                } catch (t) {
                    e.deleteExpando = !1
                }
                if (!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", (function() {
                        e.noCloneEvent = !1
                    })), p.cloneNode(!0).fireEvent("onclick")), (s = t.createElement("input")).value = "t", s.setAttribute("type", "radio"), e.radioValue = "t" === s.value, s.setAttribute("checked", "checked"), s.setAttribute("name", "t"), p.appendChild(s), (l = t.createDocumentFragment()).appendChild(p.lastChild), e.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, e.appendChecked = s.checked, l.removeChild(s), l.appendChild(p), p.attachEvent)
                    for (d in {
                            submit: 1,
                            change: 1,
                            focusin: 1
                        })(f = (c = "on" + d) in p) || (p.setAttribute(c, "return;"), f = "function" == typeof p[c]), e[d + "Bubbles"] = f;
                return l.removeChild(p), l = o = a = p = s = null, i((function() {
                    var n, r, o, a, s, l, c, d, h, m, g = t.getElementsByTagName("body")[0];
                    g && (h = (m = "padding:0;margin:0;border:") + "0;visibility:hidden;", c = "style='" + (d = "position:absolute;top:0;left:0;width:1px;height:1px;") + m + "5px solid #000;", (n = t.createElement("div")).style.cssText = h + "width:0;height:0;position:static;top:0;margin-top:1px", g.insertBefore(n, g.firstChild), p = t.createElement("div"), n.appendChild(p), p.innerHTML = "<table><tr><td style='" + m + "0;display:none'></td><td>t</td></tr></table>", u = p.getElementsByTagName("td"), f = 0 === u[0].offsetHeight, u[0].style.display = "", u[1].style.display = "none", e.reliableHiddenOffsets = f && 0 === u[0].offsetHeight, window.getComputedStyle && (p.innerHTML = "", (l = t.createElement("div")).style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), e.reliableMarginRight = 0 === (parseInt((window.getComputedStyle(l, null) || {
                            marginRight: 0
                        }).marginRight, 10) || 0)), void 0 !== p.style.zoom && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, e.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", e.shrinkWrapBlocks = 3 !== p.offsetWidth), p.style.cssText = d + h, p.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'><div style='padding:0;margin:0;border:0;display:block;overflow:hidden;'></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", o = (r = p.firstChild).firstChild, a = r.nextSibling.firstChild.firstChild, s = {
                            doesNotAddBorder: 5 !== o.offsetTop,
                            doesAddBorderForTableAndCells: 5 === a.offsetTop
                        }, o.style.position = "fixed", o.style.top = "20px",
                        s.fixedPosition = 20 === o.offsetTop || 15 === o.offsetTop, o.style.position = o.style.top = "", r.style.overflow = "hidden", r.style.position = "relative", s.subtractsBorderForOverflowNotVisible = -5 === o.offsetTop, s.doesNotIncludeMarginInBodyOffset = 1 !== g.offsetTop, window.getComputedStyle && (p.style.marginTop = "1%", e.pixelMargin = "1%" !== (window.getComputedStyle(p, null) || {
                            marginTop: 0
                        }).marginTop), void 0 !== n.style.zoom && (n.style.zoom = 1), g.removeChild(n), l = p = n = null, i.extend(e, s))
                })), e
            }();
            var s = /^(?:\{.*\}|\[.*\])$/,
                l = /([A-Z])/g;

            function u(e, t, n) {
                if (void 0 === n && 1 === e.nodeType) {
                    var r = "data-" + t.replace(l, "-$1").toLowerCase();
                    if ("string" == typeof(n = e.getAttribute(r))) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : i.isNumeric(n) ? +n : s.test(n) ? i.parseJSON(n) : n)
                        } catch (e) {}
                        i.data(e, t, n)
                    } else n = void 0
                }
                return n
            }

            function c(e) {
                for (var t in e)
                    if (("data" !== t || !i.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
                return !0
            }

            function d(e, t, n) {
                var r = t + "defer",
                    o = t + "queue",
                    a = t + "mark",
                    s = i._data(e, r);
                !s || "queue" !== n && i._data(e, o) || "mark" !== n && i._data(e, a) || setTimeout((function() {
                    i._data(e, o) || i._data(e, a) || (i.removeData(e, r, !0), s.fire())
                }), 0)
            }
            i.extend({
                cache: {},
                uuid: 0,
                expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""),
                noData: {
                    embed: !0,
                    object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                    applet: !0
                },
                hasData: function(e) {
                    return !!(e = e.nodeType ? i.cache[e[i.expando]] : e[i.expando]) && !c(e)
                },
                data: function(e, t, n, r) {
                    if (i.acceptData(e)) {
                        var o, a, s, l = i.expando,
                            u = "string" == typeof t,
                            c = e.nodeType,
                            d = c ? i.cache : e,
                            f = c ? e[l] : e[l] && l,
                            p = "events" === t;
                        if (f && d[f] && (p || r || d[f].data) || !u || void 0 !== n) return f || (c ? e[l] = f = ++i.uuid : f = l), d[f] || (d[f] = {}, c || (d[f].toJSON = i.noop)), "object" != typeof t && "function" != typeof t || (r ? d[f] = i.extend(d[f], t) : d[f].data = i.extend(d[f].data, t)), o = a = d[f], r || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[i.camelCase(t)] = n), p && !a[t] ? o.events : (u ? null == (s = a[t]) && (s = a[i.camelCase(t)]) : s = a, s)
                    }
                },
                removeData: function(e, t, n) {
                    if (i.acceptData(e)) {
                        var r, o, a, s = i.expando,
                            l = e.nodeType,
                            u = l ? i.cache : e,
                            d = l ? e[s] : s;
                        if (u[d]) {
                            if (t && (r = n ? u[d] : u[d].data)) {
                                i.isArray(t) || (t = t in r || (t = i.camelCase(t)) in r ? [t] : t.split(" "));
                                for (o = 0, a = t.length; o < a; o++) delete r[t[o]];
                                if (!(n ? c : i.isEmptyObject)(r)) return
                            }(n || (delete u[d].data, c(u[d]))) && (i.support.deleteExpando || !u.setInterval ? delete u[d] : u[d] = null, l && (i.support.deleteExpando ? delete e[s] : e.removeAttribute ? e.removeAttribute(s) : e[s] = null))
                        }
                    }
                },
                _data: function(e, t, n) {
                    return i.data(e, t, n, !0)
                },
                acceptData: function(e) {
                    if (e.nodeName) {
                        var t = i.noData[e.nodeName.toLowerCase()];
                        if (t) return !(!0 === t || e.getAttribute("classid") !== t)
                    }
                    return !0
                }
            }), i.fn.extend({
                data: function(e, t) {
                    var n, r, o, a, s, l = this[0],
                        c = 0,
                        d = null;
                    if (void 0 === e) {
                        if (this.length && (d = i.data(l), 1 === l.nodeType && !i._data(l, "parsedAttrs"))) {
                            for (s = (o = l.attributes).length; c < s; c++) 0 === (a = o[c].name).indexOf("data-") && (a = i.camelCase(a.substring(5)), u(l, a, d[a]));
                            i._data(l, "parsedAttrs", !0)
                        }
                        return d
                    }
                    return "object" == typeof e ? this.each((function() {
                        i.data(this, e)
                    })) : ((n = e.split(".", 2))[1] = n[1] ? "." + n[1] : "", r = n[1] + "!", i.access(this, (function(t) {
                        if (void 0 === t) return void 0 === (d = this.triggerHandler("getData" + r, [n[0]])) && l && (d = i.data(l, e), d = u(l, e, d)), void 0 === d && n[1] ? this.data(n[0]) : d;
                        n[1] = t, this.each((function() {
                            var o = i(this);
                            o.triggerHandler("setData" + r, n), i.data(this, e, t), o.triggerHandler("changeData" + r, n)
                        }))
                    }), null, t, arguments.length > 1, null, !1))
                },
                removeData: function(e) {
                    return this.each((function() {
                        i.removeData(this, e)
                    }))
                }
            }), i.extend({
                _mark: function(e, t) {
                    e && (t = (t || "fx") + "mark", i._data(e, t, (i._data(e, t) || 0) + 1))
                },
                _unmark: function(e, t, n) {
                    if (!0 !== e && (n = t, t = e, e = !1), t) {
                        var r = (n = n || "fx") + "mark",
                            o = e ? 0 : (i._data(t, r) || 1) - 1;
                        o ? i._data(t, r, o) : (i.removeData(t, r, !0), d(t, n, "mark"))
                    }
                },
                queue: function(e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = i._data(e, t), n && (!r || i.isArray(n) ? r = i._data(e, t, i.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = i.queue(e, t),
                        r = n.shift(),
                        o = {};
                    "inprogress" === r && (r = n.shift()), r && ("fx" === t && n.unshift("inprogress"), i._data(e, t + ".run", o), r.call(e, (function() {
                        i.dequeue(e, t)
                    }), o)), n.length || (i.removeData(e, t + "queue " + t + ".run", !0), d(e, t, "queue"))
                }
            }), i.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? i.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                        var n = i.queue(this, e, t);
                        "fx" === e && "inprogress" !== n[0] && i.dequeue(this, e)
                    }))
                },
                dequeue: function(e) {
                    return this.each((function() {
                        i.dequeue(this, e)
                    }))
                },
                delay: function(e, t) {
                    return e = i.fx && i.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, n) {
                        var r = setTimeout(t, e);
                        n.stop = function() {
                            clearTimeout(r)
                        }
                    }))
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    "string" != typeof e && (t = e, e = void 0), e = e || "fx";
                    var n, r = i.Deferred(),
                        o = this,
                        a = o.length,
                        s = 1,
                        l = e + "defer",
                        u = e + "queue",
                        c = e + "mark";

                    function d() {
                        --s || r.resolveWith(o, [o])
                    }
                    for (; a--;)(n = i.data(o[a], l, void 0, !0) || (i.data(o[a], u, void 0, !0) || i.data(o[a], c, void 0, !0)) && i.data(o[a], l, i.Callbacks("once memory"), !0)) && (s++, n.add(d));
                    return d(), r.promise(t)
                }
            });
            var f, p, h, m = /[\n\t\r]/g,
                g = /\s+/,
                v = /\r/g,
                y = /^(?:button|input)$/i,
                b = /^(?:button|input|object|select|textarea)$/i,
                x = /^a(?:rea)?$/i,
                w = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
                T = i.support.getSetAttribute;
            i.fn.extend({
                attr: function(e, t) {
                    return i.access(this, i.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each((function() {
                        i.removeAttr(this, e)
                    }))
                },
                prop: function(e, t) {
                    return i.access(this, i.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return e = i.propFix[e] || e, this.each((function() {
                        try {
                            this[e] = void 0, delete this[e]
                        } catch (e) {}
                    }))
                },
                addClass: function(e) {
                    var t, n, r, o, a, s, l;
                    if (i.isFunction(e)) return this.each((function(t) {
                        i(this).addClass(e.call(this, t, this.className))
                    }));
                    if (e && "string" == typeof e)
                        for (t = e.split(g), n = 0, r = this.length; n < r; n++)
                            if (1 === (o = this[n]).nodeType)
                                if (o.className || 1 !== t.length) {
                                    for (a = " " + o.className + " ", s = 0, l = t.length; s < l; s++) ~a.indexOf(" " + t[s] + " ") || (a += t[s] + " ");
                                    o.className = i.trim(a)
                                } else o.className = e;
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, o, a, s, l;
                    if (i.isFunction(e)) return this.each((function(t) {
                        i(this).removeClass(e.call(this, t, this.className))
                    }));
                    if (e && "string" == typeof e || void 0 === e)
                        for (t = (e || "").split(g), n = 0, r = this.length; n < r; n++)
                            if (1 === (o = this[n]).nodeType && o.className)
                                if (e) {
                                    for (a = (" " + o.className + " ").replace(m, " "), s = 0, l = t.length; s < l; s++) a = a.replace(" " + t[s] + " ", " ");
                                    o.className = i.trim(a)
                                } else o.className = "";
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e,
                        r = "boolean" == typeof t;
                    return i.isFunction(e) ? this.each((function(n) {
                        i(this).toggleClass(e.call(this, n, this.className, t), t)
                    })) : this.each((function() {
                        if ("string" === n)
                            for (var o, a = 0, s = i(this), l = t, u = e.split(g); o = u[a++];) l = r ? l : !s.hasClass(o), s[l ? "addClass" : "removeClass"](o);
                        else "undefined" !== n && "boolean" !== n || (this.className && i._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : i._data(this, "__className__") || "")
                    }))
                },
                hasClass: function(e) {
                    for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(m, " ").indexOf(t) > -1) return !0;
                    return !1
                },
                val: function(e) {
                    var t, n, r, o = this[0];
                    return arguments.length ? (r = i.isFunction(e), this.each((function(n) {
                        var o, a = i(this);
                        1 === this.nodeType && (null == (o = r ? e.call(this, n, a.val()) : e) ? o = "" : "number" == typeof o ? o += "" : i.isArray(o) && (o = i.map(o, (function(e) {
                            return null == e ? "" : e + ""
                        }))), (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    }))) : o ? (t = i.valHooks[o.type] || i.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(v, "") : null == n ? "" : n : void 0
                }
            }), i.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = e.attributes.value;
                            return !t || t.specified ? e.value : e.text
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, o, a = e.selectedIndex,
                                s = [],
                                l = e.options,
                                u = "select-one" === e.type;
                            if (a < 0) return null;
                            for (n = u ? a : 0, r = u ? a + 1 : l.length; n < r; n++)
                                if ((o = l[n]).selected && (i.support.optDisabled ? !o.disabled : null === o.getAttribute("disabled")) && (!o.parentNode.disabled || !i.nodeName(o.parentNode, "optgroup"))) {
                                    if (t = i(o).val(), u) return t;
                                    s.push(t)
                                }
                            return u && !s.length && l.length ? i(l[a]).val() : s
                        },
                        set: function(e, t) {
                            var n = i.makeArray(t);
                            return i(e).find("option").each((function() {
                                this.selected = i.inArray(i(this).val(), n) >= 0
                            })), n.length || (e.selectedIndex = -1), n
                        }
                    }
                },
                attrFn: {
                    val: !0,
                    css: !0,
                    html: !0,
                    text: !0,
                    data: !0,
                    width: !0,
                    height: !0,
                    offset: !0
                },
                attr: function(e, t, n, r) {
                    var o, a, s, l = e.nodeType;
                    if (e && 3 !== l && 8 !== l && 2 !== l) return r && t in i.attrFn ? i(e)[t](n) : void 0 === e.getAttribute ? i.prop(e, t, n) : ((s = 1 !== l || !i.isXMLDoc(e)) && (t = t.toLowerCase(), a = i.attrHooks[t] || (w.test(t) ? p : f)), void 0 !== n ? null === n ? void i.removeAttr(e, t) : a && "set" in a && s && void 0 !== (o = a.set(e, n, t)) ? o : (e.setAttribute(t, "" + n), n) : a && "get" in a && s && null !== (o = a.get(e, t)) ? o : null === (o = e.getAttribute(t)) ? void 0 : o)
                },
                removeAttr: function(e, t) {
                    var n, r, o, a, s, l = 0;
                    if (t && 1 === e.nodeType)
                        for (a = (r = t.toLowerCase().split(g)).length; l < a; l++)(o = r[l]) && (n = i.propFix[o] || o, (s = w.test(o)) || i.attr(e, o, ""), e.removeAttribute(T ? o : n), s && n in e && (e[n] = !1))
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (y.test(e.nodeName) && e.parentNode) i.error("type property can't be changed");
                            else if (!i.support.radioValue && "radio" === t && i.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    },
                    value: {
                        get: function(e, t) {
                            return f && i.nodeName(e, "button") ? f.get(e, t) : t in e ? e.value : null
                        },
                        set: function(e, t, n) {
                            if (f && i.nodeName(e, "button")) return f.set(e, t, n);
                            e.value = t
                        }
                    }
                },
                propFix: {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    for: "htmlFor",
                    class: "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                },
                prop: function(e, t, n) {
                    var r, o, a = e.nodeType;
                    if (e && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !i.isXMLDoc(e)) && (t = i.propFix[t] || t, o = i.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = e.getAttributeNode("tabindex");
                            return t && t.specified ? parseInt(t.value, 10) : b.test(e.nodeName) || x.test(e.nodeName) && e.href ? 0 : void 0
                        }
                    }
                }
            }), i.attrHooks.tabindex = i.propHooks.tabIndex, p = {
                get: function(e, t) {
                    var n, r = i.prop(e, t);
                    return !0 === r || "boolean" != typeof r && (n = e.getAttributeNode(t)) && !1 !== n.nodeValue ? t.toLowerCase() : void 0
                },
                set: function(e, t, n) {
                    var r;
                    return !1 === t ? i.removeAttr(e, n) : ((r = i.propFix[n] || n) in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
                }
            }, T || (h = {
                name: !0,
                id: !0,
                coords: !0
            }, f = i.valHooks.button = {
                get: function(e, t) {
                    var n;
                    return (n = e.getAttributeNode(t)) && (h[t] ? "" !== n.nodeValue : n.specified) ? n.nodeValue : void 0
                },
                set: function(e, n, r) {
                    var i = e.getAttributeNode(r);
                    return i || (i = t.createAttribute(r), e.setAttributeNode(i)), i.nodeValue = n + ""
                }
            }, i.attrHooks.tabindex.set = f.set, i.each(["width", "height"], (function(e, t) {
                i.attrHooks[t] = i.extend(i.attrHooks[t], {
                    set: function(e, n) {
                        if ("" === n) return e.setAttribute(t, "auto"), n
                    }
                })
            })), i.attrHooks.contenteditable = {
                get: f.get,
                set: function(e, t, n) {
                    "" === t && (t = "false"), f.set(e, t, n)
                }
            }), i.support.hrefNormalized || i.each(["href", "src", "width", "height"], (function(e, t) {
                i.attrHooks[t] = i.extend(i.attrHooks[t], {
                    get: function(e) {
                        var n = e.getAttribute(t, 2);
                        return null === n ? void 0 : n
                    }
                })
            })), i.support.style || (i.attrHooks.style = {
                get: function(e) {
                    return e.style.cssText.toLowerCase() || void 0
                },
                set: function(e, t) {
                    return e.style.cssText = "" + t
                }
            }), i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
                get: function(e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
                }
            })), i.support.enctype || (i.propFix.enctype = "encoding"), i.support.checkOn || i.each(["radio", "checkbox"], (function() {
                i.valHooks[this] = {
                    get: function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    }
                }
            })), i.each(["radio", "checkbox"], (function() {
                i.valHooks[this] = i.extend(i.valHooks[this], {
                    set: function(e, t) {
                        if (i.isArray(t)) return e.checked = i.inArray(i(e).val(), t) >= 0
                    }
                })
            }));
            var N = /^(?:textarea|input|select)$/i,
                C = /^([^\.]*)?(?:\.(.+))?$/,
                k = /(?:^|\s)hover(\.\S+)?\b/,
                E = /^key/,
                S = /^(?:mouse|contextmenu)|click/,
                A = /^(?:focusinfocus|focusoutblur)$/,
                L = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
                D = function(e) {
                    var t = L.exec(e);
                    return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
                },
                j = function(e, t) {
                    var n = e.attributes || {};
                    return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || (n.id || {}).value === t[2]) && (!t[3] || t[3].test((n.class || {}).value))
                },
                F = function(e) {
                    return i.event.special.hover ? e : e.replace(k, "mouseenter$1 mouseleave$1")
                };

            function M() {
                return !1
            }

            function _() {
                return !0
            }
            i.event = {
                    add: function(e, t, n, r, o) {
                        var a, s, l, u, c, d, f, p, h, m, g;
                        if (3 !== e.nodeType && 8 !== e.nodeType && t && n && (a = i._data(e))) {
                            for (n.handler && (n = (h = n).handler, o = h.selector), n.guid || (n.guid = i.guid++), (l = a.events) || (a.events = l = {}), (s = a.handle) || (a.handle = s = function(e) {
                                    return void 0 === i || e && i.event.triggered === e.type ? void 0 : i.event.dispatch.apply(s.elem, arguments)
                                }, s.elem = e), t = i.trim(F(t)).split(" "), u = 0; u < t.length; u++) d = (c = C.exec(t[u]) || [])[1], f = (c[2] || "").split(".").sort(), g = i.event.special[d] || {}, d = (o ? g.delegateType : g.bindType) || d, g = i.event.special[d] || {}, p = i.extend({
                                type: d,
                                origType: c[1],
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: o,
                                quick: o && D(o),
                                namespace: f.join(".")
                            }, h), (m = l[d]) || ((m = l[d] = []).delegateCount = 0, g.setup && !1 !== g.setup.call(e, r, f, s) || (e.addEventListener ? e.addEventListener(d, s, !1) : e.attachEvent && e.attachEvent("on" + d, s))), g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), o ? m.splice(m.delegateCount++, 0, p) : m.push(p), i.event.global[d] = !0;
                            e = null
                        }
                    },
                    global: {},
                    remove: function(e, t, n, r, o) {
                        var a, s, l, u, c, d, f, p, h, m, g, v, y = i.hasData(e) && i._data(e);
                        if (y && (p = y.events)) {
                            for (t = i.trim(F(t || "")).split(" "), a = 0; a < t.length; a++)
                                if (l = u = (s = C.exec(t[a]) || [])[1], c = s[2], l) {
                                    for (h = i.event.special[l] || {}, d = (g = p[l = (r ? h.delegateType : h.bindType) || l] || []).length, c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, f = 0; f < g.length; f++) v = g[f], !o && u !== v.origType || n && n.guid !== v.guid || c && !c.test(v.namespace) || r && r !== v.selector && ("**" !== r || !v.selector) || (g.splice(f--, 1), v.selector && g.delegateCount--, h.remove && h.remove.call(e, v));
                                    0 === g.length && d !== g.length && (h.teardown && !1 !== h.teardown.call(e, c) || i.removeEvent(e, l, y.handle), delete p[l])
                                } else
                                    for (l in p) i.event.remove(e, l + t[a], n, r, !0);
                            i.isEmptyObject(p) && ((m = y.handle) && (m.elem = null), i.removeData(e, ["events", "handle"], !0))
                        }
                    },
                    customEvent: {
                        getData: !0,
                        setData: !0,
                        changeData: !0
                    },
                    trigger: function(e, t, n, r) {
                        if (!n || 3 !== n.nodeType && 8 !== n.nodeType) {
                            var o, a, s, l, u, c, d, f, p, h, m = e.type || e,
                                g = [];
                            if (!A.test(m + i.event.triggered) && (m.indexOf("!") >= 0 && (m = m.slice(0, -1), a = !0), m.indexOf(".") >= 0 && (g = m.split("."), m = g.shift(), g.sort()), n && !i.event.customEvent[m] || i.event.global[m]))
                                if ((e = "object" == typeof e ? e[i.expando] ? e : new i.Event(m, e) : new i.Event(m)).type = m, e.isTrigger = !0, e.exclusive = a, e.namespace = g.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, c = m.indexOf(":") < 0 ? "on" + m : "", n) {
                                    if (e.result = void 0, e.target || (e.target = n),
                                        (t = null != t ? i.makeArray(t) : []).unshift(e), !(d = i.event.special[m] || {}).trigger || !1 !== d.trigger.apply(n, t)) {
                                        if (p = [
                                                [n, d.bindType || m]
                                            ], !r && !d.noBubble && !i.isWindow(n)) {
                                            for (h = d.delegateType || m, l = A.test(h + m) ? n : n.parentNode, u = null; l; l = l.parentNode) p.push([l, h]), u = l;
                                            u && u === n.ownerDocument && p.push([u.defaultView || u.parentWindow || window, h])
                                        }
                                        for (s = 0; s < p.length && !e.isPropagationStopped(); s++) l = p[s][0], e.type = p[s][1], (f = (i._data(l, "events") || {})[e.type] && i._data(l, "handle")) && f.apply(l, t), (f = c && l[c]) && i.acceptData(l) && !1 === f.apply(l, t) && e.preventDefault();
                                        return e.type = m, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(n.ownerDocument, t) || "click" === m && i.nodeName(n, "a") || !i.acceptData(n) || c && n[m] && ("focus" !== m && "blur" !== m || 0 !== e.target.offsetWidth) && !i.isWindow(n) && ((u = n[c]) && (n[c] = null), i.event.triggered = m, n[m](), i.event.triggered = void 0, u && (n[c] = u)), e.result
                                    }
                                } else
                                    for (s in o = i.cache) o[s].events && o[s].events[m] && i.event.trigger(e, t, o[s].handle.elem, !0)
                        }
                    },
                    dispatch: function(e) {
                        e = i.event.fix(e || window.event);
                        var t, n, r, o, a, s, l, u, c, d, f = (i._data(this, "events") || {})[e.type] || [],
                            p = f.delegateCount,
                            h = [].slice.call(arguments, 0),
                            m = !e.exclusive && !e.namespace,
                            g = i.event.special[e.type] || {},
                            v = [];
                        if (h[0] = e, e.delegateTarget = this, !g.preDispatch || !1 !== g.preDispatch.call(this, e)) {
                            if (p && (!e.button || "click" !== e.type))
                                for ((o = i(this)).context = this.ownerDocument || this, r = e.target; r != this; r = r.parentNode || this)
                                    if (!0 !== r.disabled) {
                                        for (s = {}, u = [], o[0] = r, t = 0; t < p; t++) void 0 === s[d = (c = f[t]).selector] && (s[d] = c.quick ? j(r, c.quick) : o.is(d)), s[d] && u.push(c);
                                        u.length && v.push({
                                            elem: r,
                                            matches: u
                                        })
                                    }
                            for (f.length > p && v.push({
                                    elem: this,
                                    matches: f.slice(p)
                                }), t = 0; t < v.length && !e.isPropagationStopped(); t++)
                                for (l = v[t], e.currentTarget = l.elem, n = 0; n < l.matches.length && !e.isImmediatePropagationStopped(); n++) c = l.matches[n], (m || !e.namespace && !c.namespace || e.namespace_re && e.namespace_re.test(c.namespace)) && (e.data = c.data, e.handleObj = c, void 0 !== (a = ((i.event.special[c.origType] || {}).handle || c.handler).apply(l.elem, h)) && (e.result = a, !1 === a && (e.preventDefault(), e.stopPropagation())));
                            return g.postDispatch && g.postDispatch.call(this, e), e.result
                        }
                    },
                    props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                    fixHooks: {},
                    keyHooks: {
                        props: "char charCode key keyCode".split(" "),
                        filter: function(e, t) {
                            return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                        }
                    },
                    mouseHooks: {
                        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                        filter: function(e, n) {
                            var r, i, o, a = n.button,
                                s = n.fromElement;
                            return null == e.pageX && null != n.clientX && (i = (r = e.target.ownerDocument || t).documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                        }
                    },
                    fix: function(e) {
                        if (e[i.expando]) return e;
                        var n, r, o = e,
                            a = i.event.fixHooks[e.type] || {},
                            s = a.props ? this.props.concat(a.props) : this.props;
                        for (e = i.Event(o), n = s.length; n;) e[r = s[--n]] = o[r];
                        return e.target || (e.target = o.srcElement || t), 3 === e.target.nodeType && (e.target = e.target.parentNode), void 0 === e.metaKey && (e.metaKey = e.ctrlKey), a.filter ? a.filter(e, o) : e
                    },
                    special: {
                        ready: {
                            setup: i.bindReady
                        },
                        load: {
                            noBubble: !0
                        },
                        focus: {
                            delegateType: "focusin"
                        },
                        blur: {
                            delegateType: "focusout"
                        },
                        beforeunload: {
                            setup: function(e, t, n) {
                                i.isWindow(this) && (this.onbeforeunload = n)
                            },
                            teardown: function(e, t) {
                                this.onbeforeunload === t && (this.onbeforeunload = null)
                            }
                        }
                    },
                    simulate: function(e, t, n, r) {
                        var o = i.extend(new i.Event, n, {
                            type: e,
                            isSimulated: !0,
                            originalEvent: {}
                        });
                        r ? i.event.trigger(o, null, t) : i.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
                    }
                }, i.event.handle = i.event.dispatch, i.removeEvent = t.removeEventListener ? function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n, !1)
                } : function(e, t, n) {
                    e.detachEvent && e.detachEvent("on" + t, n)
                }, i.Event = function(e, t) {
                    if (!(this instanceof i.Event)) return new i.Event(e, t);
                    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? _ : M) : this.type = e, t && i.extend(this, t), this.timeStamp = e && e.timeStamp || i.now(), this[i.expando] = !0
                }, i.Event.prototype = {
                    preventDefault: function() {
                        this.isDefaultPrevented = _;
                        var e = this.originalEvent;
                        e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                    },
                    stopPropagation: function() {
                        this.isPropagationStopped = _;
                        var e = this.originalEvent;
                        e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                    },
                    stopImmediatePropagation: function() {
                        this.isImmediatePropagationStopped = _, this.stopPropagation()
                    },
                    isDefaultPrevented: M,
                    isPropagationStopped: M,
                    isImmediatePropagationStopped: M
                }, i.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                }, (function(e, t) {
                    i.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, r = this,
                                o = e.relatedTarget,
                                a = e.handleObj;
                            a.selector;
                            return o && (o === r || i.contains(r, o)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                        }
                    }
                })), i.support.submitBubbles || (i.event.special.submit = {
                    setup: function() {
                        if (i.nodeName(this, "form")) return !1;
                        i.event.add(this, "click._submit keypress._submit", (function(e) {
                            var t = e.target,
                                n = i.nodeName(t, "input") || i.nodeName(t, "button") ? t.form : void 0;
                            n && !n._submit_attached && (i.event.add(n, "submit._submit", (function(e) {
                                e._submit_bubble = !0
                            })), n._submit_attached = !0)
                        }))
                    },
                    postDispatch: function(e) {
                        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && i.event.simulate("submit", this.parentNode, e, !0))
                    },
                    teardown: function() {
                        if (i.nodeName(this, "form")) return !1;
                        i.event.remove(this, "._submit")
                    }
                }), i.support.changeBubbles || (i.event.special.change = {
                    setup: function() {
                        if (N.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (i.event.add(this, "propertychange._change", (function(e) {
                            "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                        })), i.event.add(this, "click._change", (function(e) {
                            this._just_changed && !e.isTrigger && (this._just_changed = !1,
                                i.event.simulate("change", this, e, !0))
                        }))), !1;
                        i.event.add(this, "beforeactivate._change", (function(e) {
                            var t = e.target;
                            N.test(t.nodeName) && !t._change_attached && (i.event.add(t, "change._change", (function(e) {
                                !this.parentNode || e.isSimulated || e.isTrigger || i.event.simulate("change", this.parentNode, e, !0)
                            })), t._change_attached = !0)
                        }))
                    },
                    handle: function(e) {
                        var t = e.target;
                        if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
                    },
                    teardown: function() {
                        return i.event.remove(this, "._change"), N.test(this.nodeName)
                    }
                }), i.support.focusinBubbles || i.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, n) {
                    var r = 0,
                        o = function(e) {
                            i.event.simulate(n, e.target, i.event.fix(e), !0)
                        };
                    i.event.special[n] = {
                        setup: function() {
                            0 == r++ && t.addEventListener(e, o, !0)
                        },
                        teardown: function() {
                            0 == --r && t.removeEventListener(e, o, !0)
                        }
                    }
                })), i.fn.extend({
                    on: function(e, t, n, r, o) {
                        var a, s;
                        if ("object" == typeof e) {
                            for (s in "string" != typeof t && (n = n || t, t = void 0), e) this.on(s, t, n, e[s], o);
                            return this
                        }
                        if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), !1 === r) r = M;
                        else if (!r) return this;
                        return 1 === o && (a = r, r = function(e) {
                            return i().off(e), a.apply(this, arguments)
                        }, r.guid = a.guid || (a.guid = i.guid++)), this.each((function() {
                            i.event.add(this, e, r, n, t)
                        }))
                    },
                    one: function(e, t, n, r) {
                        return this.on(e, t, n, r, 1)
                    },
                    off: function(e, t, n) {
                        if (e && e.preventDefault && e.handleObj) {
                            var r = e.handleObj;
                            return i(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this
                        }
                        if ("object" == typeof e) {
                            for (var o in e) this.off(o, t, e[o]);
                            return this
                        }
                        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = M), this.each((function() {
                            i.event.remove(this, e, n, t)
                        }))
                    },
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    live: function(e, t, n) {
                        return i(this.context).on(e, this.selector, t, n), this
                    },
                    die: function(e, t) {
                        return i(this.context).off(e, this.selector || "**", t), this
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function(e, t, n) {
                        return 1 == arguments.length ? this.off(e, "**") : this.off(t, e, n)
                    },
                    trigger: function(e, t) {
                        return this.each((function() {
                            i.event.trigger(e, t, this)
                        }))
                    },
                    triggerHandler: function(e, t) {
                        if (this[0]) return i.event.trigger(e, t, this[0], !0)
                    },
                    toggle: function(e) {
                        var t = arguments,
                            n = e.guid || i.guid++,
                            r = 0,
                            o = function(n) {
                                var o = (i._data(this, "lastToggle" + e.guid) || 0) % r;
                                return i._data(this, "lastToggle" + e.guid, o + 1), n.preventDefault(), t[o].apply(this, arguments) || !1
                            };
                        for (o.guid = n; r < t.length;) t[r++].guid = n;
                        return this.click(o)
                    },
                    hover: function(e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                }), i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(e, t) {
                    i.fn[t] = function(e, n) {
                            return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                        }, i.attrFn && (i.attrFn[t] = !0), E.test(t) && (i.event.fixHooks[t] = i.event.keyHooks),
                        S.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks)
                })),
                function() {
                    var e = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                        n = "sizcache" + (Math.random() + "").replace(".", ""),
                        r = 0,
                        o = Object.prototype.toString,
                        a = !1,
                        s = !0,
                        l = /\\/g,
                        u = /\r\n/g,
                        c = /\W/;
                    [0, 0].sort((function() {
                        return s = !1, 0
                    }));
                    var d = function(n, r, i, a) {
                        i = i || [];
                        var s = r = r || t;
                        if (1 !== r.nodeType && 9 !== r.nodeType) return [];
                        if (!n || "string" != typeof n) return i;
                        var l, u, c, f, m, g, v, y, b = !0,
                            w = d.isXML(r),
                            T = [],
                            C = n;
                        do {
                            if (e.exec(""), (l = e.exec(C)) && (C = l[3], T.push(l[1]), l[2])) {
                                f = l[3];
                                break
                            }
                        } while (l);
                        if (T.length > 1 && h.exec(n))
                            if (2 === T.length && p.relative[T[0]]) u = N(T[0] + T[1], r, a);
                            else
                                for (u = p.relative[T[0]] ? [r] : d(T.shift(), r); T.length;) n = T.shift(), p.relative[n] && (n += T.shift()), u = N(n, u, a);
                        else if (!a && T.length > 1 && 9 === r.nodeType && !w && p.match.ID.test(T[0]) && !p.match.ID.test(T[T.length - 1]) && (r = (m = d.find(T.shift(), r, w)).expr ? d.filter(m.expr, m.set)[0] : m.set[0]), r)
                            for (u = (m = a ? {
                                    expr: T.pop(),
                                    set: x(a)
                                } : d.find(T.pop(), 1 !== T.length || "~" !== T[0] && "+" !== T[0] || !r.parentNode ? r : r.parentNode, w)).expr ? d.filter(m.expr, m.set) : m.set, T.length > 0 ? c = x(u) : b = !1; T.length;) v = g = T.pop(), p.relative[g] ? v = T.pop() : g = "", null == v && (v = r), p.relative[g](c, v, w);
                        else c = T = [];
                        if (c || (c = u), c || d.error(g || n), "[object Array]" === o.call(c))
                            if (b)
                                if (r && 1 === r.nodeType)
                                    for (y = 0; null != c[y]; y++) c[y] && (!0 === c[y] || 1 === c[y].nodeType && d.contains(r, c[y])) && i.push(u[y]);
                                else
                                    for (y = 0; null != c[y]; y++) c[y] && 1 === c[y].nodeType && i.push(u[y]);
                        else i.push.apply(i, c);
                        else x(c, i);
                        return f && (d(f, s, i, a), d.uniqueSort(i)), i
                    };
                    d.uniqueSort = function(e) {
                        if (v && (a = s, e.sort(v), a))
                            for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1);
                        return e
                    }, d.matches = function(e, t) {
                        return d(e, null, null, t)
                    }, d.matchesSelector = function(e, t) {
                        return d(t, null, null, [e]).length > 0
                    }, d.find = function(e, t, n) {
                        var r, i, o, a, s, u;
                        if (!e) return [];
                        for (i = 0, o = p.order.length; i < o; i++)
                            if (s = p.order[i], (a = p.leftMatch[s].exec(e)) && (u = a[1], a.splice(1, 1), "\\" !== u.substr(u.length - 1) && (a[1] = (a[1] || "").replace(l, ""), null != (r = p.find[s](a, t, n))))) {
                                e = e.replace(p.match[s], "");
                                break
                            }
                        return r || (r = void 0 !== t.getElementsByTagName ? t.getElementsByTagName("*") : []), {
                            set: r,
                            expr: e
                        }
                    }, d.filter = function(e, t, n, r) {
                        for (var i, o, a, s, l, u, c, f, h, m = e, g = [], v = t, y = t && t[0] && d.isXML(t[0]); e && t.length;) {
                            for (a in p.filter)
                                if (null != (i = p.leftMatch[a].exec(e)) && i[2]) {
                                    if (u = p.filter[a], c = i[1], o = !1, i.splice(1, 1), "\\" === c.substr(c.length - 1)) continue;
                                    if (v === g && (g = []), p.preFilter[a])
                                        if (i = p.preFilter[a](i, v, n, g, r, y)) {
                                            if (!0 === i) continue
                                        } else o = s = !0;
                                    if (i)
                                        for (f = 0; null != (l = v[f]); f++) l && (h = r ^ (s = u(l, i, f, v)), n && null != s ? h ? o = !0 : v[f] = !1 : h && (g.push(l), o = !0));
                                    if (void 0 !== s) {
                                        if (n || (v = g), e = e.replace(p.match[a], ""), !o) return [];
                                        break
                                    }
                                }
                            if (e === m) {
                                if (null != o) break;
                                d.error(e)
                            }
                            m = e
                        }
                        return v
                    }, d.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    };
                    var f = d.getText = function(e) {
                            var t, n, r = e.nodeType,
                                i = "";
                            if (r) {
                                if (1 === r || 9 === r || 11 === r) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    if ("string" == typeof e.innerText) return e.innerText.replace(u, "");
                                    for (e = e.firstChild; e; e = e.nextSibling) i += f(e)
                                } else if (3 === r || 4 === r) return e.nodeValue
                            } else
                                for (t = 0; n = e[t]; t++) 8 !== n.nodeType && (i += f(n));
                            return i
                        },
                        p = d.selectors = {
                            order: ["ID", "NAME", "TAG"],
                            match: {
                                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                            },
                            leftMatch: {},
                            attrMap: {
                                class: "className",
                                for: "htmlFor"
                            },
                            attrHandle: {
                                href: function(e) {
                                    return e.getAttribute("href")
                                },
                                type: function(e) {
                                    return e.getAttribute("type")
                                }
                            },
                            relative: {
                                "+": function(e, t) {
                                    var n = "string" == typeof t,
                                        r = n && !c.test(t),
                                        i = n && !r;
                                    r && (t = t.toLowerCase());
                                    for (var o, a = 0, s = e.length; a < s; a++)
                                        if (o = e[a]) {
                                            for (;
                                                (o = o.previousSibling) && 1 !== o.nodeType;);
                                            e[a] = i || o && o.nodeName.toLowerCase() === t ? o || !1 : o === t
                                        }
                                    i && d.filter(t, e, !0)
                                },
                                ">": function(e, t) {
                                    var n, r = "string" == typeof t,
                                        i = 0,
                                        o = e.length;
                                    if (r && !c.test(t)) {
                                        for (t = t.toLowerCase(); i < o; i++)
                                            if (n = e[i]) {
                                                var a = n.parentNode;
                                                e[i] = a.nodeName.toLowerCase() === t && a
                                            }
                                    } else {
                                        for (; i < o; i++)(n = e[i]) && (e[i] = r ? n.parentNode : n.parentNode === t);
                                        r && d.filter(t, e, !0)
                                    }
                                },
                                "": function(e, t, n) {
                                    var i, o = r++,
                                        a = T;
                                    "string" != typeof t || c.test(t) || (i = t = t.toLowerCase(), a = w), a("parentNode", t, o, e, i, n)
                                },
                                "~": function(e, t, n) {
                                    var i, o = r++,
                                        a = T;
                                    "string" != typeof t || c.test(t) || (i = t = t.toLowerCase(), a = w), a("previousSibling", t, o, e, i, n)
                                }
                            },
                            find: {
                                ID: function(e, t, n) {
                                    if (void 0 !== t.getElementById && !n) {
                                        var r = t.getElementById(e[1]);
                                        return r && r.parentNode ? [r] : []
                                    }
                                },
                                NAME: function(e, t) {
                                    if (void 0 !== t.getElementsByName) {
                                        for (var n = [], r = t.getElementsByName(e[1]), i = 0, o = r.length; i < o; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
                                        return 0 === n.length ? null : n
                                    }
                                },
                                TAG: function(e, t) {
                                    if (void 0 !== t.getElementsByTagName) return t.getElementsByTagName(e[1])
                                }
                            },
                            preFilter: {
                                CLASS: function(e, t, n, r, i, o) {
                                    if (e = " " + e[1].replace(l, "") + " ", o) return e;
                                    for (var a, s = 0; null != (a = t[s]); s++) a && (i ^ (a.className && (" " + a.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(a) : n && (t[s] = !1));
                                    return !1
                                },
                                ID: function(e) {
                                    return e[1].replace(l, "")
                                },
                                TAG: function(e, t) {
                                    return e[1].replace(l, "").toLowerCase()
                                },
                                CHILD: function(e) {
                                    if ("nth" === e[1]) {
                                        e[2] || d.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                                        var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(("even" === e[2] ? "2n" : "odd" === e[2] && "2n+1") || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                                        e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                                    } else e[2] && d.error(e[0]);
                                    return e[0] = r++, e
                                },
                                ATTR: function(e, t, n, r, i, o) {
                                    var a = e[1] = e[1].replace(l, "");
                                    return !o && p.attrMap[a] && (e[1] = p.attrMap[a]), e[4] = (e[4] || e[5] || "").replace(l, ""), "~=" === e[2] && (e[4] = " " + e[4] + " "), e
                                },
                                PSEUDO: function(t, n, r, i, o) {
                                    if ("not" === t[1]) {
                                        if (!((e.exec(t[3]) || "").length > 1 || /^\w/.test(t[3]))) {
                                            var a = d.filter(t[3], n, r, !0 ^ o);
                                            return r || i.push.apply(i, a), !1
                                        }
                                        t[3] = d(t[3], null, null, n)
                                    } else if (p.match.POS.test(t[0]) || p.match.CHILD.test(t[0])) return !0;
                                    return t
                                },
                                POS: function(e) {
                                    return e.unshift(!0), e
                                }
                            },
                            filters: {
                                enabled: function(e) {
                                    return !1 === e.disabled && "hidden" !== e.type
                                },
                                disabled: function(e) {
                                    return !0 === e.disabled
                                },
                                checked: function(e) {
                                    return !0 === e.checked
                                },
                                selected: function(e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                },
                                parent: function(e) {
                                    return !!e.firstChild
                                },
                                empty: function(e) {
                                    return !e.firstChild
                                },
                                has: function(e, t, n) {
                                    return !!d(n[3], e).length
                                },
                                header: function(e) {
                                    return /h\d/i.test(e.nodeName)
                                },
                                text: function(e) {
                                    var t = e.getAttribute("type"),
                                        n = e.type;
                                    return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t)
                                },
                                radio: function(e) {
                                    return "input" === e.nodeName.toLowerCase() && "radio" === e.type
                                },
                                checkbox: function(e) {
                                    return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
                                },
                                file: function(e) {
                                    return "input" === e.nodeName.toLowerCase() && "file" === e.type
                                },
                                password: function(e) {
                                    return "input" === e.nodeName.toLowerCase() && "password" === e.type
                                },
                                submit: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t || "button" === t) && "submit" === e.type
                                },
                                image: function(e) {
                                    return "input" === e.nodeName.toLowerCase() && "image" === e.type
                                },
                                reset: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t || "button" === t) && "reset" === e.type
                                },
                                button: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && "button" === e.type || "button" === t
                                },
                                input: function(e) {
                                    return /input|select|textarea|button/i.test(e.nodeName)
                                },
                                focus: function(e) {
                                    return e === e.ownerDocument.activeElement
                                }
                            },
                            setFilters: {
                                first: function(e, t) {
                                    return 0 === t
                                },
                                last: function(e, t, n, r) {
                                    return t === r.length - 1
                                },
                                even: function(e, t) {
                                    return t % 2 == 0
                                },
                                odd: function(e, t) {
                                    return t % 2 == 1
                                },
                                lt: function(e, t, n) {
                                    return t < n[3] - 0
                                },
                                gt: function(e, t, n) {
                                    return t > n[3] - 0
                                },
                                nth: function(e, t, n) {
                                    return n[3] - 0 === t
                                },
                                eq: function(e, t, n) {
                                    return n[3] - 0 === t
                                }
                            },
                            filter: {
                                PSEUDO: function(e, t, n, r) {
                                    var i = t[1],
                                        o = p.filters[i];
                                    if (o) return o(e, n, t, r);
                                    if ("contains" === i) return (e.textContent || e.innerText || f([e]) || "").indexOf(t[3]) >= 0;
                                    if ("not" === i) {
                                        for (var a = t[3], s = 0, l = a.length; s < l; s++)
                                            if (a[s] === e) return !1;
                                        return !0
                                    }
                                    d.error(i)
                                },
                                CHILD: function(e, t) {
                                    var r, i, o, a, s, l, u = t[1],
                                        c = e;
                                    switch (u) {
                                        case "only":
                                        case "first":
                                            for (; c = c.previousSibling;)
                                                if (1 === c.nodeType) return !1;
                                            if ("first" === u) return !0;
                                            c = e;
                                        case "last":
                                            for (; c = c.nextSibling;)
                                                if (1 === c.nodeType) return !1;
                                            return !0;
                                        case "nth":
                                            if (r = t[2], i = t[3], 1 === r && 0 === i) return !0;
                                            if (o = t[0], (a = e.parentNode) && (a[n] !== o || !e.nodeIndex)) {
                                                for (s = 0, c = a.firstChild; c; c = c.nextSibling) 1 === c.nodeType && (c.nodeIndex = ++s);
                                                a[n] = o
                                            }
                                            return l = e.nodeIndex - i, 0 === r ? 0 === l : l % r == 0 && l / r >= 0
                                    }
                                },
                                ID: function(e, t) {
                                    return 1 === e.nodeType && e.getAttribute("id") === t
                                },
                                TAG: function(e, t) {
                                    return "*" === t && 1 === e.nodeType || !!e.nodeName && e.nodeName.toLowerCase() === t
                                },
                                CLASS: function(e, t) {
                                    return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                                },
                                ATTR: function(e, t) {
                                    var n = t[1],
                                        r = d.attr ? d.attr(e, n) : p.attrHandle[n] ? p.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n),
                                        i = r + "",
                                        o = t[2],
                                        a = t[4];
                                    return null == r ? "!=" === o : !o && d.attr ? null != r : "=" === o ? i === a : "*=" === o ? i.indexOf(a) >= 0 : "~=" === o ? (" " + i + " ").indexOf(a) >= 0 : a ? "!=" === o ? i !== a : "^=" === o ? 0 === i.indexOf(a) : "$=" === o ? i.substr(i.length - a.length) === a : "|=" === o && (i === a || i.substr(0, a.length + 1) === a + "-") : i && !1 !== r
                                },
                                POS: function(e, t, n, r) {
                                    var i = t[2],
                                        o = p.setFilters[i];
                                    if (o) return o(e, n, t, r)
                                }
                            }
                        },
                        h = p.match.POS,
                        m = function(e, t) {
                            return "\\" + (t - 0 + 1)
                        };
                    for (var g in p.match) p.match[g] = new RegExp(p.match[g].source + /(?![^\[]*\])(?![^\(]*\))/.source), p.leftMatch[g] = new RegExp(/(^(?:.|\r|\n)*?)/.source + p.match[g].source.replace(/\\(\d+)/g, m));
                    p.match.globalPOS = h;
                    var v, y, b, x = function(e, t) {
                        return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
                    };
                    try {
                        Array.prototype.slice.call(t.documentElement.childNodes, 0)[0].nodeType
                    } catch (e) {
                        x = function(e, t) {
                            var n = 0,
                                r = t || [];
                            if ("[object Array]" === o.call(e)) Array.prototype.push.apply(r, e);
                            else if ("number" == typeof e.length)
                                for (var i = e.length; n < i; n++) r.push(e[n]);
                            else
                                for (; e[n]; n++) r.push(e[n]);
                            return r
                        }
                    }

                    function w(e, t, r, i, o, a) {
                        for (var s = 0, l = i.length; s < l; s++) {
                            var u = i[s];
                            if (u) {
                                var c = !1;
                                for (u = u[e]; u;) {
                                    if (u[n] === r) {
                                        c = i[u.sizset];
                                        break
                                    }
                                    if (1 !== u.nodeType || a || (u[n] = r, u.sizset = s), u.nodeName.toLowerCase() === t) {
                                        c = u;
                                        break
                                    }
                                    u = u[e]
                                }
                                i[s] = c
                            }
                        }
                    }

                    function T(e, t, r, i, o, a) {
                        for (var s = 0, l = i.length; s < l; s++) {
                            var u = i[s];
                            if (u) {
                                var c = !1;
                                for (u = u[e]; u;) {
                                    if (u[n] === r) {
                                        c = i[u.sizset];
                                        break
                                    }
                                    if (1 === u.nodeType)
                                        if (a || (u[n] = r, u.sizset = s), "string" != typeof t) {
                                            if (u === t) {
                                                c = !0;
                                                break
                                            }
                                        } else if (d.filter(t, [u]).length > 0) {
                                        c = u;
                                        break
                                    }
                                    u = u[e]
                                }
                                i[s] = c
                            }
                        }
                    }
                    t.documentElement.compareDocumentPosition ? v = function(e, t) {
                            return e === t ? (a = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                        } : (v = function(e, t) {
                            if (e === t) return a = !0, 0;
                            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                            var n, r, i = [],
                                o = [],
                                s = e.parentNode,
                                l = t.parentNode,
                                u = s;
                            if (s === l) return y(e, t);
                            if (!s) return -1;
                            if (!l) return 1;
                            for (; u;) i.unshift(u), u = u.parentNode;
                            for (u = l; u;) o.unshift(u), u = u.parentNode;
                            n = i.length, r = o.length;
                            for (var c = 0; c < n && c < r; c++)
                                if (i[c] !== o[c]) return y(i[c], o[c]);
                            return c === n ? y(e, o[c], -1) : y(i[c], t, 1)
                        }, y = function(e, t, n) {
                            if (e === t) return n;
                            for (var r = e.nextSibling; r;) {
                                if (r === t) return -1;
                                r = r.nextSibling
                            }
                            return 1
                        }),
                        function() {
                            var e = t.createElement("div"),
                                n = "script" + (new Date).getTime(),
                                r = t.documentElement;
                            e.innerHTML = "<a name='" + n + "'/>", r.insertBefore(e, r.firstChild), t.getElementById(n) && (p.find.ID = function(e, t, n) {
                                if (void 0 !== t.getElementById && !n) {
                                    var r = t.getElementById(e[1]);
                                    return r ? r.id === e[1] || void 0 !== r.getAttributeNode && r.getAttributeNode("id").nodeValue === e[1] ? [r] : void 0 : []
                                }
                            }, p.filter.ID = function(e, t) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return 1 === e.nodeType && n && n.nodeValue === t
                            }), r.removeChild(e), r = e = null
                        }(), (b = t.createElement("div")).appendChild(t.createComment("")), b.getElementsByTagName("*").length > 0 && (p.find.TAG = function(e, t) {
                            var n = t.getElementsByTagName(e[1]);
                            if ("*" === e[1]) {
                                for (var r = [], i = 0; n[i]; i++) 1 === n[i].nodeType && r.push(n[i]);
                                n = r
                            }
                            return n
                        }), b.innerHTML = "<a href='#'></a>",
                        b.firstChild && void 0 !== b.firstChild.getAttribute && "#" !== b.firstChild.getAttribute("href") && (p.attrHandle.href = function(e) {
                            return e.getAttribute("href", 2)
                        }), b = null, t.querySelectorAll && function() {
                            var e = d,
                                n = t.createElement("div");
                            if (n.innerHTML = "<p class='TEST'></p>", !n.querySelectorAll || 0 !== n.querySelectorAll(".TEST").length) {
                                for (var r in d = function(n, r, i, o) {
                                        if (r = r || t, !o && !d.isXML(r)) {
                                            var a = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(n);
                                            if (a && (1 === r.nodeType || 9 === r.nodeType)) {
                                                if (a[1]) return x(r.getElementsByTagName(n), i);
                                                if (a[2] && p.find.CLASS && r.getElementsByClassName) return x(r.getElementsByClassName(a[2]), i)
                                            }
                                            if (9 === r.nodeType) {
                                                if ("body" === n && r.body) return x([r.body], i);
                                                if (a && a[3]) {
                                                    var s = r.getElementById(a[3]);
                                                    if (!s || !s.parentNode) return x([], i);
                                                    if (s.id === a[3]) return x([s], i)
                                                }
                                                try {
                                                    return x(r.querySelectorAll(n), i)
                                                } catch (e) {}
                                            } else if (1 === r.nodeType && "object" !== r.nodeName.toLowerCase()) {
                                                var l = r,
                                                    u = r.getAttribute("id"),
                                                    c = u || "__sizzle__",
                                                    f = r.parentNode,
                                                    h = /^\s*[+~]/.test(n);
                                                u ? c = c.replace(/'/g, "\\$&") : r.setAttribute("id", c), h && f && (r = r.parentNode);
                                                try {
                                                    if (!h || f) return x(r.querySelectorAll("[id='" + c + "'] " + n), i)
                                                } catch (e) {} finally {
                                                    u || l.removeAttribute("id")
                                                }
                                            }
                                        }
                                        return e(n, r, i, o)
                                    }, e) d[r] = e[r];
                                n = null
                            }
                        }(),
                        function() {
                            var e = t.documentElement,
                                n = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
                            if (n) {
                                var r = !n.call(t.createElement("div"), "div"),
                                    i = !1;
                                try {
                                    n.call(t.documentElement, "[test!='']:sizzle")
                                } catch (e) {
                                    i = !0
                                }
                                d.matchesSelector = function(e, t) {
                                    if (t = t.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !d.isXML(e)) try {
                                        if (i || !p.match.PSEUDO.test(t) && !/!=/.test(t)) {
                                            var o = n.call(e, t);
                                            if (o || !r || e.document && 11 !== e.document.nodeType) return o
                                        }
                                    } catch (e) {}
                                    return d(t, null, null, [e]).length > 0
                                }
                            }
                        }(),
                        function() {
                            var e = t.createElement("div");
                            e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length && (e.lastChild.className = "e", 1 !== e.getElementsByClassName("e").length && (p.order.splice(1, 0, "CLASS"), p.find.CLASS = function(e, t, n) {
                                if (void 0 !== t.getElementsByClassName && !n) return t.getElementsByClassName(e[1])
                            }, e = null))
                        }(), t.documentElement.contains ? d.contains = function(e, t) {
                            return e !== t && (!e.contains || e.contains(t))
                        } : t.documentElement.compareDocumentPosition ? d.contains = function(e, t) {
                            return !!(16 & e.compareDocumentPosition(t))
                        } : d.contains = function() {
                            return !1
                        }, d.isXML = function(e) {
                            var t = (e ? e.ownerDocument || e : 0).documentElement;
                            return !!t && "HTML" !== t.nodeName
                        };
                    var N = function(e, t, n) {
                        for (var r, i = [], o = "", a = t.nodeType ? [t] : t; r = p.match.PSEUDO.exec(e);) o += r[0], e = e.replace(p.match.PSEUDO, "");
                        e = p.relative[e] ? e + "*" : e;
                        for (var s = 0, l = a.length; s < l; s++) d(e, a[s], i, n);
                        return d.filter(o, i)
                    };
                    d.attr = i.attr, d.selectors.attrMap = {}, i.find = d, i.expr = d.selectors, i.expr[":"] = i.expr.filters, i.unique = d.uniqueSort, i.text = d.getText, i.isXMLDoc = d.isXML, i.contains = d.contains
                }();
            var H = /Until$/,
                O = /^(?:parents|prevUntil|prevAll)/,
                B = /,/,
                P = /^.[^:#\[\.,]*$/,
                q = Array.prototype.slice,
                W = i.expr.match.globalPOS,
                I = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function $(e) {
                return !e || !e.parentNode || 11 === e.parentNode.nodeType
            }

            function R(e, t, n) {
                if (t = t || 0, i.isFunction(t)) return i.grep(e, (function(e, r) {
                    return !!t.call(e, r, e) === n
                }));
                if (t.nodeType) return i.grep(e, (function(e, r) {
                    return e === t === n
                }));
                if ("string" == typeof t) {
                    var r = i.grep(e, (function(e) {
                        return 1 === e.nodeType
                    }));
                    if (P.test(t)) return i.filter(t, r, !n);
                    t = i.filter(t, r)
                }
                return i.grep(e, (function(e, r) {
                    return i.inArray(e, t) >= 0 === n
                }))
            }

            function X(e) {
                var t = z.split("|"),
                    n = e.createDocumentFragment();
                if (n.createElement)
                    for (; t.length;) n.createElement(t.pop());
                return n
            }
            i.fn.extend({
                find: function(e) {
                    var t, n, r = this;
                    if ("string" != typeof e) return i(e).filter((function() {
                        for (t = 0, n = r.length; t < n; t++)
                            if (i.contains(r[t], this)) return !0
                    }));
                    var o, a, s, l = this.pushStack("", "find", e);
                    for (t = 0, n = this.length; t < n; t++)
                        if (o = l.length, i.find(e, this[t], l), t > 0)
                            for (a = o; a < l.length; a++)
                                for (s = 0; s < o; s++)
                                    if (l[s] === l[a]) {
                                        l.splice(a--, 1);
                                        break
                                    }
                    return l
                },
                has: function(e) {
                    var t = i(e);
                    return this.filter((function() {
                        for (var e = 0, n = t.length; e < n; e++)
                            if (i.contains(this, t[e])) return !0
                    }))
                },
                not: function(e) {
                    return this.pushStack(R(this, e, !1), "not", e)
                },
                filter: function(e) {
                    return this.pushStack(R(this, e, !0), "filter", e)
                },
                is: function(e) {
                    return !!e && ("string" == typeof e ? W.test(e) ? i(e, this.context).index(this[0]) >= 0 : i.filter(e, this).length > 0 : this.filter(e).length > 0)
                },
                closest: function(e, t) {
                    var n, r, o = [],
                        a = this[0];
                    if (i.isArray(e)) {
                        for (var s = 1; a && a.ownerDocument && a !== t;) {
                            for (n = 0; n < e.length; n++) i(a).is(e[n]) && o.push({
                                selector: e[n],
                                elem: a,
                                level: s
                            });
                            a = a.parentNode, s++
                        }
                        return o
                    }
                    var l = W.test(e) || "string" != typeof e ? i(e, t || this.context) : 0;
                    for (n = 0, r = this.length; n < r; n++)
                        for (a = this[n]; a;) {
                            if (l ? l.index(a) > -1 : i.find.matchesSelector(a, e)) {
                                o.push(a);
                                break
                            }
                            if (!(a = a.parentNode) || !a.ownerDocument || a === t || 11 === a.nodeType) break
                        }
                    return o = o.length > 1 ? i.unique(o) : o, this.pushStack(o, "closest", e)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? i.inArray(this[0], i(e)) : i.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
                },
                add: function(e, t) {
                    var n = "string" == typeof e ? i(e, t) : i.makeArray(e && e.nodeType ? [e] : e),
                        r = i.merge(this.get(), n);
                    return this.pushStack($(n[0]) || $(r[0]) ? r : i.unique(r))
                },
                andSelf: function() {
                    return this.add(this.prevObject)
                }
            }), i.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return i.dir(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return i.dir(e, "parentNode", n)
                },
                next: function(e) {
                    return i.nth(e, 2, "nextSibling")
                },
                prev: function(e) {
                    return i.nth(e, 2, "previousSibling")
                },
                nextAll: function(e) {
                    return i.dir(e, "nextSibling")
                },
                prevAll: function(e) {
                    return i.dir(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return i.dir(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return i.dir(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return i.sibling((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return i.sibling(e.firstChild)
                },
                contents: function(e) {
                    return i.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : i.makeArray(e.childNodes)
                }
            }, (function(e, t) {
                i.fn[e] = function(n, r) {
                    var o = i.map(this, t, n);
                    return H.test(e) || (r = n), r && "string" == typeof r && (o = i.filter(r, o)), o = this.length > 1 && !I[e] ? i.unique(o) : o,
                        (this.length > 1 || B.test(r)) && O.test(e) && (o = o.reverse()), this.pushStack(o, e, q.call(arguments).join(","))
                }
            })), i.extend({
                filter: function(e, t, n) {
                    return n && (e = ":not(" + e + ")"), 1 === t.length ? i.find.matchesSelector(t[0], e) ? [t[0]] : [] : i.find.matches(e, t)
                },
                dir: function(e, t, n) {
                    for (var r = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !i(o).is(n));) 1 === o.nodeType && r.push(o), o = o[t];
                    return r
                },
                nth: function(e, t, n, r) {
                    t = t || 1;
                    for (var i = 0; e && (1 !== e.nodeType || ++i !== t); e = e[n]);
                    return e
                },
                sibling: function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            });
            var z = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                V = / jQuery\d+="(?:\d+|null)"/g,
                U = /^\s+/,
                G = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                Y = /<([\w:]+)/,
                J = /<tbody/i,
                K = /<|&#?\w+;/,
                Q = /<(?:script|style)/i,
                Z = /<(?:script|object|embed|option|style)/i,
                ee = new RegExp("<(?:" + z + ")[\\s/>]", "i"),
                te = /checked\s*(?:[^=]|=\s*.checked.)/i,
                ne = /\/(java|ecma)script/i,
                re = /^\s*<!(?:\[CDATA\[|\-\-)/,
                ie = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    area: [1, "<map>", "</map>"],
                    _default: [0, "", ""]
                },
                oe = X(t);

            function ae(e, t) {
                return i.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function se(e, t) {
                if (1 === t.nodeType && i.hasData(e)) {
                    var n, r, o, a = i._data(e),
                        s = i._data(t, a),
                        l = a.events;
                    if (l)
                        for (n in delete s.handle, s.events = {}, l)
                            for (r = 0, o = l[n].length; r < o; r++) i.event.add(t, n, l[n][r]);
                    s.data && (s.data = i.extend({}, s.data))
                }
            }

            function le(e, t) {
                var n;
                1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), "object" === (n = t.nodeName.toLowerCase()) ? t.outerHTML = e.outerHTML : "input" !== n || "checkbox" !== e.type && "radio" !== e.type ? "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(i.expando), t.removeAttribute("_submit_attached"), t.removeAttribute("_change_attached"))
            }

            function ue(e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName("*") : void 0 !== e.querySelectorAll ? e.querySelectorAll("*") : []
            }

            function ce(e) {
                "checkbox" !== e.type && "radio" !== e.type || (e.defaultChecked = e.checked)
            }

            function de(e) {
                var t = (e.nodeName || "").toLowerCase();
                "input" === t ? ce(e) : "script" !== t && void 0 !== e.getElementsByTagName && i.grep(e.getElementsByTagName("input"), ce)
            }
            ie.optgroup = ie.option, ie.tbody = ie.tfoot = ie.colgroup = ie.caption = ie.thead, ie.th = ie.td, i.support.htmlSerialize || (ie._default = [1, "div<div>", "</div>"]), i.fn.extend({
                text: function(e) {
                    return i.access(this, (function(e) {
                        return void 0 === e ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || t).createTextNode(e))
                    }), null, e, arguments.length)
                },
                wrapAll: function(e) {
                    if (i.isFunction(e)) return this.each((function(t) {
                        i(this).wrapAll(e.call(this, t))
                    }));
                    if (this[0]) {
                        var t = i(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                            return e
                        })).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    return i.isFunction(e) ? this.each((function(t) {
                        i(this).wrapInner(e.call(this, t))
                    })) : this.each((function() {
                        var t = i(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    }))
                },
                wrap: function(e) {
                    var t = i.isFunction(e);
                    return this.each((function(n) {
                        i(this).wrapAll(t ? e.call(this, n) : e)
                    }))
                },
                unwrap: function() {
                    return this.parent().each((function() {
                        i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
                    })).end()
                },
                append: function() {
                    return this.domManip(arguments, !0, (function(e) {
                        1 === this.nodeType && this.appendChild(e)
                    }))
                },
                prepend: function() {
                    return this.domManip(arguments, !0, (function(e) {
                        1 === this.nodeType && this.insertBefore(e, this.firstChild)
                    }))
                },
                before: function() {
                    if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, (function(e) {
                        this.parentNode.insertBefore(e, this)
                    }));
                    if (arguments.length) {
                        var e = i.clean(arguments);
                        return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
                    }
                },
                after: function() {
                    if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, (function(e) {
                        this.parentNode.insertBefore(e, this.nextSibling)
                    }));
                    if (arguments.length) {
                        var e = this.pushStack(this, "after", arguments);
                        return e.push.apply(e, i.clean(arguments)), e
                    }
                },
                remove: function(e, t) {
                    for (var n, r = 0; null != (n = this[r]); r++) e && !i.filter(e, [n]).length || (t || 1 !== n.nodeType || (i.cleanData(n.getElementsByTagName("*")), i.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
                    return this
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++)
                        for (1 === e.nodeType && i.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map((function() {
                        return i.clone(this, e, t)
                    }))
                },
                html: function(e) {
                    return i.access(this, (function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(V, "") : null;
                        if ("string" == typeof e && !Q.test(e) && (i.support.leadingWhitespace || !U.test(e)) && !ie[(Y.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(G, "<$1></$2>");
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (i.cleanData(t.getElementsByTagName("*")), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }), null, e, arguments.length)
                },
                replaceWith: function(e) {
                    return this[0] && this[0].parentNode ? i.isFunction(e) ? this.each((function(t) {
                        var n = i(this),
                            r = n.html();
                        n.replaceWith(e.call(this, t, r))
                    })) : ("string" != typeof e && (e = i(e).detach()), this.each((function() {
                        var t = this.nextSibling,
                            n = this.parentNode;
                        i(this).remove(), t ? i(t).before(e) : i(n).append(e)
                    }))) : this.length ? this.pushStack(i(i.isFunction(e) ? e() : e), "replaceWith", e) : this
                },
                detach: function(e) {
                    return this.remove(e, !0)
                },
                domManip: function(e, t, n) {
                    var r, o, a, s, l = e[0],
                        u = [];
                    if (!i.support.checkClone && 3 === arguments.length && "string" == typeof l && te.test(l)) return this.each((function() {
                        i(this).domManip(e, t, n, !0)
                    }));
                    if (i.isFunction(l)) return this.each((function(r) {
                        var o = i(this);
                        e[0] = l.call(this, r, t ? o.html() : void 0), o.domManip(e, t, n)
                    }));
                    if (this[0]) {
                        if (s = l && l.parentNode, o = 1 === (a = (r = i.support.parentNode && s && 11 === s.nodeType && s.childNodes.length === this.length ? {
                                fragment: s
                            } : i.buildFragment(e, this, u)).fragment).childNodes.length ? a = a.firstChild : a.firstChild) {
                            t = t && i.nodeName(o, "tr");
                            for (var c = 0, d = this.length, f = d - 1; c < d; c++) n.call(t ? ae(this[c], o) : this[c], r.cacheable || d > 1 && c < f ? i.clone(a, !0, !0) : a)
                        }
                        u.length && i.each(u, (function(e, t) {
                            t.src ? i.ajax({
                                type: "GET",
                                global: !1,
                                url: t.src,
                                async: !1,
                                dataType: "script"
                            }) : i.globalEval((t.text || t.textContent || t.innerHTML || "").replace(re, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
                        }))
                    }
                    return this
                }
            }), i.buildFragment = function(e, n, r) {
                var o, a, s, l, u = e[0];
                return n && n[0] && (l = n[0].ownerDocument || n[0]), l.createDocumentFragment || (l = t), !(1 === e.length && "string" == typeof u && u.length < 512 && l === t && "<" === u.charAt(0)) || Z.test(u) || !i.support.checkClone && te.test(u) || !i.support.html5Clone && ee.test(u) || (a = !0, (s = i.fragments[u]) && 1 !== s && (o = s)), o || (o = l.createDocumentFragment(), i.clean(e, l, o, r)), a && (i.fragments[u] = s ? o : 1), {
                    fragment: o,
                    cacheable: a
                }
            }, i.fragments = {}, i.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(e, t) {
                i.fn[e] = function(n) {
                    var r = [],
                        o = i(n),
                        a = 1 === this.length && this[0].parentNode;
                    if (a && 11 === a.nodeType && 1 === a.childNodes.length && 1 === o.length) return o[t](this[0]), this;
                    for (var s = 0, l = o.length; s < l; s++) {
                        var u = (s > 0 ? this.clone(!0) : this).get();
                        i(o[s])[t](u), r = r.concat(u)
                    }
                    return this.pushStack(r, e, o.selector)
                }
            })), i.extend({
                clone: function(e, n, r) {
                    var o, a, s, l = i.support.html5Clone || i.isXMLDoc(e) || !ee.test("<" + e.nodeName + ">") ? e.cloneNode(!0) : function(e) {
                        var n = t.createElement("div");
                        return oe.appendChild(n), n.innerHTML = e.outerHTML, n.firstChild
                    }(e);
                    if (!(i.support.noCloneEvent && i.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || i.isXMLDoc(e)))
                        for (le(e, l), o = ue(e), a = ue(l), s = 0; o[s]; ++s) a[s] && le(o[s], a[s]);
                    if (n && (se(e, l), r))
                        for (o = ue(e), a = ue(l), s = 0; o[s]; ++s) se(o[s], a[s]);
                    return o = a = null, l
                },
                clean: function(e, n, r, o) {
                    var a, s, l, u = [];
                    void 0 === (n = n || t).createElement && (n = n.ownerDocument || n[0] && n[0].ownerDocument || t);
                    for (var c, d = 0; null != (c = e[d]); d++)
                        if ("number" == typeof c && (c += ""), c) {
                            if ("string" == typeof c)
                                if (K.test(c)) {
                                    c = c.replace(G, "<$1></$2>");
                                    var f, p = (Y.exec(c) || ["", ""])[1].toLowerCase(),
                                        h = ie[p] || ie._default,
                                        m = h[0],
                                        g = n.createElement("div"),
                                        v = oe.childNodes;
                                    for (n === t ? oe.appendChild(g) : X(n).appendChild(g), g.innerHTML = h[1] + c + h[2]; m--;) g = g.lastChild;
                                    if (!i.support.tbody) {
                                        var y = J.test(c),
                                            b = "table" !== p || y ? "<table>" !== h[1] || y ? [] : g.childNodes : g.firstChild && g.firstChild.childNodes;
                                        for (l = b.length - 1; l >= 0; --l) i.nodeName(b[l], "tbody") && !b[l].childNodes.length && b[l].parentNode.removeChild(b[l])
                                    }!i.support.leadingWhitespace && U.test(c) && g.insertBefore(n.createTextNode(U.exec(c)[0]), g.firstChild),
                                        c = g.childNodes, g && (g.parentNode.removeChild(g), v.length > 0 && (f = v[v.length - 1]) && f.parentNode && f.parentNode.removeChild(f))
                                } else c = n.createTextNode(c);
                            var x;
                            if (!i.support.appendChecked)
                                if (c[0] && "number" == typeof(x = c.length))
                                    for (l = 0; l < x; l++) de(c[l]);
                                else de(c);
                            c.nodeType ? u.push(c) : u = i.merge(u, c)
                        }
                    if (r)
                        for (a = function(e) {
                                return !e.type || ne.test(e.type)
                            }, d = 0; u[d]; d++)
                            if (s = u[d], o && i.nodeName(s, "script") && (!s.type || ne.test(s.type))) o.push(s.parentNode ? s.parentNode.removeChild(s) : s);
                            else {
                                if (1 === s.nodeType) {
                                    var w = i.grep(s.getElementsByTagName("script"), a);
                                    u.splice.apply(u, [d + 1, 0].concat(w))
                                }
                                r.appendChild(s)
                            }
                    return u
                },
                cleanData: function(e) {
                    for (var t, n, r, o = i.cache, a = i.event.special, s = i.support.deleteExpando, l = 0; null != (r = e[l]); l++)
                        if ((!r.nodeName || !i.noData[r.nodeName.toLowerCase()]) && (n = r[i.expando])) {
                            if ((t = o[n]) && t.events) {
                                for (var u in t.events) a[u] ? i.event.remove(r, u) : i.removeEvent(r, u, t.handle);
                                t.handle && (t.handle.elem = null)
                            }
                            s ? delete r[i.expando] : r.removeAttribute && r.removeAttribute(i.expando), delete o[n]
                        }
                }
            });
            var fe, pe, he, me = /alpha\([^)]*\)/i,
                ge = /opacity=([^)]*)/,
                ve = /([A-Z]|^ms)/g,
                ye = /^[\-+]?(?:\d*\.)?\d+$/i,
                be = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
                xe = /^([\-+])=([\-+.\de]+)/,
                we = /^margin/,
                Te = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Ne = ["Top", "Right", "Bottom", "Left"];

            function Ce(e, t, n) {
                var r = "width" === t ? e.offsetWidth : e.offsetHeight,
                    o = "width" === t ? 1 : 0;
                if (r > 0) {
                    if ("border" !== n)
                        for (; o < 4; o += 2) n || (r -= parseFloat(i.css(e, "padding" + Ne[o])) || 0), "margin" === n ? r += parseFloat(i.css(e, n + Ne[o])) || 0 : r -= parseFloat(i.css(e, "border" + Ne[o] + "Width")) || 0;
                    return r + "px"
                }
                if (((r = fe(e, t)) < 0 || null == r) && (r = e.style[t]), be.test(r)) return r;
                if (r = parseFloat(r) || 0, n)
                    for (; o < 4; o += 2) r += parseFloat(i.css(e, "padding" + Ne[o])) || 0, "padding" !== n && (r += parseFloat(i.css(e, "border" + Ne[o] + "Width")) || 0), "margin" === n && (r += parseFloat(i.css(e, n + Ne[o])) || 0);
                return r + "px"
            }
            i.fn.css = function(e, t) {
                    return i.access(this, (function(e, t, n) {
                        return void 0 !== n ? i.style(e, t, n) : i.css(e, t)
                    }), e, t, arguments.length > 1)
                }, i.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = fe(e, "opacity");
                                    return "" === n ? "1" : n
                                }
                                return e.style.opacity
                            }
                        }
                    },
                    cssNumber: {
                        fillOpacity: !0,
                        fontWeight: !0,
                        lineHeight: !0,
                        opacity: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {
                        float: i.support.cssFloat ? "cssFloat" : "styleFloat"
                    },
                    style: function(e, t, n, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var o, a, s = i.camelCase(t),
                                l = e.style,
                                u = i.cssHooks[s];
                            if (t = i.cssProps[s] || s, void 0 === n) return u && "get" in u && void 0 !== (o = u.get(e, !1, r)) ? o : l[t];
                            if (!("string" === (a = typeof n) && (o = xe.exec(n)) && (n = +(o[1] + 1) * +o[2] + parseFloat(i.css(e, t)), a = "number"), null == n || "number" === a && isNaN(n) || ("number" !== a || i.cssNumber[s] || (n += "px"), u && "set" in u && void 0 === (n = u.set(e, n))))) try {
                                l[t] = n
                            } catch (e) {}
                        }
                    },
                    css: function(e, t, n) {
                        var r, o;
                        return t = i.camelCase(t), o = i.cssHooks[t], "cssFloat" === (t = i.cssProps[t] || t) && (t = "float"), o && "get" in o && void 0 !== (r = o.get(e, !0, n)) ? r : fe ? fe(e, t) : void 0
                    },
                    swap: function(e, t, n) {
                        var r, i, o = {};
                        for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                        for (i in r = n.call(e), t) e.style[i] = o[i];
                        return r
                    }
                }), i.curCSS = i.css,
                t.defaultView && t.defaultView.getComputedStyle && (pe = function(e, t) {
                    var n, r, o, a, s = e.style;
                    return t = t.replace(ve, "-$1").toLowerCase(), (r = e.ownerDocument.defaultView) && (o = r.getComputedStyle(e, null)) && ("" !== (n = o.getPropertyValue(t)) || i.contains(e.ownerDocument.documentElement, e) || (n = i.style(e, t))), !i.support.pixelMargin && o && we.test(t) && be.test(n) && (a = s.width, s.width = n, n = o.width, s.width = a), n
                }), t.documentElement.currentStyle && (he = function(e, t) {
                    var n, r, i, o = e.currentStyle && e.currentStyle[t],
                        a = e.style;
                    return null == o && a && (i = a[t]) && (o = i), be.test(o) && (n = a.left, (r = e.runtimeStyle && e.runtimeStyle.left) && (e.runtimeStyle.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : o, o = a.pixelLeft + "px", a.left = n, r && (e.runtimeStyle.left = r)), "" === o ? "auto" : o
                }), fe = pe || he, i.each(["height", "width"], (function(e, t) {
                    i.cssHooks[t] = {
                        get: function(e, n, r) {
                            if (n) return 0 !== e.offsetWidth ? Ce(e, t, r) : i.swap(e, Te, (function() {
                                return Ce(e, t, r)
                            }))
                        },
                        set: function(e, t) {
                            return ye.test(t) ? t + "px" : t
                        }
                    }
                })), i.support.opacity || (i.cssHooks.opacity = {
                    get: function(e, t) {
                        return ge.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
                    },
                    set: function(e, t) {
                        var n = e.style,
                            r = e.currentStyle,
                            o = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                            a = r && r.filter || n.filter || "";
                        n.zoom = 1, t >= 1 && "" === i.trim(a.replace(me, "")) && (n.removeAttribute("filter"), r && !r.filter) || (n.filter = me.test(a) ? a.replace(me, o) : a + " " + o)
                    }
                }), i((function() {
                    i.support.reliableMarginRight || (i.cssHooks.marginRight = {
                        get: function(e, t) {
                            return i.swap(e, {
                                display: "inline-block"
                            }, (function() {
                                return t ? fe(e, "margin-right") : e.style.marginRight
                            }))
                        }
                    })
                })), i.expr && i.expr.filters && (i.expr.filters.hidden = function(e) {
                    var t = e.offsetWidth,
                        n = e.offsetHeight;
                    return 0 === t && 0 === n || !i.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || i.css(e, "display"))
                }, i.expr.filters.visible = function(e) {
                    return !i.expr.filters.hidden(e)
                }), i.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(e, t) {
                    i.cssHooks[e + t] = {
                        expand: function(n) {
                            var r, i = "string" == typeof n ? n.split(" ") : [n],
                                o = {};
                            for (r = 0; r < 4; r++) o[e + Ne[r] + t] = i[r] || i[r - 2] || i[0];
                            return o
                        }
                    }
                }));
            var ke, Ee, Se = /%20/g,
                Ae = /\[\]$/,
                Le = /\r?\n/g,
                De = /#.*$/,
                je = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                Fe = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
                Me = /^(?:GET|HEAD)$/,
                _e = /^\/\//,
                He = /\?/,
                Oe = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                Be = /^(?:select|textarea)/i,
                Pe = /\s+/,
                qe = /([?&])_=[^&]*/,
                We = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
                Ie = i.fn.load,
                $e = {},
                Re = {},
                Xe = ["*/"] + ["*"];
            try {
                ke = r.href
            } catch (e) {
                (ke = t.createElement("a")).href = "", ke = ke.href
            }

            function ze(e) {
                return function(t, n) {
                    if ("string" != typeof t && (n = t, t = "*"), i.isFunction(n))
                        for (var r, o, a = t.toLowerCase().split(Pe), s = 0, l = a.length; s < l; s++) r = a[s], (o = /^\+/.test(r)) && (r = r.substr(1) || "*"), (e[r] = e[r] || [])[o ? "unshift" : "push"](n)
                }
            }

            function Ve(e, t, n, r, i, o) {
                (o = o || {})[i = i || t.dataTypes[0]] = !0;
                for (var a, s = e[i], l = 0, u = s ? s.length : 0, c = e === $e; l < u && (c || !a); l++) "string" == typeof(a = s[l](t, n, r)) && (!c || o[a] ? a = void 0 : (t.dataTypes.unshift(a), a = Ve(e, t, n, r, a, o)));
                return !c && a || o["*"] || (a = Ve(e, t, n, r, "*", o)), a
            }

            function Ue(e, t) {
                var n, r, o = i.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
                r && i.extend(!0, e, r)
            }

            function Ge(e, t, n, r) {
                if (i.isArray(t)) i.each(t, (function(t, i) {
                    n || Ae.test(e) ? r(e, i) : Ge(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
                }));
                else if (n || "object" !== i.type(t)) r(e, t);
                else
                    for (var o in t) Ge(e + "[" + o + "]", t[o], n, r)
            }
            Ee = We.exec(ke.toLowerCase()) || [], i.fn.extend({
                load: function(e, t, n) {
                    if ("string" != typeof e && Ie) return Ie.apply(this, arguments);
                    if (!this.length) return this;
                    var r = e.indexOf(" ");
                    if (r >= 0) {
                        var o = e.slice(r, e.length);
                        e = e.slice(0, r)
                    }
                    var a = "GET";
                    t && (i.isFunction(t) ? (n = t, t = void 0) : "object" == typeof t && (t = i.param(t, i.ajaxSettings.traditional), a = "POST"));
                    var s = this;
                    return i.ajax({
                        url: e,
                        type: a,
                        dataType: "html",
                        data: t,
                        complete: function(e, t, r) {
                            r = e.responseText, e.isResolved() && (e.done((function(e) {
                                r = e
                            })), s.html(o ? i("<div>").append(r.replace(Oe, "")).find(o) : r)), n && s.each(n, [r, t, e])
                        }
                    }), this
                },
                serialize: function() {
                    return i.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map((function() {
                        return this.elements ? i.makeArray(this.elements) : this
                    })).filter((function() {
                        return this.name && !this.disabled && (this.checked || Be.test(this.nodeName) || Fe.test(this.type))
                    })).map((function(e, t) {
                        var n = i(this).val();
                        return null == n ? null : i.isArray(n) ? i.map(n, (function(e, n) {
                            return {
                                name: t.name,
                                value: e.replace(Le, "\r\n")
                            }
                        })) : {
                            name: t.name,
                            value: n.replace(Le, "\r\n")
                        }
                    })).get()
                }
            }), i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), (function(e, t) {
                i.fn[t] = function(e) {
                    return this.on(t, e)
                }
            })), i.each(["get", "post"], (function(e, t) {
                i[t] = function(e, n, r, o) {
                    return i.isFunction(n) && (o = o || r, r = n, n = void 0), i.ajax({
                        type: t,
                        url: e,
                        data: n,
                        success: r,
                        dataType: o
                    })
                }
            })), i.extend({
                getScript: function(e, t) {
                    return i.get(e, void 0, t, "script")
                },
                getJSON: function(e, t, n) {
                    return i.get(e, t, n, "json")
                },
                ajaxSetup: function(e, t) {
                    return t ? Ue(e, i.ajaxSettings) : (t = e, e = i.ajaxSettings), Ue(e, t), e
                },
                ajaxSettings: {
                    url: ke,
                    isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(Ee[1]),
                    global: !0,
                    type: "GET",
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    processData: !0,
                    async: !0,
                    accepts: {
                        xml: "application/xml, text/xml",
                        html: "text/html",
                        text: "text/plain",
                        json: "application/json, text/javascript",
                        "*": Xe
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText"
                    },
                    converters: {
                        "* text": window.String,
                        "text html": !0,
                        "text json": i.parseJSON,
                        "text xml": i.parseXML
                    },
                    flatOptions: {
                        context: !0,
                        url: !0
                    }
                },
                ajaxPrefilter: ze($e),
                ajaxTransport: ze(Re),
                ajax: function(e, t) {
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var n, r, o, a, s, l, u, c, d = i.ajaxSetup({}, t),
                        f = d.context || d,
                        p = f !== d && (f.nodeType || f instanceof i) ? i(f) : i.event,
                        h = i.Deferred(),
                        m = i.Callbacks("once memory"),
                        g = d.statusCode || {},
                        v = {},
                        y = {},
                        b = 0,
                        x = {
                            readyState: 0,
                            setRequestHeader: function(e, t) {
                                if (!b) {
                                    var n = e.toLowerCase();
                                    e = y[n] = y[n] || e, v[e] = t
                                }
                                return this
                            },
                            getAllResponseHeaders: function() {
                                return 2 === b ? r : null
                            },
                            getResponseHeader: function(e) {
                                var t;
                                if (2 === b) {
                                    if (!o)
                                        for (o = {}; t = je.exec(r);) o[t[1].toLowerCase()] = t[2];
                                    t = o[e.toLowerCase()]
                                }
                                return void 0 === t ? null : t
                            },
                            overrideMimeType: function(e) {
                                return b || (d.mimeType = e), this
                            },
                            abort: function(e) {
                                return e = e || "abort", a && a.abort(e), w(0, e), this
                            }
                        };

                    function w(e, t, o, l) {
                        if (2 !== b) {
                            b = 2, s && clearTimeout(s), a = void 0, r = l || "", x.readyState = e > 0 ? 4 : 0;
                            var c, v, y, w, T, N = t,
                                C = o ? function(e, t, n) {
                                    var r, i, o, a, s = e.contents,
                                        l = e.dataTypes,
                                        u = e.responseFields;
                                    for (i in u) i in n && (t[u[i]] = n[i]);
                                    for (;
                                        "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("content-type"));
                                    if (r)
                                        for (i in s)
                                            if (s[i] && s[i].test(r)) {
                                                l.unshift(i);
                                                break
                                            }
                                    if (l[0] in n) o = l[0];
                                    else {
                                        for (i in n) {
                                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                                o = i;
                                                break
                                            }
                                            a || (a = i)
                                        }
                                        o = o || a
                                    }
                                    if (o) return o !== l[0] && l.unshift(o), n[o]
                                }(d, x, o) : void 0;
                            if (e >= 200 && e < 300 || 304 === e)
                                if (d.ifModified && ((w = x.getResponseHeader("Last-Modified")) && (i.lastModified[n] = w), (T = x.getResponseHeader("Etag")) && (i.etag[n] = T)), 304 === e) N = "notmodified", c = !0;
                                else try {
                                    v = function(e, t) {
                                        e.dataFilter && (t = e.dataFilter(t, e.dataType));
                                        var n, r, o, a, s, l, u, c, d = e.dataTypes,
                                            f = {},
                                            p = d.length,
                                            h = d[0];
                                        for (n = 1; n < p; n++) {
                                            if (1 === n)
                                                for (r in e.converters) "string" == typeof r && (f[r.toLowerCase()] = e.converters[r]);
                                            if (a = h, "*" === (h = d[n])) h = a;
                                            else if ("*" !== a && a !== h) {
                                                if (!(l = f[s = a + " " + h] || f["* " + h]))
                                                    for (u in c = void 0, f)
                                                        if (((o = u.split(" "))[0] === a || "*" === o[0]) && (c = f[o[1] + " " + h])) {
                                                            !0 === (u = f[u]) ? l = c : !0 === c && (l = u);
                                                            break
                                                        }
                                                l || c || i.error("No conversion from " + s.replace(" ", " to ")), !0 !== l && (t = l ? l(t) : c(u(t)))
                                            }
                                        }
                                        return t
                                    }(d, C), N = "success", c = !0
                                } catch (e) {
                                    N = "parsererror", y = e
                                } else y = N, N && !e || (N = "error", e < 0 && (e = 0));
                            x.status = e, x.statusText = "" + (t || N), c ? h.resolveWith(f, [v, N, x]) : h.rejectWith(f, [x, N, y]), x.statusCode(g), g = void 0, u && p.trigger("ajax" + (c ? "Success" : "Error"), [x, d, c ? v : y]), m.fireWith(f, [x, N]), u && (p.trigger("ajaxComplete", [x, d]), --i.active || i.event.trigger("ajaxStop"))
                        }
                    }
                    if (h.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function(e) {
                            var t;
                            if (e)
                                if (b < 2)
                                    for (t in e) g[t] = [g[t], e[t]];
                                else t = e[x.status], x.then(t, t);
                            return this
                        }, d.url = ((e || d.url) + "").replace(De, "").replace(_e, Ee[1] + "//"), d.dataTypes = i.trim(d.dataType || "*").toLowerCase().split(Pe), null == d.crossDomain && (l = We.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] == Ee[1] && l[2] == Ee[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (Ee[3] || ("http:" === Ee[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = i.param(d.data, d.traditional)), Ve($e, d, t, x), 2 === b) return !1;
                    if (u = d.global, d.type = d.type.toUpperCase(), d.hasContent = !Me.test(d.type), u && 0 == i.active++ && i.event.trigger("ajaxStart"), !d.hasContent && (d.data && (d.url += (He.test(d.url) ? "&" : "?") + d.data, delete d.data), n = d.url, !1 === d.cache)) {
                        var T = i.now(),
                            N = d.url.replace(qe, "$1_=" + T);
                        d.url = N + (N === d.url ? (He.test(d.url) ? "&" : "?") + "_=" + T : "")
                    }
                    for (c in (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), d.ifModified && (n = n || d.url, i.lastModified[n] && x.setRequestHeader("If-Modified-Since", i.lastModified[n]), i.etag[n] && x.setRequestHeader("If-None-Match", i.etag[n])),
                        x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xe + "; q=0.01" : "") : d.accepts["*"]), d.headers) x.setRequestHeader(c, d.headers[c]);
                    if (d.beforeSend && (!1 === d.beforeSend.call(f, x, d) || 2 === b)) return x.abort(), !1;
                    for (c in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) x[c](d[c]);
                    if (a = Ve(Re, d, t, x)) {
                        x.readyState = 1, u && p.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (s = setTimeout((function() {
                            x.abort("timeout")
                        }), d.timeout));
                        try {
                            b = 1, a.send(v, w)
                        } catch (e) {
                            if (!(b < 2)) throw e;
                            w(-1, e)
                        }
                    } else w(-1, "No Transport");
                    return x
                },
                param: function(e, t) {
                    var n = [],
                        r = function(e, t) {
                            t = i.isFunction(t) ? t() : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                        };
                    if (void 0 === t && (t = i.ajaxSettings.traditional), i.isArray(e) || e.jquery && !i.isPlainObject(e)) i.each(e, (function() {
                        r(this.name, this.value)
                    }));
                    else
                        for (var o in e) Ge(o, e[o], t, r);
                    return n.join("&").replace(Se, "+")
                }
            }), i.extend({
                active: 0,
                lastModified: {},
                etag: {}
            });
            var Ye = i.now(),
                Je = /(\=)\?(&|$)|\?\?/i;
            i.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    return i.expando + "_" + Ye++
                }
            }), i.ajaxPrefilter("json jsonp", (function(e, t, n) {
                var r = "string" == typeof e.data && /^application\/x\-www\-form\-urlencoded/.test(e.contentType);
                if ("jsonp" === e.dataTypes[0] || !1 !== e.jsonp && (Je.test(e.url) || r && Je.test(e.data))) {
                    var o, a = e.jsonpCallback = i.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                        s = window[a],
                        l = e.url,
                        u = e.data,
                        c = "$1" + a + "$2";
                    return !1 !== e.jsonp && (l = l.replace(Je, c), e.url === l && (r && (u = u.replace(Je, c)), e.data === u && (l += (/\?/.test(l) ? "&" : "?") + e.jsonp + "=" + a))), e.url = l, e.data = u, window[a] = function(e) {
                        o = [e]
                    }, n.always((function() {
                        window[a] = s, o && i.isFunction(s) && window[a](o[0])
                    })), e.converters["script json"] = function() {
                        return o || i.error(a + " was not called"), o[0]
                    }, e.dataTypes[0] = "json", "script"
                }
            })), i.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /javascript|ecmascript/
                },
                converters: {
                    "text script": function(e) {
                        return i.globalEval(e), e
                    }
                }
            }), i.ajaxPrefilter("script", (function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
            })), i.ajaxTransport("script", (function(e) {
                if (e.crossDomain) {
                    var n, r = t.head || t.getElementsByTagName("head")[0] || t.documentElement;
                    return {
                        send: function(i, o) {
                            (n = t.createElement("script")).async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                                (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = void 0, t || o(200, "success"))
                            }, r.insertBefore(n, r.firstChild)
                        },
                        abort: function() {
                            n && n.onload(0, 1)
                        }
                    }
                }
            }));
            var Ke, Qe, Ze = !!window.ActiveXObject && function() {
                    for (var e in Ke) Ke[e](0, 1)
                },
                et = 0;

            function tt() {
                try {
                    return new window.XMLHttpRequest
                } catch (e) {}
            }
            i.ajaxSettings.xhr = window.ActiveXObject ? function() {
                    return !this.isLocal && tt() || function() {
                        try {
                            return new window.ActiveXObject("Microsoft.XMLHTTP")
                        } catch (e) {}
                    }()
                } : tt, Qe = i.ajaxSettings.xhr(), i.extend(i.support, {
                    ajax: !!Qe,
                    cors: !!Qe && "withCredentials" in Qe
                }),
                i.support.ajax && i.ajaxTransport((function(e) {
                    var t;
                    if (!e.crossDomain || i.support.cors) return {
                        send: function(n, r) {
                            var o, a, s = e.xhr();
                            if (e.username ? s.open(e.type, e.url, e.async, e.username, e.password) : s.open(e.type, e.url, e.async), e.xhrFields)
                                for (a in e.xhrFields) s[a] = e.xhrFields[a];
                            e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (a in n) s.setRequestHeader(a, n[a])
                            } catch (e) {}
                            s.send(e.hasContent && e.data || null), t = function(n, a) {
                                var l, u, c, d, f;
                                try {
                                    if (t && (a || 4 === s.readyState))
                                        if (t = void 0, o && (s.onreadystatechange = i.noop, Ze && delete Ke[o]), a) 4 !== s.readyState && s.abort();
                                        else {
                                            l = s.status, c = s.getAllResponseHeaders(), d = {}, (f = s.responseXML) && f.documentElement && (d.xml = f);
                                            try {
                                                d.text = s.responseText
                                            } catch (n) {}
                                            try {
                                                u = s.statusText
                                            } catch (e) {
                                                u = ""
                                            }
                                            l || !e.isLocal || e.crossDomain ? 1223 === l && (l = 204) : l = d.text ? 200 : 404
                                        }
                                } catch (e) {
                                    a || r(-1, e)
                                }
                                d && r(l, u, d, c)
                            }, e.async && 4 !== s.readyState ? (o = ++et, Ze && (Ke || (Ke = {}, i(window).unload(Ze)), Ke[o] = t), s.onreadystatechange = t) : t()
                        },
                        abort: function() {
                            t && t(0, 1)
                        }
                    }
                }));
            var nt, rt, it, ot, at = {},
                st = /^(?:toggle|show|hide)$/,
                lt = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
                ut = [
                    ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
                    ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
                    ["opacity"]
                ];

            function ct() {
                return setTimeout(dt, 0), ot = i.now()
            }

            function dt() {
                ot = void 0
            }

            function ft(e, t) {
                var n = {};
                return i.each(ut.concat.apply([], ut.slice(0, t)), (function() {
                    n[this] = e
                })), n
            }

            function pt(e) {
                if (!at[e]) {
                    var n = t.body,
                        r = i("<" + e + ">").appendTo(n),
                        o = r.css("display");
                    r.remove(), "none" !== o && "" !== o || (nt || ((nt = t.createElement("iframe")).frameBorder = nt.width = nt.height = 0), n.appendChild(nt), rt && nt.createElement || ((rt = (nt.contentWindow || nt.contentDocument).document).write((i.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), rt.close()), r = rt.createElement(e), rt.body.appendChild(r), o = i.css(r, "display"), n.removeChild(nt)), at[e] = o
                }
                return at[e]
            }
            i.fn.extend({
                show: function(e, t, n) {
                    var r, o;
                    if (e || 0 === e) return this.animate(ft("show", 3), e, t, n);
                    for (var a = 0, s = this.length; a < s; a++)(r = this[a]).style && (o = r.style.display, i._data(r, "olddisplay") || "none" !== o || (o = r.style.display = ""), ("" === o && "none" === i.css(r, "display") || !i.contains(r.ownerDocument.documentElement, r)) && i._data(r, "olddisplay", pt(r.nodeName)));
                    for (a = 0; a < s; a++)(r = this[a]).style && ("" !== (o = r.style.display) && "none" !== o || (r.style.display = i._data(r, "olddisplay") || ""));
                    return this
                },
                hide: function(e, t, n) {
                    if (e || 0 === e) return this.animate(ft("hide", 3), e, t, n);
                    for (var r, o, a = 0, s = this.length; a < s; a++)(r = this[a]).style && ("none" === (o = i.css(r, "display")) || i._data(r, "olddisplay") || i._data(r, "olddisplay", o));
                    for (a = 0; a < s; a++) this[a].style && (this[a].style.display = "none");
                    return this
                },
                _toggle: i.fn.toggle,
                toggle: function(e, t, n) {
                    var r = "boolean" == typeof e;
                    return i.isFunction(e) && i.isFunction(t) ? this._toggle.apply(this, arguments) : null == e || r ? this.each((function() {
                        var t = r ? e : i(this).is(":hidden");
                        i(this)[t ? "show" : "hide"]()
                    })) : this.animate(ft("toggle", 3), e, t, n), this
                },
                fadeTo: function(e, t, n, r) {
                    return this.filter(":hidden").css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var o = i.speed(t, n, r);
                    if (i.isEmptyObject(e)) return this.each(o.complete, [!1]);

                    function a() {
                        !1 === o.queue && i._mark(this);
                        var t, n, r, a, s, l, u, c, d, f, p, h = i.extend({}, o),
                            m = 1 === this.nodeType,
                            g = m && i(this).is(":hidden");
                        for (r in h.animatedProperties = {}, e)
                            if (r !== (t = i.camelCase(r)) && (e[t] = e[r], delete e[r]), (s = i.cssHooks[t]) && "expand" in s)
                                for (r in l = s.expand(e[t]), delete e[t], l) r in e || (e[r] = l[r]);
                        for (t in e) {
                            if (n = e[t], i.isArray(n) ? (h.animatedProperties[t] = n[1], n = e[t] = n[0]) : h.animatedProperties[t] = h.specialEasing && h.specialEasing[t] || h.easing || "swing", "hide" === n && g || "show" === n && !g) return h.complete.call(this);
                            !m || "height" !== t && "width" !== t || (h.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === i.css(this, "display") && "none" === i.css(this, "float") && (i.support.inlineBlockNeedsLayout && "inline" !== pt(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                        }
                        for (r in null != h.overflow && (this.style.overflow = "hidden"), e) a = new i.fx(this, h, r), n = e[r], st.test(n) ? (p = i._data(this, "toggle" + r) || ("toggle" === n ? g ? "show" : "hide" : 0)) ? (i._data(this, "toggle" + r, "show" === p ? "hide" : "show"), a[p]()) : a[n]() : (u = lt.exec(n), c = a.cur(), u ? (d = parseFloat(u[2]), "px" !== (f = u[3] || (i.cssNumber[r] ? "" : "px")) && (i.style(this, r, (d || 1) + f), c = (d || 1) / a.cur() * c, i.style(this, r, c + f)), u[1] && (d = ("-=" === u[1] ? -1 : 1) * d + c), a.custom(c, d, f)) : a.custom(c, n, ""));
                        return !0
                    }
                    return e = i.extend({}, e), !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function() {
                        var t, r = !1,
                            o = i.timers,
                            a = i._data(this);

                        function s(e, t, r) {
                            var o = t[r];
                            i.removeData(e, r, !0), o.stop(n)
                        }
                        if (n || i._unmark(!0, this), null == e)
                            for (t in a) a[t] && a[t].stop && t.indexOf(".run") === t.length - 4 && s(this, a, t);
                        else a[t = e + ".run"] && a[t].stop && s(this, a, t);
                        for (t = o.length; t--;) o[t].elem !== this || null != e && o[t].queue !== e || (n ? o[t](!0) : o[t].saveState(), r = !0, o.splice(t, 1));
                        n && r || i.dequeue(this, e)
                    }))
                }
            }), i.each({
                slideDown: ft("show", 1),
                slideUp: ft("hide", 1),
                slideToggle: ft("toggle", 1),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(e, t) {
                i.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            })), i.extend({
                speed: function(e, t, n) {
                    var r = e && "object" == typeof e ? i.extend({}, e) : {
                        complete: n || !n && t || i.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !i.isFunction(t) && t
                    };
                    return r.duration = i.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in i.fx.speeds ? i.fx.speeds[r.duration] : i.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function(e) {
                        i.isFunction(r.old) && r.old.call(this), r.queue ? i.dequeue(this, r.queue) : !1 !== e && i._unmark(this)
                    }, r
                },
                easing: {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return -Math.cos(e * Math.PI) / 2 + .5
                    }
                },
                timers: [],
                fx: function(e, t, n) {
                    this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
                }
            }), i.fx.prototype = {
                update: function() {
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                        (i.fx.step[this.prop] || i.fx.step._default)(this)
                },
                cur: function() {
                    if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
                    var e, t = i.css(this.elem, this.prop);
                    return isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t : 0 : e
                },
                custom: function(e, t, n) {
                    var r = this,
                        o = i.fx;

                    function a(e) {
                        return r.step(e)
                    }
                    this.startTime = ot || ct(), this.end = t, this.now = this.start = e, this.pos = this.state = 0, this.unit = n || this.unit || (i.cssNumber[this.prop] ? "" : "px"), a.queue = this.options.queue, a.elem = this.elem, a.saveState = function() {
                        void 0 === i._data(r.elem, "fxshow" + r.prop) && (r.options.hide ? i._data(r.elem, "fxshow" + r.prop, r.start) : r.options.show && i._data(r.elem, "fxshow" + r.prop, r.end))
                    }, a() && i.timers.push(a) && !it && (it = setInterval(o.tick, o.interval))
                },
                show: function() {
                    var e = i._data(this.elem, "fxshow" + this.prop);
                    this.options.orig[this.prop] = e || i.style(this.elem, this.prop), this.options.show = !0, void 0 !== e ? this.custom(this.cur(), e) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), i(this.elem).show()
                },
                hide: function() {
                    this.options.orig[this.prop] = i._data(this.elem, "fxshow" + this.prop) || i.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
                },
                step: function(e) {
                    var t, n, r, o = ot || ct(),
                        a = !0,
                        s = this.elem,
                        l = this.options;
                    if (e || o >= l.duration + this.startTime) {
                        for (t in this.now = this.end, this.pos = this.state = 1, this.update(), l.animatedProperties[this.prop] = !0, l.animatedProperties) !0 !== l.animatedProperties[t] && (a = !1);
                        if (a) {
                            if (null == l.overflow || i.support.shrinkWrapBlocks || i.each(["", "X", "Y"], (function(e, t) {
                                    s.style["overflow" + t] = l.overflow[e]
                                })), l.hide && i(s).hide(), l.hide || l.show)
                                for (t in l.animatedProperties) i.style(s, t, l.orig[t]), i.removeData(s, "fxshow" + t, !0), i.removeData(s, "toggle" + t, !0);
                            (r = l.complete) && (l.complete = !1, r.call(s))
                        }
                        return !1
                    }
                    return l.duration == 1 / 0 ? this.now = o : (n = o - this.startTime, this.state = n / l.duration, this.pos = i.easing[l.animatedProperties[this.prop]](this.state, n, 0, 1, l.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
                }
            }, i.extend(i.fx, {
                tick: function() {
                    for (var e, t = i.timers, n = 0; n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
                    t.length || i.fx.stop()
                },
                interval: 13,
                stop: function() {
                    clearInterval(it), it = null
                },
                speeds: {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                step: {
                    opacity: function(e) {
                        i.style(e.elem, "opacity", e.now)
                    },
                    _default: function(e) {
                        e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
                    }
                }
            }), i.each(ut.concat.apply([], ut), (function(e, t) {
                t.indexOf("margin") && (i.fx.step[t] = function(e) {
                    i.style(e.elem, t, Math.max(0, e.now) + e.unit)
                })
            })), i.expr && i.expr.filters && (i.expr.filters.animated = function(e) {
                return i.grep(i.timers, (function(t) {
                    return e === t.elem
                })).length
            });
            var ht, mt = /^t(?:able|d|h)$/i,
                gt = /^(?:body|html)$/i;

            function vt(e) {
                return i.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
            }
            ht = "getBoundingClientRect" in t.documentElement ? function(e, t, n, r) {
                try {
                    r = e.getBoundingClientRect()
                } catch (e) {}
                if (!r || !i.contains(n, e)) return r ? {
                    top: r.top,
                    left: r.left
                } : {
                    top: 0,
                    left: 0
                };
                var o = t.body,
                    a = vt(t),
                    s = n.clientTop || o.clientTop || 0,
                    l = n.clientLeft || o.clientLeft || 0,
                    u = a.pageYOffset || i.support.boxModel && n.scrollTop || o.scrollTop,
                    c = a.pageXOffset || i.support.boxModel && n.scrollLeft || o.scrollLeft;
                return {
                    top: r.top + u - s,
                    left: r.left + c - l
                }
            } : function(e, t, n) {
                for (var r, o = e.offsetParent, a = t.body, s = t.defaultView, l = s ? s.getComputedStyle(e, null) : e.currentStyle, u = e.offsetTop, c = e.offsetLeft;
                    (e = e.parentNode) && e !== a && e !== n && (!i.support.fixedPosition || "fixed" !== l.position);) r = s ? s.getComputedStyle(e, null) : e.currentStyle, u -= e.scrollTop, c -= e.scrollLeft, e === o && (u += e.offsetTop, c += e.offsetLeft, !i.support.doesNotAddBorder || i.support.doesAddBorderForTableAndCells && mt.test(e.nodeName) || (u += parseFloat(r.borderTopWidth) || 0, c += parseFloat(r.borderLeftWidth) || 0), o, o = e.offsetParent), i.support.subtractsBorderForOverflowNotVisible && "visible" !== r.overflow && (u += parseFloat(r.borderTopWidth) || 0, c += parseFloat(r.borderLeftWidth) || 0), l = r;
                return "relative" !== l.position && "static" !== l.position || (u += a.offsetTop, c += a.offsetLeft), i.support.fixedPosition && "fixed" === l.position && (u += Math.max(n.scrollTop, a.scrollTop), c += Math.max(n.scrollLeft, a.scrollLeft)), {
                    top: u,
                    left: c
                }
            }, i.fn.offset = function(e) {
                if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                    i.offset.setOffset(this, e, t)
                }));
                var t = this[0],
                    n = t && t.ownerDocument;
                return n ? t === n.body ? i.offset.bodyOffset(t) : ht(t, n, n.documentElement) : null
            }, i.offset = {
                bodyOffset: function(e) {
                    var t = e.offsetTop,
                        n = e.offsetLeft;
                    return i.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(i.css(e, "marginTop")) || 0, n += parseFloat(i.css(e, "marginLeft")) || 0), {
                        top: t,
                        left: n
                    }
                },
                setOffset: function(e, t, n) {
                    var r = i.css(e, "position");
                    "static" === r && (e.style.position = "relative");
                    var o, a, s = i(e),
                        l = s.offset(),
                        u = i.css(e, "top"),
                        c = i.css(e, "left"),
                        d = {},
                        f = {};
                    ("absolute" === r || "fixed" === r) && i.inArray("auto", [u, c]) > -1 ? (o = (f = s.position()).top, a = f.left) : (o = parseFloat(u) || 0, a = parseFloat(c) || 0), i.isFunction(t) && (t = t.call(e, n, l)), null != t.top && (d.top = t.top - l.top + o), null != t.left && (d.left = t.left - l.left + a), "using" in t ? t.using.call(e, d) : s.css(d)
                }
            }, i.fn.extend({
                position: function() {
                    if (!this[0]) return null;
                    var e = this[0],
                        t = this.offsetParent(),
                        n = this.offset(),
                        r = gt.test(t[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : t.offset();
                    return n.top -= parseFloat(i.css(e, "marginTop")) || 0, n.left -= parseFloat(i.css(e, "marginLeft")) || 0, r.top += parseFloat(i.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(i.css(t[0], "borderLeftWidth")) || 0, {
                        top: n.top - r.top,
                        left: n.left - r.left
                    }
                },
                offsetParent: function() {
                    return this.map((function() {
                        for (var e = this.offsetParent || t.body; e && !gt.test(e.nodeName) && "static" === i.css(e, "position");) e = e.offsetParent;
                        return e
                    }))
                }
            }), i.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(e, t) {
                var n = /Y/.test(t);
                i.fn[e] = function(r) {
                    return i.access(this, (function(e, r, o) {
                        var a = vt(e);
                        if (void 0 === o) return a ? t in a ? a[t] : i.support.boxModel && a.document.documentElement[r] || a.document.body[r] : e[r];
                        a ? a.scrollTo(n ? i(a).scrollLeft() : o, n ? o : i(a).scrollTop()) : e[r] = o
                    }), e, r, arguments.length, null)
                }
            })), i.each({
                Height: "height",
                Width: "width"
            }, (function(e, t) {
                var n = "client" + e,
                    r = "scroll" + e,
                    o = "offset" + e;
                i.fn["inner" + e] = function() {
                    var e = this[0];
                    return e ? e.style ? parseFloat(i.css(e, t, "padding")) : this[t]() : null
                }, i.fn["outer" + e] = function(e) {
                    var n = this[0];
                    return n ? n.style ? parseFloat(i.css(n, t, e ? "margin" : "border")) : this[t]() : null
                }, i.fn[t] = function(e) {
                    return i.access(this, (function(e, t, a) {
                        var s, l, u, c;
                        return i.isWindow(e) ? (l = (s = e.document).documentElement[n], i.support.boxModel && l || s.body && s.body[n] || l) : 9 === e.nodeType ? (s = e.documentElement)[n] >= s[r] ? s[n] : Math.max(e.body[r], s[r], e.body[o], s[o]) : void 0 === a ? (u = i.css(e, t), c = parseFloat(u), i.isNumeric(c) ? c : u) : void i(e).css(t, a)
                    }), t, e, arguments.length, null)
                }
            })), e.exports = window.jQuery = window.$ = i
        }
    }
]);