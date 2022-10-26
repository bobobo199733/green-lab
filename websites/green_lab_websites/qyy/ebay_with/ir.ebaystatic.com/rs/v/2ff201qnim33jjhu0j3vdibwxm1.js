! function(j, l) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = l() : "function" == typeof define && define.amd ? define("HttpClient", l()) : (j = j || self).HttpClient = l()
}(this, function() {
    var j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
        return typeof a
    } : function(a) {
        return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
    };
    "function" == typeof Symbol && Symbol.for && Symbol.for("react.element");
    var l = function(a, d) {
            if (!(a instanceof d)) throw new TypeError("Cannot call a class as a function");
        },
        i, o = function(a, d) {
            for (var b = 0; b < d.length; b++) {
                var e = d[b];
                e.enumerable = e.enumerable || !1;
                e.configurable = !0;
                "value" in e && (e.writable = !0);
                Object.defineProperty(a, e.key, e)
            }
        };
    i = function(a, d, b) {
        return d && o(a.prototype, d), b && o(a, b), a
    };
    var n = (Object.assign, function d(b, a, p) {
        null === b && (b = Function.prototype);
        var f = Object.getOwnPropertyDescriptor(b, a);
        if (void 0 === f) return b = Object.getPrototypeOf(b), null === b ? void 0 : d(b, a, p);
        if ("value" in f) return f.value;
        a = f.get;
        return void 0 !== a ? a.call(p) : void 0
    });
    "undefined" == typeof global ? self : global;
    var g, h = function(a) {
        l(this, h);
        this.VERSION = "2";
        this.win = a || window;
        this.initialize()
    };
    g = (i(h, [{
        key: "initialize",
        value: function() {
            var a;
            this.HOST_NAME = this.win.location.hostname;
            this.IS_DEV_MACHINE_HOST = 5 < this.win.location.origin.lastIndexOf(":") && -1 === this.HOST_NAME.indexOf("lvs") && -1 === this.HOST_NAME.indexOf("slc") && -1 === this.HOST_NAME.indexOf("phx");
            this.ENV = (a = j(this.win.GH) !== h.TYPE_UNDEFINED && j(this.win.GH.C) !==
                h.TYPE_UNDEFINED && this.win.GH.C.env || h.ENV_ENUM.PRODUCTION, this.IS_DEV_MACHINE_HOST && (a = h.ENV_ENUM.DEV), a);
            var b = {};
            a = this.win.location.search.split("?");
            2 === a.length && a[1].split("&").forEach(function(a) {
                (a = a.split("=")) && 2 === a.length && a[0] && a[1] && (b[a[0]] = a[1])
            });
            this.URL_QUERY_MAP = b
        }
    }, {
        key: "sanitizeRequestUrlByEnv",
        value: function(a) {
            if (a) {
                var b = this.win.GH && this.win.GH.C && this.win.GH.C.xhrBaseUrl;
                return this.ENV === h.ENV_ENUM.DEV && (b = h.QA), this.URL_QUERY_MAP._ghpool && this.ENV !== h.ENV_ENUM.PRODUCTION &&
                    (b = decodeURIComponent(this.URL_QUERY_MAP._ghpool)), b + a
            }
        }
    }, {
        key: "addQueryParam",
        value: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                e = Object.assign({}, this.URL_QUERY_MAP),
                e = Object.assign(e, b),
                e = Object.assign(e, {
                    v: this.VERSION
                }),
                b = Object.keys(e);
            return b.length && (a = b.reduce(function(a, b) {
                var d = e[b];
                if (d) var h = -1 < a.indexOf("?") ? "&" : "?",
                    a = a + h + b + "=" + encodeURIComponent(d);
                return a
            }, a)), a.replace(/[^=&]+=(&|$)/g, "").replace(/&$/, "").replace(/\?$/, "")
        }
    }], [{
            key: "QA",
            get: function() {
                return "https://www.qa.ebay.com"
            }
        },
        {
            key: "TYPE_UNDEFINED",
            get: function() {
                return "undefined"
            }
        }, {
            key: "ENV_ENUM",
            get: function() {
                return {
                    PRODUCTION: "production",
                    DEV: "dev"
                }
            }
        }
    ]), h);
    var a = function() {
            var d = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "/gh/useracquistion",
                b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "GET",
                e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                h = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
                f = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {
                    timeout: 5E3,
                    shouldRetry: !1,
                    async: !0,
                    maxRetries: 1,
                    hasFullXhrUrl: !1
                },
                m = f.timeout,
                m = void 0 === m ? 5E3 : m,
                g = f.shouldRetry,
                g = void 0 !== g && g,
                i = f.async,
                i = void 0 === i || i,
                j = f.maxRetries,
                j = void 0 === j ? 1 : j,
                f = f.hasFullXhrUrl,
                f = void 0 !== f && f,
                k = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : "undefined" != typeof window ? window : {};
            l(this, a);
            var c;
            c = (a.__proto__ || Object.getPrototypeOf(a)).call(this, k);
            if (!this) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            c = !c || "object" != typeof c && "function" != typeof c ?
                this : c;
            return c.route = d, b = b.toUpperCase(), c.method = -1 !== a.ALLOWED_METHODS.indexOf(b) ? b : "GET", c.queryParamObj = e, c.payload = h, c.shouldRetry = g, c.maxRetries = j, c.timeout = m, c.async = !0, c.hasFullXhrUrl = f, c.ctx = k, "boolean" == typeof i && !1 === i && (c.async = !1), c.hasFullXhrUrl ? (c.baseUrl = "", c.requestUrl = n(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "addQueryParam", c).call(c, c.route, c.queryParamObj)) : (c.baseUrl = n(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "sanitizeRequestUrlByEnv", c).call(c,
                c.route), c.requestUrl = n(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "addQueryParam", c).call(c, c.baseUrl, c.queryParamObj)), c.retries = 0, c
        },
        k = a;
    if ("function" != typeof g && null !== g) throw new TypeError("Super expression must either be null or a function, not " + typeof g);
    k.prototype = Object.create(g && g.prototype, {
        constructor: {
            value: k,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    });
    g && (Object.setPrototypeOf ? Object.setPrototypeOf(k, g) : k.__proto__ = g);
    i = (i(a, [{
        key: "handlers",
        value: function() {
            return this.handlers =
                0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, this
        }
    }, {
        key: "delay",
        value: function(a, b) {
            setTimeout(a.bind(this), b)
        }
    }, {
        key: "maybeRetry",
        value: function() {
            var a = this;
            this.shouldRetry && !(this.retries >= this.maxRetries) && (this.retries++, this.delay(function() {
                a.initializeAndTrigger()
            }, this.retryTimeout))
        }
    }, {
        key: "initializeAndTrigger",
        value: function() {
            var d, b = this;
            try {
                this.xhr = new XMLHttpRequest;
                var e = this.ctx.location && this.ctx.location.hostname;
                (this.hasFullXhrUrl && a.ROUTE_REGEX_CHECK.test(this.route) ||
                    !this.hasFullXhrUrl && a.DOMAIN_REGEX_CHECK.test(e)) && (this.xhr.withCredentials = !0);
                this.xhr.open(this.method, this.requestUrl, this.async);
                this.async && (this.xhr.timeout = this.timeout);
                this.xhr.setRequestHeader("Content-Type", "text/plain");
                var g = this.shouldRetry ? (d = this, function(a) {
                    a instanceof ProgressEvent && d.maybeRetry(d)
                }) : a.NOOP;
                a.DEFAULT_XHR_EVENTS.forEach(function(d) {
                    var e = -1 !== a.DEFAULT_RETRY_EVENTS.indexOf(d);
                    b.xhr[d] = b.handlers[d] || (e ? g : a.NOOP)
                });
                this.xhr.send(this.payload)
            } catch (f) {
                console.debug("Global HTTPClient requests failing",
                    f)
            }
        }
    }, {
        key: "retryTimeout",
        get: function() {
            return Math.min(a.MAX_TIMEOUT, 100 * (2 ^ this.retries))
        }
    }], [{
            key: "ALLOWED_METHODS",
            get: function() {
                return ["GET", "POST", "HEAD"]
            }
        }, {
            key: "NOOP",
            get: function() {
                return function() {}
            }
        }, {
            key: "DOMAIN_REGEX_CHECK",
            get: function() {
                return /(www\.)?(.*)\.ebay\.(com|com.au|at|be|ca|cn|fr|de|com.hk|in|ie|it|co.jp|com.my|nl|ph|pl|com.sg|es|se|ch|com.tw|co.th|co.uk|vn)$/i
            }
        }, {
            key: "ROUTE_REGEX_CHECK",
            get: function() {
                return /(www\.)?(.*)\.ebay\.(com|com.au|at|be|ca|cn|fr|de|com.hk|in|ie|it|co.jp|com.my|nl|ph|pl|com.sg|es|se|ch|com.tw|co.th|co.uk|vn)/i
            }
        },
        {
            key: "DEFAULT_XHR_EVENTS",
            get: function() {
                return "onload onloadstart onloadend onprogress onreadystatechange onerror onabort ontimeout".split(" ")
            }
        }, {
            key: "DEFAULT_RETRY_EVENTS",
            get: function() {
                return ["onerror", "onabort", "ontimeout"]
            }
        }
    ]), a);
    "undefined" != typeof window && ("function" == typeof window.define && window.define.amd) && (window.HttpClient = i);
    return i
});
GHebayContent = ebayContent = window.ebayContent || {};
ebayContent["GlobalHeaderWeb/GHJavascriptContent"] = {
    msg_loading: "Please wait",
    signinURL: '<a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn"></a>',
    errL10n: "Sorry, this feature is currently not supported on this page",
    roverurl: '<a href="http://rover.ebay.com"></a>',
    switchToMobile: "Switch to mobile site",
    close: "Close",
    dismiss: "Dismiss"
};
GHJSLoaded = 1;
(function(c) {
    if ("undefined" !== typeof c && ("undefined" === typeof GH || !GH)) {
        var d = "https:" == document.location.protocol ? !0 : !1;
        GH = {
            componentID: "#gh",
            CompConstructors: {},
            jQ: c,
            userRecog: !1,
            userAuth: !1,
            cacheAC: {},
            alerts: {},
            acPrevCatID: 0,
            build: "114rcb",
            isSelectOptionsBoxShown: !1,
            vCJar: null,
            L10N: ebayContent["GlobalHeaderWeb/GHJavascriptContent"],
            sec: d,
            isDefined: function(a) {
                return "undefined" !== typeof window[a]
            },
            userFN: "",
            userID: "",
            ghEBActive_id: "gh-eb-active",
            ghEBAlerts_id: "#gh-eb-Alerts",
            ghAC_id: "#gh-ac",
            currentTime: ~~((new Date).getTime() /
                6E4),
            userAgent: navigator.userAgent,
            GHlocalStorage: "undefined" !== typeof localStorage && null !== localStorage ? localStorage : 0,
            oldRaptor: "undefined" !== typeof ejo && "undefined" !== typeof ejo.dom,
            pi: "http" + (d ? "s://securepics" : "://p") + ".ebaystatic.com/aw/pics/",
            oldDT: "BackCompat" == document.compatMode,
            isIE: /msie/.test(navigator.userAgent.toLowerCase()),
            isIE8: window.attachEvent && !window.addEventListener,
            docMode: document.documentMode || 0,
            undefinedStr: "undefined",
            functionStr: "function",
            fnetEnabled: !0,
            disablePDS: !0,
            isMweb: !1,
            Events: {
                eventsList: {},
                publish: function(a, b) {
                    this.eventsList[a] && !(1 > this.eventsList[a].length) && this.eventsList[a].forEach(function(a) {
                        a(b || {})
                    })
                },
                subscribe: function(a, b) {
                    this.eventsList[a] || (this.eventsList[a] = []);
                    this.eventsList[a].push(b)
                }
            },
            init: function() {
                var a, b;
                c.extend(ebayContent, GHebayContent);
                GH.C = GH.isDefined("GH_config") ? GH_config : {};
                GH.GHSW = GH.GHSW || {};
                "GadgetPlatform" in window && (window.GH && window.GH.C && "function" === typeof window.GadgetPlatform.init) && window.GadgetPlatform.init();
                GH.isIE8 || (delete GH_config, delete GHjQ, delete GHJSLoaded, delete GHebayContent);
                for (b in GH.CompConstructors) try {
                    a = GH[b] = new GH.CompConstructors[b], "function" === typeof a.execute_immediately && a.execute_immediately()
                } catch (d) {
                    "undefined" !== typeof console && console.log("GH " + b + " const: " + d)
                }
                c(window).on("load.gh", function() {
                    "function" == typeof window.requestAnimationFrame ? window.requestAnimationFrame(GH.windowLoad) : GH.windowLoad()
                });
                setTimeout(GH.windowLoad, 2E4);
                var e = function(a) {
                        if (document.addEventListener ||
                            "load" === a.type || "complete" === document.readyState) document.addEventListener ? document.removeEventListener("DOMContentLoaded", e, !1) : document.detachEvent("onreadystatechange", e), f()
                    },
                    f = function() {
                        for (b in GH.CompConstructors)
                            if (GH[b]) {
                                var a = null;
                                "object" === typeof GH.CompConstructors[b + "__INIT_DATA"] && (a = GH.CompConstructors[b + "__INIT_DATA"]);
                                if ("function" === typeof GH[b].init) try {
                                    GH[b].init(a)
                                } catch (c) {
                                    "undefined" !== typeof console && console.log("GH " + b + " init: " + c)
                                }
                            }
                        if ("complete" === document.readyState ||
                            "interactive" === document.readyState) GH.windowLoad(), GH.Util.cTImg(GH.ghiIMP + 98)
                    };
                "complete" === document.readyState || "interactive" === document.readyState ? setTimeout(f) : document.addEventListener ? document.addEventListener("DOMContentLoaded", e, !1) : document.attachEvent("onreadystatechange", e)
            },
            windowLoad: function() {
                var a;
                if (!GH.windowLoaded)
                    for (objName in GH.windowLoaded = !0, GH.CompConstructors) try {
                        a = GH[objName], "function" === typeof a.execute_at_windowload && a.execute_at_windowload()
                    } catch (b) {
                        "undefined" !==
                        typeof console && console.log("GH " + objName + " ex on load: " + b)
                    }
            },
            add: function(a, b) {
                GH.CompConstructors[a] = b;
                GHebayContent = ebayContent
            }
        }
    }
})("undefined" !== typeof GHjQ ? GHjQ : jQuery);
(function(c) {
    GH.add("Util", function() {
        var l, n, q = GH.L10N,
            s = GH.GHSW,
            r = GH.isDefined,
            t = GH.sec,
            p = {},
            o;
        c.browser || (o = navigator.userAgent.toLowerCase(), o = /(chrome)[ \/]([\w.]+)/.exec(o) || /(webkit)[ \/]([\w.]+)/.exec(o) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(o) || /(msie) ([\w.]+)/.exec(o) || 0 > o.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(o) || [], p[o[1] || ""] = !0, p.version = o[2] || "0", p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), c.browser = p);
        return {
            sec: t,
            geo: !1,
            getPageID: function() {
                return GH.C.pageId
            },
            getSiteID: function() {
                return GH.C.siteId
            },
            getPrevCategoryID: function() {
                return GH.acPrevCatID
            },
            isGeo: function() {
                return "object" === typeof GH.Geo
            },
            isQAPool: function() {
                return void 0 !== GH.C.qapool
            },
            factorEnabled: function(a) {
                return GH.GHSW[a]
            },
            getHTTPSURL: function(a) {
                GH.Util.factorEnabled("ENABLE_HTTPS") && (a = a.replace(/^http:/, "https:"));
                return a
            },
            init: function() {
                c(window).on("load.gh", function() {
                    l.execute_on_windowload()
                });
                if (2046732 == n || 2045573 == n || 2334524 == n) {
                    var a = c(GH.SearchBox.formID + " input[name=LH_TitleDesc]"),
                        b = window.location.href,
                        d = c("#gh-as-a"),
                        e, h, f;
                    a.length || 0 <= b.indexOf("LH_TitleDesc=1") && c(GH.SearchBox.formID).append('<input type="hidden" name="LH_TitleDesc" value="1"/>');
                    0 < d.length && (e = d.attr("href"), c(GH.SearchBox.formID + ' input[type="hidden"],' + GH.SearchBox.formID + ' input[type="text"],' + GH.SearchBox.formID + " input:checked,select" + GH.CategorySelect.controlID).each(function() {
                        h = c(this);
                        "_trksid" != h.attr("name") && (f = h.attr("name") + "=" + encodeURIComponent(h.val()), e = 0 > e.indexOf("?") ? e + ("?" + f) : e + ("&" +
                            f))
                    }), d.attr("href", e))
                }
                s.raptor || l.initLegacyVJO();
                GH.isIE && (GH.oldDT && 6 > GH.docMode) && c(GH.componentID).addClass("gh-oldDT");
                c("#gh-shop, #gh-eb-u, .gh-eb-li,.gh-dd").bind("focusout", function() {
                    setTimeout("if(!GH.jQ(document.activeElement).parents('#" + this.id + "').length) GH.Util.hideOverlays(1); ", 500)
                });
                c(".gh-survey").click(l.surveyClicked);
                document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") || (c("#glbfooter").addClass("gf-nosvg"), c("#gh").addClass("gh-nosvg"))
            },
            getBundle: function(a) {
                return ebayContent["GlobalHeaderWeb/" + a] || 0
            },
            mergeContent: function(a, b) {
                for (var d, e = [], c = 0, f = /\$\{([A-Za-z0-9_\.]+)\}/g, a = a || ""; d = f.exec(a);) e.push(a.substring(c, d.index)), d = b[d[1]], e.push(void 0 !== d ? d : ""), c = f.lastIndex;
                e.push(a.substring(c));
                return e.join("")
            },
            browser: c.browser,
            whichBrowser: function() {
                var a = navigator.userAgent,
                    b, d = a.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if (/trident/i.test(d[1])) return "IE";
                if ("Chrome" === d[1] && (b = a.match(/\b(OPR|Edge)\/(\d+)/),
                        null != b)) return b.slice(1, 2).replace("OPR", "Opera");
                d = d[2] ? [d[1], d[2]] : [navigator.appName, navigator.appVersion, "-?"];
                null != (b = a.match(/version\/(\d+)/i)) && d.splice(1, 1, b[1]);
                return d[0]
            },
            surveyClicked: function(a) {
                var b = document,
                    d = b.getElementById("gh-svyForm"),
                    a = c(a.currentTarget);
                d || (c("body").append('<form id=gh-svyForm action="#" method=post target=eBaySurvey class="gh-none g-hdn"><input name=domContent value=""></form>'), d = b.getElementById("gh-svyForm"));
                if (d && a) return window.open("", "eBaySurvey",
                    "location=0,menubar=0,status=0,resizable=1,scrollbars=1,top=" + Math.round((screen.height - 800) / 2) + ",left=" + Math.round((screen.width - 800) / 2) + ",width=800,height=800"), a.attr("target", "eBaySurvey"), c(d).attr("action", a.attr("href")), b.location && "https:" != b.location.protocol ? (d.elements[0].value = encodeURIComponent("<html>" + b.getElementsByTagName("html")[0].innerHTML + "</html>"), d.submit(), !1) : !0
            },
            execute_on_windowload: function() {
                "static" === c(".gh-acc-exp-div").css("position") && l.cTImg(GH.ghiIMP + "92%26gh1g%3D" +
                    encodeURIComponent(document.location.href) + "%26gh2g%3D " + encodeURIComponent(navigator.userAgent))
            },
            execute_immediately: function() {
                l = this;
                l.initPluggins();
                l.initCookie();
                n = r("_GlobalNavHeaderSrcPageId") ? GH.C.pageId = _GlobalNavHeaderSrcPageId : _GlobalNavHeaderSrcPageId = GH.C.pageId;
                ~~n || (GH.C.pageId = n = l.computePageId(), typeof n != GH.undefinedStr && (_GlobalNavHeaderSrcPageId = n));
                GH.ghiIMP = "/roverimp/0/0/9?imp=2046301&trknvp=cp%3D" + n + "%26ghi%3D"
            },
            eZ: function(a) {
                return !a ? a : a.replace(/&/g, "&amp;").replace(/</g,
                    "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;")
            },
            ajxC: function(a, b, d, e) {
                1 == c(a + " .gh-o-l").length && (c(a).html("<div class=gh-o-err><span class=gh-o-errb>" + (e || q.errL10n) + "</span></div>"), b = d);
                b && (c(a).data("ghi", b), l.cTImg(GH.ghiIMP + b))
            },
            addSignin: function(a) {
                return a.replace(/\#URL\#/, l.getHref(q.signinURL) + "&ru=" + l.addRU())
            },
            showOverlay: function(a) {
                a = c(a);
                GH.Util.hideOverlays();
                a.gshow();
                a.data("ghi") && l.cTImg(GH.ghiIMP + a.data("ghi"))
            },
            getTarget: function(a) {
                return a.attr("aria-controls") ||
                    a.attr("data-controlTarget")
            },
            openOverlay: function(a) {
                GH.Util.hideOverlays();
                a.attr("aria-expanded", "true");
                var b = l.getTarget(a),
                    d = document.querySelector("#gh-ul-nav");
                c("#" + b).show();
                d.removeAttribute("role");
                a.data("ghi") && l.cTImg(GH.ghiIMP + a.data("ghi"))
            },
            closeOverlay: function(a) {
                a.each(function() {
                    var a = c(this);
                    a.attr("aria-expanded", "false");
                    a = l.getTarget(a);
                    "gh-eb-My-o" === a && document.querySelector("#gh-ul-nav").setAttribute("role", "navigation");
                    c("#" + a).hide()
                })
            },
            toggleOverlay: function(a) {
                var b =
                    l.getTarget(a),
                    b = c("#" + b);
                GH.Util[b.is(":hidden") ? "openOverlay" : "closeOverlay"](a)
            },
            hideOverlays: function(a) {
                GH.Greeting && GH.Greeting.hideUserOverlay();
                GH.Util.closeOverlay(c("#gh-ug, #gf-fbtn, .gh-dd .gh-control," + (GH.ShopByCat || {}).controlID));
                GH.alerts && "function" == typeof GH.alerts.closeOverlay && GH.alerts.closeOverlay(c("#gh-eb-Alerts"), !1);
                c("#gh-shop, .gh-eb-active").removeClass("gh-shop-active gh-eb-active");
                GH.isSelectOptionsBoxShown && !a && c(GH.CategorySelect.controlID).blur();
                if (28 > (GH.userAgent.match(/Chrome\/([0-9]+)/) || [0, 28])[1] && !/Macintosh/.test(GH.userAgent)) c(GH.CategorySelect.controlID).ghide(), setTimeout(function() {
                    c(GH.CategorySelect.controlID).gshow()
                }, 10);
                GH.Geo && GH.Geo.hideMsgOverlay()
            },
            createEBO: function(a, b) {
                var d = "#gh-eb-" + a,
                    e = c(d + " .gh-eb-li-a").outerWidth() - 8;
                GH.Util.hideOverlays();
                c(d).append("<div id=gh-eb-" + a + "-o class='gh-eb-o'" + (b ? " aria-busy=true aria-live=polite" : "") + " style='" + (180 < e ? "min-width:" + e + "px" : "") + "' aria-hidden=false><div class=gh-o-l>" + q.msg_loading + "</div></div>")
            },
            createOverlay: function(a,
                b, d) {
                var e = "#gh-eb-" + a,
                    h = c(e + " .gh-eb-li-a").outerWidth() - 8;
                GH.Util.hideOverlays();
                c(e).append("<div id=gh-eb-" + a + "-o class='gh-eb-o'" + (b ? " aria-busy=true aria-live=polite" : "") + " style='" + (180 < h ? "min-width:" + h + "px" : "") + "'><div class=gh-o-l " + (d ? "tabindex=0" : "") + " >" + GH.L10N.msg_loading + "</div></div>");
                d && c("#gh-eb-" + a + "-o .gh-o-l").focus()
            },
            getHref: function(a) {
                return c(a).attr("href")
            },
            redirect: function(a) {
                document.location = a
            },
            getSecURL: function(a, b, d) {
                var c = "^";
                d && (c = "");
                d = RegExp(c + "http:");
                GH.sec &&
                    (a = a.replace(d, "https:"), b && (b = RegExp(c + "https://ir."), c = RegExp(c + "https://pics."), a = a.replace(b, "https://secureir."), a = a.replace(c, "https://securepics.")));
                return a
            },
            addPrefixPoolURL: function(a) {
                var b = GH.GHSW.pool ? GH.GHSW.pool : null,
                    d = c.isArray(a),
                    e = "string" === typeof a,
                    h = [0, 31, 215, 248, 223],
                    f = GH.siteSpecific.maprules.regex,
                    h = GH.siteSpecific.maprules["function" == typeof h.indexOf && -1 >= h.indexOf(parseInt(GH.C.siteId)) && b && "qa" == b ? "paradise" : b];
                if ("undefined" !== typeof JSON && b && f && h) {
                    if (d || e) a = {
                        d: a
                    };
                    a =
                        JSON.parse(JSON.stringify(a).replace(f, h));
                    if (d || e) a = a.d
                }
                return a
            },
            cTId: function(a) {
                return (n ? "p" + n + "." : "") + "m570" + (a ? ".l" + a : "")
            },
            cTImg: function(a) {
                c("body").append('<img src="' + GH.Util.getRoverUrl() + a + (0 < a.indexOf("?") ? "&" : "?") + (new Date).getTime() + '" width=1 height=1 border=0 alt="">')
            },
            externalLinkTracking: function(a) {
                var b = c(a.target).attr("href");
                c.getScript(GH.Util.getRoverUrl() + "/roverclk/0/0/9?trknvp=sid%3Dp" + n + "." + c(a.target).attr("_exsp"), function() {
                    document.location = b
                });
                a.preventDefault();
                GH.Util.clrTimer(GH.clickTimer);
                GH.clickTimer = setTimeout("document.location = '" + b + "'", 500)
            },
            getRoverUrl: function() {
                return (GH.Util.getSecURL(GH.Util.getHref(q.roverurl)) || "").replace(/\/+$/, "")
            },
            isTouchDevice: function() {
                return "ontouchstart" in document.documentElement
            },
            clrTimer: function(a) {
                clearTimeout(a)
            },
            getCurrentTime: function() {
                return ~~((new Date).getTime() / 1E3)
            },
            addRU: function() {
                var a = document.location.href;
                return 0 < a.indexOf("SignOutConfirm") || 0 < a.indexOf("logout/confirm") ? "" : encodeURIComponent(a)
            },
            base64decode: function(a) {
                var b = "",
                    d, c, h, f, j, k = 0,
                    m = a.length;
                if (/[^A-Za-z0-9\+\/\=\*]/g.exec(a)) return "";
                for (; k < m;) d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(a.charAt(k++)), c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(a.charAt(k++)), f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(a.charAt(k++)), j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(a.charAt(k++)), d = d << 2 | c >> 4,
                    c = (c & 15) << 4 | f >> 2, h = (f & 3) << 6 | j, b += String.fromCharCode(d), 64 <= f || (b += String.fromCharCode(c)), 64 <= j || (b += String.fromCharCode(h));
                return b
            },
            computePageId: function() {
                var a = 0;
                try {
                    var b = c('*[_sp^="p"]').filter(":first");
                    if (b) {
                        var d = b.attr("_sp");
                        if (void 0 !== d) {
                            var e = d.match(/p[\d]+/);
                            e && 0 < e.length && (a = e[0].substring(1))
                        }
                    }
                } catch (h) {}
                return a
            },
            tabHidden: function(a) {
                var b = {},
                    d = function() {
                        var a = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var b = 0; b < a.length; b++)
                            if (a[b] + "Hidden" in document) return a[b] +
                                "Hidden";
                        return null
                    },
                    e = function() {
                        var a;
                        a = (a = d()) ? document[a] : !1;
                        a ? b.hidden() : b.visible()
                    },
                    h = d(),
                    b = c.extend(b, a);
                h && (a = h.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(a, e))
            },
            loadScript: function(a, b) {
                var b = "undefined" !== typeof b ? b : !0,
                    d, c, h, f = document.createElement("iframe");
                d = (new Date).getTime();
                b && (a = a + "&_=" + d);
                (f.frameElement || f).style.cssText = "width: 0; height: 0; border: 0";
                d = document.getElementsByTagName("script");
                d = d[d.length - 1];
                d.parentNode.insertBefore(f, d);
                f.setAttribute("tabindex",
                    "-1");
                f.setAttribute("aria-hidden", "true");
                try {
                    c = f.contentWindow.document
                } catch (j) {
                    h = document.domain, f.src = "javascript:var d=document.open();d.domain='" + h + "';void(0);", c = f.contentWindow.document
                }
                c.open()._l = function() {
                    var k = this.createElement("script");
                    h && (this.domain = h);
                    k.id = "js-iframe-async";
                    k.src = a;
                    this.body.appendChild(k)
                };
                c.write('<body onload="document._l();">');
                c.close()
            },
            initCookie: function() {
                var a = GH,
                    b = {
                        COOKIELET_DELIMITER: "^",
                        NAME_VALUE_DELIMITER: "/",
                        escapedValue: !0
                    },
                    c = {
                        COOKIELET_DELIMITER: "^",
                        NAME_VALUE_DELIMITER: "/",
                        bUseExp: !0,
                        startDelim: "b"
                    },
                    e = {
                        COOKIELET_DELIMITER: "^",
                        NAME_VALUE_DELIMITER: "=",
                        escapedValue: !0,
                        startDelim: "^"
                    },
                    h = {
                        reg: ["dp1", "reg"],
                        recent_vi: ["ebay", "lvmn"],
                        ebaysignin: ["ebay", "sin"],
                        p: ["dp1", "p"],
                        etfc: ["dp1", "etfc"],
                        keepmesignin: ["dp1", "kms"],
                        ItemList: ["ebay", "wl"],
                        BackToList: ["s", "BIBO_BACK_TO_LIST"]
                    },
                    f = {
                        r: b,
                        dp1: c,
                        npii: c,
                        ebay: e,
                        reg: e,
                        apcCookies: e,
                        ds2: {
                            COOKIELET_DELIMITER: "^",
                            NAME_VALUE_DELIMITER: "/"
                        }
                    },
                    j = -1 < document.domain.indexOf(".ebay.") ? document.domain.substring(document.domain.indexOf(".ebay.")) :
                    ".ebay.com";
                a.vCJar = {
                    readCookie: function(a, m) {
                        var b = this.readCookieObj(a, m).value;
                        return b ? decodeURIComponent(b) : ""
                    },
                    createDefaultCookieBean: function(a, m) {
                        var b = {};
                        b.name = a;
                        b.cookieletname = m;
                        b.value = "";
                        b.maxage = 0;
                        b.rawcookievalue = "";
                        b.mode = "";
                        return b
                    },
                    readCookieObj: function(a, m) {
                        var b = this.createDefaultCookieBean(a, m);
                        this.update();
                        this.checkConversionMap(b);
                        b.rawcookievalue = this.aCookies[b.name];
                        !b.name || !b.rawcookievalue ? b.value = "" : b.cookieletname ? this.readCookieletInternal(b) : this.readCookieInternal(b);
                        var g = m && m.match(/guid$/),
                            c = "undefined" != typeof b ? b : "";
                        c && (g && 32 < b.value.length) && (b.value = b.value.substring(0, 32));
                        return c
                    },
                    checkConversionMap: function(a) {
                        var b = h[a.name];
                        b && (a.mode = this.getMode(a.name), a.name = b[0], a.cookieletname = b[1])
                    },
                    readCookieInternal: function(a) {
                        a.value = a.rawcookievalue;
                        return a
                    },
                    readCookieletInternal: function(a) {
                        var b = this.getCookielet(a.name, a.cookieletname, a.rawcookievalue),
                            c = this.getFormat(a.name);
                        b && c.bUseExp && (c = b, b = b.substring(0, b.length - 8), 8 < c.length && (a.maxage = c.substring(c.length -
                            8)));
                        a.value = b;
                        "10" == a.mode && (a.value = a.rawcookievalue);
                        return a
                    },
                    readMultiLineCookie: function(a, b) {
                        if (!a || !b) return "";
                        var c, g = "",
                            d = h[a];
                        d && (c = this.readCookieObj(d[0], d[1]).value || "");
                        c && (g = this.getCookielet(a, b, c) || "");
                        return "undefined" != typeof g ? g : ""
                    },
                    writeCookie: function(a, b, c) {
                        var g = h[a];
                        g ? this.writeCookielet(g[0], g[1], b, c) : (g = this.getFormat(a), b && g.escapedValue && (b = encodeURIComponent(b)), this.writeRawCookie(a, b, c))
                    },
                    writeRawCookie: function(a, b, c) {
                        if (a && void 0 !== b && (isNaN(b) && 4E3 > b.length || 4E3 >
                                (b + "").length)) {
                            "number" == typeof c && (c = this.getExpDate(c));
                            var g = c ? new Date(c) : new Date(this.getExpDate(730)),
                                d = this.getFormat(a);
                            document.cookie && (document.cookie = a + "=" + (b || "") + (c || d.bUseExp ? "; expires=" + g.toGMTString() : "") + "; domain=" + j + "; path=/")
                        }
                    },
                    writeCookieEx: function(a, b, c) {
                        this.writeCookie(a, b, this.getExpDate(c))
                    },
                    writeCookielet: function(a, b, c, g, d) {
                        a && b && (this.update(), this.getFormat(a).bUseExp && c && ("number" == typeof g && (g = this.getExpDate(g)), g = g ? new Date(g) : new Date(this.getExpDate(730)),
                            g = Date.UTC(g.getUTCFullYear(), g.getUTCMonth(), g.getUTCDate(), g.getUTCHours(), g.getUTCMinutes(), g.getUTCSeconds()), g = Math.floor(g / 1E3), c += parseInt(g, 10).toString(16)), b = this.createCookieValue(a, b, c), this.writeRawCookie(a, b, d))
                    },
                    writeMultiLineCookie: function(a, b, c, g, d) {
                        this.update();
                        if (b = this.createCookieValue(a, b, c))(a = h[a]) && this.writeCookielet(a[0], a[1], b, g, d)
                    },
                    getBitFlagOldVersion: function(a, b) {
                        var c = parseInt(a, 10),
                            g = c.toString(2);
                        return "1" == (c ? g.charAt(g.length - b - 1) : "") ? 1 : 0
                    },
                    setBitFlagOldVersion: function(a,
                        b, c) {
                        var g = "",
                            d;
                        (a = parseInt(a + "", 10)) && (g = a.toString(2));
                        a = g.length;
                        if (a < b) {
                            d = b - a;
                            for (a = 0; a <= d; a++) g = "0" + g
                        }
                        b = g.length - b - 1;
                        return parseInt(g.substring(0, b) + c + g.substring(b + 1), 2)
                    },
                    getBitFlag: function(a, b) {
                        if (null != a && 0 < a.length && "#" == a.charAt(0)) {
                            var c = b % 4,
                                g = a.length - (Math.floor(b / 4) + 1),
                                g = parseInt(a.substring(g, g + 1), 16),
                                c = 1 << c;
                            return (g & c) == c ? 1 : 0
                        }
                        return this.getBitFlagOldVersion(a, b)
                    },
                    setBitFlag: function(a, b, c) {
                        if (null != a && 0 < a.length && "#" == a.charAt(0)) {
                            var g = a.length,
                                d = b % 4,
                                b = Math.floor(b / 4) + 1;
                            if (g <=
                                b) {
                                if (1 != c) return a;
                                for (var e = b - g + 1, a = a.substring(1, g); 0 < e;) a = "0" + a, e--;
                                a = "#" + a;
                                g = a.length
                            }
                            b = g - b;
                            e = parseInt(a.substring(b, b + 1), 16);
                            d = 1 << d;
                            e = 1 == c ? e | d : e & ~d;
                            return a = a.substring(0, b) + e.toString(16) + a.substring(b + 1, g)
                        }
                        return 31 < b ? a : this.setBitFlagOldVersion(a, b, c)
                    },
                    createCookieValue: function(a, b, c) {
                        var d = h[a],
                            e = this.getFormat(a),
                            f = this.getMode(a),
                            a = d && ("00" == f || "01" == f) ? this.readCookieObj(d[0], d[1]).value || "" : this.aCookies[a] || "";
                        if (e) {
                            a = this.getCookieletArray(a, e);
                            a[b] = c;
                            var b = "",
                                j;
                            for (j in a) a.hasOwnProperty(j) &&
                                (b += j + e.NAME_VALUE_DELIMITER + a[j] + e.COOKIELET_DELIMITER);
                            b && e.startDelim && (b = e.startDelim + b);
                            a = b;
                            e.escapedValue && (a = encodeURIComponent(a))
                        }
                        return a
                    },
                    update: function() {
                        var a = document.cookie.split("; ");
                        this.aCookies = {};
                        for (var b = /^"(.*)"$/, c = 0; c < a.length; c++) {
                            var d = a[c].split("="),
                                e = this.getFormat(d[0]),
                                f = d[1];
                            (e = e.startDelim) && (f && 0 === f.indexOf(e)) && (d[1] = f.substring(e.length, f.length));
                            d[1] && d[1].match(b) && (d[1] = d[1].substring(1, d[1].length - 1));
                            this.aCookies[d[0]] = d[1]
                        }
                    },
                    getCookielet: function(a,
                        b, c) {
                        a = this.getFormat(a);
                        return this.getCookieletArray(c, a)[b] || ""
                    },
                    getFormat: function(a) {
                        return f[a] || b
                    },
                    getCookieletArray: function(a, b) {
                        var c = [],
                            d = a || "";
                        b.escapedValue && (d = decodeURIComponent(d));
                        for (var d = d.split(b.COOKIELET_DELIMITER), e = 0; e < d.length; e++) {
                            var f = d[e].indexOf(b.NAME_VALUE_DELIMITER);
                            0 < f && (c[d[e].substring(0, f)] = d[e].substring(f + 1))
                        }
                        return c
                    },
                    getExpDate: function(a) {
                        var b;
                        "number" == typeof a && 0 <= a && (b = new Date, b.setTime(b.getTime() + 864E5 * a), b = b.toGMTString());
                        return b
                    },
                    getMode: function(a) {
                        var b =
                            this.readCookieObj("ebay", "cv").value,
                            c;
                        if (!(a in h)) return null;
                        if (!b) return "";
                        if (0 === b) return "00";
                        if (b && "0" != b) {
                            if (-1 != b.indexOf("."))
                                for (var d = b.split("."), b = 0; b < d.length; b++) c = parseInt(d[b], 16).toString(2) + c;
                            else c = parseInt(b, 16).toString(2);
                            var b = 0,
                                d = c.length,
                                e, f;
                            for (f in h) {
                                e = d - 2 * (b + 1);
                                e = c.substring(e, e + 2).toString(10);
                                e = !e ? "00" : e;
                                if (a == f) return 1 == e.length ? "0" + e : e;
                                b++
                            }
                        }
                        return null
                    },
                    getMulti: function(a, b, c) {
                        var d = "",
                            e;
                        for (e = 0; e < c; e++) d = this.getBitFlag(a, b + e) + d;
                        return parseInt(d, 2)
                    },
                    setMulti: function(a,
                        b, c, d) {
                        var e = 0,
                            f, d = d.toString(2).substring(0, c);
                        f = d.length;
                        if (f < c) {
                            c -= f;
                            for (e = 0; e < c; e++) d = "0" + d;
                            f += c
                        }
                        for (e = 0; e < f; e++) a = this.setBitFlag(a, b + e, d.substring(f - e - 1, f - e));
                        return a
                    },
                    setJsCookie: function() {
                        this.writeCookielet("ebay", "js", "1")
                    }
                }
            },
            initLegacyVJO: function() {
                if (GH.oldDT && !r("noStandardCSS")) {
                    var a = "ebay",
                        b = "forums. chatboards answercenter http://vi. http://ivi. events.".split(" "),
                        d = !1;
                    for (i = 0; i < b.length; i++)
                        if (-1 < document.domain.indexOf(b[i])) {
                            d = !0;
                            break
                        }
                    if (r("nodefaultcss") || d) a += "-nodefault";
                    if (GH.Util.browser.mozilla || GH.Util.browser.webkit || GH.isIE && d) a += "-ns";
                    a = (l.sec ? "https://secureinclude" : "http://include") + ".ebaystatic.com/css/v/us/legacy/" + a + ".css";
                    c.getCSS(a)
                }
            },
            initPluggins: function() {
                c.getCSS = function(a, b) {
                    document.getElementsByTagName("head")[0].appendChild(jQuery(document.createElement("link")).attr({
                        href: a,
                        media: b || "screen",
                        type: "text/css",
                        rel: "stylesheet"
                    })[0])
                };
                c.cachedScript = function(a) {
                    return c.ajax({
                        dataType: "script",
                        cache: !0,
                        url: a
                    })
                };
                c.fn.scrollLock = function(a) {
                    if (c.isFunction(c.fn.on)) return c(this).on("DOMMouseScroll." +
                        a + " mousewheel." + a,
                        function(a) {
                            var d = c(this),
                                e = this.scrollTop,
                                h = this.scrollHeight,
                                f = d.height(),
                                j = "DOMMouseScroll" == a.type ? -40 * a.originalEvent.detail : a.originalEvent.wheelDelta,
                                k = 0 < j,
                                m = function() {
                                    a.stopPropagation();
                                    a.preventDefault();
                                    return a.returnValue = !1
                                };
                            if (!k && -j > h - f - e) return d.scrollTop(h), m();
                            if (k && j > e) return d.scrollTop(0), m()
                        })
                };
                c.fn.scrollRelease = function(a) {
                    return c(this).off("DOMMouseScroll." + a + " mousewheel." + a)
                };
                c.fn.ghide = function() {
                    return this.attr("aria-hidden", "true").hide()
                };
                c.fn.gshow =
                    function() {
                        return this.attr("aria-hidden", "false").show()
                    };
                c.fn.ghidden = function() {
                    return this.attr("aria-hidden", "true").css("visibility", "hidden")
                };
                c.fn.gvisible = function() {
                    return this.attr("aria-hidden", "false").css("visibility", "visible")
                };
                c.fn.gtoggle = function() {
                    c(this)[this.is(":hidden") ? "gshow" : "ghide"]()
                };
                c.fn.ghellipsis = function(a) {
                    a = c.extend({
                        row: 1,
                        onlyFullWords: !1,
                        "char": "...",
                        callback: function() {}
                    }, a);
                    this.each(function() {
                        var b = c(this),
                            d = b.text(),
                            e = b.height();
                        if (!b.hasClass("ghellip")) {
                            b.addClass("ghellip");
                            b.text("a");
                            var h = parseFloat(b.css("lineHeight"), 10),
                                f = b.height(),
                                h = (h > f ? h - f : 0) * (a.row - 1) + f * a.row;
                            e >= h && b.parents(".coupon-itm").addClass("coupon-itm__tall");
                            if (!(e <= h)) {
                                for (var e = 1, f = 0, j = d.length; e < j;) f = Math.ceil((e + j) / 2), b.text(d.slice(0, f) + a["char"]), b.height() <= h ? e = f : j = f - 1;
                                d = d.slice(0, e);
                                a.onlyFullWords && (d = d.replace(/[\u00AD\w\uac00-\ud7af]+$/, ""));
                                d += a["char"]
                            }
                            b.text(d);
                            a.callback.call(this)
                        }
                    });
                    return this
                };
                c.fn.ghellipsisDetails = function(a) {
                    a = c.extend({
                            row: 1,
                            "char": "...",
                            callback: function() {}
                        },
                        a);
                    this.each(function() {
                        var b = c(this),
                            d = b.parent(),
                            e = b.text(),
                            h = e,
                            f = b.height();
                        if (!b.hasClass("ghellip")) {
                            b.addClass("ghellip");
                            b.text("a");
                            var j = parseFloat(d.css("lineHeight"), 10),
                                k = d.height() - 2,
                                j = j > k ? j - k : 0;
                            Math.floor(f) >= Math.floor(k) && (b.parents(".coupon-itm").addClass("coupon-itm__tall-details"), b.text(h), f = d.height(), b.text("a"));
                            k = d.height();
                            k = j * (a.row - 1) + k * a.row;
                            if (f <= k) b.text(e);
                            else {
                                for (var f = 1, j = 0, m = e.length; f < m;) j = Math.ceil((f + m) / 2), b.text(e.slice(0, j) + a["char"]), d.height() <= k ? f = j : m = j -
                                    1;
                                e = e.slice(0, f);
                                e += a["char"];
                                b.text(e);
                                b.prop("title", h)
                            }
                            a.callback.call(this)
                        }
                    });
                    return this
                };
                c.fn.hoverIntent = function(a, b) {
                    var d, e, h, f, j = function(a) {
                            d = a.pageX;
                            e = a.pageY
                        },
                        k = {
                            sensitivity: 15,
                            interval: 100,
                            timeout: 150
                        },
                        m = function(a, b) {
                            b.hoverIntent_t = GH.Util.clrTimer(b.hoverIntent_t);
                            if (Math.abs(h - d) + Math.abs(f - e) < k.sensitivity) return c(b).unbind("mousemove", j), b.hoverIntent_s = 1, k.over.apply(b, [a]);
                            h = d;
                            f = e;
                            b.hoverIntent_t = setTimeout(function() {
                                m(a, b)
                            }, k.interval)
                        },
                        l = function(a) {
                            var b = jQuery.extend({},
                                    a),
                                d = this;
                            d.hoverIntent_t && (d.hoverIntent_t = GH.Util.clrTimer(d.hoverIntent_t));
                            "mouseover" == a.type ? (h = b.pageX, f = b.pageY, c(d).bind("mousemove", j), 1 != d.hoverIntent_s && (d.hoverIntent_t = setTimeout(function() {
                                m(b, d)
                            }, k.interval))) : (c(d).unbind("mousemove", j), 1 == d.hoverIntent_s && (d.hoverIntent_t = setTimeout(function() {
                                d.hoverIntent_t = GH.Util.clrTimer(d.hoverIntent_t);
                                d.hoverIntent_s = 0;
                                k.out.apply(d, [b])
                            }, k.timeout)))
                        },
                        k = c.extend(k, b ? {
                            over: a,
                            out: b
                        } : a);
                    return this.bind("mouseover", l).bind("mouseout", l).bind("focusin",
                        function(a) {
                            var b = jQuery.extend({}, a),
                                c = this;
                            k.addFocus && setTimeout(function() {
                                k.over.apply(c, [b])
                            }, 50)
                        })
                }
            }
        }
    })
})(GH.jQ);
GH.siteSpecific = {
    maprules: {
        regex: /ebay\.(\w{1,3})/g,
        qa: "qa.ebay.com",
        paradise: "$1.paradise.qa.ebay.com",
        latest: "latest.ebay.$1",
        greatest: "greatest.ebay.$1",
        sandbox: "sandbox.ebay.$1",
        xstage: "xstage.ebay.$1"
    },
    rtmFtrMap: {
        s: "main",
        e: "qa."
    }
};
(function(g) {
    GH.add("XTDropper", function() {
        return {
            init: function() {
                g(document).ready(this.attachEvents.bind(this))
            },
            attachEvents: function() {
                var c = this.getPageID();
                [{
                    selector: "#gh-cart a, #gh-minicart-hover a",
                    dropEvent: "mouseover",
                    actionKind: "HOVER",
                    eventFamily: "GBHEADER"
                }, {
                    selector: "#gh-cart a, #gh-minicart-hover a",
                    dropEvent: "click",
                    actionKind: "CLICK",
                    eventFamily: "GBHEADER"
                }, {
                    selector: "#gh",
                    dropEvent: "scroll",
                    eventFamily: "GBHEADER"
                }].forEach(function(a) {
                    var d = a.dropEvent,
                        b = document.querySelector(a.selector);
                    if (b) {
                        var h = b.getAttribute("data-treatment"),
                            j = b.getAttribute("data-sp") || null,
                            i = a.actionKind,
                            k = a.eventFamily,
                            e = "p" + c;
                        j && (e += ".m" + j);
                        var l = !1,
                            m = function() {
                                if (b.getAttribute("data-treatment") && b.getAttribute("data-sp")) {
                                    var a = [{
                                        actionKind: i,
                                        eventFamily: k,
                                        eventAction: "ACTN",
                                        eventProperty: {
                                            sid: e,
                                            xt: h
                                        }
                                    }, {
                                        actionKind: i
                                    }];
                                    console.debug("Sending to pulsar:", JSON.stringify(a));
                                    g(document).trigger("pulsar", a);
                                    b.removeEventListener(d, m)
                                }
                            },
                            f = function() {
                                if (h && !(l || 100 > window.pageYOffset)) {
                                    l = !0;
                                    var a = [{
                                        actionKind: i,
                                        eventFamily: k,
                                        eventAction: "ACTN",
                                        eventProperty: {
                                            sid: e,
                                            xt: h
                                        }
                                    }, {
                                        actionKind: "VIEW"
                                    }];
                                    console.debug("Sending to pulsar:", JSON.stringify(a));
                                    g(document).trigger("pulsar", a);
                                    window.removeEventListener(d, f);
                                    window.removeEventListener("load", f)
                                }
                            };
                        "scroll" == d ? (window.addEventListener("load", f), window.addEventListener(d, f)) : b.addEventListener(d, m)
                    }
                })
            },
            getPageID: function() {
                var c, a;
                "object" === typeof window.trkCorrelationSessionInfo ? (a = window.trkCorrelationSessionInfo.getTrackingCorrelationSessionInfo()) && (c =
                    /operationId=(\d+)/.exec(a)[1]) : c = GH.C.pageId;
                return c
            }
        }
    })
})(GH.jQ);
(function(a) {
    GH.add("Doodle", function() {
        return {
            init: function() {
                var b, c, d, e = a("#gh-ti");
                0 < a("#gh-doodleS").length && (b = a(window).width(), c = a("body").hasClass("sz980"), d = a("body").hasClass("sz1200"), GH.C.largeDoodle && (d && 1400 < b || c && 1200 < b || !c && !d && 1200 < b) ? (a(GH.componentID).prepend('<b id=gh-doodleL style="display:block"><a _sp=m570.l2920 href="' + a("#gh-doodleS").attr("href") + '"><img src="' + GH.C.largeDoodle + '" border=0 alt="' + (a("#gh-hsi").attr("alt") || "") + '"></a></b>'), GH.Util.cTImg(GH.ghiIMP + 19), e.remove()) :
                    e.removeClass("gh-hdn"))
            }
        }
    })
})(GH.jQ);
(function(b) {
    GH.add("TopBar", function() {
        var e = !1;
        return {
            addCSSShadow: function() {
                var c = GH.GHSW;
                "undefined" !== typeof c && "true" === c.SEARCH_PROM || b("#gh-gb").addClass("gh-gb-shadow")
            },
            removeCSSShadow: function() {
                e && b("#gh-gb").removeClass("gh-gb-shadow")
            },
            init: function() {
                var c = document.body.style,
                    f = window.getComputedStyle,
                    d;
                b(GH.componentID).removeClass("gh-pre-js");
                var a = GH.GHSW,
                    a = "undefined" !== typeof a && "true" === a.SEARCH_PROM;
                f && (c && !a) && (e = !0, d = f(document.body), c.backgroundImage = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAKCAYAAAB10jRKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBJREFUeNpEyqERADAIBMGbbwSH+qhA/6URXMyqBUhFBLIP6ip0ezk2zExqC58nwACVZwX67tO41gAAAABJRU5ErkJggg==')," +
                    (d.backgroundImage || ""), document.body.style.backgroundRepeat = "repeat-x," + (d.backgroundRepeat || ""), document.body.style.backgroundPosition = "0 30px," + (d.backgroundPosition || ""));
                b("body").prepend("<div id=gh-gb class=" + (a ? "gh-sch-prom" : "") + " tabindex='-1' " + (!d && !a || b("body.RTMPushdown").length ? "class='gh-gb-shadow'" : "") + "></div>")
            }
        }
    })
})(GH.jQ);
(function(c) {
    GH.add("Flex", function() {
        var d;
        return {
            execute_immediately: function() {
                d = this;
                d.execute_on_load_or_resize()
            },
            execute_on_load_or_resize: function() {
                var e = c("body"),
                    f = c(window);
                f.unbind("resize.gh", d.execute_on_load_or_resize);
                c(".gh-w").removeClass("gh-flex");
                e.removeClass("gh-1199 gh-979 gh-939 gh-899 gh-799 gh-699 gh-599 gh-479 gh-flex");
                e.addClass(function() {
                    var b = c(".gh-w").width(),
                        a = "";
                    1200 > b && (a += "gh-1199");
                    980 > b && (a += " gh-979");
                    940 > b && (a += " gh-939");
                    900 > b && (a += " gh-899");
                    800 > b && (a +=
                        " gh-799");
                    700 > b && (a += " gh-699");
                    600 > b && (a += " gh-599");
                    480 > b && (a += " gh-479");
                    return a
                });
                c(document).width() - f.width() <= (GH.isIE ? 20 : 0) && e.addClass("gh-flex");
                setTimeout(function() {
                    f.on("resize.gh", d.execute_on_load_or_resize)
                }, 60)
            }
        }
    })
})(GH.jQ);
(function(a) {
    GH.add("FooterBuyerProtection", function() {
        return {
            init: function() {
                a("#gf-bp").addClass("gf-bp-bg")
            }
        }
    })
})(GH.jQ);
ebayContent["GlobalHeaderWeb/FooterJavascriptContent"] = {
    mftrLinkURL: '<a href="http://www.m.ebay.com"></a>',
    mftrLinkURLUnified: '<a href="http://www.ebay.com"></a>'
};
(function(a) {
    GH.add("Accessibility", function() {
        return {
            init: function() {
                var c = a("h1:not(#gh-l-h1):first"),
                    e = a("[name=mainContent]"),
                    f = a("#mainContent");
                a("#gh-hdn-stm").click(function() {
                    GH.Util.cTImg(GH.ghiIMP + 93)
                });
                !e.length && !f.length && (c.length ? c.before("<a tabindex='-1' id='mainContent'></a>") : a("#gh-hdn-stm").parent().remove());
                a(".gh-acc-exp-a").click(function() {
                    var b = a(this).closest("li"),
                        d = b.closest("li").attr("data-imp");
                    GH.Dropdown.activate(b, d);
                    a(this).trigger("click.hideLink").closest("li").find(".gh-submenu a:first").focus();
                    return !1
                });
                a(GH.componentID).delegate(".gh-submenu,.gh-sublayer, .gh-eb-o, #gh-sbc-o", "keydown", function(b) {
                    if (27 == b.keyCode) return "gh-eb-My" == a(this).closest("li").attr("id") ? a(this).closest(".gh-menu").find("a:first").focus() : a(".gh-control[aria-controls='" + this.id + "']").focus(), GH.Util.hideOverlays(), !1
                }).delegate("a.gh-acc-a2", "focus", function() {
                    GH.Util.hideOverlays()
                });
                a(document).on("mouseup.gh touchend.gh", function(b) {
                    var d = !1,
                        c = a("#gh-eb-u,.gh-dd,.gh-layer,#gh-shop");
                    !c.is(b.target) && 0 ===
                        c.has(b.target).length && (d = !0);
                    d && GH.Util.hideOverlays(!0)
                });
                a("#gh-eb-Alerts , #gh-shop,#gh-eb-u ").on("keydown", ".gh-control", function(b) {
                    if (13 == b.keyCode || 32 === b.keyCode) a(this).trigger("click", !0), b.preventDefault()
                })
            }
        }
    })
})(GH.jQ);
(function(a) {
    GH.add("Footer", function() {
        var b, e = GH.GHSW;
        return {
            init: function() {
                b = this;
                document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") || a("#glbfooter").addClass("gf-nosvg");
                e.sandbox && a(GH.componentID).prepend('<img style="position:absolute;top:32px;left:40px" src="' + GH.pi + 'globalHeader/imgSandbox.png">');
                a("#gf-BIG a[_exsp]").bind("click", GH.Util.externalLinkTracking);
                !e.hideMobile && (GH.userAgent.match(/android.*mobile|bntv|blackberry|bb10|webos|iemobile|silk|cloud9|iphone/i) &&
                    !GH.userAgent.match(/kindle|Nexus 7|NOOK|BNTV/i)) && a.cachedScript(GH.Util.getSecURL("https://ir.ebaystatic.com/cr/v/c1/logwisyb5e5yddn4zmlg5mnhbab.js", !0));
                e.telDE && (a("#gh-eb-contact a").appendTo("body").attr("id", "gh-ctab").removeClass("gh-eb-li-a"), a("#gh-eb-contact").remove());
                a(".gf-flags-wpr").removeClass("gh-hvr");
                a("#gf-f-trans").remove();
                a("#gf-fbtn").bind("click mouseover", function(a) {
                    b.showFlagsOverlay(a)
                });
                a("#gf-fbtn").bind("keydown", function(a) {
                    32 == (a.keyCode ? a.keyCode : a.charCode) &&
                        b.showFlagsOverlay(a)
                });
                a("#gf-f").mouseover(function(a) {
                    b.showFlagsOverlay(a)
                });
                a("#gf-fbtn, #gf-f").mouseout(function() {
                    GH.flagTimeoutId = setTimeout(GH.Util.hideOverlays, 300)
                });
                a("#gf-fbtn-arr").addClass("gh-sprRetina");
                a("#gf-f").bind("keydown", function(c) {
                    var f = c.keyCode ? c.keyCode : c.charCode,
                        d = a("#gf-f a").get(),
                        b = c.target;
                    if (27 == f || 9 == f && b == d[d.length - 1] || 9 == f && c.shiftKey && b == d[0]) a("#gf-fbtn").focus(), GH.Util.closeOverlay(a("#gf-fbtn"))
                });
                0 < navigator.userAgent.indexOf("Trident/4.0") && a.getScript(GH.Util.getSecURL(GH.urls.ie8_js))
            },
            showFlagsOverlay: function(c) {
                var b = a("#gf-f"),
                    d = a("#gf-f a"),
                    e = "click" == c.type;
                GH.Util.clrTimer(GH.flagTimeoutId);
                a("#gf-BIG").mouseenter();
                e && b.is(":visible") ? GH.Util.hideOverlays() : (GH.Util.openOverlay(a("#gf-fbtn")), d && d.get(0) && d.get(0).focus());
                c.preventDefault()
            }
        }
    })
})(GH.jQ);
(function(a) {
    GH.add("Logo", function() {
        return {
            init: function() {
                !GH.GHSW.raptor && GH.oldDT && GH.isIE && (window.performance && 10 > ~~GH.Util.browser.version) && a("#gh-la").css("position", "static");
                a("#gh-l-h1").length && 1 < a("h1").length && a("#gh-la").unwrap()
            }
        }
    })
})(GH.jQ);
(function(a) {
    GH.add("ShopByCat", function() {
        var b, g = function() {
                return 0 < a("#gh-sbc-o li").length
            },
            m;
        return {
            controlID: "#gh-shop-a",
            init: function() {
                b = this;
                b.assignControlClickHandler("#gh-shop");
                a(window).on("load.gh", function() {
                    window.setTimeout(function() {
                        g() || a("#gh-sbc-o").append(b.buildOverlayHTML()).addClass("gh-o")
                    }, 1)
                });
                a("#gh-shop").hoverIntent({
                    over: function() {},
                    out: function() {
                        GH.Util.closeOverlay(a(b.controlID));
                        a("#gh-shop").removeClass("gh-shop-active")
                    },
                    sensitivity: 30,
                    interval: 100,
                    timeout: 150
                });
                a("#gh-shop").bind("focusout", function(i) {
                    100 < Date.now() - m && !(0 < a(i.target).closest("#gh-shop").length) && g() && (GH.Util.toggleOverlay(a(b.controlID)), a("#gh-shop").toggleClass("gh-shop-active"))
                })
            },
            assignControlClickHandler: function(i) {
                a(i).click(function(i, h) {
                    m = Date.now();
                    (!g() || a("#gh-sbc-o").is(":hidden")) && GH.Util.hideOverlays();
                    0 < a(i.target).closest("#gh-sbc-o").length || (g() ? (GH.Util.toggleOverlay(a(b.controlID)), a("#gh-shop").toggleClass("gh-shop-active"), a("#gh-sbc-o").is(":hidden") || (GH.Util.cTImg(GH.ghiIMP +
                        34), setTimeout(function() {
                        a("#gh-sbc-o a:first").focus()
                    }, 100), h && a("#gh-sbc-o a:first").focus())) : (a("#gh-sbc-o").append(b.buildOverlayHTML()).addClass("gh-o"), GH.Util.cTImg(GH.ghiIMP + 34), GH.Util.openOverlay(a(b.controlID)), a("#gh-shop").addClass("gh-shop-active"), setTimeout(function() {
                        a("#gh-sbc-o a:first").focus()
                    }, 100), h && a("#gh-sbc-o a:first").focus()), i.preventDefault())
                })
            },
            buildOverlayHTML: function() {
                var a = ['<table id="gh-sbc" role="presentation"><tbody><tr>'],
                    b = 0,
                    h, g = [];
                GH.getShopByCatData &&
                    (h = GH.getShopByCatData(), g = GH.Util.addPrefixPoolURL(h.data), h = h.itemsPerColumn || 3);
                for (var n = 0, m = g.length; n < m; n++) {
                    var k = g[n],
                        c = k.parent,
                        e = c.id,
                        j = c.title || "",
                        d = c.url || "javascript:;",
                        l = c.txt,
                        f = c.sp ? "_sp=" + c.sp : "",
                        o = c.id ? "id=" + c.id : "";
                    0 < d.indexOf("/sch/allcategories/all-categories") || 0 < d.indexOf("immo.ebay.be/fr/") || (d = GH.Util.getHTTPSURL(d));
                    if (e && ("gh-shop-col-link" == e || "gh-shop-see-all" == e || "gh-shop-see-all-center" == e || "gh-shop-by-brand" == e || "gh-shop-by-sale" == e)) a.push('<h3 class="gh-sbc-parent"><a title="' +
                        j + '" href="' + d + '" ' + f + " " + o + ">" + l + '<i class="gh-sbc-h3i gh-sprRetina"></i></a></h3>');
                    else {
                        0 == b % h && (e = "</td><td>", 0 == b && (e = "<td>"), a.push(e));
                        a.push('<h3 class="gh-sbc-parent">' + (c.url ? '<a title="' + j + '" href="' + d + '" ' + f + " " + o + ">" + l + '<i class="chevron-right"></i></a>' : l) + "</h3>");
                        c = (k = k.children) ? k.length : 0;
                        if (0 < c) {
                            a.push("<ul>");
                            for (j = 0; j < c; j++) f = k[j], d = f.url, l = f.txt, f = f.sp ? "_sp=" + f.sp : "", 0 < d.indexOf("/sch/allcategories/all-categories") || 0 < d.indexOf("immo.ebay.be/fr/") || (d = GH.Util.getHTTPSURL(d)),
                                a.push('<li><a class="scnd" href="' + d + '" ' + f + ">" + l + "</a></li>");
                            a.push("</ul>")
                        }
                        b++
                    }
                }
                a.push("</td></tr></table>");
                return a.join("")
            }
        }
    })
})(GH.jQ);
GH.getShopByCatData = function() {
    return {
        data: [{
                parent: {
                    sp: "m570.l3410",
                    url: "https://www.ebay.com/b/Auto-Parts-and-Vehicles/6000/bn_1865334",
                    txt: "Motors"
                },
                children: [{
                    sp: "m570.l3638",
                    url: "https://www.ebay.com/b/Auto-Parts-Accessories/6028/bn_569479",
                    txt: "Parts & accessories"
                }, {
                    sp: "m570.l3637",
                    url: "https://www.ebay.com/b/Cars-Trucks/6001/bn_1865117",
                    txt: "Cars & trucks"
                }, {
                    sp: "m570.l3636",
                    url: "https://www.ebay.com/b/Motorcycles/6024/bn_1865434",
                    txt: "Motorcycles"
                }, {
                    sp: "m570.l3639",
                    url: "https://www.ebay.com/b/Other-Vehicles-Trailers/6038/bn_1865426",
                    txt: "Other vehicles"
                }]
            }, {
                parent: {
                    title: "Your new destination for Clothing, Shoes &amp; Accessories on eBay",
                    sp: "m570.l3409",
                    url: "https://www.ebay.com/b/Clothing-Shoes-Accessories/11450/bn_1852545",
                    txt: "Clothing & Accessories"
                },
                children: [{
                    sp: "m570.l3632",
                    url: "https://www.ebay.com/b/Women/260010/bn_7116391826",
                    txt: "Women"
                }, {
                    sp: "m570.l3633",
                    url: "https://www.ebay.com/b/Men/260012/bn_7116419459",
                    txt: "Men"
                }, {
                    sp: "m570.l3634",
                    url: "https://www.ebay.com/b/Designer-Handbags/bn_7117629183",
                    txt: "Handbags"
                }, {
                    sp: "m570.l3635",
                    url: "https://www.ebay.com/b/Collectible-Sneakers/bn_7000259435",
                    txt: "Collectible Sneakers"
                }]
            }, {
                parent: {
                    sp: "m570.l3414",
                    url: "https://www.ebay.com/b/Sporting-Goods/888/bn_1865031",
                    txt: "Sporting goods"
                },
                children: [{
                        sp: "m570.l3648",
                        url: "https://www.ebay.com/b/Hunting-Equipment/7301/bn_1865054",
                        txt: "Hunting Equipment"
                    }, {
                        sp: "m570.l4135",
                        url: "https://www.ebay.com/b/Golf-Equipment/1513/bn_1849088",
                        txt: "Golf Equipment"
                    }, {
                        sp: "m570.l3648",
                        url: "https://www.ebay.com/b/Outdoor-Sports/159043/bn_1855398",
                        txt: "Outdoor sports"
                    },
                    {
                        sp: "m570.l3651",
                        url: "https://www.ebay.com/b/Cycling-Equipment/7294/bn_1848937",
                        txt: "Cycling Equipment"
                    }
                ]
            }, {
                parent: {
                    title: "Your shopping destination for the best selection and value in electronics and accessories",
                    sp: "m570.l3413",
                    url: "https://www.ebay.com/b/Electronics/bn_7000259124",
                    txt: "Electronics"
                },
                children: [{
                    sp: "m570.l3653",
                    url: "https://www.ebay.com/b/Computers-Tablets-Network-Hardware/58058/bn_1865247",
                    txt: "Computers, Tablets & Network Hardware"
                }, {
                    sp: "m570.l3652",
                    url: "https://www.ebay.com/b/Cell-Phones-Smart-Watches-Accessories/15032/bn_1865441",
                    txt: "Cell Phones, Smart Watches & Accessories"
                }, {
                    sp: "m570.l3655",
                    url: "https://www.ebay.com/b/Gaming/1249/bn_1850232",
                    txt: "Video Games & Consoles"
                }, {
                    sp: "m570.l3654",
                    url: "https://www.ebay.com/b/Cameras-Photo/625/bn_1865546",
                    txt: "Cameras & Photo"
                }]
            }, {
                parent: {
                    sp: "m570.l3649",
                    url: "https://www.ebay.com/b/Business-Industrial/12576/bn_1853744",
                    txt: "Business & Industrial"
                },
                children: [{
                        sp: "m570.l3275",
                        url: "https://www.ebay.com/b/Modular-Prefabricated-Buildings/55805/bn_2310190",
                        txt: "Modular & Pre-Fabricated Buildings"
                    },
                    {
                        sp: "m570.l3771",
                        url: "https://www.ebay.com/b/Test-Measurement-Inspection-Equipment/181939/bn_16566063",
                        txt: "Test, Measurement & Inspection Equipment"
                    }, {
                        sp: "m570.l4133",
                        url: "https://www.ebay.com/b/Heavy-Equipment-Parts-Attachments/257887/bn_114721174",
                        txt: "Heavy Equipment, Parts & Attachments"
                    }, {
                        sp: "m570.l3274",
                        url: "https://www.ebay.com/b/Restaurant-Food-Service/11874/bn_1865467",
                        txt: "Restaurant & Food Service"
                    }
                ]
            }, {
                parent: {
                    title: "Your new destination for Clothing, Shoes &amp; Accessories on eBay",
                    sp: "m570.l3409",
                    url: "https://www.ebay.com/b/Jewelry-Watches/281/bn_1865273",
                    txt: "Jewelry & Watches"
                },
                children: [{
                    sp: "m570.l3632",
                    url: "https://www.ebay.com/b/Luxury-Watches/31387/bn_36841947",
                    txt: "Luxury Watches"
                }, {
                    sp: "m570.l3633",
                    url: "https://www.ebay.com/b/Wristwatches/31387/bn_2408451",
                    txt: "Wristwatches"
                }, {
                    sp: "m570.l3634",
                    url: "https://www.ebay.com/b/Fashion-Jewelry/10968/bn_2408529",
                    txt: "Fashion Jewelry"
                }, {
                    sp: "m570.l3635",
                    url: "https://www.ebay.com/b/Fine-Jewelry/4196/bn_2408477",
                    txt: "Fine Jewelry"
                }]
            },
            {
                parent: {
                    sp: "m570.l3412",
                    url: "https://www.ebay.com/b/Collectibles-Art/bn_7000259855",
                    txt: "Collectibles &amp; Art"
                },
                children: [{
                    sp: "m570.l3646",
                    url: "https://www.ebay.com/b/Trading-Cards/bn_7116496578",
                    txt: "Trading Cards"
                }, {
                    sp: "m570.l3647",
                    url: "https://www.ebay.com/b/Collectibles/1/bn_1858810",
                    txt: "Collectibles"
                }, {
                    sp: "m570.l4131",
                    url: "https://www.ebay.com/b/Coins-Paper-Money/11116/bn_1857806",
                    txt: "Coins & Paper Money"
                }, {
                    sp: "m570.l3773",
                    url: "https://www.ebay.com/b/Sports-Memorabilia-Fan-Shop-Sports-Cards/64482/bn_1857919",
                    txt: "Sports Memorabilia"
                }]
            }, {
                parent: {
                    sp: "m570.l3412",
                    url: "https://www.ebay.com/b/Home-Garden/11700/bn_1853126",
                    txt: "Home &amp; garden"
                },
                children: [{
                        sp: "m570.l3646",
                        url: "https://www.ebay.com/b/Yard-Garden-Outdoor-Living-Items/159912/bn_1853607",
                        txt: "Yard, Garden & Outdoor Living Items"
                    }, {
                        sp: "m570.l3647",
                        url: "https://www.ebay.com/b/Tools-Workshop-Equipment/631/bn_1851815",
                        txt: "Tools & Workshop Equipment"
                    }, {
                        sp: "m570.l4131",
                        url: "https://www.ebay.com/b/Home-Improvement/159907/bn_1851980",
                        txt: "Home Improvement"
                    },
                    {
                        sp: "m570.l3773",
                        url: "https://www.ebay.com/b/Kitchen-Dining-Bar-Supplies/20625/bn_1865564",
                        txt: "Kitchen, Dining & Bar Supplies"
                    }
                ]
            }, {
                parent: {
                    sp: "m570.l3416",
                    url: "https://www.ebay.com/n/all-categories",
                    txt: "Other categories"
                },
                children: [{
                    sp: "m570.l3417",
                    url: "https://www.ebay.com/b/Books-Movies-Music/bn_7000259849",
                    txt: "Books, Movies & Music"
                }, {
                    sp: "m570.l3420",
                    url: "https://www.ebay.com/b/Toys-Hobbies/220/bn_1865497",
                    txt: "Toys & Hobbies"
                }, {
                    sp: "m570.l3772",
                    url: "https://www.ebay.com/b/Health-Beauty/26395/bn_1865479",
                    txt: "Health & Beauty"
                }, {
                    sp: "m570.l3768",
                    url: "https://www.ebay.com/b/Baby-Essentials/2984/bn_1854104",
                    txt: "Baby Essentials"
                }]
            }, {
                parent: {
                    id: "gh-shop-by-brand",
                    sp: "m570.l45017",
                    url: "https://www.ebay.com/n/all-brands",
                    txt: "All Brands"
                },
                children: []
            }, {
                parent: {
                    id: "gh-shop-see-all-center",
                    sp: "m570.l3601",
                    url: "https://www.ebay.com/n/all-categories",
                    txt: "All Categories"
                },
                children: []
            }, {
                parent: {
                    id: "gh-shop-by-sale",
                    sp: "m570.l3601",
                    url: "https://www.ebay.com/b/Seasonal-Sales-Events/bn_7109722923",
                    txt: "Seasonal Sales & Events"
                },
                children: []
            }
        ]
    }
};
(function(a) {
    GH.add("SearchBox", function() {
        var b;
        return {
            controlID: "#gh-ac",
            formID: "#gh-f",
            btnID: "#gh-btn",
            outerBoxID: "#gh-ac-box",
            innerBoxID: "#gh-ac-box2",
            setFocus: function() {
                a(b.controlID).focus()
            },
            init: function() {
                b = this;
                0 === a(b.formID + " input[name='_from']").length && a(b.formID).append("<input type=hidden name='_from' value='R40'>");
                a(b.formID + "input[name=_trksid]").val(GH.Util.cTId("1313"));
                GH.isIE && (8 > GH.docMode || 7 == GH.Util.browser.version) && a(GH.ghAC_id).bind("keyup", function() {
                    20 < a(this).attr("value").length &&
                        (a(GH.ghAC_id).css("width", a(GH.ghAC_id + "-box2").width() - 25 + "px"), a(this).unbind("keyup"))
                });
                a(b.controlID).focus(function() {
                    a(GH.componentID).addClass("gh-sch-focus");
                    GH.Util.hideOverlays()
                }).blur(function() {
                    0 === a(b.controlID).val().length && (a(GH.ghAC_id + "-box").removeClass("gh-ac-box-focus"), a(GH.componentID).removeClass("gh-sch-focus"))
                });
                a(b.formID).bind("submit", function() {
                    a(b.formID + " input[type=hidden][name=_sacat]").val(0);
                    GH.Util.cTImg(GH.ghiIMP + "31")
                })
            }
        }
    })
})(GH.jQ);
(function(a) {
    GH.add("CategorySelect", function() {
        var b;
        return {
            controlID: "#gh-cat",
            init: function() {
                var c = this;
                b = this;
                a(b.controlID).length && (a(b.controlID).bind("blur", function() {
                        GH.acPrevCatID = a(b.controlID).val();
                        GH.isSelectOptionsBoxShown = !1
                    }), a(b.controlID).on("click keypress", function(a) {
                        if (13 == a.which || "click" == a.type) GH.isSelectOptionsBoxShown = !0;
                        c.selectCat()
                    }), a(b.controlID).focus(function() {
                        a("#gh-cat-box").addClass("gh-cat-box-focus")
                    }).blur(function() {
                        a("#gh-cat-box").removeClass("gh-cat-box-focus")
                    }),
                    1 < a(b.controlID + " option").length || (c.buildCatSelect(), (~~GH.C.catId || ~~GH.C.selectedCatId || GH.userAgent.match(/iPad/i)) && a(GH.SearchBox.formID).mouseenter()))
            },
            selectCat: function() {
                document.getElementById("gh-cat");
                GH.Events.publish("stores", {
                    formID: "gh-f",
                    dropDownID: "gh-cat"
                });
                GH.Events.subscribe("stores", function(a) {
                    return a
                })
            },
            buildCatSelect: function() {
                var c, f, d, g = [],
                    e = b.controlID,
                    h = GH.C.selectedCatId || GH.C.catId || 0;
                if (typeof GH.getCategories == GH.functionStr) {
                    c = GH.getCategories();
                    f = c.length;
                    if (4340 ==
                        GH.C.pageId || 2047675 == GH.C.pageId) h = 0;
                    if (2 > a(e + " option").length) {
                        for (d = 0; d < f; d++) g.push("<option value='" + c[d].i + "'" + (c[d].i == h ? " selected" : "") + ">" + c[d].v + "</option>");
                        a(e).html(a(e).html() + g.join(""))
                    }
                    GH.isIE && 8 > GH.docMode && a(e).css("position", "static");
                    GH.acPrevCatID = a(e).val()
                }
            }
        }
    })
})(GH.jQ);
GH.getCategories = function() {
    return [{
        i: 20081,
        v: "Antiques"
    }, {
        i: 550,
        v: "Art"
    }, {
        i: 2984,
        v: "Baby"
    }, {
        i: 267,
        v: "Books"
    }, {
        i: 12576,
        v: "Business & Industrial"
    }, {
        i: 625,
        v: "Cameras & Photo"
    }, {
        i: 15032,
        v: "Cell Phones & Accessories"
    }, {
        i: 11450,
        v: "Clothing, Shoes & Accessories"
    }, {
        i: 11116,
        v: "Coins & Paper Money"
    }, {
        i: 1,
        v: "Collectibles"
    }, {
        i: 58058,
        v: "Computers/Tablets & Networking"
    }, {
        i: 293,
        v: "Consumer Electronics"
    }, {
        i: 14339,
        v: "Crafts"
    }, {
        i: 237,
        v: "Dolls & Bears"
    }, {
        i: 11232,
        v: "DVDs & Movies"
    }, {
        i: 6E3,
        v: "eBay Motors"
    }, {
        i: 45100,
        v: "Entertainment Memorabilia"
    }, {
        i: 172008,
        v: "Gift Cards & Coupons"
    }, {
        i: 26395,
        v: "Health & Beauty"
    }, {
        i: 11700,
        v: "Home & Garden"
    }, {
        i: 281,
        v: "Jewelry & Watches"
    }, {
        i: 11233,
        v: "Music"
    }, {
        i: 619,
        v: "Musical Instruments & Gear"
    }, {
        i: 1281,
        v: "Pet Supplies"
    }, {
        i: 870,
        v: "Pottery & Glass"
    }, {
        i: 10542,
        v: "Real Estate"
    }, {
        i: 316,
        v: "Specialty Services"
    }, {
        i: 888,
        v: "Sporting Goods"
    }, {
        i: 64482,
        v: "Sports Mem, Cards & Fan Shop"
    }, {
        i: 260,
        v: "Stamps"
    }, {
        i: 1305,
        v: "Tickets & Experiences"
    }, {
        i: 220,
        v: "Toys & Hobbies"
    }, {
        i: 3252,
        v: "Travel"
    }, {
        i: 1249,
        v: "Video Games & Consoles"
    }, {
        i: 99,
        v: "Everything Else"
    }]
};
ebayContent["GlobalHeaderWeb/GreetingsJavascriptContent"] = {
    greetingDefault: 'Hi! <a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;ru=ru" _sp="m570.l1524">Sign in</a>\u00a0<span>or <a href="https://signup.ebay.com/pa/crte?ru=ru2" _sp="m570.l2621">register</a></span>',
    greetingRecognized: 'Hi <b>${username}</b> (<a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;ru=ru" _sp="m570.l2620">Sign in</a>)',
    greetingAuthenticated: "Hi <b>${username}</b>!",
    greetingOverlaySignout: '<a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;lgout=1" _sp="m570.l2622">Sign out</a>',
    profile_mycollections: '<a href="http://www.ebay.com/cln/_mycollections">My Collections</a>',
    profile_accountsettings: '<a href="https://accountsettings.ebay.com/uas">Account settings</a>',
    profile_myworld: '<a href="https://www.ebay.com/usr/@@">@#@</a>',
    profile_feedback: '<a title="Feedback score" href="https://www.ebay.com/fdbk/feedback_profile/@@"></a>',
    profile_loginUserL10n: '<a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;ru=ru">Sign in</a> to see your user information',
    profile_userAltTxt: "Profile picture - ",
    rating_1: "Yellow star for feedback score from 10 to 49",
    rating_2: "Blue star for feedback score from 50 to 99",
    rating_3: "Turquoise star for feedback score from 100 to 499",
    rating_4: "Purple star for feedback score from 500 to 999",
    rating_5: "Red star for feedback score from 1,000 to 4,999",
    rating_6: "Green star for feedback score from 5,000 to 9,999",
    rating_7: "Yellow shooting star for feedback score from 10,000 to 24,999",
    rating_8: "Turquoise shooting star for feedback score from 25,000 to 49,999",
    rating_9: "Purple shooting star for feedback score from 50,000 to 99,999",
    rating_10: "Red shooting star for feedback score from 100,000 to 499,999",
    rating_11: "Green shooting star for feedback score from 500,000 to 999,999",
    rating_12: "Silver shooting star for feedback score from 1,000,000 or more",
    profile_memberAltTxt: "User ID",
    profile_feedbackscore: '<a href="http://my.ebay.com/ws/eBayISAPI.dll?GetGHNotificationsCommand&amp;ghud=1"></a>',
    profile_feedbackscore_new: '<a href="http://gha.ebay.com/nproxy/notification/v1/getMinProfile"></a>',
    feedbackTitle: "Feedback Score ${feedback}"
};
ebayContent["GlobalHeaderWeb/HiddenFromL10NTeamContent"] = {};
(function(b) {
    GH.add("Greeting", function() {
        var m = b.extend(GH.Util.getBundle("GreetingsJavascriptContent"), GH.Util.getBundle("HiddenFromL10NTeamContent")),
            n = GH.undefinedStr;
        return {
            init: function() {
                var e = this,
                    a, c, d = m.greetingDefault,
                    f, g, i, j, h = GH.vCJar,
                    d = d.replace("<span", '<span id="gh-ug-flex"');
                a = decodeURIComponent(GH.C.id || escape(GH.Util.base64decode(h.readCookie("dp1", "u1p"))));
                c = GH.C.fn || h.readCookieObj("dp1", "u1f").value;
                try {
                    c = decodeURI(c)
                } catch (l) {}
                try {
                    c = decodeURIComponent(c)
                } catch (k) {
                    c = decodeURIComponent(unescape(c))
                }
                c =
                    c.replace(/\+/g, " ");
                typeof c !== n && 0 <= c.indexOf("?") && (c = null);
                !(0 === GH.C.sin && GH.C.id) && (typeof a !== n && "" !== a && 0 > a.indexOf("@@__@@__@@")) && (d = m.greetingRecognized, GH.userRecog = !0, GH.userID = a, GH.userFN = c, GH.C.cgi || GH.C["static"] ? (f = h.readCookie("dp1", "pcid")) ? (g = i = decodeURIComponent(h.readCookie("cid")), j = g.indexOf("#"), -1 === j && 8 < g.length || (-1 !== j && (i = g.substring(j + 1, g.length)), i === f && (b(window).on("load.gh", function() {
                    h.writeCookie("cid", g, 365)
                }), GH.userAuth = !0))) : GH.userAuth = !0 : 1 === GH.C.sin && (GH.userAuth = !0), GH.userAuth && (d = m.greetingAuthenticated), !GH.userAuth && ("function" === typeof h.getBitFlag && 1 == h.getBitFlag(h.readCookie("dp1", "pbf"), 98)) && (GH.userRecog = !1, d = m.greetingDefault), a = 77 == GH.C.siteId ? a || c : c || a, 13 < a.length && (a = a.substring(0, 12) + "..."), d = GH.Util.mergeContent(d, {
                    username: GH.Util.eZ(a)
                }));
                d = d.replace(/ru=ru2/g, "ru=" + GH.Util.addRU()).replace(/&amp;ru=ru/g, "&ru=" + GH.Util.addRU());
                GH.userAuth ? (b("#gh-eb-u").html('<button id=gh-ug class="gh-ua gh-control" aria-expanded=false aria-controls=gh-eb-u-o role=button>' +
                    d + '<b class="gh-eb-arw gh-sprRetina"></b></button><div id="gh-eb-u-o" data-view-state="empty" style="display: none;"></div>'), b("#gh-ug").click(function(a, c) {
                    var d = b("#gh-eb-u").data("mo"),
                        f = b("#gh-eb-u").data("t"),
                        g = (new Date).getTime();
                    b("#gh-eb-u").removeData("mo");
                    if (d || !(f && 400 > g - f))
                        if (a.preventDefault(), b("#gh-eb-u-o").length && "empty" === b("#gh-eb-u-o").attr("data-view-state")) b("#gh-eb-u-o").remove(), GH.Util.createOverlay("u", 0, c), b("#gh-eb-u-o").data("ghi", 41), GH.Util.openOverlay(b("#gh-ug")),
                            b("#gh-eb-u").addClass("gh-eb-active"), GH.alerts.collectData && GH.Util.cTImg(GH.ghiIMP + 79), ajaxURL = "/gh/user_profile?modules=USER_PROFILE&behavior=GET_PROFILE&moduleType=USER_PROFILE", "HttpClient" in window && (d = new window.HttpClient(ajaxURL, "GET", {
                                correlation: window.trkCorrelationSessionInfo && "function" === typeof window.trkCorrelationSessionInfo.getTrackingCorrelationSessionInfo && window.trkCorrelationSessionInfo.getTrackingCorrelationSessionInfo()
                            }, null, {
                                shouldRetry: !0,
                                timeout: 1E4
                            }), d.handlers({
                                onload: function(a) {
                                    if (a instanceof ProgressEvent && (a = a.target || a.currentTarget, a instanceof XMLHttpRequest)) try {
                                        var b = JSON.parse(a.responseText),
                                            d = e.parseResponse(b);
                                        e.buildGreetingOverlay_nproxy(d, !1, c)
                                    } catch (f) {}
                                },
                                onerror: function() {
                                    e.buildGreetingOverlay_nproxy({}, !0, c)
                                }
                            }), d.initializeAndTrigger());
                        else e[b("#gh-eb-u-o").is(":hidden") ? "showUserOverlay" : "hideUserOverlay"](c)
                }), b("#gh-eb-u").hoverIntent({
                    over: function() {
                        b("#gh-eb-u-o").is(":visible") || (b("#gh-eb-u").data({
                            mo: 1,
                            t: (new Date).getTime()
                        }), b("#gh-ug").click())
                    },
                    out: function() {
                        e.hideUserOverlay()
                    },
                    timeout: "500"
                })) : b("#gh-eb-u").html("<span id=gh-ug class=gh-ug-guest>" + d + "</span>");
                b("#gh-topl").show()
            },
            parseResponse: function(b) {
                var a = b && b.content && b.content.response && b.content.response.modules && b.content.response.modules.USER_PROFILE || {},
                    c = {};
                c.d = a && a.userId && a.userId.textSpans && a.userId.textSpans[0] && a.userId.textSpans[0].text || "";
                c.p = a && a.image && a.image.URL || "";
                c.r = a && a.feedbackRating && a.feedbackRating.textSpans && a.feedbackRating.textSpans[1] && a.feedbackRating.textSpans[1].text || "";
                c.u = a &&
                    a.fullName && a.fullName.textSpans && a.fullName.textSpans[0] && a.fullName.textSpans[0].text || "";
                b && (b.error && "auth_required" === b.error) && (c.error = "auth_required");
                return c
            },
            nproxy_ajax: function(e) {
                var a = this,
                    c = GH.Util.getSecURL(GH.Util.getHref(GH.GHSW.newprofile || GH.GHSW.desktop_new_profile_service ? m.profile_feedbackscore_new : m.profile_feedbackscore));
                b.ajax(c, {
                    dataType: "jsonp",
                    jsonpCallback: "GH_alertData",
                    timeout: 4E3,
                    success: function(b) {
                        a.buildGreetingOverlay_nproxy(b, !1, e)
                    },
                    error: function() {
                        a.buildGreetingOverlay_nproxy({}, !0, e)
                    }
                })
            },
            showUserOverlay: function(e) {
                var a = b("#gh-eb-u-o").data("ghi");
                GH.Util.hideOverlays();
                GH.Util.openOverlay(b("#gh-ug"));
                b("#gh-eb-u").addClass("gh-eb-active");
                e && b("#gh-ui a:first").focus();
                a && GH.Util.cTImg(GH.ghiIMP + a)
            },
            hideUserOverlay: function() {
                GH.Util.closeOverlay(b("#gh-ug"));
                b("#gh-eb-u").removeClass("gh-eb-active")
            },
            buildGreetingOverlay_nproxy: function(e, a, c) {
                var d = GH.Util.getBundle("GreetingsJavascriptContent"),
                    f, g = b("#gh-eb-u-o"),
                    i = 12,
                    j, h, l = GH.userID,
                    k = GH.userFN;
                typeof e === n && GH.userAuth &&
                    (e = {});
                typeof e === n && !a || e && e.error && "auth_required" === e.error ? (f = "<div class=gh-o-err><span class=gh-o-errb>" + d.profile_loginUserL10n.replace(/&amp;ru=ru/g, "&ru=" + GH.Util.addRU()) + "</span></div>", g.data("ghi", 40), g.html(f)) : (j = e.r || 0, b.each([10, 50, 100, 500, 1E3, 5E3, 1E4, 25E3, 5E4, 1E5, 5E5, 1E6], function(a, b) {
                        if (j < b) return i = a, !1
                    }), f = e.p ? e.p.replace(/http:.*pics\//, GH.pi) : GH.pi + "social/profile_avatar_60x60.png", h = 77 == GH.C.siteId ? l || k : k || l, f = "<ul id=gh-uu><li id=gh-up><a aria-hidden=true tabindex=-1 _sp=m570.l3331 href='" +
                    GH.Util.getHref(d.profile_myworld).replace("@@", e.d || l) + "'><img id=gh-upi src='" + f + "' alt='" + d.profile_userAltTxt + h + "'></a></li>", f += "<li id=gh-un>" + (e.u || k || "&nbsp;") + "</li><li id=gh-ui>", k = d.profile_myworld.replace('@@"', (e.d || l) + '"_sp=m570.l3332 id="gh-uid"'), k = k.replace("@#@", l + "<i class=gh-ar-hdn>" + d.profile_memberAltTxt + "</i> "), f += k + (!a && GH.userAuth && "undefined" !== typeof e.r ? " (" + d.profile_feedback.replace('@@"', '"_sp=m570.l3333') + ")" : "") + "</li>", f += "<li id=gh-uac>" + d.profile_accountsettings.replace("href=",
                        "_sp=m570.l3399 href=") + "</li><li id=gh-uo>" + (GH.userAuth ? d.greetingOverlaySignout : d.greetingRecognized.replace(/.*(<a.*a>).*/, "$1").replace(/&amp;ru=ru/g, "&ru=" + GH.Util.addRU())) + "</li></ul>", g.data("ghi", a ? 41 : 39), a && g.addClass("gh-eb-o-err"), g.html(f), c && setTimeout(function() {
                        b("#gh-ui a:first").focus()
                    }, 50), f = b("#gh-uu a[_sp='m570.l3333']").html(j + "<span class='gh-ar-hdn'>" + GH.Util.mergeContent(d.feedbackTitle, {
                        feedback: ""
                    }) + "</span>" + (0 < i ? "<i id=gh-ur role=img style='background-position:" + -[-3,
                        16, 35, 54, 73, 92, 113, 135, 157, 179, 201, 224
                    ][i - 1] + "px " + (7 > i ? "-1px; margin:0 -4px 0 -2px;" : "-2px;") + "' />" : "")), b("#gh-ur").attr("aria-label", d["rating_" + i]), f.attr("href", f.attr("href") + (e.d || l)), f.removeAttr("title"));
                GH.Util.cTImg(GH.ghiIMP + g.data("ghi"))
            }
        }
    })
})(GH.jQ);
(function(e) {
    window.GHFlyout = function(j, f, k) {
        var g = document;
        this.init = function() {
            this.isClick = !1;
            this.ajaxURL = j;
            "" !== f && (this.isClick = !0);
            var a = this.triggerId = this.isClick ? f : k;
            this.isWatchList = "gh-wl-click" === f;
            this.isMiniCart = isMiniCart = "gh-minicart-hover" === this.triggerId;
            if (!isMiniCart || !this.detectTouchscreen()) this.triggerElement = g.getElementById(this.triggerId), this.keyboardTriggerElement = this.triggerElement.getElementsByClassName("gh-acc-exp-a"), this.isClick && (this.triggerElement = (this.clickTrigger =
                    this.triggerElement) && this.triggerElement.getElementsByClassName("gh-eb-li-a")[0]), 0 < this.keyboardTriggerElement.length && (this.keyboardTriggerElement = this.keyboardTriggerElement[0]), this.ghEyebrowBarElement = document.getElementById("gh-top"), this.flyoutContent = null, this.maskId = a + "-mask", a && (this.flyoutElement = g.getElementById(a + "-flyout"), this.flyoutMaskElement = this.addMaskLayer(this.maskId), this.flyoutCloseElement = g.getElementById(a + "-close"), this.flyoutBodyElement = g.getElementById(a + "-body")), this.hidefn =
                this.hideFlyout.bind(this), this.showfn = this.showFlyout.bind(this), this.renderType = isMiniCart ? "minicart" : "rvi", this.isMiniCart && e(this.flyoutElement).attr("aria-modal", "true"), this.addEvents()
        };
        this.addEvents = function() {
            this.flyoutCloseElement.addEventListener("click", this.hideFlyoutClick.bind(this), !1);
            this.flyoutCloseElement.addEventListener("keydown", this.hideFlyout.bind(this), !1);
            this.keyboardTriggerElement && (this.keyboardTriggerElement.addEventListener("click", this.keyboardEventHandler.bind(this), !1), this.keyboardTriggerElement.addEventListener("keydown", this.keyboardEventHandler.bind(this), !1));
            window.addEventListener("resize", this.positionFlyout.bind(this), !1);
            this.isClick ? this.triggerElement.addEventListener("click", this.showFlyout.bind(this), !1) : this.isMiniCart && this.triggerElement.addEventListener("click", this.handleCartClick.bind(this), !1);
            this.addRemoveMouseEvents(!0)
        };
        this.handleCartClick = function(a) {
            this.flyoutElement.contains(a.target) || (this.hidefn(), this.addRemoveMouseEvents(!1))
        };
        this.detectTouchscreen = function() {
            var a = !1;
            "ontouchstart" in window && (a = !0);
            return a
        };
        this.addRemoveMouseEvents = function(a) {
            a ? (this.flyoutMaskElement.addEventListener("mouseover", this.hidefn, !1), this.triggerElement.addEventListener("mouseout", this.hidefn, !1), this.flyoutElement.addEventListener("mouseover", this.showfn, !1), this.flyoutElement.addEventListener("mouseout", this.hidefn, !1), this.isClick || this.triggerElement.addEventListener("mouseover", this.showfn, !1)) : (this.flyoutMaskElement.removeEventListener("mouseover",
                this.hidefn, !1), this.triggerElement.removeEventListener("mouseout", this.hidefn, !1), this.flyoutElement.removeEventListener("mouseover", this.showfn, !1), this.flyoutElement.removeEventListener("mouseout", this.hidefn, !1), this.isClick || this.triggerElement.removeEventListener("mouseover", this.showfn, !1))
        };
        this.keyboardUserURL = function(a) {
            a && a.stopPropagation();
            if (!a || !(13 !== a.keyCode && 32 !== a.keyCode)) a = this.triggerElement && this.triggerElement.getElementsByTagName("a")[0].href, window.location.href = a
        };
        this.showFlyout =
            function(a) {
                clearTimeout(this.hideTimeOut);
                var b = this,
                    c = a.srcElement && "string" === typeof a.srcElement.className && -1 < a.srcElement.className.indexOf("gh-eb-li-a");
                if (this.isClick && (a.preventDefault(), e(this.clickTrigger).hasClass("gh-flyout-active") && c)) {
                    this.hideFlyout();
                    a && a.stopPropagation();
                    return
                }
                clearTimeout(this.showTimeOut);
                a.target.id === this.maskId ? (this.hideFlyout(), a && a.stopPropagation()) : this.showTimeOut = setTimeout(function() {
                    if (b.ghEyebrowBarElement) {
                        var c = b.ghEyebrowBarElement.getBoundingClientRect().bottom;
                        b.flyoutMaskElement.style.top = c + "px"
                    }
                    b.loadStart = Date.now();
                    b.showHideFlyout.call(b, !0, a)
                }, 150)
            };
        this.durationTimer = null;
        this.triggerShowHideTracking = function(a) {
            var b = a ? "data-show-track" : "data-hide-track",
                c = null;
            a ? this.durationTimer = Date.now() : this.durationTimer && (c = Date.now() - this.durationTimer, this.durationTimer = null);
            b = this.flyoutBodyElement && this.flyoutBodyElement.getElementsByTagName("div") && this.flyoutBodyElement.getElementsByTagName("div")[0] && this.flyoutBodyElement.getElementsByTagName("div")[0].firstElementChild &&
                this.flyoutBodyElement.getElementsByTagName("div")[0].firstElementChild.getAttribute(b);
            if (c && b && !a) {
                b = b.replace("dur:", "dur:" + c);
                try {
                    if ((b = JSON.parse(b)) && b.eventProperty && b.eventProperty.moduledtl) b.eventProperty.moduledtl = b.eventProperty.moduledtl + "|loadDur:" + this.loadEndTimeStamp, b = JSON.stringify(b)
                } catch (d) {
                    console.debug("tracking data parse errored")
                }
            }
            if ("string" === typeof b) try {
                b = JSON.parse(b), b.actionKind && (b = [b, {
                    actionKind: b.actionKind
                }]), e(document).trigger("pulsar", b)
            } catch (h) {}
        };
        this.showHideFlyout =
            function(a, b) {
                var c = e(this.triggerElement),
                    d = c[0].classList.toString(),
                    h = g.querySelectorAll(".gh-acc-exp-a"); - 1 !== d.indexOf("watchlist-menu") && (a ? h[0] && h[0].setAttribute("tabindex", "-1") : h[0] && h[0].setAttribute("tabindex", ""));
                c = this.isClick ? e(this.clickTrigger) : c;
                d = c.hasClass("gh-flyout-active");
                if (!a ? d : !d) this.flyoutContent || (this.flyoutElement.style.display = "block", this.positionFlyout(), this.getFlyoutContent()), this.keyboardTriggerElement.setAttribute("aria-expanded", a.toString()), a ? c.addClass("gh-flyout-active") :
                    c.removeClass("gh-flyout-active"), this.triggerShowHideTracking(a);
                b && "mouseover" == b.type && (c = e(this.flyoutElement), c.attr("role", "dialog"), document.body.classList.add("gh_flyout_keyboard"), e.trapKeyboard(c), e.trapScreenreader(c), b && b.stopPropagation())
            };
        this.isWithinFlyoutDOM = function(a, b) {
            for (; a && a.parentElement;) {
                if (a && a.id === b) return !0;
                a = a.parentElement
            }
            return !1
        };
        this.hideFlyoutClick = function(a) {
            e.untrapKeyboard();
            e.untrapScreenreader();
            document.body.classList.remove("gh_flyout_keyboard");
            this.flyoutCloseElement.style.display =
                "none";
            a && a.stopPropagation();
            clearTimeout(this.hideTimeOut);
            clearTimeout(this.showTimeOut);
            this.showHideFlyout(!1);
            this.addRemoveMouseEvents(!0)
        };
        this.hideFlyout = function(a) {
            var b = this.triggerElement;
            this.clearTimedOut = setTimeout(function() {
                a && ("keydown" === a.type && 13 === a.keyCode) && b.focus()
            }, 500);
            var c = a && a.toElement;
            null === c && (c = document.activeElement);
            if (this.isWithinFlyoutDOM(c, this.triggerId + "-flyout") && a && "keydown" !== a.type) a && a.stopPropagation(), clearTimeout(this.hideTimeOut);
            else {
                var d = this;
                if (a && "keydown" == a.type || "mouseout" == a.type && a.target.closest("#gh-minicart-hover")) {
                    if ("keydown" == a.type && 13 !== a.keyCode && 32 !== a.keyCode) return;
                    b.focus();
                    "keydown" == a.type && "gh-minicart-hover" === b.id && document.querySelector(".gh-flyout-active  .gh-menu .gh-rvi-menu").focus();
                    e.untrapKeyboard();
                    e.untrapScreenreader();
                    document.body.classList.remove("gh_flyout_keyboard");
                    this.flyoutCloseElement.style.display = "none"
                }
                a && a.stopPropagation();
                clearTimeout(this.hideTimeOut);
                clearTimeout(this.showTimeOut);
                a && "keydown" == a.type ? (this.showHideFlyout(!1), this.addRemoveMouseEvents(!0)) : this.hideTimeOut = setTimeout(function() {
                    d.showHideFlyout.call(d, !1)
                }, 275);
                clearTimeout(this.clearTimedOut)
            }
        };
        this.addMaskLayer = function(a) {
            var b = document.createElement("div");
            b.id = a;
            b.className = "gh-flyout__mask";
            this.flyoutElement.parentNode.appendChild(b);
            return b
        };
        this.HttpClientRetryCounter = 1;
        this.getFlyoutContent = function() {
            var a = this;
            if ("HttpClient" in window) {
                var b = new window.HttpClient(a.ajaxURL, "GET", {
                    correlation: window.trkCorrelationSessionInfo &&
                        "function" === typeof window.trkCorrelationSessionInfo.getTrackingCorrelationSessionInfo && window.trkCorrelationSessionInfo.getTrackingCorrelationSessionInfo()
                }, null, {
                    shouldRetry: !1,
                    timeout: 5E3
                });
                b.handlers({
                    onload: function(b) {
                        if (b instanceof ProgressEvent && (b = b.target || b.currentTarget, b instanceof XMLHttpRequest)) try {
                            var d = JSON.parse(b.responseText);
                            void 0 === d.html || d.error && "auth_required" == d.error ? ("minicart" === a.renderType && d.error && "auth_required" == d.error && window.GH && window.GH.resetCart && window.GH.resetCart(0),
                                a.paintMinicartError(!0)) : a.paintFlyoutContent(d)
                        } catch (e) {}
                    },
                    onerror: function() {
                        a.paintMinicartError()
                    }
                });
                b.initializeAndTrigger()
            } else 6 > this.HttpClientRetryCounter && setTimeout(function() {
                a.HttpClientRetryCounter++;
                a.getFlyoutContent.call(a)
            }, 200 * this.HttpClientRetryCounter)
        };
        this.paintFlyoutContent = function(a) {
            this.flyoutContent = a;
            this.flyoutBodyElement.innerHTML = a.html;
            this.parseInlineResources(this.flyoutBodyElement, a.renderedComponents);
            "function" === typeof window.markoInitForOnDemand && (this.isWatchList ||
                this.isMiniCart) ? window.markoInitForOnDemand(a.renderedComponents) : "function" === typeof window.markoInitComponents && window.markoInitComponents(a.renderedComponents);
            this.positionFlyout();
            this.loadEndTimeStamp = Date.now() - this.loadStart;
            this.triggerShowHideTracking(!0)
        };
        this.paintMinicartError = function(a) {
            var b = document.querySelector("." + this.triggerId + "-gen-error"),
                c;
            b && (b.parentElement && 0 < b.parentElement.children.length) && (c = b.parentElement.children[0]);
            a && (a = GH.Util.getBundle("GreetingsJavascriptContent"),
                b.innerHTML = a.profile_loginUserL10n.replace(/&amp;ru=ru/g, "&ru=" + GH.Util.addRU()));
            b.classList.add("gh-flyout-error");
            c.classList.add("gh-flyout-error");
            this.positionFlyout()
        };
        this.parseInlineResources = function(a, b) {
            var c = "",
                d = "";
            window.widget_platform_renderedComponents = b;
            var e = a.querySelectorAll("script");
            if (e && 0 < e.length) {
                for (var g = e.length, f = 0; f < g; f++) {
                    var i = e[f];
                    "nb_script" === i.id ? c += " ; " + i.innerHTML : d += " ; " + i.innerHTML
                }
                c = document.createTextNode(c + d);
                d = document.createElement("script");
                d.type =
                    "text/javascript";
                d.appendChild(c);
                document.body.appendChild(d)
            }
        };
        this.keyboardEventHandler = function(a) {
            var b = e(this.flyoutElement),
                c = this.flyoutCloseElement;
            if (13 === a.keyCode || 32 === a.keyCode || "click" === a.type) this.addRemoveMouseEvents(!1), b.attr("role", "dialog"), document.body.classList.add("gh_flyout_keyboard"), this.flyoutCloseElement.style.display = "block", this.showFlyout(a), setTimeout(function() {
                c && c.focus()
            }, 500), c.focus(), e.trapKeyboard(b), e.trapScreenreader(b), a && a.stopPropagation()
        };
        this.positionFlyout =
            function() {
                var a = this.flyoutElement;
                a.style.display = "block";
                a.style.width = "auto";
                a.style.right = "auto";
                a.style.left = "0px";
                if (this.ghEyebrowBarElement) {
                    var b = this.ghEyebrowBarElement.getBoundingClientRect();
                    this.flyoutElement.getBoundingClientRect();
                    var c = this.triggerElement.getBoundingClientRect(),
                        d = b.width,
                        b = b.left,
                        e = a.offsetWidth;
                    e >= d && 0 !== d && (a.style.width = d + "px");
                    b + e >= c.right ? (a.style.left = -(c.left - b) + "px", a.style.right = "auto") : (a.style.right = "0px", a.style.left = "auto")
                }
            };
        this.init()
    }
})(GH.jQ);
! function(a) {
    function d() {
        e.focus()
    }

    function c() {
        g.focus()
    }
    var b, e, g, f = a('<div tabindex="0" class="keyboard-trap-boundary">'),
        h = a('<div tabindex="0" class="keyboard-trap-boundary">'),
        i = a('<div tabindex="0" class="keyboard-trap-boundary">'),
        j = a('<div tabindex="0" class="keyboard-trap-boundary">'),
        k = a('<div tabindex="0" class="keyboard-trap-boundary">'),
        l = a('<div tabindex="0" class="keyboard-trap-boundary">');
    f.on("focus", d);
    h.on("focus", d);
    i.on("focus", c);
    j.on("focus", d);
    k.on("focus", c);
    l.on("focus",
        c);
    a.trapKeyboard = function(c) {
        var d;
        return a.untrapKeyboard(), d = (b = a(c)).focusable(), e = d.first(), g = d.last(), a("body").prepend(f), h.insertBefore(b), b.prepend(i), b.append(j), k.insertAfter(b), a("body").append(l), b.addClass("keyboard-trap--active"), b.trigger("keyboardTrap"), b
    };
    a.untrapKeyboard = function() {
        return void 0 !== b && (f.detach(), h.detach(), i.detach(), j.detach(), k.detach(), l.detach(), b.off("focusExit"), b.removeClass("keyboard-trap--active"), b.trigger("keyboardUntrap")), b
    }
}(jQuery, window, document);
(function(a) {
    var d = {
        findNegativeTabindex: !0,
        findPositiveTabindex: !0
    };
    a.fn.focusable = function(c) {
        var b = a.extend({}, d, c);
        return a(this).first().find("a[href],button:not([disabled]),area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),iframe,object,embed,*[tabindex],*[contenteditable]").filter(function() {
            return b.findNegativeTabindex || "-1" !== a(this).attr("tabindex")
        }).filter(function() {
            return b.findPositiveTabindex || !1 == 0 < a(this).attr("tabindex")
        })
    }
})(jQuery, window, document);
(function(a) {
    var d, c, b;
    a.trapScreenreader = function(e) {
        d = a("main, [role=main]");
        a.untrapScreenreader();
        d.attr("role", "presentation");
        var e = (c = a(e)).siblings(":not(script, [aria-hidden=true])"),
            g = c.parents(":not(html, body)"),
            f = c.parents(":not(html, body)").siblings(":not(script, [aria-hidden=true])");
        c.attr("aria-hidden", "false");
        e.attr("aria-hidden", "true");
        g.attr("aria-hidden", "false");
        f.attr("aria-hidden", "true");
        b = c.add(e).add(g).add(f);
        c.trigger("screenreaderTrap")
    };
    a.untrapScreenreader = function() {
        c &&
            (b.removeAttr("aria-hidden"), c.trigger("screenreaderUntrap"), d.attr("role", "main"), c = null)
    }
})(jQuery, window, document);
(function(b) {
    GH.add("Dropdown", function() {
        var g, h = GH.ghEBActive_id;
        return {
            init: function() {
                g = this;
                b("#gh-eb").length && b(".gh-dd").each(function() {
                    var c = this,
                        a = b(c),
                        d = a.find(".gh-submenu"),
                        e = a.find(".gh-control");
                    a.attr("id");
                    var f = a.attr("data-imp"),
                        j, k = a.position().left,
                        l = b("#gh-eb").outerWidth() + 10;
                    a.removeClass("gh-hvr");
                    GH.Util.isTouchDevice() && !a.hasClass("gh-dd-click") ? a.bind("click", function(i) {
                        i.preventDefault();
                        if (d.is(":visible")) {
                            if (i = b(i.target).attr("href")) a.removeClass(h), GH.Util.closeOverlay(e),
                                document.location = i
                        } else g.activate(c, f)
                    }) : a.hoverIntent({
                        over: function() {
                            b(".gh-479").length || g.activate(c, f)
                        },
                        out: function() {
                            a.removeClass(h);
                            GH.Util.closeOverlay(e)
                        },
                        timeout: 150,
                        addFocus: !1
                    });
                    a.hasClass("gh-dd-click") && a.click(function() {
                        var b = a.find(".gh-submenu");
                        b.is(":hidden") || "hidden" == b.css("visibility") ? (g.activate(c, f), d.find("a").focus()) : (a.removeClass(h), GH.Util.closeOverlay(e))
                    });
                    a.closest("#gh-eb").length && (j = d.outerWidth(), k + j > l && d.css({
                        right: "0px",
                        left: "auto"
                    }))
                })
            },
            activate: function(c,
                a) {
                var d = b(c).find(".gh-submenu"),
                    e = b(c).find(".gh-control"),
                    f;
                if (d.is(":hidden") || "hidden" == d.css("visibility")) GH.Util.openOverlay(e), (f = d.parents("li").get(0).id) && e.trigger(f + "-opened");
                b(c).addClass(h);
                document.addEventListener("keydown", function(a) {
                    var d = c.classList.toString().indexOf("gh-eb-active"),
                        e = document.querySelector(".gh-submenu");
                    27 === a.keyCode && -1 !== d && (e.style.display = "none", b(c).removeClass("gh-eb-active"))
                });
                "undefined" !== typeof a && GH.Util.cTImg(GH.ghiIMP + a)
            }
        }
    })
})(GH.jQ);
(function(f) {
    GH.add("Coupon", function() {
        var d = GH.Util.getBundle("CouponJavascriptContent"),
            a = GH.Util,
            g = "<a _sp=m570.l2735 href='" + a.getHref(d.CL10N) + "'>",
            h = "<a _sp=m570.l2634 href='" + a.getHref(d.BL10N) + "'>",
            i = "<a _sp=m570.l2634 href='" + a.getHref(d.BOL10N) + "'>",
            j = "<a _sp=m570.l2734 href='" + a.getHref(d.JL10N) + "'>";
        return {
            init: function() {
                var c = GH.C.userMsgConfig,
                    b, e, a;
                GH.userAuth && c && (e = "string" == typeof c ? c : c[0], "undefined" !== typeof d[e] && (b = d[e].replace(/-C-/, g).replace(/-B-/, h).replace(/-J-/, j).replace(/-O-/,
                    i).replace(/-A-/, "</a>").replace(/\[/g, "<").replace(/\]/g, ">"), c[1] && (b = b.replace(/51/, c[1])), c[2] && (b = b.replace(/52/, c[2])), 18 == e && (b = b.replace(/'>Join/, GH.Util.addRU() + "'>Join")), b && (0 < e && 16 > e ? a = "cpn" : a = "bucks", f("#gh-eb-sub-li-cpn").addClass("gh-" + a).append("<b class=gh-spr id=gh-" + a + "-ttl></b>" + b + "</li>"))))
            }
        }
    })
})(GH.jQ);
ebayContent["GlobalHeaderWeb/CouponJavascriptContent"] = {
    "0": "",
    1: "",
    2: "Your -C- coupon -A- expires in less than an hour",
    3: "Your -C-51% off coupon-A- expires in less than an hour",
    4: "Your -C-51 off coupon-A- expires in less than an hour",
    5: "Your -C-coupon-A- expires in 51 hours",
    6: "Your -C-51% off coupon-A- expires in 52 hours",
    7: "Your -C-51 off coupon-A- expires in 52 hours",
    8: "Your -C-coupon-A- expires soon",
    9: "Your -C-51% off coupon-A- expires soon",
    10: "Your -C-51 off coupon-A- expires soon",
    11: "You have -C-51 coupons-A-",
    12: "You have a -C-coupon-A-",
    13: "You have a -C-51% off coupon-A-",
    14: "You have a -C-51 off coupon-A-",
    15: "You have -C-coupons-A- available",
    16: "You have earned $51 -B- eBay Bucks-A- as of 51",
    17: "Sign in to see your <b>eBay Bucks</b>",
    18: "Earn up to $51 in eBay Bucks! -J-Join now-A-",
    19: "You'll get your -B- eBay Bucks-A- on 51",
    20: "See eBay Bucks -O-Bonus offers-A-",
    21: "Earn up to $51 in -B-eBay Bucks-A-!",
    22: "Spend your -B-eBay Bucks-A- now!",
    23: "Spend your -B-51-A- in eBay Bucks now!",
    24: "Only 51 days left to spend your -B-Bucks-A-!",
    25: "Only 1 day left to spend your -B-Bucks-A-!",
    26: "Hurry! Your -B-Bucks-A- expire in 51 hours!",
    27: "Hurry! Your -B-Bucks-A- expire in 1 hour!",
    28: "Your -B-Bucks-A- expire in less than an hour!",
    29: "Earn more eBay Bucks with a -O- bonus-A-",
    30: "Shop now to earn -B-eBay Bucks-A-!",
    31: "$51 in eBay Bucks. See -O- Bonus offers-A-",
    32: "You've earned $51 in -B-eBay Bucks-A-!",
    BL10N: '<a href="https://my.ebay.com/ws/eBayISAPI.dll?MyEbayBeta&amp;CurrentPage=Rewards&amp;sspagename=ebaybucksheader"></a>',
    BOL10N: '<a href="http://my.ebay.com/ws/eBayISAPI.dll?MyEbayBeta&amp;CurrentPage=Rewards&amp;sspagename=ebaybucksheader#b_offer"></a>',
    JL10N: '<a href="https://my.ebay.com/ws/eBayISAPI.dll?RewardsIntEnroll&amp;CTASignup=false&amp;ExtLanding=false&amp;ssPageName=ebaybucksheader"></a>',
    CL10N: '<a href="https://my.ebay.com/ws/eBayISAPI.dll?MyeBay&amp;CurrentPage=MyeBayIncentives&amp;gbh=1"></a>'
};
ebayContent["GlobalHeaderWeb/NotificationsJavascriptContent"] = {
    zeroAlertsL10n: "You're all caught up!",
    loginAlertL10n: 'Please <a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;ru=ru" _sp="m570.l2881">sign-in</a> to view notifications.',
    errorAlertL10n: "Notifications are not available at this time",
    alertHeader: "Notifications",
    dataURL: '<a href="http://my.ebay.com/ws/eBayISAPI.dll?GetGHNotificationsCommand"></a>',
    clickURL: '<a href="http://my.ebay.com/ws/eBayISAPI.dll?SetGHNotificationsReadTSCommand"></a>',
    one: "You have ${itemcount} new notification",
    many: "You have ${itemcount} new notifications",
    zero: "Notification",
    timer: "Item ends in ${timeleft}",
    second: "second",
    seconds: "seconds",
    hours: "hours",
    hour: "hour",
    minute: "minute",
    minutes: "minutes",
    removeNotif: "Remove Notification",
    newNotif: "New notification",
    unreadNotif: "Unread notification",
    countDownDay: "d",
    countDownHour: "h",
    countDownMinute: "m",
    countDownSecond: "s",
    countDownEnded: "Ended",
    survey: "Are notifications helpful to you?",
    proxyURL: '<a href="http://gha.ebay.com"></a>',
    latestproxyURL: '<a href="http://www.gha.pp.stratus.ebay.com"></a>'
};
ebayContent["GlobalHeaderWeb/SYMBAnJavascriptContent"] = {
    1: "${itemcount} items need to be paid now",
    3: "${itemcount} items need to be shipped",
    6: "You received ${itemcount} messages",
    7: "${itemcount} items have been shipped",
    loginAlertL10n: '<a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;ru=ru" _sp="m570.l2881">Please <span>sign-in</span> to view notifications.</a>'
};

function GHalertConf() {
    var d = function(a) {
            return "undefined" !== typeof this[a]
        }("localStorage") && null !== localStorage ? localStorage : 0,
        b = GH.Util,
        a = GH.Util.getBundle("NotificationsJavascriptContent"),
        c = GH.Util.getBundle("SYMBAnJavascriptContent"),
        e = {
            pollingFrequency: {
                defaultPolling: GH.userRecog && !GH.userAuth ? 60 : 30,
                aggressivePolling: 10,
                zeroNotifPolling: 180,
                nonActivePolling: -1
            },
            activeFlag: !0,
            bidFlag: !1,
            zeroFlag: !1,
            secListenActivity: 90,
            secWaitActivity: 90,
            waitTimer: "",
            listenUserActivityTimer: "",
            intervalRefreshData: 4,
            countPolling: 0
        },
        c = c.loginAlertL10n || a.loginAlertL10n,
        c = {
            loginUserL10n: GH.Util.getBundle("GreetingsJavascriptContent").profile_loginUserL10n.replace(/&amp;ru=ru/g, "&ru=" + GH.Util.addRU()),
            zeroAlertsL10n: "undefined" !== typeof a.zeroAlertsL10n ? a.zeroAlertsL10n : "",
            loginAlertL10n: "undefined" !== typeof c ? c.replace(/&amp;ru=ru/g, "&ru=" + GH.Util.addRU()) : "",
            errorAlertL10n: "undefined" !== typeof a.errorAlertL10n ? a.errorAlertL10n : "",
            removeNotif: void 0 !== a.removeNotif ? a.removeNotif : "",
            newNotif: void 0 !== a.newNotif ?
                a.newNotif : "",
            survey: a.survey,
            one: a.one,
            many: a.many,
            zero: a.zero,
            timer: a.timer,
            minutes: a.minutes,
            minute: a.minute,
            seconds: a.seconds,
            second: a.second,
            hours: a.hours,
            hour: a.hour
        },
        f = {
            d: a.countDownDay,
            h: a.countDownHour,
            m: a.countDownMinute,
            s: a.countDownSecond,
            e: a.countDownEnded
        },
        b = {
            alertDataURL: b.getSecURL(b.getHref(a.dataURL)),
            alertClickURL: b.getSecURL(b.getHref(a.clickURL)),
            alertL10nURL: b.getSecURL(GH.GH_NOTIF_TMPL_LINK, !0)
        };
    return {
        newalertsasync: 1,
        design: "1",
        lastMinuteNotif: 0,
        secLastMinuteNotif: 300,
        secCountDown: 300,
        groupType: {},
        group: 1,
        minRenderHorizontal: 3,
        fixPDSTimeout: 1,
        polling: e,
        enableLocalStorage: 1,
        undefinedStr: "undefined",
        GHlocalStorage: d,
        messageAlertL10N: c,
        tlf: f,
        alertURL: b,
        refreshAllDataFlag: 0
    }
};
GH.GHN_SURVEY_HTML = "";
GH.GH_NOTIF_TMPL_LINK = "https://ir.ebaystatic.com/cr/v/c1/c4ca4238a0b923820dcc509a6f75849b4.js";
(function() {
    GH.commonAlertTemplate = {
        tmpl_cpn: "<li data-id='#ITEMID#' data-uid='#UID#' data-cpn-code='#C_CODE#' class='ghn-li-itm #NEW#' #P# ><div class='ghn-div-itm coupon-itm #LARGEC#'><div class='ghn-pop-new' tabindex='0' aria-label='#newNotif#'><i class='ghn-new-ic'></i></div><div class='ghn-off'><div class='ghn-div-off'><div class='ghn-div-off__val'>#C_VAL#</div><div class='ghn-div-off__off'>#C_OFF#</div></div></div><div class='ghn-desc'><span class='ghn-desc-t' style=''>#L10N_t# </span><span  class='ghn-desc-o'>#L10N_s#</span><div class='ghn-desc__min'><span class='ghn-desc__min_details'>#L10N_min#</span><a class='ghn-desc__min_see_details' href='#SEE_LNK#' target=\"_blank\">#SEE_LAB#</a></div></div><div class='cpn-btn'><button class='cpn-btn__copy'>#BTN1#</button><div class='cpn-btn__conf hid'><button class='cpn-btn__copied'><svg aria-hidden='true' class='svg-icon'><use xlink:href='#icon-check'></use></svg>#BTN2#</button></div></div></div><button aria-label='#rmv#' class='ghn-pop-rmv'><i class='ghn-pop-rmv-ic'></i></button></li>"
    }
})();

function GHalertServiceConf() {
    var b = GH.Util,
        a = GH.Util.getBundle("NotificationsJavascriptContent"),
        a = GH.Util.getBundle("NotificationsJavascriptContent"),
        c = GH.Util,
        f = {
            3: "en-GB",
            77: "de-DE",
            23: "fr-FR",
            123: "nl-BE",
            212: "pl-PL",
            146: "nl-NL",
            201: "zh-HK",
            16: "de-DE",
            193: "de-DE",
            203: "en-IN",
            71: "fr-FR",
            186: "es-ES",
            101: "it-IT",
            2: "en-CA",
            210: "fr-CA",
            15: "en-AU",
            215: "ru-RU",
            22: "ru-RU",
            107: "ru-RU",
            12: "es-CO",
            28: "es-CO",
            44: "es-CO",
            46: "es-CO",
            51: "es-CO",
            60: "es-CO",
            61: "es-CO",
            63: "es-CO",
            85: "es-CO",
            91: "es-CO",
            136: "es-CO",
            150: "es-CO",
            158: "es-CO",
            160: "es-CO",
            214: "es-CO",
            225: "es-CO",
            252: "es-CO",
            248: "es-CO",
            31: "pt-BR",
            213: "pt-BR",
            223: "zh-CN"
        },
        d = GH.C.siteId,
        e = "";
    "qa" === GH.GHSW.pool || "dev" === GH.GHSW.pool ? a = c.getSecURL(c.getHref(a.proxyURL)) : "latest" === GH.GHSW.pool ? (a = c.getSecURL(c.getHref(a.latestproxyURL)), a = a.replace("latest.", "")) : a = c.getSecURL(c.getHref(a.proxyURL));
    b = {
        alertDataURL: b.getSecURL(a + "/nproxy/notification/v1/getNotification?variation=dweb&GH"),
        alertClickURL: b.getSecURL(a + "/nproxy/notification/v1/setNotification?GH"),
        alertL10nURL: b.getSecURL("undefined" !== typeof GHN_TMPL_CONF ? GHN_TMPL_CONF : GH.GH_NOTIF_TMPL_LINK, !0)
    };
    void 0 !== GH.C.lng && "en-US" !== GH.C.lng ? e = "&lang=" + GH.C.lng : void 0 !== d && void 0 !== f[d] && (e = "&lang=" + f[d]);
    b.alertDataURL += e;
    return {
        alertURL: b,
        ajaxProperties: {
            dataType: "jsonp",
            jsonp: !1,
            jsonpCallback: "GH_alertData",
            cache: !1,
            timeout: 2500
        },
        ajaxUpdateProperties: {
            dataType: "jsonp",
            jsonp: !1,
            jsonpCallback: "GH_alertData",
            cache: !1,
            timeout: 1500
        },
        retryAjaxUpdate: 3,
        backendDomain: a,
        group: 1,
        tracking: {
            OUTBID: 34,
            BIDITEM: 35,
            WATCHITM: 36,
            SHOPCARTITM: 37,
            ITMWON: 38,
            ITMSOLD: 39,
            COCMPLT: 40,
            ITMSHPD: 41,
            BESTOFR: 42,
            BODECLND: 43,
            CNTROFFR: 44,
            BOACCPTD: 45,
            COACCPTED: 46,
            CODECLND: 47,
            OFREXPIRED: 48,
            OFRDCLNDACPT: 49,
            OFRRETRACTED: 50,
            MSGM2MMSGHDR: 51,
            1: 52,
            3: 53,
            6: 54,
            7: 55,
            UCI: 56,
            SVDSRCH: 57,
            TargetedCoupons: 58,
            SellerInitiatedOffer: 59
        },
        trackingUserType: {
            CNTROFFR: {
                B: 101,
                S: 102
            },
            COACCPTED: {
                B: 103,
                S: 104
            },
            CODECLND: {
                B: 105,
                S: 106
            }
        },
        STATUS: {
            NEW: 1,
            READ: 2,
            DELETED: 4,
            1: "NEW",
            2: "READ",
            4: "DELETED"
        },
        countdownType: {},
        secCountDown: 900,
        refreshAllDataFlag: 0,
        updateNewItemHTML: 1,
        enablePagination: 1,
        percentPagination: 20,
        maxLoadOldNotificaiton: 4,
        NOTIFTYPE: {
            notif: "NOTIFICATION",
            msg: "REMINDER"
        }
    }
};
(function(g) {
    var h = [],
        d = {
            ITMWON: "1",
            COCMPLT: "3",
            MSGM2MMSGHDR: "6",
            ITMSHPD: "7"
        },
        e = 0,
        c = {},
        f = 0;
    totalCurrentTypeCount = 0;
    GH.alertsGroup = {
        init: function(a) {
            e = a.group;
            h = GH.Util.getBundle("SYMBAnJavascriptContent");
            this.resetGroupItems()
        },
        getTotalCurrentTypeCount: function() {
            return totalCurrentTypeCount
        },
        setTotalCurrentTypeCount: function(a) {
            totalCurrentTypeCount = a
        },
        getTotalTypeCount: function() {
            return f
        },
        getGroup: function() {
            return e
        },
        setGroup: function(a) {
            e = a
        },
        deleteGroupItem: function(a) {
            a = d[a.mdnsName];
            totalCurrentTypeCount -=
                c[a].count;
            c[a] = {
                count: 0,
                total: 0,
                notificationId: void 0,
                isShown: !1,
                isDeleted: !0,
                shouldGroup: !1
            }
        },
        getGroupNotif: function() {
            return c
        },
        getGroupId: function(a) {
            return d[a]
        },
        getCount: function(a) {
            return c[d[a]].count
        },
        getTotal: function(a) {
            return c[d[a]].total
        },
        shouldRemoveItem: function(a) {
            var b;
            if (!e) return !1;
            b = d[a.mdnsName];
            if (void 0 === b) return !1;
            if (c[b].isDeleted) return !0;
            c[b].count++;
            totalCurrentTypeCount++;
            if (!c[b].shouldGroup) return !1;
            if (c[b].isShown) return !0;
            c[b].isShown = !0;
            c[b].notificationId = a.notificationId;
            a.ghGroup = "" + b;
            return !1
        },
        getContent: function(a) {
            var b = h[this.getGroupId(a)],
                a = this.getTotal(a);
            return GH.Util.mergeContent(b, {
                itemcount: "<span class='ghn-o-g-num'>" + a + "</span>"
            })
        },
        isItemGroup: function(a) {
            if (!e || void 0 === a) return !1;
            a = d[a];
            return void 0 === a ? !1 : c[a].shouldGroup
        },
        isItemCoupon: function(a) {
            return "TargetedCoupons" === a.mdnsName
        },
        filterGroup: function(a) {
            return g.grep(a, function(a) {
                return void 0 !== d[a.mdnsName]
            })
        },
        resetGroupItems: function() {
            g.each(d, function(a, b) {
                c["" + b] = {
                    count: 0,
                    total: 0,
                    notificationId: void 0,
                    isShown: !1,
                    isDeleted: !1,
                    shouldGroup: !1
                }
            });
            totalCurrentTypeCount = f = 0
        },
        updateGroupItem: function(a) {
            var b = d[a.mdnsName];
            c[b].total += a.totalCountByEvent;
            f += c[b].total;
            3 <= c[b].total && (c[b].shouldGroup = !0)
        },
        setGroupItems: function(a) {
            if (e && void 0 !== a) {
                var b = this,
                    a = b.filterGroup(a);
                this.resetGroupItems();
                g.each(a, function(a, c) {
                    b.updateGroupItem(c)
                })
            }
        }
    }
})(GH.jQ);

function GHalertObjData(e, M) {
    var i = M.Conf,
        E = function(a) {
            return (void 0 !== a || void 0 !== a.errorMessage) && void 0 !== a.errorMessage && void 0 !== a.errorMessage.error ? a.errorMessage.error : !1
        },
        X = i.ajaxUpdateProperties,
        o = {},
        t = GH.alertsGroup,
        s = i.alertURL,
        C = void 0,
        m = i.undefinedStr,
        v = i.STATUS,
        Y = i.NOTIFTYPE,
        x = M.Util,
        F = 0,
        Z = i.tracking,
        j = {},
        $ = i.countdownType,
        G = -1,
        n = "",
        d = void 0,
        y = !1,
        N = !1,
        O = -1,
        H = function(a) {
            return a.notificationType !== Y.notif || typeof Z[p(a)] === m ? !1 : !0
        },
        P = function(a) {
            return v[a.status] == v.NEW || a.popup ?
                !0 : !1
        },
        z = function(a) {
            var b = 0,
                c = function(a) {
                    var a = E(a),
                        c = !1;
                    !1 !== a && (e.each(a, function(a, b) {
                        if ("RETRY" === b.actionToTake) return c = !0, !1
                    }), c && (b++, f()))
                },
                g = function() {
                    b++;
                    f()
                },
                l = e.extend(X, {
                    success: c,
                    error: g
                }),
                f = function() {
                    b < i.retryAjaxUpdate && e.ajax(a, l)
                };
            return {
                put: f,
                successCB: c,
                errorCB: g
            }
        },
        A, B = !1,
        Q = function(a, b) {
            B = !1;
            d = void 0;
            y = !1;
            e(a).off("scroll.ghn-pagination");
            e(a + " li.ghn-o-l").remove();
            void 0 !== b && b(e(a + " li").length)
        };
    A = {
        getIsLoading: function() {
            return B
        },
        getOldNotification: function(a, b, c, g,
            l, f) {
            B || (B = !0, ajaxProperties = e.extend(i.ajaxProperties, {
                success: function(k) {
                    var h = 0;
                    !1 !== E(k) ? Q(b, f) : (F++, k.notifications = e.grep(k.notifications, function(a) {
                        return !GH.alertsGroup.shouldRemoveItem(a)
                    }), h = k.notifications.length, c ? g(k, c) : (k.notifications = e.grep(k.notifications, function(a) {
                        return !H(a) ? !1 : !0
                    }), a = a.concat(k.notifications)), d = void 0 !== k.next ? i.backendDomain + k.next : void 0, F >= i.maxLoadOldNotificaiton && (d = void 0, e(b).off("scroll.ghn-pagination"), y = !1), setTimeout(function() {
                        B = !1;
                        (void 0 !== GH.alerts.getData() &&
                            6 >= GH.alerts.getData().length || 0 === h) && void 0 !== d ? A.getOldNotification(a, b, c, g, l, f) : void 0 !== l && l(a)
                    }, 500))
                },
                error: function() {
                    Q(b, f)
                }
            }), e.ajax(s.alertDataURL + R(d), ajaxProperties))
        }
    };
    var R = function(a, b) {
            var c = a.split("?");
            return b ? c[1] : "&" + c[1]
        },
        S = function(a, b) {
            var c;
            if (void 0 === a.notifications)
                if (void 0 === a.errorMessage && void 0 !== a.d) a.notifications = a.d;
                else return;
            GH.alertsGroup.setGroupItems(a.eventInformation);
            C = a.badgeCount;
            c = a.notifications;
            if (0 == c.length || 0 == a.total) return c;
            n = a.latestNotificationTime.value;
            G = (new Date(a.latestNotificationTime.value)).getTime() / 1E3;
            currentNumberItems = c.length - C;
            void 0 !== a.next && (d = i.backendDomain + a.next);
            return e.grep(c, function(a) {
                return !H(a) || GH.alertsGroup.shouldRemoveItem(a) || typeof b[a.i] !== m ? !1 : !0
            })
        },
        p = function(a) {
            return "" + a.mdnsName
        },
        T = function(a) {
            return GH.alertsGroup.isItemCoupon(a)
        },
        U = function(a) {
            if (void 0 !== a.e && !isNaN(a.e) && null !== a.e) return a.e;
            try {
                if (a.e = (new Date(a.subject.listing.scheduledEndDate.value)).getTime() / 1E3, isNaN(a.e) || null === a.e) return
            } catch (b) {
                return
            }
            return a.e
        },
        D = function(a) {
            return "MSGM2MMSGHDR" === p(a) ? a.subject.message.messageId : "undefined" !== typeof a.subject.listing ? a.subject.listing.listingId : ""
        },
        q = function(a) {
            return null == a || "undefined" == typeof a ? !1 : !0
        },
        I = function(a) {
            return q(a) && "SellerInitiatedOffer" === p(a)
        },
        V = function(a) {
            return I(a) && q(a.subject) && q(a.subject.listing) ? a.subject.listing.bestOfferId : ""
        },
        J = function(a) {
            if (I(a) && q(a.subject) && q(a.subject.listing)) return a.subject.listing.siov2
        },
        K = function(a) {
            return J(a) && q(a.subject) && q(a.subject.listing) ?
                a.subject.listing.negotiationId : "-1"
        },
        L = function(a) {
            return v[a.status]
        },
        W = function(a, b) {
            return "http" + (a ? "s" : "") + "://" + (a & !GH.C.qapool ? "secureimg" : "i") + (GH.C.qapool ? ".qa" : "") + ".ebayimg.com/images/i/" + b + "-0-0/s-l67/p.jpg"
        };
    t.init(i);
    return {
        PUTWrapper: z,
        getBucket: function() {
            return j
        },
        resetBucket: function() {
            j = {}
        },
        isZeroFlag: function(a) {
            return 0 === (void 0 === a.notifications ? a.d.length : a.notifications.length) ? !0 : !1
        },
        convertItemType: function(a) {
            var b = !1,
                c;
            typeof a.d !== m ? (c = a.d, b = !0) : c = a;
            return b ? (a.d = c, a) :
                c
        },
        processNotifData: function(a, b, c) {
            b = S(a, c);
            void 0 !== a.groupCurrentCount && GH.alertsGroup.setTotalCurrentTypeCount(a.groupCurrentCount);
            return b
        },
        getItemKey: p,
        isItemCoupon: T,
        getItemKeyName: function(a) {
            return "" + a.name
        },
        getItemId: D,
        getItemCreatedTime: function(a) {
            if (void 0 !== a.ct) return a.ct;
            try {
                a.ct = (new Date(a.creationDate.value)).getTime()
            } catch (b) {
                return
            }
            return a.ct
        },
        getItemEndTime: U,
        getItemGroup: function(a) {
            return GH.alertsGroup.getGroupId(a.mdnsName)
        },
        getItemStatus: L,
        isGroup: function(a) {
            return t.isItemGroup(a.mdnsName)
        },
        setItemStatus: function(a, b) {
            a.status = v["" + b];
            return a
        },
        isValidObject: q,
        isItemSIO: I,
        getOfferId: V,
        isSIOV2: J,
        getNegotiationId: K,
        getUniqueId: function(a) {
            return a.notificationId
        },
        sortData: function(a) {
            return a
        },
        addPrToData: function(a) {
            return a
        },
        isNewOrPopUp: P,
        isZeroData: function(a) {
            return 0 === (void 0 === a.notifications ? a.d.length : a.notifications.length) ? !0 : !1
        },
        isNewDataValid: function(a) {
            if ("undefined" !== typeof a) return a = void 0 === a.notifications ? a.d : a.notifications, typeof a === m || "object" !== typeof a ? !1 : !0
        },
        updateBucket: function(a) {
            var b;
            void 0 !== a.g && (b = "" + a.g, typeof j[b] === m ? j[b] = {
                c: 1,
                n: 0,
                t: a.ct
            } : (j[b].c++, j[b].t < a.ct && (j[b].t = a.ct)), P(a) && (j[b].n = 1))
        },
        verifyNewData: function(a, b, c, g) {
            var l = !1;
            C = b.badgeCount;
            void 0 !== b.latestNotificationTime && (n = b.latestNotificationTime.value, G = (new Date(b.latestNotificationTime.value)).getTime() / 1E3);
            b = b.notifications;
            b = e.grep(b, function(b) {
                return !H(b) ? (a = e.grep(a, function(a) {
                        if (a.notificationId != b.notificationId) return !0;
                        l = !0;
                        return !1
                    }), !1) : typeof c[b.notificationId] !==
                    m ? !1 : !0
            });
            l && g();
            return b
        },
        isDuplicate: function(a, b, c) {
            if (c && void 0 !== c) {
                if (a.notificationId == b.notificationId) return !0
            } else if (a.notificationId == b.notificationId && a.popup == b.popup && p(a) == p(b) && L(a) == L(b)) return !0;
            return !1
        },
        decreseBucket: function(a) {
            void 0 !== a.g && j["" + a.g].c--
        },
        createOverlyHtml: function(a, b, c) {
            var g, l = a.length,
                f, e = x.getCurrentTime(),
                h = "";
            for (f = 0; f < l; f++) g = !1, GH.alertsGroup.isItemGroup(a[f].mdnsName) ? (g = !0, h += b(a[f], 1, e, 1)) : h = GH.alertsGroup.isItemCoupon(a[f]) ? h + b(a[f], 3, e) : h + b(a[f],
                0, e), c(a[f], g);
            return h
        },
        setTmplL10N: function(a) {
            o = a
        },
        getParamMap: function(a, b, c) {
            var g = !1,
                l = GH.Util.isTouchDevice(),
                f = "",
                k = "&transactionId",
                c = p(a),
                h = c + "l",
                d = c + "lp",
                j = "",
                q = "ghn-cd",
                n = "MSGM2MMSGHDR" === p(a) ? !0 : !1,
                s, r;
            r = "";
            r = "https:" == document.location.protocol ? !0 : !1;
            var u, w, c = t.isItemGroup(a.mdnsName);
            void 0 !== a.subject.listing && (u = a.subject.listing);
            typeof b === m && (b = x.getCurrentTime());
            n || "" === D(a) ? (s = a.notificationURL, n && (w = a.subject.message, "undefined" === typeof w.listingId ? g = !0 : s = W(r, w.listingId))) :
                s = W(r, D(a));
            void 0 !== a.buyerNotification && null !== a.buyerNotification && (a.buyerNotification ? (void 0 !== o[h + "_B"] && (h += "_B"), void 0 !== o[d + "_B"] && (d += "_B")) : (void 0 !== o[h + "_S"] && (h += "_S"), void 0 !== o[d + "_S"] && (d += "_S")));
            typeof $[p(a)] !== m && !c && (r = U(a), void 0 !== r && (j = x.getTimeDiff(r, b), j === x.tlf.e ? (r = x.tlf.e, j = "<div class='ghn-cd-div'><span  class='" + (q + " ghn-cd-end") + "'>" + r + "</span></div>") : (b = "<span class='ghn-acc-txt'>" + i.messageAlertL10N.timer + "</span>", r = "<span class='ghn-cd-sub0' aria-hidden='true'>" +
                j.t0 + "</span><span class='ghn-acc-txt ghn-cd-sub1'>" + j.t1 + "</span>", j = "<div class='ghn-cd-div'>" + GH.Util.mergeContent(b, {
                    timeleft: "<span  class='" + q + "'>" + r + "</span>"
                }) + "</div>")));
            "ITMSHPD" === p(a) && (k = "&transId");
            c ? (f = t.getContent(a.mdnsName), h = t.getGroupId(a.mdnsName)) : typeof a.content !== m && (f = a.content.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
            J(a) && "-1" !== K(a) && void 0 !== o[h + "_S"] && (h += "_S", d += "_S");
            g = {
                "#L10N_t#": typeof a.shortTitle.content !== m ? a.shortTitle.content.toUpperCase().replace(/</g, "&lt;").replace(/>/g,
                    "&gt;") : "",
                "#LINK#": o[h] || o.iLink,
                "#LINKP#": o[d] || o.iLink,
                "#L10N_s#": f,
                "#L10N_d#": "",
                "#L10N_a#": "",
                "#iLink#": o.iLink,
                "#IC#": "",
                "#TOUCH#": l ? "ghn-touch" : "",
                "#UI#": void 0 !== a.group ? "ghn_" + a.group : "",
                "#TRID#": void 0 !== u && typeof u.transactionId !== m ? k + "=" + a.subject.listing.transactionId : "",
                "#TRID_e#": void 0 !== u && typeof u.transactionId !== m ? "-" + a.subject.listing.transactionId : "",
                "#GROUPID#": c ? t.getGroupId(a.mdnsName) : "",
                "#TYPE#": n ? "ghn_msg" : "",
                ghn_msg: g ? "ghn_msg ghn_avt" : "ghn_msg",
                "#NEW#": v[a.status] == v.NEW ?
                    "ghn-new" : "",
                "#ITEMID#": D(a),
                "#UID#": a.notificationId,
                "#OFFERID#": V(a),
                "#NEGOID#": K(a),
                "#DIFF#": j,
                "#NUM#": c ? t.getTotal(a.mdnsName) : "",
                "#imgsrc#": "#src#' alt='",
                "#src#": s,
                "ghn-i": n ? "'ghn-i ghn-i-m'" : "ghn-i",
                "#MSGID#": n ? w.messageId : ""
            };
            T(a) && (l = this.getObjectValue(a.additionalText, "COUPON_VALUE"), f = this.getObjectValue(a.additionalText, "COUPON_OFF"), k = this.getObjectValue(a.additionalText, "SEE_DETAILS"), h = this.getObjectValue(a.additionalText, "SEE_DETAILS", "url"), u = this.getObjectValue(a.additionalText,
                "CONDITION"), w = a.action.title.content, c = a.action.fallbackName, a = a.action.fallbackURL, d = "", 4 < f.length && (d = "large-c4", 6 < f.length && (d = "large-c6")), e.extend(g, {
                "#C_VAL#": l,
                "#C_OFF#": f,
                "#SEE_LAB#": k,
                "#SEE_LNK#": h,
                "#L10N_min#": u,
                "#BTN1#": w,
                "#BTN2#": c,
                "#C_CODE#": a,
                "#LARGEC#": d
            }));
            return g
        },
        getObjectValue: function(a, b, c) {
            var c = "undefined" !== typeof c ? c : "content",
                a = a.find(function(a) {
                    return a.name === b
                }),
                g = "";
            null !== a && "object" === typeof a && (g = "undefined" !== typeof a[c] ? a[c] : "");
            return g
        },
        isSYMBAnError: E,
        getTotalNumNotifs: function() {
            return C
        },
        getServiceName: function() {
            return "proxy"
        },
        isShowTimeDiff: function() {
            return !1
        },
        isTransactionNotValid: function() {
            return !1
        },
        isHubCampaign: function(a) {
            return a && a.subject && a.subject.campaign
        },
        getActionUrl: function(a) {
            var b = "";
            a && (a.action && a.action.title && a.action.title.content) && (b = a.action.title.content);
            return b
        },
        sendUpdateViewItem: function(a) {
            z(s.alertClickURL + "&op=1&ts=" + n).put();
            a.badgeCount = 0
        },
        sendDeleteItems: function(a, b) {
            var c = void 0;
            e.each(a, function(a, d) {
                !1 !== d ? z(s.alertClickURL + "&op=3&n=" +
                    d + "&ts=" + n).put() : (c = void 0 === c ? a : c + "," + a, d <= O && O--);
                b[a] = d
            });
            void 0 !== c && z(s.alertClickURL + "&op=0&i=" + c + "&ts=" + n).put();
            return b
        },
        conf: i,
        getLastUpdateTimeStamp: function() {
            return G
        },
        sendSetItemNew: function(a) {
            z(s.alertClickURL + ("&op=2&ts=" + n + "&i=" + a.notificationId)).put()
        },
        setPopup: function(a, b) {
            a.popup = b;
            return a
        },
        setPopupShow: function(a) {
            a.popup = !1;
            return a
        },
        clickPopUp: function(a, b) {
            b()
        },
        isPopUp: function(a) {
            return a.popup ? !0 : !1
        },
        isBidFlag: function(a) {
            return "BIDITEM" === p(a) ? !0 : !1
        },
        addNewData: function(a,
            b, c) {
            void 0 !== c && c ? a.push(b) : a.unshift(b)
        },
        handleNewNotif: function(a, b) {
            e.isArray(b) && (b.length = 0);
            F = 0;
            return S(a, {})
        },
        addScrollEvent: function(a, b) {
            i.enablePagination && void 0 !== d && (y = !0, e(a).on("scroll.ghn-pagination", function() {
                var c = e(a),
                    g = c[0].scrollHeight - c.scrollTop() - c.height(),
                    c = Math.floor(100 * (g / c[0].scrollHeight));
                A.getIsLoading() || (void 0 === d ? (e(a).off("scroll.ghn-pagination"), y = !1) : (c <= i.percentPagination || N) && A.getOldNotification(void 0, a, !0, b))
            }))
        },
        getNextURL: function(a) {
            return void 0 ===
                d ? d : a ? d.replace(i.backendDomain, "") : d
        },
        setNextURL: function(a) {
            d = a
        },
        getIsScrollEventAdded: function() {
            return y
        },
        getNexParamsFromURL: R,
        loadMoreNotifs: function(a, b, c, g, e) {
            void 0 !== d ? A.getOldNotification(a, b, !1, c, g, e) : g()
        },
        isHandleNotifNeedUpdated: function() {
            return !0
        },
        setForceScrolling: function(a) {
            N = a
        }
    }
};

function GH_alertData() {}

function GHalertObj(e, Ua, Va) {
    var c = e.jQ,
        P = Va(Ua, c),
        g = GHalertObjData(c, P),
        pa = g.isNewDataValid,
        Ea = g.setNextURL,
        G = g.getNextURL,
        Wa = g.getItemKey,
        x = g.getUniqueId,
        Fa = g.getItemId,
        Ga = g.getItemEndTime,
        Xa = g.isDuplicate,
        qa = g.setItemStatus,
        ra = g.isNewOrPopUp,
        Q = g.loadMoreNotifs,
        Ya = g.getItemKeyName,
        Ha, B, t, Ia, i = null,
        ba = "",
        ca = "",
        C = null,
        R = null,
        Ja = null,
        H = 0,
        Za = P.Const,
        m = g.conf,
        $a = m.GHlocalStorage,
        o = m.undefinedStr,
        n = P.Util,
        p = P.Tracking(m, g),
        ab = P.Storage,
        bb = Za.TITLE,
        sa = m.newalertsasync,
        da = m.design,
        u = {
            size: 115,
            startPosition: c("#gh").outerHeight(),
            position: c("#gh").outerHeight(),
            count: 0
        },
        S = m.lastMinuteNotif,
        cb = m.countdownType,
        Ka = m.secCountDown,
        T = m.STATUS,
        y = m.messageAlertL10N,
        db = void 0 !== m.tlf.e ? m.tlf : void 0,
        ea = {
            2: e.Util.addSignin(y.loginAlertL10n),
            4: y.zeroAlertsL10n,
            6: y.errorAlertL10n,
            3: y.errorAlertL10n
        },
        I = m.alertURL,
        ta = "0",
        fa = m.refreshAllDataFlag,
        f = m.polling,
        ua = f.secWaitActivity,
        ga = {},
        d = null,
        U = [],
        l = null,
        va = null,
        V = 0,
        r = {},
        ha = {},
        w = !1,
        wa = !1,
        W = !1,
        ia = null,
        s = null,
        D = {},
        J = {},
        La, q = 0,
        X = -1,
        K = -1,
        xa = !1,
        Y = !1,
        ja = !1,
        eb = void 0 !== y.survey ? y.survey : "",
        Ma = e.GHN_SURVEY_HTML ?
        e.Util.addPrefixPoolURL(e.GHN_SURVEY_HTML.replace("#DESIGN#", "2" === da ? "Priority" : "Recency").replace("#SVTXT#", eb)) : "",
        E = !~~(100 * Math.random()),
        Na = typeof JSON === o ? 0 : m.enableLocalStorage,
        j = $a && n.isLocalStorageSupported && Na ? ab : null,
        Z = !1,
        A = function(a) {
            typeof a !== o ? ga = setTimeout(L, 1E3 * a) : (a = 30, xa || (a = ka(), 0 <= a && (ga = setTimeout(L, 1E3 * a))))
        },
        L = function() {
            var a = 103;
            if (w)
                if (Ja()) A(3);
                else {
                    E && (f.zeroFlag ? a = 104 : f.activeFlag ? f.bidFlag && (a = 102) : a = 101, e.userAuth && (a += 10), e.Util.cTImg(e.ghiIMP + a));
                    f.countPolling++;
                    if (0 === f.countPolling % f.intervalRefreshData || fa)
                        if (void 0 === fa || fa) X = -1, ta = "1";
                    a = c.extend(m.ajaxProperties, {
                        success: function(a) {
                            X = g.getLastUpdateTimeStamp();
                            K = n.getCurrentTime();
                            if ("undefined" === typeof a || pa(a)) "undefined" !== typeof a && ("1" === ta ? (M(a), fa || (ta = "0")) : !1 === g.isSYMBAnError(a) && Oa(a)), A()
                        }
                    });
                    c.ajax(I.alertDataURL + "&up=1&ts=" + X, a)
                }
            else A()
        },
        ka = function() {
            var a = 30,
                b = typeof f !== o ? f.pollingFrequency : 0;
            b && (a = f.activeFlag ? f.bidFlag ? b.aggressivePolling : f.zeroFlag ? b.zeroNotifPolling : b.defaultPolling :
                b.nonActivePolling);
            return a
        },
        v = function(a, b) {
            var c = 30,
                h;
            j && (a ? (h = K - j.timestamp, c = ka(), 0 > h || 0 > K || (0 > c && (c = 0), j.timestamp = K + c), b ? j.setDataLocalStorage(s, d, !0) : j.setDataLocalStorage(s, d, !1)) : j.setDataLocalStorage(s, d, !0))
        },
        la = function() {
            c(document).one("mousemove.ghn keydown.ghn", function() {
                clearTimeout(f.listenUserActivityTimer);
                clearTimeout(f.waitTimer);
                f.waitTimer = setTimeout(la, 1E3 * ua);
                f.activeFlag || (E && e.Util.cTImg(e.ghiIMP + 86), clearTimeout(ga), L());
                f.activeFlag = !0
            });
            f.listenUserActivityTimer = setTimeout(function() {
                f.activeFlag = !1;
                E && e.Util.cTImg(e.ghiIMP + 85)
            }, 1E3 * f.secListenActivity)
        },
        Pa = function() {
            var a;
            q = 0;
            g.resetBucket();
            for (a in r) typeof r[a] !== o && clearInterval(r[a].id);
            for (a in ha) clearInterval(ha[a]);
            f.waitTimer = setTimeout(la, 1E3 * ua)
        },
        ma = function() {
            null !== d && (c.each(d, function(a) {
                ra(d[a]) && (d[a] = qa(d[a], T.READ))
            }), 0 < q && g.sendUpdateViewItem(s), v(!1), q = 0, N(q))
        },
        ya = function(a) {
            var b;
            b = n.getCurrentTime();
            var c;
            typeof cb[Wa(a)] !== o && (b = Ga(a) - b, c = 1E3 * (b - Ka), b >= Ka ? setTimeout(function() {
                F(function() {
                    Qa(a)
                })
            }, c) : F(function() {
                Qa(a)
            }))
        },
        Ra = function(a) {
            var b = "data-id",
                k = x(a),
                a = Fa(a);
            C() && (k != a && (b = "data-uid"), c(B + " li[" + b + "=" + k + "] .ghn-cd").addClass("ghn-lm ghn-cd-end").text(n.tlf.e))
        },
        Qa = function(a) {
            var b = x(a),
                k = Fa(a),
                h = Ga(a);
            typeof r["" + b] !== o && (clearInterval(r["" + b].id), delete r["" + b]);
            n.getTimeDiff(h) == n.tlf.e ? Ra(a) : (g.isBidFlag(a) && (f.bidFlag = !0), r["" + b] = {
                id: setInterval(function() {
                    var e = n.getTimeDiff(h),
                        d = "data-id",
                        i = "ghn-lm";
                    C() && (b != k && (d = "data-uid"), e == n.tlf.e ? c(B + " li[" + d + "=" + b + "] .ghn-cd").addClass(i + " ghn-cd-end").text(e) :
                        c(B + " li[" + d + "=" + b + "] .ghn-cd").addClass(i).find(".ghn-cd-sub0").text(e.t0).end().find(".ghn-cd-sub1").text(e.t1));
                    if (e == n.tlf.e)
                        if (Ra(a), clearInterval(r["" + b].id), delete r["" + b], c.isEmptyObject(r)) f.bidFlag = !1;
                        else
                            for (d in f.bidFlag = !1, r)
                                if (g.isBidFlag(r[d].item)) {
                                    f.bidFlag = !0;
                                    break
                                }
                }, 1E3),
                item: a
            })
        },
        za = function(a) {
            "true" !== e.GHSW.NEWALERT_POPUPOFF && g.isPopUp(a) && (c(ba + ca).length ? setTimeout(function() {
                za(a)
            }, 3E3) : (a = g.setPopupShow(a), F(function() {
                var b = a,
                    k = $(b, 2),
                    k = c("<div class='ghn-pop-wrap'>" +
                        k + "</div>"),
                    h = "#ghn-pop-" + x(b),
                    d = !1,
                    f = !1;
                e.Util.cTImg(e.ghiIMP + 54 + "&_trkparms=" + p.rowTrack("gh1g", b));
                0 < c(h).length && c(h).parent().hide("slow").remove();
                c(ba + ca).length ? O() : (c(k).appendTo("body"), c.fn.ghellipsis && c(h + " .ghn-desc-o").ghellipsis({
                    row: 2
                }), c(k).css({
                    top: u.position + "px"
                }).animate({
                    right: "0px"
                }, function() {
                    c(ba + ca).length && O()
                }), c(h + " img.ghn-i").each(function(a, b) {
                    n.createImage(b)
                }), b = qa(b, T.NEW), Z || (g.sendSetItemNew(b), Z = !0), c(h + " .ghn-pop-rmv").on("click", function(a) {
                    O(h);
                    e.Util.cTImg(e.ghiIMP +
                        55 + "&_trkparms=" + p.rowTrack("gh1g", b));
                    a.stopPropagation();
                    return !1
                }), c(h + " a.ghn-a-itm").click(function(a) {
                    var k = c(this).attr("href");
                    a.preventDefault();
                    g.clickPopUp(b, function() {
                        e.Util.redirect(k)
                    });
                    setTimeout(function() {
                        e.Util.redirect(k)
                    }, 2E3);
                    e.Util.redirect(k)
                }), c(h).hoverIntent({
                    over: function() {
                        d = !0
                    },
                    out: function() {
                        d = !1;
                        f && O(h)
                    },
                    sensitivity: 1,
                    interval: 150
                }), setTimeout(function() {
                    d || (O(h), e.Util.cTImg(e.ghiIMP + 56 + "&_trkparms=" + p.rowTrack("gh1g", b)));
                    f = !0
                }, 7E3), u.count++, u.position += u.size)
            })))
        },
        O = function(a) {
            typeof a === o ? (c(".ghn-pop-wrap").remove(), u.count = 0, u.position = u.startPosition) : c(a).stop(!0, !0).fadeOut("slow", function() {
                c(this).parent().remove();
                u.count--;
                0 === u.count && (u.position = u.startPosition)
            })
        },
        N = function(a) {
            var b = y.many,
                k = ("" + a).length,
                k = 3 < k ? 3 : k,
                h = i && i.ghEBAlerts_id || this.ghEBAlerts_id,
                g = i && i.ebAClass || this.ebAClass,
                d = "undefined" === typeof newNotifFlag ? 0 < k : newNotifFlag;
            c(h + " i.ghn-num").remove();
            a ? (c(h + " " + g).append("<i aria-hidden='true' " + (d ? "class='ghn-new ghn-num'" : "class=' ghn-num'") +
                " id=gh-eb-Alerts-n" + k + ">" + (99 < a ? "99+" : a) + "</i>"), 1 == a && (b = y.one), b = e.Util.mergeContent(b, {
                itemcount: a
            })) : (k = 0, b = y.zero);
            c("#gh-Alerts-i").text(b);
            c("#gh-Alerts-i").parent().attr("aria-label", b);
            c(h).removeClass(" gh-eb-Alerts-tab-0 gh-eb-Alerts-tab-1 gh-eb-Alerts-tab-2 gh-eb-Alerts-tab-3").addClass(" gh-eb-Alerts-tab-" + k)
        },
        na = function(a, b) {
            c.each(d, function(a, b) {
                p.addTotalByTrackId(b, g.isGroup(b));
                ra(b) && q++;
                ya(b);
                za(d[a])
            });
            v(!0, !0);
            C() && (!R() && b) && z()
        },
        M = function(a) {
            Y = Z = !1;
            Pa();
            void 0 !== a && void 0 !==
                a.currentTimeDiff && n.setCurrentTimeDiff(a.currentTimeDiff);
            s = a;
            Ea(void 0);
            q = 0;
            wa = !0;
            if (typeof a === o || void 0 !== a.errorMessage) void 0 !== a && (void 0 !== a.errorMessage && void 0 !== a.errorMessage.error[0]) && (La = a.errorMessage.error[0].errorId), w = !1;
            else if (f.zeroFlag = g.isZeroFlag(a), d = g.processNotifData(a, d, J), d.length <= H && m.group && "function" === typeof Q && void 0 !== G(!0) ? Y = !0 : na(S, !0), v(!0, !0), w = !0, a = g.getTotalNumNotifs(), void 0 !== a && (q = a), newNotifFlag = q, C() && !R() && z(), !p.dataloadSojDropped && (a = "%26gh1g%3dT" +
                    d.length, a += ".N" + q, a += p.getSojItemsStr())) p.dataloadSojDropped = 1, 0.1 >= Math.random() && e.Util.cTImg(e.ghiIMP + 1 + a);
            N(q)
        },
        $ = function(a, b, c, h) {
            var d, f, b = [l.tmpl_i, l.tmpl_g, l.tmpl_p, l.tmpl_cpn][b],
                b = !h && g.isShowTimeDiff(a) ? b.replace("#H#", l.s0h) : b.replace("#H#", ""),
                b = h ? b.replace("#BMI#", "<div class='ghn-bmi'></div>") : b.replace("#BMI#", ""),
                b = b.replace("#rmv#", y.removeNotif),
                b = b.replace("#newNotif#", y.newNotif);
            f = g.getParamMap(a, c, h);
            for (d in f) {
                c = f[d];
                typeof c === o && (c = "");
                if ("#LINK#" == d || "#LINKP#" == d) "#LINK#" ==
                    d && !h && typeof l.iLink !== o && g.isTransactionNotValid(a) ? c = c.replace(/.*(_trksid=.*)/, l.iLink + "&$1") : g.isHubCampaign(a) && (c = g.getActionUrl(a)), c += "&_trkparms=" + p.rowTrack("gh1g", a, h);
                b = "#ITEMID#" == d || "#DIFF#" == d || "#UID#" == d ? b.replace(RegExp(d, "g"), c) : b.replace(d, c)
            }
            b = b.replace("=m570", "=p" + e.C.pageId + ".m570");
            "1" === da && (b = b.replace("#P#", ""));
            return b
        },
        Aa = function(a, b) {
            var k, h, f, i = "",
                j = c.isArray(a) ? !1 : !0,
                m = "%26",
                o = !1,
                l = c(t + " li").length;
            s = a;
            if (j) {
                if (!pa(a)) return;
                a = g.convertItemType(a);
                a = g.verifyNewData(d,
                    a, J,
                    function() {})
            }
            Z = !1;
            h = a.length;
            for (k = 0; k < h; k++) f = !1, newItem = a[k], j && c.each(d, function(a, b) {
                if (f = Xa(b, newItem, !0)) return !1
            }), f || (g.isPopUp(newItem) && (newItem = g.setPopupShow(newItem), g.sendSetItemNew(newItem)), j && g.addNewData(d, newItem, !0), !1 !== b && (ya(a[k]), i = e.alertsGroup.isItemGroup(newItem.mdnsName) ? i + $(newItem, 1, void 0, 1) : i + $(newItem, 0), l++, void 0 === p.notifIdSojDropped[x(newItem)] && (o = !0, m += p.rowTrack("ghn" + l + "r", newItem, !1) + "%26", p.notifIdSojDropped[x(newItem)] = 1)));
            v(!0, !0);
            !1 !== b && (0 < i.length &&
                (c(t).append(i), c.fn.ghellipsis && c(B).is(":visible") && c(".ghn-desc-o").ghellipsis({
                    row: 2
                }), o && (e.Util.cTImg(e.ghiIMP + 5 + m), p.overlayLastIdxSojDropped = l)), c(".ghn-i").each(function(a, b) {
                    n.createImage(b)
                }))
        },
        z = function(a) {
            var b = "",
                k = "%26",
                h = 0,
                f = B,
                b = 0,
                j = i.overlayTemplate;
            typeof d === o || !1 === w ? 30016 === La ? aa(f, 2) : aa(f, 3) : (b = g.createOverlyHtml(d, $, function(a, b) {
                    h++;
                    k += p.rowTrack("ghn" + h + "r", a, b) + "%26";
                    p.notifIdSojDropped[x(a)] = 1
                }), k += "ghntnd%3D" + h + "%26", a && d.length < H && (b += "<li class='ghn-o-l'><div class='gh-o-l'></div></li>"),
                0 >= b.length ? aa(f, 4) : (b = j.replace("#TEXT#", b).replace("#SURVEY#", Ma), c(f).html(b), U.length && Aa(U), c.fn.ghellipsis && c(f).is(":visible") && c(".ghn-desc-o").ghellipsis({
                        row: 2
                    }), c.fn.ghellipsisDetails && c(f).is(":visible") && c(".ghn-desc__min_details").ghellipsisDetails({
                        row: 2
                    }), b = c(t + " li").length, a = b >= H ? i.overlayHeight : b * i.itemHeight + c(".coupon-itm").length * i.itemLargeHeight + 10 * c(".coupon-itm.coupon-itm__tall").length, c.fn.scrollLock && c(t).css("height", a + "px").scrollLock("ghn"), c(Ia + " .gh-survey").click(e.Util.surveyClicked),
                    c(".ghn-i").each(function(a, b) {
                        n.createImage(b)
                    }), c(t).on("scroll.ghn_soj", function() {
                        e.Util.cTImg(e.ghiIMP + 53 + "%26gh1g%3DTR" + c(t + " li.ghn-li-itm").length);
                        c(t).off("scroll.ghn_soj")
                    }), "function" === typeof g.addScrollEvent && g.addScrollEvent(t, Aa), c(f).data("ghi", 5 + k), p.overlaySojDropped || (p.overlaySojDropped = 1, e.Util.cTImg(e.ghiIMP + c(f).data("ghi")))))
        },
        oa = function(a, b, d) {
            a <= H && 0 < a && (a = a * i.itemHeight + ("undefined" !== typeof b ? b : 0) * i.itemLargeHeight + 10 * ("undefined" !== typeof d ? d : 0), c(t).animate({
                height: a +
                    "px"
            }))
        },
        Oa = function(a, b) {
            var e = !1,
                h, i = !1;
            h = !1;
            var j, l;
            Y = !1;
            s = a;
            if (b || g.isHandleNotifNeedUpdated(a))
                if (Pa(), pa(a))
                    if (g.isZeroData(a) ? (h = !0, b ? v(!1) : v(!0, !1), f.zeroFlag = !0) : f.zeroFlag = !1, a = g.convertItemType(a), b || (Ea(a.next), U = [], void 0 !== G() && (g.getIsScrollEventAdded() || g.addScrollEvent())), void 0 !== g.handleNewNotif && (a = g.handleNewNotif(a, d)), h) C() && !R() && z();
                    else {
                        d = a;
                        d.length <= H && m.group && "function" === typeof Q ? Q(a, t, void 0, function(a) {
                            void 0 !== a && (d = a);
                            na(S, !0);
                            void 0 === G(!0) ? void 0 !== s.next && delete s.next :
                                s.next = G(!0);
                            v(!0, !0)
                        }, oa) : (na(S, !0), v(!0, !0));
                        Z = !1;
                        j = a.length;
                        for (h = 0; h < j; h++) l = d[h], typeof r["" + x(a[h])] !== o && (1 == S && typeof b === o) && clearInterval(r["" + x(a[h])].id), ya(d[h]), za(d[h]), ra(l) && (i = e = !0, q++), g.updateBucket(l);
                        i && (d = g.addPrToData(d), "2" == da && (d = g.sortData(d)));
                        C() && !R() && z();
                        b ? v(!1) : v(!0, !0);
                        c(".ghn-i").each(function(a, b) {
                            n.createImage(b)
                        });
                        e && (newNotifFlag = !0);
                        e = g.getTotalNumNotifs();
                        void 0 !== e && (q = e);
                        N(q)
                    }
        },
        Ba = function(a) {
            void 0 === n.tlf && (n.tlf = l.tlf);
            a()
        },
        F = function(a) {
            l ? (void 0 ===
                n.tlf && (n.tlf = l.tlf), a()) : typeof GH_NOTIFICATION_TMPL !== o ? (l = e.Util.addPrefixPoolURL(GH_NOTIFICATION_TMPL), Ba(a)) : va ? setTimeout(function() {
                F(a)
            }, 999 + ~~(999 * Math.random())) : (va = 1, c.ajax(I.alertL10nURL, {
                dataType: "jsonp",
                cache: !0,
                jsonp: !1,
                jsonpCallback: "GH_alertTemplate",
                timeout: 4E3,
                success: function(b) {
                    l = e.Util.addPrefixPoolURL(b);
                    l = c.extend(e.commonAlertTemplate, l);
                    g.setTmplL10N(l);
                    Ba(a)
                }
            }))
        },
        aa = function(a, b, d) {
            var h = d,
                g = i.errorTemplate;
            typeof d === o && (d = ea[b], h = g.replace("#TEXT#", d), 2 === b && (h = h.replace("ghn-errb",
                "ghn-errb ghn-errb-a")));
            c(a).data("ghi", b);
            p.overlaySojDropped || (p.overlaySojDropped = 1, e.Util.cTImg(e.ghiIMP + c(a).data("ghi")));
            h = h.replace("#SURVEY#", Ma);
            c(a).html(h);
            a = c("#ghn-err a");
            a.length ? a.click(function(a) {
                a.stopPropagation()
            }) : c("#ghn-err").attr("tabindex", 0)
        },
        Da = function(a, b) {
            wa = !1;
            V = 0;
            W = !1;
            b && void 0 !== b && (w = !1, d = null);
            Ca(!1, function() {
                N(q);
                z();
                ma()
            }, function() {
                var b = B;
                a && aa(b, 6)
            })
        },
        Ca = function(a, b, f) {
            var h, i = !1,
                j = function() {
                    W = !0;
                    V = 0;
                    ia = null;
                    typeof f !== o && f()
                },
                l = function(a, b) {
                    W = !1;
                    void 0 !==
                        a && void 0 !== a.ProxyTime && (a.currentTimeDiff = n.getCurrentTime() - ~~(a.ProxyTime / 1E3));
                    X = g.getLastUpdateTimeStamp();
                    K = n.getCurrentTime();
                    M(a);
                    V = 0;
                    ia = null;
                    b()
                };
            null === ia && (null === d && !w && !wa && !W ? V ? setTimeout(function() {
                Ca(a, b)
            }, 999 + ~~(999 * Math.random())) : (V = 1, E && e.Util.cTImg(e.ghiIMP + 81), a ? (window.GH_alertDataNB = function(a) {
                l(a, b);
                i = !0
            }, !e.NotificationsMock || !e.NotificationsMock.useMock ? (e.Util.loadScript(I.alertDataURL + "&nb=1"), setTimeout(function() {
                window.GH_alertDataNB = function() {};
                i || j()
            }, 2500)) : e.Util.loadScript(e.NotificationsMock.mockDataUrl, !1)) : (h = c.extend(m.ajaxProperties, {
                success: function(a) {
                    l(a, b)
                },
                error: function() {
                    j()
                }
            }), ia = c.ajax(I.alertDataURL, h))) : W ? typeof f !== o && f() : b())
        },
        Sa = function(a) {
            c.isEmptyObject(D) || (J = g.sendDeleteItems(D, J, d), D = {});
            typeof a !== o && a()
        },
        Ta = function() {
            null === i && (i = this);
            n.tlf = db;
            ba = i.ebLiClass;
            ca = i.ebLiActiveClass;
            C = i.doOverlayExist;
            Ja = i.isOverlayOpen;
            R = i.isError;
            H = i.maxItems;
            Ha = i.ghEBAlerts_id;
            B = i.overlay_o;
            t = i.itemContainerId;
            Ia = i.surverDivId
        };
    return {
        setDesign: function(a) {
            da = a
        },
        totalNumNotifs: q,
        getData: function() {
            return d
        },
        setData: function(a) {
            d = a
        },
        setOldData: function(a) {
            U = a
        },
        getOldData: function() {
            return U
        },
        triggerCountdown: ha,
        getTriggerCountdown: function(a) {
            return ha[a]
        },
        isInit: w,
        newNotifFlag: !1,
        setIsInit: function(a) {
            w = a
        },
        getIsInit: function() {
            return w
        },
        getL10N: F,
        setL10N: function(a) {
            l = a
        },
        handleL10N: Ba,
        insertHTMLTemplate: $,
        itemTemplate: 0,
        popupTemplate: 2,
        itemGroupTemplate: 1,
        L10N: l,
        setL10Nrequested: function(a) {
            va = a
        },
        getL10NTemplate: function() {
            return l
        },
        getTotalNumNotifs: function() {
            return q
        },
        handleNewNotifItem: Oa,
        handleOldNotifItem: Aa,
        getIsBusyloadMoreNotifs: function() {
            return ja
        },
        getAlreadyRemovedItems: function() {
            return J
        },
        setAlreadyRemovedItems: function(a) {
            J = a
        },
        getRemovedItems: function() {
            return D
        },
        setErrorCode: function(a) {
            ea = a
        },
        getErrorCode: function() {
            return ea
        },
        setAlertURL: function(a) {
            I = a
        },
        getAlertURL: function() {
            return I
        },
        getObjData: function() {
            return g
        },
        getConf: function() {
            return m
        },
        setConf: function(a) {
            m = a
        },
        getRawData: function() {
            return s
        },
        setCollectData: function() {
            E = !0
        },
        collectData: E,
        popUpPosition: u,
        isTabHidden: xa,
        removedItems: D,
        polling: f,
        enableLocalStorage: Na,
        lastUpdateTimeStamp: X,
        undefinedStr: o,
        storage: j,
        conf: m,
        setOverlayHeight: oa,
        clickconfirmButton: function(a, b, g) {
            var h;
            c.each(d, function() {
                if (x(this) == b) return h = this, !1
            });
            typeof h !== o && (D[b] = !1, typeof g !== o && (D[b] = Ya(h), e.alertsGroup.deleteGroupItem(h)), d = c.grep(d, function(a) {
                return typeof D[x(a)] !== o ? !1 : !0
            }), e.Util.cTImg(e.ghiIMP + 115 + "&_trkparms=" + p.rowTrack("gh1g", h)), v(!1), a())
        },
        clickItem: function(a, b) {
            var f = null;
            c.each(d, function() {
                if (x(this) == a) return f = this, !0
            });
            f && (void 0 != T.CLICKED && g.getItemStatus(f) != T.CLICKED) && (f = qa(f, T.CLICKED), v(!1));
            Sa(function() {
                e.Util.redirect(b)
            })
        },
        processNotifData: M,
        visibleTab: function() {
            var a;
            a = ka();
            var b;
            xa = !1;
            c(document).unbind(".ghn");
            clearTimeout(f.listenUserActivityTimer);
            clearTimeout(f.waitTimer);
            f.waitTimer = setTimeout(la, 1E3 * ua);
            clearTimeout(ga);
            f.activeFlag ? (null === j ? (0 > a && (a = 0), a = K + a - n.getCurrentTime()) : a = j.timestamp - n.getCurrentTime(), 0 < a ? (j && (b = j.getValue("updatedTimestamp"), b > j.updatedTimestamp && (j.data = j.getValue(),
                M(j.data), j.updatedTimestamp = b)), A(a)) : L()) : L();
            f.activeFlag = !0
        },
        removePopUp: O,
        removeItem: Sa,
        getDataAndShowOverlay: function() {
            var a = function(a) {
                void 0 !== a && (d = a);
                na(S, !0);
                void 0 === G(!0) ? void 0 !== s.next && delete s.next : s.next = G(!0);
                ja = !1;
                v(!0, !0)
            };
            w && !l ? F(function() {
                N(q);
                Y ? (z(!0), ja = !0, Q(d, t, void 0, a, oa)) : z();
                ma()
            }) : !w && l ? Da(!0) : !w && !l ? F(function() {
                Da(!0)
            }) : (Y ? (z(!0), ja = !0, Q(d, t, void 0, a, oa)) : z(), ma())
        },
        getAlertData: L,
        scheduleNextAlertPoll: A,
        createUserListener: la,
        init: function() {
            var a = function(a) {
                Ca(a,
                    function() {
                        A()
                    },
                    function() {
                        j && j.data ? M(j.data) : C() && z();
                        A()
                    })
            };
            i = this;
            Ta();
            GH_SetGHNotifs = function() {};
            c(Ha + " .gh-eb-li-a").bind("click.ghn", function(a) {
                e.Util.cTImg(e.ghiIMP + (c(B).is(":hidden") ? 87 : 88));
                a.preventDefault()
            });
            i.addShowEventOnOverlay();
            if (e.userRecog) {
                typeof j !== o && j && j.init(g.getServiceName());
                if (null === j)
                    if (sa) a(!0);
                    else c(window).on("load.gh", function() {
                        a(!1)
                    });
                else {
                    var b = j.timestamp - n.getCurrentTime();
                    if (0 >= b || e.NotificationsMock)
                        if (sa) a(!0);
                        else c(window).on("load.gh", function() {
                            a(!1)
                        });
                    else {
                        E && e.Util.cTImg(e.ghiIMP + 80);
                        M(j.data);
                        var d = n.getCurrentTime();
                        if (sa) {
                            var f = n.getCurrentTime() - d,
                                b = b - f;
                            A(b)
                        } else c(window).on("load.gh", function() {
                            var a = n.getCurrentTime() - d;
                            b -= a;
                            A(b)
                        })
                    }
                }
                i.addEvent()
            }
        },
        initData: Ta,
        addError: aa,
        retryInitData: Da,
        afterViewItem: ma,
        updateNotifOverlay: z,
        getPollingSec: ka,
        errorCode: ea,
        notificationText: bb,
        updateNotifNum: N
    }
};

function GHalertBase() {
    var r = null,
        n = null,
        w = GH.Util.getBundle("NotificationsJavascriptContent"),
        t = GHalertObj,
        q = function(l, h) {
            if (null === r) {
                var k = function(c) {
                        return "undefined" !== typeof this[c]
                    }("localStorage") && null !== localStorage ? localStorage : 0,
                    o = GHalertConf(),
                    o = h.extend(o, GHalertServiceConf()),
                    p, n = 0,
                    q = function() {
                        return ~~((new Date).getTime() / 1E3) - n
                    },
                    u = function() {
                        var c = h(this.e);
                        c.css("display", "block");
                        (this.width < this.height || c.hasClass("ghn-i-m") && this.width > this.height) && c.addClass("ghn-i-n")
                    },
                    s;
                var v = window.sessionStorage;
                try {
                    v.setItem("gh_testKey", "1"), v.removeItem("gh_testKey"), s = !0
                } catch (t) {
                    s = !1
                }
                p = {
                    tlf: null,
                    getTimeDiff: function(c, a) {
                        var b, i = p.tlf,
                            j = {},
                            m = "",
                            d = "",
                            e = "",
                            d = "",
                            f, g = o.messageAlertL10N;
                        "undefined" === typeof a && (a = q());
                        b = c - a;
                        if (0 >= b) return i.e;
                        m = Math.floor(b / 86400);
                        f = Math.floor(b % 60);
                        b %= 86400;
                        e = Math.floor(b / 3600);
                        b = Math.floor(b % 3600 / 60);
                        0 < m ? m = m + i.d + (0 < e ? " " + e + i.h : "") : 0 < e ? (m = e + i.h + (0 < b ? " " + b + i.m : ""), d = g.hours, 1 === e && (d = g.hour), d = e + " " + d, 0 < b && (e = g.minutes, 1 === b && (e = g.minute), d =
                            d + " " + b + " " + e)) : 0 < b ? (m = b + i.m + (0 < f ? " " + f + i.s : ""), d = g.minutes, 1 === b && (d = g.minute), d = b + " " + d, 0 < f && (e = g.seconds, 1 === f && (e = g.second), d = d + " " + f + " " + e)) : (m = f + i.s, d = g.seconds, 1 === f && (d = g.second), d = f + " " + d);
                        j.t0 = m;
                        j.t1 = d;
                        return j
                    },
                    sizeCheck: u,
                    sort: function(c, a, b, i) {
                        c = 0 === b ? c - a : a - c;
                        return 0 !== c ? c : i()
                    },
                    setCurrentTimeDiff: function(c) {
                        n = c
                    },
                    createImage: function(c) {
                        var a = new Image;
                        a.e = c;
                        a.onload = u;
                        a.src = h(c).attr("src")
                    },
                    isLocalStorageSupported: s,
                    getCurrentTime: q
                };
                r = {
                    Const: {
                        TITLE: w.alertHeader
                    },
                    Conf: o,
                    Util: p,
                    Tracking: function(c,
                        a) {
                        var b = {},
                            i = c.tracking,
                            j = c.trackingUserType;
                        h.each(i, function(a, d) {
                            b["" + d] = {}
                        });
                        h.each(j, function(a, d) {
                            b["" + d.B] = {};
                            b["" + d.S] = {}
                        });
                        return {
                            totalByType: {},
                            totalNewByType: {},
                            lookup: i,
                            dataloadSojDropped: 0,
                            overlaySojDropped: 0,
                            notifIdSojDropped: {},
                            addTotalByTrackId: function(c, d) {
                                var e;
                                e = a.getItemKey(c);
                                var f = i[e],
                                    g = c.buyerNotification;
                                !d && (void 0 !== g && void 0 !== j[e]) && (g && void 0 !== j[e].B ? f = j[e].B : !g && void 0 !== j[e].S && (f = j[e].S));
                                d && (e = a.getItemGroup(c), f = i[e]);
                                void 0 !== f && (b[f].d = ~~b[f].d + 1, a.isNewOrPopUp(c) &&
                                    (b[f].n = ~~b[f].n + 1))
                            },
                            getSojItemsStr: function() {
                                var a = "";
                                h.each(b, function(d, c) {
                                    var b = c.d,
                                        g = c.n;
                                    if (b || g) a += "%26ghn" + d + "r%3d";
                                    a += g ? "N" + g + "." : "";
                                    a += b ? "T" + b : ""
                                });
                                return a
                            },
                            rowTrack: function(c, d, b) {
                                var f = a.getItemKey(d),
                                    g = a.getItemGroup(d),
                                    h;
                                void 0 !== j && void 0 !== d.buyerNotification && (b || void 0 !== j[f] && (h = d.buyerNotification ? j[f].B : j[f].S));
                                void 0 === h && (h = i[b ? g : f || g]);
                                b = "";
                                a.isItemCoupon(d) && (d.notificationId && (b += ".notifid" + d.notificationId), d.subject && (d.subject.campaign && d.subject.campaign.campaignId) &&
                                    (b += ".cid" + d.subject.campaign.campaignId));
                                return c + "%3DI" + a.getItemId(d) + ".N" + h + ".S" + a.getItemStatus(d) + ".type" + d.name + b + (d.e ? ".M" + ~~((d.e - p.getCurrentTime()) / 60) : "")
                            }
                        }
                    },
                    Storage: {
                        timestamp: -1,
                        updatedTimestamp: -1,
                        data: null,
                        key: "ghn_data",
                        lData: {},
                        lKey: "ghn_ldata",
                        userID: l,
                        refreshLocalStorage: 30,
                        removeLocalStorage: function() {
                            k.removeItem(this.key)
                        },
                        setDataLocalStorage: function(c, a, b) {
                            try {
                                h.isArray(a) && (void 0 !== c.d ? c.d = a : c.notifications = a, a = c), a.timestamp = this.timestamp, a.userID = this.userID, b && (this.updatedTimestamp =
                                    p.getCurrentTime()), a.updatedTimestamp = this.updatedTimestamp, a.groupCurrentCount = GH.alertsGroup.getTotalCurrentTypeCount(), k.setItem(this.key, JSON.stringify(a)), this.data = a, this.timestamp = a.timestamp
                            } catch (i) {}
                        },
                        init: function(c) {
                            var a;
                            this.key = this.key + "_" + c;
                            this.lKey = this.lKey + "_" + c;
                            if (null !== k.getItem(this.key) && (c = JSON.parse(k.getItem(this.key)), c.userID == l && (this.timestamp = c.timestamp, this.data = c, this.updatedTimestamp = c.updatedTimestamp, null !== k.getItem(this.lKey) && (a = JSON.parse(k.getItem(this.lKey)),
                                    a.userID == l)))) {
                                var b = p.getCurrentTime();
                                h.each(a.d, function(c) {
                                    b > a.d[c] && delete a.d[c]
                                });
                                this.lData = a.d;
                                this.setlDataLocalStorage()
                            }
                        },
                        setlDataLocalStorage: function() {
                            h.isEmptyObject(this.lData) ? k.removeItem(this.lKey) : k.setItem(this.lKey, JSON.stringify({
                                userID: l,
                                d: this.lData
                            }))
                        },
                        getValue: function(c, a) {
                            var b;
                            typeof a === o.undefinedStr && (a = this.key);
                            if (null !== k.getItem(a)) return b = JSON.parse(k.getItem(a)), typeof b[c] !== o.undefinedStr ? b[c] : b
                        }
                    }
                }
            }
            return r
        },
        x = {
            getCore: q,
            getAlertObj: function(l, h) {
                null ===
                    n && (n = t(l, h, q));
                return n
            }
        };
    return {
        require: function(l, h) {
            var k = x["get" + l];
            if ("function" === typeof k) return k.apply(this, h)
        }
    }
};

function GHalertDesktop(k, g, h, a) {
    var c = k(a).require("AlertObj", [g, h]),
        j = g.ghEBActive_id,
        k = "." + j,
        i = a("#gh-eb-Alerts"),
        l = !1,
        m = 0;
    onRemoveNotiifcation = function(b, d) {
        var e, f, n;
        if (c.getIsBusyloadMoreNotifs() && 10 >= m) return m++, setTimeout(function() {
            onRemoveNotiifcation(b, d)
        }, 200), b.stopPropagation(), b.preventDefault(), !1;
        e = a("li[data-uid=" + d + "] .ghn-pop-rmv");
        f = a(e).closest("li");
        if ("none" === a(e).find("i").css("display")) return b.stopPropagation(), b.preventDefault(), f.find("a.ghn-a-itm").trigger(b.type), !1;
        if (f.find(".ghn-confirm").length) a(e).closest("li").find(".ghn-a-itm").addClass("disable").end().find(".ghn-desc").hide().end().find(".ghn-confirm").show();
        else {
            var d = f.attr("data-uid") || li.attr("data-id"),
                h = f.attr("data-groupid");
            b.preventDefault();
            c.clickconfirmButton(function() {
                var b;
                a(e).is(":focus") && (b = f.next(), b.length ? b.children(":first").focus() : (b = f.prev(), b.length ? b.children(":first").focus() : i.find("a:first").focus()), c.removeItem());
                c.removeItem();
                f.slideUp(function() {
                    a(this).remove();
                    var b = g.alerts.getObjData(),
                        d, e;
                    e = 0;
                    d = a("#ghn-ul li.ghn-li-itm:not([data-groupid])").length;
                    e = g.alertsGroup.getTotalCurrentTypeCount();
                    e = d + e;
                    b.getNextURL();
                    void 0 !== b.getNextURL() && (d = b.getNextURL(), d = d.replace(b.getNexParamsFromURL(d, !0), "offset=" + e + "&limit=20"), b.setNextURL(d), 10 === a("#ghn-ul li.ghn-li-itm").length && (b.setForceScrolling(!0), a("#ghn-ul").trigger("scroll.ghn-pagination"), b.setForceScrolling(!1)));
                    a("#ghn-ul li").length || c.addError("#gh-eb-Alerts-o", 4)
                });
                n = a("#ghn-ul li").length;
                setTimeout(function() {
                    var b =
                        a(".coupon-itm").length;
                    f.find(".coupon-itm").length && (b = 0 < a(".coupon-itm").length ? a(".coupon-itm").length - 1 : 0);
                    var d = a(".coupon-itm.coupon-itm__tall").length;
                    f.find(".coupon-itm.coupon-itm__tall").length && (d = 0 < a(".coupon-itm.coupon-itm__tall").length ? a(".coupon-itm.coupon-itm__tall").length - 1 : 0);
                    c.setOverlayHeight(n - 1, b, d)
                }, 100)
            }, d, h);
            b.stopPropagation()
        }
        return !1
    };
    onClickCouponButton = function(b, a) {
        var c = document.createElement("textarea");
        c.setAttribute("style", "font-size: initial;  border: 0; padding: 0; margin: 0; position: absolute; top: " +
            (window.pageYOffset || document.documentElement.scrollTop) + "px;");
        c.setAttribute("readonly", "");
        c.value = a;
        document.body.appendChild(c);
        c.select();
        c.setSelectionRange(0, c.value.length);
        document.execCommand("copy");
        document.body.removeChild(c);
        g.Util.cTImg(g.ghiIMP + 116 + "%26sid%3Dp" + g.C.pageId + ".l46332%26type%3DTargetedCoupons");
        return !1
    };
    addEventOnOverlay = function() {
        i.delegate("input, .ghn-pop-rmv", "mousedown", function(a) {
            a.stopPropagation();
            a.preventDefault();
            return !1
        });
        i.delegate(" .ghn-pop-rmv", "click touchend mouseenter mouseleave",
            function(b) {
                var c = a(this).closest("li").attr("data-uid");
                "click" === b.type || "touchend" === b.type ? (m = 0, onRemoveNotiifcation(b, c)) : "mouseenter" === b.type ? a(this).parent().find(".ghn-rmv-popover").show() : a(this).parent().find(".ghn-rmv-popover").hide()
            });
        i.delegate(" .coupon-itm", "click touchend focusout", function(b) {
            if ("a" !== b.target.tagName.toLowerCase()) {
                b.stopPropagation();
                b.preventDefault();
                var c = a(this).closest("li").attr("data-cpn-code");
                if ("click" === b.type || "touchend" === b.type) onClickCouponButton(b,
                    c), a(".coupon-itm .cpn-btn__copy").show(), a(".coupon-itm .cpn-btn__conf").addClass("hid"), $copybtn = a(this).find(".cpn-btn__copy"), $copybtn.hide(), $copybtn.siblings(".cpn-btn__conf").removeClass("hid")
            } else "click" === b.type && g.Util.cTImg(g.ghiIMP + 117 + "%26sid%3Dp" + g.C.pageId + ".l47195")
        });
        i.delegate("#gh-eb-Alerts-o a.ghn-a-itm", "touchmove", function() {
            l = !0
        });
        i.delegate("#gh-eb-Alerts-o a.ghn-a-itm", "click touchend", function(b) {
            var d = a(this).parent(),
                e = d.attr("data-uid"),
                f = d.attr("data-id");
            void 0 === e &&
                (e = f);
            b.preventDefault();
            if (a(this).hasClass("disable") || l) return l = !1;
            a(this).attr("href", a(this).attr("href") + ".R" + (a("#ghn-ul li.ghn-li-itm").index(d) + 1 || -1) + ".TR" + a("#ghn-ul li.ghn-li-itm").length);
            b = a(this).attr("href");
            c.clickItem(e, b);
            return !1
        })
    };
    addTabEvent = function() {
        g.Util.tabHidden({
            hidden: function() {
                c.isTabHidden = !0
            },
            visible: function() {
                c.visibleTab()
            }
        })
    };
    addEvent = function() {
        addEventOnOverlay();
        addTabEvent()
    };
    var h = {
            addEvent: addEvent
        },
        o = function(b, c) {
            25 < c ? a("#gh-eb-Alerts .gh-control").focus() :
                setTimeout(function() {
                    var e = a("#gh-eb-Alerts-o a:first"),
                        f = a("#ghn-err");
                    e.length ? e.focus() : f.length ? a("#ghn-err").focus() : (c++, o(b, c))
                }, b)
        };
    return a.extend(c, {
        addShowEventOnOverlay: function() {
            var b = a("#gh-eb-Alerts");
            a("#gh-eb-Alerts").removeClass("gh-hvr");
            b.hoverIntent({
                over: function() {
                    a("#gh-eb-Alerts .gh-eb-li-a").unbind("click.preventEB_Click");
                    setTimeout(function() {
                        c.preventEB_Click("#gh-eb-Alerts", b)
                    }, 300);
                    c.removePopUp();
                    c.openOverlay(b, "#gh-eb-Alerts-o")
                },
                out: function() {
                    c.removeItem();
                    c.closeOverlay(b)
                }
            });
            c.preventEB_Click("#gh-eb-Alerts", b)
        },
        openOverlay: function(b, d, e) {
            var f = a(d);
            c.doOverlayExist() ? (g.userRecog && (c.isError() && (c.isProcessData && !c.isInit ? c.retryInitData() : c.updateNotifOverlay()), c.afterViewItem()), a(d).is(":hidden") && c.showOverlay()) : (c.createEBO(e), f.data("ghi", 5), g.userRecog ? c.getDataAndShowOverlay() : (typeof c.storage !== c.undefinedStr && c.storage && c.storage.removeLocalStorage(), e = "<div id='ghn-err'><span class='ghn-errb'>#TEXT#</span></div>".replace("#TEXT#", c.errorCode[2]), e = e.replace("ghn-errb",
                "ghn-errb ghn-errb-a"), c.addError(d, 2, e)), c.showOverlay());
            a.fn.ghellipsis && (a.fn.ghellipsisDetails && a(d).is(":visible")) && a(".ghn-desc-o").ghellipsis({
                row: 2
            });
            a.fn.ghellipsisDetails && a(d).is(":visible") && a(".ghn-desc__min_details ").ghellipsisDetails({
                row: 2
            });
            b.addClass(j)
        },
        closeOverlay: function(b, c) {
            b.removeClass(j);
            g.Util.closeOverlay(a("#gh-eb-Alerts .ghn-b"));
            (void 0 === c || c) && a("#gh-eb-Alerts li[data-id]").removeClass("ghn-new")
        },
        isError: function() {
            return 0 === a("#ghn-err").length ? !1 : !0
        },
        doOverlayExist: function() {
            return 0 ===
                a("#gh-eb-Alerts-o").length || 0 === a("#gh-eb-Alerts-o").children().length ? !1 : !0
        },
        isOverlayOpen: function() {
            return a("#gh-eb-Alerts-o").is(":visible") ? !0 : !1
        },
        dom: h,
        createEBO: function(b) {
            var c = a("#gh-eb-Alerts .gh-sublayer .ghn-b").outerWidth() - 8;
            a("#gh-eb-Alerts-o").length && a("#gh-eb-Alerts-o").remove();
            g.Util.hideOverlays();
            a("#gh-eb-Alerts .gh-sublayer").append("<div id=gh-eb-Alerts-o class='gh-eb-o' style='" + (180 < c ? "min-width:" + c + "px" : "") + "'><div class=gh-o-l " + (b ? "tabindex=0" : "") + " >" + g.L10N.msg_loading +
                "</div></div>");
            b && a("#gh-eb-Alerts-o .gh-o-l").focus()
        },
        preventEB_Click: function(b) {
            var d = a(b);
            a(b + " .gh-eb-li-a").bind("click.preventEB_Click", function(e, f) {
                var h = !0,
                    i = 0;
                e.preventDefault();
                c.doOverlayExist() ? "none" === a(b + "-o").css("display") ? (c.showOverlay(), a(b).addClass("gh-eb-active")) : (a(b).removeClass("gh-eb-active"), g.Util.closeOverlay(a(b + " .ghn-b")), h = !1) : (c.openOverlay(d, "#gh-eb-Alerts-o", f), i = 200);
                f && h && o(i, 0)
            })
        },
        showOverlay: function() {
            g.Util.openOverlay(a("#gh-eb-Alerts .ghn-b"))
        },
        overlayTemplate: "<ul id='ghn-ul'>#TEXT#</ul>#SURVEY#",
        errorTemplate: "<div id='ghn-err'><span class='ghn-errb'>#TEXT#</span></div>",
        overlayHeight: 635,
        maxItems: 6,
        itemHeight: 106,
        itemLargeHeight: 57,
        ghEBAlerts_id: "#gh-eb-Alerts",
        overlay_o: "#gh-eb-Alerts-o",
        itemContainerId: "#ghn-ul",
        surverDivId: "#ghn-f",
        addEvent: h.addEvent,
        ebAClass: ".gh-eb-li-a",
        ebLiClass: ".gh-eb-li",
        ebLiActiveClass: k,
        ebLiActiveClassName: j
    })
};

function GadgetNotification(m, f, l, b) {
    var c = m(b).require("AlertObj", [f, l]),
        j = f.ghEBActive_id,
        m = "." + j,
        i = b("#gh-eb-Alerts"),
        n = !1,
        o = 0;
    onRemoveNotiifcation = function(a, e) {
        var d, g, k;
        if (c.getIsBusyloadMoreNotifs() && 10 >= o) return o++, setTimeout(function() {
            onRemoveNotiifcation(a, e)
        }, 200), a.stopPropagation(), a.preventDefault(), !1;
        d = b("li[data-uid=" + e + "] .ghn-pop-rmv");
        g = b(d).closest("li");
        if ("none" === b(d).find("i").css("display")) return a.stopPropagation(), a.preventDefault(), g.find("a.ghn-a-itm").trigger(a.type), !1;
        if (g.find(".ghn-confirm").length) b(d).closest("li").find(".ghn-a-itm").addClass("disable").end().find(".ghn-desc").hide().end().find(".ghn-confirm").show();
        else {
            var e = g.attr("data-uid") || li.attr("data-id"),
                h = g.attr("data-groupid");
            a.preventDefault();
            c.clickconfirmButton(function() {
                var a;
                b(d).is(":focus") && (a = g.next(), a.length ? a.children(":first").focus() : (a = g.prev(), a.length ? a.children(":first").focus() : i.find("a:first").focus()), c.removeItem());
                c.removeItem();
                g.slideUp(function() {
                    b(this).remove();
                    var a = f.alerts.getObjData(),
                        e, d;
                    d = 0;
                    e = b("#ghn-ul li.ghn-li-itm:not([data-groupid])").length;
                    d = f.alertsGroup.getTotalCurrentTypeCount();
                    d = e + d;
                    a.getNextURL();
                    void 0 !== a.getNextURL() && (e = a.getNextURL(), e = e.replace(a.getNexParamsFromURL(e, !0), "offset=" + d + "&limit=20"), a.setNextURL(e), 10 === b("#ghn-ul li.ghn-li-itm").length && (a.setForceScrolling(!0), b("#ghn-ul").trigger("scroll.ghn-pagination"), a.setForceScrolling(!1)));
                    b("#ghn-ul li").length || c.addError("#gh-eb-Alerts-o", 4)
                });
                k = b("#ghn-ul li").length;
                setTimeout(function() {
                    var a =
                        b(".coupon-itm").length;
                    g.find(".coupon-itm").length && (a = 0 < b(".coupon-itm").length ? b(".coupon-itm").length - 1 : 0);
                    var e = b(".coupon-itm.coupon-itm__tall").length;
                    g.find(".coupon-itm.coupon-itm__tall").length && (e = 0 < b(".coupon-itm.coupon-itm__tall").length ? b(".coupon-itm.coupon-itm__tall").length - 1 : 0);
                    c.setOverlayHeight(k - 1, a, e)
                }, 100)
            }, e, h);
            a.stopPropagation()
        }
        return !1
    };
    onClickCouponButton = function(a, e) {
        var b = document.createElement("textarea");
        b.setAttribute("style", "font-size: initial;  border: 0; padding: 0; margin: 0; position: absolute; top: " +
            (window.pageYOffset || document.documentElement.scrollTop) + "px;");
        b.setAttribute("readonly", "");
        b.value = e;
        document.body.appendChild(b);
        b.select();
        b.setSelectionRange(0, b.value.length);
        document.execCommand("copy");
        document.body.removeChild(b);
        f.Util.cTImg(f.ghiIMP + 116 + "%26sid%3Dp" + f.C.pageId + ".l46332%26type%3DTargetedCoupons");
        return !1
    };
    addEventOnOverlay = function() {
        document.addEventListener("GH_NOTIF_DISPLAY_UPDATE", function(a) {
            c.updateNotifNum(a && a.detail || 0)
        }, !1);
        i.delegate("input, .ghn-pop-rmv", "mousedown",
            function(a) {
                a.stopPropagation();
                a.preventDefault();
                return !1
            });
        i.delegate(" .ghn-pop-rmv", "click touchend mouseenter mouseleave", function(a) {
            var e = b(this).closest("li").attr("data-uid");
            "click" === a.type || "touchend" === a.type ? (o = 0, onRemoveNotiifcation(a, e)) : "mouseenter" === a.type ? b(this).parent().find(".ghn-rmv-popover").show() : b(this).parent().find(".ghn-rmv-popover").hide()
        });
        i.delegate(" .coupon-itm", "click touchend focusout", function(a) {
            if ("a" !== a.target.tagName.toLowerCase()) {
                a.stopPropagation();
                a.preventDefault();
                var e = b(this).closest("li").attr("data-cpn-code");
                if ("click" === a.type || "touchend" === a.type) onClickCouponButton(a, e), b(".coupon-itm .cpn-btn__copy").show(), b(".coupon-itm .cpn-btn__conf").addClass("hid"), $copybtn = b(this).find(".cpn-btn__copy"), $copybtn.hide(), $copybtn.siblings(".cpn-btn__conf").removeClass("hid")
            } else "click" === a.type && f.Util.cTImg(f.ghiIMP + 117 + "%26sid%3Dp" + f.C.pageId + ".l47195")
        });
        i.delegate("#gh-eb-Alerts-o a.ghn-a-itm", "touchmove", function() {
            n = !0
        });
        i.delegate("#gh-eb-Alerts-o a.ghn-a-itm",
            "click touchend",
            function(a) {
                var e = b(this).parent(),
                    d = e.attr("data-uid"),
                    g = e.attr("data-id");
                void 0 === d && (d = g);
                a.preventDefault();
                if (b(this).hasClass("disable") || n) return n = !1;
                b(this).attr("href", b(this).attr("href") + ".R" + (b("#ghn-ul li.ghn-li-itm").index(e) + 1 || -1) + ".TR" + b("#ghn-ul li.ghn-li-itm").length);
                a = b(this).attr("href");
                c.clickItem(d, a);
                return !1
            })
    };
    addTabEvent = function() {
        f.Util.tabHidden({
            hidden: function() {
                c.isTabHidden = !0
            },
            visible: function() {
                c.visibleTab()
            }
        })
    };
    addEvent = function() {
        addEventOnOverlay();
        addTabEvent()
    };
    var l = {
            addEvent: addEvent
        },
        p = function(a, e) {
            25 < e ? b("#gh-eb-Alerts .gh-control").focus() : setTimeout(function() {
                var d = b("#gh-eb-Alerts-o a:first"),
                    c = b("#ghn-err");
                d.length ? d.focus() : c.length ? b("#ghn-err").focus() : (e++, p(a, e))
            }, a)
        };
    return b.extend(c, {
        triggerViewTracking: function(a) {
            var e = f && f.C && f.C.pageId || "2380424",
                d = JSON.parse(JSON.stringify({
                    eventFamily: "NOTF",
                    eventAction: "VIEW",
                    operationId: "",
                    flushImmediately: !1,
                    eventProperty: {
                        sid: "",
                        moduledtl: "mi:1",
                        trkp: ""
                    }
                }));
            d.operationId = e;
            d.eventProperty.sid =
                "p" + e + ".m1";
            d.eventProperty.trkp = "ni_error%3A" + a;
            window.jQuery ? b(document).trigger("pulsar", d) : window.triggerTracking && window.triggerTracking("pulsar", d)
        },
        makeGadgetCall: function(a) {
            var b = this;
            if ("HttpClient" in window) {
                var d = new window.HttpClient("/gh/globalheaderonload?modules=NOTIFICATION_DWEB_OVERLAY_CONTENT&skipimp=true", "GET", {
                        correlation: window.trkCorrelationSessionInfo && "function" === typeof window.trkCorrelationSessionInfo.getTrackingCorrelationSessionInfo && window.trkCorrelationSessionInfo.getTrackingCorrelationSessionInfo()
                    },
                    null, {
                        shouldRetry: !1,
                        timeout: 5E3
                    });
                d.handlers({
                    onload: function(d) {
                        if (d instanceof ProgressEvent && (d = d.target || d.currentTarget, d instanceof XMLHttpRequest)) try {
                            var c = JSON.parse(d.responseText);
                            c && 0 == Object.keys(c).length && (c.html = void 0, b.triggerViewTracking("1"));
                            void 0 === c.html || c.error && "auth_required" == c.error ? (c.error && "auth_required" == c.error && b.paintGadgetNotificationError(2, a), b.paintGadgetNotificationError(6, a)) : b.paintFlyoutContent(c, a)
                        } catch (f) {
                            b.triggerViewTracking("4"), b.paintGadgetNotificationError(6,
                                a)
                        }
                    },
                    onerror: function() {
                        b.triggerViewTracking("2");
                        b.paintGadgetNotificationError(6, a)
                    }
                });
                d.initializeAndTrigger()
            }
        },
        parseInlineResources: function(a) {
            var b = "",
                d = "";
            if ((a = a.querySelectorAll("script")) && 0 < a.length) {
                for (var c = a.length, f = 0; f < c; f++) {
                    var h = a[f];
                    "nb_script" === h.id ? b += " ; " + h.innerHTML : d += " ; " + h.innerHTML
                }
                b = document.createTextNode(b + d);
                d = document.createElement("script");
                d.type = "text/javascript";
                d.appendChild(b);
                document.body.appendChild(d)
            }
        },
        paintGadgetNotificationError: function(a, b) {
            a ||
                (a = 2);
            var d = "<div id='ghn-err'><span class='ghn-errb'>#TEXT#</span></div>".replace("#TEXT#", c.errorCode[a]),
                d = d.replace("ghn-errb", "ghn-errb ghn-errb-a");
            c.addGadgetError(b, a, d)
        },
        paintFlyoutContent: function(a, e) {
            b(e).html(a && a.html);
            this.parseInlineResources(b(e)[0], a && a.renderedComponents);
            "function" === typeof window.markoInitForOnDemand ? window.markoInitForOnDemand(a && a.renderedComponents) : "function" === typeof window.markoInitComponents && window.markoInitComponents(a && a.renderedComponents)
        },
        addShowEventOnOverlay: function() {
            var a =
                b("#gh-eb-Alerts");
            b("#gh-eb-Alerts").removeClass("gh-hvr");
            a.hoverIntent({
                over: function() {
                    b("#gh-eb-Alerts .gh-eb-li-a").unbind("click.preventEB_Click");
                    setTimeout(function() {
                        c.preventEB_Click("#gh-eb-Alerts", a)
                    }, 300);
                    c.removePopUp();
                    c.openGadgetOverlay(a, "#gh-eb-Alerts-o");
                    window.gadgetNotificationOverlayVisible = !0;
                    var e = new CustomEvent("NOTIFICATION_OVERLAY_OPENED", {
                        detail: "userHoverOver"
                    });
                    document.dispatchEvent(e)
                },
                out: function() {
                    c.removeItem();
                    c.closeOverlay(a);
                    window.gadgetNotificationOverlayVisible = !1;
                    var b = new CustomEvent("NOTIFICATION_OVERLAY_CLOSED", {
                        detail: "userHoverOut"
                    });
                    document.dispatchEvent(b)
                }
            });
            c.preventEB_Click("#gh-eb-Alerts", a)
        },
        openOverlay: function(a, e, d) {
            var g = b(e);
            c.doOverlayExist() ? (f.userRecog && (c.isError() && (c.isProcessData && !c.isInit ? c.retryInitData() : c.updateNotifOverlay()), c.afterViewItem()), b(e).is(":hidden") && c.showOverlay()) : (c.createEBO(d), g.data("ghi", 5), f.userRecog ? c.getDataAndShowOverlay() : (typeof c.storage !== c.undefinedStr && c.storage && c.storage.removeLocalStorage(),
                d = "<div id='ghn-err'><span class='ghn-errb'>#TEXT#</span></div>".replace("#TEXT#", c.errorCode[2]), d = d.replace("ghn-errb", "ghn-errb ghn-errb-a"), c.addError(e, 2, d)), c.showOverlay());
            b.fn.ghellipsis && (b.fn.ghellipsisDetails && b(e).is(":visible")) && b(".ghn-desc-o").ghellipsis({
                row: 2
            });
            b.fn.ghellipsisDetails && b(e).is(":visible") && b(".ghn-desc__min_details ").ghellipsisDetails({
                row: 2
            });
            a.addClass(j)
        },
        openGadgetOverlay: function(a, e, d) {
            var g = b(e);
            c.doOverlayExist() || (c.createEBO(d), g.data("ghi", 5), f.userAuth ?
                this.makeGadgetCall(e) : (this.triggerViewTracking("3"), d = "<div id='ghn-err'><span class='ghn-errb'>#TEXT#</span></div>".replace("#TEXT#", c.errorCode[2]), d = d.replace("ghn-errb", "ghn-errb ghn-errb-a"), c.addGadgetError(e, 2, d)));
            c.showOverlay();
            a.addClass(j)
        },
        closeOverlay: function(a, c) {
            a.removeClass(j);
            f.Util.closeOverlay(b("#gh-eb-Alerts .ghn-b"));
            (void 0 === c || c) && b("#gh-eb-Alerts li[data-id]").removeClass("ghn-new")
        },
        isError: function() {
            return 0 === b("#ghn-err").length ? !1 : !0
        },
        doOverlayExist: function() {
            return 0 ===
                b("#gh-eb-Alerts-o").length || 0 === b("#gh-eb-Alerts-o").children().length ? !1 : !0
        },
        isOverlayOpen: function() {
            return b("#gh-eb-Alerts-o").is(":visible") ? !0 : !1
        },
        dom: l,
        createEBO: function(a) {
            var c = b("#gh-eb-Alerts .gh-sublayer .ghn-b").outerWidth() - 8;
            b("#gh-eb-Alerts-o").length && b("#gh-eb-Alerts-o").remove();
            f.Util.hideOverlays();
            b("#gh-eb-Alerts .gh-sublayer").append("<div id=gh-eb-Alerts-o class='gh-eb-o' style='" + (180 < c ? "min-width:" + c + "px" : "") + "'><div class=gh-o-l " + (a ? "tabindex=0" : "") + " >" + f.L10N.msg_loading +
                "</div></div>");
            a && b("#gh-eb-Alerts-o .gh-o-l").focus()
        },
        preventEB_Click: function(a) {
            var e = b(a);
            b(a + " .gh-eb-li-a").bind("click.preventEB_Click", function(d, g) {
                var k = !0,
                    h = 0;
                d.preventDefault();
                c.doOverlayExist() ? "none" === b(a + "-o").css("display") ? (c.showOverlay(), b(a).addClass("gh-eb-active")) : (b(a).removeClass("gh-eb-active"), f.Util.closeOverlay(b(a + " .ghn-b")), k = !1) : (c.openGadgetOverlay(e, "#gh-eb-Alerts-o", g), h = 200);
                g && k && p(h, 0)
            })
        },
        showOverlay: function() {
            f.Util.openOverlay(b("#gh-eb-Alerts .ghn-b"))
        },
        overlayTemplate: "<ul id='ghn-ul'>#TEXT#</ul>#SURVEY#",
        errorTemplate: "<div id='ghn-err'><span class='ghn-errb'>#TEXT#</span></div>",
        overlayHeight: 635,
        maxItems: 6,
        itemHeight: 106,
        itemLargeHeight: 57,
        ghEBAlerts_id: "#gh-eb-Alerts",
        overlay_o: "#gh-eb-Alerts-o",
        itemContainerId: "#ghn-ul",
        surverDivId: "#ghn-f",
        addEvent: l.addEvent,
        ebAClass: ".gh-eb-li-a",
        ebLiClass: ".gh-eb-li",
        ebLiActiveClass: m,
        ebLiActiveClassName: j,
        initGadget: function(a) {
            b("#gh-eb-Alerts .gh-eb-li-a").bind("click.ghn", function(a) {
                f.Util.cTImg(f.ghiIMP +
                    (b("#gh-eb-Alerts-o").is(":hidden") ? 87 : 88));
                a.preventDefault()
            });
            this.addShowEventOnOverlay();
            if (f.userAuth || a) this.makeGadgetCall("#gh-eb-Alerts-o"), this.addEvent()
        },
        addGadgetError: function(a, e, d) {
            var f = d;
            "undefined" === typeof d && (f = "<div id='ghn-err'><span class='ghn-errb'>#TEXT#</span></div>".replace("#TEXT#", c.errorCode[e]));
            b(a).html(f);
            b("#ghn-err a").click(function(a) {
                a.stopPropagation()
            })
        }
    })
};
(function(b) {
    GH.add("Notifications", function() {
        return {
            init: function() {
                var c = location && location.search && location.search.includes("mock=NOTIFICATION_DWEB_") && GH && GH.C && "production" !== GH.C.env,
                    a = GadgetNotification(GHalertBase, GH, GH.userID, b);
                a.initGadget(c);
                GH.alerts = a
            }
        }
    })
})(GH.jQ);
(function(f) {
    GH.add("Cart", function() {
        var d = GH.vCJar,
            a = GH.C.ct,
            e = f("#gh-cart a"),
            g = f("#gh-minicart-hover .gh-eb-li-a"),
            h = GH.Util.getBundle("Cart");
        return {
            init: function() {
                var b = this;
                GH.resetCart = function(a) {
                    b.appendCart(~~a)
                };
                d && !GH.disablePDS && (a instanceof Array && (a = a[2] || 0), GH.C.cgi || GH.C["static"] || 203 == GH.C.siteId || typeof oDoc !== GH.undefinedStr ? (a = ~~d.readCookie("dp1", "cq"), b.appendCart(a), 203 == GH.C.siteId && b.appendCart(~~(/^(\d+):?/.exec(d.readCookie("dp1", "exc")) || [0, 0])[1] || a)) : typeof a != GH.undefinedStr &&
                    (b.appendCart(~~a), d.writeCookielet("dp1", "cq", ~~a)))
            },
            appendCart: function(b) {
                var a = !e.length ? g : e;
                if (a.length) {
                    f("#gh-cart-n").remove();
                    cartObj = !e.length ? g : e;
                    var c = h[0 == b ? "zero" : 1 == b ? "one" : "many"];
                    c && (c = GH.Util.mergeContent(c, {
                        itemcount: b
                    }), cartObj.attr({
                        alt: c,
                        "aria-label": c
                    }));
                    0 < b && (a.append("<i id=gh-cart-n aria-hidden=true>" + (99 < b ? "99+" : b) + "</i>"), a.addClass("gh-cart-count-" + (99 < b ? 3 : 9 < b ? 2 : 1)))
                }
            }
        }
    })
})(GH.jQ);
ebayContent["GlobalHeaderWeb/Cart"] = {
    one: "Your shopping cart contains ${itemcount} item",
    many: "Your shopping cart contains ${itemcount} items",
    zero: "Your shopping cart is empty",
    genericError: "Something went wrong. View cart for details."
};
ebayContent["GlobalHeaderWeb/AutocompleteJavascriptContent"] = {
    acNoSuggestions: "No suggestions",
    acHideSuggestions: "Hide eBay suggestions",
    acShowSuggestions: "Show search suggestions",
    acPopularProducts: "Popular Products",
    acSuggCategory: "${suggestion} <u>\u2013</u> <i>${category}</i>",
    acCatalog: '<a href="http://www.ebay.com/ctg/?_pid=#P#&amp;_trksid="></a>',
    acAllCategories: "All Categories",
    acViewAllSaved: '<a href="/myb/SavedSearches">View All Saved<em>&gt;</em></a>',
    acSuggCategoryIn: "${suggestion} <u>\u2013</u> <u>in</u> <i>${category}</i>",
    acSuggCategorySaved: "${suggestion} <u>in</u> <i>${category}</i><em>|</em> <span>Saved</span>",
    acSuggSaved: "${suggestion} <span>Saved</span>",
    acSuggCategoryRecent: "${suggestion} <u>in</u> <i>${category}</i><em>|</em> <span>Recent</span>",
    acSuggRecent: "${suggestion} <span>Recent</span>",
    acSuggStore: "${suggestion} <u>\u2013</u> <u>in</u><i>eBay Stores</i>",
    acSuggCategoryInAria: "${suggestion} in ${category}",
    acViewAllSavedAria: "View All Saved",
    acHedSavedSearch: "Saved searches",
    acHedSavedSeller: "Saved sellers",
    acHedRecentSearch: "Recent searches",
    acHedPopularSearch: "Popular searches",
    acResultsAccessibility: "${count} results available; to navigate, use up and down arrow keys or swipe left and right on touch devices.",
    acNewnessIndicator: "new results available."
};
(function(a) {
    GH.add("SearchBox_AutoComplete", function() {
        var d;
        return {
            acDisabledClass: "gh-acHidden",
            init: function(g) {
                var e = GH.vCJar,
                    h = GH.Util.getBundle("AutocompleteJavascriptContent");
                d = this;
                !g && e && 1 == e.getBitFlag(e.readCookie("dp1", "pbf"), 29) ? (a(GH.ghAC_id).after("<a id=ghAC-show class='gh-spr icas' title='" + h.acShowSuggestions + "' href='#'></a>"), a(GH.componentID).addClass(d.acDisabledClass), a(GH.ghAC_id).attr({
                        autocomplete: "on",
                        "aria-haspopup": "false"
                    }).removeAttr("autocapitalize autocorrect spellcheck"),
                    a("#ghAC-show").bind("click", function(b) {
                        var f, c = GH.vCJar;
                        b.preventDefault();
                        c && (b = c.readCookie("dp1", "pbf"), c.writeCookielet("dp1", "pbf", c.setBitFlag(b, 29, 0)));
                        a(GH.componentID).removeClass(d.acDisabledClass);
                        GH.Util.cTImg("/roverclk/0/0/9?trknvp=sid%3D" + GH.Util.cTId("1315"));
                        GH.SearchBox_AutoComplete.init(!0);
                        a("#ghAC-show").remove();
                        a(GH.ghAC_id).mouseenter();
                        f = function() {
                            typeof a(GH.ghAC_id).autocomplete == GH.functionStr ? a(GH.ghAC_id).autocomplete("search").focus() : setTimeout(f, 300)
                        };
                        setTimeout(f,
                            300)
                    })) : a(GH.ghAC_id).bind("mouseenter focusin keydown", function() {
                    a(GH.ghAC_id).unbind("mouseenter focusin keydown");
                    var b = GH.urls.autocomplete_js;
                    GH.sec && (b = b.replace(/^http:\/\/ir./, "https://secureir."));
                    a.ajax(b, {
                        dataType: "jsonp",
                        cache: !0,
                        jsonp: !1,
                        error: function(a) {
                            200 != a.status && GH.Util.cTImg(GH.ghiIMP + 30)
                        }
                    })
                })
            }
        }
    })
})(GH.jQ);
(function(b) {
    GH.add("TMX", function() {
        var a;
        return {
            execute_immediately: function() {
                a = this;
                a.tmxEnabled = !0;
                if (GH.C.tmx) {
                    var c = function() {
                        GH.userAuth && a.tmxEnabled && (b("body").append('<iframe src="' + GH.C.tmx + '" style="display:none;" tabindex="-1"></iframe>'), a.tmxEnabled = !1, 0.1 >= Math.random() && GH.Util.cTImg(GH.ghiIMP + 142))
                    };
                    b(document).on("gh_tmx_stop", function() {
                        a.tmxEnabled = !1;
                        b(window).off("load.ght")
                    });
                    b(document).on("gh_tmx_load", function() {
                        a.tmxEnabled = !0;
                        c()
                    });
                    b(window).on("load.ght", function() {
                        c()
                    })
                }
            }
        }
    })
})(GH.jQ);
ebayContent["GlobalHeaderWeb/InflowJSContent"] = {
    url: '<a href="http://ocsrest.ebay.com/ocsrsapp/o2/inflow/inflowcomponent?callback=Inflow.cb"></a>'
};
(function() {
    GH.add("Inflow", function() {
        return {
            init: function() {
                window.addEventListener("load", function() {
                    var a = document.getElementById("gh-ihelp"),
                        a = a && "" !== a.innerHTML ? a.innerHTML : "{}",
                        a = /^[\],:{}\s]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ? JSON.parse(a) : {};
                    setTimeout(function() {
                        var a = GH.Util.getSecURL(GH.Util.getHref(GH.Util.getBundle("InflowJSContent").url));
                        a && GH.Inflow.loadScript(a +
                            "&fromGH=true&input=" + encodeURIComponent(JSON.stringify(GH.Inflow.getData())))
                    }, a.delay || 300)
                })
            },
            getData: function() {
                var a = [31, 215, 248, 900, 107, 22, 206, 12, 28, 44, 46, 51, 60, 61, 63, 85, 91, 136, 150, 158, 160, 214, 225, 252, 213, 223],
                    a = "function" == typeof a.indexOf && -1 < a.indexOf(parseInt(GH.C.siteId));
                return GH.Inflow.extend(JSON.parse((document.getElementById("inflowparameters") || []).value || "{}"), {
                    pageId: GH.C.pageId,
                    gbhEnabled: a
                }, a ? {
                    gbhSiteId: parseInt(GH.C.siteId),
                    gbhLanguage: GH.C.lng || ""
                } : {})
            },
            extend: function() {
                for (var a =
                        1; a < arguments.length; a++)
                    for (var b in arguments[a]) arguments[a].hasOwnProperty(b) && (arguments[0][b] = arguments[a][b]);
                return arguments[0]
            },
            loadScript: function(a) {
                var b = document.createElement("script");
                b.type = "text/javascript";
                b.src = a;
                document.body.appendChild(b)
            }
        }
    })
})();
(function(j) {
    GH.add("ScreenDetail", function() {
        var c;
        return {
            init: function() {
                c = this;
                c.getScreenDetail(c.getConfig())
            },
            getConfig: function() {
                var a = document.getElementById("gh-screen"),
                    a = null != a ? c.getJSON(a.innerHTML) : {},
                    d = {};
                j.extend(d, {
                    currentResValue: {
                        maxWidth: -1,
                        minWidth: -1,
                        name: "DEFAULT",
                        value: 0,
                        id: 0,
                        integer: 0
                    },
                    resRange: [{
                        minWidth: -1,
                        maxWidth: -1,
                        name: "DEFAULT",
                        value: 0,
                        id: 0,
                        integer: 0
                    }, {
                        minWidth: 0,
                        maxWidth: 1024,
                        name: "RES_1024",
                        value: 1,
                        id: 1,
                        integer: 1
                    }, {
                        minWidth: 1025,
                        maxWidth: 1152,
                        name: "RES_1152",
                        value: 2,
                        id: 2,
                        integer: 2
                    }, {
                        minWidth: 1153,
                        maxWidth: 1280,
                        name: "RES_1280",
                        value: 3,
                        id: 3,
                        integer: 3
                    }, {
                        minWidth: 1281,
                        maxWidth: 1366,
                        name: "RES_1366",
                        value: 4,
                        id: 4,
                        integer: 4
                    }, {
                        minWidth: 1367,
                        maxWidth: 1440,
                        name: "RES_1440",
                        value: 5,
                        id: 5,
                        integer: 5
                    }, {
                        minWidth: 1441,
                        maxWidth: 1680,
                        name: "RES_1680",
                        value: 6,
                        id: 6,
                        integer: 6
                    }, {
                        minWidth: 1681,
                        maxWidth: 2147483647,
                        name: "RES_MAX",
                        value: 7,
                        id: 7,
                        integer: 7
                    }],
                    resBits: [85, 86, 87],
                    cookieName: "dp1",
                    cookieletName: "pbf",
                    currentViewportValue: {
                        maxWidth: -1,
                        minWidth: -1,
                        name: "DEFAULT",
                        value: 0,
                        id: 0,
                        integer: 0
                    },
                    viewportBits: [69, 70, 71],
                    viewportRange: [{
                        minWidth: -1,
                        maxWidth: -1,
                        name: "DEFAULT",
                        value: 0,
                        id: 0,
                        integer: 0
                    }, {
                        minWidth: 0,
                        maxWidth: 1020,
                        name: "VIEWPORT_1",
                        value: 1,
                        id: 1,
                        integer: 1
                    }, {
                        minWidth: 1021,
                        maxWidth: 1024,
                        name: "VIEWPORT_2",
                        value: 2,
                        id: 2,
                        integer: 2
                    }, {
                        minWidth: 1025,
                        maxWidth: 1148,
                        name: "VIEWPORT_3",
                        value: 3,
                        id: 3,
                        integer: 3
                    }, {
                        minWidth: 1149,
                        maxWidth: 1152,
                        name: "VIEWPORT_4",
                        value: 4,
                        id: 4,
                        integer: 4
                    }, {
                        minWidth: 1153,
                        maxWidth: 1276,
                        name: "VIEWPORT_5",
                        value: 5,
                        id: 5,
                        integer: 5
                    }, {
                        minWidth: 1277,
                        maxWidth: 1280,
                        name: "VIEWPORT_6",
                        value: 6,
                        id: 6,
                        integer: 6
                    }, {
                        minWidth: 1281,
                        maxWidth: 2147483647,
                        name: "VIEWPORT_7",
                        value: 7,
                        id: 7,
                        integer: 7
                    }]
                }, a);
                return d
            },
            getScreenDetail: function(a) {
                c.screenResolution(a.currentResValue, a.resRange, a.resBits, a.cookieName, a.cookieletName);
                c.browserViewPort(a.currentViewportValue, a.viewportRange, a.viewportBits, a.cookieName, a.cookieletName)
            },
            screenResolution: function(a, d, i, e, f) {
                var b = 0,
                    g = screen.width;
                0 < g && (b = c.getRangeValue(g, d));
                a && (b !== a.id && i) && c.setCookie(b, i, e, f)
            },
            browserViewPort: function(a, d, i, e, f) {
                var b,
                    g = screen.width,
                    h = 0;
                document && document.documentElement && (b = parseInt(document.documentElement.clientWidth), 0 < b && (b += c.scrollBarWidth(), b > g && (b = g), h = c.getRangeValue(b, d, e, f)));
                a && (h != a.id && i) && c.setCookie(h, i, e, f)
            },
            getRangeValue: function(a, d) {
                var c = 0;
                if (d)
                    for (var e = d.length - 1; 0 <= e; e--)
                        if (a >= d[e].minWidth && a <= d[e].maxWidth) {
                            c = d[e].id;
                            break
                        }
                return c
            },
            scrollBarWidth: function() {
                return GH && GH.Util && GH.Util.browser && GH.Util.browser.msie && 9 > GH.Util.browser.version ? 21 : 17
            },
            setCookie: function(a, d, c, e) {
                var f, b,
                    g;
                if (GH && GH.vCJar) {
                    f = GH.vCJar;
                    b = f.readCookie(c, e);
                    b = b.match(/(#)?([0-9a-f]*)/i);
                    b = "#".concat(b[1] ? b[2] : parseInt(b[2] ? b[2] : "0", 10).toString(16));
                    g = d.length;
                    for (var h = 0; h < g; h++, a >>= 1) b = f.setBitFlag(b, d[h], a & 1);
                    f.writeCookielet(c, e, b)
                }
            },
            getJSON: function(a) {
                try {
                    return JSON.parse(a)
                } catch (c) {
                    return {}
                }
            }
        }
    })
})(GH.jQ);
(function() {
    GH.add("ABDETECTION", function() {
        var a;
        return {
            cfg: {},
            postDetectionActionsCompleted: !1,
            init: function() {
                a = this;
                a.cfg = window.GH_ABD && window.GH_ABD.cfg;
                window.addEventListener("load", a.onLoad.bind(a));
                window.addEventListener("beforeunload", a.onUnload.bind(a))
            },
            onLoad: function() {
                window.GH_ABD && window.GH_ABD.detectionCompleted && this.postDetectionActions()
            },
            onUnload: function() {
                this.postDetectionActionsCompleted || this.postDetectionActions()
            },
            postDetectionActions: function() {
                this.postDetectionActionsCompleted = !0;
                window && window.GH_ABD && (window.GH_ABD.bannerCollapsed || "undefined" === typeof window.GH_ABD.externaJs || !1 === window.GH_ABD.externaJs) ? this.setCookieAndTrack(1) : this.setCookieAndTrack(0)
            },
            setCookieAndTrack: function(b) {
                try {
                    a.readCookieValue().toString() !== b.toString() ? (a.writeToCookie(a.cfg.ckbit, b), 0 === b ? a.triggerEvent({
                        state: "JUST_DISABLED"
                    }) : 1 === b && a.triggerEvent({
                        state: "JUST_ENABLED"
                    })) : 1 === b && a.triggerEvent({
                        state: "ALREADY_ENABLED"
                    })
                } catch (e) {}
            },
            readCookieValue: function() {
                if (GH && GH.vCJar) {
                    var b =
                        GH.vCJar.readCookie("dp1", "pbf");
                    return GH.vCJar.getBitFlag(b, a.cfg.ckbit)
                }
            },
            writeToCookie: function(a, e) {
                var c;
                if (GH && GH.vCJar && a) {
                    c = GH.vCJar;
                    var d = c.readCookie("dp1", "pbf"),
                        d = c.setBitFlag(d || "#", a, e || 0);
                    c.writeCookielet("dp1", "pbf", d, "", "")
                }
            },
            triggerEvent: function(a) {
                "function" === typeof document.dispatchEvent && "function" === typeof window.CustomEvent && document.dispatchEvent(new CustomEvent("GH_ABD_STATUS", {
                    detail: a
                }))
            }
        }
    })
})();
(function() {
    GH.add("WEB_RESOURCE_TRACKER", function() {
        function b() {
            if (c) {
                var a = document.createElement("script");
                a.src = c;
                a.async = !1;
                document.body.appendChild(a)
            }
        }
        var c = GH.urls.web_resource_tracker && GH.Util.getSecURL(GH.urls.web_resource_tracker);
        return {
            execute_immediately: function() {
                window.addEventListener("load", function() {
                    if (c) {
                        var a = (new Date).getTime();
                        "undefined" !== typeof $ssgST && 0 === a % 10 && ("requestIdleCallback" in window ? window.requestIdleCallback(b) : "requestAnimationFrame" in window ? window.requestAnimationFrame(b) :
                            b())
                    }
                })
            }
        }
    })
})(GH.jQ);
(function() {
    GH && GH.add("AUTO_TRACKING_WIDGET", function() {
        function c() {
            if (b) {
                var a = document.createElement("script");
                a.src = b;
                a.async = !0;
                document.body.appendChild(a)
            }
        }
        var b = null;
        GH.urls && (b = GH.urls.auto_tracking_widget && GH.Util.getSecURL(GH.urls.auto_tracking_widget));
        return {
            execute_immediately: function() {
                window.addEventListener("load", function() {
                    if (b) {
                        window._eaTrks = window._eaTrks || [];
                        var a = function() {
                            window._eaTrks.push(arguments)
                        };
                        a("config", "eventFamily", "AUTO_TRACKING");
                        a("start");
                        "requestIdleCallback" in
                        window ? window.requestIdleCallback(c) : "requestAnimationFrame" in window ? window.requestAnimationFrame(c) : c()
                    }
                })
            }
        }
    })
})(GH.jQ);
GH.getWidgetDeliveryPlatform = function() {
    return {
        base_path: "/gh",
        new_buyer_acquistion: "/useracquisition"
    }
};
(function() {
    GH.add("WIDGET_DELIVERY_PLATFORM", function() {
        function a() {
            if (b) {
                var a = document.createElement("script");
                a.src = b;
                a.async = !0;
                document.body.appendChild(a)
            }
        }
        var b = GH.urls.widget_delivery_platform && GH.Util.getSecURL(GH.urls.widget_delivery_platform);
        return {
            execute_immediately: function() {
                window.addEventListener("load", function() {
                    b && ("requestIdleCallback" in window ? window.requestIdleCallback(a) : "requestAnimationFrame" in window ? window.requestAnimationFrame(a) : a())
                })
            }
        }
    })
})(GH.jQ);
ebayContent["GlobalHeaderWeb/BackToTopJavascriptContent"] = {
    arrowImage: '<img title="Scroll to top" src="http://ir.ebaystatic.com/pictures/aw/pics/globalheader/btt.png" alt="Scroll to top" border="0" height="76" width="33" _id="gh-bti"/>'
};
(function(c) {
    GH.add("BackToTop", function() {
        var a, e = GH.Util.getBundle("BackToTopJavascriptContent");
        return {
            bttWindow: GH.jQ(window),
            init: function() {
                a = this;
                GH.jQ(".sp-tp").remove();
                a.bttWindow.on("scroll.gh", a.rerun)
            },
            rerun: function() {
                a.bttWindow.off("scroll.gh", a.rerun);
                window.setTimeout(function() {
                        var b = a.bttWindow.scrollTop(),
                            d = 350 < b;
                        if (void 0 !== GH.previousTopPosition && GH.previousTopPosition === b) {
                            if (!GH.$ghbt) {
                                GH.$ghbt = GH.jQ("<button/>").attr({
                                    id: "gh-bt",
                                    "class": "gh-hide-if-nocss"
                                });
                                var f = c(GH.Util.getSecURL(e.arrowImage, !0, !0)).attr("id", "gh-bti");
                                GH.$ghbt.append(f);
                                GH.jQ("body").append(GH.$ghbt);
                                GH.$ghbt.click(function(a) {
                                    a.preventDefault();
                                    GH.jQ("body,html").animate({
                                        scrollTop: 0
                                    }, /iPad/i.test(GH.userAgent) ? 0 : 150, function() {
                                        c("#gh-gb").focus()
                                    });
                                    GH.Util.cTImg(GH.ghiIMP + 43)
                                })
                            }
                            GH.$ghbt.animate({
                                right: d ? -1 : -1 * GH.$ghbt.outerWidth()
                            }, d ? 500 : 50, function() {
                                if (b === a.bttWindow.scrollTop()) a.bttWindow.on("scroll.gh", a.rerun);
                                else GH.previousTopPosition = a.bttWindow.scrollTop(), a.rerun()
                            })
                        } else GH.previousTopPosition = b, a.rerun()
                    },
                    100)
            }
        }
    })
})(GH.jQ);
(function(e) {
    GH.add("PulsarPolyfill", function() {
        return {
            init: function() {
                function f(c, b) {
                    c = c || {};
                    if ("object" === typeof b)
                        for (var a in b)
                            if (b.hasOwnProperty(a)) {
                                var d = g[a] ? g[a] : a;
                                "object" === typeof b[a] ? 0 < b[a].length ? c[d] = b[a].join(",") : f(c, b[a]) : ("moduledtl" === d && (b[a] = decodeURIComponent(b[a])), c[d] = b[a])
                            }
                    return c
                }
                var i = "object" === typeof _plsUBTTQ,
                    h = !1;
                try {
                    h = "object" === typeof raptor && "function" === typeof raptor.require && "function" === typeof raptor.require("raptor.tracking.core.Tracker"), raptor.require("raptor.tracking.core.Tracker")
                } catch (j) {}
                var g = {
                    eventAction: "eactn",
                    eventFamily: "efam",
                    operationId: "cp"
                };
                if (!i && h) e(document).on("pulsar", function(c, b) {
                    var a = f({}, b || c && c.originalEvent && c.originalEvent.detail && c.originalEvent.detail[0] || {}) || {};
                    a.imp = "2208336";
                    a && e(document).trigger("rover", a)
                })
            }
        }
    })
})(GH.jQ);