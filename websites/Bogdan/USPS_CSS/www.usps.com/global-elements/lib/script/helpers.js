USPSRequireNS.define(["require-jquery"], function(e) {
    var t = function() {
        var t = "placeholder" in document.createElement("input"),
            n = "placeholder" in document.createElement("textarea"),
            r = function() {
                e(document).ready(function() {
                    i()
                })
            },
            i = function() {
                s(), o()
            },
            s = function() {
                var i = e("input[type!=submit], textarea");
                if (!t || !n) t || (i.on("focus", function() {
                    var t = e(this),
                        n = t.val();
                    n === t.attr("placeholder") && t.val("")
                }), i.on("blur", function() {
                    var t = e(this),
                        n = t.val();
                    n === "" && t.val(t.attr("placeholder"))
                }), i.trigger("blur"))
            },
            o = function() {
                if (!Modernizr.svg) {
                    var n = e(".svg-image"),
                        r = 0;
                    for (; r < n.length; r++) {
                        var i = e(n[r]).attr("data-fallback");
                        e(n[r]).attr("src", i)
                    }
                }
            };
        return r(), {
            pollyfillElements: i
        }
    }();
    return t
});