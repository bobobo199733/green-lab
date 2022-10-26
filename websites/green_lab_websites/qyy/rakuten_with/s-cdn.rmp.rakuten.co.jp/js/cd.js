/*! For license information please see cd.js.LICENSE.txt */ ! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) r.d(n, i, function(t) {
                return e[t]
            }.bind(null, i));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "/dist/", r(r.s = 2)
}({
    "0Cfz": function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return n
        }));
        var n = function() {
            return Array.isArray || function(e) {
                return e && "number" == typeof e.length
            }
        }()
    },
    "1JHA": function(e, t, r) {
        "use strict";

        function n(e) {
            return null !== e && "object" == typeof e
        }
        r.d(t, "a", (function() {
            return n
        }))
    },
    "1SjT": function(e, t, r) {
        var n;
        ! function(i, o) {
            "use strict";
            var a = "function",
                s = "undefined",
                u = "object",
                l = "string",
                c = "model",
                d = "name",
                p = "type",
                h = "vendor",
                f = "version",
                v = "architecture",
                m = "console",
                g = "mobile",
                b = "tablet",
                y = "smarttv",
                w = "wearable",
                A = "embedded",
                k = {
                    extend: function(e, t) {
                        var r = {};
                        for (var n in e) t[n] && t[n].length % 2 == 0 ? r[n] = t[n].concat(e[n]) : r[n] = e[n];
                        return r
                    },
                    has: function(e, t) {
                        return typeof e === l && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                    },
                    lowerize: function(e) {
                        return e.toLowerCase()
                    },
                    major: function(e) {
                        return typeof e === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : o
                    },
                    trim: function(e, t) {
                        return e = e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), typeof t === s ? e : e.substring(0, 255)
                    }
                },
                T = {
                    rgx: function(e, t) {
                        for (var r, n, i, s, l, c, d = 0; d < t.length && !l;) {
                            var p = t[d],
                                h = t[d + 1];
                            for (r = n = 0; r < p.length && !l;)
                                if (l = p[r++].exec(e))
                                    for (i = 0; i < h.length; i++) c = l[++n], typeof(s = h[i]) === u && s.length > 0 ? 2 == s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, c) : this[s[0]] = s[1] : 3 == s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = c ? c.replace(s[1], s[2]) : o : this[s[0]] = c ? s[1].call(this, c, s[2]) : o : 4 == s.length && (this[s[0]] = c ? s[3].call(this, c.replace(s[1], s[2])) : o) : this[s] = c || o;
                            d += 2
                        }
                    },
                    str: function(e, t) {
                        for (var r in t)
                            if (typeof t[r] === u && t[r].length > 0) {
                                for (var n = 0; n < t[r].length; n++)
                                    if (k.has(t[r][n], e)) return "?" === r ? o : r
                            } else if (k.has(t[r], e)) return "?" === r ? o : r;
                        return e
                    }
                },
                _ = {
                    browser: {
                        oldSafari: {
                            version: {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }
                        },
                        oldEdge: {
                            version: {
                                .1: "12.",
                                21: "13.",
                                31: "14.",
                                39: "15.",
                                41: "16.",
                                42: "17.",
                                44: "18."
                            }
                        }
                    },
                    os: {
                        windows: {
                            version: {
                                ME: "4.90",
                                "NT 3.11": "NT3.51",
                                "NT 4.0": "NT4.0",
                                2e3: "NT 5.0",
                                XP: ["NT 5.1", "NT 5.2"],
                                Vista: "NT 6.0",
                                7: "NT 6.1",
                                8: "NT 6.2",
                                8.1: "NT 6.3",
                                10: ["NT 6.4", "NT 10.0"],
                                RT: "ARM"
                            }
                        }
                    }
                },
                E = {
                    browser: [
                        [/\b(?:crmo|crios)\/([\w\.]+)/i],
                        [f, [d, "Chrome"]],
                        [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                        [f, [d, "Edge"]],
                        [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],
                        [d, f],
                        [/opios[\/\s]+([\w\.]+)/i],
                        [f, [d, "Opera Mini"]],
                        [/\sopr\/([\w\.]+)/i],
                        [f, [d, "Opera"]],
                        [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(ba?idubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i, /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                        [d, f],
                        [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                        [f, [d, "UCBrowser"]],
                        [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],
                        [f, [d, "WeChat(Win) Desktop"]],
                        [/micromessenger\/([\w\.]+)/i],
                        [f, [d, "WeChat"]],
                        [/konqueror\/([\w\.]+)/i],
                        [f, [d, "Konqueror"]],
                        [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],
                        [f, [d, "IE"]],
                        [/yabrowser\/([\w\.]+)/i],
                        [f, [d, "Yandex"]],
                        [/(avast|avg)\/([\w\.]+)/i],
                        [
                            [d, /(.+)/, "$1 Secure Browser"], f
                        ],
                        [/focus\/([\w\.]+)/i],
                        [f, [d, "Firefox Focus"]],
                        [/opt\/([\w\.]+)/i],
                        [f, [d, "Opera Touch"]],
                        [/coc_coc_browser\/([\w\.]+)/i],
                        [f, [d, "Coc Coc"]],
                        [/dolfin\/([\w\.]+)/i],
                        [f, [d, "Dolphin"]],
                        [/coast\/([\w\.]+)/i],
                        [f, [d, "Opera Coast"]],
                        [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                        [f, [d, "MIUI Browser"]],
                        [/fxios\/([\w\.-]+)/i],
                        [f, [d, "Firefox"]],
                        [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                        [
                            [d, "360 Browser"]
                        ],
                        [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                        [
                            [d, /(.+)/, "$1 Browser"], f
                        ],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [
                            [d, /_/g, " "], f
                        ],
                        [/\s(electron)\/([\w\.]+)\ssafari/i, /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],
                        [d, f],
                        [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i],
                        [d],
                        [/;fbav\/([\w\.]+);/i],
                        [f, [d, "Facebook"]],
                        [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
                        [
                            [d, "Facebook"]
                        ],
                        [/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i],
                        [d, f],
                        [/\bgsa\/([\w\.]+)\s.*safari\//i],
                        [f, [d, "GSA"]],
                        [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                        [f, [d, "Chrome Headless"]],
                        [/\swv\).+(chrome)\/([\w\.]+)/i],
                        [
                            [d, "Chrome WebView"], f
                        ],
                        [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],
                        [f, [d, "Android Browser"]],
                        [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                        [d, f],
                        [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
                        [f, [d, "Mobile Safari"]],
                        [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
                        [f, d],
                        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [d, [f, T.str, _.browser.oldSafari.version]],
                        [/(webkit|khtml)\/([\w\.]+)/i],
                        [d, f],
                        [/(navigator|netscape)\/([\w\.-]+)/i],
                        [
                            [d, "Netscape"], f
                        ],
                        [/ile\svr;\srv:([\w\.]+)\).+firefox/i],
                        [f, [d, "Firefox Reality"]],
                        [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                        [d, f]
                    ],
                    cpu: [
                        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                        [
                            [v, "amd64"]
                        ],
                        [/(ia32(?=;))/i],
                        [
                            [v, k.lowerize]
                        ],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [
                            [v, "ia32"]
                        ],
                        [/\b(aarch64|armv?8e?l?)\b/i],
                        [
                            [v, "arm64"]
                        ],
                        [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                        [
                            [v, "armhf"]
                        ],
                        [/windows\s(ce|mobile);\sppc;/i],
                        [
                            [v, "arm"]
                        ],
                        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                        [
                            [v, /ower/, "", k.lowerize]
                        ],
                        [/(sun4\w)[;\)]/i],
                        [
                            [v, "sparc"]
                        ],
                        [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                        [
                            [v, k.lowerize]
                        ]
                    ],
                    device: [
                        [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],
                        [c, [h, "Samsung"],
                            [p, b]
                        ],
                        [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i],
                        [c, [h, "Samsung"],
                            [p, g]
                        ],
                        [/\((ip(?:hone|od)[\s\w]*);/i],
                        [c, [h, "Apple"],
                            [p, g]
                        ],
                        [/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                        [c, [h, "Apple"],
                            [p, b]
                        ],
                        [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],
                        [c, [h, "Huawei"],
                            [p, b]
                        ],
                        [/d\/huawei([\w\s-]+)[;\)]/i, /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],
                        [c, [h, "Huawei"],
                            [p, g]
                        ],
                        [/\b(poco[\s\w]+)(?:\sbuild|\))/i, /\b;\s(\w+)\sbuild\/hm\1/i, /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i, /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],
                        [
                            [c, /_/g, " "],
                            [h, "Xiaomi"],
                            [p, g]
                        ],
                        [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],
                        [
                            [c, /_/g, " "],
                            [h, "Xiaomi"],
                            [p, b]
                        ],
                        [/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],
                        [c, [h, "OPPO"],
                            [p, g]
                        ],
                        [/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],
                        [c, [h, "Vivo"],
                            [p, g]
                        ],
                        [/\s(rmx[12]\d{3})(?:\sbuild|;)/i],
                        [c, [h, "Realme"],
                            [p, g]
                        ],
                        [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i, /\smot(?:orola)?[\s-](\w*)/i, /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],
                        [c, [h, "Motorola"],
                            [p, g]
                        ],
                        [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                        [c, [h, "Motorola"],
                            [p, b]
                        ],
                        [/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],
                        [c, [h, "LG"],
                            [p, b]
                        ],
                        [/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i],
                        [c, [h, "LG"],
                            [p, g]
                        ],
                        [/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],
                        [c, [h, "Lenovo"],
                            [p, b]
                        ],
                        [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i],
                        [
                            [c, /_/g, " "],
                            [h, "Nokia"],
                            [p, g]
                        ],
                        [/droid.+;\s(pixel\sc)[\s)]/i],
                        [c, [h, "Google"],
                            [p, b]
                        ],
                        [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],
                        [c, [h, "Google"],
                            [p, g]
                        ],
                        [/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                        [c, [h, "Sony"],
                            [p, g]
                        ],
                        [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i],
                        [
                            [c, "Xperia Tablet"],
                            [h, "Sony"],
                            [p, b]
                        ],
                        [/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i],
                        [c, [h, "OnePlus"],
                            [p, g]
                        ],
                        [/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i],
                        [c, [h, "Amazon"],
                            [p, b]
                        ],
                        [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
                        [
                            [c, "Fire Phone"],
                            [h, "Amazon"],
                            [p, g]
                        ],
                        [/\((playbook);[\w\s\),;-]+(rim)/i],
                        [c, h, [p, b]],
                        [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i],
                        [c, [h, "BlackBerry"],
                            [p, g]
                        ],
                        [/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],
                        [c, [h, "ASUS"],
                            [p, b]
                        ],
                        [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],
                        [c, [h, "ASUS"],
                            [p, g]
                        ],
                        [/(nexus\s9)/i],
                        [c, [h, "HTC"],
                            [p, b]
                        ],
                        [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                        [h, [c, /_/g, " "],
                            [p, g]
                        ],
                        [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                        [c, [h, "Acer"],
                            [p, b]
                        ],
                        [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i],
                        [c, [h, "Meizu"],
                            [p, g]
                        ],
                        [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i, /(microsoft);\s(lumia[\s\w]+)/i, /(lenovo)[_\s-]?([\w-]+)/i, /linux;.+(jolla);/i, /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                        [h, c, [p, g]],
                        [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i, /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i, /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i, /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i, /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],
                        [h, c, [p, b]],
                        [/\s(surface\sduo)\s/i],
                        [c, [h, "Microsoft"],
                            [p, b]
                        ],
                        [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],
                        [c, [h, "Fairphone"],
                            [p, g]
                        ],
                        [/\s(u304aa)\sbuild/i],
                        [c, [h, "AT&T"],
                            [p, g]
                        ],
                        [/sie-(\w*)/i],
                        [c, [h, "Siemens"],
                            [p, g]
                        ],
                        [/[;\/]\s?(rct\w+)\sbuild/i],
                        [c, [h, "RCA"],
                            [p, b]
                        ],
                        [/[;\/\s](venue[\d\s]{2,7})\sbuild/i],
                        [c, [h, "Dell"],
                            [p, b]
                        ],
                        [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],
                        [c, [h, "Verizon"],
                            [p, b]
                        ],
                        [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],
                        [c, [h, "Barnes & Noble"],
                            [p, b]
                        ],
                        [/[;\/]\s(tm\d{3}\w+)\sbuild/i],
                        [c, [h, "NuVision"],
                            [p, b]
                        ],
                        [/;\s(k88)\sbuild/i],
                        [c, [h, "ZTE"],
                            [p, b]
                        ],
                        [/;\s(nx\d{3}j)\sbuild/i],
                        [c, [h, "ZTE"],
                            [p, g]
                        ],
                        [/[;\/]\s?(gen\d{3})\sbuild.*49h/i],
                        [c, [h, "Swiss"],
                            [p, g]
                        ],
                        [/[;\/]\s?(zur\d{3})\sbuild/i],
                        [c, [h, "Swiss"],
                            [p, b]
                        ],
                        [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],
                        [c, [h, "Zeki"],
                            [p, b]
                        ],
                        [/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],
                        [
                            [h, "Dragon Touch"], c, [p, b]
                        ],
                        [/[;\/]\s?(ns-?\w{0,9})\sbuild/i],
                        [c, [h, "Insignia"],
                            [p, b]
                        ],
                        [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],
                        [c, [h, "NextBook"],
                            [p, b]
                        ],
                        [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],
                        [
                            [h, "Voice"], c, [p, g]
                        ],
                        [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],
                        [
                            [h, "LvTel"], c, [p, g]
                        ],
                        [/;\s(ph-1)\s/i],
                        [c, [h, "Essential"],
                            [p, g]
                        ],
                        [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],
                        [c, [h, "Envizen"],
                            [p, b]
                        ],
                        [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],
                        [c, [h, "MachSpeed"],
                            [p, b]
                        ],
                        [/[;\/]\s?tu_(1491)\sbuild/i],
                        [c, [h, "Rotor"],
                            [p, b]
                        ],
                        [/(shield[\w\s]+)\sbuild/i],
                        [c, [h, "Nvidia"],
                            [p, b]
                        ],
                        [/(sprint)\s(\w+)/i],
                        [h, c, [p, g]],
                        [/(kin\.[onetw]{3})/i],
                        [
                            [c, /\./g, " "],
                            [h, "Microsoft"],
                            [p, g]
                        ],
                        [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                        [c, [h, "Zebra"],
                            [p, b]
                        ],
                        [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],
                        [c, [h, "Zebra"],
                            [p, g]
                        ],
                        [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i],
                        [h, c, [p, m]],
                        [/droid.+;\s(shield)\sbuild/i],
                        [c, [h, "Nvidia"],
                            [p, m]
                        ],
                        [/(playstation\s[345portablevi]+)/i],
                        [c, [h, "Sony"],
                            [p, m]
                        ],
                        [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],
                        [c, [h, "Microsoft"],
                            [p, m]
                        ],
                        [/smart-tv.+(samsung)/i],
                        [h, [p, y]],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                            [c, /^/, "SmartTV"],
                            [h, "Samsung"],
                            [p, y]
                        ],
                        [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],
                        [
                            [h, "LG"],
                            [p, y]
                        ],
                        [/(apple)\s?tv/i],
                        [h, [c, "Apple TV"],
                            [p, y]
                        ],
                        [/crkey/i],
                        [
                            [c, "Chromecast"],
                            [h, "Google"],
                            [p, y]
                        ],
                        [/droid.+aft([\w])(\sbuild\/|\))/i],
                        [c, [h, "Amazon"],
                            [p, y]
                        ],
                        [/\(dtv[\);].+(aquos)/i],
                        [c, [h, "Sharp"],
                            [p, y]
                        ],
                        [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                        [
                            [h, k.trim],
                            [c, k.trim],
                            [p, y]
                        ],
                        [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],
                        [
                            [p, y]
                        ],
                        [/((pebble))app\/[\d\.]+\s/i],
                        [h, c, [p, w]],
                        [/droid.+;\s(glass)\s\d/i],
                        [c, [h, "Google"],
                            [p, w]
                        ],
                        [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],
                        [c, [h, "Zebra"],
                            [p, w]
                        ],
                        [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],
                        [h, [p, A]],
                        [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
                        [c, [p, g]],
                        [/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
                        [c, [p, b]],
                        [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                        [
                            [p, k.lowerize]
                        ],
                        [/(android[\w\.\s\-]{0,9});.+build/i],
                        [c, [h, "Generic"]],
                        [/(phone)/i],
                        [
                            [p, g]
                        ]
                    ],
                    engine: [
                        [/windows.+\sedge\/([\w\.]+)/i],
                        [f, [d, "EdgeHTML"]],
                        [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                        [f, [d, "Blink"]],
                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                        [d, f],
                        [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                        [f, d]
                    ],
                    os: [
                        [/microsoft\s(windows)\s(vista|xp)/i],
                        [d, f],
                        [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],
                        [d, [f, T.str, _.os.windows.version]],
                        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                        [
                            [d, "Windows"],
                            [f, T.str, _.os.windows.version]
                        ],
                        [/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i],
                        [
                            [f, /_/g, "."],
                            [d, "iOS"]
                        ],
                        [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],
                        [
                            [d, "Mac OS"],
                            [f, /_/g, "."]
                        ],
                        [/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /\((series40);/i],
                        [d, f],
                        [/\(bb(10);/i],
                        [f, [d, "BlackBerry"]],
                        [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],
                        [f, [d, "Symbian"]],
                        [/mozilla.+\(mobile;.+gecko.+firefox/i],
                        [
                            [d, "Firefox OS"]
                        ],
                        [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                        [f, [d, "webOS"]],
                        [/crkey\/([\d\.]+)/i],
                        [f, [d, "Chromecast"]],
                        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                        [
                            [d, "Chromium OS"], f
                        ],
                        [/(nintendo|playstation)\s([wids345portablevuch]+)/i, /(xbox);\s+xbox\s([^\);]+)/i, /(mint)[\/\s\(\)]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i, /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku)\s(\w+)/i],
                        [d, f],
                        [/(sunos)\s?([\w\.\d]*)/i],
                        [
                            [d, "Solaris"], f
                        ],
                        [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                        [d, f]
                    ]
                },
                R = function(e, t) {
                    if ("object" == typeof e && (t = e, e = o), !(this instanceof R)) return new R(e, t).getResult();
                    var r = e || (void 0 !== i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
                        n = t ? k.extend(E, t) : E;
                    return this.getBrowser = function() {
                        var e = {
                            name: o,
                            version: o
                        };
                        return T.rgx.call(e, r, n.browser), e.major = k.major(e.version), e
                    }, this.getCPU = function() {
                        var e = {
                            architecture: o
                        };
                        return T.rgx.call(e, r, n.cpu), e
                    }, this.getDevice = function() {
                        var e = {
                            vendor: o,
                            model: o,
                            type: o
                        };
                        return T.rgx.call(e, r, n.device), e
                    }, this.getEngine = function() {
                        var e = {
                            name: o,
                            version: o
                        };
                        return T.rgx.call(e, r, n.engine), e
                    }, this.getOS = function() {
                        var e = {
                            name: o,
                            version: o
                        };
                        return T.rgx.call(e, r, n.os), e
                    }, this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }, this.getUA = function() {
                        return r
                    }, this.setUA = function(e) {
                        return r = typeof e === l && e.length > 255 ? k.trim(e, 255) : e, this
                    }, this.setUA(r), this
                };
            R.VERSION = "0.7.28", R.BROWSER = {
                NAME: d,
                MAJOR: "major",
                VERSION: f
            }, R.CPU = {
                ARCHITECTURE: v
            }, R.DEVICE = {
                MODEL: c,
                VENDOR: h,
                TYPE: p,
                CONSOLE: m,
                MOBILE: g,
                SMARTTV: y,
                TABLET: b,
                WEARABLE: w,
                EMBEDDED: A
            }, R.ENGINE = {
                NAME: d,
                VERSION: f
            }, R.OS = {
                NAME: d,
                VERSION: f
            }, typeof t !== s ? (typeof e !== s && e.exports && (t = e.exports = R), t.UAParser = R) : (n = function() {
                return R
            }.call(t, r, t, e)) === o || (e.exports = n);
            var x = void 0 !== i && (i.jQuery || i.Zepto);
            if (x && !x.ua) {
                var S = new R;
                x.ua = S.getResult(), x.ua.get = function() {
                    return S.getUA()
                }, x.ua.set = function(e) {
                    S.setUA(e);
                    var t = S.getResult();
                    for (var r in t) x.ua[r] = t[r]
                }
            }
        }("object" == typeof window ? window : this)
    },
    "1tRE": function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return c
        }));
        var n = r("bb6g"),
            i = r("QK65"),
            o = r("VOtN"),
            a = r("3gnf"),
            s = r("Egzs"),
            u = r("auMp"),
            l = r("9ZDi"),
            c = function(e) {
                function t(r, n, i) {
                    var a = e.call(this) || this;
                    switch (a.syncErrorValue = null, a.syncErrorThrown = !1, a.syncErrorThrowable = !1, a.isStopped = !1, arguments.length) {
                        case 0:
                            a.destination = o.a;
                            break;
                        case 1:
                            if (!r) {
                                a.destination = o.a;
                                break
                            }
                            if ("object" == typeof r) {
                                r instanceof t ? (a.syncErrorThrowable = r.syncErrorThrowable, a.destination = r, r.add(a)) : (a.syncErrorThrowable = !0, a.destination = new d(a, r));
                                break
                            }
                        default:
                            a.syncErrorThrowable = !0, a.destination = new d(a, r, n, i)
                    }
                    return a
                }
                return n.a(t, e), t.prototype[s.a] = function() {
                    return this
                }, t.create = function(e, r, n) {
                    var i = new t(e, r, n);
                    return i.syncErrorThrowable = !1, i
                }, t.prototype.next = function(e) {
                    this.isStopped || this._next(e)
                }, t.prototype.error = function(e) {
                    this.isStopped || (this.isStopped = !0, this._error(e))
                }, t.prototype.complete = function() {
                    this.isStopped || (this.isStopped = !0, this._complete())
                }, t.prototype.unsubscribe = function() {
                    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this))
                }, t.prototype._next = function(e) {
                    this.destination.next(e)
                }, t.prototype._error = function(e) {
                    this.destination.error(e), this.unsubscribe()
                }, t.prototype._complete = function() {
                    this.destination.complete(), this.unsubscribe()
                }, t.prototype._unsubscribeAndRecycle = function() {
                    var e = this._parentOrParents;
                    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = e, this
                }, t
            }(a.a),
            d = function(e) {
                function t(t, r, n, a) {
                    var s, u = e.call(this) || this;
                    u._parentSubscriber = t;
                    var l = u;
                    return Object(i.a)(r) ? s = r : r && (s = r.next, n = r.error, a = r.complete, r !== o.a && (l = Object.create(r), Object(i.a)(l.unsubscribe) && u.add(l.unsubscribe.bind(l)), l.unsubscribe = u.unsubscribe.bind(u))), u._context = l, u._next = s, u._error = n, u._complete = a, u
                }
                return n.a(t, e), t.prototype.next = function(e) {
                    if (!this.isStopped && this._next) {
                        var t = this._parentSubscriber;
                        u.a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
                    }
                }, t.prototype.error = function(e) {
                    if (!this.isStopped) {
                        var t = this._parentSubscriber,
                            r = u.a.useDeprecatedSynchronousErrorHandling;
                        if (this._error) r && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                        else if (t.syncErrorThrowable) r ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : Object(l.a)(e), this.unsubscribe();
                        else {
                            if (this.unsubscribe(), r) throw e;
                            Object(l.a)(e)
                        }
                    }
                }, t.prototype.complete = function() {
                    var e = this;
                    if (!this.isStopped) {
                        var t = this._parentSubscriber;
                        if (this._complete) {
                            var r = function() {
                                return e._complete.call(e._context)
                            };
                            u.a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, r), this.unsubscribe()) : (this.__tryOrUnsub(r), this.unsubscribe())
                        } else this.unsubscribe()
                    }
                }, t.prototype.__tryOrUnsub = function(e, t) {
                    try {
                        e.call(this._context, t)
                    } catch (e) {
                        if (this.unsubscribe(), u.a.useDeprecatedSynchronousErrorHandling) throw e;
                        Object(l.a)(e)
                    }
                }, t.prototype.__tryOrSetError = function(e, t, r) {
                    if (!u.a.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                    try {
                        t.call(this._context, r)
                    } catch (t) {
                        return u.a.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = t, e.syncErrorThrown = !0, !0) : (Object(l.a)(t), !0)
                    }
                    return !1
                }, t.prototype._unsubscribe = function() {
                    var e = this._parentSubscriber;
                    this._context = null, this._parentSubscriber = null, e.unsubscribe()
                }, t
            }(c)
    },
    2: function(e, t, r) {
        e.exports = r("aXQC")
    },
    "3gnf": function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return s
        }));
        var n = r("0Cfz"),
            i = r("1JHA"),
            o = r("QK65"),
            a = function() {
                function e(e) {
                    return Error.call(this), this.message = e ? e.length + " errors occurred during unsubscription:\n" + e.map((function(e, t) {
                        return t + 1 + ") " + e.toString()
                    })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = e, this
                }
                return e.prototype = Object.create(Error.prototype), e
            }(),
            s = function() {
                function e(e) {
                    this.closed = !1, this._parentOrParents = null, this._subscriptions = null, e && (this._ctorUnsubscribe = !0, this._unsubscribe = e)
                }
                var t;
                return e.prototype.unsubscribe = function() {
                    var t;
                    if (!this.closed) {
                        var r = this,
                            s = r._parentOrParents,
                            l = r._ctorUnsubscribe,
                            c = r._unsubscribe,
                            d = r._subscriptions;
                        if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, s instanceof e) s.remove(this);
                        else if (null !== s)
                            for (var p = 0; p < s.length; ++p) {
                                s[p].remove(this)
                            }
                        if (Object(o.a)(c)) {
                            l && (this._unsubscribe = void 0);
                            try {
                                c.call(this)
                            } catch (e) {
                                t = e instanceof a ? u(e.errors) : [e]
                            }
                        }
                        if (Object(n.a)(d)) {
                            p = -1;
                            for (var h = d.length; ++p < h;) {
                                var f = d[p];
                                if (Object(i.a)(f)) try {
                                    f.unsubscribe()
                                } catch (e) {
                                    t = t || [], e instanceof a ? t = t.concat(u(e.errors)) : t.push(e)
                                }
                            }
                        }
                        if (t) throw new a(t)
                    }
                }, e.prototype.add = function(t) {
                    var r = t;
                    if (!t) return e.EMPTY;
                    switch (typeof t) {
                        case "function":
                            r = new e(t);
                        case "object":
                            if (r === this || r.closed || "function" != typeof r.unsubscribe) return r;
                            if (this.closed) return r.unsubscribe(), r;
                            if (!(r instanceof e)) {
                                var n = r;
                                (r = new e)._subscriptions = [n]
                            }
                            break;
                        default:
                            throw new Error("unrecognized teardown " + t + " added to Subscription.")
                    }
                    var i = r._parentOrParents;
                    if (null === i) r._parentOrParents = this;
                    else if (i instanceof e) {
                        if (i === this) return r;
                        r._parentOrParents = [i, this]
                    } else {
                        if (-1 !== i.indexOf(this)) return r;
                        i.push(this)
                    }
                    var o = this._subscriptions;
                    return null === o ? this._subscriptions = [r] : o.push(r), r
                }, e.prototype.remove = function(e) {
                    var t = this._subscriptions;
                    if (t) {
                        var r = t.indexOf(e); - 1 !== r && t.splice(r, 1)
                    }
                }, e.EMPTY = ((t = new e).closed = !0, t), e
            }();

        function u(e) {
            return e.reduce((function(e, t) {
                return e.concat(t instanceof a ? t.errors : t)
            }), [])
        }
    },
    "7DB8": function(e, t, r) {
        "use strict";
        r.d(t, "h", (function() {
            return n
        })), r.d(t, "g", (function() {
            return i
        })), r.d(t, "e", (function() {
            return o
        })), r.d(t, "b", (function() {
            return a
        })), r.d(t, "d", (function() {
            return s
        })), r.d(t, "a", (function() {
            return u
        })), r.d(t, "c", (function() {
            return l
        })), r.d(t, "f", (function() {
            return c
        }));
        var n = function(e) {
            return null != e
        };

        function i(e) {
            return void 0 !== e && "string" == typeof e
        }

        function o(e) {
            return void 0 === e || "string" == typeof e
        }

        function a(e) {
            return void 0 !== e && "number" == typeof e
        }

        function s(e) {
            return void 0 === e || "number" == typeof e
        }

        function u(e, t) {
            return void 0 !== e && e instanceof Array && e.every(t)
        }

        function l(e, t) {
            return void 0 === e || e instanceof Array && e.every(t)
        }

        function c(e) {
            return void 0 !== e && "object" == typeof e
        }
    },
    "7Y3S": function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return o
        }));
        var n = r("bb6g"),
            i = function() {
                function e(t, r) {
                    void 0 === r && (r = e.now), this.SchedulerAction = t, this.now = r
                }
                return e.prototype.schedule = function(e, t, r) {
                    return void 0 === t && (t = 0), new this.SchedulerAction(this, e).schedule(r, t)
                }, e.now = function() {
                    return Date.now()
                }, e
            }(),
            o = function(e) {
                function t(r, n) {
                    void 0 === n && (n = i.now);
                    var o = e.call(this, r, (function() {
                        return t.delegate && t.delegate !== o ? t.delegate.now() : n()
                    })) || this;
                    return o.actions = [], o.active = !1, o.scheduled = void 0, o
                }
                return n.a(t, e), t.prototype.schedule = function(r, n, i) {
                    return void 0 === n && (n = 0), t.delegate && t.delegate !== this ? t.delegate.schedule(r, n, i) : e.prototype.schedule.call(this, r, n, i)
                }, t.prototype.flush = function(e) {
                    var t = this.actions;
                    if (this.active) t.push(e);
                    else {
                        var r;
                        this.active = !0;
                        do {
                            if (r = e.execute(e.state, e.delay)) break
                        } while (e = t.shift());
                        if (this.active = !1, r) {
                            for (; e = t.shift();) e.unsubscribe();
                            throw r
                        }
                    }
                }, t
            }(i)
    },
    "9ZDi": function(e, t, r) {
        "use strict";

        function n(e) {
            setTimeout((function() {
                throw e
            }), 0)
        }
        r.d(t, "a", (function() {
            return n
        }))
    },
    D5Rb: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return a
        }));
        var n = r("SQAW"),
            i = r("ECF0"),
            o = r("e4KZ");

        function a(e, t) {
            return void 0 === e && (e = 0), void 0 === t && (t = i.a), (!Object(o.a)(e) || e < 0) && (e = 0), t && "function" == typeof t.schedule || (t = i.a), new n.a((function(r) {
                return r.add(t.schedule(s, e, {
                    subscriber: r,
                    counter: 0,
                    period: e
                })), r
            }))
        }

        function s(e) {
            var t = e.subscriber,
                r = e.counter,
                n = e.period;
            t.next(r), this.schedule({
                subscriber: t,
                counter: r + 1,
                period: n
            }, n)
        }
    },
    ECF0: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return i
        }));
        var n = r("RLU+"),
            i = new(r("7Y3S").a)(n.a)
    },
    Egzs: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return n
        }));
        var n = function() {
            return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
        }()
    },
    HKSY: function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return f
        })), r.d(t, "a", (function() {
            return y
        }));
        r("Igas");
        var n = r("gorU"),
            i = r("7DB8");

        function o(e) {
            var t = e;
            return void 0 !== t && (void 0 === t.genre || Object(n.a)(t.genre)) && (void 0 === t.targeting || function(e) {
                var t = e;
                return Object(i.f)(t) && Object.keys(t).every((function(e) {
                    return Object(i.a)(t[e], i.g)
                }))
            }(t.targeting))
        }

        function a(e) {
            var t = e;
            return void 0 !== t && Object(i.e)(t.id) && Object(i.e)(t.impid) && Object(i.d)(t.price) && Object(i.e)(t.nurl) && Object(i.e)(t.burl) && Object(i.e)(t.lurl) && Object(i.e)(t.adm) && Object(i.e)(t.adid) && Object(i.c)(t.adomain, i.g) && Object(i.e)(t.bundle) && Object(i.e)(t.iurl) && Object(i.e)(t.cid) && Object(i.e)(t.crid) && Object(i.e)(t.tactic) && Object(i.c)(t.cat, i.g) && Object(i.c)(t.attr, i.b) && Object(i.d)(t.api) && Object(i.d)(t.protocol) && Object(i.d)(t.qagmediarating) && Object(i.e)(t.language) && Object(i.e)(t.dealid) && Object(i.d)(t.w) && Object(i.d)(t.h) && Object(i.d)(t.wratio) && Object(i.d)(t.hratio) && Object(i.d)(t.exp) && (void 0 === t.ext || function(e) {
                var t = e;
                return void 0 !== t && Object(i.d)(t.advid) && Object(i.e)(t.measured_url) && Object(i.e)(t.inview_url)
            }(t.ext))
        }

        function s(e) {
            var t = e;
            return void 0 !== t && Object(i.c)(t.bid, a) && Object(i.e)(t.seat) && Object(i.d)(t.group)
        }
        var u = r("dl46"),
            l = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            c = function(e) {
                var t, r, n;
                return {
                    html: null !== (t = e.adm) && void 0 !== t ? t : "",
                    width: null !== (r = e.w) && void 0 !== r ? r : 0,
                    height: null !== (n = e.h) && void 0 !== n ? n : 0
                }
            },
            d = function(e) {
                var t, r;
                if (null != (null == e ? void 0 : e.ext)) {
                    var n = null === (t = e.ext) || void 0 === t ? void 0 : t.measured_url,
                        i = null === (r = e.ext) || void 0 === r ? void 0 : r.inview_url;
                    return void 0 !== n && void 0 !== i ? {
                        measuredURL: n,
                        inviewURL: i
                    } : void 0
                }
            },
            p = function(e) {
                var t;
                return null === (t = null == e ? void 0 : e.ext) || void 0 === t ? void 0 : t.advid
            },
            h = function() {
                return navigator.language.split("-")[0]
            },
            f = function() {
                return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
            },
            v = function() {
                return "https:" === document.location.protocol
            },
            m = function(e, t) {
                if (e || t) {
                    var r = {};
                    return e && (r.badvid = e), t && (r.ichiba_shop_url = t), r
                }
            },
            g = function(e) {
                var t = {
                    json: {}
                };
                e.code && "" !== e.code ? t.code = e.code : t.adspot_id = e.adspotID, e.getResponsive() && (t.responsive = !0);
                var r = e.getJSON();
                o(r) && (t.json = r), e.getGenre() && (t.json.genre = e.getGenre());
                var n = e.getTargetingMap();
                return Object.keys(n).length > 0 && (t.json.targeting = n.values), t
            },
            b = function(e) {
                if (void 0 !== e.rz || void 0 !== e.hashedemail || void 0 !== e.hashedeasyid) {
                    var t = {};
                    return void 0 !== e.rz && (t.rz = e.rz), void 0 !== e.hashedemail && (t.hashedemail = e.hashedemail), void 0 !== e.hashedeasyid && (t.hashedeasyid = e.hashedeasyid), t
                }
            },
            y = function(e, t, r, n) {
                var o, a, y, w, A = function(e, t) {
                    var r, n = {
                        device: {
                            language: h(),
                            ua: navigator.userAgent,
                            dnt: f() ? 1 : 0,
                            make: navigator.vendor || "",
                            w: screen.width,
                            h: screen.height,
                            js: 1,
                            ext: {
                                sdk_versions: {
                                    js: [{
                                        module_name: "aa",
                                        version: null !== (r = "1.1.0") ? r : ""
                                    }]
                                }
                            }
                        },
                        site: {
                            page: location.href,
                            ref: document.referrer
                        },
                        imp: e.map((function(e) {
                            return {
                                id: e.getImpId(),
                                secure: v() ? 1 : 0,
                                ext: g(e)
                            }
                        }))
                    };
                    t.ifa && n.device && (n.device.ifa = t.ifa);
                    var i = m(t.badvid, t.ichibaShopUrl);
                    void 0 !== i && (n.ext = i);
                    var o = b(t);
                    return void 0 !== o && (n.user = {
                        ext: o
                    }), n
                }(t, r);
                return fetch((o = function(e, t) {
                    var r, n = {};
                    return e.some((function(e) {
                        return e.getDebug()
                    })) && (n.debug = "1"), (null === (r = t.preview) || void 0 === r ? void 0 : r.hash) && (n.rad_hash = t.preview.hash), n
                }(t, e), y = "" + (null !== (a = "https://s-ad.rmp.rakuten.co.jp/ad") ? a : ""), w = Object(u.a)(o), w && (y += "?" + w), y), {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "text/plain"
                    },
                    body: JSON.stringify(A),
                    credentials: "include",
                    cache: "no-cache"
                }).then((function(e) {
                    if (200 === e.status) return e.json();
                    if (204 !== e.status) throw new Error("Ad response status: " + e.status)
                })).then((function(e) {
                    if (!e) return [];
                    if (void 0 !== (r = e) && Object(i.e)(r.id) && Object(i.a)(r.seatbid, s) && Object(i.e)(r.bidid) && Object(i.e)(r.cur) && Object(i.e)(r.customdata) && Object(i.d)(r.nbr)) return Promise.resolve(t.map((function(t) {
                        return function(e, t) {
                            var r, n, i, o, a, s = document.getElementById(e.key);
                            if (s && s instanceof HTMLElement) try {
                                for (var u = l(null !== (i = t.seatbid) && void 0 !== i ? i : []), h = u.next(); !h.done; h = u.next()) {
                                    var f = h.value,
                                        v = (null !== (o = null == f ? void 0 : f.bid) && void 0 !== o ? o : []).filter((function(t) {
                                            return !!t.impid && t.impid === e.getImpId()
                                        }));
                                    if (void 0 === v[0]) return;
                                    return {
                                        impId: null !== (a = v[0].impid) && void 0 !== a ? a : "",
                                        el: s,
                                        response: c(v[0]),
                                        viewability: d(v[0]),
                                        sessionID: t.id,
                                        advID: p(v[0])
                                    }
                                }
                            } catch (e) {
                                r = {
                                    error: e
                                }
                            } finally {
                                try {
                                    h && !h.done && (n = u.return) && n.call(u)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                        }(t, e)
                    })));
                    var r;
                    throw Promise.reject(new Error("invalid ad response"))
                })).catch((function(e) {
                    return n.logging(e, A), []
                }))
            }
    },
    Igas: function(e, t, r) {
        "use strict";
        var n = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== n && n,
            i = "URLSearchParams" in n,
            o = "Symbol" in n && "iterator" in Symbol,
            a = "FileReader" in n && "Blob" in n && function() {
                try {
                    return new Blob, !0
                } catch (e) {
                    return !1
                }
            }(),
            s = "FormData" in n,
            u = "ArrayBuffer" in n;
        if (u) var l = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            c = ArrayBuffer.isView || function(e) {
                return e && l.indexOf(Object.prototype.toString.call(e)) > -1
            };

        function d(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }

        function p(e) {
            return "string" != typeof e && (e = String(e)), e
        }

        function h(e) {
            var t = {
                next: function() {
                    var t = e.shift();
                    return {
                        done: void 0 === t,
                        value: t
                    }
                }
            };
            return o && (t[Symbol.iterator] = function() {
                return t
            }), t
        }

        function f(e) {
            this.map = {}, e instanceof f ? e.forEach((function(e, t) {
                this.append(t, e)
            }), this) : Array.isArray(e) ? e.forEach((function(e) {
                this.append(e[0], e[1])
            }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
                this.append(t, e[t])
            }), this)
        }

        function v(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }

        function m(e) {
            return new Promise((function(t, r) {
                e.onload = function() {
                    t(e.result)
                }, e.onerror = function() {
                    r(e.error)
                }
            }))
        }

        function g(e) {
            var t = new FileReader,
                r = m(t);
            return t.readAsArrayBuffer(e), r
        }

        function b(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
        }

        function y() {
            return this.bodyUsed = !1, this._initBody = function(e) {
                var t;
                this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : a && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : s && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : i && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : u && a && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = b(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e)) ? this._bodyArrayBuffer = b(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : i && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, a && (this.blob = function() {
                var e = v(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                if (this._bodyArrayBuffer) {
                    var e = v(this);
                    return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                }
                return this.blob().then(g)
            }), this.text = function() {
                var e, t, r, n = v(this);
                if (n) return n;
                if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, r = m(t), t.readAsText(e), r;
                if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                    for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++) r[n] = String.fromCharCode(t[n]);
                    return r.join("")
                }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, s && (this.formData = function() {
                return this.text().then(k)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }
        f.prototype.append = function(e, t) {
            e = d(e), t = p(t);
            var r = this.map[e];
            this.map[e] = r ? r + ", " + t : t
        }, f.prototype.delete = function(e) {
            delete this.map[d(e)]
        }, f.prototype.get = function(e) {
            return e = d(e), this.has(e) ? this.map[e] : null
        }, f.prototype.has = function(e) {
            return this.map.hasOwnProperty(d(e))
        }, f.prototype.set = function(e, t) {
            this.map[d(e)] = p(t)
        }, f.prototype.forEach = function(e, t) {
            for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
        }, f.prototype.keys = function() {
            var e = [];
            return this.forEach((function(t, r) {
                e.push(r)
            })), h(e)
        }, f.prototype.values = function() {
            var e = [];
            return this.forEach((function(t) {
                e.push(t)
            })), h(e)
        }, f.prototype.entries = function() {
            var e = [];
            return this.forEach((function(t, r) {
                e.push([r, t])
            })), h(e)
        }, o && (f.prototype[Symbol.iterator] = f.prototype.entries);
        var w = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

        function A(e, t) {
            if (!(this instanceof A)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            var r, n, i = (t = t || {}).body;
            if (e instanceof A) {
                if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new f(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, i || null == e._bodyInit || (i = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new f(t.headers)), this.method = (r = t.method || this.method || "GET", n = r.toUpperCase(), w.indexOf(n) > -1 ? n : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
            if (this._initBody(i), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache)) {
                var o = /([?&])_=[^&]*/;
                if (o.test(this.url)) this.url = this.url.replace(o, "$1_=" + (new Date).getTime());
                else {
                    this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
                }
            }
        }

        function k(e) {
            var t = new FormData;
            return e.trim().split("&").forEach((function(e) {
                if (e) {
                    var r = e.split("="),
                        n = r.shift().replace(/\+/g, " "),
                        i = r.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(n), decodeURIComponent(i))
                }
            })), t
        }

        function T(e, t) {
            if (!(this instanceof T)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "", this.headers = new f(t.headers), this.url = t.url || "", this._initBody(e)
        }
        A.prototype.clone = function() {
            return new A(this, {
                body: this._bodyInit
            })
        }, y.call(A.prototype), y.call(T.prototype), T.prototype.clone = function() {
            return new T(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new f(this.headers),
                url: this.url
            })
        }, T.error = function() {
            var e = new T(null, {
                status: 0,
                statusText: ""
            });
            return e.type = "error", e
        };
        var _ = [301, 302, 303, 307, 308];
        T.redirect = function(e, t) {
            if (-1 === _.indexOf(t)) throw new RangeError("Invalid status code");
            return new T(null, {
                status: t,
                headers: {
                    location: e
                }
            })
        };
        var E = n.DOMException;
        try {
            new E
        } catch (e) {
            (E = function(e, t) {
                this.message = e, this.name = t;
                var r = Error(e);
                this.stack = r.stack
            }).prototype = Object.create(Error.prototype), E.prototype.constructor = E
        }

        function R(e, t) {
            return new Promise((function(r, i) {
                var o = new A(e, t);
                if (o.signal && o.signal.aborted) return i(new E("Aborted", "AbortError"));
                var s = new XMLHttpRequest;

                function l() {
                    s.abort()
                }
                s.onload = function() {
                    var e, t, n = {
                        status: s.status,
                        statusText: s.statusText,
                        headers: (e = s.getAllResponseHeaders() || "", t = new f, e.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(e) {
                            return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                        })).forEach((function(e) {
                            var r = e.split(":"),
                                n = r.shift().trim();
                            if (n) {
                                var i = r.join(":").trim();
                                t.append(n, i)
                            }
                        })), t)
                    };
                    n.url = "responseURL" in s ? s.responseURL : n.headers.get("X-Request-URL");
                    var i = "response" in s ? s.response : s.responseText;
                    setTimeout((function() {
                        r(new T(i, n))
                    }), 0)
                }, s.onerror = function() {
                    setTimeout((function() {
                        i(new TypeError("Network request failed"))
                    }), 0)
                }, s.ontimeout = function() {
                    setTimeout((function() {
                        i(new TypeError("Network request failed"))
                    }), 0)
                }, s.onabort = function() {
                    setTimeout((function() {
                        i(new E("Aborted", "AbortError"))
                    }), 0)
                }, s.open(o.method, function(e) {
                    try {
                        return "" === e && n.location.href ? n.location.href : e
                    } catch (t) {
                        return e
                    }
                }(o.url), !0), "include" === o.credentials ? s.withCredentials = !0 : "omit" === o.credentials && (s.withCredentials = !1), "responseType" in s && (a ? s.responseType = "blob" : u && o.headers.get("Content-Type") && -1 !== o.headers.get("Content-Type").indexOf("application/octet-stream") && (s.responseType = "arraybuffer")), !t || "object" != typeof t.headers || t.headers instanceof f ? o.headers.forEach((function(e, t) {
                    s.setRequestHeader(t, e)
                })) : Object.getOwnPropertyNames(t.headers).forEach((function(e) {
                    s.setRequestHeader(e, p(t.headers[e]))
                })), o.signal && (o.signal.addEventListener("abort", l), s.onreadystatechange = function() {
                    4 === s.readyState && o.signal.removeEventListener("abort", l)
                }), s.send(void 0 === o._bodyInit ? null : o._bodyInit)
            }))
        }
        R.polyfill = !0, n.fetch || (n.fetch = R, n.Headers = f, n.Request = A, n.Response = T)
    },
    Q39O: function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return c
        })), r.d(t, "a", (function() {
            return d
        }));
        var n = r("yby3"),
            i = r("D5Rb"),
            o = r("bb6g"),
            a = function(e) {
                function t(t, r) {
                    var n = e.call(this, t, r) || this;
                    return n.scheduler = t, n.work = r, n
                }
                return o.a(t, e), t.prototype.requestAsyncId = function(t, r, n) {
                    return void 0 === n && (n = 0), null !== n && n > 0 ? e.prototype.requestAsyncId.call(this, t, r, n) : (t.actions.push(this), t.scheduled || (t.scheduled = requestAnimationFrame((function() {
                        return t.flush(null)
                    }))))
                }, t.prototype.recycleAsyncId = function(t, r, n) {
                    if (void 0 === n && (n = 0), null !== n && n > 0 || null === n && this.delay > 0) return e.prototype.recycleAsyncId.call(this, t, r, n);
                    0 === t.actions.length && (cancelAnimationFrame(r), t.scheduled = void 0)
                }, t
            }(r("RLU+").a),
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.a(t, e), t.prototype.flush = function(e) {
                    this.active = !0, this.scheduled = void 0;
                    var t, r = this.actions,
                        n = -1,
                        i = r.length;
                    e = e || r.shift();
                    do {
                        if (t = e.execute(e.state, e.delay)) break
                    } while (++n < i && (e = r.shift()));
                    if (this.active = !1, t) {
                        for (; ++n < i && (e = r.shift());) e.unsubscribe();
                        throw t
                    }
                }, t
            }(r("7Y3S").a),
            u = new s(a),
            l = r("iUyY"),
            c = function(e, t, r) {
                var n = Object(i.a)(200, u).subscribe((function(i) {
                    var o = {
                        top: 0,
                        bottom: 0
                    };
                    o.top += e.getBoundingClientRect().top, o.bottom += e.getBoundingClientRect().bottom;
                    var a = e.ownerDocument;
                    if (a)
                        for (var s = a.defaultView; void 0 !== (null == s ? void 0 : s.frameElement) && null !== (null == s ? void 0 : s.frameElement) && window.top !== s;) o.top += s.frameElement.getBoundingClientRect().top, o.bottom += s.frameElement.getBoundingClientRect().bottom, s = s.parent;
                    var u = o.top - window.top.innerHeight,
                        l = window.top.innerHeight * (t / 100);
                    (Math.abs(u) < l || Math.abs(o.bottom) < l) && (r(), n.unsubscribe())
                }))
            },
            d = function(e, t, r, o) {
                Object(i.a)(200, u).subscribe((function(i) {
                    var a = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    };
                    a.top += e.getBoundingClientRect().top, a.bottom += e.getBoundingClientRect().bottom, a.left += e.getBoundingClientRect().left, a.right += e.getBoundingClientRect().right;
                    var s = e.ownerDocument;
                    if (s) {
                        for (var u = s.defaultView; void 0 !== (null == u ? void 0 : u.frameElement) && null !== (null == u ? void 0 : u.frameElement) && window.top !== u && !Object(l.b)(u);) a.top += u.frameElement.getBoundingClientRect().top, a.left += u.frameElement.getBoundingClientRect().left, u = u.parent;
                        if (a.bottom = a.top + e.offsetHeight, a.right = a.left + e.offsetWidth, Object(l.b)(u)) u.$sf.ext.inViewPercentage() > 100 * t && u.$sf.ext.winHasFocus() ? r() : o && o();
                        else {
                            var c = window.top.innerHeight,
                                d = window.top.innerWidth,
                                p = a.top >= 0 && a.top <= c - e.offsetHeight * t && c - a.top >= 0 || a.top < 0 && a.bottom >= e.offsetHeight * t,
                                h = a.left >= 0 && e.offsetWidth * t <= d - a.left && d - a.left >= 0 || a.left < 0 && a.right >= e.offsetWidth * t,
                                f = p && h;
                            (Object(n.b)() ? f : f && window.top.document.hasFocus()) ? r(): o && o()
                        }
                    }
                }))
            }
    },
    QK65: function(e, t, r) {
        "use strict";

        function n(e) {
            return "function" == typeof e
        }
        r.d(t, "a", (function() {
            return n
        }))
    },
    "RLU+": function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return i
        }));
        var n = r("bb6g"),
            i = function(e) {
                function t(t, r) {
                    var n = e.call(this, t, r) || this;
                    return n.scheduler = t, n.work = r, n.pending = !1, n
                }
                return n.a(t, e), t.prototype.schedule = function(e, t) {
                    if (void 0 === t && (t = 0), this.closed) return this;
                    this.state = e;
                    var r = this.id,
                        n = this.scheduler;
                    return null != r && (this.id = this.recycleAsyncId(n, r, t)), this.pending = !0, this.delay = t, this.id = this.id || this.requestAsyncId(n, this.id, t), this
                }, t.prototype.requestAsyncId = function(e, t, r) {
                    return void 0 === r && (r = 0), setInterval(e.flush.bind(e, this), r)
                }, t.prototype.recycleAsyncId = function(e, t, r) {
                    if (void 0 === r && (r = 0), null !== r && this.delay === r && !1 === this.pending) return t;
                    clearInterval(t)
                }, t.prototype.execute = function(e, t) {
                    if (this.closed) return new Error("executing a cancelled action");
                    this.pending = !1;
                    var r = this._execute(e, t);
                    if (r) return r;
                    !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                }, t.prototype._execute = function(e, t) {
                    var r = !1,
                        n = void 0;
                    try {
                        this.work(e)
                    } catch (e) {
                        r = !0, n = !!e && e || new Error(e)
                    }
                    if (r) return this.unsubscribe(), n
                }, t.prototype._unsubscribe = function() {
                    var e = this.id,
                        t = this.scheduler,
                        r = t.actions,
                        n = r.indexOf(this);
                    this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== n && r.splice(n, 1), null != e && (this.id = this.recycleAsyncId(t, e, null)), this.delay = null
                }, t
            }(function(e) {
                function t(t, r) {
                    return e.call(this) || this
                }
                return n.a(t, e), t.prototype.schedule = function(e, t) {
                    return void 0 === t && (t = 0), this
                }, t
            }(r("3gnf").a))
    },
    SQAW: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return c
        }));
        var n = r("1tRE");
        var i = r("Egzs"),
            o = r("VOtN");
        var a = r("ebHz");

        function s(e) {
            return e
        }

        function u(e) {
            return 0 === e.length ? s : 1 === e.length ? e[0] : function(t) {
                return e.reduce((function(e, t) {
                    return t(e)
                }), t)
            }
        }
        var l = r("auMp"),
            c = function() {
                function e(e) {
                    this._isScalar = !1, e && (this._subscribe = e)
                }
                return e.prototype.lift = function(t) {
                    var r = new e;
                    return r.source = this, r.operator = t, r
                }, e.prototype.subscribe = function(e, t, r) {
                    var a = this.operator,
                        s = function(e, t, r) {
                            if (e) {
                                if (e instanceof n.a) return e;
                                if (e[i.a]) return e[i.a]()
                            }
                            return e || t || r ? new n.a(e, t, r) : new n.a(o.a)
                        }(e, t, r);
                    if (a ? s.add(a.call(s, this.source)) : s.add(this.source || l.a.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable ? this._subscribe(s) : this._trySubscribe(s)), l.a.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable && (s.syncErrorThrowable = !1, s.syncErrorThrown)) throw s.syncErrorValue;
                    return s
                }, e.prototype._trySubscribe = function(e) {
                    try {
                        return this._subscribe(e)
                    } catch (t) {
                        l.a.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t),
                            function(e) {
                                for (; e;) {
                                    var t = e,
                                        r = t.closed,
                                        i = t.destination,
                                        o = t.isStopped;
                                    if (r || o) return !1;
                                    e = i && i instanceof n.a ? i : null
                                }
                                return !0
                            }(e) && e.error(t)
                    }
                }, e.prototype.forEach = function(e, t) {
                    var r = this;
                    return new(t = d(t))((function(t, n) {
                        var i;
                        i = r.subscribe((function(t) {
                            try {
                                e(t)
                            } catch (e) {
                                n(e), i && i.unsubscribe()
                            }
                        }), n, t)
                    }))
                }, e.prototype._subscribe = function(e) {
                    var t = this.source;
                    return t && t.subscribe(e)
                }, e.prototype[a.a] = function() {
                    return this
                }, e.prototype.pipe = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return 0 === e.length ? this : u(e)(this)
                }, e.prototype.toPromise = function(e) {
                    var t = this;
                    return new(e = d(e))((function(e, r) {
                        var n;
                        t.subscribe((function(e) {
                            return n = e
                        }), (function(e) {
                            return r(e)
                        }), (function() {
                            return e(n)
                        }))
                    }))
                }, e.create = function(t) {
                    return new e(t)
                }, e
            }();

        function d(e) {
            if (e || (e = l.a.Promise || Promise), !e) throw new Error("no Promise impl found");
            return e
        }
    },
    VOtN: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return o
        }));
        var n = r("auMp"),
            i = r("9ZDi"),
            o = {
                closed: !0,
                next: function(e) {},
                error: function(e) {
                    if (n.a.useDeprecatedSynchronousErrorHandling) throw e;
                    Object(i.a)(e)
                },
                complete: function() {}
            }
    },
    a9de: function(e, t, r) {
        var n, i, o, a;

        function s(e) {
            return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, s(e)
        }
        a = function(e) {
            "use strict";

            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" == s(Symbol.iterator) ? function(e) {
                    return s(e)
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : s(e)
                })(e)
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function n(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function i(e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e
            }

            function o(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function(t) {
                        o(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function l(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && d(e, t)
            }

            function c(e) {
                return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e, t) {
                return !t || "object" != s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = c(e);
                    if (t) {
                        var i = c(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return p(this, r)
                }
            }

            function f() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {
                    id: e.id || null,
                    adId: e.adId || null,
                    sequence: e.sequence || null,
                    apiFramework: e.apiFramework || null,
                    universalAdId: {
                        value: null,
                        idRegistry: "unknown"
                    },
                    creativeExtensions: []
                }
            }
            var v = ["ADCATEGORIES", "ADCOUNT", "ADPLAYHEAD", "ADSERVINGID", "ADTYPE", "APIFRAMEWORKS", "APPBUNDLE", "ASSETURI", "BLOCKEDADCATEGORIES", "BREAKMAXADLENGTH", "BREAKMAXADS", "BREAKMAXDURATION", "BREAKMINADLENGTH", "BREAKMINDURATION", "BREAKPOSITION", "CLICKPOS", "CLICKTYPE", "CLIENTUA", "CONTENTID", "CONTENTPLAYHEAD", "CONTENTURI", "DEVICEIP", "DEVICEUA", "DOMAIN", "EXTENSIONS", "GDPRCONSENT", "IFA", "IFATYPE", "INVENTORYSTATE", "LATLONG", "LIMITADTRACKING", "MEDIAMIME", "MEDIAPLAYHEAD", "OMIDPARTNER", "PAGEURL", "PLACEMENTTYPE", "PLAYERCAPABILITIES", "PLAYERSIZE", "PLAYERSTATE", "PODSEQUENCE", "REGULATIONS", "SERVERSIDE", "SERVERUA", "TRANSACTIONID", "UNIVERSALADID", "VASTVERSIONS", "VERIFICATIONVENDORS"];

            function m(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = [],
                    i = y(e);
                for (var o in !t.ERRORCODE || r.isCustomCode || /^[0-9]{3}$/.test(t.ERRORCODE) || (t.ERRORCODE = 900), t.CACHEBUSTING = T(Math.round(1e8 * Math.random()).toString()), t.TIMESTAMP = (new Date).toISOString(), t.RANDOM = t.random = t.CACHEBUSTING, t) t[o] = k(t[o]);
                for (var a in i) {
                    var s = i[a];
                    "string" == typeof s && n.push(g(s, t))
                }
                return n
            }

            function g(e, t) {
                var r = (e = b(e, t)).match(/[^[\]]+(?=])/g);
                if (!r) return e;
                var n = r.filter((function(e) {
                    return v.indexOf(e) > -1
                }));
                return 0 === n.length ? e : b(e, n = n.reduce((function(e, t) {
                    return e[t] = -1, e
                }), {}))
            }

            function b(e, t) {
                var r = e;
                for (var n in t) {
                    var i = t[n];
                    r = r.replace(new RegExp("(?:\\[|%%)(".concat(n, ")(?:\\]|%%)"), "g"), i)
                }
                return r
            }

            function y(e) {
                return Array.isArray(e) ? e.map((function(e) {
                    return e && e.hasOwnProperty("url") ? e.url : e
                })) : e
            }

            function w(e, t) {
                for (var r = 0; r < t.length; r++)
                    if (A(t[r], e)) return !0;
                return !1
            }

            function A(e, t) {
                if (e && t) {
                    var r = Object.getOwnPropertyNames(e),
                        n = Object.getOwnPropertyNames(t);
                    return r.length === n.length && e.id === t.id && e.url === t.url
                }
                return !1
            }

            function k(e) {
                return encodeURIComponent(e).replace(/[!'()*]/g, (function(e) {
                    return "%".concat(e.charCodeAt(0).toString(16))
                }))
            }

            function T(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
                    r = String(e);
                return r.length < t ? _(0, t - r.length, !1).map((function() {
                    return "0"
                })).join("") + r : r
            }

            function _(e, t, r) {
                for (var n = [], i = e < t, o = r ? i ? t + 1 : t - 1 : t, a = e; i ? a < o : a > o; i ? a++ : a--) n.push(a);
                return n
            }
            var E = {
                track: function(e, t, r) {
                    m(e, t, r).forEach((function(e) {
                        "undefined" != typeof window && null !== window && ((new Image).src = e)
                    }))
                },
                resolveURLTemplates: m,
                extractURLsFromTemplates: y,
                containsTemplateObject: w,
                isTemplateObjectEqual: A,
                encodeURIComponentRFC3986: k,
                replaceUrlMacros: g,
                leftpad: T,
                range: _,
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                flatten: function e(t) {
                    return t.reduce((function(t, r) {
                        return t.concat(Array.isArray(r) ? e(r) : r)
                    }), [])
                },
                joinArrayOfUniqueTemplateObjs: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        r = Array.isArray(e) ? e : [],
                        n = Array.isArray(t) ? t : [],
                        i = r.concat(n);
                    return i.reduce((function(e, t) {
                        return w(t, e) || e.push(t), e
                    }), [])
                }
            };

            function R(e) {
                return -1 !== ["true", "TRUE", "True", "1"].indexOf(e)
            }
            var x = {
                childByName: function(e, t) {
                    var r = e.childNodes;
                    for (var n in r) {
                        var i = r[n];
                        if (i.nodeName === t) return i
                    }
                },
                childrenByName: function(e, t) {
                    var r = [],
                        n = e.childNodes;
                    for (var i in n) {
                        var o = n[i];
                        o.nodeName === t && r.push(o)
                    }
                    return r
                },
                resolveVastAdTagURI: function(e, t) {
                    if (!t) return e;
                    if (0 === e.indexOf("//")) {
                        var r = location.protocol;
                        return "".concat(r).concat(e)
                    }
                    if (-1 === e.indexOf("://")) {
                        var n = t.slice(0, t.lastIndexOf("/"));
                        return "".concat(n, "/").concat(e)
                    }
                    return e
                },
                parseBoolean: R,
                parseNodeText: function(e) {
                    return e && (e.textContent || e.text || "").trim()
                },
                copyNodeAttribute: function(e, t, r) {
                    var n = t.getAttribute(e);
                    n && r.setAttribute(e, n)
                },
                parseAttributes: function(e) {
                    for (var t = e.attributes, r = {}, n = 0; n < t.length; n++) r[t[n].nodeName] = t[n].nodeValue;
                    return r
                },
                parseDuration: function(e) {
                    if (null == e) return -1;
                    if (E.isNumeric(e)) return parseInt(e);
                    var t = e.split(":");
                    if (3 !== t.length) return -1;
                    var r = t[2].split("."),
                        n = parseInt(r[0]);
                    2 === r.length && (n += parseFloat("0.".concat(r[1])));
                    var i = parseInt(60 * t[1]),
                        o = parseInt(60 * t[0] * 60);
                    return isNaN(o) || isNaN(i) || isNaN(n) || i > 3600 || n > 60 ? -1 : o + i + n
                },
                splitVAST: function(e) {
                    var t = [],
                        r = null;
                    return e.forEach((function(n, i) {
                        if (n.sequence && (n.sequence = parseInt(n.sequence, 10)), n.sequence > 1) {
                            var o = e[i - 1];
                            if (o && o.sequence === n.sequence - 1) return void(r && r.push(n));
                            delete n.sequence
                        }
                        r = [n], t.push(r)
                    })), t
                },
                assignAttributes: function(e, t) {
                    if (e)
                        for (var r in e) {
                            var n = e[r];
                            if (n.nodeName && n.nodeValue && t.hasOwnProperty(n.nodeName)) {
                                var i = n.nodeValue;
                                "boolean" == typeof t[n.nodeName] && (i = R(i)), t[n.nodeName] = i
                            }
                        }
                },
                mergeWrapperAdData: function(e, t) {
                    e.errorURLTemplates = t.errorURLTemplates.concat(e.errorURLTemplates), e.impressionURLTemplates = t.impressionURLTemplates.concat(e.impressionURLTemplates), e.extensions = t.extensions.concat(e.extensions), e.followAdditionalWrappers = t.followAdditionalWrappers, e.allowMultipleAds = t.allowMultipleAds, e.fallbackOnNoAd = t.fallbackOnNoAd;
                    var r = (t.creatives || []).filter((function(e) {
                            return e && "companion" === e.type
                        })),
                        n = r.reduce((function(e, t) {
                            return (t.variations || []).forEach((function(t) {
                                (t.companionClickTrackingURLTemplates || []).forEach((function(t) {
                                    E.containsTemplateObject(t, e) || e.push(t)
                                }))
                            })), e
                        }), []);
                    e.creatives = r.concat(e.creatives);
                    var i = t.videoClickTrackingURLTemplates && t.videoClickTrackingURLTemplates.length,
                        o = t.videoCustomClickURLTemplates && t.videoCustomClickURLTemplates.length;
                    e.creatives.forEach((function(e) {
                        if (t.trackingEvents && t.trackingEvents[e.type])
                            for (var r in t.trackingEvents[e.type]) {
                                var a = t.trackingEvents[e.type][r];
                                Array.isArray(e.trackingEvents[r]) || (e.trackingEvents[r] = []), e.trackingEvents[r] = e.trackingEvents[r].concat(a)
                            }
                        "linear" === e.type && (i && (e.videoClickTrackingURLTemplates = e.videoClickTrackingURLTemplates.concat(t.videoClickTrackingURLTemplates)), o && (e.videoCustomClickURLTemplates = e.videoCustomClickURLTemplates.concat(t.videoCustomClickURLTemplates)), !t.videoClickThroughURLTemplate || null !== e.videoClickThroughURLTemplate && void 0 !== e.videoClickThroughURLTemplate || (e.videoClickThroughURLTemplate = t.videoClickThroughURLTemplate)), "companion" === e.type && n.length && (e.variations || []).forEach((function(e) {
                            e.companionClickTrackingURLTemplates = E.joinArrayOfUniqueTemplateObjs(e.companionClickTrackingURLTemplates, n)
                        }))
                    })), t.adVerifications && (e.adVerifications = e.adVerifications.concat(t.adVerifications)), t.blockedAdCategories && (e.blockedAdCategories = e.blockedAdCategories.concat(t.blockedAdCategories))
                }
            };

            function S(e, t) {
                var r = function() {
                    var e = f(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                        t = e.id,
                        r = e.adId,
                        n = e.sequence,
                        i = e.apiFramework;
                    return {
                        id: t,
                        adId: r,
                        sequence: n,
                        apiFramework: i,
                        type: "companion",
                        required: null,
                        variations: []
                    }
                }(t);
                return r.required = e.getAttribute("required") || null, r.variations = x.childrenByName(e, "Companion").map((function(e) {
                    var t = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return {
                            id: e.id || null,
                            adType: "companionAd",
                            width: e.width || 0,
                            height: e.height || 0,
                            assetWidth: e.assetWidth || null,
                            assetHeight: e.assetHeight || null,
                            expandedWidth: e.expandedWidth || null,
                            expandedHeight: e.expandedHeight || null,
                            apiFramework: e.apiFramework || null,
                            adSlotID: e.adSlotID || null,
                            pxratio: e.pxratio || "1",
                            renderingMode: e.renderingMode || "default",
                            staticResources: [],
                            htmlResources: [],
                            iframeResources: [],
                            adParameters: null,
                            xmlEncoded: null,
                            altText: null,
                            companionClickThroughURLTemplate: null,
                            companionClickTrackingURLTemplates: [],
                            trackingEvents: {}
                        }
                    }(x.parseAttributes(e));
                    t.htmlResources = x.childrenByName(e, "HTMLResource").reduce((function(e, t) {
                        var r = x.parseNodeText(t);
                        return r ? e.concat(r) : e
                    }), []), t.iframeResources = x.childrenByName(e, "IFrameResource").reduce((function(e, t) {
                        var r = x.parseNodeText(t);
                        return r ? e.concat(r) : e
                    }), []), t.staticResources = x.childrenByName(e, "StaticResource").reduce((function(e, t) {
                        var r = x.parseNodeText(t);
                        return r ? e.concat({
                            url: r,
                            creativeType: t.getAttribute("creativeType") || null
                        }) : e
                    }), []), t.altText = x.parseNodeText(x.childByName(e, "AltText")) || null;
                    var r = x.childByName(e, "TrackingEvents");
                    r && x.childrenByName(r, "Tracking").forEach((function(e) {
                        var r = e.getAttribute("event"),
                            n = x.parseNodeText(e);
                        r && n && (Array.isArray(t.trackingEvents[r]) || (t.trackingEvents[r] = []), t.trackingEvents[r].push(n))
                    })), t.companionClickTrackingURLTemplates = x.childrenByName(e, "CompanionClickTracking").map((function(e) {
                        return {
                            id: e.getAttribute("id") || null,
                            url: x.parseNodeText(e)
                        }
                    })), t.companionClickThroughURLTemplate = x.parseNodeText(x.childByName(e, "CompanionClickThrough")) || null;
                    var n = x.childByName(e, "AdParameters");
                    return n && (t.adParameters = x.parseNodeText(n), t.xmlEncoded = n.getAttribute("xmlEncoded") || null), t
                })), r
            }

            function O(e) {
                return "linear" === e.type
            }

            function U(e, t) {
                var r, n = function() {
                    var e = f(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                        t = e.id,
                        r = e.adId,
                        n = e.sequence,
                        i = e.apiFramework;
                    return {
                        id: t,
                        adId: r,
                        sequence: n,
                        apiFramework: i,
                        type: "linear",
                        duration: 0,
                        skipDelay: null,
                        mediaFiles: [],
                        mezzanine: null,
                        interactiveCreativeFile: null,
                        closedCaptionFiles: [],
                        videoClickThroughURLTemplate: null,
                        videoClickTrackingURLTemplates: [],
                        videoCustomClickURLTemplates: [],
                        adParameters: null,
                        icons: [],
                        trackingEvents: {}
                    }
                }(t);
                n.duration = x.parseDuration(x.parseNodeText(x.childByName(e, "Duration")));
                var i = e.getAttribute("skipoffset");
                if (null == i) n.skipDelay = null;
                else if ("%" === i.charAt(i.length - 1) && -1 !== n.duration) {
                    var o = parseInt(i, 10);
                    n.skipDelay = n.duration * (o / 100)
                } else n.skipDelay = x.parseDuration(i);
                var a = x.childByName(e, "VideoClicks");
                if (a) {
                    var s = x.childByName(a, "ClickThrough");
                    n.videoClickThroughURLTemplate = s ? {
                        id: s.getAttribute("id") || null,
                        url: x.parseNodeText(s)
                    } : null, x.childrenByName(a, "ClickTracking").forEach((function(e) {
                        n.videoClickTrackingURLTemplates.push({
                            id: e.getAttribute("id") || null,
                            url: x.parseNodeText(e)
                        })
                    })), x.childrenByName(a, "CustomClick").forEach((function(e) {
                        n.videoCustomClickURLTemplates.push({
                            id: e.getAttribute("id") || null,
                            url: x.parseNodeText(e)
                        })
                    }))
                }
                var u = x.childByName(e, "AdParameters");
                u && (n.adParameters = x.parseNodeText(u)), x.childrenByName(e, "TrackingEvents").forEach((function(e) {
                    x.childrenByName(e, "Tracking").forEach((function(e) {
                        var t = e.getAttribute("event"),
                            i = x.parseNodeText(e);
                        if (t && i) {
                            if ("progress" === t) {
                                if (!(r = e.getAttribute("offset"))) return;
                                t = "%" === r.charAt(r.length - 1) ? "progress-".concat(r) : "progress-".concat(Math.round(x.parseDuration(r)))
                            }
                            Array.isArray(n.trackingEvents[t]) || (n.trackingEvents[t] = []), n.trackingEvents[t].push(i)
                        }
                    }))
                })), x.childrenByName(e, "MediaFiles").forEach((function(e) {
                    x.childrenByName(e, "MediaFile").forEach((function(e) {
                        n.mediaFiles.push(function(e) {
                            var t = {
                                id: null,
                                fileURL: null,
                                fileSize: 0,
                                deliveryType: "progressive",
                                mimeType: null,
                                mediaType: null,
                                codec: null,
                                bitrate: 0,
                                minBitrate: 0,
                                maxBitrate: 0,
                                width: 0,
                                height: 0,
                                apiFramework: null,
                                scalable: null,
                                maintainAspectRatio: null
                            };
                            t.id = e.getAttribute("id"), t.fileURL = x.parseNodeText(e), t.deliveryType = e.getAttribute("delivery"), t.codec = e.getAttribute("codec"), t.mimeType = e.getAttribute("type"), t.mediaType = e.getAttribute("mediaType") || "2D", t.apiFramework = e.getAttribute("apiFramework"), t.fileSize = parseInt(e.getAttribute("fileSize") || 0), t.bitrate = parseInt(e.getAttribute("bitrate") || 0), t.minBitrate = parseInt(e.getAttribute("minBitrate") || 0), t.maxBitrate = parseInt(e.getAttribute("maxBitrate") || 0), t.width = parseInt(e.getAttribute("width") || 0), t.height = parseInt(e.getAttribute("height") || 0);
                            var r = e.getAttribute("scalable");
                            r && "string" == typeof r && (t.scalable = x.parseBoolean(r));
                            var n = e.getAttribute("maintainAspectRatio");
                            return n && "string" == typeof n && (t.maintainAspectRatio = x.parseBoolean(n)), t
                        }(e))
                    }));
                    var t = x.childByName(e, "InteractiveCreativeFile");
                    t && (n.interactiveCreativeFile = function(e) {
                        var t = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return {
                                type: e.type || null,
                                apiFramework: e.apiFramework || null,
                                variableDuration: x.parseBoolean(e.variableDuration),
                                fileURL: null
                            }
                        }(x.parseAttributes(e));
                        return t.fileURL = x.parseNodeText(e), t
                    }(t));
                    var r = x.childByName(e, "ClosedCaptionFiles");
                    r && x.childrenByName(r, "ClosedCaptionFile").forEach((function(e) {
                        var t = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return {
                                type: e.type || null,
                                language: e.language || null,
                                fileURL: null
                            }
                        }(x.parseAttributes(e));
                        t.fileURL = x.parseNodeText(e), n.closedCaptionFiles.push(t)
                    }));
                    var i, o, a, s = x.childByName(e, "Mezzanine"),
                        u = (i = s, o = {}, a = !1, ["delivery", "type", "width", "height"].forEach((function(e) {
                            i && i.getAttribute(e) ? o[e] = i.getAttribute(e) : a = !0
                        })), a ? null : o);
                    if (u) {
                        var l = {
                            id: null,
                            fileURL: null,
                            delivery: null,
                            codec: null,
                            type: null,
                            width: 0,
                            height: 0,
                            fileSize: 0,
                            mediaType: "2D"
                        };
                        l.id = s.getAttribute("id"), l.fileURL = x.parseNodeText(s), l.delivery = u.delivery, l.codec = s.getAttribute("codec"), l.type = u.type, l.width = parseInt(u.width, 10), l.height = parseInt(u.height, 10), l.fileSize = parseInt(s.getAttribute("fileSize"), 10), l.mediaType = s.getAttribute("mediaType") || "2D", n.mezzanine = l
                    }
                }));
                var l = x.childByName(e, "Icons");
                return l && x.childrenByName(l, "Icon").forEach((function(e) {
                    n.icons.push(function(e) {
                        var t = {
                            program: null,
                            height: 0,
                            width: 0,
                            xPosition: 0,
                            yPosition: 0,
                            apiFramework: null,
                            offset: null,
                            duration: 0,
                            type: null,
                            staticResource: null,
                            htmlResource: null,
                            iframeResource: null,
                            pxratio: "1",
                            iconClickThroughURLTemplate: null,
                            iconClickTrackingURLTemplates: [],
                            iconViewTrackingURLTemplate: null
                        };
                        t.program = e.getAttribute("program"), t.height = parseInt(e.getAttribute("height") || 0), t.width = parseInt(e.getAttribute("width") || 0), t.xPosition = function(e) {
                            return -1 !== ["left", "right"].indexOf(e) ? e : parseInt(e || 0)
                        }(e.getAttribute("xPosition")), t.yPosition = function(e) {
                            return -1 !== ["top", "bottom"].indexOf(e) ? e : parseInt(e || 0)
                        }(e.getAttribute("yPosition")), t.apiFramework = e.getAttribute("apiFramework"), t.pxratio = e.getAttribute("pxratio") || "1", t.offset = x.parseDuration(e.getAttribute("offset")), t.duration = x.parseDuration(e.getAttribute("duration")), x.childrenByName(e, "HTMLResource").forEach((function(e) {
                            t.type = e.getAttribute("creativeType") || "text/html", t.htmlResource = x.parseNodeText(e)
                        })), x.childrenByName(e, "IFrameResource").forEach((function(e) {
                            t.type = e.getAttribute("creativeType") || 0, t.iframeResource = x.parseNodeText(e)
                        })), x.childrenByName(e, "StaticResource").forEach((function(e) {
                            t.type = e.getAttribute("creativeType") || 0, t.staticResource = x.parseNodeText(e)
                        }));
                        var r = x.childByName(e, "IconClicks");
                        return r && (t.iconClickThroughURLTemplate = x.parseNodeText(x.childByName(r, "IconClickThrough")), x.childrenByName(r, "IconClickTracking").forEach((function(e) {
                            t.iconClickTrackingURLTemplates.push({
                                id: e.getAttribute("id") || null,
                                url: x.parseNodeText(e)
                            })
                        }))), t.iconViewTrackingURLTemplate = x.parseNodeText(x.childByName(e, "IconViewTracking")), t
                    }(e))
                })), n
            }

            function C(e, t) {
                var r = function() {
                    var e = f(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                        t = e.id,
                        r = e.adId,
                        n = e.sequence,
                        i = e.apiFramework;
                    return {
                        id: t,
                        adId: r,
                        sequence: n,
                        apiFramework: i,
                        type: "nonlinear",
                        variations: [],
                        trackingEvents: {}
                    }
                }(t);
                return x.childrenByName(e, "TrackingEvents").forEach((function(e) {
                    var t, n;
                    x.childrenByName(e, "Tracking").forEach((function(e) {
                        t = e.getAttribute("event"), n = x.parseNodeText(e), t && n && (Array.isArray(r.trackingEvents[t]) || (r.trackingEvents[t] = []), r.trackingEvents[t].push(n))
                    }))
                })), x.childrenByName(e, "NonLinear").forEach((function(e) {
                    var t = {
                        id: null,
                        width: 0,
                        height: 0,
                        expandedWidth: 0,
                        expandedHeight: 0,
                        scalable: !0,
                        maintainAspectRatio: !0,
                        minSuggestedDuration: 0,
                        apiFramework: "static",
                        adType: "nonLinearAd",
                        type: null,
                        staticResource: null,
                        htmlResource: null,
                        iframeResource: null,
                        nonlinearClickThroughURLTemplate: null,
                        nonlinearClickTrackingURLTemplates: [],
                        adParameters: null
                    };
                    t.id = e.getAttribute("id") || null, t.width = e.getAttribute("width"), t.height = e.getAttribute("height"), t.expandedWidth = e.getAttribute("expandedWidth"), t.expandedHeight = e.getAttribute("expandedHeight"), t.scalable = x.parseBoolean(e.getAttribute("scalable")), t.maintainAspectRatio = x.parseBoolean(e.getAttribute("maintainAspectRatio")), t.minSuggestedDuration = x.parseDuration(e.getAttribute("minSuggestedDuration")), t.apiFramework = e.getAttribute("apiFramework"), x.childrenByName(e, "HTMLResource").forEach((function(e) {
                        t.type = e.getAttribute("creativeType") || "text/html", t.htmlResource = x.parseNodeText(e)
                    })), x.childrenByName(e, "IFrameResource").forEach((function(e) {
                        t.type = e.getAttribute("creativeType") || 0, t.iframeResource = x.parseNodeText(e)
                    })), x.childrenByName(e, "StaticResource").forEach((function(e) {
                        t.type = e.getAttribute("creativeType") || 0, t.staticResource = x.parseNodeText(e)
                    }));
                    var n = x.childByName(e, "AdParameters");
                    n && (t.adParameters = x.parseNodeText(n)), t.nonlinearClickThroughURLTemplate = x.parseNodeText(x.childByName(e, "NonLinearClickThrough")), x.childrenByName(e, "NonLinearClickTracking").forEach((function(e) {
                        t.nonlinearClickTrackingURLTemplates.push({
                            id: e.getAttribute("id") || null,
                            url: x.parseNodeText(e)
                        })
                    })), r.variations.push(t)
                })), r
            }

            function N(e) {
                var t = [];
                return e.forEach((function(e) {
                    var r = I(e);
                    r && t.push(r)
                })), t
            }

            function I(e) {
                if ("#comment" === e.nodeName) return null;
                var t, r = {
                        name: null,
                        value: null,
                        attributes: {},
                        children: []
                    },
                    n = e.attributes,
                    i = e.childNodes;
                if (r.name = e.nodeName, e.attributes)
                    for (var o in n)
                        if (n.hasOwnProperty(o)) {
                            var a = n[o];
                            a.nodeName && a.nodeValue && (r.attributes[a.nodeName] = a.nodeValue)
                        }
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var u = I(i[s]);
                        u && r.children.push(u)
                    }
                if (0 === r.children.length || 1 === r.children.length && ["#cdata-section", "#text"].indexOf(r.children[0].name) >= 0) {
                    var l = x.parseNodeText(e);
                    "" !== l && (r.value = l), r.children = []
                }
                return null === (t = r).value && 0 === Object.keys(t.attributes).length && 0 === t.children.length ? null : r
            }

            function L(e) {
                var t = [];
                return e.forEach((function(e) {
                    var r, n, i = {
                            id: e.getAttribute("id") || null,
                            adId: B(e),
                            sequence: e.getAttribute("sequence") || null,
                            apiFramework: e.getAttribute("apiFramework") || null
                        },
                        o = x.childByName(e, "UniversalAdId");
                    o && (r = {
                        idRegistry: o.getAttribute("idRegistry") || "unknown",
                        value: x.parseNodeText(o)
                    });
                    var a = x.childByName(e, "CreativeExtensions");
                    for (var s in a && (n = N(x.childrenByName(a, "CreativeExtension"))), e.childNodes) {
                        var u = e.childNodes[s],
                            l = void 0;
                        switch (u.nodeName) {
                            case "Linear":
                                l = U(u, i);
                                break;
                            case "NonLinearAds":
                                l = C(u, i);
                                break;
                            case "CompanionAds":
                                l = S(u, i)
                        }
                        l && (r && (l.universalAdId = r), n && (l.creativeExtensions = n), t.push(l))
                    }
                })), t
            }

            function B(e) {
                return e.getAttribute("AdID") || e.getAttribute("adID") || e.getAttribute("adId") || null
            }
            var D = {
                Wrapper: {
                    subElements: ["VASTAdTagURI", "Impression"]
                },
                BlockedAdCategories: {
                    attributes: ["authority"]
                },
                InLine: {
                    subElements: ["AdSystem", "AdTitle", "Impression", "AdServingId", "Creatives"]
                },
                Category: {
                    attributes: ["authority"]
                },
                Pricing: {
                    attributes: ["model", "currency"]
                },
                Verification: {
                    oneOfinLineResources: ["JavaScriptResource", "ExecutableResource"],
                    attributes: ["vendor"]
                },
                UniversalAdId: {
                    attributes: ["idRegistry"]
                },
                JavaScriptResource: {
                    attributes: ["apiFramework", "browserOptional"]
                },
                ExecutableResource: {
                    attributes: ["apiFramework", "type"]
                },
                Tracking: {
                    attributes: ["event"]
                },
                Creatives: {
                    subElements: ["Creative"]
                },
                Creative: {
                    subElements: ["UniversalAdId"]
                },
                Linear: {
                    subElements: ["MediaFiles", "Duration"]
                },
                MediaFiles: {
                    subElements: ["MediaFile"]
                },
                MediaFile: {
                    attributes: ["delivery", "type", "width", "height"]
                },
                Mezzanine: {
                    attributes: ["delivery", "type", "width", "height"]
                },
                NonLinear: {
                    oneOfinLineResources: ["StaticResource", "IFrameResource", "HTMLResource"],
                    attributes: ["width", "height"]
                },
                Companion: {
                    oneOfinLineResources: ["StaticResource", "IFrameResource", "HTMLResource"],
                    attributes: ["width", "height"]
                },
                StaticResource: {
                    attributes: ["creativeType"]
                },
                Icons: {
                    subElements: ["Icon"]
                },
                Icon: {
                    oneOfinLineResources: ["StaticResource", "IFrameResource", "HTMLResource"]
                }
            };

            function j(e, t) {
                if (D[e.nodeName] && D[e.nodeName].attributes) {
                    var r = D[e.nodeName].attributes.filter((function(t) {
                        return !e.getAttribute(t)
                    }));
                    r.length > 0 && V({
                        name: e.nodeName,
                        parentName: e.parentNode.nodeName,
                        attributes: r
                    }, t)
                }
            }

            function P(e, t, r) {
                var n = D[e.nodeName],
                    i = !r && "Wrapper" !== e.nodeName;
                if (n && !i) {
                    if (n.subElements) {
                        var o = n.subElements.filter((function(t) {
                            return !x.childByName(e, t)
                        }));
                        o.length > 0 && V({
                            name: e.nodeName,
                            parentName: e.parentNode.nodeName,
                            subElements: o
                        }, t)
                    }
                    r && n.oneOfinLineResources && (n.oneOfinLineResources.some((function(t) {
                        return x.childByName(e, t)
                    })) || V({
                        name: e.nodeName,
                        parentName: e.parentNode.nodeName,
                        oneOfResources: n.oneOfinLineResources
                    }, t))
                }
            }

            function F(e) {
                return e.children && 0 !== e.children.length
            }

            function V(e, t) {
                var r = e.name,
                    n = e.parentName,
                    i = e.attributes,
                    o = e.subElements,
                    a = e.oneOfResources,
                    s = "Element '".concat(r, "'");
                t("VAST-warning", {
                    message: s += i ? " missing required attribute(s) '".concat(i.join(", "), "' ") : o ? " missing required sub element(s) '".concat(o.join(", "), "' ") : a ? " must provide one of the following '".concat(a.join(", "), "' ") : " is empty",
                    parentElement: n,
                    specVersion: 4.1
                })
            }
            var M = function e(t, r, n) {
                if (t && t.nodeName)
                    if ("InLine" === t.nodeName && (n = !0), j(t, r), F(t)) {
                        P(t, r, n);
                        for (var i = 0; i < t.children.length; i++) e(t.children[i], r, n)
                    } else 0 === x.parseNodeText(t).length && V({
                        name: t.nodeName,
                        parentName: t.parentNode.nodeName
                    }, r)
            };

            function W(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = r.allowMultipleAds,
                    i = r.followAdditionalWrappers,
                    o = e.childNodes;
                for (var a in o) {
                    var s = o[a];
                    if (-1 !== ["Wrapper", "InLine"].indexOf(s.nodeName) && ("Wrapper" !== s.nodeName || !1 !== i)) {
                        if (x.copyNodeAttribute("id", e, s), x.copyNodeAttribute("sequence", e, s), x.copyNodeAttribute("adType", e, s), "Wrapper" === s.nodeName) return {
                            ad: q(s, t),
                            type: "WRAPPER"
                        };
                        if ("InLine" === s.nodeName) return {
                            ad: H(s, t, {
                                allowMultipleAds: n
                            }),
                            type: "INLINE"
                        }
                    }
                }
            }

            function H(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = r.allowMultipleAds;
                return !1 === n && e.getAttribute("sequence") ? null : z(e, t)
            }

            function z(e, t) {
                var r = [];
                t && M(e, t);
                var n = e.childNodes,
                    i = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return {
                            id: e.id || null,
                            sequence: e.sequence || null,
                            adType: e.adType || null,
                            adServingId: null,
                            categories: [],
                            expires: null,
                            viewableImpression: {},
                            system: null,
                            title: null,
                            description: null,
                            advertiser: null,
                            pricing: null,
                            survey: null,
                            errorURLTemplates: [],
                            impressionURLTemplates: [],
                            creatives: [],
                            extensions: [],
                            adVerifications: [],
                            blockedAdCategories: [],
                            followAdditionalWrappers: !0,
                            allowMultipleAds: !1,
                            fallbackOnNoAd: null
                        }
                    }(x.parseAttributes(e));
                for (var o in n) {
                    var a = n[o];
                    switch (a.nodeName) {
                        case "Error":
                            i.errorURLTemplates.push(x.parseNodeText(a));
                            break;
                        case "Impression":
                            i.impressionURLTemplates.push({
                                id: a.getAttribute("id") || null,
                                url: x.parseNodeText(a)
                            });
                            break;
                        case "Creatives":
                            i.creatives = L(x.childrenByName(a, "Creative"));
                            break;
                        case "Extensions":
                            var s = x.childrenByName(a, "Extension");
                            i.extensions = N(s), i.adVerifications.length || (r = Y(s));
                            break;
                        case "AdVerifications":
                            i.adVerifications = Q(x.childrenByName(a, "Verification"));
                            break;
                        case "AdSystem":
                            i.system = {
                                value: x.parseNodeText(a),
                                version: a.getAttribute("version") || null
                            };
                            break;
                        case "AdTitle":
                            i.title = x.parseNodeText(a);
                            break;
                        case "AdServingId":
                            i.adServingId = x.parseNodeText(a);
                            break;
                        case "Category":
                            i.categories.push({
                                authority: a.getAttribute("authority") || null,
                                value: x.parseNodeText(a)
                            });
                            break;
                        case "Expires":
                            i.expires = parseInt(x.parseNodeText(a), 10);
                            break;
                        case "ViewableImpression":
                            i.viewableImpression = G(a);
                            break;
                        case "Description":
                            i.description = x.parseNodeText(a);
                            break;
                        case "Advertiser":
                            i.advertiser = {
                                id: a.getAttribute("id") || null,
                                value: x.parseNodeText(a)
                            };
                            break;
                        case "Pricing":
                            i.pricing = {
                                value: x.parseNodeText(a),
                                model: a.getAttribute("model") || null,
                                currency: a.getAttribute("currency") || null
                            };
                            break;
                        case "Survey":
                            i.survey = x.parseNodeText(a);
                            break;
                        case "BlockedAdCategories":
                            i.blockedAdCategories.push({
                                authority: a.getAttribute("authority") || null,
                                value: x.parseNodeText(a)
                            })
                    }
                }
                return r.length && (i.adVerifications = i.adVerifications.concat(r)), i
            }

            function q(e, t) {
                var r = z(e, t),
                    n = e.getAttribute("followAdditionalWrappers"),
                    i = e.getAttribute("allowMultipleAds"),
                    o = e.getAttribute("fallbackOnNoAd");
                r.followAdditionalWrappers = !n || x.parseBoolean(n), r.allowMultipleAds = !!i && x.parseBoolean(i), r.fallbackOnNoAd = o ? x.parseBoolean(o) : null;
                var a = x.childByName(e, "VASTAdTagURI");
                if (a ? r.nextWrapperURL = x.parseNodeText(a) : (a = x.childByName(e, "VASTAdTagURL")) && (r.nextWrapperURL = x.parseNodeText(x.childByName(a, "URL"))), r.creatives.forEach((function(e) {
                        if (-1 !== ["linear", "nonlinear"].indexOf(e.type)) {
                            if (e.trackingEvents) {
                                r.trackingEvents || (r.trackingEvents = {}), r.trackingEvents[e.type] || (r.trackingEvents[e.type] = {});
                                var t = function(t) {
                                    var n = e.trackingEvents[t];
                                    Array.isArray(r.trackingEvents[e.type][t]) || (r.trackingEvents[e.type][t] = []), n.forEach((function(n) {
                                        r.trackingEvents[e.type][t].push(n)
                                    }))
                                };
                                for (var n in e.trackingEvents) t(n)
                            }
                            e.videoClickTrackingURLTemplates && (Array.isArray(r.videoClickTrackingURLTemplates) || (r.videoClickTrackingURLTemplates = []), e.videoClickTrackingURLTemplates.forEach((function(e) {
                                r.videoClickTrackingURLTemplates.push(e)
                            }))), e.videoClickThroughURLTemplate && (r.videoClickThroughURLTemplate = e.videoClickThroughURLTemplate), e.videoCustomClickURLTemplates && (Array.isArray(r.videoCustomClickURLTemplates) || (r.videoCustomClickURLTemplates = []), e.videoCustomClickURLTemplates.forEach((function(e) {
                                r.videoCustomClickURLTemplates.push(e)
                            })))
                        }
                    })), r.nextWrapperURL) return r
            }

            function Q(e) {
                var t = [];
                return e.forEach((function(e) {
                    var r = {
                            resource: null,
                            vendor: null,
                            browserOptional: !1,
                            apiFramework: null,
                            type: null,
                            parameters: null,
                            trackingEvents: {}
                        },
                        n = e.childNodes;
                    for (var i in x.assignAttributes(e.attributes, r), n) {
                        var o = n[i];
                        switch (o.nodeName) {
                            case "JavaScriptResource":
                            case "ExecutableResource":
                                r.resource = x.parseNodeText(o), x.assignAttributes(o.attributes, r);
                                break;
                            case "VerificationParameters":
                                r.parameters = x.parseNodeText(o)
                        }
                    }
                    var a = x.childByName(e, "TrackingEvents");
                    a && x.childrenByName(a, "Tracking").forEach((function(e) {
                        var t = e.getAttribute("event"),
                            n = x.parseNodeText(e);
                        t && n && (Array.isArray(r.trackingEvents[t]) || (r.trackingEvents[t] = []), r.trackingEvents[t].push(n))
                    })), t.push(r)
                })), t
            }

            function Y(e) {
                var t = null,
                    r = [];
                return e.some((function(e) {
                    return t = x.childByName(e, "AdVerifications")
                })), t && (r = Q(x.childrenByName(t, "Verification"))), r
            }

            function G(e) {
                var t = {};
                t.id = e.getAttribute("id") || null;
                var r = e.childNodes;
                for (var n in r) {
                    var i = r[n],
                        o = i.nodeName,
                        a = x.parseNodeText(i);
                    if (("Viewable" === o || "NotViewable" === o || "ViewUndetermined" === o) && a) {
                        var s = o.toLowerCase();
                        Array.isArray(t[s]) || (t[s] = []), t[s].push(a)
                    }
                }
                return t
            }
            var Z = function() {
                    function e() {
                        r(this, e), this._handlers = []
                    }
                    return i(e, [{
                        key: "on",
                        value: function(e, r) {
                            if ("function" != typeof r) throw new TypeError("The handler argument must be of type Function. Received type ".concat(t(r)));
                            if (!e) throw new TypeError("The event argument must be of type String. Received type ".concat(t(e)));
                            return this._handlers.push({
                                event: e,
                                handler: r
                            }), this
                        }
                    }, {
                        key: "once",
                        value: function(e, t) {
                            return this.on(e, function(e, t, r) {
                                var n = {
                                    fired: !1,
                                    wrapFn: void 0
                                };

                                function i() {
                                    n.fired || (e.off(t, n.wrapFn), n.fired = !0, r.bind(e).apply(void 0, arguments))
                                }
                                return n.wrapFn = i, i
                            }(this, e, t))
                        }
                    }, {
                        key: "off",
                        value: function(e, t) {
                            return this._handlers = this._handlers.filter((function(r) {
                                return r.event !== e || r.handler !== t
                            })), this
                        }
                    }, {
                        key: "emit",
                        value: function(e) {
                            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                            var i = !1;
                            return this._handlers.forEach((function(t) {
                                "*" === t.event && (i = !0, t.handler.apply(t, [e].concat(r))), t.event === e && (i = !0, t.handler.apply(t, r))
                            })), i
                        }
                    }, {
                        key: "removeAllListeners",
                        value: function(e) {
                            return e ? (this._handlers = this._handlers.filter((function(t) {
                                return t.event !== e
                            })), this) : (this._handlers = [], this)
                        }
                    }, {
                        key: "listenerCount",
                        value: function(e) {
                            return this._handlers.filter((function(t) {
                                return t.event === e
                            })).length
                        }
                    }, {
                        key: "listeners",
                        value: function(e) {
                            return this._handlers.reduce((function(t, r) {
                                return r.event === e && t.push(r.handler), t
                            }), [])
                        }
                    }, {
                        key: "eventNames",
                        value: function() {
                            return this._handlers.map((function(e) {
                                return e.event
                            }))
                        }
                    }]), e
                }(),
                K = function(e, t, r) {
                    r(new Error("Please bundle the library for node to use the node urlHandler"))
                },
                X = 12e4;

            function J() {
                try {
                    var e = new window.XMLHttpRequest;
                    return "withCredentials" in e ? e : null
                } catch (e) {
                    return null
                }
            }

            function $(e, t, r) {
                var n = r ? 408 : e.status,
                    i = r ? "XHRURLHandler: Request timed out after ".concat(e.timeout, " ms (").concat(n, ")") : "XHRURLHandler: ".concat(e.statusText, " (").concat(n, ")");
                t(new Error(i), null, {
                    statusCode: n
                })
            }
            var ee = function(e, t, r) {
                    if ("https:" === window.location.protocol && 0 === e.indexOf("http://")) return r(new Error("XHRURLHandler: Cannot go from HTTPS to HTTP."));
                    try {
                        var n = J();
                        n.open("GET", e), n.timeout = t.timeout || X, n.withCredentials = t.withCredentials || !1, n.overrideMimeType && n.overrideMimeType("text/xml"), n.onload = function() {
                            return function(e, t) {
                                200 === e.status ? t(null, e.responseXML, {
                                    byteLength: e.response.length,
                                    statusCode: e.status
                                }) : $(e, t, !1)
                            }(n, r)
                        }, n.onerror = function() {
                            return $(n, r, !1)
                        }, n.onabort = function() {
                            return $(n, r, !1)
                        }, n.ontimeout = function() {
                            return $(n, r, !0)
                        }, n.send()
                    } catch (e) {
                        r(new Error("XHRURLHandler: Unexpected error"))
                    }
                },
                te = function() {
                    return !!J()
                },
                re = {
                    get: function(e, t, r) {
                        return r || ("function" == typeof t && (r = t), t = {}), "undefined" == typeof window || null === window ? K(e, t, r) : te() ? ee(e, t, r) : r(new Error("Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"))
                    }
                },
                ne = 0,
                ie = 0,
                oe = function(e, t) {
                    !e || !t || e <= 0 || t <= 0 || (ie = (ie * ne + 8 * e / t) / ++ne)
                },
                ae = {
                    ERRORCODE: 900,
                    extensions: []
                },
                se = function(e) {
                    l(n, e);
                    var t = h(n);

                    function n() {
                        var e;
                        return r(this, n), (e = t.call(this)).remainingAds = [], e.parentURLs = [], e.errorURLTemplates = [], e.rootErrorURLTemplates = [], e.maxWrapperDepth = null, e.URLTemplateFilters = [], e.fetchingOptions = {}, e.parsingOptions = {}, e
                    }
                    return i(n, [{
                        key: "addURLTemplateFilter",
                        value: function(e) {
                            "function" == typeof e && this.URLTemplateFilters.push(e)
                        }
                    }, {
                        key: "removeURLTemplateFilter",
                        value: function() {
                            this.URLTemplateFilters.pop()
                        }
                    }, {
                        key: "countURLTemplateFilters",
                        value: function() {
                            return this.URLTemplateFilters.length
                        }
                    }, {
                        key: "clearURLTemplateFilters",
                        value: function() {
                            this.URLTemplateFilters = []
                        }
                    }, {
                        key: "trackVastError",
                        value: function(e, t) {
                            for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
                            this.emit("VAST-error", Object.assign.apply(Object, [{}, ae, t].concat(n))), E.track(e, t)
                        }
                    }, {
                        key: "getErrorURLTemplates",
                        value: function() {
                            return this.rootErrorURLTemplates.concat(this.errorURLTemplates)
                        }
                    }, {
                        key: "getEstimatedBitrate",
                        value: function() {
                            return ie
                        }
                    }, {
                        key: "fetchVAST",
                        value: function(e) {
                            var t = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            return new Promise((function(i, o) {
                                t.URLTemplateFilters.forEach((function(t) {
                                    e = t(e)
                                })), t.parentURLs.push(e);
                                var a = Date.now();
                                t.emit("VAST-resolving", {
                                    url: e,
                                    previousUrl: n,
                                    wrapperDepth: r,
                                    maxWrapperDepth: t.maxWrapperDepth,
                                    timeout: t.fetchingOptions.timeout
                                }), t.urlHandler.get(e, t.fetchingOptions, (function(s, u) {
                                    var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        c = Math.round(Date.now() - a),
                                        d = Object.assign({
                                            url: e,
                                            previousUrl: n,
                                            wrapperDepth: r,
                                            error: s,
                                            duration: c
                                        }, l);
                                    t.emit("VAST-resolved", d), oe(l.byteLength, c), s ? o(s) : i(u)
                                }))
                            }))
                        }
                    }, {
                        key: "initParsingStatus",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.errorURLTemplates = [], this.fetchingOptions = {
                                timeout: e.timeout || X,
                                withCredentials: e.withCredentials
                            }, this.maxWrapperDepth = e.wrapperLimit || 10, this.parentURLs = [], this.parsingOptions = {
                                allowMultipleAds: e.allowMultipleAds
                            }, this.remainingAds = [], this.rootErrorURLTemplates = [], this.rootURL = "", this.urlHandler = e.urlHandler || e.urlhandler || re, this.vastVersion = null, oe(e.byteLength, e.requestDuration)
                        }
                    }, {
                        key: "getRemainingAds",
                        value: function(e) {
                            var t = this;
                            if (0 === this.remainingAds.length) return Promise.reject(new Error("No more ads are available for the given VAST"));
                            var r = e ? E.flatten(this.remainingAds) : this.remainingAds.shift();
                            return this.errorURLTemplates = [], this.parentURLs = [], this.resolveAds(r, {
                                wrapperDepth: 0,
                                url: this.rootURL
                            }).then((function(e) {
                                return t.buildVASTResponse(e)
                            }))
                        }
                    }, {
                        key: "getAndParseVAST",
                        value: function(e) {
                            var t = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return this.initParsingStatus(r), this.URLTemplateFilters.forEach((function(t) {
                                e = t(e)
                            })), this.rootURL = e, this.fetchVAST(e).then((function(n) {
                                return r.previousUrl = e, r.isRootVAST = !0, r.url = e, t.parse(n, r).then((function(e) {
                                    return t.buildVASTResponse(e)
                                }))
                            }))
                        }
                    }, {
                        key: "parseVAST",
                        value: function(e) {
                            var t = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return this.initParsingStatus(r), r.isRootVAST = !0, this.parse(e, r).then((function(e) {
                                return t.buildVASTResponse(e)
                            }))
                        }
                    }, {
                        key: "buildVASTResponse",
                        value: function(e) {
                            var t, r = {
                                ads: (t = {
                                    ads: e,
                                    errorURLTemplates: this.getErrorURLTemplates(),
                                    version: this.vastVersion
                                }).ads || [],
                                errorURLTemplates: t.errorURLTemplates || [],
                                version: t.version || null
                            };
                            return this.completeWrapperResolving(r), r
                        }
                    }, {
                        key: "parseVastXml",
                        value: function(e, t) {
                            var r = t.isRootVAST,
                                n = void 0 !== r && r,
                                i = t.url,
                                o = void 0 === i ? null : i,
                                a = t.wrapperDepth,
                                s = void 0 === a ? 0 : a,
                                u = t.allowMultipleAds,
                                l = t.followAdditionalWrappers;
                            if (!e || !e.documentElement || "VAST" !== e.documentElement.nodeName) throw this.emit("VAST-ad-parsed", {
                                type: "ERROR",
                                url: o,
                                wrapperDepth: s
                            }), new Error("Invalid VAST XMLDocument");
                            var c = [],
                                d = e.documentElement.childNodes,
                                p = e.documentElement.getAttribute("version");
                            for (var h in n && p && (this.vastVersion = p), d) {
                                var f = d[h];
                                if ("Error" === f.nodeName) {
                                    var v = x.parseNodeText(f);
                                    n ? this.rootErrorURLTemplates.push(v) : this.errorURLTemplates.push(v)
                                } else if ("Ad" === f.nodeName) {
                                    if (this.vastVersion && parseFloat(this.vastVersion) < 3) u = !0;
                                    else if (!1 === u && c.length > 1) break;
                                    var m = W(f, this.emit.bind(this), {
                                        allowMultipleAds: u,
                                        followAdditionalWrappers: l
                                    });
                                    m.ad ? (c.push(m.ad), this.emit("VAST-ad-parsed", {
                                        type: m.type,
                                        url: o,
                                        wrapperDepth: s,
                                        adIndex: c.length - 1,
                                        vastVersion: p
                                    })) : this.trackVastError(this.getErrorURLTemplates(), {
                                        ERRORCODE: 101
                                    })
                                }
                            }
                            return c
                        }
                    }, {
                        key: "parse",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = t.url,
                                n = void 0 === r ? null : r,
                                i = t.resolveAll,
                                o = void 0 === i || i,
                                a = t.wrapperSequence,
                                s = void 0 === a ? null : a,
                                u = t.previousUrl,
                                l = void 0 === u ? null : u,
                                c = t.wrapperDepth,
                                d = void 0 === c ? 0 : c,
                                p = t.isRootVAST,
                                h = void 0 !== p && p,
                                f = t.followAdditionalWrappers,
                                v = t.allowMultipleAds,
                                m = [];
                            this.vastVersion && parseFloat(this.vastVersion) < 3 && h && (v = !0);
                            try {
                                m = this.parseVastXml(e, {
                                    isRootVAST: h,
                                    url: n,
                                    wrapperDepth: d,
                                    allowMultipleAds: v,
                                    followAdditionalWrappers: f
                                })
                            } catch (e) {
                                return Promise.reject(e)
                            }
                            return 1 === m.length && null != s && (m[0].sequence = s), !1 === o && (this.remainingAds = x.splitVAST(m), m = this.remainingAds.shift()), this.resolveAds(m, {
                                wrapperDepth: d,
                                previousUrl: l,
                                url: n
                            })
                        }
                    }, {
                        key: "resolveAds",
                        value: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                r = arguments.length > 1 ? arguments[1] : void 0,
                                n = r.wrapperDepth,
                                i = r.previousUrl,
                                o = r.url,
                                a = [];
                            return i = o, t.forEach((function(t) {
                                var r = e.resolveWrappers(t, n, i);
                                a.push(r)
                            })), Promise.all(a).then((function(t) {
                                var r = E.flatten(t);
                                if (!r && e.remainingAds.length > 0) {
                                    var a = e.remainingAds.shift();
                                    return e.resolveAds(a, {
                                        wrapperDepth: n,
                                        previousUrl: i,
                                        url: o
                                    })
                                }
                                return r
                            }))
                        }
                    }, {
                        key: "resolveWrappers",
                        value: function(e, t, r) {
                            var n = this;
                            return new Promise((function(i) {
                                var o;
                                if (t++, !e.nextWrapperURL) return delete e.nextWrapperURL, i(e);
                                if (t >= n.maxWrapperDepth || -1 !== n.parentURLs.indexOf(e.nextWrapperURL)) return e.errorCode = 302, delete e.nextWrapperURL, i(e);
                                e.nextWrapperURL = x.resolveVastAdTagURI(e.nextWrapperURL, r), n.URLTemplateFilters.forEach((function(t) {
                                    e.nextWrapperURL = t(e.nextWrapperURL)
                                }));
                                var a = null !== (o = n.parsingOptions.allowMultipleAds) && void 0 !== o ? o : e.allowMultipleAds,
                                    s = e.sequence;
                                n.fetchVAST(e.nextWrapperURL, t, r).then((function(o) {
                                    return n.parse(o, {
                                        url: e.nextWrapperURL,
                                        previousUrl: r,
                                        wrapperSequence: s,
                                        wrapperDepth: t,
                                        followAdditionalWrappers: e.followAdditionalWrappers,
                                        allowMultipleAds: a
                                    }).then((function(t) {
                                        if (delete e.nextWrapperURL, 0 === t.length) return e.creatives = [], i(e);
                                        t.forEach((function(t) {
                                            t && x.mergeWrapperAdData(t, e)
                                        })), i(t)
                                    }))
                                })).catch((function(t) {
                                    e.errorCode = 301, e.errorMessage = t.message, i(e)
                                }))
                            }))
                        }
                    }, {
                        key: "completeWrapperResolving",
                        value: function(e) {
                            if (0 === e.ads.length) this.trackVastError(e.errorURLTemplates, {
                                ERRORCODE: 303
                            });
                            else
                                for (var t = e.ads.length - 1; t >= 0; t--) {
                                    var r = e.ads[t];
                                    (r.errorCode || 0 === r.creatives.length) && (this.trackVastError(r.errorURLTemplates.concat(e.errorURLTemplates), {
                                        ERRORCODE: r.errorCode || 303
                                    }, {
                                        ERRORMESSAGE: r.errorMessage || ""
                                    }, {
                                        extensions: r.extensions
                                    }, {
                                        system: r.system
                                    }), e.ads.splice(t, 1))
                                }
                        }
                    }]), n
                }(Z),
                ue = null,
                le = {
                    data: {},
                    length: 0,
                    getItem: function(e) {
                        return this.data[e]
                    },
                    setItem: function(e, t) {
                        this.data[e] = t, this.length = Object.keys(this.data).length
                    },
                    removeItem: function(e) {
                        delete this.data[e], this.length = Object.keys(this.data).length
                    },
                    clear: function() {
                        this.data = {}, this.length = 0
                    }
                },
                ce = function() {
                    function e() {
                        r(this, e), this.storage = this.initStorage()
                    }
                    return i(e, [{
                        key: "initStorage",
                        value: function() {
                            if (ue) return ue;
                            try {
                                ue = "undefined" != typeof window && null !== window ? window.localStorage || window.sessionStorage : null
                            } catch (e) {
                                ue = null
                            }
                            return ue && !this.isStorageDisabled(ue) || (ue = le).clear(), ue
                        }
                    }, {
                        key: "isStorageDisabled",
                        value: function(e) {
                            var t = "__VASTStorage__";
                            try {
                                if (e.setItem(t, t), e.getItem(t) !== t) return e.removeItem(t), !0
                            } catch (e) {
                                return !0
                            }
                            return e.removeItem(t), !1
                        }
                    }, {
                        key: "getItem",
                        value: function(e) {
                            return this.storage.getItem(e)
                        }
                    }, {
                        key: "setItem",
                        value: function(e, t) {
                            return this.storage.setItem(e, t)
                        }
                    }, {
                        key: "removeItem",
                        value: function(e) {
                            return this.storage.removeItem(e)
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            return this.storage.clear()
                        }
                    }]), e
                }(),
                de = function() {
                    function e(t, n, i) {
                        r(this, e), this.cappingFreeLunch = t || 0, this.cappingMinimumTimeInterval = n || 0, this.defaultOptions = {
                            withCredentials: !1,
                            timeout: 0
                        }, this.vastParser = new se, this.storage = i || new ce, void 0 === this.lastSuccessfulAd && (this.lastSuccessfulAd = 0), void 0 === this.totalCalls && (this.totalCalls = 0), void 0 === this.totalCallsTimeout && (this.totalCallsTimeout = 0)
                    }
                    return i(e, [{
                        key: "getParser",
                        value: function() {
                            return this.vastParser
                        }
                    }, {
                        key: "hasRemainingAds",
                        value: function() {
                            return this.vastParser.remainingAds.length > 0
                        }
                    }, {
                        key: "getNextAds",
                        value: function(e) {
                            return this.vastParser.getRemainingAds(e)
                        }
                    }, {
                        key: "get",
                        value: function(e) {
                            var t = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = Date.now();
                            return (r = Object.assign({}, this.defaultOptions, r)).hasOwnProperty("resolveAll") || (r.resolveAll = !1), this.totalCallsTimeout < n ? (this.totalCalls = 1, this.totalCallsTimeout = n + 36e5) : this.totalCalls++, new Promise((function(i, o) {
                                if (t.cappingFreeLunch >= t.totalCalls) return o(new Error("VAST call canceled – FreeLunch capping not reached yet ".concat(t.totalCalls, "/").concat(t.cappingFreeLunch)));
                                var a = n - t.lastSuccessfulAd;
                                if (a < 0) t.lastSuccessfulAd = 0;
                                else if (a < t.cappingMinimumTimeInterval) return o(new Error("VAST call canceled – (".concat(t.cappingMinimumTimeInterval, ")ms minimum interval reached")));
                                t.vastParser.getAndParseVAST(e, r).then((function(e) {
                                    return i(e)
                                })).catch((function(e) {
                                    return o(e)
                                }))
                            }))
                        }
                    }, {
                        key: "lastSuccessfulAd",
                        get: function() {
                            return this.storage.getItem("vast-client-last-successful-ad")
                        },
                        set: function(e) {
                            this.storage.setItem("vast-client-last-successful-ad", e)
                        }
                    }, {
                        key: "totalCalls",
                        get: function() {
                            return this.storage.getItem("vast-client-total-calls")
                        },
                        set: function(e) {
                            this.storage.setItem("vast-client-total-calls", e)
                        }
                    }, {
                        key: "totalCallsTimeout",
                        get: function() {
                            return this.storage.getItem("vast-client-total-calls-timeout")
                        },
                        set: function(e) {
                            this.storage.setItem("vast-client-total-calls-timeout", e)
                        }
                    }]), e
                }(),
                pe = function(e) {
                    l(n, e);
                    var t = h(n);

                    function n(e, i, o) {
                        var a, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        for (var u in r(this, n), (a = t.call(this)).ad = i, a.creative = o, a.variation = s, a.muted = !1, a.impressed = !1, a.skippable = !1, a.trackingEvents = {}, a.lastPercentage = 0, a._alreadyTriggeredQuartiles = {}, a.emitAlwaysEvents = ["creativeView", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "resume", "pause", "rewind", "skip", "closeLinear", "close"], a.creative.trackingEvents) {
                            var l = a.creative.trackingEvents[u];
                            a.trackingEvents[u] = l.slice(0)
                        }
                        return O(a.creative) ? a._initLinearTracking() : a._initVariationTracking(), e && a.on("start", (function() {
                            e.lastSuccessfulAd = Date.now()
                        })), a
                    }
                    return i(n, [{
                        key: "_initLinearTracking",
                        value: function() {
                            this.linear = !0, this.skipDelay = this.creative.skipDelay, this.setDuration(this.creative.duration), this.clickThroughURLTemplate = this.creative.videoClickThroughURLTemplate, this.clickTrackingURLTemplates = this.creative.videoClickTrackingURLTemplates
                        }
                    }, {
                        key: "_initVariationTracking",
                        value: function() {
                            if (this.linear = !1, this.skipDelay = -1, this.variation) {
                                for (var e in this.variation.trackingEvents) {
                                    var t = this.variation.trackingEvents[e];
                                    this.trackingEvents[e] ? this.trackingEvents[e] = this.trackingEvents[e].concat(t.slice(0)) : this.trackingEvents[e] = t.slice(0)
                                }
                                "nonLinearAd" === this.variation.adType ? (this.clickThroughURLTemplate = this.variation.nonlinearClickThroughURLTemplate, this.clickTrackingURLTemplates = this.variation.nonlinearClickTrackingURLTemplates, this.setDuration(this.variation.minSuggestedDuration)) : function(e) {
                                    return "companionAd" === e.adType
                                }(this.variation) && (this.clickThroughURLTemplate = this.variation.companionClickThroughURLTemplate, this.clickTrackingURLTemplates = this.variation.companionClickTrackingURLTemplates)
                            }
                        }
                    }, {
                        key: "setDuration",
                        value: function(e) {
                            this.assetDuration = e, this.quartiles = {
                                firstQuartile: Math.round(25 * this.assetDuration) / 100,
                                midpoint: Math.round(50 * this.assetDuration) / 100,
                                thirdQuartile: Math.round(75 * this.assetDuration) / 100
                            }
                        }
                    }, {
                        key: "setProgress",
                        value: function(e) {
                            var t = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = this.skipDelay || -1;
                            if (-1 === n || this.skippable || (n > e ? this.emit("skip-countdown", n - e) : (this.skippable = !0, this.emit("skip-countdown", 0))), this.assetDuration > 0) {
                                var i = Math.round(e / this.assetDuration * 100),
                                    o = [];
                                if (e > 0) {
                                    o.push("start");
                                    for (var a = this.lastPercentage; a < i; a++) o.push("progress-".concat(a + 1, "%"));
                                    for (var s in o.push("progress-".concat(Math.round(e))), this.quartiles) this.isQuartileReached(s, this.quartiles[s], e) && (o.push(s), this._alreadyTriggeredQuartiles[s] = !0);
                                    this.lastPercentage = i
                                }
                                o.forEach((function(e) {
                                    t.track(e, {
                                        macros: r,
                                        once: !0
                                    })
                                })), e < this.progress && this.track("rewind", {
                                    macros: r
                                })
                            }
                            this.progress = e
                        }
                    }, {
                        key: "isQuartileReached",
                        value: function(e, t, r) {
                            var n = !1;
                            return t <= r && !this._alreadyTriggeredQuartiles[e] && (n = !0), n
                        }
                    }, {
                        key: "setMuted",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.muted !== e && this.track(e ? "mute" : "unmute", {
                                macros: t
                            }), this.muted = e
                        }
                    }, {
                        key: "setPaused",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.paused !== e && this.track(e ? "pause" : "resume", {
                                macros: t
                            }), this.paused = e
                        }
                    }, {
                        key: "setFullscreen",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.fullscreen !== e && this.track(e ? "fullscreen" : "exitFullscreen", {
                                macros: t
                            }), this.fullscreen = e
                        }
                    }, {
                        key: "setExpand",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.expanded !== e && (this.track(e ? "expand" : "collapse", {
                                macros: t
                            }), this.track(e ? "playerExpand" : "playerCollapse", {
                                macros: t
                            })), this.expanded = e
                        }
                    }, {
                        key: "setSkipDelay",
                        value: function(e) {
                            "number" == typeof e && (this.skipDelay = e)
                        }
                    }, {
                        key: "trackImpression",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.impressed || (this.impressed = !0, this.trackURLs(this.ad.impressionURLTemplates, e), this.track("creativeView", {
                                macros: e
                            }))
                        }
                    }, {
                        key: "error",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.trackURLs(this.ad.errorURLTemplates, e, {
                                isCustomCode: t
                            })
                        }
                    }, {
                        key: "errorWithCode",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.error({
                                ERRORCODE: e
                            }, t)
                        }
                    }, {
                        key: "complete",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.track("complete", {
                                macros: e
                            })
                        }
                    }, {
                        key: "notUsed",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.track("notUsed", {
                                macros: e
                            }), this.trackingEvents = []
                        }
                    }, {
                        key: "otherAdInteraction",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.track("otherAdInteraction", {
                                macros: e
                            })
                        }
                    }, {
                        key: "acceptInvitation",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.track("acceptInvitation", {
                                macros: e
                            })
                        }
                    }, {
                        key: "adExpand",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.track("adExpand", {
                                macros: e
                            })
                        }
                    }, {
                        key: "adCollapse",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.track("adCollapse", {
                                macros: e
                            })
                        }
                    }, {
                        key: "minimize",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.track("minimize", {
                                macros: e
                            })
                        }
                    }, {
                        key: "verificationNotExecuted",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (!this.ad || !this.ad.adVerifications || !this.ad.adVerifications.length) throw new Error("No adVerifications provided");
                            if (!e) throw new Error("No vendor provided, unable to find associated verificationNotExecuted");
                            var r = this.ad.adVerifications.find((function(t) {
                                return t.vendor === e
                            }));
                            if (!r) throw new Error("No associated verification element found for vendor: ".concat(e));
                            var n = r.trackingEvents;
                            if (n && n.verificationNotExecuted) {
                                var i = n.verificationNotExecuted;
                                this.trackURLs(i, t), this.emit("verificationNotExecuted", {
                                    trackingURLTemplates: i
                                })
                            }
                        }
                    }, {
                        key: "overlayViewDuration",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            t.ADPLAYHEAD = e, this.track("overlayViewDuration", {
                                macros: t
                            })
                        }
                    }, {
                        key: "close",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.track(this.linear ? "closeLinear" : "close", {
                                macros: e
                            })
                        }
                    }, {
                        key: "skip",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.track("skip", {
                                macros: e
                            })
                        }
                    }, {
                        key: "load",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.track("loaded", {
                                macros: e
                            })
                        }
                    }, {
                        key: "click",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.clickTrackingURLTemplates && this.clickTrackingURLTemplates.length && this.trackURLs(this.clickTrackingURLTemplates, t);
                            var r = this.clickThroughURLTemplate || e,
                                n = u({}, t);
                            if (r) {
                                this.progress && (n.ADPLAYHEAD = this.progressFormatted());
                                var i = E.resolveURLTemplates([r], n)[0];
                                this.emit("clickthrough", i)
                            }
                        }
                    }, {
                        key: "track",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = t.macros,
                                n = void 0 === r ? {} : r,
                                i = t.once,
                                o = void 0 !== i && i;
                            "closeLinear" === e && !this.trackingEvents[e] && this.trackingEvents.close && (e = "close");
                            var a = this.trackingEvents[e],
                                s = this.emitAlwaysEvents.indexOf(e) > -1;
                            a ? (this.emit(e, {
                                trackingURLTemplates: a
                            }), this.trackURLs(a, n)) : s && this.emit(e, null), o && (delete this.trackingEvents[e], s && this.emitAlwaysEvents.splice(this.emitAlwaysEvents.indexOf(e), 1))
                        }
                    }, {
                        key: "trackURLs",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                n = u({}, t);
                            this.linear && (this.creative && this.creative.mediaFiles && this.creative.mediaFiles[0] && this.creative.mediaFiles[0].fileURL && (n.ASSETURI = this.creative.mediaFiles[0].fileURL), this.progress && (n.ADPLAYHEAD = this.progressFormatted())), this.creative && this.creative.universalAdId && this.creative.universalAdId.idRegistry && this.creative.universalAdId.value && (n.UNIVERSALADID = "".concat(this.creative.universalAdId.idRegistry, " ").concat(this.creative.universalAdId.value)), this.ad && (this.ad.sequence && (n.PODSEQUENCE = this.ad.sequence), this.ad.adType && (n.ADTYPE = this.ad.adType), this.ad.adServingId && (n.ADSERVINGID = this.ad.adServingId), this.ad.categories && this.ad.categories.length && (n.ADCATEGORIES = this.ad.categories.map((function(e) {
                                return e.value
                            })).join(",")), this.ad.blockedAdCategories && this.ad.blockedAdCategories.length && (n.BLOCKEDADCATEGORIES = this.ad.blockedAdCategories)), E.track(e, n, r)
                        }
                    }, {
                        key: "convertToTimecode",
                        value: function(e) {
                            var t = 1e3 * e,
                                r = Math.floor(t / 36e5),
                                n = Math.floor(t / 6e4 % 60),
                                i = Math.floor(t / 1e3 % 60),
                                o = Math.floor(t % 1e3);
                            return "".concat(E.leftpad(r, 2), ":").concat(E.leftpad(n, 2), ":").concat(E.leftpad(i, 2), ".").concat(E.leftpad(o, 3))
                        }
                    }, {
                        key: "progressFormatted",
                        value: function() {
                            return this.convertToTimecode(this.progress)
                        }
                    }]), n
                }(Z);
            e.VASTClient = de, e.VASTParser = se, e.VASTTracker = pe, Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, "object" == s(t) && void 0 !== e ? a(t) : (i = [t], void 0 === (o = "function" == typeof(n = a) ? n.apply(t, i) : n) || (e.exports = o))
    },
    aXQC: function(e, t, r) {
        "use strict";
        r.r(t), r.d(t, "ContentDelivery", (function() {
            return ne
        })), r.d(t, "OuterContent", (function() {
            return ie
        }));
        r("Igas");
        var n, i, o, a, s, u = {},
            l = [],
            c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

        function d(e, t) {
            for (var r in t) e[r] = t[r];
            return e
        }

        function p(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }

        function h(e, t, r) {
            var n, i, o, a = arguments,
                s = {};
            for (o in t) "key" == o ? n = t[o] : "ref" == o ? i = t[o] : s[o] = t[o];
            if (arguments.length > 3)
                for (r = [r], o = 3; o < arguments.length; o++) r.push(a[o]);
            if (null != r && (s.children = r), "function" == typeof e && null != e.defaultProps)
                for (o in e.defaultProps) void 0 === s[o] && (s[o] = e.defaultProps[o]);
            return f(e, s, n, i, null)
        }

        function f(e, t, r, i, o) {
            var a = {
                type: e,
                props: t,
                key: r,
                ref: i,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                __h: null,
                constructor: void 0,
                __v: null == o ? ++n.__v : o
            };
            return null != n.vnode && n.vnode(a), a
        }

        function v(e) {
            return e.children
        }

        function m(e, t) {
            this.props = e, this.context = t
        }

        function g(e, t) {
            if (null == t) return e.__ ? g(e.__, e.__.__k.indexOf(e) + 1) : null;
            for (var r; t < e.__k.length; t++)
                if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
            return "function" == typeof e.type ? g(e) : null
        }

        function b(e) {
            var t, r;
            if (null != (e = e.__) && null != e.__c) {
                for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                    if (null != (r = e.__k[t]) && null != r.__e) {
                        e.__e = e.__c.base = r.__e;
                        break
                    }
                return b(e)
            }
        }

        function y(e) {
            (!e.__d && (e.__d = !0) && i.push(e) && !w.__r++ || a !== n.debounceRendering) && ((a = n.debounceRendering) || o)(w)
        }

        function w() {
            for (var e; w.__r = i.length;) e = i.sort((function(e, t) {
                return e.__v.__b - t.__v.__b
            })), i = [], e.some((function(e) {
                var t, r, n, i, o, a;
                e.__d && (o = (i = (t = e).__v).__e, (a = t.__P) && (r = [], (n = d({}, i)).__v = i.__v + 1, S(a, i, n, t.__n, void 0 !== a.ownerSVGElement, null != i.__h ? [o] : null, r, null == o ? g(i) : o, i.__h), O(r, i), i.__e != o && b(i)))
            }))
        }

        function A(e, t, r, n, i, o, a, s, c, d) {
            var h, m, b, y, w, A, _, E = n && n.__k || l,
                R = E.length;
            for (c == u && (c = null != a ? a[0] : R ? g(n, 0) : null), r.__k = [], h = 0; h < t.length; h++)
                if (null != (y = r.__k[h] = null == (y = t[h]) || "boolean" == typeof y ? null : "string" == typeof y || "number" == typeof y ? f(null, y, null, null, y) : Array.isArray(y) ? f(v, {
                        children: y
                    }, null, null, null) : y.__b > 0 ? f(y.type, y.props, y.key, null, y.__v) : y)) {
                    if (y.__ = r, y.__b = r.__b + 1, null === (b = E[h]) || b && y.key == b.key && y.type === b.type) E[h] = void 0;
                    else
                        for (m = 0; m < R; m++) {
                            if ((b = E[m]) && y.key == b.key && y.type === b.type) {
                                E[m] = void 0;
                                break
                            }
                            b = null
                        }
                    S(e, y, b = b || u, i, o, a, s, c, d), w = y.__e, (m = y.ref) && b.ref != m && (_ || (_ = []), b.ref && _.push(b.ref, null, y), _.push(m, y.__c || w, y)), null != w ? (null == A && (A = w), "function" == typeof y.type && null != y.__k && y.__k === b.__k ? y.__d = c = k(y, c, e) : c = T(e, y, b, E, a, w, c), d || "option" !== r.type ? "function" == typeof r.type && (r.__d = c) : e.value = "") : c && b.__e == c && c.parentNode != e && (c = g(b))
                }
            if (r.__e = A, null != a && "function" != typeof r.type)
                for (h = a.length; h--;) null != a[h] && p(a[h]);
            for (h = R; h--;) null != E[h] && ("function" == typeof r.type && null != E[h].__e && E[h].__e == r.__d && (r.__d = g(n, h + 1)), N(E[h], E[h]));
            if (_)
                for (h = 0; h < _.length; h++) C(_[h], _[++h], _[++h])
        }

        function k(e, t, r) {
            var n, i;
            for (n = 0; n < e.__k.length; n++)(i = e.__k[n]) && (i.__ = e, t = "function" == typeof i.type ? k(i, t, r) : T(r, i, i, e.__k, null, i.__e, t));
            return t
        }

        function T(e, t, r, n, i, o, a) {
            var s, u, l;
            if (void 0 !== t.__d) s = t.__d, t.__d = void 0;
            else if (i == r || o != a || null == o.parentNode) e: if (null == a || a.parentNode !== e) e.appendChild(o), s = null;
                else {
                    for (u = a, l = 0;
                        (u = u.nextSibling) && l < n.length; l += 2)
                        if (u == o) break e;
                    e.insertBefore(o, a), s = a
                }
            return void 0 !== s ? s : o.nextSibling
        }

        function _(e, t, r) {
            "-" === t[0] ? e.setProperty(t, r) : e[t] = null == r ? "" : "number" != typeof r || c.test(t) ? r : r + "px"
        }

        function E(e, t, r, n, i) {
            var o, a, s;
            if (i && "className" == t && (t = "class"), "style" === t)
                if ("string" == typeof r) e.style.cssText = r;
                else {
                    if ("string" == typeof n && (e.style.cssText = n = ""), n)
                        for (t in n) r && t in r || _(e.style, t, "");
                    if (r)
                        for (t in r) n && r[t] === n[t] || _(e.style, t, r[t])
                }
            else "o" === t[0] && "n" === t[1] ? (o = t !== (t = t.replace(/Capture$/, "")), (a = t.toLowerCase()) in e && (t = a), t = t.slice(2), e.l || (e.l = {}), e.l[t + o] = r, s = o ? x : R, r ? n || e.addEventListener(t, s, o) : e.removeEventListener(t, s, o)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && "download" !== t && "href" !== t && !i && t in e ? e[t] = null == r ? "" : r : "function" != typeof r && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/xlink:?/, "")) ? null == r || !1 === r ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : null == r || !1 === r && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, r))
        }

        function R(e) {
            this.l[e.type + !1](n.event ? n.event(e) : e)
        }

        function x(e) {
            this.l[e.type + !0](n.event ? n.event(e) : e)
        }

        function S(e, t, r, i, o, a, s, u, l) {
            var c, p, h, f, g, b, y, w, k, T, _, E = t.type;
            if (void 0 !== t.constructor) return null;
            null != r.__h && (l = r.__h, u = t.__e = r.__e, t.__h = null, a = [u]), (c = n.__b) && c(t);
            try {
                e: if ("function" == typeof E) {
                    if (w = t.props, k = (c = E.contextType) && i[c.__c], T = c ? k ? k.props.value : c.__ : i, r.__c ? y = (p = t.__c = r.__c).__ = p.__E : ("prototype" in E && E.prototype.render ? t.__c = p = new E(w, T) : (t.__c = p = new m(w, T), p.constructor = E, p.render = I), k && k.sub(p), p.props = w, p.state || (p.state = {}), p.context = T, p.__n = i, h = p.__d = !0, p.__h = []), null == p.__s && (p.__s = p.state), null != E.getDerivedStateFromProps && (p.__s == p.state && (p.__s = d({}, p.__s)), d(p.__s, E.getDerivedStateFromProps(w, p.__s))), f = p.props, g = p.state, h) null == E.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);
                    else {
                        if (null == E.getDerivedStateFromProps && w !== f && null != p.componentWillReceiveProps && p.componentWillReceiveProps(w, T), !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(w, p.__s, T) || t.__v === r.__v) {
                            p.props = w, p.state = p.__s, t.__v !== r.__v && (p.__d = !1), p.__v = t, t.__e = r.__e, t.__k = r.__k, p.__h.length && s.push(p);
                            break e
                        }
                        null != p.componentWillUpdate && p.componentWillUpdate(w, p.__s, T), null != p.componentDidUpdate && p.__h.push((function() {
                            p.componentDidUpdate(f, g, b)
                        }))
                    }
                    p.context = T, p.props = w, p.state = p.__s, (c = n.__r) && c(t), p.__d = !1, p.__v = t, p.__P = e, c = p.render(p.props, p.state, p.context), p.state = p.__s, null != p.getChildContext && (i = d(d({}, i), p.getChildContext())), h || null == p.getSnapshotBeforeUpdate || (b = p.getSnapshotBeforeUpdate(f, g)), _ = null != c && c.type === v && null == c.key ? c.props.children : c, A(e, Array.isArray(_) ? _ : [_], t, r, i, o, a, s, u, l), p.base = t.__e, t.__h = null, p.__h.length && s.push(p), y && (p.__E = p.__ = null), p.__e = !1
                } else null == a && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = U(r.__e, t, r, i, o, a, s, l);
                (c = n.diffed) && c(t)
            }
            catch (e) {
                t.__v = null, (l || null != a) && (t.__e = u, t.__h = !!l, a[a.indexOf(u)] = null), n.__e(e, t, r)
            }
        }

        function O(e, t) {
            n.__c && n.__c(t, e), e.some((function(t) {
                try {
                    e = t.__h, t.__h = [], e.some((function(e) {
                        e.call(t)
                    }))
                } catch (e) {
                    n.__e(e, t.__v)
                }
            }))
        }

        function U(e, t, r, n, i, o, a, s) {
            var c, d, p, h, f, v = r.props,
                m = t.props;
            if (i = "svg" === t.type || i, null != o)
                for (c = 0; c < o.length; c++)
                    if (null != (d = o[c]) && ((null === t.type ? 3 === d.nodeType : d.localName === t.type) || e == d)) {
                        e = d, o[c] = null;
                        break
                    }
            if (null == e) {
                if (null === t.type) return document.createTextNode(m);
                e = i ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, m.is && {
                    is: m.is
                }), o = null, s = !1
            }
            if (null === t.type) v === m || s && e.data === m || (e.data = m);
            else {
                if (null != o && (o = l.slice.call(e.childNodes)), p = (v = r.props || u).dangerouslySetInnerHTML, h = m.dangerouslySetInnerHTML, !s) {
                    if (null != o)
                        for (v = {}, f = 0; f < e.attributes.length; f++) v[e.attributes[f].name] = e.attributes[f].value;
                    (h || p) && (h && (p && h.__html == p.__html || h.__html === e.innerHTML) || (e.innerHTML = h && h.__html || ""))
                }(function(e, t, r, n, i) {
                    var o;
                    for (o in r) "children" === o || "key" === o || o in t || E(e, o, null, r[o], n);
                    for (o in t) i && "function" != typeof t[o] || "children" === o || "key" === o || "value" === o || "checked" === o || r[o] === t[o] || E(e, o, t[o], r[o], n)
                })(e, m, v, i, s), h ? t.__k = [] : (c = t.props.children, A(e, Array.isArray(c) ? c : [c], t, r, n, "foreignObject" !== t.type && i, o, a, u, s)), s || ("value" in m && void 0 !== (c = m.value) && (c !== e.value || "progress" === t.type && !c) && E(e, "value", c, v.value, !1), "checked" in m && void 0 !== (c = m.checked) && c !== e.checked && E(e, "checked", c, v.checked, !1))
            }
            return e
        }

        function C(e, t, r) {
            try {
                "function" == typeof e ? e(t) : e.current = t
            } catch (e) {
                n.__e(e, r)
            }
        }

        function N(e, t, r) {
            var i, o, a;
            if (n.unmount && n.unmount(e), (i = e.ref) && (i.current && i.current !== e.__e || C(i, null, t)), r || "function" == typeof e.type || (r = null != (o = e.__e)), e.__e = e.__d = void 0, null != (i = e.__c)) {
                if (i.componentWillUnmount) try {
                    i.componentWillUnmount()
                } catch (e) {
                    n.__e(e, t)
                }
                i.base = i.__P = null
            }
            if (i = e.__k)
                for (a = 0; a < i.length; a++) i[a] && N(i[a], t, r);
            null != o && p(o)
        }

        function I(e, t, r) {
            return this.constructor(e, r)
        }

        function L(e, t, r) {
            var i, o, a;
            n.__ && n.__(e, t), o = (i = r === s) ? null : r && r.__k || t.__k, e = h(v, null, [e]), a = [], S(t, (i ? t : r || t).__k = e, o || u, u, void 0 !== t.ownerSVGElement, r && !i ? [r] : o ? null : t.childNodes.length ? l.slice.call(t.childNodes) : null, a, r || u, i), O(a, e)
        }
        n = {
            __e: function(e, t) {
                for (var r, n, i, o = t.__h; t = t.__;)
                    if ((r = t.__c) && !r.__) try {
                        if ((n = r.constructor) && null != n.getDerivedStateFromError && (r.setState(n.getDerivedStateFromError(e)), i = r.__d), null != r.componentDidCatch && (r.componentDidCatch(e), i = r.__d), i) return t.__h = o, r.__E = r
                    } catch (t) {
                        e = t
                    }
                throw e
            },
            __v: 0
        }, m.prototype.setState = function(e, t) {
            var r;
            r = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof e && (e = e(d({}, r), this.props)), e && d(r, e), null != e && this.__v && (t && this.__h.push(t), y(this))
        }, m.prototype.forceUpdate = function(e) {
            this.__v && (this.__e = !0, e && this.__h.push(e), y(this))
        }, m.prototype.render = v, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, w.__r = 0, s = u;
        var B, D = r("1SjT");
        ! function(e) {
            e[e.Loaded = 0] = "Loaded", e[e.Playing = 1] = "Playing", e[e.Paused = 2] = "Paused", e[e.Ended = 3] = "Ended"
        }(B || (B = {}));
        var j, P, F = r("Q39O"),
            V = r("ucMe"),
            M = r("yby3"),
            W = r("7DB8"),
            H = (j = function(e, t) {
                return j = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }, j(e, t)
            }, function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                j(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }),
            z = function() {
                return z = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }, z.apply(this, arguments)
            },
            q = function(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, i, o = r.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = o.next()).done;) a.push(n.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = o.return) && r.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return a
            },
            Q = {
                margin: "0px 5px 0px 15px",
                width: "15px",
                height: "15px",
                display: "block",
                position: "relative",
                cursor: "pointer"
            },
            Y = {
                video: {
                    WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                    WebkitBackfaceVisibility: "hidden",
                    MozBackfaceVisibility: "hidden",
                    WebkitAppearance: "none",
                    width: "100%",
                    border: "none"
                },
                videoWrapper: {
                    position: "relative",
                    background: "black",
                    width: "100%"
                },
                controlsWrapper: {
                    display: "flex",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "27px",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    zIndex: 9999
                },
                controlButton: Q,
                playButton: z(z({}, Q), {
                    background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAApCAYAAABdnotGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAb9JREFUeNrsmM1HRFEYxufmpihtixbVomjZLhER0SLRor8gIiIi+lBKJaJEJIk+iPQhWiSiUUnSMmIWaTOLihalpA/T7/IOGTPNx733zLvo8FvMnXuvx3nOed/nHisSiQQ0jZyAshFPUDvUZEuQFWNZIYTAubgFk/CQzRmK/rZkpk6gA2wta6gIxuAQajUt6mrYgXko1rLLHBvb4BQ6/bIxk23vLPwROII6TXWoCrZhAUo0FcZWsbELcrVU6gIYEhvrNbWOStiERSjV1MtaIAjd6droZ3N1bOwXYQ2aun0FbMByKjaajB/Nsht7IE9LHsqHPjiGRk0BrRzWYQXKNCXGJpmtXpk9FRE2XwTNasrUd7AWMJkEE4x3mJMG/ZFtQQcwDOHfF7Mh6FYacTDenyYFvYo9TuP9THSTKUH78rEQTnaj34JCYs9Zqg/YPtrj1JWlv+wxJWgPRuE+k4dtj+0ZgHM3L/FC0AvMSN75cvsyN4KcA4ldGM/UHi8F3cAgXHi9ANMV9AzTsOqFPW4ERc+LJuDRz8KViqBr2T1XJkq6ncSeKYma36YaXqygN7iUjuzsnifTUcD6PxZOMn4EGABQ4lY+jeSAkgAAAABJRU5ErkJggg==') 50% 50% / contain no-repeat transparent",
                    order: 1,
                    width: "15px"
                }),
                pauseButton: z(z({}, Q), {
                    background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAApCAYAAABdnotGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMhJREFUeNrsmD0KAjEQhRNXxUKxF2vxCh7AW3ghj7FXUxHRwkVBRZD4wm6zwmSmEIzwBr4mQ5IvP9XzIQSXU3VcZtUVxmdgIPQqsDGs7cEc9IT+ERwsQktQJjZ6gQXYKUIrsE70n43wQ3uyobJRAUaGGxor/X5D3n+IQhSiEIUoRCEKUYhCFKIQhShEIQpRiEI/F7ooc2KCdjWsXSn9u6tTtFZ5IYWdODkbvIGTQShmjNPEK8SDnz8HpdBz/4Xbjyfd/v0fegswAEzeHRINCOhCAAAAAElFTkSuQmCC') 50% 50% / contain no-repeat transparent",
                    order: 1,
                    width: "15px"
                }),
                replayButton: z(z({}, Q), {
                    background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAApCAYAAACyXOB4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAoFJREFUeNrsmE1IVFEYhtWGtNIM1EiTaiMVBo0URYUJSasiCiRz0yJoIUTtdFNBrgRpIYQrFy0CyYUt+9mliyiKSIKCUgYlUiwspszUvD2HvuB2mTvnzD3nDhK+8MAw3Pnmnbnf/X5Ooed5BStNhf+7qTVwBp7BhFUkZcoRp70/SsMlKIoay6Wpdu9fjcDOlWZKaQ46IZFLrKg5VQxHoAl2Qy1shW0h17+ACzAaR07tgF747OWuBbgBa13dvlK4KYFt9Rr22d6+JAxCncNS9BVqYC5KnWqGe1DmuD6moQp+5ppTB+G7517v4VCUnKqBacdmlqEPNkRN9IeODU3AcZvi2WL4Rb9gAE7BdrgSct1tKLep6CrxRw0MvYQGTUWfEsPWbabZwNDjkLxo810zCJWuGnK/QW5UhQRbB11w0raPBt9IaUydd9jAjSr6FviYpeB9kIa7HPfkWeR7rWsj9/NhKGiqQnPtWL5m9ITv9XqDJmqrs3BM9dwMsXtgJmgqrQm42dJQNQwE7o5fJXA5ePumNUH3Wpo6msWQ0mKmKaFcmmaYvkGZxaN+R1NuLobVqVeaD16PaKjOYGqtDzPVrfmgmq+SORpSM/mwJu649N2MpvYY9L5J/6/SUAx3DWJ26UaXBwZBvshUkG2fOyDThE4/oFq3OOyHp5on5a9SMATPYQpKYReckJ3QRKo+dZjM6Le8/Ghc1jejFUsVsieyXsWlBWiUUxrjbaZW5qc4tATnom7IavZ+49jQfDZDpmv7JhhyZGhM9klnR0GtkphRNAvXMiW1i/OphCwIj2DRwMxbuCr/duznUwVyvnAY6mUs2ShnA5/gnTy9qdXT4Tj1W4ABAKadIx8bRyhHAAAAAElFTkSuQmCC') 50% 50% / contain no-repeat transparent",
                    order: 1,
                    width: "15px"
                }),
                muteButton: z(z({}, Q), {
                    background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAiCAYAAAAd6YoqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAjBJREFUeNrc2U9IFUEcwHFXTShUSKUQQx+dREE0BBXCkjoIklhdOkU3b2IPUfAgCCH4P/Mf3Q2CbiIo0kHxoBcrkk4SokU3QQwRUVy/gyMs47x1dfetuzvwObydH7vvx/x2Zt48wzTNlCi01JSItGQlUoo3KPEtE1FaHuvCsXnaDlGXhGec4+WIpOEjumHIa+lo9mNA0j26z018RqOmryAsieRgBjXX+bK7TaQIcygO86xVhuUgJOEmkTosIT8o64iutG7I+T9R2ZVjAhkunpuFIbneiHtN2cTeRr8c+RF8cbKOZOCb6W1b0sz775SYeIL1IRerlrgD3HWyjoi6r/ChErKUz4NoV67l4SseKNVyy8mIPDS9b7oRycemJrZT9t/BT03/YKKV/boSEWLY0MT34pfm+giMICYiFOK3g3sM+LnXukrbwmOs28T0oS0Mv0f+4LV4XTV9K+gIyw8rsc35ZNkxW1u1nNECn0gMC7hvExOXC6ER1ETEl1+UyVhbD9aUay0YtU1GeftrfJq17mFLE9su+/PwXdP/3un0m41tHxIZ1cTFL9ienLWYLhF1Y7iLSjyxKbvnqHdZVrvWokArPigx23iKefmdRDvCvleHD2mYdDkimRjHIl5d8Lxs+TwR+9JpaV3GWxy5XNkDcYoyjBfYi8IB3TQe4V8UThpXUYUfUTgy/YtazGr6dsJ29vsfzzCmXJ/1IxEjSX8rNKBJltskjsOaSGT+VvC9nQgwAJIzUxtEFbq7AAAAAElFTkSuQmCC') 50% 50% / contain no-repeat transparent",
                    order: 2,
                    width: "25px"
                }),
                noMuteButton: z(z({}, Q), {
                    background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAiCAYAAAAd6YoqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxlJREFUeNrsmU1IVUEUx9/zK1PTlCijouwLKigx+1oU6NvY16usTVHQIqRsU4uiVZtwUcuCpEVFEiQtRGgRERZlKRFZkQouyiILwowoiz703f5Dc+HP6b6r3Dfz3kM68IOZOfeeN+fOmZkz88KO44QmgmSEJojYcmQZ2A+WJs0TFVqGOQlizl/5DaoC2pkGWkAv2DvW8yYdyAQXnH+lOaC9BrIxAqJ+z5sKrcmgBdR56GYFtDlI5UxwDZTbDK0S0OHEl/aAdnNAm7DVA3JtjMhc8BCsMzCqZeAIqNT1X6AW9NEzavE4bnpEloP3ztgynhGZCoZoPtSQrlwvGq4M64XAyIhUgXYw09Acmw9KaD40g0W6/gycpWfzwUFpIOyxs2frIcyK86Nqwp0HOePs5AOwnup5IAL6QTd1/rb+QK7cBdW6PB281otKSJeV80680FITrMsxKxxa6sN16vZRUEe6IvBSvBshfZPQrfbbRyod88KOlArdT7CC9NVCf4t0m4TuhN8cybWcSHwAj6muwrOB6ndAJ9VVCBbrspqTI6RblcqkUcX0TjBMbRtBKdWvi41wjS5/1XPDlcWpzn7fgquiD2up/kQ8zx1+Q+UZ6ZDGPxd1XsY/CV0elX9QeVI6OFIs6tzBKUIXE6Hm1Z4SR8Jgl2jrpvICj1B0hefSUKodUblSBdUHxLzYIp7votFYSO2vUulIITgl2s5QmMwB20Rn+yijKCDdCz9HRi07EhO/0abTHVdOUxqi5DKVo8LWPb/st5CyUBs7u2IruA8u6rTEba8X733UZx2lywL9IgPOZ7syMfyizwMRn7DbAWoSGJUbGpYlIsNVcoyW4t1gHulawbdEzyPqbN6YwIh4ERHvXCFdARgQ+gqTlw9H9SHIhCMZuvOD+gIjm3SXhL1WG7coUR2vjoUzu+KwsPUdlNm6DloJ3llwpJbux1w5ZPteazZ4atiRR8JOUzLutdTuvAHc9NB9DmizQ6x0B5J5ZapWtHPiS9YHtKX2jn1gj5j8noQt/a2wGWzXNyCNMlO1kon+/38kzeSPAAMApIvJcfAUG8cAAAAASUVORK5CYII=') 50% 50% / contain no-repeat transparent",
                    order: 2,
                    width: "25px"
                }),
                timeBar: {
                    order: 3,
                    color: "#fff",
                    display: "flex",
                    marginLeft: "auto",
                    marginRight: "15px",
                    fontSize: "14px"
                },
                timeBarItems: {
                    margin: "0px 5px 0px 0px"
                },
                seekBar: {
                    position: "absolute",
                    left: "0",
                    bottom: "27px",
                    height: "5px",
                    width: "100%",
                    backgroundColor: "#222"
                },
                progress: function(e) {
                    return {
                        position: "absolute",
                        left: 0,
                        bottom: "27px",
                        height: "5px",
                        width: e + "%",
                        backgroundColor: "#555"
                    }
                }
            },
            G = function(e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.handleTimeUpdate = function(e) {
                        var t, n, i = null !== (n = null === (t = e.target) || void 0 === t ? void 0 : t.currentTime) && void 0 !== n ? n : 0,
                            o = r.state.trackings.sort((function(e, t) {
                                return t.duration > e.duration ? -1 : 1
                            }));
                        o.forEach((function(e, t) {
                            !e.requested && e.duration < i && (r.trackEvents(e.urls), o[t] = z(z({}, e), {
                                requested: !0
                            }), r.setState({
                                trackings: o
                            }))
                        })), r.setState({
                            current: i
                        })
                    }, r.toRenderableTime = function(e) {
                        var t = Math.floor(e);
                        return "0:" + (t >= 10 ? t.toString() : "0" + t.toString())
                    }, r.handlePlay = function(e) {
                        var t;
                        if (e && "click" === e.type) r.setState({
                            controledPause: !1
                        });
                        else if (r.state.videoStatus !== B.Paused || r.state.controledPause) return;
                        null === (t = r.videoRef.current) || void 0 === t || t.play(), r.setState({
                            videoStatus: B.Playing
                        })
                    }, r.handleStop = function(e) {
                        var t, n;
                        e && "click" === e.type ? (null === (t = r.videoRef.current) || void 0 === t || t.pause(), r.setState({
                            videoStatus: B.Paused,
                            controledPause: !0
                        })) : r.state.videoStatus === B.Playing && (null === (n = r.videoRef.current) || void 0 === n || n.pause(), r.setState({
                            videoStatus: B.Paused
                        }))
                    }, r.handleEnded = function() {
                        var e = r.state.trackings;
                        r.state.trackings.forEach((function(t, n) {
                            t.requested || "complete" !== t.type || (r.trackEvents(t.urls), e[n] = z(z({}, t), {
                                requested: !0
                            }))
                        })), r.setState({
                            videoStatus: B.Ended,
                            trackings: e
                        })
                    }, r.renderPlayingControlButton = function(e) {
                        switch (e) {
                            case B.Playing:
                                return h("div", {
                                    style: Y.pauseButton,
                                    onClick: r.handleStop
                                });
                            case B.Paused:
                                return h("div", {
                                    style: Y.playButton,
                                    onClick: r.handlePlay
                                });
                            case B.Ended:
                                return h("div", {
                                    style: Y.replayButton,
                                    onClick: r.handlePlay
                                });
                            default:
                                return null
                        }
                    }, r.state = {
                        muted: !0,
                        videoStatus: B.Paused,
                        current: 0,
                        showControls: !1,
                        controledPause: !1,
                        trackings: []
                    }, r.makeTrackingState(), r.videoRef = {
                        current: null
                    }, r.wrapperRef = {
                        current: null
                    }, r
                }
                return H(t, e), t.prototype.componentDidMount = function() {
                    var e, t, r = this;
                    (null === (e = this.wrapperRef) || void 0 === e ? void 0 : e.current) && !this.props.isApp && (Object(F.a)(this.wrapperRef.current, .5, this.handlePlay, this.handleStop), Object(M.b)() && this.setState({
                        showControls: !0
                    })), this.props.isApp && (this.setState({
                        showControls: !0
                    }), window.addEventListener("play", (function(e) {
                        r.state.videoStatus !== B.Ended && r.handlePlay(e)
                    })), window.addEventListener("pause", (function(e) {
                        r.state.videoStatus !== B.Ended && r.handleStop(e)
                    }))), Object(M.c)() && (null === (t = this.videoRef.current) || void 0 === t || t.load()), this.setVideoStartPosition(this.state.current)
                }, t.prototype.componentWillUnmount = function() {
                    this.props.isApp && (window.removeEventListener("play", this.handlePlay), window.removeEventListener("pause", this.handleStop))
                }, t.prototype.makeTrackingState = function() {
                    var e = this.props,
                        t = e.events,
                        r = e.duration;
                    this.setState({
                        trackings: t.map((function(e) {
                            return {
                                type: e.type,
                                duration: function() {
                                    switch (e.type) {
                                        case "start":
                                            return 0;
                                        case "firstQuartile":
                                            return r / 4;
                                        case "midpoint":
                                            return r / 2;
                                        case "thirdQuartile":
                                            return r / 4 * 3;
                                        case "complete":
                                            return r;
                                        default:
                                            return 0
                                    }
                                }(),
                                urls: e.urls,
                                requested: !1
                            }
                        }))
                    })
                }, t.prototype.trackEvents = function(e) {
                    Promise.all(e.map((function(e) {
                        return fetch(e).catch((function(e) {
                            throw e
                        }))
                    })))
                }, t.prototype.setVideoStartPosition = function(e) {
                    var t;
                    (null === (t = this.videoRef) || void 0 === t ? void 0 : t.current) && (this.videoRef.current.currentTime = e)
                }, t.prototype.getRatio = function(e) {
                    var t = e.width / e.height;
                    return 1.7777777777777777 === t ? "LandScape" : 1 === t ? "Spuare" : .5625 === t ? "Portrait" : void 0
                }, t.prototype.getThumbnail = function(e) {
                    switch (e) {
                        case "LandScape":
                            return "https://s-cdn.rmp.rakuten.co.jp/images/loading-1280x720.gif";
                        case "Spuare":
                            return "https://s-cdn.rmp.rakuten.co.jp/images/loading-720x720.gif";
                        case "Portrait":
                            return "https://s-cdn.rmp.rakuten.co.jp/images/loading-720x1280.gif"
                    }
                }, t.prototype.getVideoSources = function(e) {
                    var t = q(e.filter((function(e) {
                            return "video/mp4" === e.type
                        })).sort((function(e, t) {
                            return e.width < t.width ? -1 : 1
                        })), 2),
                        r = t[0],
                        n = t[1],
                        i = q(e.filter((function(e) {
                            return "video/webm" === e.type
                        })).sort((function(e, t) {
                            return e.width < t.width ? -1 : 1
                        })), 2),
                        o = i[0],
                        a = i[1];
                    return ("mobile" === (new D.UAParser).getDevice().type ? [r, o] : [n, a]).filter(W.h)
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        r = t.duration,
                        n = t.files,
                        i = n[0] && this.getRatio(n[0]),
                        o = i && this.getThumbnail(i);
                    return h("div", {
                        onMouseOver: function() {
                            e.setState({
                                showControls: !0
                            })
                        },
                        onMouseLeave: function() {
                            e.setState({
                                showControls: !1
                            })
                        },
                        style: Y.videoWrapper,
                        ref: this.wrapperRef
                    }, h("video", {
                        poster: o,
                        muted: this.state.muted,
                        playsInline: !0,
                        "webkit-playsinline": !0,
                        onEnded: this.handleEnded,
                        onTimeUpdate: this.handleTimeUpdate,
                        ref: this.videoRef,
                        style: Y.video,
                        onLoadedData: function() {
                            Object(V.f)({
                                type: "video_loaded",
                                vendor: "rdn"
                            })
                        }
                    }, this.getVideoSources(n).map((function(e, t) {
                        return h("source", {
                            key: t,
                            src: e.src,
                            type: e.type
                        })
                    })), "I'm sorry, your browser doesn't support HTML5 video in WebM with VP8/VP9 or MP4 with H.264."), this.state.showControls && h("div", null, h("div", {
                        style: Y.controlsWrapper,
                        onClick: function(e) {
                            e.preventDefault(), e.stopPropagation()
                        }
                    }, this.renderPlayingControlButton(this.state.videoStatus), this.state.muted ? h("div", {
                        style: Y.muteButton,
                        onClick: function() {
                            e.setState({
                                muted: !1
                            })
                        }
                    }) : h("div", {
                        style: Y.noMuteButton,
                        onClick: function() {
                            e.setState({
                                muted: !0
                            })
                        }
                    }), h("div", {
                        style: Y.timeBar
                    }, h("span", {
                        style: Y.timeBarItems
                    }, this.toRenderableTime(this.state.current)), h("span", {
                        style: Y.timeBarItems
                    }, "/"), h("span", {
                        style: Y.timeBarItems
                    }, this.toRenderableTime(r)))), h("div", {
                        style: Y.seekBar
                    }), h("div", {
                        style: Y.progress(Math.floor(this.state.current) / r * 100)
                    })))
                }, t
            }(m),
            Z = r("a9de"),
            K = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            X = "runa-video-wrapper",
            J = function(e) {
                var t, r;
                try {
                    for (var n = K(["start", "firstQuartile", "midpoint", "thirdQuartile", "complete"]), i = n.next(); !i.done; i = n.next()) {
                        if (e === i.value) return !0
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = n.return) && r.call(n)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return !1
            },
            $ = r("zQ0j"),
            ee = r("eLH9"),
            te = r("wvYv"),
            re = function() {
                return re = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }, re.apply(this, arguments)
            },
            ne = function() {
                function e(e) {
                    this.expanded = !1, this.msgEventAdded = !1, this.cd = e, this._logger = new ee.a(te.c.cd)
                }
                return e.prototype.render = function() {
                    var e = this;
                    try {
                        if (Object(V.f)({
                                vendor: "rdn",
                                type: "register"
                            }), !0 === this.cd.unfilled) return void Object(V.g)({
                            vendor: "rdn",
                            type: "unfilled"
                        });
                        var t = document.getElementById(this.cd.id);
                        if (!t || this.expanded) return;
                        this.startMessageListener(), this.startFailureChecker(), fetch(this.cd.src, {
                            mode: "cors",
                            method: "GET",
                            credentials: "include",
                            cache: "no-cache"
                        }).then((function(e) {
                            if (200 === e.status) return e.text();
                            throw new Error("response status is " + e.status)
                        })).then((function(r) {
                            var n, i, o = null;
                            if (window.renderWithoutIframe ? o = Object($.c)(t, r) : (e.iframe = Object($.b)(t), o = Object($.d)(e.iframe, r)), o) {
                                var a = o.defaultView;
                                a.vast && (window.cd = e, Object(V.f)({
                                    type: "video",
                                    vendor: "rdn"
                                }), (n = a.vast, i = (new DOMParser).parseFromString(n, "text/xml"), (new Z.VASTParser).parseVAST(i)).then((function(e) {
                                    if ((null == o ? void 0 : o.getElementById(X)) && o.getElementById(X)) {
                                        var t = re({}, function(e) {
                                            var t = e.ads[0];
                                            if (!t) throw new Error("No ad in vast.");
                                            var r = t.creatives[0];
                                            return {
                                                files: r.mediaFiles.map((function(e) {
                                                    var t, r;
                                                    return {
                                                        src: null !== (t = e.fileURL) && void 0 !== t ? t : "",
                                                        type: null !== (r = e.mimeType) && void 0 !== r ? r : "",
                                                        width: e.width,
                                                        height: e.height
                                                    }
                                                })),
                                                events: Object.keys(r.trackingEvents).filter((function(e) {
                                                    return J(e)
                                                })).map((function(e) {
                                                    var t;
                                                    return {
                                                        type: e,
                                                        urls: null !== (t = r.trackingEvents[e]) && void 0 !== t ? t : []
                                                    }
                                                })),
                                                duration: r.duration,
                                                isApp: Object(M.a)()
                                            }
                                        }(e));
                                        L(h(G, re({}, t)), o.getElementById(X))
                                    }
                                }))), o && o.close()
                            }
                        })).catch((function(t) {
                            e._logger.logging(t)
                        }))
                    } catch (e) {
                        this._logger.logging(e)
                    }
                }, e.prototype.sendViewable = function(e) {
                    if (e) {
                        var t = new CustomEvent("play");
                        window.dispatchEvent(t)
                    } else {
                        var r = new CustomEvent("pause");
                        window.dispatchEvent(r)
                    }
                }, e.prototype.startMessageListener = function() {
                    var e = this;
                    this.msgEventAdded || (window.addEventListener("message", (function(t) {
                        if (Object(V.a)(t.data))
                            if (Object(V.c)(t.data) && !e.expanded) {
                                e.iframe && (e.iframe.width = "100%", e.iframe.height = "100%");
                                try {
                                    e.expanded = !0, Object(V.f)({
                                        vendor: "rdn",
                                        type: "expand"
                                    })
                                } catch (t) {}
                            } else if (Object(V.d)(t.data) && e.expanded && e.iframe) try {
                            Object(V.f)({
                                vendor: "rdn",
                                type: "open_popup",
                                url: t.data.url
                            })
                        } catch (t) {}
                    }), !1), this.msgEventAdded = !0)
                }, e.prototype.startFailureChecker = function() {
                    var e = this;
                    this.failureChecker || (this.failureChecker = window.setTimeout((function() {
                        e.expanded || Object(V.f)({
                            vendor: "rdn",
                            type: "collapse"
                        }), window.clearTimeout(e.failureChecker)
                    }), 1e4))
                }, e
            }(),
            ie = function() {
                function e(e) {
                    this.expanded = !1, this.adm = e, this._logger = new ee.a(te.c.cd)
                }
                return e.prototype.render = function() {
                    try {
                        if ("" === this.adm) return;
                        if (this.expanded) return;
                        var e = Object($.b)(document.body),
                            t = decodeURIComponent(this.adm),
                            r = Object($.d)(e, t);
                        r && (r.close(), this.expanded = !0, Object(V.f)({
                            vendor: "rdn",
                            type: "expand"
                        }))
                    } catch (e) {
                        this._logger.logging(e)
                    }
                }, e
            }();
        P = window.setInterval((function() {
            "complete" === document.readyState && (window.rdncd ? new ne(window.rdncd).render() : window.rdnadm && new ie(window.rdnadm).render(), window.clearInterval(P))
        }), 50)
    },
    auMp: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return i
        }));
        var n = !1,
            i = {
                Promise: void 0,
                set useDeprecatedSynchronousErrorHandling(e) {
                    if (e);
                    n = e
                },
                get useDeprecatedSynchronousErrorHandling() {
                    return n
                }
            }
    },
    bb6g: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return i
        }));
        var n = function(e, t) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            }, n(e, t)
        };

        function i(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        }
    },
    dl46: function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return o
        })), r.d(t, "a", (function() {
            return a
        }));
        var n = r("7DB8"),
            i = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            o = function(e) {
                return e ? e.replace(/^\?/, "").split("&").reduce((function(e, t) {
                    var r, n, i, o = t.split("="),
                        a = null !== (r = o[0]) && void 0 !== r ? r : "",
                        s = null !== (n = o[1]) && void 0 !== n ? n : "";
                    return /\[\]$/.test(a) ? (e[a = a.replace("[]", "")] = null !== (i = e[a]) && void 0 !== i ? i : [], e[a] instanceof Array && e[a].push(s)) : e[a] = s || "", e
                }), {}) : {}
            },
            a = function(e) {
                var t, r, o = [];
                for (var a in e) {
                    var s = Object(n.g)(e[a]) ? [e[a]] : e[a];
                    try {
                        for (var u = (t = void 0, i(null != s ? s : [])), l = u.next(); !l.done; l = u.next()) {
                            var c = l.value;
                            o.push(encodeURIComponent(a) + "=" + encodeURIComponent(c))
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            l && !l.done && (r = u.return) && r.call(u)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                }
                return o.join("&")
            }
    },
    e4KZ: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return i
        }));
        var n = r("0Cfz");

        function i(e) {
            return !Object(n.a)(e) && e - parseFloat(e) + 1 >= 0
        }
    },
    eLH9: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return s
        }));
        var n = r("1SjT"),
            i = r("HKSY"),
            o = r("7DB8"),
            a = r("wvYv"),
            s = function() {
                function e(e) {
                    this._tag = e
                }
                return e.prototype.logging = function(e, t) {
                    var r, n, i = {
                            date: this.getDateStr(new Date),
                            session_id: t ? t.id : void 0,
                            sdk_type: 3,
                            sdk_version: "" + (null !== (r = "1.1.0") ? r : ""),
                            error_detail: {
                                tag: this._tag,
                                error_message: e.message,
                                stacktrace: e.stack
                            },
                            device: this.makeDevice(t),
                            user: this.makeUser(t),
                            app: void 0,
                            site: {
                                page: document.URL,
                                ref: document.referrer
                            }
                        },
                        o = Object.assign(i, this.makeAdspotIdInfo(t));
                    fetch("" + (null !== (n = "https://log.rmp.rakuten.co.jp/") ? n : ""), {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify(o)
                    }).catch((function() {}))
                }, e.prototype.makeDevice = function(e) {
                    var t, r = new n.UAParser(window.navigator.userAgent);
                    return {
                        ua: window.navigator.userAgent,
                        model: void 0,
                        build_name: void 0,
                        type: this.getDeviceType(r.getDevice().type),
                        ifa: null === (t = null == e ? void 0 : e.device) || void 0 === t ? void 0 : t.ifa,
                        lmt: Object(i.b)() ? 1 : 0,
                        os_version: r.getOS().name,
                        connection_method: this.getConnectionService(),
                        w: window.innerWidth,
                        h: window.innerHeight,
                        ratio: window.devicePixelRatio
                    }
                }, e.prototype.makeUser = function(e) {
                    var t, r, n, i, o, a, s;
                    return e ? {
                        id: this.getRpCookie(),
                        ext: {
                            rz: null !== (n = null === (r = null === (t = e.user) || void 0 === t ? void 0 : t.ext) || void 0 === r ? void 0 : r.rz) && void 0 !== n ? n : this.getRzCookie(),
                            hashedEmail: null === (o = null === (i = e.user) || void 0 === i ? void 0 : i.ext) || void 0 === o ? void 0 : o.hashedemail,
                            hashedEasyId: null === (s = null === (a = e.user) || void 0 === a ? void 0 : a.ext) || void 0 === s ? void 0 : s.hashedeasyid
                        }
                    } : {
                        id: void 0,
                        ext: {
                            rz: void 0,
                            hashedEmail: void 0,
                            hashedEasyId: void 0
                        }
                    }
                }, e.prototype.makeAdspotIdInfo = function(e) {
                    var t, r = null === (t = null == e ? void 0 : e.imp) || void 0 === t ? void 0 : t.map((function(e) {
                        var t;
                        return null === (t = e.ext) || void 0 === t ? void 0 : t.adspot_id
                    })).filter(o.h);
                    if (r) return 1 === r.length ? {
                        adspot_id: r[0]
                    } : {
                        sr_adspot_ids: r
                    }
                }, e.prototype.getRpCookie = function() {
                    var e = /Rp=([a-zA-Z0-9]+);/.exec(document.cookie);
                    return e ? e[1] : void 0
                }, e.prototype.getRzCookie = function() {
                    var e = /Rz=([a-zA-Z0-9-]+);/.exec(document.cookie);
                    return e ? e[1] : void 0
                }, e.prototype.getDeviceType = function(e) {
                    switch (e) {
                        case "console":
                            return a.b.PersonalComputer;
                        case "mobile":
                            return a.b.Phone;
                        case "tablet":
                            return a.b.Tablet;
                        case "smarttv":
                            return a.b.ConnectedTV;
                        case "embedded":
                            return a.b.ConnectedDevice;
                        default:
                            return
                    }
                }, e.prototype.getConnectionService = function() {
                    var e, t, r, n = null !== (r = null !== (t = null !== (e = navigator.connection) && void 0 !== e ? e : navigator.mozConnection) && void 0 !== t ? t : navigator.webkitConnection) && void 0 !== r ? r : void 0;
                    switch (null == n ? void 0 : n.type) {
                        case "ethernet":
                            return a.a.Ethernet;
                        case "wifi":
                            return a.a.WiFi;
                        case "cellular":
                            return a.a.CellularNetwork;
                        default:
                            return a.a.Unknown
                    }
                }, e.prototype.getDateStr = function(e) {
                    return e.getFullYear() + "-" + ("0" + (e.getMonth() + 1).toString()).slice(-2) + "-" + ("0" + e.getDate().toString()).slice(-2) + " " + ("0" + e.getHours().toString()).slice(-2) + ":" + ("0" + e.getMinutes().toString()).slice(-2) + ":" + ("0" + e.getSeconds().toString()).slice(-2)
                }, e
            }()
    },
    ebHz: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return n
        }));
        var n = function() {
            return "function" == typeof Symbol && Symbol.observable || "@@observable"
        }()
    },
    gorU: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return i
        }));
        var n = r("7DB8");

        function i(e) {
            var t = e;
            return void 0 !== t && Object(n.d)(t.master_id) && Object(n.e)(t.code) && Object(n.e)(t.match)
        }
    },
    iUyY: function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return i
        })), r.d(t, "a", (function() {
            return o
        }));
        var n = r("zQ0j"),
            i = function(e) {
                var t, r, n = e;
                return void 0 !== (null === (r = null === (t = null == n ? void 0 : n.$sf) || void 0 === t ? void 0 : t.ext) || void 0 === r ? void 0 : r.inViewPercentage)
            },
            o = function() {
                var e, t = Object(n.a)(),
                    r = 10;
                do {
                    try {
                        if ((e = t.shift()) && i(e)) return e.$sf
                    } catch (e) {}
                } while (e && --r)
            }
    },
    ucMe: function(e, t, r) {
        "use strict";
        r.d(t, "c", (function() {
            return i
        })), r.d(t, "d", (function() {
            return o
        })), r.d(t, "b", (function() {
            return a
        })), r.d(t, "e", (function() {
            return s
        })), r.d(t, "a", (function() {
            return u
        })), r.d(t, "f", (function() {
            return l
        })), r.d(t, "g", (function() {
            return c
        }));
        var n = r("7DB8"),
            i = function(e) {
                return e && "expand" === e.type
            },
            o = function(e) {
                return e && "open_popup" === e.type && "" !== e.url
            },
            a = function(e) {
                return e && "collapse" === e.type
            },
            s = function(e) {
                return e && "unfilled" === e.type
            },
            u = function(e) {
                var t = e;
                return void 0 !== t && Object(n.g)(t.vendor) && "rdn" === t.vendor
            },
            l = function(e) {
                var t;
                ! function(e) {
                    var t, r, n, i = e;
                    return void 0 !== (null === (n = null === (r = null === (t = null == i ? void 0 : i.webkit) || void 0 === t ? void 0 : t.messageHandlers) || void 0 === r ? void 0 : r.runaSdkInterface) || void 0 === n ? void 0 : n.postMessage)
                }(window) ? ! function(e) {
                    var t, r = e;
                    return void 0 !== (null === (t = null == r ? void 0 : r.runaSdkInterface) || void 0 === t ? void 0 : t.postMessage)
                }(window) ? void 0 !== (null === (t = window.parent) || void 0 === t ? void 0 : t.postMessage) && window.parent.postMessage(e, document.location.origin): window.runaSdkInterface.postMessage(JSON.stringify(e)): window.webkit.messageHandlers.runaSdkInterface.postMessage(e)
            };
        var c = function(e) {
            var t = window.setTimeout((function() {
                l(e), window.clearTimeout(t)
            }), 0)
        }
    },
    wvYv: function(e, t, r) {
        "use strict";
        r.d(t, "c", (function() {
            return o
        })), r.d(t, "b", (function() {
            return n
        })), r.d(t, "a", (function() {
            return i
        }));
        var n, i, o = {
            aa: "aa",
            cd: "cd",
            vw: "vw",
            amp: "amp",
            rtg: "rtg",
            activity: "activity"
        };
        ! function(e) {
            e[e.MobileOrTablet = 1] = "MobileOrTablet", e[e.PersonalComputer = 2] = "PersonalComputer", e[e.ConnectedTV = 3] = "ConnectedTV", e[e.Phone = 4] = "Phone", e[e.Tablet = 5] = "Tablet", e[e.ConnectedDevice = 6] = "ConnectedDevice", e[e.SetTopBox = 7] = "SetTopBox"
        }(n || (n = {})),
        function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.Ethernet = 1] = "Ethernet", e[e.WiFi = 2] = "WiFi", e[e.CellularNetwork = 3] = "CellularNetwork"
        }(i || (i = {}))
    },
    yby3: function(e, t, r) {
        "use strict";
        r.d(t, "c", (function() {
            return u
        })), r.d(t, "a", (function() {
            return l
        })), r.d(t, "b", (function() {
            return c
        }));
        var n = r("1SjT"),
            i = "Web",
            o = "iOS",
            a = "Android",
            s = function() {
                var e = window;
                return null != e.webkit && null != e.webkit.messageHandlers.runaSdkInterface ? o : null != e.runaSdkInterface ? a : window.parent ? i : void 0
            },
            u = function() {
                return s() === o
            },
            l = function() {
                return u() || s() === a
            },
            c = function() {
                var e;
                return "mobile" === (null === (e = new n.UAParser(window.navigator.userAgent).getDevice()) || void 0 === e ? void 0 : e.type)
            }
    },
    zQ0j: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return o
        })), r.d(t, "b", (function() {
            return a
        })), r.d(t, "d", (function() {
            return s
        })), r.d(t, "c", (function() {
            return u
        }));
        var n = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            i = function(e) {
                return e !== window.top
            };

        function o() {
            var e, t, r = function() {
                    for (var e = 10, t = window, r = []; i(t) && e--;) r.push(t), t = t.parent;
                    return r
                }(),
                o = [];
            try {
                for (var a = n(r), s = a.next(); !s.done; s = a.next()) {
                    var u = s.value;
                    o.push(u)
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    s && !s.done && (t = a.return) && t.call(a)
                } finally {
                    if (e) throw e.error
                }
            }
            return o.push(window.top), o
        }
        var a = function(e) {
                var t = document.createElement("iframe");
                return t.width = "100%", t.height = "100%", t.frameBorder = "0", t.scrolling = "no", t.marginHeight = "0", t.marginWidth = "0", e.appendChild(t), t
            },
            s = function(e, t) {
                var r;
                try {
                    r = e.contentDocument
                } catch (t) {
                    r = e.contentWindow ? e.contentWindow.document : null
                }
                return r ? (r.open(), r.write(t), r) : null
            },
            u = function(e, t) {
                var r, i, o, a, s = (new DOMParser).parseFromString(t, "text/html"),
                    u = [];
                try {
                    for (var l = n(s.getElementsByTagName("script")), c = l.next(); !c.done; c = l.next()) {
                        var d = c.value,
                            p = document.createElement("script");
                        p.type = "text/javascript", d.src.length > 0 && (p.src = d.src), p.innerHTML = d.innerHTML, u.push(p)
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        c && !c.done && (i = l.return) && i.call(l)
                    } finally {
                        if (r) throw r.error
                    }
                }
                var h = document.createElement("div");
                h.style.height = "100%", h.style.width = "100%", h.innerHTML = t;
                try {
                    for (var f = n(u), v = f.next(); !v.done; v = f.next()) {
                        d = v.value;
                        h.appendChild(d)
                    }
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        v && !v.done && (a = f.return) && a.call(f)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return e.appendChild(h), e.ownerDocument
            }
    }
});