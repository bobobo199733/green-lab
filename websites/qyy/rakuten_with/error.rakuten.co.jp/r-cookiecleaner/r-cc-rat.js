/*! r-cookie-cleaner-js 2.1.3 17b524 2021-02-15  Copyright @copy; @2013-2021 Rakuten.Inc */
var cookie_cleaner = cookie_cleaner || {};
cookie_cleaner.clz = cookie_cleaner.clz || {}, cookie_cleaner.clz.CcLogger = function(e) {
    var r = {
            debug: 1,
            info: 3,
            warn: 5,
            error: 7
        },
        i = r[e || "error"] || r.info;

    function n(o, e, r, n, t) {
        if (i <= e) try {
            o("[" + r + "] " + n), t && o(t)
        } catch (e) {
            console.info("[" + r + "] " + n), t && o(t)
        }
    }
    return {
        info: function(e, o) {
            return n(console.info, r.info, "INFO", e, o)
        },
        warn: function(e, o) {
            return n(console.log, r.warn, "WARN", e, o)
        },
        debug: function(e, o) {
            return n(console.debug, r.debug, "DEBUG", e, o)
        },
        error: function(e, o) {
            return n(console.error, r.error, "ERROR", e, o)
        },
        logLevel: i,
        log: n
    }
};
var cookie_cleaner = cookie_cleaner || {};
! function(global) {
    var RCookieCleanerConfig = function(opt) {
        var argOption = opt,
            DEFAULT_RAT_CHECKING_INTERVAL = 200,
            DEFAULT_RAT_CHECKING_TIMEOUT = 1e4,
            DEFAULT_RAT_ACC = 1600,
            DEFAULT_RAT_AID = 1,
            DEFAULT_RAT_EVENT_TYPE = "async",
            DEFAULT_RAT_CP_NAMES_KEY = "del_ck_name",
            DEFAULT_RAT_CP_SIZES_KEY = "del_ck_size",
            DEFAULT_LOG_LEVEL = "error",
            DEFAULT_IMPORT_CHECKING_INTERVAL = 200,
            DEFAULT_IMPORT_DELAY_TIME = 2e4,
            DEFAULT_IMPORT_TIMEOUT = 1e4,
            DEFAULT_IMPORT_FILE_NAME = "r-cc-config.js",
            log = new cookie_cleaner.clz.CcLogger("error"),
            defaultConfig = {
                general: {
                    import: {}
                }
            };

        function getGeneral() {
            return config.general
        }

        function getDomainOption(e) {
            for (var o in config.targetDomains) {
                if (matchStringOrRegExp(changeRegExpIfStartWithHat(o.toLowerCase()), e.toLowerCase())) {
                    var r = config.targetDomains[o],
                        n = {};
                    for (o in n.trigger = config.components.triggers[r.trigger] || {}, n.jobs = [], r.jobs) {
                        var t, i = config.components.jobs[r.jobs[o]];
                        for (t in i) {
                            var a = i[t],
                                c = {};
                            c.domain = i[t].domain, c.sizeToBeRemoved = i[t].sizeToBeRemoved, c.protectCookies = getComponentCookies(a.protectCookies), c.checkCookies = getComponentCookies(a.checkCookies), c.deleteCookies = getComponentCookies(a.deleteCookies), n.jobs.push(c)
                        }
                    }
                    return n
                }
                log.warn("Domain is not matched.")
            }
            return null
        }

        function getComponentCookies(e) {
            var o = [],
                r = [];
            if (e)
                for (var n in e) {
                    var t, i = config.components.cookies[e[n]];
                    for (t in i) {
                        var a = i[t].trim(); - 1 == r.indexOf(a) ? (r.push(a), 0 < a.length && o.push(changeRegExpIfStartWithHat(a))) : log.warn("Duplicated " + a)
                    }
                }
            return o
        }

        function matchStringOrRegExp(e, o) {
            return "string" == typeof e ? e == o : e.test(o)
        }

        function changeRegExpIfStartWithHat(e) {
            return 0 < e.length && "^" == e.charAt(0) ? new RegExp(e) : e
        }

        function getProperty(propertyName, defaultValue) {
            void 0 === defaultValue && (defaultValue = null);
            try {
                var v = eval(propertyName);
                return void 0 === v ? defaultValue : v
            } catch (e) {
                return defaultValue
            }
        }

        function hasProperty(propertyName) {
            try {
                var v = eval(propertyName);
                return void 0 === v ? !1 : !0
            } catch (e) {
                return !1
            }
        }
        var config = argOption && "object" == typeof argOption ? opt : defaultConfig;
        return {
            ratAcc: getProperty("config.general.rat.acc", DEFAULT_RAT_ACC),
            ratAid: getProperty("config.general.rat.aid", DEFAULT_RAT_AID),
            ratEventType: getProperty("config.general.rat.eventType", DEFAULT_RAT_EVENT_TYPE),
            ratCheckingInterval: getProperty("config.general.rat.checkingInterval", DEFAULT_RAT_CHECKING_INTERVAL),
            ratCheckingTimeout: getProperty("config.general.rat.timeout", DEFAULT_RAT_CHECKING_TIMEOUT),
            ratCpNamesKey: getProperty("config.general.rat.cp.names", DEFAULT_RAT_CP_NAMES_KEY),
            ratCpSizesKey: getProperty("config.general.rat.cp.sizes", DEFAULT_RAT_CP_SIZES_KEY),
            hasImport: hasProperty("config.general.import"),
            importHref: getProperty("config.general.import.href"),
            importFile: getProperty("config.general.import.fileName", DEFAULT_IMPORT_FILE_NAME),
            importInterval: getProperty("config.general.import.checkingInterval", DEFAULT_IMPORT_CHECKING_INTERVAL),
            importTimeout: getProperty("config.general.import.timeout", DEFAULT_IMPORT_TIMEOUT),
            importDelayTime: getProperty("config.general.import.delayTime", DEFAULT_IMPORT_DELAY_TIME),
            importCallback: getProperty("config.general.import.callback"),
            importClearCallback: getProperty("config.general.import.clearCallback"),
            importErrorCallback: getProperty("config.general.import.errorCallback"),
            logLevel: getProperty("config.general.logLevel", DEFAULT_LOG_LEVEL),
            config: config,
            getDomainOption: getDomainOption,
            defaultConfig: defaultConfig,
            general: getGeneral()
        }
    };
    cookie_cleaner.clz = cookie_cleaner.clz || {}, cookie_cleaner.clz.RCookieCleanerConfig = RCookieCleanerConfig
}(this);
var cookie_cleaner = cookie_cleaner || {};
cookie_cleaner.clz = cookie_cleaner.clz || {}, cookie_cleaner.clz.RCookieCleanerConfigImporter = function(n, r, o) {
    var t = new cookie_cleaner.clz.CcLogger(n.logLevel || "error"),
        i = !1,
        a = !1;

    function e(e, o) {
        if ("function" != typeof r) throw o + " is not function"
    }

    function c() {
        i = !0
    }
    return e(0, "successFunction"), e(0, "errorFunction"), {
        loadOptionScript: function() {
            return n.hasImport ? (setTimeout(function() {
                var e = n.importHref || function() {
                    var e = document.getElementsByTagName("script"),
                        o = e.length;
                    for (; o--;) {
                        t.info(e[o].src);
                        var r = e[o].src.match(/(^|.*\/)(r-cc[\-0-9a-zA-Z\.]*|cc-main)\.(min.)?js(\?[^\/]*)?$/);
                        if (r) return t.info("Script file is found. : " + r[1]), r[1]
                    }
                    throw t.error("Could not found r-cc*.js in <script> tags"), "Could not found r-cc-*.js in <script> tags"
                }() + n.importFile;
                t.info("Import file url = " + e);
                var o = document.createElement("script");
                o.type = "text/javascript", o.async = "async", o.defer = "defer", o.src = e;
                e = document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(o, e)
            }, n.importDelayTime), e = setInterval(function() {
                if (cookie_cleaner.config) try {
                    t.info("loadOptionSuccess() onload"), a = !0, !(cookie_cleaner.config ? void("function" == typeof n.importCallback && (t.info("callback: " + n.importCallback), n.importCallback())) : t.error("cookie_cleaner.config is not declared.")), c();
                    try {
                        r()
                    } catch (e) {
                        t.error(e)
                    }
                    clearInterval(e)
                } catch (e) {
                    t.warn(e)
                }
            }, n.importInterval), setTimeout(function() {
                if (!cookie_cleaner.config) {
                    t.error("Timeout importing config file.");
                    try {
                        t.info("loadOptionSuccess() onerror"), t.error("Failed to retrieve an external file. "), "function" == typeof n.importCallback && (t.info("callback: " + orgConfig.importCallback), n.importCallback()), c();
                        try {
                            o()
                        } catch (e) {
                            t.error(e)
                        }
                        clearInterval(e)
                    } catch (e) {
                        t.warn(e)
                    }
                }
            }, n.importTimeout + n.importDelayTime), !0) : !(a = i = !0);
            var e
        },
        waitFinishImport: function(e, o) {
            var r;
            i ? e() : (r = setInterval(function() {
                if (i && a) {
                    t.info("waitFinishImport() is success ");
                    try {
                        e()
                    } catch (e) {
                        t.warn(e)
                    }
                    clearInterval(r)
                }
            }, n.importInterval), setTimeout(function() {
                a || (t.error("waitFinishImport() is timeout "), i = !0, o(), "function" == typeof n.importErrorCallback && n.importErrorCallback(), clearInterval(r))
            }, n.importTimeout + n.importDelayTime))
        }
    }
};
var cookie_cleaner = cookie_cleaner || {};
cookie_cleaner.clz = cookie_cleaner.clz || {}, cookie_cleaner.clz.RCookieCleanerRat = function(t) {
    var i = new cookie_cleaner.clz.CcLogger(t.logLevel || "info"),
        a = [];

    function c() {
        try {
            if ("undefined" != typeof RAL && 0 < RAL.callQueue.length) return !0
        } catch (e) {
            i.warn(e)
        }
        return !1
    }
    return {
        waitRatLogSending: function(e, o) {
            var r, n;
            return c() ? (r = !1, n = setInterval(function() {
                if (!c()) {
                    i.info("waitRatLogSending() is sucess."), r = !0;
                    try {
                        e(), clearInterval(n)
                    } catch (e) {
                        i.warn(e)
                    }
                }
            }, t.ratCheckingInterval), setTimeout(function() {
                if (!r) {
                    i.error("waitRatLogSending() is timeout.");
                    try {
                        o(), clearInterval(n)
                    } catch (e) {
                        i.warn(e)
                    }
                }
            }, t.ratCheckingTimeout)) : e(), this
        },
        addRemoveQueue: function(e) {
            return a.push(e), this
        },
        hasDataInRatQueue: c,
        sendRatLog: function() {
            var e, o;
            "undefined" == typeof RAT ? i.warn("The log could not be sent because RAT was not loaded.") : (e = function() {
                var e, o = [],
                    r = [];
                for (e in a) try {
                    o.push(a[e].name), r.push(String(a[e].value.length))
                } catch (e) {
                    i.error("createRatCustomParameter() if failed", e)
                }
                var n = {};
                return 0 < o.length && (n[t.ratCpNamesKey] = o.join(","), n[t.ratCpSizesKey] = r.join(",")), n
            }(), 0 != Object.keys(e).length ? ((o = {}).accountId = t.ratAcc, o.serviceId = t.ratAid, o.cpData = e, o.eventType = t.ratEventType, RAT.addCustomEvent(o), a = [], i.info("RAT has been sent. :" + Object.keys(e))) : i.info("Do not send RAT log because there is no deleted cookie."))
        }
    }
};
var cookie_cleaner = cookie_cleaner || {},
    cc;
