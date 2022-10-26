(function(e) {
    var k = window.AmazonUIPageJS || window.P,
        l = k._namespace || k.attributeErrors,
        f = l ? l("AmazonHomepageCardAssets", "") : k;
    f.guardFatal ? f.guardFatal(e)(f, window) : f.execute(function() {
        e(f, window)
    })
})(function(e, k, l) {
    e.register("gw-video-orchestrator", function() {
        function f(a, b, g) {
            return 0 < a ? Math.min(g - a, b - a) : 0 < b ? Math.min(b, g) : 0
        }

        function n(a) {
            var b = k.innerHeight || document.documentElement.clientHeight,
                g = k.innerWidth || document.documentElement.clientWidth;
            a = a.getBoundingClientRect();
            var b = f(a.top, a.bottom,
                    b),
                g = f(a.left, a.right, g),
                c = 0;
            if (0 < b || 0 < g) c = b * g;
            return Math.min(1, Math.max(0, c / ((a.bottom - a.top) * (a.right - a.left))))
        }

        function p(a, b) {
            return a && 1 === a.nodeType && (a.offsetWidth || a.offsetHeight || a.getClientRects().length) ? n(a) < b ? !1 : !0 : !1
        }

        function m(a) {
            a = q(a);
            a !== c && (c && c.callback(!1), (c = a) && "hidden" !== document.visibilityState && c.callback(!0))
        }

        function q(a) {
            if (a)
                for (var b = d.length; b--;)
                    if (d[b].element === a) return d[b]
        }

        function r(a, b) {
            return b.priority - a.priority || n(b.element) - n(a.element) || (a.element.compareDocumentPosition(b.element) &
                Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1)
        }

        function t() {
            if ("hidden" in document) return "visibilitychange";
            for (var a = ["webkit", "moz", "ms"], b = 0; b < a.length; b++)
                if (a[b] + "Hidden" in document) return a[b] + "visibilitychange"
        }

        function u() {
            document.addEventListener(t(), function() {
                c && ("hidden" === document.visibilityState ? c.callback(!1) : c.callback(!0))
            })
        }
        var d = [],
            c, h = function() {
                c || d.length && 90 <= d[0].priority && m(d[0].element)
            };
        e.when("A", "ready").execute(function(a) {
            var b = a.capabilities.isAmazonApp;
            h = function() {
                if (d.length &&
                    (!c || !p(c.element, b ? .95 : c.minVisiblePercentForLeader || .5) || "visible" !== getComputedStyle(c.element).visibility)) {
                    var a = d.filter(function(a) {
                        return p(a.element, b ? .95 : a.minVisiblePercentForLeader || .5) && "visible" === getComputedStyle(a.element).visibility
                    });
                    m(0 < a.length ? a[0].element : l)
                }
            };
            a.on("scroll resize orientationChange", h);
            a.on("gw:mobile:registerHorizontalScrolling", function(a) {
                a.addEventListener("scroll", h)
            });
            e.when("gw-desktop-herotator").execute(function(a) {
                a.addObserver("animation_complete",
                    h)
            });
            u();
            h()
        });
        return {
            subscribe: function(a, b, c) {
                if (!a || !b) throw Error("Subscribe required a valid element and callback function");
                c = c || {};
                b = {
                    element: a,
                    callback: e.guardCurrent(b),
                    minVisiblePercentForLeader: c.minVisiblePercentForLeader || .5,
                    priority: c.priority || 50
                };
                if (q(a)) throw Error("element is already subscribed");
                d.push(b);
                d.sort(r);
                h()
            },
            unsubscribe: function(a) {
                if (!a) throw Error("unsubscribe requires a valid element");
                c && c.element === a && m();
                for (var b = d.length; b--;) d[b].element === a && (d.splice(b, 1),
                    h())
            },
            elect: m,
            subscribeToHorizontal: function(a) {
                e.when("A", "ready").execute(function(b) {
                    b.trigger("gw:mobile:registerHorizontalScrolling", a)
                })
            }
        }
    })
});
/* ******** */
(function(p) {
    var h = window.AmazonUIPageJS || window.P,
        q = h._namespace || h.attributeErrors,
        e = q ? q("AmazonGatewayAuiAssets", "") : h;
    e.guardFatal ? e.guardFatal(p)(e, window) : e.execute(function() {
        p(e, window)
    })
})(function(p, h, q) {
    p.register("gateway-asset-load", function() {
        h.uet && h.uet("cf", "gateway-asset-load", {
            wb: 1
        });
        h.uex && h.uex("ld", "gateway-asset-load", {
            wb: 1
        })
    });
    p.when("A", "atfWidgetComponent", "load").execute("ah-inst-img-size", function(e, f) {
        function l(a) {
            if (!a) return null;
            var b = a.src;
            a = n(a).data("a-hires");
            return b === a ? null : b
        }

        function d(a) {
            "object" === typeof g.ue && "function" === typeof g.ue.count && g.ue && g.ue.count(a, (g.ue.count(a) || 0) + 1)
        }

        function m(a, b) {
            d("gw-img-size-invoke");
            n.ajax({
                type: "HEAD",
                async: !0,
                url: a,
                success: function(c, g, k) {
                    c = h.performance.getEntriesByName(a).filter(function(a) {
                        return "img" === a.initiatorType
                    });
                    0 < c.length && "decodedBodySize" in c[0] ? (d("gw-img-size-success"), e.trigger(b, parseInt(c[0].decodedBodySize, 10))) : d("gw-img-size-error")
                },
                error: function(a, b, c) {
                    d("gw-img-size-error")
                }
            })
        }

        function c(a,
            c, k) {
            r[c] = {
                count: a.length,
                totalSize: 0,
                images: n.unique(a)
            };
            0 == a.length ? k && b(c, k) : n(r[c].images).each(function(a, d) {
                a = c + "_" + a;
                e.on(a, function(a) {
                    isNaN(a) || (--r[c].count, r[c].totalSize += a, 0 === r[c].count && (g.ue && g.ue.count(c, r[c].totalSize), k && b(c, k)))
                });
                m(d, a)
            })
        }

        function b(a, b) {
            --r[b].slotCount;
            r[b].totalSize += r[a].totalSize;
            0 == r[b].slotCount && g.ue && g.ue.count(b, r[b].totalSize)
        }

        function a(a, b) {
            b = b || a.length;
            var c = [];
            n(a.slice(0, b)).each(function(a, b) {
                a = l(b);
                if (!a) return [];
                c.push(a)
            });
            return c
        }

        function k() {
            return h.performance &&
                h.performance.getEntriesByName ? !1 : (d("gw-img-size-error"), !0)
        }
        var n = e.$,
            g = h,
            r = [];
        p.execute("inst-cf-img", function() {
            if (!k()) {
                d("gw-inst-img");
                var a = e.$(".gw-critical-content img");
                (a = 0 >= a.length ? null : l(a[0])) && c([a], "gw-cf-img-size")
            }
        });
        p.execute("inst-atf-img", function() {
            if (!k()) {
                d("gw-atf-img");
                var b = f.getWidgets();
                b && (b = b.filter(function(a) {
                    return a && 0 < a.length
                }));
                b != q && 0 != b.length && (r["gw-atf-img-size"] = {
                    slotCount: b.length,
                    totalSize: 0
                }, n.each(b, function(b, g) {
                    b = "gw-" + g + "-img-size";
                    var k;
                    k = n("#" +
                        g + ".desktop-row.gwi-row");
                    k != q && 0 < k.length ? (g = "#" + g + " img", k = 7) : (g = "#" + g + " .a-cardui-body img", k = q);
                    g = a(n(g), k);
                    c(g, b, "gw-atf-img-size")
                }))
            }
        })
    });
    "use strict";
    p.when("A").register("dombinder", function(e) {
        function f(c, b) {
            var a = 0;
            b = b.split(".");
            for (var k = b.length; a < k; a++) c = c && c[b[a]];
            return c
        }

        function l(c) {
            return d.map(d(c).data("bind").split(","), function(b) {
                b = b.split(":");
                var a = d.trim(b[0]),
                    k = d.trim(b[1]),
                    n = m[a];
                if (n) return n.init && n.init(c, k),
                    function(a) {
                        n.update(c, k, a)
                    }
            })
        }
        var d = e.$,
            m = {
                text: {
                    update: function(c,
                        b, a) {
                        d(c).text(f(a, b) || "")
                    }
                },
                html: {
                    update: function(c, b, a) {
                        d(c).html(f(a, b) || "")
                    }
                },
                href: {
                    update: function(c, b, a) {
                        d(c).attr("href", f(a, b) || "")
                    }
                },
                trimText: {
                    update: function(c, b, a) {
                        c = d(c);
                        a = c.text();
                        if (a.length > b) {
                            for (var k = b - 4; 0 <= k && 0 < "[.,-/#!$%^\x26*;:{}\x3d-_`~()] ".indexOf(a[k]);) k--;
                            c.text(a.substring(0, 0 <= k ? k + 1 : b - 3) + "...")
                        }
                    }
                },
                value: {
                    update: function(c, b, a) {
                        d(c).val(f(a, b) || "")
                    }
                },
                visible: {
                    update: function(c, b, a) {
                        var k = !1;
                        "!" === b.charAt(0) && (k = !0, b = b.substring(1));
                        b = !!f(a, b);
                        k !== b ? d(c).show() : d(c).hide()
                    }
                },
                css: {
                    init: function(c, b) {
                        c = d(c);
                        var a = c.data("dombcss") || [];
                        a[b] = "";
                        c.data("dombcss", a)
                    },
                    update: function(c, b, a) {
                        c = d(c);
                        var k = c.data("dombcss"),
                            n = k[b];
                        a = f(a, b);
                        n !== a && (k[b] = a, n && c.removeClass(n), a && c.addClass(a))
                    }
                },
                attr: {
                    init: function(c, b) {
                        c = d(c);
                        var a = c.data("dombattr") || [];
                        a[b] = {};
                        c.data("dombattr", a)
                    },
                    update: function(c, b, a) {
                        var k = d(c);
                        c = k.data("dombattr");
                        var n = c[b];
                        a = f(a, b);
                        n !== a && (c[b] = a, n && d.each(n, function(a, b) {
                            k.removeAttr(a)
                        }), a && d.each(a, function(a, b) {
                            k.attr(a, b)
                        }))
                    }
                }
            };
        return {
            init: function(c) {
                var b = {
                    $root: c,
                    bindings: []
                };
                c.find("[data-bind]").each(function() {
                    d.each(l(this), function(a, c) {
                        b.bindings.push(c)
                    })
                });
                return b
            },
            update: function(c, b) {
                d.each(c.bindings, function(a, c) {
                    c(b)
                })
            }
        }
    });
    "use strict";
    p.when("jQuery").register("gwAjax", function(e) {
        return function(f, l) {
            function d(a, c, d) {
                "object" === typeof h.ue && "function" === typeof h.ue.count && (m(l.errorCounter || "gwAjaxError"), l.id && m("gwAjaxError:" + l.id));
                "function" === typeof h.ueLogError && h.ueLogError({
                    logLevel: "WARN",
                    attribution: "gwAjax-" + (l.id || f),
                    message: "gwAjax call failed " + (JSON && JSON.stringify ? JSON.stringify({
                        url: f,
                        "params-data": l.params || l.data
                    }) : "")
                });
                "function" === typeof b && b(a, c, d)
            }

            function m(a) {
                "object" === typeof h.ue && "function" === typeof h.ue.count && h.ue.count(a, (h.ue.count(a) || 0) + 1)
            }
            l = e.extend(!0, {}, l);
            var c = l.success,
                b = l.error;
            l.success = function(a, b, n) {
                a.error ? d(a, b, n) : "function" === typeof c && c(a, b, n)
            };
            l.error = d;
            l.data = l.params ? l.params : l.data;
            m("gwAjaxCall");
            l.ajaxCounter && m(l.ajaxCounter);
            return e.ajax(f, l)
        }
    });
    "use strict";
    p.when("jQuery",
        "gw-hud-punt").execute("gw-hud-sidekick", function(e) {
        e("#gw-hud-grid").css({
            display: "none"
        })
    });
    "use strict";
    p.register("gw/card-modal", function() {
        function e(e, d) {
            if (f) return f(e, d);
            p.when("__gw-card-modal").execute(function(m) {
                m(e, d)
            });
            return {
                show: function() {}
            }
        }
        var f;
        p.when("__gw-card-modal").execute(function(e) {
            f = e
        });
        return {
            show: function(f, d) {
                e(f, d).show()
            },
            preload: function(f, d) {
                p.when("ready").execute(function() {
                    e(f, d)
                })
            }
        }
    });
    p.when("A", "a-modal", "gw/card-loader").register("__gw-card-modal", function(e,
        f, l) {
        var d = {},
            m = e.$;
        return function(c, b) {
            if (d[c]) return d[c];
            var a = l.decodeToken(c).name,
                k = m('\x3cspan style\x3d"display: none" /\x3e').appendTo("body");
            b = m.extend({
                name: a || "gw-card-popover",
                closeButton: !0,
                hideHeader: !0,
                style: "gw",
                content: m('\x3cdiv aria-hidden\x3d"true"\x3e\x3c/div\x3e').html(b && b.loading || '\x3cdiv class\x3d"gw-modal-loading"\x3e\x3ci class\x3d"gw-spinner"\x3e\x3c/i\x3e\x3c/div\x3e')
            }, b);
            var n = d[c] = f.create(k, b);
            if ("gw" === b.style) {
                var g = "#a-popover-" + n.attrs("id"),
                    k = m.map([" .a-popover-inner { overflow: hidden !important; height: 100% !important; min-width: 80px; min-height: 80px; }",
                        " .a-popover-wrapper { border: none; border-radius: 0; }"
                    ], function(a) {
                        return g + a
                    }).join(" ");
                m("head").append("\x3cstyle\x3e" + k + "\x3c/style\x3e");
                if (b.closeButton) e.on("a:popover:show:" + b.name, function(a) {
                    a = m(g);
                    a.find("button.a-button-close").addClass("gw-close-button");
                    a.find(".a-icon.a-icon-close").attr("class", "gw-icon gw-icon-close")
                })
            }
            l.request(c).then(function(a) {
                n.update({
                    content: a.html()
                })
            });
            return d[c]
        }
    });
    "use strict";
    p.when("gw-promise", "urlb64decode").register("gw/card-loader", function(e,
        f) {
        function l() {
            try {
                var c = (new URL(document.location.href)).searchParams.get("cardOverrides");
                if (c) return "cardOverrides\x3d" + c
            } catch (b) {
                if (c = document.location.href.match(/[?&](cardOverrides=.*?)([&#]|$)/), null !== c) return c[1]
            }
        }
        var d = Array.isArray || function(c) {
                return "[object Array]" === Object.prototype.toString.call(c)
            },
            m = {};
        return {
            decodeToken: function(c) {
                return JSON.parse(f(c.substring(1)))
            },
            request: function(c) {
                function b(a) {
                    for (var b = 0, c = f.length; b < c; b++) f[b] && f[b](a)
                }
                for (var a = d(c) ? c : [c], k = l(), n =
                        "/homepage.html/ajax/card" + (k ? "?" + k : ""), k = [], g = [], f = [], h = [], t = 0, w = a.length; t < w; t++) {
                    var q = a[t];
                    m[q] ? k[t] = m[q] : (k[t] = m[q] = e(function(a, b) {
                        g[t] = a;
                        f[t] = b
                    }), h[t] = {
                        t: q
                    })
                }
                0 < h.length && p.when("A").execute(function(a) {
                    a.post(n, {
                        chunk: function(b) {
                            var c = b[1];
                            c && (c.ok ? g[c.i] && g[c.i]({
                                render: function(b) {
                                    a.$(b).html(c.body)
                                },
                                html: function() {
                                    return c.body
                                }
                            }) : f[c.i] && f[c.i](c.body))
                        },
                        success: function(a, c, g) {
                            b("Not Found")
                        },
                        error: function(a, c, g) {
                            b(g)
                        },
                        abort: function(a) {
                            b("Aborted")
                        },
                        contentType: "application/json",
                        paramsFormat: "json",
                        params: h
                    })
                });
                return d(c) ? k : k[0]
            }
        }
    });
    h.Promise ? p.register("gw-promise", function() {
        return function(e) {
            return new Promise(e)
        }
    }) : p.when("jQuery").register("gw-promise", function(e) {
        return function(f) {
            var l = e.Deferred();
            f(l.resolve, l.reject);
            return {
                then: l.then,
                "catch": function(d) {
                    return l.fail(d)
                }
            }
        }
    });
    p.register("urlb64decode", function() {
        if (h.atob) {
            var e = {
                "-": "+",
                _: "/"
            };
            return function(f) {
                return h.atob(f.replace(/[-_]/g, function(f) {
                    return e[f]
                }))
            }
        }
        return function(e) {
            e = e.replace(/\s|=/g,
                "");
            for (var l = "", d = 0, m = e.length; d < m; d += 4) {
                for (var c = 0, b = d, a = 24; 0 < a && b < m;) c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".indexOf(e.charAt(b++)) << (a -= 6);
                l += String.fromCharCode(c >>> 16 & 255, c >>> 8 & 255, c & 255)
            }
            return l
        }
    });
    "use strict";
    p.when("jQuery", "dombinder").register("productdb-binding-helper", function(e, f) {
        function l(d, f) {
            return e.isFunction(d) ? d(f) : f
        }
        return function(d, e) {
            function c(a, b) {
                f.update(h, k(b.beforeUpdate, a));
                a.loading || k(b.load, a)
            }

            function b(b) {
                a();
                g = function() {
                    b(n)
                };
                n.pdb_observe(g)
            }

            function a() {
                n && g && (n.pdb_unobserve(g), g = null)
            }
            var k = l,
                n = null,
                g = null,
                h = f.init(e);
            this.setAsin = function(g, k) {
                k = k || {};
                a();
                n = d.get(g);
                c(n, k);
                n.loading && b(function(a) {
                    c(a, k)
                });
                return n
            };
            this.clear = function() {
                a();
                n = {};
                f.update(h, n)
            }
        }
    });
    h.P && p.when("jQuery", "afterLoad").register("gw-resource-logger", function(e) {
        return {
            instrumentResources: function(f) {
                var l;
                l = !1;
                if (e.isArray(f) && !e.isEmptyObject(f)) {
                    l = !0;
                    for (var d = 0; d < f.length; d++) {
                        var m = f[d];
                        if ("id" in m && "regex" in m && "initiator" in m) {
                            if (!("string" ===
                                    typeof m.id && "string" === typeof m.initiator && m.regex instanceof RegExp)) {
                                l = !1;
                                break
                            }
                        } else {
                            l = !1;
                            break
                        }
                    }
                }
                d = h.performance && "function" === typeof h.performance.getEntriesByType && "undefined" !== typeof h.performance.getEntriesByType("resource") && "undefined" !== typeof h.ue;
                if (l && d) {
                    l = Array(f.length);
                    for (d = 0; d < l.length; d++) l[d] = !1;
                    for (m = d = 0; m < h.performance.getEntriesByType("resource").length && d < f.length; m++)
                        for (var c = h.performance.getEntriesByType("resource")[m], b = c.name, a = c.initiatorType, k = 0; k < f.length; k++)
                            if (!l[k]) {
                                var n =
                                    f[k].regex;
                                if (a === f[k].initiator && n.test(b)) {
                                    b = f[k].id;
                                    a = c.duration;
                                    h.ue.count && (h.ue.count(b + ":duration", a), h.ue.count(b + ":startTime", c.startTime));
                                    h.ue.tag && h.ue.tag(50 > a ? b + ":cached" : b + ":notCached");
                                    l[k] = !0;
                                    d++;
                                    break
                                }
                            }
                }
            }
        }
    });
    "use strict";
    p.register("sg-media-builder", function() {
        return function(e) {
            var f = this,
                h = e.src,
                d = [];
            f.build = function() {
                var f = d.join("_");
                return {
                    src: h.replace(/\.([^.]+)$/, "._" + f + "_.$1"),
                    alt: e.alt
                }
            };
            f.autoCrop = function() {
                d.push("AC");
                return f
            };
            f.scaleX = function(e) {
                d.push("SX" + e);
                return f
            };
            f.scaleY = function(e) {
                d.push("SY" + e);
                return f
            };
            f.upScaleX = function(e) {
                d.push("UX" + e);
                return f
            };
            f.upScaleY = function(e) {
                d.push("UY" + e);
                return f
            };
            f.scaleXY = function(e, c) {
                return f.upScaleX(e).scaleY(c)
            }
        }
    });
    "use strict";
    p.when("jQuery", "gwAjax").register("shogunProductDB", function(e, f) {
        function l(c) {
            var b = [];
            m[c] = {
                loading: !0,
                pdb_observe: function(a) {
                    b.push(a)
                },
                pdb_unobserve: function(a) {
                    b = e.grep(b, function(b) {
                        return b !== a
                    })
                },
                _trigger: function() {
                    e.each(b, function() {
                        this.call(m[c])
                    })
                }
            };
            return m[c]
        }

        function d(c, b) {
            this.ajaxUrl = c;
            this.experienceStr = b;
            this._add = function(a) {
                a.p && e.each(a.p, function(a, b) {
                    b.asin && (a = m[b.asin] || l(b.asin), e.extend(a, b, {
                        loading: !1,
                        error: !1
                    }), a._trigger(b))
                })
            };
            this.addSims = function(a, b) {
                if (b) {
                    var c = m[a] || l(a);
                    e.extend(c, {
                        sims: b
                    });
                    c._trigger(a)
                }
            };
            this._ajax = function(a, k, d) {
                d = d || {};
                a = e.extend(!0, {}, c, {
                    params: {
                        sa: a,
                        oe: b
                    }
                }, d);
                h.ue_id && (a.params.rrid = h.ue_id);
                return f(a.url, {
                    method: a.method,
                    params: a.params,
                    success: k.success,
                    error: k.error,
                    id: "gw-jslibs-" + k.id
                })
            };
            this.get =
                function(a) {
                    return a in m ? m[a] : l(a)
                }
        }
        var m = {};
        return function(c, b) {
            return new d(c, b)
        }
    });
    "use strict";
    p.when("A", "jQuery", "af").register("layout-tags", function(e, f) {
        function l() {
            var e = {
                    twoColumn: [0, 919],
                    threeColumn: [920, 1239],
                    fourColumn: [1240, 1539],
                    fiveColumn: [1540, 1E4],
                    twoColumnRevised: [0, 979],
                    threeColumnRevised: [980, 1299],
                    fourColumnRevised: [1300, 1619],
                    fiveColumnRevised: [1620, 1E4]
                },
                c = f("html").width(),
                b = [],
                a;
            for (a in e) {
                var k = e[a],
                    d = k[1];
                c >= k[0] && c <= d && b.push(a)
            }
            return b
        }
        var d = function() {
            var d = [],
                d = d.concat(l()),
                c;
            c = e.$("\x3cdiv\x3e\x3c/div\x3e")[0];
            c = "" === c.style.flex || "" === c.style.webkitFlex || "" === c.style.msFlex || "" === c.style.MozBoxFlex || "" === c.style.webkitBoxFlex ? !0 : !1;
            c && d.push("flexLayout");
            "" === e.$("\x3cdiv\x3e\x3c/div\x3e")[0].style.grid && d.push("cssGridLayout");
            return d
        }();
        (function(d) {
            if (h.ue && ue.tag)
                for (var c = 0; c < d.length; c++) ue.tag(d[c])
        })(d);
        return {
            layoutTags: d
        }
    });
    "use strict";
    p.when("jQuery", "p-detect", "carouselInstrumentation").register("component-feed-carousel", function(e, f,
        l) {
        var d = e.extend(!0, {}, f);
        e.each({
            pointerPrefix: function() {
                return "onmspointerup" in document || "onpointerup" in document ? "onpointerup" in document ? "pointer" : "MSPointer" : !1
            },
            actionMode: function() {
                var b = d.capabilities.pointerPrefix;
                return b ? b : d.capabilities.touch ? "touch" : "mouse"
            }
        }, function(b, a) {
            d.capabilities[b] = a()
        });
        var m = {};
        e.each({
            start: {
                mouse: "down",
                touch: "start",
                pointer: "down",
                MSPointer: "Down"
            },
            end: {
                mouse: "up",
                touch: "end",
                pointer: "up",
                MSPointer: "Up"
            }
        }, function(b, a) {
            var c = d.capabilities.actionMode,
                e = "string" === typeof a ? a : a[c];
            m[b] = e ? c + e : a.mouse === q ? "" : "mouse" + a.mouse
        });
        d.action = m;
        var c = function(b, a, c, d) {
            this.init(b, a, c, d)
        };
        c.prototype = {
            init: function(b, a, c, d) {
                var g = this;
                e("html").hasClass("a-touch") && b.addClass("feed-carousel-touch");
                g.config = d || {};
                g.adjustMarginOnChange = !1 !== g.config.adjustMarginOnChange;
                g.defaultCssRightMargin = null;
                g.minItems = a || 10;
                g.imgClass = ".product-image";
                g.$carousel = b;
                g.cfMinItems = c || 6;
                g.cfFired = !1;
                g.shovelerReadyFired = !1;
                g.slotId = g.getSlotId();
                g.touch = g.$carousel.hasClass("feed-carousel-touch");
                g.ajaxSource = g.$carousel.parent().hasClass("ajaxSource");
                g.$shelf = g.$carousel.find(".feed-carousel-shelf");
                g.$viewport = g.$carousel.find(".feed-carousel-viewport");
                g.$spinner = g.$carousel.find(".spinner");
                g.$left = e(".feed-carousel-control.feed-left", b);
                g.$right = e(".feed-carousel-control.feed-right", b);
                g.$buttons = e(".feed-carousel-control", b);
                g.$thumb = e(".feed-scrollbar-thumb", b);
                g.shelfLeft = -1 * parseInt(g.$shelf.css("left"), 10);
                g.calcWidth = e("html").hasClass("a-lt-ie9");
                g.noOpacity = e("html").hasClass("a-lt-ie9");
                g.uniqueId = g.getUniqueId();
                g.$left.attr("aria-hidden", !0);
                g.$right.attr("aria-hidden", !0);
                g.bindEvents();
                g.$carousel.data("Carousel", g);
                g.$carousel.trigger("change");
                g.token = !1;
                g.lock = function() {
                    g.token = !0
                };
                g.unlock = function() {
                    g.token = !1
                };
                g.locked = function() {
                    return g.token
                };
                p.when("gw-first-carousel").execute(function() {
                    g.first = g.$carousel.hasClass("first-carousel");
                    g.shouldControlsOn() ? g.showControls() : g.hideControls()
                });
                g.uniqueId && p.when(g.uniqueId).execute(function(a) {
                    g.appendCards(a.cards);
                    if (a.cards &&
                        g.slotId && "object" === typeof h.ue && "function" === typeof h.ue.count) {
                        var b = "gw-" + g.slotId.toString() + "-lazy-cards",
                            c = "gw-" + g.slotId.toString() + "-lazy";
                        h.ue.count(b, (h.ue.count(b) || 0) + a.cards.length);
                        h.ue.count(c, (h.ue.count(c) || 0) + 1)
                    }
                    p.register(g.uniqueId + "-lazy-cards-loaded");
                    h.GWI.register(g.uniqueId + "-lazy-cards-loaded")
                })
            },
            getUniqueId: function() {
                if (this.$viewport) {
                    var b = this.$viewport.closest(".shogun-widget");
                    return 0 < b.length ? e(b[0]).attr("id") : null
                }
            },
            getSlotId: function() {
                var b = this.$carousel.closest(".gw-widget-instrument");
                return 0 < b.length ? e(b[0]).attr("id") : null
            },
            getMouseDirection: function() {
                return d.capabilities.rtl ? -1 : 1
            },
            bindEvents: function() {
                function b(a) {
                    return d.capabilities.pointerPrefix && -1 < e.inArray(a.originalEvent.pointerType, [2, "touch"]) || "touch" === d.capabilities.actionMode
                }
                var a = this,
                    c = e("body");
                a.$buttons.ready(function(b) {
                    a.shovelerReadyFired || (a.slotId && (b = a.slotId.toString() + "-active", h.GWI && h.GWI.recordLatency(b), h.GWI && h.GWI.register(b)), a.shovelerReadyFired = !0)
                });
                a.$carousel.change(function(b) {
                    a.updateItems();
                    a.updateSpinner();
                    a.updateShelf();
                    a.updateControls();
                    null === a.defaultCssRightMargin && a.$shelf.children("li").first() && (b = parseInt(a.$shelf.children("li").first().css("margin-right"), 10), a.defaultCssRightMargin = isNaN(b) ? 10 : b);
                    a.adjustMarginOnChange && a.adjustCardMargin()
                });
                a.$left.click(function(b) {
                    b.preventDefault();
                    a.changePage(-1);
                    a.slotId && a.logCounter("gw-" + a.slotId.toString() + "-left")
                });
                a.$right.click(function(b) {
                    b.preventDefault();
                    a.changePage(1);
                    a.slotId && a.logCounter("gw-" + a.slotId.toString() +
                        "-right")
                });
                a.bindImageLoadEvents(a.$shelf);
                var f;
                e(h).resize(function() {
                    clearTimeout(f);
                    f = setTimeout(function() {
                        var b = a.getDimensions();
                        a.moveShelf(Math.max(Math.min(b.shelfLeft, b.maxLeft), 0));
                        a.updateShelf()
                    }, 100)
                });
                a.$thumb.mousedown(function(b) {
                    var d = b.clientX;
                    1 === b.which && (b.preventDefault(), a.$carousel.addClass("scrolling"), c.bind("mousemove.feed-carousel", function(b) {
                        var c = a.getDimensions(),
                            e = a.getMouseDirection() * (b.clientX - d),
                            c = Math.max(Math.min(c.shelfLeft + 1 / c.pageRatio * e, c.maxLeft), 0);
                        d = b.clientX;
                        a.moveShelf(c)
                    }), e(document).bind("selectstart.feed-carousel", function() {
                        return !1
                    }))
                });
                c.add(h).mouseup(function(b) {
                    a.$carousel.removeClass("scrolling");
                    a.$carousel.hasClass("hovering") || a.hideControls();
                    c.unbind("mousemove.feed-carousel");
                    e(document).unbind("selectstart.feed-carousel")
                });
                a.$carousel.hover(function() {
                    a.$carousel.addClass("hovering");
                    clearTimeout(a.hoverTimer);
                    a.hoverTimer = setTimeout(function() {
                        a.$carousel.hasClass("hovering") && !a.$carousel.hasClass("touching") ? a.showControls() :
                            a.$carousel.removeClass("touching")
                    }, 300)
                }, function() {
                    a.$carousel.removeClass("hovering touching");
                    clearTimeout(a.hoverTimer);
                    a.$carousel.hasClass("scrolling") || (a.hoverTimer = setTimeout(function() {
                        a.$carousel.hasClass("hovering") || a.hideControls()
                    }, 600))
                });
                a.$carousel.bind(d.action.start, function(c) {
                    b(c) && (a.$carousel.addClass("touching"), clearTimeout(a.touchTimer), a.touchTimer = setTimeout(function() {
                        a.$carousel.removeClass("touching")
                    }, 5E3))
                });
                a.$carousel.bind(d.action.end, function(c) {
                    b(c) && (a.$carousel.removeClass("touching"),
                        clearTimeout(a.touchTimer), clearTimeout(a.hoverTimer))
                });
                a.$viewport.scroll(function() {
                    a.shelfLeft = a.$viewport.scrollLeft();
                    a.updateControls()
                })
            },
            bindImageLoadEvents: function(b) {
                var a = this;
                e(a.imgClass, b).one("load", function() {
                    a.$carousel.trigger("change")
                })
            },
            getDimensions: function() {
                var b = this.$shelf.width(),
                    a = this.shelfLeft,
                    c = this.$carousel.width();
                return {
                    pageWidth: c,
                    shelfWidth: b,
                    shelfLeft: a,
                    pageRatio: c / b,
                    leftRatio: a / b,
                    maxLeft: b - c
                }
            },
            updateItems: function() {
                var b = this,
                    a = b.$shelf.find(".feed-carousel-card");
                e("#" + b.uniqueId);
                a.each(function(a, c) {
                    c = e(c);
                    if ("none" !== c.css("display") && !b.config.visibleBeforeLoad) return !0;
                    c.attr("aria-posinset", a + 1);
                    c.attr("aria-hidden", !1);
                    c.attr("role", "listitem");
                    return 0 >= c.find(b.imgClass).filter(function() {
                        return !this.complete
                    }).length ? (c.css("display", "inline-block"), a + 1 >= b.cfMinItems && !b.cfFired && (b.slotId && (a = b.slotId.toString() + "-visible", h.GWI && h.GWI.recordLatency(a), h.GWI && h.GWI.register(a)), b.cfFired = !0), !0) : !1
                });
                a.attr("aria-setsize", a.size());
                b.$items = a.filter(function() {
                    return "none" !==
                        e(this).css("display")
                })
            },
            updateShelf: function() {
                var b = 0;
                this.calcWidth && (this.$shelf.children().each(function() {
                    b += e(this).outerWidth(!0)
                }), this.$shelf.width(b));
                this.touch && this.$carousel.not(".fresh-shoveler-tablet-app .feed-carousel").height(this.$shelf.outerHeight(!0))
            },
            updateSpinner: function() {
                this.size() < this.minItems && this.ajaxSource ? this.$spinner.show() : (this.size() < this.minItems && "object" === typeof h.ue && "function" === typeof h.ue.count && h.ue.count("shovelerNotEnoughItem", (h.ue.count("shovelerNotEnoughItem") ||
                    0) + 1), this.$spinner.hide())
            },
            updateControls: function() {
                this.updateArrows();
                this.updateScrollThumb()
            },
            shouldControlsOn: function() {
                return this.first && !this.touch
            },
            showControls: function(b) {
                this.$thumb.add(this.$buttons).stop(!0, !0).fadeIn({
                    duration: 300,
                    complete: b,
                    queue: !1
                })
            },
            hideControls: function(b) {
                var a = this.$thumb;
                this.shouldControlsOn() || (a = a.add(this.$buttons));
                a.stop(!0, !0).fadeOut({
                    duration: 300,
                    complete: b,
                    queue: !1
                })
            },
            appendCards: function(b) {
                this.$shelf.append(b);
                this.bindImageLoadEvents(b);
                this.$carousel.trigger("change")
            },
            updateArrows: function() {
                var b = this,
                    a = b.getDimensions();
                e.each([{
                    $e: b.$left,
                    enabled: 0 < a.shelfLeft
                }, {
                    $e: b.$right,
                    enabled: a.shelfLeft < a.maxLeft
                }], function(a, c) {
                    a = c.$e;
                    c.enabled ? a.removeClass("feed-control-disabled") : a.addClass("feed-control-disabled");
                    b.noOpacity && (c.enabled ? a.css("opacity", "1") : a.css("opacity", "0.5"))
                })
            },
            updateScrollThumb: function() {
                var b = this.getDimensions(),
                    a = b.leftRatio * b.pageWidth;
                this.$thumb.width(Math.min(b.pageRatio * b.pageWidth, b.pageWidth)).each(function() {
                    e(this).animate({
                            left: a
                        },
                        0)
                })
            },
            logCounter: function(b) {
                "object" === typeof h.ue && "function" === typeof h.ue.count && (h.ue.count(b, (h.ue.count(b) || 0) + 1), h.ue.count("gw-shoveler-click", 1))
            },
            changePage: function(b) {
                var a = this.getDimensions(),
                    c = this.alignWithItem(a.shelfLeft + b * a.pageWidth),
                    c = Math.min(0 > b ? c.right : c.left, a.maxLeft);
                this.locked() || (this.lock(), a.shelfLeft === c ? (this.bounce(this.$shelf, -30 * b), this.bounce(this.$thumb, 6 * b)) : this.moveShelf(c, 400))
            },
            moveShelf: function(b, a) {
                function c() {
                    d.updateArrows();
                    d.unlock()
                }
                var d = this;
                a = a || 0;
                d.shelfLeft = b;
                if (d.touch) d.$viewport.animate({
                    scrollLeft: b
                }, a, "swing", c);
                else {
                    var e = d.getDimensions(),
                        e = b / e.shelfWidth * e.pageWidth;
                    d.$shelf.animate({
                        left: -b
                    }, a, "swing", c);
                    d.$thumb.animate({
                        left: e
                    }, a, "swing", function() {
                        d.updateScrollThumb();
                        d.unlock()
                    })
                }
            },
            getItems: function() {
                return this.$items
            },
            size: function() {
                return this.getItems().length
            },
            alignWithItem: function(b) {
                if (0 > b) return {
                    left: 0,
                    right: 0
                };
                var a = this,
                    c = a.getItems(),
                    d = c.map(function() {
                        var c = a.cardPosition(e(this));
                        if (b >= c.left && b <= c.right) return c
                    }).get(0);
                return d ? d : a.cardPosition(c.last())
            },
            cardPosition: function(b) {
                var a = (b.position() || {
                    left: 0,
                    right: 0
                }).left;
                b = a + b.outerWidth(!0);
                return {
                    left: a,
                    right: b
                }
            },
            bounce: function(b, a) {
                function c(a) {
                    var b = {};
                    b[d.touch ? "left" : "marginLeft"] = a;
                    return b
                }
                var d = this;
                b.each(function() {
                    var b = e(this);
                    b.animate(c(a), 400, "swing", function() {
                        b.animate(c(0), 100, "swing", d.unlock)
                    })
                })
            },
            setCardMargin: function(b) {
                this.$shelf.children("li").first() && this.$shelf.children("li").first().css("margin-right") !== b + "px" && (this.$shelf.children("li").css("margin-right",
                    b + "px"), this.updateShelf())
            },
            adjustCardMargin: function(b) {
                b = b === q || null === b ? this.defaultCssRightMargin : b;
                this.setCardMargin(b);
                var a = this.getDimensions(),
                    a = 0 > a.maxLeft ? Math.ceil(-a.maxLeft / this.size()) : b;
                this.setCardMargin(a < b ? b : a)
            }
        };
        return {
            createCarousel: function(b, a, d, f) {
                e(b).each(function(b, h) {
                    b = e(h);
                    new c(b, a, d, f)
                })
            }
        }
    });
    "use strict";
    p.when("jQuery", "SafeP").execute("shoveler-lazy-non-visible-images", function(e, f) {
        function l(c) {
            "object" === typeof m.ue && "function" === typeof m.ue.count && m.ue.count(c,
                (m.ue.count(c) || 0) + 1)
        }

        function d() {
            m.GWData && e.each(m.GWData, function(c, b) {
                if (c && b && b.data && !b.loaded) {
                    b.loaded = !0;
                    l("gw-lazy-load-all");
                    var a = [];
                    e.each(b.data, function(b, c) {
                        e.each(e(c), function(b, c) {
                            a.push(c)
                        })
                    });
                    a && 0 < a.length && l("gw-lazy-load-non-empty");
                    f && f.register(c, function() {
                        return {
                            cards: a
                        }
                    })
                }
            })
        }
        var m = h;
        p.when("x1").execute(d);
        p.when("ready").execute(d);
        p.when("load").execute(d)
    });
    "use strict";
    p.register("SafeP", function() {
        var e = {};
        return {
            register: function(f, h) {
                "string" === typeof f && "function" ===
                    typeof h && (e[f] || (e[f] = function(d, f) {
                        p.register(d, f);
                        e[d] = function() {}
                    }), e[f] && e[f](f, h))
            }
        }
    });
    "use strict";
    p.when("A").register("gw-count-down", function(e) {
        return function(f, h, d, m, c) {
            function b(a) {
                a = a || {};
                return {
                    update: a.update || w.noop,
                    count: a.count || w.noop,
                    transition: a.transition || w.noop
                }
            }

            function a() {
                return b({
                    update: function() {
                        if (m && m.dealState) {
                            var a = m.dealState.toUpperCase();
                            u = "AVAILABLE" === a && 86400 < d / 1E3 ? k("") : -1 < a.indexOf("WAITLIST") ? k(c.on_waitlist) : "SOLDOUT" === a ? k(c.sold_out, D) : 0 < h ? n() : 0 <
                                d ? g() : k(c.has_ended, A)
                        }
                        u.update();
                        u.count()
                    }
                })
            }

            function k(a, c) {
                return b({
                    update: function() {
                        t(a);
                        e.trigger(c)
                    }
                })
            }

            function n() {
                y = c.starts_in;
                return b({
                    update: function() {
                        e.trigger(E);
                        t(v)
                    },
                    transition: function() {
                        u = k(c.started, F);
                        u.update()
                    },
                    count: function() {
                        x = e.interval(function() {
                            h = B - Date.now();
                            p(h, c.starts_in_timer)
                        }, 1E3)
                    }
                })
            }

            function g() {
                y = c.ends_in;
                return b({
                    update: function() {
                        t(v)
                    },
                    transition: function() {
                        u = k(c.has_ended, A);
                        u.update()
                    },
                    count: function() {
                        x = e.interval(function() {
                                d = C - Date.now();
                                p(d, c.ends_in_timer)
                            },
                            1E3)
                    }
                })
            }

            function p(a, b) {
                var c, d, e;
                c = Math.floor(a / 36E5);
                d = Math.floor(a / 1E3 / 60 % 60);
                e = Math.floor(a / 1E3 % 60);
                var f = v,
                    g;
                g = y + " " + q(c) + q(d, !0, !0) + q(e, !1, !0);
                f.timerString = g;
                f = v;
                b = b ? b.replace("_hours_", c).replace("_minutes_", d).replace("_seconds_", e) : "";
                f.readoutString = b;
                t(v);
                0 >= a && (clearInterval(x), u.transition())
            }

            function q(a, b, c) {
                var d = "";
                if (0 < a || c) d = ("0" + a).slice(-2);
                if (!c && 0 < a || b) d += ":";
                return d
            }

            function t(a) {
                a.readoutString ? v = a : (v.readoutString = a, v.timerString = a);
                e.trigger(G, v)
            }
            if (c && c.starts_in && c.ends_in &&
                c.has_ended && c.sold_out && c.on_waitlist && c.started && c.starts_in_timer && c.ends_in_timer) {
                h = parseInt(h, 10);
                d = parseInt(d, 10);
                m = JSON.parse(m);
                var w = e.$,
                    z = Date.now(),
                    B = z + h,
                    C = z + d,
                    x, y = "",
                    v = {
                        timerString: "",
                        readoutString: ""
                    },
                    A = f + "ended",
                    F = f + "started",
                    G = f + "updateTimer",
                    E = f + "countingDown",
                    D = f + "soldOut",
                    u = a();
                u.update();
                e.on(f, function() {
                    u.update()
                })
            }
        }
    })
});
/* ******** */