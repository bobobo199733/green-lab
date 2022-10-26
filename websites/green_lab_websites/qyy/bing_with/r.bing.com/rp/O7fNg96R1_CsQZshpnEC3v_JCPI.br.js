var Feedback;
(function (n) {
  var t;
  (function () {
    "use strict";
    function u(t, i) {
      var u = t.getAttribute("id"),
        f;
      u || ((u = "genId" + n.length), t.setAttribute("id", u));
      f = new r(u, i, t.getAttribute(i));
      n.push(f);
    }
    function i(n, t, i) {
      i === null ? n.removeAttribute(t) : n.setAttribute(t, i);
    }
    function t(n, t, r, f) {
      for (var e, s = _d.querySelectorAll(r), o = 0; o < s.length; o++)
        ((e = s[o]), f && e.id && f[e.id]) || (u(e, n), i(e, n, t));
    }
    function f(n) {
      for (
        var u = _d.querySelectorAll(n), e = 1, f = {}, t, i, r = 0;
        r < u.length;
        ++r
      ) {
        if (((t = u[r]), !t.id)) {
          for (;;) if (((i = "fbpgdgelem".concat(e++)), !_ge(i))) break;
          t.id = i;
        }
        f[t.id] = t;
      }
      return f;
    }
    function e() {
      var i = "tabindex",
        r = "-1",
        n = f("#fbpgdg, #fbpgdg *");
      t(i, r, "div", n);
      t(i, r, "svg", n);
      t(i, r, "a", n);
      t(i, r, "li", n);
      t(i, r, "input", n);
      t(i, r, "select", n);
      t("aria-hidden", "true", "body :not(script):not(style)", n);
    }
    function o() {
      for (var r, t = 0; t < n.length; t++)
        (r = _d.getElementById(n[t].id)),
          r && i(r, n[t].attributeName, n[t].originalAttributeValue);
      n.length = 0;
    }
    function s() {
      typeof sj_evt != "undefined" &&
        (sj_evt.bind("onFeedbackStarting", function () {
          e();
        }),
        sj_evt.bind("onFeedbackClosing", function () {
          o();
        }));
    }
    var n = [],
      r = (function () {
        function n(n, t, i) {
          this.id = n;
          this.attributeName = t;
          this.originalAttributeValue = i;
        }
        return n;
      })();
    s();
  })((t = n.Accessibility || (n.Accessibility = {})));
})(Feedback || (Feedback = {}));
