/*! For license information please see web-vitals-71d3cd472034eb66bb7c.js.LICENSE.txt */
"use strict";
(globalThis.webpackChunktinderweb = globalThis.webpackChunktinderweb || []).push([
    [86328], {
        938085: (e, n, t) => {
            t.r(n), t.d(n, {
                getCLS: () => b,
                getFCP: () => E,
                getFID: () => k,
                getINP: () => z,
                getLCP: () => J,
                getTTFB: () => Q,
                onCLS: () => b,
                onFCP: () => E,
                onFID: () => k,
                onINP: () => z,
                onLCP: () => J,
                onTTFB: () => Q
            });
            var r, i, a, o, c, u = -1,
                f = function(e) {
                    addEventListener("pageshow", (function(n) {
                        n.persisted && (u = n.timeStamp, e(n))
                    }), !0)
                },
                s = function() {
                    return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
                },
                d = function() {
                    var e = s();
                    return e && e.activationStart || 0
                },
                l = function(e, n) {
                    var t = s(),
                        r = "navigate";
                    return u >= 0 ? r = "back-forward-cache" : t && (r = document.prerendering || d() > 0 ? "prerender" : t.type.replace(/_/g, "-")), {
                        name: e,
                        value: void 0 === n ? -1 : n,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                        navigationType: r
                    }
                },
                p = function(e, n, t) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                            var r = new PerformanceObserver((function(e) {
                                n(e.getEntries())
                            }));
                            return r.observe(Object.assign({
                                type: e,
                                buffered: !0
                            }, t || {})), r
                        }
                    } catch (e) {}
                },
                v = function(e, n) {
                    var t = function t(r) {
                        "pagehide" !== r.type && "hidden" !== document.visibilityState || (e(r), n && (removeEventListener("visibilitychange", t, !0), removeEventListener("pagehide", t, !0)))
                    };
                    addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0)
                },
                m = function(e, n, t, r) {
                    var i, a;
                    return function(o) {
                        n.value >= 0 && (o || r) && ((a = n.value - (i || 0)) || void 0 === i) && (i = n.value, n.delta = a, n.rating = function(e, n) {
                            return e > n[1] ? "poor" : e > n[0] ? "needs-improvement" : "good"
                        }(n.value, t), e(n))
                    }
                },
                h = -1,
                g = function() {
                    return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
                },
                y = function() {
                    v((function(e) {
                        var n = e.timeStamp;
                        h = n
                    }), !0)
                },
                T = function() {
                    return h < 0 && (h = g(), y(), f((function() {
                        setTimeout((function() {
                            h = g(), y()
                        }), 0)
                    }))), {
                        get firstHiddenTime() {
                            return h
                        }
                    }
                },
                E = function(e, n) {
                    n = n || {};
                    var t, r = [1800, 3e3],
                        i = T(),
                        a = l("FCP"),
                        o = function(e) {
                            e.forEach((function(e) {
                                "first-contentful-paint" === e.name && (u && u.disconnect(), e.startTime < i.firstHiddenTime && (a.value = e.startTime - d(), a.entries.push(e), t(!0)))
                            }))
                        },
                        c = window.performance && window.performance.getEntriesByName && window.performance.getEntriesByName("first-contentful-paint")[0],
                        u = c ? null : p("paint", o);
                    (c || u) && (t = m(e, a, r, n.reportAllChanges), c && o([c]), f((function(i) {
                        a = l("FCP"), t = m(e, a, r, n.reportAllChanges), requestAnimationFrame((function() {
                            requestAnimationFrame((function() {
                                a.value = performance.now() - i.timeStamp, t(!0)
                            }))
                        }))
                    })))
                },
                w = !1,
                C = -1,
                b = function(e, n) {
                    n = n || {};
                    var t = [.1, .25];
                    w || (E((function(e) {
                        C = e.value
                    })), w = !0);
                    var r, i = function(n) {
                            C > -1 && e(n)
                        },
                        a = l("CLS", 0),
                        o = 0,
                        c = [],
                        u = function(e) {
                            e.forEach((function(e) {
                                if (!e.hadRecentInput) {
                                    var n = c[0],
                                        t = c[c.length - 1];
                                    o && e.startTime - t.startTime < 1e3 && e.startTime - n.startTime < 5e3 ? (o += e.value, c.push(e)) : (o = e.value, c = [e]), o > a.value && (a.value = o, a.entries = c, r())
                                }
                            }))
                        },
                        s = p("layout-shift", u);
                    s && (r = m(i, a, t, n.reportAllChanges), v((function() {
                        u(s.takeRecords()), r(!0)
                    })), f((function() {
                        o = 0, C = -1, a = l("CLS", 0), r = m(i, a, t, n.reportAllChanges)
                    })))
                },
                L = {
                    passive: !0,
                    capture: !0
                },
                S = new Date,
                A = function(e, n) {
                    r || (r = n, i = e, a = new Date, P(removeEventListener), F())
                },
                F = function() {
                    if (i >= 0 && i < a - S) {
                        var e = {
                            entryType: "first-input",
                            name: r.type,
                            target: r.target,
                            cancelable: r.cancelable,
                            startTime: r.timeStamp,
                            processingStart: r.timeStamp + i
                        };
                        o.forEach((function(n) {
                            n(e)
                        })), o = []
                    }
                },
                I = function(e) {
                    if (e.cancelable) {
                        var n = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                        "pointerdown" == e.type ? function(e, n) {
                            var t = function() {
                                    A(e, n), i()
                                },
                                r = function() {
                                    i()
                                },
                                i = function() {
                                    removeEventListener("pointerup", t, L), removeEventListener("pointercancel", r, L)
                                };
                            addEventListener("pointerup", t, L), addEventListener("pointercancel", r, L)
                        }(n, e) : A(n, e)
                    }
                },
                P = function(e) {
                    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(n) {
                        return e(n, I, L)
                    }))
                },
                k = function(e, n) {
                    n = n || {};
                    var t, a = [100, 300],
                        c = T(),
                        u = l("FID"),
                        s = function(e) {
                            e.startTime < c.firstHiddenTime && (u.value = e.processingStart - e.startTime, u.entries.push(e), t(!0))
                        },
                        d = function(e) {
                            e.forEach(s)
                        },
                        h = p("first-input", d);
                    t = m(e, u, a, n.reportAllChanges), h && v((function() {
                        d(h.takeRecords()), h.disconnect()
                    }), !0), h && f((function() {
                        var c;
                        u = l("FID"), t = m(e, u, a, n.reportAllChanges), o = [], i = -1, r = null, P(addEventListener), c = s, o.push(c), F()
                    }))
                },
                B = 0,
                D = 1 / 0,
                M = 0,
                N = function(e) {
                    e.forEach((function(e) {
                        e.interactionId && (D = Math.min(D, e.interactionId), M = Math.max(M, e.interactionId), B = M ? (M - D) / 7 + 1 : 0)
                    }))
                },
                R = function() {
                    return c ? B : performance.interactionCount || 0
                },
                q = function() {
                    "interactionCount" in performance || c || (c = p("event", N, {
                        type: "event",
                        buffered: !0,
                        durationThreshold: 0
                    }))
                },
                H = 0,
                x = function() {
                    return R() - H
                },
                O = [],
                j = {},
                _ = function(e) {
                    var n = O[O.length - 1],
                        t = j[e.interactionId];
                    if (t || O.length < 10 || e.duration > n.latency) {
                        if (t) t.entries.push(e), t.latency = Math.max(t.latency, e.duration);
                        else {
                            var r = {
                                id: e.interactionId,
                                latency: e.duration,
                                entries: [e]
                            };
                            j[r.id] = r, O.push(r)
                        }
                        O.sort((function(e, n) {
                            return n.latency - e.latency
                        })), O.splice(10).forEach((function(e) {
                            delete j[e.id]
                        }))
                    }
                },
                z = function(e, n) {
                    n = n || {};
                    var t = [200, 500];
                    q();
                    var r, i = l("INP"),
                        a = function(e) {
                            e.forEach((function(e) {
                                e.interactionId && _(e), "first-input" === e.entryType && !O.some((function(n) {
                                    return n.entries.some((function(n) {
                                        return e.duration === n.duration && e.startTime === n.startTime
                                    }))
                                })) && _(e)
                            }));
                            var n, t = (n = Math.min(O.length - 1, Math.floor(x() / 50)), O[n]);
                            t && t.latency !== i.value && (i.value = t.latency, i.entries = t.entries, r())
                        },
                        o = p("event", a, {
                            durationThreshold: n.durationThreshold || 40
                        });
                    r = m(e, i, t, n.reportAllChanges), o && (o.observe({
                        type: "first-input",
                        buffered: !0
                    }), v((function() {
                        a(o.takeRecords()), i.value < 0 && x() > 0 && (i.value = 0, i.entries = []), r(!0)
                    })), f((function() {
                        O = [], H = R(), i = l("INP"), r = m(e, i, t, n.reportAllChanges)
                    })))
                },
                G = {},
                J = function(e, n) {
                    n = n || {};
                    var t, r = [2500, 4e3],
                        i = T(),
                        a = l("LCP"),
                        o = function(e) {
                            var n = e[e.length - 1];
                            if (n) {
                                var r = n.startTime - d();
                                r < i.firstHiddenTime && (a.value = r, a.entries = [n], t())
                            }
                        },
                        c = p("largest-contentful-paint", o);
                    if (c) {
                        t = m(e, a, r, n.reportAllChanges);
                        var u = function() {
                            G[a.id] || (o(c.takeRecords()), c.disconnect(), G[a.id] = !0, t(!0))
                        };
                        ["keydown", "click"].forEach((function(e) {
                            addEventListener(e, u, {
                                once: !0,
                                capture: !0
                            })
                        })), v(u, !0), f((function(i) {
                            a = l("LCP"), t = m(e, a, r, n.reportAllChanges), requestAnimationFrame((function() {
                                requestAnimationFrame((function() {
                                    a.value = performance.now() - i.timeStamp, G[a.id] = !0, t(!0)
                                }))
                            }))
                        }))
                    }
                },
                K = function e(n) {
                    document.prerendering ? addEventListener("prerenderingchange", (function() {
                        return e(n)
                    }), !0) : "complete" !== document.readyState ? addEventListener("load", (function() {
                        return e(n)
                    }), !0) : setTimeout(n, 0)
                },
                Q = function(e, n) {
                    n = n || {};
                    var t = [800, 1800],
                        r = l("TTFB"),
                        i = m(e, r, t, n.reportAllChanges);
                    K((function() {
                        var a = s();
                        if (a) {
                            if (r.value = Math.max(a.responseStart - d(), 0), r.value < 0 || r.value > performance.now()) return;
                            r.entries = [a], i(!0), f((function() {
                                r = l("TTFB", 0), (i = m(e, r, t, n.reportAllChanges))(!0)
                            }))
                        }
                    }))
                }
        }
    }
]);