/*
 Oracle Infinity
 @preserve Copyright (c) 2017, 2018, 2019, Oracle and/or its affiliates. All rights reserved.
 common.js v1.3.45
 Created: 2022-08-30T13:13:01+0000
*/
ORA.common || (ORA.common = {});
ORA.common.mutations || (ORA.common.mutations = {});
ORA.common.mobile || (ORA.common.mobile = {});
ORA.common.clientID = {
  cfg: {
    DNTBehavior: "honorDNT",
    wtidTimeout: 1e3,
    cookie: {
      enable: !0,
      name: "ORA_FPC",
      expires: 63113851500,
      autoTLD: !1,
      sessionOnly: !1,
      expireDate: new Date(new Date().getTime() + 63113851500),
      domain: "",
    },
    endpoint: {
      clientIDServer: "dc.oracleinfinity.io",
      accountGuid: "abcde12345",
      protocol: "https",
    },
  },
  isClientIdSet: !1,
  isWaitForSetClientId: !1,
  waitForSetClientId: function () {
    ORA.common.TrackingPipeline.disableSeed();
    ORA.common.clientID.isWaitForSetClientId = !0;
  },
  setConfig: function (a) {
    a = a || {};
    a = ORA.common._shallowMerge(ORA.common.clientID.cfg, a);
    ORA.common.clientID.cfg = a;
    ORA.common.clientID.clientId &&
      ORA.common.clientID.storeClientId(ORA.common.clientID.clientId);
    return !0;
  },
  getClientID: function (a) {
    var b = 2 !== ORA.common.isFpcSet(ORA.common.clientID.cfg.cookie.name);
    ORA.common.clientID.isWaitForSetClientId &&
    !ORA.common.clientID.isClientIdSet
      ? (ORA.common.clientID.setIdCallback = a)
      : b
      ? ((b = ORA.common._getCookieAsObj(ORA.common.clientID.cfg.cookie.name)),
        ORA.common.clientID.storeClientId(b.id),
        a && a(b.id))
      : ORA.common.clientID.clientId
      ? (ORA.common.clientID.storeClientId(ORA.common.clientID.clientId),
        a && a(ORA.common.clientID.clientId))
      : ORA.common.clientID.getId(ORA.common.clientID.cfg.endpoint, a);
  },
  setClientID: function (a) {
    if (
      "undefined" === typeof a ||
      ("function" !== typeof a && "string" !== typeof a)
    )
      return !1;
    var b = a || "";
    if ("function" === typeof b)
      try {
        b = a();
      } catch (c) {
        ORA.Debug.debug(
          "Error executing supplied clientID function : " + c.message
        );
      }
    b = String(b);
    if ("undefined" !== b && b.match(/^[^<=^; >]{1,100}$/gm))
      return (
        (ORA.common.clientID.clientId = b),
        ORA.common.clientID.storeClientId(b),
        (ORA.common.clientID.isClientIdSet = !0),
        ORA.fireEvent(
          new ORA.Event(
            ORA.Event.SET_CLIENT_ID,
            ORA.Event.STATUS_SUCCESS,
            null,
            a
          )
        ),
        ORA.common.clientID.isWaitForSetClientId &&
          "undefined" !== typeof ORA.common.clientID.setIdCallback &&
          ORA.common.clientID.setIdCallback(b),
        !0
      );
    ORA.Debug.error(
      "setClientId failure - either no client id passed or client id has illegal character"
    );
    return !1;
  },
  storeClientId: function (a) {
    var b = ORA.common.clientID.cfg.cookie,
      c = b.domain;
    if (b.enable) {
      var d = (function () {
          var f = "";
          b.sessionOnly ||
            (ORA.common._isDNTSet() &&
              "anonymize" === ORA.common.clientID.cfg.DNTBehavior) ||
            (f = "; expires\x3d" + b.expireDate.toGMTString());
          return f;
        })(),
        e = (function () {
          var f = "";
          ORA.common._getConfigObject() &&
            ORA.common._getConfigObject().secureCookie &&
            "https:" === document.location.protocol.toLowerCase() &&
            (f = "; secure");
          return f;
        })();
      b.autoTLD &&
        !0 === b.autoTLD &&
        ((c = ORA.cookieMgr.checkCookieOnDomainAndGetTLDomain()),
        (b.domain = c));
      c =
        ("" !== c ? d + "; path\x3d/; domain\x3d" + c : d + "; path\x3d/") + e;
      d = ORA.common._getCookieAsObj(b.name);
      d.id = a;
      ORA.setCookie(b.name, d, c);
    } else
      (ORA.common.clientID.clientId = null),
        ORA.common._deleteCookie(b.name, "/", b.domain);
  },
  clearClientID: function () {
    ORA.common.clientID.clientId = null;
    var a = ORA.common.clientID.cfg.cookie;
    ORA.common._deleteCookie(a.name, "/", a.domain);
    ORA.fireEvent(
      new ORA.Event(ORA.Event.CLEAR_CLIENT_ID, ORA.Event.STATUS_SUCCESS)
    );
  },
  getId: function (a, b) {
    var c = function (d) {
      ORA.common.clientID.clientId = d;
      ORA.common.clientID.storeClientId(ORA.common.clientID.clientId);
      b && b(ORA.common.clientID.clientId);
    };
    ORA.common.protocols.xhrProtocol(
      {
        endpoint:
          a.protocol +
          "://" +
          a.clientIDServer +
          "/v4/account/" +
          (a.accountGuid || "not_supplied") +
          "/client/id",
        type: "GET",
      },
      function (d) {
        if ("undefined" === typeof d || ORA.common.clientID.clientId)
          ORA.common.clientID.clientId
            ? b(ORA.common.clientID.clientId)
            : c(ORA.common.clientID.getUniqueID());
        else {
          var e = { data: {} };
          try {
            e = JSON.parse(d);
          } catch (f) {
            ORA.Debug.error("getId - Invalid JSON");
          }
          e.data.id ? c(e.data.id) : c(ORA.common.clientID.getUniqueID());
        }
        ORA.fireEvent(
          new ORA.Event(ORA.Event.COMMON_GETID, ORA.Event.STATUS_SUCCESS)
        );
      },
      function () {
        c(ORA.common.clientID.getUniqueID());
      }
    );
  },
  getUniqueID: function () {
    return window.crypto
      ? "10000000-1000-4000-8000-100000000000".replace(/[018]/g, function (a) {
          return (
            a ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (a / 4)))
          ).toString(16);
        })
      : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
          var b = (16 * Math.random()) | 0;
          return ("x" === a ? b : (b & 3) | 8).toString(16);
        });
  },
};
ORA.common.getMergedConfigs = function (a, b) {
  var c = ORA.hasVal(b.config) ? b.config : {};
  var d = ORA.hasVal(b.data) ? b.data : {};
  c = ORA.paramsMerge(JSON.parse(JSON.stringify(a)), c);
  d = a.data ? ORA.paramsMerge(a.data, d) : d;
  ORA.hasVal(d) && (c.data = JSON.parse(JSON.stringify(d)));
  return c;
};
ORA.common._getConfigObject = function () {
  return ORA.analyticsModule ? ORA.analyticsModule.prototype.oraConfigObj : {};
};
ORA.common._mergeCopy = function (a, b, c) {
  for (var d in a)
    if (
      a.hasOwnProperty(d) &&
      "[object Object]" === Object.prototype.toString.call(a[d])
    )
      b[d] = c(b[d] || {}, a[d]);
    else if (a.hasOwnProperty(d)) b[d] = a[d];
    else break;
};
ORA.common._shallowMerge = function (a, b) {
  "[object Object]" === Object.prototype.toString.call(b) &&
    ORA.common._mergeCopy(b, a, ORA.common._shallowMerge);
  return a;
};
ORA.common._deepMerge = function () {
  for (var a = {}, b = [].splice.call(arguments, 0); 0 < b.length; ) {
    var c = b.splice(0, 1)[0];
    "[object Object]" === Object.prototype.toString.call(c) &&
      ORA.common._mergeCopy(c, a, ORA.common._deepMerge);
  }
  return a;
};
ORA.common.CookieMgrClass = function (a, b) {
  var c = {},
    d = !1,
    e,
    f =
      a ||
      function (h) {
        return h;
      },
    g =
      b ||
      function (h) {
        return h;
      },
    k = this,
    t = function (h, n) {
      h.replace(/\s/g, "");
      c[h] = n;
    },
    q = function () {
      if ((e = document.cookie))
        for (var h = e.split(";"), n = 0; n < h.length; n++) {
          var r = h[n].split("\x3d"),
            p = r.shift().replace(/^\s+|\s+$/g, ""),
            u;
          1 <= r.length && (u = r.join("\x3d"));
          t(p, g(u));
        }
      d = !0;
    };
  k.createCookie = function (h, n, r, p, u, v) {
    var x = null;
    "session" !== p &&
      void 0 !== r &&
      ((x = new Date()), x.setTime(x.getTime() + r));
    r = "";
    ORA.hasVal(u) && "" !== u && (r = "; domain\x3d" + u);
    u = "";
    null !== v &&
      "" !== v &&
      "undefined" !== typeof v &&
      (u = "; path\x3d" + v);
    v = "";
    null !== x && (v = "; expires\x3d" + x.toGMTString());
    k.setCookie(h, n, r + u + v);
  };
  k.getCookie = this._getCookieRaw = function (h) {
    d || q();
    ORA.Debug.debug("getCookie: [" + h + ", " + c[h] + "]");
    return c[h];
  };
  k.getCookieAsObj = function (h, n) {
    !1 === d && q();
    var r = n || ":",
      p = function (x) {
        var y = {};
        x &&
          (-1 === x.indexOf("\x3d")
            ? (y[x] = x)
            : ORA.common.extendArray(x.split(r)).forEach(function (z) {
                var A = z.split("\x3d");
                z = A.shift();
                0 < A.length && z && ((A = A.join("\x3d")), (y[z] = A));
              }));
        return y;
      },
      u = {};
    if (h) return p(c[h]);
    for (var v in c) c.hasOwnProperty(v) && (u[v] = p(c[v]));
    return u;
  };
  k.setCookie = function (h, n, r, p) {
    var u = r || "";
    p = p || ":";
    if ("object" === typeof n) {
      var v = [];
      for (y in n)
        if (n.hasOwnProperty(y) && "function" !== typeof n[y]) {
          var x = [];
          x.push(y, n[y]);
          v.push(x.join("\x3d"));
        }
      n = v.join(p);
    } else n = void 0 !== n ? n : "";
    var y = !0;
    ORA.common._getConfigObject() &&
      !1 === ORA.common._getConfigObject().secureCookie &&
      (y = !1);
    p = "; secure";
    (y && "http:" !== document.location.protocol.toLowerCase()) || (p = "");
    document.cookie = h + "\x3d" + f(n) + u + p;
    ORA.Debug.debug("setCookie: " + h + " with data: [" + f(n) + "]" + r + p);
    h = h + "\x3d" + n + u + p;
    try {
      var z = h.split("\x3d")[0],
        A = window.localStorage.getItem("ORA_COOK_STORE");
      r = {};
      A && (r = JSON.parse(A));
      var B = h.match(/expires=(.*?)(;|$)/);
      B &&
        0 < B.length &&
        (new Date(B[1]) > new Date() ? (r[z] = h) : delete r[z],
        window.localStorage.setItem("ORA_COOK_STORE", JSON.stringify(r)));
    } catch (C) {
      ORA.Debug.debug("Error writing local storage: " + C.message);
    }
    d = !1;
  };
  k.addCookie = k.setCookie;
  k.deleteCookie = k.cookieRemove = function (h, n, r) {
    var p = h + "\x3d; expires\x3dThu, 01 Jan 1970 00:00:01 GMT";
    n && (p += "; path\x3d" + n);
    r && (p += "; domain\x3d" + r);
    document.cookie = p;
    ORA.Debug.debug("deleteCookie: [" + h + ", " + c[h] + "]");
    delete c[h];
    try {
      var u = window.localStorage.getItem("ORA_COOK_STORE");
      n = {};
      u && (n = JSON.parse(u));
      n &&
        n[h] &&
        (delete n[h],
        window.localStorage.setItem("ORA_COOK_STORE", JSON.stringify(n)));
    } catch (v) {
      ORA.Debug.debug("Error deleting local storage: " + v.message);
    }
  };
  k.doesCookieExist = function (h) {
    d || q();
    ORA.Debug.debug("doesCookieExist: " + h + " \x3d " + !!c[h] + "]");
    return !!c[h];
  };
  k.checkAndDeleteCookie = function (h, n) {
    return -1 < document.cookie.indexOf(n)
      ? (this.deleteCookie(n, "/", "." + h), !0)
      : !1;
  };
  k.checkCookieOnDomainAndGetTLDomain = function () {
    var h = window.location.hostname,
      n = h.split("."),
      r = "test_cookie" + Math.floor(9e4 * Math.random()).toString();
    if (1 !== n.length) {
      for (h = n.length - 1; 0 <= h; --h) {
        var p = n.slice(h).join("."),
          u = new Date();
        u.setDate(u.getDate() + 1);
        u = ";domain\x3d." + p + ";path\x3d/;expires\x3d" + u.toUTCString();
        k.setCookie(r, "cookie", u);
        if (k.checkAndDeleteCookie(p, r)) {
          var v = p;
          break;
        }
      }
      return "." + v;
    }
    return h;
  };
  try {
    var w = window.localStorage.getItem("ORA_COOK_STORE"),
      l = {};
    if (w) {
      l = JSON.parse(w);
      for (var m in l)
        l.hasOwnProperty(m) &&
          !k.doesCookieExist(l[m].split("\x3d")[0]) &&
          (document.cookie = l[m]);
      d = !1;
    }
  } catch (h) {
    ORA.Debug.debug("Error reading local storage: " + h.message);
  }
  k.addItemIntoCache = t;
  return k;
};
ORA.common.CountDownLatchClass = function (a, b, c) {
  var d = c ? c : "CountdownLatchClass";
  var e = a ? a : 0;
  var f = b && ORA.common.isFn(b) ? b : null;
  var g = !1;
  this.countUp = function () {
    e++;
  };
  this.setCount = function (k) {
    e = k;
  };
  this.getCount = function () {
    return e;
  };
  this.countDown = function () {
    if (!(0 >= e)) {
      --e;
      ORA.Debug.trace("Countdown Latch counting down by 1, new count: " + e, d);
      try {
        0 === e &&
          f &&
          !1 === g &&
          (f(),
          (g = !0),
          ORA.Debug.trace("Countdown Latch running callback", d));
      } catch (k) {
        ORA.Debug.error(
          "CountDownLatch error:  failed to execute callback",
          "020",
          k,
          d
        );
      }
    }
  };
  this.await = function (k) {
    f = k && ORA.common.isFn(k) ? k : null;
  };
  this.reset = function () {
    e = 0;
    f = null;
  };
};
ORA.common._createScriptEl = function (a, b, c, d) {
  var e = { type: "text/javascript", async: "true", defer: "true" };
  e.onerror = d
    ? d
    : function () {
        "_comm" === b
          ? (ORA.Debug.error("OTS request fail: '" + a + "'", 145),
            ORA.Debug.error(
              "basic protocol failure ... aborting.  Check _comm url/payload",
              145
            ))
          : ORA.Debug.error("_createScriptEl - aborting ... " + b, 137);
      };
  e.src = a;
  window.setTimeout(function () {
    ORA.common._createElement(
      "script",
      e,
      null,
      document.getElementsByTagName("head")[0]
    );
    c ? c() : ORA.Debug.trace("OTS request w/ basic protocol success");
  }, 0);
};
ORA.common._createElement = function (a, b, c, d, e) {
  e || (d && (e = d.ownerDocument), e || (e = document));
  a = e.createElement(a);
  if (b)
    for (var f in b)
      b[f] &&
        b.hasOwnProperty(f) &&
        ("onerror" === f ? (a.onerror = b[f]) : a.setAttribute(f, b[f]));
  if (c)
    for (var g in c) c[g] && c.hasOwnProperty(g) && ORA.addDOMEvent(a, g, c[g]);
  d && d.appendChild(a);
  return a;
};
ORA.common._functionFactory = function (a) {
  return ORA.common.isFn(a)
    ? a
    : "string" === typeof a && 0 < a.length
    ? new Function(a)
    : null;
};
ORA.common._execScript = function (a, b) {
  try {
    return a && 0 !== a.length && "" !== a
      ? b
        ? eval(a)
        : window.execScript
        ? window.execScript(a)
        : window.eval(a)
      : null;
  } catch (c) {
    throw (ORA.Debug.error("_execScript failure:\n" + a, 138, c), c);
  }
};
ORA.common.getQryParams = function (a) {
  var b = a.split(/[#]/g);
  b = (0 < b.length ? b[0] : a).split(/[&?]/g);
  var c = {};
  try {
    for (var d = 0, e = b.length; d < e; ++d) {
      var f = b[d].match(/^([^=]+)(?:=([\s\S]*))?/);
      if (f && f[1]) {
        var g = "";
        try {
          g = decodeURIComponent(f[1]);
        } catch (t) {
          try {
            g = unescape(f[1]);
          } catch (q) {
            g = f[1];
          }
        }
        var k = "";
        try {
          k = "undefined" !== typeof f[2] ? decodeURIComponent(f[2]) : void 0;
        } catch (t) {
          try {
            k = unescape(f[2]);
          } catch (q) {
            k = f[2];
          }
        }
        c[g] ? ((c[g] = [c[g]]), c[g].push(k)) : (c[g] = k);
      }
    }
  } catch (t) {
    ORA.Debug.error("problem getting params from: " + a);
  }
  return c;
};
ORA.common._isDNTSet = function () {
  return (
    "yes" === navigator.doNotTrack ||
    "1" === navigator.doNotTrack ||
    1 === navigator.doNotTrack ||
    "1" === navigator.msDoNotTrack ||
    "1" === window.doNotTrack
  );
};
ORA.common._isEloquaOptOutSet = function (a) {
  return (
    a.ELOQUA &&
    void 0 !== a.ELOQUA.GUID &&
    "00000000000000000000000000000000" === a.ELOQUA.GUID
  );
};
ORA.common._isOracleOptOutSet = function (a) {
  return a.OPTOUT && void 0 !== a.OPTOUT.s33 && "0" === a.OPTOUT.s33;
};
ORA.common._isInfinityOptOutSet = function (a) {
  return (
    a["Infinity.optout"] &&
    void 0 !== a["Infinity.optout"].state &&
    "1" === a["Infinity.optout"].state
  );
};
ORA.common._isWTOptOutSet = function (a) {
  return !!a.WTOPTOUT && a.WTOPTOUT["1"];
};
ORA.common._isOptedOut = function (a) {
  void 0 === ORA.common._isOptedOut.invalidate &&
    (ORA.common._isOptedOut.invalidate = !1);
  if (
    void 0 === this.rtnValue ||
    void 0 !== a ||
    ORA.common._isOptedOut.invalidate
  )
    (ORA.common._isOptedOut.invalidate = !1),
      (a = a ? a : ORA.common._getCookieAsObj()),
      (this.isEloqua = ORA.common._isEloquaOptOutSet(a)),
      (this.isOPTOUT = ORA.common._isOracleOptOutSet(a)),
      (this.isInfinityOptout = ORA.common._isInfinityOptOutSet(a)),
      (this.isWTOPTOUT = ORA.common._isWTOptOutSet(a)),
      (this.rtnValue =
        this.isEloqua ||
        this.isOPTOUT ||
        this.isInfinityOptout ||
        this.isWTOPTOUT);
  this.rtnValue &&
    ((a =
      "OPTOUT reason- isEloqua: " +
      this.isEloqua +
      ", isOPTOUT: " +
      this.isOPTOUT +
      ", isInfinityOptout: "),
    (a += this.isInfinityOptout + ", isWTOPTOUT: " + this.isWTOPTOUT),
    ORA.Debug.info(a));
  return this.rtnValue;
};
ORA.common._setInfinityOptOut = function (a) {
  var b = new Date(),
    c = "";
  isNaN(a) ||
    ((a = a || 31536e7),
    (b = new Date(b.getTime() + a)),
    (c = ";expires\x3d" + b.toUTCString()));
  ORA.common._setCookie("Infinity.optout", "state\x3d1", c + ";path\x3d/");
  ORA.common._isOptedOut.invalidate = !0;
};
ORA.common.loadJS = function (a, b, c) {
  var d = b;
  2 > arguments.length && (d = !0);
  var e = document.createElement("script");
  e.type = "text/javascript";
  e.async = d;
  e.src = a;
  d = document.getElementsByTagName("script")[0];
  d.parentNode.insertBefore(e, d);
};
ORA.common._getIEVer = function (a) {
  a = "undefined" !== typeof a ? a : navigator.userAgent;
  return (
    (/msie\s|trident\/|edge\//i.test(a) &&
      parseInt(+/(edge\/|rv:|msie\s)([\d.]+)/i.exec(a)[2], 10)) ||
    null
  );
};
ORA.common.isSafariBrowser = function (a) {
  a = "undefined" !== typeof a ? a : navigator.userAgent;
  a = a.toLowerCase();
  return -1 !== a.indexOf("safari") && 0 > a.indexOf("chrome");
};
ORA.common.isMobileBrowser = function () {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};
ORA.common.visitMetaTags = function (a, b, c) {
  b = b || window.document;
  if (b.documentElement) b = b.getElementsByTagName("meta");
  else if (b.all) b = b.all.tags("meta");
  else return;
  for (var d = b.length, e = 0; e < d; e++) {
    var f = b.item(e).name,
      g = b.item(e).content;
    0 < f.length && a(f, g, c);
  }
};
ORA.common.elemExists = function (a) {
  return (a = ORA.getSelector()(a)) && 0 !== a.length ? !0 : !1;
};
ORA.common.createObserver = function (a, b) {
  try {
    if ("undefined" === typeof MutationObserver)
      return (
        ORA.Debug.error(
          "handleSPARules:  browser does not support MutationObserver",
          303
        ),
        null
      );
    var c = ORA.common.extendArray,
      d = ORA.common.elemExists;
    if (!d(a))
      return (
        ORA.Debug.trace(
          "handleSPARules:  failed to attach observer to '" + a + "'"
        ),
        !1
      );
    c(ORA.getSelector()(a)).forEach(function (e) {
      new MutationObserver(function (f) {
        f.forEach(function (g) {
          ORA.Debug.superfine(
            "OBSERVER: " + g.type + " on " + e + ", executing callback"
          );
          ORA.Debug.superfine("executing callback: " + b.toString());
          b(g);
        });
      }).observe(e, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0,
      });
      ORA.Debug.debug("createObserver:  Observing " + e.toString());
    });
    return !0;
  } catch (e) {
    return (
      ORA.Debug.debug("createObserver:  MutationObserver API unavailable"), null
    );
  }
};
ORA.common.protocols || (ORA.common.protocols = {});
ORA.common.protocols = {
  corsPost: function (a, b, c, d) {
    var e = a.timeout || 2e3,
      f = { endpoint: a.endpoint, type: "POST" },
      g = !1,
      k = function () {
        if (!g && ORA.hasVal(a.fallbackEndpoint)) {
          var m = ORA.common.TrackingPipeline,
            h = m.getCommProtocol(ORA.common.CommManager.GIF);
          null === h && (h = m.getCommProtocol(ORA.common.CommManager.DEFAULT));
          null === h
            ? ORA.Debug.error("Couldnt find a fallback protocol", "COMM")
            : (ORA.Debug.debug("Falling back to " + a.fallbackEndpoint, "COMM"),
              (g = !0),
              h({ endpoint: a.fallbackEndpoint, timeout: e }, b, c, d));
        }
      },
      t = function (m) {
        g ||
          (ORA.Debug.trace("corsPost: handling response\x3d'" + m + "'"),
          c && c(m),
          (g = !0));
      },
      q = function (m) {
        return function () {
          g ||
            (ORA.Debug.error(m + ": payload:" + ORA.common.JSONPrettify(b)),
            !ORA.hasVal(a.fallbackEndpoint) && d ? d(m) : k(),
            (g = !0));
        };
      },
      w = { events: [b] };
    ORA.Debug.debug("DCApi v2 payload: " + ORA.common.JSONPrettify(w));
    var l = function (m) {
      ORA.Debug.trace("xdrRespHandler response\x3d'" + m.responseText + "'");
      t(m.responseText);
    };
    try {
      this.makeRequest(f, w, t, q, l, "application/json"),
        ORA.Debug.debug("endpoint: " + f),
        5 <= ORA.Debug.getDebugLevel() &&
          ORA.Debug.trace("payload: " + ORA.common.JSONPrettify(b)),
        window.setTimeout(function () {
          g || (ORA.Debug.debug("Timed out....trying fallback"), k(), (g = !0));
        }, e);
    } catch (m) {
      q(m)();
    }
  },
  collectionV2Post: {
    name: "collection.v2.post",
    protocol: function (a, b, c, d) {
      if (!b) throw Error("Payload is not defined");
      try {
        ORA.common.protocols.corsPost(a, b, c, d);
      } catch (e) {
        ORA.Debug.error("DcApi v2 failed: " + e);
      }
    },
  },
  makeRequest: function (a, b, c, d, e, f) {
    var g = a.type || "GET",
      k = a.endpoint;
    a = "undefined" === typeof a.async ? !0 : !1;
    var t = function () {
      ORA.Debug.debug("xhrProtocol: request timed out ");
      d("xhrProtocol: request timed out");
    };
    "string" === typeof b && (b = JSON.parse(b));
    try {
      var q = new XMLHttpRequest();
      "withCredentials" in q
        ? (a && (q.onreadystatechange = this.xhrRespHandler(q, c, d)),
          q.open(g, k, a),
          (q.withCredentials = !0))
        : ((q = new XDomainRequest()), a && (q.onload = e(q)), q.open(g, k, a));
      "GET" !== g && f && q.setRequestHeader("Content-type", f);
      q.onerror = d;
      q.ontimeout = t;
      q.send(JSON.stringify(b));
    } catch (w) {
      ORA.Debug.debug("No CORS Support or Disabled"), d(w);
    }
  },
  createEndpointUrl: function (a, b, c) {
    var d = [],
      e = function (g, k) {
        var t = k,
          q = function (w) {
            return "function" === typeof encodeURIComponent
              ? encodeURIComponent(w)
              : escape(w);
          };
        c.i18n && "" !== c.exre && !c.exre.test(g) && (t = q(t));
        return (
          g +
          "\x3d" +
          (function (w, l) {
            var m = w;
            if ("" !== l) {
              if (null === m || void 0 === m) return "";
              m = m.toString();
              for (var h in l)
                l[h] instanceof RegExp && (m = m.replace(l[h], h));
              return m;
            }
            return escape(m);
          })(t, c.re)
        );
      };
    b.dcsdat = new Date().getTime();
    for (var f in b) b.hasOwnProperty(f) && d.push(e(f, b[f]));
    0 < d.length && (a += "?" + d.join("\x26"));
    (b = ORA.common._getIEVer()) &&
      9 > b &&
      2048 < a.length &&
      ((a = a.substring(0, 2040) + "\x26wt.tu\x3d1"),
      ORA.Debug.debug(
        "Warning: exceeded max size of limit 2047. Truncating payload."
      ));
    return a;
  },
  gifProtocol: function (a, b, c, d) {
    var e = a.endpoint,
      f = a.conf || {},
      g = !1,
      k = a.timeout || 2e3,
      t = c || function () {},
      q = d || function () {};
    if (!b) throw Error("Payload is not defined");
    if (
      ORA.common._isOptedOut() &&
      a.protocolType &&
      "default" !== a.protocolType
    )
      return (
        ORA.Debug.debug("Sending no data due to opted out"),
        (g = !0),
        ORA.common.invokeFn(q),
        !0
      );
    a = ORA.common.protocols.createEndpointUrl(e, b, f);
    b = new Image();
    b.onload = function () {
      if (!g) return (g = !0), ORA.common.invokeFn(t), !0;
    };
    b.onerror = function () {
      if (!g) return (g = !0), ORA.common.invokeFn(q), !0;
    };
    window.setTimeout(function () {
      g || ((g = !0), ORA.common.invokeFn(q));
    }, k);
    ORA.Debug.debug("gifProtocol sending:" + a);
    b.src = a;
    return !0;
  },
  xhrProtocol: function (a, b, c, d, e) {
    var f = !1,
      g = a.endpoint,
      k = a.type || "GET",
      t = e || "application/json;charset\x3dUTF-8";
    e || (t = "application/json;charset\x3dUTF-8");
    var q = function (w) {
      if (!f) {
        ORA.Debug.trace("xhrProtocol: handling response\x3d'" + w + "'");
        if (b)
          try {
            b(w);
          } catch (l) {
            ORA.Debug.debug(
              "xhrProtocol: error calling success callback: " + l.message
            );
          }
        f = !0;
      }
    };
    e = function (w) {
      if (!f) {
        ORA.Debug.error(w);
        if (c)
          try {
            c(w);
          } catch (l) {
            ORA.Debug.debug(
              "xhrProtocol: error calling failure callback: " + l.message
            );
          }
        f = !0;
      }
    };
    if (-1 === "GETPUTPATCHPOST".indexOf(k)) e("Unknown type of request: " + k);
    else {
      k = function (w) {
        return function () {
          ORA.Debug.trace(
            "xdrRespHandler response\x3d'" + w.responseText + "'"
          );
          q(w.responseText);
        };
      };
      try {
        this.makeRequest(a, d, q, e, k, t), ORA.Debug.debug("endpoint: " + g);
      } catch (w) {
        ORA.Debug.debug("Got an exception" + w);
      }
    }
  },
  beaconProtocol: {
    name: "beaconProtocol",
    protocol: function (a, b) {
      var c = a.endpoint,
        d = { events: [b] };
      "sendBeacon" in window.navigator
        ? ((c = navigator.sendBeacon(c, JSON.stringify(d))),
          ORA.Debug.debug("navigator send " + c))
        : ((a.type = "POST"),
          (a.async = !1),
          ORA.common.protocols.makeRequest(a, d));
    },
  },
  xhrRespHandler: function (a, b, c) {
    return function () {
      try {
        if (200 === a.status)
          switch (a.readyState) {
            case 0:
            case 1:
            case 2:
            case 3:
              ORA.Debug.superfine(
                "xhrProtocol: in progress, state: " + a.readyState
              );
              break;
            case 4:
              ORA.Debug.debug("xhrProtocol: response received");
              b(a.responseText);
              break;
            default:
              ORA.Debug.debug(
                "xhrProtocol: unusual readyState\x3d" + a.readyState
              );
          }
        else
          4 === a.readyState &&
            c(
              "xhrProtocol xhrResponseHandler:  communication error, http(cor) status: " +
                a.status +
                " response'" +
                a.responseText
            );
      } catch (d) {
        c(d);
      }
    };
  },
};
ORA.common.isFn = function (a) {
  return "[object Function]" === Object.prototype.toString.call(a);
};
ORA.common.isArray = function (a) {
  return "object" === typeof a && a instanceof Array;
};
ORA.common.isRegExp = function (a) {
  return "object" === typeof a && a.constructor === RegExp;
};
ORA.common.invokeFn = function (a, b) {
  try {
    b ? a(b) : a();
  } catch (c) {
    ORA.Debug.error("Error Invoking function " + c);
  }
};
ORA.common.extendArray = function (a) {
  a &&
    (a.forEach ||
      (a.forEach = function (b, c) {
        for (var d = c || window, e = 0, f = this.length; e < f; ++e)
          b.call(d, this[e], e, this);
      }),
    a.filter ||
      (a.filter = function (b, c) {
        for (
          var d = c || window,
            e = ORA.common.extendArray([]),
            f = 0,
            g = this.length;
          f < g;
          ++f
        )
          b.call(d, this[f], f, this) && e.push(this[f]);
        return e;
      }),
    a.indexOf ||
      (a.indexOf = function (b) {
        for (var c = 0; c < this.length; ++c) if (this[c] === b) return c;
        return -1;
      }));
  return a;
};
ORA.common.extendObject = function (a) {
  a &&
    (a.forEach ||
      (a.forEach = function (b, c) {
        var d = c || window,
          e;
        for (e in this)
          this.hasOwnProperty(e) &&
            a.forEach !== a[e] &&
            a.length !== a[e] &&
            b.call(d, this[e], e, this);
      }),
    a.length ||
      (a.length = function () {
        var b = 0,
          c;
        for (c in this)
          this.hasOwnProperty(c) && "function" !== typeof this[c] && b++;
        return b;
      }));
  return a;
};
ORA.common.isEmpty = function (a) {
  if (!a || (Object.keys && 0 === Object.keys(a).length)) return !0;
  for (var b in a)
    if (a.hasOwnProperty(b)) {
      if ("" === b && "undefined" === typeof a[b]) break;
      return !1;
    }
  return !0;
};
ORA.common.objectToKVPArray = function (a) {
  var b = [],
    c;
  for (c in a)
    a.hasOwnProperty(c) &&
      "" !== a[c] &&
      void 0 !== a[c] &&
      "function" !== typeof a[c] &&
      b.push({ k: c, v: a[c] });
  return b;
};
ORA.common.extendProps = function (a, b, c) {
  for (var d in b) if (c || "undefined" === typeof a[d]) a[d] = b[d];
  return a;
};
ORA.common.JSONPrettify = function (a) {
  try {
    if ("undefined" !== typeof JSON) return JSON.stringify(a, null, 2);
  } catch (b) {
    ORA.Debug.debug(b.toString());
  }
};
ORA.common.trim = function (a) {
  return a.trim
    ? a.trim()
    : a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};
ORA.common.getAttrIfExistsElseDefault = function (a, b, c) {
  if (ORA.hasVal(a[b])) return a[b];
  if (ORA.hasVal(c)) return c;
  throw "ORA.common.getAttrIfExistsElseDefault: missing fieldName: " + b;
};
ORA.common.isInteger = function (a) {
  isNaN(a) ? (a = !1) : ((a = parseFloat(a)), (a = a === a));
  return a;
};
ORA.common.getObjId = function (a) {
  var b = [],
    c = a,
    d = function (f) {
      for (var g = 1; f.previousElementSibling; )
        g++, (f = f.previousElementSibling);
      return g;
    },
    e = function (f) {
      return window.CSS && window.CSS.escape ? window.CSS.escape(f) : f;
    };
  if (a.id) return "#" + e(c.id);
  for (; c.parentNode; )
    if (c.id) {
      b.unshift("#" + e(c.id));
      break;
    } else
      c === c.ownerDocument.documentElement
        ? b.unshift(c.tagName)
        : ((a = d(c)), b.unshift(c.tagName + ":nth-child(" + a + ")")),
        (c = c.parentNode);
  return b.join(" \x3e ");
};
ORA.common.getObjIdStrict = function (a) {
  for (var b = []; a.parentNode; ) {
    if (a === a.ownerDocument.documentElement) b.unshift(a.tagName);
    else {
      for (var c = 1, d = a; d.previousElementSibling; )
        c++, (d = d.previousElementSibling);
      b.unshift(a.tagName + ":nth-child(" + c + ")");
    }
    a = a.parentNode;
  }
  return b.join(" \x3e ");
};
ORA.common._qsaEscape = function (a) {
  if (null === a || void 0 === a || "string" !== typeof a) return a;
  for (var b = "", c = 0; c < a.length; ) {
    var d = a.charAt(c);
    d = /\s/g.test(d)
      ? ""
      : /[ !"#$%&'()*+,./;<=>?@\[\\\]^`{|}~:]/.test(d)
      ? "\\" + d
      : d;
    b += d;
    c++;
  }
  /^_/.test(b) && (b = "\\_" + b.slice(1));
  /^-[-\d]/.test(b) && (b = "\\-" + b.slice(1));
  a = a.charAt(0);
  /\d/.test(a) && (b = "\\3" + a + " " + b.slice(1));
  return b;
};
ORA.common._getClassAttrValue = function (a) {
  var b = "";
  a && "string" === typeof a.className && (b = a.className);
  return b.replace(/^\s+/, "").replace(/\s+$/, "");
};
ORA.common._isDynamicClass = function (a) {
  var b = /\d{4}/i.test(a) || /cet-responsive-\d+/i.test(a) || /^owid/i.test(a);
  a = !!~["active", "hovered"].indexOf(a);
  return b || a;
};
ORA.common._getClasses = function (a) {
  a = ORA.common._getClassAttrValue(a).split(" ");
  for (var b = [], c = 0; c < a.length; c++)
    a[c] &&
      !ORA.common._isDynamicClass(a[c]) &&
      b.push(ORA.common._qsaEscape(a[c]));
  return b;
};
ORA.common._isYuiDynamicId = function (a) {
  return /\s+/i.test(a)
    ? !0
    : /ember\d+/i.test(a)
    ? !0
    : /yui_/i.test(a)
    ? !0
    : /^owid/i.test(a)
    ? !0
    : /\d{4}/i.test(a)
    ? !0
    : /anonymous_element_\d+/i.test(a)
    ? !0
    : !1;
};
ORA.common._getTheSameSiblings = function (a, b) {
  for (
    var c = a.parentNode,
      d = Array.prototype.slice.call(c.querySelectorAll(b)),
      e = [],
      f = 0;
    f < d.length;
    f++
  ) {
    var g = d[f];
    0 <= Array.prototype.indexOf.call(c.children, g) && e.push(g);
  }
  return e;
};
ORA.common._getSubSelectorByClasses = function (a, b, c) {
  if (1 === a.length) return c;
  var d = c;
  a = Array.prototype.indexOf.call(a, b);
  for (b = 0; b < a; b++) d += "~" + c;
  d += ":not(" + c;
  for (b = 0; b < a + 1; b++) d += "~" + c;
  return d + ")";
};
ORA.common._getSubSelectorByTagWithIndex = function (a, b, c) {
  if (1 === a.length) return c;
  a = Array.prototype.indexOf.call(a, b);
  return c + ":nth-of-type(" + (a + 1) + ")";
};
ORA.common._getUniqueId = function (a, b) {
  if (b && b.id) {
    var c = ORA.common._qsaEscape(b.id);
    if (c && !ORA.common._isYuiDynamicId(b.id)) {
      var d = c;
      /^\d/gi.test(b.id) && (d = b.id);
      if (1 === a.querySelectorAll('[id\x3d"' + d + '"]').length) return c;
    }
  }
  return null;
};
ORA.common._filterUniqueClasses = function (a, b) {
  for (
    var c = "", d = 0;
    d < b.length &&
    (!b[d] ||
      "-" === b[d] ||
      ((c += "." + b[d]), 1 !== a.querySelectorAll(c).length));
    d++
  );
  return c;
};
ORA.common.getObjIdClasses = function (a) {
  if (!a || ("object" !== typeof a && 1 !== a.nodeType) || !a.ownerDocument)
    return "";
  var b = a,
    c = [];
  for (a = a.ownerDocument.documentElement; b.parentNode && b !== a; ) {
    var d = ORA.common._getUniqueId(a, b);
    if (d) {
      c.unshift("#" + d);
      break;
    }
    d = ORA.common._getClasses(b);
    if (d.length) {
      d = ORA.common._filterUniqueClasses(a, d);
      if (1 === a.querySelectorAll(d).length) {
        c.unshift(d);
        break;
      }
      var e = ORA.common._getTheSameSiblings(b, d);
      d = ORA.common._getSubSelectorByClasses(e, b, d);
      c.unshift(d);
    } else
      (d = b.tagName.toLowerCase().replace(":", "\\:")),
        (e = ORA.common._getTheSameSiblings(b, d)),
        (d = ORA.common._getSubSelectorByTagWithIndex(e, b, d)),
        c.unshift(d);
    b = b.parentNode;
  }
  return c.join(" \x3e ");
};
ORA.common.encode = function (a) {
  for (
    var b = [],
      c = function (e) {
        var f = [],
          g;
        for (g in e)
          e.hasOwnProperty(g) &&
            (f.push(String(g)), f.push(encodeURIComponent(e[g])));
        return f.join(",");
      },
      d = 0;
    d < a.length;
    d++
  )
    b.push(c(a[d]));
  return b.join(":");
};
ORA.common.decode = function (a) {
  var b = [],
    c = function (e) {
      e = e.split(",");
      for (var f = {}, g = 0; g < e.length; g += 2)
        f[e[g]] = decodeURIComponent(e[g + 1]);
      return f;
    };
  a = a.split(":");
  for (var d = 0; d < a.length; d++) b.push(c(a[d]));
  return b;
};
ORA.common.isFpcSet = function (a, b) {
  var c = ORA.common._getCookieAsObj,
    d = ORA.common.isEmpty;
  c = c(a);
  return d(c) ? 2 : b === c.id ? 0 : 3;
};
ORA.common.addEventListenersOnDOMElement = function (a, b, c) {
  a.addEventListener ? a.addEventListener(b, c) : a.addEvent("on" + b, c);
};
ORA.common.getChildNodes = function (a, b) {
  return a.querySelectorAll ? a.querySelectorAll(b) : [];
};
ORA.common.triggerMutationCallback = function (a, b, c, d) {
  var e = a;
  "FORM" === a.nodeName && (e = a.parentNode);
  a = ORA.common.getChildNodes;
  d = a(e, d);
  0 < d.length ? c(d, b) : ORA.Debug.debug("dom has changed", "ANA-FT");
};
ORA.common.getMutationObserver = function (a, b, c) {
  return new MutationObserver(function (d) {
    var e = ORA.common.triggerMutationCallback;
    if (a)
      for (var f = 0; f < d.length; ++f)
        for (var g = 0; g < d[f].addedNodes.length; ++g)
          e(d[f].addedNodes[g], b, c, a);
    else c(b);
  });
};
ORA.common.addMutationObserver = function (a, b, c) {
  try {
    if ("undefined" === typeof MutationObserver)
      return (
        ORA.Debug.error("browser does not support MutationObserver", 303), null
      );
    var d = ORA.common.getMutationObserver;
    d(c, a, b).observe(document.documentElement || document.body, {
      attributes: !0,
      childList: !0,
      subtree: !0,
    });
    return !0;
  } catch (e) {
    return (
      ORA.Debug.debug(
        "createObserver:  MutationObserver API unavailable",
        "Common"
      ),
      null
    );
  }
};
ORA.common.isElementInViewport = function (a) {
  if ("hidden" === a.style.visibility) return !1;
  var b = a.getBoundingClientRect().left,
    c = a.getBoundingClientRect().top,
    d = window.innerWidth + (window.scrollX || document.body.scrollLeft) || 0,
    e = a.clientWidth;
  a = a.clientHeight;
  return (
    c <
      (window.innerHeight + (window.scrollY || document.body.scrollTop) || 0) &&
    0 < c + a &&
    b < d &&
    0 < b + e
  );
};
ORA.common.scrollEventCallback = function (a) {
  this.documentObject ||
    ((this.documentObject = {}),
    (this.documentObject.de = document.documentElement),
    (this.documentObject.db = document.body),
    (this.documentObject.hs =
      "CSS1Compat" === document.compatMode
        ? this.documentObject.de.clientHeight || window.innerHeight || 0
        : this.documentObject.db.clientHeight || 0));
  window.scrollTracker || (window.scrollTracker = {});
  a = Number(
    ((this.documentObject.hs +
      (window.pageYOffset ||
        (this.documentObject.de && this.documentObject.de.scrollTop) ||
        this.documentObject.db.scrollTop)) /
      Math.max(
        this.documentObject.db.scrollHeight,
        this.documentObject.de.scrollHeight,
        this.documentObject.db.offsetHeight,
        this.documentObject.de.offsetHeight,
        this.documentObject.db.clientHeight,
        this.documentObject.de.clientHeight
      )) *
      (100 / a)
  ).toFixed(0);
  ORA.Debug.debug("Quartile value " + a, "COMMON");
  return a;
};
ORA.common.getSelectedOption = function (a) {
  return a.selectedOptions
    ? a.selectedOptions[0].value
    : a.options[a.selectedIndex].text;
};
ORA.common.readDOMValue = function (a) {
  if (a)
    switch (a.nodeName) {
      case "SELECT":
        return ORA.common.getSelectedOption(a);
      case "INPUT":
        return a.value;
      default:
        return a.innerText;
    }
  else return "NO_VALUE_FOUND";
};
ORA.common.getValueFromDOM = function (a, b, c) {
  if ("undefined" !== typeof a) {
    if (b)
      return (
        (b = c.parentNode.querySelector(a)) || (b = document.querySelector(a)),
        ORA.common.readDOMValue(b)
      );
    b = document.querySelectorAll(a);
    a = [];
    for (c = 0; c < b.length; c++) a.push(ORA.common.readDOMValue(b[c]));
    return a.join(";");
  }
  return "NO_VALUE_FOUND";
};
ORA.common.CommManagerClass = function () {
  var a = {};
  this.OTS = "ots";
  this.JSONP = "jsonp";
  this.GIF = "gif";
  var b = (this.DEFAULT = "default"),
    c = ORA.common.protocols.gifProtocol;
  this.execReq = function (d) {
    if (d.isSendEnabled()) {
      if (0 === d.endpoints.length) {
        ORA.Debug.debug("Warning: no endpoint for " + JSON.stringify(d));
        return;
      }
      for (var e = 0; e < d.endpoints.length; e++) {
        var f = d.endpoints[e];
        var g = f.desc ? f.desc : "";
        var k = f.protocolType || b;
        if (!k) throw "Unable to determine protocol from message " + g;
        (g = a[k])
          ? g(f, d.payload, d.success, d.fail)
          : ORA.Debug.error(
              "No comm protocol registered for msg:'" +
                JSON.stringify(d, null, 2) +
                "'"
            );
      }
    } else
      ORA.Debug.trace(
        "Payload is not being sent, the sendDisasble flag is set :" +
          JSON.stringify(d, null, 2)
      ),
        ORA.common.invokeFn(d.success);
    ORA.fireEvent(
      new ORA.Event(ORA.Event.COMMON_COM_EXEC_REQ, ORA.Event.STATUS_SUCCESS)
    );
  };
  this.setProtocol = function (d, e, f) {
    a[d] &&
      ORA.Debug.debug("warning: protocol '+name+' exists, so overwriting");
    f && !0 === f && (b = d);
    ORA.Debug.debug("setProtocol() - name: " + d);
    ORA.Debug.trace("setProtocol() - protocol: " + e.toString());
    a[d] = e;
  };
  this.removeProtocol = function (d, e) {
    a[d]
      ? (delete a[d], ORA.Debug.debug("removing protocol: " + d))
      : ORA.Debug.debug(
          "warning: delete of protocol " + d + ", because doesn't exist"
        );
  };
  this.getProtocol = function (d) {
    return a[d] ? a[d] : null;
  };
  this.setProtocol(this.DEFAULT, c);
};
ORA.common.CommManager = new ORA.common.CommManagerClass();
ORA.common.Message = function (a) {
  var b = this;
  if (!a.endpoints)
    throw Error("Message created w/o endpoint, params: " + JSON.stringify(a));
  if (!a.payload)
    throw Error("Message created w/o payload, params: " + JSON.stringify(a));
  for (var c = 0; c < a.endpoints; c++)
    if (!a.endpoints[c].endpoint)
      throw Error(
        "Message must contain an endpoint" + JSON.stringfy(a.endpoints)
      );
  b.params = JSON.parse(JSON.stringify(a));
  b.endpoints = this.params.endpoints;
  b.payload = this.params.payload;
  b.desc = this.params.desc;
  if (a.success) var d = a.success;
  if (a.fail) var e = a.fail;
  b.params.userDefinedParams &&
    (b.userDefinedParams = b.params.userDefinedParams);
  var f = function (k, t) {
    try {
      "undefined" !== typeof k && k(b, t);
    } catch (q) {
      ORA.Debug.error("Failure in message callback for: " + b.desc);
    }
  };
  b.fail = function (k) {
    f(e, k);
  };
  b.success = function (k) {
    f(d, k);
  };
  b.setParam = function (k, t, q) {
    ORA.hasVal(k) && ORA.hasVal(t)
      ? ((k = k.toLowerCase()),
        "undefined" !== typeof b.payload[k] && !0 !== q
          ? ORA.Debug.trace(
              "Not overriding payload param '" + k + "' to '" + t + "'"
            )
          : (b.payload[k] = t))
      : ORA.Debug.error("setParam - missing either key or val, not setting");
  };
  b.getParam = function (k) {
    if (!k) return ORA.Debug.error("getParam - missing key"), null;
    k = k.toLowerCase();
    return "undefined" === typeof b.payload[k] ? null : b.payload[k];
  };
  var g = !0;
  b.sendDisable = function () {
    g = !1;
  };
  b.sendEnable = function () {
    g = !0;
  };
  b.isSendEnabled = function () {
    return g;
  };
};
ORA.common.MutationMgrClass = function () {
  var a = (function () {
    var b = {},
      c = { 1: {}, 2: {}, 3: {} };
    b.put = function (d, e, f) {
      var g = 2;
      "undefined" !== typeof f && (g = f);
      null !== b.get(d) &&
        (ORA.Debug.debug(
          "Warning: mutant id: ' " +
            d +
            "' already registered, overwriting mutation and priority "
        ),
        b.rm(d));
      c[g][d] = e;
    };
    b.get = function (d) {
      for (var e in c) if (c[e][d]) return c[e][d];
      return null;
    };
    b.rm = function (d) {
      for (var e in c) c[e][d] && delete c[e][d];
    };
    b.getMutationQueue = function () {
      var d = new ORA.common.Queue(),
        e = function (f, g, k) {
          d.enqueue({ id: g, mutant: k[g] });
        };
      ORA.common.extendObject(c[1]).forEach(e);
      ORA.common.extendObject(c[2]).forEach(e);
      ORA.common.extendObject(c[3]).forEach(e);
      return d;
    };
    return b;
  })();
  this.register = function (b, c, d) {
    try {
      a.get(b) &&
        ORA.Debug.debug(
          "Warning:  " + b + " has a registered mutation, overwriting"
        ),
        a.put(b, c, d),
        ORA.Debug.debug(
          "mutant id: '" + b + "' registered per mutant registration act"
        ),
        ORA.Debug.superfine("mutation: '" + c + "'");
    } catch (e) {
      ORA.Debug.error(
        "Error:  MutationMgr unable to register mutation id: " +
          b +
          ", mutation: " +
          c,
        null,
        e
      );
    }
  };
  this.deregister = function (b) {
    try {
      a.get(b) &&
        (a.rm(b), ORA.Debug.debug("mutant id: '" + b + "' deregistered"));
    } catch (c) {
      ORA.Debug.error(
        "Error:  MutationMgr unable to deregister mutation id: " + b,
        null,
        c
      );
    }
  };
  this.getMutation = function (b) {
    return a.get(b) ? a.get(b) : null;
  };
  this.mutate = function (b) {
    try {
      for (var c = a.getMutationQueue(), d; !c.isEmpty(); ) {
        d = c.dequeue();
        ORA.Debug.superfine(
          "mutant: '" +
            d.id +
            "', before(unmutated) msg: " +
            ORA.common.JSONPrettify(b)
        );
        if (b.params && "collect" === b.params.desc) {
          var e = "analyticsAnnotate" === d.id,
            f = b.params.applyMutations || !1,
            g = b.params.sendSessionInfo || void 0 === b.params.sendSessionInfo;
          (f || g) && ((g && e) || (f && !e)) && d.mutant(b);
        } else d.mutant(b);
        ORA.Debug.trace("mutant: '" + d.id + "' has processed msg");
        ORA.Debug.superfine(
          "mutant: '" +
            d.id +
            "', after(mutated) msg: " +
            ORA.common.JSONPrettify(b)
        );
      }
    } catch (k) {
      ORA.Debug.error(
        "Problem with mutation error: '" + k + "'",
        "019",
        k,
        "mutationMgrClass"
      );
    }
  };
  this.listMutations = function () {
    for (var b = a.getMutationQueue(), c = [], d; !b.isEmpty(); )
      (d = b.dequeue()), ORA.Debug.debug(JSON.stringify(d)), c.push(d);
    return c;
  };
};
ORA.common.Queue = function () {
  var a = [],
    b = 0;
  this.getLength = function () {
    return a.length - b;
  };
  this.isEmpty = function () {
    return 0 === a.length;
  };
  this.enqueue = function (c) {
    a.push(c);
  };
  this.dequeue = function () {
    if (0 !== a.length) {
      var c = a[b];
      2 * ++b >= a.length && ((a = a.slice(b)), (b = 0));
      return c;
    }
  };
  this.peek = function () {
    if (0 < a.length) return a[b];
  };
};
ORA.common.TrackingPipelineClass = function () {
  var a = !0,
    b = this,
    c = {},
    d = 0,
    e = {},
    f = !1,
    g = new ORA.common.Queue(),
    k = new ORA.common.CommManagerClass(),
    t = new ORA.common.MutationMgrClass(),
    q = ORA.common.Message;
  this.registerProduct = function (l, m, h) {
    if (!l) throw Error("Product must have a name");
    if (c[l]) ORA.Debug.debug("Product " + l + "already registered");
    else {
      var n = {
        name: l,
        timeout: 4e3,
        timedOutCallback: function () {},
        ready: !1,
        timedOut: !1,
      };
      "undefined" !== typeof m && (n.timeout = m);
      h && (n.timedOutCallback = h);
      c[n.name] = n;
      d++;
      ORA.Debug.debug("registering product " + n.name + " to TrackingPipeline");
      var r = this;
      window.setTimeout(function () {
        if (
          !n.ready &&
          ((n.timedOut = !0),
          r.productCountDown(),
          ORA.Debug.debug("Product " + JSON.stringify(n) + " timed out"),
          n.timedOutCallback)
        )
          try {
            n.timedOutCallback();
          } catch (p) {
            ORA.Debug.error("Failure in product callback for: " + n);
          }
      }, n.timeout);
    }
  };
  this.getProduct = function (l) {
    return c[l];
  };
  this.productIsReady = function (l) {
    if (c[l]) {
      var m = c[l];
      !0 === m.ready
        ? ORA.Debug.debug("Product " + m.name + " is already 'ready'")
        : m.timedOut
        ? ORA.Debug.debug("Product " + m.name + " has timed out")
        : ((m.ready = !0),
          ORA.Debug.debug("Pipeline product: " + l + " set to ready"),
          this.productCountDown());
    } else
      ORA.Debug.debug("Product " + l + " isn't registered. Can't set to ready");
  };
  this.getProductCount = function () {
    return d;
  };
  this.productCountDown = function () {
    0 !== d && d--;
    if (0 === d && !1 === f) {
      if (!0 === a) {
        var l = new q({
          endpoints: [],
          desc: "seed message",
          payload: b.getSeedMsgPayload(),
          mutation: { pageview: !0 },
        });
        b.enqueue(l);
        ORA.Debug.debug("TrackingPipeline enqueued the seed msg");
      } else ORA.Debug.trace("Seed Message disabled, not enqueueing");
      this.flush();
    }
  };
  var w = function (l) {
    var m = ORA.common._getConfigObject();
    m = (m && m.DNTBehavior) || "honorDNT";
    if (ORA.common._isDNTSet())
      switch (m) {
        case "honorDNT":
          ORA.Debug.debug(
            "*** DNTBehavior: DNT is set in the browser - canceling payload ***"
          );
          return;
        case "anonymize":
          l.payload.dcsipa = "1";
          ORA.Debug.debug(
            "DNTBehavior: DNT is set to anonymize the session, adding dcsipa\x3d1 to payload"
          );
          break;
        case "ignoreDNT":
          ORA.common._isDNTSet() &&
            ORA.Debug.debug(
              "DNTBehavior: DNTBehavior is set to ignore the browser DNT setting"
            );
      }
    t.mutate(l);
    k.execReq(l);
  };
  this.enqueue = function (l) {
    if (!l) throw Error("Message isn't defined!");
    ORA.Debug.trace("enqueueing message: " + JSON.stringify(l, null, 2));
    g.enqueue(l);
    return 1;
  };
  this.flush = function () {
    for (; !g.isEmpty(); ) {
      var l = g.dequeue();
      w(l);
    }
    this.enqueue = function (m) {
      w(m);
    };
    f = !0;
    ORA.fireEvent(
      new ORA.Event(ORA.Event.COMMON_TRACKING_FLUSH, ORA.Event.STATUS_SUCCESS)
    );
    ORA.Debug.debug("TrackingPipeline has been flushed");
  };
  this.getLength = g.getLength;
  this.setCommProtocol = k.setProtocol;
  this.removeCommProtocol = k.removeProtocol;
  this.getCommProtocol = k.getProtocol;
  this.registerMutation = t.register;
  this.deregisterMutation = t.deregister;
  this.getMutation = t.getMutation;
  this.listMutations = t.listMutations;
  this.registerProducts = function () {
    if (ORA && ORA.getTrackingPipelineProducts) {
      var l = ORA.getTrackingPipelineProducts(),
        m;
      for (m in l) l.hasOwnProperty(m) && this.registerProductWithTimeout(l, m);
    }
  };
  this.registerProductWithTimeout = function (l, m) {
    l[m].timeout
      ? this.registerProduct(l[m].name, l[m].timeout)
      : this.registerProduct(l[m].name);
  };
  this.disableSeed = function () {
    ORA.Debug.debug(
      "Seed Message disabled, initial seed message will not be enqueued"
    );
    a = !1;
  };
  this.seedMsgEnabled = function () {
    return a;
  };
  this.setSeedMsgPayload = function (l) {
    e = l;
  };
  this.getSeedMsgPayload = function () {
    return e;
  };
  this.hasFlushed = function () {
    return f;
  };
};
ORA.common.PluginMgrClass = function (a) {
  var b = this,
    c = a || "ora-plugins",
    d,
    e = {},
    f = new ORA.common.CountDownLatchClass(0, null, c + ":PluginMgrClass"),
    g = 0,
    k = !1,
    t = !1;
  b.setReady = function () {
    t = !0;
  };
  b.isReady = function () {
    return t;
  };
  b.getPlugin = function (l) {
    return e[l] ? e[l] : null;
  };
  b.clearPlugins = function () {
    e = {};
    f.reset();
  };
  b.setInjectConfigsCb = function (l) {
    d = l;
  };
  b.setInitPluginsCallback = function (l) {
    f.await(l);
  };
  b.setNumExpectedPlugins = function (l) {
    ORA.Debug.trace("setNumExpectedPlugins(" + l + ")", c);
    f.setCount(l);
    g = l;
  };
  b.getNumPluginsToLoad = function () {
    return g;
  };
  var q = function () {
      ORA.Debug.debug("asyncReady initPluginLatch.countDown()", c);
      f.countDown();
    },
    w = function (l) {
      ORA.common.isFn(l) ? l() : ORA.common._functionFactory(l)();
    };
  b._listPlugins = function () {
    ORA.Debug.info(JSON.stringify(e), c);
    return e;
  };
  b.initPlugins = function () {
    if (!0 !== k) {
      k = !0;
      var l = function (m, h) {
        var n = h.initCb,
          r = h.async,
          p = h.blockFlag,
          u = h.successCb,
          v = h.failCb,
          x = function () {
            !0 !== (e[m] && ORA.hasVal(e[m].succeeded)) &&
              (ORA.Debug.debug("Running fail callback for '" + m + "'", c),
              v(),
              ORA.Debug.debug("plugin fail initPluginLatch.countDown()", c),
              f.countDown());
          },
          y = window.setTimeout(x, h.timeout),
          z = function () {
            ORA.Debug.debug("Running success callback for '" + m + "'", c);
            u();
            e[m] && (e.succeeded = !0);
            window.clearTimeout(y);
          };
        p =
          !0 === p
            ? function () {
                try {
                  n(h, q), z();
                } catch (A) {
                  ORA.Debug.error("Error executing '" + m, "'", c), x();
                }
              }
            : function () {
                try {
                  n(h),
                    z(),
                    ORA.Debug.debug(
                      "plugin success initPluginLatch.countDown()",
                      c
                    ),
                    f.countDown();
                } catch (A) {
                  ORA.Debug.error("Error executing '" + m, "'", c), x();
                }
              };
        !0 === r ? window.setTimeout(p, 0) : p();
      };
      ORA.common.extendObject(e).forEach(function (m, h) {
        ORA.Debug.debug("pluginMgr running init for " + h, c);
        var n = ORA.common.isFn;
        try {
          n(m.initCb) && l(h, m);
        } catch (r) {
          ORA.Debug.error(
            "pluginMgr problem in init of '" + h + "' " + r.toString(),
            c
          );
        }
      });
    }
  };
  b._regPlugin = function (l, m, h, n) {
    var r = {};
    h && (r = h);
    h = ORA.common.isFn;
    var p = ORA.common.extendObject,
      u = "ora-plugins";
    n && (u = n);
    ORA.Debug.debug("Start process of registering Plugin " + l, c);
    h(d) &&
      p(d(l, u)).forEach(function (x, y) {
        r[y] = x;
      });
    n = function () {
      ORA.Debug.error(
        "plugin: " + u + ":" + l + " init callback execution has failed",
        c
      );
    };
    h = function () {
      ORA.Debug.debug(
        "plugin: " + u + ":" + l + " init callback has executed successfully",
        c
      );
    };
    p = !1;
    void 0 !== r.blockCollect && (p = r.blockCollect);
    var v = null;
    ORA.common.isFn(m) && (v = m);
    m = {
      initCb: v,
      blockFlag: p,
      timeout: r.timeout || 4e3,
      async: !1 !== r.async,
      successCb: ORA.common._functionFactory(r.success) || h,
      failCb: ORA.common._functionFactory(r.fail) || n,
      config: r,
      pluginName: l,
    };
    e[l]
      ? ORA.Debug.debug(
          "Plugin " + l + " is a duplicate - over writing with new plugin",
          c
        )
      : ORA.Debug.debug("Plugin " + l + " is a new - adding new plugin", c);
    e[l] = m;
    g--;
    ORA.Debug.debug("loadPlugin Count is " + g, c);
    b.checkInitReady();
  };
  b.checkInitReady = function () {
    if (0 >= g && !1 === k) {
      var l = ORA.Event.ANA_HOSTED_PLUGINS_LOADED;
      "ora-plugins" === c && (l = ORA.Event.ANA_ORA_PLUGINS_LOADED);
      ORA.fireEvent(new ORA.Event(l, ORA.Event.STATUS_SUCCESS));
      ORA.Debug.trace(
        "checkInitReady:  loadPluginCount(" +
          g +
          "), plugins have loaded so running initPlugins()",
        c
      );
      b.initPlugins();
    } else
      ORA.Debug.trace(
        "checkInitReady:  loadPluginCount(" +
          g +
          "), not running initPlugins()",
        c
      );
  };
  b.processHostedPlugins = function (l) {
    ORA.Debug.debug("Processing Hosted Plugins " + JSON.stringify(l), c);
    var m = function (v, x) {
        x.loaded = !0;
        ORA.Debug.debug("Executing function (" + v + ")", c);
        return function () {
          try {
            w(v);
          } catch (y) {
            ORA.Debug.debug("Hosted plugin execution failed: " + y.message, c),
              f.countDown(),
              x.fail && w(x.fail);
          }
        };
      },
      h = function (v) {
        return function () {
          v.loaded ||
            (ORA.Debug.debug(
              "Hosted Plugin " + v.pluginName + " src:" + v.src + " timed out",
              c
            ),
            (v.timedout = !0),
            f.countDown(),
            v.fail && w(v.fail));
        };
      },
      n = function (v, x) {
        var y = x.src,
          z;
        (z = ORA.common.isFn(y)) ||
          ((z = y.split("/")), (z = !/\.js$/i.test(z.pop())));
        z
          ? (ORA.Debug.debug(
              "Plugin " + v + " is a function - executing function",
              c
            ),
            window.setTimeout(m(y, x)(y, x), 1))
          : (ORA.Debug.debug(
              "Plugin " +
                v +
                " is a hosted script " +
                y +
                " - executing loadJS()",
              c
            ),
            ORA.analytics.loadJS(y, x.async || !0));
      },
      r;
    for (r in l)
      if (l.hasOwnProperty(r) && "function" !== typeof l[r]) {
        var p = l[r],
          u = !0;
        void 0 !== p.enable && (u = p.enable);
        u
          ? ((p.pluginName = r),
            (p.loaded = !1),
            ORA.Debug.debug("Found Hosted Plugin " + r + " Processing", c),
            (ORA.analytics.plugins[r] = p),
            n(r, p),
            p.timeout || (p.timeout = 4e3),
            window.setTimeout(h(p), p.timeout))
          : (f.countDown(), ORA.Debug.debug("Plugin " + r + " is disabled", c));
      }
  };
};
(function () {
  ORA.Debug.superfine = ORA.Debug.superfine;
  ORA.Debug.trace = ORA.Debug.trace;
  ORA.Debug.error = ORA.Debug.error;
  ORA.Debug.debug = ORA.Debug.debug;
  ORA.Debug.info = ORA.Debug.info;
  var a = function (c, d) {
      var e = {};
      ORA.common.extendObject(c).forEach(function (f, g) {
        var k = g.toLowerCase();
        e[k] = f;
      });
      void 0 === e["wt.dl"] && d && (e["wt.dl"] = d);
      return e;
    },
    b = function () {
      var c = function (f) {
          var g = ORA.common.TrackingPipeline,
            k = new ORA.common.Message(f);
          g.enqueue(k);
          ORA.Debug.debug("Common enqueued: '" + f.desc + "'", "COMMON");
        },
        d = function (f, g, k) {
          ORA.Debug.info("ORA." + g);
          var t = (function (h) {
              h =
                h && h.params && h.params.config && h.params.config.endpoints
                  ? h.params.config.endpoints
                  : [];
              ORA.common.extendArray(h).forEach(function (n, r, p) {
                n.protocolType || (p[r].protocolType = "gif");
              });
              return h;
            })(f),
            q = (function (h) {
              var n = {};
              h && h.params && h.params.data && (n = h.params.data);
              h = ORA.common.extendObject(n);
              return a(h, k);
            })(f),
            w,
            l;
          f &&
            f.params &&
            f.params.config &&
            f.params.config.callbacks &&
            f.params.config.callbacks.success &&
            (w = f.params.config.callbacks.success);
          f &&
            f.params &&
            f.params.config &&
            f.params.config.callbacks &&
            f.params.config.callbacks.fail &&
            (l = f.params.config.callbacks.fail);
          var m = {};
          m[g] = !0;
          return ORA.paramsMerge(f.params.config, {
            endpoints: t,
            desc: g,
            payload: q,
            mutation: m,
            success: w,
            fail: l,
          });
        },
        e = function () {
          ORA.common.TrackingPipeline = void 0;
          ORA.common.pluginMgr = void 0;
          ORA.hasVal(ORA.common.id.hasStarted) &&
            !0 === ORA.common.id.hasStarted &&
            (ORA.common.id.hasStarted = !1);
          ORA.common.PageAnalyzeMutant = void 0;
        };
      ORA.addEventHandler(ORA.Event.LOADER_CLICK, function (f) {
        var g = d(f, "click", 1);
        f.params && f.params.config && f.params.config.testAlias
          ? (g.testAlias = f.params.config.testAlias)
          : f.params &&
            f.params.testAlias &&
            (g.testAlias = f.params.testAlias);
        f.params && f.params.config && f.params.config.conversionPoint
          ? (g.conversionPoint = f.params.config.conversionPoint)
          : f.params &&
            f.params.conversionPoint &&
            (g.conversionPoint = f.params.conversionPoint);
        g.userDefinedParams = f.params;
        c(g);
      });
      ORA.addEventHandler(ORA.Event.LOADER_COLLECT, function (f) {
        f = d(f, "collect", 0);
        c(f);
      });
      ORA.addEventHandler(ORA.Event.LOADER_VIEW, function (f) {
        f = d(f, "view", 0);
        c(f);
      });
      ORA.addEventHandler(ORA.Event.LOADER_RESET, e);
      ORA.addEventHandler(ORA.Event.LOADER_PRE_EXECUTE, function (f) {
        e();
        f = f.params && ORA.hasVal(f.params) ? f.params : {};
        ORA.common.setup(f);
      });
    };
  ORA.cookieMgr = new ORA.common.CookieMgrClass();
  ORA.common._setCookie = ORA.cookieMgr.setCookie;
  ORA.common._getCookieAsObj = ORA.cookieMgr.getCookieAsObj;
  ORA.common._deleteCookie = ORA.cookieMgr.deleteCookie;
  ORA.common._getCookieRaw = ORA.cookieMgr.getCookie;
  ORA.common._createCookie = ORA.cookieMgr.createCookie;
  ORA.common._doesCookieExist = ORA.cookieMgr.doesCookieExist;
  ORA.common.setup = function (c) {
    ORA.Debug.debug("Common setup() started");
    ORA.common.TrackingPipeline = new ORA.common.TrackingPipelineClass();
    ORA.common.TrackingPipeline.setSeedMsgPayload(a(c && c.data ? c.data : {}));
    ORA.common.pluginMgr = new ORA.common.PluginMgrClass("ora-plugins");
    ORA.common.hostedPluginMgr = new ORA.common.PluginMgrClass(
      "hosted-plugins"
    );
    c = new ORA.common.mutations.PageAnalyze();
    ORA.common.PageAnalyzeMutant = c;
    ORA.common.TrackingPipeline.registerProducts();
    ORA.common.TrackingPipeline.setCommProtocol(
      ORA.common.protocols.collectionV2Post.name,
      ORA.common.protocols.collectionV2Post.protocol
    );
    ORA.common.TrackingPipeline.setCommProtocol(
      ORA.common.protocols.beaconProtocol.name,
      ORA.common.protocols.beaconProtocol.protocol
    );
    ORA.common.TrackingPipeline.registerMutation(
      "pageAnalyzeMutant",
      c.mutation,
      1
    );
    b();
    ORA.Debug.debug("Common setup() finished", "COMMON");
  };
  ORA.isOptedOut = ORA.common._isOptedOut;
  ORA.setInfinityOptOut = ORA.common._setInfinityOptOut;
  ORA.setCookie = ORA.common._setCookie;
  ORA.deleteCookie = ORA.common._deleteCookie;
  ORA.getCookieRaw = ORA.getCookie = ORA.common._getCookieRaw;
  ORA.getCookieAsObj = ORA.common._getCookieAsObj;
  ORA.doesCookieExist = ORA.common._doesCookieExist;
  ORA.getIEVer = ORA.common._getIEVer;
  ORA.JSONPrettify = ORA.common.JSONPrettify;
  ORA.extendObject = ORA.common.extendObject;
  ORA.getQryParams = ORA.common.getQryParams;
  ORA.getClientID = ORA.common.clientID.getClientID;
  ORA.setClientID = ORA.common.clientID.setClientID;
  ORA.clearClientID = ORA.common.clientID.clearClientID;
})();
ORA.common.mutations.PageAnalyze = function (a) {
  a = a || {};
  var b = /WT\.|DCSEXT\.|DCS\./,
    c = /ORA\./,
    d = {},
    e = {},
    f = {},
    g = {},
    k = 0,
    t = a.window || window,
    q = a.document || window.document,
    w = a.navigator || window.navigator,
    l = a.location || window.location;
  this.errorLog = function (p) {
    ORA.Debug.error("", 101, p, "PageAnalyze");
  };
  var m = function () {
      ORA.Debug.trace("Running defaultMeta()", "Common");
      ORA.common.visitMetaTags(function (p, u) {
        null !== p.toUpperCase().match(b) && (d[p.split(".")[1]] = u);
      }, q);
    },
    h = function () {
      ORA.Debug.trace("Running altMeta()", "Common");
      ORA.common.visitMetaTags(function (p, u) {
        null !== p.toUpperCase().match(c) && (g[p] = u);
      }, q);
    },
    n = function () {
      d = {};
      e = {};
      f = {};
      g = {};
      ORA.Debug.debug("Running Page Analysis", "Common");
      ORA.Debug.trace("Running StandardParams", "Common");
      var p = new Date();
      d.tz = parseInt((p.getTimezoneOffset() / 60) * -1, 10) || "0";
      d.bh = p.getHours() || "0";
      d.ul = w.language || w.userLanguage;
      "object" === typeof screen &&
        ((d.cd =
          "Netscape" === w.appName ? screen.pixelDepth : screen.colorDepth),
        (d.sr = screen.width + "x" + screen.height));
      "boolean" === typeof w.javaEnabled() &&
        (w.javaEnabled() ? (d.jo = "Yes") : (d.jo = "No"));
      q.title &&
        (d.ti = t.RegExp
          ? q.title.replace(
              new RegExp("^" + l.protocol + "//" + l.hostname + "\\s-\\s"),
              ""
            )
          : q.title);
      d.js = "Yes";
      var u = 0,
        v = 0;
      "number" === typeof t.innerWidth
        ? ((u = t.innerWidth), (v = t.innerHeight))
        : q.documentElement &&
          (q.documentElement.clientWidth || q.documentElement.clientHeight)
        ? ((u = q.documentElement.clientWidth),
          (v = q.documentElement.clientHeight))
        : q.body &&
          (q.body.clientWidth || q.body.clientHeight) &&
          ((u = q.body.clientWidth), (v = q.body.clientHeight));
      d.bs = u + "x" + v;
      d.dl = 0;
      0 === l.protocol.indexOf("https:") ? (d.ssl = "1") : (d.ssl = "0");
      e.dcsdat = p.getTime();
      e.dcssip = l.hostname;
      e.dcsuri = l.pathname;
      d.es = e.dcssip + e.dcsuri;
      "" === q.referrer ||
        "-" === q.referrer ||
        ("Microsoft Internet Explorer" === w.appName &&
          4 > parseInt(w.appVersion, 10)) ||
        (e.dcsref = q.referrer);
      m();
      h();
      k++;
    },
    r = function (p, u, v) {
      for (var x in u)
        if (u.hasOwnProperty(x)) {
          var y = ORA.hasVal(v) ? v + x : x;
          !ORA.hasVal(p.getParam(x)) &&
            u.hasOwnProperty(x) &&
            p.setParam(y, u[x]);
        }
    };
  this.mutation = function (p) {
    p.params.mutation && !0 === p.params.mutation.runAnalysis && n();
    r(p, e);
    r(p, f);
    r(p, d, "WT.");
    r(p, g);
    ORA.Debug.debug("Annotating Common Page Analysis", "Common");
    ORA.Debug.trace(ORA.common.JSONPrettify(p.payload), "Common");
  };
  this.data = function () {
    return { dcs: e, trackingData: d, dcsExt: f, altMetaData: g, runCount: k };
  };
  n();
};
ORA.common.QueryParamCacheClass = function () {
  var a = ORA.common.extendObject,
    b = a({});
  this.reset = function (c) {
    var d = "";
    c
      ? (d = c)
      : window &&
        window.location &&
        window.location.search &&
        (d = window.location.search);
    b = a(ORA.common.getQryParams(d));
  };
  this.clear = function () {
    b = a({});
  };
  this.getCache = function () {
    return b;
  };
  this.contains = function (c, d) {
    if (d) {
      var e = !1;
      b.forEach(function (f, g) {
        "string" === typeof c &&
          "string" === typeof g &&
          g.toLowerCase() === c.toLowerCase() &&
          (e = !0);
      });
      return e;
    }
    return "undefined" !== typeof b[c];
  };
  this.set = function (c, d) {
    b[c] = d;
  };
  this.reset();
};
ORA.common.QueryParamCache = new ORA.common.QueryParamCacheClass();
(function () {
  var a = !1,
    b = !1,
    c = ORA.common.extendObject({}),
    d = ORA.common.mobile;
  d.enableMobileMode = function () {
    a = !0;
  };
  d.disableMobileMode = function () {
    a = !1;
  };
  d.inMobileMode = function () {
    return a;
  };
  d.setNativeAppCkTx = function () {
    b = !0;
  };
  d.isNativeAppCkTx = function () {
    return b;
  };
  d.reset = function () {
    a = !1;
    c = ORA.common.extendObject({});
  };
  d.delay = function (e, f, g) {
    var k = 3e3;
    g && g.mobileDelayTimeout && (k = g.mobileDelayTimeout);
    var t = function () {
      try {
        ORA.Debug.trace(
          f + ": executing callback: " + e.toString(),
          "MOBILE_HYBRID"
        ),
          e();
      } catch (q) {
        ORA.Debug.error("Error in mobile delayed callback for: " + f, 301, q);
      }
    };
    g && !0 === g.mobileDelay
      ? (d.setNativeAppCkTx(),
        d.enableMobileMode(),
        ORA.Debug.debug(
          f +
            ": to delay until ORA.common.mobile.resume() or time in " +
            k +
            " ms ",
          "MOBILE_HYBRID"
        ),
        (c[f] = { cb: t, timer: window.setTimeout(t, k) }))
      : (ORA.Debug.debug(
          f + ": no mobileDelay flag so executing cb immediately",
          "MOBILE_HYBRID"
        ),
        e());
  };
  d.resume = function () {
    c.forEach(function (e, f) {
      window.clearTimeout(e.timer);
      ORA.Debug.debug(
        "ORA.common.mobile.resume() called, executing callback for " + f,
        "MOBILE_HYBRID"
      );
      e.cb();
    });
    c = ORA.common.extendObject({});
  };
  d.nativeAppCkWrite = function (e) {
    var f = "wtapp://cookie?data\x3d" + JSON.stringify(e);
    if (
      "undefined" !== typeof window.external &&
      "undefined" !== typeof window.external.Notify
    )
      window.external.Notify(f);
    else {
      var g = document.createElement("iframe");
      g.setAttribute("src", f);
      g.setAttribute("style", "display:none;");
      g.setAttribute("frameborder", "0");
      g.setAttribute("height", "0px");
      g.setAttribute("width", "0px");
      document.getElementsByTagName("body")[0].appendChild(g);
      g.parentNode.removeChild(g);
    }
    ORA.Debug.superfine("Wrote cookie to native app", "MOBILE_HYBRID");
    ORA.Debug.superfine(
      "cookies to Native App: " + JSON.stringify(e),
      "MOBILE_HYBRID"
    );
  };
  d.nativeAppCkSend = function (e) {
    try {
      if (!0 !== d.isNativeAppCkTx() || !0 !== d.inMobileMode())
        ORA.Debug.superfine(
          "Do not try to write cookies to app because 'nativeAppCkTx' is false or not in 'mobileMode'",
          "MOBILE_HYBRID"
        );
      else if (e && e.name && e.value) {
        var f = {};
        f[e.name] = {
          value: e.value,
          path: e.path,
          domain: e.domain,
          date: e.date,
          type: e.type,
          timeout: e.timeout,
        };
        d.nativeAppCkWrite(f);
      } else
        ORA.Debug.superfine(
          "Not writing to native app, missing cookie info",
          "MOBILE_HYBRID"
        ),
          ORA.Debug.superfine(
            "mapCookieInfo: " + JSON.stringify(e),
            "MOBILE_HYBRID"
          );
    } catch (g) {
      ORA.Debug.error(
        "Problem sending cookie to hybrid app",
        "300",
        g,
        "MOBILE_HYBRID"
      );
    }
  };
  d.cookiesWrite = function (e, f, g) {
    try {
      if (e) {
        var k = f || window.location.hostname;
        f = g || "/";
        for (var t in e)
          if (e.hasOwnProperty(t)) {
            var q = e[t];
            ORA.common._createCookie(
              t,
              q.value,
              q.timeout || null,
              q.type,
              k,
              f
            );
          }
      }
    } catch (w) {
      ORA.Debug.error(
        "Problem in hybrid writing cookie",
        "302",
        w,
        "MOBILE_HYBRID"
      );
    } finally {
      ORA.Debug.debug("setting Native App Cookie Write"),
        d.setNativeAppCkTx(),
        d.resume();
    }
  };
})();
ORA.setExecuteState("common", "ready");
ORA.fireEvent(
  new ORA.Event(ORA.Event.COMMON_LOAD_COMPLETE, ORA.Event.STATUS_SUCCESS),
  !0
);
ORA.fireEvent(
  new ORA.Event(ORA.Event.COMMON_PRODUCT_READY, ORA.Event.STATUS_SUCCESS),
  !0
);
ORA.getQryParams = ORA.common.getQryParams;
