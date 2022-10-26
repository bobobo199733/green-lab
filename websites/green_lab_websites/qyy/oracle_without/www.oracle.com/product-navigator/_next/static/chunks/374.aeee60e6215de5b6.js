"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [374],
  {
    8374: function (e, n, l) {
      l.r(n);
      var i = l(7294),
        a = l(5935),
        o = l(5390),
        d = l(3030),
        r = l(2385),
        c = l(5893);
      n.default = function (e) {
        var n,
          l,
          s,
          t,
          _,
          v,
          u = e.ociRegionMapData,
          m = (0, i.useContext)(o.Z).oceIntegrator,
          p = (0, i.useContext)(d.N),
          g = u.map_enabled,
          h = void 0 !== g && g,
          x = u.map_headline,
          j = void 0 === x ? "" : x,
          w = u.map_subtext,
          b = void 0 === w ? "" : w,
          N = u.map_cta_text,
          f = void 0 === N ? "" : N,
          k = u.map_cta_link,
          z = void 0 === k ? null : k,
          C = u.map_cta_data_lbl,
          Z = void 0 === C ? "" : C,
          U = u.map_image,
          y = void 0 === U ? null : U,
          R = u.map_cta_open_in_new_tab,
          E = void 0 !== R && R,
          I = u.map_image_alt_text;
        return !0 === h
          ? (0, c.jsxs)("section", {
              className: "rw-theme-30bg rc115 rc115v1 cpad",
              "data-trackas": "rc115",
              children: [
                (0, c.jsxs)("div", {
                  className: "cwidth",
                  children: [
                    (0, c.jsxs)("div", {
                      className: "rc115w1",
                      children: [
                        (0, c.jsx)("div", {
                          className: "rwaccent",
                          children: (0, c.jsx)("h2", { children: j }),
                        }),
                        z
                          ? (0, c.jsx)("div", {
                              className: "rc115cta",
                              children: (0, c.jsxs)("a", {
                                href: z,
                                target: E ? "_blank" : null,
                                rel: "noreferrer",
                                "data-lbl": Z,
                                children: [
                                  f,
                                  E &&
                                    (0, c.jsx)("span", {
                                      className: "sr-only",
                                      children: ", opens in new tab",
                                    }),
                                ],
                              }),
                            })
                          : null,
                        b
                          ? (0, c.jsx)("div", {
                              className: "rc115w2",
                              children: (0, a.ZP)(b),
                            })
                          : null,
                      ],
                    }),
                    y
                      ? (0, c.jsxs)("figure", {
                          children: [
                            (0, c.jsx)(r.Z, {
                              imageUrl: (function () {
                                var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {};
                                return e && e.id
                                  ? ""
                                      .concat(m, "/assets/")
                                      .concat(e.id, "/native/")
                                      .concat(
                                        (e.name || "").replace(
                                          /\s+|\(+|\)+/g,
                                          "-"
                                        )
                                      )
                                  : "";
                              })(y),
                              alt: I,
                            }),
                            (0, c.jsx)("div", {
                              className: "rc115legend",
                              "aria-hidden": "true",
                              children: (0, c.jsxs)("ul", {
                                children: [
                                  (0, c.jsxs)("li", {
                                    children: [
                                      (0, c.jsx)("span", {
                                        className: "legend",
                                        children: (0, c.jsx)(r.Z, {
                                          alt:
                                            (null === p || void 0 === p
                                              ? void 0
                                              : p.prodnav_map_legend_current_regions_icon_alt_text) ||
                                            "",
                                          imageUrl:
                                            (null === p || void 0 === p
                                              ? void 0
                                              : p.prodnav_map_legend_current_regions_icon) ||
                                            "https://www.oracle.com/a/ocom/img/i/rc115-oci-legend-current.svg",
                                        }),
                                      }),
                                      (null === p || void 0 === p
                                        ? void 0
                                        : p.prodnav_map_legend_current_regions) ||
                                        "Current Regions",
                                    ],
                                  }),
                                  (0, c.jsxs)("li", {
                                    children: [
                                      (0, c.jsx)("span", {
                                        className: "legend",
                                        children: (0, c.jsx)(r.Z, {
                                          alt:
                                            (null === p || void 0 === p
                                              ? void 0
                                              : p.prodnav_map_legend_regions_coming_soon_icon_alt_text) ||
                                            "",
                                          imageUrl:
                                            (null === p || void 0 === p
                                              ? void 0
                                              : p.prodnav_map_legend_regions_coming_soon_icon) ||
                                            "https://www.oracle.com/a/ocom/img/i/rc115-oci-legend-future.svg",
                                        }),
                                      }),
                                      (null === p || void 0 === p
                                        ? void 0
                                        : p.prodnav_map_legend_regions_coming_soon) ||
                                        "Regions coming soon",
                                    ],
                                  }),
                                  (0, c.jsxs)("li", {
                                    children: [
                                      (0, c.jsx)("span", {
                                        className: "legend",
                                        children: (0, c.jsx)(r.Z, {
                                          alt:
                                            (null === p || void 0 === p
                                              ? void 0
                                              : p.prodnav_map_legend_azure_interconnect_icon_alt_text) ||
                                            "",
                                          imageUrl:
                                            (null === p || void 0 === p
                                              ? void 0
                                              : p.prodnav_map_legend_azure_interconnect_icon) ||
                                            "https://www.oracle.com/a/ocom/img/i/rc115-oci-legend-azure.svg",
                                        }),
                                      }),
                                      (null === p || void 0 === p
                                        ? void 0
                                        : p.prodnav_map_legend_azure_interconnect) ||
                                        "Azure Interconnect",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
                (0, c.jsxs)("div", {
                  className: "sr-only",
                  children: [
                    (0, c.jsx)("p", {
                      children:
                        null === u ||
                        void 0 === u ||
                        null === (n = u.map_table) ||
                        void 0 === n
                          ? void 0
                          : n.mapTitle,
                    }),
                    (0, c.jsxs)("table", {
                      children: [
                        (0, c.jsx)("caption", {
                          children:
                            null === u ||
                            void 0 === u ||
                            null === (l = u.map_table) ||
                            void 0 === l
                              ? void 0
                              : l.mapCaption,
                        }),
                        (0, c.jsxs)("tbody", {
                          children: [
                            (0, c.jsx)("tr", {
                              children:
                                (null === u ||
                                void 0 === u ||
                                null === (s = u.map_table) ||
                                void 0 === s
                                  ? void 0
                                  : s.header) &&
                                (null === u ||
                                void 0 === u ||
                                null === (t = u.map_table) ||
                                void 0 === t
                                  ? void 0
                                  : t.header.map(function (e, n) {
                                      return (0,
                                      c.jsx)("th", { scope: "col", children: e }, n);
                                    })),
                            }),
                            (null === u ||
                            void 0 === u ||
                            null === (_ = u.map_table) ||
                            void 0 === _
                              ? void 0
                              : _.values) &&
                              (null === u ||
                              void 0 === u ||
                              null === (v = u.map_table) ||
                              void 0 === v
                                ? void 0
                                : v.values.map(function (e, n) {
                                    return (0,
                                    c.jsxs)("tr", { children: [(0, c.jsx)("th", { scope: "row", children: null === e || void 0 === e ? void 0 : e.region }), (0, c.jsx)("td", { children: null === e || void 0 === e ? void 0 : e.current_regions }), (0, c.jsx)("td", { children: null === e || void 0 === e ? void 0 : e.regions_coming_soon }), (0, c.jsx)("td", { children: null === e || void 0 === e ? void 0 : e.azure_interconnect })] }, n);
                                  })),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : null;
      };
    },
  },
]);