cookie_cleaner.clz = cookie_cleaner.clz || {}, cookie_cleaner.clz.RCookieCleaner = function(e) {
    if (! function() {
            if (-1 != window.navigator.userAgent.toLowerCase().indexOf("msie"))
                if (-1 != window.navigator.appVersion.toLowerCase().indexOf("msie")) return !1;
            return !0
        }()) return console.info("This browser is not supported"), {
        cleanup: function() {
            return this
        },
        waitRatLogSending: function() {
            return this
        },
        config: {}
    };
    var i = (e = e || {}).document || document,
        o = i.domain,
        r = new cookie_cleaner.clz.RCookieCleanerConfig(e.userConfig),
        a = null,
        n = r,
        c = new cookie_cleaner.clz.RCookieCleanerRat(r),
        l = new cookie_cleaner.clz.CcLogger(r.logLevel || "error"),
        t = new cookie_cleaner.clz.RCookieCleanerConfigImporter(r, function() {
            r = new cookie_cleaner.clz.RCookieCleanerConfig(cookie_cleaner.config), c = new cookie_cleaner.clz.RCookieCleanerRat(r), a = r.getDomainOption(i.domain)
        }, function() {
            l.error("Config file importing is failure."), a = (r = n).getDomainOption(i.domain)
        });

    function f(e, o) {
        var r = o.value.length - e.value.length;
        return 0 == r ? e.name >= o.name ? 1 : 0 : r
    }

    function g() {
        e: for (var e in a.jobs) {
            var o = a.jobs[e],
                r = C().sort(f),
                n = p(r);
            if (n < a.trigger.terminateSize) break e;
            for (e in r) {
                var t = r[e].name;
                if (! function(e, o) {
                        for (var r in o.protectCookies)
                            if (u(o.protectCookies[r], e)) return 1
                    }(t, o)) {
                    var i = r[e].value;
                    if (m(o, t, i, o.domain, "Reduce cookie"), (n = n - t.length - i.length) < a.trigger.terminateSize) break e
                }
                if (n < a.trigger.terminateSize) break e
            }
        }
    }

    function u(e, o) {
        return "string" == typeof e ? e == o : e.test(o)
    }

    function s() {
        return a ? (p(C()) >= a.trigger.triggerSize && (function() {
            var e = C();
            for (o in a.jobs) {
                var o, r = a.jobs[o];
                for (o in e) {
                    var n, t = e[o].name;
                    for (n in r.deleteCookies) u(r.deleteCookies[n], t) && m(r, t, e[o].value, r.domain, "Delete cookie")
                }
            }
        }(), function() {
            var e = C();
            for (o in a.jobs) {
                var o, r = a.jobs[o];
                for (o in e) {
                    var n, t = e[o].name;
                    for (n in r.checkCookies) {
                        var i = e[o].value;
                        i.length >= r.sizeToBeRemoved && u(r.checkCookies[n], t) && m(r, t, i, r.domain, "Check cookie")
                    }
                }
            }
        }(), p(C()) >= a.trigger.terminateSize && g()), c.sendRatLog()) : l.warn("The current domain config cannot be found. Current domain is " + o), this
    }

    function p(e) {
        var o, r = 0;
        for (o in e) r += e[o].name.length, r += e[o].value.length;
        return r
    }

    function m(e, o, r, n, t) {
        e = e.cookiePath || "/", e = encodeURIComponent(o) + "=; max-age=0; expires=Thu, 1-Jan-1900 00:00:00 GMT; domain=" + n + "; path=" + e + "; Secure; SameSite=None;";
        i.cookie = e, c.addRemoveQueue({
            name: o,
            value: r,
            reason: t
        })
    }

    function C() {
        try {
            var e, o = [],
                r = i.cookie.split(/;/);
            for (e in r) {
                var n = r[e].split(/=/, 2),
                    t = decodeURIComponent(n[0].trim()),
                    n = 1 < n.length ? decodeURIComponent(n[1].trim()) : "";
                o.push({
                    name: t,
                    value: n
                })
            }
            return o
        } catch (e) {
            return l.error("fetchCookies() is failed.", e), []
        }
    }
    return t.loadOptionScript() ? (r = null, delete cookie_cleaner.config) : (cookie_cleaner.config = r, a = r.getDomainOption(i.domain)), {
        cleanup: n.hasImport ? function() {
            return t.waitFinishImport(function() {
                s(), "function" == typeof n.importClearCallback && n.importClearCallback()
            }, function() {}), this
        } : s,
        waitRatLogSending: function(e, o) {
            t.waitFinishImport(function() {
                c.waitRatLogSending(e, o)
            }, o)
        },
        config: r
    }
}, cookie_cleaner && (cc = new cookie_cleaner.clz.RCookieCleaner({
    userConfig: {
        general: {
            import: {
                fileName: "r-cc-config-rat.js"
            }
        }
    }
}), cc.cleanup());