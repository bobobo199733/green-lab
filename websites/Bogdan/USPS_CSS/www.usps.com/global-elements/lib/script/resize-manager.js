USPSRequireNS.define([], function() {
    var e = function() {
        var e = {
                resizeThrottle: 50,
                callbackThrottle: 100,
                breakpoints: [{
                    name: "tablet",
                    "min-width": 500
                }, {
                    name: "desktop",
                    "min-width": 959
                }]
            },
            t = [],
            n = null,
            r = function() {
                i(), u(), s(u)
            },
            i = function() {
                var r = null,
                    i = window.innerWidth || document.documentElement.clientWidth;
                window.onresize = function() {
                    var n = window.innerWidth || document.documentElement.clientWidth;
                    i != n && (clearTimeout(r), r = setTimeout(function() {
                        var e = 0;
                        for (; e < t.length; e++) o(e)
                    }, e.resizeThrottle)), i = n
                }
            },
            s = function(n) {
                t.push(n)
            },
            o = function(r) {
                setTimeout(function() {
                    t[r]()
                }, r * e.callbackThrottle)
            },
            u = function() {
                var r = 0,
                    i = window.innerWidth || document.documentElement.clientWidth;
                for (; r < e.breakpoints.length; r++) {
                    var s = e.breakpoints[r],
                        o = r + 1 < e.breakpoints.length ? e.breakpoints[r + 1] : {
                            name: "ERROR",
                            "min-width": 1e4
                        };
                    if (i >= s["min-width"] && i < o["min-width"]) {
                        n = s.name;
                        break
                    }
                }
            },
            a = function() {
                return n
            },
            f = function() {
                return n === "tablet" ? !0 : !1
            },
            l = function() {
                return n === "desktop" ? !0 : !1
            };
        return r(), {
            addCallback: s,
            getBreakpoint: a,
            isDesktop: l,
            isTablet: f
        }
    }();
    return e
});