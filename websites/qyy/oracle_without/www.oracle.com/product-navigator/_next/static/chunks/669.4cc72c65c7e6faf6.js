"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [669, 297],
  {
    1297: function (e, t, n) {
      n.r(t);
      var i = n(5893);
      t.default = function () {
        return (0, i.jsx)("div", {
          className: "panelLoader",
          children: (0, i.jsxs)("ul", {
            className: "loader",
            children: [
              (0, i.jsx)("li", { className: "heading" }),
              (0, i.jsx)("br", {}),
              (0, i.jsx)("li", {}),
              (0, i.jsx)("li", {}),
              (0, i.jsx)("li", {}),
              (0, i.jsx)("li", {}),
              (0, i.jsx)("li", { className: "info" }),
            ],
          }),
        });
      };
    },
    1669: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var i = n(7294),
        l = n(5390),
        r = n(3030),
        a = n(77),
        s = n(6835),
        c = n(9499),
        o = n(2385),
        u = n(6802),
        d = n(1163),
        v = n(3421),
        f = n(5893);
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                (0, c.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var h = u.MY.useFetchProductAssets,
        j = u.MY.useFetchQuote;
      function x(e) {
        var t = e.assetId,
          n = e.initialData,
          a = e.edgeCacheApiName,
          c = (0, i.useContext)(l.Z).isPreview,
          u = (0, i.useState)(null),
          p = u[0],
          j = u[1],
          x = p || {},
          b = x.asset_image,
          O = x.link,
          y = x.reference,
          N = x.title,
          P = x.asset_quote,
          w = x.disclaimer,
          q = b && b.id,
          _ = b && b.name,
          S = (0, i.useContext)(r.N),
          E = (0, d.useRouter)().locale,
          k = { localeParams: (0, v.aP)(E) };
        function C(e) {
          var t, n, i;
          return (
            (null ===
              (i = e =
                null ===
                  (n = e =
                    null === (t = e) || void 0 === t
                      ? void 0
                      : t.split("\n")) || void 0 === n
                  ? void 0
                  : n.filter(function (e) {
                      return (
                        (null === e || void 0 === e ? void 0 : e.length) > 0
                      );
                    })) || void 0 === i
              ? void 0
              : i.reduce(function (e, t) {
                  return e + "<p>".concat(t, "</p>");
                }, "")) || null
          );
        }
        function D(e) {
          if (e && e.fields) {
            var t,
              n =
                null === e ||
                void 0 === e ||
                null === (t = e.fields) ||
                void 0 === t
                  ? void 0
                  : t.disclaimer;
            j(
              m(
                m({}, null === e || void 0 === e ? void 0 : e.fields),
                {},
                { disclaimer: n ? C(n) : null }
              )
            );
          } else j(null);
        }
        (0, i.useEffect)(
          function () {
            n && D(n);
          },
          [n]
        );
        var A = h({
            query: { params: m({ id: n ? null : t }, k) },
            swrOptions: { revalidateOnFocus: !1 },
            opts: { mgmtPreview: c, cacheTags: a ? [a] : [] },
          }),
          Z = (0, s.Z)(A, 2),
          F = Z[0].data,
          I = Z[1];
        return (
          (0, i.useEffect)(
            function () {
              F && D(F);
            },
            [F]
          ),
          (0, i.useEffect)(function () {
            return function () {
              I.cancel("cancel pending fetch calls of product asset");
            };
          }, []),
          p &&
            (0, f.jsxs)("div", {
              children: [
                q &&
                  N &&
                  (0, f.jsx)("div", { className: "title", children: N }),
                q
                  ? (0, f.jsx)(o.Z, {
                      alt: "",
                      imageId: q,
                      imageName: _,
                      classes: ["reportImage"],
                    })
                  : null,
                (0, f.jsx)(g, { quote: P }),
                (y || O) &&
                  (0, f.jsx)("div", {
                    className: "reportBtn obttns",
                    children: (0, f.jsx)("div", {
                      children: (0, f.jsx)("a", {
                        href: y || O,
                        children: S.prodnav_readReport || "Read the report",
                      }),
                    }),
                  }),
                w &&
                  (0, f.jsx)("small", {
                    className: "rc20disclaimer",
                    dangerouslySetInnerHTML: { __html: w },
                  }),
              ],
            })
        );
      }
      var b = (0, i.memo)(x);
      function g(e) {
        var t,
          n,
          r,
          a,
          c,
          o,
          u = e.quote,
          p = (0, i.useContext)(l.Z).isPreview,
          h = (0, d.useRouter)().locale,
          x = { localeParams: (0, v.aP)(h, !1) },
          b = j({
            query: {
              params: m(
                {
                  id:
                    null !== u && void 0 !== u && u.fields
                      ? null
                      : null === u || void 0 === u
                      ? void 0
                      : u.id,
                },
                x
              ),
            },
            swrOptions: { revalidateOnFocus: !1 },
            opts: { mgmtPreview: p, cacheTags: [] },
          }),
          g = (0, s.Z)(b, 2),
          O = g[0].data,
          y = g[1];
        (0, i.useEffect)(function () {
          return function () {
            null === y ||
              void 0 === y ||
              y.cancel("cancel pending fetch calls of quote");
          };
        }, []);
        var N =
            (null === O ||
            void 0 === O ||
            null === (t = O.fields) ||
            void 0 === t
              ? void 0
              : t.quote) ||
            (null === u ||
            void 0 === u ||
            null === (n = u.fields) ||
            void 0 === n
              ? void 0
              : n.quote) ||
            null,
          P =
            (null === O ||
            void 0 === O ||
            null === (r = O.fields) ||
            void 0 === r
              ? void 0
              : r.quote_attribution) ||
            (null === u ||
            void 0 === u ||
            null === (a = u.fields) ||
            void 0 === a
              ? void 0
              : a.quote_attribution) ||
            null,
          w =
            (null === O ||
            void 0 === O ||
            null === (c = O.fields) ||
            void 0 === c
              ? void 0
              : c.quote_attribution_2) ||
            (null === u ||
            void 0 === u ||
            null === (o = u.fields) ||
            void 0 === o
              ? void 0
              : o.quote_attribution_2) ||
            null;
        return (0, f.jsxs)(f.Fragment, {
          children: [
            N && (0, f.jsx)("div", { className: "rc20quote-lg", children: N }),
            P &&
              (0, f.jsx)("div", {
                className: "rc20attribution-lg",
                children: P,
              }),
            w &&
              (0, f.jsx)("div", {
                className: "rc20attribution-lg",
                children: w,
              }),
          ],
        });
      }
      function O(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                (0, c.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var N = u.MY.useFetchQuote;
      function P(e) {
        var t = e.quoteId,
          n = e.initialData,
          r = e.edgeCacheApiName,
          a = (0, i.useContext)(l.Z).isPreview,
          c = (0, i.useState)(null),
          o = c[0],
          u = c[1],
          p = (0, d.useRouter)().locale,
          m = { localeParams: (0, v.aP)(p) },
          h = (0, i.useRef)(!1);
        function j(e) {
          var t = null;
          e && e.fields && (t = y({}, e.fields)), h.current && u(t);
        }
        (0, i.useEffect)(function () {
          return (
            (h.current = !0),
            function () {
              h.current = !1;
            }
          );
        }, []),
          (0, i.useEffect)(
            function () {
              n && j(n);
            },
            [n]
          );
        var x = N({
            query: { params: y({ id: n ? null : t }, m) },
            swrOptions: { revalidateOnFocus: !1 },
            opts: { mgmtPreview: a, cacheTags: r ? [r] : [] },
          }),
          b = (0, s.Z)(x, 2),
          g = b[0].data,
          O = b[1];
        return (
          (0, i.useEffect)(
            function () {
              g && j(g);
            },
            [g]
          ),
          (0, i.useEffect)(function () {
            return function () {
              null === O ||
                void 0 === O ||
                O.cancel("cancel pending fetch calls of quote");
            };
          }, []),
          o &&
            (0, f.jsxs)(f.Fragment, {
              children: [
                o.quote && '"'.concat(o.quote, '"'),
                (0, f.jsxs)("div", {
                  className: "rc20attribution",
                  children: [
                    (0, f.jsx)("div", { children: o.quote_attribution }),
                    (0, f.jsx)("div", { children: o.quote_attribution_2 }),
                  ],
                }),
              ],
            })
        );
      }
      var w = (0, i.memo)(P),
        q = n(1297);
      function _(e) {
        var t = e.product,
          n = void 0 === t ? {} : t,
          s = e.color,
          c = e.activeIndex,
          o = e.panelRef,
          u = e.closeEditScreen,
          d = e.initialData,
          v = e.slideNo,
          p = e.totalLength,
          m = e.currentTaxonomySelected,
          h = e.edgeCacheApiName,
          j = e.isPanelOpen,
          x = m ? (null === n || void 0 === n ? void 0 : n.quotes) : {},
          g = Array.isArray(x) && x.length > 0 ? x[0] : null,
          O = (0, i.useContext)(l.Z),
          y = O.isPreview,
          N = O.viewport,
          P = (0, i.useContext)(r.N),
          _ = (0, i.useRef)();
        (0, i.useEffect)(
          function () {
            var e;
            null !== n &&
              void 0 !== n &&
              n.title &&
              null !== _ &&
              void 0 !== _ &&
              _.current &&
              (null === _ ||
                void 0 === _ ||
                null === (e = _.current) ||
                void 0 === e ||
                e.setAttribute(
                  "aria-label",
                  "".concat(
                    null === n || void 0 === n ? void 0 : n.title,
                    " scrollable region"
                  )
                ));
          },
          [
            null === n || void 0 === n ? void 0 : n.title,
            null === _ || void 0 === _ ? void 0 : _.current,
          ]
        );
        var S = function (e) {
          switch (e) {
            case "SH-ProductAsset":
              return (0, f.jsx)("div", {
                className: "rc20report",
                children: (0, f.jsx)(b, {
                  assetId: g.id,
                  initialData: d,
                  edgeCacheApiName: h,
                }),
              });
            case "SH-Quote":
              return (0, f.jsx)("div", {
                className: "rc20quote",
                children: (0, f.jsx)(
                  w,
                  { quoteId: g.id, initialData: d, edgeCacheApiName: h },
                  g.id
                ),
              });
            default:
              return null;
          }
        };
        function E() {
          return n && null !== n && void 0 !== n && n.isLoading
            ? (0, f.jsx)(q.default, {})
            : (0, f.jsxs)(f.Fragment, {
                children: [
                  n.title
                    ? (0, f.jsx)("h3", {
                        className: "rc20title",
                        children: n.title,
                      })
                    : "",
                  (0, f.jsx)("div", {
                    className: "rc20overview",
                    children: n.overview
                      ? (0, f.jsx)("span", {
                          dangerouslySetInnerHTML: { __html: n.overview },
                        })
                      : null,
                  }),
                  g && "SH-Quote" === g.type && S("SH-Quote"),
                  n.link &&
                    (0, f.jsx)("div", {
                      className: "rc20cta",
                      children: (0, f.jsx)("div", {
                        className: "obttns",
                        children: (0, f.jsx)("div", {
                          children: (0, f.jsxs)("a", {
                            href: n.link,
                            "data-lbl": n.data_label,
                            children: [
                              P.prodnav_learnMore || "Learn More",
                              (0, f.jsx)("span", {
                                className: "visuallyHidden",
                                children: ", ".concat(n.title ? n.title : ""),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  g && "SH-ProductAsset" === g.type && S("SH-ProductAsset"),
                  (0, f.jsx)("div", { className: "rc20bottomspacing" }),
                ],
              });
        }
        return (0, f.jsx)("div", {
          className: "rc20slide rc20fold1 "
            .concat(-1 === c ? "active" : "", " ")
            .concat(c + 2 === p && v === p - 2 ? "second-last" : ""),
          ref: o,
          "data-trackas": "rc20:panel2",
          children: (0, f.jsxs)("div", {
            className: "rc20infopanel darktheme",
            style: { background: s },
            children: [
              Object.keys(n).length > 0 &&
                y &&
                (0, f.jsx)("span", {
                  className: "icn-edit rc20edit",
                  onClick: u,
                }),
              j &&
                (0, f.jsx)("div", {
                  className: "rc20content",
                  children: N.isMobile
                    ? (0, f.jsx)(f.Fragment, { children: E() })
                    : (0, f.jsx)(a.Z, {
                        scrollableNodeProps: {
                          ref: _,
                          tabIndex: j ? 0 : "-1",
                          onClick: function () {
                            var e, t;
                            null === _ ||
                              void 0 === _ ||
                              null === (e = _.current) ||
                              void 0 === e ||
                              null === (t = e.classList) ||
                              void 0 === t ||
                              t.add("o-hf");
                          },
                        },
                        scrollbarMaxSize: 100,
                        children: E(),
                      }),
                }),
            ],
          }),
        });
      }
      var S = (0, i.memo)(_);
    },
  },
]);
