(function() {
    var l = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        n = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function r() {
        r = function() {};
        n.Symbol || (n.Symbol = aa)
    }
    var ba = 0;

    function aa(a) {
        return "jscomp_symbol_" + (a || "") + ba++
    }

    function t() {
        r();
        var a = n.Symbol.iterator;
        a || (a = n.Symbol.iterator = n.Symbol("iterator"));
        "function" != typeof Array.prototype[a] && l(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return u(this)
            }
        });
        t = function() {}
    }

    function u(a) {
        var b = 0;
        return ca(function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        })
    }

    function ca(a) {
        t();
        a = {
            next: a
        };
        a[n.Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function v(a) {
        t();
        var b = a[Symbol.iterator];
        return b ? b.call(a) : u(a)
    }
    for (var w = n, x = ["Promise"], A = 0; A < x.length - 1; A++) {
        var B = x[A];
        B in w || (w[B] = {});
        w = w[B]
    }
    var C = x[x.length - 1],
        E = w[C],
        F = function() {
            function a(a) {
                this.b = 0;
                this.j = void 0;
                this.a = [];
                var b = this.g();
                try {
                    a(b.resolve, b.reject)
                } catch (f) {
                    b.reject(f)
                }
            }

            function b() {
                this.a = null
            }
            if (E) return E;
            b.prototype.b = function(a) {
                this.a || (this.a = [], this.g());
                this.a.push(a)
            };
            b.prototype.g = function() {
                var a = this;
                this.c(function() {
                    a.j()
                })
            };
            var c = n.setTimeout;
            b.prototype.c = function(a) {
                c(a, 0)
            };
            b.prototype.j = function() {
                for (; this.a && this.a.length;) {
                    var a = this.a;
                    this.a = [];
                    for (var b = 0; b < a.length; ++b) {
                        var c = a[b];
                        delete a[b];
                        try {
                            c()
                        } catch (e) {
                            this.h(e)
                        }
                    }
                }
                this.a = null
            };
            b.prototype.h = function(a) {
                this.c(function() {
                    throw a;
                })
            };
            a.prototype.g = function() {
                function a(a) {
                    return function(d) {
                        c || (c = !0, a.call(b, d))
                    }
                }
                var b = this,
                    c = !1;
                return {
                    resolve: a(this.C),
                    reject: a(this.h)
                }
            };
            a.prototype.C = function(b) {
                if (b === this) this.h(new TypeError("A Promise cannot resolve to itself"));
                else if (b instanceof a) this.F(b);
                else {
                    var c;
                    a: switch (typeof b) {
                        case "object":
                            c = null != b;
                            break a;
                        case "function":
                            c = !0;
                            break a;
                        default:
                            c = !1
                    }
                    c ? this.v(b) : this.m(b)
                }
            };
            a.prototype.v =
                function(a) {
                    var b = void 0;
                    try {
                        b = a.then
                    } catch (f) {
                        this.h(f);
                        return
                    }
                    "function" == typeof b ? this.G(b, a) : this.m(a)
                };
            a.prototype.h = function(a) {
                this.o(2, a)
            };
            a.prototype.m = function(a) {
                this.o(1, a)
            };
            a.prototype.o = function(a, b) {
                if (0 != this.b) throw Error("Cannot settle(" + a + ", " + b | "): Promise already settled in state" + this.b);
                this.b = a;
                this.j = b;
                this.u()
            };
            a.prototype.u = function() {
                if (this.a) {
                    for (var a = this.a, b = 0; b < a.length; ++b) a[b].call(), a[b] = null;
                    this.a = null
                }
            };
            var d = new b;
            a.prototype.F = function(a) {
                var b = this.g();
                a.c(b.resolve,
                    b.reject)
            };
            a.prototype.G = function(a, b) {
                var c = this.g();
                try {
                    a.call(b, c.resolve, c.reject)
                } catch (e) {
                    c.reject(e)
                }
            };
            a.prototype.then = function(b, c) {
                function d(a, b) {
                    return "function" == typeof a ? function(b) {
                        try {
                            e(a(b))
                        } catch (y) {
                            g(y)
                        }
                    } : b
                }
                var e, g, h = new a(function(a, b) {
                    e = a;
                    g = b
                });
                this.c(d(b, e), d(c, g));
                return h
            };
            a.prototype["catch"] = function(a) {
                return this.then(void 0, a)
            };
            a.prototype.c = function(a, b) {
                function c() {
                    switch (e.b) {
                        case 1:
                            a(e.j);
                            break;
                        case 2:
                            b(e.j);
                            break;
                        default:
                            throw Error("Unexpected state: " + e.b);
                    }
                }
                var e =
                    this;
                this.a ? this.a.push(function() {
                    d.b(c)
                }) : d.b(c)
            };
            a.resolve = function(b) {
                return b instanceof a ? b : new a(function(a) {
                    a(b)
                })
            };
            a.reject = function(b) {
                return new a(function(a, c) {
                    c(b)
                })
            };
            a.b = function(b) {
                return new a(function(c, d) {
                    for (var e = v(b), f = e.next(); !f.done; f = e.next()) a.resolve(f.value).c(c, d)
                })
            };
            a.a = function(b) {
                var c = v(b),
                    d = c.next();
                return d.done ? a.resolve([]) : new a(function(b, f) {
                    function e(a) {
                        return function(c) {
                            g[a] = c;
                            h--;
                            h || b(g)
                        }
                    }
                    var g = [],
                        h = 0;
                    do g.push(void 0), h++, a.resolve(d.value).c(e(g.length -
                        1), f), d = c.next(); while (!d.done)
                })
            };
            a.$jscomp$new$AsyncExecutor = function() {
                return new b
            };
            return a
        }();
    F != E && null != F && l(w, C, {
        configurable: !0,
        writable: !0,
        value: F
    });
    /*
     Copyright (c) 2018 Glance Networks, Inc.
    */
    var G;
    window.GLANCE = window.GLANCE || {};
    window.GLANCE.VERSION = "4.17.0.31";
    window.GLANCE.PATCH = "";
    var H = navigator.userAgent.toLowerCase(),
        da = navigator.platform.toLowerCase(),
        K = H.match(/(edge)[\s\/:]([\w\d\.]+)?/) || H.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || H.match(/(rv):([\w\d\.]+)/) || [null, "unknown", 0];
    "rv" === K[1] && (K[1] = "ie");
    var L = {
        extend: Function.prototype.extend,
        name: "version" == K[1] ? K[3] : K[1],
        version: "ie" == K[1] && document.documentMode || parseFloat("opera" == K[1] && K[4] ? K[4] : K[2]),
        w: {
            name: H.match(/ip(?:ad|od|hone)/) ? "ios" : (H.match(/(?:webos|android)/) || da.match(/mac|win|linux/) || ["other"])[0]
        },
        H: {
            K: !!document.evaluate,
            J: !!window.runtime,
            query: !!document.querySelector,
            json: !!window.JSON
        },
        I: {}
    };
    document.documentMode && window.XDomainRequest ? (L.name = "ie", L.version = document.documentMode) : window.navigator && navigator.appVersion && -1 != navigator.appVersion.indexOf("MSIE 7.") && (L.name = "ie", L.version = "7");
    L[L.name] = !0;
    L[L.name + parseInt(L.version, 10)] = !0;
    L.w[L.w.name] = !0;
    void 0 === G && (G = function(a) {
        return JSON.stringify(a)
    });

    function M(a, b, c) {
        N("addEventListener", window, a, b, c)
    }

    function P(a, b, c) {
        var d = {};
        d[b] = c;
        a.postMessage(d, "*")
    }

    function Q(a, b) {
        window.addEventListener("message", function(c) {
            var d;
            if ("string" === typeof c.data) try {
                d = JSON.parse(c.data)
            } catch (g) {
                return !1
            } else d = c.data;
            void 0 !== d[a] && b(c.source, d[a])
        })
    }
    window.Sarissa && Sarissa._SARISSA_IS_IE && new window.XMLHttpRequest;

    function R(a, b) {
        this.name = a;
        var c;
        if (!(c = b)) {
            var d = new S(window);
            c = d.b.location.hostname;
            for (d = d.b;
                "" === c && d.parent !== d;) c = d.parent.location.hostname, d = d.parent;
            c = fa(c)
        }
        this.domain = c
    }
    R.prototype.l = function() {
        var a = this.get();
        return a ? JSON.parse(a) : null
    };
    R.prototype.get = function() {
        return this.f() ? unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + escape(this.name).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1")) : null
    };
    R.prototype.i = function() {
        var a = new Date;
        a.setDate(a.getDate() - 1);
        document.cookie = escape(this.name) + "=; expires=" + a.toGMTString() + "; domain=" + this.domain + "; path=/"
    };
    R.prototype.f = function() {
        return (new RegExp("(?:^|;\\s*)" + escape(this.name).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie)
    };

    function T(a) {
        this.name = a
    }
    T.prototype.l = function() {
        if (!this.f()) return null;
        var a = localStorage.getItem(this.name);
        return JSON.parse(a)
    };
    T.prototype.get = function() {
        return this.f() ? localStorage.getItem(this.name) : null
    };
    T.prototype.i = function() {
        localStorage.removeItem(this.name);
        localStorage.removeItem(this.name + "_exp")
    };
    T.prototype.f = function() {
        var a = localStorage.getItem(this.name + "_exp");
        if (!a) return !1;
        a = new Date(a);
        return a < new Date ? (this.i(), !1) : !0
    };

    function U(a, b) {
        this.a = [new R(a, b), new T(a)]
    }
    U.prototype.l = function() {
        return this.a[0].l() || this.a[1].l()
    };
    U.prototype.get = function() {
        return this.a[0].get() || this.a[1].get()
    };
    U.prototype.i = function() {
        this.a[0].i();
        this.a[1].i()
    };
    U.prototype.f = function() {
        return this.a[0].f() || this.a[1].f()
    };

    function S(a) {
        this.a = a.document;
        this.b = a;
        var b = [
            ["hidden", "visibilitychange"],
            ["mozHidden", "mozvisibilitychange"],
            ["webkitHidden", "webkitvisibilitychange"],
            ["msHidden", "msvisibilitychange"],
            ["oHidden", "ovisibilitychange"]
        ];
        for (a = 0; a < b.length && !(b[a][0] in document); a++);
    }

    function fa(a) {
        var b = new RegExp(/^(?:[a-z]{1,5}:\/\/|)([^\:\?\/]*)/),
            c = a.match(/^\d+\.\d+.\d+.\d+$/),
            b = b.exec(a);
        if (c) return a;
        if (null === b || 2 !== b.length) return "about:" !== a && V("ERR_DOMAINPARSE: " + a), null;
        c = b[1].split(".");
        return 1 === c.length ? (V("ERR_DOMAINPARSE: " + a), null) : 2 === c.length ? c.join(".") : 3 === c.length ? c.slice(1).join(".") : 4 >= c[c.length - 2].length ? c.slice(c.length - 3).join(".") : c.slice(c.length - 2).join(".")
    }
    S.prototype.getElementsByTagName = function(a) {
        return N("getElementsByTagName", this.a, a)
    };

    function W(a, b, c) {
        var d = a.a.createElement("script");
        c && d.addEventListener("load", c);
        d.setAttribute("type", "text/javascript");
        d.setAttribute("charset", "UTF-8");
        for (c = 0; c < b.length; c++) d.setAttribute(b[c][0], b[c][1]);
        a.a.head.appendChild(d)
    }
    S.prototype.head = function() {
        return void 0 !== this.a.head ? this.a.head : this.getElementsByTagName("head")[0]
    };

    function X(a, b) {
        a.b.addEventListener && (document.readyState.match(/complete/) ? b() : (a.b.addEventListener("load", b), a.a.addEventListener("DOMContentLoaded", b, !1)))
    }
    S.prototype.scrollTo = function(a, b, c) {
        var d;
        if (void 0 !== window.pageXOffset) d = {
            x: Math.round(this.b.pageXOffset),
            y: Math.round(this.b.pageYOffset)
        };
        else if (void 0 !== document.documentElement.scrollTop) d = {
            x: this.a.documentElement.scrollLeft,
            y: this.a.documentElement.scrollTop
        };
        else if (void 0 !== document.body.scrollLeft) d = {
            x: this.a.body.scrollLeft,
            y: this.a.body.scrollTop
        };
        else throw Error("Can't get page scroll");
        d[a] = b;
        a = {
            left: d.x,
            top: d.y,
            behavior: c ? "smooth" : "auto"
        };
        L.ie11 || L.edge ? window.scrollTo(d.x, d.y) :
            window.scrollTo(a)
    };
    S.prototype.addEventListener = function(a, b, c) {
        this.a.addEventListener(a, b, c)
    };
    S.prototype.removeEventListener = function(a, b, c) {
        this.a.removeEventListener(a, b, c)
    };

    function V(a) {
        window.console && window.console.log && (window.GLANCE_COBROWSE ? !window.GLANCE_COBROWSE.disableLogging : 1) && window.console.log(a)
    }

    function Y(a) {
        this.element = a
    }
    Y.prototype.addEventListener = function(a, b, c) {
        this.element.addEventListener(a, b, c)
    };
    Y.prototype.removeEventListener = function(a, b, c) {
        this.element.removeEventListener(a, b, c)
    };

    function N(a, b, c) {
        for (var d = [], g = 2; g < arguments.length; ++g) d[g - 2] = arguments[g];
        return Y.b && Y.a && b.nodeType ? "#document" === b.nodeName ? Y.a.document[a].apply(b, d) : "#document-fragment" === b.nodeName ? Y.a.DocumentFragment.prototype[a].apply(b, d) : "[object Window]" === b.toString() ? Y.a.window[a].apply(b, d) : Y.a.document.body[a].apply(b, d) : b[a].apply(b, d)
    }

    function ga(a, b, c) {
        a.element.style.left = b + "px";
        a.element.style.top = c + "px"
    }
    Y.prototype.moveTo = function(a, b) {
        function c() {
            e++ < d ? (h += m, f += z, ga(g, Math.floor(h), Math.floor(f)), g.a = window.setTimeout(c, 200 / d)) : ga(g, a, b)
        }
        var d = 10;
        void 0 !== this.a && window.clearTimeout(this.a);
        var g = this,
            h = parseInt(this.element.style.left),
            f = parseInt(this.element.style.top);
        isNaN(h) && (h = -999);
        isNaN(f) && (f = -999);
        var e = 0,
            d = 10,
            m = (a - h) / d,
            z = (b - f) / d;
        (m || z) && c()
    };

    function ha() {
        this.listeners = this.a = {}
    };

    function Z(a, b) {
        var c;
        a && (c = c || Object.keys(a), c.forEach(function(c) {
            void 0 !== a[c] && (b[c] = a[c])
        }))
    }

    function ia(a) {
        var b = {};
        if (!a) return b;
        var c = 0;
        for (a = a.attributes; c < a.length; c++) {
            var d = a[c].nodeName.match(/data-(.*)/);
            d && 2 === d.length && (b[d[1]] = a[c].nodeValue)
        }
        return b
    }

    function ja() {
        var a = window.GLANCE_COBROWSE ? window.GLANCE_COBROWSE : {},
            b = document.getElementById("glance-cobrowse"),
            c = ia(document.getElementById("cobrowsescript")),
            b = ia(b);
        Z(c, a);
        Z(b, a);
        return a
    };
    var ka = ["4", "17", "0", "31"].slice(0, 3).join(".") + "M";

    function la() {
        this.b = document.getElementById("cobrowsescript") || document.getElementById("glance-cobrowse");
        if (null !== this.b) {
            var a = ja();
            Z(a, this);
            var b = /\/\/(.*)\//.exec("string" === typeof this.b.src ? this.b.src : a.scriptserver + "/");
            this.a = b && 2 === b.length ? b[1] : "www.glancecdn.net/cobrowse";
            this.a = this.a.replace("/js", "");
            a.cbexperiment && (this.a = this.a.replace("cobrowse", "cbexperiment"));
            b = (a.oninit || "").split(":");
            this.g = a.groupid || this.b.getAttribute("groupid");
            this.v = a.ws || this.b.getAttribute("ws") ||
                "www.glance.net";
            this.v.match("\\.glance\\.net$");
            this.u = a.ui;
            this.c = {
                s: b[0],
                D: b[1]
            };
            this.o = a.site || this.b.getAttribute("site") || "production";
            this.j = JSON.parse(a.inputevents || "{}");
            this.m = a.presence;
            if (!this.g) throw Error("data-groupid missing");
            a = a.additionalgroupids || "";
            this.h = [this.g].concat(a ? a.split(",") : []);
            this.h = this.h.map(function(a) {
                if (!parseInt(a)) throw Error("data-groupid invalid: " + a);
                return parseInt(a)
            });
            if (!/staging|production/i.test(this.o)) throw Error("data-site invalid");
        }
    };

    function ma() {
        return 0 < window.location.href.indexOf("GlanceSession=1")
    };
    window.GLANCE = window.GLANCE || {};
    window.GLANCE.Cobrowse = window.GLANCE.Cobrowse || {};

    function na() {
        function a() {
            if (p.c.s) {
                var a = new U("glance_ssn_info");
                a.l() && ("abandonsession" === p.c.s ? a.i() : "continuesession" === p.c.s && p.c.D !== a.l().ssnid && a.i())
            }
        }

        function b(a) {
            function b(a, b, c) {
                return function(d) {
                    if (d.keyCode === b && d[a + "Key"] && (d = c.match(/showButton|toggleButton|showTerms/) ? "VisitorUI" : "Visitor", !h(d, c))) window.GLANCE.Cobrowse[d][c]()
                }
            }
            for (var c in a)
                if (a.hasOwnProperty(c)) {
                    var d = c.match(/(ctrl|alt|shift)-(\d*)/);
                    !d || 3 > d.length || M("keydown", b(d[1], parseInt(d[2]), a[c]), !0)
                }
        }

        function c() {
            var a =
                document.body;

            function b(a) {
                return function(b) {
                    var c = a.match(/showButton|toggleButton|showTerms/) ? "VisitorUI" : "Visitor";
                    b.stopPropagation();
                    b.preventDefault();
                    if (!h(c, a)) q[c][a]()
                }
            }["glance_button", "data-glancebutton"].forEach(function(c) {
                for (var d = a.querySelectorAll("[" + c + "]"), I = 0; d && I < d.length; I++) {
                    var e = d[I].getAttribute(c);
                    "start" === e && (e = "startSession");
                    d[I].addEventListener("click", b(e))
                }
            })
        }

        function d() {
            return q.Visitor
        }

        function g(a, b) {
            q[b][a] = function(c) {
                f(function() {
                    q[b][a](c)
                }, b)
            }
        }

        function h(a,
            b) {
            if (!e) return !1;
            P(window.top, "forwardevent", {
                namespace: a,
                funcname: b
            });
            return !0
        }

        function f(a, b) {
            b = b || "Visitor";
            if (N("getElementById", m.a, ("glance_" + b).toLowerCase())) q[b].loaded ? a && a() : a && V("SCRIPT_NOT_LOADED:" + b);
            else if (a && (ea._onload[b] = a), e || "Visitor" !== b || p.u || f(null, "VisitorUI"), W(m, [
                    ["id", ("glance_" + b).toLowerCase()],
                    ["src", y + "/GlanceCobrowse" + b + "_" + O + ".js"]
                ]), "Visitor" === b) {
                var c, d = document.getElementsByTagName("iframe");
                for (c = 0; c < d.length; c++) d[c].contentWindow && P(d[c].contentWindow, "glance_load", {
                    A: !0
                })
            }
        }
        window.GLANCE.runDiagnostics = function() {
            W(m, [
                ["src", "https://" + p.a + "/js/diagnostics.js"]
            ])
        };
        if (window.localStorage && window.XMLHttpRequest && window.atob) {
            if (!window.addEventListener) return null;
            var e = window.parent !== window,
                m = new S(window),
                z = !1,
                p = new la,
                O = ka,
                q = window.GLANCE.Cobrowse,
                y = "//" + p.a + "/js";
            e || a();
            var D = new ha;
            if (q.Loader) V("ERR_DUP_SCRIPTS");
            else {
                var ea = {
                    load: function(a) {
                        f(a)
                    },
                    loadScript: function(a, b) {
                        W(m, [
                            ["src", y + "/" + a + "_" + O + ".js"]
                        ], b)
                    },
                    _eventListeners: D,
                    _onload: {},
                    _origpath: window.location.pathname
                };
                Q("glance_load", function(a, b) {
                    a !== window.parent && a.parent !== window ? V("UNTRUSTED_LOAD_MSG") : (b.A && f(), b.B && null !== N("getElementById", m.a, "glance_visitor") && P(a, "glance_load", {
                        A: !0
                    }))
                });
                e && P(window.parent, "glance_load", {
                    B: !0
                });
                window.addEventListener("message", function(a) {
                    if ("string" !== typeof a.data) {
                        if (d().loaded) return !0;
                        a.data.glance_invoke && (a.data.origin = a.origin, f(function() {
                            window.postMessage(a.data, window.location.href)
                        }))
                    }
                });
                M("focus", function() {
                    if (d().loaded) return !0;
                    d().inSession() && f()
                });
                q.Visitor = {
                    loaded: !1,
                    inSession: function() {
                        return (new U("glance_ssn_info")).f()
                    },
                    addEventListener: function(a, b) {
                        D.a[a] = D.a[a] || [];
                        D.a[a].push(b)
                    },
                    removeEventListener: function(a, b) {
                        var c, d = D.a[a];
                        void 0 !== d && (c = d.indexOf(b), 0 <= c && d.splice(c, 1))
                    }
                };
                var J = ["showButton", "toggleButton", "showTerms", "setStyle"];
                e || (q.VisitorUI = {}, J.forEach(function(a) {
                    g(a, "VisitorUI")
                }));
                J = J.concat(["startSession", "setStartParams"]);
                J.forEach(function(a) {
                    g(a, "Visitor")
                });
                q.Loader = ea;
                e || ma() || !d().inSession() || f();
                !e && ma() &&
                    f(null, "XDOM");
                X(m, function() {
                    document.body && !z && (z = !0, c(), b(p.j), p.m && !e && W(m, [
                        ["src", y + "/GlancePresenceVisitor_" + O + ".js"]
                    ]))
                });
                Q("forwardevent", function(a, b) {
                    if (a.top !== window) V("UNTRUSTED_KEYEVT");
                    else window.GLANCE.Cobrowse[b.namespace][b.funcname]()
                })
            }
        } else window.console && window.console.error && window.console.error("ERR_COBROWSE_NOT_SUPP")
    }
    document.getElementById("cobrowsescript") || document.getElementById("glance-cobrowse") ? na() : (V("LOADER_PAGE_NOT_READY"), X(new S(window), na));
}).call(window);