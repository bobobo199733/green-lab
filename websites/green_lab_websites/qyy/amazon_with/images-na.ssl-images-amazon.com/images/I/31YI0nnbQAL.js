(function(g) {
    var e = window.AmazonUIPageJS || window.P,
        w = e._namespace || e.attributeErrors,
        p = w ? w("AmazonGatewayHerotatorJS", "") : e;
    p.guardFatal ? p.guardFatal(g)(p, window) : p.execute(function() {
        g(p, window)
    })
})(function(g, e, w) {
    g.when("generic-observable").register("gw-herotator-controller", function(g) {
        var f = function() {};
        return function(e) {
            function y() {
                h.notifyObservers("delayBegin")
            }

            function z() {
                h.notifyObservers("delayInterrupted")
            }

            function w(b) {
                for (var c = 0; c < l.length; c++)
                    if (l[c] === b) return c + 1
            }

            function k(a) {
                a =
                    a || {};
                return {
                    delay_complete: a.delay_complete || f,
                    js_ready: a.js_ready || f,
                    fg_loaded: a.fg_loaded || f,
                    mouse_move: a.mouse_move || f,
                    mouse_leave: a.mouse_leave || f,
                    delay_interrupted_timeout: a.delay_interrupted_timeout || f,
                    rotation_complete: a.rotation_complete || f,
                    goto_card: function(a) {
                        a !== n && b.user_navigation(l[a - 1])
                    },
                    user_navigation: a.user_navigation || function(a) {
                        b = new D(a)
                    },
                    user_interaction: a.user_interaction || function() {
                        b.user_navigation(l[n - 1])
                    },
                    stop_autorotation: a.stop_autorotation || function() {
                        b.user_navigation(l[n -
                            1])
                    },
                    pause: a.pause || f,
                    resume: a.resume || f
                }
            }

            function A() {
                function a() {
                    !e && x[c] && (b = 1 === q ? new d : new G)
                }
                y();
                var c = l[(n - 1 + 1) % q + 1 - 1],
                    e = !0;
                return new k({
                    fg_loaded: function(b) {
                        b === c && a()
                    },
                    delay_complete: function() {
                        e = !1;
                        a()
                    },
                    mouse_move: function() {
                        b = new v
                    },
                    pause: function() {
                        b = new B
                    }
                })
            }

            function v() {
                z();
                return new k({
                    mouse_move: z,
                    mouse_leave: function() {
                        b = new A
                    },
                    delay_interrupted_timeout: function() {
                        b.mouse_leave()
                    },
                    pause: function() {
                        b = new B(!0)
                    }
                })
            }

            function B(a) {
                z();
                return new k({
                    mouse_move: function() {
                        a = !0;
                        z()
                    },
                    mouse_leave: function() {
                        a = !1
                    },
                    resume: function() {
                        b = a ? new v : 0 < r ? new A : new d
                    }
                })
            }

            function G() {
                h.notifyObservers("autorotating");
                n = (n - 1 + 1) % q + 1;
                h.notifyObservers("gotoCard", n);
                r--;
                return new k({
                    rotation_complete: function() {
                        b = 0 < r ? new A : new d
                    },
                    mouse_move: function() {
                        b = 0 < r ? new E : new d
                    },
                    pause: function() {
                        b = new C
                    }
                })
            }

            function E(a) {
                var c = !1;
                return new k({
                    rotation_complete: function() {
                        y();
                        b = c ? new B : new v
                    },
                    pause: function() {
                        c = !0
                    },
                    resume: function() {
                        c = !1
                    }
                })
            }

            function C() {
                var a = !1;
                return new k({
                    rotation_complete: function() {
                        y();
                        b = new B(a)
                    },
                    mouse_move: function() {
                        a = !0
                    },
                    mouse_leave: function() {
                        a = !1
                    }
                })
            }

            function D(a) {
                h.notifyObservers("userNavigation");
                n = w(a);
                h.notifyObservers("gotoCard", n);
                return new k({
                    rotation_complete: function() {
                        b = new d
                    },
                    user_navigation: function(a) {
                        b = new m(a)
                    },
                    user_interaction: f
                })
            }

            function m(a) {
                return new k({
                    rotation_complete: function() {
                        b = new D(a)
                    },
                    user_navigation: function(b) {
                        a = b
                    },
                    user_interaction: f
                })
            }

            function d() {
                h.notifyObservers("stopAutorotation");
                return new k({})
            }
            e = e || {};
            var h = new g,
                b = new function() {
                    function a() {
                        x[t] &&
                            c && (h.notifyObservers("ready"), b = new A, d && b.pause(), e && b.stop_autorotation())
                    }
                    var c = !1,
                        e = !1,
                        d = !1;
                    return new k({
                        fg_loaded: function(b) {
                            b === t && a()
                        },
                        js_ready: function() {
                            c = !0;
                            a()
                        },
                        user_navigation: f,
                        stop_autorotation: function() {
                            e = !0
                        },
                        pause: function() {
                            d = !0
                        },
                        resume: function() {
                            d = !1
                        }
                    })
                },
                l = e.fgIDs || [],
                q = l.length,
                t = l[0],
                n = e.card_num || 1,
                x = {},
                r = e.circular ? Infinity : q;
            return {
                delayComplete: function() {
                    b.delay_complete()
                },
                jsReady: function() {
                    b.js_ready()
                },
                fgLoaded: function(a) {
                    x[a] = !0;
                    t === a && h.notifyObservers("atfLoaded");
                    b.fg_loaded(a)
                },
                mouseMove: function() {
                    b.mouse_move()
                },
                mouseLeave: function() {
                    b.mouse_leave()
                },
                delayInterruptedTimeout: function() {
                    b.delay_interrupted_timeout()
                },
                rotationComplete: function() {
                    b.rotation_complete()
                },
                gotoCard: function(a) {
                    b.goto_card(a)
                },
                userInteraction: function() {
                    b.user_interaction()
                },
                userNavigation: function(a) {
                    b.user_navigation(a)
                },
                stopAutorotation: function() {
                    b.stop_autorotation()
                },
                pause: function() {
                    b.pause()
                },
                resume: function() {
                    b.resume()
                },
                addObserver: h.addObserver,
                removeObserver: h.removeObserver
            }
        }
    });
    "use strict";
    g.register("herotator", function() {
        return function(p) {
            function f(a) {
                return function() {
                    g.when("gw-desktop-herotator/controller").execute(function() {
                        b[a]()
                    })
                }
            }

            function u(b, a, c) {
                b.addEventListener ? b.addEventListener(a, c, !1) : b.attachEvent("on" + a, c)
            }

            function y(a, c) {
                l[a] = [];
                var e = c.length;
                if (0 < e)
                    for (var d = 0; d < e; d++)(function(d) {
                        var e = new Image;
                        e.onload = function() {
                            l[a].splice(B(l[a], e), 1);
                            l[a] && 0 === l[a].length && g.when("gw-desktop-herotator/controller").execute(function() {
                                var c = document.getElementById("gw-ftGr-" +
                                        a),
                                    e = c.className,
                                    e = e.replace(/\s*\ba\-lazy\-loaded\b\s*/, "");
                                c.className = e;
                                b.fgLoaded(a)
                            })
                        };
                        l[a].push(e);
                        e.src = c[d].src
                    })(d);
                else g.when("gw-desktop-herotator/controller").execute(function() {
                    b.fgLoaded(a)
                })
            }

            function z() {
                D = Date.now();
                e.uet && e.uet("cf", "hero-first-image", {
                    wb: 1
                });
                e.uex && e.uex("ld", "hero-first-image", {
                    wb: 1
                })
            }

            function w() {
                n || v()
            }

            function k() {
                r = r ? Math.min(r, Date.now()) : Date.now();
                clearTimeout(E.timeout_id);
                clearTimeout(k.timeout_id);
                k.timeout_id = setTimeout(function() {
                        k.timeout_id = 0;
                        b.delayInterruptedTimeout()
                    },
                    3E3)
            }

            function A() {
                n = !0
            }

            function v() {
                v.sent || (clearTimeout(v.timeout), v.timeout = setTimeout(function() {
                    v.sent = !0
                }, 2E3))
            }

            function B(a, b) {
                if (a.indexOf) return a.indexOf(b);
                for (var c = 0; c < a.length; c++)
                    if (a[c] === b) return c
            }

            function G(a) {
                "object" === typeof e.ue && "function" === typeof e.ue.count && e.ue.count(a, (e.ue.count(a) || 0) + 1)
            }

            function E(a) {
                x < r && (t -= r - x, r = 0);
                x = Date.now();
                E.timeout_id = setTimeout(function() {
                    t = q;
                    b.delayComplete()
                }, t)
            }

            function C(c, e) {
                C.current_card !== e && (C.current_card = e, a.gotoPage(e), h.notifyObservers("page_changed"));
                setTimeout(function() {
                    b.rotationComplete()
                }, 250)
            }
            var D = Date.now(),
                m = document.getElementById("gw-desktop-herotator"),
                d = m.getElementsByTagName("ol")[0],
                h, b, l = {},
                q = parseInt(m.getAttribute("data-autorotation-delay"), 10),
                t = q,
                n = !1,
                x = 0,
                r = 0,
                a, c;
            u(d, "click", f("userInteraction"));
            u(d, "focusin", f("userInteraction"));
            u(d, "mouseenter", f("mouseMove"));
            u(d, "mousemove", f("mouseMove"));
            u(d, "mouseleave", f("mouseLeave"));
            u(d, "touchstart", f("userInteraction"));
            u(d, "touchmove", f("userInteraction"));
            u(d, "touchend", f("userInteraction"));
            u(d, "touchcancel", f("userInteraction"));
            for (var m = document.getElementById("gw-desktop-herotator").getElementsByTagName("li")[0], d = 0, F = m.childNodes[d]; F && "div" !== String(F.nodeName).toLowerCase();) d++, F = m.childNodes[d];
            d = F;
            m = String(d.id).replace(/^gw-ftGr-/, "");
            d = d.getElementsByTagName("img");
            y(m, d || []);
            for (var H = [m], m = 0; p[m];) H.push(p[m].fgID), m++;
            C.current_card = 1;
            g.when("gw-herotator-controller").execute(function(d) {
                b = new d({
                    fgIDs: H
                });
                b.addObserver("atfLoaded", z);
                b.addObserver("delayBegin", E);
                b.addObserver("delayInterrupted",
                    k);
                b.addObserver("gotoCard", C);
                b.addObserver("userNavigation", w);
                b.addObserver("stopAutorotation", A);
                b.addObserver("ready", function() {
                    var a = Date.now() - D;
                    t = Math.max(q - a, 1);
                    "use strict";
                    g.register("herotator-controls", function() {
                        function a() {
                            d.show();
                            c(".a-carousel-left").css("z-index", 10);
                            c(".a-carousel-right").css("z-index", 10)
                        }

                        function b() {
                            d.hide()
                        }
                        var d = c("#gw-desktop-herotator .a-carousel-rounded-buttons .a-carousel-left,#gw-desktop-herotator .a-carousel-rounded-buttons .a-carousel-right");
                        c("#gw-desktop-herotator .a-carousel-rounded-buttons .a-carousel-left").attr("cel_widget_id",
                            "gw-desktop-hero-left-cel");
                        c("#gw-desktop-herotator .a-carousel-rounded-buttons .a-carousel-right").attr("cel_widget_id", "gw-desktop-hero-right-cel");
                        c("#gw-desktop-herotator .a-carousel-rounded-buttons .a-carousel-left").addClass("celwidget");
                        c("#gw-desktop-herotator .a-carousel-rounded-buttons .a-carousel-right").addClass("celwidget");
                        c("#gw-desktop-herotator .a-carousel-rounded-buttons .a-carousel-left").attr("data-csa-c-type", "action");
                        c("#gw-desktop-herotator .a-carousel-rounded-buttons .a-carousel-right").attr("data-csa-c-type",
                            "action");
                        c("#gw-desktop-herotator .a-carousel-rounded-buttons .a-carousel-left").attr("data-csa-c-action", "herotatorLeftArrow");
                        c("#gw-desktop-herotator .a-carousel-rounded-buttons .a-carousel-right").attr("data-csa-c-action", "herotatorRightArrow");
                        c("#gw-desktop-herotator .a-carousel-rounded-buttons .a-carousel-left").attr("data-csa-c-slot-id", "gw-desktop-hero-left");
                        c("#gw-desktop-herotator .a-carousel-rounded-buttons .a-carousel-right").attr("data-csa-c-slot-id", "gw-desktop-hero-right");
                        csa("Content", {
                            element: c("#gw-desktop-herotator .a-carousel-rounded-buttons .a-carousel-left")[0]
                        });
                        csa("Content", {
                            element: c("#gw-desktop-herotator .a-carousel-rounded-buttons .a-carousel-right")[0]
                        });
                        c("#gw-desktop-herotator .a-carousel-rounded-buttons .a-carousel-left").click(function(a) {
                            G("gw-desktop-hero-left")
                        });
                        c("#gw-desktop-herotator .a-carousel-rounded-buttons .a-carousel-right").click(function(a) {
                            G("gw-desktop-hero-right")
                        });
                        var f = c("#gw-desktop-herotator");
                        f.addClass("gw-desktop-herotator-ready");
                        1 <
                            f.find(".a-carousel-card").length ? (a(), e.GWI && e.GWI.recordLatency("gwHerotatorActive")) : b();
                        return {
                            activePage: function(a) {},
                            show: a,
                            hide: b
                        }
                    });
                    c("#gw-desktop-herotator").addClass("gw-desktop-herotator-ready")
                });
                g.register("gw-desktop-herotator/controller");
                g.when("generic-observable").register("gw-desktop-herotator", function(c) {
                    h = new c;
                    return {
                        getAutorotationDelay: function() {
                            return q
                        },
                        setAutorotationDelay: function(a) {
                            a = parseInt(a, 10);
                            t = a - (q - t);
                            q = a
                        },
                        stopAutorotation: function() {
                            b.stopAutorotation()
                        },
                        disableNavigation: function() {
                            g.now("herotator-controls").execute(function(a) {
                                a.hide()
                            });
                            a.pause()
                        },
                        enableNavigation: function() {
                            g.now("herotator-controls").execute(function(a) {
                                a.show()
                            });
                            a.resume()
                        },
                        pause: function() {
                            b.pause()
                        },
                        resume: function() {
                            b.resume()
                        },
                        addObserver: h.addObserver,
                        removeObserver: h.removeObserver
                    }
                })
            });
            g.when("A", "a-carousel-framework", "gwAjax").execute(function(d, f, l) {
                function k() {
                    var a = 0;
                    for (e.GWI && e.GWI.recordLatency("gw-hero-btf-populate"); p[a];) {
                        var b = p[a].fgID,
                            d = p[a].content,
                            f = document.getElementById("gw-ftGr-" + b);
                        c(f).html(d);
                        d = f.getElementsByTagName("img");
                        y(b,
                            d);
                        a++
                    }
                }
                c = d.$;
                f.onInit("gateway-desktop-layout.herotator", function() {
                    var c = d.$("#gw-desktop-herotator \x3e .a-carousel-container");
                    a = f.getCarousel(c);
                    a.onChange("pageNumber", function() {
                        var c = a.getAttr("pageNumber");
                        b.gotoCard(c)
                    });
                    a.onChange("animating", function(a) {
                        a || h.notifyObservers("animation_complete")
                    });
                    g.when("herotator-controls").execute(function(b) {
                        a.onChange("pageNumber", function() {
                            var c = a.getAttr("pageNumber");
                            b.activePage(c)
                        })
                    });
                    k();
                    g.when("gw-desktop-herotator").register("gw-desktop-herotator/dom-ready");
                    g.when("gw-desktop-herotator/controller", "gw-desktop-herotator").execute(function() {
                        b.jsReady()
                    })
                })
            })
        }
    })
});