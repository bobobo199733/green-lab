(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        45301: function(a, b, c) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return c(30441)
            }])
        },
        17375: function(a, b, c) {
            "use strict";
            c.d(b, {
                j: function() {
                    return e
                }
            });
            var d = function() {
                    var a = function() {
                            o.ttfb = r.responseStart - r.navigationStart, o.plt = r.loadEventStart - r.navigationStart
                        },
                        b = function() {
                            if (q.getEntriesByType) {
                                var a = q.getEntriesByType("paint");
                                void 0 !== a && a.length > 0 && a.forEach(function(a) {
                                    "first-paint" === a.name && (o.ttfp = Math.round(a.startTime)), "first-contentful-paint" === a.name && (o.ttfcp = Math.round(a.startTime))
                                })
                            }
                        },
                        c = function() {
                            o.dns = r.domainLookupEnd - r.domainLookupStart, o.tcpconnect = r.connectEnd - r.connectStart, o.ssl = r.secureConnectionStart ? r.connectEnd - r.secureConnectionStart : 0, o.cachelookup = r.domainLookupStart - r.fetchStart, o.redirectlookup = r.fetchStart - r.navigationStart, o.unload = r.unloadEventEnd - r.unloadEventStart
                        },
                        d = function() {
                            q.getEntriesByType && q.getEntriesByType("mark").forEach(function(a) {
                                a.name === p[0] && (o.ttfmp = Math.round(a.startTime)), a.name === p[1] && (o.atf = Math.round(a.startTime))
                            })
                        },
                        e = function() {
                            function a() {
                                return o.isSPAData ? o.spaNavStart : r.navigationStart
                            }
                            window.addEventListener("shared_map_script_ready", function() {
                                o.mapStart = new Date().getTime() - a()
                            }, {
                                once: !0
                            }), window.addEventListener("srp_map_script_ready", function() {
                                o.mapScriptReady = new Date().getTime() - a()
                            }, {
                                once: !0
                            }), window.addEventListener("shared_map_ready", function() {
                                o.mapPaintStart = new Date().getTime() - a()
                            }, {
                                once: !0
                            }), window.addEventListener("srp_map_pin_rendered", function() {
                                o.mapComplete = new Date().getTime() - a()
                            }, {
                                once: !0
                            })
                        },
                        f = function() {
                            o.mapStart = null, o.mapScriptReady = null, o.mapPaintStart = null, o.mapComplete = null
                        },
                        g = function() {
                            window.publishEvent && window.publishEvent("spa-after-page-load"), "undefined" != typeof newrelic && newrelic.addPageAction("After Page Load"), window.publishEvent && window.publishEvent("clear-ad-metrics")
                        },
                        h = function() {
                            window.addEventListener("beforeunload", function() {
                                n(), g()
                            }), window.addEventListener("spa-navstart", function() {
                                e(), n(), g(), o.isSPAData = 1, o.spaNavStart = new Date().getTime(), o.tti = null, window.addEventListener("spa-domready", s)
                            })
                        },
                        i = function() {
                            o.ttfb = 0, o.ttfp = 0, o.ttfcp = 0, d(), o.ttfmp -= o.spaNavStart - r.navigationStart, o.ttfmp < 0 && (o.ttfmp = o.spaDomReady - o.spaNavStart), o.atf = new Date().getTime() - o.spaNavStart, o.plt = o.atf, k(), m(), "undefined" != typeof newrelic && newrelic.addPageAction("SPA Page Load"), window.publishEvent && window.publishEvent("spa-perf-collected"), f()
                        },
                        j = function() {
                            var a;
                            try {
                                a = window.localStorage
                            } catch (b) {}
                            if (void 0 !== a) {
                                var c = window.location,
                                    d = "".concat(c.host, "/").concat(c.pathname.split("/")[1]),
                                    e = null == a ? void 0 : a.getItem("visitedPages"),
                                    f = {};
                                return e && (f = JSON.parse(e))[d] ? 1 : (f[d] = !0, a.setItem("visitedPages", JSON.stringify(f)), 0)
                            }
                            return 2
                        },
                        k = function() {
                            o.rupex = Math.round(o.ttfb + .8 * (o.ttfp - o.ttfb) + .6 * (o.ttfmp - o.ttfp) + .4 * (o.atf - o.ttfmp) + .2 * (o.plt - o.atf))
                        },
                        l = function() {
                            a(), b(), d(), k(), c(), o.ru = j(), o.tti = new Date().getTime() - r.navigationStart, m(), h(), e()
                        },
                        m = function() {
                            var a = window.navigator && window.navigator.connection;
                            "undefined" != typeof newrelic && (newrelic.setCustomAttribute("rdc-ttfb", o.ttfb), newrelic.setCustomAttribute("rdc-ttfp", o.ttfp), newrelic.setCustomAttribute("rdc-ttfcp", o.ttfcp), newrelic.setCustomAttribute("rdc-ttfmp", o.ttfmp), newrelic.setCustomAttribute("rdc-atf", o.atf), newrelic.setCustomAttribute("rdc-plt", o.plt), newrelic.setCustomAttribute("rdc-rupex", o.rupex), newrelic.setCustomAttribute("rdc-dns", o.dns), newrelic.setCustomAttribute("rdc-tcpconnect", o.tcpconnect), newrelic.setCustomAttribute("rdc-ssl", o.ssl), newrelic.setCustomAttribute("rdc-cachelookup", o.cachelookup), newrelic.setCustomAttribute("rdc-redirectlookup", o.redirectlookup), newrelic.setCustomAttribute("rdc-unload", o.unload), newrelic.setCustomAttribute("rdc-ru", o.ru), newrelic.setCustomAttribute("rdc-mapStart", o.mapStart), newrelic.setCustomAttribute("rdc-mapScriptReady", o.mapScriptReady), newrelic.setCustomAttribute("rdc-mapPaintStart", o.mapPaintStart), newrelic.setCustomAttribute("rdc-mapComplete", o.mapComplete), newrelic.setCustomAttribute("rdc-tti", o.tti), newrelic.setCustomAttribute("rdc-connectionType", a && a.effectiveType), newrelic.setCustomAttribute("rdc-internetSpeed", a && a.downlink))
                        },
                        n = function() {
                            "undefined" != typeof newrelic && (newrelic.setCustomAttribute("rdc-ttfb", null), newrelic.setCustomAttribute("rdc-ttfp", null), newrelic.setCustomAttribute("rdc-ttfcp", null), newrelic.setCustomAttribute("rdc-ttfmp", null), newrelic.setCustomAttribute("rdc-atf", null), newrelic.setCustomAttribute("rdc-plt", null), newrelic.setCustomAttribute("rdc-rupex", null), newrelic.setCustomAttribute("rdc-dns", null), newrelic.setCustomAttribute("rdc-tcpconnect", null), newrelic.setCustomAttribute("rdc-ssl", null), newrelic.setCustomAttribute("rdc-cachelookup", null), newrelic.setCustomAttribute("rdc-redirectlookup", null), newrelic.setCustomAttribute("rdc-unload", null), newrelic.setCustomAttribute("rdc-ru", null), newrelic.setCustomAttribute("rdc-mapStart", null), newrelic.setCustomAttribute("rdc-mapScriptReady", null), newrelic.setCustomAttribute("rdc-mapPaintStart", null), newrelic.setCustomAttribute("rdc-mapComplete", null), newrelic.setCustomAttribute("rdc-tti", null))
                        },
                        o = {},
                        p = ["first-meaningful-paint", "above-the-fold"],
                        q = window.performance;
                    if (q) {
                        var r = window.performance.timing;
                        return {
                            getMetric: function(a) {
                                return o[a]
                            },
                            setMetric: function(a, b) {
                                o[a] = b
                            },
                            markAs: function() {
                                for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                                if (q && q.mark)
                                    for (var e = 0; e < b.length; e++) q.mark(b[e]);
                                d(), k(), m()
                            },
                            clearMetrics: function() {
                                n()
                            },
                            setMetrics: function() {
                                m()
                            },
                            calculateRUPEX: function() {
                                return k(), o.rupex
                            },
                            init: function() {
                                l()
                            }
                        }
                    }

                    function s() {
                        var a = document.querySelectorAll("[data-atf=\"true\"]"),
                            b = a.length;
                        if (0 !== b) {
                            var c = 0;
                            window.removeEventListener("spa-domready", s), o.spaDomReady = new Date().getTime();
                            for (var d = function() {
                                    c++, c === b && i()
                                }, e = 0; e < b; e++) a[e].complete ? d() : a[e].addEventListener("load", d)
                        }
                    }
                }(),
                e = function() {
                    window.SpeedRUMModule = d, window.addEventListener("load", function() {
                        window.SpeedRUMModule.init(), "undefined" != typeof newrelic && newrelic.addPageAction("Full Page Load"), window.markAs = window.SpeedRUMModule.markAs
                    })
                }
        },
        30441: function(a, b, c) {
            "use strict";
            c.r(b), c.d(b, {
                "__N_SSG": function() {
                    return i
                }
            });
            var d = c(85893);
            c(67294);
            var e = c(80116),
                f = c(99999),
                g = c(17375);
            (0, g.j)();
            var h = (0, f.j)("index"),
                i = !0;
            b.default = function(a) {
                var b = a.featureFlagDatafile,
                    c = a.news,
                    f = a.seoLinks,
                    g = a.heroOverrideConfig,
                    i = a.narLinks;
                return (0, d.jsx)(e.Vw, {
                    pageType: "home",
                    featureFlagDatafile: b,
                    logger: h,
                    news: c,
                    children: (0, d.jsx)(e.Uv, {
                        news: c,
                        seoLinks: f,
                        heroOverrideConfig: g,
                        narLinks: i
                    })
                })
            }
        }
    },
    function(a) {
        a.O(0, [465, 191, 774, 888, 179], function() {
            return a(a.s = 45301)
        }), _N_E = a.O()
    }
])