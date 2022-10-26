"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [753, 821],
  {
    3821: function (e, t, a) {
      a.r(t),
        a.d(t, {
          equalHeight: function () {
            return l;
          },
        });
      var c = a(7294),
        r = a(5893);
      function l(e, t) {
        var a,
          c,
          r,
          l = 0,
          n = -1,
          o = [],
          s = 0,
          i = t.length;
        return (
          (e = e || !1),
          i <= 1
            ? this
            : Array.prototype.forEach.call(t, function (t, d) {
                (t.style.height = "auto"),
                  (r = t.offsetHeight),
                  (0 !== s && e) ||
                    (a = Math.floor(t.getBoundingClientRect().top / 10)),
                  a !== c
                    ? (n++, (o[n] = { collection: [] }), (c = a), (l = r))
                    : (l = r > l ? r : l),
                  o[n].collection.push(t),
                  (o[n].heightMatch = l),
                  ++s === i &&
                    o.forEach(function (e) {
                      if (e.collection.length < 2) return !1;
                      e.collection.forEach(function (t) {
                        t.style.height = "".concat(e.heightMatch, "px");
                      });
                    });
              })
        );
      }
      t.default = function (e) {
        var t = e.data,
          a = e.title;
        return (
          (0, c.useEffect)(function () {
            l(!1, document.querySelectorAll(".rc68 .col-framework.col3 h3"));
          }, []),
          (0, r.jsx)("section", {
            className: "rc68 rc68v2 rw-neutral-10bg cpad",
            "data-trackas": "rc68",
            "data-ocomid": "rc68",
            "data-bgimg": "/assets/images/bgimg04/bgimg04-fpo-05.jpg",
            "data-a11y": "true",
            children: (0, r.jsx)("div", {
              className: "rc68w1 cwidth",
              children: (0, r.jsxs)("div", {
                className: "rc68w2",
                children: [
                  (0, r.jsx)("h2", { children: a }),
                  (0, r.jsx)("div", {
                    className:
                      "col-framework col-hover col-justified col4 col-multi col-gutters",
                    children: (0, r.jsx)("ul", {
                      className: "col-w1",
                      children:
                        t &&
                        t.length > 0 &&
                        t.map(function (e, t) {
                          var a = e.Text,
                            c = e.Icon,
                            l = e.Link,
                            n = e.DataLbl;
                          return (0,
                          r.jsx)("li", { className: "col-item", children: (0, r.jsx)("a", { href: l, "data-lbl": n, children: (0, r.jsx)("h3", { role: "presentation", className: "icn-img ".concat(c), children: a }) }) }, t);
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
    5753: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var c = a(7294),
        r = a(3821),
        l = a(5935),
        n = a(5390),
        o = a(6835),
        s = a(5893);
      var i = function (e) {
          for (
            var t,
              a,
              r = e.pathfactory,
              l = e.dataLabel,
              n = void 0 === l ? "" : l,
              i = e.children,
              d = {},
              h = (0, c.useRef)(null),
              u = function (e, t) {
                /\?/.test(a)
                  ? (a += "&".concat(e, "=").concat(t))
                  : (a += "?".concat(e, "=").concat(t));
              },
              m = function (e) {
                (e.key && "Escape" !== e.key) ||
                  (e.preventDefault(),
                  t.classList.add("w11fadeout"),
                  setTimeout(function () {
                    document.body.removeChild(t),
                      document.body.classList.remove("lightbox-noscroll");
                  }, 800),
                  (t.querySelector(".w11close").style.display = "none"),
                  w());
              },
              w = function () {
                window.removeEventListener("keydown", m),
                  t &&
                    (t.querySelector(".w11close") &&
                      t
                        .querySelector(".w11close")
                        .removeEventListener("click", m),
                    t.querySelector(".w11w3") &&
                      t
                        .querySelector(".w11w3")
                        .removeEventListener("click", m));
              },
              f = function () {
                t.classList.remove("w11fadein"),
                  document.body.classList.add("lightbox-noscroll");
              },
              p = r.split(/"|'/),
              v = 1;
            v < p.length;
            v += 2
          )
            p[v] && (d[p[v].split(" ").pop().replace("=", "")] = p[v + 1]);
          var g = (0, o.Z)(p, 1);
          return (
            (a = g[0]),
            /lb-mode=/.test(a) || u("lb-mode", "overlay"),
            !/source=/.test(a) &&
              d["data-cxdtrack"] &&
              u("source", d["data-cxdtrack"]),
            /^https?:\/\//i.test(d.src) ||
              (d.src = "https://www.oracle.com/".concat(d.src)),
            (0, c.useEffect)(function () {
              return (
                document.documentElement.classList.add("w11ready"),
                "www.oracle.com" !== window.location.hostname &&
                  ((h.current.target = "_blank"),
                  (h.current.innerHTML +=
                    '<span class="sr-only">, opens in new tab</span>')),
                w
              );
            }, []),
            (0, s.jsx)("a", {
              ref: h,
              onClick: function (e) {
                "www.oracle.com" === window.location.hostname &&
                  (e.preventDefault(),
                  ((t = document.createElement("div")).className =
                    "w11 w11fadein"),
                  (t.id = "w11"),
                  (t.dataset.theme = "pathfactory"),
                  (t.dataset.trackas = "lightbox"),
                  (t.innerHTML =
                    '<div class="w11w1">\n           <div class="w11w2 lbdefault" style=background-color:\'#FFF\'>\n                   <a class="icn-close w11close" href="#close" data-lbl="lightbox-close"><em>Close</em></a>\n                   <div class="w11w4">\n                       <div class="w11w5">\n                           <div class="w11w6">\n                           <iframe width="100vw" height="100vh" title='
                      .concat(
                        d.title,
                        ' frameborder="0" allowfullscreen="true" allow="fullscreen" src='
                      )
                      .concat(
                        a,
                        '></iframe>\n                           </div>\n                       </div>\n                   </div>\n               </div>\n               <div class="w11w3"></div>\n           </div>'
                      )),
                  document.body.appendChild(t),
                  setTimeout(f, 10),
                  window.addEventListener("keydown", m),
                  t.querySelector(".w11close").addEventListener("click", m),
                  t.querySelector(".w11w3").addEventListener("click", m));
              },
              href: a,
              "data-cxdtrack": d["data-cxdtrack"],
              "data-dbtrack": d["data-dbtrack"],
              title: d.title,
              "data-iframe": "true",
              "data-theme": "pathfactory",
              "data-width": "1800",
              "data-height": "800",
              tabIndex: 0,
              "data-lbl": n || d["data-lbl"],
              children:
                i ||
                (d.src &&
                  (0, s.jsx)("img", {
                    src: d.src,
                    style: { width: "100%" },
                    alt: d.alt,
                  })),
            })
          );
        },
        d = a(2385),
        h = a(2052);
      var u = function (e) {
        var t = e.data;
        (t && t.length > 0) ||
          h.logger.error(
            "Failed to receive RH09 props from server",
            "PN_LONGFORM_V2"
          );
        var a = (0, c.useContext)(n.Z).oceIntegrator,
          o = function () {
            (0, r.equalHeight)(
              !1,
              document.querySelectorAll(".rh09 .rh09-ttl")
            ),
              (0, r.equalHeight)(
                !1,
                document.querySelectorAll(".rh09 .rh09-copy")
              );
          };
        (0, c.useEffect)(function () {
          return (
            (document.body.className += "  rwtheme-oci"),
            o(),
            window.addEventListener("resize", o),
            function () {
              window.removeEventListener("resize", o);
            }
          );
        }, []);
        var u = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return e && e.id
            ? ""
                .concat(a, "/assets/")
                .concat(e.id, "/native/")
                .concat((e.name || "").replace(/\s+|\(+|\)+/g, "-"))
            : "";
        };
        return (0, s.jsx)(s.Fragment, {
          children:
            t && t.length > 0
              ? (0, s.jsx)("section", {
                  className:
                    "rh09 rh09v3 rw-neutral-10bg rw-pattern9 rw-pattern-50p rw-pattern-small rw-pattern-load",
                  "data-trackas": "rh09",
                  "data-ocomid": "rh09",
                  "data-a11y": "true",
                  children: (0, s.jsx)("div", {
                    className: "rh09w1 cwidth",
                    children: (0, s.jsx)("div", {
                      className:
                        "rh09tiles col-framework col-justified col-gutters col3",
                      children: (0, s.jsx)("div", {
                        className: "col-w1",
                        children: t.map(function (e, t) {
                          var a = e.promo_header,
                            c = e.promo_new_window,
                            r = e.promo_description,
                            n = e.promo_cta_text,
                            o = e.promo_cta_data_label,
                            h = e.promo_image,
                            m = e.promo_cta_link,
                            w = e.promo_image_alt_text;
                          return (0,
                          s.jsxs)("div", { className: "col-item rh09tile rw-neutral-00bg rw-theme-accent-beforebg", children: [(0, s.jsxs)("div", { className: "rh09-body", children: [(0, s.jsx)("div", { className: "rh09-ttl", children: (0, s.jsx)("h4", { children: a }) }), (0, s.jsxs)("div", { className: "rh09-copy", children: [(0, l.ZP)(r), (0, s.jsx)("div", { className: "rh09-cta", children: /^(https:\/\/www\.oracle.com\/explore\/|https:\/\/explore\.oracle\.com\/c\/)/.test(m) ? (0, s.jsx)(i, { pathfactory: m, dataLabel: o, children: n }) : (0, s.jsxs)("a", { href: m || "#", target: c ? "_blank" : null, "data-lbl": o, rel: "noreferrer", children: [n, (0, s.jsx)("span", { className: "sr-only" }), c && (0, s.jsx)("span", { className: "sr-only", children: ", opens in new tab" })] }) })] }), h ? (0, s.jsx)("div", { className: "rh09-img", children: (0, s.jsx)(d.Z, { imageUrl: u(h), alt: w }) }) : null] }), (0, s.jsx)("div", { className: "rh09-cta", children: /^(https:\/\/www\.oracle.com\/explore\/|https:\/\/explore\.oracle\.com\/c\/)/.test(m) ? (0, s.jsx)(i, { pathfactory: m, dataLabel: o, children: n }) : (0, s.jsxs)("a", { href: m || "#", target: c ? "_blank" : null, "data-lbl": o, rel: "noreferrer", children: [n, (0, s.jsx)("span", { className: "sr-only" }), c && (0, s.jsx)("span", { className: "sr-only", children: ", opens in new tab" })] }) })] }, t);
                        }),
                      }),
                    }),
                  }),
                })
              : null,
        });
      };
    },
  },
]);
