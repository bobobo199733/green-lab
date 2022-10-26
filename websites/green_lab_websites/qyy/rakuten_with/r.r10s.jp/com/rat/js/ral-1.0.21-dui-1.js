(function(window, undefined) {
    /*
     ral v1.0.21
     Copyright (c) @2013-2022 Rakuten.Inc
     Date : 2022-06-24
    */
    'use strict';
    window.RAL = window.RAL || {};
    RAL.live || function(e, g) {
        RAL.a = {
            p: "acc",
            Fa: "accu",
            Ga: "afid",
            Ha: "altitude",
            Ia: "altaccu",
            Ja: "astime",
            ha: "bln",
            Ka: "cc",
            La: "tis",
            Ma: "chkout",
            Na: "chkpt",
            Oa: "cntln",
            Pa: "cycode",
            Q: "cp",
            B: "etype",
            hc: "fprint",
            Qa: "flv",
            Ra: "genre",
            Sa: "gol",
            Ta: "tms",
            Ua: "head",
            ia: "ifr",
            Va: "ni",
            ja: "jav",
            Xa: "lat",
            Ya: "ldtime",
            R: "loc",
            Za: "long",
            ka: "navtype",
            $a: "_merge_flags",
            la: "online",
            ab: "pgid",
            ic: "pgl",
            bb: "pgn",
            cb: "pgt",
            S: "ckp",
            ma: "price",
            eb: "pdid",
            na: "ref",
            URL: "url",
            fb: "reqc",
            gb: "rqtime",
            oa: "res",
            hb: "ltm",
            ib: "sq",
            q: "aid",
            L: "cks",
            jb: "speed",
            qa: "tzo",
            ra: "ua",
            VERSION: "ver",
            kb: "sresv",
            pa: "tid",
            Wa: "itemvector"
        };
        RAL.rb = "1.0.21-dui-1";
        RAL.qb = "OO1OO";
        RAL.lb = 500;
        RAL.G = "RAL";
        RAL.mb = "ROFL";
        RAL.sa = "RTID";
        RAL.jc = "RFPR";
        RAL.U = "cpkg_none=";
        RAL.T = "?" + RAL.U;
        RAL.ob = 256;
        RAL.pb = 262144;
        RAL.nb = 16;
        RAL.M = {
            appear: !0,
            async: !1,
            scroll: !0,
            click: !1,
            pv: !0,
            perf: !1
        };
        RAL.eventLog = [];
        RAL.m = function(a) {
            return "string" === typeof a || "[object String]" === Object.prototype.toString.call(a)
        };
        RAL.i = function(a) {
            return RAL.m(a) ? a.replace(/^\s+|\s+$/g, "") : null
        };
        RAL.t = function(a) {
            return "[object Array]" ===
                Object.prototype.toString.call(a)
        };
        RAL.u = function(a) {
            return !!a && "[object Object]" === Object.prototype.toString.call(a)
        };
        RAL.aa = function(a, b) {
            if (a && "object" === typeof a && b && "object" === typeof b) {
                for (var c in b) a[c] = b[c];
                return !0
            }
            return !1
        };
        RAL.l = function(a, b) {
            var c = RAL.i(a);
            if (null === c) return null;
            b === g && (b = document.cookie);
            var d = b ? b.split(";") : "",
                e;
            for (e = 0; e < d.length; e++) {
                var f = d[e].indexOf("=");
                if (0 < f && RAL.i(d[e].substr(0, f)) === c) return d[e].substr(f + 1)
            }
            return null
        };
        RAL.P = function(a, b, c) {
            a = RAL.i(a);
            b = RAL.i(b);
            c = parseInt(c, 10);
            if (null !== a && null !== b && !isNaN(c)) {
                var d = new Date;
                0 >= c ? d.setTime(0) : d.setDate(d.getDate() + c);
                document.cookie = a + "=" + b + "; expires=" + d.toGMTString() + ";" + ("https:" === location.protocol ? " secure;" : "")
            }
        };
        RAL.Wb = function(a) {
            RAL.P(a, "", 0)
        };
        RAL.dc = function() {
            RAL.P("TEST", "TEST", 1);
            var a = RAL.l("TEST");
            RAL.P("TEST", "", 0);
            return "TEST" === a
        };
        RAL.N = function(a) {
            if (!RAL.m(a)) return "0000";
            var b, c = [0, 0, 0, 0];
            for (b = 0; b < a.length; ++b) c[b % 4] += a.charCodeAt(b);
            for (b = a = 0; 4 > b; ++b) a = (a << 4) + c[b] % 16;
            a ^=
                Math.floor(65536 * Math.random());
            return ("0000" + a.toString(16)).slice(-4)
        };
        RAL.g = function(a) {
            this.c = {};
            a !== g && RAL.aa(this.c, a)
        };
        RAL.g.prototype.Sb = function(a) {
            return a == g ? !1 : RAL.m(a) ? "" !== RAL.i(a) : "number" === typeof a ? !isNaN(a) && isFinite(a) : !0
        };
        RAL.g.prototype.d = function(a, b) {
            var c = RAL.i(a);
            null !== c && "" !== c && this.Sb(b) && (this.c[c] = "string" === typeof b ? RAL.i(b) : b)
        };
        RAL.g.prototype.remove = function(a) {
            a = RAL.i(a);
            null !== a && "" !== a && a in this.c && delete this.c[a]
        };
        RAL.g.prototype.setParameters = function(a) {
            if (RAL.u(a))
                for (var b in a) this.d(b,
                    a[b])
        };
        RAL.g.prototype.Ea = function(a) {
            if (RAL.u(a))
                for (var b in a)
                    if (this.e(b)) {
                        var c = this.get(b);
                        RAL.t(c) && RAL.t(a[b]) ? this.d(b, c.concat(a[b])) : RAL.u(c) && RAL.u(a[b]) ? RAL.aa(c, a[b]) : this.d(b, a[b])
                    } else this.d(b, a[b])
        };
        RAL.g.prototype.fc = function() {
            return l.stringify(this.c)
        };
        RAL.g.prototype.get = function(a) {
            a = RAL.i(a);
            return null === a || "" === a ? null : a in this.c ? this.c[a] : null
        };
        RAL.g.prototype.e = function(a) {
            a = RAL.i(a);
            return null === a || "" === a ? !1 : a in this.c
        };
        RAL.g.prototype.ec = function() {
            var a = {},
                b;
            for (b in this.c) a[b] =
                this.c[b];
            return a
        };
        RAL.g.prototype.gc = function() {
            var a = !0;
            "appear" == this.get(RAL.a.B) && (a = RAL.M.appear);
            return a
        };
        RAL.K = function() {};
        RAL.K.prototype.A = function() {};
        RAL.K.prototype.o = function() {};
        RAL.K.prototype.I = function() {};
        RAL.K.prototype.e = function() {};
        RAL.J = function() {
            this.n = RAL.G
        };
        RAL.J.prototype.A = function(a, b) {
            if (1E3 < b.length) return !1;
            RAL.P(this.n + a, encodeURIComponent(String(b)), 365);
            var c = RAL.l(this.n + a);
            return null !== c && decodeURIComponent(c) === b
        };
        RAL.J.prototype.o = function(a) {
            a = RAL.l(this.n +
                a);
            return null == a ? null : decodeURIComponent(a)
        };
        RAL.J.prototype.I = function(a) {
            RAL.Wb(this.n + a)
        };
        RAL.J.prototype.e = function(a) {
            return null !== this.o(a)
        };
        RAL.C = function() {
            this.n = RAL.G
        };
        RAL.C.prototype.A = function(a, b) {
            try {
                return e.localStorage.setItem(this.n + a, b), !0
            } catch (c) {}
            return !1
        };
        RAL.C.prototype.o = function(a) {
            return e.localStorage.getItem(this.n + a)
        };
        RAL.C.prototype.I = function(a) {
            e.localStorage.removeItem(this.n + a)
        };
        RAL.C.prototype.e = function(a) {
            return null !== this.o(a)
        };
        RAL.D = function() {};
        RAL.D.prototype.A =
            function() {
                return !0
            };
        RAL.D.prototype.o = function() {
            return null
        };
        RAL.D.prototype.I = function() {};
        RAL.D.prototype.e = function() {
            return !1
        };
        RAL.F = function() {
            this.s = {}
        };
        RAL.F.prototype.A = function(a, b) {
            this.s[a] = b;
            return !0
        };
        RAL.F.prototype.o = function(a) {
            return a in this.s ? this.s[a] : null
        };
        RAL.F.prototype.I = function(a) {
            a in this.s && delete this.s[a]
        };
        RAL.F.prototype.e = function(a) {
            return a in this.s
        };
        RAL.b = function(a, b, c) {
            this.Aa = new Date;
            a = RAL.i(a);
            if (!a) throw "Missing URL!";
            this.r = a;
            this.j = [a];
            this.wa = this.Ba =
                g;
            this.Vb = "pv";
            this.ga = "Rp";
            this.ba = "Rz";
            this.Y = navigator && "onLine" in navigator ? navigator.onLine : !0;
            this.c = new RAL.g;
            this.c.d(RAL.a.hb, this.tb(this.Aa));
            this.v = this.Gb();
            this.h = null;
            this.xa = RAL.lb;
            this.w = b || RAL.mb;
            this.Da = c || function() {
                return !0
            };
            this.k = [];
            this.Z = [];
            this.$ = [];
            this.ca = [];
            this.V = (b = this.ta()) ? 8 <= b : !0;
            this.ea = 0;
            e.addEventListener ? (b = this, e.addEventListener("online", b.H(this.O, b, [b]), !1), e.addEventListener("offline", b.H(this.O, b, [b]), !1)) : document.body && (b = this, document.body.ononline =
                b.H(this.O, b, [b]), document.body.onoffline = b.H(this.O, b, [b]))
        };
        RAL.b.prototype.wb = function() {
            return 2048 - (this.r.length + RAL.T.length)
        };
        RAL.b.prototype.setMainReceiver = function(a) {
            if (!(0 < this.ea) && RAL.m(a)) {
                a = this.va(a);
                this.j[0] = a;
                for (var b = this.j.length - 1; 0 < b; --b) this.j[b] === a && this.j.splice(b, 1)
            }
        };
        RAL.b.prototype.addReceiver = function(a) {
            if (!(0 < this.ea) && RAL.m(a)) {
                a = this.va(a);
                for (var b = 0; b < this.j.length; ++b)
                    if (this.j[b] === a) return;
                this.j.push(a)
            }
        };
        RAL.b.prototype.va = function(a) {
            return "https://" +
                a.match(/^(?:https?:)?(?:\/\/)?(.*)$/)[1]
        };
        RAL.b.prototype.H = function(a, b, c) {
            return function() {
                var d = c || arguments,
                    d = Array.prototype.slice.call(arguments[0] ? arguments : [e.event], 0),
                    d = d.concat(c);
                return a.apply(b || e, d)
            }
        };
        RAL.b.prototype.Ca = function(a) {
            if (!this.Da || !RAL.t(a) || 0 == a.length) return null;
            var b = [],
                c;
            for (c = 0; c < a.length; c++) {
                var d = a[c];
                this.Da(l.parse(d)) && b.push(d)
            }
            return b
        };
        RAL.b.prototype.Lb = function() {
            try {
                return "localStorage" in e && e.localStorage && null !== e.localStorage
            } catch (a) {
                return !1
            }
        };
        RAL.b.prototype.Gb = function() {
            return this.Lb() ? new RAL.C : RAL.dc() ? new RAL.F : new RAL.D
        };
        RAL.b.prototype.ua = function() {
            if (e.XDomainRequest) return new XDomainRequest;
            if (e.XMLHttpRequest) return new XMLHttpRequest;
            if (e.ActiveXObject) try {
                return new ActiveXObject("MSXML2.XMLHTTP.3.0")
            } catch (a) {}
            return null
        };
        RAL.b.prototype.Nb = function(a) {
            return "string" === typeof a && null !== a && /^[a-zA-Z]+$/.test(a)
        };
        RAL.b.prototype.Ob = function(a) {
            return "string" === typeof a && null !== a && /^[0-9a-zA-Z]+$/.test(a)
        };
        RAL.b.prototype.X =
            function(a) {
                var b = parseInt(a, 10);
                return !isNaN(b) && 0 < b && b == a
            };
        RAL.b.prototype.f = function(a) {
            return "object" === typeof a
        };
        RAL.b.prototype.setAccountId = function(a) {
            this.X(a) && this.c.d(RAL.a.p, a)
        };
        RAL.b.prototype.setCharSet = function(a) {
            this.f(a) || this.c.d(RAL.a.La, a)
        };
        RAL.b.prototype.Cb = function() {
            return document.referrer !== g ? document.referrer : ""
        };
        RAL.b.prototype.Jb = function() {
            return document.location.href
        };
        RAL.b.prototype.setGoalId = function(a) {
            this.f(a) || this.c.d(RAL.a.Sa, a)
        };
        RAL.b.prototype.setAffiliateId =
            function(a) {
                this.f(a) || this.c.d(RAL.a.Ga, a)
            };
        RAL.b.prototype.Qb = function() {
            if (!navigator.mimeTypes) return !1;
            var a, b = /^application\/x-java-applet;jpi-version=.*/;
            for (a = 0; a < navigator.mimeTypes.length; a++)
                if (b.test(navigator.mimeTypes[a].type)) return !0;
            return !1
        };
        RAL.b.prototype.setServiceId = function(a) {
            this.X(a) && this.c.d(RAL.a.q, a)
        };
        RAL.b.prototype.setPrice = function(a, b) {
            if (a !== g && null !== a && !isNaN(a) && !isNaN(parseInt(a, 10))) {
                var c = parseInt(a, 10),
                    d = g;
                if (b !== g) {
                    if (null === b || isNaN(b) || isNaN(parseInt(b,
                            10))) return;
                    d = parseInt(b, 10);
                    if (Number(d) && 0 > Number(d)) return
                }
                this.c.d(RAL.a.ma, String(c) + (d ? "." + String(d) : ""))
            }
        };
        RAL.b.prototype.setItemParams = function(a, b, c, d) {
            if (!(this.f(a) || this.f(b) || this.f(c) || this.f(d))) {
                var e = {};
                this.setPrice(c, d);
                c = this.c.get(RAL.a.ma);
                b = this.X(b) ? b : "";
                null !== a && "" !== a && "" !== b && null !== c && (this.Z.push(a), this.$.push(c), this.ca.push(b), e = {
                    num_items: this.ca,
                    price: this.$,
                    item: this.Z
                }, this.c.d(RAL.a.Wa, e))
            }
        };
        RAL.b.prototype.setVersion = function(a) {
            this.f(a) || this.c.d(RAL.a.VERSION,
                a)
        };
        RAL.b.prototype.setCurrencyCode = function(a) {
            "string" === typeof a && "" !== a && 3 <= a.length && this.Nb(a) && this.c.d(RAL.a.Pa, a.substr(0, 3))
        };
        RAL.b.prototype.setSearchQuery = function(a) {
            this.f(a) || this.c.d(RAL.a.ib, a)
        };
        RAL.b.prototype.setContentLanguage = function(a) {
            this.f(a) || this.c.d(RAL.a.Oa, a)
        };
        RAL.b.prototype.setCampaignCode = function(a) {
            this.Ob(a) && this.c.d(RAL.a.Ka, a)
        };
        RAL.b.prototype.setCheckPoints = function(a) {
            isNaN(parseInt(a, 10)) || this.c.d(RAL.a.Na, a)
        };
        RAL.b.prototype.setCheckout = function(a) {
            a = parseInt(a,
                10);
            switch (a) {
                case 10:
                case 20:
                case 30:
                case 40:
                case 50:
                    this.c.d(RAL.a.Ma, a)
            }
        };
        RAL.b.prototype.setRequestResult = function(a) {
            this.f(a) || this.c.d(RAL.a.fb, a)
        };
        RAL.b.prototype.tb = function(a) {
            var b = a.getMonth() + 1,
                c = a.getDate(),
                d = a.getHours(),
                e = a.getMinutes(),
                f = a.getSeconds();
            return a.getFullYear() + "-" + (10 > b ? "0" : "") + b + "-" + (10 > c ? "0" : "") + c + " " + (10 > d ? "0" : "") + d + ":" + (10 > e ? "0" : "") + e + ":" + (10 > f ? "0" : "") + f
        };
        RAL.b.prototype.setPageName = function(a) {
            this.f(a) || this.c.d(RAL.a.bb, a)
        };
        RAL.b.prototype.setPageType = function(a) {
            this.f(a) ||
                this.c.d(RAL.a.cb, a)
        };
        RAL.b.prototype.setGenre = function(a) {
            this.f(a) || this.c.d(RAL.a.Ra, a)
        };
        RAL.b.prototype.setProductId = function(a) {
            this.f(a) || this.c.d(RAL.a.eb, a)
        };
        RAL.b.prototype.setCustomParameters = function(a) {
            if (a) {
                var b = a;
                if (this.c.e(RAL.a.Q)) {
                    var c = this.c.get(RAL.a.Q);
                    RAL.aa(c, a) && (b = c)
                }
                this.c.d(RAL.a.Q, b)
            }
        };
        RAL.b.prototype.setItemsCount = function(a) {
            this.c.d(RAL.a.Va, a)
        };
        RAL.b.prototype.setViewImpressions = function(a) {
            this.c.d(RAL.a.kb, a)
        };
        RAL.b.prototype.setParameters = function(a) {
            this.c.setParameters(a)
        };
        RAL.b.prototype.appendParameters = function(a) {
            if (RAL.u(a))
                for (var b in a)
                    if (this.c.e(b)) {
                        var c = this.c.get(b);
                        "object" !== typeof c && (c = []);
                        this.c.d(b, [].concat(c).concat(a[b]))
                    } else "object" === typeof a[b] ? this.c.d(b, a[b]) : this.c.d(b, [a[b]])
        };
        RAL.b.prototype.setOptions = function(a) {
            if (RAL.t(a)) {
                for (var b = {}, c = 0, d = a.length; c < d; ++c) b[a[c]] = !0;
                this.za(b)
            }
        };
        RAL.b.prototype.Rb = function() {
            return e.navigator.userAgent !== g && -1 !== e.navigator.userAgent.search(/RAL/i)
        };
        RAL.b.prototype.detectFlashVersion = function() {
            if (document.images) {
                var a =
                    null,
                    b = !1;
                if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) {
                    var c = navigator.mimeTypes["application/x-shockwave-flash"];
                    c.enabledPlugin && c.enabledPlugin.description && (a = c.enabledPlugin.description, b = !0)
                } else navigator.plugins && "Shockwave Flash" in navigator.plugins && (a = navigator.plugins["Shockwave Flash"].description.match(/[\d]+/g).join("."), b = !0);
                try {
                    b || (a = (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version"))
                } catch (d) {}
                this.c.d(RAL.a.Qa, a)
            }
        };
        RAL.b.prototype.setCookieNames =
            function(a, b) {
                RAL.u(a) ? (RAL.a.L in a && (this.ga = a[RAL.a.L]), RAL.a.S in a && (this.ba = a[RAL.a.S])) : (b && RAL.m(b) && (this.ga = b), a && RAL.m(a) && (this.ba = a))
            };
        RAL.b.prototype.Fb = function() {
            return RAL.l(this.ga)
        };
        RAL.b.prototype.Bb = function() {
            return RAL.l(this.ba)
        };
        RAL.b.prototype.ub = function() {
            return navigator.browserLanguage ? navigator.browserLanguage : navigator.language ? navigator.language : RAL.qb
        };
        RAL.b.prototype.Ib = function() {
            return -(this.Aa.getTimezoneOffset() / 60)
        };
        RAL.b.prototype.Kb = function() {
            return navigator.userAgent
        };
        RAL.b.prototype.Eb = function() {
            return e.screen.width + "x" + e.screen.height
        };
        RAL.b.prototype.ta = function() {
            if ("Microsoft Internet Explorer" === navigator.appName) {
                var a = navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
                if (null !== a && (a = parseFloat(a[1]), !isNaN(a))) return a
            }
            return g
        };
        RAL.b.prototype.Hb = function() {
            var a;
            a = e.sessionStorage ? e.sessionStorage.getItem(RAL.G + RAL.sa) : this.Ba;
            a || (a = Math.floor(65536 * Math.random()), a = a.toString(16) + (17 * a & 65535).toString(16), e.sessionStorage ? e.sessionStorage.setItem(RAL.G +
                RAL.sa, a) : this.Ba = a);
            return a
        };
        RAL.b.prototype.zb = function() {
            var a = this.wa;
            a || (this.wa = a = RAL.N(document.location.href) + RAL.N(document.referrer) + RAL.N(navigator.userAgent) + RAL.N((new Date).getTime().toString()));
            return a
        };
        RAL.b.prototype.Db = function(a) {
            return 0 < a.navigationStart && 0 < a.domLoading ? a.domLoading - a.navigationStart : g
        };
        RAL.b.prototype.Ab = function(a) {
            return 0 < a.domLoading && 0 < a.domContentLoadedEventStart ? a.domContentLoadedEventStart - a.domLoading : g
        };
        RAL.b.prototype.yb = function(a) {
            return 0 < a.domContentLoadedEventStart &&
                0 < a.domComplete ? a.domComplete - a.domContentLoadedEventStart : g
        };
        RAL.b.prototype.vb = function() {
            if ("performance" in e && e.performance.timing) {
                var a = e.performance.timing,
                    b = {};
                b[RAL.a.gb] = this.Db(a);
                b[RAL.a.Ya] = this.Ab(a);
                b[RAL.a.Ja] = this.yb(a);
                return b
            }
            return g
        };
        RAL.b.prototype.xb = function() {
            return "performance" in e && e.performance.navigation ? e.performance.navigation.type : g
        };
        RAL.b.prototype.Pb = function() {
            return e === e.parent ? 0 : 1
        };
        RAL.b.prototype.setEvent = function(a, b) {
            RAL.m(a) && (this.c.d(RAL.a.B, a), a in RAL.M &&
                "boolean" == typeof b && (RAL.M[a] = b), a == this.Vb ? this.pageViewEvent() : this.da())
        };
        RAL.b.prototype.pageViewEvent = function() {
            !this.Rb() && (this.c.e(RAL.a.p) && this.c.e(RAL.a.q) || this.Mb()) && (this.za(), this.da())
        };
        RAL.b.prototype.za = function(a) {
            a && !a[RAL.a.URL] || this.c.d(RAL.a.URL, this.Jb());
            a && !a[RAL.a.na] || this.c.d(RAL.a.na, this.Cb());
            a && !a[RAL.a.pa] || this.c.d(RAL.a.pa, this.Hb());
            a && !a[RAL.a.qa] || this.c.d(RAL.a.qa, this.Ib());
            a && !a[RAL.a.oa] || this.c.d(RAL.a.oa, this.Eb());
            a && !a[RAL.a.ja] || this.c.d(RAL.a.ja,
                this.Qb());
            a && !a[RAL.a.ha] || this.c.d(RAL.a.ha, this.ub());
            a && !a[RAL.a.ra] || this.c.d(RAL.a.ra, this.Kb());
            a && !a[RAL.a.la] || this.c.d(RAL.a.la, this.Y);
            a && !a[RAL.a.VERSION] || this.c.d(RAL.a.VERSION, RAL.rb);
            if (!a || a[RAL.a.R]) null === this.h ? this.c.remove(RAL.a.R) : this.c.d(RAL.a.R, this.h);
            a && !a.perf || this.c.Ea(this.vb());
            a && !a[RAL.a.ka] || this.c.d(RAL.a.ka, this.xb());
            a && !a[RAL.a.ia] || this.c.d(RAL.a.ia, this.Pb())
        };
        RAL.b.prototype.Yb = function(a) {
            if (!this.V) return this.fa([a]) ? !0 : !1;
            try {
                var b = this.ua();
                b && (b.open("GET",
                    this.r + RAL.T + encodeURIComponent(a), !0), b.withCredentials = !0, b.send(""))
            } catch (c) {
                return !1
            }
            return !0
        };
        RAL.b.prototype.Zb = function(a) {
            try {
                document.createElement("img").src = this.r + RAL.T + encodeURIComponent(a) + "&t=" + (new Date).getTime()
            } catch (b) {
                return !1
            }
            return !0
        };
        RAL.b.prototype.ya = function(a) {
            try {
                if (0 === a.length) return !0;
                var b = 1 === a.length ? a[0] : "[" + a.join(",") + "]",
                    c = this.ua();
                c && (c.open("POST", this.r, !0), this.ta() || c.setRequestHeader("Content-type", "text/plain; charset=UTF-8"), c.withCredentials = !0, c.send(RAL.U +
                    b))
            } catch (d) {
                return !1
            }
            return !0
        };
        RAL.b.prototype.fa = function(a) {
            if (!document.body) return !1;
            if (0 === a.length) return !0;
            a = 1 === a.length ? a[0] : "[" + a.join(",") + "]";
            var b = document.createElement("iframe");
            b.name = RAL.G + String(Math.floor(2147483648 * Math.random()));
            b.style.display = "none";
            document.body.appendChild(b);
            if (b.contentWindow) {
                b.contentWindow.name = b.name;
                var c = document.createElement("form");
                c.target = b.name;
                c.action = this.r.replace("http:", "https:");
                c.method = "POST";
                c.encoding = c.enctype = "text/plain";
                c.style.display =
                    "none";
                var d = document.createElement("input");
                d.type = "hidden";
                d.name = RAL.U.replace("=", "");
                d.value = a;
                c.appendChild(d);
                document.body.appendChild(c);
                c.submit();
                document.body.removeChild(c);
                document.body.removeChild(b);
                return !0
            }
            return !1
        };
        RAL.b.prototype.Xb = function(a) {
            if (null === a || "object" !== typeof a || 0 === a.length) return !0;
            var b = !0;
            return b = 1 === a.length ? encodeURIComponent(a[0]).length < this.wb() ? e.XDomainRequest ? this.Zb(a[0]) : this.Yb(a[0]) : this.V && !e.XDomainRequest ? this.ya(a) : this.fa(a) : this.V && !e.XDomainRequest ?
                this.ya(a) : this.fa(a)
        };
        RAL.b.prototype.cc = function(a, b) {
            var c = null;
            if (a.e(RAL.a.p) && a.e(RAL.a.q)) {
                var d;
                d = /\bsplash\b/i.test(navigator.userAgent) ? "splash_agent" : this.Fb();
                a.d(RAL.a.L, d);
                a.d(RAL.a.S, this.Bb());
                this.$b(a);
                /\bra_uid\b/.test(document.cookie) && (d = RAL.l("ra_uid")) && (d = decodeURIComponent(d), (c = d.match(/^"(.*)"$/)) && (d = c[1]), (d = RAL.l("rat_uid", d)) && a.d(RAL.a.L, d));
                c = a.fc();
                d = this.W();
                d.length >= RAL.ob && (d = this.Ca(d) || d);
                c.length + d.join().length > RAL.pb && this.Ca(d);
                if (this.sb(c) && (c = null, b)) return
            }
            if (this.Y) {
                d =
                    this.W();
                c && d.push(c);
                for (var c = Math.min(d.length, RAL.nb), c = d.splice(0, c), e = !1, f = 0; f < this.j.length; ++f) this.r = this.j[f], e = this.Xb(c) || e;
                if (e) {
                    this.ea++;
                    for (f = 0; f < c.length; ++f) try {
                        RAL.eventLog.push(l.parse(c[f]))
                    } catch (g) {}
                    this.ac(d)
                }
            }
        };
        RAL.b.prototype.$b = function(a) {
            var b = ["Rg", "Rt", "BTA001"];
            if (RAL.t(b))
                for (var c, d, e = 0; e < b.length; e++) c = b[e], d = RAL.l(c), null !== d && a.d(c, decodeURIComponent(d))
        };
        RAL.b.prototype.O = function(a) {
            a = a || e.event;
            this.Y = "online" === a.type
        };
        RAL.b.prototype.Mb = function() {
            return this.v.e(this.w)
        };
        RAL.b.prototype.W = function() {
            return this.v.e(this.w) ? this.v.o(this.w).split("\t") : []
        };
        RAL.b.prototype.ac = function(a) {
            a && a instanceof Array && (0 == a.length ? this.v.I(this.w) : this.v.A(this.w, a.join("\t")))
        };
        RAL.b.prototype.sb = function(a) {
            var b = !1;
            a && (b = this.W(), b.push(a), b = this.v.A(this.w, b.join("\t")));
            return b
        };
        RAL.b.prototype.bc = function(a) {
            this.h = {};
            this.h[RAL.a.Xa] = a.coords.latitude;
            this.h[RAL.a.Za] = a.coords.longitude;
            this.h[RAL.a.Fa] = a.coords.accuracy;
            a.coords.speed && (this.h[RAL.a.jb] = a.coords.speed);
            a.coords.altitude && (this.h[RAL.a.Ha] = a.coords.altitude);
            a.coords.heading && (this.h[RAL.a.Ua] = a.coords.heading);
            a.coords.altitudeAccuracy && (this.h[RAL.a.Ia] = a.coords.altitudeAccuracy);
            this.h[RAL.a.Ta] = a.timestamp
        };
        RAL.b.prototype.Ub = function() {};
        RAL.b.prototype.getLocation = function() {
            navigator.geolocation && (this.h = null, navigator.geolocation.getCurrentPosition(this.H(this.bc, this, [this]), this.Ub))
        };
        RAL.b.prototype.setReportingInterval = function(a) {
            a = parseInt(a, 10);
            !isNaN(a) && 0 < a && (this.xa = a)
        };
        RAL.b.prototype.da =
            function() {
                this.c.e(RAL.a.p) && this.c.e(RAL.a.q) && (this.c.d(RAL.a.ab, this.zb()), this.c.d(RAL.a.$a, RAL.M), this.k.push(this.c), this.c = new RAL.g, this.Z = [], this.$ = [], this.ca = [])
            };
        RAL.b.prototype.Tb = function() {
            this.da();
            for (var a = 0, b = 1, c, d; b < this.k.length;) c = this.k[a], d = this.k[b], c.get(RAL.a.p) != d.get(RAL.a.p) || c.get(RAL.a.q) != d.get(RAL.a.q) || c.get(RAL.a.B) !== d.get(RAL.a.B) && d.get(RAL.a.B) || !c.gc() ? (a++, b++) : (c.Ea(d.ec()), this.k.splice(b, 1))
        };
        RAL.b.prototype.processQueue = function() {
            var a = this;
            if (RAL.t(RAL.callQueue)) try {
                for (var b; 0 <
                    RAL.callQueue.length;) {
                    b = RAL.callQueue.shift();
                    var c = b[0];
                    c in this && this[c].apply(this, b.slice(1))
                }
                for (this.Tb(); 0 < this.k.length;) {
                    var d = 1 == this.k.length;
                    this.cc(this.k.shift(), !d)
                }
            } catch (g) {}
            e.setTimeout(function() {
                a.processQueue()
            }, this.xa)
        };
        var l = e.JSON || {};
        "function" !== typeof l.stringify && (l.stringify = function(a, b, c) {
            function d(a, b) {
                var c, h = g,
                    p, l, q = f,
                    m, k = b[a];
                k && "object" === typeof k && "function" === typeof k.toJSON && (k = k.toJSON(a));
                "function" === typeof n && (k = n.call(b, a, k));
                switch (typeof k) {
                    case "string":
                        return e(k);
                    case "number":
                        return isFinite(k) ? String(k) : "null";
                    case "boolean":
                    case "null":
                        return String(k);
                    case "object":
                        if (!k) return "null";
                        f += r;
                        m = [];
                        if ("[object Array]" === Object.prototype.toString.apply(k)) {
                            l = k.length;
                            for (c = 0; c < l; c += 1) m[c] = d(c, k) || "null";
                            p = 0 === m.length ? "[]" : f ? "[\n" + f + m.join(",\n" + f) + "\n" + q + "]" : "[" + m.join(",") + "]";
                            f = q;
                            return p
                        }
                        if (n && "object" === typeof n)
                            for (l = n.length, c = 0; c < l; c += 1) "string" === typeof n[c] && (h = n[c], (p = d(h, k)) && m.push(e(h) + (f ? ": " : ":") + p));
                        else
                            for (h in k) Object.prototype.hasOwnProperty.call(k,
                                h) && (p = d(h, k)) && m.push(e(h) + (f ? ": " : ":") + p);
                        p = 0 === m.length ? "{}" : f ? "{\n" + f + m.join(",\n" + f) + "\n" + q + "}" : "{" + m.join(",") + "}";
                        f = q;
                        return p
                }
            }

            function e(a) {
                var b = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                b.lastIndex = 0;
                return b.test(a) ? '"' + a.replace(b, function(a) {
                        var b = {
                            "\b": "\\b",
                            "\t": "\\t",
                            "\n": "\\n",
                            "\f": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        }[a];
                        return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                    }) +
                    '"' : '"' + a + '"'
            }
            var f = "",
                n = g,
                r = "",
                h;
            if ("number" === typeof c)
                for (h = 0; h < c; h += 1) r += " ";
            else "string" === typeof c && (r = c);
            if ((n = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length)) throw Error("JSON.stringify");
            return d("", {
                "": a
            })
        });
        "function" !== typeof l.parse && (l.parse = function(a, b) {
            function c(a, d) {
                var e = g,
                    l, h = a[d];
                if (h && "object" === typeof h)
                    for (e in h) Object.prototype.hasOwnProperty.call(h, e) && (l = c(h, e), l !== g ? h[e] = l : delete h[e]);
                return b.call(a, d, h)
            }
            var d;
            d = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            a = String(a);
            d.lastIndex = 0;
            d.test(a) && (a = a.replace(d, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }));
            return /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ? (d = eval("(" + a + ")"), "function" === typeof b ? c({
                "": d
            }, "") : d) : null
        });
        (new RAL.b("https://rat.rakuten.co.jp/")).processQueue();
        RAL.live = !0
    }(window);
})(window);