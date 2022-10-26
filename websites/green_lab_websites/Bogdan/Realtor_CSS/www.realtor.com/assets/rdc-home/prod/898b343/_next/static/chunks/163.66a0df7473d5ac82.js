"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [163], {
        98163: function(a, b, c) {
            c.r(b), c.d(b, {
                "default": function() {
                    return w
                },
                setGeoTargetings: function() {
                    return v
                }
            });
            var d = c(85893),
                e = c(65988),
                f = c(67294),
                g = c(68228),
                h = c(30539),
                i = c(58860),
                j = c(75407),
                k = c(93647),
                l = c(25053),
                m = c(54808),
                n = c(86115),
                o = c(99678),
                p = new String(".ads-hp-banner div[id^='google_ads_iframe_'] iframe{vertical-align:middle!important;\nposition:absolute;\nbottom:0}");
            p.__hash = "39454d8bf3dd7705";
            var q = p;

            function r(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }

            function s(a, b, c) {
                return b in a ? Object.defineProperty(a, b, {
                    value: c,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : a[b] = c, a
            }

            function t(a) {
                return (t = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
                    return a.__proto__ || Object.getPrototypeOf(a)
                })(a)
            }

            function u(a, b) {
                return (u = Object.setPrototypeOf || function(a, b) {
                    return a.__proto__ = b, a
                })(a, b)
            }
            var v = function(a, b) {
                    var c, d = b.city || "";
                    d = h.pB(d);
                    var e = b.state_code || "",
                        f = b.postal_code || "",
                        g = b.neighborhood || "";
                    g = h.pB(g);
                    var k = [d, e].join("_");
                    if (b.search_type && "neighborhood" === b.search_type && b.neighborhood && (k = [g, k].join("_-_")), b.counties && b.counties[0] && (null === (c = b.counties[0]) || void 0 === c ? void 0 : c.fips)) {
                        var l = b.counties[0].fips.split("-");
                        i.p8(a, "COUNTYSRCH", l);
                        var m = j.L["C".concat(l)];
                        i.p8(a, "DMA", [m])
                    }
                    return i.p8(a, "st", [e]), i.p8(a, "zipsrch", [f]), i.p8(a, "citysrch", [d]), i.p8(a, "citystsrch", [k]), a
                },
                w = function(a) {
                    "use strict";
                    ! function(a, b) {
                        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function");
                        a.prototype = Object.create(b && b.prototype, {
                            constructor: {
                                value: a,
                                writable: !0,
                                configurable: !0
                            }
                        }), b && u(a, b)
                    }(x, a);
                    var b, c, h, j, p, w = (j = x, p = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (a) {
                            return !1
                        }
                    }(), function() {
                        var a, b, c, d, e = t(j);
                        if (p) {
                            var f = t(this).constructor;
                            d = Reflect.construct(e, arguments, f)
                        } else d = e.apply(this, arguments);
                        return b = this, (c = d) && ("object" == ((a = c) && "undefined" != typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a) || "function" == typeof c) ? c : (function(a) {
                            if (void 0 === a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return a
                        })(b)
                    });

                    function x() {
                        var a;
                        return ! function(a, b) {
                            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
                        }(this, x), a = w.apply(this, arguments), a.getPageTargetings = function(b, c) {
                            var d = {};
                            i.Ut(d, function(a) {
                                for (var b = 1; b < arguments.length; b++) {
                                    var c = null != arguments[b] ? arguments[b] : {},
                                        d = Object.keys(c);
                                    "function" == typeof Object.getOwnPropertySymbols && (d = d.concat(Object.getOwnPropertySymbols(c).filter(function(a) {
                                        return Object.getOwnPropertyDescriptor(c, a).enumerable
                                    }))), d.forEach(function(b) {
                                        s(a, b, c[b])
                                    })
                                }
                                return a
                            }({}, a.props, {
                                query: b,
                                deviceType: c
                            }));
                            var e = (0, o.g9)();
                            return e.query && v(d, e.query), d
                        }, a
                    }
                    return b = x, c = [{
                        key: "initiateHpAds",
                        value: function(a) {
                            var b, c = {
                                    HOME: "BUY",
                                    LANDING: "BUY",
                                    "PRE-APPROVAL": "FIN",
                                    RENT: "RENT",
                                    "JUST SOLD": "SOLD"
                                },
                                d = (0, l.VF)(navigator),
                                e = this.props.adsPath ? this.props.adsPath : "HP",
                                f = {
                                    adsSlots: (b = g.Z.suppressAds(m.E, a || {}), "HP" === e ? g.Z.suppressAds(b, {
                                        supads: "RIBBON1B"
                                    }) : g.Z.suppressAds(b, {
                                        supads: "RIBBON1"
                                    })),
                                    adsPagePath: "RDC4/".concat(e, "/").concat(c[this.props.pageType.toUpperCase()]),
                                    newRelicPageName: "HP",
                                    targetings: this.getPageTargetings(a, d),
                                    deviceType: d,
                                    query: a,
                                    pageName: "HP",
                                    propertyStatus: "".concat(c[this.props.pageType.toUpperCase()])
                                };
                            g.Z.registerDFPServices(f, m.N), g.Z.pageLoad()
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var a = {};
                            try {
                                if (window && window.location.search) {
                                    var b = window.location.search.substring(1);
                                    a = JSON.parse("{\"" + decodeURI(b).replace(/"/g, "\\\"").replace(/&/g, "\",\"").replace(/=/g, "\":\"") + "\"}")
                                }
                            } catch (c) {
                                console.warn("failed to get query paramters")
                            }
                            this.initiateHpAds(a), this.handleLoad()
                        }
                    }, {
                        key: "handleLoad",
                        value: function() {
                            k.gb(m.N.gptadslotsHomepageLB2), (0, n.L)("https://tagan.adlightning.com/realtor/op.js")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return (0, d.jsx)(f.Fragment, {
                                children: (0, d.jsx)(e.default, {
                                    id: q.__hash,
                                    children: q
                                })
                            })
                        }
                    }], r(b.prototype, c), h && r(b, h), x
                }(f.PureComponent)
        }
    }
])