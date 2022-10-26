USPSRequireNS.define(["require-jquery"], function(e) {
    USPSGlobals.Require.requireGlobals(["resize-manager"], function(a) {
        var t = {},
            o = function() {
                n(), r()
            },
            n = function() {
                t.body = e("body"), t.search = e(".search"), t.searchToggle = e(".global-header--search-button"), t.searchWrap = e(".global-header--search-wrapper"), t.searchTrack = e(".search--track")
            },
            r = function() {
                a.addCallback(d), t.search.on("submit", c), t.searchToggle.on("touchstart click", s), t.searchTrack.on("touchstart click", function(e) {
                    e.stopPropagation()
                }), Modernizr.touch && a.isTablet() && t.searchTrack.attr("aria-hidden", "true")
            },
            c = function() {
                var a = e(this),
                    t = e(".search--track-input", a).val();
                t = t.replace(/zip/gi, "ZIP");
                return i(t) ? (t.replace(/ /g, ""), setTimeout(function() {
                    window.top.location = "https://tools.usps.com/go/TrackConfirmAction?qtc_tLabels1=" + t
                }, 100)) : "" !== t ? setTimeout(function() {
                    endecaURL = "www.usps.com", -1 == document.location.hostname.indexOf("local") && -1 == document.location.hostname.indexOf("dusps") && -1 == document.location.hostname.indexOf("dev") || (endecaURL = "dusps.usps.com"), -1 == document.location.hostname.indexOf("tusps") && -1 == document.location.hostname.indexOf("sit") || (endecaURL = "tusps.usps.com"), -1 == document.location.hostname.indexOf("qusps") && -1 == document.location.hostname.indexOf("cat") && -1 == document.location.hostname.indexOf("stage") || (endecaURL = "stage-www.usps.com"), window.top.location = "https://" + endecaURL + "/search/results.htm?keyword=" + encodeURIComponent(t) + '&PNO=1'
                }, 100) : alert("Please enter a word or phrase to search for."), !1
            },
            s = function(a) {
                a.preventDefault(), a.stopPropagation(), t.searchWrap.toggleClass("active"), t.body.removeClass("menu-nav-open"), t.searchWrap.hasClass("active") ? (t.searchTrack.attr("aria-hidden", "false"), e("html").off().one("touchstart click", function() {
                    t.searchWrap.removeClass("active")
                })) : t.searchTrack.attr("aria-hidden", "true")
            },
            i = function(e) {
                var a = [/^\d{20}/, /^[a-zA-Z]{2}\d{9}[a-zA-Z]{2}/, /^[a-zA-Z]{1}\d{9}/, /^[a-zA-Z]{2}\d{9}/, /^\d{10}/, /^\d{22}/, /^\d{30}/, /^[H|h][a-zA-Z0-9]{19}\d{8}/],
                    t = 0,
                    o = a.length;
                for (e = e.replace(/\+ /g, ""); t < o; t++)
                    if (new RegExp(a[t]).test(e.split(" ").join(""))) return !0;
                return !1
            },
            d = function() {
                Modernizr.touch && a.isTablet() ? t.searchTrack.attr("aria-hidden", "true") : t.searchTrack.attr("aria-hidden", "false")
            };
        return o(), {
            init: o
        }
    })
});