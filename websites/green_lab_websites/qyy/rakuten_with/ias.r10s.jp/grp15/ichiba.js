(function() {
    function e(a) {
        var b = "";
        switch (a) {
            case "encoding":
                b = "encoding.min.js";
                break;
            case "frame":
                b = "ichiba_frame.js"
        }
        a = document.createElement("script");
        a.type = "text/javascript";
        var d = String(window.location.href),
            c = ""; - 1 != d.indexOf("?") && (c = "&" + d.substr(d.indexOf("?") + 1));
        a.src = "//ias.r10s.jp/grp15/lib/" + b + "?v=20170130" + c;
        return a
    }

    function g() {
        var a = document.createElement("iframe");
        a.style.display = "none";
        a.width = 0;
        a.height = 0;
        a.id = "grp15_ias";
        return a
    }

    function f(a, b, d) {
        "loaded" == a.readyState || "complete" ==
            a.readyState ? b() : a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent && (d ? a.attachEvent("onreadystatechange", function() {
                "loaded" != a.readyState && "complete" != a.readyState || b()
            }) : a.attachEvent("onload", b))
    }

    function h() {
        var a = g();
        document.body.appendChild(a);
        var b = e("encoding");
        var d = e("frame");
        var c = a.contentDocument || a.contentWindow.document;
        c.open();
        c.grp15_ias_prm = grp15_ias_prm;
        c.pageurl = window.location.href;
        c.pageref = window.document.referrer;
        c.write("<html><head></head><body></body></html>");
        c.body.appendChild(b);
        f(b, function() {
            c.body.appendChild(d)
        }, !0);
        c.close()
    }
    0 > window.navigator.userAgent.indexOf("MSIE 7.0") && 0 > window.navigator.userAgent.indexOf("MSIE 8.0") && 0 > window.navigator.userAgent.indexOf("MSIE 9.0") && 0 > window.navigator.userAgent.indexOf("MSIE 10.0") && 0 > window.navigator.userAgent.indexOf("Android 2.") && 0 > window.navigator.userAgent.indexOf("NetReader") && f(window, function() {
        h()
    }, !1)
})(this);