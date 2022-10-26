(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [654],
  {
    7913: function (e, t, n) {
      "use strict";
      var r = n(5696);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o,
        l = (o = n(7294)) && o.__esModule ? o : { default: o },
        a = n(2199),
        c = n(1587),
        i = n(7215);
      function u(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var s = {};
      function d(e, t, n, r) {
        if (e && a.isLocalURL(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0;
          });
          var o =
            r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
          s[t + "%" + n + (o ? "%" + o : "")] = !0;
        }
      }
      var f = l.default.forwardRef(function (e, t) {
        var n,
          o = e.legacyBehavior,
          f = void 0 === o ? !0 !== Boolean(!1) : o,
          v = e.href,
          h = e.as,
          p = e.children,
          m = e.prefetch,
          g = e.passHref,
          b = e.replace,
          y = e.shallow,
          _ = e.scroll,
          j = e.locale,
          x = e.onClick,
          w = e.onMouseEnter,
          k = u(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
          ]);
        (n = p),
          f &&
            "string" === typeof n &&
            (n = l.default.createElement("a", null, n));
        var E,
          O = !1 !== m,
          L = c.useRouter(),
          N = l.default.useMemo(
            function () {
              var e = a.resolveHref(L, v, !0),
                t = r(e, 2),
                n = t[0],
                o = t[1];
              return { href: n, as: h ? a.resolveHref(L, h) : o || n };
            },
            [L, v, h]
          ),
          S = N.href,
          C = N.as,
          M = l.default.useRef(S),
          D = l.default.useRef(C);
        f && (E = l.default.Children.only(n));
        var P = f ? E && "object" === typeof E && E.ref : t,
          T = i.useIntersection({ rootMargin: "200px" }),
          R = r(T, 3),
          I = R[0],
          U = R[1],
          H = R[2],
          K = l.default.useCallback(
            function (e) {
              (D.current === C && M.current === S) ||
                (H(), (D.current = C), (M.current = S)),
                I(e),
                P &&
                  ("function" === typeof P
                    ? P(e)
                    : "object" === typeof P && (P.current = e));
            },
            [C, P, S, H, I]
          );
        l.default.useEffect(
          function () {
            var e = U && O && a.isLocalURL(S),
              t = "undefined" !== typeof j ? j : L && L.locale,
              n = s[S + "%" + C + (t ? "%" + t : "")];
            e && !n && d(L, S, C, { locale: t });
          },
          [C, S, U, j, O, L]
        );
        var W = {
          ref: K,
          onClick: function (e) {
            f || "function" !== typeof x || x(e),
              f &&
                E.props &&
                "function" === typeof E.props.onClick &&
                E.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, o, l, c, i) {
                  ("A" !== e.currentTarget.nodeName.toUpperCase() ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      a.isLocalURL(n))) &&
                    (e.preventDefault(),
                    t[o ? "replace" : "push"](n, r, {
                      shallow: l,
                      locale: i,
                      scroll: c,
                    }));
                })(e, L, S, C, b, y, _, j);
          },
          onMouseEnter: function (e) {
            f || "function" !== typeof w || w(e),
              f &&
                E.props &&
                "function" === typeof E.props.onMouseEnter &&
                E.props.onMouseEnter(e),
              a.isLocalURL(S) && d(L, S, C, { priority: !0 });
          },
        };
        if (!f || g || ("a" === E.type && !("href" in E.props))) {
          var Z = "undefined" !== typeof j ? j : L && L.locale,
            A =
              L &&
              L.isLocaleDomain &&
              a.getDomainLocale(C, Z, L && L.locales, L && L.domainLocales);
          W.href = A || a.addBasePath(a.addLocale(C, Z, L && L.defaultLocale));
        }
        return f
          ? l.default.cloneElement(E, W)
          : l.default.createElement("a", Object.assign({}, k, W), n);
      });
      (t.default = f),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          (Object.assign(t.default, t), (e.exports = t.default));
    },
    7215: function (e, t, n) {
      "use strict";
      var r = n(5696);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            n = e.rootMargin,
            u = e.disabled || !a,
            s = o.useRef(),
            d = o.useState(!1),
            f = r(d, 2),
            v = f[0],
            h = f[1],
            p = o.useState(t ? t.current : null),
            m = r(p, 2),
            g = m[0],
            b = m[1],
            y = o.useCallback(
              function (e) {
                s.current && (s.current(), (s.current = void 0)),
                  u ||
                    v ||
                    (e &&
                      e.tagName &&
                      (s.current = (function (e, t, n) {
                        var r = (function (e) {
                            var t,
                              n = {
                                root: e.root || null,
                                margin: e.rootMargin || "",
                              },
                              r = i.find(function (e) {
                                return (
                                  e.root === n.root && e.margin === n.margin
                                );
                              });
                            r ? (t = c.get(r)) : ((t = c.get(n)), i.push(n));
                            if (t) return t;
                            var o = new Map(),
                              l = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = o.get(e.target),
                                    n =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && n && t(n);
                                });
                              }, e);
                            return (
                              c.set(
                                n,
                                (t = { id: n, observer: l, elements: o })
                              ),
                              t
                            );
                          })(n),
                          o = r.id,
                          l = r.observer,
                          a = r.elements;
                        return (
                          a.set(e, t),
                          l.observe(e),
                          function () {
                            if ((a.delete(e), l.unobserve(e), 0 === a.size)) {
                              l.disconnect(), c.delete(o);
                              var t = i.findIndex(function (e) {
                                return (
                                  e.root === o.root && e.margin === o.margin
                                );
                              });
                              t > -1 && i.splice(t, 1);
                            }
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && h(e);
                        },
                        { root: g, rootMargin: n }
                      )));
              },
              [u, g, n, v]
            ),
            _ = o.useCallback(function () {
              h(!1);
            }, []);
          return (
            o.useEffect(
              function () {
                if (!a && !v) {
                  var e = l.requestIdleCallback(function () {
                    return h(!0);
                  });
                  return function () {
                    return l.cancelIdleCallback(e);
                  };
                }
              },
              [v]
            ),
            o.useEffect(
              function () {
                t && b(t.current);
              },
              [t]
            ),
            [y, v, _]
          );
        });
      var o = n(7294),
        l = n(8065),
        a = "undefined" !== typeof IntersectionObserver;
      var c = new Map(),
        i = [];
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        (Object.assign(t.default, t), (e.exports = t.default));
    },
    3654: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var r = n(6835),
        o = n(7294),
        l = n(9499),
        a = n(4730),
        c = n(1664),
        i = n.n(c),
        u = n(5250),
        s = n(5893),
        d = ["children", "href"];
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
                (0, l.Z)(e, t, n[t]);
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
      var h = function (e) {
          var t = e.children,
            n = e.href,
            r = (0, a.Z)(e, d),
            l = (0, o.useState)(void 0),
            c = l[0],
            f = l[1],
            h = (0, o.useState)(void 0),
            p = h[0],
            m = h[1],
            g = (0, o.useState)(void 0),
            b = g[0],
            y = g[1],
            _ = (0, o.useState)(void 0),
            j = _[0],
            x = _[1],
            w = (0, o.useState)(n),
            k = w[0],
            E = w[1];
          (0, o.useEffect)(function () {
            var e,
              t =
                null === (e = u.a.getUrlVars()) || void 0 === e
                  ? void 0
                  : e.source,
              n = u.a.getUrlVars().gclid,
              r = u.a.getUrlVars().gclsrc,
              o = u.a.getUrlVars().tealium;
            void 0 != t && f(t), n && m(n), r && y(r), o && x(o);
          }, []);
          var O = (0, o.useCallback)(
            function (e) {
              var t = e;
              return (
                "" != c && c && (t = u.a.getUpdatedLink(c, e)),
                (p || b) && (t = u.a.getGclidUpdatedLink(t, p, b, j)),
                t
              );
            },
            [b, p, c, j]
          );
          return (
            (0, o.useEffect)(
              function () {
                var e = n;
                if ("object" == typeof e) {
                  var t = e,
                    r = t.pathname,
                    o = t.query;
                  if (o && "object" === typeof o) {
                    "/" != r[r.length - 1] && (r += "/");
                    for (
                      var l = Object.keys(o || {}), a = 0;
                      a < l.length > 0;
                      a++
                    ) {
                      var c = l[a],
                        i = o[l[a]];
                      r += ""
                        .concat(0 == a ? "?" : "&")
                        .concat(c, "=")
                        .concat(i);
                    }
                  }
                  e = O(r);
                } else e = O(e);
                E(e);
              },
              [c, p, b, j, n, O]
            ),
            (0, s.jsx)(
              i(),
              v(
                v({ href: k }, r),
                {},
                {
                  children: (function (e) {
                    return o.isValidElement(e)
                      ? o.cloneElement(e, { "data-client-link": !0 })
                      : e;
                  })(t),
                }
              )
            )
          );
        },
        p = n(5697),
        m = n.n(p),
        g = n(2385),
        b = n(6383),
        y = n(5390),
        _ = n(3626),
        j = n(1163),
        x = function (e) {
          var t = e.link,
            n = e.tier1,
            r = e.story,
            o = e.lblPrefix,
            l = void 0 === o ? "" : o,
            a = e.children,
            c = e.isExternalLink,
            i =
              (null === r || void 0 === r ? void 0 : r.masterSlug) ||
              (null === r || void 0 === r ? void 0 : r.slug),
            u = (0, j.useRouter)(),
            d = u.locale,
            f = u.defaultLocale,
            v = function (e) {
              var t = /^(.*?)-tier1/i.exec(e);
              return t && t[1] ? t[1] : null;
            },
            p = function (e) {
              var t = v(e);
              return t
                ? "".concat(_.uC).concat(t)
                : ""
                    .concat("https://www.oracle.com")
                    .concat("/product-navigator");
            },
            m = function (e) {
              var t = v(e);
              return t
                ? t.replace(/\/$/, "").split("/").splice(-1).pop()
                : null;
            },
            g = r || {},
            b = g.type,
            y = g.fields;
          return (function () {
            if ("SH-PublicStory" === b) {
              if (n)
                return (0, s.jsx)("a", {
                  href: p(i),
                  "data-lbl": ""
                    .concat(l)
                    .concat(r.fields.data_label ? r.fields.data_label : m(i)),
                  children: a,
                });
              if (c) {
                var e = (function (e) {
                  if ("string" === typeof e) {
                    if (e.startsWith("http")) return e;
                    if (e.startsWith("/"))
                      return f == d ? e + "/" : "/".concat(d).concat(e, "/");
                  }
                })(t);
                return (0, s.jsx)("a", {
                  href: e,
                  "data-lbl": ""
                    .concat(l)
                    .concat(r.fields.data_label ? r.fields.data_label : i),
                  children: a,
                });
              }
              return (0, s.jsx)(h, {
                href: t,
                children: (0, s.jsx)("a", {
                  "data-lbl": ""
                    .concat(l)
                    .concat(r.fields.data_label ? r.fields.data_label : i),
                  children: a,
                }),
              });
            }
            if ("SH-NonStory" === b) {
              var o = (y || {}).cta_buttons,
                u = (null === o || void 0 === o ? void 0 : o[0]) || {},
                v = u.Link,
                g = u.NewTab,
                _ = u.DataLbl,
                j = u.Text;
              return v
                ? (0, s.jsxs)("a", {
                    href: v,
                    "data-lbl": "".concat(l).concat(_),
                    target: g ? "_blank" : "_self",
                    rel: "noreferrer",
                    children: [
                      j,
                      g &&
                        (0, s.jsx)("span", {
                          className: "sr-only",
                          children: ", opens in new tab",
                        }),
                    ],
                  })
                : null;
            }
            return null;
          })();
        },
        w = function (e, t) {
          var n = function (n) {
            e && e.current && !e.current.contains(n.target) && t();
          };
          (0, o.useEffect)(
            function () {
              return (
                document.addEventListener("click", n),
                function () {
                  document.removeEventListener("click", n);
                }
              );
            },
            [e, t]
          );
        },
        k = function (e, t, n, r) {
          var l =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : null,
            a = function () {
              var e = n.current.querySelector(".rc64w3.active a");
              e && e.focus();
            },
            c = function () {
              setTimeout(function () {
                if (n.current) {
                  var e = n.current.querySelector(".rc64w3.active"),
                    t = parseInt(
                      window
                        .getComputedStyle(n.current)
                        .getPropertyValue("min-height"),
                      10
                    );
                  e && e.offsetHeight > t
                    ? (n.current.style.height = "".concat(e.offsetHeight, "px"))
                    : n.current.offsetHeight > t &&
                      (n.current.style.height = "auto");
                }
              }, 0);
            },
            i = (0, o.useState)(0),
            u = i[0],
            s = i[1],
            d = (0, o.useState)(r.length),
            f = d[0],
            v = d[1],
            h = (0, o.useState)(!1),
            p = h[0],
            m = h[1],
            g = (0, o.useState)(!1),
            b = g[0],
            y = g[1];
          (0, o.useEffect)(function () {
            m(!0);
          }, []),
            (0, o.useEffect)(
              function () {
                if (p && r.length > 0) {
                  var n,
                    o,
                    a =
                      null !==
                        (n =
                          null === (o = t.current) || void 0 === o
                            ? void 0
                            : o.offsetWidth) && void 0 !== n
                        ? n
                        : 0,
                    i = 0,
                    u = e.current.offsetWidth,
                    s = Array.from(e.current.children);
                  s.some(function (e, t) {
                    var n = e.offsetWidth;
                    return (
                      !(u >= a + n && (!l || t < l)) || ((a += n), (i += 1), !1)
                    );
                  }),
                    v(i),
                    i === s.length && y(!1),
                    c(),
                    m(!1);
                }
              },
              [p]
            ),
            (0, o.useEffect)(function () {
              function e() {
                v(r.length), m(!0);
              }
              return (
                window.addEventListener("resize", e),
                function () {
                  window.removeEventListener("resize", e);
                }
              );
            }, []),
            w(t, function () {
              y(!1);
            }),
            (0, o.useEffect)(function () {
              function e(e) {
                "Escape" === e.key && (e.preventDefault(), y(!1));
              }
              return (
                window.addEventListener("keydown", e),
                function () {
                  window.removeEventListener("keydown", e);
                }
              );
            }, []);
          var _ = function (e) {
              var t = e.currentTarget;
              t.touched && "touchstart" !== e.type
                ? (t.touched = void 0)
                : (y(!b), "touchstart" === e.type && (t.touched = !0));
            },
            j = function (e) {
              var t = e.nativeEvent.keyCode;
              (13 !== t && 32 !== t) || (e.preventDefault(), y(!b)),
                9 === t && e.shiftKey && y(!1),
                40 === t && a();
            },
            x = function (e, t) {
              var n = e.currentTarget;
              n.touched && "touchstart" !== e.type
                ? (n.touched = void 0)
                : (s(t),
                  y(!1),
                  "touchstart" === e.type
                    ? (setTimeout(function () {
                        return n.blur();
                      }, 200),
                      (n.touched = !0))
                    : n.blur(),
                  c());
            },
            k = function (e, t) {
              e.currentTarget.classList.add("o-hf"), e.button && x(e, t);
            },
            E = function (e, t) {
              var n = e.nativeEvent.keyCode;
              (13 !== n && 32 !== n) || (e.preventDefault(), s(t), y(!1), c()),
                40 === n && (a(), y(!1)),
                9 === n && !e.shiftKey && b && t === r.length - 1 && y(!1);
            };
          return [b, f, u, x, E, k, _, j];
        };
      var E = function (e) {
        var t = e.data,
          n = e.title,
          l = e.viewAllCTA,
          a = void 0 === l ? null : l,
          c = e.ctaButton,
          i = void 0 === c ? "Read #customer's story" : c,
          u = e.eyebrow,
          d = void 0 === u ? null : u,
          f = e.isExternalLink,
          v = (0, o.useContext)(y.Z).oceIntegrator,
          p = (0, o.useRef)(null),
          m = (0, o.useRef)(null),
          _ = (0, o.useRef)(null),
          j = k(p, m, _, t),
          w = (0, r.Z)(j, 8),
          E = w[0],
          O = w[1],
          L = w[2],
          N = w[3],
          S = w[4],
          C = w[5],
          M = w[6],
          D = w[7];
        return (0, s.jsx)(s.Fragment, {
          children:
            t.length > 0
              ? (0, s.jsxs)("section", {
                  className: "rc64 rc64v1 cpad-top",
                  "data-trackas": "rc64:customers",
                  "data-ocomid": "rc64",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "rc64w1 cwidth jsloaded ".concat(
                        E ? "show-secondary" : ""
                      ),
                      children: [
                        (0, s.jsxs)("header", {
                          className: "rw-ctitle",
                          children: [
                            (0, s.jsx)("h2", { children: n }),
                            a &&
                              (f
                                ? (0, s.jsx)("div", {
                                    children: (0, s.jsx)("a", {
                                      href: a.link,
                                      "data-lbl": a.dataLabel,
                                      children: a.text,
                                    }),
                                  })
                                : (0, s.jsx)("div", {
                                    children: (0, s.jsx)(h, {
                                      href: a.link,
                                      children: (0, s.jsx)("a", {
                                        "data-lbl": a.dataLabel,
                                        children: a.text,
                                      }),
                                    }),
                                  })),
                          ],
                        }),
                        (0, s.jsxs)("ul", {
                          className: "rc64nav",
                          ref: p,
                          children: [
                            t.map(function (e, t) {
                              var n,
                                r,
                                o,
                                l,
                                a,
                                c,
                                i,
                                u,
                                d,
                                f,
                                v = e.fields;
                              return (0, s.jsx)(
                                "li",
                                {
                                  className: "rc64-clr ".concat(
                                    t >= O ? "hidden" : ""
                                  ),
                                  "aria-hidden": t >= O,
                                  children: (0, s.jsxs)("a", {
                                    role: "button",
                                    "data-lbl": "ribbon:".concat(
                                      v.customer_name
                                    ),
                                    "aria-current": t === L,
                                    href: t >= O ? void 0 : "",
                                    className: t === L ? "active" : "",
                                    onClick: function (e) {
                                      e.preventDefault(), N(e, t);
                                    },
                                    onTouchStart: function (e) {
                                      N(e, t);
                                    },
                                    onKeyDown: function (e) {
                                      S(e, t);
                                    },
                                    onMouseDown: function (e) {
                                      C(e, t);
                                    },
                                    style:
                                      v.customer_logo_black || v.color_logo
                                        ? {}
                                        : { width: "auto" },
                                    children: [
                                      (0, s.jsx)("span", {
                                        children: v.customer_name,
                                      }),
                                      v.customer_logo_black || v.color_logo
                                        ? (0, s.jsxs)(s.Fragment, {
                                            children: [
                                              (0, s.jsx)("div", {
                                                className:
                                                  "rw-logo rw-logo-centered",
                                                children: (0, s.jsx)(g.Z, {
                                                  imageId:
                                                    (null === v ||
                                                    void 0 === v ||
                                                    null ===
                                                      (n =
                                                        v.customer_logo_black) ||
                                                    void 0 === n
                                                      ? void 0
                                                      : n.id) ||
                                                    (null === v ||
                                                    void 0 === v ||
                                                    null ===
                                                      (r = v.color_logo) ||
                                                    void 0 === r
                                                      ? void 0
                                                      : r.id),
                                                  imageName:
                                                    null !== v &&
                                                    void 0 !== v &&
                                                    null !==
                                                      (o =
                                                        v.customer_logo_black) &&
                                                    void 0 !== o &&
                                                    o.id
                                                      ? null === v ||
                                                        void 0 === v ||
                                                        null ===
                                                          (l =
                                                            v.customer_logo_black) ||
                                                        void 0 === l
                                                        ? void 0
                                                        : l.name
                                                      : null === v ||
                                                        void 0 === v ||
                                                        null ===
                                                          (a = v.color_logo) ||
                                                        void 0 === a
                                                      ? void 0
                                                      : a.name,
                                                  alt: "".concat(
                                                    (null === v || void 0 === v
                                                      ? void 0
                                                      : v.customer_logo_black_alt_text) ||
                                                      (null === v ||
                                                      void 0 === v
                                                        ? void 0
                                                        : v.color_logo_alt_text) ||
                                                      v.customer_name
                                                  ),
                                                  classes: [
                                                    "srcloaded",
                                                    "imgW",
                                                  ],
                                                }),
                                              }),
                                              (0, s.jsx)("div", {
                                                className:
                                                  "rw-logo rw-logo-centered",
                                                children: (0, s.jsx)(g.Z, {
                                                  imageId:
                                                    (null === v ||
                                                    void 0 === v ||
                                                    null ===
                                                      (c = v.color_logo) ||
                                                    void 0 === c
                                                      ? void 0
                                                      : c.id) ||
                                                    (null ===
                                                      (i =
                                                        v.customer_logo_black) ||
                                                    void 0 === i
                                                      ? void 0
                                                      : i.id),
                                                  imageName:
                                                    null !== v &&
                                                    void 0 !== v &&
                                                    null !==
                                                      (u = v.color_logo) &&
                                                    void 0 !== u &&
                                                    u.id
                                                      ? null === v ||
                                                        void 0 === v ||
                                                        null ===
                                                          (d = v.color_logo) ||
                                                        void 0 === d
                                                        ? void 0
                                                        : d.name
                                                      : null ===
                                                          (f =
                                                            v.customer_logo_black) ||
                                                        void 0 === f
                                                      ? void 0
                                                      : f.name,
                                                  alt: "".concat(
                                                    (null === v || void 0 === v
                                                      ? void 0
                                                      : v.color_logo_alt_text) ||
                                                      (null === v ||
                                                      void 0 === v
                                                        ? void 0
                                                        : v.customer_logo_black_alt_text) ||
                                                      v.customer_name
                                                  ),
                                                  classes: [
                                                    "srcloaded",
                                                    "imgW",
                                                  ],
                                                }),
                                              }),
                                            ],
                                          })
                                        : (0, s.jsx)(s.Fragment, {
                                            children: v.customer_name,
                                          }),
                                    ],
                                  }),
                                },
                                v.customer_name
                              );
                            }),
                            O < t.length &&
                              (0, s.jsxs)("li", {
                                className: "rc64more",
                                "aria-hidden": "false",
                                ref: m,
                                children: [
                                  (0, s.jsx)("a", {
                                    tabIndex: 0,
                                    className:
                                      "rc64morelink icn-overflow-horiz",
                                    "aria-haspopup": "true",
                                    "aria-expanded": E,
                                    role: "button",
                                    "aria-label": "More stories",
                                    onClick: M,
                                    onTouchStart: M,
                                    onKeyDown: D,
                                  }),
                                  (0, s.jsx)("ul", {
                                    className: "rc64secondary",
                                    children: t.map(function (e, t) {
                                      var n = e.fields;
                                      return (0, s.jsx)(
                                        "li",
                                        {
                                          className: "rc64-clr ".concat(
                                            t < O ? "hidden" : ""
                                          ),
                                          "aria-hidden": t < O,
                                          children: (0, s.jsx)("a", {
                                            "data-lbl": "ribbon:".concat(
                                              n.customer_name
                                            ),
                                            href: t < O ? void 0 : "",
                                            role: "button",
                                            "aria-current": t === L,
                                            className: t === L ? "active" : "",
                                            onClick: function (e) {
                                              e.preventDefault(), N(e, t);
                                            },
                                            onTouchStart: function (e) {
                                              N(e, t);
                                            },
                                            onKeyDown: function (e) {
                                              S(e, t);
                                            },
                                            onMouseDown: function (e) {
                                              C(e, t);
                                            },
                                            children: (0, s.jsx)("span", {
                                              children: n.customer_name,
                                            }),
                                          }),
                                        },
                                        n.customer_name
                                      );
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "rc64w2",
                      ref: _,
                      children: t.map(function (e, t) {
                        var n, r, o, l, a, c, u;
                        return (0, s.jsx)(
                          b.Z,
                          {
                            className: "rc64w3 bgimg ".concat(
                              t === L ? "active" : ""
                            ),
                            src:
                              ((u =
                                null === e ||
                                void 0 === e ||
                                null === (r = e.fields) ||
                                void 0 === r
                                  ? void 0
                                  : r.story_hero_image),
                              null !== u && void 0 !== u && u.id
                                ? ""
                                    .concat(v, "/assets/")
                                    .concat(u.id, "/native/")
                                    .concat(
                                      null === u || void 0 === u
                                        ? void 0
                                        : u.name
                                    )
                                : ""),
                            children: (0, s.jsx)("div", {
                              className: "rc64w4 cwidth",
                              children: (0, s.jsxs)("div", {
                                className: "rc64w5 rw-neutral-00bg",
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "eyebrow",
                                    children:
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.fields[d],
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "rc64sub",
                                    dangerouslySetInnerHTML: {
                                      __html:
                                        (null === e ||
                                        void 0 === e ||
                                        null === (o = e.fields) ||
                                        void 0 === o
                                          ? void 0
                                          : o.story_summary) ||
                                        (null === e ||
                                        void 0 === e ||
                                        null === (l = e.feilds) ||
                                        void 0 === l
                                          ? void 0
                                          : l.story_headline),
                                    },
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "obttns",
                                    children: (0, s.jsx)("div", {
                                      className: "obttn",
                                      children: (0, s.jsx)(x, {
                                        isExternalLink: f,
                                        tier1: !(
                                          null === e ||
                                          void 0 === e ||
                                          null === (a = e.fields) ||
                                          void 0 === a ||
                                          !a.Tier1_OCEStory
                                        ),
                                        story: e,
                                        link: "/customers/".concat(
                                          (null === e || void 0 === e
                                            ? void 0
                                            : e.masterSlug) ||
                                            (null === e || void 0 === e
                                              ? void 0
                                              : e.slug)
                                        ),
                                        lblPrefix: "cta-",
                                        children: i
                                          .replace(
                                            "#customer",
                                            null === e ||
                                              void 0 === e ||
                                              null === (c = e.fields) ||
                                              void 0 === c
                                              ? void 0
                                              : c.customer_name
                                          )
                                          .replace("s's ", "s' "),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          },
                          null === e ||
                            void 0 === e ||
                            null === (n = e.fields) ||
                            void 0 === n
                            ? void 0
                            : n.customer_name
                        );
                      }),
                    }),
                  ],
                })
              : null,
        });
      };
      m().propTypes = {
        data: m().arrayOf(
          m().shape({
            fields: m().object,
            type: m().string,
            slug: m().string,
            masterSlug: m().string,
          })
        ),
        title: m().string,
        viewAllCTA: m().object,
        ctaButton: m().string,
      };
    },
    1664: function (e, t, n) {
      e.exports = n(7913);
    },
  },
]);
