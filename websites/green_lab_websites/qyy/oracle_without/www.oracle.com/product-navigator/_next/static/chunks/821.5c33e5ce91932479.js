"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [821],
  {
    3821: function (c, t, e) {
      e.r(t),
        e.d(t, {
          equalHeight: function () {
            return n;
          },
        });
      var a = e(7294),
        l = e(5893);
      function n(c, t) {
        var e,
          a,
          l,
          n = 0,
          r = -1,
          i = [],
          o = 0,
          s = t.length;
        return (
          (c = c || !1),
          s <= 1
            ? this
            : Array.prototype.forEach.call(t, function (t, h) {
                (t.style.height = "auto"),
                  (l = t.offsetHeight),
                  (0 !== o && c) ||
                    (e = Math.floor(t.getBoundingClientRect().top / 10)),
                  e !== a
                    ? (r++, (i[r] = { collection: [] }), (a = e), (n = l))
                    : (n = l > n ? l : n),
                  i[r].collection.push(t),
                  (i[r].heightMatch = n),
                  ++o === s &&
                    i.forEach(function (c) {
                      if (c.collection.length < 2) return !1;
                      c.collection.forEach(function (t) {
                        t.style.height = "".concat(c.heightMatch, "px");
                      });
                    });
              })
        );
      }
      t.default = function (c) {
        var t = c.data,
          e = c.title;
        return (
          (0, a.useEffect)(function () {
            n(!1, document.querySelectorAll(".rc68 .col-framework.col3 h3"));
          }, []),
          (0, l.jsx)("section", {
            className: "rc68 rc68v2 rw-neutral-10bg cpad",
            "data-trackas": "rc68",
            "data-ocomid": "rc68",
            "data-bgimg": "/assets/images/bgimg04/bgimg04-fpo-05.jpg",
            "data-a11y": "true",
            children: (0, l.jsx)("div", {
              className: "rc68w1 cwidth",
              children: (0, l.jsxs)("div", {
                className: "rc68w2",
                children: [
                  (0, l.jsx)("h2", { children: e }),
                  (0, l.jsx)("div", {
                    className:
                      "col-framework col-hover col-justified col4 col-multi col-gutters",
                    children: (0, l.jsx)("ul", {
                      className: "col-w1",
                      children:
                        t &&
                        t.length > 0 &&
                        t.map(function (c, t) {
                          var e = c.Text,
                            a = c.Icon,
                            n = c.Link,
                            r = c.DataLbl;
                          return (0,
                          l.jsx)("li", { className: "col-item", children: (0, l.jsx)("a", { href: n, "data-lbl": r, children: (0, l.jsx)("h3", { role: "presentation", className: "icn-img ".concat(a), children: e }) }) }, t);
                        }),
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      };
    },
  },
]);
