(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [826],
  {
    1780: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var r = n(7294),
        o = n(5893);
      var i = function (e) {
        var t = this,
          n = e.children,
          i = e.data,
          a = e.totalSlideLength,
          c = e.lblPrefix,
          l = void 0 === c ? "" : c,
          s = (0, r.useState)(0),
          u = s[0],
          d = s[1],
          p = (0, r.useRef)(0),
          m = (0, r.useRef)(0);
        function f(e) {
          p.current = e.clientX || e.touches[0].clientX;
        }
        function v(e) {
          (m.current = e.clientX || e.changedTouches[0].clientX), h();
        }
        (0, r.useEffect)(
          function () {
            d(0);
          },
          [i]
        );
        var h = function () {
            var e = p.current - m.current;
            Math.abs(e) > 80 &&
              (document.body.classList.contains("rtl")
                ? e < 0
                  ? u + 1 < a && d(u + 1)
                  : u > 0 && d(u - 1)
                : e < 0
                ? u > 0 && d(u - 1)
                : u + 1 < a && d(u + 1));
          },
          g = function (e) {
            "number" === typeof e && d(e);
          };
        return (0, o.jsx)("div", {
          className: "rc20slide rc20fold2",
          onTouchStart: f,
          onTouchEnd: v,
          onMouseDown: f,
          onMouseUp: v,
          children: (0, o.jsx)("div", {
            className: "carousel-root",
            children: (0, o.jsxs)("div", {
              className: "rc20storypanel carousel carousel-slider",
              children: [
                (0, o.jsx)("div", {
                  className: "rc20card slider-wrapper axis-horizontal",
                  children: (0, o.jsx)("ul", {
                    className: " slider__root",
                    style: {
                      transform: "translate3d(".concat(
                        document.body.classList.contains("rtl")
                          ? 100 * u
                          : -100 * u,
                        "%, 0px, 0px)"
                      ),
                      transitionDuration: "".concat(500, "ms"),
                    },
                    children: n,
                  }),
                }),
                i.length > 1
                  ? (function (e) {
                      return (0, o.jsxs)("div", {
                        className: "rh02w6",
                        children: [
                          (0, o.jsx)("ul", {
                            className:
                              "rh02nav control-dots slick-animated-dots init",
                            children:
                              Array.isArray(e) &&
                              e.map(function (e, n) {
                                return (0, o.jsx)(
                                  "li",
                                  {
                                    className: u === n ? "slick-active" : "",
                                    onMouseDown: function (e) {
                                      return e.preventDefault();
                                    },
                                    onClick: g.bind(t, n),
                                    value: n,
                                    children: (0, o.jsx)("button", {
                                      type: "button",
                                      "aria-label": "Slide ".concat(n + 1),
                                      "aria-current": u === n,
                                      "data-lbl": ""
                                        .concat(l || "", "view-slide-")
                                        .concat(n + 1),
                                      children: (0, o.jsx)("span", {}),
                                    }),
                                  },
                                  n
                                );
                              }),
                          }),
                          Array.isArray(e) &&
                            (null === e || void 0 === e ? void 0 : e.length) >
                              1 &&
                            (0, o.jsx)("div", {
                              role: "region",
                              id: "slideAnnounce",
                              "aria-live": "polite",
                              className: "visuallyHidden",
                              children:
                                u > -1
                                  ? ""
                                      .concat(u + 1, " of ")
                                      .concat(
                                        null === e || void 0 === e
                                          ? void 0
                                          : e.length,
                                        " slide"
                                      )
                                  : "",
                            }),
                        ],
                      });
                    })(i)
                  : null,
              ],
            }),
          }),
        });
      };
    },
    3657: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return rt;
          },
          default: function () {
            return ot;
          },
        });
      var r = n(6898),
        o = n(3626),
        i = n(7294),
        a = n(9008),
        c = n.n(a),
        l = n(29),
        s = n(6835),
        u = n(9499),
        d = n(7794),
        p = n.n(d),
        m = n(2993),
        f = n(5071),
        v = n(5390),
        h = n(6400),
        g = n(5516),
        y = n(3421),
        b = n(3438),
        x = n(1163),
        w = n(2052),
        S = n(3030),
        j = n(5893);
      function _(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var E = function (e) {
        var t = e.isPanelOpen,
          n = e.exporeRefBtn,
          r = t ? { "aria-hidden": !0, tabIndex: -1 } : {},
          o = (0, i.useContext)(S.N),
          a = o || {},
          c = a.prodnav_exploreProd,
          l = a.prodnav_apps_cta,
          s = a.prodnav_infra_cta;
        function u(t) {
          var n = t || {},
            r = n.type,
            o = n.code,
            i = n.detail,
            a = n.buttons,
            c =
              ("keydown" == r &&
                ("Enter" === o || " " === o || "Space" === o)) ||
              (1 == i && 1 == a);
          ("keydown" == r && "Enter" !== o && "Space" !== o) ||
            e.onChange(
              t,
              "0E3B648885C24A02B5B2676BEB82C7E9",
              "",
              "rc20p1-open",
              null,
              c
            );
        }
        var d = l && s ? l : c;
        return (0, j.jsx)("div", {
          id: "rc20p1",
          className: "rh02panel rh02p1",
          "data-trackas": "rc20:panel1",
          children: (0, j.jsxs)("div", {
            className: "rh02w2 darktheme rh02defpanel",
            children: [
              (0, j.jsx)("div", {
                className: "rh02w5",
                children: (0, j.jsxs)(
                  "div",
                  C(
                    C(
                      {
                        onClick: u,
                        className: "rh02-pcontent focus-visible",
                        "data-lbl": "panel1-home-apps-content-area",
                      },
                      r
                    ),
                    {},
                    {
                      children: [
                        (0, j.jsx)("h1", {
                          className: "rh02-ttl oracleprefix",
                          dangerouslySetInnerHTML: {
                            __html:
                              o.prodnav_p2_title || "Cloud<b>Applications</b>",
                          },
                        }),
                        (0, j.jsx)("div", {
                          className: "rh02-sub",
                          children:
                            o.prodnav_p2_subtitle ||
                            "Complete suite of integrated applications",
                        }),
                        (0, j.jsx)("div", {
                          className: "rh02-cta",
                          children: (0, j.jsx)("div", {
                            className: "obttns",
                            children: (0, j.jsx)("div", {
                              children: (0, j.jsxs)("button", {
                                onKeyDown: u,
                                ref: n,
                                onClick: u,
                                "data-lbl": "panel1-home-apps-learn-more",
                                children: [
                                  d || "Explore our products",
                                  (0, j.jsx)("span", {
                                    className: "visuallyHidden",
                                    children: ",",
                                  }),
                                  (0, j.jsx)("span", {
                                    className: "visuallyHidden",
                                    dangerouslySetInnerHTML: {
                                      __html:
                                        o.prodnav_p2_title ||
                                        "Cloud<b>Applications</b>",
                                    },
                                  }),
                                  (0, j.jsx)("span", {
                                    className: "visuallyHidden",
                                    children:
                                      o.prodnav_p2_subtitle ||
                                      "Complete suite of integrated applications",
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }
                  )
                ),
              }),
              (0, j.jsx)("div", { className: "rh02overlay" }),
            ],
          }),
        });
      };
      function k(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var M = function (e) {
          var t = (0, i.useContext)(S.N),
            n = t || {},
            r = n.prodnav_exploreProd,
            o = n.prodnav_apps_cta,
            a = n.prodnav_infra_cta,
            c = e.isPanelOpen ? { "aria-hidden": !0, tabIndex: -1 } : {};
          function l(t) {
            var n = t || {},
              r = n.type,
              o = n.code,
              i = n.detail,
              a = n.buttons,
              c =
                ("keydown" == r &&
                  ("Enter" === o || " " === o || "Space" === o)) ||
                (1 == i && 1 == a);
            ("keydown" == r && "Enter" !== o && "Space" !== o) ||
              e.onChange(
                t,
                "5A0B0A9213D344628F4BBA4029291F4E",
                "",
                "rc20p2-open",
                null,
                c
              );
          }
          var s = o && a ? a : r;
          return (0, j.jsx)("div", {
            id: "rc20p2",
            className: "rh02panel rh02p2",
            "data-trackas": "rc20:panel2",
            onKeyDown: e.onKeyDown,
            children: (0, j.jsxs)("div", {
              className: "rh02w2 darktheme rh02defpanel",
              children: [
                (0, j.jsx)("div", {
                  className: "rh02w5",
                  children: (0, j.jsxs)(
                    "div",
                    O(
                      O(
                        {
                          onClick: l,
                          className: "rh02-pcontent focus-visible",
                          "data-lbl": "panel2-home-oci-content-area",
                        },
                        c
                      ),
                      {},
                      {
                        children: [
                          (0, j.jsx)("h1", {
                            className: "rh02-ttl oracleprefix",
                            dangerouslySetInnerHTML: {
                              __html:
                                t.prodnav_p1_title ||
                                "Cloud<b>Infrastructure</b>",
                            },
                          }),
                          (0, j.jsx)("div", {
                            className: "rh02-sub",
                            children:
                              t.prodnav_p1_subtitle ||
                              "Secure, high-performance platform for all your workloads",
                          }),
                          (0, j.jsx)("div", {
                            className: "rh02-cta",
                            children: (0, j.jsx)("div", {
                              className: "obttns",
                              children: (0, j.jsx)("div", {
                                children: (0, j.jsxs)("button", {
                                  onKeyDown: l,
                                  onClick: l,
                                  "data-lbl": "panel2-home-oci-learn-more",
                                  children: [
                                    s || "Explore our products",
                                    (0, j.jsx)("span", {
                                      className: "visuallyHidden",
                                      children: ",",
                                    }),
                                    (0, j.jsx)("span", {
                                      className: "visuallyHidden",
                                      dangerouslySetInnerHTML: {
                                        __html:
                                          t.prodnav_p1_title ||
                                          "Cloud<b>Infrastructure</b>",
                                      },
                                    }),
                                    (0, j.jsx)("span", {
                                      className: "visuallyHidden",
                                      children:
                                        t.prodnav_p1_subtitle ||
                                        "Secure, high-performance platform for all your workloads",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        ],
                      }
                    )
                  ),
                }),
                (0, j.jsx)("div", { className: "rh02overlay" }),
              ],
            }),
          });
        },
        P = n(6802),
        N = n(9592),
        I = n.n(N),
        q = n(1780),
        D = n(77),
        T = n(2385);
      function L(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var R = P.MY.useFetchProductAssets,
        F = P.MY.useFetchQuote;
      function B(e) {
        var t = e.assetId,
          n = e.initialData,
          r = e.edgeCacheApiName,
          o = (0, i.useContext)(v.Z).isPreview,
          a = (0, i.useState)(null),
          c = a[0],
          l = a[1],
          u = c || {},
          d = u.asset_image,
          p = u.link,
          m = u.reference,
          f = u.title,
          h = u.asset_quote,
          g = u.disclaimer,
          b = d && d.id,
          w = (0, i.useContext)(S.N),
          _ = (0, x.useRouter)().locale,
          C = { localeParams: (0, y.aP)(_) };
        function E(e) {
          var t,
            n,
            r = null === e || void 0 === e ? void 0 : e.split("\n");
          return (
            (null ===
              (n = r =
                null === (t = r) || void 0 === t
                  ? void 0
                  : t.filter(function (e) {
                      return (
                        (null === e || void 0 === e ? void 0 : e.length) > 0
                      );
                    })) || void 0 === n
              ? void 0
              : n.reduce(function (e, t) {
                  return e + "<p>".concat(t, "</p>");
                }, "")) || null
          );
        }
        function k(e) {
          if (e && e.fields) {
            var t,
              n =
                null === e ||
                void 0 === e ||
                null === (t = e.fields) ||
                void 0 === t
                  ? void 0
                  : t.disclaimer;
            l(
              A(
                A({}, null === e || void 0 === e ? void 0 : e.fields),
                {},
                { disclaimer: n ? E(n) : null }
              )
            );
          } else l(null);
        }
        (0, i.useEffect)(
          function () {
            n && k(n);
          },
          [n]
        );
        var O = R({
            query: { params: A({ id: n ? null : t }, C) },
            swrOptions: { revalidateOnFocus: !1 },
            opts: { mgmtPreview: o, cacheTags: r ? [r] : [] },
          }),
          M = (0, s.Z)(O, 2),
          P = M[0].data,
          N = M[1];
        return (
          (0, i.useEffect)(
            function () {
              P && k(P);
            },
            [P]
          ),
          (0, i.useEffect)(function () {
            return function () {
              N.cancel("cancel pending fetch calls of product asset");
            };
          }, []),
          c &&
            (0, j.jsxs)("div", {
              children: [
                b &&
                  f &&
                  (0, j.jsx)("div", { className: "title", children: f }),
                b
                  ? (0, j.jsx)(T.Z, {
                      alt: "",
                      imageId: b,
                      classes: ["reportImage"],
                    })
                  : null,
                (0, j.jsx)(H, { quote: h }),
                (m || p) &&
                  (0, j.jsx)("div", {
                    className: "reportBtn obttns",
                    children: (0, j.jsx)("div", {
                      children: (0, j.jsx)("a", {
                        href: m || p,
                        children: w.prodnav_readReport || "Read the report",
                      }),
                    }),
                  }),
                g &&
                  (0, j.jsx)("small", {
                    className: "rc20disclaimer",
                    dangerouslySetInnerHTML: { __html: g },
                  }),
              ],
            })
        );
      }
      var Z = (0, i.memo)(B);
      function H(e) {
        var t,
          n,
          r,
          o,
          a,
          c,
          l = e.quote,
          u = (0, i.useContext)(v.Z).isPreview,
          d = (0, x.useRouter)().locale,
          p = { localeParams: (0, y.aP)(d, !1) },
          m = F({
            query: {
              params: A(
                {
                  id:
                    null !== l && void 0 !== l && l.fields
                      ? null
                      : null === l || void 0 === l
                      ? void 0
                      : l.id,
                },
                p
              ),
            },
            swrOptions: { revalidateOnFocus: !1 },
            opts: { mgmtPreview: u, cacheTags: [] },
          }),
          f = (0, s.Z)(m, 2),
          h = f[0].data,
          g = f[1];
        (0, i.useEffect)(function () {
          return function () {
            null === g ||
              void 0 === g ||
              g.cancel("cancel pending fetch calls of quote");
          };
        }, []);
        var b =
            (null === h ||
            void 0 === h ||
            null === (t = h.fields) ||
            void 0 === t
              ? void 0
              : t.quote) ||
            (null === l ||
            void 0 === l ||
            null === (n = l.fields) ||
            void 0 === n
              ? void 0
              : n.quote) ||
            null,
          w =
            (null === h ||
            void 0 === h ||
            null === (r = h.fields) ||
            void 0 === r
              ? void 0
              : r.quote_attribution) ||
            (null === l ||
            void 0 === l ||
            null === (o = l.fields) ||
            void 0 === o
              ? void 0
              : o.quote_attribution) ||
            null,
          S =
            (null === h ||
            void 0 === h ||
            null === (a = h.fields) ||
            void 0 === a
              ? void 0
              : a.quote_attribution_2) ||
            (null === l ||
            void 0 === l ||
            null === (c = l.fields) ||
            void 0 === c
              ? void 0
              : c.quote_attribution_2) ||
            null;
        return (0, j.jsxs)(j.Fragment, {
          children: [
            b && (0, j.jsx)("div", { className: "rc20quote-lg", children: b }),
            w &&
              (0, j.jsx)("div", {
                className: "rc20attribution-lg",
                children: w,
              }),
            S &&
              (0, j.jsx)("div", {
                className: "rc20attribution-lg",
                children: S,
              }),
          ],
        });
      }
      function W(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? W(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : W(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var U = P.MY.useFetchQuote;
      function G(e) {
        var t = e.quoteId,
          n = e.initialData,
          r = e.edgeCacheApiName,
          o = (0, i.useContext)(v.Z).isPreview,
          a = (0, i.useState)(null),
          c = a[0],
          l = a[1],
          u = (0, x.useRouter)().locale,
          d = { localeParams: (0, y.aP)(u) },
          p = (0, i.useRef)(!1);
        function m(e) {
          var t = null;
          e && e.fields && (t = z({}, e.fields)), p.current && l(t);
        }
        (0, i.useEffect)(function () {
          return (
            (p.current = !0),
            function () {
              p.current = !1;
            }
          );
        }, []),
          (0, i.useEffect)(
            function () {
              n && m(n);
            },
            [n]
          );
        var f = U({
            query: { params: z({ id: n ? null : t }, d) },
            swrOptions: { revalidateOnFocus: !1 },
            opts: { mgmtPreview: o, cacheTags: r ? [r] : [] },
          }),
          h = (0, s.Z)(f, 2),
          g = h[0].data,
          b = h[1];
        return (
          (0, i.useEffect)(
            function () {
              g && m(g);
            },
            [g]
          ),
          (0, i.useEffect)(function () {
            return function () {
              null === b ||
                void 0 === b ||
                b.cancel("cancel pending fetch calls of quote");
            };
          }, []),
          c &&
            (0, j.jsxs)(j.Fragment, {
              children: [
                c.quote && '"'.concat(c.quote, '"'),
                (0, j.jsxs)("div", {
                  className: "rc20attribution",
                  children: [
                    (0, j.jsx)("div", { children: c.quote_attribution }),
                    (0, j.jsx)("div", { children: c.quote_attribution_2 }),
                  ],
                }),
              ],
            })
        );
      }
      var X = (0, i.memo)(G);
      var V = function () {
        return (0, j.jsx)("div", {
          className: "panelLoader",
          children: (0, j.jsxs)("ul", {
            className: "loader",
            children: [
              (0, j.jsx)("li", { className: "heading" }),
              (0, j.jsx)("br", {}),
              (0, j.jsx)("li", {}),
              (0, j.jsx)("li", {}),
              (0, j.jsx)("li", {}),
              (0, j.jsx)("li", {}),
              (0, j.jsx)("li", { className: "info" }),
            ],
          }),
        });
      };
      function Y(e) {
        var t = e.product,
          n = void 0 === t ? {} : t,
          r = e.color,
          o = e.activeIndex,
          a = e.panelRef,
          c = e.closeEditScreen,
          l = e.initialData,
          s = e.slideNo,
          u = e.totalLength,
          d = e.currentTaxonomySelected,
          p = e.edgeCacheApiName,
          m = d ? (null === n || void 0 === n ? void 0 : n.quotes) : {},
          f = Array.isArray(m) && m.length > 0 ? m[0] : null,
          h = (0, i.useContext)(v.Z),
          g = h.isPreview,
          y = h.viewport,
          b = (0, i.useContext)(S.N),
          x = function (e) {
            switch (e) {
              case "SH-ProductAsset":
                return (0, j.jsx)("div", {
                  className: "rc20report",
                  children: (0, j.jsx)(Z, {
                    assetId: f.id,
                    initialData: l,
                    edgeCacheApiName: p,
                  }),
                });
              case "SH-Quote":
                return (0, j.jsx)("div", {
                  className: "rc20quote",
                  children: (0, j.jsx)(
                    X,
                    { quoteId: f.id, initialData: l, edgeCacheApiName: p },
                    f.id
                  ),
                });
              default:
                return null;
            }
          };
        function w() {
          return n && null !== n && void 0 !== n && n.isLoading
            ? (0, j.jsx)(V, {})
            : (0, j.jsxs)(j.Fragment, {
                children: [
                  n.title
                    ? (0, j.jsx)("h3", {
                        className: "rc20title",
                        children: n.title,
                      })
                    : "",
                  (0, j.jsx)("div", {
                    className: "rc20overview",
                    children: n.overview
                      ? (0, j.jsx)("span", {
                          dangerouslySetInnerHTML: { __html: n.overview },
                        })
                      : null,
                  }),
                  f && "SH-Quote" === f.type && x("SH-Quote"),
                  n.link &&
                    (0, j.jsx)("div", {
                      className: "rc20cta",
                      children: (0, j.jsx)("div", {
                        className: "obttns",
                        children: (0, j.jsx)("div", {
                          children: (0, j.jsx)("a", {
                            href: n.link,
                            "data-lbl": n.data_label,
                            children: b.prodnav_learnMore || "Learn More",
                          }),
                        }),
                      }),
                    }),
                  f && "SH-ProductAsset" === f.type && x("SH-ProductAsset"),
                  (0, j.jsx)("div", { className: "rc20bottomspacing" }),
                ],
              });
        }
        return (0, j.jsx)("div", {
          className: "rc20slide rc20fold1 "
            .concat(-1 === o ? "active" : "", " ")
            .concat(o + 2 === u && s === u - 2 ? "second-last" : ""),
          ref: a,
          "data-trackas": "rc20:panel2",
          children: (0, j.jsxs)("div", {
            className: "rc20infopanel darktheme",
            style: { background: r },
            children: [
              Object.keys(n).length > 0 &&
                g &&
                (0, j.jsx)("span", {
                  className: "icn-edit rc20edit",
                  onClick: c,
                }),
              (0, j.jsx)("div", {
                className: "rc20content",
                children: y.isMobile
                  ? (0, j.jsx)(j.Fragment, { children: w() })
                  : (0, j.jsx)(D.Z, { scrollbarMaxSize: 100, children: w() }),
              }),
            ],
          }),
        });
      }
      var K = (0, i.memo)(Y),
        Q = n(81);
      function $(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? $(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ee = P.MY.useFetchProductAssetorStoryContentDetails,
        te = P.MY.useFetchProductTaxonomy;
      function ne(e) {
        var t = e.slideNo,
          n = e.contentInfo,
          r = e.activeIndex,
          o = e.dataTrackas,
          a = e.parentPanelRef,
          c = e.initialData,
          l = e.panelBackground,
          u = e.edgeCacheApiName,
          d = (0, i.useState)(null),
          p = d[0],
          m = d[1],
          f = (0, i.useState)(!1),
          h = f[0],
          g = f[1],
          w = i.createRef(),
          S = (0, i.useState)(!1),
          _ = S[0],
          C = S[1],
          E = (0, i.useContext)(v.Z),
          k = E.oceIntegrator,
          O = E.viewport,
          M = E.isPreview,
          P = (0, i.useRef)(!1),
          N = (0, x.useRouter)(),
          I = N.locale,
          q = N.defaultLocale,
          L = { localeParams: (0, y.aP)(I, !1) },
          A = I !== q ? 270 : 225;
        function R(e) {
          var t = null;
          e && (t = $(e)), P.current && t && m(J({}, t));
        }
        (0, i.useEffect)(function () {
          return (
            (P.current = !0),
            function () {
              P.current = !1;
            }
          );
        }, []),
          (0, i.useEffect)(
            function () {
              r === t && g(!0);
            },
            [r]
          ),
          (0, i.useEffect)(
            function () {
              c && C(!0);
            },
            [c]
          ),
          (0, i.useEffect)(
            function () {
              var e;
              return (
                (function () {
                  var t = {
                    root: a ? a.current : null,
                    rootMargin: "0px",
                    threshold: 0.02,
                  };
                  try {
                    (e = new IntersectionObserver(function (e, t) {
                      e.forEach(function (e) {
                        e.isIntersecting && n.id && !p && C(!0);
                      });
                    }, t)),
                      w && w.current && e.observe(w.current);
                  } catch (r) {
                    C(!0);
                  }
                })(),
                function () {
                  e && w && w.current && e.unobserve(w.current);
                }
              );
            },
            [n]
          ),
          (0, i.useEffect)(
            function () {
              c && R(c);
            },
            [c]
          );
        var F = n.id,
          B = n.type,
          Z = ee({
            query: {
              params: J(
                {
                  id: !c && _ ? F : null,
                  type: B,
                  getMasterAssetInfo: I !== q,
                },
                L
              ),
            },
            swrOptions: { revalidateOnFocus: !1 },
            opts: { mgmtPreview: M, cacheTags: u ? [u] : [] },
          }),
          H = (0, s.Z)(Z, 2),
          W = H[0],
          z = W.data,
          U = W.error,
          G = H[1];
        (0, i.useEffect)(
          function () {
            z ? R(z) : null !== U && void 0 !== U && U.status && m({});
          },
          [z, U]
        ),
          (0, i.useEffect)(function () {
            return function () {
              G.cancel("cancel pending fetch calls of public story asset");
            };
          }, []);
        var X = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return (
              "string" === typeof e &&
                e.length > A &&
                ((e = e.slice(0, A)),
                (e = "".concat(
                  e.substring(0, e.lastIndexOf(" ")).replace(/[,.]\s*$/, ""),
                  " ..."
                ))),
              e
            );
          },
          Y = function () {
            var e =
              "url(https://www.oracle.com/a/ocom/img/rh02-storyhub-infrastructure-0".concat(
                (0, Q.U)(),
                ".jpg)"
              );
            return (
              "string" === typeof l.color &&
                "#33553C" === l.color &&
                (e =
                  "url(https://www.oracle.com/a/ocom/img/rh02-storyhub-applications-0".concat(
                    (0, Q.U)(),
                    ".jpg)"
                  )),
              e
            );
          },
          K = function (e) {
            var t = /^(.*?)-tier1/i.exec(e),
              n = t && t[1] ? t[1] : null;
            return n
              ? "".concat(b.uC).concat(n)
              : ""
                  .concat("https://www.oracle.com")
                  .concat("/product-navigator");
          },
          $ = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = {
                type: e.type,
                link: null,
                title: null,
                overview: null,
                image: null,
                customerLogo: null,
                customerName: null,
                ctaButtons: e.fields && e.fields.cta_buttons,
                topProducts: null,
                dataLabel: (e.fields && e.fields.data_label) || null,
              };
            return (
              "SH-PublicStory" === e.type
                ? (e.fields && e.fields.Tier1_OCEStory
                    ? ((t.tier1_reference = !0),
                      (t.link = K(e.masterSlug || e.slug)))
                    : (t.link = e.masterSlug || e.slug),
                  e.fields &&
                    ((t.title = e.fields.story_headline),
                    (t.overview = e.fields.story_summary),
                    (t.logo =
                      e.fields.story_customer_logo &&
                      e.fields.story_customer_logo.id
                        ? e.fields.story_customer_logo.id
                        : null),
                    (t.image =
                      e.fields.story_card_image && e.fields.story_card_image.id
                        ? e.fields.story_card_image.id
                        : null),
                    (t.customerName = e.fields.customer_name),
                    (t.topProducts = e.fields.story_top_products_portfolio)))
                : e.fields &&
                  ((t.link = e.fields.link),
                  (t.title = e.fields.title),
                  (t.overview = e.fields.overview),
                  (t.logo =
                    e.fields.logo && e.fields.logo.id
                      ? e.fields.logo.id
                      : null),
                  (t.image =
                    e.fields.image && e.fields.image.id
                      ? e.fields.image.id
                      : null),
                  (t.subtitle = e.fields.subtitle)),
              t
            );
          };
        function te() {
          return (0, j.jsxs)(j.Fragment, {
            children: [
              p.logo
                ? (0, j.jsx)("div", {
                    className: "rc20logo",
                    children: (0, j.jsx)(T.Z, {
                      imageId: p.logo,
                      alt:
                        (null === p || void 0 === p
                          ? void 0
                          : p.customerName) || "",
                    }),
                  })
                : "",
              p.title
                ? (0, j.jsx)("h3", {
                    className: "rc20title",
                    children: p.title,
                  })
                : "",
              p.subtitle ? (0, j.jsx)("p", { children: p.subtitle }) : null,
              (0, j.jsx)("div", {
                className: "rc20overview",
                dangerouslySetInnerHTML: { __html: X(p.overview) },
              }),
              p.topProducts &&
                (0, j.jsx)("div", {
                  className: "rc20refs",
                  children: p.topProducts.map(function (e, t) {
                    return (0,
                    j.jsx)(ie, { portfolio: e, edgeCacheApiName: u }, t);
                  }),
                }),
              (0, j.jsx)("div", {
                className: "rc20cta",
                children: (0, j.jsxs)("div", {
                  className: "obttns",
                  children: [
                    (0, j.jsx)(oe, {
                      type: p.type,
                      link: p.link,
                      reference: p.tier1_reference,
                      dataLabel: p.dataLabel,
                    }),
                    p.ctaButtons &&
                      p.ctaButtons.map(function (e, t) {
                        return (0,
                        j.jsx)("div", { className: "obttn1", children: (0, j.jsxs)("a", { href: e.Link || "#", target: e.NewTab ? "_blank" : null, "data-lbl": e.DataLbl, rel: "noreferrer", children: [e.Text, e.NewTab && (0, j.jsx)("span", { className: "sr-only", children: ", opens in new tab" })] }) }, t);
                      }),
                  ],
                }),
              }),
              (0, j.jsx)("div", { className: "rc20bottomspacing" }),
            ],
          });
        }
        var ne =
          p && "SH-PublicStory" === p.type
            ? p.link.replace(/\/$/, "").split("/").splice(-1).pop()
            : null;
        return (0, j.jsx)("div", {
          className: "",
          "data-trackas": o,
          "data-slug": ne,
          children: (0, j.jsx)("div", {
            className: "rc20storypanel",
            children: (0, j.jsx)("div", {
              className: "rc20card",
              "data-type": "infrastructure",
              ref: w,
              children: p
                ? (0, j.jsxs)(j.Fragment, {
                    children: [
                      (0, j.jsx)("div", {
                        className: "rc20w3".concat(p.logo ? " logo" : ""),
                        style:
                          p.image && h
                            ? {
                                backgroundImage: "url("
                                  .concat(k, "/assets/")
                                  .concat(p.image, "/native"),
                              }
                            : { backgroundImage: Y() },
                      }),
                      (0, j.jsx)("div", {
                        className: "rc20content darktheme",
                        children: O.isMobile
                          ? (0, j.jsx)(j.Fragment, { children: te() })
                          : (0, j.jsx)(D.Z, {
                              scrollbarMaxSize: 100,
                              children: te(),
                            }),
                      }),
                    ],
                  })
                : (0, j.jsx)(V, {}),
            }),
          }),
        });
      }
      var re = (0, i.memo)(ne);
      function oe(e) {
        var t = e.type,
          n = e.link,
          r = e.reference,
          o = e.dataLabel,
          a = (0, i.useContext)(S.N),
          c = (0, x.useRouter)(),
          l = c.locale !== c.defaultLocale ? "".concat(c.locale, "/") : "";
        if ("SH-PublicStory" === t && r) {
          var s = n.replace(/\/$/, "").split("/").splice(-1).pop();
          return (0, j.jsx)("div", {
            children: (0, j.jsx)("a", {
              href: n || "#",
              "data-lbl": o || s,
              children: a.prodnav_readStory || "Read the story",
            }),
          });
        }
        return "SH-PublicStory" === t
          ? (0, j.jsx)("div", {
              children: (0, j.jsx)("a", {
                "data-lbl": o || n,
                href: ""
                  .concat("https://www.oracle.com", "/")
                  .concat(l, "customers/")
                  .concat(n, "/"),
                children: a.prodnav_readStory || "Read the story",
              }),
            })
          : (0, j.jsx)("div", {
              children:
                n &&
                (0, j.jsx)("a", {
                  "data-lbl": o,
                  href: n || "#",
                  children: a.prodnav_learnMore || "Learn More",
                }),
            });
      }
      function ie(e) {
        var t,
          n,
          r,
          o,
          a,
          c = e.portfolio,
          l = e.edgeCacheApiName,
          u = (0, i.useContext)(v.Z).isPreview,
          d = (0, x.useRouter)().locale,
          p = { localeParams: (0, y.aP)(d) },
          m = te({
            query: {
              params: J(
                {
                  id:
                    null !== c &&
                    void 0 !== c &&
                    null !== (t = c.fields) &&
                    void 0 !== t &&
                    t.title
                      ? null
                      : c.id,
                },
                p
              ),
            },
            swrOptions: { revalidateOnFocus: !1 },
            opts: { mgmtPreview: u, cacheTags: l ? [l] : [] },
          }),
          f = (0, s.Z)(m, 2),
          h = f[0].data,
          g = f[1];
        (0, i.useEffect)(function () {
          return function () {
            null === g ||
              void 0 === g ||
              g.cancel("cancel pending fetch calls of Product Portfolio");
          };
        }, []);
        var b =
            (null === h ||
            void 0 === h ||
            null === (n = h.fields) ||
            void 0 === n
              ? void 0
              : n.title) ||
            (null === c ||
            void 0 === c ||
            null === (r = c.fields) ||
            void 0 === r
              ? void 0
              : r.title) ||
            null,
          w =
            (null === h ||
            void 0 === h ||
            null === (o = h.fields) ||
            void 0 === o
              ? void 0
              : o.link) ||
            (null === c ||
            void 0 === c ||
            null === (a = c.fields) ||
            void 0 === a
              ? void 0
              : a.link) ||
            null;
        return b
          ? (0, j.jsx)("a", {
              className: "rc20product",
              href: w || "#",
              children: b,
            })
          : null;
      }
      function ae(e) {
        var t = e.taxonomy,
          n = e.handleProductNavigation,
          r = e.showFilters,
          o = e.toggleMobileFilters,
          a = e.taxonomyFiltersRef,
          c = e.panelBackground,
          l = e.hideMobileFilters,
          s = e.currentTaxonomySelected,
          u = e.isEnterKey,
          d = e.dummyTaxonomyRef,
          p = (0, i.useRef)(),
          m = (0, i.useRef)(null),
          f = (0, i.useRef)(null),
          h = (0, i.useContext)(v.Z).viewport,
          g = (0, i.useContext)(S.N),
          y = t || {},
          b = y.parentId,
          x = y.parentName;
        (0, i.useEffect)(
          function () {
            if (t && t.parentId) {
              var e;
              if (u)
                null === m ||
                  void 0 === m ||
                  null === (e = m.current) ||
                  void 0 === e ||
                  e.focus();
              f.current = setTimeout(function () {
                var e;
                u &&
                  null !== d &&
                  void 0 !== d &&
                  d.current &&
                  (null === d ||
                    void 0 === d ||
                    null === (e = d.current) ||
                    void 0 === e ||
                    e.focus());
              }, 500);
            }
            return function () {
              clearTimeout(null === f || void 0 === f ? void 0 : f.current);
            };
          },
          [t.parentId, u]
        );
        var w = function () {
          var e,
            r,
            o =
              (null === t ||
              void 0 === t ||
              null === (e = t.categories) ||
              void 0 === e ||
              null === (r = e[0]) ||
              void 0 === r
                ? void 0
                : r.parent) || {},
            i = o.id,
            a = o.apiName;
          return (0, j.jsxs)(j.Fragment, {
            children: [
              (0, j.jsxs)("ul", {
                children: [
                  " ",
                  t.categories[0].parent &&
                    (0, j.jsx)(
                      "li",
                      {
                        className:
                          i === s
                            ? "active parent-taxonomy"
                            : "parent-taxonomy",
                        children: (0, j.jsx)("a", {
                          "data-txnmy-id": i,
                          "data-lbl": a,
                          className: "filter",
                          onClick: function (e) {
                            e.persist(), n(e, i, null, null, a);
                          },
                          children: t.categories[0].parent.name,
                        }),
                      },
                      -1
                    ),
                  t.categories.map(function (e, t) {
                    var r = e || {},
                      o = r.id,
                      i = r.name,
                      a = r.apiName;
                    return (0, j.jsx)(
                      "li",
                      {
                        className:
                          e.id === s ? "active filter-child" : "filter-child",
                        children: (0, j.jsx)("a", {
                          "data-txnmy-id": e.id,
                          "data-lbl": e.apiName,
                          className: "filter",
                          href: "#",
                          onClick: function (e) {
                            var t =
                              1 ===
                              (null === e || void 0 === e ? void 0 : e.buttons);
                            n(e, o, i, null, a, t);
                          },
                          onKeyDown: function (e) {
                            var t = e || {},
                              r = t.type,
                              c = t.code,
                              l = t.detail,
                              s = t.buttons;
                            ("keydown" == r && "Enter" !== c) ||
                              n(
                                e,
                                o,
                                i,
                                null,
                                a,
                                ("keydown" == r && "Enter" === c) ||
                                  (1 == l && 1 == s)
                              );
                          },
                          children: e.name,
                        }),
                      },
                      t
                    );
                  }),
                ],
              }),
              (0, j.jsx)("div", { className: "rc20bottomspacing" }),
            ],
          });
        };
        return (0, j.jsxs)("div", {
          className: "rc20menu",
          height: h.height - 140,
          children: [
            (0, j.jsxs)("div", {
              className: "parent-nav",
              style:
                c && c.image
                  ? { backgroundImage: "url(".concat(c.image, ")") }
                  : {},
              children: [
                b &&
                  (0, j.jsxs)(j.Fragment, {
                    children: [
                      (0, j.jsx)("div", {
                        className: "dummydiv",
                        ref: m,
                        "aria-label": "....",
                      }),
                      (0, j.jsx)("button", {
                        className: "rc20back icn-chevron-left",
                        "data-txnmy-id": b,
                        ref: d,
                        "data-lbl": "prev-back-button",
                        onClick: function (e) {
                          var t =
                            1 ===
                            (null === e || void 0 === e ? void 0 : e.buttons);
                          l(e), n(e, b, null, null, x, t);
                        },
                        onKeyDown: function (e) {
                          var t = e || {},
                            r = t.type,
                            o = t.code,
                            i =
                              "keydown" == r &&
                              ("Enter" === o || " " === o || "Space" === o);
                          ("keydown" == r && "Enter" !== o && "Space" !== o) ||
                            (l(e), n(e, b, null, null, x, i));
                        },
                        children: g.prodnav_back || "Back",
                      }),
                    ],
                  }),
                (0, j.jsx)("button", {
                  className: "rc20toggle ".concat(
                    r ? "icn-close" : "icn-overflow-vert"
                  ),
                  "aria-label": "Toggle menu",
                  onClick: function (e) {
                    o(e);
                  },
                }),
              ],
            }),
            (function () {
              var e = (function () {
                var e = null;
                return (
                  t &&
                    t.categories &&
                    t.categories[0].ancestors &&
                    t.categories[0].ancestors[0].name &&
                    (e = t.categories[0].ancestors[0].name.split(" ")),
                  e
                );
              })();
              return (0, j.jsx)("div", {
                className: "rc20category",
                children:
                  e &&
                  (0, j.jsxs)(j.Fragment, {
                    children: [
                      (0, j.jsx)("div", {
                        children: "".concat(e[0], " ").concat(e[1]),
                      }),
                      (0, j.jsx)("div", {
                        children: "".concat(e[2] ? e[2] : ""),
                      }),
                    ],
                  }),
              });
            })(),
            (0, j.jsx)("div", {
              className: "rc20filters",
              ref: p,
              children: h.isMobile
                ? t && t.categories && t.categories.length > 0 && w()
                : t &&
                  t.categories &&
                  t.categories.length > 0 &&
                  (0, j.jsx)(D.Z, {
                    ref: a,
                    scrollbarMaxSize: 100,
                    children: w(),
                  }),
            }),
          ],
        });
      }
      var ce = (0, i.memo)(ae);
      function le(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? le(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : le(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ue = P.MY.useFetchTaxonomyList,
        de = P.MY.useFetchProductDetails,
        pe = P.MY.useFetchLocaleSummary;
      function me(e) {
        var t,
          n = e.initialData,
          r = void 0 === n ? {} : n,
          a = [],
          c = (0, i.useContext)(v.Z),
          u = c.isPreview,
          d = c.viewport,
          S = (0, i.createRef)(),
          _ = (0, x.useRouter)(),
          C = {
            "0E3B648885C24A02B5B2676BEB82C7E9": {
              color: "#33553C",
              image: "".concat(o.p$, "rh02-panel2.jpg"),
              animateClass: "rc20p1-open",
            },
            "5A0B0A9213D344628F4BBA4029291F4E": {
              color: "#0A3F46",
              image: "".concat(o.p$, "rh02-panel1.jpg"),
              animateClass: "rc20p2-open",
            },
          },
          k = (0, x.useRouter)().locale,
          O = { localeParams: (0, y.aP)(k, !1) };
        (0, g.Z)(
          S,
          (0, i.useCallback)(function () {
            return Ot(!1);
          })
        );
        var P = (0, i.useState)({}),
          N = P[0],
          D = P[1],
          T = (0, i.useState)({}),
          L = T[0],
          A = T[1],
          R = (0, i.useState)(null),
          F = R[0],
          B = R[1],
          Z = (0, i.useState)(""),
          H = Z[0],
          W = Z[1],
          z = (0, i.useState)(null),
          U = z[0],
          G = z[1],
          X = (0, i.useState)(!0),
          Y = X[0],
          Q = X[1],
          $ = (0, i.useState)(!1),
          J = $[0],
          ee = $[1],
          te = (0, i.useRef)(null),
          ne = (0, i.useState)(!1),
          oe = ne[0],
          ie = ne[1],
          ae = C[U] || null,
          le = (0, i.useRef)(),
          me = (0, i.useRef)(),
          fe = (0, i.useRef)(),
          ve = (0, i.useRef)(),
          he = (0, i.useRef)(),
          ge = (0, i.useRef)(),
          ye = (0, i.useState)(!1),
          be = ye[0],
          xe = ye[1],
          we = (0, i.useState)(!1),
          Se = (we[0], we[1]),
          je = (0, i.useState)(0),
          _e = je[0],
          Ce =
            (je[1],
            (0, i.useState)({
              txnmyId: null,
              taxnmyName: "",
              txnmySelected: null,
            })),
          Ee = Ce[0],
          ke = Ce[1],
          Oe = Ee || {},
          Me = Oe.txnmyId,
          Pe = Oe.taxnmyName,
          Ne = Oe.txnmySelected,
          Ie = (0, i.useState)({}),
          qe = Ie[0],
          De = (Ie[1], (0, i.useState)(null)),
          Te = De[0],
          Le = De[1],
          Ae = (0, i.useState)(""),
          Re = Ae[0],
          Fe = Ae[1],
          Be = (0, i.useState)(!1),
          Ze = Be[0],
          He = Be[1],
          We = (0, i.useState)({
            queryTaxonomyId: null,
            queryLocale: !1,
            getTaxnomyList: !1,
            getTaxonomyByName: !1,
          }),
          ze = We[0],
          Ue = We[1],
          Ge = ze || {},
          Xe = Ge.queryTaxonomyId,
          Ve = Ge.queryLocale,
          Ye = Ge.getTaxnomyList,
          Ke = (0, i.useRef)(null),
          Qe = (0, i.useState)(null),
          $e = Qe[0],
          Je = Qe[1],
          et = function (e, t) {
            return r && r[t || F] ? r[t || F][e] : null;
          };
        function tt(e) {
          9 === e.nativeEvent.keyCode &&
            !1 === e.shiftKey &&
            document.querySelector(".rh02v0");
        }
        (0, i.useEffect)(function () {
          return (
            Se(document.querySelector("body").classList.contains("rtl")),
            xe(!0),
            function () {
              clearTimeout(null === te || void 0 === te ? void 0 : te.current);
            }
          );
        }, []),
          (0, i.useEffect)(function () {
            return (
              I().polyfill(),
              function () {
                clearTimeout(Ke.current);
              }
            );
          }, []),
          (0, i.useEffect)(
            function () {
              if (r && r[F] ? r[F] : null) {
                var e = et("taxonomyList", F),
                  t = et("productDetails", F);
                Ue(function (n) {
                  return se(
                    se({}, n),
                    {},
                    {
                      queryTaxonomyId: t ? null : F,
                      queryLocale: !t,
                      getTaxnomyList: !e,
                    }
                  );
                });
              } else
                Ze &&
                  Ue(
                    F
                      ? function (e) {
                          return se(
                            se({}, e),
                            {},
                            { queryTaxonomyId: F, queryLocale: "" == Re }
                          );
                        }
                      : function (e) {
                          return se(
                            se({}, e),
                            {},
                            {
                              queryTaxonomyId: null,
                              queryLocale: !1,
                              getTaxnomyList: !1,
                            }
                          );
                        }
                  );
            },
            [F, Re, Ze]
          );
        var nt =
          null ===
            (t = (function () {
              var e = new URLSearchParams(window.location.search);
              return e.get("product") ? e.get("product") : null;
            })()) || void 0 === t
            ? void 0
            : t.replace(/:/g, "|");
        (0, i.useEffect)(
          function () {
            var e;
            nt &&
              _.push(
                null === _ || void 0 === _ ? void 0 : _.pathname,
                null === (e = window) || void 0 === e
                  ? void 0
                  : e.location.pathname,
                { shallow: !0 }
              );
          },
          [nt, F]
        );
        var rt = {
            txnmyId: Me,
            taxnmyName: Pe,
            txnmySelected: Ne,
            firstLevelTxIds: a,
            edgeCacheApiName: Te,
          },
          ot = ue({
            query: {
              params: se({ txnmyId: Me, id: Ye ? b.q8 : null, details: rt }, O),
            },
            swrOptions: { revalidateOnFocus: !1 },
            opts: { mgmtPreview: u, cacheTags: Te ? [Te] : [] },
          }),
          it = (0, s.Z)(ot, 2),
          at = it[0].data,
          ct = it[1];
        (0, i.useEffect)(
          function () {
            at && (He(!0), yt(at, Ee));
          },
          [at]
        );
        var lt = pe({
            query: {
              params: se(
                { getFetchLocaleSummary: window.location.href && Ve },
                O
              ),
            },
            swrOptions: { revalidateOnFocus: !1 },
            opts: { mgmtPreview: u, cacheTags: Te ? [Te] : [] },
          }),
          st = (0, s.Z)(lt, 2),
          ut = st[0].data,
          dt = st[1];
        (0, i.useEffect)(
          function () {
            ut && Fe(ut);
          },
          [ut]
        );
        var pt = de({
            query: { params: se({ txnmyId: Xe, localeLang: Re }, O) },
            swrOptions: { revalidateOnFocus: !1 },
            opts: { mgmtPreview: u, cacheTags: Te ? [Te] : [] },
          }),
          mt = (0, s.Z)(pt, 2),
          ft = mt[0],
          vt = ft.data,
          ht = ft.mutate,
          gt = mt[1];
        function yt(e, t) {
          var n,
            r,
            o,
            i,
            a,
            c,
            l = t || {},
            s = l.txnmyId,
            u = l.taxnmyName,
            d = l.txnmySelected,
            p = e.taxonomyObj,
            m = e.ancestorId,
            f = e.grandParentId,
            v = e.size;
          if (v > 0)
            m && G(m),
              f && xt(f),
              (F !==
                (null === N ||
                void 0 === N ||
                null === (n = N.categories) ||
                void 0 === n ||
                null === (r = n[0]) ||
                void 0 === r ||
                null === (o = r.parent) ||
                void 0 === o
                  ? void 0
                  : o.id) &&
                null !== N &&
                void 0 !== N &&
                null !== (i = N.categories) &&
                void 0 !== i &&
                null !== (a = i[0]) &&
                void 0 !== a &&
                null !== (c = a.parent) &&
                void 0 !== c &&
                c.id) ||
                He(!0),
              D(se(se({}, p), {}, { taxonomyId: d || s }));
          else if ("initial-render" === u && 0 === v) {
            if (
              (Ue(function (e) {
                return se(se({}, e), {}, { getTaxnomyList: !0 });
              }),
              qe && qe.parent && qe.parent.id)
            )
              return jt(qe.parent.id, "initial-render", qe.id), !1;
          } else
            0 === v && He(!0),
              D(se(se({}, N), {}, { taxonomyId: d || s })),
              w.logger.debug("no data", "rc20IndexComponent");
          return !0;
        }
        function bt(e, t) {
          var n = (e || {}).productDetails;
          He(!1),
            n
              ? A(se(se({}, n.fields), {}, { item_id: n.id }))
              : (A({}),
                w.logger.debug("product data not found", "rc20IndexComponent")),
            t && Et(t);
        }
        (0, i.useEffect)(
          function () {
            var e;
            null !== vt &&
              void 0 !== vt &&
              vt.productDetails &&
              bt(
                vt,
                null === (e = C[Xe]) || void 0 === e ? void 0 : e.animateClass
              );
          },
          [vt, Xe]
        ),
          (0, i.useEffect)(function () {
            return function () {
              ct.cancel("Cancel Fetch TaxonomyList call"),
                dt.cancel("Cancel Fetch Locale Summary call"),
                gt.cancel("Cancel Fetch Prodcut Details call");
            };
          }, []);
        var xt = function (e) {
            w.logger.debug("for siblings ".concat(e), "rc20IndexComponent");
          },
          wt = function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "",
              r = arguments.length > 3 ? arguments[3] : void 0,
              o = arguments.length > 4 ? arguments[4] : void 0,
              i = arguments.length > 5 ? arguments[5] : void 0;
            null !== d && void 0 !== d && d.isMobile ? Je(!1) : Je(i),
              null !== d && void 0 !== d && d.isMobile && He(!0),
              e && e.preventDefault(),
              F !== t &&
                (t !== b.q8 && A({ isLoading: !0 }),
                B(t === b.q8 ? null : t),
                t === b.q8 || a.includes(t)
                  ? kt()
                  : (C[t] && G(t), o && Le(o), St(t, r), jt(t, n)));
          },
          St = function (e, t) {
            var n = et("productDetails", e);
            n && bt(n, t);
          },
          jt = function (e, t, n) {
            var r = { txnmyId: e, taxnmyName: t, txnmySelected: n };
            ke({ txnmyId: e, taxnmyName: t, txnmySelected: n });
            var o = et("taxonomyList", e);
            o
              ? (yt(o, r),
                Ue(function (e) {
                  return se(se({}, e), {}, { getTaxnomyList: !1 });
                }))
              : Ue(function (e) {
                  return se(se({}, e), {}, { getTaxnomyList: !0 });
                });
          },
          _t = function (e) {
            e.preventDefault(),
              oe || (document.querySelector(".rh08").style.display = "none"),
              setTimeout(function () {
                ie(!oe),
                  oe
                    ? document.body.classList.remove("lock")
                    : document.body.classList.add("lock"),
                  (document.documentElement.style.height = "100vh");
              }, 50),
              oe && Pt();
          },
          Ct = function (e, t) {
            ([b.qW, b.Jh].includes(F) || t) &&
              document.body.classList.contains("lock") &&
              (ie(!1), document.body.classList.remove("lock"), Pt());
          },
          Et = function (e) {
            clearTimeout(null === te || void 0 === te ? void 0 : te.current);
            var t = (function () {
              var t = (0, l.Z)(
                p().mark(function t() {
                  return p().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          (function () {
                            var t = "rc20p1-open" === e ? "rc20p1" : "rc20p2";
                            Q(!0), W("".concat(t, "-open"));
                          })();
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
            window.requestAnimationFrame(t),
              setTimeout(function () {
                var e;
                $e &&
                  (null === ge ||
                    void 0 === ge ||
                    null === (e = ge.current) ||
                    void 0 === e ||
                    e.focus());
                W(function (e) {
                  return !e || e.match("-opened")
                    ? e
                    : "".concat(e, " rc20panel-opened");
                });
              }, 300);
          },
          kt = function () {
            B(null),
              window.requestAnimationFrame(function () {
                var e = H.substring(0, 6),
                  t = null === fe || void 0 === fe ? void 0 : fe.current;
                t && (t.scrollLeft = 0), W("".concat(e, "-closing")), Q(!1);
                var n = setTimeout(function () {
                  var e;
                  $e &&
                    (null === ve ||
                      void 0 === ve ||
                      null === (e = ve.current) ||
                      void 0 === e ||
                      e.focus()),
                    W(""),
                    Mt();
                }, 400);
                te.current = n;
              });
          },
          Ot = function () {
            var e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            ee(!J), e && F && (A({ isLoading: !0 }), ht && ht());
          },
          Mt = function () {
            D({}),
              A({}),
              B(null),
              ke({ txnmyId: null, taxnmyName: "", txnmySelected: null }),
              Ue({
                queryTaxonomyId: null,
                queryLocale: !1,
                getTaxnomyList: !1,
                getTaxonomyByName: !1,
              });
          },
          Pt = function () {
            Ke.current = setTimeout(function () {
              var e;
              !(function () {
                var e = {
                  type: "slide",
                  autoplay: !1,
                  interval: 0,
                  transitionDelayBetweenSlide: 0,
                  speed: 1e3,
                  requiredFadeInClass: !1,
                  parentElementOpacityRequired: !1,
                  arrows: !1,
                  pagination:
                    document.querySelectorAll(".slider__slide").length > 1,
                };
                document.querySelector(".rh08").style.display = "block";
                var t = window.customSlider._i || 0;
                t > 0 &&
                  (window.customSlider.Components.Elements.destroy(),
                  (window.customSlider.options = se(
                    se({}, e),
                    {},
                    { start: t, hasPauseClass: !0 }
                  )),
                  window.customSlider.destroy(),
                  window.customSlider.mount(),
                  window.bindSlideSliderEvent(window.customSlider));
              })(),
                null === me ||
                  void 0 === me ||
                  null === (e = me.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ block: "start" });
            }, 100);
          },
          Nt = function () {
            He(!0);
          };
        function It() {
          return (0, j.jsx)(ce, {
            panelBackground: ae,
            taxonomy: N,
            currentTaxonomySelected: F,
            dummyTaxonomyRef: ge,
            taxonomyFiltersRef: he,
            showFilters: oe,
            toggleMobileFilters: _t,
            hideMobileFilters: Ct,
            handleProductNavigation: wt,
            isEnterKey: $e,
          });
        }
        var qt = function (e) {
          var t = et("featuredCards", F);
          return (0, j.jsx)(q.default, {
            totalSlideLength: e.length,
            data: e,
            lblPrefix: "panel3:",
            children:
              Array.isArray(e) &&
              e.map(function (e, n) {
                return (0,
                j.jsx)("li", { className: "slide", children: (0, j.jsx)(re, { slideNo: n, contentInfo: F ? e : {}, activeIndex: _e, dataTrackas: "rc20:panel".concat(n + 3), parentPanelRef: fe, initialData: t && t[n] ? t[n] : null, panelBackground: ae, edgeCacheApiName: Te }) }, e.id);
              }),
          });
        };
        return (0, j.jsx)(h.Z, {
          children: (0, j.jsx)(f.Z, {
            in: oe,
            timeout: 300,
            classNames: "open",
            children: (0, j.jsx)("section", {
              className: "rc20v1 rc20v3 rh02  rh02v1 pghero",
              "data-trackas": "rc20",
              children: (0, j.jsxs)("div", {
                id: "rc20panels",
                ref: me,
                className: ["rh02w1", "rc20panels", H].join(" "),
                children: [
                  be &&
                    (function () {
                      var e = "" !== H;
                      return (0, j.jsxs)(j.Fragment, {
                        children: [
                          (0, j.jsx)(E, {
                            onChange: wt,
                            isPanelOpen: e,
                            isEnterPressed: $e,
                            currentTaxonomySelected: F,
                            exporeRefBtn: ve,
                          }),
                          (0, j.jsx)(M, {
                            onChange: wt,
                            onKeyDown: tt,
                            isPanelOpen: e,
                            isEnterPressed: $e,
                          }),
                        ],
                      });
                    })(),
                  " ",
                  (0, j.jsx)("div", {
                    id: "rc20tree",
                    className: "rc20panel",
                    children: (0, j.jsx)("div", {
                      className: "rc20w0",
                      style: ae
                        ? { backgroundImage: "url(".concat(ae.image, ")") }
                        : {},
                      "data-trackas": "rc20:panel1",
                      children: d.isMobile
                        ? It()
                        : (0, j.jsx)(m.Z, {
                            children: (0, j.jsx)(
                              f.Z,
                              {
                                in: !1,
                                appear: !1,
                                timeout: 600,
                                classNames: "rc20menu-slide",
                                onEntering: Nt,
                                children: It(),
                              },
                              N.parentId || b.q8
                            ),
                          }),
                    }),
                  }),
                  " ",
                  (0, j.jsxs)("div", {
                    id: "rc20sub",
                    className: [
                      "rc20panel rc20slidepanel rc20subpanel rc20subopen",
                    ].join(" "),
                    ref: fe,
                    onClick: function (e) {
                      return Ct(0, !0);
                    },
                    onTouchStart: function (e) {
                      return Ct(0, !0);
                    },
                    children: [
                      (0, j.jsx)(K, {
                        product: L,
                        currentTaxonomySelected: F,
                        color: ae && ae.color,
                        panelRef: le,
                        slideNo: -1,
                        totalLength:
                          L && L.featured_content && L.featured_content.length,
                        activeIndex: _e,
                        initialData: et("initialQuoteOrProductAsset"),
                        closeEditScreen: function () {
                          return Ot(!1);
                        },
                        edgeCacheApiName: Te,
                      }),
                      " ",
                      (function () {
                        var e;
                        return (0, j.jsx)(j.Fragment, {
                          children:
                            null !== L &&
                            void 0 !== L &&
                            null !== (e = L.featured_content) &&
                            void 0 !== e &&
                            e.length
                              ? qt(
                                  null === L || void 0 === L
                                    ? void 0
                                    : L.featured_content
                                )
                              : (0, j.jsx)("div", {
                                  className: "rc20blankcover",
                                  style: {
                                    right: "0%",
                                    width: d.isMobile ? "100%" : "50%",
                                    background: "#161513",
                                  },
                                  children:
                                    (null === L || void 0 === L
                                      ? void 0
                                      : L.isLoading) &&
                                    (0, j.jsxs)("div", {
                                      className: "rc20content",
                                      children: [(0, j.jsx)(V, {}), " "],
                                    }),
                                }),
                        });
                      })(),
                      " ",
                    ],
                  }),
                  " ",
                  Y &&
                    J &&
                    (0, j.jsxs)("div", {
                      className: "rc20popup",
                      ref: S,
                      children: [
                        (0, j.jsx)("span", {
                          className: "icn-close rc20close",
                          onClick: Ot,
                        }),
                        (0, j.jsx)("iframe", {
                          src: ""
                            .concat(
                              "https://orasites-prodapp.cec.ocp.oraclecloud.com/",
                              "documents/embed/assets/edit/"
                            )
                            .concat(L.item_id, "?hide=actions"),
                          width: "100%",
                          height: "100%",
                          frameBorder: "0",
                          title: "Edit Asset",
                        }),
                      ],
                    }),
                  " ",
                ],
              }),
            }),
          }),
        });
      }
      var fe = (0, i.memo)(me),
        ve = (function () {
          var e,
            t,
            n,
            r = {},
            o = {
              M0101: ["uk"],
              M0202: ["de"],
              M0303: ["fr"],
              M0404: ["it"],
              M0505: ["es"],
              M5501: ["ca-en"],
              M5503: ["ca-fr"],
              M0701: ["ie"],
              M0801: ["za"],
              M0902: ["at"],
              M1002: ["ch-de"],
              M1003: ["ch-fr"],
              M1101: ["ae"],
              M1106: ["ae-ar"],
              M1201: ["sa"],
              M1206: ["sa-ar"],
              M1301: ["se"],
              M1401: ["be"],
              M1403: ["be-fr"],
              M1407: ["be-nl"],
              M1501: ["no"],
              M1601: ["fi"],
              M1720: ["dk"],
              M1801: ["middleeast", "om", "qa", "ye"],
              M1806: ["middleeast-ar", "om-ar", "qa-ar", "ye-ar"],
              M1901: ["il-en"],
              M1906: ["il"],
              M2009: ["ru"],
              M2110: ["tr"],
              M2207: ["nl"],
              M2319: ["cz"],
              M2408: ["pl"],
              M2601: ["iq", "jo", "kw", "lb"],
              M2606: ["iq-ar", "jo-ar", "kw-ar", "lb-ar"],
              M2701: ["eg"],
              M2706: ["eg-ar"],
              M2801: ["au"],
              M2901: ["nz"],
              M3001: ["asiasouth", "id"],
              M3101: ["in"],
              M3201: ["hk"],
              M3311: ["jp"],
              M3412: ["tw"],
              M3514: ["kr"],
              M3613: ["cn"],
              M3701: ["apac", "bd", "vn"],
              M3901: ["bz"],
              M3905: ["bo", "ec", "gt", "hn", "lad", "pa", "pr", "py", "uy"],
              M4015: ["br"],
              M4105: ["pe"],
              M4205: ["ve"],
              M4305: ["ar"],
              M4401: ["ba", "bg", "cy", "ee", "emea", "hr"],
              M4505: ["mx"],
              M4605: ["co"],
              M4705: ["cl"],
              M4805: ["cr"],
              M5001: ["sg"],
              M5101: ["africa", "bh", "ke"],
              M5103: ["africa-fr"],
              M5106: ["bh-ar"],
              M5601: ["bn"],
              M5701: ["bt"],
              M5806: ["dz"],
              M5901: ["gh"],
              M6001: ["kh"],
              M6101: ["la"],
              M6201: ["lk"],
              M6324: ["lt"],
              M6425: ["lu"],
              M6526: ["lv"],
              M6606: ["ma"],
              M6727: ["md"],
              M6828: ["me"],
              M6929: ["mn"],
              M7030: ["mt"],
              M7101: ["mv"],
              M7201: ["my"],
              M7301: ["ng"],
              M7405: ["ni"],
              M7501: ["np"],
              M7601: ["ph"],
              M7701: ["pk"],
              M7816: ["pt"],
              M7936: ["ro"],
              M8037: ["rs"],
              M8138: ["si"],
              M8239: ["sk"],
              M8303: ["sn"],
              M8401: ["th"],
              M8541: ["ua"],
            },
            i = 0,
            a = Object.keys(o),
            c = a.length,
            l = /_M\d{4}_/g,
            s = "";
          return (
            (r.localize = function (r) {
              if (
                ((s = r),
                (e = document.querySelectorAll('a[href*="source=:"]')),
                (t = e.length) > 0)
              ) {
                for (var u = 0; u < c; u++)
                  if (o[a[u]].indexOf(s) >= 0) {
                    for (var d = 0; d < t; d++)
                      (n = e.item(d).getAttribute("href")),
                        e
                          .item(d)
                          .setAttribute(
                            "href",
                            n.replaceAll(l, "_" + a[u] + "_")
                          ),
                        (i += 1);
                    break;
                  }
                if (!i)
                  for (d = 0; d < t; d++)
                    (n = e.item(d).getAttribute("href")),
                      e.item(d).setAttribute("href", n.replace(l, "_M0601_"));
              }
            }),
            (r.initialize = function (e) {
              "complete" == document.readyState ||
              "interactive" == document.readyState
                ? r.localize(e)
                : document.addEventListener("readystatechange", function (t) {
                    ("complete" != document.readyState &&
                      "interactive" != document.readyState) ||
                      r.localize(e);
                  });
            }),
            r
          );
        })(),
        he = n(6383),
        ge = n(1531),
        ye = n(2179),
        be = n(7247),
        xe = n(2777),
        we = n(2262),
        Se = n(6864);
      function je(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? je(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : je(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ce(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = (0, be.Z)(e);
          if (t) {
            var o = (0, be.Z)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return (0, ye.Z)(this, n);
        };
      }
      function Ee() {
        if (document.querySelector("#rh08")) {
          var e = function (e, t) {
              return e ? e.querySelector(t.split(" ")[0]) : null;
            },
            t = function (e, t) {
              return n(e, t)[0];
            },
            n = function (e, t) {
              return e
                ? y(e.children).filter(function (e) {
                    return d(e, t.split(" ")[0]) || e.tagName === t;
                  })
                : [];
            },
            r = function (e, t) {
              var n = document.createElement(e);
              return (
                g(t, function (e, t) {
                  return p(n, t, e);
                }),
                n
              );
            },
            o = function (e) {
              S(e).forEach(function (e) {
                if (e) {
                  var t = e.parentElement;
                  t && t.removeChild(e);
                }
              });
            },
            i = function (e, t) {
              e && e.appendChild(t);
            },
            a = function (e, t) {
              e &&
                g(t, function (t, n) {
                  null !== t && (e.style[n] = t);
                });
            },
            c = function (e, t, n) {
              e &&
                S(t).forEach(function (t) {
                  t && e.classList[n ? "remove" : "add"](t);
                });
            },
            l = function (e, t) {
              c(e, t, !1);
            },
            s = function (e, t) {
              c(e, t, !0);
            },
            d = function (e, t) {
              return !!e && e.classList.contains(t);
            },
            p = function (e, t, n) {
              e && e.setAttribute(t, n);
            },
            m = function (e, t) {
              return e ? e.getAttribute(t) : "";
            },
            f = function (e, t) {
              S(t).forEach(function (t) {
                S(e).forEach(function (e) {
                  return e && e.removeAttribute(t);
                });
              });
            },
            v = function (e) {
              return e.getBoundingClientRect();
            },
            h = function (e, t) {
              if (!e) throw new Error(t);
            },
            g = function (e, t) {
              pe(e).some(function (n, r) {
                return t(e[n], n, r);
              });
            },
            y = function (e) {
              return pe(e).map(function (t) {
                return e[t];
              });
            },
            b = function (e) {
              return "object" === typeof e;
            },
            x = function e(t, n) {
              var r = (0, Se.Z)({}, t);
              return (
                g(n, function (t, n) {
                  b(t)
                    ? (b(r[n]) || (r[n] = {}), (r[n] = e(r[n], t)))
                    : (r[n] = t);
                }),
                r
              );
            },
            w = function (e, t) {
              var n;
              return function () {
                n ||
                  (n = setTimeout(function () {
                    e(), (n = null);
                  }, t));
              };
            },
            S = function (e) {
              return Array.isArray(e) ? e : [e];
            },
            j = function (e, t, n) {
              return Math.min(Math.max(e, t > n ? n : t), t > n ? t : n);
            },
            _ = function (e) {
              var t = typeof e;
              return "number" === t && e > 0
                ? parseFloat(e) + "px"
                : "string" === t
                ? e
                : "";
            },
            C = function (e, t) {
              if ("string" === typeof t) {
                var n = r("div", {});
                a(n, { position: "absolute", width: t }),
                  i(e, n),
                  (t = n.clientWidth),
                  o(n);
              }
              return +t || 0;
            },
            E = function (e, t) {
              return Math.floor(Math.random() * (t - e + 1) + e);
            },
            k = function (e) {
              H ||
                (window.customSlider = new Ee("#rh08", e).componentWillMount());
            },
            O = function () {
              var e = window.innerWidth;
              if (
                (function (e) {
                  return !((-1 !== W && W < F && e < F) || (W > F && e > F));
                })(e)
              )
                if (e < F)
                  if (H) {
                    if (
                      ((z =
                        d(
                          document.querySelector(".rh08-pausebtn"),
                          "rh08-paused"
                        ) || !1),
                      window.customSlider)
                    ) {
                      var t = window.customSlider._intialIndex || 0;
                      window.customSlider.Components.SliderElements.componentUnMount(),
                        (window.customSlider.options = _e(
                          _e({}, Ne),
                          {},
                          { start: t, hasPauseClass: z }
                        )),
                        window.customSlider.componentUnMount(),
                        window.customSlider.componentWillMount(),
                        window.customSlider.EventHandler.publish(
                          "component_moved",
                          0
                        ),
                        P(t);
                    }
                  } else
                    k(_e(_e({}, Ne), {}, { start: 0, hasPauseClass: !1 })),
                      window.customSlider &&
                        window.customSlider.EventHandler.publish(
                          "component_moved",
                          0
                        );
                else if (H) {
                  if (window.customSlider) {
                    var n = window.customSlider._intialIndex || 0;
                    window.customSlider.Components.SliderElements.componentUnMount(),
                      (window.customSlider.options = _e(
                        _e({}, Pe),
                        {},
                        { start: n, hasPauseClass: z, arrows: !0 }
                      )),
                      window.customSlider.componentUnMount(),
                      window.customSlider.componentWillMount();
                  }
                  a(document.querySelector(".bg-texture2"), {
                    transition: "background-position-x ".concat(0, "ms"),
                    backgroundPositionX: "0px",
                  }),
                    window.customSlider &&
                      (I(window.customSlider),
                      D(),
                      window.customSlider.EventHandler.publish(
                        "component_moved",
                        0
                      ),
                      z && window.customSlider.Components.AutoRotate.pause(3));
                } else
                  k(_e(_e({}, Pe), {}, { start: 0, arrows: !0 })),
                    window.customSlider &&
                      (I(window.customSlider),
                      window.customSlider.EventHandler.publish(
                        "component_moved",
                        0
                      ));
              (H = !0), q(e), e !== W && M(), (W = e);
            },
            M = function e(t) {
              for (
                var n,
                  r =
                    null ===
                      (n = document.querySelector(
                        ".rh08slide.slick-active .rh02-img"
                      )) || void 0 === n
                      ? void 0
                      : n.offsetHeight,
                  o = !1,
                  i = document.querySelectorAll(".rh08slide"),
                  a = document.querySelectorAll(".rh08slide").length,
                  c = 0;
                c < a;
                c++
              ) {
                var l = i[c].querySelector(".rh08logo img");
                l && (o = !l.offsetHeight);
              }
              0 === r || o
                ? setTimeout(function () {
                    e();
                  }, 300)
                : window.customSlider && N(window.customSlider);
            },
            P = function (e) {
              var t =
                ((A -
                  window.customSlider.Components.SliderLayout.getSlideWidth(
                    0
                  )) /
                  window.customSlider.length) *
                -1 *
                e;
              a(document.querySelector(".rh08sliderw1 .bg-texture2"), {
                transition: "background-position-x ".concat(500, "ms"),
                backgroundPositionX: "".concat(t, "px"),
              });
            },
            N = function (e) {
              var t = window.innerWidth;
              e.Components.SliderElements.getSlides(!1).forEach(function (e) {
                e.slide
                  .querySelector(".rh02txt")
                  .setAttribute("style", "height:auto");
              });
              var n = 0,
                r = 0;
              e.Components.SliderElements.getSlides(!1).forEach(function (
                e,
                o
              ) {
                (e.slide.querySelector(".rh08body .obttns").style.display =
                  "flex"),
                  (n = Math.max(
                    n,
                    e.slide.querySelector(".rh02txt").clientHeight
                  )),
                  (r = Math.max(
                    r,
                    e.slide.querySelector(".rh02txt").clientWidth
                  )),
                  t > F &&
                    (e.slide.querySelector(".rh08body .obttns").style.display =
                      "none");
              }),
                (n = "".concat(n, "px")),
                (r = "".concat(r, "px")),
                e.Components.SliderElements.getSlides(!1).forEach(function (e) {
                  a(e.slide.querySelector(".rh02txt"), {
                    height: "".concat(n),
                    "min-width": "".concat(r),
                  });
                });
            },
            I = function (e) {
              if (e) {
                var t = function (e) {
                    var t;
                    (t =
                      window.customSlider.Components.SliderElements.slides[
                        e
                      ].querySelector(".rh08w5")),
                      l(
                        t,
                        window.customSlider._option.classes
                          .fadeInTextWithLargeDelay
                      );
                  },
                  n = function (e, t, n) {
                    l(
                      e,
                      window.customSlider._option.classes
                        .fadeInRightImgWithDelay
                    ),
                      t();
                  },
                  r = function (e, t) {
                    l(
                      e,
                      window.customSlider._option.classes.fadeInLeftImgWithDelay
                    ),
                      t();
                  },
                  o = function (e) {
                    var t = window.customSlider._intialIndex;
                    !(function (e, t) {
                      l(e, window.customSlider._option.classes.fadeOutText),
                        setTimeout(function () {
                          t();
                        }, B),
                        setTimeout(function () {
                          s(e, window.customSlider._option.classes.fadeOutText);
                        }, 1.5 * B);
                    })(
                      window.customSlider.Components.SliderElements.slides[
                        t
                      ].querySelector(".rh08w5"),
                      e
                    );
                  },
                  i = function (e, i, a) {
                    if (window.customSlider) {
                      var c = window.customSlider._intialIndex,
                        u =
                          window.customSlider.Components.SliderElements.slides[
                            c
                          ].querySelector(".rh02-img"),
                        p =
                          window.customSlider.Components.SliderElements.slides[
                            c
                          ].querySelector(".rh08w5");
                      s(
                        u,
                        window.customSlider._option.classes
                          .fadeInRightImgWithDelay
                      ),
                        s(
                          u,
                          window.customSlider._option.classes.fadeInRightImage
                        ),
                        s(
                          u,
                          window.customSlider._option.classes
                            .fadeInLeftImgWithDelay
                        ),
                        s(
                          p,
                          window.customSlider._option.classes
                            .fadeInTextWithLargeDelay
                        ),
                        s(p, window.customSlider._option.classes.fadeInText),
                        e
                          ? (!(function (e, o) {
                              var i = "";
                              (i =
                                0 === window.customSlider._intialIndex
                                  ? "<".concat(window.customSlider.length - 1)
                                  : "<"),
                                (i = o || 0 === o ? ">".concat(o) : i);
                              var a =
                                window.customSlider.Components.ControlManager.getActualIndex(
                                  window.customSlider.Components.ControlManager.parse(
                                    i
                                  )
                                );
                              window.customSlider.publish(
                                re,
                                a,
                                window.customSlider._intialIndex
                              ),
                                l(
                                  e,
                                  window.customSlider._option.classes
                                    .fadeOutRightImage
                                ),
                                setTimeout(function () {
                                  s(
                                    e,
                                    window.customSlider._option.classes
                                      .fadeOutRightImage
                                  );
                                }, 1.5 * B),
                                (window.customSlider.Components.SliderElements.getSlide(
                                  a
                                ).slide.style.opacity = "1"),
                                d(
                                  document.querySelector("#rh08"),
                                  window.customSlider._option.classes
                                    .navNextClicked
                                ) &&
                                  n(
                                    window.customSlider.Components.SliderElements.slides[
                                      a
                                    ].querySelector(".rh02-img"),
                                    t.bind(this, a)
                                  ),
                                d(
                                  document.querySelector("#rh08"),
                                  window.customSlider._option.classes
                                    .navPrevClicked
                                ) &&
                                  r(
                                    window.customSlider.Components.SliderElements.slides[
                                      a
                                    ].querySelector(".rh02-img"),
                                    t.bind(this, a)
                                  );
                            })(
                              window.customSlider.Components.SliderElements.slides[
                                c
                              ].querySelector(".rh02-img"),
                              a
                            ),
                            o(i))
                          : (!(function (e, o) {
                              var i = "";
                              (i =
                                window.customSlider._intialIndex <
                                window.customSlider.length - 1
                                  ? ">"
                                  : ">0"),
                                (i = o || 0 === o ? ">".concat(o) : i);
                              var a =
                                window.customSlider.Components.ControlManager.getActualIndex(
                                  window.customSlider.Components.ControlManager.parse(
                                    i
                                  )
                                );
                              window.customSlider.publish(
                                re,
                                a,
                                window.customSlider._intialIndex
                              ),
                                l(
                                  e,
                                  window.customSlider._option.classes
                                    .fadeOutLeftImage
                                ),
                                setTimeout(function () {
                                  s(
                                    e,
                                    window.customSlider._option.classes
                                      .fadeOutLeftImage
                                  );
                                }, 1.5 * B),
                                (window.customSlider.Components.SliderElements.getSlide(
                                  a
                                ).slide.style.opacity = "1"),
                                d(
                                  document.querySelector("#rh08"),
                                  window.customSlider._option.classes
                                    .navNextClicked
                                )
                                  ? n(
                                      window.customSlider.Components.SliderElements.slides[
                                        a
                                      ].querySelector(".rh02-img"),
                                      t.bind(this, a)
                                    )
                                  : d(
                                      document.querySelector("#rh08"),
                                      window.customSlider._option.classes
                                        .navPrevClicked
                                    )
                                  ? r(
                                      window.customSlider.Components.SliderElements.slides[
                                        a
                                      ].querySelector(".rh02-img"),
                                      t.bind(this, a)
                                    )
                                  : n(
                                      window.customSlider.Components.SliderElements.slides[
                                        a
                                      ].querySelector(".rh02-img"),
                                      t.bind(this, a)
                                    );
                            })(
                              window.customSlider.Components.SliderElements.slides[
                                c
                              ].querySelector(".rh02-img"),
                              a
                            ),
                            o(i));
                    }
                  };
                window.customSlider.EventHandler.subscribe(
                  "previous_nav_clicked",
                  function (e) {
                    i(!0, e);
                  }
                ),
                  window.customSlider.EventHandler.subscribe(
                    "next_nav_clicked",
                    function (e) {
                      i(!1, e);
                    }
                  ),
                  window.customSlider.EventHandler.subscribe(
                    "component_swiped",
                    function (t, n) {
                      -1 === t
                        ? i(!0, n, window.customSlider.length - 1)
                        : t > e.length - 1
                        ? i(!1, n, 0)
                        : t < window.customSlider._intialIndex
                        ? i(!0, n, t)
                        : i(!1, n, t);
                    }
                  ),
                  window.customSlider.EventHandler.subscribe(
                    "auto_rotate_event",
                    function (e) {
                      i(!1, e);
                    }
                  ),
                  window.customSlider.EventHandler.subscribe(
                    "pills_clicked",
                    function (e, t, n) {
                      i(e < t, n, e);
                    }
                  );
              }
            },
            q = function (e) {
              e >= F
                ? window.customSlider &&
                  ((window.customSlider._option.arrows = !0),
                  window.customSlider.Components.NavigationArrows &&
                    window.customSlider.Components.NavigationArrows.componentUnMount(),
                  window.customSlider.Components.NavigationArrows &&
                    window.customSlider.Components.NavigationArrows.componentWillMount())
                : window.customSlider &&
                  ((window.customSlider._option.arrows = !1),
                  window.customSlider.Components.NavigationArrows &&
                    window.customSlider.Components.NavigationArrows.componentUnMount());
            },
            D = function () {
              window.customSlider.Components.SliderElements.getSlides(
                !1
              ).forEach(function (e, t) {
                window.customSlider._intialIndex !== t &&
                  (e.slide
                    .querySelector(".rh02-img")
                    .style.removeProperty("opacity"),
                  e.slide
                    .querySelector(".rh08w5")
                    .style.removeProperty("opacity"));
              });
            },
            T = function (e) {
              window.customSlider.Components.SliderElements.getSlide(e)
                .slide.querySelector(".rh02-img")
                .style.removeProperty("opacity"),
                window.customSlider.Components.SliderElements.getSlide(e)
                  .slide.querySelector(".rh08w5")
                  .style.removeProperty("opacity"),
                (window.customSlider.Components.SliderElements.getSlide(
                  e
                ).slide.querySelector(".rh02-img").style.transform =
                  "translateX(0%)");
            },
            L = "fade",
            A = 0,
            R = !1,
            F = 975,
            B = 500,
            Z = 0.7 * B,
            H = !1,
            W = -1,
            z = !document
              .querySelector(".rh08")
              .getAttribute("data-autorotate"),
            U = "aria-label",
            G = "aria-current",
            X = "aria-live",
            V = "polite",
            Y =
              document.querySelector(".rh08").getAttribute("data-playtext") ||
              "Play",
            K =
              document.querySelector(".rh08").getAttribute("data-pausetext") ||
              "Pause",
            Q = "Start autoplay",
            $ = "Pause autoplay",
            J = { MANUAL: 1 },
            ee = Math.floor,
            te = Math.abs,
            ne = "component_move.page",
            re = "updatePillsClass",
            oe = "component_updated.page component_refresh.page",
            ie = "rh08slider",
            ae = "[CUSTOMSLIDER]",
            ce = {
              topElement: ie,
              w1: "".concat(ie, "w1"),
              ls: "".concat(ie, "w2"),
              slide: "rh08slide",
              arrows: "rh08-arrows",
              arrow: "rh08-arrow",
              prev: "rh08-prevarrow",
              next: "rh08-nextarrow",
              pillsWrapper: "rh08-pills rh02w6",
              pills: "rh08-pillsw1  slick-animated-dots init dot-height",
              pillsButton: "rh08-pillbtn",
              pillsItem: "rh08-pill",
              pauseBtnWrapper: "rh08-pause",
              pauseBtnCls: "rh08-pausew1",
              pause: "rh08-paused",
              pauseBtn: "rh08-pausebtn",
              navNextClicked: "nextbtn-clicked",
              navPrevClicked: "prebtn-clicked",
              pillsClicked: "pills-clicked",
              srOnly: "sr-only",
              fadeInRightImage: "fadein-right-img",
              fadeInText: "fadein-text",
              fadeInRightImgWithDelay: "fadein-right-img-with-delay",
              fadeInLeftImgWithDelay: "fadein-left-img-with-delay",
              fadeInTextWithLargeDelay: "fadein-text-with-large-Delay",
              fadeOutLeftImage: "fadeout-left-image",
              fadeOutText: "fadeout-text",
              fadeOutRightImage: "fadeout-right-image",
            },
            le = {
              active: "slick-active",
              visible: "is-visible",
              loading: "is-loading",
            },
            se = {
              type: "slide",
              speed: 1e4,
              waitForTransition: !0,
              start: 0,
              arrows: !0,
              pills: !0,
              autoplay: !1,
              interval: 5e3,
              easing: "cubic-bezier(0.4, 0, 0.2, 1)",
              isDragRequired: !0,
              swipeDistanceThreshold: 150,
              direction: "ltr",
              isNavigation: !1,
              updateOnMove: !1,
              throttle: 100,
              componentUnMount: !1,
              classes: ce,
              parentElementOpacityRequired: !0,
            },
            ue = {
              SLIDE_CREATED: 1,
              SLIDE_MOUNTED: 2,
              SLIDE_IDLE: 3,
              SLIDE_MOVING: 4,
              SLIDE_DESTROYED: 5,
            },
            de = "slide",
            pe = Object.keys,
            me = "component_update.slide",
            fe = function (e) {
              var t = e;
              return {
                set: function (e) {
                  t = e;
                },
                is: function (e) {
                  return e === t;
                },
              };
            },
            ve = function () {
              var e = [],
                t = {
                  subscribe: function (t, n) {
                    var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null,
                      o =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : {};
                    t.split(" ").forEach(function (t) {
                      r && r.addEventListener && r.addEventListener(t, n, o),
                        e.push({ event: t, handler: n, elm: r, options: o });
                    });
                  },
                  unsubscribe: function (t) {
                    var r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    t.split(" ").forEach(function (t) {
                      e = e.filter(function (e) {
                        return !e || e.event !== t || e.elm !== r || (n(e), !1);
                      });
                    });
                  },
                  publish: function (t) {
                    for (
                      var n = arguments.length,
                        r = new Array(n > 1 ? n - 1 : 0),
                        o = 1;
                      o < n;
                      o++
                    )
                      r[o - 1] = arguments[o];
                    e.forEach(function (e) {
                      e.elm ||
                        e.event.split(".")[0] !== t ||
                        e.handler.apply(e, r);
                    });
                  },
                  componentUnMount: function () {
                    e.forEach(n), (e = []);
                  },
                };
              function n(e) {
                e.elm &&
                  e.elm.removeEventListener(e.event, e.handler, e.options);
              }
              return t;
            },
            he = function (e, t) {
              var n, r;
              return {
                componentWillMount: function () {
                  (n = t.SliderElements.ls),
                    e.subscribe(
                      "transitionend",
                      function (e) {
                        e.target === n && r && r();
                      },
                      n
                    );
                },
                start: function (t, o, i, c, l) {
                  var s = e.options,
                    u = s.speed;
                  r = l;
                  function d() {
                    var t =
                      ((A - e.Components.SliderLayout.getSlideWidth(0)) /
                        e.length) *
                      -1 *
                      o;
                    a(n, {
                      transition: "transform "
                        .concat(u, "ms ")
                        .concat(s.easing),
                      transform: "translate("
                        .concat(c.x, "px,")
                        .concat(c.y, "px)"),
                    }),
                      a(document.querySelector(".rh08sliderw1 .bg-texture2"), {
                        transition: "background-position-x "
                          .concat(u, "ms ")
                          .concat(s.easing),
                        backgroundPositionX: "".concat(t, "px"),
                      });
                  }
                  d(), d();
                },
              };
            },
            ye = function (e, t) {
              var n = {
                componentWillMount: function () {
                  o(e.index);
                },
                start: function (e, n, r, i, c) {
                  var l = t.SliderElements.w1;
                  a(l, { height: _(l.clientHeight) }),
                    o(n, r),
                    setTimeout(function () {
                      c(), a(l, { height: "" });
                    });
                },
              };
              function r(n) {
                var r;
                (r = t.SliderElements.slides[n].querySelector(".rh08w5")),
                  l(r, e.options.classes.fadeInText);
              }
              function o(n, o) {
                var i,
                  c,
                  s = e.options;
                s.requiredFadeInClass &&
                  (o ||
                    0 === o ||
                    ((i =
                      t.SliderElements.slides[n].querySelector(".rh02-img")),
                    (c = r.bind(this, n)),
                    l(i, e.options.classes.fadeInRightImage),
                    c())),
                  s.parentElementOpacityRequired &&
                    (o || 0 === o) &&
                    a(t.SliderElements.slides[n], {
                      transition: "opacity "
                        .concat(s.speed, "ms ")
                        .concat(s.easing),
                      transitionDelay: "".concat(
                        s.transitionDelayBetweenSlide,
                        "ms"
                      ),
                    });
              }
              return n;
            },
            be = {
              ControlManager: function (e, t) {
                var n,
                  r = {
                    componentWillMount: function () {
                      (n = e.options),
                        e
                          .subscribe("component_move", function (t) {
                            e.index = t;
                          })
                          .subscribe(
                            "component_updated component_refresh",
                            function (t) {
                              (n = t || n),
                                (e.index = j(e.index, 0, r.edgeIndex));
                            }
                          );
                    },
                    proceed: function (e) {
                      var n = this.getActualIndex(this.parse(e));
                      t.Navigation.proceed(n, this.rewind(n), !1);
                    },
                    parse: function (t) {
                      var n = e.index,
                        o = String(t).match(/([+\-<>]+)(\d+)?/),
                        i = o ? o[1] : "",
                        a = o ? parseInt(o[2]) : 0;
                      switch (i) {
                        case ">":
                        case "<":
                          n = (function (e, t, n) {
                            if (e > -1) return r.toIndex(e);
                            var o = n ? -1 : 1;
                            return r.toIndex(r.toPage(t) + o);
                          })(a, n, "<" === i);
                          break;
                        default:
                          n = parseInt(t);
                      }
                      return n;
                    },
                    toIndex: function (t) {
                      var n = e.length,
                        r = t;
                      return (
                        n - 1 <= (r -= (this.pageLength - n) * ee(r / n)) &&
                          r < n &&
                          (r = n - 1),
                        r
                      );
                    },
                    toPage: function (t) {
                      var n = e.length;
                      return ee(n - 1 <= t && t < n ? n - 1 : t / 1);
                    },
                    getActualIndex: function (e) {
                      return (e = j(e, 0, this.edgeIndex));
                    },
                    rewind: function (e) {
                      var t = this.edgeIndex;
                      return e > t ? (e = 0) : e < 0 && (e = t), e;
                    },
                    get pageLength() {
                      var t = e.length;
                      return Math.ceil(t);
                    },
                    get edgeIndex() {
                      var t = e.length;
                      return t ? (n.isNavigation, t - 1) : 0;
                    },
                    get lastIndex() {
                      var t = e.index - 1;
                      return t > -1 ? t : -1;
                    },
                    get nextIndex() {
                      var t = e.index + 1;
                      return (e.index < t && t <= this.edgeIndex) || 0 === t
                        ? t
                        : -1;
                    },
                  };
                return r;
              },
              SliderElements: function (r, o) {
                var i = r.topElement,
                  c = r.classes,
                  u = [],
                  f = {
                    componentWillMount: function () {
                      var e = this;
                      this.componentInitialized(),
                        r
                          .subscribe("component_refresh", function () {
                            e.componentUnMount(), e.componentInitialized();
                          })
                          .subscribe("component_updated", function () {
                            s(i, g()), l(i, g());
                          });
                    },
                    componentUnMount: function () {
                      u.forEach(function (e) {
                        e.componentUnMount();
                      }),
                        (u = []),
                        s(i, g());
                    },
                    componentInitialized: function () {
                      var r = this;
                      !(function () {
                        (f.w1 = e(i, ".".concat(c.w1))),
                          (f.ls = t(f.w1, c.ls)),
                          h(f.w1 && f.ls, "Slider list not found"),
                          (f.slides = n(f.ls, c.slide));
                        var r = ((o = c.arrows), t(i, o));
                        var o;
                        (f.arrows = {
                          prev: e(r, ".".concat(c.prev)),
                          next: e(r, ".".concat(c.next)),
                        }),
                          (f.w1.id =
                            f.w1.id || "".concat(i.id, "rh08sliderw1")),
                          (f.ls.id =
                            f.ls.id || "".concat(i.id, "rh08sliderw2"));
                      })(),
                        l(i, g()),
                        this.slides.forEach(function (e, t) {
                          r.register(e, t, -1);
                        });
                    },
                    register: function (e, t, n) {
                      var o = (function (e, t, n, r) {
                        var o = e.options.updateOnMove,
                          i =
                            "ready.slide component_updated.slide component_resized.slide component_moved.slide" +
                            (o ? " component_move.slide" : ""),
                          c = {
                            slide: r,
                            index: t,
                            realIndex: n,
                            isClone: n > -1,
                            componentWillMount: function () {
                              var c,
                                l = this;
                              this.isClone ||
                                (r.id = ""
                                  .concat(e.topElement.id, "-s")
                                  .concat((c = t + 1) < 10 ? "0" + c : c)),
                                e
                                  .subscribe(i, function () {
                                    return l.update();
                                  })
                                  .subscribe(me, f)
                                  .subscribe(
                                    "click",
                                    function () {
                                      return e.publish("click", l);
                                    },
                                    r
                                  ),
                                o &&
                                  e.subscribe(
                                    "component_move.slide",
                                    function (e) {
                                      e === n && u(!0, !1);
                                    }
                                  ),
                                a(r, { display: "" }),
                                (this.styles = m(r, "style") || "");
                            },
                            componentUnMount: function () {
                              e
                                .unsubscribe(i)
                                .unsubscribe(me)
                                .unsubscribe("click", r),
                                s(r, y(le)),
                                f();
                            },
                            update: function () {
                              u(this.isActive(), !1), u(this.isVisible(), !0);
                            },
                            isActive: function () {
                              return e.index === t;
                            },
                            isVisible: function () {
                              var t = this.isActive();
                              if (e.is(L) || t) return t;
                              var n = Math.ceil,
                                o = v(e.Components.SliderElements.w1),
                                i = v(r);
                              return o.left <= i.left && i.right <= n(o.right);
                            },
                            isWithin: function (n, r) {
                              var o = Math.abs(n - t);
                              return (
                                e.is(de) ||
                                  this.isClone ||
                                  (o = Math.min(o, e.length - o)),
                                o < r
                              );
                            },
                          };
                        function u(t, n) {
                          var o = n ? "visible" : "active",
                            i = le[o];
                          t
                            ? (l(r, i), e.publish("".concat(o), c))
                            : d(r, i) &&
                              (s(r, i),
                              s(r, ""),
                              e.publish(
                                "".concat(n ? "hidden" : "inactive"),
                                c
                              ));
                        }
                        function f() {
                          p(r, "style", c.styles);
                        }
                        return c;
                      })(r, t, n, e);
                      o.componentWillMount(), u.push(o);
                    },
                    getSlide: function (e) {
                      return u.filter(function (t) {
                        return t.index === e;
                      })[0];
                    },
                    getSlides: function (e) {
                      return e
                        ? u
                        : u.filter(function (e) {
                            return !e.isClone;
                          });
                    },
                    each: function (e) {
                      u.forEach(e);
                    },
                    get length() {
                      return this.slides.length;
                    },
                    get total() {
                      return u.length;
                    },
                  };
                function g() {
                  var e = r.options;
                  return ["rh08t-".concat(e.type)];
                }
                return f;
              },
              Navigation: function (e, t) {
                var n,
                  r,
                  o,
                  i = e.is(L),
                  c = e.options.rtl ? 1 : -1,
                  l = {
                    sign: c,
                    componentWillMount: function () {
                      (r = t.SliderElements), (n = t.SliderLayout), (o = r.ls);
                    },
                    componentDidMount: function () {
                      var t = this;
                      i ||
                        (this.moveToIndex(0),
                        e.subscribe(
                          "component_mounted resize component_updated",
                          function () {
                            t.moveToIndex(e.index);
                          }
                        ));
                    },
                    proceed: function (n, r) {
                      var o = u(n),
                        a = e.index;
                      e.publish("component_move", r, a, n),
                        Math.abs(o - this.position) >= 1 || i
                          ? (e.options.requiredFadeInClass,
                            t.Transition.start(
                              n,
                              r,
                              a,
                              this.getCoordinate(o),
                              function () {
                                s(n, r, a);
                              }
                            ))
                          : n !== a
                          ? t.ControlManager.proceed(n + n - a, !1)
                          : s(n, r, a);
                    },
                    moveToIndex: function (e) {
                      this.moveXDirection(u(e));
                    },
                    moveXDirection: function (e) {
                      a(o, { transform: "translateX(".concat(e, "px)") });
                    },
                    cancel: function () {
                      this.moveXDirection(this.position),
                        a(o, { transition: "" });
                    },
                    getActualIndex: function (e) {
                      var t = c * (n.totalSize() - n.size - n.gap);
                      return j(e, t, 0);
                    },
                    toIndex: function (e) {
                      var t = this,
                        n = 0,
                        o = 1 / 0;
                      return (
                        r.getSlides(!0).forEach(function (r) {
                          var i = r.index,
                            a = te(t.toPosition(i) - e);
                          a < o && ((o = a), (n = i));
                        }),
                        n
                      );
                    },
                    getCoordinate: function (e) {
                      return { x: e, y: 0 };
                    },
                    toPosition: function (e) {
                      var t = n.totalSize(e) - n.slideSize(e) - n.gap;
                      return c * t;
                    },
                    get position() {
                      var t = e.options.rtl ? "right" : "left";
                      return v(o)[t] - (v(r.w1)[t] - n.padding[t] * c);
                    },
                  };
                function s(t, n, r) {
                  a(o, { transition: "" }),
                    i || l.moveToIndex(n),
                    e.publish("component_moved", n, r, t);
                }
                function u(e) {
                  return l.getActualIndex(l.toPosition(e));
                }
                return l;
              },
              SliderLayout: function (e, t) {
                var n,
                  r,
                  o = t.SliderElements,
                  i =
                    ((n = {
                      componentWillMount: function () {
                        e
                          .subscribe(
                            "resize load",
                            w(function () {
                              e.publish("resize");
                            }, e.options.throttle),
                            window
                          )
                          .subscribe("resize", l)
                          .subscribe("component_updated component_refresh", c),
                          c(),
                          (this.totalSize = this.getTotalWidth),
                          (this.slideSize = this.getSlideWidth);
                      },
                      componentUnMount: function () {
                        f([o.ls, o.w1], "style");
                      },
                      get size() {
                        return this.width;
                      },
                    }),
                    (r = (function (e, t) {
                      var n,
                        r = t.SliderElements,
                        o = e.topElement;
                      return (
                        e.options,
                        {
                          componentInitialized: function () {
                            this.resize();
                          },
                          resize: function () {
                            e.options, (n = r.w1), (this.gap = C(o, 0));
                            var t = C(o, (0).left || 0),
                              i = C(o, (0).right || 0);
                            (this.padding = { left: t, right: i }),
                              a(n, { paddingLeft: _(t), paddingRight: _(i) });
                          },
                          getTotalWidth: function () {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : e.length - 1,
                              n = r.getSlide(t),
                              o = 0;
                            if (n) {
                              var i = v(n.slide),
                                a = v(r.ls);
                              (o = i.right - a.left), (o += this.gap);
                            }
                            return o;
                          },
                          getSlideWidth: function () {
                            var e = (this.width + this.gap) / 1 - this.gap;
                            return C(o, e);
                          },
                          get width() {
                            return (
                              n.clientWidth -
                              this.padding.left -
                              this.padding.right
                            );
                          },
                        }
                      );
                    })(e, t)),
                    pe(r).forEach(function (e) {
                      n[e] ||
                        Object.defineProperty(
                          n,
                          e,
                          Object.getOwnPropertyDescriptor(r, e)
                        );
                    }),
                    n);
                function c() {
                  i.componentInitialized(),
                    a(e.topElement, { maxWidth: _(0) }),
                    o.each(function (e) {
                      e.slide.style.marginRight = _(i.gap);
                    }),
                    e.options.type === de && l();
                }
                function l() {
                  i.resize(),
                    a(o.Navigation, { height: _(0) }),
                    o.each(function (e) {
                      a(e.slide, { width: _(i.getSlideWidth(e.index)) });
                    }),
                    e.publish("component_resized");
                }
                return i;
              },
              DragHandler: function (e, t) {
                var n,
                  r,
                  o,
                  i,
                  a = t.Navigation,
                  c = t.ControlManager,
                  u = {
                    disabled: !1,
                    componentWillMount: function () {
                      var n = this,
                        r = t.SliderElements,
                        o = r.w1;
                      e.subscribe("touchstart mousedown", d, o, { passive: !0 })
                        .subscribe("touchmove mousemove", m, o, { passive: !1 })
                        .subscribe(
                          "touchend touchcancel mouseleave mouseup dragend",
                          f,
                          o
                        )
                        .subscribe(
                          "component_mounted component_refresh",
                          function () {
                            g(r.ls.querySelectorAll("img, a"), function (t) {
                              e.unsubscribe("dragstart", t).subscribe(
                                "dragstart",
                                function (e) {
                                  e.preventDefault();
                                },
                                t,
                                { passive: !1 }
                              );
                            });
                          }
                        )
                        .subscribe(
                          "component_mounted component_updated",
                          function () {
                            n.disabled = !e.options.isDragRequired;
                          }
                        );
                    },
                  };
                function d(e) {
                  u.disabled || i || p(e);
                }
                function p(e) {
                  (n = a.getCoordinate(a.position)), (r = v(e, {})), (o = r);
                }
                function m(t) {
                  if (r)
                    if (((o = v(t, r)), i)) {
                      if ((t.cancelable && t.preventDefault(), !e.is(L))) {
                        var l = n.x + o.offset.x;
                        a.moveXDirection(
                          (function (t) {
                            var n = 7;
                            if (e.is(de)) {
                              var r = a.sign,
                                o = r * a.getActualIndex(a.toPosition(0)),
                                i =
                                  r *
                                  a.getActualIndex(a.toPosition(c.edgeIndex));
                              (t *= r) < o
                                ? (t = o - n * Math.log(o - t))
                                : t > i && (t = i + n * Math.log(t - i)),
                                (t *= r);
                            }
                            return t;
                          })(l)
                        );
                      }
                    } else
                      (function (t) {
                        var n = t.offset;
                        if (e.ManageState.is(4) && e.options.waitForTransition)
                          return !1;
                        return (
                          (180 * Math.atan(te(n.y) / te(n.x))) / Math.PI < 30
                        );
                      })(o) &&
                        (e.publish("component_drag", r),
                        (i = !0),
                        a.cancel(),
                        p(t));
                }
                function f() {
                  (r = null),
                    i &&
                      (e.publish("component_dragged", o),
                      (function (n) {
                        var r = n.velocity.x,
                          o = te(r);
                        if (o > 0) {
                          var i = e.options,
                            u = e.index,
                            d = r < 0 ? -1 : 1,
                            p = u;
                          if (!e.is(L)) {
                            var m = a.position;
                            o > 0.6 &&
                              te(n.offset.x) < i.swipeDistanceThreshold &&
                              (m +=
                                d * Math.min(600 * o, 1 * t.SliderLayout.size)),
                              (p = a.toIndex(m));
                          }
                          if (
                            (p === u && o > 0.1 && (p = u + d * a.sign),
                            e.is(de) && (p = j(p, 0, c.edgeIndex)),
                            i.requiredFadeInClass)
                          ) {
                            var f = function (t) {
                              -1 === t
                                ? (l(
                                    document.querySelector("#rh08"),
                                    e.options.classes.navPrevClicked
                                  ),
                                  c.proceed(
                                    ">".concat(e.length - 1),
                                    i.isNavigation
                                  ))
                                : t > e.length - 1
                                ? (l(
                                    document.querySelector("#rh08"),
                                    e.options.classes.navNextClicked
                                  ),
                                  c.proceed(">0", i.isNavigation))
                                : (t > e._intialIndex
                                    ? l(
                                        document.querySelector("#rh08"),
                                        e.options.classes.navNextClicked
                                      )
                                    : l(
                                        document.querySelector("#rh08"),
                                        e.options.classes.navPrevClicked
                                      ),
                                  c.proceed(t, i.isNavigation));
                            };
                            s(
                              document.querySelector("#rh08"),
                              e.options.classes.navNextClicked
                            ),
                              s(
                                document.querySelector("#rh08"),
                                e.options.classes.navPrevClicked
                              ),
                              -1 === p
                                ? l(
                                    document.querySelector("#rh08"),
                                    e.options.classes.navPrevClicked
                                  )
                                : p > e.length - 1 || p > e._intialIndex
                                ? l(
                                    document.querySelector("#rh08"),
                                    e.options.classes.navNextClicked
                                  )
                                : l(
                                    document.querySelector("#rh08"),
                                    e.options.classes.navPrevClicked
                                  ),
                              e.publish("paused_slider"),
                              e.publish("component_swiped", p, f.bind(this, p));
                          } else
                            T(p),
                              c.proceed(p, i.isNavigation),
                              e.publish("paused_slider");
                        }
                      })(o),
                      (i = !1));
                }
                function v(e, t) {
                  var n = e.timeStamp,
                    r = e.touches,
                    o = r ? r[0] : e,
                    i = o.clientX,
                    a = o.clientY,
                    c = t.to || {},
                    l = c.x,
                    s = void 0 === l ? i : l,
                    u = c.y,
                    d = { x: i - s, y: a - (void 0 === u ? a : u) },
                    p = n - (t.time || 0);
                  return {
                    to: { x: i, y: a },
                    offset: d,
                    time: n,
                    velocity: { x: d.x / p, y: d.y / p },
                  };
                }
                return u;
              },
              ClickHandler: function (e, t) {
                var n = !1,
                  r = {
                    required: e.options.isDragRequired,
                    componentWillMount: function () {
                      e.subscribe("click", o, t.SliderElements.w1, {
                        capture: !0,
                      })
                        .subscribe("component_drag", function () {
                          n = !0;
                        })
                        .subscribe("component_dragged", function () {
                          setTimeout(function () {
                            n = !1;
                          });
                        });
                    },
                  };
                function o(e) {
                  n &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    e.stopImmediatePropagation());
                }
                return r;
              },
              AutoRotate: function (e, t, n) {
                var r,
                  o = [],
                  i = t.SliderElements,
                  a = {
                    required: e.options.interval,
                    componentWillMount: function () {
                      var t = e.options;
                      if (i.slides.length > 1) {
                        (r = (function (e, t, n) {
                          var r,
                            o,
                            i,
                            a = window.requestAnimationFrame,
                            c = !0,
                            l = function l(s) {
                              c ||
                                (r || ((r = s), i && i < 1 && (r -= i * t)),
                                (i = (o = s - r) / t),
                                o >= t && ((r = 0), (i = 1), e()),
                                n && n(i),
                                a(l));
                            };
                          return {
                            pause: function () {
                              (c = !0), (r = 0);
                            },
                            play: function (e) {
                              (r = 0), e && (i = 0), c && ((c = !1), a(l));
                            },
                          };
                        })(
                          function () {
                            if (e.options.requiredFadeInClass) {
                              s(
                                document.querySelector("#rh08"),
                                e.options.classes.pillsClicked
                              ),
                                s(
                                  document.querySelector("#rh08"),
                                  e.options.classes.navPrevClicked
                                ),
                                l(
                                  document.querySelector("#rh08"),
                                  e.options.classes.navNextClicked
                                ),
                                e.publish("auto_rotate_event", function () {
                                  R ||
                                    (e._intialIndex < e.length - 1
                                      ? e.proceed(">")
                                      : e.proceed(">0"));
                                });
                            } else e.proceed(">");
                          },
                          t.interval,
                          function (t) {
                            e.publish("".concat(n, ":playing"), t);
                          }
                        )),
                          (function () {
                            i.play &&
                              e.subscribe(
                                "click",
                                function () {
                                  a.play(J.MANUAL);
                                },
                                i.play
                              );
                            i.pause &&
                              ((t = [i.pause]),
                              (n = "click"),
                              (r = J.MANUAL),
                              (o = !1),
                              t.forEach(function (t) {
                                e.subscribe(
                                  n,
                                  function () {
                                    a[o ? "play" : "pause"](r);
                                  },
                                  t
                                );
                              }));
                            var t, n, r, o;
                            e.subscribe(
                              "component_move component_refresh",
                              function () {
                                a.play();
                              }
                            ).subscribe("componentUnMount", function () {
                              a.pause();
                            });
                          })();
                        var o = window.matchMedia(
                          "(prefers-reduced-motion: reduce)"
                        );
                        o && o.matches
                          ? (e.options.hasPauseClass = !0)
                          : e.options.autoplay
                          ? this.play()
                          : this.pause(3);
                      }
                    },
                    play: function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0;
                      (o = o.filter(function (e) {
                        return e !== t;
                      })).length ||
                        (e.publish("".concat(n, ":play")), r.play(!0));
                    },
                    pause: function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0;
                      r.pause(),
                        -1 === o.indexOf(t) && o.push(t),
                        1 === o.length && e.publish("".concat(n, ":pause"));
                    },
                  };
                return a;
              },
              NavigationArrows: function (e, t, n) {
                var a,
                  c,
                  u,
                  d = e.classes,
                  p = e.topElement,
                  m = t.SliderElements,
                  v = {
                    required: e.options.arrows,
                    componentWillMount: function () {
                      (a = m.arrows.prev),
                        (c = m.arrows.next),
                        (a && c) ||
                          !e.options.arrows ||
                          ((a = g(!0)),
                          (c = g(!1)),
                          document.querySelectorAll(".rh08slide").length <= 1 &&
                            ((a.style.display = "none"),
                            (c.style.display = "none")),
                          (u = !0),
                          (function () {
                            var e = r("div", { class: d.arrows });
                            i(e, a),
                              i(e, c),
                              (function (e, t) {
                                if (e && t) {
                                  var n = t.parentElement;
                                  n && n.insertBefore(e, t);
                                }
                              })(e, p.firstElementChild);
                          })()),
                        a &&
                          c &&
                          e
                            .subscribe(
                              "click",
                              function (t) {
                                if (!t.detail || 1 === t.detail) {
                                  if (R) return;
                                  (R = !0),
                                    setTimeout(function () {
                                      R = !1;
                                    }, B + Z);
                                  var n = function () {
                                    0 === e._intialIndex
                                      ? e.proceed("<".concat(e.length - 1))
                                      : e.proceed("<"),
                                      e.publish("announce_slide");
                                  };
                                  e.publish("paused_slider"),
                                    s(
                                      document.querySelector("#rh08"),
                                      e.options.classes.pillsClicked
                                    ),
                                    s(
                                      document.querySelector("#rh08"),
                                      e.options.classes.navNextClicked
                                    ),
                                    l(
                                      document.querySelector("#rh08"),
                                      e.options.classes.navPrevClicked
                                    ),
                                    e.publish("previous_nav_clicked", n);
                                }
                              },
                              e.options.rtl ? c : a
                            )
                            .subscribe(
                              "click",
                              function (t) {
                                if (
                                  !R &&
                                  ((R = !0),
                                  setTimeout(function () {
                                    R = !1;
                                  }, B + Z),
                                  !t.detail || 1 === t.detail)
                                ) {
                                  var n = function () {
                                    e._intialIndex < e.length - 1
                                      ? e.proceed(">")
                                      : e.proceed(">0"),
                                      e.publish("announce_slide");
                                  };
                                  e.publish("paused_slider"),
                                    s(
                                      document.querySelector("#rh08"),
                                      e.options.classes.pillsClicked
                                    ),
                                    s(
                                      document.querySelector("#rh08"),
                                      e.options.classes.navPrevClicked
                                    ),
                                    l(
                                      document.querySelector("#rh08"),
                                      e.options.classes.navNextClicked
                                    ),
                                    e.publish("next_nav_clicked", n);
                                }
                              },
                              e.options.rtl ? a : c
                            )
                            .subscribe(
                              "component_mounted component_move component_updated component_refresh",
                              h
                            ),
                        (this.arrows = { prev: a, next: c });
                    },
                    componentDidMount: function () {
                      e.publish("".concat(n, ":component_mounted"), a, c);
                    },
                    componentUnMount: function () {
                      f([a, c], "disabled"), u && o(a.parentElement);
                    },
                  };
                function h() {
                  var r = t.ControlManager,
                    o = r.lastIndex,
                    i = r.nextIndex;
                  e.publish("".concat(n, ":component_updated"), a, c, o, i);
                }
                function g(e) {
                  return (function (e) {
                    var t = r("div", {});
                    return (t.innerHTML = e), t.firstChild;
                  })(
                    "<button  data-lbl= "
                      .concat(e ? "scroll-left" : "scroll-right", ' class="')
                      .concat(d.arrow, " ")
                      .concat(e ? d.prev : d.next, '" aria-label= "')
                      .concat(
                        e ? "previous " : "next ",
                        'slide" type="button"/>'
                      )
                  );
                }
                return v;
              },
              Pills: function (e, t, n) {
                var a = {},
                  c = t.SliderElements,
                  v = {
                    componentWillMount: function () {
                      if (e.options.pills) {
                        a = (function () {
                          var t = this,
                            n = e.classes,
                            o = r("ul", { class: n.pills }),
                            a = r("div", {
                              class: n.pillsWrapper,
                              "data-trackas": "pills",
                            }),
                            u = c
                              .getSlides(!1)
                              .filter(function (e) {
                                return e.index % 1 === 0;
                              })
                              .map(function (c, u) {
                                var d = r("li", { class: n.pillsItem }),
                                  p = r("button", {
                                    class: n.pillsButton,
                                    type: "button",
                                    title: "Slide ".concat(u + 1),
                                    "data-lbl": "view-slide-".concat(u + 1),
                                  }),
                                  m = r("span", {});
                                return (
                                  (m.innerHTML = "Slide ".concat(u + 1)),
                                  i(p, m),
                                  i(d, p),
                                  i(o, d),
                                  i(a, o),
                                  e.subscribe(
                                    "click",
                                    function (n) {
                                      if (u !== e._intialIndex)
                                        if (e.options.requiredFadeInClass) {
                                          if (R) return;
                                          (R = !0),
                                            setTimeout(function () {
                                              R = !1;
                                            }, B + Z);
                                          var r = function (t) {
                                            e.proceed(">".concat(t)),
                                              e.publish("announce_slide");
                                          };
                                          e.publish("paused_slider"),
                                            s(
                                              document.querySelector("#rh08"),
                                              e.options.classes.navNextClicked
                                            ),
                                            s(
                                              document.querySelector("#rh08"),
                                              e.options.classes.navPrevClicked
                                            ),
                                            e._intialIndex > u
                                              ? l(
                                                  document.querySelector(
                                                    "#rh08"
                                                  ),
                                                  e.options.classes
                                                    .navPrevClicked
                                                )
                                              : l(
                                                  document.querySelector(
                                                    "#rh08"
                                                  ),
                                                  e.options.classes
                                                    .navNextClicked
                                                ),
                                            e.publish(
                                              "pills_clicked",
                                              u,
                                              e._intialIndex,
                                              r.bind(t, u)
                                            );
                                        } else T(u), e.proceed(">".concat(u));
                                    },
                                    p
                                  ),
                                  { li: d, button: p, page: u }
                                );
                              });
                          return { ls: a, items: u };
                        })();
                        var t = (function () {
                          var t,
                            n = e.classes,
                            o = r("div", { class: n.pauseBtnWrapper }),
                            a = r(
                              "button",
                              ((t = { class: n.pauseBtnCls }),
                              (0, u.Z)(t, X, V),
                              (0, u.Z)(t, "tabindex", "0"),
                              (0, u.Z)(t, "data-lbl", "pause"),
                              (0, u.Z)(t, "title", K),
                              t)
                            ),
                            c = r("i", { class: "paused" }),
                            v = r("span", {});
                          p(a, "data-play", Y),
                            p(a, "data-Pause", K),
                            (v.innerHTML = e.options.hasPauseClass ? Y : K),
                            l(c, n.pauseBtn),
                            e.options.hasPauseClass
                              ? s(c, "paused")
                              : l(c, "paused"),
                            e.options.hasPauseClass ? p(a, U, Q) : p(a, U, $),
                            e.options.hasPauseClass && l(c, [n.pause]),
                            i(a, c),
                            i(a, v),
                            i(o, a);
                          var h = function () {
                              s(c, "paused"),
                                l(c, n.pause),
                                e.Components.AutoRotate.pause(3),
                                (v.innerHTML = m(a, "data-Play")),
                                p(a, U, Q),
                                setTimeout(function () {
                                  p(a, "data-lbl", "play"), p(a, "title", Y);
                                }, 10);
                            },
                            g = function () {
                              l(c, "paused"),
                                s(c, n.pause),
                                e.Components.AutoRotate.play(3),
                                p(a, U, $),
                                setTimeout(function () {
                                  p(a, "data-lbl", "pause"), p(a, "title", K);
                                }, 10),
                                (v.innerHTML = m(a, "data-Pause"));
                            };
                          return (
                            e.subscribe("paused_slider", function () {
                              f([c.parentElement], X), d(c, n.pause) || h();
                            }),
                            e.subscribe("play_slider", function () {
                              d(c, n.pause) && g();
                            }),
                            e.subscribe(
                              "click",
                              function () {
                                p(c.parentElement, X, V),
                                  d(c, n.pause)
                                    ? (document
                                        .querySelector(
                                          ".".concat(
                                            e.options.rtl ? n.prev : n.next
                                          )
                                        )
                                        .click(),
                                      g())
                                    : h();
                              },
                              a
                            ),
                            o
                          );
                        })();
                        i(a.ls, t);
                        var n = e.topElement;
                        i(n, a.ls),
                          e.subscribe(ne, function (t, n) {
                            e.options.requiredFadeInClass || h(t, n);
                          }),
                          e.subscribe(re, h);
                      }
                      e.unsubscribe(oe).subscribe(oe, function () {
                        v.componentUnMount(),
                          e.options.pills &&
                            (v.componentWillMount(), v.componentDidMount());
                      });
                    },
                    componentDidMount: function () {
                      if (e.options.pills) {
                        var t = e.index;
                        e.publish(
                          "".concat(n, ":component_mounted"),
                          a,
                          this.getItem(t)
                        ),
                          h(t, -1);
                      }
                    },
                    componentUnMount: function () {
                      o(a.ls),
                        a.items &&
                          a.items.forEach(function (t) {
                            e.unsubscribe("click", t.button);
                          }),
                        e.unsubscribe(ne),
                        (a = {});
                    },
                    getItem: function (e) {
                      return a.items[t.ControlManager.toPage(e)];
                    },
                    get data() {
                      return a;
                    },
                  };
                function h(t, r) {
                  var o = v.getItem(r),
                    i = v.getItem(t),
                    c = le.active;
                  o && (s(o.li, c), f(o.button, G)),
                    i && (l(i.li, c), p(i.button, G, !0)),
                    e.publish("".concat(n, ":component_updated"), a, o, i);
                }
                return v;
              },
              KeyboardInteraction: function (t) {
                var n;
                return {
                  componentWillMount: function () {
                    t.subscribe(
                      "component_mounted component_updated",
                      function () {
                        var r = t.topElement,
                          o = e(document.body, "#u28skip2c");
                        n && t.unsubscribe("keyup", n),
                          (n = r),
                          t.subscribe(
                            "keyup",
                            function (e) {
                              r.contains(document.activeElement) &&
                                9 === e.keyCode &&
                                t.publish("paused_slider");
                            },
                            n
                          ),
                          o &&
                            o.addEventListener("keydown", function (e) {
                              r.contains(document.activeElement) &&
                                13 === e.keyCode &&
                                t.publish("paused_slider");
                            });
                      }
                    );
                  },
                };
              },
              MouseHoverHandler: function (e) {
                var t = !1;
                return {
                  componentWillMount: function () {
                    e.subscribe(
                      "component_mounted component_updated",
                      function () {
                        e.Components.SliderElements.getSlides(!1).forEach(
                          function (n) {
                            var r = n.slide.querySelector(".rh02txt");
                            r &&
                              (e.unsubscribe("mouseenter", r),
                              e.unsubscribe("mouseleave", r)),
                              e.subscribe(
                                "mouseenter",
                                function (n) {
                                  d(
                                    e.topElement.querySelector(
                                      ".".concat(e.classes.pauseBtn)
                                    ),
                                    e.classes.pause
                                  ) || ((t = !0), e.publish("paused_slider"));
                                },
                                r
                              ),
                              e.subscribe(
                                "mouseleave",
                                function (n) {
                                  t && ((t = !1), e.publish("play_slider"));
                                },
                                r
                              );
                          }
                        );
                      }
                    );
                  },
                };
              },
              SlideAnnouncer: function (e) {
                var t;
                return {
                  componentWillMount: function () {
                    (t = r(
                      "span",
                      (0, u.Z)({ class: e.classes.srOnly }, X, V)
                    )),
                      i(e.topElement, t),
                      e.subscribe("announce_slide", function (n) {
                        t.innerHTML = "slide "
                          .concat(e._intialIndex + 1, " of ")
                          .concat(e.Components.SliderElements.total);
                      });
                  },
                };
              },
            },
            je = (function () {
              function e(t) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                (0, xe.Z)(this, e),
                  (this.topElement =
                    t instanceof Element ? t : document.querySelector(t)),
                  h(this.topElement, "Invalid Selector"),
                  (this.Components = null),
                  (this.EventHandler = ve()),
                  (this.ManageState = fe(ue.SLIDE_CREATED)),
                  (this._option = x(se, n));
                var o = document
                  .querySelector(".rh08")
                  .getAttribute("data-randomize");
                (this._intialIndex = o ? E(0, Oe - 1) : 0),
                  (this._components = r);
              }
              return (
                (0, we.Z)(e, [
                  {
                    key: "componentWillMount",
                    value: function () {
                      var e,
                        t = this;
                      this.ManageState.set(ue.SLIDE_CREATED),
                        (this.Components = (function (e, t, n) {
                          var r = {};
                          return (
                            g(t, function (t, n) {
                              r[n] = t(e, r, n.toLowerCase());
                            }),
                            n || (n = e.is(L) ? ye : he),
                            (r.Transition = n(e, r)),
                            r
                          );
                        })(this, x(this._components, {}), null));
                      try {
                        g(this.Components, function (e, n) {
                          var r = e.required;
                          void 0 === r || r
                            ? e.componentWillMount && e.componentWillMount()
                            : delete t.Components[n];
                        });
                      } catch (r) {
                        return (
                          (e = r.message),
                          void console.error("".concat(ae, " ").concat(e))
                        );
                      }
                      var n = this.ManageState;
                      return (
                        n.set(ue.SLIDE_MOUNTED),
                        g(this.Components, function (e) {
                          e.componentDidMount && e.componentDidMount();
                        }),
                        this.publish("component_mounted"),
                        n.set(ue.SLIDE_IDLE),
                        this.publish("ready"),
                        a(this.topElement, { visibility: "visible" }),
                        this.subscribe(
                          "component_move component_drag",
                          function () {
                            return n.set(ue.SLIDE_MOVING);
                          }
                        ).subscribe(
                          "component_moved component_dragged",
                          function () {
                            return n.set(ue.SLIDE_IDLE);
                          }
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "subscribe",
                    value: function (e, t) {
                      var n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : null,
                        r =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : {};
                      return this.EventHandler.subscribe(e, t, n, r), this;
                    },
                  },
                  {
                    key: "unsubscribe",
                    value: function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                      return this.EventHandler.unsubscribe(e, t), this;
                    },
                  },
                  {
                    key: "publish",
                    value: function (e) {
                      for (
                        var t,
                          n = arguments.length,
                          r = new Array(n > 1 ? n - 1 : 0),
                          o = 1;
                        o < n;
                        o++
                      )
                        r[o - 1] = arguments[o];
                      return (
                        (t = this.EventHandler).publish.apply(t, [e].concat(r)),
                        this
                      );
                    },
                  },
                  {
                    key: "proceed",
                    value: function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : this.options.waitForTransition;
                      return (
                        (this.ManageState.is(ue.SLIDE_IDLE) ||
                          (this.ManageState.is(ue.SLIDE_MOVING) && !t)) &&
                          this.Components.ControlManager.proceed(e, !1),
                        this
                      );
                    },
                  },
                  {
                    key: "is",
                    value: function (e) {
                      return e === this._option.type;
                    },
                  },
                  {
                    key: "componentUnMount",
                    value: function () {
                      var e = this,
                        t =
                          !(arguments.length > 0 && void 0 !== arguments[0]) ||
                          arguments[0];
                      if (!this.ManageState.is(ue.SLIDE_CREATED))
                        return (
                          y(this.Components)
                            .reverse()
                            .forEach(function (e) {
                              e.componentUnMount && e.componentUnMount(t);
                            }),
                          this.publish("componentUnMount", t),
                          this.EventHandler.componentUnMount(),
                          this.ManageState.set(ue.SLIDE_DESTROYED),
                          this
                        );
                      this.subscribe("ready", function () {
                        return e.componentUnMount(t);
                      });
                    },
                  },
                  {
                    key: "index",
                    get: function () {
                      return this._intialIndex;
                    },
                    set: function (e) {
                      this._intialIndex = parseInt(e);
                    },
                  },
                  {
                    key: "length",
                    get: function () {
                      return this.Components.SliderElements.length;
                    },
                  },
                  {
                    key: "options",
                    get: function () {
                      return this._option;
                    },
                    set: function (e) {
                      var t = this.ManageState.is(ue.SLIDE_CREATED);
                      t || this.publish("component_update"),
                        (this._option = x(this._option, e)),
                        t || this.publish("component_updated", this._option);
                    },
                  },
                  {
                    key: "classes",
                    get: function () {
                      return this._option.classes;
                    },
                  },
                ]),
                e
              );
            })(),
            Ee = (function (e) {
              (0, ge.Z)(n, e);
              var t = Ce(n);
              function n(e, r) {
                return (0, xe.Z)(this, n), t.call(this, e, r, be);
              }
              return n;
            })(je);
          window.CustomSlider = Ee;
          var ke = document
            .querySelector(".rh08")
            .getAttribute("data-autorotate");
          window.customSlider = null;
          var Oe = document.querySelectorAll(".rh08slide").length,
            Me = document.querySelector(".rh08").getAttribute("data-randomize"),
            Pe = {
              type: "fade",
              autoplay: !!(ke && parseInt(ke) > 0),
              interval: ke && parseInt(ke) > 0 ? 1e3 * parseInt(ke) : 5e3,
              transitionDelayBetweenSlide: 500,
              requiredFadeInClass: !0,
              hasPauseClass: z,
              start: Me ? E(0, Oe - 1) : 0,
              pills: Oe > 1,
              parentElementOpacityRequired: !1,
              throttle: B / 2,
              arrows: !1,
              rtl: d(document.body, "rtl"),
            },
            Ne = {
              type: "slide",
              autoplay: !!(ke && parseInt(ke) > 0) && !1,
              interval: 0,
              transitionDelayBetweenSlide: 0,
              speed: 800,
              requiredFadeInClass: !1,
              parentElementOpacityRequired: !1,
              arrows: !1,
              throttle: 100,
              pills: Oe > 1,
              rtl: d(document.body, "rtl"),
            };
          window.addEventListener(
            "resize",
            w(function (e) {
              O();
            }, 300)
          ),
            "loading" !== document.readyState
              ? O()
              : document.addEventListener("DOMContentLoaded", function () {
                  O();
                });
        }
      }
      var ke = {
        panel3Slides: [
          {
            id: "COREDA5C41B67B1F4945A1083A9A5776B453",
            type: "SH-Panel",
            typeCategory: "ContentType",
            name: "HP LF Cloud Free Tier 2022",
            description: "",
            slug: "3000006914054-hp-lf-cloud-free-tier",
            language: "en-US",
            translatable: !0,
            createdDate: { value: "2021-11-19T02:48:34.265Z", timezone: "UTC" },
            updatedDate: { value: "2022-03-03T23:48:27.938Z", timezone: "UTC" },
            fileExtension: "contentItem",
            fields: {
              background_image: {
                id: "CONT8D7F9429D21A41C694BCC17557341140",
                type: "DigitalAsset",
                typeCategory: "DigitalAssetType",
                name: "rh08-free-tier-732x372.jpg",
                fileExtension: "jpg",
                links: [],
              },
              image_class: null,
              panel_description:
                "<!DOCTYPE html><p>Mark your calendars for Oracle CloudWorld on October 16&ndash;20, 2022, in Las Vegas. Make plans to join us at Oracle&rsquo;s new global customer and partner conference for cloud infrastructure and cloud applications.</p>\n",
              panel_logo: null,
              theme: null,
              cta_buttons: [
                {
                  Text: "Get CloudWorld details",
                  Link: "https://www.oracle.com/cloudworld/?intcmp=ohp0301-lf",
                  DataLbl: "cta-1030-panelX-free-tier-lf",
                  NewTab: !1,
                },
              ],
              image_allignment: null,
              panel_copy: null,
              panel_title: "Introducing Oracle CloudWorld",
              panel_color: null,
              panel_alignment: null,
              order: 5,
            },
            mimeType: "contentItem",
            fileGroup: "contentItem",
            links: [],
          },
        ],
        rotation: 5,
        randomize: !0,
      };
      var Oe = function (e) {
        var t = e.data;
        (t && t.panel3Slides && t.panel3Slides.length > 0) ||
          w.logger.error(
            "Failed to receive hero component props from server -> RH08",
            "PN_LONGFORM_V2"
          );
        var n = (0, i.useContext)(v.Z).oceIntegrator,
          r = (0, i.useContext)(S.N),
          o = (0, x.useRouter)().locale;
        (0, i.useEffect)(function () {
          Ee(),
            "en" !== o && ve.initialize(o),
            (t && t.panel3Slides && t.panel3Slides.length > 0) ||
              w.logger.debug(
                "Hero component rendering with mock data --\x3e RH08",
                "PN_LONGFORM_V2"
              );
        }, []);
        var a = function (e) {
            var t = e.fields,
              r = null === t || void 0 === t ? void 0 : t.background_image;
            return r
              ? ""
                  .concat(n, "/assets/")
                  .concat(r.id, "/native/")
                  .concat((r.name || "").replace(/\s+|\(+|\)+/g, "-"))
              : "";
          },
          c = function (e) {
            var t = e.fields,
              r = null === t || void 0 === t ? void 0 : t.panel_logo;
            return r
              ? ""
                  .concat(n, "/assets/")
                  .concat(r.id, "/native/")
                  .concat((r.name || "").replace(/\s+|\(+|\)+/g, "-"))
              : "";
          },
          l = function (e, t) {
            return e.panel3Slides.map(function (e, n) {
              var r, o;
              return (0, j.jsx)(
                "div",
                {
                  className: "rh08slide",
                  children: (0, j.jsxs)("div", {
                    className: "rh08w1 cpad",
                    children: [
                      (0, j.jsx)(he.Z, {
                        className: "rh08w2 rh02-img bgimg",
                        src: t
                          ? "https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/CONT68AE0065E40B49F193CD81018B199122/native/rh08-cloudworld.png"
                          : a(e),
                        style: { backgroundPosition: "inherit" },
                        "data-bgim": a(e),
                      }),
                      (0, j.jsx)("div", {
                        className: "rh08w2 rh02txt",
                        children: (0, j.jsx)("div", {
                          className: "rh08w5",
                          children: (0, j.jsxs)("div", {
                            className: "rh08w6",
                            children: [
                              e && e.fields && e.fields.panel_logo
                                ? (0, j.jsx)("div", {
                                    className: "rh08logo",
                                    children: (0, j.jsx)("div", {
                                      className: "rw-logo",
                                      children: (0, j.jsx)(T.Z, {
                                        alt: "logo",
                                        imageUrl: c(e),
                                      }),
                                    }),
                                  })
                                : null,
                              (0, j.jsx)("h2", {
                                className: "rwaccent-4",
                                children:
                                  (null === e ||
                                  void 0 === e ||
                                  null === (r = e.fields) ||
                                  void 0 === r
                                    ? void 0
                                    : r.panel_title) || "",
                              }),
                              (0, j.jsxs)("div", {
                                className: "rh08body",
                                children: [
                                  (0, j.jsx)("div", {
                                    dangerouslySetInnerHTML: {
                                      __html: "".concat(
                                        null === e ||
                                          void 0 === e ||
                                          null === (o = e.fields) ||
                                          void 0 === o
                                          ? void 0
                                          : o.panel_description
                                      ),
                                    },
                                  }),
                                  (0, j.jsx)("div", {
                                    className: "obttns",
                                    children:
                                      e.fields &&
                                      e.fields.cta_buttons &&
                                      e.fields.cta_buttons.map(function (e, t) {
                                        return (0,
                                        j.jsx)("div", { className: 0 === t ? "obttn" : "obttn1", children: (0, j.jsxs)("a", { href: e.Link || "#", target: e.NewTab ? "_blank" : null, "data-lbl": e.DataLbl, rel: "noreferrer", children: [e.Text, (0, j.jsx)("span", { className: "sr-only" })] }) }, t);
                                      }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                },
                n
              );
            });
          };
        return (0, j.jsx)("section", {
          className: "rh08 rh08v0 rw-neutral-50bg",
          "data-trackas": "rh08",
          "data-ocomid": "rh08",
          "data-autorotate": null === t || void 0 === t ? void 0 : t.rotation,
          "data-randomize": null === t || void 0 === t ? void 0 : t.randomize,
          "data-playtext": r.prodnav_play,
          "data-pausetext": r.prodnav_pause,
          children: (0, j.jsxs)("div", {
            className: "cwidth",
            children: [
              (0, j.jsxs)("div", {
                className: "bgimgw1",
                children: [
                  (0, j.jsx)("div", {
                    className:
                      "bg-texture2 bgimg bgimgw2 bgimg-cover bgimg-fsize bgimg-med",
                  }),
                  (0, j.jsx)("div", {
                    className:
                      "bg-texture1 bgimg bgimgw2 bgimg-cover bgimg-fsize bgimg-med",
                  }),
                  (0, j.jsx)("br", {}),
                ],
              }),
              (0, j.jsx)("div", {
                id: "rh08",
                className: "rh08slider",
                children: (0, j.jsx)("div", {
                  className: "rh08sliderw1",
                  children: (0, j.jsx)("div", {
                    className: "rh08sliderw2",
                    children:
                      t && t.panel3Slides && t.panel3Slides.length > 0
                        ? l(t)
                        : l(ke, !0),
                  }),
                }),
              }),
            ],
          }),
        });
      };
      var Me = function (e) {
          var t = e.initialData,
            n = void 0 === t ? {} : t,
            r = e.longFormData;
          return (0, j.jsxs)(j.Fragment, {
            children: [
              (0, j.jsx)(c(), {
                children: (0, j.jsx)("script", {
                  type: "text/javascript",
                  children: "var s_pageName=`ocom:en-us:/long-form`;",
                }),
              }),
              (0, j.jsxs)("main", {
                children: [
                  (0, j.jsx)(Oe, { data: r }),
                  (0, j.jsx)(fe, { initialData: n }),
                ],
              }),
            ],
          });
        },
        Pe = n(5152),
        Ne = n.n(Pe);
      function Ie(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return qe(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return qe(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          a = !0,
          c = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (c = !0), (i = e);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw i;
            }
          },
        };
      }
      function qe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function De(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? De(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : De(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Le = Ne()(
          function () {
            return n.e(93).then(n.bind(n, 2093));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [2093];
              },
            },
          }
        ),
        Ae = Ne()(
          function () {
            return n.e(669).then(n.bind(n, 1669));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [1669];
              },
            },
          }
        ),
        Re = Ne()(
          function () {
            return n.e(590).then(n.bind(n, 5590));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [5590];
              },
            },
          }
        ),
        Fe = Ne()(
          function () {
            return n.e(297).then(n.bind(n, 1297));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [1297];
              },
            },
          }
        ),
        Be = Ne()(
          function () {
            return Promise.resolve().then(n.bind(n, 1780));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [1780];
              },
            },
          }
        ),
        Ze = P.MY.useFetchTaxonomyList,
        He = P.MY.useFetchProductDetails,
        We = P.MY.useFetchLocaleSummary,
        ze = P.MY.useFetchTaxonomyByApiName;
      function Ue(e) {
        var t,
          n = e.initialData,
          r = void 0 === n ? {} : n,
          a = e.setToggle,
          c = e.wrapperRef,
          u = e.scrollDetails,
          d = [],
          S = (0, i.useContext)(v.Z),
          _ = S.isPreview,
          C = S.viewport,
          k = S.enableLongTermFallback,
          O = (C || {}).isMobile,
          P = (0, i.createRef)(),
          N = (0, x.useRouter)(),
          q = {
            "0E3B648885C24A02B5B2676BEB82C7E9": {
              color: "#33553C",
              image: "".concat(o.p$, "rh02-panel2.jpg"),
              animateClass: "rc20p1-open",
            },
            "5A0B0A9213D344628F4BBA4029291F4E": {
              color: "#0A3F46",
              image: "".concat(o.p$, "rh02-panel1.jpg"),
              animateClass: "rc20p2-open",
            },
          },
          D = (0, x.useRouter)().locale,
          T = { localeParams: (0, y.aP)(D, !1) };
        (0, g.Z)(
          P,
          (0, i.useCallback)(function () {
            return Kt(!1);
          })
        );
        var L = (0, i.useState)({}),
          A = L[0],
          R = L[1],
          F = (0, i.useState)({}),
          B = F[0],
          Z = F[1],
          H = (0, i.useState)(null),
          W = H[0],
          z = H[1],
          U = (0, i.useState)(""),
          G = U[0],
          X = U[1],
          V = (0, i.useState)(null),
          Y = V[0],
          K = V[1],
          Q = (0, i.useState)(!1),
          $ = Q[0],
          J = Q[1],
          ee = (0, i.useState)(!1),
          te = ee[0],
          ne = ee[1],
          re = (0, i.useRef)(null),
          oe = (0, i.useState)(!1),
          ie = oe[0],
          ae = oe[1],
          ce = q[Y] || null,
          le = (0, i.useRef)(),
          se = (0, i.useRef)(),
          ue = (0, i.useRef)(),
          de = (0, i.useRef)(),
          pe = (0, i.useRef)(),
          me = (0, i.useRef)(),
          fe = (0, i.useRef)(),
          ve = (0, i.useState)(!1),
          ge = ve[0],
          ye = ve[1],
          be = (0, i.useState)(!1),
          xe = (be[0], be[1]),
          we = (0, i.useState)(0),
          Se = we[0],
          je = we[1],
          _e = (0, i.useState)({
            txnmyId: null,
            taxnmyName: "",
            txnmySelected: null,
          }),
          Ce = _e[0],
          Ee = _e[1],
          ke = Ce || {},
          Oe = ke.txnmyId,
          Me = ke.taxnmyName,
          Pe = ke.txnmySelected,
          Ne = (0, i.useState)({}),
          qe = Ne[0],
          De = Ne[1],
          Ue = (0, i.useState)(null),
          Ge = Ue[0],
          Xe = Ue[1],
          Ve = (0, i.useState)(""),
          Ye = Ve[0],
          Ke = Ve[1],
          Qe = (0, i.useState)(!1),
          $e = Qe[0],
          Je = Qe[1],
          et = (0, i.useState)({
            queryTaxonomyId: null,
            queryLocale: !1,
            getTaxnomyList: !1,
            getTaxonomyByName: !1,
          }),
          tt = et[0],
          nt = et[1],
          rt = tt || {},
          ot = rt.queryTaxonomyId,
          it = rt.queryLocale,
          at = rt.getTaxnomyList,
          ct = rt.getTaxonomyByName,
          lt = (0, i.useRef)(null),
          st = (0, i.useRef)(null),
          ut = (0, i.useRef)(null),
          dt = (0, i.useRef)(null),
          pt = (0, i.useRef)(null),
          mt = (0, i.useState)(null),
          ft = mt[0],
          vt = mt[1],
          ht = function (e, t) {
            return r && r[t || W] ? r[t || W][e] : null;
          };
        function gt(e) {
          9 === e.nativeEvent.keyCode &&
            !1 === e.shiftKey &&
            document.querySelector(".rh02v0");
        }
        function yt() {
          var e = new URLSearchParams(window.location.search);
          return e.get("product") ? e.get("product") : null;
        }
        (0, i.useEffect)(function () {
          xe(document.querySelector("body").classList.contains("rtl"));
          var e = yt();
          return (
            e &&
              _ &&
              (Je(!0),
              Xe(e),
              nt(function (e) {
                return Te(Te({}, e), {}, { getTaxonomyByName: !0 });
              }),
              J(!0),
              X("rc20p1-open rc20panel-opened")),
            ye(!0),
            function () {
              clearTimeout(null === re || void 0 === re ? void 0 : re.current);
            }
          );
        }, []),
          (0, i.useEffect)(function () {
            return (
              I().polyfill(),
              function () {
                clearTimeout(lt.current);
              }
            );
          }, []),
          (0, i.useEffect)(
            function () {
              if (r && r[W] ? r[W] : null) {
                var e = ht("taxonomyList", W),
                  t = ht("productDetails", W);
                nt(function (n) {
                  return Te(
                    Te({}, n),
                    {},
                    {
                      queryTaxonomyId: t ? null : W,
                      queryLocale: !t,
                      getTaxnomyList: !e,
                    }
                  );
                });
              } else
                $e &&
                  nt(
                    W
                      ? function (e) {
                          return Te(
                            Te({}, e),
                            {},
                            { queryTaxonomyId: W, queryLocale: "" == Ye }
                          );
                        }
                      : function (e) {
                          return Te(
                            Te({}, e),
                            {},
                            {
                              queryTaxonomyId: null,
                              queryLocale: !1,
                              getTaxnomyList: !1,
                            }
                          );
                        }
                  );
            },
            [W, Ye, $e]
          );
        var bt =
          null === (t = yt()) || void 0 === t ? void 0 : t.replace(/:/g, "|");
        (0, i.useEffect)(
          function () {
            _ &&
              N.beforePopState(function (e) {
                var t = e.as,
                  n = e.options.taxonomyId;
                return (
                  n && _
                    ? (Z({ isLoading: !0 }),
                      z(n),
                      Ut(n, "browser-back", n),
                      zt(n))
                    : -1 !== t.indexOf("product=")
                    ? (nt(function (e) {
                        return Te(Te({}, e), {}, { getTaxonomyByName: !0 });
                      }),
                      Je(!0))
                    : (z(null), je(-1), Yt()),
                  !0
                );
              });
          },
          [G, _]
        );
        var xt = ze({
            query: { params: Te({ apiName: bt, id: ct ? b.q8 : null }, T) },
            swrOptions: { revalidateOnFocus: !1 },
            opts: { mgmtPreview: _, cacheTags: bt ? [bt] : [] },
          }),
          wt = (0, s.Z)(xt, 2),
          St = wt[0],
          jt = St.data;
        St.error, wt[1];
        (0, i.useEffect)(
          function () {
            var e = null === jt || void 0 === jt ? void 0 : jt.txnmyId;
            if (jt && e) {
              var t = ht("taxonomyList", e);
              !(function (e) {
                var t = e.txnmyDetails,
                  n = e.txnmyId,
                  r = e.count;
                if ((De(t), r)) {
                  var o = u || {},
                    i = o.bottom,
                    a = o.y;
                  window.scrollTo({
                    top: i - a - (C.isMobile ? 0 : 1),
                    left: 0,
                    behavior: "smooth",
                  }),
                    Wt(null, n, "initial-render");
                } else
                  X(""),
                    w.logger.debug(
                      "invalid product name",
                      "rc20IndexComponent"
                    );
              })(jt),
                nt(function (e) {
                  return Te(
                    Te({}, e),
                    {},
                    { getTaxonomyByName: !1, getTaxnomyList: !t }
                  );
                });
            }
          },
          [jt]
        );
        var _t = function (e, t, n, r) {
          if (_) {
            var o,
              i,
              a = { taxonomyId: t, parentTaxonomyId: n, taxonomyCategoryId: r },
              c = {},
              l = Ie(new URLSearchParams(window.location.search));
            try {
              for (l.s(); !(i = l.n()).done; ) {
                var u = i.value,
                  d = (0, s.Z)(u, 2),
                  p = d[0],
                  m = d[1];
                c[p] = m;
              }
            } catch (y) {
              l.e(y);
            } finally {
              l.f();
            }
            !e.product && c.product && ((a = {}), delete c.product);
            var f = Te(Te({}, c), e),
              v = "";
            for (var h in f)
              f.hasOwnProperty(h) && (v += "".concat(h, "=").concat(f[h], "&"));
            var g =
              (null === N ||
              void 0 === N ||
              null === (o = N.pathname) ||
              void 0 === o
                ? void 0
                : o.split("[[").shift()) + "home";
            (v = v ? "".concat(g, "?").concat(v.slice(0, -1)) : g),
              N.push(N.pathname, v, Te({ shallow: !0 }, a));
          }
        };
        (0, i.useEffect)(
          function () {
            window.addEventListener("load", function (e) {
              var t, n, r;
              bt &&
                !_ &&
                0 ===
                  (null === (t = document) ||
                  void 0 === t ||
                  null === (n = t.getElementsByClassName("preview")) ||
                  void 0 === n
                    ? void 0
                    : n.length) &&
                N.push(
                  null === N || void 0 === N ? void 0 : N.pathname,
                  null === (r = window) || void 0 === r
                    ? void 0
                    : r.location.pathname,
                  { shallow: !0 }
                );
            });
          },
          [bt, W]
        );
        var Ct = {
            txnmyId: Oe,
            taxnmyName: Me,
            txnmySelected: Pe,
            firstLevelTxIds: d,
            edgeCacheApiName: Ge,
          },
          Et = Ze({
            query: {
              params: Te({ txnmyId: Oe, id: at ? b.q8 : null, details: Ct }, T),
            },
            swrOptions: { revalidateOnFocus: !1 },
            opts: { mgmtPreview: _, cacheTags: Ge ? [Ge] : [] },
          }),
          kt = (0, s.Z)(Et, 2),
          Ot = kt[0].data,
          Mt = kt[1];
        (0, i.useEffect)(
          function () {
            Ot && (Je(!0), Bt(Ot, Ce));
          },
          [Ot]
        );
        var Pt = We({
            query: {
              params: Te(
                { getFetchLocaleSummary: window.location.href && it },
                T
              ),
            },
            swrOptions: { revalidateOnFocus: !1 },
            opts: { mgmtPreview: _, cacheTags: Ge ? [Ge] : [] },
          }),
          Nt = (0, s.Z)(Pt, 2),
          It = Nt[0].data,
          qt = Nt[1];
        (0, i.useEffect)(
          function () {
            It && Ke(It);
          },
          [It]
        );
        var Dt = He({
            query: {
              params: Te(
                Te({ txnmyId: ot, localeLang: Ye }, T),
                {},
                { enableLongTermFallback: k }
              ),
            },
            swrOptions: { revalidateOnFocus: !1 },
            opts: { mgmtPreview: _, cacheTags: Ge ? [Ge] : [] },
          }),
          Tt = (0, s.Z)(Dt, 2),
          Lt = Tt[0],
          At = Lt.data,
          Rt = Lt.mutate,
          Ft = Tt[1];
        function Bt(e, t) {
          var n,
            r,
            o,
            i,
            a,
            c,
            l = t || {},
            u = l.txnmyId,
            d = l.taxnmyName,
            p = l.txnmySelected,
            m = e.taxonomyObj,
            f = e.ancestorId,
            v = e.grandParentId,
            h = e.size,
            g = e.shouldUpdateQueryParams,
            y = e.taxonomyCategoryId,
            b = e.queryParam;
          if (h > 0)
            f && K(f),
              v && Ht(v),
              (W !==
                (null === A ||
                void 0 === A ||
                null === (n = A.categories) ||
                void 0 === n ||
                null === (r = n[0]) ||
                void 0 === r ||
                null === (o = r.parent) ||
                void 0 === o
                  ? void 0
                  : o.id) &&
                null !== A &&
                void 0 !== A &&
                null !== (i = A.categories) &&
                void 0 !== i &&
                null !== (a = i[0]) &&
                void 0 !== a &&
                null !== (c = a.parent) &&
                void 0 !== c &&
                c.id) ||
                Je(!0),
              R(Te(Te({}, m), {}, { taxonomyId: p || u }));
          else if ("initial-render" === d && 0 === h) {
            if (
              (nt(function (e) {
                return Te(Te({}, e), {}, { getTaxnomyList: !0 });
              }),
              qe && qe.parent && qe.parent.id)
            )
              return Ut(qe.parent.id, "initial-render", qe.id), !1;
          } else
            0 === h && Je(!0),
              R(Te(Te({}, A), {}, { taxonomyId: p || u })),
              w.logger.debug("no data", "rc20IndexComponent");
          if (g && _) {
            var x;
            if (d && !b.product) {
              var S,
                j =
                  null === A ||
                  void 0 === A ||
                  null === (S = A.categories) ||
                  void 0 === S
                    ? void 0
                    : S.filter(function (e) {
                        return e.id === u;
                      }),
                C = (0, s.Z)(j, 1)[0],
                E = C.apiName;
              (x = C.parent.id),
                (b = { product: "".concat(E.replace(/\|/g, ":")) });
            }
            _t(b, u, x, y);
          }
          return !0;
        }
        function Zt(e, t) {
          var n = (e || {}).productDetails;
          Je(!1),
            n
              ? Z(Te(Te({}, n.fields), {}, { item_id: n.id }))
              : (Z({}),
                w.logger.debug("product data not found", "rc20IndexComponent")),
            t && Vt(t);
        }
        (0, i.useEffect)(
          function () {
            var e;
            null !== At &&
              void 0 !== At &&
              At.productDetails &&
              Zt(
                At,
                $
                  ? null
                  : null === (e = q[ot]) || void 0 === e
                  ? void 0
                  : e.animateClass
              );
          },
          [At, ot]
        ),
          (0, i.useEffect)(function () {
            return function () {
              Mt.cancel("Cancel Fetch TaxonomyList call"),
                qt.cancel("Cancel Fetch Locale Summary call"),
                Ft.cancel("Cancel Fetch Prodcut Details call"),
                clearTimeout(
                  null === lt || void 0 === lt ? void 0 : lt.current
                ),
                clearTimeout(
                  null === st || void 0 === st ? void 0 : st.current
                ),
                clearTimeout(
                  null === ut || void 0 === ut ? void 0 : ut.current
                ),
                clearTimeout(
                  null === dt || void 0 === dt ? void 0 : dt.current
                ),
                clearTimeout(
                  null === pt || void 0 === pt ? void 0 : pt.current
                );
            };
          }, []);
        var Ht = function (e) {
            w.logger.debug("for siblings ".concat(e), "rc20IndexComponent");
          },
          Wt = function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "",
              r = arguments.length > 3 ? arguments[3] : void 0,
              o = arguments.length > 4 ? arguments[4] : void 0,
              i = arguments.length > 5 ? arguments[5] : void 0;
            vt(i),
              null !== C && void 0 !== C && C.isMobile && Je(!0),
              e && e.preventDefault(),
              W !== t &&
                (t !== b.q8 && Z({ isLoading: !0 }),
                z(t === b.q8 ? null : t),
                t === b.q8 || d.includes(t)
                  ? Yt()
                  : (q[t] && K(t), o && Xe(o), zt(t, r), Ut(t, n)));
          },
          zt = function (e, t) {
            var n = ht("productDetails", e);
            n && Zt(n, t);
          },
          Ut = function (e, t, n) {
            var r = { txnmyId: e, taxnmyName: t, txnmySelected: n };
            Ee({ txnmyId: e, taxnmyName: t, txnmySelected: n });
            var o = ht("taxonomyList", e);
            o
              ? (Bt(o, r),
                nt(function (e) {
                  return Te(Te({}, e), {}, { getTaxnomyList: !1 });
                }))
              : nt(function (e) {
                  return Te(Te({}, e), {}, { getTaxnomyList: !0 });
                });
          },
          Gt = function (e) {
            e.preventDefault(),
              ie || (document.querySelector(".rh08").style.display = "none"),
              setTimeout(function () {
                ae(!ie),
                  ie
                    ? document.body.classList.remove("lock")
                    : document.body.classList.add("lock"),
                  (document.documentElement.style.height = "100vh");
              }, 50),
              ie && $t();
          },
          Xt = function (e, t) {
            ([b.qW, b.Jh].includes(W) || t) &&
              document.body.classList.contains("lock") &&
              (ae(!1), document.body.classList.remove("lock"), $t());
          },
          Vt = function (e) {
            clearTimeout(null === re || void 0 === re ? void 0 : re.current),
              document.querySelector("body").classList.remove("u24show");
            var t = (function () {
              var t = (0, l.Z)(
                p().mark(function t() {
                  return p().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          (function () {
                            var t = "rc20p1-open" === e ? "rc20p1" : "rc20p2";
                            J(!0), a(!0);
                            var n = u || {},
                              r = n.bottom,
                              o = n.y;
                            window.scrollTo({
                              top: r - o - (C.isMobile ? 0 : 1),
                              left: 0,
                              behavior: "smooth",
                            }),
                              X("animate-rh0content"),
                              (ut.current = setTimeout(
                                function () {
                                  X("".concat(t, "-open rc20panel-opened"));
                                },
                                O ? 0 : 350
                              ));
                          })();
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
            window.requestAnimationFrame(t),
              (dt.current = setTimeout(function () {
                var e;
                ft &&
                  (null === me ||
                    void 0 === me ||
                    null === (e = me.current) ||
                    void 0 === e ||
                    e.focus());
              }, 300));
          },
          Yt = function () {
            z(null),
              O
                ? (st.current = setTimeout(function () {
                    X("");
                  }, 400))
                : X("");
            var e = setTimeout(function () {
              var e;
              ft &&
                (null === de ||
                  void 0 === de ||
                  null === (e = de.current) ||
                  void 0 === e ||
                  e.focus());
              Qt();
            }, 400);
            (re.current = e),
              window.requestAnimationFrame(function () {
                null !== c &&
                  void 0 !== c &&
                  c.current &&
                  (c.current.style.display = "block");
                var e = G.substring(0, 6),
                  t = null === ue || void 0 === ue ? void 0 : ue.current;
                t && (t.scrollLeft = 0),
                  X("".concat(e, "-closing panel-closing")),
                  (pt.current = setTimeout(
                    function () {
                      J(!1), a(!1);
                    },
                    O ? 0 : 500
                  ));
              });
          },
          Kt = function () {
            var e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            ne(!te), e && W && (Z({ isLoading: !0 }), Rt && Rt());
          },
          Qt = function () {
            _t({}),
              R({}),
              Z({}),
              z(null),
              Ee({ txnmyId: null, taxnmyName: "", txnmySelected: null }),
              nt({
                queryTaxonomyId: null,
                queryLocale: !1,
                getTaxnomyList: !1,
                getTaxonomyByName: !1,
              });
          },
          $t = function () {
            lt.current = setTimeout(function () {
              var e;
              !(function () {
                var e = {
                  type: "slide",
                  autoplay: !1,
                  interval: 0,
                  transitionDelayBetweenSlide: 0,
                  speed: 1e3,
                  requiredFadeInClass: !1,
                  parentElementOpacityRequired: !1,
                  arrows: !1,
                  pagination:
                    document.querySelectorAll(".slider__slide").length > 1,
                };
                document.querySelector(".rh08").style.display = "block";
                var t = window.customSlider._i || 0;
                t > 0 &&
                  (window.customSlider.Components.Elements.destroy(),
                  (window.customSlider.options = Te(
                    Te({}, e),
                    {},
                    { start: t, hasPauseClass: !0 }
                  )),
                  window.customSlider.destroy(),
                  window.customSlider.mount(),
                  window.bindSlideSliderEvent(window.customSlider));
              })(),
                null === se ||
                  void 0 === se ||
                  null === (e = se.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ block: "start" });
            }, 100);
          },
          Jt = function () {
            Je(!0);
          };
        function en() {
          return (0, j.jsx)(Le, {
            panelBackground: ce,
            taxonomy: A,
            currentTaxonomySelected: W,
            dummyTaxonomyRef: me,
            taxonomyFiltersRef: pe,
            showFilters: ie,
            toggleMobileFilters: Gt,
            hideMobileFilters: Xt,
            handleProductNavigation: Wt,
            isEnterKey: ft,
            isPanelOpen: $,
          });
        }
        var tn = function (e) {
          var t = ht("featuredCards", W);
          return (0, j.jsx)(Be, {
            totalSlideLength: e.length,
            data: e,
            lblPrefix: "panel3:",
            children:
              Array.isArray(e) &&
              e.map(function (e, n) {
                return (0,
                j.jsx)("li", { className: "slide", children: (0, j.jsx)(Re, { slideNo: n, contentInfo: W ? e : {}, activeIndex: Se, dataTrackas: "rc20:panel".concat(n + 3), parentPanelRef: ue, initialData: t && t[n] ? t[n] : null, panelBackground: ce, edgeCacheApiName: Ge }) }, e.id);
              }),
          });
        };
        return (0, j.jsx)(h.Z, {
          children: (0, j.jsx)(f.Z, {
            in: ie,
            timeout: 300,
            classNames: "open",
            children: (0, j.jsx)("section", {
              className: "rc20v1 rc20v3 rc20v4 rh02  rh02v1 pghero  ".concat(
                $ ? "open-panel-anime" : "close-panel-anime"
              ),
              "data-trackas": "rc20",
              id: "parentBox",
              ref: fe,
              children: (0, j.jsxs)("div", {
                id: "rc20panels",
                ref: se,
                className: ["rh02w1", "rc20panels", G].join(" "),
                children: [
                  ge &&
                    (0, j.jsxs)(j.Fragment, {
                      children: [
                        (0, j.jsx)(E, {
                          onChange: Wt,
                          isPanelOpen: $,
                          isEnterPressed: ft,
                          currentTaxonomySelected: W,
                          exporeRefBtn: de,
                        }),
                        (0, j.jsx)(M, {
                          onChange: Wt,
                          onKeyDown: gt,
                          isPanelOpen: $,
                          isEnterPressed: ft,
                        }),
                      ],
                    }),
                  " ",
                  (0, j.jsxs)(j.Fragment, {
                    children: [
                      (0, j.jsx)("div", {
                        id: "rc20tree",
                        className: "rc20panel",
                        children: (0, j.jsx)(he.Z, {
                          className: "rc20w0",
                          src: ce ? ce.image : null,
                          "data-trackas": "rc20:panel1",
                          children: C.isMobile
                            ? en()
                            : (0, j.jsx)(m.Z, {
                                children: (0, j.jsx)(
                                  f.Z,
                                  {
                                    in: !1,
                                    appear: !1,
                                    timeout: 600,
                                    classNames: "rc20menu-slide",
                                    onEntering: Jt,
                                    children: en(),
                                  },
                                  A.parentId || b.q8
                                ),
                              }),
                        }),
                      }),
                      " ",
                      (0, j.jsxs)("div", {
                        id: "rc20sub",
                        className: [
                          "rc20panel rc20slidepanel rc20subpanel rc20subopen",
                        ].join(" "),
                        ref: ue,
                        onClick: function (e) {
                          return Xt(0, !0);
                        },
                        onTouchStart: function (e) {
                          return Xt(0, !0);
                        },
                        children: [
                          (0, j.jsx)(Ae, {
                            product: B,
                            currentTaxonomySelected: W,
                            color: ce && ce.color,
                            panelRef: le,
                            slideNo: -1,
                            totalLength:
                              B &&
                              B.featured_content &&
                              B.featured_content.length,
                            activeIndex: Se,
                            initialData: ht("initialQuoteOrProductAsset"),
                            closeEditScreen: function () {
                              return Kt(!1);
                            },
                            edgeCacheApiName: Ge,
                            isPanelOpen: $,
                          }),
                          " ",
                          (function () {
                            var e;
                            return (0, j.jsx)(j.Fragment, {
                              children:
                                null !== B &&
                                void 0 !== B &&
                                null !== (e = B.featured_content) &&
                                void 0 !== e &&
                                e.length
                                  ? tn(
                                      null === B || void 0 === B
                                        ? void 0
                                        : B.featured_content
                                    )
                                  : (0, j.jsx)("div", {
                                      className: "rc20blankcover",
                                      style: {
                                        right: "0%",
                                        width: C.isMobile ? "100%" : "50%",
                                        background: "#161513",
                                      },
                                      children:
                                        (null === B || void 0 === B
                                          ? void 0
                                          : B.isLoading) &&
                                        (0, j.jsxs)("div", {
                                          className: "rc20content",
                                          children: [(0, j.jsx)(Fe, {}), " "],
                                        }),
                                    }),
                            });
                          })(),
                          " ",
                        ],
                      }),
                    ],
                  }),
                  " ",
                  $ &&
                    te &&
                    (0, j.jsxs)("div", {
                      className: "rc20popup",
                      ref: P,
                      children: [
                        (0, j.jsx)("span", {
                          className: "icn-close rc20close",
                          onClick: Kt,
                        }),
                        (0, j.jsx)("iframe", {
                          src: ""
                            .concat(
                              "https://orasites-prodapp.cec.ocp.oraclecloud.com/",
                              "documents/embed/assets/edit/"
                            )
                            .concat(B.item_id, "?hide=actions"),
                          width: "100%",
                          height: "100%",
                          frameBorder: "0",
                          title: "Edit Asset",
                        }),
                      ],
                    }),
                  " ",
                ],
              }),
            }),
          }),
        });
      }
      var Ge = (0, i.memo)(Ue);
      var Xe = function (e) {
          var t = e.children,
            n = e.toggle,
            r = e.wrapperRef,
            o = e.setWrapperRefRectDetails,
            a = function () {
              var e,
                t =
                  (null === r ||
                  void 0 === r ||
                  null === (e = r.current) ||
                  void 0 === e
                    ? void 0
                    : e.getBoundingClientRect()) || {},
                n = t.bottom,
                i = t.y;
              o({ bottom: n, y: i });
            };
          (0, i.useEffect)(
            function () {
              a();
            },
            [n]
          );
          var c = function () {
            a();
          };
          return (
            (0, i.useEffect)(function () {
              return (
                window.addEventListener("resize", c),
                document.addEventListener("scroll", c),
                function () {
                  window.removeEventListener("resize", c),
                    document.removeEventListener("scroll", c);
                }
              );
            }, []),
            (0, j.jsx)("div", {
              id: "parentwrap",
              ref: r,
              className: "".concat(n ? "hideWrapperChild" : "showWrapperChild"),
              children: t,
            })
          );
        },
        Ve = Ne()(
          function () {
            return Promise.all([n.e(935), n.e(753)]).then(n.bind(n, 5753));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [5753];
              },
            },
          }
        ),
        Ye = Ne()(
          function () {
            return Promise.all([n.e(935), n.e(210)]).then(n.bind(n, 8586));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [8586];
              },
            },
          }
        ),
        Ke = Ne()(
          function () {
            return Promise.all([n.e(935), n.e(374)]).then(n.bind(n, 8374));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [8374];
              },
            },
          }
        ),
        Qe = Ne()(
          function () {
            return n.e(821).then(n.bind(n, 3821));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [3821];
              },
            },
          }
        ),
        $e = Ne()(
          function () {
            return n.e(654).then(n.bind(n, 3654));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [3654];
              },
            },
          }
        ),
        Je = Ne()(
          function () {
            return Promise.all([n.e(935), n.e(147)]).then(n.bind(n, 8147));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [8147];
              },
            },
          }
        );
      var et = function (e) {
          var t = e.initialData,
            n = void 0 === t ? {} : t,
            r = e.longFormData,
            o = e.promoData,
            a = e.html,
            c = e.featuredCustomers,
            l = e.industries,
            s = e.ociRegionMapData,
            u = e.componentsOrder,
            d = e.videoData,
            p = (0, i.useContext)(S.N),
            m = (0, i.useState)(!1),
            f = m[0],
            v = m[1],
            h = (0, i.useState)({}),
            g = h[0],
            y = h[1],
            b = (0, i.useRef)(null),
            x = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t = [];
              return (
                (t =
                  e &&
                  e.length > 0 &&
                  e.map(function (e) {
                    switch (e) {
                      case "Map":
                        return (0, j.jsx)(Ke, { ociRegionMapData: s }, "Map");
                      case "Video Background Hero":
                        return (0, j.jsx)(Je, { videoData: d }, "Map");
                      case "Promo Panels":
                        return (0, j.jsx)(Ve, { data: o }, "Promo Panels");
                      case "Marketecture":
                        return (0, j.jsx)(Ye, { html: a }, "Marketecture");
                      case "Industries":
                        return (0,
                        j.jsx)(Qe, { data: l.data, title: l.title }, "Industries");
                      case "Featured Customers":
                        return (0,
                        j.jsx)($e, { isExternalLink: !0, data: c.data, title: c.title, viewAllCTA: c.viewAllCTA, ctaButton: p.prodnav_featured_customers_cta, eyebrow: "eyebrow_text" }, "Featured Customers");
                      case "Hero":
                        return (0, j.jsx)(Oe, { data: r }, "Hero");
                      case "Product Navigator":
                        return (0,
                        j.jsx)(Ge, { initialData: n, setToggle: v, wrapperRef: b, scrollDetails: g }, "Product Navigator");
                    }
                  })) &&
                t.map(function (e) {
                  return e;
                })
              );
            },
            w = u.indexOf("Product Navigator");
          return (0, j.jsx)(j.Fragment, {
            children: (0, j.jsxs)("main", {
              children: [
                u &&
                  -1 !== w &&
                  (0, j.jsx)(Xe, {
                    toggle: f,
                    wrapperRef: b,
                    setWrapperRefRectDetails: y,
                    children: x(u.slice(0, w)),
                  }),
                u && -1 !== w
                  ? (0, j.jsx)(Ge, {
                      initialData: n,
                      setToggle: v,
                      wrapperRef: b,
                      scrollDetails: g,
                    })
                  : null,
                u && -1 !== w ? x(u.slice(w + 1)) : null,
              ],
            }),
          });
        },
        tt = function () {
          var e = document.querySelectorAll(".rh08-pillbtn");
          e[0] && e[0].focus();
        },
        nt = [
          "Hero",
          "Product Navigator",
          "Promo Panels",
          "Marketecture",
          "Featured Customers",
          "Industries",
          "Map",
        ];
      var rt = !0,
        ot = function (e) {
          var t = e.metaTags,
            n = e.initialData,
            a = e.externalLabels,
            l = e.preview,
            s = e.isLongFormEnabled,
            u = e.longFormData,
            d = e.promoData,
            p = e.marketCaptureData,
            m = e.featuredCustomers,
            f = e.isHomeEnabled,
            v = e.industries,
            h = e.ociRegionMapData,
            g = void 0 === h ? {} : h,
            y = (e.mPulseValue, e.componentsOrder),
            b = e.enableLongTermFallback,
            x = e.videoData;
          return (
            (0, i.useEffect)(function () {
              window.reactU30FocusNext = tt;
            }, []),
            (0, j.jsxs)(r.Z, {
              metaData: t,
              externalLabels: a,
              preview: l,
              enableLongTermFallback: b,
              children: [
                (0, j.jsxs)(c(), {
                  children: [
                    (function () {
                      var e = t || {},
                        n = e.alternateLinks,
                        r = e.siteid,
                        i = e.altPagesContent;
                      return (0, j.jsxs)(j.Fragment, {
                        children: [
                          i &&
                            i.length > 0 &&
                            r &&
                            (0, j.jsx)("link", {
                              rel: "canonical",
                              href: ""
                                .concat(o.Ci)
                                .concat(
                                  "default" === r || "en" === r || "us" === r
                                    ? ""
                                    : "/".concat(r, "/")
                                ),
                            }),
                          Array.isArray(n) &&
                            n.map(function (e) {
                              var t = e || {},
                                n = t.preferredlocalename,
                                r = t.siteid;
                              return (0,
                              j.jsx)("link", { rel: "alternate", hrefLang: n, href: "".concat(o.Ci).concat("default" === r || "en" === r || "us" === r ? "" : "/".concat(r, "/")) }, n);
                            }),
                        ],
                      });
                    })(),
                    (0, j.jsxs)("script", {
                      type: "text/javascript",
                      children: [
                        "var defaultComponent = `",
                        (function () {
                          var e = { isFailed: !1, defaultComponent: "" };
                          return (
                            (u &&
                              u.panel3Slides &&
                              u.panel3Slides.length > 0 &&
                              u &&
                              u.isSlideMissing) ||
                              ((e.defaultComponent = "rh08"),
                              (e.isFailed = !0)),
                            (d && d.length > 0) ||
                              ((e.defaultComponent =
                                "" !== e.defaultComponent
                                  ? e.defaultComponent + ";rh09"
                                  : "rh09"),
                              (e.isFailed = !0)),
                            p ||
                              ((e.defaultComponent =
                                "" !== e.defaultComponent
                                  ? e.defaultComponent + ";rc105"
                                  : "rc105"),
                              (e.isFailed = !0)),
                            (v && v.data && v.data.length > 0) ||
                              ((e.defaultComponent =
                                "" !== e.defaultComponent
                                  ? e.defaultComponent + ";rc68"
                                  : "rc68"),
                              (e.isFailed = !0)),
                            (g && Object.keys(g).length > 0) ||
                              ((e.defaultComponent =
                                "" !== e.defaultComponent
                                  ? e.defaultComponent + ";rc115"
                                  : "rc115"),
                              (e.isFailed = !0)),
                            (!(m && m.data && m.data.length > 0) ||
                              (m && m.isSlideMissing)) &&
                              ((e.defaultComponent =
                                "" !== e.defaultComponent
                                  ? e.defaultComponent + ";rc64"
                                  : "rc64"),
                              (e.isFailed = !0)),
                            e.isFailed ? e.defaultComponent : "good"
                          );
                        })(),
                        "`;",
                      ],
                    }),
                  ],
                }),
                s && (0, j.jsx)(Me, { longFormData: u, initialData: n }),
                f &&
                  (0, j.jsx)(et, {
                    longFormData: u,
                    initialData: n,
                    promoData: d,
                    html: p,
                    industries: v,
                    featuredCustomers: m,
                    ociRegionMapData: g,
                    componentsOrder: y && y.length > 0 ? y : nt,
                    videoData: x,
                  }),
              ],
            })
          );
        };
    },
    6802: function (e, t, n) {
      "use strict";
      n.d(t, {
        MY: function () {
          return K;
        },
      });
      var r = n(4730),
        o = n(29),
        i = n(9499),
        a = n(7812),
        c = n(1531),
        l = n(607),
        s = n(7794),
        u = n.n(s),
        d = n(2052),
        p = n(3421),
        m = n(3438);
      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function h(e) {
        var t = e && (e.preferredlocalename || e.preferredLocale);
        return "string" === typeof t ? t.toLowerCase() : "";
      }
      function g(e) {
        return {
          productDetails: e && e.items && e.items.length > 0 ? e.items[0] : {},
        };
      }
      var y = function (e, t) {
        var n,
          r,
          o = function () {
            (n = e.items[0].id), (r = e.items[0]);
          };
        return (
          e &&
            e.items &&
            e.count > 0 &&
            (1 === e.count
              ? o()
              : (function () {
                  for (var o = 0; o < e.count; o += 1) {
                    var i = e.items[o];
                    if (i.parent && i.parent.apiName === t) {
                      (r = v({}, i)), (n = i.id);
                      break;
                    }
                  }
                })(),
            n || o()),
          { txnmyId: n, txnmyDetails: r, count: e ? e.count > 0 : null }
        );
      };
      function b(e, t) {
        var n,
          r = t.txnmyId,
          o = t.taxnmyName,
          i = "initial-render" !== o && "browser-back" !== o,
          a = { name: "", categories: [], taxonomyId: r || "" },
          c = {},
          l = null,
          s = null;
        if (e && e.items && e.items.length > 0) {
          if (
            ((a.categories = e.items),
            (a.taxonomyId = r),
            a.categories.length > 0)
          ) {
            var u = a.categories[0].ancestors;
            if (
              (u[0] && u[0].id && (l = (u[0] && u[0].id) || null),
              u && u.length && ((n = u[0].id || null), u.length > 1))
            ) {
              var d = u[u.length - 2];
              (a.parentId = d.id),
                (a.parentName = d.apiName),
                (s = d.id || null);
            }
            var p = a.categories[0].parent;
            p && ((a.name = p.name || null), (a.apiName = p.apiName || null));
          }
          a.parentId || r === m.q8 || (a.parentId = m.q8),
            (c = { product: "".concat(a.apiName.replace(/\|/g, ":")) });
        }
        return {
          taxonomyObj: a,
          queryParam: c,
          ancestorId: l,
          grandParentId: s,
          taxonomyCategoryId: n,
          shouldUpdateQueryParams: i,
          parentId: null,
          size: (e && e.items && e.items.length) || 0,
        };
      }
      var x,
        w = ["query", "config"],
        S = ["query", "config"],
        j = ["query", "config"],
        _ = ["query", "config"],
        C = ["query", "config"],
        E = ["query", "config"],
        k = ["query", "config"],
        O = ["query", "config"],
        M = ["params", "config"];
      function P(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function I() {
        I = function (e, t) {
          return new n(e, void 0, t);
        };
        var e = RegExp.prototype,
          t = new WeakMap();
        function n(e, r, o) {
          var i = new RegExp(e, r);
          return t.set(i, o || t.get(e)), (0, l.Z)(i, n.prototype);
        }
        function r(e, n) {
          var r = t.get(n);
          return Object.keys(r).reduce(function (t, n) {
            return (t[n] = e[r[n]]), t;
          }, Object.create(null));
        }
        return (
          (0, c.Z)(n, RegExp),
          (n.prototype.exec = function (t) {
            var n = e.exec.call(this, t);
            return n && (n.groups = r(n, this)), n;
          }),
          (n.prototype[Symbol.replace] = function (n, o) {
            if ("string" === typeof o) {
              var i = t.get(this);
              return e[Symbol.replace].call(
                this,
                n,
                o.replace(/\$<([^>]+)>/g, function (e, t) {
                  return "$" + i[t];
                })
              );
            }
            if ("function" === typeof o) {
              var a = this;
              return e[Symbol.replace].call(this, n, function () {
                var e = arguments;
                return (
                  "object" !== typeof e[e.length - 1] &&
                    (e = [].slice.call(e)).push(r(e, a)),
                  o.apply(this, e)
                );
              });
            }
            return e[Symbol.replace].call(this, n, o);
          }),
          I.apply(this, arguments)
        );
      }
      var q = null === (x = "2.59.0") ? void 0 : x.replace(/\./g, "-"),
        D = { appVer: q, appName: "ocom-prodnav" },
        T = function (e, t, n, r, o) {
          if (t) {
            var i = t || {},
              a = i.status,
              c = i.message,
              l = "API ERROR - "
                .concat(e, " --\x3e ")
                .concat(a, ", ")
                .concat(c, " - ")
                .concat(r ? "EXTRA INFO --\x3e ".concat(r) : "", " , ")
                .concat(o ? "LOCALE --\x3e ".concat(o) : "");
            404 == a
              ? d.logger.warn(l, "PN_LONGFORM_V2")
              : d.logger.error(l, "PN_LONGFORM_V2"),
              n &&
                (0, d.P1Logger)(
                  "".concat(
                    l,
                    " -- P1_ERROR --\x3e PN_LONGFORM_V2 --\x3e PN_LONGFORM_V2_P1"
                  )
                );
          }
        },
        L = function (e) {
          var t = e.replace(/:/g, "|"),
            n = I(/(.*\|)?(.*)/, { part1: 1, part2: 2 }),
            r = t.match(n);
          return ((null === r || void 0 === r ? void 0 : r.groups) || {}).part2;
        },
        A = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : { prodnav: !0, longform: !0, longformv2: !0 },
            o = n || {},
            i = o.siteid,
            c = void 0 === i ? "" : i,
            l = (null === e || void 0 === e ? void 0 : e.opts) || {},
            s = l.cacheTags,
            u = l.mgmtPreview,
            d = [].concat(
              (0, a.Z)(Array.isArray(s) ? s : []),
              (0, a.Z)(Array.isArray(t) ? t : [])
            );
          d = d.map(L);
          var p = function (e) {
              return ""
                .concat(e)
                .concat(c ? "-".concat(c) : "", "-")
                .concat(q);
            },
            m = r.longform
              ? d.map(function (e) {
                  return "longform-".concat(p(e));
                })
              : [],
            f = r.prodnav
              ? d.map(function (e) {
                  return "".concat(p(e));
                })
              : [],
            v = r.longformv2
              ? d.map(function (e) {
                  return "longformv2-".concat(p(e));
                })
              : [];
          d = [].concat((0, a.Z)(f), (0, a.Z)(m), (0, a.Z)(v));
          var h = ["all-api"];
          r.longform && h.push("longform-all-api"),
            r.longformv2 && h.push("longformv2-all-api");
          var g = {
            opts: N(
              N({}, l),
              {},
              {
                cacheTags: u
                  ? []
                  : [].concat((0, a.Z)(d), h, ["longformv2-global"]),
              }
            ),
          };
          return g;
        };
      function R() {
        return (R = (0, o.Z)(
          u().mark(function e(t) {
            var n, o, i, a, c, l, s, p, m, f, v, h, g, b, x, S, j;
            return u().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = t.query),
                      (o = void 0 === n ? {} : n),
                      (i = t.config),
                      (a = void 0 === i ? {} : i),
                      (c = (0, r.Z)(t, w)),
                      (l = null === o || void 0 === o ? void 0 : o.params),
                      (s = l.apiName),
                      (p = void 0 === s ? "" : s),
                      (m = l.id),
                      (f = l.localeParams),
                      (v = N(
                        N(
                          {
                            q: '(apiName eq "'.concat(p, '")'),
                            orderBy: "position:asc",
                            fields: "id,parent",
                            links: "none",
                          },
                          f
                        ),
                        D
                      )),
                      (h = "txnmy-api-name"),
                      (g = L(p)),
                      (b = A(
                        c,
                        ["".concat(h), "".concat(h, "-").concat(g)],
                        f,
                        { prodnav: !0, longform: !1, longformv2: !1 }
                      )),
                      !p || !m)
                    ) {
                      e.next = 12;
                      break;
                    }
                    return (
                      (e.next = 9),
                      d.oceis.fetchCategories(
                        { id: m },
                        N({ query: N({}, v), config: a }, b)
                      )
                    );
                  case 9:
                    (e.t0 = e.sent), (e.next = 13);
                    break;
                  case 12:
                    e.t0 = [];
                  case 13:
                    return (
                      (x = e.t0),
                      (S = x.data),
                      (j = x.error) &&
                        T(
                          "fetchTaxonomyByApiName",
                          j,
                          !1,
                          "fetch taxonomy from url"
                        ),
                      e.abrupt("return", { data: S ? y(S, p) : null, error: j })
                    );
                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function F() {
        return (F = (0, o.Z)(
          u().mark(function e(t) {
            var n, o, i, a, c, l, s, p, m, f, v, h, g, y, x, w, j;
            return u().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = t.query),
                      (o = void 0 === n ? {} : n),
                      (i = t.config),
                      (a = void 0 === i ? {} : i),
                      (c = (0, r.Z)(t, S)),
                      (l = null === o || void 0 === o ? void 0 : o.params),
                      (s = l.txnmyId),
                      (p = l.id),
                      (m = l.details),
                      (f = void 0 === m ? {} : m),
                      (v = l.localeParams),
                      (h = N(
                        N(
                          {
                            q: '(parent.id eq "'.concat(s, '")'),
                            orderBy: "position:asc",
                            fields: "apiName,name,parent,ancestors",
                            links: "none",
                          },
                          v
                        ),
                        D
                      )),
                      (y = A(
                        c,
                        [
                          "".concat((g = "txnmy-lst"), "-").concat(s),
                          "".concat(g),
                        ],
                        v
                      )),
                      !s || !p)
                    ) {
                      e.next = 11;
                      break;
                    }
                    return (
                      (e.next = 8),
                      d.oceis.fetchCategories(
                        { id: p },
                        N({ query: N({}, h), config: a }, y)
                      )
                    );
                  case 8:
                    (e.t0 = e.sent), (e.next = 12);
                    break;
                  case 11:
                    e.t0 = [];
                  case 12:
                    return (
                      (x = e.t0),
                      (w = x.data),
                      (j = x.error) &&
                        T(
                          "fetchTaxonomyList",
                          j,
                          !1,
                          "rc20 menu",
                          null === v || void 0 === v ? void 0 : v.siteid
                        ),
                      e.abrupt("return", { data: w ? b(w, f) : null, error: j })
                    );
                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function B() {
        return (B = (0, o.Z)(
          u().mark(function e(t) {
            var n,
              o,
              i,
              a,
              c,
              l,
              s,
              p,
              m,
              f,
              v,
              h,
              y,
              b,
              x,
              w,
              S,
              _,
              C,
              E,
              k,
              O;
            return u().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((o = t.query),
                      (i = void 0 === o ? {} : o),
                      (a = t.config),
                      (c = void 0 === a ? {} : a),
                      (l = (0, r.Z)(t, j)),
                      (s = function () {
                        return [
                          "featured_content",
                          "title",
                          "overview",
                          "link",
                          "quotes",
                          "data_label",
                        ]
                          .map(function (e) {
                            return "fields.".concat(e);
                          })
                          .join(",");
                      }),
                      (p = null === i || void 0 === i ? void 0 : i.params),
                      (m = p.txnmyId),
                      (f = p.localeLang),
                      (v = p.localeParams),
                      (h = p.enableLongTermFallback),
                      console.log("Long term fallback --\x3e ".concat(h)),
                      (y =
                        null !== v && void 0 !== v && v.siteid
                          ? ""
                          : 'AND language eq "'.concat(f, '"')),
                      (b = N(
                        N(
                          {
                            q: '(type eq "SH-ProductDetail" AND taxonomies.categories.id eq "'
                              .concat(m, '" ')
                              .concat(y, ")"),
                            orderBy: "updatedDate:desc",
                            links: "none",
                            limit: 1,
                            fields: "".concat(s()),
                            newFallback: h,
                          },
                          v
                        ),
                        D
                      )),
                      (w = A(
                        l,
                        [
                          "".concat((x = "sh-prdct"), "-").concat(m),
                          "".concat(x),
                        ],
                        v
                      )),
                      !m || !f)
                    ) {
                      e.next = 14;
                      break;
                    }
                    return (
                      (e.next = 11),
                      d.oceis.fetchItems(N({ query: N({}, b), config: c }, w))
                    );
                  case 11:
                    (e.t0 = e.sent), (e.next = 15);
                    break;
                  case 14:
                    e.t0 = [];
                  case 15:
                    if (
                      ((S = e.t0),
                      (_ = S.data),
                      (C = S.error) &&
                        T(
                          "fetchProductDetails",
                          C,
                          !1,
                          "rc20 panel2",
                          null === v || void 0 === v ? void 0 : v.siteid
                        ),
                      !(
                        null !== v &&
                        void 0 !== v &&
                        v.siteid &&
                        (null === _ ||
                        void 0 === _ ||
                        null === (n = _.items) ||
                        void 0 === n
                          ? void 0
                          : n.length) > 0
                      ))
                    ) {
                      e.next = 26;
                      break;
                    }
                    return (
                      (E = _.items[0].id),
                      (e.next = 22),
                      Z({
                        params: { id: E, localeParams: v },
                        config: c,
                        opts: null === l || void 0 === l ? void 0 : l.opts,
                      })
                    );
                  case 22:
                    (k = e.sent), (O = k.data), k.error || (_.items[0] = O);
                  case 26:
                    return e.abrupt("return", {
                      data: _ ? g(_) : null,
                      error: C,
                    });
                  case 27:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Z(e) {
        return H.apply(this, arguments);
      }
      function H() {
        return (H = (0, o.Z)(
          u().mark(function e(t) {
            var n, o, i, a, c, l, s, m, f, v;
            return u().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.params),
                      (o = void 0 === n ? {} : n),
                      (i = t.config),
                      (a = void 0 === i ? {} : i),
                      (c = (0, r.Z)(t, M)),
                      (l = o.id),
                      (s = o.localeParams),
                      (m = (0, p.aP)(
                        null === s || void 0 === s ? void 0 : s.siteid
                      )),
                      (v = A(
                        c,
                        [
                          "".concat((f = "sh-prdct"), "-").concat(l),
                          "".concat(f),
                        ],
                        s
                      )),
                      e.abrupt(
                        "return",
                        d.oceis.fetchItemByID(
                          { id: l },
                          N(
                            { query: N(N({ links: "none" }, m), D), config: a },
                            v
                          )
                        )
                      )
                    );
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function W() {
        return (W = (0, o.Z)(
          u().mark(function e(t) {
            var n, o, i, a, c, l, s, p, m, f, v, g, y;
            return u().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = t.query),
                      (o = void 0 === n ? {} : n),
                      (i = t.config),
                      (a = void 0 === i ? {} : i),
                      (c = (0, r.Z)(t, _)),
                      (l = null === o || void 0 === o ? void 0 : o.params),
                      (s = l.getFetchLocaleSummary),
                      (p = l.localeParams),
                      (m = N(
                        N(
                          {
                            refUrl: window.location.search
                              ? "".concat(
                                  encodeURIComponent(window.location.href)
                                )
                              : "",
                          },
                          p
                        ),
                        D
                      )),
                      (f = A(c, ["locale-smry"], p)),
                      !s)
                    ) {
                      e.next = 10;
                      break;
                    }
                    return (
                      (e.next = 7),
                      d.oceis.fetchLocaleSummary(
                        N({ query: N({}, m), config: a }, f)
                      )
                    );
                  case 7:
                    (e.t0 = e.sent), (e.next = 11);
                    break;
                  case 10:
                    e.t0 = [];
                  case 11:
                    return (
                      (v = e.t0),
                      (g = v.data),
                      (y = v.error) &&
                        T(
                          "fetchLocaleSummary",
                          y,
                          !1,
                          "rc20",
                          null === p || void 0 === p ? void 0 : p.siteid
                        ),
                      e.abrupt("return", { data: g ? h(g) : null, error: y })
                    );
                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function z(e) {
        return U.apply(this, arguments);
      }
      function U() {
        return (U = (0, o.Z)(
          u().mark(function e(t) {
            var n, o, i, a, c, l, s, p, m, f, v, h, g, y;
            return u().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = t.query),
                      (o = void 0 === n ? {} : n),
                      (i = t.config),
                      (a = void 0 === i ? {} : i),
                      (c = (0, r.Z)(t, C)),
                      (l = null === o || void 0 === o ? void 0 : o.params),
                      (s = l.id),
                      (p = l.localeParams),
                      (m = N(N({ links: "none" }, p), D)),
                      (v = A(
                        c,
                        [
                          "".concat((f = "sh-qte"), "-").concat(s),
                          "".concat(f),
                        ],
                        p
                      )),
                      !s)
                    ) {
                      e.next = 11;
                      break;
                    }
                    return (
                      (e.next = 8),
                      d.oceis.fetchItemByID(
                        { id: s },
                        N({ query: N({}, m), config: a }, v)
                      )
                    );
                  case 8:
                    (e.t0 = e.sent), (e.next = 12);
                    break;
                  case 11:
                    e.t0 = [];
                  case 12:
                    return (
                      (h = e.t0),
                      (g = h.data),
                      (y = h.error) &&
                        T(
                          "fetchQuote",
                          y,
                          !1,
                          "rc20 panel2",
                          null === p || void 0 === p ? void 0 : p.siteid
                        ),
                      e.abrupt("return", { data: g, error: y })
                    );
                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function G() {
        return (G = (0, o.Z)(
          u().mark(function e(t) {
            var n, o, i, a, c, l, s, p, m, f, v, h, g, y, b, x, w, S;
            return u().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((i = t.query),
                      (a = void 0 === i ? {} : i),
                      (c = t.config),
                      (l = void 0 === c ? {} : c),
                      (s = (0, r.Z)(t, E)),
                      (p = null === a || void 0 === a ? void 0 : a.params),
                      (m = p.id),
                      (f = p.localeParams),
                      (v = N(
                        N(
                          N(
                            { links: "canonical" },
                            null !== f && void 0 !== f && f.siteid
                              ? {}
                              : { expand: "fields.asset_quote" }
                          ),
                          f
                        ),
                        D
                      )),
                      (g = A(
                        s,
                        [
                          "".concat((h = "prdct-ast"), "-").concat(m),
                          "".concat(h),
                        ],
                        f
                      )),
                      !m)
                    ) {
                      e.next = 11;
                      break;
                    }
                    return (
                      (e.next = 8),
                      d.oceis.fetchItemByID(
                        { id: m },
                        N({ query: N({}, v), config: l }, g)
                      )
                    );
                  case 8:
                    (e.t0 = e.sent), (e.next = 12);
                    break;
                  case 11:
                    e.t0 = [];
                  case 12:
                    (y = e.t0),
                      (b = y.data),
                      (x = y.error) &&
                        T(
                          "fetchProductAssets",
                          x,
                          !1,
                          "rc20 panel2",
                          null === f || void 0 === f ? void 0 : f.siteid
                        ),
                      !x &&
                        null !== b &&
                        void 0 !== b &&
                        null !== (n = b.fields) &&
                        void 0 !== n &&
                        null !== (o = n.asset_quote) &&
                        void 0 !== o &&
                        o.id &&
                        null !== f &&
                        void 0 !== f &&
                        f.siteid,
                      (e.next = 22);
                    break;
                  case 18:
                    (w = e.sent),
                      (S = w.data),
                      !w.error && S && (b.fields.asset_quote = S);
                  case 22:
                    return e.abrupt("return", { data: b, error: x });
                  case 23:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function X() {
        return (X = (0, o.Z)(
          u().mark(function e(t) {
            var n, o, i, a, c, l, s, m, f, v, h, g, y, b, x, w, S, j, _, C;
            return u().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((o = t.query),
                      (i = void 0 === o ? {} : o),
                      (a = t.config),
                      (c = void 0 === a ? {} : a),
                      (l = (0, r.Z)(t, k)),
                      (s = null === i || void 0 === i ? void 0 : i.params),
                      (m = s.id),
                      (f = s.type),
                      (v = s.getMasterAssetInfo),
                      (h = s.localeParams),
                      (g = (0, p.aP)(
                        null === h || void 0 === h ? void 0 : h.siteid
                      )),
                      (y = function () {
                        return [
                          "".concat(
                            null !== h && void 0 !== h && h.siteid
                              ? ""
                              : "story_top_products_portfolio"
                          ),
                          "Tier1_OCEStory",
                        ]
                          .filter(function (e) {
                            return e;
                          })
                          .map(function (e) {
                            return "fields.".concat(e);
                          })
                          .join(",");
                      }),
                      (b = N({ links: "none" }, g)),
                      (b = v
                        ? N(N({}, b), {}, { getMasterInfo: "true" })
                        : N({}, b)),
                      (b =
                        "SH-PublicStory" === f
                          ? N(N({}, b), {}, { expand: "".concat(y()) })
                          : N({}, b)),
                      (b = N(N({}, b), D)),
                      (w = A(
                        l,
                        [
                          ""
                            .concat(
                              (x =
                                "SH-PublicStory" === f
                                  ? "pblc-stry"
                                  : "prdct-ast"),
                              "-"
                            )
                            .concat(m),
                          "".concat(x),
                        ],
                        h
                      )),
                      !m)
                    ) {
                      e.next = 16;
                      break;
                    }
                    return (
                      (e.next = 13),
                      d.oceis.fetchItemByID(
                        { id: m },
                        N({ query: N({}, b), config: c }, w)
                      )
                    );
                  case 13:
                    (e.t0 = e.sent), (e.next = 17);
                    break;
                  case 16:
                    e.t0 = [];
                  case 17:
                    (S = e.t0),
                      (j = S.data),
                      (_ = S.error) &&
                        T(
                          "fetchProductAssetorStoryContentDetails",
                          _,
                          !1,
                          "rc20 panel3",
                          null === h || void 0 === h ? void 0 : h.siteid
                        ),
                      !_ &&
                        Array.isArray(
                          null === j ||
                            void 0 === j ||
                            null === (n = j.fields) ||
                            void 0 === n
                            ? void 0
                            : n.story_top_products_portfolio
                        ) &&
                        null !== h &&
                        void 0 !== h &&
                        h.siteid,
                      (e.next = 25);
                    break;
                  case 23:
                    (C = e.sent),
                      Array.isArray(C) &&
                        C.length &&
                        (j.fields.story_top_products_portfolio = C);
                  case 25:
                    return e.abrupt("return", { data: j, error: _ });
                  case 26:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function V(e) {
        return Y.apply(this, arguments);
      }
      function Y() {
        return (Y = (0, o.Z)(
          u().mark(function e(t) {
            var n, o, i, a, c, l, s, p, m, f, v, h, g, y;
            return u().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = t.query),
                      (o = void 0 === n ? {} : n),
                      (i = t.config),
                      (a = void 0 === i ? {} : i),
                      (c = (0, r.Z)(t, O)),
                      (l = null === o || void 0 === o ? void 0 : o.params),
                      (s = l.id),
                      (p = l.localeParams),
                      (m = N(N({ links: "none" }, p), D)),
                      (v = A(
                        c,
                        [
                          "".concat((f = "sh-prdct"), "-").concat(s),
                          "".concat(f),
                        ],
                        p
                      )),
                      !s)
                    ) {
                      e.next = 11;
                      break;
                    }
                    return (
                      (e.next = 8),
                      d.oceis.fetchItemByID(
                        { id: s },
                        N({ query: N({}, m), config: a }, v)
                      )
                    );
                  case 8:
                    (e.t0 = e.sent), (e.next = 12);
                    break;
                  case 11:
                    e.t0 = [];
                  case 12:
                    return (
                      (h = e.t0),
                      (g = h.data),
                      (y = h.error),
                      e.abrupt("return", { data: g, error: y })
                    );
                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var K = (0, d.createSWRHooks)({
        fetchQuote: z,
        fetchProductAssets: function (e) {
          return G.apply(this, arguments);
        },
        fetchProductAssetorStoryContentDetails: function (e) {
          return X.apply(this, arguments);
        },
        fetchTaxonomyByApiName: function (e) {
          return R.apply(this, arguments);
        },
        fetchTaxonomyList: function (e) {
          return F.apply(this, arguments);
        },
        fetchProductDetails: function (e) {
          return B.apply(this, arguments);
        },
        fetchLocaleSummary: function (e) {
          return W.apply(this, arguments);
        },
        fetchProductTaxonomy: V,
      });
    },
    3438: function (e, t, n) {
      "use strict";
      n.d(t, {
        Jh: function () {
          return i;
        },
        q8: function () {
          return r;
        },
        qW: function () {
          return o;
        },
        uC: function () {
          return a;
        },
      });
      var r = "31E9F530566340489B931F4A5566FA11",
        o = "5A0B0A9213D344628F4BBA4029291F4E",
        i = "0E3B648885C24A02B5B2676BEB82C7E9",
        a = "https://www.oracle.com";
    },
    81: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return r;
        },
      });
      var r = function () {
        return Math.floor(3 * Math.random()) + 1;
      };
    },
    198: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/product-navigator/[[...slug]]",
        function () {
          return n(3657);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [183, 774, 888, 179], function () {
      return (t = 198), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
