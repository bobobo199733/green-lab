"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [210],
  {
    8586: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return u;
          },
        });
      var n = r(7294),
        c = r(5935),
        o = r(2052);
      function l() {
        var e,
          t = document.querySelectorAll(".rc105w1"),
          r = document.querySelectorAll(".rc105w2"),
          n = document.querySelectorAll(".rc105count"),
          c = document.querySelectorAll(".rc105w3"),
          o = window.innerWidth,
          l = !1;
        function i(e) {
          var t = document.createElement("div");
          return (t.innerHTML = e.trim()), t.firstChild;
        }
        function u(e, t, r) {
          for (var n = 0, c = e.length; n < c; n++)
            e[n].addEventListener(t, r, !1);
        }
        function a(e) {
          e.preventDefault(),
            l ||
              ((l = !0),
              setTimeout(function () {
                l = !1;
              }, 250),
              !0 ===
                (function (e) {
                  if ("click" === e.type) return !0;
                  if ("keypress" !== e.type) return !1;
                  var t = e.charCode || e.keyCode;
                  return 32 === t || 13 === t || void 0;
                })(event) &&
                (document.querySelectorAll(".rc105w3.opening")[0]
                  ? setTimeout(function () {
                      h(e);
                    }, 222)
                  : h(e)));
        }
        function d(e) {
          e.preventDefault(),
            v(document.querySelectorAll(".rc105w3.open")),
            t.forEach(function (e) {
              e.querySelector(".rc105w2-drawer .current") &&
                e.querySelector(".rc105w2-drawer .current").focus();
            });
        }
        function s(e) {
          e.preventDefault(),
            v(document.querySelectorAll(".rc105w3.open")),
            t.forEach(function (e) {
              e.querySelector(".rc105w2-drawer .current") &&
                e.querySelector(".rc105w2-drawer .current").focus();
            });
        }
        function f() {
          if (
            document.activeElement ===
            document.querySelector(".rc105w3.current .rc105exit")
          ) {
            var e = document.querySelector(".rc105w2-drawer .current");
            v(document.querySelectorAll(".rc105w3.open")),
              setTimeout(function () {
                var t = e
                  .closest(".rc105w2")
                  .nextElementSibling.querySelector("a");
                t ? t.focus() : document.querySelector(".a11-fs").focus();
              }, 300);
          }
        }
        function w(e) {
          27 === e.keyCode && s(e);
        }
        function m() {
          return (
            clearTimeout(e),
            (e = setTimeout(function () {
              o !== window.innerWidth &&
                (v(document.querySelectorAll(".rc105w3.open")),
                b(),
                (o = window.innerWidth));
            }, 100)),
            !1
          );
        }
        function y() {
          v(document.querySelectorAll(".rc105w3.open"));
        }
        function h(e) {
          if (!document.querySelectorAll(".rc105w3.opening")[0]) {
            var t,
              r,
              n = e.target.closest(".rc105w2"),
              o = n.querySelector("a"),
              l = document.querySelectorAll(".rc105w3.open"),
              u = n.getAttribute("data-guid"),
              a = document.querySelector('[data-parent="' + u + '"]'),
              d = i(
                '<a href="#close" class="icn-close" aria-label="close expanded panel" title="Close"></a>'
              ),
              s = n.getAttribute("data-row"),
              f = document.querySelectorAll('[data-row="' + s + '"]')[
                document.querySelectorAll('[data-row="' + s + '"]').length - 1
              ];
            if (
              (a.querySelectorAll(".icn-close").length ||
                a.insertBefore(d, a.firstChild),
              (a.dataset.open = !!a.dataset.open),
              o.classList.toggle("current"),
              o.classList.toggle("rw-theme-accent"),
              document
                .querySelectorAll(".rc105w2-drawer > a")
                .forEach(function (e) {
                  e.classList.contains("current") &&
                    (e.setAttribute("aria-expanded", "true"),
                    e.getAttribute("data-lbl") &&
                      !/:close/.test(e.getAttribute("data-lbl")) &&
                      setTimeout(function () {
                        e.setAttribute(
                          "data-lbl",
                          e.getAttribute("data-lbl") + ":close"
                        );
                      }, 0));
                }),
              v(l),
              f.parentNode.insertBefore(a, f.nextSibling),
              a.dataset.open)
            ) {
              var w = function () {
                a.querySelector("h5") &&
                  (a.querySelector("h5").getBoundingClientRect().left = a
                    .querySelector(".rc105w4")
                    .getBoundingClientRect().left),
                  a.classList.add("current"),
                  a.querySelectorAll("a").forEach(function (e) {
                    e.removeAttribute("aria-hidden"),
                      e.setAttribute("tabindex", "0");
                  }),
                  setTimeout(function () {
                    document
                      .querySelector(".rc105w3.opening")
                      .querySelector(".icn-close")
                      .focus(),
                      document
                        .querySelector(".rc105w3.opening")
                        .classList.remove("opening");
                  }, 220),
                  (function (e) {
                    if (!e) return !1;
                    if (1 !== e.nodeType) return !1;
                    var t = document.documentElement,
                      r = e.getBoundingClientRect();
                    return (
                      !!r &&
                      r.bottom >= 0 &&
                      r.right >= 0 &&
                      r.left <= t.clientWidth &&
                      r.top <= t.clientHeight
                    );
                  })(n) ||
                    ((t =
                      document.querySelector('[class*="stuck"]').offsetHeight ||
                      0),
                    window.scrollTo({
                      top: n.getBoundingClientRect().top - t,
                      behavior: "smooth",
                    }));
              };
              (a.style.cssText = "height: ''; padding: '' "),
                a.classList.add("open"),
                a.classList.add("opening"),
                (r = a.offsetHeight),
                (function (e) {
                  var t = 0;
                  var n = setInterval(function () {
                    (t += 5),
                      (e.style.height = t + "px"),
                      t >= r && (clearInterval(n), w());
                  }, 5);
                })(a);
            }
            g(c);
          }
          return !1;
        }
        function v(e) {
          var t, r;
          return (
            0 === e.length ||
              ((r = e[0].dataset.parent),
              (t = document.querySelector('[data-guid="' + r + '"]')),
              e.forEach(function (e) {
                e.classList.remove("current"),
                  (e.style.cssText = "height:0"),
                  (e.dataset.open = "");
              }),
              setTimeout(function () {
                e.forEach(function (e) {
                  e.classList.remove("open"), t.append(e);
                });
                var r = t.querySelector("a");
                r.classList.remove("current"),
                  r.classList.remove("rw-theme-accent"),
                  r.setAttribute("aria-expanded", !1),
                  r.getAttribute("data-lbl") &&
                    r.setAttribute(
                      "data-lbl",
                      r.getAttribute("data-lbl").replace(":close", "")
                    );
              }, 200)),
            !1
          );
        }
        function b() {
          var e,
            t = 1,
            n = 0,
            c = 0,
            o = document.querySelector(".rc105w2.extra"),
            l = "";
          if (
            (o && null !== o.parentNode && o.parentNode.removeChild(o),
            r.forEach(function (r) {
              var o = r,
                i = o.querySelectorAll(".rc105w3"),
                u = o.querySelector("a");
              if (!o.getAttribute("data-guid")) {
                (l = u && u.getAttribute("href")),
                  o.setAttribute("data-guid", c);
                var a = Array.from(
                  document.querySelectorAll(".rc105w2")
                ).reduce(function (e, t) {
                  var r = t.closest(".rc105notitle");
                  return r && e.push(r), e;
                }, []);
                i.length > 0 &&
                  (a[0]
                    ? i.forEach(function (e) {
                        e.setAttribute("data-parent", c),
                          e.setAttribute("id", l.slice(1));
                      })
                    : i.forEach(function (e) {
                        e.setAttribute("data-parent", c);
                      })),
                  c++;
              }
              (e = Math.floor(
                o.getBoundingClientRect().top + document.body.scrollTop
              )) !== n && (t++, (n = e)),
                o.setAttribute("data-row", t);
            }),
            document.querySelector(".rc105w2"))
          )
            for (
              var i = document
                  .querySelector(".rc105w2")
                  .getAttribute("data-row"),
                u = document.querySelectorAll(".rc105w2").length,
                a = document
                  .querySelectorAll(".rc105w2")
                  [u - 1].getAttribute("data-row"),
                d =
                  document.querySelectorAll('[data-row="' + i + '"]').length -
                  document.querySelectorAll('[data-row="' + a + '"]').length,
                s = 0;
              s < d;
              s++
            ) {
              var f = document.createElement("div");
              (f.innerHTML = '<div class="rc105w2 extra"></div>'.trim()),
                document.querySelector(".rc105w1").appendChild(f.firstChild);
            }
          return !1;
        }
        function g(e) {
          e.forEach(function (e) {
            e.classList.contains(".current") ||
              e.querySelectorAll("a").forEach(function (e) {
                e.setAttribute("aria-hidden", "true"),
                  e.setAttribute("tabindex", -1);
              });
          });
        }
        n.forEach(function (e) {
          var t = e,
            r = t.closest(".rc105w2").querySelectorAll(".rc105w4");
          (t.textContent = t.textContent.replace(/(#|\d+)/, r.length + "")),
            (t.style.visibility = "visible");
        }),
          b(),
          g(c),
          document.querySelectorAll(".rc105w2-drawer").forEach(function (e, t) {
            var r,
              n,
              c,
              o,
              l,
              i,
              u =
                (null === (r = e.querySelector(".rc105w3 h3")) ||
                void 0 === r ||
                null === (n = r.textContent) ||
                void 0 === n ||
                null === (c = n.toLowerCase()) ||
                void 0 === c
                  ? void 0
                  : c.split(" ").join("")) +
                "_" +
                t;
            if (
              (null === (o = e.querySelector(".rc105w3")) ||
                void 0 === o ||
                o.setAttribute("role", "region"),
              null === (l = e.querySelector(".rc105w3")) ||
                void 0 === l ||
                l.setAttribute("aria-labelledby", u),
              null === (i = e.querySelector(".rc105w3 h3")) ||
                void 0 === i ||
                i.setAttribute("id", u),
              e.querySelector(".rc105cta"))
            ) {
              var a = e.querySelector(".rc105cta a");
              a.setAttribute("id", "learn_more_" + t),
                a.setAttribute(
                  "aria-labelledby",
                  a.getAttribute("id") + " " + u
                );
            }
          }),
          document
            .querySelectorAll(".rc105w2-drawer > a")
            .forEach(function (e) {
              e.getAttribute("role") || e.setAttribute("role", "button");
            }),
          document
            .querySelectorAll(".rc105w2-drawer > a")
            .forEach(function (e) {
              e.getAttribute("aria-expanded") ||
                (e.setAttribute("aria-expanded", !1),
                e.getAttribute("data-lbl") &&
                  e.setAttribute(
                    "data-lbl",
                    e.getAttribute("data-lbl").replace(":close", "")
                  ));
            }),
          c.forEach(function (e) {
            e.appendChild(
              i('<button class="rc105exit" aria-hidden="true"></button>')
            ),
              e.getAttribute("tabindex") || e.setAttribute("tabindex", "-1");
          }),
          u(t, "click", function (e) {
            for (var t = e.target; t && t !== this; t = t.parentNode)
              if (t.matches(".rc105w2-drawer > a")) {
                a.call(t, e);
                break;
              }
          }),
          u(t, "keypress", function (e) {
            for (var t = e.target; t && t !== this; t = t.parentNode)
              if (t.matches(".rc105w2-drawer > a")) {
                a.call(t, e);
                break;
              }
          }),
          u(t, "click", function (e) {
            for (var t = e.target; t && t !== this; t = t.parentNode)
              if (t.matches(".rc105w3 .icn-close")) {
                d.call(t, e);
                break;
              }
          }),
          u(t, "keypress", function (e) {
            for (var t = e.target; t && t !== this; t = t.parentNode)
              if (t.matches(".rc105w3 .icn-close")) {
                s.call(t, e);
                break;
              }
          }),
          (function (e, t, r) {
            for (var n = 0, c = e.length; n < c; n++)
              e[n].addEventListener(t, r, !0);
          })(t, "focus", function (e) {
            for (var t = e.target; t && t !== this; t = t.parentNode)
              if (t.matches(".rc105exit")) {
                f.call(t, e);
                break;
              }
          }),
          document.querySelectorAll(".rc105").forEach(function (e) {
            e.removeEventListener("keydown", w);
          }),
          document.querySelectorAll(".rc105").forEach(function (e) {
            e.addEventListener("keydown", w);
          }),
          window.removeEventListener("resize", m),
          window.addEventListener("resize", m),
          window.removeEventListener("orientationchange", y),
          window.addEventListener("orientationchange", y),
          document.addEventListener("keydown", function (e) {
            e.shiftKey &&
              9 == e.keyCode &&
              document.activeElement.classList.contains("icn-close") &&
              (v(document.querySelectorAll(".rc105w3.open")),
              setTimeout(function () {
                document.querySelector(".rc105w2-drawer .current").focus();
              }, 0));
          });
      }
      var i = r(5893);
      var u = function (e) {
        var t = e.html;
        return (
          t ||
            o.logger.error(
              "Failed to receive rc105 props from server",
              "PN_LONGFORM_V2"
            ),
          (0, n.useEffect)(function () {
            l();
          }, []),
          (0, i.jsx)(i.Fragment, { children: t ? (0, c.ZP)(t) : null })
        );
      };
    },
  },
]);
