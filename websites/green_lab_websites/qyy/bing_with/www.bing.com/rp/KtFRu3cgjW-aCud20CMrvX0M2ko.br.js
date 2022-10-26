var customEvents, __spreadArray, fallbackReplay, EventLoggingModule;
_w.EventsToDuplicate = [];
_w.useSharedLocalStorage = !1;
define("shared", ["require", "exports"], function (n, t) {
  function s(n, t) {
    for (var r = n.length, i = 0; i < r; i++) t(n[i]);
  }
  function r(n) {
    for (var i = [], t = 1; t < arguments.length; t++) i[t - 1] = arguments[t];
    return function () {
      n.apply(null, i);
    };
  }
  function u(n) {
    i && event && (event.returnValue = !1);
    n && typeof n.preventDefault == "function" && n.preventDefault();
  }
  function f(n) {
    i && event && (event.cancelBubble = !0);
    n && typeof n.stopPropagation == "function" && n.stopPropagation();
  }
  function e(n, t, i) {
    for (var r = 0; n && n.offsetParent && n != (i || document.body); )
      (r += n["offset" + t]), (n = n.offsetParent);
    return r;
  }
  function o() {
    return new Date().getTime();
  }
  function h(n) {
    return i ? event : n;
  }
  function c(n) {
    return i ? (event ? event.srcElement : null) : n.target;
  }
  function l(n) {
    return i ? (event ? event.fromElement : null) : n.relatedTarget;
  }
  function a(n) {
    return i ? (event ? event.toElement : null) : n.relatedTarget;
  }
  function v(n, t, i) {
    while (n && n != (i || document.body)) {
      if (n == t) return !0;
      n = n.parentNode;
    }
    return !1;
  }
  function y(n) {
    window.location.href = n;
  }
  function p(n, t) {
    n &&
      ((n.style.filter = t >= 100 ? "" : "alpha(opacity=" + t + ")"),
      (n.style.opacity = t / 100));
  }
  t.__esModule = !0;
  t.getTime =
    t.getOffset =
    t.stopPropagation =
    t.preventDefault =
    t.wrap =
    t.forEach =
      void 0;
  var i = sb_ie;
  t.forEach = s;
  t.wrap = r;
  t.preventDefault = u;
  t.stopPropagation = f;
  t.getOffset = e;
  t.getTime = o;
  window.sj_b = document.body;
  window.sb_de = document.documentElement;
  window.sj_wf = r;
  window.sj_pd = u;
  window.sj_sp = f;
  window.sj_go = e;
  window.sj_ev = h;
  window.sj_et = c;
  window.sj_mi = l;
  window.sj_mo = a;
  window.sj_we = v;
  window.sb_gt = o;
  window.sj_so = p;
  window.sj_lc = y;
});
define("env", ["require", "exports", "shared"], function (n, t, i) {
  function v(n, t) {
    return t.length && typeof n == "function"
      ? function () {
          return n.apply(null, t);
        }
      : n;
  }
  function y(n, t) {
    var e = [].slice.apply(arguments).slice(2),
      u = v(n, e),
      i;
    return (
      (i =
        window.setImmediate && !window.setImmediate.Override && (!t || t <= 16)
          ? "i" + setImmediate(u)
          : o(u, t)),
      (f[r] = i),
      (r = (r + 1) % a),
      i
    );
  }
  function p(n, t) {
    var r = [].slice.apply(arguments).slice(2),
      i = l(v(n, r), t);
    return (e[u] = i), (u = (u + 1) % a), i;
  }
  function w() {
    h.forEach(f, s);
    h.forEach(e, window.clearInterval);
    r = u = e.length = f.length = 0;
  }
  function s(n) {
    n != null &&
      (typeof n == "string" && n.indexOf("i") === 0
        ? window.clearImmediate(parseInt(n.substr(1), 10))
        : c(n));
  }
  var h = i,
    f = [],
    e = [],
    o,
    c,
    l,
    a = 1024,
    r = 0,
    u = 0;
  o = window.setTimeout;
  t.setTimeout = y;
  l = window.setInterval;
  t.setInterval = p;
  t.clear = w;
  c = window.clearTimeout;
  t.clearTimeout = s;
  window.sb_rst = o;
  window.setTimeout = window.sb_st = y;
  window.setInterval = window.sb_si = p;
  window.clearTimeout = window.sb_ct = s;
});
define("event.custom", ["require", "exports", "shared", "env"], function (
  n,
  t,
  i,
  r
) {
  function f(n) {
    return u[n] || (u[n] = []);
  }
  function e(n, t) {
    n.d ? l.setTimeout(c.wrap(n, t), n.d) : n(t);
  }
  function v(n, t, i) {
    var r, f;
    for (r in u)
      (f = i
        ? t && r.indexOf(t) === 0
        : !(r.indexOf(a) === 0) &&
          !(t && r.indexOf(t) === 0) &&
          !(n != null && n[r] != null)),
        f && delete u[r];
  }
  function o(n) {
    for (var t = f(n), u = (t.e = arguments), i, r = 0; r < t.length; r++)
      if (t[r].alive)
        try {
          e(t[r].func, u);
        } catch (o) {
          i || (i = o);
        }
    if (i) throw i;
  }
  function s(n, t, i, r) {
    var u = f(n);
    t && ((t.d = r), u.push({ func: t, alive: !0 }), i && u.e && e(t, u.e));
  }
  function h(n, t) {
    for (var i = 0, r = u[n]; r && i < r.length; i++)
      if (r[i].func == t && r[i].alive) {
        r[i].alive = !1;
        break;
      }
  }
  var c = i,
    l = r,
    u = {},
    a = "ajax.";
  t.reset = v;
  t.fire = o;
  t.bind = s;
  t.unbind = h;
  _w.sj_evt = { bind: s, unbind: h, fire: o };
});
define("event.native", ["require", "exports"], function (n, t) {
  function r(n, t, r, u) {
    var f = n === window || n === document || n === document.body;
    n &&
      (f && t == "load"
        ? i.bind("onP1", r, !0)
        : f && t == "unload"
        ? i.bind("unload", r, !0)
        : n.addEventListener
        ? n.addEventListener(t, r, u)
        : n.attachEvent
        ? n.attachEvent("on" + t, r)
        : (n["on" + t] = r));
  }
  function u(n, t, r, u) {
    var f = n === window || n === document || n === document.body;
    n &&
      (f && t == "load"
        ? i.unbind("onP1", r)
        : f && t == "unload"
        ? i.unbind("unload", r)
        : n.removeEventListener
        ? n.removeEventListener(t, r, u)
        : n.detachEvent
        ? n.detachEvent("on" + t, r)
        : (n["on" + t] = null));
  }
  t.__esModule = !0;
  t.unbind = t.bind = void 0;
  var i = n("event.custom");
  t.bind = r;
  t.unbind = u;
  window.sj_be = r;
  window.sj_ue = u;
});
customEvents = require("event.custom");
customEvents.fire("onHTML");
define("dom", ["require", "exports"], function (n, t) {
  function f(n, t) {
    function s(n, t, r, f) {
      r && u.unbind(r, f, s);
      c.bind(
        "onP1",
        function () {
          if (!n.l) {
            n.l = 1;
            var r = i("script");
            r.setAttribute("data-rms", "1");
            r.src =
              (t ? "/fd/sa/" + _G.Ver : "/sa/" + _G.AppVer) + "/" + n.n + ".js";
            _d.body.appendChild(r);
          }
        },
        !0,
        5
      );
    }
    for (var f = arguments, e, o, r = 2, l = { n: n }; r < f.length; r += 2)
      (e = f[r]), (o = f[r + 1]), u.bind(e, o, h.wrap(s, l, t, e, o));
    r < 3 && s(l, t);
  }
  function e() {
    var n = _d.getElementById("ajaxStyles");
    return (
      n ||
        ((n = _d.createElement("div")),
        (n.id = "ajaxStyles"),
        _d.body.insertBefore(n, _d.body.firstChild)),
      n
    );
  }
  function l(n) {
    var t = i("script");
    t.type = "text/javascript";
    t.text = n;
    t.setAttribute("data-bing-script", "1");
    document.body.appendChild(t);
    r.setTimeout(function () {
      t.parentNode.removeChild(t);
    }, 0);
  }
  function a(n) {
    var t = i("script");
    t.type = "text/javascript";
    t.src = n;
    t.setAttribute("crossorigin", "anonymous");
    t.onload = r.setTimeout(function () {
      t.parentNode.removeChild(t);
    }, 0);
    document.body.appendChild(t);
  }
  function o(n) {
    var t = s("ajaxStyle");
    t ||
      ((t = i("style")),
      t.setAttribute("data-rms", "1"),
      (t.id = "ajaxStyle"),
      e().appendChild(t));
    t.textContent !== undefined
      ? (t.textContent += n)
      : (t.styleSheet.cssText += n);
  }
  function v(n, t) {
    for (
      var i = Element.prototype, r = i.matches || i.msMatchesSelector;
      n != null;

    ) {
      if (r.call(n, t)) return n;
      n = n.parentElement;
    }
    return null;
  }
  function s(n) {
    return _d.getElementById(n);
  }
  function i(n, t, i) {
    var r = _d.createElement(n);
    return t && (r.id = t), i && (r.className = i), r;
  }
  t.__esModule = !0;
  t.includeCss =
    t.includeScriptReference =
    t.includeScript =
    t.getCssHolder =
    t.loadJS =
      void 0;
  var r = n("env"),
    h = n("shared"),
    u = n("event.native"),
    c = n("event.custom");
  t.loadJS = f;
  t.getCssHolder = e;
  t.includeScript = l;
  t.includeScriptReference = a;
  t.includeCss = o;
  _w._ge = s;
  _w.sj_ce = i;
  _w.sj_jb = f;
  _w.sj_ic = o;
  _w.sj_fa = v;
});
define("cookies", ["require", "exports"], function (n, t) {
  function a() {
    var n = location.protocol === "https:";
    return n ? ";secure" : "";
  }
  function v() {
    return (
      typeof _G != "undefined" &&
      _G.EF !== undefined &&
      _G.EF.cookss !== undefined &&
      _G.EF.cookss === 1
    );
  }
  function f() {
    var n = location.hostname.match(/([^.]+\.[^.]*)$/);
    return n ? ";domain=" + n[0] : "";
  }
  function e(n, t, i, r, u) {
    var s = f(),
      h = r && r > 0 && r * 6e4 < 33696e6 ? r * 6e4 : 33696e6,
      c = new Date(new Date().getTime() + Math.min(h, 33696e6)),
      e = "",
      o;
    v() && ((o = a()), (e = o + (u ? ";SameSite=" + u : ";SameSite=None")));
    document.cookie =
      n +
      s +
      (t ? ";expires=" + c.toGMTString() : "") +
      (i ? ";path=" + i : "") +
      e;
  }
  function o(n, t, r, u, f) {
    if (!i) {
      var o = n + "=" + t;
      e(o, r, u, f);
    }
  }
  function s() {
    return !i;
  }
  function r(n, t) {
    var r, u;
    return i ||
      (!/\bMSCC=1\b/i.test(document.cookie) &&
        !/\bBCP=\b/i.test(document.cookie) &&
        !window.cookieGetAccess)
      ? null
      : ((r = document.cookie.match(new RegExp("\\b" + n + "=[^;]+"))), t && r)
      ? ((u = r[0].match(new RegExp("\\b" + t + "=([^&]*)"))), u ? u[1] : null)
      : r
      ? r[0]
      : null;
  }
  function h(n, t, u, f, o, s) {
    var l, h, c, a;
    if (!i)
      try {
        window.cookieGetAccess = !0;
        h = t + "=" + u;
        c = r(n);
        c
          ? ((a = r(n, t)), (l = a ? c.replace(t + "=" + a, h) : c + "&" + h))
          : (l = n + "=" + h);
        e(l, f, o, s);
      } finally {
        window.cookieGetAccess = !1;
      }
  }
  function c(n, t) {
    if (!i) {
      var r = n + "=",
        e = f();
      document.cookie = r + e + ";expires=" + u + (t ? ";path=" + t : "");
    }
  }
  var i, u, l;
  t.__esModule = !0;
  t.clear = t.set = t.get = t.areCookiesAccessible = t.setNoCrumbs = void 0;
  i = !1;
  u = new Date(0).toGMTString();
  window.cookieGetAccess = !1;
  try {
    l = document.cookie;
  } catch (y) {
    i = !0;
  }
  t.setNoCrumbs = o;
  t.areCookiesAccessible = s;
  t.get = r;
  t.set = h;
  t.clear = c;
  window.sj_cook = {
    get: r,
    set: h,
    setNoCrumbs: o,
    clear: c,
    areCookiesAccessible: s,
  };
});
define("rmsajax", ["require", "exports"], function (n, t) {
  function c() {
    for (var i, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
    if (n.length != 0) {
      if (((i = n[n.length - 1]), n.length == 1)) ht(i) && f.push(i);
      else if (n.length == 3) {
        var o = n[0],
          s = n[1],
          u = n[2];
        ct(o) && ct(s) && ht(u) && (lt(r, o, u), lt(e, s, u));
      }
      return window.rms;
    }
  }
  function it() {
    var i = arguments,
      t,
      n;
    for (o.push(i), t = 0; t < i.length; t++)
      (n = i[t]), at(n, r, n.ct), n.d && rt.call(null, n);
    return window.rms;
  }
  function ti() {
    var t = arguments,
      n;
    for (s.push(t), n = 0; n < t.length; n++) at(t[n], e);
    return window.rms;
  }
  function l() {
    var t, i, n;
    for (oi(), t = !1, n = 0; n < o.length; n++)
      t = rt.apply(null, p.call(o[n], 0)) || t;
    for (i = 0; i < s.length; i++) t = fi.apply(null, p.call(s[i], 0)) || t;
    if (!t) for (n = 0; n < f.length; n++) f[n]();
  }
  function rt() {
    var n = arguments,
      t,
      i,
      f,
      e;
    if (n.length === 0) return !1;
    if (((t = r[et(n[0])]), n.length > 1))
      for (i = si.apply(null, n), f = 0; f < i.length; f++)
        (e = i[f]),
          (e.run = u),
          ii(
            e,
            (function (n) {
              return function () {
                ri(n, i);
              };
            })(e)
          );
    else
      (t.run = u),
        ot(t, function () {
          ut(t);
        });
    return !0;
  }
  function ii(n, t) {
    var f, r, u;
    if (!n.state) {
      if (((n.state = kt), yt(n))) {
        t();
        return;
      }
      window.ActiveXObject !== undefined || ni.test(navigator.userAgent)
        ? ((f = new Image()), (f.onload = t), (f.onerror = t), (f.src = n.url))
        : typeof XMLHttpRequest != "undefined" && XMLHttpRequest
        ? ((r = new XMLHttpRequest()),
          r.open("GET", n.url, !0),
          (r.onreadystatechange = function () {
            r.readyState == 4 &&
              (!tt &&
                (r.status < 200 || r.status >= 400) &&
                (wt(n.url, "2", {
                  resourceUrl: n.url,
                  pageUrl: window.location.href,
                  status: r.status,
                  response: r.responseText,
                }),
                (tt = !0)),
              t());
          }),
          r.send())
        : ((u = i.createElement("object")),
          u.setAttribute("width", "0"),
          u.setAttribute("height", "0"),
          u.setAttribute("tabindex", "-1"),
          u.setAttribute("aria-hidden", "true"),
          (u.onload = t),
          (u.onerror = t),
          u.setAttribute("data", n.url),
          i.body.appendChild(u));
    }
  }
  function ri(n, t) {
    n.run == u && ((n.state = w), ft(t));
  }
  function ui(n, t) {
    n.run == u &&
      ot(
        n,
        (function (n) {
          return function () {
            ut(n, t);
          };
        })(n)
      );
  }
  function ut(n, t) {
    n.run == u && ((n.state = h), ei(n), t) && ft(t);
  }
  function ft(n) {
    for (var i, t = 0; t < n.length; t++) {
      i = n[t];
      switch (i.state) {
        case w:
          ui(i, n);
          return;
        case h:
          continue;
      }
      return;
    }
  }
  function et(n) {
    for (var t in n) return t;
  }
  function fi() {
    return !1;
  }
  function ei(n) {
    for (var t = 0; t < n.callbacks.length; t++) n.callbacks[t].dec();
  }
  function ot(n, t) {
    var r, s, f, c, l, e, u;
    if (n.state != b && n.state != h)
      if (
        ((n.state = b),
        (r = i.createElement("SCRIPT")),
        (s = n.ct !== undefined ? n.ct : "text/javascript"),
        (r.type = s),
        r.setAttribute("data-rms", "1"),
        n.key !== undefined &&
          n.key === "rms:answers:AutoSuggest:AutoSug" &&
          (r.onerror = function () {
            n.state = dt;
          }),
        (r.onreadystatechange = r.onload =
          function () {
            var i = r.readyState;
            if (!i || /loaded|complete/.test(i))
              try {
                st(t);
              } catch (u) {
                throw new TypeError(
                  "processCallback threw error for script:" +
                    n.key +
                    " script Url:" +
                    n.url +
                    " error stack:" +
                    (u ? u.stack : "")
                );
              }
          }),
        yt(n))
      ) {
        if (((f = _w.jsDefer), f))
          f.length > n.pos && ((r.text = f[n.pos]), i.body.appendChild(r));
        else if (
          ((c = n.app ? d : k),
          (l = i.getElementById(c)) &&
            (e = l.childNodes) &&
            e[n.pos] &&
            ((u = e[n.pos].innerHTML), u !== ""))
        ) {
          var a = 4,
            v = 3,
            o = u.length,
            y = u.substring(0, a),
            p = u.substring(o - v, o);
          y == "<!--" && p == "-->" && (u = u.substring(a, o - v));
          r.text =
            typeof DefaultTrustedTypesPolicy != "undefined" &&
            DefaultTrustedTypesPolicy.getOpaqueScript
              ? DefaultTrustedTypesPolicy.getOpaqueScript(u)
              : u;
          i.body.appendChild(r);
        }
        st(t);
      } else
        (r.src = n.url),
          (!pt() || (pt() && hi(r.src))) &&
            r.setAttribute("crossorigin", "anonymous"),
          nt || (wt(r.src, "1", { resourceUrl: r.src }), (nt = !0)),
          i.body.appendChild(r);
  }
  function st(n) {
    n.done || ((n.done = !0), n());
  }
  function ht(n) {
    return g.call(n) == "[object Function]";
  }
  function ct(n) {
    return g.call(n) == "[object Array]";
  }
  function lt(n, t, i) {
    for (var u, f = new a(i), r = 0; r < t.length; r++)
      (u = n[t[r]]), u || (u = vt(n, t[r])), v(u, f);
  }
  function oi() {
    for (var t, i, u, n = 0; n < f.length; n++) {
      t = new a(f[n]);
      for (i in r) v(r[i], t);
      for (u in e) v(e[u], t);
    }
  }
  function v(n, t) {
    n.callbacks.push(t);
    t.inc();
  }
  function at(n, t, i) {
    for (var r in n) if (typeof n[r] != undefined) return vt(t, r, n[r], i);
  }
  function vt(n, t, i, r) {
    return (
      n[t] || ((n[t] = { callbacks: [], onPrefetch: [] }), (n[t].key = t)),
      t.indexOf(gt) == 0 && (n[t].app = !0),
      isNaN(i) ? (n[t].url = i) : (n[t].pos = i),
      r && (n[t].ct = r),
      n[t]
    );
  }
  function si() {
    for (var i, t = [], n = 0; n < arguments.length; n++)
      (i = et(arguments[n])), t.push(r[i]);
    return t;
  }
  function yt(n) {
    return !n.url;
  }
  function hi(n) {
    var t = "https://" + i.location.host,
      r = "http://" + i.location.host;
    return !(n.indexOf(t) === 0 || n.indexOf(r) === 0);
  }
  function pt() {
    return (
      _G !== undefined && _G.EF !== undefined && _G.EF.crossdomainfix === 1
    );
  }
  function ci(n) {
    return (
      _G !== undefined &&
      _G.EF !== undefined &&
      _G.EF.crossoriginlogging === 1 &&
      n.indexOf("/rp/") >= 0
    );
  }
  function li(n) {
    return (
      n.indexOf("https://raka.") === 0 ||
      n.indexOf("https://rafd.") === 0 ||
      n.indexOf("https://r.") === 0
    );
  }
  function wt(n, t, i) {
    if (typeof sj_log2 == "function" && ci(n)) {
      var r = li(n) ? "rms_co" : "rms_noco";
      sj_log2("Request", r, t, "rmsajax_xhrprefetch", null, null, i);
    }
  }
  function ai(n) {
    var t, i;
    r = {};
    e = {};
    f = [];
    o = [];
    s = [];
    u += 1;
    t = document.getElementById(k);
    t && t.parentNode.removeChild(t);
    i = document.getElementById(d);
    i && i.parentNode.removeChild(i);
    n || bt();
  }
  function bt() {
    y.bind(
      "onP1Lazy",
      function () {
        c(function () {
          y.fire("onP1");
        });
        l();
      },
      !0
    );
  }
  var a;
  t.__esModule = !0;
  t.reset = t.start = t.css = t.js = t.onload = void 0;
  var y = n("event.custom"),
    p = [].slice,
    kt = 1,
    w = 2,
    b = 3,
    h = 4,
    dt = 5,
    u = 0,
    gt = "A:",
    k = "fRmsDefer",
    d = "aRmsDefer",
    r = {},
    e = {},
    f = [],
    o = [],
    s = [],
    g = Object.prototype.toString,
    i = document,
    ni = /edge/i,
    nt = !1,
    tt = !1;
  t.onload = c;
  t.js = it;
  t.css = ti;
  t.start = l;
  a = function (n) {
    var t = 0,
      i = !1;
    this.inc = function () {
      i || t++;
    };
    this.dec = function () {
      i || (t--, t == 0 && ((i = !0), n()));
    };
  };
  t.reset = ai;
  bt();
  window.rms = { onload: c, js: it, start: l };
});
_w.LogUploadCapFeatureEnabled = !1;
_w.InstLogQueueKeyFetcher = {
  Get: function (n) {
    var t = "eventLogQueue";
    return n.indexOf("proactive") == 1 ||
      n.indexOf("search") == 1 ||
      n.indexOf("zinc") == 1
      ? t + "_Online"
      : t + "_Offline";
  },
  GetSharedLocation: function () {
    return "eventLogQueue_Shared";
  },
  CanUploadSharedMessages: function (n) {
    return _w.useSharedLocalStorage && n.indexOf("AS/API") === 1 ? !0 : !1;
  },
};
__spreadArray =
  (this && this.__spreadArray) ||
  function (n, t, i) {
    if (i || arguments.length === 2)
      for (var r = 0, f = t.length, u; r < f; r++)
        (!u && r in t) ||
          (u || (u = Array.prototype.slice.call(t, 0, r)), (u[r] = t[r]));
    return n.concat(u || Array.prototype.slice.call(t));
  };
define("clientinst", ["require", "exports"], function (n, t) {
  function ot() {
    l = 0;
    u();
  }
  function u() {
    var n, s, t, o;
    e && clearTimeout(e);
    for (n in i)
      if (i.hasOwnProperty(n)) {
        s = n != _G.IG ? _G.lsUrl.replace(_G.IG, n) : _G.lsUrl;
        for (t in i[n])
          i[n].hasOwnProperty(t) &&
            ((o =
              w +
              s +
              "&TYPE=Event." +
              t +
              "&DATA=" +
              f("[") +
              i[n][t] +
              f("]")),
            ht(o) || (ut().src = o));
        delete i[n];
      }
    typeof r != "undefined" && r.setTimeout && (e = r.setTimeout(u, p));
  }
  function st() {
    return (
      _G !== undefined &&
      _G.EF !== undefined &&
      _G.EF.logsb !== undefined &&
      _G.EF.logsb === 1
    );
  }
  function ht(n) {
    return st() ? ct(n, "") : !1;
  }
  function ct(n, t) {
    var i = "sendBeacon",
      r = !1;
    if (navigator && navigator[i])
      try {
        navigator[i](n, t);
        r = !0;
      } catch (u) {}
    return r;
  }
  var v, k, d, g, nt;
  t.__esModule = !0;
  t.Wrap = t.Log2 = t.LogInstrumented = t.Log = t.LogCustomEvent = void 0;
  var r = n("env"),
    o = n("event.native"),
    s = n("event.custom"),
    f = encodeURIComponent,
    h = "length",
    c = "apply",
    p = 2e3,
    it = 2e3,
    l = 0,
    e,
    w = "",
    rt = _G.lsUrl + "&TYPE=Event.ClientInst&DATA=",
    a = location.hostname,
    b = a.match(/([^.]+\.[^.]*)$/);
  b &&
    ((v = location.protocol),
    (k = v == "https:" ? a.substring(0, a.indexOf(".")) : "a4"),
    (w = v + "//" + k + "." + b[0]));
  var i = {},
    ut = function () {
      return new Image();
    },
    ft = function (n, t, i, r) {
      for (var f = [], u = 4; u < arguments.length; u++)
        f[u - 4] = arguments[u];
      y(n, t, i, n, r, f);
    };
  t.LogCustomEvent = ft;
  d = function (n, t, i, r) {
    for (var f = [], u = 4; u < arguments.length; u++) f[u - 4] = arguments[u];
    y(n, t, i, "ClientInst", r, f);
  };
  t.Log = d;
  g = function (n, i, r, u, f, e, o) {
    t.Log2(n, i !== null && i !== void 0 ? i : r, null, null, u, f, o);
  };
  t.LogInstrumented = g;
  nt = function (n, t, i, r, u, f, e) {
    var o = Object.keys(e).reduce(function (n, t) {
      return __spreadArray(__spreadArray([], n, !0), [t, e[t]], !1);
    }, []);
    i && o.push("service", i);
    r && o.push("scenario", r);
    u && o.push("appNS", u);
    f && o.push("kValue", f);
    y(n, null, t, "ClientInst", !1, o);
  };
  t.Log2 = nt;
  var y = function (n, t, i, f, h, c) {
      l ||
        (tt("Init", "CI", "Base", "ClientInst", !1),
        typeof r != "undefined" && r.setTimeout && (e = r.setTimeout(u, p)),
        (l = 1),
        typeof o != "undefined" &&
          o.bind &&
          o.bind(window, "beforeunload", u, !1),
        typeof s != "undefined" &&
          s.bind &&
          s.bind(
            "unload",
            function () {
              ot();
            },
            !1
          ));
      tt(n, t, i, f, h, c);
    },
    tt = function (n, t, r, e, o, s) {
      var k,
        y = _G.IG,
        c = {},
        p,
        w,
        l,
        a,
        d,
        b,
        v;
      if (s && s.length > 0 && s.length % 2 == 0)
        for (p = 0; p < s.length; p += 2)
          ((w = s[p]), w) &&
            ((l = w.toLowerCase()),
            (a = s[p + 1]),
            l === "impressionguid"
              ? (y = a)
              : l === "service"
              ? (c.Service = a)
              : l === "scenario"
              ? (c.Scenario = a)
              : l === "appns"
              ? (c.AppNS = a)
              : l === "k" || l === "kvalue"
              ? (c.K = a)
              : l === "pos"
              ? (c.Pos = a)
              : (c[w] = a));
      d = new Date().getTime();
      c.T = "CI.".concat(n);
      c.TS = d;
      c.Name = r !== null && r !== void 0 ? r : "";
      c.FID = typeof t != "number" ? (t !== null && t !== void 0 ? t : "") : "";
      c.hasOwnProperty("K") || typeof t != "number" || (c.K = t);
      b = f(JSON.stringify(c));
      v = (i[y] && i[y][e]) || "";
      rt[h] + v[h] + b[h] >= it && (u(), (v = ""));
      i.hasOwnProperty(y)
        ? (i[y][e] = v + f(v ? "," : "") + b)
        : (i[y] = ((k = {}), (k[e] = v + f(v ? "," : "") + b), k));
      o && u();
    },
    et = function (n, t, i, r) {
      var u = n[t];
      n[t] = function () {
        var n = arguments,
          e,
          t,
          f;
        if ((r && i[c](this, n), (e = u[c](this, n)), !r)) {
          for (t = [], f = 0; f < n.length; f++) t.push(n[f]);
          t.push(e);
          i[c](this, t);
        }
        return e;
      };
    };
  t.Wrap = et;
  window.Log = { LogCustomEvent: t.LogCustomEvent, Log: t.Log, Wrap: t.Wrap };
  window.Shared2 = window.Shared2 || {};
  window.Shared2.Log = {
    LogCustomEvent: t.LogCustomEvent,
    Log: t.Log,
    Wrap: t.Wrap,
    LogInstrumented: t.LogInstrumented,
  };
  window.sj_log2 = t.Log2;
});
fallbackReplay = require("fallback");
fallbackReplay.replay();
var sj_anim = function (n) {
    var s = 25,
      t = this,
      c,
      u,
      h,
      f,
      e,
      o,
      l,
      i,
      r;
    t.init = function (n, s, a, v, y) {
      if (((c = n), (e = s), (o = a), (l = v), (r = y), v == 0)) {
        f = h;
        r && r();
        return;
      }
      i || (i = e);
      u || t.start();
    };
    t.start = function () {
      h = sb_gt();
      f = (Math.abs(o - i) / l) * s;
      u = setInterval(t.next, s);
    };
    t.stop = function () {
      clearInterval(u);
      u = 0;
    };
    t.next = function () {
      var u = sb_gt() - h,
        s = u >= f;
      i = e + ((o - e) * u) / f;
      s && (t.stop(), (i = o));
      n(c, i);
      s && r && r();
    };
    t.getInterval = function () {
      return s;
    };
  },
  sj_fader = function () {
    return new sj_anim(function (n, t) {
      sj_so(n, t);
    });
  },
  customEvents = require("event.custom");
customEvents.bind(
  "onPP",
  function () {
    customEvents.fire("onP1Lazy");
  },
  !0
),
  (function (n) {
    function i(n, t) {
      return typeof n[t] != "undefined";
    }
    function t() {
      _d.addEventListener("visibilitychange", function () {
        _d.visibilityState === "visible" &&
          (i(window, "Log2") && Log2.LogEvent
            ? Log2.LogEvent(
                "TabFocusChanged",
                "TabFocused",
                _d.visibilityState,
                !1
              )
            : Log && Log.LogCustomEvent
            ? Log.LogCustomEvent(
                "TabFocusChanged",
                "TabFocused",
                _d.visibilityState,
                !0
              )
            : Log &&
              Log.Log &&
              Log.Log(
                "TabFocusChanged",
                "Failed",
                "TabFocusChanged Event not logged"
              ));
      });
    }
    n.LogEventOnTabVisibilityChange = t;
    sj_evt.bind(
      "onP1",
      function () {
        t();
      },
      1
    );
  })(EventLoggingModule || (EventLoggingModule = {}));
