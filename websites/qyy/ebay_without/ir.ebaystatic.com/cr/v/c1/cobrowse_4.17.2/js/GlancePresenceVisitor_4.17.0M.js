(function() {
    var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        h = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function ba() {
        ba = function() {};
        h.Symbol || (h.Symbol = ca)
    }
    var da = 0;

    function ca(a) {
        return "jscomp_symbol_" + (a || "") + da++
    }

    function l() {
        ba();
        var a = h.Symbol.iterator;
        a || (a = h.Symbol.iterator = h.Symbol("iterator"));
        "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return ea(this)
            }
        });
        l = function() {}
    }

    function ea(a) {
        var b = 0;
        return fa(function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        })
    }

    function fa(a) {
        l();
        a = {
            next: a
        };
        a[h.Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function ga(a) {
        l();
        var b = a[Symbol.iterator];
        return b ? b.call(a) : ea(a)
    }
    for (var n = h, p = ["Promise"], q = 0; q < p.length - 1; q++) {
        var t = p[q];
        t in n || (n[t] = {});
        n = n[t]
    }
    var ha = p[p.length - 1],
        u = n[ha],
        v = function() {
            function a(a) {
                this.b = 0;
                this.h = void 0;
                this.a = [];
                var b = this.f();
                try {
                    a(b.resolve, b.reject)
                } catch (f) {
                    b.reject(f)
                }
            }

            function b() {
                this.a = null
            }
            if (u) return u;
            b.prototype.b = function(a) {
                this.a || (this.a = [], this.f());
                this.a.push(a)
            };
            b.prototype.f = function() {
                var a = this;
                this.c(function() {
                    a.h()
                })
            };
            var c = h.setTimeout;
            b.prototype.c = function(a) {
                c(a, 0)
            };
            b.prototype.h = function() {
                for (; this.a && this.a.length;) {
                    var a = this.a;
                    this.a = [];
                    for (var b = 0; b < a.length; ++b) {
                        var c = a[b];
                        delete a[b];
                        try {
                            c()
                        } catch (m) {
                            this.g(m)
                        }
                    }
                }
                this.a = null
            };
            b.prototype.g = function(a) {
                this.c(function() {
                    throw a;
                })
            };
            a.prototype.f = function() {
                function a(a) {
                    return function(d) {
                        c || (c = !0, a.call(b, d))
                    }
                }
                var b = this,
                    c = !1;
                return {
                    resolve: a(this.s),
                    reject: a(this.g)
                }
            };
            a.prototype.s = function(b) {
                if (b === this) this.g(new TypeError("A Promise cannot resolve to itself"));
                else if (b instanceof a) this.u(b);
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
                    c ? this.m(b) : this.i(b)
                }
            };
            a.prototype.m =
                function(a) {
                    var b = void 0;
                    try {
                        b = a.then
                    } catch (f) {
                        this.g(f);
                        return
                    }
                    "function" == typeof b ? this.B(b, a) : this.i(a)
                };
            a.prototype.g = function(a) {
                this.j(2, a)
            };
            a.prototype.i = function(a) {
                this.j(1, a)
            };
            a.prototype.j = function(a, b) {
                if (0 != this.b) throw Error("Cannot settle(" + a + ", " + b | "): Promise already settled in state" + this.b);
                this.b = a;
                this.h = b;
                this.l()
            };
            a.prototype.l = function() {
                if (this.a) {
                    for (var a = this.a, b = 0; b < a.length; ++b) a[b].call(), a[b] = null;
                    this.a = null
                }
            };
            var d = new b;
            a.prototype.u = function(a) {
                var b = this.f();
                a.c(b.resolve,
                    b.reject)
            };
            a.prototype.B = function(a, b) {
                var c = this.f();
                try {
                    a.call(b, c.resolve, c.reject)
                } catch (m) {
                    c.reject(m)
                }
            };
            a.prototype.then = function(b, c) {
                function d(a, b) {
                    return "function" == typeof a ? function(b) {
                        try {
                            e(a(b))
                        } catch (Ea) {
                            g(Ea)
                        }
                    } : b
                }
                var e, g, G = new a(function(a, b) {
                    e = a;
                    g = b
                });
                this.c(d(b, e), d(c, g));
                return G
            };
            a.prototype["catch"] = function(a) {
                return this.then(void 0, a)
            };
            a.prototype.c = function(a, b) {
                function c() {
                    switch (e.b) {
                        case 1:
                            a(e.h);
                            break;
                        case 2:
                            b(e.h);
                            break;
                        default:
                            throw Error("Unexpected state: " + e.b);
                    }
                }
                var e = this;
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
                    for (var f = ga(b), e = f.next(); !e.done; e = f.next()) a.resolve(e.value).c(c, d)
                })
            };
            a.a = function(b) {
                var c = ga(b),
                    d = c.next();
                return d.done ? a.resolve([]) : new a(function(b, f) {
                    function e(a) {
                        return function(c) {
                            g[a] = c;
                            r--;
                            r || b(g)
                        }
                    }
                    var g = [],
                        r = 0;
                    do g.push(void 0), r++, a.resolve(d.value).c(e(g.length -
                        1), f), d = c.next(); while (!d.done)
                })
            };
            a.$jscomp$new$AsyncExecutor = function() {
                return new b
            };
            return a
        }();
    v != u && null != v && aa(n, ha, {
        configurable: !0,
        writable: !0,
        value: v
    });
    /*
     Copyright 2019 Glance Networks, Inc.
    */
    var ia = ["4", "17", "0", "31"].slice(0, 3).join(".");

    function w(a) {
        for (a = a.toString(); 2 > a.length;) a = "0" + a;
        return a
    }
    Uint8Array.prototype.slice || (Uint8Array.prototype.slice = function(a, b) {
        return new Uint8Array(this.subarray(a, b))
    });
    ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = this.byteLength);
        a = Math.floor(a);
        b = Math.floor(b);
        0 > a && (a += this.byteLength);
        0 > b && (b += this.byteLength);
        a = Math.min(Math.max(0, a), this.byteLength);
        b = Math.min(Math.max(0, b), this.byteLength);
        if (0 >= b - a) return new ArrayBuffer(0);
        var c = new ArrayBuffer(b - a),
            d = new Uint8Array(c),
            e = new Uint8Array(this, a, b - a);
        d.set(e);
        return c
    });
    var x = navigator.userAgent.toLowerCase(),
        ja = x.match(/(edge)[\s\/:]([\w\d\.]+)?/) || x.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || x.match(/(rv):([\w\d\.]+)/) || [null, "unknown", 0];
    "rv" === ja[1] && (ja[1] = "ie");
    /*
     Copyright 2017 Glance Networks, Inc.
    */
    function ka(a) {
        for (var b = new Date, b = b.getUTCFullYear() + "/" + (b.getUTCMonth() + 1) + "/" + b.getUTCDate() + " " + w(b.getUTCHours()) + ":" + w(b.getUTCMinutes()) + ":" + w(b.getUTCSeconds()) + " ", c = 0; c < a.length; c++) b += ("object" === typeof a[c] ? JSON.stringify(a[c]) : a[c]) + " ";
        return b
    }

    function y(a) {
        window.console && window.console.log && (window.GLANCE_COBROWSE ? !window.GLANCE_COBROWSE.disableLogging : 1) && window.console.log(ka(arguments))
    };
    /*
     Copyright (c) 2018 Glance Networks, Inc.
    */
    var z = z || {};
    window.GLANCE = window.GLANCE || {};
    window.GLANCE.VERSION = "4.17.0.31";
    window.GLANCE.PATCH = "";
    var A = navigator.userAgent.toLowerCase(),
        la = navigator.platform.toLowerCase(),
        B = A.match(/(edge)[\s\/:]([\w\d\.]+)?/) || A.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || A.match(/(rv):([\w\d\.]+)/) || [null, "unknown", 0];
    "rv" === B[1] && (B[1] = "ie");
    var C = {
        extend: Function.prototype.extend,
        name: "version" == B[1] ? B[3] : B[1],
        version: "ie" == B[1] && document.documentMode || parseFloat("opera" == B[1] && B[4] ? B[4] : B[2]),
        w: {
            name: A.match(/ip(?:ad|od|hone)/) ? "ios" : (A.match(/(?:webos|android)/) || la.match(/mac|win|linux/) || ["other"])[0]
        },
        S: {
            W: !!document.evaluate,
            U: !!window.runtime,
            query: !!document.querySelector,
            json: !!window.JSON
        },
        T: {}
    };
    document.documentMode && window.XDomainRequest ? (C.name = "ie", C.version = document.documentMode) : window.navigator && navigator.appVersion && -1 != navigator.appVersion.indexOf("MSIE 7.") && (C.name = "ie", C.version = "7");
    C[C.name] = !0;
    C[C.name + parseInt(C.version, 10)] = !0;
    C.w[C.w.name] = !0;
    if ("undefined" !== typeof window.Prototype && 1.7 > parseFloat(window.Prototype.Version.substr(0, 3)) && "undefined" !== typeof Array.prototype.toJSON) var D = function(a) {
        var b = Array.prototype.toJSON;
        delete Array.prototype.toJSON;
        a = JSON.stringify(a);
        Array.prototype.toJSON = b;
        return a
    };
    void 0 === D && (D = function(a) {
        return JSON.stringify(a)
    });

    function ma(a) {
        a.onmessage = function(b) {
            b = JSON.parse(b.data);
            a.F && a.F(b)
        };
        a.v = function(b) {
            b = D(b);
            a.send(b)
        };
        a.I = function(a) {
            return a && a.code || 0
        };
        a.J = function(a) {
            return a && a.reason || ""
        }
    }

    function na(a) {
        var b = {},
            c;
        z.P ? c = new E(a) : (C.ie9 && "http:" === window.location.protocol && (b.protocols_whitelist = ["iframe-eventsource", "iframe-htmlfile"]), c = new SockJS(a, "", b));
        c.o = 0;
        c.G = function() {
            c.C();
            c.transport && !c.transport.match(/^iframe-/) && (c.D = window.setInterval(function() {
                c.o++;
                c.N && c.N({
                    o: c.o
                })
            }, 15E3))
        };
        c.C = function() {
            c.D && window.clearInterval(c.D)
        };
        ma(c);
        c.onclose = function(a) {
            c.C();
            c.L && c.L(a)
        };
        c.onheartbeat = function() {
            c.o = 0;
            c.G();
            c.M && c.M()
        };
        return c
    }

    function F(a, b) {
        window.setTimeout(function() {
            F(a, b)
        }, 100)
    }

    function E(a) {
        this.readyState = SockJS.CONNECTING;
        this.a = Math.round(1E6 * Math.random());
        H = H || {};
        H[this.a] = this;
        F({
            from: "GSockJSProxy",
            sockid: this.a,
            cmd: "open",
            url: a
        })
    }
    var H;
    E.prototype.send = function(a) {
        F({
            from: "GSockJSProxy",
            sockid: this.a,
            cmd: "send",
            data: a
        })
    };
    E.prototype.close = function() {
        this.readyState = SockJS.CLOSING;
        F({
            from: "GSockJSProxy",
            sockid: this.a,
            cmd: "close"
        })
    };

    function I(a, b, c) {
        void 0 !== a && (c = c || Object.keys(a), c.forEach(function(c) {
            void 0 !== a[c] && (b[c] = a[c])
        }))
    }

    function oa(a) {
        var b = a.func.split(".");
        if ("GLANCE" !== b[0]) J("ERR_BADINVOKE:" + b[0]);
        else {
            for (var c = window.GLANCE, d = 1; d < b.length; d++)
                if (c = c[b[d]], !c) {
                    J("ERR_UNDEFINVOKE:" + b[d]);
                    return
                }
            a.args = a.args || {};
            a.args.remote = !0;
            c(a.args)
        }
    }

    function K(a) {
        z.P ? this.f = new L(a) : this.a = this.g();
        this.response = null;
        this.type = a
    }
    K.prototype.g = function() {
        return new window.XMLHttpRequest
    };
    window.Sarissa && Sarissa._SARISSA_IS_IE && !(new window.XMLHttpRequest).withCredentials && !window.XDomainRequest && (K.prototype.g = function() {
        M("Sarissa");
        return Sarissa.originalXMLHttpRequest ? new Sarissa.originalXMLHttpRequest : new window.XMLHttpRequest
    });
    K.prototype.abort = function() {
        this.f ? this.f.abort() : this.a.abort()
    };
    K.prototype.onreadystatechange = function() {
        if (4 == this.a.readyState) {
            window.clearTimeout(this.h);
            delete this.h;
            var a = "error";
            if (0 == this.a.status) M(this.method + " to " + this.url + " failed: network"), this.b(!0, "connection", this.a.status);
            else if (200 !== this.a.status) {
                J(this.method + " to " + this.url + " failed with status: " + this.a.status);
                "text" === this.a.responseType && null !== this.a.responseText && M(this.a.responseText);
                if (401 === this.a.status || 403 === this.a.status) a = "authorization", this.c && this.c.V();
                this.b(!1,
                    a, this.a.status)
            } else {
                if ("" !== this.a.response) {
                    if ("XML" === this.accept) this.response = this.a.responseXML && this.a.responseXML.documentElement, null === this.response && J("Invalid XML response: " + this.a.responseText);
                    else if (this.l) {
                        for (var b = new Uint8Array(this.a.responseText.length), c = 0; c < this.a.responseText.length; c++) b[c] = this.a.responseText.charCodeAt(c) & 255;
                        this.response = new Blob([b], {
                            type: this.a.getResponseHeader("Content-Type")
                        })
                    } else if ("blob" === this.a.responseType) this.response = this.a.response;
                    else if (this.a.responseXML) this.response = pa(this.a.responseXML.childNodes[0].childNodes[0].nodeValue);
                    else if ("HTML" === this.accept || "TEXT" === this.accept) this.response = this.a.responseText;
                    else if (this.response = pa(this.a.responseText), null === this.response) {
                        M(this.method + " to " + this.url + " failed - can't parse response " + this.a.responseText);
                        this.b(!1, a);
                        return
                    }
                    if (void 0 !== this.response.err && void 0 !== this.response.msg) {
                        M(this.method + " to " + this.url + " failed with error:" + this.response.err + " " + this.response.msg);
                        this.b(!1, a);
                        return
                    }
                }
                this.onsuccess(this.response)
            }
        }
    };

    function pa(a) {
        var b = null;
        try {
            b = JSON.parse(a)
        } catch (c) {
            return M("JSON parse failed with error: " + c.toString() + " parsing: " + a), null
        }
        return b
    }
    K.prototype.getResponseHeader = function(a) {
        return this.a.getResponseHeader(a)
    };
    K.prototype.get = function(a, b, c, d, e) {
        this.method = "GET";
        N(this, a, null, b, c, d, e)
    };

    function N(a, b, c, d, e, g, f) {
        a.url = b;
        a.onsuccess = void 0 !== g ? g : function() {};
        a.b = void 0 !== f ? f : function() {};
        a.method = a.method || "POST";
        if (a.f) qa(a.f, b, c, d, e, g, f);
        else {
            g = a.m || ("JSON" === a.type ? "application/json; charset=utf-8" : "application/x-www-form-urlencoded; charset=utf-8");
            var m;
            "string" === typeof c ? m = c : c instanceof Blob ? (g = c.type, m = c) : c && (m = "JSON" === a.type ? D(c) : "data=" + D(c));
            C.safari && a.j && (a.h = window.setTimeout(function() {
                    M(this.method + " to " + this.url + " failed - timedout (Safari)");
                    this.b(!1, "timedout")
                }.bind(a),
                a.j));
            a.a.onreadystatechange = function() {
                a.onreadystatechange()
            };
            try {
                a.a.open(a.method, b, d), void 0 !== a.i && a.a.setRequestHeader("Accept", a.i), void 0 !== a.a.setRequestHeader && "GET" !== a.method && a.a.setRequestHeader("Content-type", g), a.c && a.c.K() && a.a.setRequestHeader("Authorization", "Bearer " + a.c.K()), a.a.withCredentials = e, a.a.send(m)
            } catch (r) {
                M(a.method + " to " + b + " failed with: " + r.toString()), a.b(!1, r.toString())
            }
        }
    }

    function L(a) {
        this.type = a
    }

    function qa(a, b, c, d, e, g, f) {
        a.onsuccess = g;
        a.b = f;
        F({
            from: "IFrameProxyRequest",
            type: a.type,
            url: b,
            obj: c,
            async: d,
            withcred: e
        })
    }
    L.prototype.abort = function() {
        L.postMessage({
            from: "IFrameProxyRequest",
            abort: !0
        })
    };

    function O(a) {
        this.name = a
    }

    function ra(a, b) {
        var c = new Date;
        c.setUTCHours(c.getUTCHours() + 8);
        localStorage.setItem(a.name, D(b));
        localStorage.setItem(a.name + "_exp", c.toGMTString())
    }

    function sa(a) {
        if (!ta(a)) return null;
        a = localStorage.getItem(a.name);
        return JSON.parse(a)
    }

    function ua(a, b) {
        var c = new Date;
        c.setUTCMinutes(c.getUTCMinutes() + b);
        localStorage.setItem(a.name + "_exp", c.toGMTString())
    }
    O.prototype.get = function() {
        return ta(this) ? localStorage.getItem(this.name) : null
    };

    function ta(a) {
        var b = localStorage.getItem(a.name + "_exp");
        if (!b) return !1;
        b = new Date(b);
        return b < new Date ? (localStorage.removeItem(a.name), localStorage.removeItem(a.name + "_exp"), !1) : !0
    }

    function P(a) {
        this.a = a.document;
        this.b = a;
        var b = [
            ["hidden", "visibilitychange"],
            ["mozHidden", "mozvisibilitychange"],
            ["webkitHidden", "webkitvisibilitychange"],
            ["msHidden", "msvisibilitychange"],
            ["oHidden", "ovisibilitychange"]
        ];
        for (a = 0; a < b.length; a++)
            if (b[a][0] in document) {
                this.c = b[a][0];
                this.f = b[a][1];
                break
            }
    }

    function va(a, b) {
        var c = [
                ["src", "//www.glancecdn.net/cobrowse/js/sockjs1.0.2.min.js"]
            ],
            d = a.a.createElement("script");
        b && d.addEventListener("load", b);
        d.setAttribute("type", "text/javascript");
        d.setAttribute("charset", "UTF-8");
        for (var e = 0; e < c.length; e++) d.setAttribute(c[e][0], c[e][1]);
        a.a.head.appendChild(d)
    }

    function Q(a) {
        return void 0 === a.c ? !1 : a.a[a.c]
    }

    function wa(a, b) {
        a.addEventListener(a.f, b)
    }
    P.prototype.head = function() {
        return void 0 !== this.a.head ? this.a.head : xa("getElementsByTagName", this.a, "head")[0]
    };
    P.prototype.scrollTo = function(a, b, c) {
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
        C.ie11 || C.edge ? window.scrollTo(d.x, d.y) :
            window.scrollTo(a)
    };
    P.prototype.addEventListener = function(a, b, c) {
        this.a.addEventListener(a, b, c)
    };
    P.prototype.removeEventListener = function(a, b, c) {
        this.a.removeEventListener(a, b, c)
    };

    function J(a) {
        window.console && window.console.error && window.console.error(a)
    }

    function M(a) {
        window.console && window.console.log && (window.GLANCE_COBROWSE ? !window.GLANCE_COBROWSE.disableLogging : 1) && window.console.log(a)
    }

    function R(a) {
        this.element = a
    }
    R.prototype.addEventListener = function(a, b, c) {
        this.element.addEventListener(a, b, c)
    };
    R.prototype.removeEventListener = function(a, b, c) {
        this.element.removeEventListener(a, b, c)
    };

    function xa(a, b, c) {
        for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
        return R.b && R.a && b.nodeType ? "#document" === b.nodeName ? R.a.document[a].apply(b, d) : "#document-fragment" === b.nodeName ? R.a.DocumentFragment.prototype[a].apply(b, d) : "[object Window]" === b.toString() ? R.a.window[a].apply(b, d) : R.a.document.body[a].apply(b, d) : b[a].apply(b, d)
    }

    function ya(a, b, c) {
        a.element.style.left = b + "px";
        a.element.style.top = c + "px"
    }
    R.prototype.moveTo = function(a, b) {
        function c() {
            m++ < d ? (g += r, f += G, ya(e, Math.floor(g), Math.floor(f)), e.a = window.setTimeout(c, 200 / d)) : ya(e, a, b)
        }
        var d = 10;
        void 0 !== this.a && window.clearTimeout(this.a);
        var e = this,
            g = parseInt(this.element.style.left),
            f = parseInt(this.element.style.top);
        isNaN(g) && (g = -999);
        isNaN(f) && (f = -999);
        var m = 0,
            d = 10,
            r = (a - g) / d,
            G = (b - f) / d;
        (r || G) && c()
    };

    function za(a, b) {
        var c;
        a && (c = c || Object.keys(a), c.forEach(function(c) {
            void 0 !== a[c] && (b[c] = a[c])
        }))
    }

    function Aa(a) {
        var b = {};
        if (!a) return b;
        var c = 0;
        for (a = a.attributes; c < a.length; c++) {
            var d = a[c].nodeName.match(/data-(.*)/);
            d && 2 === d.length && (b[d[1]] = a[c].nodeValue)
        }
        return b
    }

    function Ba() {
        var a = window.GLANCE_COBROWSE ? window.GLANCE_COBROWSE : {},
            b = document.getElementById("glance-cobrowse"),
            c = Aa(document.getElementById("cobrowsescript")),
            b = Aa(b);
        za(c, a);
        za(b, a);
        return a
    };

    function S() {}

    function Ca(a, b) {
        a.l = "undefined" === typeof WebSocket;
        a.a = {};
        a.a.ws = "www.glance.net";
        a.a.site = "production";
        a.g = new P(window);
        I(Ba(), a.a);
        I(b, a.a);
        delete a.a.presenceserver;
        a.j = [];
        a.f = T;
        a.m = new O("glance_presence");
        var c = sa(a.m);
        c && (a.c = c.directserver)
    }
    var T = 1;
    S.prototype.s = function() {};

    function U(a, b, c, d, e) {
        if (b && !a.c) y("ERR_NODIRECTSERVER");
        else {
            var g = (e || "https") + "://" + (b ? a.c : a.a.presenceserver) + "/" + c;
            d && (g += "?", ["groupid", "visitorid"].forEach(function(b) {
                g += b + "=" + a.a[b] + "&"
            }));
            return g
        }
    }
    S.prototype.u = function(a) {
        Da(this, "findvisitor", "GET", a)
    };

    function V(a) {
        y("connecting to " + a.c);
        var b = !1;
        a.l && !window.SockJS ? va(a.g, function() {
            b || (b = !0, window.SockJS ? V(a) : y("ERR_NOSOCKJS"))
        }) : (a.b && a.b.close(), a.b = Fa(a), a.b.O = a.c, a.b.onopen = function() {
            a.b.v({
                type: "connect",
                authorization: void 0,
                groupid: a.a.groupid,
                visitorid: a.a.visitorid,
                version: ia
            });
            a.j.forEach(function(b) {
                a.b.v(b)
            });
            a.j = [];
            a.f = 3
        }, a.b.F = function(b) {
            y("received:" + D(b));
            if (a.b) {
                var c = b.mtype || b.type,
                    e = b.data;
                switch (c) {
                    case "connected":
                        if (a.a.nokeepalive) break;
                        a.h || (a.h = window.setInterval(function() {
                                a.b.v({
                                    type: "k"
                                })
                            },
                            1E3 * b.keepalive));
                        break;
                    case "invoke":
                        "visitor" === a.R && oa(e);
                        break;
                    default:
                        if (a["on" + c]) a["on" + c](e)
                }
            }
        }, a.b.onclose = function(b) {
            a.b === this && (y("Connection closed, reconnecting", this.I(b), this.J(b)), Ga(a), window.setTimeout(function() {
                a.connect()
            }, 2E3))
        }, a.b.onerror = function(b) {
            a.b === this && (a.l = !0, a.b.onclose(b))
        })
    }

    function Da(a, b, c, d) {
        function e(a) {
            var b = a && (a.directserver || a.direct);
            b && (f.c = b, a.httpsport && (f.c += ":" + a.httpsport), f.s());
            f.b && f.c != f.b.O && V(f);
            if (d && d.onsuccess) d.onsuccess(a)
        }

        function g(a, c) {
            y(b, "failed");
            if (d.onfail) d.onfail(c);
            else Ha(f, {
                error: "connfail",
                detail: c
            })
        }
        var f = a,
            m = new K("JSON");
        m.c = void 0;
        m.method = c;
        y(b, JSON.stringify(d));
        (function(a) {
            if (f.a.presenceserver) return a();
            var b = new O("glance_visitor_settings_" + f.a.groupid + "_" + f.a.site),
                c = sa(b);
            if (c) return f.a.presenceserver = c.presenceserver,
                f.a.presenceserver || y("PRES_DISABLED (from cache)"), a();
            var c = new K("JSON"),
                d = "https://" + f.a.ws + "/services/authorizationservice/GetVisitorSettings3?groupid=" + f.a.groupid + "&site=" + f.a.site + "&service=presence";
            c.method = "GET";
            N(c, d, null, !0, !1, function(c) {
                f.a.presenceserver = c.presenceUrl;
                f.a.presenceserver || y("PRES_DISABLED");
                var d = {};
                d.presenceserver = f.a.presenceserver;
                d.presencesettings = c;
                ra(b, d);
                ua(b, 1440);
                return a()
            }, function(b, c) {
                y("PRES_UNAVAILABLE " + c);
                a()
            })
        })(function() {
            f.a.presenceserver && N(m,
                U(f, !1, b, !0), d.data ? d.data : {}, !0, !0, e, g)
        })
    }

    function Ia(a) {
        a.b && a.b.close();
        Ga(a)
    }

    function Ga(a) {
        a.h && (window.clearInterval(a.h), delete a.h);
        a.f = T;
        delete a.b;
        delete a.c
    }

    function Ja(a, b) {
        y("sending", b.type, a.f);
        3 === a.f ? a.b.v(b) : (a.j.push(b), a.connect())
    }
    S.prototype.connect = function() {
        if (!this.a.visitorid) y("CONN_NOVISITORID");
        else if (this.f === T) {
            this.f = 2;
            var a = this;
            this.onscaledown = function() {
                a.disconnect();
                a.connect()
            };
            this.c ? V(this) : this.u({
                onsuccess: function() {
                    y("found visitor, connect");
                    V(a)
                },
                onfail: function(b) {
                    Ha(a, {
                        error: "connfail",
                        detail: b
                    });
                    a.f = T
                }
            })
        }
    };
    S.prototype.connect = S.prototype.connect;
    S.prototype.disconnect = function() {
        Ia(this)
    };
    S.prototype.disconnect = S.prototype.disconnect;

    function Ha(a, b) {
        y("Error: ", JSON.stringify(b));
        if (a.onerror) a.onerror(b)
    }
    S.prototype.H = function(a, b) {
        Ja(this, {
            type: a,
            data: b
        })
    };
    S.prototype.fire = S.prototype.H;

    function W(a) {
        Ca(this, a);
        this.R = "visitor";
        this.g = new P(window);
        var b = this;
        xa("addEventListener", window, "focus", function() {
            b.i = !1;
            b.B && b.A()
        }, void 0);
        wa(this.g, function() {
            y("visibility:", Q(b.g) ? "hidden" : "visible");
            if (3 === b.f && !b.i) {
                var a = {
                    type: "visibility"
                };
                a.data = {
                    visibility: Q(b.g) ? "hidden" : "visible"
                };
                Ja(b, a);
                Q(b.g) && Ia(b)
            }
        });
        W.instance = this
    }
    var Ka = W,
        X = ["GLANCE", "Presence", "Visitor"],
        Y = this;
    X[0] in Y || !Y.execScript || Y.execScript("var " + X[0]);
    for (var Z; X.length && (Z = X.shift());) {
        var La;
        if (La = !X.length) La = void 0 !== Ka;
        La ? Y[Z] = Ka : Y[Z] ? Y = Y[Z] : Y = Y[Z] = {}
    }
    W.prototype = new S;
    W.prototype.s = function() {
        var a = {};
        a.directserver = this.c;
        ra(this.m, a);
        ua(this.m, 20)
    };
    W.prototype.A = function(a) {
        if (this.a.visitorid) {
            var b = {};
            I(this.a, b, ["groupid", "visitorid"]);
            var c = {},
                d;
            for (d in this.a) d.indexOf("user-") || (c[d.substring(5)] = this.a[d]);
            c.url = window.location.href;
            c.browser = C.name;
            c.browserver = C.version;
            c.platform = C.w.name;
            (a = a && a.data) && I(a, c);
            b.data = c;
            this.i || (c = {
                type: "presence"
            }, c.data = b.data, Ja(this, c), this.B = !0)
        } else y("PRES_NOVISITORID")
    };
    W.prototype.presence = W.prototype.A;

    function Fa(a) {
        a.l ? a = na(U(a, !0, "visitor")) : (a = U(a, !0, "visitorws", !1, "wss"), a = new WebSocket(a), ma(a));
        return a
    }
    W.prototype.u = function(a) {
        a.data = {};
        Da(this, "presence", "POST", a)
    };
    W.prototype.onblur = function() {
        y("BLURRED");
        this.i = !0;
        Ia(this)
    };
    var Ma = !1;

    function Na() {
        if (!Ma) {
            Ma = !0;
            var a = Ba();
            if (a.presence && "api" !== a.presence) {
                var b = new W;
                b.onerror = function(a) {
                    "connfail" === a.error && window.setTimeout(function() {
                        b.connect()
                    }, 5E3)
                };
                b.A()
            }
        }
    }
    var Oa = new P(window);
    Oa.b.addEventListener && (document.readyState.match(/complete/) ? Na() : (Oa.b.addEventListener("load", Na), Oa.a.addEventListener("DOMContentLoaded", Na, !1)));
}).call(window);