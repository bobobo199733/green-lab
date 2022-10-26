"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [93],
  {
    2093: function (e, n, a) {
      a.r(n);
      var t = a(7294),
        l = a(5390),
        r = a(3030),
        i = a(6383),
        c = a(77),
        o = a(5893);
      function s(e) {
        var n = e.taxonomy,
          a = e.handleProductNavigation,
          s = e.showFilters,
          u = e.toggleMobileFilters,
          d = e.taxonomyFiltersRef,
          v = e.panelBackground,
          m = e.hideMobileFilters,
          f = e.currentTaxonomySelected,
          p = e.isEnterKey,
          g = e.dummyTaxonomyRef,
          x = e.isPanelOpen,
          h = (0, t.useRef)(),
          b = (0, t.useRef)(null),
          y = (0, t.useRef)(null),
          N = (0, t.useContext)(l.Z).viewport,
          j = N || {},
          k = j.isMobile,
          w = j.isSmTablet,
          E = (0, t.useContext)(r.N),
          C = n || {},
          F = C.parentId,
          R = C.parentName,
          T = (0, t.useRef)();
        (0, t.useEffect)(
          function () {
            var e;
            null === T ||
              void 0 === T ||
              null === (e = T.current) ||
              void 0 === e ||
              e.setAttribute(
                "aria-label",
                "".concat(
                  n.categories[0].parent.name,
                  " menu list scrollable region"
                )
              );
          },
          [null === n || void 0 === n ? void 0 : n.parentId]
        ),
          (0, t.useEffect)(
            function () {
              if (n && n.parentId) {
                var e;
                if (p)
                  null === b ||
                    void 0 === b ||
                    null === (e = b.current) ||
                    void 0 === e ||
                    e.focus();
                y.current = setTimeout(function () {
                  var e;
                  p &&
                    null !== g &&
                    void 0 !== g &&
                    g.current &&
                    (null === g ||
                      void 0 === g ||
                      null === (e = g.current) ||
                      void 0 === e ||
                      e.focus());
                }, 500);
              }
              return function () {
                clearTimeout(null === y || void 0 === y ? void 0 : y.current);
              };
            },
            [n.parentId, p]
          );
        var M = function () {
          var e,
            t,
            l =
              (null === n ||
              void 0 === n ||
              null === (e = n.categories) ||
              void 0 === e ||
              null === (t = e[0]) ||
              void 0 === t
                ? void 0
                : t.parent) || {},
            r = l.id,
            i = l.apiName;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              ((!k && !w) || s) &&
                (0, o.jsxs)("ul", {
                  children: [
                    " ",
                    n.categories[0].parent &&
                      (0, o.jsx)(
                        "li",
                        {
                          className:
                            r === f
                              ? "active parent-taxonomy"
                              : "parent-taxonomy",
                          children: (0, o.jsx)("a", {
                            "data-txnmy-id": r,
                            "data-lbl": i,
                            className: "filter",
                            onClick: function (e) {
                              e.persist(), a(e, r, null, null, i);
                            },
                            children: n.categories[0].parent.name,
                          }),
                        },
                        -1
                      ),
                    n.categories.map(function (e, n) {
                      var t = e || {},
                        l = t.id,
                        r = t.name,
                        i = t.apiName;
                      return (0, o.jsx)(
                        "li",
                        {
                          className:
                            e.id === f ? "active filter-child" : "filter-child",
                          children: (0, o.jsx)("a", {
                            "data-txnmy-id": e.id,
                            "data-lbl": e.apiName,
                            className: "filter",
                            href: "#",
                            onClick: function (e) {
                              var n =
                                1 ===
                                (null === e || void 0 === e
                                  ? void 0
                                  : e.buttons);
                              a(e, l, r, null, i, n);
                            },
                            onKeyDown: function (e) {
                              var n = e || {},
                                t = n.type,
                                c = n.code,
                                o = n.detail,
                                s = n.buttons;
                              ("keydown" == t && "Enter" !== c) ||
                                a(
                                  e,
                                  l,
                                  r,
                                  null,
                                  i,
                                  ("keydown" == t && "Enter" === c) ||
                                    (1 == o && 1 == s)
                                );
                            },
                            children: e.name,
                          }),
                        },
                        n
                      );
                    }),
                  ],
                }),
              (0, o.jsx)("div", { className: "rc20bottomspacing" }),
            ],
          });
        };
        return (0, o.jsxs)("div", {
          className: "rc20menu",
          children: [
            (0, o.jsxs)(i.Z, {
              className: "parent-nav",
              src: v && v.image ? v.image : null,
              children: [
                F &&
                  (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)("div", { className: "dummydiv", ref: b }),
                      (0, o.jsx)("button", {
                        className: "rc20back icn-chevron-left",
                        "data-txnmy-id": F,
                        ref: g,
                        "data-lbl": "prev-back-button",
                        onClick: function (e) {
                          var n =
                            1 ===
                            (null === e || void 0 === e ? void 0 : e.buttons);
                          m(e), a(e, F, null, null, R, n);
                        },
                        onKeyDown: function (e) {
                          var n = e || {},
                            t = n.type,
                            l = n.code,
                            r =
                              "keydown" == t &&
                              ("Enter" === l || " " === l || "Space" === l);
                          ("keydown" == t && "Enter" !== l && "Space" !== l) ||
                            (m(e), a(e, F, null, null, R, r));
                        },
                        children: E.prodnav_back || "Back",
                      }),
                    ],
                  }),
                x &&
                  (0, o.jsx)("button", {
                    className: "rc20toggle ".concat(
                      s ? "icn-close" : "icn-overflow-vert"
                    ),
                    "aria-label": "Toggle menu",
                    onClick: function (e) {
                      u(e);
                    },
                  }),
              ],
            }),
            (function () {
              var e = (function () {
                var e = null;
                return (
                  n &&
                    n.categories &&
                    n.categories[0].ancestors &&
                    n.categories[0].ancestors[0].name &&
                    (e = n.categories[0].ancestors[0].name.split(" ")),
                  e
                );
              })();
              return (0, o.jsx)("div", {
                className: "rc20category",
                children:
                  e &&
                  (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)("div", {
                        children: "".concat(e[0], " ").concat(e[1]),
                      }),
                      (0, o.jsx)("div", {
                        children: "".concat(e[2] ? e[2] : ""),
                      }),
                    ],
                  }),
              });
            })(),
            (0, o.jsx)("div", {
              className: "rc20filters",
              ref: h,
              children: N.isMobile
                ? n && n.categories && n.categories.length > 0 && M()
                : n &&
                  n.categories &&
                  n.categories.length > 0 &&
                  (0, o.jsx)(c.Z, {
                    scrollableNodeProps: { ref: T },
                    ref: d,
                    scrollbarMaxSize: 100,
                    children: M(),
                  }),
            }),
          ],
        });
      }
      n.default = (0, t.memo)(s);
    },
  },
]);
