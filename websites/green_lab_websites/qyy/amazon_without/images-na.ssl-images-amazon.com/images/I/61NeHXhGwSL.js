/*
 jQuery JavaScript Library v1.6.4
 http://jquery.com/

 Copyright 2011, John Resig
 Dual licensed under the MIT or GPL Version 2 licenses.
 http://jquery.org/license

 Includes Sizzle.js
 http://sizzlejs.com/
 Copyright 2011, The Dojo Foundation
 Released under the MIT, BSD, and GPL Licenses.

 Amazon elects to use jQuery and Sizzle under the MIT license.

 Date: Mon Sep 12 18:54:48 2011 -0400
 Sizzle CSS Selector Engine
  Copyright 2011, The Dojo Foundation
  Released under the MIT, BSD, and GPL Licenses.
  More information: http://sizzlejs.com/
*/
(function(I) {
    var r = window.AmazonUIPageJS || window.P,
        p = r._namespace || r.attributeErrors,
        K = p ? p("AmazonUIjQuery", "AmazonUI") : r;
    K.guardFatal ? K.guardFatal(I)(K, window) : K.execute(function() {
        I(K, window)
    })
})(function(I, r, p) {
    r.navigator && r.navigator.userAgent && I.declare("jQuery", function() {
        function K(a, b, d) {
            if (d === p && 1 === a.nodeType)
                if (d = "data-" + b.replace(gb, "-$1").toLowerCase(), d = a.getAttribute(d), "string" === typeof d) {
                    try {
                        d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : c.isNaN(d) ? hb.test(d) ? c.parseJSON(d) : d :
                            parseFloat(d)
                    } catch (e) {}
                    c.data(a, b, d)
                } else d = p;
            return d
        }

        function ia(a) {
            for (var b in a)
                if ("toJSON" !== b) return !1;
            return !0
        }

        function wa(a, b, d) {
            var e = b + "defer",
                f = b + "queue",
                g = b + "mark",
                h = c.data(a, e, p, !0);
            !h || "queue" !== d && c.data(a, f, p, !0) || "mark" !== d && c.data(a, g, p, !0) || setTimeout(function() {
                c.data(a, f, p, !0) || c.data(a, g, p, !0) || (c.removeData(a, e, !0), h.resolve())
            }, 0)
        }

        function M() {
            return !1
        }

        function X() {
            return !0
        }

        function xa(a, b, d) {
            var e = c.extend({}, d[0]);
            e.type = a;
            e.originalEvent = {};
            e.liveFired = p;
            c.event.handle.call(b,
                e);
            e.isDefaultPrevented() && d[0].preventDefault()
        }

        function ib(a) {
            var b, d, e, f, g = [];
            var h = [];
            var k = c._data(this, "events");
            if (a.liveFired !== this && k && k.live && !a.target.disabled && (!a.button || "click" !== a.type)) {
                a.namespace && (f = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"));
                a.liveFired = this;
                var l = k.live.slice(0);
                for (d = 0; d < l.length; d++) k = l[d], k.origType.replace(ja, "") === a.type ? h.push(k.selector) : l.splice(d--, 1);
                h = c(a.target).closest(h, a.currentTarget);
                var m = 0;
                for (e = h.length; m <
                    e; m++) {
                    var n = h[m];
                    for (d = 0; d < l.length; d++)
                        if (k = l[d], n.selector === k.selector && (!f || f.test(k.namespace)) && !n.elem.disabled) {
                            var p = n.elem;
                            var q = null;
                            if ("mouseenter" === k.preType || "mouseleave" === k.preType) a.type = k.preType, (q = c(a.relatedTarget).closest(k.selector)[0]) && c.contains(p, q) && (q = p);
                            q && q === p || g.push({
                                elem: p,
                                handleObj: k,
                                level: n.level
                            })
                        }
                }
                m = 0;
                for (e = g.length; m < e; m++) {
                    h = g[m];
                    if (r && h.level > r) break;
                    a.currentTarget = h.elem;
                    a.data = h.handleObj.data;
                    a.handleObj = h.handleObj;
                    f = h.handleObj.origHandler.apply(h.elem,
                        arguments);
                    if (!1 === f || a.isPropagationStopped()) {
                        var r = h.level;
                        !1 === f && (b = !1);
                        if (a.isImmediatePropagationStopped()) break
                    }
                }
                return b
            }
        }

        function Y(a, b) {
            return (a && "*" !== a ? a + "." : "") + b.replace(jb, "`").replace(kb, "\x26")
        }

        function ya(a) {
            return !a || !a.parentNode || 11 === a.parentNode.nodeType
        }

        function za(a, b, d) {
            b = b || 0;
            if (c.isFunction(b)) return c.grep(a, function(a, c) {
                return !!b.call(a, c, a) === d
            });
            if (b.nodeType) return c.grep(a, function(a, c) {
                return a === b === d
            });
            if ("string" === typeof b) {
                var e = c.grep(a, function(a) {
                    return 1 ===
                        a.nodeType
                });
                if (lb.test(b)) return c.filter(b, e, !d);
                b = c.filter(b, e)
            }
            return c.grep(a, function(a, e) {
                return 0 <= c.inArray(a, b) === d
            })
        }

        function mb(a, b) {
            return c.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function Aa(a, b) {
            if (1 === b.nodeType && c.hasData(a)) {
                var d = c.expando,
                    e = c.data(a),
                    f = c.data(b, e);
                if (e = e[d])
                    if (a = e.events, f = f[d] = c.extend({}, e), a) {
                        delete f.handle;
                        f.events = {};
                        for (var g in a)
                            for (d = 0, e = a[g].length; d < e; d++) c.event.add(b, g + (a[g][d].namespace ?
                                "." : "") + a[g][d].namespace, a[g][d], a[g][d].data)
                    }
            }
        }

        function Ba(a, b) {
            if (1 === b.nodeType) {
                b.clearAttributes && b.clearAttributes();
                b.mergeAttributes && b.mergeAttributes(a);
                var d = b.nodeName.toLowerCase();
                if ("object" === d) b.outerHTML = a.outerHTML;
                else if ("input" === d && ("checkbox" === a.type || "radio" === a.type)) a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
                else if ("option" === d) b.selected = a.defaultSelected;
                else if ("input" === d || "textarea" === d) b.defaultValue = a.defaultValue;
                b.removeAttribute(c.expando)
            }
        }

        function Z(a) {
            return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : []
        }

        function Ca(a) {
            if ("checkbox" === a.type || "radio" === a.type) a.defaultChecked = a.checked
        }

        function Da(a) {
            c.nodeName(a, "input") ? Ca(a) : "getElementsByTagName" in a && c.grep(a.getElementsByTagName("input"), Ca)
        }

        function nb(a, b) {
            b.src ? c.ajax({
                url: b.src,
                async: !1,
                dataType: "script"
            }) : c.globalEval((b.text || b.textContent || b.innerHTML || "").replace(ob, "/*$0*/"));
            b.parentNode && b.parentNode.removeChild(b)
        }

        function Ea(a, b, d) {
            var e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = "width" === b ? pb : qb;
            if (0 < e) return "border" !== d && c.each(f, function() {
                d || (e -= parseFloat(c.css(a, "padding" + this)) || 0);
                e = "margin" === d ? e + (parseFloat(c.css(a, d + this)) || 0) : e - (parseFloat(c.css(a, "border" + this + "Width")) || 0)
            }), e + "px";
            e = V(a, b, b);
            if (0 > e || null == e) e = a.style[b] || 0;
            e = parseFloat(e) || 0;
            d && c.each(f, function() {
                e += parseFloat(c.css(a, "padding" + this)) || 0;
                "padding" !== d && (e += parseFloat(c.css(a, "border" + this + "Width")) || 0);
                "margin" === d && (e += parseFloat(c.css(a,
                    d + this)) || 0)
            });
            return e + "px"
        }

        function Fa(a) {
            return function(b, d) {
                "string" !== typeof b && (d = b, b = "*");
                if (c.isFunction(d)) {
                    b = b.toLowerCase().split(Ga);
                    for (var e = 0, f = b.length, g, h; e < f; e++) g = b[e], (h = /^\+/.test(g)) && (g = g.substr(1) || "*"), g = a[g] = a[g] || [], g[h ? "unshift" : "push"](d)
                }
            }
        }

        function aa(a, b, c, e, f, g) {
            f = f || b.dataTypes[0];
            g = g || {};
            g[f] = !0;
            f = a[f];
            for (var d = 0, k = f ? f.length : 0, l = a === ka, m; d < k && (l || !m); d++) m = f[d](b, c, e), "string" === typeof m && (!l || g[m] ? m = p : (b.dataTypes.unshift(m), m = aa(a, b, c, e, m, g)));
            !l && m || g["*"] ||
                (m = aa(a, b, c, e, "*", g));
            return m
        }

        function Ha(a, b) {
            var d, e, f = c.ajaxSettings.flatOptions || {};
            for (d in b) b[d] !== p && ((f[d] ? a : e || (e = {}))[d] = b[d]);
            e && c.extend(!0, a, e)
        }

        function la(a, b, d, e) {
            if (c.isArray(b)) c.each(b, function(b, f) {
                d || rb.test(a) ? e(a, f) : la(a + "[" + ("object" === typeof f || c.isArray(f) ? b : "") + "]", f, d, e)
            });
            else if (d || null == b || "object" !== typeof b) e(a, b);
            else
                for (var f in b) la(a + "[" + f + "]", b[f], d, e)
        }

        function Ia() {
            try {
                return new r.XMLHttpRequest
            } catch (a) {}
        }

        function Ja() {
            setTimeout(sb, 0);
            return ba = c.now()
        }

        function sb() {
            ba = p
        }

        function L(a, b) {
            var d = {};
            c.each(Ka.concat.apply([], Ka.slice(0, b)), function() {
                d[this] = a
            });
            return d
        }

        function La(a) {
            if (!ma[a]) {
                var b = q.body,
                    d = c("\x3c" + a + "\x3e").appendTo(b),
                    e = d.css("display");
                d.remove();
                if ("none" === e || "" === e) H || (H = q.createElement("iframe"), H.frameBorder = H.width = H.height = 0), b.appendChild(H), N && H.createElement || (N = (H.contentWindow || H.contentDocument).document, N.write((c.support.boxModel ? "\x3c!doctype html\x3e" : "") + "\x3chtml\x3e\x3cbody\x3e"), N.close()), d = N.createElement(a),
                    N.body.appendChild(d), e = c.css(d, "display"), b.removeChild(H);
                ma[a] = e
            }
            return ma[a]
        }

        function na(a) {
            return c.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }
        var q = r.document,
            tb = r.navigator,
            ub = r.location,
            E = r.ue,
            c = function() {
                function a() {
                    if (!b.isReady) {
                        try {
                            q.documentElement.doScroll("left")
                        } catch (gc) {
                            setTimeout(a, 1);
                            return
                        }
                        b.ready()
                    }
                }
                var b = function(a, c) {
                        return new b.fn.init(a, c, vb)
                    },
                    c = r.jQuery,
                    e = r.$,
                    f = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                    g = /\S/,
                    h = /^\s+/,
                    k = /\s+$/,
                    l = /\d/,
                    m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                    n = /^[\],:{}\s]*$/,
                    S = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                    y = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    B = /(?:^|:|,)(?:\s*\[)+/g,
                    w = /(webkit)[ \/]([\w.]+)/,
                    F = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                    z = /(msie) ([\w.]+)/,
                    v = /(mozilla)(?:.*? rv:([\w.]+))?/,
                    t = /-([a-z]|[0-9])/ig,
                    x = /^-ms-/,
                    D = function(a, b) {
                        return (b + "").toUpperCase()
                    },
                    u = tb.userAgent,
                    Q, R, wb = Object.prototype.toString,
                    ca = Object.prototype.hasOwnProperty,
                    oa = Array.prototype.push,
                    W = Array.prototype.slice,
                    Ma = String.prototype.trim,
                    Na = Array.prototype.indexOf,
                    A = {};
                b.fn = b.prototype = {
                    constructor: b,
                    init: function(a, c, d) {
                        if (!a) return this;
                        if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                        if ("body" === a && !c && q.body) return this.context = q, this[0] = q.body, this.selector = a, this.length = 1, this;
                        if ("string" === typeof a) {
                            var e = "\x3c" === a.charAt(0) && "\x3e" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : f.exec(a);
                            if (!e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                            if (e[1]) return d = (c = c instanceof b ? c[0] :
                                c) ? c.ownerDocument || c : q, (a = m.exec(a)) ? b.isPlainObject(c) ? (a = [q.createElement(a[1])], b.fn.attr.call(a, c, !0)) : a = [d.createElement(a[1])] : (a = b.buildFragment([e[1]], [d]), a = (a.cacheable ? b.clone(a.fragment) : a.fragment).childNodes), b.merge(this, a);
                            if ((c = q.getElementById(e[2])) && c.parentNode) {
                                if (c.id !== e[2]) return d.find(a);
                                this.length = 1;
                                this[0] = c
                            }
                            this.context = q;
                            this.selector = a;
                            return this
                        }
                        if (b.isFunction(a)) return d.ready(a);
                        a.selector !== p && (this.selector = a.selector, this.context = a.context);
                        return b.makeArray(a,
                            this)
                    },
                    selector: "",
                    jquery: "1.6.4",
                    length: 0,
                    size: function() {
                        return this.length
                    },
                    toArray: function() {
                        return W.call(this, 0)
                    },
                    get: function(a) {
                        return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
                    },
                    pushStack: function(a, c, d) {
                        var e = this.constructor();
                        b.isArray(a) ? oa.apply(e, a) : b.merge(e, a);
                        e.prevObject = this;
                        e.context = this.context;
                        "find" === c ? e.selector = this.selector + (this.selector ? " " : "") + d : c && (e.selector = this.selector + "." + c + "(" + d + ")");
                        return e
                    },
                    each: function(a, c) {
                        return b.each(this, a, c)
                    },
                    ready: function(a) {
                        b.bindReady();
                        Q.done(a);
                        return this
                    },
                    eq: function(a) {
                        return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    slice: function() {
                        return this.pushStack(W.apply(this, arguments), "slice", W.call(arguments).join(","))
                    },
                    map: function(a) {
                        return this.pushStack(b.map(this, function(b, c) {
                            return a.call(b, c, b)
                        }))
                    },
                    end: function() {
                        return this.prevObject || this.constructor(null)
                    },
                    push: oa,
                    sort: [].sort,
                    splice: [].splice
                };
                b.fn.init.prototype = b.fn;
                b.extend = b.fn.extend = function() {
                    var a,
                        c, d, e = arguments[0] || {},
                        f = 1,
                        g = arguments.length,
                        t = !1;
                    "boolean" === typeof e && (t = e, e = arguments[1] || {}, f = 2);
                    "object" === typeof e || b.isFunction(e) || (e = {});
                    g === f && (e = this, --f);
                    for (; f < g; f++)
                        if (null != (a = arguments[f]))
                            for (c in a) {
                                var h = e[c];
                                var x = a[c];
                                "__proto__" !== c && e !== x && (t && x && (b.isPlainObject(x) || (d = b.isArray(x))) ? (d ? (d = !1, h = h && b.isArray(h) ? h : []) : h = h && b.isPlainObject(h) ? h : {}, e[c] = b.extend(t, h, x)) : x !== p && (e[c] = x))
                            }
                    return e
                };
                b.extend({
                    noConflict: function(a) {
                        r.$ === b && (r.$ = e);
                        a && r.jQuery === b && (r.jQuery = c);
                        return b
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function(a) {
                        a ? b.readyWait++ : b.ready(!0)
                    },
                    ready: function(a) {
                        if (!0 === a && !--b.readyWait || !0 !== a && !b.isReady) {
                            if (!q.body) return setTimeout(b.ready, 1);
                            b.isReady = !0;
                            !0 !== a && 0 < --b.readyWait || (Q.resolveWith(q, [b]), b.fn.trigger && b(q).trigger("ready").unbind("ready"))
                        }
                    },
                    bindReady: function() {
                        if (!Q) {
                            Q = b._Deferred();
                            if ("complete" === q.readyState) return setTimeout(b.ready, 1);
                            if (q.addEventListener) q.addEventListener("DOMContentLoaded", R, !1), r.addEventListener("load", b.ready, !1);
                            else if (q.attachEvent) {
                                q.attachEvent("onreadystatechange", R);
                                r.attachEvent("onload", b.ready);
                                var c = !1;
                                try {
                                    c = null == r.frameElement
                                } catch (hc) {}
                                q.documentElement.doScroll && c && a()
                            }
                        }
                    },
                    isFunction: function(a) {
                        return "function" === b.type(a)
                    },
                    isArray: Array.isArray || function(a) {
                        return "array" === b.type(a)
                    },
                    isWindow: function(a) {
                        return a && "object" === typeof a && "setInterval" in a
                    },
                    isNaN: function(a) {
                        return null == a || !l.test(a) || isNaN(a)
                    },
                    type: function(a) {
                        return null == a ? String(a) : A[wb.call(a)] || "object"
                    },
                    isPlainObject: function(a) {
                        if (!a ||
                            "object" !== b.type(a) || a.nodeType || b.isWindow(a)) return !1;
                        try {
                            if (a.constructor && !ca.call(a, "constructor") && !ca.call(a.constructor.prototype, "isPrototypeOf")) return !1
                        } catch (ic) {
                            return !1
                        }
                        for (var c in a);
                        return c === p || ca.call(a, c)
                    },
                    isEmptyObject: function(a) {
                        for (var b in a) return !1;
                        return !0
                    },
                    error: function(a) {
                        throw a;
                    },
                    parseJSON: function(a) {
                        if ("string" !== typeof a || !a) return null;
                        a = b.trim(a);
                        if (r.JSON && r.JSON.parse) return r.JSON.parse(a);
                        if (n.test(a.replace(S, "@").replace(y, "]").replace(B, ""))) return (new Function("return " +
                            a))();
                        b.error("Invalid JSON: " + a)
                    },
                    parseXML: function(a) {
                        try {
                            if (r.DOMParser) {
                                var c = new DOMParser;
                                var d = c.parseFromString(a, "text/xml")
                            } else d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(a)
                        } catch (C) {
                            d = p
                        }
                        d && d.documentElement && !d.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + a);
                        return d
                    },
                    noop: function() {},
                    globalEval: function(a) {
                        a && g.test(a) && (r.execScript || function(a) {
                            r.eval.call(r, a)
                        })(a)
                    },
                    camelCase: function(a) {
                        return a.replace(x, "ms-").replace(t, D)
                    },
                    nodeName: function(a,
                        b) {
                        return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                    },
                    each: function(a, c, d) {
                        var e, f = 0,
                            g = a.length,
                            t = g === p || b.isFunction(a);
                        if (d)
                            if (t)
                                for (e in a) {
                                    if (!1 === c.apply(a[e], d)) break
                                } else
                                    for (; f < g && !1 !== c.apply(a[f++], d););
                            else if (t)
                            for (e in a) {
                                if (!1 === c.call(a[e], e, a[e])) break
                            } else
                                for (; f < g && !1 !== c.call(a[f], f, a[f++]););
                        return a
                    },
                    trim: Ma ? function(a) {
                        return null == a ? "" : Ma.call(a)
                    } : function(a) {
                        return null == a ? "" : a.toString().replace(h, "").replace(k, "")
                    },
                    makeArray: function(a, c) {
                        c = c || [];
                        if (null != a) {
                            var d =
                                b.type(a);
                            null == a.length || "string" === d || "function" === d || "regexp" === d || b.isWindow(a) ? oa.call(c, a) : b.merge(c, a)
                        }
                        return c
                    },
                    inArray: function(a, b) {
                        if (!b) return -1;
                        if (Na) return Na.call(b, a);
                        for (var c = 0, d = b.length; c < d; c++)
                            if (b[c] === a) return c;
                        return -1
                    },
                    merge: function(a, b) {
                        var c = a.length,
                            d = 0;
                        if ("number" === typeof b.length)
                            for (var e = b.length; d < e; d++) a[c++] = b[d];
                        else
                            for (; b[d] !== p;) a[c++] = b[d++];
                        a.length = c;
                        return a
                    },
                    grep: function(a, b, c) {
                        var d = [];
                        c = !!c;
                        for (var e = 0, f = a.length; e < f; e++) {
                            var g = !!b(a[e], e);
                            c !== g &&
                                d.push(a[e])
                        }
                        return d
                    },
                    map: function(a, c, d) {
                        var e, f = [],
                            g = 0,
                            t = a.length;
                        if (a instanceof b || t !== p && "number" === typeof t && (0 < t && a[0] && a[t - 1] || 0 === t || b.isArray(a)))
                            for (; g < t; g++) {
                                var h = c(a[g], g, d);
                                null != h && (f[f.length] = h)
                            } else
                                for (e in a) h = c(a[e], e, d), null != h && (f[f.length] = h);
                        return f.concat.apply([], f)
                    },
                    guid: 1,
                    proxy: function(a, c) {
                        if ("string" === typeof c) {
                            var d = a[c];
                            c = a;
                            a = d
                        }
                        if (!b.isFunction(a)) return p;
                        var e = W.call(arguments, 2);
                        d = function() {
                            return a.apply(c, e.concat(W.call(arguments)))
                        };
                        d.guid = a.guid = a.guid ||
                            d.guid || b.guid++;
                        return d
                    },
                    access: function(a, c, d, e, f, g) {
                        var t = a.length;
                        if ("object" === typeof c) {
                            for (var h in c) b.access(a, h, c[h], e, f, d);
                            return a
                        }
                        if (d !== p) {
                            e = !g && e && b.isFunction(d);
                            for (h = 0; h < t; h++) f(a[h], c, e ? d.call(a[h], h, f(a[h], c)) : d, g);
                            return a
                        }
                        return t ? f(a[0], c) : p
                    },
                    now: function() {
                        return (new Date).getTime()
                    },
                    uaMatch: function(a) {
                        a = a.toLowerCase();
                        a = w.exec(a) || F.exec(a) || z.exec(a) || 0 > a.indexOf("compatible") && v.exec(a) || [];
                        return {
                            browser: a[1] || "",
                            version: a[2] || "0"
                        }
                    },
                    sub: function() {
                        function a(b, c) {
                            return new a.fn.init(b,
                                c)
                        }
                        b.extend(!0, a, this);
                        a.superclass = this;
                        a.fn = a.prototype = this();
                        a.fn.constructor = a;
                        a.sub = this.sub;
                        a.fn.init = function(d, e) {
                            e && e instanceof b && !(e instanceof a) && (e = a(e));
                            return b.fn.init.call(this, d, e, c)
                        };
                        a.fn.init.prototype = a.fn;
                        var c = a(q);
                        return a
                    },
                    browser: {}
                });
                b.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                    A["[object " + b + "]"] = b.toLowerCase()
                });
                u = b.uaMatch(u);
                u.browser && (b.browser[u.browser] = !0, b.browser.version = u.version);
                b.browser.webkit && (b.browser.safari = !0);
                g.test(" ") && (h = /^[\s\xA0]+/, k = /[\s\xA0]+$/);
                var vb = b(q);
                q.addEventListener ? R = function() {
                    q.removeEventListener("DOMContentLoaded", R, !1);
                    b.ready()
                } : q.attachEvent && (R = function() {
                    "complete" === q.readyState && (q.detachEvent("onreadystatechange", R), b.ready())
                });
                return b
            }(),
            pa = "done fail isResolved isRejected promise then always pipe".split(" "),
            Oa = [].slice;
        c.extend({
            _Deferred: function() {
                var a = [],
                    b, d, e, f = {
                        done: function() {
                            if (!e) {
                                var d = arguments,
                                    h;
                                if (b) {
                                    var k = b;
                                    b = 0
                                }
                                var l = 0;
                                for (h = d.length; l < h; l++) {
                                    var m =
                                        d[l];
                                    var n = c.type(m);
                                    "array" === n ? f.done.apply(f, m) : "function" === n && a.push(m)
                                }
                                k && f.resolveWith(k[0], k[1])
                            }
                            return this
                        },
                        resolveWith: function(c, f) {
                            if (!e && !b && !d) {
                                f = f || [];
                                d = 1;
                                try {
                                    for (; a[0];) a.shift().apply(c, f)
                                } finally {
                                    b = [c, f], d = 0
                                }
                            }
                            return this
                        },
                        resolve: function() {
                            f.resolveWith(this, arguments);
                            return this
                        },
                        isResolved: function() {
                            return !(!d && !b)
                        },
                        cancel: function() {
                            e = 1;
                            a = [];
                            return this
                        }
                    };
                return f
            },
            Deferred: function(a) {
                var b = c._Deferred(),
                    d = c._Deferred(),
                    e;
                c.extend(b, {
                    then: function(a, c) {
                        b.done(a).fail(c);
                        return this
                    },
                    always: function() {
                        return b.done.apply(b, arguments).fail.apply(this, arguments)
                    },
                    fail: d.done,
                    rejectWith: d.resolveWith,
                    reject: d.resolve,
                    isRejected: d.isResolved,
                    pipe: function(a, d) {
                        return c.Deferred(function(e) {
                            c.each({
                                done: [a, "resolve"],
                                fail: [d, "reject"]
                            }, function(a, d) {
                                var f = d[0],
                                    g = d[1],
                                    h;
                                if (c.isFunction(f)) b[a](function() {
                                    if ((h = f.apply(this, arguments)) && c.isFunction(h.promise)) h.promise().then(e.resolve, e.reject);
                                    else e[g + "With"](this === b ? e : this, [h])
                                });
                                else b[a](e[g])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (null ==
                            a) {
                            if (e) return e;
                            e = a = {}
                        }
                        for (var c = pa.length; c--;) a[pa[c]] = b[pa[c]];
                        return a
                    }
                });
                b.done(d.cancel).fail(b.cancel);
                delete b.cancel;
                a && a.call(b, b);
                return b
            },
            when: function(a) {
                function b(a) {
                    return function(b) {
                        d[a] = 1 < arguments.length ? Oa.call(arguments, 0) : b;
                        --g || h.resolveWith(h, Oa.call(d, 0))
                    }
                }
                var d = arguments,
                    e = 0,
                    f = d.length,
                    g = f,
                    h = 1 >= f && a && c.isFunction(a.promise) ? a : c.Deferred();
                if (1 < f) {
                    for (; e < f; e++) d[e] && c.isFunction(d[e].promise) ? d[e].promise().then(b(e), h.reject) : --g;
                    g || h.resolveWith(h, d)
                } else h !== a && h.resolveWith(h,
                    f ? [a] : []);
                return h.promise()
            }
        });
        c.support = function() {
            var a = q.createElement("div"),
                b = q.documentElement,
                d;
            a.setAttribute("className", "t");
            a.innerHTML = "   \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a' style\x3d'top:1px;float:left;opacity:.55;'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
            var e = a.getElementsByTagName("*");
            var f = a.getElementsByTagName("a")[0];
            if (!e || !e.length || !f) return {};
            var g = q.createElement("select");
            var h = g.appendChild(q.createElement("option"));
            e = a.getElementsByTagName("input")[0];
            var k = {
                leadingWhitespace: 3 === a.firstChild.nodeType,
                tbody: !a.getElementsByTagName("tbody").length,
                htmlSerialize: !!a.getElementsByTagName("link").length,
                style: /top/.test(f.getAttribute("style")),
                hrefNormalized: "/a" === f.getAttribute("href"),
                opacity: /^0.55$/.test(f.style.opacity),
                cssFloat: !!f.style.cssFloat,
                checkOn: "on" === e.value,
                optSelected: h.selected,
                getSetAttribute: "t" !== a.className,
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0
            };
            a.innerHTML = "\x3coption\x3e\x3c/option\x3e";
            k.option = !!a.lastChild;
            e.checked = !0;
            k.noCloneChecked = e.cloneNode(!0).checked;
            g.disabled = !0;
            k.optDisabled = !h.disabled;
            try {
                delete a.test
            } catch (l) {
                k.deleteExpando = !1
            }!a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function() {
                k.noCloneEvent = !1
            }), a.cloneNode(!0).fireEvent("onclick"));
            e = q.createElement("input");
            e.value = "t";
            e.setAttribute("type", "radio");
            k.radioValue = "t" === e.value;
            e.setAttribute("checked", "checked");
            a.appendChild(e);
            f = q.createDocumentFragment();
            f.appendChild(a.firstChild);
            k.checkClone = f.cloneNode(!0).cloneNode(!0).lastChild.checked;
            a.innerHTML = "";
            a.style.width = a.style.paddingLeft = "1px";
            g = q.getElementsByTagName("body")[0];
            f = q.createElement(g ? "div" : "body");
            h = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            g && c.extend(h, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (d in h) f.style[d] = h[d];
            f.appendChild(a);
            b = g || b;
            b.insertBefore(f, b.firstChild);
            k.appendChecked =
                e.checked;
            c.boxModel = k.boxModel = "CSS1Compat" === q.compatMode;
            "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, k.inlineBlockNeedsLayout = 2 === a.offsetWidth, a.style.display = "", a.innerHTML = "\x3cdiv style\x3d'width:4px;'\x3e\x3c/div\x3e", k.shrinkWrapBlocks = 2 !== a.offsetWidth);
            a.innerHTML = "\x3ctable\x3e\x3ctr\x3e\x3ctd style\x3d'padding:0;border:0;display:none'\x3e\x3c/td\x3e\x3ctd\x3et\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e";
            g = a.getElementsByTagName("td");
            e = 0 === g[0].offsetHeight;
            g[0].style.display =
                "";
            g[1].style.display = "none";
            k.reliableHiddenOffsets = e && 0 === g[0].offsetHeight;
            a.innerHTML = "";
            q.defaultView && q.defaultView.getComputedStyle && (e = q.createElement("div"), e.style.width = "0", e.style.marginRight = "0", a.appendChild(e), k.reliableMarginRight = 0 === (parseInt((q.defaultView.getComputedStyle(e, null) || {
                marginRight: 0
            }).marginRight, 10) || 0));
            f.innerHTML = "";
            b.removeChild(f);
            if (a.attachEvent)
                for (d in {
                        submit: 1,
                        change: 1,
                        focusin: 1
                    }) b = "on" + d, e = b in a, e || (a.setAttribute(b, "return;"), e = "function" === typeof a[b]),
                    k[d + "Bubbles"] = e;
            f = f = g = h = g = e = a = e = null;
            return k
        }();
        var hb = /^(?:\{.*\}|\[.*\])$/,
            gb = /([A-Z])/g;
        c.extend({
            cache: {},
            uuid: 0,
            expando: "jQuery" + (c.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(a) {
                a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando];
                return !!a && !ia(a)
            },
            data: function(a, b, d, e) {
                if (c.acceptData(a)) {
                    var f = c.expando,
                        g = "string" === typeof b,
                        h = a.nodeType,
                        k = h ? c.cache : a,
                        l = h ? a[c.expando] : a[c.expando] && c.expando;
                    if (!(!l ||
                            e && l && k[l] && !k[l][f]) || !g || d !== p) {
                        l || (h ? a[c.expando] = l = ++c.uuid : l = c.expando);
                        k[l] || (k[l] = {}, h || (k[l].toJSON = c.noop));
                        if ("object" === typeof b || "function" === typeof b) e ? k[l][f] = c.extend(k[l][f], b) : k[l] = c.extend(k[l], b);
                        a = k[l];
                        e && (a[f] || (a[f] = {}), a = a[f]);
                        d !== p && (a[c.camelCase(b)] = d);
                        if ("events" === b && !a[b]) return a[f] && a[f].events;
                        g ? (d = a[b], null == d && (d = a[c.camelCase(b)])) : d = a;
                        return d
                    }
                }
            },
            removeData: function(a, b, d) {
                if (c.acceptData(a)) {
                    var e, f = c.expando,
                        g = a.nodeType,
                        h = g ? c.cache : a,
                        k = g ? a[c.expando] : c.expando;
                    if (h[k]) {
                        if (b && (e = d ? h[k][f] : h[k]) && (e[b] || (b = c.camelCase(b)), delete e[b], !ia(e)) || d && (delete h[k][f], !ia(h[k]))) return;
                        b = h[k][f];
                        c.support.deleteExpando || !h.setInterval ? delete h[k] : h[k] = null;
                        b ? (h[k] = {}, g || (h[k].toJSON = c.noop), h[k][f] = b) : g && (c.support.deleteExpando ? delete a[c.expando] : a.removeAttribute ? a.removeAttribute(c.expando) : a[c.expando] = null)
                    }
                }
            },
            _data: function(a, b, d) {
                return c.data(a, b, d, !0)
            },
            acceptData: function(a) {
                if (a.nodeName) {
                    var b = c.noData[a.nodeName.toLowerCase()];
                    if (b) return !(!0 === b ||
                        a.getAttribute("classid") !== b)
                }
                return !0
            }
        });
        c.fn.extend({
            data: function(a, b) {
                var d = null;
                if ("undefined" === typeof a) {
                    if (this.length && (d = c.data(this[0]), 1 === this[0].nodeType))
                        for (var e = this[0].attributes, f, g = 0, h = e.length; g < h; g++) f = e[g].name, 0 === f.indexOf("data-") && (f = c.camelCase(f.substring(5)), K(this[0], f, d[f]));
                    return d
                }
                if ("object" === typeof a) return this.each(function() {
                    c.data(this, a)
                });
                var k = a.split(".");
                k[1] = k[1] ? "." + k[1] : "";
                return b === p ? (d = this.triggerHandler("getData" + k[1] + "!", [k[0]]), d === p && this.length &&
                    (d = c.data(this[0], a), d = K(this[0], a, d)), d === p && k[1] ? this.data(k[0]) : d) : this.each(function() {
                    var d = c(this),
                        e = [k[0], b];
                    d.triggerHandler("setData" + k[1] + "!", e);
                    c.data(this, a, b);
                    d.triggerHandler("changeData" + k[1] + "!", e)
                })
            },
            removeData: function(a) {
                return this.each(function() {
                    c.removeData(this, a)
                })
            }
        });
        c.extend({
            _mark: function(a, b) {
                a && (b = (b || "fx") + "mark", c.data(a, b, (c.data(a, b, p, !0) || 0) + 1, !0))
            },
            _unmark: function(a, b, d) {
                !0 !== a && (d = b, b = a, a = !1);
                if (b) {
                    d = d || "fx";
                    var e = d + "mark";
                    (a = a ? 0 : (c.data(b, e, p, !0) || 1) - 1) ? c.data(b,
                        e, a, !0): (c.removeData(b, e, !0), wa(b, d, "mark"))
                }
            },
            queue: function(a, b, d) {
                if (a) {
                    b = (b || "fx") + "queue";
                    var e = c.data(a, b, p, !0);
                    d && (!e || c.isArray(d) ? e = c.data(a, b, c.makeArray(d), !0) : e.push(d));
                    return e || []
                }
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var d = c.queue(a, b),
                    e = d.shift();
                "inprogress" === e && (e = d.shift());
                e && ("fx" === b && d.unshift("inprogress"), e.call(a, function() {
                    c.dequeue(a, b)
                }));
                d.length || (c.removeData(a, b + "queue", !0), wa(a, b, "queue"))
            }
        });
        c.fn.extend({
            queue: function(a, b) {
                "string" !== typeof a && (b = a, a = "fx");
                return b ===
                    p ? c.queue(this[0], a) : this.each(function() {
                        var d = c.queue(this, a, b);
                        "fx" === a && "inprogress" !== d[0] && c.dequeue(this, a)
                    })
            },
            dequeue: function(a) {
                return this.each(function() {
                    c.dequeue(this, a)
                })
            },
            delay: function(a, b) {
                a = c.fx ? c.fx.speeds[a] || a : a;
                b = b || "fx";
                return this.queue(b, function() {
                    var d = this;
                    setTimeout(function() {
                        c.dequeue(d, b)
                    }, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                function d() {
                    --g || e.resolveWith(f, [f])
                }
                "string" !== typeof a && (a = p);
                a = a || "fx";
                var e = c.Deferred(),
                    f = this;
                b = f.length;
                var g = 1,
                    h = a + "defer",
                    k = a + "queue";
                a += "mark";
                for (var l; b--;)
                    if (l = c.data(f[b], h, p, !0) || (c.data(f[b], k, p, !0) || c.data(f[b], a, p, !0)) && c.data(f[b], h, c._Deferred(), !0)) g++, l.done(d);
                d();
                return e.promise()
            }
        });
        var Pa = /[\n\t\r]/g,
            qa = /\s+/,
            xb = /\r/g,
            yb = /^(?:button|input)$/i,
            zb = /^(?:button|input|object|select|textarea)$/i,
            Ab = /^a(?:rea)?$/i,
            Qa = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
        c.fn.extend({
            attr: function(a,
                b) {
                return c.access(this, a, b, !0, c.attr)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    c.removeAttr(this, a)
                })
            },
            prop: function(a, b) {
                return c.access(this, a, b, !0, c.prop)
            },
            removeProp: function(a) {
                a = c.propFix[a] || a;
                return this.each(function() {
                    try {
                        this[a] = p, delete this[a]
                    } catch (b) {}
                })
            },
            addClass: function(a) {
                var b, d;
                if (c.isFunction(a)) return this.each(function(b) {
                    c(this).addClass(a.call(this, b, this.className))
                });
                if (a && "string" === typeof a) {
                    var e = a.split(qa);
                    var f = 0;
                    for (b = this.length; f < b; f++) {
                        var g = this[f];
                        if (1 === g.nodeType)
                            if (g.className || 1 !== e.length) {
                                var h = " " + g.className + " ";
                                var k = 0;
                                for (d = e.length; k < d; k++) ~h.indexOf(" " + e[k] + " ") || (h += e[k] + " ");
                                g.className = c.trim(h)
                            } else g.className = a
                    }
                }
                return this
            },
            removeClass: function(a) {
                var b, d;
                if (c.isFunction(a)) return this.each(function(b) {
                    c(this).removeClass(a.call(this, b, this.className))
                });
                if (a && "string" === typeof a || a === p) {
                    var e = (a || "").split(qa);
                    var f = 0;
                    for (b = this.length; f < b; f++) {
                        var g = this[f];
                        if (1 === g.nodeType && g.className)
                            if (a) {
                                var h = (" " + g.className + " ").replace(Pa,
                                    " ");
                                var k = 0;
                                for (d = e.length; k < d; k++) h = h.replace(" " + e[k] + " ", " ");
                                g.className = c.trim(h)
                            } else g.className = ""
                    }
                }
                return this
            },
            toggleClass: function(a, b) {
                var d = typeof a,
                    e = "boolean" === typeof b;
                return c.isFunction(a) ? this.each(function(d) {
                    c(this).toggleClass(a.call(this, d, this.className, b), b)
                }) : this.each(function() {
                    if ("string" === d)
                        for (var f, g = 0, h = c(this), k = b, l = a.split(qa); f = l[g++];) k = e ? k : !h.hasClass(f), h[k ? "addClass" : "removeClass"](f);
                    else if ("undefined" === d || "boolean" === d) this.className && c._data(this, "__className__",
                        this.className), this.className = this.className || !1 === a ? "" : c._data(this, "__className__") || ""
                })
            },
            hasClass: function(a) {
                a = " " + a + " ";
                for (var b = 0, c = this.length; b < c; b++)
                    if (1 === this[b].nodeType && -1 < (" " + this[b].className + " ").replace(Pa, " ").indexOf(a)) return !0;
                return !1
            },
            val: function(a) {
                var b, d, e = this[0];
                if (!arguments.length) {
                    if (e) {
                        if ((b = c.valHooks[e.nodeName.toLowerCase()] || c.valHooks[e.type]) && "get" in b && (d = b.get(e, "value")) !== p) return d;
                        d = e.value;
                        return "string" === typeof d ? d.replace(xb, "") : null == d ? "" : d
                    }
                    return p
                }
                var f =
                    c.isFunction(a);
                return this.each(function(d) {
                    var e = c(this);
                    1 === this.nodeType && (d = f ? a.call(this, d, e.val()) : a, null == d ? d = "" : "number" === typeof d ? d += "" : c.isArray(d) && (d = c.map(d, function(a) {
                        return null == a ? "" : a + ""
                    })), b = c.valHooks[this.nodeName.toLowerCase()] || c.valHooks[this.type], b && "set" in b && b.set(this, d, "value") !== p || (this.value = d))
                })
            }
        });
        c.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function(a) {
                        var b = a.selectedIndex,
                            d = [],
                            e = a.options;
                        a = "select-one" === a.type;
                        if (0 > b) return null;
                        for (var f = a ? b : 0, g = a ? b + 1 : e.length; f < g; f++) {
                            var h = e[f];
                            if (!(!h.selected || (c.support.optDisabled ? h.disabled : null !== h.getAttribute("disabled")) || h.parentNode.disabled && c.nodeName(h.parentNode, "optgroup"))) {
                                h = c(h).val();
                                if (a) return h;
                                d.push(h)
                            }
                        }
                        return a && !d.length && e.length ? c(e[b]).val() : d
                    },
                    set: function(a, b) {
                        var d = c.makeArray(b);
                        c(a).find("option").each(function() {
                            this.selected = 0 <= c.inArray(c(this).val(), d)
                        });
                        d.length || (a.selectedIndex = -1);
                        return d
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
            attrFix: {
                tabindex: "tabIndex"
            },
            attr: function(a, b, d, e) {
                var f = a.nodeType;
                if (!a || 3 === f || 8 === f || 2 === f) return p;
                if (e && b in c.attrFn) return c(a)[b](d);
                if (!("getAttribute" in a)) return c.prop(a, b, d);
                var g, h;
                if (e = 1 !== f || !c.isXMLDoc(a)) b = c.attrFix[b] || b, (h = c.attrHooks[b]) || (Qa.test(b) ? h = Bb : J && (h = J));
                if (d !== p) {
                    if (null === d) return c.removeAttr(a, b), p;
                    if (h && "set" in h && e && (g = h.set(a, d, b)) !== p) return g;
                    a.setAttribute(b, "" + d);
                    return d
                }
                if (h && "get" in h && e &&
                    null !== (g = h.get(a, b))) return g;
                g = a.getAttribute(b);
                return null === g ? p : g
            },
            removeAttr: function(a, b) {
                var d;
                1 === a.nodeType && (b = c.attrFix[b] || b, c.attr(a, b, ""), a.removeAttribute(b), Qa.test(b) && (d = c.propFix[b] || b) in a && (a[d] = !1))
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (yb.test(a.nodeName) && a.parentNode) c.error("type property can't be changed");
                        else if (!c.support.radioValue && "radio" === b && c.nodeName(a, "input")) {
                            var d = a.value;
                            a.setAttribute("type", b);
                            d && (a.value = d);
                            return b
                        }
                    }
                },
                value: {
                    get: function(a, b) {
                        return J &&
                            c.nodeName(a, "button") ? J.get(a, b) : b in a ? a.value : null
                    },
                    set: function(a, b, d) {
                        if (J && c.nodeName(a, "button")) return J.set(a, b, d);
                        a.value = b
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(a, b, d) {
                var e = a.nodeType;
                if (!a || 3 === e || 8 === e || 2 === e) return p;
                var f;
                if (1 !== e || !c.isXMLDoc(a)) {
                    b =
                        c.propFix[b] || b;
                    var g = c.propHooks[b]
                }
                return d !== p ? g && "set" in g && (f = g.set(a, d, b)) !== p ? f : a[b] = d : g && "get" in g && null !== (f = g.get(a, b)) ? f : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = a.getAttributeNode("tabindex");
                        return b && b.specified ? parseInt(b.value, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : p
                    }
                }
            }
        });
        c.attrHooks.tabIndex = c.propHooks.tabIndex;
        var Bb = {
            get: function(a, b) {
                var d;
                return !0 === c.prop(a, b) || (d = a.getAttributeNode(b)) && !1 !== d.nodeValue ? b.toLowerCase() : p
            },
            set: function(a, b, d) {
                !1 === b ?
                    c.removeAttr(a, d) : (b = c.propFix[d] || d, b in a && (a[b] = !0), a.setAttribute(d, d.toLowerCase()));
                return d
            }
        };
        if (!c.support.getSetAttribute) {
            var J = c.valHooks.button = {
                get: function(a, b) {
                    return (a = a.getAttributeNode(b)) && "" !== a.nodeValue ? a.nodeValue : p
                },
                set: function(a, b, c) {
                    var d = a.getAttributeNode(c);
                    d || (d = q.createAttribute(c), a.setAttributeNode(d));
                    return d.nodeValue = b + ""
                }
            };
            c.each(["width", "height"], function(a, b) {
                c.attrHooks[b] = c.extend(c.attrHooks[b], {
                    set: function(a, c) {
                        if ("" === c) return a.setAttribute(b, "auto"),
                            c
                    }
                })
            })
        }
        c.support.hrefNormalized || c.each(["href", "src", "width", "height"], function(a, b) {
            c.attrHooks[b] = c.extend(c.attrHooks[b], {
                get: function(a) {
                    a = a.getAttribute(b, 2);
                    return null === a ? p : a
                }
            })
        });
        c.support.style || (c.attrHooks.style = {
            get: function(a) {
                return a.style.cssText.toLowerCase() || p
            },
            set: function(a, b) {
                return a.style.cssText = "" + b
            }
        });
        c.support.optSelected || (c.propHooks.selected = c.extend(c.propHooks.selected, {
            get: function(a) {
                if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
                return null
            }
        }));
        c.support.checkOn || c.each(["radio", "checkbox"], function() {
            c.valHooks[this] = {
                get: function(a) {
                    return null === a.getAttribute("value") ? "on" : a.value
                }
            }
        });
        c.each(["radio", "checkbox"], function() {
            c.valHooks[this] = c.extend(c.valHooks[this], {
                set: function(a, b) {
                    if (c.isArray(b)) return a.checked = 0 <= c.inArray(c(a).val(), b)
                }
            })
        });
        var ja = /\.(.*)$/,
            ra = /^(?:textarea|input|select)$/i,
            jb = /\./g,
            kb = / /g,
            Cb = /[^\w\s.|`]/g,
            Db = function(a) {
                return a.replace(Cb, "\\$\x26")
            };
        c.event = {
            add: function(a, b, d, e) {
                if (3 !== a.nodeType && 8 !== a.nodeType) {
                    if (!1 ===
                        d) d = M;
                    else if (!d) return;
                    var f;
                    if (d.handler) {
                        var g = d;
                        d = g.handler
                    }
                    d.guid || (d.guid = c.guid++);
                    if (f = c._data(a)) {
                        var h = f.events,
                            k = f.handle;
                        h || (f.events = h = {});
                        k || (f.handle = k = function(a) {
                            return "undefined" === typeof c || a && c.event.triggered === a.type ? p : c.event.handle.apply(k.elem, arguments)
                        });
                        k.elem = a;
                        b = b.split(" ");
                        for (var l, m = 0, n; l = b[m++];) {
                            f = g ? c.extend({}, g) : {
                                handler: d,
                                data: e
                            }; - 1 < l.indexOf(".") ? (n = l.split("."), l = n.shift(), f.namespace = n.slice(0).sort().join(".")) : (n = [], f.namespace = "");
                            f.type = l;
                            f.guid || (f.guid =
                                d.guid);
                            var q = h[l],
                                r = c.event.special[l] || {};
                            q || (q = h[l] = [], r.setup && !1 !== r.setup.call(a, e, n, k) || (a.addEventListener ? a.addEventListener(l, k, !1) : a.attachEvent && a.attachEvent("on" + l, k)));
                            r.add && (r.add.call(a, f), f.handler.guid || (f.handler.guid = d.guid));
                            q.push(f);
                            c.event.global[l] = !0
                        }
                        a = null
                    }
                }
            },
            global: {},
            remove: function(a, b, d, e) {
                if (3 !== a.nodeType && 8 !== a.nodeType) {
                    !1 === d && (d = M);
                    var f, g, h = 0,
                        k, l = c.hasData(a) && c._data(a),
                        m = l && l.events;
                    if (l && m)
                        if (b && b.type && (d = b.handler, b = b.type), !b || "string" === typeof b && "." ===
                            b.charAt(0))
                            for (f in b = b || "", m) c.event.remove(a, f + b);
                        else {
                            for (b = b.split(" "); f = b[h++];) {
                                var n = f;
                                var q = 0 > f.indexOf(".");
                                var r = [];
                                if (!q) {
                                    r = f.split(".");
                                    f = r.shift();
                                    var B = new RegExp("(^|\\.)" + c.map(r.slice(0).sort(), Db).join("\\.(?:.*\\.)?") + "(\\.|$)")
                                }
                                if (k = m[f])
                                    if (d) {
                                        n = c.event.special[f] || {};
                                        for (g = e || 0; g < k.length; g++) {
                                            var w = k[g];
                                            if (d.guid === w.guid) {
                                                if (q || B.test(w.namespace)) null == e && k.splice(g--, 1), n.remove && n.remove.call(a, w);
                                                if (null != e) break
                                            }
                                        }
                                        if (0 === k.length || null != e && 1 === k.length) n.teardown && !1 !==
                                            n.teardown.call(a, r) || c.removeEvent(a, f, l.handle), delete m[f]
                                    } else
                                        for (g = 0; g < k.length; g++)
                                            if (w = k[g], q || B.test(w.namespace)) c.event.remove(a, n, w.handler, g), k.splice(g--, 1)
                            }
                            if (c.isEmptyObject(m)) {
                                if (b = l.handle) b.elem = null;
                                delete l.events;
                                delete l.handle;
                                c.isEmptyObject(l) && c.removeData(a, p, !0)
                            }
                        }
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(a, b, d, e) {
                var f = a.type || a,
                    g = [];
                if (0 <= f.indexOf("!")) {
                    f = f.slice(0, -1);
                    var h = !0
                }
                0 <= f.indexOf(".") && (g = f.split("."), f = g.shift(), g.sort());
                if (d &&
                    !c.event.customEvent[f] || c.event.global[f]) {
                    a = "object" === typeof a ? a[c.expando] ? a : new c.Event(f, a) : new c.Event(f);
                    a.type = f;
                    a.exclusive = h;
                    a.namespace = g.join(".");
                    a.namespace_re = new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.)?") + "(\\.|$)");
                    if (e || !d) a.preventDefault(), a.stopPropagation();
                    if (!d) c.each(c.cache, function() {
                        var d = this[c.expando];
                        d && d.events && d.events[f] && c.event.trigger(a, b, d.handle.elem)
                    });
                    else if (3 !== d.nodeType && 8 !== d.nodeType) {
                        a.result = p;
                        a.target = d;
                        b = null != b ? c.makeArray(b) : [];
                        b.unshift(a);
                        g =
                            d;
                        e = 0 > f.indexOf(":") ? "on" + f : "";
                        do h = c._data(g, "handle"), a.currentTarget = g, h && h.apply(g, b), e && c.acceptData(g) && g[e] && !1 === g[e].apply(g, b) && (a.result = !1, a.preventDefault()), g = g.parentNode || g.ownerDocument || g === a.target.ownerDocument && r; while (g && !a.isPropagationStopped());
                        if (!a.isDefaultPrevented()) {
                            var k;
                            g = c.event.special[f] || {};
                            if (!(g._default && !1 !== g._default.call(d.ownerDocument, a) || "click" === f && c.nodeName(d, "a")) && c.acceptData(d)) {
                                try {
                                    e && d[f] && ((k = d[e]) && (d[e] = null), c.event.triggered = f, d[f]())
                                } catch (l) {}
                                k &&
                                    (d[e] = k);
                                c.event.triggered = p
                            }
                        }
                        return a.result
                    }
                }
            },
            handle: function(a) {
                a = c.event.fix(a || r.event);
                var b = ((c._data(this, "events") || {})[a.type] || []).slice(0),
                    d = !a.exclusive && !a.namespace,
                    e = Array.prototype.slice.call(arguments, 0);
                e[0] = a;
                a.currentTarget = this;
                for (var f = 0, g = b.length; f < g; f++) {
                    var h = b[f];
                    if (d || a.namespace_re.test(h.namespace))
                        if (a.handler = h.handler, a.data = h.data, a.handleObj = h, h = h.handler.apply(this, e), h !== p && (a.result = h, !1 === h && (a.preventDefault(), a.stopPropagation())), a.isImmediatePropagationStopped()) break
                }
                return a.result
            },
            props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
            fix: function(a) {
                if (a[c.expando]) return a;
                var b = a;
                a = c.Event(b);
                for (var d = this.props.length, e; d;) e = this.props[--d], a[e] = b[e];
                a.target || (a.target = a.srcElement || q);
                3 ===
                    a.target.nodeType && (a.target = a.target.parentNode);
                !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement);
                null == a.pageX && null != a.clientX && (d = a.target.ownerDocument || q, b = d.documentElement, d = d.body, a.pageX = a.clientX + (b && b.scrollLeft || d && d.scrollLeft || 0) - (b && b.clientLeft || d && d.clientLeft || 0), a.pageY = a.clientY + (b && b.scrollTop || d && d.scrollTop || 0) - (b && b.clientTop || d && d.clientTop || 0));
                null != a.which || null == a.charCode && null == a.keyCode || (a.which = null != a.charCode ?
                    a.charCode : a.keyCode);
                !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey);
                a.which || a.button === p || (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
                return a
            },
            guid: 1E8,
            proxy: c.proxy,
            special: {
                ready: {
                    setup: c.bindReady,
                    teardown: c.noop
                },
                live: {
                    add: function(a) {
                        c.event.add(this, Y(a.origType, a.selector), c.extend({}, a, {
                            handler: ib,
                            guid: a.handler.guid
                        }))
                    },
                    remove: function(a) {
                        c.event.remove(this, Y(a.origType, a.selector), a)
                    }
                },
                beforeunload: {
                    setup: function(a, b, d) {
                        c.isWindow(this) && (this.onbeforeunload = d)
                    },
                    teardown: function(a,
                        b) {
                        this.onbeforeunload === b && (this.onbeforeunload = null)
                    }
                }
            }
        };
        c.removeEvent = q.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        };
        c.Event = function(a, b) {
            if (!this.preventDefault) return new c.Event(a, b);
            a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? X : M) : this.type = a;
            b && c.extend(this, b);
            this.timeStamp = c.now();
            this[c.expando] = !0
        };
        c.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = X;
                var a = this.originalEvent;
                a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = X;
                var a = this.originalEvent;
                a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = X;
                this.stopPropagation()
            },
            isDefaultPrevented: M,
            isPropagationStopped: M,
            isImmediatePropagationStopped: M
        };
        var Ra = function(a) {
                var b =
                    a.relatedTarget,
                    d = !1,
                    e = a.type;
                a.type = a.data;
                b !== this && (b && (d = c.contains(this, b)), d || (c.event.handle.apply(this, arguments), a.type = e))
            },
            Sa = function(a) {
                a.type = a.data;
                c.event.handle.apply(this, arguments)
            };
        c.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            c.event.special[a] = {
                setup: function(d) {
                    c.event.add(this, b, d && d.selector ? Sa : Ra, a)
                },
                teardown: function(a) {
                    c.event.remove(this, b, a && a.selector ? Sa : Ra)
                }
            }
        });
        c.support.submitBubbles || (c.event.special.submit = {
            setup: function(a, b) {
                if (c.nodeName(this,
                        "form")) return !1;
                c.event.add(this, "click.specialSubmit", function(a) {
                    var b = a.target,
                        d = c.nodeName(b, "input") || c.nodeName(b, "button") ? b.type : "";
                    "submit" !== d && "image" !== d || !c(b).closest("form").length || xa("submit", this, arguments)
                });
                c.event.add(this, "keypress.specialSubmit", function(a) {
                    var b = a.target,
                        d = c.nodeName(b, "input") || c.nodeName(b, "button") ? b.type : "";
                    "text" !== d && "password" !== d || !c(b).closest("form").length || 13 !== a.keyCode || xa("submit", this, arguments)
                })
            },
            teardown: function(a) {
                c.event.remove(this,
                    ".specialSubmit")
            }
        });
        if (!c.support.changeBubbles) {
            var Ta = function(a) {
                    var b = c.nodeName(a, "input") ? a.type : "",
                        d = a.value;
                    "radio" === b || "checkbox" === b ? d = a.checked : "select-multiple" === b ? d = -1 < a.selectedIndex ? c.map(a.options, function(a) {
                        return a.selected
                    }).join("-") : "" : c.nodeName(a, "select") && (d = a.selectedIndex);
                    return d
                },
                da = function(a, b) {
                    var d = a.target;
                    if (ra.test(d.nodeName) && !d.readOnly) {
                        var e = c._data(d, "_change_data");
                        var f = Ta(d);
                        "focusout" === a.type && "radio" === d.type || c._data(d, "_change_data", f);
                        e === p ||
                            f === e || null == e && !f || (a.type = "change", a.liveFired = p, c.event.trigger(a, b, d))
                    }
                };
            c.event.special.change = {
                filters: {
                    focusout: da,
                    beforedeactivate: da,
                    click: function(a) {
                        var b = a.target,
                            d = c.nodeName(b, "input") ? b.type : "";
                        ("radio" === d || "checkbox" === d || c.nodeName(b, "select")) && da.call(this, a)
                    },
                    keydown: function(a) {
                        var b = a.target,
                            d = c.nodeName(b, "input") ? b.type : "";
                        (13 === a.keyCode && !c.nodeName(b, "textarea") || 32 === a.keyCode && ("checkbox" === d || "radio" === d) || "select-multiple" === d) && da.call(this, a)
                    },
                    beforeactivate: function(a) {
                        a =
                            a.target;
                        c._data(a, "_change_data", Ta(a))
                    }
                },
                setup: function(a, b) {
                    if ("file" === this.type) return !1;
                    for (var d in ea) c.event.add(this, d + ".specialChange", ea[d]);
                    return ra.test(this.nodeName)
                },
                teardown: function(a) {
                    c.event.remove(this, ".specialChange");
                    return ra.test(this.nodeName)
                }
            };
            var ea = c.event.special.change.filters;
            ea.focus = ea.beforeactivate
        }
        c.support.focusinBubbles || c.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            function d(a) {
                var d = c.event.fix(a);
                d.type = b;
                d.originalEvent = {};
                c.event.trigger(d,
                    null, d.target);
                d.isDefaultPrevented() && a.preventDefault()
            }
            var e = 0;
            c.event.special[b] = {
                setup: function() {
                    0 === e++ && q.addEventListener(a, d, !0)
                },
                teardown: function() {
                    0 === --e && q.removeEventListener(a, d, !0)
                }
            }
        });
        c.each(["bind", "one"], function(a, b) {
            c.fn[b] = function(a, e, f) {
                if ("object" === typeof a) {
                    for (var d in a) this[b](d, e, a[d], f);
                    return this
                }
                if (2 === arguments.length || !1 === e) f = e, e = p;
                if ("one" === b) {
                    var h = function(a) {
                        c(this).unbind(a, h);
                        return f.apply(this, arguments)
                    };
                    h.guid = f.guid || c.guid++
                } else h = f;
                if ("unload" ===
                    a && "one" !== b) this.one(a, e, f);
                else {
                    d = 0;
                    for (var k = this.length; d < k; d++) c.event.add(this[d], a, h, e)
                }
                return this
            }
        });
        c.fn.extend({
            unbind: function(a, b) {
                if ("object" !== typeof a || a.preventDefault)
                    for (var d = 0, e = this.length; d < e; d++) c.event.remove(this[d], a, b);
                else
                    for (d in a) this.unbind(d, a[d]);
                return this
            },
            delegate: function(a, b, c, e) {
                return this.live(b, c, e, a)
            },
            undelegate: function(a, b, c) {
                return 0 === arguments.length ? this.unbind("live") : this.die(b, null, c, a)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    c.event.trigger(a,
                        b, this)
                })
            },
            triggerHandler: function(a, b) {
                if (this[0]) return c.event.trigger(a, b, this[0], !0)
            },
            toggle: function(a) {
                var b = arguments,
                    d = a.guid || c.guid++,
                    e = 0,
                    f = function(d) {
                        var f = (c.data(this, "lastToggle" + a.guid) || 0) % e;
                        c.data(this, "lastToggle" + a.guid, f + 1);
                        d.preventDefault();
                        return b[f].apply(this, arguments) || !1
                    };
                for (f.guid = d; e < b.length;) b[e++].guid = d;
                return this.click(f)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        });
        var sa = {
            focus: "focusin",
            blur: "focusout",
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
        c.each(["live", "die"], function(a, b) {
            c.fn[b] = function(a, e, f, g) {
                var d = 0,
                    k = g || this.selector,
                    l = g ? this : c(this.context);
                if ("object" === typeof a && !a.preventDefault) {
                    for (m in a) l[b](m, e, a[m], k);
                    return this
                }
                if ("die" === b && !a && g && "." === g.charAt(0)) return l.unbind(g), this;
                if (!1 === e || c.isFunction(e)) f = e || M, e = p;
                for (a = (a || "").split(" "); null != (g = a[d++]);) {
                    var m = ja.exec(g);
                    var n = "";
                    m && (n = m[0], g = g.replace(ja, ""));
                    if ("hover" === g) a.push("mouseenter" + n, "mouseleave" + n);
                    else if (m = g, sa[g] ? (a.push(sa[g] + n), g += n) : g = (sa[g] ||
                            g) + n, "live" === b) {
                        n = 0;
                        for (var q = l.length; n < q; n++) c.event.add(l[n], "live." + Y(g, k), {
                            data: e,
                            selector: k,
                            handler: f,
                            origType: g,
                            origHandler: f,
                            preType: m
                        })
                    } else l.unbind("live." + Y(g, k), f)
                }
                return this
            }
        });
        c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(a, b) {
            c.fn[b] = function(a, c) {
                null == c && (c = a, a = null);
                return 0 < arguments.length ? this.bind(b, a, c) :
                    this.trigger(b)
            };
            c.attrFn && (c.attrFn[b] = !0)
        });
        (function() {
            function a(a, b, c, d, e, f) {
                e = 0;
                for (var t = d.length; e < t; e++) {
                    var g = d[e];
                    if (g) {
                        var h = !1;
                        for (g = g[a]; g;) {
                            if (g.sizcache === c) {
                                h = d[g.sizset];
                                break
                            }
                            1 !== g.nodeType || f || (g.sizcache = c, g.sizset = e);
                            if (g.nodeName.toLowerCase() === b) {
                                h = g;
                                break
                            }
                            g = g[a]
                        }
                        d[e] = h
                    }
                }
            }

            function b(a, b, c, d, e, f) {
                e = 0;
                for (var t = d.length; e < t; e++) {
                    var g = d[e];
                    if (g) {
                        var h = !1;
                        for (g = g[a]; g;) {
                            if (g.sizcache === c) {
                                h = d[g.sizset];
                                break
                            }
                            if (1 === g.nodeType)
                                if (f || (g.sizcache = c, g.sizset = e), "string" !== typeof b) {
                                    if (g ===
                                        b) {
                                        h = !0;
                                        break
                                    }
                                } else if (0 < m.filter(b, [g]).length) {
                                h = g;
                                break
                            }
                            g = g[a]
                        }
                        d[e] = h
                    }
                }
            }
            var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                e = 0,
                f = Object.prototype.toString,
                g = !1,
                h = !0,
                k = /\\/g,
                l = /\W/;
            [0, 0].sort(function() {
                h = !1;
                return 0
            });
            var m = function(a, b, c, e) {
                c = c || [];
                var g = b = b || q;
                if (1 !== b.nodeType && 9 !== b.nodeType) return [];
                if (!a || "string" !== typeof a) return c;
                var t, h, x, k = !0,
                    l = m.isXML(b),
                    u = [],
                    D = a;
                do
                    if (d.exec(""), t = d.exec(D))
                        if (D =
                            t[3], u.push(t[1]), t[2]) {
                            var p = t[3];
                            break
                        }
                while (t);
                if (1 < u.length && r.exec(a))
                    if (2 === u.length && n.relative[u[0]]) var y = v(u[0] + u[1], b);
                    else
                        for (y = n.relative[u[0]] ? [b] : m(u.shift(), b); u.length;) a = u.shift(), n.relative[a] && (a += u.shift()), y = v(a, y);
                else if (!e && 1 < u.length && 9 === b.nodeType && !l && n.match.ID.test(u[0]) && !n.match.ID.test(u[u.length - 1]) && (t = m.find(u.shift(), b, l), b = t.expr ? m.filter(t.expr, t.set)[0] : t.set[0]), b)
                    for (t = e ? {
                            expr: u.pop(),
                            set: w(e)
                        } : m.find(u.pop(), 1 !== u.length || "~" !== u[0] && "+" !== u[0] || !b.parentNode ?
                            b : b.parentNode, l), y = t.expr ? m.filter(t.expr, t.set) : t.set, 0 < u.length ? h = w(y) : k = !1; u.length;) t = x = u.pop(), n.relative[x] ? t = u.pop() : x = "", null == t && (t = b), n.relative[x](h, t, l);
                else h = [];
                h || (h = y);
                h || m.error(x || a);
                if ("[object Array]" === f.call(h))
                    if (k)
                        if (b && 1 === b.nodeType)
                            for (a = 0; null != h[a]; a++) h[a] && (!0 === h[a] || 1 === h[a].nodeType && m.contains(b, h[a])) && c.push(y[a]);
                        else
                            for (a = 0; null != h[a]; a++) h[a] && 1 === h[a].nodeType && c.push(y[a]);
                else c.push.apply(c, h);
                else w(h, c);
                p && (m(p, g, c, e), m.uniqueSort(c));
                return c
            };
            m.uniqueSort =
                function(a) {
                    if (F && (g = h, a.sort(F), g))
                        for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
                    return a
                };
            m.matches = function(a, b) {
                return m(a, null, null, b)
            };
            m.matchesSelector = function(a, b) {
                return 0 < m(b, null, null, [a]).length
            };
            m.find = function(a, b, c) {
                if (!a) return [];
                for (var d = 0, e = n.order.length; d < e; d++) {
                    var f, g = n.order[d];
                    if (f = n.leftMatch[g].exec(a)) {
                        var t = f[1];
                        f.splice(1, 1);
                        if ("\\" !== t.substr(t.length - 1)) {
                            f[1] = (f[1] || "").replace(k, "");
                            var h = n.find[g](f, b, c);
                            if (null != h) {
                                a = a.replace(n.match[g], "");
                                break
                            }
                        }
                    }
                }
                h ||
                    (h = "undefined" !== typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []);
                return {
                    set: h,
                    expr: a
                }
            };
            m.filter = function(a, b, c, d) {
                for (var e, f, g = a, t = [], h = b, x = b && b[0] && m.isXML(b[0]); a && b.length;) {
                    for (var k in n.filter)
                        if (null != (e = n.leftMatch[k].exec(a)) && e[2]) {
                            var u, l = n.filter[k];
                            var D = e[1];
                            f = !1;
                            e.splice(1, 1);
                            if ("\\" !== D.substr(D.length - 1)) {
                                h === t && (t = []);
                                if (n.preFilter[k])
                                    if (e = n.preFilter[k](e, h, c, t, d, x), !e) f = u = !0;
                                    else if (!0 === e) continue;
                                if (e)
                                    for (var q = 0; null != (D = h[q]); q++)
                                        if (D) {
                                            u = l(D, e, q, h);
                                            var r = d ^
                                                !!u;
                                            c && null != u ? r ? f = !0 : h[q] = !1 : r && (t.push(D), f = !0)
                                        }
                                if (u !== p) {
                                    c || (h = t);
                                    a = a.replace(n.match[k], "");
                                    if (!f) return [];
                                    break
                                }
                            }
                        }
                    if (a === g)
                        if (null == f) m.error(a);
                        else break;
                    g = a
                }
                return h
            };
            m.error = function(a) {
                throw "Syntax error, unrecognized expression: " + a;
            };
            var n = m.selectors = {
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
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function(a) {
                            return a.getAttribute("href")
                        },
                        type: function(a) {
                            return a.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function(a, b) {
                            var c =
                                "string" === typeof b,
                                d = c && !l.test(b);
                            c = c && !d;
                            d && (b = b.toLowerCase());
                            d = 0;
                            for (var e = a.length, f; d < e; d++)
                                if (f = a[d]) {
                                    for (;
                                        (f = f.previousSibling) && 1 !== f.nodeType;);
                                    a[d] = c || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
                                }
                            c && m.filter(b, a, !0)
                        },
                        "\x3e": function(a, b) {
                            var c, d = "string" === typeof b,
                                e = 0,
                                f = a.length;
                            if (d && !l.test(b))
                                for (b = b.toLowerCase(); e < f; e++) {
                                    if (c = a[e]) c = c.parentNode, a[e] = c.nodeName.toLowerCase() === b ? c : !1
                                } else {
                                    for (; e < f; e++)(c = a[e]) && (a[e] = d ? c.parentNode : c.parentNode === b);
                                    d && m.filter(b, a, !0)
                                }
                        },
                        "": function(c,
                            d, f) {
                            var g = e++,
                                h = b;
                            if ("string" === typeof d && !l.test(d)) {
                                var t = d = d.toLowerCase();
                                h = a
                            }
                            h("parentNode", d, g, c, t, f)
                        },
                        "~": function(c, d, f) {
                            var g = e++,
                                h = b;
                            if ("string" === typeof d && !l.test(d)) {
                                var t = d = d.toLowerCase();
                                h = a
                            }
                            h("previousSibling", d, g, c, t, f)
                        }
                    },
                    find: {
                        ID: function(a, b, c) {
                            if ("undefined" !== typeof b.getElementById && !c) return (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
                        },
                        NAME: function(a, b) {
                            if ("undefined" !== typeof b.getElementsByName) {
                                var c = [];
                                b = b.getElementsByName(a[1]);
                                for (var d = 0, e = b.length; d < e; d++) b[d].getAttribute("name") ===
                                    a[1] && c.push(b[d]);
                                return 0 === c.length ? null : c
                            }
                        },
                        TAG: function(a, b) {
                            if ("undefined" !== typeof b.getElementsByTagName) return b.getElementsByTagName(a[1])
                        }
                    },
                    preFilter: {
                        CLASS: function(a, b, c, d, e, f) {
                            a = " " + a[1].replace(k, "") + " ";
                            if (f) return a;
                            f = 0;
                            for (var g; null != (g = b[f]); f++) g && (e ^ (g.className && 0 <= (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a)) ? c || d.push(g) : c && (b[f] = !1));
                            return !1
                        },
                        ID: function(a) {
                            return a[1].replace(k, "")
                        },
                        TAG: function(a, b) {
                            return a[1].replace(k, "").toLowerCase()
                        },
                        CHILD: function(a) {
                            if ("nth" ===
                                a[1]) {
                                a[2] || m.error(a[0]);
                                a[2] = a[2].replace(/^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0;
                                a[3] = b[3] - 0
                            } else a[2] && m.error(a[0]);
                            a[0] = e++;
                            return a
                        },
                        ATTR: function(a, b, c, d, e, f) {
                            b = a[1] = a[1].replace(k, "");
                            !f && n.attrMap[b] && (a[1] = n.attrMap[b]);
                            a[4] = (a[4] || a[5] || "").replace(k, "");
                            "~\x3d" === a[2] && (a[4] = " " + a[4] + " ");
                            return a
                        },
                        PSEUDO: function(a, b, c, e, f) {
                            if ("not" === a[1])
                                if (1 < (d.exec(a[3]) || "").length ||
                                    /^\w/.test(a[3])) a[3] = m(a[3], null, null, b);
                                else return a = m.filter(a[3], b, c, 1 ^ f), c || e.push.apply(e, a), !1;
                            else if (n.match.POS.test(a[0]) || n.match.CHILD.test(a[0])) return !0;
                            return a
                        },
                        POS: function(a) {
                            a.unshift(!0);
                            return a
                        }
                    },
                    filters: {
                        enabled: function(a) {
                            return !1 === a.disabled && "hidden" !== a.type
                        },
                        disabled: function(a) {
                            return !0 === a.disabled
                        },
                        checked: function(a) {
                            return !0 === a.checked
                        },
                        selected: function(a) {
                            a.parentNode && a.parentNode.selectedIndex;
                            return !0 === a.selected
                        },
                        parent: function(a) {
                            return !!a.firstChild
                        },
                        empty: function(a) {
                            return !a.firstChild
                        },
                        has: function(a, b, c) {
                            return !!m(c[3], a).length
                        },
                        header: function(a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function(a) {
                            var b = a.getAttribute("type"),
                                c = a.type;
                            return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
                        },
                        radio: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                        },
                        checkbox: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
                        },
                        file: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "file" === a.type
                        },
                        password: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "password" === a.type
                        },
                        submit: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b || "button" === b) && "submit" === a.type
                        },
                        image: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "image" === a.type
                        },
                        reset: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b || "button" === b) && "reset" === a.type
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        },
                        input: function(a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        },
                        focus: function(a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(a, b) {
                            return 0 === b
                        },
                        last: function(a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function(a, b) {
                            return 0 === b % 2
                        },
                        odd: function(a, b) {
                            return 1 === b % 2
                        },
                        lt: function(a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function(a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function(a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function(a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function(a, b, c, d) {
                            var e = b[1],
                                f = n.filters[e];
                            if (f) return f(a, c, b, d);
                            if ("contains" === e) return 0 <= (a.textContent || a.innerText ||
                                m.getText([a]) || "").indexOf(b[3]);
                            if ("not" === e) {
                                b = b[3];
                                c = 0;
                                for (d = b.length; c < d; c++)
                                    if (b[c] === a) return !1;
                                return !0
                            }
                            m.error(e)
                        },
                        CHILD: function(a, b) {
                            var c = b[1],
                                d = a;
                            switch (c) {
                                case "only":
                                case "first":
                                    for (; d = d.previousSibling;)
                                        if (1 === d.nodeType) return !1;
                                    if ("first" === c) return !0;
                                    d = a;
                                case "last":
                                    for (; d = d.nextSibling;)
                                        if (1 === d.nodeType) return !1;
                                    return !0;
                                case "nth":
                                    c = b[2];
                                    var e = b[3];
                                    if (1 === c && 0 === e) return !0;
                                    b = b[0];
                                    var f = a.parentNode;
                                    if (f && (f.sizcache !== b || !a.nodeIndex)) {
                                        var g = 0;
                                        for (d = f.firstChild; d; d = d.nextSibling) 1 ===
                                            d.nodeType && (d.nodeIndex = ++g);
                                        f.sizcache = b
                                    }
                                    a = a.nodeIndex - e;
                                    return 0 === c ? 0 === a : 0 === a % c && 0 <= a / c
                            }
                        },
                        ID: function(a, b) {
                            return 1 === a.nodeType && a.getAttribute("id") === b
                        },
                        TAG: function(a, b) {
                            return "*" === b && 1 === a.nodeType || a.nodeName.toLowerCase() === b
                        },
                        CLASS: function(a, b) {
                            return -1 < (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b)
                        },
                        ATTR: function(a, b) {
                            var c = b[1];
                            a = n.attrHandle[c] ? n.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c);
                            c = a + "";
                            var d = b[2];
                            b = b[4];
                            return null == a ? "!\x3d" === d : "\x3d" === d ? c === b :
                                "*\x3d" === d ? 0 <= c.indexOf(b) : "~\x3d" === d ? 0 <= (" " + c + " ").indexOf(b) : b ? "!\x3d" === d ? c !== b : "^\x3d" === d ? 0 === c.indexOf(b) : "$\x3d" === d ? c.substr(c.length - b.length) === b : "|\x3d" === d ? c === b || c.substr(0, b.length + 1) === b + "-" : !1 : c && !1 !== a
                        },
                        POS: function(a, b, c, d) {
                            var e = n.setFilters[b[2]];
                            if (e) return e(a, c, b, d)
                        }
                    }
                },
                r = n.match.POS,
                y = function(a, b) {
                    return "\\" + (b - 0 + 1)
                },
                B;
            for (B in n.match) n.match[B] = new RegExp(n.match[B].source + /(?![^\[]*\])(?![^\(]*\))/.source), n.leftMatch[B] = new RegExp(/(^(?:.|\r|\n)*?)/.source + n.match[B].source.replace(/\\(\d+)/g,
                y));
            var w = function(a, b) {
                a = Array.prototype.slice.call(a, 0);
                return b ? (b.push.apply(b, a), b) : a
            };
            try {
                Array.prototype.slice.call(q.documentElement.childNodes, 0)[0].nodeType
            } catch (t) {
                w = function(a, b) {
                    var c = 0;
                    b = b || [];
                    if ("[object Array]" === f.call(a)) Array.prototype.push.apply(b, a);
                    else if ("number" === typeof a.length)
                        for (var d = a.length; c < d; c++) b.push(a[c]);
                    else
                        for (; a[c]; c++) b.push(a[c]);
                    return b
                }
            }
            if (q.documentElement.compareDocumentPosition) var F = function(a, b) {
                return a === b ? (g = !0, 0) : a.compareDocumentPosition &&
                    b.compareDocumentPosition ? a.compareDocumentPosition(b) & 4 ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
            };
            else {
                F = function(a, b) {
                    if (a === b) return g = !0, 0;
                    if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                    var c = [],
                        d = [];
                    var e = a.parentNode;
                    var f = b.parentNode;
                    var h = e;
                    if (e === f) return z(a, b);
                    if (!e) return -1;
                    if (!f) return 1;
                    for (; h;) c.unshift(h), h = h.parentNode;
                    for (h = f; h;) d.unshift(h), h = h.parentNode;
                    e = c.length;
                    f = d.length;
                    for (h = 0; h < e && h < f; h++)
                        if (c[h] !== d[h]) return z(c[h], d[h]);
                    return h === e ? z(a, d[h], -1) : z(c[h],
                        b, 1)
                };
                var z = function(a, b, c) {
                    if (a === b) return c;
                    for (a = a.nextSibling; a;) {
                        if (a === b) return -1;
                        a = a.nextSibling
                    }
                    return 1
                }
            }
            m.getText = function(a) {
                for (var b = "", c, d = 0; a[d]; d++) c = a[d], 3 === c.nodeType || 4 === c.nodeType ? b += c.nodeValue : 8 !== c.nodeType && (b += m.getText(c.childNodes));
                return b
            };
            (function() {
                var a = q.createElement("div"),
                    b = "script" + (new Date).getTime(),
                    c = q.documentElement;
                a.innerHTML = "\x3ca name\x3d'" + b + "'/\x3e";
                c.insertBefore(a, c.firstChild);
                q.getElementById(b) && (n.find.ID = function(a, b, c) {
                    if ("undefined" !==
                        typeof b.getElementById && !c) return (b = b.getElementById(a[1])) ? b.id === a[1] || "undefined" !== typeof b.getAttributeNode && b.getAttributeNode("id").nodeValue === a[1] ? [b] : p : []
                }, n.filter.ID = function(a, b) {
                    var c = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id");
                    return 1 === a.nodeType && c && c.nodeValue === b
                });
                c.removeChild(a);
                c = a = null
            })();
            (function() {
                var a = q.createElement("div");
                a.appendChild(q.createComment(""));
                0 < a.getElementsByTagName("*").length && (n.find.TAG = function(a, b) {
                    b = b.getElementsByTagName(a[1]);
                    if ("*" === a[1]) {
                        a = [];
                        for (var c = 0; b[c]; c++) 1 === b[c].nodeType && a.push(b[c]);
                        b = a
                    }
                    return b
                });
                a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e";
                a.firstChild && "undefined" !== typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (n.attrHandle.href = function(a) {
                    return a.getAttribute("href", 2)
                });
                a = null
            })();
            q.querySelectorAll && function() {
                var a = m,
                    b = q.createElement("div");
                b.innerHTML = "\x3cp class\x3d'TEST'\x3e\x3c/p\x3e";
                if (!b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
                    m = function(b,
                        c, d, e) {
                        c = c || q;
                        if (!e && !m.isXML(c)) {
                            var f = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                            if (f && (1 === c.nodeType || 9 === c.nodeType)) {
                                if (f[1]) return w(c.getElementsByTagName(b), d);
                                if (f[2] && n.find.CLASS && c.getElementsByClassName) return w(c.getElementsByClassName(f[2]), d)
                            }
                            if (9 === c.nodeType) {
                                if ("body" === b && c.body) return w([c.body], d);
                                if (f && f[3]) {
                                    var g = c.getElementById(f[3]);
                                    if (g && g.parentNode) {
                                        if (g.id === f[3]) return w([g], d)
                                    } else return w([], d)
                                }
                                try {
                                    return w(c.querySelectorAll(b), d)
                                } catch (A) {}
                            } else if (1 === c.nodeType &&
                                "object" !== c.nodeName.toLowerCase()) {
                                f = c;
                                var h = (g = c.getAttribute("id")) || "__sizzle__",
                                    k = c.parentNode,
                                    l = /^\s*[+~]/.test(b);
                                g ? h = h.replace(/'/g, "\\$\x26") : c.setAttribute("id", h);
                                l && k && (c = c.parentNode);
                                try {
                                    if (!l || k) return w(c.querySelectorAll("[id\x3d'" + h + "'] " + b), d)
                                } catch (A) {} finally {
                                    g || f.removeAttribute("id")
                                }
                            }
                        }
                        return a(b, c, d, e)
                    };
                    for (var c in a) m[c] = a[c];
                    b = null
                }
            }();
            (function() {
                var a = q.documentElement,
                    b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                if (b) {
                    var c = !b.call(q.createElement("div"), "div"),
                        d = !1;
                    try {
                        b.call(q.documentElement, "[test!\x3d'']:sizzle")
                    } catch (Q) {
                        d = !0
                    }
                    m.matchesSelector = function(a, e) {
                        e = e.replace(/=\s*([^'"\]]*)\s*\]/g, "\x3d'$1']");
                        if (!m.isXML(a)) try {
                            if (d || !n.match.PSEUDO.test(e) && !/!=/.test(e)) {
                                var f = b.call(a, e);
                                if (f || !c || a.document && 11 !== a.document.nodeType) return f
                            }
                        } catch (ca) {}
                        return 0 < m(e, null, null, [a]).length
                    }
                }
            })();
            (function() {
                var a = q.createElement("div");
                a.innerHTML = "\x3cdiv class\x3d'test e'\x3e\x3c/div\x3e\x3cdiv class\x3d'test'\x3e\x3c/div\x3e";
                a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (n.order.splice(1, 0, "CLASS"), n.find.CLASS = function(a, b, c) {
                    if ("undefined" !== typeof b.getElementsByClassName && !c) return b.getElementsByClassName(a[1])
                }, a = null))
            })();
            m.contains = q.documentElement.contains ? function(a, b) {
                return a !== b && (a.contains ? a.contains(b) : !0)
            } : q.documentElement.compareDocumentPosition ? function(a, b) {
                return !!(a.compareDocumentPosition(b) & 16)
            } : function() {
                return !1
            };
            m.isXML = function(a) {
                return (a = (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1
            };
            var v = function(a, b) {
                var c, d = [],
                    e = "";
                for (b = b.nodeType ? [b] : b; c = n.match.PSEUDO.exec(a);) e += c[0], a = a.replace(n.match.PSEUDO, "");
                a = n.relative[a] ? a + "*" : a;
                c = 0;
                for (var f = b.length; c < f; c++) m(a, b[c], d);
                return m.filter(e, d)
            };
            c.find = m;
            c.expr = m.selectors;
            c.expr[":"] = c.expr.filters;
            c.unique = m.uniqueSort;
            c.text = m.getText;
            c.isXMLDoc = m.isXML;
            c.contains = m.contains
        })();
        var Eb = /Until$/,
            Fb = /^(?:parents|prevUntil|prevAll)/,
            Gb =
            /,/,
            lb = /^.[^:#\[\.,]*$/,
            Hb = Array.prototype.slice,
            Ua = c.expr.match.POS,
            Ib = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        c.fn.extend({
            find: function(a) {
                var b = this,
                    d;
                if ("string" !== typeof a) return c(a).filter(function() {
                    h = 0;
                    for (d = b.length; h < d; h++)
                        if (c.contains(b[h], this)) return !0
                });
                var e = this.pushStack("", "find", a),
                    f, g;
                var h = 0;
                for (d = this.length; h < d; h++) {
                    var k = e.length;
                    c.find(a, this[h], e);
                    if (0 < h)
                        for (f = k; f < e.length; f++)
                            for (g = 0; g < k; g++)
                                if (e[g] === e[f]) {
                                    e.splice(f--, 1);
                                    break
                                }
                }
                return e
            },
            has: function(a) {
                var b = c(a);
                return this.filter(function() {
                    for (var a = 0, e = b.length; a < e; a++)
                        if (c.contains(this, b[a])) return !0
                })
            },
            not: function(a) {
                return this.pushStack(za(this, a, !1), "not", a)
            },
            filter: function(a) {
                return this.pushStack(za(this, a, !0), "filter", a)
            },
            is: function(a) {
                return !!a && ("string" === typeof a ? 0 < c.filter(a, this).length : 0 < this.filter(a).length)
            },
            closest: function(a, b) {
                var d = [],
                    e, f = this[0];
                if (c.isArray(a)) {
                    var g = {},
                        h = 1;
                    if (f && a.length) {
                        var k = 0;
                        for (e = a.length; k < e; k++) {
                            var l = a[k];
                            g[l] || (g[l] = Ua.test(l) ? c(l, b || this.context) :
                                l)
                        }
                        for (; f && f.ownerDocument && f !== b;) {
                            for (l in g) a = g[l], (a.jquery ? -1 < a.index(f) : c(f).is(a)) && d.push({
                                selector: l,
                                elem: f,
                                level: h
                            });
                            f = f.parentNode;
                            h++
                        }
                    }
                    return d
                }
                l = Ua.test(a) || "string" !== typeof a ? c(a, b || this.context) : 0;
                k = 0;
                for (e = this.length; k < e; k++)
                    for (f = this[k]; f;)
                        if (l ? -1 < l.index(f) : c.find.matchesSelector(f, a)) {
                            d.push(f);
                            break
                        } else if (f = f.parentNode, !f || !f.ownerDocument || f === b || 11 === f.nodeType) break;
                d = 1 < d.length ? c.unique(d) : d;
                return this.pushStack(d, "closest", a)
            },
            index: function(a) {
                return a ? "string" ===
                    typeof a ? c.inArray(this[0], c(a)) : c.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
            },
            add: function(a, b) {
                a = "string" === typeof a ? c(a, b) : c.makeArray(a && a.nodeType ? [a] : a);
                b = c.merge(this.get(), a);
                return this.pushStack(ya(a[0]) || ya(b[0]) ? b : c.unique(b))
            },
            andSelf: function() {
                return this.add(this.prevObject)
            }
        });
        c.each({
            parent: function(a) {
                return (a = a.parentNode) && 11 !== a.nodeType ? a : null
            },
            parents: function(a) {
                return c.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, d) {
                return c.dir(a,
                    "parentNode", d)
            },
            next: function(a) {
                return c.nth(a, 2, "nextSibling")
            },
            prev: function(a) {
                return c.nth(a, 2, "previousSibling")
            },
            nextAll: function(a) {
                return c.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return c.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, d) {
                return c.dir(a, "nextSibling", d)
            },
            prevUntil: function(a, b, d) {
                return c.dir(a, "previousSibling", d)
            },
            siblings: function(a) {
                return c.sibling(a.parentNode.firstChild, a)
            },
            children: function(a) {
                return c.sibling(a.firstChild)
            },
            contents: function(a) {
                return c.nodeName(a,
                    "iframe") ? a.contentDocument || a.contentWindow.document : c.makeArray(a.childNodes)
            }
        }, function(a, b) {
            c.fn[a] = function(d, e) {
                var f = c.map(this, b, d),
                    g = Hb.call(arguments);
                Eb.test(a) || (e = d);
                e && "string" === typeof e && (f = c.filter(e, f));
                f = 1 < this.length && !Ib[a] ? c.unique(f) : f;
                (1 < this.length || Gb.test(e)) && Fb.test(a) && (f = f.reverse());
                return this.pushStack(f, a, g.join(","))
            }
        });
        c.extend({
            filter: function(a, b, d) {
                d && (a = ":not(" + a + ")");
                return 1 === b.length ? c.find.matchesSelector(b[0], a) ? [b[0]] : [] : c.find.matches(a, b)
            },
            dir: function(a,
                b, d) {
                var e = [];
                for (a = a[b]; a && 9 !== a.nodeType && (d === p || 1 !== a.nodeType || !c(a).is(d));) 1 === a.nodeType && e.push(a), a = a[b];
                return e
            },
            nth: function(a, b, c, e) {
                b = b || 1;
                for (e = 0; a && (1 !== a.nodeType || ++e !== b); a = a[c]);
                return a
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        });
        var Jb = / jQuery\d+="(?:\d+|null)"/g,
            ta = /^\s+/,
            Va = /<([\w:]+)/,
            Kb = /<tbody/i,
            Lb = /<|&#?\w+;/,
            Wa = /<(?:script|object|embed|option|style)/i,
            Xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Mb = /\/(java|ecma)script/i,
            ob = /^\s*<!(?:\[CDATA\[|\-\-)/,
            G = {
                legend: [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"],
                thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
                tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"],
                td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
                col: [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"],
                area: [1, "\x3cmap\x3e", "\x3c/map\x3e"],
                _default: [0, "", ""]
            };
        G.tbody = G.tfoot = G.colgroup = G.caption = G.thead;
        G.th = G.td;
        c.support.htmlSerialize ||
            (G._default = [1, "div\x3cdiv\x3e", "\x3c/div\x3e"]);
        c.fn.extend({
            text: function(a) {
                return c.isFunction(a) ? this.each(function(b) {
                    var d = c(this);
                    d.text(a.call(this, b, d.text()))
                }) : "object" !== typeof a && a !== p ? this.empty().append((this[0] && this[0].ownerDocument || q).createTextNode(a)) : c.text(this)
            },
            wrapAll: function(a) {
                if (c.isFunction(a)) return this.each(function(b) {
                    c(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = c(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]);
                    b.map(function() {
                        for (var a =
                                this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return c.isFunction(a) ? this.each(function(b) {
                    c(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = c(this),
                        d = b.contents();
                    d.length ? d.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                return this.each(function() {
                    c(this).wrapAll(a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(a) {
                    1 === this.nodeType && this.appendChild(a)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(a) {
                    1 === this.nodeType && this.insertBefore(a, this.firstChild)
                })
            },
            before: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this)
                });
                if (arguments.length) {
                    var a = c(arguments[0]);
                    a.push.apply(a, this.toArray());
                    return this.pushStack(a, "before", arguments)
                }
            },
            after: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
                if (arguments.length) {
                    var a = this.pushStack(this, "after", arguments);
                    a.push.apply(a, c(arguments[0]).toArray());
                    return a
                }
            },
            remove: function(a, b) {
                for (var d = 0, e; null != (e = this[d]); d++)
                    if (!a || c.filter(a, [e]).length) b || 1 !== e.nodeType || (c.cleanData(e.getElementsByTagName("*")), c.cleanData([e])), e.parentNode && e.parentNode.removeChild(e);
                return this
            },
            empty: function() {
                for (var a = 0, b; null != (b = this[a]); a++)
                    for (1 === b.nodeType && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
                return this
            },
            clone: function(a, b) {
                a = null == a ? !1 : a;
                b = null == b ? a : b;
                return this.map(function() {
                    return c.clone(this, a, b)
                })
            },
            html: function(a) {
                if (a === p) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(Jb, "") : null;
                if ("string" !== typeof a || Wa.test(a) || !c.support.leadingWhitespace && ta.test(a) || G[(Va.exec(a) || ["", ""])[1].toLowerCase()]) c.isFunction(a) ? this.each(function(b) {
                    var d = c(this);
                    d.html(a.call(this, b, d.html()))
                }) : this.empty().append(a);
                else try {
                    for (var b = 0, d = this.length; b < d; b++) 1 === this[b].nodeType &&
                        (c.cleanData(this[b].getElementsByTagName("*")), this[b].innerHTML = a)
                } catch (e) {
                    this.empty().append(a)
                }
                return this
            },
            replaceWith: function(a) {
                if (this[0] && this[0].parentNode) {
                    if (c.isFunction(a)) return this.each(function(b) {
                        var d = c(this),
                            e = d.html();
                        d.replaceWith(a.call(this, b, e))
                    });
                    "string" !== typeof a && (a = c(a).detach());
                    return this.each(function() {
                        var b = this.nextSibling,
                            d = this.parentNode;
                        c(this).remove();
                        b ? c(b).before(a) : c(d).append(a)
                    })
                }
                return this.length ? this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith",
                    a) : this
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b, d) {
                var e, f = a[0],
                    g = [];
                if (!c.support.checkClone && 3 === arguments.length && "string" === typeof f && Xa.test(f)) return this.each(function() {
                    c(this).domManip(a, b, d, !0)
                });
                if (c.isFunction(f)) return this.each(function(e) {
                    var g = c(this);
                    a[0] = f.call(this, e, b ? g.html() : p);
                    g.domManip(a, b, d)
                });
                if (this[0]) {
                    var h = f && f.parentNode;
                    h = c.support.parentNode && h && 11 === h.nodeType && h.childNodes.length === this.length ? {
                        fragment: h
                    } : c.buildFragment(a, this, g);
                    var k =
                        h.fragment;
                    if (e = 1 === k.childNodes.length ? k = k.firstChild : k.firstChild) {
                        b = b && c.nodeName(e, "tr");
                        for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(b ? mb(this[l], e) : this[l], h.cacheable || 1 < m && l < n ? c.clone(k, !0, !0) : k)
                    }
                    g.length && c.each(g, nb)
                }
                return this
            }
        });
        c.buildFragment = function(a, b, d) {
            var e, f, g;
            b && b[0] && (g = b[0].ownerDocument || b[0]);
            g.createDocumentFragment || (g = q);
            if (1 === a.length && "string" === typeof a[0] && 512 > a[0].length && g === q && "\x3c" === a[0].charAt(0) && !Wa.test(a[0]) && (c.support.checkClone || !Xa.test(a[0]))) {
                var h = !0;
                (f = c.fragments[a[0]]) && 1 !== f && (e = f)
            }
            e || (e = g.createDocumentFragment(), c.clean(a, g, e, d));
            h && (c.fragments[a[0]] = f ? e : 1);
            return {
                fragment: e,
                cacheable: h
            }
        };
        c.fragments = {};
        c.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            c.fn[a] = function(d) {
                var e = [];
                d = c(d);
                var f = 1 === this.length && this[0].parentNode;
                if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === d.length) return d[b](this[0]), this;
                f = 0;
                for (var g = d.length; f < g; f++) {
                    var h = (0 < f ?
                        this.clone(!0) : this).get();
                    c(d[f])[b](h);
                    e = e.concat(h)
                }
                return this.pushStack(e, a, d.selector)
            }
        });
        c.extend({
            clone: function(a, b, d) {
                var e = a.cloneNode(!0),
                    f;
                if (!(c.support.noCloneEvent && c.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || c.isXMLDoc(a))) {
                    Ba(a, e);
                    var g = Z(a);
                    var h = Z(e);
                    for (f = 0; g[f]; ++f) h[f] && Ba(g[f], h[f])
                }
                if (b && (Aa(a, e), d))
                    for (g = Z(a), h = Z(e), f = 0; g[f]; ++f) Aa(g[f], h[f]);
                return e
            },
            clean: function(a, b, d, e) {
                b = b || q;
                "undefined" === typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument ||
                    q);
                for (var f = [], g, h = 0, k; null != (k = a[h]); h++)
                    if ("number" === typeof k && (k += ""), k) {
                        if ("string" === typeof k)
                            if (Lb.test(k)) {
                                g = (Va.exec(k) || ["", ""])[1].toLowerCase();
                                var l = G[g] || G._default,
                                    m = l[0],
                                    n = b.createElement("div");
                                "option" === g && E && E.count && E.count("CVE_HTML_Option", (E.count("CVE_HTML_Option") || 0) + 1);
                                for (n.innerHTML = l[1] + k + l[2]; m--;) n = n.lastChild;
                                if (!c.support.tbody)
                                    for (m = Kb.test(k), l = "table" !== g || m ? "\x3ctable\x3e" !== l[1] || m ? [] : n.childNodes : n.firstChild && n.firstChild.childNodes, g = l.length - 1; 0 <= g; --g) c.nodeName(l[g],
                                        "tbody") && !l[g].childNodes.length && l[g].parentNode.removeChild(l[g]);
                                !c.support.leadingWhitespace && ta.test(k) && n.insertBefore(b.createTextNode(ta.exec(k)[0]), n.firstChild);
                                k = n.childNodes
                            } else k = b.createTextNode(k);
                        var p;
                        if (!c.support.appendChecked)
                            if (k[0] && "number" === typeof(p = k.length))
                                for (g = 0; g < p; g++) Da(k[g]);
                            else Da(k);
                        k.nodeType ? f.push(k) : f = c.merge(f, k)
                    }
                if (d)
                    for (a = function(a) {
                            return !a.type || Mb.test(a.type)
                        }, h = 0; f[h]; h++) !e || !c.nodeName(f[h], "script") || f[h].type && "text/javascript" !== f[h].type.toLowerCase() ?
                        (1 === f[h].nodeType && (b = c.grep(f[h].getElementsByTagName("script"), a), f.splice.apply(f, [h + 1, 0].concat(b))), d.appendChild(f[h])) : e.push(f[h].parentNode ? f[h].parentNode.removeChild(f[h]) : f[h]);
                return f
            },
            cleanData: function(a) {
                for (var b, d, e = c.cache, f = c.expando, g = c.event.special, h = c.support.deleteExpando, k = 0, l; null != (l = a[k]); k++)
                    if (!l.nodeName || !c.noData[l.nodeName.toLowerCase()])
                        if (d = l[c.expando]) {
                            if ((b = e[d] && e[d][f]) && b.events) {
                                for (var m in b.events) g[m] ? c.event.remove(l, m) : c.removeEvent(l, m, b.handle);
                                b.handle && (b.handle.elem = null)
                            }
                            h ? delete l[c.expando] : l.removeAttribute && l.removeAttribute(c.expando);
                            delete e[d]
                        }
            }
        });
        var ua = /alpha\([^)]*\)/i,
            Nb = /opacity=([^)]*)/,
            Ob = /([A-Z]|^ms)/g,
            Ya = /^-?\d+(?:px)?$/i,
            Pb = /^-?\d/,
            Qb = /^([\-+])=([\-+.\de]+)/,
            Rb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            pb = ["Left", "Right"],
            qb = ["Top", "Bottom"],
            Za, $a;
        c.fn.css = function(a, b) {
            return 2 === arguments.length && b === p ? this : c.access(this, a, b, !0, function(a, b, f) {
                return f !== p ? c.style(a, b, f) : c.css(a, b)
            })
        };
        c.extend({
            cssHooks: {
                opacity: {
                    get: function(a,
                        b) {
                        return b ? (a = V(a, "opacity", "opacity"), "" === a ? "1" : a) : a.style.opacity
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
                "float": c.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, b, d, e) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var f, g = c.camelCase(b),
                        h = a.style,
                        k = c.cssHooks[g];
                    b = c.cssProps[g] || g;
                    if (d !== p) {
                        if (e = typeof d, "string" === e && (f = Qb.exec(d)) && (d = +(f[1] + 1) * +f[2] + parseFloat(c.css(a, b)), e = "number"), !(null == d || "number" ===
                                e && isNaN(d) || ("number" !== e || c.cssNumber[g] || (d += "px"), k && "set" in k && (d = k.set(a, d)) === p))) try {
                            h[b] = d
                        } catch (l) {}
                    } else return k && "get" in k && (f = k.get(a, !1, e)) !== p ? f : h[b]
                }
            },
            css: function(a, b, d) {
                var e;
                b = c.camelCase(b);
                var f = c.cssHooks[b];
                b = c.cssProps[b] || b;
                "cssFloat" === b && (b = "float");
                if (f && "get" in f && (e = f.get(a, !0, d)) !== p) return e;
                if (V) return V(a, b)
            },
            swap: function(a, b, c) {
                var d = {},
                    f;
                for (f in b) d[f] = a.style[f], a.style[f] = b[f];
                c.call(a);
                for (f in b) a.style[f] = d[f]
            }
        });
        c.curCSS = c.css;
        c.each(["height", "width"],
            function(a, b) {
                c.cssHooks[b] = {
                    get: function(a, e, f) {
                        var d;
                        if (e) {
                            if (0 !== a.offsetWidth) return Ea(a, b, f);
                            c.swap(a, Rb, function() {
                                d = Ea(a, b, f)
                            });
                            return d
                        }
                    },
                    set: function(a, b) {
                        if (Ya.test(b)) {
                            if (b = parseFloat(b), 0 <= b) return b + "px"
                        } else return b
                    }
                }
            });
        c.support.opacity || (c.cssHooks.opacity = {
            get: function(a, b) {
                return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var d = a.style;
                a = a.currentStyle;
                var e = c.isNaN(b) ? "" : "alpha(opacity\x3d" + 100 *
                    b + ")",
                    f = a && a.filter || d.filter || "";
                d.zoom = 1;
                if (1 <= b && "" === c.trim(f.replace(ua, "")) && (d.removeAttribute("filter"), a && !a.filter)) return;
                d.filter = ua.test(f) ? f.replace(ua, e) : f + " " + e
            }
        });
        c(function() {
            c.support.reliableMarginRight || (c.cssHooks.marginRight = {
                get: function(a, b) {
                    var d;
                    c.swap(a, {
                        display: "inline-block"
                    }, function() {
                        d = b ? V(a, "margin-right", "marginRight") : a.style.marginRight
                    });
                    return d
                }
            })
        });
        q.defaultView && q.defaultView.getComputedStyle && (Za = function(a, b) {
            var d;
            b = b.replace(Ob, "-$1").toLowerCase();
            if (!(d =
                    a.ownerDocument.defaultView)) return p;
            if (d = d.getComputedStyle(a, null)) {
                var e = d.getPropertyValue(b);
                "" !== e || c.contains(a.ownerDocument.documentElement, a) || (e = c.style(a, b))
            }
            return e
        });
        q.documentElement.currentStyle && ($a = function(a, b) {
            var c = a.currentStyle && a.currentStyle[b],
                e = a.runtimeStyle && a.runtimeStyle[b],
                f = a.style;
            if (!Ya.test(c) && Pb.test(c)) {
                var g = f.left;
                e && (a.runtimeStyle.left = a.currentStyle.left);
                f.left = "fontSize" === b ? "1em" : c || 0;
                c = f.pixelLeft + "px";
                f.left = g;
                e && (a.runtimeStyle.left = e)
            }
            return "" ===
                c ? "auto" : c
        });
        var V = Za || $a;
        c.expr && c.expr.filters && (c.expr.filters.hidden = function(a) {
            var b = a.offsetHeight;
            return 0 === a.offsetWidth && 0 === b || !c.support.reliableHiddenOffsets && "none" === (a.style.display || c.css(a, "display"))
        }, c.expr.filters.visible = function(a) {
            return !c.expr.filters.hidden(a)
        });
        var Sb = /%20/g,
            rb = /\[\]$/,
            ab = /\r?\n/g,
            Tb = /#.*$/,
            Ub = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
            Vb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            Wb = /^(?:GET|HEAD)$/,
            Xb = /^\/\//,
            bb = /\?/,
            Yb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            Zb = /^(?:select|textarea)/i,
            Ga = /\s+/,
            $b = /([?&])_=[^&]*/,
            cb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
            db = c.fn.load,
            ka = {},
            eb = {};
        try {
            var P = ub.href
        } catch (a) {
            P = q.createElement("a"), P.href = "", P = P.href
        }
        var O = cb.exec(P.toLowerCase()) || [];
        c.fn.extend({
            load: function(a, b, d) {
                if ("string" !== typeof a && db) return db.apply(this, arguments);
                if (!this.length) return this;
                var e = a.indexOf(" ");
                if (0 <= e) {
                    var f = a.slice(e, a.length);
                    a = a.slice(0,
                        e)
                }
                e = "GET";
                b && (c.isFunction(b) ? (d = b, b = p) : "object" === typeof b && (b = c.param(b, c.ajaxSettings.traditional), e = "POST"));
                var g = this;
                c.ajax({
                    url: a,
                    type: e,
                    dataType: "html",
                    data: b,
                    complete: function(a, b, e) {
                        e = a.responseText;
                        a.isResolved() && (a.done(function(a) {
                            e = a
                        }), g.html(f ? c("\x3cdiv\x3e").append(e.replace(Yb, "")).find(f) : e));
                        d && g.each(d, [e, b, a])
                    }
                });
                return this
            },
            serialize: function() {
                return c.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    return this.elements ? c.makeArray(this.elements) :
                        this
                }).filter(function() {
                    return this.name && !this.disabled && (this.checked || Zb.test(this.nodeName) || Vb.test(this.type))
                }).map(function(a, b) {
                    a = c(this).val();
                    return null == a ? null : c.isArray(a) ? c.map(a, function(a, c) {
                        return {
                            name: b.name,
                            value: a.replace(ab, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: a.replace(ab, "\r\n")
                    }
                }).get()
            }
        });
        c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
            c.fn[b] = function(a) {
                return this.bind(b, a)
            }
        });
        c.each(["get", "post"], function(a, b) {
            c[b] = function(a,
                e, f, g) {
                c.isFunction(e) && (g = g || f, f = e, e = p);
                return c.ajax({
                    type: b,
                    url: a,
                    data: e,
                    success: f,
                    dataType: g
                })
            }
        });
        c.extend({
            getScript: function(a, b) {
                return c.get(a, p, b, "script")
            },
            getJSON: function(a, b, d) {
                return c.get(a, b, d, "json")
            },
            ajaxSetup: function(a, b) {
                b ? Ha(a, c.ajaxSettings) : (b = a, a = c.ajaxSettings);
                Ha(a, b);
                return a
            },
            ajaxSettings: {
                url: P,
                isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(O[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": "*/*"
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
                    "* text": r.String,
                    "text html": !0,
                    "text json": c.parseJSON,
                    "text xml": c.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: Fa(ka),
            ajaxTransport: Fa(eb),
            ajax: function(a, b) {
                function d(a, b, d, m) {
                    if (2 !== F) {
                        F = 2;
                        w && clearTimeout(w);
                        B = p;
                        q = m || "";
                        v.readyState = 0 < a ? 4 : 0;
                        m = b;
                        if (d) {
                            var n = e,
                                r = v,
                                u = n.contents,
                                y = n.dataTypes,
                                Q = n.responseFields,
                                A, D;
                            for (C in Q) C in d && (r[Q[C]] = d[C]);
                            for (;
                                "*" === y[0];) y.shift(), A === p && (A = n.mimeType || r.getResponseHeader("content-type"));
                            if (A)
                                for (C in u)
                                    if (u[C] && u[C].test(A)) {
                                        y.unshift(C);
                                        break
                                    }
                            if (y[0] in d) var z = y[0];
                            else {
                                for (C in d) {
                                    if (!y[0] || n.converters[C + " " + y[0]]) {
                                        z = C;
                                        break
                                    }
                                    D || (D = C)
                                }
                                z = z || D
                            }
                            z ? (z !== y[0] && y.unshift(z), d = d[z]) : d = void 0
                        } else d = p;
                        if (200 <= a && 300 > a || 304 === a) {
                            if (e.ifModified) {
                                if (A = v.getResponseHeader("Last-Modified")) c.lastModified[x] = A;
                                if (A = v.getResponseHeader("Etag")) c.etag[x] =
                                    A
                            }
                            if (304 === a) {
                                m = "notmodified";
                                var G = !0
                            } else try {
                                A = e;
                                A.dataFilter && (d = A.dataFilter(d, A.dataType));
                                var K = A.dataTypes;
                                var C = {};
                                var S, H, R = K.length,
                                    E = K[0];
                                for (S = 1; S < R; S++) {
                                    if (1 === S)
                                        for (H in A.converters) "string" === typeof H && (C[H.toLowerCase()] = A.converters[H]);
                                    var I = E;
                                    E = K[S];
                                    if ("*" === E) E = I;
                                    else if ("*" !== I && I !== E) {
                                        var M = I + " " + E;
                                        var T = C[M] || C["* " + E];
                                        if (!T) {
                                            var L = p;
                                            for (J in C) {
                                                var N = J.split(" ");
                                                if (N[0] === I || "*" === N[0])
                                                    if (L = C[N[1] + " " + E]) {
                                                        var J = C[J];
                                                        !0 === J ? T = L : !0 === L && (T = J);
                                                        break
                                                    }
                                            }
                                        }
                                        T || L || c.error("No conversion from " +
                                            M.replace(" ", " to "));
                                        !0 !== T && (d = T ? T(d) : L(J(d)))
                                    }
                                }
                                var P = d;
                                m = "success";
                                G = !0
                            } catch (ac) {
                                m = "parsererror";
                                var O = ac
                            }
                        } else if (O = m, !m || a) m = "error", 0 > a && (a = 0);
                        v.status = a;
                        v.statusText = "" + (b || m);
                        G ? h.resolveWith(f, [P, m, v]) : h.rejectWith(f, [v, m, O]);
                        v.statusCode(l);
                        l = p;
                        t && g.trigger("ajax" + (G ? "Success" : "Error"), [v, e, G ? P : O]);
                        k.resolveWith(f, [v, m]);
                        t && (g.trigger("ajaxComplete", [v, e]), --c.active || c.event.trigger("ajaxStop"))
                    }
                }
                "object" === typeof a && (b = a, a = p);
                b = b || {};
                var e = c.ajaxSetup({}, b),
                    f = e.context || e,
                    g = f !== e && (f.nodeType ||
                        f instanceof c) ? c(f) : c.event,
                    h = c.Deferred(),
                    k = c._Deferred(),
                    l = e.statusCode || {},
                    m = {},
                    n = {},
                    q, r, B, w, F = 0,
                    z, v = {
                        readyState: 0,
                        setRequestHeader: function(a, b) {
                            if (!F) {
                                var c = a.toLowerCase();
                                a = n[c] = n[c] || a;
                                m[a] = b
                            }
                            return this
                        },
                        getAllResponseHeaders: function() {
                            return 2 === F ? q : null
                        },
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === F) {
                                if (!r)
                                    for (r = {}; b = Ub.exec(q);) r[b[1].toLowerCase()] = b[2];
                                b = r[a.toLowerCase()]
                            }
                            return b === p ? null : b
                        },
                        overrideMimeType: function(a) {
                            F || (e.mimeType = a);
                            return this
                        },
                        abort: function(a) {
                            a = a || "abort";
                            B && B.abort(a);
                            d(0, a);
                            return this
                        }
                    };
                h.promise(v);
                v.success = v.done;
                v.error = v.fail;
                v.complete = k.done;
                v.statusCode = function(a) {
                    if (a)
                        if (2 > F)
                            for (b in a) l[b] = [l[b], a[b]];
                        else {
                            var b = a[v.status];
                            v.then(b, b)
                        }
                    return this
                };
                e.url = ((a || e.url) + "").replace(Tb, "").replace(Xb, O[1] + "//");
                e.dataTypes = c.trim(e.dataType || "*").toLowerCase().split(Ga);
                null == e.crossDomain && (a = cb.exec(e.url.toLowerCase()), e.crossDomain = !(!a || a[1] == O[1] && a[2] == O[2] && (a[3] || ("http:" === a[1] ? 80 : 443)) == (O[3] || ("http:" === O[1] ? 80 : 443))));
                e.data &&
                    e.processData && "string" !== typeof e.data && (e.data = c.param(e.data, e.traditional));
                aa(ka, e, b, v);
                if (2 === F) return !1;
                var t = e.global;
                e.type = e.type.toUpperCase();
                e.hasContent = !Wb.test(e.type);
                t && 0 === c.active++ && c.event.trigger("ajaxStart");
                if (!e.hasContent) {
                    e.data && (e.url += (bb.test(e.url) ? "\x26" : "?") + e.data, delete e.data);
                    var x = e.url;
                    if (!1 === e.cache) {
                        a = c.now();
                        var D = e.url.replace($b, "$1_\x3d" + a);
                        e.url = D + (D === e.url ? (bb.test(e.url) ? "\x26" : "?") + "_\x3d" + a : "")
                    }
                }(e.data && e.hasContent && !1 !== e.contentType || b.contentType) &&
                v.setRequestHeader("Content-Type", e.contentType);
                e.ifModified && (x = x || e.url, c.lastModified[x] && v.setRequestHeader("If-Modified-Since", c.lastModified[x]), c.etag[x] && v.setRequestHeader("If-None-Match", c.etag[x]));
                v.setRequestHeader("Accept", e.dataTypes[0] && e.accepts[e.dataTypes[0]] ? e.accepts[e.dataTypes[0]] + ("*" !== e.dataTypes[0] ? ", */*; q\x3d0.01" : "") : e.accepts["*"]);
                for (z in e.headers) v.setRequestHeader(z, e.headers[z]);
                if (e.beforeSend && (!1 === e.beforeSend.call(f, v, e) || 2 === F)) return v.abort(), !1;
                for (z in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) v[z](e[z]);
                if (B = aa(eb, e, b, v)) {
                    v.readyState = 1;
                    t && g.trigger("ajaxSend", [v, e]);
                    e.async && 0 < e.timeout && (w = setTimeout(function() {
                        v.abort("timeout")
                    }, e.timeout));
                    try {
                        F = 1, B.send(m, d)
                    } catch (u) {
                        2 > F ? d(-1, u) : c.error(u)
                    }
                } else d(-1, "No Transport");
                return v
            },
            param: function(a, b) {
                var d = [],
                    e = function(a, b) {
                        b = c.isFunction(b) ? b() : b;
                        d[d.length] = encodeURIComponent(a) + "\x3d" + encodeURIComponent(b)
                    };
                b === p && (b = c.ajaxSettings.traditional);
                if (c.isArray(a) || a.jquery && !c.isPlainObject(a)) c.each(a, function() {
                    e(this.name,
                        this.value)
                });
                else
                    for (var f in a) la(f, a[f], b, e);
                return d.join("\x26").replace(Sb, "+")
            }
        });
        c.extend({
            active: 0,
            lastModified: {},
            etag: {}
        });
        var bc = c.now(),
            fa = /(=)\?(&|$)|\?\?/i;
        c.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                return c.expando + "_" + bc++
            }
        });
        c.ajaxPrefilter("json jsonp", function(a, b, d) {
            b = "application/x-www-form-urlencoded" === a.contentType && "string" === typeof a.data;
            if ("jsonp" === a.dataTypes[0] || !1 !== a.jsonp && (fa.test(a.url) || b && fa.test(a.data))) {
                var e, f = a.jsonpCallback = c.isFunction(a.jsonpCallback) ?
                    a.jsonpCallback() : a.jsonpCallback,
                    g = r[f],
                    h = a.url,
                    k = a.data,
                    l = "$1" + f + "$2";
                !1 !== a.jsonp && (h = h.replace(fa, l), a.url === h && (b && (k = k.replace(fa, l)), a.data === k && (h += (/\?/.test(h) ? "\x26" : "?") + a.jsonp + "\x3d" + f)));
                a.url = h;
                a.data = k;
                r[f] = function(a) {
                    e = [a]
                };
                d.always(function() {
                    r[f] = g;
                    if (e && c.isFunction(g)) r[f](e[0])
                });
                a.converters["script json"] = function() {
                    e || c.error(f + " was not called");
                    return e[0]
                };
                a.dataTypes[0] = "json";
                return "script"
            }
        });
        c.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function(a) {
                    c.globalEval(a);
                    return a
                }
            }
        });
        c.ajaxPrefilter("script", function(a) {
            a.cache === p && (a.cache = !1);
            a.crossDomain && (a.type = "GET", a.global = !1)
        });
        c.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c = q.head || q.getElementsByTagName("head")[0] || q.documentElement;
                return {
                    send: function(d, f) {
                        b = q.createElement("script");
                        b.async = "async";
                        a.scriptCharset && (b.charset = a.scriptCharset);
                        b.src = a.url;
                        b.onload = b.onreadystatechange = function(a,
                            d) {
                            if (d || !b.readyState || /loaded|complete/.test(b.readyState)) b.onload = b.onreadystatechange = null, c && b.parentNode && c.removeChild(b), b = p, d || f(200, "success")
                        };
                        c.insertBefore(b, c.firstChild)
                    },
                    abort: function() {
                        if (b) b.onload(0, 1)
                    }
                }
            }
        });
        var va = r.ActiveXObject ? function() {
                for (var a in U) U[a](0, 1)
            } : !1,
            cc = 0,
            U;
        c.ajaxSettings.xhr = r.ActiveXObject ? function() {
            var a;
            if (!(a = !this.isLocal && Ia())) a: {
                try {
                    a = new r.ActiveXObject("Microsoft.XMLHTTP");
                    break a
                } catch (b) {}
                a = void 0
            }
            return a
        } : Ia;
        (function(a) {
            c.extend(c.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        })(c.ajaxSettings.xhr());
        c.support.ajax && c.ajaxTransport(function(a) {
            if (!a.crossDomain || c.support.cors) {
                var b;
                return {
                    send: function(d, e) {
                        var f = a.xhr(),
                            g;
                        a.username ? f.open(a.type, a.url, a.async, a.username, a.password) : f.open(a.type, a.url, a.async);
                        if (a.xhrFields)
                            for (g in a.xhrFields) f[g] = a.xhrFields[g];
                        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType);
                        a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (g in d) f.setRequestHeader(g,
                                d[g])
                        } catch (k) {}
                        f.send(a.hasContent && a.data || null);
                        b = function(d, g) {
                            var k;
                            try {
                                if (b && (g || 4 === f.readyState))
                                    if (b = p, h && (f.onreadystatechange = c.noop, va && delete U[h]), g) 4 !== f.readyState && f.abort();
                                    else {
                                        var l = f.status;
                                        var q = f.getAllResponseHeaders();
                                        var r = {};
                                        (k = f.responseXML) && k.documentElement && (r.xml = k);
                                        r.text = f.responseText;
                                        try {
                                            var B = f.statusText
                                        } catch (w) {
                                            B = ""
                                        }
                                        l || !a.isLocal || a.crossDomain ? 1223 === l && (l = 204) : l = r.text ? 200 : 404
                                    }
                            } catch (w) {
                                g || e(-1, w)
                            }
                            r && e(l, B, r, q)
                        };
                        if (a.async && 4 !== f.readyState) {
                            var h = ++cc;
                            va &&
                                (U || (U = {}, c(r).unload(va)), U[h] = b);
                            f.onreadystatechange = b
                        } else b()
                    },
                    abort: function() {
                        b && b(0, 1)
                    }
                }
            }
        });
        var ma = {},
            H, N, dc = /^(?:toggle|show|hide)$/,
            ec = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
            ha, Ka = [
                ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
                ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
                ["opacity"]
            ],
            ba;
        c.fn.extend({
            show: function(a, b, d) {
                if (a || 0 === a) return this.animate(L("show", 3), a, b, d);
                d = 0;
                for (var e = this.length; d < e; d++) a = this[d], a.style && (b = a.style.display, c._data(a,
                    "olddisplay") || "none" !== b || (b = a.style.display = ""), "" === b && "none" === c.css(a, "display") && c._data(a, "olddisplay", La(a.nodeName)));
                for (d = 0; d < e; d++)
                    if (a = this[d], a.style && (b = a.style.display, "" === b || "none" === b)) a.style.display = c._data(a, "olddisplay") || "";
                return this
            },
            hide: function(a, b, d) {
                if (a || 0 === a) return this.animate(L("hide", 3), a, b, d);
                a = 0;
                for (b = this.length; a < b; a++) this[a].style && (d = c.css(this[a], "display"), "none" === d || c._data(this[a], "olddisplay") || c._data(this[a], "olddisplay", d));
                for (a = 0; a < b; a++) this[a].style &&
                    (this[a].style.display = "none");
                return this
            },
            _toggle: c.fn.toggle,
            toggle: function(a, b, d) {
                var e = "boolean" === typeof a;
                c.isFunction(a) && c.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || e ? this.each(function() {
                    var b = e ? a : c(this).is(":hidden");
                    c(this)[b ? "show" : "hide"]()
                }) : this.animate(L("toggle", 3), a, b, d);
                return this
            },
            fadeTo: function(a, b, c, e) {
                return this.filter(":hidden").css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, e)
            },
            animate: function(a, b, d, e) {
                var f = c.speed(b, d, e);
                if (c.isEmptyObject(a)) return this.each(f.complete, [!1]);
                a = c.extend({}, a);
                return this[!1 === f.queue ? "each" : "queue"](function() {
                    !1 === f.queue && c._mark(this);
                    var b = c.extend({}, f),
                        d = 1 === this.nodeType,
                        e = d && c(this).is(":hidden"),
                        l;
                    b.animatedProperties = {};
                    for (l in a) {
                        var m = c.camelCase(l);
                        l !== m && (a[m] = a[l], delete a[l]);
                        var n = a[m];
                        c.isArray(n) ? (b.animatedProperties[m] = n[1], n = a[m] = n[0]) : b.animatedProperties[m] = b.specialEasing && b.specialEasing[m] || b.easing || "swing";
                        if ("hide" === n && e || "show" === n && !e) return b.complete.call(this);
                        !d || "height" !== m && "width" !== m || (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === c.css(this, "display") && "none" === c.css(this, "float") && (c.support.inlineBlockNeedsLayout ? (n = La(this.nodeName), "inline" === n ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
                    }
                    null != b.overflow && (this.style.overflow = "hidden");
                    for (l in a)
                        if (d = new c.fx(this, b, l), n = a[l], dc.test(n)) d["toggle" === n ? e ? "show" : "hide" : n]();
                        else {
                            m = ec.exec(n);
                            var q = d.cur();
                            if (m) {
                                n = parseFloat(m[2]);
                                var p = m[3] || (c.cssNumber[l] ? "" : "px");
                                "px" !== p && (c.style(this, l, (n || 1) + p), q *= (n || 1) / d.cur(), c.style(this, l, q + p));
                                m[1] && (n = ("-\x3d" === m[1] ? -1 : 1) * n + q);
                                d.custom(q, n, p)
                            } else d.custom(q, n, "")
                        }
                    return !0
                })
            },
            stop: function(a, b) {
                a && this.queue([]);
                this.each(function() {
                    var a = c.timers,
                        e = a.length;
                    for (b || c._unmark(!0, this); e--;)
                        if (a[e].elem === this) {
                            if (b) a[e](!0);
                            a.splice(e, 1)
                        }
                });
                b || this.dequeue();
                return this
            }
        });
        c.each({
            slideDown: L("show", 1),
            slideUp: L("hide", 1),
            slideToggle: L("toggle", 1),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            c.fn[a] = function(a, c, f) {
                return this.animate(b, a, c, f)
            }
        });
        c.extend({
            speed: function(a, b, d) {
                var e = a && "object" === typeof a ? c.extend({}, a) : {
                    complete: d || !d && b || c.isFunction(a) && a,
                    duration: a,
                    easing: d && b || b && !c.isFunction(b) && b
                };
                e.duration = c.fx.off ? 0 : "number" === typeof e.duration ? e.duration : e.duration in c.fx.speeds ? c.fx.speeds[e.duration] : c.fx.speeds._default;
                e.old = e.complete;
                e.complete = function(a) {
                    c.isFunction(e.old) && e.old.call(this);
                    !1 !== e.queue ? c.dequeue(this) :
                        !1 !== a && c._unmark(this)
                };
                return e
            },
            easing: {
                linear: function(a, b, c, e) {
                    return c + e * a
                },
                swing: function(a, b, c, e) {
                    return (-Math.cos(a * Math.PI) / 2 + .5) * e + c
                }
            },
            timers: [],
            fx: function(a, b, c) {
                this.options = b;
                this.elem = a;
                this.prop = c;
                b.orig = b.orig || {}
            }
        });
        c.fx.prototype = {
            update: function() {
                this.options.step && this.options.step.call(this.elem, this.now, this);
                (c.fx.step[this.prop] || c.fx.step._default)(this)
            },
            cur: function() {
                if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
                var a, b = c.css(this.elem, this.prop);
                return isNaN(a = parseFloat(b)) ? b && "auto" !== b ? b : 0 : a
            },
            custom: function(a, b, d) {
                function e(a) {
                    return f.step(a)
                }
                var f = this,
                    g = c.fx;
                this.startTime = ba || Ja();
                this.start = a;
                this.end = b;
                this.unit = d || this.unit || (c.cssNumber[this.prop] ? "" : "px");
                this.now = this.start;
                this.pos = this.state = 0;
                e.elem = this.elem;
                e() && c.timers.push(e) && !ha && (ha = setInterval(g.tick, g.interval))
            },
            show: function() {
                this.options.orig[this.prop] = c.style(this.elem, this.prop);
                this.options.show = !0;
                this.custom("width" ===
                    this.prop || "height" === this.prop ? 1 : 0, this.cur());
                c(this.elem).show()
            },
            hide: function() {
                this.options.orig[this.prop] = c.style(this.elem, this.prop);
                this.options.hide = !0;
                this.custom(this.cur(), 0)
            },
            step: function(a) {
                var b = ba || Ja(),
                    d = !0,
                    e = this.elem,
                    f = this.options,
                    g;
                if (a || b >= f.duration + this.startTime) {
                    this.now = this.end;
                    this.pos = this.state = 1;
                    this.update();
                    f.animatedProperties[this.prop] = !0;
                    for (g in f.animatedProperties) !0 !== f.animatedProperties[g] && (d = !1);
                    if (d) {
                        null == f.overflow || c.support.shrinkWrapBlocks ||
                            c.each(["", "X", "Y"], function(a, b) {
                                e.style["overflow" + b] = f.overflow[a]
                            });
                        f.hide && c(e).hide();
                        if (f.hide || f.show)
                            for (var h in f.animatedProperties) c.style(e, h, f.orig[h]);
                        f.complete.call(e)
                    }
                    return !1
                }
                Infinity == f.duration ? this.now = b : (a = b - this.startTime, this.state = a / f.duration, this.pos = c.easing[f.animatedProperties[this.prop]](this.state, a, 0, 1, f.duration), this.now = this.start + (this.end - this.start) * this.pos);
                this.update();
                return !0
            }
        };
        c.extend(c.fx, {
            tick: function() {
                for (var a = c.timers, b = 0; b < a.length; ++b) a[b]() ||
                    a.splice(b--, 1);
                a.length || c.fx.stop()
            },
            interval: 13,
            stop: function() {
                clearInterval(ha);
                ha = null
            },
            speeds: {
                slow: 600,
                fast: 200,
                _default: 400
            },
            step: {
                opacity: function(a) {
                    c.style(a.elem, "opacity", a.now)
                },
                _default: function(a) {
                    a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = ("width" === a.prop || "height" === a.prop ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
                }
            }
        });
        c.expr && c.expr.filters && (c.expr.filters.animated = function(a) {
            return c.grep(c.timers, function(b) {
                return a === b.elem
            }).length
        });
        var fc =
            /^t(?:able|d|h)$/i,
            fb = /^(?:body|html)$/i;
        c.fn.offset = "getBoundingClientRect" in q.documentElement ? function(a) {
            var b = this[0];
            if (a) return this.each(function(b) {
                c.offset.setOffset(this, a, b)
            });
            if (!b || !b.ownerDocument) return null;
            if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
            try {
                var d = b.getBoundingClientRect()
            } catch (g) {}
            var e = b.ownerDocument,
                f = e.documentElement;
            if (!d || !c.contains(f, b)) return d ? {
                top: d.top,
                left: d.left
            } : {
                top: 0,
                left: 0
            };
            b = e.body;
            e = na(e);
            return {
                top: d.top + (e.pageYOffset || c.support.boxModel &&
                    f.scrollTop || b.scrollTop) - (f.clientTop || b.clientTop || 0),
                left: d.left + (e.pageXOffset || c.support.boxModel && f.scrollLeft || b.scrollLeft) - (f.clientLeft || b.clientLeft || 0)
            }
        } : function(a) {
            var b = this[0];
            if (a) return this.each(function(b) {
                c.offset.setOffset(this, a, b)
            });
            if (!b || !b.ownerDocument) return null;
            if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
            c.offset.initialize();
            var d = b.offsetParent,
                e = b.ownerDocument,
                f = e.documentElement,
                g = e.body;
            var h = (e = e.defaultView) ? e.getComputedStyle(b, null) : b.currentStyle;
            for (var k = b.offsetTop, l = b.offsetLeft;
                (b = b.parentNode) && b !== g && b !== f && (!c.offset.supportsFixedPosition || "fixed" !== h.position);) h = e ? e.getComputedStyle(b, null) : b.currentStyle, k -= b.scrollTop, l -= b.scrollLeft, b === d && (k += b.offsetTop, l += b.offsetLeft, !c.offset.doesNotAddBorder || c.offset.doesAddBorderForTableAndCells && fc.test(b.nodeName) || (k += parseFloat(h.borderTopWidth) || 0, l += parseFloat(h.borderLeftWidth) || 0), d = b.offsetParent), c.offset.subtractsBorderForOverflowNotVisible && "visible" !== h.overflow && (k += parseFloat(h.borderTopWidth) ||
                0, l += parseFloat(h.borderLeftWidth) || 0);
            if ("relative" === h.position || "static" === h.position) k += g.offsetTop, l += g.offsetLeft;
            c.offset.supportsFixedPosition && "fixed" === h.position && (k += Math.max(f.scrollTop, g.scrollTop), l += Math.max(f.scrollLeft, g.scrollLeft));
            return {
                top: k,
                left: l
            }
        };
        c.offset = {
            initialize: function() {
                var a = q.body,
                    b = q.createElement("div"),
                    d = parseFloat(c.css(a, "marginTop")) || 0;
                c.extend(b.style, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    margin: 0,
                    border: 0,
                    width: "1px",
                    height: "1px",
                    visibility: "hidden"
                });
                b.innerHTML =
                    "\x3cdiv style\x3d'position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/div\x3e\x3ctable style\x3d'position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding\x3d'0' cellspacing\x3d'0'\x3e\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e";
                a.insertBefore(b, a.firstChild);
                var e = b.firstChild;
                var f = e.firstChild;
                var g = e.nextSibling.firstChild.firstChild;
                this.doesNotAddBorder = 5 !==
                    f.offsetTop;
                this.doesAddBorderForTableAndCells = 5 === g.offsetTop;
                f.style.position = "fixed";
                f.style.top = "20px";
                this.supportsFixedPosition = 20 === f.offsetTop || 15 === f.offsetTop;
                f.style.position = f.style.top = "";
                e.style.overflow = "hidden";
                e.style.position = "relative";
                this.subtractsBorderForOverflowNotVisible = -5 === f.offsetTop;
                this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== d;
                a.removeChild(b);
                c.offset.initialize = c.noop
            },
            bodyOffset: function(a) {
                var b = a.offsetTop,
                    d = a.offsetLeft;
                c.offset.initialize();
                c.offset.doesNotIncludeMarginInBodyOffset &&
                    (b += parseFloat(c.css(a, "marginTop")) || 0, d += parseFloat(c.css(a, "marginLeft")) || 0);
                return {
                    top: b,
                    left: d
                }
            },
            setOffset: function(a, b, d) {
                var e = c.css(a, "position");
                "static" === e && (a.style.position = "relative");
                var f = c(a),
                    g = f.offset(),
                    h = c.css(a, "top"),
                    k = c.css(a, "left"),
                    l = {};
                ("absolute" === e || "fixed" === e) && -1 < c.inArray("auto", [h, k]) ? (k = f.position(), e = k.top, k = k.left) : (e = parseFloat(h) || 0, k = parseFloat(k) || 0);
                c.isFunction(b) && (b = b.call(a, d, g));
                null != b.top && (l.top = b.top - g.top + e);
                null != b.left && (l.left = b.left - g.left +
                    k);
                "using" in b ? b.using.call(a, l) : f.css(l)
            }
        };
        c.fn.extend({
            position: function() {
                if (!this[0]) return null;
                var a = this[0],
                    b = this.offsetParent(),
                    d = this.offset(),
                    e = fb.test(b[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : b.offset();
                d.top -= parseFloat(c.css(a, "marginTop")) || 0;
                d.left -= parseFloat(c.css(a, "marginLeft")) || 0;
                e.top += parseFloat(c.css(b[0], "borderTopWidth")) || 0;
                e.left += parseFloat(c.css(b[0], "borderLeftWidth")) || 0;
                return {
                    top: d.top - e.top,
                    left: d.left - e.left
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a =
                            this.offsetParent || q.body; a && !fb.test(a.nodeName) && "static" === c.css(a, "position");) a = a.offsetParent;
                    return a
                })
            }
        });
        c.each(["Left", "Top"], function(a, b) {
            var d = "scroll" + b;
            c.fn[d] = function(b) {
                var e;
                if (b === p) {
                    var g = this[0];
                    return g ? (e = na(g)) ? "pageXOffset" in e ? e[a ? "pageYOffset" : "pageXOffset"] : c.support.boxModel && e.document.documentElement[d] || e.document.body[d] : g[d] : null
                }
                return this.each(function() {
                    (e = na(this)) ? e.scrollTo(a ? c(e).scrollLeft() : b, a ? b : c(e).scrollTop()): this[d] = b
                })
            }
        });
        c.each(["Height", "Width"],
            function(a, b) {
                var d = b.toLowerCase();
                c.fn["inner" + b] = function() {
                    var a = this[0];
                    return a && a.style ? parseFloat(c.css(a, d, "padding")) : null
                };
                c.fn["outer" + b] = function(a) {
                    var b = this[0];
                    return b && b.style ? parseFloat(c.css(b, d, a ? "margin" : "border")) : null
                };
                c.fn[d] = function(a) {
                    var e = this[0];
                    if (!e) return null == a ? null : this;
                    if (c.isFunction(a)) return this.each(function(b) {
                        var e = c(this);
                        e[d](a.call(this, b, e[d]()))
                    });
                    if (c.isWindow(e)) {
                        var g = e.document.documentElement["client" + b];
                        e = e.document.body;
                        return c.support.boxModel &&
                            g || e && e["client" + b] || g
                    }
                    return 9 === e.nodeType ? Math.max(e.documentElement["client" + b], e.body["scroll" + b], e.documentElement["scroll" + b], e.body["offset" + b], e.documentElement["offset" + b]) : a === p ? (g = c.css(e, d), e = parseFloat(g), c.isNaN(e) ? g : e) : this.css(d, "string" === typeof a ? a : a + "px")
                }
            });
        c.ajaxPrefilter(function(a) {
            a.crossDomain && (a.contents.script = !1, E && E.count && E.count("XSS_CVE_ajaxPrefilter", (E.count("XSS_CVE_ajaxPrefilter") || 0) + 1))
        });
        (function() {
            c.find.error = function(a) {
                throw Error("Syntax error, unrecognized expression: " +
                    a);
            };
            c.error = function(a) {
                throw "object" === typeof a ? a : Error(a);
            }
        })();
        (function() {
            var a = c._Deferred;
            c._Deferred = function() {
                var b = a(),
                    c = b.done;
                b.done = function() {
                    for (var a = Array(arguments.length), b = 0; b < a.length; b++) {
                        var d = b;
                        var h = arguments[b];
                        h = "function" === typeof h && "function" === typeof I.guardCurrent ? I.guardCurrent(h) : h;
                        a[d] = h
                    }
                    return c.apply(this, a)
                };
                return b
            }
        })();
        (function() {
            var a;
            c.event.special.beforeunload = {
                setup: function(b, d, e) {
                    a = this.onbeforeunload;
                    c.isWindow(this) && (this.onbeforeunload = function() {
                        var b = !1;
                        try {
                            b = c.isFunction(a)
                        } catch (g) {}
                        b && a.apply(this, arguments);
                        e.apply(this, arguments)
                    })
                },
                teardown: function(b, c) {
                    this.onbeforeunload = a
                }
            }
        })();
        return c
    }());
    I.when("jQuery").execute("rtl-jquery-plugin", function(p) {
        p.withoutRtl = function(p) {
            p.apply(this)
        }
    })
});