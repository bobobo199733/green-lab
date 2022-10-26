/*
  entf-loader-ichiba-1.0.0.min.js
  Copyright (c) 2016 Rakuten, Inc.
  Date: 2016-01-15 22:45:16
*/
! function(a) {
    a(function() {
        var b = "",
            c = a("#ritNotification"),
            d = a("#notificationList"),
            e = a("#ritNotification");
        c.length && (b = c.attr("locid")), d.length && (b = d.attr("locid")), e.length && (b = e.attr("locid")), "undefined" != typeof b && "" !== b && a.ajax({
            url: "//r.r10s.jp/com/entf/asset/js/version/ichiba.js",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "_entfLoaderJsCallback",
            cache: !1,
            success: function(c) {
                var d = document.createElement("script");
                d.type = "text/javascript", d.src = c.locations[b], a("head").append(d)
            }
        })
    })
}(jQuery);