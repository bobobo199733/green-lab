/*! For license information please see jobs_devtools_notification.063ca481b5b6da7c2e3b.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t,
    n,
    o = {
      531507: (e, t, n) => {
        function o() {
          var e = { isOpen: !1, orientation: void 0 },
            t = (e, t) => {
              window.dispatchEvent(
                new CustomEvent("devtoolschange", {
                  detail: { isOpen: e, orientation: t },
                })
              );
            },
            n = setInterval(() => {
              try {
                var o = window.outerWidth - window.innerWidth > 160,
                  r = window.outerHeight - window.innerHeight > 160,
                  i = o ? "vertical" : "horizontal";
                (r && o) ||
                !(
                  (window.Firebug &&
                    window.Firebug.chrome &&
                    window.Firebug.chrome.isInitialized) ||
                  o ||
                  r
                )
                  ? (e.isOpen && t(!1, void 0),
                    (e.isOpen = !1),
                    (e.orientation = void 0))
                  : ((e.isOpen && e.orientation === i) || t(!0, i),
                    (e.isOpen = !0),
                    (e.orientation = i));
              } catch (e) {
                clearInterval(n);
              }
            }, 500);
          return e;
        }
        n.d(t, { start: () => o });
      },
      923898: (e, t, n) => {
        (0, n(689111).init)();
        try {
          window.stManager.done(
            window.jsc("web/jobs_devtools_notification.js")
          );
        } catch (e) {}
      },
      689111: (e, t, n) => {
        n.d(t, { init: () => i });
        var o = n(922974),
          r = function () {
            (0, o.fetchVacancies)().then(o.logMessage, function () {});
          },
          i = function () {
            void 0 !== window.Promise &&
              (0, o.onDevtoolsOpen)().then(r, function () {});
          };
      },
      781448: (e, t, n) => {
        n.d(t, { requestJson: () => a });
        var o = n(570655),
          r = n(236783),
          i = n(113160),
          a = function (e, t) {
            return (0, r.request)(
              e,
              (0, o.__assign)((0, o.__assign)({}, t), { al: 1 }),
              {}
            ).then(function (e) {
              var t = (function (e) {
                var t;
                try {
                  t = new i.AjaxProtoJson().parseResponse(e);
                } catch (e) {
                  return;
                }
                return t;
              })(e.data);
              return void 0 !== t
                ? t
                : Promise.reject(new Error("Unable to parse response payload"));
            });
          };
      },
      922974: (e, t, n) => {
        n.d(t, {
          logMessage: () => i,
          fetchVacancies: () => a,
          onDevtoolsOpen: () => s,
        });
        var o = n(531507),
          r = n(781448),
          i = function (e) {
            console.log(e);
          },
          a = function () {
            var e = window.location.pathname.replace(/^\//, "");
            return (0, r.requestJson)("/al_jobs.php", {
              act: "get_by_section",
              section: e,
            }).then(function (e) {
              var t = e.code,
                n = e.payload,
                o = null == n ? void 0 : n[0];
              return 0 === t && "string" == typeof o
                ? o
                : Promise.reject(new Error("Invalid response"));
            });
          },
          s = function () {
            var e,
              t = (0, o.start)().isOpen,
              n = t
                ? Promise.resolve()
                : new Promise(function (t) {
                    e = t;
                  });
            return (
              t ||
                window.addEventListener("devtoolschange", function (t) {
                  var n;
                  (null === (n = null == t ? void 0 : t.detail) || void 0 === n
                    ? void 0
                    : n.isOpen) && e();
                }),
              n
            );
          };
      },
    },
    r = {};
  function i(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return o[e].call(n.exports, n, n.exports, i), (n.loaded = !0), n.exports;
  }
  (i.m = o),
    (e = []),
    (i.O = (t, n, o, r) => {
      if (!n) {
        var a = 1 / 0;
        for (l = 0; l < e.length; l++) {
          for (var [n, o, r] = e[l], s = !0, c = 0; c < n.length; c++)
            (!1 & r || a >= r) && Object.keys(i.O).every((e) => i.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((s = !1), r < a && (a = r));
          if (s) {
            e.splice(l--, 1);
            var d = o();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      r = r || 0;
      for (var l = e.length; l > 0 && e[l - 1][2] > r; l--) e[l] = e[l - 1];
      e[l] = [n, o, r];
    }),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (i.t = function (e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ("object" == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && "function" == typeof e.then) return e;
      }
      var r = Object.create(null);
      i.r(r);
      var a = {};
      t = t || [null, n({}), n([]), n(n)];
      for (var s = 2 & o && e; "object" == typeof s && !~t.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((t) => (a[t] = () => e[t]));
      return (a.default = () => e), i.d(r, a), r;
    }),
    (i.d = (e, t) => {
      for (var n in t)
        i.o(t, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (i.e = () => Promise.resolve()),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id
          );
        },
      }),
      e
    )),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 72269: 0 };
      i.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var o,
            r,
            [a, s, c] = n,
            d = 0;
          for (o in s) i.o(s, o) && (i.m[o] = s[o]);
          if (c) var l = c(i);
          for (t && t(n); d < a.length; d++)
            (r = a[d]), i.o(e, r) && e[r] && e[r][0](), (e[a[d]] = 0);
          return i.O(l);
        },
        n = (self.webpackChunkvk = self.webpackChunkvk || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var a = i.O(void 0, [11216, 68592], () => i(923898));
  a = i.O(a);
})();
