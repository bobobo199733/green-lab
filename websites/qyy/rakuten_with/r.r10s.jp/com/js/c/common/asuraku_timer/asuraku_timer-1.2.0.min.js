/*
 asuraku_timer-1.2.0.js
 Copyright (c) 2016 Rakuten.Inc
 Date : 2016-12-11 20:51:08
*/
(function(c, m) {
    if ("function" === typeof m) {
        var g = function(c) {
            this.$root = c;
            this.$week = this.$day = this.$month = void 0;
            this.monthSelector = this.$root.attr("data-month") || this.defaults.selectors.month;
            this.daySelector = this.$root.attr("data-day") || this.defaults.selectors.day;
            this.weekSelector = this.$root.attr("data-week") || this.defaults.selectors.week;
            this.sessionStorageKey = this.$root.attr("data-session-storage-key") || this.defaults.sessionStorageKey;
            this.searchParameter = this.$root.attr("data-search-parameter") ||
                this.defaults.searchParameter;
            this.apiURL = this.$root.attr("data-api-url") || this.defaults.apiURL
        };
        g.prototype = {
            defaults: {
                selectors: {
                    month: ".asuraku-timer__month, [data-id=month]",
                    day: ".asuraku-timer__day, [data-id=day]",
                    week: ".asuraku-timer__week, [data-id=week]"
                },
                sessionStorageKey: "RJSCountDownTimer",
                searchParameter: "asurakutimertest",
                apiURL: "https://gettime.r10s.jp/"
            },
            getElements: function() {
                this.$month = this.$root.find(this.monthSelector);
                this.$day = this.$root.find(this.daySelector);
                this.$week = this.$root.find(this.weekSelector);
                this.showTimer()
            },
            showTimer: function() {
                var c = this;
                this.getCurrentDate(this.apiURL, this.sessionStorageKey, this.searchParameter, !0, function(d) {
                    var h = d.getFullYear(),
                        f = d.getMonth(),
                        b = d.getDate(),
                        e = d.getDay();
                    12 > d.getHours() ? (d = b + 1, e = (e + 1) % 7) : (d = b + 2, e = (e + 2) % 7);
                    f = new Date(h, f, d);
                    h = f.getMonth() + 1;
                    f = f.getDate();
                    c.$month.html(h);
                    c.$day.html(f);
                    c.$week.html("\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f".split("")[e])
                })
            },
            getCurrentDate: function(g, d, h, f, b) {
                function e(e) {
                    m.ajax({
                        url: g,
                        dataType: "jsonp",
                        scriptCharset: "utf-8",
                        cache: !0,
                        error: function() {
                            e.call(void 0, new Date)
                        },
                        success: function(a) {
                            var b = new Date;
                            b.setTime(1E3 * a.epoch);
                            n && k && f && (a = b.getTime() - (new Date).getTime(), sessionStorage.setItem(d, c.JSON.stringify({
                                offset: a
                            })));
                            e.call(void 0, b)
                        }
                    })
                }

                function l(b) {
                    var a = sessionStorage.getItem(d),
                        a = c.JSON.parse(a),
                        a = (new Date).getTime() + a.offset;
                    b.call(void 0, new Date(a))
                }

                function p(b) {
                    var a;
                    a = c.location.search.split(h + "=")[1].split(/-|:|\s/);
                    b.call(void 0, new Date(Date.UTC(+a[0], +a[1] - 1, +a[2], +a[3], +a[4], +a[5]) - 324E5))
                }
                var n, k;
                n = "JSON" in c && "parse" in c.JSON && "stringify" in c.JSON;
                try {
                    sessionStorage.setItem("session_storage_checker_data", "session_storage_checker_data"), sessionStorage.removeItem("session_storage_checker_data"), k = !0
                } catch (q) {
                    k = !1
                }(new RegExp("(\\?|\\&)" + h, "i")).test(c.location.search) ? p(b) : n && k ? sessionStorage.getItem(d) ? l(b) : e(b) : e(b)
            }
        };
        var l = m("#js-asuraku-timer, #asurakuDynamicArea");
        0 < l.length && (g = new g(l), g.getElements())
    }
})(window, window.jQuery);