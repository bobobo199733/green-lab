"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [679], {
        36679: function(a, b, c) {
            c.r(b), c.d(b, {
                "default": function() {
                    return D
                }
            });
            var d = c(85893),
                e = c(67294),
                f = c(87462),
                g = c(45987);
            c(19626);
            var h = c(87379),
                i = c(35533),
                j = c(20741),
                k = c(29870),
                l = c(4552),
                m = c(28771),
                n = c(12309),
                o = (0, h.ZP)(i.Z).withConfig({
                    displayName: "NewsCard__StyledNewsCard",
                    componentId: "rui__zm0u2e-0"
                })([".card-link{&,&:hover{display:block;color:", ";text-decoration:none;}}.block-ellipsis{display:block;display:-webkit-box;max-width:100%;height:40px;margin:0 auto;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;}"], j.t.baseColors.text),
                p = function(a) {
                    var b = a.media,
                        c = a.label,
                        e = void 0 === c ? "real estate news" : c,
                        h = a.headline,
                        i = a.link;
                    i = void 0 === i ? {} : i;
                    var j = i.href,
                        p = i.rel,
                        q = i.target,
                        r = (0, g.Z)(i, ["href", "rel", "target"]),
                        s = a.legacyMediaRatio,
                        t = (0, g.Z)(a, ["media", "label", "headline", "link", "legacyMediaRatio"]);
                    return (0, d.jsx)(o, (0, f.Z)({}, t, {
                        children: (0, d.jsxs)("a", (0, f.Z)({
                            "aria-label": "See article for ".concat(h)
                        }, (0, f.Z)({
                            href: void 0 === j ? "#" : j,
                            rel: void 0 === p ? "noopener noreferrer" : p,
                            target: void 0 === q ? "_blank" : q
                        }, r), {
                            "data-testid": "card-link",
                            className: "card-link",
                            children: [(0, d.jsxs)(k.Z, {
                                ratio: s ? "50%" : void 0,
                                children: [b, (0, d.jsx)(l.c, {
                                    topLeftComponent: (0, d.jsx)(m.p, {
                                        styleType: "blue",
                                        "data-testid": "card-label",
                                        children: e
                                    }),
                                    overlayGradient: !1
                                })]
                            }), (0, d.jsx)(n.a, {
                                children: (0, d.jsx)("div", {
                                    className: "block-ellipsis",
                                    "data-testid": "card-headline",
                                    children: h
                                })
                            })]
                        }))
                    }))
                },
                q = c(66015),
                r = c(47913),
                s = c(11626),
                t = c(74757),
                u = c(27661),
                v = c(94768),
                w = c(25106),
                x = c(27614),
                y = c(40078),
                z = c(46406),
                A = function(a) {
                    var b = a.article,
                        c = a.pageType,
                        f = "RENT" === c,
                        g = (0, e.useCallback)(function() {
                            var a = {
                                linkName: "for_sale:".concat(c, ":").concat(y.g.NEWS_INSIGHTS.READ_MORE)
                            };
                            f && (a = {
                                linkName: "for_rent:landing:".concat(y.g.NEWS_INSIGHTS.READ_MORE),
                                isRentals: "y"
                            }), (0, v.u)(a)
                        }, [c]);
                    if (!b) return null;
                    var h = b.featured_image_url,
                        i = b.post_title,
                        j = b.category,
                        k = b.url,
                        l = b.image,
                        m = null == h ? void 0 : h.replace(/http:/, "https:"),
                        n = f ? l : m;
                    return (0, d.jsx)(z.yF, {
                        "data-testid": "head-line-wrapper",
                        hasTint: !0,
                        imgSrc: n,
                        imgAlt: i,
                        children: (0, d.jsxs)(z.PQ, {
                            className: "info",
                            children: [!f && (0, d.jsx)(z.eb, {
                                "data-testid": "head-line-label",
                                bold: !1,
                                children: j
                            }), (0, d.jsx)(z.fl, {
                                tag: "p",
                                "data-testid": "head-line-title",
                                children: i
                            }), (0, d.jsx)(z.Sn, {
                                "data-testid": "head-line-button",
                                href: k,
                                target: "_blank",
                                styleType: "SecondaryReverse",
                                onClick: g,
                                "aria-label": "Open More Trends",
                                children: "Read More"
                            })]
                        })
                    })
                },
                B = function(a) {
                    var b = a.news,
                        c = a.pageType,
                        e = c == w.Ss.FOR_RENT,
                        f = "for_sale:".concat(c, ":").concat(y.g.NEWS_INSIGHTS.ARTICLE_THUMB);
                    return e && (f = "for_rent:landing:".concat(y.g.NEWS_INSIGHTS.ARTICLE_THUMB)), (0, d.jsx)(z.y8, {
                        children: (0, d.jsx)(q.W, {
                            children: (0, d.jsx)(r.d, {
                                "data-testid": "news-cards-row",
                                children: b.map(function(a, b) {
                                    var c = a.post_title,
                                        e = a.category,
                                        g = a.image,
                                        h = a.url;
                                    return (0, d.jsx)(t.YT, {
                                        omtag: f,
                                        children: (0, d.jsx)(p, {
                                            headline: c,
                                            label: e,
                                            media: (0, d.jsxs)(d.Fragment, {
                                                children: [(0, d.jsx)(s.Y, {
                                                    imgSrc: g,
                                                    alt: c,
                                                    options: {
                                                        threshold: .25
                                                    }
                                                }), (0, d.jsx)("noscript", {
                                                    children: (0, d.jsx)("img", {
                                                        src: g,
                                                        alt: c
                                                    })
                                                })]
                                            }),
                                            link: {
                                                href: h,
                                                omtag: f
                                            },
                                            "data-testid": "news-card"
                                        })
                                    }, b)
                                })
                            })
                        })
                    })
                },
                C = e.memo(function(a) {
                    var b = a.news,
                        c = void 0 === b ? [] : b,
                        e = (0, u.U5)().pageType,
                        f = e == w.Ss.FOR_RENT;
                    if (!Array.isArray(c) || 0 === c.length) return null;
                    var g = c.find(function(a) {
                        return (0, x.v)(a)
                    });
                    f && (g = c.slice(-1).pop());
                    var h = c.filter(function(a) {
                        return !(0, x.v)(a)
                    });
                    return (0, d.jsxs)("div", {
                        children: [(0, d.jsx)(A, {
                            article: g,
                            pageType: e
                        }), (0, d.jsx)(B, {
                            news: h,
                            pageType: e
                        })]
                    })
                }),
                D = C
        },
        27614: function(a, b, c) {
            c.d(b, {
                v: function() {
                    return d
                }
            });
            var d = function(a) {
                return !!a && (!!a.is_featured || !!a.featured_image_url)
            }
        },
        40078: function(a, b, c) {
            c.d(b, {
                g: function() {
                    return d
                }
            });
            var d = {
                NEWS_INSIGHTS: {
                    READ_MORE: "news_and_insights:read_more",
                    ARTICLE_THUMB: "news_and_insights:article_thumb"
                }
            }
        },
        46406: function(a, b, c) {
            c.d(b, {
                yF: function() {
                    return u
                },
                y8: function() {
                    return v
                },
                eb: function() {
                    return w
                },
                fl: function() {
                    return x
                },
                Sn: function() {
                    return y
                },
                PQ: function() {
                    return z
                }
            });
            var d = c(87379),
                e = c(52061),
                f = c(20741),
                g = c(27233),
                h = c(52439),
                i = c(99223),
                j = c(66015),
                k = c(64078);

            function l(a, b) {
                return b || (b = a.slice(0)), Object.freeze(Object.defineProperties(a, {
                    raw: {
                        value: Object.freeze(b)
                    }
                }))
            }

            function m() {
                var a = l(["\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);\n"]);
                return m = function() {
                    return a
                }, a
            }

            function n() {
                var a = l(["\n  h2 {\n    color: white;\n    ", "\n  }\n  @media ", " {\n    min-height: 400px;\n    max-height: 600px;\n    height: 100%;\n  }\n"]);
                return n = function() {
                    return a
                }, a
            }

            function o() {
                var a = l(["\n  ", "\n  background: #f7f7f7;\n\n  picture {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n"]);
                return o = function() {
                    return a
                }, a
            }

            function p() {
                var a = l(["\n  && {\n    @media ", " {\n      font-size: 12px;\n    }\n  }\n"]);
                return p = function() {
                    return a
                }, a
            }

            function q() {
                var a = l(["\n  && {\n    max-width: 60%;\n    margin: 40px auto;\n    line-height: 1.42857143;\n    color: white;\n\n    @media ", " {\n      font-size: 32px;\n      margin: 20px 0;\n      max-width: 80%;\n    }\n  }\n"]);
                return q = function() {
                    return a
                }, a
            }

            function r() {
                var a = l(["\n  && {\n    font-size: 16px;\n    padding: 10px 24px;\n    line-height: 1.42857143;\n    height: auto;\n    ", ";\n    &:active,\n    &:focus,\n    &:hover {\n      background-color: transparent;\n      border-color: white;\n    }\n  }\n"]);
                return r = function() {
                    return a
                }, a
            }

            function s() {
                var a = l(["\n  && {\n    @media ", " {\n      padding-bottom: 3px;\n    }\n  }\n"]);
                return s = function() {
                    return a
                }, a
            }
            var t = (0, d.iv)(m()),
                u = (0, d.ZP)(e.V).withConfig({
                    componentId: "sc-763e2c70-0"
                })(n(), t, f.t.maxWidth.sm),
                v = d.ZP.div.withConfig({
                    componentId: "sc-763e2c70-1"
                })(o(), k.hS),
                w = (0, d.ZP)(g.k).withConfig({
                    componentId: "sc-763e2c70-2"
                })(p(), f.t.maxWidth.sm),
                x = (0, d.ZP)(h.f).withConfig({
                    componentId: "sc-763e2c70-3"
                })(q(), f.t.maxWidth.sm),
                y = (0, d.ZP)(i.z).withConfig({
                    componentId: "sc-763e2c70-4"
                })(r(), t),
                z = (0, d.ZP)(j.W).withConfig({
                    componentId: "sc-763e2c70-5"
                })(s(), f.t.maxWidth.sm)
        }
    }
])