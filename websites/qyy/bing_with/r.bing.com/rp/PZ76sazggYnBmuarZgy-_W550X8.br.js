var __spreadArray =
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
