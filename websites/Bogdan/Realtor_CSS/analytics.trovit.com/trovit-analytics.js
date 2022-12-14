! function(a, b, c) {
    "use strict";
    var d = "js-1.2.0",
        e = 7,
        f = [],
        g = null,
        h = function(a, b) {
            f.push({
                action: a,
                arguments: b
            }), g && (window.clearTimeout(g), g = null), g = window.setTimeout(i, 500)
        },
        i = function(a, b) {
            if (!f.length) return !1;
            for (var c = 0, d = f.length; d > c; c++) {
                var e = f.shift();
                j(e.action, e.arguments)
            }
            return !0
        },
        j = function(a, b) {
            if (!a) return console.error("Action not recognized"), !1;
            if ("init" == a) return k(b[1], b[2], b[3]), !0;
            var c = r("_ta").split("~"),
                d = c[0] || void 0,
                e = c[1] || void 0,
                f = c[2] || void 0;
            if (!d || !e || !f) return console.error("Failed action. Tracker not initialized!"), !1;
            switch (a) {
                case "send":
                    l(b[1], b);
                    break;
                default:
                    return console.error("!!! Action not available for Trovit Partners Pixel..."), !1
            }
            return !0
        },
        k = function(a, b, c) {
            if (!a || !b || !c) return console.error("Failed to init tracker. Missing params!"), !1;
            var d = r("_tas"),
                e = document.referrer || "",
                f = document.domain,
                g = "" != e && -1 == e.indexOf(f),
                h = "self",
                i = r("_tac"),
                j = "not-available",
                k = r("__utmz");
            if (g ? h = /[a-z0-9-]+:\/\/([a-z0-9]+\.)?([a-z0-9]+)\..*/.exec(e)[2] : (i && (h = i.split("~")[1]), h.indexOf("|") >= 1 && (h = h.split("|")[0])), k) {
                var l = /utmcsr=([a-z0-9-_\.\(\)]+)\|/.exec(k);
                l && (j = l[1])
            }
            return q("_tac", g + "~" + h + "|" + j), "" == d && (d = Math.random().toString(36).slice(2)), q("_ta", a + "~" + b + "~" + c), q("_tas", d, 900), !0
        },
        l = function(a, b) {
            var c = document.location.href,
                e = r("_ta").split("~"),
                f = r("_tac").split("~"),
                g = {
                    _c: e[0],
                    _v: e[1],
                    sid: e[2],
                    _dc: f[0],
                    _sr: f[1],
                    _t: a,
                    _sv: d,
                    _z: (new Date).getTime(),
                    lbl: a
                };
            if (c.length) switch (g.url = s(c), a) {
                case "pageview":
                    g = m(g);
                    break;
                case "custom":
                    g = o(g, b);
                case "lead":
                case "viewPhone":
                case "addCv":
                case "publishAd":
                case "subscribeEmail":
                case "financialService":
                case "saveFavorite":
                case "share":
                case "register":
                    g = n(g, b), p(g);
                    break;
                default:
                    return console.error("Your tracking option is not available: " + a), !1
            }
            return !0
        },
        m = function(a) {
            var b = document.referrer || "";
            return a = a || {}, a.ref = s(b), a.ttl = document.title, a.sr = window.screen.width + "x" + window.screen.height, a.vp = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) + "x" + (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight), a.ul = (window.navigator.userLanguage || window.navigator.language).toLowerCase(), a.de = document.charset.toLowerCase(), a
        },
        n = function(a, b) {
            return a = a || {}, b[2] && b[2].adId && (a.sadid = b[2].adId), a
        },
        o = function(a, b) {
            return a = a || {}, a.lbl += " | " + (b[2] && b[2].customType ? b[2].customType.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") : "undefined"), a
        },
        p = function(a) {
            a = a || {};
            var b = "";
            for (var c in a) a[c] && "" != a[c] && ("" != b && (b += "&"), b += c + "=" + a[c]);
            (new Image).src = "//rd.clk.thribee.com/index.php?cod=conversion_tracking&" + b
        },
        q = function(a, b, c) {
            var d = new Date;
            c = c || 24 * e * 60 * 60, d.setTime(d.getTime() + 1e3 * c), document.cookie = a + "=" + b + "; expires=" + d.toGMTString() + "; path=/; domain=." + document.location.hostname
        },
        r = function(a) {
            if ("" == a) return "";
            for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                var e = c[d].replace(/^\s+|\s+$/gm, "");
                if (0 == e.indexOf(b)) return e.substring(b.length, e.length)
            }
            return ""
        },
        s = function(a) {
            return a = encodeURIComponent(a), a = a.replace(/\+/g, "%2B"), a = a.replace(/%20/g, "+"), a = a.replace(/\*/g, "%2A"), a = a.replace(/\//g, "%2F"), a = a.replace(/@/g, "%40")
        };
    if (a[c].q && a[c].q.length > 0)
        for (var t = 0; t < a[c].q.length; t++) h(a[c].q[t][0], a[c].q[t]);
    a[c] = function(a) {
        h(a, arguments)
    }
}(window, document, window.TrovitAnalyticsObject || "ta");