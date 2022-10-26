var Feedback;
(function (n) {
  var t;
  (function (t) {
    function u(t, r, u, f, e, o) {
      t = typeof t === i ? !1 : t;
      t && scrollTo(0, 0);
      u = typeof u === i ? !0 : u;
      n.PackageLoad.Load(r, u, f, e, o);
    }
    function o(n, t) {
      for (var r = 0, i = null; n && n.getAttribute && (!(t >= 1) || r < t); ) {
        if (((i = n.getAttribute("data-fbhlsel")), i != null)) break;
        r++;
        n = n.parentNode;
      }
      return i;
    }
    function a(t, a, v, y, p, w, b, k, d) {
      function it(t) {
        var r = null,
          i;
        return (
          t &&
            ((i = new c()),
            n.fel("ajax.feedback.collectsettings", "gsf", i),
            (r = i.findSettings(t))),
          r
        );
      }
      var g, nt, tt;
      (typeof sj_log != "undefined" &&
        sj_log(
          "CI.FeedbackInit",
          "Feedback",
          !a || a.length === 0 ? "invalid" : a
        ),
      (g = _ge(a)),
      g && g.classList && g.classList.contains(s)) ||
        ((p = typeof p === i ? !1 : p),
        (nt = o(g, 3)),
        e !== "sb_feedback" &&
          ((e = a),
          typeof sj_evt !== i &&
            (r && sj_evt.unbind(f, r),
            (r = function (n) {
              var f = null,
                i = null,
                e = null,
                s,
                r,
                h;
              n &&
                n.length > 1 &&
                ((r = n[1]),
                r.tagName !== undefined && r.nodeType !== undefined
                  ? ((f = r), (i = it(f)))
                  : (i = r),
                (s = (i && i.elementToHighlight) || f),
                (e = o(s)));
              h = (i && i.linkId) || a;
              u(y, t, v, h, e, i);
            }),
            sj_evt.bind(f, r, 1)),
          typeof SearchAppWrapper !== i &&
            SearchAppWrapper.CortanaApp &&
            SearchAppWrapper.CortanaApp.addEventListener &&
            SearchAppWrapper.CortanaApp.addEventListener(f, function (n) {
              (typeof n !== i && n !== null && (n.isHandled = !0), a === e) &&
                _ge("fbpgdg") === null &&
                u(y, t, v, a);
            })),
        g !== null
          ? ((tt = function (n) {
              if (!(n instanceof KeyboardEvent) || n.keyCode === 13) {
                var r = null,
                  i = null,
                  f = null,
                  e;
                if (p && g.classList) {
                  if (g.classList.contains(h)) return !1;
                  g.classList.add(h);
                }
                d && sj_evt.fire("feedback.dialog.defaultcheckedradio", d);
                sj_pd(n);
                sj_sp(n);
                r = sj_et(n);
                i = it(r);
                e = (i && i.elementToHighlight) || r;
                f = o(e);
                u(y, t, v, a, f || nt, i || k);
              }
            }),
            sj_be(g, "click", tt),
            sj_be(g, "keydown", tt),
            g.classList && g.classList.add(s))
          : ((b = typeof b === i ? !1 : b), b && u(y, t, v, a, nt)),
        typeof sj_evt !== i && sj_evt.fire(l));
    }
    var f = "feedbackformrequested",
      l = "feedbackInitialized",
      r,
      e = "",
      s = "feedback-binded",
      h = "clicked",
      i = "undefined",
      c;
    t.InitializeFeedback = a;
    n.le = function (n, t) {
      SharedLogHelper &&
        SharedLogHelper.LogError &&
        SharedLogHelper.LogError("Feedback: ".concat(n), null, t);
    };
    n.leh = function (t, i, r) {
      n.le("Feedback: ".concat(t, " handler failed in ").concat(i), r);
    };
    n.fel = function (t, i) {
      for (var u = [], r = 2; r < arguments.length; r++)
        u[r - 2] = arguments[r];
      try {
        u.unshift(t);
        sj_evt.fire.apply(null, u);
      } catch (f) {
        n.leh(t, i, f);
        throw f;
      }
    };
    c = (function () {
      function n() {
        this.settingsList = [];
      }
      return (
        (n.prototype.setStartSettings = function (n, t) {
          n && t && this.settingsList.push({ c: n, s: t });
        }),
        (n.prototype.findSettings = function (n) {
          var t = null;
          return (
            this.settingsList.forEach(function (i) {
              sj_we(n, i.c) && (t = i.s);
            }),
            t
          );
        }),
        n
      );
    })();
    sj_evt.fire("fdbkbtstrp_init");
  })((t = n.Bootstrap || (n.Bootstrap = {})));
})(Feedback || (Feedback = {})),
  (function (n) {
    var t;
    (function (t) {
      "use strict";
      function f(f, e, o, s) {
        var d = _G.IG,
          g = typeof _G.V === i ? _G.P : _G.V,
          h,
          y,
          c,
          a,
          w,
          v,
          k;
        n.fel("onFeedbackStarting", "lp");
        t.staticConfig = { linkId: e, activeElement: _d.activeElement };
        var l = "?ig=" + d + "&p=" + g,
          b = n.RouteProvider.Provide(f),
          p = encodeURIComponent;
        if (s) {
          if (
            (s.formConfig &&
              ((b = f === "page" ? "sdk/form" : f),
              (l += "&formconfig=" + s.formConfig)),
            s.service && (t.staticConfig.service = s.service),
            s.scenario && (t.staticConfig.scenario = s.scenario),
            (c = s.context),
            c)
          )
            for (a in c)
              c.hasOwnProperty(a) && (l += "&" + p(a) + "=" + p(c[a]));
          s.pos && ((t.staticConfig.pos = s.pos), (l += "&pos=1"));
        }
        for (
          h = "/feedback/" + b + l,
            typeof fbsrc !== i && (h += "&src=" + p(fbsrc)),
            typeof fbpkgiid !== i &&
              fbpkgiid[f] &&
              (h += "&iid=" + fbpkgiid[f]),
            w = [
              "addloginsource",
              "client",
              "corpnet",
              "features",
              "hose",
              "hoseassistant",
              "logjserror",
              "msamock",
              "setvar",
              "testhooks",
              "theme",
              "uncrunched",
              "ptn",
            ],
            v = 0;
          v < w.length;
          v++
        )
          (y = location.href.match(
            new RegExp("[?&]" + w[v] + "=[^?&#]*", "i")
          )) &&
            y[0] &&
            (h += "&" + y[0].substring(1));
        k = typeof sj_ajaxCSP == "function" ? sj_ajaxCSP : sj_ajax;
        k(h, {
          callback: function (t, i) {
            var u, f;
            if (t && i)
              try {
                r && r.removeAttribute("clicked");
                u = s && _ge(s.feedbackContainerId);
                (
                  s === null || s === void 0
                    ? void 0
                    : s.appendFeedbackDialogAfterEvent
                )
                  ? ((f = function () {
                      i.appendTo(u || _d.body);
                      sj_evt.unbind(s.appendFeedbackDialogAfterEvent, f);
                    }),
                    sj_evt.bind(s.appendFeedbackDialogAfterEvent, f, 1))
                  : i.appendTo(u || _d.body);
                n.fel("onFeedbackShow", "lp");
                n.fel("clarity.trigger", "lp", "BingFeedback");
                n.Highlight && o && n.Highlight.HighlightElements(o);
              } catch (e) {
                n.le("Package load callback failed", e);
                throw e;
              }
          },
        });
        u[f] = !0;
      }
      var u = {},
        i = "undefined",
        r;
      t.staticConfig = {};
      n.PackageLoad.GetHTML = function () {
        return _d.documentElement.outerHTML;
      };
      n.PackageLoad.Load = function (n, t, e, o, s) {
        var h, c;
        t = typeof t === i ? !0 : t;
        e = typeof e === i ? "" : e;
        c = typeof s != i && s && s.feedbackContainerId;
        r = _ge(e);
        for (h in n)
          n.hasOwnProperty(h) &&
            (!t || c || typeof u[h] === i) &&
            f(h, e, o, s);
      };
    })((t = n.PackageLoad || (n.PackageLoad = {})));
  })(Feedback || (Feedback = {})),
  (function (n) {
    var t;
    (function () {
      "use strict";
      n.RouteProvider.Provide = function (n) {
        return n === "page" ? "sdk/form" : n;
      };
    })((t = n.RouteProvider || (n.RouteProvider = {})));
  })(Feedback || (Feedback = {}));
