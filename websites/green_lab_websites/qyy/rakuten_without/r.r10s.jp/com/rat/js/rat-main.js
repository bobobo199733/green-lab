var RAL = RAL || {};
RAL.callQueue = RAL.callQueue || [];

var RAT = RAT || {};

(function() {
    "use strict";
    // local JSON polyfill
    var JSON = window.JSON;
    if (!JSON) {
        JSON = {};
        // jshint ignore:start
        JSON.parse = function(a, f) {
            function g(a, b) {
                var d = void 0,
                    e, c = a[b];
                if (c && "object" === typeof c)
                    for (d in c) Object.prototype.hasOwnProperty.call(c, d) && (e = g(c, d), void 0 !== e ? c[d] = e : delete c[d]);
                return f.call(a, b, c)
            }
            var b;
            b = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            a = String(a);
            b.lastIndex = 0;
            b.test(a) && (a = a.replace(b, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }));
            return /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ? (b = eval("(" + a + ")"), "function" === typeof f ? g({
                "": b
            }, "") : b) : null
        };
        // jshint ignore:end
    }

    var $ = (typeof window.jQuery === 'function') ? jQuery : undefined;

    // Custom Selector
    ! function(a) {
        "use strict";
        var i, o, l, c, s, u, n, r, f, t, h = a.document;
        h.querySelectorAll || (h.querySelectorAll = h.body.querySelectorAll = Object.querySelectorAll = function(t, e, n, r, i) {
                var o = h,
                    l = o.createStyleSheet();
                for (i = o.all, e = [], n = (t = t.replace(/\[for\b/gi, "[htmlFor").split(",")).length; n--;) {
                    for (l.addRule(t[n], "k:v"), r = i.length; r--;) i[r].currentStyle.k && e.push(i[r]);
                    l.removeRule(0)
                }
                return e
            }), o = h, l = "x-ms-event-listeners", (i = a).addEventListener && i.removeEventListener || !i.attachEvent || !i.detachEvent || (c = function(t) {
                return "function" == typeof t
            }, s = function(t, e) {
                var n = e[l];
                if (n)
                    for (var r, i = n.length; i--;)
                        if ((r = n[i])[0] === t) return r[1]
            }, u = function(t, e, n) {
                var r = e[l] || (e[l] = []);
                return s(t, e) || (r[r.length] = [t, n], n)
            }, y = function(t) {
                var e = o[t];
                o[t] = function(t) {
                    return f(e(t))
                }
            }, n = function(t, e, n) {
                var r;
                c(e) && (r = this).attachEvent("on" + t, u(r, e, function(t) {
                    (t = t || i.event).preventDefault = t.preventDefault || function() {
                        t.returnValue = !1
                    }, t.stopPropagation = t.stopPropagation || function() {
                        t.cancelBubble = !0
                    }, t.target = t.target || t.srcElement || o.documentElement, t.currentTarget = t.currentTarget || r, t.timeStamp = t.timeStamp || (new Date).getTime(), e.call(r, t)
                }))
            }, r = function(t, e, n) {
                !c(e) || (e = s(this, e)) && this.detachEvent("on" + t, e)
            }, (f = function(t) {
                if (!t) return t;
                var e = t.length;
                if (e)
                    for (; e--;) t[e].addEventListener = n, t[e].removeEventListener = r;
                else t.addEventListener = n, t.removeEventListener = r;
                return t
            })([o, i]), "Element" in i ? ((t = i.Element).prototype.addEventListener = n, t.prototype.removeEventListener = r) : (o.attachEvent("onreadystatechange", function() {
                f(o.all)
            }), y("getElementsByTagName"), y("getElementById"), y("createElement"), f(o.all))), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
                var n;
                if (null == this) throw new TypeError('"this" is null or not defined');
                var r = Object(this),
                    i = r.length >>> 0;
                if (0 == i) return -1;
                e |= 0;
                if (i <= e) return -1;
                for (n = Math.max(0 <= e ? e : i - Math.abs(e), 0); n < i; n++)
                    if (n in r && r[n] === t) return n;
                return -1
            }), Array.prototype.map || (Array.prototype.map = function(t) {
                var e, n, r;
                if (null == this) throw new TypeError("this is null or not defined");
                var i, o = Object(this),
                    l = o.length >>> 0;
                if ("function" != typeof t) throw new TypeError(t + " is not a function");
                for (1 < arguments.length && (e = arguments[1]), n = new Array(l), r = 0; r < l;) r in o && (i = o[r], i = t.call(e, i, r, o), n[r] = i), r++;
                return n
            }), Array.prototype.reduce || (Array.prototype.reduce = function(t) {
                if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
                if ("function" != typeof t) throw new TypeError(t + " is not a function");
                var e, n = Object(this),
                    r = n.length >>> 0,
                    i = 0;
                if (2 <= arguments.length) e = arguments[1];
                else {
                    for (; i < r && !(i in n);) i++;
                    if (r <= i) throw new TypeError("Reduce of empty array with no initial value");
                    e = n[i++]
                }
                for (; i < r;) i in n && (e = t(e, n[i], i, n)), i++;
                return e
            }), "function" != typeof Array.prototype.forEach && (Array.prototype.forEach = function(t, e) {
                if ("number" == typeof this.length && "function" == typeof t && "object" == typeof this)
                    for (var n = 0; n < this.length; n++) {
                        if (!(n in this)) return;
                        t.call(e || this, this[n], n, this)
                    }
            }), Array.prototype.filter || (Array.prototype.filter = function(t, e) {
                if ("Function" != typeof t && "function" != typeof t || !this) throw new TypeError;
                var n, r = this.length >>> 0,
                    i = new Array(r),
                    o = this,
                    l = 0,
                    a = -1;
                if (e === undefined)
                    for (; ++a != r;) a in this && (n = o[a], t(o[a], a, o) && (i[l++] = n));
                else
                    for (; ++a != r;) a in this && (n = o[a], t.call(e, o[a], a, o) && (i[l++] = n));
                return i.length = l, i
            }),
            function() {
                var o = Array.prototype.slice;
                try {
                    o.call(h.documentElement)
                } catch (t) {
                    Array.prototype.slice = function(t, e) {
                        var n, r = this.length,
                            i = [];
                        if (this.charAt)
                            for (n = 0; n < r; n++) i.push(this.charAt(n));
                        else
                            for (n = 0; n < this.length; n++) i.push(this[n]);
                        return o.call(i, t, e || i.length)
                    }
                }
            }();
        var p = function(t, e) {
            return this instanceof p ? t instanceof p ? t : "object" == typeof(t = (t = "string" == typeof t ? this.select(t, e) : t) && t.nodeName ? [t] : t) && (null != t && t === t.window || 1 === t.nodeType) ? (this.nodes = [t], this) : (this.nodes = this.slice(t), void(this.length = this.nodes.length)) : new p(t, e)
        };
        p.prototype.nodes = [], p.prototype.length = 0;
        var d = p.prototype;

        function e(t) {
            var e = h.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e)
            }
        }(p.fn = d).support = {
            attributes: e(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }),
            getComputedStyle: e(function() {
                return "function" == typeof a.getComputedStyle
            }),
            reliableHiddenOffsets: e(function(t) {
                return t.style.display = "none", reliableHiddenOffsetsVal = 0 === t.getClientRects().length, reliableHiddenOffsetsVal && (t.style.display = "", t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t.childNodes[0].style.borderCollapse = "separate", contents = t.getElementsByTagName("td"), contents[0].style.cssText = "margin:0;border:0;padding:0;display:none", reliableHiddenOffsetsVal = 0 === contents[0].offsetHeight, reliableHiddenOffsetsVal && (contents[0].style.display = "", contents[1].style.display = "none", reliableHiddenOffsetsVal = 0 === contents[0].offsetHeight)), reliableHiddenOffsetsVal
            })
        }, p.support = d.support, d.args = function(t, e, n) {
            return (t = "string" != typeof(t = "function" == typeof t ? t(e, n) : t) ? this.slice(t).map(this.str(e, n)) : t).toString().split(/[\s,]+/).filter(function(t) {
                return t.length
            })
        }, d.array = function(i) {
            return this.nodes.reduce(function(t, e, n) {
                var r;
                return i ? (r = "string" == typeof(r = (r = i.call(e, e, n)) || !1) ? p(r) : r) instanceof p && (r = r.nodes) : r = e.innerHTML, t.concat(!1 !== r ? r : [])
            }, [])
        }, d.attr = function(t, e, r) {
            r = r ? "data-" : "";
            var i = this;
            return this.pairs(t, e, function(t, e) {
                var n;
                return i.support.attributes ? t.getAttribute(r + e) : (n = t.getAttributeNode(r + e)) && n.specified ? n.value : null
            }, function(t, e, n) {
                i.support.attributes ? t.setAttribute(r + e, n) : t[r + e] = n
            })
        }, d.appear = function(h, t) {
            var d = {
                once: "boolean" != typeof(t = t || {}).once || t.once,
                ratio: t.ratio || 0,
                threshold: t.threshold || 50
            };
            return this.each(function() {
                var t, e, n, r, i, o, l, a, c, s, u, f;
                h && (t = p(this), e = p(v(this.ownerDocument)), n = this, i = function() {
                    ! function(t, e, n) {
                        if (t.visible()) {
                            var r = e.scrollLeft(),
                                i = r + e.width(),
                                o = e.scrollTop(),
                                l = o + e.height(),
                                a = t.offset(),
                                c = a.left,
                                s = c + t.width(),
                                e = a.top,
                                a = e + t.height(),
                                n = !isNaN(n) && 0 < n && n <= 1 ? n : 0;
                            return Math.max(1, n * t.width() * t.height()) <= Math.max(0, Math.min(i, s) - Math.max(r, c)) * Math.max(0, Math.min(l, a) - Math.max(o, e))
                        }
                    }(t, e, d.ratio) || (d.once && e.off("scroll", r), h.apply(n, arguments))
                }, o = d.threshold, s = null, u = 0, f = function() {
                    u = Date.now ? Date.now() : (new Date).valueOf(), s = null, c = i.apply(l, a), s || (l = a = null)
                }, r = function() {
                    var t = Date.now ? Date.now() : (new Date).valueOf(),
                        e = o - (t - (u = u || t));
                    return l = this, a = arguments, e <= 0 || o < e ? (s && (clearTimeout(s), s = null), u = t, c = i.apply(l, a), s || (l = a = null)) : s = s || setTimeout(f, e), c
                }, e.on("scroll", r), r())
            })
        }, d.children = function(t) {
            var e = this;
            return this.map(function(t) {
                return e.slice(t.children)
            }).filter(t)
        };
        var y = /^[^{]+\{\s*\[native \w/;

        function m(t) {
            switch (t) {
                case "thin":
                    return "2px";
                case "medium":
                    return "4px";
                case "thick":
                    return "6px";
                default:
                    return t
            }
        }

        function g(t) {
            if (!t) return {
                height: undefined,
                width: undefined
            };
            if (t == a && t.window == a) {
                if ("number" == typeof a.innerHeight) return {
                    height: a.innerHeight,
                    width: a.innerWidth
                };
                if (h.documentElement && (h.documentElement.clientWidth || h.documentElement.clientHeight)) return {
                    height: h.documentElement.clientHeight,
                    width: h.documentElement.clientWidth
                };
                if (h.body && (h.body.clientWidth || h.body.clientHeight)) return {
                    height: h.body.clientHeight,
                    width: h.body.clientWidth
                }
            }
            if (t == h && 9 === t.nodeType) return {
                height: Math.max(h.body.scrollHeight, h.body.offsetHeight, h.documentElement.clientHeight, h.documentElement.scrollHeight, h.documentElement.offsetHeight),
                width: Math.max(h.body.scrollWidth, h.body.offsetWidth, h.documentElement.clientWidth, h.documentElement.scrollWidth, h.documentElement.offsetWidth)
            };
            var e = d.support.getComputedStyle ? a.getComputedStyle(t, null) : t.currentStyle,
                n = t.offsetHeight,
                r = t.offsetWidth,
                i = parseFloat(m(e.borderTopWidth)),
                o = parseFloat(m(e.borderBottomWidth)),
                l = parseFloat(m(e.borderLeftWidth)),
                t = parseFloat(m(e.borderRightWidth));
            return {
                height: n - o - i - parseFloat(e.paddingTop) - parseFloat(e.paddingBottom),
                width: r - l - t - parseFloat(e.paddingLeft) - parseFloat(e.paddingRight)
            }
        }

        function v(t) {
            return null !== t && t == t.window ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }
        d.contains = y.test(h.documentElement.compareDocumentPosition) || y.test(h.documentElement.contains) ? function(t, e) {
            var n = 9 === t.nodeType ? t.documentElement : t,
                e = e && e.parentNode;
            return t === e || !(!e || 1 !== e.nodeType || !(n.contains ? n.contains(e) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(e)))
        } : function(t, e) {
            if (e)
                for (; e = e.parentNode;)
                    if (e === t) return !0;
            return !1
        }, p.contains = d.contains, d.each = function(t) {
            if (!t || "function" != typeof t) return this;
            for (var e = 0; e < this.nodes.length; e++) t.call(this.nodes[e], this.nodes[e], e);
            return this
        }, d.eacharg = function(n, r) {
            var i = this;
            return this.each(function(e, t) {
                i.args(n, e, t).forEach(function(t) {
                    r.call(this, e, t)
                }, this)
            })
        }, d.filter = function(e) {
            var r = this,
                t = e instanceof p ? function(t) {
                    return -1 !== e.nodes.indexOf(t)
                } : "function" == typeof e ? function(t) {
                    return e.apply(t, arguments)
                } : function(t) {
                    return t.matches = t.matches || t.prototype.matchesSelector || t.prototype.mozMatchesSelector || t.prototype.msMatchesSelector || t.prototype.oMatchesSelector || t.prototype.webkitMatchesSelector || function(t) {
                        for (var e = (r.document || r.ownerDocument).querySelectorAll(t), n = e.length; 0 <= --n && e.item(n) !== r;);
                        return -1 < n
                    }, t.matches(e || "*")
                };
            return p(this.nodes.filter(t))
        }, d.find = function(e) {
            return this.map(function(t) {
                return p(e || "*", t)
            })
        }, d.first = function() {
            return this.nodes[0] || null
        }, d.generate = function(t) {
            return /^\s*<tr[> ]/.test(t) ? p(h.createElement("table")).html(t).children().children().nodes : /^\s*<t(h|d)[> ]/.test(t) ? p(h.createElement("table")).html(t).children().children().children().nodes : /^\s*</.test(t) ? p(h.createElement("div")).html(t).children().nodes : h.createTextNode(t)
        }, d.height = function() {
            return g(this.first()).height
        }, d.html = function(e) {
            return e === undefined ? this.first().innerHTML || "" : this.each(function(t) {
                t.innerHTML = e
            })
        }, d.inArray = function(t, e, n) {
            var r;
            if (e)
                for (r = e.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in e && e[n] === t) return n;
            return -1
        }, p.inArray = d.inArray, d.index = function(t) {
            return "string" == typeof t || typeof elm == undefined ? -1 : p.inArray(t instanceof p ? t.first() : t, this.nodes)
        }, d.map = function(t) {
            return t ? p(this.array(t)).unique() : this
        }, d.on = function(t, e, i) {
            var r = null,
                n = e;
            "string" == typeof e && (r = e, n = i, e = function(e) {
                var n = arguments;
                p(e.currentTarget).find(r).each(function(t) {
                    t !== e.target && ! function r(n, t) {
                        return !!(n && t && t.childNodes && t.childNodes.length) && [].slice.call(t.childNodes).filter(function(t) {
                            var e = t === n;
                            return !e && t.childNodes && t.childNodes.length ? r(n, t) : e
                        }).length
                    }(e.target, t) || i.apply(t, n)
                })
            });
            var o = function(t) {
                return e.apply(this, [t].concat(t.detail || []))
            };
            return this.eacharg(t, function(t, e) {
                t.addEventListener(e, o), t.__evt = t.__evt || {}, t.__evt[e] = t.__evt[e] || [], t.__evt[e].push({
                    callback: o,
                    orig_callback: n,
                    selector: r
                })
            })
        }, d.bind = d.on, d.off = function(t, i) {
            return this.eacharg(t, function(n, r) {
                p(n.__evt ? n.__evt[r] : []).each(function(t, e) {
                    null != i && t.orig_callback !== i || (n.removeEventListener(r, t.callback), n.__evt && (1 == n.__evt[r].length ? n.__evt[r] = [] : n.__evt[r].splice(e, 1)))
                })
            })
        }, d.unbind = d.off, d.offset = function() {
            var t, e = {
                    top: 0,
                    left: 0
                },
                n = this.first(),
                r = n && n.ownerDocument;
            if (r) return t = r.documentElement, "undefined" != typeof n.getBoundingClientRect && (e = n.getBoundingClientRect()), r = v(r), {
                top: e.top + (r.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: e.left + (r.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }
        }, d.pairs = function(n, t, e, r) {
            var i;
            return void 0 !== t && (i = n, (n = {})[i] = t), "object" == typeof n ? this.each(function(t) {
                for (var e in n) r(t, e, n[e])
            }) : this.length ? e(this.first(), n) : ""
        }, d.scrollLeft = function() {
            var t = this.first(),
                e = v(t);
            return e ? "pageXOffset" in e ? e.pageXOffset : e.document.documentElement.scrollLeft : t.scrollLeft
        }, d.scrollTop = function() {
            var t = this.first(),
                e = v(t);
            return e ? "pageYOffset" in e ? e.pageYOffset : e.document.documentElement.scrollTop : t.scrollTop
        }, d.select = function(t, e) {
            return t = t.replace(/^\s*/, "").replace(/\s*$/, ""), /^</.test(t) ? p().generate(t) : (e || h).querySelectorAll(t)
        }, d.slice = function(t) {
            return t && 0 !== t.length && "string" != typeof t && "function" != typeof t ? t.length ? [].slice.call(t.nodes || t) : [t] : []
        }, d.str = function(e, n) {
            return function(t) {
                return "function" == typeof t ? t.call(this, e, n) : t.toString()
            }
        }, d.unique = function() {
            return p(this.nodes.reduce(function(t, e) {
                return null !== e && e !== undefined && !1 !== e && -1 === t.indexOf(e) ? t.concat(e) : t
            }, []))
        }, d.visible = function() {
            var t = this.first();
            return this.support.reliableHiddenOffsets ? !(t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length) : ! function(t) {
                if (!d.contains(t.ownerDocument || h, t)) return 1;
                for (; t && 1 === t.nodeType;) {
                    if ("none" === ((e = t).style && e.style.display) || "hidden" === t.type) return 1;
                    t = t.parentNode
                }
                var e
            }(t)
        }, d.width = function() {
            return g(this.first()).width
        }, a.RAT ? a.RAT.$Selector = p : console.warn("RAT is not defined")
    }(window);

    // Utilities
    function trim(str) {
        return (str && str.replace(/^\s+|\s+$/g, ''));
    }

    function isType(o, type) {
        return (Object.prototype.toString.call(o) === '[object ' + type + ']');
    }

    function getCookie(name) {
        var tokens = document.cookie ? document.cookie.split(';') : [];
        for (var i = 0; i < tokens.length; i++) {
            var sep = tokens[i].indexOf('=');
            if (sep > 0 && name === trim(tokens[i].substr(0, sep))) {
                return tokens[i].substr(sep + 1);
            }
        }
        return undefined;
    }

    function addListener(target, eventName, handler) {
        if (target.addEventListener) {
            target.addEventListener(eventName, handler, false);
        } else if (target.attachEvent) {
            target.attachEvent('on' + eventName, handler);
        }
    }

    function toInt(str) {
        var val = window.parseInt(str, 10);
        return (isNaN(val) ? undefined : val);
    }

    function toFloat(str) {
        var val = window.parseFloat(str);
        return (isNaN(val) ? undefined : val);
    }

    function toArray(str, convert) {
        var elements = [];
        if (str) {
            // Remove optional enclosing brackets
            elements = str.replace(/^\[|]$/g, '').split(',');
            for (var i = 0; i < elements.length; ++i) {
                elements[i] = trim(elements[i]);
                if (convert) {
                    elements[i] = convert(elements[i]);
                }
            }
        }
        return elements;
    }

    function toIntArray(str) {
        return toArray(str, toInt);
    }

    function toFloatArray(str) {
        return toArray(str, toFloat);
    }

    function revertSingleQuoting(str) {
        return str.replace(/(\\?')|(")|(&apos;)|(&quot;)/g, function(match, singleQ, doubleQ, singleQHtml, doubleQHtml) {
            if (singleQ === "'") {
                return '"';
            }
            if (singleQ === "\\'" || singleQHtml) {
                return "'";
            }
            if (doubleQ || doubleQHtml) {
                return '\\"';
            }
        });
    }

    function toJson(str) {
        var source;
        if (!isType(str, 'String')) {
            source = '';
        } else if (/^{?"/.test(str)) {
            source = str;
        } else { // Assume single quoting
            source = revertSingleQuoting(str);
        }
        source = source.replace(/^{?/, '{').replace(/}?$/, '}'); // complement brackets if missing
        try {
            return JSON.parse(source);
        } catch (e) {
            return {};
        }
    }

    function toJsonArray(str) {
        var source;
        if (!isType(str, 'String')) {
            source = '';
        } else if (/^\[{"/.test(str)) {
            source = str;
        } else { // Assume single quoting
            source = revertSingleQuoting(str);
        }
        source = source.replace(/^\[?/, '[').replace(/]?$/, ']'); // complement brackets if missing
        try {
            return JSON.parse(source);
        } catch (e) {
            return [];
        }
    }

    function callOnLoad(callback) {
        if (window.addEventListener) {
            window.addEventListener('load', callback, false);
        } else if (window.attachEvent) {
            window.attachEvent('onload', callback);
        }
    }

    function camelToSnake(s) {
        return (s || '').replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    }

    function parseEventConfig(attr) {
        var config = {};
        if (isType(attr, 'String')) {
            if (attr.charAt(0) === '{') {
                config = toJson(attr);
            } else {
                var events = attr.split(',');
                for (var i = 0, ln = events.length; i < ln; i++) {
                    config[events[i]] = [];
                }
            }
        }
        return config;
    }

    function getDeviceType() {
        var ua = navigator.userAgent,
            ual = ua.toLowerCase();
        if (ual.search(/ipod|iphone/) > -1) {
            return "iPhone";
        } else if (ual.search("ipad") > -1) {
            return "iPad";
        } else if (ual.search("android") > -1 &&
            ual.search("mobile safari") == -1) {
            var match = ual.match(/android (\d)\./);
            if (match && match[1] > 2) {
                return "Android Tablet";
            }
        } else if (ual.search("android") > -1) {
            return "Android Mobile";
        } else if (ual.search("blackberry") > -1) {
            return "BlackBerry";
        } else if (ual.search("windows phone") > -1) {
            return "Windows Phone";
        } else if (ual.search("windows ce") > -1) {
            return "Windows Mobile";
        } else if (ual.search(/nintendo wii|nintendo ds|playstation/) > -1) {
            return "GAME";
        } else if (ual.search("symbian") > -1) {
            return "Symbian";
        } else if (ual.search(/docomo|foma|kddi|softbank|vodafone|j-phone|willcom/) > -1) {
            return "Feature phone";
        } else if (ua.search(/Win|Mac/) != -1) {
            return "PC";
        } else {
            return "Others";
        }
    }

    // Generated from ratGeneric.idl, don't change these 2 lines
    var parameterDefinitions = {
        "ratAbTest": ["abtest", "STRING"],
        "ratTestTargeting": ["abtest_target", "JSON"],
        "ratAccountId": ["acc", "INT"],
        "ratAffiliateId": ["afid", "INT"],
        "ratAdultFlag": ["aflg", "INT"],
        "ratServiceId": ["aid", "INT"],
        "ratArea": ["area", "STRING_ARRAY"],
        "ratAdobeSiteSection": ["assc", "STRING"],
        "ratBooksGenre": ["bgenre", "STRING_ARRAY"],
        "ratBrand": ["brand", "STRING_ARRAY"],
        "ratCartState": ["cart", "INT"],
        "ratCampaignCode": ["cc", "STRING"],
        "ratCheckout": ["chkout", "INT"],
        "ratCheckpoint": ["chkpt", "INT"],
        "ratIdfaCookie": ["cka", "STRING"],
        "ratContentLanguage": ["cntln", "STRING"],
        "ratComponentId": ["compid", "STRING_ARRAY"],
        "ratCountryCode": ["country", "STRING"],
        "ratCouponPrice": ["coupon_price", "DOUBLE_ARRAY"],
        "ratCouponId": ["couponid", "STRING_ARRAY"],
        "ratCustomParameters": ["cp", "JSON"],
        "ratCustomerId": ["customerid", "STRING"],
        "ratCvEvent": ["cv", "JSON"],
        "ratCurrencyCode": ["cycode", "STRING"],
        "ratCurrencyCodeList": ["cycodelist", "STRING_ARRAY"],
        "ratEeid": ["eeid", "STRING"],
        "ratErrorList": ["errorlist", "JSON_ARRAY"],
        "ratErrors": ["errors", "JSON"],
        "ratExcludeQuery": ["esq", "STRING"],
        "ratGenre": ["genre", "STRING"],
        "ratGoalId": ["gol", "STRING"],
        "ratItemGenre": ["igenre", "STRING_ARRAY"],
        "ratItemGenreNamePath": ["igenrenamepath", "STRING"],
        "ratItemGenrePath": ["igenrepath", "STRING"],
        "ratRmsItemNumber": ["ino", "STRING_ARRAY"],
        "ratItemTag": ["itag", "STRING_ARRAY"],
        "ratItemName": ["item_name", "STRING"],
        "ratItemId": ["itemid", "STRING_ARRAY"],
        "ratItemUrl": ["itemurl", "STRING"],
        "ratLanguage": ["lang", "STRING"],
        "ratMaker": ["maker", "STRING_ARRAY"],
        "ratItemCount": ["ni", "INT_ARRAY"],
        "ratItemCountOrder": ["ni_order", "INT_ARRAY"],
        "ratOrAnd": ["oa", "STRING"],
        "ratOrderId": ["order_id", "STRING"],
        "ratOrderList": ["order_list", "STRING_ARRAY"],
        "ratPayment": ["payment", "STRING"],
        "ratPageLayout": ["pgl", "STRING"],
        "ratPageName": ["pgn", "STRING"],
        "ratPageType": ["pgt", "STRING"],
        "ratPhoenixPattern": ["phoenix_pattern", "STRING"],
        "ratPointPrice": ["point_price", "DOUBLE_ARRAY"],
        "ratProductCode": ["prdctcd", "STRING_ARRAY"],
        "ratPrice": ["price", "DOUBLE_ARRAY"],
        "ratPublisher": ["publisher", "STRING_ARRAY"],
        "ratRanCode": ["rancode", "STRING"],
        "ratRequestResult": ["reqc", "STRING"],
        "ratReservationMadeDate": ["rescreadate", "STRING"],
        "ratReservedDate": ["resdate", "STRING"],
        "ratReservationId": ["reservation_id", "STRING"],
        "ratResultLayout": ["reslayout", "STRING"],
        "ratSearchCondition": ["scond", "STRING_ARRAY"],
        "ratSearchEntity": ["search_entity", "INT_ARRAY"],
        "ratServiceType": ["service", "STRING"],
        "ratShopGenre": ["sgenre", "STRING"],
        "ratShippingMethod": ["shipping", "STRING"],
        "ratShippingFee": ["shipping_fee", "DOUBLE_ARRAY"],
        "ratShopId": ["shopid", "STRING"],
        "ratShopIdList": ["shopidlist", "STRING_ARRAY"],
        "ratShopUrl": ["shopurl", "STRING"],
        "ratShopUrlList": ["shopurllist", "STRING_ARRAY"],
        "ratSphinxPattern": ["sphinx_pattern", "STRING"],
        "ratSearchQuery": ["sq", "STRING"],
        "ratRetryType": ["srt", "STRING"],
        "ratSiteSection": ["ssc", "STRING"],
        "ratTag": ["tag", "STRING_ARRAY"],
        "ratTotalPrice": ["total_price", "DOUBLE_ARRAY"],
        "ratVariantid": ["variantid", "STRING_ARRAY"],
        "ratItemVariation": ["variation", "JSON_ARRAY"],
        "ratWidowbirdPattern": ["wb_pattern", "STRING"]
    };
    var customParameterDefinitions = {
        "ratHits": ["hits", "INT"],
        "ratResultsPageNumber": ["rpgn", "INT"],
        "ratSort": ["sort", "INT"],
        "ratTotalResults": ["totalresults", "INT"],
        "ratClickTarget": ["clktgt", "STRING"],
        "ratNotificationCount": ["notification", "INT"],
        "ratItemStockNumber": ["istocknum", "STRING_ARRAY"],
        "ratItemPoint": ["ipoint", "INT_ARRAY"],
        "ratItemReviewNumber": ["irevnum", "INT_ARRAY"],
        "ratItemSoldOutStatus": ["soldout", "INT_ARRAY"],
        "ratNumberOfImages": ["nimg", "INT"],
        "ratStoryAbTest": ["storyab", "STRING"],
        "ratStoryATestTerm": ["aterm", "STRING"],
        "ratStoryAbTestTerm": ["abterm", "STRING"],
        "ratEventDiscriminator": ["edisc", "INT"],
        "ratCouponKey": ["couponkey", "STRING"],
        "ratToolbarId": ["tbid", "STRING"],
        "ratUserOs": ["os", "STRING"],
        "ratToolbarVersion": ["tbver", "STRING"],
        "ratFilterItemAvailable": ["fa", "INT"],
        "ratFilterFreeShipping": ["fs", "INT"],
        "ratRecMpt": ["mpt", "INT"],
        "ratRecMpn": ["mpn", "STRING"],
        "ratRecMpd": ["mpd", "INT"],
        "ratRecMpl": ["mpl", "STRING"],
        "ratRecMpe": ["mpe", "STRING"]
    };

    // Support previous non standard input tag naming
    var inputMapping = {
        alternative: ["ratItemTest", "ratIGenre", "ratITag", "ratShopItem", "ratOa", "ratItemPrice", "ratAFlg", "ratProductCd", "ratItemManageNo", "ratCustomField"],
        normalized: ["ratAbTest", "ratItemGenre", "ratItemTag", "ratItemId", "ratOrAnd", "ratPrice", "ratAdultFlag", "ratProductCode", "ratRmsItemNumber", "ratCustomParameters"]
    };
    var customInputMapping = {
        alternative: ["ratStoryABTerm", "ratStoryATerm", "ratAvailableFilter", "ratFreeShippingFilter", "ratIPoint", "ratIRevNum", "ratStockNum", "ratPageNum", "ratSoldOut", "ratStoryItemTest", "ratTotalresult", "ratTotalResult"],
        normalized: ["ratStoryAbTestTerm", "ratStoryATestTerm", "ratFilterItemAvailable", "ratFilterFreeShipping", "ratItemPoint", "ratItemReviewNumber", "ratItemStockNumber", "ratResultsPageNumber", "ratItemSoldOutStatus", "ratStoryAbTest", "ratTotalResults", "ratTotalResults"]
    };
    for (var i = 0; i < inputMapping.alternative.length; ++i) {
        if (!parameterDefinitions[inputMapping.alternative[i]]) {
            parameterDefinitions[inputMapping.alternative[i]] = parameterDefinitions[inputMapping.normalized[i]];
        }
    }
    for (i = 0; i < customInputMapping.alternative.length; ++i) {
        if (!customParameterDefinitions[customInputMapping.alternative[i]]) {
            customParameterDefinitions[customInputMapping.alternative[i]] = customParameterDefinitions[customInputMapping.normalized[i]];
        }
    }

    var SHORT_ID = 0,
        TYPE = 1;
    var typeConversion = {
        'INT': toInt,
        'DOUBLE': toFloat,
        'BOOLEAN_ARRAY': toArray,
        'STRING_ARRAY': toArray,
        'INT_ARRAY': toIntArray,
        'DOUBLE_ARRAY': toFloatArray,
        'JSON': toJson,
        'JSON_ARRAY': toJsonArray
    };

    function addByDefinition(key, value, parameterContainer, definitions) {
        if (definitions[key]) {
            var paramDef = definitions[key];
            var shortId = paramDef[SHORT_ID];
            var conversionFunction = typeConversion[paramDef[TYPE]];
            parameterContainer[shortId] = conversionFunction ? conversionFunction(value) : value;
            return true;
        }
        return false;
    }

    // Load core library
    var scriptEl = document.createElement('script');
    scriptEl.type = 'text/javascript';
    scriptEl.async = 'async';
    scriptEl.defer = 'defer';
    scriptEl.src = 'https://r.r10s.jp/com/rat/js/ral-1.8.1.js';
    var targetEl = document.getElementsByTagName('script')[0];
    targetEl.parentNode.insertBefore(scriptEl, targetEl);

    function setCustomCookies() {
        var customCookies;
        if (document.getElementById('ratCookie')) {
            customCookies = toJson(document.getElementById('ratCookie').value);
            RAL.callQueue.push(['setCookieNames', customCookies]);
        } else if (/(\.rakuten\.com\.tw|\.thegrommet\.com)$/.test(document.domain)) {
            customCookies = {
                "cks": "_mall_uuid",
                "ckp": "grm"
            };
            RAL.callQueue.push(['setCookieNames', customCookies]);
        } else {
            return false;
        }
        return true;
    }

    var extCookies = {},
        parameters = {},
        customParameters = {},
        hasCustomParameters = false;

    function getDelta(params) {
        var delta = {},
            hasDelta = false;
        if (params) {
            if (params === 'all') {
                delta = parameters;
                hasDelta = true;
            } else {
                var list = params.split(',');
                for (var i = 0; i < list.length; i++) {
                    var param = document.getElementById(trim(list[i]));
                    if (param) {
                        hasDelta = addByDefinition(trim(param.id), trim(param.value), delta, parameterDefinitions) || hasDelta;
                    }
                }
            }
        }
        return hasDelta ? delta : null;
    }

    function parseInputTags() {
        var ratInput = [];
        var inputList = document.getElementsByName('rat');
        for (var i = 0; i < inputList.length; ++i) {
            ratInput.push(inputList[i]);
        }
        inputList = document.getElementById('ratForm') || [];
        for (i = 0; i < inputList.length; ++i) {
            ratInput.push(inputList[i]);
        }
        if (ratInput.length) {
            hasCustomParameters = false;
            for (i = 0; i < ratInput.length; ++i) {
                var paramId = trim(ratInput[i].id);
                var paramValue = trim(ratInput[i].value || ratInput[i].getAttribute('value'));
                if (!addByDefinition(paramId, paramValue, parameters, parameterDefinitions)) {
                    hasCustomParameters = addByDefinition(paramId, paramValue, customParameters, customParameterDefinitions) || hasCustomParameters;
                }
            }
            if (parameters.cp !== undefined) {
                for (var key in parameters.cp) {
                    customParameters[key] = parameters.cp[key];
                }
                delete parameters.cp;
                hasCustomParameters = true;
            }
        }
    }

    // Dynamic Params
    // The following variable is used as cache, value will be assigned after the first time of executing `convertAttrVal`
    var paramDataTypeMap = null

    function convertAttrVal(paramName, paramVal) {
        // Memoize parameter "name:type"
        if (!paramDataTypeMap) {
            paramDataTypeMap = {}
            for (var param in parameterDefinitions) {
                paramDataTypeMap[parameterDefinitions[param][0]] = parameterDefinitions[param][1]
            }
        }

        // Do nothing for string values
        if (paramDataTypeMap[paramName] != 'STRING') {
            // convert value
            var conversionHandler = typeConversion[paramDataTypeMap[paramName]]
            if (conversionHandler) {
                return conversionHandler(paramVal)
            }

            return
        }

        return paramVal
    }

    function isValueEmpty(value) {
        // Undefined
        if (value === undefined) {
            return true
        }

        // String, Number(Int)
        if (isType(value, 'String') || isType(value, 'Number')) {
            return !value
        }

        // Object
        if (isType(value, 'Object')) {
            return Object.keys(value).length == 0
        }

        // Array
        if (isType(value, 'Array')) {
            return !value.length
        }

        return false
    }

    // Returns [namespace, param_name, param_val]
    function createParamArr(attrNode) {
        var arr = []
        var name = attrNode.name.toLowerCase()
        var value = attrNode.value

        if (/^data-rat-cp-.*/.test(name)) {
            name = name.substring(12)
            arr = ['cp', name]

            if (!/^[a-z0-9]+(?:_+[a-z0-9]+)*$/.test(name)) {
                return []
            }
        } else if (/^data-rat-.*/.test(name)) {
            name = name.substring(9)

            // exclude: acc, aid, etype
            if (/\b(acc|aid|etype)\b/i.test(name)) {
                return []
            }

            arr = ['top', name]
            value = convertAttrVal(name, value)
        } else {
            return []
        }

        if (!isValueEmpty(value)) {
            arr.push(value)
        } else {
            return []
        }

        return arr
    }

    function getElementDynamicParams(elem) {
        var dynamicParams = {
            top: null,
            cp: null
        }
        var elemAttrs = elem.attributes

        for (var i = 0; i < elemAttrs.length; i++) {
            var attrNode = elemAttrs[i]
            var paramArr = createParamArr(attrNode)

            if (paramArr.length) {
                var namespace = paramArr[0] !dynamicParams[namespace] && (dynamicParams[namespace] = {})
                dynamicParams[namespace][paramArr[1]] = paramArr[2]
            }
        }

        return dynamicParams
    }


    function trackPageview(acc, aid) {
        // Insert hook first so we don't overwrite anything
        if (isType(RAT.pvHook, 'Object')) {
            RAL.callQueue.push(['setParameters', RAT.pvHook]);
            RAT.pvHook = {};
        }

        // Computed parameters
        if (parameters.acc == 7 && parameters.aid == 12) {
            var pageName = location.pathname.replace(".html", "").replace("index", "");
            if (pageName == "/") {
                pageName = "top";
            }
            if (!parameters.pgn) {
                parameters.pgn = pageName;
            }
        }
        if (!parameters.pgn || !parameters.ssc) {
            var pathMatch = (document.location.href || '').match(/https?:\/\/[^\/$#?]+(\/[^$#?]+)?/);
            if (pathMatch) {
                if (!parameters.pgn) parameters.pgn = pathMatch[1] || 'top';
                if (!parameters.ssc) parameters.ssc = (pathMatch[1] && pathMatch[1].split('/')[1]) ? '/' + pathMatch[1].split('/')[1] : 'top';
            }
        }
        if (parameters.acc === 1 && parameters.aid === 1 && document.getElementById('sc_betaInfo')) {
            parameters['abtest_target'] = parameters['abtest_target'] || {};
            parameters['abtest_target']['ichiba_top'] = document.getElementById('sc_betaInfo').value;
        }

        if (acc) {
            parameters.acc = acc;
        }
        if (aid) {
            parameters.aid = aid;
        }

        RAL.callQueue.push(['setParameters', parameters]);
        RAL.callQueue.push(['setParameters', extCookies]);
        if (hasCustomParameters) {
            RAL.callQueue.push(['setCustomParameters', customParameters]);
        }

        if ($) {
            var $ratElements = $('[data-ratId]');
            var pvCompids = [];
            $ratElements.each(function() {
                var $element = $(this);
                if (/\bpv\b/.test($element.attr('data-ratEvent'))) {
                    pvCompids.push($element.attr('data-ratId'));
                }
            });
            if (pvCompids.length) {
                RAL.callQueue.push(['appendParameters', {
                    'compid': pvCompids
                }]);
            }
        }

        // jshint ignore:start
        // Custom Selector
        if (!$) {
            var $Selector = RAT.$Selector
            var $ratElements = $Selector('[data-ratId]');
            var pvCompids = [];
            $ratElements.each(function() {
                var $element = $Selector(this);
                if (/\bpv\b/.test($element.attr('data-ratEvent'))) {
                    pvCompids.push($element.attr('data-ratId'));
                }
            });
            if (pvCompids.length) {
                RAL.callQueue.push(['appendParameters', {
                    'compid': pvCompids
                }]);
            }
        }
        // jshint ignore:end

        RAL.callQueue.push(['setParameters', {
            'js_ua': navigator.userAgent
        }]);
        RAL.callQueue.push(['setParameters', {
            'js_devtype': getDeviceType()
        }]);
        RAL.callQueue.push(['setEvent', 'pv']);

        // Multiple event pattern
        var multipleFlag = document.getElementById('ratMultipleEvent');
        if (multipleFlag && multipleFlag.value === 'click') {
            RAT.addCustomEvent({
                pData: parameters,
                cpData: customParameters,
                apData: {
                    'compid': ['referrer']
                },
                options: ['url', 'ua'],
                eventType: 'click'
            });
        }
    }

    RAT.addCustomEvent = function(evtData) {
        if (!isType(evtData, 'Object')) {
            return;
        }
        if (evtData.includeInput) {
            RAL.callQueue.push(["setParameters", parameters]);
        }
        RAL.callQueue.push(["setAccountId", evtData.accountId || parameters.acc]);
        RAL.callQueue.push(["setServiceId", evtData.serviceId || parameters.aid]);
        RAL.callQueue.push(["setPageType", parameters.pgt]);
        RAL.callQueue.push(["setPageName", parameters.pgn]);
        if (isType(evtData.pData, 'Object')) {
            var p = evtData.pData;
            if (p && isType(p.compid, 'Array') && !p.comptop && $) {
                p.comptop = [];
                for (var i = 0, len = p.compid.length; i < len; i++) {
                    var $comp = $('[data-ratId="' + p.compid + '"]');
                    if ($comp.length > 0) {
                        p.comptop.push($comp.offset().top);
                    }
                }
            }
            RAL.callQueue.push(["setParameters", evtData.pData]);
        }
        if (isType(evtData.apData, 'Object')) {
            RAL.callQueue.push(["appendParameters", evtData.apData]);
        }
        if (isType(evtData.cpData, 'Object')) {
            var cp = evtData.cpData;
            for (var prop in cp) {
                if (cp.hasOwnProperty(prop)) {
                    RAL.callQueue.push(["setCustomParameters", cp]);
                    break;
                }
            }
        }
        if (isType(evtData.cvData, 'Object')) {
            RAL.callQueue.push(["setParameters", {
                'cv': evtData.cvData
            }]);
        }
        if (isType(evtData.options, 'Array')) {
            RAL.callQueue.push(['setOptions', evtData.options]);
        }
        RAL.callQueue.push(['setParameters', extCookies]);
        RAL.callQueue.push(["setEvent", evtData.eventType || "async"]);
    };

    // Deprecated, keep support for now
    RAT.callCustomRequest = function(id, data, accountId, serviceId) {
        var acc = accountId;
        var aid = serviceId;

        RAL.callQueue.push(['setAccountId', acc]);
        RAL.callQueue.push(['setServiceId', aid]);
        if (id) {
            RAL.callQueue.push(['setCustomParameters', {
                'id': id
            }]);
        }
        if (data) {
            RAL.callQueue.push(['setCustomParameters', data]);
        }
        RAL.callQueue.push(['setEvent', 'async']);
    };
    RAT.callCostomRequest = RAT.callCustomRequest;

    function defineAppear($) {
        if ($.fn && !$.fn.appear) {
            /*
            jQuery.appear
            http://code.google.com/p/jquery-appear/
            Copyright (c) 2009 Michael Hixson
            Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
            */
            // jshint ignore:start
            (function(a) {
                a.fn.appear = function(e, c) {
                    var d = a.extend({
                        data: void 0,
                        one: !0,
                        ratio: 0
                    }, c);
                    return this.each(function() {
                        var b = a(this);
                        b.appeared = !1;
                        if (e) {
                            var g = a(window),
                                f = function() {
                                    if (b.is(":visible")) {
                                        var a = g.scrollLeft(),
                                            e = a + g.width(),
                                            c = g.scrollTop(),
                                            f = c + g.height(),
                                            h = b.offset(),
                                            l = h.left,
                                            m = l + b.width(),
                                            h = h.top,
                                            n = h + b.height(),
                                            k = !isNaN(d.ratio) && 0 < d.ratio && 1 >= d.ratio ? d.ratio : 0,
                                            k = Math.max(1, k * b.width() * b.height()),
                                            a = Math.max(0, Math.min(e, m) - Math.max(a, l)),
                                            c = Math.max(0, Math.min(f, n) - Math.max(c, h));
                                        a * c >= k ?
                                            b.appeared || b.trigger("appear", d.data) : b.appeared = !1
                                    } else b.appeared = !1
                                },
                                c = function() {
                                    b.appeared = !0;
                                    if (d.one) {
                                        g.unbind("scroll", f);
                                        var c = a.inArray(f, a.fn.appear.checks);
                                        0 <= c && a.fn.appear.checks.splice(c, 1)
                                    }
                                    e.apply(this, arguments)
                                };
                            if (d.one) b.one("appear", d.data, c);
                            else b.bind("appear", d.data, c);
                            g.scroll(f);
                            a.fn.appear.checks.push(f);
                            f()
                        } else b.trigger("appear", d.data)
                    })
                };
                a.extend(a.fn.appear, {
                    checks: [],
                    timeout: null,
                    checkAll: function() {
                        var e = a.fn.appear.checks.length;
                        if (0 < e)
                            for (; e--;) a.fn.appear.checks[e]()
                    },
                    run: function() {
                        a.fn.appear.timeout && clearTimeout(a.fn.appear.timeout);
                        a.fn.appear.timeout = setTimeout(a.fn.appear.checkAll, 20)
                    }
                });
                a.each("append prepend after before attr removeAttr addClass removeClass toggleClass remove css show hide".split(" "), function(e, c) {
                    var d = a.fn[c];
                    d && (a.fn[c] = function() {
                        var b = d.apply(this, arguments);
                        a.fn.appear.run();
                        return b
                    })
                })
            })($);
            // jshint ignore:end
        }
    }

    function initPageview() {
        // Exclude gold iframes
        if (parameters.acc === 1 && parameters.aid === 5 && window !== window.parent) {
            return;
        }

        // Handle tracking for external domains
        if (/\.rakuten\.co\.jp$/.test(document.domain) || setCustomCookies()) {
            trackPageview();

            // Send data once more if RAT.accHook is set
            if (isType(RAT.accHook, 'Object')) {
                var acc = RAT.accHook.acc;
                var aid = RAT.accHook.aid;
                setTimeout(function() {
                    trackPageview(acc, aid);
                }, 500);
                RAT.accHook = {};
            }

        } else {
            var receiveFlag = false;

            var addEvent = function(node, type, handler) {
                if (node.addEventListener) {
                    node.addEventListener(type, handler, false);
                } else {
                    node.attachEvent("on" + type, handler);
                }
            };
            var removeEvent = function(node, type, handler) {
                if (node.removeEventListener) {
                    node.removeEventListener(type, handler, false);
                } else {
                    node.detachEvent("on" + type, handler);
                }
            };

            var createIframe = function() {
                var parentHost = encodeURIComponent(location.protocol + '//' + location.hostname);
                var src = "https://www.rakuten.co.jp/com/rat/plugin/external/ral-iframe-rakuten.co.jp.html?o-id=" + parentHost;
                var iframe = document.createElement('iframe');
                iframe.setAttribute('src', src);
                iframe.style.display = 'none';
                iframe.style.visibility = 'hidden';
                document.body.appendChild(iframe);
            };

            var checkStorage = function(key) {
                var hit = false;
                if (window.sessionStorage) {
                    var value = sessionStorage.getItem(key);
                    if (value) {
                        try {
                            extCookies = JSON.parse(value).data || {};
                            hit = true;
                        } catch (e) {}
                    }
                }
                return hit;
            };
            var writeStorage = function(key, message) {
                if (window.sessionStorage) {
                    try {
                        sessionStorage.setItem(key, message);
                        return true;
                    } catch (e) {}
                }
                return false;
            };

            var getMessage = function(event) {
                if (/www\.rakuten\.co\.jp$/.test(event.origin)) {
                    var message = event.data,
                        response;
                    if (typeof message === 'string') {
                        try {
                            response = JSON.parse(message) || {};
                        } catch (e) {
                            return;
                        }
                        if (response.type === 'ratCk') {
                            extCookies = response.data || {};
                            if (extCookies.cks && !extCookies.ckr) {
                                extCookies.ckr = extCookies.cks;
                            }
                            trackPageview();
                            clearTimeout(receiveFlag);
                            if (extCookies.cks) {
                                writeStorage('ratCk', message);
                            }
                            removeEvent(window, 'message', getMessage);
                        }
                    }
                }
            };

            if (checkStorage('ratCk')) {
                trackPageview();
            } else {
                addEvent(window, 'message', getMessage);
                createIframe();
                receiveFlag = setTimeout(function() {
                    removeEvent(window, 'message', getMessage);
                    trackPageview();
                }, 3000);
            }
        }

        if ($) {
            $(function() {
                defineAppear($);
                var $ratUnit = $('[data-ratId]').filter(function() {
                    return /\bitem\b/.test($(this).attr('data-ratUnit'));
                });
                if ($ratUnit.length === 0) {
                    var itemDivTag = document.getElementById('ratItemDiv');
                    var itemIdsTag = document.getElementById('ratItemId');
                    if (itemDivTag && itemIdsTag) {
                        $ratUnit = $(itemDivTag.value);
                        var itemIds = toArray(itemIdsTag.value);
                        $ratUnit.each(function() {
                            $(this).attr('data-ratId', itemIds[$ratUnit.index(this)]);
                        });
                    }
                }
                $ratUnit.appear(function() {
                    var $this = $(this);
                    RAL.callQueue.push(['setAccountId', parameters.acc]);
                    RAL.callQueue.push(['setServiceId', parameters.aid]);
                    RAL.callQueue.push(['setPageType', parameters.pgt]);
                    RAL.callQueue.push(['setParameters', {
                        'pgl': parameters.pgl
                    }]);
                    RAL.callQueue.push(['setGenre', parameters.genre]);
                    RAL.callQueue.push(['setSearchQuery', parameters.sq]);
                    RAL.callQueue.push(['setParameters', {
                        'oa': parameters.oa
                    }]);
                    RAL.callQueue.push(['appendParameters', {
                        'sresv': $this.attr('data-ratId')
                    }]);
                    RAL.callQueue.push(['setParameters', extCookies]);
                    RAL.callQueue.push(['setParameters', getDelta($this.attr('data-ratParam'))]);
                    var dynamicParams = getElementDynamicParams($this[0]);
                    if (dynamicParams.top) {
                        RAL.callQueue.push(['setParameters', dynamicParams.top]);
                    }
                    if (dynamicParams.cp) {
                        RAL.callQueue.push(['setCustomParameters', dynamicParams.cp]);
                    }
                    RAL.callQueue.push(['setEvent', 'scroll']);
                });
            });
        }

        // jshint ignore:start
        // Appear Event on page view inited (Custom Selector)
        if (!$) {
            var $Selector = RAT.$Selector;

            var $ratUnit = $Selector('[data-ratId]').filter(function() {
                return /\bitem\b/.test($Selector(this).attr('data-ratUnit'));
            });
            if ($ratUnit.length === 0) {
                var itemDivTag = document.getElementById('ratItemDiv');
                var itemIdsTag = document.getElementById('ratItemId');
                if (itemDivTag && itemIdsTag) {
                    $ratUnit = $Selector(itemDivTag.value);
                    var itemIds = toArray(itemIdsTag.value);
                    $ratUnit.each(function() {
                        $Selector(this).attr('data-ratId', itemIds[$ratUnit.index(this)]);
                    });
                }
            }
            $ratUnit.appear(function() {
                var $this = $Selector(this);
                RAL.callQueue.push(['setAccountId', parameters.acc]);
                RAL.callQueue.push(['setServiceId', parameters.aid]);
                RAL.callQueue.push(['setPageType', parameters.pgt]);
                RAL.callQueue.push(['setParameters', {
                    'pgl': parameters.pgl
                }]);
                RAL.callQueue.push(['setGenre', parameters.genre]);
                RAL.callQueue.push(['setSearchQuery', parameters.sq]);
                RAL.callQueue.push(['setParameters', {
                    'oa': parameters.oa
                }]);
                RAL.callQueue.push(['appendParameters', {
                    'sresv': $this.attr('data-ratId')
                }]);
                RAL.callQueue.push(['setParameters', extCookies]);
                RAL.callQueue.push(['setParameters', getDelta($this.attr('data-ratParam'))]);
                var dynamicParams = getElementDynamicParams($this.nodes[0]);
                if (dynamicParams.top) {
                    RAL.callQueue.push(['setParameters', dynamicParams.top]);
                }
                if (dynamicParams.cp) {
                    RAL.callQueue.push(['setCustomParameters', dynamicParams.cp]);
                }
                RAL.callQueue.push(['setEvent', 'scroll']);
            });
        }
        // jshint ignore:end
    }

    function setTapClickListener(jqueryElem, handler) {
        var activeElement;
        var preventGhostClick = false;
        jqueryElem.bind('touchstart', function() {
            activeElement = this;
        });
        jqueryElem.bind('touchmove touchcancel', function() {
            activeElement = undefined;
        });
        jqueryElem.bind('touchend', function(event) {
            if (activeElement === this) {
                preventGhostClick = true;
                window.setTimeout(function() {
                    preventGhostClick = false;
                }, 500);
                handler.call(this, event);
            } else {
                activeElement = undefined;
            }
        });
        jqueryElem.bind('click', function(event) {
            if (!preventGhostClick) {
                handler.call(this, event);
            }
        });
    }

    // Data attributes driven events (jQuery compatible)
    if ($) {
        $(function() {
            var $win = $(window),
                $doc = $(document);
            defineAppear($);

            RAT.bindAppear = function($elem, acc, aid) {
                var $ratAppear = $elem.filter(function() {
                    return parseEventConfig($(this).attr('data-ratEvent')).appear !== undefined;
                });
                $ratAppear.appear(function() {
                    var $this = $(this);
                    var config = parseEventConfig($(this).attr('data-ratEvent')).appear;
                    RAL.callQueue.push(['setParameters', getDelta($this.attr('data-ratParam'))]);
                    RAL.callQueue.push(['setAccountId', acc || parameters.acc]);
                    RAL.callQueue.push(['setServiceId', aid || parameters.aid]);
                    RAL.callQueue.push(['setPageType', parameters.pgt]);
                    RAL.callQueue.push(['setParameters', {
                        'pgl': parameters.pgl
                    }]);
                    RAL.callQueue.push(['appendParameters', {
                        'compid': $this.attr('data-ratId'),
                        'comptop': $this.offset().top
                    }]);
                    RAL.callQueue.push(['setCustomParameters', {
                        'docheight': $doc.height(),
                        'winheight': $win.height()
                    }]);
                    if ($.inArray('cv', config) !== -1) {
                        RAL.callQueue.push(['setParameters', {
                            'cv': toJson($this.attr('data-ratCvEvent'))
                        }]);
                    }
                    var dynamicParams = getElementDynamicParams($this[0]);
                    if (dynamicParams.top) {
                        RAL.callQueue.push(['setParameters', dynamicParams.top]);
                    }
                    if (dynamicParams.cp) {
                        RAL.callQueue.push(['setCustomParameters', dynamicParams.cp]);
                    }
                    RAL.callQueue.push(['setOptions', ['url', 'ua']]);
                    var eventMergeAppearElm = document.getElementById('ratMergeEventAppear');
                    var shouldMergeAppear = true;
                    if (eventMergeAppearElm && 'value' in eventMergeAppearElm) {
                        shouldMergeAppear = eventMergeAppearElm.value == "false" ? false : true;
                    }
                    RAL.callQueue.push(['setEvent', 'appear', shouldMergeAppear]);
                });
            };

            RAT.bindClick = function($elem, acc, aid) {
                var $ratClick = $elem.filter(function() {
                    return parseEventConfig($(this).attr('data-ratEvent')).click !== undefined;
                });
                setTapClickListener($ratClick, function() {
                    var $this = $(this);
                    var config = parseEventConfig($(this).attr('data-ratEvent')).click;
                    RAL.callQueue.push(['setParameters', getDelta($this.attr('data-ratParam'))]);
                    RAL.callQueue.push(['setAccountId', acc || parameters.acc]);
                    RAL.callQueue.push(['setServiceId', aid || parameters.aid]);
                    RAL.callQueue.push(['setPageType', parameters.pgt]);
                    RAL.callQueue.push(['setParameters', {
                        'pgl': parameters.pgl
                    }]);
                    RAL.callQueue.push(['appendParameters', {
                        'compid': $this.attr('data-ratId'),
                        'comptop': $this.offset().top
                    }]);
                    RAL.callQueue.push(['setCustomParameters', {
                        'docheight': $doc.height(),
                        'winheight': $win.height()
                    }]);
                    if ($.inArray('cv', config) !== -1) {
                        RAL.callQueue.push(['setParameters', {
                            'cv': toJson($this.attr('data-ratCvEvent'))
                        }]);
                    }
                    var dynamicParams = getElementDynamicParams($this[0]);
                    if (dynamicParams.top) {
                        RAL.callQueue.push(['setParameters', dynamicParams.top]);
                    }
                    if (dynamicParams.cp) {
                        RAL.callQueue.push(['setCustomParameters', dynamicParams.cp]);
                    }
                    RAL.callQueue.push(['setOptions', ['url', 'ua']]);
                    RAL.callQueue.push(['setEvent', 'click']);
                });
            };

            RAT.bind = function($elem, acc, aid) {
                RAT.bindAppear($elem, acc, aid);
                RAT.bindClick($elem, acc, aid);
            };

            var $ratElements = $('[data-ratId]');
            RAT.bind($ratElements);

            addListener(document, 'RAT_BIND', function(event) {
                if (isType(event.data, 'String')) {
                    RAT.bind($(event.data));
                }
            });
        });
    }

    // jshint ignore:start
    // Data Driven Events (Custom Selector)
    if (!$) {
        var $Selector = RAT.$Selector
        var $win = $Selector(window);
        var $doc = $Selector(document);

        RAT.bindAppear = function($elem, acc, aid) {
            var $ratAppear = $elem.filter(function() {
                return parseEventConfig($Selector(this).attr('data-ratEvent')).appear !== undefined;
            });
            $ratAppear.appear(function() {
                var $this = $Selector(this);
                var config = parseEventConfig($Selector(this).attr('data-ratEvent')).appear;
                RAL.callQueue.push(['setParameters', getDelta($this.attr('data-ratParam'))]);
                RAL.callQueue.push(['setAccountId', acc || parameters.acc]);
                RAL.callQueue.push(['setServiceId', aid || parameters.aid]);
                RAL.callQueue.push(['setPageType', parameters.pgt]);
                RAL.callQueue.push(['setParameters', {
                    'pgl': parameters.pgl
                }]);
                RAL.callQueue.push(['appendParameters', {
                    'compid': $this.attr('data-ratId'),
                    'comptop': $this.offset().top
                }]);
                RAL.callQueue.push(['setCustomParameters', {
                    'docheight': $doc.height(),
                    'winheight': $win.height()
                }]);
                if ($Selector.inArray('cv', config) !== -1) {
                    RAL.callQueue.push(['setParameters', {
                        'cv': toJson($this.attr('data-ratCvEvent'))
                    }]);
                }
                var dynamicParams = getElementDynamicParams($this.nodes[0]);
                if (dynamicParams.top) {
                    RAL.callQueue.push(['setParameters', dynamicParams.top]);
                }
                if (dynamicParams.cp) {
                    RAL.callQueue.push(['setCustomParameters', dynamicParams.cp]);
                }
                RAL.callQueue.push(['setOptions', ['url', 'ua']]);
                var eventMergeAppearElm = document.getElementById('ratMergeEventAppear');
                var shouldMergeAppear = true;
                if (eventMergeAppearElm && 'value' in eventMergeAppearElm) {
                    shouldMergeAppear = eventMergeAppearElm.value == "false" ? false : true;
                }
                RAL.callQueue.push(['setEvent', 'appear', shouldMergeAppear]);
            });
        };

        RAT.bindClick = function($elem, acc, aid) {
            var $ratClick = $elem.filter(function() {
                return parseEventConfig($Selector(this).attr('data-ratevent')).click !== undefined;
            });
            setTapClickListener($ratClick, function() {
                var $this = $Selector(this);
                var config = parseEventConfig($this.attr('data-ratEvent')).click;
                RAL.callQueue.push(['setParameters', getDelta($this.attr('data-ratParam'))]);
                RAL.callQueue.push(['setAccountId', acc || parameters.acc]);
                RAL.callQueue.push(['setServiceId', aid || parameters.aid]);
                RAL.callQueue.push(['setPageType', parameters.pgt]);
                RAL.callQueue.push(['setParameters', {
                    'pgl': parameters.pgl
                }]);
                RAL.callQueue.push(['appendParameters', {
                    'compid': $this.attr('data-ratId'),
                    'comptop': $this.offset().top
                }]);
                RAL.callQueue.push(['setCustomParameters', {
                    'docheight': $doc.height(),
                    'winheight': $win.height()
                }]);
                if ($Selector.inArray('cv', config) !== -1) {
                    RAL.callQueue.push(['setParameters', {
                        'cv': toJson($this.attr('data-ratCvEvent'))
                    }]);
                }
                var dynamicParams = getElementDynamicParams($this.nodes[0]);
                if (dynamicParams.top) {
                    RAL.callQueue.push(['setParameters', dynamicParams.top]);
                }
                if (dynamicParams.cp) {
                    RAL.callQueue.push(['setCustomParameters', dynamicParams.cp]);
                }
                RAL.callQueue.push(['setOptions', ['url', 'ua']]);
                RAL.callQueue.push(['setEvent', 'click']);
            });
        };

        RAT.bind = function($elem, acc, aid) {
            RAT.bindAppear($elem, acc, aid);
            RAT.bindClick($elem, acc, aid);
        };

        var $ratElements = $Selector('[data-ratId]');
        RAT.bind($ratElements);

        addListener(document, 'RAT_BIND', function(event) {
            if (isType(event.data, 'String')) {
                RAT.bind($Selector(event.data));
            }
        });
    }
    // jshint ignore:end

    //grab all the rat input tags & parse them
    parseInputTags();

    // .com region
    switch (parameters.acc) {
        case 6:
        case 436:
        case 447:
        case 1055:
        case 1113:
        case 1112:
        case 1140:
        case 1190:
            RAL.callQueue.push(['addReceiver', 'rat.rakuten.com']);
            break;
    }

    // page performance tracking
    function sendPerfData(timing) {
        RAT.addCustomEvent({
            options: ['url', 'ua'],
            eventType: 'perf',
            pData: {
                navperf: timing
            }
        });
    }

    function spoolPerfEntries(ctx) {
        RAT.addCustomEvent({
            options: ['url', 'ua'],
            eventType: 'perf',
            pData: {
                perfdata: {
                    type: 'resource',
                    entries: ctx.fullEntries
                }
            }
        });
        ctx.fullEntries = [];
    }

    function enrichResourcePerfEntry(entry, ctx) {
        try {
            var req = new XMLHttpRequest();
            req.addEventListener("load", function() {
                try {
                    var cdn = req.getResponseHeader('x-cdn-served-from');
                    entry['cdn'] = cdn;
                    ctx.fullEntries.push(entry);
                    ctx.complemented += 1;
                    // Report every 10 entries or once we have everything
                    if (ctx.fullEntries.length >= 10 || ctx.complemented == ctx.available) {
                        clearTimeout(ctx.mark);
                        spoolPerfEntries(ctx);
                    } else {
                        // Report pending entries after 3 seconds
                        clearTimeout(ctx.mark);
                        ctx.mark = setTimeout(function() {
                            spoolPerfEntries(ctx);
                        }, 3000);
                    }
                } catch (e) {}
            });
            req.open('HEAD', entry.name);
            req.send();
        } catch (e) {}
    }

    function sendResourcePerfData() {
        if (!window.performance || !window.performance.getEntriesByType) return;

        var Rp = getCookie('Rp');
        if (!Rp || Rp.substr(0, 3) > '199') return; // 10% sampling in the range [000..FFF]

        var domainFilter = /^https?:\/\/(r\.r10s\.jp|tshop\.r10s\.jp|image\.rakuten\.co\.jp|thumbnail\.image\.rakuten\.co\.jp)/;
        var domainMatched = {};
        var res = window.performance.getEntriesByType('resource');
        if (res && res.length) {
            var metrics = [];
            var toFetch = ['name', 'duration', 'transferSize', 'startTime', 'fetchStart', 'domainLookupStart', 'connectStart', 'requestStart', 'responseStart', 'responseEnd'];

            // Get 5 sample metrics for each target domain
            for (var i = 0; i < res.length; ++i) {
                var r = res[i];
                var match = r.name.match(domainFilter);
                if (match) {
                    var domain = match[0];
                    if (!domainMatched[domain]) {
                        domainMatched[domain] = 0;
                    }
                    if (domainMatched[domain] < 5) {
                        domainMatched[domain] += 1;
                        var sample = {};
                        for (var j = 0; j < toFetch.length; ++j) {
                            sample[camelToSnake(toFetch[j])] = r[toFetch[j]];
                        }
                        metrics.push(sample);
                    }
                }
            }

            // Get missing CDN header on each set of metric
            var entriesContext = {
                mark: -1,
                available: metrics.length,
                complemented: 0,
                fullEntries: []
            };
            while (metrics.length > 0) {
                enrichResourcePerfEntry(metrics.shift(), entriesContext);
            }
        }
    }
    switch (parameters.acc + '_' + parameters.aid) {
        case '1_1':
        case '1_2':
        case '1_4':
            callOnLoad(sendResourcePerfData);
    }

    function addPerfTracker() {
        if (!('performance' in window) || !window.performance.timing) return;
        var t = window.performance.timing;
        if (t.loadEventEnd === 0) {
            setTimeout(function() {
                sendPerfData(t);
            }, 500);
        } else {
            sendPerfData(t);
        }
    }

    var perfFlag = document.getElementById('ratPagePerformance');
    if (perfFlag && perfFlag.value === 'true') {
        callOnLoad(addPerfTracker);
    }

    // Check XHR flag
    var xhrFlag = document.getElementById('ratEnableXHR');
    if (xhrFlag && xhrFlag.value === 'false') {
        RAL.callQueue.push(['setXHRAllowed', false]);
    }

    // Single page app PV tracking
    var singlePageFlag = document.getElementById('ratSinglePageApplicationLoad');
    if (singlePageFlag && singlePageFlag.value === 'true') {
        addListener(document, 'SINGLE_PAGE_APPLICATION_LOAD', function() {
            //clean up the global parameter objects before re-grabbing the input tags
            RAL.callQueue.push(['removeEventLogs']);
            parameters = {};
            customParameters = {};
            parseInputTags();
            initPageview();
        });
    } else {
        initPageview();
    }

    // Domain transition
    function domainLinkSetup() {
        var domFlag = document.getElementById('ratLinkDomain');
        if (domFlag && domFlag.value) {
            var domains = domFlag.value.split(',');
            var links = document.getElementsByTagName('a');
            var forms = document.getElementsByTagName('form');
            var _ra = getCookie('_ra');
            var domlink = document.createElement('a');

            var addQueryParam = function(url) {
                // [TODO] browser compliance test ...
                domlink.href = url;
                domlink.search = domlink.search + (domlink.search.length == 0 ? '?' : '&') + '_ra=' + encodeURIComponent(_ra);
                return domlink.href;
            };

            for (var i = 0; i < domains.length; i++) {
                for (var j = 0; j < links.length; j++) {
                    if (links[j].host && links[j].host === domains[i]) {
                        links[j].href = addQueryParam(links[j].href, _ra);
                    }
                }
                for (j = 0; j < forms.length; j++) {
                    domlink.href = forms[j].action;
                    if (domlink.host === domains[i]) {
                        forms[j].action = addQueryParam(forms[j].action, _ra);
                    }
                }
            }
        }
    }
    domainLinkSetup();

    // Append a script element to body tag
    function createScriptElement(src, async, defer, id) {
        var scriptEl = document.createElement('script');
        scriptEl.type = 'text/javascript';
        scriptEl.src = src;
        if (async) {
            scriptEl.async = 'async';
        }
        if (defer) {
            scriptEl.defer = 'defer';
        }
        if (id && typeof id === 'string') {
            scriptEl.id = id;
        }
        var targetEl = document.getElementsByTagName('script')[0];
        targetEl.parentNode.insertBefore(scriptEl, targetEl);
    }

    // Cookie cleaner feature will only work in rat-main.js for now. Aiming at *.rakuten.co.jp services.
    // Cookie cleaner switch
    var enableCookieCleaner = true;
    if (enableCookieCleaner) {
        var COOKIE_CLEANER_ID = 'ratPluginJSCookieCleaner';
        var COOKIE_CLEANER_URL = 'https://error.rakuten.co.jp/r-cookiecleaner/' + 'r-cc-rat.js';
        var cookieCleanerScriptTag = document.getElementById(COOKIE_CLEANER_ID);
        if (/\.rakuten\.co\.jp$/.test(document.domain) && !cookieCleanerScriptTag) {
            createScriptElement(
                COOKIE_CLEANER_URL,
                true,
                true,
                COOKIE_CLEANER_ID);
        }
    }
})();