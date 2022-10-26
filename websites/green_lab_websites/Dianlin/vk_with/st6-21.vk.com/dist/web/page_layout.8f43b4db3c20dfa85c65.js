(() => {
  "use strict";
  var t,
    e,
    o,
    r = {
      815739: (t, e, o) => {
        function r() {}
        o.d(e, { initLeftMenuTasks: () => r });
      },
      67982: (t, e, o) => {
        o.d(e, { LeftMenu: () => s });
        var r,
          i = o(803834),
          n = o(815739);
        !(function (t) {
          (t.STATE_STICKY_TOP = "STATE_STICKY_TOP"),
            (t.STATE_FLOATING = "STATE_FLOATING");
        })(r || (r = {}));
        var s = (function () {
          function t() {
            try {
              (0, n.initLeftMenuTasks)();
            } catch (t) {}
            (this.handleUpdateRequest = this.handleUpdateRequest.bind(this)),
              (this.handleScroll = this.handleScroll.bind(this)),
              (this.menuEle = document.querySelector("#side_bar")),
              this.menuEle &&
                ((this.lastScrollTop = (0, i.scrollGetY)()),
                (this.firstScrollUp = !1),
                (this.firstScrollDown = !1),
                this.resetState());
          }
          return (
            (t.prototype.handleUpdateRequest = function (t) {
              void 0 === t && (t = !1),
                this.menuEle &&
                  (t
                    ? (this.setPositionTop(0), this.setState(r.STATE_FLOATING))
                    : this.handleScroll());
            }),
            (t.prototype.resetState = function () {
              (this.firstScrollUp = !1),
                (this.firstScrollDown = !1),
                this.setPositionTop(0),
                this.setState(
                  (0, i.scrollGetY)() > 10
                    ? r.STATE_STICKY_TOP
                    : r.STATE_FLOATING
                );
            }),
            (t.prototype.setState = function (t) {
              this.currentState !== t &&
                this.menuEle &&
                ((this.currentState = t),
                t === r.STATE_STICKY_TOP
                  ? this.menuEle.classList.add("sticky_top")
                  : t === r.STATE_FLOATING &&
                    this.menuEle.classList.remove("sticky_top"));
            }),
            (t.prototype.setPositionTop = function (t) {
              t >= 0 &&
                this.menuEle &&
                this.menuEle.style.setProperty("top", t + "px");
            }),
            (t.prototype.handleScrollDown = function (t) {
              this.menuEle &&
                (this.firstScrollDown ||
                  (this.currentState === r.STATE_STICKY_TOP &&
                    this.setPositionTop(t),
                  this.setState(r.STATE_FLOATING)),
                (this.firstScrollDown = !0),
                (this.firstScrollUp = !1));
            }),
            (t.prototype.handleScrollUp = function (t) {
              if (this.menuEle) {
                var e = this.menuEle.getBoundingClientRect();
                this.firstScrollUp &&
                  this.currentState === r.STATE_FLOATING &&
                  e.bottom < 0 &&
                  this.setPositionTop(t - this.menuEle.clientHeight),
                  this.currentState !== r.STATE_STICKY_TOP &&
                    e.top >= 0 &&
                    (this.setState(r.STATE_STICKY_TOP), this.setPositionTop(0)),
                  (this.firstScrollUp = !0),
                  (this.firstScrollDown = !1);
              }
            }),
            (t.prototype.handleScroll = function () {
              var t = (0, i.scrollGetY)();
              Boolean(this.lastScrollTop) &&
                (t > this.lastScrollTop
                  ? this.handleScrollDown(t)
                  : this.handleScrollUp(t)),
                (this.lastScrollTop = t);
            }),
            t
          );
        })();
      },
      114449: (t, e, o) => {
        var r = o(67982);
        window.initPageLayoutUI =
          window.initPageLayoutUI ||
          function () {
            window.__leftMenu = new r.LeftMenu();
          };
        try {
          window.stManager.done(window.jsc("web/page_layout.js"));
        } catch (t) {
          console.log(t.message);
        }
      },
    },
    i = {};
  function n(t) {
    var e = i[t];
    if (void 0 !== e) return e.exports;
    var o = (i[t] = { id: t, loaded: !1, exports: {} });
    return r[t].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports;
  }
  (n.m = r),
    (t = []),
    (n.O = (e, o, r, i) => {
      if (!o) {
        var s = 1 / 0;
        for (h = 0; h < t.length; h++) {
          for (var [o, r, i] = t[h], l = !0, a = 0; a < o.length; a++)
            (!1 & i || s >= i) && Object.keys(n.O).every((t) => n.O[t](o[a]))
              ? o.splice(a--, 1)
              : ((l = !1), i < s && (s = i));
          if (l) {
            t.splice(h--, 1);
            var c = r();
            void 0 !== c && (e = c);
          }
        }
        return e;
      }
      i = i || 0;
      for (var h = t.length; h > 0 && t[h - 1][2] > i; h--) t[h] = t[h - 1];
      t[h] = [o, r, i];
    }),
    (n.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return n.d(e, { a: e }), e;
    }),
    (o = Object.getPrototypeOf
      ? (t) => Object.getPrototypeOf(t)
      : (t) => t.__proto__),
    (n.t = function (t, r) {
      if ((1 & r && (t = this(t)), 8 & r)) return t;
      if ("object" == typeof t && t) {
        if (4 & r && t.__esModule) return t;
        if (16 & r && "function" == typeof t.then) return t;
      }
      var i = Object.create(null);
      n.r(i);
      var s = {};
      e = e || [null, o({}), o([]), o(o)];
      for (var l = 2 & r && t; "object" == typeof l && !~e.indexOf(l); l = o(l))
        Object.getOwnPropertyNames(l).forEach((e) => (s[e] = () => t[e]));
      return (s.default = () => t), n.d(i, s), i;
    }),
    (n.d = (t, e) => {
      for (var o in e)
        n.o(e, o) &&
          !n.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
    }),
    (n.e = () => Promise.resolve()),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.hmd = (t) => (
      (t = Object.create(t)).children || (t.children = []),
      Object.defineProperty(t, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              t.id
          );
        },
      }),
      t
    )),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (() => {
      var t = { 60582: 0 };
      n.O.j = (e) => 0 === t[e];
      var e = (e, o) => {
          var r,
            i,
            [s, l, a] = o,
            c = 0;
          for (r in l) n.o(l, r) && (n.m[r] = l[r]);
          if (a) var h = a(n);
          for (e && e(o); c < s.length; c++)
            (i = s[c]), n.o(t, i) && t[i] && t[i][0](), (t[s[c]] = 0);
          return n.O(h);
        },
        o = (self.webpackChunkvk = self.webpackChunkvk || []);
      o.forEach(e.bind(null, 0)), (o.push = e.bind(null, o.push.bind(o)));
    })();
  var s = n.O(void 0, [11216, 68592], () => n(114449));
  s = n.O(s);
})();
