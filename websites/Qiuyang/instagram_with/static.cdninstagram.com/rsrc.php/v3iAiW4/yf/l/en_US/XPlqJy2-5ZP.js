if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

__d("useServerTime", ["JSScheduler", "ServerTime", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
        i = b.useState,
        j = 6e4,
        k = new Set(),
        l = null,
        m = !1;

    function n() {
        k.forEach(function(a) {
            return a()
        }), m = !1
    }

    function o(a) {
        a === void 0 && (a = j), l = window.setInterval(function() {
            m || (m = !0, d("JSScheduler").scheduleSpeculativeCallback(n))
        }, a)
    }

    function p() {
        k.size === 0 && (window.clearInterval(l), l = null)
    }

    function q(a, b) {
        b === void 0 && (b = j);
        k.add(a);
        l == null && o(b);
        return function() {
            k["delete"](a), p()
        }
    }

    function r() {
        return new Date(d("ServerTime").getMillis())
    }

    function a(a) {
        a === void 0 && (a = j);
        var b = i(function() {
                return r()
            }),
            c = b[0],
            d = b[1],
            e = function() {
                return d(r())
            };
        h(function() {
            return q(e, a)
        }, [a]);
        return c
    }
    g["default"] = a
}, 98);
__d("CometRelativeTimestamp.react", ["fbt", "react", "useServerTime"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    e = d("react");

    function i(a, b) {
        if (b === "minimized") return h._("1m");
        else if (b === "shortened") return h._("Just now");
        return h._("a few seconds ago")
    }

    function j(a, b) {
        return b === "minimized" ? h._("1m") : h._("in a few seconds")
    }

    function k(a, b) {
        if (b === "minimized") return h._({
            "*": "{minutes}m"
        }, [h._param("minutes", a, [0])]);
        else if (b === "shortened") return h._({
            "*": "{number} mins",
            "_1": "1 min"
        }, [h._plural(a, "number")]);
        return h._({
            "*": "{number} minutes ago",
            "_1": "about a minute ago"
        }, [h._plural(a, "number")])
    }

    function l(a, b) {
        if (b === "minimized") return h._({
            "*": "in {minutes}m"
        }, [h._param("minutes", a, [0])]);
        else if (b === "shortened") return h._({
            "*": "in {number} mins",
            "_1": "in 1 min"
        }, [h._plural(a, "number")]);
        return h._({
            "*": "in {number} minutes",
            "_1": "in about a minute"
        }, [h._plural(a, "number")])
    }

    function m(a, b) {
        if (b === "minimized") return h._("{hours}h", [h._param("hours", a)]);
        else if (b === "shortened") return h._({
            "*": "{number} hrs",
            "_1": "1 hr"
        }, [h._plural(a, "number")]);
        return h._({
            "*": "{number} hours ago",
            "_1": "about an hour ago"
        }, [h._plural(a, "number")])
    }

    function n(a, b) {
        if (b === "minimized") return h._("in {hours}h", [h._param("hours", a)]);
        else if (b === "shortened") return h._({
            "*": "in {number} hrs",
            "_1": "in 1 hr"
        }, [h._plural(a, "number")]);
        return h._({
            "*": "in {number} hours",
            "_1": "in about an hour"
        }, [h._plural(a, "number")])
    }

    function o(a, b) {
        if (b === "minimized") return h._("{days}d", [h._param("days", a)]);
        else if (b === "shortened") return h._({
            "*": "{number} days",
            "_1": "1 day"
        }, [h._plural(a, "number")]);
        return h._({
            "*": "{number} days ago",
            "_1": "a day ago"
        }, [h._plural(a, "number")])
    }

    function p(a, b) {
        if (b === "minimized") return h._("in {days}d", [h._param("days", a)]);
        else if (b === "shortened") return h._({
            "*": "in {number} days",
            "_1": "in 1 day"
        }, [h._plural(a, "number")]);
        return h._({
            "*": "in {number} days",
            "_1": "in a day"
        }, [h._plural(a, "number")])
    }

    function q(a, b) {
        if (b === "minimized") return h._("{weeks}w", [h._param("weeks", a)]);
        else if (b === "shortened") return h._({
            "*": "{number} wks",
            "_1": "1 wk"
        }, [h._plural(a, "number")]);
        return h._({
            "*": "{number} weeks ago",
            "_1": "a week ago"
        }, [h._plural(a, "number")])
    }

    function r(a, b) {
        if (b === "minimized") return h._("in {weeks}w", [h._param("weeks", a)]);
        else if (b === "shortened") return h._({
            "*": "in {number} wks",
            "_1": "in 1 wk"
        }, [h._plural(a, "number")]);
        return h._({
            "*": "in {number} weeks",
            "_1": "in a week"
        }, [h._plural(a, "number")])
    }

    function s(a, b) {
        if (b === "minimized") return h._("{years}y", [h._param("years", a)]);
        else if (b === "shortened") return h._({
            "*": "{number} yrs",
            "_1": "1 yr"
        }, [h._plural(a, "number")]);
        return h._({
            "*": "{number} years ago",
            "_1": "a year ago"
        }, [h._plural(a, "number")])
    }

    function t(a, b) {
        if (b === "minimized") return h._("in {years}y", [h._param("years", a)]);
        else if (b === "shortened") return h._({
            "*": "in {number} yrs",
            "_1": "in 1 yr"
        }, [h._plural(a, "number")]);
        return h._({
            "*": "in {number} years",
            "_1": "in a year"
        }, [h._plural(a, "number")])
    }
    var u = 60,
        v = 60,
        w = 24,
        x = 7,
        y = 365;

    function z(a, b, c) {
        c === void 0 && (c = "normal");
        a = (a.valueOf() - b.valueOf()) / 1e3;
        if (a < u) return i(a, c);
        b = a / u;
        a = Math.floor(b);
        if (a < v) return k(a, c);
        a = b / v;
        b = Math.floor(a);
        if (b < w) return m(b, c);
        b = a / w;
        a = Math.floor(b);
        if (a < x) return o(a, c);
        else if (b < y) {
            a = Math.floor(b / x);
            return q(a, c)
        }
        a = Math.floor(b / y);
        return s(a, c)
    }

    function a(a, b, c) {
        c === void 0 && (c = "normal");
        b = (b.valueOf() - a.valueOf()) / 1e3;
        if (b < u) return j(b, c);
        a = b / u;
        b = Math.floor(a);
        if (b < v) return l(b, c);
        b = a / v;
        a = Math.floor(a / v);
        if (a < w) return n(a, c);
        a = b / w;
        b = Math.floor(a);
        if (b < x) return p(b, c);
        else if (a < y) {
            b = Math.floor(a / x);
            return r(b, c)
        }
        b = Math.floor(a / y);
        return t(b, c)
    }

    function b(a) {
        var b = a.date;
        a = a.format;
        var d = c("useServerTime")();
        d = z(d, b, a);
        return d
    }
    b.displayName = b.name + " [from " + f.id + "]";
    b.getRelativeTimestamp = z;
    b.getRelativeTimestampInFuture = a;
    g["default"] = b
}, 98);
__d("PolarisIGCoreXOutlineIcon", ["PolarisIGCoreXPanoOutlineIcon", "react"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("PolarisIGCoreXPanoOutlineIcon"), babelHelpers["extends"]({}, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b
}, 98);
__d("PolarisProfileLiveRoot.entrypoint", ["JSResourceForInteraction"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            return {
                queries: {}
            }
        },
        root: c("JSResourceForInteraction")("PolarisProfileLiveRoot.react").__setRef("PolarisProfileLiveRoot.entrypoint")
    };
    g["default"] = a
}, 98);
__d("PolarisProfileRelatedRoot.entrypoint", ["JSResourceForInteraction"], function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            return {
                queries: {}
            }
        },
        root: c("JSResourceForInteraction")("PolarisProfileRelatedRoot.react").__setRef("PolarisProfileRelatedRoot.entrypoint")
    };
    g["default"] = a
}, 98);
__d("DataStore", ["DataStoreConfig", "gkx", "isEmpty"], function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("DataStoreConfig").expandoKey,
        i = b("DataStoreConfig").useExpando,
        j = b("gkx")("1073500") && window.WeakMap ? new window.WeakMap() : null,
        k = {},
        l = 1;

    function m(a) {
        if (typeof a === "string") return "str_" + a;
        else {
            var b;
            return "elem_" + ((b = a.__FB_TOKEN) != null ? b : a.__FB_TOKEN = [l++])[0]
        }
    }

    function n(a) {
        if (j != null && typeof a === "object") {
            j.get(a) === void 0 && j.set(a, {});
            return j.get(a)
        } else if (i && typeof a === "object") return a[h] || (a[h] = {});
        a = m(a);
        return k[a] || (k[a] = {})
    }
    var o = {
        set: function(a, b, c) {
            if (!a) throw new TypeError("DataStore.set: namespace is required, got " + typeof a);
            var d = n(a);
            d[b] = c;
            return a
        },
        get: function(a, b, c) {
            if (!a) throw new TypeError("DataStore.get: namespace is required, got " + typeof a);
            var d = n(a),
                e = d[b];
            if (e === void 0 && a.getAttribute != null)
                if (a.hasAttribute != null && !a.hasAttribute("data-" + b)) e = void 0;
                else {
                    a = a.getAttribute("data-" + b);
                    e = null === a ? void 0 : a
                }
            c !== void 0 && e === void 0 && (e = d[b] = c);
            return e
        },
        remove: function(a, c) {
            if (!a) throw new TypeError("DataStore.remove: namespace is required, got " + typeof a);
            var d = n(a),
                e = d[c];
            delete d[c];
            (g || (g = b("isEmpty")))(d) && o.purge(a);
            return e
        },
        purge: function(a) {
            if (j != null && typeof a === "object") return j["delete"](a);
            else i && typeof a === "object" ? delete a[h] : delete k[m(a)]
        },
        _storage: k
    };
    e.exports = o
}, null);
__d("MessengerWebQuickLogModule", [], function(a, b, c, d, e, f) {
    a = Object.freeze({
        ARMADILLO_WEB_VIDEO_TYPE_CHECK: 25309473,
        BLENDED_THREADLIST_IN_JEWEL_VC: 25312207,
        COMPOSER_INTERACTION: 25296900,
        FETCH_MORE_THREAD_LIST: 25296906,
        FETCH_THREAD_INFO: 25296904,
        FETCH_THREAD_LIST: 25296905,
        FIRSTCHATTABOPEN_WWW: 25296897,
        FORWARD_INTERACTION: 25298392,
        GROUP_INPUT_INDIVIDUAL_TAB_OPEN_WWW: 25296899,
        INBOX_THREAD_NAVIGATION: 25304023,
        JUMP_TO_MOST_RECENT_MESSAGE: 25300623,
        JUMP_TO_REPLIED_MESSAGE: 25301087,
        KEY_UPLOAD_IDENTITY_CHANGE: 25308792,
        LS_INIT: 25305590,
        LS_PLATFORM_LOGOUT: 25311266,
        MAW_APP_STATE_SYNC_DAILY: 25306941,
        MAW_BRIDGE_TIMEOUT: 25300103,
        MAW_BULK_WRITE_RECEIPTS: 25297955,
        MAW_CURRENT_DEVICE_UPDATE: 25311782,
        MAW_CURRENT_USER_KEY_CHANGE: 25311490,
        MAW_DECRYPT_MESSAGE: 25306682,
        MAW_DECRYPT_MESSAGE_FINAL: 25307464,
        MAW_DEVICE_REGISTRATION: 25302457,
        MAW_ENCRYPTION_AT_REST_DECRYPT: 25313004,
        MAW_ENCRYPTION_AT_REST_ENCRYPT: 25300256,
        MAW_ENCRYPT_MESSAGE: 25299294,
        MAW_FRANKING_VALIDATION: 25299246,
        MAW_GET_DEVICES: 25307483,
        MAW_HANDLE_INCOMING_MSG_TXN: 25311150,
        MAW_ICDC_ERROR: 25313187,
        MAW_IDB_NOT_SUPPORTED: 25299354,
        MAW_INIT: 25310776,
        MAW_LOCAL_STORAGE_NOT_SUPPORTED: 25309925,
        MAW_MAYBE_WITH_TIMEOUT: 25301116,
        MAW_MEDIA_DOWNLOAD: 25312150,
        MAW_MEDIA_UPLOAD: 25313100,
        MAW_MESSAGE_LIST_PROCESSINIG: 25308079,
        MAW_MULTI_TAB_MUTEX_NO_PERMISSION_INIT: 25310181,
        MAW_MULTI_TAB_MUTEX_NO_PERMISSION_LOCALTAKEOVER: 25312554,
        MAW_MULTI_TAB_MUTEX_NO_PERMISSION_REINIT: 25299377,
        MAW_MULTI_TAB_WORKER_REINIT: 25310984,
        MAW_OCCAMADILLO_CREATE_THREAD: 25312774,
        MAW_OCCAMADILLO_INIT_SYNC: 25300040,
        MAW_OFFLINE_QUEUE_EXECUTION: 25306361,
        MAW_OFFLINE_RETRY: 25309990,
        MAW_PRE_LOGOUT: 25309731,
        MAW_QUERY_GROUP: 25310326,
        MAW_QUERY_GROUPS: 25304433,
        MAW_RETRY_RECEIPTS: 25308942,
        MAW_RETRY_RECEIPTS_SENT: 25301644,
        MAW_SAVE_SIGNAL_SESSION_RETRIES: 25309040,
        MAW_SEND_MESSAGE: 25303022,
        MAW_SYNCD: 25308683,
        MAW_SYNCD_BOOTSTRAP_APP_STATE_DOWNLOAD: 25300196,
        MAW_SYNCD_BOOTSTRAP_DATA_APPLIED: 25300822,
        MAW_SYNCD_CRITICAL_BOOTSTRAP_STAGE: 25308084,
        MAW_SYNCD_CRITICAL_EVENT: 25311142,
        MAW_SYNCD_DECRYPT_MUTATIONS: 25305739,
        MAW_SYNCD_FATAL_ERROR: 25310891,
        MAW_TIMED_WAIT_UNTIL_COMPLETED: 25301560,
        MAW_TIMED_WAIT_UNTIL_PERSISTED: 25305468,
        MAW_TRANSACTION: 25310437,
        MAW_UNVAULT: 25313217,
        MAW_UPDATE_DEVICES_FOR_USER_TXN: 25310731,
        MAW_VAULT: 25301509,
        MAW_WA_CONNECTIVITY: 25312111,
        MAW_WA_CREATE_GROUP: 25307987,
        MAW_WA_FAILURES: 25299391,
        MAW_WA_JOBS_ORCHESTRATOR: 25311870,
        MAW_WA_REMOVE_PARTICIPANTS: 25312342,
        MAW_WA_SEND_MESSAGE: 25304093,
        MAW_WRITE_MSG_RECEIPTS_TXN: 25299660,
        PAGE_LOAD_MDOTCOM_WWW: 25296901,
        PRESENCE_MSYS_EXP: 25307064,
        REPLY_INTERACTION: 25298086,
        SEND_MESSAGE: 25296903,
        SPROC_CALL: 25302991,
        THREAD_LOAD_MDOTCOM_WWW: 25296902,
        THREAD_NAVIGATION: 25305256
    });
    f["default"] = a
}, 66);