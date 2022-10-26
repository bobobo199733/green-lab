var _tmr = _tmr || [];
(function () {
  function s(a, b, c) {
    a.addEventListener
      ? a.addEventListener(b, c, !1)
      : a.attachEvent && a.attachEvent("on" + b, c);
  }
  function M(a, b, c) {
    a.removeEventListener
      ? a.removeEventListener(b, c, !1)
      : a.detachEvent && a.detachEvent("on" + b, c);
  }
  function Ma(a, b) {
    try {
      if (a.nodeName.toLowerCase() === b.toLowerCase()) return a;
      if (a.parentNode) return Ma(a.parentNode, b);
    } catch (c) {
      l && console.warn("[TopMailRu] Error#1.25", c);
    }
    return null;
  }
  function Na(a) {
    return null === a.offsetParent ||
      0 == a.offsetHeight ||
      0 == a.offsetLeft ||
      0 == a.offsetTop ||
      0 == a.offsetWidth ||
      0 == a.clientHeight ||
      0 == a.clientWidth
      ? !1
      : void 0 === h.getComputedStyle
      ? ((a = h.getComputedStyle(a, null)),
        "none" != a.getPropertyValue("display") &&
          "hidden" != a.getPropertyValue("visibility"))
      : !0;
  }
  function ca(a, b) {
    for (var c = 0; c < b.length; c++) if (b[c] == a) return !0;
    return !1;
  }
  function U(a) {
    var b = typeof a;
    return !(
      "number" === b ||
      "boolean" === b ||
      "string" === b ||
      a.nodeType ||
      a === a.window
    );
  }
  function I(a) {
    return "[object Array]" === Object.prototype.toString.call(a);
  }
  function xa() {
    var a = arguments,
      b = a[0] || {},
      c = !1,
      d = 1,
      g = a.length,
      k,
      e,
      q,
      f,
      h;
    "boolean" === typeof b && ((c = b), (b = a[d++] || {}));
    for (U(b) || (b = {}); d < g; d++)
      if (null != (k = a[d]))
        for (e in k)
          (q = b[e]),
            (f = k[e]),
            b !== f &&
              (c && f && (U(f) || (h = I(f)))
                ? (h
                    ? ((h = !1), (q = q && I(q) ? q : []))
                    : (q = q && U(q) ? q : {}),
                  (b[e] = xa(c, q, f)))
                : void 0 !== f && (b[e] = f));
    return b;
  }
  function tb(a, b, c) {
    if (!a) return null;
    var d = a.match(b),
      g = 2 < arguments.length ? c : 0;
    return d && d.length > g ? d[g] : null;
  }
  function Oa(a) {
    var b = "";
    try {
      var c = new Uint8Array(a);
      h.crypto.getRandomValues(c);
      for (var d = 0; d < a; d++) b += (c[d] % 16).toString(16);
    } catch (g) {
      b = "";
      for (d = 0; d < a; d++)
        (c = Math.floor(16 * Math.random())), (b += c.toString(16));
    }
    return b;
  }
  function y() {
    return new Date().getTime();
  }
  function C(a, b) {
    var c = { data: b, raw: a, url: "https://top-fwz1.mail.ru" + a };
    if (void 0 === b)
      (c.dataSplitter = ";"),
        (c.open = ub),
        (c.connect = vb),
        (c.startListen = wb),
        (c.stopListen = xb),
        c.open(c),
        c.connect(c);
    else {
      var d;
      "function" === typeof h.XMLHttpRequest
        ? ((c.dataSplitter = ";"),
          (c.open = yb),
          (c.connect = zb),
          (c.startListen = Ab),
          (c.stopListen = Bb),
          c.open(c),
          c.connect(c),
          (d = !0))
        : (d = !1);
      d || Cb(c);
    }
  }
  function Cb(a) {
    var b = f.createElement("iframe"),
      c = f.createElement("div");
    c.setAttribute(
      "style",
      "position: absolute !important; top: -9999px !important; left: -9999px !important; width: 1px !important; height: 1px !important;"
    );
    c.appendChild(b);
    f.body.appendChild(c);
    try {
      var d = b.contentWindow.document,
        g = d.createElement("div"),
        k;
      for (k in a.data)
        if (a.data.hasOwnProperty(k)) {
          var e = a.data[k],
            q = typeof e;
          if ("string" === q || "number" === q) {
            var h = d.createElement("input");
            h.setAttribute("type", "hidden");
            h.setAttribute("name", k);
            h.value = e;
            g.appendChild(h);
          }
        }
      var K = d.createElement("form");
      K.setAttribute("action", a.url);
      K.setAttribute("method", Pa);
      K.setAttribute("enctype", Qa);
      K.appendChild(g);
      var m = d.createElement("div");
      m.appendChild(K);
      d.body.appendChild(m);
      var n = function () {
        try {
          M(b, "load", n), f.body.removeChild(c);
        } catch (a) {
          l && console.warn("[TopMailRu] Error#1.2", a);
        }
      };
      s(b, "load", n);
      K.submit();
    } catch (p) {
      l && console.warn("[TopMailRu] Error#1.3", p);
    }
  }
  function yb(a) {
    a._connection = new h.XMLHttpRequest();
  }
  function zb(a) {
    a._connection.open(Pa, a.url);
    a._connection.setRequestHeader("Content-Type", Qa);
    a._connection.send(ya(a.data, a.dataSplitter));
  }
  function Ab(a) {
    s(a._connection, "load", a._onload);
    s(a._connection, "error", a._onerror);
  }
  function Bb(a) {
    M(a._connection, "load", a._onload);
    M(a._connection, "error", a._onerror);
  }
  function ub(a) {
    a._connection = new Image();
  }
  function vb(a) {
    a._connection.src = a.url + ya(a.data, a.dataSplitter);
  }
  function wb(a) {
    a._connection.onload = a._onload;
    a._connection.onerror = a._onerror;
  }
  function xb(a) {
    a._connection.onload = null;
    a._connection.onerror = null;
  }
  function ya(a, b) {
    var c = b || ";",
      d = "",
      g;
    for (g in a)
      if (a.hasOwnProperty(g)) {
        var k = a[g],
          e = typeof k;
        if ("string" === e || "number" === e)
          d += c + escape(g) + "=" + escape(k);
      }
    return d;
  }
  function ma(a) {
    return (a = f.cookie.match(
      RegExp(
        "(?:^|; )" +
          a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    ))
      ? decodeURIComponent(a[1])
      : null;
  }
  function V(a, b, c) {
    c = c || {};
    var d = c.expires;
    "number" === typeof c.expires &&
      ((d = new Date()), d.setTime(d.getTime() + c.expires));
    d && d.toUTCString && (d = d.toUTCString());
    c.expires = d;
    a = a + "=" + encodeURIComponent(b);
    for (var g in c)
      if ((b = c[g]) || 0 === b) (a += "; " + g), !0 !== b && (a += "=" + b);
    f.cookie = a;
  }
  function Db() {
    var a = "tmr" + ("" + Math.random()).slice(2);
    try {
      return (W = h.localStorage || null), W.setItem(a, a), W.removeItem(a), !0;
    } catch (b) {
      return (W = null), l && console.warn("[TopMailRu] Error#1.4", b), !1;
    }
  }
  function Eb() {
    if (!na) return null;
    for (
      var a = E.hostname.split(".").reverse(), b, c = 1, d = a.length;
      c < d;
      c++
    ) {
      b = a[0];
      for (var g = 1; g <= c; g++) b = a[g] + "." + b;
      var g = "" + y(),
        k = { domain: b, path: "/", expires: 3e5 };
      try {
        V("tmr_tcdhn", g, k);
        var e = ma("tmr_tcdhn"),
          k = k || {};
        k.expires = -1;
        V("tmr_tcdhn", "", k);
        if (e === g) return b;
      } catch (q) {
        l && console.warn("[TopMailRu] Error#1.8", q);
      }
    }
    return null;
  }
  function oa(a, b) {
    na && V(a, b, Ra);
    if (za)
      try {
        W.setItem(a, b);
      } catch (c) {
        l && console.warn("[TopMailRu] Error#1.6", c);
      }
  }
  function Aa(a) {
    var b;
    if (!(b = na ? ma(a) : null)) {
      var c;
      if (za)
        a: {
          try {
            c = W.getItem(a);
            break a;
          } catch (d) {
            l && console.warn("[TopMailRu] Error#1.5", d);
          }
          c = null;
        }
      else c = null;
      b = c;
    }
    return b;
  }
  function Sa(a) {
    var b = ";e=" + escape("detect");
    C(H(a, "/tracker", !1, !1) + b);
  }
  function Ta(a, b) {
    if (a.length && null !== b.ecom_data) {
      var c = da(b.ecom_data),
        c = c ? ("" + c).substring(1, c.length - 1) : "";
      if (!(4096 < c.length || -1 === c.search(/\S/))) {
        var d = Ba("_m", b.ecom_method),
          g = Ba("_t", b.ecom_type),
          k = Ba("_jst", Ua()),
          c = "{" + c + d + g + k + "}";
        C(
          H({ id: a[0] }, "/datalayer", !1, !1) +
            (";ids=" + escape(a.join())) +
            (";e=" + escape(c))
        );
      }
    }
  }
  function Ba(a, b) {
    var c = ',"' + a + '":';
    if (!b || !b.length) return c + "[]";
    try {
      return c + '["' + b.join('","') + '"]';
    } catch (d) {}
    return c + "false";
  }
  function Fb() {
    var a = ma(Va);
    if (null === a) return null;
    a = a.split("|");
    if (3 !== a.length) return null;
    var b = a[2],
      b = y() - b;
    return 0 > b || b > Wa ? null : { id: a[0], version: a[1] };
  }
  function m() {}
  function ea(a) {
    a && "object" === typeof a && !O && "id" in a && (O = a.id);
  }
  function Gb(a) {
    return (a = !P ? void 0 : P[a]) && Ca ? a - Ca : void 0;
  }
  function Xa() {
    if (P) {
      for (
        var a = 0,
          b =
            "domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(
              " "
            ),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = !P ? void 0 : P[b[c]];
        if (0 < d && (d < a || 0 == a)) a = d;
      }
      return a ? a : void 0;
    }
  }
  function fa(a) {
    return a && "object" === typeof a && (("id" in a && a.id) || O);
  }
  function H(a, b, c, d) {
    oa(Da, ++X);
    var g = "id" in a ? a.id : O,
      k = "url" in a ? a.url : E.href,
      e = "referrer" in a ? a.referrer : f.referrer,
      q = "title" in a ? a.title : f.title,
      N;
    N = Ea;
    null === N && (N = Hb());
    N = null !== N ? (N ? 1 : 0) : null;
    var m = "userid" in a ? a.userid : L || 0 === L ? L : void 0,
      v = R ? R : void 0,
      n;
    n = [];
    O && g !== O && n.push("sec");
    "dataLayer" in h && n.push("dl");
    F && n.push(["ecom"].concat(F).join("-"));
    var p = Ib();
    p && p.length && n.push(["jst"].concat(p).join("-"));
    n = n.join(",");
    var G = h.screen,
      t,
      p = new Date().getTimezoneOffset();
    t = "";
    if (h.Intl)
      try {
        t = h.Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      } catch (Jb) {
        l && console.warn("[TopMailRu] Error#1.1", Jb);
      }
    t = p + "/" + t;
    p = Ya;
    p = null !== p ? p : Fb();
    a.start = Xa();
    b =
      b +
      "?js=13" +
      (g ? ";id=" + escape(g) : "") +
      (k ? ";u=" + escape(k) : "") +
      (e ? ";r=" + escape(e) : "") +
      (a.start ? ";st=" + escape(a.start) : "") +
      ("gender" in a ? ";gender=" + escape(a.gender) : "") +
      ("age" in a ? ";age=" + escape(a.age) : "") +
      ("pid" in a ? ";pid=" + escape(a.pid) : "") +
      (void 0 !== m ? ";userid=" + escape(m) : "") +
      (void 0 !== v ? ";uparams=" + escape(da(v)) : "") +
      (d && q ? ";title=" + encodeURIComponent(q) : "") +
      (G ? ";s=" + G.width + "*" + G.height : "") +
      ";vp=";
    g = d = 0;
    f.documentElement &&
    (f.documentElement.clientWidth || f.documentElement.clientHeight)
      ? ((d = f.documentElement.clientWidth),
        (g = f.documentElement.clientHeight))
      : "number" == typeof h.innerWidth &&
        ((d = h.innerWidth), (g = h.innerHeight));
    b =
      b +
      ("" + d + "*" + g) +
      ";touch=" +
      Kb +
      ";hds=" +
      Lb +
      ";frame=" +
      Mb +
      ";flash=";
    if (null === ga)
      if (((ga = ""), Q.plugins && Q.plugins["Shockwave Flash"]))
        ga = Q.plugins["Shockwave Flash"].description.split(" ")[2];
      else if (h.ActiveXObject)
        try {
          var D = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
            D = D.GetVariable("$version"),
            D = D.split(" ")[1].split(",");
          ga = D[0] + "." + D[1];
        } catch (Nb) {
          l && console.warn("[TopMailRu] Error#1.12", Nb);
        }
    D = b + ga + ";sid=" + Za + ";ver=" + $a + ";tz=" + encodeURIComponent(t);
    if (c) {
      if (!P || !Fa) c = "";
      else {
        c = [];
        c.push(Fa.type);
        c.push(Fa.redirectCount);
        c.push(Ca);
        for (b = 0; b < ab.length; b++) c.push(Gb(ab[b]));
        c = c.join("/");
      }
      c = ";nt=" + c;
    } else c = "";
    c = D + c + ("device" in a ? ";device=" + escape(a.device) : "") + ";ni=";
    if (!Q || !Q.connection) D = "";
    else {
      D = Q.connection;
      b = [];
      for (g = 0; g < bb.length; g++) {
        d = D[bb[g]];
        if (void 0 !== d)
          switch (d) {
            case !0:
              d = 1;
              break;
            case !1:
              d = 0;
              break;
            default:
              d = ("" + d).replace(/\//g, "_");
          }
        b.push(d);
      }
      D = b.join("/");
    }
    return (
      c +
      D +
      ("params" in a ? ";params=" + escape(da(a.params)) : "") +
      (null !== N ? ";detect=" + N : "") +
      (na || za ? ";lvid=" + escape([ha, y(), X, Y].join(":")) : "") +
      (n ? ";opts=" + escape(n) : "") +
      (p ? ";flocid=" + escape(p.id) + ";flocv=" + escape(p.version) : "") +
      ("version" in a ? ";appver=" + escape(a.version) : "") +
      (Z.support ? ";visible=" + Z.getValue() : "") +
      ";_=" +
      Math.random()
    );
  }
  function cb(a) {
    a = ";e=" + escape("PVT/" + a);
    for (var b = 0; b < A.length; b++) C(H(A[b], "/tracker", !1, !0) + a);
  }
  function Ob() {
    Ea = !0;
    db(1);
    if (!eb && !ia) {
      ia = !0;
      for (var a = 0; a < A.length; a++) Sa(A[a]);
    }
  }
  function Pb() {
    db(0);
    Ea = !1;
  }
  function Hb() {
    var a = ma(fb);
    if (null === a) return null;
    a = a.split("|");
    if (2 !== a.length) return null;
    var b = a[1],
      b = y() - b;
    if (0 > b || b > gb) return null;
    a = parseInt(a[0], 10);
    return isNaN(a) ? null : a;
  }
  function db(a) {
    var b = y();
    a = [a, b].join("|");
    V(fb, a, { path: "/", expires: gb });
  }
  function pa() {
    f.addEventListener
      ? (M(f, "DOMContentLoaded", pa), _tmr.onready())
      : f.attachEvent &&
        "complete" === f.readyState &&
        (M(f, "readystatechange", pa), _tmr.onready());
  }
  function hb() {
    M(h, "load", hb);
    _tmr.onready();
    _tmr.onload();
  }
  function qa() {
    M(h, "unload", qa);
    M(h, "beforeunload", qa);
    _tmr.unload();
  }
  if ("[object Array]" === Object.prototype.toString.call(_tmr)) {
    var h = window,
      Q = navigator,
      f = document,
      E = location,
      $ = "string" === typeof E.hostname ? E.hostname : "",
      ja =
        -1 != $.search(/(^|\.)odnoklassniki\.ru$/) ||
        -1 != $.search(/(^|\.)ok\.ru$/),
      ka = -1 != $.search(/(^|\.)vk\.com$/);
    $.search(/(^|\.)mail\.ru$/);
    var Qb = -1 != $.search(/(^|\.)lamoda\.ru$/),
      Rb = -1 != $.search(/(^|\.)kommersant\.ru$/),
      Sb =
        "string" === typeof E.search &&
        -1 != E.search.search(/[?&]rb_clickid=/),
      l =
        "string" === typeof E.search &&
        -1 != E.search.search(/[?&]tmr_debug=1(?:&|$)/),
      ib = ja || ka || Qb || Rb,
      Tb = !Sb,
      Ub = ja || ka,
      Vb = ja || ka,
      jb = ja || ka,
      eb = !1,
      Wb = !(ja || ka),
      da =
        h.JSON && JSON.stringify
          ? JSON.stringify.bind(JSON)
          : function (a) {
              return "";
            },
      Pa = "POST",
      Qa = "application/x-www-form-urlencoded",
      na = !(
        0 === E.hostname.search(/^(\d+.)+\d+$/g) ||
        -1 !== E.hostname.search(/:/g)
      ),
      W = null,
      za = Db(),
      Ra = { domain: Eb(), path: "/", expires: 287712e5 };
    (function () {
      var a;
      if (
        (a = f.cookie.match(RegExp("(?:^|; )(tmr_tcdhn\\d+)=([^;]*)", "g")))
      ) {
        for (var b = [], c, d = 0, g = a.length; d < g; d++)
          (c = a[d]),
            (c = c.match(/(?:^|; )(tmr_tcdhn\d+)=([^;]*)/)) &&
              b.push(c.slice(1));
        a = b;
      } else a = null;
      if (a) {
        b = 0;
        for (d = a.length; b < d; b++)
          (g = a[b][0]), (c = Ra || {}), (c.expires = -1), V(g, "", c);
      }
    })();
    var ia = !1,
      Ea = null,
      gb = 864e5,
      fb = "tmr_detect",
      Xb = (function () {
        function a(a, b) {
          for (var c = a.length, e, q, f = 0; f < b; f++)
            (q = Math.floor(Math.random() * c)),
              (e = a[f]),
              (a[f] = a[q]),
              (a[q] = e);
          return a.slice(0, b);
        }
        function b(b, g) {
          var k = f.createElement("div"),
            e = String.fromCharCode(
              97,
              100,
              118,
              98,
              108,
              111,
              99,
              107,
              32,
              97,
              100,
              118,
              101,
              114,
              116,
              98,
              108,
              111,
              99,
              107,
              32,
              97,
              100,
              118,
              101,
              114,
              116,
              66,
              108,
              111,
              99,
              107,
              32,
              98,
              45,
              114,
              98,
              32,
              98,
              97,
              110,
              110,
              101,
              114,
              95,
              50,
              52,
              48,
              32,
              112,
              45,
              116,
              97,
              114,
              103,
              101,
              116,
              32,
              112,
              117,
              98,
              95,
              51,
              48,
              48,
              120,
              50,
              53,
              48,
              32,
              112,
              117,
              98,
              95,
              51,
              48,
              48,
              120,
              50,
              53,
              48,
              109,
              32,
              112,
              117,
              98,
              95,
              55,
              50,
              56,
              120,
              57,
              48,
              32,
              114,
              98,
              95,
              98,
              111,
              100,
              121,
              32,
              114,
              98,
              45,
              102,
              108,
              111,
              97,
              116,
              105,
              110,
              103,
              32,
              114,
              98,
              45,
              115,
              108,
              111,
              116,
              32,
              114,
              98,
              45,
              118,
              105,
              100,
              101,
              111,
              45,
              119,
              105,
              100,
              103,
              101,
              116,
              32,
              116,
              101,
              120,
              116,
              45,
              97,
              100,
              32,
              116,
              101,
              120,
              116,
              45,
              97,
              100,
              45,
              108,
              105,
              110,
              107,
              115,
              32,
              116,
              101,
              120,
              116,
              45,
              97,
              100,
              115,
              32,
              116,
              101,
              120,
              116,
              45,
              98,
              97,
              110,
              110,
              101,
              114,
              32,
              116,
              101,
              120,
              116,
              95,
              97,
              100,
              32,
              116,
              101,
              120,
              116,
              95,
              97,
              100,
              115,
              32,
              116,
              101,
              120,
              116,
              65,
              100,
              32,
              116,
              101,
              120,
              116,
              97,
              100,
              32,
              116,
              101,
              120,
              116,
              65,
              100,
              115,
              32,
              116,
              101,
              120,
              116,
              97,
              100,
              115,
              32,
              116,
              103,
              98,
              45,
              98,
              97,
              110,
              110,
              101,
              114,
              32,
              116,
              114,
              103,
              45,
              98,
              45,
              98,
              97,
              110,
              110,
              101,
              114,
              45,
              98,
              108,
              111,
              99,
              107
            ).split(" "),
            e = a(e, c);
          k.setAttribute("class", e.join(" "));
          k.setAttribute(
            "style",
            "position: absolute !important; top: -9999px !important; left: -9999px !important; width: 1px !important; height: 1px !important;"
          );
          k.setAttribute("id", "trg-b-banners-1");
          k.setAttribute("data-view", "SlotView.mimic");
          this.bait = f.body.appendChild(k);
          this.bait.offsetParent;
          this.bait.offsetHeight;
          this.bait.offsetLeft;
          this.bait.offsetTop;
          this.bait.offsetWidth;
          this.bait.clientHeight;
          this.bait.clientWidth;
          this.loopNumber = 0;
          this.fnPositive = b || null;
          this.fnNegative = g || null;
          var q = this;
          setTimeout(function () {
            q._checkBait.call(q);
          }, 1);
        }
        var c = 7;
        b.prototype._checkBait = function () {
          if (ia) this._stop();
          else {
            var a = null !== f.body.getAttribute("abp") || !Na(this.bait);
            (!0 === a || 10 <= ++this.loopNumber) && this._stop();
            var b;
            if (a && this.fnPositive)
              try {
                (b = this.fnPositive), b();
              } catch (c) {
                l && console.warn("[TopMailRu] Error#1.9", c);
              }
            else if (!a && 10 > this.loopNumber) {
              var e = this;
              setTimeout(function () {
                e._checkBait.call(e);
              }, 50 * this.loopNumber);
            } else
              try {
                (b = this.fnNegative), b();
              } catch (q) {
                l && console.warn("[TopMailRu] Error#1.10", q);
              }
          }
        };
        b.prototype._stop = function () {
          try {
            f.body.removeChild(this.bait);
          } catch (a) {
            l && console.warn("[TopMailRu] Error#1.11", a);
          }
        };
        return function (a, c) {
          new b(a, c);
        };
      })(),
      F = null,
      kb = "ecommerce",
      J = "dataLayer",
      aa = null,
      Ga = !1,
      ra = [],
      Yb = [36383, 2540645, 3171181, 3074137, 2057653],
      Zb = [],
      Ha;
    (function () {
      function a(a, b) {
        for (var c = 0, d = b.length; c < d; c++)
          -1 === a.indexOf(b[c]) && a.push(b[c]);
      }
      function b(b, c, d) {
        for (
          var e = { ecom_method: [], ecom_type: [], ecom_data: { events: [] } },
            g = 0,
            k = b.length;
          g < k;
          g++
        ) {
          var f = t[b[g]];
          if (f) {
            a(e.ecom_method, [b[g]]);
            for (var p = 0, q = f.length; p < q; p++)
              for (var h = 0, G = d.length; h < G; h++) {
                var n = f[p][d[h]];
                if (n)
                  for (var m = 0, l = c.length; m < l; m++)
                    if (-1 !== f[p].type.indexOf(c[m])) {
                      a(e.ecom_type, [c[m]]);
                      a(e.ecom_data.events, n);
                      break;
                    }
              }
          }
        }
        return e;
      }
      function c(a, b, c) {
        if (!a || !c || !(b in t)) return null;
        for (var d, e = 0, g = t[b].length; e < g; e++)
          if (((d = t[b][e]), c in d && -1 !== d[c].indexOf(a)))
            return {
              ecom_method: [b],
              ecom_type: d.type.slice(),
              ecom_data: {},
            };
        return null;
      }
      function d(a) {
        for (var d = [], e, h, t = 0, n = a.length; t < n; t++)
          if ((h = a[t])) {
            e = null;
            try {
              if (h.ecommerce) e = g(h) || k(h);
              else if (null === h.ecommerce) e = null;
              else if (h.event) {
                var lb = { event: h.event, ecommerce: {} };
                e = g(lb) || k(lb);
              } else if ("event" === h[0]) {
                var u = h[1],
                  w = h[2],
                  Ia = c(u, m, p);
                Ia && (Ia.ecom_data[u] = w);
                e = Ia;
              } else if (h.event === kb)
                a: {
                  for (
                    var x = b([f], [K], [G]),
                      z = 0,
                      v = x.ecom_data.events.length;
                    z < v;
                    z++
                  )
                    if (!h.hasOwnProperty(x.ecom_data.events[z])) {
                      e = null;
                      break a;
                    }
                  delete x.ecom_data.events;
                  x.ecom_data[kb] = h;
                  e = x;
                }
            } catch (s) {
              l && console.warn("[TopMailRu] Error#1.23", s), (e = null);
            }
            e && (d.push(e), ra.push(e));
          }
        if (d.length) {
          a = 0;
          for (e = d.length; a < e; a++) Ta(sa, d[a]);
          F || (F = [0, 0, J]);
          F[0] += d.length;
          e = a = 0;
          for (t = d.length; e < t; e++) a += da(d[e].ecom_data).length;
          F[1] += a;
        }
      }
      function g(a) {
        var b, d;
        for (d in a.ecommerce)
          if (a.ecommerce.hasOwnProperty(d) && (b = c(d, f, v))) {
            if (a.event && (d = c(a.event, f, n)))
              for (var e = 0, g = b.ecom_type.length; e < g; e++)
                -1 === d.ecom_type.indexOf(b.ecom_type[e]) &&
                  (b.ecom_type.splice(e, 1), g--, e--);
            b.ecom_data = a.ecommerce;
            return b;
          }
        return null;
      }
      function k(a) {
        var b = a.event,
          d = c(b, f, n);
        d && (d.ecom_data[b] = a.ecommerce);
        return d;
      }
      function e(a) {
        if ((a = h[a]) && "function" === typeof a.push)
          d(a),
            (aa = a.push),
            (a.push = function () {
              var a = aa.apply(this, arguments);
              d([].slice.call(arguments, 0));
              return a;
            });
      }
      var f = "push",
        m = "gtag",
        K = "gse",
        v = "inner",
        n = "outer",
        p = "external",
        G = "required",
        t = {};
      t[m] = [
        {
          type: ["gee"],
          external:
            "add checkout checkout_option checkout_progress click detail promo_click remove select_content set_checkout_option view_refund".split(
              " "
            ),
        },
        {
          type: ["ga4"],
          external:
            "earn_virtual_currency join_group level_end level_start level_up post_score select_content spend_virtual_currency tutorial_begin tutorial_complete unlock_achievement ad_impression login search share sign_up add_payment_info add_shipping_info add_to_wishlist generate_lead select_item select_promotion view_cart view_item_list".split(
              " "
            ),
        },
        {
          type: ["gee", "ga4"],
          external:
            "add_to_cart begin_checkout purchase refund remove_from_cart view_item view_promotion".split(
              " "
            ),
        },
      ];
      t[f] = [
        { type: [K], required: ["transactionId", "transactionTotal"] },
        { type: ["ga4"], outer: b([m], ["ga4"], [p]).ecom_data.events },
        {
          type: ["gee"],
          inner:
            "click checkout checkout_option impressions promoClick promoView refund".split(
              " "
            ),
          outer:
            "addToCart checkout checkoutOption productClick productDetail ProductImpressions promotionClick promotionView removeFromCart transactionPush".split(
              " "
            ),
        },
        { type: ["ym", "gee"], inner: ["add", "detail", "purchase", "remove"] },
      ];
      Ha = function (a) {
        if (!(a === J && aa)) {
          a !== J && (ra = []);
          var b = h[J];
          b &&
            "function" === typeof b.push &&
            aa &&
            ((b.push = aa), (aa = null));
          e(a);
          Ga = !0;
        }
      };
    })();
    var Ua = (function () {
        var a = [
            { id: "gtag", globalVars: ["google_tag_manager"] },
            { id: "ga", globalVars: ["GoogleAnalyticsObject"] },
            { id: "ym", globalVars: ["Ya", { re: "yaCounter\\d+" }] },
            { id: "vk", globalVars: ["VK"] },
            { id: "vk", globalVars: ["vkAsyncInit"] },
          ],
          b = {};
        return function () {
          var c;
          try {
            c = Object.keys(h).join(",");
          } catch (d) {
            c = null;
          }
          for (var g = [], k, e = 0, f = a.length; e < f; e++) {
            k = b[a[e].id];
            if (void 0 === k)
              a: {
                k = a[e].globalVars;
                for (var m = c, l = 0, v = k.length; l < v; l++) {
                  var n = k[l];
                  if (
                    ("string" === typeof n && !(n in h)) ||
                    ("string" === typeof n.re &&
                      ((m &&
                        -1 ===
                          m.search(RegExp("($|,)" + n.re + "(,|^)", "m"))) ||
                        1 === v))
                  ) {
                    k = !1;
                    break a;
                  }
                }
                k = !0;
              }
            k && ((b[a[e].id] = !0), ca(a[e].id, g) || g.push(a[e].id));
          }
          return g;
        };
      })(),
      Ib = Ua,
      Wa = 864e5,
      Va = "tmr_floc",
      Ya = null;
    (function (a) {
      try {
        f.interestCohort &&
          "function" === typeof f.interestCohort &&
          f.interestCohort().then(
            function (a) {
              Ya = { id: a.id, version: a.version };
              a = [a.id, a.version];
              var b = y();
              a = a.concat(b).join("|");
              V(Va, a, { path: "/", expires: Wa });
            },
            function () {}
          );
      } catch (b) {}
    })();
    var Z = { support: !1 },
      Z = (function () {
        function a() {
          d(k);
        }
        function b() {
          d(k, v);
        }
        function c() {
          return e ? !f[e] : null;
        }
        function d(a, b) {
          var d = y(),
            e = "undefined" === typeof b ? c() : b;
          if (null === n[a]) n[a] = { ts: d, state: e, total: 0 };
          else {
            var k = n[a];
            if (k.state !== e) {
              var f = d - k.ts,
                h = k.state;
              k.ts = d;
              k.state = e;
              f < g ||
                (h === m
                  ? ((k.total += f), p && p(d, f))
                  : h === l && G && G(d, f));
            }
          }
        }
        var g = 5,
          k = "auto",
          e = null,
          q = null,
          m = !0,
          l = !1,
          v = null;
        "hidden" in f
          ? ((e = "hidden"), (q = "visibilitychange"))
          : "mozHidden" in f
          ? ((e = "mozHidden"), (q = "mozvisibilitychange"))
          : "webkitHidden" in f
          ? ((e = "webkitHidden"), (q = "webkitvisibilitychange"))
          : "msHidden" in f && ((e = "msHidden"), (q = "msvisibilitychange"));
        var n = {};
        n[k] = null;
        var p = (n.user = null),
          G = null;
        return {
          support: !!e,
          auto: function (c, d) {
            p = c || null;
            G = d || null;
            e && (a(), s(f, q, a));
            s(h, "beforeunload", b);
            s(h, "unload", b);
          },
          set: function (a) {
            d("user", !!a);
          },
          getLog: function () {
            var a = y(),
              b = {},
              c,
              d;
            for (d in n)
              (c = n[d]),
                (b[d] = c ? c.total : 0),
                c && c.state && (b[d] += a - c.ts);
            return b;
          },
          getValue: c,
        };
      })();
    Z.auto();
    var mb = { enabled: !1 },
      ta = (function () {
        function a(a, b) {
          var c = ("" + a).match(g),
            d = {};
          d[e] = c;
          for (var f = 0, k = c.length; f < k; f++) c[f] && (d[h[f]] = c[f]);
          c = 1 < arguments.length && void 0 !== b;
          delete d[e];
          return c && !0 !== b ? d[b] || null : d;
        }
        function b(a, b) {
          var d = ("" + a).match(k) || [],
            g = {};
          g[e] = d;
          for (var f = 0, h = d.length; f < h; f++) d[f] && (g[m[f]] = d[f]);
          if (
            (d = 1 < arguments.length && void 0 !== b) &&
            (-1 !== l.indexOf(b) || !0 === b)
          )
            for (var h = 0, q = l.length; h < q; h++)
              (f = c(n[h] || "", g, h)) && (g[l[h]] = f);
          delete g[e];
          return d && !0 !== b ? g[b] || null : g;
        }
        function c(a, b, d) {
          var e = "",
            g;
          if (U(a) && "data" in a)
            (e =
              "index" in a
                ? (b[a.data] || [])[a.index] || ""
                : c(a.data, b, d)),
              "re" in a && (e = tb(e, a.re, a.reMatchIndex) || ""),
              e &&
                ((g = c(a.pre || "", b, d)),
                (a = c(a.post || "", b, d)),
                (e = g + e + a));
          else if (I(a)) {
            g = 0;
            for (var f = a.length; g < f; g++) e += c(a[g], b, d);
          } else
            (e = m.indexOf(a)),
              -1 === e && ((e = l.indexOf(a)), e >= d && (e = -1)),
              (e = -1 !== e ? b[a] || "" : "" + a);
          return e;
        }
        function d(a) {
          var b;
          if (I(a)) {
            b = [];
            for (var c = 0, e = a.length; c < e; c++) b.push(d(a[c]));
            return b;
          }
          b = a instanceof RegExp ? a : RegExp("(?:^|(?:.+\\.))" + a + "$");
          return b.test(ta.parse(E.href, "domain")) ? null : b;
        }
        var g = /^((mailto|tel|fax|modem)\:)(.*)$/,
          k =
            /^(?:([a-z]+):(?:([a-z]*):)?\/\/)?(?:([^:@]*)(?::([^:@]*))?@)?(?:((?:[a-z0-9_-]+\.)+[a-z]{2,}|localhost|(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5]))))(?::(\d+))?(?:([^:\?\#]+))?(?:\?([^\#]+))?(?:\#([^\s]+))?$/i,
          e = "_raw",
          f = "hash",
          f = "hash",
          h = ["href", "protocol", "contactBy", "contactTo"],
          m = [
            "href",
            "scheme",
            "subscheme",
            "user",
            "pass",
            "hostname",
            "port",
            "pathname",
            "query",
            f,
          ],
          l = [
            "protocol",
            "auth",
            "host",
            "domain",
            "path",
            "search",
            f,
            "fileExtension",
          ],
          n = [
            { data: ["scheme", { pre: ":", data: "subscheme" }], post: ":" },
            [{ data: "user", post: { pre: ":", data: "pass" } }],
            [{ data: e, index: 5, post: { pre: ":", data: "port" } }],
            { data: "host", re: /^(?:w{3}.)?(.*)$/, reMatchIndex: 1 },
            ["pathname", { pre: "?", data: "query" }],
            { pre: "?", data: "query" },
            { pre: "#", data: f },
            { data: "pathname", re: /.\.([^\.]+)$/, reMatchIndex: 1 },
          ];
        return {
          parse: function (c, d) {
            return !c ? null : g.test("" + c) ? a(c, d) : b(c, d);
          },
          getIsDomainRE: d,
        };
      })(),
      nb = (function () {
        var a = "email number search tel text url".split(" ");
        return {
          analyze: function (b) {
            if (!b) return null;
            for (
              var c = [].slice.apply(b.elements), d = [], g = 0, f = c.length;
              g < f;
              g++
            ) {
              var e;
              a: {
                e = c[g];
                if ("input" === e.tagName.toLowerCase()) {
                  var h = e.type.toLowerCase();
                  if (h && -1 === a.indexOf(h)) {
                    e = !1;
                    break a;
                  }
                }
                e = Na(e) && e.name && !1 === e.disabled;
              }
              e && d.push(c[g].name);
            }
            return { node: b, inputs: d.length ? d : null };
          },
          getFormByInput: function (a) {
            if (!a) return null;
            a = a.form || a.getAttribute("form");
            return "string" === typeof a
              ? document.getElementById(a) || null
              : a instanceof HTMLElement
              ? a
              : null;
          },
        };
      })(),
      mb = (function () {
        function a(a) {
          a = a || h.event;
          var c = (a.which || a.keyCode) === C;
          if (
            ("which" in a && a.which === t) ||
            ("button" in a && a.button & t) ||
            c
          ) {
            a: {
              a = a.target || a.srcElement;
              for (var c = 0, f = k.length; c < f; c++) {
                var n;
                b: {
                  n = a;
                  for (var B = k[c], p = 0, u = B.types.length; p < u; p++) {
                    var w;
                    c: {
                      var r = n;
                      w = B.types[p];
                      var x = null;
                      if (w.filter.tagName)
                        for (
                          var z = 0, s = w.filter.tagName.length;
                          z < s && !(x = Ma(r, w.filter.tagName[z]));
                          z++
                        );
                      else x = r;
                      if (x) {
                        if (w.filter.attr)
                          for (r in ((r = void 0), w.filter.attr))
                            if (
                              w.filter.attr.hasOwnProperty(r) &&
                              ((z = w.filter.attr[r]),
                              (s = x[r]),
                              (!0 === z && !s) ||
                                (!1 === z && s) ||
                                (I(z) && -1 === z.indexOf(s)))
                            ) {
                              w = null;
                              break c;
                            }
                        w = { source: x, type: w.type, detail: x.tagName };
                      } else w = null;
                    }
                    if (w) {
                      w.category = B.category;
                      n = w;
                      break b;
                    }
                  }
                  n = null;
                }
                if (n) {
                  a = n;
                  break a;
                }
              }
              a = null;
            }
            if (a) {
              if (a.category === d) a.data = ta.parse(a.source.href, !0);
              else if (a.category === g)
                a.data = nb.analyze(nb.getFormByInput(a.source));
              else return;
              c = A;
              if (c.enabled && c.modes) {
                f = 0;
                for (n = c.modes.length; f < n; f++)
                  if (((B = a), (p = c.modes[f]), B.category === p.mode))
                    if (B.category === d || B.category === g) {
                      if (((p = p.categories), B.data)) {
                        u = void 0;
                        c: {
                          u = 0;
                          for (w = p.length; u < w; u++) {
                            d: {
                              x = B;
                              r = p[u];
                              z = 0;
                              for (s = r.types.length; z < s; z++) {
                                var v = b(x, r.types[z]);
                                if (v) {
                                  v.type = r.category;
                                  x = v;
                                  break d;
                                }
                              }
                              x = null;
                            }
                            if (x) {
                              x.category = B.category;
                              u = x;
                              break c;
                            }
                          }
                          u = null;
                        }
                        u &&
                          ((B = {
                            type: "sendEvent",
                            category: "_" + u.category,
                            action: u.detail,
                          }),
                          u.category === d && (u.type === e || u.type === m)
                            ? (B.label = u.data.href)
                            : u.category === y &&
                              (B.label = u.data.node.action),
                          _tmr.push(B));
                      }
                    } else
                      l &&
                        console.warn(
                          "[TopMailRu] Error#1.24",
                          "Not found tracking for type",
                          B.type
                        );
              }
            }
          }
        }
        function b(a, b) {
          for (var d in b.filter)
            if (b.filter.hasOwnProperty(d)) {
              var e = b.filter[d],
                g = a.data[d];
              if (!0 === e)
                if (I(g)) {
                  if (!g.length) return null;
                } else {
                  if (!g) return null;
                }
              else if (!1 === e)
                if (I(g)) {
                  if (g.length) return null;
                } else {
                  if (g) return null;
                }
              else {
                if (!g) return null;
                if (I(g)) {
                  if (!g.length) return null;
                } else g = [g];
                var f = p;
                if (U(e) && !I(e)) {
                  if (!I(e.value)) return null;
                  f = e.rule || f;
                  e = e.value;
                }
                if (!c(g, e, f)) return null;
              }
            }
          return { source: a.source, data: a.data, detail: b.type };
        }
        function c(a, b, c) {
          var d = (c & n) === n,
            e = (c & r) === r;
          c = (c & v) === v;
          for (var g = 0, f = b.length; g < f; g++) {
            var h = b[g],
              k = "string" === typeof h;
            k && !d && (h = h.toLowerCase());
            var m = h instanceof RegExp;
            if (!k && !m) return !1;
            var l;
            a: {
              l = a;
              for (var q = d, p = 0, s = l.length; p < s; p++) {
                var t = q ? l[p] : l[p].toLowerCase();
                if ((m && h.test(t)) || (k && h === t)) {
                  l = !0;
                  break a;
                }
              }
              l = !1;
            }
            if (e && l) return !0;
            if (c && !l) return !1;
          }
          if (e) return !1;
          if (c) return !0;
        }
        var d = "click",
          g = "submit",
          k = [
            {
              category: g,
              types: [
                {
                  type: "button",
                  filter: {
                    tagName: ["input", "button"],
                    attr: { type: ["submit", "image"] },
                  },
                },
              ],
            },
            {
              category: d,
              types: [
                { type: "a", filter: { tagName: ["a"], attr: { href: !0 } } },
              ],
            },
          ],
          e = "file",
          m = "resource",
          y = "submit",
          r = 1,
          v = 2,
          n = 4,
          p = r,
          A = {
            enabled: !0,
            modes: [
              {
                mode: g,
                categories: [
                  {
                    category: y,
                    types: [
                      {
                        type: "lead",
                        filter: {
                          inputs: { value: ["phone", "email"], rule: v | n },
                        },
                      },
                      { type: "form", filter: { inputs: !0 } },
                    ],
                  },
                ],
              },
              {
                mode: d,
                categories: [
                  {
                    category: "contact",
                    types: [
                      { type: "email", filter: { contactBy: ["mailto"] } },
                      { type: "phone", filter: { contactBy: ["tel"] } },
                    ],
                  },
                  {
                    category: e,
                    types: [
                      {
                        type: "file",
                        filter: {
                          fileExtension:
                            "7z bz2 gz apk iso cab dmg msi rar tar zip exe txt doc docx ppt pptx xls xlsx csv pdf psd rtf ods djvu eps 3gp aac ac3 avi flac flv divx midi mka mkv mp3 mp4 mpeg mpg mov ogg vob wav webm wma wmf wmv torrent".split(
                              " "
                            ),
                        },
                      },
                    ],
                  },
                  {
                    category: m,
                    types: [
                      {
                        type: "messenger",
                        filter: {
                          domain: ta.getIsDomainRE([
                            "t.me",
                            "telegram.me",
                            "m.me",
                            "vk.me",
                          ]),
                        },
                      },
                      {
                        type: "socialNetwork",
                        filter: {
                          domain: ta.getIsDomainRE(
                            "vk.com ok.ru facebook.com twitter.com linkedin.com instagram.com tiktok.com youtube.com youtu.be".split(
                              " "
                            )
                          ),
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          t = 1,
          C = 13;
        return {
          enabled: !0,
          start: function () {
            s(f, "click", a);
            s(f, "keypress", a);
          },
        };
      })();
    Wb && mb.start();
    var $a = "60.3.0",
      Ja = 0,
      ua = 0,
      Za = Oa(16),
      L = null,
      R = null,
      va = 0,
      Da = "tmr_reqNum",
      X = Aa(Da),
      X = null === X ? 0 : parseInt(X, 10);
    oa(Da, X);
    var Y = Aa("tmr_lvid"),
      ha = Aa("tmr_lvidTS");
    if (null === Y || -1 === Y.search(/^[0-9a-fA-F]+$/)) Y = Oa(32);
    oa("tmr_lvid", Y);
    if (null === ha || -1 === ha.search(/^\d+$/)) ha = "" + y();
    oa("tmr_lvidTS", ha);
    var O = 0,
      A = [],
      Ka = [],
      wa = [],
      sa = [],
      Kb =
        "ontouchstart" in h || 1 < (Q.maxTouchPoints || Q.msMaxTouchPoints)
          ? "1"
          : "0",
      Lb = h.devicePixelRatio || 0,
      Mb = h.top === h ? 0 : 1,
      ga = null,
      ob =
        h.performance ||
        h.mozPerformance ||
        h.msPerformance ||
        h.webkitPerformance ||
        {},
      P = ob.timing || {},
      Fa = ob.navigation || {},
      ab =
        "unloadEventStart unloadEventEnd redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd secureConnectionStart requestStart responseStart responseEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(
          " "
        ),
      Ca = !P ? void 0 : P.navigationStart,
      bb = "downlink downlinkMax effectiveType rtt saveData type".split(" "),
      S,
      La;
    S = function (a, b, c) {
      if (b && "object" === typeof b) {
        var d = ("id" in b && b.id) || O,
          g = c.title || null,
          f,
          e = La(b, { params: c.required, fn: c.fn });
        if (e.missed.length)
          console.warn(
            "[TopMailRu]" + (d ? "[" + d + "]" : "") + " Error#1.14",
            "Unspecified " +
              ((1 < e.missed.length &&
                e.missed.slice(0, -1).join(", ") + " and ") ||
                "") +
              e.missed.slice(-1) +
              " in " +
              a
          );
        else {
          var h = La(b, { params: c.optional, fn: c.fn });
          f = [].concat(e.values).concat(h.values);
          e = [].concat(e.missed).concat(h.missed);
          c.value &&
            ((b = "value" in b && b.value),
            !0 !== c.value && (b = b || c.value),
            b ? f.push("value: " + b) : e.push("value"));
          c = f.length ? "{ " + f.join(", ") + " }" : "";
          f = e.length
            ? "(" +
              (1 < e.length
                ? e.slice(0, -1).join(", ") + " and " + e.slice(-1) + " are"
                : e.slice(-1) + " is") +
              " empty)"
            : "";
          d
            ? console.info(
                "[TopMailRu][" + d + "]: " + (g || a) + " " + c + " " + f
              )
            : console.warn(
                "[TopMailRu] Error#1.15",
                "Undefined counter ID of " + a + " " + c
              );
        }
      } else console.warn("[TopMailRu][][" + a + "] Error#1.13");
    };
    La = function (a, b) {
      var c = [],
        d = [],
        g,
        f,
        e;
      if (b.params)
        for (g in b.params)
          if (b.params.hasOwnProperty(g) && !1 !== b.params[g])
            if (
              ((f = g in a && a[g]),
              !0 !== b.params[g] && (f = f || b.params[g]),
              f)
            )
              try {
                (e = b.fn ? b.fn : null),
                  c.push(g + ': "' + (e ? e(g, f) : f) + '"');
              } catch (h) {
                console.warn("[TopMailRu] Error#1.16", h);
              }
            else d && d.push(g);
      return { values: c, missed: d };
    };
    m.prototype.callbackOnReady = function (a) {
      l && S("onReady", a, { title: "OnReady callback" });
      a &&
        "object" === typeof a &&
        "function" === typeof a.callback &&
        a.callback.call(a.context || null);
    };
    m.prototype.pageView = function (a) {
      ea(a);
      a: if (a && "object" === typeof a && a.id) {
        5 > Ka.length &&
          !ca(a.id, Ka) &&
          (Ka.push(a.id),
          !1 !== a.beat && wa.push(a.id),
          A.push(a),
          ia && Sa(a));
        var b = "string" === typeof a.ecom,
          c = b && -1 !== a.ecom.search(/\S/);
        if (
          5 > sa.length &&
          !ca(a.id, sa) &&
          (!0 === a.ecom ||
            (b && !c) ||
            (b && c) ||
            (!1 !== a.ecom && !b && (ca(a.id, Yb) || !ca(a.id, Zb))))
        ) {
          sa.push(a.id);
          if (b && c) {
            if (Ga && (Ha(a.ecom), J !== a.ecom)) {
              J = a.ecom;
              F && (F = [0, 0, J]);
              break a;
            }
            J = a.ecom;
            F && (F = [0, 0, J]);
          }
          b = [a.id];
          if (Ga) for (var c = 0, d = ra.length; c < d; c++) Ta(b, ra[c]);
        }
      }
      l && S("pageView", a, { title: "Page view", optional: { url: E.href } });
      fa(a) && (C(H(a, "/counter", !1, !0)), (ua = y()));
    };
    m.prototype.reachGoal = function (a) {
      ea(a);
      l &&
        S("reachGoal", a, {
          title: "Reach goal",
          value: !0,
          required: { goal: !0 },
        });
      if (fa(a) && "goal" in a && a.goal) {
        var b = "value" in a && a.value ? parseInt(a.value) || "" : "";
        C(
          H(a, "/tracker", !1, !0) + (";e=" + escape("RG:" + b + "/" + a.goal))
        );
      }
    };
    m.prototype.itemView = function (a) {
      l &&
        S("itemView", a, {
          title: "Item view",
          optional: { list: !0, pagetype: !0, productid: !0, totalvalue: !0 },
          fn: function (a, b) {
            return ("" + b).replace(/;/g, " ");
          },
        });
      if (fa(a)) {
        var b = a.list || "",
          c = a.productid || "",
          d = a.pagetype || "",
          f = a.totalvalue || 0;
        new Image().src =
          "https://ad.mail.ru/retarget/?counter=" +
          (a.id || O) +
          "&list=" +
          b +
          "&productid=" +
          c +
          "&pagetype=" +
          d +
          "&totalvalue=" +
          f +
          "&_=" +
          Math.random();
        b =
          "IV:" +
          f +
          "/" +
          ("" + b).replace(/;/g, " ") +
          ";" +
          ("" + c).replace(/;/g, " ") +
          ";" +
          ("" + d).replace(/;/g, " ");
        C(H(a, "/tracker", !1, !1) + (";e=" + escape(b)));
      }
    };
    m.prototype.sendEvent = function (a) {
      ea(a);
      l &&
        S("sendEvent", a, {
          title: "Send event",
          value: !0,
          required: { category: !0, action: !0 },
          optional: { label: !0 },
          fn: function (a, b) {
            return ("" + b).substring(0, 300).replace(/;/g, " ");
          },
        });
      if (fa(a) && "category" in a && a.category && "action" in a && a.action) {
        var b = ("" + a.category).substring(0, 300),
          c = ("" + a.action).substring(0, 300),
          d = "label" in a && a.label ? ("" + a.label).substring(0, 300) : "",
          b =
            "CE:" +
            ("value" in a && a.value ? parseInt(a.value) || "" : "") +
            "/" +
            ("" + b).replace(/;/g, " ") +
            ";" +
            ("" + c).replace(/;/g, " ") +
            ";" +
            ("" + d).replace(/;/g, " ");
        C(H(a, "/tracker", !1, !1) + (";e=" + escape(b)));
      }
    };
    m.prototype.setUserID = function (a) {
      if (null === a || !1 === a || void 0 === a) this.deleteUserID();
      else {
        var b = typeof a;
        "number" !== b && "string" !== b
          ? l &&
            console.warn(
              "[TopMailRu] Error#1.17",
              "Invalid user ID in setUserID"
            )
          : ((L = a), l && console.info("[TopMailRu]: Global user ID = " + L));
      }
    };
    m.prototype.getUserID = function () {
      return L || 0 === L ? L : void 0;
    };
    m.prototype.deleteUserID = function () {
      L = null;
      l && console.info("[TopMailRu]: Reset global user ID to null");
    };
    m.prototype.setUserParams = function (a) {
      if (null === a || !1 === a || void 0 === a) this.deleteUserParams();
      else if (U(a)) {
        try {
          R = xa(!0, {}, a);
        } catch (b) {
          l &&
            console.warn(
              "[TopMailRu] Error#1.22",
              "Invalid user params in setUserParams"
            );
          return;
        }
        l && console.info("[TopMailRu]: Global user params = " + da(R));
      } else
        l &&
          console.warn(
            "[TopMailRu] Error#1.21",
            "Invalid user params in setUserParams"
          );
    };
    m.prototype.getUserParams = function () {
      var a = R ? R : void 0;
      return a ? xa(!0, {}, a) : void 0;
    };
    m.prototype.deleteUserParams = function () {
      R = null;
      l && console.info("[TopMailRu]: Reset global user params to null");
    };
    m.prototype.getClientID = function () {
      var a = Y;
      return a || 0 === a ? a : void 0;
    };
    m.prototype._MT_event = function (a, b, c) {
      ea(a);
      l && S(b, a, { title: c });
      fa(a) && C(H(a, "/tracker", !1, !0) + (";e=" + escape("MT:/" + b)));
    };
    m.prototype.miniAppEvent = function (a) {
      this._MT_event(a, "miniAppEvent", "VK Mini App Event");
    };
    m.prototype.processEvent = function (a, b) {
      if (a && "object" === typeof a)
        if ("type" in a) {
          if ("onready" === a.type) {
            if (b && 0 > b) return;
            this.callbackOnReady(a);
          } else if (b && 0 < b) return;
          switch (a.type) {
            case "pageView":
              this.pageView(a);
              break;
            case "reachGoal":
              this.reachGoal(a);
              break;
            case "itemView":
              this.itemView(a);
              break;
            case "sendEvent":
              this.sendEvent(a);
              break;
            case "setUserID":
              "userid" in a && this.setUserID(a.userid);
              break;
            case "deleteUserID":
              this.deleteUserID();
              break;
            case "setUserParams":
              "params" in a && this.setUserParams(a.params);
              break;
            case "deleteUserParams":
              this.deleteUserParams();
              break;
            case "miniAppEvent":
              this.miniAppEvent(a);
          }
        } else
          l &&
            console.warn(
              "[TopMailRu] Error#1.19",
              "Unspecified type of push event"
            );
      else l && console.warn("[TopMailRu] Error#1.18", "Invalid push event");
    };
    m.prototype.push = function (a) {
      for (var b = 0, c = arguments.length; b < c; b++)
        this.processEvent(arguments[b]);
    };
    var pb = !1;
    m.prototype.onready = function () {
      pb || ((pb = !0), !eb && !ia && Xb(Ob, Pb), Ha(J));
    };
    var qb = !1;
    m.prototype.onload = function () {
      if (!qb) {
        qb = !0;
        va = y();
        if (!Vb && 0 < A.length) {
          for (
            var a = ";e=" + escape("RT/load") + ";et=" + va, b = 0;
            b < A.length;
            b++
          )
            C(H(A[b], "/tracker", !0, !1) + a);
          ua = va;
        }
        Tb ||
          setTimeout(function () {
            cb(2);
          }, 2e3);
        Ub ||
          setTimeout(function () {
            cb(15);
          }, 15e3);
      }
    };
    m.prototype.beat = function () {
      if (!ib && Ja) {
        var a = y();
        if (!(12e4 < a - Ja)) {
          if (12e4 < a - ua)
            for (
              var b = ";e=" + escape("RT/resend") + ";et=" + va, c = 0;
              c < A.length;
              c++
            )
              !1 !== A[c].beat && C(H(A[c], "/tracker", !1, !0) + b);
          else
            0 < wa.length &&
              C(
                "/tracker?" +
                  ya(
                    {
                      js: "13",
                      id: wa[0],
                      e: "RT/beat",
                      sid: Za,
                      ids: wa.join(),
                      ver: $a,
                      _: Math.random(),
                    },
                    ";"
                  )
              );
          ua = a;
        }
      }
    };
    var rb = !1;
    m.prototype.unload = function () {
      if (!rb && ((rb = !0), !jb)) {
        var a;
        a = (a = Xa()) ? y() - a : void 0;
        a =
          ";e=" +
          escape("RT/unload") +
          ";et=" +
          y() +
          (a ? ";pvt=" + escape(a) : "");
        if (Z.support) {
          var b = Z.getLog();
          a += ";vtauto=" + b.auto;
        }
        for (b = 0; b < A.length; b++) C(H(A[b], "/tracker", !1, !1) + a);
      }
    };
    m.prototype.activity = function (a) {
      Ja = y();
    };
    var ba = _tmr;
    _tmr = new m();
    for (var r = 0, la = ba.length, T; r < la; r++)
      (T = ba[r]) && "object" === typeof T && ea(T);
    r = 0;
    for (la = ba.length; r < la; r++) (T = ba[r]), _tmr.processEvent(T, 1);
    r = 0;
    for (la = ba.length; r < la; r++) (T = ba[r]), _tmr.processEvent(T, -1);
    if (
      "complete" === f.readyState ||
      ("loading" !== f.readyState && !f.documentElement.doScroll)
    )
      _tmr.onready();
    else
      f.addEventListener
        ? s(f, "DOMContentLoaded", pa)
        : f.attachEvent && s(f, "readystatechange", pa);
    if ("complete" === f.readyState) _tmr.onload();
    else s(h, "load", hb);
    jb || (s(h, "unload", qa), s(h, "beforeunload", qa));
    if (!ib) {
      setInterval(function () {
        _tmr.beat();
      }, 6e4);
      try {
        for (
          var sb =
              "scroll gesturechange touchmove mousedown mousemove mouseup touch".split(
                " "
              ),
            $b = function (a) {
              s(f, a, function () {
                _tmr.activity(a);
              });
            },
            r = 0;
          r < sb.length;
          r++
        )
          $b(sb[r]);
        s(h, "scroll", function () {
          _tmr.activity("scallback");
        });
      } catch (ac) {
        l && console.warn("[TopMailRu] Error#1.20", ac);
      }
    }
  }
})();
